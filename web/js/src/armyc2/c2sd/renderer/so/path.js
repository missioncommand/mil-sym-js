var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.so = armyc2.c2sd.renderer.so || {};

/**
 * 
 * @returns {Path}
 */
armyc2.c2sd.renderer.so.Path = function () {
    
    this._actions = [],
    this._dashArray = null,
    this._startPoint=null,
    this._endPoint=null,
    this._lastMoveTo = null,
    this._rectangle = null,
    this._method = null;//stroke,fill,fillPattern
	
};


    /**
     * @return {SO.ShapeTypes} ShapeTypes.Path
     */
    armyc2.c2sd.renderer.so.Path.prototype.getShapeType = function(){
        return armyc2.c2sd.renderer.so.ShapeTypes.PATH;
    };
    
    armyc2.c2sd.renderer.so.Path.prototype.setLineDash = function(dashArray)
    {
        this._dashArray = dashArray;
    }

    /**
     * @return {SO.Rectangle} description
     */
    armyc2.c2sd.renderer.so.Path.prototype.getBounds = function(){
        if(this._rectangle)
        {
            return new armyc2.c2sd.renderer.so.Rectangle(this._rectangle.getX(),
                this._rectangle.getY(),
                this._rectangle.getWidth(),
                this._rectangle.getHeight());
        }
        else
        {
            return null;
        }
    };
    /**
     * @param {Number} x 
     * @param {Number} y
     * @return {void}
     */
    armyc2.c2sd.renderer.so.Path.prototype.shift = function(x,y){
        var size = this._actions.length;
        var temp = null;
        this._rectangle.shift(x,y);

        for(var i=0; i<size;i++)
        {
            temp = this._actions[i];
            if(temp[0]===armyc2.c2sd.renderer.so.ActionTypes.ACTION_MOVE_TO)
            {
                temp[1] = temp[1] + x;
                temp[2] = temp[2] + y;
            }
            else if(temp[0]===armyc2.c2sd.renderer.so.ActionTypes.ACTION_LINE_TO)
            {
                temp[1] = temp[1] + x;
                temp[2] = temp[2] + y;
            }
            else if(temp[0]===armyc2.c2sd.renderer.so.ActionTypes.ACTION_CURVE_TO)
            {
                temp[1] = temp[1] + x;
                temp[2] = temp[2] + y;
                temp[3] = temp[3] + x;
                temp[4] = temp[4] + y;
                temp[5] = temp[5] + x;
                temp[6] = temp[6] + y;
            }
            else if(temp[0]===armyc2.c2sd.renderer.so.ActionTypes.ACTION_QUAD_TO)
            {
                temp[1] = temp[1] + x;
                temp[2] = temp[2] + y;
                temp[3] = temp[3] + x;
                temp[4] = temp[4] + y;
            }
            else if(temp[0]===armyc2.c2sd.renderer.so.ActionTypes.ACTION_ARC_TO)
            {
                temp[1] = temp[1] + x;
                temp[2] = temp[2] + y;
                temp[3] = temp[3] + x;
                temp[4] = temp[4] + y;
            }
            else if(temp[0]===armyc2.c2sd.renderer.so.ActionTypes.ACTION_ARC)
            {
                temp[1] = temp[1] + x;
                temp[2] = temp[2] + y;
            }
        }
        this._startPoint.shift(x,y);
        this._endPoint.shift(x,y);
        this._lastMoveTo.shift(x,y);
    };

    /**
     * @return {Number} The number of this._actions on the path
     */
    armyc2.c2sd.renderer.so.Path.prototype.getLength = function(){
        this._actions.length;
    };

    /**
     * Adds a point to the path by moving to the specified coordinates specified
     * @param {type} x
     * @param {type} y
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Path.prototype.moveTo = function(x,y){
        var so = armyc2.c2sd.renderer.so;
        if(this._actions.length === 0)
        {
            this._rectangle = new so.Rectangle(x,y,1,1);
            this._startPoint = new so.Point(x,y);
            this._endPoint = new so.Point(x,y);
            //curr_startPoint = new armyc2.c2sd.renderer.so.Point(x,y);
            //curr_endPoint = new armyc2.c2sd.renderer.so.Point(x,y);
        }
        this._rectangle.unionPoint(new so.Point(x,y));
        this._actions.push([so.ActionTypes.ACTION_MOVE_TO,x,y]);
        this._lastMoveTo = new so.Point(x,y);
		this._endPoint = new so.Point(x,y);
    };
    /**
     * Adds a point to the path by drawing a straight line from the current 
     * coordinates to the new specified coordinates specified
     * @param {type} x
     * @param {type} y
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Path.prototype.lineTo = function(x,y){
        var so = armyc2.c2sd.renderer.so;
        if(this._actions.length === 0)
        {
            this.moveTo(0,0);
        }
        this._actions.push([so.ActionTypes.ACTION_LINE_TO,x,y]);
        this._rectangle.unionPoint(new so.Point(x,y));
        this._endPoint = new so.Point(x,y);
    };
	
	/**
     * Adds a point to the path by drawing a straight line from the current 
     * coordinates to the new specified coordinates specified
     * @param {type} x
     * @param {type} y
	 * @param {array} pattern 
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Path.prototype.dashedLineTo = function(x,y,pattern){
        var so = armyc2.c2sd.renderer.so;
        if(this._actions.length === 0)
        {
            this.moveTo(0,0);
        }
		var start = this.getCurrentPoint();
        this._actions.push([so.ActionTypes.ACTION_DASHED_LINE_TO,start.getX(),start.getY(), x, y, pattern]);
        this._rectangle.unionPoint(new so.Point(x,y));
        this._endPoint = new so.Point(x,y);
    };
	
    /**
     * Adds a curved segment, defined by three new points, to the path by 
     * drawing a Bézier curve that intersects both the current coordinates 
     * and the specified coordinates (x,y), using the specified points 
     * (cp1x,xp1y) and (cp2x,cp2y) as Bézier control points.
     * @param {type} cp1x
     * @param {type} cp1y
     * @param {type} cp2x
     * @param {type} cp2y
     * @param {type} x
     * @param {type} y
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Path.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y,x,y){
        var so = armyc2.c2sd.renderer.so;
        if(this._actions.length === 0)
        {
            this.moveTo(0,0);
        }
        this._actions.push([so.ActionTypes.ACTION_CURVE_TO,cp1x,cp1y,cp2x,cp2y,x,y]);
        this._rectangle.unionPoint(new so.Point(cp1x,cp1y));
        this._rectangle.unionPoint(new so.Point(cp2x,cp2y));
        this._rectangle.unionPoint(new so.Point(x,y));
        this._endPoint = new so.Point(x,y);
    };
    /**
     * Adds a curved segment, defined by two new points, to the path by 
     * drawing a Quadratic curve that intersects both the current 
     * coordinates and the specified coordinates (x,y), using the 
     * specified point (cpx,cpy) as a quadratic parametric control point.
     * @param {type} cpx
     * @param {type} cpy
     * @param {type} x
     * @param {type} y
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Path.prototype.quadraticCurveTo = function(cpx,cpy,x,y){
        var so = armyc2.c2sd.renderer.so;
        if(this._actions.length === 0)
        {
            this.moveTo(0,0);
        }
        this._actions.push([so.ActionTypes.ACTION_QUAD_TO,cpx,cpy,x,y]);
        this._rectangle.unionPoint(new so.Point(cpx,cpy));
        this._rectangle.unionPoint(new so.Point(x,y));
        this._endPoint = new so.Point(x,y);
    };
    /**
     * The arcTo() method creates an arc/curve between two tangents on the canvas.
     * @param {type} x1 The x-coordinate of the beginning of the arc
     * @param {type} y1 The y-coordinate of the beginning of the arc
     * @param {type} x2 The x-coordinate of the end of the arc
     * @param {type} y2 The y-coordinate of the end of the arc
     * @param {type} r The radius of the arc
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Path.prototype.arcTo = function(x1,y1,x2,y2,r){
        var so = armyc2.c2sd.renderer.so;
        if(this._actions.length === 0)
        {
            this.moveTo(0,0);
        }
        this._actions.push([so.ActionTypes.ACTION_ARC_TO,x1,y1,x2,y2]);
        this._rectangle.unionPoint(new so.Point(x1,y1));
        this._rectangle.unionPoint(new so.Point(x2,y2));
        this._endPoint = new so.Point(x2,y2);
    };
    /**
     * The arc() method creates an arc/curve 
     * (use to create circles. or parts of circles).
     * @param {type} x The x-coordinate of the center of the circle
     * @param {type} y The y-coordinate of the center of the circle
     * @param {type} r The radius of the circle
     * @param {type} sAngle The starting angle, in degrees 
     * (0 is at the 3 -'clock position of the arc's circle)
     * @param {type} eAngle The ending angle, in degrees
     * @param {type} counterclockwise Optional. Specifies wheter the drawing 
     * should be counterclockwise or clockwise.  False=clockwise, 
     * true=counter-clockwise;
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Path.prototype.arc = function(x,y,r,sAngle,eAngle,counterclockwise){
        
        var so = armyc2.c2sd.renderer.so;
        
        if(counterclockwise !== true)
        {
            counterclockwise = false;
        }
        
        //degrees to radians
        var sa = sAngle * (Math.PI / 180),
            ea = eAngle * (Math.PI / 180);
    

        if(this._startPoint===null)
        {
            var sX = r * Math.cos(sa) + x;
            var sY = r * Math.sin(sa) + y;
            this._startPoint = new so.Point(sX,sY);
            this._rectangle = new so.Rectangle(sX,sY,1,1);
        }
        

        this._actions.push([so.ActionTypes.ACTION_ARC,x,y,r,sa,ea,counterclockwise]);
        this._rectangle.union(new so.Rectangle(x-r,y-r,r*2,r*2));
        
        var newX = r * Math.cos(ea) + x;
        var newY = r * Math.sin(ea) + y;
        this._endPoint = new so.Point(newX,newY);
        this.moveTo(newX,newY);
        
    };
    /**
     * Closes the current subpath by drawing a straight line back to the coordinates of the last moveTo.
     * @return {void} 
     */
    armyc2.c2sd.renderer.so.Path.prototype.closePath = function(){
        this.lineTo(this._lastMoveTo.getX(),this._lastMoveTo.getY());
        this._endPoint = this._lastMoveTo.clone();
    };
    /**
     * @return Point
     */
    armyc2.c2sd.renderer.so.Path.prototype.getCurrentPoint = function()
    {
        return this._endPoint.clone();
    };
    /**
     * @return PathIterator
     */
    armyc2.c2sd.renderer.so.Path.prototype.getPathIterator = function()
    {
        return new armyc2.c2sd.renderer.so.PathIterator(this._actions);
    };
    /**
     * Apply the path to the passed context (doesn't draw)
     * @param {canvas.getContext()} context
     * @return {void} 
     */
    armyc2.c2sd.renderer.so.Path.prototype.setPath = function(context){

        var ActionTypes = armyc2.c2sd.renderer.so.ActionTypes;
        //context.beginPath();
        var size = this._actions.length;
        var temp = null;
        
        for(var i=0; i<size;i++)
        {
            temp = this._actions[i];
			

            if(temp[0]===ActionTypes.ACTION_MOVE_TO)
            {
                //context.moveTo(temp[1],temp[2]);
                
                if(i === 0 || this._method !== "fillPattern")
                {
                    context.moveTo(temp[1],temp[2]);
                }
                else//no moves in a fill shape except maybe for the first one
                {
                    context.lineTo(temp[1],temp[2]);
                }//*/
            }
            else if(temp[0]===ActionTypes.ACTION_LINE_TO)
            {
                context.lineTo(temp[1],temp[2]);
            }
            else if(temp[0]===ActionTypes.ACTION_DASHED_LINE_TO)
            {
                if(this._method === "stroke")
                {
                    context.dashedLineTo(temp[1],temp[2],temp[3],temp[4],temp[5]);    
                }
                else //you don't dash a fill shape
                {
                    context.lineTo(temp[3],temp[4]);
                }
            }
            else if(temp[0]===ActionTypes.ACTION_CURVE_TO)
            {
                context.bezierCurveTo(temp[1],temp[2],temp[3],temp[4],temp[5],temp[6]);
            }
            else if(temp[0]===ActionTypes.ACTION_QUAD_TO)
            {
                context.quadraticCurveTo(temp[1],temp[2],temp[3],temp[4]);
            }
            else if(temp[0]===ActionTypes.ACTION_ARC_TO)
            {
                context.arcTo(temp[1],temp[2],temp[3],temp[4],temp[5]);
            }
            else if(temp[0]===ActionTypes.ACTION_ARC)
            {
                context.arc(temp[1],temp[2],temp[3],temp[4],temp[5],temp[6]);
            }//*/
        }
        
    };
    /**
     * Draws the path to the passed context
     * @param {canvas.getContext()} context
     * @return {void} 
     */
    armyc2.c2sd.renderer.so.Path.prototype.stroke = function(context){
        this._method = "stroke";
        if(this._dashArray)
        {
            context.setLineDash(this._dashArray);
        }
        context.beginPath();
        this.setPath(context);
        context.stroke();
        context.setLineDash([]);
    };
    /**
     * Fills the path on the passed context
     * @param {canvas.getContext()} context
     * @return {void} 
     */
    armyc2.c2sd.renderer.so.Path.prototype.fill = function(context){
        this._method = "fill";
        context.beginPath();
        this.setPath(context);
        context.fill();
    };
    
    armyc2.c2sd.renderer.so.Path.prototype.fillPattern = function(context,fillPattern){
        this._method = "fillPattern";
        context.beginPath();
        this.setPath(context);
        var pattern = context.createPattern(fillPattern, "repeat");   
        context.fillStyle = pattern;
        context.fill();
    };
    
    /**
     * Arc and ArcTo do not covert currently
     */
    armyc2.c2sd.renderer.so.Path.prototype.toSVGElement = function(stroke, strokeWidth, fill, strokeOpacity, fillOpacity, svgFormat)
    {
        var format = 1;
        if(svgFormat)
        {
            format = svgFormat;
        }
        
        var ActionTypes = armyc2.c2sd.renderer.so.ActionTypes;
        //context.beginPath();
        var size = this._actions.length;
        var temp = null;
        var path = "";
        
        for(var i=0; i<size;i++)
        {
            temp = this._actions[i];
			
            /*if(path !== "")
                path += " ";*/

            if(temp[0]===ActionTypes.ACTION_LINE_TO)
            {
                path += "L" + temp[1] + " " + temp[2];
                //context.lineTo(temp[1],temp[2]);
            }
            else if(temp[0]===ActionTypes.ACTION_MOVE_TO)
            {
                //context.moveTo(temp[1],temp[2]);
                
                if(i === 0 || this._method !== "fillPattern")
                {
                    path += "M" + temp[1] + " " + temp[2];
                    //context.moveTo(temp[1],temp[2]);
                }
                else//no moves in a fill shape except maybe for the first one
                {
                    path += "L" + temp[1] + " " + temp[2];
                    //context.lineTo(temp[1],temp[2]);
                }//*/
            }
            else if(temp[0]===ActionTypes.ACTION_DASHED_LINE_TO)
            {
                path += "L" + temp[3] + " " + temp[4];
                /*if(this._method === "stroke")
                {
                    context.dashedLineTo(temp[1],temp[2],temp[3],temp[4],temp[5]);    
                }
                else //you don't dash a fill shape
                {
                    context.lineTo(temp[3],temp[4]);
                }//*/
            }
            else if(temp[0]===ActionTypes.ACTION_CURVE_TO)
            {
                //C100 100 250 100 250 200
                path += "C" + temp[1] + " " + temp[2] + " " + temp[3] + " " + temp[4] + " " + temp[5] + " " + temp[6]; 
                //context.bezierCurveTo(temp[1],temp[2],temp[3],temp[4],temp[5],temp[6]);
            }
            else if(temp[0]===ActionTypes.ACTION_QUAD_TO)
            {
                path += "Q" + temp[1] + " " + temp[2] + " " + temp[3] + " " + temp[4];
                context.quadraticCurveTo(temp[1],temp[2],temp[3],temp[4]);
            }
            else if(temp[0]===ActionTypes.ACTION_ARC_TO)
            {
                //path += "C" + temp[1] + " " + temp[2] + " " + temp[3] + " " + temp[4] + " " + temp[5];
                //context.arcTo(temp[1],temp[2],temp[3],temp[4],temp[5]);
            }
            else if(temp[0]===ActionTypes.ACTION_ARC)
            {
                //context.arc(temp[1],temp[2],temp[3],temp[4],temp[5],temp[6]);
            }//*/
        }
        //TODO: generate path svg element
        var line = '<path d="' + path + '"';

        if(stroke)
        {
            //line += ' stroke="' + stroke + '"';
            if(format === 2)
                line += ' stroke="' + stroke.replace(/#/g,"%23") + '"';//.replace(/#/g,"%23")
            else
                line += ' stroke="' + stroke + '"';
            /*else
                line += ' stroke="' + stroke.replace(/#/g,"&#35;") + '"';*/
            
            if(strokeWidth)
                line += ' stroke-width="' + strokeWidth + '"';
            else
                line += ' stroke-width="2"';
        
            if(strokeOpacity !== 1.0)
            {
                //stroke-opacity="0.4"
                line += ' stroke-opacity="' + strokeOpacity + '"';
            }
            
            //line += ' stroke-linejoin="round"';
            line += ' stroke-linecap="round"';
            //line += ' stroke-linecap="square"';
        }
            
        if(this._dashArray !== null)
            line += ' stroke-dasharray="' + this._dashArray.toString() + '"';
            
        if(fill)
        {
            if(fill.indexOf("url") === 0)
            {
                line += ' fill="url(#fillPattern)"';
                //line += ' fill="url(&#35;fillPattern)"';
            }
            else
            {
                //line += ' fill="' + fill + '"';
                if(format === 2)
                    line += ' fill="' + fill.replace(/#/g,"%23") + '"';//text = text.replace(/\</g,"&gt;");
                else
                    line += ' fill="' + fill + '"';//text = text.replace(/\</g,"&gt;");
                /*else
                    line += ' fill="' + fill.replace(/#/g,"&#35;") + '"';//text = text.replace(/\</g,"&gt;");*/
                    
                if(fillOpacity !== 1.0)
                {
                    //fill-opacity="0.4"
                    line += ' fill-opacity="' + fillOpacity + '"';
                }    
            }
            
        }
        else
            line += ' fill="none"';
        
        line += ' />';
        return line;
        
    };