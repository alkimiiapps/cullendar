import { toValue as x, reactive as Ss, unref as Y, ref as at, shallowRef as Ms, computed as z, watch as un, triggerRef as Pi, onScopeDispose as Fc, defineComponent as Lt, createElementBlock as nt, openBlock as $, createElementVNode as Wn, normalizeStyle as ke, renderSlot as A, Fragment as ln, renderList as dn, mergeProps as ve, inject as Ze, toRefs as je, onMounted as bs, createBlock as to, normalizeClass as eo, createSlots as xc, withCtx as kt, normalizeProps as mt, guardReactiveProps as xt, provide as Yc, createVNode as _i, createCommentVNode as Ds, withModifiers as Vn } from "vue";
function Ac() {
  return Math.random().toString(36).substring(2, 11);
}
function et(t, e, n, r, o) {
  return jt(e, ((i, s) => {
    const a = i[s];
    if (a === void 0)
      throw new TypeError(Xo(s));
    return a;
  })(t, e), n, r, o);
}
function jt(t, e, n, r, o, i) {
  const s = hn(e, n, r);
  if (o && e !== s)
    throw new RangeError(Aa(t, e, n, r, i));
  return s;
}
function K(t) {
  return t !== null && /object|function/.test(typeof t);
}
function lt(t, e = Map) {
  const n = new e();
  return (r, ...o) => {
    if (n.has(r))
      return n.get(r);
    const i = t(r, ...o);
    return n.set(r, i), i;
  };
}
function fn(t) {
  return Fe({
    name: t
  }, 1);
}
function Fe(t, e) {
  return Bt((n) => ({
    value: n,
    configurable: 1,
    writable: !e
  }), t);
}
function Zc(t) {
  return Bt((e) => ({
    get: e,
    configurable: 1
  }), t);
}
function no(t) {
  return {
    [Symbol.toStringTag]: {
      value: t,
      configurable: 1
    }
  };
}
function Be(t, e) {
  const n = {};
  let r = t.length;
  for (const o of e)
    n[t[--r]] = o;
  return n;
}
function Bt(t, e, n) {
  const r = {};
  for (const o in e)
    r[o] = t(e[o], o, n);
  return r;
}
function ir(t, e, n) {
  const r = {};
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    r[i] = t(i, o, n);
  }
  return r;
}
function Ts(t, e, n) {
  const r = {};
  for (let o = 0; o < t.length; o++)
    r[e[o]] = n[t[o]];
  return r;
}
function vt(t, e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of t)
    n[r] = e[r];
  return n;
}
function ki(t, e) {
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
function Os(t, e, n) {
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
function En(t) {
  return t.slice().sort();
}
function Gn(t, e) {
  return String(e).padStart(t, "0");
}
function Kt(t, e) {
  return Math.sign(t - e);
}
function hn(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function Yt(t, e) {
  return [Math.floor(t / e), an(t, e)];
}
function an(t, e) {
  return (t % e + e) % e;
}
function ee(t, e) {
  return [sr(t, e), ro(t, e)];
}
function sr(t, e) {
  return Math.trunc(t / e) || 0;
}
function ro(t, e) {
  return t % e || 0;
}
function Yn(t) {
  return Math.abs(t % 1) === 0.5;
}
function Rs(t, e, n) {
  let r = 0, o = 0;
  for (let a = 0; a <= e; a++) {
    const c = t[n[a]], u = Rt[a], l = F / u, [d, f] = ee(c, l);
    r += f * u, o += d;
  }
  const [i, s] = ee(r, F);
  return [o + i, s];
}
function ar(t, e, n) {
  const r = {};
  for (let o = e; o >= 0; o--) {
    const i = Rt[o];
    r[n[o]] = sr(t, i), t = ro(t, i);
  }
  return r;
}
function jc(t) {
  if (t !== void 0)
    return G(t);
}
function Bc(t) {
  if (t !== void 0)
    return Ft(t);
}
function Ns(t) {
  if (t !== void 0)
    return oo(t);
}
function Ft(t) {
  return Ps(oo(t));
}
function oo(t) {
  return zs(Jl(t));
}
function Cs(t, e) {
  if (e == null)
    throw new RangeError(Xo(t));
  return e;
}
function Sn(t) {
  if (!K(t))
    throw new TypeError(Ml);
  return t;
}
function io(t, e, n = t) {
  if (typeof e !== t)
    throw new TypeError(de(n, e));
  return e;
}
function zs(t, e = "number") {
  if (!Number.isInteger(t))
    throw new RangeError(gl(e, t));
  return t || 0;
}
function Ps(t, e = "number") {
  if (t <= 0)
    throw new RangeError(vl(e, t));
  return t;
}
function so(t) {
  if (typeof t == "symbol")
    throw new TypeError(Sl);
  return String(t);
}
function Bn(t, e) {
  return K(t) ? String(t) : G(t, e);
}
function ao(t) {
  if (typeof t == "string")
    return BigInt(t);
  if (typeof t != "bigint")
    throw new TypeError(El(t));
  return t;
}
function _s(t, e = "number") {
  if (typeof t == "bigint")
    throw new TypeError(yl(e));
  if (t = Number(t), !Number.isFinite(t))
    throw new RangeError(wl(e, t));
  return t;
}
function X(t, e) {
  return Math.trunc(_s(t, e)) || 0;
}
function co(t, e) {
  return zs(_s(t, e), e);
}
function xi(t, e) {
  return Ps(X(t, e), e);
}
function uo(t, e) {
  let [n, r] = ee(e, F), o = t + n;
  const i = Math.sign(o);
  return i && i === -Math.sign(r) && (o -= i, r += i * F), [o, r];
}
function xe(t, e, n = 1) {
  return uo(t[0] + e[0] * n, t[1] + e[1] * n);
}
function we(t, e) {
  return uo(t[0], t[1] + e);
}
function It(t, e) {
  return xe(e, t, -1);
}
function dt(t, e) {
  return Kt(t[0], e[0]) || Kt(t[1], e[1]);
}
function ks(t, e, n) {
  return dt(t, e) === -1 || dt(t, n) === 1;
}
function lo(t, e = 1) {
  const n = BigInt(F / e);
  return [Number(t / n), Number(t % n) * e];
}
function qn(t, e = 1) {
  const n = F / e, [r, o] = ee(t, n);
  return [r, o * e];
}
function Ot(t, e = 1, n) {
  const [r, o] = t, [i, s] = ee(o, e);
  return r * (F / e) + (i + (n ? s / e : 0));
}
function fo(t, e, n = Yt) {
  const [r, o] = t, [i, s] = n(o, e);
  return [r * (F / e) + i, s];
}
function ho(t) {
  return et(t, "isoYear", yn, wn, 1), t.isoYear === yn ? et(t, "isoMonth", 4, 12, 1) : t.isoYear === wn && et(t, "isoMonth", 1, 9, 1), t;
}
function pt(t) {
  return it({
    ...t,
    ...st,
    isoHour: 12
  }), t;
}
function it(t) {
  const e = et(t, "isoYear", yn, wn, 1), n = e === yn ? 1 : e === wn ? -1 : 0;
  return n && Nt(U({
    ...t,
    isoDay: t.isoDay + n,
    isoNanosecond: t.isoNanosecond - n
  })), t;
}
function Nt(t) {
  if (!t || ks(t, id, od))
    throw new RangeError(fe);
  return t;
}
function ne(t) {
  return Rs(t, 5, Et)[1];
}
function cr(t) {
  const [e, n] = Yt(t, F);
  return [ar(n, 5, Et), e];
}
function Yi(t) {
  return fo(t, Tt);
}
function J(t) {
  return Le(t.isoYear, t.isoMonth, t.isoDay, t.isoHour, t.isoMinute, t.isoSecond, t.isoMillisecond);
}
function U(t) {
  const e = J(t);
  if (e !== void 0) {
    const [n, r] = ee(e, ot);
    return [n, r * Wt + (t.isoMicrosecond || 0) * Rn + (t.isoNanosecond || 0)];
  }
}
function mo(t, e) {
  const [n, r] = cr(ne(t) - e);
  return Nt(U({
    ...t,
    isoDay: t.isoDay + r,
    ...n
  }));
}
function Hn(...t) {
  return Le(...t) / Ga;
}
function Le(...t) {
  const [e, n] = Fs(...t), r = e.valueOf();
  if (!isNaN(r))
    return r - n * ot;
}
function Fs(t, e = 1, n = 1, r = 0, o = 0, i = 0, s = 0) {
  const a = t === yn ? 1 : t === wn ? -1 : 0, c = /* @__PURE__ */ new Date();
  return c.setUTCHours(r, o, i, s), c.setUTCFullYear(t, e - 1, n + a), [c, a];
}
function $e(t, e) {
  let [n, r] = we(t, e);
  r < 0 && (r += F, n -= 1);
  const [o, i] = Yt(r, Wt), [s, a] = Yt(i, Rn);
  return ur(n * ot + o, s, a);
}
function ur(t, e = 0, n = 0) {
  const r = Math.ceil(Math.max(0, Math.abs(t) - rd) / ot) * Math.sign(t), o = new Date(t - r * ot);
  return Be(Cr, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + r, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), e, n]);
}
function po(t, e) {
  if (e < -864e13)
    throw new RangeError(fe);
  const n = t.formatToParts(e), r = {};
  for (const o of n)
    r[o.type] = o.value;
  return r;
}
function go(t) {
  return [t.isoYear, t.isoMonth, t.isoDay];
}
function xs(t, e) {
  return [e, 0];
}
function Ys() {
  return qt;
}
function As(t, e) {
  switch (e) {
    case 2:
      return vo(t) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function Zs(t) {
  return vo(t) ? 366 : 365;
}
function vo(t) {
  return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
}
function js(t) {
  const [e, n] = Fs(t.isoYear, t.isoMonth, t.isoDay);
  return an(e.getUTCDay() - n, 7) || 7;
}
function Bs(t) {
  return this.id === Je ? (({ isoYear: e }) => e < 1 ? ["gregory-inverse", 1 - e] : ["gregory", e])(t) : this.id === ie ? cd(t) : [];
}
function Lc(t) {
  const e = J(t);
  if (e < ad) {
    const { isoYear: i } = t;
    return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
  }
  const n = po(gi(ie), e), { era: r, eraYear: o } = Oa(n, ie);
  return [r, o];
}
function lr(t) {
  return Se(t), Ue(t, 1), t;
}
function Se(t) {
  return Ls(t, 1), t;
}
function Ai(t) {
  return Is(ii, t, Ls(t));
}
function Ls(t, e) {
  const { isoYear: n } = t, r = et(t, "isoMonth", 1, Ys(), e);
  return {
    isoYear: n,
    isoMonth: r,
    isoDay: et(t, "isoDay", 1, As(n, r), e)
  };
}
function Ue(t, e) {
  return Be(Et, [et(t, "isoHour", 0, 23, e), et(t, "isoMinute", 0, 59, e), et(t, "isoSecond", 0, 59, e), et(t, "isoMillisecond", 0, 999, e), et(t, "isoMicrosecond", 0, 999, e), et(t, "isoNanosecond", 0, 999, e)]);
}
function O(t) {
  return t === void 0 ? 0 : uc(Sn(t));
}
function dr(t, e = 0) {
  t = Ct(t);
  const n = lc(t), r = wd(t, e);
  return [uc(t), r, n];
}
function We(t, e, n, r = 9, o = 0, i = 4) {
  e = Ct(e);
  let s = cc(e, r, o), a = Eo(e), c = zn(e, i);
  const u = Cn(e, r, o, 1);
  return s == null ? s = Math.max(n, u) : Vs(s, u), a = So(a, u, 1), t && (c = ((l) => l < 4 ? (l + 2) % 4 : l)(c)), [s, u, a, c];
}
function fr(t, e = 6, n) {
  let r = Eo(t = hr(t, er));
  const o = zn(t, 7);
  let i = Cn(t, e);
  return i = Cs(er, i), r = So(r, i, void 0, n), [i, r, o];
}
function wo(t) {
  return ai(Ct(t));
}
function $s(t, e) {
  return yo(Ct(t), e);
}
function $c(t) {
  const e = hr(t, Br), n = se(Br, gd, e, 0);
  if (!n)
    throw new RangeError(de(Br, n));
  return n;
}
function yo(t, e = 4) {
  const n = Ws(t);
  return [zn(t, 4), ...Us(Cn(t, e), n)];
}
function Us(t, e) {
  return t != null ? [Rt[t], t < 4 ? 9 - 3 * t : -1] : [e === void 0 ? 1 : 10 ** (9 - e), e];
}
function Eo(t) {
  const e = t[cn];
  return e === void 0 ? 1 : X(e, cn);
}
function So(t, e, n, r) {
  const o = r ? F : Rt[e + 1];
  if (o) {
    const i = Rt[e];
    if (o % ((t = jt(cn, t, 1, o / i - (r ? 0 : 1), 1)) * i))
      throw new RangeError(de(cn, t));
  } else
    t = jt(cn, t, 1, n ? 10 ** 9 : 1, 1);
  return t;
}
function Ws(t) {
  let e = t[jr];
  if (e !== void 0) {
    if (typeof e != "number") {
      if (so(e) === "auto")
        return;
      throw new RangeError(de(jr, e));
    }
    e = jt(jr, Math.floor(e), 0, 9, 1);
  }
  return e;
}
function Ct(t) {
  return t === void 0 ? {} : Sn(t);
}
function hr(t, e) {
  return typeof t == "string" ? {
    [e]: t
  } : Sn(t);
}
function mr(t) {
  return {
    overflow: ud[t]
  };
}
function Mo(t, e, n = 9, r = 0, o) {
  let i = e[t];
  if (i === void 0)
    return o ? r : void 0;
  if (i = so(i), i === "auto")
    return o ? r : null;
  let s = qr[i];
  if (s === void 0 && (s = td[i]), s === void 0)
    throw new RangeError(ja(t, i, qr));
  return jt(t, s, r, n, 1, Jo), s;
}
function se(t, e, n, r = 0) {
  const o = n[t];
  if (o === void 0)
    return r;
  const i = so(o), s = e[i];
  if (s === void 0)
    throw new RangeError(ja(t, i, e));
  return s;
}
function Vs(t, e) {
  if (e > t)
    throw new RangeError($l);
}
function $t(t) {
  return {
    branding: di,
    epochNanoseconds: t
  };
}
function wt(t, e, n) {
  return {
    branding: he,
    calendar: n,
    timeZone: e,
    epochNanoseconds: t
  };
}
function yt(t, e = t.calendar) {
  return {
    branding: Ke,
    calendar: e,
    ...vt(ed, t)
  };
}
function Ut(t, e = t.calendar) {
  return {
    branding: Pn,
    calendar: e,
    ...vt(si, t)
  };
}
function mn(t, e = t.calendar) {
  return {
    branding: ci,
    calendar: e,
    ...vt(si, t)
  };
}
function Xn(t, e = t.calendar) {
  return {
    branding: ui,
    calendar: e,
    ...vt(si, t)
  };
}
function zt(t) {
  return {
    branding: li,
    ...vt(rc, t)
  };
}
function L(t) {
  return {
    branding: fi,
    sign: ae(t),
    ...vt(ni, t)
  };
}
function bo(t) {
  return fo(t.epochNanoseconds, Wt)[0];
}
function Uc(t) {
  return ((e, n = 1) => {
    const [r, o] = e, i = Math.floor(o / n), s = F / n;
    return BigInt(r) * BigInt(s) + BigInt(i);
  })(t.epochNanoseconds);
}
function Gs(t) {
  return t.epochNanoseconds;
}
function Wc(t, e, n, r, o) {
  const i = ye(r), [s, a] = ((w, v) => {
    const y = v((w = hr(w, Jr))[sc]);
    let E = vd(w);
    return E = Cs(Jr, E), [E, y];
  })(o, t), c = Math.max(s, i);
  if (!a && gn(c, a))
    return Zi(r, s);
  if (!a)
    throw new RangeError(Or);
  if (!r.sign)
    return 0;
  const [u, l, d] = yr(e, n, a), f = Po(d), h = Er(d), m = _o(d), p = h(l, u, r);
  Ye(a) || (it(u), it(p));
  const g = m(l, u, p, s);
  return gn(s, a) ? Zi(g, s) : ((w, v, y, E, M, T, C) => {
    const P = ae(w), [_, Pt] = Do(E, oi(y, w), y, P, M, T, C), St = To(v, _, Pt);
    return w[R[y]] + St * P;
  })(g, f(p), s, l, u, f, h);
}
function Zi(t, e) {
  return Ot(W(t), Rt[e], 1);
}
function Do(t, e, n, r, o, i, s) {
  const a = R[n], c = {
    ...e,
    [a]: e[a] + r
  }, u = s(t, o, e), l = s(t, o, c);
  return [i(u), i(l)];
}
function To(t, e, n) {
  const r = Ot(It(e, n));
  if (!r)
    throw new RangeError(Xe);
  return Ot(It(e, t)) / r;
}
function Vc(t, e) {
  const [n, r, o] = fr(e, 5, 1);
  return $t(gr(t.epochNanoseconds, n, r, o, 1));
}
function Gc(t, e, n) {
  let { epochNanoseconds: r, timeZone: o, calendar: i } = e;
  const [s, a, c] = fr(n);
  if (s === 0 && a === 1)
    return e;
  const u = t(o);
  if (s === 6)
    r = ((l, d, f, h) => {
      const m = ht(f, d), [p, g] = l(m), w = f.epochNanoseconds, v = oe(d, p), y = oe(d, g);
      if (ks(w, v, y))
        throw new RangeError(Xe);
      return Ks(To(w, v, y), h) ? y : v;
    })(Xs, u, e, c);
  else {
    const l = u.R(r);
    r = Ve(u, qs($e(r, l), s, a, c), l, 2, 0, 1);
  }
  return wt(r, o, i);
}
function qc(t, e) {
  return yt(qs(t, ...fr(e)), t.calendar);
}
function Hc(t, e) {
  const [n, r, o] = fr(e, 5);
  var i;
  return zt((i = o, Io(t, Mn(n, r), i)[0]));
}
function Xc(t, e) {
  const n = t(e.timeZone), r = ht(e, n), [o, i] = Xs(r), s = Ot(It(oe(n, o), oe(n, i)), Nr, 1);
  if (s <= 0)
    throw new RangeError(Xe);
  return s;
}
function Jc(t, e) {
  const { timeZone: n, calendar: r } = e, o = ((i, s, a) => oe(s, i(ht(a, s))))(Js, t(n), e);
  return wt(o, n, r);
}
function qs(t, e, n, r) {
  return Hs(t, Mn(e, n), r);
}
function Hs(t, e, n) {
  const [r, o] = Io(t, e, n);
  return it({
    ...Me(t, o),
    ...r
  });
}
function Io(t, e, n) {
  return cr(re(ne(t), e, n));
}
function Jn(t) {
  return re(t, Rr, 7);
}
function Mn(t, e) {
  return Rt[t] * e;
}
function Xs(t) {
  const e = Js(t);
  return [e, Me(e, 1)];
}
function Js(t) {
  return nd(6, t);
}
function Kc(t, e, n) {
  const r = Math.min(ye(t), 6);
  return Ge(vr(W(t, r), e, n), r);
}
function pr(t, e, n, r, o, i, s, a, c, u) {
  if (r === 0 && o === 1)
    return t;
  const l = gn(r, a) ? Ye(a) && r < 6 && n >= 6 ? tu : Qc : eu;
  let [d, f, h] = l(t, e, n, r, o, i, s, a, c, u);
  return h && r !== 7 && (d = ((m, p, g, w, v, y, E, M) => {
    const T = ae(m);
    for (let C = w + 1; C <= g; C++) {
      if (C === 7 && g !== 7)
        continue;
      const P = oi(C, m);
      P[R[C]] += T;
      const _ = Ot(It(E(M(v, y, P)), p));
      if (_ && Math.sign(_) !== T)
        break;
      m = P;
    }
    return m;
  })(d, f, n, Math.max(6, r), s, a, c, u)), d;
}
function gr(t, e, n, r, o) {
  if (e === 6) {
    const i = ((s) => s[0] + s[1] / F)(t);
    return [re(i, n, r), 0];
  }
  return vr(t, Mn(e, n), r, o);
}
function vr(t, e, n, r) {
  let [o, i] = t;
  r && i < 0 && (i += F, o -= 1);
  const [s, a] = Yt(re(i, e, n), F);
  return uo(o + s, a);
}
function re(t, e, n) {
  return Ks(t / e, n) * e;
}
function Ks(t, e) {
  return Sd[e](t);
}
function Qc(t, e, n, r, o, i) {
  const s = ae(t), a = W(t), c = gr(a, r, o, i), u = It(a, c), l = Math.sign(c[0] - a[0]) === s, d = Ge(c, Math.min(n, 6));
  return [{
    ...t,
    ...d
  }, xe(e, u), l];
}
function tu(t, e, n, r, o, i, s, a, c, u) {
  const l = ae(t) || 1, d = Ot(W(t, 5)), f = Mn(r, o);
  let h = re(d, f, i);
  const [m, p] = Do(s, {
    ...t,
    ...ri
  }, 6, l, a, c, u), g = h - Ot(It(m, p));
  let w = 0;
  g && Math.sign(g) !== l ? e = we(m, h) : (w += l, h = re(g, f, i), e = we(p, h));
  const v = Sr(h);
  return [{
    ...t,
    ...v,
    days: t.days + w
  }, e, !!w];
}
function eu(t, e, n, r, o, i, s, a, c, u) {
  const l = ae(t), d = R[r], f = oi(r, t);
  r === 7 && (t = {
    ...t,
    weeks: t.weeks + Math.trunc(t.days / 7)
  });
  const h = sr(t[d], o) * o;
  f[d] = h;
  const [m, p] = Do(s, f, r, o * l, a, c, u), g = h + To(e, m, p) * l * o, w = re(g, o, i), v = Math.sign(w - g) === l;
  return f[d] = w, [f, v ? p : m, v];
}
function ji(t, e, n, r) {
  const [o, i, s, a] = ((u) => {
    const l = yo(u = Ct(u));
    return [u.timeZone, ...l];
  })(r), c = o !== void 0;
  return ((u, l, d, f, h, m) => {
    d = vr(d, h, f, 1);
    const p = l.R(d);
    return Oo($e(d, p), m) + (u ? bn(Jn(p)) : "Z");
  })(c, e(c ? t(o) : Ie), n.epochNanoseconds, i, s, a);
}
function Bi(t, e, n) {
  const [r, o, i, s, a, c] = ((u) => {
    u = Ct(u);
    const l = ai(u), d = Ws(u), f = Ed(u), h = zn(u, 4), m = Cn(u, 4);
    return [l, yd(u), f, h, ...Us(m, d)];
  })(n);
  return ((u, l, d, f, h, m, p, g, w, v) => {
    f = vr(f, w, g, 1);
    const y = u(d).R(f);
    return Oo($e(f, y), v) + bn(Jn(y), p) + ((E, M) => M !== 1 ? "[" + (M === 2 ? "!" : "") + E + "]" : "")(d, m) + Ro(l, h);
  })(t, e.calendar, e.timeZone, e.epochNanoseconds, r, o, i, s, a, c);
}
function Li(t, e) {
  const [n, r, o, i] = ((u) => (u = Ct(u), [ai(u), ...yo(u)]))(e);
  return s = t.calendar, a = n, c = i, Oo(Hs(t, o, r), c) + Ro(s, a);
  var s, a, c;
}
function $i(t, e) {
  return n = t.calendar, r = t, o = wo(e), Kn(r) + Ro(n, o);
  var n, r, o;
}
function Ui(t, e) {
  return Qs(t.calendar, ta, t, wo(e));
}
function Wi(t, e) {
  return Qs(t.calendar, nu, t, wo(e));
}
function Vi(t, e) {
  const [n, r, o] = $s(e);
  return i = o, ea(Io(t, r, n)[0], i);
  var i;
}
function kr(t, e) {
  const [n, r, o] = $s(e, 3);
  return r > 1 && be(t = {
    ...t,
    ...Kc(t, r, n)
  }), ((i, s) => {
    const { sign: a } = i, c = a === -1 ? Q(i) : i, { hours: u, minutes: l } = c, [d, f] = fo(W(c, 3), Tt, ee);
    ia(d);
    const h = No(f, s), m = s >= 0 || !a || h;
    return (a < 0 ? "-" : "") + "P" + Gi({
      Y: ge(c.years),
      M: ge(c.months),
      W: ge(c.weeks),
      D: ge(c.days)
    }) + (u || l || d || m ? "T" + Gi({
      H: ge(u),
      M: ge(l),
      S: ge(d, m) + h
    }) : "");
  })(t, o);
}
function Qs(t, e, n, r) {
  const o = r > 1 || r === 0 && t !== I;
  return r === 1 ? t === I ? e(n) : Kn(n) : o ? Kn(n) + na(t, r === 2) : e(n);
}
function Gi(t) {
  const e = [];
  for (const n in t) {
    const r = t[n];
    r && e.push(r, n);
  }
  return e.join("");
}
function Oo(t, e) {
  return Kn(t) + "T" + ea(t, e);
}
function Kn(t) {
  return ta(t) + "-" + gt(t.isoDay);
}
function ta(t) {
  const { isoYear: e } = t;
  return (e < 0 || e > 9999 ? ra(e) + Gn(6, Math.abs(e)) : Gn(4, e)) + "-" + gt(t.isoMonth);
}
function nu(t) {
  return gt(t.isoMonth) + "-" + gt(t.isoDay);
}
function ea(t, e) {
  const n = [gt(t.isoHour), gt(t.isoMinute)];
  return e !== -1 && n.push(gt(t.isoSecond) + ((r, o, i, s) => No(r * Wt + o * Rn + i, s))(t.isoMillisecond, t.isoMicrosecond, t.isoNanosecond, e)), n.join(":");
}
function bn(t, e = 0) {
  if (e === 1)
    return "";
  const [n, r] = Yt(Math.abs(t), Nr), [o, i] = Yt(r, Rr), [s, a] = Yt(i, Tt);
  return ra(t) + gt(n) + ":" + gt(o) + (s || a ? ":" + gt(s) + No(a) : "");
}
function Ro(t, e) {
  return e !== 1 && (e > 1 || e === 0 && t !== I) ? na(t, e === 2) : "";
}
function na(t, e) {
  return "[" + (e ? "!" : "") + "u-ca=" + t + "]";
}
function No(t, e) {
  let n = Gn(9, t);
  return n = e === void 0 ? n.replace(Dd, "") : n.slice(0, e), n ? "." + n : "";
}
function ra(t) {
  return t < 0 ? "-" : "+";
}
function ge(t, e) {
  return t || e ? t.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function ru(t, e) {
  const { epochNanoseconds: n } = t, r = (e.R ? e : e(t.timeZone)).R(n), o = $e(n, r);
  return {
    calendar: t.calendar,
    ...o,
    offsetNanoseconds: r
  };
}
function Ve(t, e, n, r = 0, o = 0, i, s) {
  if (n !== void 0 && r === 1 && (r === 1 || s))
    return mo(e, n);
  const a = t.I(e);
  if (n !== void 0 && r !== 3) {
    const c = ((u, l, d, f) => {
      const h = U(l);
      f && (d = Jn(d));
      for (const m of u) {
        let p = Ot(It(m, h));
        if (f && (p = Jn(p)), p === d)
          return m;
      }
    })(a, e, n, i);
    if (c !== void 0)
      return c;
    if (r === 0)
      throw new RangeError(Yl);
  }
  return s ? U(e) : Dn(t, e, o, a);
}
function Dn(t, e, n = 0, r = t.I(e)) {
  if (r.length === 1)
    return r[0];
  if (n === 1)
    throw new RangeError(Al);
  if (r.length)
    return r[n === 3 ? 1 : 0];
  const o = U(e), i = ((a, c) => {
    const u = a.R(we(c, -864e11));
    return ((l) => {
      if (l > F)
        throw new RangeError(xl);
      return l;
    })(a.R(we(c, F)) - u);
  })(t, o), s = i * (n === 2 ? -1 : 1);
  return (r = t.I($e(o, s)))[n === 2 ? 0 : r.length - 1];
}
function oe(t, e) {
  const n = t.I(e);
  if (n.length)
    return n[0];
  const r = we(U(e), -864e11);
  return t.O(r, 1);
}
function qi(t, e, n) {
  return $t(Nt(xe(e.epochNanoseconds, ((r) => {
    if (sa(r))
      throw new RangeError(Bl);
    return W(r, 5);
  })(t ? Q(n) : n))));
}
function Hi(t, e, n, r, o, i = /* @__PURE__ */ Object.create(null)) {
  const s = e(r.timeZone), a = t(r.calendar);
  return {
    ...r,
    ...Co(s, a, r, n ? Q(o) : o, i)
  };
}
function Xi(t, e, n, r, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i } = n;
  return yt(zo(t(i), n, e ? Q(r) : r, o), i);
}
function Ji(t, e, n, r, o) {
  const { calendar: i } = n;
  return Ut(wr(t(i), n, e ? Q(r) : r, o), i);
}
function Ki(t, e, n, r, o) {
  const i = n.calendar, s = t(i);
  let a = pt(pn(s, n));
  e && (r = ko(r)), r.sign < 0 && (a = s.P(a, {
    ...V,
    months: 1
  }), a = Me(a, -1));
  const c = s.P(a, r, o);
  return mn(pn(s, c), i);
}
function Qi(t, e, n) {
  return zt(oa(e, t ? Q(n) : n)[0]);
}
function Co(t, e, n, r, o) {
  const i = W(r, 5);
  let s = n.epochNanoseconds;
  if (sa(r)) {
    const a = ht(n, t);
    s = xe(Dn(t, {
      ...wr(e, a, {
        ...r,
        ...ri
      }, o),
      ...vt(Et, a)
    }), i);
  } else
    s = xe(s, i), O(o);
  return {
    epochNanoseconds: Nt(s)
  };
}
function zo(t, e, n, r) {
  const [o, i] = oa(e, n);
  return it({
    ...wr(t, e, {
      ...n,
      ...ri,
      days: n.days + i
    }, r),
    ...o
  });
}
function wr(t, e, n, r) {
  if (n.years || n.months || n.weeks)
    return t.P(e, n, r);
  O(r);
  const o = n.days + W(n, 5)[0];
  return o ? pt(Me(e, o)) : e;
}
function pn(t, e, n = 1) {
  return Me(e, n - t.day(e));
}
function oa(t, e) {
  const [n, r] = W(e, 5), [o, i] = cr(ne(t) + r);
  return [o, n + i];
}
function Me(t, e) {
  return e ? {
    ...t,
    ...ur(J(t) + e * ot)
  } : t;
}
function yr(t, e, n) {
  const r = t(n.calendar);
  return Ye(n) ? [n, r, e(n.timeZone)] : [{
    ...n,
    ...st
  }, r];
}
function Po(t) {
  return t ? Gs : U;
}
function Er(t) {
  return t ? D(Co, t) : zo;
}
function _o(t) {
  return t ? D(Ou, t) : Ru;
}
function Ye(t) {
  return t && t.epochNanoseconds;
}
function gn(t, e) {
  return t <= 6 - (Ye(e) ? 1 : 0);
}
function ts(t, e, n, r, o, i, s) {
  const a = t(Ct(s).relativeTo), c = Math.max(ye(o), ye(i));
  if (gn(c, a))
    return L(be(((p, g, w, v) => {
      const y = xe(W(p), W(g), v ? -1 : 1);
      if (!Number.isFinite(y[0]))
        throw new RangeError(fe);
      return {
        ...V,
        ...Ge(y, w)
      };
    })(o, i, c, r)));
  if (!a)
    throw new RangeError(Or);
  r && (i = Q(i));
  const [u, l, d] = yr(e, n, a), f = Er(d), h = _o(d), m = f(l, u, o);
  return L(h(l, u, f(l, m, i), c));
}
function ou(t, e, n, r, o) {
  const i = ye(r), [s, a, c, u, l] = ((T, C, P) => {
    T = hr(T, er);
    let _ = cc(T);
    const Pt = P(T[sc]);
    let St = Eo(T);
    const k = zn(T, 7);
    let N = Cn(T);
    if (_ === void 0 && N === void 0)
      throw new RangeError(Ll);
    if (N == null && (N = 0), _ == null && (_ = Math.max(N, C)), Vs(_, N), St = So(St, N, 1), St > 1 && N > 5 && _ !== N)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [_, N, St, k, Pt];
  })(o, i, t), d = Math.max(i, s);
  if (!l && d <= 6)
    return L(be(((T, C, P, _, Pt) => {
      const St = gr(W(T), P, _, Pt);
      return {
        ...V,
        ...Ge(St, C)
      };
    })(r, s, a, c, u)));
  if (!Ye(l) && !r.sign)
    return r;
  if (!l)
    throw new RangeError(Or);
  const [f, h, m] = yr(e, n, l), p = Po(m), g = Er(m), w = _o(m), v = g(h, f, r);
  Ye(l) || (it(f), it(v));
  let y = w(h, f, v, s);
  const E = r.sign, M = ae(y);
  if (E && M && E !== M)
    throw new RangeError(Xe);
  return y = pr(y, p(v), s, a, c, u, h, f, p, g), L(y);
}
function iu(t) {
  return t.sign === -1 ? ko(t) : t;
}
function ko(t) {
  return L(Q(t));
}
function Q(t) {
  const e = {};
  for (const n of R)
    e[n] = -1 * t[n] || 0;
  return e;
}
function su(t) {
  return !t.sign;
}
function ae(t, e = R) {
  let n = 0;
  for (const r of e) {
    const o = Math.sign(t[r]);
    if (o) {
      if (n && n !== o)
        throw new RangeError(jl);
      n = o;
    }
  }
  return n;
}
function be(t) {
  for (const e of Ql)
    jt(e, t[e], -4294967295, Td, 1);
  return ia(Ot(W(t), Tt)), t;
}
function ia(t) {
  if (!Number.isSafeInteger(t))
    throw new RangeError(Zl);
}
function W(t, e = 6) {
  return Rs(t, e, R);
}
function Ge(t, e = 6) {
  const [n, r] = t, o = ar(r, e, R);
  if (o[R[e]] += n * (F / Rt[e]), !Number.isFinite(o[R[e]]))
    throw new RangeError(fe);
  return o;
}
function Sr(t, e = 5) {
  return ar(t, e, R);
}
function sa(t) {
  return !!ae(t, nc);
}
function ye(t) {
  let e = 9;
  for (; e > 0 && !t[R[e]]; e--)
    ;
  return e;
}
function au(t, e) {
  return [t, e];
}
function es(t) {
  const e = Math.floor(t / $n) * $n;
  return [e, e + $n];
}
function cu(t) {
  const e = ce(t = Bn(t));
  if (!e)
    throw new RangeError(rt(t));
  let n;
  if (e.j)
    n = 0;
  else {
    if (!e.offset)
      throw new RangeError(rt(t));
    n = De(e.offset);
  }
  return e.timeZone && Zo(e.timeZone, 1), $t(mo(lr(e), n));
}
function uu(t) {
  const e = ce(G(t));
  if (!e)
    throw new RangeError(rt(t));
  if (e.timeZone)
    return aa(e, e.offset ? De(e.offset) : void 0);
  if (e.j)
    throw new RangeError(rt(t));
  return ua(e);
}
function lu(t, e) {
  const n = ce(G(t));
  if (!n || !n.timeZone)
    throw new RangeError(rt(t));
  const { offset: r } = n, o = r ? De(r) : void 0, [, i, s] = dr(e);
  return aa(n, o, i, s);
}
function De(t) {
  const e = Zo(t);
  if (e === void 0)
    throw new RangeError(rt(t));
  return e;
}
function du(t) {
  const e = ce(G(t));
  if (!e || e.j)
    throw new RangeError(rt(t));
  return yt(ca(e));
}
function Fo(t, e, n) {
  let r = ce(G(t));
  if (!r || r.j)
    throw new RangeError(rt(t));
  return e ? r.calendar === I && (r = r.isoYear === -271821 && r.isoMonth === 4 ? {
    ...r,
    isoDay: 20,
    ...st
  } : {
    ...r,
    isoDay: 1,
    ...st
  }) : n && r.calendar === I && (r = {
    ...r,
    isoYear: Zt
  }), Ut(r.C ? ca(r) : ua(r));
}
function fu(t, e) {
  const n = Yo(G(e));
  if (n)
    return xo(n), mn(ho(Se(n)));
  const r = Fo(e, 1);
  return mn(pn(t(r.calendar), r));
}
function xo(t) {
  if (t.calendar !== I)
    throw new RangeError(At(t.calendar));
}
function hu(t, e) {
  const n = Ao(G(e));
  if (n)
    return xo(n), Xn(Se(n));
  const r = Fo(e, 0, 1), { calendar: o } = r, i = t(o), [s, a, c] = i.v(r), [u, l] = i.q(s, a), [d, f] = i.G(u, l, c);
  return Xn(pt(i.V(d, f, c)), o);
}
function mu(t) {
  let e, n = ((r) => {
    const o = Pd.exec(r);
    return o ? (Mr(o[10]), fa(o)) : void 0;
  })(G(t));
  if (!n) {
    if (n = ce(t), !n)
      throw new RangeError(rt(t));
    if (!n.C)
      throw new RangeError(rt(t));
    if (n.j)
      throw new RangeError(At("Z"));
    xo(n);
  }
  if ((e = Yo(t)) && Ai(e))
    throw new RangeError(rt(t));
  if ((e = Ao(t)) && Ai(e))
    throw new RangeError(rt(t));
  return zt(Ue(n, 1));
}
function pu(t) {
  const e = ((n) => {
    const r = Fd.exec(n);
    return r ? ((o) => {
      function i(l, d, f) {
        let h = 0, m = 0;
        if (f && ([h, c] = Yt(c, Rt[f])), l !== void 0) {
          if (a)
            throw new RangeError(At(l));
          m = ((p) => {
            const g = parseInt(p);
            if (!Number.isFinite(g))
              throw new RangeError(At(p));
            return g;
          })(l), s = 1, d && (c = jo(d) * (Rt[f] / Tt), a = 1);
        }
        return h + m;
      }
      let s = 0, a = 0, c = 0, u = {
        ...Be(R, [i(o[2]), i(o[3]), i(o[4]), i(o[5]), i(o[6], o[7], 5), i(o[8], o[9], 4), i(o[10], o[11], 3)]),
        ...ar(c, 2, R)
      };
      if (!s)
        throw new RangeError(Za(R));
      return Bo(o[1]) < 0 && (u = Q(u)), u;
    })(r) : void 0;
  })(G(t));
  if (!e)
    throw new RangeError(rt(t));
  return L(be(e));
}
function gu(t) {
  const e = ce(t) || Yo(t) || Ao(t);
  return e ? e.calendar : t;
}
function vu(t) {
  const e = ce(t);
  return e && (e.timeZone || e.j && Ie || e.offset) || t;
}
function aa(t, e, n = 0, r = 0) {
  const o = Lo(t.timeZone), i = b(o);
  let s;
  return lr(t), s = t.C ? Ve(i, t, e, n, r, !i.$, t.j) : oe(i, t), wt(s, o, Ir(t.calendar));
}
function ca(t) {
  return la(it(lr(t)));
}
function ua(t) {
  return la(pt(Se(t)));
}
function la(t) {
  return {
    ...t,
    calendar: Ir(t.calendar)
  };
}
function ce(t) {
  const e = zd.exec(t);
  return e ? ((n) => {
    const r = n[10], o = (r || "").toUpperCase() === "Z";
    return {
      isoYear: da(n),
      isoMonth: parseInt(n[4]),
      isoDay: parseInt(n[5]),
      ...fa(n.slice(5)),
      ...Mr(n[16]),
      C: !!n[6],
      j: o,
      offset: o ? void 0 : r
    };
  })(e) : void 0;
}
function Yo(t) {
  const e = Nd.exec(t);
  return e ? ((n) => ({
    isoYear: da(n),
    isoMonth: parseInt(n[4]),
    isoDay: 1,
    ...Mr(n[5])
  }))(e) : void 0;
}
function Ao(t) {
  const e = Cd.exec(t);
  return e ? ((n) => ({
    isoYear: Zt,
    isoMonth: parseInt(n[1]),
    isoDay: parseInt(n[2]),
    ...Mr(n[3])
  }))(e) : void 0;
}
function Zo(t, e) {
  const n = _d.exec(t);
  return n ? ((r, o) => {
    const i = r[4] || r[5];
    if (o && i)
      throw new RangeError(At(i));
    return ((s) => {
      if (Math.abs(s) >= F)
        throw new RangeError(Fl);
      return s;
    })((_e(r[2]) * Nr + _e(r[3]) * Rr + _e(r[4]) * Tt + jo(r[5] || "")) * Bo(r[1]));
  })(n, e) : void 0;
}
function da(t) {
  const e = Bo(t[1]), n = parseInt(t[2] || t[3]);
  if (e < 0 && !n)
    throw new RangeError(At(-0));
  return e * n;
}
function fa(t) {
  const e = _e(t[3]);
  return {
    ...cr(jo(t[4] || ""))[0],
    isoHour: _e(t[1]),
    isoMinute: _e(t[2]),
    isoSecond: e === 60 ? 59 : e
  };
}
function Mr(t) {
  let e, n;
  const r = [];
  if (t.replace(kd, (o, i, s) => {
    const a = !!i, [c, u] = s.split("=").reverse();
    if (u) {
      if (u === "u-ca")
        r.push(c), e || (e = a);
      else if (a || /[A-Z]/.test(u))
        throw new RangeError(At(o));
    } else {
      if (n)
        throw new RangeError(At(o));
      n = c;
    }
    return "";
  }), r.length > 1 && e)
    throw new RangeError(At(t));
  return {
    timeZone: n,
    calendar: r[0] || I
  };
}
function jo(t) {
  return parseInt(t.padEnd(9, "0"));
}
function qe(t) {
  return new RegExp(`^${t}$`, "i");
}
function Bo(t) {
  return t && t !== "+" ? -1 : 1;
}
function _e(t) {
  return t === void 0 ? 0 : parseInt(t);
}
function wu(t) {
  return Lo(G(t));
}
function Lo(t) {
  const e = $o(t);
  return typeof e == "number" ? bn(e) : e ? ((n) => {
    if (Ad.test(n))
      throw new RangeError(Ua(n));
    if (Yd.test(n))
      throw new RangeError(kl);
    return n.toLowerCase().split("/").map((r, o) => (r.length <= 3 || /\d/.test(r)) && !/etc|yap/.test(r) ? r.toUpperCase() : r.replace(/baja|dumont|[a-z]+/g, (i, s) => i.length <= 2 && !o || i === "in" || i === "chat" ? i.toUpperCase() : i.length > 2 || !s ? Fi(i).replace(/island|noronha|murdo|rivadavia|urville/, Fi) : i)).join("/");
  })(t) : Ie;
}
function ns(t) {
  const e = $o(t);
  return typeof e == "number" ? e : e ? e.resolvedOptions().timeZone : Ie;
}
function $o(t) {
  const e = Zo(t = t.toUpperCase(), 1);
  return e !== void 0 ? e : t !== Ie ? xd(t) : void 0;
}
function ha(t, e) {
  return dt(t.epochNanoseconds, e.epochNanoseconds);
}
function ma(t, e) {
  return dt(t.epochNanoseconds, e.epochNanoseconds);
}
function yu(t, e, n, r, o, i) {
  const s = t(Ct(i).relativeTo), a = Math.max(ye(r), ye(o));
  if (Is(R, r, o))
    return 0;
  if (gn(a, s))
    return dt(W(r), W(o));
  if (!s)
    throw new RangeError(Or);
  const [c, u, l] = yr(e, n, s), d = Po(l), f = Er(l);
  return dt(d(f(u, c, r)), d(f(u, c, o)));
}
function pa(t, e) {
  return He(t, e) || Uo(t, e);
}
function He(t, e) {
  return Kt(J(t), J(e));
}
function Uo(t, e) {
  return Kt(ne(t), ne(e));
}
function Eu(t, e) {
  return !ha(t, e);
}
function Su(t, e) {
  return !ma(t, e) && !!ga(t.timeZone, e.timeZone) && t.calendar === e.calendar;
}
function Mu(t, e) {
  return !pa(t, e) && t.calendar === e.calendar;
}
function bu(t, e) {
  return !He(t, e) && t.calendar === e.calendar;
}
function Du(t, e) {
  return !He(t, e) && t.calendar === e.calendar;
}
function Tu(t, e) {
  return !He(t, e) && t.calendar === e.calendar;
}
function Iu(t, e) {
  return !Uo(t, e);
}
function ga(t, e) {
  if (t === e)
    return 1;
  try {
    return ns(t) === ns(e);
  } catch {
  }
}
function rs(t, e, n, r) {
  const o = We(t, r, 3, 5), i = br(e.epochNanoseconds, n.epochNanoseconds, ...o);
  return L(t ? Q(i) : i);
}
function os(t, e, n, r, o, i) {
  const s = Tr(r.calendar, o.calendar), [a, c, u, l] = We(n, i, 5), d = r.epochNanoseconds, f = o.epochNanoseconds, h = dt(f, d);
  let m;
  if (h)
    if (a < 6)
      m = br(d, f, a, c, u, l);
    else {
      const p = e(((w, v) => {
        if (!ga(w, v))
          throw new RangeError(Wa);
        return w;
      })(r.timeZone, o.timeZone)), g = t(s);
      m = wa(g, p, r, o, h, a, i), m = pr(m, f, a, c, u, l, g, r, Gs, D(Co, p));
    }
  else
    m = V;
  return L(n ? Q(m) : m);
}
function is(t, e, n, r, o) {
  const i = Tr(n.calendar, r.calendar), [s, a, c, u] = We(e, o, 6), l = U(n), d = U(r), f = dt(d, l);
  let h;
  if (f)
    if (s <= 6)
      h = br(l, d, s, a, c, u);
    else {
      const m = t(i);
      h = ya(m, n, r, f, s, o), h = pr(h, d, s, a, c, u, m, n, U, zo);
    }
  else
    h = V;
  return L(e ? Q(h) : h);
}
function ss(t, e, n, r, o) {
  const i = Tr(n.calendar, r.calendar);
  return va(e, () => t(i), n, r, ...We(e, o, 6, 9, 6));
}
function as(t, e, n, r, o) {
  const i = Tr(n.calendar, r.calendar), s = We(e, o, 9, 9, 8), a = t(i), c = pn(a, n), u = pn(a, r);
  return c.isoYear === u.isoYear && c.isoMonth === u.isoMonth && c.isoDay === u.isoDay ? L(V) : va(e, () => a, pt(c), pt(u), ...s, 8);
}
function va(t, e, n, r, o, i, s, a, c = 6) {
  const u = U(n), l = U(r);
  if (u === void 0 || l === void 0)
    throw new RangeError(fe);
  let d;
  if (dt(l, u))
    if (o === 6)
      d = br(u, l, o, i, s, a);
    else {
      const f = e();
      d = f.N(n, r, o), i === c && s === 1 || (d = pr(d, l, o, i, s, a, f, n, U, wr));
    }
  else
    d = V;
  return L(t ? Q(d) : d);
}
function cs(t, e, n, r) {
  const [o, i, s, a] = We(t, r, 5, 5), c = re(Wo(e, n), Mn(i, s), a), u = {
    ...V,
    ...Sr(c, o)
  };
  return L(t ? Q(u) : u);
}
function Ou(t, e, n, r, o, i) {
  const s = dt(r.epochNanoseconds, n.epochNanoseconds);
  return s ? o < 6 ? Ea(n.epochNanoseconds, r.epochNanoseconds, o) : wa(e, t, n, r, s, o, i) : V;
}
function Ru(t, e, n, r, o) {
  const i = U(e), s = U(n), a = dt(s, i);
  return a ? r <= 6 ? Ea(i, s, r) : ya(t, e, n, a, r, o) : V;
}
function wa(t, e, n, r, o, i, s) {
  const [a, c, u] = ((f, h, m, p) => {
    function g() {
      return C = {
        ...Me(y, M++ * -p),
        ...v
      }, P = Dn(f, C), dt(E, P) === -p;
    }
    const w = ht(h, f), v = vt(Et, w), y = ht(m, f), E = m.epochNanoseconds;
    let M = 0;
    const T = Wo(w, y);
    let C, P;
    if (Math.sign(T) === -p && M++, g() && (p === -1 || g()))
      throw new RangeError(Xe);
    const _ = Ot(It(P, E));
    return [w, C, _];
  })(e, n, r, o);
  var l, d;
  return {
    ...i === 6 ? (l = a, d = c, {
      ...V,
      days: Sa(l, d)
    }) : t.N(a, c, i, s),
    ...Sr(u)
  };
}
function ya(t, e, n, r, o, i) {
  const [s, a, c] = ((u, l, d) => {
    let f = l, h = Wo(u, l);
    return Math.sign(h) === -d && (f = Me(l, -d), h += F * d), [u, f, h];
  })(e, n, r);
  return {
    ...t.N(s, a, o, i),
    ...Sr(c)
  };
}
function br(t, e, n, r, o, i) {
  return {
    ...V,
    ...Ge(gr(It(t, e), r, o, i), n)
  };
}
function Ea(t, e, n) {
  return {
    ...V,
    ...Ge(It(t, e), n)
  };
}
function Sa(t, e) {
  return Dr(J(t), J(e));
}
function Dr(t, e) {
  return Math.trunc((e - t) / ot);
}
function Wo(t, e) {
  return ne(e) - ne(t);
}
function Tr(t, e) {
  if (t !== e)
    throw new RangeError($a);
  return t;
}
function Ma(t) {
  return this.m(t)[0];
}
function ba(t) {
  return this.m(t)[1];
}
function Vo(t) {
  const [e] = this.v(t);
  return Dr(this.p(e), J(t)) + 1;
}
function Go(t) {
  const e = Zd.exec(t);
  if (!e)
    throw new RangeError(Pl(t));
  return [parseInt(e[1]), !!e[2]];
}
function Tn(t, e) {
  return "M" + gt(t) + (e ? "L" : "");
}
function Qn(t, e, n) {
  return t + (e || n && t >= n ? 1 : 0);
}
function qo(t, e) {
  return t - (e && t >= e ? 1 : 0);
}
function Da(t, e) {
  return (e + t) * (Math.sign(e) || 1) || 0;
}
function Wr(t) {
  return tc[Ia(t)];
}
function Ta(t) {
  return Hl[Ia(t)];
}
function Ia(t) {
  return Ee(t.id || I);
}
function Nu(t) {
  function e(o) {
    return ((i, s) => ({
      ...Oa(i, s),
      o: i.month,
      day: parseInt(i.day)
    }))(po(n, o), r);
  }
  const n = gi(t), r = Ee(t);
  return {
    id: t,
    h: Cu(e),
    l: zu(e)
  };
}
function Cu(t) {
  return lt((e) => {
    const n = J(e);
    return t(n);
  }, WeakMap);
}
function zu(t) {
  const e = t(0).year - sd;
  return lt((n) => {
    let r, o = Le(n - e), i = 0;
    const s = [], a = [];
    do
      o += 400 * ot;
    while ((r = t(o)).year <= n);
    do
      if (o += (1 - r.day) * ot, r.year === n && (s.push(o), a.push(r.o)), o -= ot, ++i > 100 || o < -864e13)
        throw new RangeError(Xe);
    while ((r = t(o)).year >= n);
    return {
      i: s.reverse(),
      u: Va(a.reverse())
    };
  });
}
function Oa(t, e) {
  let n, r, o = Ra(t);
  if (t.era) {
    const i = tc[e], s = ec[e] || {};
    i !== void 0 && (n = e === "islamic" ? "ah" : t.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n === "ad" || n === "a" ? n = "ce" : n === "beforeroc" && (n = "broc"), n = s[n] || n, r = o, o = Da(r, i[n] || 0));
  }
  return {
    era: n,
    eraYear: r,
    year: o
  };
}
function Ra(t) {
  return parseInt(t.relatedYear || t.year);
}
function tr(t) {
  const { year: e, o: n, day: r } = this.h(t), { u: o } = this.l(e);
  return [e, o[n] + 1, r];
}
function vn(t, e = 1, n = 1) {
  return this.l(t).i[e - 1] + (n - 1) * ot;
}
function Na(t, e) {
  const n = Ln.call(this, t);
  return [qo(e, n), n === e];
}
function Ln(t) {
  const e = ls(this, t), n = ls(this, t - 1), r = e.length;
  if (r > n.length) {
    const o = Ta(this);
    if (o < 0)
      return -o;
    for (let i = 0; i < r; i++)
      if (e[i] !== n[i])
        return i + 1;
  }
}
function An(t) {
  return Dr(vn.call(this, t), vn.call(this, t + 1));
}
function us(t, e) {
  const { i: n } = this.l(t);
  let r = e + 1, o = n;
  return r > n.length && (r = 1, o = this.l(t + 1).i), Dr(n[e - 1], o[r - 1]);
}
function Zn(t) {
  return this.l(t).i.length;
}
function Ca(t) {
  const e = this.h(t);
  return [e.era, e.eraYear];
}
function ls(t, e) {
  return Object.keys(t.l(e).u);
}
function In(t) {
  return Ir(G(t));
}
function Ir(t) {
  if ((t = t.toLowerCase()) !== I && t !== Je) {
    const e = gi(t).resolvedOptions().calendar;
    if (Ee(t) !== Ee(e))
      throw new RangeError(La(t));
    return e;
  }
  return t;
}
function Ee(t) {
  return t === "islamicc" && (t = "islamic"), t.split("-")[0];
}
function za(t, e) {
  return (n) => n === I ? t : n === Je || n === ie ? Object.assign(Object.create(t), {
    id: n
  }) : Object.assign(Object.create(e), jd(n));
}
function Pu(t, e, n, r) {
  const o = ue(n, r, Gt, [], Xa);
  if (o.timeZone !== void 0) {
    const i = n.F(o), s = On(o), a = t(o.timeZone);
    return {
      epochNanoseconds: Ve(e(a), {
        ...i,
        ...s
      }, o.offset !== void 0 ? De(o.offset) : void 0),
      timeZone: a
    };
  }
  return {
    ...n.F(o),
    ...st
  };
}
function _u(t, e, n, r, o, i) {
  const s = ue(n, o, Gt, qa, Xa), a = t(s.timeZone), [c, u, l] = dr(i), d = n.F(s, mr(c)), f = On(s, c);
  return wt(Ve(e(a), {
    ...d,
    ...f
  }, s.offset !== void 0 ? De(s.offset) : void 0, u, l), a, r);
}
function ku(t, e, n) {
  const r = ue(t, e, Gt, [], Vt), o = O(n);
  return yt(it({
    ...t.F(r, mr(o)),
    ...On(r, o)
  }));
}
function Fu(t, e, n, r = []) {
  const o = ue(t, e, Gt, r);
  return t.F(o, n);
}
function xu(t, e, n, r) {
  const o = ue(t, e, ei, r);
  return t.K(o, n);
}
function Yu(t, e, n, r) {
  const o = ue(t, n, Gt, Nn);
  return e && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = Zt), t._(o, r);
}
function Au(t, e) {
  return zt(On(ft(t, Hr, [], 1), O(e)));
}
function Zu(t) {
  const e = ft(t, ni);
  return L(be({
    ...V,
    ...e
  }));
}
function ue(t, e, n, r = [], o = []) {
  return ft(e, [...t.fields(n), ...o].sort(), r);
}
function ft(t, e, n, r = !n) {
  const o = {};
  let i, s = 0;
  for (const a of e) {
    if (a === i)
      throw new RangeError(Dl(a));
    if (a === "constructor" || a === "__proto__")
      throw new RangeError(bl(a));
    let c = t[a];
    if (c !== void 0)
      s = 1, ds[a] && (c = ds[a](c, a)), o[a] = c;
    else if (n) {
      if (n.includes(a))
        throw new TypeError(Xo(a));
      o[a] = Qa[a];
    }
    i = a;
  }
  if (r && !s)
    throw new TypeError(Za(e));
  return o;
}
function On(t, e) {
  return Ue(vi({
    ...Qa,
    ...t
  }), e);
}
function ju(t, e, n, r, o) {
  const { calendar: i, timeZone: s } = n, a = t(i), c = e(s), u = [...a.fields(Gt), ...Ha].sort(), l = ((w) => {
    const v = ht(w, b), y = bn(v.offsetNanoseconds), E = Pr(w.calendar), [M, T, C] = E.v(v), [P, _] = E.q(M, T), Pt = Tn(P, _);
    return {
      ...qd(v),
      year: M,
      monthCode: Pt,
      day: C,
      offset: y
    };
  })(n), d = ft(r, u), f = a.k(l, d), h = {
    ...l,
    ...d
  }, [m, p, g] = dr(o, 2);
  return wt(Ve(c, {
    ...a.F(f, mr(m)),
    ...Ue(vi(h), m)
  }, De(h.offset), p, g), s, i);
}
function Bu(t, e, n, r) {
  const o = t(e.calendar), i = [...o.fields(Gt), ...Vt].sort(), s = {
    ..._a(a = e),
    hour: a.isoHour,
    minute: a.isoMinute,
    second: a.isoSecond,
    millisecond: a.isoMillisecond,
    microsecond: a.isoMicrosecond,
    nanosecond: a.isoNanosecond
  };
  var a;
  const c = ft(n, i), u = O(r), l = o.k(s, c), d = {
    ...s,
    ...c
  };
  return yt(it({
    ...o.F(l, mr(u)),
    ...Ue(vi(d), u)
  }));
}
function Lu(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(Gt).sort(), s = _a(e), a = ft(n, i), c = o.k(s, a);
  return o.F(c, r);
}
function $u(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(ei).sort(), s = ((u) => {
    const l = Pr(u.calendar), [d, f] = l.v(u), [h, m] = l.q(d, f);
    return {
      year: d,
      monthCode: Tn(h, m)
    };
  })(e), a = ft(n, i), c = o.k(s, a);
  return o.K(c, r);
}
function Uu(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(Gt).sort(), s = ((u) => {
    const l = Pr(u.calendar), [d, f, h] = l.v(u), [m, p] = l.q(d, f);
    return {
      monthCode: Tn(m, p),
      day: h
    };
  })(e), a = ft(n, i), c = o.k(s, a);
  return o._(c, r);
}
function Wu(t, e, n) {
  return zt(((r, o, i) => On({
    ...vt(Hr, r),
    ...ft(o, Hr)
  }, O(i)))(t, e, n));
}
function Vu(t, e) {
  return L((n = t, r = e, be({
    ...n,
    ...ft(r, ni)
  })));
  var n, r;
}
function Pa(t, e, n, r, o) {
  e = vt(n = t.fields(n), e), r = ft(r, o = t.fields(o), []);
  let i = t.k(e, r);
  return i = ft(i, [...n, ...o].sort(), []), t.F(i);
}
function Fr(t, e) {
  const n = Wr(t), r = ec[t.id || ""] || {};
  let { era: o, eraYear: i, year: s } = e;
  if (o !== void 0 || i !== void 0) {
    if (o === void 0 || i === void 0)
      throw new TypeError(Rl);
    if (!n)
      throw new RangeError(Ol);
    const a = n[r[o] || o];
    if (a === void 0)
      throw new RangeError(Cl(o));
    const c = Da(i, a);
    if (s !== void 0 && s !== c)
      throw new RangeError(Nl);
    s = c;
  } else if (s === void 0)
    throw new TypeError(zl(n));
  return s;
}
function jn(t, e, n, r) {
  let { month: o, monthCode: i } = e;
  if (i !== void 0) {
    const s = ((a, c, u, l) => {
      const d = a.L(u), [f, h] = Go(c);
      let m = Qn(f, h, d);
      if (h) {
        const p = Ta(a);
        if (p === void 0)
          throw new RangeError(rn);
        if (p > 0) {
          if (m > p)
            throw new RangeError(rn);
          if (d === void 0) {
            if (l === 1)
              throw new RangeError(rn);
            m--;
          }
        } else {
          if (m !== -p)
            throw new RangeError(rn);
          if (d === void 0 && l === 1)
            throw new RangeError(rn);
        }
      }
      return m;
    })(t, i, n, r);
    if (o !== void 0 && o !== s)
      throw new RangeError(_l);
    o = s, r = 1;
  } else if (o === void 0)
    throw new TypeError(Ba);
  return jt("month", o, 1, t.B(n), r);
}
function xr(t, e, n, r, o) {
  return et(e, "day", 1, t.U(r, n), o);
}
function Yr(t, e, n, r) {
  let o = 0;
  const i = [];
  for (const s of n)
    e[s] !== void 0 ? o = 1 : i.push(s);
  if (Object.assign(t, e), o)
    for (const s of r || i)
      delete t[s];
}
function _a(t) {
  const e = Pr(t.calendar), [n, r, o] = e.v(t), [i, s] = e.q(n, r);
  return {
    year: n,
    monthCode: Tn(i, s),
    day: o
  };
}
function Gu(t) {
  return $t(Nt(lo(ao(t))));
}
function qu(t, e, n, r, o = I) {
  return wt(Nt(lo(ao(n))), e(r), t(o));
}
function Hu(t, e, n, r, o = 0, i = 0, s = 0, a = 0, c = 0, u = 0, l = I) {
  return yt(it(lr(Bt(X, Be(Cr, [e, n, r, o, i, s, a, c, u])))), t(l));
}
function Xu(t, e, n, r, o = I) {
  return Ut(pt(Se(Bt(X, {
    isoYear: e,
    isoMonth: n,
    isoDay: r
  }))), t(o));
}
function Ju(t, e, n, r = I, o = 1) {
  const i = X(e), s = X(n), a = t(r);
  return mn(ho(Se({
    isoYear: i,
    isoMonth: s,
    isoDay: X(o)
  })), a);
}
function Ku(t, e, n, r = I, o = Zt) {
  const i = X(e), s = X(n), a = t(r);
  return Xn(pt(Se({
    isoYear: X(o),
    isoMonth: i,
    isoDay: s
  })), a);
}
function Qu(t = 0, e = 0, n = 0, r = 0, o = 0, i = 0) {
  return zt(Ue(Bt(X, Be(Et, [t, e, n, r, o, i])), 1));
}
function tl(t = 0, e = 0, n = 0, r = 0, o = 0, i = 0, s = 0, a = 0, c = 0, u = 0) {
  return L(be(Bt(co, Be(R, [t, e, n, r, o, i, s, a, c, u]))));
}
function el(t, e, n = I) {
  return wt(t.epochNanoseconds, e, n);
}
function nl(t) {
  return $t(t.epochNanoseconds);
}
function ka(t, e) {
  return yt(ht(e, t));
}
function Fa(t, e) {
  return Ut(ht(e, t));
}
function xa(t, e) {
  return zt(ht(e, t));
}
function rl(t, e, n, r) {
  const o = ((i, s, a, c) => {
    const u = ((l) => lc(Ct(l)))(c);
    return Dn(i(s), a, u);
  })(t, n, e, r);
  return wt(Nt(o), n, e.calendar);
}
function ol(t, e, n, r, o) {
  const i = t(o.timeZone), s = o.plainTime, a = s !== void 0 ? e(s) : void 0, c = n(i);
  let u;
  return u = a ? Dn(c, {
    ...r,
    ...a
  }) : oe(c, {
    ...r,
    ...st
  }), wt(u, i, r.calendar);
}
function il(t, e = st) {
  return yt(it({
    ...t,
    ...e
  }));
}
function sl(t, e, n) {
  return ((r, o) => {
    const i = ue(r, o, Ja);
    return r.K(i, void 0);
  })(t(e.calendar), n);
}
function al(t, e, n) {
  return ((r, o) => {
    const i = ue(r, o, Ka);
    return r._(i);
  })(t(e.calendar), n);
}
function cl(t, e, n, r) {
  return ((o, i, s) => Pa(o, i, Ja, Sn(s), Nn))(t(e.calendar), n, r);
}
function ul(t, e, n, r) {
  return ((o, i, s) => Pa(o, i, Ka, Sn(s), Ko))(t(e.calendar), n, r);
}
function ll(t) {
  return $t(Nt(qn(co(t), Wt)));
}
function dl(t) {
  return $t(Nt(lo(ao(t))));
}
function Te(t, e, n) {
  const r = new Set(n);
  return (o, i) => {
    const s = n && ki(o, n);
    if (!ki(o = ((a, c) => {
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
    return n && (o.timeZone = Ie, ["full", "long"].includes(o.J) && (o.J = "medium")), o;
  };
}
function le(t, e = Ya, n = 0) {
  const [r, , , o] = t;
  return (i, s = mf, ...a) => {
    const c = e(o && o(...a), i, s, r, n), u = c.resolvedOptions();
    return [c, ...fl(t, u, a)];
  };
}
function Ya(t, e, n, r, o) {
  if (n = r(n, o), t) {
    if (n.timeZone !== void 0)
      throw new TypeError(Wl);
    n.timeZone = t;
  }
  return new Qt(e, n);
}
function fl(t, e, n) {
  const [, r, o] = t;
  return n.map((i) => (i.calendar && ((s, a, c) => {
    if ((c || s !== I) && s !== a)
      throw new RangeError($a);
  })(i.calendar, e.calendar, o), r(i, e)));
}
function hl(t, e, n) {
  const r = e.timeZone, o = t(r), i = {
    ...ht(e, o),
    ...n || st
  };
  let s;
  return s = n ? Ve(o, i, i.offsetNanoseconds, 2) : oe(o, i), wt(s, r, e.calendar);
}
function ml(t, e = st) {
  return yt(it({
    ...t,
    ...e
  }));
}
function Ho(t, e) {
  return {
    ...t,
    calendar: e
  };
}
function pl(t, e) {
  return {
    ...t,
    timeZone: e
  };
}
function Ar(t) {
  const e = Vr();
  return $e(e, t.R(e));
}
function Vr() {
  return qn(Date.now(), Wt);
}
function nn() {
  return fs || (fs = new Qt().resolvedOptions().timeZone);
}
const gl = (t, e) => `Non-integer ${t}: ${e}`, vl = (t, e) => `Non-positive ${t}: ${e}`, wl = (t, e) => `Non-finite ${t}: ${e}`, yl = (t) => `Cannot convert bigint to ${t}`, El = (t) => `Invalid bigint: ${t}`, Sl = "Cannot convert Symbol to string", Ml = "Invalid object", Aa = (t, e, n, r, o) => o ? Aa(t, o[e], o[n], o[r]) : de(t, e) + `; must be between ${n}-${r}`, de = (t, e) => `Invalid ${t}: ${e}`, Xo = (t) => `Missing ${t}`, bl = (t) => `Invalid field ${t}`, Dl = (t) => `Duplicate field ${t}`, Za = (t) => "No valid fields: " + t.join(), Tl = "Invalid bag", ja = (t, e, n) => de(t, e) + "; must be " + Object.keys(n).join(), Il = "Cannot use valueOf", Gr = "Invalid calling context", Ol = "Forbidden era/eraYear", Rl = "Mismatching era/eraYear", Nl = "Mismatching year/eraYear", Cl = (t) => `Invalid era: ${t}`, zl = (t) => "Missing year" + (t ? "/era/eraYear" : ""), Pl = (t) => `Invalid monthCode: ${t}`, _l = "Mismatching month/monthCode", Ba = "Missing month/monthCode", rn = "Invalid leap month", Xe = "Invalid protocol results", La = (t) => de("Calendar", t), $a = "Mismatching Calendars", Ua = (t) => de("TimeZone", t), Wa = "Mismatching TimeZones", kl = "Forbidden ICU TimeZone", Fl = "Out-of-bounds offset", xl = "Out-of-bounds TimeZone gap", Yl = "Invalid TimeZone offset", Al = "Ambiguous offset", fe = "Out-of-bounds date", Zl = "Out-of-bounds duration", jl = "Cannot mix duration signs", Or = "Missing relativeTo", Bl = "Cannot use large units", Ll = "Required smallestUnit or largestUnit", $l = "smallestUnit > largestUnit", rt = (t) => `Cannot parse: ${t}`, At = (t) => `Invalid substring: ${t}`, Ul = (t) => `Cannot format ${t}`, Zr = "Mismatching types for formatting", Wl = "Cannot specify TimeZone", Va = /* @__PURE__ */ D(ir, (t, e) => e), Ae = /* @__PURE__ */ D(ir, (t, e, n) => n), gt = /* @__PURE__ */ D(Gn, 2), qr = {
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
}, Jo = /* @__PURE__ */ Object.keys(qr), ot = 864e5, Ga = 1e3, Rn = 1e3, Wt = 1e6, Tt = 1e9, Rr = 6e10, Nr = 36e11, F = 864e11, Rt = [1, Rn, Wt, Tt, Rr, Nr, F], Vt = /* @__PURE__ */ Jo.slice(0, 6), Hr = /* @__PURE__ */ En(Vt), Vl = ["offset"], qa = ["timeZone"], Ha = /* @__PURE__ */ Vt.concat(Vl), Xa = /* @__PURE__ */ Ha.concat(qa), Xr = ["era", "eraYear"], Gl = /* @__PURE__ */ Xr.concat(["year"]), Ko = ["year"], Qo = ["monthCode"], ti = /* @__PURE__ */ ["month"].concat(Qo), Nn = ["day"], ei = /* @__PURE__ */ ti.concat(Ko), Ja = /* @__PURE__ */ Qo.concat(Ko), Gt = /* @__PURE__ */ Nn.concat(ei), ql = /* @__PURE__ */ Nn.concat(ti), Ka = /* @__PURE__ */ Nn.concat(Qo), Qa = /* @__PURE__ */ Ae(Vt, 0), I = "iso8601", Je = "gregory", ie = "japanese", tc = {
  [Je]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [ie]: {
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
}, ec = {
  [Je]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [ie]: {
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
}, Hl = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, G = /* @__PURE__ */ D(io, "string"), Xl = /* @__PURE__ */ D(io, "boolean"), Jl = /* @__PURE__ */ D(io, "number"), R = /* @__PURE__ */ Jo.map((t) => t + "s"), ni = /* @__PURE__ */ En(R), Kl = /* @__PURE__ */ R.slice(0, 6), nc = /* @__PURE__ */ R.slice(6), Ql = /* @__PURE__ */ nc.slice(1), td = /* @__PURE__ */ Va(R), V = /* @__PURE__ */ Ae(R, 0), ri = /* @__PURE__ */ Ae(Kl, 0), oi = /* @__PURE__ */ D(Os, R), Et = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], ii = ["isoDay", "isoMonth", "isoYear"], Cr = /* @__PURE__ */ Et.concat(ii), si = /* @__PURE__ */ En(ii), rc = /* @__PURE__ */ En(Et), ed = /* @__PURE__ */ En(Cr), st = /* @__PURE__ */ Ae(rc, 0), nd = /* @__PURE__ */ D(Os, Cr), oc = 1e8, rd = oc * ot, od = [oc, 0], id = [-1e8, 0], wn = 275760, yn = -271821, Qt = Intl.DateTimeFormat, ic = "en-GB", sd = 1970, Zt = 1972, qt = 12, ad = /* @__PURE__ */ Le(1868, 9, 8), cd = /* @__PURE__ */ lt(Lc, WeakMap), er = "smallestUnit", Jr = "unit", cn = "roundingIncrement", jr = "fractionalSecondDigits", sc = "relativeTo", Br = "direction", ac = {
  constrain: 0,
  reject: 1
}, ud = /* @__PURE__ */ Object.keys(ac), ld = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, dd = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, fd = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, hd = {
  auto: 0,
  never: 1,
  critical: 2
}, md = {
  auto: 0,
  never: 1
}, pd = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, gd = {
  previous: -1,
  next: 1
}, Cn = /* @__PURE__ */ D(Mo, er), cc = /* @__PURE__ */ D(Mo, "largestUnit"), vd = /* @__PURE__ */ D(Mo, Jr), uc = /* @__PURE__ */ D(se, "overflow", ac), lc = /* @__PURE__ */ D(se, "disambiguation", ld), wd = /* @__PURE__ */ D(se, "offset", dd), ai = /* @__PURE__ */ D(se, "calendarName", fd), yd = /* @__PURE__ */ D(se, "timeZoneName", hd), Ed = /* @__PURE__ */ D(se, "offset", md), zn = /* @__PURE__ */ D(se, "roundingMode", pd), ci = "PlainYearMonth", ui = "PlainMonthDay", Pn = "PlainDate", Ke = "PlainDateTime", li = "PlainTime", he = "ZonedDateTime", di = "Instant", fi = "Duration", Sd = [Math.floor, (t) => Yn(t) ? Math.floor(t) : Math.round(t), Math.ceil, (t) => Yn(t) ? Math.ceil(t) : Math.round(t), Math.trunc, (t) => Yn(t) ? Math.trunc(t) || 0 : Math.round(t), (t) => t < 0 ? Math.floor(t) : Math.ceil(t), (t) => Math.sign(t) * Math.round(Math.abs(t)) || 0, (t) => Yn(t) ? (t = Math.trunc(t) || 0) + t % 2 : Math.round(t)], Ie = "UTC", $n = 5184e3, Md = /* @__PURE__ */ Hn(1847), bd = /* @__PURE__ */ Hn(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), Dd = /0+$/, ht = /* @__PURE__ */ lt(ru, WeakMap), Td = 2 ** 32 - 1, b = /* @__PURE__ */ lt((t) => {
  const e = $o(t);
  return typeof e == "object" ? new Od(e) : new Id(e || 0);
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
      const r = U({
        ...n,
        ...st
      });
      if (!r || Math.abs(r[0]) > 1e8)
        throw new RangeError(fe);
    })(e), [mo(e, this.$)];
  }
  O() {
  }
}
class Od {
  constructor(e) {
    this.nn = ((n) => {
      function r(u) {
        const l = hn(u, a, c), [d, f] = es(l), h = i(d), m = i(f);
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
      const i = lt(n), s = lt(au);
      let a = Md, c = bd;
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
          const d = hn(u, a, c);
          let [f, h] = es(d);
          const m = $n * l, p = l < 0 ? () => h > a || (a = d, 0) : () => f < c || (c = d, 0);
          for (; p(); ) {
            const g = i(f), w = i(h);
            if (g !== w) {
              const v = s(f, h);
              o(v, g, w);
              const y = v[0];
              if ((Kt(y, u) || 1) === l)
                return y;
            }
            f += m, h += m;
          }
        }
      };
    })(/* @__PURE__ */ ((n) => (r) => {
      const o = po(n, r * Ga);
      return Hn(Ra(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - r;
    })(e));
  }
  R(e) {
    return this.nn.rn(((n) => Yi(n)[0])(e)) * Tt;
  }
  I(e) {
    const [n, r] = [Hn((o = e).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * Wt + o.isoMicrosecond * Rn + o.isoNanosecond];
    var o;
    return this.nn.tn(n).map((i) => Nt(we(qn(i, Tt), r)));
  }
  O(e, n) {
    const [r, o] = Yi(e), i = this.nn.O(r + (n > 0 || o ? 1 : 0), n);
    if (i !== void 0)
      return qn(i, Tt);
  }
}
const hi = "([+-])", Un = "(?:[.,](\\d{1,9}))?", dc = `(?:(?:${hi}(\\d{6}))|(\\d{4}))-?(\\d{2})`, mi = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Un + ")?)?", pi = hi + mi, Rd = dc + "-?(\\d{2})(?:[T ]" + mi + "(Z|" + pi + ")?)?", fc = "\\[(!?)([^\\]]*)\\]", zr = `((?:${fc}){0,9})`, Nd = /* @__PURE__ */ qe(dc + zr), Cd = /* @__PURE__ */ qe("(?:--)?(\\d{2})-?(\\d{2})" + zr), zd = /* @__PURE__ */ qe(Rd + zr), Pd = /* @__PURE__ */ qe("T?" + mi + "(?:" + pi + ")?" + zr), _d = /* @__PURE__ */ qe(pi), kd = /* @__PURE__ */ new RegExp(fc, "g"), Fd = /* @__PURE__ */ qe(`${hi}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Un}H)?(?:(\\d+)${Un}M)?(?:(\\d+)${Un}S)?)?`), xd = /* @__PURE__ */ lt((t) => new Qt(ic, {
  timeZone: t,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
})), Yd = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Ad = /[^\w\/:+-]+/, Zd = /^M(\d{2})(L?)$/, jd = /* @__PURE__ */ lt(Nu), gi = /* @__PURE__ */ lt((t) => new Qt(ic, {
  calendar: t,
  timeZone: Ie,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
})), hc = {
  P(t, e, n) {
    const r = O(n);
    let o, { years: i, months: s, weeks: a, days: c } = e;
    if (c += W(e, 5)[0], i || s)
      o = ((u, l, d, f, h) => {
        let [m, p, g] = u.v(l);
        if (d) {
          const [w, v] = u.q(m, p);
          m += d, p = Qn(w, v, u.L(m)), p = jt("month", p, 1, u.B(m), h);
        }
        return f && ([m, p] = u.un(m, p, f)), g = jt("day", g, 1, u.U(m, p), h), u.p(m, p, g);
      })(this, t, i, s, r);
    else {
      if (!a && !c)
        return t;
      o = J(t);
    }
    if (o === void 0)
      throw new RangeError(fe);
    return o += (7 * a + c) * ot, pt(ur(o));
  },
  N(t, e, n) {
    if (n <= 7) {
      let c = 0, u = Sa({
        ...t,
        ...st
      }, {
        ...e,
        ...st
      });
      return n === 7 && ([c, u] = ee(u, 7)), {
        ...V,
        weeks: c,
        days: u
      };
    }
    const r = this.v(t), o = this.v(e);
    let [i, s, a] = ((c, u, l, d, f, h, m) => {
      let p = f - u, g = h - l, w = m - d;
      if (p || g) {
        const v = Math.sign(p || g);
        let y = c.U(f, h), E = 0;
        if (Math.sign(w) === -v) {
          const M = y;
          [f, h] = c.un(f, h, -v), p = f - u, g = h - l, y = c.U(f, h), E = v < 0 ? -M : y;
        }
        if (w = m - Math.min(d, y) + E, p) {
          const [M, T] = c.q(u, l), [C, P] = c.q(f, h);
          if (g = C - M || Number(P) - Number(T), Math.sign(g) === -v) {
            const _ = v < 0 && -c.B(f);
            p = (f -= v) - u, g = h - Qn(M, T, c.L(f)) + (_ || c.B(f));
          }
        }
      }
      return [p, g, w];
    })(this, ...r, ...o);
    return n === 8 && (s += this.cn(i, r[0]), i = 0), {
      ...V,
      years: i,
      months: s,
      days: a
    };
  },
  F(t, e) {
    const n = O(e), r = Fr(this, t), o = jn(this, t, r, n), i = xr(this, t, o, r, n);
    return Ut(pt(this.V(r, o, i)), this.id || I);
  },
  K(t, e) {
    const n = O(e), r = Fr(this, t), o = jn(this, t, r, n);
    return mn(ho(this.V(r, o, 1)), this.id || I);
  },
  _(t, e) {
    const n = O(e);
    let r, o, i, s = t.eraYear !== void 0 || t.year !== void 0 ? Fr(this, t) : void 0;
    const a = !this.id;
    if (s === void 0 && a && (s = Zt), s !== void 0) {
      const d = jn(this, t, s, n);
      r = xr(this, t, d, s, n);
      const f = this.L(s);
      o = qo(d, f), i = d === f;
    } else {
      if (t.monthCode === void 0)
        throw new TypeError(Ba);
      if ([o, i] = Go(t.monthCode), this.id && this.id !== Je && this.id !== ie)
        if (this.id && Ee(this.id) === "coptic" && n === 0) {
          const d = i || o !== 13 ? 30 : 6;
          r = t.day, r = hn(r, 1, d);
        } else if (this.id && Ee(this.id) === "chinese" && n === 0) {
          const d = !i || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
          r = t.day, r = hn(r, 1, d);
        } else
          r = t.day;
      else
        r = xr(this, t, jn(this, t, Zt, n), Zt, n);
    }
    const c = this.G(o, i, r);
    if (!c)
      throw new RangeError("Cannot guess year");
    const [u, l] = c;
    return Xn(pt(this.V(u, l, r)), this.id || I);
  },
  fields(t) {
    return Wr(this) && t.includes("year") ? [...t, ...Xr] : t;
  },
  k(t, e) {
    const n = Object.assign(/* @__PURE__ */ Object.create(null), t);
    return Yr(n, e, ti), Wr(this) && (Yr(n, e, Gl), this.id === ie && Yr(n, e, ql, Xr)), n;
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
  dayOfYear: Vo,
  era(t) {
    return this.hn(t)[0];
  },
  eraYear(t) {
    return this.hn(t)[1];
  },
  monthCode(t) {
    const [e, n] = this.v(t), [r, o] = this.q(e, n);
    return Tn(r, o);
  },
  dayOfWeek: js,
  daysInWeek() {
    return 7;
  }
}, Bd = {
  v: go,
  hn: Bs,
  q: xs
}, Ld = {
  dayOfYear: Vo,
  v: go,
  p: Le
}, $d = /* @__PURE__ */ Object.assign({}, Ld, {
  weekOfYear: Ma,
  yearOfWeek: ba,
  m(t) {
    function e(h) {
      return (7 - h < r ? 7 : 0) - h;
    }
    function n(h) {
      const m = Zs(f + h), p = h || 1, g = e(an(c + m * p, 7));
      return l = (m + (g - u) * p) / 7;
    }
    const r = this.id ? 1 : 4, o = js(t), i = this.dayOfYear(t), s = an(o - 1, 7), a = i - 1, c = an(s - a, 7), u = e(c);
    let l, d = Math.floor((a - u) / 7) + 1, f = t.isoYear;
    return d ? d > n(0) && (d = 1, f++) : (d = n(-1), f--), [d, f, l];
  }
}), Ud = /* @__PURE__ */ Object.assign({}, hc, $d, {
  v: go,
  hn: Bs,
  q: xs,
  G(t, e) {
    if (!e)
      return [Zt, t];
  },
  sn: vo,
  L() {
  },
  B: Ys,
  cn: (t) => t * qt,
  U: As,
  fn: Zs,
  V: (t, e, n) => ({
    isoYear: t,
    isoMonth: e,
    isoDay: n
  }),
  p: Le,
  un: (t, e, n) => (t += sr(n, qt), (e += ro(n, qt)) < 1 ? (t--, e += qt) : e > qt && (t++, e -= qt), [t, e]),
  year(t) {
    return t.isoYear;
  },
  month(t) {
    return t.isoMonth;
  },
  day: (t) => t.isoDay
}), Wd = {
  v: tr,
  hn: Ca,
  q: Na
}, Vd = {
  dayOfYear: Vo,
  v: tr,
  p: vn,
  weekOfYear: Ma,
  yearOfWeek: ba,
  m() {
    return [];
  }
}, Gd = /* @__PURE__ */ Object.assign({}, hc, Vd, {
  v: tr,
  hn: Ca,
  q: Na,
  G(t, e, n) {
    const r = this.id && Ee(this.id) === "chinese" ? ((u, l, d) => {
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
    })(t, e, n) : Zt;
    let [o, i, s] = tr.call(this, {
      isoYear: r,
      isoMonth: qt,
      isoDay: 31
    });
    const a = Ln.call(this, o), c = i === a;
    (Kt(t, qo(i, a)) || Kt(Number(e), Number(c)) || Kt(n, s)) === 1 && o--;
    for (let u = 0; u < 100; u++) {
      const l = o - u, d = Ln.call(this, l), f = Qn(t, e, d);
      if (e === (f === d) && n <= us.call(this, l, f))
        return [l, f];
    }
  },
  sn(t) {
    const e = An.call(this, t);
    return e > An.call(this, t - 1) && e > An.call(this, t + 1);
  },
  L: Ln,
  B: Zn,
  cn(t, e) {
    const n = e + t, r = Math.sign(t), o = r < 0 ? -1 : 0;
    let i = 0;
    for (let s = e; s !== n; s += r)
      i += Zn.call(this, s + o);
    return i;
  },
  U: us,
  fn: An,
  V(t, e, n) {
    return ur(vn.call(this, t, e, n));
  },
  p: vn,
  un(t, e, n) {
    if (n) {
      if (e += n, !Number.isSafeInteger(e))
        throw new RangeError(fe);
      if (n < 0)
        for (; e < 1; )
          e += Zn.call(this, --t);
      else {
        let r;
        for (; e > (r = Zn.call(this, t)); )
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
}), Pr = /* @__PURE__ */ za(Bd, Wd), S = /* @__PURE__ */ za(Ud, Gd), ds = {
  era: Bn,
  eraYear: X,
  year: X,
  month: xi,
  monthCode(t) {
    const e = Bn(t);
    return Go(e), e;
  },
  day: xi,
  .../* @__PURE__ */ Ae(Vt, X),
  .../* @__PURE__ */ Ae(R, co),
  offset(t) {
    const e = Bn(t);
    return De(e), e;
  }
}, vi = /* @__PURE__ */ D(Ts, Vt, Et), qd = /* @__PURE__ */ D(Ts, Et, Vt), te = "numeric", _n = ["timeZoneName"], mc = {
  month: te,
  day: te
}, wi = {
  year: te,
  month: te
}, yi = /* @__PURE__ */ Object.assign({}, wi, {
  day: te
}), Ei = {
  hour: te,
  minute: te,
  second: te
}, Si = /* @__PURE__ */ Object.assign({}, yi, Ei), Hd = /* @__PURE__ */ Object.assign({}, Si, {
  timeZoneName: "short"
}), Xd = /* @__PURE__ */ Object.keys(wi), Jd = /* @__PURE__ */ Object.keys(mc), Kd = /* @__PURE__ */ Object.keys(yi), Qd = /* @__PURE__ */ Object.keys(Ei), Mi = ["dateStyle"], tf = /* @__PURE__ */ Xd.concat(Mi), ef = /* @__PURE__ */ Jd.concat(Mi), bi = /* @__PURE__ */ Kd.concat(Mi, ["weekday"]), kn = /* @__PURE__ */ Qd.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), Di = /* @__PURE__ */ bi.concat(kn), nf = /* @__PURE__ */ _n.concat(kn), rf = /* @__PURE__ */ _n.concat(bi), of = /* @__PURE__ */ _n.concat(["day", "weekday"], kn), sf = /* @__PURE__ */ _n.concat(["year", "weekday"], kn), af = /* @__PURE__ */ Te(Di, Si), cf = /* @__PURE__ */ Te(Di, Hd), uf = /* @__PURE__ */ Te(Di, Si, _n), lf = /* @__PURE__ */ Te(bi, yi, nf), df = /* @__PURE__ */ Te(kn, Ei, rf), ff = /* @__PURE__ */ Te(tf, wi, of), hf = /* @__PURE__ */ Te(ef, mc, sf), mf = {}, pc = new Qt(void 0, {
  calendar: I
}).resolvedOptions().calendar === I, gc = [af, bo], pf = [cf, bo, 0, (t, e) => {
  const n = t.timeZone;
  if (e && e.timeZone !== n)
    throw new RangeError(Wa);
  return n;
}], vc = [uf, J], wc = [lf, J], yc = [df, (t) => ne(t) / Wt], Ec = [ff, J, pc], Sc = [hf, J, pc];
let fs;
function me(t, e, n, r, o) {
  function i(...c) {
    if (!(this instanceof i))
      throw new TypeError(Gr);
    ps(this, e(...c));
  }
  function s(c, u) {
    return Object.defineProperties(function(...l) {
      return c.call(this, a(this), ...l);
    }, fn(u));
  }
  function a(c) {
    const u = tt(c);
    if (!u || u.branding !== t)
      throw new TypeError(Gr);
    return u;
  }
  return Object.defineProperties(i.prototype, {
    ...Zc(Bt(s, n)),
    ...Fe(Bt(s, r)),
    ...no("Temporal." + t)
  }), Object.defineProperties(i, {
    ...Fe(o),
    ...fn(t)
  }), [i, (c) => {
    const u = Object.create(i.prototype);
    return ps(u, c), u;
  }, a];
}
function Qe(t) {
  if (tt(t) || t.calendar !== void 0 || t.timeZone !== void 0)
    throw new TypeError(Tl);
  return t;
}
function Fn(t) {
  return Mc(t) || I;
}
function Mc(t) {
  const { calendar: e } = t;
  if (e !== void 0)
    return _r(e);
}
function _r(t) {
  if (K(t)) {
    const { calendar: e } = tt(t) || {};
    if (!e)
      throw new TypeError(La(t));
    return e;
  }
  return ((e) => Ir(gu(G(e))))(t);
}
function Ti(t) {
  const e = {};
  for (const n in t)
    e[n] = (r) => {
      const { calendar: o } = r;
      return S(o)[n](r);
    };
  return e;
}
function pe() {
  throw new TypeError(Il);
}
function ct(t) {
  if (K(t)) {
    const { timeZone: e } = tt(t) || {};
    if (!e)
      throw new TypeError(Ua(t));
    return e;
  }
  return ((e) => Lo(vu(G(e))))(t);
}
function B(t) {
  if (K(t)) {
    const e = tt(t);
    return e && e.branding === fi ? e : Zu(t);
  }
  return pu(t);
}
function on(t) {
  if (t !== void 0) {
    if (K(t)) {
      const e = tt(t) || {};
      switch (e.branding) {
        case he:
        case Pn:
          return e;
        case Ke:
          return Ut(e);
      }
      const n = Fn(t);
      return {
        ...Pu(ct, b, S(n), t),
        calendar: n
      };
    }
    return uu(t);
  }
}
function Ht(t, e) {
  if (K(t)) {
    const r = tt(t) || {};
    switch (r.branding) {
      case li:
        return O(e), r;
      case Ke:
        return O(e), zt(r);
      case he:
        return O(e), xa(b, r);
    }
    return Au(t, e);
  }
  const n = mu(t);
  return O(e), n;
}
function Ii(t) {
  return t === void 0 ? void 0 : Ht(t);
}
function Oe(t, e) {
  if (K(t)) {
    const r = tt(t) || {};
    switch (r.branding) {
      case Ke:
        return O(e), r;
      case Pn:
        return O(e), yt({
          ...r,
          ...st
        });
      case he:
        return O(e), ka(b, r);
    }
    return ku(S(Fn(t)), t, e);
  }
  const n = du(t);
  return O(e), n;
}
function hs(t, e) {
  if (K(t)) {
    const r = tt(t);
    if (r && r.branding === ui)
      return O(e), r;
    const o = Mc(t);
    return Yu(S(o || I), !o, t, e);
  }
  const n = hu(S, t);
  return O(e), n;
}
function Re(t, e) {
  if (K(t)) {
    const r = tt(t);
    return r && r.branding === ci ? (O(e), r) : xu(S(Fn(t)), t, e);
  }
  const n = fu(S, t);
  return O(e), n;
}
function Ne(t, e) {
  if (K(t)) {
    const r = tt(t) || {};
    switch (r.branding) {
      case Pn:
        return O(e), r;
      case Ke:
        return O(e), Ut(r);
      case he:
        return O(e), Fa(b, r);
    }
    return Fu(S(Fn(t)), t, e);
  }
  const n = Fo(t);
  return O(e), n;
}
function Ce(t, e) {
  if (K(t)) {
    const n = tt(t);
    if (n && n.branding === he)
      return dr(e), n;
    const r = Fn(t);
    return _u(ct, b, S(r), r, t, e);
  }
  return lu(t, e);
}
function ms(t) {
  return Bt((e) => (n) => e(Kr(n)), t);
}
function Kr(t) {
  return ht(t, b);
}
function ze(t) {
  if (K(t)) {
    const e = tt(t);
    if (e)
      switch (e.branding) {
        case di:
          return e;
        case he:
          return $t(e.epochNanoseconds);
      }
  }
  return cu(t);
}
function gf() {
  function t(i, s) {
    return new e(i, s);
  }
  function e(i, s = /* @__PURE__ */ Object.create(null)) {
    rr.set(this, ((a, c) => {
      const u = new Qt(a, c), l = u.resolvedOptions(), d = l.locale, f = vt(Object.keys(c), l), h = lt(yf), m = (p, ...g) => {
        if (p) {
          if (g.length !== 2)
            throw new TypeError(Zr);
          for (const E of g)
            if (E === void 0)
              throw new TypeError(Zr);
        }
        p || g[0] !== void 0 || (g = []);
        const w = g.map((E) => tt(E) || Number(E));
        let v, y = 0;
        for (const E of w) {
          const M = typeof E == "object" ? E.branding : void 0;
          if (y++ && M !== v)
            throw new TypeError(Zr);
          v = M;
        }
        return v ? h(v)(d, f, ...w) : [u, ...w];
      };
      return m.X = u, m;
    })(i, s));
  }
  const n = Qt.prototype, r = Object.getOwnPropertyDescriptors(n), o = Object.getOwnPropertyDescriptors(Qt);
  for (const i in r) {
    const s = r[i], a = i.startsWith("format") && vf(i);
    typeof s.value == "function" ? s.value = i === "constructor" ? t : a || wf(i) : a && (s.get = function() {
      if (!rr.has(this))
        throw new TypeError(Gr);
      return (...c) => a.apply(this, c);
    }, Object.defineProperties(s.get, fn(`get ${i}`)));
  }
  return o.prototype.value = e.prototype = Object.create({}, r), Object.defineProperties(t, o), t;
}
function vf(t) {
  return Object.defineProperties(function(...e) {
    const n = rr.get(this), [r, ...o] = n(t.includes("Range"), ...e);
    return r[t](...o);
  }, fn(t));
}
function wf(t) {
  return Object.defineProperties(function(...e) {
    return rr.get(this).X[t](...e);
  }, fn(t));
}
function yf(t) {
  const e = Tf[t];
  if (!e)
    throw new TypeError(Ul(t));
  return le(e, lt(Ya), 1);
}
const nr = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ nr.get.bind(nr), ps = /* @__PURE__ */ nr.set.bind(nr), bc = {
  era: jc,
  eraYear: Ns,
  year: oo,
  month: Ft,
  daysInMonth: Ft,
  daysInYear: Ft,
  inLeapYear: Xl,
  monthsInYear: Ft
}, Oi = {
  monthCode: G
}, Dc = {
  day: Ft
}, Ef = {
  dayOfWeek: Ft,
  dayOfYear: Ft,
  weekOfYear: Bc,
  yearOfWeek: Ns,
  daysInWeek: Ft
}, Ri = /* @__PURE__ */ Ti(/* @__PURE__ */ Object.assign({}, bc, Oi, Dc, Ef)), Sf = /* @__PURE__ */ Ti({
  ...bc,
  ...Oi
}), Mf = /* @__PURE__ */ Ti({
  ...Oi,
  ...Dc
}), xn = {
  calendarId: (t) => t.calendar
}, bf = /* @__PURE__ */ ir((t) => (e) => e[t], R.concat("sign")), Ni = /* @__PURE__ */ ir((t, e) => (n) => n[Et[e]], Vt), Tc = {
  epochMilliseconds: bo,
  epochNanoseconds: Uc
}, [Df, Z, zh] = me(fi, tl, {
  ...bf,
  blank: su
}, {
  with: (t, e) => Z(Vu(t, e)),
  negated: (t) => Z(ko(t)),
  abs: (t) => Z(iu(t)),
  add: (t, e, n) => Z(ts(on, S, b, 0, t, B(e), n)),
  subtract: (t, e, n) => Z(ts(on, S, b, 1, t, B(e), n)),
  round: (t, e) => Z(ou(on, S, b, t, e)),
  total: (t, e) => Wc(on, S, b, t, e),
  toLocaleString(t, e, n) {
    return Intl.DurationFormat ? new Intl.DurationFormat(e, n).format(this) : kr(t);
  },
  toString: kr,
  toJSON: (t) => kr(t),
  valueOf: pe
}, {
  from: (t) => Z(B(t)),
  compare: (t, e, n) => yu(on, S, b, B(t), B(e), n)
}), Tf = {
  Instant: gc,
  PlainDateTime: vc,
  PlainDate: wc,
  PlainTime: yc,
  PlainYearMonth: Ec,
  PlainMonthDay: Sc
}, If = /* @__PURE__ */ le(gc), Of = /* @__PURE__ */ le(pf), Rf = /* @__PURE__ */ le(vc), Nf = /* @__PURE__ */ le(wc), Cf = /* @__PURE__ */ le(yc), zf = /* @__PURE__ */ le(Ec), Pf = /* @__PURE__ */ le(Sc), [_f, Jt] = me(li, Qu, Ni, {
  with(t, e, n) {
    return Jt(Wu(this, Qe(e), n));
  },
  add: (t, e) => Jt(Qi(0, t, B(e))),
  subtract: (t, e) => Jt(Qi(1, t, B(e))),
  until: (t, e, n) => Z(cs(0, t, Ht(e), n)),
  since: (t, e, n) => Z(cs(1, t, Ht(e), n)),
  round: (t, e) => Jt(Hc(t, e)),
  equals: (t, e) => Iu(t, Ht(e)),
  toLocaleString(t, e, n) {
    const [r, o] = Cf(e, n, t);
    return r.format(o);
  },
  toString: Vi,
  toJSON: (t) => Vi(t),
  valueOf: pe
}, {
  from: (t, e) => Jt(Ht(t, e)),
  compare: (t, e) => Uo(Ht(t), Ht(e))
}), [kf, Mt] = me(Ke, D(Hu, In), {
  ...xn,
  ...Ri,
  ...Ni
}, {
  with: (t, e, n) => Mt(Bu(S, t, Qe(e), n)),
  withCalendar: (t, e) => Mt(Ho(t, _r(e))),
  withPlainTime: (t, e) => Mt(ml(t, Ii(e))),
  add: (t, e, n) => Mt(Xi(S, 0, t, B(e), n)),
  subtract: (t, e, n) => Mt(Xi(S, 1, t, B(e), n)),
  until: (t, e, n) => Z(is(S, 0, t, Oe(e), n)),
  since: (t, e, n) => Z(is(S, 1, t, Oe(e), n)),
  round: (t, e) => Mt(qc(t, e)),
  equals: (t, e) => Mu(t, Oe(e)),
  toZonedDateTime: (t, e, n) => q(rl(b, t, ct(e), n)),
  toPlainDate: (t) => Dt(Ut(t)),
  toPlainTime: (t) => Jt(zt(t)),
  toLocaleString(t, e, n) {
    const [r, o] = Rf(e, n, t);
    return r.format(o);
  },
  toString: Li,
  toJSON: (t) => Li(t),
  valueOf: pe
}, {
  from: (t, e) => Mt(Oe(t, e)),
  compare: (t, e) => pa(Oe(t), Oe(e))
}), [Ff, Qr, Ph] = me(ui, D(Ku, In), {
  ...xn,
  ...Mf
}, {
  with: (t, e, n) => Qr(Uu(S, t, Qe(e), n)),
  equals: (t, e) => Tu(t, hs(e)),
  toPlainDate(t, e) {
    return Dt(ul(S, t, this, e));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Pf(e, n, t);
    return r.format(o);
  },
  toString: Wi,
  toJSON: (t) => Wi(t),
  valueOf: pe
}, {
  from: (t, e) => Qr(hs(t, e))
}), [xf, sn, _h] = me(ci, D(Ju, In), {
  ...xn,
  ...Sf
}, {
  with: (t, e, n) => sn($u(S, t, Qe(e), n)),
  add: (t, e, n) => sn(Ki(S, 0, t, B(e), n)),
  subtract: (t, e, n) => sn(Ki(S, 1, t, B(e), n)),
  until: (t, e, n) => Z(as(S, 0, t, Re(e), n)),
  since: (t, e, n) => Z(as(S, 1, t, Re(e), n)),
  equals: (t, e) => Du(t, Re(e)),
  toPlainDate(t, e) {
    return Dt(cl(S, t, this, e));
  },
  toLocaleString(t, e, n) {
    const [r, o] = zf(e, n, t);
    return r.format(o);
  },
  toString: Ui,
  toJSON: (t) => Ui(t),
  valueOf: pe
}, {
  from: (t, e) => sn(Re(t, e)),
  compare: (t, e) => He(Re(t), Re(e))
}), [Yf, Dt, kh] = me(Pn, D(Xu, In), {
  ...xn,
  ...Ri
}, {
  with: (t, e, n) => Dt(Lu(S, t, Qe(e), n)),
  withCalendar: (t, e) => Dt(Ho(t, _r(e))),
  add: (t, e, n) => Dt(Ji(S, 0, t, B(e), n)),
  subtract: (t, e, n) => Dt(Ji(S, 1, t, B(e), n)),
  until: (t, e, n) => Z(ss(S, 0, t, Ne(e), n)),
  since: (t, e, n) => Z(ss(S, 1, t, Ne(e), n)),
  equals: (t, e) => bu(t, Ne(e)),
  toZonedDateTime(t, e) {
    const n = K(e) ? e : {
      timeZone: e
    };
    return q(ol(ct, Ht, b, t, n));
  },
  toPlainDateTime: (t, e) => Mt(il(t, Ii(e))),
  toPlainYearMonth(t) {
    return sn(sl(S, t, this));
  },
  toPlainMonthDay(t) {
    return Qr(al(S, t, this));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Nf(e, n, t);
    return r.format(o);
  },
  toString: $i,
  toJSON: (t) => $i(t),
  valueOf: pe
}, {
  from: (t, e) => Dt(Ne(t, e)),
  compare: (t, e) => He(Ne(t), Ne(e))
}), [Af, q] = me(he, D(qu, In, wu), {
  ...Tc,
  ...xn,
  ...ms(Ri),
  ...ms(Ni),
  offset: (t) => bn(Kr(t).offsetNanoseconds),
  offsetNanoseconds: (t) => Kr(t).offsetNanoseconds,
  timeZoneId: (t) => t.timeZone,
  hoursInDay: (t) => Xc(b, t)
}, {
  with: (t, e, n) => q(ju(S, b, t, Qe(e), n)),
  withCalendar: (t, e) => q(Ho(t, _r(e))),
  withTimeZone: (t, e) => q(pl(t, ct(e))),
  withPlainTime: (t, e) => q(hl(b, t, Ii(e))),
  add: (t, e, n) => q(Hi(S, b, 0, t, B(e), n)),
  subtract: (t, e, n) => q(Hi(S, b, 1, t, B(e), n)),
  until: (t, e, n) => Z(L(os(S, b, 0, t, Ce(e), n))),
  since: (t, e, n) => Z(L(os(S, b, 1, t, Ce(e), n))),
  round: (t, e) => q(Gc(b, t, e)),
  startOfDay: (t) => q(Jc(b, t)),
  equals: (t, e) => Su(t, Ce(e)),
  toInstant: (t) => Xt(nl(t)),
  toPlainDateTime: (t) => Mt(ka(b, t)),
  toPlainDate: (t) => Dt(Fa(b, t)),
  toPlainTime: (t) => Jt(xa(b, t)),
  toLocaleString(t, e, n = {}) {
    const [r, o] = Of(e, n, t);
    return r.format(o);
  },
  toString: (t, e) => Bi(b, t, e),
  toJSON: (t) => Bi(b, t),
  valueOf: pe,
  getTimeZoneTransition(t, e) {
    const { timeZone: n, epochNanoseconds: r } = t, o = $c(e), i = b(n).O(r, o);
    return i ? q({
      ...t,
      epochNanoseconds: i
    }) : null;
  }
}, {
  from: (t, e) => q(Ce(t, e)),
  compare: (t, e) => ma(Ce(t), Ce(e))
}), [Zf, Xt, Fh] = me(di, Gu, Tc, {
  add: (t, e) => Xt(qi(0, t, B(e))),
  subtract: (t, e) => Xt(qi(1, t, B(e))),
  until: (t, e, n) => Z(rs(0, t, ze(e), n)),
  since: (t, e, n) => Z(rs(1, t, ze(e), n)),
  round: (t, e) => Xt(Vc(t, e)),
  equals: (t, e) => Eu(t, ze(e)),
  toZonedDateTimeISO: (t, e) => q(el(t, ct(e))),
  toLocaleString(t, e, n) {
    const [r, o] = If(e, n, t);
    return r.format(o);
  },
  toString: (t, e) => ji(ct, b, t, e),
  toJSON: (t) => ji(ct, b, t),
  valueOf: pe
}, {
  from: (t) => Xt(ze(t)),
  fromEpochMilliseconds: (t) => Xt(ll(t)),
  fromEpochNanoseconds: (t) => Xt(dl(t)),
  compare: (t, e) => ha(ze(t), ze(e))
}), jf = /* @__PURE__ */ Object.defineProperties({}, {
  ...no("Temporal.Now"),
  ...Fe({
    timeZoneId: () => nn(),
    instant: () => Xt($t(Vr())),
    zonedDateTimeISO: (t = nn()) => q(wt(Vr(), ct(t), I)),
    plainDateTimeISO: (t = nn()) => Mt(yt(Ar(b(ct(t))), I)),
    plainDateISO: (t = nn()) => Dt(Ut(Ar(b(ct(t))), I)),
    plainTimeISO: (t = nn()) => Jt(zt(Ar(b(ct(t)))))
  })
}), j = /* @__PURE__ */ Object.defineProperties({}, {
  ...no("Temporal"),
  ...Fe({
    PlainYearMonth: xf,
    PlainMonthDay: Ff,
    PlainDate: Yf,
    PlainTime: _f,
    PlainDateTime: kf,
    ZonedDateTime: Af,
    Instant: Zf,
    Duration: Df,
    Now: jf
  })
}), Bf = /* @__PURE__ */ gf(), rr = /* @__PURE__ */ new WeakMap();
Object.create(Intl), Fe({
  DateTimeFormat: Bf
});
const bt = {
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
function Lf(t = {}) {
  const e = x(t.period) || bt.period, n = Math.max(x(t.span) || bt.span, 1), r = x(t.unit) || bt.unit, o = x(t.firstDayOfWeek), i = x(t.timezone) || bt.timezone, s = j.PlainDate.from(x(t.date) || j.Now.plainDateISO()), a = Uf(s, e, e === "weeks" || r === "weeks" ? o : void 0), c = $f(a, e, n, r);
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
function $f(t, e, n, r) {
  const o = [], i = t.add({ [e]: n }), a = t.until(i).total({ unit: r, relativeTo: t });
  for (let c = 0; c < a; c++)
    o.push(t.add({ [r]: c }).toString());
  return o;
}
function Uf(t, e, n) {
  let r = t;
  return e === "years" && (r = t.with({ day: 1, month: 1 })), e === "months" && (r = t.with({ day: 1 })), n === void 0 ? r : r.subtract({ days: (r.dayOfWeek - n + 7) % 7 });
}
function Wf(t = {}) {
  return {
    daySize: x(t.daySize) ?? bt.daySize,
    dayHeadSize: x(t.dayHeadSize) ?? bt.dayHeadSize,
    eventSize: x(t.eventSize) ?? bt.eventSize,
    resourceGroupSize: x(t.resourceGroupSize) ?? bt.resourceGroupSize,
    resourcesClass: x(t.resourcesClass),
    timelineClass: x(t.timelineClass),
    gap: x(t.gap) ?? bt.gap,
    overscan: x(t.overscan) ?? bt.overscan
  };
}
function or(t) {
  try {
    return j.PlainDate.from(t).toString() === t;
  } catch {
    return !1;
  }
}
function Ic(t, e) {
  return or(t) ? t : j.Instant.from(t).toZonedDateTimeISO(e).toPlainDate().toString();
}
function Ci(t) {
  return t === void 0 ? [] : Array.isArray(t) ? t : [t];
}
function gs(t, e, n) {
  return t.has(e) || t.set(e, n), t.get(e);
}
function Vf(t = [], e) {
  const n = /* @__PURE__ */ new Map();
  for (var r = 0; r < t.length; r++) {
    const i = t[r], s = Ic(i.start, e), a = Ci(i.resourceId);
    for (var o = 0; o < a.length; o++) {
      const c = a[o], u = gs(n, c, /* @__PURE__ */ new Map());
      gs(u, s, /* @__PURE__ */ new Set()).add(i);
    }
  }
  return n;
}
const Gf = ["id", "nOrder", "isGroup", "isCollapsed", "resources", "maxEvents"], qf = "cullendar-drag-event", Hf = ".cullendar-timeline", Xf = ".cullendar-resources", Jf = "cullendar-is-dragging", Kf = "cullendar-is-resizing", ut = {
  EXCLUDED_RESOURCE_FIELDS: Gf,
  DATA_TRANSFER_TYPE: qf,
  TIMELINE_SELECTOR: Hf,
  RESOURCES_SELECTOR: Xf,
  DRAGGING_CLASS: Jf,
  RESIZING_CLASS: Kf
};
function Oc(t, e) {
  const n = Object.entries(t), r = Ci(e);
  return Object.fromEntries(n.filter(([o]) => !r.includes(o)));
}
const Lr = Ss(/* @__PURE__ */ new Set());
function Qf(t = [], e = /* @__PURE__ */ new Map()) {
  const n = Nc(t), r = /* @__PURE__ */ new Map();
  for (var o = 0; o < n.length; o++) {
    const s = n[o], a = s.resources ? th(s, e) : Rc(s, e.get(s.id));
    if (r.set(a.id, a), "isGroup" in a && !a.isCollapsed && a.resources.length)
      for (var i = 0; i < a.resources.length; i++) {
        const c = a.resources[i];
        r.set(c.id, c);
      }
  }
  return r;
}
function th(t, e) {
  const n = Lr.has(t.id);
  return {
    id: t.id,
    nOrder: t.nOrder,
    isGroup: !0,
    isCollapsed: n,
    resources: Nc(t.resources.map((r) => Rc(r, e.get(r.id)))),
    data: Oc(t, ut.EXCLUDED_RESOURCE_FIELDS),
    open: () => Lr.delete(t.id),
    close: () => Lr.add(t.id)
  };
}
function Rc(t, e = /* @__PURE__ */ new Map()) {
  return {
    id: t.id,
    nOrder: t.nOrder,
    isEventDroppable: t.isEventDroppable ?? !0,
    maxEvents: Math.max(...Array.from(e.values()).map((n) => n.size), 1),
    data: Oc(t, ut.EXCLUDED_RESOURCE_FIELDS)
  };
}
function Nc(t) {
  return t.slice().sort((e, n) => (e.nOrder ?? Number.MAX_SAFE_INTEGER) - (n.nOrder ?? Number.MAX_SAFE_INTEGER));
}
function eh(t = {}) {
  return {
    onReady: Y(t.onReady) ?? (() => {
    }),
    onView: Y(t.onView) ?? (() => {
    }),
    onAddEvent: Y(t.onAddEvent) ?? (() => {
    }),
    onMoveEvent: Y(t.onMoveEvent) ?? (() => {
    }),
    onResizeEvent: Y(t.onResizeEvent) ?? (() => {
    }),
    onBeforeDropEvent: Y(t.onBeforeDropEvent) ?? (() => !0),
    onDayEnter: Y(t.onDayEnter) ?? (() => {
    })
  };
}
function Cc(t, e) {
  const n = j.PlainDate.from(t.start), r = n.add({ [t.period]: t.span }), o = n.until(r);
  return e / o.total({ unit: "minutes", relativeTo: n });
}
function nh(t, e, n, r) {
  function o(a, c) {
    const u = e.value.get(a) || /* @__PURE__ */ new Map();
    return c ? u.get(c) || /* @__PURE__ */ new Set() : new Set(Array.from(u.values()).flatMap((l) => [...l]));
  }
  function i(a) {
    return n.value.get(a);
  }
  function s(a, c) {
    const u = j.PlainDate.from(t.value.start), l = j.PlainDate.from(a), d = r.value, f = Cc(t.value, d.getTotalSize()), h = u.until(l), m = Math.floor(f * h.total({ unit: "minutes", relativeTo: u }));
    d.scrollToOffset(m, c);
  }
  return {
    getResource: i,
    getEvents: o,
    scrollToDate: s
  };
}
function xh(t = {}) {
  const e = Ac(), n = at(), r = at(/* @__PURE__ */ new Set()), o = at(/* @__PURE__ */ new Set()), i = at(0), s = Ms(), a = z(() => Lf(x(t.view))), c = z(() => Wf(x(t.layout))), u = z(() => Vf(x(t.events), a.value.timezone)), l = z(() => Qf(x(t.resources), u.value)), d = z(() => eh(x(t.callbacks))), f = nh(a, u, l, s);
  return un(a, () => d.value.onView(a.value)), Ss({
    id: e,
    elements: n,
    view: a,
    layout: c,
    events: u,
    resources: l,
    callbacks: d,
    utils: f,
    resizeDatesSet: r,
    resizeResourcesSet: o,
    unitWidth: i,
    virtualizer: s
  });
}
function H(t) {
  return `${t}px`;
}
function rh() {
  const t = Object.assign(document.createElement("div"), { style: "overflow:scroll;visibility:hidden;" }), e = document.body.appendChild(t), n = e.offsetWidth - e.clientWidth;
  return e.remove(), H(n);
}
function Pe(t, e, n) {
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
      const m = Math.round((Date.now() - l) * 100) / 100, p = Math.round((Date.now() - h) * 100) / 100, g = p / 16, w = (v, y) => {
        for (v = String(v); v.length < y; )
          v = " " + v;
        return v;
      };
      console.info(
        `%c⏱ ${w(p, 5)} /${w(m, 5)} ms`,
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
function $r(t, e) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const oh = (t, e) => Math.abs(t - e) < 1, ih = (t, e, n) => {
  let r;
  return function(...o) {
    t.clearTimeout(r), r = t.setTimeout(() => e.apply(this, o), n);
  };
}, sh = (t) => t, ah = (t) => {
  const e = Math.max(t.startIndex - t.overscan, 0), n = Math.min(t.endIndex + t.overscan, t.count - 1), r = [];
  for (let o = e; o <= n; o++)
    r.push(o);
  return r;
}, ch = (t, e) => {
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
}, ws = typeof window > "u" ? !0 : "onscrollend" in window, uh = (t, e) => {
  const n = t.scrollElement;
  if (!n)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = t.options.useScrollendEvent && ws ? () => {
  } : ih(
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
}, lh = (t, e, n) => {
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
}, dh = (t, {
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
class fh {
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
        getItemKey: sh,
        rangeExtractor: ah,
        onChange: () => {
        },
        measureElement: lh,
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
    }, this.maybeNotify = Pe(
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
    }, this.getMeasurementOptions = Pe(
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
    ), this.getMeasurements = Pe(
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
          const d = i(l), f = this.options.lanes === 1 ? u[l - 1] : this.getFurthestMeasurement(u, l), h = f ? f.end + this.options.gap : r + o, m = a.get(d), p = typeof m == "number" ? m : this.options.estimateSize(l), g = h + p, w = f ? f.lane : l % this.options.lanes;
          u[l] = {
            index: l,
            start: h,
            size: p,
            end: g,
            key: d,
            lane: w
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Pe(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? hh({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Pe(
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
    }, this.getVirtualItems = Pe(
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
        return $r(
          r[zc(
            0,
            r.length - 1,
            (o) => $r(r[o]).start,
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
          const [u] = $r(
            this.getOffsetForIndex(n, a)
          );
          oh(u, this.getScrollOffset()) || this.scrollToIndex(n, { align: a, behavior: o });
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
const zc = (t, e, n, r) => {
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
function hh({
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
  let s = zc(
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
function mh(t) {
  const e = new fh(Y(t)), n = Ms(e), r = e._didMount();
  return un(
    () => Y(t).getScrollElement(),
    (o) => {
      o && e._willUpdate();
    },
    {
      immediate: !0
    }
  ), un(
    () => Y(t),
    (o) => {
      e.setOptions({
        ...o,
        onChange: (i, s) => {
          var a;
          Pi(n), (a = o.onChange) == null || a.call(o, i, s);
        }
      }), e._willUpdate(), Pi(n);
    },
    {
      immediate: !0
    }
  ), Fc(r), n;
}
function Pc(t) {
  return mh(
    z(() => ({
      observeElementRect: ch,
      observeElementOffset: uh,
      scrollToFn: dh,
      ...Y(t)
    }))
  );
}
function ph(t) {
  const e = document.getElementById(t);
  return {
    calendar: e,
    timeline: e.querySelector(ut.TIMELINE_SELECTOR),
    resources: e.querySelector(ut.RESOURCES_SELECTOR)
  };
}
const gh = /* @__PURE__ */ Lt({
  __name: "RowVirtualiser",
  props: {
    rows: {},
    layout: {},
    wrapperStyle: {}
  },
  setup(t) {
    const e = t, n = at(null), r = z(() => ({
      count: e.rows.length,
      getScrollElement: () => n.value,
      estimateSize: c,
      gap: e.layout.gap,
      paddingStart: e.layout.dayHeadSize,
      overscan: e.layout.overscan
    })), o = Pc(r), i = z(() => o.value.getVirtualItems()), s = z(() => o.value.getTotalSize()), a = z(() => ({
      height: H(s.value),
      ...e.wrapperStyle
    }));
    un(() => e.rows, () => o.value.measure());
    function c(u) {
      const l = e.rows[u];
      return "isGroup" in l ? e.layout.resourceGroupSize : l.maxEvents * e.layout.eventSize;
    }
    return (u, l) => ($(), nt("div", {
      ref_key: "el",
      ref: n,
      class: "cullendar-row-virtualiser"
    }, [
      Wn("div", {
        class: "cullendar-row-virtualiser-wrapper",
        style: ke(a.value)
      }, [
        A(u.$slots, "wrapper", {}, void 0, !0),
        ($(!0), nt(ln, null, dn(i.value, (d) => A(u.$slots, "default", ve({
          key: d.index,
          ref_for: !0
        }, { row: d, data: u.rows[d.index] }), void 0, !0)), 128))
      ], 4),
      Wn("div", {
        class: "cullendar-rows-wrapper",
        style: ke(a.value)
      }, [
        ($(!0), nt(ln, null, dn(i.value, (d) => A(u.$slots, "row", ve({
          key: d.index,
          ref_for: !0
        }, { row: d, data: u.rows[d.index] }), void 0, !0)), 128))
      ], 4)
    ], 512));
  }
}), tn = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, _c = /* @__PURE__ */ tn(gh, [["__scopeId", "data-v-c4319a0d"]]), vh = { class: "cullendar-timeline-head" }, wh = /* @__PURE__ */ Lt({
  __name: "Timeline",
  props: {
    rows: {},
    columns: {}
  },
  setup(t) {
    const e = t, n = Ze("api"), { id: r, unitWidth: o, elements: i, layout: s, callbacks: a, virtualizer: c } = je(n), u = at(!1), l = z(() => ({
      horizontal: !0,
      count: e.columns.length,
      getScrollElement: () => {
        var v;
        return (v = i.value) == null ? void 0 : v.timeline;
      },
      estimateSize: () => o.value,
      gap: s.value.gap,
      overscan: s.value.overscan,
      onChange: (v) => {
        var y;
        p(((y = v.scrollElement) == null ? void 0 : y.clientWidth) ?? 0), !u.value && (u.value = !0, a.value.onReady(n));
      }
    })), d = Pc(l);
    c.value = d.value;
    const f = z(() => d.value.getVirtualItems()), h = z(() => d.value.getTotalSize()), m = z(() => ({ width: H(h.value) }));
    bs(() => i.value = ph(r.value)), un([() => e.columns.length, s], () => d.value.measure());
    function p(v) {
      const y = e.columns.length, E = v - s.value.gap * (y - 1), M = Math.max(s.value.daySize, Math.floor(E / y));
      M !== o.value && (o.value = M, d.value.measure());
    }
    function g(v) {
      return {
        height: H(s.value.dayHeadSize),
        width: H(o.value),
        transform: `translateX(${H(v.start)}) translateY(0)`
      };
    }
    function w(v, y) {
      return {
        width: H(o.value),
        height: H(v.size),
        transform: `translateX(${H(y.start)}) translateY(${H(v.start)})`
      };
    }
    return (v, y) => ($(), to(_c, {
      rows: v.rows,
      layout: Y(s),
      "wrapper-style": m.value,
      class: eo(["cullendar-timeline", Y(s).timelineClass])
    }, xc({ _: 2 }, [
      u.value ? {
        name: "wrapper",
        fn: kt(() => [
          Wn("div", vh, [
            ($(!0), nt(ln, null, dn(f.value, (E) => ($(), nt("div", {
              key: E.index,
              class: "cullendar-timeline-virtual-col",
              style: ke(g(E))
            }, [
              A(v.$slots, "head", ve({ ref_for: !0 }, { date: v.columns[E.index] }), void 0, !0)
            ], 4))), 128))
          ])
        ]),
        key: "0"
      } : void 0,
      u.value ? {
        name: "default",
        fn: kt(({ row: E, data: M }) => [
          ($(!0), nt(ln, null, dn(f.value, (T) => ($(), nt("div", {
            key: T.index,
            class: "cullendar-timeline-virtual-col",
            style: ke(w(E, T))
          }, [
            A(v.$slots, "default", ve({ ref_for: !0 }, { resource: M, date: v.columns[T.index] }), void 0, !0)
          ], 4))), 128))
        ]),
        key: "1"
      } : void 0,
      u.value ? {
        name: "row",
        fn: kt(({ row: E, data: M }) => [
          A(v.$slots, "row", mt(xt({ resource: M, row: E, virtualizer: Y(d), size: h.value })), void 0, !0)
        ]),
        key: "2"
      } : void 0
    ]), 1032, ["rows", "layout", "wrapper-style", "class"]));
  }
}), yh = /* @__PURE__ */ tn(wh, [["__scopeId", "data-v-5a269c8d"]]), Eh = /* @__PURE__ */ Lt({
  __name: "Resources",
  props: {
    rows: {}
  },
  setup(t) {
    const e = Ze("api"), { layout: n } = je(e);
    function r(o) {
      return {
        height: H(o.size),
        transform: `translateY(${H(o.start)})`
      };
    }
    return (o, i) => ($(), to(_c, {
      rows: o.rows,
      layout: Y(n),
      class: eo(["cullendar-resources", Y(n).resourcesClass])
    }, {
      default: kt(({ row: s, data: a }) => [
        Wn("div", {
          class: "cullendar-resources-virtual-row",
          style: ke(r(s))
        }, [
          A(o.$slots, "default", mt(xt({ resource: a })), void 0, !0)
        ], 4)
      ]),
      _: 3
    }, 8, ["rows", "layout", "class"]));
  }
}), Sh = /* @__PURE__ */ tn(Eh, [["__scopeId", "data-v-876f22e5"]]), Mh = /* @__PURE__ */ Lt({
  __name: "Day",
  props: {
    date: {},
    resource: {}
  },
  setup(t) {
    const e = t, n = Ze("api"), { utils: r } = je(n), o = z(() => r.value.getEvents(e.resource.id, e.date)), i = z(() => Array.from(o.value.values()).sort((s, a) => Date.parse(s.start) - Date.parse(a.start)));
    return (s, a) => A(s.$slots, "default", mt(xt({ events: i.value })));
  }
}), bh = ["id"], Dh = /* @__PURE__ */ Lt({
  name: "Cullendar",
  __name: "index",
  props: {
    cullendar: {}
  },
  setup(t) {
    const e = t;
    Yc("api", e.cullendar);
    const { id: n, elements: r, view: o, resources: i } = je(e.cullendar), s = z(() => Array.from(i.value.values()));
    bs(() => {
      r.value.timeline.addEventListener("scroll", a), r.value.resources.addEventListener("scroll", a);
    });
    function a(c) {
      const u = c.target, l = u.classList.contains("cullendar-timeline") ? r.value.resources : r.value.timeline;
      l.removeEventListener("scroll", a), l.scrollTop = u.scrollTop, requestAnimationFrame(() => l.addEventListener("scroll", a));
    }
    return (c, u) => ($(), nt("div", {
      id: Y(n),
      style: ke({ "--scrollbar-width": Y(rh)() }),
      class: "cullendar"
    }, [
      _i(Sh, { rows: s.value }, {
        default: kt(({ resource: l }) => [
          "isGroup" in l ? A(c.$slots, "resourceGroup", mt(ve({ key: 0 }, { resource: l })), void 0, !0) : A(c.$slots, "resource", mt(ve({ key: 1 }, { resource: l })), void 0, !0)
        ]),
        _: 3
      }, 8, ["rows"]),
      _i(yh, {
        rows: s.value,
        columns: Y(o).dates
      }, {
        head: kt((l) => [
          A(c.$slots, "dayHead", mt(xt(l)), void 0, !0)
        ]),
        default: kt(({ resource: l, date: d }) => [
          "isGroup" in l ? Ds("", !0) : ($(), to(Mh, {
            key: 0,
            date: d,
            resource: l
          }, {
            default: kt(({ events: f }) => [
              A(c.$slots, "day", mt(xt({ resource: l, date: d, events: f })), () => [
                ($(!0), nt(ln, null, dn(f, (h) => A(c.$slots, "event", ve({
                  key: h.id,
                  ref_for: !0
                }, { resource: l, event: h, date: d }), void 0, !0)), 128))
              ], !0)
            ]),
            _: 2
          }, 1032, ["date", "resource"]))
        ]),
        row: kt((l) => [
          A(c.$slots, "row", mt(xt(l)), void 0, !0)
        ]),
        _: 3
      }, 8, ["rows", "columns"]),
      A(c.$slots, "default", {}, void 0, !0)
    ], 12, bh));
  }
}), Th = /* @__PURE__ */ tn(Dh, [["__scopeId", "data-v-44caacbf"]]), Ih = /* @__PURE__ */ Lt({
  __name: "DragEvent",
  props: {
    data: {},
    dragClass: {},
    ghostClass: {}
  },
  setup(t) {
    const e = t;
    let n;
    const r = z(() => {
      var c, u;
      return ((u = (c = e.dragClass) == null ? void 0 : c.split) == null ? void 0 : u.call(c, " ")) || [];
    }), o = z(() => {
      var c, u;
      return ((u = (c = e.ghostClass) == null ? void 0 : c.split) == null ? void 0 : u.call(c, " ")) || [];
    });
    function i(c) {
      if (!c.dataTransfer)
        return;
      const u = document.querySelector(".cullendar"), l = c.target, d = l.getBoundingClientRect();
      n = a(l, d), l.classList.add(...r.value), c.dataTransfer.setDragImage(n, c.clientX - d.left, c.clientY - d.top), c.dataTransfer.effectAllowed = "id" in e.data ? "move" : "copy", c.dataTransfer.setData(ut.DATA_TRANSFER_TYPE, JSON.stringify(e.data)), requestAnimationFrame(() => u.classList.add(ut.DRAGGING_CLASS));
    }
    function s(c) {
      const u = document.querySelector(".cullendar");
      c.target.classList.remove(...r.value), u.classList.remove(ut.DRAGGING_CLASS), n && n.remove();
    }
    function a(c, u) {
      const l = c.cloneNode(!0);
      return l.classList.add("cullendar-ghost-event", ...o.value), l.style.height = H(u.height), l.style.width = H(u.width), document.body.appendChild(l), l;
    }
    return (c, u) => ($(), nt("div", {
      draggable: "true",
      class: "cullendar-drag-event",
      onDragstart: Vn(i, ["stop"]),
      onDragend: Vn(s, ["stop"])
    }, [
      A(c.$slots, "default", {}, void 0, !0)
    ], 32));
  }
}), Yh = /* @__PURE__ */ tn(Ih, [["__scopeId", "data-v-0e858255"]]), Ah = /* @__PURE__ */ Lt({
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
    const e = t, n = Ze("api"), { view: r, callbacks: o, resizeResourcesSet: i, resizeDatesSet: s } = je(n), a = at(!1), c = z(() => i.value.has(e.resource.id) && s.value.has(e.date)), u = z(() => [
      a.value && e.dragoverClass,
      c.value && e.resizeoverClass
    ].filter(Boolean).join(" "));
    function l(g) {
      g.dataTransfer && g.dataTransfer.types.includes(ut.DATA_TRANSFER_TYPE) && (a.value = !0);
    }
    function d(g) {
      if (!g.dataTransfer || !g.dataTransfer.types.includes(ut.DATA_TRANSFER_TYPE))
        return;
      a.value = !1;
      const w = JSON.parse(g.dataTransfer.getData(ut.DATA_TRANSFER_TYPE));
      if (!w.id)
        return o.value.onAddEvent(m({ data: w }));
      if (Ic(w.start, r.value.timezone) === e.date && Ci(w.resourceId).includes(e.resource.id))
        return;
      const y = or(w.start) ? f(w) : h(w), E = m({ event: w, times: y });
      o.value.onBeforeDropEvent(E) && o.value.onMoveEvent(E);
    }
    function f(g) {
      const w = j.PlainDate.from(e.date), v = j.PlainDate.from(g.start).until(j.PlainDate.from(g.end));
      return {
        start: w.toString(),
        end: w.add(v).toString()
      };
    }
    function h(g) {
      const w = j.PlainDate.from(e.date), v = j.Instant.from(g.start).toZonedDateTimeISO(r.value.timezone), y = j.Instant.from(g.end).toZonedDateTimeISO(r.value.timezone), E = v.until(y), M = v.with({
        year: w.year,
        month: w.month,
        day: w.day
      });
      return {
        start: M.toString({ timeZoneName: "never" }),
        end: M.add(E).toString({ timeZoneName: "never" })
      };
    }
    function m(g = {}) {
      return {
        ...g,
        date: e.date,
        resource: e.resource,
        view: r.value
      };
    }
    function p() {
      o.value.onDayEnter(m());
    }
    return (g, w) => ($(), nt("div", {
      class: eo(u.value),
      onMouseenter: p
    }, [
      g.droppable && g.resource.isEventDroppable ? ($(), nt("span", {
        key: 0,
        class: "cullendar-day-dropzone",
        onDragenter: l,
        onDragover: w[0] || (w[0] = Vn(() => {
        }, ["prevent"])),
        onDragleave: w[1] || (w[1] = (v) => a.value = !1),
        onDrop: d
      }, null, 32)) : Ds("", !0),
      A(g.$slots, "default", mt(xt({ date: g.date, resource: g.resource, events: g.events, isDragOver: a.value, isResizeOver: c.value })))
    ], 34));
  }
}), Zh = /* @__PURE__ */ Lt({
  __name: "Row",
  props: {
    row: {},
    resource: {},
    virtualizer: {},
    size: {}
  },
  setup(t) {
    const e = t, n = Ze("api"), r = z(() => o(n.utils.getEvents(e.resource.id), e.size));
    function o(i, s) {
      const a = [], c = j.PlainDate.from(n.view.start), u = Cc(n.view, s), l = Array.from(i.values());
      for (let d = 0; d < l.length; d++) {
        const f = l[d], h = or(f.start) ? j.PlainDate.from(f.start) : j.Instant.from(f.start).toZonedDateTimeISO(n.view.timezone), m = or(f.end) ? j.PlainDate.from(f.end) : j.Instant.from(f.end).toZonedDateTimeISO(n.view.timezone), p = h.until(m), g = c.until(h), w = Math.floor(u * p.total({ unit: "minutes", relativeTo: h })), v = Math.floor(u * g.total({ unit: "minutes", relativeTo: c })), y = w + v;
        y < 0 || v > e.virtualizer.getTotalSize() || a.push({
          event: f,
          start: v,
          end: y,
          size: w
        });
      }
      return a;
    }
    return (i, s) => A(i.$slots, "default", mt(xt({ row: i.row, resource: i.resource, virtualizer: i.virtualizer, events: r.value })));
  }
}), Ur = 100, Oh = 60, ys = 0.1;
function Rh(t) {
  const e = at(0), n = at(0);
  let r, o, i = 0, s = 0, a = 0, c = 0, u = 0, l = 0;
  function d(p) {
    const g = p.clientX - r.left, w = p.clientY - r.top;
    e.value = t.scrollLeft - i, n.value = t.scrollTop - s, a = Es(g, r.width), c = Es(w, r.height);
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
  const n = t < Ur ? -1 : t > e - Ur ? 1 : 0, r = n === -1 ? t : e - t;
  return n * Oh * (1 - r / Ur);
}
const Nh = /* @__PURE__ */ Lt({
  __name: "ResizeHandle",
  props: {
    event: {},
    resource: {},
    date: {}
  },
  setup(t) {
    const e = t, n = Ze("api"), { unitWidth: r, elements: o, view: i, resources: s, layout: a, callbacks: c, utils: u, resizeDatesSet: l, resizeResourcesSet: d } = je(n);
    let f = 0, h = 0;
    const m = [], p = at(!1), g = at(0), w = at(0), { scrolledX: v, scrolledY: y, start: E, stop: M } = Rh(o.value.timeline);
    function T(k) {
      g.value = k.clientX, w.value = k.clientY, p.value = !0, l.value.add(e.date), d.value.add(e.resource.id), St(), document.addEventListener("mousemove", C), document.addEventListener("mouseup", P), o.value.calendar.classList.add(ut.RESIZING_CLASS), E();
    }
    function C(k) {
      const N = Math.max(0, k.clientX - g.value + v.value), _t = Math.max(0, k.clientY - w.value + y.value);
      _(_t), Pt(N);
    }
    function P() {
      const k = Array.from(d.value.values()).slice(1).map((_t) => u.value.getResource(_t)), N = Array.from(l.value.values()).slice(1);
      f = 0, h = 0, d.value.clear(), l.value.clear(), p.value = !1, document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", P), o.value.calendar.classList.remove(ut.RESIZING_CLASS), M(), !(!N.length && !k.length) && c.value.onResizeEvent({
        event: e.event,
        resource: e.resource,
        resources: k,
        date: e.date,
        dates: N,
        view: i.value
      });
    }
    function _(k) {
      for (; h < m.length && k > m[h].bottom; )
        d.value.add(m[h].id), h++;
      for (; h > 0 && k < m[h - 1].top; )
        d.value.delete(m[h - 1].id), h--;
    }
    function Pt(k) {
      const N = Math.ceil(k / (r.value + a.value.gap));
      if (f === N)
        return;
      const _t = i.value.dates, en = _t.indexOf(e.date);
      f = N, l.value = new Set(_t.slice(en, en + N + 1));
    }
    function St() {
      let k = a.value.eventSize, N = !1;
      m.length = 0;
      for (const [_t, en] of s.value)
        if (!("isGroup" in en)) {
          if (N) {
            const zi = en.maxEvents * a.value.eventSize, kc = {
              id: _t,
              top: k,
              bottom: k + zi
            };
            k += zi, m.push(kc);
          }
          _t === e.resource.id && (N = !0);
        }
      return m;
    }
    return (k, N) => ($(), nt("div", {
      draggable: "true",
      class: "cullendar-resize-handle",
      onDragstart: N[0] || (N[0] = Vn(() => {
      }, ["stop", "prevent"])),
      onMousedown: T
    }, [
      A(k.$slots, "default", mt(xt({ isResizing: p.value })), void 0, !0)
    ], 32));
  }
}), jh = /* @__PURE__ */ tn(Nh, [["__scopeId", "data-v-a8e1e25f"]]), Bh = { install: (t) => t.component("Cullendar", Th) };
export {
  Th as Cullendar,
  Yh as DragEvent,
  Ah as DropDay,
  jh as ResizeHandle,
  Zh as Row,
  xh as create,
  Bh as default
};
