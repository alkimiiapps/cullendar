import { reactive as ys, ref as dt, computed as P, unref as tt, watch as sn, shallowRef as Cc, triggerRef as Ci, onScopeDispose as zc, defineComponent as ee, createElementBlock as ot, openBlock as $, createElementVNode as Jr, normalizeStyle as an, renderSlot as L, Fragment as Ln, renderList as $n, mergeProps as Ce, inject as gn, toRefs as Ye, onMounted as Es, onUnmounted as _c, createBlock as Kr, normalizeClass as Qr, withCtx as he, normalizeProps as Gt, guardReactiveProps as _e, provide as kc, createVNode as zi, createCommentVNode as bs, withModifiers as Wn } from "vue";
function Pc() {
  return Math.random().toString(36).substring(2, 11);
}
function K(t, e, n, r, o) {
  return Ft(e, ((i, s) => {
    const a = i[s];
    if (a === void 0)
      throw new TypeError(qo(s));
    return a;
  })(t, e), n, r, o);
}
function Ft(t, e, n, r, o, i) {
  const s = un(e, n, r);
  if (o && e !== s)
    throw new RangeError(Fa(t, e, n, r, i));
  return s;
}
function H(t) {
  return t !== null && /object|function/.test(typeof t);
}
function at(t, e = Map) {
  const n = new e();
  return (r, ...o) => {
    if (n.has(r))
      return n.get(r);
    const i = t(r, ...o);
    return n.set(r, i), i;
  };
}
function cn(t) {
  return ke({
    name: t
  }, 1);
}
function ke(t, e) {
  return xt((n) => ({
    value: n,
    configurable: 1,
    writable: !e
  }), t);
}
function Fc(t) {
  return xt((e) => ({
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
function Ae(t, e) {
  const n = {};
  let r = t.length;
  for (const o of e)
    n[t[--r]] = o;
  return n;
}
function xt(t, e, n) {
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
function Ss(t, e, n) {
  const r = {};
  for (let o = 0; o < t.length; o++)
    r[e[o]] = n[t[o]];
  return r;
}
function mt(t, e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of t)
    n[r] = e[r];
  return n;
}
function _i(t, e) {
  for (const n of e)
    if (n in t)
      return 1;
  return 0;
}
function Ms(t, e, n) {
  for (const r of t)
    if (e[r] !== n[r])
      return 0;
  return 1;
}
function Ds(t, e, n) {
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
function vn(t) {
  return t.slice().sort();
}
function Un(t, e) {
  return String(e).padStart(t, "0");
}
function Vt(t, e) {
  return Math.sign(t - e);
}
function un(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function _t(t, e) {
  return [Math.floor(t / e), rn(t, e)];
}
function rn(t, e) {
  return (t % e + e) % e;
}
function Xt(t, e) {
  return [rr(t, e), eo(t, e)];
}
function rr(t, e) {
  return Math.trunc(t / e) || 0;
}
function eo(t, e) {
  return t % e || 0;
}
function Pn(t) {
  return Math.abs(t % 1) === 0.5;
}
function Is(t, e, n) {
  let r = 0, o = 0;
  for (let a = 0; a <= e; a++) {
    const c = t[n[a]], u = Dt[a], l = F / u, [d, f] = Xt(c, l);
    r += f * u, o += d;
  }
  const [i, s] = Xt(r, F);
  return [o + i, s];
}
function or(t, e, n) {
  const r = {};
  for (let o = e; o >= 0; o--) {
    const i = Dt[o];
    r[n[o]] = rr(t, i), t = eo(t, i);
  }
  return r;
}
function xc(t) {
  if (t !== void 0)
    return W(t);
}
function Yc(t) {
  if (t !== void 0)
    return zt(t);
}
function Ts(t) {
  if (t !== void 0)
    return no(t);
}
function zt(t) {
  return Ns(no(t));
}
function no(t) {
  return Rs(Vl(t));
}
function Os(t, e) {
  if (e == null)
    throw new RangeError(qo(t));
  return e;
}
function wn(t) {
  if (!H(t))
    throw new TypeError(wl);
  return t;
}
function ro(t, e, n = t) {
  if (typeof e !== t)
    throw new TypeError(ae(n, e));
  return e;
}
function Rs(t, e = "number") {
  if (!Number.isInteger(t))
    throw new RangeError(fl(e, t));
  return t || 0;
}
function Ns(t, e = "number") {
  if (t <= 0)
    throw new RangeError(hl(e, t));
  return t;
}
function oo(t) {
  if (typeof t == "symbol")
    throw new TypeError(vl);
  return String(t);
}
function An(t, e) {
  return H(t) ? String(t) : W(t, e);
}
function io(t) {
  if (typeof t == "string")
    return BigInt(t);
  if (typeof t != "bigint")
    throw new TypeError(gl(t));
  return t;
}
function Cs(t, e = "number") {
  if (typeof t == "bigint")
    throw new TypeError(pl(e));
  if (t = Number(t), !Number.isFinite(t))
    throw new RangeError(ml(e, t));
  return t;
}
function V(t, e) {
  return Math.trunc(Cs(t, e)) || 0;
}
function so(t, e) {
  return Rs(Cs(t, e), e);
}
function Pi(t, e) {
  return Ns(V(t, e), e);
}
function ao(t, e) {
  let [n, r] = Xt(e, F), o = t + n;
  const i = Math.sign(o);
  return i && i === -Math.sign(r) && (o -= i, r += i * F), [o, r];
}
function Pe(t, e, n = 1) {
  return ao(t[0] + e[0] * n, t[1] + e[1] * n);
}
function pe(t, e) {
  return ao(t[0], t[1] + e);
}
function St(t, e) {
  return Pe(e, t, -1);
}
function ct(t, e) {
  return Vt(t[0], e[0]) || Vt(t[1], e[1]);
}
function zs(t, e, n) {
  return ct(t, e) === -1 || ct(t, n) === 1;
}
function co(t, e = 1) {
  const n = BigInt(F / e);
  return [Number(t / n), Number(t % n) * e];
}
function Gn(t, e = 1) {
  const n = F / e, [r, o] = Xt(t, n);
  return [r, o * e];
}
function Mt(t, e = 1, n) {
  const [r, o] = t, [i, s] = Xt(o, e);
  return r * (F / e) + (i + (n ? s / e : 0));
}
function uo(t, e, n = _t) {
  const [r, o] = t, [i, s] = n(o, e);
  return [r * (F / e) + i, s];
}
function lo(t) {
  return K(t, "isoYear", pn, mn, 1), t.isoYear === pn ? K(t, "isoMonth", 4, 12, 1) : t.isoYear === mn && K(t, "isoMonth", 1, 9, 1), t;
}
function ft(t) {
  return nt({
    ...t,
    ...rt,
    isoHour: 12
  }), t;
}
function nt(t) {
  const e = K(t, "isoYear", pn, mn, 1), n = e === pn ? 1 : e === mn ? -1 : 0;
  return n && It(Z({
    ...t,
    isoDay: t.isoDay + n,
    isoNanosecond: t.isoNanosecond - n
  })), t;
}
function It(t) {
  if (!t || zs(t, ed, td))
    throw new RangeError(ce);
  return t;
}
function Jt(t) {
  return Is(t, 5, vt)[1];
}
function ir(t) {
  const [e, n] = _t(t, F);
  return [or(n, 5, vt), e];
}
function Fi(t) {
  return uo(t, bt);
}
function q(t) {
  return Ze(t.isoYear, t.isoMonth, t.isoDay, t.isoHour, t.isoMinute, t.isoSecond, t.isoMillisecond);
}
function Z(t) {
  const e = q(t);
  if (e !== void 0) {
    const [n, r] = Xt(e, et);
    return [n, r * Zt + (t.isoMicrosecond || 0) * In + (t.isoNanosecond || 0)];
  }
}
function fo(t, e) {
  const [n, r] = ir(Jt(t) - e);
  return It(Z({
    ...t,
    isoDay: t.isoDay + r,
    ...n
  }));
}
function Vn(...t) {
  return Ze(...t) / Wa;
}
function Ze(...t) {
  const [e, n] = _s(...t), r = e.valueOf();
  if (!isNaN(r))
    return r - n * et;
}
function _s(t, e = 1, n = 1, r = 0, o = 0, i = 0, s = 0) {
  const a = t === pn ? 1 : t === mn ? -1 : 0, c = /* @__PURE__ */ new Date();
  return c.setUTCHours(r, o, i, s), c.setUTCFullYear(t, e - 1, n + a), [c, a];
}
function je(t, e) {
  let [n, r] = pe(t, e);
  r < 0 && (r += F, n -= 1);
  const [o, i] = _t(r, Zt), [s, a] = _t(i, In);
  return sr(n * et + o, s, a);
}
function sr(t, e = 0, n = 0) {
  const r = Math.ceil(Math.max(0, Math.abs(t) - Ql) / et) * Math.sign(t), o = new Date(t - r * et);
  return Ae(Or, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + r, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), e, n]);
}
function ho(t, e) {
  if (e < -864e13)
    throw new RangeError(ce);
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
function Ps() {
  return Lt;
}
function Fs(t, e) {
  switch (e) {
    case 2:
      return po(t) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function xs(t) {
  return po(t) ? 366 : 365;
}
function po(t) {
  return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
}
function Ys(t) {
  const [e, n] = _s(t.isoYear, t.isoMonth, t.isoDay);
  return rn(e.getUTCDay() - n, 7) || 7;
}
function As(t) {
  return this.id === qe ? (({ isoYear: e }) => e < 1 ? ["gregory-inverse", 1 - e] : ["gregory", e])(t) : this.id === te ? od(t) : [];
}
function Ac(t) {
  const e = q(t);
  if (e < rd) {
    const { isoYear: i } = t;
    return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
  }
  const n = ho(mi(te), e), { era: r, eraYear: o } = Da(n, te);
  return [r, o];
}
function ar(t) {
  return we(t), Be(t, 1), t;
}
function we(t) {
  return Zs(t, 1), t;
}
function xi(t) {
  return Ms(ri, t, Zs(t));
}
function Zs(t, e) {
  const { isoYear: n } = t, r = K(t, "isoMonth", 1, Ps(), e);
  return {
    isoYear: n,
    isoMonth: r,
    isoDay: K(t, "isoDay", 1, Fs(n, r), e)
  };
}
function Be(t, e) {
  return Ae(vt, [K(t, "isoHour", 0, 23, e), K(t, "isoMinute", 0, 59, e), K(t, "isoSecond", 0, 59, e), K(t, "isoMillisecond", 0, 999, e), K(t, "isoMicrosecond", 0, 999, e), K(t, "isoNanosecond", 0, 999, e)]);
}
function I(t) {
  return t === void 0 ? 0 : sc(wn(t));
}
function cr(t, e = 0) {
  t = Tt(t);
  const n = ac(t), r = md(t, e);
  return [sc(t), r, n];
}
function Le(t, e, n, r = 9, o = 0, i = 4) {
  e = Tt(e);
  let s = ic(e, r, o), a = wo(e), c = Rn(e, i);
  const u = On(e, r, o, 1);
  return s == null ? s = Math.max(n, u) : $s(s, u), a = yo(a, u, 1), t && (c = ((l) => l < 4 ? (l + 2) % 4 : l)(c)), [s, u, a, c];
}
function ur(t, e = 6, n) {
  let r = wo(t = lr(t, Qn));
  const o = Rn(t, 7);
  let i = On(t, e);
  return i = Os(Qn, i), r = yo(r, i, void 0, n), [i, r, o];
}
function go(t) {
  return ii(Tt(t));
}
function js(t, e) {
  return vo(Tt(t), e);
}
function Zc(t) {
  const e = lr(t, Ar), n = ne(Ar, fd, e, 0);
  if (!n)
    throw new RangeError(ae(Ar, n));
  return n;
}
function vo(t, e = 4) {
  const n = Ls(t);
  return [Rn(t, 4), ...Bs(On(t, e), n)];
}
function Bs(t, e) {
  return t != null ? [Dt[t], t < 4 ? 9 - 3 * t : -1] : [e === void 0 ? 1 : 10 ** (9 - e), e];
}
function wo(t) {
  const e = t[on];
  return e === void 0 ? 1 : V(e, on);
}
function yo(t, e, n, r) {
  const o = r ? F : Dt[e + 1];
  if (o) {
    const i = Dt[e];
    if (o % ((t = Ft(on, t, 1, o / i - (r ? 0 : 1), 1)) * i))
      throw new RangeError(ae(on, t));
  } else
    t = Ft(on, t, 1, n ? 10 ** 9 : 1, 1);
  return t;
}
function Ls(t) {
  let e = t[Yr];
  if (e !== void 0) {
    if (typeof e != "number") {
      if (oo(e) === "auto")
        return;
      throw new RangeError(ae(Yr, e));
    }
    e = Ft(Yr, Math.floor(e), 0, 9, 1);
  }
  return e;
}
function Tt(t) {
  return t === void 0 ? {} : wn(t);
}
function lr(t, e) {
  return typeof t == "string" ? {
    [e]: t
  } : wn(t);
}
function dr(t) {
  return {
    overflow: id[t]
  };
}
function Eo(t, e, n = 9, r = 0, o) {
  let i = e[t];
  if (i === void 0)
    return o ? r : void 0;
  if (i = oo(i), i === "auto")
    return o ? r : null;
  let s = Ur[i];
  if (s === void 0 && (s = Xl[i]), s === void 0)
    throw new RangeError(Ya(t, i, Ur));
  return Ft(t, s, r, n, 1, Ho), s;
}
function ne(t, e, n, r = 0) {
  const o = n[t];
  if (o === void 0)
    return r;
  const i = oo(o), s = e[i];
  if (s === void 0)
    throw new RangeError(Ya(t, i, e));
  return s;
}
function $s(t, e) {
  if (e > t)
    throw new RangeError(Zl);
}
function Yt(t) {
  return {
    branding: ui,
    epochNanoseconds: t
  };
}
function pt(t, e, n) {
  return {
    branding: ue,
    calendar: n,
    timeZone: e,
    epochNanoseconds: t
  };
}
function gt(t, e = t.calendar) {
  return {
    branding: He,
    calendar: e,
    ...mt(Jl, t)
  };
}
function At(t, e = t.calendar) {
  return {
    branding: Nn,
    calendar: e,
    ...mt(oi, t)
  };
}
function ln(t, e = t.calendar) {
  return {
    branding: si,
    calendar: e,
    ...mt(oi, t)
  };
}
function qn(t, e = t.calendar) {
  return {
    branding: ai,
    calendar: e,
    ...mt(oi, t)
  };
}
function Ot(t) {
  return {
    branding: ci,
    ...mt(tc, t)
  };
}
function A(t) {
  return {
    branding: li,
    sign: re(t),
    ...mt(ti, t)
  };
}
function bo(t) {
  return uo(t.epochNanoseconds, Zt)[0];
}
function jc(t) {
  return ((e, n = 1) => {
    const [r, o] = e, i = Math.floor(o / n), s = F / n;
    return BigInt(r) * BigInt(s) + BigInt(i);
  })(t.epochNanoseconds);
}
function Ws(t) {
  return t.epochNanoseconds;
}
function Bc(t, e, n, r, o) {
  const i = ge(r), [s, a] = ((v, w) => {
    const y = w((v = lr(v, qr))[rc]);
    let E = hd(v);
    return E = Os(qr, E), [E, y];
  })(o, t), c = Math.max(s, i);
  if (!a && fn(c, a))
    return Yi(r, s);
  if (!a)
    throw new RangeError(Dr);
  if (!r.sign)
    return 0;
  const [u, l, d] = gr(e, n, a), f = Co(d), h = vr(d), m = zo(d), p = h(l, u, r);
  Fe(a) || (nt(u), nt(p));
  const g = m(l, u, p, s);
  return fn(s, a) ? Yi(g, s) : ((v, w, y, E, T, N, C) => {
    const z = re(v), [_, Rt] = So(E, ni(y, v), y, z, T, N, C), wt = Mo(w, _, Rt);
    return v[O[y]] + wt * z;
  })(g, f(p), s, l, u, f, h);
}
function Yi(t, e) {
  return Mt(j(t), Dt[e], 1);
}
function So(t, e, n, r, o, i, s) {
  const a = O[n], c = {
    ...e,
    [a]: e[a] + r
  }, u = s(t, o, e), l = s(t, o, c);
  return [i(u), i(l)];
}
function Mo(t, e, n) {
  const r = Mt(St(e, n));
  if (!r)
    throw new RangeError(Ve);
  return Mt(St(e, t)) / r;
}
function Lc(t, e) {
  const [n, r, o] = ur(e, 5, 1);
  return Yt(hr(t.epochNanoseconds, n, r, o, 1));
}
function $c(t, e, n) {
  let { epochNanoseconds: r, timeZone: o, calendar: i } = e;
  const [s, a, c] = ur(n);
  if (s === 0 && a === 1)
    return e;
  const u = t(o);
  if (s === 6)
    r = ((l, d, f, h) => {
      const m = lt(f, d), [p, g] = l(m), v = f.epochNanoseconds, w = Qt(d, p), y = Qt(d, g);
      if (zs(v, w, y))
        throw new RangeError(Ve);
      return Hs(Mo(v, w, y), h) ? y : w;
    })(Vs, u, e, c);
  else {
    const l = u.R(r);
    r = $e(u, Us(je(r, l), s, a, c), l, 2, 0, 1);
  }
  return pt(r, o, i);
}
function Wc(t, e) {
  return gt(Us(t, ...ur(e)), t.calendar);
}
function Uc(t, e) {
  const [n, r, o] = ur(e, 5);
  var i;
  return Ot((i = o, Do(t, yn(n, r), i)[0]));
}
function Gc(t, e) {
  const n = t(e.timeZone), r = lt(e, n), [o, i] = Vs(r), s = Mt(St(Qt(n, o), Qt(n, i)), Tr, 1);
  if (s <= 0)
    throw new RangeError(Ve);
  return s;
}
function Vc(t, e) {
  const { timeZone: n, calendar: r } = e, o = ((i, s, a) => Qt(s, i(lt(a, s))))(qs, t(n), e);
  return pt(o, n, r);
}
function Us(t, e, n, r) {
  return Gs(t, yn(e, n), r);
}
function Gs(t, e, n) {
  const [r, o] = Do(t, e, n);
  return nt({
    ...ye(t, o),
    ...r
  });
}
function Do(t, e, n) {
  return ir(Kt(Jt(t), e, n));
}
function Hn(t) {
  return Kt(t, Ir, 7);
}
function yn(t, e) {
  return Dt[t] * e;
}
function Vs(t) {
  const e = qs(t);
  return [e, ye(e, 1)];
}
function qs(t) {
  return Kl(6, t);
}
function qc(t, e, n) {
  const r = Math.min(ge(t), 6);
  return We(mr(j(t, r), e, n), r);
}
function fr(t, e, n, r, o, i, s, a, c, u) {
  if (r === 0 && o === 1)
    return t;
  const l = fn(r, a) ? Fe(a) && r < 6 && n >= 6 ? Xc : Hc : Jc;
  let [d, f, h] = l(t, e, n, r, o, i, s, a, c, u);
  return h && r !== 7 && (d = ((m, p, g, v, w, y, E, T) => {
    const N = re(m);
    for (let C = v + 1; C <= g; C++) {
      if (C === 7 && g !== 7)
        continue;
      const z = ni(C, m);
      z[O[C]] += N;
      const _ = Mt(St(E(T(w, y, z)), p));
      if (_ && Math.sign(_) !== N)
        break;
      m = z;
    }
    return m;
  })(d, f, n, Math.max(6, r), s, a, c, u)), d;
}
function hr(t, e, n, r, o) {
  if (e === 6) {
    const i = ((s) => s[0] + s[1] / F)(t);
    return [Kt(i, n, r), 0];
  }
  return mr(t, yn(e, n), r, o);
}
function mr(t, e, n, r) {
  let [o, i] = t;
  r && i < 0 && (i += F, o -= 1);
  const [s, a] = _t(Kt(i, e, n), F);
  return ao(o + s, a);
}
function Kt(t, e, n) {
  return Hs(t / e, n) * e;
}
function Hs(t, e) {
  return vd[e](t);
}
function Hc(t, e, n, r, o, i) {
  const s = re(t), a = j(t), c = hr(a, r, o, i), u = St(a, c), l = Math.sign(c[0] - a[0]) === s, d = We(c, Math.min(n, 6));
  return [{
    ...t,
    ...d
  }, Pe(e, u), l];
}
function Xc(t, e, n, r, o, i, s, a, c, u) {
  const l = re(t) || 1, d = Mt(j(t, 5)), f = yn(r, o);
  let h = Kt(d, f, i);
  const [m, p] = So(s, {
    ...t,
    ...ei
  }, 6, l, a, c, u), g = h - Mt(St(m, p));
  let v = 0;
  g && Math.sign(g) !== l ? e = pe(m, h) : (v += l, h = Kt(g, f, i), e = pe(p, h));
  const w = wr(h);
  return [{
    ...t,
    ...w,
    days: t.days + v
  }, e, !!v];
}
function Jc(t, e, n, r, o, i, s, a, c, u) {
  const l = re(t), d = O[r], f = ni(r, t);
  r === 7 && (t = {
    ...t,
    weeks: t.weeks + Math.trunc(t.days / 7)
  });
  const h = rr(t[d], o) * o;
  f[d] = h;
  const [m, p] = So(s, f, r, o * l, a, c, u), g = h + Mo(e, m, p) * l * o, v = Kt(g, o, i), w = Math.sign(v - g) === l;
  return f[d] = v, [f, w ? p : m, w];
}
function Ai(t, e, n, r) {
  const [o, i, s, a] = ((u) => {
    const l = vo(u = Tt(u));
    return [u.timeZone, ...l];
  })(r), c = o !== void 0;
  return ((u, l, d, f, h, m) => {
    d = mr(d, h, f, 1);
    const p = l.R(d);
    return Io(je(d, p), m) + (u ? En(Hn(p)) : "Z");
  })(c, e(c ? t(o) : Me), n.epochNanoseconds, i, s, a);
}
function Zi(t, e, n) {
  const [r, o, i, s, a, c] = ((u) => {
    u = Tt(u);
    const l = ii(u), d = Ls(u), f = gd(u), h = Rn(u, 4), m = On(u, 4);
    return [l, pd(u), f, h, ...Bs(m, d)];
  })(n);
  return ((u, l, d, f, h, m, p, g, v, w) => {
    f = mr(f, v, g, 1);
    const y = u(d).R(f);
    return Io(je(f, y), w) + En(Hn(y), p) + ((E, T) => T !== 1 ? "[" + (T === 2 ? "!" : "") + E + "]" : "")(d, m) + To(l, h);
  })(t, e.calendar, e.timeZone, e.epochNanoseconds, r, o, i, s, a, c);
}
function ji(t, e) {
  const [n, r, o, i] = ((u) => (u = Tt(u), [ii(u), ...vo(u)]))(e);
  return s = t.calendar, a = n, c = i, Io(Gs(t, o, r), c) + To(s, a);
  var s, a, c;
}
function Bi(t, e) {
  return n = t.calendar, r = t, o = go(e), Xn(r) + To(n, o);
  var n, r, o;
}
function Li(t, e) {
  return Xs(t.calendar, Js, t, go(e));
}
function $i(t, e) {
  return Xs(t.calendar, Kc, t, go(e));
}
function Wi(t, e) {
  const [n, r, o] = js(e);
  return i = o, Ks(Do(t, r, n)[0], i);
  var i;
}
function zr(t, e) {
  const [n, r, o] = js(e, 3);
  return r > 1 && Ee(t = {
    ...t,
    ...qc(t, r, n)
  }), ((i, s) => {
    const { sign: a } = i, c = a === -1 ? X(i) : i, { hours: u, minutes: l } = c, [d, f] = uo(j(c, 3), bt, Xt);
    na(d);
    const h = Oo(f, s), m = s >= 0 || !a || h;
    return (a < 0 ? "-" : "") + "P" + Ui({
      Y: fe(c.years),
      M: fe(c.months),
      W: fe(c.weeks),
      D: fe(c.days)
    }) + (u || l || d || m ? "T" + Ui({
      H: fe(u),
      M: fe(l),
      S: fe(d, m) + h
    }) : "");
  })(t, o);
}
function Xs(t, e, n, r) {
  const o = r > 1 || r === 0 && t !== D;
  return r === 1 ? t === D ? e(n) : Xn(n) : o ? Xn(n) + Qs(t, r === 2) : e(n);
}
function Ui(t) {
  const e = [];
  for (const n in t) {
    const r = t[n];
    r && e.push(r, n);
  }
  return e.join("");
}
function Io(t, e) {
  return Xn(t) + "T" + Ks(t, e);
}
function Xn(t) {
  return Js(t) + "-" + ht(t.isoDay);
}
function Js(t) {
  const { isoYear: e } = t;
  return (e < 0 || e > 9999 ? ta(e) + Un(6, Math.abs(e)) : Un(4, e)) + "-" + ht(t.isoMonth);
}
function Kc(t) {
  return ht(t.isoMonth) + "-" + ht(t.isoDay);
}
function Ks(t, e) {
  const n = [ht(t.isoHour), ht(t.isoMinute)];
  return e !== -1 && n.push(ht(t.isoSecond) + ((r, o, i, s) => Oo(r * Zt + o * In + i, s))(t.isoMillisecond, t.isoMicrosecond, t.isoNanosecond, e)), n.join(":");
}
function En(t, e = 0) {
  if (e === 1)
    return "";
  const [n, r] = _t(Math.abs(t), Tr), [o, i] = _t(r, Ir), [s, a] = _t(i, bt);
  return ta(t) + ht(n) + ":" + ht(o) + (s || a ? ":" + ht(s) + Oo(a) : "");
}
function To(t, e) {
  return e !== 1 && (e > 1 || e === 0 && t !== D) ? Qs(t, e === 2) : "";
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
function fe(t, e) {
  return t || e ? t.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function Qc(t, e) {
  const { epochNanoseconds: n } = t, r = (e.R ? e : e(t.timeZone)).R(n), o = je(n, r);
  return {
    calendar: t.calendar,
    ...o,
    offsetNanoseconds: r
  };
}
function $e(t, e, n, r = 0, o = 0, i, s) {
  if (n !== void 0 && r === 1 && (r === 1 || s))
    return fo(e, n);
  const a = t.I(e);
  if (n !== void 0 && r !== 3) {
    const c = ((u, l, d, f) => {
      const h = Z(l);
      f && (d = Hn(d));
      for (const m of u) {
        let p = Mt(St(m, h));
        if (f && (p = Hn(p)), p === d)
          return m;
      }
    })(a, e, n, i);
    if (c !== void 0)
      return c;
    if (r === 0)
      throw new RangeError(kl);
  }
  return s ? Z(e) : bn(t, e, o, a);
}
function bn(t, e, n = 0, r = t.I(e)) {
  if (r.length === 1)
    return r[0];
  if (n === 1)
    throw new RangeError(Pl);
  if (r.length)
    return r[n === 3 ? 1 : 0];
  const o = Z(e), i = ((a, c) => {
    const u = a.R(pe(c, -864e11));
    return ((l) => {
      if (l > F)
        throw new RangeError(_l);
      return l;
    })(a.R(pe(c, F)) - u);
  })(t, o), s = i * (n === 2 ? -1 : 1);
  return (r = t.I(je(o, s)))[n === 2 ? 0 : r.length - 1];
}
function Qt(t, e) {
  const n = t.I(e);
  if (n.length)
    return n[0];
  const r = pe(Z(e), -864e11);
  return t.O(r, 1);
}
function Gi(t, e, n) {
  return Yt(It(Pe(e.epochNanoseconds, ((r) => {
    if (ra(r))
      throw new RangeError(Yl);
    return j(r, 5);
  })(t ? X(n) : n))));
}
function Vi(t, e, n, r, o, i = /* @__PURE__ */ Object.create(null)) {
  const s = e(r.timeZone), a = t(r.calendar);
  return {
    ...r,
    ...Ro(s, a, r, n ? X(o) : o, i)
  };
}
function qi(t, e, n, r, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i } = n;
  return gt(No(t(i), n, e ? X(r) : r, o), i);
}
function Hi(t, e, n, r, o) {
  const { calendar: i } = n;
  return At(pr(t(i), n, e ? X(r) : r, o), i);
}
function Xi(t, e, n, r, o) {
  const i = n.calendar, s = t(i);
  let a = ft(dn(s, n));
  e && (r = _o(r)), r.sign < 0 && (a = s.P(a, {
    ...B,
    months: 1
  }), a = ye(a, -1));
  const c = s.P(a, r, o);
  return ln(dn(s, c), i);
}
function Ji(t, e, n) {
  return Ot(ea(e, t ? X(n) : n)[0]);
}
function Ro(t, e, n, r, o) {
  const i = j(r, 5);
  let s = n.epochNanoseconds;
  if (ra(r)) {
    const a = lt(n, t);
    s = Pe(bn(t, {
      ...pr(e, a, {
        ...r,
        ...ei
      }, o),
      ...mt(vt, a)
    }), i);
  } else
    s = Pe(s, i), I(o);
  return {
    epochNanoseconds: It(s)
  };
}
function No(t, e, n, r) {
  const [o, i] = ea(e, n);
  return nt({
    ...pr(t, e, {
      ...n,
      ...ei,
      days: n.days + i
    }, r),
    ...o
  });
}
function pr(t, e, n, r) {
  if (n.years || n.months || n.weeks)
    return t.P(e, n, r);
  I(r);
  const o = n.days + j(n, 5)[0];
  return o ? ft(ye(e, o)) : e;
}
function dn(t, e, n = 1) {
  return ye(e, n - t.day(e));
}
function ea(t, e) {
  const [n, r] = j(e, 5), [o, i] = ir(Jt(t) + r);
  return [o, n + i];
}
function ye(t, e) {
  return e ? {
    ...t,
    ...sr(q(t) + e * et)
  } : t;
}
function gr(t, e, n) {
  const r = t(n.calendar);
  return Fe(n) ? [n, r, e(n.timeZone)] : [{
    ...n,
    ...rt
  }, r];
}
function Co(t) {
  return t ? Ws : Z;
}
function vr(t) {
  return t ? M(Ro, t) : No;
}
function zo(t) {
  return t ? M(Mu, t) : Du;
}
function Fe(t) {
  return t && t.epochNanoseconds;
}
function fn(t, e) {
  return t <= 6 - (Fe(e) ? 1 : 0);
}
function Ki(t, e, n, r, o, i, s) {
  const a = t(Tt(s).relativeTo), c = Math.max(ge(o), ge(i));
  if (fn(c, a))
    return A(Ee(((p, g, v, w) => {
      const y = Pe(j(p), j(g), w ? -1 : 1);
      if (!Number.isFinite(y[0]))
        throw new RangeError(ce);
      return {
        ...B,
        ...We(y, v)
      };
    })(o, i, c, r)));
  if (!a)
    throw new RangeError(Dr);
  r && (i = X(i));
  const [u, l, d] = gr(e, n, a), f = vr(d), h = zo(d), m = f(l, u, o);
  return A(h(l, u, f(l, m, i), c));
}
function tu(t, e, n, r, o) {
  const i = ge(r), [s, a, c, u, l] = ((N, C, z) => {
    N = lr(N, Qn);
    let _ = ic(N);
    const Rt = z(N[rc]);
    let wt = wo(N);
    const k = Rn(N, 7);
    let R = On(N);
    if (_ === void 0 && R === void 0)
      throw new RangeError(Al);
    if (R == null && (R = 0), _ == null && (_ = Math.max(R, C)), $s(_, R), wt = yo(wt, R, 1), wt > 1 && R > 5 && _ !== R)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [_, R, wt, k, Rt];
  })(o, i, t), d = Math.max(i, s);
  if (!l && d <= 6)
    return A(Ee(((N, C, z, _, Rt) => {
      const wt = hr(j(N), z, _, Rt);
      return {
        ...B,
        ...We(wt, C)
      };
    })(r, s, a, c, u)));
  if (!Fe(l) && !r.sign)
    return r;
  if (!l)
    throw new RangeError(Dr);
  const [f, h, m] = gr(e, n, l), p = Co(m), g = vr(m), v = zo(m), w = g(h, f, r);
  Fe(l) || (nt(f), nt(w));
  let y = v(h, f, w, s);
  const E = r.sign, T = re(y);
  if (E && T && E !== T)
    throw new RangeError(Ve);
  return y = fr(y, p(w), s, a, c, u, h, f, p, g), A(y);
}
function eu(t) {
  return t.sign === -1 ? _o(t) : t;
}
function _o(t) {
  return A(X(t));
}
function X(t) {
  const e = {};
  for (const n of O)
    e[n] = -1 * t[n] || 0;
  return e;
}
function nu(t) {
  return !t.sign;
}
function re(t, e = O) {
  let n = 0;
  for (const r of e) {
    const o = Math.sign(t[r]);
    if (o) {
      if (n && n !== o)
        throw new RangeError(xl);
      n = o;
    }
  }
  return n;
}
function Ee(t) {
  for (const e of Hl)
    Ft(e, t[e], -4294967295, bd, 1);
  return na(Mt(j(t), bt)), t;
}
function na(t) {
  if (!Number.isSafeInteger(t))
    throw new RangeError(Fl);
}
function j(t, e = 6) {
  return Is(t, e, O);
}
function We(t, e = 6) {
  const [n, r] = t, o = or(r, e, O);
  if (o[O[e]] += n * (F / Dt[e]), !Number.isFinite(o[O[e]]))
    throw new RangeError(ce);
  return o;
}
function wr(t, e = 5) {
  return or(t, e, O);
}
function ra(t) {
  return !!re(t, Qa);
}
function ge(t) {
  let e = 9;
  for (; e > 0 && !t[O[e]]; e--)
    ;
  return e;
}
function ru(t, e) {
  return [t, e];
}
function Qi(t) {
  const e = Math.floor(t / jn) * jn;
  return [e, e + jn];
}
function ou(t) {
  const e = oe(t = An(t));
  if (!e)
    throw new RangeError(Q(t));
  let n;
  if (e.j)
    n = 0;
  else {
    if (!e.offset)
      throw new RangeError(Q(t));
    n = be(e.offset);
  }
  return e.timeZone && Yo(e.timeZone, 1), Yt(fo(ar(e), n));
}
function iu(t) {
  const e = oe(W(t));
  if (!e)
    throw new RangeError(Q(t));
  if (e.timeZone)
    return oa(e, e.offset ? be(e.offset) : void 0);
  if (e.j)
    throw new RangeError(Q(t));
  return sa(e);
}
function su(t, e) {
  const n = oe(W(t));
  if (!n || !n.timeZone)
    throw new RangeError(Q(t));
  const { offset: r } = n, o = r ? be(r) : void 0, [, i, s] = cr(e);
  return oa(n, o, i, s);
}
function be(t) {
  const e = Yo(t);
  if (e === void 0)
    throw new RangeError(Q(t));
  return e;
}
function au(t) {
  const e = oe(W(t));
  if (!e || e.j)
    throw new RangeError(Q(t));
  return gt(ia(e));
}
function ko(t, e, n) {
  let r = oe(W(t));
  if (!r || r.j)
    throw new RangeError(Q(t));
  return e ? r.calendar === D && (r = r.isoYear === -271821 && r.isoMonth === 4 ? {
    ...r,
    isoDay: 20,
    ...rt
  } : {
    ...r,
    isoDay: 1,
    ...rt
  }) : n && r.calendar === D && (r = {
    ...r,
    isoYear: Pt
  }), At(r.C ? ia(r) : sa(r));
}
function cu(t, e) {
  const n = Fo(W(e));
  if (n)
    return Po(n), ln(lo(we(n)));
  const r = ko(e, 1);
  return ln(dn(t(r.calendar), r));
}
function Po(t) {
  if (t.calendar !== D)
    throw new RangeError(kt(t.calendar));
}
function uu(t, e) {
  const n = xo(W(e));
  if (n)
    return Po(n), qn(we(n));
  const r = ko(e, 0, 1), { calendar: o } = r, i = t(o), [s, a, c] = i.v(r), [u, l] = i.q(s, a), [d, f] = i.G(u, l, c);
  return qn(ft(i.V(d, f, c)), o);
}
function lu(t) {
  let e, n = ((r) => {
    const o = Rd.exec(r);
    return o ? (yr(o[10]), ua(o)) : void 0;
  })(W(t));
  if (!n) {
    if (n = oe(t), !n)
      throw new RangeError(Q(t));
    if (!n.C)
      throw new RangeError(Q(t));
    if (n.j)
      throw new RangeError(kt("Z"));
    Po(n);
  }
  if ((e = Fo(t)) && xi(e))
    throw new RangeError(Q(t));
  if ((e = xo(t)) && xi(e))
    throw new RangeError(Q(t));
  return Ot(Be(n, 1));
}
function du(t) {
  const e = ((n) => {
    const r = zd.exec(n);
    return r ? ((o) => {
      function i(l, d, f) {
        let h = 0, m = 0;
        if (f && ([h, c] = _t(c, Dt[f])), l !== void 0) {
          if (a)
            throw new RangeError(kt(l));
          m = ((p) => {
            const g = parseInt(p);
            if (!Number.isFinite(g))
              throw new RangeError(kt(p));
            return g;
          })(l), s = 1, d && (c = Ao(d) * (Dt[f] / bt), a = 1);
        }
        return h + m;
      }
      let s = 0, a = 0, c = 0, u = {
        ...Ae(O, [i(o[2]), i(o[3]), i(o[4]), i(o[5]), i(o[6], o[7], 5), i(o[8], o[9], 4), i(o[10], o[11], 3)]),
        ...or(c, 2, O)
      };
      if (!s)
        throw new RangeError(xa(O));
      return Zo(o[1]) < 0 && (u = X(u)), u;
    })(r) : void 0;
  })(W(t));
  if (!e)
    throw new RangeError(Q(t));
  return A(Ee(e));
}
function fu(t) {
  const e = oe(t) || Fo(t) || xo(t);
  return e ? e.calendar : t;
}
function hu(t) {
  const e = oe(t);
  return e && (e.timeZone || e.j && Me || e.offset) || t;
}
function oa(t, e, n = 0, r = 0) {
  const o = jo(t.timeZone), i = S(o);
  let s;
  return ar(t), s = t.C ? $e(i, t, e, n, r, !i.$, t.j) : Qt(i, t), pt(s, o, Mr(t.calendar));
}
function ia(t) {
  return aa(nt(ar(t)));
}
function sa(t) {
  return aa(ft(we(t)));
}
function aa(t) {
  return {
    ...t,
    calendar: Mr(t.calendar)
  };
}
function oe(t) {
  const e = Od.exec(t);
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
  const e = Id.exec(t);
  return e ? ((n) => ({
    isoYear: ca(n),
    isoMonth: parseInt(n[4]),
    isoDay: 1,
    ...yr(n[5])
  }))(e) : void 0;
}
function xo(t) {
  const e = Td.exec(t);
  return e ? ((n) => ({
    isoYear: Pt,
    isoMonth: parseInt(n[1]),
    isoDay: parseInt(n[2]),
    ...yr(n[3])
  }))(e) : void 0;
}
function Yo(t, e) {
  const n = Nd.exec(t);
  return n ? ((r, o) => {
    const i = r[4] || r[5];
    if (o && i)
      throw new RangeError(kt(i));
    return ((s) => {
      if (Math.abs(s) >= F)
        throw new RangeError(zl);
      return s;
    })((ze(r[2]) * Tr + ze(r[3]) * Ir + ze(r[4]) * bt + Ao(r[5] || "")) * Zo(r[1]));
  })(n, e) : void 0;
}
function ca(t) {
  const e = Zo(t[1]), n = parseInt(t[2] || t[3]);
  if (e < 0 && !n)
    throw new RangeError(kt(-0));
  return e * n;
}
function ua(t) {
  const e = ze(t[3]);
  return {
    ...ir(Ao(t[4] || ""))[0],
    isoHour: ze(t[1]),
    isoMinute: ze(t[2]),
    isoSecond: e === 60 ? 59 : e
  };
}
function yr(t) {
  let e, n;
  const r = [];
  if (t.replace(Cd, (o, i, s) => {
    const a = !!i, [c, u] = s.split("=").reverse();
    if (u) {
      if (u === "u-ca")
        r.push(c), e || (e = a);
      else if (a || /[A-Z]/.test(u))
        throw new RangeError(kt(o));
    } else {
      if (n)
        throw new RangeError(kt(o));
      n = c;
    }
    return "";
  }), r.length > 1 && e)
    throw new RangeError(kt(t));
  return {
    timeZone: n,
    calendar: r[0] || D
  };
}
function Ao(t) {
  return parseInt(t.padEnd(9, "0"));
}
function Ue(t) {
  return new RegExp(`^${t}$`, "i");
}
function Zo(t) {
  return t && t !== "+" ? -1 : 1;
}
function ze(t) {
  return t === void 0 ? 0 : parseInt(t);
}
function mu(t) {
  return jo(W(t));
}
function jo(t) {
  const e = Bo(t);
  return typeof e == "number" ? En(e) : e ? ((n) => {
    if (Pd.test(n))
      throw new RangeError(Ba(n));
    if (kd.test(n))
      throw new RangeError(Cl);
    return n.toLowerCase().split("/").map((r, o) => (r.length <= 3 || /\d/.test(r)) && !/etc|yap/.test(r) ? r.toUpperCase() : r.replace(/baja|dumont|[a-z]+/g, (i, s) => i.length <= 2 && !o || i === "in" || i === "chat" ? i.toUpperCase() : i.length > 2 || !s ? ki(i).replace(/island|noronha|murdo|rivadavia|urville/, ki) : i)).join("/");
  })(t) : Me;
}
function ts(t) {
  const e = Bo(t);
  return typeof e == "number" ? e : e ? e.resolvedOptions().timeZone : Me;
}
function Bo(t) {
  const e = Yo(t = t.toUpperCase(), 1);
  return e !== void 0 ? e : t !== Me ? _d(t) : void 0;
}
function la(t, e) {
  return ct(t.epochNanoseconds, e.epochNanoseconds);
}
function da(t, e) {
  return ct(t.epochNanoseconds, e.epochNanoseconds);
}
function pu(t, e, n, r, o, i) {
  const s = t(Tt(i).relativeTo), a = Math.max(ge(r), ge(o));
  if (Ms(O, r, o))
    return 0;
  if (fn(a, s))
    return ct(j(r), j(o));
  if (!s)
    throw new RangeError(Dr);
  const [c, u, l] = gr(e, n, s), d = Co(l), f = vr(l);
  return ct(d(f(u, c, r)), d(f(u, c, o)));
}
function fa(t, e) {
  return Ge(t, e) || Lo(t, e);
}
function Ge(t, e) {
  return Vt(q(t), q(e));
}
function Lo(t, e) {
  return Vt(Jt(t), Jt(e));
}
function gu(t, e) {
  return !la(t, e);
}
function vu(t, e) {
  return !da(t, e) && !!ha(t.timeZone, e.timeZone) && t.calendar === e.calendar;
}
function wu(t, e) {
  return !fa(t, e) && t.calendar === e.calendar;
}
function yu(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Eu(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function bu(t, e) {
  return !Ge(t, e) && t.calendar === e.calendar;
}
function Su(t, e) {
  return !Lo(t, e);
}
function ha(t, e) {
  if (t === e)
    return 1;
  try {
    return ts(t) === ts(e);
  } catch {
  }
}
function es(t, e, n, r) {
  const o = Le(t, r, 3, 5), i = Er(e.epochNanoseconds, n.epochNanoseconds, ...o);
  return A(t ? X(i) : i);
}
function ns(t, e, n, r, o, i) {
  const s = Sr(r.calendar, o.calendar), [a, c, u, l] = Le(n, i, 5), d = r.epochNanoseconds, f = o.epochNanoseconds, h = ct(f, d);
  let m;
  if (h)
    if (a < 6)
      m = Er(d, f, a, c, u, l);
    else {
      const p = e(((v, w) => {
        if (!ha(v, w))
          throw new RangeError(La);
        return v;
      })(r.timeZone, o.timeZone)), g = t(s);
      m = pa(g, p, r, o, h, a, i), m = fr(m, f, a, c, u, l, g, r, Ws, M(Ro, p));
    }
  else
    m = B;
  return A(n ? X(m) : m);
}
function rs(t, e, n, r, o) {
  const i = Sr(n.calendar, r.calendar), [s, a, c, u] = Le(e, o, 6), l = Z(n), d = Z(r), f = ct(d, l);
  let h;
  if (f)
    if (s <= 6)
      h = Er(l, d, s, a, c, u);
    else {
      const m = t(i);
      h = ga(m, n, r, f, s, o), h = fr(h, d, s, a, c, u, m, n, Z, No);
    }
  else
    h = B;
  return A(e ? X(h) : h);
}
function os(t, e, n, r, o) {
  const i = Sr(n.calendar, r.calendar);
  return ma(e, () => t(i), n, r, ...Le(e, o, 6, 9, 6));
}
function is(t, e, n, r, o) {
  const i = Sr(n.calendar, r.calendar), s = Le(e, o, 9, 9, 8), a = t(i), c = dn(a, n), u = dn(a, r);
  return c.isoYear === u.isoYear && c.isoMonth === u.isoMonth && c.isoDay === u.isoDay ? A(B) : ma(e, () => a, ft(c), ft(u), ...s, 8);
}
function ma(t, e, n, r, o, i, s, a, c = 6) {
  const u = Z(n), l = Z(r);
  if (u === void 0 || l === void 0)
    throw new RangeError(ce);
  let d;
  if (ct(l, u))
    if (o === 6)
      d = Er(u, l, o, i, s, a);
    else {
      const f = e();
      d = f.N(n, r, o), i === c && s === 1 || (d = fr(d, l, o, i, s, a, f, n, Z, pr));
    }
  else
    d = B;
  return A(t ? X(d) : d);
}
function ss(t, e, n, r) {
  const [o, i, s, a] = Le(t, r, 5, 5), c = Kt($o(e, n), yn(i, s), a), u = {
    ...B,
    ...wr(c, o)
  };
  return A(t ? X(u) : u);
}
function Mu(t, e, n, r, o, i) {
  const s = ct(r.epochNanoseconds, n.epochNanoseconds);
  return s ? o < 6 ? va(n.epochNanoseconds, r.epochNanoseconds, o) : pa(e, t, n, r, s, o, i) : B;
}
function Du(t, e, n, r, o) {
  const i = Z(e), s = Z(n), a = ct(s, i);
  return a ? r <= 6 ? va(i, s, r) : ga(t, e, n, a, r, o) : B;
}
function pa(t, e, n, r, o, i, s) {
  const [a, c, u] = ((f, h, m, p) => {
    function g() {
      return C = {
        ...ye(y, T++ * -p),
        ...w
      }, z = bn(f, C), ct(E, z) === -p;
    }
    const v = lt(h, f), w = mt(vt, v), y = lt(m, f), E = m.epochNanoseconds;
    let T = 0;
    const N = $o(v, y);
    let C, z;
    if (Math.sign(N) === -p && T++, g() && (p === -1 || g()))
      throw new RangeError(Ve);
    const _ = Mt(St(z, E));
    return [v, C, _];
  })(e, n, r, o);
  var l, d;
  return {
    ...i === 6 ? (l = a, d = c, {
      ...B,
      days: wa(l, d)
    }) : t.N(a, c, i, s),
    ...wr(u)
  };
}
function ga(t, e, n, r, o, i) {
  const [s, a, c] = ((u, l, d) => {
    let f = l, h = $o(u, l);
    return Math.sign(h) === -d && (f = ye(l, -d), h += F * d), [u, f, h];
  })(e, n, r);
  return {
    ...t.N(s, a, o, i),
    ...wr(c)
  };
}
function Er(t, e, n, r, o, i) {
  return {
    ...B,
    ...We(hr(St(t, e), r, o, i), n)
  };
}
function va(t, e, n) {
  return {
    ...B,
    ...We(St(t, e), n)
  };
}
function wa(t, e) {
  return br(q(t), q(e));
}
function br(t, e) {
  return Math.trunc((e - t) / et);
}
function $o(t, e) {
  return Jt(e) - Jt(t);
}
function Sr(t, e) {
  if (t !== e)
    throw new RangeError(ja);
  return t;
}
function ya(t) {
  return this.m(t)[0];
}
function Ea(t) {
  return this.m(t)[1];
}
function Wo(t) {
  const [e] = this.v(t);
  return br(this.p(e), q(t)) + 1;
}
function Uo(t) {
  const e = Fd.exec(t);
  if (!e)
    throw new RangeError(Rl(t));
  return [parseInt(e[1]), !!e[2]];
}
function Sn(t, e) {
  return "M" + ht(t) + (e ? "L" : "");
}
function Jn(t, e, n) {
  return t + (e || n && t >= n ? 1 : 0);
}
function Go(t, e) {
  return t - (e && t >= e ? 1 : 0);
}
function ba(t, e) {
  return (e + t) * (Math.sign(e) || 1) || 0;
}
function Lr(t) {
  return Ja[Ma(t)];
}
function Sa(t) {
  return Ul[Ma(t)];
}
function Ma(t) {
  return ve(t.id || D);
}
function Iu(t) {
  function e(o) {
    return ((i, s) => ({
      ...Da(i, s),
      o: i.month,
      day: parseInt(i.day)
    }))(ho(n, o), r);
  }
  const n = mi(t), r = ve(t);
  return {
    id: t,
    h: Tu(e),
    l: Ou(e)
  };
}
function Tu(t) {
  return at((e) => {
    const n = q(e);
    return t(n);
  }, WeakMap);
}
function Ou(t) {
  const e = t(0).year - nd;
  return at((n) => {
    let r, o = Ze(n - e), i = 0;
    const s = [], a = [];
    do
      o += 400 * et;
    while ((r = t(o)).year <= n);
    do
      if (o += (1 - r.day) * et, r.year === n && (s.push(o), a.push(r.o)), o -= et, ++i > 100 || o < -864e13)
        throw new RangeError(Ve);
    while ((r = t(o)).year >= n);
    return {
      i: s.reverse(),
      u: $a(a.reverse())
    };
  });
}
function Da(t, e) {
  let n, r, o = Ia(t);
  if (t.era) {
    const i = Ja[e], s = Ka[e] || {};
    i !== void 0 && (n = e === "islamic" ? "ah" : t.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n === "ad" || n === "a" ? n = "ce" : n === "beforeroc" && (n = "broc"), n = s[n] || n, r = o, o = ba(r, i[n] || 0));
  }
  return {
    era: n,
    eraYear: r,
    year: o
  };
}
function Ia(t) {
  return parseInt(t.relatedYear || t.year);
}
function Kn(t) {
  const { year: e, o: n, day: r } = this.h(t), { u: o } = this.l(e);
  return [e, o[n] + 1, r];
}
function hn(t, e = 1, n = 1) {
  return this.l(t).i[e - 1] + (n - 1) * et;
}
function Ta(t, e) {
  const n = Zn.call(this, t);
  return [Go(e, n), n === e];
}
function Zn(t) {
  const e = cs(this, t), n = cs(this, t - 1), r = e.length;
  if (r > n.length) {
    const o = Sa(this);
    if (o < 0)
      return -o;
    for (let i = 0; i < r; i++)
      if (e[i] !== n[i])
        return i + 1;
  }
}
function Fn(t) {
  return br(hn.call(this, t), hn.call(this, t + 1));
}
function as(t, e) {
  const { i: n } = this.l(t);
  let r = e + 1, o = n;
  return r > n.length && (r = 1, o = this.l(t + 1).i), br(n[e - 1], o[r - 1]);
}
function xn(t) {
  return this.l(t).i.length;
}
function Oa(t) {
  const e = this.h(t);
  return [e.era, e.eraYear];
}
function cs(t, e) {
  return Object.keys(t.l(e).u);
}
function Mn(t) {
  return Mr(W(t));
}
function Mr(t) {
  if ((t = t.toLowerCase()) !== D && t !== qe) {
    const e = mi(t).resolvedOptions().calendar;
    if (ve(t) !== ve(e))
      throw new RangeError(Za(t));
    return e;
  }
  return t;
}
function ve(t) {
  return t === "islamicc" && (t = "islamic"), t.split("-")[0];
}
function Ra(t, e) {
  return (n) => n === D ? t : n === qe || n === te ? Object.assign(Object.create(t), {
    id: n
  }) : Object.assign(Object.create(e), xd(n));
}
function Ru(t, e, n, r) {
  const o = ie(n, r, Bt, [], Va);
  if (o.timeZone !== void 0) {
    const i = n.F(o), s = Dn(o), a = t(o.timeZone);
    return {
      epochNanoseconds: $e(e(a), {
        ...i,
        ...s
      }, o.offset !== void 0 ? be(o.offset) : void 0),
      timeZone: a
    };
  }
  return {
    ...n.F(o),
    ...rt
  };
}
function Nu(t, e, n, r, o, i) {
  const s = ie(n, o, Bt, Ua, Va), a = t(s.timeZone), [c, u, l] = cr(i), d = n.F(s, dr(c)), f = Dn(s, c);
  return pt($e(e(a), {
    ...d,
    ...f
  }, s.offset !== void 0 ? be(s.offset) : void 0, u, l), a, r);
}
function Cu(t, e, n) {
  const r = ie(t, e, Bt, [], jt), o = I(n);
  return gt(nt({
    ...t.F(r, dr(o)),
    ...Dn(r, o)
  }));
}
function zu(t, e, n, r = []) {
  const o = ie(t, e, Bt, r);
  return t.F(o, n);
}
function _u(t, e, n, r) {
  const o = ie(t, e, Qo, r);
  return t.K(o, n);
}
function ku(t, e, n, r) {
  const o = ie(t, n, Bt, Tn);
  return e && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = Pt), t._(o, r);
}
function Pu(t, e) {
  return Ot(Dn(ut(t, Gr, [], 1), I(e)));
}
function Fu(t) {
  const e = ut(t, ti);
  return A(Ee({
    ...B,
    ...e
  }));
}
function ie(t, e, n, r = [], o = []) {
  return ut(e, [...t.fields(n), ...o].sort(), r);
}
function ut(t, e, n, r = !n) {
  const o = {};
  let i, s = 0;
  for (const a of e) {
    if (a === i)
      throw new RangeError(El(a));
    if (a === "constructor" || a === "__proto__")
      throw new RangeError(yl(a));
    let c = t[a];
    if (c !== void 0)
      s = 1, us[a] && (c = us[a](c, a)), o[a] = c;
    else if (n) {
      if (n.includes(a))
        throw new TypeError(qo(a));
      o[a] = Xa[a];
    }
    i = a;
  }
  if (r && !s)
    throw new TypeError(xa(e));
  return o;
}
function Dn(t, e) {
  return Be(pi({
    ...Xa,
    ...t
  }), e);
}
function xu(t, e, n, r, o) {
  const { calendar: i, timeZone: s } = n, a = t(i), c = e(s), u = [...a.fields(Bt), ...Ga].sort(), l = ((v) => {
    const w = lt(v, S), y = En(w.offsetNanoseconds), E = Nr(v.calendar), [T, N, C] = E.v(w), [z, _] = E.q(T, N), Rt = Sn(z, _);
    return {
      ...Wd(w),
      year: T,
      monthCode: Rt,
      day: C,
      offset: y
    };
  })(n), d = ut(r, u), f = a.k(l, d), h = {
    ...l,
    ...d
  }, [m, p, g] = cr(o, 2);
  return pt($e(c, {
    ...a.F(f, dr(m)),
    ...Be(pi(h), m)
  }, be(h.offset), p, g), s, i);
}
function Yu(t, e, n, r) {
  const o = t(e.calendar), i = [...o.fields(Bt), ...jt].sort(), s = {
    ...Ca(a = e),
    hour: a.isoHour,
    minute: a.isoMinute,
    second: a.isoSecond,
    millisecond: a.isoMillisecond,
    microsecond: a.isoMicrosecond,
    nanosecond: a.isoNanosecond
  };
  var a;
  const c = ut(n, i), u = I(r), l = o.k(s, c), d = {
    ...s,
    ...c
  };
  return gt(nt({
    ...o.F(l, dr(u)),
    ...Be(pi(d), u)
  }));
}
function Au(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(Bt).sort(), s = Ca(e), a = ut(n, i), c = o.k(s, a);
  return o.F(c, r);
}
function Zu(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(Qo).sort(), s = ((u) => {
    const l = Nr(u.calendar), [d, f] = l.v(u), [h, m] = l.q(d, f);
    return {
      year: d,
      monthCode: Sn(h, m)
    };
  })(e), a = ut(n, i), c = o.k(s, a);
  return o.K(c, r);
}
function ju(t, e, n, r) {
  const o = t(e.calendar), i = o.fields(Bt).sort(), s = ((u) => {
    const l = Nr(u.calendar), [d, f, h] = l.v(u), [m, p] = l.q(d, f);
    return {
      monthCode: Sn(m, p),
      day: h
    };
  })(e), a = ut(n, i), c = o.k(s, a);
  return o._(c, r);
}
function Bu(t, e, n) {
  return Ot(((r, o, i) => Dn({
    ...mt(Gr, r),
    ...ut(o, Gr)
  }, I(i)))(t, e, n));
}
function Lu(t, e) {
  return A((n = t, r = e, Ee({
    ...n,
    ...ut(r, ti)
  })));
  var n, r;
}
function Na(t, e, n, r, o) {
  e = mt(n = t.fields(n), e), r = ut(r, o = t.fields(o), []);
  let i = t.k(e, r);
  return i = ut(i, [...n, ...o].sort(), []), t.F(i);
}
function _r(t, e) {
  const n = Lr(t), r = Ka[t.id || ""] || {};
  let { era: o, eraYear: i, year: s } = e;
  if (o !== void 0 || i !== void 0) {
    if (o === void 0 || i === void 0)
      throw new TypeError(Dl);
    if (!n)
      throw new RangeError(Ml);
    const a = n[r[o] || o];
    if (a === void 0)
      throw new RangeError(Tl(o));
    const c = ba(i, a);
    if (s !== void 0 && s !== c)
      throw new RangeError(Il);
    s = c;
  } else if (s === void 0)
    throw new TypeError(Ol(n));
  return s;
}
function Yn(t, e, n, r) {
  let { month: o, monthCode: i } = e;
  if (i !== void 0) {
    const s = ((a, c, u, l) => {
      const d = a.L(u), [f, h] = Uo(c);
      let m = Jn(f, h, d);
      if (h) {
        const p = Sa(a);
        if (p === void 0)
          throw new RangeError(tn);
        if (p > 0) {
          if (m > p)
            throw new RangeError(tn);
          if (d === void 0) {
            if (l === 1)
              throw new RangeError(tn);
            m--;
          }
        } else {
          if (m !== -p)
            throw new RangeError(tn);
          if (d === void 0 && l === 1)
            throw new RangeError(tn);
        }
      }
      return m;
    })(t, i, n, r);
    if (o !== void 0 && o !== s)
      throw new RangeError(Nl);
    o = s, r = 1;
  } else if (o === void 0)
    throw new TypeError(Aa);
  return Ft("month", o, 1, t.B(n), r);
}
function kr(t, e, n, r, o) {
  return K(e, "day", 1, t.U(r, n), o);
}
function Pr(t, e, n, r) {
  let o = 0;
  const i = [];
  for (const s of n)
    e[s] !== void 0 ? o = 1 : i.push(s);
  if (Object.assign(t, e), o)
    for (const s of r || i)
      delete t[s];
}
function Ca(t) {
  const e = Nr(t.calendar), [n, r, o] = e.v(t), [i, s] = e.q(n, r);
  return {
    year: n,
    monthCode: Sn(i, s),
    day: o
  };
}
function $u(t) {
  return Yt(It(co(io(t))));
}
function Wu(t, e, n, r, o = D) {
  return pt(It(co(io(n))), e(r), t(o));
}
function Uu(t, e, n, r, o = 0, i = 0, s = 0, a = 0, c = 0, u = 0, l = D) {
  return gt(nt(ar(xt(V, Ae(Or, [e, n, r, o, i, s, a, c, u])))), t(l));
}
function Gu(t, e, n, r, o = D) {
  return At(ft(we(xt(V, {
    isoYear: e,
    isoMonth: n,
    isoDay: r
  }))), t(o));
}
function Vu(t, e, n, r = D, o = 1) {
  const i = V(e), s = V(n), a = t(r);
  return ln(lo(we({
    isoYear: i,
    isoMonth: s,
    isoDay: V(o)
  })), a);
}
function qu(t, e, n, r = D, o = Pt) {
  const i = V(e), s = V(n), a = t(r);
  return qn(ft(we({
    isoYear: V(o),
    isoMonth: i,
    isoDay: s
  })), a);
}
function Hu(t = 0, e = 0, n = 0, r = 0, o = 0, i = 0) {
  return Ot(Be(xt(V, Ae(vt, [t, e, n, r, o, i])), 1));
}
function Xu(t = 0, e = 0, n = 0, r = 0, o = 0, i = 0, s = 0, a = 0, c = 0, u = 0) {
  return A(Ee(xt(so, Ae(O, [t, e, n, r, o, i, s, a, c, u]))));
}
function Ju(t, e, n = D) {
  return pt(t.epochNanoseconds, e, n);
}
function Ku(t) {
  return Yt(t.epochNanoseconds);
}
function za(t, e) {
  return gt(lt(e, t));
}
function _a(t, e) {
  return At(lt(e, t));
}
function ka(t, e) {
  return Ot(lt(e, t));
}
function Qu(t, e, n, r) {
  const o = ((i, s, a, c) => {
    const u = ((l) => ac(Tt(l)))(c);
    return bn(i(s), a, u);
  })(t, n, e, r);
  return pt(It(o), n, e.calendar);
}
function tl(t, e, n, r, o) {
  const i = t(o.timeZone), s = o.plainTime, a = s !== void 0 ? e(s) : void 0, c = n(i);
  let u;
  return u = a ? bn(c, {
    ...r,
    ...a
  }) : Qt(c, {
    ...r,
    ...rt
  }), pt(u, i, r.calendar);
}
function el(t, e = rt) {
  return gt(nt({
    ...t,
    ...e
  }));
}
function nl(t, e, n) {
  return ((r, o) => {
    const i = ie(r, o, qa);
    return r.K(i, void 0);
  })(t(e.calendar), n);
}
function rl(t, e, n) {
  return ((r, o) => {
    const i = ie(r, o, Ha);
    return r._(i);
  })(t(e.calendar), n);
}
function ol(t, e, n, r) {
  return ((o, i, s) => Na(o, i, qa, wn(s), Tn))(t(e.calendar), n, r);
}
function il(t, e, n, r) {
  return ((o, i, s) => Na(o, i, Ha, wn(s), Xo))(t(e.calendar), n, r);
}
function sl(t) {
  return Yt(It(Gn(so(t), Zt)));
}
function al(t) {
  return Yt(It(co(io(t))));
}
function Se(t, e, n) {
  const r = new Set(n);
  return (o, i) => {
    const s = n && _i(o, n);
    if (!_i(o = ((a, c) => {
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
    return n && (o.timeZone = Me, ["full", "long"].includes(o.J) && (o.J = "medium")), o;
  };
}
function se(t, e = Pa, n = 0) {
  const [r, , , o] = t;
  return (i, s = lf, ...a) => {
    const c = e(o && o(...a), i, s, r, n), u = c.resolvedOptions();
    return [c, ...cl(t, u, a)];
  };
}
function Pa(t, e, n, r, o) {
  if (n = r(n, o), t) {
    if (n.timeZone !== void 0)
      throw new TypeError(Bl);
    n.timeZone = t;
  }
  return new qt(e, n);
}
function cl(t, e, n) {
  const [, r, o] = t;
  return n.map((i) => (i.calendar && ((s, a, c) => {
    if ((c || s !== D) && s !== a)
      throw new RangeError(ja);
  })(i.calendar, e.calendar, o), r(i, e)));
}
function ul(t, e, n) {
  const r = e.timeZone, o = t(r), i = {
    ...lt(e, o),
    ...n || rt
  };
  let s;
  return s = n ? $e(o, i, i.offsetNanoseconds, 2) : Qt(o, i), pt(s, r, e.calendar);
}
function ll(t, e = rt) {
  return gt(nt({
    ...t,
    ...e
  }));
}
function Vo(t, e) {
  return {
    ...t,
    calendar: e
  };
}
function dl(t, e) {
  return {
    ...t,
    timeZone: e
  };
}
function Fr(t) {
  const e = $r();
  return je(e, t.R(e));
}
function $r() {
  return Gn(Date.now(), Zt);
}
function Qe() {
  return ls || (ls = new qt().resolvedOptions().timeZone);
}
const fl = (t, e) => `Non-integer ${t}: ${e}`, hl = (t, e) => `Non-positive ${t}: ${e}`, ml = (t, e) => `Non-finite ${t}: ${e}`, pl = (t) => `Cannot convert bigint to ${t}`, gl = (t) => `Invalid bigint: ${t}`, vl = "Cannot convert Symbol to string", wl = "Invalid object", Fa = (t, e, n, r, o) => o ? Fa(t, o[e], o[n], o[r]) : ae(t, e) + `; must be between ${n}-${r}`, ae = (t, e) => `Invalid ${t}: ${e}`, qo = (t) => `Missing ${t}`, yl = (t) => `Invalid field ${t}`, El = (t) => `Duplicate field ${t}`, xa = (t) => "No valid fields: " + t.join(), bl = "Invalid bag", Ya = (t, e, n) => ae(t, e) + "; must be " + Object.keys(n).join(), Sl = "Cannot use valueOf", Wr = "Invalid calling context", Ml = "Forbidden era/eraYear", Dl = "Mismatching era/eraYear", Il = "Mismatching year/eraYear", Tl = (t) => `Invalid era: ${t}`, Ol = (t) => "Missing year" + (t ? "/era/eraYear" : ""), Rl = (t) => `Invalid monthCode: ${t}`, Nl = "Mismatching month/monthCode", Aa = "Missing month/monthCode", tn = "Invalid leap month", Ve = "Invalid protocol results", Za = (t) => ae("Calendar", t), ja = "Mismatching Calendars", Ba = (t) => ae("TimeZone", t), La = "Mismatching TimeZones", Cl = "Forbidden ICU TimeZone", zl = "Out-of-bounds offset", _l = "Out-of-bounds TimeZone gap", kl = "Invalid TimeZone offset", Pl = "Ambiguous offset", ce = "Out-of-bounds date", Fl = "Out-of-bounds duration", xl = "Cannot mix duration signs", Dr = "Missing relativeTo", Yl = "Cannot use large units", Al = "Required smallestUnit or largestUnit", Zl = "smallestUnit > largestUnit", Q = (t) => `Cannot parse: ${t}`, kt = (t) => `Invalid substring: ${t}`, jl = (t) => `Cannot format ${t}`, xr = "Mismatching types for formatting", Bl = "Cannot specify TimeZone", $a = /* @__PURE__ */ M(nr, (t, e) => e), xe = /* @__PURE__ */ M(nr, (t, e, n) => n), ht = /* @__PURE__ */ M(Un, 2), Ur = {
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
}, Ho = /* @__PURE__ */ Object.keys(Ur), et = 864e5, Wa = 1e3, In = 1e3, Zt = 1e6, bt = 1e9, Ir = 6e10, Tr = 36e11, F = 864e11, Dt = [1, In, Zt, bt, Ir, Tr, F], jt = /* @__PURE__ */ Ho.slice(0, 6), Gr = /* @__PURE__ */ vn(jt), Ll = ["offset"], Ua = ["timeZone"], Ga = /* @__PURE__ */ jt.concat(Ll), Va = /* @__PURE__ */ Ga.concat(Ua), Vr = ["era", "eraYear"], $l = /* @__PURE__ */ Vr.concat(["year"]), Xo = ["year"], Jo = ["monthCode"], Ko = /* @__PURE__ */ ["month"].concat(Jo), Tn = ["day"], Qo = /* @__PURE__ */ Ko.concat(Xo), qa = /* @__PURE__ */ Jo.concat(Xo), Bt = /* @__PURE__ */ Tn.concat(Qo), Wl = /* @__PURE__ */ Tn.concat(Ko), Ha = /* @__PURE__ */ Tn.concat(Jo), Xa = /* @__PURE__ */ xe(jt, 0), D = "iso8601", qe = "gregory", te = "japanese", Ja = {
  [qe]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [te]: {
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
  [qe]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [te]: {
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
}, Ul = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, W = /* @__PURE__ */ M(ro, "string"), Gl = /* @__PURE__ */ M(ro, "boolean"), Vl = /* @__PURE__ */ M(ro, "number"), O = /* @__PURE__ */ Ho.map((t) => t + "s"), ti = /* @__PURE__ */ vn(O), ql = /* @__PURE__ */ O.slice(0, 6), Qa = /* @__PURE__ */ O.slice(6), Hl = /* @__PURE__ */ Qa.slice(1), Xl = /* @__PURE__ */ $a(O), B = /* @__PURE__ */ xe(O, 0), ei = /* @__PURE__ */ xe(ql, 0), ni = /* @__PURE__ */ M(Ds, O), vt = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], ri = ["isoDay", "isoMonth", "isoYear"], Or = /* @__PURE__ */ vt.concat(ri), oi = /* @__PURE__ */ vn(ri), tc = /* @__PURE__ */ vn(vt), Jl = /* @__PURE__ */ vn(Or), rt = /* @__PURE__ */ xe(tc, 0), Kl = /* @__PURE__ */ M(Ds, Or), ec = 1e8, Ql = ec * et, td = [ec, 0], ed = [-1e8, 0], mn = 275760, pn = -271821, qt = Intl.DateTimeFormat, nc = "en-GB", nd = 1970, Pt = 1972, Lt = 12, rd = /* @__PURE__ */ Ze(1868, 9, 8), od = /* @__PURE__ */ at(Ac, WeakMap), Qn = "smallestUnit", qr = "unit", on = "roundingIncrement", Yr = "fractionalSecondDigits", rc = "relativeTo", Ar = "direction", oc = {
  constrain: 0,
  reject: 1
}, id = /* @__PURE__ */ Object.keys(oc), sd = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, ad = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, cd = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, ud = {
  auto: 0,
  never: 1,
  critical: 2
}, ld = {
  auto: 0,
  never: 1
}, dd = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, fd = {
  previous: -1,
  next: 1
}, On = /* @__PURE__ */ M(Eo, Qn), ic = /* @__PURE__ */ M(Eo, "largestUnit"), hd = /* @__PURE__ */ M(Eo, qr), sc = /* @__PURE__ */ M(ne, "overflow", oc), ac = /* @__PURE__ */ M(ne, "disambiguation", sd), md = /* @__PURE__ */ M(ne, "offset", ad), ii = /* @__PURE__ */ M(ne, "calendarName", cd), pd = /* @__PURE__ */ M(ne, "timeZoneName", ud), gd = /* @__PURE__ */ M(ne, "offset", ld), Rn = /* @__PURE__ */ M(ne, "roundingMode", dd), si = "PlainYearMonth", ai = "PlainMonthDay", Nn = "PlainDate", He = "PlainDateTime", ci = "PlainTime", ue = "ZonedDateTime", ui = "Instant", li = "Duration", vd = [Math.floor, (t) => Pn(t) ? Math.floor(t) : Math.round(t), Math.ceil, (t) => Pn(t) ? Math.ceil(t) : Math.round(t), Math.trunc, (t) => Pn(t) ? Math.trunc(t) || 0 : Math.round(t), (t) => t < 0 ? Math.floor(t) : Math.ceil(t), (t) => Math.sign(t) * Math.round(Math.abs(t)) || 0, (t) => Pn(t) ? (t = Math.trunc(t) || 0) + t % 2 : Math.round(t)], Me = "UTC", jn = 5184e3, wd = /* @__PURE__ */ Vn(1847), yd = /* @__PURE__ */ Vn(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), Ed = /0+$/, lt = /* @__PURE__ */ at(Qc, WeakMap), bd = 2 ** 32 - 1, S = /* @__PURE__ */ at((t) => {
  const e = Bo(t);
  return typeof e == "object" ? new Md(e) : new Sd(e || 0);
});
class Sd {
  constructor(e) {
    this.$ = e;
  }
  R() {
    return this.$;
  }
  I(e) {
    return ((n) => {
      const r = Z({
        ...n,
        ...rt
      });
      if (!r || Math.abs(r[0]) > 1e8)
        throw new RangeError(ce);
    })(e), [fo(e, this.$)];
  }
  O() {
  }
}
class Md {
  constructor(e) {
    this.nn = ((n) => {
      function r(u) {
        const l = un(u, a, c), [d, f] = Qi(l), h = i(d), m = i(f);
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
      const i = at(n), s = at(ru);
      let a = wd, c = yd;
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
          const d = un(u, a, c);
          let [f, h] = Qi(d);
          const m = jn * l, p = l < 0 ? () => h > a || (a = d, 0) : () => f < c || (c = d, 0);
          for (; p(); ) {
            const g = i(f), v = i(h);
            if (g !== v) {
              const w = s(f, h);
              o(w, g, v);
              const y = w[0];
              if ((Vt(y, u) || 1) === l)
                return y;
            }
            f += m, h += m;
          }
        }
      };
    })(/* @__PURE__ */ ((n) => (r) => {
      const o = ho(n, r * Wa);
      return Vn(Ia(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - r;
    })(e));
  }
  R(e) {
    return this.nn.rn(((n) => Fi(n)[0])(e)) * bt;
  }
  I(e) {
    const [n, r] = [Vn((o = e).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * Zt + o.isoMicrosecond * In + o.isoNanosecond];
    var o;
    return this.nn.tn(n).map((i) => It(pe(Gn(i, bt), r)));
  }
  O(e, n) {
    const [r, o] = Fi(e), i = this.nn.O(r + (n > 0 || o ? 1 : 0), n);
    if (i !== void 0)
      return Gn(i, bt);
  }
}
const di = "([+-])", Bn = "(?:[.,](\\d{1,9}))?", cc = `(?:(?:${di}(\\d{6}))|(\\d{4}))-?(\\d{2})`, fi = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Bn + ")?)?", hi = di + fi, Dd = cc + "-?(\\d{2})(?:[T ]" + fi + "(Z|" + hi + ")?)?", uc = "\\[(!?)([^\\]]*)\\]", Rr = `((?:${uc}){0,9})`, Id = /* @__PURE__ */ Ue(cc + Rr), Td = /* @__PURE__ */ Ue("(?:--)?(\\d{2})-?(\\d{2})" + Rr), Od = /* @__PURE__ */ Ue(Dd + Rr), Rd = /* @__PURE__ */ Ue("T?" + fi + "(?:" + hi + ")?" + Rr), Nd = /* @__PURE__ */ Ue(hi), Cd = /* @__PURE__ */ new RegExp(uc, "g"), zd = /* @__PURE__ */ Ue(`${di}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Bn}H)?(?:(\\d+)${Bn}M)?(?:(\\d+)${Bn}S)?)?`), _d = /* @__PURE__ */ at((t) => new qt(nc, {
  timeZone: t,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
})), kd = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Pd = /[^\w\/:+-]+/, Fd = /^M(\d{2})(L?)$/, xd = /* @__PURE__ */ at(Iu), mi = /* @__PURE__ */ at((t) => new qt(nc, {
  calendar: t,
  timeZone: Me,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
})), lc = {
  P(t, e, n) {
    const r = I(n);
    let o, { years: i, months: s, weeks: a, days: c } = e;
    if (c += j(e, 5)[0], i || s)
      o = ((u, l, d, f, h) => {
        let [m, p, g] = u.v(l);
        if (d) {
          const [v, w] = u.q(m, p);
          m += d, p = Jn(v, w, u.L(m)), p = Ft("month", p, 1, u.B(m), h);
        }
        return f && ([m, p] = u.un(m, p, f)), g = Ft("day", g, 1, u.U(m, p), h), u.p(m, p, g);
      })(this, t, i, s, r);
    else {
      if (!a && !c)
        return t;
      o = q(t);
    }
    if (o === void 0)
      throw new RangeError(ce);
    return o += (7 * a + c) * et, ft(sr(o));
  },
  N(t, e, n) {
    if (n <= 7) {
      let c = 0, u = wa({
        ...t,
        ...rt
      }, {
        ...e,
        ...rt
      });
      return n === 7 && ([c, u] = Xt(u, 7)), {
        ...B,
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
            p = (f -= w) - u, g = h - Jn(T, N, c.L(f)) + (_ || c.B(f));
          }
        }
      }
      return [p, g, v];
    })(this, ...r, ...o);
    return n === 8 && (s += this.cn(i, r[0]), i = 0), {
      ...B,
      years: i,
      months: s,
      days: a
    };
  },
  F(t, e) {
    const n = I(e), r = _r(this, t), o = Yn(this, t, r, n), i = kr(this, t, o, r, n);
    return At(ft(this.V(r, o, i)), this.id || D);
  },
  K(t, e) {
    const n = I(e), r = _r(this, t), o = Yn(this, t, r, n);
    return ln(lo(this.V(r, o, 1)), this.id || D);
  },
  _(t, e) {
    const n = I(e);
    let r, o, i, s = t.eraYear !== void 0 || t.year !== void 0 ? _r(this, t) : void 0;
    const a = !this.id;
    if (s === void 0 && a && (s = Pt), s !== void 0) {
      const d = Yn(this, t, s, n);
      r = kr(this, t, d, s, n);
      const f = this.L(s);
      o = Go(d, f), i = d === f;
    } else {
      if (t.monthCode === void 0)
        throw new TypeError(Aa);
      if ([o, i] = Uo(t.monthCode), this.id && this.id !== qe && this.id !== te)
        if (this.id && ve(this.id) === "coptic" && n === 0) {
          const d = i || o !== 13 ? 30 : 6;
          r = t.day, r = un(r, 1, d);
        } else if (this.id && ve(this.id) === "chinese" && n === 0) {
          const d = !i || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
          r = t.day, r = un(r, 1, d);
        } else
          r = t.day;
      else
        r = kr(this, t, Yn(this, t, Pt, n), Pt, n);
    }
    const c = this.G(o, i, r);
    if (!c)
      throw new RangeError("Cannot guess year");
    const [u, l] = c;
    return qn(ft(this.V(u, l, r)), this.id || D);
  },
  fields(t) {
    return Lr(this) && t.includes("year") ? [...t, ...Vr] : t;
  },
  k(t, e) {
    const n = Object.assign(/* @__PURE__ */ Object.create(null), t);
    return Pr(n, e, Ko), Lr(this) && (Pr(n, e, $l), this.id === te && Pr(n, e, Wl, Vr)), n;
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
    return Sn(r, o);
  },
  dayOfWeek: Ys,
  daysInWeek() {
    return 7;
  }
}, Yd = {
  v: mo,
  hn: As,
  q: ks
}, Ad = {
  dayOfYear: Wo,
  v: mo,
  p: Ze
}, Zd = /* @__PURE__ */ Object.assign({}, Ad, {
  weekOfYear: ya,
  yearOfWeek: Ea,
  m(t) {
    function e(h) {
      return (7 - h < r ? 7 : 0) - h;
    }
    function n(h) {
      const m = xs(f + h), p = h || 1, g = e(rn(c + m * p, 7));
      return l = (m + (g - u) * p) / 7;
    }
    const r = this.id ? 1 : 4, o = Ys(t), i = this.dayOfYear(t), s = rn(o - 1, 7), a = i - 1, c = rn(s - a, 7), u = e(c);
    let l, d = Math.floor((a - u) / 7) + 1, f = t.isoYear;
    return d ? d > n(0) && (d = 1, f++) : (d = n(-1), f--), [d, f, l];
  }
}), jd = /* @__PURE__ */ Object.assign({}, lc, Zd, {
  v: mo,
  hn: As,
  q: ks,
  G(t, e) {
    if (!e)
      return [Pt, t];
  },
  sn: po,
  L() {
  },
  B: Ps,
  cn: (t) => t * Lt,
  U: Fs,
  fn: xs,
  V: (t, e, n) => ({
    isoYear: t,
    isoMonth: e,
    isoDay: n
  }),
  p: Ze,
  un: (t, e, n) => (t += rr(n, Lt), (e += eo(n, Lt)) < 1 ? (t--, e += Lt) : e > Lt && (t++, e -= Lt), [t, e]),
  year(t) {
    return t.isoYear;
  },
  month(t) {
    return t.isoMonth;
  },
  day: (t) => t.isoDay
}), Bd = {
  v: Kn,
  hn: Oa,
  q: Ta
}, Ld = {
  dayOfYear: Wo,
  v: Kn,
  p: hn,
  weekOfYear: ya,
  yearOfWeek: Ea,
  m() {
    return [];
  }
}, $d = /* @__PURE__ */ Object.assign({}, lc, Ld, {
  v: Kn,
  hn: Oa,
  q: Ta,
  G(t, e, n) {
    const r = this.id && ve(this.id) === "chinese" ? ((u, l, d) => {
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
    })(t, e, n) : Pt;
    let [o, i, s] = Kn.call(this, {
      isoYear: r,
      isoMonth: Lt,
      isoDay: 31
    });
    const a = Zn.call(this, o), c = i === a;
    (Vt(t, Go(i, a)) || Vt(Number(e), Number(c)) || Vt(n, s)) === 1 && o--;
    for (let u = 0; u < 100; u++) {
      const l = o - u, d = Zn.call(this, l), f = Jn(t, e, d);
      if (e === (f === d) && n <= as.call(this, l, f))
        return [l, f];
    }
  },
  sn(t) {
    const e = Fn.call(this, t);
    return e > Fn.call(this, t - 1) && e > Fn.call(this, t + 1);
  },
  L: Zn,
  B: xn,
  cn(t, e) {
    const n = e + t, r = Math.sign(t), o = r < 0 ? -1 : 0;
    let i = 0;
    for (let s = e; s !== n; s += r)
      i += xn.call(this, s + o);
    return i;
  },
  U: as,
  fn: Fn,
  V(t, e, n) {
    return sr(hn.call(this, t, e, n));
  },
  p: hn,
  un(t, e, n) {
    if (n) {
      if (e += n, !Number.isSafeInteger(e))
        throw new RangeError(ce);
      if (n < 0)
        for (; e < 1; )
          e += xn.call(this, --t);
      else {
        let r;
        for (; e > (r = xn.call(this, t)); )
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
}), Nr = /* @__PURE__ */ Ra(Yd, Bd), b = /* @__PURE__ */ Ra(jd, $d), us = {
  era: An,
  eraYear: V,
  year: V,
  month: Pi,
  monthCode(t) {
    const e = An(t);
    return Uo(e), e;
  },
  day: Pi,
  .../* @__PURE__ */ xe(jt, V),
  .../* @__PURE__ */ xe(O, so),
  offset(t) {
    const e = An(t);
    return be(e), e;
  }
}, pi = /* @__PURE__ */ M(Ss, jt, vt), Wd = /* @__PURE__ */ M(Ss, vt, jt), Ht = "numeric", Cn = ["timeZoneName"], dc = {
  month: Ht,
  day: Ht
}, gi = {
  year: Ht,
  month: Ht
}, vi = /* @__PURE__ */ Object.assign({}, gi, {
  day: Ht
}), wi = {
  hour: Ht,
  minute: Ht,
  second: Ht
}, yi = /* @__PURE__ */ Object.assign({}, vi, wi), Ud = /* @__PURE__ */ Object.assign({}, yi, {
  timeZoneName: "short"
}), Gd = /* @__PURE__ */ Object.keys(gi), Vd = /* @__PURE__ */ Object.keys(dc), qd = /* @__PURE__ */ Object.keys(vi), Hd = /* @__PURE__ */ Object.keys(wi), Ei = ["dateStyle"], Xd = /* @__PURE__ */ Gd.concat(Ei), Jd = /* @__PURE__ */ Vd.concat(Ei), bi = /* @__PURE__ */ qd.concat(Ei, ["weekday"]), zn = /* @__PURE__ */ Hd.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), Si = /* @__PURE__ */ bi.concat(zn), Kd = /* @__PURE__ */ Cn.concat(zn), Qd = /* @__PURE__ */ Cn.concat(bi), tf = /* @__PURE__ */ Cn.concat(["day", "weekday"], zn), ef = /* @__PURE__ */ Cn.concat(["year", "weekday"], zn), nf = /* @__PURE__ */ Se(Si, yi), rf = /* @__PURE__ */ Se(Si, Ud), of = /* @__PURE__ */ Se(Si, yi, Cn), sf = /* @__PURE__ */ Se(bi, vi, Kd), af = /* @__PURE__ */ Se(zn, wi, Qd), cf = /* @__PURE__ */ Se(Xd, gi, tf), uf = /* @__PURE__ */ Se(Jd, dc, ef), lf = {}, fc = new qt(void 0, {
  calendar: D
}).resolvedOptions().calendar === D, hc = [nf, bo], df = [rf, bo, 0, (t, e) => {
  const n = t.timeZone;
  if (e && e.timeZone !== n)
    throw new RangeError(La);
  return n;
}], mc = [of, q], pc = [sf, q], gc = [af, (t) => Jt(t) / Zt], vc = [cf, q, fc], wc = [uf, q, fc];
let ls;
function le(t, e, n, r, o) {
  function i(...c) {
    if (!(this instanceof i))
      throw new TypeError(Wr);
    hs(this, e(...c));
  }
  function s(c, u) {
    return Object.defineProperties(function(...l) {
      return c.call(this, a(this), ...l);
    }, cn(u));
  }
  function a(c) {
    const u = J(c);
    if (!u || u.branding !== t)
      throw new TypeError(Wr);
    return u;
  }
  return Object.defineProperties(i.prototype, {
    ...Fc(xt(s, n)),
    ...ke(xt(s, r)),
    ...to("Temporal." + t)
  }), Object.defineProperties(i, {
    ...ke(o),
    ...cn(t)
  }), [i, (c) => {
    const u = Object.create(i.prototype);
    return hs(u, c), u;
  }, a];
}
function Xe(t) {
  if (J(t) || t.calendar !== void 0 || t.timeZone !== void 0)
    throw new TypeError(bl);
  return t;
}
function _n(t) {
  return yc(t) || D;
}
function yc(t) {
  const { calendar: e } = t;
  if (e !== void 0)
    return Cr(e);
}
function Cr(t) {
  if (H(t)) {
    const { calendar: e } = J(t) || {};
    if (!e)
      throw new TypeError(Za(t));
    return e;
  }
  return ((e) => Mr(fu(W(e))))(t);
}
function Mi(t) {
  const e = {};
  for (const n in t)
    e[n] = (r) => {
      const { calendar: o } = r;
      return b(o)[n](r);
    };
  return e;
}
function de() {
  throw new TypeError(Sl);
}
function it(t) {
  if (H(t)) {
    const { timeZone: e } = J(t) || {};
    if (!e)
      throw new TypeError(Ba(t));
    return e;
  }
  return ((e) => jo(hu(W(e))))(t);
}
function Y(t) {
  if (H(t)) {
    const e = J(t);
    return e && e.branding === li ? e : Fu(t);
  }
  return du(t);
}
function en(t) {
  if (t !== void 0) {
    if (H(t)) {
      const e = J(t) || {};
      switch (e.branding) {
        case ue:
        case Nn:
          return e;
        case He:
          return At(e);
      }
      const n = _n(t);
      return {
        ...Ru(it, S, b(n), t),
        calendar: n
      };
    }
    return iu(t);
  }
}
function $t(t, e) {
  if (H(t)) {
    const r = J(t) || {};
    switch (r.branding) {
      case ci:
        return I(e), r;
      case He:
        return I(e), Ot(r);
      case ue:
        return I(e), ka(S, r);
    }
    return Pu(t, e);
  }
  const n = lu(t);
  return I(e), n;
}
function Di(t) {
  return t === void 0 ? void 0 : $t(t);
}
function De(t, e) {
  if (H(t)) {
    const r = J(t) || {};
    switch (r.branding) {
      case He:
        return I(e), r;
      case Nn:
        return I(e), gt({
          ...r,
          ...rt
        });
      case ue:
        return I(e), za(S, r);
    }
    return Cu(b(_n(t)), t, e);
  }
  const n = au(t);
  return I(e), n;
}
function ds(t, e) {
  if (H(t)) {
    const r = J(t);
    if (r && r.branding === ai)
      return I(e), r;
    const o = yc(t);
    return ku(b(o || D), !o, t, e);
  }
  const n = uu(b, t);
  return I(e), n;
}
function Ie(t, e) {
  if (H(t)) {
    const r = J(t);
    return r && r.branding === si ? (I(e), r) : _u(b(_n(t)), t, e);
  }
  const n = cu(b, t);
  return I(e), n;
}
function Te(t, e) {
  if (H(t)) {
    const r = J(t) || {};
    switch (r.branding) {
      case Nn:
        return I(e), r;
      case He:
        return I(e), At(r);
      case ue:
        return I(e), _a(S, r);
    }
    return zu(b(_n(t)), t, e);
  }
  const n = ko(t);
  return I(e), n;
}
function Oe(t, e) {
  if (H(t)) {
    const n = J(t);
    if (n && n.branding === ue)
      return cr(e), n;
    const r = _n(t);
    return Nu(it, S, b(r), r, t, e);
  }
  return su(t, e);
}
function fs(t) {
  return xt((e) => (n) => e(Hr(n)), t);
}
function Hr(t) {
  return lt(t, S);
}
function Re(t) {
  if (H(t)) {
    const e = J(t);
    if (e)
      switch (e.branding) {
        case ui:
          return e;
        case ue:
          return Yt(e.epochNanoseconds);
      }
  }
  return ou(t);
}
function ff() {
  function t(i, s) {
    return new e(i, s);
  }
  function e(i, s = /* @__PURE__ */ Object.create(null)) {
    er.set(this, ((a, c) => {
      const u = new qt(a, c), l = u.resolvedOptions(), d = l.locale, f = mt(Object.keys(c), l), h = at(pf), m = (p, ...g) => {
        if (p) {
          if (g.length !== 2)
            throw new TypeError(xr);
          for (const E of g)
            if (E === void 0)
              throw new TypeError(xr);
        }
        p || g[0] !== void 0 || (g = []);
        const v = g.map((E) => J(E) || Number(E));
        let w, y = 0;
        for (const E of v) {
          const T = typeof E == "object" ? E.branding : void 0;
          if (y++ && T !== w)
            throw new TypeError(xr);
          w = T;
        }
        return w ? h(w)(d, f, ...v) : [u, ...v];
      };
      return m.X = u, m;
    })(i, s));
  }
  const n = qt.prototype, r = Object.getOwnPropertyDescriptors(n), o = Object.getOwnPropertyDescriptors(qt);
  for (const i in r) {
    const s = r[i], a = i.startsWith("format") && hf(i);
    typeof s.value == "function" ? s.value = i === "constructor" ? t : a || mf(i) : a && (s.get = function() {
      if (!er.has(this))
        throw new TypeError(Wr);
      return (...c) => a.apply(this, c);
    }, Object.defineProperties(s.get, cn(`get ${i}`)));
  }
  return o.prototype.value = e.prototype = Object.create({}, r), Object.defineProperties(t, o), t;
}
function hf(t) {
  return Object.defineProperties(function(...e) {
    const n = er.get(this), [r, ...o] = n(t.includes("Range"), ...e);
    return r[t](...o);
  }, cn(t));
}
function mf(t) {
  return Object.defineProperties(function(...e) {
    return er.get(this).X[t](...e);
  }, cn(t));
}
function pf(t) {
  const e = bf[t];
  if (!e)
    throw new TypeError(jl(t));
  return se(e, at(Pa), 1);
}
const tr = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ tr.get.bind(tr), hs = /* @__PURE__ */ tr.set.bind(tr), Ec = {
  era: xc,
  eraYear: Ts,
  year: no,
  month: zt,
  daysInMonth: zt,
  daysInYear: zt,
  inLeapYear: Gl,
  monthsInYear: zt
}, Ii = {
  monthCode: W
}, bc = {
  day: zt
}, gf = {
  dayOfWeek: zt,
  dayOfYear: zt,
  weekOfYear: Yc,
  yearOfWeek: Ts,
  daysInWeek: zt
}, Ti = /* @__PURE__ */ Mi(/* @__PURE__ */ Object.assign({}, Ec, Ii, bc, gf)), vf = /* @__PURE__ */ Mi({
  ...Ec,
  ...Ii
}), wf = /* @__PURE__ */ Mi({
  ...Ii,
  ...bc
}), kn = {
  calendarId: (t) => t.calendar
}, yf = /* @__PURE__ */ nr((t) => (e) => e[t], O.concat("sign")), Oi = /* @__PURE__ */ nr((t, e) => (n) => n[vt[e]], jt), Sc = {
  epochMilliseconds: bo,
  epochNanoseconds: jc
}, [Ef, x, Ih] = le(li, Xu, {
  ...yf,
  blank: nu
}, {
  with: (t, e) => x(Lu(t, e)),
  negated: (t) => x(_o(t)),
  abs: (t) => x(eu(t)),
  add: (t, e, n) => x(Ki(en, b, S, 0, t, Y(e), n)),
  subtract: (t, e, n) => x(Ki(en, b, S, 1, t, Y(e), n)),
  round: (t, e) => x(tu(en, b, S, t, e)),
  total: (t, e) => Bc(en, b, S, t, e),
  toLocaleString(t, e, n) {
    return Intl.DurationFormat ? new Intl.DurationFormat(e, n).format(this) : zr(t);
  },
  toString: zr,
  toJSON: (t) => zr(t),
  valueOf: de
}, {
  from: (t) => x(Y(t)),
  compare: (t, e, n) => pu(en, b, S, Y(t), Y(e), n)
}), bf = {
  Instant: hc,
  PlainDateTime: mc,
  PlainDate: pc,
  PlainTime: gc,
  PlainYearMonth: vc,
  PlainMonthDay: wc
}, Sf = /* @__PURE__ */ se(hc), Mf = /* @__PURE__ */ se(df), Df = /* @__PURE__ */ se(mc), If = /* @__PURE__ */ se(pc), Tf = /* @__PURE__ */ se(gc), Of = /* @__PURE__ */ se(vc), Rf = /* @__PURE__ */ se(wc), [Nf, Ut] = le(ci, Hu, Oi, {
  with(t, e, n) {
    return Ut(Bu(this, Xe(e), n));
  },
  add: (t, e) => Ut(Ji(0, t, Y(e))),
  subtract: (t, e) => Ut(Ji(1, t, Y(e))),
  until: (t, e, n) => x(ss(0, t, $t(e), n)),
  since: (t, e, n) => x(ss(1, t, $t(e), n)),
  round: (t, e) => Ut(Uc(t, e)),
  equals: (t, e) => Su(t, $t(e)),
  toLocaleString(t, e, n) {
    const [r, o] = Tf(e, n, t);
    return r.format(o);
  },
  toString: Wi,
  toJSON: (t) => Wi(t),
  valueOf: de
}, {
  from: (t, e) => Ut($t(t, e)),
  compare: (t, e) => Lo($t(t), $t(e))
}), [Cf, yt] = le(He, M(Uu, Mn), {
  ...kn,
  ...Ti,
  ...Oi
}, {
  with: (t, e, n) => yt(Yu(b, t, Xe(e), n)),
  withCalendar: (t, e) => yt(Vo(t, Cr(e))),
  withPlainTime: (t, e) => yt(ll(t, Di(e))),
  add: (t, e, n) => yt(qi(b, 0, t, Y(e), n)),
  subtract: (t, e, n) => yt(qi(b, 1, t, Y(e), n)),
  until: (t, e, n) => x(rs(b, 0, t, De(e), n)),
  since: (t, e, n) => x(rs(b, 1, t, De(e), n)),
  round: (t, e) => yt(Wc(t, e)),
  equals: (t, e) => wu(t, De(e)),
  toZonedDateTime: (t, e, n) => U(Qu(S, t, it(e), n)),
  toPlainDate: (t) => Et(At(t)),
  toPlainTime: (t) => Ut(Ot(t)),
  toLocaleString(t, e, n) {
    const [r, o] = Df(e, n, t);
    return r.format(o);
  },
  toString: ji,
  toJSON: (t) => ji(t),
  valueOf: de
}, {
  from: (t, e) => yt(De(t, e)),
  compare: (t, e) => fa(De(t), De(e))
}), [zf, Xr, Th] = le(ai, M(qu, Mn), {
  ...kn,
  ...wf
}, {
  with: (t, e, n) => Xr(ju(b, t, Xe(e), n)),
  equals: (t, e) => bu(t, ds(e)),
  toPlainDate(t, e) {
    return Et(il(b, t, this, e));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Rf(e, n, t);
    return r.format(o);
  },
  toString: $i,
  toJSON: (t) => $i(t),
  valueOf: de
}, {
  from: (t, e) => Xr(ds(t, e))
}), [_f, nn, Oh] = le(si, M(Vu, Mn), {
  ...kn,
  ...vf
}, {
  with: (t, e, n) => nn(Zu(b, t, Xe(e), n)),
  add: (t, e, n) => nn(Xi(b, 0, t, Y(e), n)),
  subtract: (t, e, n) => nn(Xi(b, 1, t, Y(e), n)),
  until: (t, e, n) => x(is(b, 0, t, Ie(e), n)),
  since: (t, e, n) => x(is(b, 1, t, Ie(e), n)),
  equals: (t, e) => Eu(t, Ie(e)),
  toPlainDate(t, e) {
    return Et(ol(b, t, this, e));
  },
  toLocaleString(t, e, n) {
    const [r, o] = Of(e, n, t);
    return r.format(o);
  },
  toString: Li,
  toJSON: (t) => Li(t),
  valueOf: de
}, {
  from: (t, e) => nn(Ie(t, e)),
  compare: (t, e) => Ge(Ie(t), Ie(e))
}), [kf, Et, Rh] = le(Nn, M(Gu, Mn), {
  ...kn,
  ...Ti
}, {
  with: (t, e, n) => Et(Au(b, t, Xe(e), n)),
  withCalendar: (t, e) => Et(Vo(t, Cr(e))),
  add: (t, e, n) => Et(Hi(b, 0, t, Y(e), n)),
  subtract: (t, e, n) => Et(Hi(b, 1, t, Y(e), n)),
  until: (t, e, n) => x(os(b, 0, t, Te(e), n)),
  since: (t, e, n) => x(os(b, 1, t, Te(e), n)),
  equals: (t, e) => yu(t, Te(e)),
  toZonedDateTime(t, e) {
    const n = H(e) ? e : {
      timeZone: e
    };
    return U(tl(it, $t, S, t, n));
  },
  toPlainDateTime: (t, e) => yt(el(t, Di(e))),
  toPlainYearMonth(t) {
    return nn(nl(b, t, this));
  },
  toPlainMonthDay(t) {
    return Xr(rl(b, t, this));
  },
  toLocaleString(t, e, n) {
    const [r, o] = If(e, n, t);
    return r.format(o);
  },
  toString: Bi,
  toJSON: (t) => Bi(t),
  valueOf: de
}, {
  from: (t, e) => Et(Te(t, e)),
  compare: (t, e) => Ge(Te(t), Te(e))
}), [Pf, U] = le(ue, M(Wu, Mn, mu), {
  ...Sc,
  ...kn,
  ...fs(Ti),
  ...fs(Oi),
  offset: (t) => En(Hr(t).offsetNanoseconds),
  offsetNanoseconds: (t) => Hr(t).offsetNanoseconds,
  timeZoneId: (t) => t.timeZone,
  hoursInDay: (t) => Gc(S, t)
}, {
  with: (t, e, n) => U(xu(b, S, t, Xe(e), n)),
  withCalendar: (t, e) => U(Vo(t, Cr(e))),
  withTimeZone: (t, e) => U(dl(t, it(e))),
  withPlainTime: (t, e) => U(ul(S, t, Di(e))),
  add: (t, e, n) => U(Vi(b, S, 0, t, Y(e), n)),
  subtract: (t, e, n) => U(Vi(b, S, 1, t, Y(e), n)),
  until: (t, e, n) => x(A(ns(b, S, 0, t, Oe(e), n))),
  since: (t, e, n) => x(A(ns(b, S, 1, t, Oe(e), n))),
  round: (t, e) => U($c(S, t, e)),
  startOfDay: (t) => U(Vc(S, t)),
  equals: (t, e) => vu(t, Oe(e)),
  toInstant: (t) => Wt(Ku(t)),
  toPlainDateTime: (t) => yt(za(S, t)),
  toPlainDate: (t) => Et(_a(S, t)),
  toPlainTime: (t) => Ut(ka(S, t)),
  toLocaleString(t, e, n = {}) {
    const [r, o] = Mf(e, n, t);
    return r.format(o);
  },
  toString: (t, e) => Zi(S, t, e),
  toJSON: (t) => Zi(S, t),
  valueOf: de,
  getTimeZoneTransition(t, e) {
    const { timeZone: n, epochNanoseconds: r } = t, o = Zc(e), i = S(n).O(r, o);
    return i ? U({
      ...t,
      epochNanoseconds: i
    }) : null;
  }
}, {
  from: (t, e) => U(Oe(t, e)),
  compare: (t, e) => da(Oe(t), Oe(e))
}), [Ff, Wt, Nh] = le(ui, $u, Sc, {
  add: (t, e) => Wt(Gi(0, t, Y(e))),
  subtract: (t, e) => Wt(Gi(1, t, Y(e))),
  until: (t, e, n) => x(es(0, t, Re(e), n)),
  since: (t, e, n) => x(es(1, t, Re(e), n)),
  round: (t, e) => Wt(Lc(t, e)),
  equals: (t, e) => gu(t, Re(e)),
  toZonedDateTimeISO: (t, e) => U(Ju(t, it(e))),
  toLocaleString(t, e, n) {
    const [r, o] = Sf(e, n, t);
    return r.format(o);
  },
  toString: (t, e) => Ai(it, S, t, e),
  toJSON: (t) => Ai(it, S, t),
  valueOf: de
}, {
  from: (t) => Wt(Re(t)),
  fromEpochMilliseconds: (t) => Wt(sl(t)),
  fromEpochNanoseconds: (t) => Wt(al(t)),
  compare: (t, e) => la(Re(t), Re(e))
}), xf = /* @__PURE__ */ Object.defineProperties({}, {
  ...to("Temporal.Now"),
  ...ke({
    timeZoneId: () => Qe(),
    instant: () => Wt(Yt($r())),
    zonedDateTimeISO: (t = Qe()) => U(pt($r(), it(t), D)),
    plainDateTimeISO: (t = Qe()) => yt(gt(Fr(S(it(t))), D)),
    plainDateISO: (t = Qe()) => Et(At(Fr(S(it(t))), D)),
    plainTimeISO: (t = Qe()) => Ut(Ot(Fr(S(it(t)))))
  })
}), me = /* @__PURE__ */ Object.defineProperties({}, {
  ...to("Temporal"),
  ...ke({
    PlainYearMonth: _f,
    PlainMonthDay: zf,
    PlainDate: kf,
    PlainTime: Nf,
    PlainDateTime: Cf,
    ZonedDateTime: Pf,
    Instant: Ff,
    Duration: Ef,
    Now: xf
  })
}), Yf = /* @__PURE__ */ ff(), er = /* @__PURE__ */ new WeakMap();
Object.create(Intl), ke({
  DateTimeFormat: Yf
});
const Ct = {
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  nWeeks: 1,
  firstDayOfWeek: 1,
  daySize: 160,
  dayHeadSize: 32,
  eventSize: 48,
  resourceGroupSize: 24,
  gap: 0,
  overscan: 0
};
function Af(t = {}) {
  const e = Math.max(t.nWeeks || Ct.nWeeks, 1), n = t.firstDayOfWeek ?? Ct.firstDayOfWeek, r = me.PlainDate.from(t.date || me.Now.plainDateISO()), o = (r.dayOfWeek - n + 7) % 7, i = r.subtract({ days: o }), s = Array.from({ length: e * 7 }, (a, c) => i.add({ days: c }).toString());
  return {
    start: s.at(0),
    end: s.at(-1),
    timezone: t.timezone || Ct.timezone,
    nWeeks: e,
    firstDayOfWeek: n,
    dates: s
  };
}
function Zf(t = {}) {
  return {
    daySize: t.daySize ?? Ct.daySize,
    dayHeadSize: t.dayHeadSize ?? Ct.dayHeadSize,
    eventSize: t.eventSize ?? Ct.eventSize,
    resourceGroupSize: t.resourceGroupSize ?? Ct.resourceGroupSize,
    resourcesClass: t.resourcesClass,
    timelineClass: t.timelineClass,
    gap: t.gap ?? Ct.gap,
    overscan: t.overscan ?? Ct.overscan
  };
}
function Ri(t) {
  return t === void 0 ? [] : Array.isArray(t) ? t : [t];
}
function ms(t, e, n) {
  return t.has(e) || t.set(e, n), t.get(e);
}
function jf(t = [], e) {
  const n = /* @__PURE__ */ new Map();
  for (var r = 0; r < t.length; r++) {
    const i = t[r], s = me.Instant.from(i.start).toZonedDateTimeISO(e).toPlainDate().toString(), a = Ri(i.resourceId);
    for (var o = 0; o < a.length; o++) {
      const c = a[o], u = ms(n, c, /* @__PURE__ */ new Map());
      ms(u, s, /* @__PURE__ */ new Set()).add(i);
    }
  }
  return n;
}
const Bf = ["id", "nOrder", "isGroup", "isCollapsed", "resources", "maxEvents"], Lf = "cullendar-drag-event", $f = ".cullendar-timeline", Wf = ".cullendar-resources", Uf = "cullendar-is-dragging", Gf = "cullendar-is-resizing", st = {
  EXCLUDED_RESOURCE_FIELDS: Bf,
  DATA_TRANSFER_TYPE: Lf,
  TIMELINE_SELECTOR: $f,
  RESOURCES_SELECTOR: Wf,
  DRAGGING_CLASS: Uf,
  RESIZING_CLASS: Gf
};
function Mc(t, e) {
  const n = Object.entries(t), r = Ri(e);
  return Object.fromEntries(n.filter(([o]) => !r.includes(o)));
}
const Zr = ys(/* @__PURE__ */ new Set());
function Vf(t = [], e = /* @__PURE__ */ new Map()) {
  const n = Ic(t), r = /* @__PURE__ */ new Map();
  for (var o = 0; o < n.length; o++) {
    const s = n[o], a = s.resources ? qf(s, e) : Dc(s, e.get(s.id));
    if (r.set(a.id, a), "isGroup" in a && !a.isCollapsed && a.resources.length)
      for (var i = 0; i < a.resources.length; i++) {
        const c = a.resources[i];
        r.set(c.id, c);
      }
  }
  return r;
}
function qf(t, e) {
  const n = Zr.has(t.id);
  return {
    id: t.id,
    nOrder: t.nOrder,
    isGroup: !0,
    isCollapsed: n,
    resources: Ic(t.resources.map((r) => Dc(r, e.get(r.id)))),
    data: Mc(t, st.EXCLUDED_RESOURCE_FIELDS),
    open: () => Zr.delete(t.id),
    close: () => Zr.add(t.id)
  };
}
function Dc(t, e = /* @__PURE__ */ new Map()) {
  return {
    id: t.id,
    nOrder: t.nOrder,
    isEventDroppable: t.isEventDroppable ?? !0,
    maxEvents: Math.max(...Array.from(e.values()).map((n) => n.size), 1),
    data: Mc(t, st.EXCLUDED_RESOURCE_FIELDS)
  };
}
function Ic(t) {
  return t.slice().sort((e, n) => (e.nOrder ?? Number.MAX_SAFE_INTEGER) - (n.nOrder ?? Number.MAX_SAFE_INTEGER));
}
function Hf(t = {}) {
  return {
    onView: t.onView || ((e) => {
    }),
    onAddEvent: t.onAddEvent || ((e) => {
    }),
    onMoveEvent: t.onMoveEvent || ((e) => {
    }),
    onResizeEvent: t.onResizeEvent || ((e) => {
    }),
    onBeforeDropEvent: t.onBeforeDropEvent || ((e) => !0),
    onDayEnter: t.onDayEnter || ((e) => {
    })
  };
}
function Xf(t, e) {
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
function Ch(t = {}) {
  const e = Pc(), n = dt(), r = dt(/* @__PURE__ */ new Set()), o = dt(/* @__PURE__ */ new Set()), i = dt(0), s = P(() => Af(t.view)), a = P(() => Zf(t.layout)), c = P(() => jf(tt(t.events), s.value.timezone)), u = P(() => Vf(tt(t.resources), c.value)), l = P(() => Hf(t.callbacks)), d = Xf(c, u);
  return sn(s, () => l.value.onView(s.value)), ys({
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
function G(t) {
  return `${t}px`;
}
function Jf() {
  const t = Object.assign(document.createElement("div"), { style: "overflow:scroll;visibility:hidden;" }), e = document.body.appendChild(t), n = e.offsetWidth - e.clientWidth;
  return e.remove(), G(n);
}
function Ne(t, e, n) {
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
function jr(t, e) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const Kf = (t, e) => Math.abs(t - e) < 1, Qf = (t, e, n) => {
  let r;
  return function(...o) {
    t.clearTimeout(r), r = t.setTimeout(() => e.apply(this, o), n);
  };
}, th = (t) => t, eh = (t) => {
  const e = Math.max(t.startIndex - t.overscan, 0), n = Math.min(t.endIndex + t.overscan, t.count - 1), r = [];
  for (let o = e; o <= n; o++)
    r.push(o);
  return r;
}, nh = (t, e) => {
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
}, ps = {
  passive: !0
}, gs = typeof window > "u" ? !0 : "onscrollend" in window, rh = (t, e) => {
  const n = t.scrollElement;
  if (!n)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = t.options.useScrollendEvent && gs ? () => {
  } : Qf(
    r,
    () => {
      e(o, !1);
    },
    t.options.isScrollingResetDelay
  ), s = (l) => () => {
    const { horizontal: d, isRtl: f } = t.options;
    o = d ? n.scrollLeft * (f && -1 || 1) : n.scrollTop, i(), e(o, l);
  }, a = s(!0), c = s(!1);
  c(), n.addEventListener("scroll", a, ps);
  const u = t.options.useScrollendEvent && gs;
  return u && n.addEventListener("scrollend", c, ps), () => {
    n.removeEventListener("scroll", a), u && n.removeEventListener("scrollend", c);
  };
}, oh = (t, e, n) => {
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
}, ih = (t, {
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
class sh {
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
        getItemKey: th,
        rangeExtractor: eh,
        onChange: () => {
        },
        measureElement: oh,
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
    }, this.maybeNotify = Ne(
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
    }, this.getMeasurementOptions = Ne(
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
    ), this.getMeasurements = Ne(
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
    ), this.calculateRange = Ne(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? ah({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ne(
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
    }, this.getVirtualItems = Ne(
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
        return jr(
          r[Tc(
            0,
            r.length - 1,
            (o) => jr(r[o]).start,
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
          const [u] = jr(
            this.getOffsetForIndex(n, a)
          );
          Kf(u, this.getScrollOffset()) || this.scrollToIndex(n, { align: a, behavior: o });
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
const Tc = (t, e, n, r) => {
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
function ah({
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
  let s = Tc(
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
function ch(t) {
  const e = new sh(tt(t)), n = Cc(e), r = e._didMount();
  return sn(
    () => tt(t).getScrollElement(),
    (o) => {
      o && e._willUpdate();
    },
    {
      immediate: !0
    }
  ), sn(
    () => tt(t),
    (o) => {
      e.setOptions({
        ...o,
        onChange: (i, s) => {
          var a;
          Ci(n), (a = o.onChange) == null || a.call(o, i, s);
        }
      }), e._willUpdate(), Ci(n);
    },
    {
      immediate: !0
    }
  ), zc(r), n;
}
function Oc(t) {
  return ch(
    P(() => ({
      observeElementRect: nh,
      observeElementOffset: rh,
      scrollToFn: ih,
      ...tt(t)
    }))
  );
}
function uh(t) {
  const e = document.getElementById(t);
  return {
    calendar: e,
    timeline: e.querySelector(st.TIMELINE_SELECTOR),
    resources: e.querySelector(st.RESOURCES_SELECTOR)
  };
}
const lh = /* @__PURE__ */ ee({
  __name: "RowVirtualiser",
  props: {
    rows: {},
    layout: {},
    wrapperStyle: {}
  },
  setup(t) {
    const e = t, n = dt(null), r = P(() => ({
      count: e.rows.length,
      getScrollElement: () => n.value,
      estimateSize: c,
      gap: e.layout.gap,
      paddingStart: e.layout.dayHeadSize,
      overscan: e.layout.overscan
    })), o = Oc(r), i = P(() => o.value.getVirtualItems()), s = P(() => o.value.getTotalSize()), a = P(() => ({
      height: G(s.value),
      ...e.wrapperStyle
    }));
    sn(() => e.rows, () => o.value.measure());
    function c(u) {
      const l = e.rows[u];
      return "isGroup" in l ? e.layout.resourceGroupSize : l.maxEvents * e.layout.eventSize;
    }
    return (u, l) => ($(), ot("div", {
      ref_key: "el",
      ref: n
    }, [
      Jr("div", {
        class: "cullendar-row-virtualiser-wrapper",
        style: an(a.value)
      }, [
        L(u.$slots, "wrapper", {}, void 0, !0),
        ($(!0), ot(Ln, null, $n(i.value, (d) => L(u.$slots, "default", Ce({
          key: d.index,
          ref_for: !0
        }, { row: d, data: u.rows[d.index] }), void 0, !0)), 128))
      ], 4)
    ], 512));
  }
}), Je = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, Rc = /* @__PURE__ */ Je(lh, [["__scopeId", "data-v-0a89de72"]]), dh = { class: "cullendar-timeline-head" }, fh = /* @__PURE__ */ ee({
  __name: "Timeline",
  props: {
    rows: {},
    columns: {}
  },
  setup(t) {
    const e = t, n = gn("api"), { id: r, dayWidth: o, elements: i, layout: s } = Ye(n);
    let a;
    const c = P(() => ({
      horizontal: !0,
      count: e.columns.length,
      getScrollElement: () => {
        var g;
        return (g = i.value) == null ? void 0 : g.timeline;
      },
      estimateSize: () => o.value,
      gap: s.value.gap,
      overscan: s.value.overscan
    })), u = Oc(c), l = P(() => u.value.getVirtualItems()), d = P(() => u.value.getTotalSize()), f = P(() => ({ width: G(d.value) }));
    sn([() => e.columns, () => s.value.daySize], () => h()), Es(() => {
      i.value = uh(r.value), a = new ResizeObserver(([g]) => g && h(g.contentRect.width)), a.observe(i.value.timeline);
    }), _c(() => a.unobserve(i.value.timeline));
    function h(g) {
      const v = g ?? i.value.timeline.clientWidth, w = s.value.gap * (e.columns.length - 1), y = v - w, E = Math.max(s.value.daySize, Math.floor(y / e.columns.length));
      E !== o.value && (o.value = E, u.value.measure());
    }
    function m(g) {
      return {
        height: G(s.value.dayHeadSize),
        width: G(o.value),
        transform: `translateX(${G(g.start)}) translateY(0)`
      };
    }
    function p(g, v) {
      return {
        width: G(o.value),
        height: G(g.size),
        transform: `translateX(${G(v.start)}) translateY(${G(g.start)})`
      };
    }
    return (g, v) => ($(), Kr(Rc, {
      rows: g.rows,
      layout: tt(s),
      "wrapper-style": f.value,
      class: Qr(["cullendar-timeline", tt(s).timelineClass])
    }, {
      wrapper: he(() => [
        Jr("div", dh, [
          ($(!0), ot(Ln, null, $n(l.value, (w) => ($(), ot("div", {
            key: w.index,
            class: "cullendar-timeline-virtual-col",
            style: an(m(w))
          }, [
            L(g.$slots, "head", Ce({ ref_for: !0 }, { date: g.columns[w.index] }), void 0, !0)
          ], 4))), 128))
        ])
      ]),
      default: he(({ row: w, data: y }) => [
        ($(!0), ot(Ln, null, $n(l.value, (E) => ($(), ot("div", {
          key: E.index,
          class: "cullendar-timeline-virtual-col",
          style: an(p(w, E))
        }, [
          L(g.$slots, "default", Ce({ ref_for: !0 }, { resource: y, date: g.columns[E.index] }), void 0, !0)
        ], 4))), 128))
      ]),
      _: 3
    }, 8, ["rows", "layout", "wrapper-style", "class"]));
  }
}), hh = /* @__PURE__ */ Je(fh, [["__scopeId", "data-v-4db4ef8d"]]), mh = /* @__PURE__ */ ee({
  __name: "Resources",
  props: {
    rows: {}
  },
  setup(t) {
    const e = gn("api"), { layout: n } = Ye(e);
    function r(o) {
      return {
        height: G(o.size),
        transform: `translateY(${G(o.start)})`
      };
    }
    return (o, i) => ($(), Kr(Rc, {
      rows: o.rows,
      layout: tt(n),
      class: Qr(["cullendar-resources", tt(n).resourcesClass])
    }, {
      default: he(({ row: s, data: a }) => [
        Jr("div", {
          class: "cullendar-resources-virtual-row",
          style: an(r(s))
        }, [
          L(o.$slots, "default", Gt(_e({ resource: a })), void 0, !0)
        ], 4)
      ]),
      _: 3
    }, 8, ["rows", "layout", "class"]));
  }
}), ph = /* @__PURE__ */ Je(mh, [["__scopeId", "data-v-876f22e5"]]), gh = /* @__PURE__ */ ee({
  __name: "Day",
  props: {
    date: {},
    resource: {}
  },
  setup(t) {
    const e = t, n = gn("api"), { utils: r } = Ye(n), o = P(() => r.value.getEvents(e.resource.id, e.date)), i = P(() => Array.from(o.value.values()).sort((s, a) => Date.parse(s.start) - Date.parse(a.start)));
    return (s, a) => L(s.$slots, "default", Gt(_e({ events: i.value })));
  }
}), vh = ["id"], wh = /* @__PURE__ */ ee({
  name: "Cullendar",
  __name: "index",
  props: {
    cullendar: {}
  },
  setup(t) {
    const e = t;
    kc("api", e.cullendar);
    const { id: n, elements: r, view: o, resources: i } = Ye(e.cullendar), s = P(() => Array.from(i.value.values()));
    Es(() => {
      r.value.timeline.addEventListener("scroll", a), r.value.resources.addEventListener("scroll", a);
    });
    function a(c) {
      const u = c.target, l = u.classList.contains("cullendar-timeline") ? r.value.resources : r.value.timeline;
      l.removeEventListener("scroll", a), l.scrollTop = u.scrollTop, requestAnimationFrame(() => l.addEventListener("scroll", a));
    }
    return (c, u) => ($(), ot("div", {
      id: tt(n),
      style: an({ "--scrollbar-width": tt(Jf)() }),
      class: "cullendar"
    }, [
      zi(ph, { rows: s.value }, {
        default: he(({ resource: l }) => [
          "isGroup" in l ? L(c.$slots, "resourceGroup", Gt(Ce({ key: 0 }, { resource: l })), void 0, !0) : L(c.$slots, "resource", Gt(Ce({ key: 1 }, { resource: l })), void 0, !0)
        ]),
        _: 3
      }, 8, ["rows"]),
      zi(hh, {
        rows: s.value,
        columns: tt(o).dates
      }, {
        head: he(({ date: l }) => [
          L(c.$slots, "dayHead", Gt(_e({ date: l })), void 0, !0)
        ]),
        default: he(({ resource: l, date: d }) => [
          "isGroup" in l ? bs("", !0) : ($(), Kr(gh, {
            key: 0,
            date: d,
            resource: l
          }, {
            default: he(({ events: f }) => [
              L(c.$slots, "day", Gt(_e({ resource: l, date: d, events: f })), () => [
                ($(!0), ot(Ln, null, $n(f, (h) => L(c.$slots, "event", Ce({
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
      L(c.$slots, "default", {}, void 0, !0)
    ], 12, vh));
  }
}), yh = /* @__PURE__ */ Je(wh, [["__scopeId", "data-v-3420f804"]]), Eh = /* @__PURE__ */ ee({
  __name: "DragEvent",
  props: {
    data: {},
    dragClass: {},
    ghostClass: {}
  },
  setup(t) {
    const e = t;
    let n;
    const r = P(() => {
      var c, u;
      return ((u = (c = e.dragClass) == null ? void 0 : c.split) == null ? void 0 : u.call(c, " ")) || [];
    }), o = P(() => {
      var c, u;
      return ((u = (c = e.ghostClass) == null ? void 0 : c.split) == null ? void 0 : u.call(c, " ")) || [];
    });
    function i(c) {
      if (!c.dataTransfer)
        return;
      const u = document.querySelector(".cullendar"), l = c.target, d = l.getBoundingClientRect();
      n = a(l, d), l.classList.add(...r.value), c.dataTransfer.setDragImage(n, c.clientX - d.left, c.clientY - d.top), c.dataTransfer.effectAllowed = "id" in e.data ? "move" : "copy", c.dataTransfer.setData(st.DATA_TRANSFER_TYPE, JSON.stringify(e.data)), requestAnimationFrame(() => u.classList.add(st.DRAGGING_CLASS));
    }
    function s(c) {
      const u = document.querySelector(".cullendar");
      c.target.classList.remove(...r.value), u.classList.remove(st.DRAGGING_CLASS), n && n.remove();
    }
    function a(c, u) {
      const l = c.cloneNode(!0);
      return l.classList.add("cullendar-ghost-event", ...o.value), l.style.height = G(u.height), l.style.width = G(u.width), document.body.appendChild(l), l;
    }
    return (c, u) => ($(), ot("div", {
      draggable: "true",
      class: "cullendar-drag-event",
      onDragstart: Wn(i, ["stop"]),
      onDragend: Wn(s, ["stop"])
    }, [
      L(c.$slots, "default", {}, void 0, !0)
    ], 32));
  }
}), zh = /* @__PURE__ */ Je(Eh, [["__scopeId", "data-v-788adb18"]]), _h = /* @__PURE__ */ ee({
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
    const e = t, n = gn("api"), { view: r, callbacks: o, resizeResourcesSet: i, resizeDatesSet: s } = Ye(n), a = dt(!1), c = P(() => i.value.has(e.resource.id) && s.value.has(e.date)), u = P(() => [
      a.value && e.dragoverClass,
      c.value && e.resizeoverClass
    ].filter(Boolean).join(" "));
    function l(p) {
      p.dataTransfer && p.dataTransfer.types.includes(st.DATA_TRANSFER_TYPE) && (a.value = !0);
    }
    function d(p) {
      if (!p.dataTransfer || !p.dataTransfer.types.includes(st.DATA_TRANSFER_TYPE))
        return;
      a.value = !1;
      const g = JSON.parse(p.dataTransfer.getData(st.DATA_TRANSFER_TYPE));
      if (!g.id)
        return o.value.onAddEvent(h({ data: g }));
      if (me.Instant.from(g.start).toZonedDateTimeISO(r.value.timezone).toPlainDate().toString() === e.date && Ri(g.resourceId).includes(e.resource.id))
        return;
      const w = f(g), y = h({ event: g, times: w });
      o.value.onBeforeDropEvent(y) && o.value.onMoveEvent(y);
    }
    function f(p) {
      const g = me.PlainDate.from(e.date), v = me.Instant.from(p.start).toZonedDateTimeISO(r.value.timezone), w = me.Instant.from(p.end).toZonedDateTimeISO(r.value.timezone), y = v.until(w), E = v.with({
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
    return (p, g) => ($(), ot("div", {
      class: Qr(u.value),
      onMouseenter: m
    }, [
      p.droppable && p.resource.isEventDroppable ? ($(), ot("span", {
        key: 0,
        class: "cullendar-day-dropzone",
        onDragenter: l,
        onDragover: g[0] || (g[0] = Wn(() => {
        }, ["prevent"])),
        onDragleave: g[1] || (g[1] = (v) => a.value = !1),
        onDrop: d
      }, null, 32)) : bs("", !0),
      L(p.$slots, "default", Gt(_e({ date: p.date, resource: p.resource, events: p.events, isDragOver: a.value, isResizeOver: c.value })))
    ], 34));
  }
}), Br = 100, bh = 60, vs = 0.1;
function Sh(t) {
  const e = dt(0), n = dt(0);
  let r, o, i = 0, s = 0, a = 0, c = 0, u = 0, l = 0;
  function d(p) {
    const g = p.clientX - r.left, v = p.clientY - r.top;
    e.value = t.scrollLeft - i, n.value = t.scrollTop - s, a = ws(g, r.width), c = ws(v, r.height);
  }
  function f() {
    r = t.getBoundingClientRect(), i = t.scrollLeft, s = t.scrollTop, t.addEventListener("mousemove", d), m();
  }
  function h() {
    t.removeEventListener("mousemove", d), cancelAnimationFrame(o), a = 0, c = 0, u = 0, l = 0;
  }
  function m() {
    u = u + (a - u) * vs, l = l + (c - l) * vs, (u !== 0 || l !== 0) && t.scrollBy(u, l), o = requestAnimationFrame(m);
  }
  return {
    scrolledX: e,
    scrolledY: n,
    start: f,
    stop: h
  };
}
function ws(t, e) {
  const n = t < Br ? -1 : t > e - Br ? 1 : 0, r = n === -1 ? t : e - t;
  return n * bh * (1 - r / Br);
}
const Mh = /* @__PURE__ */ ee({
  __name: "ResizeHandle",
  props: {
    event: {},
    resource: {},
    date: {}
  },
  setup(t) {
    const e = t, n = gn("api"), { dayWidth: r, elements: o, view: i, resources: s, layout: a, callbacks: c, utils: u, resizeDatesSet: l, resizeResourcesSet: d } = Ye(n);
    let f = 0, h = 0;
    const m = [], p = dt(!1), g = dt(0), v = dt(0), { scrolledX: w, scrolledY: y, start: E, stop: T } = Sh(o.value.timeline);
    function N(k) {
      g.value = k.clientX, v.value = k.clientY, p.value = !0, l.value.add(e.date), d.value.add(e.resource.id), wt(), document.addEventListener("mousemove", C), document.addEventListener("mouseup", z), o.value.calendar.classList.add(st.RESIZING_CLASS), E();
    }
    function C(k) {
      const R = Math.max(0, k.clientX - g.value + w.value), Nt = Math.max(0, k.clientY - v.value + y.value);
      _(Nt), Rt(R);
    }
    function z() {
      const k = Array.from(d.value.values()).slice(1).map((Nt) => u.value.getResource(Nt)), R = Array.from(l.value.values()).slice(1);
      f = 0, h = 0, d.value.clear(), l.value.clear(), p.value = !1, document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", z), o.value.calendar.classList.remove(st.RESIZING_CLASS), T(), !(!R.length && !k.length) && c.value.onResizeEvent({
        event: e.event,
        resource: e.resource,
        resources: k,
        date: e.date,
        dates: R,
        view: i.value
      });
    }
    function _(k) {
      for (; h < m.length && k > m[h].bottom; )
        d.value.add(m[h].id), h++;
      for (; h > 0 && k < m[h - 1].top; )
        d.value.delete(m[h - 1].id), h--;
    }
    function Rt(k) {
      const R = Math.ceil(k / (r.value + a.value.gap));
      if (f === R)
        return;
      const Nt = i.value.dates, Ke = Nt.indexOf(e.date);
      f = R, l.value = new Set(Nt.slice(Ke, Ke + R + 1));
    }
    function wt() {
      let k = a.value.eventSize, R = !1;
      m.length = 0;
      for (const [Nt, Ke] of s.value)
        if (!("isGroup" in Ke)) {
          if (R) {
            const Ni = Ke.maxEvents * a.value.eventSize, Nc = {
              id: Nt,
              top: k,
              bottom: k + Ni
            };
            k += Ni, m.push(Nc);
          }
          Nt === e.resource.id && (R = !0);
        }
      return m;
    }
    return (k, R) => ($(), ot("div", {
      draggable: "true",
      class: "cullendar-resize-handle",
      onDragstart: R[0] || (R[0] = Wn(() => {
      }, ["stop", "prevent"])),
      onMousedown: N
    }, [
      L(k.$slots, "default", Gt(_e({ isResizing: p.value })), void 0, !0)
    ], 32));
  }
}), kh = /* @__PURE__ */ Je(Mh, [["__scopeId", "data-v-cb26c380"]]), Ph = { install: (t) => t.component("Cullendar", yh) };
export {
  yh as Cullendar,
  zh as DragEvent,
  _h as DropDay,
  kh as ResizeHandle,
  Ch as create,
  Ph as default
};
