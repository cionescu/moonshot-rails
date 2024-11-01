import { Controller } from "@hotwired/stimulus";

import { post } from "@rails/request.js";

const e = "undefined" != typeof window ? window : void 0, t = "undefined" != typeof globalThis ? globalThis : e, i = Array.prototype, n = i.forEach, s = i.indexOf, r = null == t ? void 0 : t.navigator, o = null == t ? void 0 : t.document, a = null == t ? void 0 : t.location, l = null == t ? void 0 : t.fetch, c = null != t && t.XMLHttpRequest && "withCredentials" in new t.XMLHttpRequest ? t.XMLHttpRequest : void 0, u = null == t ? void 0 : t.AbortController, d = null == r ? void 0 : r.userAgent, h = null != e ? e : {};

const _ = {
  DEBUG: !1,
  LIB_VERSION: "1.180.0"
}, p = Array.isArray, g = Object.prototype, f = g.hasOwnProperty, v = g.toString, m = p || function(e) {
  return "[object Array]" === v.call(e);
}, y = function(e) {
  return "function" == typeof e;
}, b = function(e) {
  return e === Object(e) && !m(e);
}, w = function(e) {
  if (b(e)) {
    for (const t in e) if (f.call(e, t)) return !1;
    return !0;
  }
  return !1;
}, S = function(e) {
  return void 0 === e;
}, E = function(e) {
  return "[object String]" == v.call(e);
}, k = function(e) {
  return E(e) && 0 === e.trim().length;
}, x = function(e) {
  return null === e;
}, I = function(e) {
  return S(e) || x(e);
}, P = function(e) {
  return "[object Number]" == v.call(e);
}, F = function(e) {
  return "[object Boolean]" === v.call(e);
}, R = e => e instanceof FormData, C = "[PostHog.js]", T = {
  _log: function(t) {
    if (e && (_.DEBUG || h.POSTHOG_DEBUG) && !S(e.console) && e.console) {
      const r = "__rrweb_original__" in e.console[t] ? e.console[t].__rrweb_original__ : e.console[t];
      for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];
      r(C, ...n);
    }
  },
  info: function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    T._log("log", ...t);
  },
  warn: function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    T._log("warn", ...t);
  },
  error: function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    T._log("error", ...t);
  },
  critical: function() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    console.error(C, ...t);
  },
  uninitializedWarning: e => {
    T.error(`You must initialize PostHog before calling ${e}`);
  }
}, $ = (e, t, i) => {
  if (e.config.disable_external_dependency_loading) return T.warn(`${t} was requested but loading of external scripts is disabled.`), 
  i("Loading of external scripts is disabled");
  const n = () => {
    if (!o) return i("document not found");
    const e = o.createElement("script");
    e.type = "text/javascript", e.crossOrigin = "anonymous", e.src = t, e.onload = e => i(void 0, e), 
    e.onerror = e => i(e);
    const n = o.querySelectorAll("body > script");
    var s;
    n.length > 0 ? null === (s = n[0].parentNode) || void 0 === s || s.insertBefore(e, n[0]) : o.body.appendChild(e);
  };
  null != o && o.body ? n() : null == o || o.addEventListener("DOMContentLoaded", n);
};

h.__PosthogExtensions__ = h.__PosthogExtensions__ || {}, h.__PosthogExtensions__.loadExternalDependency = (e, t, i) => {
  let n = `/static/${t}.js?v=${e.version}`;
  if ("toolbar" === t) {
    const e = 3e5;
    n = `${n}&t=${Math.floor(Date.now() / e) * e}`;
  }
  const s = e.requestRouter.endpointFor("assets", n);
  $(e, s, i);
}, h.__PosthogExtensions__.loadSiteApp = (e, t, i) => {
  const n = e.requestRouter.endpointFor("api", t);
  $(e, n, i);
};

const A = {}, M = function(e) {
  return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};

function L(e, t, i) {
  if (m(e)) if (n && e.forEach === n) e.forEach(t, i); else if ("length" in e && e.length === +e.length) for (let n = 0, s = e.length; n < s; n++) if (n in e && t.call(i, e[n], n) === A) return;
}

function D(e, t, i) {
  if (!I(e)) {
    if (m(e)) return L(e, t, i);
    if (R(e)) {
      for (const n of e.entries()) if (t.call(i, n[1], n[0]) === A) return;
    } else for (const n in e) if (f.call(e, n) && t.call(i, e[n], n) === A) return;
  }
}

const O = function(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
  return L(i, (function(t) {
    for (const i in t) void 0 !== t[i] && (e[i] = t[i]);
  })), e;
};

function N(e, t) {
  return -1 !== e.indexOf(t);
}

function q(e) {
  const t = Object.keys(e);
  let i = t.length;
  const n = new Array(i);
  for (;i--; ) n[i] = [ t[i], e[t[i]] ];
  return n;
}

const B = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, H = function(e) {
  return function() {
    try {
      for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
      return e.apply(this, i);
    } catch (e) {
      T.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), 
      T.critical(e);
    }
  };
}, U = function(e) {
  const t = {};
  return D(e, (function(e, i) {
    E(e) && e.length > 0 && (t[i] = e);
  })), t;
}, W = function(e) {
  return e.replace(/^\$/, "");
};

function z(e, t) {
  return function(e, t) {
    const i = new Set;
    return function e(n, s) {
      if (n !== Object(n)) return t ? t(n, s) : n;
      if (i.has(n)) return;
      let r;
      return i.add(n), m(n) ? (r = [], L(n, (t => {
        r.push(e(t));
      }))) : (r = {}, D(n, ((t, n) => {
        i.has(t) || (r[n] = e(t, n));
      }))), r;
    }(e);
  }(e, (e => E(e) && !x(t) ? e.slice(0, t) : e));
}

const V = function(e) {
  let t, i, n, s = "", r = 0;
  for (t = i = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, 
  n = 0; n < r; n++) {
    const r = e.charCodeAt(n);
    let o = null;
    r < 128 ? i++ : o = r > 127 && r < 2048 ? String.fromCharCode(r >> 6 | 192, 63 & r | 128) : String.fromCharCode(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128), 
    x(o) || (i > t && (s += e.substring(t, i)), s += o, t = i = n + 1);
  }
  return i > t && (s += e.substring(t, e.length)), s;
}, G = function() {
  function t(e) {
    return e && (e.preventDefault = t.preventDefault, e.stopPropagation = t.stopPropagation), 
    e;
  }
  return t.preventDefault = function() {
    this.returnValue = !1;
  }, t.stopPropagation = function() {
    this.cancelBubble = !0;
  }, function(i, n, s, r, o) {
    if (i) if (i.addEventListener && !r) i.addEventListener(n, s, !!o); else {
      const r = "on" + n, o = i[r];
      i[r] = function(i, n, s) {
        return function(r) {
          if (!(r = r || t(null == e ? void 0 : e.event))) return;
          let o, a = !0;
          y(s) && (o = s(r));
          const l = n.call(i, r);
          return !1 !== o && !1 !== l || (a = !1), a;
        };
      }(i, s, o);
    } else T.error("No valid element provided to register_event");
  };
}();

function j(e) {
  const t = null == e ? void 0 : e.hostname;
  return !!E(t) && "herokuapp.com" !== t.split(".").slice(-2).join(".");
}

function Q(e, t) {
  for (let i = 0; i < e.length; i++) if (t(e[i])) return e[i];
}

let J;

!function(e) {
  e.GZipJS = "gzip-js", e.Base64 = "base64";
}(J || (J = {}));

const X = "$people_distinct_id", K = "__alias", Z = "__timers", ee = "$autocapture_disabled_server_side", te = "$heatmaps_enabled_server_side", ie = "$exception_capture_enabled_server_side", ne = "$exception_capture_endpoint_suffix", se = "$web_vitals_enabled_server_side", re = "$dead_clicks_enabled_server_side", oe = "$web_vitals_allowed_metrics", ae = "$session_recording_enabled_server_side", le = "$console_log_recording_enabled_server_side", ce = "$session_recording_network_payload_capture", ue = "$session_recording_canvas_recording", de = "$replay_sample_rate", he = "$replay_minimum_duration", _e = "$sesid", pe = "$session_is_sampled", ge = "$session_recording_url_trigger_activated_session", fe = "$session_recording_url_trigger_status", ve = "$enabled_feature_flags", me = "$early_access_features", ye = "$stored_person_properties", be = "$stored_group_properties", we = "$surveys", Se = "$surveys_activated", Ee = "$flag_call_reported", ke = "$user_state", xe = "$client_session_props", Ie = "$capture_rate_limit", Pe = "$initial_campaign_params", Fe = "$initial_referrer_info", Re = "$initial_person_info", Ce = "$epp", Te = "__POSTHOG_TOOLBAR__", $e = [ X, K, "__cmpns", Z, ae, te, _e, ve, ke, me, be, ye, we, Ee, xe, Ie, Pe, Fe, Ce ], Ae = "$active_feature_flags", Me = "$override_feature_flags", Le = "$feature_flag_payloads", De = e => {
  const t = {};
  for (const [i, n] of q(e || {})) n && (t[i] = n);
  return t;
};

class Oe {
  constructor(e) {
    this.instance = e, this._override_warning = !1, this.featureFlagEventHandlers = [], 
    this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1;
  }
  getFlags() {
    return Object.keys(this.getFlagVariants());
  }
  getFlagVariants() {
    const e = this.instance.get_property(ve), t = this.instance.get_property(Me);
    if (!t) return e || {};
    const i = O({}, e), n = Object.keys(t);
    for (let e = 0; e < n.length; e++) i[n[e]] = t[n[e]];
    return this._override_warning || (T.warn(" Overriding feature flags!", {
      enabledFlags: e,
      overriddenFlags: t,
      finalFlags: i
    }), this._override_warning = !0), i;
  }
  getFlagPayloads() {
    return this.instance.get_property(Le) || {};
  }
  reloadFeatureFlags() {
    this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer());
  }
  setAnonymousDistinctId(e) {
    this.$anon_distinct_id = e;
  }
  setReloadingPaused(e) {
    this.reloadFeatureFlagsInAction = e;
  }
  resetRequestQueue() {
    this.reloadFeatureFlagsQueued = !1;
  }
  _startReloadTimer() {
    this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout((() => {
      !this.reloadFeatureFlagsInAction && this.reloadFeatureFlagsQueued && (this.reloadFeatureFlagsQueued = !1, 
      this._reloadFeatureFlagsRequest());
    }), 5);
  }
  _reloadFeatureFlagsRequest() {
    if (this.instance.config.advanced_disable_feature_flags) return;
    this.setReloadingPaused(!0);
    const e = this.instance.config.token, t = this.instance.get_property(ye), i = this.instance.get_property(be), n = {
      token: e,
      distinct_id: this.instance.get_distinct_id(),
      groups: this.instance.getGroups(),
      $anon_distinct_id: this.$anon_distinct_id,
      person_properties: t,
      group_properties: i,
      disable_flags: this.instance.config.advanced_disable_feature_flags || void 0
    };
    this.instance._send_request({
      method: "POST",
      url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
      data: n,
      compression: this.instance.config.disable_compression ? void 0 : J.Base64,
      timeout: this.instance.config.feature_flag_request_timeout_ms,
      callback: e => {
        var t;
        this.setReloadingPaused(!1);
        let i = !0;
        200 === e.statusCode && (this.$anon_distinct_id = void 0, i = !1), this.receivedFeatureFlags(null !== (t = e.json) && void 0 !== t ? t : {}, i), 
        this._startReloadTimer();
      }
    });
  }
  getFeatureFlag(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!(this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0)) return void T.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.");
    const i = this.getFlagVariants()[e], n = `${i}`, s = this.instance.get_property(Ee) || {};
    var r;
    !t.send_event && "send_event" in t || (e in s && s[e].includes(n) || (m(s[e]) ? s[e].push(n) : s[e] = [ n ], 
    null === (r = this.instance.persistence) || void 0 === r || r.register({
      [Ee]: s
    }), this.instance.capture("$feature_flag_called", {
      $feature_flag: e,
      $feature_flag_response: i
    })));
    return i;
  }
  getFeatureFlagPayload(e) {
    return this.getFlagPayloads()[e];
  }
  isFeatureEnabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
    T.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.");
  }
  addFeatureFlagsHandler(e) {
    this.featureFlagEventHandlers.push(e);
  }
  removeFeatureFlagsHandler(e) {
    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((t => t !== e));
  }
  receivedFeatureFlags(e, t) {
    if (!this.instance.persistence) return;
    this.instance.decideEndpointWasHit = !0;
    const i = this.getFlagVariants(), n = this.getFlagPayloads();
    !function(e, t) {
      let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const s = e.featureFlags, r = e.featureFlagPayloads;
      if (!s) return;
      if (m(s)) {
        const e = {};
        if (s) for (let t = 0; t < s.length; t++) e[s[t]] = !0;
        return void (t && t.register({
          [Ae]: s,
          [ve]: e
        }));
      }
      let o = s, a = r;
      e.errorsWhileComputingFlags && (o = {
        ...i,
        ...o
      }, a = {
        ...n,
        ...a
      }), t && t.register({
        [Ae]: Object.keys(De(o)),
        [ve]: o || {},
        [Le]: a || {}
      });
    }(e, this.instance.persistence, i, n), this._fireFeatureFlagsCallbacks(t);
  }
  override(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!this.instance.__loaded || !this.instance.persistence) return T.uninitializedWarning("posthog.feature_flags.override");
    if (this._override_warning = t, !1 === e) this.instance.persistence.unregister(Me); else if (m(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) t[e[i]] = !0;
      this.instance.persistence.register({
        [Me]: t
      });
    } else this.instance.persistence.register({
      [Me]: e
    });
  }
  onFeatureFlags(e) {
    if (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) {
      const {flags: t, flagVariants: i} = this._prepareFeatureFlagsForCallbacks();
      e(t, i);
    }
    return () => this.removeFeatureFlagsHandler(e);
  }
  updateEarlyAccessFeatureEnrollment(e, t) {
    var i;
    const n = {
      [`$feature_enrollment/${e}`]: t
    };
    this.instance.capture("$feature_enrollment_update", {
      $feature_flag: e,
      $feature_enrollment: t,
      $set: n
    }), this.setPersonPropertiesForFlags(n, !1);
    const s = {
      ...this.getFlagVariants(),
      [e]: t
    };
    null === (i = this.instance.persistence) || void 0 === i || i.register({
      [Ae]: Object.keys(De(s)),
      [ve]: s
    }), this._fireFeatureFlagsCallbacks();
  }
  getEarlyAccessFeatures(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const i = this.instance.get_property(me);
    if (i && !t) return e(i);
    this.instance._send_request({
      transport: "XHR",
      url: this.instance.requestRouter.endpointFor("api", `/api/early_access_features/?token=${this.instance.config.token}`),
      method: "GET",
      callback: t => {
        var i;
        if (!t.json) return;
        const n = t.json.earlyAccessFeatures;
        return null === (i = this.instance.persistence) || void 0 === i || i.register({
          [me]: n
        }), e(n);
      }
    });
  }
  _prepareFeatureFlagsForCallbacks() {
    const e = this.getFlags(), t = this.getFlagVariants();
    return {
      flags: e.filter((e => t[e])),
      flagVariants: Object.keys(t).filter((e => t[e])).reduce(((e, i) => (e[i] = t[i], 
      e)), {})
    };
  }
  _fireFeatureFlagsCallbacks(e) {
    const {flags: t, flagVariants: i} = this._prepareFeatureFlagsForCallbacks();
    this.featureFlagEventHandlers.forEach((n => n(t, i, {
      errorsLoading: e
    })));
  }
  setPersonPropertiesForFlags(e) {
    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    const i = this.instance.get_property(ye) || {};
    this.instance.register({
      [ye]: {
        ...i,
        ...e
      }
    }), t && this.instance.reloadFeatureFlags();
  }
  resetPersonPropertiesForFlags() {
    this.instance.unregister(ye);
  }
  setGroupPropertiesForFlags(e) {
    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    const i = this.instance.get_property(be) || {};
    0 !== Object.keys(i).length && Object.keys(i).forEach((t => {
      i[t] = {
        ...i[t],
        ...e[t]
      }, delete e[t];
    })), this.instance.register({
      [be]: {
        ...i,
        ...e
      }
    }), t && this.instance.reloadFeatureFlags();
  }
  resetGroupPropertiesForFlags(e) {
    if (e) {
      const t = this.instance.get_property(be) || {};
      this.instance.register({
        [be]: {
          ...t,
          [e]: {}
        }
      });
    } else this.instance.unregister(be);
  }
}

/**
 * uuidv7: An experimental implementation of the proposed UUID Version 7
 *
 * @license Apache-2.0
 * @copyright 2021-2023 LiosK
 * @packageDocumentation
 *
 * from https://github.com/LiosK/uuidv7/blob/e501462ea3d23241de13192ceae726956f9b3b7d/src/index.ts
 */ Math.trunc || (Math.trunc = function(e) {
  return e < 0 ? Math.ceil(e) : Math.floor(e);
}), Number.isInteger || (Number.isInteger = function(e) {
  return P(e) && isFinite(e) && Math.floor(e) === e;
});

const Ne = "0123456789abcdef";

class qe {
  constructor(e) {
    if (this.bytes = e, 16 !== e.length) throw new TypeError("not 128-bit length");
  }
  static fromFieldsV7(e, t, i, n) {
    if (!Number.isInteger(e) || !Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(n) || e < 0 || t < 0 || i < 0 || n < 0 || e > 0xffffffffffff || t > 4095 || i > 1073741823 || n > 4294967295) throw new RangeError("invalid field value");
    const s = new Uint8Array(16);
    return s[0] = e / 2 ** 40, s[1] = e / 2 ** 32, s[2] = e / 2 ** 24, s[3] = e / 65536, 
    s[4] = e / 256, s[5] = e, s[6] = 112 | t >>> 8, s[7] = t, s[8] = 128 | i >>> 24, 
    s[9] = i >>> 16, s[10] = i >>> 8, s[11] = i, s[12] = n >>> 24, s[13] = n >>> 16, 
    s[14] = n >>> 8, s[15] = n, new qe(s);
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.bytes.length; t++) e = e + Ne.charAt(this.bytes[t] >>> 4) + Ne.charAt(15 & this.bytes[t]), 
    3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
    if (36 !== e.length) throw new Error("Invalid UUIDv7 was generated");
    return e;
  }
  clone() {
    return new qe(this.bytes.slice(0));
  }
  equals(e) {
    return 0 === this.compareTo(e);
  }
  compareTo(e) {
    for (let t = 0; t < 16; t++) {
      const i = this.bytes[t] - e.bytes[t];
      if (0 !== i) return Math.sign(i);
    }
    return 0;
  }
}

class Be {
  timestamp=0;
  counter=0;
  random=new We;
  generate() {
    const e = this.generateOrAbort();
    if (S(e)) {
      this.timestamp = 0;
      const e = this.generateOrAbort();
      if (S(e)) throw new Error("Could not generate UUID after timestamp reset");
      return e;
    }
    return e;
  }
  generateOrAbort() {
    const e = Date.now();
    if (e > this.timestamp) this.timestamp = e, this.resetCounter(); else {
      if (!(e + 1e4 > this.timestamp)) return;
      this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
    }
    return qe.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 2 ** 30), this.counter & 2 ** 30 - 1, this.random.nextUint32());
  }
  resetCounter() {
    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
  }
}

let He, Ue = e => {
  if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
  for (let t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return e;
};

e && !S(e.crypto) && crypto.getRandomValues && (Ue = e => crypto.getRandomValues(e));

class We {
  buffer=new Uint32Array(8);
  cursor=1 / 0;
  nextUint32() {
    return this.cursor >= this.buffer.length && (Ue(this.buffer), this.cursor = 0), 
    this.buffer[this.cursor++];
  }
}

const ze = () => Ve().toString(), Ve = () => (He || (He = new Be)).generate(), Ge = "Thu, 01 Jan 1970 00:00:00 GMT";

let je = "";

const Qe = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;

function Je(e, t) {
  if (t) {
    let t = function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
      if (je) return je;
      if (!t) return "";
      if ([ "localhost", "127.0.0.1" ].includes(e)) return "";
      const i = e.split(".");
      let n = Math.min(i.length, 8);
      const s = "dmn_chk_" + ze(), r = new RegExp("(^|;)\\s*" + s + "=1");
      for (;!je && n--; ) {
        const e = i.slice(n).join("."), o = s + "=1;domain=." + e;
        t.cookie = o, r.test(t.cookie) && (t.cookie = o + ";expires=" + Ge, je = e);
      }
      return je;
    }(e);
    if (!t) {
      const i = (e => {
        const t = e.match(Qe);
        return t ? t[0] : "";
      })(e);
      i !== t && T.info("Warning: cookie subdomain discovery mismatch", i, t), t = i;
    }
    return t ? "; domain=." + t : "";
  }
  return "";
}

const Ye = {
  is_supported: () => !!o,
  error: function(e) {
    T.error("cookieStore error: " + e);
  },
  get: function(e) {
    if (o) {
      try {
        const t = e + "=", i = o.cookie.split(";").filter((e => e.length));
        for (let e = 0; e < i.length; e++) {
          let n = i[e];
          for (;" " == n.charAt(0); ) n = n.substring(1, n.length);
          if (0 === n.indexOf(t)) return decodeURIComponent(n.substring(t.length, n.length));
        }
      } catch {}
      return null;
    }
  },
  parse: function(e) {
    let t;
    try {
      t = JSON.parse(Ye.get(e)) || {};
    } catch {}
    return t;
  },
  set: function(e, t, i, n, s) {
    if (o) try {
      let r = "", a = "";
      const l = Je(o.location.hostname, n);
      if (i) {
        const e = new Date;
        e.setTime(e.getTime() + 24 * i * 60 * 60 * 1e3), r = "; expires=" + e.toUTCString();
      }
      s && (a = "; secure");
      const c = e + "=" + encodeURIComponent(JSON.stringify(t)) + r + "; SameSite=Lax; path=/" + l + a;
      return c.length > 3686.4 && T.warn("cookieStore warning: large cookie, len=" + c.length), 
      o.cookie = c, c;
    } catch {
      return;
    }
  },
  remove: function(e, t) {
    try {
      Ye.set(e, "", -1, t);
    } catch {
      return;
    }
  }
};

let Xe = null;

const Ke = {
  is_supported: function() {
    if (!x(Xe)) return Xe;
    let t = !0;
    if (S(e)) t = !1; else try {
      const e = "__mplssupport__", i = "xyz";
      Ke.set(e, i), '"xyz"' !== Ke.get(e) && (t = !1), Ke.remove(e);
    } catch {
      t = !1;
    }
    return t || T.error("localStorage unsupported; falling back to cookie store"), Xe = t, 
    t;
  },
  error: function(e) {
    T.error("localStorage error: " + e);
  },
  get: function(t) {
    try {
      return null == e ? void 0 : e.localStorage.getItem(t);
    } catch (e) {
      Ke.error(e);
    }
    return null;
  },
  parse: function(e) {
    try {
      return JSON.parse(Ke.get(e)) || {};
    } catch {}
    return null;
  },
  set: function(t, i) {
    try {
      null == e || e.localStorage.setItem(t, JSON.stringify(i));
    } catch (e) {
      Ke.error(e);
    }
  },
  remove: function(t) {
    try {
      null == e || e.localStorage.removeItem(t);
    } catch (e) {
      Ke.error(e);
    }
  }
}, Ze = [ "distinct_id", _e, pe, Ce ], et = {
  ...Ke,
  parse: function(e) {
    try {
      let t = {};
      try {
        t = Ye.parse(e) || {};
      } catch {}
      const i = O(t, JSON.parse(Ke.get(e) || "{}"));
      return Ke.set(e, i), i;
    } catch {}
    return null;
  },
  set: function(e, t, i, n, s, r) {
    try {
      Ke.set(e, t, void 0, void 0, r);
      const o = {};
      Ze.forEach((e => {
        t[e] && (o[e] = t[e]);
      })), Object.keys(o).length && Ye.set(e, o, i, n, s, r);
    } catch (e) {
      Ke.error(e);
    }
  },
  remove: function(t, i) {
    try {
      null == e || e.localStorage.removeItem(t), Ye.remove(t, i);
    } catch (e) {
      Ke.error(e);
    }
  }
}, tt = {}, it = {
  is_supported: function() {
    return !0;
  },
  error: function(e) {
    T.error("memoryStorage error: " + e);
  },
  get: function(e) {
    return tt[e] || null;
  },
  parse: function(e) {
    return tt[e] || null;
  },
  set: function(e, t) {
    tt[e] = t;
  },
  remove: function(e) {
    delete tt[e];
  }
};

let nt = null;

const st = {
  is_supported: function() {
    if (!x(nt)) return nt;
    if (nt = !0, S(e)) nt = !1; else try {
      const e = "__support__", t = "xyz";
      st.set(e, t), '"xyz"' !== st.get(e) && (nt = !1), st.remove(e);
    } catch {
      nt = !1;
    }
    return nt;
  },
  error: function(e) {
    T.error("sessionStorage error: ", e);
  },
  get: function(t) {
    try {
      return null == e ? void 0 : e.sessionStorage.getItem(t);
    } catch (e) {
      st.error(e);
    }
    return null;
  },
  parse: function(e) {
    try {
      return JSON.parse(st.get(e)) || null;
    } catch {}
    return null;
  },
  set: function(t, i) {
    try {
      null == e || e.sessionStorage.setItem(t, JSON.stringify(i));
    } catch (e) {
      st.error(e);
    }
  },
  remove: function(t) {
    try {
      null == e || e.sessionStorage.removeItem(t);
    } catch (e) {
      st.error(e);
    }
  }
}, rt = [ "localhost", "127.0.0.1" ], ot = e => {
  const t = null == o ? void 0 : o.createElement("a");
  return S(t) ? null : (t.href = e, t);
}, at = function(e, t) {
  return !!function(e) {
    try {
      new RegExp(e);
    } catch {
      return !1;
    }
    return !0;
  }(t) && new RegExp(t).test(e);
}, lt = function(e) {
  let t, i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
  const s = [];
  return D(e, (function(e, n) {
    S(e) || S(n) || "undefined" === n || (t = encodeURIComponent((e => e instanceof File)(e) ? e.name : e.toString()), 
    i = encodeURIComponent(n), s[s.length] = i + "=" + t);
  })), s.join(n);
}, ct = function(e, t) {
  const i = ((e.split("#")[0] || "").split("?")[1] || "").split("&");
  let n;
  for (let e = 0; e < i.length; e++) {
    const s = i[e].split("=");
    if (s[0] === t) {
      n = s;
      break;
    }
  }
  if (!m(n) || n.length < 2) return "";
  {
    let e = n[1];
    try {
      e = decodeURIComponent(e);
    } catch {
      T.error("Skipping decoding for malformed query param: " + e);
    }
    return e.replace(/\+/g, " ");
  }
}, ut = function(e, t) {
  const i = e.match(new RegExp(t + "=([^&]*)"));
  return i ? i[1] : null;
}, dt = "Mobile", ht = "iOS", _t = "Android", pt = "Tablet", gt = _t + " " + pt, ft = "iPad", vt = "Apple", mt = vt + " Watch", yt = "Safari", bt = "BlackBerry", wt = "Samsung", St = wt + "Browser", Et = wt + " Internet", kt = "Chrome", xt = kt + " OS", It = kt + " " + ht, Pt = "Internet Explorer", Ft = Pt + " " + dt, Rt = "Opera", Ct = Rt + " Mini", Tt = "Edge", $t = "Microsoft " + Tt, At = "Firefox", Mt = At + " " + ht, Lt = "Nintendo", Dt = "PlayStation", Ot = "Xbox", Nt = _t + " " + dt, qt = dt + " " + yt, Bt = "Windows", Ht = Bt + " Phone", Ut = "Nokia", Wt = "Ouya", zt = "Generic", Vt = zt + " " + dt.toLowerCase(), Gt = zt + " " + pt.toLowerCase(), jt = "Konqueror", Qt = "(\\d+(\\.\\d+)?)", Jt = new RegExp("Version/" + Qt), Yt = new RegExp(Ot, "i"), Xt = new RegExp(Dt + " \\w+", "i"), Kt = new RegExp(Lt + " \\w+", "i"), Zt = new RegExp(bt + "|PlayBook|BB10", "i"), ei = {
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

const ti = (e, t) => t && N(t, vt) || function(e) {
  return N(e, yt) && !N(e, kt) && !N(e, _t);
}(e), ii = function(e, t) {
  return t = t || "", N(e, " OPR/") && N(e, "Mini") ? Ct : N(e, " OPR/") ? Rt : Zt.test(e) ? bt : N(e, "IE" + dt) || N(e, "WPDesktop") ? Ft : N(e, St) ? Et : N(e, Tt) || N(e, "Edg/") ? $t : N(e, "FBIOS") ? "Facebook " + dt : N(e, "UCWEB") || N(e, "UCBrowser") ? "UC Browser" : N(e, "CriOS") ? It : N(e, "CrMo") ? kt : N(e, _t) && N(e, yt) ? Nt : N(e, kt) ? kt : N(e, "FxiOS") ? Mt : N(e.toLowerCase(), jt.toLowerCase()) ? jt : ti(e, t) ? N(e, dt) ? qt : yt : N(e, At) ? At : N(e, "MSIE") || N(e, "Trident/") ? Pt : N(e, "Gecko") ? At : "";
}, ni = {
  [Ft]: [ new RegExp("rv:" + Qt) ],
  [$t]: [ new RegExp(Tt + "?\\/" + Qt) ],
  [kt]: [ new RegExp("(" + kt + "|CrMo)\\/" + Qt) ],
  [It]: [ new RegExp("CriOS\\/" + Qt) ],
  "UC Browser": [ new RegExp("(UCBrowser|UCWEB)\\/" + Qt) ],
  [yt]: [ Jt ],
  [qt]: [ Jt ],
  [Rt]: [ new RegExp("(Opera|OPR)\\/" + Qt) ],
  [At]: [ new RegExp(At + "\\/" + Qt) ],
  [Mt]: [ new RegExp("FxiOS\\/" + Qt) ],
  [jt]: [ new RegExp("Konqueror[:/]?" + Qt, "i") ],
  [bt]: [ new RegExp(bt + " " + Qt), Jt ],
  [Nt]: [ new RegExp("android\\s" + Qt, "i") ],
  [Et]: [ new RegExp(St + "\\/" + Qt) ],
  [Pt]: [ new RegExp("(rv:|MSIE )" + Qt) ],
  Mozilla: [ new RegExp("rv:" + Qt) ]
}, si = [ [ new RegExp(Ot + "; " + Ot + " (.*?)[);]", "i"), e => [ Ot, e && e[1] || "" ] ], [ new RegExp(Lt, "i"), [ Lt, "" ] ], [ new RegExp(Dt, "i"), [ Dt, "" ] ], [ Zt, [ bt, "" ] ], [ new RegExp(Bt, "i"), (e, t) => {
  if (/Phone/.test(t) || /WPDesktop/.test(t)) return [ Ht, "" ];
  if (new RegExp(dt).test(t) && !/IEMobile\b/.test(t)) return [ Bt + " " + dt, "" ];
  const i = /Windows NT ([0-9.]+)/i.exec(t);
  if (i && i[1]) {
    const e = i[1];
    let n = ei[e] || "";
    return /arm/i.test(t) && (n = "RT"), [ Bt, n ];
  }
  return [ Bt, "" ];
} ], [ /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, e => {
  if (e && e[3]) {
    const t = [ e[3], e[4], e[5] || "0" ];
    return [ ht, t.join(".") ];
  }
  return [ ht, "" ];
} ], [ /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, e => {
  let t = "";
  return e && e.length >= 3 && (t = S(e[2]) ? e[3] : e[2]), [ "watchOS", t ];
} ], [ new RegExp("(" + _t + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + _t + ")", "i"), e => {
  if (e && e[2]) {
    const t = [ e[2], e[3], e[4] || "0" ];
    return [ _t, t.join(".") ];
  }
  return [ _t, "" ];
} ], [ /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, e => {
  const t = [ "Mac OS X", "" ];
  if (e && e[1]) {
    const i = [ e[1], e[2], e[3] || "0" ];
    t[1] = i.join(".");
  }
  return t;
} ], [ /Mac/i, [ "Mac OS X", "" ] ], [ /CrOS/, [ xt, "" ] ], [ /Linux|debian/i, [ "Linux", "" ] ] ], ri = function(e) {
  return Kt.test(e) ? Lt : Xt.test(e) ? Dt : Yt.test(e) ? Ot : new RegExp(Wt, "i").test(e) ? Wt : new RegExp("(" + Ht + "|WPDesktop)", "i").test(e) ? Ht : /iPad/.test(e) ? ft : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? mt : Zt.test(e) ? bt : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(Ut, "i").test(e) ? Ut : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(dt).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? _t : gt : _t : new RegExp("(pda|" + dt + ")", "i").test(e) ? Vt : new RegExp(pt, "i").test(e) && !new RegExp(pt + " pc", "i").test(e) ? Gt : "";
}, oi = "https?://(.*)", ai = [ "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid", "rdt_cid" ], li = {
  campaignParams: function(e) {
    return o ? this._campaignParamsFromUrl(o.URL, e) : {};
  },
  _campaignParamsFromUrl: function(e, t) {
    const i = ai.concat(t || []), n = {};
    return D(i, (function(t) {
      const i = ct(e, t);
      n[t] = i || null;
    })), n;
  },
  _searchEngine: function(e) {
    return e ? 0 === e.search(oi + "google.([^/?]*)") ? "google" : 0 === e.search(oi + "bing.com") ? "bing" : 0 === e.search(oi + "yahoo.com") ? "yahoo" : 0 === e.search(oi + "duckduckgo.com") ? "duckduckgo" : null : null;
  },
  _searchInfoFromReferrer: function(e) {
    const t = li._searchEngine(e), i = "yahoo" != t ? "q" : "p", n = {};
    if (!x(t)) {
      n.$search_engine = t;
      const e = o ? ct(o.referrer, i) : "";
      e.length && (n.ph_keyword = e);
    }
    return n;
  },
  searchInfo: function() {
    const e = null == o ? void 0 : o.referrer;
    return e ? this._searchInfoFromReferrer(e) : {};
  },
  browser: ii,
  browserVersion: function(e, t) {
    const i = ii(e, t), n = ni[i];
    if (S(n)) return null;
    for (let t = 0; t < n.length; t++) {
      const i = n[t], s = e.match(i);
      if (s) return parseFloat(s[s.length - 2]);
    }
    return null;
  },
  browserLanguage: function() {
    return navigator.language || navigator.userLanguage;
  },
  os: function(e) {
    for (let t = 0; t < si.length; t++) {
      const [i, n] = si[t], s = i.exec(e), r = s && (y(n) ? n(s, e) : n);
      if (r) return r;
    }
    return [ "", "" ];
  },
  device: ri,
  deviceType: function(e) {
    const t = ri(e);
    return t === ft || t === gt || "Kobo" === t || "Kindle Fire" === t || t === Gt ? pt : t === Lt || t === Ot || t === Dt || t === Wt ? "Console" : t === mt ? "Wearable" : t ? dt : "Desktop";
  },
  referrer: function() {
    return (null == o ? void 0 : o.referrer) || "$direct";
  },
  referringDomain: function() {
    var e;
    return null != o && o.referrer && (null === (e = ot(o.referrer)) || void 0 === e ? void 0 : e.host) || "$direct";
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
    var t;
    const {r: i, u: n} = e, s = {
      $initial_referrer: i,
      $initial_referring_domain: null == i ? void 0 : "$direct" == i ? "$direct" : null === (t = ot(i)) || void 0 === t ? void 0 : t.host
    };
    if (n) {
      s.$initial_current_url = n;
      const e = ot(n);
      s.$initial_host = null == e ? void 0 : e.host, s.$initial_pathname = null == e ? void 0 : e.pathname;
      D(this._campaignParamsFromUrl(n), (function(e, t) {
        s["$initial_" + W(t)] = e;
      }));
    }
    if (i) {
      D(this._searchInfoFromReferrer(i), (function(e, t) {
        s["$initial_" + W(t)] = e;
      }));
    }
    return s;
  },
  timezone: function() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      return;
    }
  },
  properties: function() {
    if (!d) return {};
    const [t, i] = li.os(d);
    return O(U({
      $os: t,
      $os_version: i,
      $browser: li.browser(d, navigator.vendor),
      $device: li.device(d),
      $device_type: li.deviceType(d),
      $timezone: li.timezone()
    }), {
      $current_url: null == a ? void 0 : a.href,
      $host: null == a ? void 0 : a.host,
      $pathname: null == a ? void 0 : a.pathname,
      $raw_user_agent: d.length > 1e3 ? d.substring(0, 997) + "..." : d,
      $browser_version: li.browserVersion(d, navigator.vendor),
      $browser_language: li.browserLanguage(),
      $screen_height: null == e ? void 0 : e.screen.height,
      $screen_width: null == e ? void 0 : e.screen.width,
      $viewport_height: null == e ? void 0 : e.innerHeight,
      $viewport_width: null == e ? void 0 : e.innerWidth,
      $lib: "web",
      $lib_version: _.LIB_VERSION,
      $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
      $time: Date.now() / 1e3
    });
  },
  people_properties: function() {
    if (!d) return {};
    const [e, t] = li.os(d);
    return O(U({
      $os: e,
      $os_version: t,
      $browser: li.browser(d, navigator.vendor)
    }), {
      $browser_version: li.browserVersion(d, navigator.vendor)
    });
  }
}, ci = [ "cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory" ];

class ui {
  constructor(e) {
    this.config = e, this.props = {}, this.campaign_params_saved = !1, this.name = (e => {
      let t = "";
      return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), 
      e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog";
    })(e), this.storage = this.buildStorage(e), this.load(), e.debug && T.info("Persistence loaded", e.persistence, {
      ...this.props
    }), this.update_config(e, e), this.save();
  }
  buildStorage(e) {
    let t;
    -1 === ci.indexOf(e.persistence.toLowerCase()) && (T.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), 
    e.persistence = "localStorage+cookie");
    const i = e.persistence.toLowerCase();
    return t = "localstorage" === i && Ke.is_supported() ? Ke : "localstorage+cookie" === i && et.is_supported() ? et : "sessionstorage" === i && st.is_supported() ? st : "memory" === i ? it : "cookie" === i ? Ye : et.is_supported() ? et : Ye, 
    t;
  }
  properties() {
    const e = {};
    return D(this.props, (function(t, i) {
      if (i === ve && b(t)) {
        const i = Object.keys(t);
        for (let n = 0; n < i.length; n++) e[`$feature/${i[n]}`] = t[i[n]];
      } else (function(e, t) {
        let i = !1;
        return x(e) ? i : s && e.indexOf === s ? -1 != e.indexOf(t) : (D(e, (function(e) {
          if (i || (i = e === t)) return A;
        })), i);
      })($e, i) || (e[i] = t);
    })), e;
  }
  load() {
    if (this.disabled) return;
    const e = this.storage.parse(this.name);
    e && (this.props = O({}, e));
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
    if (b(e)) {
      S(t) && (t = "None"), this.expire_days = S(i) ? this.default_expiry : i;
      let n = !1;
      if (D(e, ((e, i) => {
        this.props.hasOwnProperty(i) && this.props[i] !== t || (this.props[i] = e, n = !0);
      })), n) return this.save(), !0;
    }
    return !1;
  }
  register(e, t) {
    if (b(e)) {
      this.expire_days = S(t) ? this.default_expiry : t;
      let i = !1;
      if (D(e, ((t, n) => {
        e.hasOwnProperty(n) && this.props[n] !== t && (this.props[n] = t, i = !0);
      })), i) return this.save(), !0;
    }
    return !1;
  }
  unregister(e) {
    e in this.props && (delete this.props[e], this.save());
  }
  update_campaign_params() {
    if (!this.campaign_params_saved) {
      const e = li.campaignParams(this.config.custom_campaign_params);
      w(U(e)) || this.register(li.campaignParams(this.config.custom_campaign_params)), 
      this.campaign_params_saved = !0;
    }
  }
  update_search_keyword() {
    this.register(li.searchInfo());
  }
  update_referrer_info() {
    this.register_once(li.referrerInfo(), void 0);
  }
  set_initial_person_info() {
    this.props[Pe] || this.props[Fe] || this.register_once({
      [Re]: li.initialPersonInfo()
    }, void 0);
  }
  get_referrer_info() {
    return U({
      $referrer: this.props.$referrer,
      $referring_domain: this.props.$referring_domain
    });
  }
  get_initial_props() {
    const e = {};
    D([ Fe, Pe ], (t => {
      const i = this.props[t];
      i && D(i, (function(t, i) {
        e["$initial_" + W(i)] = t;
      }));
    }));
    const t = this.props[Re];
    if (t) {
      const i = li.initialPersonPropsFromInfo(t);
      O(e, i);
    }
    return e;
  }
  safe_merge(e) {
    return D(this.props, (function(t, i) {
      i in e || (e[i] = t);
    })), e;
  }
  update_config(e, t) {
    if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), 
    this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), 
    e.persistence !== t.persistence) {
      const t = this.buildStorage(e), i = this.props;
      this.clear(), this.storage = t, this.props = i, this.save();
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
    const i = this.props[Z] || {};
    i[e] = t, this.props[Z] = i, this.save();
  }
  remove_event_timer(e) {
    const t = (this.props[Z] || {})[e];
    return S(t) || (delete this.props[Z][e], this.save()), t;
  }
  get_property(e) {
    return this.props[e];
  }
  set_property(e, t) {
    this.props[e] = t, this.save();
  }
}

function di(e) {
  var t;
  return (null === (t = JSON.stringify(e, function() {
    const e = [];
    return function(t, i) {
      if (b(i)) {
        for (;e.length > 0 && e.at(-1) !== this; ) e.pop();
        return e.includes(i) ? "[Circular]" : (e.push(i), i);
      }
      return i;
    };
  }())) || void 0 === t ? void 0 : t.length) || 0;
}

function hi(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
  if (e.size >= t && e.data.length > 1) {
    const t = Math.floor(e.data.length / 2), i = e.data.slice(0, t), n = e.data.slice(t);
    return [ hi({
      size: di(i),
      data: i,
      sessionId: e.sessionId,
      windowId: e.windowId
    }), hi({
      size: di(n),
      data: n,
      sessionId: e.sessionId,
      windowId: e.windowId
    }) ].flatMap((e => e));
  }
  return [ e ];
}

var _i = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", 
e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", 
e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", 
e))(_i || {}), pi = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", 
e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", 
e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", 
e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", 
e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", 
e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", 
e[e.CustomElement = 16] = "CustomElement", e))(pi || {});

function gi(e) {
  return e ? M(e).split(/\s+/) : [];
}

function fi(t) {
  const i = null == e ? void 0 : e.location.href;
  return !!(i && t && t.some((e => i.match(e))));
}

function vi(e) {
  let t = "";
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
  return gi(t);
}

function mi(e) {
  return I(e) ? null : M(e).split(/(\s+)/).filter((e => Di(e))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}

function yi(e) {
  let t = "";
  return Fi(e) && !Ri(e) && e.childNodes && e.childNodes.length && D(e.childNodes, (function(e) {
    var i;
    Ei(e) && e.textContent && (t += null !== (i = mi(e.textContent)) && void 0 !== i ? i : "");
  })), M(t);
}

function bi(e) {
  return S(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
  var t;
}

function wi(e) {
  return !!e && 1 === e.nodeType;
}

function Si(e, t) {
  return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
}

function Ei(e) {
  return !!e && 3 === e.nodeType;
}

function ki(e) {
  return !!e && 11 === e.nodeType;
}

const xi = [ "a", "button", "form", "input", "select", "textarea", "label" ];

function Ii(e) {
  const t = e.parentNode;
  return !(!t || !wi(t)) && t;
}

function Pi(t, i) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 ? arguments[4] : void 0;
  if (!e || !t || Si(t, "html") || !wi(t)) return !1;
  if (null != n && n.url_allowlist && !fi(n.url_allowlist)) return !1;
  if (null != n && n.url_ignorelist && fi(n.url_ignorelist)) return !1;
  if (null != n && n.dom_event_allowlist) {
    const e = n.dom_event_allowlist;
    if (e && !e.some((e => i.type === e))) return !1;
  }
  let o = !1;
  const a = [ t ];
  let l = !0, c = t;
  for (;c.parentNode && !Si(c, "body"); ) if (ki(c.parentNode)) a.push(c.parentNode.host), 
  c = c.parentNode.host; else {
    if (l = Ii(c), !l) break;
    if (s || xi.indexOf(l.tagName.toLowerCase()) > -1) o = !0; else {
      const t = e.getComputedStyle(l);
      t && "pointer" === t.getPropertyValue("cursor") && (o = !0);
    }
    a.push(l), c = l;
  }
  if (!function(e, t) {
    const i = null == t ? void 0 : t.element_allowlist;
    if (S(i)) return !0;
    for (const t of e) if (i.some((e => t.tagName.toLowerCase() === e))) return !0;
    return !1;
  }(a, n)) return !1;
  if (!function(e, t) {
    const i = null == t ? void 0 : t.css_selector_allowlist;
    if (S(i)) return !0;
    for (const t of e) if (i.some((e => t.matches(e)))) return !0;
    return !1;
  }(a, n)) return !1;
  const u = e.getComputedStyle(t);
  if (u && "pointer" === u.getPropertyValue("cursor") && "click" === i.type) return !0;
  const d = t.tagName.toLowerCase();
  switch (d) {
   case "html":
    return !1;

   case "form":
    return (r || [ "submit" ]).indexOf(i.type) >= 0;

   case "input":
   case "select":
   case "textarea":
    return (r || [ "change", "click" ]).indexOf(i.type) >= 0;

   default:
    return o ? (r || [ "click" ]).indexOf(i.type) >= 0 : (r || [ "click" ]).indexOf(i.type) >= 0 && (xi.indexOf(d) > -1 || "true" === t.getAttribute("contenteditable"));
  }
}

function Fi(e) {
  for (let t = e; t.parentNode && !Si(t, "body"); t = t.parentNode) {
    const e = vi(t);
    if (N(e, "ph-sensitive") || N(e, "ph-no-capture")) return !1;
  }
  if (N(vi(e), "ph-include")) return !0;
  const t = e.type || "";
  if (E(t)) switch (t.toLowerCase()) {
   case "hidden":
   case "password":
    return !1;
  }
  const i = e.name || e.id || "";
  if (E(i)) {
    if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, ""))) return !1;
  }
  return !0;
}

function Ri(e) {
  return !!(Si(e, "input") && ![ "button", "checkbox", "submit", "reset" ].includes(e.type) || Si(e, "select") || Si(e, "textarea") || "true" === e.getAttribute("contenteditable"));
}

const Ci = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})", Ti = new RegExp(`^(?:${Ci})$`), $i = new RegExp(Ci), Ai = "\\d{3}-?\\d{2}-?\\d{4}", Mi = new RegExp(`^(${Ai})$`), Li = new RegExp(`(${Ai})`);

function Di(e) {
  let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (I(e)) return !1;
  if (E(e)) {
    e = M(e);
    if ((t ? Ti : $i).test((e || "").replace(/[- ]/g, ""))) return !1;
    if ((t ? Mi : Li).test(e)) return !1;
  }
  return !0;
}

function Oi(e) {
  let t = yi(e);
  return t = `${t} ${Ni(e)}`.trim(), Di(t) ? t : "";
}

function Ni(e) {
  let t = "";
  return e && e.childNodes && e.childNodes.length && D(e.childNodes, (function(e) {
    var i;
    if (e && "span" === (null === (i = e.tagName) || void 0 === i ? void 0 : i.toLowerCase())) try {
      const i = yi(e);
      t = `${t} ${i}`.trim(), e.childNodes && e.childNodes.length && (t = `${t} ${Ni(e)}`.trim());
    } catch (e) {
      T.error(e);
    }
  })), t;
}

function qi(e) {
  return function(e) {
    const t = e.map((e => {
      var t, i;
      let n = "";
      if (e.tag_name && (n += e.tag_name), e.attr_class) {
        e.attr_class.sort();
        for (const t of e.attr_class) n += `.${t.replace(/"/g, "")}`;
      }
      const s = {
        ...e.text ? {
          text: e.text
        } : {},
        "nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
        "nth-of-type": null !== (i = e.nth_of_type) && void 0 !== i ? i : 0,
        ...e.href ? {
          href: e.href
        } : {},
        ...e.attr_id ? {
          attr_id: e.attr_id
        } : {},
        ...e.attributes
      }, r = {};
      return q(s).sort(((e, t) => {
        let [i] = e, [n] = t;
        return i.localeCompare(n);
      })).forEach((e => {
        let [t, i] = e;
        return r[Bi(t.toString())] = Bi(i.toString());
      })), n += ":", n += q(s).map((e => {
        let [t, i] = e;
        return `${t}="${i}"`;
      })).join(""), n;
    }));
    return t.join(";");
  }(function(e) {
    return e.map((e => {
      var t, i;
      const n = {
        text: null === (t = e.$el_text) || void 0 === t ? void 0 : t.slice(0, 400),
        tag_name: e.tag_name,
        href: null === (i = e.attr__href) || void 0 === i ? void 0 : i.slice(0, 2048),
        attr_class: Hi(e),
        attr_id: e.attr__id,
        nth_child: e.nth_child,
        nth_of_type: e.nth_of_type,
        attributes: {}
      };
      return q(e).filter((e => {
        let [t] = e;
        return 0 === t.indexOf("attr__");
      })).forEach((e => {
        let [t, i] = e;
        return n.attributes[t] = i;
      })), n;
    }));
  }(e));
}

function Bi(e) {
  return e.replace(/"|\\"/g, '\\"');
}

function Hi(e) {
  const t = e.attr__class;
  return t ? m(t) ? t : gi(t) : void 0;
}

const Ui = "[SessionRecording]", Wi = "redacted", zi = {
  initiatorTypes: [ "audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest" ],
  maskRequestFn: e => e,
  recordHeaders: !1,
  recordBody: !1,
  recordInitialRequests: !1,
  recordPerformance: !1,
  performanceEntryTypeToObserve: [ "first-input", "navigation", "paint", "resource" ],
  payloadSizeLimitBytes: 1e6,
  payloadHostDenyList: [ ".lr-ingest.io", ".ingest.sentry.io" ]
}, Vi = [ "authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token" ], Gi = [ "password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token" ], ji = [ "/s/", "/e/", "/i/" ];

function Qi(e, t, i, n) {
  if (I(e)) return e;
  let s = (null == t ? void 0 : t["content-length"]) || function(e) {
    return new Blob([ e ]).size;
  }(e);
  return E(s) && (s = parseInt(s)), s > i ? Ui + ` ${n} body too large to record (${s} bytes)` : e;
}

function Ji(e, t) {
  if (I(e)) return e;
  let i = e;
  return Di(i, !1) || (i = Ui + " " + t + " body " + Wi), D(Gi, (e => {
    var n, s;
    null !== (n = i) && void 0 !== n && n.length && -1 !== (null === (s = i) || void 0 === s ? void 0 : s.indexOf(e)) && (i = Ui + " " + t + " body " + Wi + " as might contain: " + e);
  })), i;
}

const Yi = (e, t) => {
  const i = {
    payloadSizeLimitBytes: zi.payloadSizeLimitBytes,
    performanceEntryTypeToObserve: [ ...zi.performanceEntryTypeToObserve ],
    payloadHostDenyList: [ ...t.payloadHostDenyList || [], ...zi.payloadHostDenyList ]
  }, n = !1 !== e.session_recording.recordHeaders && t.recordHeaders, s = !1 !== e.session_recording.recordBody && t.recordBody, r = !1 !== e.capture_performance && t.recordPerformance, o = (e => {
    var t;
    const i = Math.min(1e6, null !== (t = e.payloadSizeLimitBytes) && void 0 !== t ? t : 1e6);
    return e => (null != e && e.requestBody && (e.requestBody = Qi(e.requestBody, e.requestHeaders, i, "Request")), 
    null != e && e.responseBody && (e.responseBody = Qi(e.responseBody, e.responseHeaders, i, "Response")), 
    e);
  })(i), a = e => o((e => {
    const t = ot(e.name);
    if (!(t && t.pathname && ji.some((e => 0 === t.pathname.indexOf(e))))) return e;
  })((e => {
    const t = e.requestHeaders;
    return I(t) || D(Object.keys(null != t ? t : {}), (e => {
      Vi.includes(e.toLowerCase()) && (t[e] = Wi);
    })), e;
  })(e))), l = y(e.session_recording.maskNetworkRequestFn);
  return l && y(e.session_recording.maskCapturedNetworkRequestFn) && T.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), 
  l && (e.session_recording.maskCapturedNetworkRequestFn = t => {
    const i = e.session_recording.maskNetworkRequestFn({
      url: t.name
    });
    return {
      ...t,
      name: null == i ? void 0 : i.url
    };
  }), i.maskRequestFn = y(e.session_recording.maskCapturedNetworkRequestFn) ? t => {
    var i, n, s;
    const r = a(t);
    return r && null !== (i = null === (n = (s = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === n ? void 0 : n.call(s, r)) && void 0 !== i ? i : void 0;
  } : e => function(e) {
    if (!S(e)) return e.requestBody = Ji(e.requestBody, "Request"), e.responseBody = Ji(e.responseBody, "Response"), 
    e;
  }(a(e)), {
    ...zi,
    ...i,
    recordHeaders: n,
    recordBody: s,
    recordPerformance: r,
    recordInitialRequests: r
  };
};

function Xi(e, t, i, n) {
  return t > i && (T.warn("min cannot be greater than max."), t = i), P(e) ? e > i ? (n && T.warn(n + " cannot be  greater than max: " + i + ". Using max value instead."), 
  i) : e < t ? (n && T.warn(n + " cannot be less than min: " + t + ". Using min value instead."), 
  t) : e : (n && T.warn(n + " must be a number. Defaulting to max value:" + i), i);
}

class Ki {
  bucketSize=100;
  refillRate=10;
  mutationBuckets={};
  loggedTracker={};
  constructor(e) {
    var t, i;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.rrweb = e, this.options = n, this.refillRate = Xi(null !== (t = this.options.refillRate) && void 0 !== t ? t : this.refillRate, 0, 100, "mutation throttling refill rate"), 
    this.bucketSize = Xi(null !== (i = this.options.bucketSize) && void 0 !== i ? i : this.bucketSize, 0, 100, "mutation throttling bucket size"), 
    setInterval((() => {
      this.refillBuckets();
    }), 1e3);
  }
  refillBuckets=() => {
    Object.keys(this.mutationBuckets).forEach((e => {
      this.mutationBuckets[e] = this.mutationBuckets[e] + this.refillRate, this.mutationBuckets[e] >= this.bucketSize && delete this.mutationBuckets[e];
    }));
  };
  getNodeOrRelevantParent=e => {
    const t = this.rrweb.mirror.getNode(e);
    if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
      const e = t.closest("svg");
      if (e) return [ this.rrweb.mirror.getId(e), e ];
    }
    return [ e, t ];
  };
  numberOfChanges=e => {
    var t, i, n, s, r, o, a, l;
    return (null !== (t = null === (i = e.removes) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0) + (null !== (n = null === (s = e.attributes) || void 0 === s ? void 0 : s.length) && void 0 !== n ? n : 0) + (null !== (r = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== r ? r : 0) + (null !== (a = null === (l = e.adds) || void 0 === l ? void 0 : l.length) && void 0 !== a ? a : 0);
  };
  throttleMutations=e => {
    if (3 !== e.type || 0 !== e.data.source) return e;
    const t = e.data, i = this.numberOfChanges(t);
    t.attributes && (t.attributes = t.attributes.filter((e => {
      var t;
      const [i, n] = this.getNodeOrRelevantParent(e.id);
      if (0 === this.mutationBuckets[i]) return !1;
      var s, r;
      (this.mutationBuckets[i] = null !== (t = this.mutationBuckets[i]) && void 0 !== t ? t : this.bucketSize, 
      this.mutationBuckets[i] = Math.max(this.mutationBuckets[i] - 1, 0), 0 === this.mutationBuckets[i]) && (this.loggedTracker[i] || (this.loggedTracker[i] = !0, 
      null === (s = (r = this.options).onBlockedNode) || void 0 === s || s.call(r, i, n)));
      return e;
    })));
    const n = this.numberOfChanges(t);
    return 0 !== n || i === n ? e : void 0;
  };
}

var Zi = Uint8Array, en = Uint16Array, tn = Uint32Array, nn = new Zi([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0 ]), sn = new Zi([ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0 ]), rn = new Zi([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]), on = function(e, t) {
  for (var i = new en(31), n = 0; n < 31; ++n) i[n] = t += 1 << e[n - 1];
  var s = new tn(i[30]);
  for (n = 1; n < 30; ++n) for (var r = i[n]; r < i[n + 1]; ++r) s[r] = r - i[n] << 5 | n;
  return [ i, s ];
}, an = on(nn, 2), ln = an[0], cn = an[1];

ln[28] = 258, cn[258] = 28;

for (var un = on(sn, 0)[1], dn = new en(32768), hn = 0; hn < 32768; ++hn) {
  var _n = (43690 & hn) >>> 1 | (21845 & hn) << 1;
  _n = (61680 & (_n = (52428 & _n) >>> 2 | (13107 & _n) << 2)) >>> 4 | (3855 & _n) << 4, 
  dn[hn] = ((65280 & _n) >>> 8 | (255 & _n) << 8) >>> 1;
}

var pn = function(e, t, i) {
  for (var n = e.length, s = 0, r = new en(t); s < n; ++s) ++r[e[s] - 1];
  var o, a = new en(t);
  for (s = 0; s < t; ++s) a[s] = a[s - 1] + r[s - 1] << 1;
  if (i) {
    o = new en(1 << t);
    var l = 15 - t;
    for (s = 0; s < n; ++s) if (e[s]) for (var c = s << 4 | e[s], u = t - e[s], d = a[e[s] - 1]++ << u, h = d | (1 << u) - 1; d <= h; ++d) o[dn[d] >>> l] = c;
  } else for (o = new en(n), s = 0; s < n; ++s) o[s] = dn[a[e[s] - 1]++] >>> 15 - e[s];
  return o;
}, gn = new Zi(288);

for (hn = 0; hn < 144; ++hn) gn[hn] = 8;

for (hn = 144; hn < 256; ++hn) gn[hn] = 9;

for (hn = 256; hn < 280; ++hn) gn[hn] = 7;

for (hn = 280; hn < 288; ++hn) gn[hn] = 8;

var fn = new Zi(32);

for (hn = 0; hn < 32; ++hn) fn[hn] = 5;

var vn = pn(gn, 9, 0), mn = pn(fn, 5, 0), yn = function(e) {
  return (e / 8 >> 0) + (7 & e && 1);
}, bn = function(e, t, i) {
  (null == i || i > e.length) && (i = e.length);
  var n = new (e instanceof en ? en : e instanceof tn ? tn : Zi)(i - t);
  return n.set(e.subarray(t, i)), n;
}, wn = function(e, t, i) {
  i <<= 7 & t;
  var n = t / 8 >> 0;
  e[n] |= i, e[n + 1] |= i >>> 8;
}, Sn = function(e, t, i) {
  i <<= 7 & t;
  var n = t / 8 >> 0;
  e[n] |= i, e[n + 1] |= i >>> 8, e[n + 2] |= i >>> 16;
}, En = function(e, t) {
  for (var i = [], n = 0; n < e.length; ++n) e[n] && i.push({
    s: n,
    f: e[n]
  });
  var s = i.length, r = i.slice();
  if (!s) return [ new Zi(0), 0 ];
  if (1 == s) {
    var o = new Zi(i[0].s + 1);
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
  var h = r[0].s;
  for (n = 1; n < s; ++n) r[n].s > h && (h = r[n].s);
  var _ = new en(h + 1), p = kn(i[u - 1], _, 0);
  if (p > t) {
    n = 0;
    var g = 0, f = p - t, v = 1 << f;
    for (r.sort((function(e, t) {
      return _[t.s] - _[e.s] || e.f - t.f;
    })); n < s; ++n) {
      var m = r[n].s;
      if (!(_[m] > t)) break;
      g += v - (1 << p - _[m]), _[m] = t;
    }
    for (g >>>= f; g > 0; ) {
      var y = r[n].s;
      _[y] < t ? g -= 1 << t - _[y]++ - 1 : ++n;
    }
    for (;n >= 0 && g; --n) {
      var b = r[n].s;
      _[b] == t && (--_[b], ++g);
    }
    p = t;
  }
  return [ new Zi(_), p ];
}, kn = function(e, t, i) {
  return -1 == e.s ? Math.max(kn(e.l, t, i + 1), kn(e.r, t, i + 1)) : t[e.s] = i;
}, xn = function(e) {
  for (var t = e.length; t && !e[--t]; ) ;
  for (var i = new en(++t), n = 0, s = e[0], r = 1, o = function(e) {
    i[n++] = e;
  }, a = 1; a <= t; ++a) if (e[a] == s && a != t) ++r; else {
    if (!s && r > 2) {
      for (;r > 138; r -= 138) o(32754);
      r > 2 && (o(r > 10 ? r - 11 << 5 | 28690 : r - 3 << 5 | 12305), r = 0);
    } else if (r > 3) {
      for (o(s), --r; r > 6; r -= 6) o(8304);
      r > 2 && (o(r - 3 << 5 | 8208), r = 0);
    }
    for (;r--; ) o(s);
    r = 1, s = e[a];
  }
  return [ i.subarray(0, n), t ];
}, In = function(e, t) {
  for (var i = 0, n = 0; n < t.length; ++n) i += e[n] * t[n];
  return i;
}, Pn = function(e, t, i) {
  var n = i.length, s = yn(t + 2);
  e[s] = 255 & n, e[s + 1] = n >>> 8, e[s + 2] = 255 ^ e[s], e[s + 3] = 255 ^ e[s + 1];
  for (var r = 0; r < n; ++r) e[s + r + 4] = i[r];
  return 8 * (s + 4 + n);
}, Fn = function(e, t, i, n, s, r, o, a, l, c, u) {
  wn(t, u++, i), ++s[256];
  for (var d = En(s, 15), h = d[0], _ = d[1], p = En(r, 15), g = p[0], f = p[1], v = xn(h), m = v[0], y = v[1], b = xn(g), w = b[0], S = b[1], E = new en(19), k = 0; k < m.length; ++k) E[31 & m[k]]++;
  for (k = 0; k < w.length; ++k) E[31 & w[k]]++;
  for (var x = En(E, 7), I = x[0], P = x[1], F = 19; F > 4 && !I[rn[F - 1]]; --F) ;
  var R, C, T, $, A = c + 5 << 3, M = In(s, gn) + In(r, fn) + o, L = In(s, h) + In(r, g) + o + 14 + 3 * F + In(E, I) + (2 * E[16] + 3 * E[17] + 7 * E[18]);
  if (A <= M && A <= L) return Pn(t, u, e.subarray(l, l + c));
  if (wn(t, u, 1 + (L < M)), u += 2, L < M) {
    R = pn(h, _, 0), C = h, T = pn(g, f, 0), $ = g;
    var D = pn(I, P, 0);
    wn(t, u, y - 257), wn(t, u + 5, S - 1), wn(t, u + 10, F - 4), u += 14;
    for (k = 0; k < F; ++k) wn(t, u + 3 * k, I[rn[k]]);
    u += 3 * F;
    for (var O = [ m, w ], N = 0; N < 2; ++N) {
      var q = O[N];
      for (k = 0; k < q.length; ++k) {
        var B = 31 & q[k];
        wn(t, u, D[B]), u += I[B], B > 15 && (wn(t, u, q[k] >>> 5 & 127), u += q[k] >>> 12);
      }
    }
  } else R = vn, C = gn, T = mn, $ = fn;
  for (k = 0; k < a; ++k) if (n[k] > 255) {
    B = n[k] >>> 18 & 31;
    Sn(t, u, R[B + 257]), u += C[B + 257], B > 7 && (wn(t, u, n[k] >>> 23 & 31), u += nn[B]);
    var H = 31 & n[k];
    Sn(t, u, T[H]), u += $[H], H > 3 && (Sn(t, u, n[k] >>> 5 & 8191), u += sn[H]);
  } else Sn(t, u, R[n[k]]), u += C[n[k]];
  return Sn(t, u, R[256]), u + C[256];
}, Rn = new tn([ 65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632 ]), Cn = function() {
  for (var e = new tn(256), t = 0; t < 256; ++t) {
    for (var i = t, n = 9; --n; ) i = (1 & i && 3988292384) ^ i >>> 1;
    e[t] = i;
  }
  return e;
}(), Tn = function() {
  var e = 4294967295;
  return {
    p: function(t) {
      for (var i = e, n = 0; n < t.length; ++n) i = Cn[255 & i ^ t[n]] ^ i >>> 8;
      e = i;
    },
    d: function() {
      return 4294967295 ^ e;
    }
  };
}, $n = function(e, t, i, n, s) {
  return function(e, t, i, n, s, r) {
    var o = e.length, a = new Zi(n + o + 5 * (1 + Math.floor(o / 7e3)) + s), l = a.subarray(n, a.length - s), c = 0;
    if (!t || o < 8) for (var u = 0; u <= o; u += 65535) {
      var d = u + 65535;
      d < o ? c = Pn(l, c, e.subarray(u, d)) : (l[u] = r, c = Pn(l, c, e.subarray(u, o)));
    } else {
      for (var h = Rn[t - 1], _ = h >>> 13, p = 8191 & h, g = (1 << i) - 1, f = new en(32768), v = new en(g + 1), m = Math.ceil(i / 3), y = 2 * m, b = function(t) {
        return (e[t] ^ e[t + 1] << m ^ e[t + 2] << y) & g;
      }, w = new tn(25e3), S = new en(288), E = new en(32), k = 0, x = 0, I = (u = 0, 
      0), P = 0, F = 0; u < o; ++u) {
        var R = b(u), C = 32767 & u, T = v[R];
        if (f[C] = T, v[R] = C, P <= u) {
          var $ = o - u;
          if ((k > 7e3 || I > 24576) && $ > 423) {
            c = Fn(e, l, 0, w, S, E, x, I, F, u - F, c), I = k = x = 0, F = u;
            for (var A = 0; A < 286; ++A) S[A] = 0;
            for (A = 0; A < 30; ++A) E[A] = 0;
          }
          var M = 2, L = 0, D = p, O = C - T & 32767;
          if ($ > 2 && R == b(u - O)) for (var N = Math.min(_, $) - 1, q = Math.min(32767, u), B = Math.min(258, $); O <= q && --D && C != T; ) {
            if (e[u + M] == e[u + M - O]) {
              for (var H = 0; H < B && e[u + H] == e[u + H - O]; ++H) ;
              if (H > M) {
                if (M = H, L = O, H > N) break;
                var U = Math.min(O, H - 2), W = 0;
                for (A = 0; A < U; ++A) {
                  var z = u - O + A + 32768 & 32767, V = z - f[z] + 32768 & 32767;
                  V > W && (W = V, T = z);
                }
              }
            }
            O += (C = T) - (T = f[C]) + 32768 & 32767;
          }
          if (L) {
            w[I++] = 268435456 | cn[M] << 18 | un[L];
            var G = 31 & cn[M], j = 31 & un[L];
            x += nn[G] + sn[j], ++S[257 + G], ++E[j], P = u + M, ++k;
          } else w[I++] = e[u], ++S[e[u]];
        }
      }
      c = Fn(e, l, r, w, S, E, x, I, F, u - F, c);
    }
    return bn(a, 0, n + yn(c) + s);
  }(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, i, n, !s);
}, An = function(e, t, i) {
  for (;i; ++t) e[t] = i, i >>>= 8;
}, Mn = function(e, t) {
  var i = t.filename;
  if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, 
  e[9] = 3, 0 != t.mtime && An(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), 
  i) {
    e[3] = 8;
    for (var n = 0; n <= i.length; ++n) e[n + 10] = i.charCodeAt(n);
  }
}, Ln = function(e) {
  return 10 + (e.filename && e.filename.length + 1 || 0);
};

function Dn(e, t) {
  void 0 === t && (t = {});
  var i = Tn(), n = e.length;
  i.p(e);
  var s = $n(e, t, Ln(t), 8), r = s.length;
  return Mn(s, t), An(s, r - 8, i.d()), An(s, r - 4, n), s;
}

function On(e, t) {
  var i = e.length;
  if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
  for (var n = new Zi(e.length + (e.length >>> 1)), s = 0, r = function(e) {
    n[s++] = e;
  }, o = 0; o < i; ++o) {
    if (s + 5 > n.length) {
      var a = new Zi(s + 8 + (i - o << 1));
      a.set(n), n = a;
    }
    var l = e.charCodeAt(o);
    l < 128 || t ? r(l) : l < 2048 ? (r(192 | l >>> 6), r(128 | 63 & l)) : l > 55295 && l < 57344 ? (r(240 | (l = 65536 + (1047552 & l) | 1023 & e.charCodeAt(++o)) >>> 18), 
    r(128 | l >>> 12 & 63), r(128 | l >>> 6 & 63), r(128 | 63 & l)) : (r(224 | l >>> 12), 
    r(128 | l >>> 6 & 63), r(128 | 63 & l));
  }
  return bn(n, 0, s);
}

const Nn = 3e5, qn = [ pi.MouseMove, pi.MouseInteraction, pi.Scroll, pi.ViewportResize, pi.Input, pi.TouchMove, pi.MediaInteraction, pi.Drag ], Bn = [ "trigger_activated", "trigger_pending", "trigger_disabled" ], Hn = e => ({
  rrwebMethod: e,
  enqueuedAt: Date.now(),
  attempt: 1
}), Un = "[SessionRecording]";

function Wn(e) {
  return function(e, t) {
    for (var i = "", n = 0; n < e.length; ) {
      var s = e[n++];
      s < 128 || t ? i += String.fromCharCode(s) : s < 224 ? i += String.fromCharCode((31 & s) << 6 | 63 & e[n++]) : s < 240 ? i += String.fromCharCode((15 & s) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) : (s = ((15 & s) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536, 
      i += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s));
    }
    return i;
  }(Dn(On(JSON.stringify(e))), !0);
}

function zn(e) {
  return e.type === _i.Custom && "sessionIdle" === e.data.tag;
}

class Vn {
  queuedRRWebEvents=[];
  isIdle=!1;
  _linkedFlagSeen=!1;
  _lastActivityTimestamp=Date.now();
  _linkedFlag=null;
  _removePageViewCaptureHook=void 0;
  _onSessionIdListener=void 0;
  _persistDecideOnSessionListener=void 0;
  _samplingSessionListener=void 0;
  _urlTriggers=[];
  _forceAllowLocalhostNetworkCapture=!1;
  get sessionIdleThresholdMilliseconds() {
    return this.instance.config.session_recording.session_idle_threshold_ms || 3e5;
  }
  get rrwebRecord() {
    var e, t;
    return null == h || null === (e = h.__PosthogExtensions__) || void 0 === e || null === (t = e.rrweb) || void 0 === t ? void 0 : t.record;
  }
  get started() {
    return this._captureStarted;
  }
  get sessionManager() {
    if (!this.instance.sessionManager) throw new Error(Un + " must be started with a valid sessionManager.");
    return this.instance.sessionManager;
  }
  get fullSnapshotIntervalMillis() {
    var e, t;
    return "trigger_pending" === this.urlTriggerStatus ? 6e4 : null !== (e = null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.full_snapshot_interval_millis) && void 0 !== e ? e : Nn;
  }
  get isSampled() {
    const e = this.instance.get_property(pe);
    return F(e) ? e : null;
  }
  get sessionDuration() {
    var e, t;
    const i = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1], {sessionStartTimestamp: n} = this.sessionManager.checkAndGetSessionAndWindowId(!0);
    return i ? i.timestamp - n : null;
  }
  get isRecordingEnabled() {
    const t = !!this.instance.get_property(ae), i = !this.instance.config.disable_session_recording;
    return e && t && i;
  }
  get isConsoleLogCaptureEnabled() {
    const e = !!this.instance.get_property(le), t = this.instance.config.enable_recording_console_log;
    return null != t ? t : e;
  }
  get canvasRecording() {
    var e, t, i, n, s, r;
    const o = this.instance.config.session_recording.captureCanvas, a = this.instance.get_property(ue), l = null !== (e = null !== (t = null == o ? void 0 : o.recordCanvas) && void 0 !== t ? t : null == a ? void 0 : a.enabled) && void 0 !== e && e, c = null !== (i = null !== (n = null == o ? void 0 : o.canvasFps) && void 0 !== n ? n : null == a ? void 0 : a.fps) && void 0 !== i ? i : 0, u = null !== (s = null !== (r = null == o ? void 0 : o.canvasQuality) && void 0 !== r ? r : null == a ? void 0 : a.quality) && void 0 !== s ? s : 0;
    return {
      enabled: l,
      fps: Xi(c, 0, 12, "canvas recording fps"),
      quality: Xi(u, 0, 1, "canvas recording quality")
    };
  }
  get networkPayloadCapture() {
    var e, t;
    const i = this.instance.get_property(ce), n = {
      recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
      recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
    }, s = (null == n ? void 0 : n.recordHeaders) || (null == i ? void 0 : i.recordHeaders), r = (null == n ? void 0 : n.recordBody) || (null == i ? void 0 : i.recordBody), o = b(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance, a = !!(F(o) ? o : null == i ? void 0 : i.capturePerformance);
    return s || r || a ? {
      recordHeaders: s,
      recordBody: r,
      recordPerformance: a
    } : void 0;
  }
  get sampleRate() {
    const e = this.instance.get_property(de);
    return P(e) ? e : null;
  }
  get minimumDuration() {
    const e = this.instance.get_property(he);
    return P(e) ? e : null;
  }
  get status() {
    return this.receivedDecide ? this.isRecordingEnabled ? I(this._linkedFlag) || this._linkedFlagSeen ? "trigger_pending" === this.urlTriggerStatus ? "buffering" : F(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering";
  }
  get urlTriggerStatus() {
    var e, t;
    if (this.receivedDecide && 0 === this._urlTriggers.length) return "trigger_disabled";
    const i = null === (e = this.instance) || void 0 === e ? void 0 : e.get_property(fe);
    var n, s, r, o;
    return (null === (t = this.instance) || void 0 === t ? void 0 : t.get_property(ge)) !== this.sessionId ? (null === (n = this.instance) || void 0 === n || null === (s = n.persistence) || void 0 === s || s.unregister(ge), 
    null === (r = this.instance) || void 0 === r || null === (o = r.persistence) || void 0 === o || o.unregister(fe), 
    "trigger_pending") : Bn.includes(i) ? i : "trigger_pending";
  }
  set urlTriggerStatus(e) {
    var t, i;
    null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i || i.register({
      [ge]: this.sessionId,
      [fe]: e
    });
  }
  constructor(e) {
    if (this.instance = e, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, 
    this.receivedDecide = !1, !this.instance.sessionManager) throw T.error(Un + " started without valid sessionManager"), 
    new Error(Un + " started without valid sessionManager. This is a bug.");
    const {sessionId: t, windowId: i} = this.sessionManager.checkAndGetSessionAndWindowId();
    this.sessionId = t, this.windowId = i, this.buffer = this.clearBuffer(), this.sessionIdleThresholdMilliseconds >= this.sessionManager.sessionTimeoutMs && T.warn(Un + ` session_idle_threshold_ms (${this.sessionIdleThresholdMilliseconds}) is greater than the session timeout (${this.sessionManager.sessionTimeoutMs}). Session will never be detected as idle`);
  }
  _onBeforeUnload=() => {
    this._flushBuffer();
  };
  _onOffline=() => {
    this._tryAddCustomEvent("browser offline", {});
  };
  _onOnline=() => {
    this._tryAddCustomEvent("browser online", {});
  };
  _onVisibilityChange=() => {
    if (null != o && o.visibilityState) {
      const e = "window " + o.visibilityState;
      this._tryAddCustomEvent(e, {});
    }
  };
  startIfEnabledOrStop(t) {
    this.isRecordingEnabled ? (this._startCapture(t), null == e || e.addEventListener("beforeunload", this._onBeforeUnload), 
    null == e || e.addEventListener("offline", this._onOffline), null == e || e.addEventListener("online", this._onOnline), 
    null == e || e.addEventListener("visibilitychange", this._onVisibilityChange), this._setupSampling(), 
    I(this._removePageViewCaptureHook) && (this._removePageViewCaptureHook = this.instance._addCaptureHook((t => {
      try {
        if ("$pageview" === t) {
          const t = e ? this._maskUrl(e.location.href) : "";
          if (!t) return;
          this._tryAddCustomEvent("$pageview", {
            href: t
          });
        }
      } catch (e) {
        T.error("Could not add $pageview to rrweb session", e);
      }
    }))), this._onSessionIdListener || (this._onSessionIdListener = this.sessionManager.onSessionId(((e, t, i) => {
      var n, s, r, o;
      i && (this._tryAddCustomEvent("$session_id_change", {
        sessionId: e,
        windowId: t,
        changeReason: i
      }), null === (n = this.instance) || void 0 === n || null === (s = n.persistence) || void 0 === s || s.unregister(ge), 
      null === (r = this.instance) || void 0 === r || null === (o = r.persistence) || void 0 === o || o.unregister(fe));
    })))) : this.stopRecording();
  }
  stopRecording() {
    var t, i, n;
    this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, 
    this._captureStarted = !1, null == e || e.removeEventListener("beforeunload", this._onBeforeUnload), 
    null == e || e.removeEventListener("offline", this._onOffline), null == e || e.removeEventListener("online", this._onOnline), 
    null == e || e.removeEventListener("visibilitychange", this._onVisibilityChange), 
    this.clearBuffer(), clearInterval(this._fullSnapshotTimer), null === (t = this._removePageViewCaptureHook) || void 0 === t || t.call(this), 
    this._removePageViewCaptureHook = void 0, null === (i = this._onSessionIdListener) || void 0 === i || i.call(this), 
    this._onSessionIdListener = void 0, null === (n = this._samplingSessionListener) || void 0 === n || n.call(this), 
    this._samplingSessionListener = void 0, T.info(Un + " stopped"));
  }
  makeSamplingDecision(e) {
    var t;
    const i = this.sessionId !== e, n = this.sampleRate;
    var s;
    if (!P(n)) return void (null === (s = this.instance.persistence) || void 0 === s || s.register({
      [pe]: null
    }));
    const r = this.isSampled;
    let o;
    const a = i || !F(r);
    if (a) {
      o = Math.random() < n;
    } else o = r;
    a && (o ? this._reportStarted("sampling") : T.warn(Un + ` Sample rate (${n}) has determined that this sessionId (${e}) will not be sent to the server.`), 
    this._tryAddCustomEvent("samplingDecisionMade", {
      sampleRate: n,
      isSampled: o
    })), null === (t = this.instance.persistence) || void 0 === t || t.register({
      [pe]: o
    });
  }
  afterDecideResponse(e) {
    var t, i, n, s;
    (this._persistDecideResponse(e), this._linkedFlag = (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null, 
    null !== (i = e.sessionRecording) && void 0 !== i && i.endpoint) && (this._endpoint = null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.endpoint);
    if (this._setupSampling(), !I(this._linkedFlag) && !this._linkedFlagSeen) {
      const e = E(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag, t = E(this._linkedFlag) ? null : this._linkedFlag.variant;
      this.instance.onFeatureFlags(((i, n) => {
        const s = b(n) && e in n, r = t ? n[e] === t : s;
        if (r) {
          const i = {
            linkedFlag: e,
            linkedVariant: t
          }, n = "linked flag matched";
          T.info(Un + " " + n, i), this._tryAddCustomEvent(n, i), this._reportStarted("linked_flag_match");
        }
        this._linkedFlagSeen = r;
      }));
    }
    null !== (n = e.sessionRecording) && void 0 !== n && n.urlTriggers && (this._urlTriggers = e.sessionRecording.urlTriggers), 
    this.receivedDecide = !0, this.startIfEnabledOrStop();
  }
  _setupSampling() {
    P(this.sampleRate) && I(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId((e => {
      this.makeSamplingDecision(e);
    })));
  }
  _persistDecideResponse(e) {
    if (this.instance.persistence) {
      var t;
      const i = this.instance.persistence, n = () => {
        var t, n, s, r, o, a, l;
        const c = null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.sampleRate, u = I(c) ? null : parseFloat(c), d = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.minimumDurationMilliseconds;
        i.register({
          [ae]: !!e.sessionRecording,
          [le]: null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.consoleLogRecordingEnabled,
          [ce]: {
            capturePerformance: e.capturePerformance,
            ...null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.networkPayloadCapture
          },
          [ue]: {
            enabled: null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.recordCanvas,
            fps: null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.canvasFps,
            quality: null === (l = e.sessionRecording) || void 0 === l ? void 0 : l.canvasQuality
          },
          [de]: u,
          [he]: S(d) ? null : d
        });
      };
      n(), null === (t = this._persistDecideOnSessionListener) || void 0 === t || t.call(this), 
      this._persistDecideOnSessionListener = this.sessionManager.onSessionId(n);
    }
  }
  log(e) {
    var t;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
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
    if (!S(Object.assign) && !S(Array.from) && !(this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut())) {
      var t, i;
      if (this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId(), 
      this.rrwebRecord) this._onScriptLoaded(); else null === (t = h.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, "recorder", (e => {
        if (e) return T.error(Un + " could not load recorder", e);
        this._onScriptLoaded();
      }));
      T.info(Un + " starting"), "active" === this.status && this._reportStarted(e || "recording_initialized");
    }
  }
  isInteractiveEvent(e) {
    var t;
    return 3 === e.type && -1 !== qn.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source);
  }
  _updateWindowAndSessionIds(e) {
    const t = this.isInteractiveEvent(e);
    if (!t && !this.isIdle) {
      e.timestamp - this._lastActivityTimestamp > this.sessionIdleThresholdMilliseconds && (this.isIdle = !0, 
      clearInterval(this._fullSnapshotTimer), this._tryAddCustomEvent("sessionIdle", {
        eventTimestamp: e.timestamp,
        lastActivityTimestamp: this._lastActivityTimestamp,
        threshold: this.sessionIdleThresholdMilliseconds,
        bufferLength: this.buffer.data.length,
        bufferSize: this.buffer.size
      }), this._flushBuffer());
    }
    let i = !1;
    if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, 
    this._tryAddCustomEvent("sessionNoLongerIdle", {
      reason: "user activity",
      type: e.type
    }), i = !0)), this.isIdle) return;
    const {windowId: n, sessionId: s} = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp), r = this.sessionId !== s, o = this.windowId !== n;
    this.windowId = n, this.sessionId = s, r || o ? (this.stopRecording(), this.startIfEnabledOrStop("session_id_changed")) : i && this._scheduleFullSnapshot();
  }
  _tryRRWebMethod(e) {
    try {
      return e.rrwebMethod(), !0;
    } catch (t) {
      return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
        enqueuedAt: e.enqueuedAt || Date.now(),
        attempt: e.attempt++,
        rrwebMethod: e.rrwebMethod
      }) : T.warn(Un + " could not emit queued rrweb event.", t, e), !1;
    }
  }
  _tryAddCustomEvent(e, t) {
    return this._tryRRWebMethod(Hn((() => this.rrwebRecord.addCustomEvent(e, t))));
  }
  _tryTakeFullSnapshot() {
    return this._tryRRWebMethod(Hn((() => this.rrwebRecord.takeFullSnapshot())));
  }
  _onScriptLoaded() {
    var e;
    const t = {
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
    for (const [e, n] of Object.entries(i || {})) e in t && ("maskInputOptions" === e ? t.maskInputOptions = {
      password: !0,
      ...n
    } : t[e] = n);
    if (this.canvasRecording && this.canvasRecording.enabled && (t.recordCanvas = !0, 
    t.sampling = {
      canvas: this.canvasRecording.fps
    }, t.dataURLOptions = {
      type: "image/webp",
      quality: this.canvasRecording.quality
    }), !this.rrwebRecord) return void T.error(Un + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
    this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new Ki(this.rrwebRecord, {
      refillRate: this.instance.config.session_recording.__mutationRateLimiterRefillRate,
      bucketSize: this.instance.config.session_recording.__mutationRateLimiterBucketSize,
      onBlockedNode: (e, t) => {
        const i = `Too many mutations on node '${e}'. Rate limiting. This could be due to SVG animations or something similar`;
        T.info(i, {
          node: t
        }), this.log(Un + " " + i, "warn");
      }
    });
    const n = this._gatherRRWebPlugins();
    this.stopRrweb = this.rrwebRecord({
      emit: e => {
        this.onRRwebEmit(e);
      },
      plugins: n,
      ...t
    }), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
      sessionRecordingOptions: t,
      activePlugins: n.map((e => null == e ? void 0 : e.name))
    }), this._tryAddCustomEvent("$posthog_config", {
      config: this.instance.config
    });
  }
  _scheduleFullSnapshot() {
    if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), this.isIdle) return;
    const e = this.fullSnapshotIntervalMillis;
    e && (this._fullSnapshotTimer = setInterval((() => {
      this._tryTakeFullSnapshot();
    }), e));
  }
  _gatherRRWebPlugins() {
    var e, t, i, n;
    const s = [], r = null === (e = h.__PosthogExtensions__) || void 0 === e || null === (t = e.rrwebPlugins) || void 0 === t ? void 0 : t.getRecordConsolePlugin;
    r && this.isConsoleLogCaptureEnabled && s.push(r());
    const o = null === (i = h.__PosthogExtensions__) || void 0 === i || null === (n = i.rrwebPlugins) || void 0 === n ? void 0 : n.getRecordNetworkPlugin;
    if (this.networkPayloadCapture && y(o)) {
      !rt.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? s.push(o(Yi(this.instance.config, this.networkPayloadCapture))) : T.info(Un + " NetworkCapture not started because we are on localhost.");
    }
    return s;
  }
  onRRwebEmit(e) {
    var t;
    if (this._processQueuedEvents(), !e || !b(e)) return;
    if (e.type === _i.Meta) {
      const t = this._maskUrl(e.data.href);
      if (this._lastHref = t, !t) return;
      e.data.href = t;
    } else this._pageViewFallBack();
    this._checkUrlTrigger(), e.type === _i.FullSnapshot && this._scheduleFullSnapshot(), 
    e.type === _i.FullSnapshot && "trigger_pending" === this.urlTriggerStatus && this.clearBuffer();
    const i = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
    if (!i) return;
    const n = function(e) {
      const t = e;
      if (t && b(t) && 6 === t.type && b(t.data) && "rrweb/console@1" === t.data.plugin) {
        t.data.payload.payload.length > 10 && (t.data.payload.payload = t.data.payload.payload.slice(0, 10), 
        t.data.payload.payload.push("...[truncated]"));
        const i = [];
        for (let e = 0; e < t.data.payload.payload.length; e++) t.data.payload.payload[e] && t.data.payload.payload[e].length > 2e3 ? i.push(t.data.payload.payload[e].slice(0, 2e3) + "...[truncated]") : i.push(t.data.payload.payload[e]);
        return t.data.payload.payload = i, e;
      }
      return e;
    }(i);
    if (this._updateWindowAndSessionIds(n), this.isIdle && !zn(n)) return;
    if (zn(n)) {
      const e = n.data.payload;
      if (e) {
        const t = e.lastActivityTimestamp, i = e.threshold;
        n.timestamp = t + i;
      }
    }
    const s = null === (t = this.instance.config.session_recording.compress_events) || void 0 === t || t ? function(e) {
      if (di(e) < 1024) return e;
      try {
        if (e.type === _i.FullSnapshot) return {
          ...e,
          data: Wn(e.data),
          cv: "2024-10"
        };
        if (e.type === _i.IncrementalSnapshot && e.data.source === pi.Mutation) return {
          ...e,
          cv: "2024-10",
          data: {
            ...e.data,
            texts: Wn(e.data.texts),
            attributes: Wn(e.data.attributes),
            removes: Wn(e.data.removes),
            adds: Wn(e.data.adds)
          }
        };
        if (e.type === _i.IncrementalSnapshot && e.data.source === pi.StyleSheetRule) return {
          ...e,
          cv: "2024-10",
          data: {
            ...e.data,
            adds: Wn(e.data.adds),
            removes: Wn(e.data.removes)
          }
        };
      } catch (e) {
        T.error(Un + " could not compress event - will use uncompressed event", e);
      }
      return e;
    }(n) : n, r = {
      $snapshot_bytes: di(s),
      $snapshot_data: s,
      $session_id: this.sessionId,
      $window_id: this.windowId
    };
    "disabled" !== this.status ? this._captureSnapshotBuffered(r) : this.clearBuffer();
  }
  _pageViewFallBack() {
    if (this.instance.config.capture_pageview || !e) return;
    const t = this._maskUrl(e.location.href);
    this._lastHref !== t && (this._tryAddCustomEvent("$url_changed", {
      href: t
    }), this._lastHref = t);
  }
  _processQueuedEvents() {
    if (this.queuedRRWebEvents.length) {
      const e = [ ...this.queuedRRWebEvents ];
      this.queuedRRWebEvents = [], e.forEach((e => {
        Date.now() - e.enqueuedAt <= 2e3 && this._tryRRWebMethod(e);
      }));
    }
  }
  _maskUrl(e) {
    const t = this.instance.config.session_recording;
    if (t.maskNetworkRequestFn) {
      var i;
      let n = {
        url: e
      };
      return n = t.maskNetworkRequestFn(n), null === (i = n) || void 0 === i ? void 0 : i.url;
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
    const e = this.minimumDuration, t = this.sessionDuration, i = P(t) && t >= 0, n = P(e) && i && t < e;
    if ("buffering" === this.status || n) return this.flushBufferTimer = setTimeout((() => {
      this._flushBuffer();
    }), 2e3), this.buffer;
    if (this.buffer.data.length > 0) {
      hi(this.buffer).forEach((e => {
        this._captureSnapshot({
          $snapshot_bytes: e.size,
          $snapshot_data: e.data,
          $session_id: e.sessionId,
          $window_id: e.windowId
        });
      }));
    }
    return this.clearBuffer();
  }
  _captureSnapshotBuffered(e) {
    var t;
    const i = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
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
  _checkUrlTrigger() {
    if (void 0 === e || !e.location.href) return;
    const t = e.location.href;
    this._urlTriggers.some((e => "regex" === e.matching && new RegExp(e.url).test(t))) && this._activateUrlTrigger();
  }
  _activateUrlTrigger() {
    "trigger_pending" === this.urlTriggerStatus && (this.urlTriggerStatus = "trigger_activated", 
    this._tryAddCustomEvent("url trigger activated", {}), this._flushBuffer(), T.info(Un + " recording triggered by URL pattern match"));
  }
  overrideLinkedFlag() {
    this._linkedFlagSeen = !0, this._reportStarted("linked_flag_override");
  }
  overrideSampling() {
    var e;
    null === (e = this.instance.persistence) || void 0 === e || e.register({
      [pe]: !0
    }), this._reportStarted("sampling_override");
  }
  _reportStarted(e) {
    (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0)() && this.instance.register_for_session({
      $session_recording_start_reason: e
    });
  }
}

class Gn {
  constructor(e) {
    this.instance = e, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
  }
  call() {
    const e = {
      token: this.instance.config.token,
      distinct_id: this.instance.get_distinct_id(),
      groups: this.instance.getGroups(),
      person_properties: this.instance.get_property(ye),
      group_properties: this.instance.get_property(be),
      disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0
    };
    this.instance._send_request({
      method: "POST",
      url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
      data: e,
      compression: this.instance.config.disable_compression ? void 0 : J.Base64,
      timeout: this.instance.config.feature_flag_request_timeout_ms,
      callback: e => this.parseDecideResponse(e.json)
    });
  }
  parseDecideResponse(e) {
    this.instance.featureFlags.setReloadingPaused(!1), this.instance.featureFlags._startReloadTimer();
    const t = !e;
    if (this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(null != e ? e : {}, t), 
    t) T.error("Failed to fetch feature flags from PostHog."); else {
      if (!o || !o.body) return T.info("document not ready yet, trying again in 500 milliseconds..."), 
      void setTimeout((() => {
        this.parseDecideResponse(e);
      }), 500);
      if (this.instance._afterDecideResponse(e), e.siteApps) if (this.instance.config.opt_in_site_apps) for (const {id: t, url: r} of e.siteApps) {
        var i, n, s;
        h[`__$$ph_site_app_${t}`] = this.instance, null === (i = h.__PosthogExtensions__) || void 0 === i || null === (n = (s = i).loadSiteApp) || void 0 === n || n.call(s, this.instance, r, (e => {
          if (e) return T.error(`Error while initializing PostHog app with config id ${t}`, e);
        }));
      } else e.siteApps.length > 0 && T.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
    }
  }
}

const jn = null != e && e.location ? ut(e.location.hash, "__posthog") || ut(location.hash, "state") : null, Qn = "_postHogToolbarParams";

var Jn;

!function(e) {
  e[e.UNINITIALIZED = 0] = "UNINITIALIZED", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED";
}(Jn || (Jn = {}));

class Yn {
  constructor(e) {
    this.instance = e;
  }
  setToolbarState(e) {
    h.ph_toolbar_state = e;
  }
  getToolbarState() {
    var e;
    return null !== (e = h.ph_toolbar_state) && void 0 !== e ? e : Jn.UNINITIALIZED;
  }
  maybeLoadToolbar() {
    var t, i;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    if (!e || !o) return !1;
    n = null !== (t = n) && void 0 !== t ? t : e.location, r = null !== (i = r) && void 0 !== i ? i : e.history;
    try {
      if (!s) {
        try {
          e.localStorage.setItem("test", "test"), e.localStorage.removeItem("test");
        } catch {
          return !1;
        }
        s = null == e ? void 0 : e.localStorage;
      }
      const t = jn || ut(n.hash, "__posthog") || ut(n.hash, "state");
      let i;
      const o = t ? B((() => JSON.parse(atob(decodeURIComponent(t))))) || B((() => JSON.parse(decodeURIComponent(t)))) : null;
      return o && "ph_authorize" === o.action ? (i = o, i.source = "url", i && Object.keys(i).length > 0 && (o.desiredHash ? n.hash = o.desiredHash : r ? r.replaceState(r.state, "", n.pathname + n.search) : n.hash = "")) : (i = JSON.parse(s.getItem(Qn) || "{}"), 
      i.source = "localstorage", delete i.userIntent), !(!i.token || this.instance.config.token !== i.token) && (this.loadToolbar(i), 
      !0);
    } catch {
      return !1;
    }
  }
  _callLoadToolbar(e) {
    (h.ph_load_toolbar || h.ph_load_editor)(e, this.instance);
  }
  loadToolbar(t) {
    const i = !(null == o || !o.getElementById(Te));
    if (!e || i) return !1;
    const n = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, s = {
      token: this.instance.config.token,
      ...t,
      apiURL: this.instance.requestRouter.endpointFor("ui"),
      ...n ? {
        instrument: !1
      } : {}
    };
    if (e.localStorage.setItem(Qn, JSON.stringify({
      ...s,
      source: void 0
    })), this.getToolbarState() === Jn.LOADED) this._callLoadToolbar(s); else if (this.getToolbarState() === Jn.UNINITIALIZED) {
      var r, a;
      this.setToolbarState(Jn.LOADING), null === (r = h.__PosthogExtensions__) || void 0 === r || null === (a = r.loadExternalDependency) || void 0 === a || a.call(r, this.instance, "toolbar", (e => {
        if (e) return T.error("Failed to load toolbar", e), void this.setToolbarState(Jn.UNINITIALIZED);
        this.setToolbarState(Jn.LOADED), this._callLoadToolbar(s);
      })), G(e, "turbolinks:load", (() => {
        this.setToolbarState(Jn.UNINITIALIZED), this.loadToolbar(s);
      }));
    }
    return !0;
  }
  _loadEditor(e) {
    return this.loadToolbar(e);
  }
  maybeLoadEditor() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    return this.maybeLoadToolbar(e, t, i);
  }
}

class Xn {
  isPaused=!0;
  queue=[];
  flushTimeoutMs=3e3;
  constructor(e) {
    this.sendRequest = e;
  }
  enqueue(e) {
    this.queue.push(e), this.flushTimeout || this.setFlushTimeout();
  }
  unload() {
    this.clearFlushTimeout();
    const e = this.queue.length > 0 ? this.formatQueue() : {}, t = Object.values(e), i = [ ...t.filter((e => 0 === e.url.indexOf("/e"))), ...t.filter((e => 0 !== e.url.indexOf("/e"))) ];
    i.map((e => {
      this.sendRequest({
        ...e,
        transport: "sendBeacon"
      });
    }));
  }
  enable() {
    this.isPaused = !1, this.setFlushTimeout();
  }
  setFlushTimeout() {
    this.isPaused || (this.flushTimeout = setTimeout((() => {
      if (this.clearFlushTimeout(), this.queue.length > 0) {
        const e = this.formatQueue();
        for (const t in e) {
          const i = e[t], n = (new Date).getTime();
          i.data && m(i.data) && D(i.data, (e => {
            e.offset = Math.abs(e.timestamp - n), delete e.timestamp;
          })), this.sendRequest(i);
        }
      }
    }), this.flushTimeoutMs));
  }
  clearFlushTimeout() {
    clearTimeout(this.flushTimeout), this.flushTimeout = void 0;
  }
  formatQueue() {
    const e = {};
    return D(this.queue, (t => {
      var i;
      const n = t, s = (n ? n.batchKey : null) || n.url;
      S(e[s]) && (e[s] = {
        ...n,
        data: []
      }), null === (i = e[s].data) || void 0 === i || i.push(n.data);
    })), this.queue = [], e;
  }
}

const Kn = !!c || !!l, Zn = "text/plain", es = (e, t) => {
  const [i, n] = e.split("?"), s = {
    ...t
  };
  null == n || n.split("&").forEach((e => {
    const [t] = e.split("=");
    delete s[t];
  }));
  let r = lt(s);
  return r = r ? (n ? n + "&" : "") + r : n, `${i}?${r}`;
}, ts = e => {
  let {data: t, compression: i} = e;
  if (!t) return;
  if (i === J.GZipJS) {
    const e = Dn(On(JSON.stringify(t)), {
      mtime: 0
    }), i = new Blob([ e ], {
      type: Zn
    });
    return {
      contentType: Zn,
      body: i,
      estimatedSize: i.size
    };
  }
  if (i === J.Base64) {
    const e = function(e) {
      const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      let i, n, s, r, o, a, l, c, u = 0, d = 0, h = "";
      const _ = [];
      if (!e) return e;
      e = V(e);
      do {
        i = e.charCodeAt(u++), n = e.charCodeAt(u++), s = e.charCodeAt(u++), c = i << 16 | n << 8 | s, 
        r = c >> 18 & 63, o = c >> 12 & 63, a = c >> 6 & 63, l = 63 & c, _[d++] = t.charAt(r) + t.charAt(o) + t.charAt(a) + t.charAt(l);
      } while (u < e.length);
      switch (h = _.join(""), e.length % 3) {
       case 1:
        h = h.slice(0, -2) + "==";
        break;

       case 2:
        h = h.slice(0, -1) + "=";
      }
      return h;
    }(JSON.stringify(t)), i = (e => "data=" + encodeURIComponent("string" == typeof e ? e : JSON.stringify(e)))(e);
    return {
      contentType: "application/x-www-form-urlencoded",
      body: i,
      estimatedSize: new Blob([ i ]).size
    };
  }
  const n = JSON.stringify(t);
  return {
    contentType: "application/json",
    body: n,
    estimatedSize: new Blob([ n ]).size
  };
}, is = e => {
  var t;
  const i = new c;
  i.open(e.method || "GET", e.url, !0);
  const {contentType: n, body: s} = null !== (t = ts(e)) && void 0 !== t ? t : {};
  D(e.headers, (function(e, t) {
    i.setRequestHeader(t, e);
  })), n && i.setRequestHeader("Content-Type", n), e.timeout && (i.timeout = e.timeout), 
  i.withCredentials = !0, i.onreadystatechange = () => {
    if (4 === i.readyState) {
      var t;
      const n = {
        statusCode: i.status,
        text: i.responseText
      };
      if (200 === i.status) try {
        n.json = JSON.parse(i.responseText);
      } catch {}
      null === (t = e.callback) || void 0 === t || t.call(e, n);
    }
  }, i.send(s);
}, ns = e => {
  var t, i;
  const {contentType: n, body: s, estimatedSize: r} = null !== (t = ts(e)) && void 0 !== t ? t : {}, o = new Headers;
  D(e.headers, (function(e, t) {
    o.append(t, e);
  })), n && o.append("Content-Type", n);
  const a = e.url;
  let c = null;
  if (u) {
    const t = new u;
    c = {
      signal: t.signal,
      timeout: setTimeout((() => t.abort()), e.timeout)
    };
  }
  l(a, {
    method: (null == e ? void 0 : e.method) || "GET",
    headers: o,
    keepalive: "POST" === e.method && (r || 0) < 52428.8,
    body: s,
    signal: null === (i = c) || void 0 === i ? void 0 : i.signal
  }).then((t => t.text().then((i => {
    var n;
    const s = {
      statusCode: t.status,
      text: i
    };
    if (200 === t.status) try {
      s.json = JSON.parse(i);
    } catch (e) {
      T.error(e);
    }
    null === (n = e.callback) || void 0 === n || n.call(e, s);
  })))).catch((t => {
    var i;
    T.error(t), null === (i = e.callback) || void 0 === i || i.call(e, {
      statusCode: 0,
      text: t
    });
  })).finally((() => c ? clearTimeout(c.timeout) : null));
}, ss = e => {
  const t = es(e.url, {
    beacon: "1"
  });
  try {
    var i;
    const {contentType: n, body: s} = null !== (i = ts(e)) && void 0 !== i ? i : {}, o = "string" == typeof s ? new Blob([ s ], {
      type: n
    }) : s;
    r.sendBeacon(t, o);
  } catch {}
}, rs = [];

c && rs.push({
  transport: "XHR",
  method: is
}), l && rs.push({
  transport: "fetch",
  method: ns
}), null != r && r.sendBeacon && rs.push({
  transport: "sendBeacon",
  method: ss
});

class os {
  isPolling=!1;
  pollIntervalMs=3e3;
  queue=[];
  constructor(t) {
    this.instance = t, this.queue = [], this.areWeOnline = !0, !S(e) && "onLine" in e.navigator && (this.areWeOnline = e.navigator.onLine, 
    e.addEventListener("online", (() => {
      this.areWeOnline = !0, this.flush();
    })), e.addEventListener("offline", (() => {
      this.areWeOnline = !1;
    })));
  }
  retriableRequest(e) {
    let {retriesPerformedSoFar: t, ...i} = e;
    P(t) && t > 0 && (i.url = es(i.url, {
      retry_count: t
    })), this.instance._send_request({
      ...i,
      callback: e => {
        var n;
        200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != t ? t : 0) < 10 ? this.enqueue({
          retriesPerformedSoFar: t,
          ...i
        }) : null === (n = i.callback) || void 0 === n || n.call(i, e);
      }
    });
  }
  enqueue(e) {
    const t = e.retriesPerformedSoFar || 0;
    e.retriesPerformedSoFar = t + 1;
    const i = function(e) {
      const t = 3e3 * 2 ** e, i = t / 2, n = Math.min(18e5, t), s = (Math.random() - .5) * (n - i);
      return Math.ceil(n + s);
    }(t), n = Date.now() + i;
    this.queue.push({
      retryAt: n,
      requestOptions: e
    });
    let s = `Enqueued failed request for retry in ${i}`;
    navigator.onLine || (s += " (Browser is offline)"), T.warn(s), this.isPolling || (this.isPolling = !0, 
    this.poll());
  }
  poll() {
    this.poller && clearTimeout(this.poller), this.poller = setTimeout((() => {
      this.areWeOnline && this.queue.length > 0 && this.flush(), this.poll();
    }), this.pollIntervalMs);
  }
  flush() {
    const e = Date.now(), t = [], i = this.queue.filter((i => i.retryAt < e || (t.push(i), 
    !1)));
    if (this.queue = t, i.length > 0) for (const {requestOptions: e} of i) this.retriableRequest(e);
  }
  unload() {
    this.poller && (clearTimeout(this.poller), this.poller = void 0);
    for (const {requestOptions: e} of this.queue) try {
      this.instance._send_request({
        ...e,
        transport: "sendBeacon"
      });
    } catch (e) {
      T.error(e);
    }
    this.queue = [];
  }
}

class as {
  _sessionIdChangedHandlers=[];
  constructor(e, t, i, n) {
    var s;
    this.config = e, this.persistence = t, this._windowId = void 0, this._sessionId = void 0, 
    this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = i || ze, 
    this._windowIdGenerator = n || ze;
    const r = e.persistence_name || e.token, o = e.session_idle_timeout_seconds || 1800;
    if (this._sessionTimeoutMs = 1e3 * Xi(o, 60, 1800, "session_idle_timeout_seconds"), 
    this._window_id_storage_key = "ph_" + r + "_window_id", this._primary_window_exists_storage_key = "ph_" + r + "_primary_window_exists", 
    this._canUseSessionStorage()) {
      const e = st.parse(this._window_id_storage_key), t = st.parse(this._primary_window_exists_storage_key);
      e && !t ? this._windowId = e : st.remove(this._window_id_storage_key), st.set(this._primary_window_exists_storage_key, !0);
    }
    if (null !== (s = this.config.bootstrap) && void 0 !== s && s.sessionID) try {
      const e = (e => {
        const t = e.replace(/-/g, "");
        if (32 !== t.length) throw new Error("Not a valid UUID");
        if ("7" !== t[12]) throw new Error("Not a UUIDv7");
        return parseInt(t.substring(0, 12), 16);
      })(this.config.bootstrap.sessionID);
      this._setSessionId(this.config.bootstrap.sessionID, (new Date).getTime(), e);
    } catch (e) {
      T.error("Invalid sessionID in bootstrap", e);
    }
    this._listenToReloadWindow();
  }
  get sessionTimeoutMs() {
    return this._sessionTimeoutMs;
  }
  onSessionId(e) {
    return S(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), 
    this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId), 
    () => {
      this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((t => t !== e));
    };
  }
  _canUseSessionStorage() {
    return "memory" !== this.config.persistence && !this.persistence.disabled && st.is_supported();
  }
  _setWindowId(e) {
    e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && st.set(this._window_id_storage_key, e));
  }
  _getWindowId() {
    return this._windowId ? this._windowId : this._canUseSessionStorage() ? st.parse(this._window_id_storage_key) : null;
  }
  _setSessionId(e, t, i) {
    e === this._sessionId && t === this._sessionActivityTimestamp && i === this._sessionStartTimestamp || (this._sessionStartTimestamp = i, 
    this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register({
      [_e]: [ t, e, i ]
    }));
  }
  _getSessionId() {
    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [ this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp ];
    const e = this.persistence.props[_e];
    return m(e) && 2 === e.length && e.push(e[0]), e || [ 0, null, 0 ];
  }
  resetSessionId() {
    this._setSessionId(null, null, null);
  }
  _listenToReloadWindow() {
    null == e || e.addEventListener("beforeunload", (() => {
      this._canUseSessionStorage() && st.remove(this._primary_window_exists_storage_key);
    }));
  }
  checkAndGetSessionAndWindowId() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    const t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (new Date).getTime();
    let [i, n, s] = this._getSessionId(), r = this._getWindowId();
    const o = P(s) && s > 0 && Math.abs(t - s) > 864e5;
    let a = !1;
    const l = !n, c = !e && Math.abs(t - i) > this.sessionTimeoutMs;
    l || c || o ? (n = this._sessionIdGenerator(), r = this._windowIdGenerator(), T.info("[SessionId] new session ID generated", {
      sessionId: n,
      windowId: r,
      changeReason: {
        noSessionId: l,
        activityTimeout: c,
        sessionPastMaximumLength: o
      }
    }), s = t, a = !0) : r || (r = this._windowIdGenerator(), a = !0);
    const u = 0 === i || !e || o ? t : i, d = 0 === s ? (new Date).getTime() : s;
    return this._setWindowId(r), this._setSessionId(n, u, d), a && this._sessionIdChangedHandlers.forEach((e => e(n, r, a ? {
      noSessionId: l,
      activityTimeout: c,
      sessionPastMaximumLength: o
    } : void 0))), {
      sessionId: n,
      windowId: r,
      sessionStartTimestamp: d,
      changeReason: a ? {
        noSessionId: l,
        activityTimeout: c,
        sessionPastMaximumLength: o
      } : void 0,
      lastActivityTimestamp: i
    };
  }
}

let ls;

!function(e) {
  e.US = "us", e.EU = "eu", e.CUSTOM = "custom";
}(ls || (ls = {}));

const cs = "i.posthog.com";

class us {
  _regionCache={};
  constructor(e) {
    this.instance = e;
  }
  get apiHost() {
    const e = this.instance.config.api_host.trim().replace(/\/$/, "");
    return "https://app.posthog.com" === e ? "https://us.i.posthog.com" : e;
  }
  get uiHost() {
    var e;
    let t = null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "");
    return t || (t = this.apiHost.replace(`.${cs}`, ".posthog.com")), "https://app.posthog.com" === t ? "https://us.posthog.com" : t;
  }
  get region() {
    return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = ls.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = ls.EU : this._regionCache[this.apiHost] = ls.CUSTOM), 
    this._regionCache[this.apiHost];
  }
  endpointFor(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if (t && (t = "/" === t[0] ? t : `/${t}`), "ui" === e) return this.uiHost + t;
    if (this.region === ls.CUSTOM) return this.apiHost + t;
    const i = cs + t;
    switch (e) {
     case "assets":
      return `https://${this.region}-assets.${i}`;

     case "api":
      return `https://${this.region}.${i}`;
    }
  }
}

const ds = "posthog-js";

function hs(e) {
  let {organization: t, projectId: i, prefix: n, severityAllowList: s = [ "error" ]} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return r => {
    var o, a, l, c, u;
    if (!("*" === s || s.includes(r.level)) || !e.__loaded) return r;
    r.tags || (r.tags = {});
    const d = e.requestRouter.endpointFor("ui", `/project/${e.config.token}/person/${e.get_distinct_id()}`);
    r.tags["PostHog Person URL"] = d, e.sessionRecordingStarted() && (r.tags["PostHog Recording URL"] = e.get_session_replay_url({
      withTimestamp: !0
    }));
    const h = (null === (o = r.exception) || void 0 === o ? void 0 : o.values) || [], _ = {
      $exception_message: (null === (a = h[0]) || void 0 === a ? void 0 : a.value) || r.message,
      $exception_type: null === (l = h[0]) || void 0 === l ? void 0 : l.type,
      $exception_personURL: d,
      $exception_level: r.level,
      $exception_list: h,
      $sentry_event_id: r.event_id,
      $sentry_exception: r.exception,
      $sentry_exception_message: (null === (c = h[0]) || void 0 === c ? void 0 : c.value) || r.message,
      $sentry_exception_type: null === (u = h[0]) || void 0 === u ? void 0 : u.type,
      $sentry_tags: r.tags,
      $level: r.level
    };
    return t && i && (_.$sentry_url = (n || "https://sentry.io/organizations/") + t + "/issues/?project=" + i + "&query=" + r.event_id), 
    e.exceptions.sendExceptionEvent(_), r;
  };
}

class _s {
  constructor(e, t, i, n, s) {
    this.name = ds, this.setupOnce = function(r) {
      r(hs(e, {
        organization: t,
        projectId: i,
        prefix: n,
        severityAllowList: s
      }));
    };
  }
}

function ps(e, t) {
  const i = e.config.segment;
  if (!i) return t();
  !function(e, t) {
    const i = e.config.segment;
    if (!i) return t();
    const n = i => {
      const n = () => i.anonymousId() || ze();
      e.config.get_device_id = n, i.id() && (e.register({
        distinct_id: i.id(),
        $device_id: n()
      }), e.persistence.set_property(ke, "identified")), t();
    }, s = i.user();
    "then" in s && y(s.then) ? s.then((e => n(e))) : n(s);
  }(e, (() => {
    i.register((e => {
      Promise && Promise.resolve || T.warn("This browser does not have Promise support, and can not use the segment integration");
      const t = (t, i) => {
        var n;
        if (!i) return t;
        t.event.userId || t.event.anonymousId === e.get_distinct_id() || (T.info("Segment integration does not have a userId set, resetting PostHog"), 
        e.reset()), t.event.userId && t.event.userId !== e.get_distinct_id() && (T.info("Segment integration has a userId set, identifying with PostHog"), 
        e.identify(t.event.userId));
        const s = e._calculate_event_properties(i, null !== (n = t.event.properties) && void 0 !== n ? n : {}, new Date);
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

class gs {
  constructor(e) {
    this._instance = e;
  }
  doPageView(t) {
    var i;
    const n = this._previousPageViewProperties(t);
    return this._currentPath = null !== (i = null == e ? void 0 : e.location.pathname) && void 0 !== i ? i : "", 
    this._instance.scrollManager.resetContext(), this._prevPageviewTimestamp = t, n;
  }
  doPageLeave(e) {
    return this._previousPageViewProperties(e);
  }
  _previousPageViewProperties(e) {
    const t = this._currentPath, i = this._prevPageviewTimestamp, n = this._instance.scrollManager.getContext();
    if (!i) return {};
    let s = {};
    if (n) {
      let {maxScrollHeight: e, lastScrollY: t, maxScrollY: i, maxContentHeight: r, lastContentY: o, maxContentY: a} = n;
      if (!(S(e) || S(t) || S(i) || S(r) || S(o) || S(a))) {
        e = Math.ceil(e), t = Math.ceil(t), i = Math.ceil(i), r = Math.ceil(r), o = Math.ceil(o), 
        a = Math.ceil(a);
        s = {
          $prev_pageview_last_scroll: t,
          $prev_pageview_last_scroll_percentage: e <= 1 ? 1 : Xi(t / e, 0, 1),
          $prev_pageview_max_scroll: i,
          $prev_pageview_max_scroll_percentage: e <= 1 ? 1 : Xi(i / e, 0, 1),
          $prev_pageview_last_content: o,
          $prev_pageview_last_content_percentage: r <= 1 ? 1 : Xi(o / r, 0, 1),
          $prev_pageview_max_content: a,
          $prev_pageview_max_content_percentage: r <= 1 ? 1 : Xi(a / r, 0, 1)
        };
      }
    }
    return t && (s.$prev_pageview_pathname = t), i && (s.$prev_pageview_duration = (e.getTime() - i.getTime()) / 1e3), 
    s;
  }
}

let fs, vs, ms;

!function(e) {
  e.Popover = "popover", e.API = "api", e.Widget = "widget";
}(fs || (fs = {})), function(e) {
  e.Open = "open", e.MultipleChoice = "multiple_choice", e.SingleChoice = "single_choice", 
  e.Rating = "rating", e.Link = "link";
}(vs || (vs = {})), function(e) {
  e.NextQuestion = "next_question", e.End = "end", e.ResponseBased = "response_based", 
  e.SpecificQuestion = "specific_question";
}(ms || (ms = {}));

class ys {
  events={};
  constructor() {
    this.events = {};
  }
  on(e, t) {
    return this.events[e] || (this.events[e] = []), this.events[e].push(t), () => {
      this.events[e] = this.events[e].filter((e => e !== t));
    };
  }
  emit(e, t) {
    for (const i of this.events[e] || []) i(t);
    for (const i of this.events["*"] || []) i(e, t);
  }
}

class bs {
  _debugEventEmitter=new ys;
  constructor(e) {
    this.instance = e, this.actionEvents = new Set, this.actionRegistry = new Set;
  }
  init() {
    var e;
    if (!S(null === (e = this.instance) || void 0 === e ? void 0 : e._addCaptureHook)) {
      var t;
      const e = (e, t) => {
        this.on(e, t);
      };
      null === (t = this.instance) || void 0 === t || t._addCaptureHook(e);
    }
  }
  register(e) {
    var t, i;
    if (!S(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) && (e.forEach((e => {
      var t, i;
      null === (t = this.actionRegistry) || void 0 === t || t.add(e), null === (i = e.steps) || void 0 === i || i.forEach((e => {
        var t;
        null === (t = this.actionEvents) || void 0 === t || t.add((null == e ? void 0 : e.event) || "");
      }));
    })), null !== (i = this.instance) && void 0 !== i && i.autocapture)) {
      var n;
      const t = new Set;
      e.forEach((e => {
        var i;
        null === (i = e.steps) || void 0 === i || i.forEach((e => {
          null != e && e.selector && t.add(null == e ? void 0 : e.selector);
        }));
      })), null === (n = this.instance) || void 0 === n || n.autocapture.setElementSelectors(t);
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
    for (const i of t.steps) if (this.checkStep(e, i)) return !0;
    return !1;
  }
  onAction(e, t) {
    return this._debugEventEmitter.on(e, t);
  }
  checkStep=(e, t) => this.checkStepEvent(e, t) && this.checkStepUrl(e, t) && this.checkStepElement(e, t);
  checkStepEvent=(e, t) => null == t || !t.event || (null == e ? void 0 : e.event) === (null == t ? void 0 : t.event);
  checkStepUrl(e, t) {
    if (null != t && t.url) {
      var i;
      const n = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$current_url;
      if (!n || "string" != typeof n) return !1;
      if (!bs.matchString(n, null == t ? void 0 : t.url, (null == t ? void 0 : t.url_matching) || "contains")) return !1;
    }
    return !0;
  }
  static matchString(t, i, n) {
    switch (n) {
     case "regex":
      return !!e && at(t, i);

     case "exact":
      return i === t;

     case "contains":
      const n = bs.escapeStringRegexp(i).replace(/_/g, ".").replace(/%/g, ".*");
      return at(t, n);

     default:
      return !1;
    }
  }
  static escapeStringRegexp(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  checkStepElement(e, t) {
    if (null != t && t.href || null != t && t.tag_name || null != t && t.text) {
      if (!this.getElementsList(e).some((e => !(null != t && t.href && !bs.matchString(e.href || "", null == t ? void 0 : t.href, (null == t ? void 0 : t.href_matching) || "exact")) && ((null == t || !t.tag_name || e.tag_name === (null == t ? void 0 : t.tag_name)) && !(null != t && t.text && !bs.matchString(e.text || "", null == t ? void 0 : t.text, (null == t ? void 0 : t.text_matching) || "exact") && !bs.matchString(e.$el_text || "", null == t ? void 0 : t.text, (null == t ? void 0 : t.text_matching) || "exact")))))) return !1;
    }
    if (null != t && t.selector) {
      var i;
      const n = null == e || null === (i = e.properties) || void 0 === i ? void 0 : i.$element_selectors;
      if (!n) return !1;
      if (!n.includes(null == t ? void 0 : t.selector)) return !1;
    }
    return !0;
  }
  getElementsList(e) {
    return null == (null == e ? void 0 : e.properties.$elements) ? [] : null == e ? void 0 : e.properties.$elements;
  }
}

class ws {
  static SURVEY_SHOWN_EVENT_NAME="survey shown";
  constructor(e) {
    this.instance = e, this.eventToSurveys = new Map, this.actionToSurveys = new Map;
  }
  register(e) {
    var t;
    S(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) || (this.setupEventBasedSurveys(e), 
    this.setupActionBasedSurveys(e));
  }
  setupActionBasedSurveys(e) {
    const t = e.filter((e => {
      var t, i, n, s;
      return (null === (t = e.conditions) || void 0 === t ? void 0 : t.actions) && (null === (i = e.conditions) || void 0 === i || null === (n = i.actions) || void 0 === n || null === (s = n.values) || void 0 === s ? void 0 : s.length) > 0;
    }));
    if (0 !== t.length) {
      if (null == this.actionMatcher) {
        this.actionMatcher = new bs(this.instance), this.actionMatcher.init();
        const e = e => {
          this.onAction(e);
        };
        this.actionMatcher._addActionHook(e);
      }
      t.forEach((e => {
        var t, i, n, s, r, o, a, l, c, u;
        e.conditions && null !== (t = e.conditions) && void 0 !== t && t.actions && null !== (i = e.conditions) && void 0 !== i && null !== (n = i.actions) && void 0 !== n && n.values && (null === (s = e.conditions) || void 0 === s || null === (r = s.actions) || void 0 === r || null === (o = r.values) || void 0 === o ? void 0 : o.length) > 0 && (null === (a = this.actionMatcher) || void 0 === a || a.register(e.conditions.actions.values), 
        null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c || null === (u = c.values) || void 0 === u || u.forEach((t => {
          if (t && t.name) {
            const i = this.actionToSurveys.get(t.name);
            i && i.push(e.id), this.actionToSurveys.set(t.name, i || [ e.id ]);
          }
        })));
      }));
    }
  }
  setupEventBasedSurveys(e) {
    var t;
    if (0 === e.filter((e => {
      var t, i, n, s;
      return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (n = i.events) || void 0 === n || null === (s = n.values) || void 0 === s ? void 0 : s.length) > 0;
    })).length) return;
    null === (t = this.instance) || void 0 === t || t._addCaptureHook(((e, t) => {
      this.onEvent(e, t);
    })), e.forEach((e => {
      var t, i, n;
      null === (t = e.conditions) || void 0 === t || null === (i = t.events) || void 0 === i || null === (n = i.values) || void 0 === n || n.forEach((t => {
        if (t && t.name) {
          const i = this.eventToSurveys.get(t.name);
          i && i.push(e.id), this.eventToSurveys.set(t.name, i || [ e.id ]);
        }
      }));
    }));
  }
  onEvent(e, t) {
    var i, n;
    const s = (null === (i = this.instance) || void 0 === i || null === (n = i.persistence) || void 0 === n ? void 0 : n.props[Se]) || [];
    if (ws.SURVEY_SHOWN_EVENT_NAME == e && t && s.length > 0) {
      var r;
      const e = null == t || null === (r = t.properties) || void 0 === r ? void 0 : r.$survey_id;
      if (e) {
        const t = s.indexOf(e);
        t >= 0 && (s.splice(t, 1), this._updateActivatedSurveys(s));
      }
    } else this.eventToSurveys.has(e) && this._updateActivatedSurveys(s.concat(this.eventToSurveys.get(e) || []));
  }
  onAction(e) {
    var t, i;
    const n = (null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i ? void 0 : i.props[Se]) || [];
    this.actionToSurveys.has(e) && this._updateActivatedSurveys(n.concat(this.actionToSurveys.get(e) || []));
  }
  _updateActivatedSurveys(e) {
    var t, i;
    null === (t = this.instance) || void 0 === t || null === (i = t.persistence) || void 0 === i || i.register({
      [Se]: [ ...new Set(e) ]
    });
  }
  getSurveys() {
    var e, t;
    const i = null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t ? void 0 : t.props[Se];
    return i || [];
  }
  getEventToSurveys() {
    return this.eventToSurveys;
  }
  _getActionMatcher() {
    return this.actionMatcher;
  }
}

var Ss, Es, ks, xs, Is, Ps, Fs, Rs, Cs = {}, Ts = [], $s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, As = Array.isArray;

function Ms(e, t) {
  for (var i in t) e[i] = t[i];
  return e;
}

function Ls(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}

function Ds(e, t, i, n, s) {
  var r = {
    type: e,
    props: t,
    key: i,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: null == s ? ++ks : s,
    __i: -1,
    __u: 0
  };
  return null == s && null != Es.vnode && Es.vnode(r), r;
}

function Os(e) {
  return e.children;
}

function Ns(e, t) {
  this.props = e, this.context = t;
}

function qs(e, t) {
  if (null == t) return e.__ ? qs(e.__, e.__i + 1) : null;
  for (var i; t < e.__k.length; t++) if (null != (i = e.__k[t]) && null != i.__e) return i.__e;
  return "function" == typeof e.type ? qs(e) : null;
}

function Bs(e) {
  var t, i;
  if (null != (e = e.__) && null != e.__c) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (i = e.__k[t]) && null != i.__e) {
      e.__e = e.__c.base = i.__e;
      break;
    }
    return Bs(e);
  }
}

function Hs(e) {
  (!e.__d && (e.__d = !0) && xs.push(e) && !Us.__r++ || Is !== Es.debounceRendering) && ((Is = Es.debounceRendering) || Ps)(Us);
}

function Us() {
  var e, t, i, n, s, r, o, a, l;
  for (xs.sort(Fs); e = xs.shift(); ) e.__d && (t = xs.length, n = void 0, r = (s = (i = e).__v).__e, 
  a = [], l = [], (o = i.__P) && ((n = Ms({}, s)).__v = s.__v + 1, Es.vnode && Es.vnode(n), 
  Xs(o, n, s, i.__n, void 0 !== o.ownerSVGElement, 32 & s.__u ? [ r ] : null, a, null == r ? qs(s) : r, !!(32 & s.__u), l), 
  n.__.__k[n.__i] = n, Ks(a, n, l), n.__e != r && Bs(n)), xs.length > t && xs.sort(Fs));
  Us.__r = 0;
}

function Ws(e, t, i, n, s, r, o, a, l, c, u) {
  var d, h, _, p, g, f = n && n.__k || Ts, v = t.length;
  for (i.__d = l, zs(i, t, f), l = i.__d, d = 0; d < v; d++) null != (_ = i.__k[d]) && "boolean" != typeof _ && "function" != typeof _ && (h = -1 === _.__i ? Cs : f[_.__i] || Cs, 
  _.__i = d, Xs(e, _, h, s, r, o, a, l, c, u), p = _.__e, _.ref && h.ref != _.ref && (h.ref && er(h.ref, null, _), 
  u.push(_.ref, _.__c || p, _)), null == g && null != p && (g = p), 65536 & _.__u || h.__k === _.__k ? l = Vs(_, l, e) : "function" == typeof _.type && void 0 !== _.__d ? l = _.__d : p && (l = p.nextSibling), 
  _.__d = void 0, _.__u &= -196609);
  i.__d = l, i.__e = g;
}

function zs(e, t, i) {
  var n, s, r, o, a, l = t.length, c = i.length, u = c, d = 0;
  for (e.__k = [], n = 0; n < l; n++) null != (s = e.__k[n] = null == (s = t[n]) || "boolean" == typeof s || "function" == typeof s ? null : "string" == typeof s || "number" == typeof s || "bigint" == typeof s || s.constructor == String ? Ds(null, s, null, null, s) : As(s) ? Ds(Os, {
    children: s
  }, null, null, null) : void 0 === s.constructor && s.__b > 0 ? Ds(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s) ? (s.__ = e, 
  s.__b = e.__b + 1, a = Gs(s, i, o = n + d, u), s.__i = a, r = null, -1 !== a && (u--, 
  (r = i[a]) && (r.__u |= 131072)), null == r || null === r.__v ? (-1 == a && d--, 
  "function" != typeof s.type && (s.__u |= 65536)) : a !== o && (a === o + 1 ? d++ : a > o ? u > l - o ? d += a - o : d-- : d = a < o && a == o - 1 ? a - o : 0, 
  a !== n + d && (s.__u |= 65536))) : (r = i[n]) && null == r.key && r.__e && (r.__e == e.__d && (e.__d = qs(r)), 
  tr(r, r, !1), i[n] = null, u--);
  if (u) for (n = 0; n < c; n++) null != (r = i[n]) && 0 == (131072 & r.__u) && (r.__e == e.__d && (e.__d = qs(r)), 
  tr(r, r));
}

function Vs(e, t, i) {
  var n, s;
  if ("function" == typeof e.type) {
    for (n = e.__k, s = 0; n && s < n.length; s++) n[s] && (n[s].__ = e, t = Vs(n[s], t, i));
    return t;
  }
  return e.__e != t && (i.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}

function Gs(e, t, i, n) {
  var s = e.key, r = e.type, o = i - 1, a = i + 1, l = t[i];
  if (null === l || l && s == l.key && r === l.type) return i;
  if (n > (null != l && 0 == (131072 & l.__u) ? 1 : 0)) for (;o >= 0 || a < t.length; ) {
    if (o >= 0) {
      if ((l = t[o]) && 0 == (131072 & l.__u) && s == l.key && r === l.type) return o;
      o--;
    }
    if (a < t.length) {
      if ((l = t[a]) && 0 == (131072 & l.__u) && s == l.key && r === l.type) return a;
      a++;
    }
  }
  return -1;
}

function js(e, t, i) {
  "-" === t[0] ? e.setProperty(t, null == i ? "" : i) : e[t] = null == i ? "" : "number" != typeof i || $s.test(t) ? i : i + "px";
}

function Qs(e, t, i, n, s) {
  var r;
  e: if ("style" === t) if ("string" == typeof i) e.style.cssText = i; else {
    if ("string" == typeof n && (e.style.cssText = n = ""), n) for (t in n) i && t in i || js(e.style, t, "");
    if (i) for (t in i) n && i[t] === n[t] || js(e.style, t, i[t]);
  } else if ("o" === t[0] && "n" === t[1]) r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), 
  t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), 
  e.l[t + r] = i, i ? n ? i.u = n.u : (i.u = Date.now(), e.addEventListener(t, r ? Ys : Js, r)) : e.removeEventListener(t, r ? Ys : Js, r); else {
    if (s) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s"); else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
      e[t] = null == i ? "" : i;
      break e;
    } catch (e) {}
    "function" == typeof i || (null == i || !1 === i && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, i));
  }
}

function Js(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u) return;
  } else e.t = Date.now();
  return t(Es.event ? Es.event(e) : e);
}

function Ys(e) {
  return this.l[e.type + !0](Es.event ? Es.event(e) : e);
}

function Xs(e, t, i, n, s, r, o, a, l, c) {
  var u, d, h, _, p, g, f, v, m, y, b, w, S, E, k, x = t.type;
  if (void 0 !== t.constructor) return null;
  128 & i.__u && (l = !!(32 & i.__u), r = [ a = t.__e = i.__e ]), (u = Es.__b) && u(t);
  e: if ("function" == typeof x) try {
    if (v = t.props, m = (u = x.contextType) && n[u.__c], y = u ? m ? m.props.value : u.__ : n, 
    i.__c ? f = (d = t.__c = i.__c).__ = d.__E : ("prototype" in x && x.prototype.render ? t.__c = d = new x(v, y) : (t.__c = d = new Ns(v, y), 
    d.constructor = x, d.render = ir), m && m.sub(d), d.props = v, d.state || (d.state = {}), 
    d.context = y, d.__n = n, h = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), 
    null != x.getDerivedStateFromProps && (d.__s == d.state && (d.__s = Ms({}, d.__s)), 
    Ms(d.__s, x.getDerivedStateFromProps(v, d.__s))), _ = d.props, p = d.state, d.__v = t, 
    h) null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), 
    null != d.componentDidMount && d.__h.push(d.componentDidMount); else {
      if (null == x.getDerivedStateFromProps && v !== _ && null != d.componentWillReceiveProps && d.componentWillReceiveProps(v, y), 
      !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(v, d.__s, y) || t.__v === i.__v)) {
        for (t.__v !== i.__v && (d.props = v, d.state = d.__s, d.__d = !1), t.__e = i.__e, 
        t.__k = i.__k, t.__k.forEach((function(e) {
          e && (e.__ = t);
        })), b = 0; b < d._sb.length; b++) d.__h.push(d._sb[b]);
        d._sb = [], d.__h.length && o.push(d);
        break e;
      }
      null != d.componentWillUpdate && d.componentWillUpdate(v, d.__s, y), null != d.componentDidUpdate && d.__h.push((function() {
        d.componentDidUpdate(_, p, g);
      }));
    }
    if (d.context = y, d.props = v, d.__P = e, d.__e = !1, w = Es.__r, S = 0, "prototype" in x && x.prototype.render) {
      for (d.state = d.__s, d.__d = !1, w && w(t), u = d.render(d.props, d.state, d.context), 
      E = 0; E < d._sb.length; E++) d.__h.push(d._sb[E]);
      d._sb = [];
    } else do {
      d.__d = !1, w && w(t), u = d.render(d.props, d.state, d.context), d.state = d.__s;
    } while (d.__d && ++S < 25);
    d.state = d.__s, null != d.getChildContext && (n = Ms(Ms({}, n), d.getChildContext())), 
    h || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(_, p)), 
    Ws(e, As(k = null != u && u.type === Os && null == u.key ? u.props.children : u) ? k : [ k ], t, i, n, s, r, o, a, l, c), 
    d.base = t.__e, t.__u &= -161, d.__h.length && o.push(d), f && (d.__E = d.__ = null);
  } catch (e) {
    t.__v = null, l || null != r ? (t.__e = a, t.__u |= l ? 160 : 32, r[r.indexOf(a)] = null) : (t.__e = i.__e, 
    t.__k = i.__k), Es.__e(e, t, i);
  } else null == r && t.__v === i.__v ? (t.__k = i.__k, t.__e = i.__e) : t.__e = Zs(i.__e, t, i, n, s, r, o, l, c);
  (u = Es.diffed) && u(t);
}

function Ks(e, t, i) {
  t.__d = void 0;
  for (var n = 0; n < i.length; n++) er(i[n], i[++n], i[++n]);
  Es.__c && Es.__c(t, e), e.some((function(t) {
    try {
      e = t.__h, t.__h = [], e.some((function(e) {
        e.call(t);
      }));
    } catch (e) {
      Es.__e(e, t.__v);
    }
  }));
}

function Zs(e, t, i, n, s, r, o, a, l) {
  var c, u, d, h, _, p, g, f = i.props, v = t.props, m = t.type;
  if ("svg" === m && (s = !0), null != r) for (c = 0; c < r.length; c++) if ((_ = r[c]) && "setAttribute" in _ == !!m && (m ? _.localName === m : 3 === _.nodeType)) {
    e = _, r[c] = null;
    break;
  }
  if (null == e) {
    if (null === m) return document.createTextNode(v);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, v.is && v), 
    r = null, a = !1;
  }
  if (null === m) f === v || a && e.data === v || (e.data = v); else {
    if (r = r && Ss.call(e.childNodes), f = i.props || Cs, !a && null != r) for (f = {}, 
    c = 0; c < e.attributes.length; c++) f[(_ = e.attributes[c]).name] = _.value;
    for (c in f) _ = f[c], "children" == c || ("dangerouslySetInnerHTML" == c ? d = _ : "key" === c || c in v || Qs(e, c, null, _, s));
    for (c in v) _ = v[c], "children" == c ? h = _ : "dangerouslySetInnerHTML" == c ? u = _ : "value" == c ? p = _ : "checked" == c ? g = _ : "key" === c || a && "function" != typeof _ || f[c] === _ || Qs(e, c, _, f[c], s);
    if (u) a || d && (u.__html === d.__html || u.__html === e.innerHTML) || (e.innerHTML = u.__html), 
    t.__k = []; else if (d && (e.innerHTML = ""), Ws(e, As(h) ? h : [ h ], t, i, n, s && "foreignObject" !== m, r, o, r ? r[0] : i.__k && qs(i, 0), a, l), 
    null != r) for (c = r.length; c--; ) null != r[c] && Ls(r[c]);
    a || (c = "value", void 0 !== p && (p !== e[c] || "progress" === m && !p || "option" === m && p !== f[c]) && Qs(e, c, p, f[c], !1), 
    c = "checked", void 0 !== g && g !== e[c] && Qs(e, c, g, f[c], !1));
  }
  return e;
}

function er(e, t, i) {
  try {
    "function" == typeof e ? e(t) : e.current = t;
  } catch (e) {
    Es.__e(e, i);
  }
}

function tr(e, t, i) {
  var n, s;
  if (Es.unmount && Es.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || er(n, null, t)), 
  null != (n = e.__c)) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (e) {
      Es.__e(e, t);
    }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k) for (s = 0; s < n.length; s++) n[s] && tr(n[s], t, i || "function" != typeof e.type);
  i || null == e.__e || Ls(e.__e), e.__ = e.__e = e.__d = void 0;
}

function ir(e, t, i) {
  return this.constructor(e, i);
}

Ss = Ts.slice, Es = {
  __e: function(e, t, i, n) {
    for (var s, r, o; t = t.__; ) if ((s = t.__c) && !s.__) try {
      if ((r = s.constructor) && null != r.getDerivedStateFromError && (s.setState(r.getDerivedStateFromError(e)), 
      o = s.__d), null != s.componentDidCatch && (s.componentDidCatch(e, n || {}), o = s.__d), 
      o) return s.__E = s;
    } catch (t) {
      e = t;
    }
    throw e;
  }
}, ks = 0, Ns.prototype.setState = function(e, t) {
  var i;
  i = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Ms({}, this.state), 
  "function" == typeof e && (e = e(Ms({}, i), this.props)), e && Ms(i, e), null != e && this.__v && (t && this._sb.push(t), 
  Hs(this));
}, Ns.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Hs(this));
}, Ns.prototype.render = Os, xs = [], Ps = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, 
Fs = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Us.__r = 0, Rs = 0;

!function(e, t) {
  var i = {
    __c: t = "__cC" + Rs++,
    __: e,
    Consumer: function(e, t) {
      return e.children(t);
    },
    Provider: function(e) {
      var i, n;
      return this.getChildContext || (i = [], (n = {})[t] = this, this.getChildContext = function() {
        return n;
      }, this.shouldComponentUpdate = function(e) {
        this.props.value !== e.value && i.some((function(e) {
          e.__e = !0, Hs(e);
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
  isPopup: !0
});

const nr = "[Surveys]", sr = {
  icontains: t => !!e && e.location.href.toLowerCase().indexOf(t.toLowerCase()) > -1,
  not_icontains: t => !!e && -1 === e.location.href.toLowerCase().indexOf(t.toLowerCase()),
  regex: t => !!e && at(e.location.href, t),
  not_regex: t => !!e && !at(e.location.href, t),
  exact: t => (null == e ? void 0 : e.location.href) === t,
  is_not: t => (null == e ? void 0 : e.location.href) !== t
};

class rr {
  constructor(e) {
    this.instance = e, this._surveyEventReceiver = null;
  }
  afterDecideResponse(e) {
    this._decideServerResponse = !!e.surveys, this.loadIfEnabled();
  }
  reset() {
    localStorage.removeItem("lastSeenSurveyDate");
    const e = (() => {
      const e = [];
      for (let t = 0; t < localStorage.length; t++) {
        const i = localStorage.key(t);
        null != i && i.startsWith("seenSurvey_") && e.push(i);
      }
      return e;
    })();
    e.forEach((e => localStorage.removeItem(e)));
  }
  loadIfEnabled() {
    var e;
    const t = null == h || null === (e = h.__PosthogExtensions__) || void 0 === e ? void 0 : e.generateSurveys;
    var i, n;
    this.instance.config.disable_surveys || !this._decideServerResponse || t || (null == this._surveyEventReceiver && (this._surveyEventReceiver = new ws(this.instance)), 
    null === (i = h.__PosthogExtensions__) || void 0 === i || null === (n = i.loadExternalDependency) || void 0 === n || n.call(i, this.instance, "surveys", (e => {
      var t, i;
      if (e) return T.error(nr, "Could not load surveys script", e);
      this._surveyManager = null === (t = h.__PosthogExtensions__) || void 0 === t || null === (i = t.generateSurveys) || void 0 === i ? void 0 : i.call(t, this.instance);
    })));
  }
  getSurveys(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this.instance.config.disable_surveys) return e([]);
    null == this._surveyEventReceiver && (this._surveyEventReceiver = new ws(this.instance));
    const i = this.instance.get_property(we);
    if (i && !t) return e(i);
    this.instance._send_request({
      url: this.instance.requestRouter.endpointFor("api", `/api/surveys/?token=${this.instance.config.token}`),
      method: "GET",
      transport: "XHR",
      callback: t => {
        var i;
        if (200 !== t.statusCode || !t.json) return e([]);
        const n = t.json.surveys || [], s = n.filter((e => {
          var t, i, n, s, r, o, a, l, c, u, d, h;
          return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (n = i.events) || void 0 === n ? void 0 : n.values) && (null === (s = e.conditions) || void 0 === s || null === (r = s.events) || void 0 === r || null === (o = r.values) || void 0 === o ? void 0 : o.length) > 0 || (null === (a = e.conditions) || void 0 === a ? void 0 : a.actions) && (null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c ? void 0 : c.values) && (null === (u = e.conditions) || void 0 === u || null === (d = u.actions) || void 0 === d || null === (h = d.values) || void 0 === h ? void 0 : h.length) > 0;
        }));
        var r;
        s.length > 0 && (null === (r = this._surveyEventReceiver) || void 0 === r || r.register(s));
        return null === (i = this.instance.persistence) || void 0 === i || i.register({
          [we]: n
        }), e(n);
      }
    });
  }
  getActiveMatchingSurveys(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.getSurveys((t => {
      var i;
      const n = t.filter((e => !(!e.start_date || e.end_date))).filter((e => {
        var t, i, n, s;
        if (!e.conditions) return !0;
        const r = null === (t = e.conditions) || void 0 === t || !t.url || sr[null !== (i = null === (n = e.conditions) || void 0 === n ? void 0 : n.urlMatchType) && void 0 !== i ? i : "icontains"](e.conditions.url), a = null === (s = e.conditions) || void 0 === s || !s.selector || (null == o ? void 0 : o.querySelector(e.conditions.selector));
        return r && a;
      })), s = null === (i = this._surveyEventReceiver) || void 0 === i ? void 0 : i.getSurveys(), r = n.filter((e => {
        var t, i, n, r, o, a, l, c, u, d;
        if (!e.linked_flag_key && !e.targeting_flag_key && !e.internal_targeting_flag_key) return !0;
        const h = !e.linked_flag_key || this.instance.featureFlags.isFeatureEnabled(e.linked_flag_key), _ = !e.targeting_flag_key || this.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key), p = (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (i = e.conditions) || void 0 === i || null === (n = i.events) || void 0 === n ? void 0 : n.values) && (null === (r = e.conditions) || void 0 === r || null === (o = r.events) || void 0 === o ? void 0 : o.values.length) > 0, g = (null === (a = e.conditions) || void 0 === a ? void 0 : a.actions) && (null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c ? void 0 : c.values) && (null === (u = e.conditions) || void 0 === u || null === (d = u.actions) || void 0 === d ? void 0 : d.values.length) > 0, f = !p && !g || (null == s ? void 0 : s.includes(e.id)), v = this._canActivateRepeatedly(e), m = !(e.internal_targeting_flag_key && !v) || this.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key);
        return h && _ && m && f;
      }));
      return e(r);
    }), t);
  }
  getNextSurveyStep(e, t, i) {
    var n;
    const s = e.questions[t], r = t + 1;
    if (null === (n = s.branching) || void 0 === n || !n.type) return t === e.questions.length - 1 ? ms.End : r;
    if (s.branching.type === ms.End) return ms.End;
    if (s.branching.type === ms.SpecificQuestion) {
      if (Number.isInteger(s.branching.index)) return s.branching.index;
    } else if (s.branching.type === ms.ResponseBased) {
      if (s.type === vs.SingleChoice) {
        var o, a;
        const e = s.choices.indexOf(`${i}`);
        if (null !== (o = s.branching) && void 0 !== o && null !== (a = o.responseValues) && void 0 !== a && a.hasOwnProperty(e)) {
          const t = s.branching.responseValues[e];
          return Number.isInteger(t) ? t : t === ms.End ? ms.End : r;
        }
      } else if (s.type === vs.Rating) {
        var l, c;
        if ("number" != typeof i || !Number.isInteger(i)) throw new Error("The response type must be an integer");
        const e = function(e, t) {
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
        if (null !== (l = s.branching) && void 0 !== l && null !== (c = l.responseValues) && void 0 !== c && c.hasOwnProperty(e)) {
          const t = s.branching.responseValues[e];
          return Number.isInteger(t) ? t : t === ms.End ? ms.End : r;
        }
      }
      return r;
    }
    return T.warn(nr, "Falling back to next question index due to unexpected branching type"), 
    r;
  }
  _canActivateRepeatedly(e) {
    var t;
    return I(null === (t = h.__PosthogExtensions__) || void 0 === t ? void 0 : t.canActivateRepeatedly) ? (T.warn(nr, "canActivateRepeatedly is not defined, must init before calling"), 
    !1) : h.__PosthogExtensions__.canActivateRepeatedly(e);
  }
  canRenderSurvey(e) {
    I(this._surveyManager) ? T.warn(nr, "canActivateRepeatedly is not defined, must init before calling") : this.getSurveys((t => {
      const i = t.filter((t => t.id === e))[0];
      this._surveyManager.canRenderSurvey(i);
    }));
  }
  renderSurvey(e, t) {
    I(this._surveyManager) ? T.warn(nr, "canActivateRepeatedly is not defined, must init before calling") : this.getSurveys((i => {
      const n = i.filter((t => t.id === e))[0];
      this._surveyManager.renderSurvey(n, null == o ? void 0 : o.querySelector(t));
    }));
  }
}

class or {
  serverLimits={};
  lastEventRateLimited=!1;
  constructor(e) {
    var t, i;
    this.instance = e, this.captureEventsPerSecond = (null === (t = e.config.rate_limiting) || void 0 === t ? void 0 : t.events_per_second) || 10, 
    this.captureEventsBurstLimit = Math.max((null === (i = e.config.rate_limiting) || void 0 === i ? void 0 : i.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), 
    this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited;
  }
  clientRateLimitContext() {
    var e, t, i;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    const s = (new Date).getTime(), r = null !== (e = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property(Ie)) && void 0 !== e ? e : {
      tokens: this.captureEventsBurstLimit,
      last: s
    };
    r.tokens += (s - r.last) / 1e3 * this.captureEventsPerSecond, r.last = s, r.tokens > this.captureEventsBurstLimit && (r.tokens = this.captureEventsBurstLimit);
    const o = r.tokens < 1;
    return o || n || (r.tokens = Math.max(0, r.tokens - 1)), !o || this.lastEventRateLimited || n || this.instance.capture("$$client_ingestion_warning", {
      $$client_ingestion_warning_message: `posthog-js client rate limited. Config is set to ${this.captureEventsPerSecond} events per second and ${this.captureEventsBurstLimit} events burst limit.`
    }, {
      skip_client_rate_limiting: !0
    }), this.lastEventRateLimited = o, null === (i = this.instance.persistence) || void 0 === i || i.set_property(Ie, r), 
    {
      isRateLimited: o,
      remainingTokens: r.tokens
    };
  }
  isServerRateLimited(e) {
    const t = this.serverLimits[e || "events"] || !1;
    return !1 !== t && (new Date).getTime() < t;
  }
  checkForLimiting=e => {
    const t = e.text;
    if (t && t.length) try {
      const e = JSON.parse(t);
      (e.quota_limited || []).forEach((e => {
        T.info(`[RateLimiter] ${e || "events"} is quota limited.`), this.serverLimits[e] = (new Date).getTime() + 6e4;
      }));
    } catch (e) {
      return void T.warn(`[RateLimiter] could not rate limit - continuing. Error: "${null == e ? void 0 : e.message}"`, {
        text: t
      });
    }
  };
}

const ar = () => ({
  initialPathName: (null == a ? void 0 : a.pathname) || "",
  referringDomain: li.referringDomain(),
  ...li.campaignParams()
});

class lr {
  constructor(e, t, i) {
    this._sessionIdManager = e, this._persistence = t, this._sessionSourceParamGenerator = i || ar, 
    this._sessionIdManager.onSessionId(this._onSessionIdCallback);
  }
  _getStoredProps() {
    return this._persistence.props[xe];
  }
  _onSessionIdCallback=e => {
    const t = this._getStoredProps();
    if (t && t.sessionId === e) return;
    const i = {
      sessionId: e,
      props: this._sessionSourceParamGenerator()
    };
    this._persistence.register({
      [xe]: i
    });
  };
  getSessionProps() {
    var e;
    const t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props;
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

const cr = [ "ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "headlesschrome", "cypress", "Google-HotelAdsVerifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;" ], ur = function(e, t) {
  if (!e) return !1;
  const i = e.toLowerCase();
  return cr.concat(t || []).some((e => {
    const t = e.toLowerCase();
    return -1 !== i.indexOf(t);
  }));
}, dr = function(e, t) {
  if (!e) return !1;
  const i = e.userAgent;
  if (i && ur(i, t)) return !0;
  try {
    const i = null == e ? void 0 : e.userAgentData;
    if (null != i && i.brands && i.brands.some((e => ur(null == e ? void 0 : e.brand, t)))) return !0;
  } catch {}
  return !!e.webdriver;
};

class hr {
  constructor() {
    this.clicks = [];
  }
  isRageClick(e, t, i) {
    const n = this.clicks[this.clicks.length - 1];
    if (n && Math.abs(e - n.x) + Math.abs(t - n.y) < 30 && i - n.timestamp < 1e3) {
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

function _r(e) {
  var t;
  return e.id === Te || !(null === (t = e.closest) || void 0 === t || !t.call(e, "#" + Te));
}

class pr {
  rageclicks=new hr;
  _enabledServerSide=!1;
  _initialized=!1;
  _flushInterval=null;
  constructor(t) {
    var i;
    this.instance = t, this._enabledServerSide = !(null === (i = this.instance.persistence) || void 0 === i || !i.props[te]), 
    null == e || e.addEventListener("beforeunload", (() => {
      this.flush();
    }));
  }
  get flushIntervalMilliseconds() {
    let e = 5e3;
    return b(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds), 
    e;
  }
  get isEnabled() {
    return S(this.instance.config.capture_heatmaps) ? S(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : !1 !== this.instance.config.capture_heatmaps;
  }
  startIfEnabled() {
    if (this.isEnabled) {
      if (this._initialized) return;
      T.info("[heatmaps] starting..."), this._setupListeners(), this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds);
    } else {
      var e;
      clearInterval(null !== (e = this._flushInterval) && void 0 !== e ? e : void 0), 
      this.getAndClearBuffer();
    }
  }
  afterDecideResponse(e) {
    const t = !!e.heatmaps;
    this.instance.persistence && this.instance.persistence.register({
      [te]: t
    }), this._enabledServerSide = t, this.startIfEnabled();
  }
  getAndClearBuffer() {
    const e = this.buffer;
    return this.buffer = void 0, e;
  }
  _setupListeners() {
    e && o && (G(o, "click", (t => this._onClick(t || (null == e ? void 0 : e.event))), !1, !0), 
    G(o, "mousemove", (t => this._onMouseMove(t || (null == e ? void 0 : e.event))), !1, !0), 
    this._initialized = !0);
  }
  _getProperties(t, i) {
    const n = this.instance.scrollManager.scrollY(), s = this.instance.scrollManager.scrollX(), r = this.instance.scrollManager.scrollElement(), o = function(t, i, n) {
      let s = t;
      for (;s && wi(s) && !Si(s, "body"); ) {
        if (s === n) return !1;
        if (N(i, null == e ? void 0 : e.getComputedStyle(s).position)) return !0;
        s = Ii(s);
      }
      return !1;
    }(bi(t), [ "fixed", "sticky" ], r);
    return {
      x: t.clientX + (o ? 0 : s),
      y: t.clientY + (o ? 0 : n),
      target_fixed: o,
      type: i
    };
  }
  _onClick(e) {
    var t;
    if (_r(e.target)) return;
    const i = this._getProperties(e, "click");
    null !== (t = this.rageclicks) && void 0 !== t && t.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._capture({
      ...i,
      type: "rageclick"
    }), this._capture(i);
  }
  _onMouseMove(e) {
    _r(e.target) || (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
      this._capture(this._getProperties(e, "mousemove"));
    }), 500));
  }
  _capture(t) {
    if (!e) return;
    const i = e.location.href;
    this.buffer = this.buffer || {}, this.buffer[i] || (this.buffer[i] = []), this.buffer[i].push(t);
  }
  flush() {
    this.buffer && !w(this.buffer) && this.instance.capture("$$heatmap", {
      $heatmap_data: this.getAndClearBuffer()
    });
  }
}

class gr {
  constructor(e) {
    this.instance = e;
  }
  getContext() {
    return this.context;
  }
  resetContext() {
    const e = this.context;
    return setTimeout(this._updateScrollData, 0), e;
  }
  _updateScrollData=() => {
    var e, t, i, n;
    this.context || (this.context = {});
    const s = this.scrollElement(), r = this.scrollY(), o = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0, a = r + ((null == s ? void 0 : s.clientHeight) || 0), l = (null == s ? void 0 : s.scrollHeight) || 0;
    this.context.lastScrollY = Math.ceil(r), this.context.maxScrollY = Math.max(r, null !== (e = this.context.maxScrollY) && void 0 !== e ? e : 0), 
    this.context.maxScrollHeight = Math.max(o, null !== (t = this.context.maxScrollHeight) && void 0 !== t ? t : 0), 
    this.context.lastContentY = a, this.context.maxContentY = Math.max(a, null !== (i = this.context.maxContentY) && void 0 !== i ? i : 0), 
    this.context.maxContentHeight = Math.max(l, null !== (n = this.context.maxContentHeight) && void 0 !== n ? n : 0);
  };
  startMeasuringScrollPosition() {
    null == e || e.addEventListener("scroll", this._updateScrollData, !0), null == e || e.addEventListener("scrollend", this._updateScrollData, !0), 
    null == e || e.addEventListener("resize", this._updateScrollData);
  }
  scrollElement() {
    if (!this.instance.config.scroll_root_selector) return null == e ? void 0 : e.document.documentElement;
    {
      const t = m(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [ this.instance.config.scroll_root_selector ];
      for (const i of t) {
        const t = null == e ? void 0 : e.document.querySelector(i);
        if (t) return t;
      }
    }
  }
  scrollY() {
    if (this.instance.config.scroll_root_selector) {
      const e = this.scrollElement();
      return e && e.scrollTop || 0;
    }
    return e && (e.scrollY || e.pageYOffset || e.document.documentElement.scrollTop) || 0;
  }
  scrollX() {
    if (this.instance.config.scroll_root_selector) {
      const e = this.scrollElement();
      return e && e.scrollLeft || 0;
    }
    return e && (e.scrollX || e.pageXOffset || e.document.documentElement.scrollLeft) || 0;
  }
}

const fr = "$copy_autocapture";

function vr(e, t) {
  return t.length > e ? t.slice(0, e) + "..." : t;
}

function mr(e) {
  if (e.previousElementSibling) return e.previousElementSibling;
  let t = e;
  do {
    t = t.previousSibling;
  } while (t && !wi(t));
  return t;
}

function yr(e, t, i, n) {
  const s = e.tagName.toLowerCase(), r = {
    tag_name: s
  };
  xi.indexOf(s) > -1 && !i && ("a" === s.toLowerCase() || "button" === s.toLowerCase() ? r.$el_text = vr(1024, Oi(e)) : r.$el_text = vr(1024, yi(e)));
  const o = vi(e);
  o.length > 0 && (r.classes = o.filter((function(e) {
    return "" !== e;
  }))), D(e.attributes, (function(i) {
    var s;
    if ((!Ri(e) || -1 !== [ "name", "id", "class", "aria-label" ].indexOf(i.name)) && ((null == n || !n.includes(i.name)) && !t && Di(i.value) && (s = i.name, 
    !E(s) || "_ngcontent" !== s.substring(0, 10) && "_nghost" !== s.substring(0, 7)))) {
      let e = i.value;
      "class" === i.name && (e = gi(e).join(" ")), r["attr__" + i.name] = vr(1024, e);
    }
  }));
  let a = 1, l = 1, c = e;
  for (;c = mr(c); ) a++, c.tagName === e.tagName && l++;
  return r.nth_child = a, r.nth_of_type = l, r;
}

function br(t, i) {
  var n, s;
  let {e: r, maskAllElementAttributes: o, maskAllText: a, elementAttributeIgnoreList: l, elementsChainAsString: c} = i;
  const u = [ t ];
  let d = t;
  for (;d.parentNode && !Si(d, "body"); ) ki(d.parentNode) ? (u.push(d.parentNode.host), 
  d = d.parentNode.host) : (u.push(d.parentNode), d = d.parentNode);
  const h = [], _ = {};
  let p, g = !1, f = !1;
  if (D(u, (e => {
    const t = Fi(e);
    "a" === e.tagName.toLowerCase() && (g = e.getAttribute("href"), g = t && g && Di(g) && g);
    N(vi(e), "ph-no-capture") && (f = !0), h.push(yr(e, o, a, l));
    const i = function(e) {
      if (!Fi(e)) return {};
      const t = {};
      return D(e.attributes, (function(e) {
        if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
          const i = e.name.replace("data-ph-capture-attribute-", ""), n = e.value;
          i && n && Di(n) && (t[i] = n);
        }
      })), t;
    }(e);
    O(_, i);
  })), f) return {
    props: {},
    explicitNoCapture: f
  };
  if (a || ("a" === t.tagName.toLowerCase() || "button" === t.tagName.toLowerCase() ? h[0].$el_text = Oi(t) : h[0].$el_text = yi(t)), 
  g) {
    var v, m;
    h[0].attr__href = g;
    const t = null === (v = ot(g)) || void 0 === v ? void 0 : v.host, i = null == e || null === (m = e.location) || void 0 === m ? void 0 : m.host;
    t && i && t !== i && (p = g);
  }
  return {
    props: O({
      $event_type: r.type,
      $ce_version: 1
    }, c ? {
      $elements_chain: qi(h)
    } : {
      $elements: h
    }, null !== (n = h[0]) && void 0 !== n && n.$el_text ? {
      $el_text: null === (s = h[0]) || void 0 === s ? void 0 : s.$el_text
    } : {}, p && "click" === r.type ? {
      $external_click_url: p
    } : {}, _)
  };
}

class wr {
  _initialized=!1;
  _isDisabledServerSide=null;
  rageclicks=new hr;
  _elementsChainAsString=!1;
  constructor(e) {
    this.instance = e, this._elementSelectors = null;
  }
  get config() {
    var e, t;
    const i = b(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
    return i.url_allowlist = null === (e = i.url_allowlist) || void 0 === e ? void 0 : e.map((e => new RegExp(e))), 
    i.url_ignorelist = null === (t = i.url_ignorelist) || void 0 === t ? void 0 : t.map((e => new RegExp(e))), 
    i;
  }
  _addDomEventHandlers() {
    if (!this.isBrowserSupported()) return void T.info("Disabling Automatic Event Collection because this browser is not supported");
    if (!e || !o) return;
    const t = t => {
      t = t || (null == e ? void 0 : e.event);
      try {
        this._captureEvent(t);
      } catch (e) {
        T.error("Failed to capture event", e);
      }
    }, i = t => {
      t = t || (null == e ? void 0 : e.event), this._captureEvent(t, fr);
    };
    G(o, "submit", t, !1, !0), G(o, "change", t, !1, !0), G(o, "click", t, !1, !0), 
    this.config.capture_copied_text && (G(o, "copy", i, !1, !0), G(o, "cut", i, !1, !0));
  }
  startIfEnabled() {
    this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0);
  }
  afterDecideResponse(e) {
    e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), 
    this.instance.persistence && this.instance.persistence.register({
      [ee]: !!e.autocapture_opt_out
    }), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled();
  }
  setElementSelectors(e) {
    this._elementSelectors = e;
  }
  getElementSelectors(e) {
    var t;
    const i = [];
    return null === (t = this._elementSelectors) || void 0 === t || t.forEach((t => {
      const n = null == o ? void 0 : o.querySelectorAll(t);
      null == n || n.forEach((n => {
        e === n && i.push(t);
      }));
    })), i;
  }
  get isEnabled() {
    var e, t;
    const i = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[ee], n = this._isDisabledServerSide;
    if (x(n) && !F(i) && !this.instance.config.advanced_disable_decide) return !1;
    const s = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!i;
    return !!this.instance.config.autocapture && !s;
  }
  _captureEvent(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
    if (!this.isEnabled) return;
    let n = bi(t);
    var s;
    (Ei(n) && (n = n.parentNode || null), "$autocapture" === i && "click" === t.type && t instanceof MouseEvent) && (this.instance.config.rageclick && null !== (s = this.rageclicks) && void 0 !== s && s.isRageClick(t.clientX, t.clientY, (new Date).getTime()) && this._captureEvent(t, "$rageclick"));
    const r = i === fr;
    if (n && Pi(n, t, this.config, r, r ? [ "copy", "cut" ] : void 0)) {
      const {props: s, explicitNoCapture: r} = br(n, {
        e: t,
        maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
        maskAllText: this.instance.config.mask_all_text,
        elementAttributeIgnoreList: this.config.element_attribute_ignorelist,
        elementsChainAsString: this._elementsChainAsString
      });
      if (r) return !1;
      const a = this.getElementSelectors(n);
      if (a && a.length > 0 && (s.$element_selectors = a), i === fr) {
        var o;
        const i = mi(null == e || null === (o = e.getSelection()) || void 0 === o ? void 0 : o.toString()), n = t.type || "clipboard";
        if (!i) return !1;
        s.$selected_content = i, s.$copy_type = n;
      }
      return this.instance.capture(i, s), !0;
    }
  }
  isBrowserSupported() {
    return y(null == o ? void 0 : o.querySelectorAll);
  }
}

class Sr {
  _restoreXHRPatch=void 0;
  _restoreFetchPatch=void 0;
  constructor(e) {
    this.instance = e;
  }
  _loadScript(e) {
    var t, i, n;
    null !== (t = h.__PosthogExtensions__) && void 0 !== t && t.tracingHeadersPatchFns && e(), 
    null === (i = h.__PosthogExtensions__) || void 0 === i || null === (n = i.loadExternalDependency) || void 0 === n || n.call(i, this.instance, "tracing-headers", (t => {
      if (t) return T.error("[TRACING-HEADERS] failed to load script", t);
      e();
    }));
  }
  startIfEnabledOrStop() {
    var e, t;
    this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e = this._restoreXHRPatch) || void 0 === e || e.call(this), 
    null === (t = this._restoreFetchPatch) || void 0 === t || t.call(this), this._restoreXHRPatch = void 0, 
    this._restoreFetchPatch = void 0);
  }
  _startCapturing=() => {
    var e, t, i, n;
    S(this._restoreXHRPatch) && (null === (e = h.__PosthogExtensions__) || void 0 === e || null === (t = e.tracingHeadersPatchFns) || void 0 === t || t._patchXHR(this.instance.sessionManager));
    S(this._restoreFetchPatch) && (null === (i = h.__PosthogExtensions__) || void 0 === i || null === (n = i.tracingHeadersPatchFns) || void 0 === n || n._patchFetch(this.instance.sessionManager));
  };
}

let Er;

!function(e) {
  e[e.PENDING = -1] = "PENDING", e[e.DENIED = 0] = "DENIED", e[e.GRANTED = 1] = "GRANTED";
}(Er || (Er = {}));

class kr {
  constructor(e) {
    this.instance = e;
  }
  get config() {
    return this.instance.config;
  }
  get consent() {
    return this.getDnt() ? Er.DENIED : this.storedConsent;
  }
  isOptedOut() {
    return this.consent === Er.DENIED || this.consent === Er.PENDING && this.config.opt_out_capturing_by_default;
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
    const {token: e, opt_out_capturing_cookie_prefix: t} = this.instance.config;
    return (t || "__ph_opt_in_out_") + e;
  }
  get storedConsent() {
    const e = this.storage.get(this.storageKey);
    return "1" === e ? Er.GRANTED : "0" === e ? Er.DENIED : Er.PENDING;
  }
  get storage() {
    if (!this._storage) {
      const e = this.config.opt_out_capturing_persistence_type;
      this._storage = "localStorage" === e ? Ke : Ye;
      const t = "localStorage" === e ? Ye : Ke;
      t.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t.get(this.storageKey)), 
      t.remove(this.storageKey, this.config.cross_subdomain_cookie));
    }
    return this._storage;
  }
  getDnt() {
    return !!this.config.respect_dnt && !!Q([ null == r ? void 0 : r.doNotTrack, null == r ? void 0 : r.msDoNotTrack, h.doNotTrack ], (e => N([ !0, 1, "1", "yes" ], e)));
  }
}

const xr = "[Exception Autocapture]";

class Ir {
  originalOnUnhandledRejectionHandler=void 0;
  constructor(e) {
    var t;
    this.instance = e, this.remoteEnabled = !(null === (t = this.instance.persistence) || void 0 === t || !t.props[ie]), 
    this.startIfEnabled();
  }
  get isEnabled() {
    var e;
    return null !== (e = this.remoteEnabled) && void 0 !== e && e;
  }
  get isCapturing() {
    var t;
    return !(null == e || null === (t = e.onerror) || void 0 === t || !t.__POSTHOG_INSTRUMENTED__);
  }
  get hasHandlers() {
    return this.originalOnUnhandledRejectionHandler || this.unwrapOnError;
  }
  startIfEnabled() {
    this.isEnabled && !this.isCapturing && (T.info(xr + " enabled, starting..."), this.loadScript(this.startCapturing));
  }
  loadScript(e) {
    var t, i;
    this.hasHandlers && e(), null === (t = h.__PosthogExtensions__) || void 0 === t || null === (i = t.loadExternalDependency) || void 0 === i || i.call(t, this.instance, "exception-autocapture", (t => {
      if (t) return T.error(xr + " failed to load script", t);
      e();
    }));
  }
  startCapturing=() => {
    var t, i, n, s;
    if (!e || !this.isEnabled || this.hasHandlers || this.isCapturing) return;
    const r = null === (t = h.__PosthogExtensions__) || void 0 === t || null === (i = t.errorWrappingFunctions) || void 0 === i ? void 0 : i.wrapOnError, o = null === (n = h.__PosthogExtensions__) || void 0 === n || null === (s = n.errorWrappingFunctions) || void 0 === s ? void 0 : s.wrapUnhandledRejection;
    if (r && o) try {
      this.unwrapOnError = r(this.captureException.bind(this)), this.unwrapUnhandledRejection = o(this.captureException.bind(this));
    } catch (e) {
      T.error(xr + " failed to start", e), this.stopCapturing();
    } else T.error(xr + " failed to load error wrapping functions - cannot start");
  };
  stopCapturing() {
    var e, t;
    null === (e = this.unwrapOnError) || void 0 === e || e.call(this), null === (t = this.unwrapUnhandledRejection) || void 0 === t || t.call(this);
  }
  afterDecideResponse(e) {
    const t = e.autocaptureExceptions;
    this.remoteEnabled = !!t || !1, this.instance.persistence && this.instance.persistence.register({
      [ie]: this.remoteEnabled
    }), this.startIfEnabled();
  }
  captureException(e) {
    const t = this.instance.requestRouter.endpointFor("ui");
    e.$exception_personURL = `${t}/project/${this.instance.config.token}/person/${this.instance.get_distinct_id()}`, 
    this.instance.exceptions.sendExceptionEvent(e);
  }
}

const Pr = 9e5, Fr = "[Web Vitals]";

class Rr {
  _enabledServerSide=!1;
  _initialized=!1;
  buffer={
    url: void 0,
    metrics: [],
    firstMetricTimestamp: void 0
  };
  constructor(e) {
    var t;
    this.instance = e, this._enabledServerSide = !(null === (t = this.instance.persistence) || void 0 === t || !t.props[se]), 
    this.startIfEnabled();
  }
  get allowedMetrics() {
    var e, t;
    const i = b(this.instance.config.capture_performance) ? null === (e = this.instance.config.capture_performance) || void 0 === e ? void 0 : e.web_vitals_allowed_metrics : void 0;
    return S(i) ? (null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.props[oe]) || [ "CLS", "FCP", "INP", "LCP" ] : i;
  }
  get flushToCaptureTimeoutMs() {
    return (b(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3;
  }
  get _maxAllowedValue() {
    const e = b(this.instance.config.capture_performance) && P(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : Pr;
    return 0 < e && e <= 6e4 ? Pr : e;
  }
  get isEnabled() {
    const e = b(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
    return F(e) ? e : this._enabledServerSide;
  }
  startIfEnabled() {
    this.isEnabled && !this._initialized && (T.info(Fr + " enabled, starting..."), this.loadScript(this._startCapturing));
  }
  afterDecideResponse(e) {
    const t = b(e.capturePerformance) && !!e.capturePerformance.web_vitals, i = b(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
    this.instance.persistence && (this.instance.persistence.register({
      [se]: t
    }), this.instance.persistence.register({
      [oe]: i
    })), this._enabledServerSide = t, this.startIfEnabled();
  }
  loadScript(e) {
    var t, i, n;
    null !== (t = h.__PosthogExtensions__) && void 0 !== t && t.postHogWebVitalsCallbacks && e(), 
    null === (i = h.__PosthogExtensions__) || void 0 === i || null === (n = i.loadExternalDependency) || void 0 === n || n.call(i, this.instance, "web-vitals", (t => {
      t ? T.error(Fr + " failed to load script", t) : e();
    }));
  }
  _currentURL() {
    const t = e ? e.location.href : void 0;
    return t || T.error(Fr + "Could not determine current URL"), t;
  }
  _flushToCapture=() => {
    clearTimeout(this._delayedFlushTimer), 0 !== this.buffer.metrics.length && (this.instance.capture("$web_vitals", this.buffer.metrics.reduce(((e, t) => ({
      ...e,
      [`$web_vitals_${t.name}_event`]: {
        ...t
      },
      [`$web_vitals_${t.name}_value`]: t.value
    })), {})), this.buffer = {
      url: void 0,
      metrics: [],
      firstMetricTimestamp: void 0
    });
  };
  _addToBuffer=e => {
    var t;
    const i = null === (t = this.instance.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0);
    if (S(i)) return void T.error(Fr + "Could not read session ID. Dropping metrics!");
    this.buffer = this.buffer || {
      url: void 0,
      metrics: [],
      firstMetricTimestamp: void 0
    };
    const n = this._currentURL();
    if (S(n)) return;
    if (I(null == e ? void 0 : e.name) || I(null == e ? void 0 : e.value)) return void T.error(Fr + "Invalid metric received", e);
    if (this._maxAllowedValue && e.value >= this._maxAllowedValue) return void T.error(Fr + "Ignoring metric with value >= " + this._maxAllowedValue, e);
    this.buffer.url !== n && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), 
    S(this.buffer.url) && (this.buffer.url = n), this.buffer.firstMetricTimestamp = S(this.buffer.firstMetricTimestamp) ? Date.now() : this.buffer.firstMetricTimestamp, 
    e.attribution && e.attribution.interactionTargetElement && (e.attribution.interactionTargetElement = void 0), 
    this.buffer.metrics.push({
      ...e,
      $current_url: n,
      $session_id: i.sessionId,
      $window_id: i.windowId,
      timestamp: Date.now()
    }), this.buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture();
  };
  _startCapturing=() => {
    let e, t, i, n;
    const s = h.__PosthogExtensions__;
    S(s) || S(s.postHogWebVitalsCallbacks) || ({onLCP: e, onCLS: t, onFCP: i, onINP: n} = s.postHogWebVitalsCallbacks), 
    e && t && i && n ? (this.allowedMetrics.indexOf("LCP") > -1 && e(this._addToBuffer.bind(this)), 
    this.allowedMetrics.indexOf("CLS") > -1 && t(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && i(this._addToBuffer.bind(this)), 
    this.allowedMetrics.indexOf("INP") > -1 && n(this._addToBuffer.bind(this)), this._initialized = !0) : T.error(Fr + "web vitals callbacks not loaded - not starting");
  };
}

const Cr = {
  icontains: (t, i) => !!e && i.href.toLowerCase().indexOf(t.toLowerCase()) > -1,
  not_icontains: (t, i) => !!e && -1 === i.href.toLowerCase().indexOf(t.toLowerCase()),
  regex: (t, i) => !!e && at(i.href, t),
  not_regex: (t, i) => !!e && !at(i.href, t),
  exact: (e, t) => t.href === e,
  is_not: (e, t) => t.href !== e
};

class Tr {
  constructor(e) {
    this.instance = e;
    const t = e => {
      this.applyFeatureFlagChanges(e);
    };
    this.instance.onFeatureFlags && this.instance.onFeatureFlags(t), this._flagToExperiments = new Map;
  }
  applyFeatureFlagChanges(e) {
    I(this._flagToExperiments) || this.instance.config.disable_web_experiments || (Tr.logInfo("applying feature flags", e), 
    e.forEach((e => {
      var t;
      if (this._flagToExperiments && null !== (t = this._flagToExperiments) && void 0 !== t && t.has(e)) {
        var i;
        const t = this.instance.getFeatureFlag(e), n = null === (i = this._flagToExperiments) || void 0 === i ? void 0 : i.get(e);
        t && null != n && n.variants[t] && this.applyTransforms(n.name, t, n.variants[t].transforms);
      }
    })));
  }
  afterDecideResponse(e) {
    this._is_bot() ? Tr.logInfo("Refusing to render web experiment since the viewer is a likely bot") : (this._featureFlags = e.featureFlags, 
    this.loadIfEnabled(), this.previewWebExperiment());
  }
  previewWebExperiment() {
    const e = Tr.getWindowLocation();
    if (null != e && e.search) {
      const t = ct(null == e ? void 0 : e.search, "__experiment_id"), i = ct(null == e ? void 0 : e.search, "__experiment_variant");
      t && i && (Tr.logInfo(`previewing web experiments ${t} && ${i}`), this.getWebExperiments((e => {
        this.showPreviewWebExperiment(parseInt(t), i, e);
      }), !1, !0));
    }
  }
  loadIfEnabled() {
    this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
  }
  getWebExperimentsAndEvaluateDisplayLogic=(() => {
    var e = this;
    return function() {
      let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e.getWebExperiments((t => {
        Tr.logInfo("retrieved web experiments from the server"), e._flagToExperiments = new Map, 
        t.forEach((t => {
          if (t.feature_flag_key && e._featureFlags && e._featureFlags[t.feature_flag_key]) {
            var i;
            if (e._flagToExperiments) Tr.logInfo("setting flag key ", t.feature_flag_key, " to web experiment ", t), 
            null === (i = e._flagToExperiments) || void 0 === i || i.set(t.feature_flag_key, t);
            const n = e._featureFlags[t.feature_flag_key];
            n && t.variants[n] && e.applyTransforms(t.name, n, t.variants[n].transforms);
          } else if (t.variants) for (const i in t.variants) {
            const n = t.variants[i];
            Tr.matchesTestVariant(n) && e.applyTransforms(t.name, i, n.transforms);
          }
        }));
      }), t);
    };
  })();
  getWebExperiments(e, t, i) {
    if (this.instance.config.disable_web_experiments && !i) return e([]);
    const n = this.instance.get_property("$web_experiments");
    if (n && !t) return e(n);
    this.instance._send_request({
      url: this.instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this.instance.config.token}`),
      method: "GET",
      transport: "XHR",
      callback: t => {
        if (200 !== t.statusCode || !t.json) return e([]);
        const i = t.json.experiments || [];
        return e(i);
      }
    });
  }
  showPreviewWebExperiment(e, t, i) {
    const n = i.filter((t => t.id === e));
    n && n.length > 0 && (Tr.logInfo(`Previewing web experiment [${n[0].name}] with variant [${t}]`), 
    this.applyTransforms(n[0].name, t, n[0].variants[t].transforms, !0));
  }
  static matchesTestVariant(e) {
    return !I(e.conditions) && (Tr.matchUrlConditions(e) && Tr.matchUTMConditions(e));
  }
  static matchUrlConditions(e) {
    var t;
    if (I(e.conditions) || I(null === (t = e.conditions) || void 0 === t ? void 0 : t.url)) return !0;
    const i = Tr.getWindowLocation();
    if (i) {
      var n, s, r;
      return null === (n = e.conditions) || void 0 === n || !n.url || Cr[null !== (s = null === (r = e.conditions) || void 0 === r ? void 0 : r.urlMatchType) && void 0 !== s ? s : "icontains"](e.conditions.url, i);
    }
    return !1;
  }
  static getWindowLocation() {
    return null == e ? void 0 : e.location;
  }
  static matchUTMConditions(e) {
    var t;
    if (I(e.conditions) || I(null === (t = e.conditions) || void 0 === t ? void 0 : t.utm)) return !0;
    const i = li.campaignParams();
    if (i.utm_source) {
      var n, s, r, o, a, l, c, u, d, h, _, p, g, f, v, m;
      const t = null === (n = e.conditions) || void 0 === n || null === (s = n.utm) || void 0 === s || !s.utm_campaign || (null === (r = e.conditions) || void 0 === r || null === (o = r.utm) || void 0 === o ? void 0 : o.utm_campaign) == i.utm_campaign, y = null === (a = e.conditions) || void 0 === a || null === (l = a.utm) || void 0 === l || !l.utm_source || (null === (c = e.conditions) || void 0 === c || null === (u = c.utm) || void 0 === u ? void 0 : u.utm_source) == i.utm_source, b = null === (d = e.conditions) || void 0 === d || null === (h = d.utm) || void 0 === h || !h.utm_medium || (null === (_ = e.conditions) || void 0 === _ || null === (p = _.utm) || void 0 === p ? void 0 : p.utm_medium) == i.utm_medium, w = null === (g = e.conditions) || void 0 === g || null === (f = g.utm) || void 0 === f || !f.utm_term || (null === (v = e.conditions) || void 0 === v || null === (m = v.utm) || void 0 === m ? void 0 : m.utm_term) == i.utm_term;
      return t && b && w && y;
    }
    return !1;
  }
  static logInfo(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
    T.info(`[WebExperiments] ${e}`, i);
  }
  applyTransforms(e, t, i, n) {
    var s;
    this._is_bot() ? Tr.logInfo("Refusing to render web experiment since the viewer is a likely bot") : "control" !== t ? i.forEach((i => {
      if (i.selector) {
        var s;
        Tr.logInfo(`applying transform of variant ${t} for experiment ${e} `, i);
        let o = 0;
        const a = null === (s = document) || void 0 === s ? void 0 : s.querySelectorAll(i.selector);
        var r;
        if (null == a || a.forEach((e => {
          const t = e;
          o += 1, i.attributes && i.attributes.forEach((e => {
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
        })), this.instance && this.instance.capture) this.instance.capture("$web_experiment_applied", {
          $web_experiment_name: e,
          $web_experiment_variant: t,
          $web_experiment_preview: n,
          $web_experiment_document_url: null === (r = Tr.getWindowLocation()) || void 0 === r ? void 0 : r.href,
          $web_experiment_elements_modified: o
        });
      }
    })) : (Tr.logInfo("Control variants leave the page unmodified."), this.instance && this.instance.capture && this.instance.capture("$web_experiment_applied", {
      $web_experiment_name: e,
      $web_experiment_preview: n,
      $web_experiment_variant: t,
      $web_experiment_document_url: null === (s = Tr.getWindowLocation()) || void 0 === s ? void 0 : s.href,
      $web_experiment_elements_modified: 0
    }));
  }
  _is_bot() {
    return r && this.instance ? dr(r, this.instance.config.custom_blocked_useragents) : void 0;
  }
}

const $r = "/e/";

class Ar {
  constructor(e) {
    var t;
    this.instance = e, this._endpointSuffix = (null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.props[ne]) || $r;
  }
  get endpoint() {
    return this.instance.requestRouter.endpointFor("api", this._endpointSuffix);
  }
  afterDecideResponse(e) {
    const t = e.autocaptureExceptions;
    this._endpointSuffix = b(t) && t.endpoint || $r, this.instance.persistence && this.instance.persistence.register({
      [ne]: this._endpointSuffix
    });
  }
  sendExceptionEvent(e) {
    this.instance.capture("$exception", e, {
      _noTruncate: !0,
      _batchKey: "exceptionEvent",
      _url: this.endpoint
    });
  }
}

const Mr = "[Dead Clicks]";

class Lr {
  get lazyLoadedDeadClicksAutocapture() {
    return this._lazyLoadedDeadClicksAutocapture;
  }
  constructor(e) {
    this.instance = e, this.startIfEnabled();
  }
  get isRemoteEnabled() {
    var e;
    return !(null === (e = this.instance.persistence) || void 0 === e || !e.get_property(re));
  }
  get isEnabled() {
    const e = this.instance.config.capture_dead_clicks;
    return F(e) ? e : this.isRemoteEnabled;
  }
  afterDecideResponse(e) {
    this.instance.persistence && this.instance.persistence.register({
      [re]: null == e ? void 0 : e.captureDeadClicks
    }), this.startIfEnabled();
  }
  startIfEnabled() {
    this.isEnabled && this.loadScript(this.start.bind(this));
  }
  loadScript(e) {
    var t, i, n;
    null !== (t = h.__PosthogExtensions__) && void 0 !== t && t.initDeadClicksAutocapture && e(), 
    null === (i = h.__PosthogExtensions__) || void 0 === i || null === (n = i.loadExternalDependency) || void 0 === n || n.call(i, this.instance, "dead-clicks-autocapture", (t => {
      t ? T.error(Mr + " failed to load script", t) : e();
    }));
  }
  start() {
    var e;
    o ? !this._lazyLoadedDeadClicksAutocapture && null !== (e = h.__PosthogExtensions__) && void 0 !== e && e.initDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture = h.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, b(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : void 0), 
    this._lazyLoadedDeadClicksAutocapture.start(o), T.info(`${Mr} starting...`)) : T.error(Mr + " `document` not found. Cannot start.");
  }
  stop() {
    this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), 
    this._lazyLoadedDeadClicksAutocapture = void 0, T.info(`${Mr} stopping...`));
  }
}

const Dr = {}, Or = () => {}, Nr = "posthog";

let qr = !Kn && -1 === (null == d ? void 0 : d.indexOf("MSIE")) && -1 === (null == d ? void 0 : d.indexOf("Mozilla"));

const Br = () => {
  var t;
  return {
    api_host: "https://us.i.posthog.com",
    ui_host: null,
    token: "",
    autocapture: !0,
    rageclick: !0,
    cross_subdomain_cookie: j(null == o ? void 0 : o.location),
    persistence: "localStorage+cookie",
    persistence_name: "",
    loaded: Or,
    store_google: !0,
    custom_campaign_params: [],
    custom_blocked_useragents: [],
    save_referrer: !0,
    capture_pageview: !0,
    capture_pageleave: "if_capture_pageview",
    debug: a && E(null == a ? void 0 : a.search) && -1 !== a.search.indexOf("__posthog_debug=true") || !1,
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
    on_request_error: e => {
      const t = "Bad HTTP status: " + e.statusCode + " " + e.text;
      T.error(t);
    },
    get_device_id: e => e,
    _onCapture: Or,
    capture_performance: void 0,
    name: "posthog",
    bootstrap: {},
    disable_compression: !1,
    session_idle_timeout_seconds: 1800,
    person_profiles: "identified_only",
    __add_tracing_headers: !1
  };
}, Hr = e => {
  const t = {};
  S(e.process_person) || (t.person_profiles = e.process_person), S(e.xhr_headers) || (t.request_headers = e.xhr_headers), 
  S(e.cookie_name) || (t.persistence_name = e.cookie_name), S(e.disable_cookie) || (t.disable_persistence = e.disable_cookie);
  const i = O({}, t, e);
  return m(e.property_blacklist) && (S(e.property_denylist) ? i.property_denylist = e.property_blacklist : m(e.property_denylist) ? i.property_denylist = [ ...e.property_blacklist, ...e.property_denylist ] : T.error("Invalid value for property_denylist config: " + e.property_denylist)), 
  i;
};

class Ur {
  get _forceAllowLocalhost() {
    return this.__forceAllowLocalhost;
  }
  set _forceAllowLocalhost(e) {
    T.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), 
    this.__forceAllowLocalhost = e;
  }
  __forceAllowLocalhost=!1;
}

class Wr {
  webPerformance=new Ur;
  version=_.LIB_VERSION;
  _internalEventEmitter=new ys;
  constructor() {
    this.config = Br(), this.decideEndpointWasHit = !1, this.SentryIntegration = _s, 
    this.sentryIntegration = e => function(e, t) {
      const i = hs(e, t);
      return {
        name: ds,
        processEvent: e => i(e)
      };
    }(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", 
    this._initialPageviewCaptured = !1, this._initialPersonProfilesConfig = null, this.featureFlags = new Oe(this), 
    this.toolbar = new Yn(this), this.scrollManager = new gr(this), this.pageViewManager = new gs(this), 
    this.surveys = new rr(this), this.experiments = new Tr(this), this.exceptions = new Ar(this), 
    this.rateLimiter = new or(this), this.requestRouter = new us(this), this.consent = new kr(this), 
    this.people = {
      set: (e, t, i) => {
        const n = E(e) ? {
          [e]: t
        } : e;
        this.setPersonProperties(n), null == i || i({});
      },
      set_once: (e, t, i) => {
        const n = E(e) ? {
          [e]: t
        } : e;
        this.setPersonProperties(void 0, n), null == i || i({});
      }
    }, this.on("eventCaptured", (e => T.info(`send "${null == e ? void 0 : e.event}"`, e)));
  }
  init(e, t, i) {
    if (i && i !== Nr) {
      var n;
      const s = null !== (n = Dr[i]) && void 0 !== n ? n : new Wr;
      return s._init(e, t, i), Dr[i] = s, Dr[Nr][i] = s, s;
    }
    return this._init(e, t, i);
  }
  _init(t) {
    var i, n;
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
    if (S(t) || k(t)) return T.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), 
    this;
    if (this.__loaded) return T.warn("You have already initialized PostHog! Re-initializing is a no-op"), 
    this;
    this.__loaded = !0, this.config = {}, this._triggered_notifs = [], s.person_profiles && (this._initialPersonProfilesConfig = s.person_profiles), 
    this.set_config(O({}, Br(), Hr(s), {
      name: r,
      token: t
    })), this.config.on_xhr_error && T.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"), 
    this.compression = s.disable_compression ? void 0 : J.GZipJS, this.persistence = new ui(this.config), 
    this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new ui({
      ...this.config,
      persistence: "sessionStorage"
    });
    const o = {
      ...this.persistence.props
    }, a = {
      ...this.sessionPersistence.props
    };
    if (this._requestQueue = new Xn((e => this._send_retriable_request(e))), this._retryQueue = new os(this), 
    this.__request_queue = [], this.sessionManager = new as(this.config, this.persistence), 
    this.sessionPropsManager = new lr(this.sessionManager, this.persistence), new Sr(this).startIfEnabledOrStop(), 
    this.sessionRecording = new Vn(this), this.sessionRecording.startIfEnabledOrStop(), 
    this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), 
    this.autocapture = new wr(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), 
    this.heatmaps = new pr(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new Rr(this), 
    this.exceptionObserver = new Ir(this), this.exceptionObserver.startIfEnabled(), 
    this.deadClicksAutocapture = new Lr(this), this.deadClicksAutocapture.startIfEnabled(), 
    _.DEBUG = _.DEBUG || this.config.debug, _.DEBUG && T.info("Starting in debug mode", {
      this: this,
      config: s,
      thisC: {
        ...this.config
      },
      p: o,
      s: a
    }), this._sync_opt_out_with_persistence(), void 0 !== (null === (i = s.bootstrap) || void 0 === i ? void 0 : i.distinctID)) {
      var l, c;
      const e = this.config.get_device_id(ze()), t = null !== (l = s.bootstrap) && void 0 !== l && l.isIdentifiedID ? e : s.bootstrap.distinctID;
      this.persistence.set_property(ke, null !== (c = s.bootstrap) && void 0 !== c && c.isIdentifiedID ? "identified" : "anonymous"), 
      this.register({
        distinct_id: s.bootstrap.distinctID,
        $device_id: t
      });
    }
    if (this._hasBootstrappedFeatureFlags()) {
      var u, d;
      const e = Object.keys((null === (u = s.bootstrap) || void 0 === u ? void 0 : u.featureFlags) || {}).filter((e => {
        var t, i;
        return !(null === (t = s.bootstrap) || void 0 === t || null === (i = t.featureFlags) || void 0 === i || !i[e]);
      })).reduce(((e, t) => {
        var i, n;
        return e[t] = (null === (i = s.bootstrap) || void 0 === i || null === (n = i.featureFlags) || void 0 === n ? void 0 : n[t]) || !1, 
        e;
      }), {}), t = Object.keys((null === (d = s.bootstrap) || void 0 === d ? void 0 : d.featureFlagPayloads) || {}).filter((t => e[t])).reduce(((e, t) => {
        var i, n, r, o;
        null !== (i = s.bootstrap) && void 0 !== i && null !== (n = i.featureFlagPayloads) && void 0 !== n && n[t] && (e[t] = null === (r = s.bootstrap) || void 0 === r || null === (o = r.featureFlagPayloads) || void 0 === o ? void 0 : o[t]);
        return e;
      }), {});
      this.featureFlags.receivedFeatureFlags({
        featureFlags: e,
        featureFlagPayloads: t
      });
    }
    if (!this.get_distinct_id()) {
      const e = this.config.get_device_id(ze());
      this.register_once({
        distinct_id: e,
        $device_id: e
      }, ""), this.persistence.set_property(ke, "anonymous");
    }
    return null == e || null === (n = e.addEventListener) || void 0 === n || n.call(e, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), 
    this.toolbar.maybeLoadToolbar(), s.segment ? ps(this, (() => this._loaded())) : this._loaded(), 
    y(this.config._onCapture) && this.on("eventCaptured", (e => this.config._onCapture(e.event, e))), 
    this;
  }
  _afterDecideResponse(e) {
    var t, i, n, s, r, o, a, l, c, u;
    this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = N(e.supportedCompression, J.GZipJS) ? J.GZipJS : N(e.supportedCompression, J.Base64) ? J.Base64 : void 0), 
    null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), 
    this.set_config({
      person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : e.defaultIdentifiedOnly ? "identified_only" : "always"
    }), null === (i = this.sessionRecording) || void 0 === i || i.afterDecideResponse(e), 
    null === (n = this.autocapture) || void 0 === n || n.afterDecideResponse(e), null === (s = this.heatmaps) || void 0 === s || s.afterDecideResponse(e), 
    null === (r = this.experiments) || void 0 === r || r.afterDecideResponse(e), null === (o = this.surveys) || void 0 === o || o.afterDecideResponse(e), 
    null === (a = this.webVitalsAutocapture) || void 0 === a || a.afterDecideResponse(e), 
    null === (l = this.exceptions) || void 0 === l || l.afterDecideResponse(e), null === (c = this.exceptionObserver) || void 0 === c || c.afterDecideResponse(e), 
    null === (u = this.deadClicksAutocapture) || void 0 === u || u.afterDecideResponse(e);
  }
  _loaded() {
    const e = this.config.advanced_disable_decide;
    e || this.featureFlags.setReloadingPaused(!0);
    try {
      this.config.loaded(this);
    } catch (e) {
      T.critical("`loaded` function failed", e);
    }
    this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout((() => {
      this.consent.isOptedIn() && this._captureInitialPageview();
    }), 1), e || (new Gn(this).call(), this.featureFlags.resetRequestQueue());
  }
  _start_queue_if_opted_in() {
    var e;
    this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.enable());
  }
  _dom_loaded() {
    this.has_opted_out_capturing() || L(this.__request_queue, (e => this._send_retriable_request(e))), 
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
    this.__loaded && (qr ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, 
    e.url = es(e.url, {
      ip: this.config.ip ? 1 : 0
    }), e.headers = {
      ...this.config.request_headers
    }, e.compression = "best-available" === e.compression ? this.compression : e.compression, 
    (e => {
      var t, i, n;
      const s = {
        ...e
      };
      s.timeout = s.timeout || 6e4, s.url = es(s.url, {
        _: (new Date).getTime().toString(),
        ver: _.LIB_VERSION,
        compression: s.compression
      });
      const r = null !== (t = s.transport) && void 0 !== t ? t : "XHR", o = null !== (i = null === (n = Q(rs, (e => e.transport === r))) || void 0 === n ? void 0 : n.method) && void 0 !== i ? i : rs[0].method;
      if (!o) throw new Error("No available transport method");
      o(s);
    })({
      ...e,
      callback: t => {
        var i, n, s;
        (this.rateLimiter.checkForLimiting(t), t.statusCode >= 400) && (null === (n = (s = this.config).on_request_error) || void 0 === n || n.call(s, t));
        null === (i = e.callback) || void 0 === i || i.call(e, t);
      }
    })));
  }
  _send_retriable_request(e) {
    this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e);
  }
  _execute_array(e) {
    let t;
    const i = [], n = [], s = [];
    L(e, (e => {
      e && (t = e[0], m(t) ? s.push(e) : y(e) ? e.call(this) : m(e) && "alias" === t ? i.push(e) : m(e) && -1 !== t.indexOf("capture") && y(this[t]) ? s.push(e) : n.push(e));
    }));
    const r = function(e, t) {
      L(e, (function(e) {
        if (m(e[0])) {
          let i = t;
          D(e, (function(e) {
            i = i[e[0]].apply(i, e.slice(1));
          }));
        } else this[e[0]].apply(this, e.slice(1));
      }), t);
    };
    r(i, this), r(n, this), r(s, this);
  }
  _hasBootstrappedFeatureFlags() {
    var e, t;
    return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1;
  }
  push(e) {
    this._execute_array([ e ]);
  }
  capture(e, t, i) {
    var n;
    if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void T.uninitializedWarning("posthog.capture");
    if (this.consent.isOptedOut()) return;
    if (S(e) || !E(e)) return void T.error("No event name provided to posthog.capture");
    if (!this.config.opt_out_useragent_filter && this._is_bot()) return;
    const s = null != i && i.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
    if (null != s && s.isRateLimited) return void T.critical("This capture call is ignored due to client rate limiting.");
    this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), 
    this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.store_google || this.config.save_referrer) && this.persistence.set_initial_person_info();
    const r = new Date, o = (null == i ? void 0 : i.timestamp) || r;
    let a = {
      uuid: ze(),
      event: e,
      properties: this._calculate_event_properties(e, t || {}, o)
    };
    s && (a.properties.$lib_rate_limit_remaining_tokens = s.remainingTokens);
    (null == i ? void 0 : i.$set) && (a.$set = null == i ? void 0 : i.$set);
    const l = this._calculate_set_once_properties(null == i ? void 0 : i.$set_once);
    l && (a.$set_once = l), a = z(a, null != i && i._noTruncate ? null : this.config.properties_string_max_length), 
    a.timestamp = o, S(null == i ? void 0 : i.timestamp) || (a.properties.$event_time_override_provided = !0, 
    a.properties.$event_time_override_system_time = r);
    const c = {
      ...a.properties.$set,
      ...a.$set
    };
    w(c) || this.setPersonPropertiesForFlags(c), this._internalEventEmitter.emit("eventCaptured", a);
    const u = {
      method: "POST",
      url: null !== (n = null == i ? void 0 : i._url) && void 0 !== n ? n : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
      data: a,
      compression: "best-available",
      batchKey: null == i ? void 0 : i._batchKey
    };
    return !this.config.request_batching || i && (null == i || !i._batchKey) || null != i && i.send_instantly ? this._send_retriable_request(u) : this._requestQueue.enqueue(u), 
    a;
  }
  _addCaptureHook(e) {
    return this.on("eventCaptured", (t => e(t.event, t)));
  }
  _calculate_event_properties(e, t, i) {
    if (i = i || new Date, !this.persistence || !this.sessionPersistence) return t;
    const n = this.persistence.remove_event_timer(e);
    let s = {
      ...t
    };
    if (s.token = this.config.token, "$snapshot" === e) {
      const e = {
        ...this.persistence.properties(),
        ...this.sessionPersistence.properties()
      };
      return s.distinct_id = e.distinct_id, (!E(s.distinct_id) && !P(s.distinct_id) || k(s.distinct_id)) && T.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), 
      s;
    }
    const r = li.properties();
    if (this.sessionManager) {
      const {sessionId: e, windowId: t} = this.sessionManager.checkAndGetSessionAndWindowId();
      s.$session_id = e, s.$window_id = t;
    }
    if (this.requestRouter.region === ls.CUSTOM && (s.$lib_custom_api_host = this.config.api_host), 
    this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e || "$pageleave" === e || "$autocapture" === e)) {
      const e = this.sessionPropsManager.getSessionProps();
      s = O(s, e);
    }
    if (!this.config.disable_scroll_properties) {
      let t = {};
      "$pageview" === e ? t = this.pageViewManager.doPageView(i) : "$pageleave" === e && (t = this.pageViewManager.doPageLeave(i)), 
      s = O(s, t);
    }
    if ("$pageview" === e && o && (s.title = o.title), !S(n)) {
      const e = i.getTime() - n;
      s.$duration = parseFloat((e / 1e3).toFixed(3));
    }
    d && this.config.opt_out_useragent_filter && (s.$browser_type = this._is_bot() ? "bot" : "browser"), 
    s = O({}, r, this.persistence.properties(), this.sessionPersistence.properties(), s), 
    s.$is_identified = this._isIdentified(), m(this.config.property_denylist) ? D(this.config.property_denylist, (function(e) {
      delete s[e];
    })) : T.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
    const a = this.config.sanitize_properties;
    a && (s = a(s, e));
    const l = this._hasPersonProcessing();
    return s.$process_person_profile = l, l && this._requirePersonProcessing("_calculate_event_properties"), 
    s;
  }
  _calculate_set_once_properties(e) {
    if (!this.persistence || !this._hasPersonProcessing()) return e;
    let t = O({}, this.persistence.get_initial_props(), e || {});
    const i = this.config.sanitize_properties;
    return i && (t = i(t, "$set_once")), w(t) ? void 0 : t;
  }
  register(e, t) {
    var i;
    null === (i = this.persistence) || void 0 === i || i.register(e, t);
  }
  register_once(e, t, i) {
    var n;
    null === (n = this.persistence) || void 0 === n || n.register_once(e, t, i);
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
    const t = this.featureFlags.getFeatureFlagPayload(e);
    try {
      return JSON.parse(t);
    } catch {
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
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
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
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getSurveys(e, t);
  }
  getActiveMatchingSurveys(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
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
    if (!this.__loaded || !this.persistence) return T.uninitializedWarning("posthog.identify");
    if (P(e) && (e = e.toString(), T.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), 
    !e) return void T.error("Unique user id has not been set in posthog.identify");
    if ([ "distinct_id", "distinctid" ].includes(e.toLowerCase())) return void T.critical(`The string "${e}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`);
    if (!this._requirePersonProcessing("posthog.identify")) return;
    const n = this.get_distinct_id();
    if (this.register({
      $user_id: e
    }), !this.get_property("$device_id")) {
      const e = n;
      this.register_once({
        $had_persisted_distinct_id: !0,
        $device_id: e
      }, "");
    }
    e !== n && e !== this.get_property(K) && (this.unregister(K), this.register({
      distinct_id: e
    }));
    const s = "anonymous" === (this.persistence.get_property(ke) || "anonymous");
    e !== n && s ? (this.persistence.set_property(ke, "identified"), this.setPersonPropertiesForFlags(t || {}, !1), 
    this.capture("$identify", {
      distinct_id: e,
      $anon_distinct_id: n
    }, {
      $set: t || {},
      $set_once: i || {}
    }), this.featureFlags.setAnonymousDistinctId(n)) : (t || i) && this.setPersonProperties(t, i), 
    e !== n && (this.reloadFeatureFlags(), this.unregister(Ee));
  }
  setPersonProperties(e, t) {
    (e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e || {}), 
    this.capture("$set", {
      $set: e || {},
      $set_once: t || {}
    }));
  }
  group(e, t, i) {
    if (!e || !t) return void T.error("posthog.group requires a group type and group key");
    if (!this._requirePersonProcessing("posthog.group")) return;
    const n = this.getGroups();
    n[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({
      $groups: {
        ...n,
        [e]: t
      }
    }), i && (this.capture("$groupidentify", {
      $group_type: e,
      $group_key: t,
      $group_set: i
    }), this.setGroupPropertiesForFlags({
      [e]: i
    })), n[e] === t || i || this.reloadFeatureFlags();
  }
  resetGroups() {
    this.register({
      $groups: {}
    }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
  }
  setPersonPropertiesForFlags(e) {
    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this._requirePersonProcessing("posthog.setPersonPropertiesForFlags") && this.featureFlags.setPersonPropertiesForFlags(e, t);
  }
  resetPersonPropertiesForFlags() {
    this.featureFlags.resetPersonPropertiesForFlags();
  }
  setGroupPropertiesForFlags(e) {
    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t);
  }
  resetGroupPropertiesForFlags(e) {
    this.featureFlags.resetGroupPropertiesForFlags(e);
  }
  reset(e) {
    var t, i, n, s, r;
    if (T.info("reset"), !this.__loaded) return T.uninitializedWarning("posthog.reset");
    const o = this.get_property("$device_id");
    this.consent.reset(), null === (t = this.persistence) || void 0 === t || t.clear(), 
    null === (i = this.sessionPersistence) || void 0 === i || i.clear(), null === (n = this.surveys) || void 0 === n || n.reset(), 
    null === (s = this.persistence) || void 0 === s || s.set_property(ke, "anonymous"), 
    null === (r = this.sessionManager) || void 0 === r || r.resetSessionId();
    const a = this.config.get_device_id(ze());
    this.register_once({
      distinct_id: a,
      $device_id: e ? a : o
    }, "");
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
    const {sessionId: t, sessionStartTimestamp: i} = this.sessionManager.checkAndGetSessionAndWindowId(!0);
    let n = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${t}`);
    if (null != e && e.withTimestamp && i) {
      var s;
      const t = null !== (s = e.timestampLookBack) && void 0 !== s ? s : 10;
      if (!i) return n;
      n += `?t=${Math.max(Math.floor(((new Date).getTime() - i) / 1e3) - t, 0)}`;
    }
    return n;
  }
  alias(e, t) {
    return e === this.get_property(X) ? (T.critical("Attempting to create alias for existing People user - aborting."), 
    -2) : this._requirePersonProcessing("posthog.alias") ? (S(t) && (t = this.get_distinct_id()), 
    e !== t ? (this._register_single(K, e), this.capture("$create_alias", {
      alias: e,
      distinct_id: t
    })) : (T.warn("alias matches current distinct_id - skipping api call."), this.identify(e), 
    -1)) : void 0;
  }
  set_config(e) {
    const t = {
      ...this.config
    };
    var i, n, s, r;
    b(e) && (O(this.config, Hr(e)), null === (i = this.persistence) || void 0 === i || i.update_config(this.config, t), 
    this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new ui({
      ...this.config,
      persistence: "sessionStorage"
    }), Ke.is_supported() && "true" === Ke.get("ph_debug") && (this.config.debug = !0), 
    this.config.debug && (_.DEBUG = !0, T.info("set_config", {
      config: e,
      oldConfig: t,
      newConfig: {
        ...this.config
      }
    })), null === (n = this.sessionRecording) || void 0 === n || n.startIfEnabledOrStop(), 
    null === (s = this.autocapture) || void 0 === s || s.startIfEnabled(), null === (r = this.heatmaps) || void 0 === r || r.startIfEnabled(), 
    this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence());
  }
  startSessionRecording(e) {
    const t = F(e) && e;
    if (t || null != e && e.sampling || null != e && e.linked_flag) {
      var i;
      const r = null === (i = this.sessionManager) || void 0 === i ? void 0 : i.checkAndGetSessionAndWindowId();
      var n, s;
      if (t || null != e && e.sampling) null === (n = this.sessionRecording) || void 0 === n || n.overrideSampling(), 
      T.info("Session recording started with sampling override for session: ", null == r ? void 0 : r.sessionId);
      if (t || null != e && e.linked_flag) null === (s = this.sessionRecording) || void 0 === s || s.overrideLinkedFlag(), 
      T.info("Session recording started with linked_flags override");
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
    var i;
    const n = new Error("PostHog syntheticException"), s = y(null === (i = h.__PosthogExtensions__) || void 0 === i ? void 0 : i.parseErrorAsProperties) ? h.__PosthogExtensions__.parseErrorAsProperties([ e.message, void 0, void 0, void 0, e ], {
      syntheticException: n
    }) : {
      $exception_level: "error",
      $exception_list: [ {
        type: e.name,
        value: e.message,
        mechanism: {
          handled: !0,
          synthetic: !1
        }
      } ],
      ...t
    };
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
    var e;
    let t = null !== (e = this.config.name) && void 0 !== e ? e : Nr;
    return t !== Nr && (t = Nr + "." + t), t;
  }
  _isIdentified() {
    var e, t;
    return "identified" === (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(ke)) || "identified" === (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.get_property(ke));
  }
  _hasPersonProcessing() {
    var e, t, i, n;
    return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && w(this.getGroups()) && (null === (e = this.persistence) || void 0 === e || null === (t = e.props) || void 0 === t || !t[K]) && (null === (i = this.persistence) || void 0 === i || null === (n = i.props) || void 0 === n || !n[Ce]));
  }
  _shouldCapturePageleave() {
    return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview;
  }
  createPersonProfile() {
    this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {});
  }
  _requirePersonProcessing(e) {
    return "never" === this.config.person_profiles ? (T.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), 
    !1) : (this._register_single(Ce, !0), !0);
  }
  _sync_opt_out_with_persistence() {
    var e, t;
    const i = this.consent.isOptedOut(), n = this.config.opt_out_persistence_by_default, s = this.config.disable_persistence || i && !!n;
    var r, o;
    (null === (e = this.persistence) || void 0 === e ? void 0 : e.disabled) !== s && (null === (r = this.persistence) || void 0 === r || r.set_disabled(s));
    (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.disabled) !== s && (null === (o = this.sessionPersistence) || void 0 === o || o.set_disabled(s));
  }
  opt_in_capturing(e) {
    var t;
    (this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), S(null == e ? void 0 : e.captureEventName) || null != e && e.captureEventName) && this.capture(null !== (t = null == e ? void 0 : e.captureEventName) && void 0 !== t ? t : "$opt_in", null == e ? void 0 : e.captureProperties, {
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
    return r ? dr(r, this.config.custom_blocked_useragents) : void 0;
  }
  _captureInitialPageview() {
    o && !this._initialPageviewCaptured && (this._initialPageviewCaptured = !0, this.capture("$pageview", {
      title: o.title
    }, {
      send_instantly: !0
    }));
  }
  debug(t) {
    !1 === t ? (null == e || e.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), 
    this.set_config({
      debug: !1
    })) : (null == e || e.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), 
    localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
      debug: !0
    }));
  }
}

!function(e, t) {
  for (let i = 0; i < t.length; i++) e.prototype[t[i]] = H(e.prototype[t[i]]);
}(Wr, [ "identify" ]);

const zr = function() {
  const t = Dr[Nr] = new Wr;
  return function() {
    function t() {
      t.done || (t.done = !0, qr = !1, D(Dr, (function(e) {
        e._dom_loaded();
      })));
    }
    null != o && o.addEventListener && ("complete" === o.readyState ? t() : o.addEventListener("DOMContentLoaded", t, !1)), 
    e && G(e, "load", t, !0);
  }(), t;
}();

class PostHogController extends Controller {
  static values={
    apiKey: String,
    identification: Object
  };
  connect() {
    zr.init(this.apiKeyValue, {
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
      zr.identify(id.toString(), {
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
