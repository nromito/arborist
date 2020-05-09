const Arborist = require('../../lib/arborist')
const t = require('tap')
const {resolve} = require('path')
const fixture = resolve(__dirname, '../fixtures/install-types')
const swonlyfixture = resolve(__dirname, '../fixtures/install-types-sw-only')
const badfixture = resolve(__dirname, '../fixtures/root')
const pnpmFixture = resolve(__dirname, '../fixtures/pnpm')
const depTypesFixture = resolve(__dirname, '../fixtures/dev-deps')
const bundleFixture = resolve(__dirname, '../fixtures/two-bundled-deps')
const emptyFixture = resolve(__dirname, '../fixtures/empty-with-shrinkwrap')
const linkedMeta = resolve(__dirname, '../fixtures/cli-750')
const oldMeta = resolve(__dirname, '../fixtures/old-package-lock')
const Shrinkwrap = require('../../lib/shrinkwrap.js')
const Node = require('../../lib/node.js')

// two little helper functions to make the loaded trees
// easier to look at in the snapshot results.
const printEdge = (edge, inout) => ({
  name: edge.name,
  type: edge.type,
  spec: edge.spec,
  ...(inout === 'in' ? {
    from: edge.from && edge.from.location,
  } : {
    to: edge.to && edge.to.location,
  }),
  ...(edge.error ? { error: edge.error } : {}),
  __proto__: { constructor: edge.constructor },
})

const printTree = tree => ({
  name: tree.name,
  package: {
    name: tree.package.name,
    version: tree.package.version,
  },
  location: tree.location,
  resolved: tree.resolved,
  ...(tree.extraneous ? { extraneous: true } : {
    ...(tree.dev ? { dev: true } : {}),
    ...(tree.optional ? { optional: true } : {}),
    ...(tree.devOptional && !tree.dev && !tree.optional
      ? { devOptional: true } : {}),
    ...(tree.peer ? { peer: true } : {}),
  }),
  ...(tree.inBundle ? { bundled: true } : {}),
  ...(tree.error
    ? {
      error: {
        code: tree.error.code,
        ...(tree.error.path ? { path: relative(__dirname, tree.error.path) }
          : {}),
      }
    } : {}),
  ...(tree.isLink ? {
    target: {
      name: tree.target.name,
      parent: tree.target.parent && tree.target.parent.location
    }
  } : {}),
  ...(tree.inBundle ? { bundled: true } : {}),
  ...(tree.edgesIn.size ? {
    edgesIn: new Set([...tree.edgesIn]
      .sort((a, b) => a.from.location.localeCompare(b.from.location))
      .map(edge => printEdge(edge, 'in'))),
  } : {}),
  ...(tree.edgesOut.size ? {
    edgesOut: new Map([...tree.edgesOut.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([name, edge]) => [name, printEdge(edge, 'out')]))
  } : {}),
  ...( tree.target || !tree.children.size ? {}
    : {
      children: new Map([...tree.children.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([name, tree]) => [name, printTree(tree)]))
    }),
  __proto__: { constructor: tree.constructor },
})

const { format } = require('tcompare')

const cwd = process.cwd()
t.cleanSnapshot = s => s.split(cwd).join('{CWD}')

const loadVirtual = path => new Arborist({path}).loadVirtual()

t.test('load from fixture', t =>
  loadVirtual(fixture).then(virtualTree => {
    t.matchSnapshot(printTree(virtualTree), 'loaded virtual tree from fixture')
    return new Arborist({ path: fixture, virtualTree}).loadVirtual()
      .then(tree2 => t.equal(tree2, virtualTree, 'same tree reused'))
  }))

t.test('load from root that already has shrinkwrap', t =>
  Shrinkwrap.load(fixture).then(meta => {
    const root = new Node({
      path: fixture,
      pkg: require(fixture + '/package.json'),
      meta,
    })
    return new Arborist({path: fixture}).loadVirtual({root})
      .then(virtualTree => t.equal(virtualTree, root))
  }))

t.test('tree with link deps of link deps', t =>
  t.resolveMatchSnapshot(loadVirtual(linkedMeta).then(printTree)))

t.test('load from cwd', t => {
  const cwd = process.cwd()
  t.teardown(() => process.chdir(cwd))
  process.chdir(fixture)
  return loadVirtual().then(tree =>
    t.matchSnapshot(printTree(tree), 'loaded virtual tree from fixture'))
})

t.test('loading without a package-lock fails', t =>
  t.rejects(loadVirtual(badfixture), {
    message: 'loadVirtual requires existing shrinkwrap file',
  }))

t.test('load from npm-shrinkwrap.json', t => {
  const fs = require('fs')
  const lock = require(fixture + '/package-lock.json')
  const pkg = require(fixture + '/package.json')
  const path = t.testdir({
    'npm-shrinkwrap.json': JSON.stringify(lock),
    'package.json': JSON.stringify(pkg),
  })
  return loadVirtual(path).then(tree =>
    t.matchSnapshot(printTree(tree), 'loaded virtual tree from fixture'))
})

t.test('load without a root package.json is fine', t => {
  return loadVirtual(swonlyfixture).then(tree =>
    t.matchSnapshot(printTree(tree), 'loaded virtual no package json'))
})

t.test('load a tree with some links to nodes outside of node_modules', t =>
  loadVirtual(pnpmFixture).then(tree =>
    t.matchSnapshot(printTree(tree), 'loaded virtual tree with fsParents')))

t.test('load a tree with optional and dev dependencies', t =>
  loadVirtual(depTypesFixture).then(tree =>
    t.matchSnapshot(printTree(tree), 'loaded virtual tree with dev/optional deps')))

t.test('load a tree with a bunch of bundles', t =>
  loadVirtual(bundleFixture).then(tree =>
    t.matchSnapshot(printTree(tree), 'virtual tree with multiple bundles')))

t.test('load a tree with an empty dep set and a lockfile', t =>
  loadVirtual(emptyFixture).then(tree =>
    t.matchSnapshot(printTree(tree), 'virtual tree with no deps')))

t.test('load a tree with a v1 lockfile', t =>
  loadVirtual(oldMeta).then(tree =>
    t.matchSnapshot(printTree(tree), 'virtual tree with v1 shronk')))

t.test('workspaces', t => {
  t.test('load a simple example', t =>
    loadVirtual(
      resolve(__dirname, '../fixtures/workspaces-simple-virtual')
    ).then(tree =>
      t.matchSnapshot(printTree(tree), 'virtual tree with multiple bundles')))

  t.test('load shared dependencies example', t =>
    loadVirtual(
      resolve(__dirname, '../fixtures/workspaces-shared-deps-virtual')
    ).then(tree =>
      t.matchSnapshot(printTree(tree), 'virtual tree with shared dependencies')))

  t.test('load conflicting dep versions example', t => 
    loadVirtual(
      resolve(__dirname, '../fixtures/workspaces-conflicting-versions-virtual')
    ).then(tree =>
      t.matchSnapshot(printTree(tree), 'virtual tree with resolved conflicting dependencies')))

  t.test('load prefer linking nested workspaces', t => 
    loadVirtual(
      resolve(__dirname, '../fixtures/workspaces-prefer-linking-virtual')
    ).then(tree =>
      t.matchSnapshot(printTree(tree), 'virtual tree linking to local workspaces')))

  t.test('load installed from registry on version not satisfied', t =>
    loadVirtual(
      resolve(__dirname, '../fixtures/workspaces-version-unsatisfied-virtual')
    ).then(tree =>
      t.matchSnapshot(printTree(tree), 'virtual tree with deduped dep')))


  t.test('load linked top level nested workspaces', t =>
    loadVirtual(
      resolve(__dirname, '../fixtures/workspaces-top-level-link-virtual')
    ).then(tree =>
      t.matchSnapshot(printTree(tree), 'virtual tree top level dep')))

  t.test('load installed workspace with transitive dependencies', t =>
    loadVirtual(
      resolve(__dirname, '../fixtures/workspaces-transitive-deps-virtual')
    ).then(tree =>
      t.matchSnapshot(printTree(tree), 'virtual tree with transitive deps')))

  t.test('load installed tree with ignored nested node_modules folders', t =>
    loadVirtual(
      resolve(__dirname, '../fixtures/workspaces-ignore-nm-virtual')
    ).then(tree =>
      t.matchSnapshot(printTree(tree), 'virtual tree ignoring nested node_modules')))

  t.end()
})
