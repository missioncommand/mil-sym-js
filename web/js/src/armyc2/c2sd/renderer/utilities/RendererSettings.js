var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.RendererSettings = (function () {
	
    var _Version = "0.2.2";
//outline approach.  none, filled rectangle, outline (default),
    //outline quick (outline will not exceed 1 pixels).
    var _SymbologyStandard = 0,
    _UseLineInterpolation = true,
    _AutoCollapseModifiers = true,   
    /**
     * Value from 0 to 255. The closer to 0 the lighter the text color has to be
     * to have the outline be black. Default value is 160.
     */
    _TextBackgroundAutoColorThreshold = 160,

    //if TextBackgroundMethod_OUTLINE is set, This value determines the width of that outline.
    _TextOutlineWidth = 1,
    
    //outline approach.  none, filled rectangle, outline (default),
    //outline quick (outline should not exceed 1 pixel).
    _TextBackgroundMethod = 2,
    
    //label foreground color, uses line color of symbol if null.
    _ColorLabelForeground = null,//armyc2.c2sd.renderer.utilities.Color.BLACK;//"000000", //Color.BLACK;
    //label background color, used if TextBackGroundMethod = TextBackgroundMethod_COLORFILL && not null
    _ColorLabelBackground = null,//armyc2.c2sd.renderer.utilities.Color.BLACK;//null,//"#FFFFFF",
       
    _SymbolOutlineWidth = 3,
    
    _UseCesium2DScaleModifiers = false,
    
    /**
     * If true (default), when HQ Staff is present, location will be indicated by the free
     * end of the staff
     */
    _CenterOnHQStaff = true,
    
    
    _ModifierFontName = "Arial, sans-serif",
    _ModifierFontSize = 10,
    _ModifierFontStyle = "bold",
    _ModifierFont = "bold 10pt Arial, sans-serif",
    _MPModifierFont = "bold 12pt Arial, sans-serif",
    _MPModifierFontName = "Arial, sans-serif",
    _MPModifierFontSize = 12,
    _MPModifierFontStyle = "bold",
	_KMLLabelScale = 1.0,
    
    _scaleEchelon = false,
    _DrawAffiliationModifierAsLabel = true,
    _SPFontSize = 60,
    _UnitFontSize = 50,
    _PixelSize = 35;
    
    try
    {
        armyc2.c2sd.renderer.utilities.RendererUtilities.measureFont(_ModifierFont);
    }
    catch(err)
    {
        
    }

return{
    
    
    /**
     * There will be no background for text
     * NOTE: not supported
     */
    TextBackgroundMethod_NONE : 0,

    /**
     * There will be a colored box behind the text
     * NOTE: not implemented
     */
    TextBackgroundMethod_COLORFILL : 1,

    /**
     * There will be an adjustable outline around the text (expensive)
     * Outline width of 4 is recommended.
     */
    TextBackgroundMethod_OUTLINE : 2,
    
     /**
     * Was quick in Java.  Some gains in IE 10+ if outline width is set to 1.
     * NOTE: only implemented for Units
     */
    TextBackgroundMethod_OUTLINE_QUICK : 3,


    /**
     * 2525Bch2 and USAS 13/14 symbology
     */
    Symbology_2525Bch2_USAS_13_14 : 0,
    /**
     * 2525C, which includes 2525Bch2 & USAS 13/14
     */
    Symbology_2525C : 1,
    
    getVersion: function()
    {
        return _Version;
    },
    
    /**
     * None, outline (default), or filled background.
     * If set to OUTLINE, TextOutlineWidth changed to default of 4.
     * If set to OUTLINE_QUICK, TextOutlineWidth changed to default of 2.
     * Use setTextOutlineWidth if you'd like a different value.
     * @param textBackgroundMethod like RenderSettings.TextBackgroundMethod_NONE
     */
    setTextBackgroundMethod: function(textBackgroundMethod)
    {
        _TextBackgroundMethod = textBackgroundMethod;
    },

    /**
     * None, outline (default), or filled background.
     * @return method like RenderSettings.TextBackgroundMethod_NONE
     */
    getTextBackgroundMethod: function()
    {
        return _TextBackgroundMethod;
    },
    
    /**
     * Controls what symbols are supported.
     * Set this before loading the renderer.
     * @param {Number} standard like RendererSettings.Symbology_2525Bch2_USAS_13_14
     * @returns {undefined}
     */
    setSymbologyStandard: function (standard){
        _SymbologyStandard = standard;
    },
    /**
     * Current symbology standard
     * @returns {Number}
     */
    getSymbologyStandard: function (){
        return _SymbologyStandard;
    },
    /**
     * For lines symbols with "decorations" like FLOT or LOC, when points are 
     * too close together, we will start dropping points until we get enough 
     * space between 2 points to draw the decoration.  Without this, when points
     * are too close together, you run the chance that the decorated line will
     * look like a plain line because there was no room between points to
     * draw the decoration.
     * @param {Boolean} value
     * @returns {undefined}
     */        
    setUseLineInterpolation: function (value){
        _UseLineInterpolation = value;
    },
    /**
     * Returns the current setting for Line Interpolation.
     * @returns {Boolean}
     */
    getUseLineInterpolation: function (){
        return _UseLineInterpolation;
    },
    /**
     * Collapse Modifiers for fire support areas when the symbol isn't large enough to show all
     * the labels.  Identifying label will always be visible.  Zooming in, to make the symbol larger,
     * will make more modifiers visible.  Resizing the symbol can also make more modifiers visible.
     * @param {boolean} value
     */
    setAutoCollapseModifiers: function (value){
        _AutoCollapseModifiers = value;
    },
    /**
     * Returns the current setting for Line Interpolation.
     * @returns {Boolean}
     */
    getAutoCollapseModifiers: function (){
        return _AutoCollapseModifiers;
    },
    /**
     * Cesium users calling RenderSymbol2D should set this to true
     * @param {boolean} value
     */
    setUseCesium2DScaleModifiers: function (value){
        _UseCesium2DScaleModifiers = value;
    },
    /**
     * @returns {Boolean}
     */
    getUseCesium2DScaleModifiers: function (){
        return _UseCesium2DScaleModifiers;
    },
    /**
     * if true (default), when HQ Staff is present, location will be indicated by the free
     * end of the staff.
     * @param {Boolean} value
     * @returns {undefined}
     */
    setCenterOnHQStaff: function (value){
        _CenterOnHQStaff = value;
    },
    getCenterOnHQStaff: function (){
        return _CenterOnHQStaff;
    },
    /**
     * if RenderSettings.TextBackgroundMethod_OUTLINE is used,
     * the outline will be this many pixels wide.
     * @param {Number} width
     * @returns {undefined}
     */
    setTextOutlineWidth: function (width){
        /*if(width > 0)
            _TextOutlineWidth = (width*2) + 1;
        else
            _TextOutlineWidth = 0;*/
        _TextOutlineWidth = width;
    },
    /**
     * if RenderSettings.TextBackgroundMethod_OUTLINE is used,
     * the outline will be this many pixels wide.
     * @returns {unresolved}
     */
    getTextOutlineWidth: function (){
        return _TextOutlineWidth;
    },
     /**
     * Sets the default pixel size for symbology.
     * Default value is 35.
     * @param {Number} size
     * @returns {undefined}
     */
    setDefaultPixelSize: function (size){
        _PixelSize = size;
    },
    /**
     * Gets the default pixel size for symbology.
     * Default value is 35.
     * @returns {Number}
     */
    getDefaultPixelSize: function (){
        return _PixelSize;
    },
    /**
     * Refers to text color of modifier labels
     * Default Color is Black.  If NULL, uses line color of symbol
     * @param {String} value like #FFFFFF
     * @returns {undefined}
     */
    setLabelForegroundColor: function (value){
        _ColorLabelForeground = value;
    },
    /**
     * Refers to text color of modifier labels
     * @returns {String} like #FFFFFF
     */
    getLabelForegroundColor: function (){
        return _ColorLabelForeground;
    },
    /**
     * Refers to text color of modifier labels
     * Default Color is White.
     * Null value means the optimal background color (black or white)
     * will be chose based on the color of the text.
     * @param {String} value like #FFFFFF
     * @returns {undefined}
     */
    setLabelBackgroundColor: function (value){
        _ColorLabelBackground= value;
    },
    /**
     * Refers to background color of modifier labels
     * @returns {String} like #FFFFFF
     */
    getLabelBackgroundColor: function (){
        return _ColorLabelBackground;
    },
    /**
     * Value from 0 to 255. The closer to 0 the lighter the text color has to be
     * to have the outline be black. Default value is 160.
     * @param {Number} value
     * @returns {undefined}
     */
    setTextBackgroundAutoColorThreshold: function (value){
        _TextBackgroundAutoColorThreshold = value;
    },
    /**
     * Value from 0 to 255. The closer to 0 the lighter the text color has to be
     * to have the outline be black. Default value is 160.
     * @returns {Number}
     */
    getTextBackgroundAutoColorThreshold: function (){
        return _TextBackgroundAutoColorThreshold;
    },
    /**
     * This applies to Single Point Tactical Graphics.
     * Setting this will determine the default value for milStdSymbols when created.
     * 0 for no outline,
     * 1 for outline thickness of 1 pixel, 
     * 2 for outline thickness of 2 pixels,
     * greater than 2 is not currently recommended.
     * @param {type} width
     * @returns {undefined}
     */
    setSinglePointSymbolOutlineWidth: function (width){
        _SymbolOutlineWidth = width;
        
        if(width > 0)
            _SymbolOutlineWidth = (width*2) + 1;
        else
            _SymbolOutlineWidth = 0;
    },
    /**
     * This only applies to single point tactical graphics.
     * @returns {unresolved}
     */
    getSinglePointSymbolOutlineWidth: function (){
        return _SymbolOutlineWidth;
    },
    /**
     * false to use label font size
     * true to scale it using symbolPixelBounds / 3.5
     * @param {Boolean} value
     * @returns {undefined}
     */
    setScaleEchelon: function (value){
        _scaleEchelon = value;
    },
    /**
     * Returns the value determining if we scale the echelon font size or
     * just match the font size specified by the label font.
     * @returns {Boolean}
     */
    getScaleEchelon: function (){
        return _scaleEchelon;
    },
    /**
     * Determines how to draw the Affiliation modifier.
     * True to draw as modifier label in the "E/F" location.
     * False to draw at the top right corner of the symbol
     * @param {Boolean} value
     * @returns {undefined}
     */
    setDrawAffiliationModifierAsLabel: function (value){
            _DrawAffiliationModifierAsLabel = value;
    },
    /**
     * True to draw as modifier label in the "E/F" location.
     * False to draw at the top right corner of the symbol
     * @returns {unresolved}
     */
    getDrawAffiliationModifierAsLabel: function (){
            return _DrawAffiliationModifierAsLabel;
    },
    /**
     * 
     * @param {String} name like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} size like 12
     * @param {String} style like "bold"
     * @returns {undefined}
     */
    setModifierFont: function(name, size, style){
        _ModifierFontName = name;
        _ModifierFontSize = size;
        if(style !== 'bold' || style !== 'normal')
        {
            _ModifierFontStyle = style;
        }
        else
        {
            _ModifierFontStyle = 'bold';
        }
        _ModifierFont = style + " " + size + "pt " + name;
        
        armyc2.c2sd.renderer.utilities.RendererUtilities.measureFont(_ModifierFont);
    },
    /**
     * 
     * @returns {String} like "bold 12pt Arial"
     */
    getModifierFont: function(){
        return _ModifierFont;
    },
    /**
     * 
     * @returns {String}
     */
    getModifierFontName: function(){
        return _ModifierFontName;
    },
    /**
     * 
     * @returns {Number}
     */
    getModifierFontSize: function(){
        return _ModifierFontSize;
    },
    /**
     * 
     * @returns {String}
     */
    getModifierFontStyle: function(){
        return _ModifierFontStyle;
    },
    
        /**
     * 
     * @param {String} name like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} size like 12
     * @param {String} style like "bold"
	 * @param {Number} Only set if you want to scale the KML label font. (default 1.0)
     * @returns {undefined}
     */
    setMPModifierFont: function(name, size, style, kmlLabelScale){
        _MPModifierFontName = name;
        _MPModifierFontSize = size;
        if(style !== 'bold' || style !== 'normal')
        {
            _MPModifierFontStyle = style;
        }
        else
        {
            _MPModifierFontStyle = 'bold';
        }
		if(kmlLabelScale !== null)
		{
			_KMLLabelScale = kmlLabelScale;
		}
		else
		{
			_KMLLabelScale = 1.0;
		}
		var tempSize = Math.round(size * _KMLLabelScale);
        _MPModifierFont = style + " " + tempSize + "pt " + name;
        armyc2.c2sd.renderer.utilities.RendererUtilities.measureFont(_MPModifierFont);
    },
    /**
     * 
     * @returns {String} like "bold 12pt Arial"
     */
    getMPModifierFont: function(){
        return _MPModifierFont;
    },
    /**
     * 
     * @returns {String}
     */
    getMPModifierFontName: function(){
        return _MPModifierFontName;
    },
    /**
     * 
     * @returns {Number}
     */
    getMPModifierFontSize: function(){
        return _MPModifierFontSize;
    },
    /**
     * 
     * @returns {String}
     */
    getMPModifierFontStyle: function(){
        return _MPModifierFontStyle;
    },
	
	getKMLLabelScale: function(){
		return _KMLLabelScale;
	},
    
    getFontInfo: function (){
        return {name: _ModifierFontName, size:_ModifierFontSize, style:_ModifierFontStyle, measurements:armyc2.c2sd.renderer.utilities.RendererUtilities.measureFont(_ModifierFont)};
    },
    
    getMPFontInfo: function (){
        return {name: _MPModifierFontName, size:_MPModifierFontSize, style:_MPModifierFontStyle, measurements:armyc2.c2sd.renderer.utilities.RendererUtilities.measureFont(_MPModifierFont)};
    },
	
    getInstance: function(){
            return armyc2.c2sd.renderer.utilities.RendererSettings;
    }
    
};
}());
