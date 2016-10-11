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
 * @param {String} justification "start", "middle", or "end"
 * @param {Number} angle
 */
armyc2.c2sd.renderer.utilities.SVGTextInfo = function (text, anchorPoint, fontInfo, justification, angle) {
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
    if(angle)
        this._angle = angle;
    else
        this._angle = null;
    
    this._bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.measureStringNoDOM(text,fontInfo.measurements);
    this._bounds.setLocation(this._anchor.getX(),this._anchor.getY());    
    if(this._justification === "start")
    {
        this._bounds.shift(0,this._anchor.getX() - fontInfo.measurements.height);    
    }
    else if(this._justification === "middle")
    {
        this._bounds.shift(-(this._bounds.getWidth()/2), -fontInfo.measurements.height);
    }
    else if(this._justification === "end")
    {
        this._bounds.shift(-this._bounds.getWidth(), -fontInfo.measurements.height);
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
        se += ' alignment-baseline="alphabetic"';//  
        se += ' stroke-miterlimit="3"';  
        
        se += ' text-anchor="' + this._justification + '"';
        
        if(this._angle)
        {
            se += ' transform="rotate(' + this._angle + ' ' + this._anchor.getX() + ' ' + this._anchor.getY() + ')"';
        }

        var seStroke = null, 
            seFill = null;        
            
        var text = this._text;
        //catch special characters that break SVGs as base64 dataURIs
        text = text.replace(/\&/g,"&amp;");
        text = text.replace(/\</g,"&lt;");
        text = text.replace(/\</g,"&gt;");
        //text = text.replace(/\u2022/g,"&#x2022;");//echelon and ellipses dot
        //text = text.replace(/\u25CF/g,"&#x2022;");//echelon and ellipses dot (black circle)
        text = text.replace(/\u2022|\u25CF/g,"&#x2022;");//echelon and ellipses dot (black circle)
        text = text.replace(/\u00B1/g,"&#x00B1;");//"RD" reinforce/reduced +- symbol
        
        if(stroke)
        {
            seStroke = se + ' stroke="' + stroke + '"';
            if(strokeWidth)
                seStroke += ' stroke-width="' + (strokeWidth + 2) + '"';
            seStroke += ' fill="none"';
            seStroke += '>';
            seStroke += text;
            seStroke += '</text>';
        }
            
        if(fill)
        {
            seFill = se + ' fill="' + fill + '"';
            seFill += '>';
            seFill += text;
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

    
