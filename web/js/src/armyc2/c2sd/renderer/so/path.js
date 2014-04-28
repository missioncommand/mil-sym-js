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
    
    this._actions = [];
	
};

    armyc2.c2sd.renderer.so.Path.prototype._startPoint=null;
    armyc2.c2sd.renderer.so.Path.prototype._endPoint=null;
    armyc2.c2sd.renderer.so.Path.prototype._lastMoveTo = null;
    armyc2.c2sd.renderer.so.Path.prototype._rectangle = null;
    

    /**
     * @return {SO.ShapeTypes} ShapeTypes.Path
     */
    armyc2.c2sd.renderer.so.Path.prototype.getShapeType = function(){
        return armyc2.c2sd.renderer.so.ShapeTypes.PATH;
    };

    /**
     * @return {_rectangle} description
     */
    armyc2.c2sd.renderer.so.Path.prototype.getBounds = function(){
        return new armyc2.c2sd.renderer.so.Rectangle(this._rectangle.getX(),
                                this._rectangle.getY(),
                                this._rectangle.getWidth(),
                                this._rectangle.getHeight());
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
        this._actions.push(new Array(so.ActionTypes.ACTION_MOVE_TO,x,y));
        this._lastMoveTo = new so.Point(x,y);
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
        this._actions.push(new Array(so.ActionTypes.ACTION_LINE_TO,x,y));
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
        this._actions.push(new Array(so.ActionTypes.ACTION_CURVE_TO,cp1x,cp1y,cp2x,cp2y,x,y));
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
        this._actions.push(new Array(so.ActionTypes.ACTION_QUAD_TO,cpx,cpy,x,y));
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
        this._actions.push(new Array(so.ActionTypes.ACTION_ARC_TO,x1,y1,x2,y2));
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
        
        if(counterclockwise === undefined || counterclockwise === null)
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
        

        this._actions.push(new Array(so.ActionTypes.ACTION_ARC,x,y,r,sa,ea,counterclockwise));
        this._rectangle.union(new so.Rectangle(x-r,y-r,r*2,r*2));
        
        var newX = r * Math.cos(ea) + x;
        var newY = r * Math.sin(ea) + y;
        this._endPoint = new so.Point(newX,newY);
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
			
            //this.pathLookup[temp[0]](context,temp);
			
			
            if(temp[0]===ActionTypes.ACTION_MOVE_TO)
            {
                context.moveTo(temp[1],temp[2]);
            }
            else if(temp[0]===ActionTypes.ACTION_LINE_TO)
            {
                context.lineTo(temp[1],temp[2]);
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
        context.beginPath();
        this.setPath(context);
        context.stroke();
    };
    /**
     * Fills the path on the passed context
     * @param {canvas.getContext()} context
     * @return {void} 
     */
    armyc2.c2sd.renderer.so.Path.prototype.fill = function(context){
        context.beginPath();
        this.setPath(context);
        context.fill();
    };