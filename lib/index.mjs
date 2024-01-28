import N, { useState as ne, useRef as fr, useEffect as xe, useMemo as lr } from "react";
var ae = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function cr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var p = N, g = Symbol.for("react.element"), A = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), y = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), C = Symbol.iterator, q = "@@iterator";
    function J(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = C && e[C] || e[q];
      return typeof r == "function" ? r : null;
    }
    var S = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var z = !1, G = !1, Fe = !1, Ae = !1, Ie = !1, oe;
    oe = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === O || Ie || e === x || e === b || e === d || Ae || e === j || z || G || Fe || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === E || e.$$typeof === w || e.$$typeof === y || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case A:
          return "Portal";
        case O:
          return "Profiler";
        case x:
          return "StrictMode";
        case b:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ie(r) + ".Consumer";
          case w:
            var t = e;
            return ie(t._context) + ".Provider";
          case l:
            return $e(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case h: {
            var i = e, u = i._payload, o = i._init;
            try {
              return R(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, I = 0, ue, se, fe, le, ce, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (I === 0) {
          ue = console.log, se = console.info, fe = console.warn, le = console.error, ce = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Ne() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ue
            }),
            info: P({}, e, {
              value: se
            }),
            warn: P({}, e, {
              value: fe
            }),
            error: P({}, e, {
              value: le
            }),
            group: P({}, e, {
              value: ce
            }),
            groupCollapsed: P({}, e, {
              value: de
            }),
            groupEnd: P({}, e, {
              value: ve
            })
          });
        }
        I < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = S.ReactCurrentDispatcher, K;
    function M(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, L;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Me();
    }
    function he(e, r) {
      if (!e || X)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = H.current, H.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, f = v.length - 1; s >= 1 && f >= 0 && a[s] !== v[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== v[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== v[f]) {
                    var m = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, m), m;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        X = !1, H.current = u, Ne(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", Pe = F ? M(F) : "";
      return typeof e == "function" && L.set(e, Pe), Pe;
    }
    function Le(e, r, t) {
      return he(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ve(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case b:
          return M("Suspense");
        case d:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Le(e.render);
          case E:
            return V(e.type, r, t);
          case h: {
            var n = e, i = n._payload, u = n._init;
            try {
              return V(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, me = {}, ge = S.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, i) {
      {
        var u = Function.call.bind(U);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (B(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), B(null)), a instanceof Error && !(a.message in me) && (me[a.message] = !0, B(i), c("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Be = Array.isArray;
    function Z(e) {
      return Be(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function be(e) {
      if (Je(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), Ee(e);
    }
    var W = S.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Re, Q;
    Q = {};
    function Ge(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = R(W.current.type);
        Q[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(W.current.type), e.ref), Q[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          ye || (ye = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Re || (Re = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (be(t), a = "" + t), He(r) && (be(r.key), a = "" + r.key), Ge(r) && (v = r.ref, Ke(r, i));
        for (u in r)
          U.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(o, f), v && Ze(o, f);
        }
        return Qe(e, a, v, i, n, W.current, o);
      }
    }
    var ee = S.ReactCurrentOwner, _e = S.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Te() {
      {
        if (ee.current) {
          var e = R(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var we = {};
    function tr(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + R(e._owner.type) + "."), D(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && Se(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = J(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              te(o.value) && Se(o.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var i = R(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Ce(e, r, t, n, i, u) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr(i);
          v ? a += v : a += Te();
          var s;
          e === null ? s = "null" : Z(e) ? s = "array" : e !== void 0 && e.$$typeof === g ? (s = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = er(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (Z(m)) {
                for (var F = 0; F < m.length; F++)
                  Oe(m[F], e);
                Object.freeze && Object.freeze(m);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(m, e);
        }
        return e === T ? ar(f) : nr(f), f;
      }
    }
    function or(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var ur = ir, sr = or;
    $.Fragment = T, $.jsx = ur, $.jsxs = sr;
  }()), $;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function dr() {
  if (ke)
    return Y;
  ke = 1;
  var p = N, g = Symbol.for("react.element"), A = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, x = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(y, l, b) {
    var d, E = {}, h = null, j = null;
    b !== void 0 && (h = "" + b), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (j = l.ref);
    for (d in l)
      T.call(l, d) && !O.hasOwnProperty(d) && (E[d] = l[d]);
    if (y && y.defaultProps)
      for (d in l = y.defaultProps, l)
        E[d] === void 0 && (E[d] = l[d]);
    return { $$typeof: g, type: y, key: h, ref: j, props: E, _owner: x.current };
  }
  return Y.Fragment = A, Y.jsx = w, Y.jsxs = w, Y;
}
process.env.NODE_ENV === "production" ? ae.exports = dr() : ae.exports = cr();
var De = ae.exports;
const vr = (p, g) => N.cloneElement(p, { ref: g }), pr = (p) => ({
  width: (p == null ? void 0 : p.offsetWidth) || 0,
  height: (p == null ? void 0 : p.offsetHeight) || 0
}), mr = (p) => {
  const {
    children: g,
    hoverStop: A = !0,
    step: T = 1,
    ...x
  } = p;
  if (!N.isValidElement(g))
    throw new Error("children must be an valid element");
  const [O, w] = ne(!1), y = () => w(!0), l = () => w(!1), b = fr(null), d = vr(g, b), E = N.cloneElement(g), [h, j] = ne();
  xe(() => {
    j(pr(b.current));
  }, [b]);
  const [C, q] = ne(0), J = (k, z, G) => Math.abs(k) > z ? 0 : k + G, S = () => {
    requestAnimationFrame(() => {
      if (!h || O && A)
        return;
      const { height: k } = h;
      q(J(C, k, -T));
    });
  }, c = lr(() => ({
    transform: `translate(0, ${C}px)`,
    transition: "lieaner 1s"
  }), [C]);
  return xe(() => {
    S();
  }, [h, C, O]), /* @__PURE__ */ De.jsx(
    "div",
    {
      className: "wrap",
      style: {
        width: "300px",
        height: h == null ? void 0 : h.height,
        border: "1px solid #333",
        overflow: "hidden"
      },
      ...x,
      children: /* @__PURE__ */ De.jsxs(
        "div",
        {
          className: "container",
          style: c,
          onMouseEnter: y,
          onMouseLeave: l,
          children: [
            d,
            E
          ]
        }
      )
    }
  );
};
export {
  mr as default
};
