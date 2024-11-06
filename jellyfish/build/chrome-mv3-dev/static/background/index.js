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
})({"bTbDA":[function(require,module,exports) {
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
    "serverPort": 55647
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
            "https://nademo.dayforcehcm.com/MyDayforce/Mydayforce.aspx"
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

},{"73b4fce644d5ce26":"7BRJX"}]},["bTbDA","8oeFb"], "8oeFb", "parcelRequiree89f")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUU7QUFDbkI7QUFFQSxRQUFRLGVBQWU7QUFDdkIsUUFBUSxhQUFhO0FBQ3JCLFFBQVEsWUFBWTs7O0FDaERwQixPQUFPLFVBQVUsUUFBUSxvQkFBd0IsYUFBYSxXQUFXLGlDQUFpQyxNQUFNLEtBQUsiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4yNS4xL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWJmOGFkYmU0OTM2NjBmYTUuanMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9tZXNzYWdpbmcudHMiLCJiYWNrZ3JvdW5kL21lc3NhZ2VzL2dldC1tYW5pZmVzdC50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOS4zX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsImJhY2tncm91bmQvbWVzc2FnZXMvaGFzaC10eC50cyIsImJhY2tncm91bmQvbWVzc2FnZXMvb3Blbi1leHRlbnNpb24udHMiLCJiYWNrZ3JvdW5kL21lc3NhZ2VzL21hdGgvYWRkLnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocSttZXNzYWdpbmdAMC42LjJfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvbWVzc2FnaW5nL2Rpc3QvYmFja2dyb3VuZC5janMiLCJiYWNrZ3JvdW5kL3BvcnRzL21haWwudHMiLCJiYWNrZ3JvdW5kL2luZGV4LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocSttZXNzYWdpbmdAMC42LjJfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvbWVzc2FnaW5nL2Rpc3QvcHViLXN1Yi5janMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL21haW4td29ybGQtc2NyaXB0cy50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3J1bnRpbWUtanNAMi44LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtanMvbGliL3J1bnRpbWUtNDgyZjFmMDE1YWFkYzM3OC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3J1bnRpbWUtanNAMi44LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtanMvbGliL2hlbHBlcnMvYnVuZGxlLXVybC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3J1bnRpbWUtanNAMi44LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtanMvbGliL3J1bnRpbWUtYzg1NzljZTExNGU5OTZmNy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBoPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEI9bmV3IFNldCh1KSxfPWU9PkIuaGFzKGUpLEc9dS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBVPV8oXCItLWRyeS1ydW5cIiksZz0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8aCgpLlZFUkJPU0U9PT1cInRydWVcIixOPWcoKTt2YXIgbT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeT0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT5tKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksZj0oLi4uZSk9Pm0oXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxNPTAsaT0oLi4uZSk9PmcoKSYmbShgXFx1ezFGN0UxfSAke00rK31gLC4uLmUpO3ZhciBiPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZSx0PSgpPT5zZXRJbnRlcnZhbChlLmdldFBsYXRmb3JtSW5mbywyNGUzKTtlLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcih0KSx0KCl9O3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiL1VzZXJzL2FyZ3lsZS50YWQteS9EZXNrdG9wL3BsYXNtbyBleC9qZWxseWZpc2gvLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1NTY0N307bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBIKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9SDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGM9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBSKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHgoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixTPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7UigpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBrKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBFKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gQyhlPWQoKSl7bGV0IHQ9eCgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEwoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFQoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7ZihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntmKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgdz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighd3x8IXcuaXNQYXJjZWxSZXF1aXJlKXtiKCk7bGV0IGU9QShhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+RShtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgaygpLHAoITApfSl9VChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoUCksbz1lLm5hbWUuc3RhcnRzV2l0aChTKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi9tZXNzYWdpbmdcIlxuaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZC9pbmRleFwiXG5pbXBvcnQgXCIuL21haW4td29ybGQtc2NyaXB0c1wiIiwiLy8gQHRzLW5vY2hlY2tcbmdsb2JhbFRoaXMuX19wbGFzbW9JbnRlcm5hbFBvcnRNYXAgPSBuZXcgTWFwKClcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc0dldE1hbmlmZXN0IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2dldC1tYW5pZmVzdFwiXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lc3NhZ2VzSGFzaFR4IH0gZnJvbSBcIn5iYWNrZ3JvdW5kL21lc3NhZ2VzL2hhc2gtdHhcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc09wZW5FeHRlbnNpb24gfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvb3Blbi1leHRlbnNpb25cIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXNzYWdlc01hdGhBZGQgfSBmcm9tIFwifmJhY2tncm91bmQvbWVzc2FnZXMvbWF0aC9hZGRcIlxuaW1wb3J0IHsgZGVmYXVsdCBhcyBwb3J0c01haWwgfSBmcm9tIFwifmJhY2tncm91bmQvcG9ydHMvbWFpbFwiXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBzd2l0Y2ggKHJlcXVlc3Q/Lm5hbWUpIHtcbiAgICBcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAocmVxdWVzdC5uYW1lKSB7XG4gICAgY2FzZSBcImdldC1tYW5pZmVzdFwiOlxuICBtZXNzYWdlc0dldE1hbmlmZXN0KHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcImhhc2gtdHhcIjpcbiAgbWVzc2FnZXNIYXNoVHgoe1xuICAgIC4uLnJlcXVlc3QsXG4gICAgc2VuZGVyXG4gIH0sIHtcbiAgICBzZW5kOiAocCkgPT4gc2VuZFJlc3BvbnNlKHApXG4gIH0pXG4gIGJyZWFrXG5jYXNlIFwib3Blbi1leHRlbnNpb25cIjpcbiAgbWVzc2FnZXNPcGVuRXh0ZW5zaW9uKHtcbiAgICAuLi5yZXF1ZXN0LFxuICAgIHNlbmRlclxuICB9LCB7XG4gICAgc2VuZDogKHApID0+IHNlbmRSZXNwb25zZShwKVxuICB9KVxuICBicmVha1xuY2FzZSBcIm1hdGgvYWRkXCI6XG4gIG1lc3NhZ2VzTWF0aEFkZCh7XG4gICAgLi4ucmVxdWVzdCxcbiAgICBzZW5kZXJcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBzZW5kUmVzcG9uc2UocClcbiAgfSlcbiAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59KVxuXG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocG9ydCkge1xuICBnbG9iYWxUaGlzLl9fcGxhc21vSW50ZXJuYWxQb3J0TWFwLnNldChwb3J0Lm5hbWUsIHBvcnQpXG4gIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICBzd2l0Y2ggKHBvcnQubmFtZSkge1xuICAgICAgY2FzZSBcIm1haWxcIjpcbiAgcG9ydHNNYWlsKHtcbiAgICBwb3J0LFxuICAgIC4uLnJlcXVlc3RcbiAgfSwge1xuICAgIHNlbmQ6IChwKSA9PiBwb3J0LnBvc3RNZXNzYWdlKHApXG4gIH0pXG4gIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfSlcbn0pXG5cbiIsImltcG9ydCB0eXBlIHsgUGxhc21vTWVzc2FnaW5nIH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIlxuXG5jb25zdCBoYW5kbGVyOiBQbGFzbW9NZXNzYWdpbmcuTWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoXywgcmVzKSA9PiB7XG4gIGNvbnN0IG1hbmlmZXN0ID0gY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKVxuXG4gIHJlcy5zZW5kKG1hbmlmZXN0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuY29uc3QgSElEREVOX05VTUJFUiA9IDU0MVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0Qm9keSA9IHtcbiAgaW5wdXQ6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0UmVzcG9uc2UgPSBudW1iZXJcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyPFxuICBSZXF1ZXN0Qm9keSxcbiAgUmVxdWVzdFJlc3BvbnNlXG4+ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgaW5wdXQgfSA9IHJlcS5ib2R5XG5cbiAgcmVzLnNlbmQoaW5wdXQgKiBISURERU5fTlVNQkVSKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLk1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNocm9tZS53aW5kb3dzLmNyZWF0ZShcbiAgICB7XG4gICAgICB1cmw6IGNocm9tZS5ydW50aW1lLmdldFVSTChcInBvcHVwLmh0bWxcIiksXG4gICAgICB0eXBlOiBcInBvcHVwXCIsXG4gICAgICB3aWR0aDogNDAwLFxuICAgICAgaGVpZ2h0OiA2MDBcbiAgICB9LFxuICAgICh3aW5kb3cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBQb3B1cCB3aW5kb3cgY3JlYXRlZCB3aXRoIElEICR7d2luZG93LmlkfWApXG4gICAgfVxuICApXG4gIGNvbnN0IG1lc3NhZ2UgPSBcIkhlbGxvIGZyb20gdGhlIGJhY2tncm91bmQgc2NyaXB0IVwiXG5cbiAgcmVzLnNlbmQoe1xuICAgIG1lc3NhZ2VcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9NZXNzYWdpbmcgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5pbXBvcnQgeyBnZXRQb3J0IH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmcvYmFja2dyb3VuZFwiXG5cbmNvbnN0IGhhbmRsZXI6IFBsYXNtb01lc3NhZ2luZy5NZXNzYWdlSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGEsIGIgfSA9IHJlcS5ib2R5XG5cbiAgY29uc3QgcG9ydCA9IGdldFBvcnQoXCJtYWlsXCIpXG4gIHBvcnQucG9zdE1lc3NhZ2UoXCJBRERJTkcgVFdPIE5VTUJFUlMgRUg/XCIpXG4gIHJlcy5zZW5kKGEgKyBiICsgMSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuIiwidmFyIGE9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBtPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIGM9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIGw9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgdT0odCxlKT0+e2Zvcih2YXIgciBpbiBlKWEodCxyLHtnZXQ6ZVtyXSxlbnVtZXJhYmxlOiEwfSl9LGc9KHQsZSxyLG4pPT57aWYoZSYmdHlwZW9mIGU9PVwib2JqZWN0XCJ8fHR5cGVvZiBlPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBvIG9mIGMoZSkpIWwuY2FsbCh0LG8pJiZvIT09ciYmYSh0LG8se2dldDooKT0+ZVtvXSxlbnVtZXJhYmxlOiEobj1tKGUsbykpfHxuLmVudW1lcmFibGV9KTtyZXR1cm4gdH07dmFyIHA9dD0+ZyhhKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQpO3ZhciB4PXt9O3UoeCx7Z2V0UG9ydDooKT0+YixnZXRQb3J0TWFwOigpPT5pfSk7bW9kdWxlLmV4cG9ydHM9cCh4KTt2YXIgaD1nbG9iYWxUaGlzLmJyb3dzZXI/LnRhYnN8fGdsb2JhbFRoaXMuY2hyb21lPy50YWJzLHM9KCk9PntsZXQgdD1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lO2lmKCF0KXRocm93IG5ldyBFcnJvcihcIkV4dGVuc2lvbiBydW50aW1lIGlzIG5vdCBhdmFpbGFibGVcIik7cmV0dXJuIHR9O3ZhciBpPSgpPT5nbG9iYWxUaGlzLl9fcGxhc21vSW50ZXJuYWxQb3J0TWFwLGI9dD0+e2xldCByPWkoKS5nZXQodCk7aWYoIXIpdGhyb3cgbmV3IEVycm9yKGBQb3J0ICR7dH0gbm90IGZvdW5kYCk7cmV0dXJuIHJ9O3MoKS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHQsZSxyKT0+e3N3aXRjaCh0Ll9fUExBU01PX0lOVEVSTkFMX1NJR05BTF9fKXtjYXNlXCJfX1BMQVNNT19NRVNTQUdJTkdfUElOR19fXCI6e3IoITApO2JyZWFrfX1yZXR1cm4hMH0pOzAmJihtb2R1bGUuZXhwb3J0cz17Z2V0UG9ydCxnZXRQb3J0TWFwfSk7XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb01lc3NhZ2luZyB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcblxuY29uc3QgU0VDUkVUID0gXCJMQUJBUlJFXCJcblxuY29uc3QgaGFuZGxlcjogUGxhc21vTWVzc2FnaW5nLlBvcnRIYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XG5cbiAgaWYgKHBhc3N3b3JkICE9PSBTRUNSRVQpIHtcbiAgICByZXMuc2VuZChcIihISU5UOiBIT01FVE9XTilcIilcbiAgfSBlbHNlIHtcbiAgICByZXMuc2VuZChcIkNBUFRBSU5cIilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iLCJpbXBvcnQgXCJAcGxhc21vaHEvbWVzc2FnaW5nL2JhY2tncm91bmRcIlxuXG5pbXBvcnQgeyBzdGFydEh1YiB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nL3B1Yi1zdWJcIlxuXG5jb25zb2xlLmxvZyhgQkdTVyAtIFN0YXJ0aW5nIEh1YmApXG5zdGFydEh1YigpXG4iLCJ2YXIgYT1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgbD1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgdT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBtPSh0LGUpPT57Zm9yKHZhciBuIGluIGUpYSh0LG4se2dldDplW25dLGVudW1lcmFibGU6ITB9KX0sZD0odCxlLG4sbyk9PntpZihlJiZ0eXBlb2YgZT09XCJvYmplY3RcInx8dHlwZW9mIGU9PVwiZnVuY3Rpb25cIilmb3IobGV0IHIgb2YgbChlKSkhdS5jYWxsKHQscikmJnIhPT1uJiZhKHQscix7Z2V0OigpPT5lW3JdLGVudW1lcmFibGU6IShvPWIoZSxyKSl8fG8uZW51bWVyYWJsZX0pO3JldHVybiB0fTt2YXIgcD10PT5kKGEoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdCk7dmFyIGg9e307bShoLHticm9hZGNhc3Q6KCk9PmMsY29ubmVjdFRvSHViOigpPT5nLGdldEh1Yk1hcDooKT0+aSxzdGFydEh1YjooKT0+eH0pO21vZHVsZS5leHBvcnRzPXAoaCk7dmFyIHk9Z2xvYmFsVGhpcy5icm93c2VyPy50YWJzfHxnbG9iYWxUaGlzLmNocm9tZT8udGFicyxzPSgpPT57bGV0IHQ9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZTtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJFeHRlbnNpb24gcnVudGltZSBpcyBub3QgYXZhaWxhYmxlXCIpO3JldHVybiB0fTt2YXIgaT0oKT0+Z2xvYmFsVGhpcy5fX3BsYXNtb0ludGVybmFsSHViTWFwLHg9KCk9PntsZXQgdD1zKCk7aWYoIXQub25Db25uZWN0RXh0ZXJuYWwpdGhyb3cgbmV3IEVycm9yKFwib25Db25uZWN0IEV4dGVybmFsIG5vdCBhdmFpbGFibGUuIFlvdSBuZWVkIGV4dGVybmFsbHlfY29ubmVjdGFibGUgZW50cnkgcG9zc2libHlcIik7Z2xvYmFsVGhpcy5fX3BsYXNtb0ludGVybmFsSHViTWFwPW5ldyBNYXA7bGV0IGU9aSgpO3Qub25Db25uZWN0RXh0ZXJuYWwuYWRkTGlzdGVuZXIobj0+e2xldCBvPW4uc2VuZGVyLnRhYi5pZDtlLmhhcyhvKXx8KGUuc2V0KG8sbiksbi5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIocj0+e2Moe2Zyb206byxwYXlsb2FkOnJ9KX0pLG4ub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57ZS5kZWxldGUobyl9KSl9KX0sYz10PT57aSgpLmZvckVhY2goKG4sbyk9PntvIT09dC5mcm9tJiZuLnBvc3RNZXNzYWdlKHsuLi50LHRvOm99KX0pfSxnPXQ9PntsZXQgZT1zKCk7aWYoIWUuY29ubmVjdCl0aHJvdyBuZXcgRXJyb3IoXCJydW50aW1lLmNvbm5lY3Qgbm90IGF2YWlsYWJsZS4gWW91IG5lZWQgdG8gdXNlIHN0YXJ0SHViIGluIEJHU1dcIik7cmV0dXJuIGUuY29ubmVjdCh0KX07MCYmKG1vZHVsZS5leHBvcnRzPXticm9hZGNhc3QsY29ubmVjdFRvSHViLGdldEh1Yk1hcCxzdGFydEh1Yn0pO1xuIiwiaW1wb3J0IGNvbnRlbnRzQ2xpZW50SHViTWFpbldvcmxkIGZyb20gXCJ1cmw6Li4vLi4vLi4vY29udGVudHMvY2xpZW50LWh1Yi1tYWluLXdvcmxkXCJcbmltcG9ydCBjb250ZW50c01haW5Xb3JsZCBmcm9tIFwidXJsOi4uLy4uLy4uL2NvbnRlbnRzL21haW4td29ybGRcIlxuY2hyb21lLnNjcmlwdGluZy5yZWdpc3RlckNvbnRlbnRTY3JpcHRzKFtcbiAge1wiaWRcIjpcImNvbnRlbnRzQ2xpZW50SHViTWFpbldvcmxkXCIsXCJqc1wiOltjb250ZW50c0NsaWVudEh1Yk1haW5Xb3JsZC5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCI/XCIpWzBdXSxcIm1hdGNoZXNcIjpbXCI8YWxsX3VybHM+XCJdLFwid29ybGRcIjpcIk1BSU5cIn0sXG4gIHtcImlkXCI6XCJjb250ZW50c01haW5Xb3JsZFwiLFwianNcIjpbY29udGVudHNNYWluV29ybGQuc3BsaXQoXCIvXCIpLnBvcCgpLnNwbGl0KFwiP1wiKVswXV0sXCJtYXRjaGVzXCI6W1wiaHR0cHM6Ly9uYWRlbW8uZGF5Zm9yY2VoY20uY29tL015RGF5Zm9yY2UvTXlkYXlmb3JjZS5hc3B4XCJdLFwicnVuQXRcIjpcImRvY3VtZW50X3N0YXJ0XCIsXCJ3b3JsZFwiOlwiTUFJTlwifVxuXSkuY2F0Y2goXyA9PiB7fSlcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2J1bmRsZS11cmwnKS5nZXRCdW5kbGVVUkwoJ2dMOUhRJykgKyBcIi4uLy4uL2NsaWVudC1odWItbWFpbi13b3JsZC41MGY0NTMxNy5qc1wiICsgXCI/XCIgKyBEYXRlLm5vdygpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYnVuZGxlVVJMID0ge307XG5cbmZ1bmN0aW9uIGdldEJ1bmRsZVVSTENhY2hlZChpZCkge1xuICB2YXIgdmFsdWUgPSBidW5kbGVVUkxbaWRdO1xuXG4gIGlmICghdmFsdWUpIHtcbiAgICB2YWx1ZSA9IGdldEJ1bmRsZVVSTCgpO1xuICAgIGJ1bmRsZVVSTFtpZF0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0QnVuZGxlVVJMKCkge1xuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB2YXIgbWF0Y2hlcyA9ICgnJyArIGVyci5zdGFjaykubWF0Y2goLyhodHRwcz98ZmlsZXxmdHB8KGNocm9tZXxtb3p8c2FmYXJpLXdlYiktZXh0ZW5zaW9uKTpcXC9cXC9bXilcXG5dKy9nKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAvLyBUaGUgZmlyc3QgdHdvIHN0YWNrIGZyYW1lcyB3aWxsIGJlIHRoaXMgZnVuY3Rpb24gYW5kIGdldEJ1bmRsZVVSTENhY2hlZC5cbiAgICAgIC8vIFVzZSB0aGUgM3JkIG9uZSwgd2hpY2ggd2lsbCBiZSBhIHJ1bnRpbWUgaW4gdGhlIG9yaWdpbmFsIGJ1bmRsZS5cbiAgICAgIHJldHVybiBnZXRCYXNlVVJMKG1hdGNoZXNbMl0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnLyc7XG59XG5cbmZ1bmN0aW9uIGdldEJhc2VVUkwodXJsKSB7XG4gIHJldHVybiAoJycgKyB1cmwpLnJlcGxhY2UoL14oKD86aHR0cHM/fGZpbGV8ZnRwfChjaHJvbWV8bW96fHNhZmFyaS13ZWIpLWV4dGVuc2lvbik6XFwvXFwvLispXFwvW14vXSskLywgJyQxJykgKyAnLyc7XG59IC8vIFRPRE86IFJlcGxhY2UgdXNlcyB3aXRoIGBuZXcgVVJMKHVybCkub3JpZ2luYCB3aGVuIGllMTEgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZC5cblxuXG5mdW5jdGlvbiBnZXRPcmlnaW4odXJsKSB7XG4gIHZhciBtYXRjaGVzID0gKCcnICsgdXJsKS5tYXRjaCgvKGh0dHBzP3xmaWxlfGZ0cHwoY2hyb21lfG1venxzYWZhcmktd2ViKS1leHRlbnNpb24pOlxcL1xcL1teL10rLyk7XG5cbiAgaWYgKCFtYXRjaGVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPcmlnaW4gbm90IGZvdW5kJyk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlc1swXTtcbn1cblxuZXhwb3J0cy5nZXRCdW5kbGVVUkwgPSBnZXRCdW5kbGVVUkxDYWNoZWQ7XG5leHBvcnRzLmdldEJhc2VVUkwgPSBnZXRCYXNlVVJMO1xuZXhwb3J0cy5nZXRPcmlnaW4gPSBnZXRPcmlnaW47IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvYnVuZGxlLXVybCcpLmdldEJ1bmRsZVVSTCgnZ0w5SFEnKSArIFwiLi4vLi4vbWFpbi13b3JsZC4zYTM5ODdlNC5qc1wiICsgXCI/XCIgKyBEYXRlLm5vdygpOyJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);