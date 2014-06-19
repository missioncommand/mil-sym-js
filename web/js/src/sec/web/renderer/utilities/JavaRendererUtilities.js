var sec = sec || {};
/** namespace */
sec.web = sec.web || {};
sec.web.renderer = sec.web.renderer || {};
sec.web.renderer.utilities = sec.web.renderer.utilities || {};
/** @class */
sec.web.renderer.utilities.JavaRendererUtilities = {};

    sec.web.renderer.utilities.JavaRendererUtilities.be = "";
    
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
    
    sec.web.renderer.utilities.JavaRendererUtilities.getBrowserInfo = function()
    {
         //rendering engines
         var engine = {
             ie: 0,
             gecko: 0,
             webkit: 0,
             khtml: 0,
             opera: 0,

             //complete version
             ver: null
         };

         //browsers
         var browser = {

             //browsers
             ie: 0,
             firefox: 0,
             safari: 0,
             konq: 0,
             opera: 0,
             chrome: 0,
             safari: 0,

             //specific version
             ver: null
         };


         //platform/device/OS
         var system = {
             win: false,
             mac: false,
             x11: false,

             //mobile devices
             iphone: false,
             ipod: false,
             nokiaN: false,
             winMobile: false,
             macMobile: false,

             //game systems
             wii: false,
             ps: false
         };

         //detect rendering engines/browsers
         var ua = navigator.userAgent;
         if (window.opera){
             engine.ver = browser.ver = window.opera.version();
             engine.opera = browser.opera = parseFloat(engine.ver);
         } else if (/AppleWebKit\/(\S+)/.test(ua)){
             engine.ver = RegExp["$1"];
             engine.webkit = parseFloat(engine.ver);

             //figure out if it's Chrome or Safari
             if (/Chrome\/(\S+)/.test(ua)){
                 browser.ver = RegExp["$1"];
                 browser.chrome = parseFloat(browser.ver);
             } else if (/Version\/(\S+)/.test(ua)){
                 browser.ver = RegExp["$1"];
                 browser.safari = parseFloat(browser.ver);
             } else {
                 //approximate version
                 var safariVersion = 1;
                 if (engine.webkit < 100){
                     safariVersion = 1;
                 } else if (engine.webkit < 312){
                     safariVersion = 1.2;
                 } else if (engine.webkit < 412){
                     safariVersion = 1.3;
                 } else {
                     safariVersion = 2;
                 }

                 browser.safari = browser.ver = safariVersion;
             }
         } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
             engine.ver = browser.ver = RegExp["$1"];
             engine.khtml = browser.konq = parseFloat(engine.ver);
         } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
             engine.ver = RegExp["$1"];
             engine.gecko = parseFloat(engine.ver);

            //determine if it's Firefox
            if (/Firefox\/(\S+)/.test(ua))
            {
                browser.ver = RegExp["$1"];
                browser.firefox = parseFloat(browser.ver);
            }
         } else if (/MSIE ([^;]+)/.test(ua)){
             engine.ver = browser.ver = RegExp["$1"];
             engine.ie = browser.ie = parseFloat(engine.ver);

         }
         else if (/Trident\/(\S+)/.test(ua)){
             engine.ver = browser.ver = RegExp["$1"];
             engine.ie = browser.ie = parseFloat(engine.ver) + 4;
             //5=IE9, 6=IE10, 7=IE11
         }

         //detect browsers
         browser.ie = engine.ie;
         browser.opera = engine.opera;


         //detect platform
         var p = navigator.platform;
         system.win = p.indexOf("Win") == 0;
         system.mac = p.indexOf("Mac") == 0;
         system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

         //detect windows operating systems
         if (system.win){
             if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
                 if (RegExp["$1"] == "NT"){
                     switch(RegExp["$2"]){
                         case "5.0":
                             system.win = "2000";
                             break;
                         case "5.1":
                             system.win = "XP";
                             break;
                         case "6.0":
                             system.win = "Vista";
                             break;
                         case "6.1":
                             system.win = "7";
                             break;
                         case "6.2":
                             system.win = "8";
                             break;
                         case "6.3":
                             system.win = "8.1";
                             break;
                         default:
                             system.win = "NT";
                             break;
                     }
                 } else if (RegExp["$1"] == "9x"){
                     system.win = "ME";
                 } else {
                     system.win = RegExp["$1"];
                 }
             }
         }

         //mobile devices
         system.iphone = ua.indexOf("iPhone") > -1;
         system.ipod = ua.indexOf("iPod") > -1;
         system.nokiaN = ua.indexOf("NokiaN") > -1;
         system.winMobile = (system.win == "CE");
         system.macMobile = (system.iphone || system.ipod);

         //gaming systems
         system.wii = ua.indexOf("Wii") > -1;
         system.ps = /playstation/i.test(ua);

         //return it
         return {
             engine:     engine,
             browser:    browser,
             system:     system
         };
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
            
    /**
     * TODO: Json parsing incomplete.
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

            if(symbolId === ("ACAI--") ||
                symbolId === ("ACAR--") ||
                symbolId === ("ACAC--") ||
                symbolId === ("AKPC--") ||
                symbolId === ("AKPI--") ||
                symbolId === ("AKPR--") ||
                symbolId === ("AKPI--") ||
                symbolId === ("ALC---") ||
                symbolId === ("ALM---") ||
                symbolId === ("ALS---") ||
                symbolId === ("ALU---") ||
                symbolId === ("ALL---") ||
                symbolId === ("AAR---") ||
                symbolId === ("AAF---") ||
                symbolId === ("AAH---") ||
                symbolId === ("AAM---") ||
                symbolId === ("AAF---") ||
                symbolId === ("AAML--") ||
                symbolId === ("AAMH--"))
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
                    
                        // These guys store array values.  Put in appropriate data strucutre
                        // for MilStdSymbol.
                        var jsonAltitudeArray = null;
                        if (modifiers.X) 
                        {
                            jsonAltitudeArray = modifiers.X;
                        }        
                        else if (modifiers.altitudeDepth) 
                        {
                            jsonAltitudeArray = modifiers.altitudeDepth;
                        }  
                        if (jsonAltitudeArray && jsonAltitudeArray.length >= 2)
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
        var re = new RegExp("((-|\\+)?[0-9]+(\\.[0-9]+)?)+");
        return(re.test(text));
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
        
        if(this.be === "")
        {
            this.be = this.getBrowserEngine();
        }
        var be = this.be,
            tSpace = String.fromCharCode(8196),
            gSpace = String.fromCharCode(8192);

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
                        
                        if(be === "Trident")
                            temp = temp.replace(/ /g, tSpace);
                        else if(be === "Gecko")
                            temp = temp.replace(/ /g, gSpace);
                        
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
        
        /*var am = symbol.getModifiers_AM_AN_X(armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE);
        var aml = new java.util.ArrayList();
        if(am !== undefined && am !== null)
        {
            for(var i = 0; i < am.length; i++)
            {
                aml.add(new Double(am[i]));
            }
        }
        symbol.setModifiers_AM_AN_X(armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE,aml);
        
        var an = symbol.getModifiers_AM_AN_X(armyc2.c2sd.renderer.utilities.ModifiersTG.AN_AZIMUTH);
        var anl = new java.util.ArrayList();
        if(an !== undefined && an !== null)
        {
            for(var j = 0; j < an.length; j++)
            {
                anl.add(new Double(an[j]));
            }
        }
        symbol.setModifiers_AM_AN_X(armyc2.c2sd.renderer.utilities.ModifiersTG.AN_AZIMUTH,anl);
        
        var x = symbol.getModifiers_AM_AN_X(armyc2.c2sd.renderer.utilities.ModifiersTG.X_ALTITUDE_DEPTH);
        var xl = new java.util.ArrayList();
        if(x !== undefined && x !== null)
        {
            for(var k = 0; k < x.length; k++)
            {
                xl.add(new Double(x[k]));
            }
        }
        symbol.setModifiers_AM_AN_X(armyc2.c2sd.renderer.utilities.ModifiersTG.X_ALTITUDE_DEPTH,xl);//*/
        
        return symbol;
        
    };
    



sec.web.renderer.utilities.JavaRendererUtilities.HOSTILE_FILL_COLOR = "FFFF8080";
sec.web.renderer.utilities.JavaRendererUtilities.FRIENDLY_FILL_COLOR = "FF80E0FF";
sec.web.renderer.utilities.JavaRendererUtilities.NEUTRAL_FILL_COLOR = "FFAAFFAA";
sec.web.renderer.utilities.JavaRendererUtilities.UNKNOWN_FILL_COLOR = "FFFFFF80";

