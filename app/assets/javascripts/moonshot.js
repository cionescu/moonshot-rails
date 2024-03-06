import { Controller } from "@hotwired/stimulus";

import { post } from "@rails/request.js";

function e(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter((function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    }))), n.push.apply(n, r);
  }
  return n;
}

function t(t) {
  for (var n = 1; n < arguments.length; n++) {
    var r = null != arguments[n] ? arguments[n] : {};
    n % 2 ? e(Object(r), !0).forEach((function(e) {
      s(t, e, r[e]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
    }));
  }
  return t;
}

function n(e) {
  return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, n(e);
}

function r(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
    Object.defineProperty(e, r.key, r);
  }
}

function o(e, t, n) {
  return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function a(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && l(e, t);
}

function u(e) {
  return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, u(e);
}

function l(e, t) {
  return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
    return e.__proto__ = t, e;
  }, l(e, t);
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {}, o = Object.keys(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}

function d(e, t) {
  if (t && ("object" == typeof t || "function" == typeof t)) return t;
  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
  return function(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }(e);
}

function f(e) {
  var t = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
      !0;
    } catch (e) {
      return !1;
    }
  }();
  return function() {
    var n, r = u(e);
    if (t) {
      var i = u(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return d(this, n);
  };
}

function h(e, t) {
  return function(e) {
    if (Array.isArray(e)) return e;
  }(e) || function(e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null == n) return;
    var r, i, o = [], s = !0, a = !1;
    try {
      for (n = n.call(e); !(s = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); s = !0) ;
    } catch (e) {
      a = !0, i = e;
    } finally {
      try {
        s || null == n.return || n.return();
      } finally {
        if (a) throw i;
      }
    }
    return o;
  }(e, t) || _(e, t) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function p(e) {
  return function(e) {
    if (Array.isArray(e)) return g(e);
  }(e) || function(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || _(e) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function _(e, t) {
  if (e) {
    if ("string" == typeof e) return g(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0;
  }
}

function g(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function v(e, t) {
  var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = _(e)) || t && e && "number" == typeof e.length) {
      n && (e = n);
      var r = 0, i = function() {};
      return {
        s: i,
        n: function() {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function(e) {
          throw e;
        },
        f: i
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, s = !0, a = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var e = n.next();
      return s = e.done, e;
    },
    e: function(e) {
      a = !0, o = e;
    },
    f: function() {
      try {
        s || null == n.return || n.return();
      } finally {
        if (a) throw o;
      }
    }
  };
}

var m = {
  DEBUG: !1,
  LIB_VERSION: "1.111.0"
}, y = Array.isArray, b = Object.prototype, w = b.hasOwnProperty, k = b.toString, S = y || function(e) {
  return "[object Array]" === k.call(e);
}, F = function(e) {
  return "[object Uint8Array]" === k.call(e);
}, R = function(e) {
  return "function" == typeof e;
}, P = function(e) {
  return e === Object(e) && !S(e);
}, x = function(e) {
  return void 0 === e;
}, E = function(e) {
  return "[object String]" == k.call(e);
}, I = function(e) {
  return null === e;
}, C = function(e) {
  return x(e) || I(e);
}, T = function(e) {
  return "[object Number]" == k.call(e);
}, $ = function(e) {
  return "[object Boolean]" === k.call(e);
}, O = function(e) {
  return e instanceof FormData;
}, A = "undefined" != typeof window ? window : void 0, q = "undefined" != typeof globalThis ? globalThis : A, M = Array.prototype, D = M.forEach, N = M.indexOf, L = null == q ? void 0 : q.navigator, B = null == q ? void 0 : q.document, j = null == q ? void 0 : q.location, H = null == q ? void 0 : q.fetch, U = null == q ? void 0 : q.XMLHttpRequest, V = null == L ? void 0 : L.userAgent, W = null != A ? A : {}, z = "[PostHog.js]", G = {
  _log: function(e) {
    if (A && (m.DEBUG || W.POSTHOG_DEBUG) && !x(A.console) && A.console) {
      for (var t = ("__rrweb_original__" in A.console[e] ? A.console[e].__rrweb_original__ : A.console[e]), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
      t.apply(void 0, [ z ].concat(r));
    }
  },
  info: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    G._log.apply(G, [ "log" ].concat(t));
  },
  warn: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    G._log.apply(G, [ "warn" ].concat(t));
  },
  error: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    G._log.apply(G, [ "error" ].concat(t));
  },
  critical: function() {
    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    (e = console).error.apply(e, [ z ].concat(n));
  },
  uninitializedWarning: function(e) {
    G.error("You must initialize PostHog before calling ".concat(e));
  }
}, Q = {}, Y = function(e) {
  return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};

function J(e, t, n) {
  if (S(e)) if (D && e.forEach === D) e.forEach(t, n); else if ("length" in e && e.length === +e.length) for (var r = 0, i = e.length; r < i; r++) if (r in e && t.call(n, e[r], r) === Q) return;
}

function K(e, t, n) {
  if (!C(e)) {
    if (S(e)) return J(e, t, n);
    if (O(e)) {
      var r, i = v(e.entries());
      try {
        for (i.s(); !(r = i.n()).done; ) {
          var o = r.value;
          if (t.call(n, o[1], o[0]) === Q) return;
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    } else for (var s in e) if (w.call(e, s) && t.call(n, e[s], s) === Q) return;
  }
}

var X = function(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return J(n, (function(t) {
    for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
  })), e;
};

function Z(e, t) {
  return -1 !== e.indexOf(t);
}

function ee(e) {
  for (var t = Object.keys(e), n = t.length, r = new Array(n); n--; ) r[n] = [ t[n], e[t[n]] ];
  return r;
}

var te = function() {
  return Date.now = Date.now || function() {
    return +new Date;
  }, Date.now();
}, ne = function(e) {
  try {
    return e();
  } catch (e) {
    return;
  }
}, re = function(e) {
  return function() {
    try {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return e.apply(this, n);
    } catch (e) {
      G.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), 
      G.critical(e);
    }
  };
}, ie = function(e) {
  var t = {};
  return K(e, (function(e, n) {
    E(e) && e.length > 0 && (t[n] = e);
  })), t;
};

function oe(e, t) {
  return n = e, r = function(e) {
    return E(e) && !I(t) ? e.slice(0, t) : e;
  }, i = new Set, function e(t, n) {
    return t !== Object(t) ? r ? r(t, n) : t : i.has(t) ? void 0 : (i.add(t), S(t) ? (o = [], 
    J(t, (function(t) {
      o.push(e(t));
    }))) : (o = {}, K(t, (function(t, n) {
      i.has(t) || (o[n] = e(t, n));
    }))), o);
    var o;
  }(n);
  var n, r, i;
}

function se(e) {
  var t, n, r, i, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, u = 0, l = "", c = [];
  if (!e) return e;
  e = ae(e);
  do {
    t = (o = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, 
    n = o >> 12 & 63, r = o >> 6 & 63, i = 63 & o, c[u++] = s.charAt(t) + s.charAt(n) + s.charAt(r) + s.charAt(i);
  } while (a < e.length);
  switch (l = c.join(""), e.length % 3) {
   case 1:
    l = l.slice(0, -2) + "==";
    break;

   case 2:
    l = l.slice(0, -1) + "=";
  }
  return l;
}

var ae = function(e) {
  var t, n, r, i, o = "";
  for (t = n = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, 
  i = 0; i < r; i++) {
    var s = e.charCodeAt(i), a = null;
    s < 128 ? n++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), 
    I(a) || (n > t && (o += e.substring(t, n)), o += a, t = n = i + 1);
  }
  return n > t && (o += e.substring(t, e.length)), o;
}, ue = function() {
  function e(t) {
    return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), 
    t;
  }
  return e.preventDefault = function() {
    this.returnValue = !1;
  }, e.stopPropagation = function() {
    this.cancelBubble = !0;
  }, function(t, n, r, i, o) {
    if (t) if (t.addEventListener && !i) t.addEventListener(n, r, !!o); else {
      var s = "on" + n, a = t[s];
      t[s] = function(t, n, r) {
        return function(i) {
          if (i = i || e(null == A ? void 0 : A.event)) {
            var o, s = !0;
            R(r) && (o = r(i));
            var a = n.call(t, i);
            return !1 !== o && !1 !== a || (s = !1), s;
          }
        };
      }(t, r, a);
    } else G.error("No valid element provided to register_event");
  };
}();

function le(e, t) {
  var n = function() {
    if (!B) return t("document not found");
    var n = B.createElement("script");
    n.type = "text/javascript", n.src = e, n.onload = function(e) {
      return t(void 0, e);
    }, n.onerror = function(e) {
      return t(e);
    };
    var r, i = B.querySelectorAll("body > script");
    i.length > 0 ? null === (r = i[0].parentNode) || void 0 === r || r.insertBefore(n, i[0]) : B.body.appendChild(n);
  };
  null != B && B.body ? n() : null == B || B.addEventListener("DOMContentLoaded", n);
}

function ce(e) {
  return e ? Y(e).split(/\s+/) : [];
}

function de(e) {
  var t = "";
  switch (n(e.className)) {
   case "string":
    t = e.className;
    break;

   case "object":
    t = ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
    break;

   default:
    t = "";
  }
  return ce(t);
}

function fe(e) {
  return C(e) ? null : Y(e).split(/(\s+)/).filter(Se).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}

function he(e) {
  var t = "";
  return we(e) && !ke(e) && e.childNodes && e.childNodes.length && K(e.childNodes, (function(e) {
    var n;
    ge(e) && e.textContent && (t += null !== (n = fe(e.textContent)) && void 0 !== n ? n : "");
  })), Y(t);
}

function pe(e) {
  return !!e && 1 === e.nodeType;
}

function _e(e, t) {
  return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}

function ge(e) {
  return !!e && 3 === e.nodeType;
}

function ve(e) {
  return !!e && 11 === e.nodeType;
}

var me = [ "a", "button", "form", "input", "select", "textarea", "label" ];

function ye(e) {
  var t = e.parentNode;
  return !(!t || !pe(t)) && t;
}

function be(e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = arguments.length > 4 ? arguments[4] : void 0;
  if (!A || !e || _e(e, "html") || !pe(e)) return !1;
  if (null != r && r.url_allowlist) {
    var s = A.location.href, a = r.url_allowlist;
    if (a && !a.some((function(e) {
      return s.match(e);
    }))) return !1;
  }
  if (null != r && r.dom_event_allowlist) {
    var u = r.dom_event_allowlist;
    if (u && !u.some((function(e) {
      return t.type === e;
    }))) return !1;
  }
  for (var l = !1, c = [ e ], d = !0, f = e; f.parentNode && !_e(f, "body"); ) if (ve(f.parentNode)) c.push(f.parentNode.host), 
  f = f.parentNode.host; else {
    if (!(d = ye(f))) break;
    if (i || me.indexOf(d.tagName.toLowerCase()) > -1) l = !0; else {
      var h = A.getComputedStyle(d);
      h && "pointer" === h.getPropertyValue("cursor") && (l = !0);
    }
    c.push(d), f = d;
  }
  if (!function(e, t) {
    var r = null == t ? void 0 : t.element_allowlist;
    if (x(r)) return !0;
    var i, o = v(e);
    try {
      var s = function() {
        var e = i.value;
        if (r.some((function(t) {
          return e.tagName.toLowerCase() === t;
        }))) return {
          v: !0
        };
      };
      for (o.s(); !(i = o.n()).done; ) {
        var a = s();
        if ("object" === n(a)) return a.v;
      }
    } catch (e) {
      o.e(e);
    } finally {
      o.f();
    }
    return !1;
  }(c, r)) return !1;
  if (!function(e, t) {
    var r = null == t ? void 0 : t.css_selector_allowlist;
    if (x(r)) return !0;
    var i, o = v(e);
    try {
      var s = function() {
        var e = i.value;
        if (r.some((function(t) {
          return e.matches(t);
        }))) return {
          v: !0
        };
      };
      for (o.s(); !(i = o.n()).done; ) {
        var a = s();
        if ("object" === n(a)) return a.v;
      }
    } catch (e) {
      o.e(e);
    } finally {
      o.f();
    }
    return !1;
  }(c, r)) return !1;
  var p = A.getComputedStyle(e);
  if (p && "pointer" === p.getPropertyValue("cursor") && "click" === t.type) return !0;
  var _ = e.tagName.toLowerCase();
  switch (_) {
   case "html":
    return !1;

   case "form":
    return (o || [ "submit" ]).indexOf(t.type) >= 0;

   case "input":
   case "select":
   case "textarea":
    return (o || [ "change", "click" ]).indexOf(t.type) >= 0;

   default:
    return l ? (o || [ "click" ]).indexOf(t.type) >= 0 : (o || [ "click" ]).indexOf(t.type) >= 0 && (me.indexOf(_) > -1 || "true" === e.getAttribute("contenteditable"));
  }
}

function we(e) {
  for (var t = e; t.parentNode && !_e(t, "body"); t = t.parentNode) {
    var n = de(t);
    if (Z(n, "ph-sensitive") || Z(n, "ph-no-capture")) return !1;
  }
  if (Z(de(e), "ph-include")) return !0;
  var r = e.type || "";
  if (E(r)) switch (r.toLowerCase()) {
   case "hidden":
   case "password":
    return !1;
  }
  var i = e.name || e.id || "";
  if (E(i)) {
    if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, ""))) return !1;
  }
  return !0;
}

function ke(e) {
  return !!(_e(e, "input") && ![ "button", "checkbox", "submit", "reset" ].includes(e.type) || _e(e, "select") || _e(e, "textarea") || "true" === e.getAttribute("contenteditable"));
}

function Se(e) {
  if (C(e)) return !1;
  if (E(e)) {
    e = Y(e);
    if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e || "").replace(/[- ]/g, ""))) return !1;
    if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e)) return !1;
  }
  return !0;
}

function Fe(e) {
  var t = he(e);
  return Se(t = "".concat(t, " ").concat(Re(e)).trim()) ? t : "";
}

function Re(e) {
  var t = "";
  return e && e.childNodes && e.childNodes.length && K(e.childNodes, (function(e) {
    var n;
    if (e && "span" === (null === (n = e.tagName) || void 0 === n ? void 0 : n.toLowerCase())) try {
      var r = he(e);
      t = "".concat(t, " ").concat(r).trim(), e.childNodes && e.childNodes.length && (t = "".concat(t, " ").concat(Re(e)).trim());
    } catch (e) {
      G.error(e);
    }
  })), t;
}

function Pe(e) {
  return function(e) {
    var n = e.map((function(e) {
      var n, r, i = "";
      if (e.tag_name && (i += e.tag_name), e.attr_class) {
        e.attr_class.sort();
        var o, s = v(e.attr_class);
        try {
          for (s.s(); !(o = s.n()).done; ) {
            var a = o.value;
            i += ".".concat(a.replace(/"/g, ""));
          }
        } catch (e) {
          s.e(e);
        } finally {
          s.f();
        }
      }
      var u = t(t(t(t({}, e.text ? {
        text: e.text
      } : {}), {}, {
        "nth-child": null !== (n = e.nth_child) && void 0 !== n ? n : 0,
        "nth-of-type": null !== (r = e.nth_of_type) && void 0 !== r ? r : 0
      }, e.href ? {
        href: e.href
      } : {}), e.attr_id ? {
        attr_id: e.attr_id
      } : {}), e.attributes), l = {};
      return ee(u).sort((function(e, t) {
        var n = h(e, 1)[0], r = h(t, 1)[0];
        return n.localeCompare(r);
      })).forEach((function(e) {
        var t = h(e, 2), n = t[0], r = t[1];
        return l[xe(n.toString())] = xe(r.toString());
      })), i += ":", i += ee(u).map((function(e) {
        var t = h(e, 2), n = t[0], r = t[1];
        return "".concat(n, '="').concat(r, '"');
      })).join("");
    }));
    return n.join(";");
  }(function(e) {
    return e.map((function(e) {
      var t, n, r = {
        text: null === (t = e.$el_text) || void 0 === t ? void 0 : t.slice(0, 400),
        tag_name: e.tag_name,
        href: null === (n = e.attr__href) || void 0 === n ? void 0 : n.slice(0, 2048),
        attr_class: Ee(e),
        attr_id: e.attr__id,
        nth_child: e.nth_child,
        nth_of_type: e.nth_of_type,
        attributes: {}
      };
      return ee(e).filter((function(e) {
        return 0 === h(e, 1)[0].indexOf("attr__");
      })).forEach((function(e) {
        var t = h(e, 2), n = t[0], i = t[1];
        return r.attributes[n] = i;
      })), r;
    }));
  }(e));
}

function xe(e) {
  return e.replace(/"|\\"/g, '\\"');
}

function Ee(e) {
  var t = e.attr__class;
  return t ? S(t) ? t : ce(t) : void 0;
}

var Ie = function() {
  function e(t) {
    r(this, e), this.clicks = [], this.enabled = t;
  }
  return o(e, [ {
    key: "isRageClick",
    value: function(e, t, n) {
      if (!this.enabled) return !1;
      var r = this.clicks[this.clicks.length - 1];
      if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < 30 && n - r.timestamp < 1e3) {
        if (this.clicks.push({
          x: e,
          y: t,
          timestamp: n
        }), 3 === this.clicks.length) return !0;
      } else this.clicks = [ {
        x: e,
        y: t,
        timestamp: n
      } ];
      return !1;
    }
  } ]), e;
}(), Ce = "$people_distinct_id", Te = "__alias", $e = "__timers", Oe = "$autocapture_disabled_server_side", Ae = "$session_recording_enabled_server_side", qe = "$console_log_recording_enabled_server_side", Me = "$session_recording_recorder_version_server_side", De = "$session_recording_network_payload_capture", Ne = "$session_recording_canvas_recording", Le = "$sesid", Be = "$session_is_sampled", je = "$enabled_feature_flags", He = "$early_access_features", Ue = "$stored_person_properties", Ve = "$stored_group_properties", We = "$surveys", ze = "$flag_call_reported", Ge = "$user_state", Qe = "$posthog_quota_limited", Ye = "$client_session_props", Je = [ Ce, Te, "__cmpns", $e, Ae, Le, je, Ge, Qe, He, Ve, Ue, We, ze, Ye ], Ke = "$copy_autocapture";

function Xe(e, t) {
  return t.length > e ? t.slice(0, e) + "..." : t;
}

var Ze = {
  _initializedTokens: [],
  _isDisabledServerSide: null,
  _isAutocaptureEnabled: !1,
  _setIsAutocaptureEnabled: function(e) {
    var t, n = I(this._isDisabledServerSide) ? !(null === (t = e.persistence) || void 0 === t || !t.props[Oe]) : this._isDisabledServerSide, r = !!e.config.autocapture;
    this._isAutocaptureEnabled = r && !n;
  },
  _previousElementSibling: function(e) {
    if (e.previousElementSibling) return e.previousElementSibling;
    var t = e;
    do {
      t = t.previousSibling;
    } while (t && !pe(t));
    return t;
  },
  _getAugmentPropertiesFromElement: function(e) {
    if (!we(e)) return {};
    var t = {};
    return K(e.attributes, (function(e) {
      if (0 === e.name.indexOf("data-ph-capture-attribute")) {
        var n = e.name.replace("data-ph-capture-attribute-", ""), r = e.value;
        n && r && Se(r) && (t[n] = r);
      }
    })), t;
  },
  _getPropertiesFromElement: function(e, t, n) {
    var r, i = e.tagName.toLowerCase(), o = {
      tag_name: i
    };
    me.indexOf(i) > -1 && !n && ("a" === i.toLowerCase() || "button" === i.toLowerCase() ? o.$el_text = Xe(1024, Fe(e)) : o.$el_text = Xe(1024, he(e)));
    var s = de(e);
    s.length > 0 && (o.classes = s.filter((function(e) {
      return "" !== e;
    })));
    var a = null === (r = this.config) || void 0 === r ? void 0 : r.element_attribute_ignorelist;
    K(e.attributes, (function(n) {
      var r;
      if ((!ke(e) || -1 !== [ "name", "id", "class" ].indexOf(n.name)) && ((null == a || !a.includes(n.name)) && !t && Se(n.value) && (r = n.name, 
      !E(r) || "_ngcontent" !== r.substring(0, 10) && "_nghost" !== r.substring(0, 7)))) {
        var i = n.value;
        "class" === n.name && (i = ce(i).join(" ")), o["attr__" + n.name] = Xe(1024, i);
      }
    }));
    for (var u = 1, l = 1, c = e; c = this._previousElementSibling(c); ) u++, c.tagName === e.tagName && l++;
    return o.nth_child = u, o.nth_of_type = l, o;
  },
  _getDefaultProperties: function(e) {
    return {
      $event_type: e,
      $ce_version: 1
    };
  },
  _extractCustomPropertyValue: function(e) {
    var t = [];
    return K(null == B ? void 0 : B.querySelectorAll(e.css_selector), (function(e) {
      var n;
      [ "input", "select" ].indexOf(e.tagName.toLowerCase()) > -1 ? n = e.value : e.textContent && (n = e.textContent), 
      Se(n) && t.push(n);
    })), t.join(", ");
  },
  _getCustomProperties: function(e) {
    var t = this, n = {};
    return K(this._customProperties, (function(r) {
      K(r.event_selectors, (function(i) {
        K(null == B ? void 0 : B.querySelectorAll(i), (function(i) {
          Z(e, i) && we(i) && (n[r.name] = t._extractCustomPropertyValue(r));
        }));
      }));
    })), n;
  },
  _getEventTarget: function(e) {
    return x(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
    var t;
  },
  _captureEvent: function(e, t) {
    var n, r = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "$autocapture", o = arguments.length > 3 ? arguments[3] : void 0, s = this._getEventTarget(e);
    (ge(s) && (s = s.parentNode || null), "$autocapture" === i && "click" === e.type && e instanceof MouseEvent) && (null !== (n = this.rageclicks) && void 0 !== n && n.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, t, "$rageclick"));
    var a = i === Ke;
    if (s && be(s, e, this.config, a, a ? [ "copy", "cut" ] : void 0)) {
      for (var u, l, c = [ s ], d = s; d.parentNode && !_e(d, "body"); ) ve(d.parentNode) ? (c.push(d.parentNode.host), 
      d = d.parentNode.host) : (c.push(d.parentNode), d = d.parentNode);
      var f, h = [], p = {}, _ = !1;
      if (K(c, (function(e) {
        var n = we(e);
        "a" === e.tagName.toLowerCase() && (f = e.getAttribute("href"), f = n && Se(f) && f), 
        Z(de(e), "ph-no-capture") && (_ = !0), h.push(r._getPropertiesFromElement(e, t.config.mask_all_element_attributes, t.config.mask_all_text));
        var i = r._getAugmentPropertiesFromElement(e);
        X(p, i);
      })), t.config.mask_all_text || ("a" === s.tagName.toLowerCase() || "button" === s.tagName.toLowerCase() ? h[0].$el_text = Fe(s) : h[0].$el_text = he(s)), 
      f && (h[0].attr__href = f), _) return !1;
      var g = X(this._getDefaultProperties(e.type), t.elementsChainAsString ? {
        $elements_chain: Pe(h)
      } : {
        $elements: h
      }, null !== (u = h[0]) && void 0 !== u && u.$el_text ? {
        $el_text: null === (l = h[0]) || void 0 === l ? void 0 : l.$el_text
      } : {}, this._getCustomProperties(c), p, o || {});
      if (i === Ke) {
        var v, m = fe(null == A || null === (v = A.getSelection()) || void 0 === v ? void 0 : v.toString()), y = e.type || "clipboard";
        if (!m) return !1;
        g.$selected_content = m, g.$copy_type = y;
      }
      return t.capture(i, g), !0;
    }
  },
  _navigate: function(e) {
    A && (A.location.href = e);
  },
  _addDomEventHandlers: function(e) {
    var t = this;
    if (A && B) {
      var n = function(n) {
        n = n || (null == A ? void 0 : A.event), t._captureEvent(n, e);
      }, r = function(n) {
        n = n || (null == A ? void 0 : A.event), t._captureEvent(n, e, Ke);
      };
      ue(B, "submit", n, !1, !0), ue(B, "change", n, !1, !0), ue(B, "click", n, !1, !0), 
      P(e.config.autocapture) && e.config.autocapture.capture_copied_text && (ue(B, "copy", r, !1, !0), 
      ue(B, "cut", r, !1, !0));
    }
  },
  _customProperties: [],
  rageclicks: null,
  config: void 0,
  init: function(e) {
    var t;
    $(e.__autocapture) || (this.config = e.__autocapture), null !== (t = this.config) && void 0 !== t && t.url_allowlist && (this.config.url_allowlist = this.config.url_allowlist.map((function(e) {
      return new RegExp(e);
    }))), this.rageclicks = new Ie(e.config.rageclick);
  },
  afterDecideResponse: function(e, t) {
    var n = t.config.token;
    this._initializedTokens.indexOf(n) > -1 ? G.info('autocapture already initialized for token "' + n + '"') : (t.persistence && t.persistence.register(s({}, Oe, !!e.autocapture_opt_out)), 
    this._isDisabledServerSide = !!e.autocapture_opt_out, this._setIsAutocaptureEnabled(t), 
    this._initializedTokens.push(n), e && e.config && e.config.enable_collect_everything && this._isAutocaptureEnabled ? (e.custom_properties && (this._customProperties = e.custom_properties), 
    this._addDomEventHandlers(t)) : t.__autocapture = !1);
  },
  enabledForProject: function(e, t, n) {
    if (!e) return !0;
    t = x(t) ? 10 : t, n = x(n) ? 10 : n;
    for (var r = 0, i = 0; i < e.length; i++) r += e.charCodeAt(i);
    return r % t < n;
  },
  isBrowserSupported: function() {
    return R(null == B ? void 0 : B.querySelectorAll);
  }
};

!function(e) {
  for (var t in e) R(e[t]) && (e[t] = e[t].bind(e));
}(Ze), function(e) {
  for (var t in e) R(e[t]) && (e[t] = re(e[t]));
}(Ze);

var et = "$active_feature_flags", tt = "$override_feature_flags", nt = "$feature_flag_payloads", rt = function(e) {
  var t, n = {}, r = v(ee(e || {}));
  try {
    for (r.s(); !(t = r.n()).done; ) {
      var i = h(t.value, 2), o = i[0], s = i[1];
      s && (n[o] = s);
    }
  } catch (e) {
    r.e(e);
  } finally {
    r.f();
  }
  return n;
}, it = function() {
  function e(t) {
    r(this, e), this.instance = t, this._override_warning = !1, this.featureFlagEventHandlers = [], 
    this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1;
  }
  return o(e, [ {
    key: "getFlags",
    value: function() {
      return Object.keys(this.getFlagVariants());
    }
  }, {
    key: "getFlagVariants",
    value: function() {
      var e = this.instance.get_property(je), t = this.instance.get_property(tt);
      if (!t) return e || {};
      for (var n = X({}, e), r = Object.keys(t), i = 0; i < r.length; i++) !1 === t[r[i]] ? delete n[r[i]] : n[r[i]] = t[r[i]];
      return this._override_warning || (G.warn(" Overriding feature flags!", {
        enabledFlags: e,
        overriddenFlags: t,
        finalFlags: n
      }), this._override_warning = !0), n;
    }
  }, {
    key: "getFlagPayloads",
    value: function() {
      return this.instance.get_property(nt) || {};
    }
  }, {
    key: "reloadFeatureFlags",
    value: function() {
      this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer());
    }
  }, {
    key: "setAnonymousDistinctId",
    value: function(e) {
      this.$anon_distinct_id = e;
    }
  }, {
    key: "setReloadingPaused",
    value: function(e) {
      this.reloadFeatureFlagsInAction = e;
    }
  }, {
    key: "resetRequestQueue",
    value: function() {
      this.reloadFeatureFlagsQueued = !1;
    }
  }, {
    key: "_startReloadTimer",
    value: function() {
      var e = this;
      this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout((function() {
        !e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && (e.reloadFeatureFlagsQueued = !1, 
        e._reloadFeatureFlagsRequest());
      }), 5);
    }
  }, {
    key: "_reloadFeatureFlagsRequest",
    value: function() {
      var e = this;
      if (!this.instance.config.advanced_disable_feature_flags) {
        this.setReloadingPaused(!0);
        var t = this.instance.config.token, n = this.instance.get_property(Ue), r = this.instance.get_property(Ve), i = se(JSON.stringify({
          token: t,
          distinct_id: this.instance.get_distinct_id(),
          groups: this.instance.getGroups(),
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: n,
          group_properties: r,
          disable_flags: this.instance.config.advanced_disable_feature_flags || void 0
        }));
        this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), {
          data: i
        }, {
          method: "POST"
        }, this.instance._prepare_callback((function(t) {
          e.$anon_distinct_id = void 0, e.receivedFeatureFlags(t), e.setReloadingPaused(!1), 
          e._startReloadTimer();
        })));
      }
    }
  }, {
    key: "getFeatureFlag",
    value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
        var n, r = this.getFlagVariants()[e], i = "".concat(r), o = this.instance.get_property(ze) || {};
        if (t.send_event || !("send_event" in t)) if (!(e in o) || !o[e].includes(i)) S(o[e]) ? o[e].push(i) : o[e] = [ i ], 
        null === (n = this.instance.persistence) || void 0 === n || n.register(s({}, ze, o)), 
        this.instance.capture("$feature_flag_called", {
          $feature_flag: e,
          $feature_flag_response: r
        });
        return r;
      }
      G.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.");
    }
  }, {
    key: "getFeatureFlagPayload",
    value: function(e) {
      return this.getFlagPayloads()[e];
    }
  }, {
    key: "isFeatureEnabled",
    value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
      G.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.");
    }
  }, {
    key: "addFeatureFlagsHandler",
    value: function(e) {
      this.featureFlagEventHandlers.push(e);
    }
  }, {
    key: "removeFeatureFlagsHandler",
    value: function(e) {
      this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((function(t) {
        return t !== e;
      }));
    }
  }, {
    key: "receivedFeatureFlags",
    value: function(e) {
      if (this.instance.persistence) {
        this.instance.decideEndpointWasHit = !0;
        var n = this.getFlagVariants(), r = this.getFlagPayloads();
        !function(e, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = e.featureFlags, a = e.featureFlagPayloads;
          if (o) if (S(o)) {
            var u, l = {};
            if (o) for (var c = 0; c < o.length; c++) l[o[c]] = !0;
            n && n.register((s(u = {}, et, o), s(u, je, l), u));
          } else {
            var d, f = o, h = a;
            e.errorsWhileComputingFlags && (f = t(t({}, r), f), h = t(t({}, i), h)), n && n.register((s(d = {}, et, Object.keys(rt(f))), 
            s(d, je, f || {}), s(d, nt, h || {}), d));
          }
        }(e, this.instance.persistence, n, r), this._fireFeatureFlagsCallbacks();
      }
    }
  }, {
    key: "override",
    value: function(e) {
      if (!this.instance.__loaded || !this.instance.persistence) return G.uninitializedWarning("posthog.feature_flags.override");
      if (this._override_warning = !1, !1 === e) this.instance.persistence.unregister(tt); else if (S(e)) {
        for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
        this.instance.persistence.register(s({}, tt, t));
      } else this.instance.persistence.register(s({}, tt, e));
    }
  }, {
    key: "onFeatureFlags",
    value: function(e) {
      var t = this;
      if (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) {
        var n = this._prepareFeatureFlagsForCallbacks(), r = n.flags, i = n.flagVariants;
        e(r, i);
      }
      return function() {
        return t.removeFeatureFlagsHandler(e);
      };
    }
  }, {
    key: "updateEarlyAccessFeatureEnrollment",
    value: function(e, n) {
      var r, i, o = s({}, "$feature_enrollment/".concat(e), n);
      this.instance.capture("$feature_enrollment_update", {
        $feature_flag: e,
        $feature_enrollment: n,
        $set: o
      }), this.setPersonPropertiesForFlags(o, !1);
      var a = t(t({}, this.getFlagVariants()), {}, s({}, e, n));
      null === (r = this.instance.persistence) || void 0 === r || r.register((s(i = {}, et, Object.keys(rt(a))), 
      s(i, je, a), i)), this._fireFeatureFlagsCallbacks();
    }
  }, {
    key: "getEarlyAccessFeatures",
    value: function(e) {
      var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = this.instance.get_property(He);
      if (r && !n) return e(r);
      this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)), {}, {
        method: "GET"
      }, (function(n) {
        var r, i = n.earlyAccessFeatures;
        return null === (r = t.instance.persistence) || void 0 === r || r.register(s({}, He, i)), 
        e(i);
      }));
    }
  }, {
    key: "_prepareFeatureFlagsForCallbacks",
    value: function() {
      var e = this.getFlags(), t = this.getFlagVariants();
      return {
        flags: e.filter((function(e) {
          return t[e];
        })),
        flagVariants: Object.keys(t).filter((function(e) {
          return t[e];
        })).reduce((function(e, n) {
          return e[n] = t[n], e;
        }), {})
      };
    }
  }, {
    key: "_fireFeatureFlagsCallbacks",
    value: function() {
      var e = this._prepareFeatureFlagsForCallbacks(), t = e.flags, n = e.flagVariants;
      this.featureFlagEventHandlers.forEach((function(e) {
        return e(t, n);
      }));
    }
  }, {
    key: "setPersonPropertiesForFlags",
    value: function(e) {
      var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = this.instance.get_property(Ue) || {};
      this.instance.register(s({}, Ue, t(t({}, r), e))), n && this.instance.reloadFeatureFlags();
    }
  }, {
    key: "resetPersonPropertiesForFlags",
    value: function() {
      this.instance.unregister(Ue);
    }
  }, {
    key: "setGroupPropertiesForFlags",
    value: function(e) {
      var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = this.instance.get_property(Ve) || {};
      0 !== Object.keys(r).length && Object.keys(r).forEach((function(n) {
        r[n] = t(t({}, r[n]), e[n]), delete e[n];
      })), this.instance.register(s({}, Ve, t(t({}, r), e))), n && this.instance.reloadFeatureFlags();
    }
  }, {
    key: "resetGroupPropertiesForFlags",
    value: function(e) {
      if (e) {
        var n = this.instance.get_property(Ve) || {};
        this.instance.register(s({}, Ve, t(t({}, n), {}, s({}, e, {}))));
      } else this.instance.unregister(Ve);
    }
  } ]), e;
}();

Math.trunc || (Math.trunc = function(e) {
  return e < 0 ? Math.ceil(e) : Math.floor(e);
}), Number.isInteger || (Number.isInteger = function(e) {
  return T(e) && isFinite(e) && Math.floor(e) === e;
});

var ot = "0123456789abcdef", st = function() {
  function e(t) {
    if (r(this, e), this.bytes = t, 16 !== t.length) throw new TypeError("not 128-bit length");
  }
  return o(e, [ {
    key: "toString",
    value: function() {
      for (var e = "", t = 0; t < this.bytes.length; t++) e = e + ot.charAt(this.bytes[t] >>> 4) + ot.charAt(15 & this.bytes[t]), 
      3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
      if (36 !== e.length) throw new Error("Invalid UUIDv7 was generated");
      return e;
    }
  }, {
    key: "clone",
    value: function() {
      return new e(this.bytes.slice(0));
    }
  }, {
    key: "equals",
    value: function(e) {
      return 0 === this.compareTo(e);
    }
  }, {
    key: "compareTo",
    value: function(e) {
      for (var t = 0; t < 16; t++) {
        var n = this.bytes[t] - e.bytes[t];
        if (0 !== n) return Math.sign(n);
      }
      return 0;
    }
  } ], [ {
    key: "fromFieldsV7",
    value: function(t, n, r, i) {
      if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(i) || t < 0 || n < 0 || r < 0 || i < 0 || t > 0xffffffffffff || n > 4095 || r > 1073741823 || i > 4294967295) throw new RangeError("invalid field value");
      var o = new Uint8Array(16);
      return o[0] = t / Math.pow(2, 40), o[1] = t / Math.pow(2, 32), o[2] = t / Math.pow(2, 24), 
      o[3] = t / Math.pow(2, 16), o[4] = t / Math.pow(2, 8), o[5] = t, o[6] = 112 | n >>> 8, 
      o[7] = n, o[8] = 128 | r >>> 24, o[9] = r >>> 16, o[10] = r >>> 8, o[11] = r, o[12] = i >>> 24, 
      o[13] = i >>> 16, o[14] = i >>> 8, o[15] = i, new e(o);
    }
  } ]), e;
}(), at = function() {
  function e() {
    r(this, e), s(this, "timestamp", 0), s(this, "counter", 0), s(this, "random", new ct);
  }
  return o(e, [ {
    key: "generate",
    value: function() {
      var e = this.generateOrAbort();
      if (x(e)) {
        this.timestamp = 0;
        var t = this.generateOrAbort();
        if (x(t)) throw new Error("Could not generate UUID after timestamp reset");
        return t;
      }
      return e;
    }
  }, {
    key: "generateOrAbort",
    value: function() {
      var e = Date.now();
      if (e > this.timestamp) this.timestamp = e, this.resetCounter(); else {
        if (!(e + 1e4 > this.timestamp)) return;
        this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
      }
      return st.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32());
    }
  }, {
    key: "resetCounter",
    value: function() {
      this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
    }
  } ]), e;
}(), ut = function(e) {
  if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
  for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return e;
};

A && !x(A.crypto) && crypto.getRandomValues && (ut = function(e) {
  return crypto.getRandomValues(e);
});

var lt, ct = function() {
  function e() {
    r(this, e), s(this, "buffer", new Uint32Array(8)), s(this, "cursor", 1 / 0);
  }
  return o(e, [ {
    key: "nextUint32",
    value: function() {
      return this.cursor >= this.buffer.length && (ut(this.buffer), this.cursor = 0), 
      this.buffer[this.cursor++];
    }
  } ]), e;
}(), dt = function() {
  return ft().toString();
}, ft = function() {
  return (lt || (lt = new at)).generate();
}, ht = "Thu, 01 Jan 1970 00:00:00 GMT", pt = "";

var _t = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;

function gt(e, t) {
  if (t) {
    var n = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B;
      if (pt) return pt;
      if (!t) return "";
      if ([ "localhost", "127.0.0.1" ].includes(e)) return "";
      for (var n = e.split("."), r = Math.min(n.length, 8), i = "dmn_chk_" + dt(), o = new RegExp("(^|;)\\s*" + i + "=1"); !pt && r--; ) {
        var s = n.slice(r).join("."), a = i + "=1;domain=." + s;
        t.cookie = a, o.test(t.cookie) && (t.cookie = a + ";expires=" + ht, pt = s);
      }
      return pt;
    }(e);
    if (!n) {
      var r = function(e) {
        var t = e.match(_t);
        return t ? t[0] : "";
      }(e);
      r !== n && G.info("Warning: cookie subdomain discovery mismatch", r, n), n = r;
    }
    return n ? "; domain=." + n : "";
  }
  return "";
}

var vt, mt = {
  is_supported: function() {
    return !!B;
  },
  error: function(e) {
    G.error("cookieStore error: " + e);
  },
  get: function(e) {
    if (B) {
      try {
        for (var t = e + "=", n = B.cookie.split(";").filter((function(e) {
          return e.length;
        })), r = 0; r < n.length; r++) {
          for (var i = n[r]; " " == i.charAt(0); ) i = i.substring(1, i.length);
          if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length));
        }
      } catch (e) {}
      return null;
    }
  },
  parse: function(e) {
    var t;
    try {
      t = JSON.parse(mt.get(e)) || {};
    } catch (e) {}
    return t;
  },
  set: function(e, t, n, r, i) {
    if (B) try {
      var o = "", s = "", a = gt(B.location.hostname, r);
      if (n) {
        var u = new Date;
        u.setTime(u.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=" + u.toUTCString();
      }
      i && (s = "; secure");
      var l = e + "=" + encodeURIComponent(JSON.stringify(t)) + o + "; SameSite=Lax; path=/" + a + s;
      return l.length > 3686.4 && G.warn("cookieStore warning: large cookie, len=" + l.length), 
      B.cookie = l, l;
    } catch (e) {
      return;
    }
  },
  remove: function(e, t) {
    try {
      mt.set(e, "", -1, t);
    } catch (e) {
      return;
    }
  }
}, yt = null, bt = {
  is_supported: function() {
    if (!I(yt)) return yt;
    var e = !0;
    if (x(A)) e = !1; else try {
      var t = "__mplssupport__";
      bt.set(t, "xyz"), '"xyz"' !== bt.get(t) && (e = !1), bt.remove(t);
    } catch (t) {
      e = !1;
    }
    return e || G.error("localStorage unsupported; falling back to cookie store"), yt = e, 
    e;
  },
  error: function(e) {
    G.error("localStorage error: " + e);
  },
  get: function(e) {
    try {
      return null == A ? void 0 : A.localStorage.getItem(e);
    } catch (e) {
      bt.error(e);
    }
    return null;
  },
  parse: function(e) {
    try {
      return JSON.parse(bt.get(e)) || {};
    } catch (e) {}
    return null;
  },
  set: function(e, t) {
    try {
      null == A || A.localStorage.setItem(e, JSON.stringify(t));
    } catch (e) {
      bt.error(e);
    }
  },
  remove: function(e) {
    try {
      null == A || A.localStorage.removeItem(e);
    } catch (e) {
      bt.error(e);
    }
  }
}, wt = [ "distinct_id", Le, Be ], kt = t(t({}, bt), {}, {
  parse: function(e) {
    try {
      var t = {};
      try {
        t = mt.parse(e) || {};
      } catch (e) {}
      var n = X(t, JSON.parse(bt.get(e) || "{}"));
      return bt.set(e, n), n;
    } catch (e) {}
    return null;
  },
  set: function(e, t, n, r, i) {
    try {
      bt.set(e, t);
      var o = {};
      wt.forEach((function(e) {
        t[e] && (o[e] = t[e]);
      })), Object.keys(o).length && mt.set(e, o, n, r, i);
    } catch (e) {
      bt.error(e);
    }
  },
  remove: function(e, t) {
    try {
      null == A || A.localStorage.removeItem(e), mt.remove(e, t);
    } catch (e) {
      bt.error(e);
    }
  }
}), St = {}, Ft = {
  is_supported: function() {
    return !0;
  },
  error: function(e) {
    G.error("memoryStorage error: " + e);
  },
  get: function(e) {
    return St[e] || null;
  },
  parse: function(e) {
    return St[e] || null;
  },
  set: function(e, t) {
    St[e] = t;
  },
  remove: function(e) {
    delete St[e];
  }
}, Rt = null, Pt = {
  is_supported: function() {
    if (!I(Rt)) return Rt;
    if (Rt = !0, x(A)) Rt = !1; else try {
      var e = "__support__";
      Pt.set(e, "xyz"), '"xyz"' !== Pt.get(e) && (Rt = !1), Pt.remove(e);
    } catch (e) {
      Rt = !1;
    }
    return Rt;
  },
  error: function(e) {
    G.error("sessionStorage error: ", e);
  },
  get: function(e) {
    try {
      return null == A ? void 0 : A.sessionStorage.getItem(e);
    } catch (e) {
      Pt.error(e);
    }
    return null;
  },
  parse: function(e) {
    try {
      return JSON.parse(Pt.get(e)) || null;
    } catch (e) {}
    return null;
  },
  set: function(e, t) {
    try {
      null == A || A.sessionStorage.setItem(e, JSON.stringify(t));
    } catch (e) {
      Pt.error(e);
    }
  },
  remove: function(e) {
    try {
      null == A || A.sessionStorage.removeItem(e);
    } catch (e) {
      Pt.error(e);
    }
  }
}, xt = [ "localhost", "127.0.0.1" ], Et = !(!U || !("withCredentials" in new U)) || !!H, It = function(e) {
  var t = null == B ? void 0 : B.createElement("a");
  return x(t) ? null : (t.href = e, t);
}, Ct = function(e, t) {
  return !!function(e) {
    try {
      new RegExp(e);
    } catch (e) {
      return !1;
    }
    return !0;
  }(t) && new RegExp(t).test(e);
}, Tt = function(e) {
  var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", i = [];
  return K(e, (function(e, r) {
    x(e) || x(r) || "undefined" === r || (t = encodeURIComponent(function(e) {
      return e instanceof File;
    }(e) ? e.name : e.toString()), n = encodeURIComponent(r), i[i.length] = n + "=" + t);
  })), i.join(r);
}, $t = function(e, t) {
  for (var n, r = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), i = 0; i < r.length; i++) {
    var o = r[i].split("=");
    if (o[0] === t) {
      n = o;
      break;
    }
  }
  if (!S(n) || n.length < 2) return "";
  var s = n[1];
  try {
    s = decodeURIComponent(s);
  } catch (e) {
    G.error("Skipping decoding for malformed query param: " + s);
  }
  return s.replace(/\+/g, " ");
}, Ot = function(e, t) {
  var n = e.match(new RegExp(t + "=([^&]*)"));
  return n ? n[1] : null;
}, At = "Mobile", qt = "iOS", Mt = "Android", Dt = "Tablet", Nt = Mt + " " + Dt, Lt = "iPad", Bt = "Apple", jt = Bt + " Watch", Ht = "Safari", Ut = "BlackBerry", Vt = "Samsung", Wt = Vt + "Browser", zt = Vt + " Internet", Gt = "Chrome", Qt = Gt + " OS", Yt = Gt + " " + qt, Jt = "Internet Explorer", Kt = Jt + " " + At, Xt = "Opera", Zt = Xt + " Mini", en = "Edge", tn = "Microsoft " + en, nn = "Firefox", rn = nn + " " + qt, on = "Nintendo", sn = "PlayStation", an = "Xbox", un = Mt + " " + At, ln = At + " " + Ht, cn = "Windows", dn = cn + " Phone", fn = "Nokia", hn = "Ouya", pn = "Generic", _n = pn + " " + At.toLowerCase(), gn = pn + " " + Dt.toLowerCase(), vn = "Konqueror", mn = "(\\d+(\\.\\d+)?)", yn = new RegExp("Version/" + mn), bn = new RegExp(an, "i"), wn = new RegExp(sn + " \\w+", "i"), kn = new RegExp(on + " \\w+", "i"), Sn = new RegExp(Ut + "|PlayBook|BB10", "i"), Fn = {
  "NT3.51": "NT 3.11",
  "NT4.0": "NT 4.0",
  "5.0": "2000",
  5.1: "XP",
  5.2: "XP",
  "6.0": "Vista",
  6.1: "7",
  6.2: "8",
  6.3: "8.1",
  6.4: "10",
  "10.0": "10"
};

var Rn = function(e, t) {
  return t && Z(t, Bt) || function(e) {
    return Z(e, Ht) && !Z(e, Gt) && !Z(e, Mt);
  }(e);
}, Pn = function(e, t, n) {
  return n ? Xt : (t = t || "", Z(e, " OPR/") && Z(e, "Mini") ? Zt : Z(e, " OPR/") ? Xt : Sn.test(e) ? Ut : Z(e, "IE" + At) || Z(e, "WPDesktop") ? Kt : Z(e, Wt) ? zt : Z(e, en) || Z(e, "Edg/") ? tn : Z(e, "FBIOS") ? "Facebook " + At : Z(e, Gt) ? Gt : Z(e, "CriOS") ? Yt : Z(e, "UCWEB") || Z(e, "UCBrowser") ? "UC Browser" : Z(e, "FxiOS") ? rn : Z(e, Mt) ? un : Z(e.toLowerCase(), vn.toLowerCase()) ? vn : Rn(e, t) ? Z(e, At) ? ln : Ht : Z(e, nn) ? nn : Z(e, "MSIE") || Z(e, "Trident/") ? Jt : Z(e, "Gecko") ? nn : "");
}, xn = (s(vt = {}, Kt, [ new RegExp("rv:" + mn) ]), s(vt, tn, [ new RegExp(en + "?\\/" + mn) ]), 
s(vt, Gt, [ new RegExp(Gt + "/" + mn) ]), s(vt, Yt, [ new RegExp("CriOS\\/" + mn) ]), 
s(vt, "UC Browser", [ new RegExp("(UCBrowser|UCWEB)\\/" + mn) ]), s(vt, Ht, [ yn ]), 
s(vt, ln, [ yn ]), s(vt, Xt, [ new RegExp("(Opera|OPR)\\/" + mn) ]), s(vt, nn, [ new RegExp(nn + "\\/" + mn) ]), 
s(vt, rn, [ new RegExp("FxiOS\\/" + mn) ]), s(vt, vn, [ new RegExp("Konqueror[:/]?" + mn, "i") ]), 
s(vt, Ut, [ new RegExp(Ut + " " + mn), yn ]), s(vt, un, [ new RegExp("android\\s" + mn) ]), 
s(vt, zt, [ new RegExp(Wt + "\\/" + mn) ]), s(vt, Jt, [ new RegExp("(rv:|MSIE )" + mn) ]), 
s(vt, "Mozilla", [ new RegExp("rv:" + mn) ]), vt), En = [ [ new RegExp(an + "; " + an + " (.*?)[);]", "i"), function(e) {
  return [ an, e && e[1] || "" ];
} ], [ new RegExp(on, "i"), [ on, "" ] ], [ new RegExp(sn, "i"), [ sn, "" ] ], [ Sn, [ Ut, "" ] ], [ new RegExp(cn, "i"), function(e, t) {
  if (/Phone/.test(t) || /WPDesktop/.test(t)) return [ dn, "" ];
  if (new RegExp(At).test(t) && !/IEMobile\b/.test(t)) return [ cn + " " + At, "" ];
  var n = /Windows NT ([0-9.]+)/i.exec(t);
  if (n && n[1]) {
    var r = n[1], i = Fn[r] || "";
    return /arm/i.test(t) && (i = "RT"), [ cn, i ];
  }
  return [ cn, "" ];
} ], [ /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, function(e) {
  if (e && e[3]) {
    var t = [ e[3], e[4], e[5] || "0" ];
    return [ qt, t.join(".") ];
  }
  return [ qt, "" ];
} ], [ /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, function(e) {
  var t = "";
  return e && e.length >= 3 && (t = x(e[2]) ? e[3] : e[2]), [ "watchOS", t ];
} ], [ new RegExp("(" + Mt + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + Mt + ")", "i"), function(e) {
  if (e && e[2]) {
    var t = [ e[2], e[3], e[4] || "0" ];
    return [ Mt, t.join(".") ];
  }
  return [ Mt, "" ];
} ], [ /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, function(e) {
  var t = [ "Mac OS X", "" ];
  if (e && e[1]) {
    var n = [ e[1], e[2], e[3] || "0" ];
    t[1] = n.join(".");
  }
  return t;
} ], [ /Mac/i, [ "Mac OS X", "" ] ], [ /CrOS/, [ Qt, "" ] ], [ /Linux|debian/i, [ "Linux", "" ] ] ], In = function(e) {
  return kn.test(e) ? on : wn.test(e) ? sn : bn.test(e) ? an : new RegExp(hn, "i").test(e) ? hn : new RegExp("(" + dn + "|WPDesktop)", "i").test(e) ? dn : /iPad/.test(e) ? Lt : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? jt : Sn.test(e) ? Ut : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(fn, "i").test(e) ? fn : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(At).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? Mt : Nt : Mt : new RegExp("(pda|" + At + ")", "i").test(e) ? _n : new RegExp(Dt, "i").test(e) && !new RegExp(Dt + " pc", "i").test(e) ? gn : "";
}, Cn = "https?://(.*)", Tn = {
  campaignParams: function(e) {
    var t = [ "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gbraid", "wbraid", "fbclid", "msclkid" ].concat(e || []), n = {};
    return K(t, (function(e) {
      var t = B ? $t(B.URL, e) : "";
      t.length && (n[e] = t);
    })), n;
  },
  searchEngine: function() {
    var e = null == B ? void 0 : B.referrer;
    return e ? 0 === e.search(Cn + "google.([^/?]*)") ? "google" : 0 === e.search(Cn + "bing.com") ? "bing" : 0 === e.search(Cn + "yahoo.com") ? "yahoo" : 0 === e.search(Cn + "duckduckgo.com") ? "duckduckgo" : null : null;
  },
  searchInfo: function() {
    var e = Tn.searchEngine(), t = "yahoo" != e ? "q" : "p", n = {};
    if (!I(e)) {
      n.$search_engine = e;
      var r = B ? $t(B.referrer, t) : "";
      r.length && (n.ph_keyword = r);
    }
    return n;
  },
  browser: Pn,
  browserVersion: function(e, t, n) {
    var r = Pn(e, t, n), i = xn[r];
    if (x(i)) return null;
    for (var o = 0; o < i.length; o++) {
      var s = i[o], a = e.match(s);
      if (a) return parseFloat(a[a.length - 2]);
    }
    return null;
  },
  browserLanguage: function() {
    return navigator.language || navigator.userLanguage;
  },
  os: function(e) {
    for (var t = 0; t < En.length; t++) {
      var n = h(En[t], 2), r = n[0], i = n[1], o = r.exec(e), s = o && (R(i) ? i(o, e) : i);
      if (s) return s;
    }
    return [ "", "" ];
  },
  device: In,
  deviceType: function(e) {
    var t = In(e);
    return t === Lt || t === Nt || "Kobo" === t || "Kindle Fire" === t || t === gn ? Dt : t === on || t === an || t === sn || t === hn ? "Console" : t === jt ? "Wearable" : t ? At : "Desktop";
  },
  referrer: function() {
    return (null == B ? void 0 : B.referrer) || "$direct";
  },
  referringDomain: function() {
    var e;
    return null != B && B.referrer && (null === (e = It(B.referrer)) || void 0 === e ? void 0 : e.host) || "$direct";
  },
  properties: function() {
    if (!V) return {};
    var e = h(Tn.os(V), 2), t = e[0], n = e[1];
    return X(ie({
      $os: t,
      $os_version: n,
      $browser: Tn.browser(V, navigator.vendor, W.opera),
      $device: Tn.device(V),
      $device_type: Tn.deviceType(V)
    }), {
      $current_url: null == j ? void 0 : j.href,
      $host: null == j ? void 0 : j.host,
      $pathname: null == j ? void 0 : j.pathname,
      $raw_user_agent: V.length > 1e3 ? V.substring(0, 997) + "..." : V,
      $browser_version: Tn.browserVersion(V, navigator.vendor, W.opera),
      $browser_language: Tn.browserLanguage(),
      $screen_height: null == A ? void 0 : A.screen.height,
      $screen_width: null == A ? void 0 : A.screen.width,
      $viewport_height: null == A ? void 0 : A.innerHeight,
      $viewport_width: null == A ? void 0 : A.innerWidth,
      $lib: "web",
      $lib_version: m.LIB_VERSION,
      $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
      $time: te() / 1e3
    });
  },
  people_properties: function() {
    if (!V) return {};
    var e = h(Tn.os(V), 2), t = e[0], n = e[1];
    return X(ie({
      $os: t,
      $os_version: n,
      $browser: Tn.browser(V, navigator.vendor, W.opera)
    }), {
      $browser_version: Tn.browserVersion(V, navigator.vendor, W.opera)
    });
  }
}, $n = [ "cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory" ], On = function() {
  function e(t) {
    r(this, e), this.config = t, this.props = {}, this.campaign_params_saved = !1, this.name = function(e) {
      var t = "";
      return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), 
      e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog";
    }(t), this.storage = this.buildStorage(t), this.load(), this.update_config(t, t), 
    this.save();
  }
  return o(e, [ {
    key: "buildStorage",
    value: function(e) {
      -1 === $n.indexOf(e.persistence.toLowerCase()) && (G.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), 
      e.persistence = "localStorage+cookie");
      var t = e.persistence.toLowerCase();
      return "localstorage" === t && bt.is_supported() ? bt : "localstorage+cookie" === t && kt.is_supported() ? kt : "sessionstorage" === t && Pt.is_supported() ? Pt : "memory" === t ? Ft : "cookie" === t ? mt : kt.is_supported() ? kt : mt;
    }
  }, {
    key: "properties",
    value: function() {
      var e = {};
      return K(this.props, (function(t, n) {
        if (n === je && P(t)) for (var r = Object.keys(t), i = 0; i < r.length; i++) e["$feature/".concat(r[i])] = t[r[i]]; else s = n, 
        a = !1, (I(o = Je) ? a : N && o.indexOf === N ? -1 != o.indexOf(s) : (K(o, (function(e) {
          if (a || (a = e === s)) return Q;
        })), a)) || (e[n] = t);
        var o, s, a;
      })), e;
    }
  }, {
    key: "load",
    value: function() {
      if (!this.disabled) {
        var e = this.storage.parse(this.name);
        e && (this.props = X({}, e));
      }
    }
  }, {
    key: "save",
    value: function() {
      this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure);
    }
  }, {
    key: "remove",
    value: function() {
      this.storage.remove(this.name, !1), this.storage.remove(this.name, !0);
    }
  }, {
    key: "clear",
    value: function() {
      this.remove(), this.props = {};
    }
  }, {
    key: "register_once",
    value: function(e, t, n) {
      var r = this;
      if (P(e)) {
        x(t) && (t = "None"), this.expire_days = x(n) ? this.default_expiry : n;
        var i = !1;
        if (K(e, (function(e, n) {
          r.props.hasOwnProperty(n) && r.props[n] !== t || (r.props[n] = e, i = !0);
        })), i) return this.save(), !0;
      }
      return !1;
    }
  }, {
    key: "register",
    value: function(e, t) {
      var n = this;
      if (P(e)) {
        this.expire_days = x(t) ? this.default_expiry : t;
        var r = !1;
        if (K(e, (function(t, i) {
          e.hasOwnProperty(i) && n.props[i] !== t && (n.props[i] = t, r = !0);
        })), r) return this.save(), !0;
      }
      return !1;
    }
  }, {
    key: "unregister",
    value: function(e) {
      e in this.props && (delete this.props[e], this.save());
    }
  }, {
    key: "update_campaign_params",
    value: function() {
      this.campaign_params_saved || (this.register(Tn.campaignParams(this.config.custom_campaign_params)), 
      this.campaign_params_saved = !0);
    }
  }, {
    key: "update_search_keyword",
    value: function() {
      this.register(Tn.searchInfo());
    }
  }, {
    key: "update_referrer_info",
    value: function() {
      this.register({
        $referrer: this.props.$referrer || Tn.referrer(),
        $referring_domain: this.props.$referring_domain || Tn.referringDomain()
      });
    }
  }, {
    key: "get_referrer_info",
    value: function() {
      return ie({
        $referrer: this.props.$referrer,
        $referring_domain: this.props.$referring_domain
      });
    }
  }, {
    key: "safe_merge",
    value: function(e) {
      return K(this.props, (function(t, n) {
        n in e || (e[n] = t);
      })), e;
    }
  }, {
    key: "update_config",
    value: function(e, t) {
      if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), 
      this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), 
      e.persistence !== t.persistence) {
        var n = this.buildStorage(e), r = this.props;
        this.clear(), this.storage = n, this.props = r, this.save();
      }
    }
  }, {
    key: "set_disabled",
    value: function(e) {
      this.disabled = e, this.disabled ? this.remove() : this.save();
    }
  }, {
    key: "set_cross_subdomain",
    value: function(e) {
      e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save());
    }
  }, {
    key: "get_cross_subdomain",
    value: function() {
      return !!this.cross_subdomain;
    }
  }, {
    key: "set_secure",
    value: function(e) {
      e !== this.secure && (this.secure = e, this.remove(), this.save());
    }
  }, {
    key: "set_event_timer",
    value: function(e, t) {
      var n = this.props[$e] || {};
      n[e] = t, this.props[$e] = n, this.save();
    }
  }, {
    key: "remove_event_timer",
    value: function(e) {
      var t = (this.props[$e] || {})[e];
      return x(t) || (delete this.props[$e][e], this.save()), t;
    }
  }, {
    key: "get_user_state",
    value: function() {
      return this.props[Ge] || "anonymous";
    }
  }, {
    key: "set_user_state",
    value: function(e) {
      this.props[Ge] = e, this.save();
    }
  }, {
    key: "get_quota_limits",
    value: function() {
      return this.props[Qe] || {};
    }
  }, {
    key: "set_quota_limits",
    value: function(e) {
      this.props[Qe] = e, this.save();
    }
  } ]), e;
}(), An = 2, qn = 4;

var Mn = o((function e(t) {
  var n, i, o = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  r(this, e), s(this, "bucketSize", 100), s(this, "refillRate", 10), s(this, "mutationBuckets", {}), 
  s(this, "loggedTracker", {}), s(this, "refillBuckets", (function() {
    Object.keys(o.mutationBuckets).forEach((function(e) {
      o.mutationBuckets[e] = o.mutationBuckets[e] + o.refillRate, o.mutationBuckets[e] >= o.bucketSize && delete o.mutationBuckets[e];
    }));
  })), s(this, "getNodeOrRelevantParent", (function(e) {
    var t = o.rrweb.mirror.getNode(e);
    if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
      var n = t.closest("svg");
      if (n) return [ o.rrweb.mirror.getId(n), n ];
    }
    return [ e, t ];
  })), s(this, "numberOfChanges", (function(e) {
    var t, n, r, i, o, s, a, u;
    return (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) + (null !== (r = null === (i = e.attributes) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0) + (null !== (o = null === (s = e.texts) || void 0 === s ? void 0 : s.length) && void 0 !== o ? o : 0) + (null !== (a = null === (u = e.adds) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0);
  })), s(this, "throttleMutations", (function(e) {
    if (3 !== e.type || 0 !== e.data.source) return e;
    var t = e.data, n = o.numberOfChanges(t);
    t.attributes && (t.attributes = t.attributes.filter((function(e) {
      var t, n, r, i = h(o.getNodeOrRelevantParent(e.id), 2), s = i[0], a = i[1];
      if (0 === o.mutationBuckets[s]) return !1;
      (o.mutationBuckets[s] = null !== (t = o.mutationBuckets[s]) && void 0 !== t ? t : o.bucketSize, 
      o.mutationBuckets[s] = Math.max(o.mutationBuckets[s] - 1, 0), 0 === o.mutationBuckets[s]) && (o.loggedTracker[s] || (o.loggedTracker[s] = !0, 
      null === (n = (r = o.options).onBlockedNode) || void 0 === n || n.call(r, s, a)));
      return e;
    })));
    var r = o.numberOfChanges(t);
    return 0 !== r || n === r ? e : void 0;
  })), this.rrweb = t, this.options = a, this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate, 
  this.bucketSize = null !== (i = this.options.bucketSize) && void 0 !== i ? i : this.bucketSize, 
  setInterval((function() {
    o.refillBuckets();
  }), 1e3);
})), Dn = function(e) {
  return e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", 
  e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", 
  e[e.Plugin = 6] = "Plugin", e;
}(Dn || {}), Nn = {
  initiatorTypes: [ "audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest" ],
  maskRequestFn: function(e) {
    return e;
  },
  recordHeaders: !1,
  recordBody: !1,
  recordInitialRequests: !1,
  recordPerformance: !1,
  performanceEntryTypeToObserve: [ "first-input", "navigation", "paint", "resource" ],
  payloadSizeLimitBytes: 1e6
}, Ln = [ "authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token" ], Bn = [ "/s/", "/e/", "/i/vo/e/" ];

function jn(e, t, n, r) {
  if (C(e)) return e;
  var i = (null == t ? void 0 : t["content-length"]) || function(e) {
    return new Blob([ e ]).size;
  }(e);
  return E(i) && (i = parseInt(i)), i > n ? "[SessionReplay] ".concat(r, " body too large to record (").concat(i, " bytes)") : e;
}

var Hn = function(e, n) {
  var r, i, o, s = e.session_recording, a = !1 !== s.recordHeaders && n.recordHeaders, u = !1 !== s.recordBody && n.recordBody, l = !1 !== s.recordPerformance && n.recordPerformance, c = (r = s, 
  o = Math.min(1e6, null !== (i = r.payloadSizeLimitBytes) && void 0 !== i ? i : 1e6), 
  function(e) {
    return null != e && e.requestBody && (e.requestBody = jn(e.requestBody, e.requestHeaders, o, "Request")), 
    null != e && e.responseBody && (e.responseBody = jn(e.responseBody, e.responseHeaders, o, "Response")), 
    e;
  }), d = function(e) {
    return c(function(e) {
      var t = It(e.name);
      if (!(t && t.pathname && Bn.includes(t.pathname))) return e;
    }((t = e, Object.keys(null !== (n = t.requestHeaders) && void 0 !== n ? n : {}).forEach((function(e) {
      var n;
      Ln.includes(e.toLowerCase()) && (null === (n = t.requestHeaders) || void 0 === n || delete n[e]);
    })), t)));
    var t, n;
  }, f = R(e.session_recording.maskNetworkRequestFn);
  return f && R(e.session_recording.maskCapturedNetworkRequestFn) && G.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), 
  f && (e.session_recording.maskCapturedNetworkRequestFn = function(n) {
    var r = e.session_recording.maskNetworkRequestFn({
      url: n.name
    });
    return t(t({}, n), {}, {
      name: null == r ? void 0 : r.url
    });
  }), s.maskRequestFn = R(e.session_recording.maskCapturedNetworkRequestFn) ? function(t) {
    var n, r, i, o = d(t);
    return o && null !== (n = null === (r = (i = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === r ? void 0 : r.call(i, o)) && void 0 !== n ? n : void 0;
  } : void 0, s.maskRequestFn || (s.maskRequestFn = d), t(t(t({}, Nn), s), {}, {
    recordHeaders: a,
    recordBody: u,
    recordPerformance: l,
    recordInitialRequests: l
  });
}, Un = "__ph_opt_in_out_";

function Vn(e, t) {
  Xn(!0, e, t);
}

function Wn(e, t) {
  Xn(!1, e, t);
}

function zn(e, t) {
  return "1" === Kn(e, t);
}

function Gn(e, t) {
  return !!function(e) {
    if (e && e.respectDnt) {
      var t = e && e.window || A, n = null == t ? void 0 : t.navigator, r = !1;
      return K([ null == n ? void 0 : n.doNotTrack, n.msDoNotTrack, t.doNotTrack ], (function(e) {
        Z([ !0, 1, "1", "yes" ], e) && (r = !0);
      })), r;
    }
    return !1;
  }(t) || "0" === Kn(e, t);
}

function Qn(e, t) {
  Yn(t = t || {}).remove(Jn(e, t), !!t.crossSubdomainCookie);
}

function Yn(e) {
  return "localStorage" === (e = e || {}).persistenceType ? bt : "localStorage+cookie" === e.persistenceType ? kt : mt;
}

function Jn(e, t) {
  return ((t = t || {}).persistencePrefix || Un) + e;
}

function Kn(e, t) {
  return Yn(t).get(Jn(e, t));
}

function Xn(e, t, n) {
  E(t) && t.length ? (Yn(n = n || {}).set(Jn(t, n), e ? 1 : 0, T(n.cookieExpiration) ? n.cookieExpiration : null, n.crossSubdomainCookie, n.secureCookie), 
  n.capture && e && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, {
    send_instantly: !0
  })) : G.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
}

function Zn(e) {
  var t = !1;
  try {
    var n = e.config.token, r = e.config.respect_dnt, i = e.config.opt_out_capturing_persistence_type, o = e.config.opt_out_capturing_cookie_prefix || void 0, s = e.config.window;
    n && (t = Gn(n, {
      respectDnt: r,
      persistenceType: i,
      persistencePrefix: o,
      window: s
    }));
  } catch (e) {
    G.error("Unexpected error when checking capturing opt-out status: " + e);
  }
  return t;
}

var er, tr = 3e5, nr = tr;

!function(e) {
  e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", 
  e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", 
  e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", 
  e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", 
  e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", 
  e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet";
}(er || (er = {}));

var rr = [ er.MouseMove, er.MouseInteraction, er.Scroll, er.ViewportResize, er.Input, er.TouchMove, er.MediaInteraction, er.Drag ], ir = function(e) {
  return {
    rrwebMethod: e,
    enqueuedAt: Date.now(),
    attempt: 1
  };
}, or = "[SessionRecording]", sr = function() {
  function e(t) {
    var n = this;
    if (r(this, e), s(this, "queuedRRWebEvents", []), s(this, "isIdle", !1), s(this, "_linkedFlagSeen", !1), 
    s(this, "_lastActivityTimestamp", Date.now()), s(this, "windowId", null), s(this, "sessionId", null), 
    s(this, "_linkedFlag", null), s(this, "_sampleRate", null), s(this, "_minimumDuration", null), 
    s(this, "_forceAllowLocalhostNetworkCapture", !1), this.instance = t, this._captureStarted = !1, 
    this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = !1, null == A || A.addEventListener("beforeunload", (function() {
      n._flushBuffer();
    })), null == A || A.addEventListener("offline", (function() {
      n._tryAddCustomEvent("browser offline", {});
    })), null == A || A.addEventListener("online", (function() {
      n._tryAddCustomEvent("browser online", {});
    })), !this.instance.sessionManager) throw G.error(or + " started without valid sessionManager"), 
    new Error(or + " started without valid sessionManager. This is a bug.");
    this.buffer = this.clearBuffer();
  }
  return o(e, [ {
    key: "started",
    get: function() {
      return this._captureStarted;
    }
  }, {
    key: "sessionManager",
    get: function() {
      if (!this.instance.sessionManager) throw G.error(or + " started without valid sessionManager"), 
      new Error(or + " started without valid sessionManager. This is a bug.");
      return this.instance.sessionManager;
    }
  }, {
    key: "isSampled",
    get: function() {
      return T(this._sampleRate) ? this.instance.get_property(Be) : null;
    }
  }, {
    key: "sessionDuration",
    get: function() {
      var e, t, n = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1], r = this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp;
      return n ? n.timestamp - r : null;
    }
  }, {
    key: "isRecordingEnabled",
    get: function() {
      var e = !!this.instance.get_property(Ae), t = !this.instance.config.disable_session_recording;
      return A && e && t;
    }
  }, {
    key: "isConsoleLogCaptureEnabled",
    get: function() {
      var e = !!this.instance.get_property(qe), t = this.instance.config.enable_recording_console_log;
      return null != t ? t : e;
    }
  }, {
    key: "canvasRecording",
    get: function() {
      var e = this.instance.get_property(Ne);
      return e && e.fps && e.quality ? {
        enabled: e.enabled,
        fps: e.fps,
        quality: e.quality
      } : void 0;
    }
  }, {
    key: "recordingVersion",
    get: function() {
      var e, t = this.instance.get_property(Me);
      return (null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recorderVersion) || t || "v1";
    }
  }, {
    key: "networkPayloadCapture",
    get: function() {
      var e, t, n = this.instance.get_property(De), r = {
        recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
        recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
      }, i = (null == r ? void 0 : r.recordHeaders) || (null == n ? void 0 : n.recordHeaders), o = (null == r ? void 0 : r.recordBody) || (null == n ? void 0 : n.recordBody), s = this.instance.config.capture_performance || (null == n ? void 0 : n.capturePerformance);
      return i || o || s ? {
        recordHeaders: i,
        recordBody: o,
        recordPerformance: s
      } : void 0;
    }
  }, {
    key: "status",
    get: function() {
      return this.receivedDecide ? this.isRecordingEnabled ? C(this._linkedFlag) || this._linkedFlagSeen ? $(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering";
    }
  }, {
    key: "startRecordingIfEnabled",
    value: function() {
      this.isRecordingEnabled ? (this._startCapture(), G.info(or + " started")) : (this.stopRecording(), 
      this.clearBuffer());
    }
  }, {
    key: "stopRecording",
    value: function() {
      this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, 
      this._captureStarted = !1, G.info(or + " stopped"));
    }
  }, {
    key: "makeSamplingDecision",
    value: function(e) {
      var t, n = this.sessionId !== e;
      if (T(this._sampleRate)) {
        var r, i = this.isSampled;
        if (n || !$(i)) r = Math.random() < this._sampleRate; else r = i;
        r || G.warn(or + " Sample rate (".concat(this._sampleRate, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), 
        null === (t = this.instance.persistence) || void 0 === t || t.register(s({}, Be, r));
      } else {
        var o;
        null === (o = this.instance.persistence) || void 0 === o || o.register(s({}, Be, null));
      }
    }
  }, {
    key: "afterDecideResponse",
    value: function(e) {
      var n, r, i, o, a, u, l, c, d, f, h, p = this;
      this.instance.persistence && this.instance.persistence.register((s(h = {}, Ae, !!e.sessionRecording), 
      s(h, qe, null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.consoleLogRecordingEnabled), 
      s(h, Me, null === (u = e.sessionRecording) || void 0 === u ? void 0 : u.recorderVersion), 
      s(h, De, t({
        capturePerformance: e.capturePerformance
      }, null === (l = e.sessionRecording) || void 0 === l ? void 0 : l.networkPayloadCapture)), 
      s(h, Ne, {
        enabled: null === (c = e.sessionRecording) || void 0 === c ? void 0 : c.recordCanvas,
        fps: null === (d = e.sessionRecording) || void 0 === d ? void 0 : d.canvasFps,
        quality: null === (f = e.sessionRecording) || void 0 === f ? void 0 : f.canvasQuality
      }), h));
      var _ = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.sampleRate;
      this._sampleRate = C(_) ? null : parseFloat(_);
      var g, v = null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.minimumDurationMilliseconds;
      (this._minimumDuration = x(v) ? null : v, this._linkedFlag = (null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.linkedFlag) || null, 
      null !== (o = e.sessionRecording) && void 0 !== o && o.endpoint) && (this._endpoint = null === (g = e.sessionRecording) || void 0 === g ? void 0 : g.endpoint);
      if (T(this._sampleRate) && this.sessionManager.onSessionId((function(e) {
        p.makeSamplingDecision(e);
      })), !C(this._linkedFlag)) {
        var m, y, b = E(this._linkedFlag) ? this._linkedFlag : null === (m = this._linkedFlag) || void 0 === m ? void 0 : m.flag, w = E(this._linkedFlag) ? null : null === (y = this._linkedFlag) || void 0 === y ? void 0 : y.variant;
        this.instance.onFeatureFlags((function(e, t) {
          var n = P(t) && b in t, r = w ? t[b] === w : n;
          r && G.info(or + " linked flag matched", {
            linkedFlag: b,
            linkedVariant: w
          }), p._linkedFlagSeen = r;
        }));
      }
      this.receivedDecide = !0, this.startRecordingIfEnabled();
    }
  }, {
    key: "log",
    value: function(e) {
      var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
      null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
        type: 6,
        data: {
          plugin: "rrweb/console@1",
          payload: {
            level: n,
            trace: [],
            payload: [ JSON.stringify(e) ]
          }
        },
        timestamp: te()
      });
    }
  }, {
    key: "_startCapture",
    value: function() {
      var e = this;
      if (!x(Object.assign) && !(this._captureStarted || this.instance.config.disable_session_recording || Zn(this.instance))) {
        this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId();
        var t = "v2" === this.recordingVersion ? "recorder-v2.js" : "recorder.js";
        this.instance.__loaded_recorder_version !== this.recordingVersion ? le(this.instance.requestRouter.endpointFor("assets", "/static/".concat(t, "?v=").concat(m.LIB_VERSION)), (function(n) {
          if (n) return G.error(or + " could not load ".concat(t), n);
          e._onScriptLoaded();
        })) : this._onScriptLoaded();
      }
    }
  }, {
    key: "_isInteractiveEvent",
    value: function(e) {
      var t;
      return 3 === e.type && -1 !== rr.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source);
    }
  }, {
    key: "_updateWindowAndSessionIds",
    value: function(e) {
      var t = this._isInteractiveEvent(e);
      t || this.isIdle || e.timestamp - this._lastActivityTimestamp > nr && (this.isIdle = !0, 
      this._tryAddCustomEvent("sessionIdle", {
        reason: "user inactivity",
        timeSinceLastActive: e.timestamp - this._lastActivityTimestamp,
        threshold: nr
      }));
      var n = !1;
      if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, 
      this._tryAddCustomEvent("sessionNoLongerIdle", {
        reason: "user activity",
        type: e.type
      }), n = !0)), !this.isIdle) {
        var r = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp), i = r.windowId, o = r.sessionId, s = this.sessionId !== o, a = this.windowId !== i;
        this.windowId = i, this.sessionId = o, (n || -1 === [ An, qn ].indexOf(e.type) && (a || s)) && this._tryTakeFullSnapshot();
      }
    }
  }, {
    key: "_tryRRWebMethod",
    value: function(e) {
      try {
        return e.rrwebMethod(), !0;
      } catch (t) {
        return G.warn(or + " could not emit queued rrweb event.", t), this.queuedRRWebEvents.length < 10 && this.queuedRRWebEvents.push({
          enqueuedAt: e.enqueuedAt || Date.now(),
          attempt: e.attempt++,
          rrwebMethod: e.rrwebMethod
        }), !1;
      }
    }
  }, {
    key: "_tryAddCustomEvent",
    value: function(e, t) {
      var n = this;
      return this._tryRRWebMethod(ir((function() {
        return n.rrwebRecord.addCustomEvent(e, t);
      })));
    }
  }, {
    key: "_tryTakeFullSnapshot",
    value: function() {
      var e = this;
      return this._tryRRWebMethod(ir((function() {
        return e.rrwebRecord.takeFullSnapshot();
      })));
    }
  }, {
    key: "_onScriptLoaded",
    value: function() {
      var e, n = this, r = {
        blockClass: "ph-no-capture",
        blockSelector: void 0,
        ignoreClass: "ph-ignore-input",
        maskTextClass: "ph-mask",
        maskTextSelector: void 0,
        maskTextFn: void 0,
        maskAllInputs: !0,
        maskInputOptions: {},
        maskInputFn: void 0,
        slimDOMOptions: {},
        collectFonts: !1,
        inlineStylesheet: !0,
        recordCrossOriginIframes: !1
      };
      this.rrwebRecord = A.rrweb ? A.rrweb.record : A.rrwebRecord;
      for (var i = this.instance.config.session_recording, o = 0, s = Object.entries(i || {}); o < s.length; o++) {
        var a = h(s[o], 2), u = a[0], l = a[1];
        u in r && (r[u] = l);
      }
      if (this.canvasRecording && this.canvasRecording.enabled && (r.recordCanvas = !0, 
      r.sampling = {
        canvas: this.canvasRecording.fps
      }, r.dataURLOptions = {
        type: "image/webp",
        quality: this.canvasRecording.quality
      }), this.rrwebRecord) {
        this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new Mn(this.rrwebRecord, {
          onBlockedNode: function(e, t) {
            var r = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
            G.info(r, {
              node: t
            }), n.log(or + " " + r, "warn");
          }
        }), this._scheduleFullSnapshot();
        var c = this._gatherRRWebPlugins();
        this.stopRrweb = this.rrwebRecord(t({
          emit: function(e) {
            n.onRRwebEmit(e);
          },
          plugins: c
        }, r)), this.instance._addCaptureHook((function(e) {
          try {
            if ("$pageview" === e) {
              var t = A ? n._maskUrl(A.location.href) : "";
              if (!t) return;
              n._tryAddCustomEvent("$pageview", {
                href: t
              }), n._tryTakeFullSnapshot();
            }
          } catch (e) {
            G.error("Could not add $pageview to rrweb session", e);
          }
        })), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
          sessionRecordingOptions: r,
          activePlugins: c.map((function(e) {
            return null == e ? void 0 : e.name;
          }))
        }), this._tryAddCustomEvent("$posthog_config", {
          config: this.instance.config
        });
      } else G.error(or + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
    }
  }, {
    key: "_scheduleFullSnapshot",
    value: function() {
      var e = this;
      this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), this._fullSnapshotTimer = setInterval((function() {
        e._tryTakeFullSnapshot();
      }), tr);
    }
  }, {
    key: "_gatherRRWebPlugins",
    value: function() {
      var e = [];
      (W.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && e.push(W.rrwebConsoleRecord.getRecordConsolePlugin()), 
      this.networkPayloadCapture && R(W.getRecordNetworkPlugin)) && (!xt.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e.push(W.getRecordNetworkPlugin(Hn(this.instance.config, this.networkPayloadCapture))) : G.info(or + " NetworkCapture not started because we are on localhost."));
      return e;
    }
  }, {
    key: "onRRwebEmit",
    value: function(e) {
      if (this._processQueuedEvents(), e && P(e)) {
        if (e.type === Dn.Meta) {
          var t = this._maskUrl(e.data.href);
          if (!t) return;
          e.data.href = t;
        }
        e.type === Dn.FullSnapshot && this._scheduleFullSnapshot();
        var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
        if (n) {
          var r = function(e) {
            var t = e;
            if (t && P(t) && 6 === t.type && P(t.data) && "rrweb/console@1" === t.data.plugin) {
              t.data.payload.payload.length > 10 && (t.data.payload.payload = t.data.payload.payload.slice(0, 10), 
              t.data.payload.payload.push("...[truncated]"));
              for (var n = [], r = 0; r < t.data.payload.payload.length; r++) t.data.payload.payload[r] && t.data.payload.payload[r].length > 2e3 ? n.push(t.data.payload.payload[r].slice(0, 2e3) + "...[truncated]") : n.push(t.data.payload.payload[r]);
              return t.data.payload.payload = n, e;
            }
            return e;
          }(n), i = JSON.stringify(r).length;
          if (this._updateWindowAndSessionIds(r), !this.isIdle || r.type === Dn.Custom) {
            var o = {
              $snapshot_bytes: i,
              $snapshot_data: r,
              $session_id: this.sessionId,
              $window_id: this.windowId
            };
            "disabled" !== this.status ? this._captureSnapshotBuffered(o) : this.clearBuffer();
          }
        }
      }
    }
  }, {
    key: "_processQueuedEvents",
    value: function() {
      var e = this;
      if (this.queuedRRWebEvents.length) {
        var t = p(this.queuedRRWebEvents);
        this.queuedRRWebEvents = [], t.forEach((function(n) {
          Date.now() - n.enqueuedAt > 2e3 ? e._tryAddCustomEvent("rrwebQueueTimeout", {
            enqueuedAt: n.enqueuedAt,
            attempt: n.attempt,
            queueLength: t.length
          }) : e._tryRRWebMethod(n) && e._tryAddCustomEvent("rrwebQueueSuccess", {
            enqueuedAt: n.enqueuedAt,
            attempt: n.attempt,
            queueLength: t.length
          });
        }));
      }
    }
  }, {
    key: "_maskUrl",
    value: function(e) {
      var t = this.instance.config.session_recording;
      if (t.maskNetworkRequestFn) {
        var n, r = {
          url: e
        };
        return null === (n = r = t.maskNetworkRequestFn(r)) || void 0 === n ? void 0 : n.url;
      }
      return e;
    }
  }, {
    key: "clearBuffer",
    value: function() {
      return this.buffer = void 0, {
        size: 0,
        data: [],
        sessionId: this.sessionId,
        windowId: this.windowId
      };
    }
  }, {
    key: "_flushBuffer",
    value: function() {
      var e = this;
      this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
      var t = this._minimumDuration, n = this.sessionDuration, r = T(n) && n >= 0, i = T(t) && r && n < t;
      return "buffering" === this.status || i ? (this.flushBufferTimer = setTimeout((function() {
        e._flushBuffer();
      }), 2e3), this.buffer || this.clearBuffer()) : this.buffer && 0 !== this.buffer.data.length ? (this._captureSnapshot({
        $snapshot_bytes: this.buffer.size,
        $snapshot_data: this.buffer.data,
        $session_id: this.buffer.sessionId,
        $window_id: this.buffer.windowId
      }), this.clearBuffer()) : this.buffer || this.clearBuffer();
    }
  }, {
    key: "_captureSnapshotBuffered",
    value: function(e) {
      var t, n = this, r = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
      (!this.buffer || this.buffer.size + e.$snapshot_bytes + r > 943718.4 || this.buffer.sessionId && this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), 
      I(this.buffer.sessionId) && !I(this.sessionId) && (this.buffer.sessionId = this.sessionId, 
      this.buffer.windowId = this.windowId), this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), 
      this.flushBufferTimer || (this.flushBufferTimer = setTimeout((function() {
        n._flushBuffer();
      }), 2e3));
    }
  }, {
    key: "_captureSnapshot",
    value: function(e) {
      this.instance.capture("$snapshot", e, {
        method: "POST",
        _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
        _noTruncate: !0,
        _batchKey: "recordings",
        _metrics: {
          rrweb_full_snapshot: e.$snapshot_data.type === An
        }
      });
    }
  } ]), e;
}(), ar = function() {
  function e(t) {
    r(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
  }
  return o(e, [ {
    key: "call",
    value: function() {
      var e = this, t = se(JSON.stringify({
        token: this.instance.config.token,
        distinct_id: this.instance.get_distinct_id(),
        groups: this.instance.getGroups(),
        person_properties: this.instance.get_property(Ue),
        group_properties: this.instance.get_property(Ve),
        disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0
      }));
      this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), {
        data: t,
        verbose: !0
      }, {
        method: "POST"
      }, (function(t) {
        return e.parseDecideResponse(t);
      }));
    }
  }, {
    key: "parseDecideResponse",
    value: function(e) {
      var t, n = this;
      if (this.instance.featureFlags.setReloadingPaused(!1), this.instance.featureFlags._startReloadTimer(), 
      0 !== (null == e ? void 0 : e.status)) {
        if (!B || !B.body) return G.info("document not ready yet, trying again in 500 milliseconds..."), 
        void setTimeout((function() {
          n.parseDecideResponse(e);
        }), 500);
        this.instance.toolbar.afterDecideResponse(e), null === (t = this.instance.sessionRecording) || void 0 === t || t.afterDecideResponse(e), 
        Ze.afterDecideResponse(e, this.instance), this.instance._afterDecideResponse(e), 
        this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(e);
        var r = null == A ? void 0 : A.extendPostHogWithSurveys;
        e.surveys && !r && le(this.instance.requestRouter.endpointFor("assets", "/static/surveys.js"), (function(e) {
          if (e) return G.error("Could not load surveys script", e);
          A.extendPostHogWithSurveys(n.instance);
        }));
        var i = null == A ? void 0 : A.extendPostHogWithExceptionAutoCapture;
        if (e.autocaptureExceptions && e.autocaptureExceptions && x(i) && le(this.instance.requestRouter.endpointFor("assets", "/static/exception-autocapture.js"), (function(t) {
          if (t) return G.error("Could not load exception autocapture script", t);
          A.extendPostHogWithExceptionAutocapture(n.instance, e);
        })), e.siteApps) if (this.instance.config.opt_in_site_apps) {
          var o, s = v(e.siteApps);
          try {
            var a = function() {
              var e = o.value, t = e.id, r = e.url, i = n.instance.requestRouter.endpointFor("api", r);
              W["__$$ph_site_app_".concat(t)] = n.instance, le(i, (function(e) {
                e && G.error("Error while initializing PostHog app with config id ".concat(t), e);
              }));
            };
            for (s.s(); !(o = s.n()).done; ) a();
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
        } else e.siteApps.length > 0 && G.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
      } else G.error("Failed to fetch feature flags from PostHog.");
    }
  } ]), e;
}(), ur = [ "source" ], lr = null != A && A.location ? Ot(A.location.hash, "__posthog") || Ot(location.hash, "state") : null, cr = function() {
  function e(t) {
    r(this, e), this.instance = t;
  }
  return o(e, [ {
    key: "afterDecideResponse",
    value: function(e) {
      var n = e.toolbarParams || e.editorParams || (e.toolbarVersion ? {
        toolbarVersion: e.toolbarVersion
      } : {});
      e.isAuthenticated && n.toolbarVersion && 0 === n.toolbarVersion.indexOf("toolbar") && this.loadToolbar(t({}, n));
    }
  }, {
    key: "maybeLoadToolbar",
    value: function() {
      var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      if (!A || !B) return !1;
      n = null !== (e = n) && void 0 !== e ? e : A.location, i = null !== (t = i) && void 0 !== t ? t : A.history;
      try {
        if (!r) {
          try {
            A.localStorage.setItem("test", "test"), A.localStorage.removeItem("test");
          } catch (e) {
            return !1;
          }
          r = null == A ? void 0 : A.localStorage;
        }
        var o, s = lr || Ot(n.hash, "__posthog") || Ot(n.hash, "state"), a = s ? ne((function() {
          return JSON.parse(atob(decodeURIComponent(s)));
        })) || ne((function() {
          return JSON.parse(decodeURIComponent(s));
        })) : null;
        return a && "ph_authorize" === a.action ? ((o = a).source = "url", o && Object.keys(o).length > 0 && (a.desiredHash ? n.hash = a.desiredHash : i ? i.replaceState("", B.title, n.pathname + n.search) : n.hash = "")) : ((o = JSON.parse(r.getItem("_postHogToolbarParams") || "{}")).source = "localstorage", 
        delete o.userIntent), !(!o.token || this.instance.config.token !== o.token) && (this.loadToolbar(o), 
        !0);
      } catch (e) {
        return !1;
      }
    }
  }, {
    key: "loadToolbar",
    value: function(e) {
      var n = this;
      if (!A || W._postHogToolbarLoaded) return !1;
      W._postHogToolbarLoaded = !0;
      var r = 3e5, i = Math.floor(Date.now() / r) * r, o = this.instance.requestRouter.endpointFor("assets", "/static/toolbar.js?t=".concat(i)), s = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, a = t(t({
        token: this.instance.config.token
      }, e), {}, {
        apiURL: this.instance.requestRouter.endpointFor("ui")
      }, s ? {
        instrument: !1
      } : {});
      a.source;
      var u = c(a, ur);
      return A.localStorage.setItem("_postHogToolbarParams", JSON.stringify(u)), le(o, (function(e) {
        e ? G.error("Failed to load toolbar", e) : (W.ph_load_toolbar || W.ph_load_editor)(a, n.instance);
      })), ue(A, "turbolinks:load", (function() {
        W._postHogToolbarLoaded = !1, n.loadToolbar(a);
      })), !0;
    }
  }, {
    key: "_loadEditor",
    value: function(e) {
      return this.loadToolbar(e);
    }
  }, {
    key: "maybeLoadEditor",
    value: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      return this.maybeLoadToolbar(e, t, n);
    }
  } ]), e;
}(), dr = function() {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
    r(this, e), this.isPolling = !0, this._event_queue = [], this._empty_queue_count = 0, 
    this._poller = void 0, this._pollInterval = t;
  }
  return o(e, [ {
    key: "setPollInterval",
    value: function(e) {
      this._pollInterval = e, this.isPolling && this.poll();
    }
  }, {
    key: "poll",
    value: function() {}
  }, {
    key: "unload",
    value: function() {}
  }, {
    key: "getTime",
    value: function() {
      return (new Date).getTime();
    }
  } ]), e;
}(), fr = function(e) {
  a(i, dr);
  var n = f(i);
  function i(e) {
    var t, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
    return r(this, i), (t = n.call(this, o)).handlePollRequest = e, t;
  }
  return o(i, [ {
    key: "enqueue",
    value: function(e, t, n) {
      this._event_queue.push({
        url: e,
        data: t,
        options: n
      }), this.isPolling || (this.isPolling = !0, this.poll());
    }
  }, {
    key: "poll",
    value: function() {
      var e = this;
      clearTimeout(this._poller), this._poller = setTimeout((function() {
        if (e._event_queue.length > 0) {
          var t = e.formatQueue(), n = function(n) {
            var r = t[n], i = r.url, o = r.data, s = r.options;
            K(o, (function(t, n) {
              o[n].offset = Math.abs(o[n].timestamp - e.getTime()), delete o[n].timestamp;
            })), e.handlePollRequest(i, o, s);
          };
          for (var r in t) n(r);
          e._event_queue.length = 0, e._empty_queue_count = 0;
        } else e._empty_queue_count++;
        e._empty_queue_count > 4 && (e.isPolling = !1, e._empty_queue_count = 0), e.isPolling && e.poll();
      }), this._pollInterval);
    }
  }, {
    key: "unload",
    value: function() {
      var e = this;
      clearTimeout(this._poller);
      var n = this._event_queue.length > 0 ? this.formatQueue() : {};
      this._event_queue.length = 0;
      var r = Object.values(n);
      [].concat(p(r.filter((function(e) {
        return 0 === e.url.indexOf("/e");
      }))), p(r.filter((function(e) {
        return 0 !== e.url.indexOf("/e");
      })))).map((function(n) {
        var r = n.url, i = n.data, o = n.options;
        e.handlePollRequest(r, i, t(t({}, o), {}, {
          transport: "sendBeacon"
        }));
      }));
    }
  }, {
    key: "formatQueue",
    value: function() {
      var e = {};
      return K(this._event_queue, (function(t) {
        var n = t.url, r = t.data, i = t.options, o = (i ? i._batchKey : null) || n;
        x(e[o]) && (e[o] = {
          data: [],
          url: n,
          options: i
        }), i && e[o].options && e[o].options._metrics && !e[o].options._metrics.rrweb_full_snapshot && (e[o].options._metrics.rrweb_full_snapshot = i._metrics.rrweb_full_snapshot), 
        e[o].data.push(r);
      })), e;
    }
  } ]), i;
}(), hr = Uint8Array, pr = Uint16Array, _r = Uint32Array, gr = new hr([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0 ]), vr = new hr([ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0 ]), mr = new hr([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]), yr = function(e, t) {
  for (var n = new pr(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
  var i = new _r(n[30]);
  for (r = 1; r < 30; ++r) for (var o = n[r]; o < n[r + 1]; ++o) i[o] = o - n[r] << 5 | r;
  return [ n, i ];
}, br = yr(gr, 2), wr = br[0], kr = br[1];

wr[28] = 258, kr[258] = 28;

for (var Sr = yr(vr, 0)[1], Fr = new pr(32768), Rr = 0; Rr < 32768; ++Rr) {
  var Pr = (43690 & Rr) >>> 1 | (21845 & Rr) << 1;
  Pr = (61680 & (Pr = (52428 & Pr) >>> 2 | (13107 & Pr) << 2)) >>> 4 | (3855 & Pr) << 4, 
  Fr[Rr] = ((65280 & Pr) >>> 8 | (255 & Pr) << 8) >>> 1;
}

var xr = function(e, t, n) {
  for (var r = e.length, i = 0, o = new pr(t); i < r; ++i) ++o[e[i] - 1];
  var s, a = new pr(t);
  for (i = 0; i < t; ++i) a[i] = a[i - 1] + o[i - 1] << 1;
  if (n) {
    s = new pr(1 << t);
    var u = 15 - t;
    for (i = 0; i < r; ++i) if (e[i]) for (var l = i << 4 | e[i], c = t - e[i], d = a[e[i] - 1]++ << c, f = d | (1 << c) - 1; d <= f; ++d) s[Fr[d] >>> u] = l;
  } else for (s = new pr(r), i = 0; i < r; ++i) s[i] = Fr[a[e[i] - 1]++] >>> 15 - e[i];
  return s;
}, Er = new hr(288);

for (Rr = 0; Rr < 144; ++Rr) Er[Rr] = 8;

for (Rr = 144; Rr < 256; ++Rr) Er[Rr] = 9;

for (Rr = 256; Rr < 280; ++Rr) Er[Rr] = 7;

for (Rr = 280; Rr < 288; ++Rr) Er[Rr] = 8;

var Ir = new hr(32);

for (Rr = 0; Rr < 32; ++Rr) Ir[Rr] = 5;

var Cr, Tr = xr(Er, 9, 0), $r = xr(Ir, 5, 0), Or = function(e) {
  return (e / 8 >> 0) + (7 & e && 1);
}, Ar = function(e, t, n) {
  (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
  var r = new (e instanceof pr ? pr : e instanceof _r ? _r : hr)(n - t);
  return r.set(e.subarray(t, n)), r;
}, qr = function(e, t, n) {
  n <<= 7 & t;
  var r = t / 8 >> 0;
  e[r] |= n, e[r + 1] |= n >>> 8;
}, Mr = function(e, t, n) {
  n <<= 7 & t;
  var r = t / 8 >> 0;
  e[r] |= n, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16;
}, Dr = function(e, t) {
  for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
    s: r,
    f: e[r]
  });
  var i = n.length, o = n.slice();
  if (!i) return [ new hr(0), 0 ];
  if (1 == i) {
    var s = new hr(n[0].s + 1);
    return s[n[0].s] = 1, [ s, 1 ];
  }
  n.sort((function(e, t) {
    return e.f - t.f;
  })), n.push({
    s: -1,
    f: 25001
  });
  var a = n[0], u = n[1], l = 0, c = 1, d = 2;
  for (n[0] = {
    s: -1,
    f: a.f + u.f,
    l: a,
    r: u
  }; c != i - 1; ) a = n[n[l].f < n[d].f ? l++ : d++], u = n[l != c && n[l].f < n[d].f ? l++ : d++], 
  n[c++] = {
    s: -1,
    f: a.f + u.f,
    l: a,
    r: u
  };
  var f = o[0].s;
  for (r = 1; r < i; ++r) o[r].s > f && (f = o[r].s);
  var h = new pr(f + 1), p = Nr(n[c - 1], h, 0);
  if (p > t) {
    r = 0;
    var _ = 0, g = p - t, v = 1 << g;
    for (o.sort((function(e, t) {
      return h[t.s] - h[e.s] || e.f - t.f;
    })); r < i; ++r) {
      var m = o[r].s;
      if (!(h[m] > t)) break;
      _ += v - (1 << p - h[m]), h[m] = t;
    }
    for (_ >>>= g; _ > 0; ) {
      var y = o[r].s;
      h[y] < t ? _ -= 1 << t - h[y]++ - 1 : ++r;
    }
    for (;r >= 0 && _; --r) {
      var b = o[r].s;
      h[b] == t && (--h[b], ++_);
    }
    p = t;
  }
  return [ new hr(h), p ];
}, Nr = function e(t, n, r) {
  return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : n[t.s] = r;
}, Lr = function(e) {
  for (var t = e.length; t && !e[--t]; ) ;
  for (var n = new pr(++t), r = 0, i = e[0], o = 1, s = function(e) {
    n[r++] = e;
  }, a = 1; a <= t; ++a) if (e[a] == i && a != t) ++o; else {
    if (!i && o > 2) {
      for (;o > 138; o -= 138) s(32754);
      o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0);
    } else if (o > 3) {
      for (s(i), --o; o > 6; o -= 6) s(8304);
      o > 2 && (s(o - 3 << 5 | 8208), o = 0);
    }
    for (;o--; ) s(i);
    o = 1, i = e[a];
  }
  return [ n.subarray(0, r), t ];
}, Br = function(e, t) {
  for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
  return n;
}, jr = function(e, t, n) {
  var r = n.length, i = Or(t + 2);
  e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
  for (var o = 0; o < r; ++o) e[i + o + 4] = n[o];
  return 8 * (i + 4 + r);
}, Hr = function(e, t, n, r, i, o, s, a, u, l, c) {
  qr(t, c++, n), ++i[256];
  for (var d = Dr(i, 15), f = d[0], h = d[1], p = Dr(o, 15), _ = p[0], g = p[1], v = Lr(f), m = v[0], y = v[1], b = Lr(_), w = b[0], k = b[1], S = new pr(19), F = 0; F < m.length; ++F) S[31 & m[F]]++;
  for (F = 0; F < w.length; ++F) S[31 & w[F]]++;
  for (var R = Dr(S, 7), P = R[0], x = R[1], E = 19; E > 4 && !P[mr[E - 1]]; --E) ;
  var I, C, T, $, O = l + 5 << 3, A = Br(i, Er) + Br(o, Ir) + s, q = Br(i, f) + Br(o, _) + s + 14 + 3 * E + Br(S, P) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
  if (O <= A && O <= q) return jr(t, c, e.subarray(u, u + l));
  if (qr(t, c, 1 + (q < A)), c += 2, q < A) {
    I = xr(f, h, 0), C = f, T = xr(_, g, 0), $ = _;
    var M = xr(P, x, 0);
    qr(t, c, y - 257), qr(t, c + 5, k - 1), qr(t, c + 10, E - 4), c += 14;
    for (F = 0; F < E; ++F) qr(t, c + 3 * F, P[mr[F]]);
    c += 3 * E;
    for (var D = [ m, w ], N = 0; N < 2; ++N) {
      var L = D[N];
      for (F = 0; F < L.length; ++F) {
        var B = 31 & L[F];
        qr(t, c, M[B]), c += P[B], B > 15 && (qr(t, c, L[F] >>> 5 & 127), c += L[F] >>> 12);
      }
    }
  } else I = Tr, C = Er, T = $r, $ = Ir;
  for (F = 0; F < a; ++F) if (r[F] > 255) {
    B = r[F] >>> 18 & 31;
    Mr(t, c, I[B + 257]), c += C[B + 257], B > 7 && (qr(t, c, r[F] >>> 23 & 31), c += gr[B]);
    var j = 31 & r[F];
    Mr(t, c, T[j]), c += $[j], j > 3 && (Mr(t, c, r[F] >>> 5 & 8191), c += vr[j]);
  } else Mr(t, c, I[r[F]]), c += C[r[F]];
  return Mr(t, c, I[256]), c + C[256];
}, Ur = new _r([ 65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632 ]), Vr = new hr(0), Wr = function() {
  for (var e = new _r(256), t = 0; t < 256; ++t) {
    for (var n = t, r = 9; --r; ) n = (1 & n && 3988292384) ^ n >>> 1;
    e[t] = n;
  }
  return e;
}(), zr = function() {
  var e = 4294967295;
  return {
    p: function(t) {
      for (var n = e, r = 0; r < t.length; ++r) n = Wr[255 & n ^ t[r]] ^ n >>> 8;
      e = n;
    },
    d: function() {
      return 4294967295 ^ e;
    }
  };
}, Gr = function(e, t, n, r, i) {
  return function(e, t, n, r, i, o) {
    var s = e.length, a = new hr(r + s + 5 * (1 + Math.floor(s / 7e3)) + i), u = a.subarray(r, a.length - i), l = 0;
    if (!t || s < 8) for (var c = 0; c <= s; c += 65535) {
      var d = c + 65535;
      d < s ? l = jr(u, l, e.subarray(c, d)) : (u[c] = o, l = jr(u, l, e.subarray(c, s)));
    } else {
      for (var f = Ur[t - 1], h = f >>> 13, p = 8191 & f, _ = (1 << n) - 1, g = new pr(32768), v = new pr(_ + 1), m = Math.ceil(n / 3), y = 2 * m, b = function(t) {
        return (e[t] ^ e[t + 1] << m ^ e[t + 2] << y) & _;
      }, w = new _r(25e3), k = new pr(288), S = new pr(32), F = 0, R = 0, P = (c = 0, 
      0), x = 0, E = 0; c < s; ++c) {
        var I = b(c), C = 32767 & c, T = v[I];
        if (g[C] = T, v[I] = C, x <= c) {
          var $ = s - c;
          if ((F > 7e3 || P > 24576) && $ > 423) {
            l = Hr(e, u, 0, w, k, S, R, P, E, c - E, l), P = F = R = 0, E = c;
            for (var O = 0; O < 286; ++O) k[O] = 0;
            for (O = 0; O < 30; ++O) S[O] = 0;
          }
          var A = 2, q = 0, M = p, D = C - T & 32767;
          if ($ > 2 && I == b(c - D)) for (var N = Math.min(h, $) - 1, L = Math.min(32767, c), B = Math.min(258, $); D <= L && --M && C != T; ) {
            if (e[c + A] == e[c + A - D]) {
              for (var j = 0; j < B && e[c + j] == e[c + j - D]; ++j) ;
              if (j > A) {
                if (A = j, q = D, j > N) break;
                var H = Math.min(D, j - 2), U = 0;
                for (O = 0; O < H; ++O) {
                  var V = c - D + O + 32768 & 32767, W = V - g[V] + 32768 & 32767;
                  W > U && (U = W, T = V);
                }
              }
            }
            D += (C = T) - (T = g[C]) + 32768 & 32767;
          }
          if (q) {
            w[P++] = 268435456 | kr[A] << 18 | Sr[q];
            var z = 31 & kr[A], G = 31 & Sr[q];
            R += gr[z] + vr[G], ++k[257 + z], ++S[G], x = c + A, ++F;
          } else w[P++] = e[c], ++k[e[c]];
        }
      }
      l = Hr(e, u, o, w, k, S, R, P, E, c - E, l), o || (l = jr(u, l, Vr));
    }
    return Ar(a, 0, r + Or(l) + i);
  }(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, r, !i);
}, Qr = function(e, t, n) {
  for (;n; ++t) e[t] = n, n >>>= 8;
}, Yr = function(e, t) {
  var n = t.filename;
  if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, 
  e[9] = 3, 0 != t.mtime && Qr(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), 
  n) {
    e[3] = 8;
    for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r);
  }
}, Jr = function(e) {
  return 10 + (e.filename && e.filename.length + 1 || 0);
};

function Kr(e, t) {
  void 0 === t && (t = {});
  var n = zr(), r = e.length;
  n.p(e);
  var i = Gr(e, t, Jr(t), 8), o = i.length;
  return Yr(i, t), Qr(i, o - 8, n.d()), Qr(i, o - 4, r), i;
}

function Xr(e, t) {
  var n = e.length;
  if (!t && "undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
  for (var r = new hr(e.length + (e.length >>> 1)), i = 0, o = function(e) {
    r[i++] = e;
  }, s = 0; s < n; ++s) {
    if (i + 5 > r.length) {
      var a = new hr(i + 8 + (n - s << 1));
      a.set(r), r = a;
    }
    var u = e.charCodeAt(s);
    u < 128 || t ? o(u) : u < 2048 ? (o(192 | u >>> 6), o(128 | 63 & u)) : u > 55295 && u < 57344 ? (o(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++s)) >>> 18), 
    o(128 | u >>> 12 & 63), o(128 | u >>> 6 & 63), o(128 | 63 & u)) : (o(224 | u >>> 12), 
    o(128 | u >>> 6 & 63), o(128 | 63 & u));
  }
  return Ar(r, 0, i);
}

!function(e) {
  e.GZipJS = "gzip-js", e.Base64 = "base64";
}(Cr || (Cr = {}));

var Zr = function(e, t, n) {
  var r = t || {};
  r.ip = n.ip ? 1 : 0, r._ = (new Date).getTime().toString(), r.ver = m.LIB_VERSION;
  var i = e.split("?");
  if (i.length > 1) {
    var o, s = v(i[1].split("&"));
    try {
      for (s.s(); !(o = s.n()).done; ) {
        var a = o.value.split("=")[0];
        x(r[a]) || delete r[a];
      }
    } catch (e) {
      s.e(e);
    } finally {
      s.f();
    }
  }
  var u = e.indexOf("?") > -1 ? "&" : "?";
  return e + u + Tt(r);
}, ei = function e(t, n) {
  if (n.blob && t.buffer) return new Blob([ F(t) ? t : t.buffer ], {
    type: "text/plain"
  });
  if (n.sendBeacon || n.blob) {
    var r = e(t, {
      method: "POST"
    });
    return new Blob([ r ], {
      type: "application/x-www-form-urlencoded"
    });
  }
  return "POST" !== n.method ? null : (i = S(t) || F(t) ? "data=" + encodeURIComponent(t) : "data=" + encodeURIComponent(t.data), 
  "compression" in t && t.compression && (i += "&compression=" + t.compression), i);
  var i;
}, ti = function(e) {
  if (H && "fetch" === e.options.transport) {
    var n, r = ei(e.data, e.options), i = new Headers;
    K(i, (function(e, t) {
      i.append(t, e);
    })), "POST" !== e.options.method || e.options.blob || i.append("Content-Type", "application/x-www-form-urlencoded");
    var o = e.url;
    return T(e.retriesPerformedSoFar) && e.retriesPerformedSoFar > 0 && (o = Zr(o, {
      retry_count: e.retriesPerformedSoFar
    }, {})), void H(o, {
      method: (null === (n = e.options) || void 0 === n ? void 0 : n.method) || "GET",
      headers: i,
      keepalive: "POST" === e.options.method,
      body: r
    }).then((function(n) {
      var r = n.status;
      return n.text().then((function(n) {
        var o, s;
        if (null === (o = e.onResponse) || void 0 === o || o.call(e, {
          statusCode: r,
          responseText: n
        }), 200 !== r) R(e.onError) && e.onError({
          statusCode: r,
          responseText: n
        }), (r < 400 || r > 500) && e.retryQueue.enqueue(t(t({}, e), {}, {
          headers: i,
          retriesPerformedSoFar: (e.retriesPerformedSoFar || 0) + 1
        })), null === (s = e.callback) || void 0 === s || s.call(e, {
          status: 0
        }); else try {
          var a;
          null === (a = e.callback) || void 0 === a || a.call(e, JSON.parse(n));
        } catch (e) {
          G.error(e);
        }
      }));
    })).catch((function(t) {
      var n;
      G.error(t), null === (n = e.callback) || void 0 === n || n.call(e, {
        status: 0
      });
    }));
  }
  return ni(e);
}, ni = function(e) {
  var t = e.url, n = e.data, r = e.headers, i = e.options, o = e.callback, s = e.retriesPerformedSoFar, a = e.retryQueue, u = e.onError, l = e.timeout, c = void 0 === l ? 6e4 : l, d = e.onResponse;
  T(s) && s > 0 && (t = Zr(t, {
    retry_count: s
  }, {}));
  var f = new XMLHttpRequest;
  f.open(i.method || "GET", t, !0);
  var h = ei(n, i);
  K(r, (function(e, t) {
    f.setRequestHeader(t, e);
  })), "POST" !== i.method || i.blob || f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
  f.timeout = c, f.withCredentials = !0, f.onreadystatechange = function() {
    if (4 === f.readyState) {
      var e = {
        statusCode: f.status,
        responseText: f.responseText
      };
      if (null == d || d(e), 200 === f.status) {
        if (o) {
          var l;
          try {
            l = JSON.parse(f.responseText);
          } catch (e) {
            return void G.error(e);
          }
          o(l);
        }
      } else R(u) && u(e), (f.status < 400 || f.status > 500) && a.enqueue({
        url: t,
        data: n,
        options: i,
        headers: r,
        retriesPerformedSoFar: (s || 0) + 1,
        callback: o
      }), null == o || o({
        status: 0
      });
    }
  }, f.send(h);
};

var ri, ii = function(e) {
  a(i, dr);
  var n = f(i);
  function i(e, t) {
    var o;
    return r(this, i), (o = n.call(this)).isPolling = !1, o.queue = [], o.areWeOnline = !0, 
    o.onRequestError = e, o.rateLimiter = t, !x(A) && "onLine" in A.navigator && (o.areWeOnline = A.navigator.onLine, 
    A.addEventListener("online", (function() {
      o._handleWeAreNowOnline();
    })), A.addEventListener("offline", (function() {
      o.areWeOnline = !1;
    }))), o;
  }
  return o(i, [ {
    key: "enqueue",
    value: function(e) {
      var t = e.retriesPerformedSoFar || 0;
      if (!(t >= 10)) {
        var n = function(e) {
          var t = 3e3 * Math.pow(2, e), n = t / 2, r = Math.min(18e5, t), i = (Math.random() - .5) * (r - n);
          return Math.ceil(r + i);
        }(t), r = new Date(Date.now() + n);
        this.queue.push({
          retryAt: r,
          requestData: e
        });
        var i = "Enqueued failed request for retry in ".concat(n);
        navigator.onLine || (i += " (Browser is offline)"), G.warn(i), this.isPolling || (this.isPolling = !0, 
        this.poll());
      }
    }
  }, {
    key: "poll",
    value: function() {
      var e = this;
      this._poller && clearTimeout(this._poller), this._poller = setTimeout((function() {
        e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll();
      }), this._pollInterval);
    }
  }, {
    key: "flush",
    value: function() {
      var e = new Date(Date.now()), t = this.queue.filter((function(t) {
        return t.retryAt < e;
      }));
      if (t.length > 0) {
        this.queue = this.queue.filter((function(t) {
          return t.retryAt >= e;
        }));
        var n, r = v(t);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value.requestData;
            this._executeXhrRequest(i);
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
      }
    }
  }, {
    key: "unload",
    value: function() {
      this._poller && (clearTimeout(this._poller), this._poller = void 0);
      var e, n = v(this.queue);
      try {
        for (n.s(); !(e = n.n()).done; ) {
          var r = e.value.requestData, i = r.url, o = r.data, s = r.options;
          if (this.rateLimiter.isRateLimited(s._batchKey)) G.warn("[RetryQueue] is quota limited. Dropping request."); else try {
            null == A || A.navigator.sendBeacon(i, ei(o, t(t({}, s), {}, {
              sendBeacon: !0
            })));
          } catch (e) {
            G.error(e);
          }
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
      this.queue = [];
    }
  }, {
    key: "_executeXhrRequest",
    value: function(e) {
      var t = e.url, n = e.data, r = e.options, i = e.headers, o = e.callback, s = e.retriesPerformedSoFar;
      this.rateLimiter.isRateLimited(r._batchKey) || ti({
        url: t,
        data: n || {},
        options: r || {},
        headers: i || {},
        retriesPerformedSoFar: s || 0,
        callback: o,
        retryQueue: this,
        onError: this.onRequestError,
        onResponse: this.rateLimiter.checkForLimiting
      });
    }
  }, {
    key: "_handleWeAreNowOnline",
    value: function() {
      this.areWeOnline = !0, this.flush();
    }
  } ]), i;
}(), oi = 1800, si = function() {
  function e(t, n, i, o) {
    r(this, e), s(this, "_sessionIdChangedHandlers", []), this.config = t, this.persistence = n, 
    this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, 
    this._sessionActivityTimestamp = null, this._sessionIdGenerator = i || dt, this._windowIdGenerator = o || dt;
    var a = t.persistence_name || t.token, u = t.session_idle_timeout_seconds || oi;
    if (T(u) ? u > oi ? G.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : u < 60 && G.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (G.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), 
    u = oi), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(u, 60), oi), this._window_id_storage_key = "ph_" + a + "_window_id", 
    this._primary_window_exists_storage_key = "ph_" + a + "_primary_window_exists", 
    this._canUseSessionStorage()) {
      var l = Pt.parse(this._window_id_storage_key), c = Pt.parse(this._primary_window_exists_storage_key);
      l && !c ? this._windowId = l : Pt.remove(this._window_id_storage_key), Pt.set(this._primary_window_exists_storage_key, !0);
    }
    this._listenToReloadWindow();
  }
  return o(e, [ {
    key: "onSessionId",
    value: function(e) {
      var t = this;
      return x(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), 
      this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId), 
      function() {
        t._sessionIdChangedHandlers = t._sessionIdChangedHandlers.filter((function(t) {
          return t !== e;
        }));
      };
    }
  }, {
    key: "_canUseSessionStorage",
    value: function() {
      return "memory" !== this.config.persistence && !this.persistence.disabled && Pt.is_supported();
    }
  }, {
    key: "_setWindowId",
    value: function(e) {
      e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && Pt.set(this._window_id_storage_key, e));
    }
  }, {
    key: "_getWindowId",
    value: function() {
      return this._windowId ? this._windowId : this._canUseSessionStorage() ? Pt.parse(this._window_id_storage_key) : null;
    }
  }, {
    key: "_setSessionId",
    value: function(e, t, n) {
      e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, 
      this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register(s({}, Le, [ t, e, n ])));
    }
  }, {
    key: "_getSessionId",
    value: function() {
      if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [ this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp ];
      var e = this.persistence.props[Le];
      return S(e) && 2 === e.length && e.push(e[0]), e || [ 0, null, 0 ];
    }
  }, {
    key: "resetSessionId",
    value: function() {
      this._setSessionId(null, null, null);
    }
  }, {
    key: "_listenToReloadWindow",
    value: function() {
      var e = this;
      null == A || A.addEventListener("beforeunload", (function() {
        e._canUseSessionStorage() && Pt.remove(e._primary_window_exists_storage_key);
      }));
    }
  }, {
    key: "checkAndGetSessionAndWindowId",
    value: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (new Date).getTime(), n = h(this._getSessionId(), 3), r = n[0], i = n[1], o = n[2], s = this._getWindowId(), a = o && o > 0 && Math.abs(t - o) > 864e5, u = !1, l = !i, c = !e && Math.abs(t - r) > this._sessionTimeoutMs;
      l || c || a ? (i = this._sessionIdGenerator(), s = this._windowIdGenerator(), G.info("[SessionId] new session ID generated", {
        sessionId: i,
        windowId: s,
        changeReason: {
          noSessionId: l,
          activityTimeout: c,
          sessionPastMaximumLength: a
        }
      }), o = t, u = !0) : s || (s = this._windowIdGenerator(), u = !0);
      var d = 0 === r || !e || a ? t : r, f = 0 === o ? (new Date).getTime() : o;
      return this._setWindowId(s), this._setSessionId(i, d, f), u && this._sessionIdChangedHandlers.forEach((function(e) {
        return e(i, s);
      })), {
        sessionId: i,
        windowId: s,
        sessionStartTimestamp: f
      };
    }
  } ]), e;
}();

!function(e) {
  e.US = "us", e.EU = "eu", e.CUSTOM = "custom";
}(ri || (ri = {}));

var ai = function() {
  function e(t) {
    r(this, e), this.instance = t;
  }
  return o(e, [ {
    key: "apiHost",
    get: function() {
      return this.instance.config.api_host.trim().replace(/\/$/, "");
    }
  }, {
    key: "uiHost",
    get: function() {
      var e;
      return null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "");
    }
  }, {
    key: "region",
    get: function() {
      switch (this.apiHost) {
       case "https://app.posthog.com":
       case "https://us.posthog.com":
        return ri.US;

       case "https://eu.posthog.com":
        return ri.EU;

       default:
        return ri.CUSTOM;
      }
    }
  }, {
    key: "endpointFor",
    value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if (t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e) return (this.uiHost || this.apiHost) + t;
      if (this.region === ri.CUSTOM) return this.apiHost + t;
      var n = "i.posthog.com" + t;
      switch (e) {
       case "assets":
        return "https://".concat(this.region, "-assets.").concat(n);

       case "api":
        return "https://".concat(this.region, ".").concat(n);
      }
    }
  } ]), e;
}(), ui = o((function e(t, n, i, o) {
  r(this, e), this.name = "posthog-js", this.setupOnce = function(e) {
    e((function(e) {
      var r, s, a, u, l;
      if ("error" !== e.level || !t.__loaded) return e;
      e.tags || (e.tags = {});
      var c = t.requestRouter.endpointFor("ui", "/person/" + t.get_distinct_id());
      e.tags["PostHog Person URL"] = c, t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = t.get_session_replay_url({
        withTimestamp: !0
      }));
      var d = (null === (r = e.exception) || void 0 === r ? void 0 : r.values) || [], f = {
        $exception_message: null === (s = d[0]) || void 0 === s ? void 0 : s.value,
        $exception_type: null === (a = d[0]) || void 0 === a ? void 0 : a.type,
        $exception_personURL: c,
        $sentry_event_id: e.event_id,
        $sentry_exception: e.exception,
        $sentry_exception_message: null === (u = d[0]) || void 0 === u ? void 0 : u.value,
        $sentry_exception_type: null === (l = d[0]) || void 0 === l ? void 0 : l.type,
        $sentry_tags: e.tags
      };
      return n && i && (f.$sentry_url = (o || "https://sentry.io/organizations/") + n + "/issues/?project=" + i + "&query=" + e.event_id), 
      t.capture("$exception", f), e;
    }));
  };
})), li = function() {
  function e(t) {
    var n = this;
    r(this, e), s(this, "_hasSeenPageView", !1), s(this, "_updateScrollData", (function() {
      var e, t, r, i;
      n._pageViewData || (n._pageViewData = n._createPageViewData());
      var o = n._pageViewData, s = n._scrollY(), a = n._scrollHeight(), u = n._contentY(), l = n._contentHeight();
      o.lastScrollY = s, o.maxScrollY = Math.max(s, null !== (e = o.maxScrollY) && void 0 !== e ? e : 0), 
      o.maxScrollHeight = Math.max(a, null !== (t = o.maxScrollHeight) && void 0 !== t ? t : 0), 
      o.lastContentY = u, o.maxContentY = Math.max(u, null !== (r = o.maxContentY) && void 0 !== r ? r : 0), 
      o.maxContentHeight = Math.max(l, null !== (i = o.maxContentHeight) && void 0 !== i ? i : 0);
    })), this._instance = t;
  }
  return o(e, [ {
    key: "_createPageViewData",
    value: function() {
      var e;
      return {
        pathname: null !== (e = null == A ? void 0 : A.location.pathname) && void 0 !== e ? e : ""
      };
    }
  }, {
    key: "doPageView",
    value: function() {
      var e, n;
      return this._hasSeenPageView ? (n = this._pageViewData, this._pageViewData = this._createPageViewData()) : (this._hasSeenPageView = !0, 
      n = void 0, this._pageViewData || (this._pageViewData = this._createPageViewData())), 
      setTimeout(this._updateScrollData, 0), t({
        $prev_pageview_pathname: null === (e = n) || void 0 === e ? void 0 : e.pathname
      }, this._calculatePrevPageScrollProperties(n));
    }
  }, {
    key: "doPageLeave",
    value: function() {
      var e = this._pageViewData;
      return t({
        $prev_pageview_pathname: null == e ? void 0 : e.pathname
      }, this._calculatePrevPageScrollProperties(e));
    }
  }, {
    key: "_calculatePrevPageScrollProperties",
    value: function(e) {
      if (!e || null == e.maxScrollHeight || null == e.lastScrollY || null == e.maxScrollY || null == e.maxContentHeight || null == e.lastContentY || null == e.maxContentY) return {};
      var t = e.maxScrollHeight, n = e.lastScrollY, r = e.maxScrollY, i = e.maxContentHeight, o = e.lastContentY, s = e.maxContentY;
      return t = Math.ceil(t), n = Math.ceil(n), r = Math.ceil(r), i = Math.ceil(i), o = Math.ceil(o), 
      s = Math.ceil(s), {
        $prev_pageview_last_scroll: n,
        $prev_pageview_last_scroll_percentage: t <= 1 ? 1 : ci(n / t, 0, 1),
        $prev_pageview_max_scroll: r,
        $prev_pageview_max_scroll_percentage: t <= 1 ? 1 : ci(r / t, 0, 1),
        $prev_pageview_last_content: o,
        $prev_pageview_last_content_percentage: i <= 1 ? 1 : ci(o / i, 0, 1),
        $prev_pageview_max_content: s,
        $prev_pageview_max_content_percentage: i <= 1 ? 1 : ci(s / i, 0, 1)
      };
    }
  }, {
    key: "startMeasuringScrollPosition",
    value: function() {
      null == A || A.addEventListener("scroll", this._updateScrollData, !0), null == A || A.addEventListener("scrollend", this._updateScrollData, !0), 
      null == A || A.addEventListener("resize", this._updateScrollData);
    }
  }, {
    key: "stopMeasuringScrollPosition",
    value: function() {
      null == A || A.removeEventListener("scroll", this._updateScrollData), null == A || A.removeEventListener("scrollend", this._updateScrollData), 
      null == A || A.removeEventListener("resize", this._updateScrollData);
    }
  }, {
    key: "_scrollElement",
    value: function() {
      if (!this._instance.config.scroll_root_selector) return null == A ? void 0 : A.document.documentElement;
      var e, t = v(S(this._instance.config.scroll_root_selector) ? this._instance.config.scroll_root_selector : [ this._instance.config.scroll_root_selector ]);
      try {
        for (t.s(); !(e = t.n()).done; ) {
          var n = e.value, r = null == A ? void 0 : A.document.querySelector(n);
          if (r) return r;
        }
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
    }
  }, {
    key: "_scrollHeight",
    value: function() {
      var e = this._scrollElement();
      return e ? Math.max(0, e.scrollHeight - e.clientHeight) : 0;
    }
  }, {
    key: "_scrollY",
    value: function() {
      if (this._instance.config.scroll_root_selector) {
        var e = this._scrollElement();
        return e && e.scrollTop || 0;
      }
      return A && (A.scrollY || A.pageYOffset || A.document.documentElement.scrollTop) || 0;
    }
  }, {
    key: "_contentHeight",
    value: function() {
      var e = this._scrollElement();
      return (null == e ? void 0 : e.scrollHeight) || 0;
    }
  }, {
    key: "_contentY",
    value: function() {
      var e = this._scrollElement(), t = (null == e ? void 0 : e.clientHeight) || 0;
      return this._scrollY() + t;
    }
  } ]), e;
}();

function ci(e, t, n) {
  return Math.max(t, Math.min(e, n));
}

var di, fi, hi, pi = {
  icontains: function(e) {
    return !!A && A.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1;
  },
  regex: function(e) {
    return !!A && Ct(A.location.href, e);
  },
  exact: function(e) {
    return (null == A ? void 0 : A.location.href) === e;
  }
}, _i = function() {
  function e(t) {
    r(this, e), this.instance = t;
  }
  return o(e, [ {
    key: "getSurveys",
    value: function(e) {
      var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = this.instance.get_property(We);
      if (r && !n) return e(r);
      this.instance._send_request(this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)), {}, {
        method: "GET"
      }, (function(n) {
        var r, i = n.surveys || [];
        return null === (r = t.instance.persistence) || void 0 === r || r.register(s({}, We, i)), 
        e(i);
      }));
    }
  }, {
    key: "getActiveMatchingSurveys",
    value: function(e) {
      var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.getSurveys((function(n) {
        var r = n.filter((function(e) {
          return !(!e.start_date || e.end_date);
        })).filter((function(e) {
          var t, n, r, i;
          if (!e.conditions) return !0;
          var o = null === (t = e.conditions) || void 0 === t || !t.url || pi[null !== (n = null === (r = e.conditions) || void 0 === r ? void 0 : r.urlMatchType) && void 0 !== n ? n : "icontains"](e.conditions.url), s = null === (i = e.conditions) || void 0 === i || !i.selector || (null == B ? void 0 : B.querySelector(e.conditions.selector));
          return o && s;
        })).filter((function(e) {
          if (!e.linked_flag_key && !e.targeting_flag_key) return !0;
          var n = !e.linked_flag_key || t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key), r = !e.targeting_flag_key || t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key);
          return n && r;
        }));
        return e(r);
      }), n);
    }
  } ]), e;
}(), gi = function() {
  function e() {
    var t = this;
    r(this, e), s(this, "limits", {}), s(this, "checkForLimiting", (function(e) {
      var n = e.responseText;
      if (n && n.length) try {
        (JSON.parse(n).quota_limited || []).forEach((function(e) {
          G.info("[RateLimiter] ".concat(e || "events", " is quota limited.")), t.limits[e] = (new Date).getTime() + 6e4;
        }));
      } catch (e) {
        return void G.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
          text: n
        });
      }
    }));
  }
  return o(e, [ {
    key: "isRateLimited",
    value: function(e) {
      var t = this.limits[e || "events"] || !1;
      return !1 !== t && (new Date).getTime() < t;
    }
  } ]), e;
}(), vi = function() {
  return t({
    initialPathName: (null == j ? void 0 : j.pathname) || "",
    referringDomain: Tn.referringDomain()
  }, Tn.campaignParams());
}, mi = function() {
  function e(t, n, i) {
    var o = this;
    r(this, e), s(this, "_onSessionIdCallback", (function(e) {
      var t = o._getStoredProps();
      if (!t || t.sessionId !== e) {
        var n = {
          sessionId: e,
          props: o._sessionSourceParamGenerator()
        };
        o._persistence.register(s({}, Ye, n));
      }
    })), this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = i || vi, 
    this._sessionIdManager.onSessionId(this._onSessionIdCallback);
  }
  return o(e, [ {
    key: "_getStoredProps",
    value: function() {
      return this._persistence.props[Ye];
    }
  }, {
    key: "getSessionProps",
    value: function() {
      var e, t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props;
      return t ? {
        $client_session_initial_referring_host: t.referringDomain,
        $client_session_initial_pathname: t.initialPathName,
        $client_session_initial_utm_source: t.utm_source,
        $client_session_initial_utm_campaign: t.utm_campaign,
        $client_session_initial_utm_medium: t.utm_medium,
        $client_session_initial_utm_content: t.utm_content,
        $client_session_initial_utm_term: t.utm_term
      } : {};
    }
  } ]), e;
}(), yi = [ "ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google" ], bi = function(e, t) {
  if (!e) return !1;
  var n = e.toLowerCase();
  return yi.concat(t || []).some((function(e) {
    var t = e.toLowerCase();
    return n.includes ? n.includes(t) : -1 !== n.indexOf(t);
  }));
};

!function(e) {
  e[e.INIT_MODULE = 0] = "INIT_MODULE", e[e.INIT_SNIPPET = 1] = "INIT_SNIPPET";
}(di || (di = {}));

var wi = function() {}, ki = {}, Si = "posthog", Fi = !Et && -1 === (null == V ? void 0 : V.indexOf("MSIE")) && -1 === (null == V ? void 0 : V.indexOf("Mozilla")), Ri = function() {
  var e, t, n;
  return {
    api_host: "https://app.posthog.com",
    api_method: "POST",
    api_transport: "XHR",
    ui_host: null,
    token: "",
    autocapture: !0,
    rageclick: !0,
    cross_subdomain_cookie: (t = null == B ? void 0 : B.location, n = null == t ? void 0 : t.hostname, 
    !!E(n) && "herokuapp.com" !== n.split(".").slice(-2).join(".")),
    persistence: "localStorage+cookie",
    persistence_name: "",
    cookie_name: "",
    loaded: wi,
    store_google: !0,
    custom_campaign_params: [],
    custom_blocked_useragents: [],
    save_referrer: !0,
    capture_pageview: !0,
    capture_pageleave: !0,
    debug: !1,
    verbose: !1,
    cookie_expiration: 365,
    upgrade: !1,
    disable_session_recording: !1,
    disable_persistence: !1,
    disable_cookie: !1,
    enable_recording_console_log: void 0,
    secure_cookie: "https:" === (null == A || null === (e = A.location) || void 0 === e ? void 0 : e.protocol),
    ip: !0,
    opt_out_capturing_by_default: !1,
    opt_out_persistence_by_default: !1,
    opt_out_useragent_filter: !1,
    opt_out_capturing_persistence_type: "localStorage",
    opt_out_capturing_cookie_prefix: null,
    opt_in_site_apps: !1,
    property_blacklist: [],
    property_denylist: [],
    respect_dnt: !1,
    sanitize_properties: null,
    request_headers: {},
    inapp_protocol: "//",
    inapp_link_new_window: !1,
    request_batching: !0,
    properties_string_max_length: 65535,
    session_recording: {},
    mask_all_element_attributes: !1,
    mask_all_text: !1,
    advanced_disable_decide: !1,
    advanced_disable_feature_flags: !1,
    advanced_disable_feature_flags_on_first_load: !1,
    advanced_disable_toolbar_metrics: !1,
    on_request_error: function(e) {
      var t = "Bad HTTP status: " + e.statusCode + " " + e.responseText;
      G.error(t);
    },
    get_device_id: function(e) {
      return e;
    },
    _onCapture: wi,
    capture_performance: void 0,
    name: "posthog",
    callback_fn: "posthog._jsc",
    bootstrap: {},
    disable_compression: !1,
    session_idle_timeout_seconds: 1800
  };
}, Pi = function(e, t, n, r) {
  var i, o = n !== Si && hi ? n ? hi[n] : void 0 : hi, s = {
    initComplete: !1,
    syncCode: !1
  }, a = function(e) {
    return function(t) {
      s[e] || (s[e] = !0, s.initComplete && s.syncCode && (null == r || r(t)));
    };
  };
  if (o && fi === di.INIT_MODULE) i = o; else {
    if (o && !S(o)) return void G.error("You have already initialized " + n);
    i = new Ei;
  }
  if (i._init(e, t, n, a("initComplete")), i.toolbar.maybeLoadToolbar(), i.sessionRecording = new sr(i), 
  i.sessionRecording.startRecordingIfEnabled(), i.config.disable_scroll_properties || i.pageViewManager.startMeasuringScrollPosition(), 
  i.__autocapture = i.config.autocapture, Ze._setIsAutocaptureEnabled(i), Ze._isAutocaptureEnabled) {
    i.__autocapture = i.config.autocapture;
    Ze.enabledForProject(i.config.token, 100, 100) ? Ze.isBrowserSupported() ? Ze.init(i) : (i.__autocapture = !1, 
    G.info("Disabling Automatic Event Collection because this browser is not supported")) : (i.__autocapture = !1, 
    G.info("Not in active bucket: disabling Automatic Event Collection."));
  }
  return m.DEBUG = m.DEBUG || i.config.debug, !x(o) && S(o) && (i._execute_array.call(i.people, o.people), 
  i._execute_array(o)), a("syncCode")(i), i;
}, xi = function() {
  function e() {
    r(this, e), s(this, "__forceAllowLocalhost", !1);
  }
  return o(e, [ {
    key: "_forceAllowLocalhost",
    get: function() {
      return this.__forceAllowLocalhost;
    },
    set: function(e) {
      G.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), 
      this.__forceAllowLocalhost = e;
    }
  } ]), e;
}(), Ei = function() {
  function e() {
    var t = this;
    r(this, e), s(this, "webPerformance", new xi), this.config = Ri(), this.compression = {}, 
    this.decideEndpointWasHit = !1, this.SentryIntegration = ui, this.segmentIntegration = function() {
      return function(e) {
        Promise && Promise.resolve || G.warn("This browser does not have Promise support, and can not use the segment integration");
        var t = function(t, n) {
          t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(), t.event.userId && t.event.userId !== e.get_distinct_id() && (e.register({
            distinct_id: t.event.userId
          }), e.reloadFeatureFlags());
          var r = e._calculate_event_properties(n, t.event.properties);
          return t.event.properties = Object.assign({}, r, t.event.properties), t;
        };
        return {
          name: "PostHog JS",
          type: "enrichment",
          version: "1.0.0",
          isLoaded: function() {
            return !0;
          },
          load: function() {
            return Promise.resolve();
          },
          track: function(e) {
            return t(e, e.event.event);
          },
          page: function(e) {
            return t(e, "$pageview");
          },
          identify: function(e) {
            return t(e, "$identify");
          },
          screen: function(e) {
            return t(e, "$screen");
          }
        };
      }(t);
    }, this.__captureHooks = [], this.__request_queue = [], this.__loaded = !1, this.__loaded_recorder_version = void 0, 
    this.__autocapture = void 0, this._jsc = function() {}, this.analyticsDefaultEndpoint = "/e/", 
    this.elementsChainAsString = !1, this.featureFlags = new it(this), this.toolbar = new cr(this), 
    this.pageViewManager = new li(this), this.surveys = new _i(this), this.rateLimiter = new gi, 
    this.requestRouter = new ai(this), this.people = {
      set: function(e, n, r) {
        var i = E(e) ? s({}, e, n) : e;
        t.setPersonProperties(i), null == r || r({});
      },
      set_once: function(e, n, r) {
        var i = E(e) ? s({}, e, n) : e;
        t.setPersonProperties(void 0, i), null == r || r({});
      }
    };
  }
  return o(e, [ {
    key: "init",
    value: function(e, t, n) {
      if (x(n)) G.critical("You must name your new library: init(token, config, name)"); else if (x(e) || function(e) {
        return E(e) && 0 === e.trim().length;
      }(e)) G.critical("You must provide a token to initialize posthog"); else {
        if (n !== Si) {
          var r = Pi(e, t, n, (function(e) {
            hi[n] = e, e._loaded();
          }));
          return hi[n] = r, r;
        }
        G.critical("You must initialize the main posthog object right after you include the PostHog js snippet");
      }
    }
  }, {
    key: "_init",
    value: function(e) {
      var n, r, i, o = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0, u = arguments.length > 3 ? arguments[3] : void 0;
      this.__loaded = !0, this.config = {}, this._triggered_notifs = [];
      var l, c = {
        segmentRegister: !1,
        syncCode: !1
      }, d = function(e) {
        return function() {
          c[e] || (c[e] = !0, c.segmentRegister && c.syncCode && (null == u || u(o)));
        };
      };
      (s.request_headers = s.request_headers || s.xhr_headers, this.set_config(X({}, Ri(), s, {
        name: a,
        token: e,
        callback_fn: (a === Si ? a : Si + "." + a) + "._jsc"
      })), this._jsc = function() {}, null != A && null !== (n = A.rrweb) && void 0 !== n && n.record || null != A && A.rrwebRecord) && (this.__loaded_recorder_version = null == A || null === (l = A.rrweb) || void 0 === l ? void 0 : l.version);
      if (this.persistence = new On(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new On(t(t({}, this.config), {}, {
        persistence: "sessionStorage"
      })), this._requestQueue = new fr(this._handle_queued_event.bind(this)), this._retryQueue = new ii(this.config.on_request_error, this.rateLimiter), 
      this.__captureHooks = [], this.__request_queue = [], this.sessionManager = new si(this.config, this.persistence), 
      this.sessionPropsManager = new mi(this.sessionManager, this.persistence), this._gdpr_init(), 
      s.segment ? (this.config.get_device_id = function() {
        return s.segment.user().anonymousId();
      }, s.segment.user().id() && (this.register({
        distinct_id: s.segment.user().id()
      }), this.persistence.set_user_state("identified")), s.segment.register(this.segmentIntegration()).then(d("segmentRegister"))) : d("segmentRegister")(), 
      void 0 !== (null === (r = s.bootstrap) || void 0 === r ? void 0 : r.distinctID)) {
        var f, h, p = this.config.get_device_id(dt()), _ = null !== (f = s.bootstrap) && void 0 !== f && f.isIdentifiedID ? p : s.bootstrap.distinctID;
        this.persistence.set_user_state(null !== (h = s.bootstrap) && void 0 !== h && h.isIdentifiedID ? "identified" : "anonymous"), 
        this.register({
          distinct_id: s.bootstrap.distinctID,
          $device_id: _
        });
      }
      if (this._hasBootstrappedFeatureFlags()) {
        var g, v, m = Object.keys((null === (g = s.bootstrap) || void 0 === g ? void 0 : g.featureFlags) || {}).filter((function(e) {
          var t, n;
          return !(null === (t = s.bootstrap) || void 0 === t || null === (n = t.featureFlags) || void 0 === n || !n[e]);
        })).reduce((function(e, t) {
          var n, r;
          return e[t] = (null === (n = s.bootstrap) || void 0 === n || null === (r = n.featureFlags) || void 0 === r ? void 0 : r[t]) || !1, 
          e;
        }), {}), y = Object.keys((null === (v = s.bootstrap) || void 0 === v ? void 0 : v.featureFlagPayloads) || {}).filter((function(e) {
          return m[e];
        })).reduce((function(e, t) {
          var n, r, i, o;
          null !== (n = s.bootstrap) && void 0 !== n && null !== (r = n.featureFlagPayloads) && void 0 !== r && r[t] && (e[t] = null === (i = s.bootstrap) || void 0 === i || null === (o = i.featureFlagPayloads) || void 0 === o ? void 0 : o[t]);
          return e;
        }), {});
        this.featureFlags.receivedFeatureFlags({
          featureFlags: m,
          featureFlagPayloads: y
        });
      }
      if (!this.get_distinct_id()) {
        var b = this.config.get_device_id(dt());
        this.register_once({
          distinct_id: b,
          $device_id: b
        }, ""), this.persistence.set_user_state("anonymous");
      }
      null == A || null === (i = A.addEventListener) || void 0 === i || i.call(A, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), 
      d("syncCode")();
    }
  }, {
    key: "_afterDecideResponse",
    value: function(e) {
      var t;
      if (this.compression = {}, e.supportedCompression && !this.config.disable_compression) {
        var n, r = {}, i = v(e.supportedCompression);
        try {
          for (i.s(); !(n = i.n()).done; ) {
            r[n.value] = !0;
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        this.compression = r;
      }
      null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), 
      e.elementsChainAsString && (this.elementsChainAsString = e.elementsChainAsString);
    }
  }, {
    key: "_loaded",
    value: function() {
      var e = this.config.advanced_disable_decide;
      e || this.featureFlags.setReloadingPaused(!0);
      try {
        this.config.loaded(this);
      } catch (e) {
        G.critical("`loaded` function failed", e);
      }
      this._start_queue_if_opted_in(), this.config.capture_pageview && B && this.capture("$pageview", {
        title: B.title
      }, {
        send_instantly: !0
      }), e || (new ar(this).call(), this.featureFlags.resetRequestQueue());
    }
  }, {
    key: "_start_queue_if_opted_in",
    value: function() {
      var e;
      this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.poll());
    }
  }, {
    key: "_dom_loaded",
    value: function() {
      var e = this;
      this.has_opted_out_capturing() || J(this.__request_queue, (function(t) {
        e._send_request.apply(e, p(t));
      })), this.__request_queue = [], this._start_queue_if_opted_in();
    }
  }, {
    key: "_prepare_callback",
    value: function(e, t) {
      if (x(e)) return null;
      if (Et) return function(n) {
        e(n, t);
      };
      var n = this._jsc, r = "" + Math.floor(1e8 * Math.random()), i = this.config.callback_fn + "[" + r + "]";
      return n[r] = function(i) {
        delete n[r], e(i, t);
      }, i;
    }
  }, {
    key: "_handle_unload",
    value: function() {
      var e, t;
      this.config.request_batching ? (this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave"), 
      null === (e = this._requestQueue) || void 0 === e || e.unload(), null === (t = this._retryQueue) || void 0 === t || t.unload()) : this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave", null, {
        transport: "sendBeacon"
      });
    }
  }, {
    key: "_handle_queued_event",
    value: function(e, t, n) {
      var r = JSON.stringify(t);
      this.__compress_and_send_json_request(e, r, n || ki, wi);
    }
  }, {
    key: "__compress_and_send_json_request",
    value: function(e, n, r, i) {
      var o = function(e, n, r) {
        return e === Cr.GZipJS ? [ Kr(Xr(n), {
          mtime: 0
        }), t(t({}, r), {}, {
          blob: !0,
          urlQueryArgs: {
            compression: Cr.GZipJS
          }
        }) ] : [ {
          data: se(n)
        }, r ];
      }(this.compression[Cr.GZipJS] ? Cr.GZipJS : Cr.Base64, n, r), s = h(o, 2), a = s[0], u = s[1];
      this._send_request(e, a, u, i);
    }
  }, {
    key: "_send_request",
    value: function(e, n, r, i) {
      if (this.__loaded && this._retryQueue && !this.rateLimiter.isRateLimited(r._batchKey)) if (Fi) this.__request_queue.push([ e, n, r, i ]); else {
        var o = {
          method: this.config.api_method,
          transport: this.config.api_transport,
          verbose: this.config.verbose
        };
        r = X(o, r || {}), Et || (r.method = "GET");
        var s = A && "sendBeacon" in A.navigator && "sendBeacon" === r.transport;
        if (e = Zr(e, r.urlQueryArgs || {}, {
          ip: this.config.ip
        }), s) try {
          null == A || A.navigator.sendBeacon(e, ei(n, t(t({}, r), {}, {
            sendBeacon: !0
          })));
        } catch (e) {} else if (Et || !B) try {
          ti({
            url: e,
            data: n,
            headers: this.config.request_headers,
            options: r,
            callback: i,
            retriesPerformedSoFar: 0,
            retryQueue: this._retryQueue,
            onError: this.config.on_request_error,
            onResponse: this.rateLimiter.checkForLimiting
          });
        } catch (e) {
          G.error(e);
        } else {
          var a, u = B.createElement("script");
          u.type = "text/javascript", u.async = !0, u.defer = !0, u.src = e;
          var l = B.getElementsByTagName("script")[0];
          null === (a = l.parentNode) || void 0 === a || a.insertBefore(u, l);
        }
      }
    }
  }, {
    key: "_execute_array",
    value: function(e) {
      var t, n = this, r = [], i = [], o = [];
      J(e, (function(e) {
        e && (t = e[0], S(t) ? o.push(e) : R(e) ? e.call(n) : S(e) && "alias" === t ? r.push(e) : S(e) && -1 !== t.indexOf("capture") && R(n[t]) ? o.push(e) : i.push(e));
      }));
      var s = function(e, t) {
        J(e, (function(e) {
          if (S(e[0])) {
            var n = t;
            K(e, (function(e) {
              n = n[e[0]].apply(n, e.slice(1));
            }));
          } else this[e[0]].apply(this, e.slice(1));
        }), t);
      };
      s(r, this), s(i, this), s(o, this);
    }
  }, {
    key: "_hasBootstrappedFeatureFlags",
    value: function() {
      var e, t;
      return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1;
    }
  }, {
    key: "push",
    value: function(e) {
      this._execute_array([ e ]);
    }
  }, {
    key: "capture",
    value: function(e, n) {
      var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ki;
      if (!this.__loaded || !this.sessionPersistence || !this._requestQueue) return G.uninitializedWarning("posthog.capture");
      if (!Zn(this)) {
        var o = (i = i || ki).transport;
        if (o && (i.transport = o), !x(e) && E(e)) {
          if (!V || this.config.opt_out_useragent_filter || !bi(V, this.config.custom_blocked_useragents)) {
            this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), 
            this.config.save_referrer && this.sessionPersistence.update_referrer_info();
            var s = {
              uuid: dt(),
              event: e,
              properties: this._calculate_event_properties(e, n || {})
            };
            "$identify" === e && (s.$set = i.$set, s.$set_once = i.$set_once), (s = oe(s, i._noTruncate ? null : this.config.properties_string_max_length)).timestamp = i.timestamp || new Date, 
            x(i.timestamp) || (s.properties.$event_time_override_provided = !0, s.properties.$event_time_override_system_time = new Date);
            var a = t(t({}, s.properties.$set), s.$set);
            (function(e) {
              if (P(e)) {
                for (var t in e) if (w.call(e, t)) return !1;
                return !0;
              }
              return !1;
            })(a) || this.setPersonPropertiesForFlags(a), G.info("send", s);
            var u = JSON.stringify(s), l = null !== (r = i._url) && void 0 !== r ? r : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), c = i !== ki;
            return !this.config.request_batching || c && !i._batchKey || i.send_instantly ? this.__compress_and_send_json_request(l, u, i) : this._requestQueue.enqueue(l, s, i), 
            this._invokeCaptureHooks(e, s), s;
          }
        } else G.error("No event name provided to posthog.capture");
      }
    }
  }, {
    key: "_addCaptureHook",
    value: function(e) {
      this.__captureHooks.push(e);
    }
  }, {
    key: "_invokeCaptureHooks",
    value: function(e, t) {
      this.config._onCapture(e, t), K(this.__captureHooks, (function(t) {
        return t(e);
      }));
    }
  }, {
    key: "_calculate_event_properties",
    value: function(e, n) {
      if (!this.persistence || !this.sessionPersistence) return n;
      var r = this.persistence.remove_event_timer(e), i = t({}, n);
      if (i.token = this.config.token, "$snapshot" === e) {
        var o = t(t({}, this.persistence.properties()), this.sessionPersistence.properties());
        return i.distinct_id = o.distinct_id, i;
      }
      var s = Tn.properties();
      if (this.sessionManager) {
        var a = this.sessionManager.checkAndGetSessionAndWindowId(), u = a.sessionId, l = a.windowId;
        i.$session_id = u, i.$window_id = l;
      }
      if (this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e || "$pageleave" === e || "$autocapture" === e)) {
        var c = this.sessionPropsManager.getSessionProps();
        i = X(i, c);
      }
      if (!this.config.disable_scroll_properties) {
        var d = {};
        "$pageview" === e ? d = this.pageViewManager.doPageView() : "$pageleave" === e && (d = this.pageViewManager.doPageLeave()), 
        i = X(i, d);
      }
      if ("$pageview" === e && B && (i.title = B.title), "$performance_event" === e) {
        var f = this.persistence.properties();
        return i.distinct_id = f.distinct_id, i.$current_url = s.$current_url, i;
      }
      if (!x(r)) {
        var h = (new Date).getTime() - r;
        i.$duration = parseFloat((h / 1e3).toFixed(3));
      }
      (V && this.config.opt_out_useragent_filter && (i.$browser_type = bi(V, this.config.custom_blocked_useragents) ? "bot" : "browser"), 
      i = X({}, Tn.properties(), this.persistence.properties(), this.sessionPersistence.properties(), i), 
      S(this.config.property_denylist) && S(this.config.property_blacklist)) ? K([].concat(p(this.config.property_blacklist), p(this.config.property_denylist)), (function(e) {
        delete i[e];
      })) : G.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
      var _ = this.config.sanitize_properties;
      return _ && (i = _(i, e)), i;
    }
  }, {
    key: "register",
    value: function(e, t) {
      var n;
      null === (n = this.persistence) || void 0 === n || n.register(e, t);
    }
  }, {
    key: "register_once",
    value: function(e, t, n) {
      var r;
      null === (r = this.persistence) || void 0 === r || r.register_once(e, t, n);
    }
  }, {
    key: "register_for_session",
    value: function(e) {
      var t;
      null === (t = this.sessionPersistence) || void 0 === t || t.register(e);
    }
  }, {
    key: "unregister",
    value: function(e) {
      var t;
      null === (t = this.persistence) || void 0 === t || t.unregister(e);
    }
  }, {
    key: "unregister_for_session",
    value: function(e) {
      var t;
      null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e);
    }
  }, {
    key: "_register_single",
    value: function(e, t) {
      this.register(s({}, e, t));
    }
  }, {
    key: "getFeatureFlag",
    value: function(e, t) {
      return this.featureFlags.getFeatureFlag(e, t);
    }
  }, {
    key: "getFeatureFlagPayload",
    value: function(e) {
      var t = this.featureFlags.getFeatureFlagPayload(e);
      try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    }
  }, {
    key: "isFeatureEnabled",
    value: function(e, t) {
      return this.featureFlags.isFeatureEnabled(e, t);
    }
  }, {
    key: "reloadFeatureFlags",
    value: function() {
      this.featureFlags.reloadFeatureFlags();
    }
  }, {
    key: "updateEarlyAccessFeatureEnrollment",
    value: function(e, t) {
      this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t);
    }
  }, {
    key: "getEarlyAccessFeatures",
    value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return this.featureFlags.getEarlyAccessFeatures(e, t);
    }
  }, {
    key: "onFeatureFlags",
    value: function(e) {
      return this.featureFlags.onFeatureFlags(e);
    }
  }, {
    key: "onSessionId",
    value: function(e) {
      var t, n;
      return null !== (t = null === (n = this.sessionManager) || void 0 === n ? void 0 : n.onSessionId(e)) && void 0 !== t ? t : function() {};
    }
  }, {
    key: "getSurveys",
    value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.surveys.getSurveys(e, t);
    }
  }, {
    key: "getActiveMatchingSurveys",
    value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.surveys.getActiveMatchingSurveys(e, t);
    }
  }, {
    key: "identify",
    value: function(e, t, n) {
      if (!this.__loaded || !this.persistence) return G.uninitializedWarning("posthog.identify");
      if (T(e) && (e = e.toString(), G.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), 
      e) if ([ "distinct_id", "distinctid" ].includes(e.toLowerCase())) G.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')); else {
        var r = this.get_distinct_id();
        if (this.register({
          $user_id: e
        }), !this.get_property("$device_id")) {
          var i = r;
          this.register_once({
            $had_persisted_distinct_id: !0,
            $device_id: i
          }, "");
        }
        e !== r && e !== this.get_property(Te) && (this.unregister(Te), this.register({
          distinct_id: e
        }));
        var o = "anonymous" === this.persistence.get_user_state();
        e !== r && o ? (this.persistence.set_user_state("identified"), this.setPersonPropertiesForFlags(t || {}, !1), 
        this.capture("$identify", {
          distinct_id: e,
          $anon_distinct_id: r
        }, {
          $set: t || {},
          $set_once: n || {}
        }), this.featureFlags.setAnonymousDistinctId(r)) : (t || n) && this.setPersonProperties(t, n), 
        e !== r && (this.reloadFeatureFlags(), this.unregister(ze));
      } else G.error("Unique user id has not been set in posthog.identify");
    }
  }, {
    key: "setPersonProperties",
    value: function(e, t) {
      (e || t) && (this.setPersonPropertiesForFlags(e || {}), this.capture("$set", {
        $set: e || {},
        $set_once: t || {}
      }));
    }
  }, {
    key: "group",
    value: function(e, n, r) {
      if (e && n) {
        var i = this.getGroups();
        i[e] !== n && this.resetGroupPropertiesForFlags(e), this.register({
          $groups: t(t({}, i), {}, s({}, e, n))
        }), r && (this.capture("$groupidentify", {
          $group_type: e,
          $group_key: n,
          $group_set: r
        }), this.setGroupPropertiesForFlags(s({}, e, r))), i[e] === n || r || this.reloadFeatureFlags();
      } else G.error("posthog.group requires a group type and group key");
    }
  }, {
    key: "resetGroups",
    value: function() {
      this.register({
        $groups: {}
      }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
    }
  }, {
    key: "setPersonPropertiesForFlags",
    value: function(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.featureFlags.setPersonPropertiesForFlags(e, t);
    }
  }, {
    key: "resetPersonPropertiesForFlags",
    value: function() {
      this.featureFlags.resetPersonPropertiesForFlags();
    }
  }, {
    key: "setGroupPropertiesForFlags",
    value: function(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.featureFlags.setGroupPropertiesForFlags(e, t);
    }
  }, {
    key: "resetGroupPropertiesForFlags",
    value: function(e) {
      this.featureFlags.resetGroupPropertiesForFlags(e);
    }
  }, {
    key: "reset",
    value: function(e) {
      var t, n, r, i;
      if (!this.__loaded) return G.uninitializedWarning("posthog.reset");
      var o = this.get_property("$device_id");
      null === (t = this.persistence) || void 0 === t || t.clear(), null === (n = this.sessionPersistence) || void 0 === n || n.clear(), 
      null === (r = this.persistence) || void 0 === r || r.set_user_state("anonymous"), 
      null === (i = this.sessionManager) || void 0 === i || i.resetSessionId();
      var s = this.config.get_device_id(dt());
      this.register_once({
        distinct_id: s,
        $device_id: e ? s : o
      }, "");
    }
  }, {
    key: "get_distinct_id",
    value: function() {
      return this.get_property("distinct_id");
    }
  }, {
    key: "getGroups",
    value: function() {
      return this.get_property("$groups") || {};
    }
  }, {
    key: "get_session_id",
    value: function() {
      var e, t;
      return null !== (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e ? e : "";
    }
  }, {
    key: "get_session_replay_url",
    value: function(e) {
      if (!this.sessionManager) return "";
      var t = this.sessionManager.checkAndGetSessionAndWindowId(!0), n = t.sessionId, r = t.sessionStartTimestamp, i = this.requestRouter.endpointFor("ui", "/replay/" + n);
      if (null != e && e.withTimestamp && r) {
        var o, s = null !== (o = e.timestampLookBack) && void 0 !== o ? o : 10;
        if (!r) return i;
        var a = Math.max(Math.floor(((new Date).getTime() - r) / 1e3) - s, 0);
        i += "?t=".concat(a);
      }
      return i;
    }
  }, {
    key: "alias",
    value: function(e, t) {
      return e === this.get_property(Ce) ? (G.critical("Attempting to create alias for existing People user - aborting."), 
      -2) : (x(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(Te, e), 
      this.capture("$create_alias", {
        alias: e,
        distinct_id: t
      })) : (G.warn("alias matches current distinct_id - skipping api call."), this.identify(e), 
      -1));
    }
  }, {
    key: "set_config",
    value: function(e) {
      var n, r = t({}, this.config);
      if (P(e) && (X(this.config, e), this.config.persistence_name || (this.config.persistence_name = this.config.cookie_name), 
      this.config.disable_persistence || (this.config.disable_persistence = this.config.disable_cookie), 
      null === (n = this.persistence) || void 0 === n || n.update_config(this.config, r), 
      this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new On(t(t({}, this.config), {}, {
        persistence: "sessionStorage"
      })), bt.is_supported() && "true" === bt.get("ph_debug") && (this.config.debug = !0), 
      this.config.debug && (m.DEBUG = !0), this.sessionRecording && !x(e.disable_session_recording))) {
        var i = r.disable_session_recording !== e.disable_session_recording, o = !Zn(this) && !e.disable_session_recording && !this.sessionRecording.started;
        (i || o) && (e.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled());
      }
    }
  }, {
    key: "startSessionRecording",
    value: function() {
      this.set_config({
        disable_session_recording: !1
      });
    }
  }, {
    key: "stopSessionRecording",
    value: function() {
      this.set_config({
        disable_session_recording: !0
      });
    }
  }, {
    key: "sessionRecordingStarted",
    value: function() {
      var e;
      return !(null === (e = this.sessionRecording) || void 0 === e || !e.started);
    }
  }, {
    key: "loadToolbar",
    value: function(e) {
      return this.toolbar.loadToolbar(e);
    }
  }, {
    key: "get_property",
    value: function(e) {
      var t;
      return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e];
    }
  }, {
    key: "getSessionProperty",
    value: function(e) {
      var t;
      return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e];
    }
  }, {
    key: "toString",
    value: function() {
      var e, t = null !== (e = this.config.name) && void 0 !== e ? e : Si;
      return t !== Si && (t = Si + "." + t), t;
    }
  }, {
    key: "_gdpr_init",
    value: function() {
      "localStorage" === this.config.opt_out_capturing_persistence_type && bt.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({
        persistence_type: "cookie"
      }) && this.opt_in_capturing({
        enable_persistence: !1
      }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({
        persistence_type: "cookie"
      }) && this.opt_out_capturing({
        clear_persistence: !1
      }), this.clear_opt_in_out_capturing({
        persistence_type: "cookie",
        enable_persistence: !1
      })), this.has_opted_out_capturing() ? this._gdpr_update_persistence({
        clear_persistence: !0
      }) : this.has_opted_in_capturing() || !this.config.opt_out_capturing_by_default && !mt.get("ph_optout") || (mt.remove("ph_optout"), 
      this.opt_out_capturing({
        clear_persistence: this.config.opt_out_persistence_by_default
      }));
    }
  }, {
    key: "_gdpr_update_persistence",
    value: function(e) {
      var t, n, r, i, o;
      if (e && e.clear_persistence) r = !0; else {
        if (!e || !e.enable_persistence) return;
        r = !1;
      }
      this.config.disable_persistence || (null === (t = this.persistence) || void 0 === t ? void 0 : t.disabled) === r || (null === (i = this.persistence) || void 0 === i || i.set_disabled(r));
      this.config.disable_persistence || (null === (n = this.sessionPersistence) || void 0 === n ? void 0 : n.disabled) === r || (null === (o = this.sessionPersistence) || void 0 === o || o.set_disabled(r));
    }
  }, {
    key: "_gdpr_call_func",
    value: function(e, t) {
      return t = X({
        capture: this.capture.bind(this),
        persistence_type: this.config.opt_out_capturing_persistence_type,
        cookie_prefix: this.config.opt_out_capturing_cookie_prefix,
        cookie_expiration: this.config.cookie_expiration,
        cross_subdomain_cookie: this.config.cross_subdomain_cookie,
        secure_cookie: this.config.secure_cookie
      }, t || {}), bt.is_supported() || "localStorage" !== t.persistence_type || (t.persistence_type = "cookie"), 
      e(this.config.token, {
        capture: t.capture,
        captureEventName: t.capture_event_name,
        captureProperties: t.capture_properties,
        persistenceType: t.persistence_type,
        persistencePrefix: t.cookie_prefix,
        cookieExpiration: t.cookie_expiration,
        crossSubdomainCookie: t.cross_subdomain_cookie,
        secureCookie: t.secure_cookie
      });
    }
  }, {
    key: "opt_in_capturing",
    value: function(e) {
      e = X({
        enable_persistence: !0
      }, e || {}), this._gdpr_call_func(Vn, e), this._gdpr_update_persistence(e);
    }
  }, {
    key: "opt_out_capturing",
    value: function(e) {
      var t = X({
        clear_persistence: !0
      }, e || {});
      this._gdpr_call_func(Wn, t), this._gdpr_update_persistence(t);
    }
  }, {
    key: "has_opted_in_capturing",
    value: function(e) {
      return this._gdpr_call_func(zn, e);
    }
  }, {
    key: "has_opted_out_capturing",
    value: function(e) {
      return this._gdpr_call_func(Gn, e);
    }
  }, {
    key: "clear_opt_in_out_capturing",
    value: function(e) {
      var t = X({
        enable_persistence: !0
      }, null != e ? e : {});
      this._gdpr_call_func(Qn, t), this._gdpr_update_persistence(t);
    }
  }, {
    key: "debug",
    value: function(e) {
      !1 === e ? (null == A || A.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), 
      this.set_config({
        debug: !1
      })) : (null == A || A.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), 
      localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
        debug: !0
      }));
    }
  } ]), e;
}();

!function(e, t) {
  for (var n = 0; n < t.length; n++) e.prototype[t[n]] = re(e.prototype[t[n]]);
}(Ei, [ "identify" ]);

var Ii, Ci, Ti = {}, $i = function() {
  hi.init = function(e, t, n) {
    if (n) return hi[n] || (hi[n] = Ti[n] = Pi(e || "", t || {}, n, (function(e) {
      hi[n] = Ti[n] = e, e._loaded();
    }))), hi[n];
    var r = hi;
    return Ti[Si] ? r = Ti[Si] : e && (r = Pi(e, t || {}, Si, (function(e) {
      Ti[Si] = e, e._loaded();
    })), Ti[Si] = r), hi = r, fi === di.INIT_SNIPPET && (W[Si] = hi), K(Ti, (function(e, t) {
      t !== Si && (hi[t] = e);
    })), r;
  };
};

!function(e) {
  e.Popover = "popover", e.API = "api", e.Widget = "widget";
}(Ii || (Ii = {})), function(e) {
  e.Open = "open", e.MultipleChoice = "multiple_choice", e.SingleChoice = "single_choice", 
  e.Rating = "rating", e.Link = "link";
}(Ci || (Ci = {}));

var Oi = (fi = di.INIT_MODULE, hi = new Ei, $i(), hi.init(), function() {
  function e() {
    e.done || (e.done = !0, Fi = !1, K(Ti, (function(e) {
      e._dom_loaded();
    })));
  }
  null != B && B.addEventListener && ("complete" === B.readyState ? e() : B.addEventListener("DOMContentLoaded", e, !1)), 
  A && ue(A, "load", e, !0);
}(), hi);

class PostHogController extends Controller {
  static values={
    apiKey: String,
    identification: Object
  };
  connect() {
    Oi.init(this.apiKeyValue, {
      api_host: "https://eu.posthog.com",
      custom_campaign_params: [ "ref" ],
      session_recording: {
        maskAllInputs: false,
        maskInputOptions: {
          password: true
        }
      }
    });
    if (Object.keys(this.identificationValue).length) {
      const {id: id, email: email, name: name} = this.identificationValue;
      Oi.identify(id.toString(), {
        email: email,
        name: name
      });
    }
  }
}

/*! shepherd.js 11.2.0 */ var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && typeof value === "object";
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}

var canUseSymbol = typeof Symbol === "function" && Symbol.for;

var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map((function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  }));
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter((function(symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  })) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}

function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}

function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach((function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    }));
  }
  getKeys(source).forEach((function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  }));
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce((function(prev, next) {
    return deepmerge(prev, next, options);
  }), {});
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

function isElement$1(value) {
  return value instanceof Element;
}

function isHTMLElement$1(value) {
  return value instanceof HTMLElement;
}

function isFunction(value) {
  return typeof value === "function";
}

function isString(value) {
  return typeof value === "string";
}

function isUndefined(value) {
  return value === undefined;
}

class Evented {
  on(event, handler, ctx, once = false) {
    if (isUndefined(this.bindings)) {
      this.bindings = {};
    }
    if (isUndefined(this.bindings[event])) {
      this.bindings[event] = [];
    }
    this.bindings[event].push({
      handler: handler,
      ctx: ctx,
      once: once
    });
    return this;
  }
  once(event, handler, ctx) {
    return this.on(event, handler, ctx, true);
  }
  off(event, handler) {
    if (isUndefined(this.bindings) || isUndefined(this.bindings[event])) {
      return this;
    }
    if (isUndefined(handler)) {
      delete this.bindings[event];
    } else {
      this.bindings[event].forEach(((binding, index) => {
        if (binding.handler === handler) {
          this.bindings[event].splice(index, 1);
        }
      }));
    }
    return this;
  }
  trigger(event, ...args) {
    if (!isUndefined(this.bindings) && this.bindings[event]) {
      this.bindings[event].forEach(((binding, index) => {
        const {ctx: ctx, handler: handler, once: once} = binding;
        const context = ctx || this;
        handler.apply(context, args);
        if (once) {
          this.bindings[event].splice(index, 1);
        }
      }));
    }
    return this;
  }
}

function autoBind(self) {
  const keys = Object.getOwnPropertyNames(self.constructor.prototype);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = self[key];
    if (key !== "constructor" && typeof val === "function") {
      self[key] = val.bind(self);
    }
  }
  return self;
}

function _setupAdvanceOnHandler(selector, step) {
  return event => {
    if (step.isOpen()) {
      const targetIsEl = step.el && event.currentTarget === step.el;
      const targetIsSelector = !isUndefined(selector) && event.currentTarget.matches(selector);
      if (targetIsSelector || targetIsEl) {
        step.tour.next();
      }
    }
  };
}

function bindAdvance(step) {
  const {event: event, selector: selector} = step.options.advanceOn || {};
  if (event) {
    const handler = _setupAdvanceOnHandler(selector, step);
    let el;
    try {
      el = document.querySelector(selector);
    } catch (e) {}
    if (!isUndefined(selector) && !el) {
      return console.error(`No element was found for the selector supplied to advanceOn: ${selector}`);
    } else if (el) {
      el.addEventListener(event, handler);
      step.on("destroy", (() => el.removeEventListener(event, handler)));
    } else {
      document.body.addEventListener(event, handler, true);
      step.on("destroy", (() => document.body.removeEventListener(event, handler, true)));
    }
  } else {
    return console.error("advanceOn was defined, but no event name was passed.");
  }
}

function normalizePrefix(prefix) {
  if (!isString(prefix) || prefix === "") {
    return "";
  }
  return prefix.charAt(prefix.length - 1) !== "-" ? `${prefix}-` : prefix;
}

function parseAttachTo(step) {
  const options = step.options.attachTo || {};
  const returnOpts = Object.assign({}, options);
  if (isFunction(returnOpts.element)) {
    returnOpts.element = returnOpts.element.call(step);
  }
  if (isString(returnOpts.element)) {
    try {
      returnOpts.element = document.querySelector(returnOpts.element);
    } catch (e) {}
    if (!returnOpts.element) {
      console.error(`The element for this Shepherd step was not found ${options.element}`);
    }
  }
  return returnOpts;
}

function shouldCenterStep(resolvedAttachToOptions) {
  if (resolvedAttachToOptions === undefined || resolvedAttachToOptions === null) {
    return true;
  }
  return !resolvedAttachToOptions.element || !resolvedAttachToOptions.on;
}

function uuid() {
  let d = Date.now();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : r & 3 | 8).toString(16);
  }));
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const min = Math.min;

const max = Math.max;

const round = Math.round;

const floor = Math.floor;

const createCoords = v => ({
  x: v,
  y: v
});

const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};

const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};

function clamp(start, value, end) {
  return max(start, min(value, end));
}

function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}

function getSide(placement) {
  return placement.split("-")[0];
}

function getAlignment(placement) {
  return placement.split("-")[1];
}

function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}

function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}

function getSideAxis(placement) {
  return [ "top", "bottom" ].includes(getSide(placement)) ? "y" : "x";
}

function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [ mainAlignmentSide, getOppositePlacement(mainAlignmentSide) ];
}

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [ getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement) ];
}

function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment => oppositeAlignmentMap[alignment]));
}

function getSideList(side, isStart, rtl) {
  const lr = [ "left", "right" ];
  const rl = [ "right", "left" ];
  const tb = [ "top", "bottom" ];
  const bt = [ "bottom", "top" ];
  switch (side) {
   case "top":
   case "bottom":
    if (rtl) return isStart ? rl : lr;
    return isStart ? lr : rl;

   case "left":
   case "right":
    return isStart ? tb : bt;

   default:
    return [];
  }
}

function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side => side + "-" + alignment));
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side => oppositeSideMap[side]));
}

function expandPaddingObject(padding) {
  return _extends({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}

function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return _extends({}, rect, {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

const _excluded2 = [ "mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment" ], _excluded4 = [ "mainAxis", "crossAxis", "limiter" ];

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {reference: reference, floating: floating} = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
   case "top":
    coords = {
      x: commonX,
      y: reference.y - floating.height
    };
    break;

   case "bottom":
    coords = {
      x: commonX,
      y: reference.y + reference.height
    };
    break;

   case "right":
    coords = {
      x: reference.x + reference.width,
      y: commonY
    };
    break;

   case "left":
    coords = {
      x: reference.x - floating.width,
      y: commonY
    };
    break;

   default:
    coords = {
      x: reference.x,
      y: reference.y
    };
  }
  switch (getAlignment(placement)) {
   case "start":
    coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
    break;

   case "end":
    coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
    break;
  }
  return coords;
}

const computePosition$1 = async (reference, floating, config) => {
  const {placement: placement = "bottom", strategy: strategy = "absolute", middleware: middleware = [], platform: platform} = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference: reference,
    floating: floating,
    strategy: strategy
  });
  let {x: x, y: y} = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {name: name, fn: fn} = validMiddleware[i];
    const {x: nextX, y: nextY, data: data, reset: reset} = await fn({
      x: x,
      y: y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy: strategy,
      middlewareData: middlewareData,
      rects: rects,
      platform: platform,
      elements: {
        reference: reference,
        floating: floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = _extends({}, middlewareData, {
      [name]: _extends({}, middlewareData[name], data)
    });
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference: reference,
            floating: floating,
            strategy: strategy
          }) : reset.rects;
        }
        ({x: x, y: y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x: x,
    y: y,
    placement: statefulPlacement,
    strategy: strategy,
    middlewareData: middlewareData
  };
};

async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {x: x, y: y, platform: platform, rects: rects, elements: elements, strategy: strategy} = state;
  const {boundary: boundary = "clippingAncestors", rootBoundary: rootBoundary = "viewport", elementContext: elementContext = "floating", altBoundary: altBoundary = false, padding: padding = 0} = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
    boundary: boundary,
    rootBoundary: rootBoundary,
    strategy: strategy
  }));
  const rect = elementContext === "floating" ? _extends({}, rects.floating, {
    x: x,
    y: y
  }) : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: rect,
    offsetParent: offsetParent,
    strategy: strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

const arrow = options => ({
  name: "arrow",
  options: options,
  async fn(state) {
    const {x: x, y: y, placement: placement, rects: rects, platform: platform, elements: elements} = state;
    const {element: element, padding: padding = 0} = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x,
      y: y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);
    const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset + alignmentOffset
      }
    };
  }
});

const flip = function flip(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options: options,
    async fn(state) {
      var _middlewareData$flip;
      const {placement: placement, middlewareData: middlewareData, rects: rects, initialPlacement: initialPlacement, platform: platform, elements: elements} = state;
      const _evaluate2 = evaluate(options, state), {mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy: fallbackStrategy = "bestFit", fallbackAxisSideDirection: fallbackAxisSideDirection = "none", flipAlignment: flipAlignment = true} = _evaluate2, detectOverflowOptions = _objectWithoutPropertiesLoose(_evaluate2, _excluded2);
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [ getOppositePlacement(initialPlacement) ] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [ initialPlacement, ...fallbackPlacements ];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [ ...overflowsData, {
        placement: placement,
        overflows: overflows
      } ];
      if (!overflows.every((side => side <= 0))) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d => d.overflows[0] <= 0)).sort(((a, b) => a.overflows[1] - b.overflows[1]))[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
           case "bestFit":
            {
              var _overflowsData$map$so;
              const placement = (_overflowsData$map$so = overflowsData.map((d => [ d.placement, d.overflows.filter((overflow => overflow > 0)).reduce(((acc, overflow) => acc + overflow), 0) ])).sort(((a, b) => a[1] - b[1]))[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement) {
                resetPlacement = placement;
              }
              break;
            }

           case "initialPlacement":
            resetPlacement = initialPlacement;
            break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

const shift = function shift(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options: options,
    async fn(state) {
      const {x: x, y: y, placement: placement} = state;
      const _evaluate4 = evaluate(options, state), {mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter: limiter = {
        fn: _ref => {
          let {x: x, y: y} = _ref;
          return {
            x: x,
            y: y
          };
        }
      }} = _evaluate4, detectOverflowOptions = _objectWithoutPropertiesLoose(_evaluate4, _excluded4);
      const coords = {
        x: x,
        y: y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn(_extends({}, state, {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      }));
      return _extends({}, limitedCoords, {
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      });
    }
  };
};

const limitShift = function limitShift(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options: options,
    fn(state) {
      const {x: x, y: y, placement: placement, rects: rects, middlewareData: middlewareData} = state;
      const {offset: offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true} = evaluate(options, state);
      const coords = {
        x: x,
        y: y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : _extends({
        mainAxis: 0,
        crossAxis: 0
      }, rawOffset);
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = [ "top", "left" ].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}

function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}

function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}

function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}

function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}

function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}

function isOverflowElement(element) {
  const {overflow: overflow, overflowX: overflowX, overflowY: overflowY, display: display} = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && ![ "inline", "contents" ].includes(display);
}

function isTableElement(element) {
  return [ "table", "td", "th" ].includes(getNodeName(element));
}

function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || [ "transform", "perspective", "filter" ].some((value => (css.willChange || "").includes(value))) || [ "paint", "layout", "strict", "content" ].some((value => (css.contain || "").includes(value)));
}

function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}

function isLastTraversableNode(node) {
  return [ "html", "body", "#document" ].includes(getNodeName(node));
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getCssDimensions(element) {
  const css = getComputedStyle(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width: width,
    height: height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {width: width, height: height, $: $} = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x: x,
    y: y
  };
}

const noOffsets = createCoords(0);

function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}

function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width: width,
    height: height,
    x: x,
    y: y
  });
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {rect: rect, offsetParent: offsetParent, strategy: strategy} = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = _extends({}, clippingAncestor, {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    });
  }
  return rectToClientRect(rect);
}

function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}

function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el => isElement(el) && getNodeName(el) !== "body"));
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && [ "absolute", "fixed" ].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor => ancestor !== currentNode));
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

function getClippingRect(_ref) {
  let {element: element, boundary: boundary, rootBoundary: rootBoundary, strategy: strategy} = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [ ...elementClippingAncestors, rootBoundary ];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce(((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }), getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

const getElementRects = async function getElementRects(_ref) {
  let {reference: reference, floating: floating, strategy: strategy} = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: _extends({
      x: 0,
      y: 0
    }, await getDimensionsFn(floating))
  };
};

function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: getDocumentElement,
  getClippingRect: getClippingRect,
  getOffsetParent: getOffsetParent,
  getElementRects: getElementRects,
  getClientRects: getClientRects,
  getDimensions: getDimensions,
  getScale: getScale,
  isElement: isElement,
  isRTL: isRTL
};

function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {left: left, top: top, width: width, height: height} = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin: rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout((() => {
            refresh(false, 1e-7);
          }), 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, _extends({}, options, {
        root: root.ownerDocument
      }));
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {ancestorScroll: ancestorScroll = true, ancestorResize: ancestorResize = true, elementResize: elementResize = typeof ResizeObserver === "function", layoutShift: layoutShift = typeof IntersectionObserver === "function", animationFrame: animationFrame = false} = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [ ...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating) ] : [];
  ancestors.forEach((ancestor => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  }));
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame((() => {
          resizeObserver && resizeObserver.observe(floating);
        }));
      }
      update();
    }));
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    }));
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

const computePosition = (reference, floating, options) => {
  const cache = new Map;
  const mergedOptions = _extends({
    platform: platform
  }, options);
  const platformWithCache = _extends({}, mergedOptions.platform, {
    _c: cache
  });
  return computePosition$1(reference, floating, _extends({}, mergedOptions, {
    platform: platformWithCache
  }));
};

function setupTooltip(step) {
  if (step.cleanup) {
    step.cleanup();
  }
  const attachToOptions = step._getResolvedAttachToOptions();
  let target = attachToOptions.element;
  const floatingUIOptions = getFloatingUIOptions(attachToOptions, step);
  const shouldCenter = shouldCenterStep(attachToOptions);
  if (shouldCenter) {
    target = document.body;
    const content = step.shepherdElementComponent.getElement();
    content.classList.add("shepherd-centered");
  }
  step.cleanup = autoUpdate(target, step.el, (() => {
    if (!step.el) {
      step.cleanup();
      return;
    }
    setPosition(target, step, floatingUIOptions, shouldCenter);
  }));
  step.target = attachToOptions.element;
  return floatingUIOptions;
}

function mergeTooltipConfig(tourOptions, options) {
  return {
    floatingUIOptions: cjs(tourOptions.floatingUIOptions || {}, options.floatingUIOptions || {})
  };
}

function destroyTooltip(step) {
  if (step.cleanup) {
    step.cleanup();
  }
  step.cleanup = null;
}

function setPosition(target, step, floatingUIOptions, shouldCenter) {
  return computePosition(target, step.el, floatingUIOptions).then(floatingUIposition(step, shouldCenter)).then((step => new Promise((resolve => {
    setTimeout((() => resolve(step)), 300);
  })))).then((step => {
    if (step && step.el) {
      step.el.focus({
        preventScroll: true
      });
    }
  }));
}

function floatingUIposition(step, shouldCenter) {
  return ({x: x, y: y, placement: placement, middlewareData: middlewareData}) => {
    if (!step.el) {
      return step;
    }
    if (shouldCenter) {
      Object.assign(step.el.style, {
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      });
    } else {
      Object.assign(step.el.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`
      });
    }
    step.el.dataset.popperPlacement = placement;
    placeArrow(step.el, middlewareData);
    return step;
  };
}

function placeArrow(el, middlewareData) {
  const arrowEl = el.querySelector(".shepherd-arrow");
  if (arrowEl && middlewareData.arrow) {
    const {x: arrowX, y: arrowY} = middlewareData.arrow;
    Object.assign(arrowEl.style, {
      left: arrowX != null ? `${arrowX}px` : "",
      top: arrowY != null ? `${arrowY}px` : ""
    });
  }
}

function getFloatingUIOptions(attachToOptions, step) {
  const options = {
    strategy: "absolute",
    middleware: []
  };
  const arrowEl = addArrow(step);
  const shouldCenter = shouldCenterStep(attachToOptions);
  if (!shouldCenter) {
    options.middleware.push(flip(), shift({
      limiter: limitShift(),
      crossAxis: true
    }));
    if (arrowEl) {
      options.middleware.push(arrow({
        element: arrowEl
      }));
    }
    options.placement = attachToOptions.on;
  }
  return cjs(step.options.floatingUIOptions || {}, options);
}

function addArrow(step) {
  if (step.options.arrow && step.el) {
    return step.el.querySelector(".shepherd-arrow");
  }
  return false;
}

function noop() {}

function assign(tar, src) {
  for (const k in src) tar[k] = src[k];
  return tar;
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === "function";
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(" ");
}

function empty() {
  return text("");
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute); else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

const always_set_through_set_attribute = [ "width", "height" ];

function set_attributes(node, attributes) {
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === "style") {
      node.style.cssText = attributes[key];
    } else if (key === "__value") {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set && always_set_through_set_attribute.indexOf(key) === -1) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function children(element) {
  return Array.from(element.childNodes);
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? "add" : "remove"](name);
}

let current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error("Function called outside component initialization");
  return current_component;
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

const dirty_components = [];

const binding_callbacks = [];

let render_callbacks = [];

const flush_callbacks = [];

const resolved_promise = Promise.resolve();

let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

const seen_callbacks = new Set;

let flushidx = 0;

function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [ -1 ];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c)));
  targets.forEach((c => c()));
  render_callbacks = filtered;
}

const outroing = new Set;

let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push((() => {
      outroing.delete(block);
      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    }));
    block.o(local);
  } else if (callback) {
    callback();
  }
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }
  return update;
}

function create_component(block) {
  block && block.c();
}

function mount_component(component, target, anchor, customElement) {
  const {fragment: fragment, after_update: after_update} = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback((() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    }));
  }
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [ -1 ]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    props: props,
    update: noop,
    not_equal: not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    callbacks: blank_object(),
    dirty: dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, ((i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }
    return ret;
  })) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }
  set_current_component(parent_component);
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
}

function create_fragment$8(ctx) {
  let button;
  let button_aria_label_value;
  let button_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      attr(button, "aria-label", button_aria_label_value = ctx[3] ? ctx[3] : null);
      attr(button, "class", button_class_value = `${ctx[1] || ""} shepherd-button ${ctx[4] ? "shepherd-button-secondary" : ""}`);
      button.disabled = ctx[2];
      attr(button, "tabindex", "0");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      button.innerHTML = ctx[5];
      if (!mounted) {
        dispose = listen(button, "click", (function() {
          if (is_function(ctx[0])) ctx[0].apply(this, arguments);
        }));
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & 32) button.innerHTML = ctx[5];
      if (dirty & 8 && button_aria_label_value !== (button_aria_label_value = ctx[3] ? ctx[3] : null)) {
        attr(button, "aria-label", button_aria_label_value);
      }
      if (dirty & 18 && button_class_value !== (button_class_value = `${ctx[1] || ""} shepherd-button ${ctx[4] ? "shepherd-button-secondary" : ""}`)) {
        attr(button, "class", button_class_value);
      }
      if (dirty & 4) {
        button.disabled = ctx[2];
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    }
  };
}

function instance$8($$self, $$props, $$invalidate) {
  let {config: config, step: step} = $$props;
  let action, classes, disabled, label, secondary, text;
  function getConfigOption(option) {
    if (isFunction(option)) {
      return option = option.call(step);
    }
    return option;
  }
  $$self.$$set = $$props => {
    if ("config" in $$props) $$invalidate(6, config = $$props.config);
    if ("step" in $$props) $$invalidate(7, step = $$props.step);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 192) {
      {
        $$invalidate(0, action = config.action ? config.action.bind(step.tour) : null);
        $$invalidate(1, classes = config.classes);
        $$invalidate(2, disabled = config.disabled ? getConfigOption(config.disabled) : false);
        $$invalidate(3, label = config.label ? getConfigOption(config.label) : null);
        $$invalidate(4, secondary = config.secondary);
        $$invalidate(5, text = config.text ? getConfigOption(config.text) : null);
      }
    }
  };
  return [ action, classes, disabled, label, secondary, text, config, step ];
}

class Shepherd_button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      config: 6,
      step: 7
    });
  }
}

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}

function create_if_block$3(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = i => transition_out(each_blocks[i], 1, 1, (() => {
    each_blocks[i] = null;
  }));
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx, dirty) {
      if (dirty & 3) {
        each_value = ctx[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach(each_1_anchor);
    }
  };
}

function create_each_block(ctx) {
  let shepherdbutton;
  let current;
  shepherdbutton = new Shepherd_button({
    props: {
      config: ctx[2],
      step: ctx[0]
    }
  });
  return {
    c() {
      create_component(shepherdbutton.$$.fragment);
    },
    m(target, anchor) {
      mount_component(shepherdbutton, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const shepherdbutton_changes = {};
      if (dirty & 2) shepherdbutton_changes.config = ctx[2];
      if (dirty & 1) shepherdbutton_changes.step = ctx[0];
      shepherdbutton.$set(shepherdbutton_changes);
    },
    i(local) {
      if (current) return;
      transition_in(shepherdbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(shepherdbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(shepherdbutton, detaching);
    }
  };
}

function create_fragment$7(ctx) {
  let footer;
  let current;
  let if_block = ctx[1] && create_if_block$3(ctx);
  return {
    c() {
      footer = element("footer");
      if (if_block) if_block.c();
      attr(footer, "class", "shepherd-footer");
    },
    m(target, anchor) {
      insert(target, footer, anchor);
      if (if_block) if_block.m(footer, null);
      current = true;
    },
    p(ctx, [dirty]) {
      if (ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$3(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(footer, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, (() => {
          if_block = null;
        }));
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(footer);
      if (if_block) if_block.d();
    }
  };
}

function instance$7($$self, $$props, $$invalidate) {
  let buttons;
  let {step: step} = $$props;
  $$self.$$set = $$props => {
    if ("step" in $$props) $$invalidate(0, step = $$props.step);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, buttons = step.options.buttons);
    }
  };
  return [ step, buttons ];
}

class Shepherd_footer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      step: 0
    });
  }
}

function create_fragment$6(ctx) {
  let button;
  let span;
  let button_aria_label_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      span = element("span");
      span.textContent = "×";
      attr(span, "aria-hidden", "true");
      attr(button, "aria-label", button_aria_label_value = ctx[0].label ? ctx[0].label : "Close Tour");
      attr(button, "class", "shepherd-cancel-icon");
      attr(button, "type", "button");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, span);
      if (!mounted) {
        dispose = listen(button, "click", ctx[1]);
        mounted = true;
      }
    },
    p(ctx, [dirty]) {
      if (dirty & 1 && button_aria_label_value !== (button_aria_label_value = ctx[0].label ? ctx[0].label : "Close Tour")) {
        attr(button, "aria-label", button_aria_label_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    }
  };
}

function instance$6($$self, $$props, $$invalidate) {
  let {cancelIcon: cancelIcon, step: step} = $$props;
  const handleCancelClick = e => {
    e.preventDefault();
    step.cancel();
  };
  $$self.$$set = $$props => {
    if ("cancelIcon" in $$props) $$invalidate(0, cancelIcon = $$props.cancelIcon);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };
  return [ cancelIcon, handleCancelClick, step ];
}

class Shepherd_cancel_icon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      cancelIcon: 0,
      step: 2
    });
  }
}

function create_fragment$5(ctx) {
  let h3;
  return {
    c() {
      h3 = element("h3");
      attr(h3, "id", ctx[1]);
      attr(h3, "class", "shepherd-title");
    },
    m(target, anchor) {
      insert(target, h3, anchor);
      ctx[3](h3);
    },
    p(ctx, [dirty]) {
      if (dirty & 2) {
        attr(h3, "id", ctx[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) detach(h3);
      ctx[3](null);
    }
  };
}

function instance$5($$self, $$props, $$invalidate) {
  let {labelId: labelId, element: element, title: title} = $$props;
  afterUpdate((() => {
    if (isFunction(title)) {
      $$invalidate(2, title = title());
    }
    $$invalidate(0, element.innerHTML = title, element);
  }));
  function h3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"]((() => {
      element = $$value;
      $$invalidate(0, element);
    }));
  }
  $$self.$$set = $$props => {
    if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("title" in $$props) $$invalidate(2, title = $$props.title);
  };
  return [ element, labelId, title, h3_binding ];
}

class Shepherd_title extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      labelId: 1,
      element: 0,
      title: 2
    });
  }
}

function create_if_block_1$1(ctx) {
  let shepherdtitle;
  let current;
  shepherdtitle = new Shepherd_title({
    props: {
      labelId: ctx[0],
      title: ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdtitle.$$.fragment);
    },
    m(target, anchor) {
      mount_component(shepherdtitle, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const shepherdtitle_changes = {};
      if (dirty & 1) shepherdtitle_changes.labelId = ctx[0];
      if (dirty & 4) shepherdtitle_changes.title = ctx[2];
      shepherdtitle.$set(shepherdtitle_changes);
    },
    i(local) {
      if (current) return;
      transition_in(shepherdtitle.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(shepherdtitle.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(shepherdtitle, detaching);
    }
  };
}

function create_if_block$2(ctx) {
  let shepherdcancelicon;
  let current;
  shepherdcancelicon = new Shepherd_cancel_icon({
    props: {
      cancelIcon: ctx[3],
      step: ctx[1]
    }
  });
  return {
    c() {
      create_component(shepherdcancelicon.$$.fragment);
    },
    m(target, anchor) {
      mount_component(shepherdcancelicon, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const shepherdcancelicon_changes = {};
      if (dirty & 8) shepherdcancelicon_changes.cancelIcon = ctx[3];
      if (dirty & 2) shepherdcancelicon_changes.step = ctx[1];
      shepherdcancelicon.$set(shepherdcancelicon_changes);
    },
    i(local) {
      if (current) return;
      transition_in(shepherdcancelicon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(shepherdcancelicon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(shepherdcancelicon, detaching);
    }
  };
}

function create_fragment$4(ctx) {
  let header;
  let t;
  let current;
  let if_block0 = ctx[2] && create_if_block_1$1(ctx);
  let if_block1 = ctx[3] && ctx[3].enabled && create_if_block$2(ctx);
  return {
    c() {
      header = element("header");
      if (if_block0) if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      attr(header, "class", "shepherd-header");
    },
    m(target, anchor) {
      insert(target, header, anchor);
      if (if_block0) if_block0.m(header, null);
      append(header, t);
      if (if_block1) if_block1.m(header, null);
      current = true;
    },
    p(ctx, [dirty]) {
      if (ctx[2]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
          if (dirty & 4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(header, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, (() => {
          if_block0 = null;
        }));
        check_outros();
      }
      if (ctx[3] && ctx[3].enabled) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
          if (dirty & 8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$2(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(header, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, (() => {
          if_block1 = null;
        }));
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(header);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
    }
  };
}

function instance$4($$self, $$props, $$invalidate) {
  let {labelId: labelId, step: step} = $$props;
  let title, cancelIcon;
  $$self.$$set = $$props => {
    if ("labelId" in $$props) $$invalidate(0, labelId = $$props.labelId);
    if ("step" in $$props) $$invalidate(1, step = $$props.step);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      {
        $$invalidate(2, title = step.options.title);
        $$invalidate(3, cancelIcon = step.options.cancelIcon);
      }
    }
  };
  return [ labelId, step, title, cancelIcon ];
}

class Shepherd_header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      labelId: 0,
      step: 1
    });
  }
}

function create_fragment$3(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      attr(div, "class", "shepherd-text");
      attr(div, "id", ctx[1]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      ctx[3](div);
    },
    p(ctx, [dirty]) {
      if (dirty & 2) {
        attr(div, "id", ctx[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) detach(div);
      ctx[3](null);
    }
  };
}

function instance$3($$self, $$props, $$invalidate) {
  let {descriptionId: descriptionId, element: element, step: step} = $$props;
  afterUpdate((() => {
    let {text: text} = step.options;
    if (isFunction(text)) {
      text = text.call(step);
    }
    if (isHTMLElement$1(text)) {
      element.appendChild(text);
    } else {
      $$invalidate(0, element.innerHTML = text, element);
    }
  }));
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"]((() => {
      element = $$value;
      $$invalidate(0, element);
    }));
  }
  $$self.$$set = $$props => {
    if ("descriptionId" in $$props) $$invalidate(1, descriptionId = $$props.descriptionId);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };
  return [ element, descriptionId, step, div_binding ];
}

class Shepherd_text extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      descriptionId: 1,
      element: 0,
      step: 2
    });
  }
}

function create_if_block_2(ctx) {
  let shepherdheader;
  let current;
  shepherdheader = new Shepherd_header({
    props: {
      labelId: ctx[1],
      step: ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdheader.$$.fragment);
    },
    m(target, anchor) {
      mount_component(shepherdheader, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const shepherdheader_changes = {};
      if (dirty & 2) shepherdheader_changes.labelId = ctx[1];
      if (dirty & 4) shepherdheader_changes.step = ctx[2];
      shepherdheader.$set(shepherdheader_changes);
    },
    i(local) {
      if (current) return;
      transition_in(shepherdheader.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(shepherdheader.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(shepherdheader, detaching);
    }
  };
}

function create_if_block_1(ctx) {
  let shepherdtext;
  let current;
  shepherdtext = new Shepherd_text({
    props: {
      descriptionId: ctx[0],
      step: ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdtext.$$.fragment);
    },
    m(target, anchor) {
      mount_component(shepherdtext, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const shepherdtext_changes = {};
      if (dirty & 1) shepherdtext_changes.descriptionId = ctx[0];
      if (dirty & 4) shepherdtext_changes.step = ctx[2];
      shepherdtext.$set(shepherdtext_changes);
    },
    i(local) {
      if (current) return;
      transition_in(shepherdtext.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(shepherdtext.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(shepherdtext, detaching);
    }
  };
}

function create_if_block$1(ctx) {
  let shepherdfooter;
  let current;
  shepherdfooter = new Shepherd_footer({
    props: {
      step: ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdfooter.$$.fragment);
    },
    m(target, anchor) {
      mount_component(shepherdfooter, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const shepherdfooter_changes = {};
      if (dirty & 4) shepherdfooter_changes.step = ctx[2];
      shepherdfooter.$set(shepherdfooter_changes);
    },
    i(local) {
      if (current) return;
      transition_in(shepherdfooter.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(shepherdfooter.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(shepherdfooter, detaching);
    }
  };
}

function create_fragment$2(ctx) {
  let div;
  let show_if_2 = !isUndefined(ctx[2].options.title) || ctx[2].options.cancelIcon && ctx[2].options.cancelIcon.enabled;
  let t0;
  let show_if_1 = !isUndefined(ctx[2].options.text);
  let t1;
  let show_if = Array.isArray(ctx[2].options.buttons) && ctx[2].options.buttons.length;
  let current;
  let if_block0 = show_if_2 && create_if_block_2(ctx);
  let if_block1 = show_if_1 && create_if_block_1(ctx);
  let if_block2 = show_if && create_if_block$1(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0) if_block0.c();
      t0 = space();
      if (if_block1) if_block1.c();
      t1 = space();
      if (if_block2) if_block2.c();
      attr(div, "class", "shepherd-content");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block0) if_block0.m(div, null);
      append(div, t0);
      if (if_block1) if_block1.m(div, null);
      append(div, t1);
      if (if_block2) if_block2.m(div, null);
      current = true;
    },
    p(ctx, [dirty]) {
      if (dirty & 4) show_if_2 = !isUndefined(ctx[2].options.title) || ctx[2].options.cancelIcon && ctx[2].options.cancelIcon.enabled;
      if (show_if_2) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
          if (dirty & 4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, (() => {
          if_block0 = null;
        }));
        check_outros();
      }
      if (dirty & 4) show_if_1 = !isUndefined(ctx[2].options.text);
      if (show_if_1) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
          if (dirty & 4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, (() => {
          if_block1 = null;
        }));
        check_outros();
      }
      if (dirty & 4) show_if = Array.isArray(ctx[2].options.buttons) && ctx[2].options.buttons.length;
      if (show_if) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
          if (dirty & 4) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$1(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, (() => {
          if_block2 = null;
        }));
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(div);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
    }
  };
}

function instance$2($$self, $$props, $$invalidate) {
  let {descriptionId: descriptionId, labelId: labelId, step: step} = $$props;
  $$self.$$set = $$props => {
    if ("descriptionId" in $$props) $$invalidate(0, descriptionId = $$props.descriptionId);
    if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };
  return [ descriptionId, labelId, step ];
}

class Shepherd_content extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      descriptionId: 0,
      labelId: 1,
      step: 2
    });
  }
}

function create_if_block(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      attr(div, "class", "shepherd-arrow");
      attr(div, "data-popper-arrow", "");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    d(detaching) {
      if (detaching) detach(div);
    }
  };
}

function create_fragment$1(ctx) {
  let div;
  let t;
  let shepherdcontent;
  let div_aria_describedby_value;
  let div_aria_labelledby_value;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[4].options.arrow && ctx[4].options.attachTo && ctx[4].options.attachTo.element && ctx[4].options.attachTo.on && create_if_block();
  shepherdcontent = new Shepherd_content({
    props: {
      descriptionId: ctx[2],
      labelId: ctx[3],
      step: ctx[4]
    }
  });
  let div_levels = [ {
    "aria-describedby": div_aria_describedby_value = !isUndefined(ctx[4].options.text) ? ctx[2] : null
  }, {
    "aria-labelledby": div_aria_labelledby_value = ctx[4].options.title ? ctx[3] : null
  }, ctx[1], {
    role: "dialog"
  }, {
    tabindex: "0"
  } ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (if_block) if_block.c();
      t = space();
      create_component(shepherdcontent.$$.fragment);
      set_attributes(div, div_data);
      toggle_class(div, "shepherd-has-cancel-icon", ctx[5]);
      toggle_class(div, "shepherd-has-title", ctx[6]);
      toggle_class(div, "shepherd-element", true);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block) if_block.m(div, null);
      append(div, t);
      mount_component(shepherdcontent, div, null);
      ctx[13](div);
      current = true;
      if (!mounted) {
        dispose = listen(div, "keydown", ctx[7]);
        mounted = true;
      }
    },
    p(ctx, [dirty]) {
      if (ctx[4].options.arrow && ctx[4].options.attachTo && ctx[4].options.attachTo.element && ctx[4].options.attachTo.on) {
        if (if_block) ; else {
          if_block = create_if_block();
          if_block.c();
          if_block.m(div, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      const shepherdcontent_changes = {};
      if (dirty & 4) shepherdcontent_changes.descriptionId = ctx[2];
      if (dirty & 8) shepherdcontent_changes.labelId = ctx[3];
      if (dirty & 16) shepherdcontent_changes.step = ctx[4];
      shepherdcontent.$set(shepherdcontent_changes);
      set_attributes(div, div_data = get_spread_update(div_levels, [ (!current || dirty & 20 && div_aria_describedby_value !== (div_aria_describedby_value = !isUndefined(ctx[4].options.text) ? ctx[2] : null)) && {
        "aria-describedby": div_aria_describedby_value
      }, (!current || dirty & 24 && div_aria_labelledby_value !== (div_aria_labelledby_value = ctx[4].options.title ? ctx[3] : null)) && {
        "aria-labelledby": div_aria_labelledby_value
      }, dirty & 2 && ctx[1], {
        role: "dialog"
      }, {
        tabindex: "0"
      } ]));
      toggle_class(div, "shepherd-has-cancel-icon", ctx[5]);
      toggle_class(div, "shepherd-has-title", ctx[6]);
      toggle_class(div, "shepherd-element", true);
    },
    i(local) {
      if (current) return;
      transition_in(shepherdcontent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(shepherdcontent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(div);
      if (if_block) if_block.d();
      destroy_component(shepherdcontent);
      ctx[13](null);
      mounted = false;
      dispose();
    }
  };
}

const KEY_TAB = 9;

const KEY_ESC = 27;

const LEFT_ARROW = 37;

const RIGHT_ARROW = 39;

function getClassesArray(classes) {
  return classes.split(" ").filter((className => !!className.length));
}

function instance$1($$self, $$props, $$invalidate) {
  let {classPrefix: classPrefix, element: element, descriptionId: descriptionId, firstFocusableElement: firstFocusableElement, focusableElements: focusableElements, labelId: labelId, lastFocusableElement: lastFocusableElement, step: step, dataStepId: dataStepId} = $$props;
  let hasCancelIcon, hasTitle, classes;
  const getElement = () => element;
  onMount((() => {
    $$invalidate(1, dataStepId = {
      [`data-${classPrefix}shepherd-step-id`]: step.id
    });
    $$invalidate(9, focusableElements = element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));
    $$invalidate(8, firstFocusableElement = focusableElements[0]);
    $$invalidate(10, lastFocusableElement = focusableElements[focusableElements.length - 1]);
  }));
  afterUpdate((() => {
    if (classes !== step.options.classes) {
      updateDynamicClasses();
    }
  }));
  function updateDynamicClasses() {
    removeClasses(classes);
    classes = step.options.classes;
    addClasses(classes);
  }
  function removeClasses(classes) {
    if (isString(classes)) {
      const oldClasses = getClassesArray(classes);
      if (oldClasses.length) {
        element.classList.remove(...oldClasses);
      }
    }
  }
  function addClasses(classes) {
    if (isString(classes)) {
      const newClasses = getClassesArray(classes);
      if (newClasses.length) {
        element.classList.add(...newClasses);
      }
    }
  }
  const handleKeyDown = e => {
    const {tour: tour} = step;
    switch (e.keyCode) {
     case KEY_TAB:
      if (focusableElements.length === 0) {
        e.preventDefault();
        break;
      }
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement || document.activeElement.classList.contains("shepherd-element")) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
      break;

     case KEY_ESC:
      if (tour.options.exitOnEsc) {
        e.stopPropagation();
        step.cancel();
      }
      break;

     case LEFT_ARROW:
      if (tour.options.keyboardNavigation) {
        e.stopPropagation();
        tour.back();
      }
      break;

     case RIGHT_ARROW:
      if (tour.options.keyboardNavigation) {
        e.stopPropagation();
        tour.next();
      }
      break;
    }
  };
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"]((() => {
      element = $$value;
      $$invalidate(0, element);
    }));
  }
  $$self.$$set = $$props => {
    if ("classPrefix" in $$props) $$invalidate(11, classPrefix = $$props.classPrefix);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("descriptionId" in $$props) $$invalidate(2, descriptionId = $$props.descriptionId);
    if ("firstFocusableElement" in $$props) $$invalidate(8, firstFocusableElement = $$props.firstFocusableElement);
    if ("focusableElements" in $$props) $$invalidate(9, focusableElements = $$props.focusableElements);
    if ("labelId" in $$props) $$invalidate(3, labelId = $$props.labelId);
    if ("lastFocusableElement" in $$props) $$invalidate(10, lastFocusableElement = $$props.lastFocusableElement);
    if ("step" in $$props) $$invalidate(4, step = $$props.step);
    if ("dataStepId" in $$props) $$invalidate(1, dataStepId = $$props.dataStepId);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      {
        $$invalidate(5, hasCancelIcon = step.options && step.options.cancelIcon && step.options.cancelIcon.enabled);
        $$invalidate(6, hasTitle = step.options && step.options.title);
      }
    }
  };
  return [ element, dataStepId, descriptionId, labelId, step, hasCancelIcon, hasTitle, handleKeyDown, firstFocusableElement, focusableElements, lastFocusableElement, classPrefix, getElement, div_binding ];
}

class Shepherd_element extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      classPrefix: 11,
      element: 0,
      descriptionId: 2,
      firstFocusableElement: 8,
      focusableElements: 9,
      labelId: 3,
      lastFocusableElement: 10,
      step: 4,
      dataStepId: 1,
      getElement: 12
    });
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}

class Step extends Evented {
  constructor(tour, options = {}) {
    super(tour, options);
    this.tour = tour;
    this.classPrefix = this.tour.options ? normalizePrefix(this.tour.options.classPrefix) : "";
    this.styles = tour.styles;
    this._resolvedAttachTo = null;
    autoBind(this);
    this._setOptions(options);
    return this;
  }
  cancel() {
    this.tour.cancel();
    this.trigger("cancel");
  }
  complete() {
    this.tour.complete();
    this.trigger("complete");
  }
  destroy() {
    destroyTooltip(this);
    if (isHTMLElement$1(this.el)) {
      this.el.remove();
      this.el = null;
    }
    this._updateStepTargetOnHide();
    this.trigger("destroy");
  }
  getTour() {
    return this.tour;
  }
  hide() {
    this.tour.modal.hide();
    this.trigger("before-hide");
    if (this.el) {
      this.el.hidden = true;
    }
    this._updateStepTargetOnHide();
    this.trigger("hide");
  }
  _resolveAttachToOptions() {
    this._resolvedAttachTo = parseAttachTo(this);
    return this._resolvedAttachTo;
  }
  _getResolvedAttachToOptions() {
    if (this._resolvedAttachTo === null) {
      return this._resolveAttachToOptions();
    }
    return this._resolvedAttachTo;
  }
  isOpen() {
    return Boolean(this.el && !this.el.hidden);
  }
  show() {
    if (isFunction(this.options.beforeShowPromise)) {
      return Promise.resolve(this.options.beforeShowPromise()).then((() => this._show()));
    }
    return Promise.resolve(this._show());
  }
  updateStepOptions(options) {
    Object.assign(this.options, options);
    if (this.shepherdElementComponent) {
      this.shepherdElementComponent.$set({
        step: this
      });
    }
  }
  getElement() {
    return this.el;
  }
  getTarget() {
    return this.target;
  }
  _createTooltipContent() {
    const descriptionId = `${this.id}-description`;
    const labelId = `${this.id}-label`;
    this.shepherdElementComponent = new Shepherd_element({
      target: this.tour.options.stepsContainer || document.body,
      props: {
        classPrefix: this.classPrefix,
        descriptionId: descriptionId,
        labelId: labelId,
        step: this,
        styles: this.styles
      }
    });
    return this.shepherdElementComponent.getElement();
  }
  _scrollTo(scrollToOptions) {
    const {element: element} = this._getResolvedAttachToOptions();
    if (isFunction(this.options.scrollToHandler)) {
      this.options.scrollToHandler(element);
    } else if (isElement$1(element) && typeof element.scrollIntoView === "function") {
      element.scrollIntoView(scrollToOptions);
    }
  }
  _getClassOptions(stepOptions) {
    const defaultStepOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
    const stepClasses = stepOptions.classes ? stepOptions.classes : "";
    const defaultStepOptionsClasses = defaultStepOptions && defaultStepOptions.classes ? defaultStepOptions.classes : "";
    const allClasses = [ ...stepClasses.split(" "), ...defaultStepOptionsClasses.split(" ") ];
    const uniqClasses = new Set(allClasses);
    return Array.from(uniqClasses).join(" ").trim();
  }
  _setOptions(options = {}) {
    let tourOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
    tourOptions = cjs({}, tourOptions || {});
    this.options = Object.assign({
      arrow: true
    }, tourOptions, options, mergeTooltipConfig(tourOptions, options));
    const {when: when} = this.options;
    this.options.classes = this._getClassOptions(options);
    this.destroy();
    this.id = this.options.id || `step-${uuid()}`;
    if (when) {
      Object.keys(when).forEach((event => {
        this.on(event, when[event], this);
      }));
    }
  }
  _setupElements() {
    if (!isUndefined(this.el)) {
      this.destroy();
    }
    this.el = this._createTooltipContent();
    if (this.options.advanceOn) {
      bindAdvance(this);
    }
    setupTooltip(this);
  }
  _show() {
    this.trigger("before-show");
    this._resolveAttachToOptions();
    this._setupElements();
    if (!this.tour.modal) {
      this.tour._setupModal();
    }
    this.tour.modal.setupForStep(this);
    this._styleTargetElementForStep(this);
    this.el.hidden = false;
    if (this.options.scrollTo) {
      setTimeout((() => {
        this._scrollTo(this.options.scrollTo);
      }));
    }
    this.el.hidden = false;
    const content = this.shepherdElementComponent.getElement();
    const target = this.target || document.body;
    target.classList.add(`${this.classPrefix}shepherd-enabled`);
    target.classList.add(`${this.classPrefix}shepherd-target`);
    content.classList.add("shepherd-enabled");
    this.trigger("show");
  }
  _styleTargetElementForStep(step) {
    const targetElement = step.target;
    if (!targetElement) {
      return;
    }
    if (step.options.highlightClass) {
      targetElement.classList.add(step.options.highlightClass);
    }
    targetElement.classList.remove("shepherd-target-click-disabled");
    if (step.options.canClickTarget === false) {
      targetElement.classList.add("shepherd-target-click-disabled");
    }
  }
  _updateStepTargetOnHide() {
    const target = this.target || document.body;
    if (this.options.highlightClass) {
      target.classList.remove(this.options.highlightClass);
    }
    target.classList.remove("shepherd-target-click-disabled", `${this.classPrefix}shepherd-enabled`, `${this.classPrefix}shepherd-target`);
  }
}

function cleanupSteps(tour) {
  if (tour) {
    const {steps: steps} = tour;
    steps.forEach((step => {
      if (step.options && step.options.canClickTarget === false && step.options.attachTo) {
        if (step.target instanceof HTMLElement) {
          step.target.classList.remove("shepherd-target-click-disabled");
        }
      }
    }));
  }
}

function makeOverlayPath({width: width, height: height, x: x = 0, y: y = 0, r: r = 0}) {
  const {innerWidth: w, innerHeight: h} = window;
  const {topLeft: topLeft = 0, topRight: topRight = 0, bottomRight: bottomRight = 0, bottomLeft: bottomLeft = 0} = typeof r === "number" ? {
    topLeft: r,
    topRight: r,
    bottomRight: r,
    bottomLeft: r
  } : r;
  return `M${w},${h}H0V0H${w}V${h}ZM${x + topLeft},${y}a${topLeft},${topLeft},0,0,0-${topLeft},${topLeft}V${height + y - bottomLeft}a${bottomLeft},${bottomLeft},0,0,0,${bottomLeft},${bottomLeft}H${width + x - bottomRight}a${bottomRight},${bottomRight},0,0,0,${bottomRight}-${bottomRight}V${y + topRight}a${topRight},${topRight},0,0,0-${topRight}-${topRight}Z`;
}

function create_fragment(ctx) {
  let svg;
  let path;
  let svg_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr(path, "d", ctx[2]);
      attr(svg, "class", svg_class_value = `${ctx[1] ? "shepherd-modal-is-visible" : ""} shepherd-modal-overlay-container`);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      ctx[11](svg);
      if (!mounted) {
        dispose = listen(svg, "touchmove", ctx[3]);
        mounted = true;
      }
    },
    p(ctx, [dirty]) {
      if (dirty & 4) {
        attr(path, "d", ctx[2]);
      }
      if (dirty & 2 && svg_class_value !== (svg_class_value = `${ctx[1] ? "shepherd-modal-is-visible" : ""} shepherd-modal-overlay-container`)) {
        attr(svg, "class", svg_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) detach(svg);
      ctx[11](null);
      mounted = false;
      dispose();
    }
  };
}

function _getScrollParent(element) {
  if (!element) {
    return null;
  }
  const isHtmlElement = element instanceof HTMLElement;
  const overflowY = isHtmlElement && window.getComputedStyle(element).overflowY;
  const isScrollable = overflowY !== "hidden" && overflowY !== "visible";
  if (isScrollable && element.scrollHeight >= element.clientHeight) {
    return element;
  }
  return _getScrollParent(element.parentElement);
}

function _getVisibleHeight(element, scrollParent) {
  const elementRect = element.getBoundingClientRect();
  let top = elementRect.y || elementRect.top;
  let bottom = elementRect.bottom || top + elementRect.height;
  if (scrollParent) {
    const scrollRect = scrollParent.getBoundingClientRect();
    const scrollTop = scrollRect.y || scrollRect.top;
    const scrollBottom = scrollRect.bottom || scrollTop + scrollRect.height;
    top = Math.max(top, scrollTop);
    bottom = Math.min(bottom, scrollBottom);
  }
  const height = Math.max(bottom - top, 0);
  return {
    y: top,
    height: height
  };
}

function instance($$self, $$props, $$invalidate) {
  let {element: element, openingProperties: openingProperties} = $$props;
  uuid();
  let modalIsVisible = false;
  let rafId = undefined;
  let pathDefinition;
  closeModalOpening();
  const getElement = () => element;
  function closeModalOpening() {
    $$invalidate(4, openingProperties = {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      r: 0
    });
  }
  function hide() {
    $$invalidate(1, modalIsVisible = false);
    _cleanupStepEventListeners();
  }
  function positionModal(modalOverlayOpeningPadding = 0, modalOverlayOpeningRadius = 0, scrollParent, targetElement) {
    if (targetElement) {
      const {y: y, height: height} = _getVisibleHeight(targetElement, scrollParent);
      const {x: x, width: width, left: left} = targetElement.getBoundingClientRect();
      $$invalidate(4, openingProperties = {
        width: width + modalOverlayOpeningPadding * 2,
        height: height + modalOverlayOpeningPadding * 2,
        x: (x || left) - modalOverlayOpeningPadding,
        y: y - modalOverlayOpeningPadding,
        r: modalOverlayOpeningRadius
      });
    } else {
      closeModalOpening();
    }
  }
  function setupForStep(step) {
    _cleanupStepEventListeners();
    if (step.tour.options.useModalOverlay) {
      _styleForStep(step);
      show();
    } else {
      hide();
    }
  }
  function show() {
    $$invalidate(1, modalIsVisible = true);
  }
  const _preventModalBodyTouch = e => {
    e.preventDefault();
  };
  const _preventModalOverlayTouch = e => {
    e.stopPropagation();
  };
  function _addStepEventListeners() {
    window.addEventListener("touchmove", _preventModalBodyTouch, {
      passive: false
    });
  }
  function _cleanupStepEventListeners() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = undefined;
    }
    window.removeEventListener("touchmove", _preventModalBodyTouch, {
      passive: false
    });
  }
  function _styleForStep(step) {
    const {modalOverlayOpeningPadding: modalOverlayOpeningPadding, modalOverlayOpeningRadius: modalOverlayOpeningRadius} = step.options;
    const scrollParent = _getScrollParent(step.target);
    const rafLoop = () => {
      rafId = undefined;
      positionModal(modalOverlayOpeningPadding, modalOverlayOpeningRadius, scrollParent, step.target);
      rafId = requestAnimationFrame(rafLoop);
    };
    rafLoop();
    _addStepEventListeners();
  }
  function svg_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"]((() => {
      element = $$value;
      $$invalidate(0, element);
    }));
  }
  $$self.$$set = $$props => {
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("openingProperties" in $$props) $$invalidate(4, openingProperties = $$props.openingProperties);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      $$invalidate(2, pathDefinition = makeOverlayPath(openingProperties));
    }
  };
  return [ element, modalIsVisible, pathDefinition, _preventModalOverlayTouch, openingProperties, getElement, closeModalOpening, hide, positionModal, setupForStep, show, svg_binding ];
}

class Shepherd_modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      element: 0,
      openingProperties: 4,
      getElement: 5,
      closeModalOpening: 6,
      hide: 7,
      positionModal: 8,
      setupForStep: 9,
      show: 10
    });
  }
  get getElement() {
    return this.$$.ctx[5];
  }
  get closeModalOpening() {
    return this.$$.ctx[6];
  }
  get hide() {
    return this.$$.ctx[7];
  }
  get positionModal() {
    return this.$$.ctx[8];
  }
  get setupForStep() {
    return this.$$.ctx[9];
  }
  get show() {
    return this.$$.ctx[10];
  }
}

const Shepherd = new Evented;

class Tour extends Evented {
  constructor(options = {}) {
    super(options);
    autoBind(this);
    const defaultTourOptions = {
      exitOnEsc: true,
      keyboardNavigation: true
    };
    this.options = Object.assign({}, defaultTourOptions, options);
    this.classPrefix = normalizePrefix(this.options.classPrefix);
    this.steps = [];
    this.addSteps(this.options.steps);
    const events = [ "active", "cancel", "complete", "inactive", "show", "start" ];
    events.map((event => {
      (e => {
        this.on(e, (opts => {
          opts = opts || {};
          opts.tour = this;
          Shepherd.trigger(e, opts);
        }));
      })(event);
    }));
    this._setTourID();
    return this;
  }
  addStep(options, index) {
    let step = options;
    if (!(step instanceof Step)) {
      step = new Step(this, step);
    } else {
      step.tour = this;
    }
    if (!isUndefined(index)) {
      this.steps.splice(index, 0, step);
    } else {
      this.steps.push(step);
    }
    return step;
  }
  addSteps(steps) {
    if (Array.isArray(steps)) {
      steps.forEach((step => {
        this.addStep(step);
      }));
    }
    return this;
  }
  back() {
    const index = this.steps.indexOf(this.currentStep);
    this.show(index - 1, false);
  }
  async cancel() {
    if (this.options.confirmCancel) {
      const confirmCancelIsFunction = typeof this.options.confirmCancel === "function";
      const cancelMessage = this.options.confirmCancelMessage || "Are you sure you want to stop the tour?";
      const stopTour = confirmCancelIsFunction ? await this.options.confirmCancel() : window.confirm(cancelMessage);
      if (stopTour) {
        this._done("cancel");
      }
    } else {
      this._done("cancel");
    }
  }
  complete() {
    this._done("complete");
  }
  getById(id) {
    return this.steps.find((step => step.id === id));
  }
  getCurrentStep() {
    return this.currentStep;
  }
  hide() {
    const currentStep = this.getCurrentStep();
    if (currentStep) {
      return currentStep.hide();
    }
  }
  isActive() {
    return Shepherd.activeTour === this;
  }
  next() {
    const index = this.steps.indexOf(this.currentStep);
    if (index === this.steps.length - 1) {
      this.complete();
    } else {
      this.show(index + 1, true);
    }
  }
  removeStep(name) {
    const current = this.getCurrentStep();
    this.steps.some(((step, i) => {
      if (step.id === name) {
        if (step.isOpen()) {
          step.hide();
        }
        step.destroy();
        this.steps.splice(i, 1);
        return true;
      }
    }));
    if (current && current.id === name) {
      this.currentStep = undefined;
      this.steps.length ? this.show(0) : this.cancel();
    }
  }
  show(key = 0, forward = true) {
    const step = isString(key) ? this.getById(key) : this.steps[key];
    if (step) {
      this._updateStateBeforeShow();
      const shouldSkipStep = isFunction(step.options.showOn) && !step.options.showOn();
      if (shouldSkipStep) {
        this._skipStep(step, forward);
      } else {
        this.trigger("show", {
          step: step,
          previous: this.currentStep
        });
        this.currentStep = step;
        step.show();
      }
    }
  }
  start() {
    this.trigger("start");
    this.focusedElBeforeOpen = document.activeElement;
    this.currentStep = null;
    this._setupModal();
    this._setupActiveTour();
    this.next();
  }
  _done(event) {
    const index = this.steps.indexOf(this.currentStep);
    if (Array.isArray(this.steps)) {
      this.steps.forEach((step => step.destroy()));
    }
    cleanupSteps(this);
    this.trigger(event, {
      index: index
    });
    Shepherd.activeTour = null;
    this.trigger("inactive", {
      tour: this
    });
    if (this.modal) {
      this.modal.hide();
    }
    if (event === "cancel" || event === "complete") {
      if (this.modal) {
        const modalContainer = document.querySelector(".shepherd-modal-overlay-container");
        if (modalContainer) {
          modalContainer.remove();
        }
      }
    }
    if (isHTMLElement$1(this.focusedElBeforeOpen)) {
      this.focusedElBeforeOpen.focus();
    }
  }
  _setupActiveTour() {
    this.trigger("active", {
      tour: this
    });
    Shepherd.activeTour = this;
  }
  _setupModal() {
    this.modal = new Shepherd_modal({
      target: this.options.modalContainer || document.body,
      props: {
        classPrefix: this.classPrefix,
        styles: this.styles
      }
    });
  }
  _skipStep(step, forward) {
    const index = this.steps.indexOf(step);
    if (index === this.steps.length - 1) {
      this.complete();
    } else {
      const nextIndex = forward ? index + 1 : index - 1;
      this.show(nextIndex, forward);
    }
  }
  _updateStateBeforeShow() {
    if (this.currentStep) {
      this.currentStep.hide();
    }
    if (!this.isActive()) {
      this._setupActiveTour();
    }
  }
  _setTourID() {
    const tourName = this.options.tourName || "tour";
    this.id = `${tourName}--${uuid()}`;
  }
}

const isServerSide = typeof window === "undefined";

class NoOp {
  constructor() {}
}

if (isServerSide) {
  Object.assign(Shepherd, {
    Tour: NoOp,
    Step: NoOp
  });
} else {
  Object.assign(Shepherd, {
    Tour: Tour,
    Step: Step
  });
}

class ShepherdController extends Controller {
  static values={
    tourName: String,
    endpoint: String,
    config: Object,
    context: Object
  };
  initialize() {
    this.tour = new Shepherd.Tour(this.configValue.tour);
  }
  connect() {
    const steps = this.processTourConfigAction(this.configValue.steps);
    if (steps) {
      this.addTourListeners();
      this.tour.addSteps(steps);
      this.tour.start();
    }
  }
  addTourListeners() {
    [ "hide", "cancel", "complete", "start" ].map((eventName => {
      this.tour.on(eventName, (event => this.processTourEvent({
        event: event,
        tourName: this.tourNameValue,
        eventName: eventName
      })));
    }));
  }
  async processTourEvent({event: event, tourName: tourName, eventName: eventName}) {
    const body = JSON.stringify({
      tour: tourName,
      event: eventName,
      context: this.contextValue
    });
    const response = await post(this.endpointValue, {
      body: body
    });
    if (!response.ok) {
      console.warn("Failed", response);
    }
  }
  processTourConfigAction(steps) {
    if (!steps.length) {
      return false;
    }
    return steps.map((step => {
      let {buttons: buttons, ...rest} = step;
      if (buttons) {
        buttons = buttons.map((button => {
          switch (button.action) {
           case "next":
            button.action = this.tour.next;
            break;

           case "back":
            button.action = this.tour.back;
            break;

           default:
            button.action = this.tour.complete;
          }
          return button;
        }));
      }
      return {
        buttons: buttons,
        ...rest
      };
    }));
  }
}

var CrispMessage = function() {
  function CrispMessage(crisp) {
    this.parent = crisp;
  }
  CrispMessage.prototype.send = function(type, content) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "do", "message:send", [ type, content ] ]);
  };
  CrispMessage.prototype.sendText = function(content) {
    this.send("text", content);
  };
  CrispMessage.prototype.sendFile = function(content) {
    this.send("file", content);
  };
  CrispMessage.prototype.sendAnimation = function(content) {
    this.send("animation", content);
  };
  CrispMessage.prototype.sendAudio = function(content) {
    this.send("audio", content);
  };
  CrispMessage.prototype.show = function(type, content) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "do", "message:show", [ type, content ] ]);
  };
  CrispMessage.prototype.showText = function(content) {
    this.show("text", content);
  };
  CrispMessage.prototype.showFile = function(content) {
    this.show("file", content);
  };
  CrispMessage.prototype.showAnimation = function(content) {
    this.show("animation", content);
  };
  CrispMessage.prototype.showAudio = function(content) {
    this.show("audio", content);
  };
  CrispMessage.prototype.showPicker = function(content) {
    this.show("picker", content);
  };
  CrispMessage.prototype.showField = function(content) {
    this.show("field", content);
  };
  CrispMessage.prototype.showCarousel = function(content) {
    this.show("carousel", content);
  };
  CrispMessage.prototype.markAsRead = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "do", "message:read" ]);
  };
  CrispMessage.prototype.startThread = function(name) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "do", "message:thread:start", [ name ] ]);
  };
  CrispMessage.prototype.endThread = function(name) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "do", "message:thread:end", [ name ] ]);
  };
  CrispMessage.prototype.onMessageSent = function(callback) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "message:sent" ]);
    window.$crisp.push([ "on", "message:sent", callback ]);
  };
  CrispMessage.prototype.onMessageReceived = function(callback) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "message:received" ]);
    window.$crisp.push([ "on", "message:received", callback ]);
  };
  CrispMessage.prototype.onMessageComposeSent = function(callback) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "message:compose:sent" ]);
    window.$crisp.push([ "on", "message:compose:sent", callback ]);
  };
  CrispMessage.prototype.onMessageComposeReceived = function(callback) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "message:compose:received" ]);
    window.$crisp.push([ "on", "message:compose:received", callback ]);
  };
  return CrispMessage;
}();

var CrispUser = function() {
  function CrispUser(crisp) {
    this.parent = crisp;
  }
  CrispUser.prototype.setNickname = function(nickname) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "set", "user:nickname", [ nickname ] ]);
  };
  CrispUser.prototype.setEmail = function(email, hmac) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "set", "user:email", [ email, hmac ] ]);
  };
  CrispUser.prototype.setPhone = function(phone) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "set", "user:phone", [ phone ] ]);
  };
  CrispUser.prototype.setAvatar = function(avatar) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "set", "user:avatar", [ avatar ] ]);
  };
  CrispUser.prototype.setCompany = function(name, data) {
    var _payload = {};
    if (data && data.url) {
      _payload.url = data.url;
    }
    if (data && data.description) {
      _payload.description = data.description;
    }
    if (data && data.employment) {
      _payload.employment = [ data.employment.title ];
      if (data.employment.role) {
        _payload.employment.push(data.employment.role);
      }
    }
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "set", "user:company", [ name, _payload ] ]);
  };
  CrispUser.prototype.getEmail = function() {
    if (!this.parent.isCrispInjected()) {
      return null;
    }
    return window.$crisp.get("user:email");
  };
  CrispUser.prototype.getPhone = function() {
    if (!this.parent.isCrispInjected()) {
      return null;
    }
    return window.$crisp.get("user:phone");
  };
  CrispUser.prototype.getNickname = function() {
    if (!this.parent.isCrispInjected()) {
      return null;
    }
    return window.$crisp.get("user:nickname");
  };
  CrispUser.prototype.getAvatar = function() {
    if (!this.parent.isCrispInjected()) {
      return null;
    }
    return window.$crisp.get("user:avatar");
  };
  CrispUser.prototype.getCompany = function() {
    if (!this.parent.isCrispInjected()) {
      return null;
    }
    return window.$crisp.get("user:company");
  };
  CrispUser.prototype.onEmailChanged = function(callback) {
    if (this.parent.isCrispInjected()) {
      window.$crisp.push([ "off", "user:email:changed" ]);
      window.$crisp.push([ "on", "user:email:changed", callback ]);
    }
  };
  CrispUser.prototype.onPhoneChanged = function(callback) {
    if (this.parent.isCrispInjected()) {
      window.$crisp.push([ "off", "user:phone:changed" ]);
      window.$crisp.push([ "on", "user:phone:changed", callback ]);
    }
  };
  CrispUser.prototype.onNicknameChanged = function(callback) {
    if (this.parent.isCrispInjected()) {
      window.$crisp.push([ "off", "user:nickname:changed" ]);
      window.$crisp.push([ "on", "user:nickname:changed", callback ]);
    }
  };
  CrispUser.prototype.onAvatarChanged = function(callback) {
    if (this.parent.isCrispInjected()) {
      window.$crisp.push([ "off", "user:avatar:changed" ]);
      window.$crisp.push([ "on", "user:avatar:changed", callback ]);
    }
  };
  return CrispUser;
}();

var CrispTrigger = function() {
  function CrispTrigger(crisp) {
    this.parent = crisp;
  }
  CrispTrigger.prototype.run = function(name) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "do", "trigger:run", [ name ] ]);
  };
  return CrispTrigger;
}();

var EventsColors;

(function(EventsColors) {
  EventsColors["Red"] = "red";
  EventsColors["Orange"] = "orange";
  EventsColors["Yellow"] = "yellow";
  EventsColors["Green"] = "green";
  EventsColors["Blue"] = "blue";
  EventsColors["Purple"] = "purple";
  EventsColors["Pink"] = "pink";
  EventsColors["Brown"] = "brown";
  EventsColors["Grey"] = "grey";
  EventsColors["Black"] = "black";
})(EventsColors || (EventsColors = {}));

var CrispSession = function() {
  function CrispSession(crisp) {
    this.parent = crisp;
  }
  CrispSession.prototype.reset = function(reload) {
    if (reload === void 0) {
      reload = false;
    }
    if (this.parent.isCrispInjected()) {
      window.$crisp.do("session:reset", [ reload ]);
    }
  };
  CrispSession.prototype.setSegments = function(segments, overwrite) {
    this.parent.createSingletonIfNecessary();
    $crisp.push([ "set", "session:segments", [ segments, overwrite ] ]);
  };
  CrispSession.prototype.setData = function(data) {
    var _this = this;
    var _payload = [];
    Object.entries(data).forEach((function(item) {
      if (_this.isValidDataValue(item[0])) {
        _payload.push([ item[0], item[1] ]);
      }
    }));
    this.parent.createSingletonIfNecessary();
    $crisp.push([ "set", "session:data", [ _payload ] ]);
  };
  CrispSession.prototype.pushEvent = function(name, data, color) {
    if (data === void 0) {
      data = {};
    }
    if (color === void 0) {
      color = EventsColors.Blue;
    }
    if (this.parent.isCrispInjected()) {
      window.$crisp.push([ "set", "session:event", [ [ [ name, data, color ] ] ] ]);
    }
  };
  CrispSession.prototype.getData = function(key) {
    if (!this.parent.isCrispInjected()) {
      return undefined;
    }
    return window.$crisp.get("session:data", key);
  };
  CrispSession.prototype.getIdentifier = function() {
    if (!this.parent.isCrispInjected()) {
      return null;
    }
    return window.$crisp.get("session:identifier");
  };
  CrispSession.prototype.onLoaded = function(callback) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "session:loaded" ]);
    window.$crisp.push([ "on", "session:loaded", callback ]);
  };
  CrispSession.prototype.isValidDataValue = function(value) {
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
  };
  return CrispSession;
}();

var CrispChat = function() {
  function CrispChat(crisp) {
    this.parent = crisp;
  }
  CrispChat.prototype.show = function() {
    this.parent.autoInjectIfNecessary();
    window.$crisp.push([ "do", "chat:show" ]);
  };
  CrispChat.prototype.hide = function() {
    this.parent.autoInjectIfNecessary();
    window.$crisp.push([ "do", "chat:hide" ]);
  };
  CrispChat.prototype.open = function() {
    this.parent.autoInjectIfNecessary();
    window.$crisp.push([ "do", "chat:open" ]);
  };
  CrispChat.prototype.close = function() {
    if (this.parent.isCrispInjected()) {
      window.$crisp.push([ "do", "chat:close" ]);
    }
  };
  CrispChat.prototype.setHelpdeskView = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "do", "helpdesk:search" ]);
  };
  CrispChat.prototype.openHelpdeskArticle = function(locale, slug, title, category) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "do", "helpdesk:article:open", [ locale, slug, title, category ] ]);
  };
  CrispChat.prototype.queryHelpdesk = function(query) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "do", "helpdesk:query", [ query ] ]);
  };
  CrispChat.prototype.unreadCount = function() {
    if (!this.parent.isCrispInjected()) {
      return 0;
    }
    return window.$crisp.get("chat:unread:count");
  };
  CrispChat.prototype.isChatOpened = function() {
    if (!this.parent.isCrispInjected()) {
      return false;
    }
    return window.$crisp.is("chat:opened");
  };
  CrispChat.prototype.isVisible = function() {
    if (!this.parent.isCrispInjected()) {
      return false;
    }
    return window.$crisp.is("chat:visible");
  };
  CrispChat.prototype.onChatInitiated = function(callback) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "chat:initiated" ]);
    window.$crisp.push([ "on", "chat:initiated", callback ]);
  };
  CrispChat.prototype.onChatOpened = function(callback) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "chat:opened" ]);
    window.$crisp.push([ "on", "chat:opened", callback ]);
  };
  CrispChat.prototype.onChatClosed = function(callback) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "chat:closed" ]);
    window.$crisp.push([ "on", "chat:closed", callback ]);
  };
  CrispChat.prototype.onHelpdeskQueried = function(callback) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "helpdesk:queried" ]);
    window.$crisp.push([ "on", "helpdesk:queried", callback ]);
  };
  return CrispChat;
}();

var ChatboxColors;

(function(ChatboxColors) {
  ChatboxColors["Default"] = "default";
  ChatboxColors["Amber"] = "amber";
  ChatboxColors["Black"] = "black";
  ChatboxColors["Blue"] = "blue";
  ChatboxColors["BlueGrey"] = "blue_grey";
  ChatboxColors["LightBlue"] = "light_blue";
  ChatboxColors["Brown"] = "brown";
  ChatboxColors["Cyan"] = "cyan";
  ChatboxColors["Green"] = "green";
  ChatboxColors["LightGreen"] = "light_green";
  ChatboxColors["Grey"] = "grey";
  ChatboxColors["Indigo"] = "indigo";
  ChatboxColors["Orange"] = "orange";
  ChatboxColors["DeepOrange"] = "deep_orange";
  ChatboxColors["Pink"] = "pink";
  ChatboxColors["Purple"] = "purple";
  ChatboxColors["DeepPurple"] = "deep_purple";
  ChatboxColors["Red"] = "red";
  ChatboxColors["Teal"] = "teal";
})(ChatboxColors || (ChatboxColors = {}));

var ChatboxPosition;

(function(ChatboxPosition) {
  ChatboxPosition["Left"] = "left";
  ChatboxPosition["Right"] = "right";
})(ChatboxPosition || (ChatboxPosition = {}));

var Crisp = function() {
  function Crisp() {
    this.clientUrl = "https://client.crisp.chat/l.js";
    this.websiteId = "";
    this.autoload = true;
    this.injected = false;
    this.chat = new CrispChat(this);
    this.session = new CrispSession(this);
    this.user = new CrispUser(this);
    this.message = new CrispMessage(this);
    this.trigger = new CrispTrigger(this);
  }
  Crisp.prototype.configure = function(websiteId, options) {
    if (options === void 0) {
      options = {};
    }
    this.websiteId = websiteId;
    this.tokenId = options.tokenId;
    this.locale = options.locale;
    this.sessionMerge = options.sessionMerge;
    this.cookieDomain = options.cookieDomain;
    this.cookieExpire = options.cookieExpire;
    this.lockFullview = options.lockFullview;
    this.lockMaximized = options.lockMaximized;
    this.safeMode = options.safeMode;
    if (options.clientUrl !== undefined) {
      this.clientUrl = options.clientUrl;
    }
    if (options.autoload !== undefined) {
      this.autoload = options.autoload;
    }
    if (this.autoload) {
      this.load();
    }
  };
  Crisp.prototype.load = function() {
    var _head = document.getElementsByTagName("head");
    this.createSingletonIfNecessary();
    if (this.isCrispInjected() === true) {
      return;
    }
    if (!this.websiteId) {
      throw new Error("websiteId must be set before loading Crisp");
    }
    window.CRISP_WEBSITE_ID = this.websiteId;
    window.CRISP_RUNTIME_CONFIG = {};
    if (this.tokenId) {
      window.CRISP_TOKEN_ID = this.tokenId;
    }
    if (this.sessionMerge) {
      window.CRISP_RUNTIME_CONFIG.session_merge = true;
    }
    if (this.locale) {
      window.CRISP_RUNTIME_CONFIG.locale = this.locale;
    }
    if (this.lockFullview) {
      window.CRISP_RUNTIME_CONFIG.lock_full_view = true;
    }
    if (this.lockMaximized) {
      window.CRISP_RUNTIME_CONFIG.lock_maximized = true;
    }
    if (this.cookieDomain) {
      window.CRISP_COOKIE_DOMAIN = this.cookieDomain;
    }
    if (this.cookieExpire) {
      window.CRISP_COOKIE_EXPIRE = this.cookieExpire;
    }
    if (!_head || !_head[0]) {
      return this.deferredLoading();
    }
    if (this.safeMode === true) {
      this.setSafeMode(true);
    }
    var _script = document.createElement("script");
    _script.src = this.clientUrl;
    _script.async = true;
    _head[0].appendChild(_script);
    this.injected = true;
  };
  Crisp.prototype.setTokenId = function(tokenId) {
    this.tokenId = tokenId;
    if (this.isCrispInjected() === true) {
      if (tokenId) {
        window.CRISP_TOKEN_ID = tokenId;
      } else {
        delete window.CRISP_TOKEN_ID;
      }
    }
  };
  Crisp.prototype.setZIndex = function(zIndex) {
    this.createSingletonIfNecessary();
    window.$crisp.push([ "config", "container:index", [ zIndex ] ]);
  };
  Crisp.prototype.setColorTheme = function(color) {
    this.createSingletonIfNecessary();
    window.$crisp.push([ "config", "color:theme", [ color ] ]);
  };
  Crisp.prototype.setHideOnAway = function(enabled) {
    this.createSingletonIfNecessary();
    window.$crisp.push([ "config", "hide:on:away", [ enabled ] ]);
  };
  Crisp.prototype.setHideOnMobile = function(enabled) {
    this.createSingletonIfNecessary();
    window.$crisp.push([ "config", "hide:on:mobile", [ enabled ] ]);
  };
  Crisp.prototype.setPosition = function(position) {
    this.createSingletonIfNecessary();
    $crisp.push([ "config", "position:reverse", [ position === ChatboxPosition.Left ] ]);
  };
  Crisp.prototype.setAvailabilityTooltip = function(enabled) {
    this.createSingletonIfNecessary();
    window.$crisp.push([ "config", "availability:tooltip", [ enabled ] ]);
  };
  Crisp.prototype.setVacationMode = function(enabled) {
    this.createSingletonIfNecessary();
    window.$crisp.push([ "config", "hide:vacation", [ enabled ] ]);
  };
  Crisp.prototype.setSafeMode = function(safe) {
    if (safe === void 0) {
      safe = true;
    }
    this.createSingletonIfNecessary();
    window.$crisp.push([ "safe", safe ]);
  };
  Crisp.prototype.muteSound = function(mute) {
    this.createSingletonIfNecessary();
    window.$crisp.push([ "config", "sound:mute", [ mute ] ]);
  };
  Crisp.prototype.toggleOperatorCount = function(enabled) {
    this.createSingletonIfNecessary();
    window.$crisp.push([ "config", "show:operator:count", [ enabled ] ]);
  };
  Crisp.prototype.onWebsiteAvailabilityChanged = function(callback) {
    this.createSingletonIfNecessary();
    window.$crisp.push([ "off", "website:availability:changed" ]);
    window.$crisp.push([ "on", "website:availability:changed", callback ]);
  };
  Crisp.prototype.createSingletonIfNecessary = function() {
    if (window.$crisp === undefined) {
      window.$crisp = [];
    }
  };
  Crisp.prototype.autoInjectIfNecessary = function() {
    if (!this.isCrispInjected()) {
      this.load();
    }
  };
  Crisp.prototype.isCrispInjected = function() {
    if (this.injected === true || window.$crisp && window.$crisp.is) {
      return true;
    }
    return false;
  };
  Crisp.prototype.deferredLoading = function() {
    var _this = this;
    document.addEventListener("DOMContentLoaded", (function() {
      _this.load();
    }));
  };
  return Crisp;
}();

var singleton = new Crisp;

class CrispController extends Controller {
  static values={
    websiteId: String,
    identification: Object
  };
  connect() {
    singleton.configure(this.websiteIdValue);
    if (Object.keys(this.identificationValue).length) {
      const {email: email, name: name} = this.identificationValue;
      singleton.user.setEmail(email);
      singleton.user.setNickname(name);
    }
  }
  open(e) {
    e.preventDefault();
    singleton.chat.open();
  }
}

function registerControllers(application) {
  application.register("shepherd", ShepherdController);
  application.register("post-hog", PostHogController);
  application.register("crisp", CrispController);
}

export { CrispController, PostHogController, ShepherdController, registerControllers };
