import { toValue as Y, reactive as bs, unref as Z, ref as ft, computed as F, watch as an, shallowRef as _c, triggerRef as _i, onScopeDispose as Pc, defineComponent as ne, createElementBlock as it, openBlock as W, createElementVNode as Kr, normalizeStyle as cn, renderSlot as U, Fragment as $n, renderList as Un, mergeProps as ze, inject as vn, toRefs as Ze, onMounted as Ss, onUnmounted as Fc, createBlock as Qr, normalizeClass as to, withCtx as me, normalizeProps as Gt, guardReactiveProps as Pe, provide as kc, createVNode as Pi, createCommentVNode as Ms, withModifiers as Wn } from "vue";
function xc() {
  return Math.random().toString(36).substring(2, 11);
}
function tt(t, e, n, r, o) {
  return xt(e, ((i, s) => {
    const a = i[s];
    if (a === void 0)
      throw new TypeError(Ho(s));
    return a;
  })(t, e), n, r, o);
}
function xt(t, e, n, r, o, i) {
  const s = ln(e, n, r);
  if (o && e !== s)
    throw new RangeError(Ya(t, e, n, r, i));
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
  return Yt((n) => ({
    value: n,
    configurable: 1,
    writable: !e
  }), t);
}
function Yc(t) {
  return Yt((e) => ({
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
function Ae(t, e) {
  const n = {};
  let r = t.length;
  for (const o of e)
    n[t[--r]] = o;
  return n;
}
function Yt(t, e, n) {
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
function Ds(t, e, n) {
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
function Fi(t, e) {
  for (const n of e)
    if (n in t)
      return 1;
  return 0;
}
function Is(t, e, n) {
  for (const r of t)
    if (e[r] !== n[r])
      return 0;
  return 1;
}
function Ts(t, e, n) {
  const r = {
    ...n
  };
  for (let o = 0; o < e; o++)
    r[t[o]] = 0;
  return r;
}
function M(t, ...e) {
  return (...n) => t(...e, ...n);
}
function ki(t) {
  return t[0].toUpperCase() + t.substring(1);
}
function wn(t) {
  return t.slice().sort();
}
function Vn(t, e) {
  return String(e).padStart(t, "0");
}
function qt(t, e) {
  return Math.sign(t - e);
}
function ln(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function Pt(t, e) {
  return [Math.floor(t / e), on(t, e)];
}
function on(t, e) {
  return (t % e + e) % e;
}
function Jt(t, e) {
  return [or(t, e), no(t, e)];
}
function or(t, e) {
  return Math.trunc(t / e) || 0;
}
function no(t, e) {
  return t % e || 0;
}
function kn(t) {
  return Math.abs(t % 1) === 0.5;
}
function Os(t, e, n) {
  let r = 0, o = 0;
  for (let a = 0; a <= e; a++) {
    const c = t[n[a]], u = Tt[a], l = k / u, [d, f] = Jt(c, l);
    r += f * u, o += d;
  }
  const [i, s] = Jt(r, k);
  return [o + i, s];
}
function ir(t, e, n) {
  const r = {};
  for (let o = e; o >= 0; o--) {
    const i = Tt[o];
    r[n[o]] = or(t, i), t = no(t, i);
  }
  return r;
}
function Zc(t) {
  if (t !== void 0)
    return V(t);
}
function Ac(t) {
  if (t !== void 0)
    return _t(t);
}
function Rs(t) {
  if (t !== void 0)
    return ro(t);
}
function _t(t) {
  return zs(ro(t));
}
function ro(t) {
  return Cs(Hl(t));
}
function Ns(t, e) {
  if (e == null)
    throw new RangeError(Ho(t));
  return e;
}
function yn(t) {
  if (!J(t))
    throw new TypeError(El);
  return t;
}
function oo(t, e, n = t) {
  if (typeof e !== t)
    throw new TypeError(ce(n, e));
  return e;
}
function Cs(t, e = "number") {
  if (!Number.isInteger(t))
    throw new RangeError(ml(e, t));
  return t || 0;
}
function zs(t, e = "number") {
  if (t <= 0)
    throw new RangeError(pl(e, t));
  return t;
}
function io(t) {
  if (typeof t == "symbol")
    throw new TypeError(yl);
  return String(t);
}
function An(t, e) {
  return J(t) ? String(t) : V(t, e);
}
function so(t) {
  if (typeof t == "string")
    return BigInt(t);
  if (typeof t != "bigint")
    throw new TypeError(wl(t));
  return t;
}
function _s(t, e = "number") {
  if (typeof t == "bigint")
    throw new TypeError(vl(e));
  if (t = Number(t), !Number.isFinite(t))
    throw new RangeError(gl(e, t));
  return t;
}
function H(t, e) {
  return Math.trunc(_s(t, e)) || 0;
}
function ao(t, e) {
  return Cs(_s(t, e), e);
}
function xi(t, e) {
  return zs(H(t, e), e);
}
function co(t, e) {
  let [n, r] = Jt(e, k), o = t + n;
  const i = Math.sign(o);
  return i && i === -Math.sign(r) && (o -= i, r += i * k), [o, r];
}
function ke(t, e, n = 1) {
  return co(t[0] + e[0] * n, t[1] + e[1] * n);
}
function ge(t, e) {
  return co(t[0], t[1] + e);
}
function Dt(t, e) {
  return ke(e, t, -1);
}
function ut(t, e) {
  return qt(t[0], e[0]) || qt(t[1], e[1]);
}
function Ps(t, e, n) {
  return ut(t, e) === -1 || ut(t, n) === 1;
}
function uo(t, e = 1) {
  const n = BigInt(k / e);
  return [Number(t / n), Number(t % n) * e];
}
function Gn(t, e = 1) {
  const n = k / e, [r, o] = Jt(t, n);
  return [r, o * e];
}
function It(t, e = 1, n) {
  const [r, o] = t, [i, s] = Jt(o, e);
  return r * (k / e) + (i + (n ? s / e : 0));
}
function lo(t, e, n = Pt) {
  const [r, o] = t, [i, s] = n(o, e);
  return [r * (k / e) + i, s];
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
  return n && Ot(B({
    ...t,
    isoDay: t.isoDay + n,
    isoNanosecond: t.isoNanosecond - n
  })), t;
}
function Ot(t) {
  if (!t || Ps(t, rd, nd))
    throw new RangeError(ue);
  return t;
}
function Kt(t) {
  return Os(t, 5, wt)[1];
}
function sr(t) {
  const [e, n] = Pt(t, k);
  return [ir(n, 5, wt), e];
}
function Yi(t) {
  return lo(t, Mt);
}
function X(t) {
  return je(t.isoYear, t.isoMonth, t.isoDay, t.isoHour, t.isoMinute, t.isoSecond, t.isoMillisecond);
}
function B(t) {
  const e = X(t);
  if (e !== void 0) {
    const [n, r] = Jt(e, nt);
    return [n, r * jt + (t.isoMicrosecond || 0) * Tn + (t.isoNanosecond || 0)];
  }
}
function ho(t, e) {
  const [n, r] = sr(Kt(t) - e);
  return Ot(B({
    ...t,
    isoDay: t.isoDay + r,
    ...n
  }));
}
function qn(...t) {
  return je(...t) / Va;
}
function je(...t) {
  const [e, n] = Fs(...t), r = e.valueOf();
  if (!isNaN(r))
    return r - n * nt;
}
function Fs(t, e = 1, n = 1, r = 0, o = 0, i = 0, s = 0) {
  const a = t === gn ? 1 : t === pn ? -1 : 0, c = /* @__PURE__ */ new Date();
  return c.setUTCHours(r, o, i, s), c.setUTCFullYear(t, e - 1, n + a), [c, a];
}
function Be(t, e) {
  let [n, r] = ge(t, e);
  r < 0 && (r += k, n -= 1);
  const [o, i] = Pt(r, jt), [s, a] = Pt(i, Tn);
  return ar(n * nt + o, s, a);
}
function ar(t, e = 0, n = 0) {
  const r = Math.ceil(Math.max(0, Math.abs(t) - ed) / nt) * Math.sign(t), o = new Date(t - r * nt);
  return Ae(Rr, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + r, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), e, n]);
}
function mo(t, e) {
  if (e < -864e13)
    throw new RangeError(ue);
  const n = t.formatToParts(e), r = {};
  for (const o of n)
    r[o.type] = o.value;
  return r;
}
function po(t) {
  return [t.isoYear, t.isoMonth, t.isoDay];
}
function ks(t, e) {
  return [e, 0];
}
function xs() {
  return $t;
}
function Ys(t, e) {
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
function Zs(t) {
  return go(t) ? 366 : 365;
}
function go(t) {
  return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
}
function As(t) {
  const [e, n] = Fs(t.isoYear, t.isoMonth, t.isoDay);
  return on(e.getUTCDay() - n, 7) || 7;
}
function js(t) {
  return this.id === He ? (({ isoYear: e }) => e < 1 ? ["gregory-inverse", 1 - e] : ["gregory", e])(t) : this.id === ee ? sd(t) : [];
}
function jc(t) {
  const e = X(t);
  if (e < id) {
    const { isoYear: i } = t;
    return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
  }
  const n = mo(pi(ee), e), { era: r, eraYear: o } = Ta(n, ee);
  return [r, o];
}
function cr(t) {
  return ye(t), Le(t, 1), t;
}
function ye(t) {
  return Bs(t, 1), t;
}
function Zi(t) {
  return Is(oi, t, Bs(t));
}
function Bs(t, e) {
  const { isoYear: n } = t, r = tt(t, "isoMonth", 1, xs(), e);
  return {
    isoYear: n,
    isoMonth: r,
    isoDay: tt(t, "isoDay", 1, Ys(n, r), e)
  };
}
function Le(t, e) {
  return Ae(wt, [tt(t, "isoHour", 0, 23, e), tt(t, "isoMinute", 0, 59, e), tt(t, "isoSecond", 0, 59, e), tt(t, "isoMillisecond", 0, 999, e), tt(t, "isoMicrosecond", 0, 999, e), tt(t, "isoNanosecond", 0, 999, e)]);
}
function I(t) {
  return t === void 0 ? 0 : cc(yn(t));
}
function ur(t, e = 0) {
  t = Rt(t);
  const n = uc(t), r = gd(t, e);
  return [cc(t), r, n];
}
function $e(t, e, n, r = 9, o = 0, i = 4) {
  e = Rt(e);
  let s = ac(e, r, o), a = yo(e), c = Nn(e, i);
  const u = Rn(e, r, o, 1);
  return s == null ? s = Math.max(n, u) : Ws(s, u), a = Eo(a, u, 1), t && (c = ((l) => l < 4 ? (l + 2) % 4 : l)(c)), [s, u, a, c];
}
function lr(t, e = 6, n) {
  let r = yo(t = dr(t, tr));
  const o = Nn(t, 7);
  let i = Rn(t, e);
  return i = Ns(tr, i), r = Eo(r, i, void 0, n), [i, r, o];
}
function vo(t) {
  return si(Rt(t));
}
function Ls(t, e) {
  return wo(Rt(t), e);
}
function Bc(t) {
  const e = dr(t, Ar), n = re(Ar, md, e, 0);
  if (!n)
    throw new RangeError(ce(Ar, n));
  return n;
}
function wo(t, e = 4) {
  const n = Us(t);
  return [Nn(t, 4), ...$s(Rn(t, e), n)];
}
function $s(t, e) {
  return t != null ? [Tt[t], t < 4 ? 9 - 3 * t : -1] : [e === void 0 ? 1 : 10 ** (9 - e), e];
}
function yo(t) {
  const e = t[sn];
  return e === void 0 ? 1 : H(e, sn);
}
function Eo(t, e, n, r) {
  const o = r ? k : Tt[e + 1];
  if (o) {
    const i = Tt[e];
    if (o % ((t = xt(sn, t, 1, o / i - (r ? 0 : 1), 1)) * i))
      throw new RangeError(ce(sn, t));
  } else
    t = xt(sn, t, 1, n ? 10 ** 9 : 1, 1);
  return t;
}
function Us(t) {
  let e = t[Zr];
  if (e !== void 0) {
    if (typeof e != "number") {
      if (io(e) === "auto")
        return;
      throw new RangeError(ce(Zr, e));
    }
    e = xt(Zr, Math.floor(e), 0, 9, 1);
  }
  return e;
}
function Rt(t) {
  return t === void 0 ? {} : yn(t);
}
function dr(t, e) {
  return typeof t == "string" ? {
    [e]: t
  } : yn(t);
}
function fr(t) {
  return {
    overflow: ad[t]
  };
}
function bo(t, e, n = 9, r = 0, o) {
  let i = e[t];
  if (i === void 0)
    return o ? r : void 0;
  if (i = io(i), i === "auto")
    return o ? r : null;
  let s = Vr[i];
  if (s === void 0 && (s = Kl[i]), s === void 0)
    throw new RangeError(Aa(t, i, Vr));
  return xt(t, s, r, n, 1, Xo), s;
}
function re(t, e, n, r = 0) {
  const o = n[t];
  if (o === void 0)
    return r;
  const i = io(o), s = e[i];
  if (s === void 0)
    throw new RangeError(Aa(t, i, e));
  return s;
}
function Ws(t, e) {
  if (e > t)
    throw new RangeError(Bl);
}
function Zt(t) {
  return {
    branding: li,
    epochNanoseconds: t
  };
}
function gt(t, e, n) {
  return {
    branding: le,
    calendar: n,
    timeZone: e,
    epochNanoseconds: t
  };
}
function vt(t, e = t.calendar) {
  return {
    branding: Xe,
    calendar: e,
    ...pt(Ql, t)
  };
}
function At(t, e = t.calendar) {
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
function Nt(t) {
  return {
    branding: ui,
    ...pt(nc, t)
  };
}
function j(t) {
  return {
    branding: di,
    sign: oe(t),
    ...pt(ei, t)
  };
}
function So(t) {
  return lo(t.epochNanoseconds, jt)[0];
}
function Lc(t) {
  return ((e, n = 1) => {
    const [r, o] = e, i = Math.floor(o / n), s = k / n;
    return BigInt(r) * BigInt(s) + BigInt(i);
  })(t.epochNanoseconds);
}
function Vs(t) {
  return t.epochNanoseconds;
}
function $c(t, e, n, r, o) {
  const i = ve(r), [s, a] = ((v, w) => {
    const y = w((v = dr(v, Hr))[ic]);
    let E = pd(v);
    return E = Ns(Hr, E), [E, y];
  })(o, t), c = Math.max(s, i);
  if (!a && hn(c, a))
    return Ai(r, s);
  if (!a)
    throw new RangeError(Ir);
  if (!r.sign)
    return 0;
  const [u, l, d] = vr(e, n, a), f = zo(d), h = wr(d), m = _o(d), p = h(l, u, r);
  xe(a) || (rt(u), rt(p));
  const g = m(l, u, p, s);
  return hn(s, a) ? Ai(g, s) : ((v, w, y, E, T, N, C) => {
    const z = oe(v), [_, Ct] = Mo(E, ri(y, v), y, z, T, N, C), yt = Do(w, _, Ct);
    return v[O[y]] + yt * z;
  })(g, f(p), s, l, u, f, h);
}
function Ai(t, e) {
  return It(L(t), Tt[e], 1);
}
function Mo(t, e, n, r, o, i, s) {
  const a = O[n], c = {
    ...e,
    [a]: e[a] + r
  }, u = s(t, o, e), l = s(t, o, c);
  return [i(u), i(l)];
}
function Do(t, e, n) {
  const r = It(Dt(e, n));
  if (!r)
    throw new RangeError(qe);
  return It(Dt(e, t)) / r;
}
function Uc(t, e) {
  const [n, r, o] = lr(e, 5, 1);
  return Zt(mr(t.epochNanoseconds, n, r, o, 1));
}
function Wc(t, e, n) {
  let { epochNanoseconds: r, timeZone: o, calendar: i } = e;
  const [s, a, c] = lr(n);
  if (s === 0 && a === 1)
    return e;
  const u = t(o);
  if (s === 6)
    r = ((l, d, f, h) => {
      const m = dt(f, d), [p, g] = l(m), v = f.epochNanoseconds, w = te(d, p), y = te(d, g);
      if (Ps(v, w, y))
        throw new RangeError(qe);
      return Js(Do(v, w, y), h) ? y : w;
    })(Hs, u, e, c);
  else {
    const l = u.R(r);
    r = Ue(u, Gs(Be(r, l), s, a, c), l, 2, 0, 1);
  }
  return gt(r, o, i);
}
function Vc(t, e) {
  return vt(Gs(t, ...lr(e)), t.calendar);
}
function Gc(t, e) {
  const [n, r, o] = lr(e, 5);
  var i;
  return Nt((i = o, Io(t, En(n, r), i)[0]));
}
function qc(t, e) {
  const n = t(e.timeZone), r = dt(e, n), [o, i] = Hs(r), s = It(Dt(te(n, o), te(n, i)), Or, 1);
  if (s <= 0)
    throw new RangeError(qe);
  return s;
}
function Hc(t, e) {
  const { timeZone: n, calendar: r } = e, o = ((i, s, a) => te(s, i(dt(a, s))))(Xs, t(n), e);
  return gt(o, n, r);
}
function Gs(t, e, n, r) {
  return qs(t, En(e, n), r);
}
function qs(t, e, n) {
  const [r, o] = Io(t, e, n);
  return rt({
    ...Ee(t, o),
    ...r
  });
}
function Io(t, e, n) {
  return sr(Qt(Kt(t), e, n));
}
function Xn(t) {
  return Qt(t, Tr, 7);
}
function En(t, e) {
  return Tt[t] * e;
}
function Hs(t) {
  const e = Xs(t);
  return [e, Ee(e, 1)];
}
function Xs(t) {
  return td(6, t);
}
function Xc(t, e, n) {
  const r = Math.min(ve(t), 6);
  return We(pr(L(t, r), e, n), r);
}
function hr(t, e, n, r, o, i, s, a, c, u) {
  if (r === 0 && o === 1)
    return t;
  const l = hn(r, a) ? xe(a) && r < 6 && n >= 6 ? Kc : Jc : Qc;
  let [d, f, h] = l(t, e, n, r, o, i, s, a, c, u);
  return h && r !== 7 && (d = ((m, p, g, v, w, y, E, T) => {
    const N = oe(m);
    for (let C = v + 1; C <= g; C++) {
      if (C === 7 && g !== 7)
        continue;
      const z = ri(C, m);
      z[O[C]] += N;
      const _ = It(Dt(E(T(w, y, z)), p));
      if (_ && Math.sign(_) !== N)
        break;
      m = z;
    }
    return m;
  })(d, f, n, Math.max(6, r), s, a, c, u)), d;
}
function mr(t, e, n, r, o) {
  if (e === 6) {
    const i = ((s) => s[0] + s[1] / k)(t);
    return [Qt(i, n, r), 0];
  }
  return pr(t, En(e, n), r, o);
}
function pr(t, e, n, r) {
  let [o, i] = t;
  r && i < 0 && (i += k, o -= 1);
  const [s, a] = Pt(Qt(i, e, n), k);
  return co(o + s, a);
}
function Qt(t, e, n) {
  return Js(t / e, n) * e;
}
function Js(t, e) {
  return yd[e](t);
}
function Jc(t, e, n, r, o, i) {
  const s = oe(t), a = L(t), c = mr(a, r, o, i), u = Dt(a, c), l = Math.sign(c[0] - a[0]) === s, d = We(c, Math.min(n, 6));
  return [{
    ...t,
    ...d
  }, ke(e, u), l];
}
function Kc(t, e, n, r, o, i, s, a, c, u) {
  const l = oe(t) || 1, d = It(L(t, 5)), f = En(r, o);
  let h = Qt(d, f, i);
  const [m, p] = Mo(s, {
    ...t,
    ...ni
  }, 6, l, a, c, u), g = h - It(Dt(m, p));
  let v = 0;
  g && Math.sign(g) !== l ? e = ge(m, h) : (v += l, h = Qt(g, f, i), e = ge(p, h));
  const w = yr(h);
  return [{
    ...t,
    ...w,
    days: t.days + v
  }, e, !!v];
}
function Qc(t, e, n, r, o, i, s, a, c, u) {
  const l = oe(t), d = O[r], f = ri(r, t);
  r === 7 && (t = {
    ...t,
    weeks: t.weeks + Math.trunc(t.days / 7)
  });
  const h = or(t[d], o) * o;
  f[d] = h;
  const [m, p] = Mo(s, f, r, o * l, a, c, u), g = h + Do(e, m, p) * l * o, v = Qt(g, o, i), w = Math.sign(v - g) === l;
  return f[d] = v, [f, w ? p : m, w];
}
function ji(t, e, n, r) {
  const [o, i, s, a] = ((u) => {
    const l = wo(u = Rt(u));
    return [u.timeZone, ...l];
  })(r), c = o !== void 0;
  return ((u, l, d, f, h, m) => {
    d = pr(d, h, f, 1);
    const p = l.R(d);
    return To(Be(d, p), m) + (u ? bn(Xn(p)) : "Z");
  })(c, e(c ? t(o) : De), n.epochNanoseconds, i, s, a);
}
function Bi(t, e, n) {
  const [r, o, i, s, a, c] = ((u) => {
    u = Rt(u);
    const l = si(u), d = Us(u), f = wd(u), h = Nn(u, 4), m = Rn(u, 4);
    return [l, vd(u), f, h, ...$s(m, d)];
  })(n);
  return ((u, l, d, f, h, m, p, g, v, w) => {
    f = pr(f, v, g, 1);
    const y = u(d).R(f);
    return To(Be(f, y), w) + bn(Xn(y), p) + ((E, T) => T !== 1 ? "[" + (T === 2 ? "!" : "") + E + "]" : "")(d, m) + Oo(l, h);
  })(t, e.calendar, e.timeZone, e.epochNanoseconds, r, o, i, s, a, c);
}
function Li(t, e) {
  const [n, r, o, i] = ((u) => (u = Rt(u), [si(u), ...wo(u)]))(e);
  return s = t.calendar, a = n, c = i, To(qs(t, o, r), c) + Oo(s, a);
  var s, a, c;
}
function $i(t, e) {
  return n = t.calendar, r = t, o = vo(e), Jn(r) + Oo(n, o);
  var n, r, o;
}
function Ui(t, e) {
  return Ks(t.calendar, Qs, t, vo(e));
}
function Wi(t, e) {
  return Ks(t.calendar, tu, t, vo(e));
}
function Vi(t, e) {
  const [n, r, o] = Ls(e);
  return i = o, ta(Io(t, r, n)[0], i);
  var i;
}
function _r(t, e) {
  const [n, r, o] = Ls(e, 3);
  return r > 1 && be(t = {
    ...t,
    ...Xc(t, r, n)
  }), ((i, s) => {
    const { sign: a } = i, c = a === -1 ? K(i) : i, { hours: u, minutes: l } = c, [d, f] = lo(L(c, 3), Mt, Jt);
    oa(d);
    const h = Ro(f, s), m = s >= 0 || !a || h;
    return (a < 0 ? "-" : "") + "P" + Gi({
      Y: he(c.years),
      M: he(c.months),
      W: he(c.weeks),
      D: he(c.days)
    }) + (u || l || d || m ? "T" + Gi({
      H: he(u),
      M: he(l),
      S: he(d, m) + h
    }) : "");
  })(t, o);
}
function Ks(t, e, n, r) {
  const o = r > 1 || r === 0 && t !== D;
  return r === 1 ? t === D ? e(n) : Jn(n) : o ? Jn(n) + ea(t, r === 2) : e(n);
}
function Gi(t) {
  const e = [];
  for (const n in t) {
    const r = t[n];
    r && e.push(r, n);
  }
  return e.join("");
}
function To(t, e) {
  return Jn(t) + "T" + ta(t, e);
}
function Jn(t) {
  return Qs(t) + "-" + mt(t.isoDay);
}
function Qs(t) {
  const { isoYear: e } = t;
  return (e < 0 || e > 9999 ? na(e) + Vn(6, Math.abs(e)) : Vn(4, e)) + "-" + mt(t.isoMonth);
}
function tu(t) {
  return mt(t.isoMonth) + "-" + mt(t.isoDay);
}
function ta(t, e) {
  const n = [mt(t.isoHour), mt(t.isoMinute)];
  return e !== -1 && n.push(mt(t.isoSecond) + ((r, o, i, s) => Ro(r * jt + o * Tn + i, s))(t.isoMillisecond, t.isoMicrosecond, t.isoNanosecond, e)), n.join(":");
}
function bn(t, e = 0) {
  if (e === 1)
    return "";
  const [n, r] = Pt(Math.abs(t), Or), [o, i] = Pt(r, Tr), [s, a] = Pt(i, Mt);
  return na(t) + mt(n) + ":" + mt(o) + (s || a ? ":" + mt(s) + Ro(a) : "");
}
function Oo(t, e) {
  return e !== 1 && (e > 1 || e === 0 && t !== D) ? ea(t, e === 2) : "";
}
function ea(t, e) {
  return "[" + (e ? "!" : "") + "u-ca=" + t + "]";
}
function Ro(t, e) {
  let n = Vn(9, t);
  return n = e === void 0 ? n.replace(Sd, "") : n.slice(0, e), n ? "." + n : "";
}
function na(t) {
  return t < 0 ? "-" : "+";
}
function he(t, e) {
  return t || e ? t.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function eu(t, e) {
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
        let p = It(Dt(m, h));
        if (f && (p = Xn(p)), p === d)
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
    throw new RangeError(xl);
  if (r.length)
    return r[n === 3 ? 1 : 0];
  const o = B(e), i = ((a, c) => {
    const u = a.R(ge(c, -864e11));
    return ((l) => {
      if (l > k)
        throw new RangeError(Fl);
      return l;
    })(a.R(ge(c, k)) - u);
  })(t, o), s = i * (n === 2 ? -1 : 1);
  return (r = t.I(Be(o, s)))[n === 2 ? 0 : r.length - 1];
}
function te(t, e) {
  const n = t.I(e);
  if (n.length)
    return n[0];
  const r = ge(B(e), -864e11);
  return t.O(r, 1);
}
function qi(t, e, n) {
  return Zt(Ot(ke(e.epochNanoseconds, ((r) => {
    if (ia(r))
      throw new RangeError(Al);
    return L(r, 5);
  })(t ? K(n) : n))));
}
function Hi(t, e, n, r, o, i = /* @__PURE__ */ Object.create(null)) {
  const s = e(r.timeZone), a = t(r.calendar);
  return {
    ...r,
    ...No(s, a, r, n ? K(o) : o, i)
  };
}
function Xi(t, e, n, r, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i } = n;
  return vt(Co(t(i), n, e ? K(r) : r, o), i);
}
function Ji(t, e, n, r, o) {
  const { calendar: i } = n;
  return At(gr(t(i), n, e ? K(r) : r, o), i);
}
function Ki(t, e, n, r, o) {
  const i = n.calendar, s = t(i);
  let a = ht(fn(s, n));
  e && (r = Po(r)), r.sign < 0 && (a = s.P(a, {
    ...$,
    months: 1
  }), a = Ee(a, -1));
  const c = s.P(a, r, o);
  return dn(fn(s, c), i);
}
function Qi(t, e, n) {
  return Nt(ra(e, t ? K(n) : n)[0]);
}
function No(t, e, n, r, o) {
  const i = L(r, 5);
  let s = n.epochNanoseconds;
  if (ia(r)) {
    const a = dt(n, t);
    s = ke(Sn(t, {
      ...gr(e, a, {
        ...r,
        ...ni
      }, o),
      ...pt(wt, a)
    }), i);
  } else
    s = ke(s, i), I(o);
  return {
    epochNanoseconds: Ot(s)
  };
}
function Co(t, e, n, r) {
  const [o, i] = ra(e, n);
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
  I(r);
  const o = n.days + L(n, 5)[0];
  return o ? ht(Ee(e, o)) : e;
}
function fn(t, e, n = 1) {
  return Ee(e, n - t.day(e));
}
function ra(t, e) {
  const [n, r] = L(e, 5), [o, i] = sr(Kt(t) + r);
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
  return xe(n) ? [n, r, e(n.timeZone)] : [{
    ...n,
    ...ot
  }, r];
}
function zo(t) {
  return t ? Vs : B;
}
function wr(t) {
  return t ? M(No, t) : Co;
}
function _o(t) {
  return t ? M(Iu, t) : Tu;
}
function xe(t) {
  return t && t.epochNanoseconds;
}
function hn(t, e) {
  return t <= 6 - (xe(e) ? 1 : 0);
}
function ts(t, e, n, r, o, i, s) {
  const a = t(Rt(s).relativeTo), c = Math.max(ve(o), ve(i));
  if (hn(c, a))
    return j(be(((p, g, v, w) => {
      const y = ke(L(p), L(g), w ? -1 : 1);
      if (!Number.isFinite(y[0]))
        throw new RangeError(ue);
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
function nu(t, e, n, r, o) {
  const i = ve(r), [s, a, c, u, l] = ((N, C, z) => {
    N = dr(N, tr);
    let _ = ac(N);
    const Ct = z(N[ic]);
    let yt = yo(N);
    const P = Nn(N, 7);
    let R = Rn(N);
    if (_ === void 0 && R === void 0)
      throw new RangeError(jl);
    if (R == null && (R = 0), _ == null && (_ = Math.max(R, C)), Ws(_, R), yt = Eo(yt, R, 1), yt > 1 && R > 5 && _ !== R)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [_, R, yt, P, Ct];
  })(o, i, t), d = Math.max(i, s);
  if (!l && d <= 6)
    return j(be(((N, C, z, _, Ct) => {
      const yt = mr(L(N), z, _, Ct);
      return {
        ...$,
        ...We(yt, C)
      };
    })(r, s, a, c, u)));
  if (!xe(l) && !r.sign)
    return r;
  if (!l)
    throw new RangeError(Ir);
  const [f, h, m] = vr(e, n, l), p = zo(m), g = wr(m), v = _o(m), w = g(h, f, r);
  xe(l) || (rt(f), rt(w));
  let y = v(h, f, w, s);
  const E = r.sign, T = oe(y);
  if (E && T && E !== T)
    throw new RangeError(qe);
  return y = hr(y, p(w), s, a, c, u, h, f, p, g), j(y);
}
function ru(t) {
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
function ou(t) {
  return !t.sign;
}
function oe(t, e = O) {
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
  for (const e of Jl)
    xt(e, t[e], -4294967295, Md, 1);
  return oa(It(L(t), Mt)), t;
}
function oa(t) {
  if (!Number.isSafeInteger(t))
    throw new RangeError(Yl);
}
function L(t, e = 6) {
  return Os(t, e, O);
}
function We(t, e = 6) {
  const [n, r] = t, o = ir(r, e, O);
  if (o[O[e]] += n * (k / Tt[e]), !Number.isFinite(o[O[e]]))
    throw new RangeError(ue);
  return o;
}
function yr(t, e = 5) {
  return ir(t, e, O);
}
function ia(t) {
  return !!oe(t, ec);
}
function ve(t) {
  let e = 9;
  for (; e > 0 && !t[O[e]]; e--)
    ;
  return e;
}
function iu(t, e) {
  return [t, e];
}
function es(t) {
  const e = Math.floor(t / Bn) * Bn;
  return [e, e + Bn];
}
function su(t) {
  const e = ie(t = An(t));
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
  return e.timeZone && Zo(e.timeZone, 1), Zt(ho(cr(e), n));
}
function au(t) {
  const e = ie(V(t));
  if (!e)
    throw new RangeError(et(t));
  if (e.timeZone)
    return sa(e, e.offset ? Se(e.offset) : void 0);
  if (e.j)
    throw new RangeError(et(t));
  return ca(e);
}
function cu(t, e) {
  const n = ie(V(t));
  if (!n || !n.timeZone)
    throw new RangeError(et(t));
  const { offset: r } = n, o = r ? Se(r) : void 0, [, i, s] = ur(e);
  return sa(n, o, i, s);
}
function Se(t) {
  const e = Zo(t);
  if (e === void 0)
    throw new RangeError(et(t));
  return e;
}
function uu(t) {
  const e = ie(V(t));
  if (!e || e.j)
    throw new RangeError(et(t));
  return vt(aa(e));
}
function Fo(t, e, n) {
  let r = ie(V(t));
  if (!r || r.j)
    throw new RangeError(et(t));
  return e ? r.calendar === D && (r = r.isoYear === -271821 && r.isoMonth === 4 ? {
    ...r,
    isoDay: 20,
    ...ot
  } : {
    ...r,
    isoDay: 1,
    ...ot
  }) : n && r.calendar === D && (r = {
    ...r,
    isoYear: kt
  }), At(r.C ? aa(r) : ca(r));
}
function lu(t, e) {
  const n = xo(V(e));
  if (n)
    return ko(n), dn(fo(ye(n)));
  const r = Fo(e, 1);
  return dn(fn(t(r.calendar), r));
}
function ko(t) {
  if (t.calendar !== D)
    throw new RangeError(Ft(t.calendar));
}
function du(t, e) {
  const n = Yo(V(e));
  if (n)
    return ko(n), Hn(ye(n));
  const r = Fo(e, 0, 1), { calendar: o } = r, i = t(o), [s, a, c] = i.v(r), [u, l] = i.q(s, a), [d, f] = i.G(u, l, c);
  return Hn(ht(i.V(d, f, c)), o);
}
function fu(t) {
  let e, n = ((r) => {
    const o = Cd.exec(r);
    return o ? (Er(o[10]), da(o)) : void 0;
  })(V(t));
  if (!n) {
    if (n = ie(t), !n)
      throw new RangeError(et(t));
    if (!n.C)
      throw new RangeError(et(t));
    if (n.j)
      throw new RangeError(Ft("Z"));
    ko(n);
  }
  if ((e = xo(t)) && Zi(e))
    throw new RangeError(et(t));
  if ((e = Yo(t)) && Zi(e))
    throw new RangeError(et(t));
  return Nt(Le(n, 1));
}
function hu(t) {
  const e = ((n) => {
    const r = Pd.exec(n);
    return r ? ((o) => {
      function i(l, d, f) {
        let h = 0, m = 0;
        if (f && ([h, c] = Pt(c, Tt[f])), l !== void 0) {
          if (a)
            throw new RangeError(Ft(l));
          m = ((p) => {
            const g = parseInt(p);
            if (!Number.isFinite(g))
              throw new RangeError(Ft(p));
            return g;
          })(l), s = 1, d && (c = Ao(d) * (Tt[f] / Mt), a = 1);
        }
        return h + m;
      }
      let s = 0, a = 0, c = 0, u = {
        ...Ae(O, [i(o[2]), i(o[3]), i(o[4]), i(o[5]), i(o[6], o[7], 5), i(o[8], o[9], 4), i(o[10], o[11], 3)]),
        ...ir(c, 2, O)
      };
      if (!s)
        throw new RangeError(Za(O));
      return jo(o[1]) < 0 && (u = K(u)), u;
    })(r) : void 0;
  })(V(t));
  if (!e)
    throw new RangeError(et(t));
  return j(be(e));
}
function mu(t) {
  const e = ie(t) || xo(t) || Yo(t);
  return e ? e.calendar : t;
}
function pu(t) {
  const e = ie(t);
  return e && (e.timeZone || e.j && De || e.offset) || t;
}
function sa(t, e, n = 0, r = 0) {
  const o = Bo(t.timeZone), i = S(o);
  let s;
  return cr(t), s = t.C ? Ue(i, t, e, n, r, !i.$, t.j) : te(i, t), gt(s, o, Dr(t.calendar));
}
function aa(t) {
  return ua(rt(cr(t)));
}
function ca(t) {
  return ua(ht(ye(t)));
}
function ua(t) {
  return {
    ...t,
    calendar: Dr(t.calendar)
  };
}
function ie(t) {
  const e = Nd.exec(t);
  return e ? ((n) => {
    const r = n[10], o = (r || "").toUpperCase() === "Z";
    return {
      isoYear: la(n),
      isoMonth: parseInt(n[4]),
      isoDay: parseInt(n[5]),
      ...da(n.slice(5)),
      ...Er(n[16]),
      C: !!n[6],
      j: o,
      offset: o ? void 0 : r
    };
  })(e) : void 0;
}
function xo(t) {
  const e = Od.exec(t);
  return e ? ((n) => ({
    isoYear: la(n),
    isoMonth: parseInt(n[4]),
    isoDay: 1,
    ...Er(n[5])
  }))(e) : void 0;
}
function Yo(t) {
  const e = Rd.exec(t);
  return e ? ((n) => ({
    isoYear: kt,
    isoMonth: parseInt(n[1]),
    isoDay: parseInt(n[2]),
    ...Er(n[3])
  }))(e) : void 0;
}
function Zo(t, e) {
  const n = zd.exec(t);
  return n ? ((r, o) => {
    const i = r[4] || r[5];
    if (o && i)
      throw new RangeError(Ft(i));
    return ((s) => {
      if (Math.abs(s) >= k)
        throw new RangeError(Pl);
      return s;
    })((_e(r[2]) * Or + _e(r[3]) * Tr + _e(r[4]) * Mt + Ao(r[5] || "")) * jo(r[1]));
  })(n, e) : void 0;
}
function la(t) {
  const e = jo(t[1]), n = parseInt(t[2] || t[3]);
  if (e < 0 && !n)
    throw new RangeError(Ft(-0));
  return e * n;
}
function da(t) {
  const e = _e(t[3]);
  return {
    ...sr(Ao(t[4] || ""))[0],
    isoHour: _e(t[1]),
    isoMinute: _e(t[2]),
    isoSecond: e === 60 ? 59 : e
  };
}
function Er(t) {
  let e, n;
  const r = [];
  if (t.replace(_d, (o, i, s) => {
    const a = !!i, [c, u] = s.split("=").reverse();
    if (u) {
      if (u === "u-ca")
        r.push(c), e || (e = a);
      else if (a || /[A-Z]/.test(u))
        throw new RangeError(Ft(o));
    } else {
      if (n)
        throw new RangeError(Ft(o));
      n = c;
    }
    return "";
  }), r.length > 1 && e)
    throw new RangeError(Ft(t));
  return {
    timeZone: n,
    calendar: r[0] || D
  };
}
function Ao(t) {
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
function gu(t) {
  return Bo(V(t));
}
function Bo(t) {
  const e = Lo(t);
  return typeof e == "number" ? bn(e) : e ? ((n) => {
    if (xd.test(n))
      throw new RangeError($a(n));
    if (kd.test(n))
      throw new RangeError(_l);
    return n.toLowerCase().split("/").map((r, o) => (r.length <= 3 || /\d/.test(r)) && !/etc|yap/.test(r) ? r.toUpperCase() : r.replace(/baja|dumont|[a-z]+/g, (i, s) => i.length <= 2 && !o || i === "in" || i === "chat" ? i.toUpperCase() : i.length > 2 || !s ? ki(i).replace(/island|noronha|murdo|rivadavia|urville/, ki) : i)).join("/");
  })(t) : De;
}
function ns(t) {
  const e = Lo(t);
  return typeof e == "number" ? e : e ? e.resolvedOptions().timeZone : De;
}
function Lo(t) {
  const e = Zo(t = t.toUpperCase(), 1);
  return e !== void 0 ? e : t !== De ? Fd(t) : void 0;
}
function fa(t, e) {
  return ut(t.epochNanoseconds, e.epochNanoseconds);
}
function ha(t, e) {
  return ut(t.epochNanoseconds, e.epochNanoseconds);
}
function vu(t, e, n, r, o, i) {
  const s = t(Rt(i).relativeTo), a = Math.max(ve(r), ve(o));
  if (Is(O, r, o))
    return 0;
  if (hn(a, s))
    return ut(L(r), L(o));
  if (!s)
    throw new RangeError(Ir);
  const [c, u, l] = vr(e, n, s), d = zo(l), f = wr(l);
  return ut(d(f(u, c, r)), d(f(u, c, o)));
}
function ma(t, e) {
  return Ge(t, e) || $o(t, e);
}
function Ge(t, e) {
  return qt(X(t), X(e));
}
function $o(t, e) {
  return qt(Kt(t), Kt(e));
}
function wu(t, e) {
  return !fa(t, e);
}
function yu(t, e) {
  return !ha(t, e) && !!pa(t.timeZone, e.timeZone) && t.calendar === e.calendar;
}
function Eu(t, e) {
  return !ma(t, e) && t.calendar === e.calendar;
}
function bu(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Su(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Mu(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Du(t, e) {
  return !$o(t, e);
}
function pa(t, e) {
  if (t === e)
    return 1;
  try {
    return ns(t) === ns(e);
  } catch {
  }
}
function rs(t, e, n, r) {
  const o = $e(t, r, 3, 5), i = br(e.epochNanoseconds, n.epochNanoseconds, ...o);
  return j(t ? K(i) : i);
}
function os(t, e, n, r, o, i) {
  const s = Mr(r.calendar, o.calendar), [a, c, u, l] = $e(n, i, 5), d = r.epochNanoseconds, f = o.epochNanoseconds, h = ut(f, d);
  let m;
  if (h)
    if (a < 6)
      m = br(d, f, a, c, u, l);
    else {
      const p = e(((v, w) => {
        if (!pa(v, w))
          throw new RangeError(Ua);
        return v;
      })(r.timeZone, o.timeZone)), g = t(s);
      m = va(g, p, r, o, h, a, i), m = hr(m, f, a, c, u, l, g, r, Vs, M(No, p));
    }
  else
    m = $;
  return j(n ? K(m) : m);
}
function is(t, e, n, r, o) {
  const i = Mr(n.calendar, r.calendar), [s, a, c, u] = $e(e, o, 6), l = B(n), d = B(r), f = ut(d, l);
  let h;
  if (f)
    if (s <= 6)
      h = br(l, d, s, a, c, u);
    else {
      const m = t(i);
      h = wa(m, n, r, f, s, o), h = hr(h, d, s, a, c, u, m, n, B, Co);
    }
  else
    h = $;
  return j(e ? K(h) : h);
}
function ss(t, e, n, r, o) {
  const i = Mr(n.calendar, r.calendar);
  return ga(e, () => t(i), n, r, ...$e(e, o, 6, 9, 6));
}
function as(t, e, n, r, o) {
  const i = Mr(n.calendar, r.calendar), s = $e(e, o, 9, 9, 8), a = t(i), c = fn(a, n), u = fn(a, r);
  return c.isoYear === u.isoYear && c.isoMonth === u.isoMonth && c.isoDay === u.isoDay ? j($) : ga(e, () => a, ht(c), ht(u), ...s, 8);
}
function ga(t, e, n, r, o, i, s, a, c = 6) {
  const u = B(n), l = B(r);
  if (u === void 0 || l === void 0)
    throw new RangeError(ue);
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
function cs(t, e, n, r) {
  const [o, i, s, a] = $e(t, r, 5, 5), c = Qt(Uo(e, n), En(i, s), a), u = {
    ...$,
    ...yr(c, o)
  };
  return j(t ? K(u) : u);
}
function Iu(t, e, n, r, o, i) {
  const s = ut(r.epochNanoseconds, n.epochNanoseconds);
  return s ? o < 6 ? ya(n.epochNanoseconds, r.epochNanoseconds, o) : va(e, t, n, r, s, o, i) : $;
}
function Tu(t, e, n, r, o) {
  const i = B(e), s = B(n), a = ut(s, i);
  return a ? r <= 6 ? ya(i, s, r) : wa(t, e, n, a, r, o) : $;
}
function va(t, e, n, r, o, i, s) {
  const [a, c, u] = ((f, h, m, p) => {
    function g() {
      return C = {
        ...Ee(y, T++ * -p),
        ...w
      }, z = Sn(f, C), ut(E, z) === -p;
    }
    const v = dt(h, f), w = pt(wt, v), y = dt(m, f), E = m.epochNanoseconds;
    let T = 0;
    const N = Uo(v, y);
    let C, z;
    if (Math.sign(N) === -p && T++, g() && (p === -1 || g()))
      throw new RangeError(qe);
    const _ = It(Dt(z, E));
    return [v, C, _];
  })(e, n, r, o);
  var l, d;
  return {
    ...i === 6 ? (l = a, d = c, {
      ...$,
      days: Ea(l, d)
    }) : t.N(a, c, i, s),
    ...yr(u)
  };
}
function wa(t, e, n, r, o, i) {
  const [s, a, c] = ((u, l, d) => {
    let f = l, h = Uo(u, l);
    return Math.sign(h) === -d && (f = Ee(l, -d), h += k * d), [u, f, h];
  })(e, n, r);
  return {
    ...t.N(s, a, o, i),
    ...yr(c)
  };
}
function br(t, e, n, r, o, i) {
  return {
    ...$,
    ...We(mr(Dt(t, e), r, o, i), n)
  };
}
function ya(t, e, n) {
  return {
    ...$,
    ...We(Dt(t, e), n)
  };
}
function Ea(t, e) {
  return Sr(X(t), X(e));
}
function Sr(t, e) {
  return Math.trunc((e - t) / nt);
}
function Uo(t, e) {
  return Kt(e) - Kt(t);
}
function Mr(t, e) {
  if (t !== e)
    throw new RangeError(La);
  return t;
}
function ba(t) {
  return this.m(t)[0];
}
function Sa(t) {
  return this.m(t)[1];
}
function Wo(t) {
  const [e] = this.v(t);
  return Sr(this.p(e), X(t)) + 1;
}
function Vo(t) {
  const e = Yd.exec(t);
  if (!e)
    throw new RangeError(Cl(t));
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
function Ma(t, e) {
  return (e + t) * (Math.sign(e) || 1) || 0;
}
function $r(t) {
  return Qa[Ia(t)];
}
function Da(t) {
  return Gl[Ia(t)];
}
function Ia(t) {
  return we(t.id || D);
}
function Ou(t) {
  function e(o) {
    return ((i, s) => ({
      ...Ta(i, s),
      o: i.month,
      day: parseInt(i.day)
    }))(mo(n, o), r);
  }
  const n = pi(t), r = we(t);
  return {
    id: t,
    h: Ru(e),
    l: Nu(e)
  };
}
function Ru(t) {
  return ct((e) => {
    const n = X(e);
    return t(n);
  }, WeakMap);
}
function Nu(t) {
  const e = t(0).year - od;
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
      u: Wa(a.reverse())
    };
  });
}
function Ta(t, e) {
  let n, r, o = Oa(t);
  if (t.era) {
    const i = Qa[e], s = tc[e] || {};
    i !== void 0 && (n = e === "islamic" ? "ah" : t.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n === "ad" || n === "a" ? n = "ce" : n === "beforeroc" && (n = "broc"), n = s[n] || n, r = o, o = Ma(r, i[n] || 0));
  }
  return {
    era: n,
    eraYear: r,
    year: o
  };
}
function Oa(t) {
  return parseInt(t.relatedYear || t.year);
}
function Qn(t) {
  const { year: e, o: n, day: r } = this.h(t), { u: o } = this.l(e);
  return [e, o[n] + 1, r];
}
function mn(t, e = 1, n = 1) {
  return this.l(t).i[e - 1] + (n - 1) * nt;
}
function Ra(t, e) {
  const n = jn.call(this, t);
  return [Go(e, n), n === e];
}
function jn(t) {
  const e = ls(this, t), n = ls(this, t - 1), r = e.length;
  if (r > n.length) {
    const o = Da(this);
    if (o < 0)
      return -o;
    for (let i = 0; i < r; i++)
      if (e[i] !== n[i])
        return i + 1;
  }
}
function xn(t) {
  return Sr(mn.call(this, t), mn.call(this, t + 1));
}
function us(t, e) {
  const { i: n } = this.l(t);
  let r = e + 1, o = n;
  return r > n.length && (r = 1, o = this.l(t + 1).i), Sr(n[e - 1], o[r - 1]);
}
function Yn(t) {
  return this.l(t).i.length;
}
function Na(t) {
  const e = this.h(t);
  return [e.era, e.eraYear];
}
function ls(t, e) {
  return Object.keys(t.l(e).u);
}
function Dn(t) {
  return Dr(V(t));
}
function Dr(t) {
  if ((t = t.toLowerCase()) !== D && t !== He) {
    const e = pi(t).resolvedOptions().calendar;
    if (we(t) !== we(e))
      throw new RangeError(Ba(t));
    return e;
  }
  return t;
}
function we(t) {
  return t === "islamicc" && (t = "islamic"), t.split("-")[0];
}
function Ca(t, e) {
  return (n) => n === D ? t : n === He || n === ee ? Object.assign(Object.create(t), {
    id: n
  }) : Object.assign(Object.create(e), Zd(n));
}
function Cu(t, e, n, r) {
  const o = se(n, r, Lt, [], Ha);
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
function zu(t, e, n, r, o, i) {
  const s = se(n, o, Lt, Ga, Ha), a = t(s.timeZone), [c, u, l] = ur(i), d = n.F(s, fr(c)), f = In(s, c);
  return gt(Ue(e(a), {
    ...d,
    ...f
  }, s.offset !== void 0 ? Se(s.offset) : void 0, u, l), a, r);
}
function _u(t, e, n) {
  const r = se(t, e, Lt, [], Bt), o = I(n);
  return vt(rt({
    ...t.F(r, fr(o)),
    ...In(r, o)
  }));
}
function Pu(t, e, n, r = []) {
  const o = se(t, e, Lt, r);
  return t.F(o, n);
}
function Fu(t, e, n, r) {
  const o = se(t, e, ti, r);
  return t.K(o, n);
}
function ku(t, e, n, r) {
  const o = se(t, n, Lt, On);
  return e && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = kt), t._(o, r);
}
function xu(t, e) {
  return Nt(In(lt(t, Gr, [], 1), I(e)));
}
function Yu(t) {
  const e = lt(t, ei);
  return j(be({
    ...$,
    ...e
  }));
}
function se(t, e, n, r = [], o = []) {
  return lt(e, [...t.fields(n), ...o].sort(), r);
}
function lt(t, e, n, r = !n) {
  const o = {};
  let i, s = 0;
  for (const a of e) {
    if (a === i)
      throw new RangeError(Sl(a));
    if (a === "constructor" || a === "__proto__")
      throw new RangeError(bl(a));
    let c = t[a];
    if (c !== void 0)
      s = 1, ds[a] && (c = ds[a](c, a)), o[a] = c;
    else if (n) {
      if (n.includes(a))
        throw new TypeError(Ho(a));
      o[a] = Ka[a];
    }
    i = a;
  }
  if (r && !s)
    throw new TypeError(Za(e));
  return o;
}
function In(t, e) {
  return Le(gi({
    ...Ka,
    ...t
  }), e);
}
function Zu(t, e, n, r, o) {
  const { calendar: i, timeZone: s } = n, a = t(i), c = e(s), u = [...a.fields(Lt), ...qa].sort(), l = ((v) => {
    const w = dt(v, S), y = bn(w.offsetNanoseconds), E = Cr(v.calendar), [T, N, C] = E.v(w), [z, _] = E.q(T, N), Ct = Mn(z, _);
    return {
      ...Vd(w),
      year: T,
      monthCode: Ct,
      day: C,
      offset: y
    };
  })(n), d = lt(r, u), f = a.k(l, d), h = {
    ...l,
    ...d
  }, [m, p, g] = ur(o, 2);
  return gt(Ue(c, {
    ...a.F(f, fr(m)),
    ...Le(gi(h), m)
  }, Se(h.offset), p, g), s, i);
}
function Au(t, e, n, r) {
  const o = t(e.calendar), i = [...o.fields(Lt), ...Bt].sort(), s = {
    ..._a(a = e),
    hour: a.isoHour,
    minute: a.isoMinute,
    second: a.isoSecond,
    millisecond: a.isoMillisecond,
    microsecond: a.isoMicrosecond,
    nanosecond: a.isoNanosecond
  };
  var a;
  const c = lt(n, i), u = I(r), l = o.k(s, c), d = {
    ...s,
    ...c
  };
  return vt(rt({
    ...o.F(l, fr(u)),
    ...Le(gi(d), u)
  }));
}
function ju(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(Lt).sort(), s = _a(e), a = lt(n, i), c = o.k(s, a);
  return o.F(c, r);
}
function Bu(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(ti).sort(), s = ((u) => {
    const l = Cr(u.calendar), [d, f] = l.v(u), [h, m] = l.q(d, f);
    return {
      year: d,
      monthCode: Mn(h, m)
    };
  })(e), a = lt(n, i), c = o.k(s, a);
  return o.K(c, r);
}
function Lu(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(Lt).sort(), s = ((u) => {
    const l = Cr(u.calendar), [d, f, h] = l.v(u), [m, p] = l.q(d, f);
    return {
      monthCode: Mn(m, p),
      day: h
    };
  })(e), a = lt(n, i), c = o.k(s, a);
  return o._(c, r);
}
function $u(t, e, n) {
  return Nt(((r, o, i) => In({
    ...pt(Gr, r),
    ...lt(o, Gr)
  }, I(i)))(t, e, n));
}
function Uu(t, e) {
  return j((n = t, r = e, be({
    ...n,
    ...lt(r, ei)
  })));
  var n, r;
}
function za(t, e, n, r, o) {
  e = pt(n = t.fields(n), e), r = lt(r, o = t.fields(o), []);
  let i = t.k(e, r);
  return i = lt(i, [...n, ...o].sort(), []), t.F(i);
}
function Pr(t, e) {
  const n = $r(t), r = tc[t.id || ""] || {};
  let { era: o, eraYear: i, year: s } = e;
  if (o !== void 0 || i !== void 0) {
    if (o === void 0 || i === void 0)
      throw new TypeError(Tl);
    if (!n)
      throw new RangeError(Il);
    const a = n[r[o] || o];
    if (a === void 0)
      throw new RangeError(Rl(o));
    const c = Ma(i, a);
    if (s !== void 0 && s !== c)
      throw new RangeError(Ol);
    s = c;
  } else if (s === void 0)
    throw new TypeError(Nl(n));
  return s;
}
function Zn(t, e, n, r) {
  let { month: o, monthCode: i } = e;
  if (i !== void 0) {
    const s = ((a, c, u, l) => {
      const d = a.L(u), [f, h] = Vo(c);
      let m = Kn(f, h, d);
      if (h) {
        const p = Da(a);
        if (p === void 0)
          throw new RangeError(en);
        if (p > 0) {
          if (m > p)
            throw new RangeError(en);
          if (d === void 0) {
            if (l === 1)
              throw new RangeError(en);
            m--;
          }
        } else {
          if (m !== -p)
            throw new RangeError(en);
          if (d === void 0 && l === 1)
            throw new RangeError(en);
        }
      }
      return m;
    })(t, i, n, r);
    if (o !== void 0 && o !== s)
      throw new RangeError(zl);
    o = s, r = 1;
  } else if (o === void 0)
    throw new TypeError(ja);
  return xt("month", o, 1, t.B(n), r);
}
function Fr(t, e, n, r, o) {
  return tt(e, "day", 1, t.U(r, n), o);
}
function kr(t, e, n, r) {
  let o = 0;
  const i = [];
  for (const s of n)
    e[s] !== void 0 ? o = 1 : i.push(s);
  if (Object.assign(t, e), o)
    for (const s of r || i)
      delete t[s];
}
function _a(t) {
  const e = Cr(t.calendar), [n, r, o] = e.v(t), [i, s] = e.q(n, r);
  return {
    year: n,
    monthCode: Mn(i, s),
    day: o
  };
}
function Wu(t) {
  return Zt(Ot(uo(so(t))));
}
function Vu(t, e, n, r, o = D) {
  return gt(Ot(uo(so(n))), e(r), t(o));
}
function Gu(t, e, n, r, o = 0, i = 0, s = 0, a = 0, c = 0, u = 0, l = D) {
  return vt(rt(cr(Yt(H, Ae(Rr, [e, n, r, o, i, s, a, c, u])))), t(l));
}
function qu(t, e, n, r, o = D) {
  return At(ht(ye(Yt(H, {
    isoYear: e,
    isoMonth: n,
    isoDay: r
  }))), t(o));
}
function Hu(t, e, n, r = D, o = 1) {
  const i = H(e), s = H(n), a = t(r);
  return dn(fo(ye({
    isoYear: i,
    isoMonth: s,
    isoDay: H(o)
  })), a);
}
function Xu(t, e, n, r = D, o = kt) {
  const i = H(e), s = H(n), a = t(r);
  return Hn(ht(ye({
    isoYear: H(o),
    isoMonth: i,
    isoDay: s
  })), a);
}
function Ju(t = 0, e = 0, n = 0, r = 0, o = 0, i = 0) {
  return Nt(Le(Yt(H, Ae(wt, [t, e, n, r, o, i])), 1));
}
function Ku(t = 0, e = 0, n = 0, r = 0, o = 0, i = 0, s = 0, a = 0, c = 0, u = 0) {
  return j(be(Yt(ao, Ae(O, [t, e, n, r, o, i, s, a, c, u]))));
}
function Qu(t, e, n = D) {
  return gt(t.epochNanoseconds, e, n);
}
function tl(t) {
  return Zt(t.epochNanoseconds);
}
function Pa(t, e) {
  return vt(dt(e, t));
}
function Fa(t, e) {
  return At(dt(e, t));
}
function ka(t, e) {
  return Nt(dt(e, t));
}
function el(t, e, n, r) {
  const o = ((i, s, a, c) => {
    const u = ((l) => uc(Rt(l)))(c);
    return Sn(i(s), a, u);
  })(t, n, e, r);
  return gt(Ot(o), n, e.calendar);
}
function nl(t, e, n, r, o) {
  const i = t(o.timeZone), s = o.plainTime, a = s !== void 0 ? e(s) : void 0, c = n(i);
  let u;
  return u = a ? Sn(c, {
    ...r,
    ...a
  }) : te(c, {
    ...r,
    ...ot
  }), gt(u, i, r.calendar);
}
function rl(t, e = ot) {
  return vt(rt({
    ...t,
    ...e
  }));
}
function ol(t, e, n) {
  return ((r, o) => {
    const i = se(r, o, Xa);
    return r.K(i, void 0);
  })(t(e.calendar), n);
}
function il(t, e, n) {
  return ((r, o) => {
    const i = se(r, o, Ja);
    return r._(i);
  })(t(e.calendar), n);
}
function sl(t, e, n, r) {
  return ((o, i, s) => za(o, i, Xa, yn(s), On))(t(e.calendar), n, r);
}
function al(t, e, n, r) {
  return ((o, i, s) => za(o, i, Ja, yn(s), Jo))(t(e.calendar), n, r);
}
function cl(t) {
  return Zt(Ot(Gn(ao(t), jt)));
}
function ul(t) {
  return Zt(Ot(uo(so(t))));
}
function Me(t, e, n) {
  const r = new Set(n);
  return (o, i) => {
    const s = n && Fi(o, n);
    if (!Fi(o = ((a, c) => {
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
function ae(t, e = xa, n = 0) {
  const [r, , , o] = t;
  return (i, s = ff, ...a) => {
    const c = e(o && o(...a), i, s, r, n), u = c.resolvedOptions();
    return [c, ...ll(t, u, a)];
  };
}
function xa(t, e, n, r, o) {
  if (n = r(n, o), t) {
    if (n.timeZone !== void 0)
      throw new TypeError($l);
    n.timeZone = t;
  }
  return new Ht(e, n);
}
function ll(t, e, n) {
  const [, r, o] = t;
  return n.map((i) => (i.calendar && ((s, a, c) => {
    if ((c || s !== D) && s !== a)
      throw new RangeError(La);
  })(i.calendar, e.calendar, o), r(i, e)));
}
function dl(t, e, n) {
  const r = e.timeZone, o = t(r), i = {
    ...dt(e, o),
    ...n || ot
  };
  let s;
  return s = n ? Ue(o, i, i.offsetNanoseconds, 2) : te(o, i), gt(s, r, e.calendar);
}
function fl(t, e = ot) {
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
function hl(t, e) {
  return {
    ...t,
    timeZone: e
  };
}
function xr(t) {
  const e = Ur();
  return Be(e, t.R(e));
}
function Ur() {
  return Gn(Date.now(), jt);
}
function tn() {
  return fs || (fs = new Ht().resolvedOptions().timeZone);
}
const ml = (t, e) => `Non-integer ${t}: ${e}`, pl = (t, e) => `Non-positive ${t}: ${e}`, gl = (t, e) => `Non-finite ${t}: ${e}`, vl = (t) => `Cannot convert bigint to ${t}`, wl = (t) => `Invalid bigint: ${t}`, yl = "Cannot convert Symbol to string", El = "Invalid object", Ya = (t, e, n, r, o) => o ? Ya(t, o[e], o[n], o[r]) : ce(t, e) + `; must be between ${n}-${r}`, ce = (t, e) => `Invalid ${t}: ${e}`, Ho = (t) => `Missing ${t}`, bl = (t) => `Invalid field ${t}`, Sl = (t) => `Duplicate field ${t}`, Za = (t) => "No valid fields: " + t.join(), Ml = "Invalid bag", Aa = (t, e, n) => ce(t, e) + "; must be " + Object.keys(n).join(), Dl = "Cannot use valueOf", Wr = "Invalid calling context", Il = "Forbidden era/eraYear", Tl = "Mismatching era/eraYear", Ol = "Mismatching year/eraYear", Rl = (t) => `Invalid era: ${t}`, Nl = (t) => "Missing year" + (t ? "/era/eraYear" : ""), Cl = (t) => `Invalid monthCode: ${t}`, zl = "Mismatching month/monthCode", ja = "Missing month/monthCode", en = "Invalid leap month", qe = "Invalid protocol results", Ba = (t) => ce("Calendar", t), La = "Mismatching Calendars", $a = (t) => ce("TimeZone", t), Ua = "Mismatching TimeZones", _l = "Forbidden ICU TimeZone", Pl = "Out-of-bounds offset", Fl = "Out-of-bounds TimeZone gap", kl = "Invalid TimeZone offset", xl = "Ambiguous offset", ue = "Out-of-bounds date", Yl = "Out-of-bounds duration", Zl = "Cannot mix duration signs", Ir = "Missing relativeTo", Al = "Cannot use large units", jl = "Required smallestUnit or largestUnit", Bl = "smallestUnit > largestUnit", et = (t) => `Cannot parse: ${t}`, Ft = (t) => `Invalid substring: ${t}`, Ll = (t) => `Cannot format ${t}`, Yr = "Mismatching types for formatting", $l = "Cannot specify TimeZone", Wa = /* @__PURE__ */ M(rr, (t, e) => e), Ye = /* @__PURE__ */ M(rr, (t, e, n) => n), mt = /* @__PURE__ */ M(Vn, 2), Vr = {
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
}, Xo = /* @__PURE__ */ Object.keys(Vr), nt = 864e5, Va = 1e3, Tn = 1e3, jt = 1e6, Mt = 1e9, Tr = 6e10, Or = 36e11, k = 864e11, Tt = [1, Tn, jt, Mt, Tr, Or, k], Bt = /* @__PURE__ */ Xo.slice(0, 6), Gr = /* @__PURE__ */ wn(Bt), Ul = ["offset"], Ga = ["timeZone"], qa = /* @__PURE__ */ Bt.concat(Ul), Ha = /* @__PURE__ */ qa.concat(Ga), qr = ["era", "eraYear"], Wl = /* @__PURE__ */ qr.concat(["year"]), Jo = ["year"], Ko = ["monthCode"], Qo = /* @__PURE__ */ ["month"].concat(Ko), On = ["day"], ti = /* @__PURE__ */ Qo.concat(Jo), Xa = /* @__PURE__ */ Ko.concat(Jo), Lt = /* @__PURE__ */ On.concat(ti), Vl = /* @__PURE__ */ On.concat(Qo), Ja = /* @__PURE__ */ On.concat(Ko), Ka = /* @__PURE__ */ Ye(Bt, 0), D = "iso8601", He = "gregory", ee = "japanese", Qa = {
  [He]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [ee]: {
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
}, tc = {
  [He]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [ee]: {
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
}, Gl = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, V = /* @__PURE__ */ M(oo, "string"), ql = /* @__PURE__ */ M(oo, "boolean"), Hl = /* @__PURE__ */ M(oo, "number"), O = /* @__PURE__ */ Xo.map((t) => t + "s"), ei = /* @__PURE__ */ wn(O), Xl = /* @__PURE__ */ O.slice(0, 6), ec = /* @__PURE__ */ O.slice(6), Jl = /* @__PURE__ */ ec.slice(1), Kl = /* @__PURE__ */ Wa(O), $ = /* @__PURE__ */ Ye(O, 0), ni = /* @__PURE__ */ Ye(Xl, 0), ri = /* @__PURE__ */ M(Ts, O), wt = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], oi = ["isoDay", "isoMonth", "isoYear"], Rr = /* @__PURE__ */ wt.concat(oi), ii = /* @__PURE__ */ wn(oi), nc = /* @__PURE__ */ wn(wt), Ql = /* @__PURE__ */ wn(Rr), ot = /* @__PURE__ */ Ye(nc, 0), td = /* @__PURE__ */ M(Ts, Rr), rc = 1e8, ed = rc * nt, nd = [rc, 0], rd = [-1e8, 0], pn = 275760, gn = -271821, Ht = Intl.DateTimeFormat, oc = "en-GB", od = 1970, kt = 1972, $t = 12, id = /* @__PURE__ */ je(1868, 9, 8), sd = /* @__PURE__ */ ct(jc, WeakMap), tr = "smallestUnit", Hr = "unit", sn = "roundingIncrement", Zr = "fractionalSecondDigits", ic = "relativeTo", Ar = "direction", sc = {
  constrain: 0,
  reject: 1
}, ad = /* @__PURE__ */ Object.keys(sc), cd = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, ud = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, ld = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, dd = {
  auto: 0,
  never: 1,
  critical: 2
}, fd = {
  auto: 0,
  never: 1
}, hd = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, md = {
  previous: -1,
  next: 1
}, Rn = /* @__PURE__ */ M(bo, tr), ac = /* @__PURE__ */ M(bo, "largestUnit"), pd = /* @__PURE__ */ M(bo, Hr), cc = /* @__PURE__ */ M(re, "overflow", sc), uc = /* @__PURE__ */ M(re, "disambiguation", cd), gd = /* @__PURE__ */ M(re, "offset", ud), si = /* @__PURE__ */ M(re, "calendarName", ld), vd = /* @__PURE__ */ M(re, "timeZoneName", dd), wd = /* @__PURE__ */ M(re, "offset", fd), Nn = /* @__PURE__ */ M(re, "roundingMode", hd), ai = "PlainYearMonth", ci = "PlainMonthDay", Cn = "PlainDate", Xe = "PlainDateTime", ui = "PlainTime", le = "ZonedDateTime", li = "Instant", di = "Duration", yd = [Math.floor, (t) => kn(t) ? Math.floor(t) : Math.round(t), Math.ceil, (t) => kn(t) ? Math.ceil(t) : Math.round(t), Math.trunc, (t) => kn(t) ? Math.trunc(t) || 0 : Math.round(t), (t) => t < 0 ? Math.floor(t) : Math.ceil(t), (t) => Math.sign(t) * Math.round(Math.abs(t)) || 0, (t) => kn(t) ? (t = Math.trunc(t) || 0) + t % 2 : Math.round(t)], De = "UTC", Bn = 5184e3, Ed = /* @__PURE__ */ qn(1847), bd = /* @__PURE__ */ qn(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), Sd = /0+$/, dt = /* @__PURE__ */ ct(eu, WeakMap), Md = 2 ** 32 - 1, S = /* @__PURE__ */ ct((t) => {
  const e = Lo(t);
  return typeof e == "object" ? new Id(e) : new Dd(e || 0);
});
class Dd {
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
        throw new RangeError(ue);
    })(e), [ho(e, this.$)];
  }
  O() {
  }
}
class Id {
  constructor(e) {
    this.nn = ((n) => {
      function r(u) {
        const l = ln(u, a, c), [d, f] = es(l), h = i(d), m = i(f);
        return h === m ? h : o(s(d, f), h, m, u);
      }
      function o(u, l, d, f) {
        let h, m;
        for (; (f === void 0 || (h = f < u[0] ? l : f >= u[1] ? d : void 0) === void 0) && (m = u[1] - u[0]); ) {
          const p = u[0] + Math.floor(m / 2);
          n(p) === d ? u[1] = p : u[0] = p + 1;
        }
        return h;
      }
      const i = ct(n), s = ct(iu);
      let a = Ed, c = bd;
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
          let [f, h] = es(d);
          const m = Bn * l, p = l < 0 ? () => h > a || (a = d, 0) : () => f < c || (c = d, 0);
          for (; p(); ) {
            const g = i(f), v = i(h);
            if (g !== v) {
              const w = s(f, h);
              o(w, g, v);
              const y = w[0];
              if ((qt(y, u) || 1) === l)
                return y;
            }
            f += m, h += m;
          }
        }
      };
    })(/* @__PURE__ */ ((n) => (r) => {
      const o = mo(n, r * Va);
      return qn(Oa(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - r;
    })(e));
  }
  R(e) {
    return this.nn.rn(((n) => Yi(n)[0])(e)) * Mt;
  }
  I(e) {
    const [n, r] = [qn((o = e).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * jt + o.isoMicrosecond * Tn + o.isoNanosecond];
    var o;
    return this.nn.tn(n).map((i) => Ot(ge(Gn(i, Mt), r)));
  }
  O(e, n) {
    const [r, o] = Yi(e), i = this.nn.O(r + (n > 0 || o ? 1 : 0), n);
    if (i !== void 0)
      return Gn(i, Mt);
  }
}
const fi = "([+-])", Ln = "(?:[.,](\\d{1,9}))?", lc = `(?:(?:${fi}(\\d{6}))|(\\d{4}))-?(\\d{2})`, hi = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Ln + ")?)?", mi = fi + hi, Td = lc + "-?(\\d{2})(?:[T ]" + hi + "(Z|" + mi + ")?)?", dc = "\\[(!?)([^\\]]*)\\]", Nr = `((?:${dc}){0,9})`, Od = /* @__PURE__ */ Ve(lc + Nr), Rd = /* @__PURE__ */ Ve("(?:--)?(\\d{2})-?(\\d{2})" + Nr), Nd = /* @__PURE__ */ Ve(Td + Nr), Cd = /* @__PURE__ */ Ve("T?" + hi + "(?:" + mi + ")?" + Nr), zd = /* @__PURE__ */ Ve(mi), _d = /* @__PURE__ */ new RegExp(dc, "g"), Pd = /* @__PURE__ */ Ve(`${fi}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Ln}H)?(?:(\\d+)${Ln}M)?(?:(\\d+)${Ln}S)?)?`), Fd = /* @__PURE__ */ ct((t) => new Ht(oc, {
  timeZone: t,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
})), kd = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, xd = /[^\w\/:+-]+/, Yd = /^M(\d{2})(L?)$/, Zd = /* @__PURE__ */ ct(Ou), pi = /* @__PURE__ */ ct((t) => new Ht(oc, {
  calendar: t,
  timeZone: De,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
})), fc = {
  P(t, e, n) {
    const r = I(n);
    let o, { years: i, months: s, weeks: a, days: c } = e;
    if (c += L(e, 5)[0], i || s)
      o = ((u, l, d, f, h) => {
        let [m, p, g] = u.v(l);
        if (d) {
          const [v, w] = u.q(m, p);
          m += d, p = Kn(v, w, u.L(m)), p = xt("month", p, 1, u.B(m), h);
        }
        return f && ([m, p] = u.un(m, p, f)), g = xt("day", g, 1, u.U(m, p), h), u.p(m, p, g);
      })(this, t, i, s, r);
    else {
      if (!a && !c)
        return t;
      o = X(t);
    }
    if (o === void 0)
      throw new RangeError(ue);
    return o += (7 * a + c) * nt, ht(ar(o));
  },
  N(t, e, n) {
    if (n <= 7) {
      let c = 0, u = Ea({
        ...t,
        ...ot
      }, {
        ...e,
        ...ot
      });
      return n === 7 && ([c, u] = Jt(u, 7)), {
        ...$,
        weeks: c,
        days: u
      };
    }
    const r = this.v(t), o = this.v(e);
    let [i, s, a] = ((c, u, l, d, f, h, m) => {
      let p = f - u, g = h - l, v = m - d;
      if (p || g) {
        const w = Math.sign(p || g);
        let y = c.U(f, h), E = 0;
        if (Math.sign(v) === -w) {
          const T = y;
          [f, h] = c.un(f, h, -w), p = f - u, g = h - l, y = c.U(f, h), E = w < 0 ? -T : y;
        }
        if (v = m - Math.min(d, y) + E, p) {
          const [T, N] = c.q(u, l), [C, z] = c.q(f, h);
          if (g = C - T || Number(z) - Number(N), Math.sign(g) === -w) {
            const _ = w < 0 && -c.B(f);
            p = (f -= w) - u, g = h - Kn(T, N, c.L(f)) + (_ || c.B(f));
          }
        }
      }
      return [p, g, v];
    })(this, ...r, ...o);
    return n === 8 && (s += this.cn(i, r[0]), i = 0), {
      ...$,
      years: i,
      months: s,
      days: a
    };
  },
  F(t, e) {
    const n = I(e), r = Pr(this, t), o = Zn(this, t, r, n), i = Fr(this, t, o, r, n);
    return At(ht(this.V(r, o, i)), this.id || D);
  },
  K(t, e) {
    const n = I(e), r = Pr(this, t), o = Zn(this, t, r, n);
    return dn(fo(this.V(r, o, 1)), this.id || D);
  },
  _(t, e) {
    const n = I(e);
    let r, o, i, s = t.eraYear !== void 0 || t.year !== void 0 ? Pr(this, t) : void 0;
    const a = !this.id;
    if (s === void 0 && a && (s = kt), s !== void 0) {
      const d = Zn(this, t, s, n);
      r = Fr(this, t, d, s, n);
      const f = this.L(s);
      o = Go(d, f), i = d === f;
    } else {
      if (t.monthCode === void 0)
        throw new TypeError(ja);
      if ([o, i] = Vo(t.monthCode), this.id && this.id !== He && this.id !== ee)
        if (this.id && we(this.id) === "coptic" && n === 0) {
          const d = i || o !== 13 ? 30 : 6;
          r = t.day, r = ln(r, 1, d);
        } else if (this.id && we(this.id) === "chinese" && n === 0) {
          const d = !i || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
          r = t.day, r = ln(r, 1, d);
        } else
          r = t.day;
      else
        r = Fr(this, t, Zn(this, t, kt, n), kt, n);
    }
    const c = this.G(o, i, r);
    if (!c)
      throw new RangeError("Cannot guess year");
    const [u, l] = c;
    return Hn(ht(this.V(u, l, r)), this.id || D);
  },
  fields(t) {
    return $r(this) && t.includes("year") ? [...t, ...qr] : t;
  },
  k(t, e) {
    const n = Object.assign(/* @__PURE__ */ Object.create(null), t);
    return kr(n, e, Qo), $r(this) && (kr(n, e, Wl), this.id === ee && kr(n, e, Vl, qr)), n;
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
}, Ad = {
  v: po,
  hn: js,
  q: ks
}, jd = {
  dayOfYear: Wo,
  v: po,
  p: je
}, Bd = /* @__PURE__ */ Object.assign({}, jd, {
  weekOfYear: ba,
  yearOfWeek: Sa,
  m(t) {
    function e(h) {
      return (7 - h < r ? 7 : 0) - h;
    }
    function n(h) {
      const m = Zs(f + h), p = h || 1, g = e(on(c + m * p, 7));
      return l = (m + (g - u) * p) / 7;
    }
    const r = this.id ? 1 : 4, o = As(t), i = this.dayOfYear(t), s = on(o - 1, 7), a = i - 1, c = on(s - a, 7), u = e(c);
    let l, d = Math.floor((a - u) / 7) + 1, f = t.isoYear;
    return d ? d > n(0) && (d = 1, f++) : (d = n(-1), f--), [d, f, l];
  }
}), Ld = /* @__PURE__ */ Object.assign({}, fc, Bd, {
  v: po,
  hn: js,
  q: ks,
  G(t, e) {
    if (!e)
      return [kt, t];
  },
  sn: go,
  L() {
  },
  B: xs,
  cn: (t) => t * $t,
  U: Ys,
  fn: Zs,
  V: (t, e, n) => ({
    isoYear: t,
    isoMonth: e,
    isoDay: n
  }),
  p: je,
  un: (t, e, n) => (t += or(n, $t), (e += no(n, $t)) < 1 ? (t--, e += $t) : e > $t && (t++, e -= $t), [t, e]),
  year(t) {
    return t.isoYear;
  },
  month(t) {
    return t.isoMonth;
  },
  day: (t) => t.isoDay
}), $d = {
  v: Qn,
  hn: Na,
  q: Ra
}, Ud = {
  dayOfYear: Wo,
  v: Qn,
  p: mn,
  weekOfYear: ba,
  yearOfWeek: Sa,
  m() {
    return [];
  }
}, Wd = /* @__PURE__ */ Object.assign({}, fc, Ud, {
  v: Qn,
  hn: Na,
  q: Ra,
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
      isoMonth: $t,
      isoDay: 31
    });
    const a = jn.call(this, o), c = i === a;
    (qt(t, Go(i, a)) || qt(Number(e), Number(c)) || qt(n, s)) === 1 && o--;
    for (let u = 0; u < 100; u++) {
      const l = o - u, d = jn.call(this, l), f = Kn(t, e, d);
      if (e === (f === d) && n <= us.call(this, l, f))
        return [l, f];
    }
  },
  sn(t) {
    const e = xn.call(this, t);
    return e > xn.call(this, t - 1) && e > xn.call(this, t + 1);
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
  U: us,
  fn: xn,
  V(t, e, n) {
    return ar(mn.call(this, t, e, n));
  },
  p: mn,
  un(t, e, n) {
    if (n) {
      if (e += n, !Number.isSafeInteger(e))
        throw new RangeError(ue);
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
}), Cr = /* @__PURE__ */ Ca(Ad, $d), b = /* @__PURE__ */ Ca(Ld, Wd), ds = {
  era: An,
  eraYear: H,
  year: H,
  month: xi,
  monthCode(t) {
    const e = An(t);
    return Vo(e), e;
  },
  day: xi,
  .../* @__PURE__ */ Ye(Bt, H),
  .../* @__PURE__ */ Ye(O, ao),
  offset(t) {
    const e = An(t);
    return Se(e), e;
  }
}, gi = /* @__PURE__ */ M(Ds, Bt, wt), Vd = /* @__PURE__ */ M(Ds, wt, Bt), Xt = "numeric", zn = ["timeZoneName"], hc = {
  month: Xt,
  day: Xt
}, vi = {
  year: Xt,
  month: Xt
}, wi = /* @__PURE__ */ Object.assign({}, vi, {
  day: Xt
}), yi = {
  hour: Xt,
  minute: Xt,
  second: Xt
}, Ei = /* @__PURE__ */ Object.assign({}, wi, yi), Gd = /* @__PURE__ */ Object.assign({}, Ei, {
  timeZoneName: "short"
}), qd = /* @__PURE__ */ Object.keys(vi), Hd = /* @__PURE__ */ Object.keys(hc), Xd = /* @__PURE__ */ Object.keys(wi), Jd = /* @__PURE__ */ Object.keys(yi), bi = ["dateStyle"], Kd = /* @__PURE__ */ qd.concat(bi), Qd = /* @__PURE__ */ Hd.concat(bi), Si = /* @__PURE__ */ Xd.concat(bi, ["weekday"]), _n = /* @__PURE__ */ Jd.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), Mi = /* @__PURE__ */ Si.concat(_n), tf = /* @__PURE__ */ zn.concat(_n), ef = /* @__PURE__ */ zn.concat(Si), nf = /* @__PURE__ */ zn.concat(["day", "weekday"], _n), rf = /* @__PURE__ */ zn.concat(["year", "weekday"], _n), of = /* @__PURE__ */ Me(Mi, Ei), sf = /* @__PURE__ */ Me(Mi, Gd), af = /* @__PURE__ */ Me(Mi, Ei, zn), cf = /* @__PURE__ */ Me(Si, wi, tf), uf = /* @__PURE__ */ Me(_n, yi, ef), lf = /* @__PURE__ */ Me(Kd, vi, nf), df = /* @__PURE__ */ Me(Qd, hc, rf), ff = {}, mc = new Ht(void 0, {
  calendar: D
}).resolvedOptions().calendar === D, pc = [of, So], hf = [sf, So, 0, (t, e) => {
  const n = t.timeZone;
  if (e && e.timeZone !== n)
    throw new RangeError(Ua);
  return n;
}], gc = [af, X], vc = [cf, X], wc = [uf, (t) => Kt(t) / jt], yc = [lf, X, mc], Ec = [df, X, mc];
let fs;
function de(t, e, n, r, o) {
  function i(...c) {
    if (!(this instanceof i))
      throw new TypeError(Wr);
    ps(this, e(...c));
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
    ...Yc(Yt(s, n)),
    ...Fe(Yt(s, r)),
    ...eo("Temporal." + t)
  }), Object.defineProperties(i, {
    ...Fe(o),
    ...un(t)
  }), [i, (c) => {
    const u = Object.create(i.prototype);
    return ps(u, c), u;
  }, a];
}
function Je(t) {
  if (Q(t) || t.calendar !== void 0 || t.timeZone !== void 0)
    throw new TypeError(Ml);
  return t;
}
function Pn(t) {
  return bc(t) || D;
}
function bc(t) {
  const { calendar: e } = t;
  if (e !== void 0)
    return zr(e);
}
function zr(t) {
  if (J(t)) {
    const { calendar: e } = Q(t) || {};
    if (!e)
      throw new TypeError(Ba(t));
    return e;
  }
  return ((e) => Dr(mu(V(e))))(t);
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
function fe() {
  throw new TypeError(Dl);
}
function st(t) {
  if (J(t)) {
    const { timeZone: e } = Q(t) || {};
    if (!e)
      throw new TypeError($a(t));
    return e;
  }
  return ((e) => Bo(pu(V(e))))(t);
}
function A(t) {
  if (J(t)) {
    const e = Q(t);
    return e && e.branding === di ? e : Yu(t);
  }
  return hu(t);
}
function nn(t) {
  if (t !== void 0) {
    if (J(t)) {
      const e = Q(t) || {};
      switch (e.branding) {
        case le:
        case Cn:
          return e;
        case Xe:
          return At(e);
      }
      const n = Pn(t);
      return {
        ...Cu(st, S, b(n), t),
        calendar: n
      };
    }
    return au(t);
  }
}
function Ut(t, e) {
  if (J(t)) {
    const r = Q(t) || {};
    switch (r.branding) {
      case ui:
        return I(e), r;
      case Xe:
        return I(e), Nt(r);
      case le:
        return I(e), ka(S, r);
    }
    return xu(t, e);
  }
  const n = fu(t);
  return I(e), n;
}
function Ii(t) {
  return t === void 0 ? void 0 : Ut(t);
}
function Ie(t, e) {
  if (J(t)) {
    const r = Q(t) || {};
    switch (r.branding) {
      case Xe:
        return I(e), r;
      case Cn:
        return I(e), vt({
          ...r,
          ...ot
        });
      case le:
        return I(e), Pa(S, r);
    }
    return _u(b(Pn(t)), t, e);
  }
  const n = uu(t);
  return I(e), n;
}
function hs(t, e) {
  if (J(t)) {
    const r = Q(t);
    if (r && r.branding === ci)
      return I(e), r;
    const o = bc(t);
    return ku(b(o || D), !o, t, e);
  }
  const n = du(b, t);
  return I(e), n;
}
function Te(t, e) {
  if (J(t)) {
    const r = Q(t);
    return r && r.branding === ai ? (I(e), r) : Fu(b(Pn(t)), t, e);
  }
  const n = lu(b, t);
  return I(e), n;
}
function Oe(t, e) {
  if (J(t)) {
    const r = Q(t) || {};
    switch (r.branding) {
      case Cn:
        return I(e), r;
      case Xe:
        return I(e), At(r);
      case le:
        return I(e), Fa(S, r);
    }
    return Pu(b(Pn(t)), t, e);
  }
  const n = Fo(t);
  return I(e), n;
}
function Re(t, e) {
  if (J(t)) {
    const n = Q(t);
    if (n && n.branding === le)
      return ur(e), n;
    const r = Pn(t);
    return zu(st, S, b(r), r, t, e);
  }
  return cu(t, e);
}
function ms(t) {
  return Yt((e) => (n) => e(Xr(n)), t);
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
        case le:
          return Zt(e.epochNanoseconds);
      }
  }
  return su(t);
}
function mf() {
  function t(i, s) {
    return new e(i, s);
  }
  function e(i, s = /* @__PURE__ */ Object.create(null)) {
    nr.set(this, ((a, c) => {
      const u = new Ht(a, c), l = u.resolvedOptions(), d = l.locale, f = pt(Object.keys(c), l), h = ct(vf), m = (p, ...g) => {
        if (p) {
          if (g.length !== 2)
            throw new TypeError(Yr);
          for (const E of g)
            if (E === void 0)
              throw new TypeError(Yr);
        }
        p || g[0] !== void 0 || (g = []);
        const v = g.map((E) => Q(E) || Number(E));
        let w, y = 0;
        for (const E of v) {
          const T = typeof E == "object" ? E.branding : void 0;
          if (y++ && T !== w)
            throw new TypeError(Yr);
          w = T;
        }
        return w ? h(w)(d, f, ...v) : [u, ...v];
      };
      return m.X = u, m;
    })(i, s));
  }
  const n = Ht.prototype, r = Object.getOwnPropertyDescriptors(n), o = Object.getOwnPropertyDescriptors(Ht);
  for (const i in r) {
    const s = r[i], a = i.startsWith("format") && pf(i);
    typeof s.value == "function" ? s.value = i === "constructor" ? t : a || gf(i) : a && (s.get = function() {
      if (!nr.has(this))
        throw new TypeError(Wr);
      return (...c) => a.apply(this, c);
    }, Object.defineProperties(s.get, un(`get ${i}`)));
  }
  return o.prototype.value = e.prototype = Object.create({}, r), Object.defineProperties(t, o), t;
}
function pf(t) {
  return Object.defineProperties(function(...e) {
    const n = nr.get(this), [r, ...o] = n(t.includes("Range"), ...e);
    return r[t](...o);
  }, un(t));
}
function gf(t) {
  return Object.defineProperties(function(...e) {
    return nr.get(this).X[t](...e);
  }, un(t));
}
function vf(t) {
  const e = Mf[t];
  if (!e)
    throw new TypeError(Ll(t));
  return ae(e, ct(xa), 1);
}
const er = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ er.get.bind(er), ps = /* @__PURE__ */ er.set.bind(er), Sc = {
  era: Zc,
  eraYear: Rs,
  year: ro,
  month: _t,
  daysInMonth: _t,
  daysInYear: _t,
  inLeapYear: ql,
  monthsInYear: _t
}, Ti = {
  monthCode: V
}, Mc = {
  day: _t
}, wf = {
  dayOfWeek: _t,
  dayOfYear: _t,
  weekOfYear: Ac,
  yearOfWeek: Rs,
  daysInWeek: _t
}, Oi = /* @__PURE__ */ Di(/* @__PURE__ */ Object.assign({}, Sc, Ti, Mc, wf)), yf = /* @__PURE__ */ Di({
  ...Sc,
  ...Ti
}), Ef = /* @__PURE__ */ Di({
  ...Ti,
  ...Mc
}), Fn = {
  calendarId: (t) => t.calendar
}, bf = /* @__PURE__ */ rr((t) => (e) => e[t], O.concat("sign")), Ri = /* @__PURE__ */ rr((t, e) => (n) => n[wt[e]], Bt), Dc = {
  epochMilliseconds: So,
  epochNanoseconds: Lc
}, [Sf, x, Ch] = de(di, Ku, {
  ...bf,
  blank: ou
}, {
  with: (t, e) => x(Uu(t, e)),
  negated: (t) => x(Po(t)),
  abs: (t) => x(ru(t)),
  add: (t, e, n) => x(ts(nn, b, S, 0, t, A(e), n)),
  subtract: (t, e, n) => x(ts(nn, b, S, 1, t, A(e), n)),
  round: (t, e) => x(nu(nn, b, S, t, e)),
  total: (t, e) => $c(nn, b, S, t, e),
  toLocaleString(t, e, n) {
    return Intl.DurationFormat ? new Intl.DurationFormat(e, n).format(this) : _r(t);
  },
  toString: _r,
  toJSON: (t) => _r(t),
  valueOf: fe
}, {
  from: (t) => x(A(t)),
  compare: (t, e, n) => vu(nn, b, S, A(t), A(e), n)
}), Mf = {
  Instant: pc,
  PlainDateTime: gc,
  PlainDate: vc,
  PlainTime: wc,
  PlainYearMonth: yc,
  PlainMonthDay: Ec
}, Df = /* @__PURE__ */ ae(pc), If = /* @__PURE__ */ ae(hf), Tf = /* @__PURE__ */ ae(gc), Of = /* @__PURE__ */ ae(vc), Rf = /* @__PURE__ */ ae(wc), Nf = /* @__PURE__ */ ae(yc), Cf = /* @__PURE__ */ ae(Ec), [zf, Vt] = de(ui, Ju, Ri, {
  with(t, e, n) {
    return Vt($u(this, Je(e), n));
  },
  add: (t, e) => Vt(Qi(0, t, A(e))),
  subtract: (t, e) => Vt(Qi(1, t, A(e))),
  until: (t, e, n) => x(cs(0, t, Ut(e), n)),
  since: (t, e, n) => x(cs(1, t, Ut(e), n)),
  round: (t, e) => Vt(Gc(t, e)),
  equals: (t, e) => Du(t, Ut(e)),
  toLocaleString(t, e, n) {
    const [r, o] = Rf(e, n, t);
    return r.format(o);
  },
  toString: Vi,
  toJSON: (t) => Vi(t),
  valueOf: fe
}, {
  from: (t, e) => Vt(Ut(t, e)),
  compare: (t, e) => $o(Ut(t), Ut(e))
}), [_f, Et] = de(Xe, M(Gu, Dn), {
  ...Fn,
  ...Oi,
  ...Ri
}, {
  with: (t, e, n) => Et(Au(b, t, Je(e), n)),
  withCalendar: (t, e) => Et(qo(t, zr(e))),
  withPlainTime: (t, e) => Et(fl(t, Ii(e))),
  add: (t, e, n) => Et(Xi(b, 0, t, A(e), n)),
  subtract: (t, e, n) => Et(Xi(b, 1, t, A(e), n)),
  until: (t, e, n) => x(is(b, 0, t, Ie(e), n)),
  since: (t, e, n) => x(is(b, 1, t, Ie(e), n)),
  round: (t, e) => Et(Vc(t, e)),
  equals: (t, e) => Eu(t, Ie(e)),
  toZonedDateTime: (t, e, n) => G(el(S, t, st(e), n)),
  toPlainDate: (t) => St(At(t)),
  toPlainTime: (t) => Vt(Nt(t)),
  toLocaleString(t, e, n) {
    const [r, o] = Tf(e, n, t);
    return r.format(o);
  },
  toString: Li,
  toJSON: (t) => Li(t),
  valueOf: fe
}, {
  from: (t, e) => Et(Ie(t, e)),
  compare: (t, e) => ma(Ie(t), Ie(e))
}), [Pf, Jr, zh] = de(ci, M(Xu, Dn), {
  ...Fn,
  ...Ef
}, {
  with: (t, e, n) => Jr(Lu(b, t, Je(e), n)),
  equals: (t, e) => Mu(t, hs(e)),
  toPlainDate(t, e) {
    return St(al(b, t, this, e));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Cf(e, n, t);
    return r.format(o);
  },
  toString: Wi,
  toJSON: (t) => Wi(t),
  valueOf: fe
}, {
  from: (t, e) => Jr(hs(t, e))
}), [Ff, rn, _h] = de(ai, M(Hu, Dn), {
  ...Fn,
  ...yf
}, {
  with: (t, e, n) => rn(Bu(b, t, Je(e), n)),
  add: (t, e, n) => rn(Ki(b, 0, t, A(e), n)),
  subtract: (t, e, n) => rn(Ki(b, 1, t, A(e), n)),
  until: (t, e, n) => x(as(b, 0, t, Te(e), n)),
  since: (t, e, n) => x(as(b, 1, t, Te(e), n)),
  equals: (t, e) => Su(t, Te(e)),
  toPlainDate(t, e) {
    return St(sl(b, t, this, e));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Nf(e, n, t);
    return r.format(o);
  },
  toString: Ui,
  toJSON: (t) => Ui(t),
  valueOf: fe
}, {
  from: (t, e) => rn(Te(t, e)),
  compare: (t, e) => Ge(Te(t), Te(e))
}), [kf, St, Ph] = de(Cn, M(qu, Dn), {
  ...Fn,
  ...Oi
}, {
  with: (t, e, n) => St(ju(b, t, Je(e), n)),
  withCalendar: (t, e) => St(qo(t, zr(e))),
  add: (t, e, n) => St(Ji(b, 0, t, A(e), n)),
  subtract: (t, e, n) => St(Ji(b, 1, t, A(e), n)),
  until: (t, e, n) => x(ss(b, 0, t, Oe(e), n)),
  since: (t, e, n) => x(ss(b, 1, t, Oe(e), n)),
  equals: (t, e) => bu(t, Oe(e)),
  toZonedDateTime(t, e) {
    const n = J(e) ? e : {
      timeZone: e
    };
    return G(nl(st, Ut, S, t, n));
  },
  toPlainDateTime: (t, e) => Et(rl(t, Ii(e))),
  toPlainYearMonth(t) {
    return rn(ol(b, t, this));
  },
  toPlainMonthDay(t) {
    return Jr(il(b, t, this));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Of(e, n, t);
    return r.format(o);
  },
  toString: $i,
  toJSON: (t) => $i(t),
  valueOf: fe
}, {
  from: (t, e) => St(Oe(t, e)),
  compare: (t, e) => Ge(Oe(t), Oe(e))
}), [xf, G] = de(le, M(Vu, Dn, gu), {
  ...Dc,
  ...Fn,
  ...ms(Oi),
  ...ms(Ri),
  offset: (t) => bn(Xr(t).offsetNanoseconds),
  offsetNanoseconds: (t) => Xr(t).offsetNanoseconds,
  timeZoneId: (t) => t.timeZone,
  hoursInDay: (t) => qc(S, t)
}, {
  with: (t, e, n) => G(Zu(b, S, t, Je(e), n)),
  withCalendar: (t, e) => G(qo(t, zr(e))),
  withTimeZone: (t, e) => G(hl(t, st(e))),
  withPlainTime: (t, e) => G(dl(S, t, Ii(e))),
  add: (t, e, n) => G(Hi(b, S, 0, t, A(e), n)),
  subtract: (t, e, n) => G(Hi(b, S, 1, t, A(e), n)),
  until: (t, e, n) => x(j(os(b, S, 0, t, Re(e), n))),
  since: (t, e, n) => x(j(os(b, S, 1, t, Re(e), n))),
  round: (t, e) => G(Wc(S, t, e)),
  startOfDay: (t) => G(Hc(S, t)),
  equals: (t, e) => yu(t, Re(e)),
  toInstant: (t) => Wt(tl(t)),
  toPlainDateTime: (t) => Et(Pa(S, t)),
  toPlainDate: (t) => St(Fa(S, t)),
  toPlainTime: (t) => Vt(ka(S, t)),
  toLocaleString(t, e, n = {}) {
    const [r, o] = If(e, n, t);
    return r.format(o);
  },
  toString: (t, e) => Bi(S, t, e),
  toJSON: (t) => Bi(S, t),
  valueOf: fe,
  getTimeZoneTransition(t, e) {
    const { timeZone: n, epochNanoseconds: r } = t, o = Bc(e), i = S(n).O(r, o);
    return i ? G({
      ...t,
      epochNanoseconds: i
    }) : null;
  }
}, {
  from: (t, e) => G(Re(t, e)),
  compare: (t, e) => ha(Re(t), Re(e))
}), [Yf, Wt, Fh] = de(li, Wu, Dc, {
  add: (t, e) => Wt(qi(0, t, A(e))),
  subtract: (t, e) => Wt(qi(1, t, A(e))),
  until: (t, e, n) => x(rs(0, t, Ne(e), n)),
  since: (t, e, n) => x(rs(1, t, Ne(e), n)),
  round: (t, e) => Wt(Uc(t, e)),
  equals: (t, e) => wu(t, Ne(e)),
  toZonedDateTimeISO: (t, e) => G(Qu(t, st(e))),
  toLocaleString(t, e, n) {
    const [r, o] = Df(e, n, t);
    return r.format(o);
  },
  toString: (t, e) => ji(st, S, t, e),
  toJSON: (t) => ji(st, S, t),
  valueOf: fe
}, {
  from: (t) => Wt(Ne(t)),
  fromEpochMilliseconds: (t) => Wt(cl(t)),
  fromEpochNanoseconds: (t) => Wt(ul(t)),
  compare: (t, e) => fa(Ne(t), Ne(e))
}), Zf = /* @__PURE__ */ Object.defineProperties({}, {
  ...eo("Temporal.Now"),
  ...Fe({
    timeZoneId: () => tn(),
    instant: () => Wt(Zt(Ur())),
    zonedDateTimeISO: (t = tn()) => G(gt(Ur(), st(t), D)),
    plainDateTimeISO: (t = tn()) => Et(vt(xr(S(st(t))), D)),
    plainDateISO: (t = tn()) => St(At(xr(S(st(t))), D)),
    plainTimeISO: (t = tn()) => Vt(Nt(xr(S(st(t)))))
  })
}), pe = /* @__PURE__ */ Object.defineProperties({}, {
  ...eo("Temporal"),
  ...Fe({
    PlainYearMonth: Ff,
    PlainMonthDay: Pf,
    PlainDate: kf,
    PlainTime: zf,
    PlainDateTime: _f,
    ZonedDateTime: xf,
    Instant: Yf,
    Duration: Sf,
    Now: Zf
  })
}), Af = /* @__PURE__ */ mf(), nr = /* @__PURE__ */ new WeakMap();
Object.create(Intl), Fe({
  DateTimeFormat: Af
});
const bt = {
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  period: "weeks",
  span: 1,
  firstDayOfWeek: 1,
  daySize: 160,
  dayHeadSize: 32,
  eventSize: 48,
  resourceGroupSize: 24,
  gap: 0,
  overscan: 0
};
function jf(t = {}) {
  const e = Y(t.period) || bt.period, n = Math.max(Y(t.span) || bt.span, 1), r = Y(t.firstDayOfWeek) ?? bt.firstDayOfWeek, o = Y(t.timezone) || bt.timezone, i = pe.PlainDate.from(Y(t.date) || pe.Now.plainDateISO()), s = Bf(e, i, n, r);
  return {
    start: s.at(0),
    end: s.at(-1),
    timezone: o,
    period: e,
    span: n,
    firstDayOfWeek: r,
    dates: s
  };
}
function Bf(t, e, n, r) {
  return t === "months" ? $f(e, n) : t === "weeks" ? Lf(e, n, r) : Ni(e, n);
}
function Ni(t, e) {
  const n = [];
  for (let r = 0; r < e; r++)
    n.push(t.add({ days: r }).toString());
  return n;
}
function Lf(t, e, n) {
  const r = (t.dayOfWeek - n + 7) % 7, o = t.subtract({ days: r });
  return Ni(o, e * 7);
}
function $f(t, e) {
  const n = t.with({ day: 1 }), r = n.add({ months: e - 1 }), o = r.with({ day: r.daysInMonth });
  return Ni(n, n.until(o, { largestUnit: "day" }).days + 1);
}
function Uf(t = {}) {
  return {
    daySize: Y(t.daySize) ?? bt.daySize,
    dayHeadSize: Y(t.dayHeadSize) ?? bt.dayHeadSize,
    eventSize: Y(t.eventSize) ?? bt.eventSize,
    resourceGroupSize: Y(t.resourceGroupSize) ?? bt.resourceGroupSize,
    resourcesClass: Y(t.resourcesClass),
    timelineClass: Y(t.timelineClass),
    gap: Y(t.gap) ?? bt.gap,
    overscan: Y(t.overscan) ?? bt.overscan
  };
}
function Ci(t) {
  return t === void 0 ? [] : Array.isArray(t) ? t : [t];
}
function gs(t, e, n) {
  return t.has(e) || t.set(e, n), t.get(e);
}
function Wf(t = [], e) {
  const n = /* @__PURE__ */ new Map();
  for (var r = 0; r < t.length; r++) {
    const i = t[r], s = pe.Instant.from(i.start).toZonedDateTimeISO(e).toPlainDate().toString(), a = Ci(i.resourceId);
    for (var o = 0; o < a.length; o++) {
      const c = a[o], u = gs(n, c, /* @__PURE__ */ new Map());
      gs(u, s, /* @__PURE__ */ new Set()).add(i);
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
function Ic(t, e) {
  const n = Object.entries(t), r = Ci(e);
  return Object.fromEntries(n.filter(([o]) => !r.includes(o)));
}
const jr = bs(/* @__PURE__ */ new Set());
function Kf(t = [], e = /* @__PURE__ */ new Map()) {
  const n = Oc(t), r = /* @__PURE__ */ new Map();
  for (var o = 0; o < n.length; o++) {
    const s = n[o], a = s.resources ? Qf(s, e) : Tc(s, e.get(s.id));
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
    resources: Oc(t.resources.map((r) => Tc(r, e.get(r.id)))),
    data: Ic(t, at.EXCLUDED_RESOURCE_FIELDS),
    open: () => jr.delete(t.id),
    close: () => jr.add(t.id)
  };
}
function Tc(t, e = /* @__PURE__ */ new Map()) {
  return {
    id: t.id,
    nOrder: t.nOrder,
    isEventDroppable: t.isEventDroppable ?? !0,
    maxEvents: Math.max(...Array.from(e.values()).map((n) => n.size), 1),
    data: Ic(t, at.EXCLUDED_RESOURCE_FIELDS)
  };
}
function Oc(t) {
  return t.slice().sort((e, n) => (e.nOrder ?? Number.MAX_SAFE_INTEGER) - (n.nOrder ?? Number.MAX_SAFE_INTEGER));
}
function th(t = {}) {
  return {
    onView: Z(t.onView) || ((e) => {
    }),
    onAddEvent: Z(t.onAddEvent) || ((e) => {
    }),
    onMoveEvent: Z(t.onMoveEvent) || ((e) => {
    }),
    onResizeEvent: Z(t.onResizeEvent) || ((e) => {
    }),
    onBeforeDropEvent: Z(t.onBeforeDropEvent) || ((e) => !0),
    onDayEnter: Z(t.onDayEnter) || ((e) => {
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
function kh(t = {}) {
  const e = xc(), n = ft(), r = ft(/* @__PURE__ */ new Set()), o = ft(/* @__PURE__ */ new Set()), i = ft(0), s = F(() => jf(Y(t.view))), a = F(() => Uf(Y(t.layout))), c = F(() => Wf(Y(t.events), s.value.timezone)), u = F(() => Kf(Y(t.resources), c.value)), l = F(() => th(Y(t.callbacks))), d = eh(c, u);
  return an(s, () => l.value.onView(s.value)), bs({
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
    if (!(d.length !== r.length || d.some((m, p) => r[p] !== m)))
      return o;
    r = d;
    let h;
    if (n.key && ((a = n.debug) != null && a.call(n)) && (h = Date.now()), o = e(...d), n.key && ((c = n.debug) != null && c.call(n))) {
      const m = Math.round((Date.now() - l) * 100) / 100, p = Math.round((Date.now() - h) * 100) / 100, g = p / 16, v = (w, y) => {
        for (w = String(w); w.length < y; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${v(p, 5)} /${v(m, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * g, 120)
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
}, vs = {
  passive: !0
}, ws = typeof window > "u" ? !0 : "onscrollend" in window, ch = (t, e) => {
  const n = t.scrollElement;
  if (!n)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = t.options.useScrollendEvent && ws ? () => {
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
  c(), n.addEventListener("scroll", a, vs);
  const u = t.options.useScrollendEvent && ws;
  return u && n.addEventListener("scrollend", c, vs), () => {
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
          const d = i(l), f = this.options.lanes === 1 ? u[l - 1] : this.getFurthestMeasurement(u, l), h = f ? f.end + this.options.gap : r + o, m = a.get(d), p = typeof m == "number" ? m : this.options.estimateSize(l), g = h + p, v = f ? f.lane : l % this.options.lanes;
          u[l] = {
            index: l,
            start: h,
            size: p,
            end: g,
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
          r[Rc(
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
const Rc = (t, e, n, r) => {
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
  let s = Rc(
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
  const e = new dh(Z(t)), n = _c(e), r = e._didMount();
  return an(
    () => Z(t).getScrollElement(),
    (o) => {
      o && e._willUpdate();
    },
    {
      immediate: !0
    }
  ), an(
    () => Z(t),
    (o) => {
      e.setOptions({
        ...o,
        onChange: (i, s) => {
          var a;
          _i(n), (a = o.onChange) == null || a.call(o, i, s);
        }
      }), e._willUpdate(), _i(n);
    },
    {
      immediate: !0
    }
  ), Pc(r), n;
}
function Nc(t) {
  return hh(
    F(() => ({
      observeElementRect: ah,
      observeElementOffset: ch,
      scrollToFn: lh,
      ...Z(t)
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
const ph = /* @__PURE__ */ ne({
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
    })), o = Nc(r), i = F(() => o.value.getVirtualItems()), s = F(() => o.value.getTotalSize()), a = F(() => ({
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
}, Cc = /* @__PURE__ */ Ke(ph, [["__scopeId", "data-v-f5d63ec0"]]), gh = { class: "cullendar-timeline-head" }, vh = /* @__PURE__ */ ne({
  __name: "Timeline",
  props: {
    rows: {},
    columns: {}
  },
  setup(t) {
    const e = t, n = vn("api"), { id: r, dayWidth: o, elements: i, layout: s } = Ze(n);
    let a;
    const c = F(() => ({
      horizontal: !0,
      count: e.columns.length,
      getScrollElement: () => {
        var g;
        return (g = i.value) == null ? void 0 : g.timeline;
      },
      estimateSize: () => o.value,
      gap: s.value.gap,
      overscan: s.value.overscan
    })), u = Nc(c), l = F(() => u.value.getVirtualItems()), d = F(() => u.value.getTotalSize()), f = F(() => ({ width: q(d.value) }));
    an([() => e.columns, () => s.value.daySize], () => h()), Ss(() => {
      i.value = mh(r.value), a = new ResizeObserver(([g]) => g && h(g.contentRect.width)), a.observe(i.value.timeline);
    }), Fc(() => a.unobserve(i.value.timeline));
    function h(g) {
      const v = g ?? i.value.timeline.clientWidth, w = s.value.gap * (e.columns.length - 1), y = v - w, E = Math.max(s.value.daySize, Math.floor(y / e.columns.length));
      E !== o.value && (o.value = E, u.value.measure());
    }
    function m(g) {
      return {
        height: q(s.value.dayHeadSize),
        width: q(o.value),
        transform: `translateX(${q(g.start)}) translateY(0)`
      };
    }
    function p(g, v) {
      return {
        width: q(o.value),
        height: q(g.size),
        transform: `translateX(${q(v.start)}) translateY(${q(g.start)})`
      };
    }
    return (g, v) => (W(), Qr(Cc, {
      rows: g.rows,
      layout: Z(s),
      "wrapper-style": f.value,
      class: to(["cullendar-timeline", Z(s).timelineClass])
    }, {
      wrapper: me(() => [
        Kr("div", gh, [
          (W(!0), it($n, null, Un(l.value, (w) => (W(), it("div", {
            key: w.index,
            class: "cullendar-timeline-virtual-col",
            style: cn(m(w))
          }, [
            U(g.$slots, "head", ze({ ref_for: !0 }, { date: g.columns[w.index] }), void 0, !0)
          ], 4))), 128))
        ])
      ]),
      default: me(({ row: w, data: y }) => [
        (W(!0), it($n, null, Un(l.value, (E) => (W(), it("div", {
          key: E.index,
          class: "cullendar-timeline-virtual-col",
          style: cn(p(w, E))
        }, [
          U(g.$slots, "default", ze({ ref_for: !0 }, { resource: y, date: g.columns[E.index] }), void 0, !0)
        ], 4))), 128))
      ]),
      _: 3
    }, 8, ["rows", "layout", "wrapper-style", "class"]));
  }
}), wh = /* @__PURE__ */ Ke(vh, [["__scopeId", "data-v-4db4ef8d"]]), yh = /* @__PURE__ */ ne({
  __name: "Resources",
  props: {
    rows: {}
  },
  setup(t) {
    const e = vn("api"), { layout: n } = Ze(e);
    function r(o) {
      return {
        height: q(o.size),
        transform: `translateY(${q(o.start)})`
      };
    }
    return (o, i) => (W(), Qr(Cc, {
      rows: o.rows,
      layout: Z(n),
      class: to(["cullendar-resources", Z(n).resourcesClass])
    }, {
      default: me(({ row: s, data: a }) => [
        Kr("div", {
          class: "cullendar-resources-virtual-row",
          style: cn(r(s))
        }, [
          U(o.$slots, "default", Gt(Pe({ resource: a })), void 0, !0)
        ], 4)
      ]),
      _: 3
    }, 8, ["rows", "layout", "class"]));
  }
}), Eh = /* @__PURE__ */ Ke(yh, [["__scopeId", "data-v-876f22e5"]]), bh = /* @__PURE__ */ ne({
  __name: "Day",
  props: {
    date: {},
    resource: {}
  },
  setup(t) {
    const e = t, n = vn("api"), { utils: r } = Ze(n), o = F(() => r.value.getEvents(e.resource.id, e.date)), i = F(() => Array.from(o.value.values()).sort((s, a) => Date.parse(s.start) - Date.parse(a.start)));
    return (s, a) => U(s.$slots, "default", Gt(Pe({ events: i.value })));
  }
}), Sh = ["id"], Mh = /* @__PURE__ */ ne({
  name: "Cullendar",
  __name: "index",
  props: {
    cullendar: {}
  },
  setup(t) {
    const e = t;
    kc("api", e.cullendar);
    const { id: n, elements: r, view: o, resources: i } = Ze(e.cullendar), s = F(() => Array.from(i.value.values()));
    Ss(() => {
      r.value.timeline.addEventListener("scroll", a), r.value.resources.addEventListener("scroll", a);
    });
    function a(c) {
      const u = c.target, l = u.classList.contains("cullendar-timeline") ? r.value.resources : r.value.timeline;
      l.removeEventListener("scroll", a), l.scrollTop = u.scrollTop, requestAnimationFrame(() => l.addEventListener("scroll", a));
    }
    return (c, u) => (W(), it("div", {
      id: Z(n),
      style: cn({ "--scrollbar-width": Z(nh)() }),
      class: "cullendar"
    }, [
      Pi(Eh, { rows: s.value }, {
        default: me(({ resource: l }) => [
          "isGroup" in l ? U(c.$slots, "resourceGroup", Gt(ze({ key: 0 }, { resource: l })), void 0, !0) : U(c.$slots, "resource", Gt(ze({ key: 1 }, { resource: l })), void 0, !0)
        ]),
        _: 3
      }, 8, ["rows"]),
      Pi(wh, {
        rows: s.value,
        columns: Z(o).dates
      }, {
        head: me(({ date: l }) => [
          U(c.$slots, "dayHead", Gt(Pe({ date: l })), void 0, !0)
        ]),
        default: me(({ resource: l, date: d }) => [
          "isGroup" in l ? Ms("", !0) : (W(), Qr(bh, {
            key: 0,
            date: d,
            resource: l
          }, {
            default: me(({ events: f }) => [
              U(c.$slots, "day", Gt(Pe({ resource: l, date: d, events: f })), () => [
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
}), Dh = /* @__PURE__ */ Ke(Mh, [["__scopeId", "data-v-3420f804"]]), Ih = /* @__PURE__ */ ne({
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
}), xh = /* @__PURE__ */ Ke(Ih, [["__scopeId", "data-v-788adb18"]]), Yh = /* @__PURE__ */ ne({
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
    const e = t, n = vn("api"), { view: r, callbacks: o, resizeResourcesSet: i, resizeDatesSet: s } = Ze(n), a = ft(!1), c = F(() => i.value.has(e.resource.id) && s.value.has(e.date)), u = F(() => [
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
      const g = JSON.parse(p.dataTransfer.getData(at.DATA_TRANSFER_TYPE));
      if (!g.id)
        return o.value.onAddEvent(h({ data: g }));
      if (pe.Instant.from(g.start).toZonedDateTimeISO(r.value.timezone).toPlainDate().toString() === e.date && Ci(g.resourceId).includes(e.resource.id))
        return;
      const w = f(g), y = h({ event: g, times: w });
      o.value.onBeforeDropEvent(y) && o.value.onMoveEvent(y);
    }
    function f(p) {
      const g = pe.PlainDate.from(e.date), v = pe.Instant.from(p.start).toZonedDateTimeISO(r.value.timezone), w = pe.Instant.from(p.end).toZonedDateTimeISO(r.value.timezone), y = v.until(w), E = v.with({
        year: g.year,
        month: g.month,
        day: g.day
      });
      return {
        start: E.toString({ timeZoneName: "never" }),
        end: E.add(y).toString({ timeZoneName: "never" })
      };
    }
    function h(p = {}) {
      return {
        ...p,
        date: e.date,
        resource: e.resource,
        view: r.value
      };
    }
    function m() {
      o.value.onDayEnter(h());
    }
    return (p, g) => (W(), it("div", {
      class: to(u.value),
      onMouseenter: m
    }, [
      p.droppable && p.resource.isEventDroppable ? (W(), it("span", {
        key: 0,
        class: "cullendar-day-dropzone",
        onDragenter: l,
        onDragover: g[0] || (g[0] = Wn(() => {
        }, ["prevent"])),
        onDragleave: g[1] || (g[1] = (v) => a.value = !1),
        onDrop: d
      }, null, 32)) : Ms("", !0),
      U(p.$slots, "default", Gt(Pe({ date: p.date, resource: p.resource, events: p.events, isDragOver: a.value, isResizeOver: c.value })))
    ], 34));
  }
}), Lr = 100, Th = 60, ys = 0.1;
function Oh(t) {
  const e = ft(0), n = ft(0);
  let r, o, i = 0, s = 0, a = 0, c = 0, u = 0, l = 0;
  function d(p) {
    const g = p.clientX - r.left, v = p.clientY - r.top;
    e.value = t.scrollLeft - i, n.value = t.scrollTop - s, a = Es(g, r.width), c = Es(v, r.height);
  }
  function f() {
    r = t.getBoundingClientRect(), i = t.scrollLeft, s = t.scrollTop, t.addEventListener("mousemove", d), m();
  }
  function h() {
    t.removeEventListener("mousemove", d), cancelAnimationFrame(o), a = 0, c = 0, u = 0, l = 0;
  }
  function m() {
    u = u + (a - u) * ys, l = l + (c - l) * ys, (u !== 0 || l !== 0) && t.scrollBy(u, l), o = requestAnimationFrame(m);
  }
  return {
    scrolledX: e,
    scrolledY: n,
    start: f,
    stop: h
  };
}
function Es(t, e) {
  const n = t < Lr ? -1 : t > e - Lr ? 1 : 0, r = n === -1 ? t : e - t;
  return n * Th * (1 - r / Lr);
}
const Rh = /* @__PURE__ */ ne({
  __name: "ResizeHandle",
  props: {
    event: {},
    resource: {},
    date: {}
  },
  setup(t) {
    const e = t, n = vn("api"), { dayWidth: r, elements: o, view: i, resources: s, layout: a, callbacks: c, utils: u, resizeDatesSet: l, resizeResourcesSet: d } = Ze(n);
    let f = 0, h = 0;
    const m = [], p = ft(!1), g = ft(0), v = ft(0), { scrolledX: w, scrolledY: y, start: E, stop: T } = Oh(o.value.timeline);
    function N(P) {
      g.value = P.clientX, v.value = P.clientY, p.value = !0, l.value.add(e.date), d.value.add(e.resource.id), yt(), document.addEventListener("mousemove", C), document.addEventListener("mouseup", z), o.value.calendar.classList.add(at.RESIZING_CLASS), E();
    }
    function C(P) {
      const R = Math.max(0, P.clientX - g.value + w.value), zt = Math.max(0, P.clientY - v.value + y.value);
      _(zt), Ct(R);
    }
    function z() {
      const P = Array.from(d.value.values()).slice(1).map((zt) => u.value.getResource(zt)), R = Array.from(l.value.values()).slice(1);
      f = 0, h = 0, d.value.clear(), l.value.clear(), p.value = !1, document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", z), o.value.calendar.classList.remove(at.RESIZING_CLASS), T(), !(!R.length && !P.length) && c.value.onResizeEvent({
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
    function Ct(P) {
      const R = Math.ceil(P / (r.value + a.value.gap));
      if (f === R)
        return;
      const zt = i.value.dates, Qe = zt.indexOf(e.date);
      f = R, l.value = new Set(zt.slice(Qe, Qe + R + 1));
    }
    function yt() {
      let P = a.value.eventSize, R = !1;
      m.length = 0;
      for (const [zt, Qe] of s.value)
        if (!("isGroup" in Qe)) {
          if (R) {
            const zi = Qe.maxEvents * a.value.eventSize, zc = {
              id: zt,
              top: P,
              bottom: P + zi
            };
            P += zi, m.push(zc);
          }
          zt === e.resource.id && (R = !0);
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
      U(P.$slots, "default", Gt(Pe({ isResizing: p.value })), void 0, !0)
    ], 32));
  }
}), Zh = /* @__PURE__ */ Ke(Rh, [["__scopeId", "data-v-cb26c380"]]), Ah = { install: (t) => t.component("Cullendar", Dh) };
export {
  Dh as Cullendar,
  xh as DragEvent,
  Yh as DropDay,
  Zh as ResizeHandle,
  kh as create,
  Ah as default
};
