const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const {window} = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const { document } = window
var myvr = myvr || {};
(function(myvr) {
    function request(t, n, e) {
        var r = myvrUrlBase + n + "/",
            i = {
                headers: {
                    Authorization: "Bearer " + publicKey
                }
            };
        "key" in e && (r += e.key + "/", delete e.key), "post" === t && (e = $.toJSON(e), i.headers["Content-Type"] = "application/json");
        var u = _.promise();
        return $.request(t, r, e, i).then(function(t) {
            return t = $.parseJSON(t), "results" in t && (delete t.next, delete t.previous), u.fire(!0, t)
        }, function(t, n, e) {
            try {
                n = $.parseJSON(n)
            } catch (r) {}
            u.fire(!1, [t, n, e])
        }), u
    }
    /^u/.test(typeof define) && ! function(t) {
        var n = this.require = function(n) {
            return t[n]
        };
        this.define = function(e, r) {
            t[e] = t[e] || r(n)
        }
    }({}), define("minified", function() {
        function t(t) {
            return t.substr(0, 3)
        }

        function n(t) {
            return t != Ut ? "" + t : ""
        }

        function e(t, n) {
            return typeof t == n
        }

        function r(t) {
            return e(t, "string")
        }

        function i(t) {
            return !!t && e(t, "object")
        }

        function u(t) {
            return t && t.nodeType
        }

        function o(t) {
            return e(t, "number")
        }

        function a(t) {
            return i(t) && !!t.getDay
        }

        function s(t) {
            return t === !0 || t === !1
        }

        function c(t) {
            var n = typeof t;
            return "object" == n ? !(!t || !t.getDay) : "string" == n || "number" == n || s(t)
        }

        function f(t) {
            return t
        }

        function l(t) {
            return t + 1
        }

        function h(t, e, r) {
            return n(t).replace(e, r != Ut ? r : "")
        }

        function d(t) {
            return h(t, /[\\\[\]\/{}()*+?.$|^-]/g, "\\$&")
        }

        function p(t) {
            return h(t, /^\s+|\s+$/g)
        }

        function v(t, n, e) {
            for (var r in t) t.hasOwnProperty(r) && n.call(e || t, r, t[r]);
            return t
        }

        function g(t, n, e) {
            if (t)
                for (var r = 0; r < t.length; r++) n.call(e || t, t[r], r);
            return t
        }

        function m(t, n, e) {
            var r = [],
                i = ht(n) ? n : function(t) {
                    return n != t
                };
            return g(t, function(n, u) {
                i.call(e || t, n, u) && r.push(n)
            }), r
        }

        function y(t, n, e, r) {
            var i = [];
            return t(n, function(t, u) {
                dt(t = e.call(r || n, t, u)) ? g(t, function(t) {
                    i.push(t)
                }) : t != Ut && i.push(t)
            }), i
        }

        function $(t, n, e) {
            return y(g, t, n, e)
        }

        function b(t) {
            var n = 0;
            return v(t, function(t) {
                n++
            }), n
        }

        function w(t) {
            var n = [];
            return v(t, function(t) {
                n.push(t)
            }), n
        }

        function x(t, n, e) {
            var r = [];
            return g(t, function(i, u) {
                r.push(n.call(e || t, i, u))
            }), r
        }

        function N(t, n) {
            if (dt(t)) {
                var e = Ht(n);
                return B(j(t, 0, e.length), e)
            }
            return n != Ut && t.substr(0, n.length) == n
        }

        function S(t, n) {
            if (dt(t)) {
                var e = Ht(n);
                return B(j(t, -e.length), e) || !e.length
            }
            return n != Ut && t.substr(t.length - n.length) == n
        }

        function M(t) {
            var n = t.length;
            return dt(t) ? new Tt(x(t, function() {
                return t[--n]
            })) : h(t, /[\s\S]/g, function() {
                return t.charAt(--n)
            })
        }

        function k(t, n) {
            var e = {};
            return g(t, function(t, r) {
                e[t] = n
            }), e
        }

        function O(t, n) {
            var e = n || {};
            for (var r in t) e[r] = t[r];
            return e
        }

        function q(t, n) {
            for (var e = n, r = 0; r < t.length; r++) e = O(t[r], e);
            return e
        }

        function A(t) {
            return ht(t) ? t : function(n, e) {
                return t === n ? e : void 0
            }
        }

        function C(t, n, e) {
            return n == Ut ? e : 0 > n ? Math.max(t.length + n, 0) : Math.min(t.length, n)
        }

        function T(t, n, e, r) {
            for (var i, u = A(n), o = C(t, r, t.length), a = C(t, e, 0); o > a; a++)
                if ((i = u.call(t, t[a], a)) != Ut) return i
        }

        function H(t, n, e, r) {
            for (var i, u = A(n), o = C(t, r, -1), a = C(t, e, t.length - 1); a > o; a--)
                if ((i = u.call(t, t[a], a)) != Ut) return i
        }

        function j(t, n, e) {
            var r = [];
            if (t)
                for (var i = C(t, e, t.length), u = C(t, n, 0); i > u; u++) r.push(t[u]);
            return r
        }

        function D(t) {
            return x(t, f)
        }

        function F(t) {
            return function() {
                return new Tt(_(t, arguments))
            }
        }

        function E(t) {
            var n = {};
            return m(t, function(t) {
                return n[t] ? !1 : n[t] = 1
            })
        }

        function J(t, n) {
            var e = k(n, 1);
            return m(t, function(t) {
                var n = e[t];
                return e[t] = 0, n
            })
        }

        function L(t, n) {
            for (var e = 0; e < t.length; e++)
                if (t[e] == n) return !0;
            return !1
        }

        function B(t, n) {
            var e, r = ht(t) ? t() : t,
                i = ht(n) ? n() : n;
            return r == i ? !0 : r == Ut || i == Ut ? !1 : c(r) || c(i) ? a(r) && a(i) && +r == +i : dt(r) ? r.length == i.length && !T(r, function(t, n) {
                return B(t, i[n]) ? void 0 : !0
            }) : !dt(i) && (e = w(r)).length == b(i) && !T(e, function(t) {
                return B(r[t], i[t]) ? void 0 : !0
            })
        }

        function R(t, n, e) {
            return ht(t) ? t.apply(e && n, x(e || n, f)) : void 0
        }

        function _(t, n, e) {
            return x(t, function(t) {
                return R(t, n, e)
            })
        }

        function I(t, n, e, r) {
            return function() {
                return R(t, n, $([e, arguments, r], f))
            }
        }

        function U(t, n, e) {
            return I(t, this, n, e)
        }

        function K(t, n) {
            for (var e = 0 > n ? "-" : "", r = (e ? -n : n).toFixed(0); r.length < t;) r = "0" + r;
            return e + r
        }

        function P(t, n, e) {
            var r, i = 0,
                u = e ? n : M(n),
                o = (e ? t : M(t)).replace(/./g, function(t) {
                    return "0" == t ? (r = !1, u.charAt(i++) || "0") : "#" == t ? (r = !0, u.charAt(i++) || "") : r && !u.charAt(i) ? "" : t
                });
            return e ? o : n.substr(0, n.length - i) + M(o)
        }

        function W(t, n, e) {
            return n != Ut && t ? 60 * parseFloat(t[n] + t[n + 1]) + parseFloat(t[n] + t[n + 2]) + e.getTimezoneOffset() : 0
        }

        function Y(t, e) {
            var i = h(t, /^\?/);
            if (a(e)) {
                var u, s;
                return (s = /^\[(([+-])(\d\d)(\d\d))\]\s*(.*)/.exec(i)) && (u = s[1], e = tt(e, "minutes", W(s, 2, e)), i = s[5]), h(i, /(\w)(\1*)(?:\[([^\]]+)\])?/g, function(t, n, i, o) {
                    var a = Gt[n];
                    if (a) {
                        var s = e["get" + a[0]](),
                            c = o && o.split(",");
                        return s = dt(a[1]) ? (c || a[1])[s] : a[1](s, c, u), s == Ut || r(s) || (s = K(i.length + 1, s)), s
                    }
                    return t
                })
            }
            return T(i.split(/\s*\|\s*/), function(t) {
                var r, i;
                if (r = /^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(t)) {
                    var u = e,
                        a = +r[3];
                    if ((isNaN(a) || !o(u)) && (u = u == Ut ? "null" : n(u), a = r[3]), r[1]) {
                        if (!r[2] && u == a || "<" == r[1] && u > a || ">" == r[1] && a > u) return Ut
                    } else if (u != a) return Ut;
                    i = r[4]
                } else i = t;
                return o(e) ? i.replace(/[0#](.*[0#])?/, function(t) {
                    var n = /^([^.]+)(\.)([^.]+)$/.exec(t) || /^([^,]+)(,)([^,]+)$/.exec(t),
                        r = 0 > e ? "-" : "",
                        i = /(\d+)(\.(\d+))?/.exec((r ? -e : e).toFixed(n ? n[3].length : 0)),
                        u = n ? n[1] : t,
                        o = n ? P(n[3], h(i[3], /0+$/), !0) : "";
                    return (r ? "-" : "") + ("#" == u ? i[1] : P(u, i[1])) + (o.length ? n[2] : "") + o
                }) : i
            })
        }

        function z(t, n) {
            var e, r, i, u = {},
                o = 1,
                a = h(t, /^\?/);
            if (a != t && !p(n)) return Ut;
            (i = /^\[([+-])(\d\d)(\d\d)\]\s*(.*)/.exec(a)) && (e = i, a = i[4]);
            var s = new RegExp(a.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g, function(t, n, e, i) {
                if (/[dmhkyhs]/i.test(n)) {
                    u[o++] = n;
                    var a = e.length + 1;
                    return "(\\d" + (2 > a ? "+" : "{1," + a + "}") + ")"
                }
                return "z" == n ? (r = o, o += 3, "([+-])(\\d\\d)(\\d\\d)") : /[Nna]/.test(n) ? (u[o++] = [n, i && i.split(",")], "([a-zA-Z\\u0080-\\u1fff]+)") : /w/i.test(n) ? "[a-zA-Z\\u0080-\\u1fff]+" : /\s/.test(n) ? "\\s+" : d(t)
            }));
            if (!(i = s.exec(n))) return jt;
            for (var c = [0, 0, 0, 0, 0, 0, 0], f = 1; o > f; f++) {
                var l = i[f],
                    v = u[f];
                if (dt(v)) {
                    var g = v[0],
                        m = Xt[g],
                        y = m[0],
                        $ = v[1] || m[1],
                        b = T($, function(t, n) {
                            return N(l.toLowerCase(), t.toLowerCase()) ? n : void 0
                        });
                    if (b == Ut) return jt;
                    "a" == g ? c[y] += 12 * b : c[y] = b
                } else if (v) {
                    var w = parseFloat(l),
                        m = Xt[v];
                    dt(m) ? c[m[0]] += w - m[1] : c[m] += w
                }
            }
            var x = new Date(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
            return tt(x, "minutes", -W(e, 1, x) - W(i, r, x))
        }

        function V(t, n) {
            var e = h(t, /^\?/);
            if (e != t && !p(n)) return Ut;
            var r = /(^|[^0#.,])(,|[0#.]*,[0#]+|[0#]+\.[0#]+\.[0#.,]*)($|[^0#.,])/.test(e) ? "," : ".",
                i = parseFloat(h(h(h(n, "," == r ? /\./g : /,/g), r, "."), /^[^\d-]*(-?\d)/, "$1"));
            return isNaN(i) ? jt : i
        }

        function G() {
            return new Date
        }

        function X(t) {
            return new Date(+t)
        }

        function Z(t) {
            return t.charAt(0).toUpperCase() + t.substr(1)
        }

        function Q(t, n, e) {
            return t["set" + n](t["get" + n]() + e), t
        }

        function tt(t, n, e) {
            return e == Ut ? tt(G(), t, n) : Q(X(t), Z(n), e)
        }

        function nt(t) {
            var n = t || G();
            return new Date(n.getFullYear(), n.getMonth(), n.getDate())
        }

        function et(t, n, e) {
            var r = +n,
                i = +e,
                u = i - r;
            if (0 > u) return -et(t, e, n);
            var o = {
                    milliseconds: 1,
                    seconds: 1e3,
                    minutes: 6e4,
                    hours: 36e5
                },
                a = o[t];
            if (a) return u / a;
            for (var s = Z(t), c = {
                    fullYear: 31536e6,
                    month: 2628e6,
                    date: 864e5
                }, f = Math.floor(u / c[t] - 2), l = Q(new Date(r), s, f), h = f; 1.2 * f + 4 > h; h++)
                if (+Q(l, s, 1) > i) return h
        }

        function rt(t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }

        function it(t) {
            return h(t, /[\x00-\x1f'"\u2028\u2029]/g, rt)
        }

        function ut(t, n) {
            return t.split(n)
        }

        function ot(t, n) {
            if (Qt[t]) return Qt[t];
            var e = "with(_.isObject(obj)?obj:{}){" + x(ut(t, /{{|}}}?/g), function(t, n) {
                    var e, r = p(t),
                        i = h(r, /^{/),
                        u = r == i ? "esc(" : "";
                    return n % 2 ? (e = /^each\b(\s+([\w_]+(\s*,\s*[\w_]+)?)\s*:)?(.*)/.exec(i)) ? "each(" + (p(e[4]) ? e[4] : "this") + ", function(" + e[2] + "){" : (e = /^if\b(.*)/.exec(i)) ? "if(" + e[1] + "){" : (e = /^else\b\s*(if\b(.*))?/.exec(i)) ? "}else " + (e[1] ? "if(" + e[2] + ")" : "") + "{" : (e = /^\/(if)?/.exec(i)) ? e[1] ? "}\n" : "});\n" : (e = /^(var\s.*)/.exec(i)) ? e[1] + ";" : (e = /^#(.*)/.exec(i)) ? e[1] : (e = /(.*)::\s*(.*)/.exec(i)) ? "print(" + u + '_.formatValue("' + it(e[2]) + '",' + (p(e[1]) ? e[1] : "this") + (u && ")") + "));\n" : "print(" + u + (p(i) ? i : "this") + (u && ")") + ");\n" : t ? 'print("' + it(t) + '");\n' : void 0
                }).join("") + "}",
                r = new Function("obj", "each", "esc", "print", "_", e),
                i = function(t, e) {
                    var i = [];
                    return r.call(e || t, t, function(t, n) {
                        dt(t) ? g(t, function(t, e) {
                            n.call(t, t, e)
                        }) : v(t, function(t, e) {
                            n.call(e, t, e)
                        })
                    }, n || f, function() {
                        R(i.push, i, arguments)
                    }, Ht), i.join("")
                };
            return tn.push(i) > Zt && delete Qt[tn.shift()], Qt[t] = i
        }

        function at(t) {
            return h(t, /[<>'"&]/g, function(t) {
                return "&#" + t.charCodeAt(0) + ";"
            })
        }

        function st(t, n) {
            return ot(t, at)(n)
        }

        function ct(t) {
            return function(n, e) {
                return new Tt(t(this, n, e))
            }
        }

        function ft(t) {
            return function(n, e, r) {
                return t(this, n, e, r)
            }
        }

        function lt(t) {
            return function(n, e, r) {
                return new Tt(t(n, e, r))
            }
        }

        function ht(t) {
            return "function" == typeof t && !t.item
        }

        function dt(t) {
            return t && t.length != Ut && !r(t) && !u(t) && !ht(t) && t !== Dt
        }

        function pt(t) {
            return parseFloat(h(t, /^[^\d-]+/))
        }

        function vt(t) {
            return t[Ft] = t[Ft] || ++Bt
        }

        function gt(t, n) {
            var e, r = [],
                i = {};
            return qt(t, function(t) {
                qt(n(t), function(t) {
                    i[e = vt(t)] || (r.push(t), i[e] = !0)
                })
            }), r
        }

        function mt(t, n) {
            var e = {
                    $position: "absolute",
                    $visibility: "hidden",
                    $display: "block",
                    $height: Ut
                },
                r = t.get(e),
                i = t.set(e).get("clientHeight");
            return t.set(r), i * n + "px"
        }

        function yt(t, e, i, u, o) {
            return ht(e) ? this.on(Ut, t, e, i, u) : r(u) ? this.on(t, e, i, Ut, u) : this.each(function(r, a) {
                qt(t ? Mt(t, r) : r, function(t) {
                    qt(n(e).split(/\s/), function(n) {
                        function e(n, e, r) {
                            var f = !o,
                                l = o ? r : t;
                            if (o)
                                for (var h = kt(o, t); l && l != t && !(f = h(l));) l = l.parentNode;
                            return !f || s != n || i.apply(St(l), u || [e, a]) && "?" == c || "|" == c
                        }

                        function r(t) {
                            e(s, t, t.target) || (t.preventDefault(), t.stopPropagation())
                        }
                        var s = h(n, /[?|]/g),
                            c = h(n, /[^?|]/g),
                            l = ("blur" == s || "focus" == s) && !!o,
                            d = Bt++;
                        t.addEventListener(s, r, l), t.M || (t.M = {}), t.M[d] = e, i.M = y(qt, [i.M, function() {
                            t.removeEventListener(s, r, l), delete t.M[d]
                        }], f)
                    })
                })
            })
        }

        function $t(t) {
            _(t.M), t.M = Ut
        }

        function bt(t) {
            Rt ? Rt.push(t) : setTimeout(t, 0)
        }

        function wt(t, n, e) {
            return Mt(t, n, e)[0]
        }

        function xt(t, n, e) {
            var r = St(document.createElement(t));
            return dt(n) || n != Ut && !i(n) ? r.add(n) : r.set(n).add(e)
        }

        function Nt(t) {
            return y(qt, t, function(t) {
                var n;
                return dt(t) ? Nt(t) : u(t) ? (n = t.cloneNode(!0), n.removeAttribute && n.removeAttribute("id"), n) : t
            })
        }

        function St(t, n, e) {
            return ht(t) ? bt(t) : new Tt(Mt(t, n, e))
        }

        function Mt(t, n, e) {
            function i(t) {
                return dt(t) ? y(qt, t, i) : t
            }

            function o(t) {
                return m(y(qt, t, i), function(t) {
                    for (var r = t; r = r.parentNode;)
                        if (r == n[0] || e) return r == n[0]
                })
            }
            return n ? 1 != (n = Mt(n)).length ? gt(n, function(n) {
                return Mt(t, n, e)
            }) : r(t) ? 1 != u(n[0]) ? [] : e ? o(n[0].querySelectorAll(t)) : n[0].querySelectorAll(t) : o(t) : r(t) ? document.querySelectorAll(t) : y(qt, t, i)
        }

        function kt(t, n) {
            function e(t, n) {
                var e = RegExp("(^|\\s+)" + t + "(?=$|\\s)", "i");
                return function(r) {
                    return t ? e.test(r[n]) : !0
                }
            }
            var i = {},
                a = i;
            if (ht(t)) return t;
            if (o(t)) return function(n, e) {
                return e == t
            };
            if (!t || "*" == t || r(t) && (a = /^([\w-]*)\.?([\w-]*)$/.exec(t))) {
                var s = e(a[1], "tagName"),
                    c = e(a[2], "className");
                return function(t) {
                    return 1 == u(t) && s(t) && c(t)
                }
            }
            return n ? function(e) {
                return St(t, n).find(e) != Ut
            } : (St(t).each(function(t) {
                i[vt(t)] = !0
            }), function(t) {
                return i[vt(t)]
            })
        }

        function Ot(t) {
            var n = kt(t);
            return function(t) {
                return n(t) ? Ut : !0
            }
        }

        function qt(t, n) {
            return dt(t) ? g(t, n) : t != Ut && n(t, 0), t
        }

        function At() {
            this.state = null, this.values = [], this.parent = null
        }

        function Ct() {
            var t = [],
                n = arguments,
                e = n.length,
                r = 0,
                u = 0,
                o = new At;
            o.errHandled = function() {
                u++, o.parent && o.parent.errHandled()
            };
            var a = o.fire = function(n, e) {
                return null == o.state && null != n && (o.state = !!n, o.values = dt(e) ? e : [e], setTimeout(function() {
                    g(t, function(t) {
                        t()
                    })
                }, 0)), o
            };
            g(n, function c(t, n) {
                try {
                    t.then ? t.then(function(t) {
                        var u;
                        (i(t) || ht(t)) && ht(u = t.then) ? c(t, n) : (o.values[n] = D(arguments), ++r == e && a(!0, 2 > e ? o.values[n] : o.values))
                    }, function(t) {
                        o.values[n] = D(arguments), a(!1, 2 > e ? o.values[n] : [o.values[n][0], o.values, n])
                    }) : t(function() {
                        a(!0, D(arguments))
                    }, function() {
                        a(!1, D(arguments))
                    })
                } catch (u) {
                    a(!1, [u, o.values, n])
                }
            }), o.stop = function() {
                return g(n, function(t) {
                    t.stop && t.stop()
                }), o.stop0 && R(o.stop0)
            };
            var s = o.then = function(n, e) {
                var r = Ct(),
                    a = function() {
                        try {
                            var t = o.state ? n : e;
                            ht(t) ? ! function s(t) {
                                try {
                                    var n, e = 0;
                                    if ((i(t) || ht(t)) && ht(n = t.then)) {
                                        if (t === r) throw new TypeError;
                                        n.call(t, function(t) {
                                            e++ || s(t)
                                        }, function(t) {
                                            e++ || r.fire(!1, [t])
                                        }), r.stop0 = t.stop
                                    } else r.fire(!0, [t])
                                } catch (o) {
                                    if (!e++ && (r.fire(!1, [o]), !u)) throw o
                                }
                            }(R(t, jt, o.values)) : r.fire(o.state, o.values)
                        } catch (a) {
                            if (r.fire(!1, [a]), !u) throw a
                        }
                    };
                return ht(e) && o.errHandled(), r.stop0 = o.stop, r.parent = o, null != o.state ? setTimeout(a, 0) : t.push(a), r
            };
            return o.always = function(t) {
                return s(t, t)
            }, o.error = function(t) {
                return s(0, t)
            }, o
        }

        function Tt(t, n) {
            var e = this,
                r = 0;
            if (t)
                for (var i = 0, u = t.length; u > i; i++) {
                    var o = t[i];
                    if (n && dt(o))
                        for (var a = 0, s = o.length; s > a; a++) e[r++] = o[a];
                    else e[r++] = o
                } else e[r++] = n;
            e.length = r, e._ = !0
        }

        function Ht() {
            return new Tt(arguments, !0)
        }
        var jt, Dt = window,
            Ft = "Nia",
            Et = "NiaP",
            Jt = {},
            Lt = {},
            Bt = 1,
            Rt = /^[ic]/.test(document.readyState) ? Ut : [],
            _t = {},
            It = 0,
            Ut = null,
            Kt = ut("January,February,March,April,May,June,July,August,September,October,November,December", /,/g),
            Pt = x(Kt, t),
            Wt = ut("Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday", /,/g),
            Yt = x(Wt, t),
            zt = ut("am,pm", /,/g),
            Vt = ut("am,am,am,am,am,am,am,am,am,am,am,am,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm", /,/g),
            Gt = {
                y: ["FullYear", f],
                Y: ["FullYear", function(t) {
                    return t % 100
                }],
                M: ["Month", l],
                n: ["Month", Pt],
                N: ["Month", Kt],
                d: ["Date", f],
                m: ["Minutes", f],
                H: ["Hours", f],
                h: ["Hours", function(t) {
                    return t % 12 || 12
                }],
                k: ["Hours", l],
                K: ["Hours", function(t) {
                    return t % 12
                }],
                s: ["Seconds", f],
                S: ["Milliseconds", f],
                a: ["Hours", Vt],
                w: ["Day", Yt],
                W: ["Day", Wt],
                z: ["TimezoneOffset", function(t, n, e) {
                    if (e) return e;
                    var r = t > 0 ? "-" : "+",
                        i = 0 > t ? -t : t;
                    return r + K(2, Math.floor(i / 60)) + K(2, i % 60)
                }]
            },
            Xt = {
                y: 0,
                Y: [0, -2e3],
                M: [1, 1],
                n: [1, Pt],
                N: [1, Kt],
                d: 2,
                m: 4,
                H: 3,
                h: 3,
                K: [3, 1],
                k: [3, 1],
                s: 5,
                S: 6,
                a: [3, zt]
            },
            Zt = 99,
            Qt = {},
            tn = [];
        return O({
            each: ft(g),
            filter: ct(m),
            collect: ct($),
            map: ct(x),
            toObject: ft(k),
            equals: ft(B),
            sub: ct(j),
            reverse: ft(M),
            find: ft(T),
            findLast: ft(H),
            startsWith: ft(N),
            endsWith: ft(S),
            contains: ft(L),
            call: ct(_),
            array: ft(D),
            unite: ft(F),
            merge: ft(q),
            uniq: ct(E),
            intersection: ct(J),
            join: function(t) {
                return x(this, f).join(t)
            },
            reduce: function(t, n) {
                return g(this, function(e, r) {
                    n = t.call(this, n, e, r)
                }), n
            },
            sort: function(t) {
                return new Tt(x(this, f).sort(t))
            },
            remove: function() {
                qt(this, function(t) {
                    t.parentNode.removeChild(t)
                })
            },
            text: function() {
                return y(qt, this, function(t) {
                    return t.textContent
                }).join("")
            },
            trav: function(t, n, e) {
                var r = o(n),
                    i = kt(r ? Ut : n),
                    u = r ? n : e;
                return new Tt(gt(this, function(n) {
                    for (var e = [], r = n;
                        (r = r[t]) && e.length != u;) i(r) && e.push(r);
                    return e
                }))
            },
            next: function(t, n) {
                return this.trav("nextSibling", t, n || 1)
            },
            up: function(t, n) {
                return this.trav("parentNode", t, n || 1)
            },
            select: function(t, n) {
                return St(t, this, n)
            },
            is: function(t) {
                return !this.find(Ot(t))
            },
            only: function(t) {
                return new Tt(m(this, kt(t)))
            },
            not: function(t) {
                return new Tt(m(this, Ot(t)))
            },
            get: function(t, n) {
                var e = this,
                    i = e[0];
                if (i) {
                    if (r(t)) {
                        var u, o = /^(\W*)(.*)/.exec(h(t, /^%/, "@data-")),
                            a = o[1];
                        return u = Lt[a] ? Lt[a](this, o[2]) : "$" == t ? e.get("className") : "$$" == t ? e.get("@style") : "$$slide" == t ? e.get("$height") : "$$fade" == t || "$$show" == t ? "hidden" == e.get("$visibility") || "none" == e.get("$display") ? 0 : "$$fade" == t ? isNaN(e.get("$opacity", !0)) ? 1 : e.get("$opacity", !0) : 1 : "$" == a ? Dt.getComputedStyle(i, Ut).getPropertyValue(h(o[2], /[A-Z]/g, function(t) {
                            return "-" + t.toLowerCase()
                        })) : "@" == a ? i.getAttribute(o[2]) : i[o[2]], n ? pt(u) : u
                    }
                    var s = {};
                    return (dt(t) ? qt : v)(t, function(t) {
                        s[t] = e.get(t, n)
                    }), s
                }
            },
            set: function(t, n) {
                var e = this;
                if (n !== jt) {
                    var i = /^(\W*)(.*)/.exec(h(h(t, /^\$float$/, "cssFloat"), /^%/, "@data-")),
                        u = i[1];
                    Jt[u] ? Jt[u](this, i[2], n) : "$$fade" == t ? this.set({
                        $visibility: n ? "visible" : "hidden",
                        $opacity: n
                    }) : "$$slide" == t ? e.set({
                        $visibility: n ? "visible" : "hidden",
                        $overflow: "hidden",
                        $height: /px/.test(n) ? n : function(t, e, r) {
                            return mt(St(r), n)
                        }
                    }) : "$$show" == t ? n ? e.set({
                        $visibility: n ? "visible" : "hidden",
                        $display: ""
                    }).set({
                        $display: function(t) {
                            return "none" == t ? "block" : t
                        }
                    }) : e.set({
                        $display: "none"
                    }) : "$$" == t ? e.set("@style", n) : qt(this, function(e, r) {
                        var o = ht(n) ? n(St(e).get(t), r, e) : n;
                        "$" == u ? i[2] ? e.style[i[2]] = o : qt(o && o.split(/\s+/), function(t) {
                            var n = h(t, /^[+-]/),
                                r = e.className || "",
                                i = h(r, RegExp("(^|\\s+)" + n + "(?=$|\\s)"));
                            (/^\+/.test(t) || n == t && r == i) && (i += " " + n), e.className = p(i)
                        }) : "$$scrollX" == t ? e.scroll(o, St(e).get("$$scrollY")) : "$$scrollY" == t ? e.scroll(St(e).get("$$scrollX"), o) : "@" == u ? o == Ut ? e.removeAttribute(i[2]) : e.setAttribute(i[2], o) : e[i[2]] = o
                    })
                } else r(t) || ht(t) ? e.set("$", t) : v(t, function(t, n) {
                    e.set(t, n)
                });
                return e
            },
            show: function() {
                return this.set("$$show", 1)
            },
            hide: function() {
                return this.set("$$show", 0)
            },
            add: function(t, n) {
                return this.each(function(e, r) {
                    function i(t) {
                        if (dt(t)) qt(t, i);
                        else if (ht(t)) i(t(e, r));
                        else if (t != Ut) {
                            var a = u(t) ? t : document.createTextNode(t);
                            o ? o.parentNode.insertBefore(a, o.nextSibling) : n ? n(a, e, e.parentNode) : e.appendChild(a), o = a
                        }
                    }
                    var o;
                    i(r && !ht(t) ? Nt(t) : t)
                })
            },
            fill: function(t) {
                return this.each(function(t) {
                    St(t.childNodes).remove()
                }).add(t)
            },
            addAfter: function(t) {
                return this.add(t, function(t, n, e) {
                    e.insertBefore(t, n.nextSibling)
                })
            },
            addBefore: function(t) {
                return this.add(t, function(t, n, e) {
                    e.insertBefore(t, n)
                })
            },
            addFront: function(t) {
                return this.add(t, function(t, n) {
                    n.insertBefore(t, n.firstChild)
                })
            },
            replace: function(t) {
                return this.add(t, function(t, n, e) {
                    e.replaceChild(t, n)
                })
            },
            clone: ct(Nt),
            animate: function(t, n, e) {
                var r, i = Ct(),
                    u = this,
                    o = y(qt, this, function(n, r) {
                        var i, u = St(n),
                            o = {};
                        return v(i = u.get(t), function(e, i) {
                            var a = t[e];
                            o[e] = ht(a) ? a(i, r, n) : "$$slide" == e ? mt(u, a) : a
                        }), u.dial(i, o, e)
                    }),
                    a = n || 500;
                return i.stop0 = function() {
                    return i.fire(!1), r()
                }, r = St.loop(function(t) {
                    _(o, [t / a]), t >= a && (r(), i.fire(!0, [u]))
                }), i
            },
            dial: function(t, e, r) {
                function i(t, n) {
                    return /^#/.test(t) ? parseInt(t.length > 6 ? t.substr(2 * n + 1, 2) : (t = t.charAt(n + 1)) + t, 16) : pt(t.split(",")[n])
                }
                var u = this,
                    o = r || 0,
                    a = ht(o) ? o : function(t, n, e) {
                        return e * (n - t) * (o + (1 - o) * e * (3 - 2 * e)) + t
                    };
                return function(r) {
                    v(t, function(t, o) {
                        var s = e[t],
                            c = 0;
                        u.set(t, 0 >= r ? o : r >= 1 ? s : /^#|rgb\(/.test(s) ? "rgb(" + Math.round(a(i(o, c), i(s, c++), r)) + "," + Math.round(a(i(o, c), i(s, c++), r)) + "," + Math.round(a(i(o, c), i(s, c++), r)) + ")" : h(s, /-?[\d.]+/, n(a(pt(o), pt(s), r))))
                    })
                }
            },
            toggle: function(t, n, e, r) {
                var i, u, o = this,
                    a = !1;
                return n ? (o.set(t), function(s) {
                    s !== a && (u = (a = s === !0 || s === !1 ? s : !a) ? n : t, e ? (i = o.animate(u, i ? i.stop() : e, r)).then(function() {
                        i = Ut
                    }) : o.set(u))
                }) : o.toggle(h(t, /\b(?=\w)/g, "-"), h(t, /\b(?=\w)/g, "+"))
            },
            values: function(t) {
                var e = t || {};
                return this.each(function(t) {
                    var r = t.name || t.id,
                        i = n(t.value);
                    if (/form/i.test(t.tagName))
                        for (var u = 0; u < t.elements.length; u++) St(t.elements[u]).values(e);
                    else !r || /ox|io/i.test(t.type) && !t.checked || (e[r] = e[r] == Ut ? i : y(qt, [e[r], i], f))
                }), e
            },
            offset: function() {
                for (var t = this[0], n = {
                        x: 0,
                        y: 0
                    }; t;) n.x += t.offsetLeft, n.y += t.offsetTop, t = t.offsetParent;
                return n
            },
            on: yt,
            onOver: function(t, n) {
                var e = this,
                    r = [];
                return ht(n) ? this.on(t, "|mouseover |mouseout", function(t, i) {
                    var u = t.relatedTarget || t.toElement,
                        o = "mouseout" != t.type;
                    r[i] !== o && (o || !u || u != e[i] && !St(u).up(e[i]).length) && (r[i] = o, n.call(this, o, t))
                }) : this.onOver(Ut, t)
            },
            onFocus: function(t, n, e) {
                return ht(n) ? this.on(t, "|blur", n, [!1], e).on(t, "|focus", n, [!0], e) : this.onFocus(Ut, t, n)
            },
            onChange: function(t, n, e) {
                return ht(n) ? this.on(t, "|input |change |click", function(t, e) {
                    var r = this[0],
                        i = /ox|io/i.test(r.type) ? r.checked : r.value;
                    r[Et] != i && n.call(this, r[Et] = i, e)
                }, e) : this.onChange(Ut, t, n)
            },
            onClick: function(t, n, e, r) {
                return ht(n) ? this.on(t, "click", n, e, r) : this.onClick(Ut, t, n, e)
            },
            trigger: function(t, n) {
                return this.each(function(e, r) {
                    for (var i = !0, u = e; u && i;) v(u.M, function(r, u) {
                        i = i && u(t, n, e)
                    }), u = u.parentNode
                })
            },
            per: function(t, n) {
                if (ht(t))
                    for (var e = this.length, r = 0; e > r; r++) t.call(this, new Tt(Ut, this[r]), r);
                else St(t, this).per(n);
                return this
            },
            ht: function(t, n) {
                var e = arguments.length > 2 ? q(j(arguments, 1)) : n;
                return this.set("innerHTML", ht(t) ? t(e) : /{{/.test(t) ? st(t, e) : /^#\S+$/.test(t) ? st(wt(t).text, e) : t)
            }
        }, Tt.prototype), O({
            request: function(t, e, r, i) {
                var u, o = i || {},
                    a = 0,
                    s = Ct(),
                    c = r && r.constructor == o.constructor;
                try {
                    s.xhr = u = new XMLHttpRequest, s.stop0 = function() {
                        u.abort()
                    }, c && (r = y(v, r, function(t, n) {
                        return y(qt, n, function(n) {
                            return encodeURIComponent(t) + (n != Ut ? "=" + encodeURIComponent(n) : "")
                        })
                    }).join("&")), r == Ut || /post/i.test(t) || (e += "?" + r, r = Ut), u.open(t, e, !0, o.user, o.pass), c && /post/i.test(t) && u.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), v(o.headers, function(t, n) {
                        u.setRequestHeader(t, n)
                    }), v(o.xhr, function(t, n) {
                        u[t] = n
                    }), u.onreadystatechange = function() {
                        4 != u.readyState || a++ || (u.status >= 200 && u.status < 300 ? s.fire(!0, [u.responseText, u]) : s.fire(!1, [u.status, u.responseText, u]))
                    }, u.send(r)
                } catch (f) {
                    a || s.fire(!1, [0, Ut, n(f)])
                }
                return s
            },
            toJSON: JSON.stringify,
            parseJSON: JSON.parse,
            ready: bt,
            loop: function(t) {
                function n(t) {
                    v(_t, function(n, e) {
                        e(t)
                    }), It && o(n)
                }

                function e() {
                    return _t[u] && (delete _t[u], It--), i
                }
                var r, i = 0,
                    u = Bt++,
                    o = Dt.requestAnimationFrame || function(t) {
                        setTimeout(function() {
                            t(+new Date)
                        }, 33)
                    };
                return _t[u] = function(n) {
                    r = r || n, t(i = n - r, e)
                }, It++ || o(n), e
            },
            off: $t,
            setCookie: function(t, n, e, r) {
                document.cookie = t + "=" + (r ? n : escape(n)) + (e ? "; expires=" + (i(e) ? e : new Date(+new Date + 864e5 * e)).toUTCString() : "")
            },
            getCookie: function(t, n) {
                var e, r = (e = new RegExp("(^|;)\\s*" + t + "=([^;]*)").exec(document.cookie)) && e[2];
                return n ? r : r && unescape(r)
            },
            wait: function(t, n) {
                var e = Ct(),
                    r = setTimeout(function() {
                        e.fire(!0, n)
                    }, t);
                return e.stop0 = function() {
                    e.fire(!1), clearTimeout(r)
                }, e
            }
        }, St), O({
            filter: lt(m),
            collect: lt($),
            map: lt(x),
            sub: lt(j),
            reverse: M,
            each: g,
            toObject: k,
            find: T,
            findLast: H,
            contains: L,
            startsWith: N,
            endsWith: S,
            equals: B,
            call: lt(_),
            array: D,
            unite: F,
            merge: q,
            uniq: lt(E),
            intersection: lt(J),
            keys: lt(w),
            values: lt(function(t, n) {
                var e = [];
                return n ? g(n, function(n) {
                    e.push(t[n])
                }) : v(t, function(t, n) {
                    e.push(n)
                }), e
            }),
            copyObj: O,
            extend: function(t) {
                return q(j(arguments, 1), t)
            },
            range: function(t, n) {
                for (var e = [], r = n == Ut ? t : n, i = n != Ut ? t : 0; r > i; i++) e.push(i);
                return new Tt(e)
            },
            bind: I,
            partial: U,
            eachObj: v,
            mapObj: function(t, n, e) {
                var r = {};
                return v(t, function(i, u) {
                    r[i] = n.call(e || t, i, u)
                }), r
            },
            filterObj: function(t, n, e) {
                var r = {};
                return v(t, function(i, u) {
                    n.call(e || t, i, u) && (r[i] = u)
                }), r
            },
            isList: dt,
            isFunction: ht,
            isObject: i,
            isNumber: o,
            isBool: s,
            isDate: a,
            isValue: c,
            isString: r,
            toString: n,
            dateClone: X,
            dateAdd: tt,
            dateDiff: et,
            dateMidnight: nt,
            pad: K,
            formatValue: Y,
            parseDate: z,
            parseNumber: V,
            trim: p,
            isEmpty: function(t, n) {
                return t == Ut || !t.length || n && /^\s*$/.test(t)
            },
            escapeRegExp: d,
            escapeHtml: at,
            format: function(t, n, e) {
                return ot(t, e)(n)
            },
            template: ot,
            formatHtml: st,
            promise: Ct
        }, Ht), document.addEventListener("DOMContentLoaded", function() {
            _(Rt), Rt = Ut
        }, !1), {
            HTML: function() {
                var t = xt("div");
                return Ht(R(t.ht, t, arguments)[0].childNodes)
            },
            _: Ht,
            $: St,
            $$: wt,
            EE: xt,
            M: Tt,
            getter: Lt,
            setter: Jt
        }
    });
    var MINI = require("minified"),
        $ = MINI.$,
        _ = MINI._,
        myvrUrlBase = "https://api.myvr.com/public/v1/",
        myvrBookingUrl = "https://reservation.myvr.com/reservation/start-checkout/stay",
        publicKey = "";
    myvr.init = function(t) {
        publicKey = t
    }, myvr.quote = function(t) {
        return t = t || {}, "addons" in t && (t.addons = $.toJSON(t.addons)), request("get", "quote", t)
    }, myvr.properties = function(t) {
        return t = t || {}, "suitableElderly" in t && (t.suitableElderly = $.toJSON(t.suitableElderly)), "suitableGroups" in t && (t.suitableGroups = $.toJSON(t.suitableGroups)), "suitableHandicap" in t && (t.suitableHandicap = $.toJSON(t.suitableHandicap)), "suitableKids" in t && (t.suitableKids = $.toJSON(t.suitableKids)), "suitablePets" in t && (t.suitablePets = $.toJSON(t.suitablePets)), "suitableSmoking" in t && (t.suitableSmoking = $.toJSON(t.suitableSmoking)), request("get", "property", t)
    }, myvr.property = function(t) {
        var n = {
            key: t
        };
        return request("get", "property", n)
    }, myvr.availability = function(t) {
        return request("get", "calendar-event", t)
    }, myvr.inquire = function(t) {
        return request("post", "inquiry", t)
    }, myvr.book = function(t) {
        return request("post", "quote", t).then(function(t) {
            window.location = myvrBookingUrl + "?q=" + t.key
        }, function(n) {
            throw t && t.property && (window.location = myvrBookingUrl + "?p=" + t.property), n
        })
    };
})(myvr);