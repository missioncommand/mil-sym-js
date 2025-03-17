var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

/** @class */
armyc2.c2sd.renderer.utilities.SinglePointLookup = (function () {

    function SinglePointLookupInfo(basicSymbolID, description, 
                                    mappingP, mappingA,width,height){
        this._SymbolID = basicSymbolID;
        this._Description = description;
        this._mappingP = mappingP;
        this._mappingA = mappingA;
        this._width = width;
        this._height = height;
        this.getBasicSymbolIDStrict = function(){
            return this._SymbolID;
        };
        this.getDescription = function(){
            return this._Description;
        };
        this.getMappingA = function(){
            return this._mappingA;
        };
        this.getMappingP = function(){
            return this._mappingP;
        };
        this.getWidth = function(){
            return this._width;
        };
        this.getHeight = function(){
            return this._height;
        };
        
    }

    var symbolMapB = null,
        symbolMapC = null,
        RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings;


    return {

        xmlDoc: null,
        /**
         * 
         * @returns {undefined}
         */
        init: function ()
        {
            var i,
            data = null,
            symbol = null,
            symbols = null,
            count;
            
            //symbolDefTable
            if(symbolMapB===null  && armyc2.c2sd.renderer.xml.SinglePointMappingsB !== undefined)
            {
                symbols = armyc2.c2sd.renderer.xml.SinglePointMappingsB.SINGLEPOINTMAPPINGS.SYMBOL;
                armyc2.c2sd.renderer.xml.SinglePointMappingsB = null;
                symbolMapB = {};

                count = symbols.length;
                for (i = 0; i < count; i += 1) {
                    symbol = symbols[i];
                    
                    if (symbol !== null) {

                        data = {};
                        data.symbolID = symbol["ID"] || ""; //SYMBOLID
                        data.mappingP = symbol["MP"] || ""; //MAPPINGP
                        data.mappingA = symbol["MA"] || ""; //MAPPINGA
                        data.description = "";//symbol["D"] || ""; //DESCRIPTION
                        data.width = parseInt(symbol["W"] || ""); //WIDTH
                        data.height = parseInt(symbol["H"] || ""); //HEIGHT
						
						if(data.mappingP !== "")
							data.mappingP = (parseInt(data.mappingP) + 57000);
						if(data.mappingA !== "")
							data.mappingA = (parseInt(data.mappingA) + 57000);
                    } 
                    if((symbolMapB[data.symbolID])===undefined)
                    {
                        symbolMapB[data.symbolID] = data;
                    }
                }
            }
            
            if(symbolMapC===null  && armyc2.c2sd.renderer.xml.SinglePointMappingsC !== undefined)
            {
                symbols = symbols = armyc2.c2sd.renderer.xml.SinglePointMappingsC.SINGLEPOINTMAPPINGS.SYMBOL;
                armyc2.c2sd.renderer.xml.SinglePointMappingsC = null;
                symbolMapC = {};
                
                count = symbols.length;
                for (i = 0; i < count; i += 1) {
                    symbol = symbols[i];
                    
                    if (symbol !== null) {

                        data = {};
                        data.symbolID = symbol["ID"] || ""; //SYMBOLID
                        data.mappingP = symbol["MP"] || ""; //MAPPINGP
                        data.mappingA = symbol["MA"] || ""; //MAPPINGA
                        data.description = "";//symbol["D"] || ""; //DESCRIPTION
                        data.width = parseInt(symbol["W"] || ""); //WIDTH
                        data.height = parseInt(symbol["H"] || ""); //HEIGHT
						
						if(data.mappingP !== "")
							data.mappingP = (parseInt(data.mappingP) + 57000);
						if(data.mappingA !== "")
							data.mappingA = (parseInt(data.mappingA) + 57000);
                    } 
                    
                    if((symbolMapC[data.symbolID])===undefined)
                    {
                        symbolMapC[data.symbolID] = data;
                    }
                }
            }
            
        },
        /**
         * 
         * @param {String} symbolID
         * @param {Number} symStd 0=2525B, 1=2525C
         * @returns {unitLookup} has symbolID, description, mapping1U, mapping1F,
         * mapping1N, mapping1H, mapping1color, mapping2, mapping2color
         */
        getSPLookupInfo: function (symbolID, symStd) {
            var basicID = armyc2.c2sd.renderer.utilities.SymbolUtilities.getBasicSymbolIDStrict(symbolID);
            
            if(symStd === undefined)
                symStd = RendererSettings.getSymbologyStandard();
            var symbolMap = null;
            
            if(symStd === RendererSettings.Symbology_2525B)
                symbolMap = symbolMapB;
            else
                symbolMap = symbolMapC;
            
            if(symbolMap[basicID] !== undefined)
            {
                return symbolMap[basicID];
            }
            else
            {
                return null;
            }
            
        },
        /**
         * 
         * @param {String} symbolID
         * @returns {Boolean}
         */
        hasSPLookupInfo: function (symbolID,symStd) {
            
            var basicID = armyc2.c2sd.renderer.utilities.SymbolUtilities.getBasicSymbolIDStrict(symbolID);
            
            if(symStd === undefined)
                symStd = RendererSettings.getSymbologyStandard();
            var symbolMap = null;
            
            if(symStd === RendererSettings.Symbology_2525B)
                symbolMap = symbolMapB;
            else
                symbolMap = symbolMapC;
            
            if(symbolMap[basicID] !== undefined)
            {
                return true;
            }
            else
            {
                return false;
            }
            
        },
        /**
         * 
         * @param {type} symbolCode
         * @param {type} symStd
         * @returns {Number|@exp;spli@call;mappingP|@exp;spli@call;mappingA}
         */
        getCharCodeFromSymbol: function(symbolCode, symStd){
            try
            {
                var strSymbolLookup = null;
                
                if(symbolCode.indexOf("FILL")=== -1)
                    strSymbolLookup = armyc2.c2sd.renderer.utilities.SymbolUtilities.getBasicSymbolIDStrict(symbolCode);
                else
                    strSymbolLookup = symbolCode;

               // Map<String, SinglePointLookupInfo> hashMap = null;
               var symbolMap = null;
               if(symStd === undefined)
                    symStd = RendererSettings.getSymbologyStandard();
               
                if(symStd===RendererSettings.Symbology_2525B)
                    symbolMap=symbolMapB;
                else if(symStd===RendererSettings.Symbology_2525C)
                    symbolMap=symbolMapC;

                var spli = null;
                if(armyc2.c2sd.renderer.utilities.SymbolUtilities.isWeather(strSymbolLookup) || symbolCode.indexOf("FILL")!== -1)
                {
                    spli = symbolMap[strSymbolLookup];// hashMap.get(strSymbolLookup);
                    if(spli !== null)
                        return spli.mappingP;
                    else
                        return -1;

                }
                else
                {
                    spli = symbolMap[strSymbolLookup];//hashMap.get(strSymbolLookup);
                    if(spli !== null)
                    {
                        if(armyc2.c2sd.renderer.utilities.SymbolUtilities.getStatus(symbolCode)===("A"))
                            return spli.mappingA;
                        else
                            return spli.mappingP;
                    }    
                    else
                    {
                        return -1;
                    }
                }
            }
            catch(exc)
            {
                //ErrorLogger.LogException("SinglePointLookup", "getCharCodeFromSymbol", exc, Level.WARNING);
            }
          return -1;
        }

    };
}());