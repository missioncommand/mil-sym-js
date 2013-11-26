(function($) {
    $.fn.render2525 = function() {
        var msa = armyc2.c2sd.renderer.utilities.MilStdAttributes;
        
        return this.filter("canvas").each(function() {
            // The only required data attribute is the symbol code, only
            // continue if it's there
            if ($(this).data("symbol-code") !== undefined) {
                // Create an empty modifiers object
                var modifiers = {},
                        ii;

                // Determine the pixel size of the icon to draw
                if ($(this).data("pixel-size") === undefined) {
                    // Use 32 as the default size
                    modifiers[msa.PixelSize] = 32;
                }
                else {
                    modifiers[msa.PixelSize] = $(this).data("pixel-size");
                }

                // Default to keeping unit ratios
                modifiers[msa.KeepUnitRatio] = true;

                ii = armyc2.c2sd.renderer.MilStdIconRenderer.Render($(this).data("symbol-code"), modifiers);
                if (ii !== undefined)
                {
                    var canvasObject = $(this).get(0);
                    var ctx = canvasObject.getContext('2d');
                    
                    // Clear the canvas
                    ctx.clearRect(0, 0, canvasObject.width, canvasObject.height);
                    
                    // Adjust the size of the canvas to match the size of the symbol
                    $(canvasObject).attr("width", ii.getImageBounds().width);
                    $(canvasObject).attr("height", ii.getImageBounds().height);

                    ctx.drawImage(ii.getImage(), Math.round((canvasObject.width - ii.getImageBounds().width) / 2),
                            Math.round((canvasObject.height - ii.getImageBounds().height) / 2));
                }
            }
        });
    };
}(jQuery));


