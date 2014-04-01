var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};


/**
 * 
 * @param {type} text
 * @param {type} x
 * @param {type} y
 * @param {type} context
 * @param {type} textBaseline like "alphabetic"(default), top, bottom
 * @returns {undefined}
 */
armyc2.c2sd.renderer.utilities.TextInfo = function (text, x,y, context, textBaseline) {
    this.text = text;
    this.location = new armyc2.c2sd.renderer.so.Point(x,y);
    //this.modifierID = modifierID;

    if(textBaseline === undefined)
    {
        textBaseline = "alphabetic";
    }
    this.textBaseline = textBaseline;
    
    if(context === undefined)
    {
        var buffer = createBuffer(1,1);
        context = buffer.getContext('2d');
    }

    this.bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds(context, text, this.location);
    if(textBaseline === "top")
        this.bounds.setLocation(x,y);
    else if(textBaseline === "bottom")
        this.bounds.setLocation(x,y - this.bounds.getHeight());
    else// (textBaseline === "alphabetic")//an estimation
    {
        this.bounds.shift(0,Math.round(this.bounds.getHeight()*0.3));
    }

};
	
    armyc2.c2sd.renderer.utilities.TextInfo.prototype.setLocation = function(x,y){
       
        var x1 = this.location.getX(),
            y1 = this.location.getY(),
            x2 = x,
            y2 = y;

        this.location.setLocation(x,y);    

        var shiftX = 0,
            shiftY = 0;

        if(x2<x1)
        {
            shiftX = (x1 - x2) * -1;
        }
        else
        {
            shiftX = (x2 - x1);
        }
        if(y2<y1)
        {
            shiftY = (y1 - y2) * -1;
        }
        else
        {
            shiftY = (y2 - y1);
        }

        this.bounds.shift(shiftX,shiftY);

    };//
    armyc2.c2sd.renderer.utilities.TextInfo.prototype.shift = function(x,y){
        this.location.shift(x,y);
        this.bounds.shift(x,y);

    };
    armyc2.c2sd.renderer.utilities.TextInfo.prototype.getTextBounds = function(){
        return this.bounds;
    };
    armyc2.c2sd.renderer.utilities.TextInfo.prototype.getTextOutlineBounds = function(){
        var outlineOffset = armyc2.c2sd.renderer.utilities.RendererSettings.getTextOutlineWidth();
        if(outlineOffset > 2)
            outlineOffset = (outlineOffset - 1)/2;
        else
            outlineOffset = 0;

        if(outlineOffset > 0)
        {//adjust bounds if an outline value is set.
            var bounds = new armyc2.c2sd.renderer.so.Rectangle(
            this.bounds.x - outlineOffset,
            this.bounds.y - outlineOffset,
            this.bounds.width + outlineOffset*2,
            this.bounds.height + outlineOffset*2);

            return bounds;
        }
        else
        {
            return this.bounds;
        }
    };
    armyc2.c2sd.renderer.utilities.TextInfo.prototype.getText = function(){
        return this.text;
    };
    armyc2.c2sd.renderer.utilities.TextInfo.prototype.getLocation = function(){
        return this.location;
    };
    armyc2.c2sd.renderer.utilities.TextInfo.prototype.strokeText = function(context){
        context.strokeText(this.text,this.location.getX(),this.location.getY());
    };
    armyc2.c2sd.renderer.utilities.TextInfo.prototype.fillText = function(context){
        context.fillText(this.text,this.location.getX(),this.location.getY());
    };
