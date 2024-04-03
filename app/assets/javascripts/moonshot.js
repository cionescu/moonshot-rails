import { Controller } from "@hotwired/stimulus";

import { post } from "@rails/request.js";

function e(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter((function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    }))), n.push.apply(n, i);
  }
  return n;
}

function t(t) {
  for (var n = 1; n < arguments.length; n++) {
    var i = null != arguments[n] ? arguments[n] : {};
    n % 2 ? e(Object(i), !0).forEach((function(e) {
      o(t, e, i[e]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach((function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
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

function i(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function r(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
    Object.defineProperty(e, i.key, i);
  }
}

function s(e, t, n) {
  return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function a(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {}, s = Object.keys(e);
    for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}

function u(e, t) {
  return function(e) {
    if (Array.isArray(e)) return e;
  }(e) || function(e, t) {
    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null == n) return;
    var i, r, s = [], o = !0, a = !1;
    try {
      for (n = n.call(e); !(o = (i = n.next()).done) && (s.push(i.value), !t || s.length !== t); o = !0) ;
    } catch (e) {
      a = !0, r = e;
    } finally {
      try {
        o || null == n.return || n.return();
      } finally {
        if (a) throw r;
      }
    }
    return s;
  }(e, t) || c(e, t) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function l(e) {
  return function(e) {
    if (Array.isArray(e)) return d(e);
  }(e) || function(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || c(e) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function c(e, t) {
  if (e) {
    if ("string" == typeof e) return d(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
  }
}

function d(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
  return i;
}

function h(e, t) {
  var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = c(e)) || t && e && "number" == typeof e.length) {
      n && (e = n);
      var i = 0, r = function() {};
      return {
        s: r,
        n: function() {
          return i >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[i++]
          };
        },
        e: function(e) {
          throw e;
        },
        f: r
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var s, o = !0, a = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var e = n.next();
      return o = e.done, e;
    },
    e: function(e) {
      a = !0, s = e;
    },
    f: function() {
      try {
        o || null == n.return || n.return();
      } finally {
        if (a) throw s;
      }
    }
  };
}

var f = {
  DEBUG: !1,
  LIB_VERSION: "1.116.6"
}, p = Array.isArray, g = Object.prototype, v = g.hasOwnProperty, _ = g.toString, m = p || function(e) {
  return "[object Array]" === _.call(e);
}, y = function(e) {
  return "function" == typeof e;
}, b = function(e) {
  return e === Object(e) && !m(e);
}, w = function(e) {
  return void 0 === e;
}, k = function(e) {
  return "[object String]" == _.call(e);
}, S = function(e) {
  return null === e;
}, F = function(e) {
  return w(e) || S(e);
}, R = function(e) {
  return "[object Number]" == _.call(e);
}, x = function(e) {
  return "[object Boolean]" === _.call(e);
}, E = function(e) {
  return e instanceof FormData;
}, P = "undefined" != typeof window ? window : void 0, I = "undefined" != typeof globalThis ? globalThis : P, C = Array.prototype, T = C.forEach, $ = C.indexOf, A = null == I ? void 0 : I.navigator, O = null == I ? void 0 : I.document, M = null == I ? void 0 : I.location, q = null == I ? void 0 : I.fetch, D = null != I && I.XMLHttpRequest && "withCredentials" in new I.XMLHttpRequest ? I.XMLHttpRequest : void 0, L = null == I ? void 0 : I.AbortController, N = null == A ? void 0 : A.userAgent, B = null != P ? P : {}, H = "[PostHog.js]", j = {
  _log: function(e) {
    if (P && (f.DEBUG || B.POSTHOG_DEBUG) && !w(P.console) && P.console) {
      for (var t = ("__rrweb_original__" in P.console[e] ? P.console[e].__rrweb_original__ : P.console[e]), n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
      t.apply(void 0, [ H ].concat(i));
    }
  },
  info: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    j._log.apply(j, [ "log" ].concat(t));
  },
  warn: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    j._log.apply(j, [ "warn" ].concat(t));
  },
  error: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    j._log.apply(j, [ "error" ].concat(t));
  },
  critical: function() {
    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
    (e = console).error.apply(e, [ H ].concat(n));
  },
  uninitializedWarning: function(e) {
    j.error("You must initialize PostHog before calling ".concat(e));
  }
}, U = {}, V = function(e) {
  return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};

function W(e, t, n) {
  if (m(e)) if (T && e.forEach === T) e.forEach(t, n); else if ("length" in e && e.length === +e.length) for (var i = 0, r = e.length; i < r; i++) if (i in e && t.call(n, e[i], i) === U) return;
}

function z(e, t, n) {
  if (!F(e)) {
    if (m(e)) return W(e, t, n);
    if (E(e)) {
      var i, r = h(e.entries());
      try {
        for (r.s(); !(i = r.n()).done; ) {
          var s = i.value;
          if (t.call(n, s[1], s[0]) === U) return;
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    } else for (var o in e) if (v.call(e, o) && t.call(n, e[o], o) === U) return;
  }
}

var G = function(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
  return W(n, (function(t) {
    for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
  })), e;
};

function Q(e, t) {
  return -1 !== e.indexOf(t);
}

function Y(e) {
  for (var t = Object.keys(e), n = t.length, i = new Array(n); n--; ) i[n] = [ t[n], e[t[n]] ];
  return i;
}

var J = function() {
  return Date.now = Date.now || function() {
    return +new Date;
  }, Date.now();
}, K = function(e) {
  try {
    return e();
  } catch (e) {
    return;
  }
}, X = function(e) {
  return function() {
    try {
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return e.apply(this, n);
    } catch (e) {
      j.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), 
      j.critical(e);
    }
  };
}, Z = function(e) {
  var t = {};
  return z(e, (function(e, n) {
    k(e) && e.length > 0 && (t[n] = e);
  })), t;
};

function ee(e, t) {
  return n = e, i = function(e) {
    return k(e) && !S(t) ? e.slice(0, t) : e;
  }, r = new Set, function e(t, n) {
    return t !== Object(t) ? i ? i(t, n) : t : r.has(t) ? void 0 : (r.add(t), m(t) ? (s = [], 
    W(t, (function(t) {
      s.push(e(t));
    }))) : (s = {}, z(t, (function(t, n) {
      r.has(t) || (s[n] = e(t, n));
    }))), s);
    var s;
  }(n);
  var n, i, r;
}

var te = function(e) {
  var t, n, i, r, s = "";
  for (t = n = 0, i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, 
  r = 0; r < i; r++) {
    var o = e.charCodeAt(r), a = null;
    o < 128 ? n++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), 
    S(a) || (n > t && (s += e.substring(t, n)), s += a, t = n = r + 1);
  }
  return n > t && (s += e.substring(t, e.length)), s;
}, ne = function() {
  function e(t) {
    return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), 
    t;
  }
  return e.preventDefault = function() {
    this.returnValue = !1;
  }, e.stopPropagation = function() {
    this.cancelBubble = !0;
  }, function(t, n, i, r, s) {
    if (t) if (t.addEventListener && !r) t.addEventListener(n, i, !!s); else {
      var o = "on" + n, a = t[o];
      t[o] = function(t, n, i) {
        return function(r) {
          if (r = r || e(null == P ? void 0 : P.event)) {
            var s, o = !0;
            y(i) && (s = i(r));
            var a = n.call(t, r);
            return !1 !== s && !1 !== a || (o = !1), o;
          }
        };
      }(t, i, a);
    } else j.error("No valid element provided to register_event");
  };
}();

function ie(e, t) {
  var n = function() {
    if (!O) return t("document not found");
    var n = O.createElement("script");
    n.type = "text/javascript", n.src = e, n.onload = function(e) {
      return t(void 0, e);
    }, n.onerror = function(e) {
      return t(e);
    };
    var i, r = O.querySelectorAll("body > script");
    r.length > 0 ? null === (i = r[0].parentNode) || void 0 === i || i.insertBefore(n, r[0]) : O.body.appendChild(n);
  };
  null != O && O.body ? n() : null == O || O.addEventListener("DOMContentLoaded", n);
}

function re(e) {
  return e ? V(e).split(/\s+/) : [];
}

function se(e) {
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
  return re(t);
}

function oe(e) {
  return F(e) ? null : V(e).split(/(\s+)/).filter((function(e) {
    return Se(e);
  })).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}

function ae(e) {
  var t = "";
  return ge(e) && !ve(e) && e.childNodes && e.childNodes.length && z(e.childNodes, (function(e) {
    var n;
    ce(e) && e.textContent && (t += null !== (n = oe(e.textContent)) && void 0 !== n ? n : "");
  })), V(t);
}

function ue(e) {
  return !!e && 1 === e.nodeType;
}

function le(e, t) {
  return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}

function ce(e) {
  return !!e && 3 === e.nodeType;
}

function de(e) {
  return !!e && 11 === e.nodeType;
}

var he = [ "a", "button", "form", "input", "select", "textarea", "label" ];

function fe(e) {
  var t = e.parentNode;
  return !(!t || !ue(t)) && t;
}

function pe(e, t) {
  var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
  if (!P || !e || le(e, "html") || !ue(e)) return !1;
  if (null != i && i.url_allowlist) {
    var o = P.location.href, a = i.url_allowlist;
    if (a && !a.some((function(e) {
      return o.match(e);
    }))) return !1;
  }
  if (null != i && i.dom_event_allowlist) {
    var u = i.dom_event_allowlist;
    if (u && !u.some((function(e) {
      return t.type === e;
    }))) return !1;
  }
  for (var l = !1, c = [ e ], d = !0, f = e; f.parentNode && !le(f, "body"); ) if (de(f.parentNode)) c.push(f.parentNode.host), 
  f = f.parentNode.host; else {
    if (!(d = fe(f))) break;
    if (r || he.indexOf(d.tagName.toLowerCase()) > -1) l = !0; else {
      var p = P.getComputedStyle(d);
      p && "pointer" === p.getPropertyValue("cursor") && (l = !0);
    }
    c.push(d), f = d;
  }
  if (!function(e, t) {
    var i = null == t ? void 0 : t.element_allowlist;
    if (w(i)) return !0;
    var r, s = h(e);
    try {
      var o = function() {
        var e = r.value;
        if (i.some((function(t) {
          return e.tagName.toLowerCase() === t;
        }))) return {
          v: !0
        };
      };
      for (s.s(); !(r = s.n()).done; ) {
        var a = o();
        if ("object" === n(a)) return a.v;
      }
    } catch (e) {
      s.e(e);
    } finally {
      s.f();
    }
    return !1;
  }(c, i)) return !1;
  if (!function(e, t) {
    var i = null == t ? void 0 : t.css_selector_allowlist;
    if (w(i)) return !0;
    var r, s = h(e);
    try {
      var o = function() {
        var e = r.value;
        if (i.some((function(t) {
          return e.matches(t);
        }))) return {
          v: !0
        };
      };
      for (s.s(); !(r = s.n()).done; ) {
        var a = o();
        if ("object" === n(a)) return a.v;
      }
    } catch (e) {
      s.e(e);
    } finally {
      s.f();
    }
    return !1;
  }(c, i)) return !1;
  var g = P.getComputedStyle(e);
  if (g && "pointer" === g.getPropertyValue("cursor") && "click" === t.type) return !0;
  var v = e.tagName.toLowerCase();
  switch (v) {
   case "html":
    return !1;

   case "form":
    return (s || [ "submit" ]).indexOf(t.type) >= 0;

   case "input":
   case "select":
   case "textarea":
    return (s || [ "change", "click" ]).indexOf(t.type) >= 0;

   default:
    return l ? (s || [ "click" ]).indexOf(t.type) >= 0 : (s || [ "click" ]).indexOf(t.type) >= 0 && (he.indexOf(v) > -1 || "true" === e.getAttribute("contenteditable"));
  }
}

function ge(e) {
  for (var t = e; t.parentNode && !le(t, "body"); t = t.parentNode) {
    var n = se(t);
    if (Q(n, "ph-sensitive") || Q(n, "ph-no-capture")) return !1;
  }
  if (Q(se(e), "ph-include")) return !0;
  var i = e.type || "";
  if (k(i)) switch (i.toLowerCase()) {
   case "hidden":
   case "password":
    return !1;
  }
  var r = e.name || e.id || "";
  if (k(r)) {
    if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g, ""))) return !1;
  }
  return !0;
}

function ve(e) {
  return !!(le(e, "input") && ![ "button", "checkbox", "submit", "reset" ].includes(e.type) || le(e, "select") || le(e, "textarea") || "true" === e.getAttribute("contenteditable"));
}

var _e = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})", me = new RegExp("^(?:".concat(_e, ")$")), ye = new RegExp(_e), be = "\\d{3}-?\\d{2}-?\\d{4}", we = new RegExp("^(".concat(be, ")$")), ke = new RegExp("(".concat(be, ")"));

function Se(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (F(e)) return !1;
  if (k(e)) {
    if (e = V(e), (t ? me : ye).test((e || "").replace(/[- ]/g, ""))) return !1;
    if ((t ? we : ke).test(e)) return !1;
  }
  return !0;
}

function Fe(e) {
  var t = ae(e);
  return Se(t = "".concat(t, " ").concat(Re(e)).trim()) ? t : "";
}

function Re(e) {
  var t = "";
  return e && e.childNodes && e.childNodes.length && z(e.childNodes, (function(e) {
    var n;
    if (e && "span" === (null === (n = e.tagName) || void 0 === n ? void 0 : n.toLowerCase())) try {
      var i = ae(e);
      t = "".concat(t, " ").concat(i).trim(), e.childNodes && e.childNodes.length && (t = "".concat(t, " ").concat(Re(e)).trim());
    } catch (e) {
      j.error(e);
    }
  })), t;
}

function xe(e) {
  return function(e) {
    var n = e.map((function(e) {
      var n, i, r = "";
      if (e.tag_name && (r += e.tag_name), e.attr_class) {
        e.attr_class.sort();
        var s, o = h(e.attr_class);
        try {
          for (o.s(); !(s = o.n()).done; ) {
            var a = s.value;
            r += ".".concat(a.replace(/"/g, ""));
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
      }
      var l = t(t(t(t({}, e.text ? {
        text: e.text
      } : {}), {}, {
        "nth-child": null !== (n = e.nth_child) && void 0 !== n ? n : 0,
        "nth-of-type": null !== (i = e.nth_of_type) && void 0 !== i ? i : 0
      }, e.href ? {
        href: e.href
      } : {}), e.attr_id ? {
        attr_id: e.attr_id
      } : {}), e.attributes), c = {};
      return Y(l).sort((function(e, t) {
        var n = u(e, 1)[0], i = u(t, 1)[0];
        return n.localeCompare(i);
      })).forEach((function(e) {
        var t = u(e, 2), n = t[0], i = t[1];
        return c[Ee(n.toString())] = Ee(i.toString());
      })), r += ":", r += Y(l).map((function(e) {
        var t = u(e, 2), n = t[0], i = t[1];
        return "".concat(n, '="').concat(i, '"');
      })).join("");
    }));
    return n.join(";");
  }(function(e) {
    return e.map((function(e) {
      var t, n, i = {
        text: null === (t = e.$el_text) || void 0 === t ? void 0 : t.slice(0, 400),
        tag_name: e.tag_name,
        href: null === (n = e.attr__href) || void 0 === n ? void 0 : n.slice(0, 2048),
        attr_class: Pe(e),
        attr_id: e.attr__id,
        nth_child: e.nth_child,
        nth_of_type: e.nth_of_type,
        attributes: {}
      };
      return Y(e).filter((function(e) {
        return 0 === u(e, 1)[0].indexOf("attr__");
      })).forEach((function(e) {
        var t = u(e, 2), n = t[0], r = t[1];
        return i.attributes[n] = r;
      })), i;
    }));
  }(e));
}

function Ee(e) {
  return e.replace(/"|\\"/g, '\\"');
}

function Pe(e) {
  var t = e.attr__class;
  return t ? m(t) ? t : re(t) : void 0;
}

var Ie = function() {
  function e(t) {
    i(this, e), this.clicks = [], this.enabled = t;
  }
  return s(e, [ {
    key: "isRageClick",
    value: function(e, t, n) {
      if (!this.enabled) return !1;
      var i = this.clicks[this.clicks.length - 1];
      if (i && Math.abs(e - i.x) + Math.abs(t - i.y) < 30 && n - i.timestamp < 1e3) {
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
}(), Ce = "$people_distinct_id", Te = "__alias", $e = "__timers", Ae = "$autocapture_disabled_server_side", Oe = "$session_recording_enabled_server_side", Me = "$console_log_recording_enabled_server_side", qe = "$session_recording_network_payload_capture", De = "$session_recording_canvas_recording", Le = "$sesid", Ne = "$session_is_sampled", Be = "$enabled_feature_flags", He = "$early_access_features", je = "$stored_person_properties", Ue = "$stored_group_properties", Ve = "$surveys", We = "$flag_call_reported", ze = "$user_state", Ge = "$posthog_quota_limited", Qe = "$client_session_props", Ye = [ Ce, Te, "__cmpns", $e, Oe, Le, Be, ze, Ge, He, Ue, je, Ve, We, Qe ], Je = "$copy_autocapture";

function Ke(e, t) {
  return t.length > e ? t.slice(0, e) + "..." : t;
}

var Xe, Ze = {
  _initializedTokens: [],
  _isDisabledServerSide: null,
  _isAutocaptureEnabled: !1,
  _setIsAutocaptureEnabled: function(e) {
    var t, n = S(this._isDisabledServerSide) ? !(null === (t = e.persistence) || void 0 === t || !t.props[Ae]) : this._isDisabledServerSide, i = !!e.config.autocapture;
    this._isAutocaptureEnabled = i && !n;
  },
  _previousElementSibling: function(e) {
    if (e.previousElementSibling) return e.previousElementSibling;
    var t = e;
    do {
      t = t.previousSibling;
    } while (t && !ue(t));
    return t;
  },
  _getAugmentPropertiesFromElement: function(e) {
    if (!ge(e)) return {};
    var t = {};
    return z(e.attributes, (function(e) {
      if (0 === e.name.indexOf("data-ph-capture-attribute")) {
        var n = e.name.replace("data-ph-capture-attribute-", ""), i = e.value;
        n && i && Se(i) && (t[n] = i);
      }
    })), t;
  },
  _getPropertiesFromElement: function(e, t, n) {
    var i, r = e.tagName.toLowerCase(), s = {
      tag_name: r
    };
    he.indexOf(r) > -1 && !n && ("a" === r.toLowerCase() || "button" === r.toLowerCase() ? s.$el_text = Ke(1024, Fe(e)) : s.$el_text = Ke(1024, ae(e)));
    var o = se(e);
    o.length > 0 && (s.classes = o.filter((function(e) {
      return "" !== e;
    })));
    var a = null === (i = this.config) || void 0 === i ? void 0 : i.element_attribute_ignorelist;
    z(e.attributes, (function(n) {
      var i;
      if ((!ve(e) || -1 !== [ "name", "id", "class" ].indexOf(n.name)) && ((null == a || !a.includes(n.name)) && !t && Se(n.value) && (i = n.name, 
      !k(i) || "_ngcontent" !== i.substring(0, 10) && "_nghost" !== i.substring(0, 7)))) {
        var r = n.value;
        "class" === n.name && (r = re(r).join(" ")), s["attr__" + n.name] = Ke(1024, r);
      }
    }));
    for (var u = 1, l = 1, c = e; c = this._previousElementSibling(c); ) u++, c.tagName === e.tagName && l++;
    return s.nth_child = u, s.nth_of_type = l, s;
  },
  _getDefaultProperties: function(e) {
    return {
      $event_type: e,
      $ce_version: 1
    };
  },
  _extractCustomPropertyValue: function(e) {
    var t = [];
    return z(null == O ? void 0 : O.querySelectorAll(e.css_selector), (function(e) {
      var n;
      [ "input", "select" ].indexOf(e.tagName.toLowerCase()) > -1 ? n = e.value : e.textContent && (n = e.textContent), 
      Se(n) && t.push(n);
    })), t.join(", ");
  },
  _getCustomProperties: function(e) {
    var t = this, n = {};
    return z(this._customProperties, (function(i) {
      z(i.event_selectors, (function(r) {
        z(null == O ? void 0 : O.querySelectorAll(r), (function(r) {
          Q(e, r) && ge(r) && (n[i.name] = t._extractCustomPropertyValue(i));
        }));
      }));
    })), n;
  },
  _getEventTarget: function(e) {
    return w(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
    var t;
  },
  _captureEvent: function(e, t) {
    var n, i = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "$autocapture", s = arguments.length > 3 ? arguments[3] : void 0, o = this._getEventTarget(e);
    (ce(o) && (o = o.parentNode || null), "$autocapture" === r && "click" === e.type && e instanceof MouseEvent) && (null !== (n = this.rageclicks) && void 0 !== n && n.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, t, "$rageclick"));
    var a = r === Je;
    if (o && pe(o, e, this.config, a, a ? [ "copy", "cut" ] : void 0)) {
      for (var u, l, c = [ o ], d = o; d.parentNode && !le(d, "body"); ) de(d.parentNode) ? (c.push(d.parentNode.host), 
      d = d.parentNode.host) : (c.push(d.parentNode), d = d.parentNode);
      var h, f = [], p = {}, g = !1;
      if (z(c, (function(e) {
        var n = ge(e);
        "a" === e.tagName.toLowerCase() && (h = e.getAttribute("href"), h = n && Se(h) && h), 
        Q(se(e), "ph-no-capture") && (g = !0), f.push(i._getPropertiesFromElement(e, t.config.mask_all_element_attributes, t.config.mask_all_text));
        var r = i._getAugmentPropertiesFromElement(e);
        G(p, r);
      })), t.config.mask_all_text || ("a" === o.tagName.toLowerCase() || "button" === o.tagName.toLowerCase() ? f[0].$el_text = Fe(o) : f[0].$el_text = ae(o)), 
      h && (f[0].attr__href = h), g) return !1;
      var v = G(this._getDefaultProperties(e.type), t.elementsChainAsString ? {
        $elements_chain: xe(f)
      } : {
        $elements: f
      }, null !== (u = f[0]) && void 0 !== u && u.$el_text ? {
        $el_text: null === (l = f[0]) || void 0 === l ? void 0 : l.$el_text
      } : {}, this._getCustomProperties(c), p, s || {});
      if (r === Je) {
        var _, m = oe(null == P || null === (_ = P.getSelection()) || void 0 === _ ? void 0 : _.toString()), y = e.type || "clipboard";
        if (!m) return !1;
        v.$selected_content = m, v.$copy_type = y;
      }
      return t.capture(r, v), !0;
    }
  },
  _navigate: function(e) {
    P && (P.location.href = e);
  },
  _addDomEventHandlers: function(e) {
    var t = this;
    if (P && O) {
      var n = function(n) {
        n = n || (null == P ? void 0 : P.event), t._captureEvent(n, e);
      }, i = function(n) {
        n = n || (null == P ? void 0 : P.event), t._captureEvent(n, e, Je);
      };
      ne(O, "submit", n, !1, !0), ne(O, "change", n, !1, !0), ne(O, "click", n, !1, !0), 
      b(e.config.autocapture) && e.config.autocapture.capture_copied_text && (ne(O, "copy", i, !1, !0), 
      ne(O, "cut", i, !1, !0));
    }
  },
  _customProperties: [],
  rageclicks: null,
  config: void 0,
  init: function(e) {
    var t;
    x(e.__autocapture) || (this.config = e.__autocapture), null !== (t = this.config) && void 0 !== t && t.url_allowlist && (this.config.url_allowlist = this.config.url_allowlist.map((function(e) {
      return new RegExp(e);
    }))), this.rageclicks = new Ie(e.config.rageclick);
  },
  afterDecideResponse: function(e, t) {
    var n = t.config.token;
    this._initializedTokens.indexOf(n) > -1 ? j.info('autocapture already initialized for token "' + n + '"') : (t.persistence && t.persistence.register(o({}, Ae, !!e.autocapture_opt_out)), 
    this._isDisabledServerSide = !!e.autocapture_opt_out, this._setIsAutocaptureEnabled(t), 
    this._initializedTokens.push(n), e && e.config && e.config.enable_collect_everything && this._isAutocaptureEnabled ? (e.custom_properties && (this._customProperties = e.custom_properties), 
    this._addDomEventHandlers(t)) : t.__autocapture = !1);
  },
  enabledForProject: function(e, t, n) {
    if (!e) return !0;
    t = w(t) ? 10 : t, n = w(n) ? 10 : n;
    for (var i = 0, r = 0; r < e.length; r++) i += e.charCodeAt(r);
    return i % t < n;
  },
  isBrowserSupported: function() {
    return y(null == O ? void 0 : O.querySelectorAll);
  }
};

!function(e) {
  for (var t in e) y(e[t]) && (e[t] = e[t].bind(e));
}(Ze), function(e) {
  for (var t in e) y(e[t]) && (e[t] = X(e[t]));
}(Ze), function(e) {
  e.GZipJS = "gzip-js", e.Base64 = "base64";
}(Xe || (Xe = {}));

var et = "$active_feature_flags", tt = "$override_feature_flags", nt = "$feature_flag_payloads", it = function(e) {
  var t, n = {}, i = h(Y(e || {}));
  try {
    for (i.s(); !(t = i.n()).done; ) {
      var r = u(t.value, 2), s = r[0], o = r[1];
      o && (n[s] = o);
    }
  } catch (e) {
    i.e(e);
  } finally {
    i.f();
  }
  return n;
}, rt = function() {
  function e(t) {
    i(this, e), this.instance = t, this._override_warning = !1, this.featureFlagEventHandlers = [], 
    this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1;
  }
  return s(e, [ {
    key: "getFlags",
    value: function() {
      return Object.keys(this.getFlagVariants());
    }
  }, {
    key: "getFlagVariants",
    value: function() {
      var e = this.instance.get_property(Be), t = this.instance.get_property(tt);
      if (!t) return e || {};
      for (var n = G({}, e), i = Object.keys(t), r = 0; r < i.length; r++) !1 === t[i[r]] ? delete n[i[r]] : n[i[r]] = t[i[r]];
      return this._override_warning || (j.warn(" Overriding feature flags!", {
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
        var t = this.instance.config.token, n = this.instance.get_property(je), i = this.instance.get_property(Ue), r = {
          token: t,
          distinct_id: this.instance.get_distinct_id(),
          groups: this.instance.getGroups(),
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: n,
          group_properties: i,
          disable_flags: this.instance.config.advanced_disable_feature_flags || void 0
        };
        this.instance._send_request({
          method: "POST",
          url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
          data: r,
          compression: Xe.Base64,
          timeout: this.instance.config.feature_flag_request_timeout_ms,
          callback: function(t) {
            var n;
            e.setReloadingPaused(!1);
            var i = !0;
            200 === t.statusCode && (e.$anon_distinct_id = void 0, i = !1), e.receivedFeatureFlags(null !== (n = t.json) && void 0 !== n ? n : {}, i), 
            e._startReloadTimer();
          }
        });
      }
    }
  }, {
    key: "getFeatureFlag",
    value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
        var n, i = this.getFlagVariants()[e], r = "".concat(i), s = this.instance.get_property(We) || {};
        if (t.send_event || !("send_event" in t)) if (!(e in s) || !s[e].includes(r)) m(s[e]) ? s[e].push(r) : s[e] = [ r ], 
        null === (n = this.instance.persistence) || void 0 === n || n.register(o({}, We, s)), 
        this.instance.capture("$feature_flag_called", {
          $feature_flag: e,
          $feature_flag_response: i
        });
        return i;
      }
      j.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.");
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
      j.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.");
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
    value: function(e, n) {
      if (this.instance.persistence) {
        this.instance.decideEndpointWasHit = !0;
        var i = this.getFlagVariants(), r = this.getFlagPayloads();
        !function(e, n) {
          var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = e.featureFlags, u = e.featureFlagPayloads;
          if (a) if (m(a)) {
            var l, c = {};
            if (a) for (var d = 0; d < a.length; d++) c[a[d]] = !0;
            n && n.register((o(l = {}, et, a), o(l, Be, c), l));
          } else {
            var h = a, f = u;
            e.errorsWhileComputingFlags && (h = t(t({}, r), h), f = t(t({}, s), f)), n && n.register((o(i = {}, et, Object.keys(it(h))), 
            o(i, Be, h || {}), o(i, nt, f || {}), i));
          }
        }(e, this.instance.persistence, i, r), this._fireFeatureFlagsCallbacks(n);
      }
    }
  }, {
    key: "override",
    value: function(e) {
      if (!this.instance.__loaded || !this.instance.persistence) return j.uninitializedWarning("posthog.feature_flags.override");
      if (this._override_warning = !1, !1 === e) this.instance.persistence.unregister(tt); else if (m(e)) {
        for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
        this.instance.persistence.register(o({}, tt, t));
      } else this.instance.persistence.register(o({}, tt, e));
    }
  }, {
    key: "onFeatureFlags",
    value: function(e) {
      var t = this;
      if (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) {
        var n = this._prepareFeatureFlagsForCallbacks(), i = n.flags, r = n.flagVariants;
        e(i, r);
      }
      return function() {
        return t.removeFeatureFlagsHandler(e);
      };
    }
  }, {
    key: "updateEarlyAccessFeatureEnrollment",
    value: function(e, n) {
      var i, r, s = o({}, "$feature_enrollment/".concat(e), n);
      this.instance.capture("$feature_enrollment_update", {
        $feature_flag: e,
        $feature_enrollment: n,
        $set: s
      }), this.setPersonPropertiesForFlags(s, !1);
      var a = t(t({}, this.getFlagVariants()), {}, o({}, e, n));
      null === (i = this.instance.persistence) || void 0 === i || i.register((o(r = {}, et, Object.keys(it(a))), 
      o(r, Be, a), r)), this._fireFeatureFlagsCallbacks();
    }
  }, {
    key: "getEarlyAccessFeatures",
    value: function(e) {
      var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = this.instance.get_property(He);
      if (i && !n) return e(i);
      this.instance._send_request({
        transport: "XHR",
        url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
        method: "GET",
        callback: function(n) {
          var i;
          if (n.json) {
            var r = n.json.earlyAccessFeatures;
            return null === (i = t.instance.persistence) || void 0 === i || i.register(o({}, He, r)), 
            e(r);
          }
        }
      });
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
    value: function(e) {
      var t = this._prepareFeatureFlagsForCallbacks(), n = t.flags, i = t.flagVariants;
      this.featureFlagEventHandlers.forEach((function(t) {
        return t(n, i, {
          errorsLoading: e
        });
      }));
    }
  }, {
    key: "setPersonPropertiesForFlags",
    value: function(e) {
      var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = this.instance.get_property(je) || {};
      this.instance.register(o({}, je, t(t({}, i), e))), n && this.instance.reloadFeatureFlags();
    }
  }, {
    key: "resetPersonPropertiesForFlags",
    value: function() {
      this.instance.unregister(je);
    }
  }, {
    key: "setGroupPropertiesForFlags",
    value: function(e) {
      var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = this.instance.get_property(Ue) || {};
      0 !== Object.keys(i).length && Object.keys(i).forEach((function(n) {
        i[n] = t(t({}, i[n]), e[n]), delete e[n];
      })), this.instance.register(o({}, Ue, t(t({}, i), e))), n && this.instance.reloadFeatureFlags();
    }
  }, {
    key: "resetGroupPropertiesForFlags",
    value: function(e) {
      if (e) {
        var n = this.instance.get_property(Ue) || {};
        this.instance.register(o({}, Ue, t(t({}, n), {}, o({}, e, {}))));
      } else this.instance.unregister(Ue);
    }
  } ]), e;
}();

Math.trunc || (Math.trunc = function(e) {
  return e < 0 ? Math.ceil(e) : Math.floor(e);
}), Number.isInteger || (Number.isInteger = function(e) {
  return R(e) && isFinite(e) && Math.floor(e) === e;
});

var st = "0123456789abcdef", ot = function() {
  function e(t) {
    if (i(this, e), this.bytes = t, 16 !== t.length) throw new TypeError("not 128-bit length");
  }
  return s(e, [ {
    key: "toString",
    value: function() {
      for (var e = "", t = 0; t < this.bytes.length; t++) e = e + st.charAt(this.bytes[t] >>> 4) + st.charAt(15 & this.bytes[t]), 
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
    value: function(t, n, i, r) {
      if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(i) || !Number.isInteger(r) || t < 0 || n < 0 || i < 0 || r < 0 || t > 0xffffffffffff || n > 4095 || i > 1073741823 || r > 4294967295) throw new RangeError("invalid field value");
      var s = new Uint8Array(16);
      return s[0] = t / Math.pow(2, 40), s[1] = t / Math.pow(2, 32), s[2] = t / Math.pow(2, 24), 
      s[3] = t / Math.pow(2, 16), s[4] = t / Math.pow(2, 8), s[5] = t, s[6] = 112 | n >>> 8, 
      s[7] = n, s[8] = 128 | i >>> 24, s[9] = i >>> 16, s[10] = i >>> 8, s[11] = i, s[12] = r >>> 24, 
      s[13] = r >>> 16, s[14] = r >>> 8, s[15] = r, new e(s);
    }
  } ]), e;
}(), at = function() {
  function e() {
    i(this, e), o(this, "timestamp", 0), o(this, "counter", 0), o(this, "random", new ct);
  }
  return s(e, [ {
    key: "generate",
    value: function() {
      var e = this.generateOrAbort();
      if (w(e)) {
        this.timestamp = 0;
        var t = this.generateOrAbort();
        if (w(t)) throw new Error("Could not generate UUID after timestamp reset");
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
      return ot.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32());
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

P && !w(P.crypto) && crypto.getRandomValues && (ut = function(e) {
  return crypto.getRandomValues(e);
});

var lt, ct = function() {
  function e() {
    i(this, e), o(this, "buffer", new Uint32Array(8)), o(this, "cursor", 1 / 0);
  }
  return s(e, [ {
    key: "nextUint32",
    value: function() {
      return this.cursor >= this.buffer.length && (ut(this.buffer), this.cursor = 0), 
      this.buffer[this.cursor++];
    }
  } ]), e;
}(), dt = function() {
  return ht().toString();
}, ht = function() {
  return (lt || (lt = new at)).generate();
}, ft = "Thu, 01 Jan 1970 00:00:00 GMT", pt = "";

var gt = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;

function vt(e, t) {
  if (t) {
    var n = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
      if (pt) return pt;
      if (!t) return "";
      if ([ "localhost", "127.0.0.1" ].includes(e)) return "";
      for (var n = e.split("."), i = Math.min(n.length, 8), r = "dmn_chk_" + dt(), s = new RegExp("(^|;)\\s*" + r + "=1"); !pt && i--; ) {
        var o = n.slice(i).join("."), a = r + "=1;domain=." + o;
        t.cookie = a, s.test(t.cookie) && (t.cookie = a + ";expires=" + ft, pt = o);
      }
      return pt;
    }(e);
    if (!n) {
      var i = function(e) {
        var t = e.match(gt);
        return t ? t[0] : "";
      }(e);
      i !== n && j.info("Warning: cookie subdomain discovery mismatch", i, n), n = i;
    }
    return n ? "; domain=." + n : "";
  }
  return "";
}

var _t, mt = {
  is_supported: function() {
    return !!O;
  },
  error: function(e) {
    j.error("cookieStore error: " + e);
  },
  get: function(e) {
    if (O) {
      try {
        for (var t = e + "=", n = O.cookie.split(";").filter((function(e) {
          return e.length;
        })), i = 0; i < n.length; i++) {
          for (var r = n[i]; " " == r.charAt(0); ) r = r.substring(1, r.length);
          if (0 === r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length));
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
  set: function(e, t, n, i, r) {
    if (O) try {
      var s = "", o = "", a = vt(O.location.hostname, i);
      if (n) {
        var u = new Date;
        u.setTime(u.getTime() + 24 * n * 60 * 60 * 1e3), s = "; expires=" + u.toUTCString();
      }
      r && (o = "; secure");
      var l = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; SameSite=Lax; path=/" + a + o;
      return l.length > 3686.4 && j.warn("cookieStore warning: large cookie, len=" + l.length), 
      O.cookie = l, l;
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
    if (!S(yt)) return yt;
    var e = !0;
    if (w(P)) e = !1; else try {
      var t = "__mplssupport__";
      bt.set(t, "xyz"), '"xyz"' !== bt.get(t) && (e = !1), bt.remove(t);
    } catch (t) {
      e = !1;
    }
    return e || j.error("localStorage unsupported; falling back to cookie store"), yt = e, 
    e;
  },
  error: function(e) {
    j.error("localStorage error: " + e);
  },
  get: function(e) {
    try {
      return null == P ? void 0 : P.localStorage.getItem(e);
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
      null == P || P.localStorage.setItem(e, JSON.stringify(t));
    } catch (e) {
      bt.error(e);
    }
  },
  remove: function(e) {
    try {
      null == P || P.localStorage.removeItem(e);
    } catch (e) {
      bt.error(e);
    }
  }
}, wt = [ "distinct_id", Le, Ne ], kt = t(t({}, bt), {}, {
  parse: function(e) {
    try {
      var t = {};
      try {
        t = mt.parse(e) || {};
      } catch (e) {}
      var n = G(t, JSON.parse(bt.get(e) || "{}"));
      return bt.set(e, n), n;
    } catch (e) {}
    return null;
  },
  set: function(e, t, n, i, r) {
    try {
      bt.set(e, t);
      var s = {};
      wt.forEach((function(e) {
        t[e] && (s[e] = t[e]);
      })), Object.keys(s).length && mt.set(e, s, n, i, r);
    } catch (e) {
      bt.error(e);
    }
  },
  remove: function(e, t) {
    try {
      null == P || P.localStorage.removeItem(e), mt.remove(e, t);
    } catch (e) {
      bt.error(e);
    }
  }
}), St = {}, Ft = {
  is_supported: function() {
    return !0;
  },
  error: function(e) {
    j.error("memoryStorage error: " + e);
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
}, Rt = null, xt = {
  is_supported: function() {
    if (!S(Rt)) return Rt;
    if (Rt = !0, w(P)) Rt = !1; else try {
      var e = "__support__";
      xt.set(e, "xyz"), '"xyz"' !== xt.get(e) && (Rt = !1), xt.remove(e);
    } catch (e) {
      Rt = !1;
    }
    return Rt;
  },
  error: function(e) {
    j.error("sessionStorage error: ", e);
  },
  get: function(e) {
    try {
      return null == P ? void 0 : P.sessionStorage.getItem(e);
    } catch (e) {
      xt.error(e);
    }
    return null;
  },
  parse: function(e) {
    try {
      return JSON.parse(xt.get(e)) || null;
    } catch (e) {}
    return null;
  },
  set: function(e, t) {
    try {
      null == P || P.sessionStorage.setItem(e, JSON.stringify(t));
    } catch (e) {
      xt.error(e);
    }
  },
  remove: function(e) {
    try {
      null == P || P.sessionStorage.removeItem(e);
    } catch (e) {
      xt.error(e);
    }
  }
}, Et = [ "localhost", "127.0.0.1" ], Pt = function(e) {
  var t = null == O ? void 0 : O.createElement("a");
  return w(t) ? null : (t.href = e, t);
}, It = function(e, t) {
  return !!function(e) {
    try {
      new RegExp(e);
    } catch (e) {
      return !1;
    }
    return !0;
  }(t) && new RegExp(t).test(e);
}, Ct = function(e) {
  var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", r = [];
  return z(e, (function(e, i) {
    w(e) || w(i) || "undefined" === i || (t = encodeURIComponent(function(e) {
      return e instanceof File;
    }(e) ? e.name : e.toString()), n = encodeURIComponent(i), r[r.length] = n + "=" + t);
  })), r.join(i);
}, Tt = function(e, t) {
  for (var n, i = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), r = 0; r < i.length; r++) {
    var s = i[r].split("=");
    if (s[0] === t) {
      n = s;
      break;
    }
  }
  if (!m(n) || n.length < 2) return "";
  var o = n[1];
  try {
    o = decodeURIComponent(o);
  } catch (e) {
    j.error("Skipping decoding for malformed query param: " + o);
  }
  return o.replace(/\+/g, " ");
}, $t = function(e, t) {
  var n = e.match(new RegExp(t + "=([^&]*)"));
  return n ? n[1] : null;
}, At = "Mobile", Ot = "iOS", Mt = "Android", qt = "Tablet", Dt = Mt + " " + qt, Lt = "iPad", Nt = "Apple", Bt = Nt + " Watch", Ht = "Safari", jt = "BlackBerry", Ut = "Samsung", Vt = Ut + "Browser", Wt = Ut + " Internet", zt = "Chrome", Gt = zt + " OS", Qt = zt + " " + Ot, Yt = "Internet Explorer", Jt = Yt + " " + At, Kt = "Opera", Xt = Kt + " Mini", Zt = "Edge", en = "Microsoft " + Zt, tn = "Firefox", nn = tn + " " + Ot, rn = "Nintendo", sn = "PlayStation", on = "Xbox", an = Mt + " " + At, un = At + " " + Ht, ln = "Windows", cn = ln + " Phone", dn = "Nokia", hn = "Ouya", fn = "Generic", pn = fn + " " + At.toLowerCase(), gn = fn + " " + qt.toLowerCase(), vn = "Konqueror", _n = "(\\d+(\\.\\d+)?)", mn = new RegExp("Version/" + _n), yn = new RegExp(on, "i"), bn = new RegExp(sn + " \\w+", "i"), wn = new RegExp(rn + " \\w+", "i"), kn = new RegExp(jt + "|PlayBook|BB10", "i"), Sn = {
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

var Fn = function(e, t) {
  return t && Q(t, Nt) || function(e) {
    return Q(e, Ht) && !Q(e, zt) && !Q(e, Mt);
  }(e);
}, Rn = function(e, t) {
  return t = t || "", Q(e, " OPR/") && Q(e, "Mini") ? Xt : Q(e, " OPR/") ? Kt : kn.test(e) ? jt : Q(e, "IE" + At) || Q(e, "WPDesktop") ? Jt : Q(e, Vt) ? Wt : Q(e, Zt) || Q(e, "Edg/") ? en : Q(e, "FBIOS") ? "Facebook " + At : Q(e, zt) ? zt : Q(e, "CriOS") ? Qt : Q(e, "UCWEB") || Q(e, "UCBrowser") ? "UC Browser" : Q(e, "FxiOS") ? nn : Q(e, Mt) ? an : Q(e.toLowerCase(), vn.toLowerCase()) ? vn : Fn(e, t) ? Q(e, At) ? un : Ht : Q(e, tn) ? tn : Q(e, "MSIE") || Q(e, "Trident/") ? Yt : Q(e, "Gecko") ? tn : "";
}, xn = (o(_t = {}, Jt, [ new RegExp("rv:" + _n) ]), o(_t, en, [ new RegExp(Zt + "?\\/" + _n) ]), 
o(_t, zt, [ new RegExp(zt + "/" + _n) ]), o(_t, Qt, [ new RegExp("CriOS\\/" + _n) ]), 
o(_t, "UC Browser", [ new RegExp("(UCBrowser|UCWEB)\\/" + _n) ]), o(_t, Ht, [ mn ]), 
o(_t, un, [ mn ]), o(_t, Kt, [ new RegExp("(Opera|OPR)\\/" + _n) ]), o(_t, tn, [ new RegExp(tn + "\\/" + _n) ]), 
o(_t, nn, [ new RegExp("FxiOS\\/" + _n) ]), o(_t, vn, [ new RegExp("Konqueror[:/]?" + _n, "i") ]), 
o(_t, jt, [ new RegExp(jt + " " + _n), mn ]), o(_t, an, [ new RegExp("android\\s" + _n) ]), 
o(_t, Wt, [ new RegExp(Vt + "\\/" + _n) ]), o(_t, Yt, [ new RegExp("(rv:|MSIE )" + _n) ]), 
o(_t, "Mozilla", [ new RegExp("rv:" + _n) ]), _t), En = [ [ new RegExp(on + "; " + on + " (.*?)[);]", "i"), function(e) {
  return [ on, e && e[1] || "" ];
} ], [ new RegExp(rn, "i"), [ rn, "" ] ], [ new RegExp(sn, "i"), [ sn, "" ] ], [ kn, [ jt, "" ] ], [ new RegExp(ln, "i"), function(e, t) {
  if (/Phone/.test(t) || /WPDesktop/.test(t)) return [ cn, "" ];
  if (new RegExp(At).test(t) && !/IEMobile\b/.test(t)) return [ ln + " " + At, "" ];
  var n = /Windows NT ([0-9.]+)/i.exec(t);
  if (n && n[1]) {
    var i = n[1], r = Sn[i] || "";
    return /arm/i.test(t) && (r = "RT"), [ ln, r ];
  }
  return [ ln, "" ];
} ], [ /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, function(e) {
  if (e && e[3]) {
    var t = [ e[3], e[4], e[5] || "0" ];
    return [ Ot, t.join(".") ];
  }
  return [ Ot, "" ];
} ], [ /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, function(e) {
  var t = "";
  return e && e.length >= 3 && (t = w(e[2]) ? e[3] : e[2]), [ "watchOS", t ];
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
} ], [ /Mac/i, [ "Mac OS X", "" ] ], [ /CrOS/, [ Gt, "" ] ], [ /Linux|debian/i, [ "Linux", "" ] ] ], Pn = function(e) {
  return wn.test(e) ? rn : bn.test(e) ? sn : yn.test(e) ? on : new RegExp(hn, "i").test(e) ? hn : new RegExp("(" + cn + "|WPDesktop)", "i").test(e) ? cn : /iPad/.test(e) ? Lt : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? Bt : kn.test(e) ? jt : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(dn, "i").test(e) ? dn : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(At).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? Mt : Dt : Mt : new RegExp("(pda|" + At + ")", "i").test(e) ? pn : new RegExp(qt, "i").test(e) && !new RegExp(qt + " pc", "i").test(e) ? gn : "";
}, In = "https?://(.*)", Cn = {
  campaignParams: function(e) {
    var t = [ "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid" ].concat(e || []), n = {};
    return z(t, (function(e) {
      var t = O ? Tt(O.URL, e) : "";
      t.length && (n[e] = t);
    })), n;
  },
  searchEngine: function() {
    var e = null == O ? void 0 : O.referrer;
    return e ? 0 === e.search(In + "google.([^/?]*)") ? "google" : 0 === e.search(In + "bing.com") ? "bing" : 0 === e.search(In + "yahoo.com") ? "yahoo" : 0 === e.search(In + "duckduckgo.com") ? "duckduckgo" : null : null;
  },
  searchInfo: function() {
    var e = Cn.searchEngine(), t = "yahoo" != e ? "q" : "p", n = {};
    if (!S(e)) {
      n.$search_engine = e;
      var i = O ? Tt(O.referrer, t) : "";
      i.length && (n.ph_keyword = i);
    }
    return n;
  },
  browser: Rn,
  browserVersion: function(e, t) {
    var n = Rn(e, t), i = xn[n];
    if (w(i)) return null;
    for (var r = 0; r < i.length; r++) {
      var s = i[r], o = e.match(s);
      if (o) return parseFloat(o[o.length - 2]);
    }
    return null;
  },
  browserLanguage: function() {
    return navigator.language || navigator.userLanguage;
  },
  os: function(e) {
    for (var t = 0; t < En.length; t++) {
      var n = u(En[t], 2), i = n[0], r = n[1], s = i.exec(e), o = s && (y(r) ? r(s, e) : r);
      if (o) return o;
    }
    return [ "", "" ];
  },
  device: Pn,
  deviceType: function(e) {
    var t = Pn(e);
    return t === Lt || t === Dt || "Kobo" === t || "Kindle Fire" === t || t === gn ? qt : t === rn || t === on || t === sn || t === hn ? "Console" : t === Bt ? "Wearable" : t ? At : "Desktop";
  },
  referrer: function() {
    return (null == O ? void 0 : O.referrer) || "$direct";
  },
  referringDomain: function() {
    var e;
    return null != O && O.referrer && (null === (e = Pt(O.referrer)) || void 0 === e ? void 0 : e.host) || "$direct";
  },
  properties: function() {
    if (!N) return {};
    var e = u(Cn.os(N), 2), t = e[0], n = e[1];
    return G(Z({
      $os: t,
      $os_version: n,
      $browser: Cn.browser(N, navigator.vendor),
      $device: Cn.device(N),
      $device_type: Cn.deviceType(N)
    }), {
      $current_url: null == M ? void 0 : M.href,
      $host: null == M ? void 0 : M.host,
      $pathname: null == M ? void 0 : M.pathname,
      $raw_user_agent: N.length > 1e3 ? N.substring(0, 997) + "..." : N,
      $browser_version: Cn.browserVersion(N, navigator.vendor),
      $browser_language: Cn.browserLanguage(),
      $screen_height: null == P ? void 0 : P.screen.height,
      $screen_width: null == P ? void 0 : P.screen.width,
      $viewport_height: null == P ? void 0 : P.innerHeight,
      $viewport_width: null == P ? void 0 : P.innerWidth,
      $lib: "web",
      $lib_version: f.LIB_VERSION,
      $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
      $time: J() / 1e3
    });
  },
  people_properties: function() {
    if (!N) return {};
    var e = u(Cn.os(N), 2), t = e[0], n = e[1];
    return G(Z({
      $os: t,
      $os_version: n,
      $browser: Cn.browser(N, navigator.vendor)
    }), {
      $browser_version: Cn.browserVersion(N, navigator.vendor)
    });
  }
}, Tn = [ "cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory" ], $n = function() {
  function e(t) {
    i(this, e), this.config = t, this.props = {}, this.campaign_params_saved = !1, this.name = function(e) {
      var t = "";
      return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), 
      e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog";
    }(t), this.storage = this.buildStorage(t), this.load(), this.update_config(t, t), 
    this.save();
  }
  return s(e, [ {
    key: "buildStorage",
    value: function(e) {
      -1 === Tn.indexOf(e.persistence.toLowerCase()) && (j.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), 
      e.persistence = "localStorage+cookie");
      var t = e.persistence.toLowerCase();
      return "localstorage" === t && bt.is_supported() ? bt : "localstorage+cookie" === t && kt.is_supported() ? kt : "sessionstorage" === t && xt.is_supported() ? xt : "memory" === t ? Ft : "cookie" === t ? mt : kt.is_supported() ? kt : mt;
    }
  }, {
    key: "properties",
    value: function() {
      var e = {};
      return z(this.props, (function(t, n) {
        if (n === Be && b(t)) for (var i = Object.keys(t), r = 0; r < i.length; r++) e["$feature/".concat(i[r])] = t[i[r]]; else o = n, 
        a = !1, (S(s = Ye) ? a : $ && s.indexOf === $ ? -1 != s.indexOf(o) : (z(s, (function(e) {
          if (a || (a = e === o)) return U;
        })), a)) || (e[n] = t);
        var s, o, a;
      })), e;
    }
  }, {
    key: "load",
    value: function() {
      if (!this.disabled) {
        var e = this.storage.parse(this.name);
        e && (this.props = G({}, e));
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
      var i = this;
      if (b(e)) {
        w(t) && (t = "None"), this.expire_days = w(n) ? this.default_expiry : n;
        var r = !1;
        if (z(e, (function(e, n) {
          i.props.hasOwnProperty(n) && i.props[n] !== t || (i.props[n] = e, r = !0);
        })), r) return this.save(), !0;
      }
      return !1;
    }
  }, {
    key: "register",
    value: function(e, t) {
      var n = this;
      if (b(e)) {
        this.expire_days = w(t) ? this.default_expiry : t;
        var i = !1;
        if (z(e, (function(t, r) {
          e.hasOwnProperty(r) && n.props[r] !== t && (n.props[r] = t, i = !0);
        })), i) return this.save(), !0;
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
      this.campaign_params_saved || (this.register(Cn.campaignParams(this.config.custom_campaign_params)), 
      this.campaign_params_saved = !0);
    }
  }, {
    key: "update_search_keyword",
    value: function() {
      this.register(Cn.searchInfo());
    }
  }, {
    key: "update_referrer_info",
    value: function() {
      this.register({
        $referrer: this.props.$referrer || Cn.referrer(),
        $referring_domain: this.props.$referring_domain || Cn.referringDomain()
      });
    }
  }, {
    key: "get_referrer_info",
    value: function() {
      return Z({
        $referrer: this.props.$referrer,
        $referring_domain: this.props.$referring_domain
      });
    }
  }, {
    key: "safe_merge",
    value: function(e) {
      return z(this.props, (function(t, n) {
        n in e || (e[n] = t);
      })), e;
    }
  }, {
    key: "update_config",
    value: function(e, t) {
      if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), 
      this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), 
      e.persistence !== t.persistence) {
        var n = this.buildStorage(e), i = this.props;
        this.clear(), this.storage = n, this.props = i, this.save();
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
      return w(t) || (delete this.props[$e][e], this.save()), t;
    }
  }, {
    key: "get_user_state",
    value: function() {
      return this.props[ze] || "anonymous";
    }
  }, {
    key: "set_user_state",
    value: function(e) {
      this.props[ze] = e, this.save();
    }
  }, {
    key: "get_quota_limits",
    value: function() {
      return this.props[Ge] || {};
    }
  }, {
    key: "set_quota_limits",
    value: function(e) {
      this.props[Ge] = e, this.save();
    }
  } ]), e;
}(), An = 2, On = 4;

var Mn = s((function e(t) {
  var n, r, s = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  i(this, e), o(this, "bucketSize", 100), o(this, "refillRate", 10), o(this, "mutationBuckets", {}), 
  o(this, "loggedTracker", {}), o(this, "refillBuckets", (function() {
    Object.keys(s.mutationBuckets).forEach((function(e) {
      s.mutationBuckets[e] = s.mutationBuckets[e] + s.refillRate, s.mutationBuckets[e] >= s.bucketSize && delete s.mutationBuckets[e];
    }));
  })), o(this, "getNodeOrRelevantParent", (function(e) {
    var t = s.rrweb.mirror.getNode(e);
    if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
      var n = t.closest("svg");
      if (n) return [ s.rrweb.mirror.getId(n), n ];
    }
    return [ e, t ];
  })), o(this, "numberOfChanges", (function(e) {
    var t, n, i, r, s, o, a, u;
    return (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) + (null !== (i = null === (r = e.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0) + (null !== (s = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0) + (null !== (a = null === (u = e.adds) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0);
  })), o(this, "throttleMutations", (function(e) {
    if (3 !== e.type || 0 !== e.data.source) return e;
    var t = e.data, n = s.numberOfChanges(t);
    t.attributes && (t.attributes = t.attributes.filter((function(e) {
      var t, n, i, r = u(s.getNodeOrRelevantParent(e.id), 2), o = r[0], a = r[1];
      if (0 === s.mutationBuckets[o]) return !1;
      (s.mutationBuckets[o] = null !== (t = s.mutationBuckets[o]) && void 0 !== t ? t : s.bucketSize, 
      s.mutationBuckets[o] = Math.max(s.mutationBuckets[o] - 1, 0), 0 === s.mutationBuckets[o]) && (s.loggedTracker[o] || (s.loggedTracker[o] = !0, 
      null === (n = (i = s.options).onBlockedNode) || void 0 === n || n.call(i, o, a)));
      return e;
    })));
    var i = s.numberOfChanges(t);
    return 0 !== i || n === i ? e : void 0;
  })), this.rrweb = t, this.options = a, this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate, 
  this.bucketSize = null !== (r = this.options.bucketSize) && void 0 !== r ? r : this.bucketSize, 
  setInterval((function() {
    s.refillBuckets();
  }), 1e3);
})), qn = function(e) {
  return e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", 
  e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", 
  e[e.Plugin = 6] = "Plugin", e;
}(qn || {}), Dn = "[SessionRecording]", Ln = {
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
}, Nn = [ "authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token" ], Bn = [ "password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token" ], Hn = [ "/s/", "/e/", "/i/" ];

function jn(e, t, n, i) {
  if (F(e)) return e;
  var r = (null == t ? void 0 : t["content-length"]) || function(e) {
    return new Blob([ e ]).size;
  }(e);
  return k(r) && (r = parseInt(r)), r > n ? Dn + " ".concat(i, " body too large to record (").concat(r, " bytes)") : e;
}

function Un(e, t) {
  if (F(e)) return e;
  var n = e;
  return Se(n, !1) || (n = Dn + " " + t + " body redacted"), z(Bn, (function(e) {
    var i, r;
    null !== (i = n) && void 0 !== i && i.length && -1 !== (null === (r = n) || void 0 === r ? void 0 : r.indexOf(e)) && (n = Dn + " " + t + " body redacted as might contain: " + e);
  })), n;
}

var Vn = function(e, n) {
  var i, r, s, o = {
    payloadSizeLimitBytes: Ln.payloadSizeLimitBytes,
    performanceEntryTypeToObserve: l(Ln.performanceEntryTypeToObserve)
  }, a = !1 !== e.session_recording.recordHeaders && n.recordHeaders, u = !1 !== e.session_recording.recordBody && n.recordBody, c = !1 !== e.capture_performance && n.recordPerformance, d = (i = o, 
  s = Math.min(1e6, null !== (r = i.payloadSizeLimitBytes) && void 0 !== r ? r : 1e6), 
  function(e) {
    return null != e && e.requestBody && (e.requestBody = jn(e.requestBody, e.requestHeaders, s, "Request")), 
    null != e && e.responseBody && (e.responseBody = jn(e.responseBody, e.responseHeaders, s, "Response")), 
    e;
  }), h = function(e) {
    return d(function(e) {
      var t = Pt(e.name);
      if (!(t && t.pathname && Hn.some((function(e) {
        return 0 === t.pathname.indexOf(e);
      })))) return e;
    }((t = e, z(Object.keys(null !== (n = t.requestHeaders) && void 0 !== n ? n : {}), (function(e) {
      var n;
      Nn.includes(e.toLowerCase()) && (null === (n = t.requestHeaders) || void 0 === n || delete n[e]);
    })), t)));
    var t, n;
  }, f = y(e.session_recording.maskNetworkRequestFn);
  return f && y(e.session_recording.maskCapturedNetworkRequestFn) && j.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), 
  f && (e.session_recording.maskCapturedNetworkRequestFn = function(n) {
    var i = e.session_recording.maskNetworkRequestFn({
      url: n.name
    });
    return t(t({}, n), {}, {
      name: null == i ? void 0 : i.url
    });
  }), o.maskRequestFn = y(e.session_recording.maskCapturedNetworkRequestFn) ? function(t) {
    var n, i, r, s = h(t);
    return s && null !== (n = null === (i = (r = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === i ? void 0 : i.call(r, s)) && void 0 !== n ? n : void 0;
  } : function(e) {
    return function(e) {
      if (!w(e)) return e.requestBody = Un(e.requestBody, "Request"), e.responseBody = Un(e.responseBody, "Response"), 
      e;
    }(h(e));
  }, t(t(t({}, Ln), o), {}, {
    recordHeaders: a,
    recordBody: u,
    recordPerformance: c,
    recordInitialRequests: c
  });
}, Wn = "__ph_opt_in_out_";

function zn(e, t) {
  ei(!0, e, t);
}

function Gn(e, t) {
  ei(!1, e, t);
}

function Qn(e, t) {
  return "1" === Zn(e, t);
}

function Yn(e, t) {
  return !!function(e) {
    if (e && e.respectDnt) {
      var t = e && e.window || P, n = null == t ? void 0 : t.navigator, i = !1;
      return z([ null == n ? void 0 : n.doNotTrack, n.msDoNotTrack, t.doNotTrack ], (function(e) {
        Q([ !0, 1, "1", "yes" ], e) && (i = !0);
      })), i;
    }
    return !1;
  }(t) || "0" === Zn(e, t);
}

function Jn(e, t) {
  Kn(t = t || {}).remove(Xn(e, t), !!t.crossSubdomainCookie);
}

function Kn(e) {
  return "localStorage" === (e = e || {}).persistenceType ? bt : "localStorage+cookie" === e.persistenceType ? kt : mt;
}

function Xn(e, t) {
  return ((t = t || {}).persistencePrefix || Wn) + e;
}

function Zn(e, t) {
  return Kn(t).get(Xn(e, t));
}

function ei(e, t, n) {
  k(t) && t.length ? (Kn(n = n || {}).set(Xn(t, n), e ? 1 : 0, R(n.cookieExpiration) ? n.cookieExpiration : null, n.crossSubdomainCookie, n.secureCookie), 
  n.capture && e && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, {
    send_instantly: !0
  })) : j.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
}

function ti(e) {
  var t = !1;
  try {
    var n = e.config.token, i = e.config.respect_dnt, r = e.config.opt_out_capturing_persistence_type, s = e.config.opt_out_capturing_cookie_prefix || void 0, o = e.config.window;
    n && (t = Yn(n, {
      respectDnt: i,
      persistenceType: r,
      persistencePrefix: s,
      window: o
    }));
  } catch (e) {
    j.error("Unexpected error when checking capturing opt-out status: " + e);
  }
  return t;
}

var ni, ii = 3e5, ri = ii;

!function(e) {
  e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", 
  e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", 
  e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", 
  e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", 
  e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", 
  e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet";
}(ni || (ni = {}));

var si = [ ni.MouseMove, ni.MouseInteraction, ni.Scroll, ni.ViewportResize, ni.Input, ni.TouchMove, ni.MediaInteraction, ni.Drag ], oi = function(e) {
  return {
    rrwebMethod: e,
    enqueuedAt: Date.now(),
    attempt: 1
  };
}, ai = "[SessionRecording]", ui = function() {
  function e(t) {
    var n = this;
    if (i(this, e), o(this, "queuedRRWebEvents", []), o(this, "isIdle", !1), o(this, "_linkedFlagSeen", !1), 
    o(this, "_lastActivityTimestamp", Date.now()), o(this, "windowId", null), o(this, "sessionId", null), 
    o(this, "_linkedFlag", null), o(this, "_sampleRate", null), o(this, "_minimumDuration", null), 
    o(this, "_forceAllowLocalhostNetworkCapture", !1), this.instance = t, this._captureStarted = !1, 
    this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = !1, null == P || P.addEventListener("beforeunload", (function() {
      n._flushBuffer();
    })), null == P || P.addEventListener("offline", (function() {
      n._tryAddCustomEvent("browser offline", {});
    })), null == P || P.addEventListener("online", (function() {
      n._tryAddCustomEvent("browser online", {});
    })), null == P || P.addEventListener("visibilitychange", (function() {
      if (null != O && O.visibilityState) {
        var e = "window " + O.visibilityState;
        n._tryAddCustomEvent(e, {});
      }
    })), !this.instance.sessionManager) throw j.error(ai + " started without valid sessionManager"), 
    new Error(ai + " started without valid sessionManager. This is a bug.");
    this.buffer = this.clearBuffer();
  }
  return s(e, [ {
    key: "rrwebRecord",
    get: function() {
      var e;
      return null == B || null === (e = B.rrweb) || void 0 === e ? void 0 : e.record;
    }
  }, {
    key: "started",
    get: function() {
      return this._captureStarted;
    }
  }, {
    key: "sessionManager",
    get: function() {
      if (!this.instance.sessionManager) throw j.error(ai + " started without valid sessionManager"), 
      new Error(ai + " started without valid sessionManager. This is a bug.");
      return this.instance.sessionManager;
    }
  }, {
    key: "isSampled",
    get: function() {
      return R(this._sampleRate) ? this.instance.get_property(Ne) : null;
    }
  }, {
    key: "sessionDuration",
    get: function() {
      var e, t, n = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1], i = this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp;
      return n ? n.timestamp - i : null;
    }
  }, {
    key: "isRecordingEnabled",
    get: function() {
      var e = !!this.instance.get_property(Oe), t = !this.instance.config.disable_session_recording;
      return P && e && t;
    }
  }, {
    key: "isConsoleLogCaptureEnabled",
    get: function() {
      var e = !!this.instance.get_property(Me), t = this.instance.config.enable_recording_console_log;
      return null != t ? t : e;
    }
  }, {
    key: "canvasRecording",
    get: function() {
      var e = this.instance.get_property(De);
      return e && e.fps && e.quality ? {
        enabled: e.enabled,
        fps: e.fps,
        quality: e.quality
      } : void 0;
    }
  }, {
    key: "networkPayloadCapture",
    get: function() {
      var e, t, n = this.instance.get_property(qe), i = {
        recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
        recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
      }, r = (null == i ? void 0 : i.recordHeaders) || (null == n ? void 0 : n.recordHeaders), s = (null == i ? void 0 : i.recordBody) || (null == n ? void 0 : n.recordBody), o = this.instance.config.capture_performance || (null == n ? void 0 : n.capturePerformance);
      return r || s || o ? {
        recordHeaders: r,
        recordBody: s,
        recordPerformance: o
      } : void 0;
    }
  }, {
    key: "status",
    get: function() {
      return this.receivedDecide ? this.isRecordingEnabled ? F(this._linkedFlag) || this._linkedFlagSeen ? x(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering";
    }
  }, {
    key: "startRecordingIfEnabled",
    value: function() {
      this.isRecordingEnabled ? (this._startCapture(), j.info(ai + " started")) : (this.stopRecording(), 
      this.clearBuffer());
    }
  }, {
    key: "stopRecording",
    value: function() {
      this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, 
      this._captureStarted = !1, j.info(ai + " stopped"));
    }
  }, {
    key: "makeSamplingDecision",
    value: function(e) {
      var t, n = this.sessionId !== e, i = this._sampleRate;
      if (R(i)) {
        var r, s = this.isSampled, a = n || !x(s);
        if (a) r = Math.random() < i; else r = s;
        !r && a && j.warn(ai + " Sample rate (".concat(i, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), 
        this._tryAddCustomEvent("samplingDecisionMade", {
          sampleRate: i
        }), null === (t = this.instance.persistence) || void 0 === t || t.register(o({}, Ne, r));
      } else {
        var u;
        null === (u = this.instance.persistence) || void 0 === u || u.register(o({}, Ne, null));
      }
    }
  }, {
    key: "afterDecideResponse",
    value: function(e) {
      var n, i, r, s, a, u, l, c, d, h, f = this;
      this.instance.persistence && this.instance.persistence.register((o(h = {}, Oe, !!e.sessionRecording), 
      o(h, Me, null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.consoleLogRecordingEnabled), 
      o(h, qe, t({
        capturePerformance: e.capturePerformance
      }, null === (u = e.sessionRecording) || void 0 === u ? void 0 : u.networkPayloadCapture)), 
      o(h, De, {
        enabled: null === (l = e.sessionRecording) || void 0 === l ? void 0 : l.recordCanvas,
        fps: null === (c = e.sessionRecording) || void 0 === c ? void 0 : c.canvasFps,
        quality: null === (d = e.sessionRecording) || void 0 === d ? void 0 : d.canvasQuality
      }), h));
      var p = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.sampleRate;
      this._sampleRate = F(p) ? null : parseFloat(p);
      var g, v = null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.minimumDurationMilliseconds;
      (this._minimumDuration = w(v) ? null : v, this._linkedFlag = (null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.linkedFlag) || null, 
      null !== (s = e.sessionRecording) && void 0 !== s && s.endpoint) && (this._endpoint = null === (g = e.sessionRecording) || void 0 === g ? void 0 : g.endpoint);
      if (R(this._sampleRate) && this.sessionManager.onSessionId((function(e) {
        f.makeSamplingDecision(e);
      })), !F(this._linkedFlag)) {
        var _ = k(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag, m = k(this._linkedFlag) ? null : this._linkedFlag.variant;
        this.instance.onFeatureFlags((function(e, t) {
          var n = b(t) && _ in t, i = m ? t[_] === m : n;
          if (i) {
            var r = {
              linkedFlag: _,
              linkedVariant: m
            }, s = "linked flag matched";
            j.info(ai + " " + s, r), f._tryAddCustomEvent(s, r);
          }
          f._linkedFlagSeen = i;
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
        timestamp: J()
      });
    }
  }, {
    key: "_startCapture",
    value: function() {
      var e = this;
      w(Object.assign) || this._captureStarted || this.instance.config.disable_session_recording || ti(this.instance) || (this._captureStarted = !0, 
      this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord ? this._onScriptLoaded() : ie(this.instance.requestRouter.endpointFor("assets", "/static/recorder.js?v=".concat(f.LIB_VERSION)), (function(t) {
        if (t) return j.error(ai + " could not load recorder.js", t);
        e._onScriptLoaded();
      })));
    }
  }, {
    key: "_isInteractiveEvent",
    value: function(e) {
      var t;
      return 3 === e.type && -1 !== si.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source);
    }
  }, {
    key: "_updateWindowAndSessionIds",
    value: function(e) {
      var t = this._isInteractiveEvent(e);
      t || this.isIdle || e.timestamp - this._lastActivityTimestamp > ri && (this.isIdle = !0, 
      this._tryAddCustomEvent("sessionIdle", {
        reason: "user inactivity",
        timeSinceLastActive: e.timestamp - this._lastActivityTimestamp,
        threshold: ri
      }));
      var n = !1;
      if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, 
      this._tryAddCustomEvent("sessionNoLongerIdle", {
        reason: "user activity",
        type: e.type
      }), n = !0)), !this.isIdle) {
        var i = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp), r = i.windowId, s = i.sessionId, o = this.sessionId !== s, a = this.windowId !== r;
        this.windowId = r, this.sessionId = s, (n || -1 === [ An, On ].indexOf(e.type) && (a || o)) && this._tryTakeFullSnapshot();
      }
    }
  }, {
    key: "_tryRRWebMethod",
    value: function(e) {
      try {
        return e.rrwebMethod(), !0;
      } catch (t) {
        return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
          enqueuedAt: e.enqueuedAt || Date.now(),
          attempt: e.attempt++,
          rrwebMethod: e.rrwebMethod
        }) : j.warn(ai + " could not emit queued rrweb event.", t, e), !1;
      }
    }
  }, {
    key: "_tryAddCustomEvent",
    value: function(e, t) {
      var n = this;
      return this._tryRRWebMethod(oi((function() {
        return n.rrwebRecord.addCustomEvent(e, t);
      })));
    }
  }, {
    key: "_tryTakeFullSnapshot",
    value: function() {
      var e = this;
      return this._tryRRWebMethod(oi((function() {
        return e.rrwebRecord.takeFullSnapshot();
      })));
    }
  }, {
    key: "_onScriptLoaded",
    value: function() {
      for (var e, n = this, i = {
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
      }, r = this.instance.config.session_recording, s = 0, o = Object.entries(r || {}); s < o.length; s++) {
        var a = u(o[s], 2), l = a[0], c = a[1];
        l in i && (i[l] = c);
      }
      if (this.canvasRecording && this.canvasRecording.enabled && (i.recordCanvas = !0, 
      i.sampling = {
        canvas: this.canvasRecording.fps
      }, i.dataURLOptions = {
        type: "image/webp",
        quality: this.canvasRecording.quality
      }), this.rrwebRecord) {
        this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new Mn(this.rrwebRecord, {
          onBlockedNode: function(e, t) {
            var i = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
            j.info(i, {
              node: t
            }), n.log(ai + " " + i, "warn");
          }
        }), this._scheduleFullSnapshot();
        var d = this._gatherRRWebPlugins();
        this.stopRrweb = this.rrwebRecord(t({
          emit: function(e) {
            n.onRRwebEmit(e);
          },
          plugins: d
        }, i)), this.instance._addCaptureHook((function(e) {
          try {
            if ("$pageview" === e) {
              var t = P ? n._maskUrl(P.location.href) : "";
              if (!t) return;
              n._tryAddCustomEvent("$pageview", {
                href: t
              }), n._tryTakeFullSnapshot();
            }
          } catch (e) {
            j.error("Could not add $pageview to rrweb session", e);
          }
        })), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
          sessionRecordingOptions: i,
          activePlugins: d.map((function(e) {
            return null == e ? void 0 : e.name;
          }))
        }), this._tryAddCustomEvent("$posthog_config", {
          config: this.instance.config
        });
      } else j.error(ai + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
    }
  }, {
    key: "_scheduleFullSnapshot",
    value: function() {
      var e = this;
      this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), this._fullSnapshotTimer = setInterval((function() {
        e._tryTakeFullSnapshot();
      }), ii);
    }
  }, {
    key: "_gatherRRWebPlugins",
    value: function() {
      var e = [];
      (B.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && e.push(B.rrwebConsoleRecord.getRecordConsolePlugin()), 
      this.networkPayloadCapture && y(B.getRecordNetworkPlugin)) && (!Et.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e.push(B.getRecordNetworkPlugin(Vn(this.instance.config, this.networkPayloadCapture))) : j.info(ai + " NetworkCapture not started because we are on localhost."));
      return e;
    }
  }, {
    key: "onRRwebEmit",
    value: function(e) {
      if (this._processQueuedEvents(), e && b(e)) {
        if (e.type === qn.Meta) {
          var t = this._maskUrl(e.data.href);
          if (this._lastHref = t, !t) return;
          e.data.href = t;
        } else this._pageViewFallBack();
        e.type === qn.FullSnapshot && this._scheduleFullSnapshot();
        var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
        if (n) {
          var i = function(e) {
            var t = e;
            if (t && b(t) && 6 === t.type && b(t.data) && "rrweb/console@1" === t.data.plugin) {
              t.data.payload.payload.length > 10 && (t.data.payload.payload = t.data.payload.payload.slice(0, 10), 
              t.data.payload.payload.push("...[truncated]"));
              for (var n = [], i = 0; i < t.data.payload.payload.length; i++) t.data.payload.payload[i] && t.data.payload.payload[i].length > 2e3 ? n.push(t.data.payload.payload[i].slice(0, 2e3) + "...[truncated]") : n.push(t.data.payload.payload[i]);
              return t.data.payload.payload = n, e;
            }
            return e;
          }(n), r = JSON.stringify(i).length;
          if (this._updateWindowAndSessionIds(i), !this.isIdle || i.type === qn.Custom) {
            var s = {
              $snapshot_bytes: r,
              $snapshot_data: i,
              $session_id: this.sessionId,
              $window_id: this.windowId
            };
            "disabled" !== this.status ? this._captureSnapshotBuffered(s) : this.clearBuffer();
          }
        }
      }
    }
  }, {
    key: "_pageViewFallBack",
    value: function() {
      if (!this.instance.config.capture_pageview && P) {
        var e = this._maskUrl(P.location.href);
        this._lastHref !== e && (this._tryAddCustomEvent("$url_changed", {
          href: e
        }), this._lastHref = e);
      }
    }
  }, {
    key: "_processQueuedEvents",
    value: function() {
      var e = this;
      if (this.queuedRRWebEvents.length) {
        var t = l(this.queuedRRWebEvents);
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
        var n, i = {
          url: e
        };
        return null === (n = i = t.maskNetworkRequestFn(i)) || void 0 === n ? void 0 : n.url;
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
      var t = this._minimumDuration, n = this.sessionDuration, i = R(n) && n >= 0, r = R(t) && i && n < t;
      return "buffering" === this.status || r ? (this.flushBufferTimer = setTimeout((function() {
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
      var t, n = this, i = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
      (!this.buffer || this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId && this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), 
      S(this.buffer.sessionId) && !S(this.sessionId) && (this.buffer.sessionId = this.sessionId, 
      this.buffer.windowId = this.windowId), this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), 
      this.flushBufferTimer || (this.flushBufferTimer = setTimeout((function() {
        n._flushBuffer();
      }), 2e3));
    }
  }, {
    key: "_captureSnapshot",
    value: function(e) {
      this.instance.capture("$snapshot", e, {
        _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
        _noTruncate: !0,
        _batchKey: "recordings"
      });
    }
  } ]), e;
}(), li = function() {
  function e(t) {
    i(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
  }
  return s(e, [ {
    key: "call",
    value: function() {
      var e = this, t = {
        token: this.instance.config.token,
        distinct_id: this.instance.get_distinct_id(),
        groups: this.instance.getGroups(),
        person_properties: this.instance.get_property(je),
        group_properties: this.instance.get_property(Ue),
        disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0
      };
      this.instance._send_request({
        method: "POST",
        url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
        data: t,
        compression: Xe.Base64,
        timeout: this.instance.config.feature_flag_request_timeout_ms,
        callback: function(t) {
          return e.parseDecideResponse(t.json);
        }
      });
    }
  }, {
    key: "parseDecideResponse",
    value: function(e) {
      var t, n = this;
      this.instance.featureFlags.setReloadingPaused(!1), this.instance.featureFlags._startReloadTimer();
      var i = !e;
      if (this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(null != e ? e : {}, i), 
      i) j.error("Failed to fetch feature flags from PostHog."); else {
        if (!O || !O.body) return j.info("document not ready yet, trying again in 500 milliseconds..."), 
        void setTimeout((function() {
          n.parseDecideResponse(e);
        }), 500);
        this.instance.toolbar.afterDecideResponse(e), null === (t = this.instance.sessionRecording) || void 0 === t || t.afterDecideResponse(e), 
        Ze.afterDecideResponse(e, this.instance), this.instance._afterDecideResponse(e);
        var r = null == P ? void 0 : P.extendPostHogWithSurveys;
        e.surveys && !r && ie(this.instance.requestRouter.endpointFor("assets", "/static/surveys.js"), (function(e) {
          if (e) return j.error("Could not load surveys script", e);
          P.extendPostHogWithSurveys(n.instance);
        }));
        var s = null == P ? void 0 : P.extendPostHogWithExceptionAutoCapture;
        if (e.autocaptureExceptions && e.autocaptureExceptions && w(s) && ie(this.instance.requestRouter.endpointFor("assets", "/static/exception-autocapture.js"), (function(t) {
          if (t) return j.error("Could not load exception autocapture script", t);
          P.extendPostHogWithExceptionAutocapture(n.instance, e);
        })), e.siteApps) if (this.instance.config.opt_in_site_apps) {
          var o, a = h(e.siteApps);
          try {
            var u = function() {
              var e = o.value, t = e.id, i = e.url, r = n.instance.requestRouter.endpointFor("api", i);
              B["__$$ph_site_app_".concat(t)] = n.instance, ie(r, (function(e) {
                e && j.error("Error while initializing PostHog app with config id ".concat(t), e);
              }));
            };
            for (a.s(); !(o = a.n()).done; ) u();
          } catch (e) {
            a.e(e);
          } finally {
            a.f();
          }
        } else e.siteApps.length > 0 && j.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
      }
    }
  } ]), e;
}(), ci = null != P && P.location ? $t(P.location.hash, "__posthog") || $t(location.hash, "state") : null, di = "_postHogToolbarParams", hi = function() {
  function e(t) {
    i(this, e), o(this, "_toolbarScriptLoaded", !1), this.instance = t;
  }
  return s(e, [ {
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
      var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      if (!P || !O) return !1;
      n = null !== (e = n) && void 0 !== e ? e : P.location, r = null !== (t = r) && void 0 !== t ? t : P.history;
      try {
        if (!i) {
          try {
            P.localStorage.setItem("test", "test"), P.localStorage.removeItem("test");
          } catch (e) {
            return !1;
          }
          i = null == P ? void 0 : P.localStorage;
        }
        var s, o = ci || $t(n.hash, "__posthog") || $t(n.hash, "state"), a = o ? K((function() {
          return JSON.parse(atob(decodeURIComponent(o)));
        })) || K((function() {
          return JSON.parse(decodeURIComponent(o));
        })) : null;
        return a && "ph_authorize" === a.action ? ((s = a).source = "url", s && Object.keys(s).length > 0 && (a.desiredHash ? n.hash = a.desiredHash : r ? r.replaceState("", O.title, n.pathname + n.search) : n.hash = "")) : ((s = JSON.parse(i.getItem(di) || "{}")).source = "localstorage", 
        delete s.userIntent), !(!s.token || this.instance.config.token !== s.token) && (this.loadToolbar(s), 
        !0);
      } catch (e) {
        return !1;
      }
    }
  }, {
    key: "_callLoadToolbar",
    value: function(e) {
      (B.ph_load_toolbar || B.ph_load_editor)(e, this.instance);
    }
  }, {
    key: "loadToolbar",
    value: function(e) {
      var n = this;
      if (!P || P.localStorage.getItem(di) && this._toolbarScriptLoaded) return !1;
      var i = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, r = t(t({
        token: this.instance.config.token
      }, e), {}, {
        apiURL: this.instance.requestRouter.endpointFor("ui")
      }, i ? {
        instrument: !1
      } : {});
      if (P.localStorage.setItem(di, JSON.stringify(t(t({}, r), {}, {
        source: void 0
      }))), this._toolbarScriptLoaded) this._callLoadToolbar(r); else {
        this._toolbarScriptLoaded = !0;
        var s = 3e5, o = Math.floor(Date.now() / s) * s;
        ie(this.instance.requestRouter.endpointFor("assets", "/static/toolbar.js?t=".concat(o)), (function(e) {
          if (e) return j.error("Failed to load toolbar", e), void (n._toolbarScriptLoaded = !1);
          n._callLoadToolbar(r);
        })), ne(P, "turbolinks:load", (function() {
          n._toolbarScriptLoaded = !1, n.loadToolbar(r);
        }));
      }
      return !0;
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
}(), fi = function() {
  function e(t) {
    i(this, e), o(this, "isPaused", !0), o(this, "queue", []), o(this, "flushTimeoutMs", 3e3), 
    this.sendRequest = t;
  }
  return s(e, [ {
    key: "enqueue",
    value: function(e) {
      this.queue.push(e), this.flushTimeout || this.setFlushTimeout();
    }
  }, {
    key: "unload",
    value: function() {
      var e = this;
      this.clearFlushTimeout();
      var n = this.queue.length > 0 ? this.formatQueue() : {}, i = Object.values(n);
      [].concat(l(i.filter((function(e) {
        return 0 === e.url.indexOf("/e");
      }))), l(i.filter((function(e) {
        return 0 !== e.url.indexOf("/e");
      })))).map((function(n) {
        e.sendRequest(t(t({}, n), {}, {
          transport: "sendBeacon"
        }));
      }));
    }
  }, {
    key: "enable",
    value: function() {
      this.isPaused = !1, this.setFlushTimeout();
    }
  }, {
    key: "setFlushTimeout",
    value: function() {
      var e = this;
      this.isPaused || (this.flushTimeout = setTimeout((function() {
        if (e.clearFlushTimeout(), e.queue.length > 0) {
          var t = e.formatQueue(), n = function(n) {
            var i = t[n], r = (new Date).getTime();
            i.data && m(i.data) && z(i.data, (function(e) {
              e.offset = Math.abs(e.timestamp - r), delete e.timestamp;
            })), e.sendRequest(i);
          };
          for (var i in t) n(i);
        }
      }), this.flushTimeoutMs));
    }
  }, {
    key: "clearFlushTimeout",
    value: function() {
      clearTimeout(this.flushTimeout), this.flushTimeout = void 0;
    }
  }, {
    key: "formatQueue",
    value: function() {
      var e = {};
      return z(this.queue, (function(n) {
        var i, r = n, s = (r ? r.batchKey : null) || r.url;
        w(e[s]) && (e[s] = t(t({}, r), {}, {
          data: []
        })), null === (i = e[s].data) || void 0 === i || i.push(r.data);
      })), this.queue = [], e;
    }
  } ]), e;
}(), pi = Uint8Array, gi = Uint16Array, vi = Uint32Array, _i = new pi([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0 ]), mi = new pi([ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0 ]), yi = new pi([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]), bi = function(e, t) {
  for (var n = new gi(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
  var r = new vi(n[30]);
  for (i = 1; i < 30; ++i) for (var s = n[i]; s < n[i + 1]; ++s) r[s] = s - n[i] << 5 | i;
  return [ n, r ];
}, wi = bi(_i, 2), ki = wi[0], Si = wi[1];

ki[28] = 258, Si[258] = 28;

for (var Fi = bi(mi, 0)[1], Ri = new gi(32768), xi = 0; xi < 32768; ++xi) {
  var Ei = (43690 & xi) >>> 1 | (21845 & xi) << 1;
  Ei = (61680 & (Ei = (52428 & Ei) >>> 2 | (13107 & Ei) << 2)) >>> 4 | (3855 & Ei) << 4, 
  Ri[xi] = ((65280 & Ei) >>> 8 | (255 & Ei) << 8) >>> 1;
}

var Pi = function(e, t, n) {
  for (var i = e.length, r = 0, s = new gi(t); r < i; ++r) ++s[e[r] - 1];
  var o, a = new gi(t);
  for (r = 0; r < t; ++r) a[r] = a[r - 1] + s[r - 1] << 1;
  if (n) {
    o = new gi(1 << t);
    var u = 15 - t;
    for (r = 0; r < i; ++r) if (e[r]) for (var l = r << 4 | e[r], c = t - e[r], d = a[e[r] - 1]++ << c, h = d | (1 << c) - 1; d <= h; ++d) o[Ri[d] >>> u] = l;
  } else for (o = new gi(i), r = 0; r < i; ++r) o[r] = Ri[a[e[r] - 1]++] >>> 15 - e[r];
  return o;
}, Ii = new pi(288);

for (xi = 0; xi < 144; ++xi) Ii[xi] = 8;

for (xi = 144; xi < 256; ++xi) Ii[xi] = 9;

for (xi = 256; xi < 280; ++xi) Ii[xi] = 7;

for (xi = 280; xi < 288; ++xi) Ii[xi] = 8;

var Ci = new pi(32);

for (xi = 0; xi < 32; ++xi) Ci[xi] = 5;

var Ti = Pi(Ii, 9, 0), $i = Pi(Ci, 5, 0), Ai = function(e) {
  return (e / 8 >> 0) + (7 & e && 1);
}, Oi = function(e, t, n) {
  (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
  var i = new (e instanceof gi ? gi : e instanceof vi ? vi : pi)(n - t);
  return i.set(e.subarray(t, n)), i;
}, Mi = function(e, t, n) {
  n <<= 7 & t;
  var i = t / 8 >> 0;
  e[i] |= n, e[i + 1] |= n >>> 8;
}, qi = function(e, t, n) {
  n <<= 7 & t;
  var i = t / 8 >> 0;
  e[i] |= n, e[i + 1] |= n >>> 8, e[i + 2] |= n >>> 16;
}, Di = function(e, t) {
  for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
    s: i,
    f: e[i]
  });
  var r = n.length, s = n.slice();
  if (!r) return [ new pi(0), 0 ];
  if (1 == r) {
    var o = new pi(n[0].s + 1);
    return o[n[0].s] = 1, [ o, 1 ];
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
  }; c != r - 1; ) a = n[n[l].f < n[d].f ? l++ : d++], u = n[l != c && n[l].f < n[d].f ? l++ : d++], 
  n[c++] = {
    s: -1,
    f: a.f + u.f,
    l: a,
    r: u
  };
  var h = s[0].s;
  for (i = 1; i < r; ++i) s[i].s > h && (h = s[i].s);
  var f = new gi(h + 1), p = Li(n[c - 1], f, 0);
  if (p > t) {
    i = 0;
    var g = 0, v = p - t, _ = 1 << v;
    for (s.sort((function(e, t) {
      return f[t.s] - f[e.s] || e.f - t.f;
    })); i < r; ++i) {
      var m = s[i].s;
      if (!(f[m] > t)) break;
      g += _ - (1 << p - f[m]), f[m] = t;
    }
    for (g >>>= v; g > 0; ) {
      var y = s[i].s;
      f[y] < t ? g -= 1 << t - f[y]++ - 1 : ++i;
    }
    for (;i >= 0 && g; --i) {
      var b = s[i].s;
      f[b] == t && (--f[b], ++g);
    }
    p = t;
  }
  return [ new pi(f), p ];
}, Li = function e(t, n, i) {
  return -1 == t.s ? Math.max(e(t.l, n, i + 1), e(t.r, n, i + 1)) : n[t.s] = i;
}, Ni = function(e) {
  for (var t = e.length; t && !e[--t]; ) ;
  for (var n = new gi(++t), i = 0, r = e[0], s = 1, o = function(e) {
    n[i++] = e;
  }, a = 1; a <= t; ++a) if (e[a] == r && a != t) ++s; else {
    if (!r && s > 2) {
      for (;s > 138; s -= 138) o(32754);
      s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
    } else if (s > 3) {
      for (o(r), --s; s > 6; s -= 6) o(8304);
      s > 2 && (o(s - 3 << 5 | 8208), s = 0);
    }
    for (;s--; ) o(r);
    s = 1, r = e[a];
  }
  return [ n.subarray(0, i), t ];
}, Bi = function(e, t) {
  for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
  return n;
}, Hi = function(e, t, n) {
  var i = n.length, r = Ai(t + 2);
  e[r] = 255 & i, e[r + 1] = i >>> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
  for (var s = 0; s < i; ++s) e[r + s + 4] = n[s];
  return 8 * (r + 4 + i);
}, ji = function(e, t, n, i, r, s, o, a, u, l, c) {
  Mi(t, c++, n), ++r[256];
  for (var d = Di(r, 15), h = d[0], f = d[1], p = Di(s, 15), g = p[0], v = p[1], _ = Ni(h), m = _[0], y = _[1], b = Ni(g), w = b[0], k = b[1], S = new gi(19), F = 0; F < m.length; ++F) S[31 & m[F]]++;
  for (F = 0; F < w.length; ++F) S[31 & w[F]]++;
  for (var R = Di(S, 7), x = R[0], E = R[1], P = 19; P > 4 && !x[yi[P - 1]]; --P) ;
  var I, C, T, $, A = l + 5 << 3, O = Bi(r, Ii) + Bi(s, Ci) + o, M = Bi(r, h) + Bi(s, g) + o + 14 + 3 * P + Bi(S, x) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
  if (A <= O && A <= M) return Hi(t, c, e.subarray(u, u + l));
  if (Mi(t, c, 1 + (M < O)), c += 2, M < O) {
    I = Pi(h, f, 0), C = h, T = Pi(g, v, 0), $ = g;
    var q = Pi(x, E, 0);
    Mi(t, c, y - 257), Mi(t, c + 5, k - 1), Mi(t, c + 10, P - 4), c += 14;
    for (F = 0; F < P; ++F) Mi(t, c + 3 * F, x[yi[F]]);
    c += 3 * P;
    for (var D = [ m, w ], L = 0; L < 2; ++L) {
      var N = D[L];
      for (F = 0; F < N.length; ++F) {
        var B = 31 & N[F];
        Mi(t, c, q[B]), c += x[B], B > 15 && (Mi(t, c, N[F] >>> 5 & 127), c += N[F] >>> 12);
      }
    }
  } else I = Ti, C = Ii, T = $i, $ = Ci;
  for (F = 0; F < a; ++F) if (i[F] > 255) {
    B = i[F] >>> 18 & 31;
    qi(t, c, I[B + 257]), c += C[B + 257], B > 7 && (Mi(t, c, i[F] >>> 23 & 31), c += _i[B]);
    var H = 31 & i[F];
    qi(t, c, T[H]), c += $[H], H > 3 && (qi(t, c, i[F] >>> 5 & 8191), c += mi[H]);
  } else qi(t, c, I[i[F]]), c += C[i[F]];
  return qi(t, c, I[256]), c + C[256];
}, Ui = new vi([ 65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632 ]), Vi = new pi(0), Wi = function() {
  for (var e = new vi(256), t = 0; t < 256; ++t) {
    for (var n = t, i = 9; --i; ) n = (1 & n && 3988292384) ^ n >>> 1;
    e[t] = n;
  }
  return e;
}(), zi = function(e, t, n, i, r) {
  return function(e, t, n, i, r, s) {
    var o = e.length, a = new pi(i + o + 5 * (1 + Math.floor(o / 7e3)) + r), u = a.subarray(i, a.length - r), l = 0;
    if (!t || o < 8) for (var c = 0; c <= o; c += 65535) {
      var d = c + 65535;
      d < o ? l = Hi(u, l, e.subarray(c, d)) : (u[c] = s, l = Hi(u, l, e.subarray(c, o)));
    } else {
      for (var h = Ui[t - 1], f = h >>> 13, p = 8191 & h, g = (1 << n) - 1, v = new gi(32768), _ = new gi(g + 1), m = Math.ceil(n / 3), y = 2 * m, b = function(t) {
        return (e[t] ^ e[t + 1] << m ^ e[t + 2] << y) & g;
      }, w = new vi(25e3), k = new gi(288), S = new gi(32), F = 0, R = 0, x = (c = 0, 
      0), E = 0, P = 0; c < o; ++c) {
        var I = b(c), C = 32767 & c, T = _[I];
        if (v[C] = T, _[I] = C, E <= c) {
          var $ = o - c;
          if ((F > 7e3 || x > 24576) && $ > 423) {
            l = ji(e, u, 0, w, k, S, R, x, P, c - P, l), x = F = R = 0, P = c;
            for (var A = 0; A < 286; ++A) k[A] = 0;
            for (A = 0; A < 30; ++A) S[A] = 0;
          }
          var O = 2, M = 0, q = p, D = C - T & 32767;
          if ($ > 2 && I == b(c - D)) for (var L = Math.min(f, $) - 1, N = Math.min(32767, c), B = Math.min(258, $); D <= N && --q && C != T; ) {
            if (e[c + O] == e[c + O - D]) {
              for (var H = 0; H < B && e[c + H] == e[c + H - D]; ++H) ;
              if (H > O) {
                if (O = H, M = D, H > L) break;
                var j = Math.min(D, H - 2), U = 0;
                for (A = 0; A < j; ++A) {
                  var V = c - D + A + 32768 & 32767, W = V - v[V] + 32768 & 32767;
                  W > U && (U = W, T = V);
                }
              }
            }
            D += (C = T) - (T = v[C]) + 32768 & 32767;
          }
          if (M) {
            w[x++] = 268435456 | Si[O] << 18 | Fi[M];
            var z = 31 & Si[O], G = 31 & Fi[M];
            R += _i[z] + mi[G], ++k[257 + z], ++S[G], E = c + O, ++F;
          } else w[x++] = e[c], ++k[e[c]];
        }
      }
      l = ji(e, u, s, w, k, S, R, x, P, c - P, l), s || (l = Hi(u, l, Vi));
    }
    return Oi(a, 0, i + Ai(l) + r);
  }(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, i, !r);
}, Gi = function(e, t, n) {
  for (;n; ++t) e[t] = n, n >>>= 8;
};

function Qi(e, t) {
  void 0 === t && (t = {});
  var n = function() {
    var e = 4294967295;
    return {
      p: function(t) {
        for (var n = e, i = 0; i < t.length; ++i) n = Wi[255 & n ^ t[i]] ^ n >>> 8;
        e = n;
      },
      d: function() {
        return 4294967295 ^ e;
      }
    };
  }(), i = e.length;
  n.p(e);
  var r, s = zi(e, t, 10 + ((r = t).filename && r.filename.length + 1 || 0), 8), o = s.length;
  return function(e, t) {
    var n = t.filename;
    if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, 
    e[9] = 3, 0 != t.mtime && Gi(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), 
    n) {
      e[3] = 8;
      for (var i = 0; i <= n.length; ++i) e[i + 10] = n.charCodeAt(i);
    }
  }(s, t), Gi(s, o - 8, n.d()), Gi(s, o - 4, i), s;
}

var Yi = !!D || !!q, Ji = "text/plain", Ki = function(e, n) {
  var i = u(e.split("?"), 2), r = i[0], s = i[1], o = t({}, n);
  null == s || s.split("&").forEach((function(e) {
    var t = u(e.split("="), 1)[0];
    delete o[t];
  }));
  var a = Ct(o);
  return a = a ? (s ? s + "&" : "") + a : s, "".concat(r, "?").concat(a);
}, Xi = function(e) {
  return "data=" + encodeURIComponent("string" == typeof e ? e : JSON.stringify(e));
}, Zi = function(e) {
  var t = e.data, n = e.compression;
  if (t) {
    if (n === Xe.GZipJS) {
      var i = Qi(function(e, t) {
        var n = e.length;
        if (!t && "undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
        for (var i = new pi(e.length + (e.length >>> 1)), r = 0, s = function(e) {
          i[r++] = e;
        }, o = 0; o < n; ++o) {
          if (r + 5 > i.length) {
            var a = new pi(r + 8 + (n - o << 1));
            a.set(i), i = a;
          }
          var u = e.charCodeAt(o);
          u < 128 || t ? s(u) : u < 2048 ? (s(192 | u >>> 6), s(128 | 63 & u)) : u > 55295 && u < 57344 ? (s(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++o)) >>> 18), 
          s(128 | u >>> 12 & 63), s(128 | u >>> 6 & 63), s(128 | 63 & u)) : (s(224 | u >>> 12), 
          s(128 | u >>> 6 & 63), s(128 | 63 & u));
        }
        return Oi(i, 0, r);
      }(JSON.stringify(t)), {
        mtime: 0
      });
      return {
        contentType: Ji,
        body: new Blob([ i ], {
          type: Ji
        })
      };
    }
    if (n === Xe.Base64) {
      var r = function(e) {
        var t, n, i, r, s, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, u = 0, l = "", c = [];
        if (!e) return e;
        e = te(e);
        do {
          t = (s = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, 
          n = s >> 12 & 63, i = s >> 6 & 63, r = 63 & s, c[u++] = o.charAt(t) + o.charAt(n) + o.charAt(i) + o.charAt(r);
        } while (a < e.length);
        switch (l = c.join(""), e.length % 3) {
         case 1:
          l = l.slice(0, -2) + "==";
          break;

         case 2:
          l = l.slice(0, -1) + "=";
        }
        return l;
      }(JSON.stringify(t));
      return {
        contentType: "application/x-www-form-urlencoded",
        body: Xi(r)
      };
    }
    return {
      contentType: "application/json",
      body: JSON.stringify(t)
    };
  }
}, er = function(e) {
  var t, n = new D;
  n.open(e.method || "GET", e.url, !0);
  var i = null !== (t = Zi(e)) && void 0 !== t ? t : {}, r = i.contentType, s = i.body;
  z(e.headers, (function(e, t) {
    n.setRequestHeader(t, e);
  })), r && n.setRequestHeader("Content-Type", r), e.timeout && (n.timeout = e.timeout), 
  n.withCredentials = !0, n.onreadystatechange = function() {
    if (4 === n.readyState) {
      var t, i = {
        statusCode: n.status,
        text: n.responseText
      };
      if (200 === n.status) try {
        i.json = JSON.parse(n.responseText);
      } catch (e) {}
      null === (t = e.callback) || void 0 === t || t.call(e, i);
    }
  }, n.send(s);
}, tr = function(e) {
  var t, n, i = null !== (t = Zi(e)) && void 0 !== t ? t : {}, r = i.contentType, s = i.body, o = new Headers;
  z(o, (function(e, t) {
    o.append(t, e);
  })), r && o.append("Content-Type", r);
  var a = e.url, u = null;
  if (L) {
    var l = new L;
    u = {
      signal: l.signal,
      timeout: setTimeout((function() {
        return l.abort();
      }), e.timeout)
    };
  }
  q(a, {
    method: (null == e ? void 0 : e.method) || "GET",
    headers: o,
    keepalive: "POST" === e.method,
    body: s,
    signal: null === (n = u) || void 0 === n ? void 0 : n.signal
  }).then((function(t) {
    return t.text().then((function(n) {
      var i, r = {
        statusCode: t.status,
        text: n
      };
      if (200 === t.status) try {
        r.json = JSON.parse(n);
      } catch (e) {
        j.error(e);
      }
      null === (i = e.callback) || void 0 === i || i.call(e, r);
    }));
  })).catch((function(t) {
    var n;
    j.error(t), null === (n = e.callback) || void 0 === n || n.call(e, {
      statusCode: 0,
      text: t
    });
  })).finally((function() {
    return u ? clearTimeout(u.timeout) : null;
  }));
}, nr = function(e) {
  var t = Ki(e.url, {
    beacon: "1"
  });
  try {
    var n, i = null !== (n = Zi(e)) && void 0 !== n ? n : {}, r = i.contentType, s = i.body, o = "string" == typeof s ? new Blob([ s ], {
      type: r
    }) : s;
    A.sendBeacon(t, o);
  } catch (e) {}
}, ir = function(e) {
  var t;
  if (O) {
    var n = O.createElement("script");
    n.type = "text/javascript", n.async = !0, n.defer = !0, n.src = e.url;
    var i = O.getElementsByTagName("script")[0];
    null === (t = i.parentNode) || void 0 === t || t.insertBefore(n, i);
  }
}, rr = [ "retriesPerformedSoFar" ];

var sr, or = function() {
  function e(t) {
    var n = this;
    i(this, e), o(this, "isPolling", !1), o(this, "pollIntervalMs", 3e3), o(this, "queue", []), 
    this.instance = t, this.queue = [], this.areWeOnline = !0, !w(P) && "onLine" in P.navigator && (this.areWeOnline = P.navigator.onLine, 
    P.addEventListener("online", (function() {
      n.areWeOnline = !0, n.flush();
    })), P.addEventListener("offline", (function() {
      n.areWeOnline = !1;
    })));
  }
  return s(e, [ {
    key: "retriableRequest",
    value: function(e) {
      var n = this, i = e.retriesPerformedSoFar, r = a(e, rr);
      R(i) && i > 0 && (r.url = Ki(r.url, {
        retry_count: i
      })), this.instance._send_request(t(t({}, r), {}, {
        callback: function(e) {
          var s;
          200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != i ? i : 0) < 10 ? n.enqueue(t({}, r)) : null === (s = r.callback) || void 0 === s || s.call(r, e);
        }
      }));
    }
  }, {
    key: "enqueue",
    value: function(e) {
      var t = e.retriesPerformedSoFar || 0;
      e.retriesPerformedSoFar = t + 1;
      var n = function(e) {
        var t = 3e3 * Math.pow(2, e), n = t / 2, i = Math.min(18e5, t), r = (Math.random() - .5) * (i - n);
        return Math.ceil(i + r);
      }(t), i = Date.now() + n;
      this.queue.push({
        retryAt: i,
        requestOptions: e
      });
      var r = "Enqueued failed request for retry in ".concat(n);
      navigator.onLine || (r += " (Browser is offline)"), j.warn(r), this.isPolling || (this.isPolling = !0, 
      this.poll());
    }
  }, {
    key: "poll",
    value: function() {
      var e = this;
      this.poller && clearTimeout(this.poller), this.poller = setTimeout((function() {
        e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll();
      }), this.pollIntervalMs);
    }
  }, {
    key: "flush",
    value: function() {
      var e = Date.now(), t = [], n = this.queue.filter((function(n) {
        return n.retryAt < e || (t.push(n), !1);
      }));
      if (this.queue = t, n.length > 0) {
        var i, r = h(n);
        try {
          for (r.s(); !(i = r.n()).done; ) {
            var s = i.value.requestOptions;
            this.retriableRequest(s);
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
      this.poller && (clearTimeout(this.poller), this.poller = void 0);
      var e, n = h(this.queue);
      try {
        for (n.s(); !(e = n.n()).done; ) {
          var i = e.value.requestOptions;
          try {
            this.instance._send_request(t(t({}, i), {}, {
              transport: "sendBeacon"
            }));
          } catch (e) {
            j.error(e);
          }
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
      this.queue = [];
    }
  } ]), e;
}(), ar = 1800, ur = function() {
  function e(t, n, r, s) {
    i(this, e), o(this, "_sessionIdChangedHandlers", []), this.config = t, this.persistence = n, 
    this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, 
    this._sessionActivityTimestamp = null, this._sessionIdGenerator = r || dt, this._windowIdGenerator = s || dt;
    var a = t.persistence_name || t.token, u = t.session_idle_timeout_seconds || ar;
    if (R(u) ? u > ar ? j.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : u < 60 && j.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (j.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), 
    u = ar), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(u, 60), ar), this._window_id_storage_key = "ph_" + a + "_window_id", 
    this._primary_window_exists_storage_key = "ph_" + a + "_primary_window_exists", 
    this._canUseSessionStorage()) {
      var l = xt.parse(this._window_id_storage_key), c = xt.parse(this._primary_window_exists_storage_key);
      l && !c ? this._windowId = l : xt.remove(this._window_id_storage_key), xt.set(this._primary_window_exists_storage_key, !0);
    }
    this._listenToReloadWindow();
  }
  return s(e, [ {
    key: "onSessionId",
    value: function(e) {
      var t = this;
      return w(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), 
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
      return "memory" !== this.config.persistence && !this.persistence.disabled && xt.is_supported();
    }
  }, {
    key: "_setWindowId",
    value: function(e) {
      e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && xt.set(this._window_id_storage_key, e));
    }
  }, {
    key: "_getWindowId",
    value: function() {
      return this._windowId ? this._windowId : this._canUseSessionStorage() ? xt.parse(this._window_id_storage_key) : null;
    }
  }, {
    key: "_setSessionId",
    value: function(e, t, n) {
      e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, 
      this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register(o({}, Le, [ t, e, n ])));
    }
  }, {
    key: "_getSessionId",
    value: function() {
      if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [ this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp ];
      var e = this.persistence.props[Le];
      return m(e) && 2 === e.length && e.push(e[0]), e || [ 0, null, 0 ];
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
      null == P || P.addEventListener("beforeunload", (function() {
        e._canUseSessionStorage() && xt.remove(e._primary_window_exists_storage_key);
      }));
    }
  }, {
    key: "checkAndGetSessionAndWindowId",
    value: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (new Date).getTime(), n = u(this._getSessionId(), 3), i = n[0], r = n[1], s = n[2], o = this._getWindowId(), a = s && s > 0 && Math.abs(t - s) > 864e5, l = !1, c = !r, d = !e && Math.abs(t - i) > this._sessionTimeoutMs;
      c || d || a ? (r = this._sessionIdGenerator(), o = this._windowIdGenerator(), j.info("[SessionId] new session ID generated", {
        sessionId: r,
        windowId: o,
        changeReason: {
          noSessionId: c,
          activityTimeout: d,
          sessionPastMaximumLength: a
        }
      }), s = t, l = !0) : o || (o = this._windowIdGenerator(), l = !0);
      var h = 0 === i || !e || a ? t : i, f = 0 === s ? (new Date).getTime() : s;
      return this._setWindowId(o), this._setSessionId(r, h, f), l && this._sessionIdChangedHandlers.forEach((function(e) {
        return e(r, o);
      })), {
        sessionId: r,
        windowId: o,
        sessionStartTimestamp: f
      };
    }
  } ]), e;
}();

!function(e) {
  e.US = "us", e.EU = "eu", e.CUSTOM = "custom";
}(sr || (sr = {}));

var lr = function() {
  function e(t) {
    i(this, e), o(this, "_regionCache", {}), this.instance = t;
  }
  return s(e, [ {
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
      return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = sr.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = sr.EU : this._regionCache[this.apiHost] = sr.CUSTOM), 
      this._regionCache[this.apiHost];
    }
  }, {
    key: "endpointFor",
    value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if (t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e) return (this.uiHost || this.apiHost) + t;
      if (this.region === sr.CUSTOM) return this.apiHost + t;
      var n = "i.posthog.com" + t;
      switch (e) {
       case "assets":
        return "https://".concat(this.region, "-assets.").concat(n);

       case "api":
        return "https://".concat(this.region, ".").concat(n);
      }
    }
  } ]), e;
}(), cr = s((function e(t, n, r, s) {
  i(this, e), this.name = "posthog-js", this.setupOnce = function(e) {
    e((function(e) {
      var i, o, a, u, l;
      if ("error" !== e.level || !t.__loaded) return e;
      e.tags || (e.tags = {});
      var c = t.requestRouter.endpointFor("ui", "/person/" + t.get_distinct_id());
      e.tags["PostHog Person URL"] = c, t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = t.get_session_replay_url({
        withTimestamp: !0
      }));
      var d = (null === (i = e.exception) || void 0 === i ? void 0 : i.values) || [], h = {
        $exception_message: null === (o = d[0]) || void 0 === o ? void 0 : o.value,
        $exception_type: null === (a = d[0]) || void 0 === a ? void 0 : a.type,
        $exception_personURL: c,
        $sentry_event_id: e.event_id,
        $sentry_exception: e.exception,
        $sentry_exception_message: null === (u = d[0]) || void 0 === u ? void 0 : u.value,
        $sentry_exception_type: null === (l = d[0]) || void 0 === l ? void 0 : l.type,
        $sentry_tags: e.tags
      };
      return n && r && (h.$sentry_url = (s || "https://sentry.io/organizations/") + n + "/issues/?project=" + r + "&query=" + e.event_id), 
      t.capture("$exception", h), e;
    }));
  };
})), dr = function() {
  function e(t) {
    var n = this;
    i(this, e), o(this, "_hasSeenPageView", !1), o(this, "_updateScrollData", (function() {
      var e, t, i, r;
      n._pageViewData || (n._pageViewData = n._createPageViewData());
      var s = n._pageViewData, o = n._scrollY(), a = n._scrollHeight(), u = n._contentY(), l = n._contentHeight();
      s.lastScrollY = o, s.maxScrollY = Math.max(o, null !== (e = s.maxScrollY) && void 0 !== e ? e : 0), 
      s.maxScrollHeight = Math.max(a, null !== (t = s.maxScrollHeight) && void 0 !== t ? t : 0), 
      s.lastContentY = u, s.maxContentY = Math.max(u, null !== (i = s.maxContentY) && void 0 !== i ? i : 0), 
      s.maxContentHeight = Math.max(l, null !== (r = s.maxContentHeight) && void 0 !== r ? r : 0);
    })), this._instance = t;
  }
  return s(e, [ {
    key: "_createPageViewData",
    value: function() {
      var e;
      return {
        pathname: null !== (e = null == P ? void 0 : P.location.pathname) && void 0 !== e ? e : ""
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
      var t = e.maxScrollHeight, n = e.lastScrollY, i = e.maxScrollY, r = e.maxContentHeight, s = e.lastContentY, o = e.maxContentY;
      return t = Math.ceil(t), n = Math.ceil(n), i = Math.ceil(i), r = Math.ceil(r), s = Math.ceil(s), 
      o = Math.ceil(o), {
        $prev_pageview_last_scroll: n,
        $prev_pageview_last_scroll_percentage: t <= 1 ? 1 : hr(n / t, 0, 1),
        $prev_pageview_max_scroll: i,
        $prev_pageview_max_scroll_percentage: t <= 1 ? 1 : hr(i / t, 0, 1),
        $prev_pageview_last_content: s,
        $prev_pageview_last_content_percentage: r <= 1 ? 1 : hr(s / r, 0, 1),
        $prev_pageview_max_content: o,
        $prev_pageview_max_content_percentage: r <= 1 ? 1 : hr(o / r, 0, 1)
      };
    }
  }, {
    key: "startMeasuringScrollPosition",
    value: function() {
      null == P || P.addEventListener("scroll", this._updateScrollData, !0), null == P || P.addEventListener("scrollend", this._updateScrollData, !0), 
      null == P || P.addEventListener("resize", this._updateScrollData);
    }
  }, {
    key: "stopMeasuringScrollPosition",
    value: function() {
      null == P || P.removeEventListener("scroll", this._updateScrollData), null == P || P.removeEventListener("scrollend", this._updateScrollData), 
      null == P || P.removeEventListener("resize", this._updateScrollData);
    }
  }, {
    key: "_scrollElement",
    value: function() {
      if (!this._instance.config.scroll_root_selector) return null == P ? void 0 : P.document.documentElement;
      var e, t = h(m(this._instance.config.scroll_root_selector) ? this._instance.config.scroll_root_selector : [ this._instance.config.scroll_root_selector ]);
      try {
        for (t.s(); !(e = t.n()).done; ) {
          var n = e.value, i = null == P ? void 0 : P.document.querySelector(n);
          if (i) return i;
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
      return P && (P.scrollY || P.pageYOffset || P.document.documentElement.scrollTop) || 0;
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

function hr(e, t, n) {
  return Math.max(t, Math.min(e, n));
}

var fr = {
  icontains: function(e) {
    return !!P && P.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1;
  },
  regex: function(e) {
    return !!P && It(P.location.href, e);
  },
  exact: function(e) {
    return (null == P ? void 0 : P.location.href) === e;
  }
}, pr = function() {
  function e(t) {
    i(this, e), this.instance = t;
  }
  return s(e, [ {
    key: "getSurveys",
    value: function(e) {
      var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = this.instance.get_property(Ve);
      if (i && !n) return e(i);
      this.instance._send_request({
        url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
        method: "GET",
        transport: "XHR",
        callback: function(n) {
          var i;
          if (200 !== n.statusCode || !n.json) return e([]);
          var r = n.json.surveys || [];
          return null === (i = t.instance.persistence) || void 0 === i || i.register(o({}, Ve, r)), 
          e(r);
        }
      });
    }
  }, {
    key: "getActiveMatchingSurveys",
    value: function(e) {
      var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.getSurveys((function(n) {
        var i = n.filter((function(e) {
          return !(!e.start_date || e.end_date);
        })).filter((function(e) {
          var t, n, i, r;
          if (!e.conditions) return !0;
          var s = null === (t = e.conditions) || void 0 === t || !t.url || fr[null !== (n = null === (i = e.conditions) || void 0 === i ? void 0 : i.urlMatchType) && void 0 !== n ? n : "icontains"](e.conditions.url), o = null === (r = e.conditions) || void 0 === r || !r.selector || (null == O ? void 0 : O.querySelector(e.conditions.selector));
          return s && o;
        })).filter((function(e) {
          if (!e.linked_flag_key && !e.targeting_flag_key) return !0;
          var n = !e.linked_flag_key || t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key), i = !e.targeting_flag_key || t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key);
          return n && i;
        }));
        return e(i);
      }), n);
    }
  } ]), e;
}(), gr = function() {
  function e() {
    var t = this;
    i(this, e), o(this, "limits", {}), o(this, "checkForLimiting", (function(e) {
      var n = e.text;
      if (n && n.length) try {
        (JSON.parse(n).quota_limited || []).forEach((function(e) {
          j.info("[RateLimiter] ".concat(e || "events", " is quota limited.")), t.limits[e] = (new Date).getTime() + 6e4;
        }));
      } catch (e) {
        return void j.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
          text: n
        });
      }
    }));
  }
  return s(e, [ {
    key: "isRateLimited",
    value: function(e) {
      var t = this.limits[e || "events"] || !1;
      return !1 !== t && (new Date).getTime() < t;
    }
  } ]), e;
}(), vr = function() {
  return t({
    initialPathName: (null == M ? void 0 : M.pathname) || "",
    referringDomain: Cn.referringDomain()
  }, Cn.campaignParams());
}, _r = function() {
  function e(t, n, r) {
    var s = this;
    i(this, e), o(this, "_onSessionIdCallback", (function(e) {
      var t = s._getStoredProps();
      if (!t || t.sessionId !== e) {
        var n = {
          sessionId: e,
          props: s._sessionSourceParamGenerator()
        };
        s._persistence.register(o({}, Qe, n));
      }
    })), this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = r || vr, 
    this._sessionIdManager.onSessionId(this._onSessionIdCallback);
  }
  return s(e, [ {
    key: "_getStoredProps",
    value: function() {
      return this._persistence.props[Qe];
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
}(), mr = [ "ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google" ], yr = function(e, t) {
  if (!e) return !1;
  var n = e.toLowerCase();
  return mr.concat(t || []).some((function(e) {
    var t = e.toLowerCase();
    return n.includes ? n.includes(t) : -1 !== n.indexOf(t);
  }));
}, br = {}, wr = function() {}, kr = "posthog", Sr = !Yi && -1 === (null == N ? void 0 : N.indexOf("MSIE")) && -1 === (null == N ? void 0 : N.indexOf("Mozilla")), Fr = function() {
  var e, t, n;
  return {
    api_host: "https://app.posthog.com",
    api_transport: "XHR",
    ui_host: null,
    token: "",
    autocapture: !0,
    rageclick: !0,
    cross_subdomain_cookie: (t = null == O ? void 0 : O.location, n = null == t ? void 0 : t.hostname, 
    !!k(n) && "herokuapp.com" !== n.split(".").slice(-2).join(".")),
    persistence: "localStorage+cookie",
    persistence_name: "",
    cookie_name: "",
    loaded: wr,
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
    secure_cookie: "https:" === (null == P || null === (e = P.location) || void 0 === e ? void 0 : e.protocol),
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
    feature_flag_request_timeout_ms: 3e3,
    on_request_error: function(e) {
      var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
      j.error(t);
    },
    get_device_id: function(e) {
      return e;
    },
    _onCapture: wr,
    capture_performance: void 0,
    name: "posthog",
    bootstrap: {},
    disable_compression: !1,
    session_idle_timeout_seconds: 1800
  };
}, Rr = function() {
  function e() {
    i(this, e), o(this, "__forceAllowLocalhost", !1);
  }
  return s(e, [ {
    key: "_forceAllowLocalhost",
    get: function() {
      return this.__forceAllowLocalhost;
    },
    set: function(e) {
      j.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), 
      this.__forceAllowLocalhost = e;
    }
  } ]), e;
}(), xr = function() {
  function e() {
    var t = this;
    i(this, e), o(this, "webPerformance", new Rr), this.config = Fr(), this.decideEndpointWasHit = !1, 
    this.SentryIntegration = cr, this.segmentIntegration = function() {
      return function(e) {
        Promise && Promise.resolve || j.warn("This browser does not have Promise support, and can not use the segment integration");
        var t = function(t, n) {
          t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(), t.event.userId && t.event.userId !== e.get_distinct_id() && (e.register({
            distinct_id: t.event.userId
          }), e.reloadFeatureFlags());
          var i = e._calculate_event_properties(n, t.event.properties);
          return t.event.properties = Object.assign({}, i, t.event.properties), t;
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
    }, this.__captureHooks = [], this.__request_queue = [], this.__loaded = !1, this.__autocapture = void 0, 
    this.analyticsDefaultEndpoint = "/e/", this.elementsChainAsString = !1, this.featureFlags = new rt(this), 
    this.toolbar = new hi(this), this.pageViewManager = new dr(this), this.surveys = new pr(this), 
    this.rateLimiter = new gr, this.requestRouter = new lr(this), this.people = {
      set: function(e, n, i) {
        var r = k(e) ? o({}, e, n) : e;
        t.setPersonProperties(r), null == i || i({});
      },
      set_once: function(e, n, i) {
        var r = k(e) ? o({}, e, n) : e;
        t.setPersonProperties(void 0, r), null == i || i({});
      }
    };
  }
  return s(e, [ {
    key: "init",
    value: function(t, n, i) {
      if (i && i !== kr) {
        var r, s = null !== (r = br[i]) && void 0 !== r ? r : new e;
        return s._init(t, n, i), br[i] = s, br[kr][i] = s, s;
      }
      return this._init(t, n, i);
    }
  }, {
    key: "_init",
    value: function(e) {
      var n, i, r = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0;
      if (w(e) || function(e) {
        return k(e) && 0 === e.trim().length;
      }(e)) return j.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), 
      this;
      if (this.__loaded) return j.warn("You have already initialized PostHog! Re-initializing is a no-op"), 
      this;
      if (this.__loaded = !0, this.config = {}, this._triggered_notifs = [], s.request_headers = s.request_headers || s.xhr_headers, 
      this.set_config(G({}, Fr(), s, {
        name: o,
        token: e
      })), this.compression = s.disable_compression ? void 0 : Xe.Base64, this.persistence = new $n(this.config), 
      this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new $n(t(t({}, this.config), {}, {
        persistence: "sessionStorage"
      })), this._requestQueue = new fi((function(e) {
        return r._send_request(e);
      })), this._retryQueue = new or(this), this.__captureHooks = [], this.__request_queue = [], 
      this.sessionManager = new ur(this.config, this.persistence), this.sessionPropsManager = new _r(this.sessionManager, this.persistence), 
      this.sessionRecording = new ui(this), this.sessionRecording.startRecordingIfEnabled(), 
      this.config.disable_scroll_properties || this.pageViewManager.startMeasuringScrollPosition(), 
      this.__autocapture = this.config.autocapture, Ze._setIsAutocaptureEnabled(this), 
      Ze._isAutocaptureEnabled) {
        this.__autocapture = this.config.autocapture;
        Ze.enabledForProject(this.config.token, 100, 100) ? Ze.isBrowserSupported() ? Ze.init(this) : (this.__autocapture = !1, 
        j.info("Disabling Automatic Event Collection because this browser is not supported")) : (this.__autocapture = !1, 
        j.info("Not in active bucket: disabling Automatic Event Collection."));
      }
      if (f.DEBUG = f.DEBUG || this.config.debug, this._gdpr_init(), s.segment && (this.config.get_device_id = function() {
        return s.segment.user().anonymousId();
      }, s.segment.user().id() && (this.register({
        distinct_id: s.segment.user().id()
      }), this.persistence.set_user_state("identified"))), void 0 !== (null === (n = s.bootstrap) || void 0 === n ? void 0 : n.distinctID)) {
        var a, u, l = this.config.get_device_id(dt()), c = null !== (a = s.bootstrap) && void 0 !== a && a.isIdentifiedID ? l : s.bootstrap.distinctID;
        this.persistence.set_user_state(null !== (u = s.bootstrap) && void 0 !== u && u.isIdentifiedID ? "identified" : "anonymous"), 
        this.register({
          distinct_id: s.bootstrap.distinctID,
          $device_id: c
        });
      }
      if (this._hasBootstrappedFeatureFlags()) {
        var d, h, p = Object.keys((null === (d = s.bootstrap) || void 0 === d ? void 0 : d.featureFlags) || {}).filter((function(e) {
          var t, n;
          return !(null === (t = s.bootstrap) || void 0 === t || null === (n = t.featureFlags) || void 0 === n || !n[e]);
        })).reduce((function(e, t) {
          var n, i;
          return e[t] = (null === (n = s.bootstrap) || void 0 === n || null === (i = n.featureFlags) || void 0 === i ? void 0 : i[t]) || !1, 
          e;
        }), {}), g = Object.keys((null === (h = s.bootstrap) || void 0 === h ? void 0 : h.featureFlagPayloads) || {}).filter((function(e) {
          return p[e];
        })).reduce((function(e, t) {
          var n, i, r, o;
          null !== (n = s.bootstrap) && void 0 !== n && null !== (i = n.featureFlagPayloads) && void 0 !== i && i[t] && (e[t] = null === (r = s.bootstrap) || void 0 === r || null === (o = r.featureFlagPayloads) || void 0 === o ? void 0 : o[t]);
          return e;
        }), {});
        this.featureFlags.receivedFeatureFlags({
          featureFlags: p,
          featureFlagPayloads: g
        });
      }
      if (!this.get_distinct_id()) {
        var v = this.config.get_device_id(dt());
        this.register_once({
          distinct_id: v,
          $device_id: v
        }, ""), this.persistence.set_user_state("anonymous");
      }
      return null == P || null === (i = P.addEventListener) || void 0 === i || i.call(P, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), 
      this.toolbar.maybeLoadToolbar(), s.segment ? s.segment.register(this.segmentIntegration()).then((function() {
        r._loaded();
      })) : this._loaded(), this;
    }
  }, {
    key: "_afterDecideResponse",
    value: function(e) {
      var t;
      this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = Q(e.supportedCompression, Xe.GZipJS) ? Xe.GZipJS : Q(e.supportedCompression, Xe.Base64) ? Xe.Base64 : void 0), 
      null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), 
      e.elementsChainAsString && (this.elementsChainAsString = e.elementsChainAsString);
    }
  }, {
    key: "_loaded",
    value: function() {
      var e = this, t = this.config.advanced_disable_decide;
      t || this.featureFlags.setReloadingPaused(!0);
      try {
        this.config.loaded(this);
      } catch (e) {
        j.critical("`loaded` function failed", e);
      }
      this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout((function() {
        O && e.capture("$pageview", {
          title: O.title
        }, {
          send_instantly: !0
        });
      }), 1), t || (new li(this).call(), this.featureFlags.resetRequestQueue());
    }
  }, {
    key: "_start_queue_if_opted_in",
    value: function() {
      var e;
      this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.enable());
    }
  }, {
    key: "_dom_loaded",
    value: function() {
      var e = this;
      this.has_opted_out_capturing() || W(this.__request_queue, (function(t) {
        return e._send_retriable_request(t);
      })), this.__request_queue = [], this._start_queue_if_opted_in();
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
    key: "_send_request",
    value: function(e) {
      var n = this;
      this.__loaded && (Sr ? this.__request_queue.push(e) : this.rateLimiter.isRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, 
      e.url = Ki(e.url, {
        ip: this.config.ip ? 1 : 0
      }), e.headers = this.config.request_headers, e.compression = "best-available" === e.compression ? this.compression : e.compression, 
      function(e) {
        var n = t({}, e);
        n.timeout = n.timeout || 6e4, n.url = Ki(n.url, {
          _: (new Date).getTime().toString(),
          ver: f.LIB_VERSION,
          compression: n.compression
        }), "sendBeacon" === n.transport && null != A && A.sendBeacon ? nr(n) : "fetch" === n.transport && q ? tr(n) : D || !O ? er(n) : ir(n);
      }(t(t({}, e), {}, {
        callback: function(t) {
          var i, r, s;
          (n.rateLimiter.checkForLimiting(t), t.statusCode >= 400) && (null === (r = (s = n.config).on_request_error) || void 0 === r || r.call(s, t));
          null === (i = e.callback) || void 0 === i || i.call(e, t);
        }
      }))));
    }
  }, {
    key: "_send_retriable_request",
    value: function(e) {
      this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e);
    }
  }, {
    key: "_execute_array",
    value: function(e) {
      var t, n = this, i = [], r = [], s = [];
      W(e, (function(e) {
        e && (t = e[0], m(t) ? s.push(e) : y(e) ? e.call(n) : m(e) && "alias" === t ? i.push(e) : m(e) && -1 !== t.indexOf("capture") && y(n[t]) ? s.push(e) : r.push(e));
      }));
      var o = function(e, t) {
        W(e, (function(e) {
          if (m(e[0])) {
            var n = t;
            z(e, (function(e) {
              n = n[e[0]].apply(n, e.slice(1));
            }));
          } else this[e[0]].apply(this, e.slice(1));
        }), t);
      };
      o(i, this), o(r, this), o(s, this);
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
    value: function(e, n, i) {
      var r;
      if (!this.__loaded || !this.sessionPersistence || !this._requestQueue) return j.uninitializedWarning("posthog.capture");
      if (!ti(this)) if (!w(e) && k(e)) {
        if (!N || this.config.opt_out_useragent_filter || !yr(N, this.config.custom_blocked_useragents)) {
          this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), 
          this.config.save_referrer && this.sessionPersistence.update_referrer_info();
          var s = {
            uuid: dt(),
            event: e,
            properties: this._calculate_event_properties(e, n || {})
          };
          "$identify" === e && (s.$set = null == i ? void 0 : i.$set, s.$set_once = null == i ? void 0 : i.$set_once), 
          (s = ee(s, null != i && i._noTruncate ? null : this.config.properties_string_max_length)).timestamp = (null == i ? void 0 : i.timestamp) || new Date, 
          w(null == i ? void 0 : i.timestamp) || (s.properties.$event_time_override_provided = !0, 
          s.properties.$event_time_override_system_time = new Date);
          var o = t(t({}, s.properties.$set), s.$set);
          (function(e) {
            if (b(e)) {
              for (var t in e) if (v.call(e, t)) return !1;
              return !0;
            }
            return !1;
          })(o) || this.setPersonPropertiesForFlags(o), j.info("send", s);
          var a = {
            method: "POST",
            url: null !== (r = null == i ? void 0 : i._url) && void 0 !== r ? r : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            data: s,
            compression: "best-available",
            batchKey: null == i ? void 0 : i._batchKey
          };
          return !this.config.request_batching || i && (null == i || !i._batchKey) || null != i && i.send_instantly ? this._send_retriable_request(a) : this._requestQueue.enqueue(a), 
          this._invokeCaptureHooks(e, s), s;
        }
      } else j.error("No event name provided to posthog.capture");
    }
  }, {
    key: "_addCaptureHook",
    value: function(e) {
      this.__captureHooks.push(e);
    }
  }, {
    key: "_invokeCaptureHooks",
    value: function(e, t) {
      this.config._onCapture(e, t), z(this.__captureHooks, (function(t) {
        return t(e);
      }));
    }
  }, {
    key: "_calculate_event_properties",
    value: function(e, n) {
      if (!this.persistence || !this.sessionPersistence) return n;
      var i = this.persistence.remove_event_timer(e), r = t({}, n);
      if (r.token = this.config.token, "$snapshot" === e) {
        var s = t(t({}, this.persistence.properties()), this.sessionPersistence.properties());
        return r.distinct_id = s.distinct_id, r;
      }
      var o = Cn.properties();
      if (this.sessionManager) {
        var a = this.sessionManager.checkAndGetSessionAndWindowId(), u = a.sessionId, c = a.windowId;
        r.$session_id = u, r.$window_id = c;
      }
      if (this.requestRouter.region === sr.CUSTOM && (r.$lib_custom_api_host = this.config.api_host), 
      this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e || "$pageleave" === e || "$autocapture" === e)) {
        var d = this.sessionPropsManager.getSessionProps();
        r = G(r, d);
      }
      if (!this.config.disable_scroll_properties) {
        var h = {};
        "$pageview" === e ? h = this.pageViewManager.doPageView() : "$pageleave" === e && (h = this.pageViewManager.doPageLeave()), 
        r = G(r, h);
      }
      if ("$pageview" === e && O && (r.title = O.title), "$performance_event" === e) {
        var f = this.persistence.properties();
        return r.distinct_id = f.distinct_id, r.$current_url = o.$current_url, r;
      }
      if (!w(i)) {
        var p = (new Date).getTime() - i;
        r.$duration = parseFloat((p / 1e3).toFixed(3));
      }
      (N && this.config.opt_out_useragent_filter && (r.$browser_type = yr(N, this.config.custom_blocked_useragents) ? "bot" : "browser"), 
      r = G({}, Cn.properties(), this.persistence.properties(), this.sessionPersistence.properties(), r), 
      m(this.config.property_denylist) && m(this.config.property_blacklist)) ? z([].concat(l(this.config.property_blacklist), l(this.config.property_denylist)), (function(e) {
        delete r[e];
      })) : j.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
      var g = this.config.sanitize_properties;
      return g && (r = g(r, e)), r;
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
      var i;
      null === (i = this.persistence) || void 0 === i || i.register_once(e, t, n);
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
      this.register(o({}, e, t));
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
      if (!this.__loaded || !this.persistence) return j.uninitializedWarning("posthog.identify");
      if (R(e) && (e = e.toString(), j.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), 
      e) if ([ "distinct_id", "distinctid" ].includes(e.toLowerCase())) j.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')); else {
        var i = this.get_distinct_id();
        if (this.register({
          $user_id: e
        }), !this.get_property("$device_id")) {
          var r = i;
          this.register_once({
            $had_persisted_distinct_id: !0,
            $device_id: r
          }, "");
        }
        e !== i && e !== this.get_property(Te) && (this.unregister(Te), this.register({
          distinct_id: e
        }));
        var s = "anonymous" === this.persistence.get_user_state();
        e !== i && s ? (this.persistence.set_user_state("identified"), this.setPersonPropertiesForFlags(t || {}, !1), 
        this.capture("$identify", {
          distinct_id: e,
          $anon_distinct_id: i
        }, {
          $set: t || {},
          $set_once: n || {}
        }), this.featureFlags.setAnonymousDistinctId(i)) : (t || n) && this.setPersonProperties(t, n), 
        e !== i && (this.reloadFeatureFlags(), this.unregister(We));
      } else j.error("Unique user id has not been set in posthog.identify");
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
    value: function(e, n, i) {
      if (e && n) {
        var r = this.getGroups();
        r[e] !== n && this.resetGroupPropertiesForFlags(e), this.register({
          $groups: t(t({}, r), {}, o({}, e, n))
        }), i && (this.capture("$groupidentify", {
          $group_type: e,
          $group_key: n,
          $group_set: i
        }), this.setGroupPropertiesForFlags(o({}, e, i))), r[e] === n || i || this.reloadFeatureFlags();
      } else j.error("posthog.group requires a group type and group key");
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
      var t, n, i, r;
      if (!this.__loaded) return j.uninitializedWarning("posthog.reset");
      var s = this.get_property("$device_id");
      null === (t = this.persistence) || void 0 === t || t.clear(), null === (n = this.sessionPersistence) || void 0 === n || n.clear(), 
      null === (i = this.persistence) || void 0 === i || i.set_user_state("anonymous"), 
      null === (r = this.sessionManager) || void 0 === r || r.resetSessionId();
      var o = this.config.get_device_id(dt());
      this.register_once({
        distinct_id: o,
        $device_id: e ? o : s
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
      var t = this.sessionManager.checkAndGetSessionAndWindowId(!0), n = t.sessionId, i = t.sessionStartTimestamp, r = this.requestRouter.endpointFor("ui", "/replay/" + n);
      if (null != e && e.withTimestamp && i) {
        var s, o = null !== (s = e.timestampLookBack) && void 0 !== s ? s : 10;
        if (!i) return r;
        var a = Math.max(Math.floor(((new Date).getTime() - i) / 1e3) - o, 0);
        r += "?t=".concat(a);
      }
      return r;
    }
  }, {
    key: "alias",
    value: function(e, t) {
      return e === this.get_property(Ce) ? (j.critical("Attempting to create alias for existing People user - aborting."), 
      -2) : (w(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(Te, e), 
      this.capture("$create_alias", {
        alias: e,
        distinct_id: t
      })) : (j.warn("alias matches current distinct_id - skipping api call."), this.identify(e), 
      -1));
    }
  }, {
    key: "set_config",
    value: function(e) {
      var n, i = t({}, this.config);
      if (b(e) && (G(this.config, e), this.config.persistence_name || (this.config.persistence_name = this.config.cookie_name), 
      this.config.disable_persistence || (this.config.disable_persistence = this.config.disable_cookie), 
      null === (n = this.persistence) || void 0 === n || n.update_config(this.config, i), 
      this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new $n(t(t({}, this.config), {}, {
        persistence: "sessionStorage"
      })), bt.is_supported() && "true" === bt.get("ph_debug") && (this.config.debug = !0), 
      this.config.debug && (f.DEBUG = !0), this.sessionRecording && !w(e.disable_session_recording))) {
        var r = i.disable_session_recording !== e.disable_session_recording, s = !ti(this) && !e.disable_session_recording && !this.sessionRecording.started;
        (r || s) && (e.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled());
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
      var e, t = null !== (e = this.config.name) && void 0 !== e ? e : kr;
      return t !== kr && (t = kr + "." + t), t;
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
      var t, n, i, r, s;
      if (e && e.clear_persistence) i = !0; else {
        if (!e || !e.enable_persistence) return;
        i = !1;
      }
      this.config.disable_persistence || (null === (t = this.persistence) || void 0 === t ? void 0 : t.disabled) === i || (null === (r = this.persistence) || void 0 === r || r.set_disabled(i));
      this.config.disable_persistence || (null === (n = this.sessionPersistence) || void 0 === n ? void 0 : n.disabled) === i || (null === (s = this.sessionPersistence) || void 0 === s || s.set_disabled(i));
    }
  }, {
    key: "_gdpr_call_func",
    value: function(e, t) {
      return t = G({
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
      e = G({
        enable_persistence: !0
      }, e || {}), this._gdpr_call_func(zn, e), this._gdpr_update_persistence(e);
    }
  }, {
    key: "opt_out_capturing",
    value: function(e) {
      var t = G({
        clear_persistence: !0
      }, e || {});
      this._gdpr_call_func(Gn, t), this._gdpr_update_persistence(t);
    }
  }, {
    key: "has_opted_in_capturing",
    value: function(e) {
      return this._gdpr_call_func(Qn, e);
    }
  }, {
    key: "has_opted_out_capturing",
    value: function(e) {
      return this._gdpr_call_func(Yn, e);
    }
  }, {
    key: "clear_opt_in_out_capturing",
    value: function(e) {
      var t = G({
        enable_persistence: !0
      }, null != e ? e : {});
      this._gdpr_call_func(Jn, t), this._gdpr_update_persistence(t);
    }
  }, {
    key: "debug",
    value: function(e) {
      !1 === e ? (null == P || P.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), 
      this.set_config({
        debug: !1
      })) : (null == P || P.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), 
      localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
        debug: !0
      }));
    }
  } ]), e;
}();

!function(e, t) {
  for (var n = 0; n < t.length; n++) e.prototype[t[n]] = X(e.prototype[t[n]]);
}(xr, [ "identify" ]);

var Er, Pr;

!function(e) {
  e.Popover = "popover", e.API = "api", e.Widget = "widget";
}(Er || (Er = {})), function(e) {
  e.Open = "open", e.MultipleChoice = "multiple_choice", e.SingleChoice = "single_choice", 
  e.Rating = "rating", e.Link = "link";
}(Pr || (Pr = {}));

var Ir, Cr = (Ir = br[kr] = new xr, function() {
  function e() {
    e.done || (e.done = !0, Sr = !1, z(br, (function(e) {
      e._dom_loaded();
    })));
  }
  null != O && O.addEventListener && ("complete" === O.readyState ? e() : O.addEventListener("DOMContentLoaded", e, !1)), 
  P && ne(P, "load", e, !0);
}(), Ir);

class PostHogController extends Controller {
  static values={
    apiKey: String,
    identification: Object
  };
  connect() {
    Cr.init(this.apiKeyValue, {
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
      Cr.identify(id.toString(), {
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
