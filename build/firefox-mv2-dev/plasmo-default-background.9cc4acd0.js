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
})({"kuPwI":[function(require,module,exports) {
var m = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var y = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var A = new Set(m), _ = (e)=>A.has(e), W = m.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, s])=>(e[t] = s, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || y().VERBOSE === "true", I = g();
var f = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var v = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), b = (...e)=>f("\uD83D\uDD35 INFO", ...e), h = (...e)=>f("\uD83D\uDFE0 WARN", ...e), M = 0, c = (...e)=>g() && f(`\u{1F7E1} ${M++}`, ...e);
var o = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 60518,
    "entryFilePath": "/Users/zack/Google Drive/Projects/Github/Snippy/snippy/node_modules/.pnpm/@plasmohq+parcel-transformer-manifest@0.14.6/node_modules/@plasmohq/parcel-transformer-manifest/runtime/plasmo-default-background.ts",
    "bundleId": "7a2375a79cc4acd0",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 60517
};
module.bundle.HMR_BUNDLE_ID = o.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: o.verbose
    }
};
var T = module.bundle.Module;
function D(e) {
    T.call(this, e), this.hot = {
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
module.bundle.Module = D;
module.bundle.hotData = {};
var l = globalThis.chrome || globalThis.browser || null;
function u() {
    return !o.host || o.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : o.host;
}
function p() {
    return o.port || location.port;
}
var B = `${o.secure ? "https" : "http"}://${u()}:${p()}/`;
async function x(e = 1470) {
    for(;;)try {
        await fetch(B);
        break;
    } catch  {
        await new Promise((s)=>setTimeout(s, e));
    }
}
if (l.runtime.getManifest().manifest_version === 3) {
    let e = l.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let s = t.request.url;
        if (s.startsWith(e)) {
            let n = new URL(decodeURIComponent(s.slice(e.length)));
            n.hostname === o.host && n.port === `${o.port}` ? (n.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(n).then((r)=>new Response(r.body, {
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
function R(e, t) {
    let { modules: s  } = e;
    return s ? !!s[t] : !1;
}
function k(e = p()) {
    let t = u();
    return `${o.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function S(e) {
    typeof e.message == "string" && v("[plasmo/parcel-runtime]: " + e.message);
}
function L(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(k(Number(p()) + 1));
    return t.addEventListener("message", async function(s) {
        if (JSON.parse(s.data).type === "build_ready") {
            await e();
            return;
        }
    }), t.addEventListener("error", S), t;
}
function E(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(k());
    return t.addEventListener("message", async function(s) {
        let n = JSON.parse(s.data);
        if (n.type === "update" && await e(n.assets), n.type === "error") for (let r of n.diagnostics.ansi){
            let i = r.codeframe || r.stack;
            h("[plasmo/parcel-runtime]: " + r.message + `
` + i + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", S), t.addEventListener("open", ()=>{
        b(`[plasmo/parcel-runtime]: Connected to HMR server for ${o.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        h(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${o.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    hmrUpdated: !1,
    csCodeChanged: !1,
    ports: new Set
};
async function d(e = !1) {
    if (e || a.buildReady && (a.hmrUpdated || a.csCodeChanged)) {
        c("BGSW Runtime - reloading");
        let t = await chrome.tabs.query({
            active: !0
        });
        for (let s of a.ports){
            let n = t.some((r)=>r.id === s.sender.tab.id);
            s.postMessage({
                __plasmo_cs_active_tab__: n
            });
        }
        l.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    let e = E(async (t)=>{
        c("BGSW Runtime - On HMR Update"), a.hmrUpdated ||= t.filter((n)=>n.envHash === o.envHash).some((n)=>R(module.bundle, n.id));
        let s = t.find((n)=>n.type === "json");
        if (s) {
            let n = new Set(t.map((i)=>i.id)), r = Object.values(s.depsByBundle).map((i)=>Object.values(i)).flat();
            a.hmrUpdated ||= r.every((i)=>n.has(i));
        }
        d();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await x(), d(!0);
    });
}
L(async ()=>{
    c("BGSW Runtime - On Build Repackaged"), a.buildReady ||= !0, d();
});
l.runtime.onConnect.addListener(function(e) {
    e.name.startsWith("__plasmo_runtime_script_") && (a.ports.add(e), e.onDisconnect.addListener(()=>{
        a.ports.delete(e);
    }), e.onMessage.addListener(function(t) {
        t.__plasmo_cs_changed__ && (c("BGSW Runtime - On CS code changed"), a.csCodeChanged ||= !0, d());
    }));
});
l.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (c("BGSW Runtime - On top-level code changed"), d()), !0;
});

},{}],"9EBsB":[function(require,module,exports) {

},{}]},["kuPwI","9EBsB"], "9EBsB", "parcelRequiref11f")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNDLEVBQUUsVUFBVSxLQUFHLENBQUMsR0FBRSxHQUFHO0FBQUE7QUFBRyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFDO0lBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLCtCQUE4QixDQUFBLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFHLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJO1FBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQUUsSUFBRyxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFBQyxFQUFFLHFCQUFxQixJQUFHLENBQUEsRUFBRSxzQ0FBcUMsRUFBRSxhQUFhLEtBQUcsQ0FBQyxHQUFFLEdBQUcsQUFBRDtJQUFFLEVBQUUsQUFBRDtBQUFFO0FBQUcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBQztJQUFDLE9BQU8sRUFBRSxzQkFBc0IsSUFBRyxDQUFBLEVBQUUsNkNBQTRDLEdBQUcsQUFBRCxHQUFHLENBQUMsQ0FBQztBQUFBIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMTguMS9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS02NGViZjBlZDUyZGUwNDkzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtdHJhbnNmb3JtZXItbWFuaWZlc3RAMC4xNC42L25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXRyYW5zZm9ybWVyLW1hbmlmZXN0L3J1bnRpbWUvcGxhc21vLWRlZmF1bHQtYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbT10eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5hcmd2OltdO3ZhciB5PSgpPT50eXBlb2YgZ2xvYmFsVGhpcy5wcm9jZXNzPFwidVwiP2dsb2JhbFRoaXMucHJvY2Vzcy5lbnY6e307dmFyIEE9bmV3IFNldChtKSxfPWU9PkEuaGFzKGUpLFc9bS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxzXSk9PihlW3RdPXMsZSkse30pO3ZhciBVPV8oXCItLWRyeS1ydW5cIiksZz0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8eSgpLlZFUkJPU0U9PT1cInRydWVcIixJPWcoKTt2YXIgZj0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgdj0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLGI9KC4uLmUpPT5mKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksaD0oLi4uZSk9PmYoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxNPTAsYz0oLi4uZSk9PmcoKSYmZihgXFx1ezFGN0UxfSAke00rK31gLC4uLmUpO3ZhciBvPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjo2MDUxOCxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy96YWNrL0dvb2dsZSBEcml2ZS9Qcm9qZWN0cy9HaXRodWIvU25pcHB5L3NuaXBweS9ub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC10cmFuc2Zvcm1lci1tYW5pZmVzdEAwLjE0LjYvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtdHJhbnNmb3JtZXItbWFuaWZlc3QvcnVudGltZS9wbGFzbW8tZGVmYXVsdC1iYWNrZ3JvdW5kLnRzXCIsXCJidW5kbGVJZFwiOlwiN2EyMzc1YTc5Y2M0YWNkMFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjYwNTE3fTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9by5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm8udmVyYm9zZX19O3ZhciBUPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEQoZSl7VC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1EO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgbD1nbG9iYWxUaGlzLmNocm9tZXx8Z2xvYmFsVGhpcy5icm93c2VyfHxudWxsO2Z1bmN0aW9uIHUoKXtyZXR1cm4hby5ob3N0fHxvLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpvLmhvc3R9ZnVuY3Rpb24gcCgpe3JldHVybiBvLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEI9YCR7by5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7dSgpfToke3AoKX0vYDthc3luYyBmdW5jdGlvbiB4KGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChCKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShzPT5zZXRUaW1lb3V0KHMsZSkpfX1pZihsLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9bC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IHM9dC5yZXF1ZXN0LnVybDtpZihzLnN0YXJ0c1dpdGgoZSkpe2xldCBuPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KHMuc2xpY2UoZS5sZW5ndGgpKSk7bi5ob3N0bmFtZT09PW8uaG9zdCYmbi5wb3J0PT09YCR7by5wb3J0fWA/KG4uc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gobikudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBSKGUsdCl7bGV0e21vZHVsZXM6c309ZTtyZXR1cm4gcz8hIXNbdF06ITF9ZnVuY3Rpb24gayhlPXAoKSl7bGV0IHQ9dSgpO3JldHVybmAke28uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIFMoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmdihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIEwoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KGsoTnVtYmVyKHAoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24ocyl7aWYoSlNPTi5wYXJzZShzLmRhdGEpLnR5cGU9PT1cImJ1aWxkX3JlYWR5XCIpe2F3YWl0IGUoKTtyZXR1cm59fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixTKSx0fWZ1bmN0aW9uIEUoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KGsoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihzKXtsZXQgbj1KU09OLnBhcnNlKHMuZGF0YSk7aWYobi50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShuLmFzc2V0cyksbi50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgciBvZiBuLmRpYWdub3N0aWNzLmFuc2kpe2xldCBpPXIuY29kZWZyYW1lfHxyLnN0YWNrO2goXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrci5tZXNzYWdlK2BcbmAraStgXG5cbmArci5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFMpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2IoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtvLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57aChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke28uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHc9bW9kdWxlLmJ1bmRsZS5wYXJlbnQsYT17YnVpbGRSZWFkeTohMSxobXJVcGRhdGVkOiExLGNzQ29kZUNoYW5nZWQ6ITEscG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gZChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJihhLmhtclVwZGF0ZWR8fGEuY3NDb2RlQ2hhbmdlZCkpe2MoXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmdcIik7bGV0IHQ9YXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgcyBvZiBhLnBvcnRzKXtsZXQgbj10LnNvbWUocj0+ci5pZD09PXMuc2VuZGVyLnRhYi5pZCk7cy5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOm59KX1sLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCF3fHwhdy5pc1BhcmNlbFJlcXVpcmUpe2xldCBlPUUoYXN5bmMgdD0+e2MoXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuaG1yVXBkYXRlZHx8PXQuZmlsdGVyKG49Pm4uZW52SGFzaD09PW8uZW52SGFzaCkuc29tZShuPT5SKG1vZHVsZS5idW5kbGUsbi5pZCkpO2xldCBzPXQuZmluZChuPT5uLnR5cGU9PT1cImpzb25cIik7aWYocyl7bGV0IG49bmV3IFNldCh0Lm1hcChpPT5pLmlkKSkscj1PYmplY3QudmFsdWVzKHMuZGVwc0J5QnVuZGxlKS5tYXAoaT0+T2JqZWN0LnZhbHVlcyhpKSkuZmxhdCgpO2EuaG1yVXBkYXRlZHx8PXIuZXZlcnkoaT0+bi5oYXMoaSkpfWQoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgeCgpLGQoITApfSl9TChhc3luYygpPT57YyhcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksYS5idWlsZFJlYWR5fHw9ITAsZCgpfSk7bC5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtlLm5hbWUuc3RhcnRzV2l0aChcIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiKSYmKGEucG9ydHMuYWRkKGUpLGUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57YS5wb3J0cy5kZWxldGUoZSl9KSxlLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXt0Ll9fcGxhc21vX2NzX2NoYW5nZWRfXyYmKGMoXCJCR1NXIFJ1bnRpbWUgLSBPbiBDUyBjb2RlIGNoYW5nZWRcIiksYS5jc0NvZGVDaGFuZ2VkfHw9ITAsZCgpKX0pKX0pO2wucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wbGFzbW9fZnVsbF9yZWxvYWRfXyYmKGMoXCJCR1NXIFJ1bnRpbWUgLSBPbiB0b3AtbGV2ZWwgY29kZSBjaGFuZ2VkXCIpLGQoKSksITB9KTtcbiIsIiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJwbGFzbW8tZGVmYXVsdC1iYWNrZ3JvdW5kLjljYzRhY2QwLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);