var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

/**
 * 
 * @param {String} text
 * @param {SO.Point} anchorPoint
 * @param {Object} fontInfo
 * @returns {String} justification "start", "middle", or "end"
 */
armyc2.c2sd.renderer.utilities.SVGTextInfo = function (text, anchorPoint, fontInfo, justification) {
    this._text = text;
    this._fontName = fontInfo.name;
    this._fontSize = fontInfo.size;
    this._fontStyle = fontInfo.style;
    if(anchorPoint)
        this._anchor = anchorPoint;
    else
        this._anchor = new armyc2.c2sd.renderer.so.Point(0,0);
    if(justification)
        this._justification = justification;
    else
        this._justification = "start";
    
    this._bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.measureStringNoDOM(text,fontInfo.measurements);
    this._bounds.setLocation(this._anchor.getX(),this._anchor.getY());    
    if(this._justification === "start")
    {
        this._bounds.shift(0,this._anchor.getX() - fontInfo.measurements.height);    
    }
    else if(this._justification === "middle")
    {
        this._bounds.shift(-(this._bounds.getWidth()/2),this._anchor.getY() - fontInfo.measurements.height);
    }
    else if(this._justification === "end")
    {
        this._bounds.shift(-this._bounds.getWidth(),this._anchor.getY() - fontInfo.measurements.height);
    }
    
    
};

    /**
     * 
     * @returns {armyc2.c2sd.renderer.so.Point}
     */
    armyc2.c2sd.renderer.utilities.SVGTextInfo.prototype.getAnchorPoint = function(){
        return this._anchor;
    };
    /**
     * 
     * @returns {armyc2.c2sd.renderer.so.Rectangle}
     */
    armyc2.c2sd.renderer.utilities.SVGTextInfo.prototype.getBounds = function(){
        return this._bounds;
    };
    armyc2.c2sd.renderer.utilities.SVGTextInfo.prototype.getOutlineBounds = function()
    {
        var RS = armyc2.c2sd.renderer.utilities.RendererSettings;
        var outlineOffset = RS.getTextOutlineWidth();

        var tbm = RS.getTextBackgroundMethod();
        if(tbm === RS.TextBackgroundMethod_OUTLINE)
            outlineOffset += 2;   
        if(outlineOffset > 0)
        {//adjust bounds if an outline value is set.
            var bounds = new armyc2.c2sd.renderer.so.Rectangle(
            this._bounds.x - outlineOffset,
            this._bounds.y - outlineOffset,
            this._bounds.width + outlineOffset*2,
            this._bounds.height + outlineOffset*2);

            return bounds;
        }
        else
        {
            return this._bounds;
        }
    };
    armyc2.c2sd.renderer.utilities.SVGTextInfo.prototype.shift = function(x,y){
        this._bounds.shift(x,y);
        this._anchor.shift(x,y);
    };
    armyc2.c2sd.renderer.utilities.SVGTextInfo.prototype.setLocation = function(x,y){
        
        var diffX = this._anchor.getX() - x;
        var diffY = this._anchor.getY() - y;
        var shiftX = 0;
        var shiftY = 0;
        shiftX = -diffX;
        shiftY = -diffY;
            
        this._bounds.shift(shiftX,shiftY);
        this._anchor.setLocation(x,y);
    };
    /**
     * 
     */
    armyc2.c2sd.renderer.utilities.SVGTextInfo.prototype.toSVGElement = function(stroke, strokeWidth, fill, tbm)
    {
        var se = '<text x="' + this._anchor.getX() + '" y="' + this._anchor.getY() + '"';
        se += ' font-family="' + this._fontName + '"';
        se += ' font-size="' + this._fontSize + 'pt"';
        se += ' font-weight="' + this._fontStyle + '"';
        se += ' text-anchor="' + this._justification + '"';
        se += ' alignment-baseline="hanging"';//

        var seStroke = null, 
            seFill = null;        

        if(stroke)
        {
            seStroke = se + ' stroke="' + stroke + '"';
            if(strokeWidth)
                seStroke += ' stroke-width="' + (strokeWidth + 2) + '"';
            seStroke += ' fill="none"';
            seStroke += '>';
            seStroke += this._text;
            seStroke += '</text>';
        }
            
        if(fill)
        {
            seFill = se + ' fill="' + fill + '"';
            seFill += '>';
            seFill += this._text;
            seFill += '</text>';
        }
        
        if(stroke && fill)
            se = seStroke + seFill;
        else if(fill)
            se = seFill;
        else
            se = "";
        return se;
    };

    
