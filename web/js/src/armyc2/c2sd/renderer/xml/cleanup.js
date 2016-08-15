onmessage = function(e)
{
    var si = null;
    var batch = null;
	
    if(e.data !== null)
    {
        try
        {
            var fiGlyphs = e.data.glyphs;
            var foGlyphs = [];

            count = fiGlyphs.length;
            for (i = 0; i < count; i += 1) {
                glyph = fiGlyphs[i];
                
                if(glyph["_unicode"] && glyph["_d"])
                {
                    if(glyph["_glyph-name"])
                        delete glyph["_glyph-name"];
                    
                    if(glyph["_horiz-adv-x"])
                        delete glyph["_horiz-adv-x"];
                        
                    foGlyphs.push(glyph);
                }
            }
            postMessage({glyphs:foGlyphs,name:e.data.name});
        }
        catch(err)
        {
            throw err;
        }
    }
	
	
	
}

