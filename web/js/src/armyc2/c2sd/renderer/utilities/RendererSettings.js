var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.RendererSettings = (function () {

    var _Version = "0.3.37";
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

    //modifier the scale returned from getReasonableScale()
    _3DMinScaleMultiplier = 1.0,
    _3DMaxScaleMultiplier = 1.0,

    /**
     * If true (default), when HQ Staff is present, location will be indicated by the free
     * end of the staff
     */
    _CenterOnHQStaff = true,

    _OCMType = 1,//alternate operational condition modifier is default


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
    _DrawCountryCode = true,
    _SPFontSize = 60,
    _UnitFontSize = 50,
    _PixelSize = 35,
    _DPI = 90;
    //acevedo - 11/29/2017 - adding option to render only 2  labels.
	   _TwoLabelOnly = true,

     //acevedo - 12/8/17 - allow the setting of affiliation colors.
    _friendlyUnitFillColor = armyc2.c2sd.renderer.utilities.AffiliationColors.FriendlyUnitFillColor,
    /// <summary>
    /// Friendly Unit Fill Color.
    /// </summary>
    _hostileUnitFillColor = armyc2.c2sd.renderer.utilities.AffiliationColors.HostileUnitFillColor,//new Color(255,130,132);//Color.RED;
    /// <summary>
    /// Hostile Unit Fill Color.
    /// </summary>
    _neutralUnitFillColor = armyc2.c2sd.renderer.utilities.AffiliationColors.NeutralUnitFillColor,//new Color(144,238,144);//Color.GREEN;//new Color(0,255,0);//new Color(144,238,144);//light green//Color.GREEN;new Color(0,226,0);
    /// <summary>
    /// Neutral Unit Fill Color.
    /// </summary>
   _unknownUnitFillColor = armyc2.c2sd.renderer.utilities.AffiliationColors.UnknownUnitFillColor,// new Color(255,255,128);//Color.YELLOW;
    /// <summary>
    /// UnknownUn Graphic Fill Color.
    /// </summary>
    _friendlyGraphicFillColor = armyc2.c2sd.renderer.utilities.AffiliationColors.FriendlyGraphicFillColor,//Crystal Blue //Color.CYAN;
    /// <summary>
    /// Friendly Graphic Fill Color.
    /// </summary>
     _hostileGraphicFillColor = armyc2.c2sd.renderer.utilities.AffiliationColors.HostileGraphicFillColor,//salmon
    /// <summary>
    /// Hostile Graphic Fill Color.
    /// </summary>
     _neutralGraphicFillColor = armyc2.c2sd.renderer.utilities.AffiliationColors.NeutralGraphicFillColor,//Bamboo Green //new Color(144,238,144);//light green
    /// <summary>
    /// Neutral Graphic Fill Color.
    /// </summary>
     _unknownGraphicFillColor = armyc2.c2sd.renderer.utilities.AffiliationColors.UnknownGraphicFillColor,//light yellow  new Color(255,255,224);//light yellow
    /// <summary>
    /// Unknown Unit Line Color.
    /// </summary>
     _friendlyUnitLineColor = armyc2.c2sd.renderer.utilities.AffiliationColors.FriendlyUnitLineColor,
    /// <summary>
    /// Friendly Unit Line Color.
    /// </summary>
     _hostileUnitLineColor = armyc2.c2sd.renderer.utilities.AffiliationColors.HostileUnitLineColor,
    /// <summary>
    /// Hostile Unit Line Color.
    /// </summary>
     _neutralUnitLineColor = armyc2.c2sd.renderer.utilities.AffiliationColors.NeutralUnitLineColor,
    /// <summary>
    /// Neutral Unit Line Color.
    /// </summary>
     _unknownUnitLineColor = armyc2.c2sd.renderer.utilities.AffiliationColors.UnknownUnitLineColor,
    /// <summary>
    /// Unknown Graphic Line Color.
    /// </summary>
     _friendlyGraphicLineColor = armyc2.c2sd.renderer.utilities.AffiliationColors.FriendlyGraphicLineColor,
    /// <summary>
    /// Friend Graphic Line Color.
    /// </summary>
     _hostileGraphicLineColor = armyc2.c2sd.renderer.utilities.AffiliationColors.HostileGraphicLineColor,
    /// <summary>
    /// Hostile Graphic Line Color.
    /// </summary>
     _neutralGraphicLineColor = armyc2.c2sd.renderer.utilities.AffiliationColors.NeutralGraphicLineColor,
    /// <summary>
    /// Neutral Graphic Line Color.
    /// </summary>
     _unknownGraphicLineColor = armyc2.c2sd.renderer.utilities.AffiliationColors.UnknownGraphicLineColor;

    /*private   Color WeatherRed = new Color(198,16,33);//0xC61021;// 198,16,33
    private   Color WeatherBlue = new Color(0,0,255);//0x0000FF;// 0,0,255

    private   Color WeatherPurpleDark = new Color(128,0,128);//0x800080;// 128,0,128 Plum Red
    private   Color WeatherPurpleLight = new Color(226,159,255);//0xE29FFF;// 226,159,255 Light Orchid

    private   Color WeatherBrownDark = new Color(128,98,16);//0x806210;// 128,98,16 Safari
    private   Color WeatherBrownLight = new Color(210,176,106);//0xD2B06A;// 210,176,106 Khaki
    */



    try
    {
        if(document)
        {
            armyc2.c2sd.renderer.utilities.RendererUtilities.measureFont(_ModifierFont);
            armyc2.c2sd.renderer.utilities.RendererUtilities.measureFont(_MPModifierFont);
        }
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
     * 2525Bch2 and USAS 11-12 symbology
     */
    Symbology_2525B : 0,
    /**
     * 2525Bch2 and USAS 13-14 symbology
     * @deprecated use Symbology_2525B
     */
    Symbology_2525Bch2_USAS_13_14 : 0,
    /**
     * 2525C, which includes 2525Bch2 & USAS 13/14
     */
    Symbology_2525C : 1,

    OperationalConditionModifierType_SLASH : 0,
    OperationalConditionModifierType_BAR : 1,

    getVersion: function()
    {
        return _Version;
    },

    /**
     * Set operational condition modifiers to be rendered as bars(1) or slashes(0)
     * @param {Number} operationalConditionModifierType like RendererSettings.OperationalConditionModifierType_BAR
     */
    setOperationalConditionModifierType: function(operationalConditionModifierType)
    {
        _OCMType = operationalConditionModifierType;
    },

    /**
     * @return {Number}
     */
    getOperationalConditionModifierType: function()
    {
        return _OCMType;
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
     * @param {Number} standard like RendererSettings.Symbology_2525B
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
     * set device DPI (default 90)
     * @param {Number} value
     */
    setDeviceDPI: function (value){
        _DPI = value;
    },
    /**
     * returns user defined device DPI (default 90)
     * @returns {Number}
     */
    getDeviceDPI: function (){
        return _DPI;
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
     * for SVG and Canvas output, if your images look stretched or scaled down,
     * try altering there values.  Smaller values will result in a bigger image.
     * Larger values will result in a smaller image.  For example, if you're
     * getting images half the size of the space that they take on the map and are
     * getting stretched to fill it, try 0.5 as a starting point.
     * @param {Number} value (default 1.0)
     */
    set3DMinScaleMultiplier: function (value){
        _3DMinScaleMultiplier = value;
    },
    /**
     * @returns {Number}
     */
    get3DMinScaleMultiplier: function (){
        return _3DMinScaleMultiplier;
    },
    /**
     * for SVG and Canvas output, if your images look stretched or scaled down,
     * try altering there values.  Smaller values will result in a bigger image.
     * Larger values will result in a smaller image.  For example, if you're
     * getting images half the size of the space that they take on the map and are
     * getting stretched to fill it, try 0.5 as a starting point.
     * @param {Number} value (default 1.0)
     */
    set3DMaxScaleMultiplier: function (value){
        _3DMaxScaleMultiplier = value;
    },
    /**
     * @returns {Number}
     */
    get3DMaxScaleMultiplier: function (){
        return _3DMaxScaleMultiplier;
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
     * @returns {Boolean}
     */
    getDrawAffiliationModifierAsLabel: function (){
            return _DrawAffiliationModifierAsLabel;
    },
    /**
     * If present, append the Country Code to the 'M' Label
     * @param {Boolean} value
     */
    setDrawCountryCode: function (value){
            _DrawCountryCode = value;
    },
    /**
     * If present, append the Country Code to the 'M' Label
     * @returns {Boolean}
     */
    getDrawCountryCode: function (){
            return _DrawCountryCode;
    },
    /**
     *
     * @param {String} name like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} size like 12
     * @param {String} style like "bold"
     * @returns {undefined}
     */
    setModifierFont: function(name, size, style, fontInfo){
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

        armyc2.c2sd.renderer.utilities.RendererUtilities.measureFont(_ModifierFont, fontInfo);
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
    setMPModifierFont: function(name, size, style, kmlLabelScale, fontInfo){
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
		if(kmlLabelScale)
		{
			_KMLLabelScale = kmlLabelScale;
		}
		else
		{
			_KMLLabelScale = 1.0;
		}
		var tempSize = Math.round(size * _KMLLabelScale);
        _MPModifierFont = style + " " + tempSize + "pt " + name;
        armyc2.c2sd.renderer.utilities.RendererUtilities.measureFont(_MPModifierFont, fontInfo);
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

    /**
	   *
     * Get a boolean indicating between the use of ENY labels in all segments (false) or
 	   * to only set 2 labels one at the north and the other one at the south of the graphic (true).
     * @returns {boolean}
   */
	getTwoLabelOnly: function(){
			return _TwoLabelOnly;
	},

  /**
 	 * Set a boolean indicating between the use of ENY labels in all segments (false) or
 	 * to only set 2 labels one at the north and the other one at the south of the graphic (true).
 	 * @param {boolean} TwoENYLabelOnly
 	 */
    setTwoLabelOnly: function ( TwoLabelOnly )
 	{
 		_TwoLabelOnly = TwoLabelOnly;
 	},

   /**
    * get the preferred fill affiliation color for units.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getFriendlyUnitFillColor: function ()
    {
      return _friendlyUnitFillColor;
   },
   /**
    * Set the preferred fill affiliation color for units
    *
    * @param friendlyUnitFillColor Color like  Color(255, 255, 255)
    *
    * */
    setFriendlyUnitFillColor: function(friendlyUnitFillColor)
    {
      if (friendlyUnitFillColor != null)
      _friendlyUnitFillColor = friendlyUnitFillColor;
   },
   /**
    * get the preferred fill affiliation color for units.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getHostileUnitFillColor: function() {
      return _hostileUnitFillColor;
   },
   /**
    * Set the preferred fill affiliation color for units
    *
    * @param hostileUnitFillColor Color like  Color(255, 255, 255)
    *
    * */
    setHostileUnitFillColor:function (  hostileUnitFillColor) {
      if (hostileUnitFillColor != null)
      _hostileUnitFillColor = hostileUnitFillColor;
   },
   /**
    * get the preferred fill affiliation color for units.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
     getNeutralUnitFillColor:function () {
      return _neutralUnitFillColor;
   },
   /**
    * Set the preferred line affiliation color for units
    *
    * @param neutralUnitFillColor Color like  Color(255, 255, 255)
    *
    * */
     setNeutralUnitFillColor:function ( neutralUnitFillColor) {
      if (neutralUnitFillColor != null)
      _neutralUnitFillColor = neutralUnitFillColor;
   },
   /**
    * get the preferred fill affiliation color for units.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
     getUnknownUnitFillColor:function () {
      return _unknownUnitFillColor;
   },
   /**
    * Set the preferred fill affiliation color for units
    *
    * @param unknownUnitFillColor Color like  Color(255, 255, 255)
    *
    * */
     setUnknownUnitFillColor:function ( unknownUnitFillColor) {
      if (unknownUnitFillColor != null)
      _unknownUnitFillColor = unknownUnitFillColor;
   },
   /**
    * get the preferred fill affiliation color for graphics.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
     getHostileGraphicFillColor:function () {
      return _hostileGraphicFillColor;
   },
   /**
    * Set the preferred fill affiliation color for graphics
    *
    * @param hostileGraphicFillColor Color like  Color(255, 255, 255)
    *
    * */
    setHostileGraphicFillColor:function ( hostileGraphicFillColor) {
      if (hostileGraphicFillColor != null)
      _hostileGraphicFillColor = hostileGraphicFillColor;
   },
   /**
    * get the preferred fill affiliation color for graphics.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
     getFriendlyGraphicFillColor:function () {
      return _friendlyGraphicFillColor;
   },
   /**
    * Set the preferred fill affiliation color for graphics
    *
    * @param friendlyGraphicFillColor Color like  Color(255, 255, 255)
    *
    * */
     setFriendlyGraphicFillColor:function ( friendlyGraphicFillColor) {
      if (friendlyGraphicFillColor != null)
      _friendlyGraphicFillColor = friendlyGraphicFillColor;
   },
   /**
    * get the preferred fill affiliation color for graphics.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
     getNeutralGraphicFillColor:function () {
      return _neutralGraphicFillColor;
   },
   /**
    * Set the preferred fill affiliation color for graphics
    *
    * @param neutralGraphicFillColor Color like  Color(255, 255, 255)
    *
    * */
    setNeutralGraphicFillColor:function ( neutralGraphicFillColor) {
      if (neutralGraphicFillColor != null)
      _neutralGraphicFillColor = neutralGraphicFillColor;
   },
   /**
    * get the preferred fill affiliation color for graphics.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getUnknownGraphicFillColor:function () {
      return _unknownGraphicFillColor;
   },
   /**
    * Set the preferred fill affiliation color for graphics
    *
    * @param unknownGraphicFillColor Color like  Color(255, 255, 255)
    *
    * */
    setUnknownGraphicFillColor:function ( unknownGraphicFillColor) {
      if (unknownGraphicFillColor != null)
      _unknownGraphicFillColor = unknownGraphicFillColor;
   },
   /**
    * get the preferred line affiliation color for units.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getFriendlyUnitLineColor:function () {
      return _friendlyUnitLineColor;
   },
   /**
    * Set the preferred line affiliation color for units
    *
    * @param friendlyUnitLineColor Color like  Color(255, 255, 255)
    *
    * */
    setFriendlyUnitLineColor:function ( friendlyUnitLineColor) {
      if (friendlyUnitLineColor != null)
      this._friendlyUnitLineColor = friendlyUnitLineColor;
   },
   /**
    * get the preferred line   affiliation color for units.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getHostileUnitLineColor:function () {
      return _hostileUnitLineColor;
   },
   /**
    * Set the preferred line affiliation color for units
    *
    * @param hostileUnitLineColor Color like  Color(255, 255, 255)
    *
    * */
    setHostileUnitLineColor:function ( hostileUnitLineColor) {
      if (hostileUnitLineColor != null)
      this._hostileUnitLineColor = hostileUnitLineColor;
   },
   /**
    * get the preferred line affiliation color for units.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getNeutralUnitLineColor:function () {
      return _neutralUnitLineColor;
   },
   /**
    * Set the preferred line affiliation color for units
    *
    * @param neutralUnitLineColor Color like  Color(255, 255, 255)
    *
    * */
    setNeutralUnitLineColor:function ( neutralUnitLineColor) {
      if (neutralUnitLineColor != null)
      this._neutralUnitLineColor = neutralUnitLineColor;
   },
   /**
    * get the preferred line affiliation color for units.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getUnknownUnitLineColor:function () {
      return _unknownUnitLineColor;
   },
   /**
    * Set the preferred line affiliation color for units
    *
    * @param unknownUnitLineColor Color like  Color(255, 255, 255)
    *
    * */
    setUnknownUnitLineColor:function ( unknownUnitLineColor) {
      if (unknownUnitLineColor != null)
      this._unknownUnitLineColor = unknownUnitLineColor;
   },
   /**
    * get the preferred line affiliation color for graphics.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getFriendlyGraphicLineColor:function () {
      return _friendlyGraphicLineColor;
   },
   /**
    * Set the preferred line affiliation color for graphics
    *
    * @param friendlyGraphicLineColor Color like  Color(255, 255, 255)
    *
    * */
    setFriendlyGraphicLineColor:function ( friendlyGraphicLineColor) {
      if (friendlyGraphicLineColor != null)
      this._friendlyGraphicLineColor = friendlyGraphicLineColor;
   },
   /**
    * get the preferred line affiliation color for graphics.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getHostileGraphicLineColor:function () {
      return _hostileGraphicLineColor;
   },
   /**
    * Set the preferred line affiliation color for graphics
    *
    * @param hostileGraphicLineColor Color like  Color(255, 255, 255)
    *
    * */
    setHostileGraphicLineColor:function ( hostileGraphicLineColor) {
      if (hostileGraphicLineColor != null)
      this._hostileGraphicLineColor = hostileGraphicLineColor;
   },
   /**
    * get the preferred line affiliation color for graphics.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getNeutralGraphicLineColor:function () {
      return _neutralGraphicLineColor;
   },
   /**
    * Set the preferred line affiliation color for graphics
    *
    * @param neutralGraphicLineColor Color like  Color(255, 255, 255)
    *
    * */
    setNeutralGraphicLineColor:function ( neutralGraphicLineColor) {
      if (neutralGraphicLineColor != null)
      this._neutralGraphicLineColor = neutralGraphicLineColor;
   },
   /**
    * get the preferred line affiliation color for graphics.
    *
    * @return Color like  Color(255, 255, 255)
    *
    * */
    getUnknownGraphicLineColor:function () {
      return _unknownGraphicLineColor;
   },
   /**
    * Set the preferred line affiliation color for graphics
    *
    * @param unknownGraphicLineColor Color like  Color(255, 255, 255)
    *
    * */
    setUnknownGraphicLineColor:function ( unknownGraphicLineColor) {
      if (unknownGraphicLineColor != null)
      this._unknownGraphicLineColor = unknownGraphicLineColor;
   },

   /**
    * Set the preferred line and fill affiliation color for tactical graphics.
    *
    * @param friendlyGraphicLineColor Color
    * @param hostileGraphicLineColor Color
    * @param neutralGraphicLineColor Color
    * @param unknownGraphicLineColor Color
    * @param friendlyGraphicFillColor Color
    * @param hostileGraphicFillColor Color
    * @param neutralGraphicFillColor Color
    * @param unknownGraphicFillColor Color
    */
    setGraphicPreferredAffiliationColors: function (  friendlyGraphicLineColor,
                                                      hostileGraphicLineColor,
                                                      neutralGraphicLineColor,
                                                      unknownGraphicLineColor,
                                                      friendlyGraphicFillColor,
                                                      hostileGraphicFillColor,
                                                      neutralGraphicFillColor,
                                                      unknownGraphicFillColor) {


         setFriendlyGraphicLineColor(friendlyGraphicLineColor);
         setHostileGraphicLineColor(hostileGraphicLineColor);
         setNeutralGraphicLineColor(neutralGraphicLineColor);
         setUnknownGraphicLineColor(unknownGraphicLineColor);
         setFriendlyGraphicFillColor(friendlyGraphicFillColor);
         setHostileGraphicFillColor(hostileGraphicFillColor);
         setNeutralGraphicFillColor(neutralGraphicFillColor);
         setUnknownGraphicFillColor(unknownGraphicFillColor);
   },

   /**
    * Set the preferred line and fill affiliation color for units and tactical graphics.
    *
    * @param friendlyUnitLineColor Color like  Color(255, 255, 255). Set to null to ignore setting
    * @param hostileUnitLineColor Color
    * @param neutralUnitLineColor Color
    * @param unknownUnitLineColor Color
    * @param friendlyUnitFillColor Color
    * @param hostileUnitFillColor Color
    * @param neutralUnitFillColor Color
    * @param unknownUnitFillColor Color
    */
    setUnitPreferredAffiliationColors: function (     friendlyUnitLineColor,
                                                      hostileUnitLineColor,
                                                      neutralUnitLineColor,
                                                      unknownUnitLineColor,
                                                      friendlyUnitFillColor,
                                                      hostileUnitFillColor,
                                                      neutralUnitFillColor,
                                                      unknownUnitFillColor) {

      setFriendlyUnitLineColor(friendlyUnitLineColor);
      setHostileUnitLineColor(hostileUnitLineColor);
      setNeutralUnitLineColor(neutralUnitLineColor);
      setUnknownUnitLineColor(unknownUnitLineColor);
      setFriendlyUnitFillColor(friendlyUnitFillColor);
      setHostileUnitFillColor(hostileUnitFillColor);
      setNeutralUnitFillColor(neutralUnitFillColor);
      setUnknownUnitFillColor(unknownUnitFillColor);
   },

  getInstance: function(){
          return armyc2.c2sd.renderer.utilities.RendererSettings;
  }

};
}());
