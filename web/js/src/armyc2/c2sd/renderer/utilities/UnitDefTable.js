var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.UnitDefTable = (function () {

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
            symbols,
            count;
            
            //symbolDefTable
            if(symbolMapB===null  && armyc2.c2sd.renderer.xml.UnitConstantsB !== undefined)
            {
                symbols = armyc2.c2sd.renderer.xml.UnitConstantsB.UNITCONSTANTS.SYMBOL;
                armyc2.c2sd.renderer.xml.UnitConstantsB = null;
                symbolMapB = {};
                count = symbols.length;
                for (i = 0; i < count; i += 1) {
                    symbol = symbols[i];
                    
                    if (symbol !== null) {

                        data = {};
                        data.symbolID = symbol["ID"] || ""; //SYMBOLID
                        data.description = symbol["D"] || ""; //DESCRIPTION
                        data.drawCategory = parseInt(symbol["DC"] || "", 10); //DRAWCATEGORY
                        data.hierarchy = symbol["H"] || ""; //HIERARCHY
                        //data.alphahierarchy = symbols[i].children[4].textContent; //ALPHAHIERARCHY
                        //data.path = symbols[i].children[5].textContent; //PATH

                    } 
                    if((symbolMapB[data.symbolID])===undefined)
                    {
                        symbolMapB[data.symbolID] = data;
                    }
                }
            }
            
            if(symbolMapC===null  && armyc2.c2sd.renderer.xml.UnitConstantsC !== undefined)
            {
                symbols = armyc2.c2sd.renderer.xml.UnitConstantsC.UNITCONSTANTS.SYMBOL;
                armyc2.c2sd.renderer.xml.UnitConstantsC = null;
                symbolMapC = {};
                count = symbols.length;
                for (i = 0; i < count; i += 1) {
                    symbol = symbols[i];
                    //Firefox and IE parsers handle things differently
                    if (symbol !== null) {

                        data = {};
                        data.symbolID = symbol["ID"] || ""; //SYMBOLID
                        data.description = symbol["D"] || ""; //DESCRIPTION
                        data.drawCategory = parseInt(symbol["DC"] || "", 10); //DRAWCATEGORY
                        data.hierarchy = symbol["H"] || ""; //HIERARCHY
                        //data.alphahierarchy = symbols[i].children[4].textContent; //ALPHAHIERARCHY
                        //data.path = symbols[i].children[5].textContent; //PATH

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
         * @param {Number} symStd 2525b=0,2525c=1
         * @returns {Boolean}
         */
        hasSymbolMap: function(symStd)
        {
            if(symStd === 0 && symbolMapB !== null)//2525B
            {
                return true;
            }
            else if(symStd === 1 && symbolMapC !== null)//2525C
            {
                return true;
            }
            else
                return false;
        },
        
        /**
         * 
         * @param {Number} symStd 2525b=0,2525c=1
         * @returns {Boolean}
         */
        getSymbolMap: function(symStd)
        {
            if(symStd === 0 && symbolMapB !== null)//2525B
            {
                return symbolMapB;
            }
            else if(symStd === 1 && symbolMapC !== null)//2525C
            {
                return symbolMapC;
            }
            else
                return null;
        },
        
        /**
         * 
         * @param {String} symbolID
         * @param {Number} symStd 2525b=0,2525c=1
         * @returns {unitDef} has symbolID, description, drawCategory,
         * hierarchy, alphahierarchy, path.  drawCategory is a Number.
         */
        getUnitDef: function (symbolID, symStd) {
            
            if(symStd === undefined)
                symStd = RendererSettings.getSymbologyStandard();
            var symbolMap = null;
            
            if(symStd === RendererSettings.Symbology_2525B)
                symbolMap = symbolMapB;
            else
                symbolMap = symbolMapC;
            
            if(symbolMap && symbolMap[symbolID] !== undefined)
            {
                return symbolMap[symbolID];
            }
            else
            {
                return null;
            }
            
        },
        /**
         * 
         * @param {String} basic symbolID
         * @param {Number} symStd
         * @returns {Boolean}
         */
        hasUnitDef: function (symbolID, symStd) {
            
            if(symStd === undefined)
                symStd = RendererSettings.getSymbologyStandard();
            var symbolMap = null;
            
            if(symStd === RendererSettings.Symbology_2525B)
                symbolMap = symbolMapB;
            else
                symbolMap = symbolMapC;
            
            if(symbolMap && symbolMap[symbolID] !== undefined)
            {
                return true;
            }
            else
            {
                return false;
            }
            
        }

    };
}());