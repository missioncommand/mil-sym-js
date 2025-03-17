var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.so = armyc2.c2sd.renderer.so || {};


/**
 * RoundedRectangle
 * @param {Number} x
 * @param {Number} y
 * @param {Number} w
 * @param {Number} h
 * @param {Number} radius
 * @returns {RoundedRectangle}
 */
armyc2.c2sd.renderer.so.RoundedRectangle = function (x,y,w,h,radius) {

    this.radius = radius;

    this.rectangle = new armyc2.c2sd.renderer.so.Rectangle(x,y,w,h);
	
};

    /**
     * 
     */
    armyc2.c2sd.renderer.so.RoundedRectangle.prototype.getShapeType = function(){
        return "ROUNDED_RECTANGLE";//armyc2.c2sd.renderer.so.ShapeTypes.ROUNDED_RECTANGLE;
    };

    /**
     * 
     */
    armyc2.c2sd.renderer.so.RoundedRectangle.prototype.getBounds = function(){
        return new armyc2.c2sd.renderer.so.Rectangle(this.rectangle.getX()-1,
                                this.rectangle.getY()-1,
                                this.rectangle.getWidth()+2,
                                this.rectangle.getHeight()+2);
    };

    /**
     * @param {Number} x 
     * @param {Number} y
     * @return {void} 
     */
    armyc2.c2sd.renderer.so.RoundedRectangle.prototype.shift = function(x,y){
        this.rectangle.shift(x,y);
    };

    /**
     * @param {HTML5 Canvas Context} context
     * @return {void}  
     */
    armyc2.c2sd.renderer.so.RoundedRectangle.prototype.setPath = function(context){
        var x = this.rectangle.getX(),
            y = this.rectangle.getY(),
            w = this.rectangle.getWidth(),
            h = this.rectangle.getHeight();
        if(w < (2 * this.radius))
            this.radius = w/2;
        if(h < (2 * this.radius))
            this.radius = h/2;
        var r = this.radius;

        //context.beginPath();
        context.moveTo(x + r, y);
        context.lineTo(x + w -r,y);
        context.arcTo(x + w, y, x + w, y+r, r);
        context.lineTo(x + w,y + h - r);
        context.arcTo(x + w, y+h, x+w-r, y + h, r);
        context.lineTo(x + r,y + h);
        context.arcTo(x, y+h, x, y+h-r, r);
        context.lineTo(x,y + r);
        context.arcTo(x, y, x + r, y, r);

    };
    /**
     * @param {HTML5 Canvas Context} context 
     * @return {void} 
     */
    armyc2.c2sd.renderer.so.RoundedRectangle.prototype.stroke = function(context){
        context.beginPath();
        this.setPath(context);
        context.stroke();
    };
    /**
     * @param {HTML5 Canvas Context} context 
     * @return {void} 
     */
    armyc2.c2sd.renderer.so.RoundedRectangle.prototype.fill = function(context){
        context.beginPath();
        this.setPath(context);
        context.fill();
    };
    
    armyc2.c2sd.renderer.so.RoundedRectangle.prototype.toSVGElement = function(stroke, strokeWidth, fill)
    {  
        var line = '<rect x="' + this.rectangle.getX() + '" y="' + this.rectangle.getY();
        line += '" rx="' + this.radius + '" ry="' + this.radius;
        line += '" width="' + this.rectangle.getWidth() + '" height="' + this.rectangle.getHeight() + '"';
        
        if(strokeWidth)
            line += ' stroke-width="' + strokeWidth + '"';
        else if(stroke) 
            line += ' stroke-width="2"';
        
        if(stroke)
            line += ' stroke="' + stroke + '"';
            
        if(fill)
            line += ' fill="' + fill + '"';
        else
            line += ' fill="none"';
        
        line += '/>';
        return line;
    };

