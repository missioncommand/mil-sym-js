var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};

armyc2.c2sd.renderer.MilStdIconRenderer = (function () {
    
    var MilStdAttributes = armyc2.c2sd.renderer.utilities.MilStdAttributes,
        SymbolUtilities = armyc2.c2sd.renderer.utilities.SymbolUtilities,
        RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings,
        initialized = false;
        
    try
    {
        if(initialized === false)
        {
            //load in xml files
            armyc2.c2sd.renderer.utilities.UnitDefTable.init();  
            armyc2.c2sd.renderer.utilities.SymbolDefTable.init();
            armyc2.c2sd.renderer.utilities.SinglePointLookup.init();
            armyc2.c2sd.renderer.utilities.UnitFontLookup.init();
            armyc2.c2sd.renderer.utilities.TacticalGraphicLookup.init();
            
            if(armyc2.c2sd.renderer.utilities.UnitDefTable.hasSymbolMap(RendererSettings.Symbology_2525Bch2_USAS_13_14)===false)
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
    
    
return{    

    CanRender: function(){
        
    },
    Render: function(symbolID, modifiers){
        if(modifiers === null)
        {
            modifiers = {};
        }
        
        var basicID = SymbolUtilities.getBasicSymbolID(symbolID);
        
        if(SymbolUtilities.isTacticalGraphic(symbolID))
        {
            var sd = armyc2.c2sd.renderer.utilities.SymbolDefTable.getSymbolDef(basicID,modifiers[MilStdAttributes.SymbologyStandard]);
            if(sd === null)
            {
                symbolID = SymbolUtilities.reconcileSymbolID(symbolID);
                basicID = SymbolUtilities.getBasicSymbolID(symbolID);
                sd = armyc2.c2sd.renderer.utilities.SymbolDefTable.getSymbolDef(basicID);
            }
            
            if(sd !== null && sd.drawCategory === armyc2.c2sd.renderer.utilities.SymbolDefTable.DRAW_CATEGORY_POINT)
            {
                return armyc2.c2sd.renderer.SinglePointRenderer.renderSPTG(symbolID, modifiers);
            }
            else
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
                
                var ii = armyc2.c2sd.renderer.TacticalGraphicIconRenderer.getIcon(symbolID, size, lineColor);
                return ii;
                //call tactical graphics single point renderer
            }
        }
        else
        {
            if(armyc2.c2sd.renderer.utilities.UnitDefTable.hasUnitDef(basicID,modifiers[MilStdAttributes.SymbologyStandard])===false)
            {
                symbolID = SymbolUtilities.reconcileSymbolID(symbolID,false);
            }
            return armyc2.c2sd.renderer.SinglePointRenderer.renderUnit(symbolID, modifiers);
        }
    }
};
}());
