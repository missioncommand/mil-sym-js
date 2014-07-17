var sec = sec || {};
/** namespace */
sec.web = sec.web || {};
sec.web.renderer = sec.web.renderer || {};
/** @class */
sec.web.renderer.SECWebRenderer = (function () {
    //private vars
    var CYLINDER = "CYLINDER-------",
        ORBIT = "ORBIT----------",
        ROUTE = "ROUTE----------",
        POLYGON = "POLYGON--------",
        RADARC = "RADARC---------",
        POLYARC = "POLYARC--------",
        CAKE = "CAKE-----------",
        TRACK = "TRACK----------",
        CURTAIN = "CURTAIN--------",
        ATTRIBUTES = "attributes",
        MIN_ALT = "minalt",
        MAX_ALT = "maxalt",
        RADIUS1 = "radius1",
        RADIUS2 = "radius2",
        LEFT_AZIMUTH = "leftAzimuth",
        RIGHT_AZIMUTH = "rightAzimuth",
        MIN_ALT_DEFAULT= 0.0,
        MAX_ALT_DEFAULT= 100.0,
        RADIUS1_DEFAULT= 50.0,
        RADIUS2_DEFAULT= 100.0,
        LEFT_AZIMUTH_DEFAULT= 0.0,
        RIGHT_AZIMUTH_DEFAULT= 90.0,
        ERR_ATTRIBUTES_NOT_FORMATTED = "{\"type\":\"error\",\"error\":\"The attribute paramaters are not formatted correctly",
        DEFAULT_ATTRIBUTES = "[{radius1:50.0,radius2:100.0,minalt:0.0,maxalt:100.0,rightAzimuth:90.0,leftAzimuth:0.0}]",
        spsPortNumber = -1,
        ErrorLogger = armyc2.c2sd.renderer.utilities.ErrorLogger,
        SymbolUtilities = armyc2.c2sd.renderer.utilities.SymbolUtilities,
        JavaRendererUtilities = sec.web.renderer.utilities.JavaRendererUtilities,
        Shape3DHandler = sec.web.renderer.Shape3DHandler,
        MilStdIconRenderer = null;
    
    //constructor code
    if(armyc2.c2sd.renderer.MilStdIconRenderer)
    {
        MilStdIconRenderer = armyc2.c2sd.renderer.MilStdIconRenderer;
    }
    else
    {
        armyc2.c2sd.renderer.utilities.SymbolDefTable.init();
    }
    

    
return{    
    //public vars
    //publicVar : "I'm a public var",
    
    
    
    setLoggingLevel: function(level)
    {
        ErrorLogger.setLevel(level);
    },
          
    /**
     * Renders all multi-point symbols, creating KML that can be used to draw
     * it on a Google map.  Multipoint symbols cannot be draw the same 
     * at different scales. For instance, graphics with arrow heads will need to 
     * redraw arrowheads when you zoom in on it.  Similarly, graphics like a 
     * Forward Line of Troops drawn with half circles can improve performance if 
     * clipped when the parts of the graphic that aren't on the screen.  To help 
     * readjust graphics and increase performance, this function requires the 
     * scale and bounding box to help calculate the new locations.
     * @param {String} id A unique identifier used to identify the symbol by Google map. 
     * The id will be the folder name that contains the graphic.
     * @param {String} name a string used to display to the user as the name of the 
     * graphic being created.
     * @param {String} description a brief description about the graphic being made and 
     * what it represents.
     * @param {String} symbolCode A 15 character symbolID corresponding to one of the
     * graphics in the MIL-STD-2525C
     * @param {String} controlPoints The vertices of the graphics that make up the
     * graphic.  Passed in the format of a string, using decimal degrees 
     * separating lat and lon by a comma, separating coordinates by a space.  
     * The following format shall be used "x1,y1[,z1] [xn,yn[,zn]]..."
     * @param {String} altitudeMode Indicates whether the symbol should interpret 
     * altitudes as above sea level or above ground level. Options are 
     * "clampToGround", "relativeToGround" (from surface of earth), "absolute" 
     * (sea level), "relativeToSeaFloor" (from the bottom of major bodies of 
     * water),"none" for non-three dimensions symbology.
     * @param {Number} scale A number corresponding to how many meters one meter of our 
     * map represents. A value "50000" would mean 1:50K which means for every 
     * meter of our map it represents 50000 meters of real world distance.
     * @param {String} bbox The viewable area of the map.  Passed in the format of a
     * string "lowerLeftX,lowerLeftY,upperRightX,upperRightY." Not required
     * but can speed up rendering in some cases.
     * example: "-50.4,23.6,-42.2,24.2"
     * @param {Object} modifiers An Object representing all the possible symbol 
     * modifiers represented in the MIL-STD-2525C.  Key values come from
     * MilStdAttributes, ModifiersTG and ModifiersUnits 
     * example: {"C":"4","Z":"300","AN":[100,200]}}
     * @param {Number} format An enumeration: 0 for KML, 1 for JSON.
     * @param {Number} symStd An enumeration: 0 for 2525Bch2, 1 for 2525C.
     * @return A JSON string representation of the graphic.
     */        
    RenderSymbol: function(id, name, description, symbolCode, controlPoints, altitudeMode, scale, bbox, modifiers, format, symStd)
    {
        var output = "";
        try 
        {
            
            if (JavaRendererUtilities.is3dSymbol(symbolCode, modifiers))
            {
                if (!(altitudeMode && altitudeMode.length))
                    altitudeMode = "relativeToGround";
                
                output = this.RenderMilStd3dSymbol(name, id, symbolCode, description, altitudeMode, controlPoints,
                        modifiers);
            
                //get modifiers/////////////////////////////////////////////////
                var modifierKML = sec.web.renderer.MultiPointHandler.getModifierKML(id, name, description, symbolCode, controlPoints,
                        scale, bbox, modifiers, format,symStd);

                modifierKML += "</Folder>";

                output = output.replace("</Folder>", modifierKML);
            
                // Check the output of the 3D Symbol Drawing.  If this returned an error
                // it should either be "" or it should be a JSON string starting with "{".
                // This really is not a good solution, but was up to 13.0.6 and had to make
                // this bug fix in quick turnaround.  More consistent error handling should
                // be done through code.
               
                if (output ==="") {
                    output = sec.web.renderer.MultiPointHandler.RenderSymbol(id, name, description, symbolCode, controlPoints,
                        scale, bbox, modifiers, format,symStd);
                }
            }
            else//*/
            {
                output = sec.web.renderer.MultiPointHandler.RenderSymbol (id, name, description, symbolCode, controlPoints, scale, bbox, modifiers, format, symStd);
            }
            //console.dir(output);
            return output;
        } 
        catch (err) 
        {
            output = "{\"type\":'error',error:'There was an error creating the MilStdSymbol - " + err.name + ":" + err.message + "'}";
            ErrorLogger.LogException("SECWebRenderer", "RenderSymbol", err, ErrorLogger.WARNING);
        }

        return output;
    },
    /**
     * Multipoint Rendering on flat 2D maps
     * @param {String} id A unique ID for the symbol.  only used in KML currently
     * @param {String} name description
     * @param {String} description description
     * @param {String} symbolCode
     * @param {String} controlPoints
     * @param {Number} pixelWidth pixel dimensions of the viewable map area
     * @param {Number} pixelHeight pixel dimensions of the viewable map area
     * @param {String} bbox The viewable area of the map.  Passed in the format of a
     * string "lowerLeftX,lowerLeftY,upperRightX,upperRightY."
     * example: "-50.4,23.6,-42.2,24.2"
     * @param {Object} An Object representing all the possible symbol 
     * modifiers represented in the MIL-STD-2525C.  Key values come from
     * MilStdAttributes, ModifiersTG and ModifiersUnits 
     * example: {"C":"4","Z":"300","AN":[100,200]}}
     * @param {Number} format An enumeration: 0 for KML, 1 for JSON.
     * @param {Number} symStd An enumeration: 0 for 2525Bch2, 1 for 2525C.
     * @return {String} A JSON or KML string representation of the graphic.
     */             
    RenderSymbol2D: function(id, name, description, symbolCode, controlPoints, pixelWidth, pixelHeight, bbox, modifiers, format, symStd)
    {
        var output = "";
        try 
        {
            output = sec.web.renderer.MultiPointHandler.RenderSymbol2D (id, name, description, symbolCode, controlPoints, pixelWidth, pixelHeight, bbox, modifiers, format, symStd);
        }
        catch (exc) 
        {
            output = "{\"type\":'error',error:'There was an error creating the MilStdSymbol: " + symbolCode + " - " + exc.toString () + "'}";
            ErrorLogger.LogException("SECWebRenderer", "RenderSymbol2D", exc, ErrorLogger.WARNING);
        }
        return output;
    },
      
    /**
     * Creates a 3D symbol to be displayed on some 3D globe surface.  Generates 
     * Keyhole Markup Language (KML) to return that specifies the points and format of 
     * the rendering.
     * <br/>
     * Control points should be of the format of:
     * <tr><code>"x,y,z [x,y,z]..."</code></tr>
     * Attributes should be passed in as a JSON array.  If more than one set of 
     * parameters are passed in as an array or more than one item, they will map 
     * to the vertex specified in the control points.  The attributes are
     * of the format:
     * <tr><code>{"attributes":[{"<i>attribute1</i>":<i>value</i>,...},{<i>[optional]</i>]}</code></tr>
     * 
     * @param {String} name The user displayed name for the symbol.  Users will use this 
     * to identify with the symbol.
     * @param {String} id An internally used unique id that developers can use to 
     * uniquely distinguish this symbol from others.
     * @param {String} shapeType A 15 character ID of the type of symbol to draw.
     * @param {String} description A brief description of what the symbol represents.  
     * Generic text that does not require any format.
     * @param {String} color The fill color of the graphic
     * @param {String} controlPoints The vertices of the shape.  The number of required
     * vertices varies based on the shapeType of the symbol.  The simplest shape 
     * requires at least one point.  Shapes that require more points than 
     * required will ignore extra points.  Format for numbers is as follows: 
     * <br/><br/>
     * "x,y,z [x,y,z ]..."
     * @param {String} AttributesArray A JS array holding the parameters for the 
     * shape.  Attributes should be of the following format: <br/><br/>
     * <tr><code>[{"<i>attribute1</i>":<i>value</i>,...},{<i>[optional]</i>}]</code></tr>
     * one attribute is "altitudeMode" which indicates whether the symbol should interpret 
     * altitudes as above sea level or above ground level. Options are 
     * "relativeToGround" (from surface of earth), "absolute" (sea level), 
     * "relativeToSeaFloor" (from the bottom of major bodies of water).
     * @return {String} A KML string that represents a placemark for the 3D shape
     */
    Render3dSymbol:function (name, id, shapeType, description, color, controlPoints, AttributesArray) 
    {
        var returnValue = "";
        try {
            //alert('3d');
            //var output =  new sec.geo.utilities.StringBuilder ();
            //var modifiers =  new sec.web.renderer.SymbolModifiers ();
            //var attributesJSON;
            var attributes = {};//new java.util.HashMap();
            attributes.AM_DISTANCE=new java.util.ArrayList();
            attributes.X_ALTITUDE_DEPTH=new java.util.ArrayList();
            attributes.AN_AZIMUTH=new java.util.ArrayList();
            attributes.ALT_MODE=[];

            if (AttributesArray === null || attributes === "") {
                //attributesJSON =  new sec.web.json.utilities.JSONObject ("[{radius1:50.0,radius2:100.0,minalt:0.0,maxalt:100.0,rightAzimuth:90.0,leftAzimuth:0.0}]");
                AttributesArray=[{innerRadius:50.0,radius:100.0,minAlt:0.0,maxAlt:100.0,rightAzimuth:90.0,leftAzimuth:0.0}];
            }

            var attributesArrayLength = AttributesArray.length;
            
            if (attributesArrayLength > 0) {
                for (var i = 0; i < attributesArrayLength; i++) 
                {
                    if(AttributesArray[i].innerRadius !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].innerRadius));                          
                    }
                    
                    if(AttributesArray[i].radius !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].radius));
                    }
                    else if(AttributesArray[i].width !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].width));
                    }
                    else if(AttributesArray[i].leftWidth !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].leftWidth));
                    }

                    if(AttributesArray[i].rightWidth !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].rightWidth));                          
                    }
                    
                    if(AttributesArray[i].minAlt !== undefined)
                    {
                        attributes.X_ALTITUDE_DEPTH.add(new Double(AttributesArray[i].minAlt));
                    }

                    if(AttributesArray[i].maxAlt !== undefined)
                    {
                        attributes.X_ALTITUDE_DEPTH.add(new Double(AttributesArray[i].maxAlt));
                    }

                    if(AttributesArray[i].leftAzimuth !== undefined)
                    {
                        attributes.AN_AZIMUTH.add(new Double(AttributesArray[i].leftAzimuth));                          
                    }

                    if(AttributesArray[i].rightAzimuth !== undefined)
                    {
                        attributes.AN_AZIMUTH.add(new Double(AttributesArray[i].rightAzimuth));                          
                    }
                    
                    if(AttributesArray[i].altitudeMode !== undefined)
                    {
                        //attributes.ALT_MODE.add(AttributesArray[i].altitudeMode);
                        attributes.ALT_MODE.push(AttributesArray[i].altitudeMode);
                    }
                    else
                    {
                        attributes.ALT_MODE.push("absolute");
                    }
                }
            }


            if(shapeType === CURTAIN)// || shapeType === TRACK)
            {//CURTAIN is basically a TRACK without the width.
                shapeType = TRACK;
                var lenX = attributes.X_ALTITUDE_DEPTH.array.length;
                var lenAM = attributes.AM_DISTANCE.array.length;

                var pointCount = 0;
                var coords = controlPoints.split(" ");
                pointCount = coords.length;

                var i = 0;
                if(lenX===2)
                {
                    var curtainMinAlt = new Double(attributes.X_ALTITUDE_DEPTH.get(0).value);
                    var curtainMaxAlt = new Double(attributes.X_ALTITUDE_DEPTH.get(1).value);
                    lenX = pointCount * 2;
                    attributes.X_ALTITUDE_DEPTH.clear();
                    for(i = 0; i < lenX; i++)
                    {
                        if(i%2===0)
                            attributes.X_ALTITUDE_DEPTH.add(curtainMinAlt);
                        else
                            attributes.X_ALTITUDE_DEPTH.add(curtainMaxAlt);
                    }
                }
                else
                {
                    var curtainMinAlt = new Double(1);
                    var curtainMaxAlt = new Double(10000);
                    lenX = pointCount * 2;
                    attributes.X_ALTITUDE_DEPTH.clear();
                    for(i = 0; i < lenX; i++)
                    {
                        if(i%2===0)
                            attributes.X_ALTITUDE_DEPTH.add(curtainMinAlt);
                        else
                            attributes.X_ALTITUDE_DEPTH.add(curtainMaxAlt);
                    }
                }
                
                attributes.AM_DISTANCE.clear();
                lenAM = pointCount * 2;
                var curtainWidth = new Double(1);
                for(i = 0; i < lenAM; i++)
                {
                    attributes.AM_DISTANCE.add(curtainWidth);
                }   
                
                for(i = 1; i < pointCount; i++)
                {
                    if(AttributesArray[0].altitudeMode !== undefined)
                    {
                        attributes.ALT_MODE.push(AttributesArray[0].altitudeMode);
                    }
                    else
                    {
                        attributes.ALT_MODE.push("absolute");
                    }
                    
                }
            }
            
            //Make sure point order is good for POLYARC
            if(shapeType === POLYARC)
            {
                var coords = controlPoints.split(" ");
                var clockWise = false;
                if(this.CalculateSignedAreaOfPolygon(coords)<0)
                {
                    clockWise = true;
                }
                
                if(clockWise)//we want CCW
                {
                    coords = coords.reverse();
                    controlPoints = "";
                    var len = coords.length;
                    
                    for(var i = 0; i < (len); i++)
                    {
                        if(i < len - 1)
                        {
                            controlPoints += " " + coords[i];
                        }
                        else
                        {
                            controlPoints = coords[i] + controlPoints;
                        }
                    }
                }
            }

            returnValue = sec.web.renderer.Shape3DHandler.render3dSymbol (name, id, shapeType, description, color, controlPoints, attributes);
        } 
        catch (err) 
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("SECWebRenderer", "Render3dSymbol()", err);
            return "";

        }
        return returnValue;
    },     
        
    CalculateSignedAreaOfPolygon: function(coords)
    {
        //calculating the signed area will tell you which direction the points
        //are going.  Negative = Clock-wise, Positive = counter clock-wise
        //A = 1/2 * (x1*y2 - x2*y1 + x2*y3 - x3*y2 + ... + xn*y1 - x1*yn)
        var x1,y1,x2,y2, coord, signedArea=0, len=0;
        len = coords.length;
        for(var i = 0; i < len; i++)
        {
            
            
            if(i < len - 1)
            {
                coord = coords[i].split(",");
                x1 = parseFloat(coord[0]);
                y1 = parseFloat(coord[1]);
                coord = coords[i+1].split(",");
                x2 = parseFloat(coord[0]);
                y2 = parseFloat(coord[1]);
            }
            else
            {
                coord = coords[i].split(",");
                x1 = parseFloat(coord[0]);
                y1 = parseFloat(coord[1]);
                coord = coords[0].split(",");
                x2 = parseFloat(coord[0]);
                y2 = parseFloat(coord[1]);
            }
            
            signedArea += (x1*y2 - x2*y1);
        }
        
        return signedArea/2;
    },
    
         /**
     * Creates a 3D symbol from the MilStd2525B USAS or MIL-STD-2525C to be 
     * displayed on a 3D globe surface.  Only certain symbols from the MIL-STD
     * can be displayed in 3D.   Most of these are graphics that fall under Fire
     * Support.  Any graphic that has an X modifier (altitude/depth) should
     * have a 3D representation.  Generates 
     * Keyhole Markup Language (KML) to return that 
     * specifies the points and format of 
     * the rendering.
     * <br/>
     * Control points should be of the format of:
     * <tr><code>"x,y,z [x,y,z]..."</code></tr>
     * 
     * 
     * @param name The user displayed name for the symbol.  Users will use this 
     * to identify with the symbol.
     * @param id An internally used unique id that developers can use to 
     * uniquely distinguish this symbol from others.
     * @param symbolCode A 15 character ID of the type of symbol to draw.  Only
     * symbols with an X modifier from the standard will draw.
     * @param description A brief description of what the symbol represents.  
     * Generic text that does not require any format.  
     * @param altitudeMode Indicates whether the symbol should interpret 
     * altitudes as above sea level or above ground level. Options are 
     * "relativeToGround" (from surface of earth), "absolute" (sea level), 
     * "relativeToSeaFloor" (from the bottom of major bodies of water).
     * @param controlPoints The vertices of the shape.  The number of required
     * vertices varies based on the shapeType of the symbol.  The simplest shape 
     * requires at least one point.  Shapes that require more points than 
     * required will ignore extra points.  Format for numbers is as follows: 
     * <br/><br/>
     * "x,y,z [x,y,z ]..."
     * @modifiers a JSON string containing the attributes of the object.  These
     * attributes can be in MIL-STD-2525BCh2 USAS 13-14 or MIL-STD-2525C. The 
     * format of the modifiers are: 
     * <br/>
     * {"modifiers":{"<i>attribute1</i>":<i>value</i>}}
     * @return A KML string that represents a placemark for the 3D shape
     */
    RenderMilStd3dSymbol: function(name, id, symbolCode, 
            description, 
            altitudeMode,
            controlPoints,
            modifiers) {
               
        var symbolId = symbolCode.substring(4,10);
        
        var attributes = {};//new java.util.HashMap();
        attributes.AM_DISTANCE=new java.util.ArrayList();
        attributes.X_ALTITUDE_DEPTH=new java.util.ArrayList();
        attributes.AN_AZIMUTH=new java.util.ArrayList();
        attributes.ALT_MODE=[];
        
        var output = "";
        
        var convertedAltitudeMode = null;//altitudeMode;//sec.geo.kml.KmlOptions.AltitudeMode.RELATIVE_TO_GROUND;

        // Convert altitude mode to an enum that we understand.  If it does not
        // understand or is "", then convert to ALTITUDE_RELATIVE_TO_GROUND.
        if (altitudeMode && altitudeMode.length)
        {
            convertedAltitudeMode = altitudeMode;////KmlOptions.AltitudeMode.fromString(altitudeMode);
        }
        else
        {
            convertedAltitudeMode = "relativeToGround";
        }
        
        try
        {
        
            var modifiersJSON;
            
            var altitudeDepthJSON = null;
            var distanceJSON = null;
            var azimuthJSON = null;
            var altitudeDepthLength = 0;
            var distanceLength = 0;
            var azimuthLength = 0;
            var color = "";
            //modifiers=JSON.parse(modifiers);          
            if (modifiers)
            {
                if(modifiers && modifiers.modifiers)
                    modifiersJSON = modifiers.modifiers;
                else
                    modifiersJSON = modifiers;

                if (modifiersJSON.X)
                {
                    altitudeDepthJSON = modifiersJSON.X;
                    altitudeDepthLength = altitudeDepthJSON.length;
                }                
                else if (modifiersJSON.altitudeDepth)
                {
                    altitudeDepthJSON = modifiersJSON.altitudeDepth;
                    altitudeDepthLength = altitudeDepthJSON.length;
                }                

                if (modifiersJSON.AN)
                {
                    azimuthJSON = modifiersJSON.AN;
                    azimuthLength = azimuthJSON.length;
                }
                else if (modifiersJSON.azimuth)
                {
                    azimuthJSON = modifiersJSON.azimuth;
                    azimuthLength = azimuthJSON.length;
                }

                if (modifiersJSON.AM)
                {
                    distanceJSON = modifiersJSON.AM;
                    distanceLength = distanceJSON.length;
                } 
                else if (modifiersJSON.distance)
                {
                    distanceJSON = modifiersJSON.distance;
                    distanceLength = distanceJSON.length;
                } 
                
                if (modifiersJSON.fillColor)
                {
                    color = modifiersJSON.fillColor;
                }
                else
                {   
                    color = SymbolUtilities.getFillColorOfAffiliation(symbolCode);
                    color.A = 170;
                    color = color.toHexString().substring(1);
                    //color = JavaRendererUtilities.getAffiliationFillColor(symbolCode);
                    // ensure that some color is selected.  If no color can be
                    // found, use black.
                    if (color === null)
                    {
                        color = "AA000000";
                    }
                }
                
                var coords = controlPoints.split(" ");
                var pointCount = coords.length;
                for(var i = 0; i < pointCount; i++)
                {
                        attributes.ALT_MODE.push(convertedAltitudeMode);
                }
                
                color = JavaRendererUtilities.ARGBtoABGR(color);
                                
                for (var i=0; i < altitudeDepthLength; i++)
                {
                    // if it's a killbox, need to set minimum alt to 0.
                    if (symbolId.substring(0,3)===("AJP"))
                    {
                        attributes.X_ALTITUDE_DEPTH.add(new Double(0));
                        i++;
                    }                                        
                    attributes.X_ALTITUDE_DEPTH.add(new Double(altitudeDepthJSON[i]));
                }
                for (var i=0; i < distanceLength; i++)
                {
                    // If this is a 'track' type graphic, then we need to take the distance
                    // and divide it by half, than add it twice.  This is due 
                    // to the TAIS requirement that Tracks must have a left width 
                    // and a right width. 
                    if (symbolId.equals("ACAR--") || // ACA - rectangular
                        symbolId.equals("AKPR--") || // Killbox - rectangular
                        symbolId.equals("ALC---") || // air corricor
                        symbolId.equals("ALM---") || // MRR
                        symbolId.equals("ALS---") || // SAAFR
                        symbolId.equals("ALU---") || // unmanned aircraft
                        symbolId.equals("ALL---")) {  // LLTR) {
                        var width = distanceJSON[i] / 2;
                        attributes.AM_DISTANCE.add(new Double(width));
                        attributes.AM_DISTANCE.add(new Double(width));
                    } else {
                        attributes.AM_DISTANCE.add(new Double(distanceJSON[i]));
                    }
                }  

                if (symbolId.equals("ACAI--") || // ACA - irregular
                        symbolId.equals("AKPI--") || // Killbox - irregular
                        symbolId.equals("AAR---") || // ROZ
                        symbolId.equals("AAF---") || // SHORADEZ
                        symbolId.equals("AAH---") || // HIDACZ
                        symbolId.equals("AAM---") || // MEZ
                        symbolId.equals("AAML--") || // LOMEZ
                        symbolId.equals("AAMH--")) // HIMEZ
                {
                    output = Shape3DHandler.buildPolygon(controlPoints, id, name, 
                        description, color, attributes);
                }
                else if (symbolId.equals("ACAR--") || // ACA - rectangular
                        symbolId.equals("AKPR--") || // Killbox - rectangular
                        symbolId.equals("ALC---") || // air corricor
                        symbolId.equals("ALM---") || // MRR
                        symbolId.equals("ALS---") || // SAAFR
                        symbolId.equals("ALU---") || // unmanned aircraft
                        symbolId.equals("ALL---"))   // LLTR
                {
                    output = Shape3DHandler.buildTrack(controlPoints, id, name, 
                        description, color, attributes);
                }
                else if (symbolId.equals("ACAC--") || // ACA - circular
                        symbolId.equals("AKPC--"))    // Killbox - circular
                {
                    output = Shape3DHandler.buildCylinder(controlPoints, id, name, 
                        description, color, attributes);

                }   

            }
        }
        catch (je)
        {
            output = "";
            ErrorLogger.LogException("SECWebRenderer","RenderMilStd3dSymbol",je);
        } 
        return output;
    },
        
    ShouldClipMultipointSymbol: function(symbolID)
    {
        return sec.web.renderer.MultiPointHandler.ShouldClipSymbol (symbolID);
    },
            
    /**
     * Given a symbol code meant for a single point symbol, returns the
     * anchor point at which to display that image based off the image returned
     * from the URL of the SinglePointServer.
     *
     * @param symbolID - the 15 character symbolID of a single point MilStd2525
     * symbol.
     * @return A pixel coordinate of the format "anchorX,anchorY,SymbolBoundsX,
     * SymbolBoundsY,SymbolBoundsWidth,SymbolBoundsHeight,IconWidth,IconHeight".
     * Anchor, represents the center point of the core symbol within the image.
     * The image should be centered on this point.
     * Symbol bounds represents the bounding rectangle of the core symbol within
     * the image.
     * IconWidth/Height represents the height and width of the image in its
     * entirety.
     * Returns an empty string if an error occurs.
     */
    getSinglePointInfo: function(symbolID)
    {
        var info = "";
        
        if(MilStdIconRenderer !== null)
        {
            var modifiers = JavaRendererUtilities.createParameterMapFromURL(symbolID);
            var symbolID = modifiers["SYMBOLID"];
            modifiers["RENDER"] = false;
            var ii = MilStdIconRenderer.Render(symbolID, modifiers);

            var anchor = ii.getCenterPoint();
            var symbolBounds = ii.getSymbolBounds();
            var iconSize = ii.getImageBounds();

            info = anchor.getX() + "," + anchor.getY() + "," +
                    symbolBounds.getX() + "," + symbolBounds.getY() + "," +
                    symbolBounds.getWidth() + "," + symbolBounds.getHeight() + "," + 
                    iconSize.getWidth() + "," + iconSize.getHeight();
        }
        return info;
    },

    /**
     * Given a symbol code meant for a single point symbol, returns the
     * anchor point at which to display that image based off the image returned
     * from the URL of the SinglePointServer.
     * @param batch like "{"iconURLs":["SFGP------*****?size=35&T=Hello","SHGPE-----*****?size=50"]}"
     * @return like {"singlepoints":[{"x":0,"y":0,"boundsx":0,"boundsy":0,"boundswidth":35,"boundsheight":35,"iconwidth":35,"iconwidth":35}, ... ]}
     */
    getSinglePointInfoBatch: function(batch)
    {
        var info = "",
            sb = "";
        try
        {
            if(MilStdIconRenderer !== null)
            {

                //must escape '=' so that JSONObject can parse string
                //batch = batch.replace(/=/g, "%3D");

                var data = null;
                var jsonSPString = JSON.parse(batch);
                var jsa = jsonSPString["iconURLs"];
                var len = jsa.length;
                sb += ("{\"singlepoints\":[");
                var item = null;
                for(var i = 0; i < len; i++)
                {
                    if(i>0)
                    {
                        sb += (",");
                    }

                    info = jsa[i];
                    //System.out.println(info);
                    //info = java.net.URLDecoder.decode(info, "UTF-8");
                    //info = info.replace("%3D", "=");
                    //System.out.println(info);

                    var modifiers = JavaRendererUtilities.createParameterMapFromURL(info);
                    var symbolID = modifiers["SYMBOLID"];
                    modifiers["RENDER"]=false;
                    var ii = MilStdIconRenderer.Render(symbolID, modifiers);

                    var anchor = ii.getCenterPoint();
                    var symbolBounds = ii.getSymbolBounds();
                    var iconSize = ii.getImageBounds();

                    var item = "";
                    item += ("{\"x\":");
                    item += (anchor.getX());
                    item += (",\"y\":");
                    item += (anchor.getY());
                    item += (",\"boundsx\":");
                    item += (symbolBounds.getX());
                    item += (",\"boundsy\":");
                    item += (symbolBounds.getY());
                    item += (",\"boundswidth\":");
                    item += (symbolBounds.getWidth());
                    item += (",\"boundsheight\":");
                    item += (symbolBounds.getHeight());
                    item += (",\"iconwidth\":");
                    item += (iconSize.getWidth());
                    item += (",\"iconheight\":");
                    item += (iconSize.getHeight());
                    item += ("}");


                    sb += (item);
                }
                sb += ("]}");
            }
        }
        catch(exc)
        {
            ErrorLogger.LogException("SECWebRenderer","getSinglePointInfoBatch",exc);
        }
        return sb;
    },
            
    /**
     * Let's user choose between 2525Bch2 and 2525C.
     * Ideally, set only once at startup.
     * 2525Bch2 = 0, 2525C = 1.
     * @param {Number} symStd like armyc2.c2sd.renderer.utilities.RendererSettings.Symbology_2525C
     */
    setDefaultSymbologyStandard: function(symStd)
    {
        armyc2.c2sd.renderer.utilities.RendererSettings.setSymbologyStandard (symStd);
    }
            
};
}());
