var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};

armyc2.c2sd.renderer.MilStdSVGRenderer = (function () {
    
    var MilStdAttributes = armyc2.c2sd.renderer.utilities.MilStdAttributes,
        SO = armyc2.c2sd.renderer.so,
        SymbolUtilities = armyc2.c2sd.renderer.utilities.SymbolUtilities,
        UnitDefTable = armyc2.c2sd.renderer.utilities.UnitDefTable,
        UnitSVGTable = armyc2.c2sd.renderer.utilities.UnitSVGTable,
        UnitFontLookup = armyc2.c2sd.renderer.utilities.UnitFontLookup,
        SymbolDefTable = armyc2.c2sd.renderer.utilities.SymbolDefTable,
        RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings,
        RendererUtilities = armyc2.c2sd.renderer.utilities.RendererUtilities,
        SinglePointSVGRenderer = armyc2.c2sd.renderer.SinglePointSVGRenderer,
        TacticalGraphicSVGRenderer = armyc2.c2sd.renderer.TacticalGraphicSVGRenderer,
        initialized = false;
        
    try
    {
        if(initialized === false)
        {
            //load in xml files
            UnitDefTable.init();  
            UnitSVGTable.init();
            SymbolDefTable.init();
            armyc2.c2sd.renderer.utilities.SPSVGTable.init();
            armyc2.c2sd.renderer.utilities.SinglePointLookup.init();
            armyc2.c2sd.renderer.utilities.UnitFontLookup.init();
            armyc2.c2sd.renderer.utilities.TacticalGraphicLookup.init();
            armyc2.c2sd.renderer.utilities.TGSVGTable.init();
            
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

        var outlineColor = null;
        var symbolOutlineWidth = RendererSettings.getSinglePointSymbolOutlineWidth();
        if(modifiers[MilStdAttributes.OutlineWidth] !== undefined && modifiers[MilStdAttributes.OutlineWidth] > 0)
        {
            symbolOutlineWidth = modifiers[MilStdAttributes.OutlineWidth];
        }
        if(symbolOutlineWidth > 0)
            outlineColor = RendererUtilities.getIdealOutlineColor(lineColor.toHexString(false),true);

        var si = TacticalGraphicSVGRenderer.getSVG(symbolID, size, lineColor, alpha, symStd, symbolOutlineWidth, outlineColor);
        return si;
    }
    
return{    

    CanRender: function(){
        
    },
    Render: function(symbolID, modifiers,fontInfo){
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
                return armyc2.c2sd.renderer.SinglePointSVGRenderer.renderSPTG(symbolID, modifiers, fontInfo);
            }
            else
            {
                return renderTacticalMultipointIcon(symbolID,modifiers);
            }
        }
        else if(UnitFontLookup.hasUnitLookup(basicID,symStd))
        {
            return SinglePointSVGRenderer.renderUnit(symbolID, modifiers, fontInfo);
        }
        else if(SymbolUtilities.is3dAirspace(symbolID))
        {
            return renderTacticalMultipointIcon(symbolID, modifiers, fontInfo);
        }
        else
        {
            symbolID = SymbolUtilities.reconcileSymbolID(symbolID,false);
            return SinglePointSVGRenderer.renderUnit(symbolID, modifiers, fontInfo);
        }
    },
};
}());
