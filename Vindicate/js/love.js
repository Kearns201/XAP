!function (e, t, a) {
    function n() {
        c(".begin_to{width: 20px;height: 20px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.begin_to:after,.begin_to:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.begin_to:after{top: -10px;}.begin_to:before{left: -10px;}"), o(), r()
    }

    function r() {
        for (var e = 0; e < d.length; e++) d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999");
        requestAnimationFrame(r)
    }

    function o() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function (e) {
            t && t(), i(e)
        }
    }

    function i(e) {
        var a = t.createElement("div");
        a.className = "begin_to", d.push({
            el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: s()
        }), t.body.appendChild(a)
    }

    function c(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch (t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }

    function s() {
        return "#cc2a5d"
    }

    var d = [];
    e.requestAnimationFrame = function () {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        }
    }(), n()
}(window, document);
// rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")
