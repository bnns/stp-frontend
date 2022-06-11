parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {},
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        fXiu: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    return +e;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.linear = e);
            },
            {},
        ],
        GaS5: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    return t * t;
                }
                function e(t) {
                    return t * (2 - t);
                }
                function u(t) {
                    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.quadIn = t), (exports.quadOut = e), (exports.quadInOut = u);
            },
            {},
        ],
        PA7e: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    return t * t * t;
                }
                function e(t) {
                    return --t * t * t + 1;
                }
                function u(t) {
                    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.cubicIn = t), (exports.cubicOut = e), (exports.cubicInOut = u);
            },
            {},
        ],
        ECJi: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.polyInOut = exports.polyOut = exports.polyIn = void 0);
                var t = 3,
                    n = (function t(n) {
                        function o(t) {
                            return Math.pow(t, n);
                        }
                        return (n = +n), (o.exponent = t), o;
                    })(t);
                exports.polyIn = n;
                var o = (function t(n) {
                    function o(t) {
                        return 1 - Math.pow(1 - t, n);
                    }
                    return (n = +n), (o.exponent = t), o;
                })(t);
                exports.polyOut = o;
                var e = (function t(n) {
                    function o(t) {
                        return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
                    }
                    return (n = +n), (o.exponent = t), o;
                })(t);
                exports.polyInOut = e;
            },
            {},
        ],
        sZZb: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.sinIn = e), (exports.sinOut = r), (exports.sinInOut = s);
                var t = Math.PI,
                    n = t / 2;
                function e(t) {
                    return 1 - Math.cos(t * n);
                }
                function r(t) {
                    return Math.sin(t * n);
                }
                function s(n) {
                    return (1 - Math.cos(t * n)) / 2;
                }
            },
            {},
        ],
        rYq8: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    return Math.pow(2, 10 * t - 10);
                }
                function e(t) {
                    return 1 - Math.pow(2, -10 * t);
                }
                function o(t) {
                    return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.expIn = t), (exports.expOut = e), (exports.expInOut = o);
            },
            {},
        ],
        hED8: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    return 1 - Math.sqrt(1 - t * t);
                }
                function r(t) {
                    return Math.sqrt(1 - --t * t);
                }
                function e(t) {
                    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.circleIn = t), (exports.circleOut = r), (exports.circleInOut = e);
            },
            {},
        ],
        MKsh: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.bounceIn = b), (exports.bounceOut = f), (exports.bounceInOut = x);
                var e = 4 / 11,
                    t = 6 / 11,
                    n = 8 / 11,
                    r = 0.75,
                    u = 9 / 11,
                    o = 10 / 11,
                    c = 0.9375,
                    s = 21 / 22,
                    i = 63 / 64,
                    p = 1 / e / e;
                function b(e) {
                    return 1 - f(1 - e);
                }
                function f(b) {
                    return (b = +b) < e ? p * b * b : b < n ? p * (b -= t) * b + r : b < o ? p * (b -= u) * b + c : p * (b -= s) * b + i;
                }
                function x(e) {
                    return ((e *= 2) <= 1 ? 1 - f(1 - e) : f(e - 1) + 1) / 2;
                }
            },
            {},
        ],
        fCsL: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.backInOut = exports.backOut = exports.backIn = void 0);
                var t = 1.70158,
                    r = (function t(r) {
                        function o(t) {
                            return t * t * ((r + 1) * t - r);
                        }
                        return (r = +r), (o.overshoot = t), o;
                    })(t);
                exports.backIn = r;
                var o = (function t(r) {
                    function o(t) {
                        return --t * t * ((r + 1) * t + r) + 1;
                    }
                    return (r = +r), (o.overshoot = t), o;
                })(t);
                exports.backOut = o;
                var e = (function t(r) {
                    function o(t) {
                        return ((t *= 2) < 1 ? t * t * ((r + 1) * t - r) : (t -= 2) * t * ((r + 1) * t + r) + 2) / 2;
                    }
                    return (r = +r), (o.overshoot = t), o;
                })(t);
                exports.backInOut = e;
            },
            {},
        ],
        xolo: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.elasticInOut = exports.elasticOut = exports.elasticIn = void 0);
                var t = 2 * Math.PI,
                    n = 1,
                    r = 0.3,
                    e = (function n(r, e) {
                        var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);
                        function i(t) {
                            return r * Math.pow(2, 10 * --t) * Math.sin((a - t) / e);
                        }
                        return (
                            (i.amplitude = function (r) {
                                return n(r, e * t);
                            }),
                            (i.period = function (t) {
                                return n(r, t);
                            }),
                            i
                        );
                    })(n, r);
                exports.elasticIn = e;
                var a = (function n(r, e) {
                    var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);
                    function i(t) {
                        return 1 - r * Math.pow(2, -10 * (t = +t)) * Math.sin((t + a) / e);
                    }
                    return (
                        (i.amplitude = function (r) {
                            return n(r, e * t);
                        }),
                        (i.period = function (t) {
                            return n(r, t);
                        }),
                        i
                    );
                })(n, r);
                exports.elasticOut = a;
                var i = (function n(r, e) {
                    var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);
                    function i(t) {
                        return ((t = 2 * t - 1) < 0 ? r * Math.pow(2, 10 * t) * Math.sin((a - t) / e) : 2 - r * Math.pow(2, -10 * t) * Math.sin((a + t) / e)) / 2;
                    }
                    return (
                        (i.amplitude = function (r) {
                            return n(r, e * t);
                        }),
                        (i.period = function (t) {
                            return n(r, t);
                        }),
                        i
                    );
                })(n, r);
                exports.elasticInOut = i;
            },
            {},
        ],
        CFyW: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    Object.defineProperty(exports, "easeLinear", {
                        enumerable: !0,
                        get: function () {
                            return e.linear;
                        },
                    }),
                    Object.defineProperty(exports, "easeQuad", {
                        enumerable: !0,
                        get: function () {
                            return t.quadInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeQuadIn", {
                        enumerable: !0,
                        get: function () {
                            return t.quadIn;
                        },
                    }),
                    Object.defineProperty(exports, "easeQuadOut", {
                        enumerable: !0,
                        get: function () {
                            return t.quadOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeQuadInOut", {
                        enumerable: !0,
                        get: function () {
                            return t.quadInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeCubic", {
                        enumerable: !0,
                        get: function () {
                            return r.cubicInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeCubicIn", {
                        enumerable: !0,
                        get: function () {
                            return r.cubicIn;
                        },
                    }),
                    Object.defineProperty(exports, "easeCubicOut", {
                        enumerable: !0,
                        get: function () {
                            return r.cubicOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeCubicInOut", {
                        enumerable: !0,
                        get: function () {
                            return r.cubicInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easePoly", {
                        enumerable: !0,
                        get: function () {
                            return n.polyInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easePolyIn", {
                        enumerable: !0,
                        get: function () {
                            return n.polyIn;
                        },
                    }),
                    Object.defineProperty(exports, "easePolyOut", {
                        enumerable: !0,
                        get: function () {
                            return n.polyOut;
                        },
                    }),
                    Object.defineProperty(exports, "easePolyInOut", {
                        enumerable: !0,
                        get: function () {
                            return n.polyInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeSin", {
                        enumerable: !0,
                        get: function () {
                            return u.sinInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeSinIn", {
                        enumerable: !0,
                        get: function () {
                            return u.sinIn;
                        },
                    }),
                    Object.defineProperty(exports, "easeSinOut", {
                        enumerable: !0,
                        get: function () {
                            return u.sinOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeSinInOut", {
                        enumerable: !0,
                        get: function () {
                            return u.sinInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeExp", {
                        enumerable: !0,
                        get: function () {
                            return o.expInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeExpIn", {
                        enumerable: !0,
                        get: function () {
                            return o.expIn;
                        },
                    }),
                    Object.defineProperty(exports, "easeExpOut", {
                        enumerable: !0,
                        get: function () {
                            return o.expOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeExpInOut", {
                        enumerable: !0,
                        get: function () {
                            return o.expInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeCircle", {
                        enumerable: !0,
                        get: function () {
                            return c.circleInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeCircleIn", {
                        enumerable: !0,
                        get: function () {
                            return c.circleIn;
                        },
                    }),
                    Object.defineProperty(exports, "easeCircleOut", {
                        enumerable: !0,
                        get: function () {
                            return c.circleOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeCircleInOut", {
                        enumerable: !0,
                        get: function () {
                            return c.circleInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeBounce", {
                        enumerable: !0,
                        get: function () {
                            return i.bounceOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeBounceIn", {
                        enumerable: !0,
                        get: function () {
                            return i.bounceIn;
                        },
                    }),
                    Object.defineProperty(exports, "easeBounceOut", {
                        enumerable: !0,
                        get: function () {
                            return i.bounceOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeBounceInOut", {
                        enumerable: !0,
                        get: function () {
                            return i.bounceInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeBack", {
                        enumerable: !0,
                        get: function () {
                            return a.backInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeBackIn", {
                        enumerable: !0,
                        get: function () {
                            return a.backIn;
                        },
                    }),
                    Object.defineProperty(exports, "easeBackOut", {
                        enumerable: !0,
                        get: function () {
                            return a.backOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeBackInOut", {
                        enumerable: !0,
                        get: function () {
                            return a.backInOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeElastic", {
                        enumerable: !0,
                        get: function () {
                            return s.elasticOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeElasticIn", {
                        enumerable: !0,
                        get: function () {
                            return s.elasticIn;
                        },
                    }),
                    Object.defineProperty(exports, "easeElasticOut", {
                        enumerable: !0,
                        get: function () {
                            return s.elasticOut;
                        },
                    }),
                    Object.defineProperty(exports, "easeElasticInOut", {
                        enumerable: !0,
                        get: function () {
                            return s.elasticInOut;
                        },
                    });
                var e = require("./linear.js"),
                    t = require("./quad.js"),
                    r = require("./cubic.js"),
                    n = require("./poly.js"),
                    u = require("./sin.js"),
                    o = require("./exp.js"),
                    c = require("./circle.js"),
                    i = require("./bounce.js"),
                    a = require("./back.js"),
                    s = require("./elastic.js");
            },
            { "./linear.js": "fXiu", "./quad.js": "GaS5", "./cubic.js": "PA7e", "./poly.js": "ECJi", "./sin.js": "sZZb", "./exp.js": "rYq8", "./circle.js": "hED8", "./bounce.js": "MKsh", "./back.js": "fCsL", "./elastic.js": "xolo" },
        ],
        CSb3: [
            function (require, module, exports) {
                "use strict";
                function t(t, e, r) {
                    (t.prototype = e.prototype = r), (r.constructor = t);
                }
                function e(t, e) {
                    var r = Object.create(t.prototype);
                    for (var o in e) r[o] = e[o];
                    return r;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t), (exports.extend = e);
            },
            {},
        ],
        UAf0: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.Color = n),
                    (exports.default = k),
                    (exports.rgbConvert = M),
                    (exports.rgb = N),
                    (exports.Rgb = O),
                    (exports.hslConvert = P),
                    (exports.hsl = $),
                    (exports.brighter = exports.darker = void 0);
                var e = r(require("./define.js"));
                function t() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (t = function () {
                            return e;
                        }),
                        e
                    );
                }
                function r(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var r = t();
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, a, o) : (n[a] = e[a]);
                        }
                    return (n.default = e), r && r.set(e, n), n;
                }
                function n() {}
                var i = 0.7;
                exports.darker = i;
                var a = 1 / i;
                exports.brighter = a;
                var o = "\\s*([+-]?\\d+)\\s*",
                    s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                    l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                    h = /^#([0-9a-f]{3,8})$/,
                    u = new RegExp("^rgb\\(" + [o, o, o] + "\\)$"),
                    g = new RegExp("^rgb\\(" + [l, l, l] + "\\)$"),
                    c = new RegExp("^rgba\\(" + [o, o, o, s] + "\\)$"),
                    d = new RegExp("^rgba\\(" + [l, l, l, s] + "\\)$"),
                    p = new RegExp("^hsl\\(" + [s, l, l] + "\\)$"),
                    f = new RegExp("^hsla\\(" + [s, l, l, s] + "\\)$"),
                    b = {
                        aliceblue: 15792383,
                        antiquewhite: 16444375,
                        aqua: 65535,
                        aquamarine: 8388564,
                        azure: 15794175,
                        beige: 16119260,
                        bisque: 16770244,
                        black: 0,
                        blanchedalmond: 16772045,
                        blue: 255,
                        blueviolet: 9055202,
                        brown: 10824234,
                        burlywood: 14596231,
                        cadetblue: 6266528,
                        chartreuse: 8388352,
                        chocolate: 13789470,
                        coral: 16744272,
                        cornflowerblue: 6591981,
                        cornsilk: 16775388,
                        crimson: 14423100,
                        cyan: 65535,
                        darkblue: 139,
                        darkcyan: 35723,
                        darkgoldenrod: 12092939,
                        darkgray: 11119017,
                        darkgreen: 25600,
                        darkgrey: 11119017,
                        darkkhaki: 12433259,
                        darkmagenta: 9109643,
                        darkolivegreen: 5597999,
                        darkorange: 16747520,
                        darkorchid: 10040012,
                        darkred: 9109504,
                        darksalmon: 15308410,
                        darkseagreen: 9419919,
                        darkslateblue: 4734347,
                        darkslategray: 3100495,
                        darkslategrey: 3100495,
                        darkturquoise: 52945,
                        darkviolet: 9699539,
                        deeppink: 16716947,
                        deepskyblue: 49151,
                        dimgray: 6908265,
                        dimgrey: 6908265,
                        dodgerblue: 2003199,
                        firebrick: 11674146,
                        floralwhite: 16775920,
                        forestgreen: 2263842,
                        fuchsia: 16711935,
                        gainsboro: 14474460,
                        ghostwhite: 16316671,
                        gold: 16766720,
                        goldenrod: 14329120,
                        gray: 8421504,
                        green: 32768,
                        greenyellow: 11403055,
                        grey: 8421504,
                        honeydew: 15794160,
                        hotpink: 16738740,
                        indianred: 13458524,
                        indigo: 4915330,
                        ivory: 16777200,
                        khaki: 15787660,
                        lavender: 15132410,
                        lavenderblush: 16773365,
                        lawngreen: 8190976,
                        lemonchiffon: 16775885,
                        lightblue: 11393254,
                        lightcoral: 15761536,
                        lightcyan: 14745599,
                        lightgoldenrodyellow: 16448210,
                        lightgray: 13882323,
                        lightgreen: 9498256,
                        lightgrey: 13882323,
                        lightpink: 16758465,
                        lightsalmon: 16752762,
                        lightseagreen: 2142890,
                        lightskyblue: 8900346,
                        lightslategray: 7833753,
                        lightslategrey: 7833753,
                        lightsteelblue: 11584734,
                        lightyellow: 16777184,
                        lime: 65280,
                        limegreen: 3329330,
                        linen: 16445670,
                        magenta: 16711935,
                        maroon: 8388608,
                        mediumaquamarine: 6737322,
                        mediumblue: 205,
                        mediumorchid: 12211667,
                        mediumpurple: 9662683,
                        mediumseagreen: 3978097,
                        mediumslateblue: 8087790,
                        mediumspringgreen: 64154,
                        mediumturquoise: 4772300,
                        mediumvioletred: 13047173,
                        midnightblue: 1644912,
                        mintcream: 16121850,
                        mistyrose: 16770273,
                        moccasin: 16770229,
                        navajowhite: 16768685,
                        navy: 128,
                        oldlace: 16643558,
                        olive: 8421376,
                        olivedrab: 7048739,
                        orange: 16753920,
                        orangered: 16729344,
                        orchid: 14315734,
                        palegoldenrod: 15657130,
                        palegreen: 10025880,
                        paleturquoise: 11529966,
                        palevioletred: 14381203,
                        papayawhip: 16773077,
                        peachpuff: 16767673,
                        peru: 13468991,
                        pink: 16761035,
                        plum: 14524637,
                        powderblue: 11591910,
                        purple: 8388736,
                        rebeccapurple: 6697881,
                        red: 16711680,
                        rosybrown: 12357519,
                        royalblue: 4286945,
                        saddlebrown: 9127187,
                        salmon: 16416882,
                        sandybrown: 16032864,
                        seagreen: 3050327,
                        seashell: 16774638,
                        sienna: 10506797,
                        silver: 12632256,
                        skyblue: 8900331,
                        slateblue: 6970061,
                        slategray: 7372944,
                        slategrey: 7372944,
                        snow: 16775930,
                        springgreen: 65407,
                        steelblue: 4620980,
                        tan: 13808780,
                        teal: 32896,
                        thistle: 14204888,
                        tomato: 16737095,
                        turquoise: 4251856,
                        violet: 15631086,
                        wheat: 16113331,
                        white: 16777215,
                        whitesmoke: 16119285,
                        yellow: 16776960,
                        yellowgreen: 10145074,
                    };
                function y() {
                    return this.rgb().formatHex();
                }
                function m() {
                    return P(this).formatHsl();
                }
                function w() {
                    return this.rgb().formatRgb();
                }
                function k(e) {
                    var t, r;
                    return (
                        (e = (e + "").trim().toLowerCase()),
                        (t = h.exec(e))
                            ? ((r = t[1].length),
                              (t = parseInt(t[1], 16)),
                              6 === r
                                  ? x(t)
                                  : 3 === r
                                  ? new O(((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (240 & t), ((15 & t) << 4) | (15 & t), 1)
                                  : 8 === r
                                  ? v((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (255 & t) / 255)
                                  : 4 === r
                                  ? v(((t >> 12) & 15) | ((t >> 8) & 240), ((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (240 & t), (((15 & t) << 4) | (15 & t)) / 255)
                                  : null)
                            : (t = u.exec(e))
                            ? new O(t[1], t[2], t[3], 1)
                            : (t = g.exec(e))
                            ? new O((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, 1)
                            : (t = c.exec(e))
                            ? v(t[1], t[2], t[3], t[4])
                            : (t = d.exec(e))
                            ? v((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, t[4])
                            : (t = p.exec(e))
                            ? E(t[1], t[2] / 100, t[3] / 100, 1)
                            : (t = f.exec(e))
                            ? E(t[1], t[2] / 100, t[3] / 100, t[4])
                            : b.hasOwnProperty(e)
                            ? x(b[e])
                            : "transparent" === e
                            ? new O(NaN, NaN, NaN, 0)
                            : null
                    );
                }
                function x(e) {
                    return new O((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
                }
                function v(e, t, r, n) {
                    return n <= 0 && (e = t = r = NaN), new O(e, t, r, n);
                }
                function M(e) {
                    return e instanceof n || (e = k(e)), e ? new O((e = e.rgb()).r, e.g, e.b, e.opacity) : new O();
                }
                function N(e, t, r, n) {
                    return 1 === arguments.length ? M(e) : new O(e, t, r, null == n ? 1 : n);
                }
                function O(e, t, r, n) {
                    (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
                }
                function j() {
                    return "#" + R(this.r) + R(this.g) + R(this.b);
                }
                function q() {
                    var e = this.opacity;
                    return (
                        (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") +
                        Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                        ", " +
                        Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                        ", " +
                        Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                        (1 === e ? ")" : ", " + e + ")")
                    );
                }
                function R(e) {
                    return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16);
                }
                function E(e, t, r, n) {
                    return n <= 0 ? (e = t = r = NaN) : r <= 0 || r >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN), new H(e, t, r, n);
                }
                function P(e) {
                    if (e instanceof H) return new H(e.h, e.s, e.l, e.opacity);
                    if ((e instanceof n || (e = k(e)), !e)) return new H();
                    if (e instanceof H) return e;
                    var t = (e = e.rgb()).r / 255,
                        r = e.g / 255,
                        i = e.b / 255,
                        a = Math.min(t, r, i),
                        o = Math.max(t, r, i),
                        s = NaN,
                        l = o - a,
                        h = (o + a) / 2;
                    return l ? ((s = t === o ? (r - i) / l + 6 * (r < i) : r === o ? (i - t) / l + 2 : (t - r) / l + 4), (l /= h < 0.5 ? o + a : 2 - o - a), (s *= 60)) : (l = h > 0 && h < 1 ? 0 : s), new H(s, l, h, e.opacity);
                }
                function $(e, t, r, n) {
                    return 1 === arguments.length ? P(e) : new H(e, t, r, null == n ? 1 : n);
                }
                function H(e, t, r, n) {
                    (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
                }
                function C(e, t, r) {
                    return 255 * (e < 60 ? t + ((r - t) * e) / 60 : e < 180 ? r : e < 240 ? t + ((r - t) * (240 - e)) / 60 : t);
                }
                (0, e.default)(n, k, {
                    copy: function (e) {
                        return Object.assign(new this.constructor(), this, e);
                    },
                    displayable: function () {
                        return this.rgb().displayable();
                    },
                    hex: y,
                    formatHex: y,
                    formatHsl: m,
                    formatRgb: w,
                    toString: w,
                }),
                    (0, e.default)(
                        O,
                        N,
                        (0, e.extend)(n, {
                            brighter: function (e) {
                                return (e = null == e ? a : Math.pow(a, e)), new O(this.r * e, this.g * e, this.b * e, this.opacity);
                            },
                            darker: function (e) {
                                return (e = null == e ? i : Math.pow(i, e)), new O(this.r * e, this.g * e, this.b * e, this.opacity);
                            },
                            rgb: function () {
                                return this;
                            },
                            displayable: function () {
                                return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
                            },
                            hex: j,
                            formatHex: j,
                            formatRgb: q,
                            toString: q,
                        })
                    ),
                    (0, e.default)(
                        H,
                        $,
                        (0, e.extend)(n, {
                            brighter: function (e) {
                                return (e = null == e ? a : Math.pow(a, e)), new H(this.h, this.s, this.l * e, this.opacity);
                            },
                            darker: function (e) {
                                return (e = null == e ? i : Math.pow(i, e)), new H(this.h, this.s, this.l * e, this.opacity);
                            },
                            rgb: function () {
                                var e = (this.h % 360) + 360 * (this.h < 0),
                                    t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                                    r = this.l,
                                    n = r + (r < 0.5 ? r : 1 - r) * t,
                                    i = 2 * r - n;
                                return new O(C(e >= 240 ? e - 240 : e + 120, i, n), C(e, i, n), C(e < 120 ? e + 240 : e - 120, i, n), this.opacity);
                            },
                            displayable: function () {
                                return ((0 <= this.s && this.s <= 1) || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
                            },
                            formatHsl: function () {
                                var e = this.opacity;
                                return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === e ? ")" : ", " + e + ")");
                            },
                        })
                    );
            },
            { "./define.js": "CSb3" },
        ],
        ykIB: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.rad2deg = exports.deg2rad = void 0);
                var e = Math.PI / 180;
                exports.deg2rad = e;
                var r = 180 / Math.PI;
                exports.rad2deg = r;
            },
            {},
        ],
        n21X: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.gray = b), (exports.default = y), (exports.Lab = w), (exports.lch = N), (exports.hcl = x), (exports.Hcl = O);
                var t = i(require("./define.js")),
                    n = require("./color.js"),
                    e = require("./math.js");
                function r() {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap();
                    return (
                        (r = function () {
                            return t;
                        }),
                        t
                    );
                }
                function i(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || ("object" != typeof t && "function" != typeof t)) return { default: t };
                    var n = r();
                    if (n && n.has(t)) return n.get(t);
                    var e = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var u = i ? Object.getOwnPropertyDescriptor(t, o) : null;
                            u && (u.get || u.set) ? Object.defineProperty(e, o, u) : (e[o] = t[o]);
                        }
                    return (e.default = t), n && n.set(t, e), e;
                }
                var o = 18,
                    u = 0.96422,
                    a = 1,
                    c = 0.82521,
                    s = 4 / 29,
                    l = 6 / 29,
                    h = 3 * l * l,
                    f = l * l * l;
                function p(t) {
                    if (t instanceof w) return new w(t.l, t.a, t.b, t.opacity);
                    if (t instanceof O) return P(t);
                    t instanceof n.Rgb || (t = (0, n.rgbConvert)(t));
                    var e,
                        r,
                        i = M(t.r),
                        o = M(t.g),
                        s = M(t.b),
                        l = d((0.2225045 * i + 0.7168786 * o + 0.0606169 * s) / a);
                    return (
                        i === o && o === s ? (e = r = l) : ((e = d((0.4360747 * i + 0.3850649 * o + 0.1430804 * s) / u)), (r = d((0.0139322 * i + 0.0971045 * o + 0.7141733 * s) / c))),
                        new w(116 * l - 16, 500 * (e - l), 200 * (l - r), t.opacity)
                    );
                }
                function b(t, n) {
                    return new w(t, 0, 0, null == n ? 1 : n);
                }
                function y(t, n, e, r) {
                    return 1 === arguments.length ? p(t) : new w(t, n, e, null == r ? 1 : r);
                }
                function w(t, n, e, r) {
                    (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
                }
                function d(t) {
                    return t > f ? Math.pow(t, 1 / 3) : t / h + s;
                }
                function g(t) {
                    return t > l ? t * t * t : h * (t - s);
                }
                function v(t) {
                    return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
                }
                function M(t) {
                    return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
                }
                function j(t) {
                    if (t instanceof O) return new O(t.h, t.c, t.l, t.opacity);
                    if ((t instanceof w || (t = p(t)), 0 === t.a && 0 === t.b)) return new O(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
                    var n = Math.atan2(t.b, t.a) * e.rad2deg;
                    return new O(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
                }
                function N(t, n, e, r) {
                    return 1 === arguments.length ? j(t) : new O(e, n, t, null == r ? 1 : r);
                }
                function x(t, n, e, r) {
                    return 1 === arguments.length ? j(t) : new O(t, n, e, null == r ? 1 : r);
                }
                function O(t, n, e, r) {
                    (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
                }
                function P(t) {
                    if (isNaN(t.h)) return new w(t.l, 0, 0, t.opacity);
                    var n = t.h * e.deg2rad;
                    return new w(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
                }
                (0, t.default)(
                    w,
                    y,
                    (0, t.extend)(n.Color, {
                        brighter: function (t) {
                            return new w(this.l + o * (null == t ? 1 : t), this.a, this.b, this.opacity);
                        },
                        darker: function (t) {
                            return new w(this.l - o * (null == t ? 1 : t), this.a, this.b, this.opacity);
                        },
                        rgb: function () {
                            var t = (this.l + 16) / 116,
                                e = isNaN(this.a) ? t : t + this.a / 500,
                                r = isNaN(this.b) ? t : t - this.b / 200;
                            return (
                                (e = u * g(e)),
                                (t = a * g(t)),
                                (r = c * g(r)),
                                new n.Rgb(v(3.1338561 * e - 1.6168667 * t - 0.4906146 * r), v(-0.9787684 * e + 1.9161415 * t + 0.033454 * r), v(0.0719453 * e - 0.2289914 * t + 1.4052427 * r), this.opacity)
                            );
                        },
                    })
                ),
                    (0, t.default)(
                        O,
                        x,
                        (0, t.extend)(n.Color, {
                            brighter: function (t) {
                                return new O(this.h, this.c, this.l + o * (null == t ? 1 : t), this.opacity);
                            },
                            darker: function (t) {
                                return new O(this.h, this.c, this.l - o * (null == t ? 1 : t), this.opacity);
                            },
                            rgb: function () {
                                return P(this).rgb();
                            },
                        })
                    );
            },
            { "./define.js": "CSb3", "./color.js": "UAf0", "./math.js": "ykIB" },
        ],
        aDX2: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = d), (exports.Cubehelix = b);
                var t = i(require("./define.js")),
                    e = require("./color.js"),
                    r = require("./math.js");
                function n() {
                    if ("function" != typeof WeakMap) return null;
                    var t = new WeakMap();
                    return (
                        (n = function () {
                            return t;
                        }),
                        t
                    );
                }
                function i(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || ("object" != typeof t && "function" != typeof t)) return { default: t };
                    var e = n();
                    if (e && e.has(t)) return e.get(t);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var s = i ? Object.getOwnPropertyDescriptor(t, o) : null;
                            s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = t[o]);
                        }
                    return (r.default = t), e && e.set(t, r), r;
                }
                var o = -0.14861,
                    s = 1.78277,
                    a = -0.29227,
                    u = -0.90649,
                    h = 1.97294,
                    c = h * u,
                    f = h * s,
                    l = s * a - u * o;
                function p(t) {
                    if (t instanceof b) return new b(t.h, t.s, t.l, t.opacity);
                    t instanceof e.Rgb || (t = (0, e.rgbConvert)(t));
                    var n = t.r / 255,
                        i = t.g / 255,
                        o = t.b / 255,
                        s = (l * o + c * n - f * i) / (l + c - f),
                        p = o - s,
                        d = (h * (i - s) - a * p) / u,
                        y = Math.sqrt(d * d + p * p) / (h * s * (1 - s)),
                        g = y ? Math.atan2(d, p) * r.rad2deg - 120 : NaN;
                    return new b(g < 0 ? g + 360 : g, y, s, t.opacity);
                }
                function d(t, e, r, n) {
                    return 1 === arguments.length ? p(t) : new b(t, e, r, null == n ? 1 : n);
                }
                function b(t, e, r, n) {
                    (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
                }
                (0, t.default)(
                    b,
                    d,
                    (0, t.extend)(e.Color, {
                        brighter: function (t) {
                            return (t = null == t ? e.brighter : Math.pow(e.brighter, t)), new b(this.h, this.s, this.l * t, this.opacity);
                        },
                        darker: function (t) {
                            return (t = null == t ? e.darker : Math.pow(e.darker, t)), new b(this.h, this.s, this.l * t, this.opacity);
                        },
                        rgb: function () {
                            var t = isNaN(this.h) ? 0 : (this.h + 120) * r.deg2rad,
                                n = +this.l,
                                i = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                                c = Math.cos(t),
                                f = Math.sin(t);
                            return new e.Rgb(255 * (n + i * (o * c + s * f)), 255 * (n + i * (a * c + u * f)), 255 * (n + i * (h * c)), this.opacity);
                        },
                    })
                );
            },
            { "./define.js": "CSb3", "./color.js": "UAf0", "./math.js": "ykIB" },
        ],
        TJ2K: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    Object.defineProperty(exports, "color", {
                        enumerable: !0,
                        get: function () {
                            return e.default;
                        },
                    }),
                    Object.defineProperty(exports, "rgb", {
                        enumerable: !0,
                        get: function () {
                            return e.rgb;
                        },
                    }),
                    Object.defineProperty(exports, "hsl", {
                        enumerable: !0,
                        get: function () {
                            return e.hsl;
                        },
                    }),
                    Object.defineProperty(exports, "lab", {
                        enumerable: !0,
                        get: function () {
                            return r.default;
                        },
                    }),
                    Object.defineProperty(exports, "hcl", {
                        enumerable: !0,
                        get: function () {
                            return r.hcl;
                        },
                    }),
                    Object.defineProperty(exports, "lch", {
                        enumerable: !0,
                        get: function () {
                            return r.lch;
                        },
                    }),
                    Object.defineProperty(exports, "gray", {
                        enumerable: !0,
                        get: function () {
                            return r.gray;
                        },
                    }),
                    Object.defineProperty(exports, "cubehelix", {
                        enumerable: !0,
                        get: function () {
                            return t.default;
                        },
                    });
                var e = o(require("./color.js")),
                    r = o(require("./lab.js")),
                    t = n(require("./cubehelix.js"));
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (u = function () {
                            return e;
                        }),
                        e
                    );
                }
                function o(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var r = u();
                    if (r && r.has(e)) return r.get(e);
                    var t = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var c = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                            c && (c.get || c.set) ? Object.defineProperty(t, o, c) : (t[o] = e[o]);
                        }
                    return (t.default = e), r && r.set(e, t), t;
                }
            },
            { "./color.js": "UAf0", "./lab.js": "n21X", "./cubehelix.js": "aDX2" },
        ],
        mIuw: [
            function (require, module, exports) {
                "use strict";
                function e(e, r, t, n, o) {
                    var u = e * e,
                        s = u * e;
                    return ((1 - 3 * e + 3 * u - s) * r + (4 - 6 * u + 3 * s) * t + (1 + 3 * e + 3 * u - 3 * s) * n + s * o) / 6;
                }
                function r(r) {
                    var t = r.length - 1;
                    return function (n) {
                        var o = n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
                            u = r[o],
                            s = r[o + 1],
                            a = o > 0 ? r[o - 1] : 2 * u - s,
                            f = o < t - 1 ? r[o + 2] : 2 * s - u;
                        return e((n - o / t) * t, a, u, s, f);
                    };
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.basis = e), (exports.default = r);
            },
            {},
        ],
        t9MF: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = require("./basis.js");
                function r(r) {
                    var t = r.length;
                    return function (s) {
                        var u = Math.floor(((s %= 1) < 0 ? ++s : s) * t),
                            a = r[(u + t - 1) % t],
                            n = r[u % t],
                            o = r[(u + 1) % t],
                            i = r[(u + 2) % t];
                        return (0, e.basis)((s - u / t) * t, a, n, o, i);
                    };
                }
            },
            { "./basis.js": "mIuw" },
        ],
        YtnT: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    return function () {
                        return e;
                    };
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        OW9X: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.hue = u), (exports.gamma = o), (exports.default = a);
                var t = e(require("./constant.js"));
                function e(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function n(t, e) {
                    return function (n) {
                        return t + n * e;
                    };
                }
                function r(t, e, n) {
                    return (
                        (t = Math.pow(t, n)),
                        (e = Math.pow(e, n) - t),
                        (n = 1 / n),
                        function (r) {
                            return Math.pow(t + r * e, n);
                        }
                    );
                }
                function u(e, r) {
                    var u = r - e;
                    return u ? n(e, u > 180 || u < -180 ? u - 360 * Math.round(u / 360) : u) : (0, t.default)(isNaN(e) ? r : e);
                }
                function o(e) {
                    return 1 == (e = +e)
                        ? a
                        : function (n, u) {
                              return u - n ? r(n, u, e) : (0, t.default)(isNaN(n) ? u : n);
                          };
                }
                function a(e, r) {
                    var u = r - e;
                    return u ? n(e, u) : (0, t.default)(isNaN(e) ? r : e);
                }
            },
            { "./constant.js": "YtnT" },
        ],
        hw5o: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.rgbBasisClosed = exports.rgbBasis = exports.default = void 0);
                var r = require("d3-color"),
                    e = a(require("./basis.js")),
                    t = a(require("./basisClosed.js")),
                    n = u(require("./color.js"));
                function o() {
                    if ("function" != typeof WeakMap) return null;
                    var r = new WeakMap();
                    return (
                        (o = function () {
                            return r;
                        }),
                        r
                    );
                }
                function u(r) {
                    if (r && r.__esModule) return r;
                    if (null === r || ("object" != typeof r && "function" != typeof r)) return { default: r };
                    var e = o();
                    if (e && e.has(r)) return e.get(r);
                    var t = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in r)
                        if (Object.prototype.hasOwnProperty.call(r, u)) {
                            var a = n ? Object.getOwnPropertyDescriptor(r, u) : null;
                            a && (a.get || a.set) ? Object.defineProperty(t, u, a) : (t[u] = r[u]);
                        }
                    return (t.default = r), e && e.set(r, t), t;
                }
                function a(r) {
                    return r && r.__esModule ? r : { default: r };
                }
                var i = (function e(t) {
                    var o = (0, n.gamma)(t);
                    function u(e, t) {
                        var u = o((e = (0, r.rgb)(e)).r, (t = (0, r.rgb)(t)).r),
                            a = o(e.g, t.g),
                            i = o(e.b, t.b),
                            s = (0, n.default)(e.opacity, t.opacity);
                        return function (r) {
                            return (e.r = u(r)), (e.g = a(r)), (e.b = i(r)), (e.opacity = s(r)), e + "";
                        };
                    }
                    return (u.gamma = e), u;
                })(1);
                function s(e) {
                    return function (t) {
                        var n,
                            o,
                            u = t.length,
                            a = new Array(u),
                            i = new Array(u),
                            s = new Array(u);
                        for (n = 0; n < u; ++n) (o = (0, r.rgb)(t[n])), (a[n] = o.r || 0), (i[n] = o.g || 0), (s[n] = o.b || 0);
                        return (
                            (a = e(a)),
                            (i = e(i)),
                            (s = e(s)),
                            (o.opacity = 1),
                            function (r) {
                                return (o.r = a(r)), (o.g = i(r)), (o.b = s(r)), o + "";
                            }
                        );
                    };
                }
                exports.default = i;
                var f = s(e.default);
                exports.rgbBasis = f;
                var c = s(t.default);
                exports.rgbBasisClosed = c;
            },
            { "d3-color": "TJ2K", "./basis.js": "mIuw", "./basisClosed.js": "t9MF", "./color.js": "OW9X" },
        ],
        fCry: [
            function (require, module, exports) {
                "use strict";
                function e(e, r) {
                    r || (r = []);
                    var t,
                        n = e ? Math.min(r.length, e.length) : 0,
                        i = r.slice();
                    return function (u) {
                        for (t = 0; t < n; ++t) i[t] = e[t] * (1 - u) + r[t] * u;
                        return i;
                    };
                }
                function r(e) {
                    return ArrayBuffer.isView(e) && !(e instanceof DataView);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e), (exports.isNumberArray = r);
            },
            {},
        ],
        j6Kl: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = o), (exports.genericArray = f);
                var e = u(require("./value.js")),
                    r = n(require("./numberArray.js"));
                function t() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (t = function () {
                            return e;
                        }),
                        e
                    );
                }
                function n(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var r = t();
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var f = u ? Object.getOwnPropertyDescriptor(e, o) : null;
                            f && (f.get || f.set) ? Object.defineProperty(n, o, f) : (n[o] = e[o]);
                        }
                    return (n.default = e), r && r.set(e, n), n;
                }
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function o(e, t) {
                    return ((0, r.isNumberArray)(t) ? r.default : f)(e, t);
                }
                function f(r, t) {
                    var n,
                        u = t ? t.length : 0,
                        o = r ? Math.min(u, r.length) : 0,
                        f = new Array(o),
                        a = new Array(u);
                    for (n = 0; n < o; ++n) f[n] = (0, e.default)(r[n], t[n]);
                    for (; n < u; ++n) a[n] = t[n];
                    return function (e) {
                        for (n = 0; n < o; ++n) a[n] = f[n](e);
                        return a;
                    };
                }
            },
            { "./value.js": "ONGM", "./numberArray.js": "fCry" },
        ],
        npIv: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    var r = new Date();
                    return (
                        (e = +e),
                        (t = +t),
                        function (n) {
                            return r.setTime(e * (1 - n) + t * n), r;
                        }
                    );
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        eUtU: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    return (
                        (e = +e),
                        (t = +t),
                        function (r) {
                            return e * (1 - r) + t * r;
                        }
                    );
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        Ci2u: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = t(require("./value.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(t, r) {
                    var u,
                        n = {},
                        o = {};
                    for (u in ((null !== t && "object" == typeof t) || (t = {}), (null !== r && "object" == typeof r) || (r = {}), r)) u in t ? (n[u] = (0, e.default)(t[u], r[u])) : (o[u] = r[u]);
                    return function (e) {
                        for (u in n) o[u] = n[u](e);
                        return o;
                    };
                }
            },
            { "./value.js": "ONGM" },
        ],
        WNxQ: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = l);
                var e = n(require("./number.js"));
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                    t = new RegExp(r.source, "g");
                function u(e) {
                    return function () {
                        return e;
                    };
                }
                function i(e) {
                    return function (n) {
                        return e(n) + "";
                    };
                }
                function l(n, l) {
                    var o,
                        c,
                        d,
                        s = (r.lastIndex = t.lastIndex = 0),
                        f = -1,
                        x = [],
                        a = [];
                    for (n += "", l += ""; (o = r.exec(n)) && (c = t.exec(l)); )
                        (d = c.index) > s && ((d = l.slice(s, d)), x[f] ? (x[f] += d) : (x[++f] = d)),
                            (o = o[0]) === (c = c[0]) ? (x[f] ? (x[f] += c) : (x[++f] = c)) : ((x[++f] = null), a.push({ i: f, x: (0, e.default)(o, c) })),
                            (s = t.lastIndex);
                    return (
                        s < l.length && ((d = l.slice(s)), x[f] ? (x[f] += d) : (x[++f] = d)),
                        x.length < 2
                            ? a[0]
                                ? i(a[0].x)
                                : u(l)
                            : ((l = a.length),
                              function (e) {
                                  for (var n, r = 0; r < l; ++r) x[(n = a[r]).i] = n.x(e);
                                  return x.join("");
                              })
                    );
                }
            },
            { "./number.js": "eUtU" },
        ],
        ONGM: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = d);
                var e = require("d3-color"),
                    r = c(require("./rgb.js")),
                    t = require("./array.js"),
                    u = c(require("./date.js")),
                    n = c(require("./number.js")),
                    o = c(require("./object.js")),
                    a = c(require("./string.js")),
                    f = c(require("./constant.js")),
                    i = s(require("./numberArray.js"));
                function l() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (l = function () {
                            return e;
                        }),
                        e
                    );
                }
                function s(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var r = l();
                    if (r && r.has(e)) return r.get(e);
                    var t = {},
                        u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var o = u ? Object.getOwnPropertyDescriptor(e, n) : null;
                            o && (o.get || o.set) ? Object.defineProperty(t, n, o) : (t[n] = e[n]);
                        }
                    return (t.default = e), r && r.set(e, t), t;
                }
                function c(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function d(l, s) {
                    var c,
                        d = typeof s;
                    return null == s || "boolean" === d
                        ? (0, f.default)(s)
                        : ("number" === d
                              ? n.default
                              : "string" === d
                              ? (c = (0, e.color)(s))
                                  ? ((s = c), r.default)
                                  : a.default
                              : s instanceof e.color
                              ? r.default
                              : s instanceof Date
                              ? u.default
                              : (0, i.isNumberArray)(s)
                              ? i.default
                              : Array.isArray(s)
                              ? t.genericArray
                              : ("function" != typeof s.valueOf && "function" != typeof s.toString) || isNaN(s)
                              ? o.default
                              : n.default)(l, s);
                }
            },
            { "d3-color": "TJ2K", "./rgb.js": "hw5o", "./array.js": "j6Kl", "./date.js": "npIv", "./number.js": "eUtU", "./object.js": "Ci2u", "./string.js": "WNxQ", "./constant.js": "YtnT", "./numberArray.js": "fCry" },
        ],
        iFPW: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    var e = t.length;
                    return function (r) {
                        return t[Math.max(0, Math.min(e - 1, Math.floor(r * e)))];
                    };
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
            },
            {},
        ],
        lYdl: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = require("./color.js");
                function r(r, t) {
                    var o = (0, e.hue)(+r, +t);
                    return function (e) {
                        var r = o(e);
                        return r - 360 * Math.floor(r / 360);
                    };
                }
            },
            { "./color.js": "OW9X" },
        ],
        Ehv8: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    return (
                        (e = +e),
                        (t = +t),
                        function (r) {
                            return Math.round(e * (1 - r) + t * r);
                        }
                    );
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        sFbg: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = a), (exports.identity = void 0);
                var t = 180 / Math.PI,
                    e = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
                function a(e, a, r, s, n, l) {
                    var o, i, c;
                    return (
                        (o = Math.sqrt(e * e + a * a)) && ((e /= o), (a /= o)),
                        (c = e * r + a * s) && ((r -= e * c), (s -= a * c)),
                        (i = Math.sqrt(r * r + s * s)) && ((r /= i), (s /= i), (c /= i)),
                        e * s < a * r && ((e = -e), (a = -a), (c = -c), (o = -o)),
                        { translateX: n, translateY: l, rotate: Math.atan2(a, e) * t, skewX: Math.atan(c) * t, scaleX: o, scaleY: i }
                    );
                }
                exports.identity = e;
            },
            {},
        ],
        igaz: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.parseCss = i), (exports.parseSvg = l);
                var e,
                    t,
                    r,
                    n,
                    o = a(require("./decompose.js"));
                function u() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (u = function () {
                            return e;
                        }),
                        e
                    );
                }
                function a(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
                        }
                    return (r.default = e), t && t.set(e, r), r;
                }
                function i(n) {
                    return "none" === n
                        ? o.identity
                        : (e || ((e = document.createElement("DIV")), (t = document.documentElement), (r = document.defaultView)),
                          (e.style.transform = n),
                          (n = r.getComputedStyle(t.appendChild(e), null).getPropertyValue("transform")),
                          t.removeChild(e),
                          (n = n.slice(7, -1).split(",")),
                          (0, o.default)(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5]));
                }
                function l(e) {
                    return null == e
                        ? o.identity
                        : (n || (n = document.createElementNS("http://www.w3.org/2000/svg", "g")),
                          n.setAttribute("transform", e),
                          (e = n.transform.baseVal.consolidate()) ? ((e = e.matrix), (0, o.default)(e.a, e.b, e.c, e.d, e.e, e.f)) : o.identity);
                }
            },
            { "./decompose.js": "sFbg" },
        ],
        tUKx: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.interpolateTransformSvg = exports.interpolateTransformCss = void 0);
                var e = r(require("../number.js")),
                    t = require("./parse.js");
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function s(t, r, s, n) {
                    function a(e) {
                        return e.length ? e.pop() + " " : "";
                    }
                    return function (u, l) {
                        var o = [],
                            p = [];
                        return (
                            (u = t(u)),
                            (l = t(l)),
                            (function (t, n, a, u, l, o) {
                                if (t !== a || n !== u) {
                                    var p = l.push("translate(", null, r, null, s);
                                    o.push({ i: p - 4, x: (0, e.default)(t, a) }, { i: p - 2, x: (0, e.default)(n, u) });
                                } else (a || u) && l.push("translate(" + a + r + u + s);
                            })(u.translateX, u.translateY, l.translateX, l.translateY, o, p),
                            (function (t, r, s, u) {
                                t !== r ? (t - r > 180 ? (r += 360) : r - t > 180 && (t += 360), u.push({ i: s.push(a(s) + "rotate(", null, n) - 2, x: (0, e.default)(t, r) })) : r && s.push(a(s) + "rotate(" + r + n);
                            })(u.rotate, l.rotate, o, p),
                            (function (t, r, s, u) {
                                t !== r ? u.push({ i: s.push(a(s) + "skewX(", null, n) - 2, x: (0, e.default)(t, r) }) : r && s.push(a(s) + "skewX(" + r + n);
                            })(u.skewX, l.skewX, o, p),
                            (function (t, r, s, n, u, l) {
                                if (t !== s || r !== n) {
                                    var o = u.push(a(u) + "scale(", null, ",", null, ")");
                                    l.push({ i: o - 4, x: (0, e.default)(t, s) }, { i: o - 2, x: (0, e.default)(r, n) });
                                } else (1 === s && 1 === n) || u.push(a(u) + "scale(" + s + "," + n + ")");
                            })(u.scaleX, u.scaleY, l.scaleX, l.scaleY, o, p),
                            (u = l = null),
                            function (e) {
                                for (var t, r = -1, s = p.length; ++r < s; ) o[(t = p[r]).i] = t.x(e);
                                return o.join("");
                            }
                        );
                    };
                }
                var n = s(t.parseCss, "px, ", "px)", "deg)");
                exports.interpolateTransformCss = n;
                var a = s(t.parseSvg, ", ", ")", ")");
                exports.interpolateTransformSvg = a;
            },
            { "../number.js": "eUtU", "./parse.js": "igaz" },
        ],
        MbcF: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = M);
                var t = Math.SQRT2,
                    e = 2,
                    r = 4,
                    n = 1e-12;
                function a(t) {
                    return ((t = Math.exp(t)) + 1 / t) / 2;
                }
                function u(t) {
                    return ((t = Math.exp(t)) - 1 / t) / 2;
                }
                function o(t) {
                    return ((t = Math.exp(2 * t)) - 1) / (t + 1);
                }
                function M(M, h) {
                    var i,
                        f,
                        s = M[0],
                        c = M[1],
                        l = M[2],
                        p = h[0],
                        x = h[1],
                        v = h[2],
                        d = p - s,
                        g = x - c,
                        q = d * d + g * g;
                    if (q < n)
                        (f = Math.log(v / l) / t),
                            (i = function (e) {
                                return [s + e * d, c + e * g, l * Math.exp(t * e * f)];
                            });
                    else {
                        var _ = Math.sqrt(q),
                            b = (v * v - l * l + r * q) / (2 * l * e * _),
                            j = (v * v - l * l - r * q) / (2 * v * e * _),
                            y = Math.log(Math.sqrt(b * b + 1) - b),
                            O = Math.log(Math.sqrt(j * j + 1) - j);
                        (f = (O - y) / t),
                            (i = function (r) {
                                var n = r * f,
                                    M = a(y),
                                    h = (l / (e * _)) * (M * o(t * n + y) - u(y));
                                return [s + h * d, c + h * g, (l * M) / a(t * n + y)];
                            });
                    }
                    return (i.duration = 1e3 * f), i;
                }
            },
            {},
        ],
        BrWg: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.hslLong = exports.default = void 0);
                var e = require("d3-color"),
                    t = o(require("./color.js"));
                function r() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (r = function () {
                            return e;
                        }),
                        e
                    );
                }
                function o(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var t = r();
                    if (t && t.has(e)) return t.get(e);
                    var o = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                            var a = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                            a && (a.get || a.set) ? Object.defineProperty(o, u, a) : (o[u] = e[u]);
                        }
                    return (o.default = e), t && t.set(e, o), o;
                }
                function n(r) {
                    return function (o, n) {
                        var u = r((o = (0, e.hsl)(o)).h, (n = (0, e.hsl)(n)).h),
                            a = (0, t.default)(o.s, n.s),
                            f = (0, t.default)(o.l, n.l),
                            l = (0, t.default)(o.opacity, n.opacity);
                        return function (e) {
                            return (o.h = u(e)), (o.s = a(e)), (o.l = f(e)), (o.opacity = l(e)), o + "";
                        };
                    };
                }
                var u = n(t.hue);
                exports.default = u;
                var a = n(t.default);
                exports.hslLong = a;
            },
            { "d3-color": "TJ2K", "./color.js": "OW9X" },
        ],
        HCNS: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
                var e = require("d3-color"),
                    t = r(require("./color.js"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(r, u) {
                    var a = (0, t.default)((r = (0, e.lab)(r)).l, (u = (0, e.lab)(u)).l),
                        l = (0, t.default)(r.a, u.a),
                        o = (0, t.default)(r.b, u.b),
                        c = (0, t.default)(r.opacity, u.opacity);
                    return function (e) {
                        return (r.l = a(e)), (r.a = l(e)), (r.b = o(e)), (r.opacity = c(e)), r + "";
                    };
                }
            },
            { "d3-color": "TJ2K", "./color.js": "OW9X" },
        ],
        VIlX: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.hclLong = exports.default = void 0);
                var e = require("d3-color"),
                    t = o(require("./color.js"));
                function r() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (r = function () {
                            return e;
                        }),
                        e
                    );
                }
                function o(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var t = r();
                    if (t && t.has(e)) return t.get(e);
                    var o = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                            var c = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                            c && (c.get || c.set) ? Object.defineProperty(o, u, c) : (o[u] = e[u]);
                        }
                    return (o.default = e), t && t.set(e, o), o;
                }
                function n(r) {
                    return function (o, n) {
                        var u = r((o = (0, e.hcl)(o)).h, (n = (0, e.hcl)(n)).h),
                            c = (0, t.default)(o.c, n.c),
                            a = (0, t.default)(o.l, n.l),
                            f = (0, t.default)(o.opacity, n.opacity);
                        return function (e) {
                            return (o.h = u(e)), (o.c = c(e)), (o.l = a(e)), (o.opacity = f(e)), o + "";
                        };
                    };
                }
                var u = n(t.hue);
                exports.default = u;
                var c = n(t.default);
                exports.hclLong = c;
            },
            { "d3-color": "TJ2K", "./color.js": "OW9X" },
        ],
        NOHm: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.cubehelixLong = exports.default = void 0);
                var e = require("d3-color"),
                    t = n(require("./color.js"));
                function r() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (r = function () {
                            return e;
                        }),
                        e
                    );
                }
                function n(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var t = r();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, u, a) : (n[u] = e[u]);
                        }
                    return (n.default = e), t && t.set(e, n), n;
                }
                function o(r) {
                    return (function n(o) {
                        function u(n, u) {
                            var a = r((n = (0, e.cubehelix)(n)).h, (u = (0, e.cubehelix)(u)).h),
                                i = (0, t.default)(n.s, u.s),
                                c = (0, t.default)(n.l, u.l),
                                f = (0, t.default)(n.opacity, u.opacity);
                            return function (e) {
                                return (n.h = a(e)), (n.s = i(e)), (n.l = c(Math.pow(e, o))), (n.opacity = f(e)), n + "";
                            };
                        }
                        return (o = +o), (u.gamma = n), u;
                    })(1);
                }
                var u = o(t.hue);
                exports.default = u;
                var a = o(t.default);
                exports.cubehelixLong = a;
            },
            { "d3-color": "TJ2K", "./color.js": "OW9X" },
        ],
        nlPb: [
            function (require, module, exports) {
                "use strict";
                function e(e, r) {
                    for (var t = 0, n = r.length - 1, a = r[0], o = new Array(n < 0 ? 0 : n); t < n; ) o[t] = e(a, (a = r[++t]));
                    return function (e) {
                        var r = Math.max(0, Math.min(n - 1, Math.floor((e *= n))));
                        return o[r](e - r);
                    };
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        g3ua: [
            function (require, module, exports) {
                "use strict";
                function e(e, r) {
                    for (var t = new Array(r), o = 0; o < r; ++o) t[o] = e(o / (r - 1));
                    return t;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        mkGF: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    Object.defineProperty(exports, "interpolate", {
                        enumerable: !0,
                        get: function () {
                            return e.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateArray", {
                        enumerable: !0,
                        get: function () {
                            return r.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateBasis", {
                        enumerable: !0,
                        get: function () {
                            return t.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateBasisClosed", {
                        enumerable: !0,
                        get: function () {
                            return n.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateDate", {
                        enumerable: !0,
                        get: function () {
                            return u.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateDiscrete", {
                        enumerable: !0,
                        get: function () {
                            return o.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateHue", {
                        enumerable: !0,
                        get: function () {
                            return i.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateNumber", {
                        enumerable: !0,
                        get: function () {
                            return a.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateNumberArray", {
                        enumerable: !0,
                        get: function () {
                            return l.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateObject", {
                        enumerable: !0,
                        get: function () {
                            return f.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateRound", {
                        enumerable: !0,
                        get: function () {
                            return p.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateString", {
                        enumerable: !0,
                        get: function () {
                            return s.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateTransformCss", {
                        enumerable: !0,
                        get: function () {
                            return c.interpolateTransformCss;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateTransformSvg", {
                        enumerable: !0,
                        get: function () {
                            return c.interpolateTransformSvg;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateZoom", {
                        enumerable: !0,
                        get: function () {
                            return b.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateRgb", {
                        enumerable: !0,
                        get: function () {
                            return d.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateRgbBasis", {
                        enumerable: !0,
                        get: function () {
                            return d.rgbBasis;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateRgbBasisClosed", {
                        enumerable: !0,
                        get: function () {
                            return d.rgbBasisClosed;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateHsl", {
                        enumerable: !0,
                        get: function () {
                            return j.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateHslLong", {
                        enumerable: !0,
                        get: function () {
                            return j.hslLong;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateLab", {
                        enumerable: !0,
                        get: function () {
                            return g.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateHcl", {
                        enumerable: !0,
                        get: function () {
                            return y.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateHclLong", {
                        enumerable: !0,
                        get: function () {
                            return y.hclLong;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateCubehelix", {
                        enumerable: !0,
                        get: function () {
                            return m.default;
                        },
                    }),
                    Object.defineProperty(exports, "interpolateCubehelixLong", {
                        enumerable: !0,
                        get: function () {
                            return m.cubehelixLong;
                        },
                    }),
                    Object.defineProperty(exports, "piecewise", {
                        enumerable: !0,
                        get: function () {
                            return O.default;
                        },
                    }),
                    Object.defineProperty(exports, "quantize", {
                        enumerable: !0,
                        get: function () {
                            return x.default;
                        },
                    });
                var e = h(require("./value.js")),
                    r = h(require("./array.js")),
                    t = h(require("./basis.js")),
                    n = h(require("./basisClosed.js")),
                    u = h(require("./date.js")),
                    o = h(require("./discrete.js")),
                    i = h(require("./hue.js")),
                    a = h(require("./number.js")),
                    l = h(require("./numberArray.js")),
                    f = h(require("./object.js")),
                    p = h(require("./round.js")),
                    s = h(require("./string.js")),
                    c = require("./transform/index.js"),
                    b = h(require("./zoom.js")),
                    d = q(require("./rgb.js")),
                    j = q(require("./hsl.js")),
                    g = h(require("./lab.js")),
                    y = q(require("./hcl.js")),
                    m = q(require("./cubehelix.js")),
                    O = h(require("./piecewise.js")),
                    x = h(require("./quantize.js"));
                function P() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (P = function () {
                            return e;
                        }),
                        e
                    );
                }
                function q(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var r = P();
                    if (r && r.has(e)) return r.get(e);
                    var t = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                            o && (o.get || o.set) ? Object.defineProperty(t, u, o) : (t[u] = e[u]);
                        }
                    return (t.default = e), r && r.set(e, t), t;
                }
                function h(e) {
                    return e && e.__esModule ? e : { default: e };
                }
            },
            {
                "./value.js": "ONGM",
                "./array.js": "j6Kl",
                "./basis.js": "mIuw",
                "./basisClosed.js": "t9MF",
                "./date.js": "npIv",
                "./discrete.js": "iFPW",
                "./hue.js": "lYdl",
                "./number.js": "eUtU",
                "./numberArray.js": "fCry",
                "./object.js": "Ci2u",
                "./round.js": "Ehv8",
                "./string.js": "WNxQ",
                "./transform/index.js": "tUKx",
                "./zoom.js": "MbcF",
                "./rgb.js": "hw5o",
                "./hsl.js": "BrWg",
                "./lab.js": "HCNS",
                "./hcl.js": "VIlX",
                "./cubehelix.js": "NOHm",
                "./piecewise.js": "nlPb",
                "./quantize.js": "g3ua",
            },
        ],
        v2Ya: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.now = f), (exports.Timer = m), (exports.timer = p), (exports.timerFlush = w);
                var t,
                    n,
                    e = 0,
                    o = 0,
                    i = 0,
                    r = 1e3,
                    l = 0,
                    c = 0,
                    s = 0,
                    u = "object" == typeof performance && performance.now ? performance : Date,
                    a =
                        "object" == typeof window && window.requestAnimationFrame
                            ? window.requestAnimationFrame.bind(window)
                            : function (t) {
                                  setTimeout(t, 17);
                              };
                function f() {
                    return c || (a(_), (c = u.now() + s));
                }
                function _() {
                    c = 0;
                }
                function m() {
                    this._call = this._time = this._next = null;
                }
                function p(t, n, e) {
                    var o = new m();
                    return o.restart(t, n, e), o;
                }
                function w() {
                    f(), ++e;
                    for (var n, o = t; o; ) (n = c - o._time) >= 0 && o._call.call(null, n), (o = o._next);
                    --e;
                }
                function h() {
                    (c = (l = u.now()) + s), (e = o = 0);
                    try {
                        w();
                    } finally {
                        (e = 0), y(), (c = 0);
                    }
                }
                function x() {
                    var t = u.now(),
                        n = t - l;
                    n > r && ((s -= n), (l = t));
                }
                function y() {
                    for (var e, o, i = t, r = 1 / 0; i; ) i._call ? (r > i._time && (r = i._time), (e = i), (i = i._next)) : ((o = i._next), (i._next = null), (i = e ? (e._next = o) : (t = o)));
                    (n = e), v(r);
                }
                function v(t) {
                    e || (o && (o = clearTimeout(o)), t - c > 24 ? (t < 1 / 0 && (o = setTimeout(h, t - u.now() - s)), i && (i = clearInterval(i))) : (i || ((l = u.now()), (i = setInterval(x, r))), (e = 1), a(h)));
                }
                m.prototype = p.prototype = {
                    constructor: m,
                    restart: function (e, o, i) {
                        if ("function" != typeof e) throw new TypeError("callback is not a function");
                        (i = (null == i ? f() : +i) + (null == o ? 0 : +o)), this._next || n === this || (n ? (n._next = this) : (t = this), (n = this)), (this._call = e), (this._time = i), v();
                    },
                    stop: function () {
                        this._call && ((this._call = null), (this._time = 1 / 0), v());
                    },
                };
            },
            {},
        ],
        iEU7: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = require("./timer.js");
                function r(r, t, u) {
                    var n = new e.Timer();
                    return (
                        (t = null == t ? 0 : +t),
                        n.restart(
                            function (e) {
                                n.stop(), r(e + t);
                            },
                            t,
                            u
                        ),
                        n
                    );
                }
            },
            { "./timer.js": "v2Ya" },
        ],
        B8zX: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = require("./timer.js");
                function r(r, t, n) {
                    var u = new e.Timer(),
                        s = t;
                    return null == t
                        ? (u.restart(r, t, n), u)
                        : ((t = +t),
                          (n = null == n ? (0, e.now)() : +n),
                          u.restart(
                              function e(a) {
                                  (a += s), u.restart(e, (s += t), n), r(a);
                              },
                              t,
                              n
                          ),
                          u);
                }
            },
            { "./timer.js": "v2Ya" },
        ],
        CBES: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    Object.defineProperty(exports, "now", {
                        enumerable: !0,
                        get: function () {
                            return e.now;
                        },
                    }),
                    Object.defineProperty(exports, "timer", {
                        enumerable: !0,
                        get: function () {
                            return e.timer;
                        },
                    }),
                    Object.defineProperty(exports, "timerFlush", {
                        enumerable: !0,
                        get: function () {
                            return e.timerFlush;
                        },
                    }),
                    Object.defineProperty(exports, "timeout", {
                        enumerable: !0,
                        get: function () {
                            return t.default;
                        },
                    }),
                    Object.defineProperty(exports, "interval", {
                        enumerable: !0,
                        get: function () {
                            return r.default;
                        },
                    });
                var e = require("./timer.js"),
                    t = n(require("./timeout.js")),
                    r = n(require("./interval.js"));
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
            },
            { "./timer.js": "v2Ya", "./timeout.js": "iEU7", "./interval.js": "B8zX" },
        ],
        uDia: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = Math.random;
                exports.default = e;
            },
            {},
        ],
        hmOZ: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = u(require("./defaultSource.js"));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var t = (function e(u) {
                    function t(e, t) {
                        return (
                            (e = null == e ? 0 : +e),
                            (t = null == t ? 1 : +t),
                            1 === arguments.length ? ((t = e), (e = 0)) : (t -= e),
                            function () {
                                return u() * t + e;
                            }
                        );
                    }
                    return (t.source = e), t;
                })(e.default);
                exports.default = t;
            },
            { "./defaultSource.js": "uDia" },
        ],
        z6Ua: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = t(require("./defaultSource.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var r = (function e(t) {
                    function r(e, r) {
                        return (
                            arguments.length < 2 && ((r = e), (e = 0)),
                            (e = Math.floor(e)),
                            (r = Math.floor(r) - e),
                            function () {
                                return Math.floor(t() * r + e);
                            }
                        );
                    }
                    return (r.source = e), r;
                })(e.default);
                exports.default = r;
            },
            { "./defaultSource.js": "uDia" },
        ],
        pjsZ: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = u(require("./defaultSource.js"));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var r = (function e(u) {
                    function r(e, r) {
                        var t, l;
                        return (
                            (e = null == e ? 0 : +e),
                            (r = null == r ? 1 : +r),
                            function () {
                                var n;
                                if (null != t) (n = t), (t = null);
                                else
                                    do {
                                        (t = 2 * u() - 1), (n = 2 * u() - 1), (l = t * t + n * n);
                                    } while (!l || l > 1);
                                return e + r * n * Math.sqrt((-2 * Math.log(l)) / l);
                            }
                        );
                    }
                    return (r.source = e), r;
                })(e.default);
                exports.default = r;
            },
            { "./defaultSource.js": "uDia" },
        ],
        lZpB: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = t(require("./defaultSource.js")),
                    r = t(require("./normal.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var u = (function e(t) {
                    var u = r.default.source(t);
                    function o() {
                        var e = u.apply(this, arguments);
                        return function () {
                            return Math.exp(e());
                        };
                    }
                    return (o.source = e), o;
                })(e.default);
                exports.default = u;
            },
            { "./defaultSource.js": "uDia", "./normal.js": "pjsZ" },
        ],
        DMHS: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = r(require("./defaultSource.js"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var t = (function e(r) {
                    function t(e) {
                        return (e = +e) <= 0
                            ? () => 0
                            : function () {
                                  for (var t = 0, u = e; u > 1; --u) t += r();
                                  return t + u * r();
                              };
                    }
                    return (t.source = e), t;
                })(e.default);
                exports.default = t;
            },
            { "./defaultSource.js": "uDia" },
        ],
        gL6I: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = u(require("./defaultSource.js")),
                    r = u(require("./irwinHall.js"));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var t = (function e(u) {
                    var t = r.default.source(u);
                    function n(e) {
                        if (0 == (e = +e)) return u;
                        var r = t(e);
                        return function () {
                            return r() / e;
                        };
                    }
                    return (n.source = e), n;
                })(e.default);
                exports.default = t;
            },
            { "./defaultSource.js": "uDia", "./irwinHall.js": "DMHS" },
        ],
        gEmS: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = t(require("./defaultSource.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var r = (function e(t) {
                    function r(e) {
                        return function () {
                            return -Math.log1p(-t()) / e;
                        };
                    }
                    return (r.source = e), r;
                })(e.default);
                exports.default = r;
            },
            { "./defaultSource.js": "uDia" },
        ],
        qEyw: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = r(require("./defaultSource.js"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var t = (function e(r) {
                    function t(e) {
                        if ((e = +e) < 0) throw new RangeError("invalid alpha");
                        return (
                            (e = 1 / -e),
                            function () {
                                return Math.pow(1 - r(), e);
                            }
                        );
                    }
                    return (t.source = e), t;
                })(e.default);
                exports.default = t;
            },
            { "./defaultSource.js": "uDia" },
        ],
        QFQ4: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = r(require("./defaultSource.js"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var t = (function e(r) {
                    function t(e) {
                        if ((e = +e) < 0 || e > 1) throw new RangeError("invalid p");
                        return function () {
                            return Math.floor(r() + e);
                        };
                    }
                    return (t.source = e), t;
                })(e.default);
                exports.default = t;
            },
            { "./defaultSource.js": "uDia" },
        ],
        dJot: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = r(require("./defaultSource.js"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var t = (function e(r) {
                    function t(e) {
                        if ((e = +e) < 0 || e > 1) throw new RangeError("invalid p");
                        return 0 === e
                            ? () => 1 / 0
                            : 1 === e
                            ? () => 1
                            : ((e = Math.log1p(-e)),
                              function () {
                                  return 1 + Math.floor(Math.log1p(-r()) / e);
                              });
                    }
                    return (t.source = e), t;
                })(e.default);
                exports.default = t;
            },
            { "./defaultSource.js": "uDia" },
        ],
        y91O: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var r = t(require("./defaultSource.js")),
                    e = t(require("./normal.js"));
                function t(r) {
                    return r && r.__esModule ? r : { default: r };
                }
                var u = (function r(t) {
                    var u = e.default.source(t)();
                    function o(r, e) {
                        if ((r = +r) < 0) throw new RangeError("invalid k");
                        if (0 === r) return () => 0;
                        if (((e = null == e ? 1 : +e), 1 === r)) return () => -Math.log1p(-t()) * e;
                        var o = (r < 1 ? r + 1 : r) - 1 / 3,
                            a = 1 / (3 * Math.sqrt(o)),
                            n = r < 1 ? () => Math.pow(t(), 1 / r) : () => 1;
                        return function () {
                            do {
                                do {
                                    var r = u(),
                                        l = 1 + a * r;
                                } while (l <= 0);
                                l *= l * l;
                                var i = 1 - t();
                            } while (i >= 1 - 0.0331 * r * r * r * r && Math.log(i) >= 0.5 * r * r + o * (1 - l + Math.log(l)));
                            return o * l * n() * e;
                        };
                    }
                    return (o.source = r), o;
                })(r.default);
                exports.default = u;
            },
            { "./defaultSource.js": "uDia", "./normal.js": "pjsZ" },
        ],
        g3J4: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = u(require("./defaultSource.js")),
                    r = u(require("./gamma.js"));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var t = (function e(u) {
                    var t = r.default.source(u);
                    function a(e, r) {
                        var u = t(e),
                            a = t(r);
                        return function () {
                            var e = u();
                            return 0 === e ? 0 : e / (e + a());
                        };
                    }
                    return (a.source = e), a;
                })(e.default);
                exports.default = t;
            },
            { "./defaultSource.js": "uDia", "./gamma.js": "y91O" },
        ],
        BDxe: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = t(require("./defaultSource.js")),
                    r = t(require("./beta.js")),
                    u = t(require("./geometric.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var o = (function e(t) {
                    var o = u.default.source(t),
                        a = r.default.source(t);
                    function f(e, r) {
                        return (
                            (e = +e),
                            (r = +r) >= 1
                                ? () => e
                                : r <= 0
                                ? () => 0
                                : function () {
                                      for (var u = 0, t = e, f = r; t * f > 16 && t * (1 - f) > 16; ) {
                                          var n = Math.floor((t + 1) * f),
                                              s = a(n, t - n + 1)();
                                          s <= f ? ((u += n), (t -= n), (f = (f - s) / (1 - s))) : ((t = n - 1), (f /= s));
                                      }
                                      for (var c = f < 0.5, d = o(c ? f : 1 - f), i = d(), l = 0; i <= t; ++l) i += d();
                                      return u + (c ? l : t - l);
                                  }
                        );
                    }
                    return (f.source = e), f;
                })(e.default);
                exports.default = o;
            },
            { "./defaultSource.js": "uDia", "./beta.js": "g3J4", "./geometric.js": "dJot" },
        ],
        Ani0: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = t(require("./defaultSource.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var u = (function e(t) {
                    function u(e, u, r) {
                        var o;
                        return (
                            0 == (e = +e) ? (o = (e) => -Math.log(e)) : ((e = 1 / e), (o = (t) => Math.pow(t, e))),
                            (u = null == u ? 0 : +u),
                            (r = null == r ? 1 : +r),
                            function () {
                                return u + r * o(-Math.log1p(-t()));
                            }
                        );
                    }
                    return (u.source = e), u;
                })(e.default);
                exports.default = u;
            },
            { "./defaultSource.js": "uDia" },
        ],
        aFFQ: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = t(require("./defaultSource.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var u = (function e(t) {
                    function u(e, u) {
                        return (
                            (e = null == e ? 0 : +e),
                            (u = null == u ? 1 : +u),
                            function () {
                                return e + u * Math.tan(Math.PI * t());
                            }
                        );
                    }
                    return (u.source = e), u;
                })(e.default);
                exports.default = u;
            },
            { "./defaultSource.js": "uDia" },
        ],
        LFPu: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = u(require("./defaultSource.js"));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var r = (function e(u) {
                    function r(e, r) {
                        return (
                            (e = null == e ? 0 : +e),
                            (r = null == r ? 1 : +r),
                            function () {
                                var t = u();
                                return e + r * Math.log(t / (1 - t));
                            }
                        );
                    }
                    return (r.source = e), r;
                })(e.default);
                exports.default = r;
            },
            { "./defaultSource.js": "uDia" },
        ],
        C4Uu: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var e = t(require("./defaultSource.js")),
                    r = t(require("./binomial.js")),
                    u = t(require("./gamma.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var o = (function e(t) {
                    var o = u.default.source(t),
                        a = r.default.source(t);
                    function f(e) {
                        return function () {
                            for (var r = 0, u = e; u > 16; ) {
                                var f = Math.floor(0.875 * u),
                                    n = o(f)();
                                if (n > u) return r + a(f - 1, u / n)();
                                (r += f), (u -= n);
                            }
                            for (var l = -Math.log1p(-t()), i = 0; l <= u; ++i) l -= Math.log1p(-t());
                            return r + i;
                        };
                    }
                    return (f.source = e), f;
                })(e.default);
                exports.default = o;
            },
            { "./defaultSource.js": "uDia", "./binomial.js": "BDxe", "./gamma.js": "y91O" },
        ],
        WQ4D: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    Object.defineProperty(exports, "randomUniform", {
                        enumerable: !0,
                        get: function () {
                            return e.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomInt", {
                        enumerable: !0,
                        get: function () {
                            return r.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomNormal", {
                        enumerable: !0,
                        get: function () {
                            return t.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomLogNormal", {
                        enumerable: !0,
                        get: function () {
                            return n.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomBates", {
                        enumerable: !0,
                        get: function () {
                            return u.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomIrwinHall", {
                        enumerable: !0,
                        get: function () {
                            return o.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomExponential", {
                        enumerable: !0,
                        get: function () {
                            return i.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomPareto", {
                        enumerable: !0,
                        get: function () {
                            return a.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomBernoulli", {
                        enumerable: !0,
                        get: function () {
                            return l.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomGeometric", {
                        enumerable: !0,
                        get: function () {
                            return f.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomBinomial", {
                        enumerable: !0,
                        get: function () {
                            return d.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomGamma", {
                        enumerable: !0,
                        get: function () {
                            return m.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomBeta", {
                        enumerable: !0,
                        get: function () {
                            return s.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomWeibull", {
                        enumerable: !0,
                        get: function () {
                            return c.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomCauchy", {
                        enumerable: !0,
                        get: function () {
                            return b.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomLogistic", {
                        enumerable: !0,
                        get: function () {
                            return p.default;
                        },
                    }),
                    Object.defineProperty(exports, "randomPoisson", {
                        enumerable: !0,
                        get: function () {
                            return j.default;
                        },
                    });
                var e = g(require("./uniform.js")),
                    r = g(require("./int.js")),
                    t = g(require("./normal.js")),
                    n = g(require("./logNormal.js")),
                    u = g(require("./bates.js")),
                    o = g(require("./irwinHall.js")),
                    i = g(require("./exponential.js")),
                    a = g(require("./pareto.js")),
                    l = g(require("./bernoulli.js")),
                    f = g(require("./geometric.js")),
                    d = g(require("./binomial.js")),
                    m = g(require("./gamma.js")),
                    s = g(require("./beta.js")),
                    c = g(require("./weibull.js")),
                    b = g(require("./cauchy.js")),
                    p = g(require("./logistic.js")),
                    j = g(require("./poisson.js"));
                function g(e) {
                    return e && e.__esModule ? e : { default: e };
                }
            },
            {
                "./uniform.js": "hmOZ",
                "./int.js": "z6Ua",
                "./normal.js": "pjsZ",
                "./logNormal.js": "lZpB",
                "./bates.js": "gL6I",
                "./irwinHall.js": "DMHS",
                "./exponential.js": "gEmS",
                "./pareto.js": "qEyw",
                "./bernoulli.js": "QFQ4",
                "./geometric.js": "dJot",
                "./binomial.js": "BDxe",
                "./gamma.js": "y91O",
                "./beta.js": "g3J4",
                "./weibull.js": "Ani0",
                "./cauchy.js": "aFFQ",
                "./logistic.js": "LFPu",
                "./poisson.js": "C4Uu",
            },
        ],
        UzOB: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = exports.xhtml = void 0);
                var t = "http://www.w3.org/1999/xhtml";
                exports.xhtml = t;
                var w = { svg: "http://www.w3.org/2000/svg", xhtml: t, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
                exports.default = w;
            },
            {},
        ],
        OLJ5: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
                var e = r(require("./namespaces"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function t(r) {
                    var t = (r += ""),
                        s = t.indexOf(":");
                    return s >= 0 && "xmlns" !== (t = r.slice(0, s)) && (r = r.slice(s + 1)), e.default.hasOwnProperty(t) ? { space: e.default[t], local: r } : r;
                }
            },
            { "./namespaces": "UzOB" },
        ],
        EIjt: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = a);
                var e = n(require("./namespace")),
                    t = require("./namespaces");
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(e) {
                    return function () {
                        var n = this.ownerDocument,
                            r = this.namespaceURI;
                        return r === t.xhtml && n.documentElement.namespaceURI === t.xhtml ? n.createElement(e) : n.createElementNS(r, e);
                    };
                }
                function u(e) {
                    return function () {
                        return this.ownerDocument.createElementNS(e.space, e.local);
                    };
                }
                function a(t) {
                    var n = (0, e.default)(t);
                    return (n.local ? u : r)(n);
                }
            },
            { "./namespace": "OLJ5", "./namespaces": "UzOB" },
        ],
        xs2I: [
            function (require, module, exports) {
                "use strict";
                function e() {}
                function t(t) {
                    return null == t
                        ? e
                        : function () {
                              return this.querySelector(t);
                          };
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
            },
            {},
        ],
        LRy5: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = _);
                var e = require("./index"),
                    t = r(require("../selector"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function _(r) {
                    "function" != typeof r && (r = (0, t.default)(r));
                    for (var _ = this._groups, a = _.length, n = new Array(a), u = 0; u < a; ++u)
                        for (var o, i, l = _[u], d = l.length, s = (n[u] = new Array(d)), f = 0; f < d; ++f) (o = l[f]) && (i = r.call(o, o.__data__, f, l)) && ("__data__" in o && (i.__data__ = o.__data__), (s[f] = i));
                    return new e.Selection(n, this._parents);
                }
            },
            { "./index": "jpDG", "../selector": "xs2I" },
        ],
        mHY5: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    return [];
                }
                function t(t) {
                    return null == t
                        ? e
                        : function () {
                              return this.querySelectorAll(t);
                          };
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
            },
            {},
        ],
        ijGs: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
                var e = require("./index"),
                    t = r(require("../selectorAll"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(r) {
                    "function" != typeof r && (r = (0, t.default)(r));
                    for (var u = this._groups, l = u.length, n = [], o = [], s = 0; s < l; ++s) for (var a, f = u[s], i = f.length, _ = 0; _ < i; ++_) (a = f[_]) && (n.push(r.call(a, a.__data__, _, f)), o.push(a));
                    return new e.Selection(n, o);
                }
            },
            { "./index": "jpDG", "../selectorAll": "mHY5" },
        ],
        PkZe: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    return function () {
                        return this.matches(e);
                    };
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        hrVj: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = n);
                var e = require("./index"),
                    r = t(require("../matcher"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function n(t) {
                    "function" != typeof t && (t = (0, r.default)(t));
                    for (var n = this._groups, u = n.length, a = new Array(u), o = 0; o < u; ++o) for (var i, l = n[o], s = l.length, f = (a[o] = []), _ = 0; _ < s; ++_) (i = l[_]) && t.call(i, i.__data__, _, l) && f.push(i);
                    return new e.Selection(a, this._parents);
                }
            },
            { "./index": "jpDG", "../matcher": "PkZe" },
        ],
        NmjR: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    return new Array(e.length);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        wXei: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = n), (exports.EnterNode = o);
                var e = r(require("./sparse")),
                    t = require("./index");
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function n() {
                    return new t.Selection(this._enter || this._groups.map(e.default), this._parents);
                }
                function o(e, t) {
                    (this.ownerDocument = e.ownerDocument), (this.namespaceURI = e.namespaceURI), (this._next = null), (this._parent = e), (this.__data__ = t);
                }
                o.prototype = {
                    constructor: o,
                    appendChild: function (e) {
                        return this._parent.insertBefore(e, this._next);
                    },
                    insertBefore: function (e, t) {
                        return this._parent.insertBefore(e, t);
                    },
                    querySelector: function (e) {
                        return this._parent.querySelector(e);
                    },
                    querySelectorAll: function (e) {
                        return this._parent.querySelectorAll(e);
                    },
                };
            },
            { "./sparse": "NmjR", "./index": "jpDG" },
        ],
        QmPF: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = l);
                var e = require("./index"),
                    r = require("./enter"),
                    n = t(require("../constant"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var a = "$";
                function o(e, n, t, a, o, _) {
                    for (var l, i = 0, u = n.length, f = _.length; i < f; ++i) (l = n[i]) ? ((l.__data__ = _[i]), (a[i] = l)) : (t[i] = new r.EnterNode(e, _[i]));
                    for (; i < u; ++i) (l = n[i]) && (o[i] = l);
                }
                function _(e, n, t, o, _, l, i) {
                    var u,
                        f,
                        c,
                        s = {},
                        d = n.length,
                        h = l.length,
                        w = new Array(d);
                    for (u = 0; u < d; ++u) (f = n[u]) && ((w[u] = c = a + i.call(f, f.__data__, u, n)), c in s ? (_[u] = f) : (s[c] = f));
                    for (u = 0; u < h; ++u) (f = s[(c = a + i.call(e, l[u], u, l))]) ? ((o[u] = f), (f.__data__ = l[u]), (s[c] = null)) : (t[u] = new r.EnterNode(e, l[u]));
                    for (u = 0; u < d; ++u) (f = n[u]) && s[w[u]] === f && (_[u] = f);
                }
                function l(r, t) {
                    if (!r)
                        return (
                            (v = new Array(this.size())),
                            (d = -1),
                            this.each(function (e) {
                                v[++d] = e;
                            }),
                            v
                        );
                    var a = t ? _ : o,
                        l = this._parents,
                        i = this._groups;
                    "function" != typeof r && (r = (0, n.default)(r));
                    for (var u = i.length, f = new Array(u), c = new Array(u), s = new Array(u), d = 0; d < u; ++d) {
                        var h = l[d],
                            w = i[d],
                            y = w.length,
                            v = r.call(h, h && h.__data__, d, l),
                            g = v.length,
                            A = (c[d] = new Array(g)),
                            p = (f[d] = new Array(g));
                        a(h, w, A, p, (s[d] = new Array(y)), v, t);
                        for (var x, q, E = 0, M = 0; E < g; ++E)
                            if ((x = A[E])) {
                                for (E >= M && (M = E + 1); !(q = p[M]) && ++M < g; );
                                x._next = q || null;
                            }
                    }
                    return ((f = new e.Selection(f, l))._enter = c), (f._exit = s), f;
                }
            },
            { "./index": "jpDG", "./enter": "wXei", "../constant": "YtnT" },
        ],
        tchs: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
                var e = r(require("./sparse")),
                    t = require("./index");
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u() {
                    return new t.Selection(this._exit || this._groups.map(e.default), this._parents);
                }
            },
            { "./sparse": "NmjR", "./index": "jpDG" },
        ],
        oO6z: [
            function (require, module, exports) {
                "use strict";
                function e(e, t, r) {
                    var n = this.enter(),
                        o = this,
                        u = this.exit();
                    return (n = "function" == typeof e ? e(n) : n.append(e + "")), null != t && (o = t(o)), null == r ? u.remove() : r(u), n && o ? n.merge(o).order() : o;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        i5nV: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = require("./index");
                function r(r) {
                    for (var t = this._groups, n = r._groups, o = t.length, s = n.length, a = Math.min(o, s), i = new Array(o), u = 0; u < a; ++u)
                        for (var l, f = t[u], h = n[u], p = f.length, g = (i[u] = new Array(p)), _ = 0; _ < p; ++_) (l = f[_] || h[_]) && (g[_] = l);
                    for (; u < o; ++u) i[u] = t[u];
                    return new e.Selection(i, this._parents);
                }
            },
            { "./index": "jpDG" },
        ],
        RepQ: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    for (var e = this._groups, t = -1, r = e.length; ++t < r; ) for (var o, n = e[t], s = n.length - 1, i = n[s]; --s >= 0; ) (o = n[s]) && (i && 4 ^ o.compareDocumentPosition(i) && i.parentNode.insertBefore(o, i), (i = o));
                    return this;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        D8yW: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
                var r = require("./index");
                function e(e) {
                    function n(r, t) {
                        return r && t ? e(r.__data__, t.__data__) : !r - !t;
                    }
                    e || (e = t);
                    for (var a = this._groups, o = a.length, u = new Array(o), _ = 0; _ < o; ++_) {
                        for (var i, s = a[_], d = s.length, f = (u[_] = new Array(d)), c = 0; c < d; ++c) (i = s[c]) && (f[c] = i);
                        f.sort(n);
                    }
                    return new r.Selection(u, this._parents).order();
                }
                function t(r, e) {
                    return r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
                }
            },
            { "./index": "jpDG" },
        ],
        pbQ4: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    var e = arguments[0];
                    return (arguments[0] = this), e.apply(null, arguments), this;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        kO0T: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    var e = new Array(this.size()),
                        t = -1;
                    return (
                        this.each(function () {
                            e[++t] = this;
                        }),
                        e
                    );
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        xFUP: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    for (var e = this._groups, r = 0, t = e.length; r < t; ++r)
                        for (var u = e[r], n = 0, o = u.length; n < o; ++n) {
                            var l = u[n];
                            if (l) return l;
                        }
                    return null;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        w9fp: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    var e = 0;
                    return (
                        this.each(function () {
                            ++e;
                        }),
                        e
                    );
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        UFOA: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    return !this.node();
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        q4XW: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    for (var t = this._groups, r = 0, o = t.length; r < o; ++r) for (var s, a = t[r], l = 0, u = a.length; l < u; ++l) (s = a[l]) && e.call(s, s.__data__, l, a);
                    return this;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        Tdf9: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = l);
                var t = e(require("../namespace"));
                function e(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function n(t) {
                    return function () {
                        this.removeAttribute(t);
                    };
                }
                function u(t) {
                    return function () {
                        this.removeAttributeNS(t.space, t.local);
                    };
                }
                function r(t, e) {
                    return function () {
                        this.setAttribute(t, e);
                    };
                }
                function i(t, e) {
                    return function () {
                        this.setAttributeNS(t.space, t.local, e);
                    };
                }
                function o(t, e) {
                    return function () {
                        var n = e.apply(this, arguments);
                        null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
                    };
                }
                function c(t, e) {
                    return function () {
                        var n = e.apply(this, arguments);
                        null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
                    };
                }
                function l(e, l) {
                    var a = (0, t.default)(e);
                    if (arguments.length < 2) {
                        var s = this.node();
                        return a.local ? s.getAttributeNS(a.space, a.local) : s.getAttribute(a);
                    }
                    return this.each((null == l ? (a.local ? u : n) : "function" == typeof l ? (a.local ? c : o) : a.local ? i : r)(a, l));
                }
            },
            { "../namespace": "OLJ5" },
        ],
        D1dR: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        VXjm: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = o), (exports.styleValue = l);
                var e = t(require("../window"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(e) {
                    return function () {
                        this.style.removeProperty(e);
                    };
                }
                function n(e, t, r) {
                    return function () {
                        this.style.setProperty(e, t, r);
                    };
                }
                function u(e, t, r) {
                    return function () {
                        var n = t.apply(this, arguments);
                        null == n ? this.style.removeProperty(e) : this.style.setProperty(e, n, r);
                    };
                }
                function o(e, t, o) {
                    return arguments.length > 1 ? this.each((null == t ? r : "function" == typeof t ? u : n)(e, t, null == o ? "" : o)) : l(this.node(), e);
                }
                function l(t, r) {
                    return t.style.getPropertyValue(r) || (0, e.default)(t).getComputedStyle(t, null).getPropertyValue(r);
                }
            },
            { "../window": "D1dR" },
        ],
        QOWh: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    return function () {
                        delete this[t];
                    };
                }
                function e(t, e) {
                    return function () {
                        this[t] = e;
                    };
                }
                function n(t, e) {
                    return function () {
                        var n = e.apply(this, arguments);
                        null == n ? delete this[t] : (this[t] = n);
                    };
                }
                function u(u, i) {
                    return arguments.length > 1 ? this.each((null == i ? t : "function" == typeof i ? n : e)(u, i)) : this.node()[u];
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
            },
            {},
        ],
        rtNW: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    return t.trim().split(/^|\s+/);
                }
                function n(t) {
                    return t.classList || new e(t);
                }
                function e(n) {
                    (this._node = n), (this._names = t(n.getAttribute("class") || ""));
                }
                function i(t, e) {
                    for (var i = n(t), s = -1, r = e.length; ++s < r; ) i.add(e[s]);
                }
                function s(t, e) {
                    for (var i = n(t), s = -1, r = e.length; ++s < r; ) i.remove(e[s]);
                }
                function r(t) {
                    return function () {
                        i(this, t);
                    };
                }
                function o(t) {
                    return function () {
                        s(this, t);
                    };
                }
                function u(t, n) {
                    return function () {
                        (n.apply(this, arguments) ? i : s)(this, t);
                    };
                }
                function f(e, i) {
                    var s = t(e + "");
                    if (arguments.length < 2) {
                        for (var f = n(this.node()), c = -1, a = s.length; ++c < a; ) if (!f.contains(s[c])) return !1;
                        return !0;
                    }
                    return this.each(("function" == typeof i ? u : i ? r : o)(s, i));
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.default = f),
                    (e.prototype = {
                        add: function (t) {
                            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
                        },
                        remove: function (t) {
                            var n = this._names.indexOf(t);
                            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
                        },
                        contains: function (t) {
                            return this._names.indexOf(t) >= 0;
                        },
                    });
            },
            {},
        ],
        hAJ3: [
            function (require, module, exports) {
                "use strict";
                function t() {
                    this.textContent = "";
                }
                function n(t) {
                    return function () {
                        this.textContent = t;
                    };
                }
                function e(t) {
                    return function () {
                        var n = t.apply(this, arguments);
                        this.textContent = null == n ? "" : n;
                    };
                }
                function o(o) {
                    return arguments.length ? this.each(null == o ? t : ("function" == typeof o ? e : n)(o)) : this.node().textContent;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = o);
            },
            {},
        ],
        FiSM: [
            function (require, module, exports) {
                "use strict";
                function n() {
                    this.innerHTML = "";
                }
                function t(n) {
                    return function () {
                        this.innerHTML = n;
                    };
                }
                function e(n) {
                    return function () {
                        var t = n.apply(this, arguments);
                        this.innerHTML = null == t ? "" : t;
                    };
                }
                function i(i) {
                    return arguments.length ? this.each(null == i ? n : ("function" == typeof i ? e : t)(i)) : this.node().innerHTML;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = i);
            },
            {},
        ],
        gvi7: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    this.nextSibling && this.parentNode.appendChild(this);
                }
                function t() {
                    return this.each(e);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
            },
            {},
        ],
        gv51: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
                }
                function t() {
                    return this.each(e);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
            },
            {},
        ],
        efv1: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = t(require("../creator"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(t) {
                    var r = "function" == typeof t ? t : (0, e.default)(t);
                    return this.select(function () {
                        return this.appendChild(r.apply(this, arguments));
                    });
                }
            },
            { "../creator": "EIjt" },
        ],
        ILQF: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = n);
                var e = r(require("../creator")),
                    t = r(require("../selector"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u() {
                    return null;
                }
                function n(r, n) {
                    var l = "function" == typeof r ? r : (0, e.default)(r),
                        o = null == n ? u : "function" == typeof n ? n : (0, t.default)(n);
                    return this.select(function () {
                        return this.insertBefore(l.apply(this, arguments), o.apply(this, arguments) || null);
                    });
                }
            },
            { "../creator": "EIjt", "../selector": "xs2I" },
        ],
        quBB: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    var e = this.parentNode;
                    e && e.removeChild(this);
                }
                function t() {
                    return this.each(e);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
            },
            {},
        ],
        UpcG: [
            function (require, module, exports) {
                "use strict";
                function e() {
                    var e = this.cloneNode(!1),
                        t = this.parentNode;
                    return t ? t.insertBefore(e, this.nextSibling) : e;
                }
                function t() {
                    var e = this.cloneNode(!0),
                        t = this.parentNode;
                    return t ? t.insertBefore(e, this.nextSibling) : e;
                }
                function n(n) {
                    return this.select(n ? t : e);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = n);
            },
            {},
        ],
        fuQ8: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    return arguments.length ? this.property("__data__", e) : this.node().__data__;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        j4rF: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = a), (exports.customEvent = p), (exports.event = void 0);
                var e = {},
                    t = null;
                if (((exports.event = t), "undefined" != typeof document)) {
                    var n = document.documentElement;
                    "onmouseenter" in n || (e = { mouseenter: "mouseover", mouseleave: "mouseout" });
                }
                function r(e, t, n) {
                    return (
                        (e = i(e, t, n)),
                        function (t) {
                            var n = t.relatedTarget;
                            (n && (n === this || 8 & n.compareDocumentPosition(this))) || e.call(this, t);
                        }
                    );
                }
                function i(e, n, r) {
                    return function (i) {
                        var o = t;
                        exports.event = t = i;
                        try {
                            e.call(this, this.__data__, n, r);
                        } finally {
                            exports.event = t = o;
                        }
                    };
                }
                function o(e) {
                    return e
                        .trim()
                        .split(/^|\s+/)
                        .map(function (e) {
                            var t = "",
                                n = e.indexOf(".");
                            return n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))), { type: e, name: t };
                        });
                }
                function s(e) {
                    return function () {
                        var t = this.__on;
                        if (t) {
                            for (var n, r = 0, i = -1, o = t.length; r < o; ++r) (n = t[r]), (e.type && n.type !== e.type) || n.name !== e.name ? (t[++i] = n) : this.removeEventListener(n.type, n.listener, n.capture);
                            ++i ? (t.length = i) : delete this.__on;
                        }
                    };
                }
                function u(t, n, o) {
                    var s = e.hasOwnProperty(t.type) ? r : i;
                    return function (e, r, i) {
                        var u,
                            a = this.__on,
                            p = s(n, r, i);
                        if (a)
                            for (var l = 0, v = a.length; l < v; ++l)
                                if ((u = a[l]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, (u.listener = p), (u.capture = o)), void (u.value = n);
                        this.addEventListener(t.type, p, o), (u = { type: t.type, name: t.name, value: n, listener: p, capture: o }), a ? a.push(u) : (this.__on = [u]);
                    };
                }
                function a(e, t, n) {
                    var r,
                        i,
                        a = o(e + ""),
                        p = a.length;
                    if (!(arguments.length < 2)) {
                        for (l = t ? u : s, null == n && (n = !1), r = 0; r < p; ++r) this.each(l(a[r], t, n));
                        return this;
                    }
                    var l = this.node().__on;
                    if (l) for (var v, f = 0, c = l.length; f < c; ++f) for (r = 0, v = l[f]; r < p; ++r) if ((i = a[r]).type === v.type && i.name === v.name) return v.value;
                }
                function p(e, n, r, i) {
                    var o = t;
                    (e.sourceEvent = t), (exports.event = t = e);
                    try {
                        return n.apply(r, i);
                    } finally {
                        exports.event = t = o;
                    }
                }
            },
            {},
        ],
        enVu: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var t = e(require("../window"));
                function e(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function n(e, n, u) {
                    var i = (0, t.default)(e),
                        r = i.CustomEvent;
                    "function" == typeof r ? (r = new r(n, u)) : ((r = i.document.createEvent("Event")), u ? (r.initEvent(n, u.bubbles, u.cancelable), (r.detail = u.detail)) : r.initEvent(n, !1, !1)), e.dispatchEvent(r);
                }
                function u(t, e) {
                    return function () {
                        return n(this, t, e);
                    };
                }
                function i(t, e) {
                    return function () {
                        return n(this, t, e.apply(this, arguments));
                    };
                }
                function r(t, e) {
                    return this.each(("function" == typeof e ? i : u)(t, e));
                }
            },
            { "../window": "D1dR" },
        ],
        jpDG: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Selection = B), (exports.default = exports.root = void 0);
                var e = S(require("./select")),
                    r = S(require("./selectAll")),
                    t = S(require("./filter")),
                    u = S(require("./data")),
                    l = S(require("./enter")),
                    a = S(require("./exit")),
                    d = S(require("./join")),
                    i = S(require("./merge")),
                    o = S(require("./order")),
                    f = S(require("./sort")),
                    s = S(require("./call")),
                    n = S(require("./nodes")),
                    q = S(require("./node")),
                    p = S(require("./size")),
                    c = S(require("./empty")),
                    m = S(require("./each")),
                    x = S(require("./attr")),
                    y = S(require("./style")),
                    h = S(require("./property")),
                    v = S(require("./classed")),
                    _ = S(require("./text")),
                    g = S(require("./html")),
                    j = S(require("./raise")),
                    w = S(require("./lower")),
                    z = S(require("./append")),
                    A = S(require("./insert")),
                    M = S(require("./remove")),
                    b = S(require("./clone")),
                    E = S(require("./datum")),
                    O = S(require("./on")),
                    P = S(require("./dispatch"));
                function S(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var k = [null];
                function B(e, r) {
                    (this._groups = e), (this._parents = r);
                }
                function C() {
                    return new B([[document.documentElement]], k);
                }
                (exports.root = k),
                    (B.prototype = C.prototype = {
                        constructor: B,
                        select: e.default,
                        selectAll: r.default,
                        filter: t.default,
                        data: u.default,
                        enter: l.default,
                        exit: a.default,
                        join: d.default,
                        merge: i.default,
                        order: o.default,
                        sort: f.default,
                        call: s.default,
                        nodes: n.default,
                        node: q.default,
                        size: p.default,
                        empty: c.default,
                        each: m.default,
                        attr: x.default,
                        style: y.default,
                        property: h.default,
                        classed: v.default,
                        text: _.default,
                        html: g.default,
                        raise: j.default,
                        lower: w.default,
                        append: z.default,
                        insert: A.default,
                        remove: M.default,
                        clone: b.default,
                        datum: E.default,
                        on: O.default,
                        dispatch: P.default,
                    });
                var D = C;
                exports.default = D;
            },
            {
                "./select": "LRy5",
                "./selectAll": "ijGs",
                "./filter": "hrVj",
                "./data": "QmPF",
                "./enter": "wXei",
                "./exit": "tchs",
                "./join": "oO6z",
                "./merge": "i5nV",
                "./order": "RepQ",
                "./sort": "D8yW",
                "./call": "pbQ4",
                "./nodes": "kO0T",
                "./node": "xFUP",
                "./size": "w9fp",
                "./empty": "UFOA",
                "./each": "q4XW",
                "./attr": "Tdf9",
                "./style": "VXjm",
                "./property": "QOWh",
                "./classed": "rtNW",
                "./text": "hAJ3",
                "./html": "FiSM",
                "./raise": "gvi7",
                "./lower": "gv51",
                "./append": "efv1",
                "./insert": "ILQF",
                "./remove": "quBB",
                "./clone": "UpcG",
                "./datum": "fuQ8",
                "./on": "j4rF",
                "./dispatch": "enVu",
            },
        ],
        iTOx: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
                var e = require("./selection/index");
                function t(t) {
                    return "string" == typeof t ? new e.Selection([[document.querySelector(t)]], [document.documentElement]) : new e.Selection([[t]], e.root);
                }
            },
            { "./selection/index": "jpDG" },
        ],
        tmZM: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
                var e = r(require("./creator")),
                    t = r(require("./select"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(r) {
                    return (0, t.default)((0, e.default)(r).call(document.documentElement));
                }
            },
            { "./creator": "EIjt", "./select": "iTOx" },
        ],
        JuPP: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
                var t = 0;
                function e() {
                    return new r();
                }
                function r() {
                    this._ = "@" + (++t).toString(36);
                }
                r.prototype = e.prototype = {
                    constructor: r,
                    get: function (t) {
                        for (var e = this._; !(e in t); ) if (!(t = t.parentNode)) return;
                        return t[e];
                    },
                    set: function (t, e) {
                        return (t[this._] = e);
                    },
                    remove: function (t) {
                        return this._ in t && delete t[this._];
                    },
                    toString: function () {
                        return this._;
                    },
                };
            },
            {},
        ],
        mu9P: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = require("./selection/on");
                function r() {
                    for (var r, t = e.event; (r = t.sourceEvent); ) t = r;
                    return t;
                }
            },
            { "./selection/on": "j4rF" },
        ],
        ZIl1: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    var n = e.ownerSVGElement || e;
                    if (n.createSVGPoint) {
                        var r = n.createSVGPoint();
                        return (r.x = t.clientX), (r.y = t.clientY), [(r = r.matrixTransform(e.getScreenCTM().inverse())).x, r.y];
                    }
                    var i = e.getBoundingClientRect();
                    return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        lbxf: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
                var e = r(require("./sourceEvent")),
                    u = r(require("./point"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function t(r) {
                    var t = (0, e.default)();
                    return t.changedTouches && (t = t.changedTouches[0]), (0, u.default)(r, t);
                }
            },
            { "./sourceEvent": "mu9P", "./point": "ZIl1" },
        ],
        toE0: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
                var e = require("./selection/index");
                function t(t) {
                    return "string" == typeof t ? new e.Selection([document.querySelectorAll(t)], [document.documentElement]) : new e.Selection([null == t ? [] : t], e.root);
                }
            },
            { "./selection/index": "jpDG" },
        ],
        Mh7G: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
                var e = t(require("./sourceEvent")),
                    r = t(require("./point"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(t, u, n) {
                    arguments.length < 3 && ((n = u), (u = (0, e.default)().changedTouches));
                    for (var i, l = 0, o = u ? u.length : 0; l < o; ++l) if ((i = u[l]).identifier === n) return (0, r.default)(t, i);
                    return null;
                }
            },
            { "./sourceEvent": "mu9P", "./point": "ZIl1" },
        ],
        RG1U: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
                var e = t(require("./sourceEvent")),
                    r = t(require("./point"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(t, u) {
                    null == u && (u = (0, e.default)().touches);
                    for (var n = 0, o = u ? u.length : 0, l = new Array(o); n < o; ++n) l[n] = (0, r.default)(t, u[n]);
                    return l;
                }
            },
            { "./sourceEvent": "mu9P", "./point": "ZIl1" },
        ],
        lm1C: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    Object.defineProperty(exports, "create", {
                        enumerable: !0,
                        get: function () {
                            return e.default;
                        },
                    }),
                    Object.defineProperty(exports, "creator", {
                        enumerable: !0,
                        get: function () {
                            return t.default;
                        },
                    }),
                    Object.defineProperty(exports, "local", {
                        enumerable: !0,
                        get: function () {
                            return r.default;
                        },
                    }),
                    Object.defineProperty(exports, "matcher", {
                        enumerable: !0,
                        get: function () {
                            return n.default;
                        },
                    }),
                    Object.defineProperty(exports, "mouse", {
                        enumerable: !0,
                        get: function () {
                            return u.default;
                        },
                    }),
                    Object.defineProperty(exports, "namespace", {
                        enumerable: !0,
                        get: function () {
                            return o.default;
                        },
                    }),
                    Object.defineProperty(exports, "namespaces", {
                        enumerable: !0,
                        get: function () {
                            return c.default;
                        },
                    }),
                    Object.defineProperty(exports, "clientPoint", {
                        enumerable: !0,
                        get: function () {
                            return i.default;
                        },
                    }),
                    Object.defineProperty(exports, "select", {
                        enumerable: !0,
                        get: function () {
                            return l.default;
                        },
                    }),
                    Object.defineProperty(exports, "selectAll", {
                        enumerable: !0,
                        get: function () {
                            return f.default;
                        },
                    }),
                    Object.defineProperty(exports, "selection", {
                        enumerable: !0,
                        get: function () {
                            return a.default;
                        },
                    }),
                    Object.defineProperty(exports, "selector", {
                        enumerable: !0,
                        get: function () {
                            return s.default;
                        },
                    }),
                    Object.defineProperty(exports, "selectorAll", {
                        enumerable: !0,
                        get: function () {
                            return p.default;
                        },
                    }),
                    Object.defineProperty(exports, "style", {
                        enumerable: !0,
                        get: function () {
                            return d.styleValue;
                        },
                    }),
                    Object.defineProperty(exports, "touch", {
                        enumerable: !0,
                        get: function () {
                            return b.default;
                        },
                    }),
                    Object.defineProperty(exports, "touches", {
                        enumerable: !0,
                        get: function () {
                            return m.default;
                        },
                    }),
                    Object.defineProperty(exports, "window", {
                        enumerable: !0,
                        get: function () {
                            return y.default;
                        },
                    }),
                    Object.defineProperty(exports, "event", {
                        enumerable: !0,
                        get: function () {
                            return x.event;
                        },
                    }),
                    Object.defineProperty(exports, "customEvent", {
                        enumerable: !0,
                        get: function () {
                            return x.customEvent;
                        },
                    });
                var e = P(require("./create")),
                    t = P(require("./creator")),
                    r = P(require("./local")),
                    n = P(require("./matcher")),
                    u = P(require("./mouse")),
                    o = P(require("./namespace")),
                    c = P(require("./namespaces")),
                    i = P(require("./point")),
                    l = P(require("./select")),
                    f = P(require("./selectAll")),
                    a = P(require("./selection/index")),
                    s = P(require("./selector")),
                    p = P(require("./selectorAll")),
                    d = require("./selection/style"),
                    b = P(require("./touch")),
                    m = P(require("./touches")),
                    y = P(require("./window")),
                    x = require("./selection/on");
                function P(e) {
                    return e && e.__esModule ? e : { default: e };
                }
            },
            {
                "./create": "tmZM",
                "./creator": "EIjt",
                "./local": "JuPP",
                "./matcher": "PkZe",
                "./mouse": "lbxf",
                "./namespace": "OLJ5",
                "./namespaces": "UzOB",
                "./point": "ZIl1",
                "./select": "iTOx",
                "./selectAll": "toE0",
                "./selection/index": "jpDG",
                "./selector": "xs2I",
                "./selectorAll": "mHY5",
                "./selection/style": "VXjm",
                "./touch": "Mh7G",
                "./touches": "RG1U",
                "./window": "D1dR",
                "./selection/on": "j4rF",
            },
        ],
        A6FA: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        raOJ: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
                var e = n(require("./ascending.js"));
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function t(e) {
                    return (
                        1 === e.length && (e = r(e)),
                        {
                            left: function (n, t, r, u) {
                                for (null == r && (r = 0), null == u && (u = n.length); r < u; ) {
                                    var l = (r + u) >>> 1;
                                    e(n[l], t) < 0 ? (r = l + 1) : (u = l);
                                }
                                return r;
                            },
                            right: function (n, t, r, u) {
                                for (null == r && (r = 0), null == u && (u = n.length); r < u; ) {
                                    var l = (r + u) >>> 1;
                                    e(n[l], t) > 0 ? (u = l) : (r = l + 1);
                                }
                                return r;
                            },
                        }
                    );
                }
                function r(n) {
                    return function (t, r) {
                        return (0, e.default)(n(t), r);
                    };
                }
            },
            { "./ascending.js": "A6FA" },
        ],
        VXHZ: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = exports.bisectLeft = exports.bisectRight = void 0);
                var e = r(require("./ascending.js")),
                    t = r(require("./bisector.js"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var s = (0, t.default)(e.default),
                    i = s.right;
                exports.bisectRight = i;
                var o = s.left;
                exports.bisectLeft = o;
                var u = i;
                exports.default = u;
            },
            { "./ascending.js": "A6FA", "./bisector.js": "raOJ" },
        ],
        nH3P: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    let l = 0;
                    if (void 0 === t) for (let o of e) null != o && (o = +o) >= o && ++l;
                    else {
                        let o = -1;
                        for (let r of e) null != (r = t(r, ++o, e)) && (r = +r) >= r && ++l;
                    }
                    return l;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        JGhM: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    return 0 | t.length;
                }
                function e(t) {
                    return !(t > 0);
                }
                function n(t) {
                    return "object" != typeof t || "length" in t ? t : Array.from(t);
                }
                function r(t) {
                    return (e) => t(...e);
                }
                function o(...o) {
                    const u = "function" == typeof o[o.length - 1] && r(o.pop()),
                        f = (o = o.map(n)).map(t),
                        i = o.length - 1,
                        p = new Array(i + 1).fill(0),
                        c = [];
                    if (i < 0 || f.some(e)) return c;
                    for (;;) {
                        c.push(p.map((t, e) => o[e][t]));
                        let t = i;
                        for (; ++p[t] === f[t]; ) {
                            if (0 === t) return u ? c.map(u) : c;
                            p[t--] = 0;
                        }
                    }
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = o);
            },
            {},
        ],
        ReCz: [
            function (require, module, exports) {
                "use strict";
                function e(e, r) {
                    var t = 0,
                        o = 0;
                    return Float64Array.from(e, void 0 === r ? (e) => (t += +e || 0) : (u) => (t += +r(u, o++, e) || 0));
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        wjXp: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        IBjk: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    let l,
                        o = 0,
                        f = 0,
                        r = 0;
                    if (void 0 === t) for (let u of e) null != u && (u = +u) >= u && (r += (l = u - f) * (u - (f += l / ++o)));
                    else {
                        let u = -1;
                        for (let i of e) null != (i = t(i, ++u, e)) && (i = +i) >= i && (r += (l = i - f) * (i - (f += l / ++o)));
                    }
                    if (o > 1) return r / (o - 1);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        JPBu: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = t(require("./variance.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(t, r) {
                    const u = (0, e.default)(t, r);
                    return u ? Math.sqrt(u) : u;
                }
            },
            { "./variance.js": "IBjk" },
        ],
        tlMU: [
            function (require, module, exports) {
                "use strict";
                function e(e, o) {
                    let t, l;
                    if (void 0 === o) for (const r of e) null != r && (void 0 === t ? r >= r && (t = l = r) : (t > r && (t = r), l < r && (l = r)));
                    else {
                        let r = -1;
                        for (let f of e) null != (f = o(f, ++r, e)) && (void 0 === t ? f >= f && (t = l = f) : (t > f && (t = f), l < f && (l = f)));
                    }
                    return [t, l];
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        nPOL: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    return e;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        Q7X8: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r), (exports.groups = n), (exports.rollup = u), (exports.rollups = o);
                var t = e(require("./identity.js"));
                function e(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function r(e, ...r) {
                    return f(e, t.default, t.default, r);
                }
                function n(e, ...r) {
                    return f(e, Array.from, t.default, r);
                }
                function u(e, r, ...n) {
                    return f(e, t.default, r, n);
                }
                function o(t, e, ...r) {
                    return f(t, Array.from, e, r);
                }
                function f(t, e, r, n) {
                    return (function t(u, o) {
                        if (o >= n.length) return r(u);
                        const f = new Map(),
                            s = n[o++];
                        let l = -1;
                        for (const e of u) {
                            const t = s(e, ++l, u),
                                r = f.get(t);
                            r ? r.push(e) : f.set(t, [e]);
                        }
                        for (const [e, r] of f) f.set(e, t(r, o));
                        return e(f);
                    })(t, 0);
                }
            },
            { "./identity.js": "nPOL" },
        ],
        OA0j: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.map = exports.slice = void 0);
                var e = Array.prototype,
                    r = e.slice;
                exports.slice = r;
                var p = e.map;
                exports.map = p;
            },
            {},
        ],
        M46h: [
            function (require, module, exports) {
                "use strict";
                function e(e, t, r) {
                    (e = +e), (t = +t), (r = (n = arguments.length) < 2 ? ((t = e), (e = 0), 1) : n < 3 ? 1 : +r);
                    for (var a = -1, n = 0 | Math.max(0, Math.ceil((t - e) / r)), o = new Array(n); ++a < n; ) o[a] = e + a * r;
                    return o;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        nJNY: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e), (exports.tickIncrement = o), (exports.tickStep = M);
                var t = Math.sqrt(50),
                    r = Math.sqrt(10),
                    a = Math.sqrt(2);
                function e(t, r, a) {
                    var e,
                        M,
                        h,
                        i,
                        n = -1;
                    if (((a = +a), (t = +t) === (r = +r) && a > 0)) return [t];
                    if (((e = r < t) && ((M = t), (t = r), (r = M)), 0 === (i = o(t, r, a)) || !isFinite(i))) return [];
                    if (i > 0) for (t = Math.ceil(t / i), r = Math.floor(r / i), h = new Array((M = Math.ceil(r - t + 1))); ++n < M; ) h[n] = (t + n) * i;
                    else for (t = Math.floor(t * i), r = Math.ceil(r * i), h = new Array((M = Math.ceil(t - r + 1))); ++n < M; ) h[n] = (t - n) / i;
                    return e && h.reverse(), h;
                }
                function o(e, o, M) {
                    var h = (o - e) / Math.max(0, M),
                        i = Math.floor(Math.log(h) / Math.LN10),
                        n = h / Math.pow(10, i);
                    return i >= 0 ? (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1);
                }
                function M(e, o, M) {
                    var h = Math.abs(o - e) / Math.max(0, M),
                        i = Math.pow(10, Math.floor(Math.log(h) / Math.LN10)),
                        n = h / i;
                    return n >= t ? (i *= 10) : n >= r ? (i *= 5) : n >= a && (i *= 2), o < e ? -i : i;
                }
            },
            {},
        ],
        PgUT: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
                var e = t(require("../count.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(t) {
                    return Math.ceil(Math.log((0, e.default)(t)) / Math.LN2) + 1;
                }
            },
            { "../count.js": "nH3P" },
        ],
        oEJX: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = s);
                var r = require("./array.js"),
                    e = o(require("./bisect.js")),
                    t = o(require("./constant.js")),
                    u = o(require("./extent.js")),
                    n = o(require("./identity.js")),
                    a = o(require("./range.js")),
                    f = require("./ticks.js"),
                    i = o(require("./threshold/sturges.js"));
                function o(r) {
                    return r && r.__esModule ? r : { default: r };
                }
                function s() {
                    var o = n.default,
                        s = u.default,
                        l = i.default;
                    function c(r) {
                        Array.isArray(r) || (r = Array.from(r));
                        var t,
                            u,
                            n = r.length,
                            i = new Array(n);
                        for (t = 0; t < n; ++t) i[t] = o(r[t], t, r);
                        var c = s(i),
                            d = c[0],
                            y = c[1],
                            h = l(i, d, y);
                        Array.isArray(h) || ((h = (0, f.tickStep)(d, y, h)), (h = (0, a.default)(Math.ceil(d / h) * h, y, h)));
                        for (var p = h.length; h[0] <= d; ) h.shift(), --p;
                        for (; h[p - 1] > y; ) h.pop(), --p;
                        var j,
                            A = new Array(p + 1);
                        for (t = 0; t <= p; ++t) ((j = A[t] = []).x0 = t > 0 ? h[t - 1] : d), (j.x1 = t < p ? h[t] : y);
                        for (t = 0; t < n; ++t) d <= (u = i[t]) && u <= y && A[(0, e.default)(h, u, 0, p)].push(r[t]);
                        return A;
                    }
                    return (
                        (c.value = function (r) {
                            return arguments.length ? ((o = "function" == typeof r ? r : (0, t.default)(r)), c) : o;
                        }),
                        (c.domain = function (r) {
                            return arguments.length ? ((s = "function" == typeof r ? r : (0, t.default)([r[0], r[1]])), c) : s;
                        }),
                        (c.thresholds = function (e) {
                            return arguments.length ? ((l = "function" == typeof e ? e : Array.isArray(e) ? (0, t.default)(r.slice.call(e)) : (0, t.default)(e)), c) : l;
                        }),
                        c
                    );
                }
            },
            { "./array.js": "OA0j", "./bisect.js": "VXHZ", "./constant.js": "YtnT", "./extent.js": "tlMU", "./identity.js": "nPOL", "./range.js": "M46h", "./ticks.js": "nJNY", "./threshold/sturges.js": "PgUT" },
        ],
        Raoi: [
            function (require, module, exports) {
                "use strict";
                function e(e, o) {
                    let t;
                    if (void 0 === o) for (const l of e) null != l && (t < l || (void 0 === t && l >= l)) && (t = l);
                    else {
                        let l = -1;
                        for (let r of e) null != (r = o(r, ++l, e)) && (t < r || (void 0 === t && r >= r)) && (t = r);
                    }
                    return t;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        WLfU: [
            function (require, module, exports) {
                "use strict";
                function e(e, o) {
                    let t;
                    if (void 0 === o) for (const l of e) null != l && (t > l || (void 0 === t && l >= l)) && (t = l);
                    else {
                        let l = -1;
                        for (let r of e) null != (r = o(r, ++l, e)) && (t > r || (void 0 === t && r >= r)) && (t = r);
                    }
                    return t;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        Dxtw: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = o);
                var t = e(require("./ascending.js"));
                function e(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function o(e, n, a = 0, f = e.length - 1, u = t.default) {
                    for (; f > a; ) {
                        if (f - a > 600) {
                            const t = f - a + 1,
                                r = n - a + 1,
                                s = Math.log(t),
                                l = 0.5 * Math.exp((2 * s) / 3),
                                c = 0.5 * Math.sqrt((s * l * (t - l)) / t) * (r - t / 2 < 0 ? -1 : 1);
                            o(e, n, Math.max(a, Math.floor(n - (r * l) / t + c)), Math.min(f, Math.floor(n + ((t - r) * l) / t + c)), u);
                        }
                        const t = e[n];
                        let s = a,
                            l = f;
                        for (r(e, a, n), u(e[f], t) > 0 && r(e, a, f); s < l; ) {
                            for (r(e, s, l), ++s, --l; u(e[s], t) < 0; ) ++s;
                            for (; u(e[l], t) > 0; ) --l;
                        }
                        0 === u(e[a], t) ? r(e, a, l) : r(e, ++l, f), l <= n && (a = l + 1), n <= l && (f = l - 1);
                    }
                    return e;
                }
                function r(t, e, o) {
                    const r = t[e];
                    (t[e] = t[o]), (t[o] = r);
                }
            },
            { "./ascending.js": "A6FA" },
        ],
        fzXe: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    return null === e ? NaN : +e;
                }
                function* l(e, l) {
                    if (void 0 === l) for (let t of e) null != t && (t = +t) >= t && (yield t);
                    else {
                        let t = -1;
                        for (let o of e) null != (o = l(o, ++t, e)) && (o = +o) >= o && (yield o);
                    }
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e), (exports.numbers = l);
            },
            {},
        ],
        qoxw: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = o), (exports.quantileSorted = i);
                var e = a(require("./max.js")),
                    r = a(require("./min.js")),
                    t = a(require("./quickselect.js")),
                    u = f(require("./number.js"));
                function n() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (n = function () {
                            return e;
                        }),
                        e
                    );
                }
                function f(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var r = n();
                    if (r && r.has(e)) return r.get(e);
                    var t = {},
                        u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var f in e)
                        if (Object.prototype.hasOwnProperty.call(e, f)) {
                            var a = u ? Object.getOwnPropertyDescriptor(e, f) : null;
                            a && (a.get || a.set) ? Object.defineProperty(t, f, a) : (t[f] = e[f]);
                        }
                    return (t.default = e), r && r.set(e, t), t;
                }
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function o(n, f, a) {
                    if ((o = (n = Float64Array.from((0, u.numbers)(n, a))).length)) {
                        if ((f = +f) <= 0 || o < 2) return (0, r.default)(n);
                        if (f >= 1) return (0, e.default)(n);
                        var o,
                            i = (o - 1) * f,
                            l = Math.floor(i),
                            s = (0, e.default)((0, t.default)(n, l).subarray(0, l + 1));
                        return s + ((0, r.default)(n.subarray(l + 1)) - s) * (i - l);
                    }
                }
                function i(e, r, t = u.default) {
                    if ((n = e.length)) {
                        if ((r = +r) <= 0 || n < 2) return +t(e[0], 0, e);
                        if (r >= 1) return +t(e[n - 1], n - 1, e);
                        var n,
                            f = (n - 1) * r,
                            a = Math.floor(f),
                            o = +t(e[a], a, e);
                        return o + (+t(e[a + 1], a + 1, e) - o) * (f - a);
                    }
                }
            },
            { "./max.js": "Raoi", "./min.js": "WLfU", "./quickselect.js": "Dxtw", "./number.js": "fzXe" },
        ],
        a8Ry: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = u(require("../count.js")),
                    t = u(require("../quantile.js"));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(u, r, a) {
                    return Math.ceil((a - r) / (2 * ((0, t.default)(u, 0.75) - (0, t.default)(u, 0.25)) * Math.pow((0, e.default)(u), -1 / 3)));
                }
            },
            { "../count.js": "nH3P", "../quantile.js": "qoxw" },
        ],
        VlA4: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = u(require("../count.js")),
                    t = u(require("../deviation.js"));
                function u(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(u, r, o) {
                    return Math.ceil((o - r) / (3.5 * (0, t.default)(u) * Math.pow((0, e.default)(u), -1 / 3)));
                }
            },
            { "../count.js": "nH3P", "../deviation.js": "JPBu" },
        ],
        o4HH: [
            function (require, module, exports) {
                "use strict";
                function e(e, o) {
                    let t,
                        l = -1,
                        r = -1;
                    if (void 0 === o) for (const f of e) ++r, null != f && (t < f || (void 0 === t && f >= f)) && ((t = f), (l = r));
                    else for (let f of e) null != (f = o(f, ++r, e)) && (t < f || (void 0 === t && f >= f)) && ((t = f), (l = r));
                    return l;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        hoEE: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    let l = 0,
                        o = 0;
                    if (void 0 === t) for (let f of e) null != f && (f = +f) >= f && (++l, (o += f));
                    else {
                        let f = -1;
                        for (let r of e) null != (r = t(r, ++f, e)) && (r = +r) >= r && (++l, (o += r));
                    }
                    if (l) return o / l;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        FMd1: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
                var e = t(require("./quantile.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(t, u) {
                    return (0, e.default)(t, 0.5, u);
                }
            },
            { "./quantile.js": "qoxw" },
        ],
        SAjT: [
            function (require, module, exports) {
                "use strict";
                function* e(e) {
                    for (const r of e) yield* r;
                }
                function r(r) {
                    return Array.from(e(r));
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
            },
            {},
        ],
        qBXv: [
            function (require, module, exports) {
                "use strict";
                function e(e, o) {
                    let t,
                        l = -1,
                        r = -1;
                    if (void 0 === o) for (const f of e) ++r, null != f && (t > f || (void 0 === t && f >= f)) && ((t = f), (l = r));
                    else for (let f of e) null != (f = o(f, ++r, e)) && (t > f || (void 0 === t && f >= f)) && ((t = f), (l = r));
                    return l;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        aKlf: [
            function (require, module, exports) {
                "use strict";
                function e(e, r = t) {
                    const o = [];
                    let n,
                        s = !1;
                    for (const t of e) s && o.push(r(n, t)), (n = t), (s = !0);
                    return o;
                }
                function t(e, t) {
                    return [e, t];
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e), (exports.pair = t);
            },
            {},
        ],
        V5Z5: [
            function (require, module, exports) {
                "use strict";
                function e(e, r) {
                    return Array.from(r, (r) => e[r]);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        FcEW: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = o);
                var e = t(require("./ascending.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function o(t, o = e.default) {
                    let r,
                        u = !1;
                    if (1 === o.length) {
                        let f;
                        for (const n of t) {
                            const t = o(n);
                            (u ? (0, e.default)(t, f) < 0 : 0 === (0, e.default)(t, t)) && ((r = n), (f = t), (u = !0));
                        }
                    } else for (const e of t) (u ? o(e, r) < 0 : 0 === o(e, e)) && ((r = e), (u = !0));
                    return r;
                }
            },
            { "./ascending.js": "A6FA" },
        ],
        WaFY: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
                var e = r(require("./ascending.js")),
                    t = r(require("./minIndex.js"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(r, u = e.default) {
                    if (1 === u.length) return (0, t.default)(r, u);
                    let n,
                        f = -1,
                        o = -1;
                    for (const e of r) ++o, (f < 0 ? 0 === u(e, e) : u(e, n) < 0) && ((n = e), (f = o));
                    return f;
                }
            },
            { "./ascending.js": "A6FA", "./minIndex.js": "qBXv" },
        ],
        ieMY: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = o);
                var e = t(require("./ascending.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function o(t, o = e.default) {
                    let r,
                        u = !1;
                    if (1 === o.length) {
                        let f;
                        for (const n of t) {
                            const t = o(n);
                            (u ? (0, e.default)(t, f) > 0 : 0 === (0, e.default)(t, t)) && ((r = n), (f = t), (u = !0));
                        }
                    } else for (const e of t) (u ? o(e, r) > 0 : 0 === o(e, e)) && ((r = e), (u = !0));
                    return r;
                }
            },
            { "./ascending.js": "A6FA" },
        ],
        fBcN: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = u);
                var e = r(require("./ascending.js")),
                    t = r(require("./maxIndex.js"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(r, u = e.default) {
                    if (1 === u.length) return (0, t.default)(r, u);
                    let n,
                        f = -1,
                        o = -1;
                    for (const e of r) ++o, (f < 0 ? 0 === u(e, e) : u(e, n) > 0) && ((n = e), (f = o));
                    return f;
                }
            },
            { "./ascending.js": "A6FA", "./maxIndex.js": "o4HH" },
        ],
        c8hi: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = t(require("./leastIndex.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(t, r) {
                    const u = (0, e.default)(t, r);
                    return u < 0 ? void 0 : u;
                }
            },
            { "./leastIndex.js": "WaFY" },
        ],
        Z0Nc: [
            function (require, module, exports) {
                "use strict";
                function e(e, t = 0, r = e.length) {
                    for (var o, n, u = r - (t = +t); u; ) (n = (Math.random() * u--) | 0), (o = e[u + t]), (e[u + t] = e[n + t]), (e[n + t] = o);
                    return e;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        O7Vy: [
            function (require, module, exports) {
                "use strict";
                function e(e, t) {
                    let o = 0;
                    if (void 0 === t) for (let r of e) (r = +r) && (o += r);
                    else {
                        let r = -1;
                        for (let f of e) (f = +t(f, ++r, e)) && (o += f);
                    }
                    return o;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = e);
            },
            {},
        ],
        pk0a: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = t);
                var e = r(require("./min.js"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function t(r) {
                    if (!(o = r.length)) return [];
                    for (var t = -1, u = (0, e.default)(r, n), f = new Array(u); ++t < u; ) for (var o, a = -1, i = (f[t] = new Array(o)); ++a < o; ) i[a] = r[a][t];
                    return f;
                }
                function n(e) {
                    return e.length;
                }
            },
            { "./min.js": "WLfU" },
        ],
        oAxq: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = r);
                var e = t(require("./transpose.js"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r() {
                    return (0, e.default)(arguments);
                }
            },
            { "./transpose.js": "pk0a" },
        ],
        cBuZ: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    Object.defineProperty(exports, "bisect", {
                        enumerable: !0,
                        get: function () {
                            return e.default;
                        },
                    }),
                    Object.defineProperty(exports, "bisectRight", {
                        enumerable: !0,
                        get: function () {
                            return e.bisectRight;
                        },
                    }),
                    Object.defineProperty(exports, "bisectLeft", {
                        enumerable: !0,
                        get: function () {
                            return e.bisectLeft;
                        },
                    }),
                    Object.defineProperty(exports, "ascending", {
                        enumerable: !0,
                        get: function () {
                            return r.default;
                        },
                    }),
                    Object.defineProperty(exports, "bisector", {
                        enumerable: !0,
                        get: function () {
                            return t.default;
                        },
                    }),
                    Object.defineProperty(exports, "count", {
                        enumerable: !0,
                        get: function () {
                            return n.default;
                        },
                    }),
                    Object.defineProperty(exports, "cross", {
                        enumerable: !0,
                        get: function () {
                            return u.default;
                        },
                    }),
                    Object.defineProperty(exports, "cumsum", {
                        enumerable: !0,
                        get: function () {
                            return i.default;
                        },
                    }),
                    Object.defineProperty(exports, "descending", {
                        enumerable: !0,
                        get: function () {
                            return o.default;
                        },
                    }),
                    Object.defineProperty(exports, "deviation", {
                        enumerable: !0,
                        get: function () {
                            return f.default;
                        },
                    }),
                    Object.defineProperty(exports, "extent", {
                        enumerable: !0,
                        get: function () {
                            return s.default;
                        },
                    }),
                    Object.defineProperty(exports, "group", {
                        enumerable: !0,
                        get: function () {
                            return c.default;
                        },
                    }),
                    Object.defineProperty(exports, "groups", {
                        enumerable: !0,
                        get: function () {
                            return c.groups;
                        },
                    }),
                    Object.defineProperty(exports, "rollup", {
                        enumerable: !0,
                        get: function () {
                            return c.rollup;
                        },
                    }),
                    Object.defineProperty(exports, "rollups", {
                        enumerable: !0,
                        get: function () {
                            return c.rollups;
                        },
                    }),
                    Object.defineProperty(exports, "bin", {
                        enumerable: !0,
                        get: function () {
                            return a.default;
                        },
                    }),
                    Object.defineProperty(exports, "histogram", {
                        enumerable: !0,
                        get: function () {
                            return a.default;
                        },
                    }),
                    Object.defineProperty(exports, "thresholdFreedmanDiaconis", {
                        enumerable: !0,
                        get: function () {
                            return p.default;
                        },
                    }),
                    Object.defineProperty(exports, "thresholdScott", {
                        enumerable: !0,
                        get: function () {
                            return l.default;
                        },
                    }),
                    Object.defineProperty(exports, "thresholdSturges", {
                        enumerable: !0,
                        get: function () {
                            return d.default;
                        },
                    }),
                    Object.defineProperty(exports, "max", {
                        enumerable: !0,
                        get: function () {
                            return b.default;
                        },
                    }),
                    Object.defineProperty(exports, "maxIndex", {
                        enumerable: !0,
                        get: function () {
                            return j.default;
                        },
                    }),
                    Object.defineProperty(exports, "mean", {
                        enumerable: !0,
                        get: function () {
                            return m.default;
                        },
                    }),
                    Object.defineProperty(exports, "median", {
                        enumerable: !0,
                        get: function () {
                            return g.default;
                        },
                    }),
                    Object.defineProperty(exports, "merge", {
                        enumerable: !0,
                        get: function () {
                            return x.default;
                        },
                    }),
                    Object.defineProperty(exports, "min", {
                        enumerable: !0,
                        get: function () {
                            return y.default;
                        },
                    }),
                    Object.defineProperty(exports, "minIndex", {
                        enumerable: !0,
                        get: function () {
                            return O.default;
                        },
                    }),
                    Object.defineProperty(exports, "pairs", {
                        enumerable: !0,
                        get: function () {
                            return P.default;
                        },
                    }),
                    Object.defineProperty(exports, "permute", {
                        enumerable: !0,
                        get: function () {
                            return q.default;
                        },
                    }),
                    Object.defineProperty(exports, "quantile", {
                        enumerable: !0,
                        get: function () {
                            return h.default;
                        },
                    }),
                    Object.defineProperty(exports, "quantileSorted", {
                        enumerable: !0,
                        get: function () {
                            return h.quantileSorted;
                        },
                    }),
                    Object.defineProperty(exports, "quickselect", {
                        enumerable: !0,
                        get: function () {
                            return v.default;
                        },
                    }),
                    Object.defineProperty(exports, "range", {
                        enumerable: !0,
                        get: function () {
                            return k.default;
                        },
                    }),
                    Object.defineProperty(exports, "least", {
                        enumerable: !0,
                        get: function () {
                            return I.default;
                        },
                    }),
                    Object.defineProperty(exports, "leastIndex", {
                        enumerable: !0,
                        get: function () {
                            return S.default;
                        },
                    }),
                    Object.defineProperty(exports, "greatest", {
                        enumerable: !0,
                        get: function () {
                            return _.default;
                        },
                    }),
                    Object.defineProperty(exports, "greatestIndex", {
                        enumerable: !0,
                        get: function () {
                            return M.default;
                        },
                    }),
                    Object.defineProperty(exports, "scan", {
                        enumerable: !0,
                        get: function () {
                            return w.default;
                        },
                    }),
                    Object.defineProperty(exports, "shuffle", {
                        enumerable: !0,
                        get: function () {
                            return D.default;
                        },
                    }),
                    Object.defineProperty(exports, "sum", {
                        enumerable: !0,
                        get: function () {
                            return z.default;
                        },
                    }),
                    Object.defineProperty(exports, "ticks", {
                        enumerable: !0,
                        get: function () {
                            return L.default;
                        },
                    }),
                    Object.defineProperty(exports, "tickIncrement", {
                        enumerable: !0,
                        get: function () {
                            return L.tickIncrement;
                        },
                    }),
                    Object.defineProperty(exports, "tickStep", {
                        enumerable: !0,
                        get: function () {
                            return L.tickStep;
                        },
                    }),
                    Object.defineProperty(exports, "transpose", {
                        enumerable: !0,
                        get: function () {
                            return R.default;
                        },
                    }),
                    Object.defineProperty(exports, "variance", {
                        enumerable: !0,
                        get: function () {
                            return W.default;
                        },
                    }),
                    Object.defineProperty(exports, "zip", {
                        enumerable: !0,
                        get: function () {
                            return F.default;
                        },
                    });
                var e = C(require("./bisect.js")),
                    r = A(require("./ascending.js")),
                    t = A(require("./bisector.js")),
                    n = A(require("./count.js")),
                    u = A(require("./cross.js")),
                    i = A(require("./cumsum.js")),
                    o = A(require("./descending.js")),
                    f = A(require("./deviation.js")),
                    s = A(require("./extent.js")),
                    c = C(require("./group.js")),
                    a = A(require("./bin.js")),
                    p = A(require("./threshold/freedmanDiaconis.js")),
                    l = A(require("./threshold/scott.js")),
                    d = A(require("./threshold/sturges.js")),
                    b = A(require("./max.js")),
                    j = A(require("./maxIndex.js")),
                    m = A(require("./mean.js")),
                    g = A(require("./median.js")),
                    x = A(require("./merge.js")),
                    y = A(require("./min.js")),
                    O = A(require("./minIndex.js")),
                    P = A(require("./pairs.js")),
                    q = A(require("./permute.js")),
                    h = C(require("./quantile.js")),
                    v = A(require("./quickselect.js")),
                    k = A(require("./range.js")),
                    I = A(require("./least.js")),
                    S = A(require("./leastIndex.js")),
                    _ = A(require("./greatest.js")),
                    M = A(require("./greatestIndex.js")),
                    w = A(require("./scan.js")),
                    D = A(require("./shuffle.js")),
                    z = A(require("./sum.js")),
                    L = C(require("./ticks.js")),
                    R = A(require("./transpose.js")),
                    W = A(require("./variance.js")),
                    F = A(require("./zip.js"));
                function A(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function B() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap();
                    return (
                        (B = function () {
                            return e;
                        }),
                        e
                    );
                }
                function C(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var r = B();
                    if (r && r.has(e)) return r.get(e);
                    var t = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                            var i = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                            i && (i.get || i.set) ? Object.defineProperty(t, u, i) : (t[u] = e[u]);
                        }
                    return (t.default = e), r && r.set(e, t), t;
                }
            },
            {
                "./bisect.js": "VXHZ",
                "./ascending.js": "A6FA",
                "./bisector.js": "raOJ",
                "./count.js": "nH3P",
                "./cross.js": "JGhM",
                "./cumsum.js": "ReCz",
                "./descending.js": "wjXp",
                "./deviation.js": "JPBu",
                "./extent.js": "tlMU",
                "./group.js": "Q7X8",
                "./bin.js": "oEJX",
                "./threshold/freedmanDiaconis.js": "a8Ry",
                "./threshold/scott.js": "VlA4",
                "./threshold/sturges.js": "PgUT",
                "./max.js": "Raoi",
                "./maxIndex.js": "o4HH",
                "./mean.js": "hoEE",
                "./median.js": "FMd1",
                "./merge.js": "SAjT",
                "./min.js": "WLfU",
                "./minIndex.js": "qBXv",
                "./pairs.js": "aKlf",
                "./permute.js": "V5Z5",
                "./quantile.js": "qoxw",
                "./quickselect.js": "Dxtw",
                "./range.js": "M46h",
                "./least.js": "FcEW",
                "./leastIndex.js": "WaFY",
                "./greatest.js": "ieMY",
                "./greatestIndex.js": "fBcN",
                "./scan.js": "c8hi",
                "./shuffle.js": "Z0Nc",
                "./sum.js": "O7Vy",
                "./ticks.js": "nJNY",
                "./transpose.js": "pk0a",
                "./variance.js": "IBjk",
                "./zip.js": "oAxq",
            },
        ],
        A2T1: [
            function (require, module, exports) {
                "use strict";
                var t = require("d3-ease"),
                    r = require("d3-color"),
                    e = require("d3-interpolate"),
                    n = require("d3-timer"),
                    o = require("d3-random"),
                    a = require("d3-selection"),
                    i = require("d3-array");
                function u(t, r) {
                    return d(t) || s(t, r) || l(t, r) || c();
                }
                function c() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                function l(t, r) {
                    if (t) {
                        if ("string" == typeof t) return f(t, r);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? f(t, r) : void 0;
                    }
                }
                function f(t, r) {
                    (null == r || r > t.length) && (r = t.length);
                    for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                    return n;
                }
                function s(t, r) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var e = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done) && (e.push(i.value), !r || e.length !== r); n = !0);
                        } catch (c) {
                            (o = !0), (a = c);
                        } finally {
                            try {
                                n || null == u.return || u.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return e;
                    }
                }
                function d(t) {
                    if (Array.isArray(t)) return t;
                }
                function y(t, r) {
                    if (null == t) return {};
                    var e,
                        n,
                        o = m(t, r);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < a.length; n++) (e = a[n]), r.indexOf(e) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e]));
                    }
                    return o;
                }
                function m(t, r) {
                    if (null == t) return {};
                    var e,
                        n,
                        o = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) (e = a[n]), r.indexOf(e) >= 0 || (o[e] = t[e]);
                    return o;
                }
                var p = window.screen.width,
                    h = window.screen.height,
                    b = p > 800 ? 17 : 4,
                    x = 5,
                    v = 3e4,
                    g = 3,
                    w = t.easeLinear,
                    M = t.interpolateMagma,
                    O = F(b, x, p, h),
                    j = (0, r.color)("#becced"),
                    S = (0, r.color)("#6583c8"),
                    q = { background: { color: (0, r.color)("transparent") }, edge: { color: j }, point: { color: S }, text: { color: (0, r.color)("#444"), left: 50, padding: 50, bottom: 25 } };
                function k(t) {
                    return t;
                }
                function A(t) {
                    return t.map(function (t) {
                        return Object.assign({}, t, { tx: Math.random() * (p - x), ty: Math.random() * (h - x), sx: t.x, sy: t.y, mode: "cartesian" });
                    });
                }
                function P(t) {
                    return A(t);
                }
                function I(t, r) {
                    return { x: t * Math.cos(r), y: t * Math.sin(r) };
                }
                var C,
                    E,
                    T,
                    z,
                    D = function (t, r) {
                        return Object.assign({}, t, { x: (0, e.interpolate)(t.sx, t.tx)(r), y: (0, e.interpolate)(t.sy, t.ty)(r) });
                    },
                    R = function (t, r) {
                        var n = I(t.tr, (0, e.interpolate)(t.st, t.tt)(r)),
                            o = n.x,
                            a = n.y;
                        return Object.assign({}, t, { x: o + p / 2, y: a + h / 2 });
                    };
                function U(t, r) {
                    return t.map(function (t) {
                        var e = t.mode,
                            n = y(t, ["mode"]);
                        return n.mu ? n : "polar" === e ? R(n, r) : D(n, r);
                    });
                }
                function F(t, r, e, n) {
                    var a = 0 | (0, o.randomUniform)(0, t)();
                    return (0, i.range)(t).map(function (t, o) {
                        return { id: t, x: Math.random() * (e - r), y: Math.random() * (n - r), mu: o === a };
                    });
                }
                function L(t, r) {
                    (t.strokeStyle = q.point.color),
                        r.forEach(function (r) {
                            var e = r.x,
                                n = r.y;
                            t.beginPath(), t.arc(e, n, x, 0, 2 * Math.PI, !0), t.stroke(), t.closePath(), r.mu && ((t.fillStyle = q.text.color), (t.font = "14px serif"), t.fillText("μ", r.x - x, r.y - x - 10));
                        });
                }
                function $(t, r, e) {
                    (t.strokeStyle = q.edge.color),
                        r.forEach(function (r) {
                            var e = u(r, 2),
                                n = e[0],
                                o = e[1];
                            t.beginPath(), t.moveTo(n.x, n.y);
                            var a = { x: n.x + Math.abs(0.5 * (n.x - o.x)), y: n.y + Math.abs(0.5 * (n.y - o.y)) },
                                i = 0,
                                c = 0;
                            t.bezierCurveTo(a.x, a.y, i, c, o.x, o.y), t.stroke();
                        });
                }
                function B(t, r, e, n) {
                    L(t, r), $(t, e, n), t.restore();
                }
                function G(t, r) {
                    return t
                        .sort(function (t, e) {
                            return H(r, t) - H(r, e);
                        })
                        .map(function (t, r, e) {
                            return e.slice(r + 1, r + 1 + g).map(function (r) {
                                return [t, r];
                            });
                        })
                        .flat(1);
                }
                function H(t, r) {
                    return Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2));
                }
                function J(t) {
                    (C = 1e3 / t), (z = Date.now()), K(O);
                }
                function K(t) {
                    var r = P(t),
                        e = t.find(function (t) {
                            return !!t.mu;
                        }),
                        o = Q.node().getContext("2d");
                    o.save();
                    var a = (0, n.timer)(function (t) {
                        if (((T = Date.now()), (E = T - z) > C)) {
                            z = T - (E % C);
                            var n = Math.min(1, w(t / v)),
                                i = U(r, n),
                                u = G(i, e);
                            o.clearRect(0, 0, p, h),
                                B(o, i, u, e),
                                1 === n &&
                                    (a.stop(),
                                    requestAnimationFrame(function () {
                                        return K(i);
                                    }));
                        }
                    });
                }
                var N = window.devicePixelRatio || 1,
                    Q = (0, a.select)("body")
                        .append("canvas")
                        .style("position", "fixed")
                        .style("z-index", "-1")
                        .style("opacity", ".9")
                        .attr("width", p * N)
                        .attr("height", h * N)
                        .style("bottom", "0")
                        .style("background-color", q.background.color);
                if (Q.node()) {
                    var V = Q.node().getContext("2d").scale(N, N);
                    J(30);
                }
                module.hot &&
                    module.hot.dispose(function () {
                        window.location.reload();
                    });
            },
            { "d3-ease": "CFyW", "d3-color": "TJ2K", "d3-interpolate": "mkGF", "d3-timer": "CBES", "d3-random": "WQ4D", "d3-selection": "lm1C", "d3-array": "cBuZ" },
        ],
    },
    {},
    ["A2T1"],
    null
);
