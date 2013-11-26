var armyc2=armyc2 || {};
armyc2.c2sd=armyc2.c2sd || {};
armyc2.c2sd.graphics2d=armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.FontMetrics=function(){
    var _fontRenderContext = null;
    var _font = null;
    if(arguments.length>0)
        _font = arguments[0];
    this.stringWidth=function (str) {
        return Math.floor (_font.getSize() / 2) * str.length;
    };
    this.getFontRenderContext=function () {
        return _fontRenderContext;
    };

};