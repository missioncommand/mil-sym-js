var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

/**
 * @param {string} symbolID - 15 character milstd code
 * @param {string} uniqueID 
 * @param {array} coordinates - array of Point2d
 * @param {object} modifiers 
 * @returns {armyc2.c2sd.renderer.utilities.MilStdSymbol}
 */
armyc2.c2sd.renderer.utilities.MilStdSymbol = function (symbolID, uniqueID, coordinates, modifiers) {

    // <editor-fold defaultstate="collapsed" desc="Variables">
    var SymbolUtilties = armyc2.c2sd.renderer.utilities.SymbolUtilities;
    var RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings;
    //private vars
    this._Properties = {};
    this._X_Altitude = null;
    this._AM_Distance = null;
    this._AN_Azimuth = null;
    this._symbolID = "";
    this._UUID = null;
    this._SymbolShapes = null;
    this._ModifierShapes = null;
    this._Coordinates = null;
    this._UnitSize = 0;
    this._scale = 0;
    this._KeepUnitRatio = true;
    this._LineWidth = 3;
    this._LineColor = null;
    this._FillColor = null;
	this._TextColor = null;
    this._TextBackgroundColor = null;
    this._Rotation = 0.0;
    this._Outline = false;
    this._OutLineColor = null;
    this._OutLineWidth = 0;
    this._symStd = 0;//2525B by default
    this._UseLineInterpolation = true;
    this._DrawAffiliationModifierAsLabel = true;      
    this._tp = null;
    this._Tag = null;
    this._AltitudeMode = "";
    this._UseDashArray = false;
    this._UseFillPattern = false;
    this._PatternFillType = 0;//
    this._HideOptionalLabels = false;
    this._wasClipped = false;
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="Constructor Code">
    //constructor code
    if(modifiers === undefined || modifiers === null)
        modifiers = {};
    else
        this._Properties = modifiers;
    
    this._UUID = uniqueID;
    this._Coordinates = coordinates;
    this.setSymbolID(symbolID);
    this._LineColor = SymbolUtilties.getLineColorOfAffiliation(this._symbolID);
    this._TextColor = this._LineColor;
    
    if(SymbolUtilties.hasDefaultFill(this._symbolID))
        this._FillColor = SymbolUtilties.getFillColorOfAffiliation(this._symbolID);
    
    this._KeepUnitRatio = true;
    this._symStd = RendererSettings.getSymbologyStandard();
    
    this._DrawAffiliationModifierAsLabel = RendererSettings.getDrawAffiliationModifierAsLabel();
    
    this._UseLineInterpolation = RendererSettings.getUseLineInterpolation();
    
    this._OutLineWidth = RendererSettings.getSinglePointSymbolOutlineWidth();
    
    /*if(this._OutLineWidth > 0 && SymbolUtilties.isTacticalGraphic(this._symbolID))
        this.setOutlineEnabled(true, outlineWidth);*/
    
    // </editor-fold>
    
};


    // <editor-fold defaultstate="collapsed" desc="functions that need to be above constructor">
    
    /**
     * @param {String} modifier like armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE
     * @param {String} value 
     * @param {Number} index in modifier array
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setModifier_AM_AN_X = function(modifier, value, index)
    {
        if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE ||
                        modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AN_AZIMUTH ||
                        modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.X_ALTITUDE_DEPTH)
        {
            var modifiers = null;
            
            if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE)
            {
                if(this._AM_Distance === null)
                    this._AM_Distance = [];
                modifiers = this._AM_Distance;
            }
            else if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AN_AZIMUTH)
            {
                if(this._AN_Azimuth === null)
                    this._AN_Azimuth = [];
                modifiers = this._AN_Azimuth;
            }
            else if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.X_ALTITUDE_DEPTH)
            {
                if(this._X_Altitude === null)
                    this._X_Altitude = [];
                modifiers = this._X_Altitude;
            }

            if(index + 1 > modifiers.length)
            {
                modifiers.push(value);
            }
            else
            {
                modifiers[index] = value;
            }
            
        }
    };

    /**
     * @param {String} modifier like ModifiersTG.T_UniqueDesignation1
     * @param {String} value 
     * @param {Number} index only applies to X, AM & AN
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setModifier = function(modifier, value, index)
    {
        if(this._Properties === null)
        {
            this._Properties = {};
           
        }
 
        else if(index === undefined)
        {
            index = 0;
        }
 
        
        if(value !== undefined && value !== null && value !== "")
        {
            if(!(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE ||
                    modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AN_AZIMUTH ||
                    modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.X_ALTITUDE_DEPTH))
            {
                this._Properties[modifier] = value;
            }
            else
            {
                this.setModifier_AM_AN_X(modifier,value,index);
            }
        }
        
        
    };
    
    /**
    * Sets the Symbol ID for the symbol.  Should be a 15
    * character string from the milstd.
    * @param value
    */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setSymbolID = function(value)
    {
        var current = this._symbolID;
        try 
        {
            if (value !== null && value !== "" && current !== value) {
                this._symbolID = value;
            }
            if (armyc2.c2sd.renderer.utilities.SymbolUtilities.getAffiliation(value)===("H")) {
                var basicID = armyc2.c2sd.renderer.utilities.SymbolUtilities.getBasicSymbolIDStrict(value);
                if (armyc2.c2sd.renderer.utilities.SymbolUtilities.isObstacle(basicID) || basicID===("G*M*NZ----****X") || basicID===("G*M*NEB---****X") || basicID===("G*M*NEC---****X")) {
                    this.setModifier("N", "ENY");
                }
            }
        } 
        catch (err) 
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MilStdSymbol","setSymbolID",err);
        }  
    };
    // </editor-fold>
    


    // <editor-fold defaultstate="collapsed" desc="Public Functions">
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setWasClipped = function(value)
    {
        this._wasClipped = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getWasClipped = function()
    {
        return this._wasClipped;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setSymbologyStandard = function(symStd)
    {
        this._symStd = symStd;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getSymbologyStandard = function()
    {
        return this._symStd;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setFillStyle = function(value)
    {
        this._tp = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getFillStyle = function()
    {
        return this._tp;
    };

    /**
     * @param {Boolean} value true/false
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setUseLineInterpolation = function(value)
    {
        this._UseLineInterpolation = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getUseLineInterpolation = function()
    {
        return this._UseLineInterpolation;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setModifierMap = function(value)
    {
        this._Properties = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getModifierMap = function()
    {
        return this._Properties;
    };
    
    /**
     * @param {String} modifier like armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE
     * @param {Number} index 
     * @returns {Number} AM, AN or X value
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getModifier_AM_AN_X = function(modifier, index)
    {
        if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE)
        {
            if(this._AM_Distance !== null && this._AM_Distance.length > index)
            {
                return this._AM_Distance[index];
            }
            else
                return null;
        }
        else if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AN_AZIMUTH)
        {
            if(this._AN_Azimuth === null && this._AN_Azimuth.length > index)
            {
                return this._AN_Azimuth[index];
            }
            else
                return null;
        }
        else if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.X_ALTITUDE_DEPTH)
        {
            if(this._X_Altitude === null && this._X_Altitude.length > index)
            {
                return this._X_Altitude[index];
            }
            else
                return null;
        }
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getModifier = function(modifier, index)
    {
        if(index === undefined)
        {
            index = 0;
        }
        
        if(modifier === "AM" || modifier === "AN" || modifier === "XN")
        {
            return this.getModifier_AM_AN_X(modifier, index);
        }
        else if(this._Properties[modifier] !== undefined)
        {
            return this._Properties[modifier];
        }
        else
            return null;
      
        
    };
    
    /**
     * @param {String} modifier like armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE
     * @returns {Array} Array of Number values
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getModifiers_AM_AN_X = function(modifier)
    {
        if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE)
        {
            return this._AM_Distance;
        }
        else if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AN_AZIMUTH)
        {
            return this._AN_Azimuth;
        }
        else if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.X_ALTITUDE_DEPTH)
        {
            return this._X_Altitude;
        }
    };
    
    /**
     * @param {String} modifier modifier key
     * @param {Array} values array of AM, AN or X values
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setModifiers_AM_AN_X = function(modifier, values)
    {
        if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE)
        {
            this._AM_Distance = values;
        }
        else if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.AN_AZIMUTH)
        {
            this._AN_Azimuth = values;
        }
        else if(modifier === armyc2.c2sd.renderer.utilities.ModifiersTG.X_ALTITUDE_DEPTH)
        {
            this._X_Altitude = values;
        }
    };
    /**
     * @param {armyc2.c2sd.renderer.utilities.Color} value
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setFillColor = function(value)
    {
        this._FillColor = value;
    };
    /**
     * @return {armyc2.c2sd.renderer.utilities.Color}
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getFillColor = function()
    {
        return this._FillColor;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setLineWidth = function(value)
    {
        this._LineWidth = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getLineWidth = function()
    {
        return this._LineWidth;
    };
    /**
     * @param {armyc2.c2sd.renderer.utilities.Color} value
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setLineColor = function(value)
    {
        this._LineColor = value;
    };
    /**
     * @return {armyc2.c2sd.renderer.utilities.Color}
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getLineColor = function()
    {
        return this._LineColor;
    };
	
	/**
     * @param {armyc2.c2sd.renderer.utilities.Color} value
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setTextColor = function(value)
    {
        this._TextColor = value;
    };
    /**
     * @return {armyc2.c2sd.renderer.utilities.Color}
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getTextColor = function()
    {
        return this._TextColor;
    };
	
		/**
     * @param {armyc2.c2sd.renderer.utilities.Color} value
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setTextBackgroundColor = function(value)
    {
        this._TextBackgroundColor = value;
    };
    /**
     * @return {armyc2.c2sd.renderer.utilities.Color}
     */
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getTextBackgroundColor = function()
    {
        return this._TextBackgroundColor;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setOutlineColor = function(value)
    {
        this._OutLineColor = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getOutlineColor = function()
    {
        return this._OutLineColor;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setAltitudeMode = function(value)
    {
        this._AltitudeMode = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getAltitudeMode = function()
    {
        return this._AltitudeMode;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setUseDashArray = function(value)
    {
        this._UseDashArray = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getUseDashArray = function()
    {
        return this._UseDashArray;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setUseFillPattern = function(value)
    {
        this._UseFillPattern = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getUseFillPattern = function()
    {
        return this._UseFillPattern;
    };

    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setPatternFillType = function(value)
    {
        this._PatternFillType = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getPatternFillType = function()
    {
        return this._PatternFillType;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setHideOptionalLabels = function(value)
    {
        this._HideOptionalLabels = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getHideOptionalLabels = function()
    {
        return this._HideOptionalLabels;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setTag = function(value)
    {
        this._Tag = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getTag = function()
    {
        return this._Tag;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setCoordinates = function(value)
    {
        this._Coordinates = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getCoordinates = function()
    {
        return this._Coordinates;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setModifierShapes = function(value)
    {
        this._ModifierShapes = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getModifierShapes = function()
    {
        return  this._ModifierShapes;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.setSymbolShapes = function(value)
    {
        this._SymbolShapes = value;
    };
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getSymbolShapes = function()
    {
        return this._SymbolShapes;
    };
    
    armyc2.c2sd.renderer.utilities.MilStdSymbol.prototype.getSymbolID = function()
    {
        return this._symbolID;
    };
    

    // </editor-fold>
    