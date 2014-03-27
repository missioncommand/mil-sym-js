var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.FontMetrics = function() {
    var _fontRenderContext = null;
    var _font = null;
    if (arguments.length > 0)
        _font = arguments[0];
    
    var textInfoBuffer = document.createElement('canvas');
    textInfoBuffer.width = 1;
    textInfoBuffer.height = 1;
    this.textInfoContext = textInfoBuffer.getContext('2d');
    this.stringWidth = function(str) 
    {
        //return Math.floor(_font.getSize() / 2) * str.length;
        //return (_font.getSize() / 2) * str.length;        
        var location=new armyc2.c2sd.renderer.so.Point(0,0);
        var bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds(this.textInfoContext, str, location, undefined);            
        var stringWidth=bounds.width;
        return stringWidth;
    };
    this.stringHeight=function(str)
    {
        var location=new armyc2.c2sd.renderer.so.Point(0,0);
        var bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds(this.textInfoContext, str, location, undefined);            
        var stringHeight=bounds.height;
        return stringHeight;        
    };
    this.getTextBounds=function(str)
    {
        var location=new armyc2.c2sd.renderer.so.Point(0,0);
        var bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds(this.textInfoContext, str, location, undefined);            
        return bounds;
    };
    this.getFontRenderContext = function() {
        return _fontRenderContext;
    };

};