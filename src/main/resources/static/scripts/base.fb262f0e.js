PLOVR_MODULE_INFO = {
    "page-index": ["common"],
    "common": ["base"],
    "page-settings": ["common"],
    "page-main": ["common"],
    "page-profile": ["common"],
    "base": [],
    "richtexteditor": ["common"],
    "page-mobile-live": ["base"],
    "page-org-settings": ["common"],
    "page-roundtable": ["common"],
    "page-misc": ["common"],
    "page-org-signup": ["common"],
    "page-mobile-question": ["base"]
};
PLOVR_MODULE_URIS = {
    "page-index": "/static/revved/-/js/closure/page-index.d7b54ac7.js",
    "common": "/static/revved/-/js/closure/common.fed5411f.js",
    "page-settings": "/static/revved/-/js/closure/page-settings.77dc9147.js",
    "page-main": "/static/revved/-/js/closure/page-main.5d4c554d.js",
    "page-profile": "/static/revved/-/js/closure/page-profile.9a5922d2.js",
    "base": "/static/revved/-/js/closure/base.fb262f0e.js",
    "richtexteditor": "/static/revved/-/js/closure/richtexteditor.aa0a4005.js",
    "page-mobile-live": "/static/revved/-/js/closure/page-mobile-live.f6651ab4.js",
    "page-org-settings": "/static/revved/-/js/closure/page-org-settings.a386be78.js",
    "page-roundtable": "/static/revved/-/js/closure/page-roundtable.0eb5c155.js",
    "page-misc": "/static/revved/-/js/closure/page-misc.ceecaa58.js",
    "page-org-signup": "/static/revved/-/js/closure/page-org-signup.e2c637c5.js",
    "page-mobile-question": "/static/revved/-/js/closure/page-mobile-question.2aa3a79d.js"
};
PLOVR_MODULE_USE_DEBUG_MODE = false;
var __z_z__ = {};
(function (z) {
    var ea, ga, wa, Ea;
    z.aa = function (a) {
        return function () {
            return z.ba[a].apply(this, arguments)
        }
    };
    var da = function () {
        ea.Symbol || (ea.Symbol = fa);
        da = function () {
        }
    };
    var fa = function (a) {
        return "jscomp_symbol_" + a + ga++
    };
    var ha = function () {
        da();
        ea.Symbol.iterator || (ea.Symbol.iterator = ea.Symbol("iterator"));
        ha = function () {
        }
    };
    z.ia = function (a) {
        ha();
        if (a[ea.Symbol.iterator])return a[ea.Symbol.iterator]();
        if (!(a instanceof Array || "string" == typeof a || a instanceof String))throw new TypeError(a + " is not iterable");
        var b = 0;
        return {
            next: function () {
                return b == a.length ? {done: !0} : {done: !1, value: a[b++]}
            }
        }
    };
    var ja = function (a) {
        if (!(a instanceof Array)) {
            a = z.ia(a);
            for (var b, c = []; !(b = a.next()).done;)c.push(b.value);
            a = c
        }
        return a
    };
    z.l = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        for (var d in b)if (ea.Object.defineProperties) {
            var f = ea.Object.getOwnPropertyDescriptor(b, d);
            void 0 !== f && ea.Object.defineProperty(a, d, f)
        } else a[d] = b[d]
    };
    z.ka = function (a) {
        return void 0 !== a
    };
    z.p = function () {
    };
    z.la = function (a) {
        a.ba = function () {
            return a.Tj ? a.Tj : a.Tj = new a
        }
    };
    z.ma = function (a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call)return "object";
        return b
    };
    z.na = function (a) {
        return "array" == z.ma(a)
    };
    z.oa = function (a) {
        var b = z.ma(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    z.pa = function (a) {
        return "string" == typeof a
    };
    z.qa = function (a) {
        return "number" == typeof a
    };
    z.sa = function (a) {
        return "function" == z.ma(a)
    };
    z.ta = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    z.ua = function (a) {
        return a[z.va] || (a[z.va] = ++wa)
    };
    var ya = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    var Aa = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    };
    z.q = function (a, b, c) {
        z.q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ya : Aa;
        return z.q.apply(null, arguments)
    };
    z.Ba = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    };
    z.Ca = function (a, b) {
        for (var c in b)a[c] = b[c]
    };
    var Da = function (a) {
        if (z.t.execScript) z.t.execScript(a, "JavaScript"); else if (z.t.eval) {
            if (null == Ea)if (z.t.eval("var _evalTest_ \x3d 1;"), "undefined" != typeof z.t._evalTest_) {
                try {
                    delete z.t._evalTest_
                } catch (d) {
                }
                Ea = !0
            } else Ea = !1;
            if (Ea) z.t.eval(a); else {
                var b = z.t.document, c = b.createElement("SCRIPT");
                c.type = "text/javascript";
                c.defer = !1;
                c.appendChild(b.createTextNode(a));
                b.body.appendChild(c);
                b.body.removeChild(c)
            }
        } else throw Error("goog.globalEval not available");
    };
    z.u = function (a, b) {
        b && (a = a.replace(/\{\$([^}]+)}/g, function (a, d) {
            return null != b && d in b ? b[d] : a
        }));
        return a
    };
    z.v = function (a, b) {
        var c = a.split("."), d = z.t;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var f; c.length && (f = c.shift());)!c.length && z.ka(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
    };
    z.x = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.o = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.lY = function (a, c, g) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)h[k - 2] = arguments[k];
            return b.prototype[c].apply(a, h)
        }
    };
    var Fa = function (a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    };
    var Ga = function (a) {
        if (!a)return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Ia = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ia); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    z.Ja = function (a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    z.Ka = function (a, b) {
        for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length;)d += c.shift() + f.shift();
        return d + c.join("%s")
    };
    z.La = function (a) {
        return a.replace(/(\r\n|\r|\n)/g, "\n")
    };
    z.Ma = function (a) {
        return a.replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")
    };
    z.Na = function (a) {
        if (!Oa.test(a))return a;
        -1 != a.indexOf("\x26") && (a = a.replace(Pa, "\x26amp;"));
        -1 != a.indexOf("\x3c") && (a = a.replace(Qa, "\x26lt;"));
        -1 != a.indexOf("\x3e") && (a = a.replace(Ra, "\x26gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Sa, "\x26quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Ta, "\x26#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Ua, "\x26#0;"));
        return a
    };
    z.Va = function (a, b) {
        return -1 != a.indexOf(b)
    };
    z.Wa = function (a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    };
    var Ya = function (a, b) {
        var c = z.ka(void 0) ? a.toFixed(void 0) : String(a), d = c.indexOf(".");
        -1 == d && (d = c.length);
        return Za("0", Math.max(0, b - d)) + c
    };
    z.$a = function (a, b) {
        for (var c = 0, d = (0, z.ab)(String(a)).split("."), f = (0, z.ab)(String(b)).split("."), g = Math.max(d.length, f.length), h = 0; 0 == c && h < g; h++) {
            var k = d[h] || "", m = f[h] || "", n = /(\d*)(\D*)/g, r = /(\d*)(\D*)/g;
            do {
                var w = n.exec(k) || ["", "", ""], H = r.exec(m) || ["", "", ""];
                if (0 == w[0].length && 0 == H[0].length)break;
                c = bb(0 == w[1].length ? 0 : (0, window.parseInt)(w[1], 10), 0 == H[1].length ? 0 : (0, window.parseInt)(H[1], 10)) || bb(0 == w[2].length, 0 == H[2].length) || bb(w[2], H[2])
            } while (0 == c)
        }
        return c
    };
    var bb = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    z.db = function (a) {
        return String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        })
    };
    var eb = function (a) {
        var b = z.pa(void 0) ? z.Wa(void 0) : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, f) {
            return b + f.toUpperCase()
        })
    };
    var fb = function (a, b, c) {
        this.NR = c;
        this.SN = a;
        this.Ep = b;
        this.Ht = 0;
        this.Es = null
    };
    var gb = function () {
        this.hv = this.Rm = null
    };
    var hb = function () {
        this.next = this.scope = this.fn = null
    };
    z.ib = function (a) {
        return function () {
            return a
        }
    };
    var jb = function (a) {
        return function () {
            throw Error(a);
        }
    };
    z.kb = function (a) {
        return a[a.length - 1]
    };
    z.lb = function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    z.y = function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    };
    z.mb = function (a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    };
    z.nb = function (a, b, c) {
        return Array.prototype.map.call(a, b, c)
    };
    z.ob = function (a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    };
    z.pb = function (a, b, c) {
        return Array.prototype.some.call(a, b, c)
    };
    z.qb = function (a, b) {
        var c = z.rb(a, b, void 0);
        return 0 > c ? null : z.pa(a) ? a.charAt(c) : a[c]
    };
    z.rb = function (a, b, c) {
        for (var d = a.length, f = z.pa(a) ? a.split("") : a, g = 0; g < d; g++)if (g in f && b.call(c, f[g], g, a))return g;
        return -1
    };
    z.A = function (a, b) {
        return 0 <= z.lb(a, b)
    };
    z.sb = function (a, b) {
        z.A(a, b) || a.push(b)
    };
    z.tb = function (a, b) {
        var c = z.lb(a, b), d;
        (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
        return d
    };
    z.ub = function (a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    };
    z.vb = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
            return c
        }
        return []
    };
    z.wb = function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (z.oa(d)) {
                var f = a.length || 0, g = d.length || 0;
                a.length = f + g;
                for (var h = 0; h < g; h++)a[f + h] = d[h]
            } else a.push(d)
        }
    };
    z.xb = function (a, b, c, d) {
        Array.prototype.splice.apply(a, z.yb(arguments, 1))
    };
    z.yb = function (a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var zb = function (a, b) {
        for (var c = b || a, d = {}, f = 0, g = 0; g < a.length;) {
            var h = a[g++], k;
            k = h;
            k = z.ta(k) ? "o" + z.ua(k) : (typeof k).charAt(0) + k;
            Object.prototype.hasOwnProperty.call(d, k) || (d[k] = !0, c[f++] = h)
        }
        c.length = f
    };
    z.Ab = function (a) {
        return z.Va(z.Bb, a)
    };
    var Cb = function (a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);)c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    z.Db = function (a, b, c) {
        for (var d in a)b.call(c, a[d], d, a)
    };
    var Eb = function (a) {
        var b = Boolean, c = {}, d;
        for (d in a)b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    };
    z.Fb = function (a, b) {
        for (var c in a)if (b.call(void 0, a[c], c, a))return !0;
        return !1
    };
    z.Gb = function (a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = a[d];
        return b
    };
    z.Hb = function (a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = d;
        return b
    };
    var Ib = function (a, b) {
        return null !== a && b in a
    };
    z.Jb = function (a) {
        for (var b in a)return !1;
        return !0
    };
    z.Kb = function (a, b) {
        b in a && delete a[b]
    };
    z.Lb = function (a, b, c) {
        if (null !== a && b in a)throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    };
    z.Mb = function (a, b) {
        for (var c, d, f = 1; f < arguments.length; f++) {
            d = arguments[f];
            for (c in d)a[c] = d[c];
            for (var g = 0; g < Nb.length; g++)c = Nb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Ob = function (a) {
        var b = arguments.length;
        if (1 == b && z.na(arguments[0]))return Ob.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)c[arguments[d]] = !0;
        return c
    };
    var Pb = function () {
        return z.Ab("Opera") || z.Ab("OPR")
    };
    var Qb = function () {
        return z.Ab("Trident") || z.Ab("MSIE")
    };
    var Rb = function () {
        return z.Ab("Firefox")
    };
    var Sb = function () {
        return (z.Ab("Chrome") || z.Ab("CriOS")) && !Pb() && !z.Ab("Edge")
    };
    var Tb = function () {
        function a(a) {
            a = z.qb(a, d);
            return c[a] || ""
        }

        var b = z.Bb;
        if (Qb())return Ub(b);
        var b = Cb(b), c = {};
        z.y(b, function (a) {
            c[a[0]] = a[1]
        });
        var d = z.Ba(Ib, c);
        return Pb() ? a(["Version", "Opera", "OPR"]) : z.Ab("Edge") ? a(["Edge"]) : Sb() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    };
    var Ub = function (a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1])return b[1];
        var b = "", c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])if (a && a[1])switch (a[1]) {
            case "4.0":
                b = "8.0";
                break;
            case "5.0":
                b = "9.0";
                break;
            case "6.0":
                b = "10.0";
                break;
            case "7.0":
                b = "11.0"
        } else b = "7.0"; else b = c[1];
        return b
    };
    var Vb = function (a) {
        z.t.setTimeout(function () {
            throw a;
        }, 0)
    };
    var Wb = function () {
        var a = z.t.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z.Ab("Presto") && (a = function () {
            var a = window.document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            window.document.documentElement.appendChild(a);
            var b = a.contentWindow, a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                a = (0, z.q)(function (a) {
                    if (("*" ==
                        d || a.origin == d) && a.data == c) this.port1.onmessage()
                }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !Qb()) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function () {
                if (z.ka(c.next)) {
                    c = c.next;
                    var a = c.JD;
                    c.JD = null;
                    a()
                }
            };
            return function (a) {
                d.next = {JD: a};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function (a) {
            var b = window.document.createElement("SCRIPT");
            b.onreadystatechange = function () {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            window.document.documentElement.appendChild(b)
        } : function (a) {
            z.t.setTimeout(a, 0)
        }
    };
    var Xb = function (a, b) {
        Yb || Zb();
        $b || (Yb(), $b = !0);
        ac.add(a, b)
    };
    var Zb = function () {
        if (z.t.Promise && z.t.Promise.resolve) {
            var a = z.t.Promise.resolve(void 0);
            Yb = function () {
                a.then(bc)
            }
        } else Yb = function () {
            var a = bc;
            !z.sa(z.t.setImmediate) || z.t.Window && z.t.Window.prototype && !z.Ab("Edge") && z.t.Window.prototype.setImmediate == z.t.setImmediate ? (cc || (cc = Wb()), cc(a)) : z.t.setImmediate(a)
        }
    };
    var bc = function () {
        for (var a = null; a = ac.remove();) {
            try {
                a.fn.call(a.scope)
            } catch (b) {
                Vb(b)
            }
            dc.put(a)
        }
        $b = !1
    };
    var ec = function (a, b) {
        this.N = fc;
        this.oh = void 0;
        this.bl = this.Sh = this.Ra = null;
        this.os = this.yx = !1;
        if (a != z.p)try {
            var c = this;
            a.call(b, function (a) {
                gc(c, hc, a)
            }, function (a) {
                gc(c, ic, a)
            })
        } catch (d) {
            gc(this, ic, d)
        }
    };
    var jc = function () {
        this.next = this.context = this.gm = this.gp = this.fj = null;
        this.always = !1
    };
    var kc = function (a, b, c) {
        var d = lc.get();
        d.gp = a;
        d.gm = b;
        d.context = c;
        return d
    };
    var mc = function (a, b) {
        if (a.N == fc)if (a.Ra) {
            var c = a.Ra;
            if (c.Sh) {
                for (var d = 0, f = null, g = null, h = c.Sh; h && (h.always || (d++, h.fj == a && (f = h), !(f && 1 < d))); h = h.next)f || (g = h);
                f && (c.N == fc && 1 == d ? mc(c, b) : (g ? (d = g, d.next == c.bl && (c.bl = d), d.next = d.next.next) : nc(c), oc(c, f, ic, b)))
            }
            a.Ra = null
        } else gc(a, ic, b)
    };
    var pc = function (a, b) {
        a.Sh || a.N != hc && a.N != ic || qc(a);
        a.bl ? a.bl.next = b : a.Sh = b;
        a.bl = b
    };
    var rc = function (a, b, c, d) {
        var f = kc(null, null, null);
        f.fj = new ec(function (a, h) {
            f.gp = b ? function (c) {
                try {
                    var f = b.call(d, c);
                    a(f)
                } catch (n) {
                    h(n)
                }
            } : a;
            f.gm = c ? function (b) {
                try {
                    var f = c.call(d, b);
                    !z.ka(f) && b instanceof sc ? h(b) : a(f)
                } catch (n) {
                    h(n)
                }
            } : h
        });
        f.fj.Ra = a;
        pc(a, f);
        return f.fj
    };
    var gc = function (a, b, c) {
        if (a.N == fc) {
            a == c && (b = ic, c = new TypeError("Promise cannot resolve to itself"));
            a.N = 1;
            var d;
            a:{
                var f = c, g = a.BW, h = a.DW;
                if (f instanceof ec) pc(f, kc(g || z.p, h || null, a)), d = !0; else if (Ga(f)) f.then(g, h, a), d = !0; else {
                    if (z.ta(f))try {
                        var k = f.then;
                        if (z.sa(k)) {
                            tc(f, k, g, h, a);
                            d = !0;
                            break a
                        }
                    } catch (m) {
                        h.call(a, m);
                        d = !0;
                        break a
                    }
                    d = !1
                }
            }
            d || (a.oh = c, a.N = b, a.Ra = null, qc(a), b != ic || c instanceof sc || uc(a, c))
        }
    };
    var tc = function (a, b, c, d, f) {
        function g(a) {
            k || (k = !0, d.call(f, a))
        }

        function h(a) {
            k || (k = !0, c.call(f, a))
        }

        var k = !1;
        try {
            b.call(a, h, g)
        } catch (m) {
            g(m)
        }
    };
    var qc = function (a) {
        a.yx || (a.yx = !0, Xb(a.Xr, a))
    };
    var nc = function (a) {
        var b = null;
        a.Sh && (b = a.Sh, a.Sh = b.next, b.next = null);
        a.Sh || (a.bl = null);
        return b
    };
    var oc = function (a, b, c, d) {
        if (c == ic && b.gm && !b.always)for (; a && a.os; a = a.Ra)a.os = !1;
        if (b.fj) b.fj.Ra = null, vc(b, c, d); else try {
            b.always ? b.gp.call(b.context) : vc(b, c, d)
        } catch (f) {
            wc.call(null, f)
        }
        lc.put(b)
    };
    var vc = function (a, b, c) {
        b == hc ? a.gp.call(a.context, c) : a.gm && a.gm.call(a.context, c)
    };
    var uc = function (a, b) {
        a.os = !0;
        Xb(function () {
            a.os && wc.call(null, b)
        })
    };
    var sc = function (a) {
        Ia.call(this, a)
    };
    z.xc = function () {
        0 != yc && (zc[z.ua(this)] = this);
        this.Fd = this.Fd;
        this.jk = this.jk
    };
    z.Ac = function (a, b) {
        z.Bc(a, z.Ba(z.Cc, b))
    };
    z.Bc = function (a, b, c) {
        a.Fd ? b.call(c) : (a.jk || (a.jk = []), a.jk.push(z.ka(c) ? (0, z.q)(b, c) : b))
    };
    z.Cc = function (a) {
        a && "function" == typeof a.H && a.H()
    };
    z.Dc = function (a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            z.oa(d) ? z.Dc.apply(null, d) : z.Cc(d)
        }
    };
    z.Ec = function () {
        return z.Ab("iPhone") && !z.Ab("iPod") && !z.Ab("iPad")
    };
    var Fc = function () {
        var a = z.Bb;
        if (z.B)return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (z.Gc)return /Edge\/([\d\.]+)/.exec(a);
        if (z.C)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (z.D)return /WebKit\/(\S+)/.exec(a)
    };
    var Hc = function () {
        var a = z.t.document;
        return a ? a.documentMode : void 0
    };
    z.E = function (a) {
        return Ic[a] || (Ic[a] = 0 <= z.$a(z.Jc, a))
    };
    var Kc = function (a) {
        this.id = a
    };
    z.Lc = function (a, b) {
        this.type = a instanceof Kc ? String(a) : a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.rk = !1;
        this.wJ = !0
    };
    var Mc = function (a) {
        a.preventDefault()
    };
    var Nc = function (a) {
        Nc[" "](a);
        return a
    };
    z.Oc = function (a, b) {
        try {
            return Nc(a[b]), !0
        } catch (c) {
        }
        return !1
    };
    z.Pc = function (a, b) {
        z.Lc.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.wA = !1;
        this.gc = null;
        a && this.init(a, b)
    };
    z.Qc = function (a, b) {
        return Rc ? a.gc.button == b : "click" == a.type ? 0 == b : !!(a.gc.button & Sc[b])
    };
    z.Tc = function (a) {
        return z.Qc(a, 0) && !(z.D && z.Uc && a.ctrlKey)
    };
    z.Vc = function (a) {
        return !(!a || !a[Wc])
    };
    var Xc = function (a, b, c, d, f) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.dl = !!d;
        this.pf = f;
        this.key = ++Yc;
        this.pm = this.mr = !1
    };
    var Zc = function (a) {
        a.pm = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.pf = null
    };
    z.$c = function (a) {
        this.src = a;
        this.ic = {};
        this.pq = 0
    };
    var ad = function (a, b) {
        var c = b.type;
        if (!(c in a.ic))return !1;
        var d = z.tb(a.ic[c], b);
        d && (Zc(b), 0 == a.ic[c].length && (delete a.ic[c], a.pq--));
        return d
    };
    var bd = function (a, b, c, d) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.pm && g.listener == b && g.dl == !!c && g.pf == d)return f
        }
        return -1
    };
    z.F = function (a, b, c, d, f) {
        if (z.na(b)) {
            for (var g = 0; g < b.length; g++)z.F(a, b[g], c, d, f);
            return null
        }
        c = z.cd(c);
        return z.Vc(a) ? a.g(b, c, d, f) : dd(a, b, c, !1, d, f)
    };
    var dd = function (a, b, c, d, f, g) {
        if (!b)throw Error("Invalid event type");
        var h = !!f, k = z.ed(a);
        k || (a[fd] = k = new z.$c(a));
        c = k.add(b, c, d, f, g);
        if (c.proxy)return c;
        d = gd();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) a.addEventListener(b.toString(), d, h); else if (a.attachEvent) a.attachEvent(hd(b.toString()), d); else throw Error("addEventListener and attachEvent are unavailable.");
        id++;
        return c
    };
    var gd = function () {
        var a = jd, b = kd ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c)return c
        };
        return b
    };
    z.ld = function (a, b, c, d, f) {
        if (z.na(b)) {
            for (var g = 0; g < b.length; g++)z.ld(a, b[g], c, d, f);
            return null
        }
        c = z.cd(c);
        return z.Vc(a) ? a.ya(b, c, d, f) : dd(a, b, c, !0, d, f)
    };
    z.md = function (a, b, c, d, f) {
        if (z.na(b))for (var g = 0; g < b.length; g++)z.md(a, b[g], c, d, f); else c = z.cd(c), z.Vc(a) ? a.qa(b, c, d, f) : a && (a = z.ed(a)) && (b = a.Zn(b, c, !!d, f)) && z.nd(b)
    };
    z.nd = function (a) {
        if (z.qa(a) || !a || a.pm)return !1;
        var b = a.src;
        if (z.Vc(b))return ad(b.Zd, a);
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.dl) : b.detachEvent && b.detachEvent(hd(c), d);
        id--;
        (c = z.ed(b)) ? (ad(c, a), 0 == c.pq && (c.src = null, b[fd] = null)) : Zc(a);
        return !0
    };
    var hd = function (a) {
        return a in od ? od[a] : od[a] = "on" + a
    };
    z.pd = function (a, b, c, d) {
        var f = !0;
        if (a = z.ed(a))if (b = a.ic[b.toString()])for (b = b.concat(), a = 0; a < b.length; a++) {
            var g = b[a];
            g && g.dl == c && !g.pm && (g = qd(g, d), f = f && !1 !== g)
        }
        return f
    };
    var qd = function (a, b) {
        var c = a.listener, d = a.pf || a.src;
        a.mr && z.nd(a);
        return c.call(d, b)
    };
    var jd = function (a, b) {
        if (a.pm)return !0;
        if (!kd) {
            var c;
            if (!(c = b))a:{
                c = ["window", "event"];
                for (var d = z.t, f; f = c.shift();)if (null != d[f]) d = d[f]; else {
                    c = null;
                    break a
                }
                c = d
            }
            f = c;
            c = new z.Pc(f, this);
            d = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a:{
                    var g = !1;
                    if (0 == f.keyCode)try {
                        f.keyCode = -1;
                        break a
                    } catch (m) {
                        g = !0
                    }
                    if (g || void 0 == f.returnValue) f.returnValue = !0
                }
                f = [];
                for (g = c.currentTarget; g; g = g.parentNode)f.push(g);
                for (var g = a.type, h = f.length - 1; !c.rk && 0 <= h; h--) {
                    c.currentTarget = f[h];
                    var k = z.pd(f[h], g, !0, c), d = d && k
                }
                for (h =
                         0; !c.rk && h < f.length; h++)c.currentTarget = f[h], k = z.pd(f[h], g, !1, c), d = d && k
            }
            return d
        }
        return qd(a, new z.Pc(b, this))
    };
    z.ed = function (a) {
        a = a[fd];
        return a instanceof z.$c ? a : null
    };
    z.cd = function (a) {
        if (z.sa(a))return a;
        a[rd] || (a[rd] = function (b) {
            return a.handleEvent(b)
        });
        return a[rd]
    };
    z.G = function () {
        z.xc.call(this);
        this.Zd = new z.$c(this);
        this.nM = this;
        this.pA = null
    };
    z.sd = function (a, b, c, d) {
        b = a.Zd.ic[String(b)];
        if (!b)return !0;
        b = b.concat();
        for (var f = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.pm && h.dl == c) {
                var k = h.listener, m = h.pf || h.src;
                h.mr && ad(a.Zd, h);
                f = !1 !== k.call(m, d) && f
            }
        }
        return f && 0 != d.wJ
    };
    z.td = function (a, b) {
        z.G.call(this);
        this.Yg = a || 1;
        this.Jm = b || z.ud;
        this.qw = (0, z.q)(this.mW, this);
        this.wz = (0, z.I)()
    };
    z.vd = function (a, b, c) {
        if (z.sa(a)) c && (a = (0, z.q)(a, c)); else if (a && "function" == typeof a.handleEvent) a = (0, z.q)(a.handleEvent, a); else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : z.ud.setTimeout(a, b || 0)
    };
    z.wd = function (a) {
        z.ud.clearTimeout(a)
    };
    z.xd = function (a) {
        z.xc.call(this);
        this.ga = a;
        this.Za = {}
    };
    z.yd = function (a, b, c, d, f, g) {
        z.na(c) || (c && (zd[0] = c.toString()), c = zd);
        for (var h = 0; h < c.length; h++) {
            var k = z.F(b, c[h], d || a.handleEvent, f || !1, g || a.ga || a);
            if (!k)break;
            a.Za[k.key] = k
        }
        return a
    };
    var Ad = function (a, b, c, d, f, g) {
        if (z.na(c))for (var h = 0; h < c.length; h++)Ad(a, b, c[h], d, f, g); else {
            b = z.ld(b, c, d || a.handleEvent, f, g || a.ga || a);
            if (!b)return a;
            a.Za[b.key] = b
        }
        return a
    };
    z.Bd = function () {
        this.CA = "";
        this.NL = z.Cd
    };
    z.Ed = function () {
        this.qk = "";
        this.ML = Fd;
        this.EE = null
    };
    z.Gd = function (a) {
        return a instanceof z.Ed && a.constructor === z.Ed && a.ML === Fd ? a.qk : "type_error:SafeHtml"
    };
    z.Hd = function (a, b) {
        return (new z.Ed).wo(a, b)
    };
    z.Id = function (a) {
        if (a.Wc && "function" == typeof a.Wc)return a.Wc();
        if (z.pa(a))return a.split("");
        if (z.oa(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
            return b
        }
        return z.Gb(a)
    };
    z.Jd = function (a) {
        if (a.ld && "function" == typeof a.ld)return a.ld();
        if (!a.Wc || "function" != typeof a.Wc) {
            if (z.oa(a) || z.pa(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++)b.push(c);
                return b
            }
            return z.Hb(a)
        }
    };
    var Kd = function (a, b, c) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c); else if (z.oa(a) || z.pa(a)) z.y(a, b, c); else for (var d = z.Jd(a), f = z.Id(a), g = f.length, h = 0; h < g; h++)b.call(c, f[h], d && d[h], a)
    };
    z.Ld = function () {
    };
    z.Nd = function (a) {
        if (a instanceof z.Ld)return a;
        if ("function" == typeof a.gd)return a.gd(!1);
        if (z.oa(a)) {
            var b = 0, c = new z.Ld;
            c.next = function () {
                for (; ;) {
                    if (b >= a.length)throw z.Od;
                    if (b in a)return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    };
    z.Pd = function (a, b, c) {
        if (z.oa(a))try {
            z.y(a, b, c)
        } catch (d) {
            if (d !== z.Od)throw d;
        } else {
            a = z.Nd(a);
            try {
                for (; ;)b.call(c, a.next(), void 0, a)
            } catch (d) {
                if (d !== z.Od)throw d;
            }
        }
    };
    z.Qd = function (a) {
        if (z.oa(a))return z.vb(a);
        a = z.Nd(a);
        var b = [];
        z.Pd(a, function (a) {
            b.push(a)
        });
        return b
    };
    z.Rd = function (a, b) {
        this.Ib = {};
        this.Za = [];
        this.xq = this.Ja = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    var Sd = function (a, b) {
        return a === b
    };
    z.Td = function (a) {
        if (a.Ja != a.Za.length) {
            for (var b = 0, c = 0; b < a.Za.length;) {
                var d = a.Za[b];
                z.Ud(a.Ib, d) && (a.Za[c++] = d);
                b++
            }
            a.Za.length = c
        }
        if (a.Ja != a.Za.length) {
            for (var f = {}, c = b = 0; b < a.Za.length;)d = a.Za[b], z.Ud(f, d) || (a.Za[c++] = d, f[d] = 1), b++;
            a.Za.length = c
        }
    };
    z.Ud = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Vd = function (a) {
        z.xc.call(this);
        this.Gk = a;
        this.qu = []
    };
    var Wd = function () {
    };
    var Xd = function (a) {
        var b;
        (b = a.ED) || (b = {}, Yd(a) && (b[0] = !0, b[1] = !0), b = a.ED = b);
        return b
    };
    var Zd = function () {
    };
    var $d = function (a) {
        return (a = Yd(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
    };
    var Yd = function (a) {
        if (!a.vG && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new window.ActiveXObject(d), a.vG = d
                } catch (f) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.vG
    };
    var ae = function (a, b) {
        if (a)for (var c = a.split("\x26"), d = 0; d < c.length; d++) {
            var f = c[d].indexOf("\x3d"), g = null, h = null;
            0 <= f ? (g = c[d].substring(0, f), h = c[d].substring(f + 1)) : g = c[d];
            b(g, h ? (0, window.decodeURIComponent)(h.replace(/\+/g, " ")) : "")
        }
    };
    z.be = function (a, b) {
        var c = a.search(ce), d;
        a:{
            d = 0;
            for (var f = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var g = a.charCodeAt(d - 1);
                if (38 == g || 63 == g)if (g = a.charCodeAt(d + f), !g || 61 == g || 38 == g || 35 == g)break a;
                d += f + 1
            }
            d = -1
        }
        if (0 > d)return null;
        f = a.indexOf("\x26", d);
        if (0 > f || f > c) f = c;
        d += b.length + 1;
        return (0, window.decodeURIComponent)(a.substr(d, f - d).replace(/\+/g, " "))
    };
    z.de = function (a) {
        z.G.call(this);
        this.headers = new z.Rd;
        this.jv = a || null;
        this.Jh = !1;
        this.iv = this.ea = null;
        this.ct = this.vz = "";
        this.Oj = this.Ky = this.Ls = this.sx = !1;
        this.Su = 0;
        this.Ru = null;
        this.rJ = ee;
        this.fC = this.wU = this.aX = !1
    };
    var fe = function (a) {
        return z.C && z.E(9) && z.qa(a.timeout) && z.ka(a.ontimeout)
    };
    var ge = function (a) {
        return "content-type" == a.toLowerCase()
    };
    var he = function (a) {
        a.sx || (a.sx = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    var ie = function (a) {
        if (a.Jh && "undefined" != typeof z.je && (!a.iv[1] || 4 != ke(a) || 2 != me(a)))if (a.Ls && 4 == ke(a)) z.vd(a.vI, 0, a); else if (a.dispatchEvent("readystatechange"), a.Ge()) {
            a.Jh = !1;
            try {
                if (ne(a)) a.dispatchEvent("complete"), a.dispatchEvent("success"); else {
                    var b;
                    try {
                        b = 2 < ke(a) ? a.ea.statusText : ""
                    } catch (c) {
                        b = ""
                    }
                    a.ct = b + " [" + me(a) + "]";
                    he(a)
                }
            } finally {
                oe(a)
            }
        }
    };
    var pe = function (a, b) {
        return {type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total}
    };
    var oe = function (a, b) {
        if (a.ea) {
            qe(a);
            var c = a.ea, d = a.iv[0] ? z.p : null;
            a.ea = null;
            a.iv = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (f) {
            }
        }
    };
    var qe = function (a) {
        a.ea && a.fC && (a.ea.ontimeout = null);
        z.qa(a.Ru) && (z.wd(a.Ru), a.Ru = null)
    };
    var ne = function (a) {
        var b = me(a), c;
        a:switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.vz).match(z.re)[1] || null, !a && z.t.self && z.t.self.location && (a = z.t.self.location.protocol, a = a.substr(0, a.length - 1)), b = !se.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    };
    var ke = function (a) {
        return a.ea ? a.ea.readyState : 0
    };
    var me = function (a) {
        try {
            return 2 < ke(a) ? a.ea.status : -1
        } catch (b) {
            return -1
        }
    };
    z.te = function (a) {
        try {
            return a.ea ? a.ea.responseText : ""
        } catch (b) {
            return ""
        }
    };
    var ue = function (a) {
        z.G.call(this);
        this.Nl = new Vd(a);
        this.T = new z.xd(this)
    };
    var ve = function (a, b) {
        this.zu = [];
        this.gI = a;
        this.zE = b || null;
        this.bo = this.ei = !1;
        this.oh = void 0;
        this.oB = this.gN = this.mw = !1;
        this.av = 0;
        this.Ra = null;
        this.rw = 0
    };
    var we = function (a, b, c) {
        a.ei = !0;
        a.oh = c;
        a.bo = !b;
        xe(a)
    };
    var ye = function (a, b) {
        a.Th();
        we(a, !1, b)
    };
    var ze = function (a, b, c, d) {
        a.zu.push([b, c, d]);
        a.ei && xe(a)
    };
    var Ae = function (a) {
        return z.pb(a.zu, function (a) {
            return z.sa(a[1])
        })
    };
    var xe = function (a) {
        if (a.av && a.ei && Ae(a)) {
            var b = a.av, c = Be[b];
            c && (z.t.clearTimeout(c.pb), delete Be[b]);
            a.av = 0
        }
        a.Ra && (a.Ra.rw--, delete a.Ra);
        for (var b = a.oh, d = c = !1; a.zu.length && !a.mw;) {
            var f = a.zu.shift(), g = f[0], h = f[1], f = f[2];
            if (g = a.bo ? h : g)try {
                var k = g.call(f || a.zE, b);
                z.ka(k) && (a.bo = a.bo && (k == b || k instanceof Error), a.oh = b = k);
                if (Ga(b) || "function" === typeof z.t.Promise && b instanceof z.t.Promise) d = !0, a.mw = !0
            } catch (m) {
                b = m, a.bo = !0, Ae(a) || (c = !0)
            }
        }
        a.oh = b;
        d && (k = (0, z.q)(a.gE, a, !0), d = (0, z.q)(a.gE, a, !1), b instanceof
        ve ? (ze(b, k, d), b.gN = !0) : b.then(k, d));
        c && (b = new Ce(b), Be[b.pb] = b, a.av = b.pb)
    };
    var De = function (a) {
        Ia.call(this);
        this.deferred = a
    };
    var Ee = function (a) {
        Ia.call(this);
        this.deferred = a
    };
    var Ce = function (a) {
        this.pb = z.t.setTimeout((0, z.q)(this.kW, this), 0);
        this.Tr = a
    };
    z.Fe = function (a, b) {
        a.innerHTML = z.Gd(b)
    };
    z.Ge = function (a, b) {
        this.x = z.ka(a) ? a : 0;
        this.y = z.ka(b) ? b : 0
    };
    z.He = function (a, b) {
        this.width = a;
        this.height = b
    };
    z.J = function (a) {
        return a ? new z.Ie(z.Je(a)) : Ke || (Ke = new z.Ie)
    };
    z.L = function (a) {
        return z.pa(a) ? window.document.getElementById(a) : a
    };
    z.N = function (a, b) {
        var c = b || window.document, d = null;
        return (d = c.getElementsByClassName ? c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : z.Le(window.document, "*", a, b)[0]) || null
    };
    z.Le = function (a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var f = 0, g = 0, h; h = a[g]; g++)b == h.nodeName && (d[f++] = h);
                d.length = f;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (g = f = 0; h = a[g]; g++)b = h.className, "function" == typeof b.split && z.A(b.split(/\s+/), c) && (d[f++] = h);
            d.length = f;
            return d
        }
        return a
    };
    var Me = function (a, b) {
        z.Db(b, function (b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Ne.hasOwnProperty(d) ? a.setAttribute(Ne[d], b) : z.Ja(d, "aria-") || z.Ja(d, "data-") ? a.setAttribute(d, b) : a[d] = b
        })
    };
    z.Oe = function (a) {
        a = (a || window).document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new z.He(a.clientWidth, a.clientHeight)
    };
    z.Pe = function (a) {
        var b = z.Qe(a);
        a = a.parentWindow || a.defaultView;
        return z.C && z.E("10") && a.pageYOffset != b.scrollTop ? new z.Ge(b.scrollLeft, b.scrollTop) : new z.Ge(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    z.Qe = function (a) {
        return a.scrollingElement ? a.scrollingElement : z.D || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    };
    z.Re = function (a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    z.O = function (a, b, c) {
        return Se(window.document, arguments)
    };
    var Se = function (a, b) {
        var c = b[0], d = b[1];
        if (!Te && d && (d.name || d.type)) {
            c = ["\x3c", c];
            d.name && c.push(' name\x3d"', z.Na(d.name), '"');
            if (d.type) {
                c.push(' type\x3d"', z.Na(d.type), '"');
                var f = {};
                z.Mb(f, d);
                delete f.type;
                d = f
            }
            c.push("\x3e");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (z.pa(d) ? c.className = d : z.na(d) ? c.className = d.join(" ") : Me(c, d));
        2 < b.length && Ue(a, c, b, 2);
        return c
    };
    var Ue = function (a, b, c, d) {
        function f(c) {
            c && b.appendChild(z.pa(c) ? a.createTextNode(c) : c)
        }

        for (; d < c.length; d++) {
            var g = c[d];
            !z.oa(g) || z.ta(g) && 0 < g.nodeType ? f(g) : z.y(Ve(g) ? z.vb(g) : g, f)
        }
    };
    z.We = function (a) {
        return z.Xe(window.document, a)
    };
    z.Xe = function (a, b) {
        var c = a.createElement("DIV");
        z.C ? (c.innerHTML = "\x3cbr\x3e" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild); else {
            for (var d = a.createDocumentFragment(); c.firstChild;)d.appendChild(c.firstChild);
            c = d
        }
        return c
    };
    z.Ye = function (a) {
        if (1 != a.nodeType)return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    z.Ze = function (a, b) {
        Ue(z.Je(a), a, arguments, 1)
    };
    z.$e = function (a) {
        for (var b; b = a.firstChild;)a.removeChild(b)
    };
    z.af = function (a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    };
    z.bf = function (a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    };
    z.cf = function (a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null)
    };
    z.P = function (a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    z.df = function (a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode)return a.removeNode(!1);
            for (; b = a.firstChild;)c.insertBefore(b, a);
            return z.P(a)
        }
    };
    z.ef = function (a) {
        return ff && void 0 != a.children ? a.children : z.mb(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    };
    z.gf = function (a) {
        return z.ka(a.firstElementChild) ? a.firstElementChild : z.hf(a.firstChild, !0)
    };
    z.hf = function (a, b) {
        for (; a && 1 != a.nodeType;)a = b ? a.nextSibling : a.previousSibling;
        return a
    };
    z.jf = function (a) {
        return z.ta(a) && 1 == a.nodeType
    };
    var kf = function (a) {
        return z.ta(a) && a.window == a
    };
    z.lf = function (a, b) {
        if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;)b = b.parentNode;
        return b == a
    };
    z.Je = function (a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    z.mf = function (a, b) {
        if ("textContent" in a) a.textContent = b; else if (3 == a.nodeType) a.data = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;)a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else z.$e(a), a.appendChild(z.Je(a).createTextNode(String(b)))
    };
    z.nf = function (a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    };
    z.of = function (a) {
        if (pf && "innerText" in a) a = z.La(a.innerText); else {
            var b = [];
            z.qf(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        pf || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    };
    z.qf = function (a, b, c) {
        if (!(a.nodeName in rf))if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in sf) b.push(sf[a.nodeName]); else for (a = a.firstChild; a;)z.qf(a, b, c), a = a.nextSibling
    };
    var Ve = function (a) {
        if (a && "number" == typeof a.length) {
            if (z.ta(a))return "function" == typeof a.item || "string" == typeof a.item;
            if (z.sa(a))return "function" == typeof a.item
        }
        return !1
    };
    z.tf = function (a, b, c, d) {
        if (!b && !c)return null;
        var f = b ? b.toUpperCase() : null;
        return z.uf(a, function (a) {
            return (!f || a.nodeName == f) && (!c || z.pa(a.className) && z.A(a.className.split(/\s+/), c))
        }, !0, d)
    };
    z.uf = function (a, b, c, d) {
        c || (a = a.parentNode);
        c = null == d;
        for (var f = 0; a && (c || f <= d);) {
            if (b(a))return a;
            a = a.parentNode;
            f++
        }
        return null
    };
    z.Ie = function (a) {
        this.Ka = a || z.t.document || window.document
    };
    z.vf = function (a) {
        return z.Pe(a.Ka)
    };
    var wf = function (a) {
        if (a.length) {
            var b = xf.length;
            z.wb(xf, a);
            if (!b) {
                a = xf;
                var c = function () {
                    var b = a.shift(), b = yf(b);
                    a.length && ze(b, c, c, void 0);
                    return b
                };
                c()
            }
        } else(new ve).Rh(null)
    };
    var yf = function (a) {
        var b = {}, c = b.document || window.document, d = window.document.createElement("SCRIPT"),
            f = {DJ: d, hq: void 0}, g = new ve(zf, f), h = null, k = null != b.timeout ? b.timeout : 5E3;
        0 < k && (h = window.setTimeout(function () {
            Af(d, !0);
            ye(g, new Bf(Cf, "Timeout reached for loading script " + a))
        }, k), f.hq = h);
        d.onload = d.onreadystatechange = function () {
            d.readyState && "loaded" != d.readyState && "complete" != d.readyState || (Af(d, b.nY || !1, h), g.Rh(null))
        };
        d.onerror = function () {
            Af(d, !0, h);
            ye(g, new Bf(Df, "Error while loading script " +
                a))
        };
        f = b.attributes || {};
        z.Mb(f, {type: "text/javascript", charset: "UTF-8", src: a});
        Me(d, f);
        Ef(c).appendChild(d);
        return g
    };
    var Ef = function (a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    };
    var zf = function () {
        if (this && this.DJ) {
            var a = this.DJ;
            a && "SCRIPT" == a.tagName && Af(a, !0, this.hq)
        }
    };
    var Af = function (a, b, c) {
        null != c && z.t.clearTimeout(c);
        a.onload = z.p;
        a.onerror = z.p;
        a.onreadystatechange = z.p;
        b && window.setTimeout(function () {
            z.P(a)
        }, 0)
    };
    var Bf = function (a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Ia.call(this, c);
        this.code = a
    };
    var Ff = function () {
        z.G.call(this);
        this.T = new z.xd(this);
        this.hh = {}
    };
    var Gf = function (a, b) {
        a.dispatchEvent(new Hf);
        var c = a.hh[b], d = c.pJ, f = c.PA, g = null;
        try {
            if (a.YJ || a.Ir && (z.If || Rb() && 0 <= z.$a(Tb(), "36")))for (var h = 0; h < d.length; h++)Da(f[h] + " //@ sourceURL\x3d" + d[h]); else Da(f.join("\n"))
        } catch (k) {
            g = k
        }
        a.dispatchEvent(new Jf);
        g ? (c = c.tx, a.dispatchEvent(new Kf(0, g)), c && c(null)) : c.CB && c.CB();
        delete a.hh[b]
    };
    var Jf = function () {
        z.Lc.call(this, Lf)
    };
    var Hf = function () {
        z.Lc.call(this, Mf)
    };
    var Kf = function (a, b) {
        z.Lc.call(this, Nf);
        this.error = b || null
    };
    var Of = function () {
        this.PA = this.pJ = null;
        this.xH = !1;
        this.tx = this.CB = null
    };
    var Pf = function (a, b) {
        z.xc.call(this);
        this.LE = this.kE = null;
        this.DH = b;
        this.xj = [];
        if (a > this.DH)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
        for (var c = 0; c < a; c++)this.xj.push(this.Bn())
    };
    var Qf = function (a, b) {
        a.xj.length < a.DH ? a.xj.push(b) : a.gx(b)
    };
    z.Rf = function () {
        this.Sf = [];
        this.lA = new z.Rd;
        this.Xu = this.tK = this.uK = this.bK = 0;
        this.zk = new z.Rd;
        this.Gw = this.sK = 0;
        this.Sz = 1;
        this.Ur = new Pf(0, 4E3);
        this.Ur.Bn = function () {
            return new Sf
        };
        this.vB = new Pf(0, 50);
        this.vB.Bn = function () {
            return new Tf
        };
        var a = this;
        this.By = new Pf(0, 2E3);
        this.By.Bn = function () {
            return String(a.Sz++)
        };
        this.By.gx = function () {
        }
    };
    var Tf = function () {
        this.gC = this.time = this.count = 0
    };
    var Sf = function () {
    };
    var Uf = function (a, b, c, d) {
        var f = [];
        -1 == c ? f.push("    ") : f.push(Vf(a.Vr - c));
        f.push(" ", Wf(a.Vr - b));
        0 == a.Wr ? f.push(" Start        ") : 1 == a.Wr ? (f.push(" Done "), f.push(Vf(a.WY - a.startTime), " ms ")) : f.push(" Comment      ");
        f.push(d, a);
        0 < a.qK && f.push("[VarAlloc ", a.qK, "] ");
        return f.join("")
    };
    var Vf = function (a) {
        a = Math.round(a);
        var b = "";
        1E3 > a && (b = " ");
        100 > a && (b = "  ");
        10 > a && (b = "   ");
        return b + a
    };
    var Wf = function (a) {
        a = Math.round(a);
        return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
    };
    var Xf = function () {
        z.xc.call(this)
    };
    var Yf = function (a, b) {
        this.es = a;
        this.ga = b
    };
    var Zf = function (a, b) {
        z.xc.call(this);
        this.BE = a;
        this.pb = b;
        this.gA = [];
        this.$z = [];
        this.RE = []
    };
    var $f = function (a, b) {
        a.ku(a.$z, b, void 0)
    };
    var ag = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++)try {
            a[d].eF(b)
        } catch (f) {
            Vb(f), c.push(f)
        }
        a.length = 0;
        return c.length ? c : null
    };
    var bg = function () {
        z.xc.call(this);
        this.Zc = {};
        this.vi = [];
        this.nh = [];
        this.Cp = [];
        this.ud = [];
        this.Om = [];
        this.nr = {};
        this.vE = this.jr = new Zf([], "");
        this.jH = null;
        this.yo = new ve;
        this.JN = this.vD = !1;
        this.Cz = null;
        this.wr = 0;
        this.RK = this.hH = !1;
        this.QH = null
    };
    var cg = function (a) {
        var b = a.tc();
        b != a.hH && (a.Xr(b ? "active" : "idle"), a.hH = b);
        b = 0 < a.Om.length;
        b != a.RK && (a.Xr(b ? "userActive" : "userIdle"), a.RK = b)
    };
    var dg = function (a, b, c, d, f) {
        c.wp(f.Rh, f);
        $f(c, function (a) {
            ye(f, Error(a))
        });
        eg(a, b) ? d && (fg(a, b), cg(a)) : d && fg(a, b)
    };
    var gg = function (a, b) {
        if (a.JN) {
            var c = (0, z.q)(a.qt, a, b);
            ze(a.yo, c, null, void 0)
        } else 0 == a.vi.length ? a.qt(b) : (a.ud.push(b), cg(a))
    };
    var hg = function (a, b) {
        for (var c = 0; c < b.length; c++)if (a.Zc[b[c]].uc())throw Error("Module already loaded: " + b[c]);
        for (var d = [], c = 0; c < b.length; c++)d = d.concat(ig(a, b[c]));
        zb(d);
        return !a.vD && 1 < d.length ? (c = d.shift(), a.ud = z.nb(d, function (a) {
            return [a]
        }).concat(a.ud), [c]) : d
    };
    var ig = function (a, b) {
        var c = [];
        z.A(a.Cp, b) || c.push(b);
        for (var d = z.vb(a.Zc[b].BE); d.length;) {
            var f = d.pop();
            a.Zc[f].uc() || z.A(a.Cp, f) || (c.unshift(f), Array.prototype.unshift.apply(d, a.Zc[f].BE))
        }
        zb(c);
        return c
    };
    z.jg = function (a) {
        var b = bg.ba();
        b.Fd || (b.Zc[a].kp((0, z.q)(b.HF, b)) && kg(b, lg), z.tb(b.Om, a), z.tb(b.vi, a), 0 == b.vi.length && mg(b), b.jH && a == b.jH && (b.yo.ei || b.yo.Rh()), cg(b))
    };
    var eg = function (a, b) {
        if (z.A(a.vi, b))return !0;
        for (var c = 0; c < a.ud.length; c++)if (z.A(a.ud[c], b))return !0;
        return !1
    };
    var fg = function (a, b) {
        z.A(a.Om, b) || a.Om.push(b)
    };
    var ng = function (a, b) {
        1 < a.nh.length ? a.ud = z.nb(a.nh, function (a) {
            return [a]
        }).concat(a.ud) : kg(a, b)
    };
    var kg = function (a, b) {
        var c = a.nh;
        a.vi.length = 0;
        for (var d = [], f = 0; f < a.ud.length; f++) {
            var g = z.mb(a.ud[f], function (a) {
                var b = ig(this, a);
                return z.pb(c, function (a) {
                    return z.A(b, a)
                })
            }, a);
            z.wb(d, g)
        }
        for (f = 0; f < c.length; f++)z.sb(d, c[f]);
        for (f = 0; f < d.length; f++) {
            for (g = 0; g < a.ud.length; g++)z.tb(a.ud[g], d[f]);
            z.tb(a.Om, d[f])
        }
        var h = a.nr.error;
        if (h)for (f = 0; f < h.length; f++)for (var k = h[f], g = 0; g < d.length; g++)k("error", d[g], b);
        for (f = 0; f < c.length; f++)a.Zc[c[f]] && a.Zc[c[f]].Zz(b);
        a.nh.length = 0;
        cg(a)
    };
    var mg = function (a) {
        for (; a.ud.length;) {
            var b = z.mb(a.ud.shift(), function (a) {
                return !this.Zc[a].uc()
            }, a);
            if (0 < b.length) {
                a.qt(b);
                return
            }
        }
        cg(a)
    };
    z.og = function (a, b) {
        var c = bg.ba(), d = c.Zc[a];
        d.uc() ? (0, window.setTimeout)(b) : (0, window.$)('script[src*\x3d"' + d.Gk.replace(/^\/static\//, "") + '"]').length ? d.wp(b) : (d = c.Zc[a], d.uc() ? (c = new Yf(b, void 0), window.setTimeout((0, z.q)(c.eF, c), 0)) : eg(c, a) ? d.wp(b, void 0) : (d.wp(b, void 0), gg(c, [a])))
    };
    z.pg = function (a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    z.qg = function (a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    z.rg = function (a, b, c) {
        if (z.pa(b)) (b = z.sg(a, b)) && (a.style[b] = c); else for (var d in b) {
            c = a;
            var f = b[d], g = z.sg(c, d);
            g && (c.style[g] = f)
        }
    };
    z.sg = function (a, b) {
        var c = tg[b];
        if (!c) {
            var d = z.db(b), c = d;
            void 0 === a.style[d] && (d = (z.D ? "Webkit" : z.B ? "Moz" : z.C ? "ms" : z.ug ? "O" : null) + eb(d), void 0 !== a.style[d] && (c = d));
            tg[b] = c
        }
        return c
    };
    z.vg = function (a, b) {
        var c = z.Je(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    };
    z.wg = function (a, b) {
        return a.currentStyle ? a.currentStyle[b] : null
    };
    z.xg = function (a, b) {
        return z.vg(a, b) || z.wg(a, b) || a.style && a.style[b]
    };
    z.yg = function (a) {
        return z.xg(a, "position")
    };
    z.zg = function (a, b, c) {
        var d;
        b instanceof z.Ge ? (d = b.x, b = b.y) : (d = b, b = c);
        a.style.left = z.Ag(d, !1);
        a.style.top = z.Ag(b, !1)
    };
    z.Bg = function (a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
        z.C && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    };
    z.Cg = function (a, b) {
        var c = z.Dg(a), d = z.Dg(b);
        return new z.Ge(c.x - d.x, c.y - d.y)
    };
    z.Eg = function (a) {
        a = z.Bg(a);
        return new z.Ge(a.left, a.top)
    };
    z.Dg = function (a) {
        if (1 == a.nodeType)return z.Eg(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new z.Ge(a.clientX, a.clientY)
    };
    z.Fg = function (a, b, c) {
        if (b instanceof z.He) c = b.height, b = b.width; else if (void 0 == c)throw Error("missing height argument");
        a.style.width = z.Ag(b, !0);
        a.style.height = z.Ag(c, !0)
    };
    z.Ag = function (a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    var Gg = function (a) {
        return z.Hg(a)
    };
    z.Hg = function (a) {
        var b = Ig;
        if ("none" != z.xg(a, "display"))return b(a);
        var c = a.style, d = c.display, f = c.visibility, g = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = g;
        c.visibility = f;
        return a
    };
    var Ig = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight, d = z.D && !b && !c;
        return z.ka(b) && !d || !a.getBoundingClientRect ? new z.He(b, c) : (a = z.Bg(a), new z.He(a.right - a.left, a.bottom - a.top))
    };
    z.Jg = function (a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity\x3d" + 100 * b + ")")
    };
    z.Q = function (a, b) {
        a.style.display = b ? "" : "none"
    };
    z.Kg = function (a) {
        return "none" != a.style.display
    };
    z.Lg = function (a, b) {
        var c = z.J(b), d = null, f = c.ua();
        if (z.C && f.createStyleSheet) c = d = f.createStyleSheet(), z.C && z.ka(c.cssText) ? c.cssText = a : c.innerHTML = a; else {
            f = z.Le(c.Ka, "HEAD", void 0, void 0)[0];
            f || (d = z.Le(c.Ka, "BODY", void 0, void 0)[0], f = c.B("HEAD"), d.parentNode.insertBefore(f, d));
            var g = d = c.B("STYLE");
            z.C && z.ka(g.cssText) ? g.cssText = a : g.innerHTML = a;
            c.appendChild(f, d)
        }
    };
    z.Mg = function (a) {
        return "rtl" == z.xg(a, "direction")
    };
    z.Ng = function (a, b, c, d) {
        if (/^\d+px?$/.test(b))return (0, window.parseInt)(b, 10);
        var f = a.style[c], g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = f;
        a.runtimeStyle[c] = g;
        return b
    };
    var Og = function (a, b) {
        var c = z.wg(a, b);
        return c ? z.Ng(a, c, "left", "pixelLeft") : 0
    };
    z.Pg = function (a) {
        if (z.C) {
            var b = Og(a, "paddingLeft"), c = Og(a, "paddingRight"), d = Og(a, "paddingTop");
            a = Og(a, "paddingBottom");
            return new z.pg(d, c, a, b)
        }
        b = z.vg(a, "paddingLeft");
        c = z.vg(a, "paddingRight");
        d = z.vg(a, "paddingTop");
        a = z.vg(a, "paddingBottom");
        return new z.pg((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
    };
    var Qg = function (a, b) {
        if ("none" == z.wg(a, b + "Style"))return 0;
        var c = z.wg(a, b + "Width");
        return c in Rg ? Rg[c] : z.Ng(a, c, "left", "pixelLeft")
    };
    z.Sg = function (a) {
        if (z.C && !(9 <= z.Tg)) {
            var b = Qg(a, "borderLeft"), c = Qg(a, "borderRight"), d = Qg(a, "borderTop");
            a = Qg(a, "borderBottom");
            return new z.pg(d, c, a, b)
        }
        b = z.vg(a, "borderLeftWidth");
        c = z.vg(a, "borderRightWidth");
        d = z.vg(a, "borderTopWidth");
        a = z.vg(a, "borderBottomWidth");
        return new z.pg((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
    };
    z.Ug = function () {
        var a = window.document.createElement("DIV");
        a.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px";
        var b = window.document.createElement("DIV");
        z.Fg(b, "200px", "200px");
        a.appendChild(b);
        window.document.body.appendChild(a);
        b = a.offsetWidth - a.clientWidth;
        z.P(a);
        return b
    };
    z.Vg = function () {
    };
    z.Wg = function (a) {
        return ":" + (a.Sz++).toString(36)
    };
    z.R = function (a) {
        z.G.call(this);
        this.da = a || z.J();
        this.og = Xg;
        this.pb = null;
        this.wa = !1;
        this.h = null;
        this.mi = void 0;
        this.Xe = this.Qc = this.Ra = this.Nz = null;
        this.YK = !1
    };
    z.Yg = function (a, b) {
        if (a == b)throw Error("Unable to set parent component");
        if (b && a.Ra && a.pb && z.Zg(a.Ra, a.pb) && a.Ra != b)throw Error("Unable to set parent component");
        a.Ra = b;
        z.R.o.Db.call(a, b)
    };
    z.$g = function (a) {
        return a.Qc ? a.Qc.length : 0
    };
    z.Zg = function (a, b) {
        var c;
        a.Xe && b ? (c = a.Xe, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
        return c
    };
    z.ah = function (a, b) {
        return a.Qc ? a.Qc[b] || null : null
    };
    z.bh = function (a, b, c) {
        a.Qc && z.y(a.Qc, b, c)
    };
    z.ch = function (a) {
        function b() {
            f.onload = f.onerror = f.onreadystatechange = null;
            window.document.body.removeChild(f)
        }

        function c() {
            b();
            d.resolve()
        }

        var d = window.$.Deferred(), f = window.document.createElement("script");
        f.onload = c;
        f.onerror = function () {
            b();
            d.reject()
        };
        f.onreadystatechange = function () {
            "loaded" !== f.readyState && "complete" !== f.readyState || c()
        };
        f.src = a;
        window.document.body.appendChild(f);
        return d.promise()
    };
    z.dh = function () {
        z.eh && z.ch(window.location.protocol + "//res.wx.qq.com/open/js/jweixin-1.0.0.js").then(function () {
            window.wx && (fh(), gh())
        })
    };
    var fh = function () {
        window.$.get("/wechat/jssdkconfig", {url: window.location.href.split("#")[0]}).then(function (a) {
            window.wx.config(Object.assign({}, a, {jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]}))
        })
    };
    var gh = function () {
        window.wx.ready(function () {
            hh().then(function (a) {
                var b = Object.assign({}, ih, a.timeline);
                window.wx.onMenuShareTimeline(b);
                a = Object.assign({}, ih, a.appMessage);
                window.wx.onMenuShareAppMessage(a)
            })
        })
    };
    var hh = function () {
        var a = "", b = "";
        jh ? (a = "answer", b = jh.urlToken) : z.S ? (a = "question", b = z.S.bb) : z.kh ? (a = "collection", b = z.kh.bb) : z.lh ? (a = "people", b = z.lh.bb) : z.mh ? (a = "roundtable", b = z.mh.slug) : z.nh && window.location.pathname.match(/\/topic\/\d+$/) ? (a = "topic", b = z.nh[0][1]) : oh && (a = "lives", b = oh.urlToken);
        return a && b ? window.$.get("/" + a + "/" + b + "/wechat_share_info") : window.Promise.resolve(ih)
    };
    z.ph = function (a, b) {
        this.Kg = this.ke = this.Ei = "";
        this.lm = null;
        this.wj = this.Me = "";
        this.Ce = this.yR = !1;
        var c;
        if (a instanceof z.ph) this.Ce = z.ka(b) ? b : a.Ce, qh(this, a.Ei), c = a.ke, z.rh(this), this.ke = c, c = a.Kg, z.rh(this), this.Kg = c, sh(this, a.lm), c = a.Me, z.rh(this), this.Me = c, th(this, a.ze().clone()), c = a.wj, z.rh(this), this.wj = c; else if (a && (c = String(a).match(z.re))) {
            this.Ce = !!b;
            qh(this, c[1] || "", !0);
            var d = c[2] || "";
            z.rh(this);
            this.ke = uh(d);
            d = c[3] || "";
            z.rh(this);
            this.Kg = uh(d, !0);
            sh(this, c[4]);
            d = c[5] || "";
            z.rh(this);
            this.Me =
                uh(d, !0);
            th(this, c[6] || "", !0);
            c = c[7] || "";
            z.rh(this);
            this.wj = uh(c)
        } else this.Ce = !!b, this.he = new z.vh(null, 0, this.Ce)
    };
    var qh = function (a, b, c) {
        z.rh(a);
        a.Ei = c ? uh(b, !0) : b;
        a.Ei && (a.Ei = a.Ei.replace(/:$/, ""))
    };
    var sh = function (a, b) {
        z.rh(a);
        if (b) {
            b = Number(b);
            if ((0, window.isNaN)(b) || 0 > b)throw Error("Bad port number " + b);
            a.lm = b
        } else a.lm = null
    };
    var th = function (a, b, c) {
        z.rh(a);
        b instanceof z.vh ? (a.he = b, a.he.eB(a.Ce)) : (c || (b = wh(b, xh)), a.he = new z.vh(b, 0, a.Ce));
        return a
    };
    z.rh = function (a) {
        if (a.yR)throw Error("Tried to modify a read-only Uri");
    };
    var yh = function () {
        var a = window.location;
        return a instanceof z.ph ? a.clone() : new z.ph(a, void 0)
    };
    var uh = function (a, b) {
        return a ? b ? (0, window.decodeURI)(a.replace(/%25/g, "%2525")) : (0, window.decodeURIComponent)(a) : ""
    };
    var wh = function (a, b, c) {
        return z.pa(a) ? (a = (0, window.encodeURI)(a).replace(b, Ah), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    };
    var Ah = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    };
    z.vh = function (a, b, c) {
        this.Ja = this.Lb = null;
        this.Yd = a || null;
        this.Ce = !!c
    };
    var Bh = function (a) {
        a.Lb || (a.Lb = new z.Rd, a.Ja = 0, a.Yd && ae(a.Yd, function (b, c) {
            a.add((0, window.decodeURIComponent)(b.replace(/\+/g, " ")), c)
        }))
    };
    var Ch = function (a, b) {
        var c = String(b);
        a.Ce && (c = c.toLowerCase());
        return c
    };
    var Dh = function () {
    };
    var Eh = function () {
    };
    var Fh = function (a) {
        this.Nc = a
    };
    var Gh = function () {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {
        }
        this.Nc = a
    };
    var Hh = function () {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch (b) {
        }
        this.Nc = a
    };
    var Ih = function (a, b) {
        this.eK = a;
        this.xd = null;
        if (z.C && !(9 <= z.Tg)) {
            Jh || (Jh = new z.Rd);
            this.xd = Jh.get(a);
            this.xd || (b ? this.xd = window.document.getElementById(b) : (this.xd = window.document.createElement("userdata"), this.xd.addBehavior("#default#userData"), window.document.body.appendChild(this.xd)), Jh.set(a, this.xd));
            try {
                this.xd.load(this.eK)
            } catch (c) {
                this.xd = null
            }
        }
    };
    var Kh = function (a) {
        return "_" + (0, window.encodeURIComponent)(a).replace(/[.!~*'()%]/g, function (a) {
                return Lh[a]
            })
    };
    var Mh = function (a) {
        try {
            a.xd.save(a.eK)
        } catch (b) {
            throw"Storage mechanism: Quota exceeded";
        }
    };
    var Nh = function (a) {
        return a.xd.XMLDocument.documentElement
    };
    var Oh = function (a, b) {
        this.To = a;
        this.mm = b + "::"
    };
    var Ph = function (a, b) {
        this.nz = "continuation:" + a;
        this.Nc = b || z.Qh;
        this.mG = []
    };
    var Rh = function (a, b) {
        var c = a.gb();
        c.push(b);
        try {
            a.Nc.set(a.nz, JSON.stringify(c))
        } catch (d) {
        }
    };
    var Sh = function (a, b, c, d, f, g) {
        z.pa(a) ? (this.Ud = a == Th ? b : 0, this.Ld = a == Uh ? b : 0, this.Ed = a == Vh ? b : 0, this.od = a == Wh ? b : 0, this.rd = a == Xh ? b : 0, this.vd = a == Yh ? b : 0) : (this.Ud = a || 0, this.Ld = b || 0, this.Ed = c || 0, this.od = d || 0, this.rd = f || 0, this.vd = g || 0)
    };
    var Zh = function (a, b, c) {
        z.qa(a) ? (this.fa = $h(a, b || 0, c || 1), ai(this, c || 1)) : z.ta(a) ? (this.fa = $h(a.getFullYear(), a.getMonth(), a.getDate()), ai(this, a.getDate())) : (this.fa = new Date((0, z.I)()), a = this.fa.getDate(), this.fa.setHours(0), this.fa.setMinutes(0), this.fa.setSeconds(0), this.fa.setMilliseconds(0), ai(this, a))
    };
    var $h = function (a, b, c) {
        b = new Date(a, b, c);
        0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
        return b
    };
    var bi = function (a) {
        a = a.getTimezoneOffset();
        if (0 == a) a = "Z"; else {
            var b = Math.abs(a) / 60, c = Math.floor(b), b = 60 * (b - c);
            a = (0 < a ? "-" : "+") + Ya(c, 2) + ":" + Ya(b, 2)
        }
        return a
    };
    var ai = function (a, b) {
        a.getDate() != b && a.fa.setUTCHours(a.fa.getUTCHours() + (a.getDate() < b ? 1 : -1))
    };
    var ci = function (a, b, c, d, f, g, h) {
        this.fa = z.qa(a) ? new Date(a, b || 0, c || 1, d || 0, f || 0, g || 0, h || 0) : new Date(a ? a.getTime() : (0, z.I)())
    };
    var di = function () {
    };
    var ei = function (a) {
        if ("number" == typeof a) {
            var b = new di;
            b.Ju = a;
            var c;
            c = a;
            if (0 == c) c = "Etc/GMT"; else {
                var d = ["Etc/GMT", 0 > c ? "-" : "+"];
                c = Math.abs(c);
                d.push(Math.floor(c / 60) % 100);
                c %= 60;
                0 != c && d.push(":", Ya(c, 2));
                c = d.join("")
            }
            b.KB = c;
            c = a;
            0 == c ? c = "UTC" : (d = ["UTC", 0 > c ? "+" : "-"], c = Math.abs(c), d.push(Math.floor(c / 60) % 100), c %= 60, 0 != c && d.push(":", c), c = d.join(""));
            a = fi(a);
            b.UB = [c, c];
            b.Fk = {VX: a, MC: a};
            b.$u = [];
            return b
        }
        b = new di;
        b.KB = a.id;
        b.Ju = -a.std_offset;
        b.UB = a.names;
        b.Fk = a.names_ext;
        b.$u = a.transitions;
        return b
    };
    var fi = function (a) {
        var b = ["GMT"];
        b.push(0 >= a ? "+" : "-");
        a = Math.abs(a);
        b.push(Ya(Math.floor(a / 60) % 100, 2), ":", Ya(a % 60, 2));
        return b.join("")
    };
    var gi = function (a, b) {
        for (var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0; d < a.$u.length && c >= a.$u[d];)d += 2;
        return 0 == d ? 0 : a.$u[d - 1]
    };
    var ii = function (a, b) {
        this.Ut = [];
        this.zb = b || ji;
        "number" == typeof a ? ki(this, a) : li(this, a)
    };
    var li = function (a, b) {
        for (mi && (b = b.replace(/\u200f/g, "")); b;)for (var c = 0; c < ni.length; ++c) {
            var d = b.match(ni[c]);
            if (d) {
                d = d[0];
                b = b.substring(d.length);
                0 == c && ("''" == d ? d = "'" : (d = d.substring(1, d.length - 1), d = d.replace(/\'\'/, "'")));
                a.Ut.push({text: d, type: c});
                break
            }
        }
    };
    var ki = function (a, b) {
        var c;
        if (4 > b) c = a.zb.IC[b]; else if (8 > b) c = a.zb.NC[b - 4]; else if (12 > b) c = a.zb.EL[b - 8], c = c.replace("{1}", a.zb.IC[b - 8]), c = c.replace("{0}", a.zb.NC[b - 8]); else {
            ki(a, 10);
            return
        }
        li(a, c)
    };
    var oi = function (a, b) {
        var c;
        c = String(b);
        var d = a.zb || ji;
        if (void 0 !== d.iM) {
            for (var f = [], g = 0; g < c.length; g++) {
                var h = c.charCodeAt(g);
                f.push(48 <= h && 57 >= h ? String.fromCharCode(d.iM + h - 48) : c.charAt(g))
            }
            c = f.join("")
        }
        return c
    };
    var pi = function (a) {
        if (!(a.getHours && a.getSeconds && a.getMinutes))throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
    };
    var qi = function (a, b, c, d, f, g) {
        var h = b.length;
        switch (b.charAt(0)) {
            case "G":
                return c = 0 < d.getFullYear() ? 1 : 0, 4 <= h ? a.zb.GL[c] : a.zb.HL[c];
            case "y":
                return c = d.getFullYear(), 0 > c && (c = -c), 2 == h && (c %= 100), oi(a, Ya(c, h));
            case "M":
                a:switch (c = d.getMonth(), h) {
                    case 5:
                        h = a.zb.KL[c];
                        break a;
                    case 4:
                        h = a.zb.IL[c];
                        break a;
                    case 3:
                        h = a.zb.QL[c];
                        break a;
                    default:
                        h = oi(a, Ya(c + 1, h))
                }
                return h;
            case "k":
                return pi(f), oi(a, Ya(f.getHours() || 24, h));
            case "S":
                return oi(a, (f.getTime() % 1E3 / 1E3).toFixed(Math.min(3, h)).substr(2) + (3 < h ? Ya(0, h - 3) :
                        ""));
            case "E":
                return c = d.getDay(), 4 <= h ? a.zb.hM[c] : a.zb.SL[c];
            case "a":
                return pi(f), h = f.getHours(), a.zb.CL[12 <= h && 24 > h ? 1 : 0];
            case "h":
                return pi(f), oi(a, Ya(f.getHours() % 12 || 12, h));
            case "K":
                return pi(f), oi(a, Ya(f.getHours() % 12, h));
            case "H":
                return pi(f), oi(a, Ya(f.getHours(), h));
            case "c":
                a:switch (c = d.getDay(), h) {
                    case 5:
                        h = a.zb.XL[c];
                        break a;
                    case 4:
                        h = a.zb.$L[c];
                        break a;
                    case 3:
                        h = a.zb.ZL[c];
                        break a;
                    default:
                        h = oi(a, Ya(c, 1))
                }
                return h;
            case "L":
                a:switch (c = d.getMonth(), h) {
                    case 5:
                        h = a.zb.WL[c];
                        break a;
                    case 4:
                        h = a.zb.VL[c];
                        break a;
                    case 3:
                        h = a.zb.YL[c];
                        break a;
                    default:
                        h = oi(a, Ya(c + 1, h))
                }
                return h;
            case "Q":
                return c = Math.floor(d.getMonth() / 3), 4 > h ? a.zb.RL[c] : a.zb.LL[c];
            case "d":
                return oi(a, Ya(d.getDate(), h));
            case "m":
                return pi(f), oi(a, Ya(f.getMinutes(), h));
            case "s":
                return pi(f), oi(a, Ya(f.getSeconds(), h));
            case "v":
                return h = g || ei(c.getTimezoneOffset()), h.KB;
            case "V":
                return a = g || ei(c.getTimezoneOffset()), 2 >= h ? a.KB : 0 < gi(a, c) ? z.ka(a.Fk.FL) ? a.Fk.FL : a.Fk.DST_GENERIC_LOCATION : z.ka(a.Fk.MC) ? a.Fk.MC : a.Fk.STD_GENERIC_LOCATION;
            case "w":
                return c =
                    a.zb.KC, f = new Date(f.getFullYear(), f.getMonth(), f.getDate()), b = a.zb.JC || 0, c = f.valueOf() + 864E5 * (((z.ka(c) ? c : 3) - b + 7) % 7 - ((f.getDay() + 6) % 7 - b + 7) % 7), oi(a, Ya(Math.floor(Math.round((c - (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf()) / 864E5) / 7) + 1, h));
            case "z":
                return a = g || ei(c.getTimezoneOffset()), 4 > h ? a.UB[0 < gi(a, c) ? 2 : 0] : a.UB[0 < gi(a, c) ? 3 : 1];
            case "Z":
                return f = g || ei(c.getTimezoneOffset()), 4 > h ? (h = -(f.Ju - gi(f, c)), a = [0 > h ? "-" : "+"], h = Math.abs(h), a.push(Ya(Math.floor(h / 60) % 100, 2), Ya(h % 60, 2)), h = a.join("")) : h = oi(a,
                    fi(f.Ju - gi(f, c))), h;
            default:
                return ""
        }
    };
    var ri = function (a) {
        var b;
        if ("string" === typeof a) {
            b = new ci(2E3);
            a = (0, z.ab)(a);
            a = a.split(-1 == a.indexOf("T") ? " " : "T");
            var c;
            var d = a[0].match(si);
            if (d) {
                var f = Number(d[2]), g = Number(d[3]), h = Number(d[4]);
                c = Number(d[5]);
                var k = Number(d[6]) || 1;
                b.setFullYear(Number(d[1]));
                h ? (b.setDate(1), b.setMonth(0), b.add(new Sh(Vh, h - 1))) : c ? (b.setMonth(0), b.setDate(1), d = b.getDay() || 7, b.add(new Sh(Vh, (4 >= d ? 1 - d : 8 - d) + (Number(k) + 7 * (Number(c) - 1)) - 1))) : (f && (b.setDate(1), b.setMonth(f - 1)), g && b.setDate(g));
                c = !0
            } else c = !1;
            c && !(c = 2 >
                a.length) && (a = a[1], c = a.match(ti), k = 0, c && ("Z" != c[0] && (k = 60 * c[2] + Number(c[3]), k *= "-" == c[1] ? 1 : -1), k -= b.getTimezoneOffset(), a = a.substr(0, a.length - c[0].length)), (c = a.match(ui)) ? (b.setHours(Number(c[1])), b.setMinutes(Number(c[2]) || 0), b.setSeconds(Number(c[3]) || 0), b.setMilliseconds(c[4] ? 1E3 * c[4] : 0), 0 != k && b.setTime(b.getTime() + 6E4 * k), c = !0) : c = !1);
            b = (c ? b : null).fa
        } else b = new Date(a);
        return b
    };
    z.vi = function (a, b) {
        a = void 0 === a ? new Date : a;
        b = void 0 === b ? new Date : b;
        a = ri(a);
        b = ri(b);
        var c = (b - a) / 1E3;
        if (60 > c)return "刚刚";
        c = (0, window.parseInt)(c / 60);
        if (60 > c)return c + " 分钟前";
        c = (0, window.parseInt)(c / 60);
        if (24 > c)return c + " 小时前";
        var c = b.getFullYear() - a.getFullYear(), d = b.getMonth() - a.getMonth(), f = b.getDate() - a.getDate();
        return 0 === c && 0 === d ? f + " 天前" : 0 === c && 1 === d || 1 === c && -11 === d ? 0 > f ? (new Date(a.getFullYear(), a.getMonth() + 1, 0)).getDate() + f + " 天前" : "1 月前" : 2 > c ? 1 === c && 0 <= d ? "1 年前" : 12 * c + d + " 月前" : c + " 年前"
    };
    var wi = function (a, b) {
        return (new ii(void 0 === b ? "yyyy-MM-dd HH:mm:ss" : b)).format(new Date(a))
    };
    z.xi = function (a) {
        if (window.za.collect && z.ta(a) && a.action) {
            var b = {
                eventAction: a.action,
                eventCategory: a.category,
                eventLabel: a.label,
                eventValue: a.value && (0, window.parseInt)(a.value, 10),
                eventAttributes: a.attributes,
                nonInteractionType: !!a.bI
            };
            a.wc ? Rh(yi, b) : window.za.collect("event", b)
        }
    };
    z.zi = function (a, b, c, d, f) {
        z.xi({category: a, action: b, label: c, value: d, bI: f, attributes: void 0})
    };
    z.Ai = function (a, b, c, d, f) {
        z.xi({wc: !0, category: a, action: b, label: c, value: d, bI: f, attributes: void 0})
    };
    var Bi = function () {
        (0, window.$)(window.document).on("click", "a[data-za-a]", function (a) {
            var b = (0, window.$)(a.target);
            if (a = b.data("za-a")) {
                var c = b.data("za-c"), d = b.data("za-l"), b = b.data("za-v");
                z.Ai(c, a, d, b)
            }
        })
    };
    var Ci = function (a) {
        return function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d)c[d - 0] = arguments[d];
            if (!window.zap) Di.push({fn: a, SM: c}); else if (window.zap.SUPPORTED)try {
                a.apply(null, [].concat(ja(c)))
            } catch (f) {
                window.console && window.console.error(f)
            }
        }
    };
    var Ei = function (a) {
        a = (0, window.$)(a.m ? a.m() : a);
        var b = [], c = [];
        a.add(a.parents()).filter("[data-za-module]").get().reverse().forEach(function (a) {
            var f = a.getAttribute("data-za-module");
            if (f) {
                var g = a.getAttribute("data-za-index");
                "" === g && (g = (0, window.$)(a).siblings("[data-za-index]").andSelf().index(a));
                b.push({module: f, index: g});
                a = (0, window.$.data)(a, "zaRespondMoudleFn");
                c.push("function" === typeof a && a() || {})
            }
        });
        return {path: b, module: c}
    };
    var Fi = function () {
        (0, window.$)(window.document).on("click", "a[href]", function (a) {
            var b = a.currentTarget, c = b.getAttribute("href");
            !c || c.startsWith("#") || "http:" !== b.protocol && "https:" !== b.protocol || (0, z.Gi)(b, {
                action: "OpenUrl",
                element: "IMG" === a.target.nodeName ? "Image" : "Link"
            }, {link: {url: b.href}})
        })
    };
    var Hi = function () {
        var a;
        window.localStorage && window.ArrayBuffer && window.Uint8Array && window.DataView ? (window.localStorage.removeItem("zap:enabled"), a = !0) : a = !1;
        a && window.$.ajax({
            url: "//zhstatic.zhihu.com/assets/zap/1.6.4/zap.js",
            dataType: "script",
            cache: !0
        }).then(function () {
            var a;
            try {
                a = "1" === window.localStorage.getItem("zap:logenabled")
            } catch (c) {
                a = !1
            }
            for ((0, z.Ii)({
                logUrl: Ji,
                enableLog: a,
                userId: z.T.XH,
                responseId: (0, window.$)('meta[http-equiv\x3d"X-Za-Response-Id"]').attr("content"),
                product: "Zhihu"
            }); Di.length;)a =
                Di.shift(), a.fn.apply(a, [].concat(ja(a.SM)));
            Ki();
            Fi()
        })
    };
    z.U = function (a, b, c, d, f) {
        "feed" === a && z.Va(window.location.href, "topstory") && (a = "topstory");
        var g = (0, window.$)("#zh-question-list");
        "feed" === a && g.length && "topstory" === g.attr("data-feedtype") && (a = "topstory");
        Li.track(a, b, c, d, !!f);
        z.zi(a, b, c, d, !!f);
        z.Mi && window.console && window.console.log("trackEvent(new)", z.vb(arguments))
    };
    z.Ni = function () {
        (0, window.$)("#js-openInApp").on("click", function () {
            z.Oi();
            z.U("app-promotion", "click_zhihu_ios_open_dl_link", "header_not_logged_in")
        });
        var a = yh(), b = a.Me;
        "/openinapp_instruction" === b ? (0, window.$)(".openinapp-instruction-page").data("open") && (a = a.ze(), a.kb() && Pi(a.get("app-argument"))) : Qi.test(b) && Pi(b.substring(1))
    };
    z.Oi = function () {
        var a = !z.eh && !Ri, b;
        if (b = (b = (0, window.$)('meta[name\x3d"apple-itunes-app"]').attr("content")) && b.replace(/,\s*/, "\x26")) b = new z.vh(b), a ? Pi(b.get("app-argument")) : (b.add("origin", window.location.href), window.location.href = "/openinapp_instruction?" + b.toString())
    };
    var Pi = function (a) {
        if (a)if (-1 === a.indexOf("zhihu://") && (a = "zhihu://" + a), Si) Ti(a); else if (window.location.href = a, z.Ui && !z.E(9)) {
            var b = !1;
            window.setTimeout(function () {
                b = !0;
                window.location.href = "http://api.zhihu.com/client/download?ct\x3dtop_right_corner\x26utm_source\x3dtop_right_corner\x26utm_medium\x3dmobile_web\x26utm_campaign\x3ddownloadlink"
            }, 200);
            window.setTimeout(function () {
                b && window.location.reload()
            }, 1E3)
        }
    };
    var Ti = function (a) {
        var b = a.replace(/^zhihu/, "intent") + "/#Intent;scheme\x3dzhihu;package\x3dcom.zhihu.android;end",
            c = window.navigator.userAgent.match(/Chrome\/(\d+)/);
        25 <= (c && c[1]) ? window.location = b : Vi(a)
    };
    var Vi = function (a) {
        var b = window.document.createElement("iframe");
        b.hidden = !0;
        b.src = a;
        window.document.body.appendChild(b);
        var c = (0, z.I)();
        window.setTimeout(function () {
            600 > (0, z.I)() - c && (window.location = Wi.jY)
        }, 400)
    };
    z.Xi = function (a) {
        this.Ka = a
    };
    z.Yi = function (a) {
        a = (a.Ka.cookie || "").split(Zi);
        for (var b = [], c = [], d, f, g = 0; f = a[g]; g++)d = f.indexOf("\x3d"), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)));
        return {keys: b, values: c}
    };
    var $i = function () {
        z.aj.remove("actioncontinuationhash", "/")
    };
    z.bj = function (a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    };
    z.cj = function (a, b, c) {
        z.na(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (dj || (dj = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = dj, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    z.ej = function (a, b) {
        var c = a.getAttribute("aria-" + b);
        return null == c || void 0 == c ? "" : String(c)
    };
    z.fj = function (a) {
        if (a.classList)return a.classList;
        a = a.className;
        return z.pa(a) && a.match(/\S+/g) || []
    };
    z.gj = function (a, b) {
        return a.classList ? a.classList.contains(b) : z.A(z.fj(a), b)
    };
    z.hj = function (a, b) {
        a.classList ? a.classList.add(b) : z.gj(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    };
    z.ij = function (a, b) {
        if (a.classList) z.y(b, function (b) {
            z.hj(a, b)
        }); else {
            var c = {};
            z.y(z.fj(a), function (a) {
                c[a] = !0
            });
            z.y(b, function (a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c)a.className += 0 < a.className.length ? " " + d : d
        }
    };
    z.jj = function (a, b) {
        a.classList ? a.classList.remove(b) : z.gj(a, b) && (a.className = z.mb(z.fj(a), function (a) {
                return a != b
            }).join(" "))
    };
    z.kj = function (a, b) {
        a.classList ? z.y(b, function (b) {
            z.jj(a, b)
        }) : a.className = z.mb(z.fj(a), function (a) {
            return !z.A(b, a)
        }).join(" ")
    };
    z.lj = function (a) {
        if (z.B) a = mj(a); else if (z.Uc && z.D)a:switch (a) {
            case 93:
                a = 91;
                break a
        }
        return a
    };
    var mj = function (a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };
    z.nj = function (a) {
        var b = a.offsetLeft, c = a.offsetParent;
        c || "fixed" != z.yg(a) || (c = z.Je(a).documentElement);
        if (!c)return b;
        if (z.B)var d = z.Sg(c), b = b + d.left; else 8 <= z.Tg && !(9 <= z.Tg) && (d = z.Sg(c), b -= d.left);
        return z.Mg(c) ? c.clientWidth - (b + a.offsetWidth) : b
    };
    z.oj = function (a, b, c) {
        z.G.call(this);
        this.target = a;
        this.handle = b || a;
        this.lt = c || new z.qg(window.NaN, window.NaN, window.NaN, window.NaN);
        this.Ka = z.Je(a);
        this.T = new z.xd(this);
        z.Ac(this, this.T);
        this.deltaY = this.deltaX = this.Mu = this.Lu = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.ec = !0;
        this.mj = !1;
        this.WI = !0;
        this.Ay = 0;
        this.Qi = this.OQ = !1;
        z.F(this.handle, ["touchstart", "mousedown"], this.Hm, !1, this)
    };
    var pj = function (a) {
        z.ka(a.og) || (a.og = z.Mg(a.target));
        return a.og
    };
    var qj = function (a, b, c) {
        var d = z.vf(z.J(a.Ka));
        b += d.x - a.nA.x;
        c += d.y - a.nA.y;
        a.nA = d;
        a.deltaX += b;
        a.deltaY += c;
        return new z.Ge(rj(a, a.deltaX), sj(a, a.deltaY))
    };
    var tj = function (a, b, c, d) {
        a.Xw(c, d);
        a.dispatchEvent(new uj("drag", a, b.clientX, b.clientY, b, c, d))
    };
    var rj = function (a, b) {
        var c = a.lt, d = (0, window.isNaN)(c.left) ? null : c.left, c = (0, window.isNaN)(c.width) ? 0 : c.width;
        return Math.min(null != d ? d + c : window.Infinity, Math.max(null != d ? d : -window.Infinity, b))
    };
    var sj = function (a, b) {
        var c = a.lt, d = (0, window.isNaN)(c.top) ? null : c.top, c = (0, window.isNaN)(c.height) ? 0 : c.height;
        return Math.min(null != d ? d + c : window.Infinity, Math.max(null != d ? d : -window.Infinity, b))
    };
    var uj = function (a, b, c, d, f, g, h) {
        z.Lc.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.BD = f;
        this.left = z.ka(g) ? g : b.deltaX;
        this.top = z.ka(h) ? h : b.deltaY;
        this.Qr = b
    };
    z.vj = function (a) {
        z.G.call(this);
        this.h = a;
        a = z.C ? "focusout" : "blur";
        this.RR = z.F(this.h, z.C ? "focusin" : "focus", this, !z.C);
        this.SR = z.F(this.h, a, this, !z.C)
    };
    var wj = function (a, b) {
        this.h = a;
        this.da = b
    };
    var xj = function (a, b) {
        z.R.call(this, b);
        this.QW = !!a;
        this.Zl = null
    };
    var yj = function (a) {
        a.Pe || (a.Pe = a.K().createElement("SPAN"), z.Q(a.Pe, !1), z.nf(a.Pe, !0), a.Pe.style.position = "absolute")
    };
    var zj = function (a, b) {
        a.PH || (a.PH = new wj(a.h, a.da));
        var c = a.PH;
        if (b) {
            c.Ol || (c.Ol = []);
            for (var d = c.da.UO(c.da.ua().body), f = 0; f < d.length; f++) {
                var g = d[f];
                g == c.h || z.ej(g, "hidden") || (z.cj(g, "hidden", !0), c.Ol.push(g))
            }
        } else if (c.Ol) {
            for (f = 0; f < c.Ol.length; f++)c.Ol[f].removeAttribute("aria-hidden");
            c.Ol = null
        }
    };
    var Aj = function (a, b) {
        a.zc && z.Q(a.zc, b);
        a.Pc && z.Q(a.Pc, b);
        z.Q(a.m(), b);
        z.Q(a.Pe, b)
    };
    z.Bj = function (a, b, c) {
        xj.call(this, b, c);
        this.Rc = a || "modal-dialog";
        this.pc = z.Cj()
    };
    z.Dj = function (a) {
        a.m() || a.render()
    };
    var Ej = function (a) {
        z.Dj(a);
        return a.dd
    };
    z.Fj = function (a) {
        z.Dj(a);
        return a.yd
    };
    var Gj = function (a, b) {
        a.fr = b;
        if (a.m()) {
            var c = a.zj();
            c && z.Jg(c, a.fr)
        }
    };
    var Hj = function (a, b) {
        a.cm = b;
        if (a.wa) {
            var c = a.K(), d = a.zj(), f = a.zc;
            b ? (f && c.Us(f, a.m()), c.Us(d, a.m())) : (c.removeNode(f), c.removeNode(d))
        }
        a.V() && zj(a, b)
    };
    var Ij = function (a, b) {
        var c = (0, z.ab)(a.Rc + "-title-draggable").split(" ");
        a.m() && (b ? z.ij(a.zd, c) : z.kj(a.zd, c));
        b && !a.Jb ? (a.Jb = new z.oj(a.m(), a.zd), z.ij(a.zd, c), z.F(a.Jb, "start", a.DV, !1, a)) : !b && a.Jb && (a.Jb.H(), a.Jb = null)
    };
    var Jj = function (a) {
        if (a.zy) {
            var b = a.pc, c = b && b.yw;
            c ? (b = b.get(c), a.dispatchEvent(new Kj(c, b)) && a.G(!1)) : a.G(!1)
        }
    };
    z.Lj = function (a, b) {
        a.pc = b;
        if (a.oc) {
            if (a.pc) {
                var c = a.pc;
                c.h = a.oc;
                c.render()
            } else z.Fe(a.oc, Mj);
            z.Q(a.oc, !!a.pc)
        }
    };
    var Kj = function (a, b) {
        this.type = z.Nj;
        this.key = a;
        this.caption = b
    };
    z.Oj = function (a) {
        this.da = a || z.J();
        z.Rd.call(this)
    };
    z.Cj = function () {
        return (new z.Oj).Bd(Pj.yg, !0).Bd(Pj.Te, !1, !0)
    };
    z.Qj = function (a) {
        var b = !1, c;
        return function () {
            if (b)return c;
            b = !0;
            return c = a.apply(this, arguments)
        }
    };
    z.V = function (a) {
        z.Bj.call(this, a);
        this.pc = null;
        Rj(this)
    };
    var Rj = function (a) {
        var b = window.document.documentElement;
        a.v().g(a, "beforeshow", function () {
            this.cm && (window.document.body.clientWidth < window.innerWidth && z.W.add(b, "modal-doc-overflow"), this.ix = !1, Ij(this, !1), z.W.add(b, "modal-open"), this.ck || ((0, window.$)(this.m()).wrap('\x3cdiv class\x3d"modal-wrapper"\x3e'), this.ck = this.m().parentNode), this.oF && z.W.add(this.m(), "centered"), this.ck.removeAttribute("hidden"))
        }).g(a, "hide", function () {
            this.cm && (1 === (0, window.$)(".modal-wrapper:visible").length && (z.W.remove(b,
                "modal-open"), z.W.remove(b, "modal-doc-overflow")), this.ck && this.ck.setAttribute("hidden", ""))
        });
        z.Bc(a, function () {
            this.ck && (z.P(this.ck), this.ck = null)
        }, a);
        a.mR()
    };
    z.Sj = function (a) {
        a.Wk && a.v().g(a.Pc || a.zc, "click", function () {
            this.Wk && this.G(!1)
        })
    };
    z.Tj = function (a, b) {
        a.h && a.wa && z.qa(b) && (!z.Uj || z.Vj) && (a.h.style.width = z.Ag(b, !0), a.aL = b);
        z.pa(b) && (a.h.style.width = b)
    };
    z.X = function (a, b) {
        b = void 0 === b ? z.p : b;
        var c = new z.V, d = ["yes", "ok"], f = Object.assign({
            open: !0,
            modal: !1,
            title: "消息",
            content: "",
            className: "",
            disposeOnHide: !0,
            buttons: {yes: "确认", cancel: "取消"}
        }, a);
        (function (a, b) {
            b = void 0 === b ? {} : b;
            for (var c = Object.entries(Eb(b)).sort(function (a, b) {
                var c = z.ia(a).next().value, f = z.ia(b).next().value;
                return d.indexOf(c) - d.indexOf(f)
            }), f = new z.Oj, n = z.ia(c), r = n.next(); !r.done; r = n.next()) {
                var w = z.ia(r.value), r = w.next().value, w = w.next().value;
                f.set(r, w, -1 !== d.indexOf(r))
            }
            z.Lj(a, f);
            z.W.enable(a.fi(), "with-button", !!c.length)
        })(c, f.buttons);
        c.g(z.Nj, function (a) {
            return b.call(c, -1 !== d.indexOf(a.key))
        });
        z.W.add(c.fi(), f.className);
        c.Na(f.title);
        c.Op(f.modal);
        c.ia(f.content);
        c.G(f.open);
        c.Bf(f.disposeOnHide);
        f.ha && c.ha();
        return c
    };
    var Wj = function (a) {
        var b = null;
        return function (c) {
            for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f];
            b && !b.Fd && b.H();
            return b = a.apply(null, [].concat(ja(d)))
        }
    };
    z.Xj = function () {
        z.G.call(this)
    };
    var Yj = function () {
        z.G.call(this);
        this.last = 0
    };
    z.Zj = function (a, b) {
        this.type = a;
        this.xf = b
    };
    z.ak = function (a) {
        var b = {
            qq: "/oauth/redirect/login/qqconn?next\x3d",
            sina: "/oauth/redirect/login/sina?next\x3d",
            wechat: z.eh ? "/oauth/redirect/login/wechat_mp?next\x3d" : "/oauth/redirect/login/wechat?next\x3d"
        }[a];
        bk || z.eh || "sina" === a ? window.location.href = b + "/oauth/account_callback\x26from\x3d" + (0, window.encodeURIComponent)(z.be(window.location.href, "next") || window.location.pathname) : window.open(b + "/oauth/account_callback", "_blank", "top\x3d200,left\x3d400,width\x3d600,height\x3d550,directories\x3dno,menubar\x3dno,toolbar\x3dno")
    };
    z.ck = function (a, b) {
        a.g(z.Y, "accountcallback", b)
    };
    z.dk = function (a) {
        z.R.call(this);
        this.Xb = a;
        this.$B = "antispam" === a ? "/antispam/captcha" : "/captcha.gif";
        this.Hz = 8
    };
    var ek = function (a) {
        var b = [], c = a.Hz;
        (0, window.$)(".Captcha-mark", a.W).each(function (a, f) {
            var g = (0, window.$)(f);
            b.push([(0, window.parseFloat)(g.css("left")) + c, (0, window.parseFloat)(g.css("top")) + c])
        });
        a.rF.input_points = b;
        b.length ? a.Xi.val(JSON.stringify(a.rF)) : a.Xi.val("")
    };
    var fk = function (a) {
        a.Nm && (a.rF = {img_size: [a.Kk.width(), a.Kk.height()]}, a.Xi.val(""), gk(a), (0, window.$)(".Captcha-mark", a.W).remove())
    };
    var gk = function (a) {
        a.tL.removeClass("is-hidden");
        a.Xi.next(".error").remove()
    };
    z.hk = function (a) {
        "1" !== z.aj.get("login" === a.Xb ? "l_n_c" : "n_c") ? a.Xi.attr("name", "").addClass("is-ignoreValidation") : (a.Xi.attr("name", "captcha").removeClass("is-ignoreValidation"), a.ju(), a.XJ && (a.Kk.load(function () {
            return a.W.slideDown(300)
        }), a.trackEvent("show", "Image")))
    };
    z.ik = function (a) {
        var b = jk;
        return function () {
            var c = this || z.t, c = c[kk] || (c[kk] = {}), d = b(z.ua(a), arguments);
            return c.hasOwnProperty(d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    };
    var jk = function (a, b) {
        for (var c = [a], d = b.length - 1; 0 <= d; --d)c.push(typeof b[d], b[d]);
        return c.join("\x0B")
    };
    var lk = function (a, b, c) {
        z.G.call(this);
        this.W = (0, window.$)(a);
        this.tW = b;
        this.duration = c
    };
    var mk = function (a) {
        z.V.call(this, "mutiview-dialog");
        this.sD = [];
        this.VI = [];
        this.UI = [];
        this.RT = a;
        this.Bf(!0);
        this.qU = !0
    };
    var nk = function (a, b) {
        var c = (0, window.$)(a.zj()), d = (0, window.$)(b.zj()), f = c.clone();
        f.appendTo("body");
        c.css("visibility", "hidden");
        d.css("visibility", "hidden");
        b.v().g(b, ok, function () {
            f.remove();
            d.css("visibility", "visible")
        });
        a.qU && a.ji() && b.Db(a.ji());
        a.G(!1);
        a.v().g(a, z.pk, function () {
            b.G(!0)
        })
    };
    var qk = function (a, b, c, d) {
        var f = a.Ui, g = a.Jk;
        c = c || f.next(".view");
        d = d || g.next(".title");
        c.length && d.length && (rk(a), c.css("visibility", "visible").removeClass("right"), d.css("visibility", "visible").removeClass("right"), f.addClass("left").onTransitionEnd(function () {
            f.css("visibility", "hidden")
        }, 300), g.addClass("left").onTransitionEnd(function () {
            g.css("visibility", "hidden")
        }, 300), a.Ui = c, a.Jk = d, a.VI.push(f), a.UI.push(g), a.sD.push(a.zq.hasClass("show")), sk(a, b), a.Pt())
    };
    var sk = function (a, b) {
        var c = a.zq;
        b !== a.zq.hasClass("show") && (b ? c.css("visibility", "visible").addClass("show") : window.Modernizr.csstransitions ? c.onTransitionEnd(function () {
            c.css("visibility", "hidden")
        }, 300).removeClass("show") : c.css("visibility", "hidden"))
    };
    var rk = function (a) {
        var b = a.Oc;
        b.addClass("transition").height(b.outerHeight());
        (0, window.setTimeout)(function () {
            b.height(a.Ui.outerHeight()).onTransitionEnd(function () {
                return b.removeClass("transition").css("height", "")
            }, 300)
        }, 17)
    };
    z.tk = function (a, b, c, d, f) {
        function g() {
            var a = b - r;
            0 < a ? (k.text(z.Ka(c(!0, n), a)), r += 1) : h(a)
        }

        function h(a) {
            a = void 0 === a ? b - r : a;
            m.stop();
            n += 1;
            k.text(z.Ka(c(!1, n), a));
            k.removeClass("disabled");
            r = 0
        }

        f = void 0 === f ? !1 : f;
        var k = (0, window.$)(a), m = new z.td(1E3), n = 0, r = 0;
        k.click(function (a) {
            m.enabled || d && !1 === d.call(this, a) || (m.start(), g(), k.addClass("disabled"))
        });
        m.addEventListener("tick", g, !1);
        f && (g(), k.addClass("disabled"));
        m.cancel = h;
        return m
    };
    z.uk = function (a, b) {
        var c = (0, window.$)(a);
        return function () {
            if (!c.hasClass("btn-pending")) {
                var a = b.apply(this, arguments), f = function () {
                    c.removeClass("btn-pending")
                };
                a && a.then && (c.addClass("btn-pending"), a.then(f, f))
            }
            return !1
        }
    };
    z.vk = function (a, b) {
        a && (this.input = a, "string" === typeof b && (b = {text: b}), z.Mb(this.J = {}, this.defaults, b || {}), this.Tg = null, wk(this))
    };
    var wk = function (a) {
        var b = a.input, c = a.J;
        c.text || (c.text = b.getAttribute("placeholder"));
        if (z.xk) a.wk(c.text); else {
            var d = a.label = yk(a);
            a.wk(c.text);
            a.offsetParent().appendChild(d);
            var f = a.Tg = new z.xd(a);
            f.g(b, "blur", a.check);
            f.g(b, "focus", a.hide);
            c.pD && f.g(b, "keydown", a.hide);
            f.g(d, "click", function () {
                this.hide();
                z.Kg(b) && b.focus()
            });
            b.JY = (0, z.q)(a.check, a);
            zk(a);
            a.position();
            a.check()
        }
    };
    var Ak = function (a) {
        if (function (a) {
                return "labels" in a ? a.labels.length : a.id && z.pb(window.document.getElementsByTagName("label"), function (c) {
                        return c.htmlFor === a.id
                    })
            }(a) || z.ej(a, "label") || z.ej(a, "labelledby"))return !0
    };
    var Bk = function (a, b) {
        return z.vg(a, b) || z.wg(a, b) || a.style[b]
    };
    var yk = function (a) {
        var b = a.input, c = z.Sg(b), d = z.O("label"), f = z.Cg(b, a.offsetParent());
        z.rg(d, {
            color: "gray",
            cursor: "text",
            position: "absolute",
            left: f.x + c.left + "px",
            top: f.y + c.top + "px",
            display: a.Zg() ? "block" : "none",
            width: Bk(b, "width"),
            fontSize: Bk(b, "fontSize"),
            lineHeight: Bk(b, "lineHeight"),
            fontFamily: Bk(b, "fontFamily")
        });
        return d
    };
    var zk = function (a) {
        var b = a.input;
        a = a.label;
        Ak(b) || (b.id ? a.htmlFor = b.id : (a.id = z.Wg(z.Vg.ba()), z.cj(b, "labelledby", a.id)))
    };
    z.Ck = function (a) {
        mk.call(this, "SignFlow " + (void 0 === a ? "" : a))
    };
    z.Dk = function (a) {
        a = void 0 === a ? {} : a;
        z.Ck.call(this);
        this.options = a
    };
    var Ek = function (a) {
        a.Rs((0, window.$)(".send-code", a.h), function () {
            window.$.post("/send_login_two_step_verification_code/sms", {phone_num: a.options.data.phone_num}, function (b) {
                b.r && a.showErrors(b.data)
            })
        }).start()
    };
    z.Fk = function (a) {
        z.Ck.call(this, "unable-login");
        this.fw = a
    };
    var Gk = function (a) {
        a.EC = (0, window.$)(".view.start", a.Oc);
        z.Hk ? (z.hk(a.pu), qk(a, !1, a.yv, a.CC)) : ((0, window.$)("button.reset-password", a.EC).click(function () {
            z.hk(a.pu);
            qk(a, !0, a.yv, a.CC)
        }), (0, window.$)("button.sms-login", a.EC).click(function () {
            z.hk(a.Iv);
            qk(a, !0, a.lv, a.jL)
        }))
    };
    var Ik = function (a) {
        a.Jq = (0, window.$)(".view.reset-password", a.Oc);
        a.wL = (0, window.$)(".title.reset-password", a.Se);
        var b = (0, window.$)("form", a.Jq);
        a.De(b, a.nT);
        a.Ss(b);
        var c = (0, window.$)('input[name\x3d"account"]', b),
            d = (0, window.$)('input[name\x3d"verification_code"]', b), f = (0, window.$)(".send-code", b);
        a.WU = a.Rs(f, function () {
            var a = c.val(), f, k;
            this.rf(a) ? (f = "/send_login_verification_code/email", a = {email: a}, k = "邮箱收到的 6 位数验证码") : (f = "/send_login_verification_code/sms", a = {phone_num: a}, k = "手机收到的 6 位数验证码");
            window.$.get(f,
                a, function (a) {
                    a.r && b.data("validator").showErrors(a.data)
                });
            d.val("").attr("placeholder", k)
        })
    };
    var Jk = function (a) {
        a.mv = (0, window.$)(".view.sms-login", a.Oc);
        a.iL = (0, window.$)(".title.sms-login", a.Se);
        var b = (0, window.$)("form", a.mv);
        a.De(b, a.pT);
        var c = (0, window.$)('input[name\x3d"phone_num"]', b), d = (0, window.$)(".send-code", b);
        a.TL = a.Rs(d, function () {
            var a = this;
            window.$.get("/send_login_verification_code/sms", {phone_num: c.val()}, function (c) {
                c.r && (c = c.data, a.wb(c, "account", "phone_num"), b.data("validator").showErrors(c))
            })
        })
    };
    z.Kk = function (a) {
        z.Ck.call(this, "oauth-register");
        this.wh = a
    };
    var Lk = function (a) {
        a.Kf = (0, window.$)(".view.register", a.Oc);
        a.uL = (0, window.$)(".title.register", a.Se);
        var b = (0, window.$)("form", a.Kf);
        a.De(b, a.lp);
        b = (0, window.$)(".captcha-module", a.Kf).get(0);
        a.Bc = new z.dk;
        a.Bc.w(b);
        z.hk(a.Bc)
    };
    var Mk = function (a) {
        a.nv = (0, window.$)(".view.bind-login", a.Oc);
        a.kL = (0, window.$)(".title.bind-login", a.Se);
        var b = (0, window.$)("form", a.nv);
        a.De(b, a.ES);
        a.Ss(b);
        (0, window.$)("input.account", b).val(a.wh.account);
        (0, window.$)("button.unable-login", a.nv).click(function () {
            var b = new z.Fk;
            nk(a, b)
        })
    };
    var Nk = function (a) {
        a.pv = (0, window.$)(".view.bound", a.Oc);
        a.lL = (0, window.$)(".title.bound", a.Se);
        var b = {sina: "微博", qqconn: " QQ ", wechat: "微信", wechat_mp: "微信"}[a.wh.type], c = z.Ka("该%s曾绑定过以下知乎帐号", b),
            b = z.Ka("不绑定，用%s创建新帐号", b);
        (0, window.$)("h2", a.lL).text(c);
        (0, window.$)(".name", a.pv).text(a.wh.fullname);
        (0, window.$)("img", a.pv).attr("src", a.wh.avatar_path);
        (0, window.$)("button.register", a.pv).text(b)
    };
    var Ok = function (a) {
        a.BC = (0, window.$)(".view.registered", a.Oc);
        a.vL = (0, window.$)(".title.registered", a.Se);
        var b = z.Ka("%s 已注册至如下帐号", a.wh.account);
        (0, window.$)("h2", a.vL).text(b);
        (0, window.$)(".name", a.BC).text(a.wh.fullname);
        (0, window.$)("img", a.BC).attr("src", a.wh.avatar_path)
    };
    var Pk = function (a) {
        return {qqconn: "qq", wechat: "wechat", sina: "weibo", wechat_mp: "wechat_mp"}[a.wh.type]
    };
    z.Qk = function (a) {
        a = void 0 === a ? {} : a;
        z.R.call(this);
        this.options = a
    };
    z.Rk = function (a) {
        a = void 0 === a ? {} : a;
        z.Ck.call(this, "login");
        this.options = a
    };
    z.Sk = function (a) {
        z.xc.call(this);
        this.tv = a;
        this.Io = !1
    };
    z.Tk = function (a) {
        z.R.call(this);
        this.qg = a
    };
    z.Uk = function (a, b) {
        z.R.call(this);
        this.Sn = a;
        this.qg = b
    };
    z.Vk = function (a) {
        z.Ck.call(this, "register");
        this.qg = a
    };
    var Wk = function (a) {
        var b = (0, window.$)(".view.register", a.S()), c = new z.Tk(a.qg);
        a.L(c);
        c.bd(a.Hf);
        c.w(b[0]);
        c.g("success", function (b) {
            qk(a, !0);
            var c = b.data;
            b = (0, window.$)(".view.verification", a.S());
            c = new z.Uk(c, a.qg);
            a.L(c);
            c.bd(a.Hf);
            c.w(b[0])
        });
        b.on("click", ".switch-to-login", function () {
            var c = (0, window.$)('input[name\x3d"account"]', b), c = new z.Rk({data: {account: c.val()}});
            c.bd(a.Hf);
            a.na({category: "sign_in", action: "switch_to_sign_in_box_appear"});
            c.Db(a);
            nk(a, c)
        })
    };
    var Xk = function (a) {
        z.G.call(this);
        this.view = this.name = null;
        z.Mb(this.options = {}, this.defaults, a || {})
    };
    var Yk = function (a, b) {
        function c(b) {
            Xk.call(this, b);
            this.name = a
        }

        z.x(c, Xk);
        z.Ca(c.prototype, b);
        Zk[a] = c
    };
    var $k = function (a, b) {
        var c = Zk[a];
        if (!c)throw Error("Cannot find constructor");
        return new c(b)
    };
    z.al = function (a) {
        z.R.call(this);
        z.Mb(this.J = {}, this.defaults, a || {});
        this.source = this.J.source;
        this.promise = window.$.Deferred().resolve();
        this.Rb = {}
    };
    var bl = function (a, b, c) {
        a.wa && z.y(a.gb(), b, c);
        a.v().g(a, "itemcreated", function (a) {
            b.call(c, a.item)
        })
    };
    var cl = function (a) {
        a.Ac && (z.P(a.Ac), a.Ac = null);
        a.dispatchEvent("complete")
    };
    z.dl = function (a, b) {
        var c = Array.prototype.slice.call(arguments), d = c.shift();
        if ("undefined" == typeof d)throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (a, b, d, k, m, n, r, w) {
            if ("%" == n)return "%";
            var H = c.shift();
            if ("undefined" == typeof H)throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = H;
            return el[n].apply(null, arguments)
        })
    };
    z.fl = function (a, b, c) {
        z.xc.call(this);
        this.$j = null != c ? (0, z.q)(a, c) : a;
        this.Yg = b;
        this.cl = (0, z.q)(this.zT, this);
        this.dw = []
    };
    z.gl = function (a) {
        z.G.call(this);
        this.viewport = a || window;
        this.size = null;
        this.hN = z.Pg(window.document.body).top;
        this.ga = new z.xd(this);
        this.gq = null;
        this.cO = 250;
        this.hc();
        (0, window.setTimeout)((0, z.q)(this.update, this))
    };
    var hl = function (a, b, c) {
        b.v().g(a, "update", function (a) {
            var f;
            z.Vc(b) ? f = b.hasListener("nearbottom", void 0) : (f = z.ed(b), f = !!f && f.hasListener("nearbottom", void 0));
            f && c(a.target.size) && b.dispatchEvent("nearbottom")
        })
    };
    var il = function (a) {
        z.G.call(this);
        this.In = this.Am = {};
        this.ft = 0;
        this.aP = Ob(jl);
        this.hW = Ob(kl);
        this.bD = !0;
        this.FM = this.JM = !1;
        this.nS = !0;
        this.IM = !1;
        this.Mv = null;
        this.bh = a;
        z.F(this.bh, "keydown", this.mf, !1, this);
        z.B && z.F(this.bh, "keyup", this.VF, !1, this);
        z.ll && !z.B && (z.F(this.bh, "keypress", this.jG, !1, this), z.F(this.bh, "keyup", this.kG, !1, this))
    };
    var ml = function (a) {
        this.Df = a || null;
        this.next = a ? null : {}
    };
    var nl = function (a, b) {
        var c;
        if (z.pa(b[a])) c = z.nb(ol(b[a]), function (a) {
            return a.keyCode & 255 | a.oS << 8
        }); else {
            var d = b, f = a;
            z.na(b[a]) && (d = b[a], f = 0);
            for (c = []; f < d.length; f += 2)c.push(d[f] & 255 | d[f + 1] << 8)
        }
        return c
    };
    var ol = function (a) {
        a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
        a = a.split(" ");
        for (var b = [], c, d = 0; c = a[d]; d++) {
            var f = c.split("+"), g = null;
            c = 0;
            for (var h, k = 0; h = f[k]; k++) {
                switch (h) {
                    case "shift":
                        c |= 1;
                        continue;
                    case "ctrl":
                        c |= 2;
                        continue;
                    case "alt":
                        c |= 4;
                        continue;
                    case "meta":
                        c |= 8;
                        continue
                }
                f = h;
                if (!pl) {
                    g = {};
                    h = void 0;
                    for (h in z.ql)g[z.ql[h]] = z.lj((0, window.parseInt)(h, 10));
                    pl = g
                }
                g = pl[f];
                break
            }
            b.push({keyCode: g, oS: c})
        }
        return b
    };
    var rl = function (a) {
        return z.ll && !z.B && a.ctrlKey && a.altKey && !a.shiftKey
    };
    var sl = function (a, b, c) {
        var d = b.shift(), f = a[d];
        if (f && (0 == b.length || f.Df))throw Error("Keyboard shortcut conflicts with existing shortcut");
        b.length ? (d = d.toString(), f = new ml, f = d in a ? a[d] : a[d] = f, sl(f.next, b, c)) : a[d] = new ml(c)
    };
    var tl = function (a, b) {
        var c = b.shift(), d = a[c];
        d && (0 == b.length ? d.Df && delete a[c] : d.next && (tl(d.next, b), z.Jb(d.next) && delete a[c]))
    };
    var ul = function (a, b, c) {
        z.Lc.call(this, a, c);
        this.identifier = b
    };
    var vl = function (a) {
        z.xc.call(this);
        this.hc(a)
    };
    z.wl = function (a, b) {
        a.kn.Vb = b;
        return a
    };
    var xl = function (a) {
        z.R.call(this);
        this.Pj = -1;
        z.Mb(this.J = {}, this.defaults, a || {})
    };
    var yl = function (a, b) {
        if (b !== a.index()) {
            var c = a.size(), d = c - 1;
            a.J.vN && (b > d ? b = 0 : 0 > b && (b = d));
            a.dispatchEvent({data: {index: b, size: c}, type: "action"});
            0 > b || b > d || (a.Pj = b, a.fp(zl(a)))
        }
    };
    var zl = function (a) {
        return a.items()[a.index()]
    };
    z.Al = function (a) {
        xl.call(this, a);
        this.xL = (0, window.$)("html, body")
    };
    var Bl = function (a) {
        return {
            k: {action: a.prev, Vb: {group: "导航", name: "上一条目"}},
            j: {action: a.next, Vb: {group: "导航", name: "下一条目"}},
            "g g": {action: a.first, Vb: {group: "导航", name: "第一个条目"}},
            "shift+g": {action: a.last, Vb: {group: "导航", name: "最后一个条目"}},
            "shift+k": {action: a.pV, Vb: {group: "导航", name: "屏幕上移"}},
            "shift+j": {action: a.kV, Vb: {group: "导航", name: "屏幕下移"}}
        }
    };
    z.Cl = function (a) {
        z.al.call(this, a)
    };
    z.ba = [];
    ea = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global ? window.global : this;
    ga = 0;
    z.je = z.je || {};
    z.t = this;
    z.va = "closure_uid_" + (1E9 * Math.random() >>> 0);
    wa = 0;
    z.I = Date.now || function () {
            return +new Date
        };
    Ea = null;
    var Ke;
    z.x(Ia, Error);
    Ia.prototype.name = "CustomError";
    var Pa, Qa, Ra, Sa, Ta, Ua, Oa, Za;
    z.ab = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    Pa = /&/g;
    Qa = /</g;
    Ra = />/g;
    Sa = /"/g;
    Ta = /'/g;
    Ua = /\x00/g;
    Oa = /[\x00&<>"']/;
    Za = String.prototype.repeat ? function (a, b) {
        return a.repeat(b)
    } : function (a, b) {
        return Array(b + 1).join(a)
    };
    z.Dl = 2147483648 * Math.random() | 0;
    fb.prototype.get = function () {
        var a;
        0 < this.Ht ? (this.Ht--, a = this.Es, this.Es = a.next, a.next = null) : a = this.SN();
        return a
    };
    fb.prototype.put = function (a) {
        this.Ep(a);
        this.Ht < this.NR && (this.Ht++, a.next = this.Es, this.Es = a)
    };
    var dc = new fb(function () {
        return new hb
    }, function (a) {
        a.reset()
    }, 100);
    gb.prototype.add = function (a, b) {
        var c = dc.get();
        c.set(a, b);
        this.hv ? this.hv.next = c : this.Rm = c;
        this.hv = c
    };
    gb.prototype.remove = function () {
        var a = null;
        this.Rm && (a = this.Rm, this.Rm = this.Rm.next, this.Rm || (this.hv = null), a.next = null);
        return a
    };
    hb.prototype.set = function (a, b) {
        this.fn = a;
        this.scope = b;
        this.next = null
    };
    hb.prototype.reset = function () {
        this.next = this.scope = this.fn = null
    };
    z.El = z.ib(!1);
    z.Fl = z.ib(!0);
    z.Gl = z.ib(null);
    a:{
        var Hl = z.t.navigator;
        if (Hl) {
            var Il = Hl.userAgent;
            if (Il) {
                z.Bb = Il;
                break a
            }
        }
        z.Bb = ""
    }
    ;
    var Nb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var cc;
    var Yb, $b = !1, ac = new gb;
    var fc = 0, hc = 2, ic = 3;
    jc.prototype.reset = function () {
        this.context = this.gm = this.gp = this.fj = null;
        this.always = !1
    };
    var lc = new fb(function () {
        return new jc
    }, function (a) {
        a.reset()
    }, 100);
    ec.prototype.then = function (a, b, c) {
        return rc(this, z.sa(a) ? a : null, z.sa(b) ? b : null, c)
    };
    Fa(ec);
    ec.prototype.cancel = function (a) {
        this.N == fc && Xb(function () {
            var b = new sc(a);
            mc(this, b)
        }, this)
    };
    ec.prototype.BW = function (a) {
        this.N = fc;
        gc(this, hc, a)
    };
    ec.prototype.DW = function (a) {
        this.N = fc;
        gc(this, ic, a)
    };
    ec.prototype.Xr = function () {
        for (var a = null; a = nc(this);)oc(this, a, this.N, this.oh);
        this.yx = !1
    };
    var wc = Vb;
    z.x(sc, Ia);
    sc.prototype.name = "cancel";
    var yc = 0, zc = {};
    z.xc.prototype.Fd = !1;
    z.xc.prototype.H = function () {
        if (!this.Fd && (this.Fd = !0, this.D(), 0 != yc)) {
            var a = z.ua(this);
            delete zc[a]
        }
    };
    z.xc.prototype.D = function () {
        if (this.jk)for (; this.jk.length;)this.jk.shift()()
    };
    var Ic, Ml;
    z.ug = Pb();
    z.C = Qb();
    z.Gc = z.Ab("Edge");
    z.Jl = z.Gc || z.C;
    z.B = z.Ab("Gecko") && !(z.Va(z.Bb.toLowerCase(), "webkit") && !z.Ab("Edge")) && !(z.Ab("Trident") || z.Ab("MSIE")) && !z.Ab("Edge");
    z.D = z.Va(z.Bb.toLowerCase(), "webkit") && !z.Ab("Edge");
    z.Uj = z.D && z.Ab("Mobile");
    z.Uc = z.Ab("Macintosh");
    z.ll = z.Ab("Windows");
    z.Kl = z.Ab("Linux") || z.Ab("CrOS");
    z.Ll = z.Ec();
    z.Jc = function () {
        if (z.ug && z.t.opera) {
            var a;
            var b = z.t.opera.version;
            try {
                a = b()
            } catch (c) {
                a = b
            }
            return a
        }
        a = "";
        (b = Fc()) && (a = b ? b[1] : "");
        return z.C && (b = Hc(), b > (0, window.parseFloat)(a)) ? String(b) : a
    }();
    Ic = {};
    Ml = z.t.document;
    z.Tg = Ml && z.C ? Hc() || ("CSS1Compat" == Ml.compatMode ? (0, window.parseInt)(z.Jc, 10) : 5) : void 0;
    var Rc = !z.C || 9 <= z.Tg, kd = !z.C || 9 <= z.Tg, Nl = z.C && !z.E("9");
    !z.D || z.E("528");
    z.B && z.E("1.9b") || z.C && z.E("8") || z.ug && z.E("9.5") || z.D && z.E("528");
    z.B && !z.E("8") || z.C && z.E("9");
    Kc.prototype.toString = function () {
        return this.id
    };
    z.Lc.prototype.stopPropagation = function () {
        this.rk = !0
    };
    z.Lc.prototype.preventDefault = function () {
        this.defaultPrevented = !0;
        this.wJ = !1
    };
    z.Ol = z.C ? "focusin" : "DOMFocusIn";
    Nc[" "] = z.p;
    z.x(z.Pc, z.Lc);
    var Sc = [1, 4, 2];
    z.Pc.prototype.init = function (a, b) {
        var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var f = a.relatedTarget;
        f ? z.B && (z.Oc(f, "nodeName") || (f = null)) : "mouseover" == c ? f = a.fromElement : "mouseout" == c && (f = a.toElement);
        this.relatedTarget = f;
        null === d ? (this.offsetX = z.D || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = z.D || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ?
            a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.wA = z.Uc ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.gc = a;
        a.defaultPrevented && this.preventDefault()
    };
    z.Pc.prototype.stopPropagation = function () {
        z.Pc.o.stopPropagation.call(this);
        this.gc.stopPropagation ? this.gc.stopPropagation() : this.gc.cancelBubble = !0
    };
    z.Pc.prototype.preventDefault = function () {
        z.Pc.o.preventDefault.call(this);
        var a = this.gc;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, Nl)try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    z.Pc.prototype.wF = z.aa(0);
    var Wc = "closure_listenable_" + (1E6 * Math.random() | 0), Yc = 0;
    z.e = z.$c.prototype;
    z.e.add = function (a, b, c, d, f) {
        var g = a.toString();
        a = this.ic[g];
        a || (a = this.ic[g] = [], this.pq++);
        var h = bd(a, b, d, f);
        -1 < h ? (b = a[h], c || (b.mr = !1)) : (b = new Xc(b, this.src, g, !!d, f), b.mr = c, a.push(b));
        return b
    };
    z.e.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.ic))return !1;
        var f = this.ic[a];
        b = bd(f, b, c, d);
        return -1 < b ? (Zc(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete this.ic[a], this.pq--), !0) : !1
    };
    z.e.removeAll = function (a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.ic)if (!a || c == a) {
            for (var d = this.ic[c], f = 0; f < d.length; f++)++b, Zc(d[f]);
            delete this.ic[c];
            this.pq--
        }
        return b
    };
    z.e.El = z.aa(2);
    z.e.Zn = function (a, b, c, d) {
        a = this.ic[a.toString()];
        var f = -1;
        a && (f = bd(a, b, c, d));
        return -1 < f ? a[f] : null
    };
    z.e.hasListener = function (a, b) {
        var c = z.ka(a), d = c ? a.toString() : "", f = z.ka(b);
        return z.Fb(this.ic, function (a) {
            for (var h = 0; h < a.length; ++h)if (!(c && a[h].type != d || f && a[h].dl != b))return !0;
            return !1
        })
    };
    var fd = "closure_lm_" + (1E6 * Math.random() | 0), od = {}, id = 0,
        rd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    z.x(z.G, z.xc);
    z.G.prototype[Wc] = !0;
    z.e = z.G.prototype;
    z.e.ji = function () {
        return this.pA
    };
    z.e.Db = function (a) {
        this.pA = a
    };
    z.e.addEventListener = function (a, b, c, d) {
        z.F(this, a, b, c, d)
    };
    z.e.removeEventListener = function (a, b, c, d) {
        z.md(this, a, b, c, d)
    };
    z.e.dispatchEvent = function (a) {
        var b, c = this.ji();
        if (c)for (b = []; c; c = c.ji())b.push(c);
        var c = this.nM, d = a.type || a;
        if (z.pa(a)) a = new z.Lc(a, c); else if (a instanceof z.Lc) a.target = a.target || c; else {
            var f = a;
            a = new z.Lc(d, c);
            z.Mb(a, f)
        }
        var f = !0, g;
        if (b)for (var h = b.length - 1; !a.rk && 0 <= h; h--)g = a.currentTarget = b[h], f = z.sd(g, d, !0, a) && f;
        a.rk || (g = a.currentTarget = c, f = z.sd(g, d, !0, a) && f, a.rk || (f = z.sd(g, d, !1, a) && f));
        if (b)for (h = 0; !a.rk && h < b.length; h++)g = a.currentTarget = b[h], f = z.sd(g, d, !1, a) && f;
        return f
    };
    z.e.D = function () {
        z.G.o.D.call(this);
        this.Zd && this.Zd.removeAll(void 0);
        this.pA = null
    };
    z.e.g = function (a, b, c, d) {
        return this.Zd.add(String(a), b, !1, c, d)
    };
    z.e.ya = function (a, b, c, d) {
        return this.Zd.add(String(a), b, !0, c, d)
    };
    z.e.qa = function (a, b, c, d) {
        return this.Zd.remove(String(a), b, c, d)
    };
    z.e.El = z.aa(1);
    z.e.Zn = function (a, b, c, d) {
        return this.Zd.Zn(String(a), b, c, d)
    };
    z.e.hasListener = function (a, b) {
        return this.Zd.hasListener(z.ka(a) ? String(a) : void 0, b)
    };
    z.x(z.td, z.G);
    z.td.prototype.enabled = !1;
    z.ud = z.t;
    z.e = z.td.prototype;
    z.e.ma = null;
    z.e.setInterval = function (a) {
        this.Yg = a;
        this.ma && this.enabled ? (this.stop(), this.start()) : this.ma && this.stop()
    };
    z.e.mW = function () {
        if (this.enabled) {
            var a = (0, z.I)() - this.wz;
            0 < a && a < .8 * this.Yg ? this.ma = this.Jm.setTimeout(this.qw, this.Yg - a) : (this.ma && (this.Jm.clearTimeout(this.ma), this.ma = null), this.dispatchEvent("tick"), this.enabled && (this.ma = this.Jm.setTimeout(this.qw, this.Yg), this.wz = (0, z.I)()))
        }
    };
    z.e.start = function () {
        this.enabled = !0;
        this.ma || (this.ma = this.Jm.setTimeout(this.qw, this.Yg), this.wz = (0, z.I)())
    };
    z.e.stop = function () {
        this.enabled = !1;
        this.ma && (this.Jm.clearTimeout(this.ma), this.ma = null)
    };
    z.e.D = function () {
        z.td.o.D.call(this);
        this.stop();
        delete this.Jm
    };
    z.x(z.xd, z.xc);
    var zd = [];
    z.e = z.xd.prototype;
    z.e.g = function (a, b, c, d) {
        return z.yd(this, a, b, c, d)
    };
    z.e.ya = function (a, b, c, d) {
        return Ad(this, a, b, c, d)
    };
    z.e.qa = function (a, b, c, d, f) {
        if (z.na(b))for (var g = 0; g < b.length; g++)this.qa(a, b[g], c, d, f); else c = c || this.handleEvent, f = f || this.ga || this, c = z.cd(c), d = !!d, b = z.Vc(a) ? a.Zn(b, c, d, f) : a ? (a = z.ed(a)) ? a.Zn(b, c, d, f) : null : null, b && (z.nd(b), delete this.Za[b.key]);
        return this
    };
    z.e.removeAll = function () {
        z.Db(this.Za, function (a, b) {
            this.Za.hasOwnProperty(b) && z.nd(a)
        }, this);
        this.Za = {}
    };
    z.e.D = function () {
        z.xd.o.D.call(this);
        this.removeAll()
    };
    z.e.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    z.Bd.prototype.Nj = !0;
    z.Cd = {};
    z.Bd.prototype.Sg = function () {
        return this.CA
    };
    z.Bd.prototype.wo = function (a) {
        this.CA = a;
        return this
    };
    z.Pl = (new z.Bd).wo("");
    z.Ed.prototype.Jy = !0;
    z.Ed.prototype.Bl = z.aa(3);
    z.Ed.prototype.Nj = !0;
    z.Ed.prototype.Sg = function () {
        return this.qk
    };
    var Fd = {};
    z.Ed.prototype.wo = function (a, b) {
        this.qk = a;
        this.EE = b;
        return this
    };
    z.Hd("\x3c!DOCTYPE html\x3e", 0);
    var Mj = z.Hd("", 0);
    z.Ql = Math.sign || function (a) {
            return 0 < a ? 1 : 0 > a ? -1 : a
        };
    z.Od = "StopIteration" in z.t ? z.t.StopIteration : {message: "StopIteration", stack: ""};
    z.Ld.prototype.next = function () {
        throw z.Od;
    };
    z.Ld.prototype.gd = function () {
        return this
    };
    z.e = z.Rd.prototype;
    z.e.kb = function () {
        return this.Ja
    };
    z.e.Wc = function () {
        z.Td(this);
        for (var a = [], b = 0; b < this.Za.length; b++)a.push(this.Ib[this.Za[b]]);
        return a
    };
    z.e.ld = function () {
        z.Td(this);
        return this.Za.concat()
    };
    z.e.Of = function (a) {
        return z.Ud(this.Ib, a)
    };
    z.e.Xh = z.aa(6);
    z.e.equals = function (a, b) {
        if (this === a)return !0;
        if (this.Ja != a.kb())return !1;
        var c = b || Sd;
        z.Td(this);
        for (var d, f = 0; d = this.Za[f]; f++)if (!c(this.get(d), a.get(d)))return !1;
        return !0
    };
    z.e.Zg = function () {
        return 0 == this.Ja
    };
    z.e.clear = function () {
        this.Ib = {};
        this.xq = this.Ja = this.Za.length = 0
    };
    z.e.remove = function (a) {
        return z.Ud(this.Ib, a) ? (delete this.Ib[a], this.Ja--, this.xq++, this.Za.length > 2 * this.Ja && z.Td(this), !0) : !1
    };
    z.e.get = function (a, b) {
        return z.Ud(this.Ib, a) ? this.Ib[a] : b
    };
    z.e.set = function (a, b) {
        z.Ud(this.Ib, a) || (this.Ja++, this.Za.push(a), this.xq++);
        this.Ib[a] = b
    };
    z.e.addAll = function (a) {
        var b;
        a instanceof z.Rd ? (b = a.ld(), a = a.Wc()) : (b = z.Hb(a), a = z.Gb(a));
        for (var c = 0; c < b.length; c++)this.set(b[c], a[c])
    };
    z.e.forEach = function (a, b) {
        for (var c = this.ld(), d = 0; d < c.length; d++) {
            var f = c[d], g = this.get(f);
            a.call(b, g, f, this)
        }
    };
    z.e.clone = function () {
        return new z.Rd(this)
    };
    z.e.gd = function (a) {
        z.Td(this);
        var b = 0, c = this.xq, d = this, f = new z.Ld;
        f.next = function () {
            if (c != d.xq)throw Error("The map has changed since the iterator was created");
            if (b >= d.Za.length)throw z.Od;
            var f = d.Za[b++];
            return a ? f : d.Ib[f]
        };
        return f
    };
    z.x(Vd, z.xc);
    Vd.prototype.$x = function () {
        return this.qu
    };
    Vd.prototype.D = function () {
        Vd.o.D.call(this);
        this.qu = this.Gk = null
    };
    z.Rl = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    Wd.prototype.ED = null;
    var Sl;
    z.x(Zd, Wd);
    Sl = new Zd;
    var ce;
    z.re = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
    ce = /#|$/;
    z.x(z.de, z.G);
    var ee = "", se = /^https?$/i, Tl = ["POST", "PUT"];
    z.e = z.de.prototype;
    z.e.send = function (a, b, c, d) {
        if (this.ea)throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.vz + "; newUri\x3d" + a);
        b = b ? b.toUpperCase() : "GET";
        this.vz = a;
        this.ct = "";
        this.sx = !1;
        this.Jh = !0;
        this.ea = this.jv ? $d(this.jv) : $d(Sl);
        this.iv = this.jv ? Xd(this.jv) : Xd(Sl);
        this.ea.onreadystatechange = (0, z.q)(this.vI, this);
        this.wU && "onprogress" in this.ea && (this.ea.onprogress = (0, z.q)(function (a) {
            this.uI(a, !0)
        }, this), this.ea.upload && (this.ea.upload.onprogress = (0, z.q)(this.uI, this)));
        try {
            this.Ky = !0,
                this.ea.open(b, String(a), !0), this.Ky = !1
        } catch (g) {
            this.Tr(5, g);
            return
        }
        a = c || "";
        var f = this.headers.clone();
        d && Kd(d, function (a, b) {
            f.set(b, a)
        });
        d = z.qb(f.ld(), ge);
        c = z.t.FormData && a instanceof z.t.FormData;
        !z.A(Tl, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
        f.forEach(function (a, b) {
            this.ea.setRequestHeader(b, a)
        }, this);
        this.rJ && (this.ea.responseType = this.rJ);
        Ib(this.ea, "withCredentials") && (this.ea.withCredentials = this.aX);
        try {
            qe(this), 0 < this.Su && ((this.fC = fe(this.ea)) ?
                (this.ea.timeout = this.Su, this.ea.ontimeout = (0, z.q)(this.hq, this)) : this.Ru = z.vd(this.hq, this.Su, this)), this.Ls = !0, this.ea.send(a), this.Ls = !1
        } catch (g) {
            this.Tr(5, g)
        }
    };
    z.e.hq = function () {
        "undefined" != typeof z.je && this.ea && (this.ct = "Timed out after " + this.Su + "ms, aborting", this.dispatchEvent("timeout"), this.abort(8))
    };
    z.e.Tr = function (a, b) {
        this.Jh = !1;
        this.ea && (this.Oj = !0, this.ea.abort(), this.Oj = !1);
        this.ct = b;
        he(this);
        oe(this)
    };
    z.e.abort = function () {
        this.ea && this.Jh && (this.Jh = !1, this.Oj = !0, this.ea.abort(), this.Oj = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), oe(this))
    };
    z.e.D = function () {
        this.ea && (this.Jh && (this.Jh = !1, this.Oj = !0, this.ea.abort(), this.Oj = !1), oe(this, !0));
        z.de.o.D.call(this)
    };
    z.e.vI = function () {
        this.Fd || (this.Ky || this.Ls || this.Oj ? ie(this) : this.jT())
    };
    z.e.jT = function () {
        ie(this)
    };
    z.e.uI = function (a, b) {
        this.dispatchEvent(pe(a, "progress"));
        this.dispatchEvent(pe(a, b ? "downloadprogress" : "uploadprogress"))
    };
    z.e.tc = function () {
        return !!this.ea
    };
    z.e.Ge = function () {
        return 4 == ke(this)
    };
    z.e.getResponseHeader = function (a) {
        return this.ea && this.Ge() ? this.ea.getResponseHeader(a) : void 0
    };
    z.e.getAllResponseHeaders = function () {
        return this.ea && this.Ge() ? this.ea.getAllResponseHeaders() : ""
    };
    z.x(ue, z.G);
    z.e = ue.prototype;
    z.e.$x = function () {
        return this.Nl.$x()
    };
    z.e.load = function () {
        for (var a = this.T, b = this.Nl.Gk, c = 0; c < b.length; c++) {
            var d = new z.de;
            a.g(d, "complete", (0, z.q)(this.IP, this, c));
            d.send(b[c])
        }
    };
    z.e.IP = function (a, b) {
        var c = b.target;
        ne(c) ? this.uy(a, c) : this.my(a, c)
    };
    z.e.uy = function (a, b) {
        var c = z.te(b);
        this.Nl.qu[a] = c;
        a:{
            var d = this.Nl, c = d.qu;
            if (c.length == d.Gk.length) {
                for (d = 0; d < c.length; d++)if (null == c[d]) {
                    c = !1;
                    break a
                }
                c = !0
            } else c = !1
        }
        c && this.dispatchEvent("success");
        b.H()
    };
    z.e.my = function (a, b) {
        this.dispatchEvent("error");
        b.H()
    };
    z.e.D = function () {
        ue.o.D.call(this);
        this.T.H();
        this.T = null;
        this.Nl.H();
        this.Nl = null
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
    z.e = ve.prototype;
    z.e.cancel = function (a) {
        if (this.ei) this.oh instanceof ve && this.oh.cancel(); else {
            if (this.Ra) {
                var b = this.Ra;
                delete this.Ra;
                a ? b.cancel(a) : (b.rw--, 0 >= b.rw && b.cancel())
            }
            this.gI ? this.gI.call(this.zE, this) : this.oB = !0;
            this.ei || ye(this, new Ee(this))
        }
    };
    z.e.gE = function (a, b) {
        this.mw = !1;
        we(this, a, b)
    };
    z.e.Th = function () {
        if (this.ei) {
            if (!this.oB)throw new De(this);
            this.oB = !1
        }
    };
    z.e.Rh = function (a) {
        this.Th();
        we(this, !0, a)
    };
    z.e.then = function (a, b, c) {
        var d, f, g = new ec(function (a, b) {
            d = a;
            f = b
        });
        ze(this, d, function (a) {
            a instanceof Ee ? g.cancel() : f(a)
        });
        return g.then(a, b, c)
    };
    Fa(ve);
    z.x(De, Ia);
    De.prototype.message = "Deferred has already fired";
    De.prototype.name = "AlreadyCalledError";
    z.x(Ee, Ia);
    Ee.prototype.message = "Deferred was canceled";
    Ee.prototype.name = "CanceledError";
    Ce.prototype.kW = function () {
        delete Be[this.pb];
        throw this.Tr;
    };
    var Be = {};
    var Te, ff, pf;
    Te = !z.C || 9 <= z.Tg;
    ff = !z.B && !z.C || z.C && 9 <= z.Tg || z.B && z.E("1.9.1");
    pf = z.C && !z.E("9");
    z.Ul = z.C && !(9 <= z.Tg);
    z.e = z.Ge.prototype;
    z.e.clone = function () {
        return new z.Ge(this.x, this.y)
    };
    z.e.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    z.e.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    z.e.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    z.e.translate = function (a, b) {
        a instanceof z.Ge ? (this.x += a.x, this.y += a.y) : (this.x += a, z.qa(b) && (this.y += b));
        return this
    };
    z.e.scale = function (a, b) {
        var c = z.qa(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };
    z.e = z.He.prototype;
    z.e.clone = function () {
        return new z.He(this.width, this.height)
    };
    z.e.RM = function () {
        return this.width * this.height
    };
    z.e.Zg = function () {
        return !this.RM()
    };
    z.e.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    z.e.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    z.e.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    z.e.scale = function (a, b) {
        var c = z.qa(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var Ne = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }, rf = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, sf = {IMG: " ", BR: "\n"};
    z.e = z.Ie.prototype;
    z.e.K = z.J;
    z.e.ua = function () {
        return this.Ka
    };
    z.e.m = function (a) {
        return z.pa(a) ? this.Ka.getElementById(a) : a
    };
    z.e.$ = z.Ie.prototype.m;
    z.e.Yf = z.aa(8);
    z.e.B = function (a, b, c) {
        return Se(this.Ka, arguments)
    };
    z.e.createElement = function (a) {
        return this.Ka.createElement(a)
    };
    z.e.createTextNode = function (a) {
        return this.Ka.createTextNode(String(a))
    };
    z.e.Mw = z.aa(9);
    z.e.Va = function () {
        var a = this.Ka;
        return a.parentWindow || a.defaultView
    };
    z.e.zl = z.aa(10);
    z.e.appendChild = function (a, b) {
        a.appendChild(b)
    };
    z.e.append = z.Ze;
    z.e.canHaveChildren = z.Ye;
    z.e.zp = z.$e;
    z.e.Us = z.af;
    z.e.bz = z.bf;
    z.e.removeNode = z.P;
    z.e.GO = z.df;
    z.e.UO = z.ef;
    z.e.EF = z.gf;
    z.e.isElement = z.jf;
    z.e.isWindow = kf;
    z.e.contains = z.lf;
    z.e.bg = z.aa(12);
    z.e.SO = z.tf;
    var xf = [], Df = 0, Cf = 1;
    z.x(Bf, Ia);
    z.Vl = Rb();
    z.Ui = z.Ec() || z.Ab("iPod");
    z.Vj = z.Ab("iPad");
    z.Wl = z.Ab("Android") && !(Sb() || Rb() || Pb() || z.Ab("Silk"));
    z.If = Sb();
    z.Xl = z.Ab("Safari") && !(Sb() || z.Ab("Coast") || Pb() || z.Ab("Edge") || z.Ab("Silk") || z.Ab("Android")) && !(z.Ec() || z.Ab("iPad") || z.Ab("iPod"));
    z.x(Ff, z.G);
    z.e = Ff.prototype;
    z.e.Ir = !1;
    z.e.YJ = !1;
    z.e.VR = function (a, b, c, d) {
        var f = this.hh[a] || new Of;
        f.xH = !0;
        f.CB = c || null;
        f.tx = d || null;
        if (this.hh[a]) null != f.PA && Gf(this, a); else {
            this.hh[a] = f;
            c = [];
            for (d = 0; d < a.length; d++)z.wb(c, b[a[d]].Gk);
            !this.Ir || this.YJ || this.Ir && (z.If || Rb() && 0 <= z.$a(Tb(), "36")) ? (this.hh[a].pJ = c, b = new ue(c), c = this.T, c.g(b, "success", (0, z.q)(this.uy, this, b, a)), c.g(b, "error", (0, z.q)(this.my, this, b, a)), b.load()) : wf(c)
        }
    };
    z.e.uy = function (a, b) {
        var c = this.hh[b];
        c.PA = a.$x();
        c.xH && Gf(this, b);
        z.vd(a.H, 5, a)
    };
    z.e.my = function (a, b, c) {
        var d = this.hh[b];
        d && (delete this.hh[b], b = d.tx, this.dispatchEvent(new Kf(0, void 0)), b && b(c));
        z.vd(a.H, 5, a)
    };
    z.e.D = function () {
        Ff.o.D.call(this);
        this.T.H();
        this.T = null
    };
    var Lf = new Kc("a"), Mf = new Kc("b"), Nf = new Kc("c");
    z.x(Jf, z.Lc);
    z.x(Hf, z.Lc);
    z.x(Kf, z.Lc);
    z.x(Pf, z.xc);
    Pf.prototype.Bn = function () {
        return this.kE ? this.kE() : {}
    };
    Pf.prototype.gx = function (a) {
        if (this.LE) this.LE(a); else if (z.ta(a))if (z.sa(a.H)) a.H(); else for (var b in a)delete a[b]
    };
    Pf.prototype.D = function () {
        Pf.o.D.call(this);
        for (var a = this.xj; a.length;)this.gx(a.pop());
        delete this.xj
    };
    Tf.prototype.toString = function () {
        var a = [];
        a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
        this.gC && a.push(" [VarAlloc \x3d ", this.gC, "]");
        return a.join("")
    };
    Sf.prototype.toString = function () {
        return null == this.type ? this.XD : "[" + this.type + "] " + this.XD
    };
    z.Rf.prototype.reset = function () {
        for (var a = 0; a < this.Sf.length; a++) {
            var b = this.Ur.id;
            b && Qf(this.By, b);
            Qf(this.Ur, this.Sf[a])
        }
        this.Sf.length = 0;
        this.lA.clear();
        this.bK = (0, z.I)();
        this.Gw = this.sK = this.Xu = this.tK = this.uK = 0;
        b = this.zk.ld();
        for (a = 0; a < b.length; a++) {
            var c = this.zk.get(b[a]);
            c.count = 0;
            c.time = 0;
            c.gC = 0;
            Qf(this.vB, c)
        }
        this.zk.clear()
    };
    z.Rf.prototype.Pq = z.aa(13);
    z.Rf.prototype.toString = function () {
        for (var a = [], b = -1, c = [], d = 0; d < this.Sf.length; d++) {
            var f = this.Sf[d];
            1 == f.Wr && c.pop();
            a.push(" ", Uf(f, this.bK, b, c.join("")));
            b = f.Vr;
            a.push("\n");
            0 == f.Wr && c.push("|  ")
        }
        if (0 != this.lA.kb()) {
            var g = (0, z.I)();
            a.push(" Unstopped timers:\n");
            z.Pd(this.lA, function (b) {
                a.push("  ", b, " (", g - b.startTime, " ms, started at ", Wf(b.startTime), ")\n")
            })
        }
        b = this.zk.ld();
        for (d = 0; d < b.length; d++)c = this.zk.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
        a.push("Total tracers created ", this.sK,
            "\n", "Total comments created ", this.Gw, "\n", "Overhead start: ", this.uK, " ms\n", "Overhead end: ", this.tK, " ms\n", "Overhead comment: ", this.Xu, " ms\n");
        return a.join("")
    };
    new z.Rf;
    z.x(Xf, z.xc);
    Yf.prototype.eF = function (a) {
        this.es && (this.es.call(this.ga || null, a), this.es = this.ga = null)
    };
    Yf.prototype.abort = function () {
        this.ga = this.es = null
    };
    z.x(Zf, z.xc);
    z.e = Zf.prototype;
    z.e.Gk = null;
    z.e.pS = Xf;
    z.e.Oz = null;
    z.e.de = function () {
        return this.pb
    };
    z.e.wp = function (a, b) {
        return this.ku(this.gA, a, b)
    };
    z.e.ku = function (a, b, c) {
        b = new Yf(b, c);
        a.push(b);
        return b
    };
    z.e.uc = function () {
        return !!this.Oz
    };
    z.e.kp = function (a) {
        var b = new this.pS;
        a();
        this.Oz = b;
        b = (b = !!ag(this.RE, a())) || !!ag(this.gA, a());
        b || (this.$z.length = 0);
        return b
    };
    z.e.Zz = function (a) {
        (a = ag(this.$z, a)) && window.setTimeout(jb("Module errback failures: " + a), 0);
        this.RE.length = 0;
        this.gA.length = 0
    };
    z.e.D = function () {
        Zf.o.D.call(this);
        z.Cc(this.Oz)
    };
    z.x(bg, z.xc);
    z.la(bg);
    bg.prototype.HF = function () {
        return this.QH
    };
    bg.prototype.tc = function () {
        return 0 < this.vi.length
    };
    bg.prototype.qt = function (a, b, c) {
        b || (this.wr = 0);
        this.vi = b = hg(this, a);
        this.nh = this.vD ? a : z.vb(b);
        cg(this);
        0 != b.length && (this.Cp.push.apply(this.Cp, b), a = (0, z.q)(this.Cz.VR, this.Cz, z.vb(b), this.Zc, null, (0, z.q)(this.XP, this, this.nh, b), (0, z.q)(this.YP, this), !!c), (c = 5E3 * Math.pow(this.wr, 2)) ? window.setTimeout(a, c) : a())
    };
    bg.prototype.load = function (a, b) {
        var c = [];
        zb([a], c);
        for (var d = [], f = {}, g = 0; g < c.length; g++) {
            var h = c[g], k = this.Zc[h];
            if (!k)throw Error("Unknown module: " + h);
            var m = new ve;
            f[h] = m;
            k.uc() ? m.Rh(this.QH) : (dg(this, h, k, !!b, m), eg(this, h) || d.push(h))
        }
        0 < d.length && gg(this, d);
        return f[a]
    };
    var lg = 4;
    z.e = bg.prototype;
    z.e.XP = function (a, b, c) {
        this.wr++;
        this.nh = a;
        z.y(b, z.Ba(z.tb, this.Cp), this);
        401 == c ? (kg(this, 0), this.ud.length = 0) : 410 == c ? (ng(this, 3), mg(this)) : 3 <= this.wr ? (ng(this, 1), mg(this)) : this.qt(this.nh, !0, 8001 == c)
    };
    z.e.YP = function () {
        ng(this, 2);
        mg(this)
    };
    z.e.wp = function (a, b) {
        z.na(a) || (a = [a]);
        for (var c = 0; c < a.length; c++)this.ku(a[c], b)
    };
    z.e.ku = function (a, b) {
        var c = this.nr;
        c[a] || (c[a] = []);
        c[a].push(b)
    };
    z.e.Xr = function (a) {
        for (var b = this.nr[a], c = 0; b && c < b.length; c++)b[c](a)
    };
    z.e.D = function () {
        bg.o.D.call(this);
        z.Dc(z.Gb(this.Zc), this.jr);
        this.nr = this.ud = this.Om = this.nh = this.vi = this.Zc = null
    };
    var Yl = bg.ba(), Zl = new Ff;
    Zl.Ir = !1;
    Yl.Cz = Zl;
    var $l = z.t.PLOVR_MODULE_INFO, am;
    for (am in $l)Yl.Zc[am] = new Zf($l[am], am);
    Yl.yo.ei || Yl.yo.Rh();
    Yl.vE == Yl.jr && (Yl.vE = null, Yl.jr.kp((0, z.q)(Yl.HF, Yl)) && kg(Yl, lg), cg(Yl));
    var bm = z.t.PLOVR_MODULE_URIS, cm;
    for (cm in bm)Yl.Zc[cm].Gk = bm[cm];
    z.jg("base");
    (function () {
        function a(b, c) {
            return c.length ? a(b[c.shift()], c) : b
        }

        (0, window.$)(function () {
            var b = (0, window.$)('meta[name\x3d"entry"]'), c = b.attr("content");
            if (c) {
                var d = b.data("moduleId");
                if (d) {
                    var f = b.data("params");
                    z.og(d, function () {
                        var b = c && a(window, c.split("."));
                        b && b(f)
                    })
                } else window.console.warn("Module id not found!")
            } else window.console.warn("Entry \x3cmeta\x3e not found!")
        })
    })();
    (function () {
        for (var a = ["ms", "moz", "webkit", "o"], b = 0, c; c = a[b] && !window.requestAnimationFrame; ++b)window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"];
        if (!window.requestAnimationFrame) {
            var d = 0;
            window.requestAnimationFrame = function (a) {
                var b = (new Date).getTime(), c = Math.max(0, 16 - (b - d));
                d = b + c;
                return window.setTimeout(function () {
                    a(b + c)
                }, c)
            };
            window.cancelAnimationFrame || (window.cancelAnimationFrame =
                function (a) {
                    (0, window.clearTimeout)(a)
                })
        }
    })();
    (function () {
        var a = /^\/node\//;
        window.$.ajaxPrefilter(function (b, c) {
            var d = c.data, f = d && d.params;
            f && "object" === window.$.type(f) && a.test(c.url) && (d.params = JSON.stringify(f), b.data = window.$.param(d))
        })
    })();
    z.e = z.pg.prototype;
    z.e.clone = function () {
        return new z.pg(this.top, this.right, this.bottom, this.left)
    };
    z.e.contains = function (a) {
        return this && a ? a instanceof z.pg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    z.e.expand = function (a, b, c, d) {
        z.ta(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
        return this
    };
    z.e.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    z.e.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    z.e.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    z.e.translate = function (a, b) {
        a instanceof z.Ge ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, z.qa(b) && (this.top += b, this.bottom += b));
        return this
    };
    z.e.scale = function (a, b) {
        var c = z.qa(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    };
    z.e = z.qg.prototype;
    z.e.clone = function () {
        return new z.qg(this.left, this.top, this.width, this.height)
    };
    z.e.cz = z.aa(14);
    z.e.contains = function (a) {
        return a instanceof z.qg ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    z.e.Rg = z.aa(15);
    z.e.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    z.e.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    z.e.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    z.e.translate = function (a, b) {
        a instanceof z.Ge ? (this.left += a.x, this.top += a.y) : (this.left += a, z.qa(b) && (this.top += b));
        return this
    };
    z.e.scale = function (a, b) {
        var c = z.qa(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    };
    var tg, Rg;
    tg = {};
    z.dm = z.B ? "MozUserSelect" : z.D || z.Gc ? "WebkitUserSelect" : null;
    Rg = {thin: 2, medium: 4, thick: 6};
    z.la(z.Vg);
    z.Vg.prototype.Sz = 0;
    z.x(z.R, z.G);
    z.R.prototype.NQ = z.Vg.ba();
    var Xg = null;
    z.e = z.R.prototype;
    z.e.de = function () {
        return this.pb || (this.pb = z.Wg(this.NQ))
    };
    z.e.m = function () {
        return this.h
    };
    z.e.Yf = z.aa(7);
    z.e.v = function () {
        this.mi || (this.mi = new z.xd(this));
        return this.mi
    };
    z.e.getParent = function () {
        return this.Ra
    };
    z.e.Db = function (a) {
        if (this.Ra && this.Ra != a)throw Error("Method not supported");
        z.R.o.Db.call(this, a)
    };
    z.e.K = function () {
        return this.da
    };
    z.e.B = function () {
        this.h = this.da.createElement("DIV")
    };
    z.e.render = function (a) {
        this.Ap(a)
    };
    z.e.Ap = function (a, b) {
        if (this.wa)throw Error("Component already rendered");
        this.h || this.B();
        a ? a.insertBefore(this.h, b || null) : this.da.ua().body.appendChild(this.h);
        this.Ra && !this.Ra.wa || this.C()
    };
    z.e.w = function (a) {
        if (this.wa)throw Error("Component already rendered");
        if (a && this.Ob(a)) {
            this.YK = !0;
            var b = z.Je(a);
            this.da && this.da.ua() == b || (this.da = z.J(a));
            this.Y(a);
            this.C()
        } else throw Error("Invalid element to decorate");
    };
    z.e.Ob = function () {
        return !0
    };
    z.e.Y = function (a) {
        this.h = a
    };
    z.e.C = function () {
        this.wa = !0;
        z.bh(this, function (a) {
            !a.wa && a.m() && a.C()
        })
    };
    z.e.Hb = function () {
        z.bh(this, function (a) {
            a.wa && a.Hb()
        });
        this.mi && this.mi.removeAll();
        this.wa = !1
    };
    z.e.D = function () {
        this.wa && this.Hb();
        this.mi && (this.mi.H(), delete this.mi);
        z.bh(this, function (a) {
            a.H()
        });
        !this.YK && this.h && z.P(this.h);
        this.Ra = this.Nz = this.h = this.Xe = this.Qc = null;
        z.R.o.D.call(this)
    };
    z.e.L = function (a, b) {
        this.Rk(a, z.$g(this), b)
    };
    z.e.Rk = function (a, b, c) {
        if (a.wa && (c || !this.wa))throw Error("Component already rendered");
        if (0 > b || b > z.$g(this))throw Error("Child component index out of bounds");
        this.Xe && this.Qc || (this.Xe = {}, this.Qc = []);
        if (a.getParent() == this) {
            var d = a.de();
            this.Xe[d] = a;
            z.tb(this.Qc, a)
        } else z.Lb(this.Xe, a.de(), a);
        z.Yg(a, this);
        z.xb(this.Qc, b, 0, a);
        a.wa && this.wa && a.getParent() == this ? (c = this.S(), b = c.childNodes[b] || null, b != a.m() && c.insertBefore(a.m(), b)) : c ? (this.h || this.B(), b = z.ah(this, b + 1), a.Ap(this.S(), b ? b.h : null)) : this.wa &&
            !a.wa && a.h && a.h.parentNode && 1 == a.h.parentNode.nodeType && a.C()
    };
    z.e.S = function () {
        return this.h
    };
    z.e.qd = z.aa(16);
    z.e.uh = z.aa(17);
    z.e.removeChild = function (a, b) {
        if (a) {
            var c = z.pa(a) ? a : a.de();
            a = z.Zg(this, c);
            c && a && (z.Kb(this.Xe, c), z.tb(this.Qc, a), b && (a.Hb(), a.h && z.P(a.h)), z.Yg(a, null))
        }
        if (!a)throw Error("Child is not in parent component");
        return a
    };
    z.e.zp = z.aa(11);
    var em;
    (function (a) {
        em = "div[contenteditable];.ac-row;.ac-row *;.goog-menu *;.goog-menu-button *;.goog-toolbar-button *;.goog-link-button *;.ee-menu-palette-cell *;.ee-palette-cell *".split(";");
        if (a) {
            var b = a.prototype.needsClick, c;
            if (window.HTMLElement) {
                var d = z.qb(["matchesSelector", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector"], function (a) {
                    return window.HTMLElement.prototype[a]
                });
                c = d && window.HTMLElement.prototype[d]
            }
            var f = c ? function (a, b) {
                return c.call(a, b)
            } : function (a, b) {
                return (0, window.$)(a).is(b)
            };
            a.prototype.needsClick =
                function (a) {
                    return z.pb(em, function (b) {
                        return f(a, b)
                    }) ? !0 : b.call(this, a)
                }
        }
    })(window.FastClick);
    z.fm = "/update";
    z.Mi = !1;
    var jh, oh, nm, om;
    z.gm = {};
    z.rm = {};
    z.sm = z.ob((0, window.$)("script.json-inline"), function (a, b) {
        var c = (0, window.$)(b).data("name");
        a[c] = JSON.parse(b.text);
        return a
    }, {});
    (function (a) {
        z.T = [];
        z.T.Fb = function () {
            return !1
        };
        z.T.be = function () {
            return ""
        };
        z.Hk = !1;
        z.Db(a, function (a, c) {
            switch (c) {
                case "redirect_to":
                    z.hm = a;
                    break;
                case "current_user":
                    z.T = a;
                    z.T.tF = a[0];
                    z.T.Fb = function () {
                        return "-1" !== z.T.fg
                    };
                    z.T.rD = a[2];
                    z.T.fg = a[3];
                    z.T.pG = a[4];
                    z.T.qe = a[7];
                    z.T.Ln = a[8];
                    z.T.GY = a[9];
                    z.T.CY = a[10];
                    z.T.Rz = a[11];
                    z.T.Ds = a[12];
                    z.T.BY = a[13];
                    z.T.be = function (a) {
                        var b = z.T.rD;
                        return a ? b.replace("_s", "_" + a) : b
                    };
                    z.T.XH = a[14];
                    z.T.Jd = a[15];
                    break;
                case "user_status":
                    z.im = a;
                    z.im.YE = a[0];
                    z.im.lw = a[1];
                    break;
                case "env":
                    z.Mb(z.rm, {
                        yJ: a[0],
                        vn: ("https:" === window.document.location.protocol ? "https://" : "http://") + a[1],
                        Ab: a[2],
                        MG: a[3],
                        wB: ("https:" === window.document.location.protocol ? "https://static." : "http://static.") + a[0] + "/static",
                        tq: ("https:" === window.document.location.protocol ? "https://upload." : "http://upload.") + a[0] + ":" + window.location.port,
                        dH: !1,
                        wR: a[4]
                    });
                    break;
                case "current_question":
                    z.S = {
                        pa: a.qid,
                        bb: a.urlToken,
                        status: a.status,
                        iz: a.isLocked,
                        cn: a.askAboutMember,
                        pO: a.editPermission,
                        qb: a.isAnon,
                        QV: a.showInvitePanel,
                        rY: a.detailEditReasonRequired,
                        Eo: a.isEditLocked,
                        Jd: a.isOrg,
                        te: 0,
                        sr: 0,
                        Lm: null,
                        oY: 0,
                        EY: !1,
                        YY: !0,
                        mh: [],
                        iY: []
                    };
                    break;
                case "current_question_bio":
                    z.jm = a;
                    break;
                case "my_answer":
                    z.km = a;
                    break;
                case "current_question_owner":
                    z.T.mh = a;
                    break;
                case "current_answer":
                    jh = a;
                    break;
                case "bio":
                    z.lm = a;
                    break;
                case "current_topic":
                    z.nh = a;
                    break;
                case "current_people":
                    z.lh = a;
                    z.lh.tF = a[0];
                    z.lh.bb = a[1];
                    z.lh.id = a[3];
                    break;
                case "current_roundtable":
                    z.mh = a;
                    break;
                case "current_list":
                    z.kh = a;
                    z.kh.bb = a[2];
                    break;
                case "current_live":
                    oh =
                        a;
                    break;
                case "block_topic":
                    z.mm = a;
                    break;
                case "draft":
                    z.gm.Wd = a.length ? a : null;
                    break;
                case "disabled_components":
                    nm = a;
                    break;
                case "comet_path":
                    z.fm = a;
                    break;
                case "is_org_page":
                    z.Hk = !!a;
                    break;
                case "permissions":
                    om = a, z.pm = function (a) {
                        return z.A(om, a)
                    }
            }
        });
        z.S && (z.S.SG = !1);
        z.qm = function (a) {
            return !!nm && z.A(nm, a)
        };
        window.navigator.userAgent.match(/iPad/i) && (z.rm.dH = !0, z.rm.Ab = !0);
        if (z.rm.yJ)try {
            window.document.domain = z.rm.yJ
        } catch (b) {
            window.console && window.console.warn(b)
        }
        z.rm.vn && (z.fm = z.rm.vn + z.fm)
    })(z.sm);
    var Si, Ri, bk;
    z.tm = /iPad|iPhone/.test(window.navigator.userAgent);
    z.um = z.rm.wR;
    Si = /Android/.test(window.navigator.userAgent);
    z.vm = z.rm.Ab;
    z.eh = /MicroMessenger/.test(window.navigator.userAgent);
    Ri = /Weibo/.test(window.navigator.userAgent);
    z.wm = /UCBrowser/.test(window.navigator.userAgent);
    bk = /Mobile/.test(window.navigator.userAgent) && /CriOS/.test(window.navigator.userAgent);
    z.xm = z.tm && !!window.indexedDB;
    var ih = {
        title: window.document.title,
        desc: "与世界分享你的知识、经验和见解",
        link: window.location.href,
        imgUrl: window.location.protocol + "//" + window.location.hostname + "/static/revved/img/wechat-share-image.6e8f6318.png",
        type: "link"
    };
    z.e = z.ph.prototype;
    z.e.toString = function () {
        var a = [], b = this.Ei;
        b && a.push(wh(b, ym, !0), ":");
        var c = this.Kg;
        if (c || "file" == b) a.push("//"), (b = this.ke) && a.push(wh(b, ym, !0), "@"), a.push((0, window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.lm, null != c && a.push(":", String(c));
        if (c = this.Me) this.Kg && "/" != c.charAt(0) && a.push("/"), a.push(wh(c, "/" == c.charAt(0) ? zm : Am, !0));
        (c = this.he.toString()) && a.push("?", c);
        (c = this.wj) && a.push("#", wh(c, Bm));
        return a.join("")
    };
    z.e.resolve = function (a) {
        var b = this.clone(), c = !!a.Ei;
        c ? qh(b, a.Ei) : c = !!a.ke;
        if (c) {
            var d = a.ke;
            z.rh(b);
            b.ke = d
        } else c = !!a.Kg;
        c ? (d = a.Kg, z.rh(b), b.Kg = d) : c = null != a.lm;
        d = a.Me;
        if (c) sh(b, a.lm); else if (c = !!a.Me) {
            if ("/" != d.charAt(0))if (this.Kg && !this.Me) d = "/" + d; else {
                var f = b.Me.lastIndexOf("/");
                -1 != f && (d = b.Me.substr(0, f + 1) + d)
            }
            f = d;
            if (".." == f || "." == f) d = ""; else if (z.Va(f, "./") || z.Va(f, "/.")) {
                for (var d = z.Ja(f, "/"), f = f.split("/"), g = [], h = 0; h < f.length;) {
                    var k = f[h++];
                    "." == k ? d && h == f.length && g.push("") : ".." == k ? ((1 < g.length ||
                    1 == g.length && "" != g[0]) && g.pop(), d && h == f.length && g.push("")) : (g.push(k), d = !0)
                }
                d = g.join("/")
            } else d = f
        }
        c ? (z.rh(b), b.Me = d) : c = "" !== a.he.toString();
        c ? th(b, uh(a.he.toString())) : c = !!a.wj;
        c && (a = a.wj, z.rh(b), b.wj = a);
        return b
    };
    z.e.clone = function () {
        return new z.ph(this)
    };
    z.e.ze = function () {
        return this.he
    };
    z.e.eB = function (a) {
        this.Ce = a;
        this.he && this.he.eB(a);
        return this
    };
    var ym = /[#\/\?@]/g, Am = /[\#\?:]/g, zm = /[\#\?]/g, xh = /[\#\?@]/g, Bm = /#/g;
    z.e = z.vh.prototype;
    z.e.kb = function () {
        Bh(this);
        return this.Ja
    };
    z.e.add = function (a, b) {
        Bh(this);
        this.Yd = null;
        a = Ch(this, a);
        var c = this.Lb.get(a);
        c || this.Lb.set(a, c = []);
        c.push(b);
        this.Ja++;
        return this
    };
    z.e.remove = function (a) {
        Bh(this);
        a = Ch(this, a);
        return this.Lb.Of(a) ? (this.Yd = null, this.Ja -= this.Lb.get(a).length, this.Lb.remove(a)) : !1
    };
    z.e.clear = function () {
        this.Lb = this.Yd = null;
        this.Ja = 0
    };
    z.e.Zg = function () {
        Bh(this);
        return 0 == this.Ja
    };
    z.e.Of = function (a) {
        Bh(this);
        a = Ch(this, a);
        return this.Lb.Of(a)
    };
    z.e.Xh = z.aa(5);
    z.e.ld = function () {
        Bh(this);
        for (var a = this.Lb.Wc(), b = this.Lb.ld(), c = [], d = 0; d < b.length; d++)for (var f = a[d], g = 0; g < f.length; g++)c.push(b[d]);
        return c
    };
    z.e.Wc = function (a) {
        Bh(this);
        var b = [];
        if (z.pa(a)) this.Of(a) && (b = z.ub(b, this.Lb.get(Ch(this, a)))); else {
            a = this.Lb.Wc();
            for (var c = 0; c < a.length; c++)b = z.ub(b, a[c])
        }
        return b
    };
    z.e.set = function (a, b) {
        Bh(this);
        this.Yd = null;
        a = Ch(this, a);
        this.Of(a) && (this.Ja -= this.Lb.get(a).length);
        this.Lb.set(a, [b]);
        this.Ja++;
        return this
    };
    z.e.get = function (a, b) {
        var c = a ? this.Wc(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    z.e.toString = function () {
        if (this.Yd)return this.Yd;
        if (!this.Lb)return "";
        for (var a = [], b = this.Lb.ld(), c = 0; c < b.length; c++)for (var d = b[c], f = (0, window.encodeURIComponent)(String(d)), d = this.Wc(d), g = 0; g < d.length; g++) {
            var h = f;
            "" !== d[g] && (h += "\x3d" + (0, window.encodeURIComponent)(String(d[g])));
            a.push(h)
        }
        return this.Yd = a.join("\x26")
    };
    z.e.clone = function () {
        var a = new z.vh;
        a.Yd = this.Yd;
        this.Lb && (a.Lb = this.Lb.clone(), a.Ja = this.Ja);
        return a
    };
    z.e.eB = function (a) {
        a && !this.Ce && (Bh(this), this.Yd = null, this.Lb.forEach(function (a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.Yd = null, this.Lb.set(Ch(this, d), z.vb(a)), this.Ja += a.length))
        }, this));
        this.Ce = a
    };
    z.e.extend = function (a) {
        for (var b = 0; b < arguments.length; b++)Kd(arguments[b], function (a, b) {
            this.add(b, a)
        }, this)
    };
    z.x(Eh, Dh);
    Eh.prototype.kb = function () {
        var a = 0;
        z.Pd(this.gd(!0), function () {
            a++
        });
        return a
    };
    Eh.prototype.clear = function () {
        var a = z.Qd(this.gd(!0)), b = this;
        z.y(a, function (a) {
            b.remove(a)
        })
    };
    z.x(Fh, Eh);
    z.e = Fh.prototype;
    z.e.Wl = function () {
        if (!this.Nc)return !1;
        try {
            return this.Nc.setItem("__sak", "1"), this.Nc.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    z.e.set = function (a, b) {
        try {
            this.Nc.setItem(a, b)
        } catch (c) {
            if (0 == this.Nc.length)throw"Storage mechanism: Storage disabled";
            throw"Storage mechanism: Quota exceeded";
        }
    };
    z.e.get = function (a) {
        a = this.Nc.getItem(a);
        if (!z.pa(a) && null !== a)throw"Storage mechanism: Invalid value was encountered";
        return a
    };
    z.e.remove = function (a) {
        this.Nc.removeItem(a)
    };
    z.e.kb = function () {
        return this.Nc.length
    };
    z.e.gd = function (a) {
        var b = 0, c = this.Nc, d = new z.Ld;
        d.next = function () {
            if (b >= c.length)throw z.Od;
            var d = c.key(b++);
            if (a)return d;
            d = c.getItem(d);
            if (!z.pa(d))throw"Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    z.e.clear = function () {
        this.Nc.clear()
    };
    z.e.key = function (a) {
        return this.Nc.key(a)
    };
    z.x(Gh, Fh);
    z.x(Hh, Fh);
    z.x(Ih, Eh);
    var Lh = {".": ".2E", "!": ".21", "~": ".7E", "*": ".2A", "'": ".27", "(": ".28", ")": ".29", "%": "."}, Jh = null;
    z.e = Ih.prototype;
    z.e.Wl = function () {
        return !!this.xd
    };
    z.e.set = function (a, b) {
        this.xd.setAttribute(Kh(a), b);
        Mh(this)
    };
    z.e.get = function (a) {
        a = this.xd.getAttribute(Kh(a));
        if (!z.pa(a) && null !== a)throw"Storage mechanism: Invalid value was encountered";
        return a
    };
    z.e.remove = function (a) {
        this.xd.removeAttribute(Kh(a));
        Mh(this)
    };
    z.e.kb = function () {
        return Nh(this).attributes.length
    };
    z.e.gd = function (a) {
        var b = 0, c = Nh(this).attributes, d = new z.Ld;
        d.next = function () {
            if (b >= c.length)throw z.Od;
            var d = c[b++];
            if (a)return (0, window.decodeURIComponent)(d.nodeName.replace(/\./g, "%")).substr(1);
            d = d.nodeValue;
            if (!z.pa(d))throw"Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    z.e.clear = function () {
        for (var a = Nh(this), b = a.attributes.length; 0 < b; b--)a.removeAttribute(a.attributes[b - 1].nodeName);
        Mh(this)
    };
    z.x(Oh, Eh);
    Oh.prototype.set = function (a, b) {
        this.To.set(this.mm + a, b)
    };
    Oh.prototype.get = function (a) {
        return this.To.get(this.mm + a)
    };
    Oh.prototype.remove = function (a) {
        this.To.remove(this.mm + a)
    };
    Oh.prototype.gd = function (a) {
        var b = this.To.gd(!0), c = this, d = new z.Ld;
        d.next = function () {
            for (var d = b.next(); d.substr(0, c.mm.length) != c.mm;)d = b.next();
            return a ? d.substr(c.mm.length) : c.To.get(d)
        };
        return d
    };
    var Cm = {
        fM: "UserDataSharedStore", create: function (a) {
            return Cm.QN(a) || Cm.RN(a)
        }, QN: function (a) {
            var b = new Gh;
            return b.Wl() ? a ? new Oh(b, a) : b : null
        }, qY: function (a) {
            var b = new Hh;
            return b.Wl() ? a ? new Oh(b, a) : b : null
        }, RN: function (a) {
            a = new Ih(a || Cm.fM);
            return a.Wl() ? a : null
        }
    };
    z.Dm = {};
    z.Ca(z.Dm, Cm);
    z.Dm.create = function (a) {
        (a = Cm.create(a)) || (a = {Wl: z.El, get: z.Gl, set: z.p, remove: z.p});
        return a
    };
    z.Qh = z.Dm.create();
    Ph.prototype.gb = function () {
        var a = this.Nc.get(this.nz);
        return a ? JSON.parse(a) : []
    };
    Ph.prototype.g = function (a) {
        this.mG.push(a)
    };
    Ph.prototype.Lt = function (a) {
        this.mG.forEach(function (b) {
            return b(a)
        })
    };
    Ph.prototype.restore = function () {
        var a = this.gb();
        a.length && (this.Lt(a), this.Nc.remove(this.nz))
    };
    var ji;
    ji = {
        HL: ["BC", "AD"],
        GL: ["Before Christ", "Anno Domini"],
        KL: "JFMAMJJASOND".split(""),
        WL: "JFMAMJJASOND".split(""),
        IL: "January February March April May June July August September October November December".split(" "),
        VL: "January February March April May June July August September October November December".split(" "),
        QL: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        YL: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        hM: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        $L: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        SL: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        ZL: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        NX: "SMTWTFS".split(""),
        XL: "SMTWTFS".split(""),
        RL: ["Q1", "Q2", "Q3", "Q4"],
        LL: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        CL: ["AM", "PM"],
        IC: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        NC: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        EL: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
        JC: 6,
        fY: [5, 6],
        KC: 5
    };
    var si = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/,
        ui = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/, ti = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;
    Sh.prototype.iq = function (a) {
        var b = Math.min(this.Ud, this.Ld, this.Ed, this.od, this.rd, this.vd),
            c = Math.max(this.Ud, this.Ld, this.Ed, this.od, this.rd, this.vd);
        if (0 > b && 0 < c)return null;
        if (!a && 0 == b && 0 == c)return "PT0S";
        c = [];
        0 > b && c.push("-");
        c.push("P");
        (this.Ud || a) && c.push(Math.abs(this.Ud) + "Y");
        (this.Ld || a) && c.push(Math.abs(this.Ld) + "M");
        (this.Ed || a) && c.push(Math.abs(this.Ed) + "D");
        if (this.od || this.rd || this.vd || a) c.push("T"), (this.od || a) && c.push(Math.abs(this.od) + "H"), (this.rd || a) && c.push(Math.abs(this.rd) + "M"),
        (this.vd || a) && c.push(Math.abs(this.vd) + "S");
        return c.join("")
    };
    Sh.prototype.equals = function (a) {
        return a.Ud == this.Ud && a.Ld == this.Ld && a.Ed == this.Ed && a.od == this.od && a.rd == this.rd && a.vd == this.vd
    };
    Sh.prototype.clone = function () {
        return new Sh(this.Ud, this.Ld, this.Ed, this.od, this.rd, this.vd)
    };
    var Th = "y", Uh = "m", Vh = "d", Wh = "h", Xh = "n", Yh = "s";
    Sh.prototype.oW = function (a) {
        return new Sh(this.Ud * a, this.Ld * a, this.Ed * a, this.od * a, this.rd * a, this.vd * a)
    };
    Sh.prototype.add = function (a) {
        this.Ud += a.Ud;
        this.Ld += a.Ld;
        this.Ed += a.Ed;
        this.od += a.od;
        this.rd += a.rd;
        this.vd += a.vd
    };
    z.e = Zh.prototype;
    z.e.cs = ji.JC;
    z.e.ds = ji.KC;
    z.e.clone = function () {
        var a = new Zh(this.fa);
        a.cs = this.cs;
        a.ds = this.ds;
        return a
    };
    z.e.getFullYear = function () {
        return this.fa.getFullYear()
    };
    z.e.getYear = function () {
        return this.getFullYear()
    };
    z.e.getMonth = function () {
        return this.fa.getMonth()
    };
    z.e.getDate = function () {
        return this.fa.getDate()
    };
    z.e.getTime = function () {
        return this.fa.getTime()
    };
    z.e.getDay = function () {
        return this.fa.getDay()
    };
    z.e.getUTCFullYear = function () {
        return this.fa.getUTCFullYear()
    };
    z.e.getUTCMonth = function () {
        return this.fa.getUTCMonth()
    };
    z.e.getUTCDate = function () {
        return this.fa.getUTCDate()
    };
    z.e.getUTCDay = function () {
        return this.fa.getDay()
    };
    z.e.getUTCHours = function () {
        return this.fa.getUTCHours()
    };
    z.e.getUTCMinutes = function () {
        return this.fa.getUTCMinutes()
    };
    z.e.getTimezoneOffset = function () {
        return this.fa.getTimezoneOffset()
    };
    z.e.set = function (a) {
        this.fa = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    };
    z.e.setFullYear = function (a) {
        this.fa.setFullYear(a)
    };
    z.e.setYear = function (a) {
        this.setFullYear(a)
    };
    z.e.setMonth = function (a) {
        this.fa.setMonth(a)
    };
    z.e.setDate = function (a) {
        this.fa.setDate(a)
    };
    z.e.setTime = function (a) {
        this.fa.setTime(a)
    };
    z.e.setUTCFullYear = function (a) {
        this.fa.setUTCFullYear(a)
    };
    z.e.setUTCMonth = function (a) {
        this.fa.setUTCMonth(a)
    };
    z.e.setUTCDate = function (a) {
        this.fa.setUTCDate(a)
    };
    z.e.add = function (a) {
        if (a.Ud || a.Ld) {
            var b = this.getMonth() + a.Ld + 12 * a.Ud, c = this.getYear() + Math.floor(b / 12), b = b % 12;
            0 > b && (b += 12);
            var d;
            a:{
                switch (b) {
                    case 1:
                        d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
                        break a;
                    case 5:
                    case 8:
                    case 10:
                    case 3:
                        d = 30;
                        break a
                }
                d = 31
            }
            d = Math.min(d, this.getDate());
            this.setDate(1);
            this.setFullYear(c);
            this.setMonth(b);
            this.setDate(d)
        }
        a.Ed && (a = new Date((new Date(this.getYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.Ed), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()),
            this.setDate(a.getDate()), ai(this, a.getDate()))
    };
    z.e.iq = function (a, b) {
        return [this.getFullYear(), Ya(this.getMonth() + 1, 2), Ya(this.getDate(), 2)].join(a ? "-" : "") + (b ? bi(this) : "")
    };
    z.e.equals = function (a) {
        return !(!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
    };
    z.e.toString = function () {
        return this.iq()
    };
    z.e.valueOf = function () {
        return this.fa.valueOf()
    };
    z.x(ci, Zh);
    z.e = ci.prototype;
    z.e.getHours = function () {
        return this.fa.getHours()
    };
    z.e.getMinutes = function () {
        return this.fa.getMinutes()
    };
    z.e.getSeconds = function () {
        return this.fa.getSeconds()
    };
    z.e.getMilliseconds = function () {
        return this.fa.getMilliseconds()
    };
    z.e.getUTCDay = function () {
        return this.fa.getUTCDay()
    };
    z.e.getUTCHours = function () {
        return this.fa.getUTCHours()
    };
    z.e.getUTCMinutes = function () {
        return this.fa.getUTCMinutes()
    };
    z.e.getUTCSeconds = function () {
        return this.fa.getUTCSeconds()
    };
    z.e.getUTCMilliseconds = function () {
        return this.fa.getUTCMilliseconds()
    };
    z.e.setHours = function (a) {
        this.fa.setHours(a)
    };
    z.e.setMinutes = function (a) {
        this.fa.setMinutes(a)
    };
    z.e.setSeconds = function (a) {
        this.fa.setSeconds(a)
    };
    z.e.setMilliseconds = function (a) {
        this.fa.setMilliseconds(a)
    };
    z.e.setUTCHours = function (a) {
        this.fa.setUTCHours(a)
    };
    z.e.setUTCMinutes = function (a) {
        this.fa.setUTCMinutes(a)
    };
    z.e.setUTCSeconds = function (a) {
        this.fa.setUTCSeconds(a)
    };
    z.e.setUTCMilliseconds = function (a) {
        this.fa.setUTCMilliseconds(a)
    };
    z.e.add = function (a) {
        Zh.prototype.add.call(this, a);
        a.od && this.setUTCHours(this.fa.getUTCHours() + a.od);
        a.rd && this.setUTCMinutes(this.fa.getUTCMinutes() + a.rd);
        a.vd && this.setUTCSeconds(this.fa.getUTCSeconds() + a.vd)
    };
    z.e.iq = function (a, b) {
        var c = Zh.prototype.iq.call(this, a);
        return a ? c + " " + Ya(this.getHours(), 2) + ":" + Ya(this.getMinutes(), 2) + ":" + Ya(this.getSeconds(), 2) + (b ? bi(this) : "") : c + "T" + Ya(this.getHours(), 2) + Ya(this.getMinutes(), 2) + Ya(this.getSeconds(), 2) + (b ? bi(this) : "")
    };
    z.e.equals = function (a) {
        return this.getTime() == a.getTime()
    };
    z.e.toString = function () {
        return this.iq()
    };
    z.e.clone = function () {
        var a = new ci(this.fa);
        a.cs = this.cs;
        a.ds = this.ds;
        return a
    };
    var ni = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvVwzZ]+/];
    ii.prototype.format = function (a, b) {
        if (!a)throw Error("The date to format must be non-null.");
        var c = b ? 6E4 * (a.getTimezoneOffset() - (b.Ju - gi(b, a))) : 0, d = c ? new Date(a.getTime() + c) : a, f = d;
        b && d.getTimezoneOffset() != a.getTimezoneOffset() && (d = new Date(d.getTime() + 6E4 * (d.getTimezoneOffset() - a.getTimezoneOffset())), f = new Date(a.getTime() + (c + (0 < c ? -864E5 : 864E5))));
        for (var c = [], g = 0; g < this.Ut.length; ++g) {
            var h = this.Ut[g].text;
            1 == this.Ut[g].type ? c.push(qi(this, h, a, d, f, b)) : c.push(h)
        }
        return c.join("")
    };
    var mi = !1;
    z.v("ZH.date.parse", ri);
    z.v("ZH.date.fromNow", z.vi);
    z.v("ZH.date.format", wi);
    var Li = {};
    window._gaq = window._gaq || [];
    var Em = new Ph("ga");
    Em.g(function (a) {
        z.y(a, function (a) {
            Li.track.apply(Li, a)
        })
    });
    Li.track = function (a, b, c, d, f) {
        c && (c = "" + c);
        d && (d = (0, window.parseInt)(d, 10));
        window._gaq.push(["_trackEvent", a, b, c, d, !!f])
    };
    Li.xW = function () {
        window._gaq.push(["_trackPageview"])
    };
    Li.Im = function (a, b, c, d, f) {
        Rh(Em, [a, b, c, d, f])
    };
    Li.yV = function () {
        Em.restore()
    };
    Li.rV = function () {
        var a = window._gaq;
        a.push(["_addOrganic", "baidu", "word"]);
        a.push(["_addOrganic", "baidu", "wd"]);
        a.push(["_addOrganic", "sogou", "query"]);
        a.push(["_addOrganic", "so.360.cn", "q"]);
        a.push(["_addOrganic", "so.com", "q"]);
        a.push(["_addOrganic", "soso", "w"]);
        a.push(["_addOrganic", "google", "q"]);
        a.push(["_addOrganic", "sm", "q"]);
        a.push(["_addIgnoredOrganic", "知乎"]);
        a.push(["_addIgnoredOrganic", "知乎网"]);
        a.push(["_addIgnoredOrganic", "zhihu"]);
        a.push(["_addIgnoredOrganic", "zhihu.com"]);
        a.push(["_addIgnoredOrganic",
            "www.zhihu.com"])
    };
    Li.oM = function () {
        var a = window._gaq, b = z.sm.ga_vars, c = b.user_attr.join("");
        a.push(["_setVar", c]);
        a.push(["_setCustomVar", 1, "user_attr", c, 3]);
        var d = c = 9E12;
        b.user_created && (d = b.user_created, a.push(["_setCustomVar", 2, "registration_date", wi(d, "yyyyMMdd"), 1]));
        var f = window.document.cookie.match(/q_c1=(\w+)\|(\w+)\|(\d+)/);
        f && (c = +f[3]);
        b.now && a.push(["_setCustomVar", 3, "entry_date", wi(Math.min(c, d, b.now), "yyyyMMdd"), 1]);
        b.abtest_mask && a.push(["_setCustomVar", 4, "abtest_group", b.abtest_mask, 3]);
        (b = window.document.cookie.match(/ng_rid=(\d+)/)) &&
        a.push(["_setCustomVar", 5, "Web Type", 50 >= (0, window.parseInt)(b[1], 10) ? "nweb" : "zhihu_web", 3])
    };
    Li.FV = function () {
        var a = window._gaq;
        a.push(["_setAccount", "UA-20961733-1"]);
        a.push(["_setDomainName", ".zhihu.com"]);
        Li.rV();
        Li.oM()
    };
    Li.Qq = function () {
        var a = window.document.createElement("script");
        a.async = !0;
        a.src = ("https:" === window.document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
        var b = window.document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    };
    Li.init = function () {
        Li.FV();
        Li.yV();
        Li.xW();
        Li.Qq()
    };
    var Fm;
    window.za = window.za || [];
    var yi = new Ph("za");
    yi.g(function (a) {
        z.y(a, function (a) {
            window.za.collect("event", a)
        })
    });
    Fm = function () {
        var a = window.za = window.za || [];
        if (a.pR)return void(window.console && window.console.error && window.console.error("Zhihu Analytics snippet included twice."));
        a.pR = !0;
        a.methods = ["init", "collect", "set", "get"];
        a.factory = function (b) {
            return function () {
                var c = Array.prototype.slice.call(arguments);
                return c.unshift(b), a.push(c), a
            }
        };
        for (var b = 0; b < a.methods.length; b++) {
            var c = a.methods[b];
            a[c] = a.factory(c)
        }
        a.load = function () {
            var a = window.document.createElement("script");
            a.type = "text/javascript";
            a.async =
                !0;
            a.src = ("https:" === window.document.location.protocol ? "https://" : "http://") + "zhstatic.zhihu.com/za/za-0.1.1.min.js";
            var b = window.document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b)
        };
        a.TX = "0.0.9";
        a.init("ZA-11427260206", "https://zhihu-web-analytics.zhihu.com");
        a.set({userID: z.T.XH || null});
        a.collect("pageview");
        return a.load
    }();
    var Ji, Di, Ki;
    Ji = "www4.zhihu.com" === window.location.hostname ? "https://ws01.aws.dev/logs/batch" : "https://zhihu-web-analytics.zhihu.com/logs/batch";
    Di = [];
    Ki = Ci(function (a, b) {
        window.zap.trackPageShow(a, b)
    });
    z.Gm = Ci(function (a, b, c) {
        a = Ei(a);
        var d = a.module;
        window.zap.trackCardShow(Object.assign({}, b, {path: a.path}), Object.assign({}, c, {module: d}))
    });
    z.Gi = Ci(function (a, b, c) {
        a = Ei(a);
        var d = a.module;
        window.zap.trackEvent(Object.assign({}, b, {path: a.path}), Object.assign({}, c, {module: d}))
    });
    z.Ii = Ci(function (a) {
        window.zap.config(a)
    });
    z.U.Im = function (a, b, c, d, f) {
        Li.Im(a, b, c, d, f);
        z.Ai(a, b, c, d, f)
    };
    z.U.init = function () {
        z.U.hn();
        (0, window.setTimeout)(function () {
            Li.init();
            window.$.support.cors && (Fm(), yi.restore(), Bi())
        });
        Hi()
    };
    z.U.hn = function () {
        function a(a) {
            return {member: "people", favlist: "collection"}[a] || a
        }

        (0, window.$)(window.document).on("click", "a.video-box", function () {
            z.U("video", "click_videobox_open")
        });
        (0, window.$)("#zh-top-link-logo").click(function () {
            z.U("navigation", "visit_home", "top_logo")
        });
        (0, window.$)("#zh-top-link-home").click(function () {
            z.U("navigation", "visit_home", "top_nav_home")
        });
        (0, window.$)("#top-nav-dd-topic").click(function () {
            z.U("navigation", "visit_topics_activities", "top_nav_topic")
        });
        (0, window.$)("#ga_sidebar_topic_all").click(function () {
            z.U("navigation",
                "visit_topics_activities", "sidebar_topic_all")
        });
        var b = (0, window.$)("#zh-trendings");
        b.on("click", 'li a[href^\x3d"/topic/"]', function (a) {
            a = (0, window.$)(a.target).closest("li").index() + 1;
            z.U("navigation", "visit_topic", "sidebar_intresting_people_" + a + "_topic")
        });
        b.on("click", 'li a[href^\x3d"/people"]', function (a) {
            a = (0, window.$)(a.target).closest("li").index() + 1;
            z.U("navigation", "visit_people_profile", "sidebar_interesting_people_" + a)
        });
        (0, window.$)("#zh-single-question-page .zm-tag-editor-labels a.zm-item-tag").click(function () {
            z.U("question_answer",
                "visit_topic", "question_topic")
        });
        z.F(z.Y, "ga_serach_select", function (a) {
            "topic" === a.data.type && z.U("search", "visit_topic", "top_search_list_" + (a.data.index + 1))
        });
        var c = (0, window.$)(".zm-topic-list-container").on("click", '.subtopic a[href^\x3d"/topic/"]', function () {
            z.U("topic", "visit_topic", "topic_activity_children_topic")
        });
        (0, window.$)(".zm-side-section-inner.child-topic").on("click", 'a.zm-item-tag[href^\x3d"/topic/"]', function () {
            z.U("topic", "visit_topic", "topic_sidebar_children_topic")
        });
        (0, window.$)(".zm-topic-cat-hot").on("click",
            'a[href^\x3d"/topic/"]', function () {
                z.U("topic", "visit_topic", "topic_square_sidebar")
            });
        (0, window.$)(".zm-topic-cat-sub").on("click", 'a[href^\x3d"/topic/"]', function () {
            z.U("topic", "visit_topic", "topic_square_list_item")
        });
        (0, window.$)('a.zm-side-nav-link[href\x3d"/topics"]').click(function () {
            z.U("navigation", "visit_topic_square", "sidebar_topic_square")
        });
        (0, window.$)("#zh-tooltip").on("click", ".zh-profile-card.member .avatar-link", function () {
            z.U("navigation", "visit_people_profile", "hovercard_people_name")
        });
        var d = (0, window.$)("#zh-top-nav-live-new").on("click", '.zm-noti7-content-item[data-notigroupname\x3d"FOLLOW"] .zm-list-content-medium a[href^\x3d"/people"]', function () {
            z.U("notification", "visit_people_profile", "top_nav_noti_follower_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"FOLLOW"] .zm-item-link-avatar', function () {
            z.U("notification", "visit_people_profile", "top_nav_noti_follower_people_avatar")
        });
        d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"VOTE_THANK"] a[href^\x3d"/people"]',
            function () {
                z.U("notification", "visit_people_profile", "top_nav_noti_vote_thank_people_name")
            });
        d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"INVITE"] a[href^\x3d"/people"]', function () {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_invitation_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION_COMMENT"] a[href^\x3d"/people"]', function () {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_qcomment_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER_COMMENT"] a[href^\x3d"/people"]',
            function () {
                z.U("notification", "visit_people_profile", "top_nav_noti_message_acomment_people_name")
            }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER"] a[href^\x3d"/people"]', function () {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_new_answer_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION"] a[href^\x3d"/people"]', function () {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_edit_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ARTICLE_PUBLISH"] .user-block a',
            function () {
                z.U("notification", "visit_people_profile", "top_nav_noti_message_new_article")
            }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ARTICLE_PUBLISH"] .column_link', function () {
            z.U("notification", "visit_column", "top_nav_noti_message_new_article")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ARTICLE_PUBLISH"] .post-link', function () {
            z.U("notification", "visit_article", "top_nav_noti_message_new_article")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"PUBLICATION_PUBLISH"] .user-block a',
            function () {
                z.U("notification", "visit_people_profile", "top_nav_noti_message_publication")
            }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"PUBLICATION_PUBLISH"] .question_link', function () {
            z.U("notification", "visit_publication", "top_nav_noti_message_publication")
        });
        var f = (0, window.$)("#js-home-feed-list");
        f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] .source a[href^\x3d"/people"]', function () {
            z.U("feed", "visit_people_profile", "feed_answer_vote_source_people_name")
        });
        f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] \x3e.avatar a[href^\x3d"/people"]',
            function () {
                z.U("feed", "visit_people_profile", "feed_answer_vote_source_people_avatar")
            });
        f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] .zm-item-answer-author-info a[href^\x3d"/people"]', function () {
            z.U("feed", "visit_people_profile", "feed_answer_vote_author_name")
        });
        f.on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] .source a[href^\x3d"/people"]', function () {
            z.U("feed", "visit_people_profile", "feed_answer_answer_source_people_name")
        });
        f.on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] \x3e.avatar a[href^\x3d"/people"]',
            function () {
                z.U("feed", "visit_people_profile", "feed_answer_answer_source_people_avatar")
            });
        f.on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] .source a[href^\x3d"/people"]', function () {
            z.U("feed", "visit_people_profile", "feed_question_follow_source_people_name")
        });
        f.on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] \x3e.avatar a[href^\x3d"/people"]', function () {
            z.U("feed", "visit_people_profile", "feed_question_follow_source_people_avatar")
        });
        f.on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] .source a[href^\x3d"/people"]',
            function () {
                z.U("feed", "visit_people_profile", "feed_question_ask_source_people_name")
            });
        f.on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] \x3e.avatar a[href^\x3d"/people"]', function () {
            z.U("feed", "visit_people_profile", "feed_question_ask_source_people_avatar")
        });
        var g = (0, window.$)("#zh-question-answer-wrap").on("click", '.zm-item-answer-author-info \x3ea[href^\x3d"/people"]', function () {
            z.U("question_answer", "visit_people_profile", "question_answer_author_name")
        }).on("click", ".zm-item-answer-author-info img.zm-list-avatar",
            function () {
                z.U("question_answer", "visit_people_profile", "question_answer_author_avatar")
            });
        g.on("click", ".voters a", function () {
            var a = (0, window.$)(this).parents(".voters").find("a").index(this) + 1;
            z.U("question_answer", "visit_people_profile", "question_answer_voters_" + a)
        });
        g.on("click", '.zm-comment-hd a[href^\x3d"/people"]', function () {
            z.U("question_answer", "visit_people_profile", "question_answer_comment_author_name")
        }).on("click", ".zm-comment-list img.zm-item-img-avatar", function () {
            z.U("question_answer",
                "visit_people_profile", "question_answer_comment_author_avatar")
        });
        (0, window.$)(".zh-question-followers-sidebar", 'a[href^\x3d"/people"]', function () {
            z.U("question_answer", "visit_people_profile", "question_sidebar_followers_avatar")
        });
        z.F(z.Y, "ga_serach_select", function (a) {
            "people" === a.data.type && z.U("search", "visit_people_profile", "top_search_list_" + (a.data.index + 1))
        });
        (0, window.$)("#zh-topic-top-answerer").on("click", '.zm-topic-side-person-item-content a[href^\x3d"/people/"]', function () {
            z.U("topic",
                "visit_people_profile", "topic_sidebar_top_answerer_people_name")
        }).on("click", "img.zm-list-avatar", function () {
            z.U("topic", "visit_people_profile", "topic_sidebar_top_answerer_people_avatar")
        });
        d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"VOTE_THANK"] a[href^\x3d"/question"]', function () {
            z.U("notification", "visit_question", "top_nav_noti_vote_thank_question")
        });
        d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"INVITE"] a[href^\x3d"/question"]', function () {
            z.U("notification", "visit_question",
                "top_nav_noti_message_invitation_question")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION_COMMENT"] a[href^\x3d"/question"]', function () {
            z.U("notification", "visit_question", "top_nav_noti_message_qcomment_question")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER_COMMENT"] a[href^\x3d"/question"]', function () {
            z.U("notification", "visit_question", "top_nav_noti_message_acomment_question")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER"] a[href^\x3d"/question"]',
            function () {
                z.U("notification", "visit_question", "top_nav_noti_message_new_answser_question")
            });
        f.on("click", 'div[data-feedtype\x3d"ROUNDTABLE_ADD_RELATED"] h2 a[href^\x3d"/question"]', function () {
            var a = "q" === (0, window.$)(this).closest("div[data-feedtype]").data("type");
            z.U("feed", "visit_question", a ? "roundtable_question_add" : "roundtable_answer_add")
        }).on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] h2 a[href^\x3d"/question"]', function () {
            z.U("feed", "visit_question", "feed_answer_vote_question")
        }).on("click",
            'div[data-feedtype\x3d"ANSWER_CREATE"] h2 a[href^\x3d"/question"]', function () {
                z.U("feed", "visit_question", "feed_answer_answer_question")
            }).on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] h2 a[href^\x3d"/question"]', function () {
            z.U("feed", "visit_question", "feed_question_follow_question")
        }).on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] a.meta-item[href^\x3d"/question"]', function () {
            var a = (0, window.parseInt)((0, window.$)(this).text(), 10);
            a ? z.U("feed", "visit_question", "feed_question_follow_has_answers",
                a) : z.U("feed", "visit_question", "feed_question_follow_has_no_answer")
        }).on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] h2 a[href^\x3d"/question"]', function () {
            z.U("feed", "visit_question", "feed_question_ask_question")
        });
        z.F(z.Y, "ga_serach_select", function (a) {
            "question" === a.data.type && z.U("search", "visit_question", "top_search_list_" + (a.data.index + 1))
        });
        (0, window.$)("#zh-question-related-questions").on("click", "a", function (a) {
            a = (0, window.$)(a.delegateTarget).find("a").index(this) + 1;
            z.U.Im("question_answer",
                "visit_question", "question_answer_sidebar_related_questions_" + a)
        });
        (0, window.$)('#zh-question-followers-sidebar a[href^\x3d"/question"][href$\x3d"/followers"]').click(function () {
            z.U("question_answer", "visit_question_followers", "question_followers_count")
        });
        d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION"] a[href^\x3d"/question"]', function () {
            z.U("notification", "visit_question_log", "top_nav_noti_message_edit_question")
        });
        (0, window.$)('.zu-main-sidebar a[href^\x3d"/question"][href$\x3d"/log"]').click(function () {
            z.U("question_answer",
                "visit_question_log", "question_log")
        });
        (0, window.$)('div[data-feedtype\x3d"ANSWER_CREATE"] .answer-date-link').click(function () {
            z.U("feed", "visit_answer", "feed_answer_answer_date")
        });
        (0, window.$)('div[data-feedtype\x3d"ANSWER_VOTE_UP"] .answer-date-link').click(function () {
            z.U("feed", "visit_answer", "feed_answer_vote_date")
        });
        (0, window.$)("zh-single-question-page .answer-date-link").click(function () {
            z.U("question_answer", "visit_answer", "question_answer_date")
        });
        (0, window.$)('a.zm-side-nav-link[href\x3d"/draft"]').click(function () {
            var a =
                (0, window.parseInt)((0, window.$)(this).find(".zg-num").text() || 0, 10);
            z.U("navigation", "visit_draft", "sidebar_my_draft", a)
        });
        (0, window.$)('a.zm-side-nav-link[href\x3d"/collections"]').click(function () {
            var a = (0, window.parseInt)((0, window.$)(this).find(".zg-num").text() || 0, 10);
            z.U("navigation", "visit_collections", "sidebar_my_collections", a)
        });
        (0, window.$)('a.zm-side-nav-link[href\x3d"/question/invited"]').click(function () {
            var a = (0, window.parseInt)((0, window.$)(this).find(".zg-num").text() || 0, 10);
            z.U("navigation",
                "visit_question_invited", "sidebar_question_invited", a)
        });
        (0, window.$)('a[href\x3d"http://creativecommons.org"]').click(function () {
            z.U("navigation", "visit_cc_license")
        });
        z.F(z.Y, "ga_click_back_to_top", function () {
            z.U("navigation", "click_back_to_top")
        });
        z.F(z.Y, "ga_click_collapse_answer", function () {
            z.U("navigation", "click_collapse_answer")
        });
        z.F(z.Y, "ga_click_follow", function (a) {
            if ("people" === a.data.type && a.data.Wj) {
                var c = (0, window.$)(a.target);
                0 < c.parents("#zh-top-nav-live-new").length ? (a = d.find('a[name\x3d"focus"]').index(a.target) +
                    1, z.U("notification", "click_follow_people", "top_nav_noti_follower_follow", a)) : 0 < c.parents("#zh-tooltip").length ? z.U("navigation", "click_follow_people", "hovercard_follow") : 0 < c.parents("#zh-trendings").length ? (a = b.find("a.follow").index(a.target) + 1, z.U("navigation", "click_follow_people", "sidebar_intresting_people_" + a + "_follow")) : 0 < c.parents("#zh-topic-top-answerer").length ? z.U("topic", "click_follow_people", "topic_sidebar_top_answerer_follow") : z.U("navigation", "click_follow_people", "other_follow")
            }
        });
        z.F(z.Y, "ga_click_follow", function (a) {
            if ("people" === a.data.type && !a.data.Wj) {
                var c = (0, window.$)(a.target);
                0 < c.parents("#zh-top-nav-live-new").length ? (a = d.find('a[name\x3d"focus"]').index(a.target) + 1, z.U("notification", "click_unfollow_people", "top_nav_noti_follower_unfollow", a)) : 0 < c.parents("#zh-tooltip").length ? z.U("navigation", "click_unfollow_people", "hovercard_unfollow") : 0 < c.parents("#zh-trendings").length ? (a = b.find("a.follow").index(a.target) + 1, z.U("navigation", "click_unfollow_people", "sidebar_intresting_people_" +
                    a + "_unfollow")) : 0 < c.parents("#zh-topic-top-answerer").length && z.U("topic", "click_unfollow_people", "topic_sidebar_top_answerer_unfollow")
            }
        });
        z.F(z.Y, "ga_click_follow", function (a) {
            "question" === a.data.type && a.data.Wj && (a = (0, window.$)(a.target), 0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? z.U("feed", "click_follow_question", "feed_answer_vote_follow_question") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? z.U("feed", "click_follow_question", "feed_answer_answer_follow_question") :
                0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length ? z.U("feed", "click_follow_question", "feed_question_follow_follow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length ? z.U("feed", "click_follow_question", "feed_question_ask_follow_question") : 0 < a.parents("#zh-question-side-header-wrap").length ? z.U("question_answer", "click_follow_question", "question_follow_question") : 0 < a.parents(".zm-topic-list-container").length && z.U("topic", "click_follow_question", "topic_activity_follow_question"))
        });
        z.F(z.Y, "ga_click_follow", function (a) {
            "question" !== a.data.type || a.data.Wj || (a = (0, window.$)(a.target), 0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? z.U("feed", "click_unfollow_question", "feed_answer_vote_unfollow_question") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? z.U("feed", "click_unfollow_question", "feed_answer_answer_unfollow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_unFOLLOW"]').length ? z.U("feed", "click_unfollow_question", "feed_question_follow_unfollow_question") :
                0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length ? z.U("feed", "click_unfollow_question", "feed_question_ask_unfollow_question") : 0 < a.parents("#zh-question-side-header-wrap").length ? z.U("question_answer", "click_unfollow_question", "question_unfollow_question") : 0 < a.parents(".zm-topic-list-container").length && z.U("topic", "click_unfollow_question", "topic_activity_unfollow_question"))
        });
        z.F(z.Y, "ga_click_follow", function (a) {
            "topic" === a.data.type && a.data.Wj && (a = (0, window.$)(a.target), 0 < a.parents(".zm-search-result-topic-wrap").length ?
                z.U("search", "click_follow_topic", "search_result_card_topic_follow") : a.hasClass("zu-edit-button") && a.parent().hasClass("source") && z.U("topstory", "click_follow_topic", "topstory_answer_promote"))
        });
        z.F(z.Y, "ga_click_follow", function (a) {
            "topic" !== a.data.type || a.data.Wj || (a = (0, window.$)(a.target), 0 < a.parents(".zm-search-result-topic-wrap").length ? z.U("search", "click_unfollow_topic", "search_result_card_topic_unfollow") : a.hasClass("zu-edit-button") && a.parent().hasClass("source") && z.U("topstory", "click_unfollow_topic",
                    "topstory_answer_promote"))
        });
        z.F(z.Y, "ga_click_follow", function (a) {
            "favlist" === a.data.type && (a.data.Wj ? z.U("collection", "click_follow_collection", "collection_follow") : z.U("collection", "click_unfollow_collection", "collection_follow"))
        });
        z.F(z.Y, "ga_click_top_nav_noti", function (a) {
            0 < a.data.CK ? z.U("notification", "click_top_nav_noti", "top_nav_noti_alert", a.data.CK) : z.U("notification", "click_top_nav_noti", "top_nav_noti_no_alert")
        });
        z.F(z.Y, "ga_click_top_nav_noti_tab", function (a) {
            z.U("notification", "click_top_nav_noti_tab",
                ["top_nav_noti_tab_message", "top_nav_noti_tab_follower", "top_nav_noti_tab_vote"][a.data.tab])
        });
        z.F(z.Y, "ga_click_enlarge_image", function (a) {
            a = (0, window.$)(a.target).parents("div[data-feedtype]").attr("data-feedtype");
            "ANSWER_CREATE" === a ? z.U("navigation", "click_enlarge_image", "feed_answer_answer_image") : "ANSWER_VOTE_UP" === a && z.U("navigation", "click_enlarge_image", "feed_answer_vote_image")
        });
        z.F(z.Y, "ga_click_topic_more", function (a) {
            var b = "activity";
            -1 < window.location.href.indexOf("questions") && (b =
                "questions");
            a.data && a.data.Co ? z.U("feed", "click_topic_more", "topic_" + b + "_more_button") : z.U("feed", "click_topic_more", "topic_" + b + "_more_auto_load")
        });
        f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] a.inline-block[name\x3d"toggleExpanded"]', function () {
            z.U("feed", "click_expand", "feed_answer_vote_expand")
        }).on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] a.zm-item-vote-count[name\x3d"toggleExpanded"]', function () {
            z.U("feed", "click_expand", "feed_answer_vote_vote_count")
        }).on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] a.inline-block[name\x3d"toggleExpanded"]',
            function () {
                z.U("feed", "click_expand", "feed_answer_answer_expand")
            }).on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] a.zm-item-vote-count[name\x3d"toggleExpanded"]', function () {
            z.U("feed", "click_expand", "feed_answer_answer_vote_count")
        });
        g = (0, window.$)("zh-single-question-page").on("click", '#zh-question-detail a.inline-block[name\x3d"expand"]', function () {
            z.U("question_answer", "click_expand", "question_supplement_expand")
        });
        g.on("click", '.zm-item-answer a[name\x3d"more"]', function () {
            z.U("question_answer",
                "click_expand", "question_answer_voters_more")
        });
        g.on("click", "#zh-question-collapsed-switcher", function () {
            z.U("question_answer", "click_expand", "question_answer_folded_expand")
        });
        c.on("click", 'a.inline-block[name\x3d"expand"]', function () {
            z.U("topic", "click_expand", "topic_activity_expand")
        }).on("click", 'a.zm-item-vote-count[name\x3d"expand"]', function () {
            z.U("topic", "click_expand", "topic_activity_vote_count")
        });
        z.F(z.Y, "ga_click_sorter_item", function (a) {
            (a = {added_time: "time", vote: "vote"}[a.data.key]) &&
            z.U("question_answer", "click_sort_answer", "question_answer_sorting_" + a)
        });
        z.F(z.Y, "ga_click_vote_up", function (a) {
            a = (0, window.$)(a.target.m());
            if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_up"; else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_up"; else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_vote_up"; else return;
            z.U("vote", "click_vote_up_answer", a)
        });
        z.F(z.Y, "ga_click_vote_down", function (a) {
            a =
                (0, window.$)(a.target.m());
            if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_down"; else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_down"; else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_vote_down"; else return;
            z.U("vote", "click_vote_down_answer", a)
        });
        z.F(z.Y, "ga_click_thank_answer", function (a) {
            a = (0, window.$)(a.target);
            if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_thank";
            else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_thank"; else if (0 < a.parents("#zh-question-answer-wrap").length) a = "question_answer_thank"; else if (0 < a.parents(".zm-topic-list-container").length) a = "topic_activity_thank"; else return;
            z.U("vote", "click_thank_answer", a)
        });
        z.F(z.Y, "ga_click_report_box", function (b) {
            z.U("report", "click_report_" + a(b.data.type) + "_box")
        });
        z.F(z.Y, "ga_click_report", function (b) {
            z.U("report", "click_report_" + a(b.data.type))
        });
        z.F(z.Y, "ga_click_collect_answer_box",
            function (a) {
                a = (0, window.$)(a.target);
                if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_collect"; else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_collect"; else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_collect"; else if (0 < a.parents(".zm-topic-list-container").length) a = "topic_activity_collect"; else return;
                z.U("collection", "click_collect_answer_box", a)
            });
        z.F(z.Y, "ga_click_collect_answer", function (a) {
            z.U("collection",
                "click_collect_answer", "collection_count", a.data.count)
        });
        z.F(z.Y, "ga_click_add_collection", function () {
            z.U("collection", "click_add_collection", "collect_answer_window_add_collection")
        });
        z.F(z.Y, "ga_click_answer_not_helpful", function (a) {
            a = (0, window.$)(a.target);
            if (0 < a.closest('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_not_helpful"; else if (0 < a.closest('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_not_helpful"; else if (0 < a.closest("#zh-question-answer-wrap").length) a =
                "question_answer_not_helpful"; else if (0 < a.closest(".zm-topic-list-container").length) a = "topic_activity_not_helpful"; else return;
            z.U("vote", "click_answer_not_helpful", a)
        });
        f.on("click");
        z.F(z.Y, "ga_click_question_ignore", function (a) {
            a = (0, window.$)(a.target);
            if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_ignore_question"; else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_ignore_question"; else if (0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length) a =
                "feed_question_follow_ignore_question"; else if (0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length) a = "feed_question_ask_ignore_question"; else return;
            z.U("feed", "click_question_ignore", a)
        });
        z.F(z.Y, "ga_question_topic_edit_start", function () {
            z.U("edit", "click_edit_question_topic", "question_topic_edit_start")
        });
        z.F(z.Y, "ga_question_topic_edit_finish_changed", function () {
            z.U("edit", "click_edit_question_topic", "question_topic_edit_finish_changed")
        });
        z.F(z.Y, "ga_question_title_edit_start", function () {
            z.U("edit",
                "click_edit_question_titile", "question_title_edit_start")
        });
        z.F(z.Y, "ga_question_title_edit_cancel", function () {
            z.U("edit", "click_edit_question_titile", "question_title_edit_cancel")
        });
        z.F(z.Y, "ga_question_title_edit_save_changed", function () {
            z.U("edit", "click_edit_question_titile", "question_title_edit_save_changed")
        });
        z.F(z.Y, "ga_question_title_edit_save_unchanged", function () {
            z.U("edit", "click_edit_question_titile", "question_title_edit_save_unchanged")
        });
        z.F(z.Y, "ga_question_supplement_edit_start",
            function () {
                z.U("edit", "click_edit_question_supplement", "question_supplement_edit_start")
            });
        z.F(z.Y, "ga_question_supplement_edit_cancel", function () {
            z.U("edit", "click_edit_question_supplement", "question_supplement_edit_cancel")
        });
        z.F(z.Y, "ga_question_supplement_edit_save_changed", function () {
            z.U("edit", "click_edit_question_supplement", "question_supplement_edit_save_changed")
        });
        z.F(z.Y, "ga_question_supplement_edit_save_unchanged", function () {
            z.U("edit", "click_edit_question_supplement", "question_supplement_edit_save_unchanged")
        });
        (0, window.$)("#zu-top-add-question").click(function () {
            z.U("question_answer", "click_add_question", "top_nav_question_add_start")
        });
        z.F(z.Y, "ga_click_add_question", function (a) {
            z.U("question_answer", "click_add_question", "question_add_submit_with_topics", a.data.total);
            z.U("question_answer", "click_add_question", "question_add_submit_with_suggested_topics", a.data.Ou);
            z.U("question_answer", "click_add_question", "question_add_submit_with_suggested_topics_percent", Math.round(a.data.Ou / a.data.total * 100))
        });
        (0, window.$)("#zh-question-answer-form-wrap .editable").focus(function () {
            z.U("question_answer",
                "click_add_answer", "question_answer_add_start")
        });
        (0, window.$)("#zh-question-answer-form-wrap .submit-button").click(function () {
            z.U("question_answer", "click_add_answer", "question_answer_add_publish")
        });
        z.F(z.Y, "ga_hover_hovercard", function (a) {
            a = (0, window.$)(a.target);
            var c, d, f;
            a.is('[data-tip^\x3d"p$"]') ? (d = "hover_people_hovercard", 0 < a.parents("div[data-feedtype]").length ? (c = "feed", 0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? 0 < a.parents(".zm-item-answer-author-info").length ? f = "feed_answer_vote_author_name" :
                0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_answer_vote_source_people_avatar" : "feed_answer_vote_author_name") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_answer_answer_source_people_avatar" : "feed_answer_answer_source_people_name") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length ? 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_question_follow_source_people_avatar" :
                    "feed_question_follow_source_people_name") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length && 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_question_ask_source_people_avatar" : "feed_question_ask_source_people_name")) : 0 < a.parents("#zh-trendings").length ? (c = "navigation", window.$.contains(b.find("li:nth-child(1)").get(0), a.get(0)) ? f = "sidebar_intresting_people_1" : window.$.contains(b.find("li:nth-child(2)").get(0), a.get(0)) ? f = "sidebar_intresting_people_2" : window.$.contains(b.find("li:nth-child(3)").get(0),
                    a.get(0)) && (f = "sidebar_intresting_people_3")) : 0 < a.parents("#zh-single-question-page").length ? (c = "question_answer", 0 < a.parents(".zm-item-answer-author-info").length ? f = 0 < a.find("img").length ? "question_answer_author_avatar" : "question_answer_author_name" : 0 < a.parents(".voters").length ? (f = a.parents(".voters").find('a[href^\x3d"/people"]').index(a.get(0)) + 1, f = "question_answer_voters_" + f) : 0 < a.parents(".zm-comment-list").length && (f = 0 < a.find("img").length ? "question_answer_comment_author_avatar" : "question_answer_comment_author_name")) :
                0 < a.parents("#zh-topic-top-answerer").length && (c = "topic", f = 0 < a.find("img").length ? "topic_sidebar_top_answerer_people_avatar" : "topic_sidebar_top_answerer_people_name")) : a.is('[data-tip^\x3d"t$"]') ? (d = "hover_topic_hovercard", 0 < a.parents("#zh-single-question-page").length && (c = "question_answer", f = "question_topic")) : a.is('[data-tip^\x3d"c$"]') ? (d = "hover_column_hovercard", 0 < a.parents("div[data-feedtype]").length && (c = "feed", 0 < a.parents('div[data-feedtype\x3d"ARTICLE_VOTE_UP"]').length ? f = "feed_article_vote" :
                0 < a.parents('div[data-feedtype\x3d"ARTICLE_CREATE"]').length && (f = "feed_article_create"))) : a.is('[data-tip^\x3d"r$"]') && (d = "hover_roundtable_hovercard", c = "feed", 0 < a.parents('div[data-feedtype\x3d"MEMBER_FOLLOW_ROUNDTABLE"]').length ? f = "feed_follow_roundtable" : 0 < a.parents('div[data-feedtype^\x3d"ROUNDTABLE"]').length && (f = "feed_roundtable_others"));
            c && d && f && z.U(c, d, f, void 0, !0)
        });
        z.F(z.Y, "ga_click_sign_in", function (a) {
            a.data && a.data.label ? z.U("sign_in", "click_sign_in", a.data.label) : z.U("sign_in", "click_sign_in")
        });
        z.F(z.Y, "ga_click_sign_in_close", function () {
            z.U("sign_in", "click_sign_in_close", "sign_in_box_main")
        });
        z.F(z.Y, "ga_click_sign_in_weibo", function (a) {
            z.U("sign_in", "click_sign_in_weibo", a.label)
        });
        z.F(z.Y, "ga_click_sign_in_qq", function (a) {
            z.U("sign_in", "click_sign_in_qq", a.label)
        });
        z.F(z.Y, "ga_click_sign_in_switch", function (a) {
            "signin" === a.data ? z.U("sign_in", "click_sign_in_switch", "sign_in_box_switch_to_sign_in") : "signup" === a.data && z.U("sign_in", "click_sign_in_switch", "sign_in_box_switch_to_sign_up")
        });
        z.F(z.Y, "ga_click_sign_in_link_account", function (a) {
            a.target ? (a = (0, window.$)(a.target), z.Va(a.parent().text(), "该邮箱已注册") ? z.U("sign_in", "click_sign_in_link_account", "sign_up_error_user_exists_link_account") : z.Va(a.parent().text(), "如果你已有知乎帐号") ? (0, window.$)(".view-warmup").is(":visible") ? z.U("sign_in", "click_sign_in_link_account", "sign_in_box_splash_link_account") : (0, window.$)(".view-info").is(":visible") && z.U("sign_in", "click_sign_in_link_account", "sign_in_box_sign_up_link_account") : z.Va(a.text(), "返回注册") &&
                z.U("sign_in", "click_sign_in_link_account", "sign_in_box_link_account_back")) : a.label && z.U("sign_in", "click_sign_in_link_account", a.label)
        });
        z.F(z.Y, "ga_click_sign_in_connect", function (a) {
            z.U("sign_in", "click_sign_in_weibo", a.label)
        });
        z.F(z.Y, "ga_click_sign_in_avatar", function () {
            z.U("sign_in", "click_sign_in_avatar", "sign_in_avatar_upload")
        });
        z.F(z.Y, "ga_click_sign_in_previous_step", function () {
            z.U("sign_in", "click_sign_in_previous_step", "sign_in_box_follow_user_previous")
        });
        z.F(z.Y, "ga_click_follow_topic",
            function (a) {
                0 < a.data ? z.U("sign_in", "click_follow_topic", "sign_in_box_follow_topic_next", a.data) : 0 === a.data && z.U("sign_in", "click_follow_topic", "sign_in_box_follow_topic_skip")
            });
        z.F(z.Y, "ga_click_follow_people", function (a) {
            0 < a.data ? z.U("sign_in", "click_follow_people", "sign_in_box_follow_people_next", a.data) : 0 === a.data && z.U("sign_in", "click_follow_people", "sign_in_box_follow_people_skip")
        });
        z.F(z.Y, "ga_click_play_video", function (a) {
            z.U("video", "click_play_video", a.label)
        });
        z.F(z.Y, "ga_visit_home_video",
            function () {
                z.U("video", "visit_home_video", "home_play_video_auto")
            });
        z.F(z.Y, "ga_click_close_video", function (a) {
            z.U("video", "click_close_video", a.label)
        });
        z.F(z.Y, "ga_click_share_video", function (a) {
            z.U("video", "click_share_video", a.label)
        })
    };
    var Wi = {}, Qi = /^\/lives\//;
    var Zi = /\s*;\s*/;
    z.e = z.Xi.prototype;
    z.e.isEnabled = function () {
        return window.navigator.cookieEnabled
    };
    z.e.set = function (a, b, c, d, f, g) {
        if (/[;=\s]/.test(a))throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))throw Error('Invalid cookie value "' + b + '"');
        z.ka(c) || (c = -1);
        f = f ? ";domain\x3d" + f : "";
        d = d ? ";path\x3d" + d : "";
        g = g ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires\x3d" + (new Date(1970, 1, 1)).toUTCString() : ";expires\x3d" + (new Date((0, z.I)() + 1E3 * c)).toUTCString();
        this.Ka.cookie = a + "\x3d" + b + f + d + c + g
    };
    z.e.get = function (a, b) {
        for (var c = a + "\x3d", d = (this.Ka.cookie || "").split(Zi), f = 0, g; g = d[f]; f++) {
            if (0 == g.lastIndexOf(c, 0))return g.substr(c.length);
            if (g == a)return ""
        }
        return b
    };
    z.e.remove = function (a, b, c) {
        var d = this.Of(a);
        this.set(a, "", 0, b, c);
        return d
    };
    z.e.ld = function () {
        return z.Yi(this).keys
    };
    z.e.Wc = function () {
        return z.Yi(this).values
    };
    z.e.Zg = function () {
        return !this.Ka.cookie
    };
    z.e.kb = function () {
        return this.Ka.cookie ? (this.Ka.cookie || "").split(Zi).length : 0
    };
    z.e.Of = function (a) {
        return z.ka(this.get(a))
    };
    z.e.Xh = z.aa(4);
    z.e.clear = function () {
        for (var a = z.Yi(this).keys, b = a.length - 1; 0 <= b; b--)this.remove(a[b])
    };
    z.aj = new z.Xi(window.document);
    z.aj.KX = 3950;
    $i();
    z.W = {
        set: function (a, b) {
            a.className = b
        }, get: function (a) {
            a = a.className;
            return z.pa(a) && a.match(/\S+/g) || []
        }, add: function (a, b) {
            var c = z.W.get(a), d = z.yb(arguments, 1), f = c.length + d.length;
            z.W.Qq(c, d);
            z.W.set(a, c.join(" "));
            return c.length == f
        }, remove: function (a, b) {
            var c = z.W.get(a), d = z.yb(arguments, 1), f = z.W.CF(c, d);
            z.W.set(a, f.join(" "));
            return f.length == c.length - d.length
        }, Qq: function (a, b) {
            for (var c = 0; c < b.length; c++)z.A(a, b[c]) || a.push(b[c])
        }, CF: function (a, b) {
            return z.mb(a, function (a) {
                return !z.A(b, a)
            })
        }, XY: function (a,
                         b, c) {
            for (var d = z.W.get(a), f = !1, g = 0; g < d.length; g++)d[g] == b && (z.xb(d, g--, 1), f = !0);
            f && (d.push(c), z.W.set(a, d.join(" ")));
            return f
        }, Rv: function (a, b, c) {
            var d = z.W.get(a);
            z.pa(b) ? z.tb(d, b) : z.na(b) && (d = z.W.CF(d, b));
            z.pa(c) && !z.A(d, c) ? d.push(c) : z.na(c) && z.W.Qq(d, c);
            z.W.set(a, d.join(" "))
        }, has: function (a, b) {
            return z.A(z.W.get(a), b)
        }, enable: function (a, b, c) {
            c ? z.W.add(a, b) : z.W.remove(a, b)
        }, toggle: function (a, b) {
            var c = !z.W.has(a, b);
            z.W.enable(a, b, c);
            return c
        }
    };
    var dj;
    z.x(z.oj, z.G);
    var Hm = z.t.document && z.t.document.documentElement && !!z.t.document.documentElement.setCapture;
    z.e = z.oj.prototype;
    z.e.Lg = z.aa(18);
    z.e.v = function () {
        return this.T
    };
    z.e.dB = z.aa(19);
    z.e.Wa = z.aa(20);
    z.e.D = function () {
        z.oj.o.D.call(this);
        z.md(this.handle, ["touchstart", "mousedown"], this.Hm, !1, this);
        this.T.removeAll();
        Hm && this.Ka.releaseCapture();
        this.handle = this.target = null
    };
    z.e.Hm = function (a) {
        var b = "mousedown" == a.type;
        if (!this.ec || this.mj || b && !z.Tc(a)) this.dispatchEvent("earlycancel"); else {
            if (0 == this.Ay)if (this.dispatchEvent(new uj("start", this, a.clientX, a.clientY, a))) this.mj = !0, this.WI && a.preventDefault(); else return; else this.WI && a.preventDefault();
            var b = this.Ka, c = b.documentElement, d = !Hm;
            this.T.g(b, ["touchmove", "mousemove"], this.$P, d);
            this.T.g(b, ["touchend", "mouseup"], this.Sr, d);
            Hm ? (c.setCapture(!1), this.T.g(c, "losecapture", this.Sr)) : this.T.g(z.Re(b), "blur", this.Sr);
            z.C && this.OQ && this.T.g(b, "dragstart", Mc);
            this.nV && this.T.g(this.nV, "scroll", this.Mt, d);
            this.clientX = this.Lu = a.clientX;
            this.clientY = this.Mu = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.deltaX = this.Qi ? z.nj(this.target) : this.target.offsetLeft;
            this.deltaY = this.target.offsetTop;
            this.nA = z.vf(z.J(this.Ka))
        }
    };
    z.e.Sr = function (a) {
        this.T.removeAll();
        Hm && this.Ka.releaseCapture();
        this.mj ? (this.mj = !1, this.dispatchEvent(new uj("end", this, a.clientX, a.clientY, a, rj(this, this.deltaX), sj(this, this.deltaY)))) : this.dispatchEvent("earlycancel")
    };
    z.e.$P = function (a) {
        if (this.ec) {
            var b = (this.Qi && pj(this) ? -1 : 1) * (a.clientX - this.clientX), c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.mj) {
                var d = this.Lu - this.clientX, f = this.Mu - this.clientY;
                if (d * d + f * f > this.Ay)if (this.dispatchEvent(new uj("start", this, a.clientX, a.clientY, a))) this.mj = !0; else {
                    this.Fd || this.Sr(a);
                    return
                }
            }
            c = qj(this, b, c);
            b = c.x;
            c = c.y;
            this.mj && this.dispatchEvent(new uj("beforedrag", this, a.clientX, a.clientY, a, b, c)) &&
            (tj(this, a, b, c), a.preventDefault())
        }
    };
    z.e.Mt = function (a) {
        var b = qj(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        tj(this, a, b.x, b.y)
    };
    z.e.Xw = function (a, b) {
        this.Qi && pj(this) ? this.target.style.right = a + "px" : this.target.style.left = a + "px";
        this.target.style.top = b + "px"
    };
    z.x(uj, z.Lc);
    var Im = z.C ? 'javascript:""' : "about:blank";
    z.x(z.vj, z.G);
    z.vj.prototype.handleEvent = function (a) {
        var b = new z.Pc(a.gc);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    z.vj.prototype.D = function () {
        z.vj.o.D.call(this);
        z.nd(this.RR);
        z.nd(this.SR);
        delete this.h
    };
    z.x(xj, z.R);
    z.e = xj.prototype;
    z.e.Hx = null;
    z.e.sb = !1;
    z.e.Pc = null;
    z.e.zc = null;
    z.e.Pe = null;
    z.e.gw = !1;
    z.e.U = function () {
        return "goog-modalpopup"
    };
    z.e.zj = function () {
        return this.Pc
    };
    z.e.B = function () {
        xj.o.B.call(this);
        var a = this.m(), b = (0, z.ab)(this.U()).split(" ");
        z.ij(a, b);
        z.nf(a, !0);
        z.Q(a, !1);
        this.Fz();
        yj(this)
    };
    z.e.Fz = function () {
        this.QW && !this.zc && (this.zc = this.K().B("iframe", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;" + (z.pa(void 0) ? (new z.Bd).wo(void 0).Sg() : ""),
            src: Im
        }), this.zc.className = this.U() + "-bg", z.Q(this.zc, !1), z.Jg(this.zc, 0));
        this.Pc || (this.Pc = this.K().B("DIV", this.U() + "-bg"), z.Q(this.Pc, !1))
    };
    z.e.qJ = function () {
        this.gw = !1
    };
    z.e.Ob = function (a) {
        return !!a && "DIV" == a.tagName
    };
    z.e.Y = function (a) {
        xj.o.Y.call(this, a);
        a = (0, z.ab)(this.U()).split(" ");
        z.ij(this.m(), a);
        this.Fz();
        yj(this);
        z.nf(this.m(), !0);
        z.Q(this.m(), !1)
    };
    z.e.C = function () {
        this.zc && z.af(this.zc, this.m());
        z.af(this.Pc, this.m());
        xj.o.C.call(this);
        z.bf(this.Pe, this.m());
        this.Hx = new z.vj(this.K().ua());
        this.v().g(this.Hx, "focusin", this.fp);
        zj(this, !1)
    };
    z.e.Hb = function () {
        this.V() && this.G(!1);
        z.Cc(this.Hx);
        xj.o.Hb.call(this);
        z.P(this.zc);
        z.P(this.Pc);
        z.P(this.Pe)
    };
    z.e.G = function (a) {
        a != this.sb && (this.pk && this.pk.stop(), this.Yk && this.Yk.stop(), this.nk && this.nk.stop(), this.Xk && this.Xk.stop(), this.wa && zj(this, a), a ? this.mB() : this.Rl())
    };
    z.e.NJ = function (a, b, c, d) {
        this.pk = a;
        this.nk = b;
        this.Yk = c;
        this.Xk = d
    };
    z.e.mB = function () {
        if (this.dispatchEvent("beforeshow")) {
            try {
                this.Zl = this.K().ua().activeElement
            } catch (a) {
            }
            this.OA();
            this.ha();
            this.v().g(this.K().Va(), "resize", this.OA);
            Aj(this, !0);
            this.focus();
            this.sb = !0;
            this.pk && this.Yk ? (z.ld(this.pk, "end", this.jg, !1, this), this.Yk.play(), this.pk.play()) : this.jg()
        }
    };
    z.e.Rl = function () {
        this.dispatchEvent("beforehide") && (this.v().qa(this.K().Va(), "resize", this.OA), this.sb = !1, this.nk && this.Xk ? (z.ld(this.nk, "end", this.fm, !1, this), this.Xk.play(), this.nk.play()) : this.fm(), this.uJ())
    };
    z.e.uJ = function () {
        try {
            var a = this.K(), b = a.ua().body, c = a.ua().activeElement || b;
            if (!this.Zl || this.Zl == b) {
                this.Zl = null;
                return
            }
            (c == b || a.contains(this.m(), c)) && this.Zl.focus()
        } catch (d) {
        }
        this.Zl = null
    };
    z.e.jg = function () {
        this.dispatchEvent("show")
    };
    z.e.fm = function () {
        Aj(this, !1);
        this.dispatchEvent("hide")
    };
    z.e.V = function () {
        return this.sb
    };
    z.e.focus = function () {
        this.lF()
    };
    z.e.OA = function () {
        this.zc && z.Q(this.zc, !1);
        this.Pc && z.Q(this.Pc, !1);
        var a = this.K().ua(), b = z.Oe(z.Re(a) || window),
            c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
            a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
        this.zc && (z.Q(this.zc, !0), z.Fg(this.zc, c, a));
        this.Pc && (z.Q(this.Pc, !0), z.Fg(this.Pc, c, a))
    };
    z.e.ha = function () {
        var a = this.K().ua(), b = z.Re(a) || window;
        if ("fixed" == z.yg(this.m()))var c = a = 0; else c = z.vf(this.K()), a = c.x, c = c.y;
        var d = z.Hg(this.m()), b = z.Oe(b), a = Math.max(a + b.width / 2 - d.width / 2, 0),
            c = Math.max(c + b.height / 2 - d.height / 2, 0);
        z.zg(this.m(), a, c);
        z.zg(this.Pe, a, c)
    };
    z.e.fp = function (a) {
        this.gw ? this.qJ() : a.target == this.Pe && z.vd(this.lF, 0, this)
    };
    z.e.lF = function () {
        try {
            z.C && this.K().ua().body.focus(), this.m().focus()
        } catch (a) {
        }
    };
    z.e.D = function () {
        z.Cc(this.pk);
        this.pk = null;
        z.Cc(this.nk);
        this.nk = null;
        z.Cc(this.Yk);
        this.Yk = null;
        z.Cc(this.Xk);
        this.Xk = null;
        xj.o.D.call(this)
    };
    var ok, Mm, Nm, Om, Pm, Qm, Rm, Jm, Sm, Pj;
    z.x(z.Bj, xj);
    z.e = z.Bj.prototype;
    z.e.cF = !0;
    z.e.zy = !0;
    z.e.cm = !0;
    z.e.ix = !0;
    z.e.fr = .5;
    z.e.NB = "";
    z.e.rc = null;
    z.e.Jb = null;
    z.e.ME = !1;
    z.e.zd = null;
    z.e.dd = null;
    z.e.Uu = null;
    z.e.yd = null;
    z.e.Ye = null;
    z.e.oc = null;
    z.e.qp = "dialog";
    z.e.U = function () {
        return this.Rc
    };
    z.e.Na = function (a) {
        this.NB = a;
        this.dd && z.mf(this.dd, a)
    };
    z.e.ia = function (a) {
        this.rc = a = z.Hd(a, null);
        this.Ye && z.Fe(this.Ye, a)
    };
    z.e.Ua = z.aa(21);
    z.e.ki = function () {
        return this.qp
    };
    z.e.Du = z.aa(22);
    z.e.S = function () {
        z.Dj(this);
        return this.Ye
    };
    z.e.gs = z.aa(24);
    z.e.fi = function () {
        z.Dj(this);
        return this.m()
    };
    z.e.zj = function () {
        z.Dj(this);
        return z.Bj.o.zj.call(this)
    };
    z.e.Op = function (a) {
        a != this.cm && Hj(this, a)
    };
    z.e.B = function () {
        z.Bj.o.B.call(this);
        var a = this.m(), b = this.K();
        this.zd = b.B("DIV", this.Rc + "-title", this.dd = b.B("SPAN", {
            className: this.Rc + "-title-text",
            id: this.de()
        }, this.NB), this.yd = b.B("SPAN", this.Rc + "-title-close"));
        z.Ze(a, this.zd, this.Ye = b.B("DIV", this.Rc + "-content"), this.oc = b.B("DIV", this.Rc + "-buttons"));
        z.bj(this.dd, "heading");
        z.bj(this.yd, "button");
        z.nf(this.yd, !0);
        z.cj(this.yd, "label", Jm);
        this.Uu = this.dd.id;
        z.bj(a, this.ki());
        z.cj(a, "labelledby", this.Uu || "");
        this.rc && z.Fe(this.Ye, this.rc);
        z.Q(this.yd,
            this.zy);
        this.pc && (a = this.pc, a.h = this.oc, a.render());
        z.Q(this.oc, !!this.pc);
        Gj(this, this.fr)
    };
    z.e.Y = function (a) {
        z.Bj.o.Y.call(this, a);
        a = this.m();
        var b = this.Rc + "-content";
        this.Ye = z.Le(window.document, null, b, a)[0];
        this.Ye || (this.Ye = this.K().B("DIV", b), this.rc && z.Fe(this.Ye, this.rc), a.appendChild(this.Ye));
        var b = this.Rc + "-title", c = this.Rc + "-title-text", d = this.Rc + "-title-close";
        (this.zd = z.Le(window.document, null, b, a)[0]) ? (this.dd = z.Le(window.document, null, c, this.zd)[0], this.yd = z.Le(window.document, null, d, this.zd)[0]) : (this.zd = this.K().B("DIV", b), a.insertBefore(this.zd, this.Ye));
        this.dd ? (this.NB =
            z.of(this.dd), this.dd.id || (this.dd.id = this.de())) : (this.dd = z.O("SPAN", {
            className: c,
            id: this.de()
        }), this.zd.appendChild(this.dd));
        this.Uu = this.dd.id;
        z.cj(a, "labelledby", this.Uu || "");
        this.yd || (this.yd = this.K().B("SPAN", d), this.zd.appendChild(this.yd));
        z.Q(this.yd, this.zy);
        b = this.Rc + "-buttons";
        (this.oc = z.Le(window.document, null, b, a)[0]) ? (this.pc = new z.Oj(this.K()), this.pc.w(this.oc)) : (this.oc = this.K().B("DIV", b), a.appendChild(this.oc), this.pc && (a = this.pc, a.h = this.oc, a.render()), z.Q(this.oc, !!this.pc));
        Gj(this, this.fr)
    };
    z.e.C = function () {
        z.Bj.o.C.call(this);
        this.v().g(this.m(), "keydown", this.jp).g(this.m(), "keypress", this.jp);
        this.v().g(this.oc, "click", this.GS);
        Ij(this, this.ix);
        this.v().g(this.yd, "click", this.AT);
        var a = this.m();
        z.bj(a, this.ki());
        "" !== this.dd.id && z.cj(a, "labelledby", this.dd.id);
        this.cm || Hj(this, !1)
    };
    z.e.Hb = function () {
        this.V() && this.G(!1);
        Ij(this, !1);
        z.Bj.o.Hb.call(this)
    };
    z.e.G = function (a) {
        a != this.V() && (this.wa || this.render(), z.Bj.o.G.call(this, a))
    };
    z.e.jg = function () {
        z.Bj.o.jg.call(this);
        this.dispatchEvent(ok)
    };
    z.e.fm = function () {
        z.Bj.o.fm.call(this);
        this.dispatchEvent(z.pk);
        this.ME && this.H()
    };
    z.e.DV = function () {
        var a = this.K().ua(), b = z.Oe(z.Re(a) || window), c = Math.max(a.body.scrollWidth, b.width),
            a = Math.max(a.body.scrollHeight, b.height), d = z.Hg(this.m());
        "fixed" == z.yg(this.m()) ? this.Jb.lt = new z.qg(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) || new z.qg(window.NaN, window.NaN, window.NaN, window.NaN) : this.Jb.lt = new z.qg(0, 0, c - d.width, a - d.height) || new z.qg(window.NaN, window.NaN, window.NaN, window.NaN)
    };
    z.e.AT = function () {
        Jj(this)
    };
    z.e.Bf = function (a) {
        this.ME = a
    };
    z.e.D = function () {
        this.oc = this.yd = null;
        z.Bj.o.D.call(this)
    };
    z.e.GS = function (a) {
        a:{
            for (a = a.target; null != a && a != this.oc;) {
                if ("BUTTON" == a.tagName)break a;
                a = a.parentNode
            }
            a = null
        }
        if (a && !a.disabled) {
            a = a.name;
            var b = this.pc.get(a);
            this.dispatchEvent(new Kj(a, b)) && this.G(!1)
        }
    };
    z.e.jp = function (a) {
        var b = !1, c = !1, d = this.pc, f = a.target;
        if ("keydown" == a.type)if (this.cF && 27 == a.keyCode) {
            var g = d && d.yw, f = "SELECT" == f.tagName && !f.disabled;
            g && !f ? (c = !0, b = d.get(g), b = this.dispatchEvent(new Kj(g, b))) : f || (b = !0)
        } else {
            if (9 == a.keyCode && a.shiftKey && f == this.m()) {
                this.gw = !0;
                try {
                    this.Pe.focus()
                } catch (m) {
                }
                z.vd(this.qJ, 0, this)
            }
        } else if (13 == a.keyCode) {
            if ("BUTTON" == f.tagName && !f.disabled) g = f.name; else if (f == this.yd) Jj(this); else if (d) {
                var h = d.Yw, k = h && d.kf(h), f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName ||
                    "A" == f.tagName) && !f.disabled;
                !k || k.disabled || f || (g = h)
            }
            g && d && (c = !0, b = this.dispatchEvent(new Kj(g, String(d.get(g)))))
        } else f == this.yd && 32 == a.keyCode && Jj(this);
        if (b || c) a.stopPropagation(), a.preventDefault();
        b && this.G(!1)
    };
    z.x(Kj, z.Lc);
    z.Nj = "dialogselect";
    z.pk = "afterhide";
    ok = "aftershow";
    z.x(z.Oj, z.Rd);
    z.e = z.Oj.prototype;
    z.e.Rc = "goog-buttonset";
    z.e.Yw = null;
    z.e.h = null;
    z.e.yw = null;
    z.e.set = function (a, b, c, d) {
        z.Rd.prototype.set.call(this, a, b);
        c && (this.Yw = a);
        d && (this.yw = a);
        return this
    };
    z.e.Bd = function (a, b, c) {
        return this.set(a.key, a.caption, b, c)
    };
    z.e.render = function () {
        if (this.h) {
            z.Fe(this.h, Mj);
            var a = z.J(this.h);
            this.forEach(function (b, c) {
                var d = a.B("BUTTON", {name: c}, b);
                c == this.Yw && (d.className = this.Rc + "-default");
                this.h.appendChild(d)
            }, this)
        }
    };
    z.e.w = function (a) {
        if (a && 1 == a.nodeType) {
            this.h = a;
            a = this.h.getElementsByTagName("BUTTON");
            for (var b = 0, c, d, f; c = a[b]; b++)if (d = c.name || c.id, f = z.of(c) || c.value, d) {
                var g = 0 == b;
                this.set(d, f, g, c.name == z.Km);
                g && z.hj(c, this.Rc + "-default")
            }
        }
    };
    z.e.m = function () {
        return this.h
    };
    z.e.K = function () {
        return this.da
    };
    z.e.kf = function (a) {
        for (var b = this.h.getElementsByTagName("BUTTON"), c = 0, d; d = b[c]; c++)if (d.name == a || d.id == a)return d;
        return null
    };
    z.Km = "cancel";
    z.Lm = {yg: "ok", Te: z.Km, Ag: "yes", Ih: "no", $i: "save", Zi: "continue"};
    Mm = z.u("OK");
    Nm = z.u("Cancel");
    Om = z.u("Yes");
    Pm = z.u("No");
    Qm = z.u("Save");
    Rm = z.u("Continue");
    Jm = z.u("Close");
    Sm = {yg: Mm, Te: Nm, Ag: Om, Ih: Pm, $i: Qm, Zi: Rm};
    Pj = {
        yg: {key: "ok", caption: Sm.yg},
        Te: {key: z.Km, caption: Sm.Te},
        Ag: {key: "yes", caption: Sm.Ag},
        Ih: {key: "no", caption: Sm.Ih},
        $i: {key: "save", caption: Sm.$i},
        Zi: {key: "continue", caption: Sm.Zi}
    };
    "undefined" != typeof window.document && ((new z.Oj).Bd(Pj.yg, !0, !0), z.Cj(), (new z.Oj).Bd(Pj.Ag, !0).Bd(Pj.Ih, !1, !0), (new z.Oj).Bd(Pj.Ag).Bd(Pj.Ih, !0).Bd(Pj.Te, !1, !0), (new z.Oj).Bd(Pj.Zi).Bd(Pj.$i).Bd(Pj.Te, !0, !0));
    (function () {
        var a = z.Ui || z.Vj, b = a && window.navigator.userAgent.match(/OS\s(\w+)/)[1].slice(0, 3).replace(/_/g, ".");
        z.Tm = "contentEditable" in window.document.documentElement && !(a && 5 > b) && !(z.Wl && 3 > window.navigator.userAgent.match(/Android (\d)/)[1]);
        var c = (0, window.$)(window.document.documentElement);
        z.Um = "ontouchstart" in window;
        c.addClass(z.Uj ? "mobile" : "no-mobile");
        z.Vm = a && 6 <= b || !z.Uj;
        "orientation" in window && (a = function () {
            var a = {0: "portrait", 90: "landscape landscape-left", "-90": "landscape landscape-right"},
                b = a[window.orientation] || "";
            c.removeClass(z.Gb(a).join(" ")).addClass(b)
        }, (0, window.$)(window).on("orientationchange", a), a())
    })();
    Sm = {yg: "确定", Te: "取消", Ag: "是", Ih: "否", $i: "保存", Zi: "继续"};
    Pj = {
        yg: {key: "ok", caption: Sm.yg},
        Te: {key: z.Km, caption: Sm.Te},
        Ag: {key: "yes", caption: Sm.Ag},
        Ih: {key: "no", caption: Sm.Ih},
        $i: {key: "save", caption: Sm.$i},
        Zi: {key: "continue", caption: Sm.Zi}
    };
    z.Cj = function () {
        return (new z.Oj).Bd(Pj.Te, !1, !0).Bd(Pj.yg, !0)
    };
    z.x(z.V, z.Bj);
    z.v("ZH.ui.Dialog", z.V);
    z.e = z.V.prototype;
    z.e.aL = null;
    z.e.C = function () {
        var a = !z.Um;
        this.ix = a;
        Ij(this, a && this.wa);
        z.V.o.C.call(this);
        this.Wk && z.Sj(this);
        z.Tj(this, this.aL)
    };
    z.e.mR = z.Qj(function () {
        var a = z.Ug(), b = a / 2,
            a = z.Ka("html.modal-open {overflow:hidden}html.modal-doc-overflow {margin-right:%spx}html.modal-doc-overflow .modal-translate-shifting.sticky {transition-property:none; transform:translateX(-%spx)}html.modal-doc-overflow .modal-shifting {position:relative; right:%spx}", a, b, b);
        z.Lg(a)
    });
    z.e.vm = z.aa(25);
    z.e.ha = function () {
        if (!this.cm || !window.Modernizr.flexbox)if (z.V.o.ha.call(this), !this.oF) {
            var a = (0, window.$)(this.m()), b = (0, window.$)(window).scrollTop();
            if (!z.Uj || z.Vj)var c = (0, window.parseInt)(a.css("top").slice(0, -2)),
                b = "-\x3d" + Math.min(c - b, 60) + "px";
            a.add(this.Pe).css("top", b)
        }
    };
    z.e.focus = function () {
        z.Uj && !z.Vj || z.V.o.focus.call(this)
    };
    z.V.prototype.setTitle = z.V.prototype.Na;
    z.V.prototype.setModal = z.V.prototype.Op;
    z.V.prototype.setDisposeOnHide = z.V.prototype.Bf;
    z.V.prototype.setVisible = z.V.prototype.G;
    z.V.prototype.getContentElement = z.V.prototype.S;
    z.V.prototype.getDialogElement = z.V.prototype.fi;
    z.V.prototype.listen = z.V.prototype.g;
    z.v("ZH.dialog", z.X);
    z.X.confirm = Wj(function (a, b, c, d) {
        var f = {buttons: {yes: "确认", cancel: "取消"}}, g = void 0;
        z.ta(a) ? (g = a, c = b) : g = {title: a, content: b};
        window.$.extend(!0, f, g);
        return z.X(f, (c || z.p).bind(d))
    });
    z.X.confirm = z.X.confirm;
    z.X.alert = Wj(function (a, b) {
        var c = {title: "提示信息", buttons: {yes: "确定"}};
        z.ta(a) ? Object.assign(c, a) : c.content = a;
        return z.X(c, b)
    });
    z.X.alert = z.X.alert;
    z.X.message = Wj(function (a, b, c) {
        if (a) {
            var d = z.X({title: c || "提示信息", content: z.Ma(a), buttons: {}});
            (0, window.setTimeout)(function () {
                d.G(!1)
            }, b || 2E3);
            return d
        }
    });
    z.X.async = function (a) {
        var b = window.$.extend({}, {title: "信息", ZJ: "加载中", buttons: {}, onload: z.p}, a), c = z.O("div", {
            className: "modal-dialog-async-loading",
            innerHTML: (b.ZJ || "加载中") + '\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e'
        }), d = z.X(b);
        d.S().appendChild(c);
        b.Iw && b.Iw.then(function (a) {
            z.P(c);
            d.Fd || (a && d.ia(a), d.ha(), b.onload(d.S(), d))
        });
        return d
    };
    z.x(z.Xj, z.G);
    z.Xj.prototype.v = function () {
        return this.pf || (this.pf = new z.xd(this))
    };
    z.Xj.prototype.Pg = z.aa(26);
    z.x(Yj, z.Xj);
    Yj.prototype.init = function () {
        if (this.h = z.L("zh-global-message")) this.UH = z.N("zu-global-notify-msg", this.h), this.v().g(this.h, "click", this.Qa)
    };
    Yj.prototype.Qa = function (a) {
        a.target && a.target.name && z.Q(this.h, !1)
    };
    Yj.prototype.fireEvent = function (a) {
        this.dispatchEvent(a)
    };
    z.x(z.Zj, z.Lc);
    z.Y = new Yj;
    z.Y.init();
    z.v("ZH.i", function (a) {
        z.Y.dispatchEvent(new z.Zj("iframe_data", a))
    });
    z.v("ZH.cm", function (a, b) {
        z.Y.dispatchEvent(new z.Zj(a, b))
    });
    z.x(z.dk, z.R);
    z.e = z.dk.prototype;
    z.e.Y = function (a) {
        z.dk.o.Y.call(this, a);
        this.Da = (0, window.$)(a).parents("form")
    };
    z.e.C = function () {
        z.dk.o.C.call(this);
        this.W = (0, window.$)(this.m());
        this.Kk = (0, window.$)("img", this.W);
        this.Xi = (0, window.$)('input[name\x3d"captcha"]', this.W);
        this.mL = (0, window.$)(".Captcha-imageConatiner", this.W);
        this.tL = (0, window.$)(".Captcha-prompt", this.W);
        this.Nm = "cn" === this.W.data("type");
        fk(this);
        this.W.on("click", ".js-refreshCaptcha", this.ju.bind(this, !0));
        this.XJ = !this.Nm;
        this.Nm && (this.Kk.on("click", this.aS.bind(this)), this.W.on("click", ".Captcha-mark", this.GW.bind(this)), this.qG = this.GQ.bind(this),
            this.Da.on("input", "input", this.qG))
    };
    z.e.aS = function (a) {
        this.trackEvent("Select", "Icon");
        if (7 === (0, window.$)(".Captcha-mark", this.W).length) this.Da.data("validator").showErrors({captcha: "最多只能选择 7 个点"}); else {
            gk(this);
            var b = this.Kk.offset(), c = a.pageX - b.left - this.Hz;
            a = a.pageY - b.top - this.Hz;
            (0, window.$)("\x3cspan /\x3e", {"class": "Captcha-mark sprite-index-icon-delete"}).css({
                left: c,
                top: a
            }).appendTo(this.mL).mouseenter(function () {
                (0, window.$)(this).addClass("sprite-index-icon-delete").removeClass("sprite-index-icon-mark")
            }).mouseleave(function () {
                (0, window.$)(this).addClass("sprite-index-icon-mark").removeClass("sprite-index-icon-delete")
            });
            ek(this)
        }
    };
    z.e.GW = function (a) {
        this.trackEvent("Unselect", "Icon");
        gk(this);
        (0, window.$)(a.target).remove();
        ek(this)
    };
    z.e.ju = function (a) {
        a && this.trackEvent("Click", "Button");
        this.trackEvent("Refresh", "Image");
        this.pb = (0, z.I)().toString();
        a = (new z.vh).add("r", this.pb);
        "login" === this.Xb && a.add("type", "login");
        this.Nm && a.add("lang", "cn");
        var b = th(new z.ph(this.$B), a);
        fk(this);
        this.Kk.fadeOut(200, function () {
            (0, window.$)(this).attr("src", b.toString()).fadeIn(200)
        })
    };
    z.e.GQ = function () {
        this.Nm && 0 === this.Da.serializeArray().filter(function (a) {
            return "captcha" !== a.name && "" === window.$.trim(a.value)
        }).length && (this.Da.off("input", "input", this.qG), this.XJ = !0, z.hk(this))
    };
    z.e.info = function () {
        return "1" === z.aj.get("login" === this.Xb ? "l_n_c" : "n_c") ? {
            captcha: {
                type: this.Nm ? "Chinese" : "English",
                id: this.pb
            }
        } : {}
    };
    z.e.trackEvent = function (a, b) {
        var c = this.info();
        "show" === a ? (0, z.Gm)(this, {element: b}, c) : (0, z.Gi)(this, {action: a, element: b}, c)
    };
    var kk = "closure_memoize_cache_";
    var Wm = (0, z.q)(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            return window.setTimeout(a, 1E3 / 60)
        }, window);
    window.$.easing.easeOutCubic = function (a, b, c, d, f) {
        return d * ((b = b / f - 1) * b * b + 1) + c
    };
    (function (a) {
        window.$.fn.onTransitionEnd = function (b, c) {
            (0, window.$)(this).one(a, b).emulateTransitionEnd(c);
            return this
        };
        window.$.fn.emulateTransitionEnd = function (b) {
            var c = !1, d = this;
            (0, window.$)(this).one(a, function () {
                c = !0
            });
            (0, window.setTimeout)(function () {
                c || (0, window.$)(d).trigger(a)
            }, b);
            return this
        }
    })({
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        msTransition: "MSTransitionEnd",
        transition: "transitionend"
    }[window.Modernizr.prefixed("transition") ||
    "transition"]);
    (function (a) {
        window.$.fn.onAnimationEnd = function (b, c) {
            (0, window.$)(this).one(a, b).emulateAnimationEnd(c);
            return this
        };
        window.$.fn.emulateAnimationEnd = function (b) {
            var c = !1, d = this;
            (0, window.$)(this).one(a, function () {
                c = !0
            });
            (0, window.setTimeout)(function () {
                c || (0, window.$)(d).trigger(a)
            }, b);
            return this
        }
    })({
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "mozAnimationEnd",
        OAnimation: "oanimationend",
        msAnimation: "MSAnimationEnd",
        animation: "animationend"
    }[window.Modernizr.prefixed("animation") || "animation"]);
    window.$.fn.ie = function () {
        var a = {}, b = this.serializeArray();
        window.$.each(b, function () {
            a[this.name] ? (a[this.name].push || (a[this.name] = [a[this.name]]), a[this.name].push(this.value || "")) : a[this.name] = this.value || ""
        });
        return a
    };
    z.x(lk, z.G);
    lk.prototype.play = function () {
        var a = this;
        Wm(function () {
            a.W.toggleClass(a.tW)
        });
        if (window.Modernizr.csstransitions) a.W.onTransitionEnd(function () {
            a.dispatchEvent("end")
        }, a.duration); else a.dispatchEvent("end")
    };
    lk.prototype.stop = z.p;
    z.l(mk, z.V);
    z.e = mk.prototype;
    z.e.B = function () {
        z.V.prototype.B.call(this);
        z.Dj(this);
        this.Se = (0, window.$)(this.zd);
        this.Oc = (0, window.$)(this.S());
        (0, window.$)(z.Fj(this)).addClass("z-ico-close");
        this.zq = (0, window.$)('\x3cspan class\x3d"mutiview-dialog-title-back z-ico-left"\x3e\x3c/span\x3e').appendTo(this.Se)
    };
    z.e.C = function () {
        z.V.prototype.C.call(this);
        this.zq.click(window.$.proxy(this.RV, this));
        var a = this.m(), b = this.zj();
        (0, window.$)(a).addClass(this.RT);
        this.NJ(new lk(a, "show", 300), new lk(a, "show", 300), new lk(b, "show", 300), new lk(b, "show", 300))
    };
    z.e.ia = function (a, b) {
        z.V.prototype.ia.call(this, a);
        (0, window.$)(".title", this.Oc).replaceAll(Ej(this));
        var c = (0, window.$)(".title", this.Se).addClass("right"),
            d = (0, window.$)(".view", this.Oc).addClass("right");
        b ? (this.Jk = (0, window.$)(".title." + b, this.Se), this.Ui = (0, window.$)(".view." + b, this.Oc)) : (this.Jk = c.first(), this.Ui = d.first());
        this.Jk.removeClass("right");
        this.Ui.removeClass("right")
    };
    z.e.RV = function () {
        var a = this.Ui, b = this.Jk, c = this.VI.pop(), d = this.UI.pop();
        c.length && d.length && (rk(this), c.css("visibility", "visible").removeClass(" left"), d.css("visibility", "visible").removeClass("left"), a.addClass("right").onTransitionEnd(function () {
            a.css("visibility", "hidden")
        }, 300), b.addClass("right").onTransitionEnd(function () {
            b.css("visibility", "hidden")
        }, 300), this.Ui = c, this.Jk = d, sk(this, this.sD.pop()), this.Pt())
    };
    z.e.Pt = function () {
    };
    window.$.fn.placeholder = function (a) {
        return this.each(function () {
            var b = (0, window.$)(this), c = b.data("placeholder");
            c || b.data("placeholder", c = new z.vk(this, a));
            c.check()
        })
    };
    z.xk = "placeholder" in window.document.createElement("input");
    z.e = z.vk.prototype;
    z.e.defaults = {text: "", offsetParent: null, pD: !1};
    z.e.kN = ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"];
    z.e.wk = function (a) {
        var b = this.input, c = this.J;
        c.text = a || "";
        z.xk ? (Ak(b) || z.cj(b, "label", c.text), b.setAttribute("placeholder", c.text)) : z.mf(this.label, c.text)
    };
    z.e.H = function () {
        this.Tg && (this.Tg.removeAll(), this.Tg.H());
        z.P(this.label);
        this.label = null
    };
    z.e.offsetParent = function () {
        return this.J.offsetParent || this.input.offsetParent
    };
    z.e.check = function () {
        if (!z.xk)if (this.Zg() && z.Kg(this.input)) {
            this.show();
            var a = this.input, b = z.Sg(a), c = this.label, d = z.Cg(a, this.offsetParent());
            z.rg(c, {
                left: d.x + b.left + "px",
                top: d.y + b.top + "px",
                width: Bk(a, "width"),
                fontSize: Bk(a, "fontSize"),
                lineHeight: Bk(a, "lineHeight"),
                fontFamily: Bk(a, "fontFamily")
            });
            this.offsetParent().appendChild(c)
        } else this.hide()
    };
    z.e.show = function () {
        this.label && z.Q(this.label, !0)
    };
    z.e.hide = function () {
        this.label && z.Q(this.label, !1)
    };
    z.e.Zg = function () {
        return !this.input.value
    };
    z.e.position = function () {
        z.y(this.kN, function (a) {
            this.label.style[a] = Bk(this.input, a)
        }, this)
    };
    z.Ym = {
        EG: function () {
            var a = this, b = this.m(), c = (0, window.$)(".js-show-sns-buttons", b);
            c.click(function () {
                c.onTransitionEnd(function () {
                    c.css("visibility", "hidden")
                }, 250).removeClass("is-visible").next(".sns-buttons").addClass("is-visible")
            });
            (0, window.$)("button.weibo", b).click(function () {
                a.na({category: "sign_in_or_sign_up", action: "click_sign_with_weibo_start"});
                z.ak("sina")
            });
            (0, window.$)("button.qq", b).click(function () {
                a.na({category: "sign_in_or_sign_up", action: "click_sign_with_qq_start"});
                z.ak("qq")
            });
            (0, window.$)("button.wechat", b).click(function () {
                a.na({category: "sign_in_or_sign_up", action: "click_sign_with_wechat_start"});
                z.ak("wechat")
            })
        }, na: function (a) {
            this.Hf && !a.label && (a.label = this.Hf);
            this.dispatchEvent(window.$.extend({type: "trackRequested"}, a)) && z.xi(a)
        }, mI: function (a) {
            var b = (0, window.$)("form", this.m());
            (0, window.$)(":submit", b).click(function () {
                a(b.ie())
            });
            (0, window.$)("keydown", b).click(function (c) {
                13 === c.keyCode && a(b.ie())
            })
        }, De: function (a, b) {
            var c = (0, window.$)(".submit", a);
            a.validate(window.$.extend({},
                z.Xm, {submitHandler: z.uk(c, window.$.proxy(b, this))}));
            this.Da = a
        }, getData: function () {
            return this.Da.ie()
        }, showErrors: function (a) {
            this.Da.data("validator").showErrors(a)
        }, Ss: function (a) {
            a = (0, window.$)(".input-wrapper.toggle-password", a);
            var b = (0, window.$)("input", a), c = (0, window.$)(".z-ico-show-password", a);
            c.click(function () {
                "password" === b.prop("type") ? (c.addClass("z-ico-hide-password"), b.prop("type", "text")) : (c.removeClass("z-ico-hide-password"), b.prop("type", "password"))
            })
        }, Rs: function (a, b) {
            var c =
                z.tk(a, 60, function (a) {
                    return a ? "%s 秒后重发" : "重发验证码"
                }, window.$.proxy(b, this), !0);
            z.Ac(this, c);
            return c
        }, sl: function () {
            var a = this;
            z.xk || (0, window.setTimeout)(function () {
                (0, window.$)("input[placeholder]:visible", a.Oc).placeholder()
            }, 10)
        }, Od: function () {
            this.dispatchEvent("beforeredirect");
            var a = (new z.ph(window.location.href)).ze().get("next");
            a ? window.location.href = a : window.location.reload()
        }, rf: function (a) {
            return !/^\+?[0-9]+$/.test(a)
        }, wb: function (a, b, c) {
            a[b] && (a[c] = a[b], delete a[b])
        }, bd: function (a) {
            this.Hf =
                a
        }, oq: function (a) {
            var b = [this.getParent(), this].find(function (a) {
                return a instanceof mk
            });
            b ? nk(b, a) : a.G(!0)
        }
    };
    z.Xm = {
        ignore: ".is-ignoreValidation",
        onkeyup: !1,
        onfocusout: !1,
        validClass: "",
        focusInvalid: !1,
        highlight: z.p,
        messages: {
            fullname: {required: "请填写姓名"},
            invitation_code: {required: "请填写邀请码"},
            account: {required: z.Hk ? "请填写邮箱" : "请填写手机号或邮箱"},
            agreement: {required: "请勾选并同意协议"},
            phone_num: {required: "请填写手机号"},
            email: {required: "请填写邮箱"},
            password: {required: "请填写密码"},
            verification_code: {required: "请填写验证码"}
        },
        errorPlacement: function (a, b) {
            if (!b.next(".error").length) {
                var c = b.prop("name");
                "captcha" === c && Wm(function () {
                    b.nextAll(".Captcha-prompt").addClass("is-hidden")
                });
                "agreement" === c ? b.parents(".agreement").find(".error").remove().end().append('\n          \x3cdiv class\x3d"error"\x3e' + a.text() + "\x3c/div\x3e\n        ").find("input").focus() : a.insertAfter(b).click(function () {
                    a.prev("input").focus()
                });
                Wm(function () {
                    a.addClass("is-visible")
                });
                b.one("focus", function () {
                    a.onTransitionEnd(function () {
                        a.remove()
                    }, 300).removeClass("is-visible")
                });
                if ("password" === b.prop("name")) b.one("focus", function () {
                    "password" === b.prop("type") && (b.select(), b.off("mousedown mouseup").one("mouseup",
                        function (a) {
                            a.preventDefault()
                        }).one("mousedown", function () {
                        b.off("mouseup")
                    }))
                })
            }
        },
        showErrors: function (a, b) {
            var c = (0, window.$)("label.error", this.currentForm);
            c.addClass("highlighted");
            (0, window.setTimeout)(function () {
                c.removeClass("highlighted")
            }, 30);
            var d = this;
            b.length && window.$.each(b, function (a, b) {
                var c = (0, window.$)(b.element), k = b.message,
                    m = (0, window.$)('\x3clabel class\x3d"error"\x3e' + k + "\x3c/label\x3e");
                "该邮箱已注册" !== k && "该手机号已注册" !== k || (0, window.$)('\x3cspan\x3e · \x3c/span\x3e\x3ca class\x3d"switch-to-login" href\x3d"javascript:;"\x3e直接登录\x3c/a\x3e').appendTo(m);
                Wm(function () {
                    d.settings.errorPlacement(m, c)
                })
            })
        }
    };
    z.l(z.Ck, mk);
    z.Ck.prototype.C = function () {
        mk.prototype.C.call(this);
        this.sl()
    };
    z.Ck.prototype.show = function () {
        var a = this;
        Zm().then(function () {
            a.G(!0)
        })
    };
    z.Ck.prototype.Pt = function () {
        mk.prototype.Pt.call(this);
        this.sl()
    };
    var Zm = z.ik(function () {
        if (z.T.Fb())throw Error("Logged in user should not call ZH.ui.SignDialog.prefetchTemplate");
        return window.$.get("/node/Register", {params: {is_org_page: z.Hk}})
    });
    z.Ca(z.Ck.prototype, z.Ym);
    (0, window.$)(function () {
        z.T.Fb() || Zm().then(function (a) {
            (0, window.$)(a).appendTo("body")
        })
    });
    z.l(z.Dk, z.Ck);
    z.Dk.prototype.B = function () {
        z.Ck.prototype.B.call(this);
        this.ia((0, window.$)(".login-sms-verification-template").html())
    };
    z.Dk.prototype.C = function () {
        z.Ck.prototype.C.call(this);
        this.De((0, window.$)("form", this.h), this.submit);
        var a = this.options.data.phone_num;
        (0, window.$)('input[name\x3d"phone_num"]', this.h).val(a.slice(0, -8) + "****" + a.slice(-4));
        Ek(this)
    };
    z.Dk.prototype.submit = function () {
        var a = this, b = Object.assign({}, this.options.data, this.getData());
        return window.$.post("/login/two_step_verification/sms", b, function (b) {
            b.r ? (b = b.data, b.password ? a.options.Um ? (b = new a.options.Um({
                data: {
                    account: a.options.data.phone_num,
                    password: a.options.data.password
                }, bF: b
            }), b.Db(a), a.oq(b)) : (a.options.hT(b), a.G(!1)) : a.showErrors(b)) : (a.na({
                wc: !0,
                category: "sign_in",
                action: "sign_in_success_phone"
            }), a.Od())
        })
    };
    z.Ca(z.Dk.prototype, z.Ym);
    z.x(z.Fk, z.Ck);
    z.e = z.Fk.prototype;
    z.e.B = function () {
        z.Fk.o.B.call(this);
        this.ia((0, window.$)(".unable-login-template").html())
    };
    z.e.C = function () {
        z.Fk.o.C.call(this);
        this.yv = (0, window.$)(".view.reset-password-verification", this.Oc);
        this.CC = (0, window.$)(".title.reset-password-verification", this.Se);
        var a = (0, window.$)("form", this.yv);
        this.De(a, this.mT);
        this.fw && (0, window.$)('input[name\x3d"account"]', a).val(this.fw);
        a = (0, window.$)(".captcha-module", a).get(0);
        this.pu = new z.dk;
        this.pu.w(a);
        Ik(this);
        this.lv = (0, window.$)(".view.sms-login-verification", this.Oc);
        this.jL = (0, window.$)(".title.sms-login-verification", this.Se);
        a = (0, window.$)("form",
            this.lv);
        this.De(a, this.oT);
        (0, window.$)('input[name\x3d"phone_num"]', a).val(this.fw);
        a = (0, window.$)(".captcha-module", this.lv).get(0);
        this.Iv = new z.dk;
        this.Iv.w(a);
        Jk(this);
        Gk(this)
    };
    z.e.mT = function (a) {
        var b = this, c = (0, window.$)(a);
        a = c.ie();
        (0, window.$)('input[name\x3d"account"]', this.Jq).val(a.account);
        var d = this.rf(a.account), f = d ? "/send_login_verification_code/email" : "/send_login_verification_code/sms";
        d ? this.wb(a, "account", "email") : this.wb(a, "account", "phone_num");
        a.is_org_page = z.Hk;
        (0, window.$)('input[name\x3d"verification_code"]', this.Jq).attr("placeholder", d ? "邮箱收到的 6 位数验证码" : "手机收到的 6 位数验证码");
        return window.$.get(f, a, function (a) {
            a.r ? 200001 === a.errcode ? (a = '机构帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/org/signin"\x3e点此找回\x3c/a\x3e',
            z.Hk && (a = '用户帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/signin"\x3e点此找回\x3c/a\x3e'), c.data("validator").showErrors({account: a})) : (z.hk(b.pu), c.data("validator").showErrors(a.data)) : (qk(b, !0, this.Jq, this.wL), b.WU.start())
        })
    };
    z.e.nT = function (a) {
        var b = this, c = (0, window.$)(a);
        a = c.ie();
        var d = this.rf(a.account), f = d ? "/reset_password/email" : "/reset_password/phone_num";
        d ? this.wb(a, "account", "email") : this.wb(a, "account", "phone_num");
        return window.$.post(f, a, function (a) {
            a.r ? c.data("validator").showErrors(a.data) : b.Od()
        })
    };
    z.e.oT = function (a) {
        var b = this, c = (0, window.$)(a);
        return window.$.get("/send_login_verification_code/sms", c.serialize(), function (a) {
            a.r ? (z.hk(b.Iv), a = a.data, b.wb(a, "account", "phone_num"), c.data("validator").showErrors(a)) : (a = (0, window.$)('input[name\x3d"phone_num"]', c).val(), (0, window.$)('input[name\x3d"phone_num"]', this.mv).val(a), qk(b, !0, this.mv, this.iL), b.TL.start())
        })
    };
    z.e.pT = function (a) {
        var b = this, c = (0, window.$)(a);
        return window.$.post("/login/sms_code", c.serialize(), function (a) {
            a.r ? (a = a.data, b.wb(a, "account", "phone_num"), c.data("validator").showErrors(a)) : b.Od()
        })
    };
    z.x(z.Kk, z.Ck);
    z.Kk.prototype.B = function () {
        z.Kk.o.B.call(this);
        var a = (0, window.$)(".oauth-register-template").html(), b = this.wh.status;
        "bound" === b ? this.ia(a, "bound") : "registered" === b ? this.ia(a, "registered") : this.ia(a, "register")
    };
    z.Kk.prototype.C = function () {
        z.Kk.o.C.call(this);
        Lk(this);
        Mk(this);
        Nk(this);
        Ok(this);
        var a = this;
        this.Oc.on("click", "button.bind-login", function () {
            qk(a, !0, a.nv, a.kL)
        }).on("click", "button.register", function () {
            qk(a, !0, a.Kf, a.uL)
        })
    };
    z.Kk.prototype.lp = function (a) {
        var b = this, c = (0, window.$)(a);
        b.na({wc: !0, category: "sign_up", action: "sign_up_front_end_pass_" + Pk(b)});
        return window.$.post("/register/sns", c.serialize(), function (a) {
            a.r ? (z.hk(b.Bc), c.data("validator").showErrors(a.data)) : (b.na({
                wc: !0,
                category: "sign_up",
                action: "sign_up_success_" + Pk(b)
            }), b.Od())
        })
    };
    z.Kk.prototype.ES = function (a) {
        var b = this, c = (0, window.$)(a);
        b.na({wc: !0, category: "sign_in", action: "sign_in_front_end_pass_" + Pk(b)});
        return window.$.post("/login/bind", c.serialize(), function (a) {
            a.r ? c.data("validator").showErrors(a.data) : (b.na({
                wc: !0,
                category: "sign_in",
                action: "sign_in_success_" + Pk(b)
            }), b.Od())
        })
    };
    z.l(z.Qk, z.R);
    z.e = z.Qk.prototype;
    z.e.C = function () {
        z.R.prototype.C.call(this);
        this.hc();
        this.so()
    };
    z.e.hc = function () {
        var a = this.m(), b = this.Da = (0, window.$)("form", a);
        this.De(b, this.bA);
        this.Ss(b);
        this.EG();
        var c = (0, window.$)(".captcha-module", a).get(0);
        this.Bc = new z.dk("login");
        this.Bc.w(c);
        z.hk(this.Bc);
        var d = this, f = (0, window.$)("input.account", b);
        (0, window.$)("button.unable-login", a).click(function () {
            var a = new z.Fk(f.val());
            d.oq(a)
        });
        this.options.data && (a = this.options.data.account, c = this.options.data.password, a && f.val(a), c && (0, window.$)("[name\x3dpassword]", b).val(c));
        this.options.bF && this.showErrors(this.options.bF);
        this.mI(function (a) {
            a = a.account;
            var b = d.rf(a);
            d.na({
                category: "sign_in",
                action: a ? "click_sign_in_submit_" + (b ? "email" : "phone") : "click_sign_in_submit_no_channel"
            })
        })
    };
    z.e.bA = function () {
        var a = this, b = this.getData(), c = this.rf(b.account);
        this.na({wc: !0, category: "sign_in", action: "sign_in_front_end_pass_" + (c ? "email" : "phone")});
        var d = c ? "/login/email" : "/login/phone_num";
        c ? this.wb(b, "account", "email") : this.wb(b, "account", "phone_num");
        return window.$.post(d, b, function (d) {
            if (d && d.r) {
                var g = d.errcode;
                1991831 === g ? (d = new z.Dk({
                    data: {phone_num: b.phone_num, password: b.password},
                    Um: a.options.Um
                }), d.Db(a), a.oq(d)) : 200001 === g ? (d = '机构帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/org/signin"\x3e点此登录\x3c/a\x3e',
                z.Hk && (d = '个人帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/signin"\x3e点此登录\x3c/a\x3e'), a.showErrors({account: d})) : (z.hk(a.Bc), a.showErrors(d.data))
            } else a.na({wc: !0, category: "sign_in", action: "sign_in_success_" + (c ? "email" : "phone")}), a.Od()
        })
    };
    z.e.so = function () {
        z.ck(this.v(), this.Uz)
    };
    z.e.Uz = function (a) {
        a = a.xf;
        1 === a.login ? this.Od() : (a = new z.Kk(a), a.bd(this.Hf), this.oq(a))
    };
    z.Ca(z.Qk.prototype, z.Ym);
    z.l(z.Rk, z.Ck);
    z.Rk.prototype.B = function () {
        z.Ck.prototype.B.call(this);
        this.ia((0, window.$)(".login-template").html())
    };
    z.Rk.prototype.C = function () {
        z.Ck.prototype.C.call(this);
        var a = new z.Qk(Object.assign({Um: z.Rk}, this.options));
        this.L(a);
        a.bd(this.Hf);
        a.w(this.S());
        this.na({category: "sign_in", action: "popup_sign_in_box_appear"})
    };
    z.Ca(z.Rk.prototype, z.Ym);
    z.x(z.Sk, z.xc);
    z.Sk.prototype.start = function () {
        if (!this.Io) {
            this.Io = !0;
            this.ke = {};
            var a = z.Oe();
            this.ke.viewport = [a.width, a.height, (0, z.I)()];
            var b = [], c = 0, d = 0;
            (0, window.$)(window.document).on("mousemove.recording", function (a) {
                c = a.clientX;
                d = a.clientY
            });
            var f = this, g = function () {
                (0, window.setTimeout)(function () {
                    150 <= b.length && b.shift();
                    b.push([c, d, (0, z.I)()]);
                    f.Io && g()
                }, 500)
            };
            g();
            this.ke.trace = b;
            var h = {};
            this.tv.on("keydown.recording keyup.recording mouseenter.recording mouseleave.recording click.recording", "input",
                function (a) {
                    var b = a.target.name, c = h[b];
                    c || (c = h[b] = {mouse: [], keyborad: []});
                    "mouseenter" === a.type || "mouseleave" === a.type || "click" === a.type ? c.mouse.push([a.type, a.offsetX, a.offsetY, (0, z.I)()]) : "password" === b ? c.keyborad.push([a.type, (0, z.I)()]) : c.keyborad.push([a.type, a.keyCode, (0, z.I)()])
                });
            h.submit = [];
            this.tv.on("mousedown.recording mouseenter.recording mouseleave.recording", ":submit", function (a) {
                h.submit.push([a.type, a.offsetX, a.offsetY, (0, z.I)()])
            });
            this.ke.register = h
        }
    };
    z.Sk.prototype.stop = function () {
        this.Io && (this.Io = !1, (0, window.$)(window.document).off(".recording"), this.tv.off(".recording"));
        return this.ke
    };
    z.Sk.prototype.D = function () {
        z.Sk.o.D.call(this);
        this.stop();
        this.ke = null
    };
    z.l(z.Tk, z.R);
    z.e = z.Tk.prototype;
    z.e.C = function () {
        z.R.prototype.C.call(this);
        this.We();
        this.so()
    };
    z.e.We = function () {
        var a = this.m(), b = (0, window.$)("form", a);
        this.xh = !(0, window.$)('input[name\x3d"phone_num"]', b).length;
        this.De(b, this.lp);
        this.Ss(b);
        this.EG();
        a = (0, window.$)(".captcha-module", a).get(0);
        this.Bc = new z.dk;
        this.Bc.w(a);
        z.hk(this.Bc);
        this.Mm = new z.Sk(b);
        this.Mm.start();
        z.Ac(this, this.Mm);
        var c = this;
        this.mI(function (a) {
            a = a.phone_num || a.account;
            var b = c.xh ? c.rf(a) : !1;
            c.na({
                category: "sign_up",
                action: a || !c.xh ? "click_sign_up_submit_" + (b ? "email" : "phone") : "click_sign_up_submit_no_channel"
            })
        })
    };
    z.e.lp = function (a) {
        var b = this;
        a = (0, window.$)(a);
        var c = a.data("validator"), d = a.ie();
        a = b.xh ? this.rf(d.account) : !1;
        b.na({wc: !0, category: "sign_up", action: "sign_up_front_end_pass_" + (a ? "email" : "phone")});
        var f = a ? "/register/email" : "/register/phone_num/validation";
        a ? this.wb(d, "account", "email") : this.wb(d, "account", "phone_num");
        var g = this.Mm.stop();
        d.userInfo = JSON.stringify(g);
        return a ? window.$.post(f, d, function (a) {
            a.r ? (z.hk(b.Bc), c.showErrors(a.data)) : (b.na({
                wc: !0,
                category: "sign_up",
                action: "sign_up_success_email"
            }),
            b.qg && Li.Im("sign_up", "sign_up_success", b.qg), b.Od())
        }) : window.$.post(f, d, function (a) {
            a.r ? (z.hk(b.Bc), b.xh || b.wb(a.data, "account", "phone_num"), c.showErrors(a.data)) : b.dispatchEvent({
                type: "success",
                data: d
            })
        })
    };
    z.e.so = function () {
        z.ck(this.v(), this.Uz)
    };
    z.e.Uz = function (a) {
        a = a.xf;
        var b = {qqconn: "qq", wechat: "wechat", sina: "weibo"}[a.type];
        1 === a.login ? (this.na({
            wc: !0,
            category: "sign_in",
            action: "sign_in_success_" + b
        }), this.Od()) : (a = new z.Kk(a), a.Db(this), a.bd(this.Hf), this.oq(a))
    };
    z.Ca(z.Tk.prototype, z.Ym);
    z.l(z.Uk, z.R);
    z.Uk.prototype.C = function () {
        z.R.prototype.C.call(this);
        this.We();
        this.v().g(this, "hide", this.RD)
    };
    z.Uk.prototype.We = function () {
        var a = (0, window.$)("form", this.m());
        this.De(a, this.iT);
        var b = (0, window.$)(".send-code", a), c = (0, window.$)('input[name\x3d"phone_num"]', a);
        this.ma = this.Rs(b, function () {
            var b = c.val(), f = this;
            window.$.get("/send_register_verification_code/sms", window.$.param({phone_num: b}), function (b) {
                b.r && (b = b.data, f.wb(b, "account", "phone_num"), a.data("validator").showErrors(b))
            })
        });
        c.val(this.Sn.phone_num);
        window.$.get("/send_register_verification_code/sms", {phone_num: this.Sn.phone_num});
        this.ma.start()
    };
    z.Uk.prototype.iT = function (a) {
        var b = this, c = (0, window.$)(a);
        a = window.$.extend({}, this.Sn, c.ie());
        return window.$.post("/register/phone_num", a, function (a) {
            a.r ? (a = a.data, b.wb(a, "account", "phone_num"), c.data("validator").showErrors(a)) : (b.na({
                wc: !0,
                category: "sign_up",
                action: "sign_up_success_phone"
            }), b.qg && Li.Im("sign_up", "sign_up_success", b.qg), b.Od())
        })
    };
    z.Ca(z.Uk.prototype, z.Ym);
    z.l(z.Vk, z.Ck);
    z.e = z.Vk.prototype;
    z.e.B = function () {
        z.Ck.prototype.B.call(this);
        this.ia((0, window.$)(".register-template").html() + (0, window.$)(".phone-verification-template").html())
    };
    z.e.C = function () {
        z.Ck.prototype.C.call(this);
        Wk(this);
        this.v().g(this, "hide", this.RD);
        this.v().g(this, "beforeredirect", this.CU);
        this.na({category: "sign_up", action: "popup_sign_up_box_appear"});
        this.qg && Li.track("sign_up", "show_sign_up_dialog", this.qg)
    };
    z.e.Lp = z.aa(27);
    z.e.RD = function () {
        this.hj = "";
        $i()
    };
    z.e.CU = function () {
        var a = this.hj;
        a ? z.aj.set("actioncontinuationhash", (0, window.encodeURIComponent)(a), 60, "/") : $i()
    };
    z.Ca(z.Vk.prototype, z.Ym);
    z.x(Xk, z.G);
    var Zk = {};
    Xk.prototype.defaults = {};
    Xk.prototype.v = function () {
        return this.Tg || (this.Tg = new z.xd(this))
    };
    Xk.prototype.init = function () {
    };
    Xk.prototype.D = function () {
        Xk.o.D.call(this);
        this.view && (z.Kb(this.view.Rb, this.name), this.view = null);
        this.Tg && (this.Tg.H(), this.Tg = null)
    };
    z.x(z.al, z.R);
    z.e = z.al.prototype;
    z.e.defaults = {source: null, use: ["autoload", "shortcut"], Ef: !0, qn: "zg-btn-white zu-button-more"};
    z.e.use = function (a, b) {
        var c = $k(a, b);
        c.view = this;
        this.wa ? c.init(this) : this.v().g(this, "initialized", function () {
            c.init(this)
        });
        this.Rb[a] = c;
        return this
    };
    z.e.Zh = function () {
        !this.Ac && this.J.Ef && (this.Ac = this.pn(), z.bf(this.Ac, this.h), this.v().g(this.Ac, "click", this.ti))
    };
    z.e.C = function () {
        z.al.o.C.call(this);
        this.Zh();
        z.y(this.gb(), this.Br, this);
        z.y(this.J.use, this.use, this);
        this.dispatchEvent("initialized")
    };
    z.e.D = function () {
        z.Db(this.Rb, function (a) {
            a.H()
        });
        this.Rb = null;
        this.Ac && (z.P(this.Ac), this.Ac = null);
        z.al.o.D.call(this)
    };
    z.e.gb = function () {
        return z.ef(this.h)
    };
    z.e.Br = function (a, b) {
        this.Kt(a, b);
        this.dispatchEvent({type: "itemcreated", item: a, index: b})
    };
    z.e.Kt = z.p;
    z.e.YS = function (a) {
        if (a) {
            var b = a.results, c = !b || !b.length;
            c || this.render(b);
            this.dispatchEvent("next");
            (c || !1 === a.next) && cl(this)
        }
    };
    z.e.render = function (a, b) {
        a = window.$.isArray(a) ? a.join("") : a;
        var c = z.We(a + " ");
        z.y(window.$.makeArray(z.ef(c)), this.Br, this);
        z.cf(this.h, c, b)
    };
    z.e.ti = function () {
        if (!1 !== this.dispatchEvent("beforeloadnext") && !this.Ho())return this.Hu(!0), this.promise = this.source().done((0, z.q)(this.YS, this)).always((0, z.q)(z.Ba(this.Hu, !1), this))
    };
    z.e.Ho = function () {
        return this.promise && "pending" === this.promise.state()
    };
    z.e.kf = function () {
        return this.Ac
    };
    z.e.pn = function () {
        return z.O("a", {"aria-role": "button", "class": this.J.qn}, "更多")
    };
    z.e.Hu = function (a) {
        this.Ac && (this.Ac.innerHTML = a ? '\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e 加载中' : "更多", z.W.enable(this.Ac, "loading", a))
    };
    var el = {
        s: function (a, b, c) {
            return (0, window.isNaN)(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Za(" ", c - a.length) : Za(" ", c - a.length) + a
        }, f: function (a, b, c, d, f) {
            d = a.toString();
            (0, window.isNaN)(f) || "" == f || (d = (0, window.parseFloat)(a).toFixed(f));
            var g;
            g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= a && (d = g + d);
            if ((0, window.isNaN)(c) || d.length >= c)return d;
            d = (0, window.isNaN)(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
            a = c - d.length - g.length;
            return d = 0 <= b.indexOf("-", 0) ? g + d + Za(" ", a) : g +
                Za(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
        }, d: function (a, b, c, d, f, g, h, k) {
            return el.f((0, window.parseInt)(a, 10), b, c, d, 0, g, h, k)
        }
    };
    el.i = el.d;
    el.u = el.d;
    Yk("activeSource", {
        defaults: {pN: "%d 条新动态", qn: "zu-main-feed-fresh-button", VY: z.p}, init: function (a) {
            this.data = [];
            this.button = this.pn();
            z.af(this.button, a.m());
            this.v().g(this.button, "click", function () {
                a.render(this.data, 0);
                this.setData([])
            });
            var b = this, c = this.options.source(function (a) {
                a && a.length && b.setData(a.concat(b.data))
            }, function () {
                return b.data
            });
            if (!c || !z.sa(c.H))throw Error("Source must return a disposable object.");
            this.kO = c
        }, setData: function (a) {
            this.data = a;
            this.NS()
        }, NS: function () {
            var a =
                this.data.length;
            z.mf(this.button, z.dl(this.options.pN, a));
            z.Q(this.button, !!a)
        }, pn: function () {
            return z.O("a", {href: "javascript:;", style: "display:none", "class": this.options.qn})
        }, H: function () {
            Xk.prototype.H.call(this);
            z.Cc(this.kO);
            this.options = null;
            this.button && (z.P(this.button), this.button = null)
        }
    });
    z.x(z.fl, z.xc);
    z.e = z.fl.prototype;
    z.e.Fu = !1;
    z.e.tA = 0;
    z.e.ma = null;
    z.e.fire = function (a) {
        this.dw = arguments;
        this.ma || this.tA ? this.Fu = !0 : this.Jg()
    };
    z.e.stop = function () {
        this.ma && (z.wd(this.ma), this.ma = null, this.Fu = !1, this.dw = [])
    };
    z.e.pause = function () {
        this.tA++
    };
    z.e.D = function () {
        z.fl.o.D.call(this);
        this.stop()
    };
    z.e.zT = function () {
        this.ma = null;
        this.Fu && !this.tA && (this.Fu = !1, this.Jg())
    };
    z.e.Jg = function () {
        this.ma = z.vd(this.cl, this.Yg);
        this.$j.apply(null, this.dw)
    };
    z.x(z.gl, z.G);
    z.gl.prototype.hc = function () {
        var a = this.gq = new z.fl(this.update, this.cO, this);
        this.ga.g(this.viewport, ["scroll", "resize"], function () {
            a.fire()
        })
    };
    z.gl.prototype.v = function () {
        return this.ga
    };
    z.gl.prototype.D = function () {
        z.gl.o.D.call(this);
        this.ga.H();
        this.ga = null;
        this.gq.H();
        this.gq = null
    };
    z.gl.prototype.update = function () {
        this.size = (kf(this.viewport) ? z.Oe : Gg)(this.viewport);
        this.dispatchEvent("update")
    };
    z.$m = new z.gl;
    (0, window.$)(function () {
        z.$m.update()
    });
    Yk("autoload", {
        defaults: {
            cr: !0, viewport: window, UY: function () {
                return !0
            }
        }, init: function (a) {
            if (a.kf() && (!this.options.cr || z.T.Fb())) {
                var b = this.options.viewport, c = new z.gl(b);
                z.Ac(this, c);
                hl(c, this, function (c) {
                    return z.Kg(a.kf()) ? 400 >= (kf(b) ? a.kf().getBoundingClientRect().top - c.height : b.scrollHeight - b.scrollTop - c.height) : !1
                });
                this.v().g(a, "complete", this.H).g(a, "next", function () {
                    this.enable()
                });
                this.enable()
            }
        }, enable: function () {
            this.v().ya(this, "nearbottom", function () {
                this.view.ti()
            })
        }
    });
    Yk("childConstructor", {
        defaults: {$h: null, factory: null}, init: function (a) {
            z.sa(this.options.$h) && bl(a, this.LN, this);
            z.sa(this.options.factory) && bl(a, this.vU, this)
        }, LN: function (a) {
            var b = new this.options.$h;
            this.view.L(b);
            b.w(a)
        }, vU: function (a) {
            var b = this.options.factory(a);
            this.view.L(b);
            b.w(a)
        }
    });
    Yk("dataPagingSource", {
        defaults: {ND: !0}, init: function (a) {
            var b = (0, window.$)(a.m()).data("paging").next;
            b || cl(a);
            a.source = function () {
                return window.$.get(b).then(function (a) {
                    b = a.paging.next;
                    return {results: a.htmls, next: !!b}
                })
            }
        }
    });
    Yk("expandLimit", {
        defaults: {oW: 3}, init: function (a) {
            z.T.Fb() || this.v().g(a, "beforeloadnext", function () {
                var a = new z.Vk;
                a.bd("expand");
                a.show();
                return !1
            })
        }
    });
    Yk("locationSource", {
        defaults: {
            kt: 20, param: null, rA: !1, offset: function (a) {
                return a.length
            }
        }, init: function (a) {
            function b(a) {
                return {start: c.rA ? z.kb(a).id.split("-")[1] : 0, offset: c.offset(a)}
            }

            var c = this.options, d = c.url || window.location.href, f = a.gb().length;
            (!f || f < c.kt) && cl(a);
            a.source = function () {
                return window.$.post(d, (c.param || b)(a.gb())).then(function (b) {
                    if (!b.r) {
                        b = b.msg;
                        var d = b[0];
                        z.qa(d) && d < c.kt && cl(a);
                        return {results: b[1]}
                    }
                })
            }
        }
    });
    Yk("nodeSource", {
        defaults: {ND: !0, offset: null}, init: function (a) {
            var b = this.options, c = (0, window.$)(a.m()).data("init");
            if (c) {
                var d = "/node/" + c.nodename, f = c.params, g = f.offset || 0, c = f.limit, h = f.pagesize;
                b.ND && c && a.gb().length < c && cl(a);
                a.source = function () {
                    var c = void 0, c = b.offset ? b.offset() : g + a.gb().length;
                    return window.$.post(d, {
                        method: "next",
                        params: window.$.extend(f, {offset: c})
                    }).then(function (a) {
                        var b = !0;
                        h && !a.r && a.msg.length < h && (b = !1);
                        return !a.r && {results: a.msg, next: b}
                    })
                }
            }
        }
    });
    z.ql = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "caps-lock",
        27: "esc",
        32: "space",
        33: "pg-up",
        34: "pg-down",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "delete",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: "semicolon",
        61: "equals",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        93: "context",
        96: "num-0",
        97: "num-1",
        98: "num-2",
        99: "num-3",
        100: "num-4",
        101: "num-5",
        102: "num-6",
        103: "num-7",
        104: "num-8",
        105: "num-9",
        106: "num-multiply",
        107: "num-plus",
        109: "num-minus",
        110: "num-period",
        111: "num-division",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        186: "semicolon",
        187: "equals",
        189: "dash",
        188: ",",
        190: ".",
        191: "/",
        192: "`",
        219: "open-square-bracket",
        220: "\\",
        221: "close-square-bracket",
        222: "single-quote",
        224: "win"
    };
    var pl;
    z.x(il, z.G);
    var jl = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
        kl = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
    z.e = il.prototype;
    z.e.GU = function (a, b) {
        sl(this.Am, nl(1, arguments), a)
    };
    z.e.HW = function (a) {
        tl(this.Am, nl(0, arguments))
    };
    z.e.XB = function () {
        this.Am = {}
    };
    z.e.D = function () {
        il.o.D.call(this);
        this.XB();
        z.md(this.bh, "keydown", this.mf, !1, this);
        z.B && z.md(this.bh, "keyup", this.VF, !1, this);
        z.ll && !z.B && (z.md(this.bh, "keypress", this.jG, !1, this), z.md(this.bh, "keyup", this.kG, !1, this));
        this.bh = null
    };
    z.e.VF = function (a) {
        if (z.Uc) {
            if (224 == a.keyCode) {
                this.LH = !0;
                z.vd(function () {
                    this.LH = !1
                }, 400, this);
                return
            }
            var b = a.metaKey || this.LH;
            67 != a.keyCode && 88 != a.keyCode && 86 != a.keyCode || !b || (a.metaKey = b, this.mf(a))
        }
        32 == this.Mv && 32 == a.keyCode && a.preventDefault();
        this.Mv = null
    };
    z.e.jG = function (a) {
        32 < a.keyCode && rl(a) && (this.XG = !0)
    };
    z.e.kG = function (a) {
        !this.XG && rl(a) && this.mf(a)
    };
    z.e.mf = function (a) {
        var b;
        b = a.keyCode;
        if (16 == b || 17 == b || 18 == b) b = !1; else {
            var c = a.target,
                d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
                f = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
            b = !d && !f || this.aP[b] || this.FM ? !0 : f ? !1 : this.nS && (a.altKey || a.ctrlKey || a.metaKey) ? !0 : "INPUT" == c.tagName && this.hW[c.type] ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ? this.IM ? !0 : 32 != b : !1
        }
        if (b)if ("keydown" == a.type && rl(a)) this.XG = !1; else {
            b = z.lj(a.keyCode);
            c = b & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
            if (!this.In[c] || 1500 <= (0, z.I)() - this.ft) this.In = this.Am, this.ft = (0, z.I)();
            if (c = this.In[c]) c.next ? (this.In = c.next, this.ft = (0, z.I)(), a.preventDefault()) : (this.In = this.Am, this.ft = (0, z.I)(), this.bD && a.preventDefault(), this.JM && a.stopPropagation(), c = c.Df, d = a.target, f = this.dispatchEvent(new ul("shortcut", c, d)), (f &= this.dispatchEvent(new ul("shortcut_" + c, c, d))) || a.preventDefault(), z.B && (this.Mv = b))
        }
    };
    z.x(ul, z.Lc);
    z.x(vl, z.xc);
    z.an = [];
    z.e = vl.prototype;
    z.e.hc = function (a) {
        z.an.push(this);
        this.$k = new z.Rd;
        this.ga = new il(a);
        this.ga.bD = !1;
        this.ga.addEventListener("shortcut", this.ET, !1, this)
    };
    z.e.register = function (a, b, c) {
        this.kn = {key: a, action: b, context: c};
        this.ga.GU(a, a);
        this.$k.set(a, this.kn);
        return this
    };
    z.e.IW = function (a) {
        this.kn = null;
        this.ga.HW(a, a);
        this.$k.remove(a);
        return this
    };
    z.e.unregister = function (a) {
        z.y(z.na(a) ? a : [a], this.IW, this)
    };
    z.e.XB = function () {
        this.kn = null;
        this.ga.XB();
        this.$k.clear();
        return this
    };
    z.e.ET = function (a) {
        var b = this.$k.get(a.identifier);
        b && b.action.call(b.context, a)
    };
    z.e.D = function () {
        vl.o.D.call(this);
        z.tb(z.an, this);
        this.ga.H();
        this.$k = this.kn = this.ga = null
    };
    z.bn = new vl(window.document);
    z.bn.dL = function (a) {
        return new vl(a)
    };
    z.x(xl, z.R);
    z.e = xl.prototype;
    z.e.defaults = {items: "\x3eli", vN: !1, LO: !0, className: "navigable", nF: "navigable-focusin"};
    z.e.C = function () {
        xl.o.C.call(this);
        var a = this.J;
        this.W = (0, window.$)(this.h).addClass(a.className).data("navigable", this).on("focusin.navigable focusout.navigable", a.items, window.$.proxy(this.TS, this));
        this.Lh()
    };
    z.e.D = function () {
        xl.o.D.call(this);
        this.W.removeClass(this.J.className).data("navigable", null).off(".navigable");
        this.W = null
    };
    z.e.Lh = z.p;
    z.e.index = function () {
        return this.Pj
    };
    z.e.size = function () {
        return this.items().length
    };
    z.e.prev = function () {
        yl(this, this.index() - 1)
    };
    z.e.next = function () {
        yl(this, this.index() + 1)
    };
    z.e.first = function () {
        yl(this, 0)
    };
    z.e.last = function () {
        yl(this, this.size() - 1)
    };
    z.e.TS = function (a) {
        var b = this.J, c = a.currentTarget, d = (0, window.$)(c);
        "focusin" === a.type ? (d.addClass(b.nF), this.Pj = window.$.inArray(c, this.items())) : d.removeClass(b.nF)
    };
    z.e.fp = function (a) {
        this.J.LO && (a.tabIndex = -1, a.focus());
        this.dispatchEvent({data: {item: a}, type: "focus"})
    };
    z.e.items = function () {
        var a = this.J.items;
        return a ? (0, window.$)(a, this.W).get() : this.W.children().get()
    };
    z.x(z.Al, xl);
    z.Mb(z.Al.prototype.defaults = {mV: 200, offsetTop: 0}, xl.prototype.defaults);
    z.e = z.Al.prototype;
    z.e.Lh = function () {
        z.Db(Bl(this), function (a, b) {
            z.wl(z.bn.register(b, a.action, this), a.Vb)
        }, this)
    };
    z.e.D = function () {
        z.Al.o.D.call(this);
        z.bn.unregister(z.Hb(Bl(this)))
    };
    z.e.fp = function (a) {
        z.Al.o.fp.call(this, a);
        var b = this.J;
        this.scrollTo((0, window.$)(a).offset().top + b.offsetTop, b.mV, "easeOutCubic")
    };
    z.e.scrollTo = function (a, b, c) {
        this.xL.stop().animate({scrollTop: a}, b, c)
    };
    z.e.kV = function () {
        this.scrollTo("+\x3d60", 100)
    };
    z.e.pV = function () {
        this.scrollTo("-\x3d60", 100)
    };
    Yk("shortcut", {
        defaults: {items: "\x3ediv"}, init: function (a) {
            a.gb().length && (this.Yo = new z.Al(this.options), this.Yo.w(a.m()), this.v().g(this.Yo, "action", function (b) {
                b.data.index >= b.data.size && a.kf() && z.Kg(a.kf()) && a.kf().click()
            }))
        }, H: function () {
            Xk.prototype.H.call(this);
            this.Yo && (this.Yo.H(), this.Yo = null)
        }
    });
    z.x(z.Cl, z.al);
}).call(this, __z_z__);