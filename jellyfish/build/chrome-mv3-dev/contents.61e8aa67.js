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
})({"1MmSt":[function(require,module,exports) {
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
    "entryFilePath": "/Users/argyle.tad-y/Desktop/df_autologin_initial_demo-main 2/jellyfish/contents/index.ts",
    "bundleId": "6ddd1a4a61e8aa67",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 64246
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
        "https://nademo.dayforcehcm.com/MyDayforce/Mydayforce.aspx"
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

},{"dbad6d84dbfb757b":"7oiTR"}]},["1MmSt","3PApU"], "3PApU", "parcelRequiree89f")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFFLG9CQUFvQixXQUFVO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxJQUFFLFdBQVcsTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUU7UUFBSyxJQUFJLElBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxNQUFLLEtBQUssSUFBRSxJQUFJO1FBQWdCLEVBQUUsaUJBQWlCLFdBQVUsQ0FBQTtZQUFJLEVBQUUsR0FBRSxNQUFJLEVBQUUsS0FBSyxXQUFTLEVBQUUsS0FBSyxlQUFhLEtBQUksQ0FBQSxFQUFFLEVBQUUsS0FBSyxPQUFNLEVBQUUsT0FBTTtRQUFFLEdBQUU7WUFBQyxRQUFPLEVBQUU7UUFBTSxJQUFHLEVBQUUsWUFBWTtZQUFDLEdBQUcsQ0FBQztZQUFDLFlBQVc7UUFBQyxHQUFFO1lBQUMsY0FBYSxFQUFFLGdCQUFjO1FBQUc7SUFBRSIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjEvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtN2Q1Yzk0ODdjOWE2M2I3NC5qcyIsImNvbnRlbnRzL2luZGV4LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocSttZXNzYWdpbmdAMC42LjJfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvbWVzc2FnaW5nL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vbmFub2lkQDUuMC4zL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9uYW5vaWRANS4wLjMvbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjkuM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK21lc3NhZ2luZ0AwLjYuMl9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9tZXNzYWdpbmcvZGlzdC9yZWxheS5janMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGQ9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgeT0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBIPW5ldyBTZXQoZCksXz1lPT5ILmhhcyhlKSxHPWQuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgWj1fKFwiLS1kcnktcnVuXCIpLHA9KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIscT1wKCk7dmFyIHU9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHg9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+dShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLG09KC4uLmUpPT51KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUz0wLGM9KC4uLmUpPT5wKCkmJnUoYFxcdXsxRjdFMX0gJHtTKyt9YCwuLi5lKTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy9hcmd5bGUudGFkLXkvRGVza3RvcC9kZl9hdXRvbG9naW5faW5pdGlhbF9kZW1vLW1haW4gMi9qZWxseWZpc2gvY29udGVudHMvaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCI2ZGRkMWE0YTYxZThhYTY3XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6NjQyNDZ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSShlKXtELmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUk7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gYigpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIEMoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBFPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7ZnVuY3Rpb24gTChlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIE8oZT1DKCkpe2xldCB0PWIoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBCKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJngoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBQKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChPKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IGEgb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgdz1hLmNvZGVmcmFtZXx8YS5zdGFjazttKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2EubWVzc2FnZStgXG5gK3crYFxuXG5gK2EuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixCKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e20oYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBzPVwiX19wbGFzbW8tbG9hZGluZ19fXCI7ZnVuY3Rpb24gJCgpe2xldCBlPWdsb2JhbFRoaXMud2luZG93Py50cnVzdGVkVHlwZXM7aWYodHlwZW9mIGU+XCJ1XCIpcmV0dXJuO2xldCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInRydXN0ZWQtdHlwZXNcIl0nKT8uY29udGVudD8uc3BsaXQoXCIgXCIpLG89dD90W3Q/Lmxlbmd0aC0xXTp2b2lkIDA7cmV0dXJuIHR5cGVvZiBlPFwidVwiP2UuY3JlYXRlUG9saWN5KG98fGB0cnVzdGVkLWh0bWwtJHtzfWAse2NyZWF0ZUhUTUw6YT0+YX0pOnZvaWQgMH12YXIgVD0kKCk7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiBGKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPXM7bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7c30ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7c306aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtzfSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9RigpO2U9Tih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgVz1gJHtFfSR7bW9kdWxlLmlkfV9fYCxpLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7aT8uZGlzY29ubmVjdCgpLGk9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOld9KSxpLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGkub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIGooKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fWooKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/aS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb0NTQ29uZmlnIH0gZnJvbSBcInBsYXNtb1wiXG5cbmltcG9ydCB7IHJlbGF5TWVzc2FnZSwgc2VuZFRvQmFja2dyb3VuZCB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcbmltcG9ydCB7IHJlbGF5IH0gZnJvbSBcIkBwbGFzbW9ocS9tZXNzYWdpbmcvcmVsYXlcIlxuXG5leHBvcnQgY29uc3QgY29uZmlnOiBQbGFzbW9DU0NvbmZpZyA9IHtcbiAgbWF0Y2hlczogW1wiaHR0cHM6Ly9uYWRlbW8uZGF5Zm9yY2VoY20uY29tL015RGF5Zm9yY2UvTXlkYXlmb3JjZS5hc3B4XCJdXG59XG5cbnJlbGF5TWVzc2FnZSh7XG4gIG5hbWU6IFwiZ2V0LW1hbmlmZXN0XCJcbn0pXG5cbnJlbGF5KFxuICB7XG4gICAgbmFtZTogXCJtYXRoL2FkZFwiIGFzIGNvbnN0XG4gIH0sXG4gIGFzeW5jIChyZXEpID0+IHtcbiAgICBjb25zdCB7IGEsIGIgfSA9IHJlcS5ib2R5XG4gICAgY29uc3QgbWludXNSZXN1bHQgPSBhIC0gYiAtIDlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJzdWJ0cmFjdC1yZXN1bHRcIlxuICAgICkuaW5uZXJUZXh0ID0gYCR7YX0gbWludXMgJHtifSBpcyAke21pbnVzUmVzdWx0fWBcblxuICAgIGNvbnN0IGFkZFJlc3VsdCA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQocmVxKVxuICAgIHJldHVybiBhZGRSZXN1bHRcbiAgfVxuKVxuIiwiaW1wb3J0e25hbm9pZCBhcyBifWZyb21cIm5hbm9pZFwiO3ZhciBsPWdsb2JhbFRoaXMuYnJvd3Nlcj8udGFic3x8Z2xvYmFsVGhpcy5jaHJvbWU/LnRhYnMsZD0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiRXh0ZW5zaW9uIHJ1bnRpbWUgaXMgbm90IGF2YWlsYWJsZVwiKTtyZXR1cm4gZX0saT0oKT0+e2lmKCFsKXRocm93IG5ldyBFcnJvcihcIkV4dGVuc2lvbiB0YWJzIEFQSSBpcyBub3QgYXZhaWxhYmxlXCIpO3JldHVybiBsfSxtPWFzeW5jKCk9PntsZXQgZT1pKCksW2FdPWF3YWl0IGUucXVlcnkoe2FjdGl2ZTohMCxjdXJyZW50V2luZG93OiEwfSk7cmV0dXJuIGF9LGc9KGUsYSk9PiFhLl9faW50ZXJuYWwmJmUuc291cmNlPT09Z2xvYmFsVGhpcy53aW5kb3cmJmUuZGF0YS5uYW1lPT09YS5uYW1lJiYoYS5yZWxheUlkPT09dm9pZCAwfHxlLmRhdGEucmVsYXlJZD09PWEucmVsYXlJZCk7dmFyIGM9KGUsYSxuPWdsb2JhbFRoaXMud2luZG93KT0+e2xldCByPWFzeW5jIHM9PntpZihnKHMsZSkmJiFzLmRhdGEucmVsYXllZCl7bGV0IG89e25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGJvZHk6cy5kYXRhLmJvZHl9LHQ9YXdhaXQgYT8uKG8pO24ucG9zdE1lc3NhZ2Uoe25hbWU6ZS5uYW1lLHJlbGF5SWQ6ZS5yZWxheUlkLGluc3RhbmNlSWQ6cy5kYXRhLmluc3RhbmNlSWQsYm9keTp0LHJlbGF5ZWQ6ITB9LHt0YXJnZXRPcmlnaW46ZS50YXJnZXRPcmlnaW58fFwiL1wifSl9fTtyZXR1cm4gbi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHIpLCgpPT5uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIscil9LHk9KGUsYT1nbG9iYWxUaGlzLndpbmRvdyk9Pm5ldyBQcm9taXNlKChuLHIpPT57bGV0IHM9YigpLG89bmV3IEFib3J0Q29udHJvbGxlcjthLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdD0+e2codCxlKSYmdC5kYXRhLnJlbGF5ZWQmJnQuZGF0YS5pbnN0YW5jZUlkPT09cyYmKG4odC5kYXRhLmJvZHkpLG8uYWJvcnQoKSl9LHtzaWduYWw6by5zaWduYWx9KSxhLnBvc3RNZXNzYWdlKHsuLi5lLGluc3RhbmNlSWQ6c30se3RhcmdldE9yaWdpbjplLnRhcmdldE9yaWdpbnx8XCIvXCJ9KX0pO3ZhciBwPWFzeW5jIGU9PmQoKS5zZW5kTWVzc2FnZShlLmV4dGVuc2lvbklkPz9udWxsLGUpLHg9YXN5bmMgZT0+e2xldCBhPXR5cGVvZiBlLnRhYklkPT1cIm51bWJlclwiP2UudGFiSWQ6KGF3YWl0IG0oKSk/LmlkO2lmKCFhKXRocm93IG5ldyBFcnJvcihcIk5vIGFjdGl2ZSB0YWIgZm91bmQgdG8gc2VuZCBtZXNzYWdlIHRvLlwiKTtyZXR1cm4gaSgpLnNlbmRNZXNzYWdlKGEsZSl9LGg9eCxNPWU9PmMoZSxwKSxFPU0sdT15LFM9dTtleHBvcnR7RSBhcyByZWxheSxNIGFzIHJlbGF5TWVzc2FnZSxoIGFzIHNlbmRUb0FjdGl2ZUNvbnRlbnRTY3JpcHQscCBhcyBzZW5kVG9CYWNrZ3JvdW5kLHUgYXMgc2VuZFRvQmFja2dyb3VuZFZpYVJlbGF5LHggYXMgc2VuZFRvQ29udGVudFNjcmlwdCxTIGFzIHNlbmRWaWFSZWxheX07XG4iLCJleHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IGxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmV4cG9ydCBsZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbiIsImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwidmFyIGk9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBkPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIG09T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIGM9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgeT0oYSxlKT0+e2Zvcih2YXIgdCBpbiBlKWkoYSx0LHtnZXQ6ZVt0XSxlbnVtZXJhYmxlOiEwfSl9LGI9KGEsZSx0LG4pPT57aWYoZSYmdHlwZW9mIGU9PVwib2JqZWN0XCJ8fHR5cGVvZiBlPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBzIG9mIG0oZSkpIWMuY2FsbChhLHMpJiZzIT09dCYmaShhLHMse2dldDooKT0+ZVtzXSxlbnVtZXJhYmxlOiEobj1kKGUscykpfHxuLmVudW1lcmFibGV9KTtyZXR1cm4gYX07dmFyIHU9YT0+YihpKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGEpO3ZhciB3PXt9O3kodyx7cmVsYXk6KCk9Pngsc2VuZFZpYVJlbGF5OigpPT5wfSk7bW9kdWxlLmV4cG9ydHM9dSh3KTt2YXIgZz1yZXF1aXJlKFwibmFub2lkXCIpO3ZhciBoPWdsb2JhbFRoaXMuYnJvd3Nlcj8udGFic3x8Z2xvYmFsVGhpcy5jaHJvbWU/LnRhYnM7dmFyIGw9KGEsZSk9PiFlLl9faW50ZXJuYWwmJmEuc291cmNlPT09Z2xvYmFsVGhpcy53aW5kb3cmJmEuZGF0YS5uYW1lPT09ZS5uYW1lJiYoZS5yZWxheUlkPT09dm9pZCAwfHxhLmRhdGEucmVsYXlJZD09PWUucmVsYXlJZCk7dmFyIHg9KGEsZSx0PWdsb2JhbFRoaXMud2luZG93KT0+e2xldCBuPWFzeW5jIHM9PntpZihsKHMsYSkmJiFzLmRhdGEucmVsYXllZCl7bGV0IHI9e25hbWU6YS5uYW1lLHJlbGF5SWQ6YS5yZWxheUlkLGJvZHk6cy5kYXRhLmJvZHl9LG89YXdhaXQgZT8uKHIpO3QucG9zdE1lc3NhZ2Uoe25hbWU6YS5uYW1lLHJlbGF5SWQ6YS5yZWxheUlkLGluc3RhbmNlSWQ6cy5kYXRhLmluc3RhbmNlSWQsYm9keTpvLHJlbGF5ZWQ6ITB9LHt0YXJnZXRPcmlnaW46YS50YXJnZXRPcmlnaW58fFwiL1wifSl9fTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG4pLCgpPT50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbil9LHA9KGEsZT1nbG9iYWxUaGlzLndpbmRvdyk9Pm5ldyBQcm9taXNlKCh0LG4pPT57bGV0IHM9KDAsZy5uYW5vaWQpKCkscj1uZXcgQWJvcnRDb250cm9sbGVyO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixvPT57bChvLGEpJiZvLmRhdGEucmVsYXllZCYmby5kYXRhLmluc3RhbmNlSWQ9PT1zJiYodChvLmRhdGEuYm9keSksci5hYm9ydCgpKX0se3NpZ25hbDpyLnNpZ25hbH0pLGUucG9zdE1lc3NhZ2Uoey4uLmEsaW5zdGFuY2VJZDpzfSx7dGFyZ2V0T3JpZ2luOmEudGFyZ2V0T3JpZ2lufHxcIi9cIn0pfSk7MCYmKG1vZHVsZS5leHBvcnRzPXtyZWxheSxzZW5kVmlhUmVsYXl9KTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJjb250ZW50cy42MWU4YWE2Ny5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);