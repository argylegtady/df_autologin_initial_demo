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
})({"follo":[function(require,module,exports) {
var d = globalThis.process?.argv || [];
var y = ()=>globalThis.process?.env || {};
var H = new Set(d), _ = (e)=>H.has(e), G = d.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var Z = _("--dry-run"), p = ()=>_("--verbose") || y().VERBOSE === "true", q = p();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), S = 0, c = (...e)=>p() && u(`\u{1F7E1} ${S++}`, ...e);
var n = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/argyle.tad-y/Desktop/plasmo ex/jellyfish/contents/index.ts",
    "bundleId": "6ddd1a4a61e8aa67",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 51447
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function I(e) {
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
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function C() {
    return n.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let a of r.diagnostics.ansi){
            let w = a.codeframe || a.stack;
            m("[plasmo/parcel-runtime]: " + a.message + `
` + w + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var s = "__plasmo-loading__";
function $() {
    let e = globalThis.window?.trustedTypes;
    if (typeof e > "u") return;
    let t = document.querySelector('meta[name="trusted-types"]')?.content?.split(" "), o = t ? t[t?.length - 1] : void 0;
    return typeof e < "u" ? e.createPolicy(o || `trusted-html-${s}`, {
        createHTML: (a)=>a
    }) : void 0;
}
var T = $();
function g() {
    return document.getElementById(s);
}
function f() {
    return !g();
}
function F() {
    let e = document.createElement("div");
    e.id = s;
    let t = `
  <style>
    #${s} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${s}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${s} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${s} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${s} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${s} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function N(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = F();
        e = N(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var W = `${E}${module.id}__`, i, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    i?.disconnect(), i = l?.runtime.connect({
        name: W
    }), i.onDisconnect.addListener(()=>{
        h();
    }), i.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function j() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
j();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === n.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? i.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"3PApU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _messaging = require("@plasmohq/messaging");
var _relay = require("@plasmohq/messaging/relay");
const config = {
    matches: [
        "http://localhost:1947/*"
    ]
};
(0, _messaging.relayMessage)({
    name: "get-manifest"
});
(0, _relay.relay)({
    name: "math/add"
}, async (req)=>{
    const { a, b } = req.body;
    const minusResult = a - b - 9;
    document.getElementById("subtract-result").innerText = `${a} minus ${b} is ${minusResult}`;
    const addResult = await (0, _messaging.sendToBackground)(req);
    return addResult;
});

},{"@plasmohq/messaging":"9XZnZ","@plasmohq/messaging/relay":"eyysQ","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"9XZnZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "relay", ()=>E);
parcelHelpers.export(exports, "relayMessage", ()=>M);
parcelHelpers.export(exports, "sendToActiveContentScript", ()=>h);
parcelHelpers.export(exports, "sendToBackground", ()=>p);
parcelHelpers.export(exports, "sendToBackgroundViaRelay", ()=>u);
parcelHelpers.export(exports, "sendToContentScript", ()=>x);
parcelHelpers.export(exports, "sendViaRelay", ()=>S);
var _nanoid = require("nanoid");
var l = globalThis.browser?.tabs || globalThis.chrome?.tabs, d = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime;
    if (!e) throw new Error("Extension runtime is not available");
    return e;
}, i = ()=>{
    if (!l) throw new Error("Extension tabs API is not available");
    return l;
}, m = async ()=>{
    let e = i(), [a] = await e.query({
        active: !0,
        currentWindow: !0
    });
    return a;
}, g = (e, a)=>!a.__internal && e.source === globalThis.window && e.data.name === a.name && (a.relayId === void 0 || e.data.relayId === a.relayId);
var c = (e, a, n = globalThis.window)=>{
    let r = async (s)=>{
        if (g(s, e) && !s.data.relayed) {
            let o = {
                name: e.name,
                relayId: e.relayId,
                body: s.data.body
            }, t = await a?.(o);
            n.postMessage({
                name: e.name,
                relayId: e.relayId,
                instanceId: s.data.instanceId,
                body: t,
                relayed: !0
            }, {
                targetOrigin: e.targetOrigin || "/"
            });
        }
    };
    return n.addEventListener("message", r), ()=>n.removeEventListener("message", r);
}, y = (e, a = globalThis.window)=>new Promise((n, r)=>{
        let s = (0, _nanoid.nanoid)(), o = new AbortController;
        a.addEventListener("message", (t)=>{
            g(t, e) && t.data.relayed && t.data.instanceId === s && (n(t.data.body), o.abort());
        }, {
            signal: o.signal
        }), a.postMessage({
            ...e,
            instanceId: s
        }, {
            targetOrigin: e.targetOrigin || "/"
        });
    });
var p = async (e)=>d().sendMessage(e.extensionId ?? null, e), x = async (e)=>{
    let a = typeof e.tabId == "number" ? e.tabId : (await m())?.id;
    if (!a) throw new Error("No active tab found to send message to.");
    return i().sendMessage(a, e);
}, h = x, M = (e)=>c(e, p), E = M, u = y, S = u;

},{"nanoid":"7oiTR","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"7oiTR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>(0, _indexJs.urlAlphabet));
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "customRandom", ()=>customRandom);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
var _indexJs = require("./url-alphabet/index.js");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || "";
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random);
let nanoid = (size = 21)=>crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte > 62) id += "-";
        else id += "_";
        return id;
    }, "");

},{"./url-alphabet/index.js":"duWqZ","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"duWqZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>urlAlphabet);
const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"6dfwG":[function(require,module,exports) {
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

},{}],"eyysQ":[function(require,module,exports) {
var i = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var c = Object.prototype.hasOwnProperty;
var y = (a, e)=>{
    for(var t in e)i(a, t, {
        get: e[t],
        enumerable: !0
    });
}, b = (a, e, t, n)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let s of m(e))!c.call(a, s) && s !== t && i(a, s, {
        get: ()=>e[s],
        enumerable: !(n = d(e, s)) || n.enumerable
    });
    return a;
};
var u = (a)=>b(i({}, "__esModule", {
        value: !0
    }), a);
var w = {};
y(w, {
    relay: ()=>x,
    sendViaRelay: ()=>p
});
module.exports = u(w);
var g = require("dbad6d84dbfb757b");
var h = globalThis.browser?.tabs || globalThis.chrome?.tabs;
var l = (a, e)=>!e.__internal && a.source === globalThis.window && a.data.name === e.name && (e.relayId === void 0 || a.data.relayId === e.relayId);
var x = (a, e, t = globalThis.window)=>{
    let n = async (s)=>{
        if (l(s, a) && !s.data.relayed) {
            let r = {
                name: a.name,
                relayId: a.relayId,
                body: s.data.body
            }, o = await e?.(r);
            t.postMessage({
                name: a.name,
                relayId: a.relayId,
                instanceId: s.data.instanceId,
                body: o,
                relayed: !0
            }, {
                targetOrigin: a.targetOrigin || "/"
            });
        }
    };
    return t.addEventListener("message", n), ()=>t.removeEventListener("message", n);
}, p = (a, e = globalThis.window)=>new Promise((t, n)=>{
        let s = (0, g.nanoid)(), r = new AbortController;
        e.addEventListener("message", (o)=>{
            l(o, a) && o.data.relayed && o.data.instanceId === s && (t(o.data.body), r.abort());
        }, {
            signal: r.signal
        }), e.postMessage({
            ...a,
            instanceId: s
        }, {
            targetOrigin: a.targetOrigin || "/"
        });
    });

},{"dbad6d84dbfb757b":"7oiTR"}]},["follo","3PApU"], "3PApU", "parcelRequiree89f")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksSUFBRSxXQUFXLFNBQVMsUUFBTSxFQUFFO0FBQUMsSUFBSSxJQUFFLElBQUksV0FBVyxTQUFTLE9BQUssQ0FBQztBQUFFLElBQUksSUFBRSxJQUFJLElBQUksSUFBRyxJQUFFLENBQUEsSUFBRyxFQUFFLElBQUksSUFBRyxJQUFFLEVBQUUsT0FBTyxDQUFBLElBQUcsRUFBRSxXQUFXLFNBQU8sRUFBRSxTQUFTLE1BQU0sSUFBSSxDQUFBLElBQUcsRUFBRSxNQUFNLE1BQU0sT0FBTyxDQUFDLEdBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUMsR0FBRSxDQUFBLEdBQUcsQ0FBQztBQUFHLElBQUksSUFBRSxFQUFFLGNBQWEsSUFBRSxJQUFJLEVBQUUsZ0JBQWMsSUFBSSxZQUFVLFFBQU8sSUFBRTtBQUFJLElBQUksSUFBRSxDQUFDLElBQUUsRUFBRSxFQUFDLEdBQUcsSUFBSSxRQUFRLElBQUksRUFBRSxPQUFPLElBQUcsUUFBTztBQUFHLElBQUksSUFBRSxDQUFDLEdBQUcsSUFBSSxRQUFRLE1BQU0scUJBQWtCLE9BQU8sSUFBRyxRQUFPLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSx3QkFBb0IsSUFBRyxJQUFFLEdBQUUsSUFBRSxDQUFDLEdBQUcsSUFBSSxPQUFLLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUk7QUFBRyxJQUFJLElBQUU7SUFBQyxtQkFBa0I7SUFBSyxnQkFBZTtJQUFNLFdBQVU7SUFBTSxZQUFXO1FBQUM7S0FBaUI7SUFBQyxRQUFPO0lBQVksUUFBTztJQUFLLGlCQUFnQjtJQUFvRSxZQUFXO0lBQW1CLFdBQVU7SUFBbUIsV0FBVTtJQUFRLFVBQVM7SUFBTSxjQUFhO0FBQUs7QUFBRSxPQUFPLE9BQU8sZ0JBQWMsRUFBRTtBQUFTLFdBQVcsVUFBUTtJQUFDLE1BQUssRUFBRTtJQUFDLEtBQUk7UUFBQyxTQUFRLEVBQUU7SUFBTztBQUFDO0FBQUUsSUFBSSxJQUFFLE9BQU8sT0FBTztBQUFPLFNBQVMsRUFBRSxDQUFDO0lBQUUsRUFBRSxLQUFLLElBQUksRUFBQyxJQUFHLElBQUksQ0FBQyxNQUFJO1FBQUMsTUFBSyxPQUFPLE9BQU8sT0FBTyxDQUFDLEVBQUU7UUFBQyxrQkFBaUIsRUFBRTtRQUFDLG1CQUFrQixFQUFFO1FBQUMsUUFBTyxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsaUJBQWlCLEtBQUssS0FBRyxZQUFXO1FBQUU7UUFBRSxTQUFRLFNBQVMsQ0FBQztZQUFFLElBQUksQ0FBQyxrQkFBa0IsS0FBSztRQUFFO0lBQUMsR0FBRSxPQUFPLE9BQU8sT0FBTyxDQUFDLEVBQUUsR0FBQyxLQUFLO0FBQUM7QUFBQyxPQUFPLE9BQU8sU0FBTztBQUFFLE9BQU8sT0FBTyxVQUFRLENBQUM7QUFBRSxJQUFJLElBQUUsV0FBVyxXQUFTLFdBQVcsVUFBUTtBQUFLLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLGNBQVksRUFBRTtBQUFJO0FBQUMsU0FBUztJQUFJLE9BQU8sRUFBRSxRQUFNLFNBQVM7QUFBSTtBQUFDLElBQUksSUFBRTtBQUEyQixTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFBRSxJQUFHLEVBQUMsU0FBUSxDQUFDLEVBQUMsR0FBQztJQUFFLE9BQU8sSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUUsSUFBRSxHQUFHO0lBQUUsSUFBSSxJQUFFO0lBQUksT0FBTSxDQUFDLEVBQUUsRUFBRSxVQUFRLFNBQVMsYUFBVyxZQUFVLENBQUMsOEJBQThCLEtBQUssS0FBRyxRQUFNLEtBQUssR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUE7QUFBQyxTQUFTLEVBQUUsQ0FBQztJQUFFLE9BQU8sRUFBRSxXQUFTLFlBQVUsRUFBRSw4QkFBNEIsRUFBRTtBQUFRO0FBQUMsU0FBUyxFQUFFLENBQUM7SUFBRSxJQUFHLE9BQU8sV0FBVyxZQUFVLEtBQUk7SUFBTyxJQUFJLElBQUUsSUFBSSxVQUFVO0lBQUssT0FBTyxFQUFFLGlCQUFpQixXQUFVLGVBQWUsQ0FBQztRQUFFLElBQUksSUFBRSxLQUFLLE1BQU0sRUFBRTtRQUFNLElBQUcsRUFBRSxTQUFPLFlBQVUsTUFBTSxFQUFFLEVBQUUsU0FBUSxFQUFFLFNBQU8sU0FBUSxLQUFJLElBQUksS0FBSyxFQUFFLFlBQVksS0FBSztZQUFDLElBQUksSUFBRSxFQUFFLGFBQVcsRUFBRTtZQUFNLEVBQUUsOEJBQTRCLEVBQUUsVUFBUSxDQUFDO0FBQ2xnRSxDQUFDLEdBQUMsSUFBRSxDQUFDOztBQUVMLENBQUMsR0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ2hCLENBQUM7UUFBRTtJQUFDLElBQUcsRUFBRSxpQkFBaUIsU0FBUSxJQUFHLEVBQUUsaUJBQWlCLFFBQU87UUFBSyxFQUFFLENBQUMscURBQXFELEVBQUUsRUFBRSxjQUFjLENBQUM7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVE7UUFBSyxFQUFFLENBQUMsb0VBQW9FLEVBQUUsRUFBRSxjQUFjLENBQUM7SUFBQyxJQUFHO0FBQUM7QUFBQyxJQUFJLElBQUU7QUFBcUIsU0FBUztJQUFJLElBQUksSUFBRSxXQUFXLFFBQVE7SUFBYSxJQUFHLE9BQU8sSUFBRSxLQUFJO0lBQU8sSUFBSSxJQUFFLFNBQVMsY0FBYywrQkFBK0IsU0FBUyxNQUFNLE1BQUssSUFBRSxJQUFFLENBQUMsQ0FBQyxHQUFHLFNBQU8sRUFBRSxHQUFDLEtBQUs7SUFBRSxPQUFPLE9BQU8sSUFBRSxNQUFJLEVBQUUsYUFBYSxLQUFHLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFDO1FBQUMsWUFBVyxDQUFBLElBQUc7SUFBQyxLQUFHLEtBQUs7QUFBQztBQUFDLElBQUksSUFBRTtBQUFJLFNBQVM7SUFBSSxPQUFPLFNBQVMsZUFBZTtBQUFFO0FBQUMsU0FBUztJQUFJLE9BQU0sQ0FBQztBQUFHO0FBQUMsU0FBUztJQUFJLElBQUksSUFBRSxTQUFTLGNBQWM7SUFBTyxFQUFFLEtBQUc7SUFBRSxJQUFJLElBQUUsQ0FBQzs7S0FFanNCLEVBQUUsRUFBRTs7Ozs7OztLQU9KLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0tBZUosRUFBRSxFQUFFOzs7O0tBSUosRUFBRSxFQUFFOzs7O0tBSUosRUFBRSxFQUFFOzs7O0tBSUosRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7RUFZUCxDQUFDO0lBQUMsT0FBTyxFQUFFLFlBQVUsSUFBRSxFQUFFLFdBQVcsS0FBRyxHQUFFLEVBQUUsTUFBTSxnQkFBYyxRQUFPLEVBQUUsTUFBTSxXQUFTLFNBQVEsRUFBRSxNQUFNLFNBQU8sVUFBUyxFQUFFLE1BQU0sUUFBTSxVQUFTLEVBQUUsTUFBTSxhQUFXLGNBQWEsRUFBRSxNQUFNLFVBQVEsUUFBTyxFQUFFLE1BQU0saUJBQWUsVUFBUyxFQUFFLE1BQU0sYUFBVyxVQUFTLEVBQUUsTUFBTSxVQUFRLFVBQVMsRUFBRSxNQUFNLE1BQUksVUFBUyxFQUFFLE1BQU0sZUFBYSxTQUFRLEVBQUUsTUFBTSxTQUFPLGNBQWEsRUFBRSxNQUFNLFVBQVEsS0FBSSxFQUFFLE1BQU0sYUFBVyx5QkFBd0I7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsT0FBTyxJQUFJLFFBQVEsQ0FBQTtRQUFJLFNBQVMsa0JBQWlCLENBQUEsT0FBTSxDQUFBLFNBQVMsZ0JBQWdCLFlBQVksSUFBRyxHQUFFLEdBQUcsR0FBRSxJQUFHLFdBQVcsaUJBQWlCLG9CQUFtQjtZQUFLLE9BQUssU0FBUyxnQkFBZ0IsWUFBWSxJQUFHO1FBQUc7SUFBRTtBQUFFO0FBQUMsSUFBSSxJQUFFO0lBQUssSUFBSTtJQUFFLElBQUcsS0FBSTtRQUFDLElBQUksSUFBRTtRQUFJLElBQUUsRUFBRTtJQUFFO0lBQUMsT0FBTTtRQUFDLE1BQUssT0FBTSxFQUFDLGNBQWEsSUFBRSxDQUFDLENBQUMsRUFBQyxHQUFDLENBQUMsQ0FBQztZQUFJLE1BQU07WUFBRSxJQUFJLElBQUU7WUFBSSxFQUFFLE1BQU0sVUFBUSxLQUFJLEtBQUksQ0FBQSxFQUFFLFVBQVEsQ0FBQTtnQkFBSSxFQUFFLG1CQUFrQixXQUFXLFNBQVM7WUFBUSxHQUFFLEVBQUUsY0FBYyxRQUFRLFVBQVUsT0FBTyxXQUFVLEVBQUUsTUFBTSxTQUFPLFdBQVUsRUFBRSxNQUFNLGdCQUFjLEtBQUk7UUFBRTtRQUFFLE1BQUs7WUFBVSxNQUFNO1lBQUUsSUFBSSxJQUFFO1lBQUksRUFBRSxNQUFNLFVBQVE7UUFBRztJQUFDO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUMsR0FBRSxJQUFFLENBQUMsR0FBRSxJQUFFO0FBQUksZUFBZTtJQUFJLEVBQUUsK0JBQThCLElBQUUsV0FBVyxVQUFVLGFBQVcsRUFBRSxLQUFLO1FBQUMsY0FBYSxDQUFDO0lBQUM7QUFBRTtBQUFDLFNBQVM7SUFBSSxHQUFHLGNBQWEsSUFBRSxHQUFHLFFBQVEsUUFBUTtRQUFDLE1BQUs7SUFBQyxJQUFHLEVBQUUsYUFBYSxZQUFZO1FBQUs7SUFBRyxJQUFHLEVBQUUsVUFBVSxZQUFZLENBQUE7UUFBSSxFQUFFLHdCQUFzQixLQUFJLEVBQUUsNEJBQTJCLENBQUEsSUFBRSxDQUFDLENBQUE7SUFBRTtBQUFFO0FBQUMsU0FBUztJQUFJLElBQUcsR0FBRyxTQUFRLElBQUc7UUFBQyxLQUFJLFlBQVksR0FBRTtJQUFLLEVBQUMsT0FBSztRQUFDO0lBQU07QUFBQztBQUFDO0FBQUksRUFBRSxPQUFNO0lBQUksRUFBRSx1Q0FBc0MsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUUsUUFBTyxDQUFBLEVBQUUsUUFBTyxHQUFHLFVBQVEsRUFBRSxZQUFZO1FBQUMsdUJBQXNCLENBQUM7SUFBQyxLQUFHLFdBQVc7UUFBSztJQUFHLEdBQUUsS0FBSTtBQUFFOzs7Ozs0Q0MvQ2hsRDtBQUhiO0FBQ0E7QUFFTyxNQUFNLFNBQXlCO0lBQ3BDLFNBQVM7UUFBQztLQUEwQjtBQUN0QztBQUVBLENBQUEsR0FBQSx1QkFBVyxFQUFFO0lBQ1gsTUFBTTtBQUNSO0FBRUEsQ0FBQSxHQUFBLFlBQUksRUFDRjtJQUNFLE1BQU07QUFDUixHQUNBLE9BQU87SUFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUk7SUFDckIsTUFBTSxjQUFjLElBQUksSUFBSTtJQUU1QixTQUFTLGVBQ1AsbUJBQ0EsWUFBWSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDO0lBRWpELE1BQU0sWUFBWSxNQUFNLENBQUEsR0FBQSwyQkFBZSxFQUFFO0lBQ3pDLE9BQU87QUFDVDs7Ozs7QUMzQjIyQywyQ0FBTztBQUFQLGtEQUFrQjtBQUFsQiwrREFBb0M7QUFBcEMsc0RBQW1FO0FBQW5FLDhEQUF5RjtBQUF6Rix5REFBdUg7QUFBdkgsa0RBQWdKO0FBQTcvQztBQUFnQyxJQUFJLElBQUUsV0FBVyxTQUFTLFFBQU0sV0FBVyxRQUFRLE1BQUssSUFBRTtJQUFLLElBQUksSUFBRSxXQUFXLFNBQVMsV0FBUyxXQUFXLFFBQVE7SUFBUSxJQUFHLENBQUMsR0FBRSxNQUFNLElBQUksTUFBTTtJQUFzQyxPQUFPO0FBQUMsR0FBRSxJQUFFO0lBQUssSUFBRyxDQUFDLEdBQUUsTUFBTSxJQUFJLE1BQU07SUFBdUMsT0FBTztBQUFDLEdBQUUsSUFBRTtJQUFVLElBQUksSUFBRSxLQUFJLENBQUMsRUFBRSxHQUFDLE1BQU0sRUFBRSxNQUFNO1FBQUMsUUFBTyxDQUFDO1FBQUUsZUFBYyxDQUFDO0lBQUM7SUFBRyxPQUFPO0FBQUMsR0FBRSxJQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsRUFBRSxjQUFZLEVBQUUsV0FBUyxXQUFXLFVBQVEsRUFBRSxLQUFLLFNBQU8sRUFBRSxRQUFPLENBQUEsRUFBRSxZQUFVLEtBQUssS0FBRyxFQUFFLEtBQUssWUFBVSxFQUFFLE9BQU07QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBRSxXQUFXLE1BQU07SUFBSSxJQUFJLElBQUUsT0FBTTtRQUFJLElBQUcsRUFBRSxHQUFFLE1BQUksQ0FBQyxFQUFFLEtBQUssU0FBUTtZQUFDLElBQUksSUFBRTtnQkFBQyxNQUFLLEVBQUU7Z0JBQUssU0FBUSxFQUFFO2dCQUFRLE1BQUssRUFBRSxLQUFLO1lBQUksR0FBRSxJQUFFLE1BQU0sSUFBSTtZQUFHLEVBQUUsWUFBWTtnQkFBQyxNQUFLLEVBQUU7Z0JBQUssU0FBUSxFQUFFO2dCQUFRLFlBQVcsRUFBRSxLQUFLO2dCQUFXLE1BQUs7Z0JBQUUsU0FBUSxDQUFDO1lBQUMsR0FBRTtnQkFBQyxjQUFhLEVBQUUsZ0JBQWM7WUFBRztRQUFFO0lBQUM7SUFBRSxPQUFPLEVBQUUsaUJBQWlCLFdBQVUsSUFBRyxJQUFJLEVBQUUsb0JBQW9CLFdBQVU7QUFBRSxHQUFFLElBQUUsQ0FBQyxHQUFFLElBQUUsV0FBVyxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRTtRQUFLLElBQUksSUFBRSxDQUFBLEdBQUEsY0FBQSxLQUFJLElBQUUsSUFBSTtRQUFnQixFQUFFLGlCQUFpQixXQUFVLENBQUE7WUFBSSxFQUFFLEdBQUUsTUFBSSxFQUFFLEtBQUssV0FBUyxFQUFFLEtBQUssZUFBYSxLQUFJLENBQUEsRUFBRSxFQUFFLEtBQUssT0FBTSxFQUFFLE9BQU07UUFBRSxHQUFFO1lBQUMsUUFBTyxFQUFFO1FBQU0sSUFBRyxFQUFFLFlBQVk7WUFBQyxHQUFHLENBQUM7WUFBQyxZQUFXO1FBQUMsR0FBRTtZQUFDLGNBQWEsRUFBRSxnQkFBYztRQUFHO0lBQUU7QUFBRyxJQUFJLElBQUUsT0FBTSxJQUFHLElBQUksWUFBWSxFQUFFLGVBQWEsTUFBSyxJQUFHLElBQUUsT0FBTTtJQUFJLElBQUksSUFBRSxPQUFPLEVBQUUsU0FBTyxXQUFTLEVBQUUsUUFBTyxDQUFBLE1BQU0sR0FBRSxHQUFJO0lBQUcsSUFBRyxDQUFDLEdBQUUsTUFBTSxJQUFJLE1BQU07SUFBMkMsT0FBTyxJQUFJLFlBQVksR0FBRTtBQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsQ0FBQSxJQUFHLEVBQUUsR0FBRSxJQUFHLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRTs7Ozs7QUNBMzJDOzRDQUNXO2tEQUNBO29EQWVBOzRDQUVBO0FBbkJYO0FBQ08sSUFBSSxTQUFTLENBQUEsUUFBUyxPQUFPLGdCQUFnQixJQUFJLFdBQVc7QUFDNUQsSUFBSSxlQUFlLENBQUMsVUFBVSxhQUFhO0lBQ2hELElBQUksT0FBTyxBQUFDLENBQUEsS0FBTSxLQUFLLElBQUksU0FBUyxTQUFTLEtBQUssS0FBSyxHQUFHLElBQUs7SUFDL0QsSUFBSSxPQUFPLENBQUMsQ0FBRSxDQUFBLEFBQUMsTUFBTSxPQUFPLGNBQWUsU0FBUyxNQUFLO0lBQ3pELE9BQU8sQ0FBQyxPQUFPLFdBQVc7UUFDeEIsSUFBSSxLQUFLO1FBQ1QsTUFBTyxLQUFNO1lBQ1gsSUFBSSxRQUFRLFVBQVU7WUFDdEIsSUFBSSxJQUFJO1lBQ1IsTUFBTyxJQUFLO2dCQUNWLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJO2dCQUNuQyxJQUFJLEdBQUcsV0FBVyxNQUFNLE9BQU87WUFDakM7UUFDRjtJQUNGO0FBQ0Y7QUFDTyxJQUFJLGlCQUFpQixDQUFDLFVBQVUsT0FBTyxFQUFFLEdBQzlDLGFBQWEsVUFBVSxNQUFNO0FBQ3hCLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUM1QixPQUFPLGdCQUFnQixJQUFJLFdBQVcsT0FBTyxPQUFPLENBQUMsSUFBSTtRQUN2RCxRQUFRO1FBQ1IsSUFBSSxPQUFPLElBQ1QsTUFBTSxLQUFLLFNBQVM7YUFDZixJQUFJLE9BQU8sSUFDaEIsTUFBTSxBQUFDLENBQUEsT0FBTyxFQUFDLEVBQUcsU0FBUyxJQUFJO2FBQzFCLElBQUksT0FBTyxJQUNoQixNQUFNO2FBRU4sTUFBTTtRQUVSLE9BQU87SUFDVCxHQUFHOzs7OztpRENoQ1E7QUFBTixNQUFNLGNBQ1g7OztBQ0RGLFFBQVEsaUJBQWlCLFNBQVUsQ0FBQztJQUNsQyxPQUFPLEtBQUssRUFBRSxhQUFhLElBQUk7UUFBQyxTQUFTO0lBQUM7QUFDNUM7QUFFQSxRQUFRLG9CQUFvQixTQUFVLENBQUM7SUFDckMsT0FBTyxlQUFlLEdBQUcsY0FBYztRQUFDLE9BQU87SUFBSTtBQUNyRDtBQUVBLFFBQVEsWUFBWSxTQUFVLE1BQU0sRUFBRSxJQUFJO0lBQ3hDLE9BQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO1FBQ3ZDLElBQUksUUFBUSxhQUFhLFFBQVEsZ0JBQWdCLEtBQUssZUFBZSxNQUNuRTtRQUdGLE9BQU8sZUFBZSxNQUFNLEtBQUs7WUFDL0IsWUFBWTtZQUNaLEtBQUs7Z0JBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLFNBQVMsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxlQUFlLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0Y7OztBQzlCQSxJQUFJLElBQUUsT0FBTztBQUFlLElBQUksSUFBRSxPQUFPO0FBQXlCLElBQUksSUFBRSxPQUFPO0FBQW9CLElBQUksSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFO0lBQUssSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUM7SUFBQztBQUFFLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxHQUFFO0lBQUssSUFBRyxLQUFHLE9BQU8sS0FBRyxZQUFVLE9BQU8sS0FBRyxZQUFXLEtBQUksSUFBSSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFFLE1BQUksTUFBSSxLQUFHLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQUMsWUFBVyxDQUFFLENBQUEsSUFBRSxFQUFFLEdBQUUsRUFBQyxLQUFJLEVBQUU7SUFBVTtJQUFHLE9BQU87QUFBQztBQUFFLElBQUksSUFBRSxDQUFBLElBQUcsRUFBRSxFQUFFLENBQUMsR0FBRSxjQUFhO1FBQUMsT0FBTSxDQUFDO0lBQUMsSUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsRUFBRSxHQUFFO0lBQUMsT0FBTSxJQUFJO0lBQUUsY0FBYSxJQUFJO0FBQUM7QUFBRyxPQUFPLFVBQVEsRUFBRTtBQUFHLElBQUksSUFBRSxRQUFRO0FBQVUsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLFdBQVcsUUFBUTtBQUFLLElBQUksSUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLEVBQUUsY0FBWSxFQUFFLFdBQVMsV0FBVyxVQUFRLEVBQUUsS0FBSyxTQUFPLEVBQUUsUUFBTyxDQUFBLEVBQUUsWUFBVSxLQUFLLEtBQUcsRUFBRSxLQUFLLFlBQVUsRUFBRSxPQUFNO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUUsV0FBVyxNQUFNO0lBQUksSUFBSSxJQUFFLE9BQU07UUFBSSxJQUFHLEVBQUUsR0FBRSxNQUFJLENBQUMsRUFBRSxLQUFLLFNBQVE7WUFBQyxJQUFJLElBQUU7Z0JBQUMsTUFBSyxFQUFFO2dCQUFLLFNBQVEsRUFBRTtnQkFBUSxNQUFLLEVBQUUsS0FBSztZQUFJLEdBQUUsSUFBRSxNQUFNLElBQUk7WUFBRyxFQUFFLFlBQVk7Z0JBQUMsTUFBSyxFQUFFO2dCQUFLLFNBQVEsRUFBRTtnQkFBUSxZQUFXLEVBQUUsS0FBSztnQkFBVyxNQUFLO2dCQUFFLFNBQVEsQ0FBQztZQUFDLEdBQUU7Z0JBQUMsY0FBYSxFQUFFLGdCQUFjO1lBQUc7UUFBRTtJQUFDO0lBQUUsT0FBTyxFQUFFLGlCQUFpQixXQUFVLElBQUcsSUFBSSxFQUFFLG9CQUFvQixXQUFVO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxJQUFFLFdBQVcsTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUU7UUFBSyxJQUFJLElBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxNQUFLLEtBQUssSUFBRSxJQUFJO1FBQWdCLEVBQUUsaUJBQWlCLFdBQVUsQ0FBQTtZQUFJLEVBQUUsR0FBRSxNQUFJLEVBQUUsS0FBSyxXQUFTLEVBQUUsS0FBSyxlQUFhLEtBQUksQ0FBQSxFQUFFLEVBQUUsS0FBSyxPQUFNLEVBQUUsT0FBTTtRQUFFLEdBQUU7WUFBQyxRQUFPLEVBQUU7UUFBTSxJQUFHLEVBQUUsWUFBWTtZQUFDLEdBQUcsQ0FBQztZQUFDLFlBQVc7UUFBQyxHQUFFO1lBQUMsY0FBYSxFQUFFLGdCQUFjO1FBQUc7SUFBRSIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjEvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYjUxMjY4N2Y1MGRkZDcxZi5qcyIsImNvbnRlbnRzL2luZGV4LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocSttZXNzYWdpbmdAMC42LjJfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvbWVzc2FnaW5nL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vbmFub2lkQDUuMC4zL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9uYW5vaWRANS4wLjMvbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjkuM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK21lc3NhZ2luZ0AwLjYuMl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9yZWxheS5janMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGQ9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgeT0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBIPW5ldyBTZXQoZCksXz1lPT5ILmhhcyhlKSxHPWQuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgWj1fKFwiLS1kcnktcnVuXCIpLHA9KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIscT1wKCk7dmFyIHU9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHg9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+dShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLG09KC4uLmUpPT51KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUz0wLGM9KC4uLmUpPT5wKCkmJnUoYFxcdXsxRjdFMX0gJHtTKyt9YCwuLi5lKTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy9hcmd5bGUudGFkLXkvRGVza3RvcC9wbGFzbW8gZXgvamVsbHlmaXNoL2NvbnRlbnRzL2luZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiNmRkZDFhNGE2MWU4YWE2N1wiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjUxNDQ3fTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEkoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1JO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgbD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIGIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBDKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgRT1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO2Z1bmN0aW9uIEwoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBPKGU9QygpKXtsZXQgdD1iKCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gQihlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ4KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gUChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoTygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBhIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHc9YS5jb2RlZnJhbWV8fGEuc3RhY2s7bShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIithLm1lc3NhZ2UrYFxuYCt3K2BcblxuYCthLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQiksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PnttKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgcz1cIl9fcGxhc21vLWxvYWRpbmdfX1wiO2Z1bmN0aW9uICQoKXtsZXQgZT1nbG9iYWxUaGlzLndpbmRvdz8udHJ1c3RlZFR5cGVzO2lmKHR5cGVvZiBlPlwidVwiKXJldHVybjtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0cnVzdGVkLXR5cGVzXCJdJyk/LmNvbnRlbnQ/LnNwbGl0KFwiIFwiKSxvPXQ/dFt0Py5sZW5ndGgtMV06dm9pZCAwO3JldHVybiB0eXBlb2YgZTxcInVcIj9lLmNyZWF0ZVBvbGljeShvfHxgdHJ1c3RlZC1odG1sLSR7c31gLHtjcmVhdGVIVE1MOmE9PmF9KTp2b2lkIDB9dmFyIFQ9JCgpO2Z1bmN0aW9uIGcoKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocyl9ZnVuY3Rpb24gZigpe3JldHVybiFnKCl9ZnVuY3Rpb24gRigpe2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1zO2xldCB0PWBcbiAgPHN0eWxlPlxuICAgICMke3N9IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICBib3gtc2hhZG93OiAjMzMzIDQuN3B4IDQuN3B4O1xuICAgIH1cblxuICAgICMke3N9OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwge1xuICAgICAgMCUge1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgfVxuICAgIH1cblxuICAgICMke3N9IC5zdmctZWxlbS0xIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjhzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTIge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgIyR7c30gLnN2Zy1lbGVtLTMge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDFzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICA8L3N0eWxlPlxuICBcbiAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI2NCAzNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEzOS4yMjEgMjgyLjI0M0MxNTQuMjUyIDI4Mi4yNDMgMTY2LjkwMyAyOTQuODQ5IDE2MS4zMzggMzA4LjgxMkMxNTkuNDg5IDMxMy40NTQgMTU3LjE1IDMxNy45MTMgMTU0LjM0NyAzMjIuMTA5QzE0Ni40NjQgMzMzLjkwOSAxMzUuMjYgMzQzLjEwNyAxMjIuMTUxIDM0OC41MzhDMTA5LjA0MyAzNTMuOTY5IDk0LjYxODIgMzU1LjM5IDgwLjcwMjIgMzUyLjYyMUM2Ni43ODYxIDM0OS44NTIgNTQuMDAzNCAzNDMuMDE4IDQzLjk3MDUgMzMyLjk4M0MzMy45Mzc1IDMyMi45NDcgMjcuMTA1IDMxMC4xNjIgMjQuMzM2OSAyOTYuMjQyQzIxLjU2ODkgMjgyLjMyMyAyMi45ODk1IDI2Ny44OTUgMjguNDE5MyAyNTQuNzgzQzMzLjg0OTEgMjQxLjY3MSA0My4wNDQxIDIzMC40NjQgNTQuODQxNiAyMjIuNTc5QzU5LjAzNTMgMjE5Ljc3NyA2My40OTA4IDIxNy40MzggNjguMTI5NSAyMTUuNTg4QzgyLjA5MTUgMjEwLjAyMSA5NC42OTc4IDIyMi42NzEgOTQuNjk3OCAyMzcuNzAzTDk0LjY5NzggMjU1LjAyN0M5NC42OTc4IDI3MC4wNTggMTA2Ljg4MyAyODIuMjQzIDEyMS45MTQgMjgyLjI0M0gxMzkuMjIxWlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0xXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTE5Mi4yNjEgMTQyLjAyOEMxOTIuMjYxIDEyNi45OTYgMjA0Ljg2NyAxMTQuMzQ2IDIxOC44MjkgMTE5LjkxM0MyMjMuNDY4IDEyMS43NjMgMjI3LjkyMyAxMjQuMTAyIDIzMi4xMTcgMTI2LjkwNEMyNDMuOTE1IDEzNC43ODkgMjUzLjExIDE0NS45OTYgMjU4LjUzOSAxNTkuMTA4QzI2My45NjkgMTcyLjIyIDI2NS4zOSAxODYuNjQ4IDI2Mi42MjIgMjAwLjU2N0MyNTkuODU0IDIxNC40ODcgMjUzLjAyMSAyMjcuMjcyIDI0Mi45ODggMjM3LjMwOEMyMzIuOTU1IDI0Ny4zNDMgMjIwLjE3MyAyNTQuMTc3IDIwNi4yNTYgMjU2Ljk0NkMxOTIuMzQgMjU5LjcxNSAxNzcuOTE2IDI1OC4yOTQgMTY0LjgwNyAyNTIuODYzQzE1MS42OTkgMjQ3LjQzMiAxNDAuNDk1IDIzOC4yMzQgMTMyLjYxMiAyMjYuNDM0QzEyOS44MDggMjIyLjIzOCAxMjcuNDcgMjE3Ljc3OSAxMjUuNjIgMjEzLjEzN0MxMjAuMDU2IDE5OS4xNzQgMTMyLjcwNyAxODYuNTY4IDE0Ny43MzggMTg2LjU2OEwxNjUuMDQ0IDE4Ni41NjhDMTgwLjA3NiAxODYuNTY4IDE5Mi4yNjEgMTc0LjM4MyAxOTIuMjYxIDE1OS4zNTJMMTkyLjI2MSAxNDIuMDI4WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0yXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTk1LjY1MjIgMTY0LjEzNUM5NS42NTIyIDE3OS4xNjcgODMuMjI3OSAxOTEuNzI1IDY4LjgwMTMgMTg3LjUwNUM1OS41MTQ1IDE4NC43ODggNTAuNjQzMiAxODAuNjYzIDQyLjUxMDYgMTc1LjIyN0MyNi43ODA2IDE2NC43MTQgMTQuNTIwNiAxNDkuNzcyIDcuMjgwODkgMTMyLjI4OUMwLjA0MTE4MyAxMTQuODA3IC0xLjg1MzA1IDk1LjU2OTcgMS44Mzc3MiA3Ny4wMTA0QzUuNTI4NDkgNTguNDUxMSAxNC42Mzg1IDQxLjQwMzMgMjguMDE1NyAyOC4wMjI4QzQxLjM5MyAxNC42NDIzIDU4LjQzNjYgNS41MzAwNiA3Ni45OTE0IDEuODM4MzlDOTUuNTQ2MSAtMS44NTMyOSAxMTQuNzc5IDAuMDQxNDE2MiAxMzIuMjU3IDcuMjgyOUMxNDkuNzM1IDE0LjUyNDQgMTY0LjY3NCAyNi43ODc0IDE3NS4xODQgNDIuNTIxMkMxODAuNjIgNTAuNjU3NiAxODQuNzQ0IDU5LjUzMzIgMTg3LjQ2IDY4LjgyNDVDMTkxLjY3OCA4My4yNTE5IDE3OS4xMTkgOTUuNjc1OSAxNjQuMDg4IDk1LjY3NTlMMTIyLjg2OSA5NS42NzU5QzEwNy44MzcgOTUuNjc1OSA5NS42NTIyIDEwNy44NjEgOTUuNjUyMiAxMjIuODkyTDk1LjY1MjIgMTY0LjEzNVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tM1wiPjwvcGF0aD5cbiAgPC9zdmc+XG4gIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+Q29udGV4dCBJbnZhbGlkYXRlZCwgUHJlc3MgdG8gUmVsb2FkPC9zcGFuPlxuICBgO3JldHVybiBlLmlubmVySFRNTD1UP1QuY3JlYXRlSFRNTCh0KTp0LGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLmJvdHRvbT1cIjE0LjdweFwiLGUuc3R5bGUucmlnaHQ9XCIxNC43cHhcIixlLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsZS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGUuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixlLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixlLnN0eWxlLnBhZGRpbmc9XCIxNC43cHhcIixlLnN0eWxlLmdhcD1cIjE0LjdweFwiLGUuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNC43cHhcIixlLnN0eWxlLnpJbmRleD1cIjIxNDc0ODM2NDdcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNDdzIGVhc2UtaW4tb3V0XCIsZX1mdW5jdGlvbiBOKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT57ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50PyhmKCkmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpKSx0KCkpOmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e2YoKSYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKX0pfSl9dmFyIGs9KCk9PntsZXQgZTtpZihmKCkpe2xldCB0PUYoKTtlPU4odCl9cmV0dXJue3Nob3c6YXN5bmMoe3JlbG9hZEJ1dHRvbjp0PSExfT17fSk9Pnthd2FpdCBlO2xldCBvPWcoKTtvLnN0eWxlLm9wYWNpdHk9XCIxXCIsdCYmKG8ub25jbGljaz1yPT57ci5zdG9wUHJvcGFnYXRpb24oKSxnbG9iYWxUaGlzLmxvY2F0aW9uLnJlbG9hZCgpfSxvLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIiksby5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCIsby5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIpfSxoaWRlOmFzeW5jKCk9Pnthd2FpdCBlO2xldCB0PWcoKTt0LnN0eWxlLm9wYWNpdHk9XCIwXCJ9fX07dmFyIFc9YCR7RX0ke21vZHVsZS5pZH1fX2AsaSxBPSExLE09aygpO2FzeW5jIGZ1bmN0aW9uIGgoKXtjKFwiU2NyaXB0IFJ1bnRpbWUgLSByZWxvYWRpbmdcIiksQT9nbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpOk0uc2hvdyh7cmVsb2FkQnV0dG9uOiEwfSl9ZnVuY3Rpb24gUigpe2k/LmRpc2Nvbm5lY3QoKSxpPWw/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpXfSksaS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntoKCl9KSxpLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihlPT57ZS5fX3BsYXNtb19jc19yZWxvYWRfXyYmaCgpLGUuX19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fJiYoQT0hMCl9KX1mdW5jdGlvbiBqKCl7aWYobD8ucnVudGltZSl0cnl7UigpLHNldEludGVydmFsKFIsMjRlMyl9Y2F0Y2h7cmV0dXJufX1qKCk7UChhc3luYyBlPT57YyhcIlNjcmlwdCBydW50aW1lIC0gb24gdXBkYXRlZCBhc3NldHNcIiksZS5maWx0ZXIobz0+by5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKG89PkwobW9kdWxlLmJ1bmRsZSxvLmlkKSkmJihNLnNob3coKSxsPy5ydW50aW1lP2kucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2NoYW5nZWRfXzohMH0pOnNldFRpbWVvdXQoKCk9PntoKCl9LDQ3MDApKX0pO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGFzbW9DU0NvbmZpZyB9IGZyb20gXCJwbGFzbW9cIlxuXG5pbXBvcnQgeyByZWxheU1lc3NhZ2UsIHNlbmRUb0JhY2tncm91bmQgfSBmcm9tIFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiXG5pbXBvcnQgeyByZWxheSB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nL3JlbGF5XCJcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ1NDb25maWcgPSB7XG4gIG1hdGNoZXM6IFtcImh0dHA6Ly9sb2NhbGhvc3Q6MTk0Ny8qXCJdXG59XG5cbnJlbGF5TWVzc2FnZSh7XG4gIG5hbWU6IFwiZ2V0LW1hbmlmZXN0XCJcbn0pXG5cbnJlbGF5KFxuICB7XG4gICAgbmFtZTogXCJtYXRoL2FkZFwiIGFzIGNvbnN0XG4gIH0sXG4gIGFzeW5jIChyZXEpID0+IHtcbiAgICBjb25zdCB7IGEsIGIgfSA9IHJlcS5ib2R5XG4gICAgY29uc3QgbWludXNSZXN1bHQgPSBhIC0gYiAtIDlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJzdWJ0cmFjdC1yZXN1bHRcIlxuICAgICkuaW5uZXJUZXh0ID0gYCR7YX0gbWludXMgJHtifSBpcyAke21pbnVzUmVzdWx0fWBcblxuICAgIGNvbnN0IGFkZFJlc3VsdCA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQocmVxKVxuICAgIHJldHVybiBhZGRSZXN1bHRcbiAgfVxuKVxuIiwiaW1wb3J0e25hbm9pZCBhcyBifWZyb21cIm5hbm9pZFwiO3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcj8udGFic3x8Z2xvYmFsVGhpcy5jaHJvbWU/LnRhYnMsZD0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiRXh0ZW5zaW9uIHJ1bnRpbWUgaXMgbm90IGF2YWlsYWJsZVwiKTtyZXR1cm4gZX0saT0oKT0+e2lmKCFsKXRocm93IG5ldyBFcnJvcihcIkV4dGVuc2lvbiB0YWJzIEFQSSBpcyBub3QgYXZhaWxhYmxlXCIpO3JldHVybiBsfSxtPWFzeW5jKCk9PntsZXQgZT1pKCksW2FdPWF3YWl0IGUucXVlcnkoe2FjdGl2ZTohMCxjdXJyZW50V2luZG93OiEwfSk7cmV0dXJuIGF9LGc9KGUsYSk9PiFhLl9faW50ZXJuYWwmJmUuc291cmNlPT09Z2xvYmFsVGhpcy53aW5kb3cmJmUuZGF0YS5uYW1lPT09YS5uYW1lJiYoYS5yZWxheUlkPT09dm9pZCAwfHxlLmRhdGEucmVsYXlJZD09PWEucmVsYXlJZCk7dmFyIGM9KGUsYSxuPWdsb2JhbFRoaXMud2luZG93KT0+e2xldCByPWFzeW5jIHM9PntpZihnKHMsZSkmJiFzLmRhdGEucmVsYXllZCl7bGV0IG89e25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6cy5kYXRhLmJvZHl9LHQ9YXdhaXQgYT8uKG8pO24ucG9zdE1lc3NhZ2Uoe25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGluc3RhbmNlSWQ6cy5kYXRhLmluc3RhbmNlSWQsYm9keTp0LHJlbGF5ZWQ6ITB9LHt0YXJnZXRPcmlnaW46ZS50YXJnZXRPcmlnaW58fFwiL1wifSl9fTtyZXR1cm4gbi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHIpLCgpPT5uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIscil9LHk9KGUsYT1nbG9iYWxUaGlzLndpbmRvdyk9Pm5ldyBQcm9taXNlKChuLHIpPT57bGV0IHM9YigpLG89bmV3IEFib3J0Q29udHJvbGxlcjthLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdD0+e2codCxlKSYmdC5kYXRhLnJlbGF5ZWQmJnQuZGF0YS5pbnN0YW5jZUlkPT09cyYmKG4odC5kYXRhLmJvZHkpLG8uYWJvcnQoKSl9LHtzaWduYWw6by5zaWduYWx9KSxhLnBvc3RNZXNzYWdlKHsuLi5lLGluc3RhbmNlSWQ6c30se3RhcmdldE9yaWdpbjplLnRhcmdldE9yaWdpbnx8XCIvXCJ9KX0pO3ZhciBwPWFzeW5jIGU9PmQoKS5zZW5kTWVzc2FnZShlLmV4dGVuc2lvbklkPz9udWxsLGUpLHg9YXN5bmMgZT0+e2xldCBhPXR5cGVvZiBlLnRhYklkPT1cIm51bWJlclwiP2UudGFiSWQ6KGF3YWl0IG0oKSk/LmlkO2lmKCFhKXRocm93IG5ldyBFcnJvcihcIk5vIGFjdGl2ZSB0YWIgZm91bmQgdG8gc2VuZCBtZXNzYWdlIHRvLlwiKTtyZXR1cm4gaSgpLnNlbmRNZXNzYWdlKGEsZSl9LGg9eCxNPWU9PmMoZSxwKSxFPU0sdT15LFM9dTtleHBvcnR7RSBhcyByZWxheSxNIGFzIHJlbGF5TWVzc2FnZSxoIGFzIHNlbmRUb0FjdGl2ZUNvbnRlbnRTY3JpcHQscCBhcyBzZW5kVG9CYWNrZ3JvdW5kLHUgYXMgc2VuZFRvQmFja2dyb3VuZFZpYVJlbGF5LHggYXMgc2VuZFRvQ29udGVudFNjcmlwdCxTIGFzIHNlbmRWaWFSZWxheX07XG4iLCJleHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IGxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmV4cG9ydCBsZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbiIsImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwidmFyIGk9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBkPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIG09T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIGM9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgeT0oYSxlKT0+e2Zvcih2YXIgdCBpbiBlKWkoYSx0LHtnZXQ6ZVt0XSxlbnVtZXJhYmxlOiEwfSl9LGI9KGEsZSx0LG4pPT57aWYoZSYmdHlwZW9mIGU9PVwib2JqZWN0XCJ8fHR5cGVvZiBlPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBzIG9mIG0oZSkpIWMuY2FsbChhLHMpJiZzIT09dCYmaShhLHMse2dldDooKT0+ZVtzXSxlbnVtZXJhYmxlOiEobj1kKGUscykpfHxuLmVudW1lcmFibGV9KTtyZXR1cm4gYX07dmFyIHU9YT0+YihpKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGEpO3ZhciB3PXt9O3kodyx7cmVsYXk6KCk9Pngsc2VuZFZpYVJlbGF5OigpPT5wfSk7bW9kdWxlLmV4cG9ydHM9dSh3KTt2YXIgZz1yZXF1aXJlKFwibmFub2lkXCIpO3ZhciBoPWdsb2JhbFRoaXMuYnJvd3Nlcj8udGFic3x8Z2xvYmFsVGhpcy5jaHJvbWU/LnRhYnM7dmFyIGw9KGEsZSk9PiFlLl9faW50ZXJuYWwmJmEuc291cmNlPT09Z2xvYmFsVGhpcy53aW5kb3cmJmEuZGF0YS5uYW1lPT09ZS5uYW1lJiYoZS5yZWxheUlkPT09dm9pZCAwfHxhLmRhdGEucmVsYXlJZD09PWUucmVsYXlJZCk7dmFyIHg9KGEsZSx0PWdsb2JhbFRoaXMud2luZG93KT0+e2xldCBuPWFzeW5jIHM9PntpZihsKHMsYSkmJiFzLmRhdGEucmVsYXllZCl7bGV0IHI9e25hbWU6YS5uYW1lLHJlbGF5SWQ6YS5yZWxheUlkLGJvZHk6cy5kYXRhLmJvZHl9LG89YXdhaXQgZT8uKHIpO3QucG9zdE1lc3NhZ2Uoe25hbWU6YS5uYW1lLHJlbGF5SWQ6YS5yZWxheUlkLGluc3RhbmNlSWQ6cy5kYXRhLmluc3RhbmNlSWQsYm9keTpvLHJlbGF5ZWQ6ITB9LHt0YXJnZXRPcmlnaW46YS50YXJnZXRPcmlnaW58fFwiL1wifSl9fTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG4pLCgpPT50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbil9LHA9KGEsZT1nbG9iYWxUaGlzLndpbmRvdyk9Pm5ldyBQcm9taXNlKCh0LG4pPT57bGV0IHM9KDAsZy5uYW5vaWQpKCkscj1uZXcgQWJvcnRDb250cm9sbGVyO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixvPT57bChvLGEpJiZvLmRhdGEucmVsYXllZCYmby5kYXRhLmluc3RhbmNlSWQ9PT1zJiYodChvLmRhdGEuYm9keSksci5hYm9ydCgpKX0se3NpZ25hbDpyLnNpZ25hbH0pLGUucG9zdE1lc3NhZ2Uoey4uLmEsaW5zdGFuY2VJZDpzfSx7dGFyZ2V0T3JpZ2luOmEudGFyZ2V0T3JpZ2lufHxcIi9cIn0pfSk7MCYmKG1vZHVsZS5leHBvcnRzPXtyZWxheSxzZW5kVmlhUmVsYXl9KTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJjb250ZW50cy42MWU4YWE2Ny5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);