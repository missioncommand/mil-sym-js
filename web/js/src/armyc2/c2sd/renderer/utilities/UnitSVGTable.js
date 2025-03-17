var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.UnitSVGTable = (function () {

    var map = null,
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
            
            if(map===null  && armyc2.c2sd.renderer.xml.UnitFontSVG)
            {
                symbols = armyc2.c2sd.renderer.xml.UnitFontSVG.svg.glyph;
                armyc2.c2sd.renderer.xml.UnitFontSVG = null;
                map = {};
                count = symbols.length;
                for (i = 0; i < count; i++) {
                    symbol = symbols[i];
                    
                    if (symbol && symbol._unicode && symbol._d) 
                    {
                        
                        data = {};
                        data.ID = parseInt("0x" + symbol._unicode);
                        data.d = symbol._d;
                        map[data.ID] = data.d;
                    } 
                }
            }           
        },
      
        
        /**
         * 
         * @param {Integer} ID
         * @returns {unitDef} has symbolID, description, drawCategory,
         * hierarchy, alphahierarchy, path.  drawCategory is a Number.
         */
        getSVGPath: function (ID) 
        {
           
            if(map[ID] !== undefined)
            {
                return map[ID];
            }
            else
            {
                return null;
            }
            
        },
        /**
         * 
         * @param {Integer} basic ID
         * @param {Number} symStd
         * @returns {Boolean}
         */
        hasSVGPath: function (ID) 
        {
            if(map[ID] !== undefined)
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