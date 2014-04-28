var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.FontMetrics = function(font) {
    var _fontRenderContext = null;
    var _font = null;
    if (font)
        _font = font;
    else
        _font = armyc2.c2sd.renderer.utilities.RendererSettings.getModifierFont();
    
    var textInfoBuffer = document.createElement('canvas');
    textInfoBuffer.width = 1;
    textInfoBuffer.height = 1;
    this.textInfoContext = textInfoBuffer.getContext('2d');
    this.textInfoContext.font = _font;
    this.stringWidth = function(str) 
    {
        //return Math.floor(_font.getSize() / 2) * str.length;
        //return (_font.getSize() / 2) * str.length;        
        var location=new armyc2.c2sd.renderer.so.Point(0,0);
        var bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds(this.textInfoContext, str, location);            
        var stringWidth=bounds.width;
        return stringWidth;
    };
    this.stringHeight=function(str)
    {
        //var location=new armyc2.c2sd.renderer.so.Point(0,0);
        //var bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds(this.textInfoContext, str, location);            
        //var stringHeight=bounds.height;
        var RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings;
        //getTextBounds does 2 calculations.  Limit to what you need and just get height.
        var fontName = RendererSettings.getModifierFontName();
        var fontStyle = RendererSettings.getModifierFontStyle();
        var fontSize = RendererSettings.getModifierFontSize();
        var height = armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextHeight(fontName, fontSize, fontStyle);
        stringHeight = height;
        
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