import { toValue as k, reactive as Es, unref as A, ref as ft, computed as F, watch as an, shallowRef as Pc, triggerRef as zi, onScopeDispose as Fc, defineComponent as re, createElementBlock as it, openBlock as W, createElementVNode as Kr, normalizeStyle as cn, renderSlot as U, Fragment as $n, renderList as Un, mergeProps as ze, inject as vn, toRefs as Ae, onMounted as bs, onUnmounted as xc, createBlock as Qr, normalizeClass as to, withCtx as pe, normalizeProps as qt, guardReactiveProps as Pe, provide as kc, createVNode as _i, createCommentVNode as Ss, withModifiers as Wn } from "vue";
function Yc() {
  return Math.random().toString(36).substring(2, 11);
}
function tt(t, e, n, r, o) {
  return Yt(e, ((i, s) => {
    const a = i[s];
    if (a === void 0)
      throw new TypeError(Ho(s));
    return a;
  })(t, e), n, r, o);
}
function Yt(t, e, n, r, o, i) {
  const s = ln(e, n, r);
  if (o && e !== s)
    throw new RangeError(ka(t, e, n, r, i));
  return s;
}
function J(t) {
  return t !== null && /object|function/.test(typeof t);
}
function ct(t, e = Map) {
  const n = new e();
  return (r, ...o) => {
    if (n.has(r))
      return n.get(r);
    const i = t(r, ...o);
    return n.set(r, i), i;
  };
}
function un(t) {
  return Fe({
    name: t
  }, 1);
}
function Fe(t, e) {
  return At((n) => ({
    value: n,
    configurable: 1,
    writable: !e
  }), t);
}
function Ac(t) {
  return At((e) => ({
    get: e,
    configurable: 1
  }), t);
}
function eo(t) {
  return {
    [Symbol.toStringTag]: {
      value: t,
      configurable: 1
    }
  };
}
function Ze(t, e) {
  const n = {};
  let r = t.length;
  for (const o of e)
    n[t[--r]] = o;
  return n;
}
function At(t, e, n) {
  const r = {};
  for (const o in e)
    r[o] = t(e[o], o, n);
  return r;
}
function rr(t, e, n) {
  const r = {};
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    r[i] = t(i, o, n);
  }
  return r;
}
function Ms(t, e, n) {
  const r = {};
  for (let o = 0; o < t.length; o++)
    r[e[o]] = n[t[o]];
  return r;
}
function pt(t, e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of t)
    n[r] = e[r];
  return n;
}
function Pi(t, e) {
  for (const n of e)
    if (n in t)
      return 1;
  return 0;
}
function Ds(t, e, n) {
  for (const r of t)
    if (e[r] !== n[r])
      return 0;
  return 1;
}
function Is(t, e, n) {
  const r = {
    ...n
  };
  for (let o = 0; o < e; o++)
    r[t[o]] = 0;
  return r;
}
function D(t, ...e) {
  return (...n) => t(...e, ...n);
}
function Fi(t) {
  return t[0].toUpperCase() + t.substring(1);
}
function wn(t) {
  return t.slice().sort();
}
function Vn(t, e) {
  return String(e).padStart(t, "0");
}
function Ht(t, e) {
  return Math.sign(t - e);
}
function ln(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function Ft(t, e) {
  return [Math.floor(t / e), on(t, e)];
}
function on(t, e) {
  return (t % e + e) % e;
}
function Kt(t, e) {
  return [or(t, e), no(t, e)];
}
function or(t, e) {
  return Math.trunc(t / e) || 0;
}
function no(t, e) {
  return t % e || 0;
}
function xn(t) {
  return Math.abs(t % 1) === 0.5;
}
function Ts(t, e, n) {
  let r = 0, o = 0;
  for (let a = 0; a <= e; a++) {
    const c = t[n[a]], u = Ot[a], l = x / u, [d, f] = Kt(c, l);
    r += f * u, o += d;
  }
  const [i, s] = Kt(r, x);
  return [o + i, s];
}
function ir(t, e, n) {
  const r = {};
  for (let o = e; o >= 0; o--) {
    const i = Ot[o];
    r[n[o]] = or(t, i), t = no(t, i);
  }
  return r;
}
function Zc(t) {
  if (t !== void 0)
    return V(t);
}
function jc(t) {
  if (t !== void 0)
    return Pt(t);
}
function Os(t) {
  if (t !== void 0)
    return ro(t);
}
function Pt(t) {
  return Cs(ro(t));
}
function ro(t) {
  return Ns(Xl(t));
}
function Rs(t, e) {
  if (e == null)
    throw new RangeError(Ho(t));
  return e;
}
function yn(t) {
  if (!J(t))
    throw new TypeError(bl);
  return t;
}
function oo(t, e, n = t) {
  if (typeof e !== t)
    throw new TypeError(ue(n, e));
  return e;
}
function Ns(t, e = "number") {
  if (!Number.isInteger(t))
    throw new RangeError(pl(e, t));
  return t || 0;
}
function Cs(t, e = "number") {
  if (t <= 0)
    throw new RangeError(gl(e, t));
  return t;
}
function io(t) {
  if (typeof t == "symbol")
    throw new TypeError(El);
  return String(t);
}
function Zn(t, e) {
  return J(t) ? String(t) : V(t, e);
}
function so(t) {
  if (typeof t == "string")
    return BigInt(t);
  if (typeof t != "bigint")
    throw new TypeError(yl(t));
  return t;
}
function zs(t, e = "number") {
  if (typeof t == "bigint")
    throw new TypeError(wl(e));
  if (t = Number(t), !Number.isFinite(t))
    throw new RangeError(vl(e, t));
  return t;
}
function H(t, e) {
  return Math.trunc(zs(t, e)) || 0;
}
function ao(t, e) {
  return Ns(zs(t, e), e);
}
function xi(t, e) {
  return Cs(H(t, e), e);
}
function co(t, e) {
  let [n, r] = Kt(e, x), o = t + n;
  const i = Math.sign(o);
  return i && i === -Math.sign(r) && (o -= i, r += i * x), [o, r];
}
function xe(t, e, n = 1) {
  return co(t[0] + e[0] * n, t[1] + e[1] * n);
}
function ge(t, e) {
  return co(t[0], t[1] + e);
}
function It(t, e) {
  return xe(e, t, -1);
}
function ut(t, e) {
  return Ht(t[0], e[0]) || Ht(t[1], e[1]);
}
function _s(t, e, n) {
  return ut(t, e) === -1 || ut(t, n) === 1;
}
function uo(t, e = 1) {
  const n = BigInt(x / e);
  return [Number(t / n), Number(t % n) * e];
}
function Gn(t, e = 1) {
  const n = x / e, [r, o] = Kt(t, n);
  return [r, o * e];
}
function Tt(t, e = 1, n) {
  const [r, o] = t, [i, s] = Kt(o, e);
  return r * (x / e) + (i + (n ? s / e : 0));
}
function lo(t, e, n = Ft) {
  const [r, o] = t, [i, s] = n(o, e);
  return [r * (x / e) + i, s];
}
function fo(t) {
  return tt(t, "isoYear", gn, pn, 1), t.isoYear === gn ? tt(t, "isoMonth", 4, 12, 1) : t.isoYear === pn && tt(t, "isoMonth", 1, 9, 1), t;
}
function ht(t) {
  return rt({
    ...t,
    ...ot,
    isoHour: 12
  }), t;
}
function rt(t) {
  const e = tt(t, "isoYear", gn, pn, 1), n = e === gn ? 1 : e === pn ? -1 : 0;
  return n && Rt(B({
    ...t,
    isoDay: t.isoDay + n,
    isoNanosecond: t.isoNanosecond - n
  })), t;
}
function Rt(t) {
  if (!t || _s(t, od, rd))
    throw new RangeError(le);
  return t;
}
function Qt(t) {
  return Ts(t, 5, wt)[1];
}
function sr(t) {
  const [e, n] = Ft(t, x);
  return [ir(n, 5, wt), e];
}
function ki(t) {
  return lo(t, Dt);
}
function X(t) {
  return je(t.isoYear, t.isoMonth, t.isoDay, t.isoHour, t.isoMinute, t.isoSecond, t.isoMillisecond);
}
function B(t) {
  const e = X(t);
  if (e !== void 0) {
    const [n, r] = Kt(e, nt);
    return [n, r * Bt + (t.isoMicrosecond || 0) * Tn + (t.isoNanosecond || 0)];
  }
}
function ho(t, e) {
  const [n, r] = sr(Qt(t) - e);
  return Rt(B({
    ...t,
    isoDay: t.isoDay + r,
    ...n
  }));
}
function qn(...t) {
  return je(...t) / Wa;
}
function je(...t) {
  const [e, n] = Ps(...t), r = e.valueOf();
  if (!isNaN(r))
    return r - n * nt;
}
function Ps(t, e = 1, n = 1, r = 0, o = 0, i = 0, s = 0) {
  const a = t === gn ? 1 : t === pn ? -1 : 0, c = /* @__PURE__ */ new Date();
  return c.setUTCHours(r, o, i, s), c.setUTCFullYear(t, e - 1, n + a), [c, a];
}
function Be(t, e) {
  let [n, r] = ge(t, e);
  r < 0 && (r += x, n -= 1);
  const [o, i] = Ft(r, Bt), [s, a] = Ft(i, Tn);
  return ar(n * nt + o, s, a);
}
function ar(t, e = 0, n = 0) {
  const r = Math.ceil(Math.max(0, Math.abs(t) - nd) / nt) * Math.sign(t), o = new Date(t - r * nt);
  return Ze(Rr, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + r, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), e, n]);
}
function mo(t, e) {
  if (e < -864e13)
    throw new RangeError(le);
  const n = t.formatToParts(e), r = {};
  for (const o of n)
    r[o.type] = o.value;
  return r;
}
function po(t) {
  return [t.isoYear, t.isoMonth, t.isoDay];
}
function Fs(t, e) {
  return [e, 0];
}
function xs() {
  return Ut;
}
function ks(t, e) {
  switch (e) {
    case 2:
      return go(t) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function Ys(t) {
  return go(t) ? 366 : 365;
}
function go(t) {
  return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
}
function As(t) {
  const [e, n] = Ps(t.isoYear, t.isoMonth, t.isoDay);
  return on(e.getUTCDay() - n, 7) || 7;
}
function Zs(t) {
  return this.id === He ? (({ isoYear: e }) => e < 1 ? ["gregory-inverse", 1 - e] : ["gregory", e])(t) : this.id === ne ? ad(t) : [];
}
function Bc(t) {
  const e = X(t);
  if (e < sd) {
    const { isoYear: i } = t;
    return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
  }
  const n = mo(pi(ne), e), { era: r, eraYear: o } = Ia(n, ne);
  return [r, o];
}
function cr(t) {
  return ye(t), Le(t, 1), t;
}
function ye(t) {
  return js(t, 1), t;
}
function Yi(t) {
  return Ds(oi, t, js(t));
}
function js(t, e) {
  const { isoYear: n } = t, r = tt(t, "isoMonth", 1, xs(), e);
  return {
    isoYear: n,
    isoMonth: r,
    isoDay: tt(t, "isoDay", 1, ks(n, r), e)
  };
}
function Le(t, e) {
  return Ze(wt, [tt(t, "isoHour", 0, 23, e), tt(t, "isoMinute", 0, 59, e), tt(t, "isoSecond", 0, 59, e), tt(t, "isoMillisecond", 0, 999, e), tt(t, "isoMicrosecond", 0, 999, e), tt(t, "isoNanosecond", 0, 999, e)]);
}
function T(t) {
  return t === void 0 ? 0 : ac(yn(t));
}
function ur(t, e = 0) {
  t = Nt(t);
  const n = cc(t), r = vd(t, e);
  return [ac(t), r, n];
}
function $e(t, e, n, r = 9, o = 0, i = 4) {
  e = Nt(e);
  let s = sc(e, r, o), a = yo(e), c = Nn(e, i);
  const u = Rn(e, r, o, 1);
  return s == null ? s = Math.max(n, u) : Us(s, u), a = Eo(a, u, 1), t && (c = ((l) => l < 4 ? (l + 2) % 4 : l)(c)), [s, u, a, c];
}
function lr(t, e = 6, n) {
  let r = yo(t = dr(t, tr));
  const o = Nn(t, 7);
  let i = Rn(t, e);
  return i = Rs(tr, i), r = Eo(r, i, void 0, n), [i, r, o];
}
function vo(t) {
  return si(Nt(t));
}
function Bs(t, e) {
  return wo(Nt(t), e);
}
function Lc(t) {
  const e = dr(t, Zr), n = oe(Zr, pd, e, 0);
  if (!n)
    throw new RangeError(ue(Zr, n));
  return n;
}
function wo(t, e = 4) {
  const n = $s(t);
  return [Nn(t, 4), ...Ls(Rn(t, e), n)];
}
function Ls(t, e) {
  return t != null ? [Ot[t], t < 4 ? 9 - 3 * t : -1] : [e === void 0 ? 1 : 10 ** (9 - e), e];
}
function yo(t) {
  const e = t[sn];
  return e === void 0 ? 1 : H(e, sn);
}
function Eo(t, e, n, r) {
  const o = r ? x : Ot[e + 1];
  if (o) {
    const i = Ot[e];
    if (o % ((t = Yt(sn, t, 1, o / i - (r ? 0 : 1), 1)) * i))
      throw new RangeError(ue(sn, t));
  } else
    t = Yt(sn, t, 1, n ? 10 ** 9 : 1, 1);
  return t;
}
function $s(t) {
  let e = t[Ar];
  if (e !== void 0) {
    if (typeof e != "number") {
      if (io(e) === "auto")
        return;
      throw new RangeError(ue(Ar, e));
    }
    e = Yt(Ar, Math.floor(e), 0, 9, 1);
  }
  return e;
}
function Nt(t) {
  return t === void 0 ? {} : yn(t);
}
function dr(t, e) {
  return typeof t == "string" ? {
    [e]: t
  } : yn(t);
}
function fr(t) {
  return {
    overflow: cd[t]
  };
}
function bo(t, e, n = 9, r = 0, o) {
  let i = e[t];
  if (i === void 0)
    return o ? r : void 0;
  if (i = io(i), i === "auto")
    return o ? r : null;
  let s = Vr[i];
  if (s === void 0 && (s = Ql[i]), s === void 0)
    throw new RangeError(Aa(t, i, Vr));
  return Yt(t, s, r, n, 1, Xo), s;
}
function oe(t, e, n, r = 0) {
  const o = n[t];
  if (o === void 0)
    return r;
  const i = io(o), s = e[i];
  if (s === void 0)
    throw new RangeError(Aa(t, i, e));
  return s;
}
function Us(t, e) {
  if (e > t)
    throw new RangeError(Ll);
}
function Zt(t) {
  return {
    branding: li,
    epochNanoseconds: t
  };
}
function gt(t, e, n) {
  return {
    branding: de,
    calendar: n,
    timeZone: e,
    epochNanoseconds: t
  };
}
function vt(t, e = t.calendar) {
  return {
    branding: Xe,
    calendar: e,
    ...pt(td, t)
  };
}
function jt(t, e = t.calendar) {
  return {
    branding: Cn,
    calendar: e,
    ...pt(ii, t)
  };
}
function dn(t, e = t.calendar) {
  return {
    branding: ai,
    calendar: e,
    ...pt(ii, t)
  };
}
function Hn(t, e = t.calendar) {
  return {
    branding: ci,
    calendar: e,
    ...pt(ii, t)
  };
}
function Ct(t) {
  return {
    branding: ui,
    ...pt(ec, t)
  };
}
function j(t) {
  return {
    branding: di,
    sign: ie(t),
    ...pt(ei, t)
  };
}
function So(t) {
  return lo(t.epochNanoseconds, Bt)[0];
}
function $c(t) {
  return ((e, n = 1) => {
    const [r, o] = e, i = Math.floor(o / n), s = x / n;
    return BigInt(r) * BigInt(s) + BigInt(i);
  })(t.epochNanoseconds);
}
function Ws(t) {
  return t.epochNanoseconds;
}
function Uc(t, e, n, r, o) {
  const i = ve(r), [s, a] = ((v, w) => {
    const y = w((v = dr(v, Hr))[oc]);
    let E = gd(v);
    return E = Rs(Hr, E), [E, y];
  })(o, t), c = Math.max(s, i);
  if (!a && hn(c, a))
    return Ai(r, s);
  if (!a)
    throw new RangeError(Ir);
  if (!r.sign)
    return 0;
  const [u, l, d] = vr(e, n, a), f = zo(d), h = wr(d), m = _o(d), g = h(l, u, r);
  ke(a) || (rt(u), rt(g));
  const p = m(l, u, g, s);
  return hn(s, a) ? Ai(p, s) : ((v, w, y, E, M, N, C) => {
    const z = ie(v), [_, zt] = Mo(E, ri(y, v), y, z, M, N, C), yt = Do(w, _, zt);
    return v[O[y]] + yt * z;
  })(p, f(g), s, l, u, f, h);
}
function Ai(t, e) {
  return Tt(L(t), Ot[e], 1);
}
function Mo(t, e, n, r, o, i, s) {
  const a = O[n], c = {
    ...e,
    [a]: e[a] + r
  }, u = s(t, o, e), l = s(t, o, c);
  return [i(u), i(l)];
}
function Do(t, e, n) {
  const r = Tt(It(e, n));
  if (!r)
    throw new RangeError(qe);
  return Tt(It(e, t)) / r;
}
function Wc(t, e) {
  const [n, r, o] = lr(e, 5, 1);
  return Zt(mr(t.epochNanoseconds, n, r, o, 1));
}
function Vc(t, e, n) {
  let { epochNanoseconds: r, timeZone: o, calendar: i } = e;
  const [s, a, c] = lr(n);
  if (s === 0 && a === 1)
    return e;
  const u = t(o);
  if (s === 6)
    r = ((l, d, f, h) => {
      const m = dt(f, d), [g, p] = l(m), v = f.epochNanoseconds, w = ee(d, g), y = ee(d, p);
      if (_s(v, w, y))
        throw new RangeError(qe);
      return Xs(Do(v, w, y), h) ? y : w;
    })(qs, u, e, c);
  else {
    const l = u.R(r);
    r = Ue(u, Vs(Be(r, l), s, a, c), l, 2, 0, 1);
  }
  return gt(r, o, i);
}
function Gc(t, e) {
  return vt(Vs(t, ...lr(e)), t.calendar);
}
function qc(t, e) {
  const [n, r, o] = lr(e, 5);
  var i;
  return Ct((i = o, Io(t, En(n, r), i)[0]));
}
function Hc(t, e) {
  const n = t(e.timeZone), r = dt(e, n), [o, i] = qs(r), s = Tt(It(ee(n, o), ee(n, i)), Or, 1);
  if (s <= 0)
    throw new RangeError(qe);
  return s;
}
function Xc(t, e) {
  const { timeZone: n, calendar: r } = e, o = ((i, s, a) => ee(s, i(dt(a, s))))(Hs, t(n), e);
  return gt(o, n, r);
}
function Vs(t, e, n, r) {
  return Gs(t, En(e, n), r);
}
function Gs(t, e, n) {
  const [r, o] = Io(t, e, n);
  return rt({
    ...Ee(t, o),
    ...r
  });
}
function Io(t, e, n) {
  return sr(te(Qt(t), e, n));
}
function Xn(t) {
  return te(t, Tr, 7);
}
function En(t, e) {
  return Ot[t] * e;
}
function qs(t) {
  const e = Hs(t);
  return [e, Ee(e, 1)];
}
function Hs(t) {
  return ed(6, t);
}
function Jc(t, e, n) {
  const r = Math.min(ve(t), 6);
  return We(pr(L(t, r), e, n), r);
}
function hr(t, e, n, r, o, i, s, a, c, u) {
  if (r === 0 && o === 1)
    return t;
  const l = hn(r, a) ? ke(a) && r < 6 && n >= 6 ? Qc : Kc : tu;
  let [d, f, h] = l(t, e, n, r, o, i, s, a, c, u);
  return h && r !== 7 && (d = ((m, g, p, v, w, y, E, M) => {
    const N = ie(m);
    for (let C = v + 1; C <= p; C++) {
      if (C === 7 && p !== 7)
        continue;
      const z = ri(C, m);
      z[O[C]] += N;
      const _ = Tt(It(E(M(w, y, z)), g));
      if (_ && Math.sign(_) !== N)
        break;
      m = z;
    }
    return m;
  })(d, f, n, Math.max(6, r), s, a, c, u)), d;
}
function mr(t, e, n, r, o) {
  if (e === 6) {
    const i = ((s) => s[0] + s[1] / x)(t);
    return [te(i, n, r), 0];
  }
  return pr(t, En(e, n), r, o);
}
function pr(t, e, n, r) {
  let [o, i] = t;
  r && i < 0 && (i += x, o -= 1);
  const [s, a] = Ft(te(i, e, n), x);
  return co(o + s, a);
}
function te(t, e, n) {
  return Xs(t / e, n) * e;
}
function Xs(t, e) {
  return Ed[e](t);
}
function Kc(t, e, n, r, o, i) {
  const s = ie(t), a = L(t), c = mr(a, r, o, i), u = It(a, c), l = Math.sign(c[0] - a[0]) === s, d = We(c, Math.min(n, 6));
  return [{
    ...t,
    ...d
  }, xe(e, u), l];
}
function Qc(t, e, n, r, o, i, s, a, c, u) {
  const l = ie(t) || 1, d = Tt(L(t, 5)), f = En(r, o);
  let h = te(d, f, i);
  const [m, g] = Mo(s, {
    ...t,
    ...ni
  }, 6, l, a, c, u), p = h - Tt(It(m, g));
  let v = 0;
  p && Math.sign(p) !== l ? e = ge(m, h) : (v += l, h = te(p, f, i), e = ge(g, h));
  const w = yr(h);
  return [{
    ...t,
    ...w,
    days: t.days + v
  }, e, !!v];
}
function tu(t, e, n, r, o, i, s, a, c, u) {
  const l = ie(t), d = O[r], f = ri(r, t);
  r === 7 && (t = {
    ...t,
    weeks: t.weeks + Math.trunc(t.days / 7)
  });
  const h = or(t[d], o) * o;
  f[d] = h;
  const [m, g] = Mo(s, f, r, o * l, a, c, u), p = h + Do(e, m, g) * l * o, v = te(p, o, i), w = Math.sign(v - p) === l;
  return f[d] = v, [f, w ? g : m, w];
}
function Zi(t, e, n, r) {
  const [o, i, s, a] = ((u) => {
    const l = wo(u = Nt(u));
    return [u.timeZone, ...l];
  })(r), c = o !== void 0;
  return ((u, l, d, f, h, m) => {
    d = pr(d, h, f, 1);
    const g = l.R(d);
    return To(Be(d, g), m) + (u ? bn(Xn(g)) : "Z");
  })(c, e(c ? t(o) : De), n.epochNanoseconds, i, s, a);
}
function ji(t, e, n) {
  const [r, o, i, s, a, c] = ((u) => {
    u = Nt(u);
    const l = si(u), d = $s(u), f = yd(u), h = Nn(u, 4), m = Rn(u, 4);
    return [l, wd(u), f, h, ...Ls(m, d)];
  })(n);
  return ((u, l, d, f, h, m, g, p, v, w) => {
    f = pr(f, v, p, 1);
    const y = u(d).R(f);
    return To(Be(f, y), w) + bn(Xn(y), g) + ((E, M) => M !== 1 ? "[" + (M === 2 ? "!" : "") + E + "]" : "")(d, m) + Oo(l, h);
  })(t, e.calendar, e.timeZone, e.epochNanoseconds, r, o, i, s, a, c);
}
function Bi(t, e) {
  const [n, r, o, i] = ((u) => (u = Nt(u), [si(u), ...wo(u)]))(e);
  return s = t.calendar, a = n, c = i, To(Gs(t, o, r), c) + Oo(s, a);
  var s, a, c;
}
function Li(t, e) {
  return n = t.calendar, r = t, o = vo(e), Jn(r) + Oo(n, o);
  var n, r, o;
}
function $i(t, e) {
  return Js(t.calendar, Ks, t, vo(e));
}
function Ui(t, e) {
  return Js(t.calendar, eu, t, vo(e));
}
function Wi(t, e) {
  const [n, r, o] = Bs(e);
  return i = o, Qs(Io(t, r, n)[0], i);
  var i;
}
function _r(t, e) {
  const [n, r, o] = Bs(e, 3);
  return r > 1 && be(t = {
    ...t,
    ...Jc(t, r, n)
  }), ((i, s) => {
    const { sign: a } = i, c = a === -1 ? K(i) : i, { hours: u, minutes: l } = c, [d, f] = lo(L(c, 3), Dt, Kt);
    ra(d);
    const h = Ro(f, s), m = s >= 0 || !a || h;
    return (a < 0 ? "-" : "") + "P" + Vi({
      Y: me(c.years),
      M: me(c.months),
      W: me(c.weeks),
      D: me(c.days)
    }) + (u || l || d || m ? "T" + Vi({
      H: me(u),
      M: me(l),
      S: me(d, m) + h
    }) : "");
  })(t, o);
}
function Js(t, e, n, r) {
  const o = r > 1 || r === 0 && t !== I;
  return r === 1 ? t === I ? e(n) : Jn(n) : o ? Jn(n) + ta(t, r === 2) : e(n);
}
function Vi(t) {
  const e = [];
  for (const n in t) {
    const r = t[n];
    r && e.push(r, n);
  }
  return e.join("");
}
function To(t, e) {
  return Jn(t) + "T" + Qs(t, e);
}
function Jn(t) {
  return Ks(t) + "-" + mt(t.isoDay);
}
function Ks(t) {
  const { isoYear: e } = t;
  return (e < 0 || e > 9999 ? ea(e) + Vn(6, Math.abs(e)) : Vn(4, e)) + "-" + mt(t.isoMonth);
}
function eu(t) {
  return mt(t.isoMonth) + "-" + mt(t.isoDay);
}
function Qs(t, e) {
  const n = [mt(t.isoHour), mt(t.isoMinute)];
  return e !== -1 && n.push(mt(t.isoSecond) + ((r, o, i, s) => Ro(r * Bt + o * Tn + i, s))(t.isoMillisecond, t.isoMicrosecond, t.isoNanosecond, e)), n.join(":");
}
function bn(t, e = 0) {
  if (e === 1)
    return "";
  const [n, r] = Ft(Math.abs(t), Or), [o, i] = Ft(r, Tr), [s, a] = Ft(i, Dt);
  return ea(t) + mt(n) + ":" + mt(o) + (s || a ? ":" + mt(s) + Ro(a) : "");
}
function Oo(t, e) {
  return e !== 1 && (e > 1 || e === 0 && t !== I) ? ta(t, e === 2) : "";
}
function ta(t, e) {
  return "[" + (e ? "!" : "") + "u-ca=" + t + "]";
}
function Ro(t, e) {
  let n = Vn(9, t);
  return n = e === void 0 ? n.replace(Md, "") : n.slice(0, e), n ? "." + n : "";
}
function ea(t) {
  return t < 0 ? "-" : "+";
}
function me(t, e) {
  return t || e ? t.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function nu(t, e) {
  const { epochNanoseconds: n } = t, r = (e.R ? e : e(t.timeZone)).R(n), o = Be(n, r);
  return {
    calendar: t.calendar,
    ...o,
    offsetNanoseconds: r
  };
}
function Ue(t, e, n, r = 0, o = 0, i, s) {
  if (n !== void 0 && r === 1 && (r === 1 || s))
    return ho(e, n);
  const a = t.I(e);
  if (n !== void 0 && r !== 3) {
    const c = ((u, l, d, f) => {
      const h = B(l);
      f && (d = Xn(d));
      for (const m of u) {
        let g = Tt(It(m, h));
        if (f && (g = Xn(g)), g === d)
          return m;
      }
    })(a, e, n, i);
    if (c !== void 0)
      return c;
    if (r === 0)
      throw new RangeError(kl);
  }
  return s ? B(e) : Sn(t, e, o, a);
}
function Sn(t, e, n = 0, r = t.I(e)) {
  if (r.length === 1)
    return r[0];
  if (n === 1)
    throw new RangeError(Yl);
  if (r.length)
    return r[n === 3 ? 1 : 0];
  const o = B(e), i = ((a, c) => {
    const u = a.R(ge(c, -864e11));
    return ((l) => {
      if (l > x)
        throw new RangeError(xl);
      return l;
    })(a.R(ge(c, x)) - u);
  })(t, o), s = i * (n === 2 ? -1 : 1);
  return (r = t.I(Be(o, s)))[n === 2 ? 0 : r.length - 1];
}
function ee(t, e) {
  const n = t.I(e);
  if (n.length)
    return n[0];
  const r = ge(B(e), -864e11);
  return t.O(r, 1);
}
function Gi(t, e, n) {
  return Zt(Rt(xe(e.epochNanoseconds, ((r) => {
    if (oa(r))
      throw new RangeError(jl);
    return L(r, 5);
  })(t ? K(n) : n))));
}
function qi(t, e, n, r, o, i = /* @__PURE__ */ Object.create(null)) {
  const s = e(r.timeZone), a = t(r.calendar);
  return {
    ...r,
    ...No(s, a, r, n ? K(o) : o, i)
  };
}
function Hi(t, e, n, r, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i } = n;
  return vt(Co(t(i), n, e ? K(r) : r, o), i);
}
function Xi(t, e, n, r, o) {
  const { calendar: i } = n;
  return jt(gr(t(i), n, e ? K(r) : r, o), i);
}
function Ji(t, e, n, r, o) {
  const i = n.calendar, s = t(i);
  let a = ht(fn(s, n));
  e && (r = Po(r)), r.sign < 0 && (a = s.P(a, {
    ...$,
    months: 1
  }), a = Ee(a, -1));
  const c = s.P(a, r, o);
  return dn(fn(s, c), i);
}
function Ki(t, e, n) {
  return Ct(na(e, t ? K(n) : n)[0]);
}
function No(t, e, n, r, o) {
  const i = L(r, 5);
  let s = n.epochNanoseconds;
  if (oa(r)) {
    const a = dt(n, t);
    s = xe(Sn(t, {
      ...gr(e, a, {
        ...r,
        ...ni
      }, o),
      ...pt(wt, a)
    }), i);
  } else
    s = xe(s, i), T(o);
  return {
    epochNanoseconds: Rt(s)
  };
}
function Co(t, e, n, r) {
  const [o, i] = na(e, n);
  return rt({
    ...gr(t, e, {
      ...n,
      ...ni,
      days: n.days + i
    }, r),
    ...o
  });
}
function gr(t, e, n, r) {
  if (n.years || n.months || n.weeks)
    return t.P(e, n, r);
  T(r);
  const o = n.days + L(n, 5)[0];
  return o ? ht(Ee(e, o)) : e;
}
function fn(t, e, n = 1) {
  return Ee(e, n - t.day(e));
}
function na(t, e) {
  const [n, r] = L(e, 5), [o, i] = sr(Qt(t) + r);
  return [o, n + i];
}
function Ee(t, e) {
  return e ? {
    ...t,
    ...ar(X(t) + e * nt)
  } : t;
}
function vr(t, e, n) {
  const r = t(n.calendar);
  return ke(n) ? [n, r, e(n.timeZone)] : [{
    ...n,
    ...ot
  }, r];
}
function zo(t) {
  return t ? Ws : B;
}
function wr(t) {
  return t ? D(No, t) : Co;
}
function _o(t) {
  return t ? D(Tu, t) : Ou;
}
function ke(t) {
  return t && t.epochNanoseconds;
}
function hn(t, e) {
  return t <= 6 - (ke(e) ? 1 : 0);
}
function Qi(t, e, n, r, o, i, s) {
  const a = t(Nt(s).relativeTo), c = Math.max(ve(o), ve(i));
  if (hn(c, a))
    return j(be(((g, p, v, w) => {
      const y = xe(L(g), L(p), w ? -1 : 1);
      if (!Number.isFinite(y[0]))
        throw new RangeError(le);
      return {
        ...$,
        ...We(y, v)
      };
    })(o, i, c, r)));
  if (!a)
    throw new RangeError(Ir);
  r && (i = K(i));
  const [u, l, d] = vr(e, n, a), f = wr(d), h = _o(d), m = f(l, u, o);
  return j(h(l, u, f(l, m, i), c));
}
function ru(t, e, n, r, o) {
  const i = ve(r), [s, a, c, u, l] = ((N, C, z) => {
    N = dr(N, tr);
    let _ = sc(N);
    const zt = z(N[oc]);
    let yt = yo(N);
    const P = Nn(N, 7);
    let R = Rn(N);
    if (_ === void 0 && R === void 0)
      throw new RangeError(Bl);
    if (R == null && (R = 0), _ == null && (_ = Math.max(R, C)), Us(_, R), yt = Eo(yt, R, 1), yt > 1 && R > 5 && _ !== R)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [_, R, yt, P, zt];
  })(o, i, t), d = Math.max(i, s);
  if (!l && d <= 6)
    return j(be(((N, C, z, _, zt) => {
      const yt = mr(L(N), z, _, zt);
      return {
        ...$,
        ...We(yt, C)
      };
    })(r, s, a, c, u)));
  if (!ke(l) && !r.sign)
    return r;
  if (!l)
    throw new RangeError(Ir);
  const [f, h, m] = vr(e, n, l), g = zo(m), p = wr(m), v = _o(m), w = p(h, f, r);
  ke(l) || (rt(f), rt(w));
  let y = v(h, f, w, s);
  const E = r.sign, M = ie(y);
  if (E && M && E !== M)
    throw new RangeError(qe);
  return y = hr(y, g(w), s, a, c, u, h, f, g, p), j(y);
}
function ou(t) {
  return t.sign === -1 ? Po(t) : t;
}
function Po(t) {
  return j(K(t));
}
function K(t) {
  const e = {};
  for (const n of O)
    e[n] = -1 * t[n] || 0;
  return e;
}
function iu(t) {
  return !t.sign;
}
function ie(t, e = O) {
  let n = 0;
  for (const r of e) {
    const o = Math.sign(t[r]);
    if (o) {
      if (n && n !== o)
        throw new RangeError(Zl);
      n = o;
    }
  }
  return n;
}
function be(t) {
  for (const e of Kl)
    Yt(e, t[e], -4294967295, Dd, 1);
  return ra(Tt(L(t), Dt)), t;
}
function ra(t) {
  if (!Number.isSafeInteger(t))
    throw new RangeError(Al);
}
function L(t, e = 6) {
  return Ts(t, e, O);
}
function We(t, e = 6) {
  const [n, r] = t, o = ir(r, e, O);
  if (o[O[e]] += n * (x / Ot[e]), !Number.isFinite(o[O[e]]))
    throw new RangeError(le);
  return o;
}
function yr(t, e = 5) {
  return ir(t, e, O);
}
function oa(t) {
  return !!ie(t, tc);
}
function ve(t) {
  let e = 9;
  for (; e > 0 && !t[O[e]]; e--)
    ;
  return e;
}
function su(t, e) {
  return [t, e];
}
function ts(t) {
  const e = Math.floor(t / Bn) * Bn;
  return [e, e + Bn];
}
function au(t) {
  const e = se(t = Zn(t));
  if (!e)
    throw new RangeError(et(t));
  let n;
  if (e.j)
    n = 0;
  else {
    if (!e.offset)
      throw new RangeError(et(t));
    n = Se(e.offset);
  }
  return e.timeZone && Ao(e.timeZone, 1), Zt(ho(cr(e), n));
}
function cu(t) {
  const e = se(V(t));
  if (!e)
    throw new RangeError(et(t));
  if (e.timeZone)
    return ia(e, e.offset ? Se(e.offset) : void 0);
  if (e.j)
    throw new RangeError(et(t));
  return aa(e);
}
function uu(t, e) {
  const n = se(V(t));
  if (!n || !n.timeZone)
    throw new RangeError(et(t));
  const { offset: r } = n, o = r ? Se(r) : void 0, [, i, s] = ur(e);
  return ia(n, o, i, s);
}
function Se(t) {
  const e = Ao(t);
  if (e === void 0)
    throw new RangeError(et(t));
  return e;
}
function lu(t) {
  const e = se(V(t));
  if (!e || e.j)
    throw new RangeError(et(t));
  return vt(sa(e));
}
function Fo(t, e, n) {
  let r = se(V(t));
  if (!r || r.j)
    throw new RangeError(et(t));
  return e ? r.calendar === I && (r = r.isoYear === -271821 && r.isoMonth === 4 ? {
    ...r,
    isoDay: 20,
    ...ot
  } : {
    ...r,
    isoDay: 1,
    ...ot
  }) : n && r.calendar === I && (r = {
    ...r,
    isoYear: kt
  }), jt(r.C ? sa(r) : aa(r));
}
function du(t, e) {
  const n = ko(V(e));
  if (n)
    return xo(n), dn(fo(ye(n)));
  const r = Fo(e, 1);
  return dn(fn(t(r.calendar), r));
}
function xo(t) {
  if (t.calendar !== I)
    throw new RangeError(xt(t.calendar));
}
function fu(t, e) {
  const n = Yo(V(e));
  if (n)
    return xo(n), Hn(ye(n));
  const r = Fo(e, 0, 1), { calendar: o } = r, i = t(o), [s, a, c] = i.v(r), [u, l] = i.q(s, a), [d, f] = i.G(u, l, c);
  return Hn(ht(i.V(d, f, c)), o);
}
function hu(t) {
  let e, n = ((r) => {
    const o = zd.exec(r);
    return o ? (Er(o[10]), la(o)) : void 0;
  })(V(t));
  if (!n) {
    if (n = se(t), !n)
      throw new RangeError(et(t));
    if (!n.C)
      throw new RangeError(et(t));
    if (n.j)
      throw new RangeError(xt("Z"));
    xo(n);
  }
  if ((e = ko(t)) && Yi(e))
    throw new RangeError(et(t));
  if ((e = Yo(t)) && Yi(e))
    throw new RangeError(et(t));
  return Ct(Le(n, 1));
}
function mu(t) {
  const e = ((n) => {
    const r = Fd.exec(n);
    return r ? ((o) => {
      function i(l, d, f) {
        let h = 0, m = 0;
        if (f && ([h, c] = Ft(c, Ot[f])), l !== void 0) {
          if (a)
            throw new RangeError(xt(l));
          m = ((g) => {
            const p = parseInt(g);
            if (!Number.isFinite(p))
              throw new RangeError(xt(g));
            return p;
          })(l), s = 1, d && (c = Zo(d) * (Ot[f] / Dt), a = 1);
        }
        return h + m;
      }
      let s = 0, a = 0, c = 0, u = {
        ...Ze(O, [i(o[2]), i(o[3]), i(o[4]), i(o[5]), i(o[6], o[7], 5), i(o[8], o[9], 4), i(o[10], o[11], 3)]),
        ...ir(c, 2, O)
      };
      if (!s)
        throw new RangeError(Ya(O));
      return jo(o[1]) < 0 && (u = K(u)), u;
    })(r) : void 0;
  })(V(t));
  if (!e)
    throw new RangeError(et(t));
  return j(be(e));
}
function pu(t) {
  const e = se(t) || ko(t) || Yo(t);
  return e ? e.calendar : t;
}
function gu(t) {
  const e = se(t);
  return e && (e.timeZone || e.j && De || e.offset) || t;
}
function ia(t, e, n = 0, r = 0) {
  const o = Bo(t.timeZone), i = S(o);
  let s;
  return cr(t), s = t.C ? Ue(i, t, e, n, r, !i.$, t.j) : ee(i, t), gt(s, o, Dr(t.calendar));
}
function sa(t) {
  return ca(rt(cr(t)));
}
function aa(t) {
  return ca(ht(ye(t)));
}
function ca(t) {
  return {
    ...t,
    calendar: Dr(t.calendar)
  };
}
function se(t) {
  const e = Cd.exec(t);
  return e ? ((n) => {
    const r = n[10], o = (r || "").toUpperCase() === "Z";
    return {
      isoYear: ua(n),
      isoMonth: parseInt(n[4]),
      isoDay: parseInt(n[5]),
      ...la(n.slice(5)),
      ...Er(n[16]),
      C: !!n[6],
      j: o,
      offset: o ? void 0 : r
    };
  })(e) : void 0;
}
function ko(t) {
  const e = Rd.exec(t);
  return e ? ((n) => ({
    isoYear: ua(n),
    isoMonth: parseInt(n[4]),
    isoDay: 1,
    ...Er(n[5])
  }))(e) : void 0;
}
function Yo(t) {
  const e = Nd.exec(t);
  return e ? ((n) => ({
    isoYear: kt,
    isoMonth: parseInt(n[1]),
    isoDay: parseInt(n[2]),
    ...Er(n[3])
  }))(e) : void 0;
}
function Ao(t, e) {
  const n = _d.exec(t);
  return n ? ((r, o) => {
    const i = r[4] || r[5];
    if (o && i)
      throw new RangeError(xt(i));
    return ((s) => {
      if (Math.abs(s) >= x)
        throw new RangeError(Fl);
      return s;
    })((_e(r[2]) * Or + _e(r[3]) * Tr + _e(r[4]) * Dt + Zo(r[5] || "")) * jo(r[1]));
  })(n, e) : void 0;
}
function ua(t) {
  const e = jo(t[1]), n = parseInt(t[2] || t[3]);
  if (e < 0 && !n)
    throw new RangeError(xt(-0));
  return e * n;
}
function la(t) {
  const e = _e(t[3]);
  return {
    ...sr(Zo(t[4] || ""))[0],
    isoHour: _e(t[1]),
    isoMinute: _e(t[2]),
    isoSecond: e === 60 ? 59 : e
  };
}
function Er(t) {
  let e, n;
  const r = [];
  if (t.replace(Pd, (o, i, s) => {
    const a = !!i, [c, u] = s.split("=").reverse();
    if (u) {
      if (u === "u-ca")
        r.push(c), e || (e = a);
      else if (a || /[A-Z]/.test(u))
        throw new RangeError(xt(o));
    } else {
      if (n)
        throw new RangeError(xt(o));
      n = c;
    }
    return "";
  }), r.length > 1 && e)
    throw new RangeError(xt(t));
  return {
    timeZone: n,
    calendar: r[0] || I
  };
}
function Zo(t) {
  return parseInt(t.padEnd(9, "0"));
}
function Ve(t) {
  return new RegExp(`^${t}$`, "i");
}
function jo(t) {
  return t && t !== "+" ? -1 : 1;
}
function _e(t) {
  return t === void 0 ? 0 : parseInt(t);
}
function vu(t) {
  return Bo(V(t));
}
function Bo(t) {
  const e = Lo(t);
  return typeof e == "number" ? bn(e) : e ? ((n) => {
    if (Yd.test(n))
      throw new RangeError(La(n));
    if (kd.test(n))
      throw new RangeError(Pl);
    return n.toLowerCase().split("/").map((r, o) => (r.length <= 3 || /\d/.test(r)) && !/etc|yap/.test(r) ? r.toUpperCase() : r.replace(/baja|dumont|[a-z]+/g, (i, s) => i.length <= 2 && !o || i === "in" || i === "chat" ? i.toUpperCase() : i.length > 2 || !s ? Fi(i).replace(/island|noronha|murdo|rivadavia|urville/, Fi) : i)).join("/");
  })(t) : De;
}
function es(t) {
  const e = Lo(t);
  return typeof e == "number" ? e : e ? e.resolvedOptions().timeZone : De;
}
function Lo(t) {
  const e = Ao(t = t.toUpperCase(), 1);
  return e !== void 0 ? e : t !== De ? xd(t) : void 0;
}
function da(t, e) {
  return ut(t.epochNanoseconds, e.epochNanoseconds);
}
function fa(t, e) {
  return ut(t.epochNanoseconds, e.epochNanoseconds);
}
function wu(t, e, n, r, o, i) {
  const s = t(Nt(i).relativeTo), a = Math.max(ve(r), ve(o));
  if (Ds(O, r, o))
    return 0;
  if (hn(a, s))
    return ut(L(r), L(o));
  if (!s)
    throw new RangeError(Ir);
  const [c, u, l] = vr(e, n, s), d = zo(l), f = wr(l);
  return ut(d(f(u, c, r)), d(f(u, c, o)));
}
function ha(t, e) {
  return Ge(t, e) || $o(t, e);
}
function Ge(t, e) {
  return Ht(X(t), X(e));
}
function $o(t, e) {
  return Ht(Qt(t), Qt(e));
}
function yu(t, e) {
  return !da(t, e);
}
function Eu(t, e) {
  return !fa(t, e) && !!ma(t.timeZone, e.timeZone) && t.calendar === e.calendar;
}
function bu(t, e) {
  return !ha(t, e) && t.calendar === e.calendar;
}
function Su(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Mu(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Du(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Iu(t, e) {
  return !$o(t, e);
}
function ma(t, e) {
  if (t === e)
    return 1;
  try {
    return es(t) === es(e);
  } catch {
  }
}
function ns(t, e, n, r) {
  const o = $e(t, r, 3, 5), i = br(e.epochNanoseconds, n.epochNanoseconds, ...o);
  return j(t ? K(i) : i);
}
function rs(t, e, n, r, o, i) {
  const s = Mr(r.calendar, o.calendar), [a, c, u, l] = $e(n, i, 5), d = r.epochNanoseconds, f = o.epochNanoseconds, h = ut(f, d);
  let m;
  if (h)
    if (a < 6)
      m = br(d, f, a, c, u, l);
    else {
      const g = e(((v, w) => {
        if (!ma(v, w))
          throw new RangeError($a);
        return v;
      })(r.timeZone, o.timeZone)), p = t(s);
      m = ga(p, g, r, o, h, a, i), m = hr(m, f, a, c, u, l, p, r, Ws, D(No, g));
    }
  else
    m = $;
  return j(n ? K(m) : m);
}
function os(t, e, n, r, o) {
  const i = Mr(n.calendar, r.calendar), [s, a, c, u] = $e(e, o, 6), l = B(n), d = B(r), f = ut(d, l);
  let h;
  if (f)
    if (s <= 6)
      h = br(l, d, s, a, c, u);
    else {
      const m = t(i);
      h = va(m, n, r, f, s, o), h = hr(h, d, s, a, c, u, m, n, B, Co);
    }
  else
    h = $;
  return j(e ? K(h) : h);
}
function is(t, e, n, r, o) {
  const i = Mr(n.calendar, r.calendar);
  return pa(e, () => t(i), n, r, ...$e(e, o, 6, 9, 6));
}
function ss(t, e, n, r, o) {
  const i = Mr(n.calendar, r.calendar), s = $e(e, o, 9, 9, 8), a = t(i), c = fn(a, n), u = fn(a, r);
  return c.isoYear === u.isoYear && c.isoMonth === u.isoMonth && c.isoDay === u.isoDay ? j($) : pa(e, () => a, ht(c), ht(u), ...s, 8);
}
function pa(t, e, n, r, o, i, s, a, c = 6) {
  const u = B(n), l = B(r);
  if (u === void 0 || l === void 0)
    throw new RangeError(le);
  let d;
  if (ut(l, u))
    if (o === 6)
      d = br(u, l, o, i, s, a);
    else {
      const f = e();
      d = f.N(n, r, o), i === c && s === 1 || (d = hr(d, l, o, i, s, a, f, n, B, gr));
    }
  else
    d = $;
  return j(t ? K(d) : d);
}
function as(t, e, n, r) {
  const [o, i, s, a] = $e(t, r, 5, 5), c = te(Uo(e, n), En(i, s), a), u = {
    ...$,
    ...yr(c, o)
  };
  return j(t ? K(u) : u);
}
function Tu(t, e, n, r, o, i) {
  const s = ut(r.epochNanoseconds, n.epochNanoseconds);
  return s ? o < 6 ? wa(n.epochNanoseconds, r.epochNanoseconds, o) : ga(e, t, n, r, s, o, i) : $;
}
function Ou(t, e, n, r, o) {
  const i = B(e), s = B(n), a = ut(s, i);
  return a ? r <= 6 ? wa(i, s, r) : va(t, e, n, a, r, o) : $;
}
function ga(t, e, n, r, o, i, s) {
  const [a, c, u] = ((f, h, m, g) => {
    function p() {
      return C = {
        ...Ee(y, M++ * -g),
        ...w
      }, z = Sn(f, C), ut(E, z) === -g;
    }
    const v = dt(h, f), w = pt(wt, v), y = dt(m, f), E = m.epochNanoseconds;
    let M = 0;
    const N = Uo(v, y);
    let C, z;
    if (Math.sign(N) === -g && M++, p() && (g === -1 || p()))
      throw new RangeError(qe);
    const _ = Tt(It(z, E));
    return [v, C, _];
  })(e, n, r, o);
  var l, d;
  return {
    ...i === 6 ? (l = a, d = c, {
      ...$,
      days: ya(l, d)
    }) : t.N(a, c, i, s),
    ...yr(u)
  };
}
function va(t, e, n, r, o, i) {
  const [s, a, c] = ((u, l, d) => {
    let f = l, h = Uo(u, l);
    return Math.sign(h) === -d && (f = Ee(l, -d), h += x * d), [u, f, h];
  })(e, n, r);
  return {
    ...t.N(s, a, o, i),
    ...yr(c)
  };
}
function br(t, e, n, r, o, i) {
  return {
    ...$,
    ...We(mr(It(t, e), r, o, i), n)
  };
}
function wa(t, e, n) {
  return {
    ...$,
    ...We(It(t, e), n)
  };
}
function ya(t, e) {
  return Sr(X(t), X(e));
}
function Sr(t, e) {
  return Math.trunc((e - t) / nt);
}
function Uo(t, e) {
  return Qt(e) - Qt(t);
}
function Mr(t, e) {
  if (t !== e)
    throw new RangeError(Ba);
  return t;
}
function Ea(t) {
  return this.m(t)[0];
}
function ba(t) {
  return this.m(t)[1];
}
function Wo(t) {
  const [e] = this.v(t);
  return Sr(this.p(e), X(t)) + 1;
}
function Vo(t) {
  const e = Ad.exec(t);
  if (!e)
    throw new RangeError(zl(t));
  return [parseInt(e[1]), !!e[2]];
}
function Mn(t, e) {
  return "M" + mt(t) + (e ? "L" : "");
}
function Kn(t, e, n) {
  return t + (e || n && t >= n ? 1 : 0);
}
function Go(t, e) {
  return t - (e && t >= e ? 1 : 0);
}
function Sa(t, e) {
  return (e + t) * (Math.sign(e) || 1) || 0;
}
function $r(t) {
  return Ka[Da(t)];
}
function Ma(t) {
  return ql[Da(t)];
}
function Da(t) {
  return we(t.id || I);
}
function Ru(t) {
  function e(o) {
    return ((i, s) => ({
      ...Ia(i, s),
      o: i.month,
      day: parseInt(i.day)
    }))(mo(n, o), r);
  }
  const n = pi(t), r = we(t);
  return {
    id: t,
    h: Nu(e),
    l: Cu(e)
  };
}
function Nu(t) {
  return ct((e) => {
    const n = X(e);
    return t(n);
  }, WeakMap);
}
function Cu(t) {
  const e = t(0).year - id;
  return ct((n) => {
    let r, o = je(n - e), i = 0;
    const s = [], a = [];
    do
      o += 400 * nt;
    while ((r = t(o)).year <= n);
    do
      if (o += (1 - r.day) * nt, r.year === n && (s.push(o), a.push(r.o)), o -= nt, ++i > 100 || o < -864e13)
        throw new RangeError(qe);
    while ((r = t(o)).year >= n);
    return {
      i: s.reverse(),
      u: Ua(a.reverse())
    };
  });
}
function Ia(t, e) {
  let n, r, o = Ta(t);
  if (t.era) {
    const i = Ka[e], s = Qa[e] || {};
    i !== void 0 && (n = e === "islamic" ? "ah" : t.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n === "ad" || n === "a" ? n = "ce" : n === "beforeroc" && (n = "broc"), n = s[n] || n, r = o, o = Sa(r, i[n] || 0));
  }
  return {
    era: n,
    eraYear: r,
    year: o
  };
}
function Ta(t) {
  return parseInt(t.relatedYear || t.year);
}
function Qn(t) {
  const { year: e, o: n, day: r } = this.h(t), { u: o } = this.l(e);
  return [e, o[n] + 1, r];
}
function mn(t, e = 1, n = 1) {
  return this.l(t).i[e - 1] + (n - 1) * nt;
}
function Oa(t, e) {
  const n = jn.call(this, t);
  return [Go(e, n), n === e];
}
function jn(t) {
  const e = us(this, t), n = us(this, t - 1), r = e.length;
  if (r > n.length) {
    const o = Ma(this);
    if (o < 0)
      return -o;
    for (let i = 0; i < r; i++)
      if (e[i] !== n[i])
        return i + 1;
  }
}
function kn(t) {
  return Sr(mn.call(this, t), mn.call(this, t + 1));
}
function cs(t, e) {
  const { i: n } = this.l(t);
  let r = e + 1, o = n;
  return r > n.length && (r = 1, o = this.l(t + 1).i), Sr(n[e - 1], o[r - 1]);
}
function Yn(t) {
  return this.l(t).i.length;
}
function Ra(t) {
  const e = this.h(t);
  return [e.era, e.eraYear];
}
function us(t, e) {
  return Object.keys(t.l(e).u);
}
function Dn(t) {
  return Dr(V(t));
}
function Dr(t) {
  if ((t = t.toLowerCase()) !== I && t !== He) {
    const e = pi(t).resolvedOptions().calendar;
    if (we(t) !== we(e))
      throw new RangeError(ja(t));
    return e;
  }
  return t;
}
function we(t) {
  return t === "islamicc" && (t = "islamic"), t.split("-")[0];
}
function Na(t, e) {
  return (n) => n === I ? t : n === He || n === ne ? Object.assign(Object.create(t), {
    id: n
  }) : Object.assign(Object.create(e), Zd(n));
}
function zu(t, e, n, r) {
  const o = ae(n, r, $t, [], qa);
  if (o.timeZone !== void 0) {
    const i = n.F(o), s = In(o), a = t(o.timeZone);
    return {
      epochNanoseconds: Ue(e(a), {
        ...i,
        ...s
      }, o.offset !== void 0 ? Se(o.offset) : void 0),
      timeZone: a
    };
  }
  return {
    ...n.F(o),
    ...ot
  };
}
function _u(t, e, n, r, o, i) {
  const s = ae(n, o, $t, Va, qa), a = t(s.timeZone), [c, u, l] = ur(i), d = n.F(s, fr(c)), f = In(s, c);
  return gt(Ue(e(a), {
    ...d,
    ...f
  }, s.offset !== void 0 ? Se(s.offset) : void 0, u, l), a, r);
}
function Pu(t, e, n) {
  const r = ae(t, e, $t, [], Lt), o = T(n);
  return vt(rt({
    ...t.F(r, fr(o)),
    ...In(r, o)
  }));
}
function Fu(t, e, n, r = []) {
  const o = ae(t, e, $t, r);
  return t.F(o, n);
}
function xu(t, e, n, r) {
  const o = ae(t, e, ti, r);
  return t.K(o, n);
}
function ku(t, e, n, r) {
  const o = ae(t, n, $t, On);
  return e && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = kt), t._(o, r);
}
function Yu(t, e) {
  return Ct(In(lt(t, Gr, [], 1), T(e)));
}
function Au(t) {
  const e = lt(t, ei);
  return j(be({
    ...$,
    ...e
  }));
}
function ae(t, e, n, r = [], o = []) {
  return lt(e, [...t.fields(n), ...o].sort(), r);
}
function lt(t, e, n, r = !n) {
  const o = {};
  let i, s = 0;
  for (const a of e) {
    if (a === i)
      throw new RangeError(Ml(a));
    if (a === "constructor" || a === "__proto__")
      throw new RangeError(Sl(a));
    let c = t[a];
    if (c !== void 0)
      s = 1, ls[a] && (c = ls[a](c, a)), o[a] = c;
    else if (n) {
      if (n.includes(a))
        throw new TypeError(Ho(a));
      o[a] = Ja[a];
    }
    i = a;
  }
  if (r && !s)
    throw new TypeError(Ya(e));
  return o;
}
function In(t, e) {
  return Le(gi({
    ...Ja,
    ...t
  }), e);
}
function Zu(t, e, n, r, o) {
  const { calendar: i, timeZone: s } = n, a = t(i), c = e(s), u = [...a.fields($t), ...Ga].sort(), l = ((v) => {
    const w = dt(v, S), y = bn(w.offsetNanoseconds), E = Cr(v.calendar), [M, N, C] = E.v(w), [z, _] = E.q(M, N), zt = Mn(z, _);
    return {
      ...Gd(w),
      year: M,
      monthCode: zt,
      day: C,
      offset: y
    };
  })(n), d = lt(r, u), f = a.k(l, d), h = {
    ...l,
    ...d
  }, [m, g, p] = ur(o, 2);
  return gt(Ue(c, {
    ...a.F(f, fr(m)),
    ...Le(gi(h), m)
  }, Se(h.offset), g, p), s, i);
}
function ju(t, e, n, r) {
  const o = t(e.calendar), i = [...o.fields($t), ...Lt].sort(), s = {
    ...za(a = e),
    hour: a.isoHour,
    minute: a.isoMinute,
    second: a.isoSecond,
    millisecond: a.isoMillisecond,
    microsecond: a.isoMicrosecond,
    nanosecond: a.isoNanosecond
  };
  var a;
  const c = lt(n, i), u = T(r), l = o.k(s, c), d = {
    ...s,
    ...c
  };
  return vt(rt({
    ...o.F(l, fr(u)),
    ...Le(gi(d), u)
  }));
}
function Bu(t, e, n, r) {
  const o = t(e.calendar), i = o.fields($t).sort(), s = za(e), a = lt(n, i), c = o.k(s, a);
  return o.F(c, r);
}
function Lu(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(ti).sort(), s = ((u) => {
    const l = Cr(u.calendar), [d, f] = l.v(u), [h, m] = l.q(d, f);
    return {
      year: d,
      monthCode: Mn(h, m)
    };
  })(e), a = lt(n, i), c = o.k(s, a);
  return o.K(c, r);
}
function $u(t, e, n, r) {
  const o = t(e.calendar), i = o.fields($t).sort(), s = ((u) => {
    const l = Cr(u.calendar), [d, f, h] = l.v(u), [m, g] = l.q(d, f);
    return {
      monthCode: Mn(m, g),
      day: h
    };
  })(e), a = lt(n, i), c = o.k(s, a);
  return o._(c, r);
}
function Uu(t, e, n) {
  return Ct(((r, o, i) => In({
    ...pt(Gr, r),
    ...lt(o, Gr)
  }, T(i)))(t, e, n));
}
function Wu(t, e) {
  return j((n = t, r = e, be({
    ...n,
    ...lt(r, ei)
  })));
  var n, r;
}
function Ca(t, e, n, r, o) {
  e = pt(n = t.fields(n), e), r = lt(r, o = t.fields(o), []);
  let i = t.k(e, r);
  return i = lt(i, [...n, ...o].sort(), []), t.F(i);
}
function Pr(t, e) {
  const n = $r(t), r = Qa[t.id || ""] || {};
  let { era: o, eraYear: i, year: s } = e;
  if (o !== void 0 || i !== void 0) {
    if (o === void 0 || i === void 0)
      throw new TypeError(Ol);
    if (!n)
      throw new RangeError(Tl);
    const a = n[r[o] || o];
    if (a === void 0)
      throw new RangeError(Nl(o));
    const c = Sa(i, a);
    if (s !== void 0 && s !== c)
      throw new RangeError(Rl);
    s = c;
  } else if (s === void 0)
    throw new TypeError(Cl(n));
  return s;
}
function An(t, e, n, r) {
  let { month: o, monthCode: i } = e;
  if (i !== void 0) {
    const s = ((a, c, u, l) => {
      const d = a.L(u), [f, h] = Vo(c);
      let m = Kn(f, h, d);
      if (h) {
        const g = Ma(a);
        if (g === void 0)
          throw new RangeError(en);
        if (g > 0) {
          if (m > g)
            throw new RangeError(en);
          if (d === void 0) {
            if (l === 1)
              throw new RangeError(en);
            m--;
          }
        } else {
          if (m !== -g)
            throw new RangeError(en);
          if (d === void 0 && l === 1)
            throw new RangeError(en);
        }
      }
      return m;
    })(t, i, n, r);
    if (o !== void 0 && o !== s)
      throw new RangeError(_l);
    o = s, r = 1;
  } else if (o === void 0)
    throw new TypeError(Za);
  return Yt("month", o, 1, t.B(n), r);
}
function Fr(t, e, n, r, o) {
  return tt(e, "day", 1, t.U(r, n), o);
}
function xr(t, e, n, r) {
  let o = 0;
  const i = [];
  for (const s of n)
    e[s] !== void 0 ? o = 1 : i.push(s);
  if (Object.assign(t, e), o)
    for (const s of r || i)
      delete t[s];
}
function za(t) {
  const e = Cr(t.calendar), [n, r, o] = e.v(t), [i, s] = e.q(n, r);
  return {
    year: n,
    monthCode: Mn(i, s),
    day: o
  };
}
function Vu(t) {
  return Zt(Rt(uo(so(t))));
}
function Gu(t, e, n, r, o = I) {
  return gt(Rt(uo(so(n))), e(r), t(o));
}
function qu(t, e, n, r, o = 0, i = 0, s = 0, a = 0, c = 0, u = 0, l = I) {
  return vt(rt(cr(At(H, Ze(Rr, [e, n, r, o, i, s, a, c, u])))), t(l));
}
function Hu(t, e, n, r, o = I) {
  return jt(ht(ye(At(H, {
    isoYear: e,
    isoMonth: n,
    isoDay: r
  }))), t(o));
}
function Xu(t, e, n, r = I, o = 1) {
  const i = H(e), s = H(n), a = t(r);
  return dn(fo(ye({
    isoYear: i,
    isoMonth: s,
    isoDay: H(o)
  })), a);
}
function Ju(t, e, n, r = I, o = kt) {
  const i = H(e), s = H(n), a = t(r);
  return Hn(ht(ye({
    isoYear: H(o),
    isoMonth: i,
    isoDay: s
  })), a);
}
function Ku(t = 0, e = 0, n = 0, r = 0, o = 0, i = 0) {
  return Ct(Le(At(H, Ze(wt, [t, e, n, r, o, i])), 1));
}
function Qu(t = 0, e = 0, n = 0, r = 0, o = 0, i = 0, s = 0, a = 0, c = 0, u = 0) {
  return j(be(At(ao, Ze(O, [t, e, n, r, o, i, s, a, c, u]))));
}
function tl(t, e, n = I) {
  return gt(t.epochNanoseconds, e, n);
}
function el(t) {
  return Zt(t.epochNanoseconds);
}
function _a(t, e) {
  return vt(dt(e, t));
}
function Pa(t, e) {
  return jt(dt(e, t));
}
function Fa(t, e) {
  return Ct(dt(e, t));
}
function nl(t, e, n, r) {
  const o = ((i, s, a, c) => {
    const u = ((l) => cc(Nt(l)))(c);
    return Sn(i(s), a, u);
  })(t, n, e, r);
  return gt(Rt(o), n, e.calendar);
}
function rl(t, e, n, r, o) {
  const i = t(o.timeZone), s = o.plainTime, a = s !== void 0 ? e(s) : void 0, c = n(i);
  let u;
  return u = a ? Sn(c, {
    ...r,
    ...a
  }) : ee(c, {
    ...r,
    ...ot
  }), gt(u, i, r.calendar);
}
function ol(t, e = ot) {
  return vt(rt({
    ...t,
    ...e
  }));
}
function il(t, e, n) {
  return ((r, o) => {
    const i = ae(r, o, Ha);
    return r.K(i, void 0);
  })(t(e.calendar), n);
}
function sl(t, e, n) {
  return ((r, o) => {
    const i = ae(r, o, Xa);
    return r._(i);
  })(t(e.calendar), n);
}
function al(t, e, n, r) {
  return ((o, i, s) => Ca(o, i, Ha, yn(s), On))(t(e.calendar), n, r);
}
function cl(t, e, n, r) {
  return ((o, i, s) => Ca(o, i, Xa, yn(s), Jo))(t(e.calendar), n, r);
}
function ul(t) {
  return Zt(Rt(Gn(ao(t), Bt)));
}
function ll(t) {
  return Zt(Rt(uo(so(t))));
}
function Me(t, e, n) {
  const r = new Set(n);
  return (o, i) => {
    const s = n && Pi(o, n);
    if (!Pi(o = ((a, c) => {
      const u = {};
      for (const l in c)
        a.has(l) || (u[l] = c[l]);
      return u;
    })(r, o), t)) {
      if (i && s)
        throw new TypeError("Invalid formatting options");
      o = {
        ...e,
        ...o
      };
    }
    return n && (o.timeZone = De, ["full", "long"].includes(o.J) && (o.J = "medium")), o;
  };
}
function ce(t, e = xa, n = 0) {
  const [r, , , o] = t;
  return (i, s = hf, ...a) => {
    const c = e(o && o(...a), i, s, r, n), u = c.resolvedOptions();
    return [c, ...dl(t, u, a)];
  };
}
function xa(t, e, n, r, o) {
  if (n = r(n, o), t) {
    if (n.timeZone !== void 0)
      throw new TypeError(Ul);
    n.timeZone = t;
  }
  return new Xt(e, n);
}
function dl(t, e, n) {
  const [, r, o] = t;
  return n.map((i) => (i.calendar && ((s, a, c) => {
    if ((c || s !== I) && s !== a)
      throw new RangeError(Ba);
  })(i.calendar, e.calendar, o), r(i, e)));
}
function fl(t, e, n) {
  const r = e.timeZone, o = t(r), i = {
    ...dt(e, o),
    ...n || ot
  };
  let s;
  return s = n ? Ue(o, i, i.offsetNanoseconds, 2) : ee(o, i), gt(s, r, e.calendar);
}
function hl(t, e = ot) {
  return vt(rt({
    ...t,
    ...e
  }));
}
function qo(t, e) {
  return {
    ...t,
    calendar: e
  };
}
function ml(t, e) {
  return {
    ...t,
    timeZone: e
  };
}
function kr(t) {
  const e = Ur();
  return Be(e, t.R(e));
}
function Ur() {
  return Gn(Date.now(), Bt);
}
function tn() {
  return ds || (ds = new Xt().resolvedOptions().timeZone);
}
const pl = (t, e) => `Non-integer ${t}: ${e}`, gl = (t, e) => `Non-positive ${t}: ${e}`, vl = (t, e) => `Non-finite ${t}: ${e}`, wl = (t) => `Cannot convert bigint to ${t}`, yl = (t) => `Invalid bigint: ${t}`, El = "Cannot convert Symbol to string", bl = "Invalid object", ka = (t, e, n, r, o) => o ? ka(t, o[e], o[n], o[r]) : ue(t, e) + `; must be between ${n}-${r}`, ue = (t, e) => `Invalid ${t}: ${e}`, Ho = (t) => `Missing ${t}`, Sl = (t) => `Invalid field ${t}`, Ml = (t) => `Duplicate field ${t}`, Ya = (t) => "No valid fields: " + t.join(), Dl = "Invalid bag", Aa = (t, e, n) => ue(t, e) + "; must be " + Object.keys(n).join(), Il = "Cannot use valueOf", Wr = "Invalid calling context", Tl = "Forbidden era/eraYear", Ol = "Mismatching era/eraYear", Rl = "Mismatching year/eraYear", Nl = (t) => `Invalid era: ${t}`, Cl = (t) => "Missing year" + (t ? "/era/eraYear" : ""), zl = (t) => `Invalid monthCode: ${t}`, _l = "Mismatching month/monthCode", Za = "Missing month/monthCode", en = "Invalid leap month", qe = "Invalid protocol results", ja = (t) => ue("Calendar", t), Ba = "Mismatching Calendars", La = (t) => ue("TimeZone", t), $a = "Mismatching TimeZones", Pl = "Forbidden ICU TimeZone", Fl = "Out-of-bounds offset", xl = "Out-of-bounds TimeZone gap", kl = "Invalid TimeZone offset", Yl = "Ambiguous offset", le = "Out-of-bounds date", Al = "Out-of-bounds duration", Zl = "Cannot mix duration signs", Ir = "Missing relativeTo", jl = "Cannot use large units", Bl = "Required smallestUnit or largestUnit", Ll = "smallestUnit > largestUnit", et = (t) => `Cannot parse: ${t}`, xt = (t) => `Invalid substring: ${t}`, $l = (t) => `Cannot format ${t}`, Yr = "Mismatching types for formatting", Ul = "Cannot specify TimeZone", Ua = /* @__PURE__ */ D(rr, (t, e) => e), Ye = /* @__PURE__ */ D(rr, (t, e, n) => n), mt = /* @__PURE__ */ D(Vn, 2), Vr = {
  nanosecond: 0,
  microsecond: 1,
  millisecond: 2,
  second: 3,
  minute: 4,
  hour: 5,
  day: 6,
  week: 7,
  month: 8,
  year: 9
}, Xo = /* @__PURE__ */ Object.keys(Vr), nt = 864e5, Wa = 1e3, Tn = 1e3, Bt = 1e6, Dt = 1e9, Tr = 6e10, Or = 36e11, x = 864e11, Ot = [1, Tn, Bt, Dt, Tr, Or, x], Lt = /* @__PURE__ */ Xo.slice(0, 6), Gr = /* @__PURE__ */ wn(Lt), Wl = ["offset"], Va = ["timeZone"], Ga = /* @__PURE__ */ Lt.concat(Wl), qa = /* @__PURE__ */ Ga.concat(Va), qr = ["era", "eraYear"], Vl = /* @__PURE__ */ qr.concat(["year"]), Jo = ["year"], Ko = ["monthCode"], Qo = /* @__PURE__ */ ["month"].concat(Ko), On = ["day"], ti = /* @__PURE__ */ Qo.concat(Jo), Ha = /* @__PURE__ */ Ko.concat(Jo), $t = /* @__PURE__ */ On.concat(ti), Gl = /* @__PURE__ */ On.concat(Qo), Xa = /* @__PURE__ */ On.concat(Ko), Ja = /* @__PURE__ */ Ye(Lt, 0), I = "iso8601", He = "gregory", ne = "japanese", Ka = {
  [He]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [ne]: {
    "japanese-inverse": -1,
    japanese: 0,
    meiji: 1867,
    taisho: 1911,
    showa: 1925,
    heisei: 1988,
    reiwa: 2018
  },
  ethiopic: {
    ethioaa: 0,
    ethiopic: 5500
  },
  coptic: {
    "coptic-inverse": -1,
    coptic: 0
  },
  roc: {
    "roc-inverse": -1,
    roc: 0
  },
  buddhist: {
    be: 0
  },
  islamic: {
    ah: 0
  },
  indian: {
    saka: 0
  },
  persian: {
    ap: 0
  }
}, Qa = {
  [He]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [ne]: {
    bce: "japanese-inverse",
    ce: "japanese"
  },
  ethiopic: {
    era0: "ethioaa",
    era1: "ethiopic"
  },
  coptic: {
    era0: "coptic-inverse",
    era1: "coptic"
  },
  roc: {
    broc: "roc-inverse",
    minguo: "roc"
  }
}, ql = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, V = /* @__PURE__ */ D(oo, "string"), Hl = /* @__PURE__ */ D(oo, "boolean"), Xl = /* @__PURE__ */ D(oo, "number"), O = /* @__PURE__ */ Xo.map((t) => t + "s"), ei = /* @__PURE__ */ wn(O), Jl = /* @__PURE__ */ O.slice(0, 6), tc = /* @__PURE__ */ O.slice(6), Kl = /* @__PURE__ */ tc.slice(1), Ql = /* @__PURE__ */ Ua(O), $ = /* @__PURE__ */ Ye(O, 0), ni = /* @__PURE__ */ Ye(Jl, 0), ri = /* @__PURE__ */ D(Is, O), wt = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], oi = ["isoDay", "isoMonth", "isoYear"], Rr = /* @__PURE__ */ wt.concat(oi), ii = /* @__PURE__ */ wn(oi), ec = /* @__PURE__ */ wn(wt), td = /* @__PURE__ */ wn(Rr), ot = /* @__PURE__ */ Ye(ec, 0), ed = /* @__PURE__ */ D(Is, Rr), nc = 1e8, nd = nc * nt, rd = [nc, 0], od = [-1e8, 0], pn = 275760, gn = -271821, Xt = Intl.DateTimeFormat, rc = "en-GB", id = 1970, kt = 1972, Ut = 12, sd = /* @__PURE__ */ je(1868, 9, 8), ad = /* @__PURE__ */ ct(Bc, WeakMap), tr = "smallestUnit", Hr = "unit", sn = "roundingIncrement", Ar = "fractionalSecondDigits", oc = "relativeTo", Zr = "direction", ic = {
  constrain: 0,
  reject: 1
}, cd = /* @__PURE__ */ Object.keys(ic), ud = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, ld = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, dd = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, fd = {
  auto: 0,
  never: 1,
  critical: 2
}, hd = {
  auto: 0,
  never: 1
}, md = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, pd = {
  previous: -1,
  next: 1
}, Rn = /* @__PURE__ */ D(bo, tr), sc = /* @__PURE__ */ D(bo, "largestUnit"), gd = /* @__PURE__ */ D(bo, Hr), ac = /* @__PURE__ */ D(oe, "overflow", ic), cc = /* @__PURE__ */ D(oe, "disambiguation", ud), vd = /* @__PURE__ */ D(oe, "offset", ld), si = /* @__PURE__ */ D(oe, "calendarName", dd), wd = /* @__PURE__ */ D(oe, "timeZoneName", fd), yd = /* @__PURE__ */ D(oe, "offset", hd), Nn = /* @__PURE__ */ D(oe, "roundingMode", md), ai = "PlainYearMonth", ci = "PlainMonthDay", Cn = "PlainDate", Xe = "PlainDateTime", ui = "PlainTime", de = "ZonedDateTime", li = "Instant", di = "Duration", Ed = [Math.floor, (t) => xn(t) ? Math.floor(t) : Math.round(t), Math.ceil, (t) => xn(t) ? Math.ceil(t) : Math.round(t), Math.trunc, (t) => xn(t) ? Math.trunc(t) || 0 : Math.round(t), (t) => t < 0 ? Math.floor(t) : Math.ceil(t), (t) => Math.sign(t) * Math.round(Math.abs(t)) || 0, (t) => xn(t) ? (t = Math.trunc(t) || 0) + t % 2 : Math.round(t)], De = "UTC", Bn = 5184e3, bd = /* @__PURE__ */ qn(1847), Sd = /* @__PURE__ */ qn(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), Md = /0+$/, dt = /* @__PURE__ */ ct(nu, WeakMap), Dd = 2 ** 32 - 1, S = /* @__PURE__ */ ct((t) => {
  const e = Lo(t);
  return typeof e == "object" ? new Td(e) : new Id(e || 0);
});
class Id {
  constructor(e) {
    this.$ = e;
  }
  R() {
    return this.$;
  }
  I(e) {
    return ((n) => {
      const r = B({
        ...n,
        ...ot
      });
      if (!r || Math.abs(r[0]) > 1e8)
        throw new RangeError(le);
    })(e), [ho(e, this.$)];
  }
  O() {
  }
}
class Td {
  constructor(e) {
    this.nn = ((n) => {
      function r(u) {
        const l = ln(u, a, c), [d, f] = ts(l), h = i(d), m = i(f);
        return h === m ? h : o(s(d, f), h, m, u);
      }
      function o(u, l, d, f) {
        let h, m;
        for (; (f === void 0 || (h = f < u[0] ? l : f >= u[1] ? d : void 0) === void 0) && (m = u[1] - u[0]); ) {
          const g = u[0] + Math.floor(m / 2);
          n(g) === d ? u[1] = g : u[0] = g + 1;
        }
        return h;
      }
      const i = ct(n), s = ct(su);
      let a = bd, c = Sd;
      return {
        tn(u) {
          const l = r(u - 86400), d = r(u + 86400), f = u - l, h = u - d;
          if (l === d)
            return [f];
          const m = r(f);
          return m === r(h) ? [u - m] : l > d ? [f, h] : [];
        },
        rn: r,
        O(u, l) {
          const d = ln(u, a, c);
          let [f, h] = ts(d);
          const m = Bn * l, g = l < 0 ? () => h > a || (a = d, 0) : () => f < c || (c = d, 0);
          for (; g(); ) {
            const p = i(f), v = i(h);
            if (p !== v) {
              const w = s(f, h);
              o(w, p, v);
              const y = w[0];
              if ((Ht(y, u) || 1) === l)
                return y;
            }
            f += m, h += m;
          }
        }
      };
    })(/* @__PURE__ */ ((n) => (r) => {
      const o = mo(n, r * Wa);
      return qn(Ta(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - r;
    })(e));
  }
  R(e) {
    return this.nn.rn(((n) => ki(n)[0])(e)) * Dt;
  }
  I(e) {
    const [n, r] = [qn((o = e).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * Bt + o.isoMicrosecond * Tn + o.isoNanosecond];
    var o;
    return this.nn.tn(n).map((i) => Rt(ge(Gn(i, Dt), r)));
  }
  O(e, n) {
    const [r, o] = ki(e), i = this.nn.O(r + (n > 0 || o ? 1 : 0), n);
    if (i !== void 0)
      return Gn(i, Dt);
  }
}
const fi = "([+-])", Ln = "(?:[.,](\\d{1,9}))?", uc = `(?:(?:${fi}(\\d{6}))|(\\d{4}))-?(\\d{2})`, hi = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Ln + ")?)?", mi = fi + hi, Od = uc + "-?(\\d{2})(?:[T ]" + hi + "(Z|" + mi + ")?)?", lc = "\\[(!?)([^\\]]*)\\]", Nr = `((?:${lc}){0,9})`, Rd = /* @__PURE__ */ Ve(uc + Nr), Nd = /* @__PURE__ */ Ve("(?:--)?(\\d{2})-?(\\d{2})" + Nr), Cd = /* @__PURE__ */ Ve(Od + Nr), zd = /* @__PURE__ */ Ve("T?" + hi + "(?:" + mi + ")?" + Nr), _d = /* @__PURE__ */ Ve(mi), Pd = /* @__PURE__ */ new RegExp(lc, "g"), Fd = /* @__PURE__ */ Ve(`${fi}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Ln}H)?(?:(\\d+)${Ln}M)?(?:(\\d+)${Ln}S)?)?`), xd = /* @__PURE__ */ ct((t) => new Xt(rc, {
  timeZone: t,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
})), kd = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Yd = /[^\w\/:+-]+/, Ad = /^M(\d{2})(L?)$/, Zd = /* @__PURE__ */ ct(Ru), pi = /* @__PURE__ */ ct((t) => new Xt(rc, {
  calendar: t,
  timeZone: De,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
})), dc = {
  P(t, e, n) {
    const r = T(n);
    let o, { years: i, months: s, weeks: a, days: c } = e;
    if (c += L(e, 5)[0], i || s)
      o = ((u, l, d, f, h) => {
        let [m, g, p] = u.v(l);
        if (d) {
          const [v, w] = u.q(m, g);
          m += d, g = Kn(v, w, u.L(m)), g = Yt("month", g, 1, u.B(m), h);
        }
        return f && ([m, g] = u.un(m, g, f)), p = Yt("day", p, 1, u.U(m, g), h), u.p(m, g, p);
      })(this, t, i, s, r);
    else {
      if (!a && !c)
        return t;
      o = X(t);
    }
    if (o === void 0)
      throw new RangeError(le);
    return o += (7 * a + c) * nt, ht(ar(o));
  },
  N(t, e, n) {
    if (n <= 7) {
      let c = 0, u = ya({
        ...t,
        ...ot
      }, {
        ...e,
        ...ot
      });
      return n === 7 && ([c, u] = Kt(u, 7)), {
        ...$,
        weeks: c,
        days: u
      };
    }
    const r = this.v(t), o = this.v(e);
    let [i, s, a] = ((c, u, l, d, f, h, m) => {
      let g = f - u, p = h - l, v = m - d;
      if (g || p) {
        const w = Math.sign(g || p);
        let y = c.U(f, h), E = 0;
        if (Math.sign(v) === -w) {
          const M = y;
          [f, h] = c.un(f, h, -w), g = f - u, p = h - l, y = c.U(f, h), E = w < 0 ? -M : y;
        }
        if (v = m - Math.min(d, y) + E, g) {
          const [M, N] = c.q(u, l), [C, z] = c.q(f, h);
          if (p = C - M || Number(z) - Number(N), Math.sign(p) === -w) {
            const _ = w < 0 && -c.B(f);
            g = (f -= w) - u, p = h - Kn(M, N, c.L(f)) + (_ || c.B(f));
          }
        }
      }
      return [g, p, v];
    })(this, ...r, ...o);
    return n === 8 && (s += this.cn(i, r[0]), i = 0), {
      ...$,
      years: i,
      months: s,
      days: a
    };
  },
  F(t, e) {
    const n = T(e), r = Pr(this, t), o = An(this, t, r, n), i = Fr(this, t, o, r, n);
    return jt(ht(this.V(r, o, i)), this.id || I);
  },
  K(t, e) {
    const n = T(e), r = Pr(this, t), o = An(this, t, r, n);
    return dn(fo(this.V(r, o, 1)), this.id || I);
  },
  _(t, e) {
    const n = T(e);
    let r, o, i, s = t.eraYear !== void 0 || t.year !== void 0 ? Pr(this, t) : void 0;
    const a = !this.id;
    if (s === void 0 && a && (s = kt), s !== void 0) {
      const d = An(this, t, s, n);
      r = Fr(this, t, d, s, n);
      const f = this.L(s);
      o = Go(d, f), i = d === f;
    } else {
      if (t.monthCode === void 0)
        throw new TypeError(Za);
      if ([o, i] = Vo(t.monthCode), this.id && this.id !== He && this.id !== ne)
        if (this.id && we(this.id) === "coptic" && n === 0) {
          const d = i || o !== 13 ? 30 : 6;
          r = t.day, r = ln(r, 1, d);
        } else if (this.id && we(this.id) === "chinese" && n === 0) {
          const d = !i || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
          r = t.day, r = ln(r, 1, d);
        } else
          r = t.day;
      else
        r = Fr(this, t, An(this, t, kt, n), kt, n);
    }
    const c = this.G(o, i, r);
    if (!c)
      throw new RangeError("Cannot guess year");
    const [u, l] = c;
    return Hn(ht(this.V(u, l, r)), this.id || I);
  },
  fields(t) {
    return $r(this) && t.includes("year") ? [...t, ...qr] : t;
  },
  k(t, e) {
    const n = Object.assign(/* @__PURE__ */ Object.create(null), t);
    return xr(n, e, Qo), $r(this) && (xr(n, e, Vl), this.id === ne && xr(n, e, Gl, qr)), n;
  },
  inLeapYear(t) {
    const [e] = this.v(t);
    return this.sn(e);
  },
  monthsInYear(t) {
    const [e] = this.v(t);
    return this.B(e);
  },
  daysInMonth(t) {
    const [e, n] = this.v(t);
    return this.U(e, n);
  },
  daysInYear(t) {
    const [e] = this.v(t);
    return this.fn(e);
  },
  dayOfYear: Wo,
  era(t) {
    return this.hn(t)[0];
  },
  eraYear(t) {
    return this.hn(t)[1];
  },
  monthCode(t) {
    const [e, n] = this.v(t), [r, o] = this.q(e, n);
    return Mn(r, o);
  },
  dayOfWeek: As,
  daysInWeek() {
    return 7;
  }
}, jd = {
  v: po,
  hn: Zs,
  q: Fs
}, Bd = {
  dayOfYear: Wo,
  v: po,
  p: je
}, Ld = /* @__PURE__ */ Object.assign({}, Bd, {
  weekOfYear: Ea,
  yearOfWeek: ba,
  m(t) {
    function e(h) {
      return (7 - h < r ? 7 : 0) - h;
    }
    function n(h) {
      const m = Ys(f + h), g = h || 1, p = e(on(c + m * g, 7));
      return l = (m + (p - u) * g) / 7;
    }
    const r = this.id ? 1 : 4, o = As(t), i = this.dayOfYear(t), s = on(o - 1, 7), a = i - 1, c = on(s - a, 7), u = e(c);
    let l, d = Math.floor((a - u) / 7) + 1, f = t.isoYear;
    return d ? d > n(0) && (d = 1, f++) : (d = n(-1), f--), [d, f, l];
  }
}), $d = /* @__PURE__ */ Object.assign({}, dc, Ld, {
  v: po,
  hn: Zs,
  q: Fs,
  G(t, e) {
    if (!e)
      return [kt, t];
  },
  sn: go,
  L() {
  },
  B: xs,
  cn: (t) => t * Ut,
  U: ks,
  fn: Ys,
  V: (t, e, n) => ({
    isoYear: t,
    isoMonth: e,
    isoDay: n
  }),
  p: je,
  un: (t, e, n) => (t += or(n, Ut), (e += no(n, Ut)) < 1 ? (t--, e += Ut) : e > Ut && (t++, e -= Ut), [t, e]),
  year(t) {
    return t.isoYear;
  },
  month(t) {
    return t.isoMonth;
  },
  day: (t) => t.isoDay
}), Ud = {
  v: Qn,
  hn: Ra,
  q: Oa
}, Wd = {
  dayOfYear: Wo,
  v: Qn,
  p: mn,
  weekOfYear: Ea,
  yearOfWeek: ba,
  m() {
    return [];
  }
}, Vd = /* @__PURE__ */ Object.assign({}, dc, Wd, {
  v: Qn,
  hn: Ra,
  q: Oa,
  G(t, e, n) {
    const r = this.id && we(this.id) === "chinese" ? ((u, l, d) => {
      if (l)
        switch (u) {
          case 1:
            return 1651;
          case 2:
            return d < 30 ? 1947 : 1765;
          case 3:
            return d < 30 ? 1966 : 1955;
          case 4:
            return d < 30 ? 1963 : 1944;
          case 5:
            return d < 30 ? 1971 : 1952;
          case 6:
            return d < 30 ? 1960 : 1941;
          case 7:
            return d < 30 ? 1968 : 1938;
          case 8:
            return d < 30 ? 1957 : 1718;
          case 9:
            return 1832;
          case 10:
            return 1870;
          case 11:
            return 1814;
          case 12:
            return 1890;
        }
      return 1972;
    })(t, e, n) : kt;
    let [o, i, s] = Qn.call(this, {
      isoYear: r,
      isoMonth: Ut,
      isoDay: 31
    });
    const a = jn.call(this, o), c = i === a;
    (Ht(t, Go(i, a)) || Ht(Number(e), Number(c)) || Ht(n, s)) === 1 && o--;
    for (let u = 0; u < 100; u++) {
      const l = o - u, d = jn.call(this, l), f = Kn(t, e, d);
      if (e === (f === d) && n <= cs.call(this, l, f))
        return [l, f];
    }
  },
  sn(t) {
    const e = kn.call(this, t);
    return e > kn.call(this, t - 1) && e > kn.call(this, t + 1);
  },
  L: jn,
  B: Yn,
  cn(t, e) {
    const n = e + t, r = Math.sign(t), o = r < 0 ? -1 : 0;
    let i = 0;
    for (let s = e; s !== n; s += r)
      i += Yn.call(this, s + o);
    return i;
  },
  U: cs,
  fn: kn,
  V(t, e, n) {
    return ar(mn.call(this, t, e, n));
  },
  p: mn,
  un(t, e, n) {
    if (n) {
      if (e += n, !Number.isSafeInteger(e))
        throw new RangeError(le);
      if (n < 0)
        for (; e < 1; )
          e += Yn.call(this, --t);
      else {
        let r;
        for (; e > (r = Yn.call(this, t)); )
          e -= r, t++;
      }
    }
    return [t, e];
  },
  year(t) {
    return this.h(t).year;
  },
  month(t) {
    const { year: e, o: n } = this.h(t), { u: r } = this.l(e);
    return r[n] + 1;
  },
  day(t) {
    return this.h(t).day;
  }
}), Cr = /* @__PURE__ */ Na(jd, Ud), b = /* @__PURE__ */ Na($d, Vd), ls = {
  era: Zn,
  eraYear: H,
  year: H,
  month: xi,
  monthCode(t) {
    const e = Zn(t);
    return Vo(e), e;
  },
  day: xi,
  .../* @__PURE__ */ Ye(Lt, H),
  .../* @__PURE__ */ Ye(O, ao),
  offset(t) {
    const e = Zn(t);
    return Se(e), e;
  }
}, gi = /* @__PURE__ */ D(Ms, Lt, wt), Gd = /* @__PURE__ */ D(Ms, wt, Lt), Jt = "numeric", zn = ["timeZoneName"], fc = {
  month: Jt,
  day: Jt
}, vi = {
  year: Jt,
  month: Jt
}, wi = /* @__PURE__ */ Object.assign({}, vi, {
  day: Jt
}), yi = {
  hour: Jt,
  minute: Jt,
  second: Jt
}, Ei = /* @__PURE__ */ Object.assign({}, wi, yi), qd = /* @__PURE__ */ Object.assign({}, Ei, {
  timeZoneName: "short"
}), Hd = /* @__PURE__ */ Object.keys(vi), Xd = /* @__PURE__ */ Object.keys(fc), Jd = /* @__PURE__ */ Object.keys(wi), Kd = /* @__PURE__ */ Object.keys(yi), bi = ["dateStyle"], Qd = /* @__PURE__ */ Hd.concat(bi), tf = /* @__PURE__ */ Xd.concat(bi), Si = /* @__PURE__ */ Jd.concat(bi, ["weekday"]), _n = /* @__PURE__ */ Kd.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), Mi = /* @__PURE__ */ Si.concat(_n), ef = /* @__PURE__ */ zn.concat(_n), nf = /* @__PURE__ */ zn.concat(Si), rf = /* @__PURE__ */ zn.concat(["day", "weekday"], _n), of = /* @__PURE__ */ zn.concat(["year", "weekday"], _n), sf = /* @__PURE__ */ Me(Mi, Ei), af = /* @__PURE__ */ Me(Mi, qd), cf = /* @__PURE__ */ Me(Mi, Ei, zn), uf = /* @__PURE__ */ Me(Si, wi, ef), lf = /* @__PURE__ */ Me(_n, yi, nf), df = /* @__PURE__ */ Me(Qd, vi, rf), ff = /* @__PURE__ */ Me(tf, fc, of), hf = {}, hc = new Xt(void 0, {
  calendar: I
}).resolvedOptions().calendar === I, mc = [sf, So], mf = [af, So, 0, (t, e) => {
  const n = t.timeZone;
  if (e && e.timeZone !== n)
    throw new RangeError($a);
  return n;
}], pc = [cf, X], gc = [uf, X], vc = [lf, (t) => Qt(t) / Bt], wc = [df, X, hc], yc = [ff, X, hc];
let ds;
function fe(t, e, n, r, o) {
  function i(...c) {
    if (!(this instanceof i))
      throw new TypeError(Wr);
    ms(this, e(...c));
  }
  function s(c, u) {
    return Object.defineProperties(function(...l) {
      return c.call(this, a(this), ...l);
    }, un(u));
  }
  function a(c) {
    const u = Q(c);
    if (!u || u.branding !== t)
      throw new TypeError(Wr);
    return u;
  }
  return Object.defineProperties(i.prototype, {
    ...Ac(At(s, n)),
    ...Fe(At(s, r)),
    ...eo("Temporal." + t)
  }), Object.defineProperties(i, {
    ...Fe(o),
    ...un(t)
  }), [i, (c) => {
    const u = Object.create(i.prototype);
    return ms(u, c), u;
  }, a];
}
function Je(t) {
  if (Q(t) || t.calendar !== void 0 || t.timeZone !== void 0)
    throw new TypeError(Dl);
  return t;
}
function Pn(t) {
  return Ec(t) || I;
}
function Ec(t) {
  const { calendar: e } = t;
  if (e !== void 0)
    return zr(e);
}
function zr(t) {
  if (J(t)) {
    const { calendar: e } = Q(t) || {};
    if (!e)
      throw new TypeError(ja(t));
    return e;
  }
  return ((e) => Dr(pu(V(e))))(t);
}
function Di(t) {
  const e = {};
  for (const n in t)
    e[n] = (r) => {
      const { calendar: o } = r;
      return b(o)[n](r);
    };
  return e;
}
function he() {
  throw new TypeError(Il);
}
function st(t) {
  if (J(t)) {
    const { timeZone: e } = Q(t) || {};
    if (!e)
      throw new TypeError(La(t));
    return e;
  }
  return ((e) => Bo(gu(V(e))))(t);
}
function Z(t) {
  if (J(t)) {
    const e = Q(t);
    return e && e.branding === di ? e : Au(t);
  }
  return mu(t);
}
function nn(t) {
  if (t !== void 0) {
    if (J(t)) {
      const e = Q(t) || {};
      switch (e.branding) {
        case de:
        case Cn:
          return e;
        case Xe:
          return jt(e);
      }
      const n = Pn(t);
      return {
        ...zu(st, S, b(n), t),
        calendar: n
      };
    }
    return cu(t);
  }
}
function Wt(t, e) {
  if (J(t)) {
    const r = Q(t) || {};
    switch (r.branding) {
      case ui:
        return T(e), r;
      case Xe:
        return T(e), Ct(r);
      case de:
        return T(e), Fa(S, r);
    }
    return Yu(t, e);
  }
  const n = hu(t);
  return T(e), n;
}
function Ii(t) {
  return t === void 0 ? void 0 : Wt(t);
}
function Ie(t, e) {
  if (J(t)) {
    const r = Q(t) || {};
    switch (r.branding) {
      case Xe:
        return T(e), r;
      case Cn:
        return T(e), vt({
          ...r,
          ...ot
        });
      case de:
        return T(e), _a(S, r);
    }
    return Pu(b(Pn(t)), t, e);
  }
  const n = lu(t);
  return T(e), n;
}
function fs(t, e) {
  if (J(t)) {
    const r = Q(t);
    if (r && r.branding === ci)
      return T(e), r;
    const o = Ec(t);
    return ku(b(o || I), !o, t, e);
  }
  const n = fu(b, t);
  return T(e), n;
}
function Te(t, e) {
  if (J(t)) {
    const r = Q(t);
    return r && r.branding === ai ? (T(e), r) : xu(b(Pn(t)), t, e);
  }
  const n = du(b, t);
  return T(e), n;
}
function Oe(t, e) {
  if (J(t)) {
    const r = Q(t) || {};
    switch (r.branding) {
      case Cn:
        return T(e), r;
      case Xe:
        return T(e), jt(r);
      case de:
        return T(e), Pa(S, r);
    }
    return Fu(b(Pn(t)), t, e);
  }
  const n = Fo(t);
  return T(e), n;
}
function Re(t, e) {
  if (J(t)) {
    const n = Q(t);
    if (n && n.branding === de)
      return ur(e), n;
    const r = Pn(t);
    return _u(st, S, b(r), r, t, e);
  }
  return uu(t, e);
}
function hs(t) {
  return At((e) => (n) => e(Xr(n)), t);
}
function Xr(t) {
  return dt(t, S);
}
function Ne(t) {
  if (J(t)) {
    const e = Q(t);
    if (e)
      switch (e.branding) {
        case li:
          return e;
        case de:
          return Zt(e.epochNanoseconds);
      }
  }
  return au(t);
}
function pf() {
  function t(i, s) {
    return new e(i, s);
  }
  function e(i, s = /* @__PURE__ */ Object.create(null)) {
    nr.set(this, ((a, c) => {
      const u = new Xt(a, c), l = u.resolvedOptions(), d = l.locale, f = pt(Object.keys(c), l), h = ct(wf), m = (g, ...p) => {
        if (g) {
          if (p.length !== 2)
            throw new TypeError(Yr);
          for (const E of p)
            if (E === void 0)
              throw new TypeError(Yr);
        }
        g || p[0] !== void 0 || (p = []);
        const v = p.map((E) => Q(E) || Number(E));
        let w, y = 0;
        for (const E of v) {
          const M = typeof E == "object" ? E.branding : void 0;
          if (y++ && M !== w)
            throw new TypeError(Yr);
          w = M;
        }
        return w ? h(w)(d, f, ...v) : [u, ...v];
      };
      return m.X = u, m;
    })(i, s));
  }
  const n = Xt.prototype, r = Object.getOwnPropertyDescriptors(n), o = Object.getOwnPropertyDescriptors(Xt);
  for (const i in r) {
    const s = r[i], a = i.startsWith("format") && gf(i);
    typeof s.value == "function" ? s.value = i === "constructor" ? t : a || vf(i) : a && (s.get = function() {
      if (!nr.has(this))
        throw new TypeError(Wr);
      return (...c) => a.apply(this, c);
    }, Object.defineProperties(s.get, un(`get ${i}`)));
  }
  return o.prototype.value = e.prototype = Object.create({}, r), Object.defineProperties(t, o), t;
}
function gf(t) {
  return Object.defineProperties(function(...e) {
    const n = nr.get(this), [r, ...o] = n(t.includes("Range"), ...e);
    return r[t](...o);
  }, un(t));
}
function vf(t) {
  return Object.defineProperties(function(...e) {
    return nr.get(this).X[t](...e);
  }, un(t));
}
function wf(t) {
  const e = Df[t];
  if (!e)
    throw new TypeError($l(t));
  return ce(e, ct(xa), 1);
}
const er = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ er.get.bind(er), ms = /* @__PURE__ */ er.set.bind(er), bc = {
  era: Zc,
  eraYear: Os,
  year: ro,
  month: Pt,
  daysInMonth: Pt,
  daysInYear: Pt,
  inLeapYear: Hl,
  monthsInYear: Pt
}, Ti = {
  monthCode: V
}, Sc = {
  day: Pt
}, yf = {
  dayOfWeek: Pt,
  dayOfYear: Pt,
  weekOfYear: jc,
  yearOfWeek: Os,
  daysInWeek: Pt
}, Oi = /* @__PURE__ */ Di(/* @__PURE__ */ Object.assign({}, bc, Ti, Sc, yf)), Ef = /* @__PURE__ */ Di({
  ...bc,
  ...Ti
}), bf = /* @__PURE__ */ Di({
  ...Ti,
  ...Sc
}), Fn = {
  calendarId: (t) => t.calendar
}, Sf = /* @__PURE__ */ rr((t) => (e) => e[t], O.concat("sign")), Ri = /* @__PURE__ */ rr((t, e) => (n) => n[wt[e]], Lt), Mc = {
  epochMilliseconds: So,
  epochNanoseconds: $c
}, [Mf, Y, Ch] = fe(di, Qu, {
  ...Sf,
  blank: iu
}, {
  with: (t, e) => Y(Wu(t, e)),
  negated: (t) => Y(Po(t)),
  abs: (t) => Y(ou(t)),
  add: (t, e, n) => Y(Qi(nn, b, S, 0, t, Z(e), n)),
  subtract: (t, e, n) => Y(Qi(nn, b, S, 1, t, Z(e), n)),
  round: (t, e) => Y(ru(nn, b, S, t, e)),
  total: (t, e) => Uc(nn, b, S, t, e),
  toLocaleString(t, e, n) {
    return Intl.DurationFormat ? new Intl.DurationFormat(e, n).format(this) : _r(t);
  },
  toString: _r,
  toJSON: (t) => _r(t),
  valueOf: he
}, {
  from: (t) => Y(Z(t)),
  compare: (t, e, n) => wu(nn, b, S, Z(t), Z(e), n)
}), Df = {
  Instant: mc,
  PlainDateTime: pc,
  PlainDate: gc,
  PlainTime: vc,
  PlainYearMonth: wc,
  PlainMonthDay: yc
}, If = /* @__PURE__ */ ce(mc), Tf = /* @__PURE__ */ ce(mf), Of = /* @__PURE__ */ ce(pc), Rf = /* @__PURE__ */ ce(gc), Nf = /* @__PURE__ */ ce(vc), Cf = /* @__PURE__ */ ce(wc), zf = /* @__PURE__ */ ce(yc), [_f, Gt] = fe(ui, Ku, Ri, {
  with(t, e, n) {
    return Gt(Uu(this, Je(e), n));
  },
  add: (t, e) => Gt(Ki(0, t, Z(e))),
  subtract: (t, e) => Gt(Ki(1, t, Z(e))),
  until: (t, e, n) => Y(as(0, t, Wt(e), n)),
  since: (t, e, n) => Y(as(1, t, Wt(e), n)),
  round: (t, e) => Gt(qc(t, e)),
  equals: (t, e) => Iu(t, Wt(e)),
  toLocaleString(t, e, n) {
    const [r, o] = Nf(e, n, t);
    return r.format(o);
  },
  toString: Wi,
  toJSON: (t) => Wi(t),
  valueOf: he
}, {
  from: (t, e) => Gt(Wt(t, e)),
  compare: (t, e) => $o(Wt(t), Wt(e))
}), [Pf, Et] = fe(Xe, D(qu, Dn), {
  ...Fn,
  ...Oi,
  ...Ri
}, {
  with: (t, e, n) => Et(ju(b, t, Je(e), n)),
  withCalendar: (t, e) => Et(qo(t, zr(e))),
  withPlainTime: (t, e) => Et(hl(t, Ii(e))),
  add: (t, e, n) => Et(Hi(b, 0, t, Z(e), n)),
  subtract: (t, e, n) => Et(Hi(b, 1, t, Z(e), n)),
  until: (t, e, n) => Y(os(b, 0, t, Ie(e), n)),
  since: (t, e, n) => Y(os(b, 1, t, Ie(e), n)),
  round: (t, e) => Et(Gc(t, e)),
  equals: (t, e) => bu(t, Ie(e)),
  toZonedDateTime: (t, e, n) => G(nl(S, t, st(e), n)),
  toPlainDate: (t) => Mt(jt(t)),
  toPlainTime: (t) => Gt(Ct(t)),
  toLocaleString(t, e, n) {
    const [r, o] = Of(e, n, t);
    return r.format(o);
  },
  toString: Bi,
  toJSON: (t) => Bi(t),
  valueOf: he
}, {
  from: (t, e) => Et(Ie(t, e)),
  compare: (t, e) => ha(Ie(t), Ie(e))
}), [Ff, Jr, zh] = fe(ci, D(Ju, Dn), {
  ...Fn,
  ...bf
}, {
  with: (t, e, n) => Jr($u(b, t, Je(e), n)),
  equals: (t, e) => Du(t, fs(e)),
  toPlainDate(t, e) {
    return Mt(cl(b, t, this, e));
  },
  toLocaleString(t, e, n) {
    const [r, o] = zf(e, n, t);
    return r.format(o);
  },
  toString: Ui,
  toJSON: (t) => Ui(t),
  valueOf: he
}, {
  from: (t, e) => Jr(fs(t, e))
}), [xf, rn, _h] = fe(ai, D(Xu, Dn), {
  ...Fn,
  ...Ef
}, {
  with: (t, e, n) => rn(Lu(b, t, Je(e), n)),
  add: (t, e, n) => rn(Ji(b, 0, t, Z(e), n)),
  subtract: (t, e, n) => rn(Ji(b, 1, t, Z(e), n)),
  until: (t, e, n) => Y(ss(b, 0, t, Te(e), n)),
  since: (t, e, n) => Y(ss(b, 1, t, Te(e), n)),
  equals: (t, e) => Mu(t, Te(e)),
  toPlainDate(t, e) {
    return Mt(al(b, t, this, e));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Cf(e, n, t);
    return r.format(o);
  },
  toString: $i,
  toJSON: (t) => $i(t),
  valueOf: he
}, {
  from: (t, e) => rn(Te(t, e)),
  compare: (t, e) => Ge(Te(t), Te(e))
}), [kf, Mt, Ph] = fe(Cn, D(Hu, Dn), {
  ...Fn,
  ...Oi
}, {
  with: (t, e, n) => Mt(Bu(b, t, Je(e), n)),
  withCalendar: (t, e) => Mt(qo(t, zr(e))),
  add: (t, e, n) => Mt(Xi(b, 0, t, Z(e), n)),
  subtract: (t, e, n) => Mt(Xi(b, 1, t, Z(e), n)),
  until: (t, e, n) => Y(is(b, 0, t, Oe(e), n)),
  since: (t, e, n) => Y(is(b, 1, t, Oe(e), n)),
  equals: (t, e) => Su(t, Oe(e)),
  toZonedDateTime(t, e) {
    const n = J(e) ? e : {
      timeZone: e
    };
    return G(rl(st, Wt, S, t, n));
  },
  toPlainDateTime: (t, e) => Et(ol(t, Ii(e))),
  toPlainYearMonth(t) {
    return rn(il(b, t, this));
  },
  toPlainMonthDay(t) {
    return Jr(sl(b, t, this));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Rf(e, n, t);
    return r.format(o);
  },
  toString: Li,
  toJSON: (t) => Li(t),
  valueOf: he
}, {
  from: (t, e) => Mt(Oe(t, e)),
  compare: (t, e) => Ge(Oe(t), Oe(e))
}), [Yf, G] = fe(de, D(Gu, Dn, vu), {
  ...Mc,
  ...Fn,
  ...hs(Oi),
  ...hs(Ri),
  offset: (t) => bn(Xr(t).offsetNanoseconds),
  offsetNanoseconds: (t) => Xr(t).offsetNanoseconds,
  timeZoneId: (t) => t.timeZone,
  hoursInDay: (t) => Hc(S, t)
}, {
  with: (t, e, n) => G(Zu(b, S, t, Je(e), n)),
  withCalendar: (t, e) => G(qo(t, zr(e))),
  withTimeZone: (t, e) => G(ml(t, st(e))),
  withPlainTime: (t, e) => G(fl(S, t, Ii(e))),
  add: (t, e, n) => G(qi(b, S, 0, t, Z(e), n)),
  subtract: (t, e, n) => G(qi(b, S, 1, t, Z(e), n)),
  until: (t, e, n) => Y(j(rs(b, S, 0, t, Re(e), n))),
  since: (t, e, n) => Y(j(rs(b, S, 1, t, Re(e), n))),
  round: (t, e) => G(Vc(S, t, e)),
  startOfDay: (t) => G(Xc(S, t)),
  equals: (t, e) => Eu(t, Re(e)),
  toInstant: (t) => Vt(el(t)),
  toPlainDateTime: (t) => Et(_a(S, t)),
  toPlainDate: (t) => Mt(Pa(S, t)),
  toPlainTime: (t) => Gt(Fa(S, t)),
  toLocaleString(t, e, n = {}) {
    const [r, o] = Tf(e, n, t);
    return r.format(o);
  },
  toString: (t, e) => ji(S, t, e),
  toJSON: (t) => ji(S, t),
  valueOf: he,
  getTimeZoneTransition(t, e) {
    const { timeZone: n, epochNanoseconds: r } = t, o = Lc(e), i = S(n).O(r, o);
    return i ? G({
      ...t,
      epochNanoseconds: i
    }) : null;
  }
}, {
  from: (t, e) => G(Re(t, e)),
  compare: (t, e) => fa(Re(t), Re(e))
}), [Af, Vt, Fh] = fe(li, Vu, Mc, {
  add: (t, e) => Vt(Gi(0, t, Z(e))),
  subtract: (t, e) => Vt(Gi(1, t, Z(e))),
  until: (t, e, n) => Y(ns(0, t, Ne(e), n)),
  since: (t, e, n) => Y(ns(1, t, Ne(e), n)),
  round: (t, e) => Vt(Wc(t, e)),
  equals: (t, e) => yu(t, Ne(e)),
  toZonedDateTimeISO: (t, e) => G(tl(t, st(e))),
  toLocaleString(t, e, n) {
    const [r, o] = If(e, n, t);
    return r.format(o);
  },
  toString: (t, e) => Zi(st, S, t, e),
  toJSON: (t) => Zi(st, S, t),
  valueOf: he
}, {
  from: (t) => Vt(Ne(t)),
  fromEpochMilliseconds: (t) => Vt(ul(t)),
  fromEpochNanoseconds: (t) => Vt(ll(t)),
  compare: (t, e) => da(Ne(t), Ne(e))
}), Zf = /* @__PURE__ */ Object.defineProperties({}, {
  ...eo("Temporal.Now"),
  ...Fe({
    timeZoneId: () => tn(),
    instant: () => Vt(Zt(Ur())),
    zonedDateTimeISO: (t = tn()) => G(gt(Ur(), st(t), I)),
    plainDateTimeISO: (t = tn()) => Et(vt(kr(S(st(t))), I)),
    plainDateISO: (t = tn()) => Mt(jt(kr(S(st(t))), I)),
    plainTimeISO: (t = tn()) => Gt(Ct(kr(S(st(t)))))
  })
}), bt = /* @__PURE__ */ Object.defineProperties({}, {
  ...eo("Temporal"),
  ...Fe({
    PlainYearMonth: xf,
    PlainMonthDay: Ff,
    PlainDate: kf,
    PlainTime: _f,
    PlainDateTime: Pf,
    ZonedDateTime: Yf,
    Instant: Af,
    Duration: Mf,
    Now: Zf
  })
}), jf = /* @__PURE__ */ pf(), nr = /* @__PURE__ */ new WeakMap();
Object.create(Intl), Fe({
  DateTimeFormat: jf
});
const St = {
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  unit: "days",
  period: "weeks",
  span: 1,
  daySize: 160,
  dayHeadSize: 32,
  eventSize: 48,
  resourceGroupSize: 24,
  gap: 0,
  overscan: 0
};
function Bf(t = {}) {
  const e = k(t.period) || St.period, n = Math.max(k(t.span) || St.span, 1), r = k(t.unit) || St.unit, o = k(t.firstDayOfWeek), i = k(t.timezone) || St.timezone, s = bt.PlainDate.from(k(t.date) || bt.Now.plainDateISO()), a = $f(s, e, e === "weeks" || r === "weeks" ? o : void 0), c = Lf(a, e, n, r);
  return {
    start: c.at(0),
    end: c.at(-1),
    timezone: i,
    unit: r,
    period: e,
    span: n,
    firstDayOfWeek: o,
    dates: c
  };
}
function Lf(t, e, n, r) {
  const o = t.add({ [e]: n }), i = t.until(o, { largestUnit: r }), s = [];
  for (let a = 0; a < i[r]; a++)
    s.push(t.add({ [r]: a }).toString());
  return s;
}
function $f(t, e, n) {
  let r = t;
  return e === "years" && (r = t.with({ day: 1, month: 1 })), e === "months" && (r = t.with({ day: 1 })), n === void 0 ? r : r.subtract({ days: (r.dayOfWeek - n + 7) % 7 });
}
function Uf(t = {}) {
  return {
    daySize: k(t.daySize) ?? St.daySize,
    dayHeadSize: k(t.dayHeadSize) ?? St.dayHeadSize,
    eventSize: k(t.eventSize) ?? St.eventSize,
    resourceGroupSize: k(t.resourceGroupSize) ?? St.resourceGroupSize,
    resourcesClass: k(t.resourcesClass),
    timelineClass: k(t.timelineClass),
    gap: k(t.gap) ?? St.gap,
    overscan: k(t.overscan) ?? St.overscan
  };
}
function Dc(t) {
  try {
    return bt.PlainDate.from(t).toString() === t;
  } catch {
    return !1;
  }
}
function Ic(t, e) {
  return Dc(t) ? t : bt.Instant.from(t).toZonedDateTimeISO(e).toPlainDate().toString();
}
function Ni(t) {
  return t === void 0 ? [] : Array.isArray(t) ? t : [t];
}
function ps(t, e, n) {
  return t.has(e) || t.set(e, n), t.get(e);
}
function Wf(t = [], e) {
  const n = /* @__PURE__ */ new Map();
  for (var r = 0; r < t.length; r++) {
    const i = t[r], s = Ic(i.start, e), a = Ni(i.resourceId);
    for (var o = 0; o < a.length; o++) {
      const c = a[o], u = ps(n, c, /* @__PURE__ */ new Map());
      ps(u, s, /* @__PURE__ */ new Set()).add(i);
    }
  }
  return n;
}
const Vf = ["id", "nOrder", "isGroup", "isCollapsed", "resources", "maxEvents"], Gf = "cullendar-drag-event", qf = ".cullendar-timeline", Hf = ".cullendar-resources", Xf = "cullendar-is-dragging", Jf = "cullendar-is-resizing", at = {
  EXCLUDED_RESOURCE_FIELDS: Vf,
  DATA_TRANSFER_TYPE: Gf,
  TIMELINE_SELECTOR: qf,
  RESOURCES_SELECTOR: Hf,
  DRAGGING_CLASS: Xf,
  RESIZING_CLASS: Jf
};
function Tc(t, e) {
  const n = Object.entries(t), r = Ni(e);
  return Object.fromEntries(n.filter(([o]) => !r.includes(o)));
}
const jr = Es(/* @__PURE__ */ new Set());
function Kf(t = [], e = /* @__PURE__ */ new Map()) {
  const n = Rc(t), r = /* @__PURE__ */ new Map();
  for (var o = 0; o < n.length; o++) {
    const s = n[o], a = s.resources ? Qf(s, e) : Oc(s, e.get(s.id));
    if (r.set(a.id, a), "isGroup" in a && !a.isCollapsed && a.resources.length)
      for (var i = 0; i < a.resources.length; i++) {
        const c = a.resources[i];
        r.set(c.id, c);
      }
  }
  return r;
}
function Qf(t, e) {
  const n = jr.has(t.id);
  return {
    id: t.id,
    nOrder: t.nOrder,
    isGroup: !0,
    isCollapsed: n,
    resources: Rc(t.resources.map((r) => Oc(r, e.get(r.id)))),
    data: Tc(t, at.EXCLUDED_RESOURCE_FIELDS),
    open: () => jr.delete(t.id),
    close: () => jr.add(t.id)
  };
}
function Oc(t, e = /* @__PURE__ */ new Map()) {
  return {
    id: t.id,
    nOrder: t.nOrder,
    isEventDroppable: t.isEventDroppable ?? !0,
    maxEvents: Math.max(...Array.from(e.values()).map((n) => n.size), 1),
    data: Tc(t, at.EXCLUDED_RESOURCE_FIELDS)
  };
}
function Rc(t) {
  return t.slice().sort((e, n) => (e.nOrder ?? Number.MAX_SAFE_INTEGER) - (n.nOrder ?? Number.MAX_SAFE_INTEGER));
}
function th(t = {}) {
  return {
    onView: A(t.onView) || ((e) => {
    }),
    onAddEvent: A(t.onAddEvent) || ((e) => {
    }),
    onMoveEvent: A(t.onMoveEvent) || ((e) => {
    }),
    onResizeEvent: A(t.onResizeEvent) || ((e) => {
    }),
    onBeforeDropEvent: A(t.onBeforeDropEvent) || ((e) => !0),
    onDayEnter: A(t.onDayEnter) || ((e) => {
    })
  };
}
function eh(t, e) {
  function n(o, i) {
    const s = t.value.get(o) || /* @__PURE__ */ new Map();
    return (i ? s.get(i) : s) || /* @__PURE__ */ new Set();
  }
  function r(o) {
    return e.value.get(o);
  }
  return {
    getResource: r,
    getEvents: n
  };
}
function xh(t = {}) {
  const e = Yc(), n = ft(), r = ft(/* @__PURE__ */ new Set()), o = ft(/* @__PURE__ */ new Set()), i = ft(0), s = F(() => Bf(k(t.view))), a = F(() => Uf(k(t.layout))), c = F(() => Wf(k(t.events), s.value.timezone)), u = F(() => Kf(k(t.resources), c.value)), l = F(() => th(k(t.callbacks))), d = eh(c, u);
  return an(s, () => l.value.onView(s.value)), Es({
    id: e,
    elements: n,
    view: s,
    layout: a,
    events: c,
    resources: u,
    callbacks: l,
    utils: d,
    resizeDatesSet: r,
    resizeResourcesSet: o,
    dayWidth: i
  });
}
function q(t) {
  return `${t}px`;
}
function nh() {
  const t = Object.assign(document.createElement("div"), { style: "overflow:scroll;visibility:hidden;" }), e = document.body.appendChild(t), n = e.offsetWidth - e.clientWidth;
  return e.remove(), q(n);
}
function Ce(t, e, n) {
  let r = n.initialDeps ?? [], o;
  function i() {
    var s, a, c, u;
    let l;
    n.key && ((s = n.debug) != null && s.call(n)) && (l = Date.now());
    const d = t();
    if (!(d.length !== r.length || d.some((m, g) => r[g] !== m)))
      return o;
    r = d;
    let h;
    if (n.key && ((a = n.debug) != null && a.call(n)) && (h = Date.now()), o = e(...d), n.key && ((c = n.debug) != null && c.call(n))) {
      const m = Math.round((Date.now() - l) * 100) / 100, g = Math.round((Date.now() - h) * 100) / 100, p = g / 16, v = (w, y) => {
        for (w = String(w); w.length < y; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${v(g, 5)} /${v(m, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * p, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return (u = n == null ? void 0 : n.onChange) == null || u.call(n, o), o;
  }
  return i.updateDeps = (s) => {
    r = s;
  }, i;
}
function Br(t, e) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const rh = (t, e) => Math.abs(t - e) < 1, oh = (t, e, n) => {
  let r;
  return function(...o) {
    t.clearTimeout(r), r = t.setTimeout(() => e.apply(this, o), n);
  };
}, ih = (t) => t, sh = (t) => {
  const e = Math.max(t.startIndex - t.overscan, 0), n = Math.min(t.endIndex + t.overscan, t.count - 1), r = [];
  for (let o = e; o <= n; o++)
    r.push(o);
  return r;
}, ah = (t, e) => {
  const n = t.scrollElement;
  if (!n)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  const o = (s) => {
    const { width: a, height: c } = s;
    e({ width: Math.round(a), height: Math.round(c) });
  };
  if (o(n.getBoundingClientRect()), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((s) => {
    const a = () => {
      const c = s[0];
      if (c != null && c.borderBoxSize) {
        const u = c.borderBoxSize[0];
        if (u) {
          o({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      o(n.getBoundingClientRect());
    };
    t.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, gs = {
  passive: !0
}, vs = typeof window > "u" ? !0 : "onscrollend" in window, ch = (t, e) => {
  const n = t.scrollElement;
  if (!n)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = t.options.useScrollendEvent && vs ? () => {
  } : oh(
    r,
    () => {
      e(o, !1);
    },
    t.options.isScrollingResetDelay
  ), s = (l) => () => {
    const { horizontal: d, isRtl: f } = t.options;
    o = d ? n.scrollLeft * (f && -1 || 1) : n.scrollTop, i(), e(o, l);
  }, a = s(!0), c = s(!1);
  c(), n.addEventListener("scroll", a, gs);
  const u = t.options.useScrollendEvent && vs;
  return u && n.addEventListener("scrollend", c, gs), () => {
    n.removeEventListener("scroll", a), u && n.removeEventListener("scrollend", c);
  };
}, uh = (t, e, n) => {
  if (e != null && e.borderBoxSize) {
    const r = e.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    t.getBoundingClientRect()[n.options.horizontal ? "width" : "height"]
  );
}, lh = (t, {
  adjustments: e = 0,
  behavior: n
}, r) => {
  var o, i;
  const s = t + e;
  (i = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || i.call(o, {
    [r.options.horizontal ? "left" : "top"]: s,
    behavior: n
  });
};
class dh {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((i) => {
          const s = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
        });
      }));
      return {
        disconnect: () => {
          var o;
          (o = r()) == null || o.disconnect(), n = null;
        },
        observe: (o) => {
          var i;
          return (i = r()) == null ? void 0 : i.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var i;
          return (i = r()) == null ? void 0 : i.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, o]) => {
        typeof o > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: ih,
        rangeExtractor: sh,
        onChange: () => {
        },
        measureElement: uh,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...n
      };
    }, this.notify = (n) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, n);
    }, this.maybeNotify = Ce(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = i, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let s = r - 1; s >= 0; s--) {
        const a = n[s];
        if (o.has(a.lane))
          continue;
        const c = i.get(
          a.lane
        );
        if (c == null || a.end > c.end ? i.set(a.lane, a) : a.end < c.end && o.set(a.lane, !0), o.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((s, a) => s.end === a.end ? s.index - a.index : s.end - a.end)[0] : void 0;
    }, this.getMeasurementOptions = Ce(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (n, r, o, i, s) => (this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: i,
        enabled: s
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ce(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: s }, a) => {
        if (!s)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((l) => {
          this.itemSizeCache.set(l.key, l.size);
        }));
        const c = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, c);
        for (let l = c; l < n; l++) {
          const d = i(l), f = this.options.lanes === 1 ? u[l - 1] : this.getFurthestMeasurement(u, l), h = f ? f.end + this.options.gap : r + o, m = a.get(d), g = typeof m == "number" ? m : this.options.estimateSize(l), p = h + g, v = f ? f.lane : l % this.options.lanes;
          u[l] = {
            index: l,
            start: h,
            size: g,
            end: p,
            key: d,
            lane: v
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ce(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? fh({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ce(
      () => {
        let n = null, r = null;
        const o = this.calculateRange();
        return o && (n = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, o, i, s) => i === null || s === null ? [] : n({
        startIndex: i,
        endIndex: s,
        overscan: r,
        count: o
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, o = n.getAttribute(r);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const o = this.indexFromElement(n), i = this.measurementsCache[o];
      if (!i)
        return;
      const s = i.key, a = this.elementsCache.get(s);
      a !== n && (a && this.observer.unobserve(a), this.observer.observe(n), this.elementsCache.set(s, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.itemSizeCache.get(o.key) ?? o.size, s = r - i;
      s !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, s, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += s,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = Ce(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const o = [];
        for (let i = 0, s = n.length; i < s; i++) {
          const a = n[i], c = r[a];
          o.push(c);
        }
        return o;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Br(
          r[Nc(
            0,
            r.length - 1,
            (o) => Br(r[o]).start,
            n
          )]
        );
    }, this.getOffsetForAlignment = (n, r, o = 0) => {
      const i = this.getSize(), s = this.getScrollOffset();
      r === "auto" && (r = n >= s + i ? "end" : "start"), r === "center" ? n += (o - i) / 2 : r === "end" && (n -= i);
      const a = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[a] : this.scrollElement[a] : 0) - i;
      return Math.max(Math.min(u, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.getSize(), s = this.getScrollOffset();
      if (r === "auto")
        if (o.end >= s + i - this.options.scrollPaddingEnd)
          r = "end";
        else if (o.start <= s + this.options.scrollPaddingStart)
          r = "start";
        else
          return [s, r];
      const a = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(a, r, o.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (n, { align: r = "start", behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: o } = {}) => {
      n = Math.max(0, Math.min(n, this.options.count - 1)), this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const i = this.getOffsetForIndex(n, r);
      if (!i) return;
      const [s, a] = i;
      this._scrollToOffset(s, { adjustments: void 0, behavior: o }), o !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(n)
        )) {
          const [u] = Br(
            this.getOffsetForIndex(n, a)
          );
          rh(u, this.getScrollOffset()) || this.scrollToIndex(n, { align: a, behavior: o });
        } else
          this.scrollToIndex(n, { align: a, behavior: o });
      }));
    }, this.scrollBy = (n, { behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + n, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var n;
      const r = this.getMeasurements();
      let o;
      if (r.length === 0)
        o = this.options.paddingStart;
      else if (this.options.lanes === 1)
        o = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
      else {
        const i = Array(this.options.lanes).fill(null);
        let s = r.length - 1;
        for (; s >= 0 && i.some((a) => a === null); ) {
          const a = r[s];
          i[a.lane] === null && (i[a.lane] = a.end), s--;
        }
        o = Math.max(...i.filter((a) => a !== null));
      }
      return Math.max(
        o - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: o
    }) => {
      this.options.scrollToFn(n, { behavior: o, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(e);
  }
}
const Nc = (t, e, n, r) => {
  for (; t <= e; ) {
    const o = (t + e) / 2 | 0, i = n(o);
    if (i < r)
      t = o + 1;
    else if (i > r)
      e = o - 1;
    else
      return o;
  }
  return t > 0 ? t - 1 : 0;
};
function fh({
  measurements: t,
  outerSize: e,
  scrollOffset: n,
  lanes: r
}) {
  const o = t.length - 1, i = (c) => t[c].start;
  if (t.length <= r)
    return {
      startIndex: 0,
      endIndex: o
    };
  let s = Nc(
    0,
    o,
    i,
    n
  ), a = s;
  if (r === 1)
    for (; a < o && t[a].end < n + e; )
      a++;
  else if (r > 1) {
    const c = Array(r).fill(0);
    for (; a < o && c.some((l) => l < n + e); ) {
      const l = t[a];
      c[l.lane] = l.end, a++;
    }
    const u = Array(r).fill(n + e);
    for (; s >= 0 && u.some((l) => l >= n); ) {
      const l = t[s];
      u[l.lane] = l.start, s--;
    }
    s = Math.max(0, s - s % r), a = Math.min(o, a + (r - 1 - a % r));
  }
  return { startIndex: s, endIndex: a };
}
function hh(t) {
  const e = new dh(A(t)), n = Pc(e), r = e._didMount();
  return an(
    () => A(t).getScrollElement(),
    (o) => {
      o && e._willUpdate();
    },
    {
      immediate: !0
    }
  ), an(
    () => A(t),
    (o) => {
      e.setOptions({
        ...o,
        onChange: (i, s) => {
          var a;
          zi(n), (a = o.onChange) == null || a.call(o, i, s);
        }
      }), e._willUpdate(), zi(n);
    },
    {
      immediate: !0
    }
  ), Fc(r), n;
}
function Cc(t) {
  return hh(
    F(() => ({
      observeElementRect: ah,
      observeElementOffset: ch,
      scrollToFn: lh,
      ...A(t)
    }))
  );
}
function mh(t) {
  const e = document.getElementById(t);
  return {
    calendar: e,
    timeline: e.querySelector(at.TIMELINE_SELECTOR),
    resources: e.querySelector(at.RESOURCES_SELECTOR)
  };
}
const ph = /* @__PURE__ */ re({
  __name: "RowVirtualiser",
  props: {
    rows: {},
    layout: {},
    wrapperStyle: {}
  },
  setup(t) {
    const e = t, n = ft(null), r = F(() => ({
      count: e.rows.length,
      getScrollElement: () => n.value,
      estimateSize: c,
      gap: e.layout.gap,
      paddingStart: e.layout.dayHeadSize,
      overscan: e.layout.overscan
    })), o = Cc(r), i = F(() => o.value.getVirtualItems()), s = F(() => o.value.getTotalSize()), a = F(() => ({
      height: q(s.value),
      ...e.wrapperStyle
    }));
    an(() => e.rows, () => o.value.measure());
    function c(u) {
      const l = e.rows[u];
      return "isGroup" in l ? e.layout.resourceGroupSize : l.maxEvents * e.layout.eventSize;
    }
    return (u, l) => (W(), it("div", {
      ref_key: "el",
      ref: n
    }, [
      Kr("div", {
        class: "cullendar-row-virtualiser-wrapper",
        style: cn(a.value)
      }, [
        U(u.$slots, "wrapper", {}, void 0, !0),
        (W(!0), it($n, null, Un(i.value, (d) => U(u.$slots, "default", ze({
          key: d.index,
          ref_for: !0
        }, { row: d, data: u.rows[d.index] }), void 0, !0)), 128))
      ], 4)
    ], 512));
  }
}), Ke = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, zc = /* @__PURE__ */ Ke(ph, [["__scopeId", "data-v-f5d63ec0"]]), gh = { class: "cullendar-timeline-head" }, vh = /* @__PURE__ */ re({
  __name: "Timeline",
  props: {
    rows: {},
    columns: {}
  },
  setup(t) {
    const e = t, n = vn("api"), { id: r, dayWidth: o, elements: i, layout: s } = Ae(n);
    let a;
    const c = F(() => ({
      horizontal: !0,
      count: e.columns.length,
      getScrollElement: () => {
        var p;
        return (p = i.value) == null ? void 0 : p.timeline;
      },
      estimateSize: () => o.value,
      gap: s.value.gap,
      overscan: s.value.overscan
    })), u = Cc(c), l = F(() => u.value.getVirtualItems()), d = F(() => u.value.getTotalSize()), f = F(() => ({ width: q(d.value) }));
    an([() => e.columns, () => s.value.daySize], () => h()), bs(() => {
      i.value = mh(r.value), a = new ResizeObserver(([p]) => p && h(p.contentRect.width)), a.observe(i.value.timeline);
    }), xc(() => a.unobserve(i.value.timeline));
    function h(p) {
      const v = p ?? i.value.timeline.clientWidth, w = s.value.gap * (e.columns.length - 1), y = v - w, E = Math.max(s.value.daySize, Math.floor(y / e.columns.length));
      E !== o.value && (o.value = E, u.value.measure());
    }
    function m(p) {
      return {
        height: q(s.value.dayHeadSize),
        width: q(o.value),
        transform: `translateX(${q(p.start)}) translateY(0)`
      };
    }
    function g(p, v) {
      return {
        width: q(o.value),
        height: q(p.size),
        transform: `translateX(${q(v.start)}) translateY(${q(p.start)})`
      };
    }
    return (p, v) => (W(), Qr(zc, {
      rows: p.rows,
      layout: A(s),
      "wrapper-style": f.value,
      class: to(["cullendar-timeline", A(s).timelineClass])
    }, {
      wrapper: pe(() => [
        Kr("div", gh, [
          (W(!0), it($n, null, Un(l.value, (w) => (W(), it("div", {
            key: w.index,
            class: "cullendar-timeline-virtual-col",
            style: cn(m(w))
          }, [
            U(p.$slots, "head", ze({ ref_for: !0 }, { date: p.columns[w.index] }), void 0, !0)
          ], 4))), 128))
        ])
      ]),
      default: pe(({ row: w, data: y }) => [
        (W(!0), it($n, null, Un(l.value, (E) => (W(), it("div", {
          key: E.index,
          class: "cullendar-timeline-virtual-col",
          style: cn(g(w, E))
        }, [
          U(p.$slots, "default", ze({ ref_for: !0 }, { resource: y, date: p.columns[E.index] }), void 0, !0)
        ], 4))), 128))
      ]),
      _: 3
    }, 8, ["rows", "layout", "wrapper-style", "class"]));
  }
}), wh = /* @__PURE__ */ Ke(vh, [["__scopeId", "data-v-4db4ef8d"]]), yh = /* @__PURE__ */ re({
  __name: "Resources",
  props: {
    rows: {}
  },
  setup(t) {
    const e = vn("api"), { layout: n } = Ae(e);
    function r(o) {
      return {
        height: q(o.size),
        transform: `translateY(${q(o.start)})`
      };
    }
    return (o, i) => (W(), Qr(zc, {
      rows: o.rows,
      layout: A(n),
      class: to(["cullendar-resources", A(n).resourcesClass])
    }, {
      default: pe(({ row: s, data: a }) => [
        Kr("div", {
          class: "cullendar-resources-virtual-row",
          style: cn(r(s))
        }, [
          U(o.$slots, "default", qt(Pe({ resource: a })), void 0, !0)
        ], 4)
      ]),
      _: 3
    }, 8, ["rows", "layout", "class"]));
  }
}), Eh = /* @__PURE__ */ Ke(yh, [["__scopeId", "data-v-876f22e5"]]), bh = /* @__PURE__ */ re({
  __name: "Day",
  props: {
    date: {},
    resource: {}
  },
  setup(t) {
    const e = t, n = vn("api"), { utils: r } = Ae(n), o = F(() => r.value.getEvents(e.resource.id, e.date)), i = F(() => Array.from(o.value.values()).sort((s, a) => Date.parse(s.start) - Date.parse(a.start)));
    return (s, a) => U(s.$slots, "default", qt(Pe({ events: i.value })));
  }
}), Sh = ["id"], Mh = /* @__PURE__ */ re({
  name: "Cullendar",
  __name: "index",
  props: {
    cullendar: {}
  },
  setup(t) {
    const e = t;
    kc("api", e.cullendar);
    const { id: n, elements: r, view: o, resources: i } = Ae(e.cullendar), s = F(() => Array.from(i.value.values()));
    bs(() => {
      r.value.timeline.addEventListener("scroll", a), r.value.resources.addEventListener("scroll", a);
    });
    function a(c) {
      const u = c.target, l = u.classList.contains("cullendar-timeline") ? r.value.resources : r.value.timeline;
      l.removeEventListener("scroll", a), l.scrollTop = u.scrollTop, requestAnimationFrame(() => l.addEventListener("scroll", a));
    }
    return (c, u) => (W(), it("div", {
      id: A(n),
      style: cn({ "--scrollbar-width": A(nh)() }),
      class: "cullendar"
    }, [
      _i(Eh, { rows: s.value }, {
        default: pe(({ resource: l }) => [
          "isGroup" in l ? U(c.$slots, "resourceGroup", qt(ze({ key: 0 }, { resource: l })), void 0, !0) : U(c.$slots, "resource", qt(ze({ key: 1 }, { resource: l })), void 0, !0)
        ]),
        _: 3
      }, 8, ["rows"]),
      _i(wh, {
        rows: s.value,
        columns: A(o).dates
      }, {
        head: pe(({ date: l }) => [
          U(c.$slots, "dayHead", qt(Pe({ date: l })), void 0, !0)
        ]),
        default: pe(({ resource: l, date: d }) => [
          "isGroup" in l ? Ss("", !0) : (W(), Qr(bh, {
            key: 0,
            date: d,
            resource: l
          }, {
            default: pe(({ events: f }) => [
              U(c.$slots, "day", qt(Pe({ resource: l, date: d, events: f })), () => [
                (W(!0), it($n, null, Un(f, (h) => U(c.$slots, "event", ze({
                  key: h.id,
                  ref_for: !0
                }, { resource: l, event: h, date: d }), void 0, !0)), 128))
              ], !0)
            ]),
            _: 2
          }, 1032, ["date", "resource"]))
        ]),
        _: 3
      }, 8, ["rows", "columns"]),
      U(c.$slots, "default", {}, void 0, !0)
    ], 12, Sh));
  }
}), Dh = /* @__PURE__ */ Ke(Mh, [["__scopeId", "data-v-3420f804"]]), Ih = /* @__PURE__ */ re({
  __name: "DragEvent",
  props: {
    data: {},
    dragClass: {},
    ghostClass: {}
  },
  setup(t) {
    const e = t;
    let n;
    const r = F(() => {
      var c, u;
      return ((u = (c = e.dragClass) == null ? void 0 : c.split) == null ? void 0 : u.call(c, " ")) || [];
    }), o = F(() => {
      var c, u;
      return ((u = (c = e.ghostClass) == null ? void 0 : c.split) == null ? void 0 : u.call(c, " ")) || [];
    });
    function i(c) {
      if (!c.dataTransfer)
        return;
      const u = document.querySelector(".cullendar"), l = c.target, d = l.getBoundingClientRect();
      n = a(l, d), l.classList.add(...r.value), c.dataTransfer.setDragImage(n, c.clientX - d.left, c.clientY - d.top), c.dataTransfer.effectAllowed = "id" in e.data ? "move" : "copy", c.dataTransfer.setData(at.DATA_TRANSFER_TYPE, JSON.stringify(e.data)), requestAnimationFrame(() => u.classList.add(at.DRAGGING_CLASS));
    }
    function s(c) {
      const u = document.querySelector(".cullendar");
      c.target.classList.remove(...r.value), u.classList.remove(at.DRAGGING_CLASS), n && n.remove();
    }
    function a(c, u) {
      const l = c.cloneNode(!0);
      return l.classList.add("cullendar-ghost-event", ...o.value), l.style.height = q(u.height), l.style.width = q(u.width), document.body.appendChild(l), l;
    }
    return (c, u) => (W(), it("div", {
      draggable: "true",
      class: "cullendar-drag-event",
      onDragstart: Wn(i, ["stop"]),
      onDragend: Wn(s, ["stop"])
    }, [
      U(c.$slots, "default", {}, void 0, !0)
    ], 32));
  }
}), kh = /* @__PURE__ */ Ke(Ih, [["__scopeId", "data-v-788adb18"]]), Yh = /* @__PURE__ */ re({
  __name: "DropDay",
  props: {
    date: {},
    resource: {},
    events: {},
    droppable: { type: Boolean, default: !0 },
    dragoverClass: {},
    resizeoverClass: {}
  },
  setup(t) {
    const e = t, n = vn("api"), { view: r, callbacks: o, resizeResourcesSet: i, resizeDatesSet: s } = Ae(n), a = ft(!1), c = F(() => i.value.has(e.resource.id) && s.value.has(e.date)), u = F(() => [
      a.value && e.dragoverClass,
      c.value && e.resizeoverClass
    ].filter(Boolean).join(" "));
    function l(p) {
      p.dataTransfer && p.dataTransfer.types.includes(at.DATA_TRANSFER_TYPE) && (a.value = !0);
    }
    function d(p) {
      if (!p.dataTransfer || !p.dataTransfer.types.includes(at.DATA_TRANSFER_TYPE))
        return;
      a.value = !1;
      const v = JSON.parse(p.dataTransfer.getData(at.DATA_TRANSFER_TYPE));
      if (!v.id)
        return o.value.onAddEvent(m({ data: v }));
      if (Ic(v.start, r.value.timezone) === e.date && Ni(v.resourceId).includes(e.resource.id))
        return;
      const y = Dc(v.start) ? f(v) : h(v), E = m({ event: v, times: y });
      o.value.onBeforeDropEvent(E) && o.value.onMoveEvent(E);
    }
    function f(p) {
      const v = bt.PlainDate.from(e.date), w = bt.PlainDate.from(p.start).until(bt.PlainDate.from(p.end));
      return {
        start: v.toString(),
        end: v.add(w).toString()
      };
    }
    function h(p) {
      const v = bt.PlainDate.from(e.date), w = bt.Instant.from(p.start).toZonedDateTimeISO(r.value.timezone), y = bt.Instant.from(p.end).toZonedDateTimeISO(r.value.timezone), E = w.until(y), M = w.with({
        year: v.year,
        month: v.month,
        day: v.day
      });
      return {
        start: M.toString({ timeZoneName: "never" }),
        end: M.add(E).toString({ timeZoneName: "never" })
      };
    }
    function m(p = {}) {
      return {
        ...p,
        date: e.date,
        resource: e.resource,
        view: r.value
      };
    }
    function g() {
      o.value.onDayEnter(m());
    }
    return (p, v) => (W(), it("div", {
      class: to(u.value),
      onMouseenter: g
    }, [
      p.droppable && p.resource.isEventDroppable ? (W(), it("span", {
        key: 0,
        class: "cullendar-day-dropzone",
        onDragenter: l,
        onDragover: v[0] || (v[0] = Wn(() => {
        }, ["prevent"])),
        onDragleave: v[1] || (v[1] = (w) => a.value = !1),
        onDrop: d
      }, null, 32)) : Ss("", !0),
      U(p.$slots, "default", qt(Pe({ date: p.date, resource: p.resource, events: p.events, isDragOver: a.value, isResizeOver: c.value })))
    ], 34));
  }
}), Lr = 100, Th = 60, ws = 0.1;
function Oh(t) {
  const e = ft(0), n = ft(0);
  let r, o, i = 0, s = 0, a = 0, c = 0, u = 0, l = 0;
  function d(g) {
    const p = g.clientX - r.left, v = g.clientY - r.top;
    e.value = t.scrollLeft - i, n.value = t.scrollTop - s, a = ys(p, r.width), c = ys(v, r.height);
  }
  function f() {
    r = t.getBoundingClientRect(), i = t.scrollLeft, s = t.scrollTop, t.addEventListener("mousemove", d), m();
  }
  function h() {
    t.removeEventListener("mousemove", d), cancelAnimationFrame(o), a = 0, c = 0, u = 0, l = 0;
  }
  function m() {
    u = u + (a - u) * ws, l = l + (c - l) * ws, (u !== 0 || l !== 0) && t.scrollBy(u, l), o = requestAnimationFrame(m);
  }
  return {
    scrolledX: e,
    scrolledY: n,
    start: f,
    stop: h
  };
}
function ys(t, e) {
  const n = t < Lr ? -1 : t > e - Lr ? 1 : 0, r = n === -1 ? t : e - t;
  return n * Th * (1 - r / Lr);
}
const Rh = /* @__PURE__ */ re({
  __name: "ResizeHandle",
  props: {
    event: {},
    resource: {},
    date: {}
  },
  setup(t) {
    const e = t, n = vn("api"), { dayWidth: r, elements: o, view: i, resources: s, layout: a, callbacks: c, utils: u, resizeDatesSet: l, resizeResourcesSet: d } = Ae(n);
    let f = 0, h = 0;
    const m = [], g = ft(!1), p = ft(0), v = ft(0), { scrolledX: w, scrolledY: y, start: E, stop: M } = Oh(o.value.timeline);
    function N(P) {
      p.value = P.clientX, v.value = P.clientY, g.value = !0, l.value.add(e.date), d.value.add(e.resource.id), yt(), document.addEventListener("mousemove", C), document.addEventListener("mouseup", z), o.value.calendar.classList.add(at.RESIZING_CLASS), E();
    }
    function C(P) {
      const R = Math.max(0, P.clientX - p.value + w.value), _t = Math.max(0, P.clientY - v.value + y.value);
      _(_t), zt(R);
    }
    function z() {
      const P = Array.from(d.value.values()).slice(1).map((_t) => u.value.getResource(_t)), R = Array.from(l.value.values()).slice(1);
      f = 0, h = 0, d.value.clear(), l.value.clear(), g.value = !1, document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", z), o.value.calendar.classList.remove(at.RESIZING_CLASS), M(), !(!R.length && !P.length) && c.value.onResizeEvent({
        event: e.event,
        resource: e.resource,
        resources: P,
        date: e.date,
        dates: R,
        view: i.value
      });
    }
    function _(P) {
      for (; h < m.length && P > m[h].bottom; )
        d.value.add(m[h].id), h++;
      for (; h > 0 && P < m[h - 1].top; )
        d.value.delete(m[h - 1].id), h--;
    }
    function zt(P) {
      const R = Math.ceil(P / (r.value + a.value.gap));
      if (f === R)
        return;
      const _t = i.value.dates, Qe = _t.indexOf(e.date);
      f = R, l.value = new Set(_t.slice(Qe, Qe + R + 1));
    }
    function yt() {
      let P = a.value.eventSize, R = !1;
      m.length = 0;
      for (const [_t, Qe] of s.value)
        if (!("isGroup" in Qe)) {
          if (R) {
            const Ci = Qe.maxEvents * a.value.eventSize, _c = {
              id: _t,
              top: P,
              bottom: P + Ci
            };
            P += Ci, m.push(_c);
          }
          _t === e.resource.id && (R = !0);
        }
      return m;
    }
    return (P, R) => (W(), it("div", {
      draggable: "true",
      class: "cullendar-resize-handle",
      onDragstart: R[0] || (R[0] = Wn(() => {
      }, ["stop", "prevent"])),
      onMousedown: N
    }, [
      U(P.$slots, "default", qt(Pe({ isResizing: g.value })), void 0, !0)
    ], 32));
  }
}), Ah = /* @__PURE__ */ Ke(Rh, [["__scopeId", "data-v-cb26c380"]]), Zh = { install: (t) => t.component("Cullendar", Dh) };
export {
  Dh as Cullendar,
  kh as DragEvent,
  Yh as DropDay,
  Ah as ResizeHandle,
  xh as create,
  Zh as default
};
