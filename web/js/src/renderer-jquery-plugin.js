(function($) {
    $.fn.render2525 = function() {
        var msa = armyc2.c2sd.renderer.utilities.MilStdAttributes;
        
        var RS = armyc2.c2sd.renderer.utilities.RendererSettings;
        
        RS.setSinglePointSymbolOutlineWidth(0);
        
        /**
         * we only have font lookups for F,H,N,U.  But the shapes match one of these
         * four for the remaining affiliations.  So we convert the string to a base
         * affiliation before we do the lookup.
         * @param {String} symbolID
         * @returns {String}
         */        
        function sanitize(symbolID) {
            var code = symbolID.substring(0);
            var affiliation = symbolID.charAt(1);

            if(affiliation === "F" ||//friendly
                    affiliation === "H" ||//hostile
                    affiliation === "U" ||//unknown
                    affiliation === "N" )//neutral
            {
                //code = code;
            }
            else if(affiliation === "S")//suspect
                code = code.charAt(0) + "H" + code.substring(2, 15);
            else if(affiliation === "L")//exercise neutral
                code = code.charAt(0) + "N" + code.substring(2, 15);
            else if(affiliation === "A" ||//assumed friend
                    affiliation === "D" ||//exercise friend
                    affiliation === "M" ||//exercise assumed friend
                    affiliation === "K" ||//faker
                    affiliation === "J")//joker
                code = code.charAt(0) + "F" + code.substring(2, 15);
            else if(affiliation === "P" ||//pending
                    affiliation === "G" ||//exercise pending
                    affiliation === "O" ||//? brought it over from mitch's code
                    affiliation === "W")//exercise unknown
                code = code.charAt(0) + "U" + code.substring(2, 15);
            else
                code = code.charAt(0) + "U" + code.substring(2, 15);

            code = code.substring(0,10) + "-----";

            return code;
        };
        
        return this.filter("canvas").each(function() {
            // The only required data attribute is the symbol code, only
            // continue if it's there
            if ($(this).data("symbol-code") !== undefined) {
                // Create an empty modifiers object
                var modifiers = {},
                        ii;

                var symbolID = $(this).data("symbol-code");

                // Determine the pixel size of the icon to draw
                if ($(this).data("pixel-size") === undefined) {
                    // Use 32 as the default size
                    modifiers[msa.PixelSize] = 32;
                }
                else {
                    modifiers[msa.PixelSize] = $(this).data("pixel-size");
                }
				
                modifiers[msa.Icon] = true;
                if ($(this).data("icon") !== undefined) {
                    modifiers[msa.Icon] = $(this).data("keep-unit-ratio");
                }
				
                if(modifiers[msa.Icon] !== true)
                {
                    //if false, will fill the space. if true, will size with respect to other symbols.
                    if ($(this).data("keep-unit-ratio") === undefined) {
                        // Use 32 as the default size
                        modifiers[msa.KeepUnitRatio] = false;
                    }
                    else {
                        modifiers[msa.KeepUnitRatio] = $(this).data("keep-unit-ratio");
                    }

                    if ($(this).data("sanitize") === true) {   
                        if(symbolID.charAt(1) === 'J' || symbolID.charAt(1) === 'K'){
                                modifiers[msa.FillColor] = "#FF0000";
                        }
                        symbolID = sanitize(symbolID, modifiers);   
                    }
                }
                
                if($(this).data("fill-color") !== undefined)
                    {modifiers[msa.FillColor] = $(this).data("fill-color");}
                
                if($(this).data("line-color") !== undefined)
                    {modifiers[msa.LineColor] = $(this).data("line-color");}
                    
                if($(this).data("sym-std") !== undefined)
                    {modifiers[msa.SymbologyStandard] = $(this).data("sym-std");}

                ii = armyc2.c2sd.renderer.MilStdIconRenderer.Render(symbolID, modifiers);
                if (ii)
                {
                    var canvasObject = $(this).get(0);
                    var ctx = canvasObject.getContext('2d');
                    
                    // Clear the canvas
                    ctx.clearRect(0, 0, canvasObject.width, canvasObject.height);

                    var image = ii.getImage();
                    // Adjust the size of the canvas to match the size of the symbol
                    $(canvasObject).attr("width", ii.getImageBounds().width);
                    $(canvasObject).attr("height", ii.getImageBounds().height);
                    ctx.drawImage(image, Math.round((canvasObject.width - ii.getImageBounds().width) / 2),
                            Math.round((canvasObject.height - ii.getImageBounds().height) / 2));

                }
            }
        });
    };
}(jQuery));


