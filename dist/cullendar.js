import { reactive as fs, ref as $t, computed as R, unref as K, watch as re, shallowRef as Sc, triggerRef as Ti, onScopeDispose as Ic, defineComponent as Kt, createElementBlock as et, openBlock as L, createElementVNode as Gr, normalizeStyle as oe, renderSlot as A, Fragment as je, renderList as Ae, mergeProps as Rn, inject as he, toRefs as xn, onMounted as hs, onUnmounted as Tc, createBlock as Vr, normalizeClass as Hr, withCtx as fn, normalizeProps as Bt, guardReactiveProps as zn, provide as Dc, createVNode as Di, createCommentVNode as ms, withModifiers as Le } from "vue";
function Oc() {
  return Math.random().toString(36).substring(2, 11);
}
function J(t, n, e, r, o) {
  return Ct(n, ((i, s) => {
    const a = i[s];
    if (a === void 0)
      throw new TypeError(Uo(s));
    return a;
  })(t, n), e, r, o);
}
function Ct(t, n, e, r, o, i) {
  const s = se(n, e, r);
  if (o && n !== s)
    throw new RangeError(Na(t, n, e, r, i));
  return s;
}
function G(t) {
  return t !== null && /object|function/.test(typeof t);
}
function it(t, n = Map) {
  const e = new n();
  return (r, ...o) => {
    if (e.has(r))
      return e.get(r);
    const i = t(r, ...o);
    return e.set(r, i), i;
  };
}
function ie(t) {
  return _n({
    name: t
  }, 1);
}
function _n(t, n) {
  return zt((e) => ({
    value: e,
    configurable: 1,
    writable: !n
  }), t);
}
function Nc(t) {
  return zt((n) => ({
    get: n,
    configurable: 1
  }), t);
}
function Jr(t) {
  return {
    [Symbol.toStringTag]: {
      value: t,
      configurable: 1
    }
  };
}
function Yn(t, n) {
  const e = {};
  let r = t.length;
  for (const o of n)
    e[t[--r]] = o;
  return e;
}
function zt(t, n, e) {
  const r = {};
  for (const o in n)
    r[o] = t(n[o], o, e);
  return r;
}
function Qe(t, n, e) {
  const r = {};
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    r[i] = t(i, o, e);
  }
  return r;
}
function ps(t, n, e) {
  const r = {};
  for (let o = 0; o < t.length; o++)
    r[n[o]] = e[t[o]];
  return r;
}
function dt(t, n) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const r of t)
    e[r] = n[r];
  return e;
}
function Oi(t, n) {
  for (const e of n)
    if (e in t)
      return 1;
  return 0;
}
function gs(t, n, e) {
  for (const r of t)
    if (n[r] !== e[r])
      return 0;
  return 1;
}
function vs(t, n, e) {
  const r = {
    ...e
  };
  for (let o = 0; o < n; o++)
    r[t[o]] = 0;
  return r;
}
function S(t, ...n) {
  return (...e) => t(...n, ...e);
}
function Ni(t) {
  return t[0].toUpperCase() + t.substring(1);
}
function me(t) {
  return t.slice().sort();
}
function Be(t, n) {
  return String(n).padStart(t, "0");
}
function Ut(t, n) {
  return Math.sign(t - n);
}
function se(t, n, e) {
  return Math.min(Math.max(t, n), e);
}
function Ot(t, n) {
  return [Math.floor(t / n), ne(t, n)];
}
function ne(t, n) {
  return (t % n + n) % n;
}
function Gt(t, n) {
  return [tr(t, n), Xr(t, n)];
}
function tr(t, n) {
  return Math.trunc(t / n) || 0;
}
function Xr(t, n) {
  return t % n || 0;
}
function ze(t) {
  return Math.abs(t % 1) === 0.5;
}
function ws(t, n, e) {
  let r = 0, o = 0;
  for (let a = 0; a <= n; a++) {
    const c = t[e[a]], u = Et[a], l = C / u, [d, f] = Gt(c, l);
    r += f * u, o += d;
  }
  const [i, s] = Gt(r, C);
  return [o + i, s];
}
function nr(t, n, e) {
  const r = {};
  for (let o = n; o >= 0; o--) {
    const i = Et[o];
    r[e[o]] = tr(t, i), t = Xr(t, i);
  }
  return r;
}
function Rc(t) {
  if (t !== void 0)
    return B(t);
}
function Cc(t) {
  if (t !== void 0)
    return Dt(t);
}
function ys(t) {
  if (t !== void 0)
    return Kr(t);
}
function Dt(t) {
  return Ms(Kr(t));
}
function Kr(t) {
  return bs(Al(t));
}
function Es(t, n) {
  if (n == null)
    throw new RangeError(Uo(t));
  return n;
}
function pe(t) {
  if (!G(t))
    throw new TypeError(dl);
  return t;
}
function Qr(t, n, e = t) {
  if (typeof n !== t)
    throw new TypeError(on(e, n));
  return n;
}
function bs(t, n = "number") {
  if (!Number.isInteger(t))
    throw new RangeError(il(n, t));
  return t || 0;
}
function Ms(t, n = "number") {
  if (t <= 0)
    throw new RangeError(sl(n, t));
  return t;
}
function to(t) {
  if (typeof t == "symbol")
    throw new TypeError(ll);
  return String(t);
}
function Fe(t, n) {
  return G(t) ? String(t) : B(t, n);
}
function no(t) {
  if (typeof t == "string")
    return BigInt(t);
  if (typeof t != "bigint")
    throw new TypeError(ul(t));
  return t;
}
function Ss(t, n = "number") {
  if (typeof t == "bigint")
    throw new TypeError(cl(n));
  if (t = Number(t), !Number.isFinite(t))
    throw new RangeError(al(n, t));
  return t;
}
function W(t, n) {
  return Math.trunc(Ss(t, n)) || 0;
}
function eo(t, n) {
  return bs(Ss(t, n), n);
}
function Ri(t, n) {
  return Ms(W(t, n), n);
}
function ro(t, n) {
  let [e, r] = Gt(n, C), o = t + e;
  const i = Math.sign(o);
  return i && i === -Math.sign(r) && (o -= i, r += i * C), [o, r];
}
function kn(t, n, e = 1) {
  return ro(t[0] + n[0] * e, t[1] + n[1] * e);
}
function mn(t, n) {
  return ro(t[0], t[1] + n);
}
function wt(t, n) {
  return kn(n, t, -1);
}
function st(t, n) {
  return Ut(t[0], n[0]) || Ut(t[1], n[1]);
}
function Is(t, n, e) {
  return st(t, n) === -1 || st(t, e) === 1;
}
function oo(t, n = 1) {
  const e = BigInt(C / n);
  return [Number(t / e), Number(t % e) * n];
}
function $e(t, n = 1) {
  const e = C / n, [r, o] = Gt(t, e);
  return [r, o * n];
}
function yt(t, n = 1, e) {
  const [r, o] = t, [i, s] = Gt(o, n);
  return r * (C / n) + (i + (e ? s / n : 0));
}
function io(t, n, e = Ot) {
  const [r, o] = t, [i, s] = e(o, n);
  return [r * (C / n) + i, s];
}
function so(t) {
  return J(t, "isoYear", fe, de, 1), t.isoYear === fe ? J(t, "isoMonth", 4, 12, 1) : t.isoYear === de && J(t, "isoMonth", 1, 9, 1), t;
}
function ut(t) {
  return tt({
    ...t,
    ...nt,
    isoHour: 12
  }), t;
}
function tt(t) {
  const n = J(t, "isoYear", fe, de, 1), e = n === fe ? 1 : n === de ? -1 : 0;
  return e && bt(Y({
    ...t,
    isoDay: t.isoDay + e,
    isoNanosecond: t.isoNanosecond - e
  })), t;
}
function bt(t) {
  if (!t || Is(t, Vl, Gl))
    throw new RangeError(sn);
  return t;
}
function Vt(t) {
  return ws(t, 5, mt)[1];
}
function er(t) {
  const [n, e] = Ot(t, C);
  return [nr(e, 5, mt), n];
}
function Ci(t) {
  return io(t, vt);
}
function q(t) {
  return Zn(t.isoYear, t.isoMonth, t.isoDay, t.isoHour, t.isoMinute, t.isoSecond, t.isoMillisecond);
}
function Y(t) {
  const n = q(t);
  if (n !== void 0) {
    const [e, r] = Gt(n, Q);
    return [e, r * Pt + (t.isoMicrosecond || 0) * Me + (t.isoNanosecond || 0)];
  }
}
function ao(t, n) {
  const [e, r] = er(Vt(t) - n);
  return bt(Y({
    ...t,
    isoDay: t.isoDay + r,
    ...e
  }));
}
function Ue(...t) {
  return Zn(...t) / Ya;
}
function Zn(...t) {
  const [n, e] = Ts(...t), r = n.valueOf();
  if (!isNaN(r))
    return r - e * Q;
}
function Ts(t, n = 1, e = 1, r = 0, o = 0, i = 0, s = 0) {
  const a = t === fe ? 1 : t === de ? -1 : 0, c = /* @__PURE__ */ new Date();
  return c.setUTCHours(r, o, i, s), c.setUTCFullYear(t, n - 1, e + a), [c, a];
}
function jn(t, n) {
  let [e, r] = mn(t, n);
  r < 0 && (r += C, e -= 1);
  const [o, i] = Ot(r, Pt), [s, a] = Ot(i, Me);
  return rr(e * Q + o, s, a);
}
function rr(t, n = 0, e = 0) {
  const r = Math.ceil(Math.max(0, Math.abs(t) - ql) / Q) * Math.sign(t), o = new Date(t - r * Q);
  return Yn(Ir, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + r, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), n, e]);
}
function co(t, n) {
  if (n < -864e13)
    throw new RangeError(sn);
  const e = t.formatToParts(n), r = {};
  for (const o of e)
    r[o.type] = o.value;
  return r;
}
function uo(t) {
  return [t.isoYear, t.isoMonth, t.isoDay];
}
function Ds(t, n) {
  return [n, 0];
}
function Os() {
  return Zt;
}
function Ns(t, n) {
  switch (n) {
    case 2:
      return lo(t) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function Rs(t) {
  return lo(t) ? 366 : 365;
}
function lo(t) {
  return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
}
function Cs(t) {
  const [n, e] = Ts(t.isoYear, t.isoMonth, t.isoDay);
  return ne(n.getUTCDay() - e, 7) || 7;
}
function zs(t) {
  return this.id === Gn ? (({ isoYear: n }) => n < 1 ? ["gregory-inverse", 1 - n] : ["gregory", n])(t) : this.id === Xt ? Xl(t) : [];
}
function zc(t) {
  const n = q(t);
  if (n < Jl) {
    const { isoYear: i } = t;
    return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
  }
  const e = co(li(Xt), n), { era: r, eraYear: o } = va(e, Xt);
  return [r, o];
}
function or(t) {
  return vn(t), An(t, 1), t;
}
function vn(t) {
  return _s(t, 1), t;
}
function zi(t) {
  return gs(Qo, t, _s(t));
}
function _s(t, n) {
  const { isoYear: e } = t, r = J(t, "isoMonth", 1, Os(), n);
  return {
    isoYear: e,
    isoMonth: r,
    isoDay: J(t, "isoDay", 1, Ns(e, r), n)
  };
}
function An(t, n) {
  return Yn(mt, [J(t, "isoHour", 0, 23, n), J(t, "isoMinute", 0, 59, n), J(t, "isoSecond", 0, 59, n), J(t, "isoMillisecond", 0, 999, n), J(t, "isoMicrosecond", 0, 999, n), J(t, "isoNanosecond", 0, 999, n)]);
}
function T(t) {
  return t === void 0 ? 0 : Qa(pe(t));
}
function ir(t, n = 0) {
  t = Mt(t);
  const e = tc(t), r = ad(t, n);
  return [Qa(t), r, e];
}
function Ln(t, n, e, r = 9, o = 0, i = 4) {
  n = Mt(n);
  let s = Ka(n, r, o), a = mo(n), c = Te(n, i);
  const u = Ie(n, r, o, 1);
  return s == null ? s = Math.max(e, u) : xs(s, u), a = po(a, u, 1), t && (c = ((l) => l < 4 ? (l + 2) % 4 : l)(c)), [s, u, a, c];
}
function sr(t, n = 6, e) {
  let r = mo(t = ar(t, Je));
  const o = Te(t, 7);
  let i = Ie(t, n);
  return i = Es(Je, i), r = po(r, i, void 0, e), [i, r, o];
}
function fo(t) {
  return ni(Mt(t));
}
function ks(t, n) {
  return ho(Mt(t), n);
}
function _c(t) {
  const n = ar(t, Fr), e = Qt(Fr, id, n, 0);
  if (!e)
    throw new RangeError(on(Fr, e));
  return e;
}
function ho(t, n = 4) {
  const e = Fs(t);
  return [Te(t, 4), ...Ps(Ie(t, n), e)];
}
function Ps(t, n) {
  return t != null ? [Et[t], t < 4 ? 9 - 3 * t : -1] : [n === void 0 ? 1 : 10 ** (9 - n), n];
}
function mo(t) {
  const n = t[ee];
  return n === void 0 ? 1 : W(n, ee);
}
function po(t, n, e, r) {
  const o = r ? C : Et[n + 1];
  if (o) {
    const i = Et[n];
    if (o % ((t = Ct(ee, t, 1, o / i - (r ? 0 : 1), 1)) * i))
      throw new RangeError(on(ee, t));
  } else
    t = Ct(ee, t, 1, e ? 10 ** 9 : 1, 1);
  return t;
}
function Fs(t) {
  let n = t[Pr];
  if (n !== void 0) {
    if (typeof n != "number") {
      if (to(n) === "auto")
        return;
      throw new RangeError(on(Pr, n));
    }
    n = Ct(Pr, Math.floor(n), 0, 9, 1);
  }
  return n;
}
function Mt(t) {
  return t === void 0 ? {} : pe(t);
}
function ar(t, n) {
  return typeof t == "string" ? {
    [n]: t
  } : pe(t);
}
function cr(t) {
  return {
    overflow: Kl[t]
  };
}
function go(t, n, e = 9, r = 0, o) {
  let i = n[t];
  if (i === void 0)
    return o ? r : void 0;
  if (i = to(i), i === "auto")
    return o ? r : null;
  let s = Lr[i];
  if (s === void 0 && (s = $l[i]), s === void 0)
    throw new RangeError(Ca(t, i, Lr));
  return Ct(t, s, r, e, 1, Wo), s;
}
function Qt(t, n, e, r = 0) {
  const o = e[t];
  if (o === void 0)
    return r;
  const i = to(o), s = n[i];
  if (s === void 0)
    throw new RangeError(Ca(t, i, n));
  return s;
}
function xs(t, n) {
  if (n > t)
    throw new RangeError(_l);
}
function _t(t) {
  return {
    branding: ii,
    epochNanoseconds: t
  };
}
function ft(t, n, e) {
  return {
    branding: an,
    calendar: e,
    timeZone: n,
    epochNanoseconds: t
  };
}
function ht(t, n = t.calendar) {
  return {
    branding: Vn,
    calendar: n,
    ...dt(Ul, t)
  };
}
function kt(t, n = t.calendar) {
  return {
    branding: De,
    calendar: n,
    ...dt(ti, t)
  };
}
function ae(t, n = t.calendar) {
  return {
    branding: ei,
    calendar: n,
    ...dt(ti, t)
  };
}
function We(t, n = t.calendar) {
  return {
    branding: ri,
    calendar: n,
    ...dt(ti, t)
  };
}
function St(t) {
  return {
    branding: oi,
    ...dt(Ga, t)
  };
}
function x(t) {
  return {
    branding: si,
    sign: tn(t),
    ...dt(Jo, t)
  };
}
function vo(t) {
  return io(t.epochNanoseconds, Pt)[0];
}
function kc(t) {
  return ((n, e = 1) => {
    const [r, o] = n, i = Math.floor(o / e), s = C / e;
    return BigInt(r) * BigInt(s) + BigInt(i);
  })(t.epochNanoseconds);
}
function Ys(t) {
  return t.epochNanoseconds;
}
function Pc(t, n, e, r, o) {
  const i = pn(r), [s, a] = ((v, w) => {
    const y = w((v = ar(v, Ur))[Ja]);
    let b = sd(v);
    return b = Es(Ur, b), [b, y];
  })(o, t), c = Math.max(s, i);
  if (!a && ue(c, a))
    return _i(r, s);
  if (!a)
    throw new RangeError(br);
  if (!r.sign)
    return 0;
  const [u, l, d] = hr(n, e, a), f = Do(d), h = mr(d), m = Oo(d), g = h(l, u, r);
  Pn(a) || (tt(u), tt(g));
  const p = m(l, u, g, s);
  return ue(s, a) ? _i(p, s) : ((v, w, y, b, O, N, z) => {
    const P = tn(v), [_, ln] = wo(b, Ko(y, v), y, P, O, N, z), Yt = yo(w, _, ln);
    return v[D[y]] + Yt * P;
  })(p, f(g), s, l, u, f, h);
}
function _i(t, n) {
  return yt(Z(t), Et[n], 1);
}
function wo(t, n, e, r, o, i, s) {
  const a = D[e], c = {
    ...n,
    [a]: n[a] + r
  }, u = s(t, o, n), l = s(t, o, c);
  return [i(u), i(l)];
}
function yo(t, n, e) {
  const r = yt(wt(n, e));
  if (!r)
    throw new RangeError(qn);
  return yt(wt(n, t)) / r;
}
function Fc(t, n) {
  const [e, r, o] = sr(n, 5, 1);
  return _t(lr(t.epochNanoseconds, e, r, o, 1));
}
function xc(t, n, e) {
  let { epochNanoseconds: r, timeZone: o, calendar: i } = n;
  const [s, a, c] = sr(e);
  if (s === 0 && a === 1)
    return n;
  const u = t(o);
  if (s === 6)
    r = ((l, d, f, h) => {
      const m = ct(f, d), [g, p] = l(m), v = f.epochNanoseconds, w = Jt(d, g), y = Jt(d, p);
      if (Is(v, w, y))
        throw new RangeError(qn);
      return Bs(yo(v, w, y), h) ? y : w;
    })(As, u, n, c);
  else {
    const l = u.R(r);
    r = Bn(u, Zs(jn(r, l), s, a, c), l, 2, 0, 1);
  }
  return ft(r, o, i);
}
function Yc(t, n) {
  return ht(Zs(t, ...sr(n)), t.calendar);
}
function Zc(t, n) {
  const [e, r, o] = sr(n, 5);
  var i;
  return St((i = o, Eo(t, ge(e, r), i)[0]));
}
function jc(t, n) {
  const e = t(n.timeZone), r = ct(n, e), [o, i] = As(r), s = yt(wt(Jt(e, o), Jt(e, i)), Sr, 1);
  if (s <= 0)
    throw new RangeError(qn);
  return s;
}
function Ac(t, n) {
  const { timeZone: e, calendar: r } = n, o = ((i, s, a) => Jt(s, i(ct(a, s))))(Ls, t(e), n);
  return ft(o, e, r);
}
function Zs(t, n, e, r) {
  return js(t, ge(n, e), r);
}
function js(t, n, e) {
  const [r, o] = Eo(t, n, e);
  return tt({
    ...wn(t, o),
    ...r
  });
}
function Eo(t, n, e) {
  return er(Ht(Vt(t), n, e));
}
function qe(t) {
  return Ht(t, Mr, 7);
}
function ge(t, n) {
  return Et[t] * n;
}
function As(t) {
  const n = Ls(t);
  return [n, wn(n, 1)];
}
function Ls(t) {
  return Wl(6, t);
}
function Lc(t, n, e) {
  const r = Math.min(pn(t), 6);
  return $n(dr(Z(t, r), n, e), r);
}
function ur(t, n, e, r, o, i, s, a, c, u) {
  if (r === 0 && o === 1)
    return t;
  const l = ue(r, a) ? Pn(a) && r < 6 && e >= 6 ? $c : Bc : Uc;
  let [d, f, h] = l(t, n, e, r, o, i, s, a, c, u);
  return h && r !== 7 && (d = ((m, g, p, v, w, y, b, O) => {
    const N = tn(m);
    for (let z = v + 1; z <= p; z++) {
      if (z === 7 && p !== 7)
        continue;
      const P = Ko(z, m);
      P[D[z]] += N;
      const _ = yt(wt(b(O(w, y, P)), g));
      if (_ && Math.sign(_) !== N)
        break;
      m = P;
    }
    return m;
  })(d, f, e, Math.max(6, r), s, a, c, u)), d;
}
function lr(t, n, e, r, o) {
  if (n === 6) {
    const i = ((s) => s[0] + s[1] / C)(t);
    return [Ht(i, e, r), 0];
  }
  return dr(t, ge(n, e), r, o);
}
function dr(t, n, e, r) {
  let [o, i] = t;
  r && i < 0 && (i += C, o -= 1);
  const [s, a] = Ot(Ht(i, n, e), C);
  return ro(o + s, a);
}
function Ht(t, n, e) {
  return Bs(t / n, e) * n;
}
function Bs(t, n) {
  return ld[n](t);
}
function Bc(t, n, e, r, o, i) {
  const s = tn(t), a = Z(t), c = lr(a, r, o, i), u = wt(a, c), l = Math.sign(c[0] - a[0]) === s, d = $n(c, Math.min(e, 6));
  return [{
    ...t,
    ...d
  }, kn(n, u), l];
}
function $c(t, n, e, r, o, i, s, a, c, u) {
  const l = tn(t) || 1, d = yt(Z(t, 5)), f = ge(r, o);
  let h = Ht(d, f, i);
  const [m, g] = wo(s, {
    ...t,
    ...Xo
  }, 6, l, a, c, u), p = h - yt(wt(m, g));
  let v = 0;
  p && Math.sign(p) !== l ? n = mn(m, h) : (v += l, h = Ht(p, f, i), n = mn(g, h));
  const w = pr(h);
  return [{
    ...t,
    ...w,
    days: t.days + v
  }, n, !!v];
}
function Uc(t, n, e, r, o, i, s, a, c, u) {
  const l = tn(t), d = D[r], f = Ko(r, t);
  r === 7 && (t = {
    ...t,
    weeks: t.weeks + Math.trunc(t.days / 7)
  });
  const h = tr(t[d], o) * o;
  f[d] = h;
  const [m, g] = wo(s, f, r, o * l, a, c, u), p = h + yo(n, m, g) * l * o, v = Ht(p, o, i), w = Math.sign(v - p) === l;
  return f[d] = v, [f, w ? g : m, w];
}
function ki(t, n, e, r) {
  const [o, i, s, a] = ((u) => {
    const l = ho(u = Mt(u));
    return [u.timeZone, ...l];
  })(r), c = o !== void 0;
  return ((u, l, d, f, h, m) => {
    d = dr(d, h, f, 1);
    const g = l.R(d);
    return bo(jn(d, g), m) + (u ? ve(qe(g)) : "Z");
  })(c, n(c ? t(o) : Mn), e.epochNanoseconds, i, s, a);
}
function Pi(t, n, e) {
  const [r, o, i, s, a, c] = ((u) => {
    u = Mt(u);
    const l = ni(u), d = Fs(u), f = ud(u), h = Te(u, 4), m = Ie(u, 4);
    return [l, cd(u), f, h, ...Ps(m, d)];
  })(e);
  return ((u, l, d, f, h, m, g, p, v, w) => {
    f = dr(f, v, p, 1);
    const y = u(d).R(f);
    return bo(jn(f, y), w) + ve(qe(y), g) + ((b, O) => O !== 1 ? "[" + (O === 2 ? "!" : "") + b + "]" : "")(d, m) + Mo(l, h);
  })(t, n.calendar, n.timeZone, n.epochNanoseconds, r, o, i, s, a, c);
}
function Fi(t, n) {
  const [e, r, o, i] = ((u) => (u = Mt(u), [ni(u), ...ho(u)]))(n);
  return s = t.calendar, a = e, c = i, bo(js(t, o, r), c) + Mo(s, a);
  var s, a, c;
}
function xi(t, n) {
  return e = t.calendar, r = t, o = fo(n), Ge(r) + Mo(e, o);
  var e, r, o;
}
function Yi(t, n) {
  return $s(t.calendar, Us, t, fo(n));
}
function Zi(t, n) {
  return $s(t.calendar, Wc, t, fo(n));
}
function ji(t, n) {
  const [e, r, o] = ks(n);
  return i = o, Ws(Eo(t, r, e)[0], i);
  var i;
}
function Nr(t, n) {
  const [e, r, o] = ks(n, 3);
  return r > 1 && yn(t = {
    ...t,
    ...Lc(t, r, e)
  }), ((i, s) => {
    const { sign: a } = i, c = a === -1 ? V(i) : i, { hours: u, minutes: l } = c, [d, f] = io(Z(c, 3), vt, Gt);
    Hs(d);
    const h = So(f, s), m = s >= 0 || !a || h;
    return (a < 0 ? "-" : "") + "P" + Ai({
      Y: dn(c.years),
      M: dn(c.months),
      W: dn(c.weeks),
      D: dn(c.days)
    }) + (u || l || d || m ? "T" + Ai({
      H: dn(u),
      M: dn(l),
      S: dn(d, m) + h
    }) : "");
  })(t, o);
}
function $s(t, n, e, r) {
  const o = r > 1 || r === 0 && t !== I;
  return r === 1 ? t === I ? n(e) : Ge(e) : o ? Ge(e) + qs(t, r === 2) : n(e);
}
function Ai(t) {
  const n = [];
  for (const e in t) {
    const r = t[e];
    r && n.push(r, e);
  }
  return n.join("");
}
function bo(t, n) {
  return Ge(t) + "T" + Ws(t, n);
}
function Ge(t) {
  return Us(t) + "-" + lt(t.isoDay);
}
function Us(t) {
  const { isoYear: n } = t;
  return (n < 0 || n > 9999 ? Gs(n) + Be(6, Math.abs(n)) : Be(4, n)) + "-" + lt(t.isoMonth);
}
function Wc(t) {
  return lt(t.isoMonth) + "-" + lt(t.isoDay);
}
function Ws(t, n) {
  const e = [lt(t.isoHour), lt(t.isoMinute)];
  return n !== -1 && e.push(lt(t.isoSecond) + ((r, o, i, s) => So(r * Pt + o * Me + i, s))(t.isoMillisecond, t.isoMicrosecond, t.isoNanosecond, n)), e.join(":");
}
function ve(t, n = 0) {
  if (n === 1)
    return "";
  const [e, r] = Ot(Math.abs(t), Sr), [o, i] = Ot(r, Mr), [s, a] = Ot(i, vt);
  return Gs(t) + lt(e) + ":" + lt(o) + (s || a ? ":" + lt(s) + So(a) : "");
}
function Mo(t, n) {
  return n !== 1 && (n > 1 || n === 0 && t !== I) ? qs(t, n === 2) : "";
}
function qs(t, n) {
  return "[" + (n ? "!" : "") + "u-ca=" + t + "]";
}
function So(t, n) {
  let e = Be(9, t);
  return e = n === void 0 ? e.replace(hd, "") : e.slice(0, n), e ? "." + e : "";
}
function Gs(t) {
  return t < 0 ? "-" : "+";
}
function dn(t, n) {
  return t || n ? t.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function qc(t, n) {
  const { epochNanoseconds: e } = t, r = (n.R ? n : n(t.timeZone)).R(e), o = jn(e, r);
  return {
    calendar: t.calendar,
    ...o,
    offsetNanoseconds: r
  };
}
function Bn(t, n, e, r = 0, o = 0, i, s) {
  if (e !== void 0 && r === 1 && (r === 1 || s))
    return ao(n, e);
  const a = t.I(n);
  if (e !== void 0 && r !== 3) {
    const c = ((u, l, d, f) => {
      const h = Y(l);
      f && (d = qe(d));
      for (const m of u) {
        let g = yt(wt(m, h));
        if (f && (g = qe(g)), g === d)
          return m;
      }
    })(a, n, e, i);
    if (c !== void 0)
      return c;
    if (r === 0)
      throw new RangeError(Dl);
  }
  return s ? Y(n) : we(t, n, o, a);
}
function we(t, n, e = 0, r = t.I(n)) {
  if (r.length === 1)
    return r[0];
  if (e === 1)
    throw new RangeError(Ol);
  if (r.length)
    return r[e === 3 ? 1 : 0];
  const o = Y(n), i = ((a, c) => {
    const u = a.R(mn(c, -864e11));
    return ((l) => {
      if (l > C)
        throw new RangeError(Tl);
      return l;
    })(a.R(mn(c, C)) - u);
  })(t, o), s = i * (e === 2 ? -1 : 1);
  return (r = t.I(jn(o, s)))[e === 2 ? 0 : r.length - 1];
}
function Jt(t, n) {
  const e = t.I(n);
  if (e.length)
    return e[0];
  const r = mn(Y(n), -864e11);
  return t.O(r, 1);
}
function Li(t, n, e) {
  return _t(bt(kn(n.epochNanoseconds, ((r) => {
    if (Js(r))
      throw new RangeError(Cl);
    return Z(r, 5);
  })(t ? V(e) : e))));
}
function Bi(t, n, e, r, o, i = /* @__PURE__ */ Object.create(null)) {
  const s = n(r.timeZone), a = t(r.calendar);
  return {
    ...r,
    ...Io(s, a, r, e ? V(o) : o, i)
  };
}
function $i(t, n, e, r, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: i } = e;
  return ht(To(t(i), e, n ? V(r) : r, o), i);
}
function Ui(t, n, e, r, o) {
  const { calendar: i } = e;
  return kt(fr(t(i), e, n ? V(r) : r, o), i);
}
function Wi(t, n, e, r, o) {
  const i = e.calendar, s = t(i);
  let a = ut(ce(s, e));
  n && (r = No(r)), r.sign < 0 && (a = s.P(a, {
    ...j,
    months: 1
  }), a = wn(a, -1));
  const c = s.P(a, r, o);
  return ae(ce(s, c), i);
}
function qi(t, n, e) {
  return St(Vs(n, t ? V(e) : e)[0]);
}
function Io(t, n, e, r, o) {
  const i = Z(r, 5);
  let s = e.epochNanoseconds;
  if (Js(r)) {
    const a = ct(e, t);
    s = kn(we(t, {
      ...fr(n, a, {
        ...r,
        ...Xo
      }, o),
      ...dt(mt, a)
    }), i);
  } else
    s = kn(s, i), T(o);
  return {
    epochNanoseconds: bt(s)
  };
}
function To(t, n, e, r) {
  const [o, i] = Vs(n, e);
  return tt({
    ...fr(t, n, {
      ...e,
      ...Xo,
      days: e.days + i
    }, r),
    ...o
  });
}
function fr(t, n, e, r) {
  if (e.years || e.months || e.weeks)
    return t.P(n, e, r);
  T(r);
  const o = e.days + Z(e, 5)[0];
  return o ? ut(wn(n, o)) : n;
}
function ce(t, n, e = 1) {
  return wn(n, e - t.day(n));
}
function Vs(t, n) {
  const [e, r] = Z(n, 5), [o, i] = er(Vt(t) + r);
  return [o, e + i];
}
function wn(t, n) {
  return n ? {
    ...t,
    ...rr(q(t) + n * Q)
  } : t;
}
function hr(t, n, e) {
  const r = t(e.calendar);
  return Pn(e) ? [e, r, n(e.timeZone)] : [{
    ...e,
    ...nt
  }, r];
}
function Do(t) {
  return t ? Ys : Y;
}
function mr(t) {
  return t ? S(Io, t) : To;
}
function Oo(t) {
  return t ? S(gu, t) : vu;
}
function Pn(t) {
  return t && t.epochNanoseconds;
}
function ue(t, n) {
  return t <= 6 - (Pn(n) ? 1 : 0);
}
function Gi(t, n, e, r, o, i, s) {
  const a = t(Mt(s).relativeTo), c = Math.max(pn(o), pn(i));
  if (ue(c, a))
    return x(yn(((g, p, v, w) => {
      const y = kn(Z(g), Z(p), w ? -1 : 1);
      if (!Number.isFinite(y[0]))
        throw new RangeError(sn);
      return {
        ...j,
        ...$n(y, v)
      };
    })(o, i, c, r)));
  if (!a)
    throw new RangeError(br);
  r && (i = V(i));
  const [u, l, d] = hr(n, e, a), f = mr(d), h = Oo(d), m = f(l, u, o);
  return x(h(l, u, f(l, m, i), c));
}
function Gc(t, n, e, r, o) {
  const i = pn(r), [s, a, c, u, l] = ((N, z, P) => {
    N = ar(N, Je);
    let _ = Ka(N);
    const ln = P(N[Ja]);
    let Yt = mo(N);
    const Mc = Te(N, 7);
    let It = Ie(N);
    if (_ === void 0 && It === void 0)
      throw new RangeError(zl);
    if (It == null && (It = 0), _ == null && (_ = Math.max(It, z)), xs(_, It), Yt = po(Yt, It, 1), Yt > 1 && It > 5 && _ !== It)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [_, It, Yt, Mc, ln];
  })(o, i, t), d = Math.max(i, s);
  if (!l && d <= 6)
    return x(yn(((N, z, P, _, ln) => {
      const Yt = lr(Z(N), P, _, ln);
      return {
        ...j,
        ...$n(Yt, z)
      };
    })(r, s, a, c, u)));
  if (!Pn(l) && !r.sign)
    return r;
  if (!l)
    throw new RangeError(br);
  const [f, h, m] = hr(n, e, l), g = Do(m), p = mr(m), v = Oo(m), w = p(h, f, r);
  Pn(l) || (tt(f), tt(w));
  let y = v(h, f, w, s);
  const b = r.sign, O = tn(y);
  if (b && O && b !== O)
    throw new RangeError(qn);
  return y = ur(y, g(w), s, a, c, u, h, f, g, p), x(y);
}
function Vc(t) {
  return t.sign === -1 ? No(t) : t;
}
function No(t) {
  return x(V(t));
}
function V(t) {
  const n = {};
  for (const e of D)
    n[e] = -1 * t[e] || 0;
  return n;
}
function Hc(t) {
  return !t.sign;
}
function tn(t, n = D) {
  let e = 0;
  for (const r of n) {
    const o = Math.sign(t[r]);
    if (o) {
      if (e && e !== o)
        throw new RangeError(Rl);
      e = o;
    }
  }
  return e;
}
function yn(t) {
  for (const n of Bl)
    Ct(n, t[n], -4294967295, md, 1);
  return Hs(yt(Z(t), vt)), t;
}
function Hs(t) {
  if (!Number.isSafeInteger(t))
    throw new RangeError(Nl);
}
function Z(t, n = 6) {
  return ws(t, n, D);
}
function $n(t, n = 6) {
  const [e, r] = t, o = nr(r, n, D);
  if (o[D[n]] += e * (C / Et[n]), !Number.isFinite(o[D[n]]))
    throw new RangeError(sn);
  return o;
}
function pr(t, n = 5) {
  return nr(t, n, D);
}
function Js(t) {
  return !!tn(t, qa);
}
function pn(t) {
  let n = 9;
  for (; n > 0 && !t[D[n]]; n--)
    ;
  return n;
}
function Jc(t, n) {
  return [t, n];
}
function Vi(t) {
  const n = Math.floor(t / Ye) * Ye;
  return [n, n + Ye];
}
function Xc(t) {
  const n = nn(t = Fe(t));
  if (!n)
    throw new RangeError(X(t));
  let e;
  if (n.j)
    e = 0;
  else {
    if (!n.offset)
      throw new RangeError(X(t));
    e = En(n.offset);
  }
  return n.timeZone && ko(n.timeZone, 1), _t(ao(or(n), e));
}
function Kc(t) {
  const n = nn(B(t));
  if (!n)
    throw new RangeError(X(t));
  if (n.timeZone)
    return Xs(n, n.offset ? En(n.offset) : void 0);
  if (n.j)
    throw new RangeError(X(t));
  return Qs(n);
}
function Qc(t, n) {
  const e = nn(B(t));
  if (!e || !e.timeZone)
    throw new RangeError(X(t));
  const { offset: r } = e, o = r ? En(r) : void 0, [, i, s] = ir(n);
  return Xs(e, o, i, s);
}
function En(t) {
  const n = ko(t);
  if (n === void 0)
    throw new RangeError(X(t));
  return n;
}
function tu(t) {
  const n = nn(B(t));
  if (!n || n.j)
    throw new RangeError(X(t));
  return ht(Ks(n));
}
function Ro(t, n, e) {
  let r = nn(B(t));
  if (!r || r.j)
    throw new RangeError(X(t));
  return n ? r.calendar === I && (r = r.isoYear === -271821 && r.isoMonth === 4 ? {
    ...r,
    isoDay: 20,
    ...nt
  } : {
    ...r,
    isoDay: 1,
    ...nt
  }) : e && r.calendar === I && (r = {
    ...r,
    isoYear: Rt
  }), kt(r.C ? Ks(r) : Qs(r));
}
function nu(t, n) {
  const e = zo(B(n));
  if (e)
    return Co(e), ae(so(vn(e)));
  const r = Ro(n, 1);
  return ae(ce(t(r.calendar), r));
}
function Co(t) {
  if (t.calendar !== I)
    throw new RangeError(Nt(t.calendar));
}
function eu(t, n) {
  const e = _o(B(n));
  if (e)
    return Co(e), We(vn(e));
  const r = Ro(n, 0, 1), { calendar: o } = r, i = t(o), [s, a, c] = i.v(r), [u, l] = i.q(s, a), [d, f] = i.G(u, l, c);
  return We(ut(i.V(d, f, c)), o);
}
function ru(t) {
  let n, e = ((r) => {
    const o = bd.exec(r);
    return o ? (gr(o[10]), ea(o)) : void 0;
  })(B(t));
  if (!e) {
    if (e = nn(t), !e)
      throw new RangeError(X(t));
    if (!e.C)
      throw new RangeError(X(t));
    if (e.j)
      throw new RangeError(Nt("Z"));
    Co(e);
  }
  if ((n = zo(t)) && zi(n))
    throw new RangeError(X(t));
  if ((n = _o(t)) && zi(n))
    throw new RangeError(X(t));
  return St(An(e, 1));
}
function ou(t) {
  const n = ((e) => {
    const r = Id.exec(e);
    return r ? ((o) => {
      function i(l, d, f) {
        let h = 0, m = 0;
        if (f && ([h, c] = Ot(c, Et[f])), l !== void 0) {
          if (a)
            throw new RangeError(Nt(l));
          m = ((g) => {
            const p = parseInt(g);
            if (!Number.isFinite(p))
              throw new RangeError(Nt(g));
            return p;
          })(l), s = 1, d && (c = Po(d) * (Et[f] / vt), a = 1);
        }
        return h + m;
      }
      let s = 0, a = 0, c = 0, u = {
        ...Yn(D, [i(o[2]), i(o[3]), i(o[4]), i(o[5]), i(o[6], o[7], 5), i(o[8], o[9], 4), i(o[10], o[11], 3)]),
        ...nr(c, 2, D)
      };
      if (!s)
        throw new RangeError(Ra(D));
      return Fo(o[1]) < 0 && (u = V(u)), u;
    })(r) : void 0;
  })(B(t));
  if (!n)
    throw new RangeError(X(t));
  return x(yn(n));
}
function iu(t) {
  const n = nn(t) || zo(t) || _o(t);
  return n ? n.calendar : t;
}
function su(t) {
  const n = nn(t);
  return n && (n.timeZone || n.j && Mn || n.offset) || t;
}
function Xs(t, n, e = 0, r = 0) {
  const o = xo(t.timeZone), i = M(o);
  let s;
  return or(t), s = t.C ? Bn(i, t, n, e, r, !i.$, t.j) : Jt(i, t), ft(s, o, Er(t.calendar));
}
function Ks(t) {
  return ta(tt(or(t)));
}
function Qs(t) {
  return ta(ut(vn(t)));
}
function ta(t) {
  return {
    ...t,
    calendar: Er(t.calendar)
  };
}
function nn(t) {
  const n = Ed.exec(t);
  return n ? ((e) => {
    const r = e[10], o = (r || "").toUpperCase() === "Z";
    return {
      isoYear: na(e),
      isoMonth: parseInt(e[4]),
      isoDay: parseInt(e[5]),
      ...ea(e.slice(5)),
      ...gr(e[16]),
      C: !!e[6],
      j: o,
      offset: o ? void 0 : r
    };
  })(n) : void 0;
}
function zo(t) {
  const n = wd.exec(t);
  return n ? ((e) => ({
    isoYear: na(e),
    isoMonth: parseInt(e[4]),
    isoDay: 1,
    ...gr(e[5])
  }))(n) : void 0;
}
function _o(t) {
  const n = yd.exec(t);
  return n ? ((e) => ({
    isoYear: Rt,
    isoMonth: parseInt(e[1]),
    isoDay: parseInt(e[2]),
    ...gr(e[3])
  }))(n) : void 0;
}
function ko(t, n) {
  const e = Md.exec(t);
  return e ? ((r, o) => {
    const i = r[4] || r[5];
    if (o && i)
      throw new RangeError(Nt(i));
    return ((s) => {
      if (Math.abs(s) >= C)
        throw new RangeError(Il);
      return s;
    })((Cn(r[2]) * Sr + Cn(r[3]) * Mr + Cn(r[4]) * vt + Po(r[5] || "")) * Fo(r[1]));
  })(e, n) : void 0;
}
function na(t) {
  const n = Fo(t[1]), e = parseInt(t[2] || t[3]);
  if (n < 0 && !e)
    throw new RangeError(Nt(-0));
  return n * e;
}
function ea(t) {
  const n = Cn(t[3]);
  return {
    ...er(Po(t[4] || ""))[0],
    isoHour: Cn(t[1]),
    isoMinute: Cn(t[2]),
    isoSecond: n === 60 ? 59 : n
  };
}
function gr(t) {
  let n, e;
  const r = [];
  if (t.replace(Sd, (o, i, s) => {
    const a = !!i, [c, u] = s.split("=").reverse();
    if (u) {
      if (u === "u-ca")
        r.push(c), n || (n = a);
      else if (a || /[A-Z]/.test(u))
        throw new RangeError(Nt(o));
    } else {
      if (e)
        throw new RangeError(Nt(o));
      e = c;
    }
    return "";
  }), r.length > 1 && n)
    throw new RangeError(Nt(t));
  return {
    timeZone: e,
    calendar: r[0] || I
  };
}
function Po(t) {
  return parseInt(t.padEnd(9, "0"));
}
function Un(t) {
  return new RegExp(`^${t}$`, "i");
}
function Fo(t) {
  return t && t !== "+" ? -1 : 1;
}
function Cn(t) {
  return t === void 0 ? 0 : parseInt(t);
}
function au(t) {
  return xo(B(t));
}
function xo(t) {
  const n = Yo(t);
  return typeof n == "number" ? ve(n) : n ? ((e) => {
    if (Od.test(e))
      throw new RangeError(Pa(e));
    if (Dd.test(e))
      throw new RangeError(Sl);
    return e.toLowerCase().split("/").map((r, o) => (r.length <= 3 || /\d/.test(r)) && !/etc|yap/.test(r) ? r.toUpperCase() : r.replace(/baja|dumont|[a-z]+/g, (i, s) => i.length <= 2 && !o || i === "in" || i === "chat" ? i.toUpperCase() : i.length > 2 || !s ? Ni(i).replace(/island|noronha|murdo|rivadavia|urville/, Ni) : i)).join("/");
  })(t) : Mn;
}
function Hi(t) {
  const n = Yo(t);
  return typeof n == "number" ? n : n ? n.resolvedOptions().timeZone : Mn;
}
function Yo(t) {
  const n = ko(t = t.toUpperCase(), 1);
  return n !== void 0 ? n : t !== Mn ? Td(t) : void 0;
}
function ra(t, n) {
  return st(t.epochNanoseconds, n.epochNanoseconds);
}
function oa(t, n) {
  return st(t.epochNanoseconds, n.epochNanoseconds);
}
function cu(t, n, e, r, o, i) {
  const s = t(Mt(i).relativeTo), a = Math.max(pn(r), pn(o));
  if (gs(D, r, o))
    return 0;
  if (ue(a, s))
    return st(Z(r), Z(o));
  if (!s)
    throw new RangeError(br);
  const [c, u, l] = hr(n, e, s), d = Do(l), f = mr(l);
  return st(d(f(u, c, r)), d(f(u, c, o)));
}
function ia(t, n) {
  return Wn(t, n) || Zo(t, n);
}
function Wn(t, n) {
  return Ut(q(t), q(n));
}
function Zo(t, n) {
  return Ut(Vt(t), Vt(n));
}
function uu(t, n) {
  return !ra(t, n);
}
function lu(t, n) {
  return !oa(t, n) && !!sa(t.timeZone, n.timeZone) && t.calendar === n.calendar;
}
function du(t, n) {
  return !ia(t, n) && t.calendar === n.calendar;
}
function fu(t, n) {
  return !Wn(t, n) && t.calendar === n.calendar;
}
function hu(t, n) {
  return !Wn(t, n) && t.calendar === n.calendar;
}
function mu(t, n) {
  return !Wn(t, n) && t.calendar === n.calendar;
}
function pu(t, n) {
  return !Zo(t, n);
}
function sa(t, n) {
  if (t === n)
    return 1;
  try {
    return Hi(t) === Hi(n);
  } catch {
  }
}
function Ji(t, n, e, r) {
  const o = Ln(t, r, 3, 5), i = vr(n.epochNanoseconds, e.epochNanoseconds, ...o);
  return x(t ? V(i) : i);
}
function Xi(t, n, e, r, o, i) {
  const s = yr(r.calendar, o.calendar), [a, c, u, l] = Ln(e, i, 5), d = r.epochNanoseconds, f = o.epochNanoseconds, h = st(f, d);
  let m;
  if (h)
    if (a < 6)
      m = vr(d, f, a, c, u, l);
    else {
      const g = n(((v, w) => {
        if (!sa(v, w))
          throw new RangeError(Fa);
        return v;
      })(r.timeZone, o.timeZone)), p = t(s);
      m = ca(p, g, r, o, h, a, i), m = ur(m, f, a, c, u, l, p, r, Ys, S(Io, g));
    }
  else
    m = j;
  return x(e ? V(m) : m);
}
function Ki(t, n, e, r, o) {
  const i = yr(e.calendar, r.calendar), [s, a, c, u] = Ln(n, o, 6), l = Y(e), d = Y(r), f = st(d, l);
  let h;
  if (f)
    if (s <= 6)
      h = vr(l, d, s, a, c, u);
    else {
      const m = t(i);
      h = ua(m, e, r, f, s, o), h = ur(h, d, s, a, c, u, m, e, Y, To);
    }
  else
    h = j;
  return x(n ? V(h) : h);
}
function Qi(t, n, e, r, o) {
  const i = yr(e.calendar, r.calendar);
  return aa(n, () => t(i), e, r, ...Ln(n, o, 6, 9, 6));
}
function ts(t, n, e, r, o) {
  const i = yr(e.calendar, r.calendar), s = Ln(n, o, 9, 9, 8), a = t(i), c = ce(a, e), u = ce(a, r);
  return c.isoYear === u.isoYear && c.isoMonth === u.isoMonth && c.isoDay === u.isoDay ? x(j) : aa(n, () => a, ut(c), ut(u), ...s, 8);
}
function aa(t, n, e, r, o, i, s, a, c = 6) {
  const u = Y(e), l = Y(r);
  if (u === void 0 || l === void 0)
    throw new RangeError(sn);
  let d;
  if (st(l, u))
    if (o === 6)
      d = vr(u, l, o, i, s, a);
    else {
      const f = n();
      d = f.N(e, r, o), i === c && s === 1 || (d = ur(d, l, o, i, s, a, f, e, Y, fr));
    }
  else
    d = j;
  return x(t ? V(d) : d);
}
function ns(t, n, e, r) {
  const [o, i, s, a] = Ln(t, r, 5, 5), c = Ht(jo(n, e), ge(i, s), a), u = {
    ...j,
    ...pr(c, o)
  };
  return x(t ? V(u) : u);
}
function gu(t, n, e, r, o, i) {
  const s = st(r.epochNanoseconds, e.epochNanoseconds);
  return s ? o < 6 ? la(e.epochNanoseconds, r.epochNanoseconds, o) : ca(n, t, e, r, s, o, i) : j;
}
function vu(t, n, e, r, o) {
  const i = Y(n), s = Y(e), a = st(s, i);
  return a ? r <= 6 ? la(i, s, r) : ua(t, n, e, a, r, o) : j;
}
function ca(t, n, e, r, o, i, s) {
  const [a, c, u] = ((f, h, m, g) => {
    function p() {
      return z = {
        ...wn(y, O++ * -g),
        ...w
      }, P = we(f, z), st(b, P) === -g;
    }
    const v = ct(h, f), w = dt(mt, v), y = ct(m, f), b = m.epochNanoseconds;
    let O = 0;
    const N = jo(v, y);
    let z, P;
    if (Math.sign(N) === -g && O++, p() && (g === -1 || p()))
      throw new RangeError(qn);
    const _ = yt(wt(P, b));
    return [v, z, _];
  })(n, e, r, o);
  var l, d;
  return {
    ...i === 6 ? (l = a, d = c, {
      ...j,
      days: da(l, d)
    }) : t.N(a, c, i, s),
    ...pr(u)
  };
}
function ua(t, n, e, r, o, i) {
  const [s, a, c] = ((u, l, d) => {
    let f = l, h = jo(u, l);
    return Math.sign(h) === -d && (f = wn(l, -d), h += C * d), [u, f, h];
  })(n, e, r);
  return {
    ...t.N(s, a, o, i),
    ...pr(c)
  };
}
function vr(t, n, e, r, o, i) {
  return {
    ...j,
    ...$n(lr(wt(t, n), r, o, i), e)
  };
}
function la(t, n, e) {
  return {
    ...j,
    ...$n(wt(t, n), e)
  };
}
function da(t, n) {
  return wr(q(t), q(n));
}
function wr(t, n) {
  return Math.trunc((n - t) / Q);
}
function jo(t, n) {
  return Vt(n) - Vt(t);
}
function yr(t, n) {
  if (t !== n)
    throw new RangeError(ka);
  return t;
}
function fa(t) {
  return this.m(t)[0];
}
function ha(t) {
  return this.m(t)[1];
}
function Ao(t) {
  const [n] = this.v(t);
  return wr(this.p(n), q(t)) + 1;
}
function Lo(t) {
  const n = Nd.exec(t);
  if (!n)
    throw new RangeError(bl(t));
  return [parseInt(n[1]), !!n[2]];
}
function ye(t, n) {
  return "M" + lt(t) + (n ? "L" : "");
}
function Ve(t, n, e) {
  return t + (n || e && t >= e ? 1 : 0);
}
function Bo(t, n) {
  return t - (n && t >= n ? 1 : 0);
}
function ma(t, n) {
  return (n + t) * (Math.sign(n) || 1) || 0;
}
function Zr(t) {
  return Ua[ga(t)];
}
function pa(t) {
  return Zl[ga(t)];
}
function ga(t) {
  return gn(t.id || I);
}
function wu(t) {
  function n(o) {
    return ((i, s) => ({
      ...va(i, s),
      o: i.month,
      day: parseInt(i.day)
    }))(co(e, o), r);
  }
  const e = li(t), r = gn(t);
  return {
    id: t,
    h: yu(n),
    l: Eu(n)
  };
}
function yu(t) {
  return it((n) => {
    const e = q(n);
    return t(e);
  }, WeakMap);
}
function Eu(t) {
  const n = t(0).year - Hl;
  return it((e) => {
    let r, o = Zn(e - n), i = 0;
    const s = [], a = [];
    do
      o += 400 * Q;
    while ((r = t(o)).year <= e);
    do
      if (o += (1 - r.day) * Q, r.year === e && (s.push(o), a.push(r.o)), o -= Q, ++i > 100 || o < -864e13)
        throw new RangeError(qn);
    while ((r = t(o)).year >= e);
    return {
      i: s.reverse(),
      u: xa(a.reverse())
    };
  });
}
function va(t, n) {
  let e, r, o = wa(t);
  if (t.era) {
    const i = Ua[n], s = Wa[n] || {};
    i !== void 0 && (e = n === "islamic" ? "ah" : t.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), e === "bc" || e === "b" ? e = "bce" : e === "ad" || e === "a" ? e = "ce" : e === "beforeroc" && (e = "broc"), e = s[e] || e, r = o, o = ma(r, i[e] || 0));
  }
  return {
    era: e,
    eraYear: r,
    year: o
  };
}
function wa(t) {
  return parseInt(t.relatedYear || t.year);
}
function He(t) {
  const { year: n, o: e, day: r } = this.h(t), { u: o } = this.l(n);
  return [n, o[e] + 1, r];
}
function le(t, n = 1, e = 1) {
  return this.l(t).i[n - 1] + (e - 1) * Q;
}
function ya(t, n) {
  const e = xe.call(this, t);
  return [Bo(n, e), e === n];
}
function xe(t) {
  const n = rs(this, t), e = rs(this, t - 1), r = n.length;
  if (r > e.length) {
    const o = pa(this);
    if (o < 0)
      return -o;
    for (let i = 0; i < r; i++)
      if (n[i] !== e[i])
        return i + 1;
  }
}
function _e(t) {
  return wr(le.call(this, t), le.call(this, t + 1));
}
function es(t, n) {
  const { i: e } = this.l(t);
  let r = n + 1, o = e;
  return r > e.length && (r = 1, o = this.l(t + 1).i), wr(e[n - 1], o[r - 1]);
}
function ke(t) {
  return this.l(t).i.length;
}
function Ea(t) {
  const n = this.h(t);
  return [n.era, n.eraYear];
}
function rs(t, n) {
  return Object.keys(t.l(n).u);
}
function Ee(t) {
  return Er(B(t));
}
function Er(t) {
  if ((t = t.toLowerCase()) !== I && t !== Gn) {
    const n = li(t).resolvedOptions().calendar;
    if (gn(t) !== gn(n))
      throw new RangeError(_a(t));
    return n;
  }
  return t;
}
function gn(t) {
  return t === "islamicc" && (t = "islamic"), t.split("-")[0];
}
function ba(t, n) {
  return (e) => e === I ? t : e === Gn || e === Xt ? Object.assign(Object.create(t), {
    id: e
  }) : Object.assign(Object.create(n), Rd(e));
}
function bu(t, n, e, r) {
  const o = en(e, r, xt, [], Aa);
  if (o.timeZone !== void 0) {
    const i = e.F(o), s = be(o), a = t(o.timeZone);
    return {
      epochNanoseconds: Bn(n(a), {
        ...i,
        ...s
      }, o.offset !== void 0 ? En(o.offset) : void 0),
      timeZone: a
    };
  }
  return {
    ...e.F(o),
    ...nt
  };
}
function Mu(t, n, e, r, o, i) {
  const s = en(e, o, xt, Za, Aa), a = t(s.timeZone), [c, u, l] = ir(i), d = e.F(s, cr(c)), f = be(s, c);
  return ft(Bn(n(a), {
    ...d,
    ...f
  }, s.offset !== void 0 ? En(s.offset) : void 0, u, l), a, r);
}
function Su(t, n, e) {
  const r = en(t, n, xt, [], Ft), o = T(e);
  return ht(tt({
    ...t.F(r, cr(o)),
    ...be(r, o)
  }));
}
function Iu(t, n, e, r = []) {
  const o = en(t, n, xt, r);
  return t.F(o, e);
}
function Tu(t, n, e, r) {
  const o = en(t, n, Ho, r);
  return t.K(o, e);
}
function Du(t, n, e, r) {
  const o = en(t, e, xt, Se);
  return n && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = Rt), t._(o, r);
}
function Ou(t, n) {
  return St(be(at(t, Br, [], 1), T(n)));
}
function Nu(t) {
  const n = at(t, Jo);
  return x(yn({
    ...j,
    ...n
  }));
}
function en(t, n, e, r = [], o = []) {
  return at(n, [...t.fields(e), ...o].sort(), r);
}
function at(t, n, e, r = !e) {
  const o = {};
  let i, s = 0;
  for (const a of n) {
    if (a === i)
      throw new RangeError(hl(a));
    if (a === "constructor" || a === "__proto__")
      throw new RangeError(fl(a));
    let c = t[a];
    if (c !== void 0)
      s = 1, os[a] && (c = os[a](c, a)), o[a] = c;
    else if (e) {
      if (e.includes(a))
        throw new TypeError(Uo(a));
      o[a] = $a[a];
    }
    i = a;
  }
  if (r && !s)
    throw new TypeError(Ra(n));
  return o;
}
function be(t, n) {
  return An(di({
    ...$a,
    ...t
  }), n);
}
function Ru(t, n, e, r, o) {
  const { calendar: i, timeZone: s } = e, a = t(i), c = n(s), u = [...a.fields(xt), ...ja].sort(), l = ((v) => {
    const w = ct(v, M), y = ve(w.offsetNanoseconds), b = Dr(v.calendar), [O, N, z] = b.v(w), [P, _] = b.q(O, N), ln = ye(P, _);
    return {
      ...Yd(w),
      year: O,
      monthCode: ln,
      day: z,
      offset: y
    };
  })(e), d = at(r, u), f = a.k(l, d), h = {
    ...l,
    ...d
  }, [m, g, p] = ir(o, 2);
  return ft(Bn(c, {
    ...a.F(f, cr(m)),
    ...An(di(h), m)
  }, En(h.offset), g, p), s, i);
}
function Cu(t, n, e, r) {
  const o = t(n.calendar), i = [...o.fields(xt), ...Ft].sort(), s = {
    ...Sa(a = n),
    hour: a.isoHour,
    minute: a.isoMinute,
    second: a.isoSecond,
    millisecond: a.isoMillisecond,
    microsecond: a.isoMicrosecond,
    nanosecond: a.isoNanosecond
  };
  var a;
  const c = at(e, i), u = T(r), l = o.k(s, c), d = {
    ...s,
    ...c
  };
  return ht(tt({
    ...o.F(l, cr(u)),
    ...An(di(d), u)
  }));
}
function zu(t, n, e, r) {
  const o = t(n.calendar), i = o.fields(xt).sort(), s = Sa(n), a = at(e, i), c = o.k(s, a);
  return o.F(c, r);
}
function _u(t, n, e, r) {
  const o = t(n.calendar), i = o.fields(Ho).sort(), s = ((u) => {
    const l = Dr(u.calendar), [d, f] = l.v(u), [h, m] = l.q(d, f);
    return {
      year: d,
      monthCode: ye(h, m)
    };
  })(n), a = at(e, i), c = o.k(s, a);
  return o.K(c, r);
}
function ku(t, n, e, r) {
  const o = t(n.calendar), i = o.fields(xt).sort(), s = ((u) => {
    const l = Dr(u.calendar), [d, f, h] = l.v(u), [m, g] = l.q(d, f);
    return {
      monthCode: ye(m, g),
      day: h
    };
  })(n), a = at(e, i), c = o.k(s, a);
  return o._(c, r);
}
function Pu(t, n, e) {
  return St(((r, o, i) => be({
    ...dt(Br, r),
    ...at(o, Br)
  }, T(i)))(t, n, e));
}
function Fu(t, n) {
  return x((e = t, r = n, yn({
    ...e,
    ...at(r, Jo)
  })));
  var e, r;
}
function Ma(t, n, e, r, o) {
  n = dt(e = t.fields(e), n), r = at(r, o = t.fields(o), []);
  let i = t.k(n, r);
  return i = at(i, [...e, ...o].sort(), []), t.F(i);
}
function Rr(t, n) {
  const e = Zr(t), r = Wa[t.id || ""] || {};
  let { era: o, eraYear: i, year: s } = n;
  if (o !== void 0 || i !== void 0) {
    if (o === void 0 || i === void 0)
      throw new TypeError(vl);
    if (!e)
      throw new RangeError(gl);
    const a = e[r[o] || o];
    if (a === void 0)
      throw new RangeError(yl(o));
    const c = ma(i, a);
    if (s !== void 0 && s !== c)
      throw new RangeError(wl);
    s = c;
  } else if (s === void 0)
    throw new TypeError(El(e));
  return s;
}
function Pe(t, n, e, r) {
  let { month: o, monthCode: i } = n;
  if (i !== void 0) {
    const s = ((a, c, u, l) => {
      const d = a.L(u), [f, h] = Lo(c);
      let m = Ve(f, h, d);
      if (h) {
        const g = pa(a);
        if (g === void 0)
          throw new RangeError(Kn);
        if (g > 0) {
          if (m > g)
            throw new RangeError(Kn);
          if (d === void 0) {
            if (l === 1)
              throw new RangeError(Kn);
            m--;
          }
        } else {
          if (m !== -g)
            throw new RangeError(Kn);
          if (d === void 0 && l === 1)
            throw new RangeError(Kn);
        }
      }
      return m;
    })(t, i, e, r);
    if (o !== void 0 && o !== s)
      throw new RangeError(Ml);
    o = s, r = 1;
  } else if (o === void 0)
    throw new TypeError(za);
  return Ct("month", o, 1, t.B(e), r);
}
function Cr(t, n, e, r, o) {
  return J(n, "day", 1, t.U(r, e), o);
}
function zr(t, n, e, r) {
  let o = 0;
  const i = [];
  for (const s of e)
    n[s] !== void 0 ? o = 1 : i.push(s);
  if (Object.assign(t, n), o)
    for (const s of r || i)
      delete t[s];
}
function Sa(t) {
  const n = Dr(t.calendar), [e, r, o] = n.v(t), [i, s] = n.q(e, r);
  return {
    year: e,
    monthCode: ye(i, s),
    day: o
  };
}
function xu(t) {
  return _t(bt(oo(no(t))));
}
function Yu(t, n, e, r, o = I) {
  return ft(bt(oo(no(e))), n(r), t(o));
}
function Zu(t, n, e, r, o = 0, i = 0, s = 0, a = 0, c = 0, u = 0, l = I) {
  return ht(tt(or(zt(W, Yn(Ir, [n, e, r, o, i, s, a, c, u])))), t(l));
}
function ju(t, n, e, r, o = I) {
  return kt(ut(vn(zt(W, {
    isoYear: n,
    isoMonth: e,
    isoDay: r
  }))), t(o));
}
function Au(t, n, e, r = I, o = 1) {
  const i = W(n), s = W(e), a = t(r);
  return ae(so(vn({
    isoYear: i,
    isoMonth: s,
    isoDay: W(o)
  })), a);
}
function Lu(t, n, e, r = I, o = Rt) {
  const i = W(n), s = W(e), a = t(r);
  return We(ut(vn({
    isoYear: W(o),
    isoMonth: i,
    isoDay: s
  })), a);
}
function Bu(t = 0, n = 0, e = 0, r = 0, o = 0, i = 0) {
  return St(An(zt(W, Yn(mt, [t, n, e, r, o, i])), 1));
}
function $u(t = 0, n = 0, e = 0, r = 0, o = 0, i = 0, s = 0, a = 0, c = 0, u = 0) {
  return x(yn(zt(eo, Yn(D, [t, n, e, r, o, i, s, a, c, u]))));
}
function Uu(t, n, e = I) {
  return ft(t.epochNanoseconds, n, e);
}
function Wu(t) {
  return _t(t.epochNanoseconds);
}
function Ia(t, n) {
  return ht(ct(n, t));
}
function Ta(t, n) {
  return kt(ct(n, t));
}
function Da(t, n) {
  return St(ct(n, t));
}
function qu(t, n, e, r) {
  const o = ((i, s, a, c) => {
    const u = ((l) => tc(Mt(l)))(c);
    return we(i(s), a, u);
  })(t, e, n, r);
  return ft(bt(o), e, n.calendar);
}
function Gu(t, n, e, r, o) {
  const i = t(o.timeZone), s = o.plainTime, a = s !== void 0 ? n(s) : void 0, c = e(i);
  let u;
  return u = a ? we(c, {
    ...r,
    ...a
  }) : Jt(c, {
    ...r,
    ...nt
  }), ft(u, i, r.calendar);
}
function Vu(t, n = nt) {
  return ht(tt({
    ...t,
    ...n
  }));
}
function Hu(t, n, e) {
  return ((r, o) => {
    const i = en(r, o, La);
    return r.K(i, void 0);
  })(t(n.calendar), e);
}
function Ju(t, n, e) {
  return ((r, o) => {
    const i = en(r, o, Ba);
    return r._(i);
  })(t(n.calendar), e);
}
function Xu(t, n, e, r) {
  return ((o, i, s) => Ma(o, i, La, pe(s), Se))(t(n.calendar), e, r);
}
function Ku(t, n, e, r) {
  return ((o, i, s) => Ma(o, i, Ba, pe(s), qo))(t(n.calendar), e, r);
}
function Qu(t) {
  return _t(bt($e(eo(t), Pt)));
}
function tl(t) {
  return _t(bt(oo(no(t))));
}
function bn(t, n, e) {
  const r = new Set(e);
  return (o, i) => {
    const s = e && Oi(o, e);
    if (!Oi(o = ((a, c) => {
      const u = {};
      for (const l in c)
        a.has(l) || (u[l] = c[l]);
      return u;
    })(r, o), t)) {
      if (i && s)
        throw new TypeError("Invalid formatting options");
      o = {
        ...n,
        ...o
      };
    }
    return e && (o.timeZone = Mn, ["full", "long"].includes(o.J) && (o.J = "medium")), o;
  };
}
function rn(t, n = Oa, e = 0) {
  const [r, , , o] = t;
  return (i, s = ef, ...a) => {
    const c = n(o && o(...a), i, s, r, e), u = c.resolvedOptions();
    return [c, ...nl(t, u, a)];
  };
}
function Oa(t, n, e, r, o) {
  if (e = r(e, o), t) {
    if (e.timeZone !== void 0)
      throw new TypeError(Pl);
    e.timeZone = t;
  }
  return new Wt(n, e);
}
function nl(t, n, e) {
  const [, r, o] = t;
  return e.map((i) => (i.calendar && ((s, a, c) => {
    if ((c || s !== I) && s !== a)
      throw new RangeError(ka);
  })(i.calendar, n.calendar, o), r(i, n)));
}
function el(t, n, e) {
  const r = n.timeZone, o = t(r), i = {
    ...ct(n, o),
    ...e || nt
  };
  let s;
  return s = e ? Bn(o, i, i.offsetNanoseconds, 2) : Jt(o, i), ft(s, r, n.calendar);
}
function rl(t, n = nt) {
  return ht(tt({
    ...t,
    ...n
  }));
}
function $o(t, n) {
  return {
    ...t,
    calendar: n
  };
}
function ol(t, n) {
  return {
    ...t,
    timeZone: n
  };
}
function _r(t) {
  const n = jr();
  return jn(n, t.R(n));
}
function jr() {
  return $e(Date.now(), Pt);
}
function Xn() {
  return is || (is = new Wt().resolvedOptions().timeZone);
}
const il = (t, n) => `Non-integer ${t}: ${n}`, sl = (t, n) => `Non-positive ${t}: ${n}`, al = (t, n) => `Non-finite ${t}: ${n}`, cl = (t) => `Cannot convert bigint to ${t}`, ul = (t) => `Invalid bigint: ${t}`, ll = "Cannot convert Symbol to string", dl = "Invalid object", Na = (t, n, e, r, o) => o ? Na(t, o[n], o[e], o[r]) : on(t, n) + `; must be between ${e}-${r}`, on = (t, n) => `Invalid ${t}: ${n}`, Uo = (t) => `Missing ${t}`, fl = (t) => `Invalid field ${t}`, hl = (t) => `Duplicate field ${t}`, Ra = (t) => "No valid fields: " + t.join(), ml = "Invalid bag", Ca = (t, n, e) => on(t, n) + "; must be " + Object.keys(e).join(), pl = "Cannot use valueOf", Ar = "Invalid calling context", gl = "Forbidden era/eraYear", vl = "Mismatching era/eraYear", wl = "Mismatching year/eraYear", yl = (t) => `Invalid era: ${t}`, El = (t) => "Missing year" + (t ? "/era/eraYear" : ""), bl = (t) => `Invalid monthCode: ${t}`, Ml = "Mismatching month/monthCode", za = "Missing month/monthCode", Kn = "Invalid leap month", qn = "Invalid protocol results", _a = (t) => on("Calendar", t), ka = "Mismatching Calendars", Pa = (t) => on("TimeZone", t), Fa = "Mismatching TimeZones", Sl = "Forbidden ICU TimeZone", Il = "Out-of-bounds offset", Tl = "Out-of-bounds TimeZone gap", Dl = "Invalid TimeZone offset", Ol = "Ambiguous offset", sn = "Out-of-bounds date", Nl = "Out-of-bounds duration", Rl = "Cannot mix duration signs", br = "Missing relativeTo", Cl = "Cannot use large units", zl = "Required smallestUnit or largestUnit", _l = "smallestUnit > largestUnit", X = (t) => `Cannot parse: ${t}`, Nt = (t) => `Invalid substring: ${t}`, kl = (t) => `Cannot format ${t}`, kr = "Mismatching types for formatting", Pl = "Cannot specify TimeZone", xa = /* @__PURE__ */ S(Qe, (t, n) => n), Fn = /* @__PURE__ */ S(Qe, (t, n, e) => e), lt = /* @__PURE__ */ S(Be, 2), Lr = {
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
}, Wo = /* @__PURE__ */ Object.keys(Lr), Q = 864e5, Ya = 1e3, Me = 1e3, Pt = 1e6, vt = 1e9, Mr = 6e10, Sr = 36e11, C = 864e11, Et = [1, Me, Pt, vt, Mr, Sr, C], Ft = /* @__PURE__ */ Wo.slice(0, 6), Br = /* @__PURE__ */ me(Ft), Fl = ["offset"], Za = ["timeZone"], ja = /* @__PURE__ */ Ft.concat(Fl), Aa = /* @__PURE__ */ ja.concat(Za), $r = ["era", "eraYear"], xl = /* @__PURE__ */ $r.concat(["year"]), qo = ["year"], Go = ["monthCode"], Vo = /* @__PURE__ */ ["month"].concat(Go), Se = ["day"], Ho = /* @__PURE__ */ Vo.concat(qo), La = /* @__PURE__ */ Go.concat(qo), xt = /* @__PURE__ */ Se.concat(Ho), Yl = /* @__PURE__ */ Se.concat(Vo), Ba = /* @__PURE__ */ Se.concat(Go), $a = /* @__PURE__ */ Fn(Ft, 0), I = "iso8601", Gn = "gregory", Xt = "japanese", Ua = {
  [Gn]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [Xt]: {
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
}, Wa = {
  [Gn]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [Xt]: {
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
}, Zl = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, B = /* @__PURE__ */ S(Qr, "string"), jl = /* @__PURE__ */ S(Qr, "boolean"), Al = /* @__PURE__ */ S(Qr, "number"), D = /* @__PURE__ */ Wo.map((t) => t + "s"), Jo = /* @__PURE__ */ me(D), Ll = /* @__PURE__ */ D.slice(0, 6), qa = /* @__PURE__ */ D.slice(6), Bl = /* @__PURE__ */ qa.slice(1), $l = /* @__PURE__ */ xa(D), j = /* @__PURE__ */ Fn(D, 0), Xo = /* @__PURE__ */ Fn(Ll, 0), Ko = /* @__PURE__ */ S(vs, D), mt = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], Qo = ["isoDay", "isoMonth", "isoYear"], Ir = /* @__PURE__ */ mt.concat(Qo), ti = /* @__PURE__ */ me(Qo), Ga = /* @__PURE__ */ me(mt), Ul = /* @__PURE__ */ me(Ir), nt = /* @__PURE__ */ Fn(Ga, 0), Wl = /* @__PURE__ */ S(vs, Ir), Va = 1e8, ql = Va * Q, Gl = [Va, 0], Vl = [-1e8, 0], de = 275760, fe = -271821, Wt = Intl.DateTimeFormat, Ha = "en-GB", Hl = 1970, Rt = 1972, Zt = 12, Jl = /* @__PURE__ */ Zn(1868, 9, 8), Xl = /* @__PURE__ */ it(zc, WeakMap), Je = "smallestUnit", Ur = "unit", ee = "roundingIncrement", Pr = "fractionalSecondDigits", Ja = "relativeTo", Fr = "direction", Xa = {
  constrain: 0,
  reject: 1
}, Kl = /* @__PURE__ */ Object.keys(Xa), Ql = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, td = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, nd = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, ed = {
  auto: 0,
  never: 1,
  critical: 2
}, rd = {
  auto: 0,
  never: 1
}, od = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, id = {
  previous: -1,
  next: 1
}, Ie = /* @__PURE__ */ S(go, Je), Ka = /* @__PURE__ */ S(go, "largestUnit"), sd = /* @__PURE__ */ S(go, Ur), Qa = /* @__PURE__ */ S(Qt, "overflow", Xa), tc = /* @__PURE__ */ S(Qt, "disambiguation", Ql), ad = /* @__PURE__ */ S(Qt, "offset", td), ni = /* @__PURE__ */ S(Qt, "calendarName", nd), cd = /* @__PURE__ */ S(Qt, "timeZoneName", ed), ud = /* @__PURE__ */ S(Qt, "offset", rd), Te = /* @__PURE__ */ S(Qt, "roundingMode", od), ei = "PlainYearMonth", ri = "PlainMonthDay", De = "PlainDate", Vn = "PlainDateTime", oi = "PlainTime", an = "ZonedDateTime", ii = "Instant", si = "Duration", ld = [Math.floor, (t) => ze(t) ? Math.floor(t) : Math.round(t), Math.ceil, (t) => ze(t) ? Math.ceil(t) : Math.round(t), Math.trunc, (t) => ze(t) ? Math.trunc(t) || 0 : Math.round(t), (t) => t < 0 ? Math.floor(t) : Math.ceil(t), (t) => Math.sign(t) * Math.round(Math.abs(t)) || 0, (t) => ze(t) ? (t = Math.trunc(t) || 0) + t % 2 : Math.round(t)], Mn = "UTC", Ye = 5184e3, dd = /* @__PURE__ */ Ue(1847), fd = /* @__PURE__ */ Ue(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), hd = /0+$/, ct = /* @__PURE__ */ it(qc, WeakMap), md = 2 ** 32 - 1, M = /* @__PURE__ */ it((t) => {
  const n = Yo(t);
  return typeof n == "object" ? new gd(n) : new pd(n || 0);
});
class pd {
  constructor(n) {
    this.$ = n;
  }
  R() {
    return this.$;
  }
  I(n) {
    return ((e) => {
      const r = Y({
        ...e,
        ...nt
      });
      if (!r || Math.abs(r[0]) > 1e8)
        throw new RangeError(sn);
    })(n), [ao(n, this.$)];
  }
  O() {
  }
}
class gd {
  constructor(n) {
    this.nn = ((e) => {
      function r(u) {
        const l = se(u, a, c), [d, f] = Vi(l), h = i(d), m = i(f);
        return h === m ? h : o(s(d, f), h, m, u);
      }
      function o(u, l, d, f) {
        let h, m;
        for (; (f === void 0 || (h = f < u[0] ? l : f >= u[1] ? d : void 0) === void 0) && (m = u[1] - u[0]); ) {
          const g = u[0] + Math.floor(m / 2);
          e(g) === d ? u[1] = g : u[0] = g + 1;
        }
        return h;
      }
      const i = it(e), s = it(Jc);
      let a = dd, c = fd;
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
          const d = se(u, a, c);
          let [f, h] = Vi(d);
          const m = Ye * l, g = l < 0 ? () => h > a || (a = d, 0) : () => f < c || (c = d, 0);
          for (; g(); ) {
            const p = i(f), v = i(h);
            if (p !== v) {
              const w = s(f, h);
              o(w, p, v);
              const y = w[0];
              if ((Ut(y, u) || 1) === l)
                return y;
            }
            f += m, h += m;
          }
        }
      };
    })(/* @__PURE__ */ ((e) => (r) => {
      const o = co(e, r * Ya);
      return Ue(wa(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - r;
    })(n));
  }
  R(n) {
    return this.nn.rn(((e) => Ci(e)[0])(n)) * vt;
  }
  I(n) {
    const [e, r] = [Ue((o = n).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * Pt + o.isoMicrosecond * Me + o.isoNanosecond];
    var o;
    return this.nn.tn(e).map((i) => bt(mn($e(i, vt), r)));
  }
  O(n, e) {
    const [r, o] = Ci(n), i = this.nn.O(r + (e > 0 || o ? 1 : 0), e);
    if (i !== void 0)
      return $e(i, vt);
  }
}
const ai = "([+-])", Ze = "(?:[.,](\\d{1,9}))?", nc = `(?:(?:${ai}(\\d{6}))|(\\d{4}))-?(\\d{2})`, ci = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Ze + ")?)?", ui = ai + ci, vd = nc + "-?(\\d{2})(?:[T ]" + ci + "(Z|" + ui + ")?)?", ec = "\\[(!?)([^\\]]*)\\]", Tr = `((?:${ec}){0,9})`, wd = /* @__PURE__ */ Un(nc + Tr), yd = /* @__PURE__ */ Un("(?:--)?(\\d{2})-?(\\d{2})" + Tr), Ed = /* @__PURE__ */ Un(vd + Tr), bd = /* @__PURE__ */ Un("T?" + ci + "(?:" + ui + ")?" + Tr), Md = /* @__PURE__ */ Un(ui), Sd = /* @__PURE__ */ new RegExp(ec, "g"), Id = /* @__PURE__ */ Un(`${ai}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Ze}H)?(?:(\\d+)${Ze}M)?(?:(\\d+)${Ze}S)?)?`), Td = /* @__PURE__ */ it((t) => new Wt(Ha, {
  timeZone: t,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
})), Dd = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Od = /[^\w\/:+-]+/, Nd = /^M(\d{2})(L?)$/, Rd = /* @__PURE__ */ it(wu), li = /* @__PURE__ */ it((t) => new Wt(Ha, {
  calendar: t,
  timeZone: Mn,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
})), rc = {
  P(t, n, e) {
    const r = T(e);
    let o, { years: i, months: s, weeks: a, days: c } = n;
    if (c += Z(n, 5)[0], i || s)
      o = ((u, l, d, f, h) => {
        let [m, g, p] = u.v(l);
        if (d) {
          const [v, w] = u.q(m, g);
          m += d, g = Ve(v, w, u.L(m)), g = Ct("month", g, 1, u.B(m), h);
        }
        return f && ([m, g] = u.un(m, g, f)), p = Ct("day", p, 1, u.U(m, g), h), u.p(m, g, p);
      })(this, t, i, s, r);
    else {
      if (!a && !c)
        return t;
      o = q(t);
    }
    if (o === void 0)
      throw new RangeError(sn);
    return o += (7 * a + c) * Q, ut(rr(o));
  },
  N(t, n, e) {
    if (e <= 7) {
      let c = 0, u = da({
        ...t,
        ...nt
      }, {
        ...n,
        ...nt
      });
      return e === 7 && ([c, u] = Gt(u, 7)), {
        ...j,
        weeks: c,
        days: u
      };
    }
    const r = this.v(t), o = this.v(n);
    let [i, s, a] = ((c, u, l, d, f, h, m) => {
      let g = f - u, p = h - l, v = m - d;
      if (g || p) {
        const w = Math.sign(g || p);
        let y = c.U(f, h), b = 0;
        if (Math.sign(v) === -w) {
          const O = y;
          [f, h] = c.un(f, h, -w), g = f - u, p = h - l, y = c.U(f, h), b = w < 0 ? -O : y;
        }
        if (v = m - Math.min(d, y) + b, g) {
          const [O, N] = c.q(u, l), [z, P] = c.q(f, h);
          if (p = z - O || Number(P) - Number(N), Math.sign(p) === -w) {
            const _ = w < 0 && -c.B(f);
            g = (f -= w) - u, p = h - Ve(O, N, c.L(f)) + (_ || c.B(f));
          }
        }
      }
      return [g, p, v];
    })(this, ...r, ...o);
    return e === 8 && (s += this.cn(i, r[0]), i = 0), {
      ...j,
      years: i,
      months: s,
      days: a
    };
  },
  F(t, n) {
    const e = T(n), r = Rr(this, t), o = Pe(this, t, r, e), i = Cr(this, t, o, r, e);
    return kt(ut(this.V(r, o, i)), this.id || I);
  },
  K(t, n) {
    const e = T(n), r = Rr(this, t), o = Pe(this, t, r, e);
    return ae(so(this.V(r, o, 1)), this.id || I);
  },
  _(t, n) {
    const e = T(n);
    let r, o, i, s = t.eraYear !== void 0 || t.year !== void 0 ? Rr(this, t) : void 0;
    const a = !this.id;
    if (s === void 0 && a && (s = Rt), s !== void 0) {
      const d = Pe(this, t, s, e);
      r = Cr(this, t, d, s, e);
      const f = this.L(s);
      o = Bo(d, f), i = d === f;
    } else {
      if (t.monthCode === void 0)
        throw new TypeError(za);
      if ([o, i] = Lo(t.monthCode), this.id && this.id !== Gn && this.id !== Xt)
        if (this.id && gn(this.id) === "coptic" && e === 0) {
          const d = i || o !== 13 ? 30 : 6;
          r = t.day, r = se(r, 1, d);
        } else if (this.id && gn(this.id) === "chinese" && e === 0) {
          const d = !i || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
          r = t.day, r = se(r, 1, d);
        } else
          r = t.day;
      else
        r = Cr(this, t, Pe(this, t, Rt, e), Rt, e);
    }
    const c = this.G(o, i, r);
    if (!c)
      throw new RangeError("Cannot guess year");
    const [u, l] = c;
    return We(ut(this.V(u, l, r)), this.id || I);
  },
  fields(t) {
    return Zr(this) && t.includes("year") ? [...t, ...$r] : t;
  },
  k(t, n) {
    const e = Object.assign(/* @__PURE__ */ Object.create(null), t);
    return zr(e, n, Vo), Zr(this) && (zr(e, n, xl), this.id === Xt && zr(e, n, Yl, $r)), e;
  },
  inLeapYear(t) {
    const [n] = this.v(t);
    return this.sn(n);
  },
  monthsInYear(t) {
    const [n] = this.v(t);
    return this.B(n);
  },
  daysInMonth(t) {
    const [n, e] = this.v(t);
    return this.U(n, e);
  },
  daysInYear(t) {
    const [n] = this.v(t);
    return this.fn(n);
  },
  dayOfYear: Ao,
  era(t) {
    return this.hn(t)[0];
  },
  eraYear(t) {
    return this.hn(t)[1];
  },
  monthCode(t) {
    const [n, e] = this.v(t), [r, o] = this.q(n, e);
    return ye(r, o);
  },
  dayOfWeek: Cs,
  daysInWeek() {
    return 7;
  }
}, Cd = {
  v: uo,
  hn: zs,
  q: Ds
}, zd = {
  dayOfYear: Ao,
  v: uo,
  p: Zn
}, _d = /* @__PURE__ */ Object.assign({}, zd, {
  weekOfYear: fa,
  yearOfWeek: ha,
  m(t) {
    function n(h) {
      return (7 - h < r ? 7 : 0) - h;
    }
    function e(h) {
      const m = Rs(f + h), g = h || 1, p = n(ne(c + m * g, 7));
      return l = (m + (p - u) * g) / 7;
    }
    const r = this.id ? 1 : 4, o = Cs(t), i = this.dayOfYear(t), s = ne(o - 1, 7), a = i - 1, c = ne(s - a, 7), u = n(c);
    let l, d = Math.floor((a - u) / 7) + 1, f = t.isoYear;
    return d ? d > e(0) && (d = 1, f++) : (d = e(-1), f--), [d, f, l];
  }
}), kd = /* @__PURE__ */ Object.assign({}, rc, _d, {
  v: uo,
  hn: zs,
  q: Ds,
  G(t, n) {
    if (!n)
      return [Rt, t];
  },
  sn: lo,
  L() {
  },
  B: Os,
  cn: (t) => t * Zt,
  U: Ns,
  fn: Rs,
  V: (t, n, e) => ({
    isoYear: t,
    isoMonth: n,
    isoDay: e
  }),
  p: Zn,
  un: (t, n, e) => (t += tr(e, Zt), (n += Xr(e, Zt)) < 1 ? (t--, n += Zt) : n > Zt && (t++, n -= Zt), [t, n]),
  year(t) {
    return t.isoYear;
  },
  month(t) {
    return t.isoMonth;
  },
  day: (t) => t.isoDay
}), Pd = {
  v: He,
  hn: Ea,
  q: ya
}, Fd = {
  dayOfYear: Ao,
  v: He,
  p: le,
  weekOfYear: fa,
  yearOfWeek: ha,
  m() {
    return [];
  }
}, xd = /* @__PURE__ */ Object.assign({}, rc, Fd, {
  v: He,
  hn: Ea,
  q: ya,
  G(t, n, e) {
    const r = this.id && gn(this.id) === "chinese" ? ((u, l, d) => {
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
    })(t, n, e) : Rt;
    let [o, i, s] = He.call(this, {
      isoYear: r,
      isoMonth: Zt,
      isoDay: 31
    });
    const a = xe.call(this, o), c = i === a;
    (Ut(t, Bo(i, a)) || Ut(Number(n), Number(c)) || Ut(e, s)) === 1 && o--;
    for (let u = 0; u < 100; u++) {
      const l = o - u, d = xe.call(this, l), f = Ve(t, n, d);
      if (n === (f === d) && e <= es.call(this, l, f))
        return [l, f];
    }
  },
  sn(t) {
    const n = _e.call(this, t);
    return n > _e.call(this, t - 1) && n > _e.call(this, t + 1);
  },
  L: xe,
  B: ke,
  cn(t, n) {
    const e = n + t, r = Math.sign(t), o = r < 0 ? -1 : 0;
    let i = 0;
    for (let s = n; s !== e; s += r)
      i += ke.call(this, s + o);
    return i;
  },
  U: es,
  fn: _e,
  V(t, n, e) {
    return rr(le.call(this, t, n, e));
  },
  p: le,
  un(t, n, e) {
    if (e) {
      if (n += e, !Number.isSafeInteger(n))
        throw new RangeError(sn);
      if (e < 0)
        for (; n < 1; )
          n += ke.call(this, --t);
      else {
        let r;
        for (; n > (r = ke.call(this, t)); )
          n -= r, t++;
      }
    }
    return [t, n];
  },
  year(t) {
    return this.h(t).year;
  },
  month(t) {
    const { year: n, o: e } = this.h(t), { u: r } = this.l(n);
    return r[e] + 1;
  },
  day(t) {
    return this.h(t).day;
  }
}), Dr = /* @__PURE__ */ ba(Cd, Pd), E = /* @__PURE__ */ ba(kd, xd), os = {
  era: Fe,
  eraYear: W,
  year: W,
  month: Ri,
  monthCode(t) {
    const n = Fe(t);
    return Lo(n), n;
  },
  day: Ri,
  .../* @__PURE__ */ Fn(Ft, W),
  .../* @__PURE__ */ Fn(D, eo),
  offset(t) {
    const n = Fe(t);
    return En(n), n;
  }
}, di = /* @__PURE__ */ S(ps, Ft, mt), Yd = /* @__PURE__ */ S(ps, mt, Ft), qt = "numeric", Oe = ["timeZoneName"], oc = {
  month: qt,
  day: qt
}, fi = {
  year: qt,
  month: qt
}, hi = /* @__PURE__ */ Object.assign({}, fi, {
  day: qt
}), mi = {
  hour: qt,
  minute: qt,
  second: qt
}, pi = /* @__PURE__ */ Object.assign({}, hi, mi), Zd = /* @__PURE__ */ Object.assign({}, pi, {
  timeZoneName: "short"
}), jd = /* @__PURE__ */ Object.keys(fi), Ad = /* @__PURE__ */ Object.keys(oc), Ld = /* @__PURE__ */ Object.keys(hi), Bd = /* @__PURE__ */ Object.keys(mi), gi = ["dateStyle"], $d = /* @__PURE__ */ jd.concat(gi), Ud = /* @__PURE__ */ Ad.concat(gi), vi = /* @__PURE__ */ Ld.concat(gi, ["weekday"]), Ne = /* @__PURE__ */ Bd.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), wi = /* @__PURE__ */ vi.concat(Ne), Wd = /* @__PURE__ */ Oe.concat(Ne), qd = /* @__PURE__ */ Oe.concat(vi), Gd = /* @__PURE__ */ Oe.concat(["day", "weekday"], Ne), Vd = /* @__PURE__ */ Oe.concat(["year", "weekday"], Ne), Hd = /* @__PURE__ */ bn(wi, pi), Jd = /* @__PURE__ */ bn(wi, Zd), Xd = /* @__PURE__ */ bn(wi, pi, Oe), Kd = /* @__PURE__ */ bn(vi, hi, Wd), Qd = /* @__PURE__ */ bn(Ne, mi, qd), tf = /* @__PURE__ */ bn($d, fi, Gd), nf = /* @__PURE__ */ bn(Ud, oc, Vd), ef = {}, ic = new Wt(void 0, {
  calendar: I
}).resolvedOptions().calendar === I, sc = [Hd, vo], rf = [Jd, vo, 0, (t, n) => {
  const e = t.timeZone;
  if (n && n.timeZone !== e)
    throw new RangeError(Fa);
  return e;
}], ac = [Xd, q], cc = [Kd, q], uc = [Qd, (t) => Vt(t) / Pt], lc = [tf, q, ic], dc = [nf, q, ic];
let is;
function cn(t, n, e, r, o) {
  function i(...c) {
    if (!(this instanceof i))
      throw new TypeError(Ar);
    cs(this, n(...c));
  }
  function s(c, u) {
    return Object.defineProperties(function(...l) {
      return c.call(this, a(this), ...l);
    }, ie(u));
  }
  function a(c) {
    const u = H(c);
    if (!u || u.branding !== t)
      throw new TypeError(Ar);
    return u;
  }
  return Object.defineProperties(i.prototype, {
    ...Nc(zt(s, e)),
    ..._n(zt(s, r)),
    ...Jr("Temporal." + t)
  }), Object.defineProperties(i, {
    ..._n(o),
    ...ie(t)
  }), [i, (c) => {
    const u = Object.create(i.prototype);
    return cs(u, c), u;
  }, a];
}
function Hn(t) {
  if (H(t) || t.calendar !== void 0 || t.timeZone !== void 0)
    throw new TypeError(ml);
  return t;
}
function Re(t) {
  return fc(t) || I;
}
function fc(t) {
  const { calendar: n } = t;
  if (n !== void 0)
    return Or(n);
}
function Or(t) {
  if (G(t)) {
    const { calendar: n } = H(t) || {};
    if (!n)
      throw new TypeError(_a(t));
    return n;
  }
  return ((n) => Er(iu(B(n))))(t);
}
function yi(t) {
  const n = {};
  for (const e in t)
    n[e] = (r) => {
      const { calendar: o } = r;
      return E(o)[e](r);
    };
  return n;
}
function un() {
  throw new TypeError(pl);
}
function rt(t) {
  if (G(t)) {
    const { timeZone: n } = H(t) || {};
    if (!n)
      throw new TypeError(Pa(t));
    return n;
  }
  return ((n) => xo(su(B(n))))(t);
}
function F(t) {
  if (G(t)) {
    const n = H(t);
    return n && n.branding === si ? n : Nu(t);
  }
  return ou(t);
}
function Qn(t) {
  if (t !== void 0) {
    if (G(t)) {
      const n = H(t) || {};
      switch (n.branding) {
        case an:
        case De:
          return n;
        case Vn:
          return kt(n);
      }
      const e = Re(t);
      return {
        ...bu(rt, M, E(e), t),
        calendar: e
      };
    }
    return Kc(t);
  }
}
function jt(t, n) {
  if (G(t)) {
    const r = H(t) || {};
    switch (r.branding) {
      case oi:
        return T(n), r;
      case Vn:
        return T(n), St(r);
      case an:
        return T(n), Da(M, r);
    }
    return Ou(t, n);
  }
  const e = ru(t);
  return T(n), e;
}
function Ei(t) {
  return t === void 0 ? void 0 : jt(t);
}
function Sn(t, n) {
  if (G(t)) {
    const r = H(t) || {};
    switch (r.branding) {
      case Vn:
        return T(n), r;
      case De:
        return T(n), ht({
          ...r,
          ...nt
        });
      case an:
        return T(n), Ia(M, r);
    }
    return Su(E(Re(t)), t, n);
  }
  const e = tu(t);
  return T(n), e;
}
function ss(t, n) {
  if (G(t)) {
    const r = H(t);
    if (r && r.branding === ri)
      return T(n), r;
    const o = fc(t);
    return Du(E(o || I), !o, t, n);
  }
  const e = eu(E, t);
  return T(n), e;
}
function In(t, n) {
  if (G(t)) {
    const r = H(t);
    return r && r.branding === ei ? (T(n), r) : Tu(E(Re(t)), t, n);
  }
  const e = nu(E, t);
  return T(n), e;
}
function Tn(t, n) {
  if (G(t)) {
    const r = H(t) || {};
    switch (r.branding) {
      case De:
        return T(n), r;
      case Vn:
        return T(n), kt(r);
      case an:
        return T(n), Ta(M, r);
    }
    return Iu(E(Re(t)), t, n);
  }
  const e = Ro(t);
  return T(n), e;
}
function Dn(t, n) {
  if (G(t)) {
    const e = H(t);
    if (e && e.branding === an)
      return ir(n), e;
    const r = Re(t);
    return Mu(rt, M, E(r), r, t, n);
  }
  return Qc(t, n);
}
function as(t) {
  return zt((n) => (e) => n(Wr(e)), t);
}
function Wr(t) {
  return ct(t, M);
}
function On(t) {
  if (G(t)) {
    const n = H(t);
    if (n)
      switch (n.branding) {
        case ii:
          return n;
        case an:
          return _t(n.epochNanoseconds);
      }
  }
  return Xc(t);
}
function of() {
  function t(i, s) {
    return new n(i, s);
  }
  function n(i, s = /* @__PURE__ */ Object.create(null)) {
    Ke.set(this, ((a, c) => {
      const u = new Wt(a, c), l = u.resolvedOptions(), d = l.locale, f = dt(Object.keys(c), l), h = it(cf), m = (g, ...p) => {
        if (g) {
          if (p.length !== 2)
            throw new TypeError(kr);
          for (const b of p)
            if (b === void 0)
              throw new TypeError(kr);
        }
        g || p[0] !== void 0 || (p = []);
        const v = p.map((b) => H(b) || Number(b));
        let w, y = 0;
        for (const b of v) {
          const O = typeof b == "object" ? b.branding : void 0;
          if (y++ && O !== w)
            throw new TypeError(kr);
          w = O;
        }
        return w ? h(w)(d, f, ...v) : [u, ...v];
      };
      return m.X = u, m;
    })(i, s));
  }
  const e = Wt.prototype, r = Object.getOwnPropertyDescriptors(e), o = Object.getOwnPropertyDescriptors(Wt);
  for (const i in r) {
    const s = r[i], a = i.startsWith("format") && sf(i);
    typeof s.value == "function" ? s.value = i === "constructor" ? t : a || af(i) : a && (s.get = function() {
      if (!Ke.has(this))
        throw new TypeError(Ar);
      return (...c) => a.apply(this, c);
    }, Object.defineProperties(s.get, ie(`get ${i}`)));
  }
  return o.prototype.value = n.prototype = Object.create({}, r), Object.defineProperties(t, o), t;
}
function sf(t) {
  return Object.defineProperties(function(...n) {
    const e = Ke.get(this), [r, ...o] = e(t.includes("Range"), ...n);
    return r[t](...o);
  }, ie(t));
}
function af(t) {
  return Object.defineProperties(function(...n) {
    return Ke.get(this).X[t](...n);
  }, ie(t));
}
function cf(t) {
  const n = mf[t];
  if (!n)
    throw new TypeError(kl(t));
  return rn(n, it(Oa), 1);
}
const Xe = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ Xe.get.bind(Xe), cs = /* @__PURE__ */ Xe.set.bind(Xe), hc = {
  era: Rc,
  eraYear: ys,
  year: Kr,
  month: Dt,
  daysInMonth: Dt,
  daysInYear: Dt,
  inLeapYear: jl,
  monthsInYear: Dt
}, bi = {
  monthCode: B
}, mc = {
  day: Dt
}, uf = {
  dayOfWeek: Dt,
  dayOfYear: Dt,
  weekOfYear: Cc,
  yearOfWeek: ys,
  daysInWeek: Dt
}, Mi = /* @__PURE__ */ yi(/* @__PURE__ */ Object.assign({}, hc, bi, mc, uf)), lf = /* @__PURE__ */ yi({
  ...hc,
  ...bi
}), df = /* @__PURE__ */ yi({
  ...bi,
  ...mc
}), Ce = {
  calendarId: (t) => t.calendar
}, ff = /* @__PURE__ */ Qe((t) => (n) => n[t], D.concat("sign")), Si = /* @__PURE__ */ Qe((t, n) => (e) => e[mt[n]], Ft), pc = {
  epochMilliseconds: vo,
  epochNanoseconds: kc
}, [hf, k, gh] = cn(si, $u, {
  ...ff,
  blank: Hc
}, {
  with: (t, n) => k(Fu(t, n)),
  negated: (t) => k(No(t)),
  abs: (t) => k(Vc(t)),
  add: (t, n, e) => k(Gi(Qn, E, M, 0, t, F(n), e)),
  subtract: (t, n, e) => k(Gi(Qn, E, M, 1, t, F(n), e)),
  round: (t, n) => k(Gc(Qn, E, M, t, n)),
  total: (t, n) => Pc(Qn, E, M, t, n),
  toLocaleString(t, n, e) {
    return Intl.DurationFormat ? new Intl.DurationFormat(n, e).format(this) : Nr(t);
  },
  toString: Nr,
  toJSON: (t) => Nr(t),
  valueOf: un
}, {
  from: (t) => k(F(t)),
  compare: (t, n, e) => cu(Qn, E, M, F(t), F(n), e)
}), mf = {
  Instant: sc,
  PlainDateTime: ac,
  PlainDate: cc,
  PlainTime: uc,
  PlainYearMonth: lc,
  PlainMonthDay: dc
}, pf = /* @__PURE__ */ rn(sc), gf = /* @__PURE__ */ rn(rf), vf = /* @__PURE__ */ rn(ac), wf = /* @__PURE__ */ rn(cc), yf = /* @__PURE__ */ rn(uc), Ef = /* @__PURE__ */ rn(lc), bf = /* @__PURE__ */ rn(dc), [Mf, Lt] = cn(oi, Bu, Si, {
  with(t, n, e) {
    return Lt(Pu(this, Hn(n), e));
  },
  add: (t, n) => Lt(qi(0, t, F(n))),
  subtract: (t, n) => Lt(qi(1, t, F(n))),
  until: (t, n, e) => k(ns(0, t, jt(n), e)),
  since: (t, n, e) => k(ns(1, t, jt(n), e)),
  round: (t, n) => Lt(Zc(t, n)),
  equals: (t, n) => pu(t, jt(n)),
  toLocaleString(t, n, e) {
    const [r, o] = yf(n, e, t);
    return r.format(o);
  },
  toString: ji,
  toJSON: (t) => ji(t),
  valueOf: un
}, {
  from: (t, n) => Lt(jt(t, n)),
  compare: (t, n) => Zo(jt(t), jt(n))
}), [Sf, pt] = cn(Vn, S(Zu, Ee), {
  ...Ce,
  ...Mi,
  ...Si
}, {
  with: (t, n, e) => pt(Cu(E, t, Hn(n), e)),
  withCalendar: (t, n) => pt($o(t, Or(n))),
  withPlainTime: (t, n) => pt(rl(t, Ei(n))),
  add: (t, n, e) => pt($i(E, 0, t, F(n), e)),
  subtract: (t, n, e) => pt($i(E, 1, t, F(n), e)),
  until: (t, n, e) => k(Ki(E, 0, t, Sn(n), e)),
  since: (t, n, e) => k(Ki(E, 1, t, Sn(n), e)),
  round: (t, n) => pt(Yc(t, n)),
  equals: (t, n) => du(t, Sn(n)),
  toZonedDateTime: (t, n, e) => $(qu(M, t, rt(n), e)),
  toPlainDate: (t) => gt(kt(t)),
  toPlainTime: (t) => Lt(St(t)),
  toLocaleString(t, n, e) {
    const [r, o] = vf(n, e, t);
    return r.format(o);
  },
  toString: Fi,
  toJSON: (t) => Fi(t),
  valueOf: un
}, {
  from: (t, n) => pt(Sn(t, n)),
  compare: (t, n) => ia(Sn(t), Sn(n))
}), [If, qr, vh] = cn(ri, S(Lu, Ee), {
  ...Ce,
  ...df
}, {
  with: (t, n, e) => qr(ku(E, t, Hn(n), e)),
  equals: (t, n) => mu(t, ss(n)),
  toPlainDate(t, n) {
    return gt(Ku(E, t, this, n));
  },
  toLocaleString(t, n, e) {
    const [r, o] = bf(n, e, t);
    return r.format(o);
  },
  toString: Zi,
  toJSON: (t) => Zi(t),
  valueOf: un
}, {
  from: (t, n) => qr(ss(t, n))
}), [Tf, te, wh] = cn(ei, S(Au, Ee), {
  ...Ce,
  ...lf
}, {
  with: (t, n, e) => te(_u(E, t, Hn(n), e)),
  add: (t, n, e) => te(Wi(E, 0, t, F(n), e)),
  subtract: (t, n, e) => te(Wi(E, 1, t, F(n), e)),
  until: (t, n, e) => k(ts(E, 0, t, In(n), e)),
  since: (t, n, e) => k(ts(E, 1, t, In(n), e)),
  equals: (t, n) => hu(t, In(n)),
  toPlainDate(t, n) {
    return gt(Xu(E, t, this, n));
  },
  toLocaleString(t, n, e) {
    const [r, o] = Ef(n, e, t);
    return r.format(o);
  },
  toString: Yi,
  toJSON: (t) => Yi(t),
  valueOf: un
}, {
  from: (t, n) => te(In(t, n)),
  compare: (t, n) => Wn(In(t), In(n))
}), [Df, gt, yh] = cn(De, S(ju, Ee), {
  ...Ce,
  ...Mi
}, {
  with: (t, n, e) => gt(zu(E, t, Hn(n), e)),
  withCalendar: (t, n) => gt($o(t, Or(n))),
  add: (t, n, e) => gt(Ui(E, 0, t, F(n), e)),
  subtract: (t, n, e) => gt(Ui(E, 1, t, F(n), e)),
  until: (t, n, e) => k(Qi(E, 0, t, Tn(n), e)),
  since: (t, n, e) => k(Qi(E, 1, t, Tn(n), e)),
  equals: (t, n) => fu(t, Tn(n)),
  toZonedDateTime(t, n) {
    const e = G(n) ? n : {
      timeZone: n
    };
    return $(Gu(rt, jt, M, t, e));
  },
  toPlainDateTime: (t, n) => pt(Vu(t, Ei(n))),
  toPlainYearMonth(t) {
    return te(Hu(E, t, this));
  },
  toPlainMonthDay(t) {
    return qr(Ju(E, t, this));
  },
  toLocaleString(t, n, e) {
    const [r, o] = wf(n, e, t);
    return r.format(o);
  },
  toString: xi,
  toJSON: (t) => xi(t),
  valueOf: un
}, {
  from: (t, n) => gt(Tn(t, n)),
  compare: (t, n) => Wn(Tn(t), Tn(n))
}), [Of, $] = cn(an, S(Yu, Ee, au), {
  ...pc,
  ...Ce,
  ...as(Mi),
  ...as(Si),
  offset: (t) => ve(Wr(t).offsetNanoseconds),
  offsetNanoseconds: (t) => Wr(t).offsetNanoseconds,
  timeZoneId: (t) => t.timeZone,
  hoursInDay: (t) => jc(M, t)
}, {
  with: (t, n, e) => $(Ru(E, M, t, Hn(n), e)),
  withCalendar: (t, n) => $($o(t, Or(n))),
  withTimeZone: (t, n) => $(ol(t, rt(n))),
  withPlainTime: (t, n) => $(el(M, t, Ei(n))),
  add: (t, n, e) => $(Bi(E, M, 0, t, F(n), e)),
  subtract: (t, n, e) => $(Bi(E, M, 1, t, F(n), e)),
  until: (t, n, e) => k(x(Xi(E, M, 0, t, Dn(n), e))),
  since: (t, n, e) => k(x(Xi(E, M, 1, t, Dn(n), e))),
  round: (t, n) => $(xc(M, t, n)),
  startOfDay: (t) => $(Ac(M, t)),
  equals: (t, n) => lu(t, Dn(n)),
  toInstant: (t) => At(Wu(t)),
  toPlainDateTime: (t) => pt(Ia(M, t)),
  toPlainDate: (t) => gt(Ta(M, t)),
  toPlainTime: (t) => Lt(Da(M, t)),
  toLocaleString(t, n, e = {}) {
    const [r, o] = gf(n, e, t);
    return r.format(o);
  },
  toString: (t, n) => Pi(M, t, n),
  toJSON: (t) => Pi(M, t),
  valueOf: un,
  getTimeZoneTransition(t, n) {
    const { timeZone: e, epochNanoseconds: r } = t, o = _c(n), i = M(e).O(r, o);
    return i ? $({
      ...t,
      epochNanoseconds: i
    }) : null;
  }
}, {
  from: (t, n) => $(Dn(t, n)),
  compare: (t, n) => oa(Dn(t), Dn(n))
}), [Nf, At, Eh] = cn(ii, xu, pc, {
  add: (t, n) => At(Li(0, t, F(n))),
  subtract: (t, n) => At(Li(1, t, F(n))),
  until: (t, n, e) => k(Ji(0, t, On(n), e)),
  since: (t, n, e) => k(Ji(1, t, On(n), e)),
  round: (t, n) => At(Fc(t, n)),
  equals: (t, n) => uu(t, On(n)),
  toZonedDateTimeISO: (t, n) => $(Uu(t, rt(n))),
  toLocaleString(t, n, e) {
    const [r, o] = pf(n, e, t);
    return r.format(o);
  },
  toString: (t, n) => ki(rt, M, t, n),
  toJSON: (t) => ki(rt, M, t),
  valueOf: un
}, {
  from: (t) => At(On(t)),
  fromEpochMilliseconds: (t) => At(Qu(t)),
  fromEpochNanoseconds: (t) => At(tl(t)),
  compare: (t, n) => ra(On(t), On(n))
}), Rf = /* @__PURE__ */ Object.defineProperties({}, {
  ...Jr("Temporal.Now"),
  ..._n({
    timeZoneId: () => Xn(),
    instant: () => At(_t(jr())),
    zonedDateTimeISO: (t = Xn()) => $(ft(jr(), rt(t), I)),
    plainDateTimeISO: (t = Xn()) => pt(ht(_r(M(rt(t))), I)),
    plainDateISO: (t = Xn()) => gt(kt(_r(M(rt(t))), I)),
    plainTimeISO: (t = Xn()) => Lt(St(_r(M(rt(t)))))
  })
}), hn = /* @__PURE__ */ Object.defineProperties({}, {
  ...Jr("Temporal"),
  ..._n({
    PlainYearMonth: Tf,
    PlainMonthDay: If,
    PlainDate: Df,
    PlainTime: Mf,
    PlainDateTime: Sf,
    ZonedDateTime: Of,
    Instant: Nf,
    Duration: hf,
    Now: Rf
  })
}), Cf = /* @__PURE__ */ of(), Ke = /* @__PURE__ */ new WeakMap();
Object.create(Intl), _n({
  DateTimeFormat: Cf
});
const Tt = {
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
function zf(t = {}) {
  const n = Math.max(t.nWeeks || Tt.nWeeks, 1), e = t.firstDayOfWeek ?? Tt.firstDayOfWeek, r = hn.PlainDate.from(t.date || hn.Now.plainDateISO()), o = (r.dayOfWeek - e + 7) % 7, i = r.subtract({ days: o }), s = Array.from({ length: n * 7 }, (a, c) => i.add({ days: c }).toString());
  return {
    start: s.at(0),
    end: s.at(-1),
    timezone: t.timezone || Tt.timezone,
    nWeeks: n,
    firstDayOfWeek: e,
    dates: s
  };
}
function _f(t = {}) {
  return {
    daySize: t.daySize ?? Tt.daySize,
    dayHeadSize: t.dayHeadSize ?? Tt.dayHeadSize,
    eventSize: t.eventSize ?? Tt.eventSize,
    resourceGroupSize: t.resourceGroupSize ?? Tt.resourceGroupSize,
    resourcesClass: t.resourcesClass,
    timelineClass: t.timelineClass,
    gap: t.gap ?? Tt.gap,
    overscan: t.overscan ?? Tt.overscan
  };
}
function Ii(t) {
  return t === void 0 ? [] : Array.isArray(t) ? t : [t];
}
function us(t, n, e) {
  return t.has(n) || t.set(n, e), t.get(n);
}
function kf(t = [], n) {
  const e = /* @__PURE__ */ new Map();
  for (var r = 0; r < t.length; r++) {
    const i = t[r], s = hn.Instant.from(i.start).toZonedDateTimeISO(n).toPlainDate().toString(), a = Ii(i.resourceId);
    for (var o = 0; o < a.length; o++) {
      const c = a[o], u = us(e, c, /* @__PURE__ */ new Map());
      us(u, s, /* @__PURE__ */ new Set()).add(i);
    }
  }
  return e;
}
const Pf = ["id", "nOrder", "isGroup", "isCollapsed", "resources", "maxEvents"], Ff = "cullendar-drag-event", xf = ".cullendar-timeline", Yf = ".cullendar-resources", Zf = "cullendar-is-dragging", jf = "cullendar-is-resizing", ot = {
  EXCLUDED_RESOURCE_FIELDS: Pf,
  DATA_TRANSFER_TYPE: Ff,
  TIMELINE_SELECTOR: xf,
  RESOURCES_SELECTOR: Yf,
  DRAGGING_CLASS: Zf,
  RESIZING_CLASS: jf
};
function gc(t, n) {
  const e = Object.entries(t), r = Ii(n);
  return Object.fromEntries(e.filter(([o]) => !r.includes(o)));
}
const xr = fs(/* @__PURE__ */ new Set());
function Af(t = [], n = /* @__PURE__ */ new Map()) {
  const e = wc(t), r = /* @__PURE__ */ new Map();
  for (var o = 0; o < e.length; o++) {
    const s = e[o], a = s.resources ? Lf(s, n) : vc(s, n.get(s.id));
    if (r.set(a.id, a), "isGroup" in a && !a.isCollapsed && a.resources.length)
      for (var i = 0; i < a.resources.length; i++) {
        const c = a.resources[i];
        r.set(c.id, c);
      }
  }
  return r;
}
function Lf(t, n) {
  const e = xr.has(t.id);
  return {
    id: t.id,
    nOrder: t.nOrder,
    isGroup: !0,
    isCollapsed: e,
    resources: wc(t.resources.map((r) => vc(r, n.get(r.id)))),
    data: gc(t, ot.EXCLUDED_RESOURCE_FIELDS),
    open: () => xr.delete(t.id),
    close: () => xr.add(t.id)
  };
}
function vc(t, n = /* @__PURE__ */ new Map()) {
  return {
    id: t.id,
    nOrder: t.nOrder,
    isEventDroppable: t.isEventDroppable ?? !0,
    maxEvents: Math.max(...Array.from(n.values()).map((e) => e.size), 1),
    data: gc(t, ot.EXCLUDED_RESOURCE_FIELDS)
  };
}
function wc(t) {
  return t.slice().sort((n, e) => (n.nOrder ?? Number.MAX_SAFE_INTEGER) - (e.nOrder ?? Number.MAX_SAFE_INTEGER));
}
function Bf(t = {}) {
  return {
    onView: t.onView || ((n) => {
    }),
    onAddEvent: t.onAddEvent || ((n) => {
    }),
    onMoveEvent: t.onMoveEvent || ((n) => {
    }),
    onResizeEvent: t.onResizeEvent || ((n) => {
    }),
    onBeforeDropEvent: t.onBeforeDropEvent || ((n) => !0)
  };
}
function $f(t, n) {
  function e(o, i) {
    const s = t.value.get(o) || /* @__PURE__ */ new Map();
    return (i ? s.get(i) : s) || /* @__PURE__ */ new Set();
  }
  function r(o) {
    return n.value.get(o);
  }
  return {
    getResource: r,
    getEvents: e
  };
}
function bh(t = {}) {
  const n = Oc(), e = $t(), r = $t(/* @__PURE__ */ new Map()), o = R(() => zf(t.view)), i = R(() => _f(t.layout)), s = R(() => kf(K(t.events), o.value.timezone)), a = R(() => Af(K(t.resources), s.value)), c = R(() => Bf(t.callbacks)), u = $f(s, a);
  return re(o, () => c.value.onView(o.value)), fs({
    id: n,
    elements: e,
    view: o,
    layout: i,
    events: s,
    resources: a,
    callbacks: c,
    utils: u,
    resizeMap: r
  });
}
function U(t) {
  return `${t}px`;
}
function Uf() {
  const t = Object.assign(document.createElement("div"), { style: "overflow:scroll;visibility:hidden;" }), n = document.body.appendChild(t), e = n.offsetWidth - n.clientWidth;
  return n.remove(), U(e);
}
function Nn(t, n, e) {
  let r = e.initialDeps ?? [], o;
  function i() {
    var s, a, c, u;
    let l;
    e.key && ((s = e.debug) != null && s.call(e)) && (l = Date.now());
    const d = t();
    if (!(d.length !== r.length || d.some((m, g) => r[g] !== m)))
      return o;
    r = d;
    let h;
    if (e.key && ((a = e.debug) != null && a.call(e)) && (h = Date.now()), o = n(...d), e.key && ((c = e.debug) != null && c.call(e))) {
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
        e == null ? void 0 : e.key
      );
    }
    return (u = e == null ? void 0 : e.onChange) == null || u.call(e, o), o;
  }
  return i.updateDeps = (s) => {
    r = s;
  }, i;
}
function Yr(t, n) {
  if (t === void 0)
    throw new Error("Unexpected undefined");
  return t;
}
const Wf = (t, n) => Math.abs(t - n) < 1, qf = (t, n, e) => {
  let r;
  return function(...o) {
    t.clearTimeout(r), r = t.setTimeout(() => n.apply(this, o), e);
  };
}, Gf = (t) => t, Vf = (t) => {
  const n = Math.max(t.startIndex - t.overscan, 0), e = Math.min(t.endIndex + t.overscan, t.count - 1), r = [];
  for (let o = n; o <= e; o++)
    r.push(o);
  return r;
}, Hf = (t, n) => {
  const e = t.scrollElement;
  if (!e)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  const o = (s) => {
    const { width: a, height: c } = s;
    n({ width: Math.round(a), height: Math.round(c) });
  };
  if (o(e.getBoundingClientRect()), !r.ResizeObserver)
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
      o(e.getBoundingClientRect());
    };
    t.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
  });
  return i.observe(e, { box: "border-box" }), () => {
    i.unobserve(e);
  };
}, ls = {
  passive: !0
}, ds = typeof window > "u" ? !0 : "onscrollend" in window, Jf = (t, n) => {
  const e = t.scrollElement;
  if (!e)
    return;
  const r = t.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = t.options.useScrollendEvent && ds ? () => {
  } : qf(
    r,
    () => {
      n(o, !1);
    },
    t.options.isScrollingResetDelay
  ), s = (l) => () => {
    const { horizontal: d, isRtl: f } = t.options;
    o = d ? e.scrollLeft * (f && -1 || 1) : e.scrollTop, i(), n(o, l);
  }, a = s(!0), c = s(!1);
  c(), e.addEventListener("scroll", a, ls);
  const u = t.options.useScrollendEvent && ds;
  return u && e.addEventListener("scrollend", c, ls), () => {
    e.removeEventListener("scroll", a), u && e.removeEventListener("scrollend", c);
  };
}, Xf = (t, n, e) => {
  if (n != null && n.borderBoxSize) {
    const r = n.borderBoxSize[0];
    if (r)
      return Math.round(
        r[e.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    t.getBoundingClientRect()[e.options.horizontal ? "width" : "height"]
  );
}, Kf = (t, {
  adjustments: n = 0,
  behavior: e
}, r) => {
  var o, i;
  const s = t + n;
  (i = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || i.call(o, {
    [r.options.horizontal ? "left" : "top"]: s,
    behavior: e
  });
};
class Qf {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const r = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((o) => {
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
          (o = r()) == null || o.disconnect(), e = null;
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
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([r, o]) => {
        typeof o > "u" && delete e[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Gf,
        rangeExtractor: Vf,
        onChange: () => {
        },
        measureElement: Xf,
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
        ...e
      };
    }, this.notify = (e) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, e);
    }, this.maybeNotify = Nn(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (e) => {
        this.notify(e);
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
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this.elementsCache.forEach((o) => {
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
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, r) => {
      const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let s = r - 1; s >= 0; s--) {
        const a = e[s];
        if (o.has(a.lane))
          continue;
        const c = i.get(
          a.lane
        );
        if (c == null || a.end > c.end ? i.set(a.lane, a) : a.end < c.end && o.set(a.lane, !0), o.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((s, a) => s.end === a.end ? s.index - a.index : s.end - a.end)[0] : void 0;
    }, this.getMeasurementOptions = Nn(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (e, r, o, i, s) => (this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: i,
        enabled: s
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Nn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: s }, a) => {
        if (!s)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((l) => {
          this.itemSizeCache.set(l.key, l.size);
        }));
        const c = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, c);
        for (let l = c; l < e; l++) {
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
    ), this.calculateRange = Nn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (e, r, o, i) => this.range = e.length > 0 && r > 0 ? th({
        measurements: e,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Nn(
      () => {
        let e = null, r = null;
        const o = this.calculateRange();
        return o && (e = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          e,
          r
        ];
      },
      (e, r, o, i, s) => i === null || s === null ? [] : e({
        startIndex: i,
        endIndex: s,
        overscan: r,
        count: o
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e) => {
      const r = this.options.indexAttribute, o = e.getAttribute(r);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (e, r) => {
      const o = this.indexFromElement(e), i = this.measurementsCache[o];
      if (!i)
        return;
      const s = i.key, a = this.elementsCache.get(s);
      a !== e && (a && this.observer.unobserve(a), this.observer.observe(e), this.elementsCache.set(s, e)), e.isConnected && this.resizeItem(o, this.options.measureElement(e, r, this));
    }, this.resizeItem = (e, r) => {
      const o = this.measurementsCache[e];
      if (!o)
        return;
      const i = this.itemSizeCache.get(o.key) ?? o.size, s = r - i;
      s !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, s, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", s), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += s,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(!1));
    }, this.measureElement = (e) => {
      if (!e) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(e, void 0);
    }, this.getVirtualItems = Nn(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (e, r) => {
        const o = [];
        for (let i = 0, s = e.length; i < s; i++) {
          const a = e[i], c = r[a];
          o.push(c);
        }
        return o;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Yr(
          r[yc(
            0,
            r.length - 1,
            (o) => Yr(r[o]).start,
            e
          )]
        );
    }, this.getOffsetForAlignment = (e, r, o = 0) => {
      const i = this.getSize(), s = this.getScrollOffset();
      r === "auto" && (r = e >= s + i ? "end" : "start"), r === "center" ? e += (o - i) / 2 : r === "end" && (e -= i);
      const a = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[a] : this.scrollElement[a] : 0) - i;
      return Math.max(Math.min(u, e), 0);
    }, this.getOffsetForIndex = (e, r = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const o = this.measurementsCache[e];
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
    }, this.scrollToOffset = (e, { align: r = "start", behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(e, r), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (e, { align: r = "auto", behavior: o } = {}) => {
      e = Math.max(0, Math.min(e, this.options.count - 1)), this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const i = this.getOffsetForIndex(e, r);
      if (!i) return;
      const [s, a] = i;
      this._scrollToOffset(s, { adjustments: void 0, behavior: o }), o !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(e)
        )) {
          const [u] = Yr(
            this.getOffsetForIndex(e, a)
          );
          Wf(u, this.getScrollOffset()) || this.scrollToIndex(e, { align: a, behavior: o });
        } else
          this.scrollToIndex(e, { align: a, behavior: o });
      }));
    }, this.scrollBy = (e, { behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + e, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var e;
      const r = this.getMeasurements();
      let o;
      if (r.length === 0)
        o = this.options.paddingStart;
      else if (this.options.lanes === 1)
        o = ((e = r[r.length - 1]) == null ? void 0 : e.end) ?? 0;
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
    }, this._scrollToOffset = (e, {
      adjustments: r,
      behavior: o
    }) => {
      this.options.scrollToFn(e, { behavior: o, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(n);
  }
}
const yc = (t, n, e, r) => {
  for (; t <= n; ) {
    const o = (t + n) / 2 | 0, i = e(o);
    if (i < r)
      t = o + 1;
    else if (i > r)
      n = o - 1;
    else
      return o;
  }
  return t > 0 ? t - 1 : 0;
};
function th({
  measurements: t,
  outerSize: n,
  scrollOffset: e,
  lanes: r
}) {
  const o = t.length - 1, i = (c) => t[c].start;
  if (t.length <= r)
    return {
      startIndex: 0,
      endIndex: o
    };
  let s = yc(
    0,
    o,
    i,
    e
  ), a = s;
  if (r === 1)
    for (; a < o && t[a].end < e + n; )
      a++;
  else if (r > 1) {
    const c = Array(r).fill(0);
    for (; a < o && c.some((l) => l < e + n); ) {
      const l = t[a];
      c[l.lane] = l.end, a++;
    }
    const u = Array(r).fill(e + n);
    for (; s >= 0 && u.some((l) => l >= e); ) {
      const l = t[s];
      u[l.lane] = l.start, s--;
    }
    s = Math.max(0, s - s % r), a = Math.min(o, a + (r - 1 - a % r));
  }
  return { startIndex: s, endIndex: a };
}
function nh(t) {
  const n = new Qf(K(t)), e = Sc(n), r = n._didMount();
  return re(
    () => K(t).getScrollElement(),
    (o) => {
      o && n._willUpdate();
    },
    {
      immediate: !0
    }
  ), re(
    () => K(t),
    (o) => {
      n.setOptions({
        ...o,
        onChange: (i, s) => {
          var a;
          Ti(e), (a = o.onChange) == null || a.call(o, i, s);
        }
      }), n._willUpdate(), Ti(e);
    },
    {
      immediate: !0
    }
  ), Ic(r), e;
}
function Ec(t) {
  return nh(
    R(() => ({
      observeElementRect: Hf,
      observeElementOffset: Jf,
      scrollToFn: Kf,
      ...K(t)
    }))
  );
}
function eh(t) {
  const n = document.getElementById(t);
  return {
    calendar: n,
    timeline: n.querySelector(ot.TIMELINE_SELECTOR),
    resources: n.querySelector(ot.RESOURCES_SELECTOR)
  };
}
const rh = /* @__PURE__ */ Kt({
  __name: "RowVirtualiser",
  props: {
    rows: {},
    layout: {},
    wrapperStyle: {}
  },
  setup(t) {
    const n = t, e = $t(null), r = R(() => ({
      count: n.rows.length,
      getScrollElement: () => e.value,
      estimateSize: c,
      gap: n.layout.gap,
      paddingStart: n.layout.dayHeadSize,
      overscan: n.layout.overscan
    })), o = Ec(r), i = R(() => o.value.getVirtualItems()), s = R(() => o.value.getTotalSize()), a = R(() => ({
      height: U(s.value),
      ...n.wrapperStyle
    }));
    re(() => n.rows, () => o.value.measure());
    function c(u) {
      const l = n.rows[u];
      return "isGroup" in l ? n.layout.resourceGroupSize : l.maxEvents * n.layout.eventSize;
    }
    return (u, l) => (L(), et("div", {
      ref_key: "el",
      ref: e
    }, [
      Gr("div", {
        class: "cullendar-row-virtualiser-wrapper",
        style: oe(a.value)
      }, [
        A(u.$slots, "wrapper", {}, void 0, !0),
        (L(!0), et(je, null, Ae(i.value, (d) => A(u.$slots, "default", Rn({
          key: d.index,
          ref_for: !0
        }, { row: d, data: u.rows[d.index] }), void 0, !0)), 128))
      ], 4)
    ], 512));
  }
}), Jn = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [r, o] of n)
    e[r] = o;
  return e;
}, bc = /* @__PURE__ */ Jn(rh, [["__scopeId", "data-v-f5d63ec0"]]), oh = { class: "cullendar-timeline-head" }, ih = /* @__PURE__ */ Kt({
  __name: "Timeline",
  props: {
    rows: {},
    columns: {}
  },
  setup(t) {
    const n = t, e = he("api"), { id: r, elements: o, layout: i } = xn(e);
    let s;
    const a = $t(i.value.daySize), c = R(() => ({
      horizontal: !0,
      count: n.columns.length,
      getScrollElement: () => {
        var p;
        return (p = o.value) == null ? void 0 : p.timeline;
      },
      estimateSize: () => a.value,
      gap: i.value.gap,
      overscan: i.value.overscan
    })), u = Ec(c), l = R(() => u.value.getVirtualItems()), d = R(() => u.value.getTotalSize()), f = R(() => ({ width: U(d.value) }));
    re([() => n.columns, () => i.value.daySize], () => h()), hs(() => {
      o.value = eh(r.value), s = new ResizeObserver(([p]) => p && h(p.contentRect.width)), s.observe(o.value.timeline);
    }), Tc(() => s.unobserve(o.value.timeline));
    function h(p) {
      const v = p ?? o.value.timeline.clientWidth, w = i.value.gap * (n.columns.length - 1), y = v - w, b = Math.max(i.value.daySize, Math.floor(y / n.columns.length));
      b !== a.value && (a.value = b, u.value.measure());
    }
    function m(p) {
      return {
        height: U(i.value.dayHeadSize),
        width: U(a.value),
        transform: `translateX(${U(p.start)}) translateY(0)`
      };
    }
    function g(p, v) {
      return {
        width: U(a.value),
        height: U(p.size),
        transform: `translateX(${U(v.start)}) translateY(${U(p.start)})`
      };
    }
    return (p, v) => (L(), Vr(bc, {
      rows: p.rows,
      layout: K(i),
      "wrapper-style": f.value,
      class: Hr(["cullendar-timeline", K(i).timelineClass])
    }, {
      wrapper: fn(() => [
        Gr("div", oh, [
          (L(!0), et(je, null, Ae(l.value, (w) => (L(), et("div", {
            key: w.index,
            class: "cullendar-timeline-virtual-col",
            style: oe(m(w))
          }, [
            A(p.$slots, "head", Rn({ ref_for: !0 }, { date: p.columns[w.index] }), void 0, !0)
          ], 4))), 128))
        ])
      ]),
      default: fn(({ row: w, data: y }) => [
        (L(!0), et(je, null, Ae(l.value, (b) => (L(), et("div", {
          key: b.index,
          class: "cullendar-timeline-virtual-col",
          style: oe(g(w, b))
        }, [
          A(p.$slots, "default", Rn({ ref_for: !0 }, { resource: y, date: p.columns[b.index] }), void 0, !0)
        ], 4))), 128))
      ]),
      _: 3
    }, 8, ["rows", "layout", "wrapper-style", "class"]));
  }
}), sh = /* @__PURE__ */ Jn(ih, [["__scopeId", "data-v-e945ff20"]]), ah = /* @__PURE__ */ Kt({
  __name: "Resources",
  props: {
    rows: {}
  },
  setup(t) {
    const n = he("api"), { layout: e } = xn(n);
    function r(o) {
      return {
        height: U(o.size),
        transform: `translateY(${U(o.start)})`
      };
    }
    return (o, i) => (L(), Vr(bc, {
      rows: o.rows,
      layout: K(e),
      class: Hr(["cullendar-resources", K(e).resourcesClass])
    }, {
      default: fn(({ row: s, data: a }) => [
        Gr("div", {
          class: "cullendar-resources-virtual-row",
          style: oe(r(s))
        }, [
          A(o.$slots, "default", Bt(zn({ resource: a })), void 0, !0)
        ], 4)
      ]),
      _: 3
    }, 8, ["rows", "layout", "class"]));
  }
}), ch = /* @__PURE__ */ Jn(ah, [["__scopeId", "data-v-44c18376"]]), uh = /* @__PURE__ */ Kt({
  __name: "Day",
  props: {
    date: {},
    resource: {}
  },
  setup(t) {
    const n = t, e = he("api"), { utils: r } = xn(e), o = R(() => r.value.getEvents(n.resource.id, n.date)), i = R(() => Array.from(o.value.values()).sort((s, a) => Date.parse(s.start) - Date.parse(a.start)));
    return (s, a) => A(s.$slots, "default", Bt(zn({ events: i.value })));
  }
}), lh = ["id"], dh = /* @__PURE__ */ Kt({
  name: "Cullendar",
  __name: "index",
  props: {
    cullendar: {}
  },
  setup(t) {
    const n = t;
    Dc("api", n.cullendar);
    const { id: e, elements: r, view: o, resources: i } = xn(n.cullendar), s = R(() => Array.from(i.value.values()));
    hs(() => {
      r.value.timeline.addEventListener("scroll", a), r.value.resources.addEventListener("scroll", a);
    });
    function a(c) {
      const u = c.target, l = u.classList.contains("cullendar-timeline") ? r.value.resources : r.value.timeline;
      l.removeEventListener("scroll", a), l.scrollTop = u.scrollTop, requestAnimationFrame(() => l.addEventListener("scroll", a));
    }
    return (c, u) => (L(), et("div", {
      id: K(e),
      style: oe({ "--scrollbar-width": K(Uf)() }),
      class: "cullendar"
    }, [
      Di(ch, { rows: s.value }, {
        default: fn(({ resource: l }) => [
          "isGroup" in l ? A(c.$slots, "resourceGroup", Bt(Rn({ key: 0 }, { resource: l })), void 0, !0) : A(c.$slots, "resource", Bt(Rn({ key: 1 }, { resource: l })), void 0, !0)
        ]),
        _: 3
      }, 8, ["rows"]),
      Di(sh, {
        rows: s.value,
        columns: K(o).dates
      }, {
        head: fn(({ date: l }) => [
          A(c.$slots, "dayHead", Bt(zn({ date: l })), void 0, !0)
        ]),
        default: fn(({ resource: l, date: d }) => [
          "isGroup" in l ? ms("", !0) : (L(), Vr(uh, {
            key: 0,
            date: d,
            resource: l
          }, {
            default: fn(({ events: f }) => [
              A(c.$slots, "day", Bt(zn({ resource: l, date: d, events: f })), () => [
                (L(!0), et(je, null, Ae(f, (h) => A(c.$slots, "event", Rn({
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
      A(c.$slots, "default", {}, void 0, !0)
    ], 12, lh));
  }
}), fh = /* @__PURE__ */ Jn(dh, [["__scopeId", "data-v-95fbc04c"]]), hh = /* @__PURE__ */ Kt({
  __name: "DragEvent",
  props: {
    data: {},
    dragClass: {},
    ghostClass: {}
  },
  setup(t) {
    const n = t;
    let e;
    const r = R(() => {
      var c, u;
      return ((u = (c = n.dragClass) == null ? void 0 : c.split) == null ? void 0 : u.call(c, " ")) || [];
    }), o = R(() => {
      var c, u;
      return ((u = (c = n.ghostClass) == null ? void 0 : c.split) == null ? void 0 : u.call(c, " ")) || [];
    });
    function i(c) {
      if (!c.dataTransfer)
        return;
      const u = document.querySelector(".cullendar"), l = c.target, d = l.getBoundingClientRect();
      e = a(l, d), l.classList.add(...r.value), c.dataTransfer.setDragImage(e, c.clientX - d.left, c.clientY - d.top), c.dataTransfer.effectAllowed = "id" in n.data ? "move" : "copy", c.dataTransfer.setData(ot.DATA_TRANSFER_TYPE, JSON.stringify(n.data)), requestAnimationFrame(() => u.classList.add(ot.DRAGGING_CLASS));
    }
    function s(c) {
      const u = document.querySelector(".cullendar");
      c.target.classList.remove(...r.value), u.classList.remove(ot.DRAGGING_CLASS), e && e.remove();
    }
    function a(c, u) {
      const l = c.cloneNode(!0);
      return l.classList.add("cullendar-ghost-event", ...o.value), l.style.height = U(u.height), l.style.width = U(u.width), document.body.appendChild(l), l;
    }
    return (c, u) => (L(), et("div", {
      draggable: "true",
      class: "cullendar-drag-event",
      onDragstart: Le(i, ["stop"]),
      onDragend: Le(s, ["stop"])
    }, [
      A(c.$slots, "default", {}, void 0, !0)
    ], 32));
  }
}), Mh = /* @__PURE__ */ Jn(hh, [["__scopeId", "data-v-20852942"]]), Sh = /* @__PURE__ */ Kt({
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
    const n = t, e = he("api"), { view: r, callbacks: o, resizeMap: i } = xn(e), s = $t(!1), a = R(() => {
      var h;
      return !!((h = i.value.get(n.resource.id)) != null && h.includes(n.date));
    }), c = R(() => [
      s.value && n.dragoverClass,
      a.value && n.resizeoverClass
    ].filter(Boolean).join(" "));
    function u(h) {
      h.dataTransfer && h.dataTransfer.types.includes(ot.DATA_TRANSFER_TYPE) && (s.value = !0);
    }
    function l(h) {
      if (!h.dataTransfer || !h.dataTransfer.types.includes(ot.DATA_TRANSFER_TYPE))
        return;
      s.value = !1;
      const m = JSON.parse(h.dataTransfer.getData(ot.DATA_TRANSFER_TYPE));
      if (!m.id)
        return o.value.onAddEvent(f({ data: m }));
      if (hn.Instant.from(m.start).toZonedDateTimeISO(r.value.timezone).toPlainDate().toString() === n.date && Ii(m.resourceId).includes(n.resource.id))
        return;
      const p = d(m), v = f({ event: m, times: p });
      o.value.onBeforeDropEvent(v) && o.value.onMoveEvent(v);
    }
    function d(h) {
      const m = hn.PlainDate.from(n.date), g = hn.Instant.from(h.start).toZonedDateTimeISO(r.value.timezone), p = hn.Instant.from(h.end).toZonedDateTimeISO(r.value.timezone), v = g.until(p), w = g.with({
        year: m.year,
        month: m.month,
        day: m.day
      });
      return {
        start: w.toString({ timeZoneName: "never" }),
        end: w.add(v).toString({ timeZoneName: "never" })
      };
    }
    function f(h = {}) {
      return {
        ...h,
        date: n.date,
        resource: n.resource,
        view: r.value
      };
    }
    return (h, m) => (L(), et("div", {
      class: Hr(c.value)
    }, [
      h.droppable && h.resource.isEventDroppable ? (L(), et("span", {
        key: 0,
        class: "cullendar-day-dropzone",
        onDragenter: u,
        onDragover: m[0] || (m[0] = Le(() => {
        }, ["prevent"])),
        onDragleave: m[1] || (m[1] = (g) => s.value = !1),
        onDrop: l
      }, null, 32)) : ms("", !0),
      A(h.$slots, "default", Bt(zn({ date: h.date, resource: h.resource, events: h.events, isDragOver: s.value, isResizeOver: a.value })))
    ], 2));
  }
}), mh = /* @__PURE__ */ Kt({
  __name: "ResizeHandle",
  props: {
    event: {},
    resource: {},
    date: {}
  },
  setup(t) {
    const n = t, e = he("api"), { elements: r, view: o, layout: i, callbacks: s, resizeMap: a } = xn(e);
    let c = 0;
    const u = $t(0), l = $t(0), d = $t(!1);
    function f(p) {
      const v = document.querySelector(".cullendar-timeline-virtual-col");
      d.value = !0, u.value = p.x, l.value = v.clientWidth, document.addEventListener("mousemove", h), document.addEventListener("mouseup", m), r.value.calendar.classList.add(ot.RESIZING_CLASS);
    }
    function h(p) {
      const v = Math.max(0, p.x - u.value), w = Math.ceil(v / (l.value + i.value.gap));
      c !== w && (c = w, a.value.set(n.resource.id, g(w)));
    }
    function m() {
      const p = a.value.get(n.resource.id) || [];
      c = 0, d.value = !1, u.value = 0, a.value.clear(), document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", m), r.value.calendar.classList.remove(ot.RESIZING_CLASS), p.length && s.value.onResizeEvent({
        event: n.event,
        resource: n.resource,
        dates: p,
        view: o.value
      });
    }
    function g(p) {
      const v = o.value.dates, w = v.indexOf(n.date) + 1;
      return v.slice(w, w + p);
    }
    return (p, v) => (L(), et("div", {
      draggable: "true",
      class: "cullendar-resize-handle",
      onDragstart: v[0] || (v[0] = Le(() => {
      }, ["stop", "prevent"])),
      onMousedown: f
    }, [
      A(p.$slots, "default", Bt(zn({ isResizing: d.value })), void 0, !0)
    ], 32));
  }
}), Ih = /* @__PURE__ */ Jn(mh, [["__scopeId", "data-v-8c805a83"]]), Th = { install: (t) => t.component("Cullendar", fh) };
export {
  fh as Cullendar,
  Mh as DragEvent,
  Sh as DropDay,
  Ih as ResizeHandle,
  bh as create,
  Th as default
};
