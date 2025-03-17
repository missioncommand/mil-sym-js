var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};

armyc2.c2sd.renderer.MilStdIconRenderer = (function () {
    
    var MilStdAttributes = armyc2.c2sd.renderer.utilities.MilStdAttributes,
        SO = armyc2.c2sd.renderer.so,
        ImageInfo = armyc2.c2sd.renderer.utilities.ImageInfo,
        SymbolUtilities = armyc2.c2sd.renderer.utilities.SymbolUtilities,
        UnitDefTable = armyc2.c2sd.renderer.utilities.UnitDefTable,
        UnitFontLookup = armyc2.c2sd.renderer.utilities.UnitFontLookup,
        SymbolDefTable = armyc2.c2sd.renderer.utilities.SymbolDefTable,
        RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings,
        RendererUtilities = armyc2.c2sd.renderer.utilities.RendererUtilities,
        SinglePointRenderer = armyc2.c2sd.renderer.SinglePointRenderer,
        TacticalGraphicIconRenderer = armyc2.c2sd.renderer.TacticalGraphicIconRenderer,
        initialized = false;
        
    try
    {
        if(initialized === false)
        {
            //load in xml files
            UnitDefTable.init();  
            SymbolDefTable.init();
            armyc2.c2sd.renderer.utilities.SinglePointLookup.init();
            armyc2.c2sd.renderer.utilities.UnitFontLookup.init();
            armyc2.c2sd.renderer.utilities.TacticalGraphicLookup.init();
            
            if(UnitDefTable.hasSymbolMap(RendererSettings.Symbology_2525B)===false)
            {//if 2525B info isn't loaded, make C the rendering default.
                RendererSettings.setSymbologyStandard(RendererSettings.Symbology_2525C);
            }

            initialized = true;
        }
    }
    catch(err)
    {
        err.message += " - MilStdIconRenderer failed to initialize";
        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("MilStdIconRenderer","Init",err);
    }
    
    function renderTacticalMultipointIcon(symbolID, modifiers)
    {
        var lineColor = SymbolUtilities.getLineColorOfAffiliation(symbolID);
        if(modifiers[MilStdAttributes.LineColor] !== undefined )
        {
            lineColor = modifiers[MilStdAttributes.LineColor];
        }
        var size = RendererSettings.getDefaultPixelSize();//40;
        if(modifiers[MilStdAttributes.PixelSize] !== undefined )
        {
            size = modifiers[MilStdAttributes.PixelSize];
        }
        var alpha = 1.0;
        if(modifiers[MilStdAttributes.Alpha] !== undefined )
        {
            alpha = modifiers[MilStdAttributes.Alpha] / 255.0;
        }
        var symStd = RendererSettings.getSymbologyStandard();
        if(modifiers[MilStdAttributes.SymbologyStandard] !== undefined )
        {
            symStd = modifiers[MilStdAttributes.SymbologyStandard];
        }

        var ii = TacticalGraphicIconRenderer.getIcon(symbolID, size, lineColor, alpha, symStd);
        return ii;
    }
    
return{    

    CanRender: function(){
        
    },
    Render: function(symbolID, modifiers){
        if(!(modifiers))
        {
            modifiers = {};
        }
        var symStd = 0;
        if(modifiers[MilStdAttributes.SymbologyStandard] !== null && modifiers[MilStdAttributes.SymbologyStandard] !== undefined)
        {
            symStd = modifiers[MilStdAttributes.SymbologyStandard];
        }
        else
        {
            symStd = RendererSettings.getSymbologyStandard();
            modifiers[MilStdAttributes.SymbologyStandard] = symStd;
        }
        
        var basicID = SymbolUtilities.getBasicSymbolIDStrict(symbolID);
        
        if(SymbolUtilities.isTacticalGraphic(symbolID))
        {
            var sd = SymbolDefTable.getSymbolDef(basicID,symStd);
            if(sd === null)
            {
                symbolID = SymbolUtilities.reconcileSymbolID(symbolID);
                basicID = SymbolUtilities.getBasicSymbolIDStrict(symbolID);
                sd = SymbolDefTable.getSymbolDef(basicID);
            }
            
            if(sd !== null && sd.drawCategory === SymbolDefTable.DRAW_CATEGORY_POINT)
            {
                return armyc2.c2sd.renderer.SinglePointRenderer.renderSPTG(symbolID, modifiers);
            }
            else
            {
                return renderTacticalMultipointIcon(symbolID,modifiers);
            }
        }
        else if(UnitFontLookup.hasUnitLookup(basicID,symStd))
        {
            return SinglePointRenderer.renderUnit(symbolID, modifiers);
        }
        else if(SymbolUtilities.is3dAirspace(symbolID))
        {
            return renderTacticalMultipointIcon(symbolID, modifiers);
        }
        else
        {
            symbolID = SymbolUtilities.reconcileSymbolID(symbolID,false);
            return SinglePointRenderer.renderUnit(symbolID, modifiers);
        }
    },
    /**
     * 
     * @param {armyc2.c2sd.renderer.utilities.ImageInfo} imageInfo
     * @param {String} symbolID
     * @param {object} modifiers
     * @returns {armyc2.c2sd.renderer.utilities.ImageInfo}
     */
    RenderImageInfoWithLabels: function(imageInfo, symbolID, modifiers)
    {
        var ii = SinglePointRenderer.renderImage(imageInfo, symbolID, modifiers);
        return ii;
    },
    /**
     * 
     * @param {HTML5 canvas} canvas
     * @param {String} symbolID
     * @param {Object} modifiers
     * @param {armyc2.c2sd.renderer.so.Point} centerPoint optional, default is center of the image.
     * @param {armyc2.c2sd.renderer.so.Rectangle} symbolBounds optional, default is size of the entire image.
     * @returns {armyc2.c2sd.renderer.utilities.ImageInfo}
     */
    RenderCanvasWithLabels:  function(canvas, symbolID, modifiers, centerPoint, symbolBounds)
    {
        var ib = null,
            cp = null,
            sb = null;

        var width = canvas.width;
        var height = canvas.height;

        ib = new SO.Rectangle(0,0,width,height);//should be the same or larger than symbol bounds
        if(centerPoint)
            cp = centerPoint;
        else
            cp = cp = new SO.Point(width/2,height/2);//where image should be centered
        if(symbolBounds)
            sb = symbolBounds;
        else
            sb = new SO.Rectangle(0,0,width,height);//bounds of the core symbol
            
        var ii = new ImageInfo(canvas,cp,sb,ib);
        ii = SinglePointRenderer.renderImage(ii, symbolID, modifiers);
        return ii;
        
    },
    /**
     * 
     * @param {String} url
     * @param {String} symbolID
     * @param {Object} modifiers
     * @param {function} callback that takes an ImageInfo object
     */
    RenderImageUrlWithLabels: function(url, symbolID, modifiers, callback)
    {
        //load image into canvas
        var buffer = null;
        var ctx = null;
        var image = new Image();
        var rcwl = this.RenderCanvasWithLabels;

        image.onload = function()
        {
            buffer = document.createElement('canvas');
            ctx = buffer.getContext('2d');
            buffer.width = image.width;
            buffer.height = image.height;
            ctx.drawImage(image,0,0);

            var ii = rcwl(buffer, symbolID, modifiers);
            callback(ii);
        };
        image.src = url;
    }
};
}());
