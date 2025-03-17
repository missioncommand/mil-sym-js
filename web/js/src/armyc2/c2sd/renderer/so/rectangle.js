var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.so = armyc2.c2sd.renderer.so || {};


/**
 * 
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {Number} height
 * @returns {Rectangle}
 */
armyc2.c2sd.renderer.so.Rectangle = function (x,y,width,height) {
        this.x = x,
        this.y = y,
        this.width = width,
        this.height = height,
        this.bottom = y + height,
        this.right = x + width;
};      
        // <editor-fold defaultstate="collapsed" desc="Public Property Functions">

        armyc2.c2sd.renderer.so.Rectangle.prototype.getShapeType = function(){
            return "RECTANGLE";//armyc2.c2sd.renderer.so.ShapeTypes.RECTANGLE;
        };
        
        armyc2.c2sd.renderer.so.Rectangle.prototype.getBounds = function(){
            return new armyc2.c2sd.renderer.so.Rectangle(this.x-1,
                                    this.y-1,
                                    this.width+2,
                                    this.height+2);
        };

        armyc2.c2sd.renderer.so.Rectangle.prototype.getX = function(){
            return this.x;
        };
        /**
         * 
         * @returns {Number}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.getY = function(){
            return this.y;
        };
        /**
         * 
         * @returns {Number}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.getWidth = function(){
            return this.width;
        };
        /**
         * 
         * @returns {Number}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.getHeight = function(){
            return this.height;
        };
        /**
         * 
         * @returns {Number}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.getBottom = function(){
            return this.bottom;
        };
        /**
         * 
         * @returns {Number}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.getRight = function(){
            return this.right;
        };
                /**
         * 
         * @returns {Number}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.getCenterX = function(){
            return this.x + (this.width/2);
        };
        /**
         * 
         * @returns {Number}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.getCenterY = function(){
            return this.y + (this.height/2);
        };
        /**
         * setLocation x,y (top,left) while maintaining the width and height.
         * @param {type} x
         * @param {type} y
         * @returns {_L7.Anonym$0.Rectangle.setLocation}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.setLocation = function(x,y){
            this.x = x;
            this.y = y;
            this.bottom = y + this.height;
            this.right = x + this.width;
        };
        
        armyc2.c2sd.renderer.so.Rectangle.prototype.isEmpty = function()
        {
            return (this.width <= 0.0) || (this.height <= 0.0);
        };
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Public Utility Functions">
        
        armyc2.c2sd.renderer.so.Rectangle.prototype.shift = function(x,y){
            this.x += x;
            this.y += y;
            this.right += x;
            this.bottom +=y;
            //height & width shouldn't change in a full shift of the rectangle.
            //this.height = this.bottom - this.y;
            //this.width = this.right - this.x;
        };
        /**
         * moves top,left points leaving bottom,right intact.
         * adjusts the height & width values as necessary
         * @param {type} x the amount to move the x point by
         * @param {type} y the amount to move the y point by
         * @returns {_L7.Anonym$0.Rectangle.shiftTL}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.shiftTL = function(x,y){
            this.x += x;
            this.y += y;
            this.height = this.bottom - this.y;
            this.width = this.right - this.x;
        };
        /**
         * moves bottom,right points leaving top,left intact.
         * adjusts the height & width values as necessary
         * @param {type} x the amount to move the right point by
         * @param {type} y the amount to move the bottom point by
         * @returns {_L7.Anonym$0.Rectangle.shiftTL}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.shiftBR = function(x,y){
            this.right += x;
            this.bottom += y;
            this.height = this.bottom - this.y;
            this.width = this.right - this.x;
        };
        /**
         * Grow the rectangle by this many pixels in every direction
         * @param {Number} pixel
         * @returns {void}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.grow = function (pixel){
            this.shiftTL(-pixel,-pixel);
            this.shiftBR(pixel,pixel);
        };
        /**
         * Will merge the bounds of two rectangle.
         * @param {Rectangle} rect
         * @returns {void}
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.union = function(rect){
            if(rect)
            {
                if(rect.y < this.y)
                    this.y = rect.y;
                if(rect.x < this.x)
                    this.x = rect.x;
                if(rect.bottom > this.bottom)
                    this.bottom = rect.bottom;
                if(rect.right > this.right)
                    this.right = rect.right;
                this.width = this.right - this.x;
                this.height = this.bottom - this.y;
            }
                
        };
        armyc2.c2sd.renderer.so.Rectangle.prototype.unionPoint = function(point){
            if(point)
            {
                if(point.y < this.y)
                    this.y = point.y;
                if(point.x < this.x)
                    this.x = point.x;
                if(point.y > this.bottom)
                    this.bottom = point.y;
                if(point.x > this.right)
                    this.right = point.x;
                this.width = this.right - this.x;
                this.height = this.bottom - this.y;
            }
                
        };
        /**
         * if 2 values passed in, they are assumed to be the x,y of a point.
         * if 4 values passed in, they are assumed to be the x,y,w,h values
         * of a Rectangle.
         * @param {Number} x x value of a point or rectangle
         * @param {Number} y y value of a point or rectangle
         * @param {Number} w width of a rectangle
         * @param {Number} h height of a rectangle
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.contains = function(x,y,w,h)
        {
            if(x && y && w && h)
            {
                if (this.isEmpty() || w <= 0 || h <= 0) {
                    return false;
                }
                var x0 = this.getX(),
                    y0 = this.getY();
                return (x >= x0 &&
                        y >= y0 &&
		(x + w) <= x0 + this.getWidth() &&
		(y + h) <= y0 + this.getHeight());
            }
            else if(x && y)
            {
                var x0 = this.getX(),
                    y0 = this.getY();
                return (x >= x0 &&
                    y >= y0 &&
                    x < x0 + this.getWidth() &&
                    y < y0 + this.getHeight());
            }
            else
                return false;
        };
        
        /**
         * 
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.containsPoint = function(point)
        {
            if(point)
            {
                var x = point.getX();
                var y = point.getY();
                var x0 = this.getX(),
                    y0 = this.getY();
                return (x >= x0 &&
                    y >= y0 &&
                    x < x0 + this.getWidth() &&
                    y < y0 + this.getHeight());
            }
            else
                return false;
        };
        
        armyc2.c2sd.renderer.so.Rectangle.prototype.containsRectangle = function(rect)
        {
            if(rect)
            {
                var x = rect.getX();
                var y = rect.getY();
                var w = rect.getWidth();
                var h = rect.getHeight();
                if (this.isEmpty() || w <= 0 || h <= 0) 
                {
                    return false;
                }
                var x0 = this.getX(),
                    y0 = this.getY();
                return (x >= x0 &&
                    y >= y0 &&
                    (x + w) <= x0 + this.getWidth() &&
                    (y + h) <= y0 + this.getHeight());
            }
            else
                return false;
        };
        
        /**
         * Ported from Java
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.outcode = function(x, y) 
        {
            var out = 0;
            if (this.width <= 0) {
            out |= this.OUT_LEFT | this.OUT_RIGHT;
            } else if (x < this.x) {
            out |= this.OUT_LEFT;
            } else if (x > this.x + this.width) {
            out |= this.OUT_RIGHT;
            }
            if (this.height <= 0) {
            out |= this.OUT_TOP | this.OUT_BOTTOM;
            } else if (y < this.y) {
            out |= this.OUT_TOP;
            } else if (y > this.y + this.height) {
            out |= this.OUT_BOTTOM;
            }
            return out;
        };
        
        /**
        * Tests if the specified line segment intersects the interior of this
        * <code>Rectangle</code>. Ported from java.
        *
        * @param x1 the X coordinate of the start point of the specified
        *           line segment
        * @param y1 the Y coordinate of the start point of the specified
        *           line segment
        * @param x2 the X coordinate of the end point of the specified
        *           line segment
        * @param y2 the Y coordinate of the end point of the specified
        *           line segment
        * @return <code>true</code> if the specified line segment intersects
        * the interior of this <code>Rectangle</code>; <code>false</code>
        * otherwise.
        */
        armyc2.c2sd.renderer.so.Rectangle.prototype.intersectsLine = function(x1, y1, x2, y2) 
        {
            var out1, out2;
            if ((out2 = outcode(x2, y2)) === 0) {
                return true;
            }
            while ((out1 = outcode(x1, y1)) !== 0) {
                if ((out1 & out2) !== 0) {
                    return false;
                }
                if ((out1 & (this.OUT_LEFT | this.OUT_RIGHT)) !== 0) {
                    var x = this.getX();
                    if ((out1 & this.OUT_RIGHT) !== 0) {
                        x += getWidth();
                    }
                    y1 = y1 + (x - x1) * (y2 - y1) / (x2 - x1);
                    x1 = x;
                } else {
                    var y = this.getY();
                    if ((out1 & this.OUT_BOTTOM) !== 0) {
                        y += getHeight();
                    }
                    x1 = x1 + (y - y1) * (x2 - x1) / (y2 - y1);
                    y1 = y;
                }
            }
            return true;
        };
        
        // </editor-fold>
        
        armyc2.c2sd.renderer.so.Rectangle.prototype.setPath = function(context){
            var x = this.getX(),
                y = this.getY(),
                w = this.getWidth(),
                h = this.getHeight();
            
            //context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + w,y);
            context.lineTo(x + w,y + h);
            context.lineTo(x,y + h);
            context.closePath();
            
        };
        armyc2.c2sd.renderer.so.Rectangle.prototype.stroke = function(context){
            context.strokeRect(this.getX(),this.getY(),this.getWidth(),this.getHeight());
        };
        armyc2.c2sd.renderer.so.Rectangle.prototype.fill = function(context){
            context.fillRect(this.getX(),this.getY(),this.getWidth(),this.getHeight());
        };
        armyc2.c2sd.renderer.so.Rectangle.prototype.clone = function(){
            return new armyc2.c2sd.renderer.so.Rectangle(this.x,this.y,this.width,this.height);
        };
        
        /**
         * ported from java
         */
        armyc2.c2sd.renderer.so.Rectangle.prototype.intersects = function(r)
        {
            if(r)
            {
                var tw = this.width;
                var th = this.height;
                var rw = r.width;
                var rh = r.height;
                if (rw <= 0 || rh <= 0 || tw <= 0 || th <= 0) {
                    return false;
                }
                var tx = this.x;
                var ty = this.y;
                var rx = r.x;
                var ry = r.y;
                rw += rx;
                rh += ry;
                tw += tx;
                th += ty;
                //      overflow || intersect
                return ((rw < rx || rw > tx) &&
                        (rh < ry || rh > ty) &&
                        (tw < tx || tw > rx) &&
                        (th < ty || th > ry));    
            }
            else
                return false;
            
        };//*/
        
        armyc2.c2sd.renderer.so.Rectangle.prototype.toSVGElement = function(stroke, strokeWidth, fill)
        {
            var line = '<rect x="' + this.x + '" y="' + this.y;
            line += '" width="' + this.width + '" height="' + this.height + '"';
            
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
    
        armyc2.c2sd.renderer.so.Rectangle.prototype.OUT_LEFT = 1;
        armyc2.c2sd.renderer.so.Rectangle.prototype.OUT_TOP = 2;
        armyc2.c2sd.renderer.so.Rectangle.prototype.OUT_RIGHT = 4;
        armyc2.c2sd.renderer.so.Rectangle.prototype.OUT_BOTTOM = 8;
    
