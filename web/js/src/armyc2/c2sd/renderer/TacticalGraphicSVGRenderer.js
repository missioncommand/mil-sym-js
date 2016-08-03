var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
/** @class */
armyc2.c2sd.renderer.TacticalGraphicSVGRenderer = (function () {
    
    var TGSVGTable = armyc2.c2sd.renderer.utilities.TGSVGTable;
    
    function processSVGPath(path, fillColor, lineColor, strokeWidth)
    {
        var se = '<path d="';
        se += path + '"';
        if(fillColor)
            se += ' fill="' + fillColor + '"';
        if(lineColor)
            se += ' stroke="' + lineColor + '"';
        if(strokeWidth)
            se += ' stroke-width="' + strokeWidth + '"';
        se += ' />';
        return se;
    }
    
return{    
    
    getSVG: function(symbolID, size, color, alpha){
        var symbolBounds = new armyc2.c2sd.renderer.so.Rectangle(-600,-600,1200,1200);
        var width = 1200;
        var height = 1200;
        var id = symbolID;
        if(armyc2.c2sd.renderer.utilities.SymbolUtilities.isWeather(symbolID)===true)
        {
            color = armyc2.c2sd.renderer.utilities.SymbolUtilities.getLineColorOfWeather(symbolID).toHexString(false);
        }//*/
        else if(color===null)
        {
            color = armyc2.c2sd.renderer.utilities.SymbolUtilities.getLineColorOfAffiliation(symbolID).toHexString(false);
        }

        var charSymbolIndex = armyc2.c2sd.renderer.utilities.TacticalGraphicLookup.getCharCodeFromSymbol(id);

        if(charSymbolIndex >= 0)
        {
            var ratio = size/1200;

            var path = TGSVGTable.getSVGPath(charSymbolIndex);
            path = processSVGPath(path,color.toHexString(false));
            var pixel = new armyc2.c2sd.renderer.so.Point(0,0);


            /*ctx.lineCap = "butt";
            ctx.lineJoin = "miter";
            ctx.miterLimit = 5;
            ctx.fillStyle = color;
            ctx.font = fontSize + "pt TacticalGraphics";
            if(alpha < 1.0)
                ctx.globalAlpha = alpha;//*/
            
            var x = Math.round(size/2),
                y = Math.round(size/2);
            
            

            var centerPoint = new armyc2.c2sd.renderer.so.Point(x,y),
                symbolBounds = new armyc2.c2sd.renderer.so.Rectangle(0,0,size,size),
                imageBounds = symbolBounds.clone();
                
            var svg = '<svg width="' + size + 'px" height="' + size + 'px" viewbox="-600 -600 1200 1200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">'
                        + path + '</svg>'; 
            

            var si = new armyc2.c2sd.renderer.utilities.SVGInfo(svg,centerPoint,symbolBounds,imageBounds);
            //test
            //ii.SaveImageToFile("C:\\icon.png", ImageInfo.FormatPNG);
            

        }
        return si;
    }

};
}());