var sec = sec || {};
/** namespace */
sec.web = sec.web || {};
sec.web.renderer = sec.web.renderer || {};
/** @class */
sec.web.renderer.MultiPointHandler = (function () {
    //private vars
    var ErrorLogger = armyc2.c2sd.renderer.utilities.ErrorLogger;
    var SymbolUtilities = armyc2.c2sd.renderer.utilities.SymbolUtilities;
    var ModifiersTG = armyc2.c2sd.renderer.utilities.ModifiersTG;
    var MilStdAttributes = armyc2.c2sd.renderer.utilities.MilStdAttributes;
    var SymbolDefTable = armyc2.c2sd.renderer.utilities.SymbolDefTable;
    var RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings;
    var _appletChecked = false;
    var _appletUrl = null;
    
    //decimal lat/lon accuracy by decimal place
    //7DP ~= 11.132mm (en.wikipedia.org/wiki/Decimal_degrees)
    var _decimalAccuracy = 7;
    
    //constructor code
    
    //private functions
    /**\
     * 
     * @param {String} symbolID
     * @param {Number} dc draw category
     * @param {Array} AM contains distance values
     * @param {Array} AN contains azimuth values
     * @returns {Object} {hasRequireModifiers:Boolean,message:""} 
     * message will be set to "" if any required values are present.  
     * Otherwise, it will be populated with a message explaining what values 
     * may be missing.
     */      
    function hasRequiredModifiers(symbolID, dc, AM, AN)
    {
        var message = "";
                
        if((dc >= 16 && dc <= 20))
        {
            if(dc === SymbolDefTable.DRAW_CATEGORY_CIRCULAR_PARAMETERED_AUTOSHAPE)//16
            {
                if(AM !== null && AM.length > 0)
                    return {hasRequiredModifiers:true,message:true};
                else
                {
                    message += symbolID + " requires a modifiers object that has 1 distance/AM value.";
                    return {hasRequiredModifiers:false,message:message};
                }
            }
            else if(dc === SymbolDefTable.DRAW_CATEGORY_RECTANGULAR_PARAMETERED_AUTOSHAPE)//17
            {
                if(AM !== null && AM.length >= 2 &&
                    AN !== null && AN.length >= 1)
                    return {hasRequiredModifiers:true,message:true};
                else
                {
                    message += symbolID + " requires a modifiers object that has 2 distance/AM values and 1 azimuth/AN value.";
                    return {hasRequiredModifiers:false,message:message};
                }
            }
            else if(dc === SymbolDefTable.DRAW_CATEGORY_SECTOR_PARAMETERED_AUTOSHAPE)//18
            {
                if(AM !== null && AM.length >= 2 &&
                    AN !== null && AN.length >= 2)
                    return {hasRequiredModifiers:true,message:true};
                else
                {
                    message += symbolID + " requires a modifiers object that has 2 distance/AM values and 2 azimuth/AN values per sector.  The first sector can have just one AM value although it is recommended to always use 2 values for each sector.";
                    return {hasRequiredModifiers:false,message:message};
                }
            }
            else if(dc === SymbolDefTable.DRAW_CATEGORY_CIRCULAR_RANGEFAN_AUTOSHAPE)//19
            {
                if(AM !== null && AM.length > 0)
                    return {hasRequiredModifiers:true,message:true};
                else
                {
                    message += symbolID + " requires a modifiers object that has at least 1 distance/AM value";
                    return {hasRequiredModifiers:false,message:message};
                }
            }
            else if(dc === SymbolDefTable.DRAW_CATEGORY_TWO_POINT_RECT_PARAMETERED_AUTOSHAPE)//20
            {
                if(AM !== null && AM.length > 0)
                    return {hasRequiredModifiers:true,message:true};
                else
                {
                    message += symbolID + " requires a modifiers object that has 1 distance/AM value.";
                    return {hasRequiredModifiers:false,message:message};
                }
            }
            else
            {
                //should never get here
                return {hasRequiredModifiers:true,message:true};
            }
        }
        else
        {
            //no required parameters
            return {hasRequiredModifiers:true,message:true};
        }   
    };
    
return{    
    //public vars
    MODIFIER_HEADER: "modifiers",
    QUANTITY: "quantity",//C
    REINFORCE_OR_REDUCED: "reinforcedOrReduced",
    STAFF_COMMENTS: "staffComments",
    ADDITIONAL_INFO_1: "additionalInfo1",//H
    ADDITIONAL_INFO_2: "additionalInfo2",//H1
    ADDITIONAL_INFO_3: "additionalInfo3",//H2
    EVALUATION_RATION: "evaluationRating",
    COMBAT_EFFECTIVENESS: "combatEffectiveness",
    SIGNATURE_EQUIPMENT: "signatureEquipment",
    HIGHER_FORMATION: "higherFormation",
    HOSTILE: "hostile",//N
    IFFSIFF: "iffSif",
    DIRECTION_OF_MOVEMENT: "directionOfMovement",//Q
    UNIQUE_DESIGNATION_1: "uniqueDesignation1",//T
    UNIQUE_DESIGNATION_2: "uniqueDesignation2",//T1
    EQUIPMENT_TYPE: "equipmentType",//V
    DATE_TIME_GROUP_1: "dateTimeGroup1",//W
    DATE_TIME_GROUP_2: "dateTimeGroup2",//W1
    DATE_TIME_GROUP_3: "dateTimeGroup3",//W2
    ALTITUDE_DEPTH: "altitudeDepth",//X
    LOCATION: "location",//Y
    SPEED: "speed",
    SPECIAL_C2_HQ: "specialC2Headquarters",
    DISTANCE: "distance",//AM
    AZIMUTH: "azimuth",//AN
    FILL_COLOR: "fillColor",
    LINE_COLOR: "lineColor",
    LINE_THICKNESS: "lineThickness",
    
    SYMBOL_FILL_ICON_SIZE: "symbolFillIconSize",
    SYMBOL_FILL_IDS: "symbolFillIds",
    SYMBOL_LINE_IDS: "symbolLineIds",
    
    /**
    * 2525Bch2 and USAS 13/14 symbology
    */
    Symbology_2525Bch2_USAS_13_14: 0,
    /**
    * 2525C, which includes 2525Bch2 & USAS 13/14
    */
    Symbology_2525C: 1,
    
    //public functions
    /**
     * GE has the unusual distinction of being an application with coordinates outside its own extents.
     * It appears to only be a problem when lines cross the IDL
     * @param {Number} leftLongitude
     * @param {Number} rightLongitude
     * @param {Array} pts2d the client points (armyc2.c2sd.graphics2d.Point2D)
     */
    NormalizeGECoordsToGEExtents: function(leftLongitude,
            rightLongitude, pts2d)
    {
        try
        {
            var j=0;
            var x=0,y=0;
            var pt2d=null;
            for(j=0;j<pts2d.length;j++)
            {
                pt2d=pts2d[j];
                x=pt2d.getX();
                y=pt2d.getY();
                while(x<leftLongitude)
                    x+=360;
                while(x>rightLongitude)
                    x-=360;

                pt2d=new armyc2.c2sd.graphics2d.Point2D(x,y);
                pts2d[j]= pt2d;
            }
        }
        catch(err)
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","NormalizeGECoordsToGEExtents",err);
        }
    },
            
    /**
     * GE recognizes coordinates in the range of -180 to +180
     * @param {armyc2.c2sd.graphics2d.Point2D} pt2d
     */
    NormalizeCoordToGECoord: function(pt2d)
    {
        var ptGeo=null;
        try
        {
            var x=pt2d.getX(),y=pt2d.getY();
            while(x<-180)
                x+=360;
            while(x>180)
                x-=360;

            ptGeo=new armyc2.c2sd.graphics2d.Point2D(x,y);
        }
        catch (err)
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","NormalizeCoordToGECoord",err);
        }
        return ptGeo;
    },
            
    /**
     * We have to ensure the bounding rectangle at least includes the symbol or
     * there are problems rendering, especially when the symbol crosses the IDL
     * @param {String} controlPoints the client symbol anchor points
     * @param {String} bbox the original bounding box
     * @returns {String} the modified bounding box
     */    
    getBoundingRectangle: function(controlPoints, bbox)
    {
        var bbox2="";
        try
        {

            var left = 0,
                right = 0,
                top = 0,
                bottom = 0;

            var coordinates = controlPoints.split(" ");
            //ArrayList<Point2D.Double> geoCoords = new ArrayList();
            var len = coordinates.length;
            var i=0;
            left=Number.MAX_VALUE;
            right=Number.MIN_VALUE;
            top=Number.MIN_VALUE;
            bottom=Number.MAX_VALUE;
            for(i=0;i<len;i++)
            {
                var coordPair = coordinates[i].split(",");
                var latitude = coordPair[1].trim();
                var longitude = coordPair[0].trim();
                //geoCoords.add(new Point2D.Double(longitude, latitude));
                if(longitude<left)
                    left=longitude;
                if(longitude>right)
                    right=longitude;
                if(latitude>top)
                    top=latitude;
                if(latitude<bottom)
                    bottom=latitude;
            }
            bbox2=left.toString()+","+bottom.toString()+","+right.toString()+","+top.toString();
        }
        catch(err)
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","getBoundingRectangle",err);
        }
        return bbox2;
    },
    
    /**
     * need to use the symbol to get the upper left control point
     * in order to produce a valid PointConverter
     * @param {Array} geoCoords the client points (armyc2.c2sd.graphics2d.Point2D)
     */
    getControlPoint: function(geoCoords)
    {
        var pt2d=null;
        try
        {
            var left=Number.MAX_VALUE;
            var right=Number.MIN_VALUE;
            var top=Number.MIN_VALUE;
            var bottom=Number.MAX_VALUE;
            var ptTemp=null;
            for(var j=0;j<geoCoords.length;j++)
            {
                ptTemp=geoCoords[j];
                if(ptTemp.getX()<left)
                    left=ptTemp.getX();
                if(ptTemp.getX()>right)
                    right=ptTemp.getX();
                if(ptTemp.getY()>top)
                    top=ptTemp.getY();
                if(ptTemp.getY()<bottom)
                    bottom=ptTemp.getY();
            }
            pt2d=new armyc2.c2sd.graphics2d.Point2D(left,top);
        }
        catch(err)
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","getControlPoint",err);
        }
        return pt2d;
    },

    /**
     * Assumes a reference in which the north pole is on top.
     * @param {Array} geoCoords the client points 
     * (armyc2.c2sd.graphics2d.Point2D)
     * @return {armyc2.c2sd.graphics2d.Point2D} the upper left corner of the MBR
     *  containing the geographic coordinates
     */
    getGeoUL: function(geoCoords)
    {
        var ptGeo=null;
        try
        {
            var j=0;
            var pt=null;
            var left=geoCoords[0].x;
            var top=geoCoords[0].y;
            var right=geoCoords[0].x;
            var bottom=geoCoords[0].y;
            for(j=1;j<geoCoords.length;j++)
            {
                pt=geoCoords[j];
                if(pt.getX()<left)
                    left=pt.getX();
                if(pt.getX()>right)
                    right=pt.getX();
                if(pt.getY()>top)
                    top=pt.getY();
                if(pt.getY()<bottom)
                    bottom=pt.getY();
            }
            //if geoCoords crosses the IDL
            if(right-left>180)
            {
                //There must be at least one x value on either side of +/-180. Also, there is at least
                //one positive value to the left of +/-180 and negative x value to the right of +/-180.
                //We are using the orientation with the north pole on top so we can keep
                //the existing value for top. Then the left value will be the least positive x value
                left=geoCoords[0].x;
                for(j=1;j<geoCoords.length;j++)
                {
                    pt=geoCoords[0];
                    if(pt.getX()>0 && pt.getX()<left)
                        left=pt.getX();
                }
            }
            ptGeo=new armyc2.c2sd.graphics2d.Point2D(left,top);
        }
        catch(err)
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","getGeoUL",err);
        }
        return ptGeo;
    },
            
    /**
     * 
     * @param {Array} geoCoords the client points 
     * (armyc2.c2sd.graphics2d.Point2D)
     * @return {Boolean} 
     */
     crossesIDL: function(geoCoords)
     {
         var result = false;
        var pt2d = sec.web.renderer.MultiPointHandler.getControlPoint(geoCoords);
        var left = pt2d.getX();
        var ptTemp = null;
        for (var j = 0; j < geoCoords.length; j++) {
            ptTemp = geoCoords[j];
            if (Math.abs(ptTemp.getX() - left) > 180)
                return true;
        }
        return result;
     },
             
    ShouldClipSymbol: function(symbolID)
    {
        var status = armyc2.c2sd.renderer.utilities.SymbolUtilities.getStatus(symbolID);
        if (symbolID.charAt(0)===("G") && status===("A")) {
            return true;
        }
        if (armyc2.c2sd.renderer.utilities.SymbolUtilities.isWeather(symbolID))
            return true;
        var id = armyc2.c2sd.renderer.utilities.SymbolUtilities.getBasicSymbolID(symbolID);
        if (id === ("G*T*F-----****X") || id === ("G*F*LCC---****X") || id === ("G*G*GLB---****X") || 
                id === ("G*G*GLF---****X") || id === ("G*G*GLC---****X") || id === ("G*G*GAF---****X") || 
                id === ("G*G*AAW---****X") || id === ("G*G*DABP--****X") || id === ("G*G*OLP---****X") || 
                id === ("G*G*PY----****X") || id === ("G*G*PM----****X") || id === ("G*G*ALL---****X") || 
                id === ("G*G*ALU---****X") || id === ("G*G*ALM---****X") || id === ("G*G*ALC---****X") ||
                id === ("G*G*SLB---****X") || id === ("G*G*SLH---****X") || id === ("G*G*GAY---****X") ||
                id === ("G*G*ALS---****X") || id === ("G*M*OFA---****X") || id === ("G*M*OGB---****X") || 
                id === ("G*M*OGL---****X") || id === ("G*M*OGZ---****X") || id === ("G*M*OGF---****X") || 
                id === ("G*M*OGR---****X") || id === ("G*M*OADU--****X") || id === ("G*M*OADC--****X") || 
                id === ("G*M*OAR---****X") || id === ("G*M*OAW---****X") || id === ("G*M*OEF---****X") || 
                id === ("G*M*OMC---****X") || id === ("G*M*OWU---****X") || id === ("G*M*OWS---****X") || 
                id === ("G*M*OWD---****X") || id === ("G*M*OWA---****X") || id === ("G*M*OWL---****X") || 
                id === ("G*M*OWH---****X") || id === ("G*M*OWCS--****X") || id === ("G*M*OWCD--****X") || 
                id === ("G*M*OWCT--****X") || id === ("G*M*OHO---****X") || id === ("G*M*BDD---****X") || 
                id === ("G*M*BCD---****X") || id === ("G*M*BCE---****X") || id === ("G*M*SL----****X") || 
                id === ("G*M*SP----****X") || id === ("G*M*NR----****X") || id === ("G*M*NB----****X") || 
                id === ("G*M*NC----****X") || id === ("G*F*ACNI--****X") || id === ("G*F*ACNR--****X") || 
                id === ("G*F*ACNC--****X") || id === ("G*F*AKBC--****X") || id === ("G*F*AKBI--****X") || 
                id === ("G*F*AKBR--****X") || id === ("G*F*AKPC--****X") || id === ("G*F*AKPI--****X") || 
                id === ("G*F*AKPR--****X") || id === ("G*F*LT----****X") || id === ("G*F*LTS---****X") || 
                id === ("G*G*SAE---****X") || id === ("G*S*LRA---****X") || id === ("G*S*LRM---****X") || 
                id === ("G*S*LRO---****X") || id === ("G*S*LRT---****X") || id === ("G*S*LRW---****X") || 
                id === ("G*T*Q-----****X") || id === ("G*T*E-----****X") || id === ("G*T*F-----****X") || 
                id === ("G*T*K-----****X") || id === ("G*T*KF----****X") || id === ("G*T*A-----****X") ||
				id === ("G*G*PA----****X")) 
        {
            return true;
        } 
        else
            return false;
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
     * @param {Number} scale A number corresponding to how many meters one meter of our 
     * map represents. A value "50000" would mean 1:50K which means for every 
     * meter of our map it represents 50000 meters of real world distance.
     * @param {String} bbox The viewable area of the map.  Passed in the format of a
     * string "lowerLeftX,lowerLeftY,upperRightX,upperRightY." Not required
     * but can speed up rendering in some cases.
     * example: "-50.4,23.6,-42.2,24.2"
     * @param {Object} symbolModifiers An Object representing all the possible symbol 
     * modifiers represented in the MIL-STD-2525C.  Key values come from
     * MilStdAttributes, ModifiersTG and ModifiersUnits 
     * example: {"C":"4","Z":"300","AN":[100,200]}}
     * @param {Number} format An enumeration: 0 for KML, 1 for JSON.
     * @param {Number} symStd An enumeration: 0 for 2525Bch2, 1 for 2525C.
     * @return A JSON string representation of the graphic.
     */        
    RenderSymbol: function(id, name, description, symbolCode, controlPoints, scale, bbox, symbolModifiers, format, symStd)
    {
        if(symStd === undefined)
        {
            symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
        }
        
        var normalize = false,
            controlLat = 0,
            controlLong = 0,
            jsonOutput = "",
            jsonContent = "",
            rect = null,
            tgPoints = null,
            coordinates = controlPoints.split(" "),
            tgl = new armyc2.c2sd.JavaTacticalRenderer.TGLight(),
            shapes = new Array(),
            modifiers = new Array(),
            geoCoords = new Array(),
            len = coordinates.length,
            ipc = null,
            left = 0,
            right = 0,
            top = 0,
            bottom = 0,
            temp = null,
            ptGeoUL = null,
            width = 0,
            height = 0,
            leftX = 0,
            topY = 0,
            bottomY = 0,
            rightX = 0,
            j = 0,
            bboxCoords = null;
        if (bbox !== null && bbox !== ("")) {
            var bounds = null;
            if (bbox.contains(" ")) //trapezoid
            {
                bboxCoords = new Array();
                var x = 0;
                var y = 0;
                var coords = bbox.split(" ");
                var coord;
                var arrCoord;
                var tempPt = null;
                for(var i = 0; i < coords.length;i++)
                {
                    coord = coords[i];
                    arrCoord = coord.split(",");
                    x = arrCoord[0];
                    y = arrCoord[1];
                    tempPt = new armyc2.c2sd.graphics2d.Point2D();
                    tempPt.setLocation(x, y);
                    bboxCoords.push(tempPt);
                }
                //use the upper left corner of the MBR containing geoCoords
                //to set the converter
                ptGeoUL = sec.web.renderer.MultiPointHandler.getGeoUL(bboxCoords);
                left = ptGeoUL.getX();
                top = ptGeoUL.getY();
                ipc = new sec.web.renderer.PointConverter(left, top, scale);
                var ptPixels = null;
                var ptGeo = null;
                for (j = 0; j < bboxCoords.length; j++) {
                    ptGeo = bboxCoords[j];
                    ptPixels = ipc.GeoToPixels(ptGeo);
                    x = ptPixels.getX();
                    y = ptPixels.getY();
                    if (x < 20)
                        x = 20;
                    if (y < 20)
                        y = 20;
                    ptPixels.setLocation(x, y);
                    bboxCoords[j] = ptPixels;
                }
            } 
            else //rectangle
            {
                bounds = bbox.split(",");
                left = bounds[0];
                right = bounds[2];
                top = bounds[3];
                bottom = bounds[1];
                
                
                ipc = new sec.web.renderer.PointConverter(left, top, scale);
            }
            
            //sanity check
            //when spanning the IDL sometimes they send a bad bbox with 0 width
            //this check assumes a valid left, top, and valid scale
            if(left===right)
            {
                //try for a theoretical 1000x1000 pixels bounding area
                //so for metric width or height:
                //distance in meters=1000 pixels * 1 inch/96 pixels * 1 meter/39.37 inch *scale(meters/meters)
                var dist=1000.0*(1.0/96.0)*(1.0/39.37)*scale;
                var ptLeft=new armyc2.c2sd.JavaLineArray.POINT2(left,top);
                var ptRight=armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptLeft,dist,90.0);
                right=ptRight.x;
                if(right>180)
                    right-=360;
                else
                    if(right<-180)
                        right+=360;
            }
            if(top===bottom)
            {
                dist=1000.0*(1.0/96.0)*(1.0/39.37)*scale;
                var ptTop=new armyc2.c2sd.JavaLineArray.POINT2(left,top);
                var ptBottom=armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptTop,dist,180.0);
                bottom=ptBottom.y;
            }
            //end section
            
            var pt2d = null;
            if (bboxCoords === undefined || bboxCoords === null) 
            {
                pt2d = new armyc2.c2sd.graphics2d.Point2D();
                pt2d.setLocation(left, top);
                temp = ipc.GeoToPixels(pt2d);
                leftX = Math.round(temp.getX());
                topY = Math.round(temp.getY());
                pt2d = new armyc2.c2sd.graphics2d.Point2D();
                pt2d.setLocation(right, bottom);
                temp = ipc.GeoToPixels(pt2d);
                bottomY = Math.round(temp.getY());
                rightX = Math.round(temp.getX());
                width = Math.abs(rightX - leftX);
                height = Math.abs(bottomY - topY);
                rect = new armyc2.c2sd.graphics2d.Rectangle(leftX, topY, width, height);
            }
        } 
        else 
        {
            rect = null;
        }
        
        var tempPt = null;
        for (var i = 0; i < len; i++) {
            var coordPair = coordinates[i].split(",");
            var latitude = coordPair[1].trim();
            var longitude = coordPair[0].trim();
            tempPt = new armyc2.c2sd.graphics2d.Point2D();
            tempPt.setLocation(longitude, latitude);
            geoCoords.push(tempPt);
        }
        if (ipc === null) {
            var ptCoordsUL = sec.web.renderer.MultiPointHandler.getGeoUL(geoCoords);
            ipc = new sec.web.renderer.PointConverter(ptCoordsUL.getX(), ptCoordsUL.getY(), scale);
        }
        if (sec.web.renderer.MultiPointHandler.crossesIDL(geoCoords) === true)
            normalize = true;
        else
            normalize = false;
        if (normalize) {
            sec.web.renderer.MultiPointHandler.NormalizeGECoordsToGEExtents(0, 360, geoCoords);
        }
        
        //M. Deutch 10-3-11
        //must shift the rect pixels to synch with the new ipc
        //the old ipc was in synch with the bbox, so rect x,y was always 0,0
        //the new ipc synchs with the upper left of the geocoords so the boox is shifted
        //and therefore the clipping rectangle must shift by the delta x,y between
        //the upper left corner of the original bbox and the upper left corner of the geocoords
        var geoCoords2 = new Array();
        var ptLT = new armyc2.c2sd.graphics2d.Point2D();
        ptLT.setLocation(left, top);
        geoCoords2.push(ptLT);
        var ptRB = new armyc2.c2sd.graphics2d.Point2D();
        ptRB.setLocation(right, bottom);
        geoCoords2.push(ptRB);
        if (normalize)
            sec.web.renderer.MultiPointHandler.NormalizeGECoordsToGEExtents(0, 360, geoCoords2);
        
        //check if symbolID is valid, if not, turn it into something renderable.
            if(armyc2.c2sd.renderer.utilities.SymbolDefTable.hasSymbolDef(SymbolUtilities.getBasicSymbolID(symbolCode),symStd)===false)
                symbolCode = SymbolUtilities.reconcileSymbolID(symbolCode, true);
            
        //disable clipping if necessary
        if ((sec.web.renderer.MultiPointHandler.ShouldClipSymbol(symbolCode)) === false)
            rect = null;//disable clipping
        
        tgl.set_SymbolId(symbolCode);//like "GFGPSLA---****X" AMBUSH symbol code
        tgl.set_Pixels(null);
        try {
            
            var mSymbol = new armyc2.c2sd.renderer.utilities.MilStdSymbol(symbolCode, null, geoCoords, null);
            mSymbol.setSymbologyStandard(symStd);
            if (symbolModifiers !== null && symbolModifiers !== ("")) 
            {
                sec.web.renderer.MultiPointHandler.populateModifiers(symbolModifiers, mSymbol);
            } 
            else
                mSymbol.setFillColor(null);
            
            //check for required points & parameters
            var symbolIsValid = this.canRenderMultiPoint(mSymbol);
            if(symbolIsValid.canRender===false)
            {
                jsonOutput = "";
                jsonOutput += ("{\"type\":\"error\",\"error\":\"There was an error creating the MilStdSymbol " + symbolCode + ": " + "- ");
                jsonOutput += (symbolIsValid.message + " - ");
                jsonOutput += ("\"}");
                ErrorLogger.LogWarning("MultiPointHandler","RenderSymbol",symbolIsValid.message);
                return jsonOutput;
            }
            
            //Switch arrays to ArrayLists
            mSymbol = sec.web.renderer.utilities.JavaRendererUtilities.MilStdSymbolArraysToArrayLists(mSymbol);
            
            if (mSymbol.getModifierMap()["symbolFillIds"] !== undefined || mSymbol.getModifierMap()["symbolLineIds"] !== undefined) 
            {
                tgl = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.createTGLightFromMilStdSymbol(mSymbol, ipc);
                var tgPoints = tgl.get_Pixels();//java.util.ArrayList
            }//*/
            if (bboxCoords === null)
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.renderWithPolylines(mSymbol, ipc, rect);
            else
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.renderWithPolylines(mSymbol, ipc, bboxCoords);
            shapes = mSymbol.getSymbolShapes();
            modifiers = mSymbol.getModifierShapes();
            if (format === 1) 
            {
                jsonOutput = "{\"type\":\"symbol\",";
                jsonContent = sec.web.renderer.MultiPointHandler.JSONize(shapes, modifiers, ipc, new Boolean(true), normalize);
                jsonOutput += jsonContent;
                jsonOutput += "}";
            } 
            else if (format === 0) 
            {
                jsonContent = sec.web.renderer.MultiPointHandler.KMLize(id, name, description, symbolCode, shapes, modifiers, ipc, new Boolean(true), normalize);
                
                //generate image fill kml if we have symbolfillids or symbollineids
                if (mSymbol.getModifierMap()["symbolFillIds"] !== undefined || mSymbol.getModifierMap()["symbolLineIds"] !== undefined) 
                {
                    var fillKML = this.AddImageFillToKML(tgPoints, jsonContent, mSymbol, ipc, normalize);
                    if(fillKML !== null && fillKML !== "")
                    {
                        jsonContent = fillKML;
                    }
                }//*/
                jsonOutput = jsonContent;
            }
        } 
        catch (exc) 
        {
            
                jsonOutput = "";
                jsonOutput += ("{\"type\":\"error\",\"error\":\"There was an error creating the MilStdSymbol " + symbolCode + ": " + "- ");
                jsonOutput += (exc.message + " - ");
                jsonOutput += ("\"}");
                ErrorLogger.LogException("MultiPointHandler","RenderSymbol",exc);
            
        }
        var debug = false;
        if (debug === true) {
            System.out.println("Symbol Code: " + symbolCode);
            System.out.println("Scale: " + scale);
            System.out.println("BBOX: " + bbox);
            if (controlPoints !== null) {
                //System.out.println("Geo Points: " + controlPoints);
            }
            if (tgl !== null && tgl.get_Pixels() !== null) {
                //System.out.println("Pixel: " + tgl.get_Pixels().toString());
            }
            if (bbox !== null) {
                //System.out.println("geo bounds: " + bbox);
            }
            if (rect !== null) {
                //System.out.println("pixel bounds: " + rect.toString());
            }
            if (jsonOutput !== null) {
                //System.out.println(jsonOutput);
            }
        }
        return jsonOutput;
        
    },
    
    /**
     * @param {Array} polylines Array<Array<Point2D>>
     * @param {type} ipc description
     * @param {Boolean} normalize description
     * 
     */        
    ConvertPolylinePixelsToCoords: function(polylines, ipc, normalize)
    {
        var newPolylines = new Array();
        var latitude = 0;
        var longitude = 0;
        var newLine = null;
        var tempPt = null;
        var pt = null;
        var geoCoord = null;
        
        try 
        {
            for(var i = 0; i < polylines.length; i++)
            {
                newLine = new Array();
                for(var j = 0; j < newLine.length; j++)
                {
                    pt = newLine[j];
                    geoCoord = ipc.PixelsToGeo(pt);
                    
                    if(normalize)
                    {
                        geoCoord = NormalizeCoordToGECoord(geoCoord);
                    }
                    
                    latitude = geoCoord.getY();
                    longitude = geoCoord.getX();
                    newLine.add(new armyc2.c2sd.graphics2d.Point2D(longitude, latitude));
                }
                newPolylines.push(newLine);
            }
        } 
        catch (err) 
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","ConvertPolylinePixelsToCoords",err);
        }
        return newPolylines;
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
     * @param {Object} symbolModifiers An Object representing all the possible symbol 
     * modifiers represented in the MIL-STD-2525C.  Key values come from
     * MilStdAttributes, ModifiersTG and ModifiersUnits 
     * example: {"C":"4","Z":"300","AN":[100,200]}}
     * @param {Number} format An enumeration: 0 for KML, 1 for JSON.
     * @param {Number} symStd An enumeration: 0 for 2525Bch2, 1 for 2525C.
     * @return {String} A JSON or KML string representation of the graphic.
     */        
    RenderSymbol2D: function(id, name, description, symbolCode, controlPoints, pixelWidth, pixelHeight, bbox, symbolModifiers, format, symStd)
    {
        if(arguments.length === 11)
            symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
        
        var jsonOutput = "",
            jsonContent = "",
            rect = null,
            tgPoints = null,
            coordinates = controlPoints.split(" "),
            tgl = new armyc2.c2sd.JavaTacticalRenderer.TGLight(),
            shapes = new Array(),
            modifiers = new Array(),
            geoCoords = new Array(),
            ipc = null,
            left = 0,
            right = 0,
            top = 0,
            bottom = 0;
    
        if (bbox !== null && bbox !== ("")) 
        {
                    var bounds = bbox.split(",");
                    left = bounds[0];
                    right = bounds[2];
                    top = bounds[3];
                    bottom = bounds[1];
                    ipc = new armyc2.c2sd.renderer.utilities.PointConversion(pixelWidth, pixelHeight, (top), (left), (bottom), (right));
        } 
        else 
        {
            //System.out.println("Bad bbox value: " + bbox);
            //System.out.println("bbox is viewable area of the map.  Passed in the format of a string \"lowerLeftX,lowerLeftY,upperRightX,upperRightY.\" example: \"-50.4,23.6,-42.2,24.2\"");
            return "ERROR - Bad bbox value: " + bbox;
        }
        
        var len = coordinates.length;
        var tempPt = null;
        
        for (var i = 0; i < len; i++) 
        {
            var coordPair = coordinates[i].split(",");
            var latitude = coordPair[1].trim();
            var longitude = coordPair[0].trim();
            tempPt = new armyc2.c2sd.graphics2d.Point2D();
            tempPt.setLocation(longitude, latitude);
            geoCoords.push(tempPt);
        }
        
        try {
            var mSymbol = new armyc2.c2sd.renderer.utilities.MilStdSymbol(symbolCode, null, geoCoords, null);
            mSymbol.setSymbologyStandard(symStd);
            if (symbolModifiers !== null && symbolModifiers !== ("")) 
            {
                sec.web.renderer.MultiPointHandler.populateModifiers(symbolModifiers, mSymbol);
            } 
            else
                mSymbol.setFillColor(null);
            var temp = null;
            var leftX;
            var topY;
            var bottomY;
            var rightX;
            var width;
            var height;
            var pt2d = null;
            if ((sec.web.renderer.MultiPointHandler.ShouldClipSymbol(symbolCode))===true) {
                pt2d = new armyc2.c2sd.graphics2d.Point2D();
                pt2d.setLocation(left, top);
                temp = ipc.GeoToPixels(pt2d);
                leftX = Math.round(temp.getX());
                topY = Math.round(temp.getY());
                pt2d = new armyc2.c2sd.graphics2d.Point2D();
                pt2d.setLocation(right, bottom);
                temp = ipc.GeoToPixels(pt2d);
                bottomY = Math.round(temp.getY());
                rightX = Math.round(temp.getX());
                width = Math.abs(rightX - leftX);
                height = Math.abs(bottomY - topY);
                rect = new armyc2.c2sd.graphics2d.Rectangle(leftX, topY, width, height);
            }
            
            //check for required points & parameters
            var symbolIsValid = this.canRenderMultiPoint(mSymbol);
            if(symbolIsValid.canRender===false)
            {
                jsonOutput = "";
                jsonOutput += ("{\"type\":\"error\",\"error\":\"There was an error creating the MilStdSymbol " + symbolCode + ": " + "- ");
                jsonOutput += (symbolIsValid.message + " - ");
                jsonOutput += ("\"}");
                ErrorLogger.LogWarning("MultiPointHandler","RenderSymbol",symbolIsValid.message);
                return jsonOutput;
            }
            
            //Switch arrays to ArrayLists
            mSymbol = sec.web.renderer.utilities.JavaRendererUtilities.MilStdSymbolArraysToArrayLists(mSymbol);
            
            /*if (mSymbol.getModifierMap().containsKey("symbolFillIds") || mSymbol.getModifierMap().containsKey("symbolLineIds")) {
                tgl = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.createTGLightFromMilStdSymbol(mSymbol, ipc);
                tgPoints = tgl.get_Pixels();
            }*/
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.renderWithPolylines(mSymbol, ipc, rect);
            shapes = mSymbol.getSymbolShapes();
            modifiers = mSymbol.getModifierShapes();
            var normalize = false;
            if (format === 1) 
            {
                jsonOutput = ("{\"type\":\"symbol\",");
                jsonContent = sec.web.renderer.MultiPointHandler.JSONize(shapes, modifiers, ipc, new Boolean(false), normalize);
                jsonOutput += (jsonContent);
                jsonOutput += ("}");
            } else if (format === 0) 
            {

                jsonContent = sec.web.renderer.MultiPointHandler.KMLize(id, name, description, symbolCode, shapes, modifiers, ipc, new Boolean(false), normalize);
                if (mSymbol.getModifierMap().containsKey("symbolFillIds") || mSymbol.getModifierMap().containsKey("symbolLineIds")) 
                {
                    //do nothing for now, will need rethinking compared to java version
                }
                jsonOutput = jsonContent;
            }
        } catch (err) {            
            jsonOutput = "";
            jsonOutput += ("{\"type\":\"MultiPointHandler\",\"RenderSymbol2D\":\"There was an error creating the MilStdSymbol " + symbolCode + ": " + "- ");
            jsonOutput += (err.message + " - ");
            jsonOutput += ("\"}");
            ErrorLogger.LogException("MultiPointHandler","RenderSymbol2D",err);
        }
        
        var debug = false;
        if (debug === true) 
        {
            //System.out.println("Symbol Code: " + symbolCode);
            //System.out.println("BBOX: " + bbox);
            if (controlPoints !== null) {
                //System.out.println("Geo Points: " + controlPoints);
            }
            if (tgl !== null && tgl.get_Pixels() !== null) {
                //System.out.println("Pixel: " + tgl.get_Pixels().toString());
            }
            if (bbox !== null) {
                //System.out.println("geo bounds: " + bbox);
            }
            if (rect !== null) {
                //System.out.println("pixel bounds: " + rect.toString());
            }
            if (jsonOutput !== null) {
                //System.out.println(jsonOutput);
            }
        }
        return jsonOutput;
    },
    
    /**
     * 
     * @param {armyc2.c2sd.renderer.utilities.MilStdSymbol} symbol 
     * @returns {Object} {canRender:Boolean,message:"reason why can't render"}
     */
    canRenderMultiPoint: function(symbol)
    {
        var symStd = symbol.getSymbologyStandard();
        var symbolID = symbol.getSymbolID();
        var basicID = SymbolUtilities.getBasicSymbolID(symbolID);
        var sd = null;
        var dc = 99;
        var coordCount = symbol.getCoordinates().length;

        if(SymbolDefTable.hasSymbolDef(basicID,symStd))
        {
            sd = SymbolDefTable.getSymbolDef(basicID, symStd);
        }
        
        if(sd !== null)
        {
            dc = sd.drawCategory;
        }
        else
        {
            return {canRender:false,message:"symbolID: \"" + symbolID  + "\" not recognized."};
        }
        
        
        if(coordCount < sd.minPoints)
        {
            return {canRender:false,message:"symbolID: \"" + symbolID  + "\" requires a minimum of " + sd.minPoints + " points. " + coordCount + " are present."};
        }
        
        //now check for required modifiers\
        var AM = symbol.getModifiers_AM_AN_X(ModifiersTG.AM_DISTANCE);
        var AN = symbol.getModifiers_AM_AN_X(ModifiersTG.AN_AZIMUTH);
        var result = hasRequiredModifiers(symbolID, dc, AM, AN);

        if(result.hasRequiredModifiers===false)
        {
            return {canRender:false,message:result.message};
        }
        else
        {
            return {canRender:true,message:""};
        }

    },
  
            
    /**
     * 
     * @param {String:Object} modifiers json string or an object
     * @param {type} symbol
     * @returns {Boolean}
     */
    populateModifiers: function(modifiers, symbol)
    {
        var modifierMap = {},//new java.util.HashMap();
            altitudes = null,
            azimuths = null,
            distances = null,
            fillColor = null,
            lineColor = null,
            lineWidth = 0,
            symbolFillIDs = null,
            symbolFillIconSize = null;
            
        //alert(jsonString);
        try {
            if(typeof(modifiers)==='string')
            {
                modifiers = JSON.parse(modifiers);
                
                if(modifiers.modifiers)
                    modifiers = modifiers.modifiers;
            }

            if(modifiers[ModifiersTG.C_QUANTITY])
                modifierMap[ModifiersTG.C_QUANTITY] = modifiers[ModifiersTG.C_QUANTITY];
            else if (modifiers.quantity)
                modifierMap[ModifiersTG.C_QUANTITY] = modifiers.quantity;

            if(modifiers[ModifiersTG.H_ADDITIONAL_INFO_1])
                modifierMap[ModifiersTG.H_ADDITIONAL_INFO_1] = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
            else if (modifiers.additionalInfo1)
                modifierMap[ModifiersTG.H_ADDITIONAL_INFO_1] = modifiers.additionalInfo1;

            if(modifiers[ModifiersTG.H1_ADDITIONAL_INFO_2])
                modifierMap[ModifiersTG.H1_ADDITIONAL_INFO_2] = modifiers[ModifiersTG.H1_ADDITIONAL_INFO_2];
            else if (modifiers.additionalInfo2)
                modifierMap[ModifiersTG.H1_ADDITIONAL_INFO_2] = modifiers.additionalInfo2;
            
            if(modifiers[ModifiersTG.H2_ADDITIONAL_INFO_3])
                modifierMap[ModifiersTG.H2_ADDITIONAL_INFO_3] = modifiers[ModifiersTG.H2_ADDITIONAL_INFO_3];
            else if (modifiers.additionalInfo3)
                modifierMap[ModifiersTG.H2_ADDITIONAL_INFO_3] = modifiers.additionalInfo3;

            if(modifiers[ModifiersTG.N_HOSTILE])
                modifierMap[ModifiersTG.N_HOSTILE] = modifiers[ModifiersTG.N_HOSTILE];
            else if (modifiers.hostile)
                modifierMap[ModifiersTG.N_HOSTILE] = modifiers.hostile;

            if(modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1])
                modifierMap[ModifiersTG.T_UNIQUE_DESIGNATION_1] = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
            else if (modifiers.uniqueDesignation1)
                modifierMap[ModifiersTG.T_UNIQUE_DESIGNATION_1] = modifiers.uniqueDesignation1;

            if(modifiers[ModifiersTG.T1_UNIQUE_DESIGNATION_2])
                modifierMap[ModifiersTG.T1_UNIQUE_DESIGNATION_2] = modifiers[ModifiersTG.T1_UNIQUE_DESIGNATION_2];
            else if (modifiers.uniqueDesignation2)
                modifierMap[ModifiersTG.T1_UNIQUE_DESIGNATION_2] = modifiers.uniqueDesignation2;

            if(modifiers[ModifiersTG.W_DTG_1])
                modifierMap[ModifiersTG.W_DTG_1] = modifiers[ModifiersTG.W_DTG_1];
            else if (modifiers.dateTimeGroup1)
                modifierMap[ModifiersTG.W_DTG_1] = modifiers.dateTimeGroup1;

            if(modifiers[ModifiersTG.W1_DTG_2])
                modifierMap[ModifiersTG.W1_DTG_2] = modifiers[ModifiersTG.W1_DTG_2];
            else if (modifiers.dateTimeGroup2)
                modifierMap[ModifiersTG.W1_DTG_2] = modifiers.dateTimeGroup2;

            var i = 0;
            
            if (modifiers[ModifiersTG.X_ALTITUDE_DEPTH])
            {
                var XN = modifiers[ModifiersTG.X_ALTITUDE_DEPTH];
                altitudes = new Array();
                for (i = 0; i < XN.length; i++) {
                    altitudes.push(XN[i]);
                }
            }
            else if (modifiers.altitudeDepth)
            {
                altitudes = new Array();
                for (i = 0; i < modifiers.altitudeDepth.length; i++) {
                    altitudes.push(modifiers.altitudeDepth[i]);
                }
            }
            else if (modifiers.X)
            {
                altitudes = new Array();
                if(modifiers.X.length)
                {
                    for (i = 0; i < modifiers.X.length; i++) {
                        altitudes.push(modifiers.X[i]);
                    }
                }
            }

            if (modifiers[ModifiersTG.AM_DISTANCE])
            {
                var AM = modifiers[ModifiersTG.AM_DISTANCE];
                distances = new Array();
                for (i = 0; i < AM.length; i++) {
                    distances.push(AM[i]);
                }
            }
            else if (modifiers.distance)
            {
                distances = new Array();
                for (i = 0; i < modifiers.distance.length; i++) {
                    distances.push(modifiers.distance[i]);
                }
            }
            

            if (modifiers[ModifiersTG.AN_AZIMUTH])
            {
                var AN = modifiers[ModifiersTG.AN_AZIMUTH];
                azimuths = new Array();
                for (i = 0; i < AN.length; i++) {
                    azimuths.push(AN[i]);
                }
            }
            else if (modifiers.azimuth)
            {
                azimuths = new Array();
                for (i = 0; i < modifiers.azimuth.length; i++) {
                    azimuths.push(modifiers.azimuth[i]);
                }
            }
            
            
            if(modifiers[MilStdAttributes.FillColor])
                fillColor = modifiers[MilStdAttributes.FillColor];
            else if (modifiers.fillColor)
                fillColor = modifiers.fillColor;
            
            if(modifiers[MilStdAttributes.LineColor])
                lineColor = modifiers[MilStdAttributes.LineColor];
            else if (modifiers.lineColor)
                lineColor = modifiers.lineColor;

            if(modifiers[MilStdAttributes.LineWidth])
                lineWidth = modifiers[MilStdAttributes.LineWidth];
            else if (modifiers.lineThickness)
                lineWidth = modifiers.lineThickness;
            
            // These are for when we create a area fill that is comprised of symbols//////////
            if (modifiers.symbolFillIds !== undefined && modifiers.symbolFillIds !== null) 
            {
                modifierMap[this.SYMBOL_FILL_IDS] = modifiers.symbolFillIds;
            }
            else if (modifiers.symbolLineIds !== undefined && modifiers.symbolLineIds !== null) {
                modifierMap[this.SYMBOL_LINE_IDS] = modifiers.symbolLineIds;
            }
            if (modifiers.symbolFillIconSize !== undefined && modifiers.symbolFillIconSize !== null) {
                modifierMap[this.SYMBOL_FILL_ICON_SIZE] = modifiers.symbolFillIconSize;
            }

        } 
        catch (je) 
        {
            
            //System.out.println("Failed to parse modifier string in MultiPointHandler.RenderSymbol. Continuing processing the drawing of the graphic");
            //System.out.println("Json String: " + String.valueOf(jsonString));
            //System.out.println(je.getMessage());
            //System.out.println(sec.web.renderer.utilities.JavaRendererUtilities.getStackTrace(je));
            return false;
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","populateModifiers",je);
            //throw je;
        }
        try {
            symbol.setModifierMap(modifierMap);
            if (fillColor !== null) {
                symbol.setFillColor(armyc2.c2sd.renderer.utilities.SymbolUtilities.getColorFromHexString(fillColor));
            } else {
                symbol.setFillColor(null);
            }
            if (lineColor !== null) {
                symbol.setLineColor(armyc2.c2sd.renderer.utilities.SymbolUtilities.getColorFromHexString(lineColor));
            }
            if (lineWidth > 0) {
                symbol.setLineWidth(lineWidth);
            }
            if (altitudes !== null) {
                symbol.setModifiers_AM_AN_X(ModifiersTG.X_ALTITUDE_DEPTH, altitudes);
            }
            if (distances !== null) {
                symbol.setModifiers_AM_AN_X(ModifiersTG.AM_DISTANCE, distances);
            }
            if (azimuths !== null) {
                symbol.setModifiers_AM_AN_X(ModifiersTG.AN_AZIMUTH, azimuths);
            }
            if (armyc2.c2sd.renderer.utilities.SymbolUtilities.getBasicSymbolID(symbol.getSymbolID()) === ("G*F*AXS---****X")) {
                if (symbol.getModifiers_AM_AN_X(ModifiersTG.AN_AZIMUTH) !== null && symbol.getModifiers_AM_AN_X(ModifiersTG.AM_DISTANCE) !== null) {
                    var anCount = symbol.getModifiers_AM_AN_X(ModifiersTG.AN_AZIMUTH).length;
                    var amCount = symbol.getModifiers_AM_AN_X(ModifiersTG.AM_DISTANCE).length;
                    var am = null;
                    if (amCount < ((Math.floor(anCount / 2)) + 1)) {
                        am = symbol.getModifiers_AM_AN_X(ModifiersTG.AM_DISTANCE);
                        if (am[0] !== 0) 
                        {
                            am.splice(0,0,0);//insert 0 value into 0 location
                        }
                    }
                }
            }
        } 
        catch (err) 
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","populateModifiers",err);
        }
        return true;
    },
            
    KMLize: function(id, name, description, symbolCode, shapes, modifiers, ipc, geMap, normalize)
    {
        /*
        if(shapes instanceof java.util.ArrayList)
            shapes = shapes.toArray();
        if(modifiers instanceof java.util.ArrayList)
            modifiers = modifiers.toArray();*/
        var kml = "";
        var tempModifier = null;
        
        kml += ("<Folder id=\"" + id + "\">");
        kml += ("<name>" + name + "</name>");
        kml += ("<visibility>1</visibility>");
        
        try
        {
            var len = shapes.size();
            for (var i = 0; i < len; i++) {
                var shapesToAdd = sec.web.renderer.MultiPointHandler.ShapeToKMLString(id, name, description, symbolCode, shapes.get(i), ipc, geMap, normalize);
                kml += shapesToAdd;
            }
            //var len2 = modifiers.length;
            var len2 = modifiers.size();
            for (var j = 0; j < len2; j++) {
                //tempModifier = modifiers[j];
                tempModifier = modifiers.get(j);
                if (geMap)
                    sec.web.renderer.MultiPointHandler.AdjustModifierPointToCenter(tempModifier);
                var labelsToAdd = sec.web.renderer.MultiPointHandler.LabelToKMLString(id, j, tempModifier, ipc, normalize);
                kml += labelsToAdd;
            }
        }
        catch(err)
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","KMLize",err);
        }
        kml += "</Folder>";
        return kml;
    },
            
    JSONize: function(shapes, modifiers, ipc, geMap, normalize)
    {
        /*if(shapes instanceof java.util.ArrayList)
            shapes = shapes.toArray();
        if(modifiers instanceof java.util.ArrayList)
            modifiers = modifiers.toArray();*/
        
        var polygons = "",
            lines = "",
            labels = "",
            jstr = "",
            tempModifier = null;
    
        try
        {
            var len = shapes.size();
            for (var i = 0; i < len; i++) 
            {
                if (jstr.length > 0) 
                {
                    jstr += ",";
                }
                var shapesToAdd = sec.web.renderer.MultiPointHandler.ShapeToJSONString(shapes.get(i), ipc, geMap, normalize);
                if (shapesToAdd.length > 0) {
                    if (shapesToAdd.substring(2,6)==="line") //(shapesToAdd.startsWith("line", 2)) 
                    {
                        if (lines.length > 0) 
                        {
                            lines += ",";
                        }
                        lines += shapesToAdd;
                    } 
                    else if (shapesToAdd.substring(2,6)==="poly")//(shapesToAdd.startsWith("polygon", 2)) 
                    {
                        if (polygons.length > 0) 
                        {
                            polygons += ",";
                        }
                        polygons += shapesToAdd;
                    }
                }
            }
            jstr += "\"polygons\": [" + polygons + "]," + "\"lines\": [" + lines + "],";
            var len2 = modifiers.size();
            labels = "";
            for (var j = 0; j < len2; j++) {
                tempModifier = modifiers.get(j);
                if (geMap===true)
                    sec.web.renderer.MultiPointHandler.AdjustModifierPointToCenter(tempModifier);
                var labelsToAdd = sec.web.renderer.MultiPointHandler.LabelToJSONString(tempModifier, ipc, normalize);
                if (labelsToAdd.length > 0) {
                    if (labels.length > 0) {
                        labels += ",";
                    }
                    labels += labelsToAdd;
                }
            }
            jstr += "\"labels\": [" + labels + "]";
        }
        catch(err)
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","JSONize",err);
        }
        return jstr;
    },
    IsOnePointSymbolCode:function(symbolCode)        
    {   
        var symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
        var linetype=armyc2.c2sd.JavaLineArray.CELineArray.CGetLinetypeFromString(symbolCode,symStd);
        switch(linetype)
        {
            case 24323300:  //FFA_CIRCULAR
            case 24321300:  //FSA_CIRCULAR
            case 24325300:  //RFA_CIRCULAR
            case 24326200:  //PAA_CIRCULAR
            case 24331300:  //ATI_CIRCULAR
            case 24332300:  //CFFZ_CIRCULAR
            case 24333300:  //SENSOR_CIRCULAR
            case 24334300:  //CENSOR_CIRCULAR
            case 24335300:  //DA_CIRCULAR
            case 24336300:  //CFZ_CIRCULAR
            case 24337300:  //ZOR_CIRCULAR
            case 24338300:  //TBA_CIRCULAR
            case 24339300:  //TVAR_CIRCULAR
            case 24322300:  //ACA_CIRCULAR
            case 24324300:  //NFA_CIRCULAR
            case 24312000:  //CIRCULAR
            case 24311000:  //RECTANGULAR
            case 24353000:  //KILLBOXBLUE_CIRCULAR
            case 24363000:  //KILLBOXPURPLE_CIRCULAR
            case 243111000: //RANGE_FAN
            case 243112000: //SECTOR
                return true;
            default:
                break;
        }
        //some airspaces affected
        if(symbolCode.equals("CAKE-----------"))
            return true;
        else if(symbolCode.equals("CYLINDER-------"))
            return true;
        else if(symbolCode.equals("RADARC---------"))
            return true;
        
        return false;
    },
    ShapeToKMLString: function(id, name, description, symbolCode, shapeInfo, ipc, geMap, normalize)
    {
        var kml = "",
            lineColor = null,
            fillColor = null,
            googleLineColor = null,
            googleFillColor = null,
            lineStyleId = "lineColor",
            stroke = null,
            lineWidth = 4;
        symbolCode = sec.web.renderer.utilities.JavaRendererUtilities.normalizeSymbolCode(symbolCode);
        kml += ("<Placemark id=\"" + id + "_mg" + "\">");
        kml += ("<description><b>" + name + "</b><br/>" + "\n" + description + "</description>");
        kml += ("<Style id=\"" + lineStyleId + "\">");
        lineColor = shapeInfo.getLineColor();
        if (lineColor !== null) {
            googleLineColor = shapeInfo.getLineColor().toKMLHexString();
            stroke = shapeInfo.getStroke();
            if (stroke !== null) {
                lineWidth = Math.round(stroke.getLineWidth());
                lineWidth++;
            }
            kml += ("<LineStyle>");
            kml += ("<color>" + googleLineColor + "</color>");
            kml += ("<colorMode>normal</colorMode>");
            kml += ("<width>" + lineWidth + "</width>");
            kml += ("</LineStyle>");
        }
        fillColor = shapeInfo.getFillColor();
        if (fillColor !== null) {
            googleFillColor = shapeInfo.getFillColor().toKMLHexString();
            kml += ("<PolyStyle>");
            kml += ("<color>" + googleFillColor + "</color>");
            kml += ("<colorMode>normal</colorMode>");
            kml += ("<fill>1</fill>");
            kml += ("<outline>0</outline>");
            kml += ("</PolyStyle>");
        }
        kml += ("</Style>");
        var shapesArray = shapeInfo.getPolylines();
        var len = shapesArray.size ();
        //var len = shapesArray.length;
        kml += ("<MultiGeometry>");
        for (var i = 0; i < len; i++) {
            var shape = shapesArray.get (i);
            //var shape = shapesArray[i];
            if (lineColor !== null) {
                kml += ("<LineString>");
                kml += ("<tessellate>1</tessellate>");
                kml += ("<altitudeMode>clampToGround</altitudeMode>");
                kml += ("<coordinates>");
                //for (var j = 0; j < shape.length; j++)
                for (var j = 0; j < shape.size (); j++) 
                {
                    var coord = shape.get (j);
                    //var coord = shape[j];
                    var geoCoord = ipc.PixelsToGeo(coord);
                    if (normalize)
                        geoCoord = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(geoCoord);
                    var latitude = geoCoord.getY().toFixed(_decimalAccuracy);
                    var longitude = geoCoord.getX().toFixed(_decimalAccuracy);
                    kml += (longitude);
                    kml += (",");
                    kml += (latitude);
                    kml += (" ");
                }
                kml += ("</coordinates>");
                kml += ("</LineString>");
            }
            
            if (fillColor !== null) {
                if (i === 0)
                    kml += ("<Polygon>");
                if (i === 1 && len > 1)
                    kml += ("<innerBoundaryIs>");
                else
                    kml += ("<outerBoundaryIs>");
                kml += ("<LinearRing>");
                kml += ("<altitudeMode>clampToGround</altitudeMode>");
                kml += ("<tessellate>1</tessellate>");
                kml += ("<coordinates>");
                
                //this section is a workaround for a google earth bug. Issue 417 was closed
                //for linestrings but they did not fix the smae issue for fills. If Google fixes the issue
                //for fills then this section will need to be commented or it will induce an error.
                var lastLongitude=null;
                if( normalize===false && this.IsOnePointSymbolCode(symbolCode) )
                {
                    for (var j = 0; j < shape.size (); j++) 
                    {                        
                        var coord = shape.get (j);                    
                        var geoCoord = ipc.PixelsToGeo(coord);
                        var longitude = geoCoord.getX().toFixed(_decimalAccuracy);
                        if(lastLongitude!==null)
                        {
                            if(Math.abs(longitude-lastLongitude)>180)
                            {
                                normalize=true;
                                break;
                            }
                        }
                        lastLongitude=longitude;
                    }
                }
                //end section
                for (var j = 0; j < shape.size (); j++) 
                {                        
                    var coord = shape.get (j);                    
                    //var coord = shape[j];
                    var geoCoord = ipc.PixelsToGeo(coord);
                    var latitude = geoCoord.getY().toFixed(_decimalAccuracy);
                    var longitude = geoCoord.getX().toFixed(_decimalAccuracy);
                    //fix for fill crossing DTL   
                    if(normalize)
                    {   
                        if(longitude > 0)
                        {
                            longitude -= 360;
                        }
                    }
                    kml += (longitude);
                    kml += (",");
                    kml += (latitude);
                    kml += (" ");
                }
                kml += ("</coordinates>");
                kml += ("</LinearRing>");
                if (i === 1 && len > 1)
                    kml += ("</innerBoundaryIs>");
                else
                    kml += ("</outerBoundaryIs>");
                if (i === len - 1)
                    kml += ("</Polygon>");
            }
        }
        kml += ("</MultiGeometry>");
        kml += ("</Placemark>");
        return kml;
    },
            
    AdjustModifierPointToCenter: function(modifier)
    {
        try {
            /*
            var degrees = modifier.getModifierStringAngle();
            var bounds = modifier.getTextLayout().getBounds();
            
            //angle in radians
            var theta = degrees * (Math.PI / 180);
            //4 corners before rotation
            var tl = {x:(0),y:(bounds.height)};
            var bl = {x:0,y:0};
            var tr = {x:bounds.width,y:bounds.height};
            var br = {x:bounds.width,y:0};
            
            //new bounding box
            var bb = {};
            
            var offsetX = 0;
            var offsetY = 0;
            //TODO: do some math to adjust the point based on the angle
            //where x0,y0 is the center around which you are rotating.
            //x2 = x0+(x-x0)*cos(theta)+(y-y0)*sin(theta)
            //y2 = y0+(x-x0)*sin(theta)+(y-y0)*cos(theta)
            var x0 = 0;
            var y0 = 0;
            
            tl.x = (x0 + (tl.x - x0) * Math.cos(theta) - (tl.y - y0) * Math.sin(theta));
            tl.y = (y0 + (tl.x - x0) * Math.sin(theta) + (tl.y - y0) * Math.cos(theta));
            
            tr.x = (x0 + (tr.x - x0) * Math.cos(theta) - (tr.y - y0) * Math.sin(theta));
            tr.y = (y0 + (tr.x - x0) * Math.sin(theta) + (tr.y - y0) * Math.cos(theta));
            
            br.x = (x0 + (br.x - x0) * Math.cos(theta) - (br.y - y0) * Math.sin(theta));
            br.y = (y0 + (br.x - x0) * Math.sin(theta) + (br.y - y0) * Math.cos(theta));
            
            bb.x = Math.min(0,tl.x,tr.x,br.x);
            bb.y = Math.max(0,tl.y,tr.y,br.y);
            
            bb.width = Math.max(0,tl.x,tr.x,br.x) - bb.x;
            bb.height = bb.y - Math.min(0,tl.y,tr.y,br.y);
            
            offsetX += bb.width/2;
            offsetY += bb.height/2;
            
            var point = modifier.getGlyphPosition();//modifier.getModifierStringPosition();
            point.x += offsetX;
            point.y += offsetY;
            modifier.setGlyphPosition(point);//modifier.setModifierStringPosition(point);
            */
            
        } catch (err) {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MultiPointHandler","AdjustModifierPointToCenter",err);
        }
    },
            
    ShapeToJSONString: function(shapeInfo, ipc, geMap, normalize)
    {
        var JSONed = "";
        var fillColor = null;
        var lineColor = null;
        if (shapeInfo.getLineColor() !== null) {
            lineColor = shapeInfo.getLineColor().toHexString();
        }
        if (shapeInfo.getFillColor() !== null) {
            fillColor = shapeInfo.getFillColor().toHexString();
        }
        var stroke = null;
        stroke = shapeInfo.getStroke();
        var lineWidth = 4;
        if (stroke !== null) {
            lineWidth = Math.round(stroke.getLineWidth());
        }
        var shapesArray = shapeInfo.getPolylines();
        for (var i = 0; i < shapesArray.size(); i++) {
            var shape = shapesArray.get(i);
            if (fillColor !== null) {
                JSONed += ("{\"polygon\":[");
            } else {
                JSONed += ("{\"line\":[");
            }
            for (var j = 0; j < shape.size(); j++) {
                var coord = shape.get(j);
                var geoCoord = ipc.PixelsToGeo(coord);
                if (normalize)
                    geoCoord = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(geoCoord);
                var latitude = geoCoord.getY().toFixed(_decimalAccuracy);
                var longitude = geoCoord.getX().toFixed(_decimalAccuracy);
                coord = new armyc2.c2sd.graphics2d.Point2D();
                
                //fix for fill crossing DTL
//                if(normalize && fillColor !== null)
//                {
//                    if(longitude > 0)
//                    {
//                        longitude -= 360;
//                    }
//                }
                    
                coord.setLocation(longitude, latitude);
                shape[j] = coord;
                JSONed += ("[");
                JSONed += (longitude);
                JSONed += (",");
                JSONed += (latitude);
                JSONed += ("]");
                if (j < (shape.size() - 1)) {
                    JSONed += (",");
                }
            }
            JSONed += ("]");
            if (lineColor !== null) {
                JSONed += (",\"lineColor\":\"");
                JSONed += (lineColor);
                JSONed += ("\"");
            }
            if (fillColor !== null) {
                JSONed += (",\"fillColor\":\"");
                JSONed += (fillColor);
                JSONed += ("\"");
            }
            JSONed += (",\"lineWidth\":\"");
            JSONed += (lineWidth);
            JSONed += ("\"");
            JSONed += ("}");
            if (i < (shapesArray.size() - 1)) {
                JSONed += (",");
            }
        }
        return JSONed;
    },
            
    LabelToKMLString: function(id, i, shapeInfo, ipc, normalize)
    {
        var kml = "";
        var coord = new armyc2.c2sd.graphics2d.Point2D();
        coord.setLocation(shapeInfo.getGlyphPosition().getX(), shapeInfo.getGlyphPosition().getY());
        var geoCoord = ipc.PixelsToGeo(coord);
        if (normalize)
            geoCoord = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(geoCoord);
        var latitude = geoCoord.getY().toFixed(_decimalAccuracy);
        var longitude = geoCoord.getX().toFixed(_decimalAccuracy);
        var angle = Math.round(shapeInfo.getModifierStringAngle());
        var text = shapeInfo.getModifierString();
        if (text !== null && text !== ("")) {
            kml += ("<Placemark id=\"" + id + "_lp" + i + "\">");
            kml += ("<name>" + text + "</name>");
            kml += ("<Style>");
            kml += ("<IconStyle>");
            kml += ("<scale>.7</scale>");
            kml += ("<heading>" + angle + "</heading>");
            kml += ("<Icon>");
            kml += ("<href></href>");
            kml += ("</Icon>");
            kml += ("</IconStyle>");
            kml += ("<LabelStyle>");
            kml += ("<scale>.8</scale>");
            kml += ("</LabelStyle>");
            kml += ("</Style>");
            kml += ("<Point>");
            kml += ("<extrude>1</extrude>");
            kml += ("<altitudeMode>relativeToGround</altitudeMode>");
            kml += ("<coordinates>");
            kml += (longitude);
            kml += (",");
            kml += (latitude);
            kml += ("</coordinates>");
            kml += ("</Point>");
            kml += ("</Placemark>");
        } else {
            return "";
        }
        return kml;
    },
    
    LabelToJSONString: function(shapeInfo, ipc, normalize)
    {
        var JSONed = ("{\"label\":");
        var coord = new armyc2.c2sd.graphics2d.Point2D();
        coord.setLocation(shapeInfo.getGlyphPosition().getX(), shapeInfo.getGlyphPosition().getY());
        var geoCoord = ipc.PixelsToGeo(coord);
        if (normalize)
            geoCoord = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(geoCoord);
        var latitude = geoCoord.getY().toFixed(_decimalAccuracy);
        var longitude = geoCoord.getX().toFixed(_decimalAccuracy);
        var angle = shapeInfo.getModifierStringAngle();
        coord.setLocation(longitude, latitude);
        shapeInfo.setGlyphPosition(coord);
        var text = shapeInfo.getModifierString();
        if (text !== null && text !== ("")) {
            JSONed += ("[");
            JSONed += (longitude);
            JSONed += (",");
            JSONed += (latitude);
            JSONed += ("]");
            JSONed += (",\"text\":\"");
            JSONed += (text);
            JSONed += ("\"");
            JSONed += (",\"angle\":\"");
            JSONed += (angle);
            JSONed += ("\"}");
        } else {
            return "";
        }
        return JSONed;
    },
            
    /**
     * Basically renders the symbol with the 2d renderer than pulls out
     * just the label placemarks.  Altitudes are then added so that will place
     * with the 3d symbol they are being added to.
     * @param id string
     * @param name string 
     * @param description string
     * @param symbolCode string 
     * @param controlPoints string
     * @param scale Number
     * @param bbox string
     * @param symbolModifiers string
     * @param format Number
     * @param symStd Number
     * @return string
     */
    getModififerKML: function(id,
            name,
            description,
            symbolCode,
            controlPoints,
            scale,
            bbox,
            symbolModifiers,
            format, symStd)
    {
        var output="";
        var placemarks = new Array();
        
        try
        {
            var maxAlt = 0;
            var minAlt = 0;
            
            output = RenderSymbol(id, name, description, symbolCode, controlPoints, scale, bbox, symbolModifiers, format, symStd);
            var pmiStart = output.indexOf("<Placemark");
            var pmiEnd = 0;
            var curr = 0;
            var count = 0;
            while(pmiStart > 0)
            {
                if(count > 0)
                {
                    pmiEnd = output.indexOf("</Placemark>",pmiStart)+12;
                    placemarks.add(output.substring(pmiStart,pmiEnd));
                    //System.out.println(placemarks.get(count));
                    //end, check for more
                    pmiStart = output.indexOf("<Placemark",pmiEnd-2);
                }
                count++;
            }
            
            //process placemarks if necessary
            var altitudes = null;//List<Double>
            var JSONObject = JSON.parse(symbolModifiers);
            if (JSONObject !== undefined && JSONObject.modifiers !== undefined) 
            {
                if(JSONObject.modifiers.ALTITUDE_DEPTH !== undefined)
                    altitudes = JSONObject.modifiers.ALTITUDE_DEPTH;//Array()
            }
            
            var Xcount = altitudes.size()-1;
            if(Xcount>0)
            {
                maxAlt = altitudes.get(Xcount);
                //cycle through placemarks and add altitude
                var temp;
                for(var j = 0; j<placemarks.length;j++)
                {
                    temp = placemarks[j];
                    temp.replace("</coordinates>", "," + maxAlt + "</coordinates>");
                    placemarks[j] = temp;
                }
            }
            
            var sb = "";
            for(var k = 0; k<placemarks.length;j++)
            {
                sb.append(placemarks[k]);
            }
//            System.out.println("placemarks: ");
//            System.out.println(sb.toString());
            return sb;
        }
        catch(err)
        {
            ErrorLogger.LogException("MultiPointHandler","getModififerKML",err);
        }
        
        return output;
    },
            
    // <editor-fold defaultstate="collapsed" desc="Image Fill & Line Pattern Functions">
         /**
     * Put this here rather than in multipointhandler so that I could get the
     * port info from the single point server.
     * @param modifiers Map<String,String> modifiers
     * @param pixels ArrayList<Point2D>
     * @param clip Rectangle2D
     * @return 
     */
    GenerateSymbolLineFillUrl: function(modifiers,  pixels, clip)
    {
        var shapeType = 0;
        var url = "";
        var symbolFillIDs=null;
        var symbolLineIDs=null;
        var strClip=null;
        var symbolSize = 25;//AreaSymbolFill.DEFAULT_SYMBOL_SIZE;
        var imageoffset = 0;
        //ArrayList<ArrayList<Point2D>>
        var lines = null;
        //ArrayList<Point2D> 
        var points = null;
        var point = null;
        
        var shape = null;
        //PathIterator itr = null;
        var height = 0;
        var width = 0;
        var offsetX = 0;
        var offsetY = 0;
        var x = 0;
        var y = 0;
        //Rectangle2D 
        var bounds = null;
        try
        {
            //Path2D 
            var path = new armyc2.c2sd.graphics2d.GeneralPath();
            //Point2D
            var temp = null;
            //Get bounds of the polygon/polyline path
            for(var i=0; i<pixels.size();i++)
            {
                temp = pixels.get(i);
                if(i>0)
                {
                    path.lineTo(temp.getX(), temp.getY());
                }
                else if(i===0)
                {
                    path.moveTo(temp.getX(), temp.getY());
                }
            }
            
            bounds = path.getBounds();
            height = bounds.getHeight();
            width = bounds.getWidth();

//            System.out.println("bounds: "+ bounds.toString());
//                    System.out.println("height: "+ String.valueOf(height));
//            System.out.println("width: "+ String.valueOf(width));
            
            //pixels may be in negative space so get offsets to put everything
            //in the positive
            if(bounds.getX()<0)
            {
                offsetX = Math.round(bounds.getX()*-1);
            }
            else if((bounds.getX()+bounds.getWidth()) > width)
            {
                offsetX = Math.round((bounds.getX()+bounds.getWidth())-width)*-1;
            }
            
            if(bounds.getY()<0)
            {
                offsetY = Math.round(bounds.getY()*-1);
            }
            else if((bounds.getY()+bounds.getHeight()) > height)
            {
                offsetY = Math.round((bounds.getY()+bounds.getHeight())-height)*-1;
            }

            //build clip string
            if(clip!==null)
            {
                var sbClip = "";
                sbClip += ("&clip=");
                sbClip += (clip.getX());
                sbClip += (",");
                sbClip += (clip.getY());
                sbClip += (",");
                sbClip += (clip.getWidth());
                sbClip += (",");
                sbClip += (clip.getHeight());
                strClip=sbClip;//.toString();
            }

                    
            //itr = shape.getPathIterator(new AffineTransform());
            var sbCoords = "";
            var sbUrl = "";
            sbCoords += ("coords=");
            //itr.next();

            //get parameters
            if(modifiers["symbolFillIds"] !== undefined)
            {
                symbolFillIDs = modifiers["symbolFillIds"];
            }
            if(modifiers["symbolLineIds"] !== undefined)
            {
                symbolLineIDs = modifiers["symbolLineIds"];
            }
            if(modifiers["symbolFillIconSize"] !== undefined)
            {
                symbolSize = ["symbolFillIconSize"];
            }
            if(modifiers["clip"])
            {
                strClip = ["clip"];
            }

            /*if(symbolLineIDs != null && symbolSize > 0)
            {
                //icons drawn on line, need to extend bounds
                //so that they don't get clipped.
                //System.out.println(String.valueOf(height));
//                height += symbolSize;
//                width += symbolSize;
                imageoffset = symbolSize/2;
//                offsetX += imageoffset;
//                offsetY += imageoffset;
            }//*/
            
            //build coordinate string
            for(var i = 0; i< pixels.size(); i++)
            {
                if(i>0)
                {
                    sbCoords += (",");
                }
                point = pixels.get(i);
                x = Math.round(point.getX() + offsetX);
                y = Math.round(point.getY() + offsetY);
                sbCoords += (x);
                sbCoords += (",");
                sbCoords += (y);
            }
            
            //get the base url for the applet image server if available,
            //otherwise uses the web service.
            sbUrl = this.GetImageServerURL();

            sbUrl += ("AREASYMBOLFILL?");
            sbUrl += ("renderer=AreaSymbolFillRenderer&");
            sbUrl += (sbCoords.toString());
            if(symbolFillIDs !== null)
            {
                sbUrl += ("&symbolFillIds=");
                sbUrl += (symbolFillIDs);
            }
            if(symbolLineIDs !== null)
            {
                sbUrl += ("&symbolLineIds=");
                sbUrl += (symbolLineIDs);
            }
            if(symbolSize>0)
            {
                sbUrl += ("&symbolFillIconSize=");
                sbUrl += (symbolSize);
            }
            if(strClip!==null)
            {
                sbUrl += (strClip);
            }



            sbUrl += ("&height=");
            sbUrl += parseInt(height);
            sbUrl += ("&width=");
            sbUrl += parseInt(width);

            url = sbUrl;//.toString();

        }
        catch(exc)
        {
            ErrorLogger.LogException("MPH","GenerateSymbolLineFillUrl",exc);
        }
        return url;
    },
    
    
    AddImageFillToKML: function(tgPoints, jsonContent, mSymbol, ipc, normalize)
    {
        //get original point values in pixel form                    
        var pixelPoints = new java.util.ArrayList();
        var path = new armyc2.c2sd.graphics2d.GeneralPath();

        //for(JavaLineArray.POINT2 pt : tgPoints)
        var kcount = tgPoints.size();
        var tpTemp = null;
        for(var k = 0; k < kcount;k++)
        {
            tpTemp = tgPoints.get(k);
            pixelPoints.add(new armyc2.c2sd.graphics2d.Point2D(tpTemp.x, tpTemp.y));
            if(k>0)
            {
                path.lineTo(tpTemp.x, tpTemp.y);
            }
            else
            {
                path.moveTo(tpTemp.x, tpTemp.y);
            }
        }
        var rect = path.getBounds();
        //get url for the fill or line pattern PNG
        //TODO: create functoin to generalte symbol line fill url
        var goImageUrl = this.GenerateSymbolLineFillUrl(mSymbol.getModifierMap(), pixelPoints,rect);
        //generate the extra KML needed to insert the image
        var goKML = this.GenerateGroundOverlayKML(goImageUrl,ipc,rect,normalize);
        goKML += "</Folder>";


        jsonContent = jsonContent.replace("</Folder>", goKML);
        
        return jsonContent;
    },
            
    GenerateGroundOverlayKML: function(
            urlImage,  ipc,
            symbolBounds,
            normalize)//, ArrayList<ShapeInfo> shapes)
    {
        //int shapeType = -1;
        var x = 0;
        var y = 0;
        var height = 0;
        var width = 0;
        //ShapeInfo siTemp = null;
        //int shapeCount = shapes.size();
        var sb = "";
        var lineFill = false;
        var params = {};
        var symbolSize = 0;
        var imageOffset = 0;

        
        try
        {
            //if it's a line pattern, we need to know how big the symbols
            //are so we can increase the size of the image.
            var index = -1;
            index = urlImage.indexOf(this.SYMBOL_LINE_IDS);
            
            if(index > 0)//if(urlImage contains SYMBOL_LINE_IDS)
            {
                lineFill=true;
                //TODO: create url parameter processing function
                //params = SinglePointRendererService.getInstance().processParams(urlImage);
                if(params[this.SYMBOL_FILL_ICON_SIZE] !== undefined)
                {
                    var size = params[this.SYMBOL_FILL_ICON_SIZE];
                    symbolSize = parseInt(size);//Integer.decode(size);// getInteger(size);
                }
                else
                {
                    symbolSize = 25;//AreaSymbolFill.DEFAULT_SYMBOL_SIZE;
                }
                imageOffset = (symbolSize/2) +3;//+3 to make room for rotation
            }
            
            //get the bounds of the image
            var bounds = null;

            bounds = symbolBounds;

            height = bounds.getHeight()+(imageOffset*2);
            width = bounds.getWidth()+(imageOffset*2);
            x = bounds.getX()-imageOffset;
            y = bounds.getY()-imageOffset;
            

//            Point2D coord = (Point2D) new Point2D.Double(x, y);
//            Point2D topLeft = ipc.PixelsToGeo(coord);
//            coord = (Point2D) new Point2D.Double(x+width,y+height);
//            Point2D bottomRight = ipc.PixelsToGeo(coord);
            
            var coord = new armyc2.c2sd.graphics2d.Point2D(x, y);
            var topLeft = ipc.PixelsToGeo(coord);
            coord = new armyc2.c2sd.graphics2d.Point2D(x+width,y+height);
            var bottomRight = ipc.PixelsToGeo(coord);
            


            if(normalize)
            {
                topLeft=NormalizeCoordToGECoord(topLeft);
                bottomRight=NormalizeCoordToGECoord(bottomRight);
            }

            var cdataStart = "<![CDATA[";
            var cdataEnd = "]]>";
            //build kml
            sb += ("<GroundOverlay>");
                sb += ("<name>symbol fill</name>");
                //sb += ("<visibility>0</visibility>");
                sb += ("<description>symbol fill</description>");
                sb += ("<Icon>");
                    sb += ("<href>");
                    sb += (cdataStart);
                    sb += (urlImage);
                    sb += (cdataEnd);
                    sb += ("</href>");
                sb += ("</Icon>");
                sb += ("<LatLonBox>");
                    sb += ("<north>");
                    sb += topLeft.getY();
                    sb += ("</north>");
                    sb += ("<south>");
                    sb += bottomRight.getY();
                    sb += ("</south>");
                    sb += ("<east>");
                    sb += bottomRight.getX();
                    sb += ("</east>");
                    sb += ("<west>");
                    sb += topLeft.getX();
                    sb += ("</west>");
                    sb += ("<rotation>");
                    sb += ("0");
                    sb += ("</rotation>");
                sb += ("</LatLonBox>");
            sb += ("</GroundOverlay>");
        }
        catch(exc)
        {
            ErrorLogger.LogException("MultiPointHandler","GenerateGroundOverlayKML",exc);
        }
        var kml = sb;
        return kml;
    },
      
    /**
     * Get the base url for the applet image server if available.
     * Otherwise, uses the web service.
     * @returns {String}
     */
    GetImageServerURL: function()
    {
        var port = 80;
        var appletReady = false;
        if(_appletChecked===false)
        {
            // The renderer is not ready until it receives an active from the applet
            // and the port number has returned from the local image server.

            // But first get the dom element for the applet tag.
            var renderer = document.getElementById("SECRenderApplet");

            if (renderer) 
            {

                // Try to load the applet for about 10 seconds.  If this fails to load
                // it is either too big to download and is taking too much time, or
                // something failed due to java issues.                        

                try 
                {
                    appletReady = renderer.isActive();    
                
                    // Try to load the single point server after the applet loads.  If
                    // this takes longer than 5 seconds then there probably is an issue.            
                    if (appletReady) {

                        port = renderer.GetPortNumber();

                        if (port) 
                        {
                           appletReady = true;
                           _appletUrl = "http://localhost:" + port + "/";
                        } 
                        else 
                        {
                           appletReady = false;
                        }   
                    }
                } 
                catch(exc) 
                {
                    appletReady = false;
                }
            } 
            //if applet server not available, use the web service.
            if(_appletUrl === null)
            {
                    _appletUrl = location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/";
                    _appletUrl += "mil-symbology-renderer/renderer/image/";          
            }
            _appletChecked = true;
        }
        
        return _appletUrl;
    }
            
  
    
    // </editor-fold>
};
}());

