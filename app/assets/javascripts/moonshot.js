import { Controller } from "@hotwired/stimulus";

import { post } from "@rails/request.js";

var e, t = "undefined" != typeof window ? window : void 0, i = "undefined" != typeof globalThis ? globalThis : t, r = Array.prototype, s = r.forEach, n = r.indexOf, o = null == i ? void 0 : i.navigator, a = null == i ? void 0 : i.document, l = null == i ? void 0 : i.location, c = null == i ? void 0 : i.fetch, u = null != i && i.XMLHttpRequest && "withCredentials" in new i.XMLHttpRequest ? i.XMLHttpRequest : void 0, d = null == i ? void 0 : i.AbortController, h = null == o ? void 0 : o.userAgent, _ = null != t ? t : {}, p = {
  DEBUG: !1,
  LIB_VERSION: "1.212.1"
}, v = "$copy_autocapture", g = [ "$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called" ];

!function(e) {
  e.GZipJS = "gzip-js", e.Base64 = "base64";
}(e || (e = {}));

function m(e, t) {
  return -1 !== e.indexOf(t);
}

var b = function(e) {
  return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}, y = function(e) {
  return e.replace(/^\$/, "");
};

var w = Array.isArray, S = Object.prototype, k = S.hasOwnProperty, E = S.toString, x = w || function(e) {
  return "[object Array]" === E.call(e);
}, I = e => "function" == typeof e, C = e => e === Object(e) && !x(e), P = e => {
  if (C(e)) {
    for (var t in e) if (k.call(e, t)) return !1;
    return !0;
  }
  return !1;
}, R = e => void 0 === e, F = e => "[object String]" == E.call(e), T = e => F(e) && 0 === e.trim().length, $ = e => null === e, O = e => R(e) || $(e), M = e => "[object Number]" == E.call(e), A = e => "[object Boolean]" === E.call(e), L = e => e instanceof FormData, D = e => m(g, e), N = e => {
  var i = {
    _log: function(i) {
      if (t && (p.DEBUG || _.POSTHOG_DEBUG) && !R(t.console) && t.console) {
        for (var r = ("__rrweb_original__" in t.console[i] ? t.console[i].__rrweb_original__ : t.console[i]), s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) n[o - 1] = arguments[o];
        r(e, ...n);
      }
    },
    info: function() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      i._log("log", ...t);
    },
    warn: function() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      i._log("warn", ...t);
    },
    error: function() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      i._log("error", ...t);
    },
    critical: function() {
      for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
      console.error(e, ...i);
    },
    uninitializedWarning: e => {
      i.error("You must initialize PostHog before calling ".concat(e));
    },
    createLogger: t => N("".concat(e, " ").concat(t))
  };
  return i;
}, q = N("[PostHog.js]"), B = q.createLogger, H = B("[ExternalScriptsLoader]"), U = (e, t, i) => {
  if (e.config.disable_external_dependency_loading) return H.warn("".concat(t, " was requested but loading of external scripts is disabled.")), 
  i("Loading of external scripts is disabled");
  var r = () => {
    if (!a) return i("document not found");
    var r = a.createElement("script");
    if (r.type = "text/javascript", r.crossOrigin = "anonymous", r.src = t, r.onload = e => i(void 0, e), 
    r.onerror = e => i(e), e.config.prepare_external_dependency_script && (r = e.config.prepare_external_dependency_script(r)), 
    !r) return i("prepare_external_dependency_script returned null");
    var s, n = a.querySelectorAll("body > script");
    n.length > 0 ? null === (s = n[0].parentNode) || void 0 === s || s.insertBefore(r, n[0]) : a.body.appendChild(r);
  };
  null != a && a.body ? r() : null == a || a.addEventListener("DOMContentLoaded", r);
};

function z(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter((function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    }))), i.push.apply(i, r);
  }
  return i;
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {};
    t % 2 ? z(Object(i), !0).forEach((function(t) {
      W(e, t, i[t]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : z(Object(i)).forEach((function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
    }));
  }
  return e;
}

function W(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}

function V(e, t) {
  if (null == e) return {};
  var i, r, s = function(e, t) {
    if (null == e) return {};
    var i, r, s = {}, n = Object.keys(e);
    for (r = 0; r < n.length; r++) i = n[r], t.indexOf(i) >= 0 || (s[i] = e[i]);
    return s;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) i = n[r], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
  }
  return s;
}

_.__PosthogExtensions__ = _.__PosthogExtensions__ || {}, _.__PosthogExtensions__.loadExternalDependency = (e, t, i) => {
  var r = "/static/".concat(t, ".js") + "?v=".concat(e.version);
  if ("remote-config" === t && (r = "/array/".concat(e.config.token, "/config.js")), 
  "toolbar" === t) {
    var s = 3e5, n = Math.floor(Date.now() / s) * s;
    r = "".concat(r, "&t=").concat(n);
  }
  var o = e.requestRouter.endpointFor("assets", r);
  U(e, o, i);
}, _.__PosthogExtensions__.loadSiteApp = (e, t, i) => {
  var r = e.requestRouter.endpointFor("api", t);
  U(e, r, i);
};

var G = {};

function J(e, t, i) {
  if (x(e)) if (s && e.forEach === s) e.forEach(t, i); else if ("length" in e && e.length === +e.length) for (var r = 0, n = e.length; r < n; r++) if (r in e && t.call(i, e[r], r) === G) return;
}

function Y(e, t, i) {
  if (!O(e)) {
    if (x(e)) return J(e, t, i);
    if (L(e)) {
      for (var r of e.entries()) if (t.call(i, r[1], r[0]) === G) return;
    } else for (var s in e) if (k.call(e, s) && t.call(i, e[s], s) === G) return;
  }
}

var K = function(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
  return J(i, (function(t) {
    for (var i in t) void 0 !== t[i] && (e[i] = t[i]);
  })), e;
}, X = function(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
  return J(i, (function(t) {
    J(t, (function(t) {
      e.push(t);
    }));
  })), e;
};

function Q(e) {
  for (var t = Object.keys(e), i = t.length, r = new Array(i); i--; ) r[i] = [ t[i], e[t[i]] ];
  return r;
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
      for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
      return e.apply(this, i);
    } catch (e) {
      q.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), 
      q.critical(e);
    }
  };
}, te = function(e) {
  var t = {};
  return Y(e, (function(e, i) {
    F(e) && e.length > 0 && (t[i] = e);
  })), t;
};

function ie(e, t) {
  return i = e, r = e => F(e) && !$(t) ? e.slice(0, t) : e, s = new Set, function e(t, i) {
    return t !== Object(t) ? r ? r(t, i) : t : s.has(t) ? void 0 : (s.add(t), x(t) ? (n = [], 
    J(t, (t => {
      n.push(e(t));
    }))) : (n = {}, Y(t, ((t, i) => {
      s.has(t) || (n[i] = e(t, i));
    }))), n);
    var n;
  }(i);
  var i, r, s;
}

var re = [ "herokuapp.com", "vercel.app", "netlify.app" ];

function se(e) {
  var t = null == e ? void 0 : e.hostname;
  if (!F(t)) return !1;
  var i = t.split(".").slice(-2).join(".");
  for (var r of re) if (i === r) return !1;
  return !0;
}

function ne(e, t) {
  for (var i = 0; i < e.length; i++) if (t(e[i])) return e[i];
}

function oe(e, t, i, r) {
  var {capture: s = !1, passive: n = !0} = null != r ? r : {};
  null == e || e.addEventListener(t, i, {
    capture: s,
    passive: n
  });
}

var ae = "$people_distinct_id", le = "__alias", ce = "__timers", ue = "$autocapture_disabled_server_side", de = "$heatmaps_enabled_server_side", he = "$exception_capture_enabled_server_side", _e = "$web_vitals_enabled_server_side", pe = "$dead_clicks_enabled_server_side", ve = "$web_vitals_allowed_metrics", ge = "$session_recording_enabled_server_side", fe = "$console_log_recording_enabled_server_side", me = "$session_recording_network_payload_capture", be = "$session_recording_canvas_recording", ye = "$replay_sample_rate", we = "$replay_minimum_duration", Se = "$replay_script_config", ke = "$sesid", Ee = "$session_is_sampled", xe = "$session_recording_url_trigger_activated_session", Ie = "$session_recording_event_trigger_activated_session", Ce = "$enabled_feature_flags", Pe = "$early_access_features", Re = "$stored_person_properties", Fe = "$stored_group_properties", Te = "$surveys", $e = "$surveys_activated", Oe = "$flag_call_reported", Me = "$user_state", Ae = "$client_session_props", Le = "$capture_rate_limit", De = "$initial_campaign_params", Ne = "$initial_referrer_info", qe = "$initial_person_info", Be = "$epp", He = "__POSTHOG_TOOLBAR__", Ue = "$posthog_cookieless", ze = [ ae, le, "__cmpns", ce, ge, de, ke, Ce, Me, Pe, Fe, Re, Te, Oe, Ae, Le, De, Ne, Be ], je = B("[FeatureFlags]"), We = "$active_feature_flags", Ve = "$override_feature_flags", Ge = "$feature_flag_payloads", Je = e => {
  var t = {};
  for (var [i, r] of Q(e || {})) r && (t[i] = r);
  return t;
};

class Ye {
  constructor(e) {
    W(this, "_override_warning", !1), W(this, "_hasLoadedFlags", !1), W(this, "_requestInFlight", !1), 
    W(this, "_reloadingDisabled", !1), W(this, "_additionalReloadRequested", !1), W(this, "_decideCalled", !1), 
    W(this, "_flagsLoadedFromRemote", !1), this.instance = e, this.featureFlagEventHandlers = [];
  }
  decide() {
    if (this.instance.config.__preview_remote_config) this._decideCalled = !0; else {
      var e = !this._reloadDebouncer && (this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load);
      this._callDecideEndpoint({
        disableFlags: e
      });
    }
  }
  get hasLoadedFlags() {
    return this._hasLoadedFlags;
  }
  getFlags() {
    return Object.keys(this.getFlagVariants());
  }
  getFlagVariants() {
    var e = this.instance.get_property(Ce), t = this.instance.get_property(Ve);
    if (!t) return e || {};
    for (var i = K({}, e), r = Object.keys(t), s = 0; s < r.length; s++) i[r[s]] = t[r[s]];
    return this._override_warning || (je.warn(" Overriding feature flags!", {
      enabledFlags: e,
      overriddenFlags: t,
      finalFlags: i
    }), this._override_warning = !0), i;
  }
  getFlagPayloads() {
    return this.instance.get_property(Ge) || {};
  }
  reloadFeatureFlags() {
    this._reloadingDisabled || this.instance.config.advanced_disable_feature_flags || this._reloadDebouncer || (this._reloadDebouncer = setTimeout((() => {
      this._callDecideEndpoint();
    }), 5));
  }
  clearDebouncer() {
    clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0;
  }
  ensureFlagsLoaded() {
    this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags();
  }
  setAnonymousDistinctId(e) {
    this.$anon_distinct_id = e;
  }
  setReloadingPaused(e) {
    this._reloadingDisabled = e;
  }
  _callDecideEndpoint(t) {
    if (this.clearDebouncer(), !this.instance.config.advanced_disable_decide) if (this._requestInFlight) this._additionalReloadRequested = !0; else {
      var i = {
        token: this.instance.config.token,
        distinct_id: this.instance.get_distinct_id(),
        groups: this.instance.getGroups(),
        $anon_distinct_id: this.$anon_distinct_id,
        person_properties: this.instance.get_property(Re),
        group_properties: this.instance.get_property(Fe)
      };
      (null != t && t.disableFlags || this.instance.config.advanced_disable_feature_flags) && (i.disable_flags = !0), 
      this._requestInFlight = !0, this.instance._send_request({
        method: "POST",
        url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
        data: i,
        compression: this.instance.config.disable_compression ? void 0 : e.Base64,
        timeout: this.instance.config.feature_flag_request_timeout_ms,
        callback: e => {
          var t, r, s = !0;
          (200 === e.statusCode && (this.$anon_distinct_id = void 0, s = !1), this._requestInFlight = !1, 
          this._decideCalled) || (this._decideCalled = !0, this.instance._onRemoteConfig(null !== (r = e.json) && void 0 !== r ? r : {}));
          i.disable_flags || (this._flagsLoadedFromRemote = !s, this.receivedFeatureFlags(null !== (t = e.json) && void 0 !== t ? t : {}, s), 
          this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callDecideEndpoint()));
        }
      });
    }
  }
  getFeatureFlag(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
      var i, r, s, n, o, a = this.getFlagVariants()[e], l = "".concat(a), c = this.instance.get_property(Oe) || {};
      if (t.send_event || !("send_event" in t)) if (!(e in c) || !c[e].includes(l)) x(c[e]) ? c[e].push(l) : c[e] = [ l ], 
      null === (i = this.instance.persistence) || void 0 === i || i.register({
        [Oe]: c
      }), this.instance.capture("$feature_flag_called", {
        $feature_flag: e,
        $feature_flag_response: a,
        $feature_flag_payload: this.getFeatureFlagPayload(e) || null,
        $feature_flag_bootstrapped_response: (null === (r = this.instance.config.bootstrap) || void 0 === r || null === (s = r.featureFlags) || void 0 === s ? void 0 : s[e]) || null,
        $feature_flag_bootstrapped_payload: (null === (n = this.instance.config.bootstrap) || void 0 === n || null === (o = n.featureFlagPayloads) || void 0 === o ? void 0 : o[e]) || null,
        $used_bootstrap_value: !this._flagsLoadedFromRemote
      });
      return a;
    }
    je.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.");
  }
  getFeatureFlagPayload(e) {
    return this.getFlagPayloads()[e];
  }
  isFeatureEnabled(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
    je.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.");
  }
  addFeatureFlagsHandler(e) {
    this.featureFlagEventHandlers.push(e);
  }
  removeFeatureFlagsHandler(e) {
    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((t => t !== e));
  }
  receivedFeatureFlags(e, t) {
    if (this.instance.persistence) {
      this._hasLoadedFlags = !0;
      var i = this.getFlagVariants(), r = this.getFlagPayloads();
      !function(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s = e.featureFlags, n = e.featureFlagPayloads;
        if (s) if (x(s)) {
          var o = {};
          if (s) for (var a = 0; a < s.length; a++) o[s[a]] = !0;
          t && t.register({
            [We]: s,
            [Ce]: o
          });
        } else {
          var l = s, c = n;
          e.errorsWhileComputingFlags && (l = j(j({}, i), l), c = j(j({}, r), c)), t && t.register({
            [We]: Object.keys(Je(l)),
            [Ce]: l || {},
            [Ge]: c || {}
          });
        }
      }(e, this.instance.persistence, i, r), this._fireFeatureFlagsCallbacks(t);
    }
  }
  override(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!this.instance.__loaded || !this.instance.persistence) return je.uninitializedWarning("posthog.feature_flags.override");
    if (this._override_warning = t, !1 === e) this.instance.persistence.unregister(Ve); else if (x(e)) {
      for (var i = {}, r = 0; r < e.length; r++) i[e[r]] = !0;
      this.instance.persistence.register({
        [Ve]: i
      });
    } else this.instance.persistence.register({
      [Ve]: e
    });
  }
  onFeatureFlags(e) {
    if (this.addFeatureFlagsHandler(e), this._hasLoadedFlags) {
      var {flags: t, flagVariants: i} = this._prepareFeatureFlagsForCallbacks();
      e(t, i);
    }
    return () => this.removeFeatureFlagsHandler(e);
  }
  updateEarlyAccessFeatureEnrollment(e, t) {
    var i, r = (this.instance.get_property(Pe) || []).find((t => t.flagKey === e)), s = {
      ["$feature_enrollment/".concat(e)]: t
    }, n = {
      $feature_flag: e,
      $feature_enrollment: t,
      $set: s
    };
    r && (n.$early_access_feature_name = r.name), this.instance.capture("$feature_enrollment_update", n), 
    this.setPersonPropertiesForFlags(s, !1);
    var o = j(j({}, this.getFlagVariants()), {}, {
      [e]: t
    });
    null === (i = this.instance.persistence) || void 0 === i || i.register({
      [We]: Object.keys(Je(o)),
      [Ce]: o
    }), this._fireFeatureFlagsCallbacks();
  }
  getEarlyAccessFeatures(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = this.instance.get_property(Pe);
    if (i && !t) return e(i);
    this.instance._send_request({
      url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
      method: "GET",
      callback: t => {
        var i;
        if (t.json) {
          var r = t.json.earlyAccessFeatures;
          return null === (i = this.instance.persistence) || void 0 === i || i.register({
            [Pe]: r
          }), e(r);
        }
      }
    });
  }
  _prepareFeatureFlagsForCallbacks() {
    var e = this.getFlags(), t = this.getFlagVariants();
    return {
      flags: e.filter((e => t[e])),
      flagVariants: Object.keys(t).filter((e => t[e])).reduce(((e, i) => (e[i] = t[i], 
      e)), {})
    };
  }
  _fireFeatureFlagsCallbacks(e) {
    var {flags: t, flagVariants: i} = this._prepareFeatureFlagsForCallbacks();
    this.featureFlagEventHandlers.forEach((r => r(t, i, {
      errorsLoading: e
    })));
  }
  setPersonPropertiesForFlags(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = this.instance.get_property(Re) || {};
    this.instance.register({
      [Re]: j(j({}, i), e)
    }), t && this.instance.reloadFeatureFlags();
  }
  resetPersonPropertiesForFlags() {
    this.instance.unregister(Re);
  }
  setGroupPropertiesForFlags(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = this.instance.get_property(Fe) || {};
    0 !== Object.keys(i).length && Object.keys(i).forEach((t => {
      i[t] = j(j({}, i[t]), e[t]), delete e[t];
    })), this.instance.register({
      [Fe]: j(j({}, i), e)
    }), t && this.instance.reloadFeatureFlags();
  }
  resetGroupPropertiesForFlags(e) {
    if (e) {
      var t = this.instance.get_property(Fe) || {};
      this.instance.register({
        [Fe]: j(j({}, t), {}, {
          [e]: {}
        })
      });
    } else this.instance.unregister(Fe);
  }
}

Math.trunc || (Math.trunc = function(e) {
  return e < 0 ? Math.ceil(e) : Math.floor(e);
}), Number.isInteger || (Number.isInteger = function(e) {
  return M(e) && isFinite(e) && Math.floor(e) === e;
});

var Ke = "0123456789abcdef";

class Xe {
  constructor(e) {
    if (this.bytes = e, 16 !== e.length) throw new TypeError("not 128-bit length");
  }
  static fromFieldsV7(e, t, i, r) {
    if (!Number.isInteger(e) || !Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(r) || e < 0 || t < 0 || i < 0 || r < 0 || e > 0xffffffffffff || t > 4095 || i > 1073741823 || r > 4294967295) throw new RangeError("invalid field value");
    var s = new Uint8Array(16);
    return s[0] = e / Math.pow(2, 40), s[1] = e / Math.pow(2, 32), s[2] = e / Math.pow(2, 24), 
    s[3] = e / Math.pow(2, 16), s[4] = e / Math.pow(2, 8), s[5] = e, s[6] = 112 | t >>> 8, 
    s[7] = t, s[8] = 128 | i >>> 24, s[9] = i >>> 16, s[10] = i >>> 8, s[11] = i, s[12] = r >>> 24, 
    s[13] = r >>> 16, s[14] = r >>> 8, s[15] = r, new Xe(s);
  }
  toString() {
    for (var e = "", t = 0; t < this.bytes.length; t++) e = e + Ke.charAt(this.bytes[t] >>> 4) + Ke.charAt(15 & this.bytes[t]), 
    3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
    if (36 !== e.length) throw new Error("Invalid UUIDv7 was generated");
    return e;
  }
  clone() {
    return new Xe(this.bytes.slice(0));
  }
  equals(e) {
    return 0 === this.compareTo(e);
  }
  compareTo(e) {
    for (var t = 0; t < 16; t++) {
      var i = this.bytes[t] - e.bytes[t];
      if (0 !== i) return Math.sign(i);
    }
    return 0;
  }
}

class Qe {
  constructor() {
    W(this, "timestamp", 0), W(this, "counter", 0), W(this, "random", new tt);
  }
  generate() {
    var e = this.generateOrAbort();
    if (R(e)) {
      this.timestamp = 0;
      var t = this.generateOrAbort();
      if (R(t)) throw new Error("Could not generate UUID after timestamp reset");
      return t;
    }
    return e;
  }
  generateOrAbort() {
    var e = Date.now();
    if (e > this.timestamp) this.timestamp = e, this.resetCounter(); else {
      if (!(e + 1e4 > this.timestamp)) return;
      this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
    }
    return Xe.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32());
  }
  resetCounter() {
    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
  }
}

var Ze, et = e => {
  if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
  for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return e;
};

t && !R(t.crypto) && crypto.getRandomValues && (et = e => crypto.getRandomValues(e));

class tt {
  constructor() {
    W(this, "buffer", new Uint32Array(8)), W(this, "cursor", 1 / 0);
  }
  nextUint32() {
    return this.cursor >= this.buffer.length && (et(this.buffer), this.cursor = 0), 
    this.buffer[this.cursor++];
  }
}

var it = () => rt().toString(), rt = () => (Ze || (Ze = new Qe)).generate(), st = "Thu, 01 Jan 1970 00:00:00 GMT", nt = "";

var ot = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;

function at(e, t) {
  if (t) {
    var i = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
      if (nt) return nt;
      if (!t) return "";
      if ([ "localhost", "127.0.0.1" ].includes(e)) return "";
      for (var i = e.split("."), r = Math.min(i.length, 8), s = "dmn_chk_" + it(), n = new RegExp("(^|;)\\s*" + s + "=1"); !nt && r--; ) {
        var o = i.slice(r).join("."), l = s + "=1;domain=." + o;
        t.cookie = l, n.test(t.cookie) && (t.cookie = l + ";expires=" + st, nt = o);
      }
      return nt;
    }(e);
    if (!i) {
      var r = (e => {
        var t = e.match(ot);
        return t ? t[0] : "";
      })(e);
      r !== i && q.info("Warning: cookie subdomain discovery mismatch", r, i), i = r;
    }
    return i ? "; domain=." + i : "";
  }
  return "";
}

var lt = {
  is_supported: () => !!a,
  error: function(e) {
    q.error("cookieStore error: " + e);
  },
  get: function(e) {
    if (a) {
      try {
        for (var t = e + "=", i = a.cookie.split(";").filter((e => e.length)), r = 0; r < i.length; r++) {
          for (var s = i[r]; " " == s.charAt(0); ) s = s.substring(1, s.length);
          if (0 === s.indexOf(t)) return decodeURIComponent(s.substring(t.length, s.length));
        }
      } catch (e) {}
      return null;
    }
  },
  parse: function(e) {
    var t;
    try {
      t = JSON.parse(lt.get(e)) || {};
    } catch (e) {}
    return t;
  },
  set: function(e, t, i, r, s) {
    if (a) try {
      var n = "", o = "", l = at(a.location.hostname, r);
      if (i) {
        var c = new Date;
        c.setTime(c.getTime() + 24 * i * 60 * 60 * 1e3), n = "; expires=" + c.toUTCString();
      }
      s && (o = "; secure");
      var u = e + "=" + encodeURIComponent(JSON.stringify(t)) + n + "; SameSite=Lax; path=/" + l + o;
      return u.length > 3686.4 && q.warn("cookieStore warning: large cookie, len=" + u.length), 
      a.cookie = u, u;
    } catch (e) {
      return;
    }
  },
  remove: function(e, t) {
    try {
      lt.set(e, "", -1, t);
    } catch (e) {
      return;
    }
  }
}, ct = null, ut = {
  is_supported: function() {
    if (!$(ct)) return ct;
    var e = !0;
    if (R(t)) e = !1; else try {
      var i = "__mplssupport__";
      ut.set(i, "xyz"), '"xyz"' !== ut.get(i) && (e = !1), ut.remove(i);
    } catch (t) {
      e = !1;
    }
    return e || q.error("localStorage unsupported; falling back to cookie store"), ct = e, 
    e;
  },
  error: function(e) {
    q.error("localStorage error: " + e);
  },
  get: function(e) {
    try {
      return null == t ? void 0 : t.localStorage.getItem(e);
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
  set: function(e, i) {
    try {
      null == t || t.localStorage.setItem(e, JSON.stringify(i));
    } catch (e) {
      ut.error(e);
    }
  },
  remove: function(e) {
    try {
      null == t || t.localStorage.removeItem(e);
    } catch (e) {
      ut.error(e);
    }
  }
}, dt = [ "distinct_id", ke, Ee, Be, qe ], ht = j(j({}, ut), {}, {
  parse: function(e) {
    try {
      var t = {};
      try {
        t = lt.parse(e) || {};
      } catch (e) {}
      var i = K(t, JSON.parse(ut.get(e) || "{}"));
      return ut.set(e, i), i;
    } catch (e) {}
    return null;
  },
  set: function(e, t, i, r, s, n) {
    try {
      ut.set(e, t, void 0, void 0, n);
      var o = {};
      dt.forEach((e => {
        t[e] && (o[e] = t[e]);
      })), Object.keys(o).length && lt.set(e, o, i, r, s, n);
    } catch (e) {
      ut.error(e);
    }
  },
  remove: function(e, i) {
    try {
      null == t || t.localStorage.removeItem(e), lt.remove(e, i);
    } catch (e) {
      ut.error(e);
    }
  }
}), _t = {}, pt = {
  is_supported: function() {
    return !0;
  },
  error: function(e) {
    q.error("memoryStorage error: " + e);
  },
  get: function(e) {
    return _t[e] || null;
  },
  parse: function(e) {
    return _t[e] || null;
  },
  set: function(e, t) {
    _t[e] = t;
  },
  remove: function(e) {
    delete _t[e];
  }
}, vt = null, gt = {
  is_supported: function() {
    if (!$(vt)) return vt;
    if (vt = !0, R(t)) vt = !1; else try {
      var e = "__support__";
      gt.set(e, "xyz"), '"xyz"' !== gt.get(e) && (vt = !1), gt.remove(e);
    } catch (e) {
      vt = !1;
    }
    return vt;
  },
  error: function(e) {
    q.error("sessionStorage error: ", e);
  },
  get: function(e) {
    try {
      return null == t ? void 0 : t.sessionStorage.getItem(e);
    } catch (e) {
      gt.error(e);
    }
    return null;
  },
  parse: function(e) {
    try {
      return JSON.parse(gt.get(e)) || null;
    } catch (e) {}
    return null;
  },
  set: function(e, i) {
    try {
      null == t || t.sessionStorage.setItem(e, JSON.stringify(i));
    } catch (e) {
      gt.error(e);
    }
  },
  remove: function(e) {
    try {
      null == t || t.sessionStorage.removeItem(e);
    } catch (e) {
      gt.error(e);
    }
  }
}, ft = [ "localhost", "127.0.0.1" ], mt = e => {
  var t = null == a ? void 0 : a.createElement("a");
  return R(t) ? null : (t.href = e, t);
}, bt = function(e, t) {
  return !!function(e) {
    try {
      new RegExp(e);
    } catch (e) {
      return !1;
    }
    return !0;
  }(t) && new RegExp(t).test(e);
}, yt = function(e) {
  var t, i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", s = [];
  return Y(e, (function(e, r) {
    R(e) || R(r) || "undefined" === r || (t = encodeURIComponent((e => e instanceof File)(e) ? e.name : e.toString()), 
    i = encodeURIComponent(r), s[s.length] = i + "=" + t);
  })), s.join(r);
}, wt = function(e, t) {
  for (var i, r = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), s = 0; s < r.length; s++) {
    var n = r[s].split("=");
    if (n[0] === t) {
      i = n;
      break;
    }
  }
  if (!x(i) || i.length < 2) return "";
  var o = i[1];
  try {
    o = decodeURIComponent(o);
  } catch (e) {
    q.error("Skipping decoding for malformed query param: " + o);
  }
  return o.replace(/\+/g, " ");
}, St = function(e, t, i) {
  if (!e || !t || !t.length) return e;
  for (var r = e.split("#"), s = r[0] || "", n = r[1], o = s.split("?"), a = o[1], l = o[0], c = (a || "").split("&"), u = [], d = 0; d < c.length; d++) {
    var h = c[d].split("=");
    x(h) && (t.includes(h[0]) ? u.push(h[0] + "=" + i) : u.push(c[d]));
  }
  var _ = l;
  return null != a && (_ += "?" + u.join("&")), null != n && (_ += "#" + n), _;
}, kt = function(e, t) {
  var i = e.match(new RegExp(t + "=([^&]*)"));
  return i ? i[1] : null;
}, Et = "Mobile", xt = "iOS", It = "Android", Ct = "Tablet", Pt = It + " " + Ct, Rt = "iPad", Ft = "Apple", Tt = Ft + " Watch", $t = "Safari", Ot = "BlackBerry", Mt = "Samsung", At = Mt + "Browser", Lt = Mt + " Internet", Dt = "Chrome", Nt = Dt + " OS", qt = Dt + " " + xt, Bt = "Internet Explorer", Ht = Bt + " " + Et, Ut = "Opera", zt = Ut + " Mini", jt = "Edge", Wt = "Microsoft " + jt, Vt = "Firefox", Gt = Vt + " " + xt, Jt = "Nintendo", Yt = "PlayStation", Kt = "Xbox", Xt = It + " " + Et, Qt = Et + " " + $t, Zt = "Windows", ei = Zt + " Phone", ti = "Nokia", ii = "Ouya", ri = "Generic", si = ri + " " + Et.toLowerCase(), ni = ri + " " + Ct.toLowerCase(), oi = "Konqueror", ai = "(\\d+(\\.\\d+)?)", li = new RegExp("Version/" + ai), ci = new RegExp(Kt, "i"), ui = new RegExp(Yt + " \\w+", "i"), di = new RegExp(Jt + " \\w+", "i"), hi = new RegExp(Ot + "|PlayBook|BB10", "i"), _i = {
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

var pi = (e, t) => t && m(t, Ft) || function(e) {
  return m(e, $t) && !m(e, Dt) && !m(e, It);
}(e), vi = function(e, t) {
  return t = t || "", m(e, " OPR/") && m(e, "Mini") ? zt : m(e, " OPR/") ? Ut : hi.test(e) ? Ot : m(e, "IE" + Et) || m(e, "WPDesktop") ? Ht : m(e, At) ? Lt : m(e, jt) || m(e, "Edg/") ? Wt : m(e, "FBIOS") ? "Facebook " + Et : m(e, "UCWEB") || m(e, "UCBrowser") ? "UC Browser" : m(e, "CriOS") ? qt : m(e, "CrMo") || m(e, Dt) ? Dt : m(e, It) && m(e, $t) ? Xt : m(e, "FxiOS") ? Gt : m(e.toLowerCase(), oi.toLowerCase()) ? oi : pi(e, t) ? m(e, Et) ? Qt : $t : m(e, Vt) ? Vt : m(e, "MSIE") || m(e, "Trident/") ? Bt : m(e, "Gecko") ? Vt : "";
}, gi = {
  [Ht]: [ new RegExp("rv:" + ai) ],
  [Wt]: [ new RegExp(jt + "?\\/" + ai) ],
  [Dt]: [ new RegExp("(" + Dt + "|CrMo)\\/" + ai) ],
  [qt]: [ new RegExp("CriOS\\/" + ai) ],
  "UC Browser": [ new RegExp("(UCBrowser|UCWEB)\\/" + ai) ],
  [$t]: [ li ],
  [Qt]: [ li ],
  [Ut]: [ new RegExp("(Opera|OPR)\\/" + ai) ],
  [Vt]: [ new RegExp(Vt + "\\/" + ai) ],
  [Gt]: [ new RegExp("FxiOS\\/" + ai) ],
  [oi]: [ new RegExp("Konqueror[:/]?" + ai, "i") ],
  [Ot]: [ new RegExp(Ot + " " + ai), li ],
  [Xt]: [ new RegExp("android\\s" + ai, "i") ],
  [Lt]: [ new RegExp(At + "\\/" + ai) ],
  [Bt]: [ new RegExp("(rv:|MSIE )" + ai) ],
  Mozilla: [ new RegExp("rv:" + ai) ]
}, fi = [ [ new RegExp(Kt + "; " + Kt + " (.*?)[);]", "i"), e => [ Kt, e && e[1] || "" ] ], [ new RegExp(Jt, "i"), [ Jt, "" ] ], [ new RegExp(Yt, "i"), [ Yt, "" ] ], [ hi, [ Ot, "" ] ], [ new RegExp(Zt, "i"), (e, t) => {
  if (/Phone/.test(t) || /WPDesktop/.test(t)) return [ ei, "" ];
  if (new RegExp(Et).test(t) && !/IEMobile\b/.test(t)) return [ Zt + " " + Et, "" ];
  var i = /Windows NT ([0-9.]+)/i.exec(t);
  if (i && i[1]) {
    var r = i[1], s = _i[r] || "";
    return /arm/i.test(t) && (s = "RT"), [ Zt, s ];
  }
  return [ Zt, "" ];
} ], [ /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, e => {
  if (e && e[3]) {
    var t = [ e[3], e[4], e[5] || "0" ];
    return [ xt, t.join(".") ];
  }
  return [ xt, "" ];
} ], [ /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, e => {
  var t = "";
  return e && e.length >= 3 && (t = R(e[2]) ? e[3] : e[2]), [ "watchOS", t ];
} ], [ new RegExp("(" + It + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + It + ")", "i"), e => {
  if (e && e[2]) {
    var t = [ e[2], e[3], e[4] || "0" ];
    return [ It, t.join(".") ];
  }
  return [ It, "" ];
} ], [ /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, e => {
  var t = [ "Mac OS X", "" ];
  if (e && e[1]) {
    var i = [ e[1], e[2], e[3] || "0" ];
    t[1] = i.join(".");
  }
  return t;
} ], [ /Mac/i, [ "Mac OS X", "" ] ], [ /CrOS/, [ Nt, "" ] ], [ /Linux|debian/i, [ "Linux", "" ] ] ], mi = function(e) {
  return di.test(e) ? Jt : ui.test(e) ? Yt : ci.test(e) ? Kt : new RegExp(ii, "i").test(e) ? ii : new RegExp("(" + ei + "|WPDesktop)", "i").test(e) ? ei : /iPad/.test(e) ? Rt : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? Tt : hi.test(e) ? Ot : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(ti, "i").test(e) ? ti : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(Et).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? It : Pt : It : new RegExp("(pda|" + Et + ")", "i").test(e) ? si : new RegExp(Ct, "i").test(e) && !new RegExp(Ct + " pc", "i").test(e) ? ni : "";
}, bi = "https?://(.*)", yi = [ "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "irclid", "_kx" ], wi = X([ "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid" ], yi), Si = "<masked>", ki = {
  campaignParams: function() {
    var {customTrackedParams: e, maskPersonalDataProperties: t, customPersonalDataProperties: i} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!a) return {};
    var r = t ? X([], yi, i || []) : [];
    return this._campaignParamsFromUrl(St(a.URL, r, Si), e);
  },
  _campaignParamsFromUrl: function(e, t) {
    var i = wi.concat(t || []), r = {};
    return Y(i, (function(t) {
      var i = wt(e, t);
      r[t] = i || null;
    })), r;
  },
  _searchEngine: function(e) {
    return e ? 0 === e.search(bi + "google.([^/?]*)") ? "google" : 0 === e.search(bi + "bing.com") ? "bing" : 0 === e.search(bi + "yahoo.com") ? "yahoo" : 0 === e.search(bi + "duckduckgo.com") ? "duckduckgo" : null : null;
  },
  _searchInfoFromReferrer: function(e) {
    var t = ki._searchEngine(e), i = "yahoo" != t ? "q" : "p", r = {};
    if (!$(t)) {
      r.$search_engine = t;
      var s = a ? wt(a.referrer, i) : "";
      s.length && (r.ph_keyword = s);
    }
    return r;
  },
  searchInfo: function() {
    var e = null == a ? void 0 : a.referrer;
    return e ? this._searchInfoFromReferrer(e) : {};
  },
  browser: vi,
  browserVersion: function(e, t) {
    var i = vi(e, t), r = gi[i];
    if (R(r)) return null;
    for (var s = 0; s < r.length; s++) {
      var n = r[s], o = e.match(n);
      if (o) return parseFloat(o[o.length - 2]);
    }
    return null;
  },
  browserLanguage: function() {
    return navigator.language || navigator.userLanguage;
  },
  browserLanguagePrefix: function() {
    var e = this.browserLanguage();
    return "string" == typeof e ? e.split("-")[0] : void 0;
  },
  os: function(e) {
    for (var t = 0; t < fi.length; t++) {
      var [i, r] = fi[t], s = i.exec(e), n = s && (I(r) ? r(s, e) : r);
      if (n) return n;
    }
    return [ "", "" ];
  },
  device: mi,
  deviceType: function(e) {
    var t = mi(e);
    return t === Rt || t === Pt || "Kobo" === t || "Kindle Fire" === t || t === ni ? Ct : t === Jt || t === Kt || t === Yt || t === ii ? "Console" : t === Tt ? "Wearable" : t ? Et : "Desktop";
  },
  referrer: function() {
    return (null == a ? void 0 : a.referrer) || "$direct";
  },
  referringDomain: function() {
    var e;
    return null != a && a.referrer && (null === (e = mt(a.referrer)) || void 0 === e ? void 0 : e.host) || "$direct";
  },
  referrerInfo: function() {
    return {
      $referrer: this.referrer(),
      $referring_domain: this.referringDomain()
    };
  },
  initialPersonInfo: function() {
    return {
      r: this.referrer().substring(0, 1e3),
      u: null == l ? void 0 : l.href.substring(0, 1e3)
    };
  },
  initialPersonPropsFromInfo: function(e) {
    var t, {r: i, u: r} = e, s = {
      $initial_referrer: i,
      $initial_referring_domain: null == i ? void 0 : "$direct" == i ? "$direct" : null === (t = mt(i)) || void 0 === t ? void 0 : t.host
    };
    if (r) {
      s.$initial_current_url = r;
      var n = mt(r);
      s.$initial_host = null == n ? void 0 : n.host, s.$initial_pathname = null == n ? void 0 : n.pathname, 
      Y(this._campaignParamsFromUrl(r), (function(e, t) {
        s["$initial_" + y(t)] = e;
      }));
    }
    i && Y(this._searchInfoFromReferrer(i), (function(e, t) {
      s["$initial_" + y(t)] = e;
    }));
    return s;
  },
  timezone: function() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (e) {
      return;
    }
  },
  timezoneOffset: function() {
    try {
      return (new Date).getTimezoneOffset();
    } catch (e) {
      return;
    }
  },
  properties: function() {
    var {maskPersonalDataProperties: e, customPersonalDataProperties: i} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!h) return {};
    var r = e ? X([], yi, i || []) : [], [s, n] = ki.os(h);
    return K(te({
      $os: s,
      $os_version: n,
      $browser: ki.browser(h, navigator.vendor),
      $device: ki.device(h),
      $device_type: ki.deviceType(h),
      $timezone: ki.timezone(),
      $timezone_offset: ki.timezoneOffset()
    }), {
      $current_url: St(null == l ? void 0 : l.href, r, Si),
      $host: null == l ? void 0 : l.host,
      $pathname: null == l ? void 0 : l.pathname,
      $raw_user_agent: h.length > 1e3 ? h.substring(0, 997) + "..." : h,
      $browser_version: ki.browserVersion(h, navigator.vendor),
      $browser_language: ki.browserLanguage(),
      $browser_language_prefix: ki.browserLanguagePrefix(),
      $screen_height: null == t ? void 0 : t.screen.height,
      $screen_width: null == t ? void 0 : t.screen.width,
      $viewport_height: null == t ? void 0 : t.innerHeight,
      $viewport_width: null == t ? void 0 : t.innerWidth,
      $lib: "web",
      $lib_version: p.LIB_VERSION,
      $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
      $time: Date.now() / 1e3
    });
  },
  people_properties: function() {
    if (!h) return {};
    var [e, t] = ki.os(h);
    return K(te({
      $os: e,
      $os_version: t,
      $browser: ki.browser(h, navigator.vendor)
    }), {
      $browser_version: ki.browserVersion(h, navigator.vendor)
    });
  }
}, Ei = [ "cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory" ];

class xi {
  constructor(e) {
    this.config = e, this.props = {}, this.campaign_params_saved = !1, this.name = (e => {
      var t = "";
      return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), 
      e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog";
    })(e), this.storage = this.buildStorage(e), this.load(), e.debug && q.info("Persistence loaded", e.persistence, j({}, this.props)), 
    this.update_config(e, e), this.save();
  }
  buildStorage(e) {
    -1 === Ei.indexOf(e.persistence.toLowerCase()) && (q.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), 
    e.persistence = "localStorage+cookie");
    var t = e.persistence.toLowerCase();
    return "localstorage" === t && ut.is_supported() ? ut : "localstorage+cookie" === t && ht.is_supported() ? ht : "sessionstorage" === t && gt.is_supported() ? gt : "memory" === t ? pt : "cookie" === t ? lt : ht.is_supported() ? ht : lt;
  }
  properties() {
    var e = {};
    return Y(this.props, (function(t, i) {
      if (i === Ce && C(t)) for (var r = Object.keys(t), s = 0; s < r.length; s++) e["$feature/".concat(r[s])] = t[r[s]]; else a = i, 
      l = !1, ($(o = ze) ? l : n && o.indexOf === n ? -1 != o.indexOf(a) : (Y(o, (function(e) {
        if (l || (l = e === a)) return G;
      })), l)) || (e[i] = t);
      var o, a, l;
    })), e;
  }
  load() {
    if (!this.disabled) {
      var e = this.storage.parse(this.name);
      e && (this.props = K({}, e));
    }
  }
  save() {
    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure, this.config.debug);
  }
  remove() {
    this.storage.remove(this.name, !1), this.storage.remove(this.name, !0);
  }
  clear() {
    this.remove(), this.props = {};
  }
  register_once(e, t, i) {
    if (C(e)) {
      R(t) && (t = "None"), this.expire_days = R(i) ? this.default_expiry : i;
      var r = !1;
      if (Y(e, ((e, i) => {
        this.props.hasOwnProperty(i) && this.props[i] !== t || (this.props[i] = e, r = !0);
      })), r) return this.save(), !0;
    }
    return !1;
  }
  register(e, t) {
    if (C(e)) {
      this.expire_days = R(t) ? this.default_expiry : t;
      var i = !1;
      if (Y(e, ((t, r) => {
        e.hasOwnProperty(r) && this.props[r] !== t && (this.props[r] = t, i = !0);
      })), i) return this.save(), !0;
    }
    return !1;
  }
  unregister(e) {
    e in this.props && (delete this.props[e], this.save());
  }
  update_campaign_params() {
    if (!this.campaign_params_saved) {
      var e = ki.campaignParams({
        customTrackedParams: this.config.custom_campaign_params,
        maskPersonalDataProperties: this.config.mask_personal_data_properties,
        customPersonalDataProperties: this.config.custom_personal_data_properties
      });
      P(te(e)) || this.register(e), this.campaign_params_saved = !0;
    }
  }
  update_search_keyword() {
    this.register(ki.searchInfo());
  }
  update_referrer_info() {
    this.register_once(ki.referrerInfo(), void 0);
  }
  set_initial_person_info() {
    this.props[De] || this.props[Ne] || this.register_once({
      [qe]: ki.initialPersonInfo()
    }, void 0);
  }
  get_referrer_info() {
    return te({
      $referrer: this.props.$referrer,
      $referring_domain: this.props.$referring_domain
    });
  }
  get_initial_props() {
    var e = {};
    Y([ Ne, De ], (t => {
      var i = this.props[t];
      i && Y(i, (function(t, i) {
        e["$initial_" + y(i)] = t;
      }));
    }));
    var t = this.props[qe];
    if (t) {
      var i = ki.initialPersonPropsFromInfo(t);
      K(e, i);
    }
    return e;
  }
  safe_merge(e) {
    return Y(this.props, (function(t, i) {
      i in e || (e[i] = t);
    })), e;
  }
  update_config(e, t) {
    if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), 
    this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), 
    e.persistence !== t.persistence) {
      var i = this.buildStorage(e), r = this.props;
      this.clear(), this.storage = i, this.props = r, this.save();
    }
  }
  set_disabled(e) {
    this.disabled = e, this.disabled ? this.remove() : this.save();
  }
  set_cross_subdomain(e) {
    e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save());
  }
  get_cross_subdomain() {
    return !!this.cross_subdomain;
  }
  set_secure(e) {
    e !== this.secure && (this.secure = e, this.remove(), this.save());
  }
  set_event_timer(e, t) {
    var i = this.props[ce] || {};
    i[e] = t, this.props[ce] = i, this.save();
  }
  remove_event_timer(e) {
    var t = (this.props[ce] || {})[e];
    return R(t) || (delete this.props[ce][e], this.save()), t;
  }
  get_property(e) {
    return this.props[e];
  }
  set_property(e, t) {
    this.props[e] = t, this.save();
  }
}

function Ii(e) {
  var t, i;
  return (null === (t = JSON.stringify(e, (i = [], function(e, t) {
    if (C(t)) {
      for (;i.length > 0 && i[i.length - 1] !== this; ) i.pop();
      return i.includes(t) ? "[Circular]" : (i.push(t), t);
    }
    return t;
  }))) || void 0 === t ? void 0 : t.length) || 0;
}

function Ci(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
  if (e.size >= t && e.data.length > 1) {
    var i = Math.floor(e.data.length / 2), r = e.data.slice(0, i), s = e.data.slice(i);
    return [ Ci({
      size: Ii(r),
      data: r,
      sessionId: e.sessionId,
      windowId: e.windowId
    }), Ci({
      size: Ii(s),
      data: s,
      sessionId: e.sessionId,
      windowId: e.windowId
    }) ].flatMap((e => e));
  }
  return [ e ];
}

var Pi = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", 
e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", 
e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", 
e))(Pi || {}), Ri = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", 
e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", 
e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", 
e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", 
e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", 
e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", 
e[e.CustomElement = 16] = "CustomElement", e))(Ri || {});

function Fi(e) {
  var t;
  return e instanceof Element && (e.id === He || !(null === (t = e.closest) || void 0 === t || !t.call(e, ".toolbar-global-fade-container")));
}

function Ti(e) {
  return !!e && 1 === e.nodeType;
}

function $i(e, t) {
  return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}

function Oi(e) {
  return !!e && 3 === e.nodeType;
}

function Mi(e) {
  return !!e && 11 === e.nodeType;
}

function Ai(e) {
  return e ? b(e).split(/\s+/) : [];
}

function Li(e) {
  var i = null == t ? void 0 : t.location.href;
  return !!(i && e && e.some((e => i.match(e))));
}

function Di(e) {
  var t = "";
  switch (typeof e.className) {
   case "string":
    t = e.className;
    break;

   case "object":
    t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
    break;

   default:
    t = "";
  }
  return Ai(t);
}

function Ni(e) {
  return O(e) ? null : b(e).split(/(\s+)/).filter((e => Qi(e))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}

function qi(e) {
  var t = "";
  return ji(e) && !Wi(e) && e.childNodes && e.childNodes.length && Y(e.childNodes, (function(e) {
    var i;
    Oi(e) && e.textContent && (t += null !== (i = Ni(e.textContent)) && void 0 !== i ? i : "");
  })), b(t);
}

function Bi(e) {
  return R(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
  var t;
}

var Hi = [ "a", "button", "form", "input", "select", "textarea", "label" ];

function Ui(e) {
  var t = e.parentNode;
  return !(!t || !Ti(t)) && t;
}

function zi(e, i) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 ? arguments[4] : void 0;
  if (!t || !e || $i(e, "html") || !Ti(e)) return !1;
  if (null != r && r.url_allowlist && !Li(r.url_allowlist)) return !1;
  if (null != r && r.url_ignorelist && Li(r.url_ignorelist)) return !1;
  if (null != r && r.dom_event_allowlist) {
    var o = r.dom_event_allowlist;
    if (o && !o.some((e => i.type === e))) return !1;
  }
  for (var a = !1, l = [ e ], c = !0, u = e; u.parentNode && !$i(u, "body"); ) if (Mi(u.parentNode)) l.push(u.parentNode.host), 
  u = u.parentNode.host; else {
    if (!(c = Ui(u))) break;
    if (s || Hi.indexOf(c.tagName.toLowerCase()) > -1) a = !0; else {
      var d = t.getComputedStyle(c);
      d && "pointer" === d.getPropertyValue("cursor") && (a = !0);
    }
    l.push(c), u = c;
  }
  if (!function(e, t) {
    var i = null == t ? void 0 : t.element_allowlist;
    if (R(i)) return !0;
    var r = function(e) {
      if (i.some((t => e.tagName.toLowerCase() === t))) return {
        v: !0
      };
    };
    for (var s of e) {
      var n = r(s);
      if ("object" == typeof n) return n.v;
    }
    return !1;
  }(l, r)) return !1;
  if (!function(e, t) {
    var i = null == t ? void 0 : t.css_selector_allowlist;
    if (R(i)) return !0;
    var r = function(e) {
      if (i.some((t => e.matches(t)))) return {
        v: !0
      };
    };
    for (var s of e) {
      var n = r(s);
      if ("object" == typeof n) return n.v;
    }
    return !1;
  }(l, r)) return !1;
  var h = t.getComputedStyle(e);
  if (h && "pointer" === h.getPropertyValue("cursor") && "click" === i.type) return !0;
  var _ = e.tagName.toLowerCase();
  switch (_) {
   case "html":
    return !1;

   case "form":
    return (n || [ "submit" ]).indexOf(i.type) >= 0;

   case "input":
   case "select":
   case "textarea":
    return (n || [ "change", "click" ]).indexOf(i.type) >= 0;

   default:
    return a ? (n || [ "click" ]).indexOf(i.type) >= 0 : (n || [ "click" ]).indexOf(i.type) >= 0 && (Hi.indexOf(_) > -1 || "true" === e.getAttribute("contenteditable"));
  }
}

function ji(e) {
  for (var t = e; t.parentNode && !$i(t, "body"); t = t.parentNode) {
    var i = Di(t);
    if (m(i, "ph-sensitive") || m(i, "ph-no-capture")) return !1;
  }
  if (m(Di(e), "ph-include")) return !0;
  var r = e.type || "";
  if (F(r)) switch (r.toLowerCase()) {
   case "hidden":
   case "password":
    return !1;
  }
  var s = e.name || e.id || "";
  if (F(s)) {
    if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(s.replace(/[^a-zA-Z0-9]/g, ""))) return !1;
  }
  return !0;
}

function Wi(e) {
  return !!($i(e, "input") && ![ "button", "checkbox", "submit", "reset" ].includes(e.type) || $i(e, "select") || $i(e, "textarea") || "true" === e.getAttribute("contenteditable"));
}

var Vi = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})", Gi = new RegExp("^(?:".concat(Vi, ")$")), Ji = new RegExp(Vi), Yi = "\\d{3}-?\\d{2}-?\\d{4}", Ki = new RegExp("^(".concat(Yi, ")$")), Xi = new RegExp("(".concat(Yi, ")"));

function Qi(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (O(e)) return !1;
  if (F(e)) {
    if (e = b(e), (t ? Gi : Ji).test((e || "").replace(/[- ]/g, ""))) return !1;
    if ((t ? Ki : Xi).test(e)) return !1;
  }
  return !0;
}

function Zi(e) {
  var t = qi(e);
  return Qi(t = "".concat(t, " ").concat(er(e)).trim()) ? t : "";
}

function er(e) {
  var t = "";
  return e && e.childNodes && e.childNodes.length && Y(e.childNodes, (function(e) {
    var i;
    if (e && "span" === (null === (i = e.tagName) || void 0 === i ? void 0 : i.toLowerCase())) try {
      var r = qi(e);
      t = "".concat(t, " ").concat(r).trim(), e.childNodes && e.childNodes.length && (t = "".concat(t, " ").concat(er(e)).trim());
    } catch (e) {
      q.error("[AutoCapture]", e);
    }
  })), t;
}

function tr(e) {
  return function(e) {
    var t = e.map((e => {
      var t, i, r = "";
      if (e.tag_name && (r += e.tag_name), e.attr_class) for (var s of (e.attr_class.sort(), 
      e.attr_class)) r += ".".concat(s.replace(/"/g, ""));
      var n = j(j(j(j({}, e.text ? {
        text: e.text
      } : {}), {}, {
        "nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
        "nth-of-type": null !== (i = e.nth_of_type) && void 0 !== i ? i : 0
      }, e.href ? {
        href: e.href
      } : {}), e.attr_id ? {
        attr_id: e.attr_id
      } : {}), e.attributes), o = {};
      return Q(n).sort(((e, t) => {
        var [i] = e, [r] = t;
        return i.localeCompare(r);
      })).forEach((e => {
        var [t, i] = e;
        return o[ir(t.toString())] = ir(i.toString());
      })), r += ":", r += Q(n).map((e => {
        var [t, i] = e;
        return "".concat(t, '="').concat(i, '"');
      })).join("");
    }));
    return t.join(";");
  }(function(e) {
    return e.map((e => {
      var t, i, r = {
        text: null === (t = e.$el_text) || void 0 === t ? void 0 : t.slice(0, 400),
        tag_name: e.tag_name,
        href: null === (i = e.attr__href) || void 0 === i ? void 0 : i.slice(0, 2048),
        attr_class: rr(e),
        attr_id: e.attr__id,
        nth_child: e.nth_child,
        nth_of_type: e.nth_of_type,
        attributes: {}
      };
      return Q(e).filter((e => {
        var [t] = e;
        return 0 === t.indexOf("attr__");
      })).forEach((e => {
        var [t, i] = e;
        return r.attributes[t] = i;
      })), r;
    }));
  }(e));
}

function ir(e) {
  return e.replace(/"|\\"/g, '\\"');
}

function rr(e) {
  var t = e.attr__class;
  return t ? x(t) ? t : Ai(t) : void 0;
}

var sr = "[SessionRecording]", nr = "redacted", or = {
  initiatorTypes: [ "audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest" ],
  maskRequestFn: e => e,
  recordHeaders: !1,
  recordBody: !1,
  recordInitialRequests: !1,
  recordPerformance: !1,
  performanceEntryTypeToObserve: [ "first-input", "navigation", "paint", "resource" ],
  payloadSizeLimitBytes: 1e6,
  payloadHostDenyList: [ ".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "analytics.google.com" ]
}, ar = [ "authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token" ], lr = [ "password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token" ], cr = [ "/s/", "/e/", "/i/" ];

function ur(e, t, i, r) {
  if (O(e)) return e;
  var s = (null == t ? void 0 : t["content-length"]) || function(e) {
    return new Blob([ e ]).size;
  }(e);
  return F(s) && (s = parseInt(s)), s > i ? sr + " ".concat(r, " body too large to record (").concat(s, " bytes)") : e;
}

function dr(e, t) {
  if (O(e)) return e;
  var i = e;
  return Qi(i, !1) || (i = sr + " " + t + " body " + nr), Y(lr, (e => {
    var r, s;
    null !== (r = i) && void 0 !== r && r.length && -1 !== (null === (s = i) || void 0 === s ? void 0 : s.indexOf(e)) && (i = sr + " " + t + " body " + nr + " as might contain: " + e);
  })), i;
}

var hr = (e, t) => {
  var i, r, s, n = {
    payloadSizeLimitBytes: or.payloadSizeLimitBytes,
    performanceEntryTypeToObserve: [ ...or.performanceEntryTypeToObserve ],
    payloadHostDenyList: [ ...t.payloadHostDenyList || [], ...or.payloadHostDenyList ]
  }, o = !1 !== e.session_recording.recordHeaders && t.recordHeaders, a = !1 !== e.session_recording.recordBody && t.recordBody, l = !1 !== e.capture_performance && t.recordPerformance, c = (i = n, 
  s = Math.min(1e6, null !== (r = i.payloadSizeLimitBytes) && void 0 !== r ? r : 1e6), 
  e => (null != e && e.requestBody && (e.requestBody = ur(e.requestBody, e.requestHeaders, s, "Request")), 
  null != e && e.responseBody && (e.responseBody = ur(e.responseBody, e.responseHeaders, s, "Response")), 
  e)), u = t => {
    return c(((e, t) => {
      var i, r = mt(e.name), s = 0 === t.indexOf("http") ? null === (i = mt(t)) || void 0 === i ? void 0 : i.pathname : t;
      "/" === s && (s = "");
      var n = null == r ? void 0 : r.pathname.replace(s || "", "");
      if (!(r && n && cr.some((e => 0 === n.indexOf(e))))) return e;
    })((r = (i = t).requestHeaders, O(r) || Y(Object.keys(null != r ? r : {}), (e => {
      ar.includes(e.toLowerCase()) && (r[e] = nr);
    })), i), e.api_host));
    var i, r;
  }, d = I(e.session_recording.maskNetworkRequestFn);
  return d && I(e.session_recording.maskCapturedNetworkRequestFn) && q.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), 
  d && (e.session_recording.maskCapturedNetworkRequestFn = t => {
    var i = e.session_recording.maskNetworkRequestFn({
      url: t.name
    });
    return j(j({}, t), {}, {
      name: null == i ? void 0 : i.url
    });
  }), n.maskRequestFn = I(e.session_recording.maskCapturedNetworkRequestFn) ? t => {
    var i, r, s, n = u(t);
    return n && null !== (i = null === (r = (s = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === r ? void 0 : r.call(s, n)) && void 0 !== i ? i : void 0;
  } : e => function(e) {
    if (!R(e)) return e.requestBody = dr(e.requestBody, "Request"), e.responseBody = dr(e.responseBody, "Response"), 
    e;
  }(u(e)), j(j(j({}, or), n), {}, {
    recordHeaders: o,
    recordBody: a,
    recordPerformance: l,
    recordInitialRequests: l
  });
};

function _r(e, t, i, r, s) {
  return t > i && (q.warn("min cannot be greater than max."), t = i), M(e) ? e > i ? (r && q.warn(r + " cannot be  greater than max: " + i + ". Using max value instead."), 
  i) : e < t ? (r && q.warn(r + " cannot be less than min: " + t + ". Using min value instead."), 
  t) : e : (r && q.warn(r + " must be a number. using max or fallback. max: " + i + ", fallback: " + s), 
  _r(s || i, t, i, r));
}

class pr {
  constructor(e) {
    var t, i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    W(this, "bucketSize", 100), W(this, "refillRate", 10), W(this, "mutationBuckets", {}), 
    W(this, "loggedTracker", {}), W(this, "refillBuckets", (() => {
      Object.keys(this.mutationBuckets).forEach((e => {
        this.mutationBuckets[e] = this.mutationBuckets[e] + this.refillRate, this.mutationBuckets[e] >= this.bucketSize && delete this.mutationBuckets[e];
      }));
    })), W(this, "getNodeOrRelevantParent", (e => {
      var t = this.rrweb.mirror.getNode(e);
      if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
        var i = t.closest("svg");
        if (i) return [ this.rrweb.mirror.getId(i), i ];
      }
      return [ e, t ];
    })), W(this, "numberOfChanges", (e => {
      var t, i, r, s, n, o, a, l;
      return (null !== (t = null === (i = e.removes) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0) + (null !== (r = null === (s = e.attributes) || void 0 === s ? void 0 : s.length) && void 0 !== r ? r : 0) + (null !== (n = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== n ? n : 0) + (null !== (a = null === (l = e.adds) || void 0 === l ? void 0 : l.length) && void 0 !== a ? a : 0);
    })), W(this, "throttleMutations", (e => {
      if (3 !== e.type || 0 !== e.data.source) return e;
      var t = e.data, i = this.numberOfChanges(t);
      t.attributes && (t.attributes = t.attributes.filter((e => {
        var t, i, r, [s, n] = this.getNodeOrRelevantParent(e.id);
        if (0 === this.mutationBuckets[s]) return !1;
        (this.mutationBuckets[s] = null !== (t = this.mutationBuckets[s]) && void 0 !== t ? t : this.bucketSize, 
        this.mutationBuckets[s] = Math.max(this.mutationBuckets[s] - 1, 0), 0 === this.mutationBuckets[s]) && (this.loggedTracker[s] || (this.loggedTracker[s] = !0, 
        null === (i = (r = this.options).onBlockedNode) || void 0 === i || i.call(r, s, n)));
        return e;
      })));
      var r = this.numberOfChanges(t);
      return 0 !== r || i === r ? e : void 0;
    })), this.rrweb = e, this.options = r, this.refillRate = _r(null !== (t = this.options.refillRate) && void 0 !== t ? t : this.refillRate, 0, 100, "mutation throttling refill rate"), 
    this.bucketSize = _r(null !== (i = this.options.bucketSize) && void 0 !== i ? i : this.bucketSize, 0, 100, "mutation throttling bucket size"), 
    setInterval((() => {
      this.refillBuckets();
    }), 1e3);
  }
}

var vr = Uint8Array, gr = Uint16Array, fr = Uint32Array, mr = new vr([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0 ]), br = new vr([ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0 ]), yr = new vr([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]), wr = function(e, t) {
  for (var i = new gr(31), r = 0; r < 31; ++r) i[r] = t += 1 << e[r - 1];
  var s = new fr(i[30]);
  for (r = 1; r < 30; ++r) for (var n = i[r]; n < i[r + 1]; ++n) s[n] = n - i[r] << 5 | r;
  return [ i, s ];
}, Sr = wr(mr, 2), kr = Sr[0], Er = Sr[1];

kr[28] = 258, Er[258] = 28;

for (var xr = wr(br, 0)[1], Ir = new gr(32768), Cr = 0; Cr < 32768; ++Cr) {
  var Pr = (43690 & Cr) >>> 1 | (21845 & Cr) << 1;
  Pr = (61680 & (Pr = (52428 & Pr) >>> 2 | (13107 & Pr) << 2)) >>> 4 | (3855 & Pr) << 4, 
  Ir[Cr] = ((65280 & Pr) >>> 8 | (255 & Pr) << 8) >>> 1;
}

var Rr = function(e, t, i) {
  for (var r = e.length, s = 0, n = new gr(t); s < r; ++s) ++n[e[s] - 1];
  var o, a = new gr(t);
  for (s = 0; s < t; ++s) a[s] = a[s - 1] + n[s - 1] << 1;
  if (i) {
    o = new gr(1 << t);
    var l = 15 - t;
    for (s = 0; s < r; ++s) if (e[s]) for (var c = s << 4 | e[s], u = t - e[s], d = a[e[s] - 1]++ << u, h = d | (1 << u) - 1; d <= h; ++d) o[Ir[d] >>> l] = c;
  } else for (o = new gr(r), s = 0; s < r; ++s) o[s] = Ir[a[e[s] - 1]++] >>> 15 - e[s];
  return o;
}, Fr = new vr(288);

for (Cr = 0; Cr < 144; ++Cr) Fr[Cr] = 8;

for (Cr = 144; Cr < 256; ++Cr) Fr[Cr] = 9;

for (Cr = 256; Cr < 280; ++Cr) Fr[Cr] = 7;

for (Cr = 280; Cr < 288; ++Cr) Fr[Cr] = 8;

var Tr = new vr(32);

for (Cr = 0; Cr < 32; ++Cr) Tr[Cr] = 5;

var $r = Rr(Fr, 9, 0), Or = Rr(Tr, 5, 0), Mr = function(e) {
  return (e / 8 >> 0) + (7 & e && 1);
}, Ar = function(e, t, i) {
  (null == i || i > e.length) && (i = e.length);
  var r = new (e instanceof gr ? gr : e instanceof fr ? fr : vr)(i - t);
  return r.set(e.subarray(t, i)), r;
}, Lr = function(e, t, i) {
  i <<= 7 & t;
  var r = t / 8 >> 0;
  e[r] |= i, e[r + 1] |= i >>> 8;
}, Dr = function(e, t, i) {
  i <<= 7 & t;
  var r = t / 8 >> 0;
  e[r] |= i, e[r + 1] |= i >>> 8, e[r + 2] |= i >>> 16;
}, Nr = function(e, t) {
  for (var i = [], r = 0; r < e.length; ++r) e[r] && i.push({
    s: r,
    f: e[r]
  });
  var s = i.length, n = i.slice();
  if (!s) return [ new vr(0), 0 ];
  if (1 == s) {
    var o = new vr(i[0].s + 1);
    return o[i[0].s] = 1, [ o, 1 ];
  }
  i.sort((function(e, t) {
    return e.f - t.f;
  })), i.push({
    s: -1,
    f: 25001
  });
  var a = i[0], l = i[1], c = 0, u = 1, d = 2;
  for (i[0] = {
    s: -1,
    f: a.f + l.f,
    l: a,
    r: l
  }; u != s - 1; ) a = i[i[c].f < i[d].f ? c++ : d++], l = i[c != u && i[c].f < i[d].f ? c++ : d++], 
  i[u++] = {
    s: -1,
    f: a.f + l.f,
    l: a,
    r: l
  };
  var h = n[0].s;
  for (r = 1; r < s; ++r) n[r].s > h && (h = n[r].s);
  var _ = new gr(h + 1), p = qr(i[u - 1], _, 0);
  if (p > t) {
    r = 0;
    var v = 0, g = p - t, f = 1 << g;
    for (n.sort((function(e, t) {
      return _[t.s] - _[e.s] || e.f - t.f;
    })); r < s; ++r) {
      var m = n[r].s;
      if (!(_[m] > t)) break;
      v += f - (1 << p - _[m]), _[m] = t;
    }
    for (v >>>= g; v > 0; ) {
      var b = n[r].s;
      _[b] < t ? v -= 1 << t - _[b]++ - 1 : ++r;
    }
    for (;r >= 0 && v; --r) {
      var y = n[r].s;
      _[y] == t && (--_[y], ++v);
    }
    p = t;
  }
  return [ new vr(_), p ];
}, qr = function(e, t, i) {
  return -1 == e.s ? Math.max(qr(e.l, t, i + 1), qr(e.r, t, i + 1)) : t[e.s] = i;
}, Br = function(e) {
  for (var t = e.length; t && !e[--t]; ) ;
  for (var i = new gr(++t), r = 0, s = e[0], n = 1, o = function(e) {
    i[r++] = e;
  }, a = 1; a <= t; ++a) if (e[a] == s && a != t) ++n; else {
    if (!s && n > 2) {
      for (;n > 138; n -= 138) o(32754);
      n > 2 && (o(n > 10 ? n - 11 << 5 | 28690 : n - 3 << 5 | 12305), n = 0);
    } else if (n > 3) {
      for (o(s), --n; n > 6; n -= 6) o(8304);
      n > 2 && (o(n - 3 << 5 | 8208), n = 0);
    }
    for (;n--; ) o(s);
    n = 1, s = e[a];
  }
  return [ i.subarray(0, r), t ];
}, Hr = function(e, t) {
  for (var i = 0, r = 0; r < t.length; ++r) i += e[r] * t[r];
  return i;
}, Ur = function(e, t, i) {
  var r = i.length, s = Mr(t + 2);
  e[s] = 255 & r, e[s + 1] = r >>> 8, e[s + 2] = 255 ^ e[s], e[s + 3] = 255 ^ e[s + 1];
  for (var n = 0; n < r; ++n) e[s + n + 4] = i[n];
  return 8 * (s + 4 + r);
}, zr = function(e, t, i, r, s, n, o, a, l, c, u) {
  Lr(t, u++, i), ++s[256];
  for (var d = Nr(s, 15), h = d[0], _ = d[1], p = Nr(n, 15), v = p[0], g = p[1], f = Br(h), m = f[0], b = f[1], y = Br(v), w = y[0], S = y[1], k = new gr(19), E = 0; E < m.length; ++E) k[31 & m[E]]++;
  for (E = 0; E < w.length; ++E) k[31 & w[E]]++;
  for (var x = Nr(k, 7), I = x[0], C = x[1], P = 19; P > 4 && !I[yr[P - 1]]; --P) ;
  var R, F, T, $, O = c + 5 << 3, M = Hr(s, Fr) + Hr(n, Tr) + o, A = Hr(s, h) + Hr(n, v) + o + 14 + 3 * P + Hr(k, I) + (2 * k[16] + 3 * k[17] + 7 * k[18]);
  if (O <= M && O <= A) return Ur(t, u, e.subarray(l, l + c));
  if (Lr(t, u, 1 + (A < M)), u += 2, A < M) {
    R = Rr(h, _, 0), F = h, T = Rr(v, g, 0), $ = v;
    var L = Rr(I, C, 0);
    Lr(t, u, b - 257), Lr(t, u + 5, S - 1), Lr(t, u + 10, P - 4), u += 14;
    for (E = 0; E < P; ++E) Lr(t, u + 3 * E, I[yr[E]]);
    u += 3 * P;
    for (var D = [ m, w ], N = 0; N < 2; ++N) {
      var q = D[N];
      for (E = 0; E < q.length; ++E) {
        var B = 31 & q[E];
        Lr(t, u, L[B]), u += I[B], B > 15 && (Lr(t, u, q[E] >>> 5 & 127), u += q[E] >>> 12);
      }
    }
  } else R = $r, F = Fr, T = Or, $ = Tr;
  for (E = 0; E < a; ++E) if (r[E] > 255) {
    B = r[E] >>> 18 & 31;
    Dr(t, u, R[B + 257]), u += F[B + 257], B > 7 && (Lr(t, u, r[E] >>> 23 & 31), u += mr[B]);
    var H = 31 & r[E];
    Dr(t, u, T[H]), u += $[H], H > 3 && (Dr(t, u, r[E] >>> 5 & 8191), u += br[H]);
  } else Dr(t, u, R[r[E]]), u += F[r[E]];
  return Dr(t, u, R[256]), u + F[256];
}, jr = new fr([ 65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632 ]), Wr = function() {
  for (var e = new fr(256), t = 0; t < 256; ++t) {
    for (var i = t, r = 9; --r; ) i = (1 & i && 3988292384) ^ i >>> 1;
    e[t] = i;
  }
  return e;
}(), Vr = function() {
  var e = 4294967295;
  return {
    p: function(t) {
      for (var i = e, r = 0; r < t.length; ++r) i = Wr[255 & i ^ t[r]] ^ i >>> 8;
      e = i;
    },
    d: function() {
      return 4294967295 ^ e;
    }
  };
}, Gr = function(e, t, i, r, s) {
  return function(e, t, i, r, s, n) {
    var o = e.length, a = new vr(r + o + 5 * (1 + Math.floor(o / 7e3)) + s), l = a.subarray(r, a.length - s), c = 0;
    if (!t || o < 8) for (var u = 0; u <= o; u += 65535) {
      var d = u + 65535;
      d < o ? c = Ur(l, c, e.subarray(u, d)) : (l[u] = n, c = Ur(l, c, e.subarray(u, o)));
    } else {
      for (var h = jr[t - 1], _ = h >>> 13, p = 8191 & h, v = (1 << i) - 1, g = new gr(32768), f = new gr(v + 1), m = Math.ceil(i / 3), b = 2 * m, y = function(t) {
        return (e[t] ^ e[t + 1] << m ^ e[t + 2] << b) & v;
      }, w = new fr(25e3), S = new gr(288), k = new gr(32), E = 0, x = 0, I = (u = 0, 
      0), C = 0, P = 0; u < o; ++u) {
        var R = y(u), F = 32767 & u, T = f[R];
        if (g[F] = T, f[R] = F, C <= u) {
          var $ = o - u;
          if ((E > 7e3 || I > 24576) && $ > 423) {
            c = zr(e, l, 0, w, S, k, x, I, P, u - P, c), I = E = x = 0, P = u;
            for (var O = 0; O < 286; ++O) S[O] = 0;
            for (O = 0; O < 30; ++O) k[O] = 0;
          }
          var M = 2, A = 0, L = p, D = F - T & 32767;
          if ($ > 2 && R == y(u - D)) for (var N = Math.min(_, $) - 1, q = Math.min(32767, u), B = Math.min(258, $); D <= q && --L && F != T; ) {
            if (e[u + M] == e[u + M - D]) {
              for (var H = 0; H < B && e[u + H] == e[u + H - D]; ++H) ;
              if (H > M) {
                if (M = H, A = D, H > N) break;
                var U = Math.min(D, H - 2), z = 0;
                for (O = 0; O < U; ++O) {
                  var j = u - D + O + 32768 & 32767, W = j - g[j] + 32768 & 32767;
                  W > z && (z = W, T = j);
                }
              }
            }
            D += (F = T) - (T = g[F]) + 32768 & 32767;
          }
          if (A) {
            w[I++] = 268435456 | Er[M] << 18 | xr[A];
            var V = 31 & Er[M], G = 31 & xr[A];
            x += mr[V] + br[G], ++S[257 + V], ++k[G], C = u + M, ++E;
          } else w[I++] = e[u], ++S[e[u]];
        }
      }
      c = zr(e, l, n, w, S, k, x, I, P, u - P, c);
    }
    return Ar(a, 0, r + Mr(c) + s);
  }(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, i, r, !s);
}, Jr = function(e, t, i) {
  for (;i; ++t) e[t] = i, i >>>= 8;
}, Yr = function(e, t) {
  var i = t.filename;
  if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, 
  e[9] = 3, 0 != t.mtime && Jr(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), 
  i) {
    e[3] = 8;
    for (var r = 0; r <= i.length; ++r) e[r + 10] = i.charCodeAt(r);
  }
}, Kr = function(e) {
  return 10 + (e.filename && e.filename.length + 1 || 0);
};

function Xr(e, t) {
  void 0 === t && (t = {});
  var i = Vr(), r = e.length;
  i.p(e);
  var s = Gr(e, t, Kr(t), 8), n = s.length;
  return Yr(s, t), Jr(s, n - 8, i.d()), Jr(s, n - 4, r), s;
}

function Qr(e, t) {
  var i = e.length;
  if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
  for (var r = new vr(e.length + (e.length >>> 1)), s = 0, n = function(e) {
    r[s++] = e;
  }, o = 0; o < i; ++o) {
    if (s + 5 > r.length) {
      var a = new vr(s + 8 + (i - o << 1));
      a.set(r), r = a;
    }
    var l = e.charCodeAt(o);
    l < 128 || t ? n(l) : l < 2048 ? (n(192 | l >>> 6), n(128 | 63 & l)) : l > 55295 && l < 57344 ? (n(240 | (l = 65536 + (1047552 & l) | 1023 & e.charCodeAt(++o)) >>> 18), 
    n(128 | l >>> 12 & 63), n(128 | l >>> 6 & 63), n(128 | 63 & l)) : (n(224 | l >>> 12), 
    n(128 | l >>> 6 & 63), n(128 | 63 & l));
  }
  return Ar(r, 0, s);
}

function Zr(e, t) {
  return function(e) {
    for (var t = 0, i = 0; i < e.length; i++) t = (t << 5) - t + e.charCodeAt(i), t |= 0;
    return Math.abs(t);
  }(e) % 100 < _r(100 * t, 0, 100);
}

var es = "[SessionRecording]", ts = B(es), is = 3e5, rs = [ Ri.MouseMove, Ri.MouseInteraction, Ri.Scroll, Ri.ViewportResize, Ri.Input, Ri.TouchMove, Ri.MediaInteraction, Ri.Drag ], ss = e => ({
  rrwebMethod: e,
  enqueuedAt: Date.now(),
  attempt: 1
});

function ns(e) {
  return function(e, t) {
    for (var i = "", r = 0; r < e.length; ) {
      var s = e[r++];
      s < 128 || t ? i += String.fromCharCode(s) : s < 224 ? i += String.fromCharCode((31 & s) << 6 | 63 & e[r++]) : s < 240 ? i += String.fromCharCode((15 & s) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : (s = ((15 & s) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536, 
      i += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s));
    }
    return i;
  }(Xr(Qr(JSON.stringify(e))), !0);
}

function os(e) {
  return e.type === Pi.Custom && "sessionIdle" === e.data.tag;
}

function as(e, t) {
  return t.some((t => "regex" === t.matching && new RegExp(t.url).test(e)));
}

class ls {
  get sessionIdleThresholdMilliseconds() {
    return this.instance.config.session_recording.session_idle_threshold_ms || 3e5;
  }
  get rrwebRecord() {
    var e, t;
    return null == _ || null === (e = _.__PosthogExtensions__) || void 0 === e || null === (t = e.rrweb) || void 0 === t ? void 0 : t.record;
  }
  get started() {
    return this._captureStarted;
  }
  get sessionManager() {
    if (!this.instance.sessionManager) throw new Error(es + " must be started with a valid sessionManager.");
    return this.instance.sessionManager;
  }
  get fullSnapshotIntervalMillis() {
    var e, t;
    return "trigger_pending" === this.triggerStatus ? 6e4 : null !== (e = null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.full_snapshot_interval_millis) && void 0 !== e ? e : is;
  }
  get isSampled() {
    var e = this.instance.get_property(Ee);
    return A(e) ? e : null;
  }
  get sessionDuration() {
    var e, t, i = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1], {sessionStartTimestamp: r} = this.sessionManager.checkAndGetSessionAndWindowId(!0);
    return i ? i.timestamp - r : null;
  }
  get isRecordingEnabled() {
    var e = !!this.instance.get_property(ge), i = !this.instance.config.disable_session_recording;
    return t && e && i;
  }
  get isConsoleLogCaptureEnabled() {
    var e = !!this.instance.get_property(fe), t = this.instance.config.enable_recording_console_log;
    return null != t ? t : e;
  }
  get canvasRecording() {
    var e, t, i, r, s, n, o = this.instance.config.session_recording.captureCanvas, a = this.instance.get_property(be), l = null !== (e = null !== (t = null == o ? void 0 : o.recordCanvas) && void 0 !== t ? t : null == a ? void 0 : a.enabled) && void 0 !== e && e, c = null !== (i = null !== (r = null == o ? void 0 : o.canvasFps) && void 0 !== r ? r : null == a ? void 0 : a.fps) && void 0 !== i ? i : 0, u = null !== (s = null !== (n = null == o ? void 0 : o.canvasQuality) && void 0 !== n ? n : null == a ? void 0 : a.quality) && void 0 !== s ? s : 0;
    return {
      enabled: l,
      fps: _r(c, 0, 12, "canvas recording fps"),
      quality: _r(u, 0, 1, "canvas recording quality")
    };
  }
  get networkPayloadCapture() {
    var e, t, i = this.instance.get_property(me), r = {
      recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
      recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
    }, s = (null == r ? void 0 : r.recordHeaders) || (null == i ? void 0 : i.recordHeaders), n = (null == r ? void 0 : r.recordBody) || (null == i ? void 0 : i.recordBody), o = C(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance, a = !!(A(o) ? o : null == i ? void 0 : i.capturePerformance);
    return s || n || a ? {
      recordHeaders: s,
      recordBody: n,
      recordPerformance: a
    } : void 0;
  }
  get sampleRate() {
    var e = this.instance.get_property(ye);
    return M(e) ? e : null;
  }
  get minimumDuration() {
    var e = this.instance.get_property(we);
    return M(e) ? e : null;
  }
  get status() {
    return this.receivedDecide ? this.isRecordingEnabled ? this._urlBlocked ? "paused" : O(this._linkedFlag) || this._linkedFlagSeen ? "trigger_pending" === this.triggerStatus ? "buffering" : A(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering";
  }
  get urlTriggerStatus() {
    var e;
    return 0 === this._urlTriggers.length ? "trigger_disabled" : (null === (e = this.instance) || void 0 === e ? void 0 : e.get_property(xe)) === this.sessionId ? "trigger_activated" : "trigger_pending";
  }
  get eventTriggerStatus() {
    var e;
    return 0 === this._eventTriggers.length ? "trigger_disabled" : (null === (e = this.instance) || void 0 === e ? void 0 : e.get_property(Ie)) === this.sessionId ? "trigger_activated" : "trigger_pending";
  }
  get triggerStatus() {
    var e = "trigger_activated" === this.eventTriggerStatus || "trigger_activated" === this.urlTriggerStatus, t = "trigger_pending" === this.eventTriggerStatus || "trigger_pending" === this.urlTriggerStatus;
    return e ? "trigger_activated" : t ? "trigger_pending" : "trigger_disabled";
  }
  constructor(e) {
    if (W(this, "queuedRRWebEvents", []), W(this, "isIdle", !1), W(this, "_linkedFlagSeen", !1), 
    W(this, "_lastActivityTimestamp", Date.now()), W(this, "_linkedFlag", null), W(this, "_removePageViewCaptureHook", void 0), 
    W(this, "_onSessionIdListener", void 0), W(this, "_persistDecideOnSessionListener", void 0), 
    W(this, "_samplingSessionListener", void 0), W(this, "_urlTriggers", []), W(this, "_urlBlocklist", []), 
    W(this, "_urlBlocked", !1), W(this, "_eventTriggers", []), W(this, "_removeEventTriggerCaptureHook", void 0), 
    W(this, "_forceAllowLocalhostNetworkCapture", !1), W(this, "_onBeforeUnload", (() => {
      this._flushBuffer();
    })), W(this, "_onOffline", (() => {
      this._tryAddCustomEvent("browser offline", {});
    })), W(this, "_onOnline", (() => {
      this._tryAddCustomEvent("browser online", {});
    })), W(this, "_onVisibilityChange", (() => {
      if (null != a && a.visibilityState) {
        var e = "window " + a.visibilityState;
        this._tryAddCustomEvent(e, {});
      }
    })), this.instance = e, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, 
    this.receivedDecide = !1, !this.instance.sessionManager) throw ts.error("started without valid sessionManager"), 
    new Error(es + " started without valid sessionManager. This is a bug.");
    if (this.instance.config.__preview_experimental_cookieless_mode) throw new Error(es + " cannot be used with __preview_experimental_cookieless_mode.");
    var {sessionId: t, windowId: i} = this.sessionManager.checkAndGetSessionAndWindowId();
    this.sessionId = t, this.windowId = i, this.buffer = this.clearBuffer(), this.sessionIdleThresholdMilliseconds >= this.sessionManager.sessionTimeoutMs && ts.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds, ") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs, "). Session will never be detected as idle"));
  }
  startIfEnabledOrStop(e) {
    this.isRecordingEnabled ? (this._startCapture(e), oe(t, "beforeunload", this._onBeforeUnload), 
    oe(t, "offline", this._onOffline), oe(t, "online", this._onOnline), oe(t, "visibilitychange", this._onVisibilityChange), 
    this._setupSampling(), this._addEventTriggerListener(), O(this._removePageViewCaptureHook) && (this._removePageViewCaptureHook = this.instance.on("eventCaptured", (e => {
      try {
        if ("$pageview" === e.event) {
          var t = null != e && e.properties.$current_url ? this._maskUrl(null == e ? void 0 : e.properties.$current_url) : "";
          if (!t) return;
          this._tryAddCustomEvent("$pageview", {
            href: t
          });
        }
      } catch (e) {
        ts.error("Could not add $pageview to rrweb session", e);
      }
    }))), this._onSessionIdListener || (this._onSessionIdListener = this.sessionManager.onSessionId(((e, t, i) => {
      var r, s, n, o;
      i && (this._tryAddCustomEvent("$session_id_change", {
        sessionId: e,
        windowId: t,
        changeReason: i
      }), null === (r = this.instance) || void 0 === r || null === (s = r.persistence) || void 0 === s || s.unregister(Ie), 
      null === (n = this.instance) || void 0 === n || null === (o = n.persistence) || void 0 === o || o.unregister(xe));
    })))) : this.stopRecording();
  }
  stopRecording() {
    var e, i, r, s;
    this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, 
    this._captureStarted = !1, null == t || t.removeEventListener("beforeunload", this._onBeforeUnload), 
    null == t || t.removeEventListener("offline", this._onOffline), null == t || t.removeEventListener("online", this._onOnline), 
    null == t || t.removeEventListener("visibilitychange", this._onVisibilityChange), 
    this.clearBuffer(), clearInterval(this._fullSnapshotTimer), null === (e = this._removePageViewCaptureHook) || void 0 === e || e.call(this), 
    this._removePageViewCaptureHook = void 0, null === (i = this._removeEventTriggerCaptureHook) || void 0 === i || i.call(this), 
    this._removeEventTriggerCaptureHook = void 0, null === (r = this._onSessionIdListener) || void 0 === r || r.call(this), 
    this._onSessionIdListener = void 0, null === (s = this._samplingSessionListener) || void 0 === s || s.call(this), 
    this._samplingSessionListener = void 0, ts.info("stopped"));
  }
  makeSamplingDecision(e) {
    var t, i = this.sessionId !== e, r = this.sampleRate;
    if (M(r)) {
      var s = this.isSampled, n = i || !A(s), o = n ? Zr(e, r) : s;
      n && (o ? this._reportStarted("sampled") : ts.warn("Sample rate (".concat(r, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), 
      this._tryAddCustomEvent("samplingDecisionMade", {
        sampleRate: r,
        isSampled: o
      })), null === (t = this.instance.persistence) || void 0 === t || t.register({
        [Ee]: o
      });
    } else {
      var a;
      null === (a = this.instance.persistence) || void 0 === a || a.register({
        [Ee]: null
      });
    }
  }
  onRemoteConfig(e) {
    var t, i, r, s, n, o;
    (this._tryAddCustomEvent("$remote_config_received", e), this._persistRemoteConfig(e), 
    this._linkedFlag = (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null, 
    null !== (i = e.sessionRecording) && void 0 !== i && i.endpoint) && (this._endpoint = null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.endpoint);
    if (this._setupSampling(), !O(this._linkedFlag) && !this._linkedFlagSeen) {
      var a = F(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag, l = F(this._linkedFlag) ? null : this._linkedFlag.variant;
      this.instance.onFeatureFlags(((e, t) => {
        var i = C(t) && a in t, r = l ? t[a] === l : i;
        r && this._reportStarted("linked_flag_matched", {
          linkedFlag: a,
          linkedVariant: l
        }), this._linkedFlagSeen = r;
      }));
    }
    null !== (r = e.sessionRecording) && void 0 !== r && r.urlTriggers && (this._urlTriggers = e.sessionRecording.urlTriggers), 
    null !== (s = e.sessionRecording) && void 0 !== s && s.urlBlocklist && (this._urlBlocklist = e.sessionRecording.urlBlocklist), 
    null !== (n = e.sessionRecording) && void 0 !== n && n.eventTriggers && (this._eventTriggers = e.sessionRecording.eventTriggers), 
    this.receivedDecide = !0, this.startIfEnabledOrStop();
  }
  _setupSampling() {
    M(this.sampleRate) && O(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId((e => {
      this.makeSamplingDecision(e);
    })));
  }
  _persistRemoteConfig(e) {
    if (this.instance.persistence) {
      var t, i = this.instance.persistence, r = () => {
        var t, r, s, n, o, a, l, c, u = null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.sampleRate, d = O(u) ? null : parseFloat(u), h = null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.minimumDurationMilliseconds;
        i.register({
          [ge]: !!e.sessionRecording,
          [fe]: null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.consoleLogRecordingEnabled,
          [me]: j({
            capturePerformance: e.capturePerformance
          }, null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.networkPayloadCapture),
          [be]: {
            enabled: null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.recordCanvas,
            fps: null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.canvasFps,
            quality: null === (l = e.sessionRecording) || void 0 === l ? void 0 : l.canvasQuality
          },
          [ye]: d,
          [we]: R(h) ? null : h,
          [Se]: null === (c = e.sessionRecording) || void 0 === c ? void 0 : c.scriptConfig
        });
      };
      r(), null === (t = this._persistDecideOnSessionListener) || void 0 === t || t.call(this), 
      this._persistDecideOnSessionListener = this.sessionManager.onSessionId(r);
    }
  }
  log(e) {
    var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
    null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
      type: 6,
      data: {
        plugin: "rrweb/console@1",
        payload: {
          level: i,
          trace: [],
          payload: [ JSON.stringify(e) ]
        }
      },
      timestamp: Date.now()
    });
  }
  _startCapture(e) {
    if (!R(Object.assign) && !R(Array.from) && !(this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut())) {
      var t, i;
      if (this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId(), 
      this.rrwebRecord) this._onScriptLoaded(); else null === (t = _.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, this.scriptName, (e => {
        if (e) return ts.error("could not load recorder", e);
        this._onScriptLoaded();
      }));
      ts.info("starting"), "active" === this.status && this._reportStarted(e || "recording_initialized");
    }
  }
  get scriptName() {
    var e, t, i;
    return (null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t || null === (i = t.get_property(Se)) || void 0 === i ? void 0 : i.script) || "recorder";
  }
  isInteractiveEvent(e) {
    var t;
    return 3 === e.type && -1 !== rs.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source);
  }
  _updateWindowAndSessionIds(e) {
    var t = this.isInteractiveEvent(e);
    t || this.isIdle || e.timestamp - this._lastActivityTimestamp > this.sessionIdleThresholdMilliseconds && (this.isIdle = !0, 
    clearInterval(this._fullSnapshotTimer), this._tryAddCustomEvent("sessionIdle", {
      eventTimestamp: e.timestamp,
      lastActivityTimestamp: this._lastActivityTimestamp,
      threshold: this.sessionIdleThresholdMilliseconds,
      bufferLength: this.buffer.data.length,
      bufferSize: this.buffer.size
    }), this._flushBuffer());
    var i = !1;
    if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, 
    this._tryAddCustomEvent("sessionNoLongerIdle", {
      reason: "user activity",
      type: e.type
    }), i = !0)), !this.isIdle) {
      var {windowId: r, sessionId: s} = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp), n = this.sessionId !== s, o = this.windowId !== r;
      this.windowId = r, this.sessionId = s, n || o ? (this.stopRecording(), this.startIfEnabledOrStop("session_id_changed")) : i && this._scheduleFullSnapshot();
    }
  }
  _tryRRWebMethod(e) {
    try {
      return e.rrwebMethod(), !0;
    } catch (t) {
      return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
        enqueuedAt: e.enqueuedAt || Date.now(),
        attempt: e.attempt++,
        rrwebMethod: e.rrwebMethod
      }) : ts.warn("could not emit queued rrweb event.", t, e), !1;
    }
  }
  _tryAddCustomEvent(e, t) {
    return this._tryRRWebMethod(ss((() => this.rrwebRecord.addCustomEvent(e, t))));
  }
  _tryTakeFullSnapshot() {
    return this._tryRRWebMethod(ss((() => this.rrwebRecord.takeFullSnapshot())));
  }
  _onScriptLoaded() {
    var e, t = {
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
    }, i = this.instance.config.session_recording;
    for (var [r, s] of Object.entries(i || {})) r in t && ("maskInputOptions" === r ? t.maskInputOptions = j({
      password: !0
    }, s) : t[r] = s);
    if (this.canvasRecording && this.canvasRecording.enabled && (t.recordCanvas = !0, 
    t.sampling = {
      canvas: this.canvasRecording.fps
    }, t.dataURLOptions = {
      type: "image/webp",
      quality: this.canvasRecording.quality
    }), this.rrwebRecord) {
      this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new pr(this.rrwebRecord, {
        refillRate: this.instance.config.session_recording.__mutationRateLimiterRefillRate,
        bucketSize: this.instance.config.session_recording.__mutationRateLimiterBucketSize,
        onBlockedNode: (e, t) => {
          var i = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
          ts.info(i, {
            node: t
          }), this.log(es + " " + i, "warn");
        }
      });
      var n = this._gatherRRWebPlugins();
      this.stopRrweb = this.rrwebRecord(j({
        emit: e => {
          this.onRRwebEmit(e);
        },
        plugins: n
      }, t)), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
        sessionRecordingOptions: t,
        activePlugins: n.map((e => null == e ? void 0 : e.name))
      }), this._tryAddCustomEvent("$posthog_config", {
        config: this.instance.config
      });
    } else ts.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
  }
  _scheduleFullSnapshot() {
    if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle) {
      var e = this.fullSnapshotIntervalMillis;
      e && (this._fullSnapshotTimer = setInterval((() => {
        this._tryTakeFullSnapshot();
      }), e));
    }
  }
  _gatherRRWebPlugins() {
    var e, t, i, r, s = [], n = null === (e = _.__PosthogExtensions__) || void 0 === e || null === (t = e.rrwebPlugins) || void 0 === t ? void 0 : t.getRecordConsolePlugin;
    n && this.isConsoleLogCaptureEnabled && s.push(n());
    var o = null === (i = _.__PosthogExtensions__) || void 0 === i || null === (r = i.rrwebPlugins) || void 0 === r ? void 0 : r.getRecordNetworkPlugin;
    this.networkPayloadCapture && I(o) && (!ft.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? s.push(o(hr(this.instance.config, this.networkPayloadCapture))) : ts.info("NetworkCapture not started because we are on localhost."));
    return s;
  }
  onRRwebEmit(e) {
    var t;
    if (this._processQueuedEvents(), e && C(e)) {
      if (e.type === Pi.Meta) {
        var i = this._maskUrl(e.data.href);
        if (this._lastHref = i, !i) return;
        e.data.href = i;
      } else this._pageViewFallBack();
      if (this._checkUrlTriggerConditions(), "paused" !== this.status || function(e) {
        return e.type === Pi.Custom && "recording paused" === e.data.tag;
      }(e)) {
        e.type === Pi.FullSnapshot && this._scheduleFullSnapshot(), e.type === Pi.FullSnapshot && "trigger_pending" === this.triggerStatus && this.clearBuffer();
        var r = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
        if (r) {
          var s = function(e) {
            var t = e;
            if (t && C(t) && 6 === t.type && C(t.data) && "rrweb/console@1" === t.data.plugin) {
              t.data.payload.payload.length > 10 && (t.data.payload.payload = t.data.payload.payload.slice(0, 10), 
              t.data.payload.payload.push("...[truncated]"));
              for (var i = [], r = 0; r < t.data.payload.payload.length; r++) t.data.payload.payload[r] && t.data.payload.payload[r].length > 2e3 ? i.push(t.data.payload.payload[r].slice(0, 2e3) + "...[truncated]") : i.push(t.data.payload.payload[r]);
              return t.data.payload.payload = i, e;
            }
            return e;
          }(r);
          if (this._updateWindowAndSessionIds(s), !this.isIdle || os(s)) {
            if (os(s)) {
              var n = s.data.payload;
              if (n) {
                var o = n.lastActivityTimestamp, a = n.threshold;
                s.timestamp = o + a;
              }
            }
            var l = null === (t = this.instance.config.session_recording.compress_events) || void 0 === t || t ? function(e) {
              if (Ii(e) < 1024) return e;
              try {
                if (e.type === Pi.FullSnapshot) return j(j({}, e), {}, {
                  data: ns(e.data),
                  cv: "2024-10"
                });
                if (e.type === Pi.IncrementalSnapshot && e.data.source === Ri.Mutation) return j(j({}, e), {}, {
                  cv: "2024-10",
                  data: j(j({}, e.data), {}, {
                    texts: ns(e.data.texts),
                    attributes: ns(e.data.attributes),
                    removes: ns(e.data.removes),
                    adds: ns(e.data.adds)
                  })
                });
                if (e.type === Pi.IncrementalSnapshot && e.data.source === Ri.StyleSheetRule) return j(j({}, e), {}, {
                  cv: "2024-10",
                  data: j(j({}, e.data), {}, {
                    adds: ns(e.data.adds),
                    removes: ns(e.data.removes)
                  })
                });
              } catch (e) {
                ts.error("could not compress event - will use uncompressed event", e);
              }
              return e;
            }(s) : s, c = {
              $snapshot_bytes: Ii(l),
              $snapshot_data: l,
              $session_id: this.sessionId,
              $window_id: this.windowId
            };
            "disabled" !== this.status ? this._captureSnapshotBuffered(c) : this.clearBuffer();
          }
        }
      }
    }
  }
  _pageViewFallBack() {
    if (!this.instance.config.capture_pageview && t) {
      var e = this._maskUrl(t.location.href);
      this._lastHref !== e && (this._tryAddCustomEvent("$url_changed", {
        href: e
      }), this._lastHref = e);
    }
  }
  _processQueuedEvents() {
    if (this.queuedRRWebEvents.length) {
      var e = [ ...this.queuedRRWebEvents ];
      this.queuedRRWebEvents = [], e.forEach((e => {
        Date.now() - e.enqueuedAt <= 2e3 && this._tryRRWebMethod(e);
      }));
    }
  }
  _maskUrl(e) {
    var t = this.instance.config.session_recording;
    if (t.maskNetworkRequestFn) {
      var i, r = {
        url: e
      };
      return null === (i = r = t.maskNetworkRequestFn(r)) || void 0 === i ? void 0 : i.url;
    }
    return e;
  }
  clearBuffer() {
    return this.buffer = {
      size: 0,
      data: [],
      sessionId: this.sessionId,
      windowId: this.windowId
    }, this.buffer;
  }
  _flushBuffer() {
    this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
    var e = this.minimumDuration, t = this.sessionDuration, i = M(t) && t >= 0, r = M(e) && i && t < e;
    if ("buffering" === this.status || "paused" === this.status || r) return this.flushBufferTimer = setTimeout((() => {
      this._flushBuffer();
    }), 2e3), this.buffer;
    this.buffer.data.length > 0 && Ci(this.buffer).forEach((e => {
      this._captureSnapshot({
        $snapshot_bytes: e.size,
        $snapshot_data: e.data,
        $session_id: e.sessionId,
        $window_id: e.windowId,
        $lib: "web",
        $lib_version: p.LIB_VERSION
      });
    }));
    return this.clearBuffer();
  }
  _captureSnapshotBuffered(e) {
    var t, i = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
    !this.isIdle && (this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), 
    this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), 
    this.flushBufferTimer || this.isIdle || (this.flushBufferTimer = setTimeout((() => {
      this._flushBuffer();
    }), 2e3));
  }
  _captureSnapshot(e) {
    this.instance.capture("$snapshot", e, {
      _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
      _noTruncate: !0,
      _batchKey: "recordings",
      skip_client_rate_limiting: !0
    });
  }
  _checkUrlTriggerConditions() {
    if (void 0 !== t && t.location.href) {
      var e = t.location.href, i = "paused" === this.status, r = as(e, this._urlBlocklist);
      r && !i ? this._pauseRecording() : !r && i && this._resumeRecording(), as(e, this._urlTriggers) && this._activateTrigger("url");
    }
  }
  _activateTrigger(e) {
    var t, i;
    "trigger_pending" === this.triggerStatus && (null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i || i.register({
      ["url" === e ? xe : Ie]: this.sessionId
    }), this._flushBuffer(), this._reportStarted(e + "_trigger_matched"));
  }
  _pauseRecording() {
    "paused" !== this.status && (this._urlBlocked = !0, clearInterval(this._fullSnapshotTimer), 
    ts.info("recording paused due to URL blocker"), this._tryAddCustomEvent("recording paused", {
      reason: "url blocker"
    }));
  }
  _resumeRecording() {
    "paused" === this.status && (this._urlBlocked = !1, this._tryTakeFullSnapshot(), 
    this._scheduleFullSnapshot(), this._tryAddCustomEvent("recording resumed", {
      reason: "left blocked url"
    }), ts.info("recording resumed"));
  }
  _addEventTriggerListener() {
    0 !== this._eventTriggers.length && O(this._removeEventTriggerCaptureHook) && (this._removeEventTriggerCaptureHook = this.instance.on("eventCaptured", (e => {
      try {
        this._eventTriggers.includes(e.event) && this._activateTrigger("event");
      } catch (e) {
        ts.error("Could not activate event trigger", e);
      }
    })));
  }
  overrideLinkedFlag() {
    this._linkedFlagSeen = !0, this._tryTakeFullSnapshot(), this._reportStarted("linked_flag_overridden");
  }
  overrideSampling() {
    var e;
    null === (e = this.instance.persistence) || void 0 === e || e.register({
      [Ee]: !0
    }), this._tryTakeFullSnapshot(), this._reportStarted("sampling_overridden");
  }
  overrideTrigger(e) {
    this._activateTrigger(e);
  }
  _reportStarted(e, t) {
    this.instance.register_for_session({
      $session_recording_start_reason: e
    }), ts.info(e.replace("_", " "), t), m([ "recording_initialized", "session_id_changed" ], e) || this._tryAddCustomEvent(e, t);
  }
}

var cs = B("[RemoteConfig]");

class us {
  constructor(e) {
    this.instance = e;
  }
  get remoteConfig() {
    var e, t;
    return null === (e = _._POSTHOG_REMOTE_CONFIG) || void 0 === e || null === (t = e[this.instance.config.token]) || void 0 === t ? void 0 : t.config;
  }
  _loadRemoteConfigJs(e) {
    var t, i, r;
    null !== (t = _.__PosthogExtensions__) && void 0 !== t && t.loadExternalDependency ? null === (i = _.__PosthogExtensions__) || void 0 === i || null === (r = i.loadExternalDependency) || void 0 === r || r.call(i, this.instance, "remote-config", (() => e(this.remoteConfig))) : (cs.error("PostHog Extensions not found. Cannot load remote config."), 
    e());
  }
  _loadRemoteConfigJSON(e) {
    this.instance._send_request({
      method: "GET",
      url: this.instance.requestRouter.endpointFor("assets", "/array/".concat(this.instance.config.token, "/config")),
      callback: t => {
        e(t.json);
      }
    });
  }
  load() {
    try {
      if (this.remoteConfig) return cs.info("Using preloaded remote config", this.remoteConfig), 
      void this.onRemoteConfig(this.remoteConfig);
      if (this.instance.config.advanced_disable_decide) return void cs.warn("Remote config is disabled. Falling back to local config.");
      this._loadRemoteConfigJs((e => {
        if (!e) return cs.info("No config found after loading remote JS config. Falling back to JSON."), 
        void this._loadRemoteConfigJSON((e => {
          this.onRemoteConfig(e);
        }));
        this.onRemoteConfig(e);
      }));
    } catch (e) {
      cs.error("Error loading remote config", e);
    }
  }
  onRemoteConfig(e) {
    e ? this.instance.config.__preview_remote_config ? (this.instance._onRemoteConfig(e), 
    !1 !== e.hasFeatureFlags && this.instance.featureFlags.ensureFlagsLoaded()) : cs.info("__preview_remote_config is disabled. Logging config instead", e) : cs.error("Failed to fetch remote config from PostHog.");
  }
}

var ds, hs = null != t && t.location ? kt(t.location.hash, "__posthog") || kt(location.hash, "state") : null, _s = "_postHogToolbarParams", ps = B("[Toolbar]");

!function(e) {
  e[e.UNINITIALIZED = 0] = "UNINITIALIZED", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED";
}(ds || (ds = {}));

class vs {
  constructor(e) {
    this.instance = e;
  }
  setToolbarState(e) {
    _.ph_toolbar_state = e;
  }
  getToolbarState() {
    var e;
    return null !== (e = _.ph_toolbar_state) && void 0 !== e ? e : ds.UNINITIALIZED;
  }
  maybeLoadToolbar() {
    var e, i, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    if (!t || !a) return !1;
    r = null !== (e = r) && void 0 !== e ? e : t.location, n = null !== (i = n) && void 0 !== i ? i : t.history;
    try {
      if (!s) {
        try {
          t.localStorage.setItem("test", "test"), t.localStorage.removeItem("test");
        } catch (e) {
          return !1;
        }
        s = null == t ? void 0 : t.localStorage;
      }
      var o, l = hs || kt(r.hash, "__posthog") || kt(r.hash, "state"), c = l ? Z((() => JSON.parse(atob(decodeURIComponent(l))))) || Z((() => JSON.parse(decodeURIComponent(l)))) : null;
      return c && "ph_authorize" === c.action ? ((o = c).source = "url", o && Object.keys(o).length > 0 && (c.desiredHash ? r.hash = c.desiredHash : n ? n.replaceState(n.state, "", r.pathname + r.search) : r.hash = "")) : ((o = JSON.parse(s.getItem(_s) || "{}")).source = "localstorage", 
      delete o.userIntent), !(!o.token || this.instance.config.token !== o.token) && (this.loadToolbar(o), 
      !0);
    } catch (e) {
      return !1;
    }
  }
  _callLoadToolbar(e) {
    var t = _.ph_load_toolbar || _.ph_load_editor;
    !O(t) && I(t) ? t(e, this.instance) : ps.warn("No toolbar load function found");
  }
  loadToolbar(e) {
    var i = !(null == a || !a.getElementById(He));
    if (!t || i) return !1;
    var r = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, s = j(j({
      token: this.instance.config.token
    }, e), {}, {
      apiURL: this.instance.requestRouter.endpointFor("ui")
    }, r ? {
      instrument: !1
    } : {});
    if (t.localStorage.setItem(_s, JSON.stringify(j(j({}, s), {}, {
      source: void 0
    }))), this.getToolbarState() === ds.LOADED) this._callLoadToolbar(s); else if (this.getToolbarState() === ds.UNINITIALIZED) {
      var n, o;
      this.setToolbarState(ds.LOADING), null === (n = _.__PosthogExtensions__) || void 0 === n || null === (o = n.loadExternalDependency) || void 0 === o || o.call(n, this.instance, "toolbar", (e => {
        if (e) return ps.error("[Toolbar] Failed to load", e), void this.setToolbarState(ds.UNINITIALIZED);
        this.setToolbarState(ds.LOADED), this._callLoadToolbar(s);
      })), oe(t, "turbolinks:load", (() => {
        this.setToolbarState(ds.UNINITIALIZED), this.loadToolbar(s);
      }));
    }
    return !0;
  }
  _loadEditor(e) {
    return this.loadToolbar(e);
  }
  maybeLoadEditor() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    return this.maybeLoadToolbar(e, t, i);
  }
}

class gs {
  constructor(e) {
    W(this, "isPaused", !0), W(this, "queue", []), W(this, "flushTimeoutMs", 3e3), this.sendRequest = e;
  }
  enqueue(e) {
    this.queue.push(e), this.flushTimeout || this.setFlushTimeout();
  }
  unload() {
    this.clearFlushTimeout();
    var e = this.queue.length > 0 ? this.formatQueue() : {}, t = Object.values(e), i = [ ...t.filter((e => 0 === e.url.indexOf("/e"))), ...t.filter((e => 0 !== e.url.indexOf("/e"))) ];
    i.map((e => {
      this.sendRequest(j(j({}, e), {}, {
        transport: "sendBeacon"
      }));
    }));
  }
  enable() {
    this.isPaused = !1, this.setFlushTimeout();
  }
  setFlushTimeout() {
    var e = this;
    this.isPaused || (this.flushTimeout = setTimeout((() => {
      if (this.clearFlushTimeout(), this.queue.length > 0) {
        var t = this.formatQueue(), i = function(i) {
          var r = t[i], s = (new Date).getTime();
          r.data && x(r.data) && Y(r.data, (e => {
            e.offset = Math.abs(e.timestamp - s), delete e.timestamp;
          })), e.sendRequest(r);
        };
        for (var r in t) i(r);
      }
    }), this.flushTimeoutMs));
  }
  clearFlushTimeout() {
    clearTimeout(this.flushTimeout), this.flushTimeout = void 0;
  }
  formatQueue() {
    var e = {};
    return Y(this.queue, (t => {
      var i, r = t, s = (r ? r.batchKey : null) || r.url;
      R(e[s]) && (e[s] = j(j({}, r), {}, {
        data: []
      })), null === (i = e[s].data) || void 0 === i || i.push(r.data);
    })), this.queue = [], e;
  }
}

var fs = function(e) {
  var t, i, r, s, n = "";
  for (t = i = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, 
  s = 0; s < r; s++) {
    var o = e.charCodeAt(s), a = null;
    o < 128 ? i++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), 
    $(a) || (i > t && (n += e.substring(t, i)), n += a, t = i = s + 1);
  }
  return i > t && (n += e.substring(t, e.length)), n;
}, ms = !!u || !!c, bs = "text/plain", ys = (e, t) => {
  var [i, r] = e.split("?"), s = j({}, t);
  null == r || r.split("&").forEach((e => {
    var [t] = e.split("=");
    delete s[t];
  }));
  var n = yt(s);
  return n = n ? (r ? r + "&" : "") + n : r, "".concat(i, "?").concat(n);
}, ws = (e, t) => JSON.stringify(e, ((e, t) => "bigint" == typeof t ? t.toString() : t), t), Ss = t => {
  var {data: i, compression: r} = t;
  if (i) {
    if (r === e.GZipJS) {
      var s = Xr(Qr(ws(i)), {
        mtime: 0
      }), n = new Blob([ s ], {
        type: bs
      });
      return {
        contentType: bs,
        body: n,
        estimatedSize: n.size
      };
    }
    if (r === e.Base64) {
      var o = function(e) {
        var t, i, r, s, n, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, l = 0, c = "", u = [];
        if (!e) return e;
        e = fs(e);
        do {
          t = (n = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, 
          i = n >> 12 & 63, r = n >> 6 & 63, s = 63 & n, u[l++] = o.charAt(t) + o.charAt(i) + o.charAt(r) + o.charAt(s);
        } while (a < e.length);
        switch (c = u.join(""), e.length % 3) {
         case 1:
          c = c.slice(0, -2) + "==";
          break;

         case 2:
          c = c.slice(0, -1) + "=";
        }
        return c;
      }(ws(i)), a = (e => "data=" + encodeURIComponent("string" == typeof e ? e : ws(e)))(o);
      return {
        contentType: "application/x-www-form-urlencoded",
        body: a,
        estimatedSize: new Blob([ a ]).size
      };
    }
    var l = ws(i);
    return {
      contentType: "application/json",
      body: l,
      estimatedSize: new Blob([ l ]).size
    };
  }
}, ks = [];

c && ks.push({
  transport: "fetch",
  method: e => {
    var t, i, {contentType: r, body: s, estimatedSize: n} = null !== (t = Ss(e)) && void 0 !== t ? t : {}, o = new Headers;
    Y(e.headers, (function(e, t) {
      o.append(t, e);
    })), r && o.append("Content-Type", r);
    var a = e.url, l = null;
    if (d) {
      var u = new d;
      l = {
        signal: u.signal,
        timeout: setTimeout((() => u.abort()), e.timeout)
      };
    }
    c(a, j({
      method: (null == e ? void 0 : e.method) || "GET",
      headers: o,
      keepalive: "POST" === e.method && (n || 0) < 52428.8,
      body: s,
      signal: null === (i = l) || void 0 === i ? void 0 : i.signal
    }, e.fetchOptions)).then((t => t.text().then((i => {
      var r, s = {
        statusCode: t.status,
        text: i
      };
      if (200 === t.status) try {
        s.json = JSON.parse(i);
      } catch (e) {
        q.error(e);
      }
      null === (r = e.callback) || void 0 === r || r.call(e, s);
    })))).catch((t => {
      var i;
      q.error(t), null === (i = e.callback) || void 0 === i || i.call(e, {
        statusCode: 0,
        text: t
      });
    })).finally((() => l ? clearTimeout(l.timeout) : null));
  }
}), u && ks.push({
  transport: "XHR",
  method: e => {
    var t, i = new u;
    i.open(e.method || "GET", e.url, !0);
    var {contentType: r, body: s} = null !== (t = Ss(e)) && void 0 !== t ? t : {};
    Y(e.headers, (function(e, t) {
      i.setRequestHeader(t, e);
    })), r && i.setRequestHeader("Content-Type", r), e.timeout && (i.timeout = e.timeout), 
    i.withCredentials = !0, i.onreadystatechange = () => {
      if (4 === i.readyState) {
        var t, r = {
          statusCode: i.status,
          text: i.responseText
        };
        if (200 === i.status) try {
          r.json = JSON.parse(i.responseText);
        } catch (e) {}
        null === (t = e.callback) || void 0 === t || t.call(e, r);
      }
    }, i.send(s);
  }
}), null != o && o.sendBeacon && ks.push({
  transport: "sendBeacon",
  method: e => {
    var t = ys(e.url, {
      beacon: "1"
    });
    try {
      var i, {contentType: r, body: s} = null !== (i = Ss(e)) && void 0 !== i ? i : {}, n = "string" == typeof s ? new Blob([ s ], {
        type: r
      }) : s;
      o.sendBeacon(t, n);
    } catch (e) {}
  }
});

var Es = [ "retriesPerformedSoFar" ];

class xs {
  constructor(e) {
    W(this, "isPolling", !1), W(this, "pollIntervalMs", 3e3), W(this, "queue", []), 
    this.instance = e, this.queue = [], this.areWeOnline = !0, !R(t) && "onLine" in t.navigator && (this.areWeOnline = t.navigator.onLine, 
    oe(t, "online", (() => {
      this.areWeOnline = !0, this.flush();
    })), oe(t, "offline", (() => {
      this.areWeOnline = !1;
    })));
  }
  retriableRequest(e) {
    var {retriesPerformedSoFar: t} = e, i = V(e, Es);
    M(t) && t > 0 && (i.url = ys(i.url, {
      retry_count: t
    })), this.instance._send_request(j(j({}, i), {}, {
      callback: e => {
        var r;
        200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != t ? t : 0) < 10 ? this.enqueue(j({
          retriesPerformedSoFar: t
        }, i)) : null === (r = i.callback) || void 0 === r || r.call(i, e);
      }
    }));
  }
  enqueue(e) {
    var t = e.retriesPerformedSoFar || 0;
    e.retriesPerformedSoFar = t + 1;
    var i = function(e) {
      var t = 3e3 * Math.pow(2, e), i = t / 2, r = Math.min(18e5, t), s = (Math.random() - .5) * (r - i);
      return Math.ceil(r + s);
    }(t), r = Date.now() + i;
    this.queue.push({
      retryAt: r,
      requestOptions: e
    });
    var s = "Enqueued failed request for retry in ".concat(i);
    navigator.onLine || (s += " (Browser is offline)"), q.warn(s), this.isPolling || (this.isPolling = !0, 
    this.poll());
  }
  poll() {
    this.poller && clearTimeout(this.poller), this.poller = setTimeout((() => {
      this.areWeOnline && this.queue.length > 0 && this.flush(), this.poll();
    }), this.pollIntervalMs);
  }
  flush() {
    var e = Date.now(), t = [], i = this.queue.filter((i => i.retryAt < e || (t.push(i), 
    !1)));
    if (this.queue = t, i.length > 0) for (var {requestOptions: r} of i) this.retriableRequest(r);
  }
  unload() {
    for (var {requestOptions: e} of (this.poller && (clearTimeout(this.poller), this.poller = void 0), 
    this.queue)) try {
      this.instance._send_request(j(j({}, e), {}, {
        transport: "sendBeacon"
      }));
    } catch (e) {
      q.error(e);
    }
    this.queue = [];
  }
}

var Is, Cs = B("[SessionId]");

class Ps {
  constructor(e, t, i) {
    var r;
    if (W(this, "_sessionIdChangedHandlers", []), !e.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
    if (e.config.__preview_experimental_cookieless_mode) throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode");
    this.config = e.config, this.persistence = e.persistence, this._windowId = void 0, 
    this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, 
    this._sessionIdGenerator = t || it, this._windowIdGenerator = i || it;
    var s = this.config.persistence_name || this.config.token, n = this.config.session_idle_timeout_seconds || 1800;
    if (this._sessionTimeoutMs = 1e3 * _r(n, 60, 36e3, "session_idle_timeout_seconds", 1800), 
    e.register({
      $configured_session_timeout_ms: this._sessionTimeoutMs
    }), this.resetIdleTimer(), this._window_id_storage_key = "ph_" + s + "_window_id", 
    this._primary_window_exists_storage_key = "ph_" + s + "_primary_window_exists", 
    this._canUseSessionStorage()) {
      var o = gt.parse(this._window_id_storage_key), a = gt.parse(this._primary_window_exists_storage_key);
      o && !a ? this._windowId = o : gt.remove(this._window_id_storage_key), gt.set(this._primary_window_exists_storage_key, !0);
    }
    if (null !== (r = this.config.bootstrap) && void 0 !== r && r.sessionID) try {
      var l = (e => {
        var t = e.replace(/-/g, "");
        if (32 !== t.length) throw new Error("Not a valid UUID");
        if ("7" !== t[12]) throw new Error("Not a UUIDv7");
        return parseInt(t.substring(0, 12), 16);
      })(this.config.bootstrap.sessionID);
      this._setSessionId(this.config.bootstrap.sessionID, (new Date).getTime(), l);
    } catch (e) {
      Cs.error("Invalid sessionID in bootstrap", e);
    }
    this._listenToReloadWindow();
  }
  get sessionTimeoutMs() {
    return this._sessionTimeoutMs;
  }
  onSessionId(e) {
    return R(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), 
    this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId), 
    () => {
      this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((t => t !== e));
    };
  }
  _canUseSessionStorage() {
    return "memory" !== this.config.persistence && !this.persistence.disabled && gt.is_supported();
  }
  _setWindowId(e) {
    e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && gt.set(this._window_id_storage_key, e));
  }
  _getWindowId() {
    return this._windowId ? this._windowId : this._canUseSessionStorage() ? gt.parse(this._window_id_storage_key) : null;
  }
  _setSessionId(e, t, i) {
    e === this._sessionId && t === this._sessionActivityTimestamp && i === this._sessionStartTimestamp || (this._sessionStartTimestamp = i, 
    this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register({
      [ke]: [ t, e, i ]
    }));
  }
  _getSessionId() {
    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [ this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp ];
    var e = this.persistence.props[ke];
    return x(e) && 2 === e.length && e.push(e[0]), e || [ 0, null, 0 ];
  }
  resetSessionId() {
    this._setSessionId(null, null, null);
  }
  _listenToReloadWindow() {
    oe(t, "beforeunload", (() => {
      this._canUseSessionStorage() && gt.remove(this._primary_window_exists_storage_key);
    }), {
      capture: !1
    });
  }
  checkAndGetSessionAndWindowId() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (this.config.__preview_experimental_cookieless_mode) throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode");
    var i = t || (new Date).getTime(), [r, s, n] = this._getSessionId(), o = this._getWindowId(), a = M(n) && n > 0 && Math.abs(i - n) > 864e5, l = !1, c = !s, u = !e && Math.abs(i - r) > this.sessionTimeoutMs;
    c || u || a ? (s = this._sessionIdGenerator(), o = this._windowIdGenerator(), Cs.info("new session ID generated", {
      sessionId: s,
      windowId: o,
      changeReason: {
        noSessionId: c,
        activityTimeout: u,
        sessionPastMaximumLength: a
      }
    }), n = i, l = !0) : o || (o = this._windowIdGenerator(), l = !0);
    var d = 0 === r || !e || a ? i : r, h = 0 === n ? (new Date).getTime() : n;
    return this._setWindowId(o), this._setSessionId(s, d, h), e || this.resetIdleTimer(), 
    l && this._sessionIdChangedHandlers.forEach((e => e(s, o, l ? {
      noSessionId: c,
      activityTimeout: u,
      sessionPastMaximumLength: a
    } : void 0))), {
      sessionId: s,
      windowId: o,
      sessionStartTimestamp: h,
      changeReason: l ? {
        noSessionId: c,
        activityTimeout: u,
        sessionPastMaximumLength: a
      } : void 0,
      lastActivityTimestamp: r
    };
  }
  resetIdleTimer() {
    clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
      this.resetSessionId();
    }), 1.1 * this.sessionTimeoutMs);
  }
}

!function(e) {
  e.US = "us", e.EU = "eu", e.CUSTOM = "custom";
}(Is || (Is = {}));

var Rs = "i.posthog.com";

class Fs {
  constructor(e) {
    W(this, "_regionCache", {}), this.instance = e;
  }
  get apiHost() {
    var e = this.instance.config.api_host.trim().replace(/\/$/, "");
    return "https://app.posthog.com" === e ? "https://us.i.posthog.com" : e;
  }
  get uiHost() {
    var e, t = null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "");
    return t || (t = this.apiHost.replace(".".concat(Rs), ".posthog.com")), "https://app.posthog.com" === t ? "https://us.posthog.com" : t;
  }
  get region() {
    return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = Is.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = Is.EU : this._regionCache[this.apiHost] = Is.CUSTOM), 
    this._regionCache[this.apiHost];
  }
  endpointFor(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if (t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e) return this.uiHost + t;
    if (this.region === Is.CUSTOM) return this.apiHost + t;
    var i = Rs + t;
    switch (e) {
     case "assets":
      return "https://".concat(this.region, "-assets.").concat(i);

     case "api":
      return "https://".concat(this.region, ".").concat(i);
    }
  }
}

var Ts = "posthog-js";

function $s(e) {
  var {organization: t, projectId: i, prefix: r, severityAllowList: s = [ "error" ]} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return n => {
    var o, a, l, c, u;
    if (!("*" === s || s.includes(n.level)) || !e.__loaded) return n;
    n.tags || (n.tags = {});
    var d = e.requestRouter.endpointFor("ui", "/project/".concat(e.config.token, "/person/").concat(e.get_distinct_id()));
    n.tags["PostHog Person URL"] = d, e.sessionRecordingStarted() && (n.tags["PostHog Recording URL"] = e.get_session_replay_url({
      withTimestamp: !0
    }));
    var h = (null === (o = n.exception) || void 0 === o ? void 0 : o.values) || [];
    h.forEach((e => {
      e.stacktrace && (e.stacktrace.type = "raw", e.stacktrace.frames.forEach((e => {
        e.platform = "web:javascript";
      })));
    }));
    var _ = {
      $exception_message: (null === (a = h[0]) || void 0 === a ? void 0 : a.value) || n.message,
      $exception_type: null === (l = h[0]) || void 0 === l ? void 0 : l.type,
      $exception_personURL: d,
      $exception_level: n.level,
      $exception_list: h,
      $sentry_event_id: n.event_id,
      $sentry_exception: n.exception,
      $sentry_exception_message: (null === (c = h[0]) || void 0 === c ? void 0 : c.value) || n.message,
      $sentry_exception_type: null === (u = h[0]) || void 0 === u ? void 0 : u.type,
      $sentry_tags: n.tags
    };
    return t && i && (_.$sentry_url = (r || "https://sentry.io/organizations/") + t + "/issues/?project=" + i + "&query=" + n.event_id), 
    e.exceptions.sendExceptionEvent(_), n;
  };
}

class Os {
  constructor(e, t, i, r, s) {
    this.name = Ts, this.setupOnce = function(n) {
      n($s(e, {
        organization: t,
        projectId: i,
        prefix: r,
        severityAllowList: s
      }));
    };
  }
}

var Ms = B("[SegmentIntegration]");

function As(e, t) {
  var i = e.config.segment;
  if (!i) return t();
  !function(e, t) {
    var i = e.config.segment;
    if (!i) return t();
    var r = i => {
      var r = () => i.anonymousId() || it();
      e.config.get_device_id = r, i.id() && (e.register({
        distinct_id: i.id(),
        $device_id: r()
      }), e.persistence.set_property(Me, "identified")), t();
    }, s = i.user();
    "then" in s && I(s.then) ? s.then((e => r(e))) : r(s);
  }(e, (() => {
    i.register((e => {
      Promise && Promise.resolve || Ms.warn("This browser does not have Promise support, and can not use the segment integration");
      var t = (t, i) => {
        var r;
        if (!i) return t;
        t.event.userId || t.event.anonymousId === e.get_distinct_id() || (Ms.info("No userId set, resetting PostHog"), 
        e.reset()), t.event.userId && t.event.userId !== e.get_distinct_id() && (Ms.info("UserId set, identifying with PostHog"), 
        e.identify(t.event.userId));
        var s = e._calculate_event_properties(i, null !== (r = t.event.properties) && void 0 !== r ? r : {}, new Date);
        return t.event.properties = Object.assign({}, s, t.event.properties), t;
      };
      return {
        name: "PostHog JS",
        type: "enrichment",
        version: "1.0.0",
        isLoaded: () => !0,
        load: () => Promise.resolve(),
        track: e => t(e, e.event.event),
        page: e => t(e, "$pageview"),
        identify: e => t(e, "$identify"),
        screen: e => t(e, "$screen")
      };
    })(e)).then((() => {
      t();
    }));
  }));
}

class Ls {
  constructor(e) {
    this._instance = e;
  }
  doPageView(e, i) {
    var r, s = this._previousPageViewProperties(e, i);
    return this._currentPageview = {
      pathname: null !== (r = null == t ? void 0 : t.location.pathname) && void 0 !== r ? r : "",
      pageViewId: i,
      timestamp: e
    }, this._instance.scrollManager.resetContext(), s;
  }
  doPageLeave(e) {
    var t;
    return this._previousPageViewProperties(e, null === (t = this._currentPageview) || void 0 === t ? void 0 : t.pageViewId);
  }
  doEvent() {
    var e;
    return {
      $pageview_id: null === (e = this._currentPageview) || void 0 === e ? void 0 : e.pageViewId
    };
  }
  _previousPageViewProperties(e, t) {
    var i = this._currentPageview;
    if (!i) return {
      $pageview_id: t
    };
    var r = {
      $pageview_id: t,
      $prev_pageview_id: i.pageViewId
    }, s = this._instance.scrollManager.getContext();
    if (s && !this._instance.config.disable_scroll_properties) {
      var {maxScrollHeight: n, lastScrollY: o, maxScrollY: a, maxContentHeight: l, lastContentY: c, maxContentY: u} = s;
      if (!(R(n) || R(o) || R(a) || R(l) || R(c) || R(u))) {
        n = Math.ceil(n), o = Math.ceil(o), a = Math.ceil(a), l = Math.ceil(l), c = Math.ceil(c), 
        u = Math.ceil(u);
        var d = n <= 1 ? 1 : _r(o / n, 0, 1), h = n <= 1 ? 1 : _r(a / n, 0, 1), _ = l <= 1 ? 1 : _r(c / l, 0, 1), p = l <= 1 ? 1 : _r(u / l, 0, 1);
        r = K(r, {
          $prev_pageview_last_scroll: o,
          $prev_pageview_last_scroll_percentage: d,
          $prev_pageview_max_scroll: a,
          $prev_pageview_max_scroll_percentage: h,
          $prev_pageview_last_content: c,
          $prev_pageview_last_content_percentage: _,
          $prev_pageview_max_content: u,
          $prev_pageview_max_content_percentage: p
        });
      }
    }
    return i.pathname && (r.$prev_pageview_pathname = i.pathname), i.timestamp && (r.$prev_pageview_duration = (e.getTime() - i.timestamp.getTime()) / 1e3), 
    r;
  }
}

var Ds, Ns, qs, Bs, Hs, Us, zs, js, Ws = {}, Vs = [], Gs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Js = Array.isArray;

function Ys(e, t) {
  for (var i in t) e[i] = t[i];
  return e;
}

function Ks(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}

function Xs(e, t, i, r, s) {
  var n = {
    type: e,
    props: t,
    key: i,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: null == s ? ++qs : s,
    __i: -1,
    __u: 0
  };
  return null == s && null != Ns.vnode && Ns.vnode(n), n;
}

function Qs(e) {
  return e.children;
}

function Zs(e, t) {
  this.props = e, this.context = t;
}

function en(e, t) {
  if (null == t) return e.__ ? en(e.__, e.__i + 1) : null;
  for (var i; t < e.__k.length; t++) if (null != (i = e.__k[t]) && null != i.__e) return i.__e;
  return "function" == typeof e.type ? en(e) : null;
}

function tn(e) {
  var t, i;
  if (null != (e = e.__) && null != e.__c) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (i = e.__k[t]) && null != i.__e) {
      e.__e = e.__c.base = i.__e;
      break;
    }
    return tn(e);
  }
}

function rn(e) {
  (!e.__d && (e.__d = !0) && Bs.push(e) && !sn.__r++ || Hs !== Ns.debounceRendering) && ((Hs = Ns.debounceRendering) || Us)(sn);
}

function sn() {
  var e, t, i, r, s, n, o, a, l;
  for (Bs.sort(zs); e = Bs.shift(); ) e.__d && (t = Bs.length, r = void 0, n = (s = (i = e).__v).__e, 
  a = [], l = [], (o = i.__P) && ((r = Ys({}, s)).__v = s.__v + 1, Ns.vnode && Ns.vnode(r), 
  _n(o, r, s, i.__n, void 0 !== o.ownerSVGElement, 32 & s.__u ? [ n ] : null, a, null == n ? en(s) : n, !!(32 & s.__u), l), 
  r.__.__k[r.__i] = r, pn(a, r, l), r.__e != n && tn(r)), Bs.length > t && Bs.sort(zs));
  sn.__r = 0;
}

function nn(e, t, i, r, s, n, o, a, l, c, u) {
  var d, h, _, p, v, g = r && r.__k || Vs, f = t.length;
  for (i.__d = l, on(i, t, g), l = i.__d, d = 0; d < f; d++) null != (_ = i.__k[d]) && "boolean" != typeof _ && "function" != typeof _ && (h = -1 === _.__i ? Ws : g[_.__i] || Ws, 
  _.__i = d, _n(e, _, h, s, n, o, a, l, c, u), p = _.__e, _.ref && h.ref != _.ref && (h.ref && gn(h.ref, null, _), 
  u.push(_.ref, _.__c || p, _)), null == v && null != p && (v = p), 65536 & _.__u || h.__k === _.__k ? l = an(_, l, e) : "function" == typeof _.type && void 0 !== _.__d ? l = _.__d : p && (l = p.nextSibling), 
  _.__d = void 0, _.__u &= -196609);
  i.__d = l, i.__e = v;
}

function on(e, t, i) {
  var r, s, n, o, a, l = t.length, c = i.length, u = c, d = 0;
  for (e.__k = [], r = 0; r < l; r++) null != (s = e.__k[r] = null == (s = t[r]) || "boolean" == typeof s || "function" == typeof s ? null : "string" == typeof s || "number" == typeof s || "bigint" == typeof s || s.constructor == String ? Xs(null, s, null, null, s) : Js(s) ? Xs(Qs, {
    children: s
  }, null, null, null) : void 0 === s.constructor && s.__b > 0 ? Xs(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s) ? (s.__ = e, 
  s.__b = e.__b + 1, a = ln(s, i, o = r + d, u), s.__i = a, n = null, -1 !== a && (u--, 
  (n = i[a]) && (n.__u |= 131072)), null == n || null === n.__v ? (-1 == a && d--, 
  "function" != typeof s.type && (s.__u |= 65536)) : a !== o && (a === o + 1 ? d++ : a > o ? u > l - o ? d += a - o : d-- : d = a < o && a == o - 1 ? a - o : 0, 
  a !== r + d && (s.__u |= 65536))) : (n = i[r]) && null == n.key && n.__e && (n.__e == e.__d && (e.__d = en(n)), 
  fn(n, n, !1), i[r] = null, u--);
  if (u) for (r = 0; r < c; r++) null != (n = i[r]) && 0 == (131072 & n.__u) && (n.__e == e.__d && (e.__d = en(n)), 
  fn(n, n));
}

function an(e, t, i) {
  var r, s;
  if ("function" == typeof e.type) {
    for (r = e.__k, s = 0; r && s < r.length; s++) r[s] && (r[s].__ = e, t = an(r[s], t, i));
    return t;
  }
  return e.__e != t && (i.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}

function ln(e, t, i, r) {
  var s = e.key, n = e.type, o = i - 1, a = i + 1, l = t[i];
  if (null === l || l && s == l.key && n === l.type) return i;
  if (r > (null != l && 0 == (131072 & l.__u) ? 1 : 0)) for (;o >= 0 || a < t.length; ) {
    if (o >= 0) {
      if ((l = t[o]) && 0 == (131072 & l.__u) && s == l.key && n === l.type) return o;
      o--;
    }
    if (a < t.length) {
      if ((l = t[a]) && 0 == (131072 & l.__u) && s == l.key && n === l.type) return a;
      a++;
    }
  }
  return -1;
}

function cn(e, t, i) {
  "-" === t[0] ? e.setProperty(t, null == i ? "" : i) : e[t] = null == i ? "" : "number" != typeof i || Gs.test(t) ? i : i + "px";
}

function un(e, t, i, r, s) {
  var n;
  e: if ("style" === t) if ("string" == typeof i) e.style.cssText = i; else {
    if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) i && t in i || cn(e.style, t, "");
    if (i) for (t in i) r && i[t] === r[t] || cn(e.style, t, i[t]);
  } else if ("o" === t[0] && "n" === t[1]) n = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), 
  t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), 
  e.l[t + n] = i, i ? r ? i.u = r.u : (i.u = Date.now(), e.addEventListener(t, n ? hn : dn, n)) : e.removeEventListener(t, n ? hn : dn, n); else {
    if (s) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s"); else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
      e[t] = null == i ? "" : i;
      break e;
    } catch (e) {}
    "function" == typeof i || (null == i || !1 === i && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, i));
  }
}

function dn(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u) return;
  } else e.t = Date.now();
  return t(Ns.event ? Ns.event(e) : e);
}

function hn(e) {
  return this.l[e.type + !0](Ns.event ? Ns.event(e) : e);
}

function _n(e, t, i, r, s, n, o, a, l, c) {
  var u, d, h, _, p, v, g, f, m, b, y, w, S, k, E, x = t.type;
  if (void 0 !== t.constructor) return null;
  128 & i.__u && (l = !!(32 & i.__u), n = [ a = t.__e = i.__e ]), (u = Ns.__b) && u(t);
  e: if ("function" == typeof x) try {
    if (f = t.props, m = (u = x.contextType) && r[u.__c], b = u ? m ? m.props.value : u.__ : r, 
    i.__c ? g = (d = t.__c = i.__c).__ = d.__E : ("prototype" in x && x.prototype.render ? t.__c = d = new x(f, b) : (t.__c = d = new Zs(f, b), 
    d.constructor = x, d.render = mn), m && m.sub(d), d.props = f, d.state || (d.state = {}), 
    d.context = b, d.__n = r, h = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), 
    null != x.getDerivedStateFromProps && (d.__s == d.state && (d.__s = Ys({}, d.__s)), 
    Ys(d.__s, x.getDerivedStateFromProps(f, d.__s))), _ = d.props, p = d.state, d.__v = t, 
    h) null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), 
    null != d.componentDidMount && d.__h.push(d.componentDidMount); else {
      if (null == x.getDerivedStateFromProps && f !== _ && null != d.componentWillReceiveProps && d.componentWillReceiveProps(f, b), 
      !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(f, d.__s, b) || t.__v === i.__v)) {
        for (t.__v !== i.__v && (d.props = f, d.state = d.__s, d.__d = !1), t.__e = i.__e, 
        t.__k = i.__k, t.__k.forEach((function(e) {
          e && (e.__ = t);
        })), y = 0; y < d._sb.length; y++) d.__h.push(d._sb[y]);
        d._sb = [], d.__h.length && o.push(d);
        break e;
      }
      null != d.componentWillUpdate && d.componentWillUpdate(f, d.__s, b), null != d.componentDidUpdate && d.__h.push((function() {
        d.componentDidUpdate(_, p, v);
      }));
    }
    if (d.context = b, d.props = f, d.__P = e, d.__e = !1, w = Ns.__r, S = 0, "prototype" in x && x.prototype.render) {
      for (d.state = d.__s, d.__d = !1, w && w(t), u = d.render(d.props, d.state, d.context), 
      k = 0; k < d._sb.length; k++) d.__h.push(d._sb[k]);
      d._sb = [];
    } else do {
      d.__d = !1, w && w(t), u = d.render(d.props, d.state, d.context), d.state = d.__s;
    } while (d.__d && ++S < 25);
    d.state = d.__s, null != d.getChildContext && (r = Ys(Ys({}, r), d.getChildContext())), 
    h || null == d.getSnapshotBeforeUpdate || (v = d.getSnapshotBeforeUpdate(_, p)), 
    nn(e, Js(E = null != u && u.type === Qs && null == u.key ? u.props.children : u) ? E : [ E ], t, i, r, s, n, o, a, l, c), 
    d.base = t.__e, t.__u &= -161, d.__h.length && o.push(d), g && (d.__E = d.__ = null);
  } catch (e) {
    t.__v = null, l || null != n ? (t.__e = a, t.__u |= l ? 160 : 32, n[n.indexOf(a)] = null) : (t.__e = i.__e, 
    t.__k = i.__k), Ns.__e(e, t, i);
  } else null == n && t.__v === i.__v ? (t.__k = i.__k, t.__e = i.__e) : t.__e = vn(i.__e, t, i, r, s, n, o, l, c);
  (u = Ns.diffed) && u(t);
}

function pn(e, t, i) {
  t.__d = void 0;
  for (var r = 0; r < i.length; r++) gn(i[r], i[++r], i[++r]);
  Ns.__c && Ns.__c(t, e), e.some((function(t) {
    try {
      e = t.__h, t.__h = [], e.some((function(e) {
        e.call(t);
      }));
    } catch (e) {
      Ns.__e(e, t.__v);
    }
  }));
}

function vn(e, t, i, r, s, n, o, a, l) {
  var c, u, d, h, _, p, v, g = i.props, f = t.props, m = t.type;
  if ("svg" === m && (s = !0), null != n) for (c = 0; c < n.length; c++) if ((_ = n[c]) && "setAttribute" in _ == !!m && (m ? _.localName === m : 3 === _.nodeType)) {
    e = _, n[c] = null;
    break;
  }
  if (null == e) {
    if (null === m) return document.createTextNode(f);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, f.is && f), 
    n = null, a = !1;
  }
  if (null === m) g === f || a && e.data === f || (e.data = f); else {
    if (n = n && Ds.call(e.childNodes), g = i.props || Ws, !a && null != n) for (g = {}, 
    c = 0; c < e.attributes.length; c++) g[(_ = e.attributes[c]).name] = _.value;
    for (c in g) _ = g[c], "children" == c || ("dangerouslySetInnerHTML" == c ? d = _ : "key" === c || c in f || un(e, c, null, _, s));
    for (c in f) _ = f[c], "children" == c ? h = _ : "dangerouslySetInnerHTML" == c ? u = _ : "value" == c ? p = _ : "checked" == c ? v = _ : "key" === c || a && "function" != typeof _ || g[c] === _ || un(e, c, _, g[c], s);
    if (u) a || d && (u.__html === d.__html || u.__html === e.innerHTML) || (e.innerHTML = u.__html), 
    t.__k = []; else if (d && (e.innerHTML = ""), nn(e, Js(h) ? h : [ h ], t, i, r, s && "foreignObject" !== m, n, o, n ? n[0] : i.__k && en(i, 0), a, l), 
    null != n) for (c = n.length; c--; ) null != n[c] && Ks(n[c]);
    a || (c = "value", void 0 !== p && (p !== e[c] || "progress" === m && !p || "option" === m && p !== g[c]) && un(e, c, p, g[c], !1), 
    c = "checked", void 0 !== v && v !== e[c] && un(e, c, v, g[c], !1));
  }
  return e;
}

function gn(e, t, i) {
  try {
    "function" == typeof e ? e(t) : e.current = t;
  } catch (e) {
    Ns.__e(e, i);
  }
}

function fn(e, t, i) {
  var r, s;
  if (Ns.unmount && Ns.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || gn(r, null, t)), 
  null != (r = e.__c)) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (e) {
      Ns.__e(e, t);
    }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k) for (s = 0; s < r.length; s++) r[s] && fn(r[s], t, i || "function" != typeof e.type);
  i || null == e.__e || Ks(e.__e), e.__ = e.__e = e.__d = void 0;
}

function mn(e, t, i) {
  return this.constructor(e, i);
}

Ds = Vs.slice, Ns = {
  __e: function(e, t, i, r) {
    for (var s, n, o; t = t.__; ) if ((s = t.__c) && !s.__) try {
      if ((n = s.constructor) && null != n.getDerivedStateFromError && (s.setState(n.getDerivedStateFromError(e)), 
      o = s.__d), null != s.componentDidCatch && (s.componentDidCatch(e, r || {}), o = s.__d), 
      o) return s.__E = s;
    } catch (t) {
      e = t;
    }
    throw e;
  }
}, qs = 0, Zs.prototype.setState = function(e, t) {
  var i;
  i = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Ys({}, this.state), 
  "function" == typeof e && (e = e(Ys({}, i), this.props)), e && Ys(i, e), null != e && this.__v && (t && this._sb.push(t), 
  rn(this));
}, Zs.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), rn(this));
}, Zs.prototype.render = Qs, Bs = [], Us = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, 
zs = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, sn.__r = 0, js = 0;

var bn, yn, wn;

!function(e, t) {
  var i = {
    __c: t = "__cC" + js++,
    __: e,
    Consumer: function(e, t) {
      return e.children(t);
    },
    Provider: function(e) {
      var i, r;
      return this.getChildContext || (i = [], (r = {})[t] = this, this.getChildContext = function() {
        return r;
      }, this.shouldComponentUpdate = function(e) {
        this.props.value !== e.value && i.some((function(e) {
          e.__e = !0, rn(e);
        }));
      }, this.sub = function(e) {
        i.push(e);
        var t = e.componentWillUnmount;
        e.componentWillUnmount = function() {
          i.splice(i.indexOf(e), 1), t && t.call(e);
        };
      }), e.children;
    }
  };
  i.Provider.__ = i.Consumer.contextType = i;
}({
  isPreviewMode: !1,
  previewPageIndex: 0,
  handleCloseSurveyPopup: () => {},
  isPopup: !0,
  onPreviewSubmit: () => {}
}), function(e) {
  e.Popover = "popover", e.API = "api", e.Widget = "widget";
}(bn || (bn = {})), function(e) {
  e.Open = "open", e.MultipleChoice = "multiple_choice", e.SingleChoice = "single_choice", 
  e.Rating = "rating", e.Link = "link";
}(yn || (yn = {})), function(e) {
  e.NextQuestion = "next_question", e.End = "end", e.ResponseBased = "response_based", 
  e.SpecificQuestion = "specific_question";
}(wn || (wn = {}));

class Sn {
  constructor() {
    W(this, "events", {}), this.events = {};
  }
  on(e, t) {
    return this.events[e] || (this.events[e] = []), this.events[e].push(t), () => {
      this.events[e] = this.events[e].filter((e => e !== t));
    };
  }
  emit(e, t) {
    for (var i of this.events[e] || []) i(t);
    for (var r of this.events["*"] || []) r(e, t);
  }
}

class kn {
  constructor(e) {
    W(this, "_debugEventEmitter", new Sn), W(this, "checkStep", ((e, t) => this.checkStepEvent(e, t) && this.checkStepUrl(e, t) && this.checkStepElement(e, t))), 
    W(this, "checkStepEvent", ((e, t) => null == t || !t.event || (null == e ? void 0 : e.event) === (null == t ? void 0 : t.event))), 
    this.instance = e, this.actionEvents = new Set, this.actionRegistry = new Set;
  }
  init() {
    var e;
    if (!R(null === (e = this.instance) || void 0 === e ? void 0 : e._addCaptureHook)) {
      var t;
      null === (t = this.instance) || void 0 === t || t._addCaptureHook(((e, t) => {
        this.on(e, t);
      }));
    }
  }
  register(e) {
    var t, i;
    if (!R(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) && (e.forEach((e => {
      var t, i;
      null === (t = this.actionRegistry) || void 0 === t || t.add(e), null === (i = e.steps) || void 0 === i || i.forEach((e => {
        var t;
        null === (t = this.actionEvents) || void 0 === t || t.add((null == e ? void 0 : e.event) || "");
      }));
    })), null !== (i = this.instance) && void 0 !== i && i.autocapture)) {
      var r, s = new Set;
      e.forEach((e => {
        var t;
        null === (t = e.steps) || void 0 === t || t.forEach((e => {
          null != e && e.selector && s.add(null == e ? void 0 : e.selector);
        }));
      })), null === (r = this.instance) || void 0 === r || r.autocapture.setElementSelectors(s);
    }
  }
  on(e, t) {
    var i;
    null != t && 0 != e.length && (this.actionEvents.has(e) || this.actionEvents.has(null == t ? void 0 : t.event)) && this.actionRegistry && (null === (i = this.actionRegistry) || void 0 === i ? void 0 : i.size) > 0 && this.actionRegistry.forEach((e => {
      this.checkAction(t, e) && this._debugEventEmitter.emit("actionCaptured", e.name);
    }));
  }
  _addActionHook(e) {
    this.onAction("actionCaptured", (t => e(t)));
  }
  checkAction(e, t) {
    if (null == (null == t ? void 0 : t.steps)) return !1;
    for (var i of t.steps) if (this.checkStep(e, i)) return !0;
    return !1;
  }
  onAction(e, t) {
    return this._debugEventEmitter.on(e, t);
  }
  checkStepUrl(e, t) {
    if (null != t && t.url) {
      var i, r = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$current_url;
      if (!r || "string" != typeof r) return !1;
      if (!kn.matchString(r, null == t ? void 0 : t.url, (null == t ? void 0 : t.url_matching) || "contains")) return !1;
    }
    return !0;
  }
  static matchString(e, i, r) {
    switch (r) {
     case "regex":
      return !!t && bt(e, i);

     case "exact":
      return i === e;

     case "contains":
      var s = kn.escapeStringRegexp(i).replace(/_/g, ".").replace(/%/g, ".*");
      return bt(e, s);

     default:
      return !1;
    }
  }
  static escapeStringRegexp(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  checkStepElement(e, t) {
    if ((null != t && t.href || null != t && t.tag_name || null != t && t.text) && !this.getElementsList(e).some((e => !(null != t && t.href && !kn.matchString(e.href || "", null == t ? void 0 : t.href, (null == t ? void 0 : t.href_matching) || "exact")) && ((null == t || !t.tag_name || e.tag_name === (null == t ? void 0 : t.tag_name)) && !(null != t && t.text && !kn.matchString(e.text || "", null == t ? void 0 : t.text, (null == t ? void 0 : t.text_matching) || "exact") && !kn.matchString(e.$el_text || "", null == t ? void 0 : t.text, (null == t ? void 0 : t.text_matching) || "exact")))))) return !1;
    if (null != t && t.selector) {
      var i, r = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$element_selectors;
      if (!r) return !1;
      if (!r.includes(null == t ? void 0 : t.selector)) return !1;
    }
    return !0;
  }
  getElementsList(e) {
    return null == (null == e ? void 0 : e.properties.$elements) ? [] : null == e ? void 0 : e.properties.$elements;
  }
}

class En {
  constructor(e) {
    this.instance = e, this.eventToSurveys = new Map, this.actionToSurveys = new Map;
  }
  register(e) {
    var t;
    R(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) || (this.setupEventBasedSurveys(e), 
    this.setupActionBasedSurveys(e));
  }
  setupActionBasedSurveys(e) {
    var t = e.filter((e => {
      var t, i, r, s;
      return (null === (t = e.conditions) || void 0 === t ? void 0 : t.actions) && (null === (i = e.conditions) || void 0 === i || null === (r = i.actions) || void 0 === r || null === (s = r.values) || void 0 === s ? void 0 : s.length) > 0;
    }));
    if (0 !== t.length) {
      if (null == this.actionMatcher) {
        this.actionMatcher = new kn(this.instance), this.actionMatcher.init();
        this.actionMatcher._addActionHook((e => {
          this.onAction(e);
        }));
      }
      t.forEach((e => {
        var t, i, r, s, n, o, a, l, c, u;
        e.conditions && null !== (t = e.conditions) && void 0 !== t && t.actions && null !== (i = e.conditions) && void 0 !== i && null !== (r = i.actions) && void 0 !== r && r.values && (null === (s = e.conditions) || void 0 === s || null === (n = s.actions) || void 0 === n || null === (o = n.values) || void 0 === o ? void 0 : o.length) > 0 && (null === (a = this.actionMatcher) || void 0 === a || a.register(e.conditions.actions.values), 
        null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c || null === (u = c.values) || void 0 === u || u.forEach((t => {
          if (t && t.name) {
            var i = this.actionToSurveys.get(t.name);
            i && i.push(e.id), this.actionToSurveys.set(t.name, i || [ e.id ]);
          }
        })));
      }));
    }
  }
  setupEventBasedSurveys(e) {
    var t;
    if (0 !== e.filter((e => {
      var t, i, r, s;
      return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (r = i.events) || void 0 === r || null === (s = r.values) || void 0 === s ? void 0 : s.length) > 0;
    })).length) {
      null === (t = this.instance) || void 0 === t || t._addCaptureHook(((e, t) => {
        this.onEvent(e, t);
      })), e.forEach((e => {
        var t, i, r;
        null === (t = e.conditions) || void 0 === t || null === (i = t.events) || void 0 === i || null === (r = i.values) || void 0 === r || r.forEach((t => {
          if (t && t.name) {
            var i = this.eventToSurveys.get(t.name);
            i && i.push(e.id), this.eventToSurveys.set(t.name, i || [ e.id ]);
          }
        }));
      }));
    }
  }
  onEvent(e, t) {
    var i, r, s = (null === (i = this.instance) || void 0 === i || null === (r = i.persistence) || void 0 === r ? void 0 : r.props[$e]) || [];
    if (En.SURVEY_SHOWN_EVENT_NAME == e && t && s.length > 0) {
      var n, o = null == t || null === (n = t.properties) || void 0 === n ? void 0 : n.$survey_id;
      if (o) {
        var a = s.indexOf(o);
        a >= 0 && (s.splice(a, 1), this._updateActivatedSurveys(s));
      }
    } else this.eventToSurveys.has(e) && this._updateActivatedSurveys(s.concat(this.eventToSurveys.get(e) || []));
  }
  onAction(e) {
    var t, i, r = (null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i ? void 0 : i.props[$e]) || [];
    this.actionToSurveys.has(e) && this._updateActivatedSurveys(r.concat(this.actionToSurveys.get(e) || []));
  }
  _updateActivatedSurveys(e) {
    var t, i;
    null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i || i.register({
      [$e]: [ ...new Set(e) ]
    });
  }
  getSurveys() {
    var e, t, i = null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t ? void 0 : t.props[$e];
    return i || [];
  }
  getEventToSurveys() {
    return this.eventToSurveys;
  }
  _getActionMatcher() {
    return this.actionMatcher;
  }
}

W(En, "SURVEY_SHOWN_EVENT_NAME", "survey shown");

var xn = B("[Surveys]"), In = {
  icontains: e => !!t && t.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1,
  not_icontains: e => !!t && -1 === t.location.href.toLowerCase().indexOf(e.toLowerCase()),
  regex: e => !!t && bt(t.location.href, e),
  not_regex: e => !!t && !bt(t.location.href, e),
  exact: e => (null == t ? void 0 : t.location.href) === e,
  is_not: e => (null == t ? void 0 : t.location.href) !== e
};

function Cn(e, t, i) {
  var r, s = e.questions[t], n = t + 1;
  if (null === (r = s.branching) || void 0 === r || !r.type) return t === e.questions.length - 1 ? wn.End : n;
  if (s.branching.type === wn.End) return wn.End;
  if (s.branching.type === wn.SpecificQuestion) {
    if (Number.isInteger(s.branching.index)) return s.branching.index;
  } else if (s.branching.type === wn.ResponseBased) {
    if (s.type === yn.SingleChoice) {
      var o, a, l = s.choices.indexOf("".concat(i));
      if (null !== (o = s.branching) && void 0 !== o && null !== (a = o.responseValues) && void 0 !== a && a.hasOwnProperty(l)) {
        var c = s.branching.responseValues[l];
        return Number.isInteger(c) ? c : c === wn.End ? wn.End : n;
      }
    } else if (s.type === yn.Rating) {
      var u, d;
      if ("number" != typeof i || !Number.isInteger(i)) throw new Error("The response type must be an integer");
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
      }(i, s.scale);
      if (null !== (u = s.branching) && void 0 !== u && null !== (d = u.responseValues) && void 0 !== d && d.hasOwnProperty(h)) {
        var _ = s.branching.responseValues[h];
        return Number.isInteger(_) ? _ : _ === wn.End ? wn.End : n;
      }
    }
    return n;
  }
  return xn.warn("Falling back to next question index due to unexpected branching type"), 
  n;
}

class Pn {
  constructor(e) {
    W(this, "getNextSurveyStep", Cn), this.instance = e, this._surveyEventReceiver = null;
  }
  onRemoteConfig(e) {
    this._decideServerResponse = !!e.surveys, xn.info("decideServerResponse set to ".concat(this._decideServerResponse)), 
    this.loadIfEnabled();
  }
  reset() {
    localStorage.removeItem("lastSeenSurveyDate");
    var e = (() => {
      for (var e = [], t = 0; t < localStorage.length; t++) {
        var i = localStorage.key(t);
        null != i && i.startsWith("seenSurvey_") && e.push(i);
      }
      return e;
    })();
    e.forEach((e => localStorage.removeItem(e)));
  }
  loadIfEnabled() {
    if (!this._surveyManager) if (this.instance.config.disable_surveys) xn.info("Disabled. Not loading surveys."); else {
      var e = null == _ ? void 0 : _.__PosthogExtensions__;
      if (e) {
        var t = e.generateSurveys;
        if (this._decideServerResponse) if (null == this._surveyEventReceiver && (this._surveyEventReceiver = new En(this.instance)), 
        t) this._surveyManager = t(this.instance); else {
          var i = e.loadExternalDependency;
          i ? i(this.instance, "surveys", (t => {
            var i;
            t ? xn.error("Could not load surveys script", t) : this._surveyManager = null === (i = e.generateSurveys) || void 0 === i ? void 0 : i.call(e, this.instance);
          })) : xn.error("PostHog loadExternalDependency extension not found. Cannot load remote config.");
        } else xn.warn("Decide not loaded yet. Not loading surveys.");
      } else xn.error("PostHog Extensions not found.");
    }
  }
  getSurveys(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this.instance.config.disable_surveys) return xn.info("Disabled. Not loading surveys."), 
    e([]);
    null == this._surveyEventReceiver && (this._surveyEventReceiver = new En(this.instance));
    var i = this.instance.get_property(Te);
    if (i && !t) return xn.info("Surveys already loaded, using existing data."), e(i);
    this.instance._send_request({
      url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
      method: "GET",
      callback: t => {
        var i, r = t.statusCode;
        if (200 !== r || !t.json) return xn.error("Surveys API could not be loaded, status: ".concat(r)), 
        e([]);
        var s, n = t.json.surveys || [], o = n.filter((e => {
          var t, i, r, s, n, o, a, l, c, u, d, h;
          return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (r = i.events) || void 0 === r ? void 0 : r.values) && (null === (s = e.conditions) || void 0 === s || null === (n = s.events) || void 0 === n || null === (o = n.values) || void 0 === o ? void 0 : o.length) > 0 || (null === (a = e.conditions) || void 0 === a ? void 0 : a.actions) && (null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c ? void 0 : c.values) && (null === (u = e.conditions) || void 0 === u || null === (d = u.actions) || void 0 === d || null === (h = d.values) || void 0 === h ? void 0 : h.length) > 0;
        }));
        o.length > 0 && (null === (s = this._surveyEventReceiver) || void 0 === s || s.register(o));
        return null === (i = this.instance.persistence) || void 0 === i || i.register({
          [Te]: n
        }), e(n);
      }
    });
  }
  getActiveMatchingSurveys(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.getSurveys((t => {
      var i, r = t.filter((e => !(!e.start_date || e.end_date))).filter((e => {
        var t;
        if (!e.conditions) return !0;
        var i = function(e) {
          var t, i, r;
          return null === (t = e.conditions) || void 0 === t || !t.url || In[null !== (i = null === (r = e.conditions) || void 0 === r ? void 0 : r.urlMatchType) && void 0 !== i ? i : "icontains"](e.conditions.url);
        }(e), r = null === (t = e.conditions) || void 0 === t || !t.selector || (null == a ? void 0 : a.querySelector(e.conditions.selector));
        return i && r;
      })), s = null === (i = this._surveyEventReceiver) || void 0 === i ? void 0 : i.getSurveys(), n = r.filter((e => {
        var t, i, r, n, o, a, l, c, u, d, h;
        if (!(e.linked_flag_key || e.targeting_flag_key || e.internal_targeting_flag_key || null !== (t = e.feature_flag_keys) && void 0 !== t && t.length)) return !0;
        var _ = !e.linked_flag_key || this.instance.featureFlags.isFeatureEnabled(e.linked_flag_key), p = !e.targeting_flag_key || this.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key), v = (null === (i = e.conditions) || void 0 === i ? void 0 : i.events) && (null === (r = e.conditions) || void 0 === r || null === (n = r.events) || void 0 === n ? void 0 : n.values) && (null === (o = e.conditions) || void 0 === o || null === (a = o.events) || void 0 === a ? void 0 : a.values.length) > 0, g = (null === (l = e.conditions) || void 0 === l ? void 0 : l.actions) && (null === (c = e.conditions) || void 0 === c || null === (u = c.actions) || void 0 === u ? void 0 : u.values) && (null === (d = e.conditions) || void 0 === d || null === (h = d.actions) || void 0 === h ? void 0 : h.values.length) > 0, f = !v && !g || (null == s ? void 0 : s.includes(e.id)), m = this._canActivateRepeatedly(e), b = !(e.internal_targeting_flag_key && !m) || this.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key), y = this.checkFlags(e);
        return _ && p && b && f && y;
      }));
      return e(n);
    }), t);
  }
  checkFlags(e) {
    var t;
    return null === (t = e.feature_flag_keys) || void 0 === t || !t.length || e.feature_flag_keys.every((e => {
      var {key: t, value: i} = e;
      return !t || !i || this.instance.featureFlags.isFeatureEnabled(i);
    }));
  }
  _canActivateRepeatedly(e) {
    var t;
    return O(null === (t = _.__PosthogExtensions__) || void 0 === t ? void 0 : t.canActivateRepeatedly) ? (xn.warn("init was not called"), 
    !1) : _.__PosthogExtensions__.canActivateRepeatedly(e);
  }
  canRenderSurvey(e) {
    O(this._surveyManager) ? xn.warn("init was not called") : this.getSurveys((t => {
      var i = t.filter((t => t.id === e))[0];
      this._surveyManager.canRenderSurvey(i);
    }));
  }
  renderSurvey(e, t) {
    O(this._surveyManager) ? xn.warn("init was not called") : this.getSurveys((i => {
      var r = i.filter((t => t.id === e))[0];
      this._surveyManager.renderSurvey(r, null == a ? void 0 : a.querySelector(t));
    }));
  }
}

var Rn = B("[RateLimiter]");

class Fn {
  constructor(e) {
    var t, i;
    W(this, "serverLimits", {}), W(this, "lastEventRateLimited", !1), W(this, "checkForLimiting", (e => {
      var t = e.text;
      if (t && t.length) try {
        (JSON.parse(t).quota_limited || []).forEach((e => {
          Rn.info("".concat(e || "events", " is quota limited.")), this.serverLimits[e] = (new Date).getTime() + 6e4;
        }));
      } catch (e) {
        return void Rn.warn('could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
          text: t
        });
      }
    })), this.instance = e, this.captureEventsPerSecond = (null === (t = e.config.rate_limiting) || void 0 === t ? void 0 : t.events_per_second) || 10, 
    this.captureEventsBurstLimit = Math.max((null === (i = e.config.rate_limiting) || void 0 === i ? void 0 : i.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), 
    this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
  }
  clientRateLimitContext() {
    var e, t, i, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], s = (new Date).getTime(), n = null !== (e = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property(Le)) && void 0 !== e ? e : {
      tokens: this.captureEventsBurstLimit,
      last: s
    };
    n.tokens += (s - n.last) / 1e3 * this.captureEventsPerSecond, n.last = s, n.tokens > this.captureEventsBurstLimit && (n.tokens = this.captureEventsBurstLimit);
    var o = n.tokens < 1;
    return o || r || (n.tokens = Math.max(0, n.tokens - 1)), !o || this.lastEventRateLimited || r || this.instance.capture("$$client_ingestion_warning", {
      $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.")
    }, {
      skip_client_rate_limiting: !0
    }), this.lastEventRateLimited = o, null === (i = this.instance.persistence) || void 0 === i || i.set_property(Le, n), 
    {
      isRateLimited: o,
      remainingTokens: n.tokens
    };
  }
  isServerRateLimited(e) {
    var t = this.serverLimits[e || "events"] || !1;
    return !1 !== t && (new Date).getTime() < t;
  }
}

var Tn = e => {
  var t = null == e ? void 0 : e.config;
  return j({
    initialPathName: (null == l ? void 0 : l.pathname) || "",
    referringDomain: ki.referringDomain()
  }, ki.campaignParams({
    customTrackedParams: null == t ? void 0 : t.custom_campaign_params,
    maskPersonalDataProperties: null == t ? void 0 : t.mask_personal_data_properties,
    customPersonalDataProperties: null == t ? void 0 : t.custom_personal_data_properties
  }));
};

class $n {
  constructor(e, t, i, r) {
    W(this, "_onSessionIdCallback", (e => {
      var t = this._getStoredProps();
      if (!t || t.sessionId !== e) {
        var i = {
          sessionId: e,
          props: this._sessionSourceParamGenerator(this.instance)
        };
        this._persistence.register({
          [Ae]: i
        });
      }
    })), this.instance = e, this._sessionIdManager = t, this._persistence = i, this._sessionSourceParamGenerator = r || Tn, 
    this._sessionIdManager.onSessionId(this._onSessionIdCallback);
  }
  _getStoredProps() {
    return this._persistence.props[Ae];
  }
  getSessionProps() {
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
}

var On = [ "ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "better uptime bot", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "gptbot", "oai-searchbot", "chatgpt-user", "headlesschrome", "cypress", "Google-HotelAdsVerifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;" ], Mn = function(e, t) {
  if (!e) return !1;
  var i = e.toLowerCase();
  return On.concat(t || []).some((e => {
    var t = e.toLowerCase();
    return -1 !== i.indexOf(t);
  }));
}, An = function(e, t) {
  if (!e) return !1;
  var i = e.userAgent;
  if (i && Mn(i, t)) return !0;
  try {
    var r = null == e ? void 0 : e.userAgentData;
    if (null != r && r.brands && r.brands.some((e => Mn(null == e ? void 0 : e.brand, t)))) return !0;
  } catch (e) {}
  return !!e.webdriver;
};

class Ln {
  constructor() {
    this.clicks = [];
  }
  isRageClick(e, t, i) {
    var r = this.clicks[this.clicks.length - 1];
    if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < 30 && i - r.timestamp < 1e3) {
      if (this.clicks.push({
        x: e,
        y: t,
        timestamp: i
      }), 3 === this.clicks.length) return !0;
    } else this.clicks = [ {
      x: e,
      y: t,
      timestamp: i
    } ];
    return !1;
  }
}

var Dn = B("[Dead Clicks]"), Nn = () => !0, qn = e => {
  var t, i = !(null === (t = e.instance.persistence) || void 0 === t || !t.get_property(pe)), r = e.instance.config.capture_dead_clicks;
  return A(r) ? r : i;
};

class Bn {
  get lazyLoadedDeadClicksAutocapture() {
    return this._lazyLoadedDeadClicksAutocapture;
  }
  constructor(e, t, i) {
    this.instance = e, this.isEnabled = t, this.onCapture = i, this.startIfEnabled();
  }
  onRemoteConfig(e) {
    this.instance.persistence && this.instance.persistence.register({
      [pe]: null == e ? void 0 : e.captureDeadClicks
    }), this.startIfEnabled();
  }
  startIfEnabled() {
    this.isEnabled(this) && this.loadScript((() => {
      this.start();
    }));
  }
  loadScript(e) {
    var t, i, r;
    null !== (t = _.__PosthogExtensions__) && void 0 !== t && t.initDeadClicksAutocapture && e(), 
    null === (i = _.__PosthogExtensions__) || void 0 === i || null === (r = i.loadExternalDependency) || void 0 === r || r.call(i, this.instance, "dead-clicks-autocapture", (t => {
      t ? Dn.error("failed to load script", t) : e();
    }));
  }
  start() {
    var e;
    if (a) {
      if (!this._lazyLoadedDeadClicksAutocapture && null !== (e = _.__PosthogExtensions__) && void 0 !== e && e.initDeadClicksAutocapture) {
        var t = C(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
        t.__onCapture = this.onCapture, this._lazyLoadedDeadClicksAutocapture = _.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t), 
        this._lazyLoadedDeadClicksAutocapture.start(a), Dn.info("starting...");
      }
    } else Dn.error("`document` not found. Cannot start.");
  }
  stop() {
    this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), 
    this._lazyLoadedDeadClicksAutocapture = void 0, Dn.info("stopping..."));
  }
}

var Hn = B("[Heatmaps]");

function Un(e) {
  return C(e) && "clientX" in e && "clientY" in e && M(e.clientX) && M(e.clientY);
}

class zn {
  constructor(e) {
    var i;
    W(this, "rageclicks", new Ln), W(this, "_enabledServerSide", !1), W(this, "_initialized", !1), 
    W(this, "_flushInterval", null), this.instance = e, this._enabledServerSide = !(null === (i = this.instance.persistence) || void 0 === i || !i.props[de]), 
    oe(t, "beforeunload", this.flush);
  }
  get flushIntervalMilliseconds() {
    var e = 5e3;
    return C(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds), 
    e;
  }
  get isEnabled() {
    return R(this.instance.config.capture_heatmaps) ? R(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : !1 !== this.instance.config.capture_heatmaps;
  }
  startIfEnabled() {
    if (this.isEnabled) {
      if (this._initialized) return;
      Hn.info("starting..."), this._setupListeners(), this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds);
    } else {
      var e, t;
      clearInterval(null !== (e = this._flushInterval) && void 0 !== e ? e : void 0), 
      null === (t = this.deadClicksCapture) || void 0 === t || t.stop(), this.getAndClearBuffer();
    }
  }
  onRemoteConfig(e) {
    var t = !!e.heatmaps;
    this.instance.persistence && this.instance.persistence.register({
      [de]: t
    }), this._enabledServerSide = t, this.startIfEnabled();
  }
  getAndClearBuffer() {
    var e = this.buffer;
    return this.buffer = void 0, e;
  }
  _onDeadClick(e) {
    this._onClick(e.originalEvent, "deadclick");
  }
  _setupListeners() {
    t && a && (oe(a, "click", (e => this._onClick(e || (null == t ? void 0 : t.event))), {
      capture: !0
    }), oe(a, "mousemove", (e => this._onMouseMove(e || (null == t ? void 0 : t.event))), {
      capture: !0
    }), this.deadClicksCapture = new Bn(this.instance, Nn, this._onDeadClick.bind(this)), 
    this.deadClicksCapture.startIfEnabled(), this._initialized = !0);
  }
  _getProperties(e, i) {
    var r = this.instance.scrollManager.scrollY(), s = this.instance.scrollManager.scrollX(), n = this.instance.scrollManager.scrollElement(), o = function(e, i, r) {
      for (var s = e; s && Ti(s) && !$i(s, "body"); ) {
        if (s === r) return !1;
        if (m(i, null == t ? void 0 : t.getComputedStyle(s).position)) return !0;
        s = Ui(s);
      }
      return !1;
    }(Bi(e), [ "fixed", "sticky" ], n);
    return {
      x: e.clientX + (o ? 0 : s),
      y: e.clientY + (o ? 0 : r),
      target_fixed: o,
      type: i
    };
  }
  _onClick(e) {
    var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
    if (!Fi(e.target) && Un(e)) {
      var r = this._getProperties(e, i);
      null !== (t = this.rageclicks) && void 0 !== t && t.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._capture(j(j({}, r), {}, {
        type: "rageclick"
      })), this._capture(r);
    }
  }
  _onMouseMove(e) {
    !Fi(e.target) && Un(e) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
      this._capture(this._getProperties(e, "mousemove"));
    }), 500));
  }
  _capture(e) {
    if (t) {
      var i = t.location.href;
      this.buffer = this.buffer || {}, this.buffer[i] || (this.buffer[i] = []), this.buffer[i].push(e);
    }
  }
  flush() {
    this.buffer && !P(this.buffer) && this.instance.capture("$$heatmap", {
      $heatmap_data: this.getAndClearBuffer()
    });
  }
}

class jn {
  constructor(e) {
    W(this, "_updateScrollData", (() => {
      var e, t, i, r;
      this.context || (this.context = {});
      var s = this.scrollElement(), n = this.scrollY(), o = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0, a = n + ((null == s ? void 0 : s.clientHeight) || 0), l = (null == s ? void 0 : s.scrollHeight) || 0;
      this.context.lastScrollY = Math.ceil(n), this.context.maxScrollY = Math.max(n, null !== (e = this.context.maxScrollY) && void 0 !== e ? e : 0), 
      this.context.maxScrollHeight = Math.max(o, null !== (t = this.context.maxScrollHeight) && void 0 !== t ? t : 0), 
      this.context.lastContentY = a, this.context.maxContentY = Math.max(a, null !== (i = this.context.maxContentY) && void 0 !== i ? i : 0), 
      this.context.maxContentHeight = Math.max(l, null !== (r = this.context.maxContentHeight) && void 0 !== r ? r : 0);
    })), this.instance = e;
  }
  getContext() {
    return this.context;
  }
  resetContext() {
    var e = this.context;
    return setTimeout(this._updateScrollData, 0), e;
  }
  startMeasuringScrollPosition() {
    oe(t, "scroll", this._updateScrollData, {
      capture: !0
    }), oe(t, "scrollend", this._updateScrollData, {
      capture: !0
    }), oe(t, "resize", this._updateScrollData);
  }
  scrollElement() {
    if (!this.instance.config.scroll_root_selector) return null == t ? void 0 : t.document.documentElement;
    var e = x(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [ this.instance.config.scroll_root_selector ];
    for (var i of e) {
      var r = null == t ? void 0 : t.document.querySelector(i);
      if (r) return r;
    }
  }
  scrollY() {
    if (this.instance.config.scroll_root_selector) {
      var e = this.scrollElement();
      return e && e.scrollTop || 0;
    }
    return t && (t.scrollY || t.pageYOffset || t.document.documentElement.scrollTop) || 0;
  }
  scrollX() {
    if (this.instance.config.scroll_root_selector) {
      var e = this.scrollElement();
      return e && e.scrollLeft || 0;
    }
    return t && (t.scrollX || t.pageXOffset || t.document.documentElement.scrollLeft) || 0;
  }
}

var Wn = B("[AutoCapture]");

function Vn(e, t) {
  return t.length > e ? t.slice(0, e) + "..." : t;
}

function Gn(e) {
  if (e.previousElementSibling) return e.previousElementSibling;
  var t = e;
  do {
    t = t.previousSibling;
  } while (t && !Ti(t));
  return t;
}

function Jn(e, t, i, r) {
  var s = e.tagName.toLowerCase(), n = {
    tag_name: s
  };
  Hi.indexOf(s) > -1 && !i && ("a" === s.toLowerCase() || "button" === s.toLowerCase() ? n.$el_text = Vn(1024, Zi(e)) : n.$el_text = Vn(1024, qi(e)));
  var o = Di(e);
  o.length > 0 && (n.classes = o.filter((function(e) {
    return "" !== e;
  }))), Y(e.attributes, (function(i) {
    var s;
    if ((!Wi(e) || -1 !== [ "name", "id", "class", "aria-label" ].indexOf(i.name)) && ((null == r || !r.includes(i.name)) && !t && Qi(i.value) && (s = i.name, 
    !F(s) || "_ngcontent" !== s.substring(0, 10) && "_nghost" !== s.substring(0, 7)))) {
      var o = i.value;
      "class" === i.name && (o = Ai(o).join(" ")), n["attr__" + i.name] = Vn(1024, o);
    }
  }));
  for (var a = 1, l = 1, c = e; c = Gn(c); ) a++, c.tagName === e.tagName && l++;
  return n.nth_child = a, n.nth_of_type = l, n;
}

function Yn(e, i) {
  for (var r, s, {e: n, maskAllElementAttributes: o, maskAllText: a, elementAttributeIgnoreList: l, elementsChainAsString: c} = i, u = [ e ], d = e; d.parentNode && !$i(d, "body"); ) Mi(d.parentNode) ? (u.push(d.parentNode.host), 
  d = d.parentNode.host) : (u.push(d.parentNode), d = d.parentNode);
  var h, _ = [], p = {}, v = !1, g = !1;
  if (Y(u, (e => {
    var t = ji(e);
    "a" === e.tagName.toLowerCase() && (v = e.getAttribute("href"), v = t && v && Qi(v) && v), 
    m(Di(e), "ph-no-capture") && (g = !0), _.push(Jn(e, o, a, l));
    var i = function(e) {
      if (!ji(e)) return {};
      var t = {};
      return Y(e.attributes, (function(e) {
        if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
          var i = e.name.replace("data-ph-capture-attribute-", ""), r = e.value;
          i && r && Qi(r) && (t[i] = r);
        }
      })), t;
    }(e);
    K(p, i);
  })), g) return {
    props: {},
    explicitNoCapture: g
  };
  if (a || ("a" === e.tagName.toLowerCase() || "button" === e.tagName.toLowerCase() ? _[0].$el_text = Zi(e) : _[0].$el_text = qi(e)), 
  v) {
    var f, b;
    _[0].attr__href = v;
    var y = null === (f = mt(v)) || void 0 === f ? void 0 : f.host, w = null == t || null === (b = t.location) || void 0 === b ? void 0 : b.host;
    y && w && y !== w && (h = v);
  }
  return {
    props: K({
      $event_type: n.type,
      $ce_version: 1
    }, c ? {} : {
      $elements: _
    }, {
      $elements_chain: tr(_)
    }, null !== (r = _[0]) && void 0 !== r && r.$el_text ? {
      $el_text: null === (s = _[0]) || void 0 === s ? void 0 : s.$el_text
    } : {}, h && "click" === n.type ? {
      $external_click_url: h
    } : {}, p)
  };
}

class Kn {
  constructor(e) {
    W(this, "_initialized", !1), W(this, "_isDisabledServerSide", null), W(this, "rageclicks", new Ln), 
    W(this, "_elementsChainAsString", !1), this.instance = e, this._elementSelectors = null;
  }
  get config() {
    var e, t, i = C(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
    return i.url_allowlist = null === (e = i.url_allowlist) || void 0 === e ? void 0 : e.map((e => new RegExp(e))), 
    i.url_ignorelist = null === (t = i.url_ignorelist) || void 0 === t ? void 0 : t.map((e => new RegExp(e))), 
    i;
  }
  _addDomEventHandlers() {
    if (this.isBrowserSupported()) {
      if (t && a) {
        var e = e => {
          e = e || (null == t ? void 0 : t.event);
          try {
            this._captureEvent(e);
          } catch (e) {
            Wn.error("Failed to capture event", e);
          }
        };
        if (oe(a, "submit", e, {
          capture: !0
        }), oe(a, "change", e, {
          capture: !0
        }), oe(a, "click", e, {
          capture: !0
        }), this.config.capture_copied_text) {
          var i = e => {
            e = e || (null == t ? void 0 : t.event), this._captureEvent(e, v);
          };
          oe(a, "copy", i, {
            capture: !0
          }), oe(a, "cut", i, {
            capture: !0
          });
        }
      }
    } else Wn.info("Disabling Automatic Event Collection because this browser is not supported");
  }
  startIfEnabled() {
    this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0);
  }
  onRemoteConfig(e) {
    e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), 
    this.instance.persistence && this.instance.persistence.register({
      [ue]: !!e.autocapture_opt_out
    }), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled();
  }
  setElementSelectors(e) {
    this._elementSelectors = e;
  }
  getElementSelectors(e) {
    var t, i = [];
    return null === (t = this._elementSelectors) || void 0 === t || t.forEach((t => {
      var r = null == a ? void 0 : a.querySelectorAll(t);
      null == r || r.forEach((r => {
        e === r && i.push(t);
      }));
    })), i;
  }
  get isEnabled() {
    var e, t, i = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[ue], r = this._isDisabledServerSide;
    if ($(r) && !A(i) && !this.instance.config.advanced_disable_decide) return !1;
    var s = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!i;
    return !!this.instance.config.autocapture && !s;
  }
  _captureEvent(e) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
    if (this.isEnabled) {
      var r, s = Bi(e);
      if (Oi(s) && (s = s.parentNode || null), "$autocapture" === i && "click" === e.type && e instanceof MouseEvent) this.instance.config.rageclick && null !== (r = this.rageclicks) && void 0 !== r && r.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, "$rageclick");
      var n = i === v;
      if (s && zi(s, e, this.config, n, n ? [ "copy", "cut" ] : void 0)) {
        var {props: o, explicitNoCapture: a} = Yn(s, {
          e: e,
          maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
          maskAllText: this.instance.config.mask_all_text,
          elementAttributeIgnoreList: this.config.element_attribute_ignorelist,
          elementsChainAsString: this._elementsChainAsString
        });
        if (a) return !1;
        var l = this.getElementSelectors(s);
        if (l && l.length > 0 && (o.$element_selectors = l), i === v) {
          var c, u = Ni(null == t || null === (c = t.getSelection()) || void 0 === c ? void 0 : c.toString()), d = e.type || "clipboard";
          if (!u) return !1;
          o.$selected_content = u, o.$copy_type = d;
        }
        return this.instance.capture(i, o), !0;
      }
    }
  }
  isBrowserSupported() {
    return I(null == a ? void 0 : a.querySelectorAll);
  }
}

var Xn = B("[TracingHeaders]");

class Qn {
  constructor(e) {
    W(this, "_restoreXHRPatch", void 0), W(this, "_restoreFetchPatch", void 0), W(this, "_startCapturing", (() => {
      var e, t, i, r;
      R(this._restoreXHRPatch) && (null === (e = _.__PosthogExtensions__) || void 0 === e || null === (t = e.tracingHeadersPatchFns) || void 0 === t || t._patchXHR(this.instance.sessionManager));
      R(this._restoreFetchPatch) && (null === (i = _.__PosthogExtensions__) || void 0 === i || null === (r = i.tracingHeadersPatchFns) || void 0 === r || r._patchFetch(this.instance.sessionManager));
    })), this.instance = e;
  }
  _loadScript(e) {
    var t, i, r;
    null !== (t = _.__PosthogExtensions__) && void 0 !== t && t.tracingHeadersPatchFns && e(), 
    null === (i = _.__PosthogExtensions__) || void 0 === i || null === (r = i.loadExternalDependency) || void 0 === r || r.call(i, this.instance, "tracing-headers", (t => {
      if (t) return Xn.error("failed to load script", t);
      e();
    }));
  }
  startIfEnabledOrStop() {
    var e, t;
    this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e = this._restoreXHRPatch) || void 0 === e || e.call(this), 
    null === (t = this._restoreFetchPatch) || void 0 === t || t.call(this), this._restoreXHRPatch = void 0, 
    this._restoreFetchPatch = void 0);
  }
}

var Zn;

!function(e) {
  e[e.PENDING = -1] = "PENDING", e[e.DENIED = 0] = "DENIED", e[e.GRANTED = 1] = "GRANTED";
}(Zn || (Zn = {}));

class eo {
  constructor(e) {
    this.instance = e;
  }
  get config() {
    return this.instance.config;
  }
  get consent() {
    return this.getDnt() ? Zn.DENIED : this.storedConsent;
  }
  isOptedOut() {
    return this.consent === Zn.DENIED || this.consent === Zn.PENDING && this.config.opt_out_capturing_by_default;
  }
  isOptedIn() {
    return !this.isOptedOut();
  }
  optInOut(e) {
    this.storage.set(this.storageKey, e ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie);
  }
  reset() {
    this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie);
  }
  get storageKey() {
    var {token: e, opt_out_capturing_cookie_prefix: t} = this.instance.config;
    return (t || "__ph_opt_in_out_") + e;
  }
  get storedConsent() {
    var e = this.storage.get(this.storageKey);
    return "1" === e ? Zn.GRANTED : "0" === e ? Zn.DENIED : Zn.PENDING;
  }
  get storage() {
    if (!this._storage) {
      var e = this.config.opt_out_capturing_persistence_type;
      this._storage = "localStorage" === e ? ut : lt;
      var t = "localStorage" === e ? lt : ut;
      t.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t.get(this.storageKey)), 
      t.remove(this.storageKey, this.config.cross_subdomain_cookie));
    }
    return this._storage;
  }
  getDnt() {
    return !!this.config.respect_dnt && !!ne([ null == o ? void 0 : o.doNotTrack, null == o ? void 0 : o.msDoNotTrack, _.doNotTrack ], (e => m([ !0, 1, "1", "yes" ], e)));
  }
}

var to = B("[ExceptionAutocapture]");

class io {
  constructor(e) {
    var i;
    W(this, "originalOnUnhandledRejectionHandler", void 0), W(this, "startCapturing", (() => {
      var e, i, r, s;
      if (t && this.isEnabled && !this.hasHandlers && !this.isCapturing) {
        var n = null === (e = _.__PosthogExtensions__) || void 0 === e || null === (i = e.errorWrappingFunctions) || void 0 === i ? void 0 : i.wrapOnError, o = null === (r = _.__PosthogExtensions__) || void 0 === r || null === (s = r.errorWrappingFunctions) || void 0 === s ? void 0 : s.wrapUnhandledRejection;
        if (n && o) try {
          this.unwrapOnError = n(this.captureException.bind(this)), this.unwrapUnhandledRejection = o(this.captureException.bind(this));
        } catch (e) {
          to.error("failed to start", e), this.stopCapturing();
        } else to.error("failed to load error wrapping functions - cannot start");
      }
    })), this.instance = e, this.remoteEnabled = !(null === (i = this.instance.persistence) || void 0 === i || !i.props[he]), 
    this.startIfEnabled();
  }
  get isEnabled() {
    var e;
    return null !== (e = this.remoteEnabled) && void 0 !== e && e;
  }
  get isCapturing() {
    var e;
    return !(null == t || null === (e = t.onerror) || void 0 === e || !e.__POSTHOG_INSTRUMENTED__);
  }
  get hasHandlers() {
    return this.originalOnUnhandledRejectionHandler || this.unwrapOnError;
  }
  startIfEnabled() {
    this.isEnabled && !this.isCapturing && (to.info("enabled, starting..."), this.loadScript(this.startCapturing));
  }
  loadScript(e) {
    var t, i;
    this.hasHandlers && e(), null === (t = _.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, "exception-autocapture", (t => {
      if (t) return to.error("failed to load script", t);
      e();
    }));
  }
  stopCapturing() {
    var e, t;
    null === (e = this.unwrapOnError) || void 0 === e || e.call(this), null === (t = this.unwrapUnhandledRejection) || void 0 === t || t.call(this);
  }
  onRemoteConfig(e) {
    var t = e.autocaptureExceptions;
    this.remoteEnabled = !!t || !1, this.instance.persistence && this.instance.persistence.register({
      [he]: this.remoteEnabled
    }), this.startIfEnabled();
  }
  captureException(e) {
    var t = this.instance.requestRouter.endpointFor("ui");
    e.$exception_personURL = "".concat(t, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id()), 
    this.instance.exceptions.sendExceptionEvent(e);
  }
}

var ro = B("[Web Vitals]"), so = 9e5;

class no {
  constructor(e) {
    var t;
    W(this, "_enabledServerSide", !1), W(this, "_initialized", !1), W(this, "buffer", {
      url: void 0,
      metrics: [],
      firstMetricTimestamp: void 0
    }), W(this, "_flushToCapture", (() => {
      clearTimeout(this._delayedFlushTimer), 0 !== this.buffer.metrics.length && (this.instance.capture("$web_vitals", this.buffer.metrics.reduce(((e, t) => j(j({}, e), {}, {
        ["$web_vitals_".concat(t.name, "_event")]: j({}, t),
        ["$web_vitals_".concat(t.name, "_value")]: t.value
      })), {})), this.buffer = {
        url: void 0,
        metrics: [],
        firstMetricTimestamp: void 0
      });
    })), W(this, "_addToBuffer", (e => {
      var t, i = null === (t = this.instance.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0);
      if (R(i)) ro.error("Could not read session ID. Dropping metrics!"); else {
        this.buffer = this.buffer || {
          url: void 0,
          metrics: [],
          firstMetricTimestamp: void 0
        };
        var r = this._currentURL();
        if (!R(r)) if (O(null == e ? void 0 : e.name) || O(null == e ? void 0 : e.value)) ro.error("Invalid metric received", e); else if (this._maxAllowedValue && e.value >= this._maxAllowedValue) ro.error("Ignoring metric with value >= " + this._maxAllowedValue, e); else this.buffer.url !== r && (this._flushToCapture(), 
        this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), 
        R(this.buffer.url) && (this.buffer.url = r), this.buffer.firstMetricTimestamp = R(this.buffer.firstMetricTimestamp) ? Date.now() : this.buffer.firstMetricTimestamp, 
        e.attribution && e.attribution.interactionTargetElement && (e.attribution.interactionTargetElement = void 0), 
        this.buffer.metrics.push(j(j({}, e), {}, {
          $current_url: r,
          $session_id: i.sessionId,
          $window_id: i.windowId,
          timestamp: Date.now()
        })), this.buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture();
      }
    })), W(this, "_startCapturing", (() => {
      var e, t, i, r, s = _.__PosthogExtensions__;
      R(s) || R(s.postHogWebVitalsCallbacks) || ({onLCP: e, onCLS: t, onFCP: i, onINP: r} = s.postHogWebVitalsCallbacks), 
      e && t && i && r ? (this.allowedMetrics.indexOf("LCP") > -1 && e(this._addToBuffer.bind(this)), 
      this.allowedMetrics.indexOf("CLS") > -1 && t(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && i(this._addToBuffer.bind(this)), 
      this.allowedMetrics.indexOf("INP") > -1 && r(this._addToBuffer.bind(this)), this._initialized = !0) : ro.error("web vitals callbacks not loaded - not starting");
    })), this.instance = e, this._enabledServerSide = !(null === (t = this.instance.persistence) || void 0 === t || !t.props[_e]), 
    this.startIfEnabled();
  }
  get allowedMetrics() {
    var e, t, i = C(this.instance.config.capture_performance) ? null === (e = this.instance.config.capture_performance) || void 0 === e ? void 0 : e.web_vitals_allowed_metrics : void 0;
    return R(i) ? (null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.props[ve]) || [ "CLS", "FCP", "INP", "LCP" ] : i;
  }
  get flushToCaptureTimeoutMs() {
    return (C(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3;
  }
  get _maxAllowedValue() {
    var e = C(this.instance.config.capture_performance) && M(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : so;
    return 0 < e && e <= 6e4 ? so : e;
  }
  get isEnabled() {
    var e = C(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
    return A(e) ? e : this._enabledServerSide;
  }
  startIfEnabled() {
    this.isEnabled && !this._initialized && (ro.info("enabled, starting..."), this.loadScript(this._startCapturing));
  }
  onRemoteConfig(e) {
    var t = C(e.capturePerformance) && !!e.capturePerformance.web_vitals, i = C(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
    this.instance.persistence && (this.instance.persistence.register({
      [_e]: t
    }), this.instance.persistence.register({
      [ve]: i
    })), this._enabledServerSide = t, this.startIfEnabled();
  }
  loadScript(e) {
    var t, i, r;
    null !== (t = _.__PosthogExtensions__) && void 0 !== t && t.postHogWebVitalsCallbacks && e(), 
    null === (i = _.__PosthogExtensions__) || void 0 === i || null === (r = i.loadExternalDependency) || void 0 === r || r.call(i, this.instance, "web-vitals", (t => {
      t ? ro.error("failed to load script", t) : e();
    }));
  }
  _currentURL() {
    var e = t ? t.location.href : void 0;
    return e || ro.error("Could not determine current URL"), e;
  }
}

var oo = {
  icontains: (e, i) => !!t && i.href.toLowerCase().indexOf(e.toLowerCase()) > -1,
  not_icontains: (e, i) => !!t && -1 === i.href.toLowerCase().indexOf(e.toLowerCase()),
  regex: (e, i) => !!t && bt(i.href, e),
  not_regex: (e, i) => !!t && !bt(i.href, e),
  exact: (e, t) => t.href === e,
  is_not: (e, t) => t.href !== e
};

class ao {
  constructor(e) {
    var t = this;
    W(this, "getWebExperimentsAndEvaluateDisplayLogic", (function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      t.getWebExperiments((e => {
        ao.logInfo("retrieved web experiments from the server"), t._flagToExperiments = new Map, 
        e.forEach((e => {
          if (e.feature_flag_key) {
            var i;
            if (t._flagToExperiments) ao.logInfo("setting flag key ", e.feature_flag_key, " to web experiment ", e), 
            null === (i = t._flagToExperiments) || void 0 === i || i.set(e.feature_flag_key, e);
            var r = t.instance.getFeatureFlag(e.feature_flag_key);
            F(r) && e.variants[r] && t.applyTransforms(e.name, r, e.variants[r].transforms);
          } else if (e.variants) for (var s in e.variants) {
            var n = e.variants[s];
            ao.matchesTestVariant(n) && t.applyTransforms(e.name, s, n.transforms);
          }
        }));
      }), e);
    })), this.instance = e, this.instance.onFeatureFlags((e => {
      this.onFeatureFlags(e);
    }));
  }
  onFeatureFlags(e) {
    if (this._is_bot()) ao.logInfo("Refusing to render web experiment since the viewer is a likely bot"); else if (!this.instance.config.disable_web_experiments) {
      if (O(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), 
      void this.previewWebExperiment();
      ao.logInfo("applying feature flags", e), e.forEach((e => {
        var t;
        if (this._flagToExperiments && null !== (t = this._flagToExperiments) && void 0 !== t && t.has(e)) {
          var i, r = this.instance.getFeatureFlag(e), s = null === (i = this._flagToExperiments) || void 0 === i ? void 0 : i.get(e);
          r && null != s && s.variants[r] && this.applyTransforms(s.name, r, s.variants[r].transforms);
        }
      }));
    }
  }
  previewWebExperiment() {
    var e = ao.getWindowLocation();
    if (null != e && e.search) {
      var t = wt(null == e ? void 0 : e.search, "__experiment_id"), i = wt(null == e ? void 0 : e.search, "__experiment_variant");
      t && i && (ao.logInfo("previewing web experiments ".concat(t, " && ").concat(i)), 
      this.getWebExperiments((e => {
        this.showPreviewWebExperiment(parseInt(t), i, e);
      }), !1, !0));
    }
  }
  loadIfEnabled() {
    this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
  }
  getWebExperiments(e, t, i) {
    if (this.instance.config.disable_web_experiments && !i) return e([]);
    var r = this.instance.get_property("$web_experiments");
    if (r && !t) return e(r);
    this.instance._send_request({
      url: this.instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=".concat(this.instance.config.token)),
      method: "GET",
      callback: t => {
        if (200 !== t.statusCode || !t.json) return e([]);
        var i = t.json.experiments || [];
        return e(i);
      }
    });
  }
  showPreviewWebExperiment(e, t, i) {
    var r = i.filter((t => t.id === e));
    r && r.length > 0 && (ao.logInfo("Previewing web experiment [".concat(r[0].name, "] with variant [").concat(t, "]")), 
    this.applyTransforms(r[0].name, t, r[0].variants[t].transforms));
  }
  static matchesTestVariant(e) {
    return !O(e.conditions) && (ao.matchUrlConditions(e) && ao.matchUTMConditions(e));
  }
  static matchUrlConditions(e) {
    var t;
    if (O(e.conditions) || O(null === (t = e.conditions) || void 0 === t ? void 0 : t.url)) return !0;
    var i, r, s, n = ao.getWindowLocation();
    return !!n && (null === (i = e.conditions) || void 0 === i || !i.url || oo[null !== (r = null === (s = e.conditions) || void 0 === s ? void 0 : s.urlMatchType) && void 0 !== r ? r : "icontains"](e.conditions.url, n));
  }
  static getWindowLocation() {
    return null == t ? void 0 : t.location;
  }
  static matchUTMConditions(e) {
    var t;
    if (O(e.conditions) || O(null === (t = e.conditions) || void 0 === t ? void 0 : t.utm)) return !0;
    var i = ki.campaignParams();
    if (i.utm_source) {
      var r, s, n, o, a, l, c, u, d, h, _, p, v, g, f, m, b = null === (r = e.conditions) || void 0 === r || null === (s = r.utm) || void 0 === s || !s.utm_campaign || (null === (n = e.conditions) || void 0 === n || null === (o = n.utm) || void 0 === o ? void 0 : o.utm_campaign) == i.utm_campaign, y = null === (a = e.conditions) || void 0 === a || null === (l = a.utm) || void 0 === l || !l.utm_source || (null === (c = e.conditions) || void 0 === c || null === (u = c.utm) || void 0 === u ? void 0 : u.utm_source) == i.utm_source, w = null === (d = e.conditions) || void 0 === d || null === (h = d.utm) || void 0 === h || !h.utm_medium || (null === (_ = e.conditions) || void 0 === _ || null === (p = _.utm) || void 0 === p ? void 0 : p.utm_medium) == i.utm_medium, S = null === (v = e.conditions) || void 0 === v || null === (g = v.utm) || void 0 === g || !g.utm_term || (null === (f = e.conditions) || void 0 === f || null === (m = f.utm) || void 0 === m ? void 0 : m.utm_term) == i.utm_term;
      return b && w && S && y;
    }
    return !1;
  }
  static logInfo(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
    q.info("[WebExperiments] ".concat(e), i);
  }
  applyTransforms(e, t, i) {
    this._is_bot() ? ao.logInfo("Refusing to render web experiment since the viewer is a likely bot") : "control" !== t ? i.forEach((i => {
      if (i.selector) {
        var r;
        ao.logInfo("applying transform of variant ".concat(t, " for experiment ").concat(e, " "), i);
        var s = null === (r = document) || void 0 === r ? void 0 : r.querySelectorAll(i.selector);
        null == s || s.forEach((e => {
          var t = e;
          i.attributes && i.attributes.forEach((e => {
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
        }));
      }
    })) : ao.logInfo("Control variants leave the page unmodified.");
  }
  _is_bot() {
    return o && this.instance ? An(o, this.instance.config.custom_blocked_useragents) : void 0;
  }
}

class lo {
  constructor(e) {
    this.instance = e;
  }
  sendExceptionEvent(e) {
    this.instance.capture("$exception", e, {
      _noTruncate: !0,
      _batchKey: "exceptionEvent"
    });
  }
}

var co = [ "$set_once", "$set" ], uo = B("[SiteApps]");

class ho {
  constructor(e) {
    this.instance = e, this.bufferedInvocations = [], this.apps = {};
  }
  get isEnabled() {
    return !!this.instance.config.opt_in_site_apps;
  }
  eventCollector(e, t) {
    if (t) {
      var i = this.globalsForEvent(t);
      this.bufferedInvocations.push(i), this.bufferedInvocations.length > 1e3 && (this.bufferedInvocations = this.bufferedInvocations.slice(10));
    }
  }
  get siteAppLoaders() {
    var e, t;
    return null === (e = _._POSTHOG_REMOTE_CONFIG) || void 0 === e || null === (t = e[this.instance.config.token]) || void 0 === t ? void 0 : t.siteApps;
  }
  init() {
    if (this.isEnabled) {
      var e = this.instance._addCaptureHook(this.eventCollector.bind(this));
      this.stopBuffering = () => {
        e(), this.bufferedInvocations = [], this.stopBuffering = void 0;
      };
    }
  }
  globalsForEvent(e) {
    var t, i, r, s, n, o, a;
    if (!e) throw new Error("Event payload is required");
    var l = {}, c = this.instance.get_property("$groups") || [], u = this.instance.get_property("$stored_group_properties") || {};
    for (var [d, h] of Object.entries(u)) l[d] = {
      id: c[d],
      type: d,
      properties: h
    };
    var {$set_once: _, $set: p} = e;
    return {
      event: j(j({}, V(e, co)), {}, {
        properties: j(j(j({}, e.properties), p ? {
          $set: j(j({}, null !== (t = null === (i = e.properties) || void 0 === i ? void 0 : i.$set) && void 0 !== t ? t : {}), p)
        } : {}), _ ? {
          $set_once: j(j({}, null !== (r = null === (s = e.properties) || void 0 === s ? void 0 : s.$set_once) && void 0 !== r ? r : {}), _)
        } : {}),
        elements_chain: null !== (n = null === (o = e.properties) || void 0 === o ? void 0 : o.$elements_chain) && void 0 !== n ? n : "",
        distinct_id: null === (a = e.properties) || void 0 === a ? void 0 : a.distinct_id
      }),
      person: {
        properties: this.instance.get_property("$stored_person_properties")
      },
      groups: l
    };
  }
  setupSiteApp(e) {
    var t = {
      id: e.id,
      loaded: !1,
      errored: !1
    };
    this.apps[e.id] = t;
    var i = i => {
      var r;
      for (var s of (this.apps[e.id].errored = !i, this.apps[e.id].loaded = !0, uo.info("Site app with id ".concat(e.id, " ").concat(i ? "loaded" : "errored")), 
      i && this.bufferedInvocations.length && (uo.info("Processing ".concat(this.bufferedInvocations.length, " events for site app with id ").concat(e.id)), 
      this.bufferedInvocations.forEach((e => {
        var i;
        return null === (i = t.processEvent) || void 0 === i ? void 0 : i.call(t, e);
      }))), Object.values(this.apps))) if (!s.loaded) return;
      null === (r = this.stopBuffering) || void 0 === r || r.call(this);
    };
    try {
      var {processEvent: r} = e.init({
        posthog: this.instance,
        callback: e => {
          i(e);
        }
      });
      r && (t.processEvent = r);
    } catch (t) {
      uo.error("Error while initializing PostHog app with config id ".concat(e.id), t), 
      i(!1);
    }
  }
  onCapturedEvent(e) {
    if (0 !== Object.keys(this.apps).length) {
      var t = this.globalsForEvent(e);
      for (var i of Object.values(this.apps)) try {
        var r;
        null === (r = i.processEvent) || void 0 === r || r.call(i, t);
      } catch (t) {
        uo.error("Error while processing event ".concat(e.event, " for site app ").concat(i.id), t);
      }
    }
  }
  onRemoteConfig(e) {
    var t, i, r, s = this;
    if (null !== (t = this.siteAppLoaders) && void 0 !== t && t.length) {
      if (!this.isEnabled) return void uo.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
      for (var n of this.siteAppLoaders) this.setupSiteApp(n);
      this.instance.on("eventCaptured", (e => this.onCapturedEvent(e)));
    } else if (null === (i = this.stopBuffering) || void 0 === i || i.call(this), null !== (r = e.siteApps) && void 0 !== r && r.length) if (this.isEnabled) {
      var o = function(e, t) {
        var i, r;
        _["__$$ph_site_app_".concat(e)] = s.instance, null === (i = _.__PosthogExtensions__) || void 0 === i || null === (r = i.loadSiteApp) || void 0 === r || r.call(i, s.instance, t, (t => {
          if (t) return uo.error("Error while initializing PostHog app with config id ".concat(e), t);
        }));
      };
      for (var {id: a, url: l} of e.siteApps) o(a, l);
    } else uo.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
  }
}

function _o(e, t, i) {
  return ws({
    distinct_id: e,
    userPropertiesToSet: t,
    userPropertiesToSetOnce: i
  });
}

var po = {}, vo = () => {}, go = "posthog", fo = !ms && -1 === (null == h ? void 0 : h.indexOf("MSIE")) && -1 === (null == h ? void 0 : h.indexOf("Mozilla")), mo = () => {
  var e;
  return {
    api_host: "https://us.i.posthog.com",
    ui_host: null,
    token: "",
    autocapture: !0,
    rageclick: !0,
    cross_subdomain_cookie: se(null == a ? void 0 : a.location),
    persistence: "localStorage+cookie",
    persistence_name: "",
    loaded: vo,
    save_campaign_params: !0,
    custom_campaign_params: [],
    custom_blocked_useragents: [],
    save_referrer: !0,
    capture_pageview: !0,
    capture_pageleave: "if_capture_pageview",
    debug: l && F(null == l ? void 0 : l.search) && -1 !== l.search.indexOf("__posthog_debug=true") || !1,
    cookie_expiration: 365,
    upgrade: !1,
    disable_session_recording: !1,
    disable_persistence: !1,
    disable_web_experiments: !0,
    disable_surveys: !1,
    disable_external_dependency_loading: !1,
    enable_recording_console_log: void 0,
    secure_cookie: "https:" === (null == t || null === (e = t.location) || void 0 === e ? void 0 : e.protocol),
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
    request_batching: !0,
    properties_string_max_length: 65535,
    session_recording: {},
    mask_all_element_attributes: !1,
    mask_all_text: !1,
    mask_personal_data_properties: !1,
    custom_personal_data_properties: [],
    advanced_disable_decide: !1,
    advanced_disable_feature_flags: !1,
    advanced_disable_feature_flags_on_first_load: !1,
    advanced_disable_toolbar_metrics: !1,
    feature_flag_request_timeout_ms: 3e3,
    on_request_error: e => {
      var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
      q.error(t);
    },
    get_device_id: e => e,
    capture_performance: void 0,
    name: "posthog",
    bootstrap: {},
    disable_compression: !1,
    session_idle_timeout_seconds: 1800,
    person_profiles: "identified_only",
    before_send: void 0,
    _onCapture: vo
  };
}, bo = e => {
  var t = {};
  R(e.process_person) || (t.person_profiles = e.process_person), R(e.xhr_headers) || (t.request_headers = e.xhr_headers), 
  R(e.cookie_name) || (t.persistence_name = e.cookie_name), R(e.disable_cookie) || (t.disable_persistence = e.disable_cookie), 
  R(e.store_google) || (t.save_campaign_params = e.store_google), R(e.verbose) || (t.debug = e.verbose);
  var i = K({}, t, e);
  return x(e.property_blacklist) && (R(e.property_denylist) ? i.property_denylist = e.property_blacklist : x(e.property_denylist) ? i.property_denylist = [ ...e.property_blacklist, ...e.property_denylist ] : q.error("Invalid value for property_denylist config: " + e.property_denylist)), 
  i;
};

class yo {
  constructor() {
    W(this, "__forceAllowLocalhost", !1);
  }
  get _forceAllowLocalhost() {
    return this.__forceAllowLocalhost;
  }
  set _forceAllowLocalhost(e) {
    q.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), 
    this.__forceAllowLocalhost = e;
  }
}

class wo {
  get decideEndpointWasHit() {
    var e, t;
    return null !== (e = null === (t = this.featureFlags) || void 0 === t ? void 0 : t.hasLoadedFlags) && void 0 !== e && e;
  }
  constructor() {
    W(this, "webPerformance", new yo), W(this, "version", p.LIB_VERSION), W(this, "_internalEventEmitter", new Sn), 
    this.config = mo(), this.SentryIntegration = Os, this.sentryIntegration = e => function(e, t) {
      var i = $s(e, t);
      return {
        name: Ts,
        processEvent: e => i(e)
      };
    }(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", 
    this._initialPageviewCaptured = !1, this._initialPersonProfilesConfig = null, this._cachedIdentify = null, 
    this.featureFlags = new Ye(this), this.toolbar = new vs(this), this.scrollManager = new jn(this), 
    this.pageViewManager = new Ls(this), this.surveys = new Pn(this), this.experiments = new ao(this), 
    this.exceptions = new lo(this), this.rateLimiter = new Fn(this), this.requestRouter = new Fs(this), 
    this.consent = new eo(this), this.people = {
      set: (e, t, i) => {
        var r = F(e) ? {
          [e]: t
        } : e;
        this.setPersonProperties(r), null == i || i({});
      },
      set_once: (e, t, i) => {
        var r = F(e) ? {
          [e]: t
        } : e;
        this.setPersonProperties(void 0, r), null == i || i({});
      }
    }, this.on("eventCaptured", (e => q.info('send "'.concat(null == e ? void 0 : e.event, '"'), e)));
  }
  init(e, t, i) {
    if (i && i !== go) {
      var r, s = null !== (r = po[i]) && void 0 !== r ? r : new wo;
      return s._init(e, t, i), po[i] = s, po[go][i] = s, s;
    }
    return this._init(e, t, i);
  }
  _init(i) {
    var r, s, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0;
    if (R(i) || T(i)) return q.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), 
    this;
    if (this.__loaded) return q.warn("You have already initialized PostHog! Re-initializing is a no-op"), 
    this;
    this.__loaded = !0, this.config = {}, this._triggered_notifs = [], n.person_profiles && (this._initialPersonProfilesConfig = n.person_profiles), 
    this.set_config(K({}, mo(), bo(n), {
      name: o,
      token: i
    })), this.config.on_xhr_error && q.error("on_xhr_error is deprecated. Use on_request_error instead"), 
    this.compression = n.disable_compression ? void 0 : e.GZipJS, this.persistence = new xi(this.config), 
    this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new xi(j(j({}, this.config), {}, {
      persistence: "sessionStorage"
    }));
    var a = j({}, this.persistence.props), l = j({}, this.sessionPersistence.props);
    if (this._requestQueue = new gs((e => this._send_retriable_request(e))), this._retryQueue = new xs(this), 
    this.__request_queue = [], this.config.__preview_experimental_cookieless_mode || (this.sessionManager = new Ps(this), 
    this.sessionPropsManager = new $n(this, this.sessionManager, this.persistence)), 
    new Qn(this).startIfEnabledOrStop(), this.siteApps = new ho(this), null === (r = this.siteApps) || void 0 === r || r.init(), 
    this.config.__preview_experimental_cookieless_mode || (this.sessionRecording = new ls(this), 
    this.sessionRecording.startIfEnabledOrStop()), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), 
    this.autocapture = new Kn(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), 
    this.heatmaps = new zn(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new no(this), 
    this.exceptionObserver = new io(this), this.exceptionObserver.startIfEnabled(), 
    this.deadClicksAutocapture = new Bn(this, qn), this.deadClicksAutocapture.startIfEnabled(), 
    p.DEBUG = p.DEBUG || this.config.debug, p.DEBUG && q.info("Starting in debug mode", {
      this: this,
      config: n,
      thisC: j({}, this.config),
      p: a,
      s: l
    }), this._sync_opt_out_with_persistence(), void 0 !== (null === (s = n.bootstrap) || void 0 === s ? void 0 : s.distinctID)) {
      var c, u, d = this.config.get_device_id(it()), h = null !== (c = n.bootstrap) && void 0 !== c && c.isIdentifiedID ? d : n.bootstrap.distinctID;
      this.persistence.set_property(Me, null !== (u = n.bootstrap) && void 0 !== u && u.isIdentifiedID ? "identified" : "anonymous"), 
      this.register({
        distinct_id: n.bootstrap.distinctID,
        $device_id: h
      });
    }
    if (this._hasBootstrappedFeatureFlags()) {
      var _, v, g = Object.keys((null === (_ = n.bootstrap) || void 0 === _ ? void 0 : _.featureFlags) || {}).filter((e => {
        var t, i;
        return !(null === (t = n.bootstrap) || void 0 === t || null === (i = t.featureFlags) || void 0 === i || !i[e]);
      })).reduce(((e, t) => {
        var i, r;
        return e[t] = (null === (i = n.bootstrap) || void 0 === i || null === (r = i.featureFlags) || void 0 === r ? void 0 : r[t]) || !1, 
        e;
      }), {}), f = Object.keys((null === (v = n.bootstrap) || void 0 === v ? void 0 : v.featureFlagPayloads) || {}).filter((e => g[e])).reduce(((e, t) => {
        var i, r, s, o;
        null !== (i = n.bootstrap) && void 0 !== i && null !== (r = i.featureFlagPayloads) && void 0 !== r && r[t] && (e[t] = null === (s = n.bootstrap) || void 0 === s || null === (o = s.featureFlagPayloads) || void 0 === o ? void 0 : o[t]);
        return e;
      }), {});
      this.featureFlags.receivedFeatureFlags({
        featureFlags: g,
        featureFlagPayloads: f
      });
    }
    if (this.config.__preview_experimental_cookieless_mode) this.register_once({
      distinct_id: Ue,
      $device_id: null
    }, ""); else if (!this.get_distinct_id()) {
      var m = this.config.get_device_id(it());
      this.register_once({
        distinct_id: m,
        $device_id: m
      }, ""), this.persistence.set_property(Me, "anonymous");
    }
    return oe(t, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
      passive: !1
    }), this.toolbar.maybeLoadToolbar(), n.segment ? As(this, (() => this._loaded())) : this._loaded(), 
    I(this.config._onCapture) && this.config._onCapture !== vo && (q.warn("onCapture is deprecated. Please use `before_send` instead"), 
    this.on("eventCaptured", (e => this.config._onCapture(e.event, e)))), this;
  }
  _onRemoteConfig(t) {
    var i, r, s, n, o, l, c, u;
    if (!a || !a.body) return q.info("document not ready yet, trying again in 500 milliseconds..."), 
    void setTimeout((() => {
      this._onRemoteConfig(t);
    }), 500);
    this.compression = void 0, t.supportedCompression && !this.config.disable_compression && (this.compression = m(t.supportedCompression, e.GZipJS) ? e.GZipJS : m(t.supportedCompression, e.Base64) ? e.Base64 : void 0), 
    null !== (i = t.analytics) && void 0 !== i && i.endpoint && (this.analyticsDefaultEndpoint = t.analytics.endpoint), 
    this.set_config({
      person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : "identified_only"
    }), null === (r = this.siteApps) || void 0 === r || r.onRemoteConfig(t), null === (s = this.sessionRecording) || void 0 === s || s.onRemoteConfig(t), 
    null === (n = this.autocapture) || void 0 === n || n.onRemoteConfig(t), null === (o = this.heatmaps) || void 0 === o || o.onRemoteConfig(t), 
    this.surveys.onRemoteConfig(t), null === (l = this.webVitalsAutocapture) || void 0 === l || l.onRemoteConfig(t), 
    null === (c = this.exceptionObserver) || void 0 === c || c.onRemoteConfig(t), null === (u = this.deadClicksAutocapture) || void 0 === u || u.onRemoteConfig(t);
  }
  _loaded() {
    try {
      this.config.loaded(this);
    } catch (e) {
      q.critical("`loaded` function failed", e);
    }
    this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout((() => {
      this.consent.isOptedIn() && this._captureInitialPageview();
    }), 1), new us(this).load(), this.featureFlags.decide();
  }
  _start_queue_if_opted_in() {
    var e;
    this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.enable());
  }
  _dom_loaded() {
    this.has_opted_out_capturing() || J(this.__request_queue, (e => this._send_retriable_request(e))), 
    this.__request_queue = [], this._start_queue_if_opted_in();
  }
  _handle_unload() {
    var e, t;
    this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), 
    null === (e = this._requestQueue) || void 0 === e || e.unload(), null === (t = this._retryQueue) || void 0 === t || t.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, {
      transport: "sendBeacon"
    });
  }
  _send_request(e) {
    this.__loaded && (fo ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, 
    e.url = ys(e.url, {
      ip: this.config.ip ? 1 : 0
    }), e.headers = j({}, this.config.request_headers), e.compression = "best-available" === e.compression ? this.compression : e.compression, 
    e.fetchOptions = e.fetchOptions || this.config.fetch_options, (e => {
      var t, i, r, s = j({}, e);
      s.timeout = s.timeout || 6e4, s.url = ys(s.url, {
        _: (new Date).getTime().toString(),
        ver: p.LIB_VERSION,
        compression: s.compression
      });
      var n = null !== (t = s.transport) && void 0 !== t ? t : "fetch", o = null !== (i = null === (r = ne(ks, (e => e.transport === n))) || void 0 === r ? void 0 : r.method) && void 0 !== i ? i : ks[0].method;
      if (!o) throw new Error("No available transport method");
      o(s);
    })(j(j({}, e), {}, {
      callback: t => {
        var i, r, s;
        (this.rateLimiter.checkForLimiting(t), t.statusCode >= 400) && (null === (r = (s = this.config).on_request_error) || void 0 === r || r.call(s, t));
        null === (i = e.callback) || void 0 === i || i.call(e, t);
      }
    }))));
  }
  _send_retriable_request(e) {
    this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e);
  }
  _execute_array(e) {
    var t, i = [], r = [], s = [];
    J(e, (e => {
      e && (t = e[0], x(t) ? s.push(e) : I(e) ? e.call(this) : x(e) && "alias" === t ? i.push(e) : x(e) && -1 !== t.indexOf("capture") && I(this[t]) ? s.push(e) : r.push(e));
    }));
    var n = function(e, t) {
      J(e, (function(e) {
        if (x(e[0])) {
          var i = t;
          Y(e, (function(e) {
            i = i[e[0]].apply(i, e.slice(1));
          }));
        } else this[e[0]].apply(this, e.slice(1));
      }), t);
    };
    n(i, this), n(r, this), n(s, this);
  }
  _hasBootstrappedFeatureFlags() {
    var e, t;
    return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1;
  }
  push(e) {
    this._execute_array([ e ]);
  }
  capture(e, t, i) {
    var r;
    if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
      if (!this.consent.isOptedOut()) if (!R(e) && F(e)) {
        if (this.config.opt_out_useragent_filter || !this._is_bot()) {
          var s = null != i && i.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == s || !s.isRateLimited) {
            this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), 
            this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
            var n = new Date, o = (null == i ? void 0 : i.timestamp) || n, a = it(), l = {
              uuid: a,
              event: e,
              properties: this._calculate_event_properties(e, t || {}, o, a)
            };
            s && (l.properties.$lib_rate_limit_remaining_tokens = s.remainingTokens), (null == i ? void 0 : i.$set) && (l.$set = null == i ? void 0 : i.$set);
            var c = this._calculate_set_once_properties(null == i ? void 0 : i.$set_once);
            c && (l.$set_once = c), (l = ie(l, null != i && i._noTruncate ? null : this.config.properties_string_max_length)).timestamp = o, 
            R(null == i ? void 0 : i.timestamp) || (l.properties.$event_time_override_provided = !0, 
            l.properties.$event_time_override_system_time = n);
            var u = j(j({}, l.properties.$set), l.$set);
            if (P(u) || this.setPersonPropertiesForFlags(u), !O(this.config.before_send)) {
              var d = this._runBeforeSend(l);
              if (!d) return;
              l = d;
            }
            this._internalEventEmitter.emit("eventCaptured", l);
            var h = {
              method: "POST",
              url: null !== (r = null == i ? void 0 : i._url) && void 0 !== r ? r : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
              data: l,
              compression: "best-available",
              batchKey: null == i ? void 0 : i._batchKey
            };
            return !this.config.request_batching || i && (null == i || !i._batchKey) || null != i && i.send_instantly ? this._send_retriable_request(h) : this._requestQueue.enqueue(h), 
            l;
          }
          q.critical("This capture call is ignored due to client rate limiting.");
        }
      } else q.error("No event name provided to posthog.capture");
    } else q.uninitializedWarning("posthog.capture");
  }
  _addCaptureHook(e) {
    return this.on("eventCaptured", (t => e(t.event, t)));
  }
  _calculate_event_properties(e, t, i, r) {
    if (i = i || new Date, !this.persistence || !this.sessionPersistence) return t;
    var s = this.persistence.remove_event_timer(e), n = j({}, t);
    if (n.token = this.config.token, this.config.__preview_experimental_cookieless_mode && (n.$cookieless_mode = !0), 
    "$snapshot" === e) {
      var o = j(j({}, this.persistence.properties()), this.sessionPersistence.properties());
      return n.distinct_id = o.distinct_id, (!F(n.distinct_id) && !M(n.distinct_id) || T(n.distinct_id)) && q.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), 
      n;
    }
    var l, c = ki.properties({
      maskPersonalDataProperties: this.config.mask_personal_data_properties,
      customPersonalDataProperties: this.config.custom_personal_data_properties
    });
    if (this.sessionManager) {
      var {sessionId: u, windowId: d} = this.sessionManager.checkAndGetSessionAndWindowId();
      n.$session_id = u, n.$window_id = d;
    }
    if (this.sessionRecording && (n.$recording_status = this.sessionRecording.status), 
    this.requestRouter.region === Is.CUSTOM && (n.$lib_custom_api_host = this.config.api_host), 
    l = "$pageview" === e ? this.pageViewManager.doPageView(i, r) : "$pageleave" === e ? this.pageViewManager.doPageLeave(i) : this.pageViewManager.doEvent(), 
    n = K(n, l), "$pageview" === e && a && (n.title = a.title), !R(s)) {
      var _ = i.getTime() - s;
      n.$duration = parseFloat((_ / 1e3).toFixed(3));
    }
    h && this.config.opt_out_useragent_filter && (n.$browser_type = this._is_bot() ? "bot" : "browser"), 
    (n = K({}, c, this.persistence.properties(), this.sessionPersistence.properties(), n)).$is_identified = this._isIdentified(), 
    x(this.config.property_denylist) ? Y(this.config.property_denylist, (function(e) {
      delete n[e];
    })) : q.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
    var p = this.config.sanitize_properties;
    p && (q.error("sanitize_properties is deprecated. Use before_send instead"), n = p(n, e));
    var v = this._hasPersonProcessing();
    return n.$process_person_profile = v, v && this._requirePersonProcessing("_calculate_event_properties"), 
    n;
  }
  _calculate_set_once_properties(e) {
    if (!this.persistence || !this._hasPersonProcessing()) return e;
    var t = K({}, this.persistence.get_initial_props(), e || {}), i = this.config.sanitize_properties;
    return i && (q.error("sanitize_properties is deprecated. Use before_send instead"), 
    t = i(t, "$set_once")), P(t) ? void 0 : t;
  }
  register(e, t) {
    var i;
    null === (i = this.persistence) || void 0 === i || i.register(e, t);
  }
  register_once(e, t, i) {
    var r;
    null === (r = this.persistence) || void 0 === r || r.register_once(e, t, i);
  }
  register_for_session(e) {
    var t;
    null === (t = this.sessionPersistence) || void 0 === t || t.register(e);
  }
  unregister(e) {
    var t;
    null === (t = this.persistence) || void 0 === t || t.unregister(e);
  }
  unregister_for_session(e) {
    var t;
    null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e);
  }
  _register_single(e, t) {
    this.register({
      [e]: t
    });
  }
  getFeatureFlag(e, t) {
    return this.featureFlags.getFeatureFlag(e, t);
  }
  getFeatureFlagPayload(e) {
    var t = this.featureFlags.getFeatureFlagPayload(e);
    try {
      return JSON.parse(t);
    } catch (e) {
      return t;
    }
  }
  isFeatureEnabled(e, t) {
    return this.featureFlags.isFeatureEnabled(e, t);
  }
  reloadFeatureFlags() {
    this.featureFlags.reloadFeatureFlags();
  }
  updateEarlyAccessFeatureEnrollment(e, t) {
    this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t);
  }
  getEarlyAccessFeatures(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return this.featureFlags.getEarlyAccessFeatures(e, t);
  }
  on(e, t) {
    return this._internalEventEmitter.on(e, t);
  }
  onFeatureFlags(e) {
    return this.featureFlags.onFeatureFlags(e);
  }
  onSessionId(e) {
    var t, i;
    return null !== (t = null === (i = this.sessionManager) || void 0 === i ? void 0 : i.onSessionId(e)) && void 0 !== t ? t : () => {};
  }
  getSurveys(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getSurveys(e, t);
  }
  getActiveMatchingSurveys(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getActiveMatchingSurveys(e, t);
  }
  renderSurvey(e, t) {
    this.surveys.renderSurvey(e, t);
  }
  canRenderSurvey(e) {
    this.surveys.canRenderSurvey(e);
  }
  getNextSurveyStep(e, t, i) {
    return this.surveys.getNextSurveyStep(e, t, i);
  }
  identify(e, t, i) {
    if (!this.__loaded || !this.persistence) return q.uninitializedWarning("posthog.identify");
    if (M(e) && (e = e.toString(), q.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), 
    e) {
      if ([ "distinct_id", "distinctid" ].includes(e.toLowerCase())) q.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')); else if (this._requirePersonProcessing("posthog.identify")) {
        var r = this.get_distinct_id();
        if (this.register({
          $user_id: e
        }), !this.get_property("$device_id")) {
          var s = r;
          this.register_once({
            $had_persisted_distinct_id: !0,
            $device_id: s
          }, "");
        }
        e !== r && e !== this.get_property(le) && (this.unregister(le), this.register({
          distinct_id: e
        }));
        var n = "anonymous" === (this.persistence.get_property(Me) || "anonymous");
        e !== r && n ? (this.persistence.set_property(Me, "identified"), this.setPersonPropertiesForFlags(t || {}, !1), 
        this.capture("$identify", {
          distinct_id: e,
          $anon_distinct_id: r
        }, {
          $set: t || {},
          $set_once: i || {}
        }), this.featureFlags.setAnonymousDistinctId(r), this._cachedIdentify = _o(e, t, i)) : (t || i) && (this._cachedIdentify !== _o(e, t, i) ? (this.setPersonProperties(t, i), 
        this._cachedIdentify = _o(e, t, i)) : q.info("A duplicate posthog.identify call was made with the same properties. It has been ignored.")), 
        e !== r && (this.reloadFeatureFlags(), this.unregister(Oe));
      }
    } else q.error("Unique user id has not been set in posthog.identify");
  }
  setPersonProperties(e, t) {
    (e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e || {}), 
    this.capture("$set", {
      $set: e || {},
      $set_once: t || {}
    }));
  }
  group(e, t, i) {
    if (e && t) {
      if (this._requirePersonProcessing("posthog.group")) {
        var r = this.getGroups();
        r[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({
          $groups: j(j({}, r), {}, {
            [e]: t
          })
        }), i && (this.capture("$groupidentify", {
          $group_type: e,
          $group_key: t,
          $group_set: i
        }), this.setGroupPropertiesForFlags({
          [e]: i
        })), r[e] === t || i || this.reloadFeatureFlags();
      }
    } else q.error("posthog.group requires a group type and group key");
  }
  resetGroups() {
    this.register({
      $groups: {}
    }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
  }
  setPersonPropertiesForFlags(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this.featureFlags.setPersonPropertiesForFlags(e, t);
  }
  resetPersonPropertiesForFlags() {
    this.featureFlags.resetPersonPropertiesForFlags();
  }
  setGroupPropertiesForFlags(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t);
  }
  resetGroupPropertiesForFlags(e) {
    this.featureFlags.resetGroupPropertiesForFlags(e);
  }
  reset(e) {
    var t, i, r, s;
    if (q.info("reset"), !this.__loaded) return q.uninitializedWarning("posthog.reset");
    var n = this.get_property("$device_id");
    if (this.consent.reset(), null === (t = this.persistence) || void 0 === t || t.clear(), 
    null === (i = this.sessionPersistence) || void 0 === i || i.clear(), this.surveys.reset(), 
    null === (r = this.persistence) || void 0 === r || r.set_property(Me, "anonymous"), 
    null === (s = this.sessionManager) || void 0 === s || s.resetSessionId(), this._cachedIdentify = null, 
    this.config.__preview_experimental_cookieless_mode) this.register_once({
      distinct_id: Ue,
      $device_id: null
    }, ""); else {
      var o = this.config.get_device_id(it());
      this.register_once({
        distinct_id: o,
        $device_id: e ? o : n
      }, "");
    }
    this.register({
      $last_posthog_reset: (new Date).toISOString()
    }, 1);
  }
  get_distinct_id() {
    return this.get_property("distinct_id");
  }
  getGroups() {
    return this.get_property("$groups") || {};
  }
  get_session_id() {
    var e, t;
    return null !== (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e ? e : "";
  }
  get_session_replay_url(e) {
    if (!this.sessionManager) return "";
    var {sessionId: t, sessionStartTimestamp: i} = this.sessionManager.checkAndGetSessionAndWindowId(!0), r = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(t));
    if (null != e && e.withTimestamp && i) {
      var s, n = null !== (s = e.timestampLookBack) && void 0 !== s ? s : 10;
      if (!i) return r;
      var o = Math.max(Math.floor(((new Date).getTime() - i) / 1e3) - n, 0);
      r += "?t=".concat(o);
    }
    return r;
  }
  alias(e, t) {
    return e === this.get_property(ae) ? (q.critical("Attempting to create alias for existing People user - aborting."), 
    -2) : this._requirePersonProcessing("posthog.alias") ? (R(t) && (t = this.get_distinct_id()), 
    e !== t ? (this._register_single(le, e), this.capture("$create_alias", {
      alias: e,
      distinct_id: t
    })) : (q.warn("alias matches current distinct_id - skipping api call."), this.identify(e), 
    -1)) : void 0;
  }
  set_config(e) {
    var t, i, r, s, n = j({}, this.config);
    C(e) && (K(this.config, bo(e)), null === (t = this.persistence) || void 0 === t || t.update_config(this.config, n), 
    this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new xi(j(j({}, this.config), {}, {
      persistence: "sessionStorage"
    })), ut.is_supported() && "true" === ut.get("ph_debug") && (this.config.debug = !0), 
    this.config.debug && (p.DEBUG = !0, q.info("set_config", {
      config: e,
      oldConfig: n,
      newConfig: j({}, this.config)
    })), null === (i = this.sessionRecording) || void 0 === i || i.startIfEnabledOrStop(), 
    null === (r = this.autocapture) || void 0 === r || r.startIfEnabled(), null === (s = this.heatmaps) || void 0 === s || s.startIfEnabled(), 
    this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence());
  }
  startSessionRecording(e) {
    var t = !0 === e, i = {
      sampling: t || !(null == e || !e.sampling),
      linked_flag: t || !(null == e || !e.linked_flag),
      url_trigger: t || !(null == e || !e.url_trigger),
      event_trigger: t || !(null == e || !e.event_trigger)
    };
    if (Object.values(i).some(Boolean)) {
      var r, s, n, o, a;
      if (null === (r = this.sessionManager) || void 0 === r || r.checkAndGetSessionAndWindowId(), 
      i.sampling) null === (s = this.sessionRecording) || void 0 === s || s.overrideSampling();
      if (i.linked_flag) null === (n = this.sessionRecording) || void 0 === n || n.overrideLinkedFlag();
      if (i.url_trigger) null === (o = this.sessionRecording) || void 0 === o || o.overrideTrigger("url");
      if (i.event_trigger) null === (a = this.sessionRecording) || void 0 === a || a.overrideTrigger("event");
    }
    this.set_config({
      disable_session_recording: !1
    });
  }
  stopSessionRecording() {
    this.set_config({
      disable_session_recording: !0
    });
  }
  sessionRecordingStarted() {
    var e;
    return !(null === (e = this.sessionRecording) || void 0 === e || !e.started);
  }
  captureException(e, t) {
    var i, r = new Error("PostHog syntheticException"), s = I(null === (i = _.__PosthogExtensions__) || void 0 === i ? void 0 : i.parseErrorAsProperties) ? j(j({}, _.__PosthogExtensions__.parseErrorAsProperties([ e.message, void 0, void 0, void 0, e ], {
      syntheticException: r
    })), t) : j({
      $exception_level: "error",
      $exception_list: [ {
        type: e.name,
        value: e.message,
        mechanism: {
          handled: !0,
          synthetic: !1
        }
      } ]
    }, t);
    this.exceptions.sendExceptionEvent(s);
  }
  loadToolbar(e) {
    return this.toolbar.loadToolbar(e);
  }
  get_property(e) {
    var t;
    return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e];
  }
  getSessionProperty(e) {
    var t;
    return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e];
  }
  toString() {
    var e, t = null !== (e = this.config.name) && void 0 !== e ? e : go;
    return t !== go && (t = go + "." + t), t;
  }
  _isIdentified() {
    var e, t;
    return "identified" === (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(Me)) || "identified" === (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.get_property(Me));
  }
  _hasPersonProcessing() {
    var e, t, i, r;
    return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && P(this.getGroups()) && (null === (e = this.persistence) || void 0 === e || null === (t = e.props) || void 0 === t || !t[le]) && (null === (i = this.persistence) || void 0 === i || null === (r = i.props) || void 0 === r || !r[Be]));
  }
  _shouldCapturePageleave() {
    return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview;
  }
  createPersonProfile() {
    this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {});
  }
  _requirePersonProcessing(e) {
    return "never" === this.config.person_profiles ? (q.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), 
    !1) : (this._register_single(Be, !0), !0);
  }
  _sync_opt_out_with_persistence() {
    var e, t, i, r, s = this.consent.isOptedOut(), n = this.config.opt_out_persistence_by_default, o = this.config.disable_persistence || s && !!n;
    (null === (e = this.persistence) || void 0 === e ? void 0 : e.disabled) !== o && (null === (i = this.persistence) || void 0 === i || i.set_disabled(o));
    (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.disabled) !== o && (null === (r = this.sessionPersistence) || void 0 === r || r.set_disabled(o));
  }
  opt_in_capturing(e) {
    var t;
    (this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), R(null == e ? void 0 : e.captureEventName) || null != e && e.captureEventName) && this.capture(null !== (t = null == e ? void 0 : e.captureEventName) && void 0 !== t ? t : "$opt_in", null == e ? void 0 : e.captureProperties, {
      send_instantly: !0
    });
    this.config.capture_pageview && this._captureInitialPageview();
  }
  opt_out_capturing() {
    this.consent.optInOut(!1), this._sync_opt_out_with_persistence();
  }
  has_opted_in_capturing() {
    return this.consent.isOptedIn();
  }
  has_opted_out_capturing() {
    return this.consent.isOptedOut();
  }
  clear_opt_in_out_capturing() {
    this.consent.reset(), this._sync_opt_out_with_persistence();
  }
  _is_bot() {
    return o ? An(o, this.config.custom_blocked_useragents) : void 0;
  }
  _captureInitialPageview() {
    a && !this._initialPageviewCaptured && (this._initialPageviewCaptured = !0, this.capture("$pageview", {
      title: a.title
    }, {
      send_instantly: !0
    }));
  }
  debug(e) {
    !1 === e ? (null == t || t.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), 
    this.set_config({
      debug: !1
    })) : (null == t || t.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), 
    localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
      debug: !0
    }));
  }
  _runBeforeSend(e) {
    if (O(this.config.before_send)) return e;
    var t = x(this.config.before_send) ? this.config.before_send : [ this.config.before_send ], i = e;
    for (var r of t) {
      if (i = r(i), O(i)) {
        var s = "Event '".concat(e.event, "' was rejected in beforeSend function");
        return D(e.event) ? q.warn("".concat(s, ". This can cause unexpected behavior.")) : q.info(s), 
        null;
      }
      i.properties && !P(i.properties) || q.warn("Event '".concat(e.event, "' has no properties after beforeSend function, this is likely an error."));
    }
    return i;
  }
  getPageViewId() {
    var e;
    return null === (e = this.pageViewManager._currentPageview) || void 0 === e ? void 0 : e.pageViewId;
  }
}

!function(e, t) {
  for (var i = 0; i < t.length; i++) e.prototype[t[i]] = ee(e.prototype[t[i]]);
}(wo, [ "identify" ]);

var So, ko = (So = po[go] = new wo, function() {
  function e() {
    e.done || (e.done = !0, fo = !1, Y(po, (function(e) {
      e._dom_loaded();
    })));
  }
  null != a && a.addEventListener ? "complete" === a.readyState ? e() : oe(a, "DOMContentLoaded", e, {
    capture: !1
  }) : t && q.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
}(), So);

class PostHogController extends Controller {
  static values={
    apiKey: String,
    identification: Object
  };
  connect() {
    ko.init(this.apiKeyValue, {
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
      ko.identify(id.toString(), {
        email: email,
        name: name
      });
    }
    this.trackPageView = this.trackPageView.bind(this);
    document.addEventListener("turbo:load", this.trackPageView);
  }
  trackPageView() {
    ko.capture("$pageview");
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
