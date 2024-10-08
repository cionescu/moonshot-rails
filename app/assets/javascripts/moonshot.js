import { Controller } from "@hotwired/stimulus";

import { post } from "@rails/request.js";

var e = "undefined" != typeof window ? window : void 0, t = "undefined" != typeof globalThis ? globalThis : e, n = Array.prototype, i = n.forEach, r = n.indexOf, s = null == t ? void 0 : t.navigator, o = null == t ? void 0 : t.document, a = null == t ? void 0 : t.location, u = null == t ? void 0 : t.fetch, l = null != t && t.XMLHttpRequest && "withCredentials" in new t.XMLHttpRequest ? t.XMLHttpRequest : void 0, c = null == t ? void 0 : t.AbortController, d = null == s ? void 0 : s.userAgent, h = null != e ? e : {}, f = {
  DEBUG: !1,
  LIB_VERSION: "1.167.0"
}, v = Array.isArray, p = Object.prototype, g = p.hasOwnProperty, _ = p.toString, m = v || function(e) {
  return "[object Array]" === _.call(e);
}, y = function(e) {
  return "function" == typeof e;
}, b = function(e) {
  return e === Object(e) && !m(e);
}, w = function(e) {
  if (b(e)) {
    for (var t in e) if (g.call(e, t)) return !1;
    return !0;
  }
  return !1;
}, k = function(e) {
  return void 0 === e;
}, S = function(e) {
  return "[object String]" == _.call(e);
}, E = function(e) {
  return S(e) && 0 === e.trim().length;
}, x = function(e) {
  return null === e;
}, I = function(e) {
  return k(e) || x(e);
}, F = function(e) {
  return "[object Number]" == _.call(e);
}, P = function(e) {
  return "[object Boolean]" === _.call(e);
}, R = function(e) {
  return e instanceof FormData;
}, T = "[PostHog.js]", C = {
  _log: function(t) {
    if (e && (f.DEBUG || h.POSTHOG_DEBUG) && !k(e.console) && e.console) {
      for (var n = ("__rrweb_original__" in e.console[t] ? e.console[t].__rrweb_original__ : e.console[t]), i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) r[s - 1] = arguments[s];
      n.apply(void 0, [ T ].concat(r));
    }
  },
  info: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    C._log.apply(C, [ "log" ].concat(t));
  },
  warn: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    C._log.apply(C, [ "warn" ].concat(t));
  },
  error: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    C._log.apply(C, [ "error" ].concat(t));
  },
  critical: function() {
    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
    (e = console).error.apply(e, [ T ].concat(n));
  },
  uninitializedWarning: function(e) {
    C.error("You must initialize PostHog before calling ".concat(e));
  }
}, $ = function(e, t, n) {
  if (e.config.disable_external_dependency_loading) return C.warn("".concat(t, " was requested but loading of external scripts is disabled.")), 
  n("Loading of external scripts is disabled");
  var i = function() {
    if (!o) return n("document not found");
    var e = o.createElement("script");
    e.type = "text/javascript", e.src = t, e.onload = function(e) {
      return n(void 0, e);
    }, e.onerror = function(e) {
      return n(e);
    };
    var i, r = o.querySelectorAll("body > script");
    r.length > 0 ? null === (i = r[0].parentNode) || void 0 === i || i.insertBefore(e, r[0]) : o.body.appendChild(e);
  };
  null != o && o.body ? i() : null == o || o.addEventListener("DOMContentLoaded", i);
};

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter((function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    }))), n.push.apply(n, i);
  }
  return n;
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? M(Object(n), !0).forEach((function(t) {
      q(e, t, n[t]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    }));
  }
  return e;
}

function A(e) {
  return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, A(e);
}

function L(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function D(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
    Object.defineProperty(e, i.key, i);
  }
}

function N(e, t, n) {
  return t && D(e.prototype, t), n && D(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function B(e, t) {
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

function H(e, t) {
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
  }(e, t) || j(e, t) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function U(e) {
  return function(e) {
    if (Array.isArray(e)) return W(e);
  }(e) || function(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || j(e) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function j(e, t) {
  if (e) {
    if ("string" == typeof e) return W(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? W(e, t) : void 0;
  }
}

function W(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
  return i;
}

function z(e, t) {
  var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = j(e)) || t && e && "number" == typeof e.length) {
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

h.__PosthogExtensions__ = h.__PosthogExtensions__ || {}, h.__PosthogExtensions__.loadExternalDependency = function(e, t, n) {
  var i = "/static/".concat(t, ".js") + "?v=".concat(e.version);
  if ("toolbar" === t) {
    var r = 3e5, s = Math.floor(Date.now() / r) * r;
    i = "".concat(i, "?&=").concat(s);
  }
  var o = e.requestRouter.endpointFor("assets", i);
  $(e, o, n);
}, h.__PosthogExtensions__.loadSiteApp = function(e, t, n) {
  var i = e.requestRouter.endpointFor("api", t);
  $(e, i, n);
};

var V = {}, G = function(e) {
  return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};

function Q(e, t, n) {
  if (m(e)) if (i && e.forEach === i) e.forEach(t, n); else if ("length" in e && e.length === +e.length) for (var r = 0, s = e.length; r < s; r++) if (r in e && t.call(n, e[r], r) === V) return;
}

function J(e, t, n) {
  if (!I(e)) {
    if (m(e)) return Q(e, t, n);
    if (R(e)) {
      var i, r = z(e.entries());
      try {
        for (r.s(); !(i = r.n()).done; ) {
          var s = i.value;
          if (t.call(n, s[1], s[0]) === V) return;
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    } else for (var o in e) if (g.call(e, o) && t.call(n, e[o], o) === V) return;
  }
}

var Y = function(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
  return Q(n, (function(t) {
    for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
  })), e;
};

function X(e, t) {
  return -1 !== e.indexOf(t);
}

function K(e) {
  for (var t = Object.keys(e), n = t.length, i = new Array(n); n--; ) i[n] = [ t[n], e[t[n]] ];
  return i;
}

var Z = function(e) {
  try {
    return e();
  } catch (e) {
    return;
  }
}, ee = function(e) {
  return function() {
    try {
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return e.apply(this, n);
    } catch (e) {
      C.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), 
      C.critical(e);
    }
  };
}, te = function(e) {
  var t = {};
  return J(e, (function(e, n) {
    S(e) && e.length > 0 && (t[n] = e);
  })), t;
}, ne = function(e) {
  return e.replace(/^\$/, "");
};

function ie(e, t) {
  return n = e, i = function(e) {
    return S(e) && !x(t) ? e.slice(0, t) : e;
  }, r = new Set, function e(t, n) {
    return t !== Object(t) ? i ? i(t, n) : t : r.has(t) ? void 0 : (r.add(t), m(t) ? (s = [], 
    Q(t, (function(t) {
      s.push(e(t));
    }))) : (s = {}, J(t, (function(t, n) {
      r.has(t) || (s[n] = e(t, n));
    }))), s);
    var s;
  }(n);
  var n, i, r;
}

var re, se = function(e) {
  var t, n, i, r, s = "";
  for (t = n = 0, i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, 
  r = 0; r < i; r++) {
    var o = e.charCodeAt(r), a = null;
    o < 128 ? n++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), 
    x(a) || (n > t && (s += e.substring(t, n)), s += a, t = n = r + 1);
  }
  return n > t && (s += e.substring(t, e.length)), s;
}, oe = function() {
  function t(e) {
    return e && (e.preventDefault = t.preventDefault, e.stopPropagation = t.stopPropagation), 
    e;
  }
  return t.preventDefault = function() {
    this.returnValue = !1;
  }, t.stopPropagation = function() {
    this.cancelBubble = !0;
  }, function(n, i, r, s, o) {
    if (n) if (n.addEventListener && !s) n.addEventListener(i, r, !!o); else {
      var a = "on" + i, u = n[a];
      n[a] = function(n, i, r) {
        return function(s) {
          if (s = s || t(null == e ? void 0 : e.event)) {
            var o, a = !0;
            y(r) && (o = r(s));
            var u = i.call(n, s);
            return !1 !== o && !1 !== u || (a = !1), a;
          }
        };
      }(n, r, u);
    } else C.error("No valid element provided to register_event");
  };
}();

function ae(e, t) {
  for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
}

!function(e) {
  e.GZipJS = "gzip-js", e.Base64 = "base64";
}(re || (re = {}));

var le = "$people_distinct_id", ce = "__alias", de = "__timers", he = "$autocapture_disabled_server_side", fe = "$heatmaps_enabled_server_side", ve = "$exception_capture_enabled_server_side", pe = "$exception_capture_endpoint_suffix", ge = "$web_vitals_enabled_server_side", _e = "$web_vitals_allowed_metrics", me = "$session_recording_enabled_server_side", ye = "$console_log_recording_enabled_server_side", be = "$session_recording_network_payload_capture", we = "$session_recording_canvas_recording", ke = "$replay_sample_rate", Se = "$replay_minimum_duration", Ee = "$sesid", xe = "$session_is_sampled", Ie = "$enabled_feature_flags", Fe = "$early_access_features", Pe = "$stored_person_properties", Re = "$stored_group_properties", Te = "$surveys", Ce = "$surveys_activated", $e = "$flag_call_reported", Me = "$user_state", Oe = "$client_session_props", Ae = "$capture_rate_limit", Le = "$initial_campaign_params", De = "$initial_referrer_info", Ne = "$initial_person_info", qe = "$epp", Be = "__POSTHOG_TOOLBAR__", He = [ le, ce, "__cmpns", de, me, fe, Ee, Ie, Me, Fe, Re, Pe, Te, $e, Oe, Ae, Le, De, qe ], Ue = "$active_feature_flags", je = "$override_feature_flags", We = "$feature_flag_payloads", ze = function(e) {
  var t, n = {}, i = z(K(e || {}));
  try {
    for (i.s(); !(t = i.n()).done; ) {
      var r = H(t.value, 2), s = r[0], o = r[1];
      o && (n[s] = o);
    }
  } catch (e) {
    i.e(e);
  } finally {
    i.f();
  }
  return n;
}, Ve = function() {
  function e(t) {
    L(this, e), this.instance = t, this._override_warning = !1, this.featureFlagEventHandlers = [], 
    this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1;
  }
  return N(e, [ {
    key: "getFlags",
    value: function() {
      return Object.keys(this.getFlagVariants());
    }
  }, {
    key: "getFlagVariants",
    value: function() {
      var e = this.instance.get_property(Ie), t = this.instance.get_property(je);
      if (!t) return e || {};
      for (var n = Y({}, e), i = Object.keys(t), r = 0; r < i.length; r++) n[i[r]] = t[i[r]];
      return this._override_warning || (C.warn(" Overriding feature flags!", {
        enabledFlags: e,
        overriddenFlags: t,
        finalFlags: n
      }), this._override_warning = !0), n;
    }
  }, {
    key: "getFlagPayloads",
    value: function() {
      return this.instance.get_property(We) || {};
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
        var t = this.instance.config.token, n = this.instance.get_property(Pe), i = this.instance.get_property(Re), r = {
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
          compression: this.instance.config.disable_compression ? void 0 : re.Base64,
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
        var n, i = this.getFlagVariants()[e], r = "".concat(i), s = this.instance.get_property($e) || {};
        if (t.send_event || !("send_event" in t)) if (!(e in s) || !s[e].includes(r)) m(s[e]) ? s[e].push(r) : s[e] = [ r ], 
        null === (n = this.instance.persistence) || void 0 === n || n.register(q({}, $e, s)), 
        this.instance.capture("$feature_flag_called", {
          $feature_flag: e,
          $feature_flag_response: i
        });
        return i;
      }
      C.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.");
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
      C.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.");
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
    value: function(e, t) {
      if (this.instance.persistence) {
        this.instance.decideEndpointWasHit = !0;
        var n = this.getFlagVariants(), i = this.getFlagPayloads();
        !function(e, t) {
          var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s = e.featureFlags, o = e.featureFlagPayloads;
          if (s) if (m(s)) {
            var a, u = {};
            if (s) for (var l = 0; l < s.length; l++) u[s[l]] = !0;
            t && t.register((q(a = {}, Ue, s), q(a, Ie, u), a));
          } else {
            var c = s, d = o;
            e.errorsWhileComputingFlags && (c = O(O({}, i), c), d = O(O({}, r), d)), t && t.register((q(n = {}, Ue, Object.keys(ze(c))), 
            q(n, Ie, c || {}), q(n, We, d || {}), n));
          }
        }(e, this.instance.persistence, n, i), this._fireFeatureFlagsCallbacks(t);
      }
    }
  }, {
    key: "override",
    value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!this.instance.__loaded || !this.instance.persistence) return C.uninitializedWarning("posthog.feature_flags.override");
      if (this._override_warning = t, !1 === e) this.instance.persistence.unregister(je); else if (m(e)) {
        for (var n = {}, i = 0; i < e.length; i++) n[e[i]] = !0;
        this.instance.persistence.register(q({}, je, n));
      } else this.instance.persistence.register(q({}, je, e));
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
    value: function(e, t) {
      var n, i, r = q({}, "$feature_enrollment/".concat(e), t);
      this.instance.capture("$feature_enrollment_update", {
        $feature_flag: e,
        $feature_enrollment: t,
        $set: r
      }), this.setPersonPropertiesForFlags(r, !1);
      var s = O(O({}, this.getFlagVariants()), {}, q({}, e, t));
      null === (n = this.instance.persistence) || void 0 === n || n.register((q(i = {}, Ue, Object.keys(ze(s))), 
      q(i, Ie, s), i)), this._fireFeatureFlagsCallbacks();
    }
  }, {
    key: "getEarlyAccessFeatures",
    value: function(e) {
      var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = this.instance.get_property(Fe);
      if (i && !n) return e(i);
      this.instance._send_request({
        transport: "XHR",
        url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
        method: "GET",
        callback: function(n) {
          var i;
          if (n.json) {
            var r = n.json.earlyAccessFeatures;
            return null === (i = t.instance.persistence) || void 0 === i || i.register(q({}, Fe, r)), 
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
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = this.instance.get_property(Pe) || {};
      this.instance.register(q({}, Pe, O(O({}, n), e))), t && this.instance.reloadFeatureFlags();
    }
  }, {
    key: "resetPersonPropertiesForFlags",
    value: function() {
      this.instance.unregister(Pe);
    }
  }, {
    key: "setGroupPropertiesForFlags",
    value: function(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = this.instance.get_property(Re) || {};
      0 !== Object.keys(n).length && Object.keys(n).forEach((function(t) {
        n[t] = O(O({}, n[t]), e[t]), delete e[t];
      })), this.instance.register(q({}, Re, O(O({}, n), e))), t && this.instance.reloadFeatureFlags();
    }
  }, {
    key: "resetGroupPropertiesForFlags",
    value: function(e) {
      if (e) {
        var t = this.instance.get_property(Re) || {};
        this.instance.register(q({}, Re, O(O({}, t), {}, q({}, e, {}))));
      } else this.instance.unregister(Re);
    }
  } ]), e;
}();

Math.trunc || (Math.trunc = function(e) {
  return e < 0 ? Math.ceil(e) : Math.floor(e);
}), Number.isInteger || (Number.isInteger = function(e) {
  return F(e) && isFinite(e) && Math.floor(e) === e;
});

var Ge = "0123456789abcdef", Qe = function() {
  function e(t) {
    if (L(this, e), this.bytes = t, 16 !== t.length) throw new TypeError("not 128-bit length");
  }
  return N(e, [ {
    key: "toString",
    value: function() {
      for (var e = "", t = 0; t < this.bytes.length; t++) e = e + Ge.charAt(this.bytes[t] >>> 4) + Ge.charAt(15 & this.bytes[t]), 
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
}(), Je = function() {
  function e() {
    L(this, e), q(this, "timestamp", 0), q(this, "counter", 0), q(this, "random", new Ke);
  }
  return N(e, [ {
    key: "generate",
    value: function() {
      var e = this.generateOrAbort();
      if (k(e)) {
        this.timestamp = 0;
        var t = this.generateOrAbort();
        if (k(t)) throw new Error("Could not generate UUID after timestamp reset");
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
      return Qe.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32());
    }
  }, {
    key: "resetCounter",
    value: function() {
      this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
    }
  } ]), e;
}(), Ye = function(e) {
  if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
  for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return e;
};

e && !k(e.crypto) && crypto.getRandomValues && (Ye = function(e) {
  return crypto.getRandomValues(e);
});

var Xe, Ke = function() {
  function e() {
    L(this, e), q(this, "buffer", new Uint32Array(8)), q(this, "cursor", 1 / 0);
  }
  return N(e, [ {
    key: "nextUint32",
    value: function() {
      return this.cursor >= this.buffer.length && (Ye(this.buffer), this.cursor = 0), 
      this.buffer[this.cursor++];
    }
  } ]), e;
}(), Ze = function() {
  return et().toString();
}, et = function() {
  return (Xe || (Xe = new Je)).generate();
}, tt = "Thu, 01 Jan 1970 00:00:00 GMT", nt = "";

var it = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;

function rt(e, t) {
  if (t) {
    var n = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
      if (nt) return nt;
      if (!t) return "";
      if ([ "localhost", "127.0.0.1" ].includes(e)) return "";
      for (var n = e.split("."), i = Math.min(n.length, 8), r = "dmn_chk_" + Ze(), s = new RegExp("(^|;)\\s*" + r + "=1"); !nt && i--; ) {
        var a = n.slice(i).join("."), u = r + "=1;domain=." + a;
        t.cookie = u, s.test(t.cookie) && (t.cookie = u + ";expires=" + tt, nt = a);
      }
      return nt;
    }(e);
    if (!n) {
      var i = function(e) {
        var t = e.match(it);
        return t ? t[0] : "";
      }(e);
      i !== n && C.info("Warning: cookie subdomain discovery mismatch", i, n), n = i;
    }
    return n ? "; domain=." + n : "";
  }
  return "";
}

var st, ot = {
  is_supported: function() {
    return !!o;
  },
  error: function(e) {
    C.error("cookieStore error: " + e);
  },
  get: function(e) {
    if (o) {
      try {
        for (var t = e + "=", n = o.cookie.split(";").filter((function(e) {
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
      t = JSON.parse(ot.get(e)) || {};
    } catch (e) {}
    return t;
  },
  set: function(e, t, n, i, r) {
    if (o) try {
      var s = "", a = "", u = rt(o.location.hostname, i);
      if (n) {
        var l = new Date;
        l.setTime(l.getTime() + 24 * n * 60 * 60 * 1e3), s = "; expires=" + l.toUTCString();
      }
      r && (a = "; secure");
      var c = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; SameSite=Lax; path=/" + u + a;
      return c.length > 3686.4 && C.warn("cookieStore warning: large cookie, len=" + c.length), 
      o.cookie = c, c;
    } catch (e) {
      return;
    }
  },
  remove: function(e, t) {
    try {
      ot.set(e, "", -1, t);
    } catch (e) {
      return;
    }
  }
}, at = null, ut = {
  is_supported: function() {
    if (!x(at)) return at;
    var t = !0;
    if (k(e)) t = !1; else try {
      var n = "__mplssupport__";
      ut.set(n, "xyz"), '"xyz"' !== ut.get(n) && (t = !1), ut.remove(n);
    } catch (e) {
      t = !1;
    }
    return t || C.error("localStorage unsupported; falling back to cookie store"), at = t, 
    t;
  },
  error: function(e) {
    C.error("localStorage error: " + e);
  },
  get: function(t) {
    try {
      return null == e ? void 0 : e.localStorage.getItem(t);
    } catch (e) {
      ut.error(e);
    }
    return null;
  },
  parse: function(e) {
    try {
      return JSON.parse(ut.get(e)) || {};
    } catch (e) {}
    return null;
  },
  set: function(t, n) {
    try {
      null == e || e.localStorage.setItem(t, JSON.stringify(n));
    } catch (e) {
      ut.error(e);
    }
  },
  remove: function(t) {
    try {
      null == e || e.localStorage.removeItem(t);
    } catch (e) {
      ut.error(e);
    }
  }
}, lt = [ "distinct_id", Ee, xe, qe ], ct = O(O({}, ut), {}, {
  parse: function(e) {
    try {
      var t = {};
      try {
        t = ot.parse(e) || {};
      } catch (e) {}
      var n = Y(t, JSON.parse(ut.get(e) || "{}"));
      return ut.set(e, n), n;
    } catch (e) {}
    return null;
  },
  set: function(e, t, n, i, r, s) {
    try {
      ut.set(e, t, void 0, void 0, s);
      var o = {};
      lt.forEach((function(e) {
        t[e] && (o[e] = t[e]);
      })), Object.keys(o).length && ot.set(e, o, n, i, r, s);
    } catch (e) {
      ut.error(e);
    }
  },
  remove: function(t, n) {
    try {
      null == e || e.localStorage.removeItem(t), ot.remove(t, n);
    } catch (e) {
      ut.error(e);
    }
  }
}), dt = {}, ht = {
  is_supported: function() {
    return !0;
  },
  error: function(e) {
    C.error("memoryStorage error: " + e);
  },
  get: function(e) {
    return dt[e] || null;
  },
  parse: function(e) {
    return dt[e] || null;
  },
  set: function(e, t) {
    dt[e] = t;
  },
  remove: function(e) {
    delete dt[e];
  }
}, ft = null, vt = {
  is_supported: function() {
    if (!x(ft)) return ft;
    if (ft = !0, k(e)) ft = !1; else try {
      var t = "__support__";
      vt.set(t, "xyz"), '"xyz"' !== vt.get(t) && (ft = !1), vt.remove(t);
    } catch (e) {
      ft = !1;
    }
    return ft;
  },
  error: function(e) {
    C.error("sessionStorage error: ", e);
  },
  get: function(t) {
    try {
      return null == e ? void 0 : e.sessionStorage.getItem(t);
    } catch (e) {
      vt.error(e);
    }
    return null;
  },
  parse: function(e) {
    try {
      return JSON.parse(vt.get(e)) || null;
    } catch (e) {}
    return null;
  },
  set: function(t, n) {
    try {
      null == e || e.sessionStorage.setItem(t, JSON.stringify(n));
    } catch (e) {
      vt.error(e);
    }
  },
  remove: function(t) {
    try {
      null == e || e.sessionStorage.removeItem(t);
    } catch (e) {
      vt.error(e);
    }
  }
}, pt = [ "localhost", "127.0.0.1" ], gt = function(e) {
  var t = null == o ? void 0 : o.createElement("a");
  return k(t) ? null : (t.href = e, t);
}, _t = function(e, t) {
  return !!function(e) {
    try {
      new RegExp(e);
    } catch (e) {
      return !1;
    }
    return !0;
  }(t) && new RegExp(t).test(e);
}, mt = function(e) {
  var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", r = [];
  return J(e, (function(e, i) {
    k(e) || k(i) || "undefined" === i || (t = encodeURIComponent(function(e) {
      return e instanceof File;
    }(e) ? e.name : e.toString()), n = encodeURIComponent(i), r[r.length] = n + "=" + t);
  })), r.join(i);
}, yt = function(e, t) {
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
    C.error("Skipping decoding for malformed query param: " + o);
  }
  return o.replace(/\+/g, " ");
}, bt = function(e, t) {
  var n = e.match(new RegExp(t + "=([^&]*)"));
  return n ? n[1] : null;
}, wt = "Mobile", kt = "iOS", St = "Android", Et = "Tablet", xt = St + " " + Et, It = "iPad", Ft = "Apple", Pt = Ft + " Watch", Rt = "Safari", Tt = "BlackBerry", Ct = "Samsung", $t = Ct + "Browser", Mt = Ct + " Internet", Ot = "Chrome", At = Ot + " OS", Lt = Ot + " " + kt, Dt = "Internet Explorer", Nt = Dt + " " + wt, qt = "Opera", Bt = qt + " Mini", Ht = "Edge", Ut = "Microsoft " + Ht, jt = "Firefox", Wt = jt + " " + kt, zt = "Nintendo", Vt = "PlayStation", Gt = "Xbox", Qt = St + " " + wt, Jt = wt + " " + Rt, Yt = "Windows", Xt = Yt + " Phone", Kt = "Nokia", Zt = "Ouya", en = "Generic", tn = en + " " + wt.toLowerCase(), nn = en + " " + Et.toLowerCase(), rn = "Konqueror", sn = "(\\d+(\\.\\d+)?)", on = new RegExp("Version/" + sn), an = new RegExp(Gt, "i"), un = new RegExp(Vt + " \\w+", "i"), ln = new RegExp(zt + " \\w+", "i"), cn = new RegExp(Tt + "|PlayBook|BB10", "i"), dn = {
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

var hn = function(e, t) {
  return t && X(t, Ft) || function(e) {
    return X(e, Rt) && !X(e, Ot) && !X(e, St);
  }(e);
}, fn = function(e, t) {
  return t = t || "", X(e, " OPR/") && X(e, "Mini") ? Bt : X(e, " OPR/") ? qt : cn.test(e) ? Tt : X(e, "IE" + wt) || X(e, "WPDesktop") ? Nt : X(e, $t) ? Mt : X(e, Ht) || X(e, "Edg/") ? Ut : X(e, "FBIOS") ? "Facebook " + wt : X(e, "UCWEB") || X(e, "UCBrowser") ? "UC Browser" : X(e, "CriOS") ? Lt : X(e, "CrMo") ? Ot : X(e, St) && X(e, Rt) ? Qt : X(e, Ot) ? Ot : X(e, "FxiOS") ? Wt : X(e.toLowerCase(), rn.toLowerCase()) ? rn : hn(e, t) ? X(e, wt) ? Jt : Rt : X(e, jt) ? jt : X(e, "MSIE") || X(e, "Trident/") ? Dt : X(e, "Gecko") ? jt : "";
}, vn = (q(st = {}, Nt, [ new RegExp("rv:" + sn) ]), q(st, Ut, [ new RegExp(Ht + "?\\/" + sn) ]), 
q(st, Ot, [ new RegExp("(" + Ot + "|CrMo)\\/" + sn) ]), q(st, Lt, [ new RegExp("CriOS\\/" + sn) ]), 
q(st, "UC Browser", [ new RegExp("(UCBrowser|UCWEB)\\/" + sn) ]), q(st, Rt, [ on ]), 
q(st, Jt, [ on ]), q(st, qt, [ new RegExp("(Opera|OPR)\\/" + sn) ]), q(st, jt, [ new RegExp(jt + "\\/" + sn) ]), 
q(st, Wt, [ new RegExp("FxiOS\\/" + sn) ]), q(st, rn, [ new RegExp("Konqueror[:/]?" + sn, "i") ]), 
q(st, Tt, [ new RegExp(Tt + " " + sn), on ]), q(st, Qt, [ new RegExp("android\\s" + sn, "i") ]), 
q(st, Mt, [ new RegExp($t + "\\/" + sn) ]), q(st, Dt, [ new RegExp("(rv:|MSIE )" + sn) ]), 
q(st, "Mozilla", [ new RegExp("rv:" + sn) ]), st), pn = [ [ new RegExp(Gt + "; " + Gt + " (.*?)[);]", "i"), function(e) {
  return [ Gt, e && e[1] || "" ];
} ], [ new RegExp(zt, "i"), [ zt, "" ] ], [ new RegExp(Vt, "i"), [ Vt, "" ] ], [ cn, [ Tt, "" ] ], [ new RegExp(Yt, "i"), function(e, t) {
  if (/Phone/.test(t) || /WPDesktop/.test(t)) return [ Xt, "" ];
  if (new RegExp(wt).test(t) && !/IEMobile\b/.test(t)) return [ Yt + " " + wt, "" ];
  var n = /Windows NT ([0-9.]+)/i.exec(t);
  if (n && n[1]) {
    var i = n[1], r = dn[i] || "";
    return /arm/i.test(t) && (r = "RT"), [ Yt, r ];
  }
  return [ Yt, "" ];
} ], [ /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, function(e) {
  if (e && e[3]) {
    var t = [ e[3], e[4], e[5] || "0" ];
    return [ kt, t.join(".") ];
  }
  return [ kt, "" ];
} ], [ /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, function(e) {
  var t = "";
  return e && e.length >= 3 && (t = k(e[2]) ? e[3] : e[2]), [ "watchOS", t ];
} ], [ new RegExp("(" + St + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + St + ")", "i"), function(e) {
  if (e && e[2]) {
    var t = [ e[2], e[3], e[4] || "0" ];
    return [ St, t.join(".") ];
  }
  return [ St, "" ];
} ], [ /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, function(e) {
  var t = [ "Mac OS X", "" ];
  if (e && e[1]) {
    var n = [ e[1], e[2], e[3] || "0" ];
    t[1] = n.join(".");
  }
  return t;
} ], [ /Mac/i, [ "Mac OS X", "" ] ], [ /CrOS/, [ At, "" ] ], [ /Linux|debian/i, [ "Linux", "" ] ] ], gn = function(e) {
  return ln.test(e) ? zt : un.test(e) ? Vt : an.test(e) ? Gt : new RegExp(Zt, "i").test(e) ? Zt : new RegExp("(" + Xt + "|WPDesktop)", "i").test(e) ? Xt : /iPad/.test(e) ? It : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? Pt : cn.test(e) ? Tt : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(Kt, "i").test(e) ? Kt : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(wt).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? St : xt : St : new RegExp("(pda|" + wt + ")", "i").test(e) ? tn : new RegExp(Et, "i").test(e) && !new RegExp(Et + " pc", "i").test(e) ? nn : "";
}, _n = "https?://(.*)", mn = [ "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid", "rdt_cid" ], yn = {
  campaignParams: function(e) {
    return o ? this._campaignParamsFromUrl(o.URL, e) : {};
  },
  _campaignParamsFromUrl: function(e, t) {
    var n = mn.concat(t || []), i = {};
    return J(n, (function(t) {
      var n = yt(e, t);
      n && (i[t] = n);
    })), i;
  },
  _searchEngine: function(e) {
    return e ? 0 === e.search(_n + "google.([^/?]*)") ? "google" : 0 === e.search(_n + "bing.com") ? "bing" : 0 === e.search(_n + "yahoo.com") ? "yahoo" : 0 === e.search(_n + "duckduckgo.com") ? "duckduckgo" : null : null;
  },
  _searchInfoFromReferrer: function(e) {
    var t = yn._searchEngine(e), n = "yahoo" != t ? "q" : "p", i = {};
    if (!x(t)) {
      i.$search_engine = t;
      var r = o ? yt(o.referrer, n) : "";
      r.length && (i.ph_keyword = r);
    }
    return i;
  },
  searchInfo: function() {
    var e = null == o ? void 0 : o.referrer;
    return e ? this._searchInfoFromReferrer(e) : {};
  },
  browser: fn,
  browserVersion: function(e, t) {
    var n = fn(e, t), i = vn[n];
    if (k(i)) return null;
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
    for (var t = 0; t < pn.length; t++) {
      var n = H(pn[t], 2), i = n[0], r = n[1], s = i.exec(e), o = s && (y(r) ? r(s, e) : r);
      if (o) return o;
    }
    return [ "", "" ];
  },
  device: gn,
  deviceType: function(e) {
    var t = gn(e);
    return t === It || t === xt || "Kobo" === t || "Kindle Fire" === t || t === nn ? Et : t === zt || t === Gt || t === Vt || t === Zt ? "Console" : t === Pt ? "Wearable" : t ? wt : "Desktop";
  },
  referrer: function() {
    return (null == o ? void 0 : o.referrer) || "$direct";
  },
  referringDomain: function() {
    var e;
    return null != o && o.referrer && (null === (e = gt(o.referrer)) || void 0 === e ? void 0 : e.host) || "$direct";
  },
  referrerInfo: function() {
    return {
      $referrer: this.referrer(),
      $referring_domain: this.referringDomain()
    };
  },
  initialPersonInfo: function() {
    return {
      r: this.referrer(),
      u: null == a ? void 0 : a.href
    };
  },
  initialPersonPropsFromInfo: function(e) {
    var t, n = e.r, i = e.u, r = {
      $initial_referrer: n,
      $initial_referring_domain: null == n ? void 0 : "$direct" == n ? "$direct" : null === (t = gt(n)) || void 0 === t ? void 0 : t.host
    };
    if (i) {
      r.$initial_current_url = i;
      var s = gt(i);
      r.$initial_host = null == s ? void 0 : s.host, r.$initial_pathname = null == s ? void 0 : s.pathname, 
      J(this._campaignParamsFromUrl(i), (function(e, t) {
        r["$initial_" + ne(t)] = e;
      }));
    }
    n && J(this._searchInfoFromReferrer(n), (function(e, t) {
      r["$initial_" + ne(t)] = e;
    }));
    return r;
  },
  properties: function() {
    if (!d) return {};
    var t = H(yn.os(d), 2), n = t[0], i = t[1];
    return Y(te({
      $os: n,
      $os_version: i,
      $browser: yn.browser(d, navigator.vendor),
      $device: yn.device(d),
      $device_type: yn.deviceType(d)
    }), {
      $current_url: null == a ? void 0 : a.href,
      $host: null == a ? void 0 : a.host,
      $pathname: null == a ? void 0 : a.pathname,
      $raw_user_agent: d.length > 1e3 ? d.substring(0, 997) + "..." : d,
      $browser_version: yn.browserVersion(d, navigator.vendor),
      $browser_language: yn.browserLanguage(),
      $screen_height: null == e ? void 0 : e.screen.height,
      $screen_width: null == e ? void 0 : e.screen.width,
      $viewport_height: null == e ? void 0 : e.innerHeight,
      $viewport_width: null == e ? void 0 : e.innerWidth,
      $lib: "web",
      $lib_version: f.LIB_VERSION,
      $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
      $time: Date.now() / 1e3
    });
  },
  people_properties: function() {
    if (!d) return {};
    var e = H(yn.os(d), 2), t = e[0], n = e[1];
    return Y(te({
      $os: t,
      $os_version: n,
      $browser: yn.browser(d, navigator.vendor)
    }), {
      $browser_version: yn.browserVersion(d, navigator.vendor)
    });
  }
}, bn = [ "cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory" ], wn = function() {
  function e(t) {
    L(this, e), this.config = t, this.props = {}, this.campaign_params_saved = !1, this.name = function(e) {
      var t = "";
      return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), 
      e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog";
    }(t), this.storage = this.buildStorage(t), this.load(), t.debug && C.info("Persistence loaded", t.persistence, O({}, this.props)), 
    this.update_config(t, t), this.save();
  }
  return N(e, [ {
    key: "buildStorage",
    value: function(e) {
      -1 === bn.indexOf(e.persistence.toLowerCase()) && (C.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), 
      e.persistence = "localStorage+cookie");
      var t = e.persistence.toLowerCase();
      return "localstorage" === t && ut.is_supported() ? ut : "localstorage+cookie" === t && ct.is_supported() ? ct : "sessionstorage" === t && vt.is_supported() ? vt : "memory" === t ? ht : "cookie" === t ? ot : ct.is_supported() ? ct : ot;
    }
  }, {
    key: "properties",
    value: function() {
      var e = {};
      return J(this.props, (function(t, n) {
        if (n === Ie && b(t)) for (var i = Object.keys(t), s = 0; s < i.length; s++) e["$feature/".concat(i[s])] = t[i[s]]; else a = n, 
        u = !1, (x(o = He) ? u : r && o.indexOf === r ? -1 != o.indexOf(a) : (J(o, (function(e) {
          if (u || (u = e === a)) return V;
        })), u)) || (e[n] = t);
        var o, a, u;
      })), e;
    }
  }, {
    key: "load",
    value: function() {
      if (!this.disabled) {
        var e = this.storage.parse(this.name);
        e && (this.props = Y({}, e));
      }
    }
  }, {
    key: "save",
    value: function() {
      this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure, this.config.debug);
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
        k(t) && (t = "None"), this.expire_days = k(n) ? this.default_expiry : n;
        var r = !1;
        if (J(e, (function(e, n) {
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
        this.expire_days = k(t) ? this.default_expiry : t;
        var i = !1;
        if (J(e, (function(t, r) {
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
      this.campaign_params_saved || (this.register(yn.campaignParams(this.config.custom_campaign_params)), 
      this.campaign_params_saved = !0);
    }
  }, {
    key: "update_search_keyword",
    value: function() {
      this.register(yn.searchInfo());
    }
  }, {
    key: "update_referrer_info",
    value: function() {
      this.register_once(yn.referrerInfo(), void 0);
    }
  }, {
    key: "set_initial_person_info",
    value: function() {
      this.props[Le] || this.props[De] || this.register_once(q({}, Ne, yn.initialPersonInfo()), void 0);
    }
  }, {
    key: "get_referrer_info",
    value: function() {
      return te({
        $referrer: this.props.$referrer,
        $referring_domain: this.props.$referring_domain
      });
    }
  }, {
    key: "get_initial_props",
    value: function() {
      var e = this, t = {};
      J([ De, Le ], (function(n) {
        var i = e.props[n];
        i && J(i, (function(e, n) {
          t["$initial_" + ne(n)] = e;
        }));
      }));
      var n = this.props[Ne];
      if (n) {
        var i = yn.initialPersonPropsFromInfo(n);
        Y(t, i);
      }
      return t;
    }
  }, {
    key: "safe_merge",
    value: function(e) {
      return J(this.props, (function(t, n) {
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
      var n = this.props[de] || {};
      n[e] = t, this.props[de] = n, this.save();
    }
  }, {
    key: "remove_event_timer",
    value: function(e) {
      var t = (this.props[de] || {})[e];
      return k(t) || (delete this.props[de][e], this.save()), t;
    }
  }, {
    key: "get_property",
    value: function(e) {
      return this.props[e];
    }
  }, {
    key: "set_property",
    value: function(e, t) {
      this.props[e] = t, this.save();
    }
  } ]), e;
}();

function kn(e) {
  var t, n;
  return (null === (t = JSON.stringify(e, (n = [], function(e, t) {
    if (b(t)) {
      for (;n.length > 0 && n.at(-1) !== this; ) n.pop();
      return n.includes(t) ? "[Circular]" : (n.push(t), t);
    }
    return t;
  }))) || void 0 === t ? void 0 : t.length) || 0;
}

function Sn(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
  if (e.size >= t && e.data.length > 1) {
    var n = Math.floor(e.data.length / 2), i = e.data.slice(0, n), r = e.data.slice(n);
    return [ Sn({
      size: kn(i),
      data: i,
      sessionId: e.sessionId,
      windowId: e.windowId
    }), Sn({
      size: kn(r),
      data: r,
      sessionId: e.sessionId,
      windowId: e.windowId
    }) ].flatMap((function(e) {
      return e;
    }));
  }
  return [ e ];
}

var En = function(e) {
  return e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", 
  e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", 
  e[e.Plugin = 6] = "Plugin", e;
}(En || {}), xn = function(e) {
  return e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", 
  e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", 
  e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", 
  e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", 
  e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", 
  e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", 
  e[e.CustomElement = 16] = "CustomElement", e;
}(xn || {});

function In(e) {
  return e ? G(e).split(/\s+/) : [];
}

function Fn(t) {
  var n = null == e ? void 0 : e.location.href;
  return !!(n && t && t.some((function(e) {
    return n.match(e);
  })));
}

function Pn(e) {
  var t = "";
  switch (A(e.className)) {
   case "string":
    t = e.className;
    break;

   case "object":
    t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
    break;

   default:
    t = "";
  }
  return In(t);
}

function Rn(e) {
  return I(e) ? null : G(e).split(/(\s+)/).filter((function(e) {
    return Gn(e);
  })).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}

function Tn(e) {
  var t = "";
  return qn(e) && !Bn(e) && e.childNodes && e.childNodes.length && J(e.childNodes, (function(e) {
    var n;
    On(e) && e.textContent && (t += null !== (n = Rn(e.textContent)) && void 0 !== n ? n : "");
  })), G(t);
}

function Cn(e) {
  return k(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
  var t;
}

function $n(e) {
  return !!e && 1 === e.nodeType;
}

function Mn(e, t) {
  return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}

function On(e) {
  return !!e && 3 === e.nodeType;
}

function An(e) {
  return !!e && 11 === e.nodeType;
}

var Ln = [ "a", "button", "form", "input", "select", "textarea", "label" ];

function Dn(e) {
  var t = e.parentNode;
  return !(!t || !$n(t)) && t;
}

function Nn(t, n) {
  var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
  if (!e || !t || Mn(t, "html") || !$n(t)) return !1;
  if (null != i && i.url_allowlist && !Fn(i.url_allowlist)) return !1;
  if (null != i && i.url_ignorelist && Fn(i.url_ignorelist)) return !1;
  if (null != i && i.dom_event_allowlist) {
    var o = i.dom_event_allowlist;
    if (o && !o.some((function(e) {
      return n.type === e;
    }))) return !1;
  }
  for (var a = !1, u = [ t ], l = !0, c = t; c.parentNode && !Mn(c, "body"); ) if (An(c.parentNode)) u.push(c.parentNode.host), 
  c = c.parentNode.host; else {
    if (!(l = Dn(c))) break;
    if (r || Ln.indexOf(l.tagName.toLowerCase()) > -1) a = !0; else {
      var d = e.getComputedStyle(l);
      d && "pointer" === d.getPropertyValue("cursor") && (a = !0);
    }
    u.push(l), c = l;
  }
  if (!function(e, t) {
    var n = null == t ? void 0 : t.element_allowlist;
    if (k(n)) return !0;
    var i, r = z(e);
    try {
      var s = function() {
        var e = i.value;
        if (n.some((function(t) {
          return e.tagName.toLowerCase() === t;
        }))) return {
          v: !0
        };
      };
      for (r.s(); !(i = r.n()).done; ) {
        var o = s();
        if ("object" === A(o)) return o.v;
      }
    } catch (e) {
      r.e(e);
    } finally {
      r.f();
    }
    return !1;
  }(u, i)) return !1;
  if (!function(e, t) {
    var n = null == t ? void 0 : t.css_selector_allowlist;
    if (k(n)) return !0;
    var i, r = z(e);
    try {
      var s = function() {
        var e = i.value;
        if (n.some((function(t) {
          return e.matches(t);
        }))) return {
          v: !0
        };
      };
      for (r.s(); !(i = r.n()).done; ) {
        var o = s();
        if ("object" === A(o)) return o.v;
      }
    } catch (e) {
      r.e(e);
    } finally {
      r.f();
    }
    return !1;
  }(u, i)) return !1;
  var h = e.getComputedStyle(t);
  if (h && "pointer" === h.getPropertyValue("cursor") && "click" === n.type) return !0;
  var f = t.tagName.toLowerCase();
  switch (f) {
   case "html":
    return !1;

   case "form":
    return (s || [ "submit" ]).indexOf(n.type) >= 0;

   case "input":
   case "select":
   case "textarea":
    return (s || [ "change", "click" ]).indexOf(n.type) >= 0;

   default:
    return a ? (s || [ "click" ]).indexOf(n.type) >= 0 : (s || [ "click" ]).indexOf(n.type) >= 0 && (Ln.indexOf(f) > -1 || "true" === t.getAttribute("contenteditable"));
  }
}

function qn(e) {
  for (var t = e; t.parentNode && !Mn(t, "body"); t = t.parentNode) {
    var n = Pn(t);
    if (X(n, "ph-sensitive") || X(n, "ph-no-capture")) return !1;
  }
  if (X(Pn(e), "ph-include")) return !0;
  var i = e.type || "";
  if (S(i)) switch (i.toLowerCase()) {
   case "hidden":
   case "password":
    return !1;
  }
  var r = e.name || e.id || "";
  if (S(r)) {
    if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g, ""))) return !1;
  }
  return !0;
}

function Bn(e) {
  return !!(Mn(e, "input") && ![ "button", "checkbox", "submit", "reset" ].includes(e.type) || Mn(e, "select") || Mn(e, "textarea") || "true" === e.getAttribute("contenteditable"));
}

var Hn = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})", Un = new RegExp("^(?:".concat(Hn, ")$")), jn = new RegExp(Hn), Wn = "\\d{3}-?\\d{2}-?\\d{4}", zn = new RegExp("^(".concat(Wn, ")$")), Vn = new RegExp("(".concat(Wn, ")"));

function Gn(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (I(e)) return !1;
  if (S(e)) {
    if (e = G(e), (t ? Un : jn).test((e || "").replace(/[- ]/g, ""))) return !1;
    if ((t ? zn : Vn).test(e)) return !1;
  }
  return !0;
}

function Qn(e) {
  var t = Tn(e);
  return Gn(t = "".concat(t, " ").concat(Jn(e)).trim()) ? t : "";
}

function Jn(e) {
  var t = "";
  return e && e.childNodes && e.childNodes.length && J(e.childNodes, (function(e) {
    var n;
    if (e && "span" === (null === (n = e.tagName) || void 0 === n ? void 0 : n.toLowerCase())) try {
      var i = Tn(e);
      t = "".concat(t, " ").concat(i).trim(), e.childNodes && e.childNodes.length && (t = "".concat(t, " ").concat(Jn(e)).trim());
    } catch (e) {
      C.error(e);
    }
  })), t;
}

function Yn(e) {
  return function(e) {
    var t = e.map((function(e) {
      var t, n, i = "";
      if (e.tag_name && (i += e.tag_name), e.attr_class) {
        e.attr_class.sort();
        var r, s = z(e.attr_class);
        try {
          for (s.s(); !(r = s.n()).done; ) {
            var o = r.value;
            i += ".".concat(o.replace(/"/g, ""));
          }
        } catch (e) {
          s.e(e);
        } finally {
          s.f();
        }
      }
      var a = O(O(O(O({}, e.text ? {
        text: e.text
      } : {}), {}, {
        "nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
        "nth-of-type": null !== (n = e.nth_of_type) && void 0 !== n ? n : 0
      }, e.href ? {
        href: e.href
      } : {}), e.attr_id ? {
        attr_id: e.attr_id
      } : {}), e.attributes), u = {};
      return K(a).sort((function(e, t) {
        var n = H(e, 1)[0], i = H(t, 1)[0];
        return n.localeCompare(i);
      })).forEach((function(e) {
        var t = H(e, 2), n = t[0], i = t[1];
        return u[Xn(n.toString())] = Xn(i.toString());
      })), i += ":", i += K(a).map((function(e) {
        var t = H(e, 2), n = t[0], i = t[1];
        return "".concat(n, '="').concat(i, '"');
      })).join("");
    }));
    return t.join(";");
  }(function(e) {
    return e.map((function(e) {
      var t, n, i = {
        text: null === (t = e.$el_text) || void 0 === t ? void 0 : t.slice(0, 400),
        tag_name: e.tag_name,
        href: null === (n = e.attr__href) || void 0 === n ? void 0 : n.slice(0, 2048),
        attr_class: Kn(e),
        attr_id: e.attr__id,
        nth_child: e.nth_child,
        nth_of_type: e.nth_of_type,
        attributes: {}
      };
      return K(e).filter((function(e) {
        return 0 === H(e, 1)[0].indexOf("attr__");
      })).forEach((function(e) {
        var t = H(e, 2), n = t[0], r = t[1];
        return i.attributes[n] = r;
      })), i;
    }));
  }(e));
}

function Xn(e) {
  return e.replace(/"|\\"/g, '\\"');
}

function Kn(e) {
  var t = e.attr__class;
  return t ? m(t) ? t : In(t) : void 0;
}

var Zn = "[SessionRecording]", ei = "redacted", ti = {
  initiatorTypes: [ "audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest" ],
  maskRequestFn: function(e) {
    return e;
  },
  recordHeaders: !1,
  recordBody: !1,
  recordInitialRequests: !1,
  recordPerformance: !1,
  performanceEntryTypeToObserve: [ "first-input", "navigation", "paint", "resource" ],
  payloadSizeLimitBytes: 1e6,
  payloadHostDenyList: [ ".lr-ingest.io", ".ingest.sentry.io" ]
}, ni = [ "authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token" ], ii = [ "password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token" ], ri = [ "/s/", "/e/", "/i/" ];

function si(e, t, n, i) {
  if (I(e)) return e;
  var r = (null == t ? void 0 : t["content-length"]) || function(e) {
    return new Blob([ e ]).size;
  }(e);
  return S(r) && (r = parseInt(r)), r > n ? Zn + " ".concat(i, " body too large to record (").concat(r, " bytes)") : e;
}

function oi(e, t) {
  if (I(e)) return e;
  var n = e;
  return Gn(n, !1) || (n = Zn + " " + t + " body " + ei), J(ii, (function(e) {
    var i, r;
    null !== (i = n) && void 0 !== i && i.length && -1 !== (null === (r = n) || void 0 === r ? void 0 : r.indexOf(e)) && (n = Zn + " " + t + " body " + ei + " as might contain: " + e);
  })), n;
}

var ai = function(e, t) {
  var n, i, r, s = {
    payloadSizeLimitBytes: ti.payloadSizeLimitBytes,
    performanceEntryTypeToObserve: U(ti.performanceEntryTypeToObserve),
    payloadHostDenyList: [].concat(U(t.payloadHostDenyList || []), U(ti.payloadHostDenyList))
  }, o = !1 !== e.session_recording.recordHeaders && t.recordHeaders, a = !1 !== e.session_recording.recordBody && t.recordBody, u = !1 !== e.capture_performance && t.recordPerformance, l = (n = s, 
  r = Math.min(1e6, null !== (i = n.payloadSizeLimitBytes) && void 0 !== i ? i : 1e6), 
  function(e) {
    return null != e && e.requestBody && (e.requestBody = si(e.requestBody, e.requestHeaders, r, "Request")), 
    null != e && e.responseBody && (e.responseBody = si(e.responseBody, e.responseHeaders, r, "Response")), 
    e;
  }), c = function(e) {
    return l(function(e) {
      var t = gt(e.name);
      if (!(t && t.pathname && ri.some((function(e) {
        return 0 === t.pathname.indexOf(e);
      })))) return e;
    }((n = (t = e).requestHeaders, I(n) || J(Object.keys(null != n ? n : {}), (function(e) {
      ni.includes(e.toLowerCase()) && (n[e] = ei);
    })), t)));
    var t, n;
  }, d = y(e.session_recording.maskNetworkRequestFn);
  return d && y(e.session_recording.maskCapturedNetworkRequestFn) && C.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), 
  d && (e.session_recording.maskCapturedNetworkRequestFn = function(t) {
    var n = e.session_recording.maskNetworkRequestFn({
      url: t.name
    });
    return O(O({}, t), {}, {
      name: null == n ? void 0 : n.url
    });
  }), s.maskRequestFn = y(e.session_recording.maskCapturedNetworkRequestFn) ? function(t) {
    var n, i, r, s = c(t);
    return s && null !== (n = null === (i = (r = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === i ? void 0 : i.call(r, s)) && void 0 !== n ? n : void 0;
  } : function(e) {
    return function(e) {
      if (!k(e)) return e.requestBody = oi(e.requestBody, "Request"), e.responseBody = oi(e.responseBody, "Response"), 
      e;
    }(c(e));
  }, O(O(O({}, ti), s), {}, {
    recordHeaders: o,
    recordBody: a,
    recordPerformance: u,
    recordInitialRequests: u
  });
}, ui = N((function e(t) {
  var n, i, r = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  L(this, e), q(this, "bucketSize", 100), q(this, "refillRate", 10), q(this, "mutationBuckets", {}), 
  q(this, "loggedTracker", {}), q(this, "refillBuckets", (function() {
    Object.keys(r.mutationBuckets).forEach((function(e) {
      r.mutationBuckets[e] = r.mutationBuckets[e] + r.refillRate, r.mutationBuckets[e] >= r.bucketSize && delete r.mutationBuckets[e];
    }));
  })), q(this, "getNodeOrRelevantParent", (function(e) {
    var t = r.rrweb.mirror.getNode(e);
    if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
      var n = t.closest("svg");
      if (n) return [ r.rrweb.mirror.getId(n), n ];
    }
    return [ e, t ];
  })), q(this, "numberOfChanges", (function(e) {
    var t, n, i, r, s, o, a, u;
    return (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) + (null !== (i = null === (r = e.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0) + (null !== (s = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0) + (null !== (a = null === (u = e.adds) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0);
  })), q(this, "throttleMutations", (function(e) {
    if (3 !== e.type || 0 !== e.data.source) return e;
    var t = e.data, n = r.numberOfChanges(t);
    t.attributes && (t.attributes = t.attributes.filter((function(e) {
      var t, n, i, s = H(r.getNodeOrRelevantParent(e.id), 2), o = s[0], a = s[1];
      if (0 === r.mutationBuckets[o]) return !1;
      (r.mutationBuckets[o] = null !== (t = r.mutationBuckets[o]) && void 0 !== t ? t : r.bucketSize, 
      r.mutationBuckets[o] = Math.max(r.mutationBuckets[o] - 1, 0), 0 === r.mutationBuckets[o]) && (r.loggedTracker[o] || (r.loggedTracker[o] = !0, 
      null === (n = (i = r.options).onBlockedNode) || void 0 === n || n.call(i, o, a)));
      return e;
    })));
    var i = r.numberOfChanges(t);
    return 0 !== i || n === i ? e : void 0;
  })), this.rrweb = t, this.options = s, this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate, 
  this.bucketSize = null !== (i = this.options.bucketSize) && void 0 !== i ? i : this.bucketSize, 
  setInterval((function() {
    r.refillBuckets();
  }), 1e3);
})), li = Uint8Array, ci = Uint16Array, di = Uint32Array, hi = new li([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0 ]), fi = new li([ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0 ]), vi = new li([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]), pi = function(e, t) {
  for (var n = new ci(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
  var r = new di(n[30]);
  for (i = 1; i < 30; ++i) for (var s = n[i]; s < n[i + 1]; ++s) r[s] = s - n[i] << 5 | i;
  return [ n, r ];
}, gi = pi(hi, 2), _i = gi[0], mi = gi[1];

_i[28] = 258, mi[258] = 28;

for (var yi = pi(fi, 0)[1], bi = new ci(32768), wi = 0; wi < 32768; ++wi) {
  var ki = (43690 & wi) >>> 1 | (21845 & wi) << 1;
  ki = (61680 & (ki = (52428 & ki) >>> 2 | (13107 & ki) << 2)) >>> 4 | (3855 & ki) << 4, 
  bi[wi] = ((65280 & ki) >>> 8 | (255 & ki) << 8) >>> 1;
}

var Si = function(e, t, n) {
  for (var i = e.length, r = 0, s = new ci(t); r < i; ++r) ++s[e[r] - 1];
  var o, a = new ci(t);
  for (r = 0; r < t; ++r) a[r] = a[r - 1] + s[r - 1] << 1;
  if (n) {
    o = new ci(1 << t);
    var u = 15 - t;
    for (r = 0; r < i; ++r) if (e[r]) for (var l = r << 4 | e[r], c = t - e[r], d = a[e[r] - 1]++ << c, h = d | (1 << c) - 1; d <= h; ++d) o[bi[d] >>> u] = l;
  } else for (o = new ci(i), r = 0; r < i; ++r) o[r] = bi[a[e[r] - 1]++] >>> 15 - e[r];
  return o;
}, Ei = new li(288);

for (wi = 0; wi < 144; ++wi) Ei[wi] = 8;

for (wi = 144; wi < 256; ++wi) Ei[wi] = 9;

for (wi = 256; wi < 280; ++wi) Ei[wi] = 7;

for (wi = 280; wi < 288; ++wi) Ei[wi] = 8;

var xi = new li(32);

for (wi = 0; wi < 32; ++wi) xi[wi] = 5;

var Ii = Si(Ei, 9, 0), Fi = Si(xi, 5, 0), Pi = function(e) {
  return (e / 8 >> 0) + (7 & e && 1);
}, Ri = function(e, t, n) {
  (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
  var i = new (e instanceof ci ? ci : e instanceof di ? di : li)(n - t);
  return i.set(e.subarray(t, n)), i;
}, Ti = function(e, t, n) {
  n <<= 7 & t;
  var i = t / 8 >> 0;
  e[i] |= n, e[i + 1] |= n >>> 8;
}, Ci = function(e, t, n) {
  n <<= 7 & t;
  var i = t / 8 >> 0;
  e[i] |= n, e[i + 1] |= n >>> 8, e[i + 2] |= n >>> 16;
}, $i = function(e, t) {
  for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
    s: i,
    f: e[i]
  });
  var r = n.length, s = n.slice();
  if (!r) return [ new li(0), 0 ];
  if (1 == r) {
    var o = new li(n[0].s + 1);
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
  var f = new ci(h + 1), v = Mi(n[c - 1], f, 0);
  if (v > t) {
    i = 0;
    var p = 0, g = v - t, _ = 1 << g;
    for (s.sort((function(e, t) {
      return f[t.s] - f[e.s] || e.f - t.f;
    })); i < r; ++i) {
      var m = s[i].s;
      if (!(f[m] > t)) break;
      p += _ - (1 << v - f[m]), f[m] = t;
    }
    for (p >>>= g; p > 0; ) {
      var y = s[i].s;
      f[y] < t ? p -= 1 << t - f[y]++ - 1 : ++i;
    }
    for (;i >= 0 && p; --i) {
      var b = s[i].s;
      f[b] == t && (--f[b], ++p);
    }
    v = t;
  }
  return [ new li(f), v ];
}, Mi = function e(t, n, i) {
  return -1 == t.s ? Math.max(e(t.l, n, i + 1), e(t.r, n, i + 1)) : n[t.s] = i;
}, Oi = function(e) {
  for (var t = e.length; t && !e[--t]; ) ;
  for (var n = new ci(++t), i = 0, r = e[0], s = 1, o = function(e) {
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
}, Ai = function(e, t) {
  for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
  return n;
}, Li = function(e, t, n) {
  var i = n.length, r = Pi(t + 2);
  e[r] = 255 & i, e[r + 1] = i >>> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
  for (var s = 0; s < i; ++s) e[r + s + 4] = n[s];
  return 8 * (r + 4 + i);
}, Di = function(e, t, n, i, r, s, o, a, u, l, c) {
  Ti(t, c++, n), ++r[256];
  for (var d = $i(r, 15), h = d[0], f = d[1], v = $i(s, 15), p = v[0], g = v[1], _ = Oi(h), m = _[0], y = _[1], b = Oi(p), w = b[0], k = b[1], S = new ci(19), E = 0; E < m.length; ++E) S[31 & m[E]]++;
  for (E = 0; E < w.length; ++E) S[31 & w[E]]++;
  for (var x = $i(S, 7), I = x[0], F = x[1], P = 19; P > 4 && !I[vi[P - 1]]; --P) ;
  var R, T, C, $, M = l + 5 << 3, O = Ai(r, Ei) + Ai(s, xi) + o, A = Ai(r, h) + Ai(s, p) + o + 14 + 3 * P + Ai(S, I) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
  if (M <= O && M <= A) return Li(t, c, e.subarray(u, u + l));
  if (Ti(t, c, 1 + (A < O)), c += 2, A < O) {
    R = Si(h, f, 0), T = h, C = Si(p, g, 0), $ = p;
    var L = Si(I, F, 0);
    Ti(t, c, y - 257), Ti(t, c + 5, k - 1), Ti(t, c + 10, P - 4), c += 14;
    for (E = 0; E < P; ++E) Ti(t, c + 3 * E, I[vi[E]]);
    c += 3 * P;
    for (var D = [ m, w ], N = 0; N < 2; ++N) {
      var q = D[N];
      for (E = 0; E < q.length; ++E) {
        var B = 31 & q[E];
        Ti(t, c, L[B]), c += I[B], B > 15 && (Ti(t, c, q[E] >>> 5 & 127), c += q[E] >>> 12);
      }
    }
  } else R = Ii, T = Ei, C = Fi, $ = xi;
  for (E = 0; E < a; ++E) if (i[E] > 255) {
    B = i[E] >>> 18 & 31;
    Ci(t, c, R[B + 257]), c += T[B + 257], B > 7 && (Ti(t, c, i[E] >>> 23 & 31), c += hi[B]);
    var H = 31 & i[E];
    Ci(t, c, C[H]), c += $[H], H > 3 && (Ci(t, c, i[E] >>> 5 & 8191), c += fi[H]);
  } else Ci(t, c, R[i[E]]), c += T[i[E]];
  return Ci(t, c, R[256]), c + T[256];
}, Ni = new di([ 65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632 ]), qi = new li(0), Bi = function() {
  for (var e = new di(256), t = 0; t < 256; ++t) {
    for (var n = t, i = 9; --i; ) n = (1 & n && 3988292384) ^ n >>> 1;
    e[t] = n;
  }
  return e;
}(), Hi = function() {
  var e = 4294967295;
  return {
    p: function(t) {
      for (var n = e, i = 0; i < t.length; ++i) n = Bi[255 & n ^ t[i]] ^ n >>> 8;
      e = n;
    },
    d: function() {
      return 4294967295 ^ e;
    }
  };
}, Ui = function(e, t, n, i, r) {
  return function(e, t, n, i, r, s) {
    var o = e.length, a = new li(i + o + 5 * (1 + Math.floor(o / 7e3)) + r), u = a.subarray(i, a.length - r), l = 0;
    if (!t || o < 8) for (var c = 0; c <= o; c += 65535) {
      var d = c + 65535;
      d < o ? l = Li(u, l, e.subarray(c, d)) : (u[c] = s, l = Li(u, l, e.subarray(c, o)));
    } else {
      for (var h = Ni[t - 1], f = h >>> 13, v = 8191 & h, p = (1 << n) - 1, g = new ci(32768), _ = new ci(p + 1), m = Math.ceil(n / 3), y = 2 * m, b = function(t) {
        return (e[t] ^ e[t + 1] << m ^ e[t + 2] << y) & p;
      }, w = new di(25e3), k = new ci(288), S = new ci(32), E = 0, x = 0, I = (c = 0, 
      0), F = 0, P = 0; c < o; ++c) {
        var R = b(c), T = 32767 & c, C = _[R];
        if (g[T] = C, _[R] = T, F <= c) {
          var $ = o - c;
          if ((E > 7e3 || I > 24576) && $ > 423) {
            l = Di(e, u, 0, w, k, S, x, I, P, c - P, l), I = E = x = 0, P = c;
            for (var M = 0; M < 286; ++M) k[M] = 0;
            for (M = 0; M < 30; ++M) S[M] = 0;
          }
          var O = 2, A = 0, L = v, D = T - C & 32767;
          if ($ > 2 && R == b(c - D)) for (var N = Math.min(f, $) - 1, q = Math.min(32767, c), B = Math.min(258, $); D <= q && --L && T != C; ) {
            if (e[c + O] == e[c + O - D]) {
              for (var H = 0; H < B && e[c + H] == e[c + H - D]; ++H) ;
              if (H > O) {
                if (O = H, A = D, H > N) break;
                var U = Math.min(D, H - 2), j = 0;
                for (M = 0; M < U; ++M) {
                  var W = c - D + M + 32768 & 32767, z = W - g[W] + 32768 & 32767;
                  z > j && (j = z, C = W);
                }
              }
            }
            D += (T = C) - (C = g[T]) + 32768 & 32767;
          }
          if (A) {
            w[I++] = 268435456 | mi[O] << 18 | yi[A];
            var V = 31 & mi[O], G = 31 & yi[A];
            x += hi[V] + fi[G], ++k[257 + V], ++S[G], F = c + O, ++E;
          } else w[I++] = e[c], ++k[e[c]];
        }
      }
      l = Di(e, u, s, w, k, S, x, I, P, c - P, l), s || (l = Li(u, l, qi));
    }
    return Ri(a, 0, i + Pi(l) + r);
  }(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, i, !r);
}, ji = function(e, t, n) {
  for (;n; ++t) e[t] = n, n >>>= 8;
}, Wi = function(e, t) {
  var n = t.filename;
  if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, 
  e[9] = 3, 0 != t.mtime && ji(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), 
  n) {
    e[3] = 8;
    for (var i = 0; i <= n.length; ++i) e[i + 10] = n.charCodeAt(i);
  }
}, zi = function(e) {
  return 10 + (e.filename && e.filename.length + 1 || 0);
};

function Vi(e, t) {
  void 0 === t && (t = {});
  var n = Hi(), i = e.length;
  n.p(e);
  var r = Ui(e, t, zi(t), 8), s = r.length;
  return Wi(r, t), ji(r, s - 8, n.d()), ji(r, s - 4, i), r;
}

function Gi(e, t) {
  var n = e.length;
  if (!t && "undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
  for (var i = new li(e.length + (e.length >>> 1)), r = 0, s = function(e) {
    i[r++] = e;
  }, o = 0; o < n; ++o) {
    if (r + 5 > i.length) {
      var a = new li(r + 8 + (n - o << 1));
      a.set(i), i = a;
    }
    var u = e.charCodeAt(o);
    u < 128 || t ? s(u) : u < 2048 ? (s(192 | u >>> 6), s(128 | 63 & u)) : u > 55295 && u < 57344 ? (s(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++o)) >>> 18), 
    s(128 | u >>> 12 & 63), s(128 | u >>> 6 & 63), s(128 | 63 & u)) : (s(224 | u >>> 12), 
    s(128 | u >>> 6 & 63), s(128 | 63 & u));
  }
  return Ri(i, 0, r);
}

var Qi = 3e5, Ji = [ xn.MouseMove, xn.MouseInteraction, xn.Scroll, xn.ViewportResize, xn.Input, xn.TouchMove, xn.MediaInteraction, xn.Drag ], Yi = function(e) {
  return {
    rrwebMethod: e,
    enqueuedAt: Date.now(),
    attempt: 1
  };
}, Xi = "[SessionRecording]";

function Ki(e) {
  return function(e, t) {
    var n = "";
    if (!t && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(e);
    for (var i = 0; i < e.length; ) {
      var r = e[i++];
      r < 128 || t ? n += String.fromCharCode(r) : r < 224 ? n += String.fromCharCode((31 & r) << 6 | 63 & e[i++]) : r < 240 ? n += String.fromCharCode((15 & r) << 12 | (63 & e[i++]) << 6 | 63 & e[i++]) : (r = ((15 & r) << 18 | (63 & e[i++]) << 12 | (63 & e[i++]) << 6 | 63 & e[i++]) - 65536, 
      n += String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r));
    }
    return n;
  }(Vi(Gi(JSON.stringify(e))), !0);
}

function Zi(e) {
  return e.type === En.Custom && "sessionIdle" === e.data.tag;
}

var er, tr = function() {
  function t(e) {
    var n = this;
    if (L(this, t), q(this, "queuedRRWebEvents", []), q(this, "isIdle", !1), q(this, "_linkedFlagSeen", !1), 
    q(this, "_lastActivityTimestamp", Date.now()), q(this, "_linkedFlag", null), q(this, "_removePageViewCaptureHook", void 0), 
    q(this, "_onSessionIdListener", void 0), q(this, "_persistDecideOnSessionListener", void 0), 
    q(this, "_samplingSessionListener", void 0), q(this, "_forceAllowLocalhostNetworkCapture", !1), 
    q(this, "_onBeforeUnload", (function() {
      n._flushBuffer();
    })), q(this, "_onOffline", (function() {
      n._tryAddCustomEvent("browser offline", {});
    })), q(this, "_onOnline", (function() {
      n._tryAddCustomEvent("browser online", {});
    })), q(this, "_onVisibilityChange", (function() {
      if (null != o && o.visibilityState) {
        var e = "window " + o.visibilityState;
        n._tryAddCustomEvent(e, {});
      }
    })), this.instance = e, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, 
    this.receivedDecide = !1, !this.instance.sessionManager) throw C.error(Xi + " started without valid sessionManager"), 
    new Error(Xi + " started without valid sessionManager. This is a bug.");
    var i = this.sessionManager.checkAndGetSessionAndWindowId(), r = i.sessionId, s = i.windowId;
    this.sessionId = r, this.windowId = s, this.buffer = this.clearBuffer(), this.sessionIdleThresholdMilliseconds >= this.sessionManager.sessionTimeoutMs && C.warn(Xi + " session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds, ") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs, "). Session will never be detected as idle"));
  }
  return N(t, [ {
    key: "sessionIdleThresholdMilliseconds",
    get: function() {
      return this.instance.config.session_recording.session_idle_threshold_ms || 3e5;
    }
  }, {
    key: "rrwebRecord",
    get: function() {
      var e, t;
      return null == h || null === (e = h.__PosthogExtensions__) || void 0 === e || null === (t = e.rrweb) || void 0 === t ? void 0 : t.record;
    }
  }, {
    key: "started",
    get: function() {
      return this._captureStarted;
    }
  }, {
    key: "sessionManager",
    get: function() {
      if (!this.instance.sessionManager) throw new Error(Xi + " must be started with a valid sessionManager.");
      return this.instance.sessionManager;
    }
  }, {
    key: "fullSnapshotIntervalMillis",
    get: function() {
      var e;
      return (null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.full_snapshot_interval_millis) || Qi;
    }
  }, {
    key: "isSampled",
    get: function() {
      var e = this.instance.get_property(xe);
      return P(e) ? e : null;
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
      var t = !!this.instance.get_property(me), n = !this.instance.config.disable_session_recording;
      return e && t && n;
    }
  }, {
    key: "isConsoleLogCaptureEnabled",
    get: function() {
      var e = !!this.instance.get_property(ye), t = this.instance.config.enable_recording_console_log;
      return null != t ? t : e;
    }
  }, {
    key: "canvasRecording",
    get: function() {
      var e = this.instance.get_property(we);
      return e && e.fps && e.quality ? {
        enabled: e.enabled,
        fps: e.fps,
        quality: e.quality
      } : void 0;
    }
  }, {
    key: "networkPayloadCapture",
    get: function() {
      var e, t, n = this.instance.get_property(be), i = {
        recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
        recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
      }, r = (null == i ? void 0 : i.recordHeaders) || (null == n ? void 0 : n.recordHeaders), s = (null == i ? void 0 : i.recordBody) || (null == n ? void 0 : n.recordBody), o = b(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance, a = !!(P(o) ? o : null == n ? void 0 : n.capturePerformance);
      return r || s || a ? {
        recordHeaders: r,
        recordBody: s,
        recordPerformance: a
      } : void 0;
    }
  }, {
    key: "sampleRate",
    get: function() {
      var e = this.instance.get_property(ke);
      return F(e) ? e : null;
    }
  }, {
    key: "minimumDuration",
    get: function() {
      var e = this.instance.get_property(Se);
      return F(e) ? e : null;
    }
  }, {
    key: "status",
    get: function() {
      return this.receivedDecide ? this.isRecordingEnabled ? I(this._linkedFlag) || this._linkedFlagSeen ? P(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering";
    }
  }, {
    key: "startIfEnabledOrStop",
    value: function() {
      var t = this;
      this.isRecordingEnabled ? (this._startCapture(), null == e || e.addEventListener("beforeunload", this._onBeforeUnload), 
      null == e || e.addEventListener("offline", this._onOffline), null == e || e.addEventListener("online", this._onOnline), 
      null == e || e.addEventListener("visibilitychange", this._onVisibilityChange), this._setupSampling(), 
      I(this._removePageViewCaptureHook) && (this._removePageViewCaptureHook = this.instance._addCaptureHook((function(n) {
        try {
          if ("$pageview" === n) {
            var i = e ? t._maskUrl(e.location.href) : "";
            if (!i) return;
            t._tryAddCustomEvent("$pageview", {
              href: i
            });
          }
        } catch (e) {
          C.error("Could not add $pageview to rrweb session", e);
        }
      }))), this._onSessionIdListener || (this._onSessionIdListener = this.sessionManager.onSessionId((function(e, n, i) {
        i && t._tryAddCustomEvent("$session_id_change", {
          sessionId: e,
          windowId: n,
          changeReason: i
        });
      })))) : this.stopRecording();
    }
  }, {
    key: "stopRecording",
    value: function() {
      var t, n, i;
      this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, 
      this._captureStarted = !1, null == e || e.removeEventListener("beforeunload", this._onBeforeUnload), 
      null == e || e.removeEventListener("offline", this._onOffline), null == e || e.removeEventListener("online", this._onOnline), 
      null == e || e.removeEventListener("visibilitychange", this._onVisibilityChange), 
      this.clearBuffer(), clearInterval(this._fullSnapshotTimer), null === (t = this._removePageViewCaptureHook) || void 0 === t || t.call(this), 
      this._removePageViewCaptureHook = void 0, null === (n = this._onSessionIdListener) || void 0 === n || n.call(this), 
      this._onSessionIdListener = void 0, null === (i = this._samplingSessionListener) || void 0 === i || i.call(this), 
      this._samplingSessionListener = void 0, C.info(Xi + " stopped"));
    }
  }, {
    key: "makeSamplingDecision",
    value: function(e) {
      var t, n = this.sessionId !== e, i = this.sampleRate;
      if (F(i)) {
        var r, s = this.isSampled, o = n || !P(s);
        if (o) r = Math.random() < i; else r = s;
        !r && o && C.warn(Xi + " Sample rate (".concat(i, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), 
        this._tryAddCustomEvent("samplingDecisionMade", {
          sampleRate: i
        }), null === (t = this.instance.persistence) || void 0 === t || t.register(q({}, xe, r));
      } else {
        var a;
        null === (a = this.instance.persistence) || void 0 === a || a.register(q({}, xe, null));
      }
    }
  }, {
    key: "afterDecideResponse",
    value: function(e) {
      var t, n, i, r = this;
      (this._persistDecideResponse(e), this._linkedFlag = (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null, 
      null !== (n = e.sessionRecording) && void 0 !== n && n.endpoint) && (this._endpoint = null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.endpoint);
      if (this._setupSampling(), !I(this._linkedFlag) && !this._linkedFlagSeen) {
        var s = S(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag, o = S(this._linkedFlag) ? null : this._linkedFlag.variant;
        this.instance.onFeatureFlags((function(e, t) {
          var n = b(t) && s in t, i = o ? t[s] === o : n;
          if (i) {
            var a = {
              linkedFlag: s,
              linkedVariant: o
            }, u = "linked flag matched";
            C.info(Xi + " " + u, a), r._tryAddCustomEvent(u, a);
          }
          r._linkedFlagSeen = i;
        }));
      }
      this.receivedDecide = !0, this.startIfEnabledOrStop();
    }
  }, {
    key: "_setupSampling",
    value: function() {
      var e = this;
      F(this.sampleRate) && I(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId((function(t) {
        e.makeSamplingDecision(t);
      })));
    }
  }, {
    key: "_persistDecideResponse",
    value: function(e) {
      if (this.instance.persistence) {
        var t, n = this.instance.persistence, i = function() {
          var t, i, r, s, o, a, u, l, c = null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.sampleRate, d = I(c) ? null : parseFloat(c), h = null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.minimumDurationMilliseconds;
          n.register((q(l = {}, me, !!e.sessionRecording), q(l, ye, null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.consoleLogRecordingEnabled), 
          q(l, be, O({
            capturePerformance: e.capturePerformance
          }, null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.networkPayloadCapture)), 
          q(l, we, {
            enabled: null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.recordCanvas,
            fps: null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.canvasFps,
            quality: null === (u = e.sessionRecording) || void 0 === u ? void 0 : u.canvasQuality
          }), q(l, ke, d), q(l, Se, k(h) ? null : h), l));
        };
        i(), null === (t = this._persistDecideOnSessionListener) || void 0 === t || t.call(this), 
        this._persistDecideOnSessionListener = this.sessionManager.onSessionId(i);
      }
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
        timestamp: Date.now()
      });
    }
  }, {
    key: "_startCapture",
    value: function() {
      var e, t, n = this;
      k(Object.assign) || (this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut() || (this._captureStarted = !0, 
      this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord ? this._onScriptLoaded() : null === (e = h.__PosthogExtensions__) || void 0 === e || null === (t = e.loadExternalDependency) || void 0 === t || t.call(e, this.instance, "recorder", (function(e) {
        if (e) return C.error(Xi + " could not load recorder", e);
        n._onScriptLoaded();
      }))));
    }
  }, {
    key: "isInteractiveEvent",
    value: function(e) {
      var t;
      return 3 === e.type && -1 !== Ji.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source);
    }
  }, {
    key: "_updateWindowAndSessionIds",
    value: function(e) {
      var t = this.isInteractiveEvent(e);
      t || this.isIdle || e.timestamp - this._lastActivityTimestamp > this.sessionIdleThresholdMilliseconds && (this.isIdle = !0, 
      clearInterval(this._fullSnapshotTimer), this._tryAddCustomEvent("sessionIdle", {
        eventTimestamp: e.timestamp,
        lastActivityTimestamp: this._lastActivityTimestamp,
        threshold: this.sessionIdleThresholdMilliseconds,
        bufferLength: this.buffer.data.length,
        bufferSize: this.buffer.size
      }), this._flushBuffer());
      var n = !1;
      if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, 
      this._tryAddCustomEvent("sessionNoLongerIdle", {
        reason: "user activity",
        type: e.type
      }), n = !0)), !this.isIdle) {
        var i = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp), r = i.windowId, s = i.sessionId, o = this.sessionId !== s, a = this.windowId !== r;
        this.windowId = r, this.sessionId = s, o || a ? (this.stopRecording(), this.startIfEnabledOrStop()) : n && this._scheduleFullSnapshot();
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
        }) : C.warn(Xi + " could not emit queued rrweb event.", t, e), !1;
      }
    }
  }, {
    key: "_tryAddCustomEvent",
    value: function(e, t) {
      var n = this;
      return this._tryRRWebMethod(Yi((function() {
        return n.rrwebRecord.addCustomEvent(e, t);
      })));
    }
  }, {
    key: "_tryTakeFullSnapshot",
    value: function() {
      var e = this;
      return this._tryRRWebMethod(Yi((function() {
        return e.rrwebRecord.takeFullSnapshot();
      })));
    }
  }, {
    key: "_onScriptLoaded",
    value: function() {
      for (var e, t = this, n = {
        blockClass: "ph-no-capture",
        blockSelector: void 0,
        ignoreClass: "ph-ignore-input",
        maskTextClass: "ph-mask",
        maskTextSelector: void 0,
        maskTextFn: void 0,
        maskAllInputs: !0,
        maskInputOptions: {
          password: !0
        },
        maskInputFn: void 0,
        slimDOMOptions: {},
        collectFonts: !1,
        inlineStylesheet: !0,
        recordCrossOriginIframes: !1
      }, i = this.instance.config.session_recording, r = 0, s = Object.entries(i || {}); r < s.length; r++) {
        var o = H(s[r], 2), a = o[0], u = o[1];
        a in n && ("maskInputOptions" === a ? n.maskInputOptions = O({
          password: !0
        }, u) : n[a] = u);
      }
      if (this.canvasRecording && this.canvasRecording.enabled && (n.recordCanvas = !0, 
      n.sampling = {
        canvas: this.canvasRecording.fps
      }, n.dataURLOptions = {
        type: "image/webp",
        quality: this.canvasRecording.quality
      }), this.rrwebRecord) {
        this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new ui(this.rrwebRecord, {
          onBlockedNode: function(e, n) {
            var i = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
            C.info(i, {
              node: n
            }), t.log(Xi + " " + i, "warn");
          }
        });
        var l = this._gatherRRWebPlugins();
        this.stopRrweb = this.rrwebRecord(O({
          emit: function(e) {
            t.onRRwebEmit(e);
          },
          plugins: l
        }, n)), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
          sessionRecordingOptions: n,
          activePlugins: l.map((function(e) {
            return null == e ? void 0 : e.name;
          }))
        }), this._tryAddCustomEvent("$posthog_config", {
          config: this.instance.config
        }), C.info(Xi + " started", {
          idleThreshold: this.sessionIdleThresholdMilliseconds,
          maxIdleTime: this.sessionManager.sessionTimeoutMs
        });
      } else C.error(Xi + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
    }
  }, {
    key: "_scheduleFullSnapshot",
    value: function() {
      var e = this;
      if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle) {
        var t = this.fullSnapshotIntervalMillis;
        t && (this._fullSnapshotTimer = setInterval((function() {
          e._tryTakeFullSnapshot();
        }), t));
      }
    }
  }, {
    key: "_gatherRRWebPlugins",
    value: function() {
      var e, t, n, i, r = [], s = null === (e = h.__PosthogExtensions__) || void 0 === e || null === (t = e.rrwebPlugins) || void 0 === t ? void 0 : t.getRecordConsolePlugin;
      s && this.isConsoleLogCaptureEnabled && r.push(s());
      var o = null === (n = h.__PosthogExtensions__) || void 0 === n || null === (i = n.rrwebPlugins) || void 0 === i ? void 0 : i.getRecordNetworkPlugin;
      this.networkPayloadCapture && y(o) && (!pt.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? r.push(o(ai(this.instance.config, this.networkPayloadCapture))) : C.info(Xi + " NetworkCapture not started because we are on localhost."));
      return r;
    }
  }, {
    key: "onRRwebEmit",
    value: function(e) {
      var t;
      if (this._processQueuedEvents(), e && b(e)) {
        if (e.type === En.Meta) {
          var n = this._maskUrl(e.data.href);
          if (this._lastHref = n, !n) return;
          e.data.href = n;
        } else this._pageViewFallBack();
        e.type === En.FullSnapshot && this._scheduleFullSnapshot();
        var i = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
        if (i) {
          var r = function(e) {
            var t = e;
            if (t && b(t) && 6 === t.type && b(t.data) && "rrweb/console@1" === t.data.plugin) {
              t.data.payload.payload.length > 10 && (t.data.payload.payload = t.data.payload.payload.slice(0, 10), 
              t.data.payload.payload.push("...[truncated]"));
              for (var n = [], i = 0; i < t.data.payload.payload.length; i++) t.data.payload.payload[i] && t.data.payload.payload[i].length > 2e3 ? n.push(t.data.payload.payload[i].slice(0, 2e3) + "...[truncated]") : n.push(t.data.payload.payload[i]);
              return t.data.payload.payload = n, e;
            }
            return e;
          }(i);
          if (this._updateWindowAndSessionIds(r), !this.isIdle || Zi(r)) {
            if (Zi(r)) {
              var s = r.data.payload;
              if (s) {
                var o = s.lastActivityTimestamp, a = s.threshold;
                r.timestamp = o + a;
              }
            }
            var u = null === (t = this.instance.config.session_recording.compress_events) || void 0 === t || t ? function(e) {
              if (kn(e) < 1024) return e;
              try {
                if (e.type === En.FullSnapshot) return O(O({}, e), {}, {
                  data: Ki(e.data),
                  cv: "2024-10"
                });
                if (e.type === En.IncrementalSnapshot && e.data.source === xn.Mutation) return O(O({}, e), {}, {
                  cv: "2024-10",
                  data: O(O({}, e.data), {}, {
                    texts: Ki(e.data.texts),
                    attributes: Ki(e.data.attributes),
                    removes: Ki(e.data.removes),
                    adds: Ki(e.data.adds)
                  })
                });
                if (e.type === En.IncrementalSnapshot && e.data.source === xn.StyleSheetRule) return O(O({}, e), {}, {
                  cv: "2024-10",
                  data: O(O({}, e.data), {}, {
                    adds: Ki(e.data.adds),
                    removes: Ki(e.data.removes)
                  })
                });
              } catch (e) {
                C.error(Xi + " could not compress event - will use uncompressed event", e);
              }
              return e;
            }(r) : r, l = {
              $snapshot_bytes: kn(u),
              $snapshot_data: u,
              $session_id: this.sessionId,
              $window_id: this.windowId
            };
            "disabled" !== this.status ? this._captureSnapshotBuffered(l) : this.clearBuffer();
          }
        }
      }
    }
  }, {
    key: "_pageViewFallBack",
    value: function() {
      if (!this.instance.config.capture_pageview && e) {
        var t = this._maskUrl(e.location.href);
        this._lastHref !== t && (this._tryAddCustomEvent("$url_changed", {
          href: t
        }), this._lastHref = t);
      }
    }
  }, {
    key: "_processQueuedEvents",
    value: function() {
      var e = this;
      if (this.queuedRRWebEvents.length) {
        var t = U(this.queuedRRWebEvents);
        this.queuedRRWebEvents = [], t.forEach((function(t) {
          Date.now() - t.enqueuedAt <= 2e3 && e._tryRRWebMethod(t);
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
      return this.buffer = {
        size: 0,
        data: [],
        sessionId: this.sessionId,
        windowId: this.windowId
      }, this.buffer;
    }
  }, {
    key: "_flushBuffer",
    value: function() {
      var e = this;
      this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
      var t = this.minimumDuration, n = this.sessionDuration, i = F(n) && n >= 0, r = F(t) && i && n < t;
      if ("buffering" === this.status || r) return this.flushBufferTimer = setTimeout((function() {
        e._flushBuffer();
      }), 2e3), this.buffer;
      this.buffer.data.length > 0 && Sn(this.buffer).forEach((function(t) {
        e._captureSnapshot({
          $snapshot_bytes: t.size,
          $snapshot_data: t.data,
          $session_id: t.sessionId,
          $window_id: t.windowId
        });
      }));
      return this.clearBuffer();
    }
  }, {
    key: "_captureSnapshotBuffered",
    value: function(e) {
      var t, n = this, i = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
      !this.isIdle && (this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), 
      this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), 
      this.flushBufferTimer || this.isIdle || (this.flushBufferTimer = setTimeout((function() {
        n._flushBuffer();
      }), 2e3));
    }
  }, {
    key: "_captureSnapshot",
    value: function(e) {
      this.instance.capture("$snapshot", e, {
        _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
        _noTruncate: !0,
        _batchKey: "recordings",
        skip_client_rate_limiting: !0
      });
    }
  }, {
    key: "overrideLinkedFlag",
    value: function() {
      this._linkedFlagSeen = !0;
    }
  } ]), t;
}(), nr = function() {
  function e(t) {
    L(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
  }
  return N(e, [ {
    key: "call",
    value: function() {
      var e = this, t = {
        token: this.instance.config.token,
        distinct_id: this.instance.get_distinct_id(),
        groups: this.instance.getGroups(),
        person_properties: this.instance.get_property(Pe),
        group_properties: this.instance.get_property(Re),
        disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0
      };
      this.instance._send_request({
        method: "POST",
        url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
        data: t,
        compression: this.instance.config.disable_compression ? void 0 : re.Base64,
        timeout: this.instance.config.feature_flag_request_timeout_ms,
        callback: function(t) {
          return e.parseDecideResponse(t.json);
        }
      });
    }
  }, {
    key: "parseDecideResponse",
    value: function(e) {
      var t = this;
      this.instance.featureFlags.setReloadingPaused(!1), this.instance.featureFlags._startReloadTimer();
      var n = !e;
      if (this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(null != e ? e : {}, n), 
      n) C.error("Failed to fetch feature flags from PostHog."); else {
        if (!o || !o.body) return C.info("document not ready yet, trying again in 500 milliseconds..."), 
        void setTimeout((function() {
          t.parseDecideResponse(e);
        }), 500);
        if (this.instance._afterDecideResponse(e), e.siteApps) if (this.instance.config.opt_in_site_apps) {
          var i, r = z(e.siteApps);
          try {
            var s = function() {
              var e, n, r = i.value, s = r.id, o = r.url;
              h["__$$ph_site_app_".concat(s)] = t.instance, null === (e = h.__PosthogExtensions__) || void 0 === e || null === (n = e.loadSiteApp) || void 0 === n || n.call(e, t.instance, o, (function(e) {
                if (e) return C.error("Error while initializing PostHog app with config id ".concat(s), e);
              }));
            };
            for (r.s(); !(i = r.n()).done; ) s();
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
        } else e.siteApps.length > 0 && C.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
      }
    }
  } ]), e;
}(), ir = null != e && e.location ? bt(e.location.hash, "__posthog") || bt(location.hash, "state") : null, rr = "_postHogToolbarParams";

!function(e) {
  e[e.UNINITIALIZED = 0] = "UNINITIALIZED", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED";
}(er || (er = {}));

var sr = function() {
  function t(e) {
    L(this, t), this.instance = e;
  }
  return N(t, [ {
    key: "setToolbarState",
    value: function(e) {
      h.ph_toolbar_state = e;
    }
  }, {
    key: "getToolbarState",
    value: function() {
      var e;
      return null !== (e = h.ph_toolbar_state) && void 0 !== e ? e : er.UNINITIALIZED;
    }
  }, {
    key: "maybeLoadToolbar",
    value: function() {
      var t, n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      if (!e || !o) return !1;
      i = null !== (t = i) && void 0 !== t ? t : e.location, s = null !== (n = s) && void 0 !== n ? n : e.history;
      try {
        if (!r) {
          try {
            e.localStorage.setItem("test", "test"), e.localStorage.removeItem("test");
          } catch (e) {
            return !1;
          }
          r = null == e ? void 0 : e.localStorage;
        }
        var a, u = ir || bt(i.hash, "__posthog") || bt(i.hash, "state"), l = u ? Z((function() {
          return JSON.parse(atob(decodeURIComponent(u)));
        })) || Z((function() {
          return JSON.parse(decodeURIComponent(u));
        })) : null;
        return l && "ph_authorize" === l.action ? ((a = l).source = "url", a && Object.keys(a).length > 0 && (l.desiredHash ? i.hash = l.desiredHash : s ? s.replaceState(s.state, "", i.pathname + i.search) : i.hash = "")) : ((a = JSON.parse(r.getItem(rr) || "{}")).source = "localstorage", 
        delete a.userIntent), !(!a.token || this.instance.config.token !== a.token) && (this.loadToolbar(a), 
        !0);
      } catch (e) {
        return !1;
      }
    }
  }, {
    key: "_callLoadToolbar",
    value: function(e) {
      (h.ph_load_toolbar || h.ph_load_editor)(e, this.instance);
    }
  }, {
    key: "loadToolbar",
    value: function(t) {
      var n = this, i = !(null == o || !o.getElementById(Be));
      if (!e || i) return !1;
      var r = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, s = O(O({
        token: this.instance.config.token
      }, t), {}, {
        apiURL: this.instance.requestRouter.endpointFor("ui")
      }, r ? {
        instrument: !1
      } : {});
      if (e.localStorage.setItem(rr, JSON.stringify(O(O({}, s), {}, {
        source: void 0
      }))), this.getToolbarState() === er.LOADED) this._callLoadToolbar(s); else if (this.getToolbarState() === er.UNINITIALIZED) {
        var a, u;
        this.setToolbarState(er.LOADING), null === (a = h.__PosthogExtensions__) || void 0 === a || null === (u = a.loadExternalDependency) || void 0 === u || u.call(a, this.instance, "toolbar", (function(e) {
          if (e) return C.error("Failed to load toolbar", e), void n.setToolbarState(er.UNINITIALIZED);
          n.setToolbarState(er.LOADED), n._callLoadToolbar(s);
        })), oe(e, "turbolinks:load", (function() {
          n.setToolbarState(er.UNINITIALIZED), n.loadToolbar(s);
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
  } ]), t;
}(), or = function() {
  function e(t) {
    L(this, e), q(this, "isPaused", !0), q(this, "queue", []), q(this, "flushTimeoutMs", 3e3), 
    this.sendRequest = t;
  }
  return N(e, [ {
    key: "enqueue",
    value: function(e) {
      this.queue.push(e), this.flushTimeout || this.setFlushTimeout();
    }
  }, {
    key: "unload",
    value: function() {
      var e = this;
      this.clearFlushTimeout();
      var t = this.queue.length > 0 ? this.formatQueue() : {}, n = Object.values(t);
      [].concat(U(n.filter((function(e) {
        return 0 === e.url.indexOf("/e");
      }))), U(n.filter((function(e) {
        return 0 !== e.url.indexOf("/e");
      })))).map((function(t) {
        e.sendRequest(O(O({}, t), {}, {
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
            i.data && m(i.data) && J(i.data, (function(e) {
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
      return J(this.queue, (function(t) {
        var n, i = t, r = (i ? i.batchKey : null) || i.url;
        k(e[r]) && (e[r] = O(O({}, i), {}, {
          data: []
        })), null === (n = e[r].data) || void 0 === n || n.push(i.data);
      })), this.queue = [], e;
    }
  } ]), e;
}(), ar = !!l || !!u, ur = "text/plain", lr = function(e, t) {
  var n = H(e.split("?"), 2), i = n[0], r = n[1], s = O({}, t);
  null == r || r.split("&").forEach((function(e) {
    var t = H(e.split("="), 1)[0];
    delete s[t];
  }));
  var o = mt(s);
  return o = o ? (r ? r + "&" : "") + o : r, "".concat(i, "?").concat(o);
}, cr = function(e) {
  var t = e.data, n = e.compression;
  if (t) {
    if (n === re.GZipJS) {
      var i = Vi(Gi(JSON.stringify(t)), {
        mtime: 0
      }), r = new Blob([ i ], {
        type: ur
      });
      return {
        contentType: ur,
        body: r,
        estimatedSize: r.size
      };
    }
    if (n === re.Base64) {
      var s = function(e) {
        var t, n, i, r, s, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, u = 0, l = "", c = [];
        if (!e) return e;
        e = se(e);
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
      }(JSON.stringify(t)), o = function(e) {
        return "data=" + encodeURIComponent("string" == typeof e ? e : JSON.stringify(e));
      }(s);
      return {
        contentType: "application/x-www-form-urlencoded",
        body: o,
        estimatedSize: new Blob([ o ]).size
      };
    }
    var a = JSON.stringify(t);
    return {
      contentType: "application/json",
      body: a,
      estimatedSize: new Blob([ a ]).size
    };
  }
}, dr = [];

l && dr.push({
  transport: "XHR",
  method: function(e) {
    var t, n = new l;
    n.open(e.method || "GET", e.url, !0);
    var i = null !== (t = cr(e)) && void 0 !== t ? t : {}, r = i.contentType, s = i.body;
    J(e.headers, (function(e, t) {
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
  }
}), u && dr.push({
  transport: "fetch",
  method: function(e) {
    var t, n, i = null !== (t = cr(e)) && void 0 !== t ? t : {}, r = i.contentType, s = i.body, o = i.estimatedSize, a = new Headers;
    J(e.headers, (function(e, t) {
      a.append(t, e);
    })), r && a.append("Content-Type", r);
    var l = e.url, d = null;
    if (c) {
      var h = new c;
      d = {
        signal: h.signal,
        timeout: setTimeout((function() {
          return h.abort();
        }), e.timeout)
      };
    }
    u(l, {
      method: (null == e ? void 0 : e.method) || "GET",
      headers: a,
      keepalive: "POST" === e.method && (o || 0) < 65536,
      body: s,
      signal: null === (n = d) || void 0 === n ? void 0 : n.signal
    }).then((function(t) {
      return t.text().then((function(n) {
        var i, r = {
          statusCode: t.status,
          text: n
        };
        if (200 === t.status) try {
          r.json = JSON.parse(n);
        } catch (e) {
          C.error(e);
        }
        null === (i = e.callback) || void 0 === i || i.call(e, r);
      }));
    })).catch((function(t) {
      var n;
      C.error(t), null === (n = e.callback) || void 0 === n || n.call(e, {
        statusCode: 0,
        text: t
      });
    })).finally((function() {
      return d ? clearTimeout(d.timeout) : null;
    }));
  }
}), null != s && s.sendBeacon && dr.push({
  transport: "sendBeacon",
  method: function(e) {
    var t = lr(e.url, {
      beacon: "1"
    });
    try {
      var n, i = null !== (n = cr(e)) && void 0 !== n ? n : {}, r = i.contentType, o = i.body, a = "string" == typeof o ? new Blob([ o ], {
        type: r
      }) : o;
      s.sendBeacon(t, a);
    } catch (e) {}
  }
});

var hr = [ "retriesPerformedSoFar" ];

var fr, vr = function() {
  function t(n) {
    var i = this;
    L(this, t), q(this, "isPolling", !1), q(this, "pollIntervalMs", 3e3), q(this, "queue", []), 
    this.instance = n, this.queue = [], this.areWeOnline = !0, !k(e) && "onLine" in e.navigator && (this.areWeOnline = e.navigator.onLine, 
    e.addEventListener("online", (function() {
      i.areWeOnline = !0, i.flush();
    })), e.addEventListener("offline", (function() {
      i.areWeOnline = !1;
    })));
  }
  return N(t, [ {
    key: "retriableRequest",
    value: function(e) {
      var t = this, n = e.retriesPerformedSoFar, i = B(e, hr);
      F(n) && n > 0 && (i.url = lr(i.url, {
        retry_count: n
      })), this.instance._send_request(O(O({}, i), {}, {
        callback: function(e) {
          var r;
          200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != n ? n : 0) < 10 ? t.enqueue(O({
            retriesPerformedSoFar: n
          }, i)) : null === (r = i.callback) || void 0 === r || r.call(i, e);
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
      navigator.onLine || (r += " (Browser is offline)"), C.warn(r), this.isPolling || (this.isPolling = !0, 
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
        var i, r = z(n);
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
      var e, t = z(this.queue);
      try {
        for (t.s(); !(e = t.n()).done; ) {
          var n = e.value.requestOptions;
          try {
            this.instance._send_request(O(O({}, n), {}, {
              transport: "sendBeacon"
            }));
          } catch (e) {
            C.error(e);
          }
        }
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
      this.queue = [];
    }
  } ]), t;
}(), pr = 1800, gr = function() {
  function t(e, n, i, r) {
    var s;
    L(this, t), q(this, "_sessionIdChangedHandlers", []), this.config = e, this.persistence = n, 
    this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, 
    this._sessionActivityTimestamp = null, this._sessionIdGenerator = i || Ze, this._windowIdGenerator = r || Ze;
    var o = e.persistence_name || e.token, a = e.session_idle_timeout_seconds || pr;
    if (F(a) ? a > pr ? C.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : a < 60 && C.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (C.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), 
    a = pr), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(a, 60), pr), this._window_id_storage_key = "ph_" + o + "_window_id", 
    this._primary_window_exists_storage_key = "ph_" + o + "_primary_window_exists", 
    this._canUseSessionStorage()) {
      var u = vt.parse(this._window_id_storage_key), l = vt.parse(this._primary_window_exists_storage_key);
      u && !l ? this._windowId = u : vt.remove(this._window_id_storage_key), vt.set(this._primary_window_exists_storage_key, !0);
    }
    if (null !== (s = this.config.bootstrap) && void 0 !== s && s.sessionID) try {
      var c = function(e) {
        var t = e.replace(/-/g, "");
        if (32 !== t.length) throw new Error("Not a valid UUID");
        if ("7" !== t[12]) throw new Error("Not a UUIDv7");
        return parseInt(t.substring(0, 12), 16);
      }(this.config.bootstrap.sessionID);
      this._setSessionId(this.config.bootstrap.sessionID, (new Date).getTime(), c);
    } catch (e) {
      C.error("Invalid sessionID in bootstrap", e);
    }
    this._listenToReloadWindow();
  }
  return N(t, [ {
    key: "sessionTimeoutMs",
    get: function() {
      return this._sessionTimeoutMs;
    }
  }, {
    key: "onSessionId",
    value: function(e) {
      var t = this;
      return k(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), 
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
      return "memory" !== this.config.persistence && !this.persistence.disabled && vt.is_supported();
    }
  }, {
    key: "_setWindowId",
    value: function(e) {
      e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && vt.set(this._window_id_storage_key, e));
    }
  }, {
    key: "_getWindowId",
    value: function() {
      return this._windowId ? this._windowId : this._canUseSessionStorage() ? vt.parse(this._window_id_storage_key) : null;
    }
  }, {
    key: "_setSessionId",
    value: function(e, t, n) {
      e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, 
      this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register(q({}, Ee, [ t, e, n ])));
    }
  }, {
    key: "_getSessionId",
    value: function() {
      if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [ this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp ];
      var e = this.persistence.props[Ee];
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
      var t = this;
      null == e || e.addEventListener("beforeunload", (function() {
        t._canUseSessionStorage() && vt.remove(t._primary_window_exists_storage_key);
      }));
    }
  }, {
    key: "checkAndGetSessionAndWindowId",
    value: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (new Date).getTime(), n = H(this._getSessionId(), 3), i = n[0], r = n[1], s = n[2], o = this._getWindowId(), a = F(s) && s > 0 && Math.abs(t - s) > 864e5, u = !1, l = !r, c = !e && Math.abs(t - i) > this.sessionTimeoutMs;
      l || c || a ? (r = this._sessionIdGenerator(), o = this._windowIdGenerator(), C.info("[SessionId] new session ID generated", {
        sessionId: r,
        windowId: o,
        changeReason: {
          noSessionId: l,
          activityTimeout: c,
          sessionPastMaximumLength: a
        }
      }), s = t, u = !0) : o || (o = this._windowIdGenerator(), u = !0);
      var d = 0 === i || !e || a ? t : i, h = 0 === s ? (new Date).getTime() : s;
      return this._setWindowId(o), this._setSessionId(r, d, h), u && this._sessionIdChangedHandlers.forEach((function(e) {
        return e(r, o, u ? {
          noSessionId: l,
          activityTimeout: c,
          sessionPastMaximumLength: a
        } : void 0);
      })), {
        sessionId: r,
        windowId: o,
        sessionStartTimestamp: h,
        changeReason: u ? {
          noSessionId: l,
          activityTimeout: c,
          sessionPastMaximumLength: a
        } : void 0
      };
    }
  } ]), t;
}();

!function(e) {
  e.US = "us", e.EU = "eu", e.CUSTOM = "custom";
}(fr || (fr = {}));

var _r = "i.posthog.com", mr = function() {
  function e(t) {
    L(this, e), q(this, "_regionCache", {}), this.instance = t;
  }
  return N(e, [ {
    key: "apiHost",
    get: function() {
      var e = this.instance.config.api_host.trim().replace(/\/$/, "");
      return "https://app.posthog.com" === e ? "https://us.i.posthog.com" : e;
    }
  }, {
    key: "uiHost",
    get: function() {
      var e, t = null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "");
      return t || (t = this.apiHost.replace(".".concat(_r), ".posthog.com")), "https://app.posthog.com" === t ? "https://us.posthog.com" : t;
    }
  }, {
    key: "region",
    get: function() {
      return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = fr.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = fr.EU : this._regionCache[this.apiHost] = fr.CUSTOM), 
      this._regionCache[this.apiHost];
    }
  }, {
    key: "endpointFor",
    value: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      if (t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e) return this.uiHost + t;
      if (this.region === fr.CUSTOM) return this.apiHost + t;
      var n = _r + t;
      switch (e) {
       case "assets":
        return "https://".concat(this.region, "-assets.").concat(n);

       case "api":
        return "https://".concat(this.region, ".").concat(n);
      }
    }
  } ]), e;
}(), yr = "posthog-js";

function br(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.organization, i = t.projectId, r = t.prefix, s = t.severityAllowList, o = void 0 === s ? [ "error" ] : s;
  return function(t) {
    var s, a, u, l, c;
    if (!("*" === o || o.includes(t.level)) || !e.__loaded) return t;
    t.tags || (t.tags = {});
    var d = e.requestRouter.endpointFor("ui", "/project/".concat(e.config.token, "/person/").concat(e.get_distinct_id()));
    t.tags["PostHog Person URL"] = d, e.sessionRecordingStarted() && (t.tags["PostHog Recording URL"] = e.get_session_replay_url({
      withTimestamp: !0
    }));
    var h = (null === (s = t.exception) || void 0 === s ? void 0 : s.values) || [], f = {
      $exception_message: (null === (a = h[0]) || void 0 === a ? void 0 : a.value) || t.message,
      $exception_type: null === (u = h[0]) || void 0 === u ? void 0 : u.type,
      $exception_personURL: d,
      $exception_level: t.level,
      $sentry_event_id: t.event_id,
      $sentry_exception: t.exception,
      $sentry_exception_message: (null === (l = h[0]) || void 0 === l ? void 0 : l.value) || t.message,
      $sentry_exception_type: null === (c = h[0]) || void 0 === c ? void 0 : c.type,
      $sentry_tags: t.tags,
      $level: t.level
    };
    return n && i && (f.$sentry_url = (r || "https://sentry.io/organizations/") + n + "/issues/?project=" + i + "&query=" + t.event_id), 
    e.exceptions.sendExceptionEvent(f), t;
  };
}

var wr = N((function e(t, n, i, r, s) {
  L(this, e), this.name = yr, this.setupOnce = function(e) {
    e(br(t, {
      organization: n,
      projectId: i,
      prefix: r,
      severityAllowList: s
    }));
  };
}));

function kr(e, t) {
  var n = e.config.segment;
  if (!n) return t();
  !function(e, t) {
    var n = e.config.segment;
    if (!n) return t();
    var i = function(n) {
      var i = function() {
        return n.anonymousId() || Ze();
      };
      e.config.get_device_id = i, n.id() && (e.register({
        distinct_id: n.id(),
        $device_id: i()
      }), e.persistence.set_property(Me, "identified")), t();
    }, r = n.user();
    "then" in r && y(r.then) ? r.then((function(e) {
      return i(e);
    })) : i(r);
  }(e, (function() {
    n.register(function(e) {
      Promise && Promise.resolve || C.warn("This browser does not have Promise support, and can not use the segment integration");
      var t = function(t, n) {
        var i;
        if (!n) return t;
        t.event.userId || t.event.anonymousId === e.get_distinct_id() || (C.info("Segment integration does not have a userId set, resetting PostHog"), 
        e.reset()), t.event.userId && t.event.userId !== e.get_distinct_id() && (C.info("Segment integration has a userId set, identifying with PostHog"), 
        e.identify(t.event.userId));
        var r = e._calculate_event_properties(n, null !== (i = t.event.properties) && void 0 !== i ? i : {}, new Date);
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
    }(e)).then((function() {
      t();
    }));
  }));
}

var Sr, Er, xr, Ir = function() {
  function t(e) {
    L(this, t), this._instance = e;
  }
  return N(t, [ {
    key: "doPageView",
    value: function(t) {
      var n, i = this._previousPageViewProperties(t);
      return this._currentPath = null !== (n = null == e ? void 0 : e.location.pathname) && void 0 !== n ? n : "", 
      this._instance.scrollManager.resetContext(), this._prevPageviewTimestamp = t, i;
    }
  }, {
    key: "doPageLeave",
    value: function(e) {
      return this._previousPageViewProperties(e);
    }
  }, {
    key: "_previousPageViewProperties",
    value: function(e) {
      var t = this._currentPath, n = this._prevPageviewTimestamp, i = this._instance.scrollManager.getContext();
      if (!n) return {};
      var r = {};
      if (i) {
        var s = i.maxScrollHeight, o = i.lastScrollY, a = i.maxScrollY, u = i.maxContentHeight, l = i.lastContentY, c = i.maxContentY;
        if (!(k(s) || k(o) || k(a) || k(u) || k(l) || k(c))) s = Math.ceil(s), o = Math.ceil(o), 
        a = Math.ceil(a), u = Math.ceil(u), l = Math.ceil(l), c = Math.ceil(c), r = {
          $prev_pageview_last_scroll: o,
          $prev_pageview_last_scroll_percentage: s <= 1 ? 1 : Fr(o / s, 0, 1),
          $prev_pageview_max_scroll: a,
          $prev_pageview_max_scroll_percentage: s <= 1 ? 1 : Fr(a / s, 0, 1),
          $prev_pageview_last_content: l,
          $prev_pageview_last_content_percentage: u <= 1 ? 1 : Fr(l / u, 0, 1),
          $prev_pageview_max_content: c,
          $prev_pageview_max_content_percentage: u <= 1 ? 1 : Fr(c / u, 0, 1)
        };
      }
      return t && (r.$prev_pageview_pathname = t), n && (r.$prev_pageview_duration = (e.getTime() - n.getTime()) / 1e3), 
      r;
    }
  } ]), t;
}();

function Fr(e, t, n) {
  return Math.max(t, Math.min(e, n));
}

!function(e) {
  e.Popover = "popover", e.API = "api", e.Widget = "widget";
}(Sr || (Sr = {})), function(e) {
  e.Open = "open", e.MultipleChoice = "multiple_choice", e.SingleChoice = "single_choice", 
  e.Rating = "rating", e.Link = "link";
}(Er || (Er = {})), function(e) {
  e.NextQuestion = "next_question", e.End = "end", e.ResponseBased = "response_based", 
  e.SpecificQuestion = "specific_question";
}(xr || (xr = {}));

var Pr = function() {
  function e() {
    L(this, e), q(this, "events", {}), this.events = {};
  }
  return N(e, [ {
    key: "on",
    value: function(e, t) {
      var n = this;
      return this.events[e] || (this.events[e] = []), this.events[e].push(t), function() {
        n.events[e] = n.events[e].filter((function(e) {
          return e !== t;
        }));
      };
    }
  }, {
    key: "emit",
    value: function(e, t) {
      var n, i = z(this.events[e] || []);
      try {
        for (i.s(); !(n = i.n()).done; ) {
          (0, n.value)(t);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
      var r, s = z(this.events["*"] || []);
      try {
        for (s.s(); !(r = s.n()).done; ) {
          (0, r.value)(e, t);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
  } ]), e;
}(), Rr = function() {
  function t(e) {
    var n = this;
    L(this, t), q(this, "_debugEventEmitter", new Pr), q(this, "checkStep", (function(e, t) {
      return n.checkStepEvent(e, t) && n.checkStepUrl(e, t) && n.checkStepElement(e, t);
    })), q(this, "checkStepEvent", (function(e, t) {
      return null == t || !t.event || (null == e ? void 0 : e.event) === (null == t ? void 0 : t.event);
    })), this.instance = e, this.actionEvents = new Set, this.actionRegistry = new Set;
  }
  return N(t, [ {
    key: "init",
    value: function() {
      var e, t = this;
      if (!k(null === (e = this.instance) || void 0 === e ? void 0 : e._addCaptureHook)) {
        var n;
        null === (n = this.instance) || void 0 === n || n._addCaptureHook((function(e, n) {
          t.on(e, n);
        }));
      }
    }
  }, {
    key: "register",
    value: function(e) {
      var t, n, i = this;
      if (!k(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) && (e.forEach((function(e) {
        var t, n;
        null === (t = i.actionRegistry) || void 0 === t || t.add(e), null === (n = e.steps) || void 0 === n || n.forEach((function(e) {
          var t;
          null === (t = i.actionEvents) || void 0 === t || t.add((null == e ? void 0 : e.event) || "");
        }));
      })), null !== (n = this.instance) && void 0 !== n && n.autocapture)) {
        var r, s = new Set;
        e.forEach((function(e) {
          var t;
          null === (t = e.steps) || void 0 === t || t.forEach((function(e) {
            null != e && e.selector && s.add(null == e ? void 0 : e.selector);
          }));
        })), null === (r = this.instance) || void 0 === r || r.autocapture.setElementSelectors(s);
      }
    }
  }, {
    key: "on",
    value: function(e, t) {
      var n, i = this;
      null != t && 0 != e.length && (this.actionEvents.has(e) || this.actionEvents.has(null == t ? void 0 : t.event)) && this.actionRegistry && (null === (n = this.actionRegistry) || void 0 === n ? void 0 : n.size) > 0 && this.actionRegistry.forEach((function(e) {
        i.checkAction(t, e) && i._debugEventEmitter.emit("actionCaptured", e.name);
      }));
    }
  }, {
    key: "_addActionHook",
    value: function(e) {
      this.onAction("actionCaptured", (function(t) {
        return e(t);
      }));
    }
  }, {
    key: "checkAction",
    value: function(e, t) {
      if (null == (null == t ? void 0 : t.steps)) return !1;
      var n, i = z(t.steps);
      try {
        for (i.s(); !(n = i.n()).done; ) {
          var r = n.value;
          if (this.checkStep(e, r)) return !0;
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
      return !1;
    }
  }, {
    key: "onAction",
    value: function(e, t) {
      return this._debugEventEmitter.on(e, t);
    }
  }, {
    key: "checkStepUrl",
    value: function(e, n) {
      if (null != n && n.url) {
        var i, r = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$current_url;
        if (!r || "string" != typeof r) return !1;
        if (!t.matchString(r, null == n ? void 0 : n.url, (null == n ? void 0 : n.url_matching) || "contains")) return !1;
      }
      return !0;
    }
  }, {
    key: "checkStepElement",
    value: function(e, n) {
      if ((null != n && n.href || null != n && n.tag_name || null != n && n.text) && !this.getElementsList(e).some((function(e) {
        return !(null != n && n.href && !t.matchString(e.href || "", null == n ? void 0 : n.href, (null == n ? void 0 : n.href_matching) || "exact")) && ((null == n || !n.tag_name || e.tag_name === (null == n ? void 0 : n.tag_name)) && !(null != n && n.text && !t.matchString(e.text || "", null == n ? void 0 : n.text, (null == n ? void 0 : n.text_matching) || "exact") && !t.matchString(e.$el_text || "", null == n ? void 0 : n.text, (null == n ? void 0 : n.text_matching) || "exact")));
      }))) return !1;
      if (null != n && n.selector) {
        var i, r = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$element_selectors;
        if (!r) return !1;
        if (!r.includes(null == n ? void 0 : n.selector)) return !1;
      }
      return !0;
    }
  }, {
    key: "getElementsList",
    value: function(e) {
      return null == (null == e ? void 0 : e.properties.$elements) ? [] : null == e ? void 0 : e.properties.$elements;
    }
  } ], [ {
    key: "matchString",
    value: function(n, i, r) {
      switch (r) {
       case "regex":
        return !!e && _t(n, i);

       case "exact":
        return i === n;

       case "contains":
        var s = t.escapeStringRegexp(i).replace(/_/g, ".").replace(/%/g, ".*");
        return _t(n, s);

       default:
        return !1;
      }
    }
  }, {
    key: "escapeStringRegexp",
    value: function(e) {
      return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }
  } ]), t;
}(), Tr = function() {
  function e(t) {
    L(this, e), this.instance = t, this.eventToSurveys = new Map, this.actionToSurveys = new Map;
  }
  return N(e, [ {
    key: "register",
    value: function(e) {
      var t;
      k(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) || (this.setupEventBasedSurveys(e), 
      this.setupActionBasedSurveys(e));
    }
  }, {
    key: "setupActionBasedSurveys",
    value: function(e) {
      var t = this, n = e.filter((function(e) {
        var t, n, i, r;
        return (null === (t = e.conditions) || void 0 === t ? void 0 : t.actions) && (null === (n = e.conditions) || void 0 === n || null === (i = n.actions) || void 0 === i || null === (r = i.values) || void 0 === r ? void 0 : r.length) > 0;
      }));
      if (0 !== n.length) {
        if (null == this.actionMatcher) {
          this.actionMatcher = new Rr(this.instance), this.actionMatcher.init();
          this.actionMatcher._addActionHook((function(e) {
            t.onAction(e);
          }));
        }
        n.forEach((function(e) {
          var n, i, r, s, o, a, u, l, c, d;
          e.conditions && null !== (n = e.conditions) && void 0 !== n && n.actions && null !== (i = e.conditions) && void 0 !== i && null !== (r = i.actions) && void 0 !== r && r.values && (null === (s = e.conditions) || void 0 === s || null === (o = s.actions) || void 0 === o || null === (a = o.values) || void 0 === a ? void 0 : a.length) > 0 && (null === (u = t.actionMatcher) || void 0 === u || u.register(e.conditions.actions.values), 
          null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c || null === (d = c.values) || void 0 === d || d.forEach((function(n) {
            if (n && n.name) {
              var i = t.actionToSurveys.get(n.name);
              i && i.push(e.id), t.actionToSurveys.set(n.name, i || [ e.id ]);
            }
          })));
        }));
      }
    }
  }, {
    key: "setupEventBasedSurveys",
    value: function(e) {
      var t, n = this;
      if (0 !== e.filter((function(e) {
        var t, n, i, r;
        return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (n = e.conditions) || void 0 === n || null === (i = n.events) || void 0 === i || null === (r = i.values) || void 0 === r ? void 0 : r.length) > 0;
      })).length) {
        null === (t = this.instance) || void 0 === t || t._addCaptureHook((function(e, t) {
          n.onEvent(e, t);
        })), e.forEach((function(e) {
          var t, i, r;
          null === (t = e.conditions) || void 0 === t || null === (i = t.events) || void 0 === i || null === (r = i.values) || void 0 === r || r.forEach((function(t) {
            if (t && t.name) {
              var i = n.eventToSurveys.get(t.name);
              i && i.push(e.id), n.eventToSurveys.set(t.name, i || [ e.id ]);
            }
          }));
        }));
      }
    }
  }, {
    key: "onEvent",
    value: function(t, n) {
      var i, r, s = (null === (i = this.instance) || void 0 === i || null === (r = i.persistence) || void 0 === r ? void 0 : r.props[Ce]) || [];
      if (e.SURVEY_SHOWN_EVENT_NAME == t && n && s.length > 0) {
        var o, a = null == n || null === (o = n.properties) || void 0 === o ? void 0 : o.$survey_id;
        if (a) {
          var u = s.indexOf(a);
          u >= 0 && (s.splice(u, 1), this._updateActivatedSurveys(s));
        }
      } else this.eventToSurveys.has(t) && this._updateActivatedSurveys(s.concat(this.eventToSurveys.get(t) || []));
    }
  }, {
    key: "onAction",
    value: function(e) {
      var t, n, i = (null === (t = this.instance) || void 0 === t || null === (n = t.persistence) || void 0 === n ? void 0 : n.props[Ce]) || [];
      this.actionToSurveys.has(e) && this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(e) || []));
    }
  }, {
    key: "_updateActivatedSurveys",
    value: function(e) {
      var t, n;
      null === (t = this.instance) || void 0 === t || null === (n = t.persistence) || void 0 === n || n.register(q({}, Ce, U(new Set(e))));
    }
  }, {
    key: "getSurveys",
    value: function() {
      var e, t, n = null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t ? void 0 : t.props[Ce];
      return n || [];
    }
  }, {
    key: "getEventToSurveys",
    value: function() {
      return this.eventToSurveys;
    }
  }, {
    key: "_getActionMatcher",
    value: function() {
      return this.actionMatcher;
    }
  } ]), e;
}();

q(Tr, "SURVEY_SHOWN_EVENT_NAME", "survey shown");

var Cr = "[Surveys]", $r = {
  icontains: function(t) {
    return !!e && e.location.href.toLowerCase().indexOf(t.toLowerCase()) > -1;
  },
  not_icontains: function(t) {
    return !!e && -1 === e.location.href.toLowerCase().indexOf(t.toLowerCase());
  },
  regex: function(t) {
    return !!e && _t(e.location.href, t);
  },
  not_regex: function(t) {
    return !!e && !_t(e.location.href, t);
  },
  exact: function(t) {
    return (null == e ? void 0 : e.location.href) === t;
  },
  is_not: function(t) {
    return (null == e ? void 0 : e.location.href) !== t;
  }
};

var Mr = function() {
  function e(t) {
    L(this, e), this.instance = t, this._surveyEventReceiver = null;
  }
  return N(e, [ {
    key: "afterDecideResponse",
    value: function(e) {
      this._decideServerResponse = !!e.surveys, this.loadIfEnabled();
    }
  }, {
    key: "loadIfEnabled",
    value: function() {
      var e, t, n, i = this, r = null == h || null === (e = h.__PosthogExtensions__) || void 0 === e ? void 0 : e.generateSurveys;
      this.instance.config.disable_surveys || !this._decideServerResponse || r || (null == this._surveyEventReceiver && (this._surveyEventReceiver = new Tr(this.instance)), 
      null === (t = h.__PosthogExtensions__) || void 0 === t || null === (n = t.loadExternalDependency) || void 0 === n || n.call(t, this.instance, "surveys", (function(e) {
        var t, n;
        if (e) return C.error(Cr, "Could not load surveys script", e);
        i._surveyManager = null === (t = h.__PosthogExtensions__) || void 0 === t || null === (n = t.generateSurveys) || void 0 === n ? void 0 : n.call(t, i.instance);
      })));
    }
  }, {
    key: "getSurveys",
    value: function(e) {
      var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (this.instance.config.disable_surveys) return e([]);
      null == this._surveyEventReceiver && (this._surveyEventReceiver = new Tr(this.instance));
      var i = this.instance.get_property(Te);
      if (i && !n) return e(i);
      this.instance._send_request({
        url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
        method: "GET",
        transport: "XHR",
        callback: function(n) {
          var i;
          if (200 !== n.statusCode || !n.json) return e([]);
          var r, s = n.json.surveys || [], o = s.filter((function(e) {
            var t, n, i, r, s, o, a, u, l, c, d, h;
            return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (n = e.conditions) || void 0 === n || null === (i = n.events) || void 0 === i ? void 0 : i.values) && (null === (r = e.conditions) || void 0 === r || null === (s = r.events) || void 0 === s || null === (o = s.values) || void 0 === o ? void 0 : o.length) > 0 || (null === (a = e.conditions) || void 0 === a ? void 0 : a.actions) && (null === (u = e.conditions) || void 0 === u || null === (l = u.actions) || void 0 === l ? void 0 : l.values) && (null === (c = e.conditions) || void 0 === c || null === (d = c.actions) || void 0 === d || null === (h = d.values) || void 0 === h ? void 0 : h.length) > 0;
          }));
          o.length > 0 && (null === (r = t._surveyEventReceiver) || void 0 === r || r.register(o));
          return null === (i = t.instance.persistence) || void 0 === i || i.register(q({}, Te, s)), 
          e(s);
        }
      });
    }
  }, {
    key: "getActiveMatchingSurveys",
    value: function(e) {
      var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      this.getSurveys((function(n) {
        var i, r = n.filter((function(e) {
          return !(!e.start_date || e.end_date);
        })).filter((function(e) {
          var t, n, i, r;
          if (!e.conditions) return !0;
          var s = null === (t = e.conditions) || void 0 === t || !t.url || $r[null !== (n = null === (i = e.conditions) || void 0 === i ? void 0 : i.urlMatchType) && void 0 !== n ? n : "icontains"](e.conditions.url), a = null === (r = e.conditions) || void 0 === r || !r.selector || (null == o ? void 0 : o.querySelector(e.conditions.selector));
          return s && a;
        })), s = null === (i = t._surveyEventReceiver) || void 0 === i ? void 0 : i.getSurveys(), a = r.filter((function(e) {
          var n, i, r, o, a, u, l, c, d, h;
          if (!e.linked_flag_key && !e.targeting_flag_key && !e.internal_targeting_flag_key) return !0;
          var f = !e.linked_flag_key || t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key), v = !e.targeting_flag_key || t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key), p = (null === (n = e.conditions) || void 0 === n ? void 0 : n.events) && (null === (i = e.conditions) || void 0 === i || null === (r = i.events) || void 0 === r ? void 0 : r.values) && (null === (o = e.conditions) || void 0 === o || null === (a = o.events) || void 0 === a ? void 0 : a.values.length) > 0, g = (null === (u = e.conditions) || void 0 === u ? void 0 : u.actions) && (null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c ? void 0 : c.values) && (null === (d = e.conditions) || void 0 === d || null === (h = d.actions) || void 0 === h ? void 0 : h.values.length) > 0, _ = !p && !g || (null == s ? void 0 : s.includes(e.id)), m = t._canActivateRepeatedly(e), y = !(e.internal_targeting_flag_key && !m) || t.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key);
          return f && v && y && _;
        }));
        return e(a);
      }), n);
    }
  }, {
    key: "getNextSurveyStep",
    value: function(e, t, n) {
      var i, r = e.questions[t], s = t + 1;
      if (null === (i = r.branching) || void 0 === i || !i.type) return t === e.questions.length - 1 ? xr.End : s;
      if (r.branching.type === xr.End) return xr.End;
      if (r.branching.type === xr.SpecificQuestion) {
        if (Number.isInteger(r.branching.index)) return r.branching.index;
      } else if (r.branching.type === xr.ResponseBased) {
        if (r.type === Er.SingleChoice) {
          var o, a, u = r.choices.indexOf("".concat(n));
          if (null !== (o = r.branching) && void 0 !== o && null !== (a = o.responseValues) && void 0 !== a && a.hasOwnProperty(u)) {
            var l = r.branching.responseValues[u];
            return Number.isInteger(l) ? l : l === xr.End ? xr.End : s;
          }
        } else if (r.type === Er.Rating) {
          var c, d;
          if ("number" != typeof n || !Number.isInteger(n)) throw new Error("The response type must be an integer");
          var h = function(e, t) {
            if (3 === t) {
              if (e < 1 || e > 3) throw new Error("The response must be in range 1-3");
              return 1 === e ? "negative" : 2 === e ? "neutral" : "positive";
            }
            if (5 === t) {
              if (e < 1 || e > 5) throw new Error("The response must be in range 1-5");
              return e <= 2 ? "negative" : 3 === e ? "neutral" : "positive";
            }
            if (7 === t) {
              if (e < 1 || e > 7) throw new Error("The response must be in range 1-7");
              return e <= 3 ? "negative" : 4 === e ? "neutral" : "positive";
            }
            if (10 === t) {
              if (e < 0 || e > 10) throw new Error("The response must be in range 0-10");
              return e <= 6 ? "detractors" : e <= 8 ? "passives" : "promoters";
            }
            throw new Error("The scale must be one of: 3, 5, 7, 10");
          }(n, r.scale);
          if (null !== (c = r.branching) && void 0 !== c && null !== (d = c.responseValues) && void 0 !== d && d.hasOwnProperty(h)) {
            var f = r.branching.responseValues[h];
            return Number.isInteger(f) ? f : f === xr.End ? xr.End : s;
          }
        }
        return s;
      }
      return C.warn(Cr, "Falling back to next question index due to unexpected branching type"), 
      s;
    }
  }, {
    key: "_canActivateRepeatedly",
    value: function(e) {
      var t;
      return I(null === (t = h.__PosthogExtensions__) || void 0 === t ? void 0 : t.canActivateRepeatedly) ? (C.warn(Cr, "canActivateRepeatedly is not defined, must init before calling"), 
      !1) : h.__PosthogExtensions__.canActivateRepeatedly(e);
    }
  }, {
    key: "canRenderSurvey",
    value: function(e) {
      var t = this;
      I(this._surveyManager) ? C.warn(Cr, "canActivateRepeatedly is not defined, must init before calling") : this.getSurveys((function(n) {
        var i = n.filter((function(t) {
          return t.id === e;
        }))[0];
        t._surveyManager.canRenderSurvey(i);
      }));
    }
  }, {
    key: "renderSurvey",
    value: function(e, t) {
      var n = this;
      I(this._surveyManager) ? C.warn(Cr, "canActivateRepeatedly is not defined, must init before calling") : this.getSurveys((function(i) {
        var r = i.filter((function(t) {
          return t.id === e;
        }))[0];
        n._surveyManager.renderSurvey(r, null == o ? void 0 : o.querySelector(t));
      }));
    }
  } ]), e;
}(), Or = function() {
  function e(t) {
    var n, i, r = this;
    L(this, e), q(this, "serverLimits", {}), q(this, "lastEventRateLimited", !1), q(this, "checkForLimiting", (function(e) {
      var t = e.text;
      if (t && t.length) try {
        (JSON.parse(t).quota_limited || []).forEach((function(e) {
          C.info("[RateLimiter] ".concat(e || "events", " is quota limited.")), r.serverLimits[e] = (new Date).getTime() + 6e4;
        }));
      } catch (e) {
        return void C.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
          text: t
        });
      }
    })), this.instance = t, this.captureEventsPerSecond = (null === (n = t.config.rate_limiting) || void 0 === n ? void 0 : n.events_per_second) || 10, 
    this.captureEventsBurstLimit = Math.max((null === (i = t.config.rate_limiting) || void 0 === i ? void 0 : i.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), 
    this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
  }
  return N(e, [ {
    key: "clientRateLimitContext",
    value: function() {
      var e, t, n, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], r = (new Date).getTime(), s = null !== (e = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property(Ae)) && void 0 !== e ? e : {
        tokens: this.captureEventsBurstLimit,
        last: r
      };
      s.tokens += (r - s.last) / 1e3 * this.captureEventsPerSecond, s.last = r, s.tokens > this.captureEventsBurstLimit && (s.tokens = this.captureEventsBurstLimit);
      var o = s.tokens < 1;
      return o || i || (s.tokens = Math.max(0, s.tokens - 1)), !o || this.lastEventRateLimited || i || this.instance.capture("$$client_ingestion_warning", {
        $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.")
      }, {
        skip_client_rate_limiting: !0
      }), this.lastEventRateLimited = o, null === (n = this.instance.persistence) || void 0 === n || n.set_property(Ae, s), 
      {
        isRateLimited: o,
        remainingTokens: s.tokens
      };
    }
  }, {
    key: "isServerRateLimited",
    value: function(e) {
      var t = this.serverLimits[e || "events"] || !1;
      return !1 !== t && (new Date).getTime() < t;
    }
  } ]), e;
}(), Ar = function() {
  return O({
    initialPathName: (null == a ? void 0 : a.pathname) || "",
    referringDomain: yn.referringDomain()
  }, yn.campaignParams());
}, Lr = function() {
  function e(t, n, i) {
    var r = this;
    L(this, e), q(this, "_onSessionIdCallback", (function(e) {
      var t = r._getStoredProps();
      if (!t || t.sessionId !== e) {
        var n = {
          sessionId: e,
          props: r._sessionSourceParamGenerator()
        };
        r._persistence.register(q({}, Oe, n));
      }
    })), this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = i || Ar, 
    this._sessionIdManager.onSessionId(this._onSessionIdCallback);
  }
  return N(e, [ {
    key: "_getStoredProps",
    value: function() {
      return this._persistence.props[Oe];
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
}(), Dr = [ "ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "headlesschrome", "cypress", "Google-HotelAdsVerifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;" ], Nr = function(e, t) {
  if (!e) return !1;
  var n = e.toLowerCase();
  return Dr.concat(t || []).some((function(e) {
    var t = e.toLowerCase();
    return -1 !== n.indexOf(t);
  }));
}, qr = function(e, t) {
  if (!e) return !1;
  var n = e.userAgent;
  if (n && Nr(n, t)) return !0;
  try {
    var i = null == e ? void 0 : e.userAgentData;
    if (null != i && i.brands && i.brands.some((function(e) {
      return Nr(null == e ? void 0 : e.brand, t);
    }))) return !0;
  } catch (e) {}
  return !!e.webdriver;
}, Br = function() {
  function e() {
    L(this, e), this.clicks = [];
  }
  return N(e, [ {
    key: "isRageClick",
    value: function(e, t, n) {
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
}();

function Hr(e) {
  var t;
  return e.id === Be || !(null === (t = e.closest) || void 0 === t || !t.call(e, "#" + Be));
}

var Ur = function() {
  function t(n) {
    var i, r = this;
    L(this, t), q(this, "rageclicks", new Br), q(this, "_enabledServerSide", !1), q(this, "_initialized", !1), 
    q(this, "_flushInterval", null), this.instance = n, this._enabledServerSide = !(null === (i = this.instance.persistence) || void 0 === i || !i.props[fe]), 
    null == e || e.addEventListener("beforeunload", (function() {
      r.flush();
    }));
  }
  return N(t, [ {
    key: "flushIntervalMilliseconds",
    get: function() {
      var e = 5e3;
      return b(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds), 
      e;
    }
  }, {
    key: "isEnabled",
    get: function() {
      return k(this.instance.config.capture_heatmaps) ? k(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : !1 !== this.instance.config.capture_heatmaps;
    }
  }, {
    key: "startIfEnabled",
    value: function() {
      if (this.isEnabled) {
        if (this._initialized) return;
        C.info("[heatmaps] starting..."), this._setupListeners(), this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds);
      } else {
        var e;
        clearInterval(null !== (e = this._flushInterval) && void 0 !== e ? e : void 0), 
        this.getAndClearBuffer();
      }
    }
  }, {
    key: "afterDecideResponse",
    value: function(e) {
      var t = !!e.heatmaps;
      this.instance.persistence && this.instance.persistence.register(q({}, fe, t)), this._enabledServerSide = t, 
      this.startIfEnabled();
    }
  }, {
    key: "getAndClearBuffer",
    value: function() {
      var e = this.buffer;
      return this.buffer = void 0, e;
    }
  }, {
    key: "_setupListeners",
    value: function() {
      var t = this;
      e && o && (oe(o, "click", (function(n) {
        return t._onClick(n || (null == e ? void 0 : e.event));
      }), !1, !0), oe(o, "mousemove", (function(n) {
        return t._onMouseMove(n || (null == e ? void 0 : e.event));
      }), !1, !0), this._initialized = !0);
    }
  }, {
    key: "_getProperties",
    value: function(t, n) {
      var i = this.instance.scrollManager.scrollY(), r = this.instance.scrollManager.scrollX(), s = this.instance.scrollManager.scrollElement(), o = function(t, n, i) {
        for (var r = t; r && $n(r) && !Mn(r, "body"); ) {
          if (r === i) return !1;
          if (X(n, null == e ? void 0 : e.getComputedStyle(r).position)) return !0;
          r = Dn(r);
        }
        return !1;
      }(Cn(t), [ "fixed", "sticky" ], s);
      return {
        x: t.clientX + (o ? 0 : r),
        y: t.clientY + (o ? 0 : i),
        target_fixed: o,
        type: n
      };
    }
  }, {
    key: "_onClick",
    value: function(e) {
      var t;
      if (!Hr(e.target)) {
        var n = this._getProperties(e, "click");
        null !== (t = this.rageclicks) && void 0 !== t && t.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._capture(O(O({}, n), {}, {
          type: "rageclick"
        })), this._capture(n);
      }
    }
  }, {
    key: "_onMouseMove",
    value: function(e) {
      var t = this;
      Hr(e.target) || (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((function() {
        t._capture(t._getProperties(e, "mousemove"));
      }), 500));
    }
  }, {
    key: "_capture",
    value: function(t) {
      if (e) {
        var n = e.location.href;
        this.buffer = this.buffer || {}, this.buffer[n] || (this.buffer[n] = []), this.buffer[n].push(t);
      }
    }
  }, {
    key: "flush",
    value: function() {
      this.buffer && !w(this.buffer) && this.instance.capture("$$heatmap", {
        $heatmap_data: this.getAndClearBuffer()
      });
    }
  } ]), t;
}(), jr = function() {
  function t(e) {
    var n = this;
    L(this, t), q(this, "_updateScrollData", (function() {
      var e, t, i, r;
      n.context || (n.context = {});
      var s = n.scrollElement(), o = n.scrollY(), a = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0, u = o + ((null == s ? void 0 : s.clientHeight) || 0), l = (null == s ? void 0 : s.scrollHeight) || 0;
      n.context.lastScrollY = Math.ceil(o), n.context.maxScrollY = Math.max(o, null !== (e = n.context.maxScrollY) && void 0 !== e ? e : 0), 
      n.context.maxScrollHeight = Math.max(a, null !== (t = n.context.maxScrollHeight) && void 0 !== t ? t : 0), 
      n.context.lastContentY = u, n.context.maxContentY = Math.max(u, null !== (i = n.context.maxContentY) && void 0 !== i ? i : 0), 
      n.context.maxContentHeight = Math.max(l, null !== (r = n.context.maxContentHeight) && void 0 !== r ? r : 0);
    })), this.instance = e;
  }
  return N(t, [ {
    key: "getContext",
    value: function() {
      return this.context;
    }
  }, {
    key: "resetContext",
    value: function() {
      var e = this.context;
      return setTimeout(this._updateScrollData, 0), e;
    }
  }, {
    key: "startMeasuringScrollPosition",
    value: function() {
      null == e || e.addEventListener("scroll", this._updateScrollData, !0), null == e || e.addEventListener("scrollend", this._updateScrollData, !0), 
      null == e || e.addEventListener("resize", this._updateScrollData);
    }
  }, {
    key: "scrollElement",
    value: function() {
      if (!this.instance.config.scroll_root_selector) return null == e ? void 0 : e.document.documentElement;
      var t, n = z(m(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [ this.instance.config.scroll_root_selector ]);
      try {
        for (n.s(); !(t = n.n()).done; ) {
          var i = t.value, r = null == e ? void 0 : e.document.querySelector(i);
          if (r) return r;
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
    }
  }, {
    key: "scrollY",
    value: function() {
      if (this.instance.config.scroll_root_selector) {
        var t = this.scrollElement();
        return t && t.scrollTop || 0;
      }
      return e && (e.scrollY || e.pageYOffset || e.document.documentElement.scrollTop) || 0;
    }
  }, {
    key: "scrollX",
    value: function() {
      if (this.instance.config.scroll_root_selector) {
        var t = this.scrollElement();
        return t && t.scrollLeft || 0;
      }
      return e && (e.scrollX || e.pageXOffset || e.document.documentElement.scrollLeft) || 0;
    }
  } ]), t;
}(), Wr = "$copy_autocapture";

function zr(e, t) {
  return t.length > e ? t.slice(0, e) + "..." : t;
}

var Vr, Gr = function() {
  function t(e) {
    L(this, t), q(this, "_initialized", !1), q(this, "_isDisabledServerSide", null), 
    q(this, "rageclicks", new Br), q(this, "_elementsChainAsString", !1), this.instance = e, 
    this._elementSelectors = null;
  }
  return N(t, [ {
    key: "config",
    get: function() {
      var e, t, n = b(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
      return n.url_allowlist = null === (e = n.url_allowlist) || void 0 === e ? void 0 : e.map((function(e) {
        return new RegExp(e);
      })), n.url_ignorelist = null === (t = n.url_ignorelist) || void 0 === t ? void 0 : t.map((function(e) {
        return new RegExp(e);
      })), n;
    }
  }, {
    key: "_addDomEventHandlers",
    value: function() {
      var t = this;
      if (this.isBrowserSupported()) {
        if (e && o) {
          var n = function(n) {
            n = n || (null == e ? void 0 : e.event);
            try {
              t._captureEvent(n);
            } catch (e) {
              C.error("Failed to capture event", e);
            }
          }, i = function(n) {
            n = n || (null == e ? void 0 : e.event), t._captureEvent(n, Wr);
          };
          oe(o, "submit", n, !1, !0), oe(o, "change", n, !1, !0), oe(o, "click", n, !1, !0), 
          this.config.capture_copied_text && (oe(o, "copy", i, !1, !0), oe(o, "cut", i, !1, !0));
        }
      } else C.info("Disabling Automatic Event Collection because this browser is not supported");
    }
  }, {
    key: "startIfEnabled",
    value: function() {
      this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0);
    }
  }, {
    key: "afterDecideResponse",
    value: function(e) {
      e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), 
      this.instance.persistence && this.instance.persistence.register(q({}, he, !!e.autocapture_opt_out)), 
      this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled();
    }
  }, {
    key: "setElementSelectors",
    value: function(e) {
      this._elementSelectors = e;
    }
  }, {
    key: "getElementSelectors",
    value: function(e) {
      var t, n = [];
      return null === (t = this._elementSelectors) || void 0 === t || t.forEach((function(t) {
        var i = null == o ? void 0 : o.querySelectorAll(t);
        null == i || i.forEach((function(i) {
          e === i && n.push(t);
        }));
      })), n;
    }
  }, {
    key: "isEnabled",
    get: function() {
      var e, t, n = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[he], i = this._isDisabledServerSide;
      if (x(i) && !P(n) && !this.instance.config.advanced_disable_decide) return !1;
      var r = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!n;
      return !!this.instance.config.autocapture && !r;
    }
  }, {
    key: "_previousElementSibling",
    value: function(e) {
      if (e.previousElementSibling) return e.previousElementSibling;
      var t = e;
      do {
        t = t.previousSibling;
      } while (t && !$n(t));
      return t;
    }
  }, {
    key: "_getAugmentPropertiesFromElement",
    value: function(e) {
      if (!qn(e)) return {};
      var t = {};
      return J(e.attributes, (function(e) {
        if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
          var n = e.name.replace("data-ph-capture-attribute-", ""), i = e.value;
          n && i && Gn(i) && (t[n] = i);
        }
      })), t;
    }
  }, {
    key: "_getPropertiesFromElement",
    value: function(e, t, n) {
      var i, r = e.tagName.toLowerCase(), s = {
        tag_name: r
      };
      Ln.indexOf(r) > -1 && !n && ("a" === r.toLowerCase() || "button" === r.toLowerCase() ? s.$el_text = zr(1024, Qn(e)) : s.$el_text = zr(1024, Tn(e)));
      var o = Pn(e);
      o.length > 0 && (s.classes = o.filter((function(e) {
        return "" !== e;
      })));
      var a = null === (i = this.config) || void 0 === i ? void 0 : i.element_attribute_ignorelist;
      J(e.attributes, (function(n) {
        var i;
        if ((!Bn(e) || -1 !== [ "name", "id", "class", "aria-label" ].indexOf(n.name)) && ((null == a || !a.includes(n.name)) && !t && Gn(n.value) && (i = n.name, 
        !S(i) || "_ngcontent" !== i.substring(0, 10) && "_nghost" !== i.substring(0, 7)))) {
          var r = n.value;
          "class" === n.name && (r = In(r).join(" ")), s["attr__" + n.name] = zr(1024, r);
        }
      }));
      for (var u = 1, l = 1, c = e; c = this._previousElementSibling(c); ) u++, c.tagName === e.tagName && l++;
      return s.nth_child = u, s.nth_of_type = l, s;
    }
  }, {
    key: "_getDefaultProperties",
    value: function(e) {
      return {
        $event_type: e,
        $ce_version: 1
      };
    }
  }, {
    key: "_captureEvent",
    value: function(t) {
      var n = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
      if (this.isEnabled) {
        var r, s = Cn(t);
        if (On(s) && (s = s.parentNode || null), "$autocapture" === i && "click" === t.type && t instanceof MouseEvent) this.instance.config.rageclick && null !== (r = this.rageclicks) && void 0 !== r && r.isRageClick(t.clientX, t.clientY, (new Date).getTime()) && this._captureEvent(t, "$rageclick");
        var o = i === Wr;
        if (s && Nn(s, t, this.config, o, o ? [ "copy", "cut" ] : void 0)) {
          for (var a, u, l = [ s ], c = s; c.parentNode && !Mn(c, "body"); ) An(c.parentNode) ? (l.push(c.parentNode.host), 
          c = c.parentNode.host) : (l.push(c.parentNode), c = c.parentNode);
          var d, h, f = [], v = {}, p = !1;
          if (J(l, (function(e) {
            var t = qn(e);
            "a" === e.tagName.toLowerCase() && (d = e.getAttribute("href"), d = t && Gn(d) && d), 
            X(Pn(e), "ph-no-capture") && (p = !0), f.push(n._getPropertiesFromElement(e, n.instance.config.mask_all_element_attributes, n.instance.config.mask_all_text));
            var i = n._getAugmentPropertiesFromElement(e);
            Y(v, i);
          })), this.instance.config.mask_all_text || ("a" === s.tagName.toLowerCase() || "button" === s.tagName.toLowerCase() ? f[0].$el_text = Qn(s) : f[0].$el_text = Tn(s)), 
          d) {
            var g, _;
            f[0].attr__href = d;
            var m = null === (g = gt(d)) || void 0 === g ? void 0 : g.host, y = null == e || null === (_ = e.location) || void 0 === _ ? void 0 : _.host;
            m && y && m !== y && (h = d);
          }
          if (p) return !1;
          var b = Y(this._getDefaultProperties(t.type), this._elementsChainAsString ? {
            $elements_chain: Yn(f)
          } : {
            $elements: f
          }, null !== (a = f[0]) && void 0 !== a && a.$el_text ? {
            $el_text: null === (u = f[0]) || void 0 === u ? void 0 : u.$el_text
          } : {}, h && "click" === t.type ? {
            $external_click_url: h
          } : {}, v), w = this.getElementSelectors(s);
          if (w && w.length > 0 && (b.$element_selectors = w), i === Wr) {
            var k, S = Rn(null == e || null === (k = e.getSelection()) || void 0 === k ? void 0 : k.toString()), E = t.type || "clipboard";
            if (!S) return !1;
            b.$selected_content = S, b.$copy_type = E;
          }
          return this.instance.capture(i, b), !0;
        }
      }
    }
  }, {
    key: "isBrowserSupported",
    value: function() {
      return y(null == o ? void 0 : o.querySelectorAll);
    }
  } ]), t;
}(), Qr = function() {
  function e(t) {
    var n = this;
    L(this, e), q(this, "_restoreXHRPatch", void 0), q(this, "_restoreFetchPatch", void 0), 
    q(this, "_startCapturing", (function() {
      var e, t, i, r;
      k(n._restoreXHRPatch) && (null === (e = h.__PosthogExtensions__) || void 0 === e || null === (t = e.tracingHeadersPatchFns) || void 0 === t || t._patchXHR(n.instance.sessionManager));
      k(n._restoreFetchPatch) && (null === (i = h.__PosthogExtensions__) || void 0 === i || null === (r = i.tracingHeadersPatchFns) || void 0 === r || r._patchFetch(n.instance.sessionManager));
    })), this.instance = t;
  }
  return N(e, [ {
    key: "_loadScript",
    value: function(e) {
      var t, n, i;
      null !== (t = h.__PosthogExtensions__) && void 0 !== t && t.tracingHeadersPatchFns && e(), 
      null === (n = h.__PosthogExtensions__) || void 0 === n || null === (i = n.loadExternalDependency) || void 0 === i || i.call(n, this.instance, "tracing-headers", (function(t) {
        if (t) return C.error("[TRACING-HEADERS] failed to load script", t);
        e();
      }));
    }
  }, {
    key: "startIfEnabledOrStop",
    value: function() {
      var e, t;
      this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e = this._restoreXHRPatch) || void 0 === e || e.call(this), 
      null === (t = this._restoreFetchPatch) || void 0 === t || t.call(this), this._restoreXHRPatch = void 0, 
      this._restoreFetchPatch = void 0);
    }
  } ]), e;
}();

!function(e) {
  e[e.PENDING = -1] = "PENDING", e[e.DENIED = 0] = "DENIED", e[e.GRANTED = 1] = "GRANTED";
}(Vr || (Vr = {}));

var Jr = function() {
  function e(t) {
    L(this, e), this.instance = t;
  }
  return N(e, [ {
    key: "config",
    get: function() {
      return this.instance.config;
    }
  }, {
    key: "consent",
    get: function() {
      return this.getDnt() ? Vr.DENIED : this.storedConsent;
    }
  }, {
    key: "isOptedOut",
    value: function() {
      return this.consent === Vr.DENIED || this.consent === Vr.PENDING && this.config.opt_out_capturing_by_default;
    }
  }, {
    key: "isOptedIn",
    value: function() {
      return !this.isOptedOut();
    }
  }, {
    key: "optInOut",
    value: function(e) {
      this.storage.set(this.storageKey, e ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie);
    }
  }, {
    key: "reset",
    value: function() {
      this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie);
    }
  }, {
    key: "storageKey",
    get: function() {
      var e = this.instance.config, t = e.token;
      return (e.opt_out_capturing_cookie_prefix || "__ph_opt_in_out_") + t;
    }
  }, {
    key: "storedConsent",
    get: function() {
      var e = this.storage.get(this.storageKey);
      return "1" === e ? Vr.GRANTED : "0" === e ? Vr.DENIED : Vr.PENDING;
    }
  }, {
    key: "storage",
    get: function() {
      if (!this._storage) {
        var e = this.config.opt_out_capturing_persistence_type;
        this._storage = "localStorage" === e ? ut : ot;
        var t = "localStorage" === e ? ot : ut;
        t.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t.get(this.storageKey)), 
        t.remove(this.storageKey, this.config.cross_subdomain_cookie));
      }
      return this._storage;
    }
  }, {
    key: "getDnt",
    value: function() {
      return !!this.config.respect_dnt && !!ae([ null == s ? void 0 : s.doNotTrack, null == s ? void 0 : s.msDoNotTrack, h.doNotTrack ], (function(e) {
        return X([ !0, 1, "1", "yes" ], e);
      }));
    }
  } ]), e;
}(), Yr = "[Exception Autocapture]", Xr = function() {
  function t(n) {
    var i, r = this;
    L(this, t), q(this, "originalOnUnhandledRejectionHandler", void 0), q(this, "startCapturing", (function() {
      var t, n, i, s;
      if (e && r.isEnabled && !r.hasHandlers && !r.isCapturing) {
        var o = null === (t = h.__PosthogExtensions__) || void 0 === t || null === (n = t.errorWrappingFunctions) || void 0 === n ? void 0 : n.wrapOnError, a = null === (i = h.__PosthogExtensions__) || void 0 === i || null === (s = i.errorWrappingFunctions) || void 0 === s ? void 0 : s.wrapUnhandledRejection;
        if (o && a) try {
          r.unwrapOnError = o(r.captureException.bind(r)), r.unwrapUnhandledRejection = a(r.captureException.bind(r));
        } catch (e) {
          C.error(Yr + " failed to start", e), r.stopCapturing();
        } else C.error(Yr + " failed to load error wrapping functions - cannot start");
      }
    })), this.instance = n, this.remoteEnabled = !(null === (i = this.instance.persistence) || void 0 === i || !i.props[ve]), 
    this.startIfEnabled();
  }
  return N(t, [ {
    key: "isEnabled",
    get: function() {
      var e;
      return null !== (e = this.remoteEnabled) && void 0 !== e && e;
    }
  }, {
    key: "isCapturing",
    get: function() {
      var t;
      return !(null == e || null === (t = e.onerror) || void 0 === t || !t.__POSTHOG_INSTRUMENTED__);
    }
  }, {
    key: "hasHandlers",
    get: function() {
      return this.originalOnUnhandledRejectionHandler || this.unwrapOnError;
    }
  }, {
    key: "startIfEnabled",
    value: function() {
      this.isEnabled && !this.isCapturing && (C.info(Yr + " enabled, starting..."), this.loadScript(this.startCapturing));
    }
  }, {
    key: "loadScript",
    value: function(e) {
      var t, n;
      this.hasHandlers && e(), null === (t = h.__PosthogExtensions__) || void 0 === t || null === (n = t.loadExternalDependency) || void 0 === n || n.call(t, this.instance, "exception-autocapture", (function(t) {
        if (t) return C.error(Yr + " failed to load script", t);
        e();
      }));
    }
  }, {
    key: "stopCapturing",
    value: function() {
      var e, t;
      null === (e = this.unwrapOnError) || void 0 === e || e.call(this), null === (t = this.unwrapUnhandledRejection) || void 0 === t || t.call(this);
    }
  }, {
    key: "afterDecideResponse",
    value: function(e) {
      var t = e.autocaptureExceptions;
      this.remoteEnabled = !!t || !1, this.instance.persistence && this.instance.persistence.register(q({}, ve, this.remoteEnabled)), 
      this.startIfEnabled();
    }
  }, {
    key: "captureException",
    value: function(e) {
      var t = this.instance.requestRouter.endpointFor("ui");
      e.$exception_personURL = "".concat(t, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id()), 
      this.instance.exceptions.sendExceptionEvent(e);
    }
  } ]), t;
}(), Kr = 9e5, Zr = "[Web Vitals]", es = function() {
  function t(e) {
    var n, i = this;
    L(this, t), q(this, "_enabledServerSide", !1), q(this, "_initialized", !1), q(this, "buffer", {
      url: void 0,
      metrics: [],
      firstMetricTimestamp: void 0
    }), q(this, "_flushToCapture", (function() {
      clearTimeout(i._delayedFlushTimer), 0 !== i.buffer.metrics.length && (i.instance.capture("$web_vitals", i.buffer.metrics.reduce((function(e, t) {
        var n;
        return O(O({}, e), {}, (q(n = {}, "$web_vitals_".concat(t.name, "_event"), O({}, t)), 
        q(n, "$web_vitals_".concat(t.name, "_value"), t.value), n));
      }), {})), i.buffer = {
        url: void 0,
        metrics: [],
        firstMetricTimestamp: void 0
      });
    })), q(this, "_addToBuffer", (function(e) {
      var t, n = null === (t = i.instance.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0);
      if (k(n)) C.error(Zr + "Could not read session ID. Dropping metrics!"); else {
        i.buffer = i.buffer || {
          url: void 0,
          metrics: [],
          firstMetricTimestamp: void 0
        };
        var r = i._currentURL();
        if (!k(r)) if (I(null == e ? void 0 : e.name) || I(null == e ? void 0 : e.value)) C.error(Zr + "Invalid metric received", e); else if (i._maxAllowedValue && e.value >= i._maxAllowedValue) C.error(Zr + "Ignoring metric with value >= " + i._maxAllowedValue, e); else i.buffer.url !== r && (i._flushToCapture(), 
        i._delayedFlushTimer = setTimeout(i._flushToCapture, 8e3)), k(i.buffer.url) && (i.buffer.url = r), 
        i.buffer.firstMetricTimestamp = k(i.buffer.firstMetricTimestamp) ? Date.now() : i.buffer.firstMetricTimestamp, 
        i.buffer.metrics.push(O(O({}, e), {}, {
          $current_url: r,
          $session_id: n.sessionId,
          $window_id: n.windowId,
          timestamp: Date.now()
        })), i.buffer.metrics.length === i.allowedMetrics.length && i._flushToCapture();
      }
    })), q(this, "_startCapturing", (function() {
      var e, t, n, r, s = h.__PosthogExtensions__;
      if (!k(s) && !k(s.postHogWebVitalsCallbacks)) {
        var o = s.postHogWebVitalsCallbacks;
        e = o.onLCP, t = o.onCLS, n = o.onFCP, r = o.onINP;
      }
      e && t && n && r ? (i.allowedMetrics.indexOf("LCP") > -1 && e(i._addToBuffer.bind(i)), 
      i.allowedMetrics.indexOf("CLS") > -1 && t(i._addToBuffer.bind(i)), i.allowedMetrics.indexOf("FCP") > -1 && n(i._addToBuffer.bind(i)), 
      i.allowedMetrics.indexOf("INP") > -1 && r(i._addToBuffer.bind(i)), i._initialized = !0) : C.error(Zr + "web vitals callbacks not loaded - not starting");
    })), this.instance = e, this._enabledServerSide = !(null === (n = this.instance.persistence) || void 0 === n || !n.props[ge]), 
    this.startIfEnabled();
  }
  return N(t, [ {
    key: "allowedMetrics",
    get: function() {
      var e, t, n = b(this.instance.config.capture_performance) ? null === (e = this.instance.config.capture_performance) || void 0 === e ? void 0 : e.web_vitals_allowed_metrics : void 0;
      return k(n) ? (null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.props[_e]) || [ "CLS", "FCP", "INP", "LCP" ] : n;
    }
  }, {
    key: "_maxAllowedValue",
    get: function() {
      var e = b(this.instance.config.capture_performance) && F(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : Kr;
      return 0 < e && e <= 6e4 ? Kr : e;
    }
  }, {
    key: "isEnabled",
    get: function() {
      var e = b(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
      return P(e) ? e : this._enabledServerSide;
    }
  }, {
    key: "startIfEnabled",
    value: function() {
      this.isEnabled && !this._initialized && (C.info(Zr + " enabled, starting..."), this.loadScript(this._startCapturing));
    }
  }, {
    key: "afterDecideResponse",
    value: function(e) {
      var t = b(e.capturePerformance) && !!e.capturePerformance.web_vitals, n = b(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
      this.instance.persistence && (this.instance.persistence.register(q({}, ge, t)), 
      this.instance.persistence.register(q({}, _e, n))), this._enabledServerSide = t, 
      this.startIfEnabled();
    }
  }, {
    key: "loadScript",
    value: function(e) {
      var t, n, i;
      null !== (t = h.__PosthogExtensions__) && void 0 !== t && t.postHogWebVitalsCallbacks && e(), 
      null === (n = h.__PosthogExtensions__) || void 0 === n || null === (i = n.loadExternalDependency) || void 0 === i || i.call(n, this.instance, "web-vitals", (function(t) {
        t ? C.error(Zr + " failed to load script", t) : e();
      }));
    }
  }, {
    key: "_currentURL",
    value: function() {
      var t = e ? e.location.href : void 0;
      return t || C.error(Zr + "Could not determine current URL"), t;
    }
  } ]), t;
}(), ts = {
  icontains: function(t, n) {
    return !!e && n.href.toLowerCase().indexOf(t.toLowerCase()) > -1;
  },
  not_icontains: function(t, n) {
    return !!e && -1 === n.href.toLowerCase().indexOf(t.toLowerCase());
  },
  regex: function(t, n) {
    return !!e && _t(n.href, t);
  },
  not_regex: function(t, n) {
    return !!e && !_t(n.href, t);
  },
  exact: function(e, t) {
    return t.href === e;
  },
  is_not: function(e, t) {
    return t.href !== e;
  }
}, ns = function() {
  function t(e) {
    var n = this;
    L(this, t), q(this, "getWebExperimentsAndEvaluateDisplayLogic", (function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      n.getWebExperiments((function(e) {
        t.logInfo("retrieved web experiments from the server"), n._flagToExperiments = new Map, 
        e.forEach((function(e) {
          if (e.feature_flag_key && n._featureFlags && n._featureFlags[e.feature_flag_key]) {
            var i;
            if (n._flagToExperiments) t.logInfo("setting flag key ", e.feature_flag_key, " to web experiment ", e), 
            null === (i = n._flagToExperiments) || void 0 === i || i.set(e.feature_flag_key, e);
            var r = n._featureFlags[e.feature_flag_key];
            r && e.variants[r] && n.applyTransforms(e.name, r, e.variants[r].transforms);
          } else if (e.variants) for (var s in e.variants) {
            var o = e.variants[s];
            t.matchesTestVariant(o) && n.applyTransforms(e.name, s, o.transforms);
          }
        }));
      }), e);
    })), this.instance = e;
    this.instance.onFeatureFlags && this.instance.onFeatureFlags((function(e) {
      n.applyFeatureFlagChanges(e);
    })), this._flagToExperiments = new Map;
  }
  return N(t, [ {
    key: "applyFeatureFlagChanges",
    value: function(e) {
      var n = this;
      I(this._flagToExperiments) || this.instance.config.disable_web_experiments || (t.logInfo("applying feature flags", e), 
      e.forEach((function(e) {
        var t;
        if (n._flagToExperiments && null !== (t = n._flagToExperiments) && void 0 !== t && t.has(e)) {
          var i, r = n.instance.getFeatureFlag(e), s = null === (i = n._flagToExperiments) || void 0 === i ? void 0 : i.get(e);
          r && null != s && s.variants[r] && n.applyTransforms(s.name, r, s.variants[r].transforms);
        }
      })));
    }
  }, {
    key: "afterDecideResponse",
    value: function(e) {
      this._is_bot() ? t.logInfo("Refusing to render web experiment since the viewer is a likely bot") : (this._featureFlags = e.featureFlags, 
      this.loadIfEnabled(), this.previewWebExperiment());
    }
  }, {
    key: "previewWebExperiment",
    value: function() {
      var e = this, n = t.getWindowLocation();
      if (null != n && n.search) {
        var i = yt(null == n ? void 0 : n.search, "__experiment_id"), r = yt(null == n ? void 0 : n.search, "__experiment_variant");
        i && r && (t.logInfo("previewing web experiments ".concat(i, " && ").concat(r)), 
        this.getWebExperiments((function(t) {
          e.showPreviewWebExperiment(parseInt(i), r, t);
        }), !1, !0));
      }
    }
  }, {
    key: "loadIfEnabled",
    value: function() {
      this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
    }
  }, {
    key: "getWebExperiments",
    value: function(e, t, n) {
      if (this.instance.config.disable_web_experiments && !n) return e([]);
      var i = this.instance.get_property("$web_experiments");
      if (i && !t) return e(i);
      this.instance._send_request({
        url: this.instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=".concat(this.instance.config.token)),
        method: "GET",
        transport: "XHR",
        callback: function(t) {
          if (200 !== t.statusCode || !t.json) return e([]);
          var n = t.json.experiments || [];
          return e(n);
        }
      });
    }
  }, {
    key: "showPreviewWebExperiment",
    value: function(e, n, i) {
      var r = i.filter((function(t) {
        return t.id === e;
      }));
      r && r.length > 0 && (t.logInfo("Previewing web experiment [".concat(r[0].name, "] with variant [").concat(n, "]")), 
      this.applyTransforms(r[0].name, n, r[0].variants[n].transforms, !0));
    }
  }, {
    key: "applyTransforms",
    value: function(e, n, i, r) {
      var s, o = this;
      this._is_bot() ? t.logInfo("Refusing to render web experiment since the viewer is a likely bot") : "control" !== n ? i.forEach((function(i) {
        if (i.selector) {
          var s;
          t.logInfo("applying transform of variant ".concat(n, " for experiment ").concat(e, " "), i);
          var a, u = 0, l = null === (s = document) || void 0 === s ? void 0 : s.querySelectorAll(i.selector);
          if (null == l || l.forEach((function(e) {
            var t = e;
            u += 1, i.attributes && i.attributes.forEach((function(e) {
              switch (e.name) {
               case "text":
                t.innerText = e.value;
                break;

               case "html":
                t.innerHTML = e.value;
                break;

               case "cssClass":
                t.className = e.value;
                break;

               default:
                t.setAttribute(e.name, e.value);
              }
            })), i.text && (t.innerText = i.text), i.html && (t.parentElement ? t.parentElement.innerHTML = i.html : t.innerHTML = i.html), 
            i.css && t.setAttribute("style", i.css);
          })), o.instance && o.instance.capture) o.instance.capture("$web_experiment_applied", {
            $web_experiment_name: e,
            $web_experiment_variant: n,
            $web_experiment_preview: r,
            $web_experiment_document_url: null === (a = t.getWindowLocation()) || void 0 === a ? void 0 : a.href,
            $web_experiment_elements_modified: u
          });
        }
      })) : (t.logInfo("Control variants leave the page unmodified."), this.instance && this.instance.capture && this.instance.capture("$web_experiment_applied", {
        $web_experiment_name: e,
        $web_experiment_preview: r,
        $web_experiment_variant: n,
        $web_experiment_document_url: null === (s = t.getWindowLocation()) || void 0 === s ? void 0 : s.href,
        $web_experiment_elements_modified: 0
      }));
    }
  }, {
    key: "_is_bot",
    value: function() {
      return s && this.instance ? qr(s, this.instance.config.custom_blocked_useragents) : void 0;
    }
  } ], [ {
    key: "matchesTestVariant",
    value: function(e) {
      return !I(e.conditions) && (t.matchUrlConditions(e) && t.matchUTMConditions(e));
    }
  }, {
    key: "matchUrlConditions",
    value: function(e) {
      var n;
      if (I(e.conditions) || I(null === (n = e.conditions) || void 0 === n ? void 0 : n.url)) return !0;
      var i, r, s, o = t.getWindowLocation();
      return !!o && (null === (i = e.conditions) || void 0 === i || !i.url || ts[null !== (r = null === (s = e.conditions) || void 0 === s ? void 0 : s.urlMatchType) && void 0 !== r ? r : "icontains"](e.conditions.url, o));
    }
  }, {
    key: "getWindowLocation",
    value: function() {
      return null == e ? void 0 : e.location;
    }
  }, {
    key: "matchUTMConditions",
    value: function(e) {
      var t;
      if (I(e.conditions) || I(null === (t = e.conditions) || void 0 === t ? void 0 : t.utm)) return !0;
      var n = yn.campaignParams();
      if (n.utm_source) {
        var i, r, s, o, a, u, l, c, d, h, f, v, p, g, _, m, y = null === (i = e.conditions) || void 0 === i || null === (r = i.utm) || void 0 === r || !r.utm_campaign || (null === (s = e.conditions) || void 0 === s || null === (o = s.utm) || void 0 === o ? void 0 : o.utm_campaign) == n.utm_campaign, b = null === (a = e.conditions) || void 0 === a || null === (u = a.utm) || void 0 === u || !u.utm_source || (null === (l = e.conditions) || void 0 === l || null === (c = l.utm) || void 0 === c ? void 0 : c.utm_source) == n.utm_source, w = null === (d = e.conditions) || void 0 === d || null === (h = d.utm) || void 0 === h || !h.utm_medium || (null === (f = e.conditions) || void 0 === f || null === (v = f.utm) || void 0 === v ? void 0 : v.utm_medium) == n.utm_medium, k = null === (p = e.conditions) || void 0 === p || null === (g = p.utm) || void 0 === g || !g.utm_term || (null === (_ = e.conditions) || void 0 === _ || null === (m = _.utm) || void 0 === m ? void 0 : m.utm_term) == n.utm_term;
        return y && w && k && b;
      }
      return !1;
    }
  }, {
    key: "logInfo",
    value: function(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
      C.info("[WebExperiments] ".concat(e), n);
    }
  } ]), t;
}(), is = "/e/", rs = function() {
  function e(t) {
    var n;
    L(this, e), this.instance = t, this._endpointSuffix = (null === (n = this.instance.persistence) || void 0 === n ? void 0 : n.props[pe]) || is;
  }
  return N(e, [ {
    key: "endpoint",
    get: function() {
      return this.instance.requestRouter.endpointFor("api", this._endpointSuffix);
    }
  }, {
    key: "afterDecideResponse",
    value: function(e) {
      var t = e.autocaptureExceptions;
      this._endpointSuffix = b(t) && t.endpoint || is, this.instance.persistence && this.instance.persistence.register(q({}, pe, this._endpointSuffix));
    }
  }, {
    key: "sendExceptionEvent",
    value: function(e) {
      this.instance.capture("$exception", e, {
        _noTruncate: !0,
        _batchKey: "exceptionEvent",
        _url: this.endpoint
      });
    }
  } ]), e;
}(), ss = {}, os = function() {}, as = "posthog", us = !ar && -1 === (null == d ? void 0 : d.indexOf("MSIE")) && -1 === (null == d ? void 0 : d.indexOf("Mozilla")), ls = function() {
  var t, n, i;
  return {
    api_host: "https://us.i.posthog.com",
    ui_host: null,
    token: "",
    autocapture: !0,
    rageclick: !0,
    cross_subdomain_cookie: (n = null == o ? void 0 : o.location, i = null == n ? void 0 : n.hostname, 
    !!S(i) && "herokuapp.com" !== i.split(".").slice(-2).join(".")),
    persistence: "localStorage+cookie",
    persistence_name: "",
    loaded: os,
    store_google: !0,
    custom_campaign_params: [],
    custom_blocked_useragents: [],
    save_referrer: !0,
    capture_pageview: !0,
    capture_pageleave: "if_capture_pageview",
    debug: a && S(null == a ? void 0 : a.search) && -1 !== a.search.indexOf("__posthog_debug=true") || !1,
    verbose: !1,
    cookie_expiration: 365,
    upgrade: !1,
    disable_session_recording: !1,
    disable_persistence: !1,
    disable_web_experiments: !0,
    disable_surveys: !1,
    enable_recording_console_log: void 0,
    secure_cookie: "https:" === (null == e || null === (t = e.location) || void 0 === t ? void 0 : t.protocol),
    ip: !0,
    opt_out_capturing_by_default: !1,
    opt_out_persistence_by_default: !1,
    opt_out_useragent_filter: !1,
    opt_out_capturing_persistence_type: "localStorage",
    opt_out_capturing_cookie_prefix: null,
    opt_in_site_apps: !1,
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
      C.error(t);
    },
    get_device_id: function(e) {
      return e;
    },
    _onCapture: os,
    capture_performance: void 0,
    name: "posthog",
    bootstrap: {},
    disable_compression: !1,
    session_idle_timeout_seconds: 1800,
    person_profiles: "always",
    __add_tracing_headers: !1
  };
}, cs = function(e) {
  var t = {};
  k(e.process_person) || (t.person_profiles = e.process_person), k(e.xhr_headers) || (t.request_headers = e.xhr_headers), 
  k(e.cookie_name) || (t.persistence_name = e.cookie_name), k(e.disable_cookie) || (t.disable_persistence = e.disable_cookie);
  var n = Y({}, t, e);
  return m(e.property_blacklist) && (k(e.property_denylist) ? n.property_denylist = e.property_blacklist : m(e.property_denylist) ? n.property_denylist = [].concat(U(e.property_blacklist), U(e.property_denylist)) : C.error("Invalid value for property_denylist config: " + e.property_denylist)), 
  n;
}, ds = function() {
  function e() {
    L(this, e), q(this, "__forceAllowLocalhost", !1);
  }
  return N(e, [ {
    key: "_forceAllowLocalhost",
    get: function() {
      return this.__forceAllowLocalhost;
    },
    set: function(e) {
      C.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), 
      this.__forceAllowLocalhost = e;
    }
  } ]), e;
}(), hs = function() {
  function t() {
    var e = this;
    L(this, t), q(this, "webPerformance", new ds), q(this, "version", f.LIB_VERSION), 
    q(this, "_internalEventEmitter", new Pr), this.config = ls(), this.decideEndpointWasHit = !1, 
    this.SentryIntegration = wr, this.sentryIntegration = function(t) {
      return function(e, t) {
        var n = br(e, t);
        return {
          name: yr,
          processEvent: function(e) {
            return n(e);
          }
        };
      }(e, t);
    }, this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", 
    this._initialPageviewCaptured = !1, this.featureFlags = new Ve(this), this.toolbar = new sr(this), 
    this.scrollManager = new jr(this), this.pageViewManager = new Ir(this), this.surveys = new Mr(this), 
    this.experiments = new ns(this), this.exceptions = new rs(this), this.rateLimiter = new Or(this), 
    this.requestRouter = new mr(this), this.consent = new Jr(this), this.people = {
      set: function(t, n, i) {
        var r = S(t) ? q({}, t, n) : t;
        e.setPersonProperties(r), null == i || i({});
      },
      set_once: function(t, n, i) {
        var r = S(t) ? q({}, t, n) : t;
        e.setPersonProperties(void 0, r), null == i || i({});
      }
    }, this.on("eventCaptured", (function(e) {
      return C.info("send", e);
    }));
  }
  return N(t, [ {
    key: "init",
    value: function(e, n, i) {
      if (i && i !== as) {
        var r, s = null !== (r = ss[i]) && void 0 !== r ? r : new t;
        return s._init(e, n, i), ss[i] = s, ss[as][i] = s, s;
      }
      return this._init(e, n, i);
    }
  }, {
    key: "_init",
    value: function(t) {
      var n, i, r = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0;
      if (k(t) || E(t)) return C.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), 
      this;
      if (this.__loaded) return C.warn("You have already initialized PostHog! Re-initializing is a no-op"), 
      this;
      this.__loaded = !0, this.config = {}, this._triggered_notifs = [], this.set_config(Y({}, ls(), cs(s), {
        name: o,
        token: t
      })), this.config.on_xhr_error && C.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"), 
      this.compression = s.disable_compression ? void 0 : re.GZipJS, this.persistence = new wn(this.config), 
      this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new wn(O(O({}, this.config), {}, {
        persistence: "sessionStorage"
      }));
      var a = O({}, this.persistence.props), u = O({}, this.sessionPersistence.props);
      if (this._requestQueue = new or((function(e) {
        return r._send_retriable_request(e);
      })), this._retryQueue = new vr(this), this.__request_queue = [], this.sessionManager = new gr(this.config, this.persistence), 
      this.sessionPropsManager = new Lr(this.sessionManager, this.persistence), new Qr(this).startIfEnabledOrStop(), 
      this.sessionRecording = new tr(this), this.sessionRecording.startIfEnabledOrStop(), 
      this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), 
      this.autocapture = new Gr(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), 
      this.heatmaps = new Ur(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new es(this), 
      this.exceptionObserver = new Xr(this), this.exceptionObserver.startIfEnabled(), 
      f.DEBUG = f.DEBUG || this.config.debug, f.DEBUG && C.info("Starting in debug mode", {
        this: this,
        config: s,
        thisC: O({}, this.config),
        p: a,
        s: u
      }), this._sync_opt_out_with_persistence(), void 0 !== (null === (n = s.bootstrap) || void 0 === n ? void 0 : n.distinctID)) {
        var l, c, d = this.config.get_device_id(Ze()), h = null !== (l = s.bootstrap) && void 0 !== l && l.isIdentifiedID ? d : s.bootstrap.distinctID;
        this.persistence.set_property(Me, null !== (c = s.bootstrap) && void 0 !== c && c.isIdentifiedID ? "identified" : "anonymous"), 
        this.register({
          distinct_id: s.bootstrap.distinctID,
          $device_id: h
        });
      }
      if (this._hasBootstrappedFeatureFlags()) {
        var v, p, g = Object.keys((null === (v = s.bootstrap) || void 0 === v ? void 0 : v.featureFlags) || {}).filter((function(e) {
          var t, n;
          return !(null === (t = s.bootstrap) || void 0 === t || null === (n = t.featureFlags) || void 0 === n || !n[e]);
        })).reduce((function(e, t) {
          var n, i;
          return e[t] = (null === (n = s.bootstrap) || void 0 === n || null === (i = n.featureFlags) || void 0 === i ? void 0 : i[t]) || !1, 
          e;
        }), {}), _ = Object.keys((null === (p = s.bootstrap) || void 0 === p ? void 0 : p.featureFlagPayloads) || {}).filter((function(e) {
          return g[e];
        })).reduce((function(e, t) {
          var n, i, r, o;
          null !== (n = s.bootstrap) && void 0 !== n && null !== (i = n.featureFlagPayloads) && void 0 !== i && i[t] && (e[t] = null === (r = s.bootstrap) || void 0 === r || null === (o = r.featureFlagPayloads) || void 0 === o ? void 0 : o[t]);
          return e;
        }), {});
        this.featureFlags.receivedFeatureFlags({
          featureFlags: g,
          featureFlagPayloads: _
        });
      }
      if (!this.get_distinct_id()) {
        var m = this.config.get_device_id(Ze());
        this.register_once({
          distinct_id: m,
          $device_id: m
        }, ""), this.persistence.set_property(Me, "anonymous");
      }
      return null == e || null === (i = e.addEventListener) || void 0 === i || i.call(e, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), 
      this.toolbar.maybeLoadToolbar(), s.segment ? kr(this, (function() {
        return r._loaded();
      })) : this._loaded(), y(this.config._onCapture) && this.on("eventCaptured", (function(e) {
        return r.config._onCapture(e.event, e);
      })), this;
    }
  }, {
    key: "_afterDecideResponse",
    value: function(e) {
      var t, n, i, r, s, o, a, u, l;
      this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = X(e.supportedCompression, re.GZipJS) ? re.GZipJS : X(e.supportedCompression, re.Base64) ? re.Base64 : void 0), 
      null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), 
      null === (n = this.sessionRecording) || void 0 === n || n.afterDecideResponse(e), 
      null === (i = this.autocapture) || void 0 === i || i.afterDecideResponse(e), null === (r = this.heatmaps) || void 0 === r || r.afterDecideResponse(e), 
      null === (s = this.experiments) || void 0 === s || s.afterDecideResponse(e), null === (o = this.surveys) || void 0 === o || o.afterDecideResponse(e), 
      null === (a = this.webVitalsAutocapture) || void 0 === a || a.afterDecideResponse(e), 
      null === (u = this.exceptions) || void 0 === u || u.afterDecideResponse(e), null === (l = this.exceptionObserver) || void 0 === l || l.afterDecideResponse(e);
    }
  }, {
    key: "_loaded",
    value: function() {
      var e = this, t = this.config.advanced_disable_decide;
      t || this.featureFlags.setReloadingPaused(!0);
      try {
        this.config.loaded(this);
      } catch (e) {
        C.critical("`loaded` function failed", e);
      }
      this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout((function() {
        e.consent.isOptedIn() && e._captureInitialPageview();
      }), 1), t || (new nr(this).call(), this.featureFlags.resetRequestQueue());
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
      this.has_opted_out_capturing() || Q(this.__request_queue, (function(t) {
        return e._send_retriable_request(t);
      })), this.__request_queue = [], this._start_queue_if_opted_in();
    }
  }, {
    key: "_handle_unload",
    value: function() {
      var e, t;
      this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), 
      null === (e = this._requestQueue) || void 0 === e || e.unload(), null === (t = this._retryQueue) || void 0 === t || t.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, {
        transport: "sendBeacon"
      });
    }
  }, {
    key: "_send_request",
    value: function(e) {
      var t = this;
      this.__loaded && (us ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, 
      e.url = lr(e.url, {
        ip: this.config.ip ? 1 : 0
      }), e.headers = O({}, this.config.request_headers), e.compression = "best-available" === e.compression ? this.compression : e.compression, 
      function(e) {
        var t, n, i, r = O({}, e);
        r.timeout = r.timeout || 6e4, r.url = lr(r.url, {
          _: (new Date).getTime().toString(),
          ver: f.LIB_VERSION,
          compression: r.compression
        });
        var s = null !== (t = r.transport) && void 0 !== t ? t : "XHR", o = null !== (n = null === (i = ae(dr, (function(e) {
          return e.transport === s;
        }))) || void 0 === i ? void 0 : i.method) && void 0 !== n ? n : dr[0].method;
        if (!o) throw new Error("No available transport method");
        o(r);
      }(O(O({}, e), {}, {
        callback: function(n) {
          var i, r, s;
          (t.rateLimiter.checkForLimiting(n), n.statusCode >= 400) && (null === (r = (s = t.config).on_request_error) || void 0 === r || r.call(s, n));
          null === (i = e.callback) || void 0 === i || i.call(e, n);
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
      Q(e, (function(e) {
        e && (t = e[0], m(t) ? s.push(e) : y(e) ? e.call(n) : m(e) && "alias" === t ? i.push(e) : m(e) && -1 !== t.indexOf("capture") && y(n[t]) ? s.push(e) : r.push(e));
      }));
      var o = function(e, t) {
        Q(e, (function(e) {
          if (m(e[0])) {
            var n = t;
            J(e, (function(e) {
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
    value: function(e, t, n) {
      var i;
      if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
        if (!this.consent.isOptedOut()) if (!k(e) && S(e)) {
          if (this.config.opt_out_useragent_filter || !this._is_bot()) {
            var r = null != n && n.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
            if (null == r || !r.isRateLimited) {
              this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), 
              this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.store_google || this.config.save_referrer) && this.persistence.set_initial_person_info();
              var s = new Date, o = (null == n ? void 0 : n.timestamp) || s, a = {
                uuid: Ze(),
                event: e,
                properties: this._calculate_event_properties(e, t || {}, o)
              };
              r && (a.properties.$lib_rate_limit_remaining_tokens = r.remainingTokens), (null == n ? void 0 : n.$set) && (a.$set = null == n ? void 0 : n.$set);
              var u = this._calculate_set_once_properties(null == n ? void 0 : n.$set_once);
              u && (a.$set_once = u), (a = ie(a, null != n && n._noTruncate ? null : this.config.properties_string_max_length)).timestamp = o, 
              k(null == n ? void 0 : n.timestamp) || (a.properties.$event_time_override_provided = !0, 
              a.properties.$event_time_override_system_time = s);
              var l = O(O({}, a.properties.$set), a.$set);
              w(l) || this.setPersonPropertiesForFlags(l), this._internalEventEmitter.emit("eventCaptured", a);
              var c = {
                method: "POST",
                url: null !== (i = null == n ? void 0 : n._url) && void 0 !== i ? i : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                data: a,
                compression: "best-available",
                batchKey: null == n ? void 0 : n._batchKey
              };
              return !this.config.request_batching || n && (null == n || !n._batchKey) || null != n && n.send_instantly ? this._send_retriable_request(c) : this._requestQueue.enqueue(c), 
              a;
            }
            C.critical("This capture call is ignored due to client rate limiting.");
          }
        } else C.error("No event name provided to posthog.capture");
      } else C.uninitializedWarning("posthog.capture");
    }
  }, {
    key: "_addCaptureHook",
    value: function(e) {
      return this.on("eventCaptured", (function(t) {
        return e(t.event, t);
      }));
    }
  }, {
    key: "_calculate_event_properties",
    value: function(e, t, n) {
      if (n = n || new Date, !this.persistence || !this.sessionPersistence) return t;
      var i = this.persistence.remove_event_timer(e), r = O({}, t);
      if (r.token = this.config.token, "$snapshot" === e) {
        var s = O(O({}, this.persistence.properties()), this.sessionPersistence.properties());
        return r.distinct_id = s.distinct_id, (!S(r.distinct_id) && !F(r.distinct_id) || E(r.distinct_id)) && C.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), 
        r;
      }
      var a = yn.properties();
      if (this.sessionManager) {
        var u = this.sessionManager.checkAndGetSessionAndWindowId(), l = u.sessionId, c = u.windowId;
        r.$session_id = l, r.$window_id = c;
      }
      if (this.requestRouter.region === fr.CUSTOM && (r.$lib_custom_api_host = this.config.api_host), 
      this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e || "$pageleave" === e || "$autocapture" === e)) {
        var h = this.sessionPropsManager.getSessionProps();
        r = Y(r, h);
      }
      if (!this.config.disable_scroll_properties) {
        var f = {};
        "$pageview" === e ? f = this.pageViewManager.doPageView(n) : "$pageleave" === e && (f = this.pageViewManager.doPageLeave(n)), 
        r = Y(r, f);
      }
      if ("$pageview" === e && o && (r.title = o.title), !k(i)) {
        var v = n.getTime() - i;
        r.$duration = parseFloat((v / 1e3).toFixed(3));
      }
      d && this.config.opt_out_useragent_filter && (r.$browser_type = this._is_bot() ? "bot" : "browser"), 
      (r = Y({}, a, this.persistence.properties(), this.sessionPersistence.properties(), r)).$is_identified = this._isIdentified(), 
      m(this.config.property_denylist) ? J(this.config.property_denylist, (function(e) {
        delete r[e];
      })) : C.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
      var p = this.config.sanitize_properties;
      return p && (r = p(r, e)), r.$process_person_profile = this._hasPersonProcessing(), 
      r;
    }
  }, {
    key: "_calculate_set_once_properties",
    value: function(e) {
      if (!this.persistence || !this._hasPersonProcessing()) return e;
      var t = Y({}, this.persistence.get_initial_props(), e || {});
      return w(t) ? void 0 : t;
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
      this.register(q({}, e, t));
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
    key: "on",
    value: function(e, t) {
      return this._internalEventEmitter.on(e, t);
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
    key: "renderSurvey",
    value: function(e, t) {
      this.surveys.renderSurvey(e, t);
    }
  }, {
    key: "canRenderSurvey",
    value: function(e) {
      this.surveys.canRenderSurvey(e);
    }
  }, {
    key: "getNextSurveyStep",
    value: function(e, t, n) {
      return this.surveys.getNextSurveyStep(e, t, n);
    }
  }, {
    key: "identify",
    value: function(e, t, n) {
      if (!this.__loaded || !this.persistence) return C.uninitializedWarning("posthog.identify");
      if (F(e) && (e = e.toString(), C.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), 
      e) {
        if ([ "distinct_id", "distinctid" ].includes(e.toLowerCase())) C.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')); else if (this._requirePersonProcessing("posthog.identify")) {
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
          e !== i && e !== this.get_property(ce) && (this.unregister(ce), this.register({
            distinct_id: e
          }));
          var s = "anonymous" === (this.persistence.get_property(Me) || "anonymous");
          e !== i && s ? (this.persistence.set_property(Me, "identified"), this.setPersonPropertiesForFlags(t || {}, !1), 
          this.capture("$identify", {
            distinct_id: e,
            $anon_distinct_id: i
          }, {
            $set: t || {},
            $set_once: n || {}
          }), this.featureFlags.setAnonymousDistinctId(i)) : (t || n) && this.setPersonProperties(t, n), 
          e !== i && (this.reloadFeatureFlags(), this.unregister($e));
        }
      } else C.error("Unique user id has not been set in posthog.identify");
    }
  }, {
    key: "setPersonProperties",
    value: function(e, t) {
      (e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e || {}), 
      this.capture("$set", {
        $set: e || {},
        $set_once: t || {}
      }));
    }
  }, {
    key: "group",
    value: function(e, t, n) {
      if (e && t) {
        if (this._requirePersonProcessing("posthog.group")) {
          var i = this.getGroups();
          i[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({
            $groups: O(O({}, i), {}, q({}, e, t))
          }), n && (this.capture("$groupidentify", {
            $group_type: e,
            $group_key: t,
            $group_set: n
          }), this.setGroupPropertiesForFlags(q({}, e, n))), i[e] === t || n || this.reloadFeatureFlags();
        }
      } else C.error("posthog.group requires a group type and group key");
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
      this._requirePersonProcessing("posthog.setPersonPropertiesForFlags") && this.featureFlags.setPersonPropertiesForFlags(e, t);
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
      this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t);
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
      if (C.info("reset"), !this.__loaded) return C.uninitializedWarning("posthog.reset");
      var s = this.get_property("$device_id");
      this.consent.reset(), null === (t = this.persistence) || void 0 === t || t.clear(), 
      null === (n = this.sessionPersistence) || void 0 === n || n.clear(), null === (i = this.persistence) || void 0 === i || i.set_property(Me, "anonymous"), 
      null === (r = this.sessionManager) || void 0 === r || r.resetSessionId();
      var o = this.config.get_device_id(Ze());
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
      var t = this.sessionManager.checkAndGetSessionAndWindowId(!0), n = t.sessionId, i = t.sessionStartTimestamp, r = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(n));
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
      return e === this.get_property(le) ? (C.critical("Attempting to create alias for existing People user - aborting."), 
      -2) : this._requirePersonProcessing("posthog.alias") ? (k(t) && (t = this.get_distinct_id()), 
      e !== t ? (this._register_single(ce, e), this.capture("$create_alias", {
        alias: e,
        distinct_id: t
      })) : (C.warn("alias matches current distinct_id - skipping api call."), this.identify(e), 
      -1)) : void 0;
    }
  }, {
    key: "set_config",
    value: function(e) {
      var t, n, i, r, s = O({}, this.config);
      b(e) && (Y(this.config, cs(e)), null === (t = this.persistence) || void 0 === t || t.update_config(this.config, s), 
      this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new wn(O(O({}, this.config), {}, {
        persistence: "sessionStorage"
      })), ut.is_supported() && "true" === ut.get("ph_debug") && (this.config.debug = !0), 
      this.config.debug && (f.DEBUG = !0, C.info("set_config", {
        config: e,
        oldConfig: s,
        newConfig: O({}, this.config)
      })), null === (n = this.sessionRecording) || void 0 === n || n.startIfEnabledOrStop(), 
      null === (i = this.autocapture) || void 0 === i || i.startIfEnabled(), null === (r = this.heatmaps) || void 0 === r || r.startIfEnabled(), 
      this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence());
    }
  }, {
    key: "startSessionRecording",
    value: function(e) {
      var t, n = P(e) && e;
      if (n || null != e && e.sampling) {
        var i, r, s = null === (i = this.sessionManager) || void 0 === i ? void 0 : i.checkAndGetSessionAndWindowId();
        null === (r = this.persistence) || void 0 === r || r.register(q({}, xe, !0)), C.info("Session recording started with sampling override for session: ", null == s ? void 0 : s.sessionId);
      }
      (n || null != e && e.linked_flag) && (null === (t = this.sessionRecording) || void 0 === t || t.overrideLinkedFlag(), 
      C.info("Session recording started with linked_flags override"));
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
    key: "captureException",
    value: function(e, t) {
      var n, i = y(null === (n = h.__PosthogExtensions__) || void 0 === n ? void 0 : n.parseErrorAsProperties) ? h.__PosthogExtensions__.parseErrorAsProperties([ e.message, void 0, void 0, void 0, e ]) : O({
        $exception_type: e.name,
        $exception_message: e.message,
        $exception_level: "error"
      }, t);
      this.exceptions.sendExceptionEvent(i);
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
      var e, t = null !== (e = this.config.name) && void 0 !== e ? e : as;
      return t !== as && (t = as + "." + t), t;
    }
  }, {
    key: "_isIdentified",
    value: function() {
      var e, t;
      return "identified" === (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(Me)) || "identified" === (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.get_property(Me));
    }
  }, {
    key: "_hasPersonProcessing",
    value: function() {
      var e, t, n, i;
      return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && w(this.getGroups()) && (null === (e = this.persistence) || void 0 === e || null === (t = e.props) || void 0 === t || !t[ce]) && (null === (n = this.persistence) || void 0 === n || null === (i = n.props) || void 0 === i || !i[qe]));
    }
  }, {
    key: "_shouldCapturePageleave",
    value: function() {
      return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview;
    }
  }, {
    key: "createPersonProfile",
    value: function() {
      this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {});
    }
  }, {
    key: "_requirePersonProcessing",
    value: function(e) {
      return "never" === this.config.person_profiles ? (C.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), 
      !1) : (this._register_single(qe, !0), !0);
    }
  }, {
    key: "_sync_opt_out_with_persistence",
    value: function() {
      var e, t, n, i, r = this.consent.isOptedOut(), s = this.config.opt_out_persistence_by_default, o = this.config.disable_persistence || r && !!s;
      (null === (e = this.persistence) || void 0 === e ? void 0 : e.disabled) !== o && (null === (n = this.persistence) || void 0 === n || n.set_disabled(o));
      (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.disabled) !== o && (null === (i = this.sessionPersistence) || void 0 === i || i.set_disabled(o));
    }
  }, {
    key: "opt_in_capturing",
    value: function(e) {
      var t;
      (this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), k(null == e ? void 0 : e.captureEventName) || null != e && e.captureEventName) && this.capture(null !== (t = null == e ? void 0 : e.captureEventName) && void 0 !== t ? t : "$opt_in", null == e ? void 0 : e.captureProperties, {
        send_instantly: !0
      });
      this.config.capture_pageview && this._captureInitialPageview();
    }
  }, {
    key: "opt_out_capturing",
    value: function() {
      this.consent.optInOut(!1), this._sync_opt_out_with_persistence();
    }
  }, {
    key: "has_opted_in_capturing",
    value: function() {
      return this.consent.isOptedIn();
    }
  }, {
    key: "has_opted_out_capturing",
    value: function() {
      return this.consent.isOptedOut();
    }
  }, {
    key: "clear_opt_in_out_capturing",
    value: function() {
      this.consent.reset(), this._sync_opt_out_with_persistence();
    }
  }, {
    key: "_is_bot",
    value: function() {
      return s ? qr(s, this.config.custom_blocked_useragents) : void 0;
    }
  }, {
    key: "_captureInitialPageview",
    value: function() {
      o && !this._initialPageviewCaptured && (this._initialPageviewCaptured = !0, this.capture("$pageview", {
        title: o.title
      }, {
        send_instantly: !0
      }));
    }
  }, {
    key: "debug",
    value: function(t) {
      !1 === t ? (null == e || e.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), 
      this.set_config({
        debug: !1
      })) : (null == e || e.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), 
      localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
        debug: !0
      }));
    }
  } ]), t;
}();

!function(e, t) {
  for (var n = 0; n < t.length; n++) e.prototype[t[n]] = ee(e.prototype[t[n]]);
}(hs, [ "identify" ]);

var fs, vs = (fs = ss[as] = new hs, function() {
  function t() {
    t.done || (t.done = !0, us = !1, J(ss, (function(e) {
      e._dom_loaded();
    })));
  }
  null != o && o.addEventListener && ("complete" === o.readyState ? t() : o.addEventListener("DOMContentLoaded", t, !1)), 
  e && oe(e, "load", t, !0);
}(), fs);

class PostHogController extends Controller {
  static values={
    apiKey: String,
    identification: Object
  };
  connect() {
    vs.init(this.apiKeyValue, {
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
      vs.identify(id.toString(), {
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
  CrispMessage.prototype.setMessageText = function(content) {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "set", "message:text", [ content ] ]);
  };
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
    this.offMessageSent();
    window.$crisp.push([ "on", "message:sent", callback ]);
  };
  CrispMessage.prototype.offMessageSent = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "message:sent" ]);
  };
  CrispMessage.prototype.onMessageReceived = function(callback) {
    this.parent.createSingletonIfNecessary();
    this.offMessageReceived();
    window.$crisp.push([ "on", "message:received", callback ]);
  };
  CrispMessage.prototype.offMessageReceived = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "message:received" ]);
  };
  CrispMessage.prototype.onMessageComposeSent = function(callback) {
    this.parent.createSingletonIfNecessary();
    this.offMessageComposeSent();
    window.$crisp.push([ "on", "message:compose:sent", callback ]);
  };
  CrispMessage.prototype.offMessageComposeSent = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "message:compose:sent" ]);
  };
  CrispMessage.prototype.onMessageComposeReceived = function(callback) {
    this.parent.createSingletonIfNecessary();
    this.offMessageComposeReceived();
    window.$crisp.push([ "on", "message:compose:received", callback ]);
  };
  CrispMessage.prototype.offMessageComposeReceived = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "message:compose:received" ]);
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
    if (data) {
      if (data.url) {
        _payload.url = data.url;
      }
      if (data.description) {
        _payload.description = data.description;
      }
      if (data.employment) {
        _payload.employment = [ data.employment.title ];
        if (data.employment.role) {
          _payload.employment.push(data.employment.role);
        }
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
      this.offEmailChanged();
      window.$crisp.push([ "on", "user:email:changed", callback ]);
    }
  };
  CrispUser.prototype.offEmailChanged = function() {
    if (this.parent.isCrispInjected()) {
      window.$crisp.push([ "off", "user:email:changed" ]);
    }
  };
  CrispUser.prototype.onPhoneChanged = function(callback) {
    if (this.parent.isCrispInjected()) {
      this.offPhoneChanged();
      window.$crisp.push([ "on", "user:phone:changed", callback ]);
    }
  };
  CrispUser.prototype.offPhoneChanged = function() {
    if (this.parent.isCrispInjected()) {
      window.$crisp.push([ "off", "user:phone:changed" ]);
    }
  };
  CrispUser.prototype.onNicknameChanged = function(callback) {
    if (this.parent.isCrispInjected()) {
      this.offNicknameChanged();
      window.$crisp.push([ "on", "user:nickname:changed", callback ]);
    }
  };
  CrispUser.prototype.offNicknameChanged = function() {
    if (this.parent.isCrispInjected()) {
      window.$crisp.push([ "off", "user:nickname:changed" ]);
    }
  };
  CrispUser.prototype.onAvatarChanged = function(callback) {
    if (this.parent.isCrispInjected()) {
      this.offAvatarChanged();
      window.$crisp.push([ "on", "user:avatar:changed", callback ]);
    }
  };
  CrispUser.prototype.offAvatarChanged = function() {
    if (this.parent.isCrispInjected()) {
      window.$crisp.push([ "off", "user:avatar:changed" ]);
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
      window.$crisp.push([ "do", "session:reset", [ reload ] ]);
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
    this.offLoaded();
    window.$crisp.push([ "on", "session:loaded", callback ]);
  };
  CrispSession.prototype.offLoaded = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "session:loaded" ]);
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
    this.offChatInitiated();
    window.$crisp.push([ "on", "chat:initiated", callback ]);
  };
  CrispChat.prototype.offChatInitiated = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "chat:initiated" ]);
  };
  CrispChat.prototype.onChatOpened = function(callback) {
    this.parent.createSingletonIfNecessary();
    this.offChatOpened();
    window.$crisp.push([ "on", "chat:opened", callback ]);
  };
  CrispChat.prototype.offChatOpened = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "chat:opened" ]);
  };
  CrispChat.prototype.onChatClosed = function(callback) {
    this.parent.createSingletonIfNecessary();
    this.offChatClosed();
    window.$crisp.push([ "on", "chat:closed", callback ]);
  };
  CrispChat.prototype.offChatClosed = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "chat:closed" ]);
  };
  CrispChat.prototype.onHelpdeskQueried = function(callback) {
    this.parent.createSingletonIfNecessary();
    this.offHelpdeskQueried();
    window.$crisp.push([ "on", "helpdesk:queried", callback ]);
  };
  CrispChat.prototype.offHelpdeskQueried = function() {
    this.parent.createSingletonIfNecessary();
    window.$crisp.push([ "off", "helpdesk:queried" ]);
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
    this.offWebsiteAvailabilityChanged();
    window.$crisp.push([ "on", "website:availability:changed", callback ]);
  };
  Crisp.prototype.offWebsiteAvailabilityChanged = function() {
    this.createSingletonIfNecessary();
    window.$crisp.push([ "off", "website:availability:changed" ]);
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
