var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.FontMetrics = function(font) {
    var _fontRenderContext = null;
    var _font = null;
    /*if (font)
        _font = font;
    else
        _font = armyc2.c2sd.renderer.utilities.RendererSettings.getModifierFont();//*/
    
    //GE default
    //_font = "normal 16pt Arial";//this is the default but it seems to change with scale.
    //_font = "normal 12pt Arial";//12 works well at high scales
    //_font = "normal 14pt Arial";//14 works better zoomed in close
    _font = armyc2.c2sd.renderer.utilities.RendererSettings.getMPModifierFont();
    //TODO: perhaps, based on scale, change the font size that we're trying to 
    //get the metrics for as GE seems to use a smaller font zoomed out and
    // a slightly larger one at some point when zoomed in.
    
    var textInfoBuffer = null;
	if(document.createElement)
	{
		textInfoBuffer = document.createElement('canvas');
	}
	else
	{
		textInfoBuffer = {};
	}
    textInfoBuffer.width = 1;
    textInfoBuffer.height = 1;
    if(textInfoBuffer.getContext)
    {
        this.textInfoContext = textInfoBuffer.getContext('2d');
    }
    else
    {
        this.textInfoContext = {};
    }
    this.textInfoContext.font = _font;
    this.stringWidth = function(str) 
    {
        //return Math.floor(_font.getSize() / 2) * str.length;
        //return (_font.getSize() / 2) * str.length;        
        var location=new armyc2.c2sd.renderer.so.Point(0,0);
        var bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds(this.textInfoContext, str, location, armyc2.c2sd.renderer.utilities.RendererSettings.getMPModifierFont());            
        var stringWidth=bounds.width;
        return stringWidth;
    };
    this.stringHeight=function(str)
    {
        //var location=new armyc2.c2sd.renderer.so.Point(0,0);
        //var bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds(this.textInfoContext, str, location, armyc2.c2sd.renderer.utilities.RendererSettings.getMPModifierFont());            
        //var stringHeight=bounds.height;
        var RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings;
        //getTextBounds does 2 calculations.  Limit to what you need and just get height.
        //google earth defaults:
        //Issue being we can't ask google earth for what font it is using.
        var fontName = RendererSettings.getMPModifierFontName();//"Arial";//
        var fontStyle = RendererSettings.getMPModifierFontStyle();//"normal";//
        var fontSize = RendererSettings.getMPModifierFontSize();//12;//
        var height = armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextHeight(fontName, fontSize, fontStyle).fullHeight;
        stringHeight = height;
        
        return stringHeight;        
    };
    this.getTextBounds=function(str)
    {
        var location=new armyc2.c2sd.renderer.so.Point(0,0);
        var bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds(this.textInfoContext, str, location, armyc2.c2sd.renderer.utilities.RendererSettings.getMPModifierFont());            
        return bounds;
    };
    this.getFontRenderContext = function() {
        return _fontRenderContext;
    };

};