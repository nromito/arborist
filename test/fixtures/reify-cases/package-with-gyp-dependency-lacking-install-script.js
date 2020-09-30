// generated from test/fixtures/package-with-gyp-dependency-lacking-install-script
module.exports = t => {
  const path = t.testdir({
  "node_modules": {
    "nan": {
      "CHANGELOG.md": `# NAN ChangeLog

**Version 2.14.1: current Node 14.0.0, Node 0.12: 0.12.18, Node 0.10: 0.10.48, iojs: 3.3.1**

### 2.14.1 Apr 21 2020

  - Bugfix: use GetBackingStore() instead of GetContents() (#888) 2c023bd447661a61071da318b0ff4003c3858d39

### 2.14.0 May 16 2019

  - Feature: Add missing methods to Nan::Maybe<T> (#852) 4e962489fb84a184035b9fa74f245f650249aca6

### 2.13.2 Mar 24 2019

  - Bugfix: remove usage of deprecated \`IsNearDeath\` (#842) fbaf42252af279c3d867c6b193571f9711c39847

### 2.13.1 Mar 14 2019

  - Bugfix: check V8 version directly instead of inferring from NMV (#840) 12f9df9f393285de8fb4a8cd01478dc4fe3b089d

### 2.13.0 Mar 13 2019

  - Feature: add support for node master (#831) 113c0282072e7ff4f9dfc98b432fd894b798c2c

### 2.12.1 Dec 18 2018

  - Bugfix: Fix build breakage with Node.js 10.0.0-10.9.0. (#833) 625e90e8fef8d39ffa7247250a76a100b2487474

### 2.12.0 Dec 16 2018

  - Bugfix: Add scope.Escape() to Call() (#817) 2e5ed4fc3a8ac80a6ef1f2a55099ab3ac8800dc6
  - Bugfix: Fix Node.js v10.12.0 deprecation warnings. 509859cc23b1770376b56550a027840a2ce0f73d
  - Feature: Allow SetWeak() for non-object persistent handles. (#824) e6ef6a48e7e671fe3e4b7dddaa8912a3f8262ecd

### 2.11.1 Sep 29 2018

  - Fix: adapt to V8 7.0 24a22c3b25eeeec2016c6ec239bdd6169e985447

### 2.11.0 Aug 25 2018

  - Removal: remove \`FunctionCallbackInfo::Callee\` for nodejs \`>= 10\` 1a56c0a6efd4fac944cb46c30912a8e023bda7d4
  - Bugfix: Fix \`AsyncProgressWorkerBase::WorkProgress\` sends invalid data b0c764d1dab11e9f8b37ffb81e2560a4498aad5e
  - Feature: Introduce \`GetCurrentEventLoop\` b4911b0bb1f6d47d860e10ec014d941c51efac5e
  - Feature: Add \`NAN_MODULE_WORKER_ENABLED\` macro as a replacement for \`NAN_MODULE\` b058fb047d18a58250e66ae831444441c1f2ac7a

### 2.10.0 Mar 16 2018

  - Deprecation: Deprecate \`MakeCallback\` 5e92b19a59e194241d6a658bd6ff7bfbda372950
  - Feature: add \`Nan::Call\` overload 4482e1242fe124d166fc1a5b2be3c1cc849fe452
  - Feature: add more \`Nan::Call\` overloads 8584e63e6d04c7d2eb8c4a664e4ef57d70bf672b
  - Feature: Fix deprecation warnings for Node 10 1caf258243b0602ed56922bde74f1c91b0cbcb6a

### 2.9.2 Feb 22 2018

  - Bugfix: Bandaid for async hooks 212bd2f849be14ef1b02fc85010b053daa24252b

### 2.9.1 Feb 22 2018

  - Bugfix: Avoid deprecation warnings in deprecated \`Nan::Callback::operator()\` 372b14d91289df4604b0f81780709708c45a9aa4
  - Bugfix: Avoid deprecation warnings in \`Nan::JSON\` 3bc294bce0b7d0a3ee4559926303e5ed4866fda2

### 2.9.0 Feb 22 2018

  - Deprecation: Deprecate legacy \`Callback::Call\` 6dd5fa690af61ca3523004b433304c581b3ea309
  - Feature: introduce \`AsyncResource\` class 90c0a179c0d8cb5fd26f1a7d2b1d6231eb402d48o
  - Feature: Add context aware \`Nan::Callback::Call\` functions 7169e09fb088418b6e388222e88b4c13f07ebaee
  - Feature: Make \`AsyncWorker\` context aware 066ba21a6fb9e2b5230c9ed3a6fc51f1211736a4
  - Feature: add \`Callback\` overload to \`Nan::Call\` 5328daf66e202658c1dc0d916c3aaba99b3cc606
  - Bugfix: fix warning: suggest parentheses around \`&&\` within \`||\` b2bb63d68b8ae623a526b542764e1ac82319cb2c
  - Bugfix: Fix compilation on io.js 3 d06114dba0a522fb436f0c5f47b994210968cd7b

### 2.8.0 Nov 15 2017

  - Deprecation: Deprecate \`Nan::ForceSet\` in favor of \`Nan::DefineOwnProperty()\` 95cbb976d6fbbba88ba0f86dd188223a8591b4e7
  - Feature: Add \`Nan::AsyncProgressQueueWorker\` a976636ecc2ef617d1b061ce4a6edf39923691cb
  - Feature: Add \`Nan::DefineOwnProperty()\` 95cbb976d6fbbba88ba0f86dd188223a8591b4e7
  - Bugfix: Fix compiling on io.js 1 & 2 82705a64503ce60c62e98df5bd02972bba090900
  - Bugfix: Use DefineOwnProperty instead of ForceSet 95cbb976d6fbbba88ba0f86dd188223a8591b4e7

### 2.7.0 Aug 30 2017

  - Feature: Add \`Nan::To<v8::Function>()\` overload. b93280670c9f6da42ed4cf6cbf085ffdd87bd65b
  - Bugfix: Fix ternary in \`Nan::MaybeLocal<T>::FromMaybe<S>()\`. 79a26f7d362e756a9524e672a82c3d603b542867

### 2.6.2 Apr 12 2017

  - Bugfix: Fix v8::JSON::Parse() deprecation warning. 87f6a3c65815fa062296a994cc863e2fa124867d

### 2.6.1 Apr 6 2017

  - Bugfix: nan_json.h: fix build breakage in Node 6 ac8d47dc3c10bfbf3f15a6b951633120c0ee6d51

### 2.6.0 Apr 6 2017

  - Feature: nan: add support for JSON::Parse & Stringify b533226c629cce70e1932a873bb6f849044a56c5

### 2.5.1 Jan 23 2017

  - Bugfix: Fix disappearing handle for private value 6a80995694f162ef63dbc9948fbefd45d4485aa0
  - Bugfix: Add missing scopes a93b8bae6bc7d32a170db6e89228b7f60ee57112
  - Bugfix: Use string::data instead of string::front in NewOneByteString d5f920371e67e1f3b268295daee6e83af86b6e50

### 2.5.0 Dec 21 2016

  - Feature: Support Private accessors a86255cb357e8ad8ccbf1f6a4a901c921e39a178
  - Bugfix: Abort in delete operators that shouldn't be called 0fe38215ff8581703967dfd26c12793feb960018

### 2.4.0 Jul 10 2016

  - Feature: Rewrite Callback to add Callback::Reset c4cf44d61f8275cd5f7b0c911d7a806d4004f649
  - Feature: AsyncProgressWorker: add template types for .send 1242c9a11a7ed481c8f08ec06316385cacc513d0
  - Bugfix: Add constness to old Persistent comparison operators bd43cb9982c7639605d60fd073efe8cae165d9b2

### 2.3.5 May 31 2016

  - Bugfix: Replace NAN_INLINE with 'inline' keyword. 71819d8725f822990f439479c9aba3b240804909

### 2.3.4 May 31 2016

  - Bugfix: Remove V8 deprecation warnings 0592fb0a47f3a1c7763087ebea8e1138829f24f9
  - Bugfix: Fix new versions not to use WeakCallbackInfo::IsFirstPass 615c19d9e03d4be2049c10db0151edbc3b229246
  - Bugfix: Make ObjectWrap::handle() const d19af99595587fe7a26bd850af6595c2a7145afc
  - Bugfix: Fix compilation errors related to 0592fb0a47f3a1c7763087ebea8e1138829f24f9 e9191c525b94f652718325e28610a1adcf90fed8

### 2.3.3 May 4 2016

  - Bugfix: Refactor SetMethod() to deal with v8::Templates (#566) b9083cf6d5de6ebe6bcb49c7502fbb7c0d9ddda8

### 2.3.2 Apr 27 2016

  - Bugfix: Fix compilation on outdated versions due to Handle removal f8b7c875d04d425a41dfd4f3f8345bc3a11e6c52

### 2.3.1 Apr 27 2016

  - Bugfix: Don't use deprecated v8::Template::Set() in SetMethod a90951e9ea70fa1b3836af4b925322919159100e

### 2.3.0 Apr 27 2016

  - Feature: added Signal() for invoking async callbacks without sending data from AsyncProgressWorker d8adba45f20e077d00561b20199133620c990b38
  - Bugfix: Don't use deprecated v8::Template::Set() 00dacf0a4b86027415867fa7f1059acc499dcece

### 2.2.1 Mar 29 2016

  - Bugfix: Use NewFromUnsigned in ReturnValue<T>::Set(uint32_t i) for pre_12 3a18f9bdce29826e0e4c217854bc476918241a58
  - Performance: Remove unneeeded nullptr checks b715ef44887931c94f0d1605b3b1a4156eebece9

### 2.2.0 Jan 9 2016

  - Feature: Add Function::Call wrapper 4c157474dacf284d125c324177b45aa5dabc08c6
  - Feature: Rename GC*logueCallback to GCCallback for > 4.0 3603435109f981606d300eb88004ca101283acec
  - Bugfix: Fix Global::Pass for old versions 367e82a60fbaa52716232cc89db1cc3f685d77d9
  - Bugfix: Remove weird MaybeLocal wrapping of what already is a MaybeLocal 23b4590db10c2ba66aee2338aebe9751c4cb190b

### 2.1.0 Oct 8 2015

  - Deprecation: Deprecate NanErrnoException in favor of ErrnoException 0af1ca4cf8b3f0f65ed31bc63a663ab3319da55c
  - Feature: added helper class for accessing contents of typedarrays 17b51294c801e534479d5463697a73462d0ca555
  - Feature: [Maybe types] Add MakeMaybe(...) 48d7b53d9702b0c7a060e69ea10fea8fb48d814d
  - Feature: new: allow utf16 string with length 66ac6e65c8ab9394ef588adfc59131b3b9d8347b
  - Feature: Introduce SetCallHandler and SetCallAsFunctionHandler 7764a9a115d60ba10dc24d86feb0fbc9b4f75537
  - Bugfix: Enable creating Locals from Globals under Node 0.10. 9bf9b8b190821af889790fdc18ace57257e4f9ff
  - Bugfix: Fix issue #462 where PropertyCallbackInfo data is not stored safely. 55f50adedd543098526c7b9f4fffd607d3f9861f

### 2.0.9 Sep 8 2015

  - Bugfix: EscapableHandleScope in Nan::NewBuffer for Node 0.8 and 0.10 b1654d7

### 2.0.8 Aug 28 2015

  - Work around duplicate linking bug in clang 11902da

### 2.0.7 Aug 26 2015

  - Build: Repackage

### 2.0.6 Aug 26 2015

  - Bugfix: Properly handle null callback in FunctionTemplate factory 6e99cb1
  - Bugfix: Remove unused static std::map instances 525bddc
  - Bugfix: Make better use of maybe versions of APIs bfba85b
  - Bugfix: Fix shadowing issues with handle in ObjectWrap 0a9072d

### 2.0.5 Aug 10 2015

  - Bugfix: Reimplement weak callback in ObjectWrap 98d38c1
  - Bugfix: Make sure callback classes are not assignable, copyable or movable 81f9b1d

### 2.0.4 Aug 6 2015

  - Build: Repackage

### 2.0.3 Aug 6 2015

  - Bugfix: Don't use clang++ / g++ syntax extension. 231450e

### 2.0.2 Aug 6 2015

  - Build: Repackage

### 2.0.1 Aug 6 2015

  - Bugfix: Add workaround for missing REPLACE_INVALID_UTF8 60d6687
  - Bugfix: Reimplement ObjectWrap from scratch to prevent memory leaks 6484601
  - Bugfix: Fix Persistent leak in FunctionCallbackInfo and PropertyCallbackInfo 641ef5f
  - Bugfix: Add missing overload for Nan::NewInstance that takes argc/argv 29450ed

### 2.0.0 Jul 31 2015

  - Change: Renamed identifiers with leading underscores	b5932b4
  - Change: Replaced NanObjectWrapHandle with class NanObjectWrap	464f1e1
  - Change: Replace NanScope and NanEscpableScope macros with classes	47751c4
  - Change: Rename NanNewBufferHandle to NanNewBuffer	6745f99
  - Change: Rename NanBufferUse to NanNewBuffer	3e8b0a5
  - Change: Rename NanNewBuffer to NanCopyBuffer	d6af78d
  - Change: Remove Nan prefix from all names	72d1f67
  - Change: Update Buffer API for new upstream changes	d5d3291
  - Change: Rename Scope and EscapableScope to HandleScope and EscapableHandleScope	21a7a6a
  - Change: Get rid of Handles	 e6c0daf
  - Feature: Support io.js 3 with V8 4.4
  - Feature: Introduce NanPersistent	7fed696
  - Feature: Introduce NanGlobal	4408da1
  - Feature: Added NanTryCatch	10f1ca4
  - Feature: Update for V8 v4.3	4b6404a
  - Feature: Introduce NanNewOneByteString	c543d32
  - Feature: Introduce namespace Nan	67ed1b1
  - Removal: Remove NanLocker and NanUnlocker	dd6e401
  - Removal: Remove string converters, except NanUtf8String, which now follows the node implementation b5d00a9
  - Removal: Remove NanReturn* macros	d90a25c
  - Removal: Remove HasInstance	e8f84fe


### 1.9.0 Jul 31 2015

  - Feature: Added \`NanFatalException\` 81d4a2c
  - Feature: Added more error types 4265f06
  - Feature: Added dereference and function call operators to NanCallback c4b2ed0
  - Feature: Added indexed GetFromPersistent and SaveToPersistent edd510c
  - Feature: Added more overloads of SaveToPersistent and GetFromPersistent 8b1cef6
  - Feature: Added NanErrnoException dd87d9e
  - Correctness: Prevent assign, copy, and move for classes that do not support it 1f55c59, 4b808cb, c96d9b2, fba4a29, 3357130
  - Deprecation: Deprecate \`NanGetPointerSafe\` and \`NanSetPointerSafe\` 81d4a2c
  - Deprecation: Deprecate \`NanBooleanOptionValue\` and \`NanUInt32OptionValue\` 0ad254b

### 1.8.4 Apr 26 2015

  - Build: Repackage

### 1.8.3 Apr 26 2015

  - Bugfix: Include missing header 1af8648

### 1.8.2 Apr 23 2015

  - Build: Repackage

### 1.8.1 Apr 23 2015

  - Bugfix: NanObjectWrapHandle should take a pointer 155f1d3

### 1.8.0 Apr 23 2015

  - Feature: Allow primitives with NanReturnValue 2e4475e
  - Feature: Added comparison operators to NanCallback 55b075e
  - Feature: Backport thread local storage 15bb7fa
  - Removal: Remove support for signatures with arguments 8a2069d
  - Correcteness: Replaced NanObjectWrapHandle macro with function 0bc6d59

### 1.7.0 Feb 28 2015

  - Feature: Made NanCallback::Call accept optional target 8d54da7
  - Feature: Support atom-shell 0.21 0b7f1bb

### 1.6.2 Feb 6 2015

  - Bugfix: NanEncode: fix argument type for node::Encode on io.js 2be8639

### 1.6.1 Jan 23 2015

  - Build: version bump

### 1.5.3 Jan 23 2015

  - Build: repackage

### 1.6.0 Jan 23 2015

 - Deprecated \`NanNewContextHandle\` in favor of \`NanNew<Context>\` 49259af
 - Support utility functions moved in newer v8 versions (Node 0.11.15, io.js 1.0) a0aa179
 - Added \`NanEncode\`, \`NanDecodeBytes\` and \`NanDecodeWrite\` 75e6fb9

### 1.5.2 Jan 23 2015

  - Bugfix: Fix non-inline definition build error with clang++ 21d96a1, 60fadd4
  - Bugfix: Readded missing String constructors 18d828f
  - Bugfix: Add overload handling NanNew<FunctionTemplate>(..) 5ef813b
  - Bugfix: Fix uv_work_cb versioning 997e4ae
  - Bugfix: Add function factory and test 4eca89c
  - Bugfix: Add object template factory and test cdcb951
  - Correctness: Lifted an io.js related typedef c9490be
  - Correctness: Make explicit downcasts of String lengths 00074e6
  - Windows: Limit the scope of disabled warning C4530 83d7deb

### 1.5.1 Jan 15 2015

  - Build: version bump

### 1.4.3 Jan 15 2015

  - Build: version bump

### 1.4.2 Jan 15 2015

  - Feature: Support io.js 0dbc5e8

### 1.5.0 Jan 14 2015

 - Feature: Support io.js b003843
 - Correctness: Improved NanNew internals 9cd4f6a
 - Feature: Implement progress to NanAsyncWorker 8d6a160

### 1.4.1 Nov 8 2014

 - Bugfix: Handle DEBUG definition correctly
 - Bugfix: Accept int as Boolean

### 1.4.0 Nov 1 2014

 - Feature: Added NAN_GC_CALLBACK 6a5c245
 - Performance: Removed unnecessary local handle creation 18a7243, 41fe2f8
 - Correctness: Added constness to references in NanHasInstance 02c61cd
 - Warnings: Fixed spurious warnings from -Wundef and -Wshadow, 541b122, 99d8cb6
 - Windoze: Shut Visual Studio up when compiling 8d558c1
 - License: Switch to plain MIT from custom hacked MIT license 11de983
 - Build: Added test target to Makefile e232e46
 - Performance: Removed superfluous scope in NanAsyncWorker f4b7821
 - Sugar/Feature: Added NanReturnThis() and NanReturnHolder() shorthands 237a5ff, d697208
 - Feature: Added suitable overload of NanNew for v8::Integer::NewFromUnsigned b27b450

### 1.3.0 Aug 2 2014

 - Added NanNew<v8::String, std::string>(std::string)
 - Added NanNew<v8::String, std::string&>(std::string&)
 - Added NanAsciiString helper class
 - Added NanUtf8String helper class
 - Added NanUcs2String helper class
 - Deprecated NanRawString()
 - Deprecated NanCString()
 - Added NanGetIsolateData(v8::Isolate *isolate)
 - Added NanMakeCallback(v8::Handle<v8::Object> target, v8::Handle<v8::Function> func, int argc, v8::Handle<v8::Value>* argv)
 - Added NanMakeCallback(v8::Handle<v8::Object> target, v8::Handle<v8::String> symbol, int argc, v8::Handle<v8::Value>* argv)
 - Added NanMakeCallback(v8::Handle<v8::Object> target, const char* method, int argc, v8::Handle<v8::Value>* argv)
 - Added NanSetTemplate(v8::Handle<v8::Template> templ, v8::Handle<v8::String> name , v8::Handle<v8::Data> value, v8::PropertyAttribute attributes)
 - Added NanSetPrototypeTemplate(v8::Local<v8::FunctionTemplate> templ, v8::Handle<v8::String> name, v8::Handle<v8::Data> value, v8::PropertyAttribute attributes)
 - Added NanSetInstanceTemplate(v8::Local<v8::FunctionTemplate> templ, const char *name, v8::Handle<v8::Data> value)
 - Added NanSetInstanceTemplate(v8::Local<v8::FunctionTemplate> templ, v8::Handle<v8::String> name, v8::Handle<v8::Data> value, v8::PropertyAttribute attributes)

### 1.2.0 Jun 5 2014

 - Add NanSetPrototypeTemplate
 - Changed NAN_WEAK_CALLBACK internals, switched _NanWeakCallbackData to class,
     introduced _NanWeakCallbackDispatcher
 - Removed -Wno-unused-local-typedefs from test builds
 - Made test builds Windows compatible ('Sleep()')

### 1.1.2 May 28 2014

 - Release to fix more stuff-ups in 1.1.1

### 1.1.1 May 28 2014

 - Release to fix version mismatch in nan.h and lack of changelog entry for 1.1.0

### 1.1.0 May 25 2014

 - Remove nan_isolate, use v8::Isolate::GetCurrent() internally instead
 - Additional explicit overloads for NanNew(): (char*,int), (uint8_t*[,int]),
     (uint16_t*[,int), double, int, unsigned int, bool, v8::String::ExternalStringResource*,
     v8::String::ExternalAsciiStringResource*
 - Deprecate NanSymbol()
 - Added SetErrorMessage() and ErrorMessage() to NanAsyncWorker

### 1.0.0 May 4 2014

 - Heavy API changes for V8 3.25 / Node 0.11.13
 - Use cpplint.py
 - Removed NanInitPersistent
 - Removed NanPersistentToLocal
 - Removed NanFromV8String
 - Removed NanMakeWeak
 - Removed NanNewLocal
 - Removed NAN_WEAK_CALLBACK_OBJECT
 - Removed NAN_WEAK_CALLBACK_DATA
 - Introduce NanNew, replaces NanNewLocal, NanPersistentToLocal, adds many overloaded typed versions
 - Introduce NanUndefined, NanNull, NanTrue and NanFalse
 - Introduce NanEscapableScope and NanEscapeScope
 - Introduce NanMakeWeakPersistent (requires a special callback to work on both old and new node)
 - Introduce NanMakeCallback for node::MakeCallback
 - Introduce NanSetTemplate
 - Introduce NanGetCurrentContext
 - Introduce NanCompileScript and NanRunScript
 - Introduce NanAdjustExternalMemory
 - Introduce NanAddGCEpilogueCallback, NanAddGCPrologueCallback, NanRemoveGCEpilogueCallback, NanRemoveGCPrologueCallback
 - Introduce NanGetHeapStatistics
 - Rename NanAsyncWorker#SavePersistent() to SaveToPersistent()

### 0.8.0 Jan 9 2014

 - NanDispose -> NanDisposePersistent, deprecate NanDispose
 - Extract _NAN_*_RETURN_TYPE, pull up NAN_*()

### 0.7.1 Jan 9 2014

 - Fixes to work against debug builds of Node
 - Safer NanPersistentToLocal (avoid reinterpret_cast)
 - Speed up common NanRawString case by only extracting flattened string when necessary

### 0.7.0 Dec 17 2013

 - New no-arg form of NanCallback() constructor.
 - NanCallback#Call takes Handle rather than Local
 - Removed deprecated NanCallback#Run method, use NanCallback#Call instead
 - Split off _NAN_*_ARGS_TYPE from _NAN_*_ARGS
 - Restore (unofficial) Node 0.6 compatibility at NanCallback#Call()
 - Introduce NanRawString() for char* (or appropriate void*) from v8::String
     (replacement for NanFromV8String)
 - Introduce NanCString() for null-terminated char* from v8::String

### 0.6.0 Nov 21 2013

 - Introduce NanNewLocal<T>(v8::Handle<T> value) for use in place of
     v8::Local<T>::New(...) since v8 started requiring isolate in Node 0.11.9

### 0.5.2 Nov 16 2013

 - Convert SavePersistent and GetFromPersistent in NanAsyncWorker from protected and public

### 0.5.1 Nov 12 2013

 - Use node::MakeCallback() instead of direct v8::Function::Call()

### 0.5.0 Nov 11 2013

 - Added @TooTallNate as collaborator
 - New, much simpler, "include_dirs" for binding.gyp
 - Added full range of NAN_INDEX_* macros to match NAN_PROPERTY_* macros

### 0.4.4 Nov 2 2013

 - Isolate argument from v8::Persistent::MakeWeak removed for 0.11.8+

### 0.4.3 Nov 2 2013

 - Include node_object_wrap.h, removed from node.h for Node 0.11.8.

### 0.4.2 Nov 2 2013

 - Handle deprecation of v8::Persistent::Dispose(v8::Isolate* isolate)) for
     Node 0.11.8 release.

### 0.4.1 Sep 16 2013

 - Added explicit \`#include <uv.h>\` as it was removed from node.h for v0.11.8

### 0.4.0 Sep 2 2013

 - Added NAN_INLINE and NAN_DEPRECATED and made use of them
 - Added NanError, NanTypeError and NanRangeError
 - Cleaned up code

### 0.3.2 Aug 30 2013

 - Fix missing scope declaration in GetFromPersistent() and SaveToPersistent
     in NanAsyncWorker

### 0.3.1 Aug 20 2013

 - fix "not all control paths return a value" compile warning on some platforms

### 0.3.0 Aug 19 2013

 - Made NAN work with NPM
 - Lots of fixes to NanFromV8String, pulling in features from new Node core
 - Changed node::encoding to Nan::Encoding in NanFromV8String to unify the API
 - Added optional error number argument for NanThrowError()
 - Added NanInitPersistent()
 - Added NanReturnNull() and NanReturnEmptyString()
 - Added NanLocker and NanUnlocker
 - Added missing scopes
 - Made sure to clear disposed Persistent handles
 - Changed NanAsyncWorker to allocate error messages on the heap
 - Changed NanThrowError(Local<Value>) to NanThrowError(Handle<Value>)
 - Fixed leak in NanAsyncWorker when errmsg is used

### 0.2.2 Aug 5 2013

 - Fixed usage of undefined variable with node::BASE64 in NanFromV8String()

### 0.2.1 Aug 5 2013

 - Fixed 0.8 breakage, node::BUFFER encoding type not available in 0.8 for
     NanFromV8String()

### 0.2.0 Aug 5 2013

 - Added NAN_PROPERTY_GETTER, NAN_PROPERTY_SETTER, NAN_PROPERTY_ENUMERATOR,
     NAN_PROPERTY_DELETER, NAN_PROPERTY_QUERY
 - Extracted _NAN_METHOD_ARGS, _NAN_GETTER_ARGS, _NAN_SETTER_ARGS,
     _NAN_PROPERTY_GETTER_ARGS, _NAN_PROPERTY_SETTER_ARGS,
     _NAN_PROPERTY_ENUMERATOR_ARGS, _NAN_PROPERTY_DELETER_ARGS,
     _NAN_PROPERTY_QUERY_ARGS
 - Added NanGetInternalFieldPointer, NanSetInternalFieldPointer
 - Added NAN_WEAK_CALLBACK, NAN_WEAK_CALLBACK_OBJECT,
     NAN_WEAK_CALLBACK_DATA, NanMakeWeak
 - Renamed THROW_ERROR to _NAN_THROW_ERROR
 - Added NanNewBufferHandle(char*, size_t, node::smalloc::FreeCallback, void*)
 - Added NanBufferUse(char*, uint32_t)
 - Added NanNewContextHandle(v8::ExtensionConfiguration*,
       v8::Handle<v8::ObjectTemplate>, v8::Handle<v8::Value>)
 - Fixed broken NanCallback#GetFunction()
 - Added optional encoding and size arguments to NanFromV8String()
 - Added NanGetPointerSafe() and NanSetPointerSafe()
 - Added initial test suite (to be expanded)
 - Allow NanUInt32OptionValue to convert any Number object

### 0.1.0 Jul 21 2013

 - Added \`NAN_GETTER\`, \`NAN_SETTER\`
 - Added \`NanThrowError\` with single Local<Value> argument
 - Added \`NanNewBufferHandle\` with single uint32_t argument
 - Added \`NanHasInstance(Persistent<FunctionTemplate>&, Handle<Value>)\`
 - Added \`Local<Function> NanCallback#GetFunction()\`
 - Added \`NanCallback#Call(int, Local<Value>[])\`
 - Deprecated \`NanCallback#Run(int, Local<Value>[])\` in favour of Call
`,
      "LICENSE.md": `The MIT License (MIT)
=====================

Copyright (c) 2018 NAN contributors
-----------------------------------

*NAN contributors listed at <https://github.com/nodejs/nan#contributors>*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
      "README.md": `Native Abstractions for Node.js
===============================

**A header file filled with macro and utility goodness for making add-on development for Node.js easier across versions 0.8, 0.10, 0.12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 and 14.**

***Current version: 2.14.1***

*(See [CHANGELOG.md](https://github.com/nodejs/nan/blob/master/CHANGELOG.md) for complete ChangeLog)*

[![NPM](https://nodei.co/npm/nan.png?downloads=true&downloadRank=true)](https://nodei.co/npm/nan/) [![NPM](https://nodei.co/npm-dl/nan.png?months=6&height=3)](https://nodei.co/npm/nan/)

[![Build Status](https://api.travis-ci.org/nodejs/nan.svg?branch=master)](https://travis-ci.org/nodejs/nan)
[![Build status](https://ci.appveyor.com/api/projects/status/kh73pbm9dsju7fgh)](https://ci.appveyor.com/project/RodVagg/nan)

Thanks to the crazy changes in V8 (and some in Node core), keeping native addons compiling happily across versions, particularly 0.10 to 0.12 to 4.0, is a minor nightmare. The goal of this project is to store all logic necessary to develop native Node.js addons without having to inspect \`NODE_MODULE_VERSION\` and get yourself into a macro-tangle.

This project also contains some helper utilities that make addon development a bit more pleasant.

 * **[News & Updates](#news)**
 * **[Usage](#usage)**
 * **[Example](#example)**
 * **[API](#api)**
 * **[Tests](#tests)**
 * **[Known issues](#issues)**
 * **[Governance & Contributing](#governance)**

<a name="news"></a>

## News & Updates

<a name="usage"></a>

## Usage

Simply add **NAN** as a dependency in the *package.json* of your Node addon:

\`\`\` bash
\$ npm install --save nan
\`\`\`

Pull in the path to **NAN** in your *binding.gyp* so that you can use \`#include <nan.h>\` in your *.cpp* files:

\`\`\` python
"include_dirs" : [
    "<!(node -e \\"require('nan')\\")"
]
\`\`\`

This works like a \`-I<path-to-NAN>\` when compiling your addon.

<a name="example"></a>

## Example

Just getting started with Nan? Take a look at the **[Node Add-on Examples](https://github.com/nodejs/node-addon-examples)**.

Refer to a [quick-start **Nan** Boilerplate](https://github.com/fcanas/node-native-boilerplate) for a ready-to-go project that utilizes basic Nan functionality.

For a simpler example, see the **[async pi estimation example](https://github.com/nodejs/nan/tree/master/examples/async_pi_estimate)** in the examples directory for full code and an explanation of what this Monte Carlo Pi estimation example does. Below are just some parts of the full example that illustrate the use of **NAN**.

Yet another example is **[nan-example-eol](https://github.com/CodeCharmLtd/nan-example-eol)**. It shows newline detection implemented as a native addon.

Also take a look at our comprehensive **[C++ test suite](https://github.com/nodejs/nan/tree/master/test/cpp)** which has a plethora of code snippets for your pasting pleasure.

<a name="api"></a>

## API

Additional to the NAN documentation below, please consult:

* [The V8 Getting Started * Guide](https://v8.dev/docs/embed)
* [V8 API Documentation](https://v8docs.nodesource.com/)
* [Node Add-on Documentation](https://nodejs.org/api/addons.html)

<!-- START API -->

### JavaScript-accessible methods

A _template_ is a blueprint for JavaScript functions and objects in a context. You can use a template to wrap C++ functions and data structures within JavaScript objects so that they can be manipulated from JavaScript. See the V8 Embedders Guide section on [Templates](https://github.com/v8/v8/wiki/Embedder%27s-Guide#templates) for further information.

In order to expose functionality to JavaScript via a template, you must provide it to V8 in a form that it understands. Across the versions of V8 supported by NAN, JavaScript-accessible method signatures vary widely, NAN fully abstracts method declaration and provides you with an interface that is similar to the most recent V8 API but is backward-compatible with older versions that still use the now-deceased \`v8::Argument\` type.

* **Method argument types**
 - <a href="doc/methods.md#api_nan_function_callback_info"><b><code>Nan::FunctionCallbackInfo</code></b></a>
 - <a href="doc/methods.md#api_nan_property_callback_info"><b><code>Nan::PropertyCallbackInfo</code></b></a>
 - <a href="doc/methods.md#api_nan_return_value"><b><code>Nan::ReturnValue</code></b></a>
* **Method declarations**
 - <a href="doc/methods.md#api_nan_method"><b>Method declaration</b></a>
 - <a href="doc/methods.md#api_nan_getter"><b>Getter declaration</b></a>
 - <a href="doc/methods.md#api_nan_setter"><b>Setter declaration</b></a>
 - <a href="doc/methods.md#api_nan_property_getter"><b>Property getter declaration</b></a>
 - <a href="doc/methods.md#api_nan_property_setter"><b>Property setter declaration</b></a>
 - <a href="doc/methods.md#api_nan_property_enumerator"><b>Property enumerator declaration</b></a>
 - <a href="doc/methods.md#api_nan_property_deleter"><b>Property deleter declaration</b></a>
 - <a href="doc/methods.md#api_nan_property_query"><b>Property query declaration</b></a>
 - <a href="doc/methods.md#api_nan_index_getter"><b>Index getter declaration</b></a>
 - <a href="doc/methods.md#api_nan_index_setter"><b>Index setter declaration</b></a>
 - <a href="doc/methods.md#api_nan_index_enumerator"><b>Index enumerator declaration</b></a>
 - <a href="doc/methods.md#api_nan_index_deleter"><b>Index deleter declaration</b></a>
 - <a href="doc/methods.md#api_nan_index_query"><b>Index query declaration</b></a>
* Method and template helpers
 - <a href="doc/methods.md#api_nan_set_method"><b><code>Nan::SetMethod()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_prototype_method"><b><code>Nan::SetPrototypeMethod()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_accessor"><b><code>Nan::SetAccessor()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_named_property_handler"><b><code>Nan::SetNamedPropertyHandler()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_indexed_property_handler"><b><code>Nan::SetIndexedPropertyHandler()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_template"><b><code>Nan::SetTemplate()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_prototype_template"><b><code>Nan::SetPrototypeTemplate()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_instance_template"><b><code>Nan::SetInstanceTemplate()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_call_handler"><b><code>Nan::SetCallHandler()</code></b></a>
 - <a href="doc/methods.md#api_nan_set_call_as_function_handler"><b><code>Nan::SetCallAsFunctionHandler()</code></b></a>

### Scopes

A _local handle_ is a pointer to an object. All V8 objects are accessed using handles, they are necessary because of the way the V8 garbage collector works.

A handle scope can be thought of as a container for any number of handles. When you've finished with your handles, instead of deleting each one individually you can simply delete their scope.

The creation of \`HandleScope\` objects is different across the supported versions of V8. Therefore, NAN provides its own implementations that can be used safely across these.

 - <a href="doc/scopes.md#api_nan_handle_scope"><b><code>Nan::HandleScope</code></b></a>
 - <a href="doc/scopes.md#api_nan_escapable_handle_scope"><b><code>Nan::EscapableHandleScope</code></b></a>

Also see the V8 Embedders Guide section on [Handles and Garbage Collection](https://github.com/v8/v8/wiki/Embedder%27s%20Guide#handles-and-garbage-collection).

### Persistent references

An object reference that is independent of any \`HandleScope\` is a _persistent_ reference. Where a \`Local\` handle only lives as long as the \`HandleScope\` in which it was allocated, a \`Persistent\` handle remains valid until it is explicitly disposed.

Due to the evolution of the V8 API, it is necessary for NAN to provide a wrapper implementation of the \`Persistent\` classes to supply compatibility across the V8 versions supported.

 - <a href="doc/persistent.md#api_nan_persistent_base"><b><code>Nan::PersistentBase & v8::PersistentBase</code></b></a>
 - <a href="doc/persistent.md#api_nan_non_copyable_persistent_traits"><b><code>Nan::NonCopyablePersistentTraits & v8::NonCopyablePersistentTraits</code></b></a>
 - <a href="doc/persistent.md#api_nan_copyable_persistent_traits"><b><code>Nan::CopyablePersistentTraits & v8::CopyablePersistentTraits</code></b></a>
 - <a href="doc/persistent.md#api_nan_persistent"><b><code>Nan::Persistent</code></b></a>
 - <a href="doc/persistent.md#api_nan_global"><b><code>Nan::Global</code></b></a>
 - <a href="doc/persistent.md#api_nan_weak_callback_info"><b><code>Nan::WeakCallbackInfo</code></b></a>
 - <a href="doc/persistent.md#api_nan_weak_callback_type"><b><code>Nan::WeakCallbackType</code></b></a>

Also see the V8 Embedders Guide section on [Handles and Garbage Collection](https://developers.google.com/v8/embed#handles).

### New

NAN provides a \`Nan::New()\` helper for the creation of new JavaScript objects in a way that's compatible across the supported versions of V8.

 - <a href="doc/new.md#api_nan_new"><b><code>Nan::New()</code></b></a>
 - <a href="doc/new.md#api_nan_undefined"><b><code>Nan::Undefined()</code></b></a>
 - <a href="doc/new.md#api_nan_null"><b><code>Nan::Null()</code></b></a>
 - <a href="doc/new.md#api_nan_true"><b><code>Nan::True()</code></b></a>
 - <a href="doc/new.md#api_nan_false"><b><code>Nan::False()</code></b></a>
 - <a href="doc/new.md#api_nan_empty_string"><b><code>Nan::EmptyString()</code></b></a>


### Converters

NAN contains functions that convert \`v8::Value\`s to other \`v8::Value\` types and native types. Since type conversion is not guaranteed to succeed, they return \`Nan::Maybe\` types. These converters can be used in place of \`value->ToX()\` and \`value->XValue()\` (where \`X\` is one of the types, e.g. \`Boolean\`) in a way that provides a consistent interface across V8 versions. Newer versions of V8 use the new \`v8::Maybe\` and \`v8::MaybeLocal\` types for these conversions, older versions don't have this functionality so it is provided by NAN.

 - <a href="doc/converters.md#api_nan_to"><b><code>Nan::To()</code></b></a>

### Maybe Types

The \`Nan::MaybeLocal\` and \`Nan::Maybe\` types are monads that encapsulate \`v8::Local\` handles that _may be empty_.

* **Maybe Types**
  - <a href="doc/maybe_types.md#api_nan_maybe_local"><b><code>Nan::MaybeLocal</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_maybe"><b><code>Nan::Maybe</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_nothing"><b><code>Nan::Nothing</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_just"><b><code>Nan::Just</code></b></a>
* **Maybe Helpers**
  - <a href="doc/maybe_types.md#api_nan_call"><b><code>Nan::Call()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_to_detail_string"><b><code>Nan::ToDetailString()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_to_array_index"><b><code>Nan::ToArrayIndex()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_equals"><b><code>Nan::Equals()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_new_instance"><b><code>Nan::NewInstance()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_function"><b><code>Nan::GetFunction()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_set"><b><code>Nan::Set()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_define_own_property"><b><code>Nan::DefineOwnProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_force_set"><del><b><code>Nan::ForceSet()</code></b></del></a>
  - <a href="doc/maybe_types.md#api_nan_get"><b><code>Nan::Get()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_property_attribute"><b><code>Nan::GetPropertyAttributes()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has"><b><code>Nan::Has()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_delete"><b><code>Nan::Delete()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_property_names"><b><code>Nan::GetPropertyNames()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_own_property_names"><b><code>Nan::GetOwnPropertyNames()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_set_prototype"><b><code>Nan::SetPrototype()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_object_proto_to_string"><b><code>Nan::ObjectProtoToString()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has_own_property"><b><code>Nan::HasOwnProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has_real_named_property"><b><code>Nan::HasRealNamedProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has_real_indexed_property"><b><code>Nan::HasRealIndexedProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has_real_named_callback_property"><b><code>Nan::HasRealNamedCallbackProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_real_named_property_in_prototype_chain"><b><code>Nan::GetRealNamedPropertyInPrototypeChain()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_real_named_property"><b><code>Nan::GetRealNamedProperty()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_call_as_function"><b><code>Nan::CallAsFunction()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_call_as_constructor"><b><code>Nan::CallAsConstructor()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_source_line"><b><code>Nan::GetSourceLine()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_line_number"><b><code>Nan::GetLineNumber()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_start_column"><b><code>Nan::GetStartColumn()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_end_column"><b><code>Nan::GetEndColumn()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_clone_element_at"><b><code>Nan::CloneElementAt()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_has_private"><b><code>Nan::HasPrivate()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_get_private"><b><code>Nan::GetPrivate()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_set_private"><b><code>Nan::SetPrivate()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_delete_private"><b><code>Nan::DeletePrivate()</code></b></a>
  - <a href="doc/maybe_types.md#api_nan_make_maybe"><b><code>Nan::MakeMaybe()</code></b></a>

### Script

NAN provides a \`v8::Script\` helpers as the API has changed over the supported versions of V8.

 - <a href="doc/script.md#api_nan_compile_script"><b><code>Nan::CompileScript()</code></b></a>
 - <a href="doc/script.md#api_nan_run_script"><b><code>Nan::RunScript()</code></b></a>


### JSON

The _JSON_ object provides the c++ versions of the methods offered by the \`JSON\` object in javascript. V8 exposes these methods via the \`v8::JSON\` object.

 - <a href="doc/json.md#api_nan_json_parse"><b><code>Nan::JSON.Parse</code></b></a>
 - <a href="doc/json.md#api_nan_json_stringify"><b><code>Nan::JSON.Stringify</code></b></a>

Refer to the V8 JSON object in the [V8 documentation](https://v8docs.nodesource.com/node-8.16/da/d6f/classv8_1_1_j_s_o_n.html) for more information about these methods and their arguments.

### Errors

NAN includes helpers for creating, throwing and catching Errors as much of this functionality varies across the supported versions of V8 and must be abstracted.

Note that an Error object is simply a specialized form of \`v8::Value\`.

Also consult the V8 Embedders Guide section on [Exceptions](https://developers.google.com/v8/embed#exceptions) for more information.

 - <a href="doc/errors.md#api_nan_error"><b><code>Nan::Error()</code></b></a>
 - <a href="doc/errors.md#api_nan_range_error"><b><code>Nan::RangeError()</code></b></a>
 - <a href="doc/errors.md#api_nan_reference_error"><b><code>Nan::ReferenceError()</code></b></a>
 - <a href="doc/errors.md#api_nan_syntax_error"><b><code>Nan::SyntaxError()</code></b></a>
 - <a href="doc/errors.md#api_nan_type_error"><b><code>Nan::TypeError()</code></b></a>
 - <a href="doc/errors.md#api_nan_throw_error"><b><code>Nan::ThrowError()</code></b></a>
 - <a href="doc/errors.md#api_nan_throw_range_error"><b><code>Nan::ThrowRangeError()</code></b></a>
 - <a href="doc/errors.md#api_nan_throw_reference_error"><b><code>Nan::ThrowReferenceError()</code></b></a>
 - <a href="doc/errors.md#api_nan_throw_syntax_error"><b><code>Nan::ThrowSyntaxError()</code></b></a>
 - <a href="doc/errors.md#api_nan_throw_type_error"><b><code>Nan::ThrowTypeError()</code></b></a>
 - <a href="doc/errors.md#api_nan_fatal_exception"><b><code>Nan::FatalException()</code></b></a>
 - <a href="doc/errors.md#api_nan_errno_exception"><b><code>Nan::ErrnoException()</code></b></a>
 - <a href="doc/errors.md#api_nan_try_catch"><b><code>Nan::TryCatch</code></b></a>


### Buffers

NAN's \`node::Buffer\` helpers exist as the API has changed across supported Node versions. Use these methods to ensure compatibility.

 - <a href="doc/buffers.md#api_nan_new_buffer"><b><code>Nan::NewBuffer()</code></b></a>
 - <a href="doc/buffers.md#api_nan_copy_buffer"><b><code>Nan::CopyBuffer()</code></b></a>
 - <a href="doc/buffers.md#api_nan_free_callback"><b><code>Nan::FreeCallback()</code></b></a>

### Nan::Callback

\`Nan::Callback\` makes it easier to use \`v8::Function\` handles as callbacks. A class that wraps a \`v8::Function\` handle, protecting it from garbage collection and making it particularly useful for storage and use across asynchronous execution.

 - <a href="doc/callback.md#api_nan_callback"><b><code>Nan::Callback</code></b></a>

### Asynchronous work helpers

\`Nan::AsyncWorker\`, \`Nan::AsyncProgressWorker\` and \`Nan::AsyncProgressQueueWorker\` are helper classes that make working with asynchronous code easier.

 - <a href="doc/asyncworker.md#api_nan_async_worker"><b><code>Nan::AsyncWorker</code></b></a>
 - <a href="doc/asyncworker.md#api_nan_async_progress_worker"><b><code>Nan::AsyncProgressWorkerBase &amp; Nan::AsyncProgressWorker</code></b></a>
 - <a href="doc/asyncworker.md#api_nan_async_progress_queue_worker"><b><code>Nan::AsyncProgressQueueWorker</code></b></a>
 - <a href="doc/asyncworker.md#api_nan_async_queue_worker"><b><code>Nan::AsyncQueueWorker</code></b></a>

### Strings & Bytes

Miscellaneous string & byte encoding and decoding functionality provided for compatibility across supported versions of V8 and Node. Implemented by NAN to ensure that all encoding types are supported, even for older versions of Node where they are missing.

 - <a href="doc/string_bytes.md#api_nan_encoding"><b><code>Nan::Encoding</code></b></a>
 - <a href="doc/string_bytes.md#api_nan_encode"><b><code>Nan::Encode()</code></b></a>
 - <a href="doc/string_bytes.md#api_nan_decode_bytes"><b><code>Nan::DecodeBytes()</code></b></a>
 - <a href="doc/string_bytes.md#api_nan_decode_write"><b><code>Nan::DecodeWrite()</code></b></a>


### Object Wrappers

The \`ObjectWrap\` class can be used to make wrapped C++ objects and a factory of wrapped objects.

 - <a href="doc/object_wrappers.md#api_nan_object_wrap"><b><code>Nan::ObjectWrap</code></b></a>


### V8 internals

The hooks to access V8 internals—including GC and statistics—are different across the supported versions of V8, therefore NAN provides its own hooks that call the appropriate V8 methods.

 - <a href="doc/v8_internals.md#api_nan_gc_callback"><b><code>NAN_GC_CALLBACK()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_add_gc_epilogue_callback"><b><code>Nan::AddGCEpilogueCallback()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_remove_gc_epilogue_callback"><b><code>Nan::RemoveGCEpilogueCallback()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_add_gc_prologue_callback"><b><code>Nan::AddGCPrologueCallback()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_remove_gc_prologue_callback"><b><code>Nan::RemoveGCPrologueCallback()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_get_heap_statistics"><b><code>Nan::GetHeapStatistics()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_set_counter_function"><b><code>Nan::SetCounterFunction()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_set_create_histogram_function"><b><code>Nan::SetCreateHistogramFunction()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_set_add_histogram_sample_function"><b><code>Nan::SetAddHistogramSampleFunction()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_idle_notification"><b><code>Nan::IdleNotification()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_low_memory_notification"><b><code>Nan::LowMemoryNotification()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_context_disposed_notification"><b><code>Nan::ContextDisposedNotification()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_get_internal_field_pointer"><b><code>Nan::GetInternalFieldPointer()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_set_internal_field_pointer"><b><code>Nan::SetInternalFieldPointer()</code></b></a>
 - <a href="doc/v8_internals.md#api_nan_adjust_external_memory"><b><code>Nan::AdjustExternalMemory()</code></b></a>


### Miscellaneous V8 Helpers

 - <a href="doc/v8_misc.md#api_nan_utf8_string"><b><code>Nan::Utf8String</code></b></a>
 - <a href="doc/v8_misc.md#api_nan_get_current_context"><b><code>Nan::GetCurrentContext()</code></b></a>
 - <a href="doc/v8_misc.md#api_nan_set_isolate_data"><b><code>Nan::SetIsolateData()</code></b></a>
 - <a href="doc/v8_misc.md#api_nan_get_isolate_data"><b><code>Nan::GetIsolateData()</code></b></a>
 - <a href="doc/v8_misc.md#api_nan_typedarray_contents"><b><code>Nan::TypedArrayContents</code></b></a>


### Miscellaneous Node Helpers

 - <a href="doc/node_misc.md#api_nan_asyncresource"><b><code>Nan::AsyncResource</code></b></a>
 - <a href="doc/node_misc.md#api_nan_make_callback"><b><code>Nan::MakeCallback()</code></b></a>
 - <a href="doc/node_misc.md#api_nan_module_init"><b><code>NAN_MODULE_INIT()</code></b></a>
 - <a href="doc/node_misc.md#api_nan_export"><b><code>Nan::Export()</code></b></a>

<!-- END API -->


<a name="tests"></a>

### Tests

To run the NAN tests do:

\`\`\` sh
npm install
npm run-script rebuild-tests
npm test
\`\`\`

Or just:

\`\`\` sh
npm install
make test
\`\`\`

<a name="issues"></a>

## Known issues

### Compiling against Node.js 0.12 on OSX

With new enough compilers available on OSX, the versions of V8 headers corresponding to Node.js 0.12
do not compile anymore. The error looks something like:

\`\`\`
❯   CXX(target) Release/obj.target/accessors/cpp/accessors.o
In file included from ../cpp/accessors.cpp:9:
In file included from ../../nan.h:51:
In file included from /Users/ofrobots/.node-gyp/0.12.18/include/node/node.h:61:
/Users/ofrobots/.node-gyp/0.12.18/include/node/v8.h:5800:54: error: 'CreateHandle' is a protected member of 'v8::HandleScope'
  return Handle<T>(reinterpret_cast<T*>(HandleScope::CreateHandle(
                                        ~~~~~~~~~~~~~^~~~~~~~~~~~
\`\`\`

This can be worked around by patching your local versions of v8.h corresponding to Node 0.12 to make
\`v8::Handle\` a friend of \`v8::HandleScope\`. Since neither Node.js not V8 support this release line anymore
this patch cannot be released by either project in an official release.

For this reason, we do not test against Node.js 0.12 on OSX in this project's CI. If you need to support
that configuration, you will need to either get an older compiler, or apply a source patch to the version
of V8 headers as a workaround.

<a name="governance"></a>

## Governance & Contributing

NAN is governed by the [Node.js Addon API Working Group](https://github.com/nodejs/CTC/blob/master/WORKING_GROUPS.md#addon-api)

### Addon API Working Group (WG)

The NAN project is jointly governed by a Working Group which is responsible for high-level guidance of the project.

Members of the WG are also known as Collaborators, there is no distinction between the two, unlike other Node.js projects.

The WG has final authority over this project including:

* Technical direction
* Project governance and process (including this policy)
* Contribution policy
* GitHub repository hosting
* Maintaining the list of additional Collaborators

For the current list of WG members, see the project [README.md](./README.md#collaborators).

Individuals making significant and valuable contributions are made members of the WG and given commit-access to the project. These individuals are identified by the WG and their addition to the WG is discussed via GitHub and requires unanimous consensus amongst those WG members participating in the discussion with a quorum of 50% of WG members required for acceptance of the vote.

_Note:_ If you make a significant contribution and are not considered for commit-access log an issue or contact a WG member directly.

For the current list of WG members / Collaborators, see the project [README.md](./README.md#collaborators).

### Consensus Seeking Process

The WG follows a [Consensus Seeking](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making) decision making model.

Modifications of the contents of the NAN repository are made on a collaborative basis. Anybody with a GitHub account may propose a modification via pull request and it will be considered by the WG. All pull requests must be reviewed and accepted by a WG member with sufficient expertise who is able to take full responsibility for the change. In the case of pull requests proposed by an existing WG member, an additional WG member is required for sign-off. Consensus should be sought if additional WG members participate and there is disagreement around a particular modification.

If a change proposal cannot reach a consensus, a WG member can call for a vote amongst the members of the WG. Simple majority wins.

<a id="developers-certificate-of-origin"></a>

## Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

* (a) The contribution was created in whole or in part by me and I
  have the right to submit it under the open source license
  indicated in the file; or

* (b) The contribution is based upon previous work that, to the best
  of my knowledge, is covered under an appropriate open source
  license and I have the right under that license to submit that
  work with modifications, whether created in whole or in part
  by me, under the same open source license (unless I am
  permitted to submit under a different license), as indicated
  in the file; or

* (c) The contribution was provided directly to me by some other
  person who certified (a), (b) or (c) and I have not modified
  it.

* (d) I understand and agree that this project and the contribution
  are public and that a record of the contribution (including all
  personal information I submit with it, including my sign-off) is
  maintained indefinitely and may be redistributed consistent with
  this project or the open source license(s) involved.

<a name="collaborators"></a>

### WG Members / Collaborators

<table><tbody>
<tr><th align="left">Rod Vagg</th><td><a href="https://github.com/rvagg">GitHub/rvagg</a></td><td><a href="http://twitter.com/rvagg">Twitter/@rvagg</a></td></tr>
<tr><th align="left">Benjamin Byholm</th><td><a href="https://github.com/kkoopa/">GitHub/kkoopa</a></td><td>-</td></tr>
<tr><th align="left">Trevor Norris</th><td><a href="https://github.com/trevnorris">GitHub/trevnorris</a></td><td><a href="http://twitter.com/trevnorris">Twitter/@trevnorris</a></td></tr>
<tr><th align="left">Nathan Rajlich</th><td><a href="https://github.com/TooTallNate">GitHub/TooTallNate</a></td><td><a href="http://twitter.com/TooTallNate">Twitter/@TooTallNate</a></td></tr>
<tr><th align="left">Brett Lawson</th><td><a href="https://github.com/brett19">GitHub/brett19</a></td><td><a href="http://twitter.com/brett19x">Twitter/@brett19x</a></td></tr>
<tr><th align="left">Ben Noordhuis</th><td><a href="https://github.com/bnoordhuis">GitHub/bnoordhuis</a></td><td><a href="http://twitter.com/bnoordhuis">Twitter/@bnoordhuis</a></td></tr>
<tr><th align="left">David Siegel</th><td><a href="https://github.com/agnat">GitHub/agnat</a></td><td><a href="http://twitter.com/agnat">Twitter/@agnat</a></td></tr>
<tr><th align="left">Michael Ira Krufky</th><td><a href="https://github.com/mkrufky">GitHub/mkrufky</a></td><td><a href="http://twitter.com/mkrufky">Twitter/@mkrufky</a></td></tr>
</tbody></table>

## Licence &amp; copyright

Copyright (c) 2018 NAN WG Members / Collaborators (listed above).

Native Abstractions for Node.js is licensed under an MIT license. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
`,
      "doc": {
        "asyncworker.md": `## Asynchronous work helpers

\`Nan::AsyncWorker\`, \`Nan::AsyncProgressWorker\` and \`Nan::AsyncProgressQueueWorker\` are helper classes that make working with asynchronous code easier.

 - <a href="#api_nan_async_worker"><b><code>Nan::AsyncWorker</code></b></a>
 - <a href="#api_nan_async_progress_worker"><b><code>Nan::AsyncProgressWorkerBase &amp; Nan::AsyncProgressWorker</code></b></a>
 - <a href="#api_nan_async_progress_queue_worker"><b><code>Nan::AsyncProgressQueueWorker</code></b></a>
 - <a href="#api_nan_async_queue_worker"><b><code>Nan::AsyncQueueWorker</code></b></a>

<a name="api_nan_async_worker"></a>
### Nan::AsyncWorker

\`Nan::AsyncWorker\` is an _abstract_ class that you can subclass to have much of the annoying asynchronous queuing and handling taken care of for you. It can even store arbitrary V8 objects for you and have them persist while the asynchronous work is in progress.

This class internally handles the details of creating an [\`AsyncResource\`][AsyncResource], and running the callback in the
correct async context. To be able to identify the async resources created by this class in async-hooks, provide a
\`resource_name\` to the constructor. It is recommended that the module name be used as a prefix to the \`resource_name\` to avoid
collisions in the names. For more details see [\`AsyncResource\`][AsyncResource] documentation.  The \`resource_name\` needs to stay valid for the lifetime of the worker instance.

Definition:

\`\`\`c++
class AsyncWorker {
 public:
  explicit AsyncWorker(Callback *callback_, const char* resource_name = "nan:AsyncWorker");

  virtual ~AsyncWorker();

  virtual void WorkComplete();

  void SaveToPersistent(const char *key, const v8::Local<v8::Value> &value);

  void SaveToPersistent(const v8::Local<v8::String> &key,
                        const v8::Local<v8::Value> &value);

  void SaveToPersistent(uint32_t index,
                        const v8::Local<v8::Value> &value);

  v8::Local<v8::Value> GetFromPersistent(const char *key) const;

  v8::Local<v8::Value> GetFromPersistent(const v8::Local<v8::String> &key) const;

  v8::Local<v8::Value> GetFromPersistent(uint32_t index) const;

  virtual void Execute() = 0;

  uv_work_t request;

  virtual void Destroy();

 protected:
  Persistent<v8::Object> persistentHandle;

  Callback *callback;

  virtual void HandleOKCallback();

  virtual void HandleErrorCallback();

  void SetErrorMessage(const char *msg);

  const char* ErrorMessage();
};
\`\`\`

<a name="api_nan_async_progress_worker"></a>
### Nan::AsyncProgressWorkerBase &amp; Nan::AsyncProgressWorker

\`Nan::AsyncProgressWorkerBase\` is an _abstract_ class template that extends \`Nan::AsyncWorker\` and adds additional progress reporting callbacks that can be used during the asynchronous work execution to provide progress data back to JavaScript.

Previously the definition of \`Nan::AsyncProgressWorker\` only allowed sending \`const char\` data. Now extending \`Nan::AsyncProgressWorker\` will yield an instance of the implicit \`Nan::AsyncProgressWorkerBase\` template with type \`<char>\` for compatibility.

\`Nan::AsyncProgressWorkerBase\` &amp; \`Nan::AsyncProgressWorker\` is intended for best-effort delivery of nonessential progress messages, e.g. a progress bar.  The last event sent before the main thread is woken will be delivered.

Definition:

\`\`\`c++
template<class T>
class AsyncProgressWorkerBase<T> : public AsyncWorker {
 public:
  explicit AsyncProgressWorkerBase(Callback *callback_, const char* resource_name = ...);

  virtual ~AsyncProgressWorkerBase();

  void WorkProgress();

  class ExecutionProgress {
   public:
    void Signal() const;
    void Send(const T* data, size_t count) const;
  };

  virtual void Execute(const ExecutionProgress& progress) = 0;

  virtual void HandleProgressCallback(const T *data, size_t count) = 0;

  virtual void Destroy();
};

typedef AsyncProgressWorkerBase<T> AsyncProgressWorker;
\`\`\`

<a name="api_nan_async_progress_queue_worker"></a>
### Nan::AsyncProgressQueueWorker

\`Nan::AsyncProgressQueueWorker\` is an _abstract_ class template that extends \`Nan::AsyncWorker\` and adds additional progress reporting callbacks that can be used during the asynchronous work execution to provide progress data back to JavaScript.

\`Nan::AsyncProgressQueueWorker\` behaves exactly the same as \`Nan::AsyncProgressWorker\`, except all events are queued and delivered to the main thread.

Definition:

\`\`\`c++
template<class T>
class AsyncProgressQueueWorker<T> : public AsyncWorker {
 public:
  explicit AsyncProgressQueueWorker(Callback *callback_, const char* resource_name = "nan:AsyncProgressQueueWorker");

  virtual ~AsyncProgressQueueWorker();

  void WorkProgress();

  class ExecutionProgress {
   public:
    void Send(const T* data, size_t count) const;
  };

  virtual void Execute(const ExecutionProgress& progress) = 0;

  virtual void HandleProgressCallback(const T *data, size_t count) = 0;

  virtual void Destroy();
};
\`\`\`

<a name="api_nan_async_queue_worker"></a>
### Nan::AsyncQueueWorker

\`Nan::AsyncQueueWorker\` will run a \`Nan::AsyncWorker\` asynchronously via libuv. Both the \`execute\` and \`after_work\` steps are taken care of for you. Most of the logic for this is embedded in \`Nan::AsyncWorker\`.

Definition:

\`\`\`c++
void AsyncQueueWorker(AsyncWorker *);
\`\`\`

[AsyncResource]: node_misc.md#api_nan_asyncresource
`,
        "buffers.md": `## Buffers

NAN's \`node::Buffer\` helpers exist as the API has changed across supported Node versions. Use these methods to ensure compatibility.

 - <a href="#api_nan_new_buffer"><b><code>Nan::NewBuffer()</code></b></a>
 - <a href="#api_nan_copy_buffer"><b><code>Nan::CopyBuffer()</code></b></a>
 - <a href="#api_nan_free_callback"><b><code>Nan::FreeCallback()</code></b></a>

<a name="api_nan_new_buffer"></a>
### Nan::NewBuffer()

Allocate a new \`node::Buffer\` object with the specified size and optional data. Calls \`node::Buffer::New()\`.

Note that when creating a \`Buffer\` using \`Nan::NewBuffer()\` and an existing \`char*\`, it is assumed that the ownership of the pointer is being transferred to the new \`Buffer\` for management.
When a \`node::Buffer\` instance is garbage collected and a \`FreeCallback\` has not been specified, \`data\` will be disposed of via a call to \`free()\`.
You _must not_ free the memory space manually once you have created a \`Buffer\` in this way.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Object> Nan::NewBuffer(uint32_t size)
Nan::MaybeLocal<v8::Object> Nan::NewBuffer(char* data, uint32_t size)
Nan::MaybeLocal<v8::Object> Nan::NewBuffer(char *data,
                                           size_t length,
                                           Nan::FreeCallback callback,
                                           void *hint)
\`\`\`


<a name="api_nan_copy_buffer"></a>
### Nan::CopyBuffer()

Similar to [\`Nan::NewBuffer()\`](#api_nan_new_buffer) except that an implicit memcpy will occur within Node. Calls \`node::Buffer::Copy()\`.

Management of the \`char*\` is left to the user, you should manually free the memory space if necessary as the new \`Buffer\` will have its own copy.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Object> Nan::CopyBuffer(const char *data, uint32_t size)
\`\`\`


<a name="api_nan_free_callback"></a>
### Nan::FreeCallback()

A free callback that can be provided to [\`Nan::NewBuffer()\`](#api_nan_new_buffer).
The supplied callback will be invoked when the \`Buffer\` undergoes garbage collection.

Signature:

\`\`\`c++
typedef void (*FreeCallback)(char *data, void *hint);
\`\`\`
`,
        "callback.md": `## Nan::Callback

\`Nan::Callback\` makes it easier to use \`v8::Function\` handles as callbacks. A class that wraps a \`v8::Function\` handle, protecting it from garbage collection and making it particularly useful for storage and use across asynchronous execution.

 - <a href="#api_nan_callback"><b><code>Nan::Callback</code></b></a>

<a name="api_nan_callback"></a>
### Nan::Callback

\`\`\`c++
class Callback {
 public:
  Callback();

  explicit Callback(const v8::Local<v8::Function> &fn);

  ~Callback();

  bool operator==(const Callback &other) const;

  bool operator!=(const Callback &other) const;

  v8::Local<v8::Function> operator*() const;

  MaybeLocal<v8::Value> operator()(AsyncResource* async_resource,
                                   v8::Local<v8::Object> target,
                                   int argc = 0,
                                   v8::Local<v8::Value> argv[] = 0) const;

  MaybeLocal<v8::Value> operator()(AsyncResource* async_resource,
                                   int argc = 0,
                                   v8::Local<v8::Value> argv[] = 0) const;

  void SetFunction(const v8::Local<v8::Function> &fn);

  v8::Local<v8::Function> GetFunction() const;

  bool IsEmpty() const;

  void Reset(const v8::Local<v8::Function> &fn);

  void Reset();

  MaybeLocal<v8::Value> Call(v8::Local<v8::Object> target,
                            int argc,
                            v8::Local<v8::Value> argv[],
                            AsyncResource* async_resource) const;
  MaybeLocal<v8::Value> Call(int argc,
                             v8::Local<v8::Value> argv[],
                             AsyncResource* async_resource) const;

  // Deprecated versions. Use the versions that accept an async_resource instead
  // as they run the callback in the correct async context as specified by the
  // resource. If you want to call a synchronous JS function (i.e. on a
  // non-empty JS stack), you can use Nan::Call instead.
  v8::Local<v8::Value> operator()(v8::Local<v8::Object> target,
                                  int argc = 0,
                                  v8::Local<v8::Value> argv[] = 0) const;

  v8::Local<v8::Value> operator()(int argc = 0,
                                  v8::Local<v8::Value> argv[] = 0) const;
  v8::Local<v8::Value> Call(v8::Local<v8::Object> target,
                            int argc,
                            v8::Local<v8::Value> argv[]) const;

  v8::Local<v8::Value> Call(int argc, v8::Local<v8::Value> argv[]) const;
};
\`\`\`

Example usage:

\`\`\`c++
v8::Local<v8::Function> function;
Nan::Callback callback(function);
callback.Call(0, 0);
\`\`\`
`,
        "converters.md": `## Converters

NAN contains functions that convert \`v8::Value\`s to other \`v8::Value\` types and native types. Since type conversion is not guaranteed to succeed, they return \`Nan::Maybe\` types. These converters can be used in place of \`value->ToX()\` and \`value->XValue()\` (where \`X\` is one of the types, e.g. \`Boolean\`) in a way that provides a consistent interface across V8 versions. Newer versions of V8 use the new \`v8::Maybe\` and \`v8::MaybeLocal\` types for these conversions, older versions don't have this functionality so it is provided by NAN.

 - <a href="#api_nan_to"><b><code>Nan::To()</code></b></a>

<a name="api_nan_to"></a>
### Nan::To()

Converts a \`v8::Local<v8::Value>\` to a different subtype of \`v8::Value\` or to a native data type. Returns a \`Nan::MaybeLocal<>\` or a \`Nan::Maybe<>\` accordingly.

See [maybe_types.md](./maybe_types.md) for more information on \`Nan::Maybe\` types.

Signatures:

\`\`\`c++
// V8 types
Nan::MaybeLocal<v8::Boolean> Nan::To<v8::Boolean>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::Int32> Nan::To<v8::Int32>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::Integer> Nan::To<v8::Integer>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::Object> Nan::To<v8::Object>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::Number> Nan::To<v8::Number>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::String> Nan::To<v8::String>(v8::Local<v8::Value> val);
Nan::MaybeLocal<v8::Uint32> Nan::To<v8::Uint32>(v8::Local<v8::Value> val);

// Native types
Nan::Maybe<bool> Nan::To<bool>(v8::Local<v8::Value> val);
Nan::Maybe<double> Nan::To<double>(v8::Local<v8::Value> val);
Nan::Maybe<int32_t> Nan::To<int32_t>(v8::Local<v8::Value> val);
Nan::Maybe<int64_t> Nan::To<int64_t>(v8::Local<v8::Value> val);
Nan::Maybe<uint32_t> Nan::To<uint32_t>(v8::Local<v8::Value> val);
\`\`\`

### Example

\`\`\`c++
v8::Local<v8::Value> val;
Nan::MaybeLocal<v8::String> str = Nan::To<v8::String>(val);
Nan::Maybe<double> d = Nan::To<double>(val);
\`\`\`

`,
        "errors.md": `## Errors

NAN includes helpers for creating, throwing and catching Errors as much of this functionality varies across the supported versions of V8 and must be abstracted.

Note that an Error object is simply a specialized form of \`v8::Value\`.

Also consult the V8 Embedders Guide section on [Exceptions](https://developers.google.com/v8/embed#exceptions) for more information.

 - <a href="#api_nan_error"><b><code>Nan::Error()</code></b></a>
 - <a href="#api_nan_range_error"><b><code>Nan::RangeError()</code></b></a>
 - <a href="#api_nan_reference_error"><b><code>Nan::ReferenceError()</code></b></a>
 - <a href="#api_nan_syntax_error"><b><code>Nan::SyntaxError()</code></b></a>
 - <a href="#api_nan_type_error"><b><code>Nan::TypeError()</code></b></a>
 - <a href="#api_nan_throw_error"><b><code>Nan::ThrowError()</code></b></a>
 - <a href="#api_nan_throw_range_error"><b><code>Nan::ThrowRangeError()</code></b></a>
 - <a href="#api_nan_throw_reference_error"><b><code>Nan::ThrowReferenceError()</code></b></a>
 - <a href="#api_nan_throw_syntax_error"><b><code>Nan::ThrowSyntaxError()</code></b></a>
 - <a href="#api_nan_throw_type_error"><b><code>Nan::ThrowTypeError()</code></b></a>
 - <a href="#api_nan_fatal_exception"><b><code>Nan::FatalException()</code></b></a>
 - <a href="#api_nan_errno_exception"><b><code>Nan::ErrnoException()</code></b></a>
 - <a href="#api_nan_try_catch"><b><code>Nan::TryCatch</code></b></a>


<a name="api_nan_error"></a>
### Nan::Error()

Create a new Error object using the [v8::Exception](https://v8docs.nodesource.com/node-8.16/da/d6a/classv8_1_1_exception.html) class in a way that is compatible across the supported versions of V8.

Note that an Error object is simply a specialized form of \`v8::Value\`.

Signature:

\`\`\`c++
v8::Local<v8::Value> Nan::Error(const char *msg);
v8::Local<v8::Value> Nan::Error(v8::Local<v8::String> msg);
\`\`\`


<a name="api_nan_range_error"></a>
### Nan::RangeError()

Create a new RangeError object using the [v8::Exception](https://v8docs.nodesource.com/node-8.16/da/d6a/classv8_1_1_exception.html) class in a way that is compatible across the supported versions of V8.

Note that an RangeError object is simply a specialized form of \`v8::Value\`.

Signature:

\`\`\`c++
v8::Local<v8::Value> Nan::RangeError(const char *msg);
v8::Local<v8::Value> Nan::RangeError(v8::Local<v8::String> msg);
\`\`\`


<a name="api_nan_reference_error"></a>
### Nan::ReferenceError()

Create a new ReferenceError object using the [v8::Exception](https://v8docs.nodesource.com/node-8.16/da/d6a/classv8_1_1_exception.html) class in a way that is compatible across the supported versions of V8.

Note that an ReferenceError object is simply a specialized form of \`v8::Value\`.

Signature:

\`\`\`c++
v8::Local<v8::Value> Nan::ReferenceError(const char *msg);
v8::Local<v8::Value> Nan::ReferenceError(v8::Local<v8::String> msg);
\`\`\`


<a name="api_nan_syntax_error"></a>
### Nan::SyntaxError()

Create a new SyntaxError object using the [v8::Exception](https://v8docs.nodesource.com/node-8.16/da/d6a/classv8_1_1_exception.html) class in a way that is compatible across the supported versions of V8.

Note that an SyntaxError object is simply a specialized form of \`v8::Value\`.

Signature:

\`\`\`c++
v8::Local<v8::Value> Nan::SyntaxError(const char *msg);
v8::Local<v8::Value> Nan::SyntaxError(v8::Local<v8::String> msg);
\`\`\`


<a name="api_nan_type_error"></a>
### Nan::TypeError()

Create a new TypeError object using the [v8::Exception](https://v8docs.nodesource.com/node-8.16/da/d6a/classv8_1_1_exception.html) class in a way that is compatible across the supported versions of V8.

Note that an TypeError object is simply a specialized form of \`v8::Value\`.

Signature:

\`\`\`c++
v8::Local<v8::Value> Nan::TypeError(const char *msg);
v8::Local<v8::Value> Nan::TypeError(v8::Local<v8::String> msg);
\`\`\`


<a name="api_nan_throw_error"></a>
### Nan::ThrowError()

Throw an Error object (a specialized \`v8::Value\` as above) in the current context. If a \`msg\` is provided, a new Error object will be created.

Signature:

\`\`\`c++
void Nan::ThrowError(const char *msg);
void Nan::ThrowError(v8::Local<v8::String> msg);
void Nan::ThrowError(v8::Local<v8::Value> error);
\`\`\`


<a name="api_nan_throw_range_error"></a>
### Nan::ThrowRangeError()

Throw an RangeError object (a specialized \`v8::Value\` as above) in the current context. If a \`msg\` is provided, a new RangeError object will be created.

Signature:

\`\`\`c++
void Nan::ThrowRangeError(const char *msg);
void Nan::ThrowRangeError(v8::Local<v8::String> msg);
void Nan::ThrowRangeError(v8::Local<v8::Value> error);
\`\`\`


<a name="api_nan_throw_reference_error"></a>
### Nan::ThrowReferenceError()

Throw an ReferenceError object (a specialized \`v8::Value\` as above) in the current context. If a \`msg\` is provided, a new ReferenceError object will be created.

Signature:

\`\`\`c++
void Nan::ThrowReferenceError(const char *msg);
void Nan::ThrowReferenceError(v8::Local<v8::String> msg);
void Nan::ThrowReferenceError(v8::Local<v8::Value> error);
\`\`\`


<a name="api_nan_throw_syntax_error"></a>
### Nan::ThrowSyntaxError()

Throw an SyntaxError object (a specialized \`v8::Value\` as above) in the current context. If a \`msg\` is provided, a new SyntaxError object will be created.

Signature:

\`\`\`c++
void Nan::ThrowSyntaxError(const char *msg);
void Nan::ThrowSyntaxError(v8::Local<v8::String> msg);
void Nan::ThrowSyntaxError(v8::Local<v8::Value> error);
\`\`\`


<a name="api_nan_throw_type_error"></a>
### Nan::ThrowTypeError()

Throw an TypeError object (a specialized \`v8::Value\` as above) in the current context. If a \`msg\` is provided, a new TypeError object will be created.

Signature:

\`\`\`c++
void Nan::ThrowTypeError(const char *msg);
void Nan::ThrowTypeError(v8::Local<v8::String> msg);
void Nan::ThrowTypeError(v8::Local<v8::Value> error);
\`\`\`

<a name="api_nan_fatal_exception"></a>
### Nan::FatalException()

Replaces \`node::FatalException()\` which has a different API across supported versions of Node. For use with [\`Nan::TryCatch\`](#api_nan_try_catch).

Signature:

\`\`\`c++
void Nan::FatalException(const Nan::TryCatch& try_catch);
\`\`\`

<a name="api_nan_errno_exception"></a>
### Nan::ErrnoException()

Replaces \`node::ErrnoException()\` which has a different API across supported versions of Node. 

Signature:

\`\`\`c++
v8::Local<v8::Value> Nan::ErrnoException(int errorno,
                                         const char* syscall = NULL,
                                         const char* message = NULL,
                                         const char* path = NULL);
\`\`\`


<a name="api_nan_try_catch"></a>
### Nan::TryCatch

A simple wrapper around [\`v8::TryCatch\`](https://v8docs.nodesource.com/node-8.16/d4/dc6/classv8_1_1_try_catch.html) compatible with all supported versions of V8. Can be used as a direct replacement in most cases. See also [\`Nan::FatalException()\`](#api_nan_fatal_exception) for an internal use compatible with \`node::FatalException\`.

Signature:

\`\`\`c++
class Nan::TryCatch {
 public:
  Nan::TryCatch();

  bool HasCaught() const;

  bool CanContinue() const;

  v8::Local<v8::Value> ReThrow();

  v8::Local<v8::Value> Exception() const;

  // Nan::MaybeLocal for older versions of V8
  v8::MaybeLocal<v8::Value> StackTrace() const;

  v8::Local<v8::Message> Message() const;

  void Reset();

  void SetVerbose(bool value);

  void SetCaptureMessage(bool value);
};
\`\`\`

`,
        "json.md": `## JSON

The _JSON_ object provides the c++ versions of the methods offered by the \`JSON\` object in javascript. V8 exposes these methods via the \`v8::JSON\` object.

 - <a href="#api_nan_json_parse"><b><code>Nan::JSON.Parse</code></b></a>
 - <a href="#api_nan_json_stringify"><b><code>Nan::JSON.Stringify</code></b></a>

Refer to the V8 JSON object in the [V8 documentation](https://v8docs.nodesource.com/node-8.16/da/d6f/classv8_1_1_j_s_o_n.html) for more information about these methods and their arguments.

<a name="api_nan_json_parse"></a>

### Nan::JSON.Parse

A simple wrapper around [\`v8::JSON::Parse\`](https://v8docs.nodesource.com/node-8.16/da/d6f/classv8_1_1_j_s_o_n.html#a936310d2540fb630ed37d3ee3ffe4504).

Definition:

\`\`\`c++
Nan::MaybeLocal<v8::Value> Nan::JSON::Parse(v8::Local<v8::String> json_string);
\`\`\`

Use \`JSON.Parse(json_string)\` to parse a string into a \`v8::Value\`.

Example:

\`\`\`c++
v8::Local<v8::String> json_string = Nan::New("{ \\"JSON\\": \\"object\\" }").ToLocalChecked();

Nan::JSON NanJSON;
Nan::MaybeLocal<v8::Value> result = NanJSON.Parse(json_string);
if (!result.IsEmpty()) {
  v8::Local<v8::Value> val = result.ToLocalChecked();
}
\`\`\`

<a name="api_nan_json_stringify"></a>

### Nan::JSON.Stringify

A simple wrapper around [\`v8::JSON::Stringify\`](https://v8docs.nodesource.com/node-8.16/da/d6f/classv8_1_1_j_s_o_n.html#a44b255c3531489ce43f6110209138860).

Definition:

\`\`\`c++
Nan::MaybeLocal<v8::String> Nan::JSON::Stringify(v8::Local<v8::Object> json_object, v8::Local<v8::String> gap = v8::Local<v8::String>());
\`\`\`

Use \`JSON.Stringify(value)\` to stringify a \`v8::Object\`.

Example:

\`\`\`c++
// using \`v8::Local<v8::Value> val\` from the \`JSON::Parse\` example
v8::Local<v8::Object> obj = Nan::To<v8::Object>(val).ToLocalChecked();

Nan::JSON NanJSON;
Nan::MaybeLocal<v8::String> result = NanJSON.Stringify(obj);
if (!result.IsEmpty()) {
  v8::Local<v8::String> stringified = result.ToLocalChecked();
}
\`\`\`

`,
        "maybe_types.md": `## Maybe Types

The \`Nan::MaybeLocal\` and \`Nan::Maybe\` types are monads that encapsulate \`v8::Local\` handles that _may be empty_.

* **Maybe Types**
  - <a href="#api_nan_maybe_local"><b><code>Nan::MaybeLocal</code></b></a>
  - <a href="#api_nan_maybe"><b><code>Nan::Maybe</code></b></a>
  - <a href="#api_nan_nothing"><b><code>Nan::Nothing</code></b></a>
  - <a href="#api_nan_just"><b><code>Nan::Just</code></b></a>
* **Maybe Helpers**
  - <a href="#api_nan_call"><b><code>Nan::Call()</code></b></a>
  - <a href="#api_nan_to_detail_string"><b><code>Nan::ToDetailString()</code></b></a>
  - <a href="#api_nan_to_array_index"><b><code>Nan::ToArrayIndex()</code></b></a>
  - <a href="#api_nan_equals"><b><code>Nan::Equals()</code></b></a>
  - <a href="#api_nan_new_instance"><b><code>Nan::NewInstance()</code></b></a>
  - <a href="#api_nan_get_function"><b><code>Nan::GetFunction()</code></b></a>
  - <a href="#api_nan_set"><b><code>Nan::Set()</code></b></a>
  - <a href="#api_nan_define_own_property"><b><code>Nan::DefineOwnProperty()</code></b></a>
  - <a href="#api_nan_force_set"><del><b><code>Nan::ForceSet()</code></b></del></a>
  - <a href="#api_nan_get"><b><code>Nan::Get()</code></b></a>
  - <a href="#api_nan_get_property_attribute"><b><code>Nan::GetPropertyAttributes()</code></b></a>
  - <a href="#api_nan_has"><b><code>Nan::Has()</code></b></a>
  - <a href="#api_nan_delete"><b><code>Nan::Delete()</code></b></a>
  - <a href="#api_nan_get_property_names"><b><code>Nan::GetPropertyNames()</code></b></a>
  - <a href="#api_nan_get_own_property_names"><b><code>Nan::GetOwnPropertyNames()</code></b></a>
  - <a href="#api_nan_set_prototype"><b><code>Nan::SetPrototype()</code></b></a>
  - <a href="#api_nan_object_proto_to_string"><b><code>Nan::ObjectProtoToString()</code></b></a>
  - <a href="#api_nan_has_own_property"><b><code>Nan::HasOwnProperty()</code></b></a>
  - <a href="#api_nan_has_real_named_property"><b><code>Nan::HasRealNamedProperty()</code></b></a>
  - <a href="#api_nan_has_real_indexed_property"><b><code>Nan::HasRealIndexedProperty()</code></b></a>
  - <a href="#api_nan_has_real_named_callback_property"><b><code>Nan::HasRealNamedCallbackProperty()</code></b></a>
  - <a href="#api_nan_get_real_named_property_in_prototype_chain"><b><code>Nan::GetRealNamedPropertyInPrototypeChain()</code></b></a>
  - <a href="#api_nan_get_real_named_property"><b><code>Nan::GetRealNamedProperty()</code></b></a>
  - <a href="#api_nan_call_as_function"><b><code>Nan::CallAsFunction()</code></b></a>
  - <a href="#api_nan_call_as_constructor"><b><code>Nan::CallAsConstructor()</code></b></a>
  - <a href="#api_nan_get_source_line"><b><code>Nan::GetSourceLine()</code></b></a>
  - <a href="#api_nan_get_line_number"><b><code>Nan::GetLineNumber()</code></b></a>
  - <a href="#api_nan_get_start_column"><b><code>Nan::GetStartColumn()</code></b></a>
  - <a href="#api_nan_get_end_column"><b><code>Nan::GetEndColumn()</code></b></a>
  - <a href="#api_nan_clone_element_at"><b><code>Nan::CloneElementAt()</code></b></a>
  - <a href="#api_nan_has_private"><b><code>Nan::HasPrivate()</code></b></a>
  - <a href="#api_nan_get_private"><b><code>Nan::GetPrivate()</code></b></a>
  - <a href="#api_nan_set_private"><b><code>Nan::SetPrivate()</code></b></a>
  - <a href="#api_nan_delete_private"><b><code>Nan::DeletePrivate()</code></b></a>
  - <a href="#api_nan_make_maybe"><b><code>Nan::MakeMaybe()</code></b></a>

<a name="api_nan_maybe_local"></a>
### Nan::MaybeLocal

A \`Nan::MaybeLocal<T>\` is a wrapper around [\`v8::Local<T>\`](https://v8docs.nodesource.com/node-8.16/de/deb/classv8_1_1_local.html) that enforces a check that determines whether the \`v8::Local<T>\` is empty before it can be used.

If an API method returns a \`Nan::MaybeLocal\`, the API method can potentially fail either because an exception is thrown, or because an exception is pending, e.g. because a previous API call threw an exception that hasn't been caught yet, or because a \`v8::TerminateExecution\` exception was thrown. In that case, an empty \`Nan::MaybeLocal\` is returned.

Definition:

\`\`\`c++
template<typename T> class Nan::MaybeLocal {
 public:
  MaybeLocal();

  template<typename S> MaybeLocal(v8::Local<S> that);

  bool IsEmpty() const;

  template<typename S> bool ToLocal(v8::Local<S> *out);

  // Will crash if the MaybeLocal<> is empty.
  v8::Local<T> ToLocalChecked();

  template<typename S> v8::Local<S> FromMaybe(v8::Local<S> default_value) const;
};
\`\`\`

See the documentation for [\`v8::MaybeLocal\`](https://v8docs.nodesource.com/node-8.16/d8/d7d/classv8_1_1_maybe_local.html) for further details.

<a name="api_nan_maybe"></a>
### Nan::Maybe

A simple \`Nan::Maybe\` type, representing an object which may or may not have a value, see https://hackage.haskell.org/package/base/docs/Data-Maybe.html.

If an API method returns a \`Nan::Maybe<>\`, the API method can potentially fail either because an exception is thrown, or because an exception is pending, e.g. because a previous API call threw an exception that hasn't been caught yet, or because a \`v8::TerminateExecution\` exception was thrown. In that case, a "Nothing" value is returned.

Definition:

\`\`\`c++
template<typename T> class Nan::Maybe {
 public:
  bool IsNothing() const;
  bool IsJust() const;

  // Will crash if the Maybe<> is nothing.
  T FromJust();

  T FromMaybe(const T& default_value);

  bool operator==(const Maybe &other);

  bool operator!=(const Maybe &other);
};
\`\`\`

See the documentation for [\`v8::Maybe\`](https://v8docs.nodesource.com/node-8.16/d9/d4b/classv8_1_1_maybe.html) for further details.

<a name="api_nan_nothing"></a>
### Nan::Nothing

Construct an empty \`Nan::Maybe\` type representing _nothing_.

\`\`\`c++
template<typename T> Nan::Maybe<T> Nan::Nothing();
\`\`\`

<a name="api_nan_just"></a>
### Nan::Just

Construct a \`Nan::Maybe\` type representing _just_ a value.

\`\`\`c++
template<typename T> Nan::Maybe<T> Nan::Just(const T &t);
\`\`\`

<a name="api_nan_call"></a>
### Nan::Call()

A helper method for calling a synchronous [\`v8::Function#Call()\`](https://v8docs.nodesource.com/node-8.16/d5/d54/classv8_1_1_function.html#a9c3d0e4e13ddd7721fce238aa5b94a11) in a way compatible across supported versions of V8.

For asynchronous callbacks, use Nan::Callback::Call along with an AsyncResource.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Value> Nan::Call(v8::Local<v8::Function> fun, v8::Local<v8::Object> recv, int argc, v8::Local<v8::Value> argv[]);
Nan::MaybeLocal<v8::Value> Nan::Call(const Nan::Callback& callback, v8::Local<v8::Object> recv,
 int argc, v8::Local<v8::Value> argv[]);
Nan::MaybeLocal<v8::Value> Nan::Call(const Nan::Callback& callback, int argc, v8::Local<v8::Value> argv[]);
\`\`\`


<a name="api_nan_to_detail_string"></a>
### Nan::ToDetailString()

A helper method for calling [\`v8::Value#ToDetailString()\`](https://v8docs.nodesource.com/node-8.16/dc/d0a/classv8_1_1_value.html#a2f9770296dc2c8d274bc8cc0dca243e5) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::String> Nan::ToDetailString(v8::Local<v8::Value> val);
\`\`\`


<a name="api_nan_to_array_index"></a>
### Nan::ToArrayIndex()

A helper method for calling [\`v8::Value#ToArrayIndex()\`](https://v8docs.nodesource.com/node-8.16/dc/d0a/classv8_1_1_value.html#acc5bbef3c805ec458470c0fcd6f13493) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Uint32> Nan::ToArrayIndex(v8::Local<v8::Value> val);
\`\`\`


<a name="api_nan_equals"></a>
### Nan::Equals()

A helper method for calling [\`v8::Value#Equals()\`](https://v8docs.nodesource.com/node-8.16/dc/d0a/classv8_1_1_value.html#a08fba1d776a59bbf6864b25f9152c64b) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::Equals(v8::Local<v8::Value> a, v8::Local<v8::Value>(b));
\`\`\`


<a name="api_nan_new_instance"></a>
### Nan::NewInstance()

A helper method for calling [\`v8::Function#NewInstance()\`](https://v8docs.nodesource.com/node-8.16/d5/d54/classv8_1_1_function.html#ae477558b10c14b76ed00e8dbab44ce5b) and [\`v8::ObjectTemplate#NewInstance()\`](https://v8docs.nodesource.com/node-8.16/db/d5f/classv8_1_1_object_template.html#ad605a7543cfbc5dab54cdb0883d14ae4) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Object> Nan::NewInstance(v8::Local<v8::Function> h);
Nan::MaybeLocal<v8::Object> Nan::NewInstance(v8::Local<v8::Function> h, int argc, v8::Local<v8::Value> argv[]);
Nan::MaybeLocal<v8::Object> Nan::NewInstance(v8::Local<v8::ObjectTemplate> h);
\`\`\`


<a name="api_nan_get_function"></a>
### Nan::GetFunction()

A helper method for calling [\`v8::FunctionTemplate#GetFunction()\`](https://v8docs.nodesource.com/node-8.16/d8/d83/classv8_1_1_function_template.html#a56d904662a86eca78da37d9bb0ed3705) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Function> Nan::GetFunction(v8::Local<v8::FunctionTemplate> t);
\`\`\`


<a name="api_nan_set"></a>
### Nan::Set()

A helper method for calling [\`v8::Object#Set()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a67604ea3734f170c66026064ea808f20) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::Set(v8::Local<v8::Object> obj,
                          v8::Local<v8::Value> key,
                          v8::Local<v8::Value> value)
Nan::Maybe<bool> Nan::Set(v8::Local<v8::Object> obj,
                          uint32_t index,
                          v8::Local<v8::Value> value);
\`\`\`


<a name="api_nan_define_own_property"></a>
### Nan::DefineOwnProperty()

A helper method for calling [\`v8::Object#DefineOwnProperty()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a6f76b2ed605cb8f9185b92de0033a820) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::DefineOwnProperty(v8::Local<v8::Object> obj,
                                        v8::Local<v8::String> key,
                                        v8::Local<v8::Value> value,
                                        v8::PropertyAttribute attribs = v8::None);
\`\`\`


<a name="api_nan_force_set"></a>
### <del>Nan::ForceSet()</del>

Deprecated, use <a href="#api_nan_define_own_property"><code>Nan::DefineOwnProperty()</code></a>.

<del>A helper method for calling [\`v8::Object#ForceSet()\`](https://v8docs.nodesource.com/node-0.12/db/d85/classv8_1_1_object.html#acfbdfd7427b516ebdb5c47c4df5ed96c) in a way compatible across supported versions of V8.</del>

Signature:

\`\`\`c++
NAN_DEPRECATED Nan::Maybe<bool> Nan::ForceSet(v8::Local<v8::Object> obj,
                                              v8::Local<v8::Value> key,
                                              v8::Local<v8::Value> value,
                                              v8::PropertyAttribute attribs = v8::None);
\`\`\`


<a name="api_nan_get"></a>
### Nan::Get()

A helper method for calling [\`v8::Object#Get()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a2565f03e736694f6b1e1cf22a0b4eac2) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Value> Nan::Get(v8::Local<v8::Object> obj,
                                    v8::Local<v8::Value> key);
Nan::MaybeLocal<v8::Value> Nan::Get(v8::Local<v8::Object> obj, uint32_t index);
\`\`\`


<a name="api_nan_get_property_attribute"></a>
### Nan::GetPropertyAttributes()

A helper method for calling [\`v8::Object#GetPropertyAttributes()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a9b898894da3d1db2714fd9325a54fe57) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<v8::PropertyAttribute> Nan::GetPropertyAttributes(
    v8::Local<v8::Object> obj,
    v8::Local<v8::Value> key);
\`\`\`


<a name="api_nan_has"></a>
### Nan::Has()

A helper method for calling [\`v8::Object#Has()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#ab3c3d89ea7c2f9afd08965bd7299a41d) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::Has(v8::Local<v8::Object> obj, v8::Local<v8::String> key);
Nan::Maybe<bool> Nan::Has(v8::Local<v8::Object> obj, uint32_t index);
\`\`\`


<a name="api_nan_delete"></a>
### Nan::Delete()

A helper method for calling [\`v8::Object#Delete()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a48e4a19b2cedff867eecc73ddb7d377f) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::Delete(v8::Local<v8::Object> obj,
                             v8::Local<v8::String> key);
Nan::Maybe<bool> Nan::Delete(v8::Local<v8::Object> obj, uint32_t index);
\`\`\`


<a name="api_nan_get_property_names"></a>
### Nan::GetPropertyNames()

A helper method for calling [\`v8::Object#GetPropertyNames()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#aced885270cfd2c956367b5eedc7fbfe8) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Array> Nan::GetPropertyNames(v8::Local<v8::Object> obj);
\`\`\`


<a name="api_nan_get_own_property_names"></a>
### Nan::GetOwnPropertyNames()

A helper method for calling [\`v8::Object#GetOwnPropertyNames()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a79a6e4d66049b9aa648ed4dfdb23e6eb) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Array> Nan::GetOwnPropertyNames(v8::Local<v8::Object> obj);
\`\`\`


<a name="api_nan_set_prototype"></a>
### Nan::SetPrototype()

A helper method for calling [\`v8::Object#SetPrototype()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a442706b22fceda6e6d1f632122a9a9f4) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::SetPrototype(v8::Local<v8::Object> obj,
                                   v8::Local<v8::Value> prototype);
\`\`\`


<a name="api_nan_object_proto_to_string"></a>
### Nan::ObjectProtoToString()

A helper method for calling [\`v8::Object#ObjectProtoToString()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#ab7a92b4dcf822bef72f6c0ac6fea1f0b) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::String> Nan::ObjectProtoToString(v8::Local<v8::Object> obj);
\`\`\`


<a name="api_nan_has_own_property"></a>
### Nan::HasOwnProperty()

A helper method for calling [\`v8::Object#HasOwnProperty()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#ab7b7245442ca6de1e1c145ea3fd653ff) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::HasOwnProperty(v8::Local<v8::Object> obj,
                                     v8::Local<v8::String> key);
\`\`\`


<a name="api_nan_has_real_named_property"></a>
### Nan::HasRealNamedProperty()

A helper method for calling [\`v8::Object#HasRealNamedProperty()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#ad8b80a59c9eb3c1e6c3cd6c84571f767) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::HasRealNamedProperty(v8::Local<v8::Object> obj,
                                           v8::Local<v8::String> key);
\`\`\`


<a name="api_nan_has_real_indexed_property"></a>
### Nan::HasRealIndexedProperty()

A helper method for calling [\`v8::Object#HasRealIndexedProperty()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#af94fc1135a5e74a2193fb72c3a1b9855) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::HasRealIndexedProperty(v8::Local<v8::Object> obj,
                                             uint32_t index);
\`\`\`


<a name="api_nan_has_real_named_callback_property"></a>
### Nan::HasRealNamedCallbackProperty()

A helper method for calling [\`v8::Object#HasRealNamedCallbackProperty()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#af743b7ea132b89f84d34d164d0668811) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::HasRealNamedCallbackProperty(
    v8::Local<v8::Object> obj,
    v8::Local<v8::String> key);
\`\`\`


<a name="api_nan_get_real_named_property_in_prototype_chain"></a>
### Nan::GetRealNamedPropertyInPrototypeChain()

A helper method for calling [\`v8::Object#GetRealNamedPropertyInPrototypeChain()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a8700b1862e6b4783716964ba4d5e6172) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Value> Nan::GetRealNamedPropertyInPrototypeChain(
    v8::Local<v8::Object> obj,
    v8::Local<v8::String> key);
\`\`\`


<a name="api_nan_get_real_named_property"></a>
### Nan::GetRealNamedProperty()

A helper method for calling [\`v8::Object#GetRealNamedProperty()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a84471a824576a5994fdd0ffcbf99ccc0) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Value> Nan::GetRealNamedProperty(v8::Local<v8::Object> obj,
                                                     v8::Local<v8::String> key);
\`\`\`


<a name="api_nan_call_as_function"></a>
### Nan::CallAsFunction()

A helper method for calling [\`v8::Object#CallAsFunction()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#ad3ffc36f3dfc3592ce2a96bc047ee2cd) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Value> Nan::CallAsFunction(v8::Local<v8::Object> obj,
                                               v8::Local<v8::Object> recv,
                                               int argc,
                                               v8::Local<v8::Value> argv[]);
\`\`\`


<a name="api_nan_call_as_constructor"></a>
### Nan::CallAsConstructor()

A helper method for calling [\`v8::Object#CallAsConstructor()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a50d571de50d0b0dfb28795619d07a01b) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Value> Nan::CallAsConstructor(v8::Local<v8::Object> obj,
                                                  int argc,
                                                  v8::Local<v8::Value> argv[]);
\`\`\`


<a name="api_nan_get_source_line"></a>
### Nan::GetSourceLine()

A helper method for calling [\`v8::Message#GetSourceLine()\`](https://v8docs.nodesource.com/node-8.16/d9/d28/classv8_1_1_message.html#a849f7a6c41549d83d8159825efccd23a) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::String> Nan::GetSourceLine(v8::Local<v8::Message> msg);
\`\`\`


<a name="api_nan_get_line_number"></a>
### Nan::GetLineNumber()

A helper method for calling [\`v8::Message#GetLineNumber()\`](https://v8docs.nodesource.com/node-8.16/d9/d28/classv8_1_1_message.html#adbe46c10a88a6565f2732a2d2adf99b9) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<int> Nan::GetLineNumber(v8::Local<v8::Message> msg);
\`\`\`


<a name="api_nan_get_start_column"></a>
### Nan::GetStartColumn()

A helper method for calling [\`v8::Message#GetStartColumn()\`](https://v8docs.nodesource.com/node-8.16/d9/d28/classv8_1_1_message.html#a60ede616ba3822d712e44c7a74487ba6) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<int> Nan::GetStartColumn(v8::Local<v8::Message> msg);
\`\`\`


<a name="api_nan_get_end_column"></a>
### Nan::GetEndColumn()

A helper method for calling [\`v8::Message#GetEndColumn()\`](https://v8docs.nodesource.com/node-8.16/d9/d28/classv8_1_1_message.html#aaa004cf19e529da980bc19fcb76d93be) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<int> Nan::GetEndColumn(v8::Local<v8::Message> msg);
\`\`\`


<a name="api_nan_clone_element_at"></a>
### Nan::CloneElementAt()

A helper method for calling [\`v8::Array#CloneElementAt()\`](https://v8docs.nodesource.com/node-4.8/d3/d32/classv8_1_1_array.html#a1d3a878d4c1c7cae974dd50a1639245e) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Object> Nan::CloneElementAt(v8::Local<v8::Array> array, uint32_t index);
\`\`\`

<a name="api_nan_has_private"></a>
### Nan::HasPrivate()

A helper method for calling [\`v8::Object#HasPrivate()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#af68a0b98066cfdeb8f943e98a40ba08d) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::HasPrivate(v8::Local<v8::Object> object, v8::Local<v8::String> key);
\`\`\`

<a name="api_nan_get_private"></a>
### Nan::GetPrivate()

A helper method for calling [\`v8::Object#GetPrivate()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a169f2da506acbec34deadd9149a1925a) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Value> Nan::GetPrivate(v8::Local<v8::Object> object, v8::Local<v8::String> key);
\`\`\`

<a name="api_nan_set_private"></a>
### Nan::SetPrivate()

A helper method for calling [\`v8::Object#SetPrivate()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#ace1769b0f3b86bfe9fda1010916360ee) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::SetPrivate(v8::Local<v8::Object> object, v8::Local<v8::String> key, v8::Local<v8::Value> value);
\`\`\`

<a name="api_nan_delete_private"></a>
### Nan::DeletePrivate()

A helper method for calling [\`v8::Object#DeletePrivate()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a138bb32a304f3982be02ad499693b8fd) in a way compatible across supported versions of V8.

Signature:

\`\`\`c++
Nan::Maybe<bool> Nan::DeletePrivate(v8::Local<v8::Object> object, v8::Local<v8::String> key);
\`\`\`

<a name="api_nan_make_maybe"></a>
### Nan::MakeMaybe()

Wraps a \`v8::Local<>\` in a \`Nan::MaybeLocal<>\`. When called with a \`Nan::MaybeLocal<>\` it just returns its argument. This is useful in generic template code that builds on NAN.

Synopsis:

\`\`\`c++
  MaybeLocal<v8::Number> someNumber = MakeMaybe(New<v8::Number>(3.141592654));
  MaybeLocal<v8::String> someString = MakeMaybe(New<v8::String>("probably"));
\`\`\`

Signature:

\`\`\`c++
template <typename T, template <typename> class MaybeMaybe>
Nan::MaybeLocal<T> Nan::MakeMaybe(MaybeMaybe<T> v);
\`\`\`
`,
        "methods.md": `## JavaScript-accessible methods

A _template_ is a blueprint for JavaScript functions and objects in a context. You can use a template to wrap C++ functions and data structures within JavaScript objects so that they can be manipulated from JavaScript. See the V8 Embedders Guide section on [Templates](https://github.com/v8/v8/wiki/Embedder%27s-Guide#templates) for further information.

In order to expose functionality to JavaScript via a template, you must provide it to V8 in a form that it understands. Across the versions of V8 supported by NAN, JavaScript-accessible method signatures vary widely, NAN fully abstracts method declaration and provides you with an interface that is similar to the most recent V8 API but is backward-compatible with older versions that still use the now-deceased \`v8::Argument\` type.

* **Method argument types**
 - <a href="#api_nan_function_callback_info"><b><code>Nan::FunctionCallbackInfo</code></b></a>
 - <a href="#api_nan_property_callback_info"><b><code>Nan::PropertyCallbackInfo</code></b></a>
 - <a href="#api_nan_return_value"><b><code>Nan::ReturnValue</code></b></a>
* **Method declarations**
 - <a href="#api_nan_method"><b>Method declaration</b></a>
 - <a href="#api_nan_getter"><b>Getter declaration</b></a>
 - <a href="#api_nan_setter"><b>Setter declaration</b></a>
 - <a href="#api_nan_property_getter"><b>Property getter declaration</b></a>
 - <a href="#api_nan_property_setter"><b>Property setter declaration</b></a>
 - <a href="#api_nan_property_enumerator"><b>Property enumerator declaration</b></a>
 - <a href="#api_nan_property_deleter"><b>Property deleter declaration</b></a>
 - <a href="#api_nan_property_query"><b>Property query declaration</b></a>
 - <a href="#api_nan_index_getter"><b>Index getter declaration</b></a>
 - <a href="#api_nan_index_setter"><b>Index setter declaration</b></a>
 - <a href="#api_nan_index_enumerator"><b>Index enumerator declaration</b></a>
 - <a href="#api_nan_index_deleter"><b>Index deleter declaration</b></a>
 - <a href="#api_nan_index_query"><b>Index query declaration</b></a>
* Method and template helpers
 - <a href="#api_nan_set_method"><b><code>Nan::SetMethod()</code></b></a>
 - <a href="#api_nan_set_prototype_method"><b><code>Nan::SetPrototypeMethod()</code></b></a>
 - <a href="#api_nan_set_accessor"><b><code>Nan::SetAccessor()</code></b></a>
 - <a href="#api_nan_set_named_property_handler"><b><code>Nan::SetNamedPropertyHandler()</code></b></a>
 - <a href="#api_nan_set_indexed_property_handler"><b><code>Nan::SetIndexedPropertyHandler()</code></b></a>
 - <a href="#api_nan_set_template"><b><code>Nan::SetTemplate()</code></b></a>
 - <a href="#api_nan_set_prototype_template"><b><code>Nan::SetPrototypeTemplate()</code></b></a>
 - <a href="#api_nan_set_instance_template"><b><code>Nan::SetInstanceTemplate()</code></b></a>
 - <a href="#api_nan_set_call_handler"><b><code>Nan::SetCallHandler()</code></b></a>
 - <a href="#api_nan_set_call_as_function_handler"><b><code>Nan::SetCallAsFunctionHandler()</code></b></a>

<a name="api_nan_function_callback_info"></a>
### Nan::FunctionCallbackInfo

\`Nan::FunctionCallbackInfo\` should be used in place of [\`v8::FunctionCallbackInfo\`](https://v8docs.nodesource.com/node-8.16/dd/d0d/classv8_1_1_function_callback_info.html), even with older versions of Node where \`v8::FunctionCallbackInfo\` does not exist.

Definition:

\`\`\`c++
template<typename T> class FunctionCallbackInfo {
 public:
  ReturnValue<T> GetReturnValue() const;
  v8::Local<v8::Function> Callee(); // NOTE: Not available in NodeJS >= 10.0.0
  v8::Local<v8::Value> Data();
  v8::Local<v8::Object> Holder();
  bool IsConstructCall();
  int Length() const;
  v8::Local<v8::Value> operator[](int i) const;
  v8::Local<v8::Object> This() const;
  v8::Isolate *GetIsolate() const;
};
\`\`\`

See the [\`v8::FunctionCallbackInfo\`](https://v8docs.nodesource.com/node-8.16/dd/d0d/classv8_1_1_function_callback_info.html) documentation for usage details on these. See [\`Nan::ReturnValue\`](#api_nan_return_value) for further information on how to set a return value from methods.

**Note:** \`FunctionCallbackInfo::Callee\` is removed in Node.js after \`10.0.0\` because it is was deprecated in V8. Consider using \`info.Data()\` to pass any information you need.

<a name="api_nan_property_callback_info"></a>
### Nan::PropertyCallbackInfo

\`Nan::PropertyCallbackInfo\` should be used in place of [\`v8::PropertyCallbackInfo\`](https://v8docs.nodesource.com/node-8.16/d7/dc5/classv8_1_1_property_callback_info.html), even with older versions of Node where \`v8::PropertyCallbackInfo\` does not exist.

Definition:

\`\`\`c++
template<typename T> class PropertyCallbackInfo : public PropertyCallbackInfoBase<T> {
 public:
  ReturnValue<T> GetReturnValue() const;
  v8::Isolate* GetIsolate() const;
  v8::Local<v8::Value> Data() const;
  v8::Local<v8::Object> This() const;
  v8::Local<v8::Object> Holder() const;
};
\`\`\`

See the [\`v8::PropertyCallbackInfo\`](https://v8docs.nodesource.com/node-8.16/d7/dc5/classv8_1_1_property_callback_info.html) documentation for usage details on these. See [\`Nan::ReturnValue\`](#api_nan_return_value) for further information on how to set a return value from property accessor methods.

<a name="api_nan_return_value"></a>
### Nan::ReturnValue

\`Nan::ReturnValue\` is used in place of [\`v8::ReturnValue\`](https://v8docs.nodesource.com/node-8.16/da/da7/classv8_1_1_return_value.html) on both [\`Nan::FunctionCallbackInfo\`](#api_nan_function_callback_info) and [\`Nan::PropertyCallbackInfo\`](#api_nan_property_callback_info) as the return type of \`GetReturnValue()\`.

Example usage:

\`\`\`c++
void EmptyArray(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  info.GetReturnValue().Set(Nan::New<v8::Array>());
}
\`\`\`

Definition:

\`\`\`c++
template<typename T> class ReturnValue {
 public:
  // Handle setters
  template <typename S> void Set(const v8::Local<S> &handle);
  template <typename S> void Set(const Nan::Global<S> &handle);

  // Fast primitive setters
  void Set(bool value);
  void Set(double i);
  void Set(int32_t i);
  void Set(uint32_t i);

  // Fast JS primitive setters
  void SetNull();
  void SetUndefined();
  void SetEmptyString();

  // Convenience getter for isolate
  v8::Isolate *GetIsolate() const;
};
\`\`\`

See the documentation on [\`v8::ReturnValue\`](https://v8docs.nodesource.com/node-8.16/da/da7/classv8_1_1_return_value.html) for further information on this.

<a name="api_nan_method"></a>
### Method declaration

JavaScript-accessible methods should be declared with the following signature to form a \`Nan::FunctionCallback\`:

\`\`\`c++
typedef void(*FunctionCallback)(const FunctionCallbackInfo<v8::Value>&);
\`\`\`

Example:

\`\`\`c++
void MethodName(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  ...
}
\`\`\`

You do not need to declare a new \`HandleScope\` within a method as one is implicitly created for you.

**Example usage**

\`\`\`c++
// .h:
class Foo : public Nan::ObjectWrap {
  ...

  static void Bar(const Nan::FunctionCallbackInfo<v8::Value>& info);
  static void Baz(const Nan::FunctionCallbackInfo<v8::Value>& info);
}


// .cc:
void Foo::Bar(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  ...
}

void Foo::Baz(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  ...
}
\`\`\`

A helper macro \`NAN_METHOD(methodname)\` exists, compatible with NAN v1 method declarations.

**Example usage with \`NAN_METHOD(methodname)\`**

\`\`\`c++
// .h:
class Foo : public Nan::ObjectWrap {
  ...

  static NAN_METHOD(Bar);
  static NAN_METHOD(Baz);
}


// .cc:
NAN_METHOD(Foo::Bar) {
  ...
}

NAN_METHOD(Foo::Baz) {
  ...
}
\`\`\`

Use [\`Nan::SetPrototypeMethod\`](#api_nan_set_prototype_method) to attach a method to a JavaScript function prototype or [\`Nan::SetMethod\`](#api_nan_set_method) to attach a method directly on a JavaScript object.

<a name="api_nan_getter"></a>
### Getter declaration

JavaScript-accessible getters should be declared with the following signature to form a \`Nan::GetterCallback\`:

\`\`\`c++
typedef void(*GetterCallback)(v8::Local<v8::String>,
                              const PropertyCallbackInfo<v8::Value>&);
\`\`\`

Example:

\`\`\`c++
void GetterName(v8::Local<v8::String> property,
                const Nan::PropertyCallbackInfo<v8::Value>& info) {
  ...
}
\`\`\`

You do not need to declare a new \`HandleScope\` within a getter as one is implicitly created for you.

A helper macro \`NAN_GETTER(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on [Accessors](https://developers.google.com/v8/embed#accesssors).

<a name="api_nan_setter"></a>
### Setter declaration

JavaScript-accessible setters should be declared with the following signature to form a <b><code>Nan::SetterCallback</code></b>:

\`\`\`c++
typedef void(*SetterCallback)(v8::Local<v8::String>,
                              v8::Local<v8::Value>,
                              const PropertyCallbackInfo<void>&);
\`\`\`

Example:

\`\`\`c++
void SetterName(v8::Local<v8::String> property,
                v8::Local<v8::Value> value,
                const Nan::PropertyCallbackInfo<void>& info) {
  ...
}
\`\`\`

You do not need to declare a new \`HandleScope\` within a setter as one is implicitly created for you.

A helper macro \`NAN_SETTER(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on [Accessors](https://developers.google.com/v8/embed#accesssors).

<a name="api_nan_property_getter"></a>
### Property getter declaration

JavaScript-accessible property getters should be declared with the following signature to form a <b><code>Nan::PropertyGetterCallback</code></b>:

\`\`\`c++
typedef void(*PropertyGetterCallback)(v8::Local<v8::String>,
                                      const PropertyCallbackInfo<v8::Value>&);
\`\`\`

Example:

\`\`\`c++
void PropertyGetterName(v8::Local<v8::String> property,
                        const Nan::PropertyCallbackInfo<v8::Value>& info) {
  ...
}
\`\`\`

You do not need to declare a new \`HandleScope\` within a property getter as one is implicitly created for you.

A helper macro \`NAN_PROPERTY_GETTER(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on named property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_property_setter"></a>
### Property setter declaration

JavaScript-accessible property setters should be declared with the following signature to form a <b><code>Nan::PropertySetterCallback</code></b>:

\`\`\`c++
typedef void(*PropertySetterCallback)(v8::Local<v8::String>,
                                      v8::Local<v8::Value>,
                                      const PropertyCallbackInfo<v8::Value>&);
\`\`\`

Example:

\`\`\`c++
void PropertySetterName(v8::Local<v8::String> property,
                        v8::Local<v8::Value> value,
                        const Nan::PropertyCallbackInfo<v8::Value>& info);
\`\`\`

You do not need to declare a new \`HandleScope\` within a property setter as one is implicitly created for you.

A helper macro \`NAN_PROPERTY_SETTER(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on named property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_property_enumerator"></a>
### Property enumerator declaration

JavaScript-accessible property enumerators should be declared with the following signature to form a <b><code>Nan::PropertyEnumeratorCallback</code></b>:

\`\`\`c++
typedef void(*PropertyEnumeratorCallback)(const PropertyCallbackInfo<v8::Array>&);
\`\`\`

Example:

\`\`\`c++
void PropertyEnumeratorName(const Nan::PropertyCallbackInfo<v8::Array>& info);
\`\`\`

You do not need to declare a new \`HandleScope\` within a property enumerator as one is implicitly created for you.

A helper macro \`NAN_PROPERTY_ENUMERATOR(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on named property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_property_deleter"></a>
### Property deleter declaration

JavaScript-accessible property deleters should be declared with the following signature to form a <b><code>Nan::PropertyDeleterCallback</code></b>:

\`\`\`c++
typedef void(*PropertyDeleterCallback)(v8::Local<v8::String>,
                                       const PropertyCallbackInfo<v8::Boolean>&);
\`\`\`

Example:

\`\`\`c++
void PropertyDeleterName(v8::Local<v8::String> property,
                         const Nan::PropertyCallbackInfo<v8::Boolean>& info);
\`\`\`

You do not need to declare a new \`HandleScope\` within a property deleter as one is implicitly created for you.

A helper macro \`NAN_PROPERTY_DELETER(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on named property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_property_query"></a>
### Property query declaration

JavaScript-accessible property query methods should be declared with the following signature to form a <b><code>Nan::PropertyQueryCallback</code></b>:

\`\`\`c++
typedef void(*PropertyQueryCallback)(v8::Local<v8::String>,
                                     const PropertyCallbackInfo<v8::Integer>&);
\`\`\`

Example:

\`\`\`c++
void PropertyQueryName(v8::Local<v8::String> property,
                       const Nan::PropertyCallbackInfo<v8::Integer>& info);
\`\`\`

You do not need to declare a new \`HandleScope\` within a property query method as one is implicitly created for you.

A helper macro \`NAN_PROPERTY_QUERY(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on named property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_index_getter"></a>
### Index getter declaration

JavaScript-accessible index getter methods should be declared with the following signature to form a <b><code>Nan::IndexGetterCallback</code></b>:

\`\`\`c++
typedef void(*IndexGetterCallback)(uint32_t,
                                   const PropertyCallbackInfo<v8::Value>&);
\`\`\`

Example:

\`\`\`c++
void IndexGetterName(uint32_t index, const PropertyCallbackInfo<v8::Value>& info);
\`\`\`

You do not need to declare a new \`HandleScope\` within a index getter as one is implicitly created for you.

A helper macro \`NAN_INDEX_GETTER(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on indexed property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_index_setter"></a>
### Index setter declaration

JavaScript-accessible index setter methods should be declared with the following signature to form a <b><code>Nan::IndexSetterCallback</code></b>:

\`\`\`c++
typedef void(*IndexSetterCallback)(uint32_t,
                                   v8::Local<v8::Value>,
                                   const PropertyCallbackInfo<v8::Value>&);
\`\`\`

Example:

\`\`\`c++
void IndexSetterName(uint32_t index,
                     v8::Local<v8::Value> value,
                     const PropertyCallbackInfo<v8::Value>& info);
\`\`\`

You do not need to declare a new \`HandleScope\` within a index setter as one is implicitly created for you.

A helper macro \`NAN_INDEX_SETTER(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on indexed property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_index_enumerator"></a>
### Index enumerator declaration

JavaScript-accessible index enumerator methods should be declared with the following signature to form a <b><code>Nan::IndexEnumeratorCallback</code></b>:

\`\`\`c++
typedef void(*IndexEnumeratorCallback)(const PropertyCallbackInfo<v8::Array>&);
\`\`\`

Example:

\`\`\`c++
void IndexEnumeratorName(const PropertyCallbackInfo<v8::Array>& info);
\`\`\`

You do not need to declare a new \`HandleScope\` within a index enumerator as one is implicitly created for you.

A helper macro \`NAN_INDEX_ENUMERATOR(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on indexed property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_index_deleter"></a>
### Index deleter declaration

JavaScript-accessible index deleter methods should be declared with the following signature to form a <b><code>Nan::IndexDeleterCallback</code></b>:

\`\`\`c++
typedef void(*IndexDeleterCallback)(uint32_t,
                                    const PropertyCallbackInfo<v8::Boolean>&);
\`\`\`

Example:

\`\`\`c++
void IndexDeleterName(uint32_t index, const PropertyCallbackInfo<v8::Boolean>& info);
\`\`\`

You do not need to declare a new \`HandleScope\` within a index deleter as one is implicitly created for you.

A helper macro \`NAN_INDEX_DELETER(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on indexed property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_index_query"></a>
### Index query declaration

JavaScript-accessible index query methods should be declared with the following signature to form a <b><code>Nan::IndexQueryCallback</code></b>:

\`\`\`c++
typedef void(*IndexQueryCallback)(uint32_t,
                                  const PropertyCallbackInfo<v8::Integer>&);
\`\`\`

Example:

\`\`\`c++
void IndexQueryName(uint32_t index, const PropertyCallbackInfo<v8::Integer>& info);
\`\`\`

You do not need to declare a new \`HandleScope\` within a index query method as one is implicitly created for you.

A helper macro \`NAN_INDEX_QUERY(methodname)\` exists, compatible with NAN v1 method declarations.

Also see the V8 Embedders Guide documentation on indexed property [Interceptors](https://developers.google.com/v8/embed#interceptors).

<a name="api_nan_set_method"></a>
### Nan::SetMethod()

Sets a method with a given name directly on a JavaScript object where the method has the \`Nan::FunctionCallback\` signature (see <a href="#api_nan_method">Method declaration</a>).

Signature:

\`\`\`c++
void Nan::SetMethod(v8::Local<v8::Object> recv,
                    const char *name,
                    Nan::FunctionCallback callback,
                    v8::Local<v8::Value> data = v8::Local<v8::Value>())
void Nan::SetMethod(v8::Local<v8::Template> templ,
                    const char *name,
                    Nan::FunctionCallback callback,
                    v8::Local<v8::Value> data = v8::Local<v8::Value>())
\`\`\`

<a name="api_nan_set_prototype_method"></a>
### Nan::SetPrototypeMethod()

Sets a method with a given name on a \`FunctionTemplate\`'s prototype where the method has the \`Nan::FunctionCallback\` signature (see <a href="#api_nan_method">Method declaration</a>).

Signature:

\`\`\`c++
void Nan::SetPrototypeMethod(v8::Local<v8::FunctionTemplate> recv,
                             const char* name,
                             Nan::FunctionCallback callback,
                             v8::Local<v8::Value> data = v8::Local<v8::Value>())
\`\`\`

<a name="api_nan_set_accessor"></a>
### Nan::SetAccessor()

Sets getters and setters for a property with a given name on an \`ObjectTemplate\` or a plain \`Object\`. Accepts getters with the \`Nan::GetterCallback\` signature (see <a href="#api_nan_getter">Getter declaration</a>) and setters with the \`Nan::SetterCallback\` signature (see <a href="#api_nan_setter">Setter declaration</a>).

Signature:

\`\`\`c++
void SetAccessor(v8::Local<v8::ObjectTemplate> tpl,
                 v8::Local<v8::String> name,
                 Nan::GetterCallback getter,
                 Nan::SetterCallback setter = 0,
                 v8::Local<v8::Value> data = v8::Local<v8::Value>(),
                 v8::AccessControl settings = v8::DEFAULT,
                 v8::PropertyAttribute attribute = v8::None,
                 imp::Sig signature = imp::Sig());
bool SetAccessor(v8::Local<v8::Object> obj,
                 v8::Local<v8::String> name,
                 Nan::GetterCallback getter,
                 Nan::SetterCallback setter = 0,
                 v8::Local<v8::Value> data = v8::Local<v8::Value>(),
                 v8::AccessControl settings = v8::DEFAULT,
                 v8::PropertyAttribute attribute = v8::None)
\`\`\`

See the V8 [\`ObjectTemplate#SetAccessor()\`](https://v8docs.nodesource.com/node-8.16/db/d5f/classv8_1_1_object_template.html#aca0ed196f8a9adb1f68b1aadb6c9cd77) and [\`Object#SetAccessor()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#ae91b3b56b357f285288c89fbddc46d1b) for further information about how to use \`Nan::SetAccessor()\`.

<a name="api_nan_set_named_property_handler"></a>
### Nan::SetNamedPropertyHandler()

Sets named property getters, setters, query, deleter and enumerator methods on an \`ObjectTemplate\`. Accepts:

* Property getters with the \`Nan::PropertyGetterCallback\` signature (see <a href="#api_nan_property_getter">Property getter declaration</a>)
* Property setters with the \`Nan::PropertySetterCallback\` signature (see <a href="#api_nan_property_setter">Property setter declaration</a>)
* Property query methods with the \`Nan::PropertyQueryCallback\` signature (see <a href="#api_nan_property_query">Property query declaration</a>)
* Property deleters with the \`Nan::PropertyDeleterCallback\` signature (see <a href="#api_nan_property_deleter">Property deleter declaration</a>)
* Property enumerators with the \`Nan::PropertyEnumeratorCallback\` signature (see <a href="#api_nan_property_enumerator">Property enumerator declaration</a>)

Signature:

\`\`\`c++
void SetNamedPropertyHandler(v8::Local<v8::ObjectTemplate> tpl,
                             Nan::PropertyGetterCallback getter,
                             Nan::PropertySetterCallback setter = 0,
                             Nan::PropertyQueryCallback query = 0,
                             Nan::PropertyDeleterCallback deleter = 0,
                             Nan::PropertyEnumeratorCallback enumerator = 0,
                             v8::Local<v8::Value> data = v8::Local<v8::Value>())
\`\`\`

See the V8 [\`ObjectTemplate#SetNamedPropertyHandler()\`](https://v8docs.nodesource.com/node-8.16/db/d5f/classv8_1_1_object_template.html#a33b3ebd7de641f6cc6414b7de01fc1c7) for further information about how to use \`Nan::SetNamedPropertyHandler()\`.

<a name="api_nan_set_indexed_property_handler"></a>
### Nan::SetIndexedPropertyHandler()

Sets indexed property getters, setters, query, deleter and enumerator methods on an \`ObjectTemplate\`. Accepts:

* Indexed property getters with the \`Nan::IndexGetterCallback\` signature (see <a href="#api_nan_index_getter">Index getter declaration</a>)
* Indexed property setters with the \`Nan::IndexSetterCallback\` signature (see <a href="#api_nan_index_setter">Index setter declaration</a>)
* Indexed property query methods with the \`Nan::IndexQueryCallback\` signature (see <a href="#api_nan_index_query">Index query declaration</a>)
* Indexed property deleters with the \`Nan::IndexDeleterCallback\` signature (see <a href="#api_nan_index_deleter">Index deleter declaration</a>)
* Indexed property enumerators with the \`Nan::IndexEnumeratorCallback\` signature (see <a href="#api_nan_index_enumerator">Index enumerator declaration</a>)

Signature:

\`\`\`c++
void SetIndexedPropertyHandler(v8::Local<v8::ObjectTemplate> tpl,
                               Nan::IndexGetterCallback getter,
                               Nan::IndexSetterCallback setter = 0,
                               Nan::IndexQueryCallback query = 0,
                               Nan::IndexDeleterCallback deleter = 0,
                               Nan::IndexEnumeratorCallback enumerator = 0,
                               v8::Local<v8::Value> data = v8::Local<v8::Value>())
\`\`\`

See the V8 [\`ObjectTemplate#SetIndexedPropertyHandler()\`](https://v8docs.nodesource.com/node-8.16/db/d5f/classv8_1_1_object_template.html#ac89f06d634add0e890452033f7d17ff1) for further information about how to use \`Nan::SetIndexedPropertyHandler()\`.

<a name="api_nan_set_template"></a>
### Nan::SetTemplate()

Adds properties on an \`Object\`'s or \`Function\`'s template.

Signature:

\`\`\`c++
void Nan::SetTemplate(v8::Local<v8::Template> templ,
                      const char *name,
                      v8::Local<v8::Data> value);
void Nan::SetTemplate(v8::Local<v8::Template> templ,
                      v8::Local<v8::String> name,
                      v8::Local<v8::Data> value,
                      v8::PropertyAttribute attributes)
\`\`\`

Calls the \`Template\`'s [\`Set()\`](https://v8docs.nodesource.com/node-8.16/db/df7/classv8_1_1_template.html#ae3fbaff137557aa6a0233bc7e52214ac).

<a name="api_nan_set_prototype_template"></a>
### Nan::SetPrototypeTemplate()

Adds properties on an \`Object\`'s or \`Function\`'s prototype template.

Signature:

\`\`\`c++
void Nan::SetPrototypeTemplate(v8::Local<v8::FunctionTemplate> templ,
                               const char *name,
                               v8::Local<v8::Data> value);
void Nan::SetPrototypeTemplate(v8::Local<v8::FunctionTemplate> templ,
                               v8::Local<v8::String> name,
                               v8::Local<v8::Data> value,
                               v8::PropertyAttribute attributes)
\`\`\`

Calls the \`FunctionTemplate\`'s _PrototypeTemplate's_ [\`Set()\`](https://v8docs.nodesource.com/node-8.16/db/df7/classv8_1_1_template.html#a2db6a56597bf23c59659c0659e564ddf).

<a name="api_nan_set_instance_template"></a>
### Nan::SetInstanceTemplate()

Use to add instance properties on \`FunctionTemplate\`'s.

Signature:

\`\`\`c++
void Nan::SetInstanceTemplate(v8::Local<v8::FunctionTemplate> templ,
                              const char *name,
                              v8::Local<v8::Data> value);
void Nan::SetInstanceTemplate(v8::Local<v8::FunctionTemplate> templ,
                              v8::Local<v8::String> name,
                              v8::Local<v8::Data> value,
                              v8::PropertyAttribute attributes)
\`\`\`

Calls the \`FunctionTemplate\`'s _InstanceTemplate's_ [\`Set()\`](https://v8docs.nodesource.com/node-8.16/db/df7/classv8_1_1_template.html#a2db6a56597bf23c59659c0659e564ddf).

<a name="api_nan_set_call_handler"></a>
### Nan::SetCallHandler()

Set the call-handler callback for a \`v8::FunctionTemplate\`.
This callback is called whenever the function created from this FunctionTemplate is called.

Signature:

\`\`\`c++
void Nan::SetCallHandler(v8::Local<v8::FunctionTemplate> templ, Nan::FunctionCallback callback, v8::Local<v8::Value> data = v8::Local<v8::Value>())
\`\`\`

Calls the \`FunctionTemplate\`'s [\`SetCallHandler()\`](https://v8docs.nodesource.com/node-8.16/d8/d83/classv8_1_1_function_template.html#ab7574b298db3c27fbc2ed465c08ea2f8).

<a name="api_nan_set_call_as_function_handler"></a>
### Nan::SetCallAsFunctionHandler()

Sets the callback to be used when calling instances created from the \`v8::ObjectTemplate\` as a function.
If no callback is set, instances behave like normal JavaScript objects that cannot be called as a function.

Signature:

\`\`\`c++
void Nan::SetCallAsFunctionHandler(v8::Local<v8::ObjectTemplate> templ, Nan::FunctionCallback callback, v8::Local<v8::Value> data = v8::Local<v8::Value>())
\`\`\`

Calls the \`ObjectTemplate\`'s [\`SetCallAsFunctionHandler()\`](https://v8docs.nodesource.com/node-8.16/db/d5f/classv8_1_1_object_template.html#a5e9612fc80bf6db8f2da199b9b0bd04e).

`,
        "new.md": `## New

NAN provides a \`Nan::New()\` helper for the creation of new JavaScript objects in a way that's compatible across the supported versions of V8.

 - <a href="#api_nan_new"><b><code>Nan::New()</code></b></a>
 - <a href="#api_nan_undefined"><b><code>Nan::Undefined()</code></b></a>
 - <a href="#api_nan_null"><b><code>Nan::Null()</code></b></a>
 - <a href="#api_nan_true"><b><code>Nan::True()</code></b></a>
 - <a href="#api_nan_false"><b><code>Nan::False()</code></b></a>
 - <a href="#api_nan_empty_string"><b><code>Nan::EmptyString()</code></b></a>


<a name="api_nan_new"></a>
### Nan::New()

\`Nan::New()\` should be used to instantiate new JavaScript objects.

Refer to the specific V8 type in the [V8 documentation](https://v8docs.nodesource.com/node-8.16/d1/d83/classv8_1_1_data.html) for information on the types of arguments required for instantiation.

Signatures:

Return types are mostly omitted from the signatures for simplicity. In most cases the type will be contained within a \`v8::Local<T>\`. The following types will be contained within a \`Nan::MaybeLocal<T>\`: \`v8::String\`, \`v8::Date\`, \`v8::RegExp\`, \`v8::Script\`, \`v8::UnboundScript\`.

Empty objects:

\`\`\`c++
Nan::New<T>();
\`\`\`

Generic single and multiple-argument:

\`\`\`c++
Nan::New<T>(A0 arg0);
Nan::New<T>(A0 arg0, A1 arg1);
Nan::New<T>(A0 arg0, A1 arg1, A2 arg2);
Nan::New<T>(A0 arg0, A1 arg1, A2 arg2, A3 arg3);
\`\`\`

For creating \`v8::FunctionTemplate\` and \`v8::Function\` objects:

_The definition of \`Nan::FunctionCallback\` can be found in the [Method declaration](./methods.md#api_nan_method) documentation._

\`\`\`c++
Nan::New<T>(Nan::FunctionCallback callback,
            v8::Local<v8::Value> data = v8::Local<v8::Value>());
Nan::New<T>(Nan::FunctionCallback callback,
            v8::Local<v8::Value> data = v8::Local<v8::Value>(),
            A2 a2 = A2());
\`\`\`

Native number types:

\`\`\`c++
v8::Local<v8::Boolean> Nan::New<T>(bool value);
v8::Local<v8::Int32> Nan::New<T>(int32_t value);
v8::Local<v8::Uint32> Nan::New<T>(uint32_t value);
v8::Local<v8::Number> Nan::New<T>(double value);
\`\`\`

String types:

\`\`\`c++
Nan::MaybeLocal<v8::String> Nan::New<T>(std::string const& value);
Nan::MaybeLocal<v8::String> Nan::New<T>(const char * value, int length);
Nan::MaybeLocal<v8::String> Nan::New<T>(const char * value);
Nan::MaybeLocal<v8::String> Nan::New<T>(const uint16_t * value);
Nan::MaybeLocal<v8::String> Nan::New<T>(const uint16_t * value, int length);
\`\`\`

Specialized types:

\`\`\`c++
v8::Local<v8::String> Nan::New<T>(v8::String::ExternalStringResource * value);
v8::Local<v8::String> Nan::New<T>(Nan::ExternalOneByteStringResource * value);
v8::Local<v8::RegExp> Nan::New<T>(v8::Local<v8::String> pattern, v8::RegExp::Flags flags);
\`\`\`

Note that \`Nan::ExternalOneByteStringResource\` maps to [\`v8::String::ExternalOneByteStringResource\`](https://v8docs.nodesource.com/node-8.16/d9/db3/classv8_1_1_string_1_1_external_one_byte_string_resource.html), and \`v8::String::ExternalAsciiStringResource\` in older versions of V8.


<a name="api_nan_undefined"></a>
### Nan::Undefined()

A helper method to reference the \`v8::Undefined\` object in a way that is compatible across all supported versions of V8.

Signature:

\`\`\`c++
v8::Local<v8::Primitive> Nan::Undefined()
\`\`\`

<a name="api_nan_null"></a>
### Nan::Null()

A helper method to reference the \`v8::Null\` object in a way that is compatible across all supported versions of V8.

Signature:

\`\`\`c++
v8::Local<v8::Primitive> Nan::Null()
\`\`\`

<a name="api_nan_true"></a>
### Nan::True()

A helper method to reference the \`v8::Boolean\` object representing the \`true\` value in a way that is compatible across all supported versions of V8.

Signature:

\`\`\`c++
v8::Local<v8::Boolean> Nan::True()
\`\`\`

<a name="api_nan_false"></a>
### Nan::False()

A helper method to reference the \`v8::Boolean\` object representing the \`false\` value in a way that is compatible across all supported versions of V8.

Signature:

\`\`\`c++
v8::Local<v8::Boolean> Nan::False()
\`\`\`

<a name="api_nan_empty_string"></a>
### Nan::EmptyString()

Call [\`v8::String::Empty\`](https://v8docs.nodesource.com/node-8.16/d2/db3/classv8_1_1_string.html#a7c1bc8886115d7ee46f1d571dd6ebc6d) to reference the empty string in a way that is compatible across all supported versions of V8.

Signature:

\`\`\`c++
v8::Local<v8::String> Nan::EmptyString()
\`\`\`


<a name="api_nan_new_one_byte_string"></a>
### Nan::NewOneByteString()

An implementation of [\`v8::String::NewFromOneByte()\`](https://v8docs.nodesource.com/node-8.16/d2/db3/classv8_1_1_string.html#a5264d50b96d2c896ce525a734dc10f09) provided for consistent availability and API across supported versions of V8. Allocates a new string from Latin-1 data.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::String> Nan::NewOneByteString(const uint8_t * value,
                                                  int length = -1)
\`\`\`
`,
        "node_misc.md": `## Miscellaneous Node Helpers

 - <a href="#api_nan_asyncresource"><b><code>Nan::AsyncResource</code></b></a>
 - <a href="#api_nan_make_callback"><b><code>Nan::MakeCallback()</code></b></a>
 - <a href="#api_nan_module_init"><b><code>NAN_MODULE_INIT()</code></b></a>
 - <a href="#api_nan_export"><b><code>Nan::Export()</code></b></a>

<a name="api_nan_asyncresource"></a>
### Nan::AsyncResource

This class is analogous to the \`AsyncResource\` JavaScript class exposed by Node's [async_hooks][] API.

When calling back into JavaScript asynchronously, special care must be taken to ensure that the runtime can properly track
async hops. \`Nan::AsyncResource\` is a class that provides an RAII wrapper around \`node::EmitAsyncInit\`, \`node::EmitAsyncDestroy\`,
and \`node::MakeCallback\`. Using this mechanism to call back into JavaScript, as opposed to \`Nan::MakeCallback\` or
\`v8::Function::Call\` ensures that the callback is executed in the correct async context. This ensures that async mechanisms
such as domains and [async_hooks][] function correctly.

Definition:

\`\`\`c++
class AsyncResource {
 public:
  AsyncResource(v8::Local<v8::String> name,
                v8::Local<v8::Object> resource = New<v8::Object>());
  AsyncResource(const char* name,
                v8::Local<v8::Object> resource = New<v8::Object>());
  ~AsyncResource();

  v8::MaybeLocal<v8::Value> runInAsyncScope(v8::Local<v8::Object> target,
                                            v8::Local<v8::Function> func,
                                            int argc,
                                            v8::Local<v8::Value>* argv);
  v8::MaybeLocal<v8::Value> runInAsyncScope(v8::Local<v8::Object> target,
                                            v8::Local<v8::String> symbol,
                                            int argc,
                                            v8::Local<v8::Value>* argv);
  v8::MaybeLocal<v8::Value> runInAsyncScope(v8::Local<v8::Object> target,
                                            const char* method,
                                            int argc,
                                            v8::Local<v8::Value>* argv);
};
\`\`\`

* \`name\`: Identifier for the kind of resource that is being provided for diagnostics information exposed by the [async_hooks][]
  API. This will be passed to the possible \`init\` hook as the \`type\`. To avoid name collisions with other modules we recommend
  that the name include the name of the owning module as a prefix. For example \`mysql\` module could use something like
  \`mysql:batch-db-query-resource\`.
* \`resource\`: An optional object associated with the async work that will be passed to the possible [async_hooks][]
  \`init\` hook. If this parameter is omitted, or an empty handle is provided, this object will be created automatically.
* When calling JS on behalf of this resource, one can use \`runInAsyncScope\`. This will ensure that the callback runs in the
  correct async execution context.
* \`AsyncDestroy\` is automatically called when an AsyncResource object is destroyed.

For more details, see the Node [async_hooks][] documentation. You might also want to take a look at the documentation for the
[N-API counterpart][napi]. For example usage, see the \`asyncresource.cpp\` example in the \`test/cpp\` directory.

<a name="api_nan_make_callback"></a>
### Nan::MakeCallback()

Deprecated wrappers around the legacy \`node::MakeCallback()\` APIs. Node.js 10+
has deprecated these legacy APIs as they do not provide a mechanism to preserve
async context.

We recommend that you use the \`AsyncResource\` class and \`AsyncResource::runInAsyncScope\` instead of using \`Nan::MakeCallback\` or
\`v8::Function#Call()\` directly. \`AsyncResource\` properly takes care of running the callback in the correct async execution
context – something that is essential for functionality like domains, async_hooks and async debugging.

Signatures:

\`\`\`c++
NAN_DEPRECATED
v8::Local<v8::Value> Nan::MakeCallback(v8::Local<v8::Object> target,
                                       v8::Local<v8::Function> func,
                                       int argc,
                                       v8::Local<v8::Value>* argv);
NAN_DEPRECATED
v8::Local<v8::Value> Nan::MakeCallback(v8::Local<v8::Object> target,
                                       v8::Local<v8::String> symbol,
                                       int argc,
                                       v8::Local<v8::Value>* argv);
NAN_DEPRECATED
v8::Local<v8::Value> Nan::MakeCallback(v8::Local<v8::Object> target,
                                       const char* method,
                                       int argc,
                                       v8::Local<v8::Value>* argv);
\`\`\`


<a name="api_nan_module_init"></a>
### NAN_MODULE_INIT()

Used to define the entry point function to a Node add-on. Creates a function with a given \`name\` that receives a \`target\` object representing the equivalent of the JavaScript \`exports\` object.

See example below.

<a name="api_nan_export"></a>
### Nan::Export()

A simple helper to register a \`v8::FunctionTemplate\` from a JavaScript-accessible method (see [Methods](./methods.md)) as a property on an object. Can be used in a way similar to assigning properties to \`module.exports\` in JavaScript.

Signature:

\`\`\`c++
void Export(v8::Local<v8::Object> target, const char *name, Nan::FunctionCallback f)
\`\`\`

Also available as the shortcut \`NAN_EXPORT\` macro.

Example:

\`\`\`c++
NAN_METHOD(Foo) {
  ...
}

NAN_MODULE_INIT(Init) {
  NAN_EXPORT(target, Foo);
}
\`\`\`

[async_hooks]: https://nodejs.org/dist/latest-v9.x/docs/api/async_hooks.html
[napi]: https://nodejs.org/dist/latest-v9.x/docs/api/n-api.html#n_api_custom_asynchronous_operations
`,
        "object_wrappers.md": `## Object Wrappers

The \`ObjectWrap\` class can be used to make wrapped C++ objects and a factory of wrapped objects.

 - <a href="#api_nan_object_wrap"><b><code>Nan::ObjectWrap</code></b></a>


<a name="api_nan_object_wrap"></a>
### Nan::ObjectWrap()

A reimplementation of \`node::ObjectWrap\` that adds some API not present in older versions of Node. Should be preferred over \`node::ObjectWrap\` in all cases for consistency.

Definition:

\`\`\`c++
class ObjectWrap {
 public:
  ObjectWrap();

  virtual ~ObjectWrap();

  template <class T>
  static inline T* Unwrap(v8::Local<v8::Object> handle);

  inline v8::Local<v8::Object> handle();

  inline Nan::Persistent<v8::Object>& persistent();

 protected:
  inline void Wrap(v8::Local<v8::Object> handle);

  inline void MakeWeak();

  /* Ref() marks the object as being attached to an event loop.
   * Refed objects will not be garbage collected, even if
   * all references are lost.
   */
  virtual void Ref();

  /* Unref() marks an object as detached from the event loop.  This is its
   * default state.  When an object with a "weak" reference changes from
   * attached to detached state it will be freed. Be careful not to access
   * the object after making this call as it might be gone!
   * (A "weak reference" means an object that only has a
   * persistent handle.)
   *
   * DO NOT CALL THIS FROM DESTRUCTOR
   */
  virtual void Unref();

  int refs_;  // ro
};
\`\`\`

See the Node documentation on [Wrapping C++ Objects](https://nodejs.org/api/addons.html#addons_wrapping_c_objects) for more details.

### This vs. Holder

When calling \`Unwrap\`, it is important that the argument is indeed some JavaScript object which got wrapped by a \`Wrap\` call for this class or any derived class.
The \`Signature\` installed by [\`Nan::SetPrototypeMethod()\`](methods.md#api_nan_set_prototype_method) does ensure that \`info.Holder()\` is just such an instance.
In Node 0.12 and later, \`info.This()\` will also be of such a type, since otherwise the invocation will get rejected.
However, in Node 0.10 and before it was possible to invoke a method on a JavaScript object which just had the extension type in its prototype chain.
In such a situation, calling \`Unwrap\` on \`info.This()\` will likely lead to a failed assertion causing a crash, but could lead to even more serious corruption.

On the other hand, calling \`Unwrap\` in an [accessor](methods.md#api_nan_set_accessor) should not use \`Holder()\` if the accessor is defined on the prototype.
So either define your accessors on the instance template,
or use \`This()\` after verifying that it is indeed a valid object.

### Examples

#### Basic

\`\`\`c++
class MyObject : public Nan::ObjectWrap {
 public:
  static NAN_MODULE_INIT(Init) {
    v8::Local<v8::FunctionTemplate> tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->SetClassName(Nan::New("MyObject").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl, "getHandle", GetHandle);
    Nan::SetPrototypeMethod(tpl, "getValue", GetValue);

    constructor().Reset(Nan::GetFunction(tpl).ToLocalChecked());
    Nan::Set(target, Nan::New("MyObject").ToLocalChecked(),
      Nan::GetFunction(tpl).ToLocalChecked());
  }

 private:
  explicit MyObject(double value = 0) : value_(value) {}
  ~MyObject() {}

  static NAN_METHOD(New) {
    if (info.IsConstructCall()) {
      double value = info[0]->IsUndefined() ? 0 : Nan::To<double>(info[0]).FromJust();
      MyObject *obj = new MyObject(value);
      obj->Wrap(info.This());
      info.GetReturnValue().Set(info.This());
    } else {
      const int argc = 1;
      v8::Local<v8::Value> argv[argc] = {info[0]};
      v8::Local<v8::Function> cons = Nan::New(constructor());
      info.GetReturnValue().Set(Nan::NewInstance(cons, argc, argv).ToLocalChecked());
    }
  }

  static NAN_METHOD(GetHandle) {
    MyObject* obj = Nan::ObjectWrap::Unwrap<MyObject>(info.Holder());
    info.GetReturnValue().Set(obj->handle());
  }

  static NAN_METHOD(GetValue) {
    MyObject* obj = Nan::ObjectWrap::Unwrap<MyObject>(info.Holder());
    info.GetReturnValue().Set(obj->value_);
  }

  static inline Nan::Persistent<v8::Function> & constructor() {
    static Nan::Persistent<v8::Function> my_constructor;
    return my_constructor;
  }

  double value_;
};

NODE_MODULE(objectwrapper, MyObject::Init)
\`\`\`

To use in Javascript:

\`\`\`Javascript
var objectwrapper = require('bindings')('objectwrapper');

var obj = new objectwrapper.MyObject(5);
console.log('Should be 5: ' + obj.getValue());
\`\`\`

#### Factory of wrapped objects

\`\`\`c++
class MyFactoryObject : public Nan::ObjectWrap {
 public:
  static NAN_MODULE_INIT(Init) {
    v8::Local<v8::FunctionTemplate> tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl, "getValue", GetValue);

    constructor().Reset(Nan::GetFunction(tpl).ToLocalChecked());
  }

  static NAN_METHOD(NewInstance) {
    v8::Local<v8::Function> cons = Nan::New(constructor());
    double value = info[0]->IsNumber() ? Nan::To<double>(info[0]).FromJust() : 0;
    const int argc = 1;
    v8::Local<v8::Value> argv[1] = {Nan::New(value)};
    info.GetReturnValue().Set(Nan::NewInstance(cons, argc, argv).ToLocalChecked());
  }

  // Needed for the next example:
  inline double value() const {
    return value_;
  }

 private:
  explicit MyFactoryObject(double value = 0) : value_(value) {}
  ~MyFactoryObject() {}

  static NAN_METHOD(New) {
    if (info.IsConstructCall()) {
      double value = info[0]->IsNumber() ? Nan::To<double>(info[0]).FromJust() : 0;
      MyFactoryObject * obj = new MyFactoryObject(value);
      obj->Wrap(info.This());
      info.GetReturnValue().Set(info.This());
    } else {
      const int argc = 1;
      v8::Local<v8::Value> argv[argc] = {info[0]};
      v8::Local<v8::Function> cons = Nan::New(constructor());
      info.GetReturnValue().Set(Nan::NewInstance(cons, argc, argv).ToLocalChecked());
    }
  }

  static NAN_METHOD(GetValue) {
    MyFactoryObject* obj = ObjectWrap::Unwrap<MyFactoryObject>(info.Holder());
    info.GetReturnValue().Set(obj->value_);
  }

  static inline Nan::Persistent<v8::Function> & constructor() {
    static Nan::Persistent<v8::Function> my_constructor;
    return my_constructor;
  }

  double value_;
};

NAN_MODULE_INIT(Init) {
  MyFactoryObject::Init(target);
  Nan::Set(target,
    Nan::New<v8::String>("newFactoryObjectInstance").ToLocalChecked(),
    Nan::GetFunction(
      Nan::New<v8::FunctionTemplate>(MyFactoryObject::NewInstance)).ToLocalChecked()
  );
}

NODE_MODULE(wrappedobjectfactory, Init)
\`\`\`

To use in Javascript:

\`\`\`Javascript
var wrappedobjectfactory = require('bindings')('wrappedobjectfactory');

var obj = wrappedobjectfactory.newFactoryObjectInstance(10);
console.log('Should be 10: ' + obj.getValue());
\`\`\`

#### Passing wrapped objects around

Use the \`MyFactoryObject\` class above along with the following:

\`\`\`c++
static NAN_METHOD(Sum) {
  Nan::MaybeLocal<v8::Object> maybe1 = Nan::To<v8::Object>(info[0]);
  Nan::MaybeLocal<v8::Object> maybe2 = Nan::To<v8::Object>(info[1]);

  // Quick check:
  if (maybe1.IsEmpty() || maybe2.IsEmpty()) {
    // return value is undefined by default
    return;
  }

  MyFactoryObject* obj1 =
    Nan::ObjectWrap::Unwrap<MyFactoryObject>(maybe1.ToLocalChecked());
  MyFactoryObject* obj2 =
    Nan::ObjectWrap::Unwrap<MyFactoryObject>(maybe2.ToLocalChecked());

  info.GetReturnValue().Set(Nan::New<v8::Number>(obj1->value() + obj2->value()));
}

NAN_MODULE_INIT(Init) {
  MyFactoryObject::Init(target);
  Nan::Set(target,
    Nan::New<v8::String>("newFactoryObjectInstance").ToLocalChecked(),
    Nan::GetFunction(
      Nan::New<v8::FunctionTemplate>(MyFactoryObject::NewInstance)).ToLocalChecked()
  );
  Nan::Set(target,
    Nan::New<v8::String>("sum").ToLocalChecked(),
    Nan::GetFunction(Nan::New<v8::FunctionTemplate>(Sum)).ToLocalChecked()
  );
}

NODE_MODULE(myaddon, Init)
\`\`\`

To use in Javascript:

\`\`\`Javascript
var myaddon = require('bindings')('myaddon');

var obj1 = myaddon.newFactoryObjectInstance(5);
var obj2 = myaddon.newFactoryObjectInstance(10);
console.log('sum of object values: ' + myaddon.sum(obj1, obj2));
\`\`\`
`,
        "persistent.md": `## Persistent references

An object reference that is independent of any \`HandleScope\` is a _persistent_ reference. Where a \`Local\` handle only lives as long as the \`HandleScope\` in which it was allocated, a \`Persistent\` handle remains valid until it is explicitly disposed.

Due to the evolution of the V8 API, it is necessary for NAN to provide a wrapper implementation of the \`Persistent\` classes to supply compatibility across the V8 versions supported.

 - <a href="#api_nan_persistent_base"><b><code>Nan::PersistentBase & v8::PersistentBase</code></b></a>
 - <a href="#api_nan_non_copyable_persistent_traits"><b><code>Nan::NonCopyablePersistentTraits & v8::NonCopyablePersistentTraits</code></b></a>
 - <a href="#api_nan_copyable_persistent_traits"><b><code>Nan::CopyablePersistentTraits & v8::CopyablePersistentTraits</code></b></a>
 - <a href="#api_nan_persistent"><b><code>Nan::Persistent</code></b></a>
 - <a href="#api_nan_global"><b><code>Nan::Global</code></b></a>
 - <a href="#api_nan_weak_callback_info"><b><code>Nan::WeakCallbackInfo</code></b></a>
 - <a href="#api_nan_weak_callback_type"><b><code>Nan::WeakCallbackType</code></b></a>

Also see the V8 Embedders Guide section on [Handles and Garbage Collection](https://developers.google.com/v8/embed#handles).

<a name="api_nan_persistent_base"></a>
### Nan::PersistentBase & v8::PersistentBase

A persistent handle contains a reference to a storage cell in V8 which holds an object value and which is updated by the garbage collector whenever the object is moved. A new storage cell can be created using the constructor or \`Nan::PersistentBase::Reset()\`. Existing handles can be disposed using an argument-less \`Nan::PersistentBase::Reset()\`.

Definition:

_(note: this is implemented as \`Nan::PersistentBase\` for older versions of V8 and the native \`v8::PersistentBase\` is used for newer versions of V8)_

\`\`\`c++
template<typename T> class PersistentBase {
 public:
  /**
   * If non-empty, destroy the underlying storage cell
   */
  void Reset();

  /**
   * If non-empty, destroy the underlying storage cell and create a new one with
   * the contents of another if it is also non-empty
   */
  template<typename S> void Reset(const v8::Local<S> &other);

  /**
   * If non-empty, destroy the underlying storage cell and create a new one with
   * the contents of another if it is also non-empty
   */
  template<typename S> void Reset(const PersistentBase<S> &other);

  /** Returns true if the handle is empty. */
  bool IsEmpty() const;

  /**
   * If non-empty, destroy the underlying storage cell
   * IsEmpty() will return true after this call.
   */
  void Empty();

  template<typename S> bool operator==(const PersistentBase<S> &that);

  template<typename S> bool operator==(const v8::Local<S> &that);

  template<typename S> bool operator!=(const PersistentBase<S> &that);

  template<typename S> bool operator!=(const v8::Local<S> &that);

   /**
   *  Install a finalization callback on this object.
   *  NOTE: There is no guarantee as to *when* or even *if* the callback is
   *  invoked. The invocation is performed solely on a best effort basis.
   *  As always, GC-based finalization should *not* be relied upon for any
   *  critical form of resource management! At the moment you can either
   *  specify a parameter for the callback or the location of two internal
   *  fields in the dying object.
   */
  template<typename P>
  void SetWeak(P *parameter,
               typename WeakCallbackInfo<P>::Callback callback,
               WeakCallbackType type);

  void ClearWeak();

  /**
   * Marks the reference to this object independent. Garbage collector is free
   * to ignore any object groups containing this object. Weak callback for an
   * independent handle should not assume that it will be preceded by a global
   * GC prologue callback or followed by a global GC epilogue callback.
   */
  void MarkIndependent() const;

  bool IsIndependent() const;

  /** Checks if the handle holds the only reference to an object. */
  bool IsNearDeath() const;

  /** Returns true if the handle's reference is weak.  */
  bool IsWeak() const
};
\`\`\`

See the V8 documentation for [\`PersistentBase\`](https://v8docs.nodesource.com/node-8.16/d4/dca/classv8_1_1_persistent_base.html) for further information.

**Tip:** To get a \`v8::Local\` reference to the original object back from a \`PersistentBase\` or \`Persistent\` object:

\`\`\`c++
v8::Local<v8::Object> object = Nan::New(persistent);
\`\`\`

<a name="api_nan_non_copyable_persistent_traits"></a>
### Nan::NonCopyablePersistentTraits & v8::NonCopyablePersistentTraits

Default traits for \`Nan::Persistent\`. This class does not allow use of the a copy constructor or assignment operator. At present \`kResetInDestructor\` is not set, but that will change in a future version.

Definition:

_(note: this is implemented as \`Nan::NonCopyablePersistentTraits\` for older versions of V8 and the native \`v8::NonCopyablePersistentTraits\` is used for newer versions of V8)_

\`\`\`c++
template<typename T> class NonCopyablePersistentTraits {
 public:
  typedef Persistent<T, NonCopyablePersistentTraits<T> > NonCopyablePersistent;

  static const bool kResetInDestructor = false;

  template<typename S, typename M>
  static void Copy(const Persistent<S, M> &source,
                   NonCopyablePersistent *dest);

  template<typename O> static void Uncompilable();
};
\`\`\`

See the V8 documentation for [\`NonCopyablePersistentTraits\`](https://v8docs.nodesource.com/node-8.16/de/d73/classv8_1_1_non_copyable_persistent_traits.html) for further information.

<a name="api_nan_copyable_persistent_traits"></a>
### Nan::CopyablePersistentTraits & v8::CopyablePersistentTraits

A helper class of traits to allow copying and assignment of \`Persistent\`. This will clone the contents of storage cell, but not any of the flags, etc..

Definition:

_(note: this is implemented as \`Nan::CopyablePersistentTraits\` for older versions of V8 and the native \`v8::NonCopyablePersistentTraits\` is used for newer versions of V8)_

\`\`\`c++
template<typename T>
class CopyablePersistentTraits {
 public:
  typedef Persistent<T, CopyablePersistentTraits<T> > CopyablePersistent;

  static const bool kResetInDestructor = true;

  template<typename S, typename M>
  static void Copy(const Persistent<S, M> &source,
                   CopyablePersistent *dest);
};
\`\`\`

See the V8 documentation for [\`CopyablePersistentTraits\`](https://v8docs.nodesource.com/node-8.16/da/d5c/structv8_1_1_copyable_persistent_traits.html) for further information.

<a name="api_nan_persistent"></a>
### Nan::Persistent

A type of \`PersistentBase\` which allows copy and assignment. Copy, assignment and destructor behavior is controlled by the traits class \`M\`.

Definition:

\`\`\`c++
template<typename T, typename M = NonCopyablePersistentTraits<T> >
class Persistent;

template<typename T, typename M> class Persistent : public PersistentBase<T> {
 public:
 /**
  * A Persistent with no storage cell.
  */
  Persistent();

  /**
   * Construct a Persistent from a v8::Local. When the v8::Local is non-empty, a
   * new storage cell is created pointing to the same object, and no flags are
   * set.
   */
  template<typename S> Persistent(v8::Local<S> that);

  /**
   * Construct a Persistent from a Persistent. When the Persistent is non-empty,
   * a new storage cell is created pointing to the same object, and no flags are
   * set.
   */
  Persistent(const Persistent &that);

  /**
   * The copy constructors and assignment operator create a Persistent exactly
   * as the Persistent constructor, but the Copy function from the traits class
   * is called, allowing the setting of flags based on the copied Persistent.
   */
  Persistent &operator=(const Persistent &that);

  template <typename S, typename M2>
  Persistent &operator=(const Persistent<S, M2> &that);

  /**
   * The destructor will dispose the Persistent based on the kResetInDestructor
   * flags in the traits class.  Since not calling dispose can result in a
   * memory leak, it is recommended to always set this flag.
   */
  ~Persistent();
};
\`\`\`

See the V8 documentation for [\`Persistent\`](https://v8docs.nodesource.com/node-8.16/d2/d78/classv8_1_1_persistent.html) for further information.

<a name="api_nan_global"></a>
### Nan::Global

A type of \`PersistentBase\` which has move semantics.

\`\`\`c++
template<typename T> class Global : public PersistentBase<T> {
 public:
  /**
   * A Global with no storage cell.
   */
  Global();

  /**
   * Construct a Global from a v8::Local. When the v8::Local is non-empty, a new
   * storage cell is created pointing to the same object, and no flags are set.
   */
  template<typename S> Global(v8::Local<S> that);
  /**
   * Construct a Global from a PersistentBase. When the Persistent is non-empty,
   * a new storage cell is created pointing to the same object, and no flags are
   * set.
   */
  template<typename S> Global(const PersistentBase<S> &that);

  /**
   * Pass allows returning globals from functions, etc.
   */
  Global Pass();
};
\`\`\`

See the V8 documentation for [\`Global\`](https://v8docs.nodesource.com/node-8.16/d5/d40/classv8_1_1_global.html) for further information.

<a name="api_nan_weak_callback_info"></a>
### Nan::WeakCallbackInfo

\`Nan::WeakCallbackInfo\` is used as an argument when setting a persistent reference as weak. You may need to free any external resources attached to the object. It is a mirror of \`v8:WeakCallbackInfo\` as found in newer versions of V8.

Definition:

\`\`\`c++
template<typename T> class WeakCallbackInfo {
 public:
  typedef void (*Callback)(const WeakCallbackInfo<T>& data);

  v8::Isolate *GetIsolate() const;

  /**
   * Get the parameter that was associated with the weak handle.
   */
  T *GetParameter() const;

  /**
   * Get pointer from internal field, index can be 0 or 1.
   */
  void *GetInternalField(int index) const;
};
\`\`\`

Example usage:

\`\`\`c++
void weakCallback(const WeakCallbackInfo<int> &data) {
  int *parameter = data.GetParameter();
  delete parameter;
}

Persistent<v8::Object> obj;
int *data = new int(0);
obj.SetWeak(data, callback, WeakCallbackType::kParameter);
\`\`\`

See the V8 documentation for [\`WeakCallbackInfo\`](https://v8docs.nodesource.com/node-8.16/d8/d06/classv8_1_1_weak_callback_info.html) for further information.

<a name="api_nan_weak_callback_type"></a>
### Nan::WeakCallbackType

Represents the type of a weak callback.
A weak callback of type \`kParameter\` makes the supplied parameter to \`Nan::PersistentBase::SetWeak\` available through \`WeakCallbackInfo::GetParameter\`.
A weak callback of type \`kInternalFields\` uses up to two internal fields at indices 0 and 1 on the \`Nan::PersistentBase<v8::Object>\` being made weak.
Note that only \`v8::Object\`s and derivatives can have internal fields.

Definition:

\`\`\`c++
enum class WeakCallbackType { kParameter, kInternalFields };
\`\`\`
`,
        "scopes.md": `## Scopes

A _local handle_ is a pointer to an object. All V8 objects are accessed using handles, they are necessary because of the way the V8 garbage collector works.

A handle scope can be thought of as a container for any number of handles. When you've finished with your handles, instead of deleting each one individually you can simply delete their scope.

The creation of \`HandleScope\` objects is different across the supported versions of V8. Therefore, NAN provides its own implementations that can be used safely across these.

 - <a href="#api_nan_handle_scope"><b><code>Nan::HandleScope</code></b></a>
 - <a href="#api_nan_escapable_handle_scope"><b><code>Nan::EscapableHandleScope</code></b></a>

Also see the V8 Embedders Guide section on [Handles and Garbage Collection](https://github.com/v8/v8/wiki/Embedder%27s%20Guide#handles-and-garbage-collection).

<a name="api_nan_handle_scope"></a>
### Nan::HandleScope

A simple wrapper around [\`v8::HandleScope\`](https://v8docs.nodesource.com/node-8.16/d3/d95/classv8_1_1_handle_scope.html).

Definition:

\`\`\`c++
class Nan::HandleScope {
 public:
  Nan::HandleScope();
  static int NumberOfHandles();
};
\`\`\`

Allocate a new \`Nan::HandleScope\` whenever you are creating new V8 JavaScript objects. Note that an implicit \`HandleScope\` is created for you on JavaScript-accessible methods so you do not need to insert one yourself.

Example:

\`\`\`c++
// new object is created, it needs a new scope:
void Pointless() {
  Nan::HandleScope scope;
  v8::Local<v8::Object> obj = Nan::New<v8::Object>();
}

// JavaScript-accessible method already has a HandleScope
NAN_METHOD(Pointless2) {
  v8::Local<v8::Object> obj = Nan::New<v8::Object>();
}
\`\`\`

<a name="api_nan_escapable_handle_scope"></a>
### Nan::EscapableHandleScope

Similar to [\`Nan::HandleScope\`](#api_nan_handle_scope) but should be used in cases where a function needs to return a V8 JavaScript type that has been created within it.

Definition:

\`\`\`c++
class Nan::EscapableHandleScope {
 public:
  Nan::EscapableHandleScope();
  static int NumberOfHandles();
  template<typename T> v8::Local<T> Escape(v8::Local<T> value);
}
\`\`\`

Use \`Escape(value)\` to return the object.

Example:

\`\`\`c++
v8::Local<v8::Object> EmptyObj() {
  Nan::EscapableHandleScope scope;
  v8::Local<v8::Object> obj = Nan::New<v8::Object>();
  return scope.Escape(obj);
}
\`\`\`

`,
        "script.md": `## Script

NAN provides a \`v8::Script\` helpers as the API has changed over the supported versions of V8.

 - <a href="#api_nan_compile_script"><b><code>Nan::CompileScript()</code></b></a>
 - <a href="#api_nan_run_script"><b><code>Nan::RunScript()</code></b></a>


<a name="api_nan_compile_script"></a>
### Nan::CompileScript()

A wrapper around [\`v8::ScriptCompiler::Compile()\`](https://v8docs.nodesource.com/node-8.16/da/da5/classv8_1_1_script_compiler.html#a93f5072a0db55d881b969e9fc98e564b).

Note that \`Nan::BoundScript\` is an alias for \`v8::Script\`.

Signature:

\`\`\`c++
Nan::MaybeLocal<Nan::BoundScript> Nan::CompileScript(
    v8::Local<v8::String> s,
    const v8::ScriptOrigin& origin);
Nan::MaybeLocal<Nan::BoundScript> Nan::CompileScript(v8::Local<v8::String> s);
\`\`\`


<a name="api_nan_run_script"></a>
### Nan::RunScript()

Calls \`script->Run()\` or \`script->BindToCurrentContext()->Run(Nan::GetCurrentContext())\`.

Note that \`Nan::BoundScript\` is an alias for \`v8::Script\` and \`Nan::UnboundScript\` is an alias for \`v8::UnboundScript\` where available and \`v8::Script\` on older versions of V8.

Signature:

\`\`\`c++
Nan::MaybeLocal<v8::Value> Nan::RunScript(v8::Local<Nan::UnboundScript> script)
Nan::MaybeLocal<v8::Value> Nan::RunScript(v8::Local<Nan::BoundScript> script) 
\`\`\`
`,
        "string_bytes.md": `## Strings & Bytes

Miscellaneous string & byte encoding and decoding functionality provided for compatibility across supported versions of V8 and Node. Implemented by NAN to ensure that all encoding types are supported, even for older versions of Node where they are missing.

 - <a href="#api_nan_encoding"><b><code>Nan::Encoding</code></b></a>
 - <a href="#api_nan_encode"><b><code>Nan::Encode()</code></b></a>
 - <a href="#api_nan_decode_bytes"><b><code>Nan::DecodeBytes()</code></b></a>
 - <a href="#api_nan_decode_write"><b><code>Nan::DecodeWrite()</code></b></a>


<a name="api_nan_encoding"></a>
### Nan::Encoding

An enum representing the supported encoding types. A copy of \`node::encoding\` that is consistent across versions of Node.

Definition:

\`\`\`c++
enum Nan::Encoding { ASCII, UTF8, BASE64, UCS2, BINARY, HEX, BUFFER }
\`\`\`


<a name="api_nan_encode"></a>
### Nan::Encode()

A wrapper around \`node::Encode()\` that provides a consistent implementation across supported versions of Node.

Signature:

\`\`\`c++
v8::Local<v8::Value> Nan::Encode(const void *buf,
                                 size_t len,
                                 enum Nan::Encoding encoding = BINARY);
\`\`\`


<a name="api_nan_decode_bytes"></a>
### Nan::DecodeBytes()

A wrapper around \`node::DecodeBytes()\` that provides a consistent implementation across supported versions of Node.

Signature:

\`\`\`c++
ssize_t Nan::DecodeBytes(v8::Local<v8::Value> val,
                         enum Nan::Encoding encoding = BINARY);
\`\`\`


<a name="api_nan_decode_write"></a>
### Nan::DecodeWrite()

A wrapper around \`node::DecodeWrite()\` that provides a consistent implementation across supported versions of Node.

Signature:

\`\`\`c++
ssize_t Nan::DecodeWrite(char *buf,
                         size_t len,
                         v8::Local<v8::Value> val,
                         enum Nan::Encoding encoding = BINARY);
\`\`\`
`,
        "v8_internals.md": `## V8 internals

The hooks to access V8 internals—including GC and statistics—are different across the supported versions of V8, therefore NAN provides its own hooks that call the appropriate V8 methods.

 - <a href="#api_nan_gc_callback"><b><code>NAN_GC_CALLBACK()</code></b></a>
 - <a href="#api_nan_add_gc_epilogue_callback"><b><code>Nan::AddGCEpilogueCallback()</code></b></a>
 - <a href="#api_nan_remove_gc_epilogue_callback"><b><code>Nan::RemoveGCEpilogueCallback()</code></b></a>
 - <a href="#api_nan_add_gc_prologue_callback"><b><code>Nan::AddGCPrologueCallback()</code></b></a>
 - <a href="#api_nan_remove_gc_prologue_callback"><b><code>Nan::RemoveGCPrologueCallback()</code></b></a>
 - <a href="#api_nan_get_heap_statistics"><b><code>Nan::GetHeapStatistics()</code></b></a>
 - <a href="#api_nan_set_counter_function"><b><code>Nan::SetCounterFunction()</code></b></a>
 - <a href="#api_nan_set_create_histogram_function"><b><code>Nan::SetCreateHistogramFunction()</code></b></a>
 - <a href="#api_nan_set_add_histogram_sample_function"><b><code>Nan::SetAddHistogramSampleFunction()</code></b></a>
 - <a href="#api_nan_idle_notification"><b><code>Nan::IdleNotification()</code></b></a>
 - <a href="#api_nan_low_memory_notification"><b><code>Nan::LowMemoryNotification()</code></b></a>
 - <a href="#api_nan_context_disposed_notification"><b><code>Nan::ContextDisposedNotification()</code></b></a>
 - <a href="#api_nan_get_internal_field_pointer"><b><code>Nan::GetInternalFieldPointer()</code></b></a>
 - <a href="#api_nan_set_internal_field_pointer"><b><code>Nan::SetInternalFieldPointer()</code></b></a>
 - <a href="#api_nan_adjust_external_memory"><b><code>Nan::AdjustExternalMemory()</code></b></a>


<a name="api_nan_gc_callback"></a>
### NAN_GC_CALLBACK(callbackname)

Use \`NAN_GC_CALLBACK\` to declare your callbacks for \`Nan::AddGCPrologueCallback()\` and \`Nan::AddGCEpilogueCallback()\`. Your new method receives the arguments \`v8::GCType type\` and \`v8::GCCallbackFlags flags\`.

\`\`\`c++
static Nan::Persistent<Function> callback;

NAN_GC_CALLBACK(gcPrologueCallback) {
  v8::Local<Value> argv[] = { Nan::New("prologue").ToLocalChecked() };
  Nan::MakeCallback(Nan::GetCurrentContext()->Global(), Nan::New(callback), 1, argv);
}

NAN_METHOD(Hook) {
  callback.Reset(To<Function>(args[0]).ToLocalChecked());
  Nan::AddGCPrologueCallback(gcPrologueCallback);
  info.GetReturnValue().Set(info.Holder());
}
\`\`\`

<a name="api_nan_add_gc_epilogue_callback"></a>
### Nan::AddGCEpilogueCallback()

Signature:

\`\`\`c++
void Nan::AddGCEpilogueCallback(v8::Isolate::GCEpilogueCallback callback, v8::GCType gc_type_filter = v8::kGCTypeAll)
\`\`\`

Calls V8's [\`AddGCEpilogueCallback()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#a580f976e4290cead62c2fc4dd396be3e).

<a name="api_nan_remove_gc_epilogue_callback"></a>
### Nan::RemoveGCEpilogueCallback()

Signature:

\`\`\`c++
void Nan::RemoveGCEpilogueCallback(v8::Isolate::GCEpilogueCallback callback)
\`\`\`

Calls V8's [\`RemoveGCEpilogueCallback()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#adca9294555a3908e9f23c7bb0f0f284c).

<a name="api_nan_add_gc_prologue_callback"></a>
### Nan::AddGCPrologueCallback()

Signature:

\`\`\`c++
void Nan::AddGCPrologueCallback(v8::Isolate::GCPrologueCallback, v8::GCType gc_type_filter callback)
\`\`\`

Calls V8's [\`AddGCPrologueCallback()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#a6dbef303603ebdb03da6998794ea05b8).

<a name="api_nan_remove_gc_prologue_callback"></a>
### Nan::RemoveGCPrologueCallback()

Signature:

\`\`\`c++
void Nan::RemoveGCPrologueCallback(v8::Isolate::GCPrologueCallback callback)
\`\`\`

Calls V8's [\`RemoveGCPrologueCallback()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#a5f72c7cda21415ce062bbe5c58abe09e).

<a name="api_nan_get_heap_statistics"></a>
### Nan::GetHeapStatistics()

Signature:

\`\`\`c++
void Nan::GetHeapStatistics(v8::HeapStatistics *heap_statistics)
\`\`\`

Calls V8's [\`GetHeapStatistics()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#a5593ac74687b713095c38987e5950b34).

<a name="api_nan_set_counter_function"></a>
### Nan::SetCounterFunction()

Signature:

\`\`\`c++
void Nan::SetCounterFunction(v8::CounterLookupCallback cb)
\`\`\`

Calls V8's [\`SetCounterFunction()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#a045d7754e62fa0ec72ae6c259b29af94).

<a name="api_nan_set_create_histogram_function"></a>
### Nan::SetCreateHistogramFunction()

Signature:

\`\`\`c++
void Nan::SetCreateHistogramFunction(v8::CreateHistogramCallback cb) 
\`\`\`

Calls V8's [\`SetCreateHistogramFunction()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#a542d67e85089cb3f92aadf032f99e732).

<a name="api_nan_set_add_histogram_sample_function"></a>
### Nan::SetAddHistogramSampleFunction()

Signature:

\`\`\`c++
void Nan::SetAddHistogramSampleFunction(v8::AddHistogramSampleCallback cb) 
\`\`\`

Calls V8's [\`SetAddHistogramSampleFunction()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#aeb420b690bc2c216882d6fdd00ddd3ea).

<a name="api_nan_idle_notification"></a>
### Nan::IdleNotification()

Signature:

\`\`\`c++
bool Nan::IdleNotification(int idle_time_in_ms)
\`\`\`

Calls V8's [\`IdleNotification()\` or \`IdleNotificationDeadline()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#ad6a2a02657f5425ad460060652a5a118) depending on V8 version.

<a name="api_nan_low_memory_notification"></a>
### Nan::LowMemoryNotification()

Signature:

\`\`\`c++
void Nan::LowMemoryNotification() 
\`\`\`

Calls V8's [\`LowMemoryNotification()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#a24647f61d6b41f69668094bdcd6ea91f).

<a name="api_nan_context_disposed_notification"></a>
### Nan::ContextDisposedNotification()

Signature:

\`\`\`c++
void Nan::ContextDisposedNotification()
\`\`\`

Calls V8's [\`ContextDisposedNotification()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#ad7f5dc559866343fe6cd8db1f134d48b).

<a name="api_nan_get_internal_field_pointer"></a>
### Nan::GetInternalFieldPointer()

Gets a pointer to the internal field with at \`index\` from a V8 \`Object\` handle.

Signature:

\`\`\`c++
void* Nan::GetInternalFieldPointer(v8::Local<v8::Object> object, int index) 
\`\`\`

Calls the Object's [\`GetAlignedPointerFromInternalField()\` or \`GetPointerFromInternalField()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#a580ea84afb26c005d6762eeb9e3c308f) depending on the version of V8.

<a name="api_nan_set_internal_field_pointer"></a>
### Nan::SetInternalFieldPointer()

Sets the value of the internal field at \`index\` on a V8 \`Object\` handle.

Signature:

\`\`\`c++
void Nan::SetInternalFieldPointer(v8::Local<v8::Object> object, int index, void* value)
\`\`\`

Calls the Object's [\`SetAlignedPointerInInternalField()\` or \`SetPointerInInternalField()\`](https://v8docs.nodesource.com/node-8.16/db/d85/classv8_1_1_object.html#ab3c57184263cf29963ef0017bec82281) depending on the version of V8.

<a name="api_nan_adjust_external_memory"></a>
### Nan::AdjustExternalMemory()

Signature:

\`\`\`c++
int Nan::AdjustExternalMemory(int bytesChange)
\`\`\`

Calls V8's [\`AdjustAmountOfExternalAllocatedMemory()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#ae1a59cac60409d3922582c4af675473e).

`,
        "v8_misc.md": `## Miscellaneous V8 Helpers

 - <a href="#api_nan_utf8_string"><b><code>Nan::Utf8String</code></b></a>
 - <a href="#api_nan_get_current_context"><b><code>Nan::GetCurrentContext()</code></b></a>
 - <a href="#api_nan_set_isolate_data"><b><code>Nan::SetIsolateData()</code></b></a>
 - <a href="#api_nan_get_isolate_data"><b><code>Nan::GetIsolateData()</code></b></a>
 - <a href="#api_nan_typedarray_contents"><b><code>Nan::TypedArrayContents</code></b></a>


<a name="api_nan_utf8_string"></a>
### Nan::Utf8String

Converts an object to a UTF-8-encoded character array. If conversion to a string fails (e.g. due to an exception in the toString() method of the object) then the length() method returns 0 and the * operator returns NULL. The underlying memory used for this object is managed by the object.

An implementation of [\`v8::String::Utf8Value\`](https://v8docs.nodesource.com/node-8.16/d4/d1b/classv8_1_1_string_1_1_utf8_value.html) that is consistent across all supported versions of V8.

Definition:

\`\`\`c++
class Nan::Utf8String {
 public:
  Nan::Utf8String(v8::Local<v8::Value> from);

  int length() const;

  char* operator*();
  const char* operator*() const;
};
\`\`\`

<a name="api_nan_get_current_context"></a>
### Nan::GetCurrentContext()

A call to [\`v8::Isolate::GetCurrent()->GetCurrentContext()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#a81c7a1ed7001ae2a65e89107f75fd053) that works across all supported versions of V8.

Signature:

\`\`\`c++
v8::Local<v8::Context> Nan::GetCurrentContext()
\`\`\`

<a name="api_nan_set_isolate_data"></a>
### Nan::SetIsolateData()

A helper to provide a consistent API to [\`v8::Isolate#SetData()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#a7acadfe7965997e9c386a05f098fbe36).

Signature:

\`\`\`c++
void Nan::SetIsolateData(v8::Isolate *isolate, T *data)
\`\`\`


<a name="api_nan_get_isolate_data"></a>
### Nan::GetIsolateData()

A helper to provide a consistent API to [\`v8::Isolate#GetData()\`](https://v8docs.nodesource.com/node-8.16/d5/dda/classv8_1_1_isolate.html#aabd223436bc1100a787dadaa024c6257).

Signature:

\`\`\`c++
T *Nan::GetIsolateData(v8::Isolate *isolate)
\`\`\`

<a name="api_nan_typedarray_contents"></a>
### Nan::TypedArrayContents<T>

A helper class for accessing the contents of an ArrayBufferView (aka a typedarray) from C++.  If the input array is not a valid typedarray, then the data pointer of TypedArrayContents will default to \`NULL\` and the length will be 0.  If the data pointer is not compatible with the alignment requirements of type, an assertion error will fail.

Note that you must store a reference to the \`array\` object while you are accessing its contents.

Definition:

\`\`\`c++
template<typename T>
class Nan::TypedArrayContents {
 public:
  TypedArrayContents(v8::Local<Value> array);

  size_t length() const;

  T* const operator*();
  const T* const operator*() const;
};
\`\`\`
`
      },
      "include_dirs.js": "console.log(require('path').relative('.', __dirname));\n",
      "nan.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors:
 *   - Rod Vagg <https://github.com/rvagg>
 *   - Benjamin Byholm <https://github.com/kkoopa>
 *   - Trevor Norris <https://github.com/trevnorris>
 *   - Nathan Rajlich <https://github.com/TooTallNate>
 *   - Brett Lawson <https://github.com/brett19>
 *   - Ben Noordhuis <https://github.com/bnoordhuis>
 *   - David Siegel <https://github.com/agnat>
 *   - Michael Ira Krufky <https://github.com/mkrufky>
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 *
 * Version 2.14.1: current Node 14.0.0, Node 0.12: 0.12.18, Node 0.10: 0.10.48, iojs: 3.3.1
 *
 * See https://github.com/nodejs/nan for the latest update to this file
 **********************************************************************************/

#ifndef NAN_H_
#define NAN_H_

#include <node_version.h>

#define NODE_0_10_MODULE_VERSION 11
#define NODE_0_12_MODULE_VERSION 14
#define ATOM_0_21_MODULE_VERSION 41
#define IOJS_1_0_MODULE_VERSION  42
#define IOJS_1_1_MODULE_VERSION  43
#define IOJS_2_0_MODULE_VERSION  44
#define IOJS_3_0_MODULE_VERSION  45
#define NODE_4_0_MODULE_VERSION  46
#define NODE_5_0_MODULE_VERSION  47
#define NODE_6_0_MODULE_VERSION  48
#define NODE_7_0_MODULE_VERSION  51
#define NODE_8_0_MODULE_VERSION  57
#define NODE_9_0_MODULE_VERSION  59
#define NODE_10_0_MODULE_VERSION 64
#define NODE_11_0_MODULE_VERSION 67
#define NODE_12_0_MODULE_VERSION 72
#define NODE_13_0_MODULE_VERSION 79
#define NODE_14_0_MODULE_VERSION 83

#ifdef _MSC_VER
# define NAN_HAS_CPLUSPLUS_11 (_MSC_VER >= 1800)
#else
# define NAN_HAS_CPLUSPLUS_11 (__cplusplus >= 201103L)
#endif

#if NODE_MODULE_VERSION >= IOJS_3_0_MODULE_VERSION && !NAN_HAS_CPLUSPLUS_11
# error This version of node/NAN/v8 requires a C++11 compiler
#endif

#include <uv.h>
#include <node.h>
#include <node_buffer.h>
#include <node_object_wrap.h>
#include <algorithm>
#include <cstring>
#include <climits>
#include <cstdlib>
#include <utility>
#if defined(_MSC_VER)
# pragma warning( push )
# pragma warning( disable : 4530 )
# include <queue>
# include <string>
# include <vector>
# pragma warning( pop )
#else
# include <queue>
# include <string>
# include <vector>
#endif

// uv helpers
#ifdef UV_VERSION_MAJOR
# ifndef UV_VERSION_PATCH
#  define UV_VERSION_PATCH 0
# endif
# define NAUV_UVVERSION ((UV_VERSION_MAJOR << 16) | \\
                         (UV_VERSION_MINOR <<  8) | \\
                         (UV_VERSION_PATCH))
#else
# define NAUV_UVVERSION 0x000b00
#endif

#if NAUV_UVVERSION < 0x000b0b
# ifdef WIN32
#  include <windows.h>
# else
#  include <pthread.h>
# endif
#endif

namespace Nan {

#define NAN_CONCAT(a, b) NAN_CONCAT_HELPER(a, b)
#define NAN_CONCAT_HELPER(a, b) a##b

#define NAN_INLINE inline  // TODO(bnoordhuis) Remove in v3.0.0.

#if defined(__GNUC__) && \\
    !(defined(V8_DISABLE_DEPRECATIONS) && V8_DISABLE_DEPRECATIONS)
# define NAN_DEPRECATED __attribute__((deprecated))
#elif defined(_MSC_VER) && \\
    !(defined(V8_DISABLE_DEPRECATIONS) && V8_DISABLE_DEPRECATIONS)
# define NAN_DEPRECATED __declspec(deprecated)
#else
# define NAN_DEPRECATED
#endif

#if NAN_HAS_CPLUSPLUS_11
# define NAN_DISALLOW_ASSIGN(CLASS) void operator=(const CLASS&) = delete;
# define NAN_DISALLOW_COPY(CLASS) CLASS(const CLASS&) = delete;
# define NAN_DISALLOW_MOVE(CLASS)                                              \\
    CLASS(CLASS&&) = delete;  /* NOLINT(build/c++11) */                        \\
    void operator=(CLASS&&) = delete;
#else
# define NAN_DISALLOW_ASSIGN(CLASS) void operator=(const CLASS&);
# define NAN_DISALLOW_COPY(CLASS) CLASS(const CLASS&);
# define NAN_DISALLOW_MOVE(CLASS)
#endif

#define NAN_DISALLOW_ASSIGN_COPY(CLASS)                                        \\
    NAN_DISALLOW_ASSIGN(CLASS)                                                 \\
    NAN_DISALLOW_COPY(CLASS)

#define NAN_DISALLOW_ASSIGN_MOVE(CLASS)                                        \\
    NAN_DISALLOW_ASSIGN(CLASS)                                                 \\
    NAN_DISALLOW_MOVE(CLASS)

#define NAN_DISALLOW_COPY_MOVE(CLASS)                                          \\
    NAN_DISALLOW_COPY(CLASS)                                                   \\
    NAN_DISALLOW_MOVE(CLASS)

#define NAN_DISALLOW_ASSIGN_COPY_MOVE(CLASS)                                   \\
    NAN_DISALLOW_ASSIGN(CLASS)                                                 \\
    NAN_DISALLOW_COPY(CLASS)                                                   \\
    NAN_DISALLOW_MOVE(CLASS)

#define TYPE_CHECK(T, S)                                                       \\
    while (false) {                                                            \\
      *(static_cast<T *volatile *>(0)) = static_cast<S*>(0);                   \\
    }

//=== RegistrationFunction =====================================================

#if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
  typedef v8::Handle<v8::Object> ADDON_REGISTER_FUNCTION_ARGS_TYPE;
#else
  typedef v8::Local<v8::Object> ADDON_REGISTER_FUNCTION_ARGS_TYPE;
#endif

#define NAN_MODULE_INIT(name)                                                  \\
    void name(Nan::ADDON_REGISTER_FUNCTION_ARGS_TYPE target)

#if NODE_MAJOR_VERSION >= 10 || \\
    NODE_MAJOR_VERSION == 9 && NODE_MINOR_VERSION >= 3
#define NAN_MODULE_WORKER_ENABLED(module_name, registration)                   \\
    extern "C" NODE_MODULE_EXPORT void                                         \\
      NAN_CONCAT(node_register_module_v, NODE_MODULE_VERSION)(                 \\
        v8::Local<v8::Object> exports, v8::Local<v8::Value> module,            \\
        v8::Local<v8::Context> context)                                        \\
    {                                                                          \\
        registration(exports);                                                 \\
    }
#else
#define NAN_MODULE_WORKER_ENABLED(module_name, registration)                   \\
    NODE_MODULE(module_name, registration)
#endif

//=== CallbackInfo =============================================================

#include "nan_callbacks.h"  // NOLINT(build/include)

//==============================================================================

#if (NODE_MODULE_VERSION < NODE_0_12_MODULE_VERSION)
typedef v8::Script             UnboundScript;
typedef v8::Script             BoundScript;
#else
typedef v8::UnboundScript      UnboundScript;
typedef v8::Script             BoundScript;
#endif

#if (NODE_MODULE_VERSION < ATOM_0_21_MODULE_VERSION)
typedef v8::String::ExternalAsciiStringResource
    ExternalOneByteStringResource;
#else
typedef v8::String::ExternalOneByteStringResource
    ExternalOneByteStringResource;
#endif

#if (NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION)
template<typename T>
class NonCopyablePersistentTraits :
    public v8::NonCopyablePersistentTraits<T> {};
template<typename T>
class CopyablePersistentTraits :
    public v8::CopyablePersistentTraits<T> {};

template<typename T>
class PersistentBase :
    public v8::PersistentBase<T> {};

template<typename T, typename M = v8::NonCopyablePersistentTraits<T> >
class Persistent;
#else
template<typename T> class NonCopyablePersistentTraits;
template<typename T> class PersistentBase;
template<typename T, typename P> class WeakCallbackData;
template<typename T, typename M = NonCopyablePersistentTraits<T> >
class Persistent;
#endif  // NODE_MODULE_VERSION

template<typename T>
class Maybe {
 public:
  inline bool IsNothing() const { return !has_value_; }
  inline bool IsJust() const { return has_value_; }

  inline T ToChecked() const { return FromJust(); }
  inline void Check() const { FromJust(); }

  inline bool To(T* out) const {
    if (IsJust()) *out = value_;
    return IsJust();
  }

  inline T FromJust() const {
#if defined(V8_ENABLE_CHECKS)
    assert(IsJust() && "FromJust is Nothing");
#endif  // V8_ENABLE_CHECKS
    return value_;
  }

  inline T FromMaybe(const T& default_value) const {
    return has_value_ ? value_ : default_value;
  }

  inline bool operator==(const Maybe &other) const {
    return (IsJust() == other.IsJust()) &&
        (!IsJust() || FromJust() == other.FromJust());
  }

  inline bool operator!=(const Maybe &other) const {
    return !operator==(other);
  }

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
  // Allow implicit conversions from v8::Maybe<T> to Nan::Maybe<T>.
  Maybe(const v8::Maybe<T>& that)  // NOLINT(runtime/explicit)
    : has_value_(that.IsJust())
    , value_(that.FromMaybe(T())) {}
#endif

 private:
  Maybe() : has_value_(false) {}
  explicit Maybe(const T& t) : has_value_(true), value_(t) {}
  bool has_value_;
  T value_;

  template<typename U>
  friend Maybe<U> Nothing();
  template<typename U>
  friend Maybe<U> Just(const U& u);
};

template<typename T>
inline Maybe<T> Nothing() {
  return Maybe<T>();
}

template<typename T>
inline Maybe<T> Just(const T& t) {
  return Maybe<T>(t);
}

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
# include "nan_maybe_43_inl.h"  // NOLINT(build/include)
#else
# include "nan_maybe_pre_43_inl.h"  // NOLINT(build/include)
#endif

#include "nan_converters.h"  // NOLINT(build/include)
#include "nan_new.h"  // NOLINT(build/include)

#if NAUV_UVVERSION < 0x000b17
#define NAUV_WORK_CB(func) \\
    void func(uv_async_t *async, int)
#else
#define NAUV_WORK_CB(func) \\
    void func(uv_async_t *async)
#endif

#if NAUV_UVVERSION >= 0x000b0b

typedef uv_key_t nauv_key_t;

inline int nauv_key_create(nauv_key_t *key) {
  return uv_key_create(key);
}

inline void nauv_key_delete(nauv_key_t *key) {
  uv_key_delete(key);
}

inline void* nauv_key_get(nauv_key_t *key) {
  return uv_key_get(key);
}

inline void nauv_key_set(nauv_key_t *key, void *value) {
  uv_key_set(key, value);
}

#else

/* Implement thread local storage for older versions of libuv.
 * This is essentially a backport of libuv commit 5d2434bf
 * written by Ben Noordhuis, adjusted for names and inline.
 */

#ifndef WIN32

typedef pthread_key_t nauv_key_t;

inline int nauv_key_create(nauv_key_t* key) {
  return -pthread_key_create(key, NULL);
}

inline void nauv_key_delete(nauv_key_t* key) {
  if (pthread_key_delete(*key))
    abort();
}

inline void* nauv_key_get(nauv_key_t* key) {
  return pthread_getspecific(*key);
}

inline void nauv_key_set(nauv_key_t* key, void* value) {
  if (pthread_setspecific(*key, value))
    abort();
}

#else

typedef struct {
  DWORD tls_index;
} nauv_key_t;

inline int nauv_key_create(nauv_key_t* key) {
  key->tls_index = TlsAlloc();
  if (key->tls_index == TLS_OUT_OF_INDEXES)
    return UV_ENOMEM;
  return 0;
}

inline void nauv_key_delete(nauv_key_t* key) {
  if (TlsFree(key->tls_index) == FALSE)
    abort();
  key->tls_index = TLS_OUT_OF_INDEXES;
}

inline void* nauv_key_get(nauv_key_t* key) {
  void* value = TlsGetValue(key->tls_index);
  if (value == NULL)
    if (GetLastError() != ERROR_SUCCESS)
      abort();
  return value;
}

inline void nauv_key_set(nauv_key_t* key, void* value) {
  if (TlsSetValue(key->tls_index, value) == FALSE)
    abort();
}

#endif
#endif

#if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
template<typename T>
v8::Local<T> New(v8::Handle<T>);
#endif

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
  typedef v8::WeakCallbackType WeakCallbackType;
#else
struct WeakCallbackType {
  enum E {kParameter, kInternalFields};
  E type;
  WeakCallbackType(E other) : type(other) {}  // NOLINT(runtime/explicit)
  inline bool operator==(E other) { return other == this->type; }
  inline bool operator!=(E other) { return !operator==(other); }
};
#endif

template<typename P> class WeakCallbackInfo;

#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
# include "nan_persistent_12_inl.h"  // NOLINT(build/include)
#else
# include "nan_persistent_pre_12_inl.h"  // NOLINT(build/include)
#endif

namespace imp {
  static const size_t kMaxLength = 0x3fffffff;
  // v8::String::REPLACE_INVALID_UTF8 was introduced
  // in node.js v0.10.29 and v0.8.27.
#if NODE_MAJOR_VERSION > 0 || \\
    NODE_MINOR_VERSION > 10 || \\
    NODE_MINOR_VERSION == 10 && NODE_PATCH_VERSION >= 29 || \\
    NODE_MINOR_VERSION == 8 && NODE_PATCH_VERSION >= 27
  static const unsigned kReplaceInvalidUtf8 = v8::String::REPLACE_INVALID_UTF8;
#else
  static const unsigned kReplaceInvalidUtf8 = 0;
#endif
}  // end of namespace imp

//=== HandleScope ==============================================================

class HandleScope {
  v8::HandleScope scope;

 public:
#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
  inline HandleScope() : scope(v8::Isolate::GetCurrent()) {}
  inline static int NumberOfHandles() {
    return v8::HandleScope::NumberOfHandles(v8::Isolate::GetCurrent());
  }
#else
  inline HandleScope() : scope() {}
  inline static int NumberOfHandles() {
    return v8::HandleScope::NumberOfHandles();
  }
#endif

 private:
  // Make it hard to create heap-allocated or illegal handle scopes by
  // disallowing certain operations.
  HandleScope(const HandleScope &);
  void operator=(const HandleScope &);
  void *operator new(size_t size);
  void operator delete(void *, size_t) {
    abort();
  }
};

class EscapableHandleScope {
 public:
#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
  inline EscapableHandleScope() : scope(v8::Isolate::GetCurrent()) {}

  inline static int NumberOfHandles() {
    return v8::EscapableHandleScope::NumberOfHandles(v8::Isolate::GetCurrent());
  }

  template<typename T>
  inline v8::Local<T> Escape(v8::Local<T> value) {
    return scope.Escape(value);
  }

 private:
  v8::EscapableHandleScope scope;
#else
  inline EscapableHandleScope() : scope() {}

  inline static int NumberOfHandles() {
    return v8::HandleScope::NumberOfHandles();
  }

  template<typename T>
  inline v8::Local<T> Escape(v8::Local<T> value) {
    return scope.Close(value);
  }

 private:
  v8::HandleScope scope;
#endif

 private:
  // Make it hard to create heap-allocated or illegal handle scopes by
  // disallowing certain operations.
  EscapableHandleScope(const EscapableHandleScope &);
  void operator=(const EscapableHandleScope &);
  void *operator new(size_t size);
  void operator delete(void *, size_t) {
    abort();
  }
};

//=== TryCatch =================================================================

class TryCatch {
  v8::TryCatch try_catch_;
  friend void FatalException(const TryCatch&);

 public:
#if NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
  TryCatch() : try_catch_(v8::Isolate::GetCurrent()) {}
#endif

  inline bool HasCaught() const { return try_catch_.HasCaught(); }

  inline bool CanContinue() const { return try_catch_.CanContinue(); }

  inline v8::Local<v8::Value> ReThrow() {
#if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
    return New(try_catch_.ReThrow());
#else
    return try_catch_.ReThrow();
#endif
  }

  inline v8::Local<v8::Value> Exception() const {
    return try_catch_.Exception();
  }

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
  inline v8::MaybeLocal<v8::Value> StackTrace() const {
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
    v8::EscapableHandleScope scope(isolate);
    return scope.Escape(try_catch_.StackTrace(isolate->GetCurrentContext())
                            .FromMaybe(v8::Local<v8::Value>()));
  }
#else
  inline MaybeLocal<v8::Value> StackTrace() const {
    return try_catch_.StackTrace();
  }
#endif

  inline v8::Local<v8::Message> Message() const {
    return try_catch_.Message();
  }

  inline void Reset() { try_catch_.Reset(); }

  inline void SetVerbose(bool value) { try_catch_.SetVerbose(value); }

  inline void SetCaptureMessage(bool value) {
    try_catch_.SetCaptureMessage(value);
  }
};

v8::Local<v8::Value> MakeCallback(v8::Local<v8::Object> target,
                                  v8::Local<v8::Function> func,
                                  int argc,
                                  v8::Local<v8::Value>* argv);
v8::Local<v8::Value> MakeCallback(v8::Local<v8::Object> target,
                                  v8::Local<v8::String> symbol,
                                  int argc,
                                  v8::Local<v8::Value>* argv);
v8::Local<v8::Value> MakeCallback(v8::Local<v8::Object> target,
                                  const char* method,
                                  int argc,
                                  v8::Local<v8::Value>* argv);

// === AsyncResource ===========================================================

class AsyncResource {
 public:
  AsyncResource(
      v8::Local<v8::String> name
    , v8::Local<v8::Object> resource = New<v8::Object>()) {
#if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    v8::Isolate* isolate = v8::Isolate::GetCurrent();

    if (resource.IsEmpty()) {
      resource = New<v8::Object>();
    }

    context = node::EmitAsyncInit(isolate, resource, name);
#endif
  }

  AsyncResource(
      const char* name
    , v8::Local<v8::Object> resource = New<v8::Object>()) {
#if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    v8::Isolate* isolate = v8::Isolate::GetCurrent();

    if (resource.IsEmpty()) {
      resource = New<v8::Object>();
    }

    v8::Local<v8::String> name_string =
        New<v8::String>(name).ToLocalChecked();
    context = node::EmitAsyncInit(isolate, resource, name_string);
#endif
  }

  ~AsyncResource() {
#if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    v8::Isolate* isolate = v8::Isolate::GetCurrent();
    node::EmitAsyncDestroy(isolate, context);
#endif
  }

  inline MaybeLocal<v8::Value> runInAsyncScope(
      v8::Local<v8::Object> target
    , v8::Local<v8::Function> func
    , int argc
    , v8::Local<v8::Value>* argv) {
#if NODE_MODULE_VERSION < NODE_9_0_MODULE_VERSION
    return MakeCallback(target, func, argc, argv);
#else
    return node::MakeCallback(
        v8::Isolate::GetCurrent(), target, func, argc, argv, context);
#endif
  }

  inline MaybeLocal<v8::Value> runInAsyncScope(
      v8::Local<v8::Object> target
    , v8::Local<v8::String> symbol
    , int argc
    , v8::Local<v8::Value>* argv) {
#if NODE_MODULE_VERSION < NODE_9_0_MODULE_VERSION
    return MakeCallback(target, symbol, argc, argv);
#else
    return node::MakeCallback(
        v8::Isolate::GetCurrent(), target, symbol, argc, argv, context);
#endif
  }

  inline MaybeLocal<v8::Value> runInAsyncScope(
      v8::Local<v8::Object> target
    , const char* method
    , int argc
    , v8::Local<v8::Value>* argv) {
#if NODE_MODULE_VERSION < NODE_9_0_MODULE_VERSION
    return MakeCallback(target, method, argc, argv);
#else
    return node::MakeCallback(
        v8::Isolate::GetCurrent(), target, method, argc, argv, context);
#endif
  }

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(AsyncResource)
#if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
  node::async_context context;
#endif
};

inline uv_loop_t* GetCurrentEventLoop() {
#if NODE_MAJOR_VERSION >= 10 || \\
  NODE_MAJOR_VERSION == 9 && NODE_MINOR_VERSION >= 3 || \\
  NODE_MAJOR_VERSION == 8 && NODE_MINOR_VERSION >= 10
    return node::GetCurrentEventLoop(v8::Isolate::GetCurrent());
#else
    return uv_default_loop();
#endif
}

//============ =================================================================

/* node 0.12  */
#if NODE_MODULE_VERSION >= NODE_0_12_MODULE_VERSION
  inline
  void SetCounterFunction(v8::CounterLookupCallback cb) {
    v8::Isolate::GetCurrent()->SetCounterFunction(cb);
  }

  inline
  void SetCreateHistogramFunction(v8::CreateHistogramCallback cb) {
    v8::Isolate::GetCurrent()->SetCreateHistogramFunction(cb);
  }

  inline
  void SetAddHistogramSampleFunction(v8::AddHistogramSampleCallback cb) {
    v8::Isolate::GetCurrent()->SetAddHistogramSampleFunction(cb);
  }

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
  inline bool IdleNotification(int idle_time_in_ms) {
    return v8::Isolate::GetCurrent()->IdleNotificationDeadline(
        idle_time_in_ms * 0.001);
  }
# else
  inline bool IdleNotification(int idle_time_in_ms) {
    return v8::Isolate::GetCurrent()->IdleNotification(idle_time_in_ms);
  }
#endif

  inline void LowMemoryNotification() {
    v8::Isolate::GetCurrent()->LowMemoryNotification();
  }

  inline void ContextDisposedNotification() {
    v8::Isolate::GetCurrent()->ContextDisposedNotification();
  }
#else
  inline
  void SetCounterFunction(v8::CounterLookupCallback cb) {
    v8::V8::SetCounterFunction(cb);
  }

  inline
  void SetCreateHistogramFunction(v8::CreateHistogramCallback cb) {
    v8::V8::SetCreateHistogramFunction(cb);
  }

  inline
  void SetAddHistogramSampleFunction(v8::AddHistogramSampleCallback cb) {
    v8::V8::SetAddHistogramSampleFunction(cb);
  }

  inline bool IdleNotification(int idle_time_in_ms) {
    return v8::V8::IdleNotification(idle_time_in_ms);
  }

  inline void LowMemoryNotification() {
    v8::V8::LowMemoryNotification();
  }

  inline void ContextDisposedNotification() {
    v8::V8::ContextDisposedNotification();
  }
#endif

#if (NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION)  // Node 0.12
  inline v8::Local<v8::Primitive> Undefined() {
# if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
    EscapableHandleScope scope;
    return scope.Escape(New(v8::Undefined(v8::Isolate::GetCurrent())));
# else
    return v8::Undefined(v8::Isolate::GetCurrent());
# endif
  }

  inline v8::Local<v8::Primitive> Null() {
# if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
    EscapableHandleScope scope;
    return scope.Escape(New(v8::Null(v8::Isolate::GetCurrent())));
# else
    return v8::Null(v8::Isolate::GetCurrent());
# endif
  }

  inline v8::Local<v8::Boolean> True() {
# if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
    EscapableHandleScope scope;
    return scope.Escape(New(v8::True(v8::Isolate::GetCurrent())));
# else
    return v8::True(v8::Isolate::GetCurrent());
# endif
  }

  inline v8::Local<v8::Boolean> False() {
# if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
    EscapableHandleScope scope;
    return scope.Escape(New(v8::False(v8::Isolate::GetCurrent())));
# else
    return v8::False(v8::Isolate::GetCurrent());
# endif
  }

  inline v8::Local<v8::String> EmptyString() {
    return v8::String::Empty(v8::Isolate::GetCurrent());
  }

  inline int AdjustExternalMemory(int bc) {
    return static_cast<int>(
        v8::Isolate::GetCurrent()->AdjustAmountOfExternalAllocatedMemory(bc));
  }

  inline void SetTemplate(
      v8::Local<v8::Template> templ
    , const char *name
    , v8::Local<v8::Data> value) {
    templ->Set(v8::Isolate::GetCurrent(), name, value);
  }

  inline void SetTemplate(
      v8::Local<v8::Template> templ
    , v8::Local<v8::String> name
    , v8::Local<v8::Data> value
    , v8::PropertyAttribute attributes) {
    templ->Set(name, value, attributes);
  }

  inline v8::Local<v8::Context> GetCurrentContext() {
    return v8::Isolate::GetCurrent()->GetCurrentContext();
  }

  inline void* GetInternalFieldPointer(
      v8::Local<v8::Object> object
    , int index) {
    return object->GetAlignedPointerFromInternalField(index);
  }

  inline void SetInternalFieldPointer(
      v8::Local<v8::Object> object
    , int index
    , void* value) {
    object->SetAlignedPointerInInternalField(index, value);
  }

# define NAN_GC_CALLBACK(name)                                                 \\
    void name(v8::Isolate *isolate, v8::GCType type, v8::GCCallbackFlags flags)

#if NODE_MODULE_VERSION <= NODE_4_0_MODULE_VERSION
  typedef v8::Isolate::GCEpilogueCallback GCEpilogueCallback;
  typedef v8::Isolate::GCPrologueCallback GCPrologueCallback;
#else
  typedef v8::Isolate::GCCallback GCEpilogueCallback;
  typedef v8::Isolate::GCCallback GCPrologueCallback;
#endif

  inline void AddGCEpilogueCallback(
      GCEpilogueCallback callback
    , v8::GCType gc_type_filter = v8::kGCTypeAll) {
    v8::Isolate::GetCurrent()->AddGCEpilogueCallback(callback, gc_type_filter);
  }

  inline void RemoveGCEpilogueCallback(
      GCEpilogueCallback callback) {
    v8::Isolate::GetCurrent()->RemoveGCEpilogueCallback(callback);
  }

  inline void AddGCPrologueCallback(
      GCPrologueCallback callback
    , v8::GCType gc_type_filter = v8::kGCTypeAll) {
    v8::Isolate::GetCurrent()->AddGCPrologueCallback(callback, gc_type_filter);
  }

  inline void RemoveGCPrologueCallback(
      GCPrologueCallback callback) {
    v8::Isolate::GetCurrent()->RemoveGCPrologueCallback(callback);
  }

  inline void GetHeapStatistics(
      v8::HeapStatistics *heap_statistics) {
    v8::Isolate::GetCurrent()->GetHeapStatistics(heap_statistics);
  }

# define X(NAME)                                                               \\
    inline v8::Local<v8::Value> NAME(const char *msg) {                        \\
      EscapableHandleScope scope;                                              \\
      return scope.Escape(v8::Exception::NAME(New(msg).ToLocalChecked()));     \\
    }                                                                          \\
                                                                               \\
    inline                                                                     \\
    v8::Local<v8::Value> NAME(v8::Local<v8::String> msg) {                     \\
      return v8::Exception::NAME(msg);                                         \\
    }                                                                          \\
                                                                               \\
    inline void Throw ## NAME(const char *msg) {                               \\
      HandleScope scope;                                                       \\
      v8::Isolate::GetCurrent()->ThrowException(                               \\
          v8::Exception::NAME(New(msg).ToLocalChecked()));                     \\
    }                                                                          \\
                                                                               \\
    inline void Throw ## NAME(v8::Local<v8::String> msg) {                     \\
      HandleScope scope;                                                       \\
      v8::Isolate::GetCurrent()->ThrowException(                               \\
          v8::Exception::NAME(msg));                                           \\
    }

  X(Error)
  X(RangeError)
  X(ReferenceError)
  X(SyntaxError)
  X(TypeError)

# undef X

  inline void ThrowError(v8::Local<v8::Value> error) {
    v8::Isolate::GetCurrent()->ThrowException(error);
  }

  inline MaybeLocal<v8::Object> NewBuffer(
      char *data
    , size_t length
#if NODE_MODULE_VERSION > IOJS_2_0_MODULE_VERSION
    , node::Buffer::FreeCallback callback
#else
    , node::smalloc::FreeCallback callback
#endif
    , void *hint
  ) {
    // arbitrary buffer lengths requires
    // NODE_MODULE_VERSION >= IOJS_3_0_MODULE_VERSION
    assert(length <= imp::kMaxLength && "too large buffer");
#if NODE_MODULE_VERSION > IOJS_2_0_MODULE_VERSION
    return node::Buffer::New(
        v8::Isolate::GetCurrent(), data, length, callback, hint);
#else
    return node::Buffer::New(v8::Isolate::GetCurrent(), data, length, callback,
                             hint);
#endif
  }

  inline MaybeLocal<v8::Object> CopyBuffer(
      const char *data
    , uint32_t size
  ) {
    // arbitrary buffer lengths requires
    // NODE_MODULE_VERSION >= IOJS_3_0_MODULE_VERSION
    assert(size <= imp::kMaxLength && "too large buffer");
#if NODE_MODULE_VERSION > IOJS_2_0_MODULE_VERSION
    return node::Buffer::Copy(
        v8::Isolate::GetCurrent(), data, size);
#else
    return node::Buffer::New(v8::Isolate::GetCurrent(), data, size);
#endif
  }

  inline MaybeLocal<v8::Object> NewBuffer(uint32_t size) {
    // arbitrary buffer lengths requires
    // NODE_MODULE_VERSION >= IOJS_3_0_MODULE_VERSION
    assert(size <= imp::kMaxLength && "too large buffer");
#if NODE_MODULE_VERSION > IOJS_2_0_MODULE_VERSION
    return node::Buffer::New(
        v8::Isolate::GetCurrent(), size);
#else
    return node::Buffer::New(v8::Isolate::GetCurrent(), size);
#endif
  }

  inline MaybeLocal<v8::Object> NewBuffer(
      char* data
    , uint32_t size
  ) {
    // arbitrary buffer lengths requires
    // NODE_MODULE_VERSION >= IOJS_3_0_MODULE_VERSION
    assert(size <= imp::kMaxLength && "too large buffer");
#if NODE_MODULE_VERSION > IOJS_2_0_MODULE_VERSION
    return node::Buffer::New(v8::Isolate::GetCurrent(), data, size);
#else
    return node::Buffer::Use(v8::Isolate::GetCurrent(), data, size);
#endif
  }

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
  inline MaybeLocal<v8::String>
  NewOneByteString(const uint8_t * value, int length = -1) {
    return v8::String::NewFromOneByte(v8::Isolate::GetCurrent(), value,
          v8::NewStringType::kNormal, length);
  }

  inline MaybeLocal<BoundScript> CompileScript(
      v8::Local<v8::String> s
    , const v8::ScriptOrigin& origin
  ) {
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
    v8::EscapableHandleScope scope(isolate);
    v8::ScriptCompiler::Source source(s, origin);
    return scope.Escape(
        v8::ScriptCompiler::Compile(isolate->GetCurrentContext(), &source)
            .FromMaybe(v8::Local<BoundScript>()));
  }

  inline MaybeLocal<BoundScript> CompileScript(
      v8::Local<v8::String> s
  ) {
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
    v8::EscapableHandleScope scope(isolate);
    v8::ScriptCompiler::Source source(s);
    return scope.Escape(
        v8::ScriptCompiler::Compile(isolate->GetCurrentContext(), &source)
            .FromMaybe(v8::Local<BoundScript>()));
  }

  inline MaybeLocal<v8::Value> RunScript(
      v8::Local<UnboundScript> script
  ) {
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
    v8::EscapableHandleScope scope(isolate);
    return scope.Escape(script->BindToCurrentContext()
                            ->Run(isolate->GetCurrentContext())
                            .FromMaybe(v8::Local<v8::Value>()));
  }

  inline MaybeLocal<v8::Value> RunScript(
      v8::Local<BoundScript> script
  ) {
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
    v8::EscapableHandleScope scope(isolate);
    return scope.Escape(script->Run(isolate->GetCurrentContext())
                            .FromMaybe(v8::Local<v8::Value>()));
  }
#else
  inline MaybeLocal<v8::String>
  NewOneByteString(const uint8_t * value, int length = -1) {
    return v8::String::NewFromOneByte(v8::Isolate::GetCurrent(), value,
                                      v8::String::kNormalString, length);
  }

  inline MaybeLocal<BoundScript> CompileScript(
      v8::Local<v8::String> s
    , const v8::ScriptOrigin& origin
  ) {
    v8::ScriptCompiler::Source source(s, origin);
    return v8::ScriptCompiler::Compile(v8::Isolate::GetCurrent(), &source);
  }

  inline MaybeLocal<BoundScript> CompileScript(
      v8::Local<v8::String> s
  ) {
    v8::ScriptCompiler::Source source(s);
    return v8::ScriptCompiler::Compile(v8::Isolate::GetCurrent(), &source);
  }

  inline MaybeLocal<v8::Value> RunScript(
      v8::Local<UnboundScript> script
  ) {
    EscapableHandleScope scope;
    return scope.Escape(script->BindToCurrentContext()->Run());
  }

  inline MaybeLocal<v8::Value> RunScript(
      v8::Local<BoundScript> script
  ) {
    return script->Run();
  }
#endif

  NAN_DEPRECATED inline v8::Local<v8::Value> MakeCallback(
      v8::Local<v8::Object> target
    , v8::Local<v8::Function> func
    , int argc
    , v8::Local<v8::Value>* argv) {
#if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
    EscapableHandleScope scope;
    return scope.Escape(New(node::MakeCallback(
        v8::Isolate::GetCurrent(), target, func, argc, argv)));
#else
# if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    AsyncResource res("nan:makeCallback");
    return res.runInAsyncScope(target, func, argc, argv)
        .FromMaybe(v8::Local<v8::Value>());
# else
    return node::MakeCallback(
        v8::Isolate::GetCurrent(), target, func, argc, argv);
# endif  // NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
#endif  // NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
  }

  NAN_DEPRECATED inline v8::Local<v8::Value> MakeCallback(
      v8::Local<v8::Object> target
    , v8::Local<v8::String> symbol
    , int argc
    , v8::Local<v8::Value>* argv) {
#if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
    EscapableHandleScope scope;
    return scope.Escape(New(node::MakeCallback(
        v8::Isolate::GetCurrent(), target, symbol, argc, argv)));
#else
# if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    AsyncResource res("nan:makeCallback");
    return res.runInAsyncScope(target, symbol, argc, argv)
        .FromMaybe(v8::Local<v8::Value>());
# else
    return node::MakeCallback(
        v8::Isolate::GetCurrent(), target, symbol, argc, argv);
# endif  // NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
#endif  // NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
  }

  NAN_DEPRECATED inline v8::Local<v8::Value> MakeCallback(
      v8::Local<v8::Object> target
    , const char* method
    , int argc
    , v8::Local<v8::Value>* argv) {
#if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
    EscapableHandleScope scope;
    return scope.Escape(New(node::MakeCallback(
        v8::Isolate::GetCurrent(), target, method, argc, argv)));
#else
# if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    AsyncResource res("nan:makeCallback");
    return res.runInAsyncScope(target, method, argc, argv)
        .FromMaybe(v8::Local<v8::Value>());
# else
    return node::MakeCallback(
        v8::Isolate::GetCurrent(), target, method, argc, argv);
# endif  // NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
#endif  // NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
  }

  inline void FatalException(const TryCatch& try_catch) {
    node::FatalException(v8::Isolate::GetCurrent(), try_catch.try_catch_);
  }

  inline v8::Local<v8::Value> ErrnoException(
          int errorno
       ,  const char* syscall = NULL
       ,  const char* message = NULL
       ,  const char* path = NULL) {
    return node::ErrnoException(v8::Isolate::GetCurrent(), errorno, syscall,
            message, path);
  }

  NAN_DEPRECATED inline v8::Local<v8::Value> NanErrnoException(
          int errorno
       ,  const char* syscall = NULL
       ,  const char* message = NULL
       ,  const char* path = NULL) {
    return ErrnoException(errorno, syscall, message, path);
  }

  template<typename T>
  inline void SetIsolateData(
      v8::Isolate *isolate
    , T *data
  ) {
      isolate->SetData(0, data);
  }

  template<typename T>
  inline T *GetIsolateData(
      v8::Isolate *isolate
  ) {
      return static_cast<T*>(isolate->GetData(0));
  }

class Utf8String {
 public:
  inline explicit Utf8String(v8::Local<v8::Value> from) :
      length_(0), str_(str_st_) {
    HandleScope scope;
    if (!from.IsEmpty()) {
#if NODE_MAJOR_VERSION >= 10
      v8::Local<v8::Context> context = GetCurrentContext();
      v8::Local<v8::String> string =
          from->ToString(context).FromMaybe(v8::Local<v8::String>());
#else
      v8::Local<v8::String> string = from->ToString();
#endif
      if (!string.IsEmpty()) {
        size_t len = 3 * string->Length() + 1;
        assert(len <= INT_MAX);
        if (len > sizeof (str_st_)) {
          str_ = static_cast<char*>(malloc(len));
          assert(str_ != 0);
        }
        const int flags =
            v8::String::NO_NULL_TERMINATION | imp::kReplaceInvalidUtf8;
#if NODE_MAJOR_VERSION >= 11
        length_ = string->WriteUtf8(v8::Isolate::GetCurrent(), str_,
                                    static_cast<int>(len), 0, flags);
#else
        // See https://github.com/nodejs/nan/issues/832.
        // Disable the warning as there is no way around it.
#ifdef _MSC_VER
#pragma warning(push)
#pragma warning(disable : 4996)
#endif
#ifdef __GNUC__
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif
        length_ = string->WriteUtf8(str_, static_cast<int>(len), 0, flags);
#ifdef __GNUC__
#pragma GCC diagnostic pop
#endif
#ifdef _MSC_VER
#pragma warning(pop)
#endif
#endif  // NODE_MAJOR_VERSION < 11
        str_[length_] = '\\0';
      }
    }
  }

  inline int length() const {
    return length_;
  }

  inline char* operator*() { return str_; }
  inline const char* operator*() const { return str_; }

  inline ~Utf8String() {
    if (str_ != str_st_) {
      free(str_);
    }
  }

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(Utf8String)

  int length_;
  char *str_;
  char str_st_[1024];
};

#else  // Node 0.8 and 0.10
  inline v8::Local<v8::Primitive> Undefined() {
    EscapableHandleScope scope;
    return scope.Escape(New(v8::Undefined()));
  }

  inline v8::Local<v8::Primitive> Null() {
    EscapableHandleScope scope;
    return scope.Escape(New(v8::Null()));
  }

  inline v8::Local<v8::Boolean> True() {
    EscapableHandleScope scope;
    return scope.Escape(New(v8::True()));
  }

  inline v8::Local<v8::Boolean> False() {
    EscapableHandleScope scope;
    return scope.Escape(New(v8::False()));
  }

  inline v8::Local<v8::String> EmptyString() {
    return v8::String::Empty();
  }

  inline int AdjustExternalMemory(int bc) {
    return static_cast<int>(v8::V8::AdjustAmountOfExternalAllocatedMemory(bc));
  }

  inline void SetTemplate(
      v8::Local<v8::Template> templ
    , const char *name
    , v8::Local<v8::Data> value) {
    templ->Set(name, value);
  }

  inline void SetTemplate(
      v8::Local<v8::Template> templ
    , v8::Local<v8::String> name
    , v8::Local<v8::Data> value
    , v8::PropertyAttribute attributes) {
    templ->Set(name, value, attributes);
  }

  inline v8::Local<v8::Context> GetCurrentContext() {
    return v8::Context::GetCurrent();
  }

  inline void* GetInternalFieldPointer(
      v8::Local<v8::Object> object
    , int index) {
    return object->GetPointerFromInternalField(index);
  }

  inline void SetInternalFieldPointer(
      v8::Local<v8::Object> object
    , int index
    , void* value) {
    object->SetPointerInInternalField(index, value);
  }

# define NAN_GC_CALLBACK(name)                                                 \\
    void name(v8::GCType type, v8::GCCallbackFlags flags)

  inline void AddGCEpilogueCallback(
    v8::GCEpilogueCallback callback
  , v8::GCType gc_type_filter = v8::kGCTypeAll) {
    v8::V8::AddGCEpilogueCallback(callback, gc_type_filter);
  }
  inline void RemoveGCEpilogueCallback(
    v8::GCEpilogueCallback callback) {
    v8::V8::RemoveGCEpilogueCallback(callback);
  }
  inline void AddGCPrologueCallback(
    v8::GCPrologueCallback callback
  , v8::GCType gc_type_filter = v8::kGCTypeAll) {
    v8::V8::AddGCPrologueCallback(callback, gc_type_filter);
  }
  inline void RemoveGCPrologueCallback(
    v8::GCPrologueCallback callback) {
    v8::V8::RemoveGCPrologueCallback(callback);
  }
  inline void GetHeapStatistics(
    v8::HeapStatistics *heap_statistics) {
    v8::V8::GetHeapStatistics(heap_statistics);
  }

# define X(NAME)                                                               \\
    inline v8::Local<v8::Value> NAME(const char *msg) {                        \\
      EscapableHandleScope scope;                                              \\
      return scope.Escape(v8::Exception::NAME(New(msg).ToLocalChecked()));     \\
    }                                                                          \\
                                                                               \\
    inline                                                                     \\
    v8::Local<v8::Value> NAME(v8::Local<v8::String> msg) {                     \\
      return v8::Exception::NAME(msg);                                         \\
    }                                                                          \\
                                                                               \\
    inline void Throw ## NAME(const char *msg) {                               \\
      HandleScope scope;                                                       \\
      v8::ThrowException(v8::Exception::NAME(New(msg).ToLocalChecked()));      \\
    }                                                                          \\
                                                                               \\
    inline                                                                     \\
    void Throw ## NAME(v8::Local<v8::String> errmsg) {                         \\
      HandleScope scope;                                                       \\
      v8::ThrowException(v8::Exception::NAME(errmsg));                         \\
    }

  X(Error)
  X(RangeError)
  X(ReferenceError)
  X(SyntaxError)
  X(TypeError)

# undef X

  inline void ThrowError(v8::Local<v8::Value> error) {
    v8::ThrowException(error);
  }

  inline MaybeLocal<v8::Object> NewBuffer(
      char *data
    , size_t length
    , node::Buffer::free_callback callback
    , void *hint
  ) {
    EscapableHandleScope scope;
    // arbitrary buffer lengths requires
    // NODE_MODULE_VERSION >= IOJS_3_0_MODULE_VERSION
    assert(length <= imp::kMaxLength && "too large buffer");
    return scope.Escape(
        New(node::Buffer::New(data, length, callback, hint)->handle_));
  }

  inline MaybeLocal<v8::Object> CopyBuffer(
      const char *data
    , uint32_t size
  ) {
    EscapableHandleScope scope;
    // arbitrary buffer lengths requires
    // NODE_MODULE_VERSION >= IOJS_3_0_MODULE_VERSION
    assert(size <= imp::kMaxLength && "too large buffer");
#if NODE_MODULE_VERSION >= NODE_0_10_MODULE_VERSION
    return scope.Escape(New(node::Buffer::New(data, size)->handle_));
#else
    return scope.Escape(
        New(node::Buffer::New(const_cast<char *>(data), size)->handle_));
#endif
  }

  inline MaybeLocal<v8::Object> NewBuffer(uint32_t size) {
    // arbitrary buffer lengths requires
    // NODE_MODULE_VERSION >= IOJS_3_0_MODULE_VERSION
    EscapableHandleScope scope;
    assert(size <= imp::kMaxLength && "too large buffer");
    return scope.Escape(New(node::Buffer::New(size)->handle_));
  }

  inline void FreeData(char *data, void *hint) {
    (void) hint;  // unused
    delete[] data;
  }

  inline MaybeLocal<v8::Object> NewBuffer(
      char* data
    , uint32_t size
  ) {
    EscapableHandleScope scope;
    // arbitrary buffer lengths requires
    // NODE_MODULE_VERSION >= IOJS_3_0_MODULE_VERSION
    assert(size <= imp::kMaxLength && "too large buffer");
    return scope.Escape(
        New(node::Buffer::New(data, size, FreeData, NULL)->handle_));
  }

namespace imp {
inline void
widenString(std::vector<uint16_t> *ws, const uint8_t *s, int l) {
  size_t len = static_cast<size_t>(l);
  if (l < 0) {
    len = strlen(reinterpret_cast<const char*>(s));
  }
  assert(len <= INT_MAX && "string too long");
  ws->resize(len);
  std::copy(s, s + len, ws->begin());  // NOLINT(build/include_what_you_use)
}
}  // end of namespace imp

  inline MaybeLocal<v8::String>
  NewOneByteString(const uint8_t * value, int length = -1) {
    std::vector<uint16_t> wideString;  // NOLINT(build/include_what_you_use)
    imp::widenString(&wideString, value, length);
    return v8::String::New(wideString.data(),
                           static_cast<int>(wideString.size()));
  }

  inline MaybeLocal<BoundScript> CompileScript(
      v8::Local<v8::String> s
    , const v8::ScriptOrigin& origin
  ) {
    return v8::Script::Compile(s, const_cast<v8::ScriptOrigin *>(&origin));
  }

  inline MaybeLocal<BoundScript> CompileScript(
    v8::Local<v8::String> s
  ) {
    return v8::Script::Compile(s);
  }

  inline
  MaybeLocal<v8::Value> RunScript(v8::Local<v8::Script> script) {
    return script->Run();
  }

  inline v8::Local<v8::Value> MakeCallback(
      v8::Local<v8::Object> target
    , v8::Local<v8::Function> func
    , int argc
    , v8::Local<v8::Value>* argv) {
    v8::HandleScope scope;
    return scope.Close(New(node::MakeCallback(target, func, argc, argv)));
  }

  inline v8::Local<v8::Value> MakeCallback(
      v8::Local<v8::Object> target
    , v8::Local<v8::String> symbol
    , int argc
    , v8::Local<v8::Value>* argv) {
    v8::HandleScope scope;
    return scope.Close(New(node::MakeCallback(target, symbol, argc, argv)));
  }

  inline v8::Local<v8::Value> MakeCallback(
      v8::Local<v8::Object> target
    , const char* method
    , int argc
    , v8::Local<v8::Value>* argv) {
    v8::HandleScope scope;
    return scope.Close(New(node::MakeCallback(target, method, argc, argv)));
  }

  inline void FatalException(const TryCatch& try_catch) {
    node::FatalException(const_cast<v8::TryCatch &>(try_catch.try_catch_));
  }

  inline v8::Local<v8::Value> ErrnoException(
          int errorno
       ,  const char* syscall = NULL
       ,  const char* message = NULL
       ,  const char* path = NULL) {
    return node::ErrnoException(errorno, syscall, message, path);
  }

  NAN_DEPRECATED inline v8::Local<v8::Value> NanErrnoException(
          int errorno
       ,  const char* syscall = NULL
       ,  const char* message = NULL
       ,  const char* path = NULL) {
    return ErrnoException(errorno, syscall, message, path);
  }


  template<typename T>
  inline void SetIsolateData(
      v8::Isolate *isolate
    , T *data
  ) {
      isolate->SetData(data);
  }

  template<typename T>
  inline T *GetIsolateData(
      v8::Isolate *isolate
  ) {
      return static_cast<T*>(isolate->GetData());
  }

class Utf8String {
 public:
  inline explicit Utf8String(v8::Local<v8::Value> from) :
      length_(0), str_(str_st_) {
    v8::HandleScope scope;
    if (!from.IsEmpty()) {
      v8::Local<v8::String> string = from->ToString();
      if (!string.IsEmpty()) {
        size_t len = 3 * string->Length() + 1;
        assert(len <= INT_MAX);
        if (len > sizeof (str_st_)) {
          str_ = static_cast<char*>(malloc(len));
          assert(str_ != 0);
        }
        const int flags =
            v8::String::NO_NULL_TERMINATION | imp::kReplaceInvalidUtf8;
        length_ = string->WriteUtf8(str_, static_cast<int>(len), 0, flags);
        str_[length_] = '\\0';
      }
    }
  }

  inline int length() const {
    return length_;
  }

  inline char* operator*() { return str_; }
  inline const char* operator*() const { return str_; }

  inline ~Utf8String() {
    if (str_ != str_st_) {
      free(str_);
    }
  }

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(Utf8String)

  int length_;
  char *str_;
  char str_st_[1024];
};

#endif  // NODE_MODULE_VERSION

typedef void (*FreeCallback)(char *data, void *hint);

typedef const FunctionCallbackInfo<v8::Value>& NAN_METHOD_ARGS_TYPE;
typedef void NAN_METHOD_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Value>& NAN_GETTER_ARGS_TYPE;
typedef void NAN_GETTER_RETURN_TYPE;

typedef const PropertyCallbackInfo<void>& NAN_SETTER_ARGS_TYPE;
typedef void NAN_SETTER_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Value>&
    NAN_PROPERTY_GETTER_ARGS_TYPE;
typedef void NAN_PROPERTY_GETTER_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Value>&
    NAN_PROPERTY_SETTER_ARGS_TYPE;
typedef void NAN_PROPERTY_SETTER_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Array>&
    NAN_PROPERTY_ENUMERATOR_ARGS_TYPE;
typedef void NAN_PROPERTY_ENUMERATOR_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Boolean>&
    NAN_PROPERTY_DELETER_ARGS_TYPE;
typedef void NAN_PROPERTY_DELETER_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Integer>&
    NAN_PROPERTY_QUERY_ARGS_TYPE;
typedef void NAN_PROPERTY_QUERY_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Value>& NAN_INDEX_GETTER_ARGS_TYPE;
typedef void NAN_INDEX_GETTER_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Value>& NAN_INDEX_SETTER_ARGS_TYPE;
typedef void NAN_INDEX_SETTER_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Array>&
    NAN_INDEX_ENUMERATOR_ARGS_TYPE;
typedef void NAN_INDEX_ENUMERATOR_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Boolean>&
    NAN_INDEX_DELETER_ARGS_TYPE;
typedef void NAN_INDEX_DELETER_RETURN_TYPE;

typedef const PropertyCallbackInfo<v8::Integer>&
    NAN_INDEX_QUERY_ARGS_TYPE;
typedef void NAN_INDEX_QUERY_RETURN_TYPE;

#define NAN_METHOD(name)                                                       \\
    Nan::NAN_METHOD_RETURN_TYPE name(Nan::NAN_METHOD_ARGS_TYPE info)
#define NAN_GETTER(name)                                                       \\
    Nan::NAN_GETTER_RETURN_TYPE name(                                          \\
        v8::Local<v8::String> property                                         \\
      , Nan::NAN_GETTER_ARGS_TYPE info)
#define NAN_SETTER(name)                                                       \\
    Nan::NAN_SETTER_RETURN_TYPE name(                                          \\
        v8::Local<v8::String> property                                         \\
      , v8::Local<v8::Value> value                                             \\
      , Nan::NAN_SETTER_ARGS_TYPE info)
#define NAN_PROPERTY_GETTER(name)                                              \\
    Nan::NAN_PROPERTY_GETTER_RETURN_TYPE name(                                 \\
        v8::Local<v8::String> property                                         \\
      , Nan::NAN_PROPERTY_GETTER_ARGS_TYPE info)
#define NAN_PROPERTY_SETTER(name)                                              \\
    Nan::NAN_PROPERTY_SETTER_RETURN_TYPE name(                                 \\
        v8::Local<v8::String> property                                         \\
      , v8::Local<v8::Value> value                                             \\
      , Nan::NAN_PROPERTY_SETTER_ARGS_TYPE info)
#define NAN_PROPERTY_ENUMERATOR(name)                                          \\
    Nan::NAN_PROPERTY_ENUMERATOR_RETURN_TYPE name(                             \\
        Nan::NAN_PROPERTY_ENUMERATOR_ARGS_TYPE info)
#define NAN_PROPERTY_DELETER(name)                                             \\
    Nan::NAN_PROPERTY_DELETER_RETURN_TYPE name(                                \\
        v8::Local<v8::String> property                                         \\
      , Nan::NAN_PROPERTY_DELETER_ARGS_TYPE info)
#define NAN_PROPERTY_QUERY(name)                                               \\
    Nan::NAN_PROPERTY_QUERY_RETURN_TYPE name(                                  \\
        v8::Local<v8::String> property                                         \\
      , Nan::NAN_PROPERTY_QUERY_ARGS_TYPE info)
# define NAN_INDEX_GETTER(name)                                                \\
    Nan::NAN_INDEX_GETTER_RETURN_TYPE name(                                    \\
        uint32_t index                                                         \\
      , Nan::NAN_INDEX_GETTER_ARGS_TYPE info)
#define NAN_INDEX_SETTER(name)                                                 \\
    Nan::NAN_INDEX_SETTER_RETURN_TYPE name(                                    \\
        uint32_t index                                                         \\
      , v8::Local<v8::Value> value                                             \\
      , Nan::NAN_INDEX_SETTER_ARGS_TYPE info)
#define NAN_INDEX_ENUMERATOR(name)                                             \\
    Nan::NAN_INDEX_ENUMERATOR_RETURN_TYPE                                      \\
    name(Nan::NAN_INDEX_ENUMERATOR_ARGS_TYPE info)
#define NAN_INDEX_DELETER(name)                                                \\
    Nan::NAN_INDEX_DELETER_RETURN_TYPE name(                                   \\
        uint32_t index                                                         \\
      , Nan::NAN_INDEX_DELETER_ARGS_TYPE info)
#define NAN_INDEX_QUERY(name)                                                  \\
    Nan::NAN_INDEX_QUERY_RETURN_TYPE name(                                     \\
        uint32_t index                                                         \\
      , Nan::NAN_INDEX_QUERY_ARGS_TYPE info)

class Callback {
 public:
  Callback() {}

  explicit Callback(const v8::Local<v8::Function> &fn) : handle_(fn) {}

  ~Callback() {
    handle_.Reset();
  }

  bool operator==(const Callback &other) const {
    return handle_ == other.handle_;
  }

  bool operator!=(const Callback &other) const {
    return !operator==(other);
  }

  inline
  v8::Local<v8::Function> operator*() const { return GetFunction(); }

  NAN_DEPRECATED inline v8::Local<v8::Value> operator()(
      v8::Local<v8::Object> target
    , int argc = 0
    , v8::Local<v8::Value> argv[] = 0) const {
#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
# if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    AsyncResource async("nan:Callback:operator()");
    return Call_(isolate, target, argc, argv, &async)
        .FromMaybe(v8::Local<v8::Value>());
# else
    return Call_(isolate, target, argc, argv);
# endif  // NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
#else
    return Call_(target, argc, argv);
#endif  //  NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
  }

  NAN_DEPRECATED inline v8::Local<v8::Value> operator()(
      int argc = 0
    , v8::Local<v8::Value> argv[] = 0) const {
#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
    v8::EscapableHandleScope scope(isolate);
# if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    AsyncResource async("nan:Callback:operator()");
    return scope.Escape(Call_(isolate, isolate->GetCurrentContext()->Global(),
                              argc, argv, &async)
                            .FromMaybe(v8::Local<v8::Value>()));
# else
    return scope.Escape(
        Call_(isolate, isolate->GetCurrentContext()->Global(), argc, argv));
# endif  // NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
#else
    v8::HandleScope scope;
    return scope.Close(Call_(v8::Context::GetCurrent()->Global(), argc, argv));
#endif  //  NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
  }

  inline MaybeLocal<v8::Value> operator()(
      AsyncResource* resource
    , int argc = 0
    , v8::Local<v8::Value> argv[] = 0) const {
    return this->Call(argc, argv, resource);
  }

  inline MaybeLocal<v8::Value> operator()(
      AsyncResource* resource
    , v8::Local<v8::Object> target
    , int argc = 0
    , v8::Local<v8::Value> argv[] = 0) const {
    return this->Call(target, argc, argv, resource);
  }

  // TODO(kkoopa): remove
  inline void SetFunction(const v8::Local<v8::Function> &fn) {
    Reset(fn);
  }

  inline void Reset(const v8::Local<v8::Function> &fn) {
    handle_.Reset(fn);
  }

  inline void Reset() {
    handle_.Reset();
  }

  inline v8::Local<v8::Function> GetFunction() const {
    return New(handle_);
  }

  inline bool IsEmpty() const {
    return handle_.IsEmpty();
  }

  // Deprecated: For async callbacks Use the versions that accept an
  // AsyncResource. If this callback does not correspond to an async resource,
  // that is, it is a synchronous function call on a non-empty JS stack, you
  // should Nan::Call instead.
  NAN_DEPRECATED inline v8::Local<v8::Value>
  Call(v8::Local<v8::Object> target
     , int argc
     , v8::Local<v8::Value> argv[]) const {
#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
# if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    AsyncResource async("nan:Callback:Call");
    return Call_(isolate, target, argc, argv, &async)
        .FromMaybe(v8::Local<v8::Value>());
# else
    return Call_(isolate, target, argc, argv);
# endif  // NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
#else
    return Call_(target, argc, argv);
#endif
  }

  // Deprecated: For async callbacks Use the versions that accept an
  // AsyncResource. If this callback does not correspond to an async resource,
  // that is, it is a synchronous function call on a non-empty JS stack, you
  // should Nan::Call instead.
  NAN_DEPRECATED inline v8::Local<v8::Value>
  Call(int argc, v8::Local<v8::Value> argv[]) const {
#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
    v8::EscapableHandleScope scope(isolate);
# if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    AsyncResource async("nan:Callback:Call");
    return scope.Escape(Call_(isolate, isolate->GetCurrentContext()->Global(),
                              argc, argv, &async)
                            .FromMaybe(v8::Local<v8::Value>()));
# else
    return scope.Escape(
        Call_(isolate, isolate->GetCurrentContext()->Global(), argc, argv));
# endif  // NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
#else
    v8::HandleScope scope;
    return scope.Close(Call_(v8::Context::GetCurrent()->Global(), argc, argv));
#endif
  }

  inline MaybeLocal<v8::Value>
  Call(v8::Local<v8::Object> target
     , int argc
     , v8::Local<v8::Value> argv[]
     , AsyncResource* resource) const {
#if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    v8::Isolate* isolate = v8::Isolate::GetCurrent();
    return Call_(isolate, target, argc, argv, resource);
#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
    return Call_(isolate, target, argc, argv);
#else
    return Call_(target, argc, argv);
#endif
  }

  inline MaybeLocal<v8::Value>
  Call(int argc, v8::Local<v8::Value> argv[], AsyncResource* resource) const {
#if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
    v8::Isolate* isolate = v8::Isolate::GetCurrent();
    return Call(isolate->GetCurrentContext()->Global(), argc, argv, resource);
#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
    v8::Isolate *isolate = v8::Isolate::GetCurrent();
    v8::EscapableHandleScope scope(isolate);
    return scope.Escape(
        Call_(isolate, isolate->GetCurrentContext()->Global(), argc, argv));
#else
    v8::HandleScope scope;
    return scope.Close(Call_(v8::Context::GetCurrent()->Global(), argc, argv));
#endif
  }

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(Callback)
  Persistent<v8::Function> handle_;

#if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
  MaybeLocal<v8::Value> Call_(v8::Isolate *isolate
                            , v8::Local<v8::Object> target
                            , int argc
                            , v8::Local<v8::Value> argv[]
                            , AsyncResource* resource) const {
    EscapableHandleScope scope;
    v8::Local<v8::Function> func = New(handle_);
    auto maybe = resource->runInAsyncScope(target, func, argc, argv);
    v8::Local<v8::Value> local;
    if (!maybe.ToLocal(&local)) return MaybeLocal<v8::Value>();
    return scope.Escape(local);
  }
#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
  v8::Local<v8::Value> Call_(v8::Isolate *isolate
                           , v8::Local<v8::Object> target
                           , int argc
                           , v8::Local<v8::Value> argv[]) const {
    EscapableHandleScope scope;

    v8::Local<v8::Function> callback = New(handle_);
# if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
    return scope.Escape(New(node::MakeCallback(
        isolate
      , target
      , callback
      , argc
      , argv
    )));
# else
    return scope.Escape(node::MakeCallback(
        isolate
      , target
      , callback
      , argc
      , argv
    ));
# endif
  }
#else
  v8::Local<v8::Value> Call_(v8::Local<v8::Object> target
                           , int argc
                           , v8::Local<v8::Value> argv[]) const {
    EscapableHandleScope scope;

    v8::Local<v8::Function> callback = New(handle_);
    return scope.Escape(New(node::MakeCallback(
        target
      , callback
      , argc
      , argv
    )));
  }
#endif
};

inline MaybeLocal<v8::Value> Call(
    const Nan::Callback& callback
  , v8::Local<v8::Object> recv
  , int argc
  , v8::Local<v8::Value> argv[]) {
  return Call(*callback, recv, argc, argv);
}

inline MaybeLocal<v8::Value> Call(
    const Nan::Callback& callback
  , int argc
  , v8::Local<v8::Value> argv[]) {
#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
  v8::Isolate* isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(
      Call(*callback, isolate->GetCurrentContext()->Global(), argc, argv)
          .FromMaybe(v8::Local<v8::Value>()));
#else
  EscapableHandleScope scope;
  return scope.Escape(
      Call(*callback, v8::Context::GetCurrent()->Global(), argc, argv)
          .FromMaybe(v8::Local<v8::Value>()));
#endif
}

inline MaybeLocal<v8::Value> Call(
    v8::Local<v8::String> symbol
  , v8::Local<v8::Object> recv
  , int argc
  , v8::Local<v8::Value> argv[]) {
  EscapableHandleScope scope;
  v8::Local<v8::Value> fn_v =
      Get(recv, symbol).FromMaybe(v8::Local<v8::Value>());
  if (fn_v.IsEmpty() || !fn_v->IsFunction()) return v8::Local<v8::Value>();
  v8::Local<v8::Function> fn = fn_v.As<v8::Function>();
  return scope.Escape(
      Call(fn, recv, argc, argv).FromMaybe(v8::Local<v8::Value>()));
}

inline MaybeLocal<v8::Value> Call(
    const char* method
  , v8::Local<v8::Object> recv
  , int argc
  , v8::Local<v8::Value> argv[]) {
  EscapableHandleScope scope;
  v8::Local<v8::String> method_string =
      New<v8::String>(method).ToLocalChecked();
  return scope.Escape(
      Call(method_string, recv, argc, argv).FromMaybe(v8::Local<v8::Value>()));
}

/* abstract */ class AsyncWorker {
 public:
  explicit AsyncWorker(Callback *callback_,
                       const char* resource_name = "nan:AsyncWorker")
      : callback(callback_), errmsg_(NULL) {
    request.data = this;

    HandleScope scope;
    v8::Local<v8::Object> obj = New<v8::Object>();
    persistentHandle.Reset(obj);
    async_resource = new AsyncResource(resource_name, obj);
  }

  virtual ~AsyncWorker() {
    HandleScope scope;

    if (!persistentHandle.IsEmpty())
      persistentHandle.Reset();
    delete callback;
    delete[] errmsg_;
    delete async_resource;
  }

  virtual void WorkComplete() {
    HandleScope scope;

    if (errmsg_ == NULL)
      HandleOKCallback();
    else
      HandleErrorCallback();
    delete callback;
    callback = NULL;
  }

  inline void SaveToPersistent(
      const char *key, const v8::Local<v8::Value> &value) {
    HandleScope scope;
    Set(New(persistentHandle), New(key).ToLocalChecked(), value).FromJust();
  }

  inline void SaveToPersistent(
      const v8::Local<v8::String> &key, const v8::Local<v8::Value> &value) {
    HandleScope scope;
    Set(New(persistentHandle), key, value).FromJust();
  }

  inline void SaveToPersistent(
      uint32_t index, const v8::Local<v8::Value> &value) {
    HandleScope scope;
    Set(New(persistentHandle), index, value).FromJust();
  }

  inline v8::Local<v8::Value> GetFromPersistent(const char *key) const {
    EscapableHandleScope scope;
    return scope.Escape(
        Get(New(persistentHandle), New(key).ToLocalChecked())
        .FromMaybe(v8::Local<v8::Value>()));
  }

  inline v8::Local<v8::Value>
  GetFromPersistent(const v8::Local<v8::String> &key) const {
    EscapableHandleScope scope;
    return scope.Escape(
        Get(New(persistentHandle), key)
        .FromMaybe(v8::Local<v8::Value>()));
  }

  inline v8::Local<v8::Value> GetFromPersistent(uint32_t index) const {
    EscapableHandleScope scope;
    return scope.Escape(
        Get(New(persistentHandle), index)
        .FromMaybe(v8::Local<v8::Value>()));
  }

  virtual void Execute() = 0;

  uv_work_t request;

  virtual void Destroy() {
      delete this;
  }

 protected:
  Persistent<v8::Object> persistentHandle;
  Callback *callback;
  AsyncResource *async_resource;

  virtual void HandleOKCallback() {
    HandleScope scope;

    callback->Call(0, NULL, async_resource);
  }

  virtual void HandleErrorCallback() {
    HandleScope scope;

    v8::Local<v8::Value> argv[] = {
      v8::Exception::Error(New<v8::String>(ErrorMessage()).ToLocalChecked())
    };
    callback->Call(1, argv, async_resource);
  }

  void SetErrorMessage(const char *msg) {
    delete[] errmsg_;

    size_t size = strlen(msg) + 1;
    errmsg_ = new char[size];
    memcpy(errmsg_, msg, size);
  }

  const char* ErrorMessage() const {
    return errmsg_;
  }

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(AsyncWorker)
  char *errmsg_;
};

/* abstract */ class AsyncBareProgressWorkerBase : public AsyncWorker {
 public:
  explicit AsyncBareProgressWorkerBase(
      Callback *callback_,
      const char* resource_name = "nan:AsyncBareProgressWorkerBase")
      : AsyncWorker(callback_, resource_name) {
    uv_async_init(
        GetCurrentEventLoop()
      , &async
      , AsyncProgress_
    );
    async.data = this;
  }

  virtual ~AsyncBareProgressWorkerBase() {
  }

  virtual void WorkProgress() = 0;

  virtual void Destroy() {
      uv_close(reinterpret_cast<uv_handle_t*>(&async), AsyncClose_);
  }

 private:
  inline static NAUV_WORK_CB(AsyncProgress_) {
    AsyncBareProgressWorkerBase *worker =
            static_cast<AsyncBareProgressWorkerBase*>(async->data);
    worker->WorkProgress();
  }

  inline static void AsyncClose_(uv_handle_t* handle) {
    AsyncBareProgressWorkerBase *worker =
            static_cast<AsyncBareProgressWorkerBase*>(handle->data);
    delete worker;
  }

 protected:
  uv_async_t async;
};

template<class T>
/* abstract */
class AsyncBareProgressWorker : public AsyncBareProgressWorkerBase {
 public:
  explicit AsyncBareProgressWorker(
      Callback *callback_,
      const char* resource_name = "nan:AsyncBareProgressWorker")
      : AsyncBareProgressWorkerBase(callback_, resource_name) {
    uv_mutex_init(&async_lock);
  }

  virtual ~AsyncBareProgressWorker() {
    uv_mutex_destroy(&async_lock);
  }

  class ExecutionProgress {
    friend class AsyncBareProgressWorker;
   public:
    void Signal() const {
      uv_mutex_lock(&that_->async_lock);
      uv_async_send(&that_->async);
      uv_mutex_unlock(&that_->async_lock);
    }

    void Send(const T* data, size_t count) const {
      that_->SendProgress_(data, count);
    }

   private:
    explicit ExecutionProgress(AsyncBareProgressWorker *that) : that_(that) {}
    NAN_DISALLOW_ASSIGN_COPY_MOVE(ExecutionProgress)
    AsyncBareProgressWorker* const that_;
  };

  virtual void Execute(const ExecutionProgress& progress) = 0;
  virtual void HandleProgressCallback(const T *data, size_t size) = 0;

 protected:
  uv_mutex_t async_lock;

 private:
  void Execute() /*final override*/ {
    ExecutionProgress progress(this);
    Execute(progress);
  }

  virtual void SendProgress_(const T *data, size_t count) = 0;
};

template<class T>
/* abstract */
class AsyncProgressWorkerBase : public AsyncBareProgressWorker<T> {
 public:
  explicit AsyncProgressWorkerBase(
      Callback *callback_,
      const char* resource_name = "nan:AsyncProgressWorkerBase")
      : AsyncBareProgressWorker<T>(callback_, resource_name), asyncdata_(NULL),
        asyncsize_(0) {
  }

  virtual ~AsyncProgressWorkerBase() {
    delete[] asyncdata_;
  }

  void WorkProgress() {
    uv_mutex_lock(&this->async_lock);
    T *data = asyncdata_;
    size_t size = asyncsize_;
    asyncdata_ = NULL;
    asyncsize_ = 0;
    uv_mutex_unlock(&this->async_lock);

    // Don't send progress events after we've already completed.
    if (this->callback) {
        this->HandleProgressCallback(data, size);
    }
    delete[] data;
  }

 private:
  void SendProgress_(const T *data, size_t count) {
    T *new_data = new T[count];
    std::copy(data, data + count, new_data);

    uv_mutex_lock(&this->async_lock);
    T *old_data = asyncdata_;
    asyncdata_ = new_data;
    asyncsize_ = count;
    uv_async_send(&this->async);
    uv_mutex_unlock(&this->async_lock);

    delete[] old_data;
  }

  T *asyncdata_;
  size_t asyncsize_;
};

// This ensures compatibility to the previous un-templated AsyncProgressWorker
// class definition.
typedef AsyncProgressWorkerBase<char> AsyncProgressWorker;

template<class T>
/* abstract */
class AsyncBareProgressQueueWorker : public AsyncBareProgressWorkerBase {
 public:
  explicit AsyncBareProgressQueueWorker(
      Callback *callback_,
      const char* resource_name = "nan:AsyncBareProgressQueueWorker")
      : AsyncBareProgressWorkerBase(callback_, resource_name) {
  }

  virtual ~AsyncBareProgressQueueWorker() {
  }

  class ExecutionProgress {
    friend class AsyncBareProgressQueueWorker;
   public:
    void Send(const T* data, size_t count) const {
      that_->SendProgress_(data, count);
    }

   private:
    explicit ExecutionProgress(AsyncBareProgressQueueWorker *that)
        : that_(that) {}
    NAN_DISALLOW_ASSIGN_COPY_MOVE(ExecutionProgress)
    AsyncBareProgressQueueWorker* const that_;
  };

  virtual void Execute(const ExecutionProgress& progress) = 0;
  virtual void HandleProgressCallback(const T *data, size_t size) = 0;

 private:
  void Execute() /*final override*/ {
    ExecutionProgress progress(this);
    Execute(progress);
  }

  virtual void SendProgress_(const T *data, size_t count) = 0;
};

template<class T>
/* abstract */
class AsyncProgressQueueWorker : public AsyncBareProgressQueueWorker<T> {
 public:
  explicit AsyncProgressQueueWorker(
      Callback *callback_,
      const char* resource_name = "nan:AsyncProgressQueueWorker")
      : AsyncBareProgressQueueWorker<T>(callback_) {
    uv_mutex_init(&async_lock);
  }

  virtual ~AsyncProgressQueueWorker() {
    uv_mutex_lock(&async_lock);

    while (!asyncdata_.empty()) {
      std::pair<T*, size_t> &datapair = asyncdata_.front();
      T *data = datapair.first;

      asyncdata_.pop();

      delete[] data;
    }

    uv_mutex_unlock(&async_lock);
    uv_mutex_destroy(&async_lock);
  }

  void WorkComplete() {
    WorkProgress();
    AsyncWorker::WorkComplete();
  }

  void WorkProgress() {
    uv_mutex_lock(&async_lock);

    while (!asyncdata_.empty()) {
      std::pair<T*, size_t> &datapair = asyncdata_.front();

      T *data = datapair.first;
      size_t size = datapair.second;

      asyncdata_.pop();
      uv_mutex_unlock(&async_lock);

      // Don't send progress events after we've already completed.
      if (this->callback) {
          this->HandleProgressCallback(data, size);
      }

      delete[] data;

      uv_mutex_lock(&async_lock);
    }

    uv_mutex_unlock(&async_lock);
  }

 private:
  void SendProgress_(const T *data, size_t count) {
    T *new_data = new T[count];
    std::copy(data, data + count, new_data);

    uv_mutex_lock(&async_lock);
    asyncdata_.push(std::pair<T*, size_t>(new_data, count));
    uv_mutex_unlock(&async_lock);

    uv_async_send(&this->async);
  }

  uv_mutex_t async_lock;
  std::queue<std::pair<T*, size_t> > asyncdata_;
};

inline void AsyncExecute (uv_work_t* req) {
  AsyncWorker *worker = static_cast<AsyncWorker*>(req->data);
  worker->Execute();
}

inline void AsyncExecuteComplete (uv_work_t* req) {
  AsyncWorker* worker = static_cast<AsyncWorker*>(req->data);
  worker->WorkComplete();
  worker->Destroy();
}

inline void AsyncQueueWorker (AsyncWorker* worker) {
  uv_queue_work(
      GetCurrentEventLoop()
    , &worker->request
    , AsyncExecute
    , reinterpret_cast<uv_after_work_cb>(AsyncExecuteComplete)
  );
}

namespace imp {

inline
ExternalOneByteStringResource const*
GetExternalResource(v8::Local<v8::String> str) {
#if NODE_MODULE_VERSION < ATOM_0_21_MODULE_VERSION
    return str->GetExternalAsciiStringResource();
#else
    return str->GetExternalOneByteStringResource();
#endif
}

inline
bool
IsExternal(v8::Local<v8::String> str) {
#if NODE_MODULE_VERSION < ATOM_0_21_MODULE_VERSION
    return str->IsExternalAscii();
#else
    return str->IsExternalOneByte();
#endif
}

}  // end of namespace imp

enum Encoding {ASCII, UTF8, BASE64, UCS2, BINARY, HEX, BUFFER};

#if NODE_MODULE_VERSION < NODE_0_10_MODULE_VERSION
# include "nan_string_bytes.h"  // NOLINT(build/include)
#endif

inline v8::Local<v8::Value> Encode(
    const void *buf, size_t len, enum Encoding encoding = BINARY) {
#if (NODE_MODULE_VERSION >= ATOM_0_21_MODULE_VERSION)
  v8::Isolate* isolate = v8::Isolate::GetCurrent();
  node::encoding node_enc = static_cast<node::encoding>(encoding);

  if (encoding == UCS2) {
    return node::Encode(
        isolate
      , reinterpret_cast<const uint16_t *>(buf)
      , len / 2);
  } else {
    return node::Encode(
        isolate
      , reinterpret_cast<const char *>(buf)
      , len
      , node_enc);
  }
#elif (NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION)
  return node::Encode(
      v8::Isolate::GetCurrent()
    , buf, len
    , static_cast<node::encoding>(encoding));
#else
# if NODE_MODULE_VERSION >= NODE_0_10_MODULE_VERSION
  return node::Encode(buf, len, static_cast<node::encoding>(encoding));
# else
  return imp::Encode(reinterpret_cast<const char*>(buf), len, encoding);
# endif
#endif
}

inline ssize_t DecodeBytes(
    v8::Local<v8::Value> val, enum Encoding encoding = BINARY) {
#if (NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION)
  return node::DecodeBytes(
      v8::Isolate::GetCurrent()
    , val
    , static_cast<node::encoding>(encoding));
#else
# if (NODE_MODULE_VERSION < NODE_0_10_MODULE_VERSION)
  if (encoding == BUFFER) {
    return node::DecodeBytes(val, node::BINARY);
  }
# endif
  return node::DecodeBytes(val, static_cast<node::encoding>(encoding));
#endif
}

inline ssize_t DecodeWrite(
    char *buf
  , size_t len
  , v8::Local<v8::Value> val
  , enum Encoding encoding = BINARY) {
#if (NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION)
  return node::DecodeWrite(
      v8::Isolate::GetCurrent()
    , buf
    , len
    , val
    , static_cast<node::encoding>(encoding));
#else
# if (NODE_MODULE_VERSION < NODE_0_10_MODULE_VERSION)
  if (encoding == BUFFER) {
    return node::DecodeWrite(buf, len, val, node::BINARY);
  }
# endif
  return node::DecodeWrite(
      buf
    , len
    , val
    , static_cast<node::encoding>(encoding));
#endif
}

inline void SetPrototypeTemplate(
    v8::Local<v8::FunctionTemplate> templ
  , const char *name
  , v8::Local<v8::Data> value
) {
  HandleScope scope;
  SetTemplate(templ->PrototypeTemplate(), name, value);
}

inline void SetPrototypeTemplate(
    v8::Local<v8::FunctionTemplate> templ
  , v8::Local<v8::String> name
  , v8::Local<v8::Data> value
  , v8::PropertyAttribute attributes
) {
  HandleScope scope;
  SetTemplate(templ->PrototypeTemplate(), name, value, attributes);
}

inline void SetInstanceTemplate(
    v8::Local<v8::FunctionTemplate> templ
  , const char *name
  , v8::Local<v8::Data> value
) {
  HandleScope scope;
  SetTemplate(templ->InstanceTemplate(), name, value);
}

inline void SetInstanceTemplate(
    v8::Local<v8::FunctionTemplate> templ
  , v8::Local<v8::String> name
  , v8::Local<v8::Data> value
  , v8::PropertyAttribute attributes
) {
  HandleScope scope;
  SetTemplate(templ->InstanceTemplate(), name, value, attributes);
}

namespace imp {

// Note(@agnat): Helper to distinguish different receiver types. The first
// version deals with receivers derived from v8::Template. The second version
// handles everything else. The final argument only serves as discriminator and
// is unused.
template <typename T>
inline
void
SetMethodAux(T recv,
             v8::Local<v8::String> name,
             v8::Local<v8::FunctionTemplate> tpl,
             v8::Template *) {
  recv->Set(name, tpl);
}

template <typename T>
inline
void
SetMethodAux(T recv,
             v8::Local<v8::String> name,
             v8::Local<v8::FunctionTemplate> tpl,
             ...) {
  Set(recv, name, GetFunction(tpl).ToLocalChecked());
}

}  // end of namespace imp

template <typename T, template <typename> class HandleType>
inline void SetMethod(
    HandleType<T> recv
  , const char *name
  , FunctionCallback callback
  , v8::Local<v8::Value> data = v8::Local<v8::Value>()) {
  HandleScope scope;
  v8::Local<v8::FunctionTemplate> t = New<v8::FunctionTemplate>(callback, data);
  v8::Local<v8::String> fn_name = New(name).ToLocalChecked();
  t->SetClassName(fn_name);
  // Note(@agnat): Pass an empty T* as discriminator. See note on
  // SetMethodAux(...) above
  imp::SetMethodAux(recv, fn_name, t, static_cast<T*>(0));
}

inline void SetPrototypeMethod(
    v8::Local<v8::FunctionTemplate> recv
  , const char* name
  , FunctionCallback callback
  , v8::Local<v8::Value> data = v8::Local<v8::Value>()) {
  HandleScope scope;
  v8::Local<v8::FunctionTemplate> t = New<v8::FunctionTemplate>(
      callback
    , data
    , New<v8::Signature>(recv));
  v8::Local<v8::String> fn_name = New(name).ToLocalChecked();
  recv->PrototypeTemplate()->Set(fn_name, t);
  t->SetClassName(fn_name);
}

//=== Accessors and Such =======================================================

inline void SetAccessor(
    v8::Local<v8::ObjectTemplate> tpl
  , v8::Local<v8::String> name
  , GetterCallback getter
  , SetterCallback setter = 0
  , v8::Local<v8::Value> data = v8::Local<v8::Value>()
  , v8::AccessControl settings = v8::DEFAULT
  , v8::PropertyAttribute attribute = v8::None
  , imp::Sig signature = imp::Sig()) {
  HandleScope scope;

  imp::NativeGetter getter_ =
      imp::GetterCallbackWrapper;
  imp::NativeSetter setter_ =
      setter ? imp::SetterCallbackWrapper : 0;

  v8::Local<v8::ObjectTemplate> otpl = New<v8::ObjectTemplate>();
  otpl->SetInternalFieldCount(imp::kAccessorFieldCount);
  v8::Local<v8::Object> obj = NewInstance(otpl).ToLocalChecked();

  obj->SetInternalField(
      imp::kGetterIndex
    , New<v8::External>(reinterpret_cast<void *>(getter)));

  if (setter != 0) {
    obj->SetInternalField(
        imp::kSetterIndex
      , New<v8::External>(reinterpret_cast<void *>(setter)));
  }

  if (!data.IsEmpty()) {
    obj->SetInternalField(imp::kDataIndex, data);
  }

  tpl->SetAccessor(
      name
    , getter_
    , setter_
    , obj
    , settings
    , attribute
    , signature);
}

inline bool SetAccessor(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> name
  , GetterCallback getter
  , SetterCallback setter = 0
  , v8::Local<v8::Value> data = v8::Local<v8::Value>()
  , v8::AccessControl settings = v8::DEFAULT
  , v8::PropertyAttribute attribute = v8::None) {
  HandleScope scope;

  imp::NativeGetter getter_ =
      imp::GetterCallbackWrapper;
  imp::NativeSetter setter_ =
      setter ? imp::SetterCallbackWrapper : 0;

  v8::Local<v8::ObjectTemplate> otpl = New<v8::ObjectTemplate>();
  otpl->SetInternalFieldCount(imp::kAccessorFieldCount);
  v8::Local<v8::Object> dataobj = NewInstance(otpl).ToLocalChecked();

  dataobj->SetInternalField(
      imp::kGetterIndex
    , New<v8::External>(reinterpret_cast<void *>(getter)));

  if (!data.IsEmpty()) {
    dataobj->SetInternalField(imp::kDataIndex, data);
  }

  if (setter) {
    dataobj->SetInternalField(
        imp::kSetterIndex
      , New<v8::External>(reinterpret_cast<void *>(setter)));
  }

#if (NODE_MODULE_VERSION >= NODE_6_0_MODULE_VERSION)
  return obj->SetAccessor(
      GetCurrentContext()
    , name
    , getter_
    , setter_
    , dataobj
    , settings
    , attribute).FromMaybe(false);
#else
  return obj->SetAccessor(
      name
    , getter_
    , setter_
    , dataobj
    , settings
    , attribute);
#endif
}

inline void SetNamedPropertyHandler(
    v8::Local<v8::ObjectTemplate> tpl
  , PropertyGetterCallback getter
  , PropertySetterCallback setter = 0
  , PropertyQueryCallback query = 0
  , PropertyDeleterCallback deleter = 0
  , PropertyEnumeratorCallback enumerator = 0
  , v8::Local<v8::Value> data = v8::Local<v8::Value>()) {
  HandleScope scope;

  imp::NativePropertyGetter getter_ =
      imp::PropertyGetterCallbackWrapper;
  imp::NativePropertySetter setter_ =
      setter ? imp::PropertySetterCallbackWrapper : 0;
  imp::NativePropertyQuery query_ =
      query ? imp::PropertyQueryCallbackWrapper : 0;
  imp::NativePropertyDeleter *deleter_ =
      deleter ? imp::PropertyDeleterCallbackWrapper : 0;
  imp::NativePropertyEnumerator enumerator_ =
      enumerator ? imp::PropertyEnumeratorCallbackWrapper : 0;

  v8::Local<v8::ObjectTemplate> otpl = New<v8::ObjectTemplate>();
  otpl->SetInternalFieldCount(imp::kPropertyFieldCount);
  v8::Local<v8::Object> obj = NewInstance(otpl).ToLocalChecked();
  obj->SetInternalField(
      imp::kPropertyGetterIndex
    , New<v8::External>(reinterpret_cast<void *>(getter)));

  if (setter) {
    obj->SetInternalField(
        imp::kPropertySetterIndex
      , New<v8::External>(reinterpret_cast<void *>(setter)));
  }

  if (query) {
    obj->SetInternalField(
        imp::kPropertyQueryIndex
      , New<v8::External>(reinterpret_cast<void *>(query)));
  }

  if (deleter) {
    obj->SetInternalField(
        imp::kPropertyDeleterIndex
      , New<v8::External>(reinterpret_cast<void *>(deleter)));
  }

  if (enumerator) {
    obj->SetInternalField(
        imp::kPropertyEnumeratorIndex
      , New<v8::External>(reinterpret_cast<void *>(enumerator)));
  }

  if (!data.IsEmpty()) {
    obj->SetInternalField(imp::kDataIndex, data);
  }

#if NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
  tpl->SetHandler(v8::NamedPropertyHandlerConfiguration(
      getter_, setter_, query_, deleter_, enumerator_, obj));
#else
  tpl->SetNamedPropertyHandler(
      getter_
    , setter_
    , query_
    , deleter_
    , enumerator_
    , obj);
#endif
}

inline void SetIndexedPropertyHandler(
    v8::Local<v8::ObjectTemplate> tpl
  , IndexGetterCallback getter
  , IndexSetterCallback setter = 0
  , IndexQueryCallback query = 0
  , IndexDeleterCallback deleter = 0
  , IndexEnumeratorCallback enumerator = 0
  , v8::Local<v8::Value> data = v8::Local<v8::Value>()) {
  HandleScope scope;

  imp::NativeIndexGetter getter_ =
      imp::IndexGetterCallbackWrapper;
  imp::NativeIndexSetter setter_ =
      setter ? imp::IndexSetterCallbackWrapper : 0;
  imp::NativeIndexQuery query_ =
      query ? imp::IndexQueryCallbackWrapper : 0;
  imp::NativeIndexDeleter deleter_ =
      deleter ? imp::IndexDeleterCallbackWrapper : 0;
  imp::NativeIndexEnumerator enumerator_ =
      enumerator ? imp::IndexEnumeratorCallbackWrapper : 0;

  v8::Local<v8::ObjectTemplate> otpl = New<v8::ObjectTemplate>();
  otpl->SetInternalFieldCount(imp::kIndexPropertyFieldCount);
  v8::Local<v8::Object> obj = NewInstance(otpl).ToLocalChecked();
  obj->SetInternalField(
      imp::kIndexPropertyGetterIndex
    , New<v8::External>(reinterpret_cast<void *>(getter)));

  if (setter) {
    obj->SetInternalField(
        imp::kIndexPropertySetterIndex
      , New<v8::External>(reinterpret_cast<void *>(setter)));
  }

  if (query) {
    obj->SetInternalField(
        imp::kIndexPropertyQueryIndex
      , New<v8::External>(reinterpret_cast<void *>(query)));
  }

  if (deleter) {
    obj->SetInternalField(
        imp::kIndexPropertyDeleterIndex
      , New<v8::External>(reinterpret_cast<void *>(deleter)));
  }

  if (enumerator) {
    obj->SetInternalField(
        imp::kIndexPropertyEnumeratorIndex
      , New<v8::External>(reinterpret_cast<void *>(enumerator)));
  }

  if (!data.IsEmpty()) {
    obj->SetInternalField(imp::kDataIndex, data);
  }

#if NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
  tpl->SetHandler(v8::IndexedPropertyHandlerConfiguration(
      getter_, setter_, query_, deleter_, enumerator_, obj));
#else
  tpl->SetIndexedPropertyHandler(
      getter_
    , setter_
    , query_
    , deleter_
    , enumerator_
    , obj);
#endif
}

inline void SetCallHandler(
    v8::Local<v8::FunctionTemplate> tpl
  , FunctionCallback callback
  , v8::Local<v8::Value> data = v8::Local<v8::Value>()) {
  HandleScope scope;

  v8::Local<v8::ObjectTemplate> otpl = New<v8::ObjectTemplate>();
  otpl->SetInternalFieldCount(imp::kFunctionFieldCount);
  v8::Local<v8::Object> obj = NewInstance(otpl).ToLocalChecked();

  obj->SetInternalField(
      imp::kFunctionIndex
    , New<v8::External>(reinterpret_cast<void *>(callback)));

  if (!data.IsEmpty()) {
    obj->SetInternalField(imp::kDataIndex, data);
  }

  tpl->SetCallHandler(imp::FunctionCallbackWrapper, obj);
}


inline void SetCallAsFunctionHandler(
    v8::Local<v8::ObjectTemplate> tpl,
    FunctionCallback callback,
    v8::Local<v8::Value> data = v8::Local<v8::Value>()) {
  HandleScope scope;

  v8::Local<v8::ObjectTemplate> otpl = New<v8::ObjectTemplate>();
  otpl->SetInternalFieldCount(imp::kFunctionFieldCount);
  v8::Local<v8::Object> obj = NewInstance(otpl).ToLocalChecked();

  obj->SetInternalField(
      imp::kFunctionIndex
    , New<v8::External>(reinterpret_cast<void *>(callback)));

  if (!data.IsEmpty()) {
    obj->SetInternalField(imp::kDataIndex, data);
  }

  tpl->SetCallAsFunctionHandler(imp::FunctionCallbackWrapper, obj);
}

//=== Weak Persistent Handling =================================================

#include "nan_weak.h"  // NOLINT(build/include)

//=== ObjectWrap ===============================================================

#include "nan_object_wrap.h"  // NOLINT(build/include)

//=== HiddenValue/Private ======================================================

#include "nan_private.h"  // NOLINT(build/include)

//=== Export ==================================================================

inline
void
Export(ADDON_REGISTER_FUNCTION_ARGS_TYPE target, const char *name,
    FunctionCallback f) {
  HandleScope scope;

  Set(target, New<v8::String>(name).ToLocalChecked(),
      GetFunction(New<v8::FunctionTemplate>(f)).ToLocalChecked());
}

//=== Tap Reverse Binding =====================================================

struct Tap {
  explicit Tap(v8::Local<v8::Value> t) : t_() {
    HandleScope scope;

    t_.Reset(To<v8::Object>(t).ToLocalChecked());
  }

  ~Tap() { t_.Reset(); }  // not sure if necessary

  inline void plan(int i) {
    HandleScope scope;
    v8::Local<v8::Value> arg = New(i);
    Call("plan", New(t_), 1, &arg);
  }

  inline void ok(bool isOk, const char *msg = NULL) {
    HandleScope scope;
    v8::Local<v8::Value> args[2];
    args[0] = New(isOk);
    if (msg) args[1] = New(msg).ToLocalChecked();
    Call("ok", New(t_), msg ? 2 : 1, args);
  }

  inline void pass(const char * msg = NULL) {
    HandleScope scope;
    v8::Local<v8::Value> hmsg;
    if (msg) hmsg = New(msg).ToLocalChecked();
    Call("pass", New(t_), msg ? 1 : 0, &hmsg);
  }

  inline void end() {
    HandleScope scope;
    Call("end", New(t_), 0, NULL);
  }

 private:
  Persistent<v8::Object> t_;
};

#define NAN_STRINGIZE2(x) #x
#define NAN_STRINGIZE(x) NAN_STRINGIZE2(x)
#define NAN_TEST_EXPRESSION(expression) \\
  ( expression ), __FILE__ ":" NAN_STRINGIZE(__LINE__) ": " #expression

#define NAN_EXPORT(target, function) Export(target, #function, function)

#undef TYPE_CHECK

//=== Generic Maybefication ===================================================

namespace imp {

template <typename T> struct Maybefier;

template <typename T> struct Maybefier<v8::Local<T> > {
  inline static MaybeLocal<T> convert(v8::Local<T> v) {
    return v;
  }
};

template <typename T> struct Maybefier<MaybeLocal<T> > {
  inline static MaybeLocal<T> convert(MaybeLocal<T> v) {
    return v;
  }
};

}  // end of namespace imp

template <typename T, template <typename> class MaybeMaybe>
inline MaybeLocal<T>
MakeMaybe(MaybeMaybe<T> v) {
  return imp::Maybefier<MaybeMaybe<T> >::convert(v);
}

//=== TypedArrayContents =======================================================

#include "nan_typedarray_contents.h"  // NOLINT(build/include)

//=== JSON =====================================================================

#include "nan_json.h"  // NOLINT(build/include)

}  // end of namespace Nan

#endif  // NAN_H_
`,
      "nan_callbacks.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_CALLBACKS_H_
#define NAN_CALLBACKS_H_

template<typename T> class FunctionCallbackInfo;
template<typename T> class PropertyCallbackInfo;
template<typename T> class Global;

typedef void(*FunctionCallback)(const FunctionCallbackInfo<v8::Value>&);
typedef void(*GetterCallback)
    (v8::Local<v8::String>, const PropertyCallbackInfo<v8::Value>&);
typedef void(*SetterCallback)(
    v8::Local<v8::String>,
    v8::Local<v8::Value>,
    const PropertyCallbackInfo<void>&);
typedef void(*PropertyGetterCallback)(
    v8::Local<v8::String>,
    const PropertyCallbackInfo<v8::Value>&);
typedef void(*PropertySetterCallback)(
    v8::Local<v8::String>,
    v8::Local<v8::Value>,
    const PropertyCallbackInfo<v8::Value>&);
typedef void(*PropertyEnumeratorCallback)
    (const PropertyCallbackInfo<v8::Array>&);
typedef void(*PropertyDeleterCallback)(
    v8::Local<v8::String>,
    const PropertyCallbackInfo<v8::Boolean>&);
typedef void(*PropertyQueryCallback)(
    v8::Local<v8::String>,
    const PropertyCallbackInfo<v8::Integer>&);
typedef void(*IndexGetterCallback)(
    uint32_t,
    const PropertyCallbackInfo<v8::Value>&);
typedef void(*IndexSetterCallback)(
    uint32_t,
    v8::Local<v8::Value>,
    const PropertyCallbackInfo<v8::Value>&);
typedef void(*IndexEnumeratorCallback)
    (const PropertyCallbackInfo<v8::Array>&);
typedef void(*IndexDeleterCallback)(
    uint32_t,
    const PropertyCallbackInfo<v8::Boolean>&);
typedef void(*IndexQueryCallback)(
    uint32_t,
    const PropertyCallbackInfo<v8::Integer>&);

namespace imp {
typedef v8::Local<v8::AccessorSignature> Sig;

static const int kDataIndex =                    0;

static const int kFunctionIndex =                1;
static const int kFunctionFieldCount =           2;

static const int kGetterIndex =                  1;
static const int kSetterIndex =                  2;
static const int kAccessorFieldCount =           3;

static const int kPropertyGetterIndex =          1;
static const int kPropertySetterIndex =          2;
static const int kPropertyEnumeratorIndex =      3;
static const int kPropertyDeleterIndex =         4;
static const int kPropertyQueryIndex =           5;
static const int kPropertyFieldCount =           6;

static const int kIndexPropertyGetterIndex =     1;
static const int kIndexPropertySetterIndex =     2;
static const int kIndexPropertyEnumeratorIndex = 3;
static const int kIndexPropertyDeleterIndex =    4;
static const int kIndexPropertyQueryIndex =      5;
static const int kIndexPropertyFieldCount =      6;

}  // end of namespace imp

#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
# include "nan_callbacks_12_inl.h"  // NOLINT(build/include)
#else
# include "nan_callbacks_pre_12_inl.h"  // NOLINT(build/include)
#endif

#endif  // NAN_CALLBACKS_H_
`,
      "nan_callbacks_12_inl.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_CALLBACKS_12_INL_H_
#define NAN_CALLBACKS_12_INL_H_

template<typename T>
class ReturnValue {
  v8::ReturnValue<T> value_;

 public:
  template <class S>
  explicit inline ReturnValue(const v8::ReturnValue<S> &value) :
      value_(value) {}
  template <class S>
  explicit inline ReturnValue(const ReturnValue<S>& that)
      : value_(that.value_) {
    TYPE_CHECK(T, S);
  }

  // Handle setters
  template <typename S> inline void Set(const v8::Local<S> &handle) {
    TYPE_CHECK(T, S);
    value_.Set(handle);
  }

  template <typename S> inline void Set(const Global<S> &handle) {
    TYPE_CHECK(T, S);
#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) &&                       \\
  (V8_MINOR_VERSION > 5 || (V8_MINOR_VERSION == 5 &&                           \\
  defined(V8_BUILD_NUMBER) && V8_BUILD_NUMBER >= 8))))
    value_.Set(handle);
#else
    value_.Set(*reinterpret_cast<const v8::Persistent<S>*>(&handle));
    const_cast<Global<S> &>(handle).Reset();
#endif
  }

  // Fast primitive setters
  inline void Set(bool value) {
    TYPE_CHECK(T, v8::Boolean);
    value_.Set(value);
  }

  inline void Set(double i) {
    TYPE_CHECK(T, v8::Number);
    value_.Set(i);
  }

  inline void Set(int32_t i) {
    TYPE_CHECK(T, v8::Integer);
    value_.Set(i);
  }

  inline void Set(uint32_t i) {
    TYPE_CHECK(T, v8::Integer);
    value_.Set(i);
  }

  // Fast JS primitive setters
  inline void SetNull() {
    TYPE_CHECK(T, v8::Primitive);
    value_.SetNull();
  }

  inline void SetUndefined() {
    TYPE_CHECK(T, v8::Primitive);
    value_.SetUndefined();
  }

  inline void SetEmptyString() {
    TYPE_CHECK(T, v8::String);
    value_.SetEmptyString();
  }

  // Convenience getter for isolate
  inline v8::Isolate *GetIsolate() const {
    return value_.GetIsolate();
  }

  // Pointer setter: Uncompilable to prevent inadvertent misuse.
  template<typename S>
  inline void Set(S *whatever) { TYPE_CHECK(S*, v8::Primitive); }
};

template<typename T>
class FunctionCallbackInfo {
  const v8::FunctionCallbackInfo<T> &info_;
  const v8::Local<v8::Value> data_;

 public:
  explicit inline FunctionCallbackInfo(
      const v8::FunctionCallbackInfo<T> &info
    , v8::Local<v8::Value> data) :
          info_(info)
        , data_(data) {}

  inline ReturnValue<T> GetReturnValue() const {
    return ReturnValue<T>(info_.GetReturnValue());
  }

#if NODE_MAJOR_VERSION < 10
  inline v8::Local<v8::Function> Callee() const { return info_.Callee(); }
#endif
  inline v8::Local<v8::Value> Data() const { return data_; }
  inline v8::Local<v8::Object> Holder() const { return info_.Holder(); }
  inline bool IsConstructCall() const { return info_.IsConstructCall(); }
  inline int Length() const { return info_.Length(); }
  inline v8::Local<v8::Value> operator[](int i) const { return info_[i]; }
  inline v8::Local<v8::Object> This() const { return info_.This(); }
  inline v8::Isolate *GetIsolate() const { return info_.GetIsolate(); }


 protected:
  static const int kHolderIndex = 0;
  static const int kIsolateIndex = 1;
  static const int kReturnValueDefaultValueIndex = 2;
  static const int kReturnValueIndex = 3;
  static const int kDataIndex = 4;
  static const int kCalleeIndex = 5;
  static const int kContextSaveIndex = 6;
  static const int kArgsLength = 7;

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(FunctionCallbackInfo)
};

template<typename T>
class PropertyCallbackInfo {
  const v8::PropertyCallbackInfo<T> &info_;
  const v8::Local<v8::Value> data_;

 public:
  explicit inline PropertyCallbackInfo(
      const v8::PropertyCallbackInfo<T> &info
    , const v8::Local<v8::Value> data) :
          info_(info)
        , data_(data) {}

  inline v8::Isolate* GetIsolate() const { return info_.GetIsolate(); }
  inline v8::Local<v8::Value> Data() const { return data_; }
  inline v8::Local<v8::Object> This() const { return info_.This(); }
  inline v8::Local<v8::Object> Holder() const { return info_.Holder(); }
  inline ReturnValue<T> GetReturnValue() const {
    return ReturnValue<T>(info_.GetReturnValue());
  }

 protected:
  static const int kHolderIndex = 0;
  static const int kIsolateIndex = 1;
  static const int kReturnValueDefaultValueIndex = 2;
  static const int kReturnValueIndex = 3;
  static const int kDataIndex = 4;
  static const int kThisIndex = 5;
  static const int kArgsLength = 6;

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(PropertyCallbackInfo)
};

namespace imp {
static
void FunctionCallbackWrapper(const v8::FunctionCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  FunctionCallback callback = reinterpret_cast<FunctionCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kFunctionIndex).As<v8::External>()->Value()));
  FunctionCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  callback(cbinfo);
}

typedef void (*NativeFunction)(const v8::FunctionCallbackInfo<v8::Value> &);

#if NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
static
void GetterCallbackWrapper(
    v8::Local<v8::Name> property
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  GetterCallback callback = reinterpret_cast<GetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kGetterIndex).As<v8::External>()->Value()));
  callback(property.As<v8::String>(), cbinfo);
}

typedef void (*NativeGetter)
    (v8::Local<v8::Name>, const v8::PropertyCallbackInfo<v8::Value> &);

static
void SetterCallbackWrapper(
    v8::Local<v8::Name> property
  , v8::Local<v8::Value> value
  , const v8::PropertyCallbackInfo<void> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<void>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  SetterCallback callback = reinterpret_cast<SetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kSetterIndex).As<v8::External>()->Value()));
  callback(property.As<v8::String>(), value, cbinfo);
}

typedef void (*NativeSetter)(
    v8::Local<v8::Name>
  , v8::Local<v8::Value>
  , const v8::PropertyCallbackInfo<void> &);
#else
static
void GetterCallbackWrapper(
    v8::Local<v8::String> property
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  GetterCallback callback = reinterpret_cast<GetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kGetterIndex).As<v8::External>()->Value()));
  callback(property, cbinfo);
}

typedef void (*NativeGetter)
    (v8::Local<v8::String>, const v8::PropertyCallbackInfo<v8::Value> &);

static
void SetterCallbackWrapper(
    v8::Local<v8::String> property
  , v8::Local<v8::Value> value
  , const v8::PropertyCallbackInfo<void> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<void>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  SetterCallback callback = reinterpret_cast<SetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kSetterIndex).As<v8::External>()->Value()));
  callback(property, value, cbinfo);
}

typedef void (*NativeSetter)(
    v8::Local<v8::String>
  , v8::Local<v8::Value>
  , const v8::PropertyCallbackInfo<void> &);
#endif

#if NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
static
void PropertyGetterCallbackWrapper(
    v8::Local<v8::Name> property
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyGetterCallback callback = reinterpret_cast<PropertyGetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyGetterIndex)
              .As<v8::External>()->Value()));
  callback(property.As<v8::String>(), cbinfo);
}

typedef void (*NativePropertyGetter)
    (v8::Local<v8::Name>, const v8::PropertyCallbackInfo<v8::Value> &);

static
void PropertySetterCallbackWrapper(
    v8::Local<v8::Name> property
  , v8::Local<v8::Value> value
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertySetterCallback callback = reinterpret_cast<PropertySetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertySetterIndex)
              .As<v8::External>()->Value()));
  callback(property.As<v8::String>(), value, cbinfo);
}

typedef void (*NativePropertySetter)(
    v8::Local<v8::Name>
  , v8::Local<v8::Value>
  , const v8::PropertyCallbackInfo<v8::Value> &);

static
void PropertyEnumeratorCallbackWrapper(
    const v8::PropertyCallbackInfo<v8::Array> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Array>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyEnumeratorCallback callback =
      reinterpret_cast<PropertyEnumeratorCallback>(reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyEnumeratorIndex)
              .As<v8::External>()->Value()));
  callback(cbinfo);
}

typedef void (*NativePropertyEnumerator)
    (const v8::PropertyCallbackInfo<v8::Array> &);

static
void PropertyDeleterCallbackWrapper(
    v8::Local<v8::Name> property
  , const v8::PropertyCallbackInfo<v8::Boolean> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Boolean>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyDeleterCallback callback = reinterpret_cast<PropertyDeleterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyDeleterIndex)
              .As<v8::External>()->Value()));
  callback(property.As<v8::String>(), cbinfo);
}

typedef void (NativePropertyDeleter)
    (v8::Local<v8::Name>, const v8::PropertyCallbackInfo<v8::Boolean> &);

static
void PropertyQueryCallbackWrapper(
    v8::Local<v8::Name> property
  , const v8::PropertyCallbackInfo<v8::Integer> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Integer>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyQueryCallback callback = reinterpret_cast<PropertyQueryCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyQueryIndex)
              .As<v8::External>()->Value()));
  callback(property.As<v8::String>(), cbinfo);
}

typedef void (*NativePropertyQuery)
    (v8::Local<v8::Name>, const v8::PropertyCallbackInfo<v8::Integer> &);
#else
static
void PropertyGetterCallbackWrapper(
    v8::Local<v8::String> property
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyGetterCallback callback = reinterpret_cast<PropertyGetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyGetterIndex)
              .As<v8::External>()->Value()));
  callback(property, cbinfo);
}

typedef void (*NativePropertyGetter)
    (v8::Local<v8::String>, const v8::PropertyCallbackInfo<v8::Value> &);

static
void PropertySetterCallbackWrapper(
    v8::Local<v8::String> property
  , v8::Local<v8::Value> value
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertySetterCallback callback = reinterpret_cast<PropertySetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertySetterIndex)
              .As<v8::External>()->Value()));
  callback(property, value, cbinfo);
}

typedef void (*NativePropertySetter)(
    v8::Local<v8::String>
  , v8::Local<v8::Value>
  , const v8::PropertyCallbackInfo<v8::Value> &);

static
void PropertyEnumeratorCallbackWrapper(
    const v8::PropertyCallbackInfo<v8::Array> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Array>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyEnumeratorCallback callback =
      reinterpret_cast<PropertyEnumeratorCallback>(reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyEnumeratorIndex)
              .As<v8::External>()->Value()));
  callback(cbinfo);
}

typedef void (*NativePropertyEnumerator)
    (const v8::PropertyCallbackInfo<v8::Array> &);

static
void PropertyDeleterCallbackWrapper(
    v8::Local<v8::String> property
  , const v8::PropertyCallbackInfo<v8::Boolean> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Boolean>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyDeleterCallback callback = reinterpret_cast<PropertyDeleterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyDeleterIndex)
              .As<v8::External>()->Value()));
  callback(property, cbinfo);
}

typedef void (NativePropertyDeleter)
    (v8::Local<v8::String>, const v8::PropertyCallbackInfo<v8::Boolean> &);

static
void PropertyQueryCallbackWrapper(
    v8::Local<v8::String> property
  , const v8::PropertyCallbackInfo<v8::Integer> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Integer>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyQueryCallback callback = reinterpret_cast<PropertyQueryCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyQueryIndex)
              .As<v8::External>()->Value()));
  callback(property, cbinfo);
}

typedef void (*NativePropertyQuery)
    (v8::Local<v8::String>, const v8::PropertyCallbackInfo<v8::Integer> &);
#endif

static
void IndexGetterCallbackWrapper(
    uint32_t index, const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexGetterCallback callback = reinterpret_cast<IndexGetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertyGetterIndex)
              .As<v8::External>()->Value()));
  callback(index, cbinfo);
}

typedef void (*NativeIndexGetter)
    (uint32_t, const v8::PropertyCallbackInfo<v8::Value> &);

static
void IndexSetterCallbackWrapper(
    uint32_t index
  , v8::Local<v8::Value> value
  , const v8::PropertyCallbackInfo<v8::Value> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexSetterCallback callback = reinterpret_cast<IndexSetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertySetterIndex)
              .As<v8::External>()->Value()));
  callback(index, value, cbinfo);
}

typedef void (*NativeIndexSetter)(
    uint32_t
  , v8::Local<v8::Value>
  , const v8::PropertyCallbackInfo<v8::Value> &);

static
void IndexEnumeratorCallbackWrapper(
    const v8::PropertyCallbackInfo<v8::Array> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Array>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexEnumeratorCallback callback = reinterpret_cast<IndexEnumeratorCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(
              kIndexPropertyEnumeratorIndex).As<v8::External>()->Value()));
  callback(cbinfo);
}

typedef void (*NativeIndexEnumerator)
    (const v8::PropertyCallbackInfo<v8::Array> &);

static
void IndexDeleterCallbackWrapper(
    uint32_t index, const v8::PropertyCallbackInfo<v8::Boolean> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Boolean>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexDeleterCallback callback = reinterpret_cast<IndexDeleterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertyDeleterIndex)
              .As<v8::External>()->Value()));
  callback(index, cbinfo);
}

typedef void (*NativeIndexDeleter)
    (uint32_t, const v8::PropertyCallbackInfo<v8::Boolean> &);

static
void IndexQueryCallbackWrapper(
    uint32_t index, const v8::PropertyCallbackInfo<v8::Integer> &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Integer>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexQueryCallback callback = reinterpret_cast<IndexQueryCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertyQueryIndex)
              .As<v8::External>()->Value()));
  callback(index, cbinfo);
}

typedef void (*NativeIndexQuery)
    (uint32_t, const v8::PropertyCallbackInfo<v8::Integer> &);
}  // end of namespace imp

#endif  // NAN_CALLBACKS_12_INL_H_
`,
      "nan_callbacks_pre_12_inl.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_CALLBACKS_PRE_12_INL_H_
#define NAN_CALLBACKS_PRE_12_INL_H_

namespace imp {
template<typename T> class ReturnValueImp;
}  // end of namespace imp

template<typename T>
class ReturnValue {
  v8::Isolate *isolate_;
  v8::Persistent<T> *value_;
  friend class imp::ReturnValueImp<T>;

 public:
  template <class S>
  explicit inline ReturnValue(v8::Isolate *isolate, v8::Persistent<S> *p) :
      isolate_(isolate), value_(p) {}
  template <class S>
  explicit inline ReturnValue(const ReturnValue<S>& that)
      : isolate_(that.isolate_), value_(that.value_) {
    TYPE_CHECK(T, S);
  }

  // Handle setters
  template <typename S> inline void Set(const v8::Local<S> &handle) {
    TYPE_CHECK(T, S);
    value_->Dispose();
    *value_ = v8::Persistent<T>::New(handle);
  }

  template <typename S> inline void Set(const Global<S> &handle) {
    TYPE_CHECK(T, S);
    value_->Dispose();
    *value_ = v8::Persistent<T>::New(handle.persistent);
    const_cast<Global<S> &>(handle).Reset();
  }

  // Fast primitive setters
  inline void Set(bool value) {
    v8::HandleScope scope;

    TYPE_CHECK(T, v8::Boolean);
    value_->Dispose();
    *value_ = v8::Persistent<T>::New(v8::Boolean::New(value));
  }

  inline void Set(double i) {
    v8::HandleScope scope;

    TYPE_CHECK(T, v8::Number);
    value_->Dispose();
    *value_ = v8::Persistent<T>::New(v8::Number::New(i));
  }

  inline void Set(int32_t i) {
    v8::HandleScope scope;

    TYPE_CHECK(T, v8::Integer);
    value_->Dispose();
    *value_ = v8::Persistent<T>::New(v8::Int32::New(i));
  }

  inline void Set(uint32_t i) {
    v8::HandleScope scope;

    TYPE_CHECK(T, v8::Integer);
    value_->Dispose();
    *value_ = v8::Persistent<T>::New(v8::Uint32::NewFromUnsigned(i));
  }

  // Fast JS primitive setters
  inline void SetNull() {
    v8::HandleScope scope;

    TYPE_CHECK(T, v8::Primitive);
    value_->Dispose();
    *value_ = v8::Persistent<T>::New(v8::Null());
  }

  inline void SetUndefined() {
    v8::HandleScope scope;

    TYPE_CHECK(T, v8::Primitive);
    value_->Dispose();
    *value_ = v8::Persistent<T>::New(v8::Undefined());
  }

  inline void SetEmptyString() {
    v8::HandleScope scope;

    TYPE_CHECK(T, v8::String);
    value_->Dispose();
    *value_ = v8::Persistent<T>::New(v8::String::Empty());
  }

  // Convenience getter for isolate
  inline v8::Isolate *GetIsolate() const {
    return isolate_;
  }

  // Pointer setter: Uncompilable to prevent inadvertent misuse.
  template<typename S>
  inline void Set(S *whatever) { TYPE_CHECK(S*, v8::Primitive); }
};

template<typename T>
class FunctionCallbackInfo {
  const v8::Arguments &args_;
  v8::Local<v8::Value> data_;
  ReturnValue<T> return_value_;
  v8::Persistent<T> retval_;

 public:
  explicit inline FunctionCallbackInfo(
      const v8::Arguments &args
    , v8::Local<v8::Value> data) :
          args_(args)
        , data_(data)
        , return_value_(args.GetIsolate(), &retval_)
        , retval_(v8::Persistent<T>::New(v8::Undefined())) {}

  inline ~FunctionCallbackInfo() {
    retval_.Dispose();
    retval_.Clear();
  }

  inline ReturnValue<T> GetReturnValue() const {
    return ReturnValue<T>(return_value_);
  }

  inline v8::Local<v8::Function> Callee() const { return args_.Callee(); }
  inline v8::Local<v8::Value> Data() const { return data_; }
  inline v8::Local<v8::Object> Holder() const { return args_.Holder(); }
  inline bool IsConstructCall() const { return args_.IsConstructCall(); }
  inline int Length() const { return args_.Length(); }
  inline v8::Local<v8::Value> operator[](int i) const { return args_[i]; }
  inline v8::Local<v8::Object> This() const { return args_.This(); }
  inline v8::Isolate *GetIsolate() const { return args_.GetIsolate(); }


 protected:
  static const int kHolderIndex = 0;
  static const int kIsolateIndex = 1;
  static const int kReturnValueDefaultValueIndex = 2;
  static const int kReturnValueIndex = 3;
  static const int kDataIndex = 4;
  static const int kCalleeIndex = 5;
  static const int kContextSaveIndex = 6;
  static const int kArgsLength = 7;

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(FunctionCallbackInfo)
};

template<typename T>
class PropertyCallbackInfoBase {
  const v8::AccessorInfo &info_;
  const v8::Local<v8::Value> data_;

 public:
  explicit inline PropertyCallbackInfoBase(
      const v8::AccessorInfo &info
    , const v8::Local<v8::Value> data) :
          info_(info)
        , data_(data) {}

  inline v8::Isolate* GetIsolate() const { return info_.GetIsolate(); }
  inline v8::Local<v8::Value> Data() const { return data_; }
  inline v8::Local<v8::Object> This() const { return info_.This(); }
  inline v8::Local<v8::Object> Holder() const { return info_.Holder(); }

 protected:
  static const int kHolderIndex = 0;
  static const int kIsolateIndex = 1;
  static const int kReturnValueDefaultValueIndex = 2;
  static const int kReturnValueIndex = 3;
  static const int kDataIndex = 4;
  static const int kThisIndex = 5;
  static const int kArgsLength = 6;

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(PropertyCallbackInfoBase)
};

template<typename T>
class PropertyCallbackInfo : public PropertyCallbackInfoBase<T> {
  ReturnValue<T> return_value_;
  v8::Persistent<T> retval_;

 public:
  explicit inline PropertyCallbackInfo(
      const v8::AccessorInfo &info
    , const v8::Local<v8::Value> data) :
          PropertyCallbackInfoBase<T>(info, data)
        , return_value_(info.GetIsolate(), &retval_)
        , retval_(v8::Persistent<T>::New(v8::Undefined())) {}

  inline ~PropertyCallbackInfo() {
    retval_.Dispose();
    retval_.Clear();
  }

  inline ReturnValue<T> GetReturnValue() const { return return_value_; }
};

template<>
class PropertyCallbackInfo<v8::Array> :
    public PropertyCallbackInfoBase<v8::Array> {
  ReturnValue<v8::Array> return_value_;
  v8::Persistent<v8::Array> retval_;

 public:
  explicit inline PropertyCallbackInfo(
      const v8::AccessorInfo &info
    , const v8::Local<v8::Value> data) :
          PropertyCallbackInfoBase<v8::Array>(info, data)
        , return_value_(info.GetIsolate(), &retval_)
        , retval_(v8::Persistent<v8::Array>::New(v8::Local<v8::Array>())) {}

  inline ~PropertyCallbackInfo() {
    retval_.Dispose();
    retval_.Clear();
  }

  inline ReturnValue<v8::Array> GetReturnValue() const {
    return return_value_;
  }
};

template<>
class PropertyCallbackInfo<v8::Boolean> :
    public PropertyCallbackInfoBase<v8::Boolean> {
  ReturnValue<v8::Boolean> return_value_;
  v8::Persistent<v8::Boolean> retval_;

 public:
  explicit inline PropertyCallbackInfo(
      const v8::AccessorInfo &info
    , const v8::Local<v8::Value> data) :
          PropertyCallbackInfoBase<v8::Boolean>(info, data)
        , return_value_(info.GetIsolate(), &retval_)
        , retval_(v8::Persistent<v8::Boolean>::New(v8::Local<v8::Boolean>())) {}

  inline ~PropertyCallbackInfo() {
    retval_.Dispose();
    retval_.Clear();
  }

  inline ReturnValue<v8::Boolean> GetReturnValue() const {
    return return_value_;
  }
};

template<>
class PropertyCallbackInfo<v8::Integer> :
    public PropertyCallbackInfoBase<v8::Integer> {
  ReturnValue<v8::Integer> return_value_;
  v8::Persistent<v8::Integer> retval_;

 public:
  explicit inline PropertyCallbackInfo(
      const v8::AccessorInfo &info
    , const v8::Local<v8::Value> data) :
          PropertyCallbackInfoBase<v8::Integer>(info, data)
        , return_value_(info.GetIsolate(), &retval_)
        , retval_(v8::Persistent<v8::Integer>::New(v8::Local<v8::Integer>())) {}

  inline ~PropertyCallbackInfo() {
    retval_.Dispose();
    retval_.Clear();
  }

  inline ReturnValue<v8::Integer> GetReturnValue() const {
    return return_value_;
  }
};

namespace imp {
template<typename T>
class ReturnValueImp : public ReturnValue<T> {
 public:
  explicit ReturnValueImp(ReturnValue<T> that) :
      ReturnValue<T>(that) {}
  inline v8::Handle<T> Value() {
      return *ReturnValue<T>::value_;
  }
};

static
v8::Handle<v8::Value> FunctionCallbackWrapper(const v8::Arguments &args) {
  v8::Local<v8::Object> obj = args.Data().As<v8::Object>();
  FunctionCallback callback = reinterpret_cast<FunctionCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kFunctionIndex).As<v8::External>()->Value()));
  FunctionCallbackInfo<v8::Value>
      cbinfo(args, obj->GetInternalField(kDataIndex));
  callback(cbinfo);
  return ReturnValueImp<v8::Value>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Value> (*NativeFunction)(const v8::Arguments &);

static
v8::Handle<v8::Value> GetterCallbackWrapper(
    v8::Local<v8::String> property, const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  GetterCallback callback = reinterpret_cast<GetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kGetterIndex).As<v8::External>()->Value()));
  callback(property, cbinfo);
  return ReturnValueImp<v8::Value>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Value> (*NativeGetter)
    (v8::Local<v8::String>, const v8::AccessorInfo &);

static
void SetterCallbackWrapper(
    v8::Local<v8::String> property
  , v8::Local<v8::Value> value
  , const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<void>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  SetterCallback callback = reinterpret_cast<SetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kSetterIndex).As<v8::External>()->Value()));
  callback(property, value, cbinfo);
}

typedef void (*NativeSetter)
    (v8::Local<v8::String>, v8::Local<v8::Value>, const v8::AccessorInfo &);

static
v8::Handle<v8::Value> PropertyGetterCallbackWrapper(
    v8::Local<v8::String> property, const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyGetterCallback callback = reinterpret_cast<PropertyGetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyGetterIndex)
              .As<v8::External>()->Value()));
  callback(property, cbinfo);
  return ReturnValueImp<v8::Value>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Value> (*NativePropertyGetter)
    (v8::Local<v8::String>, const v8::AccessorInfo &);

static
v8::Handle<v8::Value> PropertySetterCallbackWrapper(
    v8::Local<v8::String> property
  , v8::Local<v8::Value> value
  , const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertySetterCallback callback = reinterpret_cast<PropertySetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertySetterIndex)
              .As<v8::External>()->Value()));
  callback(property, value, cbinfo);
  return ReturnValueImp<v8::Value>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Value> (*NativePropertySetter)
    (v8::Local<v8::String>, v8::Local<v8::Value>, const v8::AccessorInfo &);

static
v8::Handle<v8::Array> PropertyEnumeratorCallbackWrapper(
    const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Array>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyEnumeratorCallback callback =
      reinterpret_cast<PropertyEnumeratorCallback>(reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyEnumeratorIndex)
              .As<v8::External>()->Value()));
  callback(cbinfo);
  return ReturnValueImp<v8::Array>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Array> (*NativePropertyEnumerator)
    (const v8::AccessorInfo &);

static
v8::Handle<v8::Boolean> PropertyDeleterCallbackWrapper(
    v8::Local<v8::String> property
  , const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Boolean>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyDeleterCallback callback = reinterpret_cast<PropertyDeleterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyDeleterIndex)
              .As<v8::External>()->Value()));
  callback(property, cbinfo);
  return ReturnValueImp<v8::Boolean>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Boolean> (NativePropertyDeleter)
    (v8::Local<v8::String>, const v8::AccessorInfo &);

static
v8::Handle<v8::Integer> PropertyQueryCallbackWrapper(
    v8::Local<v8::String> property, const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Integer>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  PropertyQueryCallback callback = reinterpret_cast<PropertyQueryCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kPropertyQueryIndex)
              .As<v8::External>()->Value()));
  callback(property, cbinfo);
  return ReturnValueImp<v8::Integer>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Integer> (*NativePropertyQuery)
    (v8::Local<v8::String>, const v8::AccessorInfo &);

static
v8::Handle<v8::Value> IndexGetterCallbackWrapper(
    uint32_t index, const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexGetterCallback callback = reinterpret_cast<IndexGetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertyGetterIndex)
              .As<v8::External>()->Value()));
  callback(index, cbinfo);
  return ReturnValueImp<v8::Value>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Value> (*NativeIndexGetter)
    (uint32_t, const v8::AccessorInfo &);

static
v8::Handle<v8::Value> IndexSetterCallbackWrapper(
    uint32_t index
  , v8::Local<v8::Value> value
  , const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Value>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexSetterCallback callback = reinterpret_cast<IndexSetterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertySetterIndex)
              .As<v8::External>()->Value()));
  callback(index, value, cbinfo);
  return ReturnValueImp<v8::Value>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Value> (*NativeIndexSetter)
    (uint32_t, v8::Local<v8::Value>, const v8::AccessorInfo &);

static
v8::Handle<v8::Array> IndexEnumeratorCallbackWrapper(
    const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Array>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexEnumeratorCallback callback = reinterpret_cast<IndexEnumeratorCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertyEnumeratorIndex)
              .As<v8::External>()->Value()));
  callback(cbinfo);
  return ReturnValueImp<v8::Array>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Array> (*NativeIndexEnumerator)
    (const v8::AccessorInfo &);

static
v8::Handle<v8::Boolean> IndexDeleterCallbackWrapper(
    uint32_t index, const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Boolean>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexDeleterCallback callback = reinterpret_cast<IndexDeleterCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertyDeleterIndex)
              .As<v8::External>()->Value()));
  callback(index, cbinfo);
  return ReturnValueImp<v8::Boolean>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Boolean> (*NativeIndexDeleter)
    (uint32_t, const v8::AccessorInfo &);

static
v8::Handle<v8::Integer> IndexQueryCallbackWrapper(
    uint32_t index, const v8::AccessorInfo &info) {
  v8::Local<v8::Object> obj = info.Data().As<v8::Object>();
  PropertyCallbackInfo<v8::Integer>
      cbinfo(info, obj->GetInternalField(kDataIndex));
  IndexQueryCallback callback = reinterpret_cast<IndexQueryCallback>(
      reinterpret_cast<intptr_t>(
          obj->GetInternalField(kIndexPropertyQueryIndex)
              .As<v8::External>()->Value()));
  callback(index, cbinfo);
  return ReturnValueImp<v8::Integer>(cbinfo.GetReturnValue()).Value();
}

typedef v8::Handle<v8::Integer> (*NativeIndexQuery)
    (uint32_t, const v8::AccessorInfo &);
}  // end of namespace imp

#endif  // NAN_CALLBACKS_PRE_12_INL_H_
`,
      "nan_converters.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_CONVERTERS_H_
#define NAN_CONVERTERS_H_

namespace imp {
template<typename T> struct ToFactoryBase {
  typedef MaybeLocal<T> return_t;
};
template<typename T> struct ValueFactoryBase { typedef Maybe<T> return_t; };

template<typename T> struct ToFactory;

template<>
struct ToFactory<v8::Function> : ToFactoryBase<v8::Function> {
  static inline return_t convert(v8::Local<v8::Value> val) {
    if (val.IsEmpty() || !val->IsFunction()) return MaybeLocal<v8::Function>();
    return MaybeLocal<v8::Function>(val.As<v8::Function>());
  }
};

#define X(TYPE)                                                                \\
    template<>                                                                 \\
    struct ToFactory<v8::TYPE> : ToFactoryBase<v8::TYPE> {                     \\
      static inline return_t convert(v8::Local<v8::Value> val);                \\
    };

X(Boolean)
X(Number)
X(String)
X(Object)
X(Integer)
X(Uint32)
X(Int32)

#undef X

#define X(TYPE)                                                                \\
    template<>                                                                 \\
    struct ToFactory<TYPE> : ValueFactoryBase<TYPE> {                          \\
      static inline return_t convert(v8::Local<v8::Value> val);                \\
    };

X(bool)
X(double)
X(int64_t)
X(uint32_t)
X(int32_t)

#undef X
}  // end of namespace imp

template<typename T>
inline
typename imp::ToFactory<T>::return_t To(v8::Local<v8::Value> val) {
  return imp::ToFactory<T>::convert(val);
}

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
# include "nan_converters_43_inl.h"
#else
# include "nan_converters_pre_43_inl.h"
#endif

#endif  // NAN_CONVERTERS_H_
`,
      "nan_converters_43_inl.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_CONVERTERS_43_INL_H_
#define NAN_CONVERTERS_43_INL_H_

#define X(TYPE)                                                                \\
imp::ToFactory<v8::TYPE>::return_t                                             \\
imp::ToFactory<v8::TYPE>::convert(v8::Local<v8::Value> val) {                  \\
  v8::Isolate *isolate = v8::Isolate::GetCurrent();                            \\
  v8::EscapableHandleScope scope(isolate);                                     \\
  return scope.Escape(                                                         \\
      val->To ## TYPE(isolate->GetCurrentContext())                            \\
          .FromMaybe(v8::Local<v8::TYPE>()));                                  \\
}

X(Number)
X(String)
X(Object)
X(Integer)
X(Uint32)
X(Int32)
// V8 <= 7.0
#if V8_MAJOR_VERSION < 7 || (V8_MAJOR_VERSION == 7 && V8_MINOR_VERSION == 0)
X(Boolean)
#else
imp::ToFactory<v8::Boolean>::return_t                                          \\
imp::ToFactory<v8::Boolean>::convert(v8::Local<v8::Value> val) {               \\
  v8::Isolate *isolate = v8::Isolate::GetCurrent();                            \\
  v8::EscapableHandleScope scope(isolate);                                     \\
  return scope.Escape(val->ToBoolean(isolate));                                \\
}
#endif

#undef X

#define X(TYPE, NAME)                                                          \\
imp::ToFactory<TYPE>::return_t                                                 \\
imp::ToFactory<TYPE>::convert(v8::Local<v8::Value> val) {                      \\
  v8::Isolate *isolate = v8::Isolate::GetCurrent();                            \\
  v8::HandleScope scope(isolate);                                              \\
  return val->NAME ## Value(isolate->GetCurrentContext());                     \\
}

X(double, Number)
X(int64_t, Integer)
X(uint32_t, Uint32)
X(int32_t, Int32)
// V8 <= 7.0
#if V8_MAJOR_VERSION < 7 || (V8_MAJOR_VERSION == 7 && V8_MINOR_VERSION == 0)
X(bool, Boolean)
#else
imp::ToFactory<bool>::return_t                                                 \\
imp::ToFactory<bool>::convert(v8::Local<v8::Value> val) {                      \\
  v8::Isolate *isolate = v8::Isolate::GetCurrent();                            \\
  v8::HandleScope scope(isolate);                                              \\
  return Just<bool>(val->BooleanValue(isolate));                               \\
}
#endif

#undef X

#endif  // NAN_CONVERTERS_43_INL_H_
`,
      "nan_converters_pre_43_inl.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_CONVERTERS_PRE_43_INL_H_
#define NAN_CONVERTERS_PRE_43_INL_H_

#define X(TYPE)                                                                \\
imp::ToFactory<v8::TYPE>::return_t                                             \\
imp::ToFactory<v8::TYPE>::convert(v8::Local<v8::Value> val) {                  \\
  return val->To ## TYPE();                                                    \\
}

X(Boolean)
X(Number)
X(String)
X(Object)
X(Integer)
X(Uint32)
X(Int32)

#undef X

#define X(TYPE, NAME)                                                          \\
imp::ToFactory<TYPE>::return_t                                                 \\
imp::ToFactory<TYPE>::convert(v8::Local<v8::Value> val) {                      \\
  return Just(val->NAME ## Value());                                           \\
}

X(bool, Boolean)
X(double, Number)
X(int64_t, Integer)
X(uint32_t, Uint32)
X(int32_t, Int32)

#undef X

#endif  // NAN_CONVERTERS_PRE_43_INL_H_
`,
      "nan_define_own_property_helper.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_DEFINE_OWN_PROPERTY_HELPER_H_
#define NAN_DEFINE_OWN_PROPERTY_HELPER_H_

namespace imp {

inline Maybe<bool> DefineOwnPropertyHelper(
    v8::PropertyAttribute current
  , v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key
  , v8::Handle<v8::Value> value
  , v8::PropertyAttribute attribs = v8::None) {
  return !(current & v8::DontDelete) ||                     // configurable OR
                  (!(current & v8::ReadOnly) &&             // writable AND
                   !((attribs ^ current) & ~v8::ReadOnly))  // same excluding RO
             ? Just<bool>(obj->ForceSet(key, value, attribs))
             : Nothing<bool>();
}

}  // end of namespace imp

#endif  // NAN_DEFINE_OWN_PROPERTY_HELPER_H_
`,
      "nan_implementation_12_inl.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_IMPLEMENTATION_12_INL_H_
#define NAN_IMPLEMENTATION_12_INL_H_
//==============================================================================
// node v0.11 implementation
//==============================================================================

namespace imp {

//=== Array ====================================================================

Factory<v8::Array>::return_t
Factory<v8::Array>::New() {
  return v8::Array::New(v8::Isolate::GetCurrent());
}

Factory<v8::Array>::return_t
Factory<v8::Array>::New(int length) {
  return v8::Array::New(v8::Isolate::GetCurrent(), length);
}

//=== Boolean ==================================================================

Factory<v8::Boolean>::return_t
Factory<v8::Boolean>::New(bool value) {
  return v8::Boolean::New(v8::Isolate::GetCurrent(), value);
}

//=== Boolean Object ===========================================================

Factory<v8::BooleanObject>::return_t
Factory<v8::BooleanObject>::New(bool value) {
#if (NODE_MODULE_VERSION >= NODE_6_0_MODULE_VERSION)
  return v8::BooleanObject::New(
    v8::Isolate::GetCurrent(), value).As<v8::BooleanObject>();
#else
  return v8::BooleanObject::New(value).As<v8::BooleanObject>();
#endif
}

//=== Context ==================================================================

Factory<v8::Context>::return_t
Factory<v8::Context>::New( v8::ExtensionConfiguration* extensions
                         , v8::Local<v8::ObjectTemplate> tmpl
                         , v8::Local<v8::Value> obj) {
  return v8::Context::New(v8::Isolate::GetCurrent(), extensions, tmpl, obj);
}

//=== Date =====================================================================

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
Factory<v8::Date>::return_t
Factory<v8::Date>::New(double value) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(v8::Date::New(isolate->GetCurrentContext(), value)
      .FromMaybe(v8::Local<v8::Value>()).As<v8::Date>());
}
#else
Factory<v8::Date>::return_t
Factory<v8::Date>::New(double value) {
  return v8::Date::New(v8::Isolate::GetCurrent(), value).As<v8::Date>();
}
#endif

//=== External =================================================================

Factory<v8::External>::return_t
Factory<v8::External>::New(void * value) {
  return v8::External::New(v8::Isolate::GetCurrent(), value);
}

//=== Function =================================================================

Factory<v8::Function>::return_t
Factory<v8::Function>::New( FunctionCallback callback
                          , v8::Local<v8::Value> data) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  v8::Local<v8::ObjectTemplate> tpl = v8::ObjectTemplate::New(isolate);
  tpl->SetInternalFieldCount(imp::kFunctionFieldCount);
  v8::Local<v8::Object> obj = NewInstance(tpl).ToLocalChecked();

  obj->SetInternalField(
      imp::kFunctionIndex
    , v8::External::New(isolate, reinterpret_cast<void *>(callback)));

  v8::Local<v8::Value> val = v8::Local<v8::Value>::New(isolate, data);

  if (!val.IsEmpty()) {
    obj->SetInternalField(imp::kDataIndex, val);
  }

#if NODE_MAJOR_VERSION >= 10
  v8::Local<v8::Context> context = isolate->GetCurrentContext();
  v8::Local<v8::Function> function =
      v8::Function::New(context, imp::FunctionCallbackWrapper, obj)
      .ToLocalChecked();
#else
  v8::Local<v8::Function> function =
      v8::Function::New(isolate, imp::FunctionCallbackWrapper, obj);
#endif

  return scope.Escape(function);
}

//=== Function Template ========================================================

Factory<v8::FunctionTemplate>::return_t
Factory<v8::FunctionTemplate>::New( FunctionCallback callback
                                  , v8::Local<v8::Value> data
                                  , v8::Local<v8::Signature> signature) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  if (callback) {
    v8::EscapableHandleScope scope(isolate);
    v8::Local<v8::ObjectTemplate> tpl = v8::ObjectTemplate::New(isolate);
    tpl->SetInternalFieldCount(imp::kFunctionFieldCount);
    v8::Local<v8::Object> obj = NewInstance(tpl).ToLocalChecked();

    obj->SetInternalField(
        imp::kFunctionIndex
      , v8::External::New(isolate, reinterpret_cast<void *>(callback)));
    v8::Local<v8::Value> val = v8::Local<v8::Value>::New(isolate, data);

    if (!val.IsEmpty()) {
      obj->SetInternalField(imp::kDataIndex, val);
    }

    return scope.Escape(v8::FunctionTemplate::New( isolate
                                    , imp::FunctionCallbackWrapper
                                    , obj
                                    , signature));
  } else {
    return v8::FunctionTemplate::New(isolate, 0, data, signature);
  }
}

//=== Number ===================================================================

Factory<v8::Number>::return_t
Factory<v8::Number>::New(double value) {
  return v8::Number::New(v8::Isolate::GetCurrent(), value);
}

//=== Number Object ============================================================

Factory<v8::NumberObject>::return_t
Factory<v8::NumberObject>::New(double value) {
  return v8::NumberObject::New( v8::Isolate::GetCurrent()
                              , value).As<v8::NumberObject>();
}

//=== Integer, Int32 and Uint32 ================================================

template <typename T>
typename IntegerFactory<T>::return_t
IntegerFactory<T>::New(int32_t value) {
  return To<T>(T::New(v8::Isolate::GetCurrent(), value));
}

template <typename T>
typename IntegerFactory<T>::return_t
IntegerFactory<T>::New(uint32_t value) {
  return To<T>(T::NewFromUnsigned(v8::Isolate::GetCurrent(), value));
}

Factory<v8::Uint32>::return_t
Factory<v8::Uint32>::New(int32_t value) {
  return To<v8::Uint32>(
      v8::Uint32::NewFromUnsigned(v8::Isolate::GetCurrent(), value));
}

Factory<v8::Uint32>::return_t
Factory<v8::Uint32>::New(uint32_t value) {
  return To<v8::Uint32>(
      v8::Uint32::NewFromUnsigned(v8::Isolate::GetCurrent(), value));
}

//=== Object ===================================================================

Factory<v8::Object>::return_t
Factory<v8::Object>::New() {
  return v8::Object::New(v8::Isolate::GetCurrent());
}

//=== Object Template ==========================================================

Factory<v8::ObjectTemplate>::return_t
Factory<v8::ObjectTemplate>::New() {
  return v8::ObjectTemplate::New(v8::Isolate::GetCurrent());
}

//=== RegExp ===================================================================

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
Factory<v8::RegExp>::return_t
Factory<v8::RegExp>::New(
    v8::Local<v8::String> pattern
  , v8::RegExp::Flags flags) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(
      v8::RegExp::New(isolate->GetCurrentContext(), pattern, flags)
          .FromMaybe(v8::Local<v8::RegExp>()));
}
#else
Factory<v8::RegExp>::return_t
Factory<v8::RegExp>::New(
    v8::Local<v8::String> pattern
  , v8::RegExp::Flags flags) {
  return v8::RegExp::New(pattern, flags);
}
#endif

//=== Script ===================================================================

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  v8::ScriptCompiler::Source src(source);
  return scope.Escape(
      v8::ScriptCompiler::Compile(isolate->GetCurrentContext(), &src)
          .FromMaybe(v8::Local<v8::Script>()));
}

Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source
                        , v8::ScriptOrigin const& origin) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  v8::ScriptCompiler::Source src(source, origin);
  return scope.Escape(
      v8::ScriptCompiler::Compile(isolate->GetCurrentContext(), &src)
          .FromMaybe(v8::Local<v8::Script>()));
}
#else
Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source) {
  v8::ScriptCompiler::Source src(source);
  return v8::ScriptCompiler::Compile(v8::Isolate::GetCurrent(), &src);
}

Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source
                        , v8::ScriptOrigin const& origin) {
  v8::ScriptCompiler::Source src(source, origin);
  return v8::ScriptCompiler::Compile(v8::Isolate::GetCurrent(), &src);
}
#endif

//=== Signature ================================================================

Factory<v8::Signature>::return_t
Factory<v8::Signature>::New(Factory<v8::Signature>::FTH receiver) {
  return v8::Signature::New(v8::Isolate::GetCurrent(), receiver);
}

//=== String ===================================================================

Factory<v8::String>::return_t
Factory<v8::String>::New() {
  return v8::String::Empty(v8::Isolate::GetCurrent());
}

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
Factory<v8::String>::return_t
Factory<v8::String>::New(const char * value, int length) {
  return v8::String::NewFromUtf8(
      v8::Isolate::GetCurrent(), value, v8::NewStringType::kNormal, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(std::string const& value) {
  assert(value.size() <= INT_MAX && "string too long");
  return v8::String::NewFromUtf8(v8::Isolate::GetCurrent(),
      value.data(), v8::NewStringType::kNormal, static_cast<int>(value.size()));
}

Factory<v8::String>::return_t
Factory<v8::String>::New(const uint16_t * value, int length) {
  return v8::String::NewFromTwoByte(v8::Isolate::GetCurrent(), value,
        v8::NewStringType::kNormal, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(v8::String::ExternalStringResource * value) {
  return v8::String::NewExternalTwoByte(v8::Isolate::GetCurrent(), value);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(ExternalOneByteStringResource * value) {
  return v8::String::NewExternalOneByte(v8::Isolate::GetCurrent(), value);
}
#else
Factory<v8::String>::return_t
Factory<v8::String>::New(const char * value, int length) {
  return v8::String::NewFromUtf8(v8::Isolate::GetCurrent(), value,
                                 v8::String::kNormalString, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(
    std::string const& value) /* NOLINT(build/include_what_you_use) */ {
  assert(value.size() <= INT_MAX && "string too long");
  return v8::String::NewFromUtf8(v8::Isolate::GetCurrent(), value.data(),
                                 v8::String::kNormalString,
                                 static_cast<int>(value.size()));
}

Factory<v8::String>::return_t
Factory<v8::String>::New(const uint16_t * value, int length) {
  return v8::String::NewFromTwoByte(v8::Isolate::GetCurrent(), value,
                                    v8::String::kNormalString, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(v8::String::ExternalStringResource * value) {
  return v8::String::NewExternal(v8::Isolate::GetCurrent(), value);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(ExternalOneByteStringResource * value) {
  return v8::String::NewExternal(v8::Isolate::GetCurrent(), value);
}
#endif

//=== String Object ============================================================

// See https://github.com/nodejs/nan/pull/811#discussion_r224594980.
// Disable the warning as there is no way around it.
// TODO(bnoordhuis) Use isolate-based version in Node.js v12.
Factory<v8::StringObject>::return_t
Factory<v8::StringObject>::New(v8::Local<v8::String> value) {
// V8 > 7.0
#if V8_MAJOR_VERSION > 7 || (V8_MAJOR_VERSION == 7 && V8_MINOR_VERSION > 0)
  return v8::StringObject::New(v8::Isolate::GetCurrent(), value)
      .As<v8::StringObject>();
#else
#ifdef _MSC_VER
#pragma warning(push)
#pragma warning(disable : 4996)
#endif
#ifdef __GNUC__
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif
  return v8::StringObject::New(value).As<v8::StringObject>();
#ifdef __GNUC__
#pragma GCC diagnostic pop
#endif
#ifdef _MSC_VER
#pragma warning(pop)
#endif
#endif
}

//=== Unbound Script ===========================================================

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
Factory<v8::UnboundScript>::return_t
Factory<v8::UnboundScript>::New(v8::Local<v8::String> source) {
  v8::ScriptCompiler::Source src(source);
  return v8::ScriptCompiler::CompileUnboundScript(
      v8::Isolate::GetCurrent(), &src);
}

Factory<v8::UnboundScript>::return_t
Factory<v8::UnboundScript>::New( v8::Local<v8::String> source
                               , v8::ScriptOrigin const& origin) {
  v8::ScriptCompiler::Source src(source, origin);
  return v8::ScriptCompiler::CompileUnboundScript(
      v8::Isolate::GetCurrent(), &src);
}
#else
Factory<v8::UnboundScript>::return_t
Factory<v8::UnboundScript>::New(v8::Local<v8::String> source) {
  v8::ScriptCompiler::Source src(source);
  return v8::ScriptCompiler::CompileUnbound(v8::Isolate::GetCurrent(), &src);
}

Factory<v8::UnboundScript>::return_t
Factory<v8::UnboundScript>::New( v8::Local<v8::String> source
                               , v8::ScriptOrigin const& origin) {
  v8::ScriptCompiler::Source src(source, origin);
  return v8::ScriptCompiler::CompileUnbound(v8::Isolate::GetCurrent(), &src);
}
#endif

}  // end of namespace imp

//=== Presistents and Handles ==================================================

#if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
template <typename T>
inline v8::Local<T> New(v8::Handle<T> h) {
  return v8::Local<T>::New(v8::Isolate::GetCurrent(), h);
}
#endif

template <typename T, typename M>
inline v8::Local<T> New(v8::Persistent<T, M> const& p) {
  return v8::Local<T>::New(v8::Isolate::GetCurrent(), p);
}

template <typename T, typename M>
inline v8::Local<T> New(Persistent<T, M> const& p) {
  return v8::Local<T>::New(v8::Isolate::GetCurrent(), p);
}

template <typename T>
inline v8::Local<T> New(Global<T> const& p) {
  return v8::Local<T>::New(v8::Isolate::GetCurrent(), p);
}

#endif  // NAN_IMPLEMENTATION_12_INL_H_
`,
      "nan_implementation_pre_12_inl.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_IMPLEMENTATION_PRE_12_INL_H_
#define NAN_IMPLEMENTATION_PRE_12_INL_H_

//==============================================================================
// node v0.10 implementation
//==============================================================================

namespace imp {

//=== Array ====================================================================

Factory<v8::Array>::return_t
Factory<v8::Array>::New() {
  return v8::Array::New();
}

Factory<v8::Array>::return_t
Factory<v8::Array>::New(int length) {
  return v8::Array::New(length);
}

//=== Boolean ==================================================================

Factory<v8::Boolean>::return_t
Factory<v8::Boolean>::New(bool value) {
  return v8::Boolean::New(value)->ToBoolean();
}

//=== Boolean Object ===========================================================

Factory<v8::BooleanObject>::return_t
Factory<v8::BooleanObject>::New(bool value) {
  return v8::BooleanObject::New(value).As<v8::BooleanObject>();
}

//=== Context ==================================================================

Factory<v8::Context>::return_t
Factory<v8::Context>::New( v8::ExtensionConfiguration* extensions
                         , v8::Local<v8::ObjectTemplate> tmpl
                         , v8::Local<v8::Value> obj) {
  v8::Persistent<v8::Context> ctx = v8::Context::New(extensions, tmpl, obj);
  v8::Local<v8::Context> lctx = v8::Local<v8::Context>::New(ctx);
  ctx.Dispose();
  return lctx;
}

//=== Date =====================================================================

Factory<v8::Date>::return_t
Factory<v8::Date>::New(double value) {
  return v8::Date::New(value).As<v8::Date>();
}

//=== External =================================================================

Factory<v8::External>::return_t
Factory<v8::External>::New(void * value) {
  return v8::External::New(value);
}

//=== Function =================================================================

Factory<v8::Function>::return_t
Factory<v8::Function>::New( FunctionCallback callback
                          , v8::Local<v8::Value> data) {
  v8::HandleScope scope;

  return scope.Close(Factory<v8::FunctionTemplate>::New(
                         callback, data, v8::Local<v8::Signature>())
                         ->GetFunction());
}


//=== FunctionTemplate =========================================================

Factory<v8::FunctionTemplate>::return_t
Factory<v8::FunctionTemplate>::New( FunctionCallback callback
                                  , v8::Local<v8::Value> data
                                  , v8::Local<v8::Signature> signature) {
  if (callback) {
    v8::HandleScope scope;

    v8::Local<v8::ObjectTemplate> tpl = v8::ObjectTemplate::New();
    tpl->SetInternalFieldCount(imp::kFunctionFieldCount);
    v8::Local<v8::Object> obj = tpl->NewInstance();

    obj->SetInternalField(
        imp::kFunctionIndex
      , v8::External::New(reinterpret_cast<void *>(callback)));

    v8::Local<v8::Value> val = v8::Local<v8::Value>::New(data);

    if (!val.IsEmpty()) {
      obj->SetInternalField(imp::kDataIndex, val);
    }

    // Note(agnat): Emulate length argument here. Unfortunately, I couldn't find
    // a way. Have at it though...
    return scope.Close(
        v8::FunctionTemplate::New(imp::FunctionCallbackWrapper
                                 , obj
                                 , signature));
  } else {
    return v8::FunctionTemplate::New(0, data, signature);
  }
}

//=== Number ===================================================================

Factory<v8::Number>::return_t
Factory<v8::Number>::New(double value) {
  return v8::Number::New(value);
}

//=== Number Object ============================================================

Factory<v8::NumberObject>::return_t
Factory<v8::NumberObject>::New(double value) {
  return v8::NumberObject::New(value).As<v8::NumberObject>();
}

//=== Integer, Int32 and Uint32 ================================================

template <typename T>
typename IntegerFactory<T>::return_t
IntegerFactory<T>::New(int32_t value) {
  return To<T>(T::New(value));
}

template <typename T>
typename IntegerFactory<T>::return_t
IntegerFactory<T>::New(uint32_t value) {
  return To<T>(T::NewFromUnsigned(value));
}

Factory<v8::Uint32>::return_t
Factory<v8::Uint32>::New(int32_t value) {
  return To<v8::Uint32>(v8::Uint32::NewFromUnsigned(value));
}

Factory<v8::Uint32>::return_t
Factory<v8::Uint32>::New(uint32_t value) {
  return To<v8::Uint32>(v8::Uint32::NewFromUnsigned(value));
}


//=== Object ===================================================================

Factory<v8::Object>::return_t
Factory<v8::Object>::New() {
  return v8::Object::New();
}

//=== Object Template ==========================================================

Factory<v8::ObjectTemplate>::return_t
Factory<v8::ObjectTemplate>::New() {
  return v8::ObjectTemplate::New();
}

//=== RegExp ===================================================================

Factory<v8::RegExp>::return_t
Factory<v8::RegExp>::New(
    v8::Local<v8::String> pattern
  , v8::RegExp::Flags flags) {
  return v8::RegExp::New(pattern, flags);
}

//=== Script ===================================================================

Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source) {
  return v8::Script::New(source);
}
Factory<v8::Script>::return_t
Factory<v8::Script>::New( v8::Local<v8::String> source
                        , v8::ScriptOrigin const& origin) {
  return v8::Script::New(source, const_cast<v8::ScriptOrigin*>(&origin));
}

//=== Signature ================================================================

Factory<v8::Signature>::return_t
Factory<v8::Signature>::New(Factory<v8::Signature>::FTH receiver) {
  return v8::Signature::New(receiver);
}

//=== String ===================================================================

Factory<v8::String>::return_t
Factory<v8::String>::New() {
  return v8::String::Empty();
}

Factory<v8::String>::return_t
Factory<v8::String>::New(const char * value, int length) {
  return v8::String::New(value, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(
    std::string const& value) /* NOLINT(build/include_what_you_use) */ {
  assert(value.size() <= INT_MAX && "string too long");
  return v8::String::New(value.data(), static_cast<int>(value.size()));
}

Factory<v8::String>::return_t
Factory<v8::String>::New(const uint16_t * value, int length) {
  return v8::String::New(value, length);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(v8::String::ExternalStringResource * value) {
  return v8::String::NewExternal(value);
}

Factory<v8::String>::return_t
Factory<v8::String>::New(v8::String::ExternalAsciiStringResource * value) {
  return v8::String::NewExternal(value);
}

//=== String Object ============================================================

Factory<v8::StringObject>::return_t
Factory<v8::StringObject>::New(v8::Local<v8::String> value) {
  return v8::StringObject::New(value).As<v8::StringObject>();
}

}  // end of namespace imp

//=== Presistents and Handles ==================================================

template <typename T>
inline v8::Local<T> New(v8::Handle<T> h) {
  return v8::Local<T>::New(h);
}

template <typename T>
inline v8::Local<T> New(v8::Persistent<T> const& p) {
  return v8::Local<T>::New(p);
}

template <typename T, typename M>
inline v8::Local<T> New(Persistent<T, M> const& p) {
  return v8::Local<T>::New(p.persistent);
}

template <typename T>
inline v8::Local<T> New(Global<T> const& p) {
  return v8::Local<T>::New(p.persistent);
}

#endif  // NAN_IMPLEMENTATION_PRE_12_INL_H_
`,
      "nan_json.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_JSON_H_
#define NAN_JSON_H_

#if NODE_MODULE_VERSION < NODE_0_12_MODULE_VERSION
#define NAN_JSON_H_NEED_PARSE 1
#else
#define NAN_JSON_H_NEED_PARSE 0
#endif  // NODE_MODULE_VERSION < NODE_0_12_MODULE_VERSION

#if NODE_MODULE_VERSION >= NODE_7_0_MODULE_VERSION
#define NAN_JSON_H_NEED_STRINGIFY 0
#else
#define NAN_JSON_H_NEED_STRINGIFY 1
#endif  // NODE_MODULE_VERSION >= NODE_7_0_MODULE_VERSION

class JSON {
 public:
  JSON() {
#if NAN_JSON_H_NEED_PARSE + NAN_JSON_H_NEED_STRINGIFY
    Nan::HandleScope scope;

    Nan::MaybeLocal<v8::Value> maybe_global_json = Nan::Get(
      Nan::GetCurrentContext()->Global(),
      Nan::New("JSON").ToLocalChecked()
    );

    assert(!maybe_global_json.IsEmpty() && "global JSON is empty");
    v8::Local<v8::Value> val_global_json = maybe_global_json.ToLocalChecked();

    assert(val_global_json->IsObject() && "global JSON is not an object");
    Nan::MaybeLocal<v8::Object> maybe_obj_global_json =
      Nan::To<v8::Object>(val_global_json);

    assert(!maybe_obj_global_json.IsEmpty() && "global JSON object is empty");
    v8::Local<v8::Object> global_json = maybe_obj_global_json.ToLocalChecked();

#if NAN_JSON_H_NEED_PARSE
    Nan::MaybeLocal<v8::Value> maybe_parse_method = Nan::Get(
      global_json, Nan::New("parse").ToLocalChecked()
    );

    assert(!maybe_parse_method.IsEmpty() && "JSON.parse is empty");
    v8::Local<v8::Value> parse_method = maybe_parse_method.ToLocalChecked();

    assert(parse_method->IsFunction() && "JSON.parse is not a function");
    parse_cb_.Reset(parse_method.As<v8::Function>());
#endif  // NAN_JSON_H_NEED_PARSE

#if NAN_JSON_H_NEED_STRINGIFY
    Nan::MaybeLocal<v8::Value> maybe_stringify_method = Nan::Get(
      global_json, Nan::New("stringify").ToLocalChecked()
    );

    assert(!maybe_stringify_method.IsEmpty() && "JSON.stringify is empty");
    v8::Local<v8::Value> stringify_method =
      maybe_stringify_method.ToLocalChecked();

    assert(
      stringify_method->IsFunction() && "JSON.stringify is not a function"
    );
    stringify_cb_.Reset(stringify_method.As<v8::Function>());
#endif  // NAN_JSON_H_NEED_STRINGIFY
#endif  // NAN_JSON_H_NEED_PARSE + NAN_JSON_H_NEED_STRINGIFY
  }

  inline
  Nan::MaybeLocal<v8::Value> Parse(v8::Local<v8::String> json_string) {
    Nan::EscapableHandleScope scope;
#if NAN_JSON_H_NEED_PARSE
    return scope.Escape(parse(json_string));
#else
    Nan::MaybeLocal<v8::Value> result;
#if NODE_MODULE_VERSION >= NODE_0_12_MODULE_VERSION && \\
    NODE_MODULE_VERSION <= IOJS_2_0_MODULE_VERSION
    result = v8::JSON::Parse(json_string);
#else
#if NODE_MODULE_VERSION > NODE_6_0_MODULE_VERSION
    v8::Local<v8::Context> context_or_isolate = Nan::GetCurrentContext();
#else
    v8::Isolate* context_or_isolate = v8::Isolate::GetCurrent();
#endif  // NODE_MODULE_VERSION > NODE_6_0_MODULE_VERSION
    result = v8::JSON::Parse(context_or_isolate, json_string);
#endif  // NODE_MODULE_VERSION >= NODE_0_12_MODULE_VERSION &&
        // NODE_MODULE_VERSION <= IOJS_2_0_MODULE_VERSION
    if (result.IsEmpty()) return v8::Local<v8::Value>();
    return scope.Escape(result.ToLocalChecked());
#endif  // NAN_JSON_H_NEED_PARSE
  }

  inline
  Nan::MaybeLocal<v8::String> Stringify(v8::Local<v8::Object> json_object) {
    Nan::EscapableHandleScope scope;
    Nan::MaybeLocal<v8::String> result =
#if NAN_JSON_H_NEED_STRINGIFY
      Nan::To<v8::String>(stringify(json_object));
#else
      v8::JSON::Stringify(Nan::GetCurrentContext(), json_object);
#endif  // NAN_JSON_H_NEED_STRINGIFY
    if (result.IsEmpty()) return v8::Local<v8::String>();
    return scope.Escape(result.ToLocalChecked());
  }

  inline
  Nan::MaybeLocal<v8::String> Stringify(v8::Local<v8::Object> json_object,
    v8::Local<v8::String> gap) {
    Nan::EscapableHandleScope scope;
    Nan::MaybeLocal<v8::String> result =
#if NAN_JSON_H_NEED_STRINGIFY
      Nan::To<v8::String>(stringify(json_object, gap));
#else
      v8::JSON::Stringify(Nan::GetCurrentContext(), json_object, gap);
#endif  // NAN_JSON_H_NEED_STRINGIFY
    if (result.IsEmpty()) return v8::Local<v8::String>();
    return scope.Escape(result.ToLocalChecked());
  }

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(JSON)
#if NAN_JSON_H_NEED_PARSE
  Nan::Callback parse_cb_;
#endif  // NAN_JSON_H_NEED_PARSE
#if NAN_JSON_H_NEED_STRINGIFY
  Nan::Callback stringify_cb_;
#endif  // NAN_JSON_H_NEED_STRINGIFY

#if NAN_JSON_H_NEED_PARSE
  inline v8::Local<v8::Value> parse(v8::Local<v8::Value> arg) {
    assert(!parse_cb_.IsEmpty() && "parse_cb_ is empty");
    AsyncResource resource("nan:JSON.parse");
    return parse_cb_.Call(1, &arg, &resource).FromMaybe(v8::Local<v8::Value>());
  }
#endif  // NAN_JSON_H_NEED_PARSE

#if NAN_JSON_H_NEED_STRINGIFY
  inline v8::Local<v8::Value> stringify(v8::Local<v8::Value> arg) {
    assert(!stringify_cb_.IsEmpty() && "stringify_cb_ is empty");
    AsyncResource resource("nan:JSON.stringify");
    return stringify_cb_.Call(1, &arg, &resource)
        .FromMaybe(v8::Local<v8::Value>());
  }

  inline v8::Local<v8::Value> stringify(v8::Local<v8::Value> arg,
    v8::Local<v8::String> gap) {
    assert(!stringify_cb_.IsEmpty() && "stringify_cb_ is empty");

    v8::Local<v8::Value> argv[] = {
      arg,
      Nan::Null(),
      gap
    };
    AsyncResource resource("nan:JSON.stringify");
    return stringify_cb_.Call(3, argv, &resource)
        .FromMaybe(v8::Local<v8::Value>());
  }
#endif  // NAN_JSON_H_NEED_STRINGIFY
};

#endif  // NAN_JSON_H_
`,
      "nan_maybe_43_inl.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_MAYBE_43_INL_H_
#define NAN_MAYBE_43_INL_H_

template<typename T>
using MaybeLocal = v8::MaybeLocal<T>;

inline
MaybeLocal<v8::String> ToDetailString(v8::Local<v8::Value> val) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(val->ToDetailString(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::String>()));
}

inline
MaybeLocal<v8::Uint32> ToArrayIndex(v8::Local<v8::Value> val) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(val->ToArrayIndex(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Uint32>()));
}

inline
Maybe<bool> Equals(v8::Local<v8::Value> a, v8::Local<v8::Value>(b)) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return a->Equals(isolate->GetCurrentContext(), b);
}

inline
MaybeLocal<v8::Object> NewInstance(v8::Local<v8::Function> h) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(h->NewInstance(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Object>()));
}

inline
MaybeLocal<v8::Object> NewInstance(
      v8::Local<v8::Function> h
    , int argc
    , v8::Local<v8::Value> argv[]) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(h->NewInstance(isolate->GetCurrentContext(), argc, argv)
                          .FromMaybe(v8::Local<v8::Object>()));
}

inline
MaybeLocal<v8::Object> NewInstance(v8::Local<v8::ObjectTemplate> h) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(h->NewInstance(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Object>()));
}


inline MaybeLocal<v8::Function> GetFunction(
    v8::Local<v8::FunctionTemplate> t) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(t->GetFunction(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Function>()));
}

inline Maybe<bool> Set(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Value> key
  , v8::Local<v8::Value> value) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Set(isolate->GetCurrentContext(), key, value);
}

inline Maybe<bool> Set(
    v8::Local<v8::Object> obj
  , uint32_t index
  , v8::Local<v8::Value> value) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Set(isolate->GetCurrentContext(), index, value);
}

#if NODE_MODULE_VERSION < NODE_4_0_MODULE_VERSION
#include "nan_define_own_property_helper.h"  // NOLINT(build/include)
#endif

inline Maybe<bool> DefineOwnProperty(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key
  , v8::Local<v8::Value> value
  , v8::PropertyAttribute attribs = v8::None) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
#if NODE_MODULE_VERSION >= NODE_4_0_MODULE_VERSION
  return obj->DefineOwnProperty(isolate->GetCurrentContext(), key, value,
                                attribs);
#else
  Maybe<v8::PropertyAttribute> maybeCurrent =
      obj->GetPropertyAttributes(isolate->GetCurrentContext(), key);
  if (maybeCurrent.IsNothing()) {
    return Nothing<bool>();
  }
  v8::PropertyAttribute current = maybeCurrent.FromJust();
  return imp::DefineOwnPropertyHelper(current, obj, key, value, attribs);
#endif
}

NAN_DEPRECATED inline Maybe<bool> ForceSet(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Value> key
  , v8::Local<v8::Value> value
  , v8::PropertyAttribute attribs = v8::None) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
#if NODE_MODULE_VERSION >= NODE_9_0_MODULE_VERSION
  return key->IsName()
             ? obj->DefineOwnProperty(isolate->GetCurrentContext(),
                                      key.As<v8::Name>(), value, attribs)
             : Nothing<bool>();
#else
  return obj->ForceSet(isolate->GetCurrentContext(), key, value, attribs);
#endif
}

inline MaybeLocal<v8::Value> Get(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Value> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->Get(isolate->GetCurrentContext(), key)
                          .FromMaybe(v8::Local<v8::Value>()));
}

inline
MaybeLocal<v8::Value> Get(v8::Local<v8::Object> obj, uint32_t index) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->Get(isolate->GetCurrentContext(), index)
                          .FromMaybe(v8::Local<v8::Value>()));
}

inline v8::PropertyAttribute GetPropertyAttributes(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Value> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->GetPropertyAttributes(isolate->GetCurrentContext(), key)
      .FromJust();
}

inline Maybe<bool> Has(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Has(isolate->GetCurrentContext(), key);
}

inline Maybe<bool> Has(v8::Local<v8::Object> obj, uint32_t index) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Has(isolate->GetCurrentContext(), index);
}

inline Maybe<bool> Delete(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Delete(isolate->GetCurrentContext(), key);
}

inline
Maybe<bool> Delete(v8::Local<v8::Object> obj, uint32_t index) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->Delete(isolate->GetCurrentContext(), index);
}

inline
MaybeLocal<v8::Array> GetPropertyNames(v8::Local<v8::Object> obj) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->GetPropertyNames(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Array>()));
}

inline
MaybeLocal<v8::Array> GetOwnPropertyNames(v8::Local<v8::Object> obj) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->GetOwnPropertyNames(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::Array>()));
}

inline Maybe<bool> SetPrototype(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Value> prototype) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->SetPrototype(isolate->GetCurrentContext(), prototype);
}

inline MaybeLocal<v8::String> ObjectProtoToString(
    v8::Local<v8::Object> obj) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->ObjectProtoToString(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::String>()));
}

inline Maybe<bool> HasOwnProperty(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->HasOwnProperty(isolate->GetCurrentContext(), key);
}

inline Maybe<bool> HasRealNamedProperty(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->HasRealNamedProperty(isolate->GetCurrentContext(), key);
}

inline Maybe<bool> HasRealIndexedProperty(
    v8::Local<v8::Object> obj
  , uint32_t index) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->HasRealIndexedProperty(isolate->GetCurrentContext(), index);
}

inline Maybe<bool> HasRealNamedCallbackProperty(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return obj->HasRealNamedCallbackProperty(isolate->GetCurrentContext(), key);
}

inline MaybeLocal<v8::Value> GetRealNamedPropertyInPrototypeChain(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(obj->GetRealNamedPropertyInPrototypeChain(
                             isolate->GetCurrentContext(), key)
                          .FromMaybe(v8::Local<v8::Value>()));
}

inline MaybeLocal<v8::Value> GetRealNamedProperty(
    v8::Local<v8::Object> obj
  , v8::Local<v8::String> key) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(
      obj->GetRealNamedProperty(isolate->GetCurrentContext(), key)
          .FromMaybe(v8::Local<v8::Value>()));
}

inline MaybeLocal<v8::Value> CallAsFunction(
    v8::Local<v8::Object> obj
  , v8::Local<v8::Object> recv
  , int argc
  , v8::Local<v8::Value> argv[]) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(
      obj->CallAsFunction(isolate->GetCurrentContext(), recv, argc, argv)
          .FromMaybe(v8::Local<v8::Value>()));
}

inline MaybeLocal<v8::Value> CallAsConstructor(
    v8::Local<v8::Object> obj
  , int argc, v8::Local<v8::Value> argv[]) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(
      obj->CallAsConstructor(isolate->GetCurrentContext(), argc, argv)
          .FromMaybe(v8::Local<v8::Value>()));
}

inline
MaybeLocal<v8::String> GetSourceLine(v8::Local<v8::Message> msg) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(msg->GetSourceLine(isolate->GetCurrentContext())
                          .FromMaybe(v8::Local<v8::String>()));
}

inline Maybe<int> GetLineNumber(v8::Local<v8::Message> msg) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return msg->GetLineNumber(isolate->GetCurrentContext());
}

inline Maybe<int> GetStartColumn(v8::Local<v8::Message> msg) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return msg->GetStartColumn(isolate->GetCurrentContext());
}

inline Maybe<int> GetEndColumn(v8::Local<v8::Message> msg) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::HandleScope scope(isolate);
  return msg->GetEndColumn(isolate->GetCurrentContext());
}

inline MaybeLocal<v8::Object> CloneElementAt(
    v8::Local<v8::Array> array
  , uint32_t index) {
#if (NODE_MODULE_VERSION >= NODE_6_0_MODULE_VERSION)
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  v8::Local<v8::Context> context = isolate->GetCurrentContext();
  v8::Local<v8::Value> elem;
  v8::Local<v8::Object> obj;
  if (!array->Get(context, index).ToLocal(&elem)) {
    return scope.Escape(obj);
  }
  if (!elem->ToObject(context).ToLocal(&obj)) {
    return scope.Escape(v8::Local<v8::Object>());
  }
  return scope.Escape(obj->Clone());
#else
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(array->CloneElementAt(isolate->GetCurrentContext(), index)
                          .FromMaybe(v8::Local<v8::Object>()));
#endif
}

inline MaybeLocal<v8::Value> Call(
    v8::Local<v8::Function> fun
  , v8::Local<v8::Object> recv
  , int argc
  , v8::Local<v8::Value> argv[]) {
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  return scope.Escape(fun->Call(isolate->GetCurrentContext(), recv, argc, argv)
                          .FromMaybe(v8::Local<v8::Value>()));
}

#endif  // NAN_MAYBE_43_INL_H_
`,
      "nan_maybe_pre_43_inl.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_MAYBE_PRE_43_INL_H_
#define NAN_MAYBE_PRE_43_INL_H_

template<typename T>
class MaybeLocal {
 public:
  inline MaybeLocal() : val_(v8::Local<T>()) {}

  template<typename S>
# if NODE_MODULE_VERSION >= NODE_0_12_MODULE_VERSION
  inline
  MaybeLocal(v8::Local<S> that) : val_(that) {}  // NOLINT(runtime/explicit)
# else
  inline
  MaybeLocal(v8::Local<S> that) :  // NOLINT(runtime/explicit)
      val_(*reinterpret_cast<v8::Local<T>*>(&that)) {}
# endif

  inline bool IsEmpty() const { return val_.IsEmpty(); }

  template<typename S>
  inline bool ToLocal(v8::Local<S> *out) const {
    *out = val_;
    return !IsEmpty();
  }

  inline v8::Local<T> ToLocalChecked() const {
#if defined(V8_ENABLE_CHECKS)
    assert(!IsEmpty() && "ToLocalChecked is Empty");
#endif  // V8_ENABLE_CHECKS
    return val_;
  }

  template<typename S>
  inline v8::Local<S> FromMaybe(v8::Local<S> default_value) const {
    return IsEmpty() ? default_value : v8::Local<S>(val_);
  }

 private:
  v8::Local<T> val_;
};

inline
MaybeLocal<v8::String> ToDetailString(v8::Handle<v8::Value> val) {
  return MaybeLocal<v8::String>(val->ToDetailString());
}

inline
MaybeLocal<v8::Uint32> ToArrayIndex(v8::Handle<v8::Value> val) {
  return MaybeLocal<v8::Uint32>(val->ToArrayIndex());
}

inline
Maybe<bool> Equals(v8::Handle<v8::Value> a, v8::Handle<v8::Value>(b)) {
  return Just<bool>(a->Equals(b));
}

inline
MaybeLocal<v8::Object> NewInstance(v8::Handle<v8::Function> h) {
  return MaybeLocal<v8::Object>(h->NewInstance());
}

inline
MaybeLocal<v8::Object> NewInstance(
      v8::Local<v8::Function> h
    , int argc
    , v8::Local<v8::Value> argv[]) {
  return MaybeLocal<v8::Object>(h->NewInstance(argc, argv));
}

inline
MaybeLocal<v8::Object> NewInstance(v8::Handle<v8::ObjectTemplate> h) {
  return MaybeLocal<v8::Object>(h->NewInstance());
}

inline
MaybeLocal<v8::Function> GetFunction(v8::Handle<v8::FunctionTemplate> t) {
  return MaybeLocal<v8::Function>(t->GetFunction());
}

inline Maybe<bool> Set(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Value> key
  , v8::Handle<v8::Value> value) {
  return Just<bool>(obj->Set(key, value));
}

inline Maybe<bool> Set(
    v8::Handle<v8::Object> obj
  , uint32_t index
  , v8::Handle<v8::Value> value) {
  return Just<bool>(obj->Set(index, value));
}

#include "nan_define_own_property_helper.h"  // NOLINT(build/include)

inline Maybe<bool> DefineOwnProperty(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key
  , v8::Handle<v8::Value> value
  , v8::PropertyAttribute attribs = v8::None) {
  v8::PropertyAttribute current = obj->GetPropertyAttributes(key);
  return imp::DefineOwnPropertyHelper(current, obj, key, value, attribs);
}

NAN_DEPRECATED inline Maybe<bool> ForceSet(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Value> key
  , v8::Handle<v8::Value> value
  , v8::PropertyAttribute attribs = v8::None) {
  return Just<bool>(obj->ForceSet(key, value, attribs));
}

inline MaybeLocal<v8::Value> Get(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Value> key) {
  return MaybeLocal<v8::Value>(obj->Get(key));
}

inline MaybeLocal<v8::Value> Get(
    v8::Handle<v8::Object> obj
  , uint32_t index) {
  return MaybeLocal<v8::Value>(obj->Get(index));
}

inline Maybe<v8::PropertyAttribute> GetPropertyAttributes(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Value> key) {
  return Just<v8::PropertyAttribute>(obj->GetPropertyAttributes(key));
}

inline Maybe<bool> Has(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return Just<bool>(obj->Has(key));
}

inline Maybe<bool> Has(
    v8::Handle<v8::Object> obj
  , uint32_t index) {
  return Just<bool>(obj->Has(index));
}

inline Maybe<bool> Delete(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return Just<bool>(obj->Delete(key));
}

inline Maybe<bool> Delete(
    v8::Handle<v8::Object> obj
  , uint32_t index) {
  return Just<bool>(obj->Delete(index));
}

inline
MaybeLocal<v8::Array> GetPropertyNames(v8::Handle<v8::Object> obj) {
  return MaybeLocal<v8::Array>(obj->GetPropertyNames());
}

inline
MaybeLocal<v8::Array> GetOwnPropertyNames(v8::Handle<v8::Object> obj) {
  return MaybeLocal<v8::Array>(obj->GetOwnPropertyNames());
}

inline Maybe<bool> SetPrototype(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Value> prototype) {
  return Just<bool>(obj->SetPrototype(prototype));
}

inline MaybeLocal<v8::String> ObjectProtoToString(
    v8::Handle<v8::Object> obj) {
  return MaybeLocal<v8::String>(obj->ObjectProtoToString());
}

inline Maybe<bool> HasOwnProperty(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return Just<bool>(obj->HasOwnProperty(key));
}

inline Maybe<bool> HasRealNamedProperty(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return Just<bool>(obj->HasRealNamedProperty(key));
}

inline Maybe<bool> HasRealIndexedProperty(
    v8::Handle<v8::Object> obj
  , uint32_t index) {
  return Just<bool>(obj->HasRealIndexedProperty(index));
}

inline Maybe<bool> HasRealNamedCallbackProperty(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return Just<bool>(obj->HasRealNamedCallbackProperty(key));
}

inline MaybeLocal<v8::Value> GetRealNamedPropertyInPrototypeChain(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return MaybeLocal<v8::Value>(
      obj->GetRealNamedPropertyInPrototypeChain(key));
}

inline MaybeLocal<v8::Value> GetRealNamedProperty(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::String> key) {
  return MaybeLocal<v8::Value>(obj->GetRealNamedProperty(key));
}

inline MaybeLocal<v8::Value> CallAsFunction(
    v8::Handle<v8::Object> obj
  , v8::Handle<v8::Object> recv
  , int argc
  , v8::Handle<v8::Value> argv[]) {
  return MaybeLocal<v8::Value>(obj->CallAsFunction(recv, argc, argv));
}

inline MaybeLocal<v8::Value> CallAsConstructor(
    v8::Handle<v8::Object> obj
  , int argc
  , v8::Local<v8::Value> argv[]) {
  return MaybeLocal<v8::Value>(obj->CallAsConstructor(argc, argv));
}

inline
MaybeLocal<v8::String> GetSourceLine(v8::Handle<v8::Message> msg) {
  return MaybeLocal<v8::String>(msg->GetSourceLine());
}

inline Maybe<int> GetLineNumber(v8::Handle<v8::Message> msg) {
  return Just<int>(msg->GetLineNumber());
}

inline Maybe<int> GetStartColumn(v8::Handle<v8::Message> msg) {
  return Just<int>(msg->GetStartColumn());
}

inline Maybe<int> GetEndColumn(v8::Handle<v8::Message> msg) {
  return Just<int>(msg->GetEndColumn());
}

inline MaybeLocal<v8::Object> CloneElementAt(
    v8::Handle<v8::Array> array
  , uint32_t index) {
  return MaybeLocal<v8::Object>(array->CloneElementAt(index));
}

inline MaybeLocal<v8::Value> Call(
    v8::Local<v8::Function> fun
  , v8::Local<v8::Object> recv
  , int argc
  , v8::Local<v8::Value> argv[]) {
  return MaybeLocal<v8::Value>(fun->Call(recv, argc, argv));
}

#endif  // NAN_MAYBE_PRE_43_INL_H_
`,
      "nan_new.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_NEW_H_
#define NAN_NEW_H_

namespace imp {  // scnr

// TODO(agnat): Generalize
template <typename T> v8::Local<T> To(v8::Local<v8::Integer> i);

template <>
inline
v8::Local<v8::Integer>
To<v8::Integer>(v8::Local<v8::Integer> i) {
  return Nan::To<v8::Integer>(i).ToLocalChecked();
}

template <>
inline
v8::Local<v8::Int32>
To<v8::Int32>(v8::Local<v8::Integer> i) {
  return Nan::To<v8::Int32>(i).ToLocalChecked();
}

template <>
inline
v8::Local<v8::Uint32>
To<v8::Uint32>(v8::Local<v8::Integer> i) {
  return Nan::To<v8::Uint32>(i).ToLocalChecked();
}

template <typename T> struct FactoryBase {
  typedef v8::Local<T> return_t;
};

template <typename T> struct MaybeFactoryBase {
  typedef MaybeLocal<T> return_t;
};

template <typename T> struct Factory;

template <>
struct Factory<v8::Array> : FactoryBase<v8::Array> {
  static inline return_t New();
  static inline return_t New(int length);
};

template <>
struct Factory<v8::Boolean> : FactoryBase<v8::Boolean> {
  static inline return_t New(bool value);
};

template <>
struct Factory<v8::BooleanObject> : FactoryBase<v8::BooleanObject> {
  static inline return_t New(bool value);
};

template <>
struct Factory<v8::Context> : FactoryBase<v8::Context> {
  static inline
  return_t
  New( v8::ExtensionConfiguration* extensions = NULL
     , v8::Local<v8::ObjectTemplate> tmpl = v8::Local<v8::ObjectTemplate>()
     , v8::Local<v8::Value> obj = v8::Local<v8::Value>());
};

template <>
struct Factory<v8::Date> : MaybeFactoryBase<v8::Date> {
  static inline return_t New(double value);
};

template <>
struct Factory<v8::External> : FactoryBase<v8::External> {
  static inline return_t New(void *value);
};

template <>
struct Factory<v8::Function> : FactoryBase<v8::Function> {
  static inline
  return_t
  New( FunctionCallback callback
     , v8::Local<v8::Value> data = v8::Local<v8::Value>());
};

template <>
struct Factory<v8::FunctionTemplate> : FactoryBase<v8::FunctionTemplate> {
  static inline
  return_t
  New( FunctionCallback callback = NULL
     , v8::Local<v8::Value> data = v8::Local<v8::Value>()
     , v8::Local<v8::Signature> signature = v8::Local<v8::Signature>());
};

template <>
struct Factory<v8::Number> : FactoryBase<v8::Number> {
  static inline return_t New(double value);
};

template <>
struct Factory<v8::NumberObject> : FactoryBase<v8::NumberObject> {
  static inline return_t New(double value);
};

template <typename T>
struct IntegerFactory : FactoryBase<T> {
  typedef typename FactoryBase<T>::return_t return_t;
  static inline return_t New(int32_t value);
  static inline return_t New(uint32_t value);
};

template <>
struct Factory<v8::Integer> : IntegerFactory<v8::Integer> {};

template <>
struct Factory<v8::Int32> : IntegerFactory<v8::Int32> {};

template <>
struct Factory<v8::Uint32> : FactoryBase<v8::Uint32> {
  static inline return_t New(int32_t value);
  static inline return_t New(uint32_t value);
};

template <>
struct Factory<v8::Object> : FactoryBase<v8::Object> {
  static inline return_t New();
};

template <>
struct Factory<v8::ObjectTemplate> : FactoryBase<v8::ObjectTemplate> {
  static inline return_t New();
};

template <>
struct Factory<v8::RegExp> : MaybeFactoryBase<v8::RegExp> {
  static inline return_t New(
      v8::Local<v8::String> pattern, v8::RegExp::Flags flags);
};

template <>
struct Factory<v8::Script> : MaybeFactoryBase<v8::Script> {
  static inline return_t New( v8::Local<v8::String> source);
  static inline return_t New( v8::Local<v8::String> source
                            , v8::ScriptOrigin const& origin);
};

template <>
struct Factory<v8::Signature> : FactoryBase<v8::Signature> {
  typedef v8::Local<v8::FunctionTemplate> FTH;
  static inline return_t New(FTH receiver = FTH());
};

template <>
struct Factory<v8::String> : MaybeFactoryBase<v8::String> {
  static inline return_t New();
  static inline return_t New(const char *value, int length = -1);
  static inline return_t New(const uint16_t *value, int length = -1);
  static inline return_t New(std::string const& value);

  static inline return_t New(v8::String::ExternalStringResource * value);
  static inline return_t New(ExternalOneByteStringResource * value);
};

template <>
struct Factory<v8::StringObject> : FactoryBase<v8::StringObject> {
  static inline return_t New(v8::Local<v8::String> value);
};

}  // end of namespace imp

#if (NODE_MODULE_VERSION >= 12)

namespace imp {

template <>
struct Factory<v8::UnboundScript> : MaybeFactoryBase<v8::UnboundScript> {
  static inline return_t New( v8::Local<v8::String> source);
  static inline return_t New( v8::Local<v8::String> source
                            , v8::ScriptOrigin const& origin);
};

}  // end of namespace imp

# include "nan_implementation_12_inl.h"

#else  // NODE_MODULE_VERSION >= 12

# include "nan_implementation_pre_12_inl.h"

#endif

//=== API ======================================================================

template <typename T>
typename imp::Factory<T>::return_t
New() {
  return imp::Factory<T>::New();
}

template <typename T, typename A0>
typename imp::Factory<T>::return_t
New(A0 arg0) {
  return imp::Factory<T>::New(arg0);
}

template <typename T, typename A0, typename A1>
typename imp::Factory<T>::return_t
New(A0 arg0, A1 arg1) {
  return imp::Factory<T>::New(arg0, arg1);
}

template <typename T, typename A0, typename A1, typename A2>
typename imp::Factory<T>::return_t
New(A0 arg0, A1 arg1, A2 arg2) {
  return imp::Factory<T>::New(arg0, arg1, arg2);
}

template <typename T, typename A0, typename A1, typename A2, typename A3>
typename imp::Factory<T>::return_t
New(A0 arg0, A1 arg1, A2 arg2, A3 arg3) {
  return imp::Factory<T>::New(arg0, arg1, arg2, arg3);
}

// Note(agnat): When passing overloaded function pointers to template functions
// as generic arguments the compiler needs help in picking the right overload.
// These two functions handle New<Function> and New<FunctionTemplate> with
// all argument variations.

// v8::Function and v8::FunctionTemplate with one or two arguments
template <typename T>
typename imp::Factory<T>::return_t
New( FunctionCallback callback
      , v8::Local<v8::Value> data = v8::Local<v8::Value>()) {
    return imp::Factory<T>::New(callback, data);
}

// v8::Function and v8::FunctionTemplate with three arguments
template <typename T, typename A2>
typename imp::Factory<T>::return_t
New( FunctionCallback callback
      , v8::Local<v8::Value> data = v8::Local<v8::Value>()
      , A2 a2 = A2()) {
    return imp::Factory<T>::New(callback, data, a2);
}

// Convenience

#if NODE_MODULE_VERSION < IOJS_3_0_MODULE_VERSION
template <typename T> inline v8::Local<T> New(v8::Handle<T> h);
#endif

#if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
template <typename T, typename M>
    inline v8::Local<T> New(v8::Persistent<T, M> const& p);
#else
template <typename T> inline v8::Local<T> New(v8::Persistent<T> const& p);
#endif
template <typename T, typename M>
inline v8::Local<T> New(Persistent<T, M> const& p);
template <typename T>
inline v8::Local<T> New(Global<T> const& p);

inline
imp::Factory<v8::Boolean>::return_t
New(bool value) {
  return New<v8::Boolean>(value);
}

inline
imp::Factory<v8::Int32>::return_t
New(int32_t value) {
  return New<v8::Int32>(value);
}

inline
imp::Factory<v8::Uint32>::return_t
New(uint32_t value) {
  return New<v8::Uint32>(value);
}

inline
imp::Factory<v8::Number>::return_t
New(double value) {
  return New<v8::Number>(value);
}

inline
imp::Factory<v8::String>::return_t
New(std::string const& value) {  // NOLINT(build/include_what_you_use)
  return New<v8::String>(value);
}

inline
imp::Factory<v8::String>::return_t
New(const char * value, int length) {
  return New<v8::String>(value, length);
}

inline
imp::Factory<v8::String>::return_t
New(const uint16_t * value, int length) {
  return New<v8::String>(value, length);
}

inline
imp::Factory<v8::String>::return_t
New(const char * value) {
  return New<v8::String>(value);
}

inline
imp::Factory<v8::String>::return_t
New(const uint16_t * value) {
  return New<v8::String>(value);
}

inline
imp::Factory<v8::String>::return_t
New(v8::String::ExternalStringResource * value) {
  return New<v8::String>(value);
}

inline
imp::Factory<v8::String>::return_t
New(ExternalOneByteStringResource * value) {
  return New<v8::String>(value);
}

inline
imp::Factory<v8::RegExp>::return_t
New(v8::Local<v8::String> pattern, v8::RegExp::Flags flags) {
  return New<v8::RegExp>(pattern, flags);
}

#endif  // NAN_NEW_H_
`,
      "nan_object_wrap.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_OBJECT_WRAP_H_
#define NAN_OBJECT_WRAP_H_

class ObjectWrap {
 public:
  ObjectWrap() {
    refs_ = 0;
  }


  virtual ~ObjectWrap() {
    if (persistent().IsEmpty()) {
      return;
    }

    persistent().ClearWeak();
    persistent().Reset();
  }


  template <class T>
  static inline T* Unwrap(v8::Local<v8::Object> object) {
    assert(!object.IsEmpty());
    assert(object->InternalFieldCount() > 0);
    // Cast to ObjectWrap before casting to T.  A direct cast from void
    // to T won't work right when T has more than one base class.
    void* ptr = GetInternalFieldPointer(object, 0);
    ObjectWrap* wrap = static_cast<ObjectWrap*>(ptr);
    return static_cast<T*>(wrap);
  }


  inline v8::Local<v8::Object> handle() const {
    return New(handle_);
  }


  inline Persistent<v8::Object>& persistent() {
    return handle_;
  }


 protected:
  inline void Wrap(v8::Local<v8::Object> object) {
    assert(persistent().IsEmpty());
    assert(object->InternalFieldCount() > 0);
    SetInternalFieldPointer(object, 0, this);
    persistent().Reset(object);
    MakeWeak();
  }

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))

  inline void MakeWeak() {
    persistent().v8::PersistentBase<v8::Object>::SetWeak(
        this, WeakCallback, v8::WeakCallbackType::kParameter);
#if NODE_MAJOR_VERSION < 10
    // FIXME(bnoordhuis) Probably superfluous in older Node.js versions too.
    persistent().MarkIndependent();
#endif
  }

#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION

  inline void MakeWeak() {
    persistent().v8::PersistentBase<v8::Object>::SetWeak(this, WeakCallback);
    persistent().MarkIndependent();
  }

#else

  inline void MakeWeak() {
    persistent().persistent.MakeWeak(this, WeakCallback);
    persistent().MarkIndependent();
  }

#endif

  /* Ref() marks the object as being attached to an event loop.
   * Refed objects will not be garbage collected, even if
   * all references are lost.
   */
  virtual void Ref() {
    assert(!persistent().IsEmpty());
    persistent().ClearWeak();
    refs_++;
  }

  /* Unref() marks an object as detached from the event loop.  This is its
   * default state.  When an object with a "weak" reference changes from
   * attached to detached state it will be freed. Be careful not to access
   * the object after making this call as it might be gone!
   * (A "weak reference" means an object that only has a
   * persistent handle.)
   *
   * DO NOT CALL THIS FROM DESTRUCTOR
   */
  virtual void Unref() {
    assert(!persistent().IsEmpty());
    assert(!persistent().IsWeak());
    assert(refs_ > 0);
    if (--refs_ == 0)
      MakeWeak();
  }

  int refs_;  // ro

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(ObjectWrap)
#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))

  static void
  WeakCallback(v8::WeakCallbackInfo<ObjectWrap> const& info) {
    ObjectWrap* wrap = info.GetParameter();
    assert(wrap->refs_ == 0);
    wrap->handle_.Reset();
    delete wrap;
  }

#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION

  static void
  WeakCallback(v8::WeakCallbackData<v8::Object, ObjectWrap> const& data) {
    ObjectWrap* wrap = data.GetParameter();
    assert(wrap->refs_ == 0);
    assert(wrap->handle_.IsNearDeath());
    wrap->handle_.Reset();
    delete wrap;
  }

#else

  static void WeakCallback(v8::Persistent<v8::Value> value, void *data) {
    ObjectWrap *wrap = static_cast<ObjectWrap*>(data);
    assert(wrap->refs_ == 0);
    assert(wrap->handle_.IsNearDeath());
    wrap->handle_.Reset();
    delete wrap;
  }

#endif
  Persistent<v8::Object> handle_;
};


#endif  // NAN_OBJECT_WRAP_H_
`,
      "nan_persistent_12_inl.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_PERSISTENT_12_INL_H_
#define NAN_PERSISTENT_12_INL_H_

template<typename T, typename M> class Persistent :
    public v8::Persistent<T, M> {
 public:
  inline Persistent() : v8::Persistent<T, M>() {}

  template<typename S> inline Persistent(v8::Local<S> that) :
      v8::Persistent<T, M>(v8::Isolate::GetCurrent(), that) {}

  template<typename S, typename M2>
  inline
  Persistent(const v8::Persistent<S, M2> &that) :  // NOLINT(runtime/explicit)
      v8::Persistent<T, M2>(v8::Isolate::GetCurrent(), that) {}

  inline void Reset() { v8::PersistentBase<T>::Reset(); }

  template <typename S>
  inline void Reset(const v8::Local<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template <typename S>
  inline void Reset(const v8::PersistentBase<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template<typename P>
  inline void SetWeak(
    P *parameter
    , typename WeakCallbackInfo<P>::Callback callback
    , WeakCallbackType type);

 private:
  inline T *operator*() const { return *PersistentBase<T>::persistent; }

  template<typename S, typename M2>
  inline void Copy(const Persistent<S, M2> &that) {
    TYPE_CHECK(T, S);

    this->Reset();

    if (!that.IsEmpty()) {
      this->Reset(that);
      M::Copy(that, this);
    }
  }
};

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
template<typename T>
class Global : public v8::Global<T> {
 public:
  inline Global() : v8::Global<T>() {}

  template<typename S> inline Global(v8::Local<S> that) :
    v8::Global<T>(v8::Isolate::GetCurrent(), that) {}

  template<typename S>
  inline
  Global(const v8::PersistentBase<S> &that) :  // NOLINT(runtime/explicit)
      v8::Global<S>(v8::Isolate::GetCurrent(), that) {}

  inline void Reset() { v8::PersistentBase<T>::Reset(); }

  template <typename S>
  inline void Reset(const v8::Local<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template <typename S>
  inline void Reset(const v8::PersistentBase<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template<typename P>
  inline void SetWeak(
    P *parameter
    , typename WeakCallbackInfo<P>::Callback callback
    , WeakCallbackType type) {
    reinterpret_cast<Persistent<T>*>(this)->SetWeak(
        parameter, callback, type);
  }
};
#else
template<typename T>
class Global : public v8::UniquePersistent<T> {
 public:
  inline Global() : v8::UniquePersistent<T>() {}

  template<typename S> inline Global(v8::Local<S> that) :
    v8::UniquePersistent<T>(v8::Isolate::GetCurrent(), that) {}

  template<typename S>
  inline
  Global(const v8::PersistentBase<S> &that) :  // NOLINT(runtime/explicit)
      v8::UniquePersistent<S>(v8::Isolate::GetCurrent(), that) {}

  inline void Reset() { v8::PersistentBase<T>::Reset(); }

  template <typename S>
  inline void Reset(const v8::Local<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template <typename S>
  inline void Reset(const v8::PersistentBase<S> &other) {
    v8::PersistentBase<T>::Reset(v8::Isolate::GetCurrent(), other);
  }

  template<typename P>
  inline void SetWeak(
    P *parameter
    , typename WeakCallbackInfo<P>::Callback callback
    , WeakCallbackType type) {
    reinterpret_cast<Persistent<T>*>(this)->SetWeak(
        parameter, callback, type);
  }
};
#endif

#endif  // NAN_PERSISTENT_12_INL_H_
`,
      "nan_persistent_pre_12_inl.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_PERSISTENT_PRE_12_INL_H_
#define NAN_PERSISTENT_PRE_12_INL_H_

template<typename T>
class PersistentBase {
  v8::Persistent<T> persistent;
  template<typename U>
  friend v8::Local<U> New(const PersistentBase<U> &p);
  template<typename U, typename M>
  friend v8::Local<U> New(const Persistent<U, M> &p);
  template<typename U>
  friend v8::Local<U> New(const Global<U> &p);
  template<typename S> friend class ReturnValue;

 public:
  inline PersistentBase() :
      persistent() {}

  inline void Reset() {
    persistent.Dispose();
    persistent.Clear();
  }

  template<typename S>
  inline void Reset(const v8::Local<S> &other) {
    TYPE_CHECK(T, S);

    if (!persistent.IsEmpty()) {
      persistent.Dispose();
    }

    if (other.IsEmpty()) {
      persistent.Clear();
    } else {
      persistent = v8::Persistent<T>::New(other);
    }
  }

  template<typename S>
  inline void Reset(const PersistentBase<S> &other) {
    TYPE_CHECK(T, S);

    if (!persistent.IsEmpty()) {
      persistent.Dispose();
    }

    if (other.IsEmpty()) {
      persistent.Clear();
    } else {
      persistent = v8::Persistent<T>::New(other.persistent);
    }
  }

  inline bool IsEmpty() const { return persistent.IsEmpty(); }

  inline void Empty() { persistent.Clear(); }

  template<typename S>
  inline bool operator==(const PersistentBase<S> &that) const {
    return this->persistent == that.persistent;
  }

  template<typename S>
  inline bool operator==(const v8::Local<S> &that) const {
    return this->persistent == that;
  }

  template<typename S>
  inline bool operator!=(const PersistentBase<S> &that) const {
    return !operator==(that);
  }

  template<typename S>
  inline bool operator!=(const v8::Local<S> &that) const {
    return !operator==(that);
  }

  template<typename P>
  inline void SetWeak(
    P *parameter
    , typename WeakCallbackInfo<P>::Callback callback
    , WeakCallbackType type);

  inline void ClearWeak() { persistent.ClearWeak(); }

  inline void MarkIndependent() { persistent.MarkIndependent(); }

  inline bool IsIndependent() const { return persistent.IsIndependent(); }

  inline bool IsNearDeath() const { return persistent.IsNearDeath(); }

  inline bool IsWeak() const { return persistent.IsWeak(); }

 private:
  inline explicit PersistentBase(v8::Persistent<T> that) :
      persistent(that) { }
  inline explicit PersistentBase(T *val) : persistent(val) {}
  template<typename S, typename M> friend class Persistent;
  template<typename S> friend class Global;
  friend class ObjectWrap;
};

template<typename T>
class NonCopyablePersistentTraits {
 public:
  typedef Persistent<T, NonCopyablePersistentTraits<T> >
      NonCopyablePersistent;
  static const bool kResetInDestructor = false;
  template<typename S, typename M>
  inline static void Copy(const Persistent<S, M> &source,
                             NonCopyablePersistent *dest) {
    Uncompilable<v8::Object>();
  }

  template<typename O> inline static void Uncompilable() {
    TYPE_CHECK(O, v8::Primitive);
  }
};

template<typename T>
struct CopyablePersistentTraits {
  typedef Persistent<T, CopyablePersistentTraits<T> > CopyablePersistent;
  static const bool kResetInDestructor = true;
  template<typename S, typename M>
  static inline void Copy(const Persistent<S, M> &source,
                             CopyablePersistent *dest) {}
};

template<typename T, typename M> class Persistent :
    public PersistentBase<T> {
 public:
  inline Persistent() {}

  template<typename S> inline Persistent(v8::Handle<S> that)
      : PersistentBase<T>(v8::Persistent<T>::New(that)) {
    TYPE_CHECK(T, S);
  }

  inline Persistent(const Persistent &that) : PersistentBase<T>() {
    Copy(that);
  }

  template<typename S, typename M2>
  inline Persistent(const Persistent<S, M2> &that) :
      PersistentBase<T>() {
    Copy(that);
  }

  inline Persistent &operator=(const Persistent &that) {
    Copy(that);
    return *this;
  }

  template <class S, class M2>
  inline Persistent &operator=(const Persistent<S, M2> &that) {
    Copy(that);
    return *this;
  }

  inline ~Persistent() {
    if (M::kResetInDestructor) this->Reset();
  }

 private:
  inline T *operator*() const { return *PersistentBase<T>::persistent; }

  template<typename S, typename M2>
  inline void Copy(const Persistent<S, M2> &that) {
    TYPE_CHECK(T, S);

    this->Reset();

    if (!that.IsEmpty()) {
      this->persistent = v8::Persistent<T>::New(that.persistent);
      M::Copy(that, this);
    }
  }
};

template<typename T>
class Global : public PersistentBase<T> {
  struct RValue {
    inline explicit RValue(Global* obj) : object(obj) {}
    Global* object;
  };

 public:
  inline Global() : PersistentBase<T>(0) { }

  template <typename S>
  inline Global(v8::Local<S> that)  // NOLINT(runtime/explicit)
      : PersistentBase<T>(v8::Persistent<T>::New(that)) {
    TYPE_CHECK(T, S);
  }

  template <typename S>
  inline Global(const PersistentBase<S> &that)  // NOLINT(runtime/explicit)
    : PersistentBase<T>(that) {
    TYPE_CHECK(T, S);
  }
  /**
   * Move constructor.
   */
  inline Global(RValue rvalue)  // NOLINT(runtime/explicit)
    : PersistentBase<T>(rvalue.object->persistent) {
    rvalue.object->Reset();
  }
  inline ~Global() { this->Reset(); }
  /**
   * Move via assignment.
   */
  template<typename S>
  inline Global &operator=(Global<S> rhs) {
    TYPE_CHECK(T, S);
    this->Reset(rhs.persistent);
    rhs.Reset();
    return *this;
  }
  /**
   * Cast operator for moves.
   */
  inline operator RValue() { return RValue(this); }
  /**
   * Pass allows returning uniques from functions, etc.
   */
  Global Pass() { return Global(RValue(this)); }

 private:
  Global(Global &);
  void operator=(Global &);
  template<typename S> friend class ReturnValue;
};

#endif  // NAN_PERSISTENT_PRE_12_INL_H_
`,
      "nan_private.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_PRIVATE_H_
#define NAN_PRIVATE_H_

inline Maybe<bool>
HasPrivate(v8::Local<v8::Object> object, v8::Local<v8::String> key) {
  HandleScope scope;
#if NODE_MODULE_VERSION >= NODE_6_0_MODULE_VERSION
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::Local<v8::Context> context = isolate->GetCurrentContext();
  v8::Local<v8::Private> private_key = v8::Private::ForApi(isolate, key);
  return object->HasPrivate(context, private_key);
#else
  return Just(!object->GetHiddenValue(key).IsEmpty());
#endif
}

inline MaybeLocal<v8::Value>
GetPrivate(v8::Local<v8::Object> object, v8::Local<v8::String> key) {
#if NODE_MODULE_VERSION >= NODE_6_0_MODULE_VERSION
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::EscapableHandleScope scope(isolate);
  v8::Local<v8::Context> context = isolate->GetCurrentContext();
  v8::Local<v8::Private> private_key = v8::Private::ForApi(isolate, key);
  v8::MaybeLocal<v8::Value> v = object->GetPrivate(context, private_key);
  return scope.Escape(v.ToLocalChecked());
#else
  EscapableHandleScope scope;
  v8::Local<v8::Value> v = object->GetHiddenValue(key);
  if (v.IsEmpty()) {
    v = Undefined();
  }
  return scope.Escape(v);
#endif
}

inline Maybe<bool> SetPrivate(
    v8::Local<v8::Object> object,
    v8::Local<v8::String> key,
    v8::Local<v8::Value> value) {
#if NODE_MODULE_VERSION >= NODE_6_0_MODULE_VERSION
  HandleScope scope;
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::Local<v8::Context> context = isolate->GetCurrentContext();
  v8::Local<v8::Private> private_key = v8::Private::ForApi(isolate, key);
  return object->SetPrivate(context, private_key, value);
#else
  return Just(object->SetHiddenValue(key, value));
#endif
}

inline Maybe<bool> DeletePrivate(
    v8::Local<v8::Object> object,
    v8::Local<v8::String> key) {
#if NODE_MODULE_VERSION >= NODE_6_0_MODULE_VERSION
  HandleScope scope;
  v8::Isolate *isolate = v8::Isolate::GetCurrent();
  v8::Local<v8::Private> private_key = v8::Private::ForApi(isolate, key);
  return object->DeletePrivate(isolate->GetCurrentContext(), private_key);
#else
  return Just(object->DeleteHiddenValue(key));
#endif
}

#endif  // NAN_PRIVATE_H_

`,
      "nan_string_bytes.h": `// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

#ifndef NAN_STRING_BYTES_H_
#define NAN_STRING_BYTES_H_

// Decodes a v8::Local<v8::String> or Buffer to a raw char*

namespace imp {

using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;


//// Base 64 ////

#define base64_encoded_size(size) ((size + 2 - ((size + 2) % 3)) / 3 * 4)



//// HEX ////

static bool contains_non_ascii_slow(const char* buf, size_t len) {
  for (size_t i = 0; i < len; ++i) {
    if (buf[i] & 0x80) return true;
  }
  return false;
}


static bool contains_non_ascii(const char* src, size_t len) {
  if (len < 16) {
    return contains_non_ascii_slow(src, len);
  }

  const unsigned bytes_per_word = sizeof(void*);
  const unsigned align_mask = bytes_per_word - 1;
  const unsigned unaligned = reinterpret_cast<uintptr_t>(src) & align_mask;

  if (unaligned > 0) {
    const unsigned n = bytes_per_word - unaligned;
    if (contains_non_ascii_slow(src, n)) return true;
    src += n;
    len -= n;
  }


#if defined(__x86_64__) || defined(_WIN64)
  const uintptr_t mask = 0x8080808080808080ll;
#else
  const uintptr_t mask = 0x80808080l;
#endif

  const uintptr_t* srcw = reinterpret_cast<const uintptr_t*>(src);

  for (size_t i = 0, n = len / bytes_per_word; i < n; ++i) {
    if (srcw[i] & mask) return true;
  }

  const unsigned remainder = len & align_mask;
  if (remainder > 0) {
    const size_t offset = len - remainder;
    if (contains_non_ascii_slow(src + offset, remainder)) return true;
  }

  return false;
}


static void force_ascii_slow(const char* src, char* dst, size_t len) {
  for (size_t i = 0; i < len; ++i) {
    dst[i] = src[i] & 0x7f;
  }
}


static void force_ascii(const char* src, char* dst, size_t len) {
  if (len < 16) {
    force_ascii_slow(src, dst, len);
    return;
  }

  const unsigned bytes_per_word = sizeof(void*);
  const unsigned align_mask = bytes_per_word - 1;
  const unsigned src_unalign = reinterpret_cast<uintptr_t>(src) & align_mask;
  const unsigned dst_unalign = reinterpret_cast<uintptr_t>(dst) & align_mask;

  if (src_unalign > 0) {
    if (src_unalign == dst_unalign) {
      const unsigned unalign = bytes_per_word - src_unalign;
      force_ascii_slow(src, dst, unalign);
      src += unalign;
      dst += unalign;
      len -= src_unalign;
    } else {
      force_ascii_slow(src, dst, len);
      return;
    }
  }

#if defined(__x86_64__) || defined(_WIN64)
  const uintptr_t mask = ~0x8080808080808080ll;
#else
  const uintptr_t mask = ~0x80808080l;
#endif

  const uintptr_t* srcw = reinterpret_cast<const uintptr_t*>(src);
  uintptr_t* dstw = reinterpret_cast<uintptr_t*>(dst);

  for (size_t i = 0, n = len / bytes_per_word; i < n; ++i) {
    dstw[i] = srcw[i] & mask;
  }

  const unsigned remainder = len & align_mask;
  if (remainder > 0) {
    const size_t offset = len - remainder;
    force_ascii_slow(src + offset, dst + offset, remainder);
  }
}


static size_t base64_encode(const char* src,
                            size_t slen,
                            char* dst,
                            size_t dlen) {
  // We know how much we'll write, just make sure that there's space.
  assert(dlen >= base64_encoded_size(slen) &&
      "not enough space provided for base64 encode");

  dlen = base64_encoded_size(slen);

  unsigned a;
  unsigned b;
  unsigned c;
  unsigned i;
  unsigned k;
  unsigned n;

  static const char table[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                              "abcdefghijklmnopqrstuvwxyz"
                              "0123456789+/";

  i = 0;
  k = 0;
  n = slen / 3 * 3;

  while (i < n) {
    a = src[i + 0] & 0xff;
    b = src[i + 1] & 0xff;
    c = src[i + 2] & 0xff;

    dst[k + 0] = table[a >> 2];
    dst[k + 1] = table[((a & 3) << 4) | (b >> 4)];
    dst[k + 2] = table[((b & 0x0f) << 2) | (c >> 6)];
    dst[k + 3] = table[c & 0x3f];

    i += 3;
    k += 4;
  }

  if (n != slen) {
    switch (slen - n) {
      case 1:
        a = src[i + 0] & 0xff;
        dst[k + 0] = table[a >> 2];
        dst[k + 1] = table[(a & 3) << 4];
        dst[k + 2] = '=';
        dst[k + 3] = '=';
        break;

      case 2:
        a = src[i + 0] & 0xff;
        b = src[i + 1] & 0xff;
        dst[k + 0] = table[a >> 2];
        dst[k + 1] = table[((a & 3) << 4) | (b >> 4)];
        dst[k + 2] = table[(b & 0x0f) << 2];
        dst[k + 3] = '=';
        break;
    }
  }

  return dlen;
}


static size_t hex_encode(const char* src, size_t slen, char* dst, size_t dlen) {
  // We know how much we'll write, just make sure that there's space.
  assert(dlen >= slen * 2 &&
      "not enough space provided for hex encode");

  dlen = slen * 2;
  for (uint32_t i = 0, k = 0; k < dlen; i += 1, k += 2) {
    static const char hex[] = "0123456789abcdef";
    uint8_t val = static_cast<uint8_t>(src[i]);
    dst[k + 0] = hex[val >> 4];
    dst[k + 1] = hex[val & 15];
  }

  return dlen;
}



static Local<Value> Encode(const char* buf,
                           size_t buflen,
                           enum Encoding encoding) {
  assert(buflen <= node::Buffer::kMaxLength);
  if (!buflen && encoding != BUFFER)
    return New("").ToLocalChecked();

  Local<String> val;
  switch (encoding) {
    case BUFFER:
      return CopyBuffer(buf, buflen).ToLocalChecked();

    case ASCII:
      if (contains_non_ascii(buf, buflen)) {
        char* out = new char[buflen];
        force_ascii(buf, out, buflen);
        val = New<String>(out, buflen).ToLocalChecked();
        delete[] out;
      } else {
        val = New<String>(buf, buflen).ToLocalChecked();
      }
      break;

    case UTF8:
      val = New<String>(buf, buflen).ToLocalChecked();
      break;

    case BINARY: {
      // TODO(isaacs) use ExternalTwoByteString?
      const unsigned char *cbuf = reinterpret_cast<const unsigned char*>(buf);
      uint16_t * twobytebuf = new uint16_t[buflen];
      for (size_t i = 0; i < buflen; i++) {
        // XXX is the following line platform independent?
        twobytebuf[i] = cbuf[i];
      }
      val = New<String>(twobytebuf, buflen).ToLocalChecked();
      delete[] twobytebuf;
      break;
    }

    case BASE64: {
      size_t dlen = base64_encoded_size(buflen);
      char* dst = new char[dlen];

      size_t written = base64_encode(buf, buflen, dst, dlen);
      assert(written == dlen);

      val = New<String>(dst, dlen).ToLocalChecked();
      delete[] dst;
      break;
    }

    case UCS2: {
      const uint16_t* data = reinterpret_cast<const uint16_t*>(buf);
      val = New<String>(data, buflen / 2).ToLocalChecked();
      break;
    }

    case HEX: {
      size_t dlen = buflen * 2;
      char* dst = new char[dlen];
      size_t written = hex_encode(buf, buflen, dst, dlen);
      assert(written == dlen);

      val = New<String>(dst, dlen).ToLocalChecked();
      delete[] dst;
      break;
    }

    default:
      assert(0 && "unknown encoding");
      break;
  }

  return val;
}

#undef base64_encoded_size

}  // end of namespace imp

#endif  // NAN_STRING_BYTES_H_
`,
      "nan_typedarray_contents.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_TYPEDARRAY_CONTENTS_H_
#define NAN_TYPEDARRAY_CONTENTS_H_

template<typename T>
class TypedArrayContents {
 public:
  inline explicit TypedArrayContents(v8::Local<v8::Value> from) :
      length_(0), data_(NULL) {
    HandleScope scope;

    size_t length = 0;
    void*  data = NULL;

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))

    if (from->IsArrayBufferView()) {
      v8::Local<v8::ArrayBufferView> array =
        v8::Local<v8::ArrayBufferView>::Cast(from);

      const size_t    byte_length = array->ByteLength();
      const ptrdiff_t byte_offset = array->ByteOffset();
      v8::Local<v8::ArrayBuffer> buffer = array->Buffer();

      length = byte_length / sizeof(T);
// Actually it's 7.9 here but this would lead to ABI issues with Node.js 13
// using 7.8 till 13.2.0.
#if (V8_MAJOR_VERSION >= 8)
      data = static_cast<char*>(buffer->GetBackingStore()->Data()) + byte_offset;
#else
      data = static_cast<char*>(buffer->GetContents().Data()) + byte_offset;
#endif
    }

#else

    if (from->IsObject() && !from->IsNull()) {
      v8::Local<v8::Object> array = v8::Local<v8::Object>::Cast(from);

      MaybeLocal<v8::Value> buffer = Get(array,
        New<v8::String>("buffer").ToLocalChecked());
      MaybeLocal<v8::Value> byte_length = Get(array,
        New<v8::String>("byteLength").ToLocalChecked());
      MaybeLocal<v8::Value> byte_offset = Get(array,
        New<v8::String>("byteOffset").ToLocalChecked());

      if (!buffer.IsEmpty() &&
          !byte_length.IsEmpty() && byte_length.ToLocalChecked()->IsUint32() &&
          !byte_offset.IsEmpty() && byte_offset.ToLocalChecked()->IsUint32()) {
        data = array->GetIndexedPropertiesExternalArrayData();
        if(data) {
          length = byte_length.ToLocalChecked()->Uint32Value() / sizeof(T);
        }
      }
    }

#endif

#if defined(_MSC_VER) && _MSC_VER >= 1900 || __cplusplus >= 201103L
    assert(reinterpret_cast<uintptr_t>(data) % alignof (T) == 0);
#elif defined(_MSC_VER) && _MSC_VER >= 1600 || defined(__GNUC__)
    assert(reinterpret_cast<uintptr_t>(data) % __alignof(T) == 0);
#else
    assert(reinterpret_cast<uintptr_t>(data) % sizeof (T) == 0);
#endif

    length_ = length;
    data_   = static_cast<T*>(data);
  }

  inline size_t length() const      { return length_; }
  inline T* operator*()             { return data_;   }
  inline const T* operator*() const { return data_;   }

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(TypedArrayContents)

  //Disable heap allocation
  void *operator new(size_t size);
  void operator delete(void *, size_t) {
    abort();
  }

  size_t  length_;
  T*      data_;
};

#endif  // NAN_TYPEDARRAY_CONTENTS_H_
`,
      "nan_weak.h": `/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

#ifndef NAN_WEAK_H_
#define NAN_WEAK_H_

static const int kInternalFieldsInWeakCallback = 2;
static const int kNoInternalFieldIndex = -1;

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
# define NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ \\
    v8::WeakCallbackInfo<WeakCallbackInfo<T> > const&
# define NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ \\
    NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
# define NAN_WEAK_PARAMETER_CALLBACK_SIG_ NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
# define NAN_WEAK_TWOFIELD_CALLBACK_SIG_ NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_
#elif NODE_MODULE_VERSION > IOJS_1_1_MODULE_VERSION
# define NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ \\
    v8::PhantomCallbackData<WeakCallbackInfo<T> > const&
# define NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ \\
    NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
# define NAN_WEAK_PARAMETER_CALLBACK_SIG_ NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
# define NAN_WEAK_TWOFIELD_CALLBACK_SIG_ NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_
#elif NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
# define NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ \\
    v8::PhantomCallbackData<WeakCallbackInfo<T> > const&
# define NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ \\
    v8::InternalFieldsCallbackData<WeakCallbackInfo<T>, void> const&
# define NAN_WEAK_PARAMETER_CALLBACK_SIG_ NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
# define NAN_WEAK_TWOFIELD_CALLBACK_SIG_ NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_
#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
# define NAN_WEAK_CALLBACK_DATA_TYPE_ \\
    v8::WeakCallbackData<S, WeakCallbackInfo<T> > const&
# define NAN_WEAK_CALLBACK_SIG_ NAN_WEAK_CALLBACK_DATA_TYPE_
#else
# define NAN_WEAK_CALLBACK_DATA_TYPE_ void *
# define NAN_WEAK_CALLBACK_SIG_ \\
    v8::Persistent<v8::Value>, NAN_WEAK_CALLBACK_DATA_TYPE_
#endif

template<typename T>
class WeakCallbackInfo {
 public:
  typedef void (*Callback)(const WeakCallbackInfo<T>& data);
  WeakCallbackInfo(
      Persistent<v8::Value> *persistent
    , Callback callback
    , void *parameter
    , void *field1 = 0
    , void *field2 = 0) :
        callback_(callback), isolate_(0), parameter_(parameter) {
    std::memcpy(&persistent_, persistent, sizeof (v8::Persistent<v8::Value>));
    internal_fields_[0] = field1;
    internal_fields_[1] = field2;
  }
  inline v8::Isolate *GetIsolate() const { return isolate_; }
  inline T *GetParameter() const { return static_cast<T*>(parameter_); }
  inline void *GetInternalField(int index) const {
    assert((index == 0 || index == 1) && "internal field index out of bounds");
    if (index == 0) {
      return internal_fields_[0];
    } else {
      return internal_fields_[1];
    }
  }

 private:
  NAN_DISALLOW_ASSIGN_COPY_MOVE(WeakCallbackInfo)
  Callback callback_;
  v8::Isolate *isolate_;
  void *parameter_;
  void *internal_fields_[kInternalFieldsInWeakCallback];
  v8::Persistent<v8::Value> persistent_;
  template<typename S, typename M> friend class Persistent;
  template<typename S> friend class PersistentBase;
#if NODE_MODULE_VERSION <= NODE_0_12_MODULE_VERSION
# if NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
  template<typename S>
  static void invoke(NAN_WEAK_CALLBACK_SIG_ data);
  template<typename S>
  static WeakCallbackInfo *unwrap(NAN_WEAK_CALLBACK_DATA_TYPE_ data);
# else
  static void invoke(NAN_WEAK_CALLBACK_SIG_ data);
  static WeakCallbackInfo *unwrap(NAN_WEAK_CALLBACK_DATA_TYPE_ data);
# endif
#else
# if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                     \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
  template<bool isFirstPass>
  static void invokeparameter(NAN_WEAK_PARAMETER_CALLBACK_SIG_ data);
  template<bool isFirstPass>
  static void invoketwofield(NAN_WEAK_TWOFIELD_CALLBACK_SIG_ data);
# else
  static void invokeparameter(NAN_WEAK_PARAMETER_CALLBACK_SIG_ data);
  static void invoketwofield(NAN_WEAK_TWOFIELD_CALLBACK_SIG_ data);
# endif
  static WeakCallbackInfo *unwrapparameter(
      NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ data);
  static WeakCallbackInfo *unwraptwofield(
      NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ data);
#endif
};


#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))

template<typename T>
template<bool isFirstPass>
void
WeakCallbackInfo<T>::invokeparameter(NAN_WEAK_PARAMETER_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwrapparameter(data);
  if (isFirstPass) {
    cbinfo->persistent_.Reset();
    data.SetSecondPassCallback(invokeparameter<false>);
  } else {
    cbinfo->callback_(*cbinfo);
    delete cbinfo;
  }
}

template<typename T>
template<bool isFirstPass>
void
WeakCallbackInfo<T>::invoketwofield(NAN_WEAK_TWOFIELD_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwraptwofield(data);
  if (isFirstPass) {
    cbinfo->persistent_.Reset();
    data.SetSecondPassCallback(invoketwofield<false>);
  } else {
    cbinfo->callback_(*cbinfo);
    delete cbinfo;
  }
}

template<typename T>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwrapparameter(
    NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ data) {
  WeakCallbackInfo<T> *cbinfo =
      static_cast<WeakCallbackInfo<T>*>(data.GetParameter());
  cbinfo->isolate_ = data.GetIsolate();
  return cbinfo;
}

template<typename T>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwraptwofield(
    NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ data) {
  WeakCallbackInfo<T> *cbinfo =
      static_cast<WeakCallbackInfo<T>*>(data.GetInternalField(0));
  cbinfo->isolate_ = data.GetIsolate();
  return cbinfo;
}

#undef NAN_WEAK_PARAMETER_CALLBACK_SIG_
#undef NAN_WEAK_TWOFIELD_CALLBACK_SIG_
#undef NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
#undef NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_
# elif NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION

template<typename T>
void
WeakCallbackInfo<T>::invokeparameter(NAN_WEAK_PARAMETER_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwrapparameter(data);
  cbinfo->persistent_.Reset();
  cbinfo->callback_(*cbinfo);
  delete cbinfo;
}

template<typename T>
void
WeakCallbackInfo<T>::invoketwofield(NAN_WEAK_TWOFIELD_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwraptwofield(data);
  cbinfo->persistent_.Reset();
  cbinfo->callback_(*cbinfo);
  delete cbinfo;
}

template<typename T>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwrapparameter(
    NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_ data) {
  WeakCallbackInfo<T> *cbinfo =
       static_cast<WeakCallbackInfo<T>*>(data.GetParameter());
  cbinfo->isolate_ = data.GetIsolate();
  return cbinfo;
}

template<typename T>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwraptwofield(
    NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_ data) {
  WeakCallbackInfo<T> *cbinfo =
       static_cast<WeakCallbackInfo<T>*>(data.GetInternalField1());
  cbinfo->isolate_ = data.GetIsolate();
  return cbinfo;
}

#undef NAN_WEAK_PARAMETER_CALLBACK_SIG_
#undef NAN_WEAK_TWOFIELD_CALLBACK_SIG_
#undef NAN_WEAK_PARAMETER_CALLBACK_DATA_TYPE_
#undef NAN_WEAK_TWOFIELD_CALLBACK_DATA_TYPE_
#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION

template<typename T>
template<typename S>
void WeakCallbackInfo<T>::invoke(NAN_WEAK_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwrap(data);
  cbinfo->persistent_.Reset();
  cbinfo->callback_(*cbinfo);
  delete cbinfo;
}

template<typename T>
template<typename S>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwrap(
    NAN_WEAK_CALLBACK_DATA_TYPE_ data) {
  void *parameter = data.GetParameter();
  WeakCallbackInfo<T> *cbinfo =
      static_cast<WeakCallbackInfo<T>*>(parameter);
  cbinfo->isolate_ = data.GetIsolate();
  return cbinfo;
}

#undef NAN_WEAK_CALLBACK_SIG_
#undef NAN_WEAK_CALLBACK_DATA_TYPE_
#else

template<typename T>
void WeakCallbackInfo<T>::invoke(NAN_WEAK_CALLBACK_SIG_ data) {
  WeakCallbackInfo<T> *cbinfo = unwrap(data);
  cbinfo->persistent_.Dispose();
  cbinfo->persistent_.Clear();
  cbinfo->callback_(*cbinfo);
  delete cbinfo;
}

template<typename T>
WeakCallbackInfo<T> *WeakCallbackInfo<T>::unwrap(
    NAN_WEAK_CALLBACK_DATA_TYPE_ data) {
  WeakCallbackInfo<T> *cbinfo =
      static_cast<WeakCallbackInfo<T>*>(data);
  cbinfo->isolate_ = v8::Isolate::GetCurrent();
  return cbinfo;
}

#undef NAN_WEAK_CALLBACK_SIG_
#undef NAN_WEAK_CALLBACK_DATA_TYPE_
#endif

#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION > 4 ||                      \\
  (V8_MAJOR_VERSION == 4 && defined(V8_MINOR_VERSION) && V8_MINOR_VERSION >= 3))
template<typename T, typename M>
template<typename P>
inline void Persistent<T, M>::SetWeak(
    P *parameter
  , typename WeakCallbackInfo<P>::Callback callback
  , WeakCallbackType type) {
  WeakCallbackInfo<P> *wcbd;
  if (type == WeakCallbackType::kParameter) {
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , parameter);
    v8::PersistentBase<T>::SetWeak(
        wcbd
      , WeakCallbackInfo<P>::template invokeparameter<true>
      , type);
  } else {
    v8::Local<v8::Value>* self_v(reinterpret_cast<v8::Local<v8::Value>*>(this));
    assert((*self_v)->IsObject());
    v8::Local<v8::Object> self((*self_v).As<v8::Object>());
    int count = self->InternalFieldCount();
    void *internal_fields[kInternalFieldsInWeakCallback] = {0, 0};
    for (int i = 0; i < count && i < kInternalFieldsInWeakCallback; i++) {
      internal_fields[i] = self->GetAlignedPointerFromInternalField(i);
    }
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , 0
      , internal_fields[0]
      , internal_fields[1]);
    self->SetAlignedPointerInInternalField(0, wcbd);
    v8::PersistentBase<T>::SetWeak(
        static_cast<WeakCallbackInfo<P>*>(0)
      , WeakCallbackInfo<P>::template invoketwofield<true>
      , type);
  }
}
#elif NODE_MODULE_VERSION > IOJS_1_1_MODULE_VERSION
template<typename T, typename M>
template<typename P>
inline void Persistent<T, M>::SetWeak(
    P *parameter
  , typename WeakCallbackInfo<P>::Callback callback
  , WeakCallbackType type) {
  WeakCallbackInfo<P> *wcbd;
  if (type == WeakCallbackType::kParameter) {
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , parameter);
    v8::PersistentBase<T>::SetPhantom(
        wcbd
      , WeakCallbackInfo<P>::invokeparameter);
  } else {
    v8::Local<v8::Value>* self_v(reinterpret_cast<v8::Local<v8::Value>*>(this));
    assert((*self_v)->IsObject());
    v8::Local<v8::Object> self((*self_v).As<v8::Object>());
    int count = self->InternalFieldCount();
    void *internal_fields[kInternalFieldsInWeakCallback] = {0, 0};
    for (int i = 0; i < count && i < kInternalFieldsInWeakCallback; i++) {
      internal_fields[i] = self->GetAlignedPointerFromInternalField(i);
    }
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , 0
      , internal_fields[0]
      , internal_fields[1]);
    self->SetAlignedPointerInInternalField(0, wcbd);
    v8::PersistentBase<T>::SetPhantom(
        static_cast<WeakCallbackInfo<P>*>(0)
      , WeakCallbackInfo<P>::invoketwofield
      , 0
      , count > 1 ? 1 : kNoInternalFieldIndex);
  }
}
#elif NODE_MODULE_VERSION > NODE_0_12_MODULE_VERSION
template<typename T, typename M>
template<typename P>
inline void Persistent<T, M>::SetWeak(
    P *parameter
  , typename WeakCallbackInfo<P>::Callback callback
  , WeakCallbackType type) {
  WeakCallbackInfo<P> *wcbd;
  if (type == WeakCallbackType::kParameter) {
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , parameter);
    v8::PersistentBase<T>::SetPhantom(
        wcbd
      , WeakCallbackInfo<P>::invokeparameter);
  } else {
    v8::Local<v8::Value>* self_v(reinterpret_cast<v8::Local<v8::Value>*>(this));
    assert((*self_v)->IsObject());
    v8::Local<v8::Object> self((*self_v).As<v8::Object>());
    int count = self->InternalFieldCount();
    void *internal_fields[kInternalFieldsInWeakCallback] = {0, 0};
    for (int i = 0; i < count && i < kInternalFieldsInWeakCallback; i++) {
      internal_fields[i] = self->GetAlignedPointerFromInternalField(i);
    }
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , 0
      , internal_fields[0]
      , internal_fields[1]);
    self->SetAlignedPointerInInternalField(0, wcbd);
    v8::PersistentBase<T>::SetPhantom(
        WeakCallbackInfo<P>::invoketwofield
      , 0
      , count > 1 ? 1 : kNoInternalFieldIndex);
  }
}
#elif NODE_MODULE_VERSION > NODE_0_10_MODULE_VERSION
template<typename T, typename M>
template<typename P>
inline void Persistent<T, M>::SetWeak(
    P *parameter
  , typename WeakCallbackInfo<P>::Callback callback
  , WeakCallbackType type) {
  WeakCallbackInfo<P> *wcbd;
  if (type == WeakCallbackType::kParameter) {
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , parameter);
    v8::PersistentBase<T>::SetWeak(wcbd, WeakCallbackInfo<P>::invoke);
  } else {
    v8::Local<v8::Value>* self_v(reinterpret_cast<v8::Local<v8::Value>*>(this));
    assert((*self_v)->IsObject());
    v8::Local<v8::Object> self((*self_v).As<v8::Object>());
    int count = self->InternalFieldCount();
    void *internal_fields[kInternalFieldsInWeakCallback] = {0, 0};
    for (int i = 0; i < count && i < kInternalFieldsInWeakCallback; i++) {
      internal_fields[i] = self->GetAlignedPointerFromInternalField(i);
    }
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , 0
      , internal_fields[0]
      , internal_fields[1]);
    v8::PersistentBase<T>::SetWeak(wcbd, WeakCallbackInfo<P>::invoke);
  }
}
#else
template<typename T>
template<typename P>
inline void PersistentBase<T>::SetWeak(
    P *parameter
  , typename WeakCallbackInfo<P>::Callback callback
  , WeakCallbackType type) {
  WeakCallbackInfo<P> *wcbd;
  if (type == WeakCallbackType::kParameter) {
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , parameter);
    persistent.MakeWeak(wcbd, WeakCallbackInfo<P>::invoke);
  } else {
    v8::Local<v8::Value>* self_v(reinterpret_cast<v8::Local<v8::Value>*>(this));
    assert((*self_v)->IsObject());
    v8::Local<v8::Object> self((*self_v).As<v8::Object>());
    int count = self->InternalFieldCount();
    void *internal_fields[kInternalFieldsInWeakCallback] = {0, 0};
    for (int i = 0; i < count && i < kInternalFieldsInWeakCallback; i++) {
      internal_fields[i] = self->GetPointerFromInternalField(i);
    }
    wcbd = new WeakCallbackInfo<P>(
        reinterpret_cast<Persistent<v8::Value>*>(this)
      , callback
      , 0
      , internal_fields[0]
      , internal_fields[1]);
    persistent.MakeWeak(wcbd, WeakCallbackInfo<P>::invoke);
  }
}
#endif

#endif  // NAN_WEAK_H_
`,
      "package.json": JSON.stringify({
        "_args": [
          [
            "nan@2.14.1",
            "/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script"
          ]
        ],
        "_from": "nan@2.14.1",
        "_id": "nan@2.14.1",
        "_inBundle": false,
        "_integrity": "sha512-isWHgVjnFjh2x2yuJ/tj3JbwoHu3UC2dX5G/88Cm24yB6YopVgxvBObDY7n5xW6ExmFhJpSEQqFPvq9zaXc8Jw==",
        "_location": "/nan",
        "_phantomChildren": {},
        "_requested": {
          "type": "version",
          "registry": true,
          "raw": "nan@2.14.1",
          "name": "nan",
          "escapedName": "nan",
          "rawSpec": "2.14.1",
          "saveSpec": null,
          "fetchSpec": "2.14.1"
        },
        "_requiredBy": [
          "/node-report"
        ],
        "_resolved": "https://registry.npmjs.org/nan/-/nan-2.14.1.tgz",
        "_spec": "2.14.1",
        "_where": "/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script",
        "bugs": {
          "url": "https://github.com/nodejs/nan/issues"
        },
        "contributors": [
          {
            "name": "Rod Vagg",
            "email": "r@va.gg",
            "url": "https://github.com/rvagg"
          },
          {
            "name": "Benjamin Byholm",
            "email": "bbyholm@abo.fi",
            "url": "https://github.com/kkoopa/"
          },
          {
            "name": "Trevor Norris",
            "email": "trev.norris@gmail.com",
            "url": "https://github.com/trevnorris"
          },
          {
            "name": "Nathan Rajlich",
            "email": "nathan@tootallnate.net",
            "url": "https://github.com/TooTallNate"
          },
          {
            "name": "Brett Lawson",
            "email": "brett19@gmail.com",
            "url": "https://github.com/brett19"
          },
          {
            "name": "Ben Noordhuis",
            "email": "info@bnoordhuis.nl",
            "url": "https://github.com/bnoordhuis"
          },
          {
            "name": "David Siegel",
            "email": "david@artcom.de",
            "url": "https://github.com/agnat"
          },
          {
            "name": "Michael Ira Krufky",
            "email": "mkrufky@gmail.com",
            "url": "https://github.com/mkrufky"
          }
        ],
        "description": "Native Abstractions for Node.js: C++ header for Node 0.8 -> 14 compatibility",
        "devDependencies": {
          "bindings": "~1.2.1",
          "commander": "^2.8.1",
          "glob": "^5.0.14",
          "node-gyp": "~3.6.2",
          "readable-stream": "^2.1.4",
          "request": "=2.81.0",
          "tap": "~0.7.1",
          "xtend": "~4.0.0"
        },
        "homepage": "https://github.com/nodejs/nan#readme",
        "license": "MIT",
        "main": "include_dirs.js",
        "name": "nan",
        "repository": {
          "type": "git",
          "url": "git://github.com/nodejs/nan.git"
        },
        "scripts": {
          "docs": "doc/.build.sh",
          "rebuild-tests": "node-gyp rebuild --msvs_version=2015 --directory test",
          "test": "tap --gc --stderr test/js/*-test.js",
          "test:worker": "node --experimental-worker test/tap-as-worker.js --gc --stderr test/js/*-test.js"
        },
        "version": "2.14.1"
      }),
      "tools": {
        "1to2.js": `#!/usr/bin/env node
/*********************************************************************
 * NAN - Native Abstractions for Node.js
 *
 * Copyright (c) 2018 NAN contributors
 *
 * MIT License <https://github.com/nodejs/nan/blob/master/LICENSE.md>
 ********************************************************************/

var commander = require('commander'),
    fs = require('fs'),
    glob = require('glob'),
    groups = [],
    total = 0,
    warning1 = '/* ERROR: Rewrite using Buffer */\\n',
    warning2 = '\\\\/\\\\* ERROR\\\\: Rewrite using Buffer \\\\*\\\\/\\\\n',
    length,
    i;

fs.readFile(__dirname + '/package.json', 'utf8', function (err, data) {
  if (err) {
    throw err;
  }

  commander
      .version(JSON.parse(data).version)
      .usage('[options] <file ...>')
      .parse(process.argv);

  if (!process.argv.slice(2).length) {
    commander.outputHelp();
  }
});

/* construct strings representing regular expressions
   each expression contains a unique group allowing for identification of the match
   the index of this key group, relative to the regular expression in question,
    is indicated by the first array member */

/* simple substistutions, key group is the entire match, 0 */
groups.push([0, [
  '_NAN_',
  'NODE_SET_METHOD',
  'NODE_SET_PROTOTYPE_METHOD',
  'NanAsciiString',
  'NanEscapeScope',
  'NanReturnValue',
  'NanUcs2String'].join('|')]);

/* substitutions of parameterless macros, key group is 1 */
groups.push([1, ['(', [
  'NanEscapableScope',
  'NanReturnNull',
  'NanReturnUndefined',
  'NanScope'].join('|'), ')\\\\(\\\\)'].join('')]);

/* replace TryCatch with NanTryCatch once, gobbling possible namespace, key group 2 */
groups.push([2, '(?:(?:v8\\\\:\\\\:)?|(Nan)?)(TryCatch)']);

/* NanNew("string") will likely not fail a ToLocalChecked(), key group 1 */ 
groups.push([1, ['(NanNew)', '(\\\\("[^\\\\"]*"[^\\\\)]*\\\\))(?!\\\\.ToLocalChecked\\\\(\\\\))'].join('')]);

/* Removed v8 APIs, warn that the code needs rewriting using node::Buffer, key group 2 */
groups.push([2, ['(', warning2, ')?', '^.*?(', [
      'GetIndexedPropertiesExternalArrayDataLength',
      'GetIndexedPropertiesExternalArrayData',
      'GetIndexedPropertiesExternalArrayDataType',
      'GetIndexedPropertiesPixelData',
      'GetIndexedPropertiesPixelDataLength',
      'HasIndexedPropertiesInExternalArrayData',
      'HasIndexedPropertiesInPixelData',
      'SetIndexedPropertiesToExternalArrayData',
      'SetIndexedPropertiesToPixelData'].join('|'), ')'].join('')]);

/* No need for NanScope in V8-exposed methods, key group 2 */
groups.push([2, ['((', [
      'NAN_METHOD',
      'NAN_GETTER',
      'NAN_SETTER',
      'NAN_PROPERTY_GETTER',
      'NAN_PROPERTY_SETTER',
      'NAN_PROPERTY_ENUMERATOR',
      'NAN_PROPERTY_DELETER',
      'NAN_PROPERTY_QUERY',
      'NAN_INDEX_GETTER',
      'NAN_INDEX_SETTER',
      'NAN_INDEX_ENUMERATOR',
      'NAN_INDEX_DELETER',
      'NAN_INDEX_QUERY'].join('|'), ')\\\\([^\\\\)]*\\\\)\\\\s*\\\\{)\\\\s*NanScope\\\\(\\\\)\\\\s*;'].join('')]);

/* v8::Value::ToXXXXXXX returns v8::MaybeLocal<T>, key group 3 */
groups.push([3, ['([\\\\s\\\\(\\\\)])([^\\\\s\\\\(\\\\)]+)->(', [
      'Boolean',
      'Number',
      'String',
      'Object',
      'Integer',
      'Uint32',
      'Int32'].join('|'), ')\\\\('].join('')]);

/* v8::Value::XXXXXXXValue returns v8::Maybe<T>, key group 3 */
groups.push([3, ['([\\\\s\\\\(\\\\)])([^\\\\s\\\\(\\\\)]+)->((?:', [
      'Boolean',
      'Number',
      'Integer',
      'Uint32',
      'Int32'].join('|'), ')Value)\\\\('].join('')]);

/* NAN_WEAK_CALLBACK macro was removed, write out callback definition, key group 1 */
groups.push([1, '(NAN_WEAK_CALLBACK)\\\\(([^\\\\s\\\\)]+)\\\\)']);

/* node::ObjectWrap and v8::Persistent have been replaced with Nan implementations, key group 1 */
groups.push([1, ['(', [
  'NanDisposePersistent',
  'NanObjectWrapHandle'].join('|'), ')\\\\s*\\\\(\\\\s*([^\\\\s\\\\)]+)'].join('')]);

/* Since NanPersistent there is no need for NanMakeWeakPersistent, key group 1 */
groups.push([1, '(NanMakeWeakPersistent)\\\\s*\\\\(\\\\s*([^\\\\s,]+)\\\\s*,\\\\s*']);

/* Many methods of v8::Object and others now return v8::MaybeLocal<T>, key group 3 */
groups.push([3, ['([\\\\s])([^\\\\s]+)->(', [
  'GetEndColumn',
  'GetFunction',
  'GetLineNumber',
  'NewInstance',
  'GetPropertyNames',
  'GetOwnPropertyNames',
  'GetSourceLine',
  'GetStartColumn',
  'ObjectProtoToString',
  'ToArrayIndex',
  'ToDetailString',
  'CallAsConstructor',
  'CallAsFunction',
  'CloneElementAt',
  'Delete',
  'ForceSet',
  'Get',
  'GetPropertyAttributes',
  'GetRealNamedProperty',
  'GetRealNamedPropertyInPrototypeChain',
  'Has',
  'HasOwnProperty',
  'HasRealIndexedProperty',
  'HasRealNamedCallbackProperty',
  'HasRealNamedProperty',
  'Set',
  'SetAccessor',
  'SetIndexedPropertyHandler',
  'SetNamedPropertyHandler',
  'SetPrototype'].join('|'), ')\\\\('].join('')]);

/* You should get an error if any of these fail anyways,
   or handle the error better, it is indicated either way, key group 2 */
groups.push([2, ['NanNew(<(?:v8\\\\:\\\\:)?(', ['Date', 'String', 'RegExp'].join('|'), ')>)(\\\\([^\\\\)]*\\\\))(?!\\\\.ToLocalChecked\\\\(\\\\))'].join('')]);

/* v8::Value::Equals now returns a v8::Maybe, key group 3 */
groups.push([3, '([\\\\s\\\\(\\\\)])([^\\\\s\\\\(\\\\)]+)->(Equals)\\\\(([^\\\\s\\\\)]+)']);

/* NanPersistent makes this unnecessary, key group 1 */
groups.push([1, '(NanAssignPersistent)(?:<v8\\\\:\\\\:[^>]+>)?\\\\(([^,]+),\\\\s*']);

/* args has been renamed to info, key group 2 */
groups.push([2, '(\\\\W)(args)(\\\\W)'])

/* node::ObjectWrap was replaced with NanObjectWrap, key group 2 */
groups.push([2, '(\\\\W)(?:node\\\\:\\\\:)?(ObjectWrap)(\\\\W)']);

/* v8::Persistent was replaced with NanPersistent, key group 2 */
groups.push([2, '(\\\\W)(?:v8\\\\:\\\\:)?(Persistent)(\\\\W)']);

/* counts the number of capturing groups in a well-formed regular expression,
   ignoring non-capturing groups and escaped parentheses */
function groupcount(s) {
  var positive = s.match(/\\((?!\\?)/g),
      negative = s.match(/\\\\\\(/g);
  return (positive ? positive.length : 0) - (negative ? negative.length : 0);
}

/* compute the absolute position of each key group in the joined master RegExp */
for (i = 1, length = groups.length; i < length; i++) {
	total += groupcount(groups[i - 1][1]);
	groups[i][0] += total;
}

/* create the master RegExp, whis is the union of all the groups' expressions */
master = new RegExp(groups.map(function (a) { return a[1]; }).join('|'), 'gm');

/* replacement function for String.replace, receives 21 arguments */
function replace() {
	/* simple expressions */
      switch (arguments[groups[0][0]]) {
        case '_NAN_':
          return 'NAN_';
        case 'NODE_SET_METHOD':
          return 'NanSetMethod';
        case 'NODE_SET_PROTOTYPE_METHOD':
          return 'NanSetPrototypeMethod';
        case 'NanAsciiString':
          return 'NanUtf8String';
        case 'NanEscapeScope':
          return 'scope.Escape';
        case 'NanReturnNull':
          return 'info.GetReturnValue().SetNull';
        case 'NanReturnValue':
          return 'info.GetReturnValue().Set';
        case 'NanUcs2String':
          return 'v8::String::Value';
        default:
      }

      /* macros without arguments */
      switch (arguments[groups[1][0]]) {
        case 'NanEscapableScope':
          return 'NanEscapableScope scope'
        case 'NanReturnUndefined':
          return 'return';
        case 'NanScope':
          return 'NanScope scope';
        default:
      }

      /* TryCatch, emulate negative backref */
      if (arguments[groups[2][0]] === 'TryCatch') {
        return arguments[groups[2][0] - 1] ? arguments[0] : 'NanTryCatch';
      }

      /* NanNew("foo") --> NanNew("foo").ToLocalChecked() */
      if (arguments[groups[3][0]] === 'NanNew') {
        return [arguments[0], '.ToLocalChecked()'].join('');
      }

      /* insert warning for removed functions as comment on new line above */
      switch (arguments[groups[4][0]]) {
        case 'GetIndexedPropertiesExternalArrayData':
        case 'GetIndexedPropertiesExternalArrayDataLength':
        case 'GetIndexedPropertiesExternalArrayDataType':
        case 'GetIndexedPropertiesPixelData':
        case 'GetIndexedPropertiesPixelDataLength':
        case 'HasIndexedPropertiesInExternalArrayData':
        case 'HasIndexedPropertiesInPixelData':
        case 'SetIndexedPropertiesToExternalArrayData':
        case 'SetIndexedPropertiesToPixelData':
          return arguments[groups[4][0] - 1] ? arguments[0] : [warning1, arguments[0]].join('');
        default:
      }

     /* remove unnecessary NanScope() */
      switch (arguments[groups[5][0]]) {
        case 'NAN_GETTER':
        case 'NAN_METHOD':
        case 'NAN_SETTER':
        case 'NAN_INDEX_DELETER':
        case 'NAN_INDEX_ENUMERATOR':
        case 'NAN_INDEX_GETTER':
        case 'NAN_INDEX_QUERY':
        case 'NAN_INDEX_SETTER':
        case 'NAN_PROPERTY_DELETER':
        case 'NAN_PROPERTY_ENUMERATOR':
        case 'NAN_PROPERTY_GETTER':
        case 'NAN_PROPERTY_QUERY':
        case 'NAN_PROPERTY_SETTER':
          return arguments[groups[5][0] - 1];
        default:
      }

      /* Value conversion */
      switch (arguments[groups[6][0]]) {
        case 'Boolean':
        case 'Int32':
        case 'Integer':
        case 'Number':
        case 'Object':
        case 'String':
        case 'Uint32':
          return [arguments[groups[6][0] - 2], 'NanTo<v8::', arguments[groups[6][0]], '>(',  arguments[groups[6][0] - 1]].join('');
        default:
      }

      /* other value conversion */
      switch (arguments[groups[7][0]]) {
        case 'BooleanValue':
          return [arguments[groups[7][0] - 2], 'NanTo<bool>(', arguments[groups[7][0] - 1]].join('');
        case 'Int32Value':
          return [arguments[groups[7][0] - 2], 'NanTo<int32_t>(', arguments[groups[7][0] - 1]].join('');
        case 'IntegerValue':
          return [arguments[groups[7][0] - 2], 'NanTo<int64_t>(', arguments[groups[7][0] - 1]].join('');
        case 'Uint32Value':
          return [arguments[groups[7][0] - 2], 'NanTo<uint32_t>(', arguments[groups[7][0] - 1]].join('');
        default:
      }

      /* NAN_WEAK_CALLBACK */
      if (arguments[groups[8][0]] === 'NAN_WEAK_CALLBACK') {
        return ['template<typename T>\\nvoid ',
          arguments[groups[8][0] + 1], '(const NanWeakCallbackInfo<T> &data)'].join('');
      }

      /* use methods on NAN classes instead */
      switch (arguments[groups[9][0]]) {
        case 'NanDisposePersistent':
          return [arguments[groups[9][0] + 1], '.Reset('].join('');
        case 'NanObjectWrapHandle':
          return [arguments[groups[9][0] + 1], '->handle('].join('');
        default:
      }

      /* use method on NanPersistent instead */
      if (arguments[groups[10][0]] === 'NanMakeWeakPersistent') {
        return arguments[groups[10][0] + 1] + '.SetWeak(';
      }

      /* These return Maybes, the upper ones take no arguments */
      switch (arguments[groups[11][0]]) {
        case 'GetEndColumn':
        case 'GetFunction':
        case 'GetLineNumber':
        case 'GetOwnPropertyNames':
        case 'GetPropertyNames':
        case 'GetSourceLine':
        case 'GetStartColumn':
        case 'NewInstance':
        case 'ObjectProtoToString':
        case 'ToArrayIndex':
        case 'ToDetailString':
          return [arguments[groups[11][0] - 2], 'Nan', arguments[groups[11][0]], '(', arguments[groups[11][0] - 1]].join('');
        case 'CallAsConstructor':
        case 'CallAsFunction':
        case 'CloneElementAt':
        case 'Delete':
        case 'ForceSet':
        case 'Get':
        case 'GetPropertyAttributes':
        case 'GetRealNamedProperty':
        case 'GetRealNamedPropertyInPrototypeChain':
        case 'Has':
        case 'HasOwnProperty':
        case 'HasRealIndexedProperty':
        case 'HasRealNamedCallbackProperty':
        case 'HasRealNamedProperty':
        case 'Set':
        case 'SetAccessor':
        case 'SetIndexedPropertyHandler':
        case 'SetNamedPropertyHandler':
        case 'SetPrototype':
          return [arguments[groups[11][0] - 2], 'Nan', arguments[groups[11][0]], '(', arguments[groups[11][0] - 1], ', '].join('');
        default:
      }

      /* Automatic ToLocalChecked(), take it or leave it */
      switch (arguments[groups[12][0]]) {
        case 'Date':
        case 'String':
        case 'RegExp':
          return ['NanNew', arguments[groups[12][0] - 1], arguments[groups[12][0] + 1], '.ToLocalChecked()'].join('');
        default:
      }

      /* NanEquals is now required for uniformity */
      if (arguments[groups[13][0]] === 'Equals') {
        return [arguments[groups[13][0] - 1], 'NanEquals(', arguments[groups[13][0] - 1], ', ', arguments[groups[13][0] + 1]].join('');
      }

      /* use method on replacement class instead */
      if (arguments[groups[14][0]] === 'NanAssignPersistent') {
        return [arguments[groups[14][0] + 1], '.Reset('].join('');
      }

      /* args --> info */
      if (arguments[groups[15][0]] === 'args') {
        return [arguments[groups[15][0] - 1], 'info', arguments[groups[15][0] + 1]].join('');
      }

      /* ObjectWrap --> NanObjectWrap */
      if (arguments[groups[16][0]] === 'ObjectWrap') {
        return [arguments[groups[16][0] - 1], 'NanObjectWrap', arguments[groups[16][0] + 1]].join('');
      }

      /* Persistent --> NanPersistent */
      if (arguments[groups[17][0]] === 'Persistent') {
        return [arguments[groups[17][0] - 1], 'NanPersistent', arguments[groups[17][0] + 1]].join('');
      }

      /* This should not happen. A switch is probably missing a case if it does. */
      throw 'Unhandled match: ' + arguments[0];
}

/* reads a file, runs replacement and writes it back */
function processFile(file) {
  fs.readFile(file, {encoding: 'utf8'}, function (err, data) {
    if (err) {
      throw err;
    }

    /* run replacement twice, might need more runs */
    fs.writeFile(file, data.replace(master, replace).replace(master, replace), function (err) {
      if (err) {
        throw err;
      }
    });
  });
}

/* process file names from command line and process the identified files */
for (i = 2, length = process.argv.length; i < length; i++) {
  glob(process.argv[i], function (err, matches) {
    if (err) {
      throw err;
    }
    matches.forEach(processFile);
  });
}
`,
        "README.md": `1to2 naively converts source code files from NAN 1 to NAN 2. There will be erroneous conversions,
false positives and missed opportunities. The input files are rewritten in place. Make sure that
you have backups. You will have to manually review the changes afterwards and do some touchups.

\`\`\`sh
\$ tools/1to2.js

  Usage: 1to2 [options] <file ...>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
\`\`\`
`,
        "package.json": JSON.stringify({
          "name": "1to2",
          "version": "1.0.0",
          "description": "NAN 1 -> 2 Migration Script",
          "main": "1to2.js",
          "repository": {
            "type": "git",
            "url": "git://github.com/nodejs/nan.git"
          },
          "contributors": [
            "Benjamin Byholm <bbyholm@abo.fi> (https://github.com/kkoopa/)",
            "Mathias Küsel (https://github.com/mathiask88/)"
          ],
          "dependencies": {
            "glob": "~5.0.10",
            "commander": "~2.8.1"
          },
          "license": "MIT"
        })
      }
    },
    "node-report": {
      "CHANGES.md": `2020-07-03, Version 2.2.11
==========================

 * build: disable compiler inlining on z/OS (#146) (Gaby Baghdadi)

 * readme: add sunset info (#144) (Gireesh Punathil)


2020-01-12, Version 2.2.10
==========================

 * Add hostname to Machine line on AIX (#141) (Richard Lau)


2019-10-31, Version 2.2.9
=========================

 * Apply EBCDIC to ASCII conversions only if node wasn't built with -qASCII (#138) (Gaby Baghdadi)


2019-07-10, Version 2.2.8
=========================

 * Fix npm audit warning (#136) (Richard Lau)

 * Update supported Node.js versions in README.md (#134) (Richard Lau)


2019-06-06, Version 2.2.7
=========================

 * Add support for z/OS (#129) (Gaby Baghdadi)


2019-04-02, Version 2.2.6
=========================

 * Restore uppercase C++ method names (Richard Lau)


2019-03-31, Version 2.2.5
=========================

 * Remove \`setCoreDump\` (Richard Lau)

 * Use nan helpers to set exports (Richard Lau)


2019-03-17, Version 2.2.4
=========================

 * Fix use of deprecated methods removed in V8 7.0 (Richard Lau)


2019-03-05, Version 2.2.3
=========================

 * Fix CI failures on ubuntu1804 (Richard Lau)

 * chore: update dependencies (Richard Lau)


2019-01-22, Version 2.2.2
=========================

 * Fix use of deprecated methods removed in V8 7.0 (Richard Lau)

 * Fix build on Windows with libuv 1.22 and later (Richard Lau)

 * Rename LICENCE.md to LICENSE.md (Julian Alimin)

 * Update README.md to correct code example (Manusaporn Treerungroj)

 * Add event loop thread times to node-report on OSX, which doesn't support RUSAGE_THREAD. (Howard Hellyer)

 * Replace node::signo_string with local implementation (Richard Chamberlain)


2017-09-26, Version 2.2.1
=========================

 * Update README to show support for Node.js 8 (Richard Chamberlain)

 * Remove use of std::map to sort version strings (Richard Chamberlain)

 * Restructure node_report.cc, move functions to utilities.cc (Richard Chamberlain)

 * Fix compile and linking issues on Alpine Linux (Richard Chamberlain)


2017-05-30, Version 2.2.0
=========================

 * Additional information for libuv handles (Richard Lau)

 * node_report.cc: Fix CreateMessage call (Howard Hellyer)

 * Allow Error object to be passed to node-report (Howard Hellyer)

 * windows: fix compile time error on mktime (Howard Hellyer)

 * report: add average CPU consumption (Bidisha Pyne)

 * Fix the use of %p to format handle pointers on non-Windows platforms. (Howard Hellyer)

 * report: add word-size of the process (LAKSHMI SWETHA GOPIREDDY)


2017-03-23, Version 2.1.2
=========================

 * Report compile time and runtime glibc version (Richard Lau)

 * Improve useability of node-report demos (Richard Chamberlain)

 * Fix return code from uncaught exception handler (Richard Chamberlain)

 * Increase tap timeout for CI testing (Richard Chamberlain)

 * test: Move OS version tests to common.js (Richard Lau)

 * docs: update platform support (Richard Lau)

 * smartos: enable node-report on SmartOS (Howard Hellyer)


2017-02-22, Version 2.1.1
=========================

 * windows: fix reporting of machine name (Richard Chamberlain)

 * test: fix test-api-getreport.js (Richard Lau)

 * aix: improve readability of os version (Richard Lau)


2017-02-13, Version 2.1.0
=========================

 * Provide getReport API to return the contents of node-report. (Howard Hellyer)


2017-02-09, Version 2.0.0
=========================

 * mac: Fix compilation errors (Howard Hellyer)

 * Rename nodereport module to node-report (Richard Chamberlain)

 * Fix source directory for install target (Richard Lau)

 * aix: skip command line check for test-fatal-error (Richard Lau)

 * Add the list of library files loaded by the process to nodereport. (Howard Hellyer)

 * docs: AIX supports triggering on USR2 signal (Richard Lau)

 * Fix behaviour on exception to match node default (Richard Chamberlain)

 * Adds the command line used to start the node process to nodereport. (Howard Hellyer)

 * Opt-in hooks and signal by default (Richard Chamberlain)

 * Fix for clang warning: libstdc++ is deprecated (Richard Chamberlain)


2016-12-12, Version 1.0.7
=========================

 * Fix version reporting in NodeReport section (Richard Lau)

 * Fix fprintf calls on Windows (Richard Lau)


2016-11-18, Version 1.0.6
=========================

 * Fix test-exception.js for PPC (Richard Lau)

 * Improve README.md (Jeremiah Senkpiel)

 * Improvement to Windows version reporting (Richard Lau)

 * Convert testcases to use tap (Richard Lau)


2016-11-10, Version 1.0.5
=========================

 * Fix for failure in fatal error (OOM) test (Richard Chamberlain)

 * Add support for nodereport on AIX (Richard Chamberlain)

 * Deleting AUTHORS file. (Richard Chamberlain)

 * Correct Javascript to JavaScript in README.md (Richard Chamberlain)

 * Correct upper-case NPM, should be lower-case (Richard Chamberlain)

 * Remove specific URLs for NPM (Richard Chamberlain)

 * Add MAINTAINER.md file to document NPM release procedure (Richard Chamberlain)

 * Set/correct package metadata in package.json (Richard Chamberlain)

 * README documentation improvements (Richard Chamberlain)

 * .gitignore the test autorun log file (Sam Roberts)

 * test: require this module using correct syntax (Sam Roberts)

 * .npmignore: do not pack unnecessary files (Sam Roberts)

 * .gitignore: ignore npm ephemera and node reports (Sam Roberts)

 * Need to define __STDC_FORMAT_MACROS for some glibc versions (Richard Chamberlain)


2016-10-28, Version 1.0.4
=========================

 * First release!
`,
      "LICENSE.md": `The MIT License (MIT)
=====================

Copyright (c) 2016 node-report contributors
--------------------------------------------------

*nodereport contributors listed in <https://github.com/nodejs/nodereport/blob/master/package.json>*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
`,
      "README.md": `# node-report

Delivers a human-readable diagnostic summary, written to file.

The report is intended for development, test and production
use, to capture and preserve information for problem determination.
It includes JavaScript and native stack traces, heap statistics,
platform information and resource usage etc. With the report enabled,
reports can be triggered on unhandled exceptions, fatal errors, signals
and calls to a JavaScript API.

Supports Node.js versions 8, 10 and 12 on AIX, Linux, macOS, SmartOS and
Windows. Node.js 12 and later contain similar functionality in the built-in
[Diagnostic Report][] feature.

NOTE: This repo will be archived and the npm package will be sunset
in lieu of [Diagnostic Report][], when Node.js 10 enters End-of-Life.

## Usage

\`\`\`bash
npm install node-report
node -r node-report app.js
\`\`\`
A report will be triggered automatically on unhandled exceptions and fatal
error events (for example out of memory errors), and can also be triggered
by sending a USR2 signal to a Node.js process (not supported on Windows).

A report can also be triggered via an API call from a JavaScript
application.

\`\`\`js
var nodereport = require('node-report');
nodereport.triggerReport();
\`\`\`
The content of a report can also be returned as a JavaScript string via an
API call from a JavaScript application.

\`\`\`js
var nodereport = require('node-report');
var report_str = nodereport.getReport();
console.log(report_str);
\`\`\`
The API can be used without adding the automatic exception and fatal error
hooks and the signal handler, as follows:

\`\`\`js
var nodereport = require('node-report/api');
nodereport.triggerReport();
\`\`\`

Content of the report consists of a header section containing the event
type, date, time, PID and Node version, sections containing JavaScript and
native stack traces, a section containing V8 heap information, a section
containing libuv handle information and an OS platform information section
showing CPU and memory usage and system limits. An example report can be
triggered using the Node.js REPL:

\`\`\`
\$ node
> nodereport = require('node-report')
> nodereport.triggerReport()
Writing Node.js report to file: node-report.20161020.091102.8480.001.txt
Node.js report completed
>
\`\`\`

When a report is triggered, start and end messages are issued to stderr
and the filename of the report is returned to the caller. The default filename
includes the date, time, PID and a sequence number. Alternatively, a filename
can be specified as a parameter on the \`triggerReport()\` call.

\`\`\`js
nodereport.triggerReport("myReportName");
\`\`\`

Both \`triggerReport()\` and \`getReport()\` can take an optional \`Error\` object
as a parameter. If an \`Error\` object is provided, the message and stack trace
from the object will be included in the report in the \`JavaScript Exception
Details\` section.
When using node-report to handle errors in a callback or an exception handler
this allows the report to include the location of the original error as well
as where it was handled.
If both a filename and \`Error\` object are passed to \`triggerReport()\` the
\`Error\` object should be the second parameter.

\`\`\`js
try {
  process.chdir('/foo/foo');
} catch (err) {
  nodereport.triggerReport(err);
}
  ...
});
\`\`\`

## Configuration

Additional configuration is available using the following APIs:

\`\`\`js
var nodereport = require('node-report/api');
nodereport.setEvents("exception+fatalerror+signal+apicall");
nodereport.setSignal("SIGUSR2|SIGQUIT");
nodereport.setFileName("stdout|stderr|<filename>");
nodereport.setDirectory("<full path>");
nodereport.setVerbose("yes|no");
\`\`\`

Configuration on module initialization is also available via environment variables:

\`\`\`bash
export NODEREPORT_EVENTS=exception+fatalerror+signal+apicall
export NODEREPORT_SIGNAL=SIGUSR2|SIGQUIT
export NODEREPORT_FILENAME=stdout|stderr|<filename>
export NODEREPORT_DIRECTORY=<full path>
export NODEREPORT_VERBOSE=yes|no
\`\`\`

## Examples

To see examples of reports generated from these events you can run the
demonstration applications provided in the node-report github repository. These are
Node.js applications which will prompt you to trigger the required event.

1. \`api.js\` - report triggered by JavaScript API call.
2. \`exception.js\` - report triggered by unhandled exception.
3. \`fatalerror.js\` - report triggered by fatal error on JavaScript heap out of memory.
4. \`loop.js\` - looping application, report triggered using kill \`-USR2 <pid>\`.

## License

[Licensed under the MIT License.](LICENSE.md)

[Diagnostic Report]: https://nodejs.org/dist/latest-v12.x/docs/api/report.html
`,
      "api.node": Buffer.from("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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVUiJ5UFXQVZBVUFUU0iB7EgHAABNic5NicdJicxIiwU0ngAASIsASIlF0IoFr60AAITAD4XPBQAASIm94Pj//4m19Pj//0iJldj4///GBYytAAABSI2dkPj//zH2SInf6EF9AABIjbWg+P//SInf6D59AADoG30AAEGJxQ9XwA8pRbAPKUWgDylFkA8pRYDGRcAATYX/dCVBgD8AdB9IjRU0hgAASI19gL5BAAAAMcBMifnobH0AAOnkAAAASI09TKgAAOhzfQAASI0VCYYAAEiFwHQcSI0NNKgAAEiNfYC+QQAAADHA6Dh9AADpsAAAAEiNDeSFAABMibX4+P//Qb5BAAAATIml6Pj//0yNZYC+QQAAADHATInn6AV9AACLHb+sAAD/w4kdt6wAAEyJ5+gHfQAASI18BYBJKca5bAcAAAONtPj//0SLhbD4//9B/8BEi42s+P//RIuVqPj//0SLnaD4//9Ei6Wk+P//SIPsCEiNFW+FAAC4AAAAAEyJ9kyLtfj4//9TQVVBU0FUTIul6Pj//0FS6Id8AABIg8QwSI296P7//0iLBWGcAABIjUgYSImNSP3//0iNnVD9//9Ig8BASImF6P7//0iJ3ujoegAASMeFcP///wAAAADHhXj/////////TIstSJwAAEmNRRhIiYX4+P//SImFSP3//0mDxUBMia3o/v//SInf6Ks1AABIjTXyhAAASI19gLoGAAAA6Bh8AABIiw3HmwAAhcAPhC0BAABIjTXVhAAASI19gLoGAAAA6PR7AACFwHR8SI09B6cAAOjeewAASIXAdHdIjZ0A+f//vkEEAABIid/ogXoAAEiNFZ6EAABIjQ3bpgAATI0Fl4QAAEyNTYC+QQQAADHASInf6IV7AABIg73I/f//AHU/SI010o8AAEiNvQD5///olnoAAEiJhcj9//9IhcAPhZwBAADrGkiLDRubAADpjAAAAEiDvcj9//8AD4RgAQAASIuFSP3//0iLQOhIjbwFSP3//4u0BWj9//+DzgTouHkAAEiDvcj9//8AD4SBAQAASIs90ZoAAEiNNT+EAAC6IQAAAOhwLgAASInDSI19gOgAewAASInfSI11gEiJwuhVLgAASI01NYQAALoBAAAASInH6EEuAABIiw2SmgAASIO9yP3//wBMjY1I/f//TA9EyUyNRYBIi73g+P//i7X0+P//SIuV2Pj//0yJ4UiNhaD4//9QQVbojQIAAEiDxBBIi53I/f//SIXbTI2lUP3//3ROSIuFUP3//0yJ5/9QMEGJxkiJ3+hueQAAhcB1EEjHhcj9//8AAAAARYX2dCJIi4VI/f//SItA6EiNvAVI/f//i7QFaP3//4POBOi6eAAASIs94ZkAAEiNNXODAAC6GQAAAOiALQAATYX/D4QuAQAASI0VqYIAAEiNTYC+QQAAADHATIn/6OF5AADpDwEAAEiNNTOOAABIjX2A6Pp4AABIiYXI/f//SIXAD4SA/v//x4XY/v//EAAAAEiLhUj9//9Ijb1I/f//SAN46DH26Dd4AABIg73I/f//AA+Ff/7//0iNPcCkAADol3kAAEmJxkiLPUGZAABIjTVvggAAuiUAAADo4CwAAEiJw0yNfYBMif/obXkAAEiJ30yJ/kiJwujDLAAATYX2dDRIjTViggAAugwAAABIicfoqiwAAEiJw0yNNWCkAABMiffoNHkAAEiJ30yJ9kiJwuiKLAAASI01O4IAALoJAAAASInH6HYsAABIicPo2HcAAIswSInf6FB3AABIjTUfggAAugIAAABIicfoUCwAAEyNpVD9//9Ii4X4+P//SImFSP3//0yJrej+//9IiwW9mAAASIPAEEiJhVD9//9Ii53I/f//SIXbdB9MiefoniMAAEiJ3+imdwAAhcB1C0jHhcj9//8AAAAAgL3g/v//AHQRSIu9kP3//0iF/3QF6Bd3AACAveH+//8AdBFIi724/f//SIX/dAXo/XYAAEyJ5+jFdgAASIs1NJgAAEiDxghIjb1I/f//6H52AABIjb3o/v//6Mx2AABIiwVJmAAASIsASDtF0HUSSIHESAcAAFtBXEFdQV5BX13D6OF2AACQVUiJ5UFXQVZBVUFUU0iB7IgJAABMictNicZJic9JidSJtTD3//9Iib1A9///SIsF9JcAAEiLAEiJRdDoJHcAAImFLPf//0iLBdOXAABIg8AQSImFWPb//0yNrVj2//8x9kyJ7+gjdgAASMeF4Pb//wAAAADHhej2////////SIsDSItw6EgB3kyJ7+gIdgAASI013IAAALpRAAAASInf6MwqAABIjTUagQAAulEAAABIid/ouCoAAEiNNViBAAC6CAAAAEiJnUj3//9Iid/onSoAAEiJw0yJ5+gudwAASInfTInmSInC6IQqAABIjTUtgQAAug0AAABIicfocCoAAEiJw0yJ/+gBdwAASInfTIn+SInC6FcqAABIjTUOgQAAugIAAABIicfoQyoAAE2F9nRFSI01+IAAALoKAAAASIu9SPf//+gmKgAASInDTIn36Ld2AABIid9MifZIicLoDSoAAEiNNe1/AAC6AQAAAEiJx+j5KQAAQb9sBwAASItFGItIFEQB+USLQBBB/8BEi0gMRItQCIsYRItYBEiD7AhIjRWVgAAATI21UPf//75AAAAAMcBMifdTQVNBUugydgAASIPEIEiNNYyAAAC6EgAAAEyLrUj3//9Mie/ojykAAEiJw0yJ9+ggdgAASInfTIn2SInC6HYpAABMjSVWfwAAugEAAABIicdMieboXykAAEQDPWylAABEiwVhpQAAQf/ARIsNU6UAAESLFUilAABEix09pQAAix0zpQAASIPsCL5AAAAAMcBMifdIjRXqfwAARIn5U0FTQVLolXUAAEiDxCBIjTUCgAAAuhIAAABMie/o+SgAAEiJw0yJ9+iKdQAASInfTIn2SInC6OAoAAC6AQAAAEiJx0yJ5ujQKAAASI012H8AALoMAAAATInv6LwoAABIiceLtSz3///omnMAAEiJw0iLA0iLcOhIAd5MjbXQ9///TIn36CpzAABIizXrlAAATIn36BVzAABIiwi+CgAAAEiJx/9ROEGJx0yJ9+iAcwAAQQ++90iJ3+ggcwAASInf6B5zAACKBTikAACoAXQVSIsFNaQAAEyLpUD3//9IhcB1NusR0OgPtsBMi6VA9///SIXAdSNIjT0HpAAASI0NUH0AADH2SMfC/////0UxwOiHcgAAhcB0W0iNNUaAAAC6DgAAAEiLvUj3///o6ycAAIoNzaMAAInK0Or2wQFIjTXAowAASA9FNcejAAAPttJID0UVtKMAAEiJx+i8JwAASI01nH0AALoBAAAASInH6KgnAABMi61I9///TInv6GFyAABIjTV5fQAAugEAAABMie/ohScAAIoNT6MAAInK0Or2wQFIjTVCowAASA9FNUmjAAAPttJID0UVNqMAAEiJx+hWJwAASYtFAEiLcOhMAe5Mjb3Q9///TIn/6NRxAABMizWVkwAATIn/TIn26LxxAABIiwi+CgAAAEiJx/9ROInDTIn/6ChyAAAPvvNMie/oyXEAAEyJ7+jHcQAASI01UX8AALoVAAAATInv6OsmAABIjTVTfwAAugYAAABIicfo1yYAAEiNNUZ/AAC6GQAAAEiJx+jDJgAASI01TH8AALoHAAAASInH6K8mAABIjTVAfwAAugIAAABMie/omyYAAL5AAAAASInH6IZxAABIjTUifwAAugQAAABIicfoeiYAAEiNNRN/AAC6AQAAAEiJx+hmJgAASInDSIsDSItw6EgB3kyNvdD3//9Mif/o4nAAAEyJ/0yJ9ujRcAAASIsIvgoAAABIicf/UThBicZMif/oPHEAAEEPvvZIid/o3HAAAEiJ3+jacAAASI290Pf//+jAcgAAhcAPiPQBAABIjTWZfgAAug0AAABIi71I9///6OYlAABIicNMjbXQ9///TIn36HByAABIid9MifZIicLoxiUAAEyNNW9+AAC6AQAAAEiJx0yJ9uivJQAASInDTI290Pn//0yJ/+g5cgAASInfTIn+SInC6I8lAAC6AQAAAEiJx0yJ9uh/JQAASInDTI210Pr//0yJ9+gJcgAASInfTIn2SInC6F8lAABIjTU/ewAAugEAAABIicfoSyUAAEiNNfZ9AABIx8f+////6MxwAABIicNIhdsPhKIAAABIjTXsfQAAuggAAABIi71I9///6BQlAABJicb/00iJw0iJ3+igcQAATIn3SIneSInC6PYkAABIjTWPfQAAugEAAABIicfo4iQAAEiJw0iLA0iLcOhIAd5MjbWQ9///TIn36F5vAABIizUfkQAATIn36ElvAABIiwi+CgAAAEiJx/9ROEGJx0yJ9+i0bwAAQQ++90iJ3+hUbwAASInf6FJvAABIjTVTfQAAugoAAABIi71I9///6HIkAABIicNMjbXQ+P//TIn36PxwAABIid9MifZIicLoUiQAAEiNNft8AAC6AQAAAEiJx+g+JAAASInDTI210Pv//0yJ9+jIcAAASInfTIn2SInC6B4kAABIjTX+eQAAugEAAABIicfoCiQAAEiLnUj3//9Iid/ow24AAEiNNRB7AAC6UQAAAEiJ3+jnIwAASI01u3wAALpTAAAASInf6NMjAACLnTD3//+D+wQPhzkCAACJ2EiNDc8RAABIYwSBSAHI/+DoYXAAAEmJxk2F9g+E8AEAAEyJ50yJ9uiAbQAATIn36DRvAABMiffo/m8AAEiNvZD3//++QAAAAEyJ8ugebwAASIXAdDxIjZ2Q9///Zg8fRAAASInf6PRvAABIi71I9///SIneSInC6EYjAAC+QAAAAEiJ30yJ8ujibgAASIXAddFMiffoyW4AAOmZAQAASMeFqPf//wAAAABIx4WQ9///AAAAAEiNtZD3//9IibWg9///SIm1mPf//0iNldD3//9MjYUA9///uf8AAABMiefojGwAAIO9CPf//wUPh/YAAABIjTVOfAAAuhUAAABIi71I9///6LkiAABJicaLhQj3//9IjQ2ZmQAATIs8wUyJ/+g5bwAATIn3TIn+SInC6I8iAABIjTUifAAAugIAAABIicfoeyIAAIP7Aw+EuAAAAL7/AAAAun8AAABMiefobGsAAEmJxk2F9g+EsQAAAEyJ9+iQbAAAhcAPjrkAAAAx22aQTIu9APf//0yJ90yJ5ona6HZsAABJOd92F0iLjN3Q9///6w9mZmZmLg8fhAAAAAAAMclIi71I9///SInGidroTSQAAEj/w0yJ9+g2bAAASJhIOcN8q+teSI01THsAALoZAAAA60RIjTVxewAAuiAAAABIi71I9///6MMhAACD+wMPhUj///9IjTVxewAA6xVIjTXZegAAujoAAADrDEiNNZp7AAC6PwAAAEiLvUj3///oiyEAAEiLnUj3//9Iid/oRGwAAEiNNZF4AAC6UQAAAEiJ3+hoIQAASI01DnwAALpTAAAASInf6FQhAABIjb3Q9///vgABAADoxWwAAInDhdt+IoP7An9YSI01UnwAALoTAAAASIu9SPf//+ggIQAA6ewBAABIjTUVfAAAuh8AAABIi71I9///6AMhAABIiceJ3ujlawAASI012XYAALoBAAAASInH6OUgAADpsQEAAInYSIPA/kiJhTD3//9MjSUKewAARTH/6zdIi50Q9///SInf6FRtAABIi71I9///SIneSInC6KYgAABIg70A9///AA+FsQAAAOn4AAAADx8ATouE/eD3//++QAAAADHASI2dkPf//0iJ30yJ4kSJ+ejwbAAASInf6ABtAABIi71I9///SIneSInC6FIgAABKi7z94Pf//0iNtQD3///ozGsAAIXAD4SbAAAASIu9EPf//0iF/3Q5MfYx0jHJ6INrAABIicNIhdsPhEz///9Iid/op2wAAEiLvUj3//9Iid5IicLo+R8AAEiJ3+i1awAASIO9APf//wB0TLoCAAAASIu9SPf//0iNNQl7AADozx8AAEiJw0yLtQD3//9MiffoWWwAAEiJ30yJ9kiJwuivHwAAugEAAABIicdIjTXYegAA6JsfAABIi51I9///SIsDSItw6EgB3kyNtfD2//9MiffoE2oAAEyJ90iLNdGLAADo/mkAAEiLCL4KAAAASInH/1E4QYnFTIn36GlqAABBD771SInf6AlqAABIid/oB2oAAEn/x0w5vTD3//8PhZ/+//9Ii71I9///6OtpAABIi10QSIXbTIu9QPf//w+EBQEAAEiJ3+hdaQAAhMAPhPUAAABIjTUUdgAAulEAAABMi6VI9///TInn6OQeAABIjTUXegAAulMAAABMiefo0B4AAEyJ/0iJ3ujNaAAASInH6DFpAABIjb3Q9///SInG6L4jAABMi7XY9///TIn36DtrAABMiedMifZIicLokR4AAEiNNSR4AAC6AgAAAEiJx+h9HgAASInf6INoAABJicZNhfYPhEQMAABMiffopWgAAIXAfjsx22ZmLg8fhAAAAAAATIn3TIn+idrojWgAADHJSIu9SPf//0iJxona6IAgAAD/w0yJ9+hqaAAAOcN80kiLvdj3//9IjYXg9///SDnHdAXozmkAAEiLnUj3//9Iid/ow2gAAEyNtdD3//9MiffoFmcAAEyJ/0yJ9uinZwAASI019nQAALpRAAAASInf6M0dAABIjTWOeQAAulIAAABIid/ouR0AAEiNvZD3///oAWcAAEyJ/+hxZwAASIXATYn8D4Q0AQAARTHtZg8fRAAATInnSI21kPf//0yJ6uhWZwAAuhIAAABIi51I9///SInfSI01g3kAAOhjHQAASYnGTIu9kPf//0yJ/+jtaQAATIn3TIn+SInC6EMdAAC6EgAAAEiJ30iNNWJ5AADoLx0AAEiLtZj3//9Iid/o8GQAALoaAAAASInfSI01UnkAAOgMHQAASIu1sPf//0iJ3+jNZAAAuhUAAABIid9IjTVKeQAA6OkcAABIi7Wo9///SAO1oPf//0iJ3+ijZAAAug4AAABIid9IjTU2eQAA6L8cAABIi7Wg9///SInf6IBkAAC6EwAAAEiJ30iNNSJ5AADonBwAAEiLtaj3//9Iid/oXWQAALoGAAAASInfSI01E3kAAOh5HAAASf/FTInn6DpmAABJOcUPgtX+//9IjTX6eAAAuhoAAABIi51I9///SInf6EocAABIi7XQ9///SInf6AtkAABIjTXreAAAuiQAAABIid/oJxwAAEiLteD3//9Iid/o6GMAAEiNNe14AAC6HwAAAEiJ3+gEHAAASIu18Pf//0iJ3+jFYwAASI016ngAALokAAAASInf6OEbAABIi7Xo9///SInf6KJjAABIjTXseAAAuhsAAABIid/ovhsAAEiLtfj3//9Iid/of2MAAEiNNY9xAAC6AQAAAEiJ3+ibGwAASInf6FtmAABIjb349v//6DVoAABIi7349v//SIs1sZcAAOj8ZgAAZg9XyfIPwsgA8g8QFRNwAABmD1TRZg9VyGYPVtFmDymVMPf//0iNNWRyAAC6UQAAAEiJ3+g7GwAASI01cXgAALpSAAAASInf6CcbAABIjTWweAAAuh4AAABIid/oExsAAEiNtdD3//8x/+gFZwAAhcAPhUUCAABIi43Q9///RIuF2Pf//0yNNZd4AABMjaWQ9///vkAAAAAxwEyJ50yJ8uhTZwAASI01gHgAALoSAAAATIutSPf//0yJ7+i0GgAASInDTInn6EVnAABIid9MieZIicLomxoAAEyNPV94AAC6BQAAAEiJx0yJ/uiEGgAASIuN4Pf//0SLhej3//++QAAAADHATInnTIny6OhmAABIjTUueAAAuhQAAABMie/oUBoAAEiJw0yJ5+jhZgAASInfTInmSInC6DcaAAC6BQAAAEiJx0yJ/ugnGgAA8kgPKoXQ9///8g8qjdj3///yDxAVxm4AAPIPWcryD1jID1fA8kgPKoXg9///8g9YwQ9XyfIPKo3o9///8g9ZyvIPWMjyD16NMPf///IPWQ2TbgAA8g8RjUD3//9IjTWqdwAAuh0AAABMie/otxkAAEiJx/IPEIVA9///6I1kAABIjTWkdwAAugEAAABIicfokxkAAEiNNZJ3AAC6HgAAAEyJ7+h/GQAASIu18Pf//0jB5gpMie/oPGEAAEiNNYp3AAC6FgAAAEyJ7+hYGQAASIu1GPj//0iJx+g7ZAAASI01fncAALoQAAAASInH6DUZAABIi7UQ+P//SInH6BhkAABIjTVsdwAAuhIAAABIicfoEhkAAEiNNWt3AAC6GAAAAEyJ7+j+GAAASIu1KPj//0iJx+jhYwAASI01YXcAALoHAAAASInH6NsYAABIi7Uw+P//SInH6L5jAABIjTVGdwAAugcAAABIicfouBgAAMeFKPf//woAAADoD2UAAEiJx+gBZQAASI2VAPf//0iNjSj3//++AwAAAInH6C9lAACFwA+FegEAAEiNNQF3AAC6IwAAAEyLrUj3//9Mie/oZBgAAIuNAPf//0SLhQT3//9MjTX9dgAATI2lkPf//75AAAAAMcBMiedMifLou2QAAEiNNeh1AAC6EgAAAEyJ7+gjGAAASInDTInn6LRkAABIid9MieZIicLoChgAAEyNPc51AAC6BQAAAEiJx0yJ/ujzFwAAi40I9///RIuFDPf//75AAAAAMcBMiedMifLoWGQAAEiNNZ51AAC6FAAAAEyJ7+jAFwAASInDTInn6FFkAABIid9MieZIicLopxcAALoFAAAASInHTIn+6JcXAADyDyqFAPf///IPKo0E9///8g8QFTdsAADyD1nK8g9YyA9XwPIPKoUI9///8g9YwQ9XyfIPKo0M9///8g9ZyvIPWMjyD16NMPf///IPWQ0FbAAA8g8RjTD3//9IjTUcdQAAuh0AAABMie/oKRcAAEiJx/IPEIUw9///6P9hAABIjTUWdQAAugEAAABIicfoBRcAAEiLnUj3//9IiwNIi3DoSAHeTI218Pb//0yJ9+h9YQAATIs9PoMAAEyJ90yJ/uhlYQAASIsIvgoAAABIicf/UThBicRMiffo0GEAAEEPvvRIid/ocGEAAEiJ3+huYQAASInf6GZhAABMjTWzbQAAulEAAABIid9MifbohxYAAEiNNe5tAAC6UgAAAEiJ3+hzFgAASI01LW4AALoaAAAASInf6F8WAABIiwNIi0DouU////8jTAMIg8kgiUwDCEiLA0iLQOhIx0QDGAcAAABIjTUNbgAAugUAAABIid/oJBYAAEiLCEiLSehIx0QIGAoAAABIjTXvbQAAugQAAABIicfoABYAAEiLCEiLSehIx0QIGBQAAABIjTXQbQAAugcAAABIicfo3BUAAEiNNcRtAAC6BwAAAEiJx+jIFQAASYnFSYtFAEiLcOhMAe5MjaXQ9///TInn6ENgAABMiedMif7oMmAAAEiLCL4KAAAASInH/1E4QYnHTInn6J1gAABBD773TInv6D1gAABMie/oO2AAAOg6YgAASI01V1QAAEiJx0iJ2ui+YgAAulEAAABIid9MifboTBUAAEiNNfpzAAC6UgAAAEiJ3+g4FQAASI01OXQAALoXAAAASInf6CQVAABMiy3tgQAASYtFAEiLGEiF23RjQb4IAAAATI0962oAAA8fQAC6AgAAAEiLvUj3//9IjTUNdAAA6OgUAABJicRIid/oeWEAAEyJ50iJ3kiJwujPFAAAugEAAABIicdMif7ovxQAAEmLRQBKixwwSYPGCEiF23WuSLv/////////f0iNNfZ0AAC6QwAAAEiLvUj3///ojBQAAEnHxmD///9MjSWOiAAATI290Pf//w8fgAAAAABDi7wmqAAAAEyJ/uhaYAAAhcB0DEmDxhB15ukrAQAAkLoCAAAASIu9SPf//0iNNV1zAADoOBQAAEmJx02J5U+LpCagAAAATInn6L5gAABMif9MieZIicLoFBQAALoBAAAASInHSI01tWwAAOgAFAAASIuN0Pf//0g52XUVuhAAAABIi71I9///SI01fnQAAOsyvkAAAAAxwEyNvZD3//9Mif9IjRV1dAAA6EZgAABMif/oVmAAAEiLvUj3//9Mif5IicLoqBMAAEiLjdj3//9IOdlNiex1K7oRAAAASIu9SPf//0iNNTt0AADogRMAAEyNvdD3//9Jg8YQD4UA////60i+QAAAADHATI29kPf//0yJ/0iNFR10AADo1V8AAEyJ/+jlXwAASIu9SPf//0yJ/kiJwug3EwAATI290Pf//0mDxhAPhbb+//9IjTXucwAAuhIAAABIi71I9///6A4TAAAx/+h9XgAASYnETYXkdG27AQAAAEyNLRNyAABMjT3TaAAAZmZmLg8fhAAAAAAAugIAAABIi71I9///TInu6MwSAABJicZMiefoXV8AAEyJ90yJ5kiJwuizEgAAugEAAABIicdMif7ooxIAAInf6BJeAABJicT/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0EiJ3+ipRwAASI29wPv//0iJxuh4AgAASInf6IZHAABIjb2w9///SInG6GECAABIid/oaUcAAEGJxEiJ3+h8RwAAQYnHTYXtdFBIjRVtVwAARImlbPf//0WJ/EyNvXD3//++QAAAADHATIn/i41o9///TYno6IpJAABMif/omkkAAEyJ90yJ/kWJ50SLpWz3//9IicLo5vz//0iJ3+gWRwAAhMB0IEiJ3+jsRgAAhcB0YkiNNSBXAAC6CwAAAEyJ9+n1AAAAg73A+///AE2J9XRySInf6NJGAABBicZIi53I+///SInf6DBJAABMie9Iid5IicLohvz//0WE9g+EqQAAAEiNNdtWAAC6EAAAAOmkAAAASI01sVYAALoKAAAATIn36Fj8//9IicdEieboOUcAAEiNNZ1WAAC6AQAAAEiJx+tKSIuduPf//0iJ3+jJSAAATInvSIneSInC6B/8//9IjR1vVgAAugEAAABIicdIid7oCPz//0iJx0SJ5ujpRgAAugEAAABIicdIid7o7fv//0iJx0SJ/ujORgAASI01wlEAALoBAAAA631IjTVDVgAAugIAAABIicfowPv//0mJxkiLnbj3//9Iid/oSkgAAEyJ90iJ3kiJwuig+///SI0d8FUAALoBAAAASInHSIne6In7//9IicdEieboakYAALoBAAAASInHSIne6G77//9IicdEif7oT0YAAEiNNR5RAAC6AgAAAEiJx+hP+///SIu9uPf//0iNhcD3//9IOcd0Bej7RgAASIu9yPv//0iNhdD7//9IOcd0BejjRgAASIsF0GcAAEiLAEg7RdB1EkiBxHgIAABbQVxBXUFeQV9dw+hoRgAADx+EAAAAAABVSInlQVdBVlNIg+wYSYn2SIn7xwMAAAAASI1DEEiJQwjockQAAEiNfdBIicbo1kMAAE2F9nR76FxEAABIicfobEQAAEyJ90iJxugDRQAASYnGTYX2dFtMiffo+UQAAI0MQIP5/n5fRI18QAFBgf8BBAAAchFJY//oi0YAAEiJQwhIhcB0X+gNRAAASItTCEUxwEG5CgAAAEyJ90iJxkSJ+ei4RAAAiQNIi0sISJjGBAEASI190OhTQwAASIPEGFtBXkFfXcNIjT2cVAAASI01oFQAAEiNDalUAAC6dAQAAOhdRQAASI09fVQAAEiNNYFUAABIjQ2ZVAAAuncEAADoPkUAAGZmZi4PH4QAAAAAAFVIieVBV0FWQVRTSIPsEEiJ++jNRAAASIsFUmYAAEiDwBBIiQNIjXtgSMdDUAAAAABIx0NIAAAAAEjHQ0AAAAAAvjMBAADo7UQAAEyNcwhMjX3YTIn/TIn26JJEAABIizXjZQAATIn/6P9DAABBicRMif/ofkQAAEWE5HRATI192EyJ/0yJ9uhkRAAASIs1tWUAAEyJ/+jXQwAASImDgAAAAEyJ/+hMRAAASIu7gAAAAEiLB/9QOIiDkgEAAEiLAzH2ugAQAABIid//UBhIg8QQW0FcQV5BX13DkJCQkJCQVUiJ5UFWU78wAAAA6DtEAABIiQXIdAAADygFsU0AAA8pBap0AABIuS5qcyB2ZXJzSIlIGEi5aW5lIE5vZGVIiUgQSLlvIGRldGVybUiJSAhIjTV5dAAASLlVbmFibGUgdEiJCMdAIGlvbgrGQCQASIsd0mQAAEyNNbO0//9Iid9MifLo1kMAAEjHBWV0AAAAAAAASMcFUnQAAAAAAABIxwU/dAAAAAAAAEiNNTh0AABIid9MifJbQV5d6Z9DAACQVUiJ5UFXQVZBVUFUU0iB7JgEAABJif1IiwXaZAAASIsASIlF0Oi+QQAASI29WPv//0iJxugfQQAASYtFAEiLCEyLcQgPV8APKUWwDylFoA8pRZDGRcAADylFgItIEIXJfgZIi1AI6wtIixBIi1IISIPCWEiLEonWg+YDSIP+AXVsSItS/w+3UguD+j93X4XJD47OAAAASItwCEiNvXD7///oqvz//4O9cPv//z8Pj9UAAABIi414+///SI0VuEwAAEiNfYC+QQAAADHA6PNDAABIi714+///SI2FgPv//0g5xw+FFQEAAOkVAQAAhcl+FEiLeAgx2+iaQQAAhMB1H+lAAQAASIsASIt4CEiDx1gx2+h/QQAAhMAPhCYBAABJi0UAOVgQfh9Mi0gIidhIweADSSnB9gUkbgAACA+FDwEAAOlWAQAASIsATItICEmDwVj2BQduAAAID4XyAAAA6TkBAABIiwBIi3AISIPGWEiNvXD7///o1fv//4O9cPv//z8Pjiv////oW0AAAEiNvUD7//9IicbovD8AAOhHQAAASYnH6D9AAABIjTV0VwAAMdK5/////0iJx+gdQAAASYnETYXkD4QLAQAATInn6IFAAABMif9IicboFkAAAEiNvUD7///odD8AAEiLvXj7//9IjYWA+///SDnHdAXoAkIAAEmLRQCDeBABfhxIi3gISIPH+LsBAAAA6HhAAACEwA+F+f7//+sdSIsASIt4CEiDx1i7AQAAAOhZQAAAhMAPhdr+//9FMcn2BRFtAAAIdExIjRX4VgAASI0NAFcAAEyNfYC+BAAAAEyJ902J+OgtxP//SYtFAEiLGOhpPwAAMdK5/////0iJx0yJ/uhLPwAASIXAdDVIiwBIiUMYSI29WPv//+i1PgAASIsFSGIAAEiLAEg7RdB1J0iBxJgEAABbQVxBXUFeQV9dw+jcPgAASI1DEOvA6NE+AADp6/7//+jLQAAAZmYuDx+EAAAAAABVSInlQVdBVkFVQVRTSIHsWAEAAEmJ/ujcPgAASI29gP7//0iJxug9PgAASYsGSIsATItgCEiNvQj///9IiwWFYQAASI1IGEiJjZj+//9IjZ2g/v//SIPAQEiJhQj///9Iid7oBEAAAEjHRZAAAAAAx0WY/////0yLLXphAABJjUUYSIlFuEiJhZj+//9Jg8VATImtCP///0iJ3+i0PwAATIs9SWEAAEmDxxBMib2g/v//SMeF+P7//wAAAABIx4Xw/v//AAAAAEjHhej+//8AAAAASMeF4P7//wAAAADHhQD///8QAAAASYsGg3gQAH4cSIt4COisPgAAhMB0I0mLBoN4EAB+H0yLQAjrJEiLAEiLeAhIg8dY6Ik+AACEwHXdRTHA6wtIiwBMi0AISYPAWEiNFShVAABIjQ0+VQAATI2NmP7//74EAAAATInn6B3j//9JiwZMiyBIjV2gSInfSI21oP7//+iEGQAASI19wEiJ3uiUPgAA9kXAAXQOSPdFyAAAAIAPhQQBAADoZz0AAIpNwInK0Or2wQFIjXXBSA9FddAPtsoPRU3IMdJIicfoNz0AAEiJw/ZFwAEPhZsAAABIhdsPhKQAAABIiwNJiUQkGPZFoAF0CUiLfbDorj4AAEiLRbhIiYWY/v//TImtCP///0yJvaD+///2heD+//8BdAxIi73w/v//6IA+AABIjb2g/v//6D4+AABIizW1XwAASIPGCEiNvZj+///o9z0AAEiNvQj////oRT4AAEiNvYD+///oIzwAAEiBxFgBAABbQVxBXUFeQV9dw0iLfdDoKj4AAEiF2w+FXP///+hIPAAASY1cJBBIiwNJiUQkGPZFoAEPhU7////pUv///0iNPXxVAABIjTV5VQAASI0NmFUAALogAQAA6PM9AACQVUiJ5UFXQVZTUEiJ+0iLBTRfAABIjUgYSIkLTI1zcEiDwEBIiUNwTI17CEiLBQ5fAABIg8AQSIlDCPZDSAF0CUiLe1jolz0AAEyJ/+hZPQAASIs10F4AAEiDxghIid/oFj0AAEyJ90iDxAhbQV5BX13pXj0AAGYuDx+EAAAAAABVSInlQVZTSIHsIAQAAEiLBcNeAABIiwBIiUXoSIn7SIsDg3gQAH4GSItwCOsLSIsASItwCEiDxlhIjb3Y+///6Ov2//9IiwNIiwBIi1gIRIs16mgAAEiLveD7///o7h0AAIkF2GgAAKgCdCaKDfZtAACEyXUcSI014wAAAEiJ3+htOwAAxgXcbQAAAYsFrmgAAKgBdE6KDc1tAACEyXVEvgEAAAC6IAAAALl/AAAASInf6E07AABIjT2ZUgAAvh0AAADoyjoAAEiNNTEBAABIid/oJzsAAMYFi20AAAGLBVxoAACoBHQVig18bQAAhMl1C+jJAgAAiwVDaAAAQfbGBHQZg+AEdRSLPTZoAABIjTVbbQAAMdLogj0AAEiLveD7//9IjYXo+///SDnHdAXosDwAAEiLBZ1dAABIiwBIO0XodQxIgcQgBAAAW0FeXcPoOzwAAGZmLg8fhAAAAAAAVUiJ5UFXQVZTUEmJ9kiJ+0yLPWldAABJiz9Ihdt0V0iNNbRTAAAxwEiJ2kyJ8ehFPAAA9gWmZwAAAnQe6Cc6AAC+AQAAAEUxwEUxyUiJx0yJ8kiJ2ejGvv//SYs/6AQ8AAC/BgAAAEiDxAhbQV5BX13pvDwAAEiNNXFTAAAxwEyJ8ujxOwAA9gVSZwAAAnWs68hmZmZmZi4PH4QAAAAAAFVIieVBV0FWQVVBVFNIg+wYSIn79gUlZwAAAXQeSI0VUVEAAEiNDVRRAAAx9kUxwEUxyUiJ3+hFvv//SIldyEiNBcJrAACKCEyNaAGJytDq9sEBTA9FaBBED7b6TA9FeAhJg/8bD4zYAAAAT410PQBMjSUcUQAATIn6TInrDx8ASIPC5nROvmEAAABIid/oqzsAAEiJw0iF23Q5uhsAAABIid9MiebomTsAAIXAdBFI/8NMifJIKdpIg/obfcLrFEw583QPTCnrsAFIg/v/D4WiAAAASYP/G3xpTI0lzlAAAEyJ62ZmZi4PH4QAAAAAAEmDx+Z0Tb5hAAAASInfTIn66Dg7AABIicNIhdt0NbobAAAASInfTInm6CY7AACFwHQRSP/DTYn3SSnfSYP/G32/6xBMOfN0C0wp67ABSIP7/3Uz6D44AABIicdIjTV5UAAASI1V0EiNTdQxwOhJOwAAg/gCdQ6DfdAFfBl1BoN91AN+ETHASIPEGFtBXEFdQV5BX13DSIsdVFsAAEiLC0iNPTtQAAC+GAAAALoBAAAA6FE6AABIizNIi33I6Fk4AAC/AQAAAOj/OQAADx9EAABVSInlQVdBVlNIg+xYSIsFBFsAAEiLAEiJReBIjT2yagAAMfboXTsAAInBhcl0dkiLBepaAABIizhIjTVfUQAAMcCJyujPOQAA6Lo3AABIjX2gSInG6B43AADoqTcAAEmJxuihNwAASI01cFEAADHSuf////9IicfofzcAAEiJw0iF2w+EWAIAAEiJ3+jjNwAATIn3SInG6Hg3AABIjX2g6Nk2AABIjT0sagAA6Lc6AACJwYXJdHZIiwViWgAASIs4SI01WFEAADHAicroRzkAAOgyNwAASI19oEiJxuiWNgAA6CE3AABJicboGTcAAEiNNWtRAAAx0rn/////SInH6Pc2AABIicNIhdsPhNoBAABIid/oWzcAAEyJ90iJxujwNgAASI19oOhRNgAATI11oEyJ9+hvOQAAvgAgAABMiffobjkAAL4CAAAATIn36Fs5AADHRZz/////TI19nL8DAAAATIn+TIn66F45AABIixUrWQAASI19kDHJTIn26Dc5AACJw78DAAAAMdJMif7oODkAAEyJ9+gGOQAAhdt0T0yLPXlZAABNizeJ3+hFOQAASInBSI01b1EAADHATIn3SInK6FA4AABJiz/oNjgAAEiLBUFZAABIiwBIO0XgD4X4AAAASIPEWFtBXkFfXcPoODkAAEiNNR1pAABIjRWeEAAASInH6BY5AACJwYXJdHZIiwUJWQAASIs4SI01hFAAADHAicro7jcAAOjZNQAASI19oEiJxug9NQAA6Mg1AABJicbowDUAAEiNNZdQAAAx0rn/////SInH6J41AABIicNIhdsPhIsAAABIid/oAjYAAEyJ90iJxuiXNQAASI19oOj4NAAASI09i2gAAOgqOQAAiz3sYgAAD1fADylFoEiNBUoBAABIiUWgx0Wo/////0iNFfhnAABIjXWg6B04AADGBeJnAAABSIsFSVgAAEiLAEg7ReAPhAj////o7zYAAOjmNAAA6Z79///o3DQAAOkc/v//6NI0AADpa////5BVSInlQVZTSIHsMAQAAEiLBQNYAABIiwBIiUXoSIsHg3gQAH4GSItwCOsLSIsASItwCEiDxlhIjb3Y+///6C7w//+LHTxiAABIi73g+///6KwYAACJBSpiAAA52HRViwUcYgAAg+AEdEpMjTVAZwAAMdKJ30yJ9uhiNwAAiz0CYgAAD1fADymFwPv//0iNBV0AAABIiYXA+///x4XI+////////0iNtcD7//9MifLoKzcAAEiLveD7//9IjYXo+///SDnHdAXoWTYAAEiLBUZXAABIiwBIO0XodQxIgcQwBAAAW0FeXcPo5DUAAA8fQABVSInlMcDwD7E90mYAAHUNSI09zWYAAF3pfzcAAF3DkFVIieVIgewgBAAASIsF9lYAAEiLAEiJRfhIiweDeBAAfgZIi3AI6wtIiwBIi3AISIPGWEiNvej7///oIe///0iLvfD7///odRgAAEiLvfD7//9IjYX4+///SDnHdAXosTUAAEiLBZ5WAABIiwBIO0X4dQlIgcQgBAAAXcPoPzUAAGZmZmZmZi4PH4QAAAAAAFVIieVIgewgBAAASIsFZlYAAEiLAEiJRfhIiweDeBAAfgZIi3AI6wtIiwBIi3AISIPGWEiNvej7///oke7//0iLvfD7///ohRgAAEiLvfD7//9IjYX4+///SDnHdAXoITUAAEiLBQ5WAABIiwBIO0X4dQlIgcQgBAAAXcPorzQAAGZmZmZmZi4PH4QAAAAAAFVIieVIgewgBAAASIsF1lUAAEiLAEiJRfhIiweDeBAAfgZIi3AI6wtIiwBIi3AISIPGWEiNvej7///oAe7//0iLvfD7///olRgAAIkFP2UAAEiLvfD7//9IjYX4+///SDnHdAXoizQAAEiLBXhVAABIiwBIO0X4dQlIgcQgBAAAXcPoGTQAAGYPH4QAAAAAAFVIieVBV0FWU0iD7BhJif7oMzIAAEmJx0yJPelkAADoHCIAAEyJ/+gkGQAA6E8iAADodjQAAInD6Es0AAA5w3Uv6Eg0AACJw+gvNAAAOcN1H0iNPRJKAADoJTQAAEiFwHQOSInH6OYXAACJBZBkAADoNzQAAInD6Aw0AAA5w3Uv6Ak0AACJw+jwMwAAOcN1H0iNPeZJAADo5jMAAEiFwHQOSInH6CcUAACJBRFfAADo+DMAAInD6M0zAAA5w3Uv6MozAACJw+ixMwAAOcN1H0iNPblJAADopzMAAEiFwHQOSInH6FgVAACJBdZeAADouTMAAInD6I4zAAA5w3Up6IszAACJw+hyMwAAOcN1GUiNPYxJAADoaDMAAEiFwHQISInH6OkVAADogDMAAInD6FUzAAA5w3Up6FIzAACJw+g5MwAAOcN1GUiNPWdJAADoLzMAAEiFwHQISInH6FAWAACLBVpeAACoAg+FYAMAAKgBD4V8AwAAqAR0BejB+P//6MQwAABIjX3QSInG6CgwAABIjT3J7v//MfYx0ujwEAAASYnH6KAwAABIjTUbSQAAMdK5/////0iJx+h+MAAASInDSIXbD4R5AwAATIn/SIne6BMwAAAxyTHATIn3SIneTIn66PkPAABIjX3Q6M4vAADoUzAAAEiNfdBIicboty8AAEiNPUjx//8x9jHS6H8QAABJicfoLzAAAEiNNbhIAAAx0rn/////SInH6A0wAABIicNIhdsPhBIDAABMif9Iid7ooi8AADHJMcBMifdIid5MifroiA8AAEiNfdDoXS8AAOjiLwAASI190EiJxuhGLwAASI09B/T//zH2MdLoDhAAAEmJx+i+LwAASI01UUgAADHSuf////9IicfonC8AAEiJw0iF2w+EqwIAAEyJ/0iJ3ugxLwAAMckxwEyJ90iJ3kyJ+ugXDwAASI190OjsLgAA6HEvAABIjX3QSInG6NUuAABIjT1W+v//MfYx0uidDwAASYnH6E0vAABIjTXqRwAAMdK5/////0iJx+grLwAASInDSIXbD4REAgAATIn/SIne6MAuAAAxyTHATIn3SIneTIn66KYOAABIjX3Q6HsuAADoAC8AAEiNfdBIicboZC4AAEiNPfX6//8x9jHS6CwPAABJicfo3C4AAEiNNYNHAAAx0rn/////SInH6LouAABIicNIhdsPhN0BAABMif9Iid7oTy4AADHJMcBMifdIid5MifroNQ4AAEiNfdDoCi4AAOiPLgAASI19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hcB0bLoKAAAATIn3TInm6N4fAACFwHSougYAAABMifdMie7oyh8AAIXAdK66BwAAAEyJ90iNNYg5AADosh8AALkIAAAAugcAAACFwHVGQYA8Fit0LEkB1gnLQYA+AHWQ63lmZmZmZi4PH4QAAAAAALkBAAAAugkAAABBgDwWK3XUTY10FgEJy0GAPgAPhV7////rR0iLPQU/AABIjTUpOQAAujUAAADopNL//0iJw0yJ9+g1HwAASInfTIn2SInC6IvS//9IjTVrKAAAugEAAABIicfod9L//zHbidhIg8QIW0FcQV1BXkFfXcMPH0AAVUiJ5UFXQVZTUEiJ+4A7AA+EgQAAAEiNNSQ5AAC6BwAAAEiJ3+jYHgAAQb4fAAAAhcAPhIUAAABIjTUKOQAAugcAAABIid/oth4AAIXAdGdIiz1ZPgAASI018zgAALo1AAAA6PjR//9JicdIid/oiR4AAEyJ/0iJ3kiJwujf0f//SI01vycAALoBAAAASInH6MvR///rJkiLPRI+AABIjTVsOAAAui8AAADosdH//0G+HwAAAOsGQb4DAAAARInwSIPECFtBXkFfXcMPH0QAAFVIieVTUEiJ+4A7AHRESInf6BYeAABIg/hBclVIiz29PQAASI01vzgAALosAAAA6FzR//++QAAAAEiJx+g7HAAASI01zjgAALoNAAAASInH6xNIiz2HPQAASI01VzgAALoxAAAA6CbR//9Ig8QIW13DSI09iEgAAEiNFUomAAC+QQAAADHASInZSIPECFtd6YAdAABmZmYuDx+EAAAAAABVSInlU1BIifuAOwB0RkiJ3+h2HQAASD0BBAAAclVIiz0bPQAASI01izgAALoyAAAA6LrQ//++AAQAAEiJx+iZGwAASI01LDgAALoNAAAASInH6xNIiz3lPAAASI01IjgAALoyAAAA6ITQ//9Ig8QIW13DSI09NkgAAEiNFaglAAC+AQQAADHASInZSIPECFtd6d4cAABmLg8fhAAAAAAAVUiJ5UFXQVZTUEiJ+4A7AA+EuAAAAEiNNWU4AAC6AwAAAEiJ3+jIHAAAQb4BAAAAhcAPhLEAAABIjTVHOAAAugQAAABIid/ophwAAIXAD4SVAAAASI01MDgAALoCAAAASInf6IocAABFMfaFwHR6SI01GDgAALoFAAAASInf6G8cAACFwHRiSIs9EjwAAEiNNf83AAC6PQAAAOixz///SYnHSInf6EIcAABMif9Iid5IicLomM///0iNNXglAAC6AQAAAEiJx+iEz///6xtIiz3LOwAASI01bjcAALo3AAAA6GrP//9FMfZEifBIg8QIW0FeQV9dw2YPH4QAAAAAAFVIieVBV0FWQVVBVFNIgey4CAAASYn+SIsF6jsAAEiLAEiJRdDozhgAAEiNvSj3//9IicboDRkAAEiNPeBKAABIjTUcJAAA6K4ZAADopxgAAEiNNXo3AAAx0rn/////SInH6IUYAABJicRNheQPhDUHAABMiffolRgAAEiJx+hvGAAASYnG6G0YAABIicNMja3A+///TInvSIne6BAYAABIid/oaBgAAEyJ90iJxkyJ4ugkGAAATInvSInG6OkXAABJicRMie/oqBcAAE2F5A+E0wYAAEyJ5+jPGAAAhMAPhMMGAADoDhgAAEiNNek2AAAx0rn/////SInH6OwXAABJicZNhfYPhJwGAADo5xcAAEiJw0yNrcD7//9Mie9Iid7oihcAAEiJ3+jiFwAATInnSInGTIny6J4XAABMie9IicboYxcAAEmJxkyJ7+giFwAATYX2D4RNBgAASYsGicGD4QNIg/kBdWhIi0D/D7dAC4P4P3dbSI29wPv//0yJ9ujb0v//SI0dlEkAAEiNNU82AABIid/oXxgAAEiLtcj7//9Iid/oRBgAAEiNNYYjAABIid/oNRgAAEiLvcj7//9IjYXQ+///SDnHdAXoQxkAAOgiFwAASI01FzYAADHSuf////9IicfoABcAAEmJxk2F9g+EsAUAAOj7FgAASInDTI2twPv//0yJ70iJ3uieFgAASInf6PYWAABMiedIicZMifLoshYAAEyJ70iJxuh3FgAASInDTInv6DYWAABIhdsPhGEFAABIid/oXRcAAITAD4RRBQAA6JwWAABJicRMjbXA+///TIn3TInm6D8WAABMiefolxYAAEiJ30iJxuhKFgAATIn3SInG6BsWAABMifdJicbo2hUAAE2F9g+EBQUAAEiJnVj3//8PV8APKYVg9///SMeFcPf//wAAAABmx4Vg9///AijGhWL3//8ATIn36MkWAACJhXz3//+FwA+ETQQAADHASImFgPf//0yNrcD7//9Mjb2w9///RTHkTIm1iPf//+jtFQAASInDTInvSIne6JcVAABIid/o7xUAAEyJ90iJxkSJ4uixFQAATInvSInG6HAVAABMietJicVIid/oLBUAAE2F7Q+E+wAAAOiiFQAASYnGSInfTIn26EwVAABMiffopBUAAEiLvVj3//9IicZMieroXBUAAEiJ30iJxughFQAASYnGSInf6OAUAABNhfYPhMcAAABIid9Mie7ouND//0yJ/0yJ9uit0P//SIudyPv//0iF2w+EwAAAAEiLhbj3//9IhcBMi7WI9///D4SwAAAASI09HDQAAEiJ3uj3FwAAhcBMja3A+///D4S1AAAAD1fADymFkPf//0jHhaD3//8AAAAASInf6NcXAABJicZJg/7wD4O5AwAASYP+Fw+DrQAAAESJ8ADAiIWQ9///TI2tkff//02F9g+FyAAAAOnRAAAASYndQf/ERDulfPf//w+Cp/7//+nOAgAATIu1iPf//0mJ3UH/xEQ7pXz3//8Pgoj+///prwIAAEyLtYj3//9Mja3A+///SIu9uPf//0iNhcD3//9IOccPhV0CAADpXQIAAEiNBWxGAAAPtgCoAQ+EagEAAEiNBVpGAABIi0AISIP4JA+EZAEAAOkZAgAATYn3SYPHEEmD5/BMif/osBUAAEmJxUyJraD3//9Jg88BTIm9kPf//0yNvbD3//9MibWY9///TInvSIneTIny6F0WAABDxkQ1AABIjZ2Q9///SInfSI014TIAAOi1FAAASIu1uPf//0iJ3+imFAAAD7aFkPf//4nBgOEBdAlIi5WY9///6weJwtDqD7bSTIu1iPf//0yNrcD7//9Ii7WA9///SIX2D4QwAQAASI10FgJIg/5RcjxIjb1g9///SI01ezIAAOhMFAAAD7aFkPf//6gBD4X6AAAAicHQ6Q+20THJhMlIiZWA9///D4X6AAAA6zRIifNIjb1g9///SI01DCIAAOgNFAAASInaD7aFkPf//4nBgOEBhMlIiZWA9///D4XEAAAA0OgPttBIjbWR9///SI29YPf//+jdEwAA9oWQ9///AQ+EzgAAAOm9AAAA0OgPtsBIg/gkD4W6AAAAMfZIx8L/////QbgkAAAASI090kQAAEiNDQ4eAADodhMAAIXAD4WQAAAASI0dt0QAAEiJ30iNNY8xAADoghMAAEiLtbj3//9Iid/oZxMAAEiJ30iNNaYeAADoWBMAAEiLvbj3//9IjYXA9///SDnHdVzrX7EBSIuVmPf//4TJSImVgPf//w+EPP///0iLlZj3//9Ii7Wg9///SI29YPf//+gXEwAA9oWQ9///AXQMSIu9oPf//+ieEwAASIu9uPf//0iNhcD3//9IOcd0BegKFAAASIu9yPv//0iNhdD7//9IOcd0BejyEwAAQf/ERDulfPf//w+C1Pv//0iNFdkdAABIjb3A+///SI21YPf//+ikAAAAioXA+///icHQ6agBSI21wfv//0gPRbXQ+///D7bRSA9Flcj7//9IjT2nQwAA6HYSAAD2hcD7//8BdAxIi73Q+///6P0SAAD2hWD3//8BdAxIi71w9///6OgSAABIjb0o9///6JgRAABIiwVNNAAASIsASDtF0HUSSIHEuAgAAFtBXEFdQV5BX13D6OUSAABIjb2Q9///6O8RAABmDx+EAAAAAABVSInlQVdBVkFVQVRTSIPsGEmJ1kmJ90iJ+0jHQxAAAAAASMdDCAAAAABIxwMAAAAAQYoHqAF1INDoRA+24EyJ9+i2EwAASf/HTY0sBEmD/fByH+mWAAAATYtnCEyJ9+iYEwAATYt/EE2NLARJg/3wc3xIiUXQTIl1yEmD/RZ3EkSJ4ADAiANMjXMBTYXkdSnrNUmDxRBJg+XwTInv6AoSAABJicZMiXMQSYPNAUyJK0yJYwhNheR0DkyJ90yJ/kyJ4ujDEgAAQ8YEJgBIid9Ii3XISItV0OgoEQAASInYSIPEGFtBXEFdQV5BX13DSInf6PAQAABmLg8fhAAAAAAAVUiJ5VNIg+wYSI1d6DH2SInf6E8SAABIjTVCQgAASInf6EwSAABIjT1rQgAA6NwSAABIg8QYW13DDx+AAAAAAFVIieVBV0FWQVVBVFNIg+w46BAPAABIixjoAg8AAESLMEiNPeBBAABIjTUpGwAA6JYQAAAPV8APKUWgSMdFsAAAAABFhfZ+f0yNbaBMjT21QQAATI0ldh4AAGYPH0QAAEiLE0iNfcBMie7oUf7//w+2RcCJwdDpqAFIi3XQSI1FwUgPRPAPttFID0VVyEyJ/+gvEAAA9kXAAXQJSIt90Oi8EAAATInvTInm6BsQAABIg8MISf/Odaj2RaABdAlIi32w6JkQAABIg8Q4W0FcQV1BXkFfXcNmLg8fhAAAAAAAVUiJ5UFXQVZBVFNIgexgBQAASYnOSYnXSInzSIsF1jEAAEiLAEiJRdhIi38ISI21sPr//zHSQbgIAAAASInZ6OARAACFwA+EogAAAA+2ewFIjUMESI1zCIP/AkgPRPBIjZWA+v//uS4AAADowBEAAIXAD4XdAAAAD7dDAmbBwAhED7fgTIn/6FARAABMifdMif5IicLopsT//0iJw0yNtYD6//9MiffoMBEAAEiJ30yJ9kiJwuiGxP//SI011h4AALoBAAAASInH6HLE//9IicdEieboUw8AAEiLBRgxAABIiwBIO0XYdHzphwAAAEyJ/+jmEAAATIn3TIn+SInC6DzE//9IicNMjbWs+///TIn36MYQAABIid9MifZIicLoHMT//0iNNWweAAC6AQAAAEiJx+gIxP//SInDTI11rUyJ9+iVEAAASInfTIn2SInC6OvD//9IiwWcMAAASIsASDtF2HUQSIHEYAUAAFtBXEFeQV9dw+g2DwAAZg8fRAAAVUiJ5UFWU0iB7JAAAABIiwVjMAAASIsASIlF6EmJ9kiJ+8eFZP///4AAAACLQxCD+Ax0KYP4Dw+FtwAAAEiNtWj///9IjZVk////SInf6MMQAACFwA+FmQAAAOsaSI21aP///0iNlWT///9Iid/okRAAAIXAdX1IjRV6GAAASI21aP///0iJ30yJ8ejw/f//g3sQDHVeSI21aP///0iNlWT///9Iid/oUhAAAIP4x3QvhcB1P0iNFdArAABIjbVo////SInfTInx6LL9//9IiwWjLwAASIsASDtF6HQm6zBIjTW0KwAAuhAAAABMiffozML//0iLBX0vAABIiwBIO0XodQxIgcSQAAAAW0FeXcPoGw4AAGZmLg8fhAAAAAAAVUiJ5UFXQVZBVUFUU0iD7ChJifdIiftIx0XQAAAAAItDEIP4BHQhg/gDD4U8AQAASI1V0DH2SInf6DoPAACD+Ml0HOkkAQAASI1V0DH2SInf6CgPAACD+MkPhQ0BAABIi33Q6FAOAABJicaLQxCD+AR0IoP4Aw+F6AAAAEiNVdBIid9Mifbo7Q4AAIXAD4XRAAAA6xdIjVXQSInfTIn26NoOAACFwA+FuAAAAEyLbdAPV8APKUWwSMdFwAAAAABJg/3wD4OyAAAASYP9F3MWRInoAMCIRbBMjWWxTInjTYXtdSnrNUmNXRBIg+PwSInf6PcMAABIiUXASIPLAUiJXbBIicNMiW24TI1lsUiJ30yJ9kyJ6uiwDQAAQsYEKwBIjTVmKgAAugoAAABMif/obcH//4pNsInK0Or2wQFMD0VlwA+20kgPRVW4SInHTInm6EvB///2RbABdAlIi33A6HwMAABMiffo+AwAAEiDxChbQVxBXUFeQV9dw0iNfbDoogsAAGZmZi4PH4QAAAAAAFVIieVBV0FWQVVBVFNIgexYAQAASYn0SYn+D1fADylFwEjHRdAAAAAASI298P7//0iLBVEtAABIjUgYSImNgP7//0iNnYj+//9Ig8BASImF8P7//0iJ3ujQCwAASMeFeP///wAAAADHRYD/////SIsFQy0AAEiNSBhIiU2QSImNgP7//0iDwEBIiUWISImF8P7//0iJ3+h5CwAASIsFDi0AAEiDwBBIiUWYSImFiP7//0jHheD+//8AAAAASMeF2P7//wAAAABIx4XQ/v//AAAAAEjHhcj+//8AAAAAx4Xo/v//EAAAAEGLRhBIg/gSD4eTAgAASI0NaAcAAEhjBIFIAcj/4EiNNfsoAADpagIAAEiNNfcoAADpXgIAAEiNNfEoAADpUgIAAEiNNesoAADrB0iNNesoAABIjX3A6HgKAABIjbWA/v//TIn36B/9///pLgIAAEiNNc8oAADpGQIAAEiNNcooAADpDQIAAEiNNcMoAADpAQIAAEiNNbwoAADp9QEAAEiNNbUoAADp6QEAAEiNNfknAABIjX3A6BgKAABIjTWhKAAASI29gP7//7oFAAAA6Fa///9Bi3Zo6QsBAABIjTWGKAAA6awBAABIjTWBKAAA6QcBAABJi34ITYu+gAAAAOg/DAAASYnFSI01ZigAAEiNfcDovAkAAEiNNVwoAABIjb2A/v//uggAAADo+r7//0iJw0yJ9+g5DAAASInfSInG6OIJAABMiftMKesPhsAFAABIjTUrKAAASI29gP7//7oOAAAA6MC+//9IicdIid7oswkAAEiNNRcoAAC6AwAAAOnpBQAASI01JigAAEiNfcDoPgkAAEiNdaBIjVWoTIn36NQLAACFwA+F8AAAAEiNNQIoAABIjb2A/v//ugcAAADoZL7//4t1oEiJx+hFCQAASI015ycAALoKAAAASInH6EW+//+LdahIicfoJgkAAOmpAAAASI01zicAAEiNfcDozwgAAEiNtYD+//9MiffoVvr//+mFAAAASI01diQAAEiNfcDoqwgAAEiNNZ4nAABIjb2A/v//uggAAADo6b3//0GLdmhIicfoyQgAAEiNNUwYAAC6AgAAAEiJx+jJvf//SYnFQYtGaP/Ig/geD4fTBAAASJhIjQ2eMwAASIscwenIBAAASI01SycAAOsHSI01RycAAEiNfcDoNggAAEGLRhCD+A8Ph6QAAAC5gJAAAA+jwQ+DlgAAAMdFqAAAAADHRaAAAAAAg/gMdAWD+A91HUiNnYD+//9IjTXjFQAAugIAAABIid/oPr3//+sHSI2dgP7//0iNdahMiffoYQoAAEiNdaBMiffoPQoAAEiNNcwmAAC6EgAAAEiJ3+gJvf//i3WoSInH6OoHAABIjTXAJgAAuhQAAABIicfo6rz//4t1oEiJx+jLBwAAQYtGEIP4Dw+HkwAAALmA0QAAD6PBD4OFAAAASI11qEyJ9+iKCQAAhcB1cYtFqIP4AnQjg/gBdCeFwHU9SI01eiYAAEiNvYD+//+6BwAAAOiLvP//60ZIjTVxJgAA6wdIjTVfJgAASI29gP7//7oIAAAA6Gi8///rI0iNNVcmAABIjb2A/v//uhMAAADoTrz//4t1qEiJx+gvBwAAQYtGEIP4Dg+HmwAAALmAUAAAD6PBD4ONAAAASI01LSYAAEyNrYD+//+6FAAAAEyJ7+gNvP//SYt2YEiJx+j5BgAATIn36PUIAAAxyYXATYn3TI01IxEAAEiNNQUmAABJD0T2uwoAAAC6CgAAAEgPRNFMie/oyrv//0mJxUyJ/+jBCAAAhcBIjTXiJQAASQ9E9k2J/rgAAAAASA9E2EyJ70iJ2uibu///SYsEJEiLQOhBvU////9Bi0wECEQh6YPJIEGJTAQISI01rSUAALoBAAAATInn6Gm7//9IicNMiffoSAgAAEG3LbEthcB0ArFSiE2oSI11qLoBAAAASInf6D+7//9IicNMiffoKggAAIXAdANBt0FEiH2oSI11qLoBAAAASInf6Bi7//9IjTVKJQAAugQAAABIicfoBLv//0iLCEiLSehIx0QIGAoAAACKTcCJytDq9sEBSI11wUgPRXXQD7bSSA9FVchIicfo0br//0iLCEiLSeiLVAgIRCHqg8oQiVQICEiLCEiLSehIx0QIGBIAAABJiwQkSItA6EEPvpwEkAAAAEHHhASQAAAAMAAAAEyJ50yJ9uhkBQAASIsISItJ6ItUCAhEIeqDyiCJVAgISYsEJEiLQOhBiZwEkAAAAEiNNXgZAAC6AgAAAEyJ5+hLuv//SInDSIsDSItA6EQjbAMIQYPNIESJbAMISI19qEyNvYj+//9Mif7owN///4pFqInB0OmoAUiNdalID0V1uA+20UgPRVWwSInf6P65//9IicNIiwNIi3DoSAHeTI11oEyJ9+h9BAAASIs1PiYAAEyJ9+hoBAAASIsIvgoAAABIicf/UThBicRMiffo0wQAAEEPvvRIid/ocwQAAEiJ3+hxBAAA9kWoAXQJSIt9uOjaBAAASItFkEiJhYD+//9Ii0WISImF8P7//0iLRZhIiYWI/v//9oXI/v//AXQMSIu92P7//+ikBAAATIn/6GYEAABIizXdJQAASIPGCEiNvYD+///oHwQAAEiNvfD+///obQQAAPZFwAF0CUiLfdDoagQAAEiBxFgBAABbQVxBXUFeQV9dw0iNNX4iAABIjb2A/v//uhMAAADoALn//00p/UiJx0yJ7ujwAwAASI01bCIAALoHAAAA6ylIjR3UIQAASInf6HEFAABMie9Iid5IicLox7j//0iNNWARAAC6AQAAAEiJx+izuP//6SL7//9mkKH4//+t+P//ufj//8X4///O+P//8vj///74//8K+f//Fvn//yL5//8u+f//X/n//2v5//93+f//CPr//3f6//+b+v//B/v//xD7//9VSInl/8+D/x53EEhjx0iNDTsuAABIiwTBXcNIjQU1IQAAXcNmZmYuDx+EAAAAAABVSInlQVdBVkFVQVRTSIPseEiLBdAkAABIiwBIiUXQSYn9uf////9IjX2wSbjP91PjpZvEIGZmLg8fhAAAAAAASInwSMHoA0n34EjB6gRpwugDAACJ8ynDiR//wUiDxwRIgf7nAwAASInWd9RIY9lIjUSdsEiJhWj///9MjaVw////RTH26yBmDx+EAAAAAAC6AQAAAEyJ70iNNdQhAADojLf//0n/zk6NPDNIi4Vo////QosMsEWF9nQ1vkAAAAAxwEyJ50iNFaIhAADo4wMAAEyJ5+jzAwAATInvTInmSInC6Em3//9Nhf9/pOsRZpBMie+JzugiAgAATYX/f5FIiwXiIwAASIsASDtF0HUPSIPEeFtBXEFdQV5BX13D6H0CAABmZmZmLg8fhAAAAAAA/yXSIwAA/yXUIwAA/yXWIwAA/yXYIwAA/yXaIwAA/yXcIwAA/yXeIwAA/yXgIwAA/yXiIwAA/yXkIwAA/yXmIwAA/yXoIwAA/yXqIwAA/yXsIwAA/yXuIwAA/yXwIwAA/yXyIwAA/yX0IwAA/yX2IwAA/yX4IwAA/yX6IwAA/yX8IwAA/yX+IwAA/yUAJAAA/yUCJAAA/yUEJAAA/yUGJAAA/yUIJAAA/yUKJAAA/yUMJAAA/yUOJAAA/yUQJAAA/yUSJAAA/yUUJAAA/yUWJAAA/yUYJAAA/yUaJAAA/yUcJAAA/yUeJAAA/yUgJAAA/yUiJAAA/yUkJAAA/yUmJAAA/yUoJAAA/yUqJAAA/yUsJAAA/yUuJAAA/yUwJAAA/yUyJAAA/yU0JAAA/yU2JAAA/yU4JAAA/yU6JAAA/yU8JAAA/yU+JAAA/yVAJAAA/yVCJAAA/yVEJAAA/yVGJAAA/yVIJAAA/yVKJAAA/yVMJAAA/yVOJAAA/yVQJAAA/yVSJAAA/yVUJAAA/yVWJAAA/yVYJAAA/yVaJAAA/yVcJAAA/yVeJAAA/yVgJAAA/yViJAAA/yVkJAAA/yVmJAAA/yVoJAAA/yVqJAAA/yVsJAAA/yVuJAAA/yVwJAAA/yVyJAAA/yV0JAAA/yV2JAAA/yV4JAAA/yV6JAAA/yV8JAAA/yV+JAAA/yWAJAAA/yWCJAAA/yWEJAAA/yWGJAAA/yWIJAAA/yWKJAAA/yWMJAAA/yWOJAAA/yWQJAAA/yWSJAAA/yWUJAAA/yWWJAAA/yWYJAAA/yWaJAAA/yWcJAAA/yWeJAAA/yWgJAAA/yWiJAAA/yWkJAAA/yWmJAAA/yWoJAAA/yWqJAAA/yWsJAAA/yWuJAAA/yWwJAAA/yWyJAAA/yW0JAAA/yW2JAAA/yW4JAAA/yW6JAAA/yW8JAAA/yW+JAAA/yXAJAAA/yXCJAAA/yXEJAAA/yXGJAAA/yXIJAAA/yXKJAAA/yXMJAAA/yXOJAAA/yXQJAAA/yXSJAAA/yXUJAAA/yXWJAAA/yXYJAAA/yXaJAAA/yXcJAAA/yXeJAAA/yXgJAAA/yXiJAAA/yXkJAAA/yXmJAAA/yXoJAAA/yXqJAAA/yXsJAAA/yXuJAAA/yXwJAAA/yXyJAAA/yX0JAAA/yX2JAAA/yX4JAAA/yX6JAAA/yX8JAAA/yX+JAAA/yUAJQAA/yUCJQAA/yUEJQAA/yUGJQAA/yUIJQAA/yUKJQAA/yUMJQAA/yUOJQAA/yUQJQAA/yUSJQAA/yUUJQAA/yUWJQAA/yUYJQAA/yUaJQAA/yUcJQAA/yUeJQAA/yUgJQAA/yUiJQAA/yUkJQAA/yUmJQAA/yUoJQAA/yUqJQAA/yUsJQAA/yUuJQAA/yUwJQAA/yUyJQAA/yU0JQAA/yU2JQAA/yU4JQAA/yU6JQAA/yU8JQAA/yU+JQAA/yVAJQAA/yVCJQAA/yVEJQAA/yVGJQAA/yVIJQAAaCYAAADphgMAAGh7AAAA6XwDAABovQAAAOlyAwAAaOkAAADpaAMAAGgJAQAA6V4DAABoKQEAAOlUAwAAaEwBAADpSgMAAGiRAQAA6UADAABoyQEAAOk2AwAAaBwCAADpLAMAAGhjAgAA6SIDAABoqgIAAOkYAwAAaFsDAADpDgMAAGiDAwAA6QQDAABosgMAAOn6AgAAaOcDAADp8AIAAGgHBAAA6eYCAABoKQQAAOncAgAAaFQEAADp0gIAAGiUBAAA6cgCAABo2AQAAOm+AgAAaAYFAADptAIAAGhKBQAA6aoCAABofgUAAOmgAgAAaMUFAADplgIAAGgNBgAA6YwCAABoLQYAAOmCAgAAaFIGAADpeAIAAGikBgAA6W4CAABo4gYAAOlkAgAAaBkHAADpWgIAAGhFBwAA6VACAABohQcAAOlGAgAAaLIHAADpPAIAAGjqBwAA6TICAABoNQgAAOkoAgAAaHoIAADpHgIAAGjiCAAA6RQCAABoKAkAAOkKAgAAaFQJAADpAAIAAGh8CQAA6fYBAABomAkAAOnsAQAAaNcJAADp4gEAAGgjCgAA6dgBAABoYgoAAOnOAQAAaJkKAADpxAEAAGjECgAA6boBAABo8QoAAOmwAQAAaB4LAADppgEAAGhLCwAA6ZwBAABoegsAAOmSAQAAaJ8LAADpiAEAAGjHCwAA6X4BAABo9AsAAOl0AQAAaCgMAADpagEAAGhHDAAA6WABAABobgwAAOlWAQAAaI8MAADpTAEAAGjHDAAA6UIBAABo5wwAAOk4AQAAaBwNAADpLgEAAGg6DQAA6SQBAABoUBcAAOkaAQAAaBoZAADpEAEAAGgwGQAA6QYBAABoRhkAAOn8AAAAaF4ZAADp8gAAAGhwGQAA6egAAABojBkAAOneAAAAaKcZAADp1AAAAGi+GQAA6coAAABo0RkAAOnAAAAAaOYZAADptgAAAGj7GQAA6awAAABoEhoAAOmiAAAAaCkaAADpmAAAAGg/GgAA6Y4AAABoVRoAAOmEAAAAaG0aAADpegAAAGh8GgAA6XAAAABomBoAAOlmAAAAaKwaAADpXAAAAGjAGgAA6VIAAABo1BoAAOlIAAAAaPAaAADpPgAAAGgLGwAA6TQAAABoJhsAAOkqAAAAaEIbAADpIAAAAGhdGwAA6RYAAABoeBsAAOkMAAAAaIkbAADpAgAAAAAATI0dORsAAEFT/yUpGwAAkGhbDQAA6eb///9osw0AAOnc////aPsNAADp0v///2gpDgAA6cj///9oVw4AAOm+////aHwOAADptP///2jPDgAA6ar///9oIw8AAOmg////aHYPAADplv///2jIDwAA6Yz///9oHBAAAOmC////aGwQAADpeP///2iqEAAA6W7///9o6hAAAOlk////aDARAADpWv///2hzEQAA6VD///9orxEAAOlG////aO0RAADpPP///2gpEgAA6TL///9oZRIAAOko////aKESAADpHv///2jdEgAA6RT///9oGRMAAOkK////aFcTAADpAP///2iVEwAA6fb+//9othMAAOns/v//aNMTAADp4v7//2j2EwAA6dj+//9oGRQAAOnO/v//aFoUAADpxP7//2iRFAAA6br+//9oAhUAAOmw/v//aAAAAADppv7//2gTAAAA6Zz+//9oyBQAAOmS/v//aN0UAADpiP7//2jtFAAA6X7+//9oGRUAAOl0/v//aCkVAADpav7//2hCFQAA6WD+//9oXxUAAOlW/v//aG0VAADpTP7//2h/FQAA6UL+//9okBUAAOk4/v//aJ8VAADpLv7//2itFQAA6ST+//9ouhUAAOka/v//aMkVAADpEP7//2jYFQAA6Qb+//9o5hUAAOn8/f//aPQVAADp8v3//2gEFgAA6ej9//9oEhYAAOne/f//aB8WAADp1P3//2guFgAA6cr9//9oPRYAAOnA/f//aEwWAADptv3//2hcFgAA6az9//9oaxYAAOmi/f//aHsWAADpmP3//2iKFgAA6Y79//9omRYAAOmE/f//aKsWAADpev3//2i9FgAA6XD9//9o0hYAAOlm/f//aOEWAADpXP3//2j1FgAA6VL9//9oBBcAAOlI/f//aBMXAADpPv3//2giFwAA6TT9//9oMRcAAOkq/f//aEEXAADpIP3//2htFwAA6Rb9//9oihcAAOkM/f//aKQXAADpAv3//2jIFwAA6fj8//9o6hcAAOnu/P//aAEYAADp5Pz//2ggGAAA6dr8//9oNRgAAOnQ/P//aE0YAADpxvz//2hbGAAA6bz8//9oahgAAOmy/P//aHwYAADpqPz//2iNGAAA6Z78//9onBgAAOmU/P//aKsYAADpivz//2i8GAAA6YD8//9oyxgAAOl2/P//aNsYAADpbPz//2jvGAAA6WL8//9o/BgAAOlY/P//aAwZAADpTvz//wAAAAAAAAAAAAAAAPA/je21oPfGsD4AAAAAAABZQAAAAAAAAAAAMQAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKUwBHQwBDT01QSUxFUgBPVEhFUgBFWFRFUk5BTABJRExFAFVuYWJsZSB0byBkZXRlcm1pbmUgTm9kZS5qcyB2ZXJzaW9uCgAAJXMAbm9kZS1yZXBvcnQALiU0ZCUwMmQlMDJkLiUwMmQlMDJkJTAyZC4lZC4lMDNkLnR4dABzdGRvdXQAc3RkZXJyACVzJXMlcwAvAApGYWlsZWQgdG8gb3BlbiBOb2RlLmpzIHJlcG9ydCBmaWxlOiAAIGRpcmVjdG9yeTogACAoZXJybm86IAApCgAKV3JpdGluZyBOb2RlLmpzIHJlcG9ydCB0byBmaWxlOiAACgBOb2RlLmpzIHJlcG9ydCBjb21wbGV0ZWQKAD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgA9PT09IE5vZGUgUmVwb3J0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoACkV2ZW50OiAALCBsb2NhdGlvbjogIgAiCgBGaWxlbmFtZTogACU0ZC8lMDJkLyUwMmQgJTAyZDolMDJkOiUwMmQARHVtcCBldmVudCB0aW1lOiAgAE1vZHVsZSBsb2FkIHRpbWU6IABQcm9jZXNzIElEOiAACj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09AAo9PT09IE5vZGUuanMgbGlidXYgSGFuZGxlIFN1bW1hcnkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoACihGbGFnczogUj1SZWYsIEE9QWN0aXZlKQoARmxhZ3MAVHlwZQBBZGRyZXNzAERldGFpbHMACj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgBDb21tYW5kIGxpbmU6IABub2RlLXJlcG9ydCB2ZXJzaW9uOiAAMi4yLjExACAoYnVpbHQgYWdhaW5zdCBOb2RlLmpzIHYAMTIuMTguNAAsIAAgYml0ACkACk9TIHZlcnNpb246IAAgAGdudV9nZXRfbGliY192ZXJzaW9uAChnbGliYzogAApNYWNoaW5lOiAACj09PT0gSmF2YVNjcmlwdCBTdGFjayBUcmFjZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgoATm8gc3RhY2sgdHJhY2UgYXZhaWxhYmxlLCB1bmFibGUgdG8gY3JlYXRlIHRlbXBvcmFyeSBmaWxlCgBObyBzdGFjayB0cmFjZSBhdmFpbGFibGUKAEphdmFTY3JpcHQgVk0gc3RhdGU6IAAKCgBKYXZhU2NyaXB0IFZNIHN0YXRlOiA8dW5rbm93bj4KCgBTaWduYWwgcmVjZWl2ZWQgd2hlbiBldmVudCBsb29wIGlkbGUsIG5vIHN0YWNrIHRyYWNlIGF2YWlsYWJsZQoACk5vIHN0YWNrIHRyYWNlIGF2YWlsYWJsZSBmcm9tIFN0YWNrVHJhY2U6OkN1cnJlbnRTdGFja1RyYWNlKCkKACUyZDogW3BjPSVwXSAAYXQgW2V2YWxdOgA6AGF0IFtldmFsXSAoACBbY29uc3RydWN0b3JdICgAICgAVXRmOFN0cmluZwAuLi8uLi9uYW4vbmFuLmgAbGVuIDw9IElOVF9NQVgAc3RyXyAhPSAwAAo9PT09IE5hdGl2ZSBTdGFjayBUcmFjZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKAE5hdGl2ZSBiYWNrdHJhY2UgZmFpbGVkLCBlcnJvciAATm8gZnJhbWVzIHRvIHByaW50CgAgWwBdAAo9PT09IEphdmFTY3JpcHQgRXhjZXB0aW9uIERldGFpbHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKAE5vIHN0YWNrIHRyYWNlIGF2YWlsYWJsZSBmcm9tIEV4Y2VwdGlvbjo6R2V0U3RhY2tUcmFjZSgpCgAKPT09PSBKYXZhU2NyaXB0IEhlYXAgYW5kIEdhcmJhZ2UgQ29sbGVjdG9yID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KAApIZWFwIHNwYWNlIG5hbWU6IAAKICAgIE1lbW9yeSBzaXplOiAAIGJ5dGVzLCBjb21taXR0ZWQgbWVtb3J5OiAAIGJ5dGVzCiAgICBDYXBhY2l0eTogACBieXRlcywgdXNlZDogACBieXRlcywgYXZhaWxhYmxlOiAAIGJ5dGVzAAoKVG90YWwgaGVhcCBtZW1vcnkgc2l6ZTogACBieXRlcwpUb3RhbCBoZWFwIGNvbW1pdHRlZCBtZW1vcnk6IAAgYnl0ZXMKVG90YWwgdXNlZCBoZWFwIG1lbW9yeTogACBieXRlcwpUb3RhbCBhdmFpbGFibGUgaGVhcCBtZW1vcnk6IAAgYnl0ZXMKCkhlYXAgbWVtb3J5IGxpbWl0OiAACj09PT0gUmVzb3VyY2UgVXNhZ2UgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgAKUHJvY2VzcyB0b3RhbCByZXNvdXJjZSB1c2FnZToAJWxkLiUwNmQACiAgVXNlciBtb2RlIENQVTogACBzZWNzAAogIEtlcm5lbCBtb2RlIENQVTogAAogIEF2ZXJhZ2UgQ1BVIENvbnN1bXB0aW9uIDogACUACiAgTWF4aW11bSByZXNpZGVudCBzZXQgc2l6ZTogACBieXRlcwogIFBhZ2UgZmF1bHRzOiAAIChJL08gcmVxdWlyZWQpIAAgKG5vIEkvTyByZXF1aXJlZCkACiAgRmlsZXN5c3RlbSBhY3Rpdml0eTogACByZWFkcyAAIHdyaXRlcwAKCkV2ZW50IGxvb3AgdGhyZWFkIHJlc291cmNlIHVzYWdlOgAlZC4lMDZkAAo9PT09IFN5c3RlbSBJbmZvcm1hdGlvbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoACkVudmlyb25tZW50IHZhcmlhYmxlcwoAICAAY29yZSBmaWxlIHNpemUgKGJsb2NrcykgICAgICAgAGRhdGEgc2VnIHNpemUgKGtieXRlcykgICAgICAgIABmaWxlIHNpemUgKGJsb2NrcykgICAgICAgICAgICAAbWF4IGxvY2tlZCBtZW1vcnkgKGJ5dGVzKSAgICAgAG1heCBtZW1vcnkgc2l6ZSAoa2J5dGVzKSAgICAgIABvcGVuIGZpbGVzICAgICAgICAgICAgICAgICAgICAAc3RhY2sgc2l6ZSAoYnl0ZXMpICAgICAgICAgICAgAGNwdSB0aW1lIChzZWNvbmRzKSAgICAgICAgICAgIABtYXggdXNlciBwcm9jZXNzZXMgICAgICAgICAgICAAdmlydHVhbCBtZW1vcnkgKGtieXRlcykgICAgICAgAApSZXNvdXJjZSBsaW1pdHMgICAgICAgICAgICAgICAgICAgICAgICBzb2Z0IGxpbWl0ICAgICAgaGFyZCBsaW1pdAoAICAgICAgIHVubGltaXRlZAAlMTZsbHUAICAgICAgIHVubGltaXRlZAoAJTE2bGx1CgAKTG9hZGVkIGxpYnJhcmllcwoAdwBub2RlLXJlcG9ydDogZmlsZW5hbWUgcGFyYW1ldGVyIGlzIHRvbyBsb25nAEphdmFTY3JpcHQgQVBJAFRyaWdnZXJSZXBvcnQAR2V0UmVwb3J0AC0tYWJvcnRfb25fdW5jYXVnaHRfZXhjZXB0aW9uAGV4Y2VwdGlvbgBPblVuY2F1Z2h0RXhjZXB0aW9uAGFib3J0LW9uLXVuY2F1Z2h0LWV4Y2VwdGlvbgBhYm9ydF9vbl91bmNhdWdodF9leGNlcHRpb24AJWQuJWQAClVuY2F1Z2h0IGV4Y2VwdGlvbiBhdDoKAE5PREVSRVBPUlRfVkVSQk9TRQBOT0RFUkVQT1JUX0VWRU5UUwBOT0RFUkVQT1JUX1NJR05BTABOT0RFUkVQT1JUX0ZJTEVOQU1FAE5PREVSRVBPUlRfRElSRUNUT1JZAHRyaWdnZXJSZXBvcnQAZ2V0UmVwb3J0AHNldEV2ZW50cwBzZXRTaWduYWwAc2V0RmlsZU5hbWUAc2V0RGlyZWN0b3J5AHNldFZlcmJvc2UAbm9kZS1yZXBvcnQ6IGluaXRpYWxpemF0aW9uIGNvbXBsZXRlLCBldmVudCBmbGFnczogJSN4IHNpZ25hbCBmbGFnOiAlI3gKAE5ldwAuLi8uLi9uYW4vbmFuX2ltcGxlbWVudGF0aW9uXzEyX2lubC5oAHZhbHVlLnNpemUoKSA8PSBJTlRfTUFYICYmICJzdHJpbmcgdG9vIGxvbmciAEZBVEFMIEVSUk9SOiAlcyAlcwoARkFUQUwgRVJST1I6ICVzCgBub2RlLXJlcG9ydDogaW5pdGlhbGl6YXRpb24gZmFpbGVkLCB1dl9zZW1faW5pdCgpIHJldHVybmVkICVkCgBub2RlLXJlcG9ydDogaW5pdGlhbGl6YXRpb24gZmFpbGVkLCB1dl9zZW1faW5pdCgpIHJldHVybmVkIGVycm9yCgBub2RlLXJlcG9ydDogaW5pdGlhbGl6YXRpb24gZmFpbGVkLCB1dl9tdXRleF9pbml0KCkgcmV0dXJuZWQgJWQKAG5vZGUtcmVwb3J0OiBpbml0aWFsaXphdGlvbiBmYWlsZWQsIHV2X211dGV4X2luaXQoKSByZXR1cm5lZCBlcnJvcgoAbm9kZS1yZXBvcnQ6IGluaXRpYWxpemF0aW9uIGZhaWxlZCwgdXZfYXN5bmNfaW5pdCgpIHJldHVybmVkICVkCgBub2RlLXJlcG9ydDogaW5pdGlhbGl6YXRpb24gZmFpbGVkLCB1dl9hc3luY19pbml0KCkgcmV0dXJuZWQgZXJyb3IKAG5vZGUtcmVwb3J0OiBTdGFydFdhdGNoZG9nVGhyZWFkIHB0aHJlYWRfY3JlYXRlKCkgZmFpbGVkOiAlcwoAbm9kZS1yZXBvcnQ6IHNpZ25hbCAlcyByZWNlaXZlZAoAbm9kZS1yZXBvcnQ6IFNpZ25hbER1bXBJbnRlcnJ1cHRDYWxsYmFjayBoYW5kbGluZyBzaWduYWwKAG5vZGUtcmVwb3J0OiBTaWduYWxEdW1wSW50ZXJydXB0Q2FsbGJhY2sgdHJpZ2dlcmluZyByZXBvcnQKAFNpZ25hbER1bXBJbnRlcnJ1cHRDYWxsYmFjawBub2RlLXJlcG9ydDogU2lnbmFsRHVtcEFzeW5jQ2FsbGJhY2sgaGFuZGxpbmcgc2lnbmFsCgBub2RlLXJlcG9ydDogU2lnbmFsRHVtcEFzeW5jQ2FsbGJhY2sgdHJpZ2dlcmluZyBOb2RlUmVwb3J0CgBTaWduYWxEdW1wQXN5bmNDYWxsYmFjawAuLi9zcmMvbW9kdWxlLmNjAG5vZGVyZXBvcnQAZmF0YWxlcnJvcgBzaWduYWwAYXBpY2FsbABVbnJlY29nbmlzZWQgYXJndW1lbnQgZm9yIG5vZGUtcmVwb3J0IGV2ZW50cyBvcHRpb246IABNaXNzaW5nIGFyZ3VtZW50IGZvciBub2RlLXJlcG9ydCBzaWduYWwgb3B0aW9uCgBTSUdVU1IyAFNJR1FVSVQAVW5yZWNvZ25pc2VkIGFyZ3VtZW50IGZvciBub2RlLXJlcG9ydCBzaWduYWwgb3B0aW9uOiAATWlzc2luZyBhcmd1bWVudCBmb3Igbm9kZS1yZXBvcnQgZmlsZW5hbWUgb3B0aW9uCgBTdXBwbGllZCBub2RlLXJlcG9ydCBmaWxlbmFtZSB0b28gbG9uZyAobWF4IAAgY2hhcmFjdGVycykKAE1pc3NpbmcgYXJndW1lbnQgZm9yIG5vZGUtcmVwb3J0IGRpcmVjdG9yeSBvcHRpb24KAFN1cHBsaWVkIG5vZGUtcmVwb3J0IGRpcmVjdG9yeSBwYXRoIHRvbyBsb25nIChtYXggAE1pc3NpbmcgYXJndW1lbnQgZm9yIG5vZGUtcmVwb3J0IHZlcmJvc2Ugc3dpdGNoIG9wdGlvbgoAeWVzAHRydWUAbm8AZmFsc2UAVW5yZWNvZ25pc2VkIGFyZ3VtZW50IGZvciBub2RlLXJlcG9ydCB2ZXJib3NlIHN3aXRjaCBvcHRpb246IABwcm9jZXNzAHZlcnNpb24ATm9kZS5qcyB2ZXJzaW9uOiAAdmVyc2lvbnMAbm9kZQBOb2RlLmpzIHZlcnNpb246IHYAOiAALAogACBjb25uZWN0ZWQgdG8gACAobm90IGNvbm5lY3RlZCkAZmlsZW5hbWU6IAB1bmtub3duAGFzeW5jAGNoZWNrAGZzX2V2ZW50AGZzX3BvbGwAaGFuZGxlAGlkbGUAcGlwZQBwb2xsAHByZXBhcmUAcGlkOiAAc3RyZWFtAHRjcAB0aW1lcgByZXBlYXQ6IAAsIHRpbWVvdXQgaW46IAAgbXMALCB0aW1lb3V0IGV4cGlyZWQ6IAAgbXMgYWdvAHR0eQB3aWR0aDogACwgaGVpZ2h0OiAAdWRwAHNpZ251bTogAGZpbGUAbWF4AHNlbmQgYnVmZmVyIHNpemU6IAAsIHJlY3YgYnVmZmVyIHNpemU6IAAsIHN0ZGluACwgc3Rkb3V0ACwgc3RkZXJyACwgZmlsZSBkZXNjcmlwdG9yOiAALCB3cml0ZSBxdWV1ZSBzaXplOiAALCByZWFkYWJsZQAsIHdyaXRhYmxlAFsAXSAgIAAlMDN1ACwAU0lHSFVQAFNJR0lOVABTSUdJTEwAU0lHVFJBUABTSUdBQlJUAFNJR0JVUwBTSUdGUEUAU0lHS0lMTABTSUdVU1IxAFNJR1NFR1YAU0lHUElQRQBTSUdBTFJNAFNJR1RFUk0AU0lHQ0hMRABTSUdDT05UAFNJR1NUT1AAU0lHVFNUUABTSUdUVElOAFNJR1RUT1UAU0lHVVJHAFNJR1hDUFUAU0lHWEZTWgBTSUdWVEFMUk0AU0lHUFJPRgBTSUdXSU5DSABTSUdJTwBTSUdJTkZPAFNJR1NZUwAAAQAAABwAAAAGAAAANAAAAAAAAAA0AAAAAgAAANFYBQFhAQMBAAAAAQEAAQEhAAIBEQsEATASAABMAAAATAAAANGMAAAAAAAATAAAAAMAAAAMAC4AxAAAAAAAAADQHwABwCAAADAiAAEgIwACQCMABKAlAAXgJgAAICgAATApAABALgACkC4AALA2AAHANwAFoDgABGA5AAAAPwABgD8ABOBAAAGAQQAAQEMAAUBGAAQwRwACAEkAAZBOAAKwTgABUFAAA9BQAALgUgADEFMAAsBTAADgVQAD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AAAAAHiuAAAAAAAAmK4AAAAAAACgrgAAAAAAANquAAAAAAAAr64AAAAAAAC3rgAAAAAAAL+uAAAAAAAAya4AAAAAAADRrgAAAAAAAOCuAAAAAAAAUK4AAAAAAACxqgAAAAAAAAAAAAAAAAAAwJgAAAAAAADDmAAAAAAAAMaYAAAAAAAAz5gAAAAAAADVmAAAAAAAAN6YAAAAAAAACAAAAB8AAABIAAAAAAAAAAAAAAAAAAAAFaoAAAAAAAAwWwAAAAAAAAAAAAAAAAAAJqoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAESEQcChYRWBfRGBbRFJDVkxXQnAIcAhSQYAICHAgUkNWTFJCUkNwCHAIYCBBVkNSQVEAAAAAAAARQF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMUV2AFFxGJBAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgCAkA6g2AOQQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAgJD8/////////wGg2AOQQF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNHN5bmNFdgCAcJBAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1aW1idWVFUktOU182bG9jYWxlRQCA2P//////////AZBAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1dWZsb3dFdgCA2Pz/////////AaDYA5BAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2V0YnVmRVBjbACAwP//////////AZBAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2eHNnZXRuRVBjbACAwPz/////////AaDYA5BAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2eHNwdXRuRVBLY2wAgLj8/////////wGg2AOQQF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFOXNob3dtYW55Y0V2AIDw+/////////8BoNgDkEBfX1pOU3QzX18xNGNlcnJFAICQ7f////////8BkEBfX1pOU3QzX18xNGNvdXRFAJBAX19aTlN0M19fMTVjdHlwZUljRTJpZEUAkEBfX1pOU3QzX18xN2NvZGVjdnRJY2MxMV9fbWJzdGF0ZV90RTJpZEUAkEBfX1pUVk5TdDNfXzE5YmFzaWNfaW9zSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAIBAkEBfX1pUdjBfbjI0X05TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQwRXYAgNANoNgDkEBfX1pUdjBfbjI0X05TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAgJD8/////////wGg2AOQQF9fWmRhUHYAgOj0/////////wGg+P//////////AZBAX19aZGxQdgCg+P//////////AZBAX19abmFtAKD4//////////8BkEBfX1pud20AoPj//////////wGQEkBfX19zdGFja19jaGtfZ3VhcmQAgMj5/////////wGQQF9fX3N0ZGVycnAAkEBfX19zdGRvdXRwAJBAX2Vudmlyb24AkEBkeWxkX3N0dWJfYmluZGVyAIDY/v////////8BkAAAAABAX19aTjEwbm9kZXJlcG9ydDIyUmVwb3J0U2lnbmFsVGhyZWFkTWFpbkVQdgBRcRCQQF9fWmRhUHYAgIgHoPj//////////wGQQF9fWmRsUHYAoPj//////////wGQQF9fWm5hbQCg+P//////////AZBAX19abndtAKD4//////////8BkAAAcagBEkBfX05TR2V0QXJnYwCQAHGwARJAX19OU0dldEFyZ3YAkABxuAE+QF9fWk4ydjgxMFN0YWNrVHJhY2UxN0N1cnJlbnRTdGFja1RyYWNlRVBOU183SXNvbGF0ZUVpTlMwXzE3U3RhY2tUcmFjZU9wdGlvbnNFAJAAccABPkBfX1pOMnY4MTFIYW5kbGVTY29wZTEyQ3JlYXRlSGFuZGxlRVBOU184aW50ZXJuYWw3SXNvbGF0ZUVtAJAAccgBPkBfX1pOMnY4MTFIYW5kbGVTY29wZUMxRVBOU183SXNvbGF0ZUUAkABx0AE+QF9fWk4ydjgxMUhhbmRsZVNjb3BlRDFFdgCQAHHYAT5AX19aTjJ2ODExSGFuZGxlU2NvcGVEMkV2AJAAceABPkBfX1pOMnY4MTRIZWFwU3RhdGlzdGljc0MxRXYAkABx6AE+QF9fWk4ydjgxNE9iamVjdFRlbXBsYXRlMTFOZXdJbnN0YW5jZUVOU181TG9jYWxJTlNfN0NvbnRleHRFRUUAkABx8AE+QF9fWk4ydjgxNE9iamVjdFRlbXBsYXRlMjFTZXRJbnRlcm5hbEZpZWxkQ291bnRFaQCQAHH4AT5AX19aTjJ2ODE0T2JqZWN0VGVtcGxhdGUzTmV3RVBOU183SXNvbGF0ZUVOU181TG9jYWxJTlNfMTZGdW5jdGlvblRlbXBsYXRlRUVFAJAAcYACPkBfX1pOMnY4MTZGdW5jdGlvblRlbXBsYXRlMTFHZXRGdW5jdGlvbkVOU181TG9jYWxJTlNfN0NvbnRleHRFRUUAkABxiAI+QF9fWk4ydjgxNkZ1bmN0aW9uVGVtcGxhdGUxMlNldENsYXNzTmFtZUVOU181TG9jYWxJTlNfNlN0cmluZ0VFRQCQAHGQAj5AX19aTjJ2ODE2RnVuY3Rpb25UZW1wbGF0ZTNOZXdFUE5TXzdJc29sYXRlRVBGdlJLTlNfMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOU181VmFsdWVFRUVFTlNfNUxvY2FsSVM0X0VFTlNBX0lOU185U2lnbmF0dXJlRUVFaU5TXzE5Q29uc3RydWN0b3JCZWhhdmlvckVOU18xNFNpZGVFZmZlY3RUeXBlRQCQAHGYAj5AX19aTjJ2ODE5SGVhcFNwYWNlU3RhdGlzdGljc0MxRXYAkABxoAI+QF9fWk4ydjgyMEVzY2FwYWJsZUhhbmRsZVNjb3BlNkVzY2FwZUVQbQCQAHGoAj5AX19aTjJ2ODIwRXNjYXBhYmxlSGFuZGxlU2NvcGVDMUVQTlNfN0lzb2xhdGVFAJAAcbACPkBfX1pOMnY4MlY4MTBHZXRWZXJzaW9uRXYAkABxuAI+QF9fWk4ydjgyVjgxMlRvTG9jYWxFbXB0eUV2AJAAccACPkBfX1pOMnY4MlY4MThTZXRGbGFnc0Zyb21TdHJpbmdFUEtjaQCQAHHIAj5AX19aTjJ2ODZPYmplY3QxNlNldEludGVybmFsRmllbGRFaU5TXzVMb2NhbElOU181VmFsdWVFRUUAkABx0AI+QF9fWk4ydjg2T2JqZWN0MTlHZXRPd25Qcm9wZXJ0eU5hbWVzRU5TXzVMb2NhbElOU183Q29udGV4dEVFRQCQAHHYAj5AX19aTjJ2ODZPYmplY3QyMFNsb3dHZXRJbnRlcm5hbEZpZWxkRWkAkABx4AI+QF9fWk4ydjg2T2JqZWN0M0dldEVOU181TG9jYWxJTlNfN0NvbnRleHRFRUVOUzFfSU5TXzVWYWx1ZUVFRQCQAHHoAj5AX19aTjJ2ODZPYmplY3QzR2V0RU5TXzVMb2NhbElOU183Q29udGV4dEVFRWoAkABx8AI+QF9fWk4ydjg2T2JqZWN0M1NldEVOU181TG9jYWxJTlNfN0NvbnRleHRFRUVOUzFfSU5TXzVWYWx1ZUVFRVM1XwCQAHH4Aj5AX19aTjJ2ODZTdHJpbmcxMU5ld0Zyb21VdGY4RVBOU183SXNvbGF0ZUVQS2NOU18xM05ld1N0cmluZ1R5cGVFaQCQAHGAAz5AX19aTjJ2ODdDb250ZXh0Nkdsb2JhbEV2AJAAcYgDPkBfX1pOMnY4N0lzb2xhdGUxMEdldEN1cnJlbnRFdgCQAHGQAz5AX19aTjJ2ODdJc29sYXRlMTRHZXRTdGFja1NhbXBsZUVSS05TXzEzUmVnaXN0ZXJTdGF0ZUVQUHZtUE5TXzEwU2FtcGxlSW5mb0UAkABxmAM+QF9fWk4ydjg3SXNvbGF0ZTE0VGhyb3dFeGNlcHRpb25FTlNfNUxvY2FsSU5TXzVWYWx1ZUVFRQCQAHGgAz5AX19aTjJ2ODdJc29sYXRlMTZSZXF1ZXN0SW50ZXJydXB0RVBGdlBTMF9QdkVTMl8AkABxqAM+QF9fWk4ydjg3SXNvbGF0ZTE3R2V0Q3VycmVudENvbnRleHRFdgCQAHGwAz5AX19aTjJ2ODdJc29sYXRlMTdHZXRIZWFwU3RhdGlzdGljc0VQTlNfMTRIZWFwU3RhdGlzdGljc0UAkABxuAM+QF9fWk4ydjg3SXNvbGF0ZTE4TnVtYmVyT2ZIZWFwU3BhY2VzRXYAkABxwAM+QF9fWk4ydjg3SXNvbGF0ZTIwU2V0RmF0YWxFcnJvckhhbmRsZXJFUEZ2UEtjUzJfRQCQAHHIAz5AX19aTjJ2ODdJc29sYXRlMjJHZXRIZWFwU3BhY2VTdGF0aXN0aWNzRVBOU18xOUhlYXBTcGFjZVN0YXRpc3RpY3NFbQCQAHHQAz5AX19aTjJ2ODdJc29sYXRlMzVTZXRBYm9ydE9uVW5jYXVnaHRFeGNlcHRpb25DYWxsYmFja0VQRmJQUzBfRQCQAHHYAz5AX19aTjJ2ODdJc29sYXRlNDFTZXRDYXB0dXJlU3RhY2tUcmFjZUZvclVuY2F1Z2h0RXhjZXB0aW9uc0ViaU5TXzEwU3RhY2tUcmFjZTE3U3RhY2tUcmFjZU9wdGlvbnNFAJAAceADPkBfX1pOMnY4N01lc3NhZ2UyMlByaW50Q3VycmVudFN0YWNrVHJhY2VFUE5TXzdJc29sYXRlRVA3X19zRklMRQCQAHHoAz5AX19aTjJ2ODhFeHRlcm5hbDNOZXdFUE5TXzdJc29sYXRlRVB2AJAAcfADPkBfX1pOMnY4OFRyeUNhdGNoQzFFUE5TXzdJc29sYXRlRQCQAHH4Az5AX19aTjJ2ODhUcnlDYXRjaEQxRXYAkABxgAQ+QF9fWk4ydjg4aW50ZXJuYWwzNUlzb2xhdGVGcm9tTmV2ZXJSZWFkT25seVNwYWNlT2JqZWN0RW0AkABxiAQ+QF9fWk4ydjg5RXhjZXB0aW9uMTNDcmVhdGVNZXNzYWdlRVBOU183SXNvbGF0ZUVOU181TG9jYWxJTlNfNVZhbHVlRUVFAJAAcZAEPkBfX1pOMnY4OUV4Y2VwdGlvbjEzR2V0U3RhY2tUcmFjZUVOU181TG9jYWxJTlNfNVZhbHVlRUVFAJAAcZgEPkBfX1pOMnY4OUV4Y2VwdGlvbjVFcnJvckVOU181TG9jYWxJTlNfNlN0cmluZ0VFRQCQAHGgBD5AX19aTksydjgxMFN0YWNrRnJhbWUxMUdldFNjcmlwdElkRXYAkABxqAQ+QF9fWk5LMnY4MTBTdGFja0ZyYW1lMTNHZXRMaW5lTnVtYmVyRXYAkABxsAQ+QF9fWk5LMnY4MTBTdGFja0ZyYW1lMTNHZXRTY3JpcHROYW1lRXYAkABxuAQ+QF9fWk5LMnY4MTBTdGFja0ZyYW1lMTNJc0NvbnN0cnVjdG9yRXYAkABxwAQ+QF9fWk5LMnY4MTBTdGFja0ZyYW1lMTVHZXRGdW5jdGlvbk5hbWVFdgCQAHHIBD5AX19aTksydjgxMFN0YWNrRnJhbWU2SXNFdmFsRXYAkABx0AQ+QF9fWk5LMnY4MTBTdGFja0ZyYW1lOUdldENvbHVtbkV2AJAAcdgEPkBfX1pOSzJ2ODEwU3RhY2tUcmFjZTEzR2V0RnJhbWVDb3VudEV2AJAAceAEPkBfX1pOSzJ2ODEwU3RhY2tUcmFjZThHZXRGcmFtZUVQTlNfN0lzb2xhdGVFagCQAHHoBD5AX19aTksydjg1QXJyYXk2TGVuZ3RoRXYAkABx8AQ+QF9fWk5LMnY4NVZhbHVlMTNJc05hdGl2ZUVycm9yRXYAkABx+AQ+QF9fWk5LMnY4NVZhbHVlOElzT2JqZWN0RXYAkABxgAU+QF9fWk5LMnY4NVZhbHVlOFRvU3RyaW5nRU5TXzVMb2NhbElOU183Q29udGV4dEVFRQCQAHGIBT5AX19aTksydjg2U3RyaW5nNkxlbmd0aEV2AJAAcZAFPkBfX1pOSzJ2ODZTdHJpbmc5V3JpdGVVdGY4RVBOU183SXNvbGF0ZUVQY2lQaWkAkABxmAU+QF9fWk5LMnY4N01lc3NhZ2UzR2V0RXYAkABxoAU+QF9fWk5LMnY4OEV4dGVybmFsNVZhbHVlRXYAkABxqAURQF9fWk5LU3QzX18xMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFN2NvbXBhcmVFbW1QS2NtAJAAcbAFEUBfX1pOS1N0M19fMTIxX19iYXNpY19zdHJpbmdfY29tbW9uSUxiMUVFMjBfX3Rocm93X2xlbmd0aF9lcnJvckV2AJAAcbgFEUBfX1pOS1N0M19fMTZsb2NhbGU5aGFzX2ZhY2V0RVJOUzBfMmlkRQCQAHHABRFAX19aTktTdDNfXzE2bG9jYWxlOXVzZV9mYWNldEVSTlMwXzJpZEUAkABxyAURQF9fWk5LU3QzX18xOGlvc19iYXNlNmdldGxvY0V2AJAAcdAFEUBfX1pOU3QzX18xMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFNmFwcGVuZEVQS2MAkABx2AURQF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU2YXBwZW5kRVBLY20AkABx4AURQF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU2YXNzaWduRVBLYwCQAHHoBRFAX19aTlN0M19fMTEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRTZyZXNpemVFbWMAkABx8AURQF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU5cHVzaF9iYWNrRWMAkABx+AURQF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVDMUVSS1M1XwCQAHGABhFAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFM3B1dEVjAJAAcYgGEUBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1Zmx1c2hFdgCQAHGQBhFAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNnNlbnRyeUMxRVJTM18AkABxmAYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRTZzZW50cnlEMUV2AJAAcaAGEUBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMkV2AJAAcagGEUBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVsc0VQS3YAkABxsAYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRWQAkABxuAYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRWkAkABxwAYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRWwAkABxyAYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRW0AkABx0AYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRXkAkABx2AYRQF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFQzJFdgCQAHHgBhFAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMkV2AJAAcegGEUBfX1pOU3QzX18xNmxvY2FsZUMxRVJLUzBfAJAAcfAGEUBfX1pOU3QzX18xNmxvY2FsZUQxRXYAkABx+AYRQF9fWk5TdDNfXzE4aW9zX2Jhc2U0aW5pdEVQdgCQAHGABxFAX19aTlN0M19fMThpb3NfYmFzZTVjbGVhckVqAJAAcYgHEUBfX1pOU3QzX18xOWJhc2ljX2lvc0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVFN2NvcHlmbXRFUktTM18AkABxkAcRQF9fWk5TdDNfXzE5YmFzaWNfaW9zSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMUV2AJAAcZgHEUBfX1pOU3QzX18xOWJhc2ljX2lvc0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDJFdgCQAHHABxJAX19fYXNzZXJ0X3J0bgCQAHHIBxJAX19fYnplcm8AkABx0AcSQF9fX2N4YV9hdGV4aXQAkABx2AcRQF9fX2N4YV9kZW1hbmdsZQCQAHHgBxJAX19fZXJyb3IAkABx6AcSQF9fX3N0YWNrX2Noa19mYWlsAJAAcfAHEkBfX2R5bGRfZ2V0X2ltYWdlX25hbWUAkABx+AcSQF9hYm9ydACQAHGACBJAX2JhY2t0cmFjZQCQAHGICBJAX2RpZmZ0aW1lAJAAcZAIEkBfZGxhZGRyAJAAcZgIEkBfZGxzeW0AkABxoAgSQF9leGl0AJAAcagIEkBfZmNsb3NlAJAAcbAIEkBfZmZsdXNoAJAAcbgIEkBfZmdldHMAkABxwAgSQF9mb3BlbgCQAHHICBJAX2ZwcmludGYAkABx0AgSQF9mcmVhZACQAHHYCBJAX2ZyZWUAkABx4AgSQF9mc2Vla28AkABx6AgSQF9mdGVsbG8AkABx8AgSQF9md3JpdGUAkABx+AgSQF9nZXRlZ2lkAJAAcYAJEkBfZ2V0ZW52AJAAcYgJEkBfZ2V0ZXVpZACQAHGQCRJAX2dldGdpZACQAHGYCRJAX2dldHBpZACQAHGgCRJAX2dldHJsaW1pdACQAHGoCRJAX2dldHJ1c2FnZQCQAHGwCRJAX2dldHRpbWVvZmRheQCQAHG4CRJAX2dldHVpZACQAHHACRJAX2xvY2FsdGltZV9yAJAAccgJEkBfbWFsbG9jAJAAcdAJEkBfbWVtY2hyAJAAcdgJEkBfbWVtY21wAJAAceAJEkBfbWVtY3B5AJAAcegJEkBfbWVtbW92ZQCQAHHwCRJAX21lbXNldACQAHH4CT5AX25vZGVfbW9kdWxlX3JlZ2lzdGVyAJAAcYAKEkBfcHRocmVhZF9hdHRyX2Rlc3Ryb3kAkABxiAoSQF9wdGhyZWFkX2F0dHJfaW5pdACQAHGQChJAX3B0aHJlYWRfYXR0cl9zZXRkZXRhY2hzdGF0ZQCQAHGYChJAX3B0aHJlYWRfYXR0cl9zZXRzdGFja3NpemUAkABxoAoSQF9wdGhyZWFkX2NyZWF0ZQCQAHGoChJAX3B0aHJlYWRfbWFjaF90aHJlYWRfbnAAkABxsAoSQF9wdGhyZWFkX3NlbGYAkABxuAoSQF9wdGhyZWFkX3NpZ21hc2sAkABxwAoSQF9yYWlzZQCQAHHIChJAX3Jld2luZACQAHHQChJAX3NpZ2FjdGlvbgCQAHHYChJAX3NucHJpbnRmAJAAceAKEkBfc3NjYW5mAJAAcegKEkBfc3RyY21wAJAAcfAKEkBfc3RyZXJyb3IAkABx+AoSQF9zdHJsZW4AkABxgAsSQF9zdHJuY21wAJAAcYgLEkBfdGhyZWFkX2luZm8AkABxkAsSQF90aW1lAJAAcZgLEkBfdG1wZmlsZQCQAHGgCxJAX3VuYW1lAJAAcagLPkBfdXZfYXN5bmNfaW5pdACQAHGwCz5AX3V2X2FzeW5jX3NlbmQAkABxuAs+QF91dl9kZWZhdWx0X2xvb3AAkABxwAs+QF91dl9maWxlbm8AkABxyAs+QF91dl9mc19ldmVudF9nZXRwYXRoAJAAcdALPkBfdXZfZnNfcG9sbF9nZXRwYXRoAJAAcdgLPkBfdXZfZ2V0bmFtZWluZm8AkABx4As+QF91dl9oYXNfcmVmAJAAcegLPkBfdXZfaW5ldF9udG9wAJAAcfALPkBfdXZfaXNfYWN0aXZlAJAAcfgLPkBfdXZfaXNfcmVhZGFibGUAkABxgAw+QF91dl9pc193cml0YWJsZQCQAHGIDD5AX3V2X211dGV4X2luaXQAkABxkAw+QF91dl9tdXRleF9sb2NrAJAAcZgMPkBfdXZfbXV0ZXhfdW5sb2NrAJAAcaAMPkBfdXZfbm93AJAAcagMPkBfdXZfcmVjdl9idWZmZXJfc2l6ZQCQAHGwDD5AX3V2X3NlbV9pbml0AJAAcbgMPkBfdXZfc2VtX3Bvc3QAkABxwAw+QF91dl9zZW1fd2FpdACQAHHIDD5AX3V2X3NlbmRfYnVmZmVyX3NpemUAkABx0Aw+QF91dl90Y3BfZ2V0cGVlcm5hbWUAkABx2Aw+QF91dl90Y3BfZ2V0c29ja25hbWUAkABx4Aw+QF91dl90aW1lcl9nZXRfcmVwZWF0AJAAcegMPkBfdXZfdHR5X2dldF93aW5zaXplAJAAcfAMPkBfdXZfdWRwX2dldHNvY2tuYW1lAJAAcfgMPkBfdXZfdW5yZWYAkABxgA0+QF91dl93YWxrAJAAAAAAAAAAAAABX19aTjEwbm9kZXJlcG9ydAAUAAQxAEg5AL4DMgDyCDMwUHJvY2Vzc05vZGVSZXBvcnRWZXJib3NlU3dpdGNoRVBLYwCjCgAKN1RyaWdnZXJOb2RlUmVwb3J0RVBOMnY4N0lzb2xhdGVFTlNfOUR1bXBFdmVudEVQS2NTNV9QY05TMF8xME1heWJlTG9jYWxJTlMwXzVWYWx1ZUVFRQDvATMA9AE5T25VbmNhdWdodEV4Y2VwdGlvbkVQTjJ2ODdJc29sYXRlRQCQBTFTAJwFMgD+BTAAggc2AKkKNADtCjVyZXBvcnQAlQw4AL0NAwCwJAAAAkdldE5vZGVSZXBvcnRFUE4ydjg3SXNvbGF0ZUVOU185RHVtcEV2ZW50RVBLY1M1X05TMF8xME1heWJlTG9jYWxJTlMwXzVWYWx1ZUVFRVJOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzlfMTFjaGFyX3RyYWl0c0ljRUVFRQCzA1RyaWdnZXJSZXBvcnRFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQC4AwMA8GUABACQlwEAAARHZXRSZXBvcnRFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQCYBFNldACeBHY4X3N0YXRlc0UApQ1sb2FkX3RpbWVFAPcNBACAnQEAAAJFdmVudHNFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQCKBVNpZ25hbEVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAJYFBACwowEABACwpwEABADwsAEAAAJldACyBWlnbm9TdHJpbmdFaQCZDQACRmlsZU5hbWVFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQD4BUxvYWRUaW1lRXYA5woEAICzAQAAAlNldERpcmVjdG9yeUVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAPwGV3JpdGVJbnRlZ2VyRVJOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzBfMTFjaGFyX3RyYWl0c0ljRUVFRW0Anw0EAJC0AQAABFNldFZlcmJvc2VFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQDmCEluaXRpYWxpemVFTjJ2ODVMb2NhbElOUzBfNk9iamVjdEVFRQDsCHJlcG9ydFBhdGhFUDExdXZfaGFuZGxlX3NSTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlMyXzExY2hhcl90cmFpdHNJY0VFTlMyXzlhbGxvY2F0b3JJY0VFRUUAjQ13YWxrSGFuZGxlRVAxMXV2X2hhbmRsZV9zUHYAkw0EAKC1AQAEALC2AQAABDJSZXBvcnRTaWduYWxUaHJlYWRNYWluRVB2AOkJM1Byb2Nlc3NOb2RlUmVwb3J0AO8JNVByb2Nlc3NOb2RlUmVwb3J0RmlsZU5hbWVFUEtjAJcKNlByb2Nlc3NOb2RlUmVwb3J0RGlyZWN0b3J5RVBLYwCdCgQE4M4BAAACRXZlbnRzRVBLYwCLClNpZ25hbEVQS2MAkQoEAIDgAQAEAPDiAQAEAMDkAQAEAODlAQAEAIDnAQAAAlNldFZlcnNpb25TdHJpbmdFUE4ydjg3SXNvbGF0ZUUA4QpyZXBvcnRfZGlyZWN0b3J5RQCxDQQAgOkBAAQA8PoBAAADU2V0Q29tbWFuZExpbmVFdgCJDHJlcG9ydEVuZHBvaW50RVAxMXV2X2hhbmRsZV9zUDhzb2NrYWRkclBLY1JOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOUzZfMTFjaGFyX3RyYWl0c0ljRUVOUzZfOWFsbG9jYXRvckljRUVFRQCPDHZlcnNpb25fc3RyaW5nRQC3DQQAsPsBAAQAkP0BAAACRW5kcG9pbnRzRVAxMXV2X2hhbmRsZV9zUk5TdDNfXzExOWJhc2ljX29zdHJpbmdzdHJlYW1JY05TMl8xMWNoYXJfdHJhaXRzSWNFRU5TMl85YWxsb2NhdG9ySWNFRUVFAIcNX2ZpbGVuYW1lRQCrDQQAkIACAAQAsIICAAQAwIUCAAQA8JYCAAQAoJcCAAQAwPUCAAQAwPYCAAQAkPcCAAQAoP8CAAACY29tbWFuZGxp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ZU5hbWVFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQBfX1pOMTBub2RlcmVwb3J0MTFTZXRMb2FkVGltZUV2AF9fWk4xMG5vZGVyZXBvcnQxMVNpZ25vU3RyaW5nRWkAX19aTjEwbm9kZXJlcG9ydDEyU2V0RGlyZWN0b3J5RVJLTjNOYW4yMEZ1bmN0aW9uQ2FsbGJhY2tJbmZvSU4ydjg1VmFsdWVFRUUAX19aTjEwbm9kZXJlcG9ydDEyV3JpdGVJbnRlZ2VyRVJOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzBfMTFjaGFyX3RyYWl0c0ljRUVFRW0AX19aTjEwbm9kZXJlcG9ydDEzR2V0Tm9kZVJlcG9ydEVQTjJ2ODdJc29sYXRlRU5TXzlEdW1wRXZlbnRFUEtjUzVfTlMwXzEwTWF5YmVMb2NhbElOUzBfNVZhbHVlRUVFUk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TOV8xMWNoYXJfdHJhaXRzSWNFRUVFAF9fWk4xMG5vZGVyZXBvcnQxM1RyaWdnZXJSZXBvcnRFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQBfX1pOMTBub2RlcmVwb3J0MTRTZXRDb21tYW5kTGluZUV2AF9fWk4xMG5vZGVyZXBvcnQxNHJlcG9ydEVuZHBvaW50RVAxMXV2X2hhbmRsZV9zUDhzb2NrYWRkclBLY1JOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOUzZfMTFjaGFyX3RyYWl0c0ljRUVOUzZfOWFsbG9jYXRvckljRUVFRQBfX1pOMTBub2RlcmVwb3J0MTR2ZXJzaW9uX3N0cmluZ0UAX19aTjEwbm9kZXJlcG9ydDE1cmVwb3J0RW5kcG9pbnRzRVAxMXV2X2hhbmRsZV9zUk5TdDNfXzExOWJhc2ljX29zdHJpbmdzdHJlYW1JY05TMl8xMWNoYXJfdHJhaXRzSWNFRU5TMl85YWxsb2NhdG9ySWNFRUVFAF9fWk4xMG5vZGVyZXBvcnQxNXJlcG9ydF9maWxlbmFtZUUAX19aTjEwbm9kZXJlcG9ydDE2U2V0VmVyc2lvblN0cmluZ0VQTjJ2ODdJc29sYXRlRQBfX1pOMTBub2RlcmVwb3J0MTZyZXBvcnRfZGlyZWN0b3J5RQBfX1pOMTBub2RlcmVwb3J0MTdUcmlnZ2VyTm9kZVJlcG9ydEVQTjJ2ODdJc29sYXRlRU5TXzlEdW1wRXZlbnRFUEtjUzVfUGNOUzBfMTBNYXliZUxvY2FsSU5TMF81VmFsdWVFRUUAX19aTjEwbm9kZXJlcG9ydDE4Y29tbWFuZGxpbmVfc3RyaW5nRQBfX1pOMTBub2RlcmVwb3J0MThsb2FkdGltZV90bV9zdHJ1Y3RFAF9fWk4xMG5vZGVyZXBvcnQxOU9uVW5jYXVnaHRFeGNlcHRpb25FUE4ydjg3SXNvbGF0ZUUAX19aTjEwbm9kZXJlcG9ydDIyUmVwb3J0U2lnbmFsVGhyZWFkTWFpbkVQdgBfX1pOMTBub2RlcmVwb3J0MjNQcm9jZXNzTm9kZVJlcG9ydEV2ZW50c0VQS2MAX19aTjEwbm9kZXJlcG9ydDIzUHJvY2Vzc05vZGVSZXBvcnRTaWduYWxFUEtjAF9fWk4xMG5vZGVyZXBvcnQyNVByb2Nlc3NOb2RlUmVwb3J0RmlsZU5hbWVFUEtjAF9fWk4xMG5vZGVyZXBvcnQyNlByb2Nlc3NOb2RlUmVwb3J0RGlyZWN0b3J5RVBLYwBfX1pOMTBub2RlcmVwb3J0MzBQcm9jZXNzTm9kZVJlcG9ydFZlcmJvc2VTd2l0Y2hFUEtjAF9fWk4xMG5vZGVyZXBvcnQ5R2V0UmVwb3J0RVJLTjNOYW4yMEZ1bmN0aW9uQ2FsbGJhY2tJbmZvSU4ydjg1VmFsdWVFRUUAX19aTjEwbm9kZXJlcG9ydDlTZXRFdmVudHNFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQBfX1pOMTBub2RlcmVwb3J0OVNldFNpZ25hbEVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAF9fWk4xMG5vZGVyZXBvcnQ5bG9hZF90aW1lRQBfX1pOMTBub2RlcmVwb3J0OXY4X3N0YXRlc0UAX19OU0dldEFyZ2MAX19OU0dldEFyZ3YAX19aTjJ2ODEwU3RhY2tUcmFjZTE3Q3VycmVudFN0YWNrVHJhY2VFUE5TXzdJc29sYXRlRWlOUzBfMTdTdGFja1RyYWNlT3B0aW9uc0UAX19aTjJ2ODExSGFuZGxlU2NvcGUxMkNyZWF0ZUhhbmRsZUVQTlNfOGludGVybmFsN0lzb2xhdGVFbQBfX1pOMnY4MTFIYW5kbGVTY29wZUMxRVBOU183SXNvbGF0ZUUAX19aTjJ2ODExSGFuZGxlU2NvcGVEMUV2AF9fWk4ydjgxMUhhbmRsZVNjb3BlRDJFdgBfX1pOMnY4MTRIZWFwU3RhdGlzdGljc0MxRXYAX19aTjJ2ODE0T2JqZWN0VGVtcGxhdGUxMU5ld0luc3RhbmNlRU5TXzVMb2NhbElOU183Q29udGV4dEVFRQBfX1pOMnY4MTRPYmplY3RUZW1wbGF0ZTIxU2V0SW50ZXJuYWxGaWVsZENvdW50RWkAX19aTjJ2ODE0T2JqZWN0VGVtcGxhdGUzTmV3RVBOU183SXNvbGF0ZUVOU181TG9jYWxJTlNfMTZGdW5jdGlvblRlbXBsYXRlRUVFAF9fWk4ydjgxNkZ1bmN0aW9uVGVtcGxhdGUxMUdldEZ1bmN0aW9uRU5TXzVMb2NhbElOU183Q29udGV4dEVFRQBfX1pOMnY4MTZGdW5jdGlvblRlbXBsYXRlMTJTZXRDbGFzc05hbWVFTlNfNUxvY2FsSU5TXzZTdHJpbmdFRUUAX19aTjJ2ODE2RnVuY3Rpb25UZW1wbGF0ZTNOZXdFUE5TXzdJc29sYXRlRVBGdlJLTlNfMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOU181VmFsdWVFRUVFTlNfNUxvY2FsSVM0X0VFTlNBX0lOU185U2lnbmF0dXJlRUVFaU5TXzE5Q29uc3RydWN0b3JCZWhhdmlvckVOU18xNFNpZGVFZmZlY3RUeXBlRQBfX1pOMnY4MTlIZWFwU3BhY2VTdGF0aXN0aWNzQzFFdgBfX1pOMnY4MjBFc2NhcGFibGVIYW5kbGVTY29wZTZFc2NhcGVFUG0AX19aTjJ2ODIwRXNjYXBhYmxlSGFuZGxlU2NvcGVDMUVQTlNfN0lzb2xhdGVFAF9fWk4ydjgyVjgxMEdldFZlcnNpb25FdgBfX1pOMnY4MlY4MTJUb0xvY2FsRW1wdHlFdgBfX1pOMnY4MlY4MThTZXRGbGFnc0Zyb21TdHJpbmdFUEtjaQBfX1pOMnY4Nk9iamVjdDE2U2V0SW50ZXJuYWxGaWVsZEVpTlNfNUxvY2FsSU5TXzVWYWx1ZUVFRQBfX1pOMnY4Nk9iamVjdDE5R2V0T3duUHJvcGVydHlOYW1lc0VOU181TG9jYWxJTlNfN0NvbnRleHRFRUUAX19aTjJ2ODZPYmplY3QyMFNsb3dHZXRJbnRlcm5hbEZpZWxkRWkAX19aTjJ2ODZPYmplY3QzR2V0RU5TXzVMb2NhbElOU183Q29udGV4dEVFRU5TMV9JTlNfNVZhbHVlRUVFAF9fWk4ydjg2T2JqZWN0M0dldEVOU181TG9jYWxJTlNfN0NvbnRleHRFRUVqAF9fWk4ydjg2T2JqZWN0M1NldEVOU181TG9jYWxJTlNfN0NvbnRleHRFRUVOUzFfSU5TXzVWYWx1ZUVFRVM1XwBfX1pOMnY4NlN0cmluZzExTmV3RnJvbVV0ZjhFUE5TXzdJc29sYXRlRVBLY05TXzEzTmV3U3RyaW5nVHlwZUVpAF9fWk4ydjg3Q29udGV4dDZHbG9iYWxFdgBfX1pOMnY4N0lzb2xhdGUxMEdldEN1cnJlbnRFdgBfX1pOMnY4N0lzb2xhdGUxNEdldFN0YWNrU2FtcGxlRVJLTlNfMTNSZWdpc3RlclN0YXRlRVBQdm1QTlNfMTBTYW1wbGVJbmZvRQBfX1pOMnY4N0lzb2xhdGUxNFRocm93RXhjZXB0aW9uRU5TXzVMb2NhbElOU181VmFsdWVFRUUAX19aTjJ2ODdJc29sYXRlMTZSZXF1ZXN0SW50ZXJydXB0RVBGdlBTMF9QdkVTMl8AX19aTjJ2ODdJc29sYXRlMTdHZXRDdXJyZW50Q29udGV4dEV2AF9fWk4ydjg3SXNvbGF0ZTE3R2V0SGVhcFN0YXRpc3RpY3NFUE5TXzE0SGVhcFN0YXRpc3RpY3NFAF9fWk4ydjg3SXNvbGF0ZTE4TnVtYmVyT2ZIZWFwU3BhY2VzRXYAX19aTjJ2ODdJc29sYXRlMjBTZXRGYXRhbEVycm9ySGFuZGxlckVQRnZQS2NTMl9FAF9fWk4ydjg3SXNvbGF0ZTIyR2V0SGVhcFNwYWNlU3RhdGlzdGljc0VQTlNfMTlIZWFwU3BhY2VTdGF0aXN0aWNzRW0AX19aTjJ2ODdJc29sYXRlMzVTZXRBYm9ydE9uVW5jYXVnaHRFeGNlcHRpb25DYWxsYmFja0VQRmJQUzBfRQBfX1pOMnY4N0lzb2xhdGU0MVNldENhcHR1cmVTdGFja1RyYWNlRm9yVW5jYXVnaHRFeGNlcHRpb25zRWJpTlNfMTBTdGFja1RyYWNlMTdTdGFja1RyYWNlT3B0aW9uc0UAX19aTjJ2ODdNZXNzYWdlMjJQcmludEN1cnJlbnRTdGFja1RyYWNlRVBOU183SXNvbGF0ZUVQN19fc0ZJTEUAX19aTjJ2ODhFeHRlcm5hbDNOZXdFUE5TXzdJc29sYXRlRVB2AF9fWk4ydjg4VHJ5Q2F0Y2hDMUVQTlNfN0lzb2xhdGVFAF9fWk4ydjg4VHJ5Q2F0Y2hEMUV2AF9fWk4ydjg4aW50ZXJuYWwzNUlzb2xhdGVGcm9tTmV2ZXJSZWFkT25seVNwYWNlT2JqZWN0RW0AX19aTjJ2ODlFeGNlcHRpb24xM0NyZWF0ZU1lc3NhZ2VFUE5TXzdJc29sYXRlRU5TXzVMb2NhbElOU181VmFsdWVFRUUAX19aTjJ2ODlFeGNlcHRpb24xM0dldFN0YWNrVHJhY2VFTlNfNUxvY2FsSU5TXzVWYWx1ZUVFRQBfX1pOMnY4OUV4Y2VwdGlvbjVFcnJvckVOU181TG9jYWxJTlNfNlN0cmluZ0VFRQBfX1pOSzJ2ODEwU3RhY2tGcmFtZTExR2V0U2NyaXB0SWRFdgBfX1pOSzJ2ODEwU3RhY2tGcmFtZTEzR2V0TGluZU51bWJlckV2AF9fWk5LMnY4MTBTdGFja0ZyYW1lMTNHZXRTY3JpcHROYW1lRXYAX19aTksydjgxMFN0YWNrRnJhbWUxM0lzQ29uc3RydWN0b3JFdgBfX1pOSzJ2ODEwU3RhY2tGcmFtZTE1R2V0RnVuY3Rpb25OYW1lRXYAX19aTksydjgxMFN0YWNrRnJhbWU2SXNFdmFsRXYAX19aTksydjgxMFN0YWNrRnJhbWU5R2V0Q29sdW1uRXYAX19aTksydjgxMFN0YWNrVHJhY2UxM0dldEZyYW1lQ291bnRFdgBfX1pOSzJ2ODEwU3RhY2tUcmFjZThHZXRGcmFtZUVQTlNfN0lzb2xhdGVFagBfX1pOSzJ2ODVBcnJheTZMZW5ndGhFdgBfX1pOSzJ2ODVWYWx1ZTEzSXNOYXRpdmVFcnJvckV2AF9fWk5LMnY4NVZhbHVlOElzT2JqZWN0RXYAX19aTksydjg1VmFsdWU4VG9TdHJpbmdFTlNfNUxvY2FsSU5TXzdDb250ZXh0RUVFAF9fWk5LMnY4NlN0cmluZzZMZW5ndGhFdgBfX1pOSzJ2ODZTdHJpbmc5V3JpdGVVdGY4RVBOU183SXNvbGF0ZUVQY2lQaWkAX19aTksydjg3TWVzc2FnZTNHZXRFdgBfX1pOSzJ2ODhFeHRlcm5hbDVWYWx1ZUV2AF9fWk5LU3QzX18xMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFN2NvbXBhcmVFbW1QS2NtAF9fWk5LU3QzX18xMjFfX2Jhc2ljX3N0cmluZ19jb21tb25JTGIxRUUyMF9fdGhyb3dfbGVuZ3RoX2Vycm9yRXYAX19aTktTdDNfXzE2bG9jYWxlOWhhc19mYWNldEVSTlMwXzJpZEUAX19aTktTdDNfXzE2bG9jYWxlOXVzZV9mYWNldEVSTlMwXzJpZEUAX19aTktTdDNfXzE4aW9zX2Jhc2U2Z2V0bG9jRXYAX19aTlN0M19fMTEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRTZhcHBlbmRFUEtjAF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU2YXBwZW5kRVBLY20AX19aTlN0M19fMTEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRTZhc3NpZ25FUEtjAF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU2cmVzaXplRW1jAF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU5cHVzaF9iYWNrRWMAX19aTlN0M19fMTEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUMxRVJLUzVfAF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMUV2AF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRTNwdXRFYwBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1Zmx1c2hFdgBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2VudHJ5QzFFUlMzXwBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2VudHJ5RDFFdgBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMEV2AF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDJFdgBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVsc0VQS3YAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFbHNFZABfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVsc0VpAF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRWwAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFbHNFbQBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVsc0V5AF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNHN5bmNFdgBfX1pOU3QzX18xMTViYXNpY19zdHJlYW1idWZJY05TXzExY2hhcl90cmFpdHNJY0VFRTVpbWJ1ZUVSS05TXzZsb2NhbGVFAF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNXVmbG93RXYAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2V0YnVmRVBjbABfX1pOU3QzX18xMTViYXNpY19zdHJlYW1idWZJY05TXzExY2hhcl90cmFpdHNJY0VFRTZ4c2dldG5FUGNsAF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNnhzcHV0bkVQS2NsAF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFOXNob3dtYW55Y0V2AF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFQzJFdgBfX1pOU3QzX18xMTViYXNpY19zdHJlYW1idWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUQyRXYAX19aTlN0M19fMTRjZXJyRQBfX1pOU3QzX18xNGNvdXRFAF9fWk5TdDNfXzE1Y3R5cGVJY0UyaWRFAF9fWk5TdDNfXzE2bG9jYWxlQzFFUktTMF8AX19aTlN0M19fMTZsb2NhbGVEMUV2AF9fWk5TdDNfXzE3Y29kZWN2dEljYzExX19tYnN0YXRlX3RFMmlkRQBfX1pOU3QzX18xOGlvc19iYXNlNGluaXRFUHYAX19aTlN0M19fMThpb3NfYmFzZTVjbGVhckVqAF9fWk5TdDNfXzE5YmFzaWNfaW9zSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU3Y29weWZtdEVSS1MzXwBfX1pOU3QzX18xOWJhc2ljX2lvc0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDFFdgBfX1pOU3QzX18xOWJhc2ljX2lvc0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDJFdgBfX1pUVk5TdDNfXzE5YmFzaWNfaW9zSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAF9fWlR2MF9uMjRfTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgBfX1pUdjBfbjI0X05TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAX19aZGFQdgBfX1pkbFB2AF9fWm5hbQBfX1pud20AX19fYXNzZXJ0X3J0bgBfX19iemVybwBfX19jeGFfYXRleGl0AF9fX2N4YV9kZW1hbmdsZQBfX19lcnJvcgBfX19zdGFja19jaGtfZmFpbABfX19zdGFja19jaGtfZ3VhcmQAX19fc3RkZXJycABfX19zdGRvdXRwAF9fZHlsZF9nZXRfaW1hZ2VfbmFtZQBfYWJvcnQAX2JhY2t0cmFjZQBfZGlmZnRpbWUAX2RsYWRkcgBfZGxzeW0AX2Vudmlyb24AX2V4aXQAX2ZjbG9zZQBfZmZsdXNoAF9mZ2V0cwBfZm9wZW4AX2ZwcmludGYAX2ZyZWFkAF9mcmVlAF9mc2Vla28AX2Z0ZWxsbwBfZndyaXRlAF9nZXRlZ2lkAF9nZXRlbnYAX2dldGV1aWQAX2dldGdpZABfZ2V0cGlkAF9nZXRybGltaXQAX2dldHJ1c2FnZQBfZ2V0dGltZW9mZGF5AF9nZXR1aWQAX2xvY2FsdGltZV9yAF9tYWxsb2MAX21lbWNocgBfbWVtY21wAF9tZW1jcHkAX21lbW1vdmUAX21lbXNldABfbm9kZV9tb2R1bGVfcmVnaXN0ZXIAX3B0aHJlYWRfYXR0cl9kZXN0cm95AF9wdGhyZWFkX2F0dHJfaW5pdABfcHRocmVhZF9hdHRyX3NldGRldGFjaHN0YXRlAF9wdGhyZWFkX2F0dHJfc2V0c3RhY2tzaXplAF9wdGhyZWFkX2NyZWF0ZQBfcHRocmVhZF9tYWNoX3RocmVhZF9ucABfcHRocmVhZF9zZWxmAF9wdGhyZWFkX3NpZ21hc2sAX3JhaXNlAF9yZXdpbmQAX3NpZ2FjdGlvbgBfc25wcmludGYAX3NzY2FuZgBfc3RyY21wAF9zdHJlcnJvcgBfc3RybGVuAF9zdHJuY21wAF90aHJlYWRfaW5mbwBfdGltZQBfdG1wZmlsZQBfdW5hbWUAX3V2X2FzeW5jX2luaXQAX3V2X2FzeW5jX3NlbmQAX3V2X2RlZmF1bHRfbG9vcABfdXZfZmlsZW5vAF91dl9mc19ldmVudF9nZXRwYXRoAF91dl9mc19wb2xsX2dldHBhdGgAX3V2X2dldG5hbWVpbmZvAF91dl9oYXNfcmVmAF91dl9pbmV0X250b3AAX3V2X2lzX2FjdGl2ZQBfdXZfaXNfcmVhZGFibGUAX3V2X2lzX3dyaXRhYmxlAF91dl9tdXRleF9pbml0AF91dl9tdXRleF9sb2NrAF91dl9tdXRleF91bmxvY2sAX3V2X25vdwBfdXZfcmVjdl9idWZmZXJfc2l6ZQBfdXZfc2VtX2luaXQAX3V2X3NlbV9wb3N0AF91dl9zZW1fd2FpdABfdXZfc2VuZF9idWZmZXJfc2l6ZQBfdXZfdGNwX2dldHBlZXJuYW1lAF91dl90Y3BfZ2V0c29ja25hbWUAX3V2X3RpbWVyX2dldF9yZXBlYXQAX3V2X3R0eV9nZXRfd2luc2l6ZQBfdXZfdWRwX2dldHNvY2tuYW1lAF91dl91bnJlZgBfdXZfd2FsawBkeWxkX3N0dWJfYmluZGVyAC9Vc2Vycy9iamVua2lucy93b3Jrc3BhY2UvYXJib3Jpc3QvdGVzdC9maXh0dXJlcy9wYWNrYWdlLXdpdGgtZ3lwLWRlcGVuZGVuY3ktbGFja2luZy1pbnN0YWxsLXNjcmlwdC9ub2RlX21vZHVsZXMvbm9kZS1yZXBvcnQvYnVpbGQvLi4vc3JjLwBub2RlX3JlcG9ydC5jYwAvVXNlcnMvYmplbmtpbnMvd29ya3NwYWNlL2FyYm9yaXN0L3Rlc3QvZml4dHVyZXMvcGFja2FnZS13aXRoLWd5cC1kZXBlbmRlbmN5LWxhY2tpbmctaW5zdGFsbC1zY3JpcHQvbm9kZV9tb2R1bGVzL25vZGUtcmVwb3J0L2J1aWxkL1JlbGVhc2Uvb2JqLnRhcmdldC9hcGkvc3JjL25vZGVfcmVwb3J0Lm8AX19aTjEwbm9kZXJlcG9ydDE3VHJpZ2dlck5vZGVSZXBvcnRFUE4ydjg3SXNvbGF0ZUVOU185RHVtcEV2ZW50RVBLY1M1X1BjTlMwXzEwTWF5YmVMb2NhbElOUzBfNVZhbHVlRUVFAC4uL3NyYy9ub2RlX3JlcG9ydC5jYwAvQXBwbGljYXRpb25zL1hjb2RlLmFwcC9Db250ZW50cy9EZXZlbG9wZXIvVG9vbGNoYWlucy9YY29kZURlZmF1bHQueGN0b29sY2hhaW4vdXNyL2luY2x1ZGUvYysrL3YxL2ZzdHJlYW0AL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9vc3RyZWFtAC9BcHBsaWNhdGlvbnMvWGNvZGUuYXBwL0NvbnRlbnRzL0RldmVsb3Blci9Ub29sY2hhaW5zL1hjb2RlRGVmYXVsdC54Y3Rvb2xjaGFpbi91c3IvaW5jbHVkZS9jKysvdjEvaW9zAC9BcHBsaWNhdGlvbnMvWGNvZGUuYXBwL0NvbnRlbnRzL0RldmVsb3Blci9Ub29sY2hhaW5zL1hjb2RlRGVmYXVsdC54Y3Rvb2xjaGFpbi91c3IvaW5jbHVkZS9jKysvdjEvX19zdHJpbmcAL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9pb3Nmd2QAX19aTjEwbm9kZXJlcG9ydEwxNVdyaXRlTm9kZVJlcG9ydEVQTjJ2ODdJc29sYXRlRU5TXzlEdW1wRXZlbnRFUEtjUzVfUGNSTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlM3XzExY2hhcl90cmFpdHNJY0VFRUVOUzBfMTBNYXliZUxvY2FsSU5TMF81VmFsdWVFRUVQMnRtAC9BcHBsaWNhdGlvbnMvWGNvZGUuYXBwL0NvbnRlbnRzL0RldmVsb3Blci9Ub29sY2hhaW5zL1hjb2RlRGVmYXVsdC54Y3Rvb2xjaGFpbi91c3IvaW5jbHVkZS9jKysvdjEvX19sb2NhbGUAL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9zdHJpbmcAL1VzZXJzL2JqZW5raW5zL0xpYnJhcnkvQ2FjaGVzL25vZGUtZ3lwLzEyLjE4LjQvaW5jbHVkZS9ub2RlL3Y4LmgALi4vLi4vbmFuL25hbi5oAC9BcHBsaWNhdGlvbnMvWGNvZGUuYXBwL0NvbnRlbnRzL0RldmVsb3Blci9Ub29sY2hhaW5zL1hjb2RlRGVmYXVsdC54Y3Rvb2xjaGFpbi91c3IvaW5jbHVkZS9jKysvdjEvaW9tYW5pcABfX1pOU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDFFdgBfX1pOMTBub2RlcmVwb3J0MTNHZXROb2RlUmVwb3J0RVBOMnY4N0lzb2xhdGVFTlNfOUR1bXBFdmVudEVQS2NTNV9OUzBfMTBNYXliZUxvY2FsSU5TMF81VmFsdWVFRUVSTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlM5XzExY2hhcl90cmFpdHNJY0VFRUUAX19aVHYwX24yNF9OU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDFFdgBfX1pOU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgBfX1pUdjBfbjI0X05TdDNfXzExNGJhc2ljX29mc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMEV2AF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAX19aTlN0M19fMTEzYmFzaWNfZmlsZWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1aW1idWVFUktOU182bG9jYWxlRQAvQXBwbGljYXRpb25zL1hjb2RlLmFwcC9Db250ZW50cy9EZXZlbG9wZXIvVG9vbGNoYWlucy9YY29kZURlZmF1bHQueGN0b29sY2hhaW4vdXNyL2luY2x1ZGUvYysrL3YxL3N0cmVhbWJ1ZgBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2V0YnVmRVBjbABfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU3c2Vla29mZkV4TlNfOGlvc19iYXNlN3NlZWtkaXJFagAvQXBwbGljYXRpb25zL1hjb2RlLmFwcC9Db250ZW50cy9EZXZlbG9wZXIvVG9vbGNoYWlucy9YY29kZURlZmF1bHQueGN0b29sY2hhaW4vdXNyL2luY2x1ZGUvYysrL3YxL3R5cGVpbmZvAF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRTdzZWVrcG9zRU5TXzRmcG9zSTExX19tYnN0YXRlX3RFRWoAX19aTlN0M19fMTEzYmFzaWNfZmlsZWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNHN5bmNFdgBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU5dW5kZXJmbG93RXYAL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9hbGdvcml0aG0AX19aTlN0M19fMTEzYmFzaWNfZmlsZWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFOXBiYWNrZmFpbEVpAF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRThvdmVyZmxvd0VpAF9fWk5TdDNfXzEyNF9fcHV0X2NoYXJhY3Rlcl9zZXF1ZW5jZUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRVJOU18xM2Jhc2ljX29zdHJlYW1JVF9UMF9FRVM3X1BLUzRfbQAvQXBwbGljYXRpb25zL1hjb2RlLmFwcC9Db250ZW50cy9EZXZlbG9wZXIvVG9vbGNoYWlucy9YY29kZURlZmF1bHQueGN0b29sY2hhaW4vdXNyL2luY2x1ZGUvYysrL3YxL2l0ZXJhdG9yAF9fWk5TdDNfXzExNl9fcGFkX2FuZF9vdXRwdXRJY05TXzExY2hhcl90cmFpdHNJY0VFRUVOU18xOW9zdHJlYW1idWZfaXRlcmF0b3JJVF9UMF9FRVM2X1BLUzRfUzhfUzhfUk5TXzhpb3NfYmFzZUVTNF8AL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9sb2NhbGUAL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9tZW1vcnkAL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9uZXcAX19aTjEwbm9kZXJlcG9ydEwxNVByaW50U3RhY2tGcmFtZUVSTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlMwXzExY2hhcl90cmFpdHNJY0VFRUVQTjJ2ODdJc29sYXRlRU5TNl81TG9jYWxJTlM2XzEwU3RhY2tGcmFtZUVFRWlQdgBfX1pOM05hbjEwVXRmOFN0cmluZ0MyRU4ydjg1TG9jYWxJTlMxXzVWYWx1ZUVFRQBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVDMkV2AF9fR0xPQkFMX19zdWJfSV9ub2RlX3JlcG9ydC5jYwBfX1pUVk5TdDNfXzExNGJhc2ljX29mc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAF9fWlRUTlN0M19fMTE0YmFzaWNfb2ZzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUUAX19aVENOU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRTBfTlNfMTNiYXNpY19vc3RyZWFtSWNTMl9FRQBfX1pUVk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUUAX19aWk4xMG5vZGVyZXBvcnRMMjJQcmludFN5c3RlbUluZm9ybWF0aW9uRVJOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzBfMTFjaGFyX3RyYWl0c0ljRUVFRVBOMnY4N0lzb2xhdGVFRTE0cmxpbWl0X3N0cmluZ3MAX19aTjEwbm9kZXJlcG9ydDl2OF9zdGF0ZXNFAF9fWk4xMG5vZGVyZXBvcnQxNXJlcG9ydF9maWxlbmFtZUUAX19aTjEwbm9kZXJlcG9ydDE2cmVwb3J0X2RpcmVjdG9yeUUAX19aTjEwbm9kZXJlcG9ydDE0dmVyc2lvbl9zdHJpbmdFAF9fWk4xMG5vZGVyZXBvcnQxOGNvbW1hbmRsaW5lX3N0cmluZ0UAX19aTjEwbm9kZXJlcG9ydDE4bG9hZHRpbWVfdG1fc3RydWN0RQBfX1pOMTBub2RlcmVwb3J0OWxvYWRfdGltZUUAX19aTjEwbm9kZXJlcG9ydEwxM3JlcG9ydF9hY3RpdmVFAF9fWk4xMG5vZGVyZXBvcnRMM3NlcUUAbW9kdWxlLmNjAC9Vc2Vycy9iamVua2lucy93b3Jrc3BhY2UvYXJib3Jpc3QvdGVzdC9maXh0dXJlcy9wYWNrYWdlLXdpdGgtZ3lwLWRlcGVuZGVuY3ktbGFja2luZy1pbnN0YWxsLXNjcmlwdC9ub2RlX21vZHVsZXMvbm9kZS1yZXBvcnQvYnVpbGQvUmVsZWFzZS9vYmoudGFyZ2V0L2FwaS9zcmMvbW9kdWxlLm8AX19aTjEwbm9kZXJlcG9ydDEzVHJpZ2dlclJlcG9ydEVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAC4uLy4uL25hbi9uYW5fY2FsbGJhY2tzXzEyX2lubC5oAC4uL3NyYy9tb2R1bGUuY2MAL1VzZXJzL2JqZW5raW5zL0xpYnJhcnkvQ2FjaGVzL25vZGUtZ3lwLzEyLjE4LjQvaW5jbHVkZS9ub2RlL3Y4LWludGVybmFsLmgALi4vLi4vbmFuL25hbl9pbXBsZW1lbnRhdGlvbl8xMl9pbmwuaABfX1pOMTBub2RlcmVwb3J0OUdldFJlcG9ydEVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAC9BcHBsaWNhdGlvbnMvWGNvZGUuYXBwL0NvbnRlbnRzL0RldmVsb3Blci9Ub29sY2hhaW5zL1hjb2RlRGVmYXVsdC54Y3Rvb2xjaGFpbi91c3IvaW5jbHVkZS9jKysvdjEvc3N0cmVhbQAuLi8uLi9uYW4vbmFuX25ldy5oAF9fWk5TdDNfXzExOWJhc2ljX29zdHJpbmdzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRDFFdgBfX1pOMTBub2RlcmVwb3J0OVNldEV2ZW50c0VSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAF9fWk4xMG5vZGVyZXBvcnRMMTJPbkZhdGFsRXJyb3JFUEtjUzFfAF9fWk4xMG5vZGVyZXBvcnQxOU9uVW5jYXVnaHRFeGNlcHRpb25FUE4ydjg3SXNvbGF0ZUUAX19aTjEwbm9kZXJlcG9ydEwxOFNldHVwU2lnbmFsSGFuZGxlckV2AF9fWk4xMG5vZGVyZXBvcnQ5U2V0U2lnbmFsRVJLTjNOYW4yMEZ1bmN0aW9uQ2FsbGJhY2tJbmZvSU4ydjg1VmFsdWVFRUUAX19aTjEwbm9kZXJlcG9ydEwxMFNpZ25hbER1bXBFaQBfX1pOMTBub2RlcmVwb3J0MTFTZXRGaWxlTmFtZUVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAF9fWk4xMG5vZGVyZXBvcnQxMlNldERpcmVjdG9yeUVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAF9fWk4xMG5vZGVyZXBvcnQxMFNldFZlcmJvc2VFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQBfX1pOMTBub2RlcmVwb3J0MTBJbml0aWFsaXplRU4ydjg1TG9jYWxJTlMwXzZPYmplY3RFRUUALi4vc3JjL25vZGVfcmVwb3J0LmgAX19aTjEwbm9kZXJlcG9ydEwyMF9yZWdpc3Rlcl9ub2RlcmVwb3J0RXYAX19aVHYwX24yNF9OU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUQxRXYAX19aTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMEV2AF9fWlR2MF9uMjRfTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMEV2AF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMUV2AF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMEV2AF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU3c2Vla29mZkV4TlNfOGlvc19iYXNlN3NlZWtkaXJFagBfX1pOU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFN3NlZWtwb3NFTlNfNGZwb3NJMTFfX21ic3RhdGVfdEVFagBfX1pOU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFOXVuZGVyZmxvd0V2AF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU5cGJhY2tmYWlsRWkAX19aTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRThvdmVyZmxvd0VpAF9fWk4xMG5vZGVyZXBvcnQyMlJlcG9ydFNpZ25hbFRocmVhZE1haW5FUHYAX19aTjEwbm9kZXJlcG9ydEwyM1NpZ25hbER1bXBBc3luY0NhbGxiYWNrRVAxMHV2X2FzeW5jX3MAX19aTjEwbm9kZXJlcG9ydEwyN1NpZ25hbER1bXBJbnRlcnJ1cHRDYWxsYmFja0VQTjJ2ODdJc29sYXRlRVB2AF9fWk5LU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFM3N0ckV2AF9fWk4zTmFuM2ltcDEyU2V0TWV0aG9kQXV4SU4ydjg1TG9jYWxJTlMyXzZPYmplY3RFRUVFRXZUX05TM19JTlMyXzZTdHJpbmdFRUVOUzNfSU5TMl8xNkZ1bmN0aW9uVGVtcGxhdGVFRUV6AC4uLy4uL25hbi9uYW5fbWF5YmVfNDNfaW5sLmgAX19aTjNOYW4zaW1wN0ZhY3RvcnlJTjJ2ODE2RnVuY3Rpb25UZW1wbGF0ZUVFM05ld0VQRnZSS05TXzIwRnVuY3Rpb25DYWxsYmFja0luZm9JTlMyXzVWYWx1ZUVFRUVOUzJfNUxvY2FsSVM2X0VFTlNDX0lOUzJfOVNpZ25hdHVyZUVFRQBfX1pOM05hbjNpbXBMMjNGdW5jdGlvbkNhbGxiYWNrV3JhcHBlckVSS04ydjgyMEZ1bmN0aW9uQ2FsbGJhY2tJbmZvSU5TMV81VmFsdWVFRUUAX19aVFZOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUAX19aVFROU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUAX19aVENOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUwX05TXzEzYmFzaWNfb3N0cmVhbUljUzJfRUUAX19aVFZOU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQBfX1pOMTBub2RlcmVwb3J0TDE3bm9kZXJlcG9ydF9ldmVudHNFAF9fWk4xMG5vZGVyZXBvcnRMMTdub2RlcmVwb3J0X3NpZ25hbEUAX19aTjEwbm9kZXJlcG9ydEw3X21vZHVsZUUAX19aTjEwbm9kZXJlcG9ydEwyMmVycm9yX2hvb2tfaW5pdGlhbGlzZWRFAF9fWk4xMG5vZGVyZXBvcnRMMjZleGNlcHRpb25faG9va19pbml0aWFsaXNlZEUAX19aTjEwbm9kZXJlcG9ydEwyNXNpZ25hbF90aHJlYWRfaW5pdGlhbGlzZWRFAF9fWk4xMG5vZGVyZXBvcnRMOHNhdmVkX3NhRQBfX1pOMTBub2RlcmVwb3J0TDE4bm9kZXJlcG9ydF92ZXJib3NlRQBfX1pOMTBub2RlcmVwb3J0TDEybm9kZV9pc29sYXRlRQBfX1pOMTBub2RlcmVwb3J0TDEzcmVwb3J0X3NpZ25hbEUAX19aTjEwbm9kZXJlcG9ydEwxNnJlcG9ydF9zZW1hcGhvcmVFAF9fWk4xMG5vZGVyZXBvcnRMMThub2RlX2lzb2xhdGVfbXV0ZXhFAF9fWk4xMG5vZGVyZXBvcnRMMjRub2RlcmVwb3J0X3RyaWdnZXJfYXN5bmNFAHV0aWxpdGllcy5jYwAvVXNlcnMvYmplbmtpbnMvd29ya3NwYWNlL2FyYm9yaXN0L3Rlc3QvZml4dHVyZXMvcGFja2FnZS13aXRoLWd5cC1kZXBlbmRlbmN5LWxhY2tpbmctaW5zdGFsbC1zY3JpcHQvbm9kZV9tb2R1bGVzL25vZGUtcmVwb3J0L2J1aWxkL1JlbGVhc2Uvb2JqLnRhcmdldC9hcGkvc3JjL3V0aWxpdGllcy5vAF9fWk4xMG5vZGVyZXBvcnQyM1Byb2Nlc3NOb2RlUmVwb3J0RXZlbnRzRVBLYwAuLi9zcmMvdXRpbGl0aWVzLmNjAF9fWk4xMG5vZGVyZXBvcnQyM1Byb2Nlc3NOb2RlUmVwb3J0U2lnbmFsRVBLYwBfX1pOMTBub2RlcmVwb3J0MjVQcm9jZXNzTm9kZVJlcG9ydEZpbGVOYW1lRVBLYwBfX1pOMTBub2RlcmVwb3J0MjZQcm9jZXNzTm9kZVJlcG9ydERpcmVjdG9yeUVQS2MAX19aTjEwbm9kZXJlcG9ydDMwUHJvY2Vzc05vZGVSZXBvcnRWZXJib3NlU3dpdGNoRVBLYwBfX1pOMTBub2RlcmVwb3J0MTZTZXRWZXJzaW9uU3RyaW5nRVBOMnY4N0lzb2xhdGVFAF9fWk5TdDNfXzFwbEljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFTlNfMTJiYXNpY19zdHJpbmdJVF9UMF9UMV9FRVJLUzlfUEtTNl8AX19aTjEwbm9kZXJlcG9ydDExU2V0TG9hZFRpbWVFdgBfX1pOMTBub2RlcmVwb3J0MTRTZXRDb21tYW5kTGluZUV2AF9fWk4xMG5vZGVyZXBvcnQxNHJlcG9ydEVuZHBvaW50RVAxMXV2X2hhbmRsZV9zUDhzb2NrYWRkclBLY1JOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOUzZfMTFjaGFyX3RyYWl0c0ljRUVOUzZfOWFsbG9jYXRvckljRUVFRQBfX1pOMTBub2RlcmVwb3J0MTVyZXBvcnRFbmRwb2ludHNFUDExdXZfaGFuZGxlX3NSTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlMyXzExY2hhcl90cmFpdHNJY0VFTlMyXzlhbGxvY2F0b3JJY0VFRUUAX19aTjEwbm9kZXJlcG9ydDEwcmVwb3J0UGF0aEVQMTF1dl9oYW5kbGVfc1JOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOUzJfMTFjaGFyX3RyYWl0c0ljRUVOUzJfOWFsbG9jYXRvckljRUVFRQBfX1pOMTBub2RlcmVwb3J0MTB3YWxrSGFuZGxlRVAxMXV2X2hhbmRsZV9zUHYAX19aTjEwbm9kZXJlcG9ydDExU2lnbm9TdHJpbmdFaQBfX1pOMTBub2RlcmVwb3J0MTJXcml0ZUludGVnZXJFUk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TMF8xMWNoYXJfdHJhaXRzSWNFRUVFbQBfX1pOMTBub2RlcmVwb3J0TDE1V3JpdGVOb2RlUmVwb3J0RVBOMnY4N0lzb2xhdGVFTlNfOUR1bXBFdmVudEVQS2NTNV9QY1JOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzdfMTFjaGFyX3RyYWl0c0ljRUVFRU5TMF8xME1heWJlTG9jYWxJTlMwXzVWYWx1ZUVFRVAydG0AX19aTlN0M19fMTE0YmFzaWNfb2ZzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAX19aVHYwX24yNF9OU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDFFdgBfX1pOU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgBfX1pUdjBfbjI0X05TdDNfXzExNGJhc2ljX29mc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMEV2AF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAX19aTlN0M19fMTEzYmFzaWNfZmlsZWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1aW1idWVFUktOU182bG9jYWxlRQBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2V0YnVmRVBjbABfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU3c2Vla29mZkV4TlNfOGlvc19iYXNlN3NlZWtkaXJFagBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU3c2Vla3Bvc0VOU180ZnBvc0kxMV9fbWJzdGF0ZV90RUVqAF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRTRzeW5jRXYAX19aTlN0M19fMTEzYmFzaWNfZmlsZWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFOXVuZGVyZmxvd0V2AF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRTlwYmFja2ZhaWxFaQBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU4b3ZlcmZsb3dFaQBfX1pOU3QzX18xMjRfX3B1dF9jaGFyYWN0ZXJfc2VxdWVuY2VJY05TXzExY2hhcl90cmFpdHNJY0VFRUVSTlNfMTNiYXNpY19vc3RyZWFtSVRfVDBfRUVTN19QS1M0X20AX19aTlN0M19fMTE2X19wYWRfYW5kX291dHB1dEljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRU5TXzE5b3N0cmVhbWJ1Zl9pdGVyYXRvcklUX1QwX0VFUzZfUEtTNF9TOF9TOF9STlNfOGlvc19iYXNlRVM0XwBfX1pOMTBub2RlcmVwb3J0TDE1UHJpbnRTdGFja0ZyYW1lRVJOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzBfMTFjaGFyX3RyYWl0c0ljRUVFRVBOMnY4N0lzb2xhdGVFTlM2XzVMb2NhbElOUzZfMTBTdGFja0ZyYW1lRUVFaVB2AF9fWk4zTmFuMTBVdGY4U3RyaW5nQzJFTjJ2ODVMb2NhbElOUzFfNVZhbHVlRUVFAF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUMyRXYAX19HTE9CQUxfX3N1Yl9JX25vZGVfcmVwb3J0LmNjAF9fWk5TdDNfXzExOWJhc2ljX29zdHJpbmdzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRDFFdgBfX1pOMTBub2RlcmVwb3J0TDEyT25GYXRhbEVycm9yRVBLY1MxXwBfX1pOMTBub2RlcmVwb3J0TDE4U2V0dXBTaWduYWxIYW5kbGVyRXYAX19aTjEwbm9kZXJlcG9ydEwxMFNpZ25hbER1bXBFaQBfX1pOMTBub2RlcmVwb3J0TDIwX3JlZ2lzdGVyX25vZGVyZXBvcnRFdgBfX1pUdjBfbjI0X05TdDNfXzExOWJhc2ljX29zdHJpbmdzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRDFFdgBfX1pOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUQwRXYAX19aVHYwX24yNF9OU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUQwRXYAX19aTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUQxRXYAX19aTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUQwRXYAX19aTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRTdzZWVrb2ZmRXhOU184aW9zX2Jhc2U3c2Vla2RpckVqAF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU3c2Vla3Bvc0VOU180ZnBvc0kxMV9fbWJzdGF0ZV90RUVqAF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU5dW5kZXJmbG93RXYAX19aTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRTlwYmFja2ZhaWxFaQBfX1pOU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFOG92ZXJmbG93RWkAX19aTjEwbm9kZXJlcG9ydEwyM1NpZ25hbER1bXBBc3luY0NhbGxiYWNrRVAxMHV2X2FzeW5jX3MAX19aTjEwbm9kZXJlcG9ydEwyN1NpZ25hbER1bXBJbnRlcnJ1cHRDYWxsYmFja0VQTjJ2ODdJc29sYXRlRVB2AF9fWk5LU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFM3N0ckV2AF9fWk4zTmFuM2ltcDEyU2V0TWV0aG9kQXV4SU4ydjg1TG9jYWxJTlMyXzZPYmplY3RFRUVFRXZUX05TM19JTlMyXzZTdHJpbmdFRUVOUzNfSU5TMl8xNkZ1bmN0aW9uVGVtcGxhdGVFRUV6AF9fWk4zTmFuM2ltcDdGYWN0b3J5SU4ydjgxNkZ1bmN0aW9uVGVtcGxhdGVFRTNOZXdFUEZ2UktOU18yMEZ1bmN0aW9uQ2FsbGJhY2tJbmZvSU5TMl81VmFsdWVFRUVFTlMyXzVMb2NhbElTNl9FRU5TQ19JTlMyXzlTaWduYXR1cmVFRUUAX19aTjNOYW4zaW1wTDIzRnVuY3Rpb25DYWxsYmFja1dyYXBwZXJFUktOMnY4MjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOUzFfNVZhbHVlRUVFAF9fWk5TdDNfXzFwbEljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFTlNfMTJiYXNpY19zdHJpbmdJVF9UMF9UMV9FRVJLUzlfUEtTNl8AX19aVFZOU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRQBfX1pUVE5TdDNfXzExNGJhc2ljX29mc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAF9fWlRDTlN0M19fMTE0YmFzaWNfb2ZzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUUwX05TXzEzYmFzaWNfb3N0cmVhbUljUzJfRUUAX19aVFZOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAF9fWlpOMTBub2RlcmVwb3J0TDIyUHJpbnRTeXN0ZW1JbmZvcm1hdGlvbkVSTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlMwXzExY2hhcl90cmFpdHNJY0VFRUVQTjJ2ODdJc29sYXRlRUUxNHJsaW1pdF9zdHJpbmdzAF9fWlRWTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAF9fWlRUTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAF9fWlRDTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFMF9OU18xM2Jhc2ljX29zdHJlYW1JY1MyX0VFAF9fWlRWTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUAX19aTjEwbm9kZXJlcG9ydEwxN25vZGVyZXBvcnRfZXZlbnRzRQBfX1pOMTBub2RlcmVwb3J0TDE3bm9kZXJlcG9ydF9zaWduYWxFAF9fWk4xMG5vZGVyZXBvcnRMN19tb2R1bGVFAF9fWk4xMG5vZGVyZXBvcnRMMTNyZXBvcnRfYWN0aXZlRQBfX1pOMTBub2RlcmVwb3J0TDNzZXFFAF9fWk4xMG5vZGVyZXBvcnRMMjJlcnJvcl9ob29rX2luaXRpYWxpc2VkRQBfX1pOMTBub2RlcmVwb3J0TDI2ZXhjZXB0aW9uX2hvb2tfaW5pdGlhbGlzZWRFAF9fWk4xMG5vZGVyZXBvcnRMMjVzaWduYWxfdGhyZWFkX2luaXRpYWxpc2VkRQBfX1pOMTBub2RlcmVwb3J0TDhzYXZlZF9zYUUAX19aTjEwbm9kZXJlcG9ydEwxOG5vZGVyZXBvcnRfdmVyYm9zZUUAX19aTjEwbm9kZXJlcG9ydEwxMm5vZGVfaXNvbGF0ZUUAX19aTjEwbm9kZXJlcG9ydEwxM3JlcG9ydF9zaWduYWxFAF9fWk4xMG5vZGVyZXBvcnRMMTZyZXBvcnRfc2VtYXBob3JlRQBfX1pOMTBub2RlcmVwb3J0TDE4bm9kZV9pc29sYXRlX211dGV4RQBfX1pOMTBub2RlcmVwb3J0TDI0bm9kZXJlcG9ydF90cmlnZ2VyX2FzeW5jRQAAAAAAAA==", 'base64'),
      "binding.gyp": `{
  "targets": [
    {
      "target_name": "api",
      "sources": [ "src/node_report.cc", "src/module.cc", "src/utilities.cc" ],
      "include_dirs": [ '<!(node -e "require(\\'nan\\')")' ],
      "conditions": [
        ["OS=='linux'", {
          "defines": [ "_GNU_SOURCE" ],
          "cflags": [ "-g", "-O2", "-std=c++11", ],
        }],
        ["OS=='win'", {
          "libraries": [ "dbghelp.lib", "Netapi32.lib", "PsApi.lib", "Ws2_32.lib" ],
          "dll_files": [ "dbghelp.dll", "Netapi32.dll", "PsApi.dll", "Ws2_32.dll" ],
        }],
        ["OS=='zos'", {
          "cflags!": [ "-O2", "-O3", "-qINLINE=::150:100000" ],
          "cflags": [ "-qascii", "-qnoinline" ],
        }],
      ],
      "defines": [
        'NODEREPORT_VERSION="<!(node -p \\"require(\\'./package.json\\').version\\")"'
      ],
    },
    {
      "target_name": "install",
      "type":"none",
      "dependencies" : [ "api" ],
      "copies": [
        {
          "destination": "<(module_root_dir)",
          "files": ["<(PRODUCT_DIR)/api.node"]
        }]
    },
  ],
}

`,
      "build": {
        "Makefile": `# We borrow heavily from the kernel build setup, though we are simpler since
# we don't have Kconfig tweaking settings on us.

# The implicit make rules have it looking for RCS files, among other things.
# We instead explicitly write all the rules we care about.
# It's even quicker (saves ~200ms) to pass -r on the command line.
MAKEFLAGS=-r

# The source directory tree.
srcdir := ..
abs_srcdir := \$(abspath \$(srcdir))

# The name of the builddir.
builddir_name ?= .

# The V=1 flag on command line makes us verbosely print command lines.
ifdef V
  quiet=
else
  quiet=quiet_
endif

# Specify BUILDTYPE=Release on the command line for a release build.
BUILDTYPE ?= Release

# Directory all our build output goes into.
# Note that this must be two directories beneath src/ for unit tests to pass,
# as they reach into the src/ directory for data with relative paths.
builddir ?= \$(builddir_name)/\$(BUILDTYPE)
abs_builddir := \$(abspath \$(builddir))
depsdir := \$(builddir)/.deps

# Object output directory.
obj := \$(builddir)/obj
abs_obj := \$(abspath \$(obj))

# We build up a list of every single one of the targets so we can slurp in the
# generated dependency rule Makefiles in one pass.
all_deps :=



CC.target ?= \$(CC)
CFLAGS.target ?= \$(CPPFLAGS) \$(CFLAGS)
CXX.target ?= \$(CXX)
CXXFLAGS.target ?= \$(CPPFLAGS) \$(CXXFLAGS)
LINK.target ?= \$(LINK)
LDFLAGS.target ?= \$(LDFLAGS)
AR.target ?= \$(AR)

# C++ apps need to be linked with g++.
LINK ?= \$(CXX.target)

# TODO(evan): move all cross-compilation logic to gyp-time so we don't need
# to replicate this environment fallback in make as well.
CC.host ?= gcc
CFLAGS.host ?= \$(CPPFLAGS_host) \$(CFLAGS_host)
CXX.host ?= g++
CXXFLAGS.host ?= \$(CPPFLAGS_host) \$(CXXFLAGS_host)
LINK.host ?= \$(CXX.host)
LDFLAGS.host ?=
AR.host ?= ar

# Define a dir function that can handle spaces.
# http://www.gnu.org/software/make/manual/make.html#Syntax-of-Functions
# "leading spaces cannot appear in the text of the first argument as written.
# These characters can be put into the argument value by variable substitution."
empty :=
space := \$(empty) \$(empty)

# http://stackoverflow.com/questions/1189781/using-make-dir-or-notdir-on-a-path-with-spaces
replace_spaces = \$(subst \$(space),?,\$1)
unreplace_spaces = \$(subst ?,\$(space),\$1)
dirx = \$(call unreplace_spaces,\$(dir \$(call replace_spaces,\$1)))

# Flags to make gcc output dependency info.  Note that you need to be
# careful here to use the flags that ccache and distcc can understand.
# We write to a dep file on the side first and then rename at the end
# so we can't end up with a broken dep file.
depfile = \$(depsdir)/\$(call replace_spaces,\$@).d
DEPFLAGS = -MMD -MF \$(depfile).raw

# We have to fixup the deps output in a few ways.
# (1) the file output should mention the proper .o file.
# ccache or distcc lose the path to the target, so we convert a rule of
# the form:
#   foobar.o: DEP1 DEP2
# into
#   path/to/foobar.o: DEP1 DEP2
# (2) we want missing files not to cause us to fail to build.
# We want to rewrite
#   foobar.o: DEP1 DEP2 \\
#               DEP3
# to
#   DEP1:
#   DEP2:
#   DEP3:
# so if the files are missing, they're just considered phony rules.
# We have to do some pretty insane escaping to get those backslashes
# and dollar signs past make, the shell, and sed at the same time.
# Doesn't work with spaces, but that's fine: .d files have spaces in
# their names replaced with other characters.
define fixup_dep
# The depfile may not exist if the input file didn't have any #includes.
touch \$(depfile).raw
# Fixup path as in (1).
sed -e "s|^\$(notdir \$@)|\$@|" \$(depfile).raw >> \$(depfile)
# Add extra rules as in (2).
# We remove slashes and replace spaces with new lines;
# remove blank lines;
# delete the first line and append a colon to the remaining lines.
sed -e 's|\\\\||' -e 'y| |\\n|' \$(depfile).raw |\\
  grep -v '^\$\$'                             |\\
  sed -e 1d -e 's|\$\$|:|'                     \\
    >> \$(depfile)
rm \$(depfile).raw
endef

# Command definitions:
# - cmd_foo is the actual command to run;
# - quiet_cmd_foo is the brief-output summary of the command.

quiet_cmd_cc = CC(\$(TOOLSET)) \$@
cmd_cc = \$(CC.\$(TOOLSET)) \$(GYP_CFLAGS) \$(DEPFLAGS) \$(CFLAGS.\$(TOOLSET)) -c -o \$@ \$<

quiet_cmd_cxx = CXX(\$(TOOLSET)) \$@
cmd_cxx = \$(CXX.\$(TOOLSET)) \$(GYP_CXXFLAGS) \$(DEPFLAGS) \$(CXXFLAGS.\$(TOOLSET)) -c -o \$@ \$<

quiet_cmd_objc = CXX(\$(TOOLSET)) \$@
cmd_objc = \$(CC.\$(TOOLSET)) \$(GYP_OBJCFLAGS) \$(DEPFLAGS) -c -o \$@ \$<

quiet_cmd_objcxx = CXX(\$(TOOLSET)) \$@
cmd_objcxx = \$(CXX.\$(TOOLSET)) \$(GYP_OBJCXXFLAGS) \$(DEPFLAGS) -c -o \$@ \$<

# Commands for precompiled header files.
quiet_cmd_pch_c = CXX(\$(TOOLSET)) \$@
cmd_pch_c = \$(CC.\$(TOOLSET)) \$(GYP_PCH_CFLAGS) \$(DEPFLAGS) \$(CXXFLAGS.\$(TOOLSET)) -c -o \$@ \$<
quiet_cmd_pch_cc = CXX(\$(TOOLSET)) \$@
cmd_pch_cc = \$(CC.\$(TOOLSET)) \$(GYP_PCH_CXXFLAGS) \$(DEPFLAGS) \$(CXXFLAGS.\$(TOOLSET)) -c -o \$@ \$<
quiet_cmd_pch_m = CXX(\$(TOOLSET)) \$@
cmd_pch_m = \$(CC.\$(TOOLSET)) \$(GYP_PCH_OBJCFLAGS) \$(DEPFLAGS) -c -o \$@ \$<
quiet_cmd_pch_mm = CXX(\$(TOOLSET)) \$@
cmd_pch_mm = \$(CC.\$(TOOLSET)) \$(GYP_PCH_OBJCXXFLAGS) \$(DEPFLAGS) -c -o \$@ \$<

# gyp-mac-tool is written next to the root Makefile by gyp.
# Use \$(4) for the command, since \$(2) and \$(3) are used as flag by do_cmd
# already.
quiet_cmd_mac_tool = MACTOOL \$(4) \$<
cmd_mac_tool = ./gyp-mac-tool \$(4) \$< "\$@"

quiet_cmd_mac_package_framework = PACKAGE FRAMEWORK \$@
cmd_mac_package_framework = ./gyp-mac-tool package-framework "\$@" \$(4)

quiet_cmd_infoplist = INFOPLIST \$@
cmd_infoplist = \$(CC.\$(TOOLSET)) -E -P -Wno-trigraphs -x c \$(INFOPLIST_DEFINES) "\$<" -o "\$@"

quiet_cmd_touch = TOUCH \$@
cmd_touch = touch \$@

quiet_cmd_copy = COPY \$@
# send stderr to /dev/null to ignore messages when linking directories.
cmd_copy = rm -rf "\$@" && cp -af "\$<" "\$@"

quiet_cmd_alink = LIBTOOL-STATIC \$@
cmd_alink = rm -f \$@ && ./gyp-mac-tool filter-libtool libtool \$(GYP_LIBTOOLFLAGS) -static -o \$@ \$(filter %.o,\$^)

quiet_cmd_link = LINK(\$(TOOLSET)) \$@
cmd_link = \$(LINK.\$(TOOLSET)) \$(GYP_LDFLAGS) \$(LDFLAGS.\$(TOOLSET)) -o "\$@" \$(LD_INPUTS) \$(LIBS)

quiet_cmd_solink = SOLINK(\$(TOOLSET)) \$@
cmd_solink = \$(LINK.\$(TOOLSET)) -shared \$(GYP_LDFLAGS) \$(LDFLAGS.\$(TOOLSET)) -o "\$@" \$(LD_INPUTS) \$(LIBS)

quiet_cmd_solink_module = SOLINK_MODULE(\$(TOOLSET)) \$@
cmd_solink_module = \$(LINK.\$(TOOLSET)) -bundle \$(GYP_LDFLAGS) \$(LDFLAGS.\$(TOOLSET)) -o \$@ \$(filter-out FORCE_DO_CMD, \$^) \$(LIBS)


# Define an escape_quotes function to escape single quotes.
# This allows us to handle quotes properly as long as we always use
# use single quotes and escape_quotes.
escape_quotes = \$(subst ','\\'',\$(1))
# This comment is here just to include a ' to unconfuse syntax highlighting.
# Define an escape_vars function to escape '\$' variable syntax.
# This allows us to read/write command lines with shell variables (e.g.
# \$LD_LIBRARY_PATH), without triggering make substitution.
escape_vars = \$(subst \$\$,\$\$\$\$,\$(1))
# Helper that expands to a shell command to echo a string exactly as it is in
# make. This uses printf instead of echo because printf's behaviour with respect
# to escape sequences is more portable than echo's across different shells
# (e.g., dash, bash).
exact_echo = printf '%s\\n' '\$(call escape_quotes,\$(1))'

# Helper to compare the command we're about to run against the command
# we logged the last time we ran the command.  Produces an empty
# string (false) when the commands match.
# Tricky point: Make has no string-equality test function.
# The kernel uses the following, but it seems like it would have false
# positives, where one string reordered its arguments.
#   arg_check = \$(strip \$(filter-out \$(cmd_\$(1)), \$(cmd_\$@)) \\
#                       \$(filter-out \$(cmd_\$@), \$(cmd_\$(1))))
# We instead substitute each for the empty string into the other, and
# say they're equal if both substitutions produce the empty string.
# .d files contain ? instead of spaces, take that into account.
command_changed = \$(or \$(subst \$(cmd_\$(1)),,\$(cmd_\$(call replace_spaces,\$@))),\\
                       \$(subst \$(cmd_\$(call replace_spaces,\$@)),,\$(cmd_\$(1))))

# Helper that is non-empty when a prerequisite changes.
# Normally make does this implicitly, but we force rules to always run
# so we can check their command lines.
#   \$? -- new prerequisites
#   \$| -- order-only dependencies
prereq_changed = \$(filter-out FORCE_DO_CMD,\$(filter-out \$|,\$?))

# Helper that executes all postbuilds until one fails.
define do_postbuilds
  @E=0;\\
  for p in \$(POSTBUILDS); do\\
    eval \$\$p;\\
    E=\$\$?;\\
    if [ \$\$E -ne 0 ]; then\\
      break;\\
    fi;\\
  done;\\
  if [ \$\$E -ne 0 ]; then\\
    rm -rf "\$@";\\
    exit \$\$E;\\
  fi
endef

# do_cmd: run a command via the above cmd_foo names, if necessary.
# Should always run for a given target to handle command-line changes.
# Second argument, if non-zero, makes it do asm/C/C++ dependency munging.
# Third argument, if non-zero, makes it do POSTBUILDS processing.
# Note: We intentionally do NOT call dirx for depfile, since it contains ? for
# spaces already and dirx strips the ? characters.
define do_cmd
\$(if \$(or \$(command_changed),\$(prereq_changed)),
  @\$(call exact_echo,  \$(\$(quiet)cmd_\$(1)))
  @mkdir -p "\$(call dirx,\$@)" "\$(dir \$(depfile))"
  \$(if \$(findstring flock,\$(word 2,\$(cmd_\$1))),
    @\$(cmd_\$(1))
    @echo "  \$(quiet_cmd_\$(1)): Finished",
    @\$(cmd_\$(1))
  )
  @\$(call exact_echo,\$(call escape_vars,cmd_\$(call replace_spaces,\$@) := \$(cmd_\$(1)))) > \$(depfile)
  @\$(if \$(2),\$(fixup_dep))
  \$(if \$(and \$(3), \$(POSTBUILDS)),
    \$(call do_postbuilds)
  )
)
endef

# Declare the "all" target first so it is the default,
# even though we don't have the deps yet.
.PHONY: all
all:

# make looks for ways to re-generate included makefiles, but in our case, we
# don't have a direct way. Explicitly telling make that it has nothing to do
# for them makes it go faster.
%.d: ;

# Use FORCE_DO_CMD to force a target to run.  Should be coupled with
# do_cmd.
.PHONY: FORCE_DO_CMD
FORCE_DO_CMD:

TOOLSET := target
# Suffix rules, putting all outputs into \$(obj).
\$(obj).\$(TOOLSET)/%.o: \$(srcdir)/%.c FORCE_DO_CMD
	@\$(call do_cmd,cc,1)
\$(obj).\$(TOOLSET)/%.o: \$(srcdir)/%.cc FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(srcdir)/%.cpp FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(srcdir)/%.cxx FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(srcdir)/%.m FORCE_DO_CMD
	@\$(call do_cmd,objc,1)
\$(obj).\$(TOOLSET)/%.o: \$(srcdir)/%.mm FORCE_DO_CMD
	@\$(call do_cmd,objcxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(srcdir)/%.S FORCE_DO_CMD
	@\$(call do_cmd,cc,1)
\$(obj).\$(TOOLSET)/%.o: \$(srcdir)/%.s FORCE_DO_CMD
	@\$(call do_cmd,cc,1)

# Try building from generated source, too.
\$(obj).\$(TOOLSET)/%.o: \$(obj).\$(TOOLSET)/%.c FORCE_DO_CMD
	@\$(call do_cmd,cc,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj).\$(TOOLSET)/%.cc FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj).\$(TOOLSET)/%.cpp FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj).\$(TOOLSET)/%.cxx FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj).\$(TOOLSET)/%.m FORCE_DO_CMD
	@\$(call do_cmd,objc,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj).\$(TOOLSET)/%.mm FORCE_DO_CMD
	@\$(call do_cmd,objcxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj).\$(TOOLSET)/%.S FORCE_DO_CMD
	@\$(call do_cmd,cc,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj).\$(TOOLSET)/%.s FORCE_DO_CMD
	@\$(call do_cmd,cc,1)

\$(obj).\$(TOOLSET)/%.o: \$(obj)/%.c FORCE_DO_CMD
	@\$(call do_cmd,cc,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj)/%.cc FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj)/%.cpp FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj)/%.cxx FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj)/%.m FORCE_DO_CMD
	@\$(call do_cmd,objc,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj)/%.mm FORCE_DO_CMD
	@\$(call do_cmd,objcxx,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj)/%.S FORCE_DO_CMD
	@\$(call do_cmd,cc,1)
\$(obj).\$(TOOLSET)/%.o: \$(obj)/%.s FORCE_DO_CMD
	@\$(call do_cmd,cc,1)


ifeq (\$(strip \$(foreach prefix,\$(NO_LOAD),\\
    \$(findstring \$(join ^,\$(prefix)),\\
                 \$(join ^,api.target.mk)))),)
  include api.target.mk
endif
ifeq (\$(strip \$(foreach prefix,\$(NO_LOAD),\\
    \$(findstring \$(join ^,\$(prefix)),\\
                 \$(join ^,install.target.mk)))),)
  include install.target.mk
endif

quiet_cmd_regen_makefile = ACTION Regenerating \$@
cmd_regen_makefile = cd \$(srcdir); /Users/bjenkins/.nvm/versions/node/v12.18.4/lib/node_modules/npm/node_modules/node-gyp/gyp/gyp_main.py -fmake --ignore-environment "--toplevel-dir=." -I/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script/node_modules/node-report/build/config.gypi -I/Users/bjenkins/.nvm/versions/node/v12.18.4/lib/node_modules/npm/node_modules/node-gyp/addon.gypi -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/common.gypi "--depth=." "-Goutput_dir=." "--generator-output=build" "-Dlibrary=shared_library" "-Dvisibility=default" "-Dnode_root_dir=/Users/bjenkins/Library/Caches/node-gyp/12.18.4" "-Dnode_gyp_dir=/Users/bjenkins/.nvm/versions/node/v12.18.4/lib/node_modules/npm/node_modules/node-gyp" "-Dnode_lib_file=/Users/bjenkins/Library/Caches/node-gyp/12.18.4/<(target_arch)/node.lib" "-Dmodule_root_dir=/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script/node_modules/node-report" "-Dnode_engine=v8" binding.gyp
Makefile: \$(srcdir)/../../../../../../../Library/Caches/node-gyp/12.18.4/include/node/common.gypi \$(srcdir)/../../../../../../../.nvm/versions/node/v12.18.4/lib/node_modules/npm/node_modules/node-gyp/addon.gypi \$(srcdir)/build/config.gypi \$(srcdir)/binding.gyp
	\$(call do_cmd,regen_makefile)

# "all" is a concatenation of the "all" targets from all the included
# sub-makefiles. This is just here to clarify.
all:

# Add in dependency-tracking rules.  \$(all_deps) is the list of every single
# target in our tree. Only consider the ones with .d (dependency) info:
d_files := \$(wildcard \$(foreach f,\$(all_deps),\$(depsdir)/\$(f).d))
ifneq (\$(d_files),)
  include \$(d_files)
endif
`,
        "Release": {
          ".deps": {
            "Release": {
              "api.node.d": "cmd_Release/api.node := c++ -bundle -undefined dynamic_lookup -Wl,-no_pie -Wl,-search_paths_first -mmacosx-version-min=10.10 -arch x86_64 -L./Release -stdlib=libc++  -o Release/api.node Release/obj.target/api/src/node_report.o Release/obj.target/api/src/module.o Release/obj.target/api/src/utilities.o \n",
              "obj.target": {
                "api": {
                  "src": {
                    "module.o.d": `cmd_Release/obj.target/api/src/module.o := c++ '-DNODE_GYP_MODULE_NAME=api' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DNODEREPORT_VERSION="2.2.11"' '-DBUILDING_NODE_EXTENSION' -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/src -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/openssl/config -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/openssl/openssl/include -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/uv/include -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/zlib -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/v8/include -I../../nan  -O3 -gdwarf-2 -mmacosx-version-min=10.10 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++1y -stdlib=libc++ -fno-rtti -fno-exceptions -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/api/src/module.o.d.raw   -c -o Release/obj.target/api/src/module.o ../src/module.cc
Release/obj.target/api/src/module.o: ../src/module.cc \\
  ../src/node_report.h ../../nan/nan.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_version.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/errno.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/version.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/unix.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/threadpool.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/darwin.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-internal.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-version.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8config.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-platform.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_buffer.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_object_wrap.h \\
  ../../nan/nan_callbacks.h ../../nan/nan_callbacks_12_inl.h \\
  ../../nan/nan_maybe_43_inl.h ../../nan/nan_converters.h \\
  ../../nan/nan_converters_43_inl.h ../../nan/nan_new.h \\
  ../../nan/nan_implementation_12_inl.h \\
  ../../nan/nan_persistent_12_inl.h ../../nan/nan_weak.h \\
  ../../nan/nan_object_wrap.h ../../nan/nan_private.h \\
  ../../nan/nan_typedarray_contents.h ../../nan/nan_json.h
../src/module.cc:
../src/node_report.h:
../../nan/nan.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_version.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/errno.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/version.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/unix.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/threadpool.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/darwin.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-internal.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-version.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8config.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-platform.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_buffer.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_object_wrap.h:
../../nan/nan_callbacks.h:
../../nan/nan_callbacks_12_inl.h:
../../nan/nan_maybe_43_inl.h:
../../nan/nan_converters.h:
../../nan/nan_converters_43_inl.h:
../../nan/nan_new.h:
../../nan/nan_implementation_12_inl.h:
../../nan/nan_persistent_12_inl.h:
../../nan/nan_weak.h:
../../nan/nan_object_wrap.h:
../../nan/nan_private.h:
../../nan/nan_typedarray_contents.h:
../../nan/nan_json.h:
`,
                    "node_report.o.d": `cmd_Release/obj.target/api/src/node_report.o := c++ '-DNODE_GYP_MODULE_NAME=api' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DNODEREPORT_VERSION="2.2.11"' '-DBUILDING_NODE_EXTENSION' -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/src -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/openssl/config -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/openssl/openssl/include -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/uv/include -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/zlib -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/v8/include -I../../nan  -O3 -gdwarf-2 -mmacosx-version-min=10.10 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++1y -stdlib=libc++ -fno-rtti -fno-exceptions -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/api/src/node_report.o.d.raw   -c -o Release/obj.target/api/src/node_report.o ../src/node_report.cc
Release/obj.target/api/src/node_report.o: ../src/node_report.cc \\
  ../src/node_report.h ../../nan/nan.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_version.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/errno.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/version.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/unix.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/threadpool.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/darwin.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-internal.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-version.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8config.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-platform.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_buffer.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_object_wrap.h \\
  ../../nan/nan_callbacks.h ../../nan/nan_callbacks_12_inl.h \\
  ../../nan/nan_maybe_43_inl.h ../../nan/nan_converters.h \\
  ../../nan/nan_converters_43_inl.h ../../nan/nan_new.h \\
  ../../nan/nan_implementation_12_inl.h \\
  ../../nan/nan_persistent_12_inl.h ../../nan/nan_weak.h \\
  ../../nan/nan_object_wrap.h ../../nan/nan_private.h \\
  ../../nan/nan_typedarray_contents.h ../../nan/nan_json.h
../src/node_report.cc:
../src/node_report.h:
../../nan/nan.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_version.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/errno.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/version.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/unix.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/threadpool.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/darwin.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-internal.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-version.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8config.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-platform.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_buffer.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_object_wrap.h:
../../nan/nan_callbacks.h:
../../nan/nan_callbacks_12_inl.h:
../../nan/nan_maybe_43_inl.h:
../../nan/nan_converters.h:
../../nan/nan_converters_43_inl.h:
../../nan/nan_new.h:
../../nan/nan_implementation_12_inl.h:
../../nan/nan_persistent_12_inl.h:
../../nan/nan_weak.h:
../../nan/nan_object_wrap.h:
../../nan/nan_private.h:
../../nan/nan_typedarray_contents.h:
../../nan/nan_json.h:
`,
                    "utilities.o.d": `cmd_Release/obj.target/api/src/utilities.o := c++ '-DNODE_GYP_MODULE_NAME=api' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DNODEREPORT_VERSION="2.2.11"' '-DBUILDING_NODE_EXTENSION' -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/src -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/openssl/config -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/openssl/openssl/include -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/uv/include -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/zlib -I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/v8/include -I../../nan  -O3 -gdwarf-2 -mmacosx-version-min=10.10 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++1y -stdlib=libc++ -fno-rtti -fno-exceptions -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/api/src/utilities.o.d.raw   -c -o Release/obj.target/api/src/utilities.o ../src/utilities.cc
Release/obj.target/api/src/utilities.o: ../src/utilities.cc \\
  ../src/node_report.h ../../nan/nan.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_version.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/errno.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/version.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/unix.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/threadpool.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/darwin.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-internal.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-version.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8config.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-platform.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_buffer.h \\
  /Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_object_wrap.h \\
  ../../nan/nan_callbacks.h ../../nan/nan_callbacks_12_inl.h \\
  ../../nan/nan_maybe_43_inl.h ../../nan/nan_converters.h \\
  ../../nan/nan_converters_43_inl.h ../../nan/nan_new.h \\
  ../../nan/nan_implementation_12_inl.h \\
  ../../nan/nan_persistent_12_inl.h ../../nan/nan_weak.h \\
  ../../nan/nan_object_wrap.h ../../nan/nan_private.h \\
  ../../nan/nan_typedarray_contents.h ../../nan/nan_json.h
../src/utilities.cc:
../src/node_report.h:
../../nan/nan.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_version.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/errno.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/version.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/unix.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/threadpool.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/uv/darwin.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-internal.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-version.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8config.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/v8-platform.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_buffer.h:
/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node/node_object_wrap.h:
../../nan/nan_callbacks.h:
../../nan/nan_callbacks_12_inl.h:
../../nan/nan_maybe_43_inl.h:
../../nan/nan_converters.h:
../../nan/nan_converters_43_inl.h:
../../nan/nan_new.h:
../../nan/nan_implementation_12_inl.h:
../../nan/nan_persistent_12_inl.h:
../../nan/nan_weak.h:
../../nan/nan_object_wrap.h:
../../nan/nan_private.h:
../../nan/nan_typedarray_contents.h:
../../nan/nan_json.h:
`
                  }
                },
                "install.stamp.d": "cmd_Release/obj.target/install.stamp := touch Release/obj.target/install.stamp\n"
              }
            },
            "Users": {
              "bjenkins": {
                "workspace": {
                  "arborist": {
                    "test": {
                      "fixtures": {
                        "package-with-gyp-dependency-lacking-install-script": {
                          "node_modules": {
                            "node-report": {
                              "api.node.d": "cmd_/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script/node_modules/node-report/api.node := rm -rf \"/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script/node_modules/node-report/api.node\" && cp -af \"Release/api.node\" \"/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script/node_modules/node-report/api.node\"\n"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "api.node": Buffer.from("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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVUiJ5UFXQVZBVUFUU0iB7EgHAABNic5NicdJicxIiwU0ngAASIsASIlF0IoFr60AAITAD4XPBQAASIm94Pj//4m19Pj//0iJldj4///GBYytAAABSI2dkPj//zH2SInf6EF9AABIjbWg+P//SInf6D59AADoG30AAEGJxQ9XwA8pRbAPKUWgDylFkA8pRYDGRcAATYX/dCVBgD8AdB9IjRU0hgAASI19gL5BAAAAMcBMifnobH0AAOnkAAAASI09TKgAAOhzfQAASI0VCYYAAEiFwHQcSI0NNKgAAEiNfYC+QQAAADHA6Dh9AADpsAAAAEiNDeSFAABMibX4+P//Qb5BAAAATIml6Pj//0yNZYC+QQAAADHATInn6AV9AACLHb+sAAD/w4kdt6wAAEyJ5+gHfQAASI18BYBJKca5bAcAAAONtPj//0SLhbD4//9B/8BEi42s+P//RIuVqPj//0SLnaD4//9Ei6Wk+P//SIPsCEiNFW+FAAC4AAAAAEyJ9kyLtfj4//9TQVVBU0FUTIul6Pj//0FS6Id8AABIg8QwSI296P7//0iLBWGcAABIjUgYSImNSP3//0iNnVD9//9Ig8BASImF6P7//0iJ3ujoegAASMeFcP///wAAAADHhXj/////////TIstSJwAAEmNRRhIiYX4+P//SImFSP3//0mDxUBMia3o/v//SInf6Ks1AABIjTXyhAAASI19gLoGAAAA6Bh8AABIiw3HmwAAhcAPhC0BAABIjTXVhAAASI19gLoGAAAA6PR7AACFwHR8SI09B6cAAOjeewAASIXAdHdIjZ0A+f//vkEEAABIid/ogXoAAEiNFZ6EAABIjQ3bpgAATI0Fl4QAAEyNTYC+QQQAADHASInf6IV7AABIg73I/f//AHU/SI010o8AAEiNvQD5///olnoAAEiJhcj9//9IhcAPhZwBAADrGkiLDRubAADpjAAAAEiDvcj9//8AD4RgAQAASIuFSP3//0iLQOhIjbwFSP3//4u0BWj9//+DzgTouHkAAEiDvcj9//8AD4SBAQAASIs90ZoAAEiNNT+EAAC6IQAAAOhwLgAASInDSI19gOgAewAASInfSI11gEiJwuhVLgAASI01NYQAALoBAAAASInH6EEuAABIiw2SmgAASIO9yP3//wBMjY1I/f//TA9EyUyNRYBIi73g+P//i7X0+P//SIuV2Pj//0yJ4UiNhaD4//9QQVbojQIAAEiDxBBIi53I/f//SIXbTI2lUP3//3ROSIuFUP3//0yJ5/9QMEGJxkiJ3+hueQAAhcB1EEjHhcj9//8AAAAARYX2dCJIi4VI/f//SItA6EiNvAVI/f//i7QFaP3//4POBOi6eAAASIs94ZkAAEiNNXODAAC6GQAAAOiALQAATYX/D4QuAQAASI0VqYIAAEiNTYC+QQAAADHATIn/6OF5AADpDwEAAEiNNTOOAABIjX2A6Pp4AABIiYXI/f//SIXAD4SA/v//x4XY/v//EAAAAEiLhUj9//9Ijb1I/f//SAN46DH26Dd4AABIg73I/f//AA+Ff/7//0iNPcCkAADol3kAAEmJxkiLPUGZAABIjTVvggAAuiUAAADo4CwAAEiJw0yNfYBMif/obXkAAEiJ30yJ/kiJwujDLAAATYX2dDRIjTViggAAugwAAABIicfoqiwAAEiJw0yNNWCkAABMiffoNHkAAEiJ30yJ9kiJwuiKLAAASI01O4IAALoJAAAASInH6HYsAABIicPo2HcAAIswSInf6FB3AABIjTUfggAAugIAAABIicfoUCwAAEyNpVD9//9Ii4X4+P//SImFSP3//0yJrej+//9IiwW9mAAASIPAEEiJhVD9//9Ii53I/f//SIXbdB9MiefoniMAAEiJ3+imdwAAhcB1C0jHhcj9//8AAAAAgL3g/v//AHQRSIu9kP3//0iF/3QF6Bd3AACAveH+//8AdBFIi724/f//SIX/dAXo/XYAAEyJ5+jFdgAASIs1NJgAAEiDxghIjb1I/f//6H52AABIjb3o/v//6Mx2AABIiwVJmAAASIsASDtF0HUSSIHESAcAAFtBXEFdQV5BX13D6OF2AACQVUiJ5UFXQVZBVUFUU0iB7IgJAABMictNicZJic9JidSJtTD3//9Iib1A9///SIsF9JcAAEiLAEiJRdDoJHcAAImFLPf//0iLBdOXAABIg8AQSImFWPb//0yNrVj2//8x9kyJ7+gjdgAASMeF4Pb//wAAAADHhej2////////SIsDSItw6EgB3kyJ7+gIdgAASI013IAAALpRAAAASInf6MwqAABIjTUagQAAulEAAABIid/ouCoAAEiNNViBAAC6CAAAAEiJnUj3//9Iid/onSoAAEiJw0yJ5+gudwAASInfTInmSInC6IQqAABIjTUtgQAAug0AAABIicfocCoAAEiJw0yJ/+gBdwAASInfTIn+SInC6FcqAABIjTUOgQAAugIAAABIicfoQyoAAE2F9nRFSI01+IAAALoKAAAASIu9SPf//+gmKgAASInDTIn36Ld2AABIid9MifZIicLoDSoAAEiNNe1/AAC6AQAAAEiJx+j5KQAAQb9sBwAASItFGItIFEQB+USLQBBB/8BEi0gMRItQCIsYRItYBEiD7AhIjRWVgAAATI21UPf//75AAAAAMcBMifdTQVNBUugydgAASIPEIEiNNYyAAAC6EgAAAEyLrUj3//9Mie/ojykAAEiJw0yJ9+ggdgAASInfTIn2SInC6HYpAABMjSVWfwAAugEAAABIicdMieboXykAAEQDPWylAABEiwVhpQAAQf/ARIsNU6UAAESLFUilAABEix09pQAAix0zpQAASIPsCL5AAAAAMcBMifdIjRXqfwAARIn5U0FTQVLolXUAAEiDxCBIjTUCgAAAuhIAAABMie/o+SgAAEiJw0yJ9+iKdQAASInfTIn2SInC6OAoAAC6AQAAAEiJx0yJ5ujQKAAASI012H8AALoMAAAATInv6LwoAABIiceLtSz3///omnMAAEiJw0iLA0iLcOhIAd5MjbXQ9///TIn36CpzAABIizXrlAAATIn36BVzAABIiwi+CgAAAEiJx/9ROEGJx0yJ9+iAcwAAQQ++90iJ3+ggcwAASInf6B5zAACKBTikAACoAXQVSIsFNaQAAEyLpUD3//9IhcB1NusR0OgPtsBMi6VA9///SIXAdSNIjT0HpAAASI0NUH0AADH2SMfC/////0UxwOiHcgAAhcB0W0iNNUaAAAC6DgAAAEiLvUj3///o6ycAAIoNzaMAAInK0Or2wQFIjTXAowAASA9FNcejAAAPttJID0UVtKMAAEiJx+i8JwAASI01nH0AALoBAAAASInH6KgnAABMi61I9///TInv6GFyAABIjTV5fQAAugEAAABMie/ohScAAIoNT6MAAInK0Or2wQFIjTVCowAASA9FNUmjAAAPttJID0UVNqMAAEiJx+hWJwAASYtFAEiLcOhMAe5Mjb3Q9///TIn/6NRxAABMizWVkwAATIn/TIn26LxxAABIiwi+CgAAAEiJx/9ROInDTIn/6ChyAAAPvvNMie/oyXEAAEyJ7+jHcQAASI01UX8AALoVAAAATInv6OsmAABIjTVTfwAAugYAAABIicfo1yYAAEiNNUZ/AAC6GQAAAEiJx+jDJgAASI01TH8AALoHAAAASInH6K8mAABIjTVAfwAAugIAAABMie/omyYAAL5AAAAASInH6IZxAABIjTUifwAAugQAAABIicfoeiYAAEiNNRN/AAC6AQAAAEiJx+hmJgAASInDSIsDSItw6EgB3kyNvdD3//9Mif/o4nAAAEyJ/0yJ9ujRcAAASIsIvgoAAABIicf/UThBicZMif/oPHEAAEEPvvZIid/o3HAAAEiJ3+jacAAASI290Pf//+jAcgAAhcAPiPQBAABIjTWZfgAAug0AAABIi71I9///6OYlAABIicNMjbXQ9///TIn36HByAABIid9MifZIicLoxiUAAEyNNW9+AAC6AQAAAEiJx0yJ9uivJQAASInDTI290Pn//0yJ/+g5cgAASInfTIn+SInC6I8lAAC6AQAAAEiJx0yJ9uh/JQAASInDTI210Pr//0yJ9+gJcgAASInfTIn2SInC6F8lAABIjTU/ewAAugEAAABIicfoSyUAAEiNNfZ9AABIx8f+////6MxwAABIicNIhdsPhKIAAABIjTXsfQAAuggAAABIi71I9///6BQlAABJicb/00iJw0iJ3+igcQAATIn3SIneSInC6PYkAABIjTWPfQAAugEAAABIicfo4iQAAEiJw0iLA0iLcOhIAd5MjbWQ9///TIn36F5vAABIizUfkQAATIn36ElvAABIiwi+CgAAAEiJx/9ROEGJx0yJ9+i0bwAAQQ++90iJ3+hUbwAASInf6FJvAABIjTVTfQAAugoAAABIi71I9///6HIkAABIicNMjbXQ+P//TIn36PxwAABIid9MifZIicLoUiQAAEiNNft8AAC6AQAAAEiJx+g+JAAASInDTI210Pv//0yJ9+jIcAAASInfTIn2SInC6B4kAABIjTX+eQAAugEAAABIicfoCiQAAEiLnUj3//9Iid/ow24AAEiNNRB7AAC6UQAAAEiJ3+jnIwAASI01u3wAALpTAAAASInf6NMjAACLnTD3//+D+wQPhzkCAACJ2EiNDc8RAABIYwSBSAHI/+DoYXAAAEmJxk2F9g+E8AEAAEyJ50yJ9uiAbQAATIn36DRvAABMiffo/m8AAEiNvZD3//++QAAAAEyJ8ugebwAASIXAdDxIjZ2Q9///Zg8fRAAASInf6PRvAABIi71I9///SIneSInC6EYjAAC+QAAAAEiJ30yJ8ujibgAASIXAddFMiffoyW4AAOmZAQAASMeFqPf//wAAAABIx4WQ9///AAAAAEiNtZD3//9IibWg9///SIm1mPf//0iNldD3//9MjYUA9///uf8AAABMiefojGwAAIO9CPf//wUPh/YAAABIjTVOfAAAuhUAAABIi71I9///6LkiAABJicaLhQj3//9IjQ2ZmQAATIs8wUyJ/+g5bwAATIn3TIn+SInC6I8iAABIjTUifAAAugIAAABIicfoeyIAAIP7Aw+EuAAAAL7/AAAAun8AAABMiefobGsAAEmJxk2F9g+EsQAAAEyJ9+iQbAAAhcAPjrkAAAAx22aQTIu9APf//0yJ90yJ5ona6HZsAABJOd92F0iLjN3Q9///6w9mZmZmLg8fhAAAAAAAMclIi71I9///SInGidroTSQAAEj/w0yJ9+g2bAAASJhIOcN8q+teSI01THsAALoZAAAA60RIjTVxewAAuiAAAABIi71I9///6MMhAACD+wMPhUj///9IjTVxewAA6xVIjTXZegAAujoAAADrDEiNNZp7AAC6PwAAAEiLvUj3///oiyEAAEiLnUj3//9Iid/oRGwAAEiNNZF4AAC6UQAAAEiJ3+hoIQAASI01DnwAALpTAAAASInf6FQhAABIjb3Q9///vgABAADoxWwAAInDhdt+IoP7An9YSI01UnwAALoTAAAASIu9SPf//+ggIQAA6ewBAABIjTUVfAAAuh8AAABIi71I9///6AMhAABIiceJ3ujlawAASI012XYAALoBAAAASInH6OUgAADpsQEAAInYSIPA/kiJhTD3//9MjSUKewAARTH/6zdIi50Q9///SInf6FRtAABIi71I9///SIneSInC6KYgAABIg70A9///AA+FsQAAAOn4AAAADx8ATouE/eD3//++QAAAADHASI2dkPf//0iJ30yJ4kSJ+ejwbAAASInf6ABtAABIi71I9///SIneSInC6FIgAABKi7z94Pf//0iNtQD3///ozGsAAIXAD4SbAAAASIu9EPf//0iF/3Q5MfYx0jHJ6INrAABIicNIhdsPhEz///9Iid/op2wAAEiLvUj3//9Iid5IicLo+R8AAEiJ3+i1awAASIO9APf//wB0TLoCAAAASIu9SPf//0iNNQl7AADozx8AAEiJw0yLtQD3//9MiffoWWwAAEiJ30yJ9kiJwuivHwAAugEAAABIicdIjTXYegAA6JsfAABIi51I9///SIsDSItw6EgB3kyNtfD2//9MiffoE2oAAEyJ90iLNdGLAADo/mkAAEiLCL4KAAAASInH/1E4QYnFTIn36GlqAABBD771SInf6AlqAABIid/oB2oAAEn/x0w5vTD3//8PhZ/+//9Ii71I9///6OtpAABIi10QSIXbTIu9QPf//w+EBQEAAEiJ3+hdaQAAhMAPhPUAAABIjTUUdgAAulEAAABMi6VI9///TInn6OQeAABIjTUXegAAulMAAABMiefo0B4AAEyJ/0iJ3ujNaAAASInH6DFpAABIjb3Q9///SInG6L4jAABMi7XY9///TIn36DtrAABMiedMifZIicLokR4AAEiNNSR4AAC6AgAAAEiJx+h9HgAASInf6INoAABJicZNhfYPhEQMAABMiffopWgAAIXAfjsx22ZmLg8fhAAAAAAATIn3TIn+idrojWgAADHJSIu9SPf//0iJxona6IAgAAD/w0yJ9+hqaAAAOcN80kiLvdj3//9IjYXg9///SDnHdAXozmkAAEiLnUj3//9Iid/ow2gAAEyNtdD3//9MiffoFmcAAEyJ/0yJ9uinZwAASI019nQAALpRAAAASInf6M0dAABIjTWOeQAAulIAAABIid/ouR0AAEiNvZD3///oAWcAAEyJ/+hxZwAASIXATYn8D4Q0AQAARTHtZg8fRAAATInnSI21kPf//0yJ6uhWZwAAuhIAAABIi51I9///SInfSI01g3kAAOhjHQAASYnGTIu9kPf//0yJ/+jtaQAATIn3TIn+SInC6EMdAAC6EgAAAEiJ30iNNWJ5AADoLx0AAEiLtZj3//9Iid/o8GQAALoaAAAASInfSI01UnkAAOgMHQAASIu1sPf//0iJ3+jNZAAAuhUAAABIid9IjTVKeQAA6OkcAABIi7Wo9///SAO1oPf//0iJ3+ijZAAAug4AAABIid9IjTU2eQAA6L8cAABIi7Wg9///SInf6IBkAAC6EwAAAEiJ30iNNSJ5AADonBwAAEiLtaj3//9Iid/oXWQAALoGAAAASInfSI01E3kAAOh5HAAASf/FTInn6DpmAABJOcUPgtX+//9IjTX6eAAAuhoAAABIi51I9///SInf6EocAABIi7XQ9///SInf6AtkAABIjTXreAAAuiQAAABIid/oJxwAAEiLteD3//9Iid/o6GMAAEiNNe14AAC6HwAAAEiJ3+gEHAAASIu18Pf//0iJ3+jFYwAASI016ngAALokAAAASInf6OEbAABIi7Xo9///SInf6KJjAABIjTXseAAAuhsAAABIid/ovhsAAEiLtfj3//9Iid/of2MAAEiNNY9xAAC6AQAAAEiJ3+ibGwAASInf6FtmAABIjb349v//6DVoAABIi7349v//SIs1sZcAAOj8ZgAAZg9XyfIPwsgA8g8QFRNwAABmD1TRZg9VyGYPVtFmDymVMPf//0iNNWRyAAC6UQAAAEiJ3+g7GwAASI01cXgAALpSAAAASInf6CcbAABIjTWweAAAuh4AAABIid/oExsAAEiNtdD3//8x/+gFZwAAhcAPhUUCAABIi43Q9///RIuF2Pf//0yNNZd4AABMjaWQ9///vkAAAAAxwEyJ50yJ8uhTZwAASI01gHgAALoSAAAATIutSPf//0yJ7+i0GgAASInDTInn6EVnAABIid9MieZIicLomxoAAEyNPV94AAC6BQAAAEiJx0yJ/uiEGgAASIuN4Pf//0SLhej3//++QAAAADHATInnTIny6OhmAABIjTUueAAAuhQAAABMie/oUBoAAEiJw0yJ5+jhZgAASInfTInmSInC6DcaAAC6BQAAAEiJx0yJ/ugnGgAA8kgPKoXQ9///8g8qjdj3///yDxAVxm4AAPIPWcryD1jID1fA8kgPKoXg9///8g9YwQ9XyfIPKo3o9///8g9ZyvIPWMjyD16NMPf///IPWQ2TbgAA8g8RjUD3//9IjTWqdwAAuh0AAABMie/otxkAAEiJx/IPEIVA9///6I1kAABIjTWkdwAAugEAAABIicfokxkAAEiNNZJ3AAC6HgAAAEyJ7+h/GQAASIu18Pf//0jB5gpMie/oPGEAAEiNNYp3AAC6FgAAAEyJ7+hYGQAASIu1GPj//0iJx+g7ZAAASI01fncAALoQAAAASInH6DUZAABIi7UQ+P//SInH6BhkAABIjTVsdwAAuhIAAABIicfoEhkAAEiNNWt3AAC6GAAAAEyJ7+j+GAAASIu1KPj//0iJx+jhYwAASI01YXcAALoHAAAASInH6NsYAABIi7Uw+P//SInH6L5jAABIjTVGdwAAugcAAABIicfouBgAAMeFKPf//woAAADoD2UAAEiJx+gBZQAASI2VAPf//0iNjSj3//++AwAAAInH6C9lAACFwA+FegEAAEiNNQF3AAC6IwAAAEyLrUj3//9Mie/oZBgAAIuNAPf//0SLhQT3//9MjTX9dgAATI2lkPf//75AAAAAMcBMiedMifLou2QAAEiNNeh1AAC6EgAAAEyJ7+gjGAAASInDTInn6LRkAABIid9MieZIicLoChgAAEyNPc51AAC6BQAAAEiJx0yJ/ujzFwAAi40I9///RIuFDPf//75AAAAAMcBMiedMifLoWGQAAEiNNZ51AAC6FAAAAEyJ7+jAFwAASInDTInn6FFkAABIid9MieZIicLopxcAALoFAAAASInHTIn+6JcXAADyDyqFAPf///IPKo0E9///8g8QFTdsAADyD1nK8g9YyA9XwPIPKoUI9///8g9YwQ9XyfIPKo0M9///8g9ZyvIPWMjyD16NMPf///IPWQ0FbAAA8g8RjTD3//9IjTUcdQAAuh0AAABMie/oKRcAAEiJx/IPEIUw9///6P9hAABIjTUWdQAAugEAAABIicfoBRcAAEiLnUj3//9IiwNIi3DoSAHeTI218Pb//0yJ9+h9YQAATIs9PoMAAEyJ90yJ/uhlYQAASIsIvgoAAABIicf/UThBicRMiffo0GEAAEEPvvRIid/ocGEAAEiJ3+huYQAASInf6GZhAABMjTWzbQAAulEAAABIid9MifbohxYAAEiNNe5tAAC6UgAAAEiJ3+hzFgAASI01LW4AALoaAAAASInf6F8WAABIiwNIi0DouU////8jTAMIg8kgiUwDCEiLA0iLQOhIx0QDGAcAAABIjTUNbgAAugUAAABIid/oJBYAAEiLCEiLSehIx0QIGAoAAABIjTXvbQAAugQAAABIicfoABYAAEiLCEiLSehIx0QIGBQAAABIjTXQbQAAugcAAABIicfo3BUAAEiNNcRtAAC6BwAAAEiJx+jIFQAASYnFSYtFAEiLcOhMAe5MjaXQ9///TInn6ENgAABMiedMif7oMmAAAEiLCL4KAAAASInH/1E4QYnHTInn6J1gAABBD773TInv6D1gAABMie/oO2AAAOg6YgAASI01V1QAAEiJx0iJ2ui+YgAAulEAAABIid9MifboTBUAAEiNNfpzAAC6UgAAAEiJ3+g4FQAASI01OXQAALoXAAAASInf6CQVAABMiy3tgQAASYtFAEiLGEiF23RjQb4IAAAATI0962oAAA8fQAC6AgAAAEiLvUj3//9IjTUNdAAA6OgUAABJicRIid/oeWEAAEyJ50iJ3kiJwujPFAAAugEAAABIicdMif7ovxQAAEmLRQBKixwwSYPGCEiF23WuSLv/////////f0iNNfZ0AAC6QwAAAEiLvUj3///ojBQAAEnHxmD///9MjSWOiAAATI290Pf//w8fgAAAAABDi7wmqAAAAEyJ/uhaYAAAhcB0DEmDxhB15ukrAQAAkLoCAAAASIu9SPf//0iNNV1zAADoOBQAAEmJx02J5U+LpCagAAAATInn6L5gAABMif9MieZIicLoFBQAALoBAAAASInHSI01tWwAAOgAFAAASIuN0Pf//0g52XUVuhAAAABIi71I9///SI01fnQAAOsyvkAAAAAxwEyNvZD3//9Mif9IjRV1dAAA6EZgAABMif/oVmAAAEiLvUj3//9Mif5IicLoqBMAAEiLjdj3//9IOdlNiex1K7oRAAAASIu9SPf//0iNNTt0AADogRMAAEyNvdD3//9Jg8YQD4UA////60i+QAAAADHATI29kPf//0yJ/0iNFR10AADo1V8AAEyJ/+jlXwAASIu9SPf//0yJ/kiJwug3EwAATI290Pf//0mDxhAPhbb+//9IjTXucwAAuhIAAABIi71I9///6A4TAAAx/+h9XgAASYnETYXkdG27AQAAAEyNLRNyAABMjT3TaAAAZmZmLg8fhAAAAAAAugIAAABIi71I9///TInu6MwSAABJicZMiefoXV8AAEyJ90yJ5kiJwuizEgAAugEAAABIicdMif7ooxIAAInf6BJeAABJicT/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0EiJ3+ipRwAASI29wPv//0iJxuh4AgAASInf6IZHAABIjb2w9///SInG6GECAABIid/oaUcAAEGJxEiJ3+h8RwAAQYnHTYXtdFBIjRVtVwAARImlbPf//0WJ/EyNvXD3//++QAAAADHATIn/i41o9///TYno6IpJAABMif/omkkAAEyJ90yJ/kWJ50SLpWz3//9IicLo5vz//0iJ3+gWRwAAhMB0IEiJ3+jsRgAAhcB0YkiNNSBXAAC6CwAAAEyJ9+n1AAAAg73A+///AE2J9XRySInf6NJGAABBicZIi53I+///SInf6DBJAABMie9Iid5IicLohvz//0WE9g+EqQAAAEiNNdtWAAC6EAAAAOmkAAAASI01sVYAALoKAAAATIn36Fj8//9IicdEieboOUcAAEiNNZ1WAAC6AQAAAEiJx+tKSIuduPf//0iJ3+jJSAAATInvSIneSInC6B/8//9IjR1vVgAAugEAAABIicdIid7oCPz//0iJx0SJ5ujpRgAAugEAAABIicdIid7o7fv//0iJx0SJ/ujORgAASI01wlEAALoBAAAA631IjTVDVgAAugIAAABIicfowPv//0mJxkiLnbj3//9Iid/oSkgAAEyJ90iJ3kiJwuig+///SI0d8FUAALoBAAAASInHSIne6In7//9IicdEieboakYAALoBAAAASInHSIne6G77//9IicdEif7oT0YAAEiNNR5RAAC6AgAAAEiJx+hP+///SIu9uPf//0iNhcD3//9IOcd0Bej7RgAASIu9yPv//0iNhdD7//9IOcd0BejjRgAASIsF0GcAAEiLAEg7RdB1EkiBxHgIAABbQVxBXUFeQV9dw+hoRgAADx+EAAAAAABVSInlQVdBVlNIg+wYSYn2SIn7xwMAAAAASI1DEEiJQwjockQAAEiNfdBIicbo1kMAAE2F9nR76FxEAABIicfobEQAAEyJ90iJxugDRQAASYnGTYX2dFtMiffo+UQAAI0MQIP5/n5fRI18QAFBgf8BBAAAchFJY//oi0YAAEiJQwhIhcB0X+gNRAAASItTCEUxwEG5CgAAAEyJ90iJxkSJ+ei4RAAAiQNIi0sISJjGBAEASI190OhTQwAASIPEGFtBXkFfXcNIjT2cVAAASI01oFQAAEiNDalUAAC6dAQAAOhdRQAASI09fVQAAEiNNYFUAABIjQ2ZVAAAuncEAADoPkUAAGZmZi4PH4QAAAAAAFVIieVBV0FWQVRTSIPsEEiJ++jNRAAASIsFUmYAAEiDwBBIiQNIjXtgSMdDUAAAAABIx0NIAAAAAEjHQ0AAAAAAvjMBAADo7UQAAEyNcwhMjX3YTIn/TIn26JJEAABIizXjZQAATIn/6P9DAABBicRMif/ofkQAAEWE5HRATI192EyJ/0yJ9uhkRAAASIs1tWUAAEyJ/+jXQwAASImDgAAAAEyJ/+hMRAAASIu7gAAAAEiLB/9QOIiDkgEAAEiLAzH2ugAQAABIid//UBhIg8QQW0FcQV5BX13DkJCQkJCQVUiJ5UFWU78wAAAA6DtEAABIiQXIdAAADygFsU0AAA8pBap0AABIuS5qcyB2ZXJzSIlIGEi5aW5lIE5vZGVIiUgQSLlvIGRldGVybUiJSAhIjTV5dAAASLlVbmFibGUgdEiJCMdAIGlvbgrGQCQASIsd0mQAAEyNNbO0//9Iid9MifLo1kMAAEjHBWV0AAAAAAAASMcFUnQAAAAAAABIxwU/dAAAAAAAAEiNNTh0AABIid9MifJbQV5d6Z9DAACQVUiJ5UFXQVZBVUFUU0iB7JgEAABJif1IiwXaZAAASIsASIlF0Oi+QQAASI29WPv//0iJxugfQQAASYtFAEiLCEyLcQgPV8APKUWwDylFoA8pRZDGRcAADylFgItIEIXJfgZIi1AI6wtIixBIi1IISIPCWEiLEonWg+YDSIP+AXVsSItS/w+3UguD+j93X4XJD47OAAAASItwCEiNvXD7///oqvz//4O9cPv//z8Pj9UAAABIi414+///SI0VuEwAAEiNfYC+QQAAADHA6PNDAABIi714+///SI2FgPv//0g5xw+FFQEAAOkVAQAAhcl+FEiLeAgx2+iaQQAAhMB1H+lAAQAASIsASIt4CEiDx1gx2+h/QQAAhMAPhCYBAABJi0UAOVgQfh9Mi0gIidhIweADSSnB9gUkbgAACA+FDwEAAOlWAQAASIsATItICEmDwVj2BQduAAAID4XyAAAA6TkBAABIiwBIi3AISIPGWEiNvXD7///o1fv//4O9cPv//z8Pjiv////oW0AAAEiNvUD7//9IicbovD8AAOhHQAAASYnH6D9AAABIjTV0VwAAMdK5/////0iJx+gdQAAASYnETYXkD4QLAQAATInn6IFAAABMif9IicboFkAAAEiNvUD7///odD8AAEiLvXj7//9IjYWA+///SDnHdAXoAkIAAEmLRQCDeBABfhxIi3gISIPH+LsBAAAA6HhAAACEwA+F+f7//+sdSIsASIt4CEiDx1i7AQAAAOhZQAAAhMAPhdr+//9FMcn2BRFtAAAIdExIjRX4VgAASI0NAFcAAEyNfYC+BAAAAEyJ902J+OgtxP//SYtFAEiLGOhpPwAAMdK5/////0iJx0yJ/uhLPwAASIXAdDVIiwBIiUMYSI29WPv//+i1PgAASIsFSGIAAEiLAEg7RdB1J0iBxJgEAABbQVxBXUFeQV9dw+jcPgAASI1DEOvA6NE+AADp6/7//+jLQAAAZmYuDx+EAAAAAABVSInlQVdBVkFVQVRTSIHsWAEAAEmJ/ujcPgAASI29gP7//0iJxug9PgAASYsGSIsATItgCEiNvQj///9IiwWFYQAASI1IGEiJjZj+//9IjZ2g/v//SIPAQEiJhQj///9Iid7oBEAAAEjHRZAAAAAAx0WY/////0yLLXphAABJjUUYSIlFuEiJhZj+//9Jg8VATImtCP///0iJ3+i0PwAATIs9SWEAAEmDxxBMib2g/v//SMeF+P7//wAAAABIx4Xw/v//AAAAAEjHhej+//8AAAAASMeF4P7//wAAAADHhQD///8QAAAASYsGg3gQAH4cSIt4COisPgAAhMB0I0mLBoN4EAB+H0yLQAjrJEiLAEiLeAhIg8dY6Ik+AACEwHXdRTHA6wtIiwBMi0AISYPAWEiNFShVAABIjQ0+VQAATI2NmP7//74EAAAATInn6B3j//9JiwZMiyBIjV2gSInfSI21oP7//+iEGQAASI19wEiJ3uiUPgAA9kXAAXQOSPdFyAAAAIAPhQQBAADoZz0AAIpNwInK0Or2wQFIjXXBSA9FddAPtsoPRU3IMdJIicfoNz0AAEiJw/ZFwAEPhZsAAABIhdsPhKQAAABIiwNJiUQkGPZFoAF0CUiLfbDorj4AAEiLRbhIiYWY/v//TImtCP///0yJvaD+///2heD+//8BdAxIi73w/v//6IA+AABIjb2g/v//6D4+AABIizW1XwAASIPGCEiNvZj+///o9z0AAEiNvQj////oRT4AAEiNvYD+///oIzwAAEiBxFgBAABbQVxBXUFeQV9dw0iLfdDoKj4AAEiF2w+FXP///+hIPAAASY1cJBBIiwNJiUQkGPZFoAEPhU7////pUv///0iNPXxVAABIjTV5VQAASI0NmFUAALogAQAA6PM9AACQVUiJ5UFXQVZTUEiJ+0iLBTRfAABIjUgYSIkLTI1zcEiDwEBIiUNwTI17CEiLBQ5fAABIg8AQSIlDCPZDSAF0CUiLe1jolz0AAEyJ/+hZPQAASIs10F4AAEiDxghIid/oFj0AAEyJ90iDxAhbQV5BX13pXj0AAGYuDx+EAAAAAABVSInlQVZTSIHsIAQAAEiLBcNeAABIiwBIiUXoSIn7SIsDg3gQAH4GSItwCOsLSIsASItwCEiDxlhIjb3Y+///6Ov2//9IiwNIiwBIi1gIRIs16mgAAEiLveD7///o7h0AAIkF2GgAAKgCdCaKDfZtAACEyXUcSI014wAAAEiJ3+htOwAAxgXcbQAAAYsFrmgAAKgBdE6KDc1tAACEyXVEvgEAAAC6IAAAALl/AAAASInf6E07AABIjT2ZUgAAvh0AAADoyjoAAEiNNTEBAABIid/oJzsAAMYFi20AAAGLBVxoAACoBHQVig18bQAAhMl1C+jJAgAAiwVDaAAAQfbGBHQZg+AEdRSLPTZoAABIjTVbbQAAMdLogj0AAEiLveD7//9IjYXo+///SDnHdAXosDwAAEiLBZ1dAABIiwBIO0XodQxIgcQgBAAAW0FeXcPoOzwAAGZmLg8fhAAAAAAAVUiJ5UFXQVZTUEmJ9kiJ+0yLPWldAABJiz9Ihdt0V0iNNbRTAAAxwEiJ2kyJ8ehFPAAA9gWmZwAAAnQe6Cc6AAC+AQAAAEUxwEUxyUiJx0yJ8kiJ2ejGvv//SYs/6AQ8AAC/BgAAAEiDxAhbQV5BX13pvDwAAEiNNXFTAAAxwEyJ8ujxOwAA9gVSZwAAAnWs68hmZmZmZi4PH4QAAAAAAFVIieVBV0FWQVVBVFNIg+wYSIn79gUlZwAAAXQeSI0VUVEAAEiNDVRRAAAx9kUxwEUxyUiJ3+hFvv//SIldyEiNBcJrAACKCEyNaAGJytDq9sEBTA9FaBBED7b6TA9FeAhJg/8bD4zYAAAAT410PQBMjSUcUQAATIn6TInrDx8ASIPC5nROvmEAAABIid/oqzsAAEiJw0iF23Q5uhsAAABIid9MiebomTsAAIXAdBFI/8NMifJIKdpIg/obfcLrFEw583QPTCnrsAFIg/v/D4WiAAAASYP/G3xpTI0lzlAAAEyJ62ZmZi4PH4QAAAAAAEmDx+Z0Tb5hAAAASInfTIn66Dg7AABIicNIhdt0NbobAAAASInfTInm6CY7AACFwHQRSP/DTYn3SSnfSYP/G32/6xBMOfN0C0wp67ABSIP7/3Uz6D44AABIicdIjTV5UAAASI1V0EiNTdQxwOhJOwAAg/gCdQ6DfdAFfBl1BoN91AN+ETHASIPEGFtBXEFdQV5BX13DSIsdVFsAAEiLC0iNPTtQAAC+GAAAALoBAAAA6FE6AABIizNIi33I6Fk4AAC/AQAAAOj/OQAADx9EAABVSInlQVdBVlNIg+xYSIsFBFsAAEiLAEiJReBIjT2yagAAMfboXTsAAInBhcl0dkiLBepaAABIizhIjTVfUQAAMcCJyujPOQAA6Lo3AABIjX2gSInG6B43AADoqTcAAEmJxuihNwAASI01cFEAADHSuf////9IicfofzcAAEiJw0iF2w+EWAIAAEiJ3+jjNwAATIn3SInG6Hg3AABIjX2g6Nk2AABIjT0sagAA6Lc6AACJwYXJdHZIiwViWgAASIs4SI01WFEAADHAicroRzkAAOgyNwAASI19oEiJxuiWNgAA6CE3AABJicboGTcAAEiNNWtRAAAx0rn/////SInH6Pc2AABIicNIhdsPhNoBAABIid/oWzcAAEyJ90iJxujwNgAASI19oOhRNgAATI11oEyJ9+hvOQAAvgAgAABMiffobjkAAL4CAAAATIn36Fs5AADHRZz/////TI19nL8DAAAATIn+TIn66F45AABIixUrWQAASI19kDHJTIn26Dc5AACJw78DAAAAMdJMif7oODkAAEyJ9+gGOQAAhdt0T0yLPXlZAABNizeJ3+hFOQAASInBSI01b1EAADHATIn3SInK6FA4AABJiz/oNjgAAEiLBUFZAABIiwBIO0XgD4X4AAAASIPEWFtBXkFfXcPoODkAAEiNNR1pAABIjRWeEAAASInH6BY5AACJwYXJdHZIiwUJWQAASIs4SI01hFAAADHAicro7jcAAOjZNQAASI19oEiJxug9NQAA6Mg1AABJicbowDUAAEiNNZdQAAAx0rn/////SInH6J41AABIicNIhdsPhIsAAABIid/oAjYAAEyJ90iJxuiXNQAASI19oOj4NAAASI09i2gAAOgqOQAAiz3sYgAAD1fADylFoEiNBUoBAABIiUWgx0Wo/////0iNFfhnAABIjXWg6B04AADGBeJnAAABSIsFSVgAAEiLAEg7ReAPhAj////o7zYAAOjmNAAA6Z79///o3DQAAOkc/v//6NI0AADpa////5BVSInlQVZTSIHsMAQAAEiLBQNYAABIiwBIiUXoSIsHg3gQAH4GSItwCOsLSIsASItwCEiDxlhIjb3Y+///6C7w//+LHTxiAABIi73g+///6KwYAACJBSpiAAA52HRViwUcYgAAg+AEdEpMjTVAZwAAMdKJ30yJ9uhiNwAAiz0CYgAAD1fADymFwPv//0iNBV0AAABIiYXA+///x4XI+////////0iNtcD7//9MifLoKzcAAEiLveD7//9IjYXo+///SDnHdAXoWTYAAEiLBUZXAABIiwBIO0XodQxIgcQwBAAAW0FeXcPo5DUAAA8fQABVSInlMcDwD7E90mYAAHUNSI09zWYAAF3pfzcAAF3DkFVIieVIgewgBAAASIsF9lYAAEiLAEiJRfhIiweDeBAAfgZIi3AI6wtIiwBIi3AISIPGWEiNvej7///oIe///0iLvfD7///odRgAAEiLvfD7//9IjYX4+///SDnHdAXosTUAAEiLBZ5WAABIiwBIO0X4dQlIgcQgBAAAXcPoPzUAAGZmZmZmZi4PH4QAAAAAAFVIieVIgewgBAAASIsFZlYAAEiLAEiJRfhIiweDeBAAfgZIi3AI6wtIiwBIi3AISIPGWEiNvej7///oke7//0iLvfD7///ohRgAAEiLvfD7//9IjYX4+///SDnHdAXoITUAAEiLBQ5WAABIiwBIO0X4dQlIgcQgBAAAXcPorzQAAGZmZmZmZi4PH4QAAAAAAFVIieVIgewgBAAASIsF1lUAAEiLAEiJRfhIiweDeBAAfgZIi3AI6wtIiwBIi3AISIPGWEiNvej7///oAe7//0iLvfD7///olRgAAIkFP2UAAEiLvfD7//9IjYX4+///SDnHdAXoizQAAEiLBXhVAABIiwBIO0X4dQlIgcQgBAAAXcPoGTQAAGYPH4QAAAAAAFVIieVBV0FWU0iD7BhJif7oMzIAAEmJx0yJPelkAADoHCIAAEyJ/+gkGQAA6E8iAADodjQAAInD6Es0AAA5w3Uv6Eg0AACJw+gvNAAAOcN1H0iNPRJKAADoJTQAAEiFwHQOSInH6OYXAACJBZBkAADoNzQAAInD6Aw0AAA5w3Uv6Ak0AACJw+jwMwAAOcN1H0iNPeZJAADo5jMAAEiFwHQOSInH6CcUAACJBRFfAADo+DMAAInD6M0zAAA5w3Uv6MozAACJw+ixMwAAOcN1H0iNPblJAADopzMAAEiFwHQOSInH6FgVAACJBdZeAADouTMAAInD6I4zAAA5w3Up6IszAACJw+hyMwAAOcN1GUiNPYxJAADoaDMAAEiFwHQISInH6OkVAADogDMAAInD6FUzAAA5w3Up6FIzAACJw+g5MwAAOcN1GUiNPWdJAADoLzMAAEiFwHQISInH6FAWAACLBVpeAACoAg+FYAMAAKgBD4V8AwAAqAR0BejB+P//6MQwAABIjX3QSInG6CgwAABIjT3J7v//MfYx0ujwEAAASYnH6KAwAABIjTUbSQAAMdK5/////0iJx+h+MAAASInDSIXbD4R5AwAATIn/SIne6BMwAAAxyTHATIn3SIneTIn66PkPAABIjX3Q6M4vAADoUzAAAEiNfdBIicboty8AAEiNPUjx//8x9jHS6H8QAABJicfoLzAAAEiNNbhIAAAx0rn/////SInH6A0wAABIicNIhdsPhBIDAABMif9Iid7ooi8AADHJMcBMifdIid5MifroiA8AAEiNfdDoXS8AAOjiLwAASI190EiJxuhGLwAASI09B/T//zH2MdLoDhAAAEmJx+i+LwAASI01UUgAADHSuf////9IicfonC8AAEiJw0iF2w+EqwIAAEyJ/0iJ3ugxLwAAMckxwEyJ90iJ3kyJ+ugXDwAASI190OjsLgAA6HEvAABIjX3QSInG6NUuAABIjT1W+v//MfYx0uidDwAASYnH6E0vAABIjTXqRwAAMdK5/////0iJx+grLwAASInDSIXbD4REAgAATIn/SIne6MAuAAAxyTHATIn3SIneTIn66KYOAABIjX3Q6HsuAADoAC8AAEiNfdBIicboZC4AAEiNPfX6//8x9jHS6CwPAABJicfo3C4AAEiNNYNHAAAx0rn/////SInH6LouAABIicNIhdsPhN0BAABMif9Iid7oTy4AADHJMcBMifdIid5MifroNQ4AAEiNfdDoCi4AAOiPLgAASI19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hcB0bLoKAAAATIn3TInm6N4fAACFwHSougYAAABMifdMie7oyh8AAIXAdK66BwAAAEyJ90iNNYg5AADosh8AALkIAAAAugcAAACFwHVGQYA8Fit0LEkB1gnLQYA+AHWQ63lmZmZmZi4PH4QAAAAAALkBAAAAugkAAABBgDwWK3XUTY10FgEJy0GAPgAPhV7////rR0iLPQU/AABIjTUpOQAAujUAAADopNL//0iJw0yJ9+g1HwAASInfTIn2SInC6IvS//9IjTVrKAAAugEAAABIicfod9L//zHbidhIg8QIW0FcQV1BXkFfXcMPH0AAVUiJ5UFXQVZTUEiJ+4A7AA+EgQAAAEiNNSQ5AAC6BwAAAEiJ3+jYHgAAQb4fAAAAhcAPhIUAAABIjTUKOQAAugcAAABIid/oth4AAIXAdGdIiz1ZPgAASI018zgAALo1AAAA6PjR//9JicdIid/oiR4AAEyJ/0iJ3kiJwujf0f//SI01vycAALoBAAAASInH6MvR///rJkiLPRI+AABIjTVsOAAAui8AAADosdH//0G+HwAAAOsGQb4DAAAARInwSIPECFtBXkFfXcMPH0QAAFVIieVTUEiJ+4A7AHRESInf6BYeAABIg/hBclVIiz29PQAASI01vzgAALosAAAA6FzR//++QAAAAEiJx+g7HAAASI01zjgAALoNAAAASInH6xNIiz2HPQAASI01VzgAALoxAAAA6CbR//9Ig8QIW13DSI09iEgAAEiNFUomAAC+QQAAADHASInZSIPECFtd6YAdAABmZmYuDx+EAAAAAABVSInlU1BIifuAOwB0RkiJ3+h2HQAASD0BBAAAclVIiz0bPQAASI01izgAALoyAAAA6LrQ//++AAQAAEiJx+iZGwAASI01LDgAALoNAAAASInH6xNIiz3lPAAASI01IjgAALoyAAAA6ITQ//9Ig8QIW13DSI09NkgAAEiNFaglAAC+AQQAADHASInZSIPECFtd6d4cAABmLg8fhAAAAAAAVUiJ5UFXQVZTUEiJ+4A7AA+EuAAAAEiNNWU4AAC6AwAAAEiJ3+jIHAAAQb4BAAAAhcAPhLEAAABIjTVHOAAAugQAAABIid/ophwAAIXAD4SVAAAASI01MDgAALoCAAAASInf6IocAABFMfaFwHR6SI01GDgAALoFAAAASInf6G8cAACFwHRiSIs9EjwAAEiNNf83AAC6PQAAAOixz///SYnHSInf6EIcAABMif9Iid5IicLomM///0iNNXglAAC6AQAAAEiJx+iEz///6xtIiz3LOwAASI01bjcAALo3AAAA6GrP//9FMfZEifBIg8QIW0FeQV9dw2YPH4QAAAAAAFVIieVBV0FWQVVBVFNIgey4CAAASYn+SIsF6jsAAEiLAEiJRdDozhgAAEiNvSj3//9IicboDRkAAEiNPeBKAABIjTUcJAAA6K4ZAADopxgAAEiNNXo3AAAx0rn/////SInH6IUYAABJicRNheQPhDUHAABMiffolRgAAEiJx+hvGAAASYnG6G0YAABIicNMja3A+///TInvSIne6BAYAABIid/oaBgAAEyJ90iJxkyJ4ugkGAAATInvSInG6OkXAABJicRMie/oqBcAAE2F5A+E0wYAAEyJ5+jPGAAAhMAPhMMGAADoDhgAAEiNNek2AAAx0rn/////SInH6OwXAABJicZNhfYPhJwGAADo5xcAAEiJw0yNrcD7//9Mie9Iid7oihcAAEiJ3+jiFwAATInnSInGTIny6J4XAABMie9IicboYxcAAEmJxkyJ7+giFwAATYX2D4RNBgAASYsGicGD4QNIg/kBdWhIi0D/D7dAC4P4P3dbSI29wPv//0yJ9ujb0v//SI0dlEkAAEiNNU82AABIid/oXxgAAEiLtcj7//9Iid/oRBgAAEiNNYYjAABIid/oNRgAAEiLvcj7//9IjYXQ+///SDnHdAXoQxkAAOgiFwAASI01FzYAADHSuf////9IicfoABcAAEmJxk2F9g+EsAUAAOj7FgAASInDTI2twPv//0yJ70iJ3uieFgAASInf6PYWAABMiedIicZMifLoshYAAEyJ70iJxuh3FgAASInDTInv6DYWAABIhdsPhGEFAABIid/oXRcAAITAD4RRBQAA6JwWAABJicRMjbXA+///TIn3TInm6D8WAABMiefolxYAAEiJ30iJxuhKFgAATIn3SInG6BsWAABMifdJicbo2hUAAE2F9g+EBQUAAEiJnVj3//8PV8APKYVg9///SMeFcPf//wAAAABmx4Vg9///AijGhWL3//8ATIn36MkWAACJhXz3//+FwA+ETQQAADHASImFgPf//0yNrcD7//9Mjb2w9///RTHkTIm1iPf//+jtFQAASInDTInvSIne6JcVAABIid/o7xUAAEyJ90iJxkSJ4uixFQAATInvSInG6HAVAABMietJicVIid/oLBUAAE2F7Q+E+wAAAOiiFQAASYnGSInfTIn26EwVAABMiffopBUAAEiLvVj3//9IicZMieroXBUAAEiJ30iJxughFQAASYnGSInf6OAUAABNhfYPhMcAAABIid9Mie7ouND//0yJ/0yJ9uit0P//SIudyPv//0iF2w+EwAAAAEiLhbj3//9IhcBMi7WI9///D4SwAAAASI09HDQAAEiJ3uj3FwAAhcBMja3A+///D4S1AAAAD1fADymFkPf//0jHhaD3//8AAAAASInf6NcXAABJicZJg/7wD4O5AwAASYP+Fw+DrQAAAESJ8ADAiIWQ9///TI2tkff//02F9g+FyAAAAOnRAAAASYndQf/ERDulfPf//w+Cp/7//+nOAgAATIu1iPf//0mJ3UH/xEQ7pXz3//8Pgoj+///prwIAAEyLtYj3//9Mja3A+///SIu9uPf//0iNhcD3//9IOccPhV0CAADpXQIAAEiNBWxGAAAPtgCoAQ+EagEAAEiNBVpGAABIi0AISIP4JA+EZAEAAOkZAgAATYn3SYPHEEmD5/BMif/osBUAAEmJxUyJraD3//9Jg88BTIm9kPf//0yNvbD3//9MibWY9///TInvSIneTIny6F0WAABDxkQ1AABIjZ2Q9///SInfSI014TIAAOi1FAAASIu1uPf//0iJ3+imFAAAD7aFkPf//4nBgOEBdAlIi5WY9///6weJwtDqD7bSTIu1iPf//0yNrcD7//9Ii7WA9///SIX2D4QwAQAASI10FgJIg/5RcjxIjb1g9///SI01ezIAAOhMFAAAD7aFkPf//6gBD4X6AAAAicHQ6Q+20THJhMlIiZWA9///D4X6AAAA6zRIifNIjb1g9///SI01DCIAAOgNFAAASInaD7aFkPf//4nBgOEBhMlIiZWA9///D4XEAAAA0OgPttBIjbWR9///SI29YPf//+jdEwAA9oWQ9///AQ+EzgAAAOm9AAAA0OgPtsBIg/gkD4W6AAAAMfZIx8L/////QbgkAAAASI090kQAAEiNDQ4eAADodhMAAIXAD4WQAAAASI0dt0QAAEiJ30iNNY8xAADoghMAAEiLtbj3//9Iid/oZxMAAEiJ30iNNaYeAADoWBMAAEiLvbj3//9IjYXA9///SDnHdVzrX7EBSIuVmPf//4TJSImVgPf//w+EPP///0iLlZj3//9Ii7Wg9///SI29YPf//+gXEwAA9oWQ9///AXQMSIu9oPf//+ieEwAASIu9uPf//0iNhcD3//9IOcd0BegKFAAASIu9yPv//0iNhdD7//9IOcd0BejyEwAAQf/ERDulfPf//w+C1Pv//0iNFdkdAABIjb3A+///SI21YPf//+ikAAAAioXA+///icHQ6agBSI21wfv//0gPRbXQ+///D7bRSA9Flcj7//9IjT2nQwAA6HYSAAD2hcD7//8BdAxIi73Q+///6P0SAAD2hWD3//8BdAxIi71w9///6OgSAABIjb0o9///6JgRAABIiwVNNAAASIsASDtF0HUSSIHEuAgAAFtBXEFdQV5BX13D6OUSAABIjb2Q9///6O8RAABmDx+EAAAAAABVSInlQVdBVkFVQVRTSIPsGEmJ1kmJ90iJ+0jHQxAAAAAASMdDCAAAAABIxwMAAAAAQYoHqAF1INDoRA+24EyJ9+i2EwAASf/HTY0sBEmD/fByH+mWAAAATYtnCEyJ9+iYEwAATYt/EE2NLARJg/3wc3xIiUXQTIl1yEmD/RZ3EkSJ4ADAiANMjXMBTYXkdSnrNUmDxRBJg+XwTInv6AoSAABJicZMiXMQSYPNAUyJK0yJYwhNheR0DkyJ90yJ/kyJ4ujDEgAAQ8YEJgBIid9Ii3XISItV0OgoEQAASInYSIPEGFtBXEFdQV5BX13DSInf6PAQAABmLg8fhAAAAAAAVUiJ5VNIg+wYSI1d6DH2SInf6E8SAABIjTVCQgAASInf6EwSAABIjT1rQgAA6NwSAABIg8QYW13DDx+AAAAAAFVIieVBV0FWQVVBVFNIg+w46BAPAABIixjoAg8AAESLMEiNPeBBAABIjTUpGwAA6JYQAAAPV8APKUWgSMdFsAAAAABFhfZ+f0yNbaBMjT21QQAATI0ldh4AAGYPH0QAAEiLE0iNfcBMie7oUf7//w+2RcCJwdDpqAFIi3XQSI1FwUgPRPAPttFID0VVyEyJ/+gvEAAA9kXAAXQJSIt90Oi8EAAATInvTInm6BsQAABIg8MISf/Odaj2RaABdAlIi32w6JkQAABIg8Q4W0FcQV1BXkFfXcNmLg8fhAAAAAAAVUiJ5UFXQVZBVFNIgexgBQAASYnOSYnXSInzSIsF1jEAAEiLAEiJRdhIi38ISI21sPr//zHSQbgIAAAASInZ6OARAACFwA+EogAAAA+2ewFIjUMESI1zCIP/AkgPRPBIjZWA+v//uS4AAADowBEAAIXAD4XdAAAAD7dDAmbBwAhED7fgTIn/6FARAABMifdMif5IicLopsT//0iJw0yNtYD6//9MiffoMBEAAEiJ30yJ9kiJwuiGxP//SI011h4AALoBAAAASInH6HLE//9IicdEieboUw8AAEiLBRgxAABIiwBIO0XYdHzphwAAAEyJ/+jmEAAATIn3TIn+SInC6DzE//9IicNMjbWs+///TIn36MYQAABIid9MifZIicLoHMT//0iNNWweAAC6AQAAAEiJx+gIxP//SInDTI11rUyJ9+iVEAAASInfTIn2SInC6OvD//9IiwWcMAAASIsASDtF2HUQSIHEYAUAAFtBXEFeQV9dw+g2DwAAZg8fRAAAVUiJ5UFWU0iB7JAAAABIiwVjMAAASIsASIlF6EmJ9kiJ+8eFZP///4AAAACLQxCD+Ax0KYP4Dw+FtwAAAEiNtWj///9IjZVk////SInf6MMQAACFwA+FmQAAAOsaSI21aP///0iNlWT///9Iid/okRAAAIXAdX1IjRV6GAAASI21aP///0iJ30yJ8ejw/f//g3sQDHVeSI21aP///0iNlWT///9Iid/oUhAAAIP4x3QvhcB1P0iNFdArAABIjbVo////SInfTInx6LL9//9IiwWjLwAASIsASDtF6HQm6zBIjTW0KwAAuhAAAABMiffozML//0iLBX0vAABIiwBIO0XodQxIgcSQAAAAW0FeXcPoGw4AAGZmLg8fhAAAAAAAVUiJ5UFXQVZBVUFUU0iD7ChJifdIiftIx0XQAAAAAItDEIP4BHQhg/gDD4U8AQAASI1V0DH2SInf6DoPAACD+Ml0HOkkAQAASI1V0DH2SInf6CgPAACD+MkPhQ0BAABIi33Q6FAOAABJicaLQxCD+AR0IoP4Aw+F6AAAAEiNVdBIid9Mifbo7Q4AAIXAD4XRAAAA6xdIjVXQSInfTIn26NoOAACFwA+FuAAAAEyLbdAPV8APKUWwSMdFwAAAAABJg/3wD4OyAAAASYP9F3MWRInoAMCIRbBMjWWxTInjTYXtdSnrNUmNXRBIg+PwSInf6PcMAABIiUXASIPLAUiJXbBIicNMiW24TI1lsUiJ30yJ9kyJ6uiwDQAAQsYEKwBIjTVmKgAAugoAAABMif/obcH//4pNsInK0Or2wQFMD0VlwA+20kgPRVW4SInHTInm6EvB///2RbABdAlIi33A6HwMAABMiffo+AwAAEiDxChbQVxBXUFeQV9dw0iNfbDoogsAAGZmZi4PH4QAAAAAAFVIieVBV0FWQVVBVFNIgexYAQAASYn0SYn+D1fADylFwEjHRdAAAAAASI298P7//0iLBVEtAABIjUgYSImNgP7//0iNnYj+//9Ig8BASImF8P7//0iJ3ujQCwAASMeFeP///wAAAADHRYD/////SIsFQy0AAEiNSBhIiU2QSImNgP7//0iDwEBIiUWISImF8P7//0iJ3+h5CwAASIsFDi0AAEiDwBBIiUWYSImFiP7//0jHheD+//8AAAAASMeF2P7//wAAAABIx4XQ/v//AAAAAEjHhcj+//8AAAAAx4Xo/v//EAAAAEGLRhBIg/gSD4eTAgAASI0NaAcAAEhjBIFIAcj/4EiNNfsoAADpagIAAEiNNfcoAADpXgIAAEiNNfEoAADpUgIAAEiNNesoAADrB0iNNesoAABIjX3A6HgKAABIjbWA/v//TIn36B/9///pLgIAAEiNNc8oAADpGQIAAEiNNcooAADpDQIAAEiNNcMoAADpAQIAAEiNNbwoAADp9QEAAEiNNbUoAADp6QEAAEiNNfknAABIjX3A6BgKAABIjTWhKAAASI29gP7//7oFAAAA6Fa///9Bi3Zo6QsBAABIjTWGKAAA6awBAABIjTWBKAAA6QcBAABJi34ITYu+gAAAAOg/DAAASYnFSI01ZigAAEiNfcDovAkAAEiNNVwoAABIjb2A/v//uggAAADo+r7//0iJw0yJ9+g5DAAASInfSInG6OIJAABMiftMKesPhsAFAABIjTUrKAAASI29gP7//7oOAAAA6MC+//9IicdIid7oswkAAEiNNRcoAAC6AwAAAOnpBQAASI01JigAAEiNfcDoPgkAAEiNdaBIjVWoTIn36NQLAACFwA+F8AAAAEiNNQIoAABIjb2A/v//ugcAAADoZL7//4t1oEiJx+hFCQAASI015ycAALoKAAAASInH6EW+//+LdahIicfoJgkAAOmpAAAASI01zicAAEiNfcDozwgAAEiNtYD+//9MiffoVvr//+mFAAAASI01diQAAEiNfcDoqwgAAEiNNZ4nAABIjb2A/v//uggAAADo6b3//0GLdmhIicfoyQgAAEiNNUwYAAC6AgAAAEiJx+jJvf//SYnFQYtGaP/Ig/geD4fTBAAASJhIjQ2eMwAASIscwenIBAAASI01SycAAOsHSI01RycAAEiNfcDoNggAAEGLRhCD+A8Ph6QAAAC5gJAAAA+jwQ+DlgAAAMdFqAAAAADHRaAAAAAAg/gMdAWD+A91HUiNnYD+//9IjTXjFQAAugIAAABIid/oPr3//+sHSI2dgP7//0iNdahMiffoYQoAAEiNdaBMiffoPQoAAEiNNcwmAAC6EgAAAEiJ3+gJvf//i3WoSInH6OoHAABIjTXAJgAAuhQAAABIicfo6rz//4t1oEiJx+jLBwAAQYtGEIP4Dw+HkwAAALmA0QAAD6PBD4OFAAAASI11qEyJ9+iKCQAAhcB1cYtFqIP4AnQjg/gBdCeFwHU9SI01eiYAAEiNvYD+//+6BwAAAOiLvP//60ZIjTVxJgAA6wdIjTVfJgAASI29gP7//7oIAAAA6Gi8///rI0iNNVcmAABIjb2A/v//uhMAAADoTrz//4t1qEiJx+gvBwAAQYtGEIP4Dg+HmwAAALmAUAAAD6PBD4ONAAAASI01LSYAAEyNrYD+//+6FAAAAEyJ7+gNvP//SYt2YEiJx+j5BgAATIn36PUIAAAxyYXATYn3TI01IxEAAEiNNQUmAABJD0T2uwoAAAC6CgAAAEgPRNFMie/oyrv//0mJxUyJ/+jBCAAAhcBIjTXiJQAASQ9E9k2J/rgAAAAASA9E2EyJ70iJ2uibu///SYsEJEiLQOhBvU////9Bi0wECEQh6YPJIEGJTAQISI01rSUAALoBAAAATInn6Gm7//9IicNMiffoSAgAAEG3LbEthcB0ArFSiE2oSI11qLoBAAAASInf6D+7//9IicNMiffoKggAAIXAdANBt0FEiH2oSI11qLoBAAAASInf6Bi7//9IjTVKJQAAugQAAABIicfoBLv//0iLCEiLSehIx0QIGAoAAACKTcCJytDq9sEBSI11wUgPRXXQD7bSSA9FVchIicfo0br//0iLCEiLSeiLVAgIRCHqg8oQiVQICEiLCEiLSehIx0QIGBIAAABJiwQkSItA6EEPvpwEkAAAAEHHhASQAAAAMAAAAEyJ50yJ9uhkBQAASIsISItJ6ItUCAhEIeqDyiCJVAgISYsEJEiLQOhBiZwEkAAAAEiNNXgZAAC6AgAAAEyJ5+hLuv//SInDSIsDSItA6EQjbAMIQYPNIESJbAMISI19qEyNvYj+//9Mif7owN///4pFqInB0OmoAUiNdalID0V1uA+20UgPRVWwSInf6P65//9IicNIiwNIi3DoSAHeTI11oEyJ9+h9BAAASIs1PiYAAEyJ9+hoBAAASIsIvgoAAABIicf/UThBicRMiffo0wQAAEEPvvRIid/ocwQAAEiJ3+hxBAAA9kWoAXQJSIt9uOjaBAAASItFkEiJhYD+//9Ii0WISImF8P7//0iLRZhIiYWI/v//9oXI/v//AXQMSIu92P7//+ikBAAATIn/6GYEAABIizXdJQAASIPGCEiNvYD+///oHwQAAEiNvfD+///obQQAAPZFwAF0CUiLfdDoagQAAEiBxFgBAABbQVxBXUFeQV9dw0iNNX4iAABIjb2A/v//uhMAAADoALn//00p/UiJx0yJ7ujwAwAASI01bCIAALoHAAAA6ylIjR3UIQAASInf6HEFAABMie9Iid5IicLox7j//0iNNWARAAC6AQAAAEiJx+izuP//6SL7//9mkKH4//+t+P//ufj//8X4///O+P//8vj///74//8K+f//Fvn//yL5//8u+f//X/n//2v5//93+f//CPr//3f6//+b+v//B/v//xD7//9VSInl/8+D/x53EEhjx0iNDTsuAABIiwTBXcNIjQU1IQAAXcNmZmYuDx+EAAAAAABVSInlQVdBVkFVQVRTSIPseEiLBdAkAABIiwBIiUXQSYn9uf////9IjX2wSbjP91PjpZvEIGZmLg8fhAAAAAAASInwSMHoA0n34EjB6gRpwugDAACJ8ynDiR//wUiDxwRIgf7nAwAASInWd9RIY9lIjUSdsEiJhWj///9MjaVw////RTH26yBmDx+EAAAAAAC6AQAAAEyJ70iNNdQhAADojLf//0n/zk6NPDNIi4Vo////QosMsEWF9nQ1vkAAAAAxwEyJ50iNFaIhAADo4wMAAEyJ5+jzAwAATInvTInmSInC6Em3//9Nhf9/pOsRZpBMie+JzugiAgAATYX/f5FIiwXiIwAASIsASDtF0HUPSIPEeFtBXEFdQV5BX13D6H0CAABmZmZmLg8fhAAAAAAA/yXSIwAA/yXUIwAA/yXWIwAA/yXYIwAA/yXaIwAA/yXcIwAA/yXeIwAA/yXgIwAA/yXiIwAA/yXkIwAA/yXmIwAA/yXoIwAA/yXqIwAA/yXsIwAA/yXuIwAA/yXwIwAA/yXyIwAA/yX0IwAA/yX2IwAA/yX4IwAA/yX6IwAA/yX8IwAA/yX+IwAA/yUAJAAA/yUCJAAA/yUEJAAA/yUGJAAA/yUIJAAA/yUKJAAA/yUMJAAA/yUOJAAA/yUQJAAA/yUSJAAA/yUUJAAA/yUWJAAA/yUYJAAA/yUaJAAA/yUcJAAA/yUeJAAA/yUgJAAA/yUiJAAA/yUkJAAA/yUmJAAA/yUoJAAA/yUqJAAA/yUsJAAA/yUuJAAA/yUwJAAA/yUyJAAA/yU0JAAA/yU2JAAA/yU4JAAA/yU6JAAA/yU8JAAA/yU+JAAA/yVAJAAA/yVCJAAA/yVEJAAA/yVGJAAA/yVIJAAA/yVKJAAA/yVMJAAA/yVOJAAA/yVQJAAA/yVSJAAA/yVUJAAA/yVWJAAA/yVYJAAA/yVaJAAA/yVcJAAA/yVeJAAA/yVgJAAA/yViJAAA/yVkJAAA/yVmJAAA/yVoJAAA/yVqJAAA/yVsJAAA/yVuJAAA/yVwJAAA/yVyJAAA/yV0JAAA/yV2JAAA/yV4JAAA/yV6JAAA/yV8JAAA/yV+JAAA/yWAJAAA/yWCJAAA/yWEJAAA/yWGJAAA/yWIJAAA/yWKJAAA/yWMJAAA/yWOJAAA/yWQJAAA/yWSJAAA/yWUJAAA/yWWJAAA/yWYJAAA/yWaJAAA/yWcJAAA/yWeJAAA/yWgJAAA/yWiJAAA/yWkJAAA/yWmJAAA/yWoJAAA/yWqJAAA/yWsJAAA/yWuJAAA/yWwJAAA/yWyJAAA/yW0JAAA/yW2JAAA/yW4JAAA/yW6JAAA/yW8JAAA/yW+JAAA/yXAJAAA/yXCJAAA/yXEJAAA/yXGJAAA/yXIJAAA/yXKJAAA/yXMJAAA/yXOJAAA/yXQJAAA/yXSJAAA/yXUJAAA/yXWJAAA/yXYJAAA/yXaJAAA/yXcJAAA/yXeJAAA/yXgJAAA/yXiJAAA/yXkJAAA/yXmJAAA/yXoJAAA/yXqJAAA/yXsJAAA/yXuJAAA/yXwJAAA/yXyJAAA/yX0JAAA/yX2JAAA/yX4JAAA/yX6JAAA/yX8JAAA/yX+JAAA/yUAJQAA/yUCJQAA/yUEJQAA/yUGJQAA/yUIJQAA/yUKJQAA/yUMJQAA/yUOJQAA/yUQJQAA/yUSJQAA/yUUJQAA/yUWJQAA/yUYJQAA/yUaJQAA/yUcJQAA/yUeJQAA/yUgJQAA/yUiJQAA/yUkJQAA/yUmJQAA/yUoJQAA/yUqJQAA/yUsJQAA/yUuJQAA/yUwJQAA/yUyJQAA/yU0JQAA/yU2JQAA/yU4JQAA/yU6JQAA/yU8JQAA/yU+JQAA/yVAJQAA/yVCJQAA/yVEJQAA/yVGJQAA/yVIJQAAaCYAAADphgMAAGh7AAAA6XwDAABovQAAAOlyAwAAaOkAAADpaAMAAGgJAQAA6V4DAABoKQEAAOlUAwAAaEwBAADpSgMAAGiRAQAA6UADAABoyQEAAOk2AwAAaBwCAADpLAMAAGhjAgAA6SIDAABoqgIAAOkYAwAAaFsDAADpDgMAAGiDAwAA6QQDAABosgMAAOn6AgAAaOcDAADp8AIAAGgHBAAA6eYCAABoKQQAAOncAgAAaFQEAADp0gIAAGiUBAAA6cgCAABo2AQAAOm+AgAAaAYFAADptAIAAGhKBQAA6aoCAABofgUAAOmgAgAAaMUFAADplgIAAGgNBgAA6YwCAABoLQYAAOmCAgAAaFIGAADpeAIAAGikBgAA6W4CAABo4gYAAOlkAgAAaBkHAADpWgIAAGhFBwAA6VACAABohQcAAOlGAgAAaLIHAADpPAIAAGjqBwAA6TICAABoNQgAAOkoAgAAaHoIAADpHgIAAGjiCAAA6RQCAABoKAkAAOkKAgAAaFQJAADpAAIAAGh8CQAA6fYBAABomAkAAOnsAQAAaNcJAADp4gEAAGgjCgAA6dgBAABoYgoAAOnOAQAAaJkKAADpxAEAAGjECgAA6boBAABo8QoAAOmwAQAAaB4LAADppgEAAGhLCwAA6ZwBAABoegsAAOmSAQAAaJ8LAADpiAEAAGjHCwAA6X4BAABo9AsAAOl0AQAAaCgMAADpagEAAGhHDAAA6WABAABobgwAAOlWAQAAaI8MAADpTAEAAGjHDAAA6UIBAABo5wwAAOk4AQAAaBwNAADpLgEAAGg6DQAA6SQBAABoUBcAAOkaAQAAaBoZAADpEAEAAGgwGQAA6QYBAABoRhkAAOn8AAAAaF4ZAADp8gAAAGhwGQAA6egAAABojBkAAOneAAAAaKcZAADp1AAAAGi+GQAA6coAAABo0RkAAOnAAAAAaOYZAADptgAAAGj7GQAA6awAAABoEhoAAOmiAAAAaCkaAADpmAAAAGg/GgAA6Y4AAABoVRoAAOmEAAAAaG0aAADpegAAAGh8GgAA6XAAAABomBoAAOlmAAAAaKwaAADpXAAAAGjAGgAA6VIAAABo1BoAAOlIAAAAaPAaAADpPgAAAGgLGwAA6TQAAABoJhsAAOkqAAAAaEIbAADpIAAAAGhdGwAA6RYAAABoeBsAAOkMAAAAaIkbAADpAgAAAAAATI0dORsAAEFT/yUpGwAAkGhbDQAA6eb///9osw0AAOnc////aPsNAADp0v///2gpDgAA6cj///9oVw4AAOm+////aHwOAADptP///2jPDgAA6ar///9oIw8AAOmg////aHYPAADplv///2jIDwAA6Yz///9oHBAAAOmC////aGwQAADpeP///2iqEAAA6W7///9o6hAAAOlk////aDARAADpWv///2hzEQAA6VD///9orxEAAOlG////aO0RAADpPP///2gpEgAA6TL///9oZRIAAOko////aKESAADpHv///2jdEgAA6RT///9oGRMAAOkK////aFcTAADpAP///2iVEwAA6fb+//9othMAAOns/v//aNMTAADp4v7//2j2EwAA6dj+//9oGRQAAOnO/v//aFoUAADpxP7//2iRFAAA6br+//9oAhUAAOmw/v//aAAAAADppv7//2gTAAAA6Zz+//9oyBQAAOmS/v//aN0UAADpiP7//2jtFAAA6X7+//9oGRUAAOl0/v//aCkVAADpav7//2hCFQAA6WD+//9oXxUAAOlW/v//aG0VAADpTP7//2h/FQAA6UL+//9okBUAAOk4/v//aJ8VAADpLv7//2itFQAA6ST+//9ouhUAAOka/v//aMkVAADpEP7//2jYFQAA6Qb+//9o5hUAAOn8/f//aPQVAADp8v3//2gEFgAA6ej9//9oEhYAAOne/f//aB8WAADp1P3//2guFgAA6cr9//9oPRYAAOnA/f//aEwWAADptv3//2hcFgAA6az9//9oaxYAAOmi/f//aHsWAADpmP3//2iKFgAA6Y79//9omRYAAOmE/f//aKsWAADpev3//2i9FgAA6XD9//9o0hYAAOlm/f//aOEWAADpXP3//2j1FgAA6VL9//9oBBcAAOlI/f//aBMXAADpPv3//2giFwAA6TT9//9oMRcAAOkq/f//aEEXAADpIP3//2htFwAA6Rb9//9oihcAAOkM/f//aKQXAADpAv3//2jIFwAA6fj8//9o6hcAAOnu/P//aAEYAADp5Pz//2ggGAAA6dr8//9oNRgAAOnQ/P//aE0YAADpxvz//2hbGAAA6bz8//9oahgAAOmy/P//aHwYAADpqPz//2iNGAAA6Z78//9onBgAAOmU/P//aKsYAADpivz//2i8GAAA6YD8//9oyxgAAOl2/P//aNsYAADpbPz//2jvGAAA6WL8//9o/BgAAOlY/P//aAwZAADpTvz//wAAAAAAAAAAAAAAAPA/je21oPfGsD4AAAAAAABZQAAAAAAAAAAAMQAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKUwBHQwBDT01QSUxFUgBPVEhFUgBFWFRFUk5BTABJRExFAFVuYWJsZSB0byBkZXRlcm1pbmUgTm9kZS5qcyB2ZXJzaW9uCgAAJXMAbm9kZS1yZXBvcnQALiU0ZCUwMmQlMDJkLiUwMmQlMDJkJTAyZC4lZC4lMDNkLnR4dABzdGRvdXQAc3RkZXJyACVzJXMlcwAvAApGYWlsZWQgdG8gb3BlbiBOb2RlLmpzIHJlcG9ydCBmaWxlOiAAIGRpcmVjdG9yeTogACAoZXJybm86IAApCgAKV3JpdGluZyBOb2RlLmpzIHJlcG9ydCB0byBmaWxlOiAACgBOb2RlLmpzIHJlcG9ydCBjb21wbGV0ZWQKAD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgA9PT09IE5vZGUgUmVwb3J0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoACkV2ZW50OiAALCBsb2NhdGlvbjogIgAiCgBGaWxlbmFtZTogACU0ZC8lMDJkLyUwMmQgJTAyZDolMDJkOiUwMmQARHVtcCBldmVudCB0aW1lOiAgAE1vZHVsZSBsb2FkIHRpbWU6IABQcm9jZXNzIElEOiAACj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09AAo9PT09IE5vZGUuanMgbGlidXYgSGFuZGxlIFN1bW1hcnkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoACihGbGFnczogUj1SZWYsIEE9QWN0aXZlKQoARmxhZ3MAVHlwZQBBZGRyZXNzAERldGFpbHMACj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgBDb21tYW5kIGxpbmU6IABub2RlLXJlcG9ydCB2ZXJzaW9uOiAAMi4yLjExACAoYnVpbHQgYWdhaW5zdCBOb2RlLmpzIHYAMTIuMTguNAAsIAAgYml0ACkACk9TIHZlcnNpb246IAAgAGdudV9nZXRfbGliY192ZXJzaW9uAChnbGliYzogAApNYWNoaW5lOiAACj09PT0gSmF2YVNjcmlwdCBTdGFjayBUcmFjZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgoATm8gc3RhY2sgdHJhY2UgYXZhaWxhYmxlLCB1bmFibGUgdG8gY3JlYXRlIHRlbXBvcmFyeSBmaWxlCgBObyBzdGFjayB0cmFjZSBhdmFpbGFibGUKAEphdmFTY3JpcHQgVk0gc3RhdGU6IAAKCgBKYXZhU2NyaXB0IFZNIHN0YXRlOiA8dW5rbm93bj4KCgBTaWduYWwgcmVjZWl2ZWQgd2hlbiBldmVudCBsb29wIGlkbGUsIG5vIHN0YWNrIHRyYWNlIGF2YWlsYWJsZQoACk5vIHN0YWNrIHRyYWNlIGF2YWlsYWJsZSBmcm9tIFN0YWNrVHJhY2U6OkN1cnJlbnRTdGFja1RyYWNlKCkKACUyZDogW3BjPSVwXSAAYXQgW2V2YWxdOgA6AGF0IFtldmFsXSAoACBbY29uc3RydWN0b3JdICgAICgAVXRmOFN0cmluZwAuLi8uLi9uYW4vbmFuLmgAbGVuIDw9IElOVF9NQVgAc3RyXyAhPSAwAAo9PT09IE5hdGl2ZSBTdGFjayBUcmFjZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKAE5hdGl2ZSBiYWNrdHJhY2UgZmFpbGVkLCBlcnJvciAATm8gZnJhbWVzIHRvIHByaW50CgAgWwBdAAo9PT09IEphdmFTY3JpcHQgRXhjZXB0aW9uIERldGFpbHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKAE5vIHN0YWNrIHRyYWNlIGF2YWlsYWJsZSBmcm9tIEV4Y2VwdGlvbjo6R2V0U3RhY2tUcmFjZSgpCgAKPT09PSBKYXZhU2NyaXB0IEhlYXAgYW5kIEdhcmJhZ2UgQ29sbGVjdG9yID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KAApIZWFwIHNwYWNlIG5hbWU6IAAKICAgIE1lbW9yeSBzaXplOiAAIGJ5dGVzLCBjb21taXR0ZWQgbWVtb3J5OiAAIGJ5dGVzCiAgICBDYXBhY2l0eTogACBieXRlcywgdXNlZDogACBieXRlcywgYXZhaWxhYmxlOiAAIGJ5dGVzAAoKVG90YWwgaGVhcCBtZW1vcnkgc2l6ZTogACBieXRlcwpUb3RhbCBoZWFwIGNvbW1pdHRlZCBtZW1vcnk6IAAgYnl0ZXMKVG90YWwgdXNlZCBoZWFwIG1lbW9yeTogACBieXRlcwpUb3RhbCBhdmFpbGFibGUgaGVhcCBtZW1vcnk6IAAgYnl0ZXMKCkhlYXAgbWVtb3J5IGxpbWl0OiAACj09PT0gUmVzb3VyY2UgVXNhZ2UgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgAKUHJvY2VzcyB0b3RhbCByZXNvdXJjZSB1c2FnZToAJWxkLiUwNmQACiAgVXNlciBtb2RlIENQVTogACBzZWNzAAogIEtlcm5lbCBtb2RlIENQVTogAAogIEF2ZXJhZ2UgQ1BVIENvbnN1bXB0aW9uIDogACUACiAgTWF4aW11bSByZXNpZGVudCBzZXQgc2l6ZTogACBieXRlcwogIFBhZ2UgZmF1bHRzOiAAIChJL08gcmVxdWlyZWQpIAAgKG5vIEkvTyByZXF1aXJlZCkACiAgRmlsZXN5c3RlbSBhY3Rpdml0eTogACByZWFkcyAAIHdyaXRlcwAKCkV2ZW50IGxvb3AgdGhyZWFkIHJlc291cmNlIHVzYWdlOgAlZC4lMDZkAAo9PT09IFN5c3RlbSBJbmZvcm1hdGlvbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoACkVudmlyb25tZW50IHZhcmlhYmxlcwoAICAAY29yZSBmaWxlIHNpemUgKGJsb2NrcykgICAgICAgAGRhdGEgc2VnIHNpemUgKGtieXRlcykgICAgICAgIABmaWxlIHNpemUgKGJsb2NrcykgICAgICAgICAgICAAbWF4IGxvY2tlZCBtZW1vcnkgKGJ5dGVzKSAgICAgAG1heCBtZW1vcnkgc2l6ZSAoa2J5dGVzKSAgICAgIABvcGVuIGZpbGVzICAgICAgICAgICAgICAgICAgICAAc3RhY2sgc2l6ZSAoYnl0ZXMpICAgICAgICAgICAgAGNwdSB0aW1lIChzZWNvbmRzKSAgICAgICAgICAgIABtYXggdXNlciBwcm9jZXNzZXMgICAgICAgICAgICAAdmlydHVhbCBtZW1vcnkgKGtieXRlcykgICAgICAgAApSZXNvdXJjZSBsaW1pdHMgICAgICAgICAgICAgICAgICAgICAgICBzb2Z0IGxpbWl0ICAgICAgaGFyZCBsaW1pdAoAICAgICAgIHVubGltaXRlZAAlMTZsbHUAICAgICAgIHVubGltaXRlZAoAJTE2bGx1CgAKTG9hZGVkIGxpYnJhcmllcwoAdwBub2RlLXJlcG9ydDogZmlsZW5hbWUgcGFyYW1ldGVyIGlzIHRvbyBsb25nAEphdmFTY3JpcHQgQVBJAFRyaWdnZXJSZXBvcnQAR2V0UmVwb3J0AC0tYWJvcnRfb25fdW5jYXVnaHRfZXhjZXB0aW9uAGV4Y2VwdGlvbgBPblVuY2F1Z2h0RXhjZXB0aW9uAGFib3J0LW9uLXVuY2F1Z2h0LWV4Y2VwdGlvbgBhYm9ydF9vbl91bmNhdWdodF9leGNlcHRpb24AJWQuJWQAClVuY2F1Z2h0IGV4Y2VwdGlvbiBhdDoKAE5PREVSRVBPUlRfVkVSQk9TRQBOT0RFUkVQT1JUX0VWRU5UUwBOT0RFUkVQT1JUX1NJR05BTABOT0RFUkVQT1JUX0ZJTEVOQU1FAE5PREVSRVBPUlRfRElSRUNUT1JZAHRyaWdnZXJSZXBvcnQAZ2V0UmVwb3J0AHNldEV2ZW50cwBzZXRTaWduYWwAc2V0RmlsZU5hbWUAc2V0RGlyZWN0b3J5AHNldFZlcmJvc2UAbm9kZS1yZXBvcnQ6IGluaXRpYWxpemF0aW9uIGNvbXBsZXRlLCBldmVudCBmbGFnczogJSN4IHNpZ25hbCBmbGFnOiAlI3gKAE5ldwAuLi8uLi9uYW4vbmFuX2ltcGxlbWVudGF0aW9uXzEyX2lubC5oAHZhbHVlLnNpemUoKSA8PSBJTlRfTUFYICYmICJzdHJpbmcgdG9vIGxvbmciAEZBVEFMIEVSUk9SOiAlcyAlcwoARkFUQUwgRVJST1I6ICVzCgBub2RlLXJlcG9ydDogaW5pdGlhbGl6YXRpb24gZmFpbGVkLCB1dl9zZW1faW5pdCgpIHJldHVybmVkICVkCgBub2RlLXJlcG9ydDogaW5pdGlhbGl6YXRpb24gZmFpbGVkLCB1dl9zZW1faW5pdCgpIHJldHVybmVkIGVycm9yCgBub2RlLXJlcG9ydDogaW5pdGlhbGl6YXRpb24gZmFpbGVkLCB1dl9tdXRleF9pbml0KCkgcmV0dXJuZWQgJWQKAG5vZGUtcmVwb3J0OiBpbml0aWFsaXphdGlvbiBmYWlsZWQsIHV2X211dGV4X2luaXQoKSByZXR1cm5lZCBlcnJvcgoAbm9kZS1yZXBvcnQ6IGluaXRpYWxpemF0aW9uIGZhaWxlZCwgdXZfYXN5bmNfaW5pdCgpIHJldHVybmVkICVkCgBub2RlLXJlcG9ydDogaW5pdGlhbGl6YXRpb24gZmFpbGVkLCB1dl9hc3luY19pbml0KCkgcmV0dXJuZWQgZXJyb3IKAG5vZGUtcmVwb3J0OiBTdGFydFdhdGNoZG9nVGhyZWFkIHB0aHJlYWRfY3JlYXRlKCkgZmFpbGVkOiAlcwoAbm9kZS1yZXBvcnQ6IHNpZ25hbCAlcyByZWNlaXZlZAoAbm9kZS1yZXBvcnQ6IFNpZ25hbER1bXBJbnRlcnJ1cHRDYWxsYmFjayBoYW5kbGluZyBzaWduYWwKAG5vZGUtcmVwb3J0OiBTaWduYWxEdW1wSW50ZXJydXB0Q2FsbGJhY2sgdHJpZ2dlcmluZyByZXBvcnQKAFNpZ25hbER1bXBJbnRlcnJ1cHRDYWxsYmFjawBub2RlLXJlcG9ydDogU2lnbmFsRHVtcEFzeW5jQ2FsbGJhY2sgaGFuZGxpbmcgc2lnbmFsCgBub2RlLXJlcG9ydDogU2lnbmFsRHVtcEFzeW5jQ2FsbGJhY2sgdHJpZ2dlcmluZyBOb2RlUmVwb3J0CgBTaWduYWxEdW1wQXN5bmNDYWxsYmFjawAuLi9zcmMvbW9kdWxlLmNjAG5vZGVyZXBvcnQAZmF0YWxlcnJvcgBzaWduYWwAYXBpY2FsbABVbnJlY29nbmlzZWQgYXJndW1lbnQgZm9yIG5vZGUtcmVwb3J0IGV2ZW50cyBvcHRpb246IABNaXNzaW5nIGFyZ3VtZW50IGZvciBub2RlLXJlcG9ydCBzaWduYWwgb3B0aW9uCgBTSUdVU1IyAFNJR1FVSVQAVW5yZWNvZ25pc2VkIGFyZ3VtZW50IGZvciBub2RlLXJlcG9ydCBzaWduYWwgb3B0aW9uOiAATWlzc2luZyBhcmd1bWVudCBmb3Igbm9kZS1yZXBvcnQgZmlsZW5hbWUgb3B0aW9uCgBTdXBwbGllZCBub2RlLXJlcG9ydCBmaWxlbmFtZSB0b28gbG9uZyAobWF4IAAgY2hhcmFjdGVycykKAE1pc3NpbmcgYXJndW1lbnQgZm9yIG5vZGUtcmVwb3J0IGRpcmVjdG9yeSBvcHRpb24KAFN1cHBsaWVkIG5vZGUtcmVwb3J0IGRpcmVjdG9yeSBwYXRoIHRvbyBsb25nIChtYXggAE1pc3NpbmcgYXJndW1lbnQgZm9yIG5vZGUtcmVwb3J0IHZlcmJvc2Ugc3dpdGNoIG9wdGlvbgoAeWVzAHRydWUAbm8AZmFsc2UAVW5yZWNvZ25pc2VkIGFyZ3VtZW50IGZvciBub2RlLXJlcG9ydCB2ZXJib3NlIHN3aXRjaCBvcHRpb246IABwcm9jZXNzAHZlcnNpb24ATm9kZS5qcyB2ZXJzaW9uOiAAdmVyc2lvbnMAbm9kZQBOb2RlLmpzIHZlcnNpb246IHYAOiAALAogACBjb25uZWN0ZWQgdG8gACAobm90IGNvbm5lY3RlZCkAZmlsZW5hbWU6IAB1bmtub3duAGFzeW5jAGNoZWNrAGZzX2V2ZW50AGZzX3BvbGwAaGFuZGxlAGlkbGUAcGlwZQBwb2xsAHByZXBhcmUAcGlkOiAAc3RyZWFtAHRjcAB0aW1lcgByZXBlYXQ6IAAsIHRpbWVvdXQgaW46IAAgbXMALCB0aW1lb3V0IGV4cGlyZWQ6IAAgbXMgYWdvAHR0eQB3aWR0aDogACwgaGVpZ2h0OiAAdWRwAHNpZ251bTogAGZpbGUAbWF4AHNlbmQgYnVmZmVyIHNpemU6IAAsIHJlY3YgYnVmZmVyIHNpemU6IAAsIHN0ZGluACwgc3Rkb3V0ACwgc3RkZXJyACwgZmlsZSBkZXNjcmlwdG9yOiAALCB3cml0ZSBxdWV1ZSBzaXplOiAALCByZWFkYWJsZQAsIHdyaXRhYmxlAFsAXSAgIAAlMDN1ACwAU0lHSFVQAFNJR0lOVABTSUdJTEwAU0lHVFJBUABTSUdBQlJUAFNJR0JVUwBTSUdGUEUAU0lHS0lMTABTSUdVU1IxAFNJR1NFR1YAU0lHUElQRQBTSUdBTFJNAFNJR1RFUk0AU0lHQ0hMRABTSUdDT05UAFNJR1NUT1AAU0lHVFNUUABTSUdUVElOAFNJR1RUT1UAU0lHVVJHAFNJR1hDUFUAU0lHWEZTWgBTSUdWVEFMUk0AU0lHUFJPRgBTSUdXSU5DSABTSUdJTwBTSUdJTkZPAFNJR1NZUwAAAQAAABwAAAAGAAAANAAAAAAAAAA0AAAAAgAAANFYBQFhAQMBAAAAAQEAAQEhAAIBEQsEATASAABMAAAATAAAANGMAAAAAAAATAAAAAMAAAAMAC4AxAAAAAAAAADQHwABwCAAADAiAAEgIwACQCMABKAlAAXgJgAAICgAATApAABALgACkC4AALA2AAHANwAFoDgABGA5AAAAPwABgD8ABOBAAAGAQQAAQEMAAUBGAAQwRwACAEkAAZBOAAKwTgABUFAAA9BQAALgUgADEFMAAsBTAADgVQAD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AAAAAHiuAAAAAAAAmK4AAAAAAACgrgAAAAAAANquAAAAAAAAr64AAAAAAAC3rgAAAAAAAL+uAAAAAAAAya4AAAAAAADRrgAAAAAAAOCuAAAAAAAAUK4AAAAAAACxqgAAAAAAAAAAAAAAAAAAwJgAAAAAAADDmAAAAAAAAMaYAAAAAAAAz5gAAAAAAADVmAAAAAAAAN6YAAAAAAAACAAAAB8AAABIAAAAAAAAAAAAAAAAAAAAFaoAAAAAAAAwWwAAAAAAAAAAAAAAAAAAJqoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAESEQcChYRWBfRGBbRFJDVkxXQnAIcAhSQYAICHAgUkNWTFJCUkNwCHAIYCBBVkNSQVEAAAAAAAARQF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMUV2AFFxGJBAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgCAkA6g2AOQQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAgJD8/////////wGg2AOQQF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNHN5bmNFdgCAcJBAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1aW1idWVFUktOU182bG9jYWxlRQCA2P//////////AZBAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1dWZsb3dFdgCA2Pz/////////AaDYA5BAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2V0YnVmRVBjbACAwP//////////AZBAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2eHNnZXRuRVBjbACAwPz/////////AaDYA5BAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2eHNwdXRuRVBLY2wAgLj8/////////wGg2AOQQF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFOXNob3dtYW55Y0V2AIDw+/////////8BoNgDkEBfX1pOU3QzX18xNGNlcnJFAICQ7f////////8BkEBfX1pOU3QzX18xNGNvdXRFAJBAX19aTlN0M19fMTVjdHlwZUljRTJpZEUAkEBfX1pOU3QzX18xN2NvZGVjdnRJY2MxMV9fbWJzdGF0ZV90RTJpZEUAkEBfX1pUVk5TdDNfXzE5YmFzaWNfaW9zSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAIBAkEBfX1pUdjBfbjI0X05TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQwRXYAgNANoNgDkEBfX1pUdjBfbjI0X05TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAgJD8/////////wGg2AOQQF9fWmRhUHYAgOj0/////////wGg+P//////////AZBAX19aZGxQdgCg+P//////////AZBAX19abmFtAKD4//////////8BkEBfX1pud20AoPj//////////wGQEkBfX19zdGFja19jaGtfZ3VhcmQAgMj5/////////wGQQF9fX3N0ZGVycnAAkEBfX19zdGRvdXRwAJBAX2Vudmlyb24AkEBkeWxkX3N0dWJfYmluZGVyAIDY/v////////8BkAAAAABAX19aTjEwbm9kZXJlcG9ydDIyUmVwb3J0U2lnbmFsVGhyZWFkTWFpbkVQdgBRcRCQQF9fWmRhUHYAgIgHoPj//////////wGQQF9fWmRsUHYAoPj//////////wGQQF9fWm5hbQCg+P//////////AZBAX19abndtAKD4//////////8BkAAAcagBEkBfX05TR2V0QXJnYwCQAHGwARJAX19OU0dldEFyZ3YAkABxuAE+QF9fWk4ydjgxMFN0YWNrVHJhY2UxN0N1cnJlbnRTdGFja1RyYWNlRVBOU183SXNvbGF0ZUVpTlMwXzE3U3RhY2tUcmFjZU9wdGlvbnNFAJAAccABPkBfX1pOMnY4MTFIYW5kbGVTY29wZTEyQ3JlYXRlSGFuZGxlRVBOU184aW50ZXJuYWw3SXNvbGF0ZUVtAJAAccgBPkBfX1pOMnY4MTFIYW5kbGVTY29wZUMxRVBOU183SXNvbGF0ZUUAkABx0AE+QF9fWk4ydjgxMUhhbmRsZVNjb3BlRDFFdgCQAHHYAT5AX19aTjJ2ODExSGFuZGxlU2NvcGVEMkV2AJAAceABPkBfX1pOMnY4MTRIZWFwU3RhdGlzdGljc0MxRXYAkABx6AE+QF9fWk4ydjgxNE9iamVjdFRlbXBsYXRlMTFOZXdJbnN0YW5jZUVOU181TG9jYWxJTlNfN0NvbnRleHRFRUUAkABx8AE+QF9fWk4ydjgxNE9iamVjdFRlbXBsYXRlMjFTZXRJbnRlcm5hbEZpZWxkQ291bnRFaQCQAHH4AT5AX19aTjJ2ODE0T2JqZWN0VGVtcGxhdGUzTmV3RVBOU183SXNvbGF0ZUVOU181TG9jYWxJTlNfMTZGdW5jdGlvblRlbXBsYXRlRUVFAJAAcYACPkBfX1pOMnY4MTZGdW5jdGlvblRlbXBsYXRlMTFHZXRGdW5jdGlvbkVOU181TG9jYWxJTlNfN0NvbnRleHRFRUUAkABxiAI+QF9fWk4ydjgxNkZ1bmN0aW9uVGVtcGxhdGUxMlNldENsYXNzTmFtZUVOU181TG9jYWxJTlNfNlN0cmluZ0VFRQCQAHGQAj5AX19aTjJ2ODE2RnVuY3Rpb25UZW1wbGF0ZTNOZXdFUE5TXzdJc29sYXRlRVBGdlJLTlNfMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOU181VmFsdWVFRUVFTlNfNUxvY2FsSVM0X0VFTlNBX0lOU185U2lnbmF0dXJlRUVFaU5TXzE5Q29uc3RydWN0b3JCZWhhdmlvckVOU18xNFNpZGVFZmZlY3RUeXBlRQCQAHGYAj5AX19aTjJ2ODE5SGVhcFNwYWNlU3RhdGlzdGljc0MxRXYAkABxoAI+QF9fWk4ydjgyMEVzY2FwYWJsZUhhbmRsZVNjb3BlNkVzY2FwZUVQbQCQAHGoAj5AX19aTjJ2ODIwRXNjYXBhYmxlSGFuZGxlU2NvcGVDMUVQTlNfN0lzb2xhdGVFAJAAcbACPkBfX1pOMnY4MlY4MTBHZXRWZXJzaW9uRXYAkABxuAI+QF9fWk4ydjgyVjgxMlRvTG9jYWxFbXB0eUV2AJAAccACPkBfX1pOMnY4MlY4MThTZXRGbGFnc0Zyb21TdHJpbmdFUEtjaQCQAHHIAj5AX19aTjJ2ODZPYmplY3QxNlNldEludGVybmFsRmllbGRFaU5TXzVMb2NhbElOU181VmFsdWVFRUUAkABx0AI+QF9fWk4ydjg2T2JqZWN0MTlHZXRPd25Qcm9wZXJ0eU5hbWVzRU5TXzVMb2NhbElOU183Q29udGV4dEVFRQCQAHHYAj5AX19aTjJ2ODZPYmplY3QyMFNsb3dHZXRJbnRlcm5hbEZpZWxkRWkAkABx4AI+QF9fWk4ydjg2T2JqZWN0M0dldEVOU181TG9jYWxJTlNfN0NvbnRleHRFRUVOUzFfSU5TXzVWYWx1ZUVFRQCQAHHoAj5AX19aTjJ2ODZPYmplY3QzR2V0RU5TXzVMb2NhbElOU183Q29udGV4dEVFRWoAkABx8AI+QF9fWk4ydjg2T2JqZWN0M1NldEVOU181TG9jYWxJTlNfN0NvbnRleHRFRUVOUzFfSU5TXzVWYWx1ZUVFRVM1XwCQAHH4Aj5AX19aTjJ2ODZTdHJpbmcxMU5ld0Zyb21VdGY4RVBOU183SXNvbGF0ZUVQS2NOU18xM05ld1N0cmluZ1R5cGVFaQCQAHGAAz5AX19aTjJ2ODdDb250ZXh0Nkdsb2JhbEV2AJAAcYgDPkBfX1pOMnY4N0lzb2xhdGUxMEdldEN1cnJlbnRFdgCQAHGQAz5AX19aTjJ2ODdJc29sYXRlMTRHZXRTdGFja1NhbXBsZUVSS05TXzEzUmVnaXN0ZXJTdGF0ZUVQUHZtUE5TXzEwU2FtcGxlSW5mb0UAkABxmAM+QF9fWk4ydjg3SXNvbGF0ZTE0VGhyb3dFeGNlcHRpb25FTlNfNUxvY2FsSU5TXzVWYWx1ZUVFRQCQAHGgAz5AX19aTjJ2ODdJc29sYXRlMTZSZXF1ZXN0SW50ZXJydXB0RVBGdlBTMF9QdkVTMl8AkABxqAM+QF9fWk4ydjg3SXNvbGF0ZTE3R2V0Q3VycmVudENvbnRleHRFdgCQAHGwAz5AX19aTjJ2ODdJc29sYXRlMTdHZXRIZWFwU3RhdGlzdGljc0VQTlNfMTRIZWFwU3RhdGlzdGljc0UAkABxuAM+QF9fWk4ydjg3SXNvbGF0ZTE4TnVtYmVyT2ZIZWFwU3BhY2VzRXYAkABxwAM+QF9fWk4ydjg3SXNvbGF0ZTIwU2V0RmF0YWxFcnJvckhhbmRsZXJFUEZ2UEtjUzJfRQCQAHHIAz5AX19aTjJ2ODdJc29sYXRlMjJHZXRIZWFwU3BhY2VTdGF0aXN0aWNzRVBOU18xOUhlYXBTcGFjZVN0YXRpc3RpY3NFbQCQAHHQAz5AX19aTjJ2ODdJc29sYXRlMzVTZXRBYm9ydE9uVW5jYXVnaHRFeGNlcHRpb25DYWxsYmFja0VQRmJQUzBfRQCQAHHYAz5AX19aTjJ2ODdJc29sYXRlNDFTZXRDYXB0dXJlU3RhY2tUcmFjZUZvclVuY2F1Z2h0RXhjZXB0aW9uc0ViaU5TXzEwU3RhY2tUcmFjZTE3U3RhY2tUcmFjZU9wdGlvbnNFAJAAceADPkBfX1pOMnY4N01lc3NhZ2UyMlByaW50Q3VycmVudFN0YWNrVHJhY2VFUE5TXzdJc29sYXRlRVA3X19zRklMRQCQAHHoAz5AX19aTjJ2ODhFeHRlcm5hbDNOZXdFUE5TXzdJc29sYXRlRVB2AJAAcfADPkBfX1pOMnY4OFRyeUNhdGNoQzFFUE5TXzdJc29sYXRlRQCQAHH4Az5AX19aTjJ2ODhUcnlDYXRjaEQxRXYAkABxgAQ+QF9fWk4ydjg4aW50ZXJuYWwzNUlzb2xhdGVGcm9tTmV2ZXJSZWFkT25seVNwYWNlT2JqZWN0RW0AkABxiAQ+QF9fWk4ydjg5RXhjZXB0aW9uMTNDcmVhdGVNZXNzYWdlRVBOU183SXNvbGF0ZUVOU181TG9jYWxJTlNfNVZhbHVlRUVFAJAAcZAEPkBfX1pOMnY4OUV4Y2VwdGlvbjEzR2V0U3RhY2tUcmFjZUVOU181TG9jYWxJTlNfNVZhbHVlRUVFAJAAcZgEPkBfX1pOMnY4OUV4Y2VwdGlvbjVFcnJvckVOU181TG9jYWxJTlNfNlN0cmluZ0VFRQCQAHGgBD5AX19aTksydjgxMFN0YWNrRnJhbWUxMUdldFNjcmlwdElkRXYAkABxqAQ+QF9fWk5LMnY4MTBTdGFja0ZyYW1lMTNHZXRMaW5lTnVtYmVyRXYAkABxsAQ+QF9fWk5LMnY4MTBTdGFja0ZyYW1lMTNHZXRTY3JpcHROYW1lRXYAkABxuAQ+QF9fWk5LMnY4MTBTdGFja0ZyYW1lMTNJc0NvbnN0cnVjdG9yRXYAkABxwAQ+QF9fWk5LMnY4MTBTdGFja0ZyYW1lMTVHZXRGdW5jdGlvbk5hbWVFdgCQAHHIBD5AX19aTksydjgxMFN0YWNrRnJhbWU2SXNFdmFsRXYAkABx0AQ+QF9fWk5LMnY4MTBTdGFja0ZyYW1lOUdldENvbHVtbkV2AJAAcdgEPkBfX1pOSzJ2ODEwU3RhY2tUcmFjZTEzR2V0RnJhbWVDb3VudEV2AJAAceAEPkBfX1pOSzJ2ODEwU3RhY2tUcmFjZThHZXRGcmFtZUVQTlNfN0lzb2xhdGVFagCQAHHoBD5AX19aTksydjg1QXJyYXk2TGVuZ3RoRXYAkABx8AQ+QF9fWk5LMnY4NVZhbHVlMTNJc05hdGl2ZUVycm9yRXYAkABx+AQ+QF9fWk5LMnY4NVZhbHVlOElzT2JqZWN0RXYAkABxgAU+QF9fWk5LMnY4NVZhbHVlOFRvU3RyaW5nRU5TXzVMb2NhbElOU183Q29udGV4dEVFRQCQAHGIBT5AX19aTksydjg2U3RyaW5nNkxlbmd0aEV2AJAAcZAFPkBfX1pOSzJ2ODZTdHJpbmc5V3JpdGVVdGY4RVBOU183SXNvbGF0ZUVQY2lQaWkAkABxmAU+QF9fWk5LMnY4N01lc3NhZ2UzR2V0RXYAkABxoAU+QF9fWk5LMnY4OEV4dGVybmFsNVZhbHVlRXYAkABxqAURQF9fWk5LU3QzX18xMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFN2NvbXBhcmVFbW1QS2NtAJAAcbAFEUBfX1pOS1N0M19fMTIxX19iYXNpY19zdHJpbmdfY29tbW9uSUxiMUVFMjBfX3Rocm93X2xlbmd0aF9lcnJvckV2AJAAcbgFEUBfX1pOS1N0M19fMTZsb2NhbGU5aGFzX2ZhY2V0RVJOUzBfMmlkRQCQAHHABRFAX19aTktTdDNfXzE2bG9jYWxlOXVzZV9mYWNldEVSTlMwXzJpZEUAkABxyAURQF9fWk5LU3QzX18xOGlvc19iYXNlNmdldGxvY0V2AJAAcdAFEUBfX1pOU3QzX18xMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFNmFwcGVuZEVQS2MAkABx2AURQF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU2YXBwZW5kRVBLY20AkABx4AURQF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU2YXNzaWduRVBLYwCQAHHoBRFAX19aTlN0M19fMTEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRTZyZXNpemVFbWMAkABx8AURQF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU5cHVzaF9iYWNrRWMAkABx+AURQF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVDMUVSS1M1XwCQAHGABhFAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFM3B1dEVjAJAAcYgGEUBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1Zmx1c2hFdgCQAHGQBhFAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNnNlbnRyeUMxRVJTM18AkABxmAYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRTZzZW50cnlEMUV2AJAAcaAGEUBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMkV2AJAAcagGEUBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVsc0VQS3YAkABxsAYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRWQAkABxuAYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRWkAkABxwAYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRWwAkABxyAYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRW0AkABx0AYRQF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRXkAkABx2AYRQF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFQzJFdgCQAHHgBhFAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMkV2AJAAcegGEUBfX1pOU3QzX18xNmxvY2FsZUMxRVJLUzBfAJAAcfAGEUBfX1pOU3QzX18xNmxvY2FsZUQxRXYAkABx+AYRQF9fWk5TdDNfXzE4aW9zX2Jhc2U0aW5pdEVQdgCQAHGABxFAX19aTlN0M19fMThpb3NfYmFzZTVjbGVhckVqAJAAcYgHEUBfX1pOU3QzX18xOWJhc2ljX2lvc0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVFN2NvcHlmbXRFUktTM18AkABxkAcRQF9fWk5TdDNfXzE5YmFzaWNfaW9zSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMUV2AJAAcZgHEUBfX1pOU3QzX18xOWJhc2ljX2lvc0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDJFdgCQAHHABxJAX19fYXNzZXJ0X3J0bgCQAHHIBxJAX19fYnplcm8AkABx0AcSQF9fX2N4YV9hdGV4aXQAkABx2AcRQF9fX2N4YV9kZW1hbmdsZQCQAHHgBxJAX19fZXJyb3IAkABx6AcSQF9fX3N0YWNrX2Noa19mYWlsAJAAcfAHEkBfX2R5bGRfZ2V0X2ltYWdlX25hbWUAkABx+AcSQF9hYm9ydACQAHGACBJAX2JhY2t0cmFjZQCQAHGICBJAX2RpZmZ0aW1lAJAAcZAIEkBfZGxhZGRyAJAAcZgIEkBfZGxzeW0AkABxoAgSQF9leGl0AJAAcagIEkBfZmNsb3NlAJAAcbAIEkBfZmZsdXNoAJAAcbgIEkBfZmdldHMAkABxwAgSQF9mb3BlbgCQAHHICBJAX2ZwcmludGYAkABx0AgSQF9mcmVhZACQAHHYCBJAX2ZyZWUAkABx4AgSQF9mc2Vla28AkABx6AgSQF9mdGVsbG8AkABx8AgSQF9md3JpdGUAkABx+AgSQF9nZXRlZ2lkAJAAcYAJEkBfZ2V0ZW52AJAAcYgJEkBfZ2V0ZXVpZACQAHGQCRJAX2dldGdpZACQAHGYCRJAX2dldHBpZACQAHGgCRJAX2dldHJsaW1pdACQAHGoCRJAX2dldHJ1c2FnZQCQAHGwCRJAX2dldHRpbWVvZmRheQCQAHG4CRJAX2dldHVpZACQAHHACRJAX2xvY2FsdGltZV9yAJAAccgJEkBfbWFsbG9jAJAAcdAJEkBfbWVtY2hyAJAAcdgJEkBfbWVtY21wAJAAceAJEkBfbWVtY3B5AJAAcegJEkBfbWVtbW92ZQCQAHHwCRJAX21lbXNldACQAHH4CT5AX25vZGVfbW9kdWxlX3JlZ2lzdGVyAJAAcYAKEkBfcHRocmVhZF9hdHRyX2Rlc3Ryb3kAkABxiAoSQF9wdGhyZWFkX2F0dHJfaW5pdACQAHGQChJAX3B0aHJlYWRfYXR0cl9zZXRkZXRhY2hzdGF0ZQCQAHGYChJAX3B0aHJlYWRfYXR0cl9zZXRzdGFja3NpemUAkABxoAoSQF9wdGhyZWFkX2NyZWF0ZQCQAHGoChJAX3B0aHJlYWRfbWFjaF90aHJlYWRfbnAAkABxsAoSQF9wdGhyZWFkX3NlbGYAkABxuAoSQF9wdGhyZWFkX3NpZ21hc2sAkABxwAoSQF9yYWlzZQCQAHHIChJAX3Jld2luZACQAHHQChJAX3NpZ2FjdGlvbgCQAHHYChJAX3NucHJpbnRmAJAAceAKEkBfc3NjYW5mAJAAcegKEkBfc3RyY21wAJAAcfAKEkBfc3RyZXJyb3IAkABx+AoSQF9zdHJsZW4AkABxgAsSQF9zdHJuY21wAJAAcYgLEkBfdGhyZWFkX2luZm8AkABxkAsSQF90aW1lAJAAcZgLEkBfdG1wZmlsZQCQAHGgCxJAX3VuYW1lAJAAcagLPkBfdXZfYXN5bmNfaW5pdACQAHGwCz5AX3V2X2FzeW5jX3NlbmQAkABxuAs+QF91dl9kZWZhdWx0X2xvb3AAkABxwAs+QF91dl9maWxlbm8AkABxyAs+QF91dl9mc19ldmVudF9nZXRwYXRoAJAAcdALPkBfdXZfZnNfcG9sbF9nZXRwYXRoAJAAcdgLPkBfdXZfZ2V0bmFtZWluZm8AkABx4As+QF91dl9oYXNfcmVmAJAAcegLPkBfdXZfaW5ldF9udG9wAJAAcfALPkBfdXZfaXNfYWN0aXZlAJAAcfgLPkBfdXZfaXNfcmVhZGFibGUAkABxgAw+QF91dl9pc193cml0YWJsZQCQAHGIDD5AX3V2X211dGV4X2luaXQAkABxkAw+QF91dl9tdXRleF9sb2NrAJAAcZgMPkBfdXZfbXV0ZXhfdW5sb2NrAJAAcaAMPkBfdXZfbm93AJAAcagMPkBfdXZfcmVjdl9idWZmZXJfc2l6ZQCQAHGwDD5AX3V2X3NlbV9pbml0AJAAcbgMPkBfdXZfc2VtX3Bvc3QAkABxwAw+QF91dl9zZW1fd2FpdACQAHHIDD5AX3V2X3NlbmRfYnVmZmVyX3NpemUAkABx0Aw+QF91dl90Y3BfZ2V0cGVlcm5hbWUAkABx2Aw+QF91dl90Y3BfZ2V0c29ja25hbWUAkABx4Aw+QF91dl90aW1lcl9nZXRfcmVwZWF0AJAAcegMPkBfdXZfdHR5X2dldF93aW5zaXplAJAAcfAMPkBfdXZfdWRwX2dldHNvY2tuYW1lAJAAcfgMPkBfdXZfdW5yZWYAkABxgA0+QF91dl93YWxrAJAAAAAAAAAAAAABX19aTjEwbm9kZXJlcG9ydAAUAAQxAEg5AL4DMgDyCDMwUHJvY2Vzc05vZGVSZXBvcnRWZXJib3NlU3dpdGNoRVBLYwCjCgAKN1RyaWdnZXJOb2RlUmVwb3J0RVBOMnY4N0lzb2xhdGVFTlNfOUR1bXBFdmVudEVQS2NTNV9QY05TMF8xME1heWJlTG9jYWxJTlMwXzVWYWx1ZUVFRQDvATMA9AE5T25VbmNhdWdodEV4Y2VwdGlvbkVQTjJ2ODdJc29sYXRlRQCQBTFTAJwFMgD+BTAAggc2AKkKNADtCjVyZXBvcnQAlQw4AL0NAwCwJAAAAkdldE5vZGVSZXBvcnRFUE4ydjg3SXNvbGF0ZUVOU185RHVtcEV2ZW50RVBLY1M1X05TMF8xME1heWJlTG9jYWxJTlMwXzVWYWx1ZUVFRVJOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzlfMTFjaGFyX3RyYWl0c0ljRUVFRQCzA1RyaWdnZXJSZXBvcnRFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQC4AwMA8GUABACQlwEAAARHZXRSZXBvcnRFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQCYBFNldACeBHY4X3N0YXRlc0UApQ1sb2FkX3RpbWVFAPcNBACAnQEAAAJFdmVudHNFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQCKBVNpZ25hbEVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAJYFBACwowEABACwpwEABADwsAEAAAJldACyBWlnbm9TdHJpbmdFaQCZDQACRmlsZU5hbWVFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQD4BUxvYWRUaW1lRXYA5woEAICzAQAAAlNldERpcmVjdG9yeUVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAPwGV3JpdGVJbnRlZ2VyRVJOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzBfMTFjaGFyX3RyYWl0c0ljRUVFRW0Anw0EAJC0AQAABFNldFZlcmJvc2VFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQDmCEluaXRpYWxpemVFTjJ2ODVMb2NhbElOUzBfNk9iamVjdEVFRQDsCHJlcG9ydFBhdGhFUDExdXZfaGFuZGxlX3NSTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlMyXzExY2hhcl90cmFpdHNJY0VFTlMyXzlhbGxvY2F0b3JJY0VFRUUAjQ13YWxrSGFuZGxlRVAxMXV2X2hhbmRsZV9zUHYAkw0EAKC1AQAEALC2AQAABDJSZXBvcnRTaWduYWxUaHJlYWRNYWluRVB2AOkJM1Byb2Nlc3NOb2RlUmVwb3J0AO8JNVByb2Nlc3NOb2RlUmVwb3J0RmlsZU5hbWVFUEtjAJcKNlByb2Nlc3NOb2RlUmVwb3J0RGlyZWN0b3J5RVBLYwCdCgQE4M4BAAACRXZlbnRzRVBLYwCLClNpZ25hbEVQS2MAkQoEAIDgAQAEAPDiAQAEAMDkAQAEAODlAQAEAIDnAQAAAlNldFZlcnNpb25TdHJpbmdFUE4ydjg3SXNvbGF0ZUUA4QpyZXBvcnRfZGlyZWN0b3J5RQCxDQQAgOkBAAQA8PoBAAADU2V0Q29tbWFuZExpbmVFdgCJDHJlcG9ydEVuZHBvaW50RVAxMXV2X2hhbmRsZV9zUDhzb2NrYWRkclBLY1JOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOUzZfMTFjaGFyX3RyYWl0c0ljRUVOUzZfOWFsbG9jYXRvckljRUVFRQCPDHZlcnNpb25fc3RyaW5nRQC3DQQAsPsBAAQAkP0BAAACRW5kcG9pbnRzRVAxMXV2X2hhbmRsZV9zUk5TdDNfXzExOWJhc2ljX29zdHJpbmdzdHJlYW1JY05TMl8xMWNoYXJfdHJhaXRzSWNFRU5TMl85YWxsb2NhdG9ySWNFRUVFAIcNX2ZpbGVuYW1lRQCrDQQAkIACAAQAsIICAAQAwIUCAAQA8JYCAAQAoJcCAAQAwPUCAAQAwPYCAAQAkPcCAAQAoP8CAAACY29tbWFuZGxp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ZU5hbWVFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQBfX1pOMTBub2RlcmVwb3J0MTFTZXRMb2FkVGltZUV2AF9fWk4xMG5vZGVyZXBvcnQxMVNpZ25vU3RyaW5nRWkAX19aTjEwbm9kZXJlcG9ydDEyU2V0RGlyZWN0b3J5RVJLTjNOYW4yMEZ1bmN0aW9uQ2FsbGJhY2tJbmZvSU4ydjg1VmFsdWVFRUUAX19aTjEwbm9kZXJlcG9ydDEyV3JpdGVJbnRlZ2VyRVJOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzBfMTFjaGFyX3RyYWl0c0ljRUVFRW0AX19aTjEwbm9kZXJlcG9ydDEzR2V0Tm9kZVJlcG9ydEVQTjJ2ODdJc29sYXRlRU5TXzlEdW1wRXZlbnRFUEtjUzVfTlMwXzEwTWF5YmVMb2NhbElOUzBfNVZhbHVlRUVFUk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TOV8xMWNoYXJfdHJhaXRzSWNFRUVFAF9fWk4xMG5vZGVyZXBvcnQxM1RyaWdnZXJSZXBvcnRFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQBfX1pOMTBub2RlcmVwb3J0MTRTZXRDb21tYW5kTGluZUV2AF9fWk4xMG5vZGVyZXBvcnQxNHJlcG9ydEVuZHBvaW50RVAxMXV2X2hhbmRsZV9zUDhzb2NrYWRkclBLY1JOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOUzZfMTFjaGFyX3RyYWl0c0ljRUVOUzZfOWFsbG9jYXRvckljRUVFRQBfX1pOMTBub2RlcmVwb3J0MTR2ZXJzaW9uX3N0cmluZ0UAX19aTjEwbm9kZXJlcG9ydDE1cmVwb3J0RW5kcG9pbnRzRVAxMXV2X2hhbmRsZV9zUk5TdDNfXzExOWJhc2ljX29zdHJpbmdzdHJlYW1JY05TMl8xMWNoYXJfdHJhaXRzSWNFRU5TMl85YWxsb2NhdG9ySWNFRUVFAF9fWk4xMG5vZGVyZXBvcnQxNXJlcG9ydF9maWxlbmFtZUUAX19aTjEwbm9kZXJlcG9ydDE2U2V0VmVyc2lvblN0cmluZ0VQTjJ2ODdJc29sYXRlRQBfX1pOMTBub2RlcmVwb3J0MTZyZXBvcnRfZGlyZWN0b3J5RQBfX1pOMTBub2RlcmVwb3J0MTdUcmlnZ2VyTm9kZVJlcG9ydEVQTjJ2ODdJc29sYXRlRU5TXzlEdW1wRXZlbnRFUEtjUzVfUGNOUzBfMTBNYXliZUxvY2FsSU5TMF81VmFsdWVFRUUAX19aTjEwbm9kZXJlcG9ydDE4Y29tbWFuZGxpbmVfc3RyaW5nRQBfX1pOMTBub2RlcmVwb3J0MThsb2FkdGltZV90bV9zdHJ1Y3RFAF9fWk4xMG5vZGVyZXBvcnQxOU9uVW5jYXVnaHRFeGNlcHRpb25FUE4ydjg3SXNvbGF0ZUUAX19aTjEwbm9kZXJlcG9ydDIyUmVwb3J0U2lnbmFsVGhyZWFkTWFpbkVQdgBfX1pOMTBub2RlcmVwb3J0MjNQcm9jZXNzTm9kZVJlcG9ydEV2ZW50c0VQS2MAX19aTjEwbm9kZXJlcG9ydDIzUHJvY2Vzc05vZGVSZXBvcnRTaWduYWxFUEtjAF9fWk4xMG5vZGVyZXBvcnQyNVByb2Nlc3NOb2RlUmVwb3J0RmlsZU5hbWVFUEtjAF9fWk4xMG5vZGVyZXBvcnQyNlByb2Nlc3NOb2RlUmVwb3J0RGlyZWN0b3J5RVBLYwBfX1pOMTBub2RlcmVwb3J0MzBQcm9jZXNzTm9kZVJlcG9ydFZlcmJvc2VTd2l0Y2hFUEtjAF9fWk4xMG5vZGVyZXBvcnQ5R2V0UmVwb3J0RVJLTjNOYW4yMEZ1bmN0aW9uQ2FsbGJhY2tJbmZvSU4ydjg1VmFsdWVFRUUAX19aTjEwbm9kZXJlcG9ydDlTZXRFdmVudHNFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQBfX1pOMTBub2RlcmVwb3J0OVNldFNpZ25hbEVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAF9fWk4xMG5vZGVyZXBvcnQ5bG9hZF90aW1lRQBfX1pOMTBub2RlcmVwb3J0OXY4X3N0YXRlc0UAX19OU0dldEFyZ2MAX19OU0dldEFyZ3YAX19aTjJ2ODEwU3RhY2tUcmFjZTE3Q3VycmVudFN0YWNrVHJhY2VFUE5TXzdJc29sYXRlRWlOUzBfMTdTdGFja1RyYWNlT3B0aW9uc0UAX19aTjJ2ODExSGFuZGxlU2NvcGUxMkNyZWF0ZUhhbmRsZUVQTlNfOGludGVybmFsN0lzb2xhdGVFbQBfX1pOMnY4MTFIYW5kbGVTY29wZUMxRVBOU183SXNvbGF0ZUUAX19aTjJ2ODExSGFuZGxlU2NvcGVEMUV2AF9fWk4ydjgxMUhhbmRsZVNjb3BlRDJFdgBfX1pOMnY4MTRIZWFwU3RhdGlzdGljc0MxRXYAX19aTjJ2ODE0T2JqZWN0VGVtcGxhdGUxMU5ld0luc3RhbmNlRU5TXzVMb2NhbElOU183Q29udGV4dEVFRQBfX1pOMnY4MTRPYmplY3RUZW1wbGF0ZTIxU2V0SW50ZXJuYWxGaWVsZENvdW50RWkAX19aTjJ2ODE0T2JqZWN0VGVtcGxhdGUzTmV3RVBOU183SXNvbGF0ZUVOU181TG9jYWxJTlNfMTZGdW5jdGlvblRlbXBsYXRlRUVFAF9fWk4ydjgxNkZ1bmN0aW9uVGVtcGxhdGUxMUdldEZ1bmN0aW9uRU5TXzVMb2NhbElOU183Q29udGV4dEVFRQBfX1pOMnY4MTZGdW5jdGlvblRlbXBsYXRlMTJTZXRDbGFzc05hbWVFTlNfNUxvY2FsSU5TXzZTdHJpbmdFRUUAX19aTjJ2ODE2RnVuY3Rpb25UZW1wbGF0ZTNOZXdFUE5TXzdJc29sYXRlRVBGdlJLTlNfMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOU181VmFsdWVFRUVFTlNfNUxvY2FsSVM0X0VFTlNBX0lOU185U2lnbmF0dXJlRUVFaU5TXzE5Q29uc3RydWN0b3JCZWhhdmlvckVOU18xNFNpZGVFZmZlY3RUeXBlRQBfX1pOMnY4MTlIZWFwU3BhY2VTdGF0aXN0aWNzQzFFdgBfX1pOMnY4MjBFc2NhcGFibGVIYW5kbGVTY29wZTZFc2NhcGVFUG0AX19aTjJ2ODIwRXNjYXBhYmxlSGFuZGxlU2NvcGVDMUVQTlNfN0lzb2xhdGVFAF9fWk4ydjgyVjgxMEdldFZlcnNpb25FdgBfX1pOMnY4MlY4MTJUb0xvY2FsRW1wdHlFdgBfX1pOMnY4MlY4MThTZXRGbGFnc0Zyb21TdHJpbmdFUEtjaQBfX1pOMnY4Nk9iamVjdDE2U2V0SW50ZXJuYWxGaWVsZEVpTlNfNUxvY2FsSU5TXzVWYWx1ZUVFRQBfX1pOMnY4Nk9iamVjdDE5R2V0T3duUHJvcGVydHlOYW1lc0VOU181TG9jYWxJTlNfN0NvbnRleHRFRUUAX19aTjJ2ODZPYmplY3QyMFNsb3dHZXRJbnRlcm5hbEZpZWxkRWkAX19aTjJ2ODZPYmplY3QzR2V0RU5TXzVMb2NhbElOU183Q29udGV4dEVFRU5TMV9JTlNfNVZhbHVlRUVFAF9fWk4ydjg2T2JqZWN0M0dldEVOU181TG9jYWxJTlNfN0NvbnRleHRFRUVqAF9fWk4ydjg2T2JqZWN0M1NldEVOU181TG9jYWxJTlNfN0NvbnRleHRFRUVOUzFfSU5TXzVWYWx1ZUVFRVM1XwBfX1pOMnY4NlN0cmluZzExTmV3RnJvbVV0ZjhFUE5TXzdJc29sYXRlRVBLY05TXzEzTmV3U3RyaW5nVHlwZUVpAF9fWk4ydjg3Q29udGV4dDZHbG9iYWxFdgBfX1pOMnY4N0lzb2xhdGUxMEdldEN1cnJlbnRFdgBfX1pOMnY4N0lzb2xhdGUxNEdldFN0YWNrU2FtcGxlRVJLTlNfMTNSZWdpc3RlclN0YXRlRVBQdm1QTlNfMTBTYW1wbGVJbmZvRQBfX1pOMnY4N0lzb2xhdGUxNFRocm93RXhjZXB0aW9uRU5TXzVMb2NhbElOU181VmFsdWVFRUUAX19aTjJ2ODdJc29sYXRlMTZSZXF1ZXN0SW50ZXJydXB0RVBGdlBTMF9QdkVTMl8AX19aTjJ2ODdJc29sYXRlMTdHZXRDdXJyZW50Q29udGV4dEV2AF9fWk4ydjg3SXNvbGF0ZTE3R2V0SGVhcFN0YXRpc3RpY3NFUE5TXzE0SGVhcFN0YXRpc3RpY3NFAF9fWk4ydjg3SXNvbGF0ZTE4TnVtYmVyT2ZIZWFwU3BhY2VzRXYAX19aTjJ2ODdJc29sYXRlMjBTZXRGYXRhbEVycm9ySGFuZGxlckVQRnZQS2NTMl9FAF9fWk4ydjg3SXNvbGF0ZTIyR2V0SGVhcFNwYWNlU3RhdGlzdGljc0VQTlNfMTlIZWFwU3BhY2VTdGF0aXN0aWNzRW0AX19aTjJ2ODdJc29sYXRlMzVTZXRBYm9ydE9uVW5jYXVnaHRFeGNlcHRpb25DYWxsYmFja0VQRmJQUzBfRQBfX1pOMnY4N0lzb2xhdGU0MVNldENhcHR1cmVTdGFja1RyYWNlRm9yVW5jYXVnaHRFeGNlcHRpb25zRWJpTlNfMTBTdGFja1RyYWNlMTdTdGFja1RyYWNlT3B0aW9uc0UAX19aTjJ2ODdNZXNzYWdlMjJQcmludEN1cnJlbnRTdGFja1RyYWNlRVBOU183SXNvbGF0ZUVQN19fc0ZJTEUAX19aTjJ2ODhFeHRlcm5hbDNOZXdFUE5TXzdJc29sYXRlRVB2AF9fWk4ydjg4VHJ5Q2F0Y2hDMUVQTlNfN0lzb2xhdGVFAF9fWk4ydjg4VHJ5Q2F0Y2hEMUV2AF9fWk4ydjg4aW50ZXJuYWwzNUlzb2xhdGVGcm9tTmV2ZXJSZWFkT25seVNwYWNlT2JqZWN0RW0AX19aTjJ2ODlFeGNlcHRpb24xM0NyZWF0ZU1lc3NhZ2VFUE5TXzdJc29sYXRlRU5TXzVMb2NhbElOU181VmFsdWVFRUUAX19aTjJ2ODlFeGNlcHRpb24xM0dldFN0YWNrVHJhY2VFTlNfNUxvY2FsSU5TXzVWYWx1ZUVFRQBfX1pOMnY4OUV4Y2VwdGlvbjVFcnJvckVOU181TG9jYWxJTlNfNlN0cmluZ0VFRQBfX1pOSzJ2ODEwU3RhY2tGcmFtZTExR2V0U2NyaXB0SWRFdgBfX1pOSzJ2ODEwU3RhY2tGcmFtZTEzR2V0TGluZU51bWJlckV2AF9fWk5LMnY4MTBTdGFja0ZyYW1lMTNHZXRTY3JpcHROYW1lRXYAX19aTksydjgxMFN0YWNrRnJhbWUxM0lzQ29uc3RydWN0b3JFdgBfX1pOSzJ2ODEwU3RhY2tGcmFtZTE1R2V0RnVuY3Rpb25OYW1lRXYAX19aTksydjgxMFN0YWNrRnJhbWU2SXNFdmFsRXYAX19aTksydjgxMFN0YWNrRnJhbWU5R2V0Q29sdW1uRXYAX19aTksydjgxMFN0YWNrVHJhY2UxM0dldEZyYW1lQ291bnRFdgBfX1pOSzJ2ODEwU3RhY2tUcmFjZThHZXRGcmFtZUVQTlNfN0lzb2xhdGVFagBfX1pOSzJ2ODVBcnJheTZMZW5ndGhFdgBfX1pOSzJ2ODVWYWx1ZTEzSXNOYXRpdmVFcnJvckV2AF9fWk5LMnY4NVZhbHVlOElzT2JqZWN0RXYAX19aTksydjg1VmFsdWU4VG9TdHJpbmdFTlNfNUxvY2FsSU5TXzdDb250ZXh0RUVFAF9fWk5LMnY4NlN0cmluZzZMZW5ndGhFdgBfX1pOSzJ2ODZTdHJpbmc5V3JpdGVVdGY4RVBOU183SXNvbGF0ZUVQY2lQaWkAX19aTksydjg3TWVzc2FnZTNHZXRFdgBfX1pOSzJ2ODhFeHRlcm5hbDVWYWx1ZUV2AF9fWk5LU3QzX18xMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFN2NvbXBhcmVFbW1QS2NtAF9fWk5LU3QzX18xMjFfX2Jhc2ljX3N0cmluZ19jb21tb25JTGIxRUUyMF9fdGhyb3dfbGVuZ3RoX2Vycm9yRXYAX19aTktTdDNfXzE2bG9jYWxlOWhhc19mYWNldEVSTlMwXzJpZEUAX19aTktTdDNfXzE2bG9jYWxlOXVzZV9mYWNldEVSTlMwXzJpZEUAX19aTktTdDNfXzE4aW9zX2Jhc2U2Z2V0bG9jRXYAX19aTlN0M19fMTEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRTZhcHBlbmRFUEtjAF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU2YXBwZW5kRVBLY20AX19aTlN0M19fMTEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRTZhc3NpZ25FUEtjAF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU2cmVzaXplRW1jAF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU5cHVzaF9iYWNrRWMAX19aTlN0M19fMTEyYmFzaWNfc3RyaW5nSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUMxRVJLUzVfAF9fWk5TdDNfXzExMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMUV2AF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRTNwdXRFYwBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1Zmx1c2hFdgBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2VudHJ5QzFFUlMzXwBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2VudHJ5RDFFdgBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMEV2AF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDJFdgBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVsc0VQS3YAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFbHNFZABfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVsc0VpAF9fWk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRWxzRWwAX19aTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFbHNFbQBfX1pOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVsc0V5AF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNHN5bmNFdgBfX1pOU3QzX18xMTViYXNpY19zdHJlYW1idWZJY05TXzExY2hhcl90cmFpdHNJY0VFRTVpbWJ1ZUVSS05TXzZsb2NhbGVFAF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNXVmbG93RXYAX19aTlN0M19fMTE1YmFzaWNfc3RyZWFtYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2V0YnVmRVBjbABfX1pOU3QzX18xMTViYXNpY19zdHJlYW1idWZJY05TXzExY2hhcl90cmFpdHNJY0VFRTZ4c2dldG5FUGNsAF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNnhzcHV0bkVQS2NsAF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFOXNob3dtYW55Y0V2AF9fWk5TdDNfXzExNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFQzJFdgBfX1pOU3QzX18xMTViYXNpY19zdHJlYW1idWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUQyRXYAX19aTlN0M19fMTRjZXJyRQBfX1pOU3QzX18xNGNvdXRFAF9fWk5TdDNfXzE1Y3R5cGVJY0UyaWRFAF9fWk5TdDNfXzE2bG9jYWxlQzFFUktTMF8AX19aTlN0M19fMTZsb2NhbGVEMUV2AF9fWk5TdDNfXzE3Y29kZWN2dEljYzExX19tYnN0YXRlX3RFMmlkRQBfX1pOU3QzX18xOGlvc19iYXNlNGluaXRFUHYAX19aTlN0M19fMThpb3NfYmFzZTVjbGVhckVqAF9fWk5TdDNfXzE5YmFzaWNfaW9zSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU3Y29weWZtdEVSS1MzXwBfX1pOU3QzX18xOWJhc2ljX2lvc0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDFFdgBfX1pOU3QzX18xOWJhc2ljX2lvc0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDJFdgBfX1pUVk5TdDNfXzE5YmFzaWNfaW9zSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAF9fWlR2MF9uMjRfTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgBfX1pUdjBfbjI0X05TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAX19aZGFQdgBfX1pkbFB2AF9fWm5hbQBfX1pud20AX19fYXNzZXJ0X3J0bgBfX19iemVybwBfX19jeGFfYXRleGl0AF9fX2N4YV9kZW1hbmdsZQBfX19lcnJvcgBfX19zdGFja19jaGtfZmFpbABfX19zdGFja19jaGtfZ3VhcmQAX19fc3RkZXJycABfX19zdGRvdXRwAF9fZHlsZF9nZXRfaW1hZ2VfbmFtZQBfYWJvcnQAX2JhY2t0cmFjZQBfZGlmZnRpbWUAX2RsYWRkcgBfZGxzeW0AX2Vudmlyb24AX2V4aXQAX2ZjbG9zZQBfZmZsdXNoAF9mZ2V0cwBfZm9wZW4AX2ZwcmludGYAX2ZyZWFkAF9mcmVlAF9mc2Vla28AX2Z0ZWxsbwBfZndyaXRlAF9nZXRlZ2lkAF9nZXRlbnYAX2dldGV1aWQAX2dldGdpZABfZ2V0cGlkAF9nZXRybGltaXQAX2dldHJ1c2FnZQBfZ2V0dGltZW9mZGF5AF9nZXR1aWQAX2xvY2FsdGltZV9yAF9tYWxsb2MAX21lbWNocgBfbWVtY21wAF9tZW1jcHkAX21lbW1vdmUAX21lbXNldABfbm9kZV9tb2R1bGVfcmVnaXN0ZXIAX3B0aHJlYWRfYXR0cl9kZXN0cm95AF9wdGhyZWFkX2F0dHJfaW5pdABfcHRocmVhZF9hdHRyX3NldGRldGFjaHN0YXRlAF9wdGhyZWFkX2F0dHJfc2V0c3RhY2tzaXplAF9wdGhyZWFkX2NyZWF0ZQBfcHRocmVhZF9tYWNoX3RocmVhZF9ucABfcHRocmVhZF9zZWxmAF9wdGhyZWFkX3NpZ21hc2sAX3JhaXNlAF9yZXdpbmQAX3NpZ2FjdGlvbgBfc25wcmludGYAX3NzY2FuZgBfc3RyY21wAF9zdHJlcnJvcgBfc3RybGVuAF9zdHJuY21wAF90aHJlYWRfaW5mbwBfdGltZQBfdG1wZmlsZQBfdW5hbWUAX3V2X2FzeW5jX2luaXQAX3V2X2FzeW5jX3NlbmQAX3V2X2RlZmF1bHRfbG9vcABfdXZfZmlsZW5vAF91dl9mc19ldmVudF9nZXRwYXRoAF91dl9mc19wb2xsX2dldHBhdGgAX3V2X2dldG5hbWVpbmZvAF91dl9oYXNfcmVmAF91dl9pbmV0X250b3AAX3V2X2lzX2FjdGl2ZQBfdXZfaXNfcmVhZGFibGUAX3V2X2lzX3dyaXRhYmxlAF91dl9tdXRleF9pbml0AF91dl9tdXRleF9sb2NrAF91dl9tdXRleF91bmxvY2sAX3V2X25vdwBfdXZfcmVjdl9idWZmZXJfc2l6ZQBfdXZfc2VtX2luaXQAX3V2X3NlbV9wb3N0AF91dl9zZW1fd2FpdABfdXZfc2VuZF9idWZmZXJfc2l6ZQBfdXZfdGNwX2dldHBlZXJuYW1lAF91dl90Y3BfZ2V0c29ja25hbWUAX3V2X3RpbWVyX2dldF9yZXBlYXQAX3V2X3R0eV9nZXRfd2luc2l6ZQBfdXZfdWRwX2dldHNvY2tuYW1lAF91dl91bnJlZgBfdXZfd2FsawBkeWxkX3N0dWJfYmluZGVyAC9Vc2Vycy9iamVua2lucy93b3Jrc3BhY2UvYXJib3Jpc3QvdGVzdC9maXh0dXJlcy9wYWNrYWdlLXdpdGgtZ3lwLWRlcGVuZGVuY3ktbGFja2luZy1pbnN0YWxsLXNjcmlwdC9ub2RlX21vZHVsZXMvbm9kZS1yZXBvcnQvYnVpbGQvLi4vc3JjLwBub2RlX3JlcG9ydC5jYwAvVXNlcnMvYmplbmtpbnMvd29ya3NwYWNlL2FyYm9yaXN0L3Rlc3QvZml4dHVyZXMvcGFja2FnZS13aXRoLWd5cC1kZXBlbmRlbmN5LWxhY2tpbmctaW5zdGFsbC1zY3JpcHQvbm9kZV9tb2R1bGVzL25vZGUtcmVwb3J0L2J1aWxkL1JlbGVhc2Uvb2JqLnRhcmdldC9hcGkvc3JjL25vZGVfcmVwb3J0Lm8AX19aTjEwbm9kZXJlcG9ydDE3VHJpZ2dlck5vZGVSZXBvcnRFUE4ydjg3SXNvbGF0ZUVOU185RHVtcEV2ZW50RVBLY1M1X1BjTlMwXzEwTWF5YmVMb2NhbElOUzBfNVZhbHVlRUVFAC4uL3NyYy9ub2RlX3JlcG9ydC5jYwAvQXBwbGljYXRpb25zL1hjb2RlLmFwcC9Db250ZW50cy9EZXZlbG9wZXIvVG9vbGNoYWlucy9YY29kZURlZmF1bHQueGN0b29sY2hhaW4vdXNyL2luY2x1ZGUvYysrL3YxL2ZzdHJlYW0AL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9vc3RyZWFtAC9BcHBsaWNhdGlvbnMvWGNvZGUuYXBwL0NvbnRlbnRzL0RldmVsb3Blci9Ub29sY2hhaW5zL1hjb2RlRGVmYXVsdC54Y3Rvb2xjaGFpbi91c3IvaW5jbHVkZS9jKysvdjEvaW9zAC9BcHBsaWNhdGlvbnMvWGNvZGUuYXBwL0NvbnRlbnRzL0RldmVsb3Blci9Ub29sY2hhaW5zL1hjb2RlRGVmYXVsdC54Y3Rvb2xjaGFpbi91c3IvaW5jbHVkZS9jKysvdjEvX19zdHJpbmcAL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9pb3Nmd2QAX19aTjEwbm9kZXJlcG9ydEwxNVdyaXRlTm9kZVJlcG9ydEVQTjJ2ODdJc29sYXRlRU5TXzlEdW1wRXZlbnRFUEtjUzVfUGNSTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlM3XzExY2hhcl90cmFpdHNJY0VFRUVOUzBfMTBNYXliZUxvY2FsSU5TMF81VmFsdWVFRUVQMnRtAC9BcHBsaWNhdGlvbnMvWGNvZGUuYXBwL0NvbnRlbnRzL0RldmVsb3Blci9Ub29sY2hhaW5zL1hjb2RlRGVmYXVsdC54Y3Rvb2xjaGFpbi91c3IvaW5jbHVkZS9jKysvdjEvX19sb2NhbGUAL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9zdHJpbmcAL1VzZXJzL2JqZW5raW5zL0xpYnJhcnkvQ2FjaGVzL25vZGUtZ3lwLzEyLjE4LjQvaW5jbHVkZS9ub2RlL3Y4LmgALi4vLi4vbmFuL25hbi5oAC9BcHBsaWNhdGlvbnMvWGNvZGUuYXBwL0NvbnRlbnRzL0RldmVsb3Blci9Ub29sY2hhaW5zL1hjb2RlRGVmYXVsdC54Y3Rvb2xjaGFpbi91c3IvaW5jbHVkZS9jKysvdjEvaW9tYW5pcABfX1pOU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDFFdgBfX1pOMTBub2RlcmVwb3J0MTNHZXROb2RlUmVwb3J0RVBOMnY4N0lzb2xhdGVFTlNfOUR1bXBFdmVudEVQS2NTNV9OUzBfMTBNYXliZUxvY2FsSU5TMF81VmFsdWVFRUVSTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlM5XzExY2hhcl90cmFpdHNJY0VFRUUAX19aVHYwX24yNF9OU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDFFdgBfX1pOU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgBfX1pUdjBfbjI0X05TdDNfXzExNGJhc2ljX29mc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMEV2AF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAX19aTlN0M19fMTEzYmFzaWNfZmlsZWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1aW1idWVFUktOU182bG9jYWxlRQAvQXBwbGljYXRpb25zL1hjb2RlLmFwcC9Db250ZW50cy9EZXZlbG9wZXIvVG9vbGNoYWlucy9YY29kZURlZmF1bHQueGN0b29sY2hhaW4vdXNyL2luY2x1ZGUvYysrL3YxL3N0cmVhbWJ1ZgBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2V0YnVmRVBjbABfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU3c2Vla29mZkV4TlNfOGlvc19iYXNlN3NlZWtkaXJFagAvQXBwbGljYXRpb25zL1hjb2RlLmFwcC9Db250ZW50cy9EZXZlbG9wZXIvVG9vbGNoYWlucy9YY29kZURlZmF1bHQueGN0b29sY2hhaW4vdXNyL2luY2x1ZGUvYysrL3YxL3R5cGVpbmZvAF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRTdzZWVrcG9zRU5TXzRmcG9zSTExX19tYnN0YXRlX3RFRWoAX19aTlN0M19fMTEzYmFzaWNfZmlsZWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFNHN5bmNFdgBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU5dW5kZXJmbG93RXYAL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9hbGdvcml0aG0AX19aTlN0M19fMTEzYmFzaWNfZmlsZWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFOXBiYWNrZmFpbEVpAF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRThvdmVyZmxvd0VpAF9fWk5TdDNfXzEyNF9fcHV0X2NoYXJhY3Rlcl9zZXF1ZW5jZUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRVJOU18xM2Jhc2ljX29zdHJlYW1JVF9UMF9FRVM3X1BLUzRfbQAvQXBwbGljYXRpb25zL1hjb2RlLmFwcC9Db250ZW50cy9EZXZlbG9wZXIvVG9vbGNoYWlucy9YY29kZURlZmF1bHQueGN0b29sY2hhaW4vdXNyL2luY2x1ZGUvYysrL3YxL2l0ZXJhdG9yAF9fWk5TdDNfXzExNl9fcGFkX2FuZF9vdXRwdXRJY05TXzExY2hhcl90cmFpdHNJY0VFRUVOU18xOW9zdHJlYW1idWZfaXRlcmF0b3JJVF9UMF9FRVM2X1BLUzRfUzhfUzhfUk5TXzhpb3NfYmFzZUVTNF8AL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9sb2NhbGUAL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9tZW1vcnkAL0FwcGxpY2F0aW9ucy9YY29kZS5hcHAvQ29udGVudHMvRGV2ZWxvcGVyL1Rvb2xjaGFpbnMvWGNvZGVEZWZhdWx0LnhjdG9vbGNoYWluL3Vzci9pbmNsdWRlL2MrKy92MS9uZXcAX19aTjEwbm9kZXJlcG9ydEwxNVByaW50U3RhY2tGcmFtZUVSTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlMwXzExY2hhcl90cmFpdHNJY0VFRUVQTjJ2ODdJc29sYXRlRU5TNl81TG9jYWxJTlM2XzEwU3RhY2tGcmFtZUVFRWlQdgBfX1pOM05hbjEwVXRmOFN0cmluZ0MyRU4ydjg1TG9jYWxJTlMxXzVWYWx1ZUVFRQBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVDMkV2AF9fR0xPQkFMX19zdWJfSV9ub2RlX3JlcG9ydC5jYwBfX1pUVk5TdDNfXzExNGJhc2ljX29mc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAF9fWlRUTlN0M19fMTE0YmFzaWNfb2ZzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUUAX19aVENOU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRTBfTlNfMTNiYXNpY19vc3RyZWFtSWNTMl9FRQBfX1pUVk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUUAX19aWk4xMG5vZGVyZXBvcnRMMjJQcmludFN5c3RlbUluZm9ybWF0aW9uRVJOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzBfMTFjaGFyX3RyYWl0c0ljRUVFRVBOMnY4N0lzb2xhdGVFRTE0cmxpbWl0X3N0cmluZ3MAX19aTjEwbm9kZXJlcG9ydDl2OF9zdGF0ZXNFAF9fWk4xMG5vZGVyZXBvcnQxNXJlcG9ydF9maWxlbmFtZUUAX19aTjEwbm9kZXJlcG9ydDE2cmVwb3J0X2RpcmVjdG9yeUUAX19aTjEwbm9kZXJlcG9ydDE0dmVyc2lvbl9zdHJpbmdFAF9fWk4xMG5vZGVyZXBvcnQxOGNvbW1hbmRsaW5lX3N0cmluZ0UAX19aTjEwbm9kZXJlcG9ydDE4bG9hZHRpbWVfdG1fc3RydWN0RQBfX1pOMTBub2RlcmVwb3J0OWxvYWRfdGltZUUAX19aTjEwbm9kZXJlcG9ydEwxM3JlcG9ydF9hY3RpdmVFAF9fWk4xMG5vZGVyZXBvcnRMM3NlcUUAbW9kdWxlLmNjAC9Vc2Vycy9iamVua2lucy93b3Jrc3BhY2UvYXJib3Jpc3QvdGVzdC9maXh0dXJlcy9wYWNrYWdlLXdpdGgtZ3lwLWRlcGVuZGVuY3ktbGFja2luZy1pbnN0YWxsLXNjcmlwdC9ub2RlX21vZHVsZXMvbm9kZS1yZXBvcnQvYnVpbGQvUmVsZWFzZS9vYmoudGFyZ2V0L2FwaS9zcmMvbW9kdWxlLm8AX19aTjEwbm9kZXJlcG9ydDEzVHJpZ2dlclJlcG9ydEVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAC4uLy4uL25hbi9uYW5fY2FsbGJhY2tzXzEyX2lubC5oAC4uL3NyYy9tb2R1bGUuY2MAL1VzZXJzL2JqZW5raW5zL0xpYnJhcnkvQ2FjaGVzL25vZGUtZ3lwLzEyLjE4LjQvaW5jbHVkZS9ub2RlL3Y4LWludGVybmFsLmgALi4vLi4vbmFuL25hbl9pbXBsZW1lbnRhdGlvbl8xMl9pbmwuaABfX1pOMTBub2RlcmVwb3J0OUdldFJlcG9ydEVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAC9BcHBsaWNhdGlvbnMvWGNvZGUuYXBwL0NvbnRlbnRzL0RldmVsb3Blci9Ub29sY2hhaW5zL1hjb2RlRGVmYXVsdC54Y3Rvb2xjaGFpbi91c3IvaW5jbHVkZS9jKysvdjEvc3N0cmVhbQAuLi8uLi9uYW4vbmFuX25ldy5oAF9fWk5TdDNfXzExOWJhc2ljX29zdHJpbmdzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRDFFdgBfX1pOMTBub2RlcmVwb3J0OVNldEV2ZW50c0VSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAF9fWk4xMG5vZGVyZXBvcnRMMTJPbkZhdGFsRXJyb3JFUEtjUzFfAF9fWk4xMG5vZGVyZXBvcnQxOU9uVW5jYXVnaHRFeGNlcHRpb25FUE4ydjg3SXNvbGF0ZUUAX19aTjEwbm9kZXJlcG9ydEwxOFNldHVwU2lnbmFsSGFuZGxlckV2AF9fWk4xMG5vZGVyZXBvcnQ5U2V0U2lnbmFsRVJLTjNOYW4yMEZ1bmN0aW9uQ2FsbGJhY2tJbmZvSU4ydjg1VmFsdWVFRUUAX19aTjEwbm9kZXJlcG9ydEwxMFNpZ25hbER1bXBFaQBfX1pOMTBub2RlcmVwb3J0MTFTZXRGaWxlTmFtZUVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAF9fWk4xMG5vZGVyZXBvcnQxMlNldERpcmVjdG9yeUVSS04zTmFuMjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOMnY4NVZhbHVlRUVFAF9fWk4xMG5vZGVyZXBvcnQxMFNldFZlcmJvc2VFUktOM05hbjIwRnVuY3Rpb25DYWxsYmFja0luZm9JTjJ2ODVWYWx1ZUVFRQBfX1pOMTBub2RlcmVwb3J0MTBJbml0aWFsaXplRU4ydjg1TG9jYWxJTlMwXzZPYmplY3RFRUUALi4vc3JjL25vZGVfcmVwb3J0LmgAX19aTjEwbm9kZXJlcG9ydEwyMF9yZWdpc3Rlcl9ub2RlcmVwb3J0RXYAX19aVHYwX24yNF9OU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUQxRXYAX19aTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMEV2AF9fWlR2MF9uMjRfTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMEV2AF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMUV2AF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVEMEV2AF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU3c2Vla29mZkV4TlNfOGlvc19iYXNlN3NlZWtkaXJFagBfX1pOU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFN3NlZWtwb3NFTlNfNGZwb3NJMTFfX21ic3RhdGVfdEVFagBfX1pOU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFOXVuZGVyZmxvd0V2AF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU5cGJhY2tmYWlsRWkAX19aTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRThvdmVyZmxvd0VpAF9fWk4xMG5vZGVyZXBvcnQyMlJlcG9ydFNpZ25hbFRocmVhZE1haW5FUHYAX19aTjEwbm9kZXJlcG9ydEwyM1NpZ25hbER1bXBBc3luY0NhbGxiYWNrRVAxMHV2X2FzeW5jX3MAX19aTjEwbm9kZXJlcG9ydEwyN1NpZ25hbER1bXBJbnRlcnJ1cHRDYWxsYmFja0VQTjJ2ODdJc29sYXRlRVB2AF9fWk5LU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFM3N0ckV2AF9fWk4zTmFuM2ltcDEyU2V0TWV0aG9kQXV4SU4ydjg1TG9jYWxJTlMyXzZPYmplY3RFRUVFRXZUX05TM19JTlMyXzZTdHJpbmdFRUVOUzNfSU5TMl8xNkZ1bmN0aW9uVGVtcGxhdGVFRUV6AC4uLy4uL25hbi9uYW5fbWF5YmVfNDNfaW5sLmgAX19aTjNOYW4zaW1wN0ZhY3RvcnlJTjJ2ODE2RnVuY3Rpb25UZW1wbGF0ZUVFM05ld0VQRnZSS05TXzIwRnVuY3Rpb25DYWxsYmFja0luZm9JTlMyXzVWYWx1ZUVFRUVOUzJfNUxvY2FsSVM2X0VFTlNDX0lOUzJfOVNpZ25hdHVyZUVFRQBfX1pOM05hbjNpbXBMMjNGdW5jdGlvbkNhbGxiYWNrV3JhcHBlckVSS04ydjgyMEZ1bmN0aW9uQ2FsbGJhY2tJbmZvSU5TMV81VmFsdWVFRUUAX19aVFZOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUAX19aVFROU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUAX19aVENOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUwX05TXzEzYmFzaWNfb3N0cmVhbUljUzJfRUUAX19aVFZOU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQBfX1pOMTBub2RlcmVwb3J0TDE3bm9kZXJlcG9ydF9ldmVudHNFAF9fWk4xMG5vZGVyZXBvcnRMMTdub2RlcmVwb3J0X3NpZ25hbEUAX19aTjEwbm9kZXJlcG9ydEw3X21vZHVsZUUAX19aTjEwbm9kZXJlcG9ydEwyMmVycm9yX2hvb2tfaW5pdGlhbGlzZWRFAF9fWk4xMG5vZGVyZXBvcnRMMjZleGNlcHRpb25faG9va19pbml0aWFsaXNlZEUAX19aTjEwbm9kZXJlcG9ydEwyNXNpZ25hbF90aHJlYWRfaW5pdGlhbGlzZWRFAF9fWk4xMG5vZGVyZXBvcnRMOHNhdmVkX3NhRQBfX1pOMTBub2RlcmVwb3J0TDE4bm9kZXJlcG9ydF92ZXJib3NlRQBfX1pOMTBub2RlcmVwb3J0TDEybm9kZV9pc29sYXRlRQBfX1pOMTBub2RlcmVwb3J0TDEzcmVwb3J0X3NpZ25hbEUAX19aTjEwbm9kZXJlcG9ydEwxNnJlcG9ydF9zZW1hcGhvcmVFAF9fWk4xMG5vZGVyZXBvcnRMMThub2RlX2lzb2xhdGVfbXV0ZXhFAF9fWk4xMG5vZGVyZXBvcnRMMjRub2RlcmVwb3J0X3RyaWdnZXJfYXN5bmNFAHV0aWxpdGllcy5jYwAvVXNlcnMvYmplbmtpbnMvd29ya3NwYWNlL2FyYm9yaXN0L3Rlc3QvZml4dHVyZXMvcGFja2FnZS13aXRoLWd5cC1kZXBlbmRlbmN5LWxhY2tpbmctaW5zdGFsbC1zY3JpcHQvbm9kZV9tb2R1bGVzL25vZGUtcmVwb3J0L2J1aWxkL1JlbGVhc2Uvb2JqLnRhcmdldC9hcGkvc3JjL3V0aWxpdGllcy5vAF9fWk4xMG5vZGVyZXBvcnQyM1Byb2Nlc3NOb2RlUmVwb3J0RXZlbnRzRVBLYwAuLi9zcmMvdXRpbGl0aWVzLmNjAF9fWk4xMG5vZGVyZXBvcnQyM1Byb2Nlc3NOb2RlUmVwb3J0U2lnbmFsRVBLYwBfX1pOMTBub2RlcmVwb3J0MjVQcm9jZXNzTm9kZVJlcG9ydEZpbGVOYW1lRVBLYwBfX1pOMTBub2RlcmVwb3J0MjZQcm9jZXNzTm9kZVJlcG9ydERpcmVjdG9yeUVQS2MAX19aTjEwbm9kZXJlcG9ydDMwUHJvY2Vzc05vZGVSZXBvcnRWZXJib3NlU3dpdGNoRVBLYwBfX1pOMTBub2RlcmVwb3J0MTZTZXRWZXJzaW9uU3RyaW5nRVBOMnY4N0lzb2xhdGVFAF9fWk5TdDNfXzFwbEljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFTlNfMTJiYXNpY19zdHJpbmdJVF9UMF9UMV9FRVJLUzlfUEtTNl8AX19aTjEwbm9kZXJlcG9ydDExU2V0TG9hZFRpbWVFdgBfX1pOMTBub2RlcmVwb3J0MTRTZXRDb21tYW5kTGluZUV2AF9fWk4xMG5vZGVyZXBvcnQxNHJlcG9ydEVuZHBvaW50RVAxMXV2X2hhbmRsZV9zUDhzb2NrYWRkclBLY1JOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOUzZfMTFjaGFyX3RyYWl0c0ljRUVOUzZfOWFsbG9jYXRvckljRUVFRQBfX1pOMTBub2RlcmVwb3J0MTVyZXBvcnRFbmRwb2ludHNFUDExdXZfaGFuZGxlX3NSTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlMyXzExY2hhcl90cmFpdHNJY0VFTlMyXzlhbGxvY2F0b3JJY0VFRUUAX19aTjEwbm9kZXJlcG9ydDEwcmVwb3J0UGF0aEVQMTF1dl9oYW5kbGVfc1JOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOUzJfMTFjaGFyX3RyYWl0c0ljRUVOUzJfOWFsbG9jYXRvckljRUVFRQBfX1pOMTBub2RlcmVwb3J0MTB3YWxrSGFuZGxlRVAxMXV2X2hhbmRsZV9zUHYAX19aTjEwbm9kZXJlcG9ydDExU2lnbm9TdHJpbmdFaQBfX1pOMTBub2RlcmVwb3J0MTJXcml0ZUludGVnZXJFUk5TdDNfXzExM2Jhc2ljX29zdHJlYW1JY05TMF8xMWNoYXJfdHJhaXRzSWNFRUVFbQBfX1pOMTBub2RlcmVwb3J0TDE1V3JpdGVOb2RlUmVwb3J0RVBOMnY4N0lzb2xhdGVFTlNfOUR1bXBFdmVudEVQS2NTNV9QY1JOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzdfMTFjaGFyX3RyYWl0c0ljRUVFRU5TMF8xME1heWJlTG9jYWxJTlMwXzVWYWx1ZUVFRVAydG0AX19aTlN0M19fMTE0YmFzaWNfb2ZzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAX19aVHYwX24yNF9OU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDFFdgBfX1pOU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgBfX1pUdjBfbjI0X05TdDNfXzExNGJhc2ljX29mc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVEMEV2AF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUQxRXYAX19aTlN0M19fMTEzYmFzaWNfZmlsZWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRDBFdgBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU1aW1idWVFUktOU182bG9jYWxlRQBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU2c2V0YnVmRVBjbABfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU3c2Vla29mZkV4TlNfOGlvc19iYXNlN3NlZWtkaXJFagBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU3c2Vla3Bvc0VOU180ZnBvc0kxMV9fbWJzdGF0ZV90RUVqAF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRTRzeW5jRXYAX19aTlN0M19fMTEzYmFzaWNfZmlsZWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFOXVuZGVyZmxvd0V2AF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRTlwYmFja2ZhaWxFaQBfX1pOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUU4b3ZlcmZsb3dFaQBfX1pOU3QzX18xMjRfX3B1dF9jaGFyYWN0ZXJfc2VxdWVuY2VJY05TXzExY2hhcl90cmFpdHNJY0VFRUVSTlNfMTNiYXNpY19vc3RyZWFtSVRfVDBfRUVTN19QS1M0X20AX19aTlN0M19fMTE2X19wYWRfYW5kX291dHB1dEljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRU5TXzE5b3N0cmVhbWJ1Zl9pdGVyYXRvcklUX1QwX0VFUzZfUEtTNF9TOF9TOF9STlNfOGlvc19iYXNlRVM0XwBfX1pOMTBub2RlcmVwb3J0TDE1UHJpbnRTdGFja0ZyYW1lRVJOU3QzX18xMTNiYXNpY19vc3RyZWFtSWNOUzBfMTFjaGFyX3RyYWl0c0ljRUVFRVBOMnY4N0lzb2xhdGVFTlM2XzVMb2NhbElOUzZfMTBTdGFja0ZyYW1lRUVFaVB2AF9fWk4zTmFuMTBVdGY4U3RyaW5nQzJFTjJ2ODVMb2NhbElOUzFfNVZhbHVlRUVFAF9fWk5TdDNfXzExM2Jhc2ljX2ZpbGVidWZJY05TXzExY2hhcl90cmFpdHNJY0VFRUMyRXYAX19HTE9CQUxfX3N1Yl9JX25vZGVfcmVwb3J0LmNjAF9fWk5TdDNfXzExOWJhc2ljX29zdHJpbmdzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRDFFdgBfX1pOMTBub2RlcmVwb3J0TDEyT25GYXRhbEVycm9yRVBLY1MxXwBfX1pOMTBub2RlcmVwb3J0TDE4U2V0dXBTaWduYWxIYW5kbGVyRXYAX19aTjEwbm9kZXJlcG9ydEwxMFNpZ25hbER1bXBFaQBfX1pOMTBub2RlcmVwb3J0TDIwX3JlZ2lzdGVyX25vZGVyZXBvcnRFdgBfX1pUdjBfbjI0X05TdDNfXzExOWJhc2ljX29zdHJpbmdzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRDFFdgBfX1pOU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUQwRXYAX19aVHYwX24yNF9OU3QzX18xMTliYXNpY19vc3RyaW5nc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUQwRXYAX19aTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUQxRXYAX19aTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUQwRXYAX19aTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRTdzZWVrb2ZmRXhOU184aW9zX2Jhc2U3c2Vla2RpckVqAF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU3c2Vla3Bvc0VOU180ZnBvc0kxMV9fbWJzdGF0ZV90RUVqAF9fWk5TdDNfXzExNWJhc2ljX3N0cmluZ2J1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUU5dW5kZXJmbG93RXYAX19aTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRTlwYmFja2ZhaWxFaQBfX1pOU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFOG92ZXJmbG93RWkAX19aTjEwbm9kZXJlcG9ydEwyM1NpZ25hbER1bXBBc3luY0NhbGxiYWNrRVAxMHV2X2FzeW5jX3MAX19aTjEwbm9kZXJlcG9ydEwyN1NpZ25hbER1bXBJbnRlcnJ1cHRDYWxsYmFja0VQTjJ2ODdJc29sYXRlRVB2AF9fWk5LU3QzX18xMTViYXNpY19zdHJpbmdidWZJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFM3N0ckV2AF9fWk4zTmFuM2ltcDEyU2V0TWV0aG9kQXV4SU4ydjg1TG9jYWxJTlMyXzZPYmplY3RFRUVFRXZUX05TM19JTlMyXzZTdHJpbmdFRUVOUzNfSU5TMl8xNkZ1bmN0aW9uVGVtcGxhdGVFRUV6AF9fWk4zTmFuM2ltcDdGYWN0b3J5SU4ydjgxNkZ1bmN0aW9uVGVtcGxhdGVFRTNOZXdFUEZ2UktOU18yMEZ1bmN0aW9uQ2FsbGJhY2tJbmZvSU5TMl81VmFsdWVFRUVFTlMyXzVMb2NhbElTNl9FRU5TQ19JTlMyXzlTaWduYXR1cmVFRUUAX19aTjNOYW4zaW1wTDIzRnVuY3Rpb25DYWxsYmFja1dyYXBwZXJFUktOMnY4MjBGdW5jdGlvbkNhbGxiYWNrSW5mb0lOUzFfNVZhbHVlRUVFAF9fWk5TdDNfXzFwbEljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFTlNfMTJiYXNpY19zdHJpbmdJVF9UMF9UMV9FRVJLUzlfUEtTNl8AX19aVFZOU3QzX18xMTRiYXNpY19vZnN0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRQBfX1pUVE5TdDNfXzExNGJhc2ljX29mc3RyZWFtSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAF9fWlRDTlN0M19fMTE0YmFzaWNfb2ZzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUUwX05TXzEzYmFzaWNfb3N0cmVhbUljUzJfRUUAX19aVFZOU3QzX18xMTNiYXNpY19maWxlYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFAF9fWlpOMTBub2RlcmVwb3J0TDIyUHJpbnRTeXN0ZW1JbmZvcm1hdGlvbkVSTlN0M19fMTEzYmFzaWNfb3N0cmVhbUljTlMwXzExY2hhcl90cmFpdHNJY0VFRUVQTjJ2ODdJc29sYXRlRUUxNHJsaW1pdF9zdHJpbmdzAF9fWlRWTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAF9fWlRUTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAF9fWlRDTlN0M19fMTE5YmFzaWNfb3N0cmluZ3N0cmVhbUljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFMF9OU18xM2Jhc2ljX29zdHJlYW1JY1MyX0VFAF9fWlRWTlN0M19fMTE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUAX19aTjEwbm9kZXJlcG9ydEwxN25vZGVyZXBvcnRfZXZlbnRzRQBfX1pOMTBub2RlcmVwb3J0TDE3bm9kZXJlcG9ydF9zaWduYWxFAF9fWk4xMG5vZGVyZXBvcnRMN19tb2R1bGVFAF9fWk4xMG5vZGVyZXBvcnRMMTNyZXBvcnRfYWN0aXZlRQBfX1pOMTBub2RlcmVwb3J0TDNzZXFFAF9fWk4xMG5vZGVyZXBvcnRMMjJlcnJvcl9ob29rX2luaXRpYWxpc2VkRQBfX1pOMTBub2RlcmVwb3J0TDI2ZXhjZXB0aW9uX2hvb2tfaW5pdGlhbGlzZWRFAF9fWk4xMG5vZGVyZXBvcnRMMjVzaWduYWxfdGhyZWFkX2luaXRpYWxpc2VkRQBfX1pOMTBub2RlcmVwb3J0TDhzYXZlZF9zYUUAX19aTjEwbm9kZXJlcG9ydEwxOG5vZGVyZXBvcnRfdmVyYm9zZUUAX19aTjEwbm9kZXJlcG9ydEwxMm5vZGVfaXNvbGF0ZUUAX19aTjEwbm9kZXJlcG9ydEwxM3JlcG9ydF9zaWduYWxFAF9fWk4xMG5vZGVyZXBvcnRMMTZyZXBvcnRfc2VtYXBob3JlRQBfX1pOMTBub2RlcmVwb3J0TDE4bm9kZV9pc29sYXRlX211dGV4RQBfX1pOMTBub2RlcmVwb3J0TDI0bm9kZXJlcG9ydF90cmlnZ2VyX2FzeW5jRQAAAAAAAA==", 'base64'),
          "obj.target": {
            "api": {
              "src": {
              }
            },
            "install.stamp": ""
          }
        },
        "api.target.mk": `# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := api
DEFS_Debug := \\
	'-DNODE_GYP_MODULE_NAME=api' \\
	'-DUSING_UV_SHARED=1' \\
	'-DUSING_V8_SHARED=1' \\
	'-DV8_DEPRECATION_WARNINGS=1' \\
	'-DV8_DEPRECATION_WARNINGS' \\
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \\
	'-D_DARWIN_USE_64_BIT_INODE=1' \\
	'-D_LARGEFILE_SOURCE' \\
	'-D_FILE_OFFSET_BITS=64' \\
	'-DOPENSSL_NO_PINSHARED' \\
	'-DOPENSSL_THREADS' \\
	'-DNODEREPORT_VERSION="2.2.11"' \\
	'-DBUILDING_NODE_EXTENSION' \\
	'-DDEBUG' \\
	'-D_DEBUG' \\
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \\
	-O0 \\
	-gdwarf-2 \\
	-mmacosx-version-min=10.10 \\
	-arch x86_64 \\
	-Wall \\
	-Wendif-labels \\
	-W \\
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Debug := \\
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \\
	-std=gnu++1y \\
	-stdlib=libc++ \\
	-fno-rtti \\
	-fno-exceptions \\
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Debug :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Debug :=

INCS_Debug := \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/src \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/openssl/config \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/openssl/openssl/include \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/uv/include \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/zlib \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/v8/include \\
	-I\$(srcdir)/../nan

DEFS_Release := \\
	'-DNODE_GYP_MODULE_NAME=api' \\
	'-DUSING_UV_SHARED=1' \\
	'-DUSING_V8_SHARED=1' \\
	'-DV8_DEPRECATION_WARNINGS=1' \\
	'-DV8_DEPRECATION_WARNINGS' \\
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \\
	'-D_DARWIN_USE_64_BIT_INODE=1' \\
	'-D_LARGEFILE_SOURCE' \\
	'-D_FILE_OFFSET_BITS=64' \\
	'-DOPENSSL_NO_PINSHARED' \\
	'-DOPENSSL_THREADS' \\
	'-DNODEREPORT_VERSION="2.2.11"' \\
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \\
	-O3 \\
	-gdwarf-2 \\
	-mmacosx-version-min=10.10 \\
	-arch x86_64 \\
	-Wall \\
	-Wendif-labels \\
	-W \\
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Release := \\
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Release := \\
	-std=gnu++1y \\
	-stdlib=libc++ \\
	-fno-rtti \\
	-fno-exceptions \\
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Release :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Release :=

INCS_Release := \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/include/node \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/src \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/openssl/config \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/openssl/openssl/include \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/uv/include \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/zlib \\
	-I/Users/bjenkins/Library/Caches/node-gyp/12.18.4/deps/v8/include \\
	-I\$(srcdir)/../nan

OBJS := \\
	\$(obj).target/\$(TARGET)/src/node_report.o \\
	\$(obj).target/\$(TARGET)/src/module.o \\
	\$(obj).target/\$(TARGET)/src/utilities.o

# Add to the list of files we specially track dependencies for.
all_deps += \$(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
\$(OBJS): TOOLSET := \$(TOOLSET)
\$(OBJS): GYP_CFLAGS := \$(DEFS_\$(BUILDTYPE)) \$(INCS_\$(BUILDTYPE))  \$(CFLAGS_\$(BUILDTYPE)) \$(CFLAGS_C_\$(BUILDTYPE))
\$(OBJS): GYP_CXXFLAGS := \$(DEFS_\$(BUILDTYPE)) \$(INCS_\$(BUILDTYPE))  \$(CFLAGS_\$(BUILDTYPE)) \$(CFLAGS_CC_\$(BUILDTYPE))
\$(OBJS): GYP_OBJCFLAGS := \$(DEFS_\$(BUILDTYPE)) \$(INCS_\$(BUILDTYPE))  \$(CFLAGS_\$(BUILDTYPE)) \$(CFLAGS_C_\$(BUILDTYPE)) \$(CFLAGS_OBJC_\$(BUILDTYPE))
\$(OBJS): GYP_OBJCXXFLAGS := \$(DEFS_\$(BUILDTYPE)) \$(INCS_\$(BUILDTYPE))  \$(CFLAGS_\$(BUILDTYPE)) \$(CFLAGS_CC_\$(BUILDTYPE)) \$(CFLAGS_OBJCC_\$(BUILDTYPE))

# Suffix rules, putting all outputs into \$(obj).

\$(obj).\$(TOOLSET)/\$(TARGET)/%.o: \$(srcdir)/%.cc FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)

# Try building from generated source, too.

\$(obj).\$(TOOLSET)/\$(TARGET)/%.o: \$(obj).\$(TOOLSET)/%.cc FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)

\$(obj).\$(TOOLSET)/\$(TARGET)/%.o: \$(obj)/%.cc FORCE_DO_CMD
	@\$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \\
	-undefined dynamic_lookup \\
	-Wl,-no_pie \\
	-Wl,-search_paths_first \\
	-mmacosx-version-min=10.10 \\
	-arch x86_64 \\
	-L\$(builddir) \\
	-stdlib=libc++

LIBTOOLFLAGS_Debug := \\
	-undefined dynamic_lookup \\
	-Wl,-no_pie \\
	-Wl,-search_paths_first

LDFLAGS_Release := \\
	-undefined dynamic_lookup \\
	-Wl,-no_pie \\
	-Wl,-search_paths_first \\
	-mmacosx-version-min=10.10 \\
	-arch x86_64 \\
	-L\$(builddir) \\
	-stdlib=libc++

LIBTOOLFLAGS_Release := \\
	-undefined dynamic_lookup \\
	-Wl,-no_pie \\
	-Wl,-search_paths_first

LIBS :=

\$(builddir)/api.node: GYP_LDFLAGS := \$(LDFLAGS_\$(BUILDTYPE))
\$(builddir)/api.node: LIBS := \$(LIBS)
\$(builddir)/api.node: GYP_LIBTOOLFLAGS := \$(LIBTOOLFLAGS_\$(BUILDTYPE))
\$(builddir)/api.node: TOOLSET := \$(TOOLSET)
\$(builddir)/api.node: \$(OBJS) FORCE_DO_CMD
	\$(call do_cmd,solink_module)

all_deps += \$(builddir)/api.node
# Add target alias
.PHONY: api
api: \$(builddir)/api.node

# Short alias for building this executable.
.PHONY: api.node
api.node: \$(builddir)/api.node

# Add executable to "all" target.
.PHONY: all
all: \$(builddir)/api.node

`,
        "binding.Makefile": `# This file is generated by gyp; do not edit.

export builddir_name ?= ./build/.
.PHONY: all
all:
	\$(MAKE) api install
`,
        "config.gypi": `# Do not edit. File was generated by node-gyp's "configure" step
{
  "target_defaults": {
    "cflags": [],
    "default_configuration": "Release",
    "defines": [],
    "include_dirs": [],
    "libraries": []
  },
  "variables": {
    "asan": 0,
    "build_v8_with_gn": "false",
    "coverage": "false",
    "dcheck_always_on": 0,
    "debug_nghttp2": "false",
    "debug_node": "false",
    "enable_lto": "false",
    "enable_pgo_generate": "false",
    "enable_pgo_use": "false",
    "force_dynamic_crt": 0,
    "host_arch": "x64",
    "icu_data_in": "../../deps/icu-small/source/data/in/icudt67l.dat",
    "icu_default_data": "",
    "icu_endianness": "l",
    "icu_gyp_path": "tools/icu/icu-generic.gyp",
    "icu_locales": "en,root",
    "icu_path": "deps/icu-small",
    "icu_small": "true",
    "icu_ver_major": "67",
    "is_debug": 0,
    "llvm_version": "11.0",
    "napi_build_version": "6",
    "node_byteorder": "little",
    "node_debug_lib": "false",
    "node_enable_d8": "false",
    "node_install_npm": "true",
    "node_module_version": 72,
    "node_no_browser_globals": "false",
    "node_prefix": "/",
    "node_release_urlbase": "https://nodejs.org/download/release/",
    "node_shared": "false",
    "node_shared_brotli": "false",
    "node_shared_cares": "false",
    "node_shared_http_parser": "false",
    "node_shared_libuv": "false",
    "node_shared_nghttp2": "false",
    "node_shared_openssl": "false",
    "node_shared_zlib": "false",
    "node_tag": "",
    "node_target_type": "executable",
    "node_use_bundled_v8": "true",
    "node_use_dtrace": "true",
    "node_use_etw": "false",
    "node_use_node_code_cache": "true",
    "node_use_node_snapshot": "true",
    "node_use_openssl": "true",
    "node_use_v8_platform": "true",
    "node_with_ltcg": "false",
    "node_without_node_options": "false",
    "openssl_fips": "",
    "openssl_is_fips": "false",
    "shlib_suffix": "72.dylib",
    "target_arch": "x64",
    "v8_enable_gdbjit": 0,
    "v8_enable_i18n_support": 1,
    "v8_enable_inspector": 1,
    "v8_enable_lite_mode": 0,
    "v8_no_strict_aliasing": 1,
    "v8_optimized_debug": 1,
    "v8_promise_internal_field_count": 1,
    "v8_random_seed": 0,
    "v8_trace_maps": 0,
    "v8_use_siphash": 1,
    "v8_use_snapshot": 1,
    "want_separate_host_toolset": 0,
    "xcode_version": "11.0",
    "nodedir": "/Users/bjenkins/Library/Caches/node-gyp/12.18.4",
    "standalone_static_library": 1,
    "dry_run": "",
    "legacy_bundling": "",
    "save_dev": "",
    "_npm_registry": "https://registry.internal.npmjs.com/",
    "_spammy_org_0_registry": "https://registry.npm.red/",
    "browser": "",
    "commit_hooks": "true",
    "only": "",
    "viewer": "man",
    "also": "",
    "rollback": "true",
    "sign_git_commit": "",
    "audit": "true",
    "usage": "",
    "globalignorefile": "/Users/bjenkins/.nvm/versions/node/v12.18.4/etc/npmignore",
    "init_author_url": "",
    "maxsockets": "50",
    "shell": "/usr/local/bin/bash",
    "metrics_registry": "https://registry.npmjs.org/",
    "parseable": "",
    "shrinkwrap": "true",
    "init_license": "ISC",
    "timing": "",
    "if_present": "",
    "cache_max": "Infinity",
    "init_author_email": "",
    "sign_git_tag": "",
    "cert": "",
    "git_tag_version": "true",
    "local_address": "",
    "long": "",
    "preid": "",
    "fetch_retries": "2",
    "registry": "https://registry.npmjs.org/",
    "key": "",
    "message": "%s",
    "versions": "",
    "globalconfig": "/Users/bjenkins/.nvm/versions/node/v12.18.4/etc/npmrc",
    "always_auth": "",
    "logs_max": "10",
    "prefer_online": "",
    "cache_lock_retries": "10",
    "global_style": "",
    "update_notifier": "true",
    "_brian_staging_registry": "https://registry.npm.red/",
    "audit_level": "low",
    "heading": "npm",
    "fetch_retry_mintimeout": "10000",
    "offline": "",
    "read_only": "",
    "searchlimit": "20",
    "access": "",
    "json": "",
    "allow_same_version": "",
    "description": "true",
    "engine_strict": "",
    "https_proxy": "",
    "init_module": "/Users/bjenkins/.npm-init.js",
    "userconfig": "/Users/bjenkins/.npmrc",
    "cidr": "",
    "node_version": "12.18.4",
    "user": "501",
    "auth_type": "legacy",
    "editor": "/Users/bjenkins/dotfiles/editor",
    "ignore_prepublish": "",
    "save": "true",
    "_brian_test_registry": "http://machine:5000/",
    "script_shell": "",
    "tag": "latest",
    "before": "",
    "global": "",
    "progress": "true",
    "ham_it_up": "",
    "optional": "true",
    "searchstaleness": "900",
    "bin_links": "true",
    "force": "",
    "save_prod": "",
    "searchopts": "",
    "depth": "Infinity",
    "node_gyp": "/Users/bjenkins/.nvm/versions/node/v12.18.4/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",
    "rebuild_bundle": "true",
    "sso_poll_frequency": "500",
    "unicode": "true",
    "fetch_retry_maxtimeout": "60000",
    "ca": "",
    "save_prefix": "^",
    "scripts_prepend_node_path": "warn-only",
    "sso_type": "oauth",
    "strict_ssl": "true",
    "tag_version_prefix": "v",
    "dev": "",
    "fetch_retry_factor": "10",
    "group": "20",
    "save_exact": "",
    "cache_lock_stale": "60000",
    "prefer_offline": "",
    "version": "",
    "cache_min": "10",
    "otp": "",
    "_npminc_registry": "https://npme-private.npmjs.com/",
    "cache": "/Users/bjenkins/.npm",
    "searchexclude": "",
    "color": "true",
    "package_lock": "true",
    "fund": "true",
    "package_lock_only": "",
    "save_optional": "",
    "user_agent": "npm/6.14.6 node/v12.18.4 darwin x64",
    "ignore_scripts": "",
    "cache_lock_wait": "10000",
    "production": "",
    "_bonkyorg_registry": "https://registry.npm.red",
    "save_bundle": "",
    "send_metrics": "",
    "init_version": "1.0.0",
    "node_options": "",
    "umask": "0022",
    "scope": "",
    "git": "git",
    "init_author_name": "",
    "_bonk9y_registry": "https://registry.npm.red",
    "onload_script": "",
    "tmp": "/var/folders/89/0ml81qn56pd98ytc34ltscz00000gn/T",
    "unsafe_perm": "true",
    "format_package_lock": "true",
    "link": "",
    "prefix": "/Users/bjenkins/.nvm/versions/node/v12.18.4"
  }
}
`,
        "gyp-mac-tool": `#!/usr/bin/env python
# Generated by gyp. Do not edit.
# Copyright (c) 2012 Google Inc. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Utility functions to perform Xcode-style build steps.

These functions are executed via gyp-mac-tool when using the Makefile generator.
"""

from __future__ import print_function

import fcntl
import fnmatch
import glob
import json
import os
import plistlib
import re
import shutil
import string
import subprocess
import sys
import tempfile

PY3 = bytes != str


def main(args):
  executor = MacTool()
  exit_code = executor.Dispatch(args)
  if exit_code is not None:
    sys.exit(exit_code)


class MacTool(object):
  """This class performs all the Mac tooling steps. The methods can either be
  executed directly, or dispatched from an argument list."""

  def Dispatch(self, args):
    """Dispatches a string command to a method."""
    if len(args) < 1:
      raise Exception("Not enough arguments")

    method = "Exec%s" % self._CommandifyName(args[0])
    return getattr(self, method)(*args[1:])

  def _CommandifyName(self, name_string):
    """Transforms a tool name like copy-info-plist to CopyInfoPlist"""
    return name_string.title().replace('-', '')

  def ExecCopyBundleResource(self, source, dest, convert_to_binary):
    """Copies a resource file to the bundle/Resources directory, performing any
    necessary compilation on each resource."""
    extension = os.path.splitext(source)[1].lower()
    if os.path.isdir(source):
      # Copy tree.
      # TODO(thakis): This copies file attributes like mtime, while the
      # single-file branch below doesn't. This should probably be changed to
      # be consistent with the single-file branch.
      if os.path.exists(dest):
        shutil.rmtree(dest)
      shutil.copytree(source, dest)
    elif extension == '.xib':
      return self._CopyXIBFile(source, dest)
    elif extension == '.storyboard':
      return self._CopyXIBFile(source, dest)
    elif extension == '.strings':
      self._CopyStringsFile(source, dest, convert_to_binary)
    else:
      shutil.copy(source, dest)

  def _CopyXIBFile(self, source, dest):
    """Compiles a XIB file with ibtool into a binary plist in the bundle."""

    # ibtool sometimes crashes with relative paths. See crbug.com/314728.
    base = os.path.dirname(os.path.realpath(__file__))
    if os.path.relpath(source):
      source = os.path.join(base, source)
    if os.path.relpath(dest):
      dest = os.path.join(base, dest)

    args = ['xcrun', 'ibtool', '--errors', '--warnings', '--notices',
        '--output-format', 'human-readable-text', '--compile', dest, source]
    ibtool_section_re = re.compile(r'/\\*.*\\*/')
    ibtool_re = re.compile(r'.*note:.*is clipping its content')
    ibtoolout = subprocess.Popen(args, stdout=subprocess.PIPE)
    current_section_header = None
    for line in ibtoolout.stdout:
      if ibtool_section_re.match(line):
        current_section_header = line
      elif not ibtool_re.match(line):
        if current_section_header:
          sys.stdout.write(current_section_header)
          current_section_header = None
        sys.stdout.write(line)
    return ibtoolout.returncode

  def _ConvertToBinary(self, dest):
    subprocess.check_call([
        'xcrun', 'plutil', '-convert', 'binary1', '-o', dest, dest])

  def _CopyStringsFile(self, source, dest, convert_to_binary):
    """Copies a .strings file using iconv to reconvert the input into UTF-16."""
    input_code = self._DetectInputEncoding(source) or "UTF-8"

    # Xcode's CpyCopyStringsFile / builtin-copyStrings seems to call
    # CFPropertyListCreateFromXMLData() behind the scenes; at least it prints
    #     CFPropertyListCreateFromXMLData(): Old-style plist parser: missing
    #     semicolon in dictionary.
    # on invalid files. Do the same kind of validation.
    import CoreFoundation
    s = open(source, 'rb').read()
    d = CoreFoundation.CFDataCreate(None, s, len(s))
    _, error = CoreFoundation.CFPropertyListCreateFromXMLData(None, d, 0, None)
    if error:
      return

    fp = open(dest, 'wb')
    fp.write(s.decode(input_code).encode('UTF-16'))
    fp.close()

    if convert_to_binary == 'True':
      self._ConvertToBinary(dest)

  def _DetectInputEncoding(self, file_name):
    """Reads the first few bytes from file_name and tries to guess the text
    encoding. Returns None as a guess if it can't detect it."""
    fp = open(file_name, 'rb')
    try:
      header = fp.read(3)
    except Exception:
      fp.close()
      return None
    fp.close()
    if header.startswith("\\xFE\\xFF"):
      return "UTF-16"
    elif header.startswith("\\xFF\\xFE"):
      return "UTF-16"
    elif header.startswith("\\xEF\\xBB\\xBF"):
      return "UTF-8"
    else:
      return None

  def ExecCopyInfoPlist(self, source, dest, convert_to_binary, *keys):
    """Copies the |source| Info.plist to the destination directory |dest|."""
    # Read the source Info.plist into memory.
    fd = open(source, 'r')
    lines = fd.read()
    fd.close()

    # Insert synthesized key/value pairs (e.g. BuildMachineOSBuild).
    plist = plistlib.readPlistFromString(lines)
    if keys:
      plist = dict(plist.items() + json.loads(keys[0]).items())
    lines = plistlib.writePlistToString(plist)

    # Go through all the environment variables and replace them as variables in
    # the file.
    IDENT_RE = re.compile(r'[/\\s]')
    for key in os.environ:
      if key.startswith('_'):
        continue
      evar = '\${%s}' % key
      evalue = os.environ[key]
      lines = string.replace(lines, evar, evalue)

      # Xcode supports various suffices on environment variables, which are
      # all undocumented. :rfc1034identifier is used in the standard project
      # template these days, and :identifier was used earlier. They are used to
      # convert non-url characters into things that look like valid urls --
      # except that the replacement character for :identifier, '_' isn't valid
      # in a URL either -- oops, hence :rfc1034identifier was born.
      evar = '\${%s:identifier}' % key
      evalue = IDENT_RE.sub('_', os.environ[key])
      lines = string.replace(lines, evar, evalue)

      evar = '\${%s:rfc1034identifier}' % key
      evalue = IDENT_RE.sub('-', os.environ[key])
      lines = string.replace(lines, evar, evalue)

    # Remove any keys with values that haven't been replaced.
    lines = lines.split('\\n')
    for i in range(len(lines)):
      if lines[i].strip().startswith("<string>\${"):
        lines[i] = None
        lines[i - 1] = None
    lines = '\\n'.join(filter(lambda x: x is not None, lines))

    # Write out the file with variables replaced.
    fd = open(dest, 'w')
    fd.write(lines)
    fd.close()

    # Now write out PkgInfo file now that the Info.plist file has been
    # "compiled".
    self._WritePkgInfo(dest)

    if convert_to_binary == 'True':
      self._ConvertToBinary(dest)

  def _WritePkgInfo(self, info_plist):
    """This writes the PkgInfo file from the data stored in Info.plist."""
    plist = plistlib.readPlist(info_plist)
    if not plist:
      return

    # Only create PkgInfo for executable types.
    package_type = plist['CFBundlePackageType']
    if package_type != 'APPL':
      return

    # The format of PkgInfo is eight characters, representing the bundle type
    # and bundle signature, each four characters. If that is missing, four
    # '?' characters are used instead.
    signature_code = plist.get('CFBundleSignature', '????')
    if len(signature_code) != 4:  # Wrong length resets everything, too.
      signature_code = '?' * 4

    dest = os.path.join(os.path.dirname(info_plist), 'PkgInfo')
    fp = open(dest, 'w')
    fp.write('%s%s' % (package_type, signature_code))
    fp.close()

  def ExecFlock(self, lockfile, *cmd_list):
    """Emulates the most basic behavior of Linux's flock(1)."""
    # Rely on exception handling to report errors.
    fd = os.open(lockfile, os.O_RDONLY|os.O_NOCTTY|os.O_CREAT, 0o666)
    fcntl.flock(fd, fcntl.LOCK_EX)
    return subprocess.call(cmd_list)

  def ExecFilterLibtool(self, *cmd_list):
    """Calls libtool and filters out '/path/to/libtool: file: foo.o has no
    symbols'."""
    libtool_re = re.compile(r'^.*libtool: file: .* has no symbols\$')
    libtool_re5 = re.compile(
        r'^.*libtool: warning for library: ' +
        r'.* the table of contents is empty ' +
        r'\\(no object file members in the library define global symbols\\)\$')
    env = os.environ.copy()
    # Ref:
    # http://www.opensource.apple.com/source/cctools/cctools-809/misc/libtool.c
    # The problem with this flag is that it resets the file mtime on the file to
    # epoch=0, e.g. 1970-1-1 or 1969-12-31 depending on timezone.
    env['ZERO_AR_DATE'] = '1'
    libtoolout = subprocess.Popen(cmd_list, stderr=subprocess.PIPE, env=env)
    _, err = libtoolout.communicate()
    if PY3:
      err = err.decode('utf-8')
    for line in err.splitlines():
      if not libtool_re.match(line) and not libtool_re5.match(line):
        print(line, file=sys.stderr)
    # Unconditionally touch the output .a file on the command line if present
    # and the command succeeded. A bit hacky.
    if not libtoolout.returncode:
      for i in range(len(cmd_list) - 1):
        if cmd_list[i] == "-o" and cmd_list[i+1].endswith('.a'):
          os.utime(cmd_list[i+1], None)
          break
    return libtoolout.returncode

  def ExecPackageFramework(self, framework, version):
    """Takes a path to Something.framework and the Current version of that and
    sets up all the symlinks."""
    # Find the name of the binary based on the part before the ".framework".
    binary = os.path.basename(framework).split('.')[0]

    CURRENT = 'Current'
    RESOURCES = 'Resources'
    VERSIONS = 'Versions'

    if not os.path.exists(os.path.join(framework, VERSIONS, version, binary)):
      # Binary-less frameworks don't seem to contain symlinks (see e.g.
      # chromium's out/Debug/org.chromium.Chromium.manifest/ bundle).
      return

    # Move into the framework directory to set the symlinks correctly.
    pwd = os.getcwd()
    os.chdir(framework)

    # Set up the Current version.
    self._Relink(version, os.path.join(VERSIONS, CURRENT))

    # Set up the root symlinks.
    self._Relink(os.path.join(VERSIONS, CURRENT, binary), binary)
    self._Relink(os.path.join(VERSIONS, CURRENT, RESOURCES), RESOURCES)

    # Back to where we were before!
    os.chdir(pwd)

  def _Relink(self, dest, link):
    """Creates a symlink to |dest| named |link|. If |link| already exists,
    it is overwritten."""
    if os.path.lexists(link):
      os.remove(link)
    os.symlink(dest, link)

  def ExecCompileXcassets(self, keys, *inputs):
    """Compiles multiple .xcassets files into a single .car file.

    This invokes 'actool' to compile all the inputs .xcassets files. The
    |keys| arguments is a json-encoded dictionary of extra arguments to
    pass to 'actool' when the asset catalogs contains an application icon
    or a launch image.

    Note that 'actool' does not create the Assets.car file if the asset
    catalogs does not contains imageset.
    """
    command_line = [
      'xcrun', 'actool', '--output-format', 'human-readable-text',
      '--compress-pngs', '--notices', '--warnings', '--errors',
    ]
    is_iphone_target = 'IPHONEOS_DEPLOYMENT_TARGET' in os.environ
    if is_iphone_target:
      platform = os.environ['CONFIGURATION'].split('-')[-1]
      if platform not in ('iphoneos', 'iphonesimulator'):
        platform = 'iphonesimulator'
      command_line.extend([
          '--platform', platform, '--target-device', 'iphone',
          '--target-device', 'ipad', '--minimum-deployment-target',
          os.environ['IPHONEOS_DEPLOYMENT_TARGET'], '--compile',
          os.path.abspath(os.environ['CONTENTS_FOLDER_PATH']),
      ])
    else:
      command_line.extend([
          '--platform', 'macosx', '--target-device', 'mac',
          '--minimum-deployment-target', os.environ['MACOSX_DEPLOYMENT_TARGET'],
          '--compile',
          os.path.abspath(os.environ['UNLOCALIZED_RESOURCES_FOLDER_PATH']),
      ])
    if keys:
      keys = json.loads(keys)
      for key, value in keys.items():
        arg_name = '--' + key
        if isinstance(value, bool):
          if value:
            command_line.append(arg_name)
        elif isinstance(value, list):
          for v in value:
            command_line.append(arg_name)
            command_line.append(str(v))
        else:
          command_line.append(arg_name)
          command_line.append(str(value))
    # Note: actool crashes if inputs path are relative, so use os.path.abspath
    # to get absolute path name for inputs.
    command_line.extend(map(os.path.abspath, inputs))
    subprocess.check_call(command_line)

  def ExecMergeInfoPlist(self, output, *inputs):
    """Merge multiple .plist files into a single .plist file."""
    merged_plist = {}
    for path in inputs:
      plist = self._LoadPlistMaybeBinary(path)
      self._MergePlist(merged_plist, plist)
    plistlib.writePlist(merged_plist, output)

  def ExecCodeSignBundle(self, key, resource_rules, entitlements, provisioning):
    """Code sign a bundle.

    This function tries to code sign an iOS bundle, following the same
    algorithm as Xcode:
      1. copy ResourceRules.plist from the user or the SDK into the bundle,
      2. pick the provisioning profile that best match the bundle identifier,
         and copy it into the bundle as embedded.mobileprovision,
      3. copy Entitlements.plist from user or SDK next to the bundle,
      4. code sign the bundle.
    """
    resource_rules_path = self._InstallResourceRules(resource_rules)
    substitutions, overrides = self._InstallProvisioningProfile(
        provisioning, self._GetCFBundleIdentifier())
    entitlements_path = self._InstallEntitlements(
        entitlements, substitutions, overrides)
    subprocess.check_call([
        'codesign', '--force', '--sign', key, '--resource-rules',
        resource_rules_path, '--entitlements', entitlements_path,
        os.path.join(
            os.environ['TARGET_BUILD_DIR'],
            os.environ['FULL_PRODUCT_NAME'])])

  def _InstallResourceRules(self, resource_rules):
    """Installs ResourceRules.plist from user or SDK into the bundle.

    Args:
      resource_rules: string, optional, path to the ResourceRules.plist file
        to use, default to "\${SDKROOT}/ResourceRules.plist"

    Returns:
      Path to the copy of ResourceRules.plist into the bundle.
    """
    source_path = resource_rules
    target_path = os.path.join(
        os.environ['BUILT_PRODUCTS_DIR'],
        os.environ['CONTENTS_FOLDER_PATH'],
        'ResourceRules.plist')
    if not source_path:
      source_path = os.path.join(
          os.environ['SDKROOT'], 'ResourceRules.plist')
    shutil.copy2(source_path, target_path)
    return target_path

  def _InstallProvisioningProfile(self, profile, bundle_identifier):
    """Installs embedded.mobileprovision into the bundle.

    Args:
      profile: string, optional, short name of the .mobileprovision file
        to use, if empty or the file is missing, the best file installed
        will be used
      bundle_identifier: string, value of CFBundleIdentifier from Info.plist

    Returns:
      A tuple containing two dictionary: variables substitutions and values
      to overrides when generating the entitlements file.
    """
    source_path, provisioning_data, team_id = self._FindProvisioningProfile(
        profile, bundle_identifier)
    target_path = os.path.join(
        os.environ['BUILT_PRODUCTS_DIR'],
        os.environ['CONTENTS_FOLDER_PATH'],
        'embedded.mobileprovision')
    shutil.copy2(source_path, target_path)
    substitutions = self._GetSubstitutions(bundle_identifier, team_id + '.')
    return substitutions, provisioning_data['Entitlements']

  def _FindProvisioningProfile(self, profile, bundle_identifier):
    """Finds the .mobileprovision file to use for signing the bundle.

    Checks all the installed provisioning profiles (or if the user specified
    the PROVISIONING_PROFILE variable, only consult it) and select the most
    specific that correspond to the bundle identifier.

    Args:
      profile: string, optional, short name of the .mobileprovision file
        to use, if empty or the file is missing, the best file installed
        will be used
      bundle_identifier: string, value of CFBundleIdentifier from Info.plist

    Returns:
      A tuple of the path to the selected provisioning profile, the data of
      the embedded plist in the provisioning profile and the team identifier
      to use for code signing.

    Raises:
      SystemExit: if no .mobileprovision can be used to sign the bundle.
    """
    profiles_dir = os.path.join(
        os.environ['HOME'], 'Library', 'MobileDevice', 'Provisioning Profiles')
    if not os.path.isdir(profiles_dir):
      print('cannot find mobile provisioning for %s' % (bundle_identifier), file=sys.stderr)
      sys.exit(1)
    provisioning_profiles = None
    if profile:
      profile_path = os.path.join(profiles_dir, profile + '.mobileprovision')
      if os.path.exists(profile_path):
        provisioning_profiles = [profile_path]
    if not provisioning_profiles:
      provisioning_profiles = glob.glob(
          os.path.join(profiles_dir, '*.mobileprovision'))
    valid_provisioning_profiles = {}
    for profile_path in provisioning_profiles:
      profile_data = self._LoadProvisioningProfile(profile_path)
      app_id_pattern = profile_data.get(
          'Entitlements', {}).get('application-identifier', '')
      for team_identifier in profile_data.get('TeamIdentifier', []):
        app_id = '%s.%s' % (team_identifier, bundle_identifier)
        if fnmatch.fnmatch(app_id, app_id_pattern):
          valid_provisioning_profiles[app_id_pattern] = (
              profile_path, profile_data, team_identifier)
    if not valid_provisioning_profiles:
      print('cannot find mobile provisioning for %s' % (bundle_identifier), file=sys.stderr)
      sys.exit(1)
    # If the user has multiple provisioning profiles installed that can be
    # used for \${bundle_identifier}, pick the most specific one (ie. the
    # provisioning profile whose pattern is the longest).
    selected_key = max(valid_provisioning_profiles, key=lambda v: len(v))
    return valid_provisioning_profiles[selected_key]

  def _LoadProvisioningProfile(self, profile_path):
    """Extracts the plist embedded in a provisioning profile.

    Args:
      profile_path: string, path to the .mobileprovision file

    Returns:
      Content of the plist embedded in the provisioning profile as a dictionary.
    """
    with tempfile.NamedTemporaryFile() as temp:
      subprocess.check_call([
          'security', 'cms', '-D', '-i', profile_path, '-o', temp.name])
      return self._LoadPlistMaybeBinary(temp.name)

  def _MergePlist(self, merged_plist, plist):
    """Merge |plist| into |merged_plist|."""
    for key, value in plist.items():
      if isinstance(value, dict):
        merged_value = merged_plist.get(key, {})
        if isinstance(merged_value, dict):
          self._MergePlist(merged_value, value)
          merged_plist[key] = merged_value
        else:
          merged_plist[key] = value
      else:
        merged_plist[key] = value

  def _LoadPlistMaybeBinary(self, plist_path):
    """Loads into a memory a plist possibly encoded in binary format.

    This is a wrapper around plistlib.readPlist that tries to convert the
    plist to the XML format if it can't be parsed (assuming that it is in
    the binary format).

    Args:
      plist_path: string, path to a plist file, in XML or binary format

    Returns:
      Content of the plist as a dictionary.
    """
    try:
      # First, try to read the file using plistlib that only supports XML,
      # and if an exception is raised, convert a temporary copy to XML and
      # load that copy.
      return plistlib.readPlist(plist_path)
    except:
      pass
    with tempfile.NamedTemporaryFile() as temp:
      shutil.copy2(plist_path, temp.name)
      subprocess.check_call(['plutil', '-convert', 'xml1', temp.name])
      return plistlib.readPlist(temp.name)

  def _GetSubstitutions(self, bundle_identifier, app_identifier_prefix):
    """Constructs a dictionary of variable substitutions for Entitlements.plist.

    Args:
      bundle_identifier: string, value of CFBundleIdentifier from Info.plist
      app_identifier_prefix: string, value for AppIdentifierPrefix

    Returns:
      Dictionary of substitutions to apply when generating Entitlements.plist.
    """
    return {
      'CFBundleIdentifier': bundle_identifier,
      'AppIdentifierPrefix': app_identifier_prefix,
    }

  def _GetCFBundleIdentifier(self):
    """Extracts CFBundleIdentifier value from Info.plist in the bundle.

    Returns:
      Value of CFBundleIdentifier in the Info.plist located in the bundle.
    """
    info_plist_path = os.path.join(
        os.environ['TARGET_BUILD_DIR'],
        os.environ['INFOPLIST_PATH'])
    info_plist_data = self._LoadPlistMaybeBinary(info_plist_path)
    return info_plist_data['CFBundleIdentifier']

  def _InstallEntitlements(self, entitlements, substitutions, overrides):
    """Generates and install the \${BundleName}.xcent entitlements file.

    Expands variables "\$(variable)" pattern in the source entitlements file,
    add extra entitlements defined in the .mobileprovision file and the copy
    the generated plist to "\${BundlePath}.xcent".

    Args:
      entitlements: string, optional, path to the Entitlements.plist template
        to use, defaults to "\${SDKROOT}/Entitlements.plist"
      substitutions: dictionary, variable substitutions
      overrides: dictionary, values to add to the entitlements

    Returns:
      Path to the generated entitlements file.
    """
    source_path = entitlements
    target_path = os.path.join(
        os.environ['BUILT_PRODUCTS_DIR'],
        os.environ['PRODUCT_NAME'] + '.xcent')
    if not source_path:
      source_path = os.path.join(
          os.environ['SDKROOT'],
          'Entitlements.plist')
    shutil.copy2(source_path, target_path)
    data = self._LoadPlistMaybeBinary(target_path)
    data = self._ExpandVariables(data, substitutions)
    if overrides:
      for key in overrides:
        if key not in data:
          data[key] = overrides[key]
    plistlib.writePlist(data, target_path)
    return target_path

  def _ExpandVariables(self, data, substitutions):
    """Expands variables "\$(variable)" in data.

    Args:
      data: object, can be either string, list or dictionary
      substitutions: dictionary, variable substitutions to perform

    Returns:
      Copy of data where each references to "\$(variable)" has been replaced
      by the corresponding value found in substitutions, or left intact if
      the key was not found.
    """
    if isinstance(data, str):
      for key, value in substitutions.items():
        data = data.replace('\$(%s)' % key, value)
      return data
    if isinstance(data, list):
      return [self._ExpandVariables(v, substitutions) for v in data]
    if isinstance(data, dict):
      return {k: self._ExpandVariables(data[k], substitutions) for k in data}
    return data

if __name__ == '__main__':
  sys.exit(main(sys.argv[1:]))
`,
        "install.target.mk": `# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := install
### Generated for copy rule.
/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script/node_modules/node-report/api.node: TOOLSET := \$(TOOLSET)
/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script/node_modules/node-report/api.node: \$(builddir)/api.node FORCE_DO_CMD
	\$(call do_cmd,copy)

all_deps += /Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script/node_modules/node-report/api.node
binding_gyp_install_target_copies = /Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script/node_modules/node-report/api.node

### Rules for final target.
# Build our special outputs first.
\$(obj).target/install.stamp: | \$(binding_gyp_install_target_copies)

# Preserve order dependency of special output on deps.
\$(binding_gyp_install_target_copies): | \$(builddir)/api.node

\$(obj).target/install.stamp: TOOLSET := \$(TOOLSET)
\$(obj).target/install.stamp: \$(builddir)/api.node FORCE_DO_CMD
	\$(call do_cmd,touch)

all_deps += \$(obj).target/install.stamp
# Add target alias
.PHONY: install
install: \$(obj).target/install.stamp

# Add target alias to "all" target.
.PHONY: all
all: install

`
      },
      "index.js": `// Main module entry point for node-report

const api = require('./api');

// NODEREPORT_EVENTS env var overrides the defaults
const options = process.env.NODEREPORT_EVENTS || 'exception+fatalerror+signal+apicall';
api.setEvents(options);

exports.triggerReport = api.triggerReport;
exports.getReport = api.getReport;
exports.setEvents = api.setEvents;
exports.setSignal = api.setSignal;
exports.setFileName = api.setFileName;
exports.setDirectory = api.setDirectory;
exports.setVerbose = api.setVerbose;
`,
      "package.json": JSON.stringify({
        "_args": [
          [
            "node-report@2.2.11",
            "/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script"
          ]
        ],
        "_from": "node-report@2.2.11",
        "_id": "node-report@2.2.11",
        "_inBundle": false,
        "_integrity": "sha512-ec74uVCDYFB2+mBmiDfWR8jnqQqvqznUPp+NbID7eBFYczbWKJD948lTKpxhu1Vl7K7FiyXFmxjxhXgikaRn6Q==",
        "_location": "/node-report",
        "_phantomChildren": {},
        "_requested": {
          "type": "version",
          "registry": true,
          "raw": "node-report@2.2.11",
          "name": "node-report",
          "escapedName": "node-report",
          "rawSpec": "2.2.11",
          "saveSpec": null,
          "fetchSpec": "2.2.11"
        },
        "_requiredBy": [
          "/"
        ],
        "_resolved": "https://registry.npmjs.org/node-report/-/node-report-2.2.11.tgz",
        "_spec": "2.2.11",
        "_where": "/Users/bjenkins/workspace/arborist/test/fixtures/package-with-gyp-dependency-lacking-install-script",
        "bugs": {
          "url": "https://github.com/nodejs/node-report/issues"
        },
        "contributors": [
          {
            "name": "Richard Chamberlain",
            "email": "richard_chamberlain@uk.ibm.com",
            "url": "https://github.com/rnchamberlain"
          }
        ],
        "dependencies": {
          "nan": "^2.12.1"
        },
        "description": "Diagnostic Report for Node.js",
        "devDependencies": {
          "tap": "^12.7.0"
        },
        "engines": {
          "node": ">=4.0.0"
        },
        "gypfile": true,
        "homepage": "https://github.com/nodejs/node-report#readme",
        "license": "MIT",
        "name": "node-report",
        "repository": {
          "type": "git",
          "url": "git+https://github.com/nodejs/node-report.git"
        },
        "scripts": {
          "test": "tap --no-esm --timeout=300 test/test*.js"
        },
        "version": "2.2.11"
      }),
      "src": {
        "module.cc": `#include "node_report.h"

#include <sstream>

namespace nodereport {

// Internal/static function declarations
static void OnFatalError(const char* location, const char* message);
bool OnUncaughtException(v8::Isolate* isolate);
#ifdef _WIN32
static void PrintStackFromStackTrace(Isolate* isolate, FILE* fp);
#else  // signal trigger functions for Unix platforms and OSX
static void SignalDumpAsyncCallback(uv_async_t* handle);
inline void* ReportSignalThreadMain(void* unused);
static int StartWatchdogThread(void* (*thread_main)(void* unused));
static void RegisterSignalHandler(int signo, void (*handler)(int),
                                  struct sigaction* saved_sa);
static void RestoreSignalHandler(int signo, struct sigaction* saved_sa);
static void SignalDump(int signo);
static void SetupSignalHandler();
#endif

// Default node-report option settings
static unsigned int nodereport_events = NR_APICALL;
static unsigned int nodereport_verbose = 0;
#ifdef _WIN32  // signal trigger not supported on Windows
static unsigned int nodereport_signal = 0;
#else  // trigger signal supported on Unix platforms and OSX
static unsigned int nodereport_signal = SIGUSR2; // default signal is SIGUSR2
static int report_signal = 0;  // atomic for signal handling in progress
static uv_sem_t report_semaphore;  // semaphore for hand-off to watchdog
static uv_async_t nodereport_trigger_async;  // async handle for event loop
static uv_mutex_t node_isolate_mutex;  // mutex for watchdog thread
static struct sigaction saved_sa;  // saved signal action
#endif

// State variables for v8 hooks and signal initialisation
static bool exception_hook_initialised = false;
static bool error_hook_initialised = false;
static bool signal_thread_initialised = false;

static v8::Isolate* node_isolate;
extern std::string version_string;
extern std::string commandline_string;

/*******************************************************************************
 * External JavaScript API for triggering a report
 *
 ******************************************************************************/
NAN_METHOD(TriggerReport) {
  Nan::HandleScope scope;
  v8::Isolate* isolate = info.GetIsolate();
  char filename[NR_MAXNAME + 1] = "";
  MaybeLocal<Value> error;
  int err_index = 0;

  if (info[0]->IsString()) {
    // Filename parameter supplied
    Nan::Utf8String filename_parameter(info[0]);
    if (filename_parameter.length() < NR_MAXNAME) {
      snprintf(filename, sizeof(filename), "%s", *filename_parameter);
    } else {
      Nan::ThrowError("node-report: filename parameter is too long");
    }
    err_index++;
  }

  // We need to pass the JavaScript object so we can query it for a stack trace.
  if (info[err_index]->IsNativeError()) {
    error = info[err_index];
  }

  if (nodereport_events & NR_APICALL) {
    TriggerNodeReport(isolate, kJavaScript, "JavaScript API", __func__, filename, error);
    // Return value is the report filename
    info.GetReturnValue().Set(Nan::New(filename).ToLocalChecked());
  }
}

/*******************************************************************************
 * External JavaScript API for returning a report
 *
 ******************************************************************************/
NAN_METHOD(GetReport) {
  Nan::HandleScope scope;
  v8::Isolate* isolate = info.GetIsolate();
  std::ostringstream out;

  MaybeLocal<Value> error;
  if (info[0]->IsNativeError()) {
    error = info[0];
  }

  GetNodeReport(isolate, kJavaScript, "JavaScript API", __func__, error, out);
  // Return value is the contents of a report as a string.
  info.GetReturnValue().Set(Nan::New(out.str()).ToLocalChecked());
}

/*******************************************************************************
 * External JavaScript APIs for node-report configuration
 *
 ******************************************************************************/
NAN_METHOD(SetEvents) {
  Nan::Utf8String parameter(info[0]);
  v8::Isolate* isolate = info.GetIsolate();
  unsigned int previous_events = nodereport_events; // save previous settings
  nodereport_events = ProcessNodeReportEvents(*parameter);

  // If report newly requested for fatalerror, set up the V8 callback
  if ((nodereport_events & NR_FATALERROR) && (error_hook_initialised == false)) {
    isolate->SetFatalErrorHandler(OnFatalError);
    error_hook_initialised = true;
  }

  // If report newly requested for exceptions, tell V8 to capture stack trace and set up the callback
  if ((nodereport_events & NR_EXCEPTION) && (exception_hook_initialised == false)) {
    isolate->SetCaptureStackTraceForUncaughtExceptions(true, 32, v8::StackTrace::kDetailed);
    // The hook for uncaught exception won't get called unless the --abort_on_uncaught_exception option is set
    v8::V8::SetFlagsFromString("--abort_on_uncaught_exception", sizeof("--abort_on_uncaught_exception")-1);
    isolate->SetAbortOnUncaughtExceptionCallback(OnUncaughtException);
    exception_hook_initialised = true;
  }

#ifndef _WIN32
  // If report newly requested on external user signal set up watchdog thread and handler
  if ((nodereport_events & NR_SIGNAL) && (signal_thread_initialised == false)) {
    SetupSignalHandler();
  }
  // If report no longer required on external user signal, reset the OS signal handler
  if (!(nodereport_events & NR_SIGNAL) && (previous_events & NR_SIGNAL)) {
    RestoreSignalHandler(nodereport_signal, &saved_sa);
  }
#endif
}
NAN_METHOD(SetSignal) {
#ifndef _WIN32
  Nan::Utf8String parameter(info[0]);
  unsigned int previous_signal = nodereport_signal; // save previous setting
  nodereport_signal = ProcessNodeReportSignal(*parameter);

  // If signal event active and selected signal has changed, switch the OS signal handler
  if ((nodereport_events & NR_SIGNAL) && (nodereport_signal != previous_signal)) {
    RestoreSignalHandler(previous_signal, &saved_sa);
    RegisterSignalHandler(nodereport_signal, SignalDump, &saved_sa);
  }
#endif
}
NAN_METHOD(SetFileName) {
  Nan::Utf8String parameter(info[0]);
  ProcessNodeReportFileName(*parameter);
}
NAN_METHOD(SetDirectory) {
  Nan::Utf8String parameter(info[0]);
  ProcessNodeReportDirectory(*parameter);
}
NAN_METHOD(SetVerbose) {
  Nan::Utf8String parameter(info[0]);
  nodereport_verbose = ProcessNodeReportVerboseSwitch(*parameter);
}

/*******************************************************************************
 * Callbacks for triggering report on fatal error, uncaught exception and
 * external signals
 ******************************************************************************/
static void OnFatalError(const char* location, const char* message) {
  if (location) {
    fprintf(stderr, "FATAL ERROR: %s %s\\n", location, message);
  } else {
    fprintf(stderr, "FATAL ERROR: %s\\n", message);
  }
  // Trigger report if requested
  if (nodereport_events & NR_FATALERROR) {
    TriggerNodeReport(Isolate::GetCurrent(), kFatalError, message, location, nullptr, MaybeLocal<Value>());
  }
  fflush(stderr);
  raise(SIGABRT);
}

bool OnUncaughtException(v8::Isolate* isolate) {
  // Trigger report if requested
  if (nodereport_events & NR_EXCEPTION) {
    TriggerNodeReport(isolate, kException, "exception", __func__, nullptr, MaybeLocal<Value>());
  }
  if ((commandline_string.find("abort-on-uncaught-exception") != std::string::npos) ||
      (commandline_string.find("abort_on_uncaught_exception") != std::string::npos)) {
    return true;  // abort required
  }
  // On versions earlier than 5.4, V8 does not provide the default behaviour
  // for uncaught exception on return from this callback. Default behaviour is
  // to print a stack trace and exit with rc=1, so we need to mimic that here.
  int v8_major, v8_minor;
  if (sscanf(v8::V8::GetVersion(), "%d.%d", &v8_major, &v8_minor) == 2) {
    if (v8_major < 5 || (v8_major == 5 && v8_minor < 4)) {
      fprintf(stderr, "\\nUncaught exception at:\\n");
#ifdef _WIN32
      // On Windows, print the stack using StackTrace API
      PrintStackFromStackTrace(isolate, stderr);
#else
      // On other platforms use the Message API
      Message::PrintCurrentStackTrace(isolate, stderr);
#endif
      // exit direct from this callback with rc=1, to mimic V8 behaviour
      exit(1);
    }
  }
  return false;
}

#ifdef _WIN32
static void PrintStackFromStackTrace(Isolate* isolate, FILE* fp) {
  Local<StackTrace> stack = StackTrace::CurrentStackTrace(isolate, 255,
                                                          StackTrace::kDetailed);
  // Print the JavaScript function name and source information for each frame
  for (int i = 0; i < stack->GetFrameCount(); i++) {
    Local<StackFrame> frame = stack->GetFrame(
#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION >= 7)
                                              isolate,
#endif
                                              i);
    Nan::Utf8String fn_name_s(frame->GetFunctionName());
    Nan::Utf8String script_name(frame->GetScriptName());
    const int line_number = frame->GetLineNumber();
    const int column = frame->GetColumn();

    if (frame->IsEval()) {
      if (frame->GetScriptId() == Message::kNoScriptIdInfo) {
        fprintf(fp, "at [eval]:%i:%i\\n", line_number, column);
      } else {
        fprintf(fp, "at [eval] (%s:%i:%i)\\n", *script_name, line_number, column);
      }
    } else {
      if (fn_name_s.length() == 0) {
        fprintf(fp, "%s:%i:%i\\n", *script_name, line_number, column);
      } else {
        fprintf(fp, "%s (%s:%i:%i)\\n", *fn_name_s, *script_name, line_number, column);
      }
    }
  }
}
#else
// Signal handling functions, not supported on Windows
static void SignalDumpInterruptCallback(Isolate* isolate, void* data) {
  if (report_signal != 0) {
    if (nodereport_verbose) {
      fprintf(stdout, "node-report: SignalDumpInterruptCallback handling signal\\n");
    }
    if (nodereport_events & NR_SIGNAL) {
      if (nodereport_verbose) {
        fprintf(stdout, "node-report: SignalDumpInterruptCallback triggering report\\n");
      }
      TriggerNodeReport(isolate, kSignal_JS,
                        SignoString(report_signal), __func__, nullptr, MaybeLocal<Value>());
    }
    report_signal = 0;
  }
}
static void SignalDumpAsyncCallback(uv_async_t* handle) {
  if (report_signal != 0) {
    if (nodereport_verbose) {
      fprintf(stdout, "node-report: SignalDumpAsyncCallback handling signal\\n");
    }
    if (nodereport_events & NR_SIGNAL) {
      if (nodereport_verbose) {
        fprintf(stdout, "node-report: SignalDumpAsyncCallback triggering NodeReport\\n");
      }
      TriggerNodeReport(Isolate::GetCurrent(), kSignal_UV,
                        SignoString(report_signal), __func__, nullptr, MaybeLocal<Value>());
    }
    report_signal = 0;
  }
}

/*******************************************************************************
 * Utility functions for signal handling support (platforms except Windows)
 *  - RegisterSignalHandler() - register a raw OS signal handler
 *  - SignalDump() - implementation of raw OS signal handler
 *  - StartWatchdogThread() - create a watchdog thread
 *  - ReportSignalThreadMain() - implementation of watchdog thread
 *  - SetupSignalHandler() - initialisation of signal handlers and threads
 ******************************************************************************/
// Utility function to register an OS signal handler
static void RegisterSignalHandler(int signo, void (*handler)(int),
                                  struct sigaction* saved_sa) {
  struct sigaction sa;
  memset(&sa, 0, sizeof(sa));
  sa.sa_handler = handler;
  sigfillset(&sa.sa_mask);  // mask all signals while in the handler
  sigaction(signo, &sa, saved_sa);
}

// Utility function to restore an OS signal handler to its previous setting
static void RestoreSignalHandler(int signo, struct sigaction* saved_sa) {
  sigaction(signo, saved_sa, nullptr);
}

// Raw signal handler for triggering a report - runs on an arbitrary thread
static void SignalDump(int signo) {
  // Check atomic for report already pending, storing the signal number
  if (__sync_val_compare_and_swap(&report_signal, 0, signo) == 0) {
    uv_sem_post(&report_semaphore);  // Hand-off to watchdog thread
  }
}

// Utility function to start a watchdog thread - used for processing signals
static int StartWatchdogThread(void* (*thread_main)(void* unused)) {
  pthread_attr_t attr;
  pthread_attr_init(&attr);
  // Minimise the stack size, except on FreeBSD where the minimum is too low
#ifndef __FreeBSD__
  pthread_attr_setstacksize(&attr, PTHREAD_STACK_MIN);
#endif  // __FreeBSD__
  pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_DETACHED);

  sigset_t sigmask;
  sigfillset(&sigmask);
  pthread_sigmask(SIG_SETMASK, &sigmask, &sigmask);
  pthread_t thread;
  const int err = pthread_create(&thread, &attr, thread_main, nullptr);
  pthread_sigmask(SIG_SETMASK, &sigmask, nullptr);
  pthread_attr_destroy(&attr);
  if (err != 0) {
    fprintf(stderr, "node-report: StartWatchdogThread pthread_create() failed: %s\\n", strerror(err));
    fflush(stderr);
    return -err;
  }
  return 0;
}

// Watchdog thread implementation for signal-triggered report
inline void* ReportSignalThreadMain(void* unused) {
  for (;;) {
    uv_sem_wait(&report_semaphore);
    if (nodereport_verbose) {
      fprintf(stdout, "node-report: signal %s received\\n", SignoString(report_signal));
    }
    uv_mutex_lock(&node_isolate_mutex);
    if (auto isolate = node_isolate) {
      // Request interrupt callback for running JavaScript code
      isolate->RequestInterrupt(SignalDumpInterruptCallback, nullptr);
      // Event loop may be idle, so also request an async callback
      uv_async_send(&nodereport_trigger_async);
    }
    uv_mutex_unlock(&node_isolate_mutex);
  }
  return nullptr;
}

// Utility function to initialise signal handlers and threads
static void SetupSignalHandler() {
  int rc = uv_sem_init(&report_semaphore, 0);
  if (rc != 0) {
    fprintf(stderr, "node-report: initialization failed, uv_sem_init() returned %d\\n", rc);
    Nan::ThrowError("node-report: initialization failed, uv_sem_init() returned error\\n");
  }
  rc = uv_mutex_init(&node_isolate_mutex);
  if (rc != 0) {
    fprintf(stderr, "node-report: initialization failed, uv_mutex_init() returned %d\\n", rc);
    Nan::ThrowError("node-report: initialization failed, uv_mutex_init() returned error\\n");
  }

  if (StartWatchdogThread(ReportSignalThreadMain) == 0) {
    rc = uv_async_init(uv_default_loop(), &nodereport_trigger_async, SignalDumpAsyncCallback);
    if (rc != 0) {
      fprintf(stderr, "node-report: initialization failed, uv_async_init() returned %d\\n", rc);
      Nan::ThrowError("node-report: initialization failed, uv_async_init() returned error\\n");
    }
    uv_unref(reinterpret_cast<uv_handle_t*>(&nodereport_trigger_async));
    RegisterSignalHandler(nodereport_signal, SignalDump, &saved_sa);
    signal_thread_initialised = true;
  }
}
#endif

/*******************************************************************************
 * Native module initializer function, called when the module is require'd
 *
 ******************************************************************************/
NAN_MODULE_INIT(Initialize) {
  v8::Isolate* isolate = Isolate::GetCurrent();
  node_isolate = isolate;

  SetLoadTime();
  SetVersionString(isolate);
  SetCommandLine();

  const char* verbose_switch = secure_getenv("NODEREPORT_VERBOSE");
  if (verbose_switch != nullptr) {
    nodereport_verbose = ProcessNodeReportVerboseSwitch(verbose_switch);
  }
  const char* trigger_events = secure_getenv("NODEREPORT_EVENTS");
  if (trigger_events != nullptr) {
    nodereport_events = ProcessNodeReportEvents(trigger_events);
  }
  const char* trigger_signal = secure_getenv("NODEREPORT_SIGNAL");
  if (trigger_signal != nullptr) {
    nodereport_signal = ProcessNodeReportSignal(trigger_signal);
  }
  const char* report_name = secure_getenv("NODEREPORT_FILENAME");
  if (report_name != nullptr) {
    ProcessNodeReportFileName(report_name);
  }
  const char* directory_name = secure_getenv("NODEREPORT_DIRECTORY");
  if (directory_name != nullptr) {
    ProcessNodeReportDirectory(directory_name);
  }

  // If report requested for fatalerror, set up the V8 callback
  if (nodereport_events & NR_FATALERROR) {
    isolate->SetFatalErrorHandler(OnFatalError);
    error_hook_initialised = true;
  }

  // If report requested for exceptions, tell V8 to capture stack trace and set up the callback
  if (nodereport_events & NR_EXCEPTION) {
    isolate->SetCaptureStackTraceForUncaughtExceptions(true, 32, v8::StackTrace::kDetailed);
    // The hook for uncaught exception won't get called unless the --abort_on_uncaught_exception option is set
    v8::V8::SetFlagsFromString("--abort_on_uncaught_exception", sizeof("--abort_on_uncaught_exception")-1);
    isolate->SetAbortOnUncaughtExceptionCallback(OnUncaughtException);
    exception_hook_initialised = true;
  }

#ifndef _WIN32
  // If report requested on external user signal set up watchdog thread and callbacks
  if (nodereport_events & NR_SIGNAL) {
    SetupSignalHandler();
  }
#endif

  Nan::SetMethod(target, "triggerReport", TriggerReport);
  Nan::SetMethod(target, "getReport", GetReport);
  Nan::SetMethod(target, "setEvents", SetEvents);
  Nan::SetMethod(target, "setSignal", SetSignal);
  Nan::SetMethod(target, "setFileName", SetFileName);
  Nan::SetMethod(target, "setDirectory", SetDirectory);
  Nan::SetMethod(target, "setVerbose", SetVerbose);

  if (nodereport_verbose) {
#ifdef _WIN32
    fprintf(stdout, "node-report: initialization complete, event flags: %#x\\n",
            nodereport_events);
#else
    fprintf(stdout, "node-report: initialization complete, event flags: %#x signal flag: %#x\\n",
            nodereport_events, nodereport_signal);
#endif
  }
}

NODE_MODULE(nodereport, Initialize)

}  // namespace nodereport

`,
        "node_report.cc": `#include "node_report.h"
#include "v8.h"
#include "uv.h"

#include <fcntl.h>
#include <string.h>
#include <fstream>

#if !defined(_MSC_VER)
#include <strings.h>
#endif

#ifdef _WIN32
#include <Windows.h>
#include <process.h>
#include <dbghelp.h>
#include <Lm.h>
#include <tchar.h>
#include <psapi.h>
#else
#include <sys/resource.h>
// Get the standard printf format macros for C99 stdint types.
#ifndef __STDC_FORMAT_MACROS
#define __STDC_FORMAT_MACROS
#endif
#include <inttypes.h>
#include <cxxabi.h>
#include <dlfcn.h>
#if defined(__linux__) || defined(__sun)
#include <link.h>
#endif
#ifdef _AIX
#include <sys/ldr.h>  // ld_info structure
#endif
// Include execinfo.h for the native backtrace API. The API is unavailable on AIX
// and on some Linux distributions, e.g. Alpine Linux.
#if !defined(_AIX) && !(defined(__linux__) && !defined(__GLIBC__)) && !defined(__MVS__)
#include <execinfo.h>
#endif
#include <sys/utsname.h>
#endif

#ifdef __APPLE__
#include <mach-o/dyld.h>  // _dyld_get_image_name()
#endif

#ifndef _WIN32
extern char** environ;
#endif

#ifdef __MVS__
class __auto_ascii {
public:
  __auto_ascii();
  ~__auto_ascii();
};
extern "C" int backtrace(void **buffer, int size);
extern "C" char **backtrace_symbols(void *const *buffer, int size);
extern "C" void *__dlcb_next(void *last);
extern "C" int __dlcb_entry_name(char *buf, int size, void *dlcb);
extern "C" void *__dlcb_entry_addr(void *dlcb);
extern "C" int __find_file_in_path(char *out, int size, const char *envvar, const char *file);
#endif

namespace nodereport {

using v8::HeapSpaceStatistics;
using v8::HeapStatistics;
using v8::Isolate;
using v8::Local;
using v8::Message;
using v8::String;
using v8::V8;

// Internal/static function declarations
static void WriteNodeReport(Isolate* isolate, DumpEvent event, const char* message, const char* location, char* filename, std::ostream &out, MaybeLocal<Value> error, TIME_TYPE* time);
static void PrintCommandLine(std::ostream& out);
static void PrintVersionInformation(std::ostream& out);
static void PrintJavaScriptStack(std::ostream& out, Isolate* isolate, DumpEvent event, const char* location);
static void PrintJavaScriptErrorStack(std::ostream& out, Isolate* isolate, MaybeLocal<Value> error);
static void PrintStackFromStackTrace(std::ostream& out, Isolate* isolate, DumpEvent event);
static void PrintStackFrame(std::ostream& out, Isolate* isolate, Local<StackFrame> frame, int index, void* pc);
static void PrintNativeStack(std::ostream& out);
#ifndef _WIN32
static void PrintResourceUsage(std::ostream& out);
#endif
static void PrintGCStatistics(std::ostream& out, Isolate* isolate);
static void PrintSystemInformation(std::ostream& out, Isolate* isolate);
static void PrintLoadedLibraries(std::ostream& out, Isolate* isolate);

// Global variables
static int seq = 0;  // sequence number for report filenames
const char* v8_states[] = {"JS", "GC", "COMPILER", "OTHER", "EXTERNAL", "IDLE"};
static bool report_active = false; // recursion protection
char report_filename[NR_MAXNAME + 1] = "";
char report_directory[NR_MAXPATH + 1] = ""; // defaults to current working directory
std::string version_string = UNKNOWN_NODEVERSION_STRING;
std::string commandline_string = "";
TIME_TYPE loadtime_tm_struct; // module load time
time_t load_time; // module load time absolute


/*******************************************************************************
 * External function to trigger a node report, writing to file.
 *
 * The 'name' parameter is in/out: an input filename is used if supplied, and
 * the actual filename is returned.
 ******************************************************************************/
void TriggerNodeReport(Isolate* isolate, DumpEvent event, const char* message, const char* location, char* name, MaybeLocal<Value> error) {
  // Recursion check for report in progress, bail out
  if (report_active) return;
  report_active = true;

  // Obtain the current time and the pid (platform dependent)
  TIME_TYPE tm_struct;
#ifdef _WIN32
  GetLocalTime(&tm_struct);
  DWORD pid = GetCurrentProcessId();
#else  // UNIX, OSX
  struct timeval time_val;
  gettimeofday(&time_val, nullptr);
  localtime_r(&time_val.tv_sec, &tm_struct);
  pid_t pid = getpid();
#endif

  // Determine the required report filename. In order of priority:
  //   1) supplied on API 2) configured on startup 3) default generated
  char filename[NR_MAXNAME + 1] = "";
  if (name != nullptr && strlen(name) > 0) {
    // Filename was specified as API parameter, use that
    snprintf(filename, sizeof(filename), "%s", name);
  } else if (strlen(report_filename) > 0) {
    // File name was supplied via start-up option, use that
    snprintf(filename, sizeof(filename), "%s", report_filename);
  } else {
    // Construct the report filename, with timestamp, pid and sequence number
    snprintf(filename, sizeof(filename), "%s", "node-report");
    seq++;
#ifdef _WIN32
    snprintf(&filename[strlen(filename)], sizeof(filename) - strlen(filename),
             ".%4d%02d%02d.%02d%02d%02d.%d.%03d.txt",
             tm_struct.wYear, tm_struct.wMonth, tm_struct.wDay,
             tm_struct.wHour, tm_struct.wMinute, tm_struct.wSecond,
             pid, seq);
#else  // UNIX, OSX
    snprintf(&filename[strlen(filename)], sizeof(filename) - strlen(filename),
             ".%4d%02d%02d.%02d%02d%02d.%d.%03d.txt",
             tm_struct.tm_year+1900, tm_struct.tm_mon+1, tm_struct.tm_mday,
             tm_struct.tm_hour, tm_struct.tm_min, tm_struct.tm_sec,
             pid, seq);
#endif
  }

  // Open the report file stream for writing. Supports stdout/err, user-specified or (default) generated name
#ifdef __MVS__
  __auto_ascii _a;
#endif
  std::ofstream outfile;
  std::ostream* outstream = &std::cout;
  if (!strncmp(filename, "stdout", sizeof("stdout") - 1)) {
    outstream = &std::cout;
  } else if (!strncmp(filename, "stderr", sizeof("stderr") - 1)) {
    outstream = &std::cerr;
  } else {
    // Regular file. Append filename to directory path if one was specified
    if (strlen(report_directory) > 0) {
      char pathname[NR_MAXPATH + NR_MAXNAME + 1] = "";
#ifdef _WIN32
      snprintf(pathname, sizeof(pathname), "%s%s%s", report_directory, "\\\\", filename);
#else
      snprintf(pathname, sizeof(pathname), "%s%s%s", report_directory, "/", filename);
#endif
      outfile.open(pathname, std::ios::out);
    } else {
      outfile.open(filename, std::ios::out);
    }
    // Check for errors on the file open
    if (!outfile.is_open()) {
      if (strlen(report_directory) > 0) {
        std::cerr << "\\nFailed to open Node.js report file: " << filename << " directory: " << report_directory << " (errno: " << errno << ")\\n";
      } else {
        std::cerr << "\\nFailed to open Node.js report file: " << filename << " (errno: " << errno << ")\\n";
      }
      return;
    } else {
      std::cerr << "\\nWriting Node.js report to file: " << filename << "\\n";
    }
  }

  // Pass our stream about by reference, not by copying it.
  std::ostream &out = outfile.is_open() ? outfile : *outstream;

  WriteNodeReport(isolate, event, message, location, filename, out, error, &tm_struct);

  // Do not close stdout/stderr, only close files we opened.
  if(outfile.is_open()) {
    outfile.close();
  }

  std::cerr << "Node.js report completed\\n";
  if (name != nullptr) {
    snprintf(name, NR_MAXNAME + 1, "%s", filename);  // return the report file name
  }

}

/*******************************************************************************
 * External function to trigger a node report, writing to a supplied stream.
 *
 *******************************************************************************/
void GetNodeReport(Isolate* isolate, DumpEvent event, const char* message, const char* location, MaybeLocal<Value> error, std::ostream& out) {
  // Obtain the current time and the pid (platform dependent)
  TIME_TYPE tm_struct;
#ifdef _WIN32
  GetLocalTime(&tm_struct);
#else  // UNIX, OSX
  struct timeval time_val;
  gettimeofday(&time_val, nullptr);
  localtime_r(&time_val.tv_sec, &tm_struct);
#endif
  WriteNodeReport(isolate, event, message, location, nullptr, out, error, &tm_struct);
}

/*******************************************************************************
 * Internal function to coordinate and write the various sections of the node
 * report to the supplied stream
 *******************************************************************************/
static void WriteNodeReport(Isolate* isolate, DumpEvent event, const char* message, const char* location, char* filename, std::ostream &out, MaybeLocal<Value> error, TIME_TYPE* tm_struct) {

#ifdef _WIN32
  DWORD pid = GetCurrentProcessId();
#else  // UNIX, OSX
  pid_t pid = getpid();
#endif

  // Save formatting for output stream.
  std::ios oldState(nullptr);
  oldState.copyfmt(out);

  // File stream opened OK, now start printing the report content, starting with the title
  // and header information (event, filename, timestamp and pid)
  out << "================================================================================\\n";
  out << "==== Node Report ===============================================================\\n";
  out << "\\nEvent: " << message << ", location: \\"" << location << "\\"\\n";
  if( filename != nullptr ) {
    out << "Filename: " << filename << "\\n";
  }

  // Print dump event and module load date/time stamps
  char timebuf[64];
#ifdef _WIN32
  snprintf(timebuf, sizeof(timebuf), "%4d/%02d/%02d %02d:%02d:%02d",
          tm_struct->wYear, tm_struct->wMonth, tm_struct->wDay,
          tm_struct->wHour, tm_struct->wMinute, tm_struct->wSecond);
  out << "Dump event time:  "<< timebuf << "\\n";
  snprintf(timebuf, sizeof(timebuf), "%4d/%02d/%02d %02d:%02d:%02d",
          loadtime_tm_struct.wYear, loadtime_tm_struct.wMonth, loadtime_tm_struct.wDay,
          loadtime_tm_struct.wHour, loadtime_tm_struct.wMinute, loadtime_tm_struct.wSecond);
  out << "Module load time: " << timebuf << "\\n";
#else  // UNIX, OSX
  snprintf(timebuf, sizeof(timebuf), "%4d/%02d/%02d %02d:%02d:%02d",
          tm_struct->tm_year+1900, tm_struct->tm_mon+1, tm_struct->tm_mday,
          tm_struct->tm_hour, tm_struct->tm_min, tm_struct->tm_sec);
  out << "Dump event time:  "<< timebuf << "\\n";
      snprintf(timebuf, sizeof(timebuf), "%4d/%02d/%02d %02d:%02d:%02d",
          loadtime_tm_struct.tm_year+1900, loadtime_tm_struct.tm_mon+1, loadtime_tm_struct.tm_mday,
          loadtime_tm_struct.tm_hour, loadtime_tm_struct.tm_min, loadtime_tm_struct.tm_sec);
  out << "Module load time: " << timebuf << "\\n";
#endif
  // Print native process ID
  out << "Process ID: " << pid << std::endl;


  // Print out the command line.
  PrintCommandLine(out);
  out << std::flush;

  // Print Node.js and OS version information
  PrintVersionInformation(out);
  out << std::flush;

// Print summary JavaScript stack backtrace
  PrintJavaScriptStack(out, isolate, event, location);
  out << std::flush;

  // Print native stack backtrace
  PrintNativeStack(out);
  out << std::flush;

  // Print the stack trace and message from the Error object.
  // (If one was provided.)
  PrintJavaScriptErrorStack(out, isolate, error);
  out << std::flush;

  // Print V8 Heap and Garbage Collector information
  PrintGCStatistics(out, isolate);
  out << std::flush;

  // Print OS and current thread resource usage
#ifndef _WIN32
  PrintResourceUsage(out);
  out << std::flush;
#endif

  // Print libuv handle summary
  out << "\\n================================================================================";
  out << "\\n==== Node.js libuv Handle Summary ==============================================\\n";
  out << "\\n(Flags: R=Ref, A=Active)\\n";
  out << std::left << std::setw(7) << "Flags" << std::setw(10) << "Type"
      << std::setw(4 + 2 * sizeof(void*)) << "Address" << "Details"
      << std::endl;
  uv_walk(uv_default_loop(), walkHandle, (void*)&out);

  // Print operating system information
  PrintSystemInformation(out, isolate);

  out << "\\n================================================================================\\n";
  out << std::flush;

  // Restore output stream formatting.
  out.copyfmt(oldState);

  report_active = false;
}

/*******************************************************************************
 * Function to print process command line.
 *
 ******************************************************************************/
static void PrintCommandLine(std::ostream& out) {
  if (commandline_string != "") {
    out << "Command line: " << commandline_string << "\\n";
  }
}

/*******************************************************************************
 * Function to print Node.js version, OS version and machine information
 *
 ******************************************************************************/
static void PrintVersionInformation(std::ostream& out) {

  // Print Node.js and deps component versions
  out << "\\n" << version_string;

  // Print node-report module version
  // e.g. node-report version: 1.0.6 (built against Node.js v6.9.1)
  out << std::endl << "node-report version: " << NODEREPORT_VERSION
      << " (built against Node.js v" << NODE_VERSION_STRING;
#if defined(__GLIBC__)
  out << ", glibc " << __GLIBC__ << "." << __GLIBC_MINOR__;
#endif
  // Print Process word size
  out << ", " << sizeof(void *) * 8 << " bit" << ")" << std::endl;

  // Print operating system and machine information (Windows)
#ifdef _WIN32
  {
    const DWORD level = 101;
    LPSERVER_INFO_101 os_info = NULL;
    NET_API_STATUS nStatus = NetServerGetInfo(NULL, level, (LPBYTE *)&os_info);
    if (nStatus == NERR_Success) {
      LPSTR os_name = "Windows";
      const DWORD major = os_info->sv101_version_major & MAJOR_VERSION_MASK;
      const DWORD type = os_info->sv101_type;
      const bool isServer = (type & SV_TYPE_DOMAIN_CTRL) ||
                            (type & SV_TYPE_DOMAIN_BAKCTRL) ||
                            (type & SV_TYPE_SERVER_NT);
      switch (major) {
        case 5:
          switch (os_info->sv101_version_minor) {
            case 0:
              os_name = "Windows 2000";
              break;
            default:
              os_name = (isServer ? "Windows Server 2003" : "Windows XP");
          }
          break;
        case 6:
          switch (os_info->sv101_version_minor) {
            case 0:
              os_name = (isServer ? "Windows Server 2008" : "Windows Vista");
              break;
            case 1:
              os_name = (isServer ? "Windows Server 2008 R2" : "Windows 7");
              break;
            case 2:
              os_name = (isServer ? "Windows Server 2012" : "Windows 8");
              break;
            case 3:
              os_name = (isServer ? "Windows Server 2012 R2" : "Windows 8.1");
              break;
            default:
              os_name = (isServer ? "Windows Server" : "Windows Client");
          }
          break;
        case 10:
          os_name = (isServer ? "Windows Server 2016" : "Windows 10");
          break;
        default:
          os_name = (isServer ? "Windows Server" : "Windows Client");
      }
      out <<  "\\nOS version: " << os_name << "\\n";

      // Convert and print the machine name and comment fields (these are LPWSTR types)
      size_t count;
      char name_buf[256];
      wcstombs_s(&count, name_buf, sizeof(name_buf), os_info->sv101_name, _TRUNCATE);
      if (os_info->sv101_comment != NULL) {
        char comment_buf[256];
        wcstombs_s(&count, comment_buf, sizeof(comment_buf), os_info->sv101_comment, _TRUNCATE);
        out << "\\nMachine: " << name_buf << " " << comment_buf << "\\n";
      } else {
        out << "\\nMachine: " << name_buf << "\\n";
      }

      if (os_info != NULL) {
        NetApiBufferFree(os_info);
      }
    } else {
      // NetServerGetInfo() call failed, fallback to use GetComputerName() instead
      TCHAR machine_name[256];
      DWORD machine_name_size = 256;
      out << "\\nOS version: Windows\\n";
      if (GetComputerName(machine_name, &machine_name_size)) {
        out << "\\nMachine: " << machine_name << "\\n";
      }
    }
  }
#else
  // Print operating system and machine information (Unix/OSX)
  struct utsname os_info;
  if (uname(&os_info) >= 0) {
#if defined(_AIX)
    out << "\\nOS version: " << os_info.sysname << " " << os_info.version << "."
        << os_info.release << "\\n";
#else
    out << "\\nOS version: " << os_info.sysname << " " << os_info.release << " "
        << os_info.version << "\\n";
#endif
#if defined(__MVS__)
    char *r;
    __asm(" llgt %0,1208 \\n"
          " lg   %0,88(%0) \\n"
          " lg   %0,8(%0) \\n"
          " lg   %0,984(%0) \\n"
          : "=r"(r)::);
    if (r != NULL) {
      const char *prod = (int)r[80]==4 ? " (MVS LE)" : "";
      out << "\\nProduct " << (int)r[80] << prod << " Version " << (int)r[81] << " Release " << (int)r[82] << " Modification " << (int)r[83] << std::endl;
    }
    char hn[256];
    memset(hn,0,sizeof(hn));
    gethostname(hn,sizeof(hn));
    out <<  "\\nMachine: " << hn << " " << os_info.nodename << " " << os_info.machine << "\\n";
#else
    const char *(*libc_version)();
    *(void**)(&libc_version) = dlsym(RTLD_DEFAULT, "gnu_get_libc_version");
    if (libc_version != NULL) {
      out << "(glibc: " << (*libc_version)() << ")" << std::endl;
    }
#if defined(_AIX)
    char hn[256];
    memset(hn,0,sizeof(hn));
    gethostname(hn,sizeof(hn));
    out <<  "\\nMachine: " << hn << " " << os_info.nodename << " " << os_info.machine << "\\n";
#else
    out <<  "\\nMachine: " << os_info.nodename << " " << os_info.machine << "\\n";
#endif
#endif
  }
#endif
}

/*******************************************************************************
 * Function to print the JavaScript stack, if available
 *
 ******************************************************************************/
static void PrintJavaScriptStack(std::ostream& out, Isolate* isolate, DumpEvent event, const char* location) {
  out << "\\n================================================================================";
  out << "\\n==== JavaScript Stack Trace ====================================================\\n\\n";

#ifdef _WIN32
  switch (event) {
  case kFatalError:
    // Stack trace on fatal error not supported on Windows
    out << "No stack trace available\\n";
    break;
  default:
    // All other events, print the stack using StackTrace::StackTrace() and GetStackSample() APIs
    PrintStackFromStackTrace(out, isolate, event);
    break;
  }  // end switch(event)
#else  // Unix, OSX
  switch (event) {
  case kException:
  case kJavaScript: {
    // Print the stack using Message::PrintCurrentStackTrace() API
    std::FILE *stack_fp = std::tmpfile();
    if (stack_fp != nullptr) {
      char stack_buf[64];
      Message::PrintCurrentStackTrace(isolate, stack_fp);
      std::fflush(stack_fp);
      std::rewind(stack_fp);
      while (std::fgets(stack_buf, sizeof(stack_buf), stack_fp) != nullptr) {
        out << stack_buf;
      }
      // Calling close on a file from tmpfile *should* delete it.
      std::fclose(stack_fp);
    } else {
      out << "No stack trace available, unable to create temporary file\\n";
    }
    break;
  }
  case kFatalError:
    out << "No stack trace available\\n";
    break;
  case kSignal_JS:
  case kSignal_UV:
    // Print the stack using StackTrace::StackTrace() and GetStackSample() APIs
    PrintStackFromStackTrace(out, isolate, event);
    break;
  }  // end switch(event)
#endif
}

/*******************************************************************************
 * Function to print a JavaScript stack from an error object
 *
 ******************************************************************************/
static void PrintJavaScriptErrorStack(std::ostream& out, Isolate* isolate, MaybeLocal<Value> error) {
  if (error.IsEmpty() || !error.ToLocalChecked()->IsNativeError()) {
    return;
  }

  out << "\\n================================================================================";
  out << "\\n==== JavaScript Exception Details ==============================================\\n\\n";
#if NODE_MAJOR_VERSION > 5
  Local<Message> message = v8::Exception::CreateMessage(isolate, error.ToLocalChecked());
#else
  Local<Message> message = v8::Exception::CreateMessage(error.ToLocalChecked());
#endif
  Nan::Utf8String message_str(message->Get());

  out << *message_str << "\\n\\n";

  Local<StackTrace> stack = v8::Exception::GetStackTrace(error.ToLocalChecked());
  if (stack.IsEmpty()) {
     out << "No stack trace available from Exception::GetStackTrace()\\n";
     return;
  }
  // Print the stack trace, samples are not available as the exception isn't from the current stack.
  for (int i = 0; i < stack->GetFrameCount(); i++) {
    PrintStackFrame(out, isolate, stack->GetFrame(
#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION >= 7)
                                                  isolate,
#endif
                                                  i), i, nullptr);
  }
}

/*******************************************************************************
 * Function to print stack using GetStackSample() and StackTrace::StackTrace()
 *
 ******************************************************************************/
static void PrintStackFromStackTrace(std::ostream& out, Isolate* isolate, DumpEvent event) {
  v8::RegisterState state;
  v8::SampleInfo info;
  void* samples[255];

  // Initialise the register state
  state.pc = nullptr;
  state.fp = &state;
  state.sp = &state;

  isolate->GetStackSample(state, samples, arraysize(samples), &info);
  if (static_cast<size_t>(info.vm_state) < arraysize(v8_states)) {
    out << "JavaScript VM state: " << v8_states[info.vm_state] << "\\n\\n";
  } else {
    out << "JavaScript VM state: <unknown>\\n\\n";
  }
  if (event == kSignal_UV) {
    out << "Signal received when event loop idle, no stack trace available\\n";
    return;
  }
  Local<StackTrace> stack = StackTrace::CurrentStackTrace(isolate, 255, StackTrace::kDetailed);
  if (stack.IsEmpty()) {
    out << "\\nNo stack trace available from StackTrace::CurrentStackTrace()\\n";
    return;
  }
  // Print the stack trace, adding in the pc values from GetStackSample() if available
  for (int i = 0; i < stack->GetFrameCount(); i++) {
    if (static_cast<size_t>(i) < info.frames_count) {
      PrintStackFrame(out, isolate, stack->GetFrame(
#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION >= 7)
                                                    isolate,
#endif
                                                    i), i, samples[i]);
    } else {
      PrintStackFrame(out, isolate, stack->GetFrame(
#if defined(V8_MAJOR_VERSION) && (V8_MAJOR_VERSION >= 7)
                                                    isolate,
#endif
                                                    i), i, nullptr);
    }
  }
}

/*******************************************************************************
 * Function to print a JavaScript stack frame from a V8 StackFrame object
 *
 ******************************************************************************/
static void PrintStackFrame(std::ostream& out, Isolate* isolate, Local<StackFrame> frame, int i, void* pc) {
  Nan::Utf8String fn_name_s(frame->GetFunctionName());
  Nan::Utf8String script_name(frame->GetScriptName());
  const int line_number = frame->GetLineNumber();
  const int column = frame->GetColumn();
  char buf[64];

  // First print the frame index and the instruction address
  if (pc != nullptr) {
#ifdef _WIN32
    snprintf( buf, sizeof(buf), "%2d: [pc=0x%p] ", i, pc);
#else
    snprintf( buf, sizeof(buf), "%2d: [pc=%p] ", i, pc);
#endif
    out << buf;
  }

  // Now print the JavaScript function name and source information
  if (frame->IsEval()) {
    if (frame->GetScriptId() == Message::kNoScriptIdInfo) {
      out << "at [eval]:" << line_number << ":" << column << "\\n";
    } else {
      out << "at [eval] (" << *script_name << ":" << line_number << ":"
          << column << ")\\n";
    }
    return;
  }

  if (fn_name_s.length() == 0) {
    out << *script_name << ":" << line_number << ":" << column << "\\n";
  } else {
    if (frame->IsConstructor()) {
      out << *fn_name_s << " [constructor] (" << *script_name << ":"
          << line_number << ":" << column << ")\\n";
    } else {
      out << *fn_name_s << " (" << *script_name << ":" << line_number << ":"
          << column << ")\\n";
    }
  }
}


#ifdef _WIN32
/*******************************************************************************
 * Function to print a native stack backtrace
 *
 ******************************************************************************/
void PrintNativeStack(std::ostream& out) {
  void* frames[64];
  out << "\\n================================================================================";
  out << "\\n==== Native Stack Trace ========================================================\\n\\n";

  HANDLE hProcess = GetCurrentProcess();
  SymSetOptions(SYMOPT_LOAD_LINES | SYMOPT_UNDNAME | SYMOPT_DEFERRED_LOADS);
  SymInitialize(hProcess, nullptr, TRUE);
  char buf[64];

  WORD numberOfFrames = CaptureStackBackTrace(2, 64, frames, nullptr);

  // Walk the frames printing symbolic information if available
  for (int i = 0; i < numberOfFrames; i++) {
    DWORD64 dwOffset64 = 0;
    DWORD64 dwAddress = reinterpret_cast<DWORD64>(frames[i]);
    char buffer[sizeof(SYMBOL_INFO) + MAX_SYM_NAME * sizeof(TCHAR)];
    PSYMBOL_INFO pSymbol = reinterpret_cast<PSYMBOL_INFO>(buffer);
    pSymbol->SizeOfStruct = sizeof(SYMBOL_INFO);
    pSymbol->MaxNameLen = MAX_SYM_NAME;

    if (SymFromAddr(hProcess, dwAddress, &dwOffset64, pSymbol)) {
      DWORD dwOffset = 0;
      IMAGEHLP_LINE64 line;
      line.SizeOfStruct = sizeof(line);
      snprintf(buf, sizeof(buf), "%2d: [pc=0x%p]", i, reinterpret_cast<void*>(pSymbol->Address));
      out << buf << " " << pSymbol->Name << " [+";
      if (SymGetLineFromAddr64(hProcess, dwAddress, &dwOffset, &line)) {
        out <<  dwOffset << "] in " << line.FileName << ": line: " << line.LineNumber << "\\n";
      } else {
        out << dwOffset64 << "]\\n";
      }
    } else { // SymFromAddr() failed, just print the address
      snprintf(buf, sizeof(buf), "%2d: [pc=0x%p]\\n", i, reinterpret_cast<void*>(dwAddress));
      out << buf;
    }
  }
}
#elif _AIX
/*******************************************************************************
 * Function to print a native stack backtrace - AIX
 *
 ******************************************************************************/
void PrintNativeStack(std::ostream& out) {
  out << "\\n================================================================================";
  out << "\\n==== Native Stack Trace ========================================================\\n\\n";
  out << "Native stack trace not supported on AIX\\n";
}
#elif (defined(__linux__) && !defined(__GLIBC__))
/*******************************************************************************
 * Function to print a native stack backtrace - Alpine Linux etc
 *
 ******************************************************************************/
void PrintNativeStack(std::ostream& out) {
  out << "\\n================================================================================";
  out << "\\n==== Native Stack Trace ========================================================\\n\\n";
  out << "Native stack trace not supported on Linux platforms without GLIBC\\n";
}
#else
/*******************************************************************************
 * Function to print a native stack backtrace - Linux/OSX
 *
 ******************************************************************************/
void PrintNativeStack(std::ostream& out) {
  void* frames[256];
  char buf[64];
  out << "\\n================================================================================";
  out << "\\n==== Native Stack Trace ========================================================\\n\\n";

  // Get the native backtrace (array of instruction addresses)
  const int size = backtrace(frames, arraysize(frames));
  if (size <= 0) {
    out << "Native backtrace failed, error " << size << "\\n";
    return;
  } else if (size <=2) {
    out << "No frames to print\\n";
    return;
  }

#ifdef __MVS__
  char **res = backtrace_symbols(frames, size);
  if (!res)
    return;
  for (int i = 0; i < size; i++) {
    // print traceback symbols and addresses
    out << res[i] << std::endl;
  }
  free(res);
#else
  // Print the native frames, omitting the top 3 frames as they are in node-report code
  // backtrace_symbols_fd(frames, size, fileno(fp));
  for (int i = 2; i < size; i++) {
    // print frame index and instruction address
    snprintf(buf, sizeof(buf), "%2d: [pc=%p] ", i-2, frames[i]);
    out << buf;
    // If we can translate the address using dladdr() print additional symbolic information
    Dl_info info;
    if (dladdr(frames[i], &info)) {
      if (info.dli_sname != nullptr) {
        if (char* demangled = abi::__cxa_demangle(info.dli_sname, 0, 0, 0)) {
          out << demangled; // print demangled symbol name
          free(demangled);
        } else {
          out << info.dli_sname; // just print the symbol name
        }
      }
      if (info.dli_fname != nullptr) {
        out << " [" << info.dli_fname << "]"; // print shared object name
      }
    }
    out << std::endl;
  }
#endif
}
#endif

/*******************************************************************************
 * Function to print V8 JavaScript heap information.
 *
 * This uses the existing V8 HeapStatistics and HeapSpaceStatistics APIs.
 * The isolate->GetGCStatistics(&heap_stats) internal V8 API could potentially
 * provide some more useful information - the GC history and the handle counts
 ******************************************************************************/
static void PrintGCStatistics(std::ostream& out, Isolate* isolate) {
  HeapStatistics v8_heap_stats;
  isolate->GetHeapStatistics(&v8_heap_stats);

  out << "\\n================================================================================";
  out << "\\n==== JavaScript Heap and Garbage Collector =====================================\\n";
  HeapSpaceStatistics v8_heap_space_stats;
  // Loop through heap spaces
  for (size_t i = 0; i < isolate->NumberOfHeapSpaces(); i++) {
    isolate->GetHeapSpaceStatistics(&v8_heap_space_stats, i);
    out << "\\nHeap space name: " << v8_heap_space_stats.space_name();
    out << "\\n    Memory size: ";
    WriteInteger(out, v8_heap_space_stats.space_size());
    out << " bytes, committed memory: ";
    WriteInteger(out, v8_heap_space_stats.physical_space_size());
    out << " bytes\\n    Capacity: ";
    WriteInteger(out, v8_heap_space_stats.space_used_size() +
                           v8_heap_space_stats.space_available_size());
    out << " bytes, used: ";
    WriteInteger(out, v8_heap_space_stats.space_used_size());
    out << " bytes, available: ";
    WriteInteger(out, v8_heap_space_stats.space_available_size());
    out << " bytes";
  }

  out << "\\n\\nTotal heap memory size: ";
  WriteInteger(out, v8_heap_stats.total_heap_size());
  out << " bytes\\nTotal heap committed memory: ";
  WriteInteger(out, v8_heap_stats.total_physical_size());
  out << " bytes\\nTotal used heap memory: ";
  WriteInteger(out, v8_heap_stats.used_heap_size());
  out << " bytes\\nTotal available heap memory: ";
  WriteInteger(out, v8_heap_stats.total_available_size());
  out << " bytes\\n\\nHeap memory limit: ";
  WriteInteger(out, v8_heap_stats.heap_size_limit());
  out << "\\n";
}

#ifndef _WIN32
/*******************************************************************************
 * Function to print resource usage (Linux/OSX only).
 *
 ******************************************************************************/
static void PrintResourceUsage(std::ostream& out) {
  char buf[64];
  double cpu_abs;
  double cpu_percentage;
  time_t current_time; // current time absolute
  time(&current_time);
  auto uptime = difftime(current_time, load_time);
  if (uptime == 0)
    uptime = 1; // avoid division by zero.
  out << "\\n================================================================================";
  out << "\\n==== Resource Usage ============================================================\\n";

  // Process and current thread usage statistics
  struct rusage stats;
  out << "\\nProcess total resource usage:";
  if (getrusage(RUSAGE_SELF, &stats) == 0) {
#if defined(__APPLE__) || defined(_AIX) || defined(__MVS__)
    snprintf( buf, sizeof(buf), "%ld.%06d", stats.ru_utime.tv_sec, stats.ru_utime.tv_usec);
    out << "\\n  User mode CPU: " << buf << " secs";
    snprintf( buf, sizeof(buf), "%ld.%06d", stats.ru_stime.tv_sec, stats.ru_stime.tv_usec);
    out << "\\n  Kernel mode CPU: " << buf << " secs";
#else
    snprintf( buf, sizeof(buf), "%ld.%06ld", stats.ru_utime.tv_sec, stats.ru_utime.tv_usec);
    out << "\\n  User mode CPU: " << buf << " secs";
    snprintf( buf, sizeof(buf), "%ld.%06ld", stats.ru_stime.tv_sec, stats.ru_stime.tv_usec);
    out << "\\n  Kernel mode CPU: " << buf << " secs";
#endif
    cpu_abs = stats.ru_utime.tv_sec + 0.000001 * stats.ru_utime.tv_usec + stats.ru_stime.tv_sec + 0.000001 *  stats.ru_stime.tv_usec;
    cpu_percentage = (cpu_abs / uptime) * 100.0;
    out << "\\n  Average CPU Consumption : "<< cpu_percentage << "%";
    out << "\\n  Maximum resident set size: ";
#if !defined(__MVS__)
    WriteInteger(out, stats.ru_maxrss * 1024);
    out << " bytes\\n  Page faults: " << stats.ru_majflt << " (I/O required) "
        << stats.ru_minflt << " (no I/O required)";
    out << "\\n  Filesystem activity: " << stats.ru_inblock << " reads "
        <<  stats.ru_oublock << " writes";
#endif
  }
#ifdef RUSAGE_THREAD
  out << "\\n\\nEvent loop thread resource usage:";
  memset(&stats, 0, sizeof(stats));
  if (getrusage(RUSAGE_THREAD, &stats) == 0) {
#if defined(__APPLE__) || defined(_AIX)
    snprintf( buf, sizeof(buf), "%ld.%06d", stats.ru_utime.tv_sec, stats.ru_utime.tv_usec);
    out << "\\n  User mode CPU: " << buf << " secs";
    snprintf( buf, sizeof(buf), "%ld.%06d", stats.ru_stime.tv_sec, stats.ru_stime.tv_usec);
    out << "\\n  Kernel mode CPU: " << buf << " secs";
#else
    snprintf( buf, sizeof(buf), "%ld.%06ld", stats.ru_utime.tv_sec, stats.ru_utime.tv_usec);
    out << "\\n  User mode CPU: " << buf << " secs";
    snprintf( buf, sizeof(buf), "%ld.%06ld", stats.ru_stime.tv_sec, stats.ru_stime.tv_usec);
    out << "\\n  Kernel mode CPU: " << buf << " secs";
#endif
    cpu_abs = stats.ru_utime.tv_sec + 0.000001 * stats.ru_utime.tv_usec + stats.ru_stime.tv_sec + 0.000001 * stats.ru_stime.tv_usec;
    cpu_percentage = (cpu_abs / uptime) * 100.0;
    out << "\\n  Average CPU Consumption : " << cpu_percentage << "%";
    out << "\\n  Filesystem activity: " << stats.ru_inblock << " reads "
        << stats.ru_oublock << " writes";
  }
#elif defined(__APPLE__)
  // Currently RUSAGE_THREAD is not currently supported on Mac.
  mach_msg_type_number_t count = THREAD_BASIC_INFO_COUNT;
  mach_port_t thread = pthread_mach_thread_np(pthread_self());
  thread_basic_info thr_info;

  kern_return_t rc = thread_info(thread, THREAD_BASIC_INFO, (thread_info_t) &thr_info, &count);

  if (rc == KERN_SUCCESS) {
    out << "\\n\\nEvent loop thread resource usage:";
    snprintf( buf, sizeof(buf), "%d.%06d", thr_info.user_time.seconds, thr_info.user_time.microseconds);
    out << "\\n  User mode CPU: " << buf << " secs";
    snprintf( buf, sizeof(buf), "%d.%06d", thr_info.system_time.seconds, thr_info.system_time.microseconds);
    out << "\\n  Kernel mode CPU: " << buf << " secs";
    cpu_abs = thr_info.user_time.seconds + 0.000001 * thr_info.user_time.microseconds
        + thr_info.system_time.seconds + 0.000001 * thr_info.system_time.microseconds;
    cpu_percentage = (cpu_abs / uptime) * 100.0;
    out << "\\n  Average CPU Consumption : " << cpu_percentage << "%";
  }
#endif // RUSAGE_THREAD
  out << std::endl;
}
#endif

/*******************************************************************************
 * Function to print operating system information.
 *
 ******************************************************************************/
static void PrintSystemInformation(std::ostream& out, Isolate* isolate) {
  out << "\\n================================================================================";
  out << "\\n==== System Information ========================================================\\n";

#ifdef _WIN32
  out << "\\nEnvironment variables\\n";
  LPTSTR lpszVariable;
  LPTCH lpvEnv;

  // Get pointer to the environment block
  lpvEnv = GetEnvironmentStrings();
  if (lpvEnv != nullptr) {
    // Variable strings are separated by null bytes, and the block is terminated by a null byte.
    lpszVariable = reinterpret_cast<LPTSTR>(lpvEnv);
    while (*lpszVariable) {
      out << "  " << lpszVariable << "\\n", lpszVariable;
      lpszVariable += lstrlen(lpszVariable) + 1;
    }
    FreeEnvironmentStrings(lpvEnv);
  }
#else
  out << "\\nEnvironment variables\\n";
  int index = 1;
  char* env_var = *environ;

  while (env_var != nullptr) {
    out << "  " << env_var << "\\n";
    env_var = *(environ + index++);
  }

const static struct {
  const char* description;
  int id;
} rlimit_strings[] = {
  {"core file size (blocks)       ", RLIMIT_CORE},
  {"data seg size (kbytes)        ", RLIMIT_DATA},
  {"file size (blocks)            ", RLIMIT_FSIZE},
#if !(defined(_AIX) || defined(__sun) || defined(__MVS__))
  {"max locked memory (bytes)     ", RLIMIT_MEMLOCK},
#endif
#if !(defined(__sun) || defined(__MVS__))
  {"max memory size (kbytes)      ", RLIMIT_RSS},
#endif
  {"open files                    ", RLIMIT_NOFILE},
  {"stack size (bytes)            ", RLIMIT_STACK},
  {"cpu time (seconds)            ", RLIMIT_CPU},
#if !(defined(__sun) || defined(__MVS__))
  {"max user processes            ", RLIMIT_NPROC},
#endif
  {"virtual memory (kbytes)       ", RLIMIT_AS}
};

  out << "\\nResource limits                        soft limit      hard limit\\n";
  struct rlimit limit;
  char buf[64];

  for (size_t i = 0; i < arraysize(rlimit_strings); i++) {
    if (getrlimit(rlimit_strings[i].id, &limit) == 0) {
      out << "  " << rlimit_strings[i].description << " ";
      if (limit.rlim_cur == RLIM_INFINITY) {
        out << "       unlimited";
      } else {
#if defined(_AIX) || defined(__sun)
        snprintf(buf, sizeof(buf), "%16ld", limit.rlim_cur);
        out << buf;
#elif (defined(__linux__) && !defined(__GLIBC__))
        snprintf(buf, sizeof(buf), "%16lld", limit.rlim_cur);
        out << buf;
#else
        snprintf(buf, sizeof(buf), "%16" PRIu64, limit.rlim_cur);
        out << buf;
#endif
      }
      if (limit.rlim_max == RLIM_INFINITY) {
        out << "       unlimited\\n";
      } else {
#if defined(_AIX)
        snprintf(buf, sizeof(buf), "%16ld\\n", limit.rlim_max);
        out << buf;
#elif (defined(__linux__) && !defined(__GLIBC__))
        snprintf(buf, sizeof(buf), "%16lld\\n", limit.rlim_max);
        out << buf;
#else
        snprintf(buf, sizeof(buf), "%16" PRIu64 "\\n", limit.rlim_max);
        out << buf;
#endif
      }
    }
  }
#endif

  out << "\\nLoaded libraries\\n";
  PrintLoadedLibraries(out, isolate);
}

/*******************************************************************************
 * Functions to print a list of loaded native libraries.
 *
 ******************************************************************************/
#ifdef __linux__
static int LibraryPrintCallback(struct dl_phdr_info *info, size_t size, void *data) {
  std::ostream* out = reinterpret_cast<std::ostream*>(data);
  if (info->dlpi_name != nullptr && *info->dlpi_name != '\\0') {
    *out << "  " << info->dlpi_name << "\\n";
  }
  return 0;
}
#endif

static void PrintLoadedLibraries(std::ostream& out, Isolate* isolate) {
#ifdef __linux__
  dl_iterate_phdr(LibraryPrintCallback, &out);
#elif __APPLE__
  int i = 0;
  const char *name = _dyld_get_image_name(i);
  while (name != nullptr) {
    out << "  " << name << "\\n";
    i++;
    name = _dyld_get_image_name(i);
  }
#elif _AIX
  // We can't tell in advance how large the buffer needs to be.
  // Retry until we reach too large a size (1Mb).
  const unsigned int buffer_inc = 4096;
  unsigned int buffer_size = buffer_inc;
  char* buffer = (char*) malloc(buffer_size);
  int rc = -1;
  while (buffer != nullptr && rc != 0 && buffer_size < 1024 * 1024) {
    rc = loadquery(L_GETINFO, buffer, buffer_size);
    if (rc == 0) {
      break;
    }
    free(buffer);
    buffer_size += buffer_inc;
    buffer = (char*) malloc(buffer_size);
  }
  if (buffer == nullptr) {
    return; // Don't try to free the buffer.
  }
  if (rc == 0) {
    char* buf = buffer;
    ld_info* cur_info = nullptr;
    do {
      cur_info = (ld_info*) buf;
      char* member_name = cur_info->ldinfo_filename
        + strlen(cur_info->ldinfo_filename) + 1;
      if (*member_name != '\\0') {
        out << "  " << cur_info->ldinfo_filename << "(" << member_name << ")\\n";
      } else {
        out << "  " << cur_info->ldinfo_filename << "\\n";
      }
      buf += cur_info->ldinfo_next;
    } while (cur_info->ldinfo_next != 0);
  }
  free(buffer);
#elif __sun
  Link_map *p;

  if (dlinfo(RTLD_SELF, RTLD_DI_LINKMAP, &p) != -1) {
    for (Link_map *l = p; l != NULL; l = l->l_next) {
      out << "  " << l->l_name << "\\n";
    }
  }

#elif _WIN32
  // Windows implementation - get a handle to the process.
  HANDLE process_handle = OpenProcess(PROCESS_QUERY_INFORMATION | PROCESS_VM_READ,
                                      FALSE, GetCurrentProcessId());
  if (process_handle == NULL) {
    out << "No library information available\\n";
    return;
  }
  // Get a list of all the modules in this process
  DWORD size_1 = 0, size_2 = 0;
  // First call to get the size of module array needed
  if (EnumProcessModules(process_handle, NULL, 0, &size_1)) {
    HMODULE* modules = (HMODULE*) malloc(size_1);
    if (modules == NULL) {
      return;  // bail out if malloc failed
    }
    // Second call to populate the module array
    if (EnumProcessModules(process_handle, modules, size_1, &size_2)) {
      for (int i = 0;
           i < (size_1 / sizeof(HMODULE)) && i < (size_2 / sizeof(HMODULE));
           i++) {
        TCHAR module_name[MAX_PATH];
        // Obtain and print the full pathname for each module
        if (GetModuleFileNameEx(process_handle, modules[i], module_name,
                                sizeof(module_name) / sizeof(TCHAR))) {
          out << "  " << module_name << "\\n";
        }
      }
    }
    free(modules);
  } else {
    out << "No library information available\\n";
  }
  // Release the handle to the process.
  CloseHandle(process_handle);

#elif __MVS__
  void *dlcb = 0;
  const int max_path = 1024;
  char buffer[max_path];
  char filename[max_path];
  char *libpath = __getenv("LIBPATH");
  while (dlcb = __dlcb_next(dlcb), dlcb) {
    int len = __dlcb_entry_name(buffer, sizeof(buffer), dlcb);
    void *addr = __dlcb_entry_addr(dlcb);
    if (0 == addr)
      continue;
    if (buffer[0] != '/' && libpath && __find_file_in_path(filename, sizeof(filename), libpath, buffer) > 0) {
      snprintf(buffer + len, sizeof(buffer) - len, " => %s (0x%p)", filename, addr);
    } else
      snprintf(buffer + len, sizeof(buffer) - len, " (0x%p)", addr);
    out << "  " << buffer << std::endl;
  }
  out << std::flush;
#endif
}

}  // namespace nodereport
`,
        "node_report.h": `#ifndef SRC_NODE_REPORT_H_
#define SRC_NODE_REPORT_H_

#include "nan.h"

#include <stdio.h>
#include <stdlib.h>
#include <iostream>
#include <sstream>
#include <iomanip>

#ifdef _WIN32
#include <time.h>
#else
#include <unistd.h>
#include <sys/types.h>
#include <sys/time.h>
#endif

namespace nodereport {

using v8::Isolate;
using v8::Local;
using v8::Message;
using v8::Function;
using v8::Object;
using v8::Number;
using v8::String;
using v8::Value;
using v8::StackTrace;
using v8::StackFrame;
using v8::MaybeLocal;

// Bit-flags for node-report trigger options
#define NR_EXCEPTION  0x01
#define NR_FATALERROR 0x02
#define NR_SIGNAL     0x04
#define NR_APICALL    0x08

// Maximum file and path name lengths
#define NR_MAXNAME 64
#define NR_MAXPATH 1024

enum DumpEvent {kException, kFatalError, kSignal_JS, kSignal_UV, kJavaScript};

#ifdef _WIN32
typedef SYSTEMTIME TIME_TYPE;
#else  // UNIX, OSX
typedef struct tm TIME_TYPE;
#endif

// NODEREPORT_VERSION is defined in binding.gyp
#if !defined(NODEREPORT_VERSION)
#define NODEREPORT_VERSION "dev"
#endif
#define UNKNOWN_NODEVERSION_STRING "Unable to determine Node.js version\\n"

// Function declarations - functions in src/node_report.cc
void TriggerNodeReport(Isolate* isolate, DumpEvent event, const char* message, const char* location, char* name, v8::MaybeLocal<v8::Value> error);
void GetNodeReport(Isolate* isolate, DumpEvent event, const char* message, const char* location, v8::MaybeLocal<v8::Value> error, std::ostream& out);

// Function declarations - utility functions in src/utilities.cc
unsigned int ProcessNodeReportEvents(const char* args);
unsigned int ProcessNodeReportSignal(const char* args);
void ProcessNodeReportFileName(const char* args);
void ProcessNodeReportDirectory(const char* args);
unsigned int ProcessNodeReportVerboseSwitch(const char* args);
void SetLoadTime();
void SetVersionString(Isolate* isolate);
void SetCommandLine();
void reportEndpoints(uv_handle_t* h, std::ostringstream& out);
void reportPath(uv_handle_t* h, std::ostringstream& out);
void walkHandle(uv_handle_t* h, void* arg);
void WriteInteger(std::ostream& out, size_t value);
const char *SignoString(int signo);

// Global variable declarations - definitions are in src/node-report.c
extern char report_filename[NR_MAXNAME + 1];
extern char report_directory[NR_MAXPATH + 1];
extern std::string version_string;
extern std::string commandline_string;
extern TIME_TYPE loadtime_tm_struct;
extern time_t load_time;

// Local implementation of secure_getenv()
inline const char* secure_getenv(const char* key) {
#ifndef _WIN32
  if (getuid() != geteuid() || getgid() != getegid())
    return nullptr;
#endif
  return getenv(key);
}

// Emulate arraysize() on Windows pre Visual Studio 2015
#if defined(_MSC_VER) && _MSC_VER < 1900
#define arraysize(a) (sizeof(a) / sizeof(*a))
#else
template <typename T, size_t N>
constexpr size_t arraysize(const T(&)[N]) { return N; }
#endif  // defined( _MSC_VER ) && (_MSC_VER < 1900)

// Emulate snprintf() on Windows pre Visual Studio 2015
#if defined( _MSC_VER ) && (_MSC_VER < 1900)
#include <stdarg.h>
inline static int snprintf(char* buffer, size_t n, const char* format, ...) {
  va_list argp;
  va_start(argp, format);
  int ret = _vscprintf(format, argp);
  vsnprintf_s(buffer, n, _TRUNCATE, format, argp);
  va_end(argp);
  return ret;
}

#define __func__ __FUNCTION__
#endif  // defined( _MSC_VER ) && (_MSC_VER < 1900)

}  // namespace nodereport

#endif  // SRC_NODE_REPORT_H_
`,
        "utilities.cc": `#include "node_report.h"

#ifdef __APPLE__
#include <crt_externs.h>  // _NSGetArgv() and _NSGetArgc()
#endif
#ifdef __sun
#include <procfs.h>  // psinfo_t structure
#endif
#ifdef _AIX
#include <sys/procfs.h>  // psinfo_t structure
#endif
#ifdef __MVS__
#include <_Nascii.h>
extern "C" char **__getargv_a(void);
extern "C" int __getargc(void);
extern "C" void *_convert_e2a(void *dst, const void *src, size_t size);
#endif

namespace nodereport {

/*******************************************************************************
 * Function to process node-report config: selection of trigger events.
 ******************************************************************************/
unsigned int ProcessNodeReportEvents(const char* args) {
  // Parse the supplied event types
  unsigned int event_flags = 0;
  const char* cursor = args;
  while (*cursor != '\\0') {
    if (!strncmp(cursor, "exception", sizeof("exception") - 1)) {
      event_flags |= NR_EXCEPTION;
      cursor += sizeof("exception") - 1;
    } else if (!strncmp(cursor, "fatalerror", sizeof("fatalerror") - 1)) {
       event_flags |= NR_FATALERROR;
       cursor += sizeof("fatalerror") - 1;
    } else if (!strncmp(cursor, "signal", sizeof("signal") - 1)) {
      event_flags |= NR_SIGNAL;
      cursor += sizeof("signal") - 1;
    } else if (!strncmp(cursor, "apicall", sizeof("apicall") - 1)) {
      event_flags |= NR_APICALL;
      cursor += sizeof("apicall") - 1;
    } else {
      std::cerr << "Unrecognised argument for node-report events option: " << cursor << "\\n";
      return 0;
    }
    if (*cursor == '+') {
      cursor++;  // Hop over the '+' separator
    }
  }
  return event_flags;
}

/*******************************************************************************
 * Function to process node-report config: selection of trigger signal.
 ******************************************************************************/
unsigned int ProcessNodeReportSignal(const char* args) {
#ifdef _WIN32
  return 0; // no-op on Windows
#else
  if (strlen(args) == 0) {
    std::cerr << "Missing argument for node-report signal option\\n";
  } else {
    // Parse the supplied switch
    if (!strncmp(args, "SIGUSR2", sizeof("SIGUSR2") - 1)) {
      return SIGUSR2;
    } else if (!strncmp(args, "SIGQUIT", sizeof("SIGQUIT") - 1)) {
      return SIGQUIT;
    } else {
     std::cerr << "Unrecognised argument for node-report signal option: "<< args << "\\n";
    }
  }
  return SIGUSR2;  // Default signal is SIGUSR2
#endif
}

/*******************************************************************************
 * Function to process node-report config: specification of report file name.
 ******************************************************************************/
void ProcessNodeReportFileName(const char* args) {
  if (strlen(args) == 0) {
    std::cerr << "Missing argument for node-report filename option\\n";
    return;
  }
  if (strlen(args) > NR_MAXNAME) {
    std::cerr << "Supplied node-report filename too long (max " << NR_MAXNAME << " characters)\\n";
    return;
  }
  snprintf(report_filename, sizeof(report_filename), "%s", args);
}

/*******************************************************************************
 * Function to process node-report config: specification of report directory.
 ******************************************************************************/
void ProcessNodeReportDirectory(const char* args) {
  if (strlen(args) == 0) {
    std::cerr << "Missing argument for node-report directory option\\n";
    return;
  }
  if (strlen(args) > NR_MAXPATH) {
    std::cerr << "Supplied node-report directory path too long (max " << NR_MAXPATH << " characters)\\n";
    return;
  }
  snprintf(report_directory, sizeof(report_directory), "%s", args);
}

/*******************************************************************************
 * Function to process node-report config: verbose mode switch.
 ******************************************************************************/
unsigned int ProcessNodeReportVerboseSwitch(const char* args) {
  if (strlen(args) == 0) {
    std::cerr << "Missing argument for node-report verbose switch option\\n";
    return 0;
  }
  // Parse the supplied switch
  if (!strncmp(args, "yes", sizeof("yes") - 1) || !strncmp(args, "true", sizeof("true") - 1)) {
    return 1;
  } else if (!strncmp(args, "no", sizeof("no") - 1) || !strncmp(args, "false", sizeof("false") - 1)) {
    return 0;
  } else {
    std::cerr << "Unrecognised argument for node-report verbose switch option: " << args << "\\n";
  }
  return 0;  // Default is verbose mode off
}

/*******************************************************************************
 * Function to save the node and subcomponent version strings. This is called
 * during node-report module initialisation.
 *******************************************************************************/
void SetVersionString(Isolate* isolate) {
  // Catch anything thrown and gracefully return
  Nan::TryCatch trycatch;
  version_string = UNKNOWN_NODEVERSION_STRING;

  // Retrieve the process object
  v8::Local<v8::String> process_prop;
  if (!Nan::New<v8::String>("process").ToLocal(&process_prop)) return;
  v8::Local<v8::Object> global_obj = isolate->GetCurrentContext()->Global();
  v8::Local<v8::Value> process_value;
  if (!Nan::Get(global_obj, process_prop).ToLocal(&process_value)) return;
  if (!process_value->IsObject()) return;
  v8::Local<v8::Object> process_obj = process_value.As<v8::Object>();

  // Get process.version
  v8::Local<v8::String> version_prop;
  if (!Nan::New<v8::String>("version").ToLocal(&version_prop)) return;
  v8::Local<v8::Value> version;
  if (!Nan::Get(process_obj, version_prop).ToLocal(&version)) return;

  // e.g. Node.js version: v6.9.1
  if (version->IsString()) {
    Nan::Utf8String node_version(version);
    version_string = "Node.js version: ";
    version_string += *node_version;
    version_string += "\\n";
  }

  // Get process.versions
  v8::Local<v8::String> versions_prop;
  if (!Nan::New<v8::String>("versions").ToLocal(&versions_prop)) return;
  v8::Local<v8::Value> versions_value;
  if (!Nan::Get(process_obj, versions_prop).ToLocal(&versions_value)) return;
  if (!versions_value->IsObject()) return;
  v8::Local<v8::Object> versions_obj = versions_value.As<v8::Object>();

  // Get component names and versions from process.versions
  v8::Local<v8::Array> components;
  if (!Nan::GetOwnPropertyNames(versions_obj).ToLocal(&components)) return;
  v8::Local<v8::Object> components_obj = components.As<v8::Object>();
  std::string comp_versions = "(";
  size_t wrap = 0;
  uint32_t total_components = (*components)->Length();
  for (uint32_t i = 0; i < total_components; i++) {
    v8::Local<v8::Value> name_value;
    if (!Nan::Get(components_obj, i).ToLocal(&name_value)) continue;
    v8::Local<v8::Value> version_value;
    if (!Nan::Get(versions_obj, name_value).ToLocal(&version_value)) continue;

    Nan::Utf8String component_name(name_value);
    Nan::Utf8String component_version(version_value);
    if (*component_name == nullptr || *component_version == nullptr) continue;

    if (!strcmp("node", *component_name)) {
      // Put the Node.js version on the first line, if we didn't already have it
      if (version_string == UNKNOWN_NODEVERSION_STRING) {
        version_string = "Node.js version: v";
        version_string += *component_version;
        version_string += "\\n";
      }
    } else {
      // Other component versions follow, comma separated, wrapped at 80 characters
      std::string comp_version_string = *component_name;
      comp_version_string += ": ";
      comp_version_string += *component_version;
      if (wrap == 0) {
        wrap = comp_version_string.length();
      } else {
        wrap += comp_version_string.length() + 2;  // includes separator
        if (wrap > 80) {
          comp_versions += ",\\n ";
          wrap = comp_version_string.length();
        } else {
          comp_versions += ", ";
        }
      }
      comp_versions += comp_version_string;
    }
  }
  version_string += comp_versions + ")\\n";
}

/*******************************************************************************
 * Function to save the node-report module load time value. This is called
 * during node-report module initialisation.
 *******************************************************************************/
void SetLoadTime() {
#ifdef _WIN32
  GetLocalTime(&loadtime_tm_struct);
#else  // UNIX, OSX
  struct timeval time_val;
  gettimeofday(&time_val, nullptr);
  localtime_r(&time_val.tv_sec, &loadtime_tm_struct);
#endif
  time(&load_time);
}

/*******************************************************************************
 * Function to save the process command line. This is called during node-report
 * module initialisation.
 *******************************************************************************/
void SetCommandLine() {
#ifdef __linux__
  // Read the command line from /proc/self/cmdline
  char buf[64];
  FILE* cmdline_fd = fopen("/proc/self/cmdline", "r");
  if (cmdline_fd == nullptr) {
    return;
  }
  commandline_string = "";
  int bytesread = fread(buf, 1, sizeof(buf), cmdline_fd);
  while (bytesread > 0) {
    for (int i = 0; i < bytesread; i++) {
      // Arguments are null separated.
      if (buf[i] == '\\0') {
        commandline_string += " ";
      } else {
        commandline_string += buf[i];
      }
    }
    bytesread = fread(buf, 1, sizeof(buf), cmdline_fd);
  }
  fclose(cmdline_fd);
#elif __APPLE__
  char **argv = *_NSGetArgv();
  int argc = *_NSGetArgc();

  commandline_string = "";
  std::string separator = "";
  for (int i = 0; i < argc; i++) {
    commandline_string += separator + argv[i];
    separator = " ";
  }
#elif defined(_AIX) || defined(__sun)
  // Read the command line from /proc/self/cmdline
  char procbuf[64];
  snprintf(procbuf, sizeof(procbuf), "/proc/%d/psinfo", getpid());
  FILE* psinfo_fd = fopen(procbuf, "r");
  if (psinfo_fd == nullptr) {
    return;
  }
  psinfo_t info;
  int bytesread = fread(&info, 1, sizeof(psinfo_t), psinfo_fd);
  fclose(psinfo_fd);
  if (bytesread == sizeof(psinfo_t)) {
    commandline_string = "";
    std::string separator = "";
#ifdef _AIX
    char **argv = *((char ***) info.pr_argv);
#else
    char **argv = ((char **) info.pr_argv);
#endif
    for (uint32_t i = 0; i < info.pr_argc && argv[i] != nullptr; i++) {
      commandline_string += separator + argv[i];
      separator = " ";
    }
  }
#elif _WIN32
  commandline_string = GetCommandLine();
#elif __MVS__
  char **argv = __getargv_a();
  int argc = __getargc();

  commandline_string = "";
  std::string separator = "";
  for (int i = 0; i < argc; i++) {
    commandline_string += separator + argv[i];
    separator = " ";
  }
#endif
}

/*******************************************************************************
 * Utility function to format socket information.
 *******************************************************************************/
void reportEndpoint(uv_handle_t* h, struct sockaddr* addr, const char* prefix,
                    std::ostringstream& out) {
  uv_getnameinfo_t endpoint;
  if (uv_getnameinfo(h->loop, &endpoint, nullptr, addr, NI_NUMERICSERV) == 0) {
#ifdef __MVS__
    if (__isASCII() == 0) {
      __e2a_s(endpoint.host);
      __e2a_s(endpoint.service);
    }
#endif
    out << prefix << endpoint.host << ":" << endpoint.service;
  } else {
    char host[INET6_ADDRSTRLEN];
    const int family = addr->sa_family;
    const void* src = family == AF_INET ?
                      static_cast<void*>(
                        &(reinterpret_cast<sockaddr_in*>(addr)->sin_addr)) :
                      static_cast<void*>(
                        &(reinterpret_cast<sockaddr_in6*>(addr)->sin6_addr));
    if (uv_inet_ntop(family, src, host, sizeof(host)) == 0) {
      const int port = ntohs(family == AF_INET ?
                             reinterpret_cast<sockaddr_in*>(addr)->sin_port :
                             reinterpret_cast<sockaddr_in6*>(addr)->sin6_port);
#ifdef __MVS__
      if (__isASCII() == 0) {
        __e2a_s(host);
      }
#endif
      out << prefix << host << ":" << port;
    }
  }
}

/*******************************************************************************
 * Utility function to format libuv socket information.
 *******************************************************************************/
void reportEndpoints(uv_handle_t* h, std::ostringstream& out) {
  struct sockaddr_storage addr_storage;
  struct sockaddr* addr = (sockaddr*)&addr_storage;
  uv_any_handle* handle = (uv_any_handle*)h;
  int addr_size = sizeof(addr_storage);
  int rc = -1;

  switch (h->type) {
    case UV_UDP: {
      rc = uv_udp_getsockname(&(handle->udp), addr, &addr_size);
      break;
    }
    case UV_TCP: {
      rc = uv_tcp_getsockname(&(handle->tcp), addr, &addr_size);
      break;
    }
    default: break;
  }
  if (rc == 0) {
    reportEndpoint(h, addr, "", out);

    if (h->type == UV_TCP) {
      // Get the remote end of the connection.
      rc = uv_tcp_getpeername(&(handle->tcp), addr, &addr_size);
      if (rc == 0) {
        reportEndpoint(h, addr, " connected to ", out);
      } else if (rc == UV_ENOTCONN) {
        out << " (not connected)";
      }
    }
  }
}

/*******************************************************************************
 * Utility function to format libuv path information.
 *******************************************************************************/
void reportPath(uv_handle_t* h, std::ostringstream& out) {
  char *buffer = nullptr;
  int rc = -1;
  size_t size = 0;
  uv_any_handle* handle = (uv_any_handle*)h;
  // First call to get required buffer size.
  switch (h->type) {
    case UV_FS_EVENT: {
      rc = uv_fs_event_getpath(&(handle->fs_event), buffer, &size);
      break;
    }
    case UV_FS_POLL: {
      rc = uv_fs_poll_getpath(&(handle->fs_poll), buffer, &size);
      break;
    }
    default: break;
  }
  if (rc == UV_ENOBUFS) {
    buffer = static_cast<char *>(malloc(size));
    switch (h->type) {
      case UV_FS_EVENT: {
        rc = uv_fs_event_getpath(&(handle->fs_event), buffer, &size);
        break;
      }
      case UV_FS_POLL: {
        rc = uv_fs_poll_getpath(&(handle->fs_poll), buffer, &size);
        break;
      }
      default: break;
    }
    if (rc == 0) {
      // buffer is not null terminated.
#ifdef __MVS__
      if (__isASCII() == 0) {
        char *tmpbuf = (char*)malloc(size);
        _convert_e2a(tmpbuf, buffer, size);
        std::string name(tmpbuf, size);
        free(tmpbuf);
        out << "filename: " << name;
      } else {
        std::string name(buffer, size);
        out << "filename: " << name;
      }
#else
      std::string name(buffer, size);
      out << "filename: " << name;
#endif
    }
    free(buffer);
  }
}

/*******************************************************************************
 * Utility function to walk libuv handles.
 *******************************************************************************/
void walkHandle(uv_handle_t* h, void* arg) {
  std::string type;
  std::ostringstream data;
  std::ostream* out = reinterpret_cast<std::ostream*>(arg);
  uv_any_handle* handle = (uv_any_handle*)h;

  // List all the types so we get a compile warning if we've missed one,
  // (using default: supresses the compiler warning).
  switch (h->type) {
    case UV_UNKNOWN_HANDLE: type = "unknown"; break;
    case UV_ASYNC: type = "async"; break;
    case UV_CHECK: type = "check"; break;
    case UV_FS_EVENT: {
      type = "fs_event";
      reportPath(h, data);
      break;
    }
    case UV_FS_POLL: {
      type = "fs_poll";
      reportPath(h, data);
      break;
    }
    case UV_HANDLE: type = "handle"; break;
    case UV_IDLE: type = "idle"; break;
    case UV_NAMED_PIPE: type = "pipe"; break;
    case UV_POLL: type = "poll"; break;
    case UV_PREPARE: type = "prepare"; break;
    case UV_PROCESS: {
      type = "process";
      data << "pid: " << handle->process.pid;
      break;
    }
    case UV_STREAM: type = "stream"; break;
    case UV_TCP: {
      type = "tcp";
      reportEndpoints(h, data);
      break;
    }
    case UV_TIMER: {
      // TODO timeout/due is not actually public however it is present
      // in all current versions of libuv. Once uv_timer_get_timeout is
      // in a supported level of libuv we should test for it with dlsym
      // and use it instead, in case timeout moves in the future.
      //
      // On Windows in libuv 1.22 and later the \`due\` member was renamed
      // to \`timeout\` for consistency with the other platforms.
#if defined(_WIN32) && (UV_VERSION_HEX < ((1 << 16) | (22 << 8)))
      uint64_t due = handle->timer.due;
#else
      uint64_t due = handle->timer.timeout;
#endif
      uint64_t now = uv_now(handle->timer.loop);
      type = "timer";
      data << "repeat: " << uv_timer_get_repeat(&(handle->timer));
      if (due > now) {
          data << ", timeout in: " << (due - now) << " ms";
      } else {
          data << ", timeout expired: " << (now - due) << " ms ago";
      }
      break;
    }
    case UV_TTY: {
      int height, width, rc;
      type = "tty";
      rc = uv_tty_get_winsize(&(handle->tty), &width, &height);
      if (rc == 0) {
        data << "width: " << width << ", height: " << height;
      }
      break;
    }
    case UV_UDP: {
      type = "udp";
      reportEndpoints(h, data);
      break;
    }
    case UV_SIGNAL: {
      // SIGWINCH is used by libuv so always appears.
      // See http://docs.libuv.org/en/v1.x/signal.html
      type = "signal";
      data << "signum: " << handle->signal.signum
           << " (" << SignoString(handle->signal.signum) << ")";
      break;
    }
    case UV_FILE: type = "file"; break;
    // We shouldn't see "max" type
    case UV_HANDLE_TYPE_MAX : type = "max"; break;
  }

  if (h->type == UV_TCP || h->type == UV_UDP
#ifndef _WIN32
      || h->type == UV_NAMED_PIPE
#endif
      ) {
    // These *must* be 0 or libuv will set the buffer sizes to the non-zero
    // values they contain.
    int send_size = 0;
    int recv_size = 0;
    if (h->type == UV_TCP || h->type == UV_UDP) {
      data << ", ";
    }
    uv_send_buffer_size(h, &send_size);
    uv_recv_buffer_size(h, &recv_size);
    data << "send buffer size: " << send_size
         << ", recv buffer size: " << recv_size;
  }

  if (h->type == UV_TCP || h->type == UV_NAMED_PIPE || h->type == UV_TTY ||
      h->type == UV_UDP || h->type == UV_POLL) {
    uv_os_fd_t fd_v;
    uv_os_fd_t* fd = &fd_v;
    int rc  = uv_fileno(h, fd);
    // uv_os_fd_t is an int on Unix and HANDLE on Windows.
#ifndef _WIN32
    if (rc == 0) {
      switch (fd_v) {
      case 0:
        data << ", stdin"; break;
      case 1:
        data << ", stdout"; break;
      case 2:
        data << ", stderr"; break;
      default:
        data << ", file descriptor: " << static_cast<int>(fd_v);
        break;
      }
    }
#endif
  }

  if (h->type == UV_TCP || h->type == UV_NAMED_PIPE || h->type == UV_TTY) {

    data << ", write queue size: "
         << handle->stream.write_queue_size;
    data << (uv_is_readable(&handle->stream) ? ", readable" : "")
         << (uv_is_writable(&handle->stream) ? ", writable": "");

  }

  *out << std::left << "[" << (uv_has_ref(h) ? 'R' : '-')
       << (uv_is_active(h) ? 'A' : '-') << "]   " << std::setw(10) << type
       << std::internal << std::setw(2 + 2 * sizeof(void*));
  char prev_fill = out->fill('0');
  *out << static_cast<void*>(h) << std::left;
  out->fill(prev_fill);
  *out << "  " << std::left << data.str() << std::endl;
}

/*******************************************************************************
 * Utility function to print out integer values with commas for readability.
 ******************************************************************************/
void WriteInteger(std::ostream& out, size_t value) {
  int thousandsStack[8];  // Sufficient for max 64-bit number
  int stackTop = 0;
  int i;
  char buf[64];
  size_t workingValue = value;

  do {
    thousandsStack[stackTop++] = workingValue % 1000;
    workingValue /= 1000;
  } while (workingValue != 0);

  for (i = stackTop-1; i >= 0; i--) {
    if (i == (stackTop-1)) {
      out << thousandsStack[i];
    } else {
      snprintf(buf, sizeof(buf), "%03u", thousandsStack[i]);
      out << buf;
    }
    if (i > 0) {
      out << ",";
    }
  }
}

/*******************************************************************************
 * Utility function to convert a numeric signal number to a string.
 *
 * This code has been copied from node/src/node.cc function signo_string().
 ******************************************************************************/
const char *SignoString(int signo) {
#define SIGNO_CASE(e)  case e: return #e;
  switch (signo) {
#ifdef SIGHUP
  SIGNO_CASE(SIGHUP);
#endif
#ifdef SIGINT
  SIGNO_CASE(SIGINT);
#endif
#ifdef SIGQUIT
  SIGNO_CASE(SIGQUIT);
#endif
#ifdef SIGILL
  SIGNO_CASE(SIGILL);
#endif
#ifdef SIGTRAP
  SIGNO_CASE(SIGTRAP);
#endif
#ifdef SIGABRT
  SIGNO_CASE(SIGABRT);
#endif
#ifdef SIGIOT
# if SIGABRT != SIGIOT
  SIGNO_CASE(SIGIOT);
# endif
#endif
#ifdef SIGBUS
  SIGNO_CASE(SIGBUS);
#endif
#ifdef SIGFPE
  SIGNO_CASE(SIGFPE);
#endif
#ifdef SIGKILL
  SIGNO_CASE(SIGKILL);
#endif
#ifdef SIGUSR1
  SIGNO_CASE(SIGUSR1);
#endif
#ifdef SIGSEGV
  SIGNO_CASE(SIGSEGV);
#endif
#ifdef SIGUSR2
  SIGNO_CASE(SIGUSR2);
#endif
#ifdef SIGPIPE
  SIGNO_CASE(SIGPIPE);
#endif
#ifdef SIGALRM
  SIGNO_CASE(SIGALRM);
#endif
  SIGNO_CASE(SIGTERM);
#ifdef SIGCHLD
  SIGNO_CASE(SIGCHLD);
#endif
#ifdef SIGSTKFLT
  SIGNO_CASE(SIGSTKFLT);
#endif
#ifdef SIGCONT
  SIGNO_CASE(SIGCONT);
#endif
#ifdef SIGSTOP
  SIGNO_CASE(SIGSTOP);
#endif
#ifdef SIGTSTP
  SIGNO_CASE(SIGTSTP);
#endif
#ifdef SIGBREAK
  SIGNO_CASE(SIGBREAK);
#endif
#ifdef SIGTTIN
  SIGNO_CASE(SIGTTIN);
#endif
#ifdef SIGTTOU
  SIGNO_CASE(SIGTTOU);
#endif
#ifdef SIGURG
  SIGNO_CASE(SIGURG);
#endif
#ifdef SIGXCPU
  SIGNO_CASE(SIGXCPU);
#endif
#ifdef SIGXFSZ
  SIGNO_CASE(SIGXFSZ);
#endif
#ifdef SIGVTALRM
  SIGNO_CASE(SIGVTALRM);
#endif
#ifdef SIGPROF
  SIGNO_CASE(SIGPROF);
#endif
#ifdef SIGWINCH
  SIGNO_CASE(SIGWINCH);
#endif
#ifdef SIGIO
  SIGNO_CASE(SIGIO);
#endif
#ifdef SIGPOLL
#if SIGPOLL != SIGIO
  SIGNO_CASE(SIGPOLL);
#endif
#endif
#ifdef SIGLOST
#if SIGLOST != SIGABRT
  SIGNO_CASE(SIGLOST);
#endif
#endif
#ifdef SIGPWR
#if SIGPWR != SIGLOST
  SIGNO_CASE(SIGPWR);
#endif
#endif
#ifdef SIGINFO
#if !defined(SIGPWR) || SIGINFO != SIGPWR
  SIGNO_CASE(SIGINFO);
#endif
#endif
#ifdef SIGSYS
  SIGNO_CASE(SIGSYS);
#endif
  default: return "unknown";
  }
}

}  // namespace nodereport
`
      }
    }
  },
  "package-lock.json": JSON.stringify({
    "name": "package-with-gyp-dependency-lacking-install-script",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
      "nan": {
        "version": "2.14.1",
        "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.1.tgz",
        "integrity": "sha512-isWHgVjnFjh2x2yuJ/tj3JbwoHu3UC2dX5G/88Cm24yB6YopVgxvBObDY7n5xW6ExmFhJpSEQqFPvq9zaXc8Jw=="
      },
      "node-report": {
        "version": "2.2.11",
        "resolved": "https://registry.npmjs.org/node-report/-/node-report-2.2.11.tgz",
        "integrity": "sha512-ec74uVCDYFB2+mBmiDfWR8jnqQqvqznUPp+NbID7eBFYczbWKJD948lTKpxhu1Vl7K7FiyXFmxjxhXgikaRn6Q==",
        "requires": {
          "nan": "^2.12.1"
        }
      }
    }
  }),
  "package.json": JSON.stringify({
    "name": "package-with-gyp-dependency-lacking-install-script",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "node-report": "^2.2.11"
    }
  })
})
  return path
}