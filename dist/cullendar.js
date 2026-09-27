import { toValue as B, reactive as ws, unref as Y, shallowRef as ys, ref as J, computed as z, watch as sn, triggerRef as Ni, onScopeDispose as Pc, defineComponent as Bt, createElementBlock as ot, openBlock as U, createElementVNode as An, normalizeStyle as ve, renderSlot as Z, Fragment as an, renderList as cn, mergeProps as pe, inject as je, toRefs as Me, nextTick as kc, onMounted as bs, onUnmounted as xc, createBlock as Kr, normalizeClass as Qr, createSlots as Fc, withCtx as Ct, normalizeProps as gt, guardReactiveProps as xt, provide as Yc, createVNode as zi, createCommentVNode as Ms, withModifiers as Ln } from "vue";
function rt(t, e, n, r, o) {
  return _t(e, ((i, s) => {
    const a = i[s];
    if (a === void 0)
      throw new TypeError(Go(s));
    return a;
  })(t, e), n, r, o);
}
function _t(t, e, n, r, o, i) {
  const s = ln(e, n, r);
  if (o && e !== s)
    throw new RangeError(Fa(t, e, n, r, i));
  return s;
}
function tt(t) {
  return t !== null && /object|function/.test(typeof t);
}
function dt(t, e = Map) {
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
  return jt((n) => ({
    value: n,
    configurable: 1,
    writable: !e
  }), t);
}
function Zc(t) {
  return jt((e) => ({
    get: e,
    configurable: 1
  }), t);
}
function to(t) {
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
function jt(t, e, n) {
  const r = {};
  for (const o in e)
    r[o] = t(e[o], o, n);
  return r;
}
function nr(t, e, n) {
  const r = {};
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    r[i] = t(i, o, n);
  }
  return r;
}
function Es(t, e, n) {
  const r = {};
  for (let o = 0; o < t.length; o++)
    r[e[o]] = n[t[o]];
  return r;
}
function wt(t, e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of t)
    n[r] = e[r];
  return n;
}
function Ci(t, e) {
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
function Ts(t, e, n) {
  const r = {
    ...n
  };
  for (let o = 0; o < e; o++)
    r[t[o]] = 0;
  return r;
}
function I(t, ...e) {
  return (...n) => t(...e, ...n);
}
function Pi(t) {
  return t[0].toUpperCase() + t.substring(1);
}
function vn(t) {
  return t.slice().sort();
}
function Un(t, e) {
  return String(e).padStart(t, "0");
}
function Xt(t, e) {
  return Math.sign(t - e);
}
function ln(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function Ft(t, e) {
  return [Math.floor(t / e), rn(t, e)];
}
function rn(t, e) {
  return (t % e + e) % e;
}
function Qt(t, e) {
  return [rr(t, e), eo(t, e)];
}
function rr(t, e) {
  return Math.trunc(t / e) || 0;
}
function eo(t, e) {
  return t % e || 0;
}
function xn(t) {
  return Math.abs(t % 1) === 0.5;
}
function Ss(t, e, n) {
  let r = 0, o = 0;
  for (let a = 0; a <= e; a++) {
    const u = t[n[a]], c = Ot[a], l = x / c, [d, f] = Qt(u, l);
    r += f * c, o += d;
  }
  const [i, s] = Qt(r, x);
  return [o + i, s];
}
function or(t, e, n) {
  const r = {};
  for (let o = e; o >= 0; o--) {
    const i = Ot[o];
    r[n[o]] = rr(t, i), t = eo(t, i);
  }
  return r;
}
function _c(t) {
  if (t !== void 0)
    return G(t);
}
function jc(t) {
  if (t !== void 0)
    return kt(t);
}
function Is(t) {
  if (t !== void 0)
    return no(t);
}
function kt(t) {
  return Ns(no(t));
}
function no(t) {
  return Rs(Hl(t));
}
function Os(t, e) {
  if (e == null)
    throw new RangeError(Go(t));
  return e;
}
function wn(t) {
  if (!tt(t))
    throw new TypeError(bl);
  return t;
}
function ro(t, e, n = t) {
  if (typeof e !== t)
    throw new TypeError(ue(n, e));
  return e;
}
function Rs(t, e = "number") {
  if (!Number.isInteger(t))
    throw new RangeError(ml(e, t));
  return t || 0;
}
function Ns(t, e = "number") {
  if (t <= 0)
    throw new RangeError(gl(e, t));
  return t;
}
function oo(t) {
  if (typeof t == "symbol")
    throw new TypeError(yl);
  return String(t);
}
function _n(t, e) {
  return tt(t) ? String(t) : G(t, e);
}
function io(t) {
  if (typeof t == "string")
    return BigInt(t);
  if (typeof t != "bigint")
    throw new TypeError(wl(t));
  return t;
}
function zs(t, e = "number") {
  if (typeof t == "bigint")
    throw new TypeError(vl(e));
  if (t = Number(t), !Number.isFinite(t))
    throw new RangeError(pl(e, t));
  return t;
}
function K(t, e) {
  return Math.trunc(zs(t, e)) || 0;
}
function so(t, e) {
  return Rs(zs(t, e), e);
}
function ki(t, e) {
  return Ns(K(t, e), e);
}
function ao(t, e) {
  let [n, r] = Qt(e, x), o = t + n;
  const i = Math.sign(o);
  return i && i === -Math.sign(r) && (o -= i, r += i * x), [o, r];
}
function Ye(t, e, n = 1) {
  return ao(t[0] + e[0] * n, t[1] + e[1] * n);
}
function we(t, e) {
  return ao(t[0], t[1] + e);
}
function St(t, e) {
  return Ye(e, t, -1);
}
function ft(t, e) {
  return Xt(t[0], e[0]) || Xt(t[1], e[1]);
}
function Cs(t, e, n) {
  return ft(t, e) === -1 || ft(t, n) === 1;
}
function co(t, e = 1) {
  const n = BigInt(x / e);
  return [Number(t / n), Number(t % n) * e];
}
function Wn(t, e = 1) {
  const n = x / e, [r, o] = Qt(t, n);
  return [r, o * e];
}
function It(t, e = 1, n) {
  const [r, o] = t, [i, s] = Qt(o, e);
  return r * (x / e) + (i + (n ? s / e : 0));
}
function uo(t, e, n = Ft) {
  const [r, o] = t, [i, s] = n(o, e);
  return [r * (x / e) + i, s];
}
function lo(t) {
  return rt(t, "isoYear", pn, gn, 1), t.isoYear === pn ? rt(t, "isoMonth", 4, 12, 1) : t.isoYear === gn && rt(t, "isoMonth", 1, 9, 1), t;
}
function pt(t) {
  return at({
    ...t,
    ...ct,
    isoHour: 12
  }), t;
}
function at(t) {
  const e = rt(t, "isoYear", pn, gn, 1), n = e === pn ? 1 : e === gn ? -1 : 0;
  return n && Rt(W({
    ...t,
    isoDay: t.isoDay + n,
    isoNanosecond: t.isoNanosecond - n
  })), t;
}
function Rt(t) {
  if (!t || Cs(t, rd, nd))
    throw new RangeError(le);
  return t;
}
function te(t) {
  return Ss(t, 5, Mt)[1];
}
function ir(t) {
  const [e, n] = Ft(t, x);
  return [or(n, 5, Mt), e];
}
function xi(t) {
  return uo(t, Tt);
}
function Q(t) {
  return $e(t.isoYear, t.isoMonth, t.isoDay, t.isoHour, t.isoMinute, t.isoSecond, t.isoMillisecond);
}
function W(t) {
  const e = Q(t);
  if (e !== void 0) {
    const [n, r] = Qt(e, st);
    return [n, r * Lt + (t.isoMicrosecond || 0) * Sn + (t.isoNanosecond || 0)];
  }
}
function fo(t, e) {
  const [n, r] = ir(te(t) - e);
  return Rt(W({
    ...t,
    isoDay: t.isoDay + r,
    ...n
  }));
}
function Vn(...t) {
  return $e(...t) / Ua;
}
function $e(...t) {
  const [e, n] = Ps(...t), r = e.valueOf();
  if (!isNaN(r))
    return r - n * st;
}
function Ps(t, e = 1, n = 1, r = 0, o = 0, i = 0, s = 0) {
  const a = t === pn ? 1 : t === gn ? -1 : 0, u = /* @__PURE__ */ new Date();
  return u.setUTCHours(r, o, i, s), u.setUTCFullYear(t, e - 1, n + a), [u, a];
}
function Ae(t, e) {
  let [n, r] = we(t, e);
  r < 0 && (r += x, n -= 1);
  const [o, i] = Ft(r, Lt), [s, a] = Ft(i, Sn);
  return sr(n * st + o, s, a);
}
function sr(t, e = 0, n = 0) {
  const r = Math.ceil(Math.max(0, Math.abs(t) - ed) / st) * Math.sign(t), o = new Date(t - r * st);
  return Be(Or, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + r, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), e, n]);
}
function ho(t, e) {
  if (e < -864e13)
    throw new RangeError(le);
  const n = t.formatToParts(e), r = {};
  for (const o of n)
    r[o.type] = o.value;
  return r;
}
function mo(t) {
  return [t.isoYear, t.isoMonth, t.isoDay];
}
function ks(t, e) {
  return [e, 0];
}
function xs() {
  return Vt;
}
function Fs(t, e) {
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
function Zs(t) {
  const [e, n] = Ps(t.isoYear, t.isoMonth, t.isoDay);
  return rn(e.getUTCDay() - n, 7) || 7;
}
function _s(t) {
  return this.id === Xe ? (({ isoYear: e }) => e < 1 ? ["gregory-inverse", 1 - e] : ["gregory", e])(t) : this.id === re ? sd(t) : [];
}
function Bc(t) {
  const e = Q(t);
  if (e < id) {
    const { isoYear: i } = t;
    return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
  }
  const n = ho(mi(re), e), { era: r, eraYear: o } = Ta(n, re);
  return [r, o];
}
function ar(t) {
  return Ee(t), Le(t, 1), t;
}
function Ee(t) {
  return js(t, 1), t;
}
function Fi(t) {
  return Ds(ri, t, js(t));
}
function js(t, e) {
  const { isoYear: n } = t, r = rt(t, "isoMonth", 1, xs(), e);
  return {
    isoYear: n,
    isoMonth: r,
    isoDay: rt(t, "isoDay", 1, Fs(n, r), e)
  };
}
function Le(t, e) {
  return Be(Mt, [rt(t, "isoHour", 0, 23, e), rt(t, "isoMinute", 0, 59, e), rt(t, "isoSecond", 0, 59, e), rt(t, "isoMillisecond", 0, 999, e), rt(t, "isoMicrosecond", 0, 999, e), rt(t, "isoNanosecond", 0, 999, e)]);
}
function R(t) {
  return t === void 0 ? 0 : sc(wn(t));
}
function cr(t, e = 0) {
  t = Nt(t);
  const n = ac(t), r = pd(t, e);
  return [sc(t), r, n];
}
function Ue(t, e, n, r = 9, o = 0, i = 4) {
  e = Nt(e);
  let s = ic(e, r, o), a = wo(e), u = Rn(e, i);
  const c = On(e, r, o, 1);
  return s == null ? s = Math.max(n, c) : Ls(s, c), a = yo(a, c, 1), t && (u = ((l) => l < 4 ? (l + 2) % 4 : l)(u)), [s, c, a, u];
}
function ur(t, e = 6, n) {
  let r = wo(t = lr(t, Kn));
  const o = Rn(t, 7);
  let i = On(t, e);
  return i = Os(Kn, i), r = yo(r, i, void 0, n), [i, r, o];
}
function po(t) {
  return ii(Nt(t));
}
function Bs(t, e) {
  return vo(Nt(t), e);
}
function $c(t) {
  const e = lr(t, _r), n = oe(_r, md, e, 0);
  if (!n)
    throw new RangeError(ue(_r, n));
  return n;
}
function vo(t, e = 4) {
  const n = As(t);
  return [Rn(t, 4), ...$s(On(t, e), n)];
}
function $s(t, e) {
  return t != null ? [Ot[t], t < 4 ? 9 - 3 * t : -1] : [e === void 0 ? 1 : 10 ** (9 - e), e];
}
function wo(t) {
  const e = t[on];
  return e === void 0 ? 1 : K(e, on);
}
function yo(t, e, n, r) {
  const o = r ? x : Ot[e + 1];
  if (o) {
    const i = Ot[e];
    if (o % ((t = _t(on, t, 1, o / i - (r ? 0 : 1), 1)) * i))
      throw new RangeError(ue(on, t));
  } else
    t = _t(on, t, 1, n ? 10 ** 9 : 1, 1);
  return t;
}
function As(t) {
  let e = t[Zr];
  if (e !== void 0) {
    if (typeof e != "number") {
      if (oo(e) === "auto")
        return;
      throw new RangeError(ue(Zr, e));
    }
    e = _t(Zr, Math.floor(e), 0, 9, 1);
  }
  return e;
}
function Nt(t) {
  return t === void 0 ? {} : wn(t);
}
function lr(t, e) {
  return typeof t == "string" ? {
    [e]: t
  } : wn(t);
}
function dr(t) {
  return {
    overflow: ad[t]
  };
}
function bo(t, e, n = 9, r = 0, o) {
  let i = e[t];
  if (i === void 0)
    return o ? r : void 0;
  if (i = oo(i), i === "auto")
    return o ? r : null;
  let s = Wr[i];
  if (s === void 0 && (s = Kl[i]), s === void 0)
    throw new RangeError(Za(t, i, Wr));
  return _t(t, s, r, n, 1, Ho), s;
}
function oe(t, e, n, r = 0) {
  const o = n[t];
  if (o === void 0)
    return r;
  const i = oo(o), s = e[i];
  if (s === void 0)
    throw new RangeError(Za(t, i, e));
  return s;
}
function Ls(t, e) {
  if (e > t)
    throw new RangeError($l);
}
function $t(t) {
  return {
    branding: ui,
    epochNanoseconds: t
  };
}
function yt(t, e, n) {
  return {
    branding: de,
    calendar: n,
    timeZone: e,
    epochNanoseconds: t
  };
}
function bt(t, e = t.calendar) {
  return {
    branding: Je,
    calendar: e,
    ...wt(Ql, t)
  };
}
function At(t, e = t.calendar) {
  return {
    branding: Nn,
    calendar: e,
    ...wt(oi, t)
  };
}
function dn(t, e = t.calendar) {
  return {
    branding: si,
    calendar: e,
    ...wt(oi, t)
  };
}
function qn(t, e = t.calendar) {
  return {
    branding: ai,
    calendar: e,
    ...wt(oi, t)
  };
}
function zt(t) {
  return {
    branding: ci,
    ...wt(tc, t)
  };
}
function L(t) {
  return {
    branding: li,
    sign: ie(t),
    ...wt(ti, t)
  };
}
function Mo(t) {
  return uo(t.epochNanoseconds, Lt)[0];
}
function Ac(t) {
  return ((e, n = 1) => {
    const [r, o] = e, i = Math.floor(o / n), s = x / n;
    return BigInt(r) * BigInt(s) + BigInt(i);
  })(t.epochNanoseconds);
}
function Us(t) {
  return t.epochNanoseconds;
}
function Lc(t, e, n, r, o) {
  const i = ye(r), [s, a] = ((w, v) => {
    const y = v((w = lr(w, Gr))[rc]);
    let b = gd(w);
    return b = Os(Gr, b), [b, y];
  })(o, t), u = Math.max(s, i);
  if (!a && hn(u, a))
    return Yi(r, s);
  if (!a)
    throw new RangeError(Tr);
  if (!r.sign)
    return 0;
  const [c, l, d] = pr(e, n, a), f = zo(d), h = vr(d), m = Co(d), g = h(l, c, r);
  Ze(a) || (at(c), at(g));
  const p = m(l, c, g, s);
  return hn(s, a) ? Yi(p, s) : ((w, v, y, b, D, S, P) => {
    const k = ie(w), [M, N] = Eo(b, ni(y, w), y, k, D, S, P), F = Do(v, M, N);
    return w[C[y]] + F * k;
  })(p, f(g), s, l, c, f, h);
}
function Yi(t, e) {
  return It(V(t), Ot[e], 1);
}
function Eo(t, e, n, r, o, i, s) {
  const a = C[n], u = {
    ...e,
    [a]: e[a] + r
  }, c = s(t, o, e), l = s(t, o, u);
  return [i(c), i(l)];
}
function Do(t, e, n) {
  const r = It(St(e, n));
  if (!r)
    throw new RangeError(He);
  return It(St(e, t)) / r;
}
function Uc(t, e) {
  const [n, r, o] = ur(e, 5, 1);
  return $t(hr(t.epochNanoseconds, n, r, o, 1));
}
function Wc(t, e, n) {
  let { epochNanoseconds: r, timeZone: o, calendar: i } = e;
  const [s, a, u] = ur(n);
  if (s === 0 && a === 1)
    return e;
  const c = t(o);
  if (s === 6)
    r = ((l, d, f, h) => {
      const m = mt(f, d), [g, p] = l(m), w = f.epochNanoseconds, v = ne(d, g), y = ne(d, p);
      if (Cs(w, v, y))
        throw new RangeError(He);
      return Hs(Do(w, v, y), h) ? y : v;
    })(qs, c, e, u);
  else {
    const l = c.R(r);
    r = We(c, Ws(Ae(r, l), s, a, u), l, 2, 0, 1);
  }
  return yt(r, o, i);
}
function Vc(t, e) {
  return bt(Ws(t, ...ur(e)), t.calendar);
}
function qc(t, e) {
  const [n, r, o] = ur(e, 5);
  var i;
  return zt((i = o, To(t, yn(n, r), i)[0]));
}
function Gc(t, e) {
  const n = t(e.timeZone), r = mt(e, n), [o, i] = qs(r), s = It(St(ne(n, o), ne(n, i)), Ir, 1);
  if (s <= 0)
    throw new RangeError(He);
  return s;
}
function Hc(t, e) {
  const { timeZone: n, calendar: r } = e, o = ((i, s, a) => ne(s, i(mt(a, s))))(Gs, t(n), e);
  return yt(o, n, r);
}
function Ws(t, e, n, r) {
  return Vs(t, yn(e, n), r);
}
function Vs(t, e, n) {
  const [r, o] = To(t, e, n);
  return at({
    ...De(t, o),
    ...r
  });
}
function To(t, e, n) {
  return ir(ee(te(t), e, n));
}
function Gn(t) {
  return ee(t, Sr, 7);
}
function yn(t, e) {
  return Ot[t] * e;
}
function qs(t) {
  const e = Gs(t);
  return [e, De(e, 1)];
}
function Gs(t) {
  return td(6, t);
}
function Xc(t, e, n) {
  const r = Math.min(ye(t), 6);
  return Ve(mr(V(t, r), e, n), r);
}
function fr(t, e, n, r, o, i, s, a, u, c) {
  if (r === 0 && o === 1)
    return t;
  const l = hn(r, a) ? Ze(a) && r < 6 && n >= 6 ? Kc : Jc : Qc;
  let [d, f, h] = l(t, e, n, r, o, i, s, a, u, c);
  return h && r !== 7 && (d = ((m, g, p, w, v, y, b, D) => {
    const S = ie(m);
    for (let P = w + 1; P <= p; P++) {
      if (P === 7 && p !== 7)
        continue;
      const k = ni(P, m);
      k[C[P]] += S;
      const M = It(St(b(D(v, y, k)), g));
      if (M && Math.sign(M) !== S)
        break;
      m = k;
    }
    return m;
  })(d, f, n, Math.max(6, r), s, a, u, c)), d;
}
function hr(t, e, n, r, o) {
  if (e === 6) {
    const i = ((s) => s[0] + s[1] / x)(t);
    return [ee(i, n, r), 0];
  }
  return mr(t, yn(e, n), r, o);
}
function mr(t, e, n, r) {
  let [o, i] = t;
  r && i < 0 && (i += x, o -= 1);
  const [s, a] = Ft(ee(i, e, n), x);
  return ao(o + s, a);
}
function ee(t, e, n) {
  return Hs(t / e, n) * e;
}
function Hs(t, e) {
  return yd[e](t);
}
function Jc(t, e, n, r, o, i) {
  const s = ie(t), a = V(t), u = hr(a, r, o, i), c = St(a, u), l = Math.sign(u[0] - a[0]) === s, d = Ve(u, Math.min(n, 6));
  return [{
    ...t,
    ...d
  }, Ye(e, c), l];
}
function Kc(t, e, n, r, o, i, s, a, u, c) {
  const l = ie(t) || 1, d = It(V(t, 5)), f = yn(r, o);
  let h = ee(d, f, i);
  const [m, g] = Eo(s, {
    ...t,
    ...ei
  }, 6, l, a, u, c), p = h - It(St(m, g));
  let w = 0;
  p && Math.sign(p) !== l ? e = we(m, h) : (w += l, h = ee(p, f, i), e = we(g, h));
  const v = wr(h);
  return [{
    ...t,
    ...v,
    days: t.days + w
  }, e, !!w];
}
function Qc(t, e, n, r, o, i, s, a, u, c) {
  const l = ie(t), d = C[r], f = ni(r, t);
  r === 7 && (t = {
    ...t,
    weeks: t.weeks + Math.trunc(t.days / 7)
  });
  const h = rr(t[d], o) * o;
  f[d] = h;
  const [m, g] = Eo(s, f, r, o * l, a, u, c), p = h + Do(e, m, g) * l * o, w = ee(p, o, i), v = Math.sign(w - p) === l;
  return f[d] = w, [f, v ? g : m, v];
}
function Zi(t, e, n, r) {
  const [o, i, s, a] = ((c) => {
    const l = vo(c = Nt(c));
    return [c.timeZone, ...l];
  })(r), u = o !== void 0;
  return ((c, l, d, f, h, m) => {
    d = mr(d, h, f, 1);
    const g = l.R(d);
    return So(Ae(d, g), m) + (c ? bn(Gn(g)) : "Z");
  })(u, e(u ? t(o) : Oe), n.epochNanoseconds, i, s, a);
}
function _i(t, e, n) {
  const [r, o, i, s, a, u] = ((c) => {
    c = Nt(c);
    const l = ii(c), d = As(c), f = wd(c), h = Rn(c, 4), m = On(c, 4);
    return [l, vd(c), f, h, ...$s(m, d)];
  })(n);
  return ((c, l, d, f, h, m, g, p, w, v) => {
    f = mr(f, w, p, 1);
    const y = c(d).R(f);
    return So(Ae(f, y), v) + bn(Gn(y), g) + ((b, D) => D !== 1 ? "[" + (D === 2 ? "!" : "") + b + "]" : "")(d, m) + Io(l, h);
  })(t, e.calendar, e.timeZone, e.epochNanoseconds, r, o, i, s, a, u);
}
function ji(t, e) {
  const [n, r, o, i] = ((c) => (c = Nt(c), [ii(c), ...vo(c)]))(e);
  return s = t.calendar, a = n, u = i, So(Vs(t, o, r), u) + Io(s, a);
  var s, a, u;
}
function Bi(t, e) {
  return n = t.calendar, r = t, o = po(e), Hn(r) + Io(n, o);
  var n, r, o;
}
function $i(t, e) {
  return Xs(t.calendar, Js, t, po(e));
}
function Ai(t, e) {
  return Xs(t.calendar, tu, t, po(e));
}
function Li(t, e) {
  const [n, r, o] = Bs(e);
  return i = o, Ks(To(t, r, n)[0], i);
  var i;
}
function Cr(t, e) {
  const [n, r, o] = Bs(e, 3);
  return r > 1 && Te(t = {
    ...t,
    ...Xc(t, r, n)
  }), ((i, s) => {
    const { sign: a } = i, u = a === -1 ? et(i) : i, { hours: c, minutes: l } = u, [d, f] = uo(V(u, 3), Tt, Qt);
    na(d);
    const h = Oo(f, s), m = s >= 0 || !a || h;
    return (a < 0 ? "-" : "") + "P" + Ui({
      Y: ge(u.years),
      M: ge(u.months),
      W: ge(u.weeks),
      D: ge(u.days)
    }) + (c || l || d || m ? "T" + Ui({
      H: ge(c),
      M: ge(l),
      S: ge(d, m) + h
    }) : "");
  })(t, o);
}
function Xs(t, e, n, r) {
  const o = r > 1 || r === 0 && t !== O;
  return r === 1 ? t === O ? e(n) : Hn(n) : o ? Hn(n) + Qs(t, r === 2) : e(n);
}
function Ui(t) {
  const e = [];
  for (const n in t) {
    const r = t[n];
    r && e.push(r, n);
  }
  return e.join("");
}
function So(t, e) {
  return Hn(t) + "T" + Ks(t, e);
}
function Hn(t) {
  return Js(t) + "-" + vt(t.isoDay);
}
function Js(t) {
  const { isoYear: e } = t;
  return (e < 0 || e > 9999 ? ta(e) + Un(6, Math.abs(e)) : Un(4, e)) + "-" + vt(t.isoMonth);
}
function tu(t) {
  return vt(t.isoMonth) + "-" + vt(t.isoDay);
}
function Ks(t, e) {
  const n = [vt(t.isoHour), vt(t.isoMinute)];
  return e !== -1 && n.push(vt(t.isoSecond) + ((r, o, i, s) => Oo(r * Lt + o * Sn + i, s))(t.isoMillisecond, t.isoMicrosecond, t.isoNanosecond, e)), n.join(":");
}
function bn(t, e = 0) {
  if (e === 1)
    return "";
  const [n, r] = Ft(Math.abs(t), Ir), [o, i] = Ft(r, Sr), [s, a] = Ft(i, Tt);
  return ta(t) + vt(n) + ":" + vt(o) + (s || a ? ":" + vt(s) + Oo(a) : "");
}
function Io(t, e) {
  return e !== 1 && (e > 1 || e === 0 && t !== O) ? Qs(t, e === 2) : "";
}
function Qs(t, e) {
  return "[" + (e ? "!" : "") + "u-ca=" + t + "]";
}
function Oo(t, e) {
  let n = Un(9, t);
  return n = e === void 0 ? n.replace(Ed, "") : n.slice(0, e), n ? "." + n : "";
}
function ta(t) {
  return t < 0 ? "-" : "+";
}
function ge(t, e) {
  return t || e ? t.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function eu(t, e) {
  const { epochNanoseconds: n } = t, r = (e.R ? e : e(t.timeZone)).R(n), o = Ae(n, r);
  return {
    calendar: t.calendar,
    ...o,
    offsetNanoseconds: r
  };
}
function We(t, e, n, r = 0, o = 0, i, s) {
  if (n !== void 0 && r === 1 && (r === 1 || s))
    return fo(e, n);
  const a = t.I(e);
  if (n !== void 0 && r !== 3) {
    const u = ((c, l, d, f) => {
      const h = W(l);
      f && (d = Gn(d));
      for (const m of c) {
        let g = It(St(m, h));
        if (f && (g = Gn(g)), g === d)
          return m;
      }
    })(a, e, n, i);
    if (u !== void 0)
      return u;
    if (r === 0)
      throw new RangeError(Fl);
  }
  return s ? W(e) : Mn(t, e, o, a);
}
function Mn(t, e, n = 0, r = t.I(e)) {
  if (r.length === 1)
    return r[0];
  if (n === 1)
    throw new RangeError(Yl);
  if (r.length)
    return r[n === 3 ? 1 : 0];
  const o = W(e), i = ((a, u) => {
    const c = a.R(we(u, -864e11));
    return ((l) => {
      if (l > x)
        throw new RangeError(xl);
      return l;
    })(a.R(we(u, x)) - c);
  })(t, o), s = i * (n === 2 ? -1 : 1);
  return (r = t.I(Ae(o, s)))[n === 2 ? 0 : r.length - 1];
}
function ne(t, e) {
  const n = t.I(e);
  if (n.length)
    return n[0];
  const r = we(W(e), -864e11);
  return t.O(r, 1);
}
function Wi(t, e, n) {
  return $t(Rt(Ye(e.epochNanoseconds, ((r) => {
    if (ra(r))
      throw new RangeError(jl);
    return V(r, 5);
  })(t ? et(n) : n))));
}
function Vi(t, e, n, r, o, i = /* @__PURE__ */ Object.create(null)) {
  const s = e(r.timeZone), a = t(r.calendar);
  return {
    ...r,
    ...Ro(s, a, r, n ? et(o) : o, i)
  };
}
function qi(t, e, n, r, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i } = n;
  return bt(No(t(i), n, e ? et(r) : r, o), i);
}
function Gi(t, e, n, r, o) {
  const { calendar: i } = n;
  return At(gr(t(i), n, e ? et(r) : r, o), i);
}
function Hi(t, e, n, r, o) {
  const i = n.calendar, s = t(i);
  let a = pt(fn(s, n));
  e && (r = Po(r)), r.sign < 0 && (a = s.P(a, {
    ...q,
    months: 1
  }), a = De(a, -1));
  const u = s.P(a, r, o);
  return dn(fn(s, u), i);
}
function Xi(t, e, n) {
  return zt(ea(e, t ? et(n) : n)[0]);
}
function Ro(t, e, n, r, o) {
  const i = V(r, 5);
  let s = n.epochNanoseconds;
  if (ra(r)) {
    const a = mt(n, t);
    s = Ye(Mn(t, {
      ...gr(e, a, {
        ...r,
        ...ei
      }, o),
      ...wt(Mt, a)
    }), i);
  } else
    s = Ye(s, i), R(o);
  return {
    epochNanoseconds: Rt(s)
  };
}
function No(t, e, n, r) {
  const [o, i] = ea(e, n);
  return at({
    ...gr(t, e, {
      ...n,
      ...ei,
      days: n.days + i
    }, r),
    ...o
  });
}
function gr(t, e, n, r) {
  if (n.years || n.months || n.weeks)
    return t.P(e, n, r);
  R(r);
  const o = n.days + V(n, 5)[0];
  return o ? pt(De(e, o)) : e;
}
function fn(t, e, n = 1) {
  return De(e, n - t.day(e));
}
function ea(t, e) {
  const [n, r] = V(e, 5), [o, i] = ir(te(t) + r);
  return [o, n + i];
}
function De(t, e) {
  return e ? {
    ...t,
    ...sr(Q(t) + e * st)
  } : t;
}
function pr(t, e, n) {
  const r = t(n.calendar);
  return Ze(n) ? [n, r, e(n.timeZone)] : [{
    ...n,
    ...ct
  }, r];
}
function zo(t) {
  return t ? Us : W;
}
function vr(t) {
  return t ? I(Ro, t) : No;
}
function Co(t) {
  return t ? I(Su, t) : Iu;
}
function Ze(t) {
  return t && t.epochNanoseconds;
}
function hn(t, e) {
  return t <= 6 - (Ze(e) ? 1 : 0);
}
function Ji(t, e, n, r, o, i, s) {
  const a = t(Nt(s).relativeTo), u = Math.max(ye(o), ye(i));
  if (hn(u, a))
    return L(Te(((g, p, w, v) => {
      const y = Ye(V(g), V(p), v ? -1 : 1);
      if (!Number.isFinite(y[0]))
        throw new RangeError(le);
      return {
        ...q,
        ...Ve(y, w)
      };
    })(o, i, u, r)));
  if (!a)
    throw new RangeError(Tr);
  r && (i = et(i));
  const [c, l, d] = pr(e, n, a), f = vr(d), h = Co(d), m = f(l, c, o);
  return L(h(l, c, f(l, m, i), u));
}
function nu(t, e, n, r, o) {
  const i = ye(r), [s, a, u, c, l] = ((S, P, k) => {
    S = lr(S, Kn);
    let M = ic(S);
    const N = k(S[rc]);
    let F = wo(S);
    const ut = Rn(S, 7);
    let j = On(S);
    if (M === void 0 && j === void 0)
      throw new RangeError(Bl);
    if (j == null && (j = 0), M == null && (M = Math.max(j, P)), Ls(M, j), F = yo(F, j, 1), F > 1 && j > 5 && M !== j)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [M, j, F, ut, N];
  })(o, i, t), d = Math.max(i, s);
  if (!l && d <= 6)
    return L(Te(((S, P, k, M, N) => {
      const F = hr(V(S), k, M, N);
      return {
        ...q,
        ...Ve(F, P)
      };
    })(r, s, a, u, c)));
  if (!Ze(l) && !r.sign)
    return r;
  if (!l)
    throw new RangeError(Tr);
  const [f, h, m] = pr(e, n, l), g = zo(m), p = vr(m), w = Co(m), v = p(h, f, r);
  Ze(l) || (at(f), at(v));
  let y = w(h, f, v, s);
  const b = r.sign, D = ie(y);
  if (b && D && b !== D)
    throw new RangeError(He);
  return y = fr(y, g(v), s, a, u, c, h, f, g, p), L(y);
}
function ru(t) {
  return t.sign === -1 ? Po(t) : t;
}
function Po(t) {
  return L(et(t));
}
function et(t) {
  const e = {};
  for (const n of C)
    e[n] = -1 * t[n] || 0;
  return e;
}
function ou(t) {
  return !t.sign;
}
function ie(t, e = C) {
  let n = 0;
  for (const r of e) {
    const o = Math.sign(t[r]);
    if (o) {
      if (n && n !== o)
        throw new RangeError(_l);
      n = o;
    }
  }
  return n;
}
function Te(t) {
  for (const e of Jl)
    _t(e, t[e], -4294967295, Dd, 1);
  return na(It(V(t), Tt)), t;
}
function na(t) {
  if (!Number.isSafeInteger(t))
    throw new RangeError(Zl);
}
function V(t, e = 6) {
  return Ss(t, e, C);
}
function Ve(t, e = 6) {
  const [n, r] = t, o = or(r, e, C);
  if (o[C[e]] += n * (x / Ot[e]), !Number.isFinite(o[C[e]]))
    throw new RangeError(le);
  return o;
}
function wr(t, e = 5) {
  return or(t, e, C);
}
function ra(t) {
  return !!ie(t, Qa);
}
function ye(t) {
  let e = 9;
  for (; e > 0 && !t[C[e]]; e--)
    ;
  return e;
}
function iu(t, e) {
  return [t, e];
}
function Ki(t) {
  const e = Math.floor(t / Bn) * Bn;
  return [e, e + Bn];
}
function su(t) {
  const e = se(t = _n(t));
  if (!e)
    throw new RangeError(it(t));
  let n;
  if (e.j)
    n = 0;
  else {
    if (!e.offset)
      throw new RangeError(it(t));
    n = Se(e.offset);
  }
  return e.timeZone && Zo(e.timeZone, 1), $t(fo(ar(e), n));
}
function au(t) {
  const e = se(G(t));
  if (!e)
    throw new RangeError(it(t));
  if (e.timeZone)
    return oa(e, e.offset ? Se(e.offset) : void 0);
  if (e.j)
    throw new RangeError(it(t));
  return sa(e);
}
function cu(t, e) {
  const n = se(G(t));
  if (!n || !n.timeZone)
    throw new RangeError(it(t));
  const { offset: r } = n, o = r ? Se(r) : void 0, [, i, s] = cr(e);
  return oa(n, o, i, s);
}
function Se(t) {
  const e = Zo(t);
  if (e === void 0)
    throw new RangeError(it(t));
  return e;
}
function uu(t) {
  const e = se(G(t));
  if (!e || e.j)
    throw new RangeError(it(t));
  return bt(ia(e));
}
function ko(t, e, n) {
  let r = se(G(t));
  if (!r || r.j)
    throw new RangeError(it(t));
  return e ? r.calendar === O && (r = r.isoYear === -271821 && r.isoMonth === 4 ? {
    ...r,
    isoDay: 20,
    ...ct
  } : {
    ...r,
    isoDay: 1,
    ...ct
  }) : n && r.calendar === O && (r = {
    ...r,
    isoYear: Zt
  }), At(r.C ? ia(r) : sa(r));
}
function lu(t, e) {
  const n = Fo(G(e));
  if (n)
    return xo(n), dn(lo(Ee(n)));
  const r = ko(e, 1);
  return dn(fn(t(r.calendar), r));
}
function xo(t) {
  if (t.calendar !== O)
    throw new RangeError(Yt(t.calendar));
}
function du(t, e) {
  const n = Yo(G(e));
  if (n)
    return xo(n), qn(Ee(n));
  const r = ko(e, 0, 1), { calendar: o } = r, i = t(o), [s, a, u] = i.v(r), [c, l] = i.q(s, a), [d, f] = i.G(c, l, u);
  return qn(pt(i.V(d, f, u)), o);
}
function fu(t) {
  let e, n = ((r) => {
    const o = zd.exec(r);
    return o ? (yr(o[10]), ua(o)) : void 0;
  })(G(t));
  if (!n) {
    if (n = se(t), !n)
      throw new RangeError(it(t));
    if (!n.C)
      throw new RangeError(it(t));
    if (n.j)
      throw new RangeError(Yt("Z"));
    xo(n);
  }
  if ((e = Fo(t)) && Fi(e))
    throw new RangeError(it(t));
  if ((e = Yo(t)) && Fi(e))
    throw new RangeError(it(t));
  return zt(Le(n, 1));
}
function hu(t) {
  const e = ((n) => {
    const r = kd.exec(n);
    return r ? ((o) => {
      function i(l, d, f) {
        let h = 0, m = 0;
        if (f && ([h, u] = Ft(u, Ot[f])), l !== void 0) {
          if (a)
            throw new RangeError(Yt(l));
          m = ((g) => {
            const p = parseInt(g);
            if (!Number.isFinite(p))
              throw new RangeError(Yt(g));
            return p;
          })(l), s = 1, d && (u = _o(d) * (Ot[f] / Tt), a = 1);
        }
        return h + m;
      }
      let s = 0, a = 0, u = 0, c = {
        ...Be(C, [i(o[2]), i(o[3]), i(o[4]), i(o[5]), i(o[6], o[7], 5), i(o[8], o[9], 4), i(o[10], o[11], 3)]),
        ...or(u, 2, C)
      };
      if (!s)
        throw new RangeError(Ya(C));
      return jo(o[1]) < 0 && (c = et(c)), c;
    })(r) : void 0;
  })(G(t));
  if (!e)
    throw new RangeError(it(t));
  return L(Te(e));
}
function mu(t) {
  const e = se(t) || Fo(t) || Yo(t);
  return e ? e.calendar : t;
}
function gu(t) {
  const e = se(t);
  return e && (e.timeZone || e.j && Oe || e.offset) || t;
}
function oa(t, e, n = 0, r = 0) {
  const o = Bo(t.timeZone), i = T(o);
  let s;
  return ar(t), s = t.C ? We(i, t, e, n, r, !i.$, t.j) : ne(i, t), yt(s, o, Dr(t.calendar));
}
function ia(t) {
  return aa(at(ar(t)));
}
function sa(t) {
  return aa(pt(Ee(t)));
}
function aa(t) {
  return {
    ...t,
    calendar: Dr(t.calendar)
  };
}
function se(t) {
  const e = Nd.exec(t);
  return e ? ((n) => {
    const r = n[10], o = (r || "").toUpperCase() === "Z";
    return {
      isoYear: ca(n),
      isoMonth: parseInt(n[4]),
      isoDay: parseInt(n[5]),
      ...ua(n.slice(5)),
      ...yr(n[16]),
      C: !!n[6],
      j: o,
      offset: o ? void 0 : r
    };
  })(e) : void 0;
}
function Fo(t) {
  const e = Od.exec(t);
  return e ? ((n) => ({
    isoYear: ca(n),
    isoMonth: parseInt(n[4]),
    isoDay: 1,
    ...yr(n[5])
  }))(e) : void 0;
}
function Yo(t) {
  const e = Rd.exec(t);
  return e ? ((n) => ({
    isoYear: Zt,
    isoMonth: parseInt(n[1]),
    isoDay: parseInt(n[2]),
    ...yr(n[3])
  }))(e) : void 0;
}
function Zo(t, e) {
  const n = Cd.exec(t);
  return n ? ((r, o) => {
    const i = r[4] || r[5];
    if (o && i)
      throw new RangeError(Yt(i));
    return ((s) => {
      if (Math.abs(s) >= x)
        throw new RangeError(kl);
      return s;
    })((xe(r[2]) * Ir + xe(r[3]) * Sr + xe(r[4]) * Tt + _o(r[5] || "")) * jo(r[1]));
  })(n, e) : void 0;
}
function ca(t) {
  const e = jo(t[1]), n = parseInt(t[2] || t[3]);
  if (e < 0 && !n)
    throw new RangeError(Yt(-0));
  return e * n;
}
function ua(t) {
  const e = xe(t[3]);
  return {
    ...ir(_o(t[4] || ""))[0],
    isoHour: xe(t[1]),
    isoMinute: xe(t[2]),
    isoSecond: e === 60 ? 59 : e
  };
}
function yr(t) {
  let e, n;
  const r = [];
  if (t.replace(Pd, (o, i, s) => {
    const a = !!i, [u, c] = s.split("=").reverse();
    if (c) {
      if (c === "u-ca")
        r.push(u), e || (e = a);
      else if (a || /[A-Z]/.test(c))
        throw new RangeError(Yt(o));
    } else {
      if (n)
        throw new RangeError(Yt(o));
      n = u;
    }
    return "";
  }), r.length > 1 && e)
    throw new RangeError(Yt(t));
  return {
    timeZone: n,
    calendar: r[0] || O
  };
}
function _o(t) {
  return parseInt(t.padEnd(9, "0"));
}
function qe(t) {
  return new RegExp(`^${t}$`, "i");
}
function jo(t) {
  return t && t !== "+" ? -1 : 1;
}
function xe(t) {
  return t === void 0 ? 0 : parseInt(t);
}
function pu(t) {
  return Bo(G(t));
}
function Bo(t) {
  const e = $o(t);
  return typeof e == "number" ? bn(e) : e ? ((n) => {
    if (Yd.test(n))
      throw new RangeError($a(n));
    if (Fd.test(n))
      throw new RangeError(Pl);
    return n.toLowerCase().split("/").map((r, o) => (r.length <= 3 || /\d/.test(r)) && !/etc|yap/.test(r) ? r.toUpperCase() : r.replace(/baja|dumont|[a-z]+/g, (i, s) => i.length <= 2 && !o || i === "in" || i === "chat" ? i.toUpperCase() : i.length > 2 || !s ? Pi(i).replace(/island|noronha|murdo|rivadavia|urville/, Pi) : i)).join("/");
  })(t) : Oe;
}
function Qi(t) {
  const e = $o(t);
  return typeof e == "number" ? e : e ? e.resolvedOptions().timeZone : Oe;
}
function $o(t) {
  const e = Zo(t = t.toUpperCase(), 1);
  return e !== void 0 ? e : t !== Oe ? xd(t) : void 0;
}
function la(t, e) {
  return ft(t.epochNanoseconds, e.epochNanoseconds);
}
function da(t, e) {
  return ft(t.epochNanoseconds, e.epochNanoseconds);
}
function vu(t, e, n, r, o, i) {
  const s = t(Nt(i).relativeTo), a = Math.max(ye(r), ye(o));
  if (Ds(C, r, o))
    return 0;
  if (hn(a, s))
    return ft(V(r), V(o));
  if (!s)
    throw new RangeError(Tr);
  const [u, c, l] = pr(e, n, s), d = zo(l), f = vr(l);
  return ft(d(f(c, u, r)), d(f(c, u, o)));
}
function fa(t, e) {
  return Ge(t, e) || Ao(t, e);
}
function Ge(t, e) {
  return Xt(Q(t), Q(e));
}
function Ao(t, e) {
  return Xt(te(t), te(e));
}
function wu(t, e) {
  return !la(t, e);
}
function yu(t, e) {
  return !da(t, e) && !!ha(t.timeZone, e.timeZone) && t.calendar === e.calendar;
}
function bu(t, e) {
  return !fa(t, e) && t.calendar === e.calendar;
}
function Mu(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Eu(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Du(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Tu(t, e) {
  return !Ao(t, e);
}
function ha(t, e) {
  if (t === e)
    return 1;
  try {
    return Qi(t) === Qi(e);
  } catch {
  }
}
function ts(t, e, n, r) {
  const o = Ue(t, r, 3, 5), i = br(e.epochNanoseconds, n.epochNanoseconds, ...o);
  return L(t ? et(i) : i);
}
function es(t, e, n, r, o, i) {
  const s = Er(r.calendar, o.calendar), [a, u, c, l] = Ue(n, i, 5), d = r.epochNanoseconds, f = o.epochNanoseconds, h = ft(f, d);
  let m;
  if (h)
    if (a < 6)
      m = br(d, f, a, u, c, l);
    else {
      const g = e(((w, v) => {
        if (!ha(w, v))
          throw new RangeError(Aa);
        return w;
      })(r.timeZone, o.timeZone)), p = t(s);
      m = ga(p, g, r, o, h, a, i), m = fr(m, f, a, u, c, l, p, r, Us, I(Ro, g));
    }
  else
    m = q;
  return L(n ? et(m) : m);
}
function ns(t, e, n, r, o) {
  const i = Er(n.calendar, r.calendar), [s, a, u, c] = Ue(e, o, 6), l = W(n), d = W(r), f = ft(d, l);
  let h;
  if (f)
    if (s <= 6)
      h = br(l, d, s, a, u, c);
    else {
      const m = t(i);
      h = pa(m, n, r, f, s, o), h = fr(h, d, s, a, u, c, m, n, W, No);
    }
  else
    h = q;
  return L(e ? et(h) : h);
}
function rs(t, e, n, r, o) {
  const i = Er(n.calendar, r.calendar);
  return ma(e, () => t(i), n, r, ...Ue(e, o, 6, 9, 6));
}
function os(t, e, n, r, o) {
  const i = Er(n.calendar, r.calendar), s = Ue(e, o, 9, 9, 8), a = t(i), u = fn(a, n), c = fn(a, r);
  return u.isoYear === c.isoYear && u.isoMonth === c.isoMonth && u.isoDay === c.isoDay ? L(q) : ma(e, () => a, pt(u), pt(c), ...s, 8);
}
function ma(t, e, n, r, o, i, s, a, u = 6) {
  const c = W(n), l = W(r);
  if (c === void 0 || l === void 0)
    throw new RangeError(le);
  let d;
  if (ft(l, c))
    if (o === 6)
      d = br(c, l, o, i, s, a);
    else {
      const f = e();
      d = f.N(n, r, o), i === u && s === 1 || (d = fr(d, l, o, i, s, a, f, n, W, gr));
    }
  else
    d = q;
  return L(t ? et(d) : d);
}
function is(t, e, n, r) {
  const [o, i, s, a] = Ue(t, r, 5, 5), u = ee(Lo(e, n), yn(i, s), a), c = {
    ...q,
    ...wr(u, o)
  };
  return L(t ? et(c) : c);
}
function Su(t, e, n, r, o, i) {
  const s = ft(r.epochNanoseconds, n.epochNanoseconds);
  return s ? o < 6 ? va(n.epochNanoseconds, r.epochNanoseconds, o) : ga(e, t, n, r, s, o, i) : q;
}
function Iu(t, e, n, r, o) {
  const i = W(e), s = W(n), a = ft(s, i);
  return a ? r <= 6 ? va(i, s, r) : pa(t, e, n, a, r, o) : q;
}
function ga(t, e, n, r, o, i, s) {
  const [a, u, c] = ((f, h, m, g) => {
    function p() {
      return P = {
        ...De(y, D++ * -g),
        ...v
      }, k = Mn(f, P), ft(b, k) === -g;
    }
    const w = mt(h, f), v = wt(Mt, w), y = mt(m, f), b = m.epochNanoseconds;
    let D = 0;
    const S = Lo(w, y);
    let P, k;
    if (Math.sign(S) === -g && D++, p() && (g === -1 || p()))
      throw new RangeError(He);
    const M = It(St(k, b));
    return [w, P, M];
  })(e, n, r, o);
  var l, d;
  return {
    ...i === 6 ? (l = a, d = u, {
      ...q,
      days: wa(l, d)
    }) : t.N(a, u, i, s),
    ...wr(c)
  };
}
function pa(t, e, n, r, o, i) {
  const [s, a, u] = ((c, l, d) => {
    let f = l, h = Lo(c, l);
    return Math.sign(h) === -d && (f = De(l, -d), h += x * d), [c, f, h];
  })(e, n, r);
  return {
    ...t.N(s, a, o, i),
    ...wr(u)
  };
}
function br(t, e, n, r, o, i) {
  return {
    ...q,
    ...Ve(hr(St(t, e), r, o, i), n)
  };
}
function va(t, e, n) {
  return {
    ...q,
    ...Ve(St(t, e), n)
  };
}
function wa(t, e) {
  return Mr(Q(t), Q(e));
}
function Mr(t, e) {
  return Math.trunc((e - t) / st);
}
function Lo(t, e) {
  return te(e) - te(t);
}
function Er(t, e) {
  if (t !== e)
    throw new RangeError(Ba);
  return t;
}
function ya(t) {
  return this.m(t)[0];
}
function ba(t) {
  return this.m(t)[1];
}
function Uo(t) {
  const [e] = this.v(t);
  return Mr(this.p(e), Q(t)) + 1;
}
function Wo(t) {
  const e = Zd.exec(t);
  if (!e)
    throw new RangeError(zl(t));
  return [parseInt(e[1]), !!e[2]];
}
function En(t, e) {
  return "M" + vt(t) + (e ? "L" : "");
}
function Xn(t, e, n) {
  return t + (e || n && t >= n ? 1 : 0);
}
function Vo(t, e) {
  return t - (e && t >= e ? 1 : 0);
}
function Ma(t, e) {
  return (e + t) * (Math.sign(e) || 1) || 0;
}
function Ar(t) {
  return Ja[Da(t)];
}
function Ea(t) {
  return ql[Da(t)];
}
function Da(t) {
  return be(t.id || O);
}
function Ou(t) {
  function e(o) {
    return ((i, s) => ({
      ...Ta(i, s),
      o: i.month,
      day: parseInt(i.day)
    }))(ho(n, o), r);
  }
  const n = mi(t), r = be(t);
  return {
    id: t,
    h: Ru(e),
    l: Nu(e)
  };
}
function Ru(t) {
  return dt((e) => {
    const n = Q(e);
    return t(n);
  }, WeakMap);
}
function Nu(t) {
  const e = t(0).year - od;
  return dt((n) => {
    let r, o = $e(n - e), i = 0;
    const s = [], a = [];
    do
      o += 400 * st;
    while ((r = t(o)).year <= n);
    do
      if (o += (1 - r.day) * st, r.year === n && (s.push(o), a.push(r.o)), o -= st, ++i > 100 || o < -864e13)
        throw new RangeError(He);
    while ((r = t(o)).year >= n);
    return {
      i: s.reverse(),
      u: La(a.reverse())
    };
  });
}
function Ta(t, e) {
  let n, r, o = Sa(t);
  if (t.era) {
    const i = Ja[e], s = Ka[e] || {};
    i !== void 0 && (n = e === "islamic" ? "ah" : t.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n === "ad" || n === "a" ? n = "ce" : n === "beforeroc" && (n = "broc"), n = s[n] || n, r = o, o = Ma(r, i[n] || 0));
  }
  return {
    era: n,
    eraYear: r,
    year: o
  };
}
function Sa(t) {
  return parseInt(t.relatedYear || t.year);
}
function Jn(t) {
  const { year: e, o: n, day: r } = this.h(t), { u: o } = this.l(e);
  return [e, o[n] + 1, r];
}
function mn(t, e = 1, n = 1) {
  return this.l(t).i[e - 1] + (n - 1) * st;
}
function Ia(t, e) {
  const n = jn.call(this, t);
  return [Vo(e, n), n === e];
}
function jn(t) {
  const e = as(this, t), n = as(this, t - 1), r = e.length;
  if (r > n.length) {
    const o = Ea(this);
    if (o < 0)
      return -o;
    for (let i = 0; i < r; i++)
      if (e[i] !== n[i])
        return i + 1;
  }
}
function Fn(t) {
  return Mr(mn.call(this, t), mn.call(this, t + 1));
}
function ss(t, e) {
  const { i: n } = this.l(t);
  let r = e + 1, o = n;
  return r > n.length && (r = 1, o = this.l(t + 1).i), Mr(n[e - 1], o[r - 1]);
}
function Yn(t) {
  return this.l(t).i.length;
}
function Oa(t) {
  const e = this.h(t);
  return [e.era, e.eraYear];
}
function as(t, e) {
  return Object.keys(t.l(e).u);
}
function Dn(t) {
  return Dr(G(t));
}
function Dr(t) {
  if ((t = t.toLowerCase()) !== O && t !== Xe) {
    const e = mi(t).resolvedOptions().calendar;
    if (be(t) !== be(e))
      throw new RangeError(ja(t));
    return e;
  }
  return t;
}
function be(t) {
  return t === "islamicc" && (t = "islamic"), t.split("-")[0];
}
function Ra(t, e) {
  return (n) => n === O ? t : n === Xe || n === re ? Object.assign(Object.create(t), {
    id: n
  }) : Object.assign(Object.create(e), _d(n));
}
function zu(t, e, n, r) {
  const o = ae(n, r, Wt, [], qa);
  if (o.timeZone !== void 0) {
    const i = n.F(o), s = Tn(o), a = t(o.timeZone);
    return {
      epochNanoseconds: We(e(a), {
        ...i,
        ...s
      }, o.offset !== void 0 ? Se(o.offset) : void 0),
      timeZone: a
    };
  }
  return {
    ...n.F(o),
    ...ct
  };
}
function Cu(t, e, n, r, o, i) {
  const s = ae(n, o, Wt, Wa, qa), a = t(s.timeZone), [u, c, l] = cr(i), d = n.F(s, dr(u)), f = Tn(s, u);
  return yt(We(e(a), {
    ...d,
    ...f
  }, s.offset !== void 0 ? Se(s.offset) : void 0, c, l), a, r);
}
function Pu(t, e, n) {
  const r = ae(t, e, Wt, [], Ut), o = R(n);
  return bt(at({
    ...t.F(r, dr(o)),
    ...Tn(r, o)
  }));
}
function ku(t, e, n, r = []) {
  const o = ae(t, e, Wt, r);
  return t.F(o, n);
}
function xu(t, e, n, r) {
  const o = ae(t, e, Qo, r);
  return t.K(o, n);
}
function Fu(t, e, n, r) {
  const o = ae(t, n, Wt, In);
  return e && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = Zt), t._(o, r);
}
function Yu(t, e) {
  return zt(Tn(ht(t, Vr, [], 1), R(e)));
}
function Zu(t) {
  const e = ht(t, ti);
  return L(Te({
    ...q,
    ...e
  }));
}
function ae(t, e, n, r = [], o = []) {
  return ht(e, [...t.fields(n), ...o].sort(), r);
}
function ht(t, e, n, r = !n) {
  const o = {};
  let i, s = 0;
  for (const a of e) {
    if (a === i)
      throw new RangeError(El(a));
    if (a === "constructor" || a === "__proto__")
      throw new RangeError(Ml(a));
    let u = t[a];
    if (u !== void 0)
      s = 1, cs[a] && (u = cs[a](u, a)), o[a] = u;
    else if (n) {
      if (n.includes(a))
        throw new TypeError(Go(a));
      o[a] = Xa[a];
    }
    i = a;
  }
  if (r && !s)
    throw new TypeError(Ya(e));
  return o;
}
function Tn(t, e) {
  return Le(gi({
    ...Xa,
    ...t
  }), e);
}
function _u(t, e, n, r, o) {
  const { calendar: i, timeZone: s } = n, a = t(i), u = e(s), c = [...a.fields(Wt), ...Va].sort(), l = ((w) => {
    const v = mt(w, T), y = bn(v.offsetNanoseconds), b = Nr(w.calendar), [D, S, P] = b.v(v), [k, M] = b.q(D, S), N = En(k, M);
    return {
      ...Vd(v),
      year: D,
      monthCode: N,
      day: P,
      offset: y
    };
  })(n), d = ht(r, c), f = a.k(l, d), h = {
    ...l,
    ...d
  }, [m, g, p] = cr(o, 2);
  return yt(We(u, {
    ...a.F(f, dr(m)),
    ...Le(gi(h), m)
  }, Se(h.offset), g, p), s, i);
}
function ju(t, e, n, r) {
  const o = t(e.calendar), i = [...o.fields(Wt), ...Ut].sort(), s = {
    ...za(a = e),
    hour: a.isoHour,
    minute: a.isoMinute,
    second: a.isoSecond,
    millisecond: a.isoMillisecond,
    microsecond: a.isoMicrosecond,
    nanosecond: a.isoNanosecond
  };
  var a;
  const u = ht(n, i), c = R(r), l = o.k(s, u), d = {
    ...s,
    ...u
  };
  return bt(at({
    ...o.F(l, dr(c)),
    ...Le(gi(d), c)
  }));
}
function Bu(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(Wt).sort(), s = za(e), a = ht(n, i), u = o.k(s, a);
  return o.F(u, r);
}
function $u(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(Qo).sort(), s = ((c) => {
    const l = Nr(c.calendar), [d, f] = l.v(c), [h, m] = l.q(d, f);
    return {
      year: d,
      monthCode: En(h, m)
    };
  })(e), a = ht(n, i), u = o.k(s, a);
  return o.K(u, r);
}
function Au(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(Wt).sort(), s = ((c) => {
    const l = Nr(c.calendar), [d, f, h] = l.v(c), [m, g] = l.q(d, f);
    return {
      monthCode: En(m, g),
      day: h
    };
  })(e), a = ht(n, i), u = o.k(s, a);
  return o._(u, r);
}
function Lu(t, e, n) {
  return zt(((r, o, i) => Tn({
    ...wt(Vr, r),
    ...ht(o, Vr)
  }, R(i)))(t, e, n));
}
function Uu(t, e) {
  return L((n = t, r = e, Te({
    ...n,
    ...ht(r, ti)
  })));
  var n, r;
}
function Na(t, e, n, r, o) {
  e = wt(n = t.fields(n), e), r = ht(r, o = t.fields(o), []);
  let i = t.k(e, r);
  return i = ht(i, [...n, ...o].sort(), []), t.F(i);
}
function Pr(t, e) {
  const n = Ar(t), r = Ka[t.id || ""] || {};
  let { era: o, eraYear: i, year: s } = e;
  if (o !== void 0 || i !== void 0) {
    if (o === void 0 || i === void 0)
      throw new TypeError(Il);
    if (!n)
      throw new RangeError(Sl);
    const a = n[r[o] || o];
    if (a === void 0)
      throw new RangeError(Rl(o));
    const u = Ma(i, a);
    if (s !== void 0 && s !== u)
      throw new RangeError(Ol);
    s = u;
  } else if (s === void 0)
    throw new TypeError(Nl(n));
  return s;
}
function Zn(t, e, n, r) {
  let { month: o, monthCode: i } = e;
  if (i !== void 0) {
    const s = ((a, u, c, l) => {
      const d = a.L(c), [f, h] = Wo(u);
      let m = Xn(f, h, d);
      if (h) {
        const g = Ea(a);
        if (g === void 0)
          throw new RangeError(tn);
        if (g > 0) {
          if (m > g)
            throw new RangeError(tn);
          if (d === void 0) {
            if (l === 1)
              throw new RangeError(tn);
            m--;
          }
        } else {
          if (m !== -g)
            throw new RangeError(tn);
          if (d === void 0 && l === 1)
            throw new RangeError(tn);
        }
      }
      return m;
    })(t, i, n, r);
    if (o !== void 0 && o !== s)
      throw new RangeError(Cl);
    o = s, r = 1;
  } else if (o === void 0)
    throw new TypeError(_a);
  return _t("month", o, 1, t.B(n), r);
}
function kr(t, e, n, r, o) {
  return rt(e, "day", 1, t.U(r, n), o);
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
  const e = Nr(t.calendar), [n, r, o] = e.v(t), [i, s] = e.q(n, r);
  return {
    year: n,
    monthCode: En(i, s),
    day: o
  };
}
function Wu(t) {
  return $t(Rt(co(io(t))));
}
function Vu(t, e, n, r, o = O) {
  return yt(Rt(co(io(n))), e(r), t(o));
}
function qu(t, e, n, r, o = 0, i = 0, s = 0, a = 0, u = 0, c = 0, l = O) {
  return bt(at(ar(jt(K, Be(Or, [e, n, r, o, i, s, a, u, c])))), t(l));
}
function Gu(t, e, n, r, o = O) {
  return At(pt(Ee(jt(K, {
    isoYear: e,
    isoMonth: n,
    isoDay: r
  }))), t(o));
}
function Hu(t, e, n, r = O, o = 1) {
  const i = K(e), s = K(n), a = t(r);
  return dn(lo(Ee({
    isoYear: i,
    isoMonth: s,
    isoDay: K(o)
  })), a);
}
function Xu(t, e, n, r = O, o = Zt) {
  const i = K(e), s = K(n), a = t(r);
  return qn(pt(Ee({
    isoYear: K(o),
    isoMonth: i,
    isoDay: s
  })), a);
}
function Ju(t = 0, e = 0, n = 0, r = 0, o = 0, i = 0) {
  return zt(Le(jt(K, Be(Mt, [t, e, n, r, o, i])), 1));
}
function Ku(t = 0, e = 0, n = 0, r = 0, o = 0, i = 0, s = 0, a = 0, u = 0, c = 0) {
  return L(Te(jt(so, Be(C, [t, e, n, r, o, i, s, a, u, c]))));
}
function Qu(t, e, n = O) {
  return yt(t.epochNanoseconds, e, n);
}
function tl(t) {
  return $t(t.epochNanoseconds);
}
function Ca(t, e) {
  return bt(mt(e, t));
}
function Pa(t, e) {
  return At(mt(e, t));
}
function ka(t, e) {
  return zt(mt(e, t));
}
function el(t, e, n, r) {
  const o = ((i, s, a, u) => {
    const c = ((l) => ac(Nt(l)))(u);
    return Mn(i(s), a, c);
  })(t, n, e, r);
  return yt(Rt(o), n, e.calendar);
}
function nl(t, e, n, r, o) {
  const i = t(o.timeZone), s = o.plainTime, a = s !== void 0 ? e(s) : void 0, u = n(i);
  let c;
  return c = a ? Mn(u, {
    ...r,
    ...a
  }) : ne(u, {
    ...r,
    ...ct
  }), yt(c, i, r.calendar);
}
function rl(t, e = ct) {
  return bt(at({
    ...t,
    ...e
  }));
}
function ol(t, e, n) {
  return ((r, o) => {
    const i = ae(r, o, Ga);
    return r.K(i, void 0);
  })(t(e.calendar), n);
}
function il(t, e, n) {
  return ((r, o) => {
    const i = ae(r, o, Ha);
    return r._(i);
  })(t(e.calendar), n);
}
function sl(t, e, n, r) {
  return ((o, i, s) => Na(o, i, Ga, wn(s), In))(t(e.calendar), n, r);
}
function al(t, e, n, r) {
  return ((o, i, s) => Na(o, i, Ha, wn(s), Xo))(t(e.calendar), n, r);
}
function cl(t) {
  return $t(Rt(Wn(so(t), Lt)));
}
function ul(t) {
  return $t(Rt(co(io(t))));
}
function Ie(t, e, n) {
  const r = new Set(n);
  return (o, i) => {
    const s = n && Ci(o, n);
    if (!Ci(o = ((a, u) => {
      const c = {};
      for (const l in u)
        a.has(l) || (c[l] = u[l]);
      return c;
    })(r, o), t)) {
      if (i && s)
        throw new TypeError("Invalid formatting options");
      o = {
        ...e,
        ...o
      };
    }
    return n && (o.timeZone = Oe, ["full", "long"].includes(o.J) && (o.J = "medium")), o;
  };
}
function ce(t, e = xa, n = 0) {
  const [r, , , o] = t;
  return (i, s = ff, ...a) => {
    const u = e(o && o(...a), i, s, r, n), c = u.resolvedOptions();
    return [u, ...ll(t, c, a)];
  };
}
function xa(t, e, n, r, o) {
  if (n = r(n, o), t) {
    if (n.timeZone !== void 0)
      throw new TypeError(Ll);
    n.timeZone = t;
  }
  return new Jt(e, n);
}
function ll(t, e, n) {
  const [, r, o] = t;
  return n.map((i) => (i.calendar && ((s, a, u) => {
    if ((u || s !== O) && s !== a)
      throw new RangeError(Ba);
  })(i.calendar, e.calendar, o), r(i, e)));
}
function dl(t, e, n) {
  const r = e.timeZone, o = t(r), i = {
    ...mt(e, o),
    ...n || ct
  };
  let s;
  return s = n ? We(o, i, i.offsetNanoseconds, 2) : ne(o, i), yt(s, r, e.calendar);
}
function fl(t, e = ct) {
  return bt(at({
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
function Fr(t) {
  const e = Lr();
  return Ae(e, t.R(e));
}
function Lr() {
  return Wn(Date.now(), Lt);
}
function Qe() {
  return us || (us = new Jt().resolvedOptions().timeZone);
}
const ml = (t, e) => `Non-integer ${t}: ${e}`, gl = (t, e) => `Non-positive ${t}: ${e}`, pl = (t, e) => `Non-finite ${t}: ${e}`, vl = (t) => `Cannot convert bigint to ${t}`, wl = (t) => `Invalid bigint: ${t}`, yl = "Cannot convert Symbol to string", bl = "Invalid object", Fa = (t, e, n, r, o) => o ? Fa(t, o[e], o[n], o[r]) : ue(t, e) + `; must be between ${n}-${r}`, ue = (t, e) => `Invalid ${t}: ${e}`, Go = (t) => `Missing ${t}`, Ml = (t) => `Invalid field ${t}`, El = (t) => `Duplicate field ${t}`, Ya = (t) => "No valid fields: " + t.join(), Dl = "Invalid bag", Za = (t, e, n) => ue(t, e) + "; must be " + Object.keys(n).join(), Tl = "Cannot use valueOf", Ur = "Invalid calling context", Sl = "Forbidden era/eraYear", Il = "Mismatching era/eraYear", Ol = "Mismatching year/eraYear", Rl = (t) => `Invalid era: ${t}`, Nl = (t) => "Missing year" + (t ? "/era/eraYear" : ""), zl = (t) => `Invalid monthCode: ${t}`, Cl = "Mismatching month/monthCode", _a = "Missing month/monthCode", tn = "Invalid leap month", He = "Invalid protocol results", ja = (t) => ue("Calendar", t), Ba = "Mismatching Calendars", $a = (t) => ue("TimeZone", t), Aa = "Mismatching TimeZones", Pl = "Forbidden ICU TimeZone", kl = "Out-of-bounds offset", xl = "Out-of-bounds TimeZone gap", Fl = "Invalid TimeZone offset", Yl = "Ambiguous offset", le = "Out-of-bounds date", Zl = "Out-of-bounds duration", _l = "Cannot mix duration signs", Tr = "Missing relativeTo", jl = "Cannot use large units", Bl = "Required smallestUnit or largestUnit", $l = "smallestUnit > largestUnit", it = (t) => `Cannot parse: ${t}`, Yt = (t) => `Invalid substring: ${t}`, Al = (t) => `Cannot format ${t}`, Yr = "Mismatching types for formatting", Ll = "Cannot specify TimeZone", La = /* @__PURE__ */ I(nr, (t, e) => e), _e = /* @__PURE__ */ I(nr, (t, e, n) => n), vt = /* @__PURE__ */ I(Un, 2), Wr = {
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
}, Ho = /* @__PURE__ */ Object.keys(Wr), st = 864e5, Ua = 1e3, Sn = 1e3, Lt = 1e6, Tt = 1e9, Sr = 6e10, Ir = 36e11, x = 864e11, Ot = [1, Sn, Lt, Tt, Sr, Ir, x], Ut = /* @__PURE__ */ Ho.slice(0, 6), Vr = /* @__PURE__ */ vn(Ut), Ul = ["offset"], Wa = ["timeZone"], Va = /* @__PURE__ */ Ut.concat(Ul), qa = /* @__PURE__ */ Va.concat(Wa), qr = ["era", "eraYear"], Wl = /* @__PURE__ */ qr.concat(["year"]), Xo = ["year"], Jo = ["monthCode"], Ko = /* @__PURE__ */ ["month"].concat(Jo), In = ["day"], Qo = /* @__PURE__ */ Ko.concat(Xo), Ga = /* @__PURE__ */ Jo.concat(Xo), Wt = /* @__PURE__ */ In.concat(Qo), Vl = /* @__PURE__ */ In.concat(Ko), Ha = /* @__PURE__ */ In.concat(Jo), Xa = /* @__PURE__ */ _e(Ut, 0), O = "iso8601", Xe = "gregory", re = "japanese", Ja = {
  [Xe]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [re]: {
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
}, Ka = {
  [Xe]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [re]: {
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
}, G = /* @__PURE__ */ I(ro, "string"), Gl = /* @__PURE__ */ I(ro, "boolean"), Hl = /* @__PURE__ */ I(ro, "number"), C = /* @__PURE__ */ Ho.map((t) => t + "s"), ti = /* @__PURE__ */ vn(C), Xl = /* @__PURE__ */ C.slice(0, 6), Qa = /* @__PURE__ */ C.slice(6), Jl = /* @__PURE__ */ Qa.slice(1), Kl = /* @__PURE__ */ La(C), q = /* @__PURE__ */ _e(C, 0), ei = /* @__PURE__ */ _e(Xl, 0), ni = /* @__PURE__ */ I(Ts, C), Mt = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], ri = ["isoDay", "isoMonth", "isoYear"], Or = /* @__PURE__ */ Mt.concat(ri), oi = /* @__PURE__ */ vn(ri), tc = /* @__PURE__ */ vn(Mt), Ql = /* @__PURE__ */ vn(Or), ct = /* @__PURE__ */ _e(tc, 0), td = /* @__PURE__ */ I(Ts, Or), ec = 1e8, ed = ec * st, nd = [ec, 0], rd = [-1e8, 0], gn = 275760, pn = -271821, Jt = Intl.DateTimeFormat, nc = "en-GB", od = 1970, Zt = 1972, Vt = 12, id = /* @__PURE__ */ $e(1868, 9, 8), sd = /* @__PURE__ */ dt(Bc, WeakMap), Kn = "smallestUnit", Gr = "unit", on = "roundingIncrement", Zr = "fractionalSecondDigits", rc = "relativeTo", _r = "direction", oc = {
  constrain: 0,
  reject: 1
}, ad = /* @__PURE__ */ Object.keys(oc), cd = {
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
}, On = /* @__PURE__ */ I(bo, Kn), ic = /* @__PURE__ */ I(bo, "largestUnit"), gd = /* @__PURE__ */ I(bo, Gr), sc = /* @__PURE__ */ I(oe, "overflow", oc), ac = /* @__PURE__ */ I(oe, "disambiguation", cd), pd = /* @__PURE__ */ I(oe, "offset", ud), ii = /* @__PURE__ */ I(oe, "calendarName", ld), vd = /* @__PURE__ */ I(oe, "timeZoneName", dd), wd = /* @__PURE__ */ I(oe, "offset", fd), Rn = /* @__PURE__ */ I(oe, "roundingMode", hd), si = "PlainYearMonth", ai = "PlainMonthDay", Nn = "PlainDate", Je = "PlainDateTime", ci = "PlainTime", de = "ZonedDateTime", ui = "Instant", li = "Duration", yd = [Math.floor, (t) => xn(t) ? Math.floor(t) : Math.round(t), Math.ceil, (t) => xn(t) ? Math.ceil(t) : Math.round(t), Math.trunc, (t) => xn(t) ? Math.trunc(t) || 0 : Math.round(t), (t) => t < 0 ? Math.floor(t) : Math.ceil(t), (t) => Math.sign(t) * Math.round(Math.abs(t)) || 0, (t) => xn(t) ? (t = Math.trunc(t) || 0) + t % 2 : Math.round(t)], Oe = "UTC", Bn = 5184e3, bd = /* @__PURE__ */ Vn(1847), Md = /* @__PURE__ */ Vn(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), Ed = /0+$/, mt = /* @__PURE__ */ dt(eu, WeakMap), Dd = 2 ** 32 - 1, T = /* @__PURE__ */ dt((t) => {
  const e = $o(t);
  return typeof e == "object" ? new Sd(e) : new Td(e || 0);
});
class Td {
  constructor(e) {
    this.$ = e;
  }
  R() {
    return this.$;
  }
  I(e) {
    return ((n) => {
      const r = W({
        ...n,
        ...ct
      });
      if (!r || Math.abs(r[0]) > 1e8)
        throw new RangeError(le);
    })(e), [fo(e, this.$)];
  }
  O() {
  }
}
class Sd {
  constructor(e) {
    this.nn = ((n) => {
      function r(c) {
        const l = ln(c, a, u), [d, f] = Ki(l), h = i(d), m = i(f);
        return h === m ? h : o(s(d, f), h, m, c);
      }
      function o(c, l, d, f) {
        let h, m;
        for (; (f === void 0 || (h = f < c[0] ? l : f >= c[1] ? d : void 0) === void 0) && (m = c[1] - c[0]); ) {
          const g = c[0] + Math.floor(m / 2);
          n(g) === d ? c[1] = g : c[0] = g + 1;
        }
        return h;
      }
      const i = dt(n), s = dt(iu);
      let a = bd, u = Md;
      return {
        tn(c) {
          const l = r(c - 86400), d = r(c + 86400), f = c - l, h = c - d;
          if (l === d)
            return [f];
          const m = r(f);
          return m === r(h) ? [c - m] : l > d ? [f, h] : [];
        },
        rn: r,
        O(c, l) {
          const d = ln(c, a, u);
          let [f, h] = Ki(d);
          const m = Bn * l, g = l < 0 ? () => h > a || (a = d, 0) : () => f < u || (u = d, 0);
          for (; g(); ) {
            const p = i(f), w = i(h);
            if (p !== w) {
              const v = s(f, h);
              o(v, p, w);
              const y = v[0];
              if ((Xt(y, c) || 1) === l)
                return y;
            }
            f += m, h += m;
          }
        }
      };
    })(/* @__PURE__ */ ((n) => (r) => {
      const o = ho(n, r * Ua);
      return Vn(Sa(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - r;
    })(e));
  }
  R(e) {
    return this.nn.rn(((n) => xi(n)[0])(e)) * Tt;
  }
  I(e) {
    const [n, r] = [Vn((o = e).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * Lt + o.isoMicrosecond * Sn + o.isoNanosecond];
    var o;
    return this.nn.tn(n).map((i) => Rt(we(Wn(i, Tt), r)));
  }
  O(e, n) {
    const [r, o] = xi(e), i = this.nn.O(r + (n > 0 || o ? 1 : 0), n);
    if (i !== void 0)
      return Wn(i, Tt);
  }
}
const di = "([+-])", $n = "(?:[.,](\\d{1,9}))?", cc = `(?:(?:${di}(\\d{6}))|(\\d{4}))-?(\\d{2})`, fi = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + $n + ")?)?", hi = di + fi, Id = cc + "-?(\\d{2})(?:[T ]" + fi + "(Z|" + hi + ")?)?", uc = "\\[(!?)([^\\]]*)\\]", Rr = `((?:${uc}){0,9})`, Od = /* @__PURE__ */ qe(cc + Rr), Rd = /* @__PURE__ */ qe("(?:--)?(\\d{2})-?(\\d{2})" + Rr), Nd = /* @__PURE__ */ qe(Id + Rr), zd = /* @__PURE__ */ qe("T?" + fi + "(?:" + hi + ")?" + Rr), Cd = /* @__PURE__ */ qe(hi), Pd = /* @__PURE__ */ new RegExp(uc, "g"), kd = /* @__PURE__ */ qe(`${di}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${$n}H)?(?:(\\d+)${$n}M)?(?:(\\d+)${$n}S)?)?`), xd = /* @__PURE__ */ dt((t) => new Jt(nc, {
  timeZone: t,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
})), Fd = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Yd = /[^\w\/:+-]+/, Zd = /^M(\d{2})(L?)$/, _d = /* @__PURE__ */ dt(Ou), mi = /* @__PURE__ */ dt((t) => new Jt(nc, {
  calendar: t,
  timeZone: Oe,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
})), lc = {
  P(t, e, n) {
    const r = R(n);
    let o, { years: i, months: s, weeks: a, days: u } = e;
    if (u += V(e, 5)[0], i || s)
      o = ((c, l, d, f, h) => {
        let [m, g, p] = c.v(l);
        if (d) {
          const [w, v] = c.q(m, g);
          m += d, g = Xn(w, v, c.L(m)), g = _t("month", g, 1, c.B(m), h);
        }
        return f && ([m, g] = c.un(m, g, f)), p = _t("day", p, 1, c.U(m, g), h), c.p(m, g, p);
      })(this, t, i, s, r);
    else {
      if (!a && !u)
        return t;
      o = Q(t);
    }
    if (o === void 0)
      throw new RangeError(le);
    return o += (7 * a + u) * st, pt(sr(o));
  },
  N(t, e, n) {
    if (n <= 7) {
      let u = 0, c = wa({
        ...t,
        ...ct
      }, {
        ...e,
        ...ct
      });
      return n === 7 && ([u, c] = Qt(c, 7)), {
        ...q,
        weeks: u,
        days: c
      };
    }
    const r = this.v(t), o = this.v(e);
    let [i, s, a] = ((u, c, l, d, f, h, m) => {
      let g = f - c, p = h - l, w = m - d;
      if (g || p) {
        const v = Math.sign(g || p);
        let y = u.U(f, h), b = 0;
        if (Math.sign(w) === -v) {
          const D = y;
          [f, h] = u.un(f, h, -v), g = f - c, p = h - l, y = u.U(f, h), b = v < 0 ? -D : y;
        }
        if (w = m - Math.min(d, y) + b, g) {
          const [D, S] = u.q(c, l), [P, k] = u.q(f, h);
          if (p = P - D || Number(k) - Number(S), Math.sign(p) === -v) {
            const M = v < 0 && -u.B(f);
            g = (f -= v) - c, p = h - Xn(D, S, u.L(f)) + (M || u.B(f));
          }
        }
      }
      return [g, p, w];
    })(this, ...r, ...o);
    return n === 8 && (s += this.cn(i, r[0]), i = 0), {
      ...q,
      years: i,
      months: s,
      days: a
    };
  },
  F(t, e) {
    const n = R(e), r = Pr(this, t), o = Zn(this, t, r, n), i = kr(this, t, o, r, n);
    return At(pt(this.V(r, o, i)), this.id || O);
  },
  K(t, e) {
    const n = R(e), r = Pr(this, t), o = Zn(this, t, r, n);
    return dn(lo(this.V(r, o, 1)), this.id || O);
  },
  _(t, e) {
    const n = R(e);
    let r, o, i, s = t.eraYear !== void 0 || t.year !== void 0 ? Pr(this, t) : void 0;
    const a = !this.id;
    if (s === void 0 && a && (s = Zt), s !== void 0) {
      const d = Zn(this, t, s, n);
      r = kr(this, t, d, s, n);
      const f = this.L(s);
      o = Vo(d, f), i = d === f;
    } else {
      if (t.monthCode === void 0)
        throw new TypeError(_a);
      if ([o, i] = Wo(t.monthCode), this.id && this.id !== Xe && this.id !== re)
        if (this.id && be(this.id) === "coptic" && n === 0) {
          const d = i || o !== 13 ? 30 : 6;
          r = t.day, r = ln(r, 1, d);
        } else if (this.id && be(this.id) === "chinese" && n === 0) {
          const d = !i || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
          r = t.day, r = ln(r, 1, d);
        } else
          r = t.day;
      else
        r = kr(this, t, Zn(this, t, Zt, n), Zt, n);
    }
    const u = this.G(o, i, r);
    if (!u)
      throw new RangeError("Cannot guess year");
    const [c, l] = u;
    return qn(pt(this.V(c, l, r)), this.id || O);
  },
  fields(t) {
    return Ar(this) && t.includes("year") ? [...t, ...qr] : t;
  },
  k(t, e) {
    const n = Object.assign(/* @__PURE__ */ Object.create(null), t);
    return xr(n, e, Ko), Ar(this) && (xr(n, e, Wl), this.id === re && xr(n, e, Vl, qr)), n;
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
  dayOfYear: Uo,
  era(t) {
    return this.hn(t)[0];
  },
  eraYear(t) {
    return this.hn(t)[1];
  },
  monthCode(t) {
    const [e, n] = this.v(t), [r, o] = this.q(e, n);
    return En(r, o);
  },
  dayOfWeek: Zs,
  daysInWeek() {
    return 7;
  }
}, jd = {
  v: mo,
  hn: _s,
  q: ks
}, Bd = {
  dayOfYear: Uo,
  v: mo,
  p: $e
}, $d = /* @__PURE__ */ Object.assign({}, Bd, {
  weekOfYear: ya,
  yearOfWeek: ba,
  m(t) {
    function e(h) {
      return (7 - h < r ? 7 : 0) - h;
    }
    function n(h) {
      const m = Ys(f + h), g = h || 1, p = e(rn(u + m * g, 7));
      return l = (m + (p - c) * g) / 7;
    }
    const r = this.id ? 1 : 4, o = Zs(t), i = this.dayOfYear(t), s = rn(o - 1, 7), a = i - 1, u = rn(s - a, 7), c = e(u);
    let l, d = Math.floor((a - c) / 7) + 1, f = t.isoYear;
    return d ? d > n(0) && (d = 1, f++) : (d = n(-1), f--), [d, f, l];
  }
}), Ad = /* @__PURE__ */ Object.assign({}, lc, $d, {
  v: mo,
  hn: _s,
  q: ks,
  G(t, e) {
    if (!e)
      return [Zt, t];
  },
  sn: go,
  L() {
  },
  B: xs,
  cn: (t) => t * Vt,
  U: Fs,
  fn: Ys,
  V: (t, e, n) => ({
    isoYear: t,
    isoMonth: e,
    isoDay: n
  }),
  p: $e,
  un: (t, e, n) => (t += rr(n, Vt), (e += eo(n, Vt)) < 1 ? (t--, e += Vt) : e > Vt && (t++, e -= Vt), [t, e]),
  year(t) {
    return t.isoYear;
  },
  month(t) {
    return t.isoMonth;
  },
  day: (t) => t.isoDay
}), Ld = {
  v: Jn,
  hn: Oa,
  q: Ia
}, Ud = {
  dayOfYear: Uo,
  v: Jn,
  p: mn,
  weekOfYear: ya,
  yearOfWeek: ba,
  m() {
    return [];
  }
}, Wd = /* @__PURE__ */ Object.assign({}, lc, Ud, {
  v: Jn,
  hn: Oa,
  q: Ia,
  G(t, e, n) {
    const r = this.id && be(this.id) === "chinese" ? ((c, l, d) => {
      if (l)
        switch (c) {
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
    let [o, i, s] = Jn.call(this, {
      isoYear: r,
      isoMonth: Vt,
      isoDay: 31
    });
    const a = jn.call(this, o), u = i === a;
    (Xt(t, Vo(i, a)) || Xt(Number(e), Number(u)) || Xt(n, s)) === 1 && o--;
    for (let c = 0; c < 100; c++) {
      const l = o - c, d = jn.call(this, l), f = Xn(t, e, d);
      if (e === (f === d) && n <= ss.call(this, l, f))
        return [l, f];
    }
  },
  sn(t) {
    const e = Fn.call(this, t);
    return e > Fn.call(this, t - 1) && e > Fn.call(this, t + 1);
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
  U: ss,
  fn: Fn,
  V(t, e, n) {
    return sr(mn.call(this, t, e, n));
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
}), Nr = /* @__PURE__ */ Ra(jd, Ld), E = /* @__PURE__ */ Ra(Ad, Wd), cs = {
  era: _n,
  eraYear: K,
  year: K,
  month: ki,
  monthCode(t) {
    const e = _n(t);
    return Wo(e), e;
  },
  day: ki,
  .../* @__PURE__ */ _e(Ut, K),
  .../* @__PURE__ */ _e(C, so),
  offset(t) {
    const e = _n(t);
    return Se(e), e;
  }
}, gi = /* @__PURE__ */ I(Es, Ut, Mt), Vd = /* @__PURE__ */ I(Es, Mt, Ut), Kt = "numeric", zn = ["timeZoneName"], dc = {
  month: Kt,
  day: Kt
}, pi = {
  year: Kt,
  month: Kt
}, vi = /* @__PURE__ */ Object.assign({}, pi, {
  day: Kt
}), wi = {
  hour: Kt,
  minute: Kt,
  second: Kt
}, yi = /* @__PURE__ */ Object.assign({}, vi, wi), qd = /* @__PURE__ */ Object.assign({}, yi, {
  timeZoneName: "short"
}), Gd = /* @__PURE__ */ Object.keys(pi), Hd = /* @__PURE__ */ Object.keys(dc), Xd = /* @__PURE__ */ Object.keys(vi), Jd = /* @__PURE__ */ Object.keys(wi), bi = ["dateStyle"], Kd = /* @__PURE__ */ Gd.concat(bi), Qd = /* @__PURE__ */ Hd.concat(bi), Mi = /* @__PURE__ */ Xd.concat(bi, ["weekday"]), Cn = /* @__PURE__ */ Jd.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), Ei = /* @__PURE__ */ Mi.concat(Cn), tf = /* @__PURE__ */ zn.concat(Cn), ef = /* @__PURE__ */ zn.concat(Mi), nf = /* @__PURE__ */ zn.concat(["day", "weekday"], Cn), rf = /* @__PURE__ */ zn.concat(["year", "weekday"], Cn), of = /* @__PURE__ */ Ie(Ei, yi), sf = /* @__PURE__ */ Ie(Ei, qd), af = /* @__PURE__ */ Ie(Ei, yi, zn), cf = /* @__PURE__ */ Ie(Mi, vi, tf), uf = /* @__PURE__ */ Ie(Cn, wi, ef), lf = /* @__PURE__ */ Ie(Kd, pi, nf), df = /* @__PURE__ */ Ie(Qd, dc, rf), ff = {}, fc = new Jt(void 0, {
  calendar: O
}).resolvedOptions().calendar === O, hc = [of, Mo], hf = [sf, Mo, 0, (t, e) => {
  const n = t.timeZone;
  if (e && e.timeZone !== n)
    throw new RangeError(Aa);
  return n;
}], mc = [af, Q], gc = [cf, Q], pc = [uf, (t) => te(t) / Lt], vc = [lf, Q, fc], wc = [df, Q, fc];
let us;
function fe(t, e, n, r, o) {
  function i(...u) {
    if (!(this instanceof i))
      throw new TypeError(Ur);
    fs(this, e(...u));
  }
  function s(u, c) {
    return Object.defineProperties(function(...l) {
      return u.call(this, a(this), ...l);
    }, un(c));
  }
  function a(u) {
    const c = nt(u);
    if (!c || c.branding !== t)
      throw new TypeError(Ur);
    return c;
  }
  return Object.defineProperties(i.prototype, {
    ...Zc(jt(s, n)),
    ...Fe(jt(s, r)),
    ...to("Temporal." + t)
  }), Object.defineProperties(i, {
    ...Fe(o),
    ...un(t)
  }), [i, (u) => {
    const c = Object.create(i.prototype);
    return fs(c, u), c;
  }, a];
}
function Ke(t) {
  if (nt(t) || t.calendar !== void 0 || t.timeZone !== void 0)
    throw new TypeError(Dl);
  return t;
}
function Pn(t) {
  return yc(t) || O;
}
function yc(t) {
  const { calendar: e } = t;
  if (e !== void 0)
    return zr(e);
}
function zr(t) {
  if (tt(t)) {
    const { calendar: e } = nt(t) || {};
    if (!e)
      throw new TypeError(ja(t));
    return e;
  }
  return ((e) => Dr(mu(G(e))))(t);
}
function Di(t) {
  const e = {};
  for (const n in t)
    e[n] = (r) => {
      const { calendar: o } = r;
      return E(o)[n](r);
    };
  return e;
}
function he() {
  throw new TypeError(Tl);
}
function lt(t) {
  if (tt(t)) {
    const { timeZone: e } = nt(t) || {};
    if (!e)
      throw new TypeError($a(t));
    return e;
  }
  return ((e) => Bo(gu(G(e))))(t);
}
function A(t) {
  if (tt(t)) {
    const e = nt(t);
    return e && e.branding === li ? e : Zu(t);
  }
  return hu(t);
}
function en(t) {
  if (t !== void 0) {
    if (tt(t)) {
      const e = nt(t) || {};
      switch (e.branding) {
        case de:
        case Nn:
          return e;
        case Je:
          return At(e);
      }
      const n = Pn(t);
      return {
        ...zu(lt, T, E(n), t),
        calendar: n
      };
    }
    return au(t);
  }
}
function qt(t, e) {
  if (tt(t)) {
    const r = nt(t) || {};
    switch (r.branding) {
      case ci:
        return R(e), r;
      case Je:
        return R(e), zt(r);
      case de:
        return R(e), ka(T, r);
    }
    return Yu(t, e);
  }
  const n = fu(t);
  return R(e), n;
}
function Ti(t) {
  return t === void 0 ? void 0 : qt(t);
}
function Re(t, e) {
  if (tt(t)) {
    const r = nt(t) || {};
    switch (r.branding) {
      case Je:
        return R(e), r;
      case Nn:
        return R(e), bt({
          ...r,
          ...ct
        });
      case de:
        return R(e), Ca(T, r);
    }
    return Pu(E(Pn(t)), t, e);
  }
  const n = uu(t);
  return R(e), n;
}
function ls(t, e) {
  if (tt(t)) {
    const r = nt(t);
    if (r && r.branding === ai)
      return R(e), r;
    const o = yc(t);
    return Fu(E(o || O), !o, t, e);
  }
  const n = du(E, t);
  return R(e), n;
}
function Ne(t, e) {
  if (tt(t)) {
    const r = nt(t);
    return r && r.branding === si ? (R(e), r) : xu(E(Pn(t)), t, e);
  }
  const n = lu(E, t);
  return R(e), n;
}
function ze(t, e) {
  if (tt(t)) {
    const r = nt(t) || {};
    switch (r.branding) {
      case Nn:
        return R(e), r;
      case Je:
        return R(e), At(r);
      case de:
        return R(e), Pa(T, r);
    }
    return ku(E(Pn(t)), t, e);
  }
  const n = ko(t);
  return R(e), n;
}
function Ce(t, e) {
  if (tt(t)) {
    const n = nt(t);
    if (n && n.branding === de)
      return cr(e), n;
    const r = Pn(t);
    return Cu(lt, T, E(r), r, t, e);
  }
  return cu(t, e);
}
function ds(t) {
  return jt((e) => (n) => e(Hr(n)), t);
}
function Hr(t) {
  return mt(t, T);
}
function Pe(t) {
  if (tt(t)) {
    const e = nt(t);
    if (e)
      switch (e.branding) {
        case ui:
          return e;
        case de:
          return $t(e.epochNanoseconds);
      }
  }
  return su(t);
}
function mf() {
  function t(i, s) {
    return new e(i, s);
  }
  function e(i, s = /* @__PURE__ */ Object.create(null)) {
    tr.set(this, ((a, u) => {
      const c = new Jt(a, u), l = c.resolvedOptions(), d = l.locale, f = wt(Object.keys(u), l), h = dt(vf), m = (g, ...p) => {
        if (g) {
          if (p.length !== 2)
            throw new TypeError(Yr);
          for (const b of p)
            if (b === void 0)
              throw new TypeError(Yr);
        }
        g || p[0] !== void 0 || (p = []);
        const w = p.map((b) => nt(b) || Number(b));
        let v, y = 0;
        for (const b of w) {
          const D = typeof b == "object" ? b.branding : void 0;
          if (y++ && D !== v)
            throw new TypeError(Yr);
          v = D;
        }
        return v ? h(v)(d, f, ...w) : [c, ...w];
      };
      return m.X = c, m;
    })(i, s));
  }
  const n = Jt.prototype, r = Object.getOwnPropertyDescriptors(n), o = Object.getOwnPropertyDescriptors(Jt);
  for (const i in r) {
    const s = r[i], a = i.startsWith("format") && gf(i);
    typeof s.value == "function" ? s.value = i === "constructor" ? t : a || pf(i) : a && (s.get = function() {
      if (!tr.has(this))
        throw new TypeError(Ur);
      return (...u) => a.apply(this, u);
    }, Object.defineProperties(s.get, un(`get ${i}`)));
  }
  return o.prototype.value = e.prototype = Object.create({}, r), Object.defineProperties(t, o), t;
}
function gf(t) {
  return Object.defineProperties(function(...e) {
    const n = tr.get(this), [r, ...o] = n(t.includes("Range"), ...e);
    return r[t](...o);
  }, un(t));
}
function pf(t) {
  return Object.defineProperties(function(...e) {
    return tr.get(this).X[t](...e);
  }, un(t));
}
function vf(t) {
  const e = Df[t];
  if (!e)
    throw new TypeError(Al(t));
  return ce(e, dt(xa), 1);
}
const Qn = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ Qn.get.bind(Qn), fs = /* @__PURE__ */ Qn.set.bind(Qn), bc = {
  era: _c,
  eraYear: Is,
  year: no,
  month: kt,
  daysInMonth: kt,
  daysInYear: kt,
  inLeapYear: Gl,
  monthsInYear: kt
}, Si = {
  monthCode: G
}, Mc = {
  day: kt
}, wf = {
  dayOfWeek: kt,
  dayOfYear: kt,
  weekOfYear: jc,
  yearOfWeek: Is,
  daysInWeek: kt
}, Ii = /* @__PURE__ */ Di(/* @__PURE__ */ Object.assign({}, bc, Si, Mc, wf)), yf = /* @__PURE__ */ Di({
  ...bc,
  ...Si
}), bf = /* @__PURE__ */ Di({
  ...Si,
  ...Mc
}), kn = {
  calendarId: (t) => t.calendar
}, Mf = /* @__PURE__ */ nr((t) => (e) => e[t], C.concat("sign")), Oi = /* @__PURE__ */ nr((t, e) => (n) => n[Mt[e]], Ut), Ec = {
  epochMilliseconds: Mo,
  epochNanoseconds: Ac
}, [Ef, _, Mh] = fe(li, Ku, {
  ...Mf,
  blank: ou
}, {
  with: (t, e) => _(Uu(t, e)),
  negated: (t) => _(Po(t)),
  abs: (t) => _(ru(t)),
  add: (t, e, n) => _(Ji(en, E, T, 0, t, A(e), n)),
  subtract: (t, e, n) => _(Ji(en, E, T, 1, t, A(e), n)),
  round: (t, e) => _(nu(en, E, T, t, e)),
  total: (t, e) => Lc(en, E, T, t, e),
  toLocaleString(t, e, n) {
    return Intl.DurationFormat ? new Intl.DurationFormat(e, n).format(this) : Cr(t);
  },
  toString: Cr,
  toJSON: (t) => Cr(t),
  valueOf: he
}, {
  from: (t) => _(A(t)),
  compare: (t, e, n) => vu(en, E, T, A(t), A(e), n)
}), Df = {
  Instant: hc,
  PlainDateTime: mc,
  PlainDate: gc,
  PlainTime: pc,
  PlainYearMonth: vc,
  PlainMonthDay: wc
}, Tf = /* @__PURE__ */ ce(hc), Sf = /* @__PURE__ */ ce(hf), If = /* @__PURE__ */ ce(mc), Of = /* @__PURE__ */ ce(gc), Rf = /* @__PURE__ */ ce(pc), Nf = /* @__PURE__ */ ce(vc), zf = /* @__PURE__ */ ce(wc), [Cf, Ht] = fe(ci, Ju, Oi, {
  with(t, e, n) {
    return Ht(Lu(this, Ke(e), n));
  },
  add: (t, e) => Ht(Xi(0, t, A(e))),
  subtract: (t, e) => Ht(Xi(1, t, A(e))),
  until: (t, e, n) => _(is(0, t, qt(e), n)),
  since: (t, e, n) => _(is(1, t, qt(e), n)),
  round: (t, e) => Ht(qc(t, e)),
  equals: (t, e) => Tu(t, qt(e)),
  toLocaleString(t, e, n) {
    const [r, o] = Rf(e, n, t);
    return r.format(o);
  },
  toString: Li,
  toJSON: (t) => Li(t),
  valueOf: he
}, {
  from: (t, e) => Ht(qt(t, e)),
  compare: (t, e) => Ao(qt(t), qt(e))
}), [Pf, Et] = fe(Je, I(qu, Dn), {
  ...kn,
  ...Ii,
  ...Oi
}, {
  with: (t, e, n) => Et(ju(E, t, Ke(e), n)),
  withCalendar: (t, e) => Et(qo(t, zr(e))),
  withPlainTime: (t, e) => Et(fl(t, Ti(e))),
  add: (t, e, n) => Et(qi(E, 0, t, A(e), n)),
  subtract: (t, e, n) => Et(qi(E, 1, t, A(e), n)),
  until: (t, e, n) => _(ns(E, 0, t, Re(e), n)),
  since: (t, e, n) => _(ns(E, 1, t, Re(e), n)),
  round: (t, e) => Et(Vc(t, e)),
  equals: (t, e) => bu(t, Re(e)),
  toZonedDateTime: (t, e, n) => H(el(T, t, lt(e), n)),
  toPlainDate: (t) => Dt(At(t)),
  toPlainTime: (t) => Ht(zt(t)),
  toLocaleString(t, e, n) {
    const [r, o] = If(e, n, t);
    return r.format(o);
  },
  toString: ji,
  toJSON: (t) => ji(t),
  valueOf: he
}, {
  from: (t, e) => Et(Re(t, e)),
  compare: (t, e) => fa(Re(t), Re(e))
}), [kf, Xr, Eh] = fe(ai, I(Xu, Dn), {
  ...kn,
  ...bf
}, {
  with: (t, e, n) => Xr(Au(E, t, Ke(e), n)),
  equals: (t, e) => Du(t, ls(e)),
  toPlainDate(t, e) {
    return Dt(al(E, t, this, e));
  },
  toLocaleString(t, e, n) {
    const [r, o] = zf(e, n, t);
    return r.format(o);
  },
  toString: Ai,
  toJSON: (t) => Ai(t),
  valueOf: he
}, {
  from: (t, e) => Xr(ls(t, e))
}), [xf, nn, Dh] = fe(si, I(Hu, Dn), {
  ...kn,
  ...yf
}, {
  with: (t, e, n) => nn($u(E, t, Ke(e), n)),
  add: (t, e, n) => nn(Hi(E, 0, t, A(e), n)),
  subtract: (t, e, n) => nn(Hi(E, 1, t, A(e), n)),
  until: (t, e, n) => _(os(E, 0, t, Ne(e), n)),
  since: (t, e, n) => _(os(E, 1, t, Ne(e), n)),
  equals: (t, e) => Eu(t, Ne(e)),
  toPlainDate(t, e) {
    return Dt(sl(E, t, this, e));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Nf(e, n, t);
    return r.format(o);
  },
  toString: $i,
  toJSON: (t) => $i(t),
  valueOf: he
}, {
  from: (t, e) => nn(Ne(t, e)),
  compare: (t, e) => Ge(Ne(t), Ne(e))
}), [Ff, Dt, Th] = fe(Nn, I(Gu, Dn), {
  ...kn,
  ...Ii
}, {
  with: (t, e, n) => Dt(Bu(E, t, Ke(e), n)),
  withCalendar: (t, e) => Dt(qo(t, zr(e))),
  add: (t, e, n) => Dt(Gi(E, 0, t, A(e), n)),
  subtract: (t, e, n) => Dt(Gi(E, 1, t, A(e), n)),
  until: (t, e, n) => _(rs(E, 0, t, ze(e), n)),
  since: (t, e, n) => _(rs(E, 1, t, ze(e), n)),
  equals: (t, e) => Mu(t, ze(e)),
  toZonedDateTime(t, e) {
    const n = tt(e) ? e : {
      timeZone: e
    };
    return H(nl(lt, qt, T, t, n));
  },
  toPlainDateTime: (t, e) => Et(rl(t, Ti(e))),
  toPlainYearMonth(t) {
    return nn(ol(E, t, this));
  },
  toPlainMonthDay(t) {
    return Xr(il(E, t, this));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Of(e, n, t);
    return r.format(o);
  },
  toString: Bi,
  toJSON: (t) => Bi(t),
  valueOf: he
}, {
  from: (t, e) => Dt(ze(t, e)),
  compare: (t, e) => Ge(ze(t), ze(e))
}), [Yf, H] = fe(de, I(Vu, Dn, pu), {
  ...Ec,
  ...kn,
  ...ds(Ii),
  ...ds(Oi),
  offset: (t) => bn(Hr(t).offsetNanoseconds),
  offsetNanoseconds: (t) => Hr(t).offsetNanoseconds,
  timeZoneId: (t) => t.timeZone,
  hoursInDay: (t) => Gc(T, t)
}, {
  with: (t, e, n) => H(_u(E, T, t, Ke(e), n)),
  withCalendar: (t, e) => H(qo(t, zr(e))),
  withTimeZone: (t, e) => H(hl(t, lt(e))),
  withPlainTime: (t, e) => H(dl(T, t, Ti(e))),
  add: (t, e, n) => H(Vi(E, T, 0, t, A(e), n)),
  subtract: (t, e, n) => H(Vi(E, T, 1, t, A(e), n)),
  until: (t, e, n) => _(L(es(E, T, 0, t, Ce(e), n))),
  since: (t, e, n) => _(L(es(E, T, 1, t, Ce(e), n))),
  round: (t, e) => H(Wc(T, t, e)),
  startOfDay: (t) => H(Hc(T, t)),
  equals: (t, e) => yu(t, Ce(e)),
  toInstant: (t) => Gt(tl(t)),
  toPlainDateTime: (t) => Et(Ca(T, t)),
  toPlainDate: (t) => Dt(Pa(T, t)),
  toPlainTime: (t) => Ht(ka(T, t)),
  toLocaleString(t, e, n = {}) {
    const [r, o] = Sf(e, n, t);
    return r.format(o);
  },
  toString: (t, e) => _i(T, t, e),
  toJSON: (t) => _i(T, t),
  valueOf: he,
  getTimeZoneTransition(t, e) {
    const { timeZone: n, epochNanoseconds: r } = t, o = $c(e), i = T(n).O(r, o);
    return i ? H({
      ...t,
      epochNanoseconds: i
    }) : null;
  }
}, {
  from: (t, e) => H(Ce(t, e)),
  compare: (t, e) => da(Ce(t), Ce(e))
}), [Zf, Gt, Sh] = fe(ui, Wu, Ec, {
  add: (t, e) => Gt(Wi(0, t, A(e))),
  subtract: (t, e) => Gt(Wi(1, t, A(e))),
  until: (t, e, n) => _(ts(0, t, Pe(e), n)),
  since: (t, e, n) => _(ts(1, t, Pe(e), n)),
  round: (t, e) => Gt(Uc(t, e)),
  equals: (t, e) => wu(t, Pe(e)),
  toZonedDateTimeISO: (t, e) => H(Qu(t, lt(e))),
  toLocaleString(t, e, n) {
    const [r, o] = Tf(e, n, t);
    return r.format(o);
  },
  toString: (t, e) => Zi(lt, T, t, e),
  toJSON: (t) => Zi(lt, T, t),
  valueOf: he
}, {
  from: (t) => Gt(Pe(t)),
  fromEpochMilliseconds: (t) => Gt(cl(t)),
  fromEpochNanoseconds: (t) => Gt(ul(t)),
  compare: (t, e) => la(Pe(t), Pe(e))
}), _f = /* @__PURE__ */ Object.defineProperties({}, {
  ...to("Temporal.Now"),
  ...Fe({
    timeZoneId: () => Qe(),
    instant: () => Gt($t(Lr())),
    zonedDateTimeISO: (t = Qe()) => H(yt(Lr(), lt(t), O)),
    plainDateTimeISO: (t = Qe()) => Et(bt(Fr(T(lt(t))), O)),
    plainDateISO: (t = Qe()) => Dt(At(Fr(T(lt(t))), O)),
    plainTimeISO: (t = Qe()) => Ht(zt(Fr(T(lt(t)))))
  })
}), $ = /* @__PURE__ */ Object.defineProperties({}, {
  ...to("Temporal"),
  ...Fe({
    PlainYearMonth: xf,
    PlainMonthDay: kf,
    PlainDate: Ff,
    PlainTime: Cf,
    PlainDateTime: Pf,
    ZonedDateTime: Yf,
    Instant: Zf,
    Duration: Ef,
    Now: _f
  })
}), jf = /* @__PURE__ */ mf(), tr = /* @__PURE__ */ new WeakMap();
Object.create(Intl), Fe({
  DateTimeFormat: jf
});
const Pt = {
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  unit: "days",
  period: "weeks",
  span: 1,
  daySize: 160,
  dayHeadSize: 32,
  eventSize: 48,
  resourceGroupSize: 24,
  overscan: 0
};
function Bf(t = {}) {
  const e = B(t.period) || Pt.period, n = Math.max(B(t.span) || Pt.span, 1), r = B(t.unit) || Pt.unit, o = B(t.firstDayOfWeek), i = B(t.timezone) || Pt.timezone, s = $.PlainDate.from(B(t.date) || $.Now.plainDateISO()), a = Af(s, e, e === "weeks" || r === "weeks" ? o : void 0), u = $f(a, e, n, r);
  return {
    start: u.at(0),
    end: u.at(-1),
    timezone: i,
    unit: r,
    period: e,
    span: n,
    firstDayOfWeek: o,
    dates: u
  };
}
function $f(t, e, n, r) {
  const o = [], i = t.add({ [e]: n }), a = t.until(i).total({ unit: r, relativeTo: t });
  for (let u = 0; u < a; u++)
    o.push(t.add({ [r]: u }).toString());
  return o;
}
function Af(t, e, n) {
  let r = t;
  return e === "years" && (r = t.with({ day: 1, month: 1 })), e === "months" && (r = t.with({ day: 1 })), n === void 0 ? r : r.subtract({ days: (r.dayOfWeek - n + 7) % 7 });
}
function Lf(t = {}) {
  return {
    daySize: B(t.daySize) ?? Pt.daySize,
    dayHeadSize: B(t.dayHeadSize) ?? Pt.dayHeadSize,
    eventSize: B(t.eventSize) ?? Pt.eventSize,
    resourceGroupSize: B(t.resourceGroupSize) ?? Pt.resourceGroupSize,
    resourcesClass: B(t.resourcesClass),
    timelineClass: B(t.timelineClass),
    overscan: B(t.overscan) ?? Pt.overscan
  };
}
function er(t) {
  try {
    return $.PlainDate.from(t).toString() === t;
  } catch {
    return !1;
  }
}
function Dc(t, e) {
  return er(t) ? t : $.Instant.from(t).toZonedDateTimeISO(e).toPlainDate().toString();
}
function Ri(t) {
  return t === void 0 ? [] : Array.isArray(t) ? t : [t];
}
function hs(t, e, n) {
  return t.has(e) || t.set(e, n), t.get(e);
}
function Uf(t = [], e) {
  const n = /* @__PURE__ */ new Map();
  for (var r = 0; r < t.length; r++) {
    const i = t[r], s = Dc(i.start, e), a = Ri(i.resourceId);
    for (var o = 0; o < a.length; o++) {
      const u = a[o], c = hs(n, u, /* @__PURE__ */ new Map());
      hs(c, s, /* @__PURE__ */ new Set()).add(i);
    }
  }
  return n;
}
function Tc(t, e) {
  const n = Object.entries(t), r = Ri(e);
  return Object.fromEntries(n.filter(([o]) => !r.includes(o)));
}
const Sc = ["id", "nOrder", "isGroup", "isCollapsed", "resources", "maxEvents"], jr = ws(/* @__PURE__ */ new Set());
function Wf(t = [], e = /* @__PURE__ */ new Map()) {
  const n = Oc(t), r = /* @__PURE__ */ new Map();
  for (var o = 0; o < n.length; o++) {
    const s = n[o], a = s.resources ? Vf(s, e) : Ic(s, e.get(s.id));
    if (r.set(a.id, a), "isGroup" in a && !a.isCollapsed && a.resources.length)
      for (var i = 0; i < a.resources.length; i++) {
        const u = a.resources[i];
        r.set(u.id, u);
      }
  }
  return r;
}
function Vf(t, e) {
  const n = jr.has(t.id);
  return {
    id: t.id,
    nOrder: t.nOrder,
    isGroup: !0,
    isCollapsed: n,
    resources: Oc(t.resources.map((r) => Ic(r, e.get(r.id)))),
    data: Tc(t, Sc),
    open: () => jr.delete(t.id),
    close: () => jr.add(t.id)
  };
}
function Ic(t, e = /* @__PURE__ */ new Map()) {
  return {
    id: t.id,
    nOrder: t.nOrder,
    isEventDroppable: t.isEventDroppable ?? !0,
    maxEvents: Math.max(...Array.from(e.values()).map((n) => n.size), 1),
    data: Tc(t, Sc)
  };
}
function Oc(t) {
  return t.slice().sort((e, n) => (e.nOrder ?? Number.MAX_SAFE_INTEGER) - (n.nOrder ?? Number.MAX_SAFE_INTEGER));
}
function qf(t = {}) {
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
function Gf(t, e, n, r) {
  function o(a, u) {
    const c = e.value.get(a) || /* @__PURE__ */ new Map();
    return u ? c.get(u) || /* @__PURE__ */ new Set() : new Set(Array.from(c.values()).flatMap((l) => [...l]));
  }
  function i(a) {
    return n.value.get(a);
  }
  function s(a, u) {
    const c = $.PlainDate.from(t.value.start), l = $.PlainDate.from(a), d = c.until(l), f = Math.floor(r.scale.value * d.total({ unit: "minutes", relativeTo: c }));
    r.virtualizer.value.scrollToOffset(f, u);
  }
  return {
    getResource: i,
    getEvents: o,
    scrollToDate: s
  };
}
function Hf() {
  return Math.random().toString(36).substring(2, 11);
}
const Jr = 1440, Xf = /* @__PURE__ */ new Map([["days", Jr], ["weeks", Jr * 7]]);
function Jf(t, e) {
  const n = Hf(), r = "application/x-cullendar-drag-event", o = ys(), i = J(0), s = J(!1), a = J(!1), u = J(/* @__PURE__ */ new Set()), c = J(/* @__PURE__ */ new Set()), l = z(() => Kf(t.value)), d = z(() => Qf(e.value.daySize, i.value, l.value));
  function f(h) {
    i.value = h;
  }
  return {
    id: n,
    dataTransferType: r,
    isDragging: s,
    isResizing: a,
    virtualizer: o,
    scale: d,
    durations: l,
    resizeDates: u,
    resizeResources: c,
    fit: f
  };
}
function Kf(t) {
  const e = /* @__PURE__ */ new Map(), n = Xf.get(t.unit);
  for (var r = 0; r < t.dates.length; r++) {
    const o = t.dates[r];
    if (n) {
      e.set(o, n);
      continue;
    }
    const i = $.PlainDate.from(o), s = i.add({ [t.unit]: 1 }), a = i.until(s, { largestUnit: "days" }).days;
    e.set(o, a * Jr);
  }
  return e;
}
function Qf(t, e, n) {
  const r = Math.max(Array.from(n.values()).reduce((s, a) => s + a, 0), 1), o = Math.max(t, 1) / (24 * 60), i = e / r;
  return Math.max(o, i);
}
function Ih(t = {}) {
  const e = J(), n = z(() => Bf(B(t.view))), r = z(() => Lf(B(t.layout))), o = z(() => Uf(B(t.events), n.value.timezone)), i = z(() => Wf(B(t.resources), o.value)), s = z(() => qf(B(t.callbacks))), a = Jf(n, r), u = Gf(n, o, i, a);
  return sn(n, () => s.value.onView(n.value)), ws({
    elements: e,
    view: n,
    layout: r,
    events: o,
    resources: i,
    callbacks: s,
    utils: u,
    internal: a
  });
}
function ke(t, e, n) {
  let r = n.initialDeps ?? [], o;
  function i() {
    var s, a, u, c;
    let l;
    n.key && ((s = n.debug) != null && s.call(n)) && (l = Date.now());
    const d = t();
    if (!(d.length !== r.length || d.some((m, g) => r[g] !== m)))
      return o;
    r = d;
    let h;
    if (n.key && ((a = n.debug) != null && a.call(n)) && (h = Date.now()), o = e(...d), n.key && ((u = n.debug) != null && u.call(n))) {
      const m = Math.round((Date.now() - l) * 100) / 100, g = Math.round((Date.now() - h) * 100) / 100, p = g / 16, w = (v, y) => {
        for (v = String(v); v.length < y; )
          v = " " + v;
        return v;
      };
      console.info(
        `%c⏱ ${w(g, 5)} /${w(m, 5)} ms`,
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
    return (c = n == null ? void 0 : n.onChange) == null || c.call(n, o), o;
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
const th = (t, e) => Math.abs(t - e) < 1, eh = (t, e, n) => {
  let r;
  return function(...o) {
    t.clearTimeout(r), r = t.setTimeout(() => e.apply(this, o), n);
  };
}, nh = (t) => t, rh = (t) => {
  const e = Math.max(t.startIndex - t.overscan, 0), n = Math.min(t.endIndex + t.overscan, t.count - 1), r = [];
  for (let o = e; o <= n; o++)
    r.push(o);
  return r;
}, oh = (t, e) => {
  const n = t.scrollElement;
  if (!n)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  const o = (s) => {
    const { width: a, height: u } = s;
    e({ width: Math.round(a), height: Math.round(u) });
  };
  if (o(n.getBoundingClientRect()), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((s) => {
    const a = () => {
      const u = s[0];
      if (u != null && u.borderBoxSize) {
        const c = u.borderBoxSize[0];
        if (c) {
          o({ width: c.inlineSize, height: c.blockSize });
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
}, ms = {
  passive: !0
}, gs = typeof window > "u" ? !0 : "onscrollend" in window, ih = (t, e) => {
  const n = t.scrollElement;
  if (!n)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = t.options.useScrollendEvent && gs ? () => {
  } : eh(
    r,
    () => {
      e(o, !1);
    },
    t.options.isScrollingResetDelay
  ), s = (l) => () => {
    const { horizontal: d, isRtl: f } = t.options;
    o = d ? n.scrollLeft * (f && -1 || 1) : n.scrollTop, i(), e(o, l);
  }, a = s(!0), u = s(!1);
  u(), n.addEventListener("scroll", a, ms);
  const c = t.options.useScrollendEvent && gs;
  return c && n.addEventListener("scrollend", u, ms), () => {
    n.removeEventListener("scroll", a), c && n.removeEventListener("scrollend", u);
  };
}, sh = (t, e, n) => {
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
}, ah = (t, {
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
class ch {
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
        getItemKey: nh,
        rangeExtractor: rh,
        onChange: () => {
        },
        measureElement: sh,
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
    }, this.maybeNotify = ke(
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
        const u = i.get(
          a.lane
        );
        if (u == null || a.end > u.end ? i.set(a.lane, a) : a.end < u.end && o.set(a.lane, !0), o.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((s, a) => s.end === a.end ? s.index - a.index : s.end - a.end)[0] : void 0;
    }, this.getMeasurementOptions = ke(
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
    ), this.getMeasurements = ke(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: s }, a) => {
        if (!s)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((l) => {
          this.itemSizeCache.set(l.key, l.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, u);
        for (let l = u; l < n; l++) {
          const d = i(l), f = this.options.lanes === 1 ? c[l - 1] : this.getFurthestMeasurement(c, l), h = f ? f.end + this.options.gap : r + o, m = a.get(d), g = typeof m == "number" ? m : this.options.estimateSize(l), p = h + g, w = f ? f.lane : l % this.options.lanes;
          c[l] = {
            index: l,
            start: h,
            size: g,
            end: p,
            key: d,
            lane: w
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = ke(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? uh({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = ke(
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
    }, this.getVirtualItems = ke(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const o = [];
        for (let i = 0, s = n.length; i < s; i++) {
          const a = n[i], u = r[a];
          o.push(u);
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
      const a = this.options.horizontal ? "scrollWidth" : "scrollHeight", c = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[a] : this.scrollElement[a] : 0) - i;
      return Math.max(Math.min(c, n), 0);
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
          const [c] = Br(
            this.getOffsetForIndex(n, a)
          );
          th(c, this.getScrollOffset()) || this.scrollToIndex(n, { align: a, behavior: o });
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
function uh({
  measurements: t,
  outerSize: e,
  scrollOffset: n,
  lanes: r
}) {
  const o = t.length - 1, i = (u) => t[u].start;
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
    const u = Array(r).fill(0);
    for (; a < o && u.some((l) => l < n + e); ) {
      const l = t[a];
      u[l.lane] = l.end, a++;
    }
    const c = Array(r).fill(n + e);
    for (; s >= 0 && c.some((l) => l >= n); ) {
      const l = t[s];
      c[l.lane] = l.start, s--;
    }
    s = Math.max(0, s - s % r), a = Math.min(o, a + (r - 1 - a % r));
  }
  return { startIndex: s, endIndex: a };
}
function lh(t) {
  const e = new ch(Y(t)), n = ys(e), r = e._didMount();
  return sn(
    () => Y(t).getScrollElement(),
    (o) => {
      o && e._willUpdate();
    },
    {
      immediate: !0
    }
  ), sn(
    () => Y(t),
    (o) => {
      e.setOptions({
        ...o,
        onChange: (i, s) => {
          var a;
          Ni(n), (a = o.onChange) == null || a.call(o, i, s);
        }
      }), e._willUpdate(), Ni(n);
    },
    {
      immediate: !0
    }
  ), Pc(r), n;
}
function Nc(t) {
  return lh(
    z(() => ({
      observeElementRect: oh,
      observeElementOffset: ih,
      scrollToFn: ah,
      ...Y(t)
    }))
  );
}
function X(t) {
  return `${t}px`;
}
function dh(t) {
  const e = document.getElementById(t);
  return {
    calendar: e,
    timeline: e.querySelector(".cullendar-timeline"),
    resources: e.querySelector(".cullendar-resources")
  };
}
const zc = /* @__PURE__ */ Bt({
  __name: "RowVirtualiser",
  props: {
    rows: {},
    layout: {},
    wrapperStyle: {}
  },
  setup(t) {
    const e = t, n = J(null), r = z(() => ({
      count: e.rows.length,
      getScrollElement: () => n.value,
      estimateSize: u,
      paddingStart: e.layout.dayHeadSize,
      overscan: e.layout.overscan
    })), o = Nc(r), i = z(() => o.value.getVirtualItems()), s = z(() => o.value.getTotalSize()), a = z(() => ({
      height: X(s.value),
      ...e.wrapperStyle
    }));
    sn(() => e.rows, () => o.value.measure());
    function u(c) {
      const l = e.rows[c];
      return "isGroup" in l ? e.layout.resourceGroupSize : l.maxEvents * e.layout.eventSize;
    }
    return (c, l) => (U(), ot("div", {
      ref_key: "el",
      ref: n,
      class: "cullendar-row-virtualiser",
      style: { position: "relative" }
    }, [
      An("div", {
        class: "cullendar-row-virtualiser-wrapper",
        style: ve(a.value)
      }, [
        Z(c.$slots, "wrapper"),
        (U(!0), ot(an, null, cn(i.value, (d) => Z(c.$slots, "default", pe({
          key: d.index,
          ref_for: !0
        }, { row: d, data: c.rows[d.index] }))), 128))
      ], 4),
      An("div", {
        class: "cullendar-rows-wrapper",
        style: ve(["position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none;", a.value])
      }, [
        (U(!0), ot(an, null, cn(i.value, (d) => Z(c.$slots, "row", pe({
          key: d.index,
          ref_for: !0
        }, { row: d, data: c.rows[d.index] }))), 128))
      ], 4)
    ], 512));
  }
}), fh = {
  class: "cullendar-timeline-head",
  style: { position: "sticky", top: "0", "z-index": "1" }
}, hh = /* @__PURE__ */ Bt({
  __name: "Timeline",
  props: {
    rows: {},
    columns: {}
  },
  setup(t) {
    const e = t, n = je("api"), { elements: r, layout: o, callbacks: i, internal: s } = Me(n), a = new ResizeObserver(w), u = J(!1), c = z(() => ({
      horizontal: !0,
      count: e.columns.length,
      getScrollElement: () => {
        var v;
        return (v = r.value) == null ? void 0 : v.timeline;
      },
      estimateSize: m,
      overscan: o.value.overscan,
      onChange: () => {
        var y;
        const v = (y = r.value) == null ? void 0 : y.timeline;
        u.value || !v || (s.value.fit(v.clientWidth), u.value = !0, kc(() => i.value.onReady(n)));
      }
    })), l = Nc(c);
    s.value.virtualizer = l.value;
    const d = z(() => l.value.getVirtualItems()), f = z(() => l.value.getTotalSize()), h = z(() => ({ width: X(f.value) }));
    bs(() => {
      r.value = dh(s.value.id), a.observe(r.value.timeline);
    }), sn([() => s.value.scale, () => s.value.durations], () => l.value.measure(), { flush: "post" }), xc(() => a.disconnect());
    function m(v) {
      const y = n.view.dates.at(v);
      return s.value.durations.get(y) * s.value.scale;
    }
    function g(v) {
      return {
        height: X(o.value.dayHeadSize),
        width: X(v.size),
        transform: `translateX(${X(v.start)}) translateY(0)`,
        position: "absolute"
      };
    }
    function p(v, y) {
      return {
        width: X(y.size),
        height: X(v.size),
        transform: `translateX(${X(y.start)}) translateY(${X(v.start)})`,
        position: "absolute"
      };
    }
    function w(v) {
      const y = v[0];
      s.value.fit(y.target.clientWidth);
    }
    return (v, y) => (U(), Kr(zc, {
      rows: v.rows,
      layout: Y(o),
      "wrapper-style": h.value,
      class: Qr(["cullendar-timeline", Y(o).timelineClass]),
      style: { flex: "1", overflow: "scroll" }
    }, Fc({ _: 2 }, [
      u.value ? {
        name: "wrapper",
        fn: Ct(() => [
          An("div", fh, [
            (U(!0), ot(an, null, cn(d.value, (b) => (U(), ot("div", {
              key: b.index,
              style: ve(g(b))
            }, [
              Z(v.$slots, "head", pe({ ref_for: !0 }, { date: v.columns[b.index] }))
            ], 4))), 128))
          ])
        ]),
        key: "0"
      } : void 0,
      u.value ? {
        name: "default",
        fn: Ct(({ row: b, data: D }) => [
          (U(!0), ot(an, null, cn(d.value, (S) => (U(), ot("div", {
            key: S.index,
            style: ve(p(b, S))
          }, [
            Z(v.$slots, "default", pe({ ref_for: !0 }, { resource: D, date: v.columns[S.index] }))
          ], 4))), 128))
        ]),
        key: "1"
      } : void 0,
      u.value ? {
        name: "row",
        fn: Ct(({ row: b, data: D }) => [
          Z(v.$slots, "row", gt(xt({ resource: D, row: b, virtualizer: Y(l), size: f.value })))
        ]),
        key: "2"
      } : void 0
    ]), 1032, ["rows", "layout", "wrapper-style", "class"]));
  }
}), mh = /* @__PURE__ */ Bt({
  __name: "Resources",
  props: {
    rows: {}
  },
  setup(t) {
    const e = je("api"), { layout: n } = Me(e), r = { marginBottom: i() };
    function o(s) {
      return {
        height: X(s.size),
        width: "100%",
        transform: `translateY(${X(s.start)})`,
        position: "absolute"
      };
    }
    function i() {
      const s = Object.assign(document.createElement("div"), { style: "overflow:scroll;visibility:hidden;" }), a = document.body.appendChild(s), u = a.offsetWidth - a.clientWidth;
      return a.remove(), X(u);
    }
    return (s, a) => (U(), Kr(zc, {
      rows: s.rows,
      layout: Y(n),
      style: ve(["overflow:scroll auto;scrollbar-width:none;", r]),
      class: Qr(["cullendar-resources", Y(n).resourcesClass])
    }, {
      default: Ct(({ row: u, data: c }) => [
        An("div", {
          class: "cullendar-resources-virtual-row",
          style: ve(o(u))
        }, [
          Z(s.$slots, "default", gt(xt({ resource: c })))
        ], 4)
      ]),
      _: 3
    }, 8, ["rows", "layout", "style", "class"]));
  }
}), gh = /* @__PURE__ */ Bt({
  __name: "Day",
  props: {
    date: {},
    resource: {}
  },
  setup(t) {
    const e = t, n = je("api"), { utils: r } = Me(n), o = z(() => r.value.getEvents(e.resource.id, e.date)), i = z(() => Array.from(o.value.values()).sort((s, a) => Date.parse(s.start) - Date.parse(a.start)));
    return (s, a) => Z(s.$slots, "default", gt(xt({ events: i.value })));
  }
}), ph = ["id", "data-dragging", "data-resizing"], vh = /* @__PURE__ */ Bt({
  name: "Cullendar",
  __name: "index",
  props: {
    cullendar: {}
  },
  setup(t) {
    const e = t;
    Yc("api", e.cullendar);
    const { internal: n, elements: r, view: o, resources: i } = Me(e.cullendar), s = z(() => Array.from(i.value.values()));
    bs(() => {
      r.value.timeline.addEventListener("scroll", a), r.value.resources.addEventListener("scroll", a);
    });
    function a(u) {
      const c = u.target, l = c.classList.contains("cullendar-timeline") ? r.value.resources : r.value.timeline;
      l.removeEventListener("scroll", a), l.scrollTop = c.scrollTop, requestAnimationFrame(() => l.addEventListener("scroll", a));
    }
    return (u, c) => (U(), ot("div", {
      id: Y(n).id,
      "data-dragging": Y(n).isDragging,
      "data-resizing": Y(n).isResizing,
      class: "cullendar",
      style: { height: "100%", display: "flex", overflow: "hidden" }
    }, [
      zi(mh, { rows: s.value }, {
        default: Ct(({ resource: l }) => [
          "isGroup" in l ? Z(u.$slots, "resourceGroup", gt(pe({ key: 0 }, { resource: l }))) : Z(u.$slots, "resource", gt(pe({ key: 1 }, { resource: l })))
        ]),
        _: 3
      }, 8, ["rows"]),
      zi(hh, {
        rows: s.value,
        columns: Y(o).dates
      }, {
        head: Ct((l) => [
          Z(u.$slots, "dayHead", gt(xt(l)))
        ]),
        default: Ct(({ resource: l, date: d }) => [
          "isGroup" in l ? Ms("", !0) : (U(), Kr(gh, {
            key: 0,
            date: d,
            resource: l
          }, {
            default: Ct(({ events: f }) => [
              Z(u.$slots, "day", gt(xt({ resource: l, date: d, events: f })), () => [
                (U(!0), ot(an, null, cn(f, (h) => Z(u.$slots, "event", pe({
                  key: h.id,
                  ref_for: !0
                }, { resource: l, event: h, date: d }))), 128))
              ])
            ]),
            _: 2
          }, 1032, ["date", "resource"]))
        ]),
        row: Ct((l) => [
          Z(u.$slots, "row", gt(xt(l)))
        ]),
        _: 3
      }, 8, ["rows", "columns"]),
      Z(u.$slots, "default")
    ], 8, ph));
  }
}), Oh = /* @__PURE__ */ Bt({
  __name: "DragEvent",
  props: {
    cullendar: {},
    data: {},
    dragClass: {},
    ghostClass: {}
  },
  setup(t) {
    const e = t;
    let n;
    const { internal: r } = Me(e.cullendar), o = z(() => {
      var c, l;
      return ((l = (c = e.dragClass) == null ? void 0 : c.split) == null ? void 0 : l.call(c, " ")) || [];
    }), i = z(() => {
      var c, l;
      return ((l = (c = e.ghostClass) == null ? void 0 : c.split) == null ? void 0 : l.call(c, " ")) || [];
    });
    function s(c) {
      if (!c.dataTransfer)
        return;
      const l = c.target, d = l.getBoundingClientRect();
      n = u(l, d), l.classList.add(...o.value), c.dataTransfer.setDragImage(n, c.clientX - d.left, c.clientY - d.top), c.dataTransfer.effectAllowed = "id" in e.data ? "move" : "copy", c.dataTransfer.setData(r.value.dataTransferType, JSON.stringify(e.data)), requestAnimationFrame(() => r.value.isDragging = !0);
    }
    function a(c) {
      c.target.classList.remove(...o.value), r.value.isDragging = !1, n && n.remove();
    }
    function u(c, l) {
      const d = c.cloneNode(!0);
      return d.classList.add("cullendar-ghost-event", ...i.value), d.style.height = X(l.height), d.style.width = X(l.width), d.style.position = "fixed", d.style.left = "-9999px", document.body.appendChild(d), d;
    }
    return (c, l) => (U(), ot("div", {
      draggable: "true",
      class: "cullendar-drag-event",
      style: { position: "relative", "user-select": "none", "pointer-events": "all" },
      onDragstart: Ln(s, ["stop"]),
      onDragend: Ln(a, ["stop"])
    }, [
      Z(c.$slots, "default")
    ], 32));
  }
}), Rh = /* @__PURE__ */ Bt({
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
    const e = t, n = je("api"), { view: r, callbacks: o, internal: i } = Me(n), s = J(!1), a = z(() => i.value.resizeResources.has(e.resource.id) && i.value.resizeDates.has(e.date)), u = z(() => ({
      position: "absolute",
      inset: 0,
      pointerEvents: i.value.isDragging ? "all" : "none",
      zIndex: i.value.isDragging ? 1 : void 0
    })), c = z(() => [
      s.value && e.dragoverClass,
      a.value && e.resizeoverClass
    ].filter(Boolean).join(" "));
    function l(p) {
      p.dataTransfer && p.dataTransfer.types.includes(i.value.dataTransferType) && (s.value = !0);
    }
    function d(p) {
      if (!p.dataTransfer || !p.dataTransfer.types.includes(i.value.dataTransferType))
        return;
      s.value = !1;
      const w = JSON.parse(p.dataTransfer.getData(i.value.dataTransferType));
      if (!w.id)
        return o.value.onAddEvent(m({ data: w }));
      if (Dc(w.start, r.value.timezone) === e.date && Ri(w.resourceId).includes(e.resource.id))
        return;
      const y = er(w.start) ? f(w) : h(w), b = m({ event: w, times: y });
      o.value.onBeforeDropEvent(b) && o.value.onMoveEvent(b);
    }
    function f(p) {
      const w = $.PlainDate.from(e.date), v = $.PlainDate.from(p.start).until($.PlainDate.from(p.end));
      return {
        start: w.toString(),
        end: w.add(v).toString()
      };
    }
    function h(p) {
      const w = $.PlainDate.from(e.date), v = $.Instant.from(p.start).toZonedDateTimeISO(r.value.timezone), y = $.Instant.from(p.end).toZonedDateTimeISO(r.value.timezone), b = v.until(y), D = v.with({
        year: w.year,
        month: w.month,
        day: w.day
      });
      return {
        start: D.toString({ timeZoneName: "never" }),
        end: D.add(b).toString({ timeZoneName: "never" })
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
    return (p, w) => (U(), ot("div", {
      class: Qr(c.value),
      onMouseenter: g
    }, [
      p.droppable && p.resource.isEventDroppable ? (U(), ot("span", {
        key: 0,
        style: ve(u.value),
        onDragenter: l,
        onDragover: w[0] || (w[0] = Ln(() => {
        }, ["prevent"])),
        onDragleave: w[1] || (w[1] = (v) => s.value = !1),
        onDrop: d
      }, null, 36)) : Ms("", !0),
      Z(p.$slots, "default", gt(xt({ date: p.date, resource: p.resource, events: p.events, isDragOver: s.value, isResizeOver: a.value })))
    ], 34));
  }
}), Nh = /* @__PURE__ */ Bt({
  __name: "Row",
  props: {
    row: {},
    resource: {},
    virtualizer: {},
    size: {}
  },
  setup(t) {
    const e = t, n = je("api"), r = z(() => o(n.utils.getEvents(e.resource.id), e.size));
    function o(i, s) {
      const a = [], u = $.PlainDate.from(n.view.start), c = u.toZonedDateTime(n.view.timezone), l = Array.from(i.values());
      for (let d = 0; d < l.length; d++) {
        const f = l[d], h = er(f.start) && er(f.end), m = h ? u : c, g = h ? $.PlainDate.from(f.start) : $.Instant.from(f.start).toZonedDateTimeISO(n.view.timezone), p = h ? $.PlainDate.from(f.end) : $.Instant.from(f.end).toZonedDateTimeISO(n.view.timezone), w = g.until(p), v = m.until(g), y = Math.floor(n.internal.scale * w.total({ unit: "minutes", relativeTo: g })), b = Math.floor(n.internal.scale * v.total({ unit: "minutes", relativeTo: m })), D = b + y;
        if (D <= 0 || b >= s)
          continue;
        const S = Math.max(b, 0), P = Math.min(D, s), k = P - S;
        a.push({
          event: f,
          start: S,
          end: P,
          size: k
        });
      }
      return a;
    }
    return (i, s) => Z(i.$slots, "default", gt(xt({ row: i.row, resource: i.resource, virtualizer: i.virtualizer, eventRows: r.value })));
  }
}), $r = 100, wh = 60, ps = 0.1;
function yh(t) {
  const e = J(0), n = J(0);
  let r, o, i = 0, s = 0, a = 0, u = 0, c = 0, l = 0;
  function d(g) {
    const p = g.clientX - r.left, w = g.clientY - r.top;
    e.value = t.scrollLeft - i, n.value = t.scrollTop - s, a = vs(p, r.width), u = vs(w, r.height);
  }
  function f() {
    r = t.getBoundingClientRect(), i = t.scrollLeft, s = t.scrollTop, t.addEventListener("mousemove", d), m();
  }
  function h() {
    t.removeEventListener("mousemove", d), cancelAnimationFrame(o), a = 0, u = 0, c = 0, l = 0;
  }
  function m() {
    c = c + (a - c) * ps, l = l + (u - l) * ps, (c !== 0 || l !== 0) && t.scrollBy(c, l), o = requestAnimationFrame(m);
  }
  return {
    scrolledX: e,
    scrolledY: n,
    start: f,
    stop: h
  };
}
function vs(t, e) {
  const n = t < $r ? -1 : t > e - $r ? 1 : 0, r = n === -1 ? t : e - t;
  return n * wh * (1 - r / $r);
}
const zh = /* @__PURE__ */ Bt({
  __name: "ResizeHandle",
  props: {
    event: {},
    resource: {},
    date: {}
  },
  setup(t) {
    const e = t, n = je("api"), { elements: r, view: o, resources: i, layout: s, callbacks: a, utils: u, internal: c } = Me(n), l = [], d = [], f = J(!1), h = J(0), m = J(0), { scrolledX: g, scrolledY: p, start: w, stop: v } = yh(r.value.timeline);
    function y(M) {
      h.value = M.clientX, m.value = M.clientY, f.value = !0, c.value.isResizing = !0, k(), P(), document.addEventListener("mousemove", b), document.addEventListener("mouseup", D), w();
    }
    function b(M) {
      const N = Math.max(0, M.clientX - h.value + g.value), F = Math.max(0, M.clientY - m.value + p.value);
      S(l, c.value.resizeResources, F, e.resource.id), S(d, c.value.resizeDates, N, e.date);
    }
    function D() {
      const M = Array.from(c.value.resizeResources.values()).slice(1).map((F) => u.value.getResource(F)), N = Array.from(c.value.resizeDates.values()).slice(1);
      f.value = !1, c.value.resizeResources.clear(), c.value.resizeDates.clear(), c.value.isResizing = !1, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", D), v(), !(!N.length && !M.length) && a.value.onResizeEvent({
        event: e.event,
        resource: e.resource,
        resources: M,
        date: e.date,
        dates: N,
        view: o.value
      });
    }
    function S(M, N, F, ut) {
      const j = M.filter((me) => F > me.edge);
      N.clear(), N.add(ut);
      for (let me = 0; me < j.length; me++) {
        const Cc = j[me];
        N.add(Cc.id);
      }
    }
    function P() {
      let M = 20;
      const N = o.value.dates.indexOf(e.date) + 1;
      d.length = 0;
      for (let F = N; F < o.value.dates.length; F++) {
        const ut = o.value.dates[F], j = c.value.durations.get(ut) * c.value.scale;
        d.push({ id: ut, edge: M }), M += j;
      }
    }
    function k() {
      let M = 20;
      const N = Array.from(i.value.values()), F = N.findIndex((ut) => ut.id === e.resource.id) + 1;
      l.length = 0;
      for (let ut = F; ut < N.length; ut++) {
        const j = N[ut];
        if ("isGroup" in j) {
          M += s.value.resourceGroupSize;
          continue;
        }
        const me = j.maxEvents * s.value.eventSize;
        l.push({ id: j.id, edge: M }), M += me;
      }
    }
    return (M, N) => (U(), ot("div", {
      draggable: "true",
      style: { position: "absolute", top: "0", bottom: "0", right: "0", cursor: "ew-resize" },
      onDragstart: N[0] || (N[0] = Ln(() => {
      }, ["stop", "prevent"])),
      onMousedown: y
    }, [
      Z(M.$slots, "default", gt(xt({ isResizing: f.value })))
    ], 32));
  }
}), Ch = { install: (t) => t.component("Cullendar", vh) };
export {
  vh as Cullendar,
  Oh as DragEvent,
  Rh as DropDay,
  zh as ResizeHandle,
  Nh as Row,
  Ih as create,
  Ch as default
};
