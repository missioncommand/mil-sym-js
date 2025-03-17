var sec = sec || {};
/** namespace */
sec.web = sec.web || {};
sec.web.renderer = sec.web.renderer || {};
sec.web.renderer.utilities = sec.web.renderer.utilities || {};
/** @class */
sec.web.renderer.utilities.JavaRendererUtilities = {};

    sec.web.renderer.utilities.JavaRendererUtilities.getBrowserEngine = function()
    {
        var ua = navigator.userAgent;
        if(ua.indexOf("Trident") > 0)
            return "Trident";//IE
        else if(ua.indexOf("AppleWebKit") > 0)
            return "AppleWebKit";
        else if(ua.indexOf("Gecko") > 0 && ua.indexOf("Firefox") > 0)
            return "Gecko";//Firefox
        else
            return "Other";
    };

    /**
     * Converts ARGB string format to the Google used ABGR string
     * format.  Google reverses the blue and red positioning.
     * @param rgbString A color string of the format AARRGGBB in hex value.
     * @return the reverse of the input string in hex.  The format should now be 
     * AABBGGRR
     */
    sec.web.renderer.utilities.JavaRendererUtilities.ARGBtoABGR = function(rgbString)
    {
        if(rgbString.length===6)
        {
            var s="FF";
            rgbString=s.concat(rgbString);
        }

        var c = rgbString.split('');
        var temp1 = c[2];
        var temp2 = c[3];
        c[2] = c[6];
        c[3] = c[7];
        c[6] = temp1;
        c[7] = temp2;
        var returnVal = c.join("");
        return returnVal;
    };
         
    /**
     * Returns a symbolId with just the identifiable symbol Id
     * pieces.  All variable information is returned as '*'.  For
     * example, a boundary, "GFGPGLB----KUSX" returns "G*G*GLB---****X";
     * @param symbolCode A 15 character symbol ID.
     * @return The normalized SymbolCode.
     */
    sec.web.renderer.utilities.JavaRendererUtilities.normalizeSymbolCode = function(symbolCode)
    {
        var newSymbolCode = symbolCode;
            if (symbolCode.charAt(0)==="G" || symbolCode.charAt(0)==="S") {
                newSymbolCode = newSymbolCode.substring(0, 1) + '*' + newSymbolCode.substring(2);
                newSymbolCode = newSymbolCode.substring(0, 3) + '*' + newSymbolCode.substring(4);
                newSymbolCode = newSymbolCode.substring(0, 10) + "****" + newSymbolCode.substring(14);
            }
            if (symbolCode.charAt(0)===("S")) {
                newSymbolCode = newSymbolCode.substring(0, 14) + '*';
            }
            return newSymbolCode;
    };
    
          
    sec.web.renderer.utilities.JavaRendererUtilities.ReconcileSymbolID = function(symbolID)
    {
            var SymbolUtilities = armyc2.c2sd.renderer.utilities.SymbolUtilities;
            var sb = "";
            var codingScheme = symbolID.charAt(0);

            if(symbolID !== null && symbolID.length===15)
            {
                if(codingScheme==='S' || //warfighting
                        codingScheme==='I' ||//sigint
                        codingScheme==='O' ||//stability operation
                        codingScheme==='E')//emergency management
                {
                    sb += (codingScheme);

                    if(SymbolUtilities.hasValidAffiliation(symbolID)===false)
                        sb += ('U');
                    else
                        sb += (symbolID.charAt(1));

                    if(SymbolUtilities.hasValidBattleDimension(symbolID)===false)
                    {
                        sb += ('Z');
                        sb = "S" + sb.substring(1);
                    }
                    else
                        sb += (symbolID.charAt(2));

                    if(SymbolUtilities.hasValidStatus(symbolID)===false)
                        sb += ('P');
                    else
                        sb += (symbolID.charAt(3));

                    sb += ("------");
                    sb += (symbolID.substring(10, 15));

                }
                else if(codingScheme==='G')//tactical
                {
                    sb += (codingScheme);

                    if(SymbolUtilities.hasValidAffiliation(symbolID)===false)
                        sb += ('U');
                    else
                        sb += (symbolID.charAt(1));

                    //if(SymbolUtilities.hasValidBattleDimension(SymbolID)==false)
                        sb += ('G');
                    //else
                    //    sb += (SymbolID.charAt(2));

                    if(SymbolUtilities.hasValidStatus(symbolID)===false)
                        sb += ('P');
                    else
                        sb += (symbolID.charAt(3));

                    sb += ("GPP---");//return an action point
                    //sb += ("GAG---");//return a boundary
                    sb += (symbolID.substring(10, 15));


                }
                else if(codingScheme==='W')//weather
                {//no default weather graphic
                    return "SUZP-----------";//unknown
                }
                else//bad codingScheme
                {
                    sb += ('S');
                    if(SymbolUtilities.hasValidAffiliation(symbolID)===false)
                        sb += ('U');
                    else
                        sb += (symbolID.charAt(1));

                    if(SymbolUtilities.hasValidBattleDimension(symbolID)===false)
                    {
                        sb += ('Z');
                        sb = "S" + sb.substring(1);
                    }
                    else
                        sb += (symbolID.charAt(2));

                    if(SymbolUtilities.hasValidStatus(symbolID)===false)
                        sb += ('P');
                    else
                        sb += (symbolID.charAt(3));

                    sb += ("------");
                    sb += (symbolID.substring(10, 15));
                }
            }
            else
            {
                return "SUZP-----------";//unknown
            }

            return sb; 
          
         
         //*/
    };
    
    sec.web.renderer.utilities.JavaRendererUtilities.addAltModeToModifiersString = function(modifiers, altMode)
    {
        if(altMode)
        {
            if(altMode === "relativeToGround")
                modifiers["ALTMODE"]="AGL";
            else if(altMode === "absolute")
                modifiers["ALTMODE"]="MSL";
            else
                modifiers["ALTMODE"]="";
        }
        //return modifiers;
    }
            
    /**
     * Checks symbolID and if the relevant modifiers are present
     * @param {String} symbolCode
     * @param {Object} modifiers
     * @returns {Boolean}
     */
    sec.web.renderer.utilities.JavaRendererUtilities.is3dSymbol = function(symbolCode, modifiers)
    {
        var returnValue = false;
        try 
        {
            var symbolId = symbolCode.substring(4, 10);

            if (symbolId === "ACAI--" || // Airspace Coordination Area Irregular
                symbolId === "ACAR--" || // Airspace Coordination Area Rectangular
                symbolId === "ACAC--" || // Airspace Coordination Area Circular
                symbolId === "AKPC--" || // Kill box circular
                symbolId === "AKPR--" || // Kill box rectangular
                symbolId === "AKPI--" || // Kill box irregular
                symbolId === "ALC---" || // Air corridor
                symbolId === "ALM---" || // 
                symbolId === "ALS---" || // SAAFR
                symbolId === "ALU---" || // UAV
                symbolId === "ALL---" || // Low level transit route
                symbolId === "AAR---" ||
                symbolId === "AAF---" ||
                symbolId === "AAH---" ||
                symbolId === "AAM---" || // MEZ
                symbolId === "AAML--" || // LOMEZ
                symbolId === "AAMH--")  // HIMEZ
            {                        

                try 
                {   
                    //modifiers=JSON.parse(modifiers);
                    if(modifiers)
                    {
                        if(modifiers.modifiers)
                        {
                            modifiers = modifiers.modifiers;
                        }
                    
                        // These guys store array values.  Put in appropriate data structure
                        // for MilStdSymbol.
                        var jsonAltitudeArray = null;
                        if (modifiers.X) 
                        {
                            jsonAltitudeArray = modifiers.X;
                        }        
                        else if (modifiers.altitudeDepth) 
                        {
                            jsonAltitudeArray = modifiers.altitudeDepth;
                        } //*/
                        if (jsonAltitudeArray && jsonAltitudeArray.length >= 2)
                        {
                            returnValue = true;                                    
                        }
                        else if((jsonAltitudeArray) && (jsonAltitudeArray.length === 1) && (symbolId === "AKPC--" || // Kill box circular
                                                                    symbolId === "AKPR--" || // Kill box rectangular
                                                                    symbolId === "AKPI--"))
                        {
                            returnValue = true;
                        }
						else
						{
							returnValue = false;
						}
                    }
                } 
                catch(je) 
                {
                    armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("JavaRendererUtilities", "is3DSymbol()", je);//
                }                       
            }
        }
        catch(err)
        {
            returnValue = false;
        }
        return returnValue;
    };
    
            
    sec.web.renderer.utilities.JavaRendererUtilities.isNumber = function (text){
        //var re = new RegExp("((-|\\+)?[0-9]+(\\.[0-9]+)?)+");
        //return(re.test(text));
        return armyc2.c2sd.renderer.utilities.SymbolUtilities.isNumber(text);
    };
    
    /**
     * 
     * @param SymbolInfo something like "SymbolID?LineColor=0x000000&FillColor=0xFFFFFF&size=35"
     */
    sec.web.renderer.utilities.JavaRendererUtilities.createParameterMapFromURL = function(SymbolInfo)
    {
        var modifiers = {},
            symbolID = null,
            parameters = null,
            key = null,
            value = null,
            arrParameters = null,
            arrKeyValue = null,
            temp = null,
            questionIndex = SymbolInfo.indexOf('?');
        
        if(questionIndex === -1)
            symbolID = SymbolInfo;
        else
            symbolID = SymbolInfo.substring(0, questionIndex);
            
            

        //try
        //{   //build a map for the other createMilstdSymbol function to use
            //to build a milstd symbol.
            if(questionIndex > 0 && (questionIndex + 1 < SymbolInfo.length))
            {
                parameters = SymbolInfo.substring(questionIndex + 1,SymbolInfo.length);
                arrParameters = parameters.split("&");

                for(var i = 0; i < arrParameters.length; i++)
                {
                    arrKeyValue = arrParameters[i].split("=");
                    if(arrKeyValue.length === 2 && arrKeyValue[1]!== null && arrKeyValue[1]!=="")
                    {

                        key = arrKeyValue[0];
                        value = arrKeyValue[1];

                        temp = decodeURIComponent(value);
                        
                        modifiers[key.toUpperCase()] = temp;
                    }
                }
            }
            var symStd = modifiers[armyc2.c2sd.renderer.utilities.MilStdAttributes.SymbologyStandard];
            if(symStd)
            {
                symStd = symStd.toUpperCase();
                if(symStd === "2525B")
                    symStd = armyc2.c2sd.renderer.utilities.RendererSettings.Symbology_2525Bch2_USAS_13_14;
                else
                    symStd = armyc2.c2sd.renderer.utilities.RendererSettings.Symbology_2525C;
                
                modifiers[armyc2.c2sd.renderer.utilities.MilStdAttributes.SymbologyStandard] = symStd;
            }
        //}
        //catch(exc)
        //{
        //    System.err.println("Error parsing \"" + key.toUpperCase() + "\" parameter from URL");
        //    System.err.println(exc.getMessage());
        //}
        modifiers["SYMBOLID"] = symbolID;
        return modifiers;
    };
    
    /**
     * Updates the milstdsymbol to be what JavaRendererServer is expecting.
     * @param {type} symbol
     * @returns {sec.web.renderer.utilities.JavaRendererUtilities.MilStdSymbolArraysToArrayLists.symbol}
     */
    sec.web.renderer.utilities.JavaRendererUtilities.MilStdSymbolArraysToArrayLists = function(symbol)
    {
        var coords = symbol.getCoordinates();
        coords = new java.util.ArrayList(coords);
        symbol.setCoordinates(coords);
        
        return symbol;
    };
    
   
   /**
    * 
    * @param {Number} latitude1
    * @param {Number} longitude1
    * @param {Number} latitude2
    * @param {Number} longitude2
    * @param {String} unitOfMeasure meters, kilometers, miles, feet, yards, nautical, nautical miles.
    * @returns {Number}
    */
    sec.web.renderer.utilities.JavaRendererUtilities.measureDistance = function (latitude1, longitude1, latitude2, longitude2, unitOfMeasure) 
    {
        // latitude1,latitude2 = latitude, longitude1,longitude2 = longitude
        //Radius is 6378.1 (km), 3963.1 (mi), 3443.9 (nm

        var distance = -1,
            rad;
        //if((validateCoordinate(latitude1,longitude1) == true)&&(validateCoordinate(latitude2,longitude2) == true))
        //{

        switch (unitOfMeasure.toLowerCase()) {
        case "kilometers":
            rad = 6378.137;
            break;
        case "meters":
            rad = 6378137;
            break;
        case "miles":
            rad = 3963.1;
            break;
        case "feet":
            rad = 20925524.9;
            break;
        case "yards":
            rad = 6975174.98;
            break;
        case "nautical":
            rad = 3443.9;
            break;
        case "nautical miles":
            rad = 3443.9;
            break;
        default:
            return -1;
        }
        latitude1 = latitude1 * (Math.PI / 180);
        latitude2 = latitude2 * (Math.PI / 180);
        longitude1 = longitude1 * (Math.PI / 180);
        longitude2 = longitude2 * (Math.PI / 180);
        distance = (Math.acos(Math.cos(latitude1) * Math.cos(longitude1) * Math.cos(latitude2) * Math.cos(longitude2) + Math.cos(latitude1) * Math.sin(longitude1) * Math.cos(latitude2) * Math.sin(longitude2) + Math.sin(latitude1) * Math.sin(latitude2)) * rad);
        
        return distance;
    };
    
    /**
     * 
     * @param {Array} geoCoords
     * @param {Array} modsAM
     * @returns {sec.web.renderer.utilities.JavaRendererUtilities.HOSTILE_FILL_COLOR|String}
     */
    sec.web.renderer.utilities.JavaRendererUtilities.generateLookAtTag = function(geoCoords, modsAM)
    {
                //add <LookAt> tag//////////////////////////////////////////////
                var doLookAt = true;
                var controlPointBounds = null;//armyc2.c2sd.renderer.so.Rectangle();
                var tempPt = null;
                var LookAtTag = "<LookAt>";
                if(doLookAt)
                {
                    for(var j = 0; j < geoCoords.length; j++)
                    {
                        tempPt = geoCoords[j];
                        if(controlPointBounds)
                        {
                            controlPointBounds.unionPoint(tempPt);
                        }
                        else
                        {
                            controlPointBounds = new armyc2.c2sd.renderer.so.Rectangle(tempPt.getX(),tempPt.getY(),0.00000000000001,0.00000000000001);
                        }
                    }
                    var distance = 0;
                    //if 1 point circle with width
                    if(geoCoords.length === 1 && modsAM && modsAM.length > 0)
                    {
                        distance = (modsAM[modsAM.length-1] * 2);
                    }
                    else
                    {
                        distance = this.measureDistance(controlPointBounds.getY(),
                                                            controlPointBounds.getX(),
                                                            controlPointBounds.getBottom(),
                                                            controlPointBounds.getRight(),
                                                            "meters");
                    }
                    distance = distance * 1.1;
                    
                    var long = controlPointBounds.getCenterX();
                    var lat = controlPointBounds.getCenterY();
                    LookAtTag += "<longitude>" + long + "</longitude>";
                    LookAtTag += "<latitude>" + lat + "</latitude>";
                    //LookAtTag += "<altitude>" + number + "</altitude>";
                    LookAtTag += "<heading>" + 0 + "</heading>";
                    LookAtTag += "<tilt>" + 0 + "</tilt>";
                    LookAtTag += "<range>" + distance + "</range>";
                    LookAtTag += "<altitudeMode>" + "absolute" + "</altitudeMode>";
                    LookAtTag += "</LookAt>";

                }
                //add <LookAt> tag//////////////////////////////////////////////
                return LookAtTag;
    };
    


sec.web.renderer.utilities.JavaRendererUtilities.HOSTILE_FILL_COLOR = "FFFF8080";
sec.web.renderer.utilities.JavaRendererUtilities.FRIENDLY_FILL_COLOR = "FF80E0FF";
sec.web.renderer.utilities.JavaRendererUtilities.NEUTRAL_FILL_COLOR = "FFAAFFAA";
sec.web.renderer.utilities.JavaRendererUtilities.UNKNOWN_FILL_COLOR = "FFFFFF80";

