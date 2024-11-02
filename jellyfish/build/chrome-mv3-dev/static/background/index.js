(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gJKhK":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/argyle.tad-y/Desktop/plasmo ex/jellyfish/.plasmo/static/background/index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 62832
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _messaging = require("./messaging");
var _index = require("../../../background/index");
var _mainWorldScripts = require("./main-world-scripts");

},{"./messaging":"gGuoe","../../../background/index":"leaNT","./main-world-scripts":"fMGyO"}],"gGuoe":[function(require,module,exports) {
// @ts-nocheck
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _getManifest = require("~background/messages/get-manifest");
var _getManifestDefault = parcelHelpers.interopDefault(_getManifest);
var _hashTx = require("~background/messages/hash-tx");
var _hashTxDefault = parcelHelpers.interopDefault(_hashTx);
var _openExtension = require("~background/messages/open-extension");
var _openExtensionDefault = parcelHelpers.interopDefault(_openExtension);
var _add = require("~background/messages/math/add");
var _addDefault = parcelHelpers.interopDefault(_add);
var _mail = require("~background/ports/mail");
var _mailDefault = parcelHelpers.interopDefault(_mail);
globalThis.__plasmoInternalPortMap = new Map();
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse)=>{
    request?.name;
    return true;
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    switch(request.name){
        case "get-manifest":
            (0, _getManifestDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "hash-tx":
            (0, _hashTxDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "open-extension":
            (0, _openExtensionDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        case "math/add":
            (0, _addDefault.default)({
                ...request,
                sender
            }, {
                send: (p)=>sendResponse(p)
            });
            break;
        default:
            break;
    }
    return true;
});
chrome.runtime.onConnect.addListener(function(port) {
    globalThis.__plasmoInternalPortMap.set(port.name, port);
    port.onMessage.addListener(function(request) {
        switch(port.name){
            case "mail":
                (0, _mailDefault.default)({
                    port,
                    ...request
                }, {
                    send: (p)=>port.postMessage(p)
                });
                break;
            default:
                break;
        }
    });
});

},{"~background/messages/get-manifest":"8CDSX","~background/messages/hash-tx":"l6VZC","~background/messages/open-extension":"lAP1H","~background/messages/math/add":"a1StG","~background/ports/mail":"CqCGI","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"8CDSX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async (_, res)=>{
    const manifest = chrome.runtime.getManifest();
    res.send(manifest);
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"5G9Z5":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l6VZC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HIDDEN_NUMBER = 541;
const handler = async (req, res)=>{
    const { input } = req.body;
    res.send(input * HIDDEN_NUMBER);
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"lAP1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const handler = async (req, res)=>{
    chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        width: 400,
        height: 600
    }, (window)=>{
        console.log(`Popup window created with ID ${window.id}`);
    });
    const message = "Hello from the background script!";
    res.send({
        message
    });
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"a1StG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _background = require("@plasmohq/messaging/background");
const handler = async (req, res)=>{
    const { a, b } = req.body;
    const port = (0, _background.getPort)("mail");
    port.postMessage("ADDING TWO NUMBERS EH?");
    res.send(a + b + 1);
};
exports.default = handler;

},{"@plasmohq/messaging/background":"8WECE","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"8WECE":[function(require,module,exports) {
var a = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var l = Object.prototype.hasOwnProperty;
var u = (t, e)=>{
    for(var r in e)a(t, r, {
        get: e[r],
        enumerable: !0
    });
}, g = (t, e, r, n)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let o of c(e))!l.call(t, o) && o !== r && a(t, o, {
        get: ()=>e[o],
        enumerable: !(n = m(e, o)) || n.enumerable
    });
    return t;
};
var p = (t)=>g(a({}, "__esModule", {
        value: !0
    }), t);
var x = {};
u(x, {
    getPort: ()=>b,
    getPortMap: ()=>i
});
module.exports = p(x);
var h = globalThis.browser?.tabs || globalThis.chrome?.tabs, s = ()=>{
    let t = globalThis.browser?.runtime || globalThis.chrome?.runtime;
    if (!t) throw new Error("Extension runtime is not available");
    return t;
};
var i = ()=>globalThis.__plasmoInternalPortMap, b = (t)=>{
    let r = i().get(t);
    if (!r) throw new Error(`Port ${t} not found`);
    return r;
};
s().onMessage.addListener((t, e, r)=>{
    switch(t.__PLASMO_INTERNAL_SIGNAL__){
        case "__PLASMO_MESSAGING_PING__":
            r(!0);
            break;
    }
    return !0;
});

},{}],"CqCGI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const SECRET = "LABARRE";
const handler = async (req, res)=>{
    const { password } = req.body;
    if (password !== SECRET) res.send("(HINT: HOMETOWN)");
    else res.send("CAPTAIN");
};
exports.default = handler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"leaNT":[function(require,module,exports) {
var _background = require("@plasmohq/messaging/background");
var _pubSub = require("@plasmohq/messaging/pub-sub");
console.log(`BGSW - Starting Hub`);
(0, _pubSub.startHub)();

},{"@plasmohq/messaging/background":"8WECE","@plasmohq/messaging/pub-sub":"4xkhs"}],"4xkhs":[function(require,module,exports) {
var a = Object.defineProperty;
var b = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var u = Object.prototype.hasOwnProperty;
var m = (t, e)=>{
    for(var n in e)a(t, n, {
        get: e[n],
        enumerable: !0
    });
}, d = (t, e, n, o)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let r of l(e))!u.call(t, r) && r !== n && a(t, r, {
        get: ()=>e[r],
        enumerable: !(o = b(e, r)) || o.enumerable
    });
    return t;
};
var p = (t)=>d(a({}, "__esModule", {
        value: !0
    }), t);
var h = {};
m(h, {
    broadcast: ()=>c,
    connectToHub: ()=>g,
    getHubMap: ()=>i,
    startHub: ()=>x
});
module.exports = p(h);
var y = globalThis.browser?.tabs || globalThis.chrome?.tabs, s = ()=>{
    let t = globalThis.browser?.runtime || globalThis.chrome?.runtime;
    if (!t) throw new Error("Extension runtime is not available");
    return t;
};
var i = ()=>globalThis.__plasmoInternalHubMap, x = ()=>{
    let t = s();
    if (!t.onConnectExternal) throw new Error("onConnect External not available. You need externally_connectable entry possibly");
    globalThis.__plasmoInternalHubMap = new Map;
    let e = i();
    t.onConnectExternal.addListener((n)=>{
        let o = n.sender.tab.id;
        e.has(o) || (e.set(o, n), n.onMessage.addListener((r)=>{
            c({
                from: o,
                payload: r
            });
        }), n.onDisconnect.addListener(()=>{
            e.delete(o);
        }));
    });
}, c = (t)=>{
    i().forEach((n, o)=>{
        o !== t.from && n.postMessage({
            ...t,
            to: o
        });
    });
}, g = (t)=>{
    let e = s();
    if (!e.connect) throw new Error("runtime.connect not available. You need to use startHub in BGSW");
    return e.connect(t);
};

},{}],"fMGyO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _clientHubMainWorld = require("url:../../../contents/client-hub-main-world");
var _clientHubMainWorldDefault = parcelHelpers.interopDefault(_clientHubMainWorld);
var _mainWorld = require("url:../../../contents/main-world");
var _mainWorldDefault = parcelHelpers.interopDefault(_mainWorld);
chrome.scripting.registerContentScripts([
    {
        "id": "contentsClientHubMainWorld",
        "js": [
            (0, _clientHubMainWorldDefault.default).split("/").pop().split("?")[0]
        ],
        "matches": [
            "<all_urls>"
        ],
        "world": "MAIN"
    },
    {
        "id": "contentsMainWorld",
        "js": [
            (0, _mainWorldDefault.default).split("/").pop().split("?")[0]
        ],
        "matches": [
            "<all_urls>"
        ],
        "runAt": "document_start",
        "world": "MAIN"
    }
]).catch((_)=>{});

},{"url:../../../contents/client-hub-main-world":"lJwpC","url:../../../contents/main-world":"AGQBu","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"lJwpC":[function(require,module,exports) {
module.exports = require("5b2a68ec7cb59905").getBundleURL("gL9HQ") + "../../client-hub-main-world.50f45317.js" + "?" + Date.now();

},{"5b2a68ec7cb59905":"7BRJX"}],"7BRJX":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"AGQBu":[function(require,module,exports) {
module.exports = require("73b4fce644d5ce26").getBundleURL("gL9HQ") + "../../main-world.3a3987e4.js" + "?" + Date.now();

},{"73b4fce644d5ce26":"7BRJX"}]},["gJKhK","8oeFb"], "8oeFb", "parcelRequiree89f")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsRUFBRTtBQUNuQjtBQUVBLFFBQVEsZUFBZTtBQUN2QixRQUFRLGFBQWE7QUFDckIsUUFBUSxZQUFZOzs7QUNoRHBCLE9BQU8sVUFBVSxRQUFRLG9CQUF3QixhQUFhLFdBQVcsaUNBQWlDLE1BQU0sS0FBSyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjEvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMWE3OWE5NTZiZWFjNGE4Zi5qcyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL21lc3NhZ2luZy50cyIsImJhY2tncm91bmQvbWVzc2FnZXMvZ2V0LW1hbmlmZXN0LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi45LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwiYmFja2dyb3VuZC9tZXNzYWdlcy9oYXNoLXR4LnRzIiwiYmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuLWV4dGVuc2lvbi50cyIsImJhY2tncm91bmQvbWVzc2FnZXMvbWF0aC9hZGQudHMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK21lc3NhZ2luZ0AwLjYuMl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9iYWNrZ3JvdW5kLmNqcyIsImJhY2tncm91bmQvcG9ydHMvbWFpbC50cyIsImJhY2tncm91bmQvaW5kZXgudHMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK21lc3NhZ2luZ0AwLjYuMl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9wdWItc3ViLmNqcyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvbWFpbi13b3JsZC1zY3JpcHRzLnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS00ODJmMWYwMTVhYWRjMzc4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvaGVscGVycy9idW5kbGUtdXJsLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS1jODU3OWNlMTE0ZTk5NmY3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB1PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIGg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgQj1uZXcgU2V0KHUpLF89ZT0+Qi5oYXMoZSksRz11LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFU9XyhcIi0tZHJ5LXJ1blwiKSxnPSgpPT5fKFwiLS12ZXJib3NlXCIpfHxoKCkuVkVSQk9TRT09PVwidHJ1ZVwiLE49ZygpO3ZhciBtPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB5PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9Pm0oXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxmPSguLi5lKT0+bShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+ZygpJiZtKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIGI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvYXJneWxlLnRhZC15L0Rlc2t0b3AvcGxhc21vIGV4L2plbGx5ZmlzaC8ucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiYzMzODkwOGU3MDRjOTFmMVwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjYyODMyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEgoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1IO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYz1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIFIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24geCgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIGQoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBQPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFM9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgTz1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHtSKCl9OiR7ZCgpfS9gO2FzeW5jIGZ1bmN0aW9uIGsoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKE8pO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGMucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1jLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBDKGU9ZCgpKXtsZXQgdD14KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gTChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ5KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gVChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQyhOdW1iZXIoZCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7YXdhaXQgZShzKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdH1mdW5jdGlvbiBBKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbD1yLmNvZGVmcmFtZXx8ci5zdGFjaztmKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2wrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciB3PW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBwKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgYz8udGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1jLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCF3fHwhdy5pc1BhcmNlbFJlcXVpcmUpe2IoKTtsZXQgZT1BKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5FKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChsPT5sLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAobD0+T2JqZWN0LnZhbHVlcyhsKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShsPT5zLmhhcyhsKSl9cCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBrKCkscCghMCl9KX1UKGFzeW5jIGU9Pntzd2l0Y2goaShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksZS50eXBlKXtjYXNlXCJidWlsZF9yZWFkeVwiOnthLmJ1aWxkUmVhZHl8fD0hMCxwKCk7YnJlYWt9Y2FzZVwiY3NfY2hhbmdlZFwiOnthLmNzQ2hhbmdlZHx8PSEwLHAoKTticmVha319fSk7Yy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aChQKSxvPWUubmFtZS5zdGFydHNXaXRoKFMpO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxwKCl9KX19KTtjLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxwKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuL21lc3NhZ2luZ1wiXG5pbXBvcnQgXCIuLi8uLi8uLi9iYWNrZ3JvdW5kL2luZGV4XCJcbmltcG9ydCBcIi4vbWFpbi13b3JsZC1zY3JpcHRzXCIiLCIvLyBAdHMtbm9jaGVja1xuZ2xvYmFsVGhpcy5fX3BsYXNtb0ludGVybmFsUG9ydE1hcCA9IG5ldyBNYXAoKVxuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzR2V0TWFuaWZlc3QgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvZ2V0LW1hbmlmZXN0XCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVzc2FnZXNIYXNoVHggfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvaGFzaC10eFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzT3BlbkV4dGVuc2lvbiB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9vcGVuLWV4dGVuc2lvblwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzTWF0aEFkZCB9IGZyb20gXCJ+YmFja2dyb3VuZC9tZXNzYWdlcy9tYXRoL2FkZFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHBvcnRzTWFpbCB9IGZyb20gXCJ+YmFja2dyb3VuZC9wb3J0cy9tYWlsXCJcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAocmVxdWVzdD8ubmFtZSkge1xuICAgIFxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgc3dpdGNoIChyZXF1ZXN0Lm5hbWUpIHtcbiAgICBjYXNlIFwiZ2V0LW1hbmlmZXN0XCI6XG4gIG1lc3NhZ2VzR2V0TWFuaWZlc3Qoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwiaGFzaC10eFwiOlxuICBtZXNzYWdlc0hhc2hUeCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbmNhc2UgXCJvcGVuLWV4dGVuc2lvblwiOlxuICBtZXNzYWdlc09wZW5FeHRlbnNpb24oe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwibWF0aC9hZGRcIjpcbiAgbWVzc2FnZXNNYXRoQWRkKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIHRydWVcbn0pXG5cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihwb3J0KSB7XG4gIGdsb2JhbFRoaXMuX19wbGFzbW9JbnRlcm5hbFBvcnRNYXAuc2V0KHBvcnQubmFtZSwgcG9ydClcbiAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIHN3aXRjaCAocG9ydC5uYW1lKSB7XG4gICAgICBjYXNlIFwibWFpbFwiOlxuICBwb3J0c01haWwoe1xuICAgIHBvcnQsXG4gICAgLi4ucmVxdWVzdFxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHBvcnQucG9zdE1lc3NhZ2UocClcbiAgfSlcbiAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxufSlcblxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChfLCByZXMpID0+IHtcbiAgY29uc3QgbWFuaWZlc3QgPSBjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpXG5cbiAgcmVzLnNlbmQobWFuaWZlc3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5jb25zdCBISURERU5fTlVNQkVSID0gNTQxXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RCb2R5ID0ge1xuICBpbnB1dDogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RSZXNwb25zZSA9IG51bWJlclxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXI8XG4gIFJlcXVlc3RCb2R5LFxuICBSZXF1ZXN0UmVzcG9uc2Vcbj4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBpbnB1dCB9ID0gcmVxLmJvZHlcblxuICByZXMuc2VuZChpbnB1dCAqIEhJRERFTl9OVU1CRVIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY2hyb21lLndpbmRvd3MuY3JlYXRlKFxuICAgIHtcbiAgICAgIHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwicG9wdXAuaHRtbFwiKSxcbiAgICAgIHR5cGU6IFwicG9wdXBcIixcbiAgICAgIHdpZHRoOiA0MDAsXG4gICAgICBoZWlnaHQ6IDYwMFxuICAgIH0sXG4gICAgKHdpbmRvdykgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFBvcHVwIHdpbmRvdyBjcmVhdGVkIHdpdGggSUQgJHt3aW5kb3cuaWR9YClcbiAgICB9XG4gIClcbiAgY29uc3QgbWVzc2FnZSA9IFwiSGVsbG8gZnJvbSB0aGUgYmFja2dyb3VuZCBzY3JpcHQhXCJcblxuICByZXMuc2VuZCh7XG4gICAgbWVzc2FnZVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcbmltcG9ydCB7IGdldFBvcnQgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZy9iYWNrZ3JvdW5kXCJcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgYSwgYiB9ID0gcmVxLmJvZHlcblxuICBjb25zdCBwb3J0ID0gZ2V0UG9ydChcIm1haWxcIilcbiAgcG9ydC5wb3N0TWVzc2FnZShcIkFERElORyBUV08gTlVNQkVSUyBFSD9cIilcbiAgcmVzLnNlbmQoYSArIGIgKyAxKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJ2YXIgYT1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIG09T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgYz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgbD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB1PSh0LGUpPT57Zm9yKHZhciByIGluIGUpYSh0LHIse2dldDplW3JdLGVudW1lcmFibGU6ITB9KX0sZz0odCxlLHIsbik9PntpZihlJiZ0eXBlb2YgZT09XCJvYmplY3RcInx8dHlwZW9mIGU9PVwiZnVuY3Rpb25cIilmb3IobGV0IG8gb2YgYyhlKSkhbC5jYWxsKHQsbykmJm8hPT1yJiZhKHQsbyx7Z2V0OigpPT5lW29dLGVudW1lcmFibGU6IShuPW0oZSxvKSl8fG4uZW51bWVyYWJsZX0pO3JldHVybiB0fTt2YXIgcD10PT5nKGEoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdCk7dmFyIHg9e307dSh4LHtnZXRQb3J0OigpPT5iLGdldFBvcnRNYXA6KCk9Pml9KTttb2R1bGUuZXhwb3J0cz1wKHgpO3ZhciBoPWdsb2JhbFRoaXMuYnJvd3Nlcj8udGFic3x8Z2xvYmFsVGhpcy5jaHJvbWU/LnRhYnMscz0oKT0+e2xldCB0PWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiRXh0ZW5zaW9uIHJ1bnRpbWUgaXMgbm90IGF2YWlsYWJsZVwiKTtyZXR1cm4gdH07dmFyIGk9KCk9Pmdsb2JhbFRoaXMuX19wbGFzbW9JbnRlcm5hbFBvcnRNYXAsYj10PT57bGV0IHI9aSgpLmdldCh0KTtpZighcil0aHJvdyBuZXcgRXJyb3IoYFBvcnQgJHt0fSBub3QgZm91bmRgKTtyZXR1cm4gcn07cygpLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigodCxlLHIpPT57c3dpdGNoKHQuX19QTEFTTU9fSU5URVJOQUxfU0lHTkFMX18pe2Nhc2VcIl9fUExBU01PX01FU1NBR0lOR19QSU5HX19cIjp7cighMCk7YnJlYWt9fXJldHVybiEwfSk7MCYmKG1vZHVsZS5leHBvcnRzPXtnZXRQb3J0LGdldFBvcnRNYXB9KTtcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5jb25zdCBTRUNSRVQgPSBcIkxBQkFSUkVcIlxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuUG9ydEhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBwYXNzd29yZCB9ID0gcmVxLmJvZHlcblxuICBpZiAocGFzc3dvcmQgIT09IFNFQ1JFVCkge1xuICAgIHJlcy5zZW5kKFwiKEhJTlQ6IEhPTUVUT1dOKVwiKVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZW5kKFwiQ0FQVEFJTlwiKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImltcG9ydCBcIkBwbGFzbW9ocS9tZXNzYWdpbmcvYmFja2dyb3VuZFwiXG5cbmltcG9ydCB7IHN0YXJ0SHViIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmcvcHViLXN1YlwiXG5cbmNvbnNvbGUubG9nKGBCR1NXIC0gU3RhcnRpbmcgSHViYClcbnN0YXJ0SHViKClcbiIsInZhciBhPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBsPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciB1PU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIG09KHQsZSk9Pntmb3IodmFyIG4gaW4gZSlhKHQsbix7Z2V0OmVbbl0sZW51bWVyYWJsZTohMH0pfSxkPSh0LGUsbixvKT0+e2lmKGUmJnR5cGVvZiBlPT1cIm9iamVjdFwifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiKWZvcihsZXQgciBvZiBsKGUpKSF1LmNhbGwodCxyKSYmciE9PW4mJmEodCxyLHtnZXQ6KCk9PmVbcl0sZW51bWVyYWJsZTohKG89YihlLHIpKXx8by5lbnVtZXJhYmxlfSk7cmV0dXJuIHR9O3ZhciBwPXQ9PmQoYSh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0KTt2YXIgaD17fTttKGgse2Jyb2FkY2FzdDooKT0+Yyxjb25uZWN0VG9IdWI6KCk9PmcsZ2V0SHViTWFwOigpPT5pLHN0YXJ0SHViOigpPT54fSk7bW9kdWxlLmV4cG9ydHM9cChoKTt2YXIgeT1nbG9iYWxUaGlzLmJyb3dzZXI/LnRhYnN8fGdsb2JhbFRoaXMuY2hyb21lPy50YWJzLHM9KCk9PntsZXQgdD1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lO2lmKCF0KXRocm93IG5ldyBFcnJvcihcIkV4dGVuc2lvbiBydW50aW1lIGlzIG5vdCBhdmFpbGFibGVcIik7cmV0dXJuIHR9O3ZhciBpPSgpPT5nbG9iYWxUaGlzLl9fcGxhc21vSW50ZXJuYWxIdWJNYXAseD0oKT0+e2xldCB0PXMoKTtpZighdC5vbkNvbm5lY3RFeHRlcm5hbCl0aHJvdyBuZXcgRXJyb3IoXCJvbkNvbm5lY3QgRXh0ZXJuYWwgbm90IGF2YWlsYWJsZS4gWW91IG5lZWQgZXh0ZXJuYWxseV9jb25uZWN0YWJsZSBlbnRyeSBwb3NzaWJseVwiKTtnbG9iYWxUaGlzLl9fcGxhc21vSW50ZXJuYWxIdWJNYXA9bmV3IE1hcDtsZXQgZT1pKCk7dC5vbkNvbm5lY3RFeHRlcm5hbC5hZGRMaXN0ZW5lcihuPT57bGV0IG89bi5zZW5kZXIudGFiLmlkO2UuaGFzKG8pfHwoZS5zZXQobyxuKSxuLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihyPT57Yyh7ZnJvbTpvLHBheWxvYWQ6cn0pfSksbi5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntlLmRlbGV0ZShvKX0pKX0pfSxjPXQ9PntpKCkuZm9yRWFjaCgobixvKT0+e28hPT10LmZyb20mJm4ucG9zdE1lc3NhZ2Uoey4uLnQsdG86b30pfSl9LGc9dD0+e2xldCBlPXMoKTtpZighZS5jb25uZWN0KXRocm93IG5ldyBFcnJvcihcInJ1bnRpbWUuY29ubmVjdCBub3QgYXZhaWxhYmxlLiBZb3UgbmVlZCB0byB1c2Ugc3RhcnRIdWIgaW4gQkdTV1wiKTtyZXR1cm4gZS5jb25uZWN0KHQpfTswJiYobW9kdWxlLmV4cG9ydHM9e2Jyb2FkY2FzdCxjb25uZWN0VG9IdWIsZ2V0SHViTWFwLHN0YXJ0SHVifSk7XG4iLCJpbXBvcnQgY29udGVudHNDbGllbnRIdWJNYWluV29ybGQgZnJvbSBcInVybDouLi8uLi8uLi9jb250ZW50cy9jbGllbnQtaHViLW1haW4td29ybGRcIlxuaW1wb3J0IGNvbnRlbnRzTWFpbldvcmxkIGZyb20gXCJ1cmw6Li4vLi4vLi4vY29udGVudHMvbWFpbi13b3JsZFwiXG5jaHJvbWUuc2NyaXB0aW5nLnJlZ2lzdGVyQ29udGVudFNjcmlwdHMoW1xuICB7XCJpZFwiOlwiY29udGVudHNDbGllbnRIdWJNYWluV29ybGRcIixcImpzXCI6W2NvbnRlbnRzQ2xpZW50SHViTWFpbldvcmxkLnNwbGl0KFwiL1wiKS5wb3AoKS5zcGxpdChcIj9cIilbMF1dLFwibWF0Y2hlc1wiOltcIjxhbGxfdXJscz5cIl0sXCJ3b3JsZFwiOlwiTUFJTlwifSxcbiAge1wiaWRcIjpcImNvbnRlbnRzTWFpbldvcmxkXCIsXCJqc1wiOltjb250ZW50c01haW5Xb3JsZC5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCI/XCIpWzBdXSxcIm1hdGNoZXNcIjpbXCI8YWxsX3VybHM+XCJdLFwicnVuQXRcIjpcImRvY3VtZW50X3N0YXJ0XCIsXCJ3b3JsZFwiOlwiTUFJTlwifVxuXSkuY2F0Y2goXyA9PiB7fSlcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2J1bmRsZS11cmwnKS5nZXRCdW5kbGVVUkwoJ2dMOUhRJykgKyBcIi4uLy4uL2NsaWVudC1odWItbWFpbi13b3JsZC41MGY0NTMxNy5qc1wiICsgXCI/XCIgKyBEYXRlLm5vdygpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYnVuZGxlVVJMID0ge307XG5cbmZ1bmN0aW9uIGdldEJ1bmRsZVVSTENhY2hlZChpZCkge1xuICB2YXIgdmFsdWUgPSBidW5kbGVVUkxbaWRdO1xuXG4gIGlmICghdmFsdWUpIHtcbiAgICB2YWx1ZSA9IGdldEJ1bmRsZVVSTCgpO1xuICAgIGJ1bmRsZVVSTFtpZF0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0QnVuZGxlVVJMKCkge1xuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB2YXIgbWF0Y2hlcyA9ICgnJyArIGVyci5zdGFjaykubWF0Y2goLyhodHRwcz98ZmlsZXxmdHB8KGNocm9tZXxtb3p8c2FmYXJpLXdlYiktZXh0ZW5zaW9uKTpcXC9cXC9bXilcXG5dKy9nKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAvLyBUaGUgZmlyc3QgdHdvIHN0YWNrIGZyYW1lcyB3aWxsIGJlIHRoaXMgZnVuY3Rpb24gYW5kIGdldEJ1bmRsZVVSTENhY2hlZC5cbiAgICAgIC8vIFVzZSB0aGUgM3JkIG9uZSwgd2hpY2ggd2lsbCBiZSBhIHJ1bnRpbWUgaW4gdGhlIG9yaWdpbmFsIGJ1bmRsZS5cbiAgICAgIHJldHVybiBnZXRCYXNlVVJMKG1hdGNoZXNbMl0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnLyc7XG59XG5cbmZ1bmN0aW9uIGdldEJhc2VVUkwodXJsKSB7XG4gIHJldHVybiAoJycgKyB1cmwpLnJlcGxhY2UoL14oKD86aHR0cHM/fGZpbGV8ZnRwfChjaHJvbWV8bW96fHNhZmFyaS13ZWIpLWV4dGVuc2lvbik6XFwvXFwvLispXFwvW14vXSskLywgJyQxJykgKyAnLyc7XG59IC8vIFRPRE86IFJlcGxhY2UgdXNlcyB3aXRoIGBuZXcgVVJMKHVybCkub3JpZ2luYCB3aGVuIGllMTEgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZC5cblxuXG5mdW5jdGlvbiBnZXRPcmlnaW4odXJsKSB7XG4gIHZhciBtYXRjaGVzID0gKCcnICsgdXJsKS5tYXRjaCgvKGh0dHBzP3xmaWxlfGZ0cHwoY2hyb21lfG1venxzYWZhcmktd2ViKS1leHRlbnNpb24pOlxcL1xcL1teL10rLyk7XG5cbiAgaWYgKCFtYXRjaGVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPcmlnaW4gbm90IGZvdW5kJyk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlc1swXTtcbn1cblxuZXhwb3J0cy5nZXRCdW5kbGVVUkwgPSBnZXRCdW5kbGVVUkxDYWNoZWQ7XG5leHBvcnRzLmdldEJhc2VVUkwgPSBnZXRCYXNlVVJMO1xuZXhwb3J0cy5nZXRPcmlnaW4gPSBnZXRPcmlnaW47IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvYnVuZGxlLXVybCcpLmdldEJ1bmRsZVVSTCgnZ0w5SFEnKSArIFwiLi4vLi4vbWFpbi13b3JsZC4zYTM5ODdlNC5qc1wiICsgXCI/XCIgKyBEYXRlLm5vdygpOyJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);