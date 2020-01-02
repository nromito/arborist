const t = require('tap')
const Arborist = require('../../lib/arborist/index.js')
const a = new Arborist({ path: '/some/kind/of/path' })
const b = new Arborist()
t.equal(a.path, '/some/kind/of/path')
t.equal(b.path, process.cwd())
t.match(a, {
  buildIdealTree: Function,
  reify: Function,
  loadActual: Function,
  loadVirtual: Function,
})
