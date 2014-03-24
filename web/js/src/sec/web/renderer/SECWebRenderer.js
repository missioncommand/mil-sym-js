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
        JavaRendererUtilities = sec.web.renderer.utilities.JavaRendererUtilities,
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
     * @param {Object} An Object representing all the possible symbol 
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
            /*
            if (JavaRendererUtilities.is3dSymbol(symbolCode, modifiers))
            {
                output = RenderMilStd3dSymbol(name, id, symbolCode, description, altitudeMode, controlPoints,
                        modifiers);
            
                //get modifiers/////////////////////////////////////////////////
                String modifierKML = MultiPointHandler.getModififerKML(id, name, description, symbolCode, controlPoints,
                        scale, bbox, modifiers, format,symStd);

                modifierKML += "</Folder>";

                output = output.replaceFirst("</Folder>", modifierKML);
            
                // Check the output of the 3D Symbol Drawing.  If this returned an error
                // it should either be "" or it should be a JSON string starting with "{".
                // This really is not a good solution, but was up to 13.0.6 and had to make
                // this bug fix in quick turnaround.  More consistent error handling should
                // be done through code.
               
                if (output.equals("") || output.startsWith("{")) {
                    output = MultiPointHandler.RenderSymbol(id, name, description, symbolCode, controlPoints,
                        scale, bbox, modifiers, format,symStd);
                }
            }
            else*/
            //{
                output = sec.web.renderer.MultiPointHandler.RenderSymbol (id, name, description, symbolCode, controlPoints, scale, bbox, modifiers, format, symStd);
            //}
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
     * @param {String} altitudeMode Indicates whether the symbol should interpret 
     * altitudes as above sea level or above ground level. Options are 
     * "relativeToGround" (from surface of earth), "absolute" (sea level), 
     * "relativeToSeaFloor" (from the bottom of major bodies of water).
     * @param {String} controlPoints The vertices of the shape.  The number of required
     * vertices varies based on the shapeType of the symbol.  The simplest shape 
     * requires at least one point.  Shapes that require more points than 
     * required will ignore extra points.  Format for numbers is as follows: 
     * <br/><br/>
     * "x,y,z [x,y,z ]..."
     * @param {String} AttributesArray A JS array holding the parameters for the 
     * shape.  Attributes should be of the following format: <br/><br/>
     * <tr><code>[{"<i>attribute1</i>":<i>value</i>,...},{<i>[optional]</i>}]</code></tr>
     * @return {String} A KML string that represents a placemark for the 3D shape
     */
    Render3dSymbol:function (name, id, shapeType, description, color, altitudeMode, controlPoints, AttributesArray) 
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

            if (AttributesArray === null || attributes === "") {
                //attributesJSON =  new sec.web.json.utilities.JSONObject ("[{radius1:50.0,radius2:100.0,minalt:0.0,maxalt:100.0,rightAzimuth:90.0,leftAzimuth:0.0}]");
                AttributesArray=[{radius1:50.0,radius2:100.0,minalt:0.0,maxalt:100.0,rightAzimuth:90.0,leftAzimuth:0.0}];
            }

            var attributesArrayLength = AttributesArray.length;
            
            if (attributesArrayLength > 0) {
                for (var i = 0; i < attributesArrayLength; i++) 
                {
                    if(AttributesArray[i].radius1 !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].radius1));
                    }
                    else if(AttributesArray[i].radius !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].radius));
                    }
                    else if(AttributesArray[i].innerRadius !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].innerRadius));                          
                    }
                    else if(AttributesArray[i].width !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].width));
                    }
                    else if(AttributesArray[i].leftWidth !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].leftWidth));
                    }

                    if(AttributesArray[i].radius2 !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].radius2));                          
                    }
                    else if(AttributesArray[i].rightWidth !== undefined)
                    {
                        attributes.AM_DISTANCE.add(new Double(AttributesArray[i].rightWidth));                          
                    }
                    
                    if(AttributesArray[i].minalt !== undefined)
                    {
                        attributes.X_ALTITUDE_DEPTH.add(new Double(AttributesArray[i].minalt));                          
                    }
                    else if(AttributesArray[i].minAlt !== undefined)
                    {
                        attributes.X_ALTITUDE_DEPTH.add(new Double(AttributesArray[i].minAlt));
                    }

                    if(AttributesArray[i].maxalt !== undefined)
                    {
                        attributes.X_ALTITUDE_DEPTH.add(new Double(AttributesArray[i].maxalt));                          
                    }
                    else if(AttributesArray[i].maxAlt !== undefined)
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
                if(attributes.X_ALTITUDE_DEPTH.size()===0)
                {
                    var curtainMinAlt = new Double(1);
                    var curtainMaxAlt = new Double(10000);
                    lenX = pointCount * 2;
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
            }

            returnValue = sec.web.renderer.Shape3DHandler.render3dSymbol (name, id, shapeType, description, color, altitudeMode, controlPoints, attributes);
        } 
        catch (err) 
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("SECWebRenderer", "Render3dSymbol()", err);
            return "";

        }
        return returnValue;
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
     * @param batch like {"iconURLs":["SFGP------*****?size=35&T=Hello","SHGPE-----*****?size=50"]}
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
                batch = batch.replace("=", "%3D");

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
                    info = info.replace("%3D", "=");
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
