var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.so = armyc2.c2sd.renderer.so || {};


/**
 * @class Point
 * @param {Number} x
 * @param {Number} y
 * @returns {Point}
 */
armyc2.c2sd.renderer.so.Point = function (x,y) {
    this.x = x,
    this.y = y;
};
    /**
     * Returns a string representing one of the shape types
     * from "armyc2.c2sd.renderer.so.ShapeTypes"
     * @returns {String} 
     */
    armyc2.c2sd.renderer.so.Point.prototype.getShapeType = function(){
        return "POINT";//armyc2.c2sd.renderer.so.ShapeTypes.POINT;
    };
    /**
     * 
     * @returns {Number}
     */
    armyc2.c2sd.renderer.so.Point.prototype.getX = function(){
        return this.x;
    };
    /**
     * 
     * @returns {Number}
     */
    armyc2.c2sd.renderer.so.Point.prototype.getY = function(){
        return this.y;
    };
    /**
     * Reset the x & y of this point object.
     * @param {Number} x
     * @param {Number} y
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Point.prototype.setLocation = function (x,y){
        this.x = x;
        this.y = y;
    };
    /**
     * move x & y by specified amounts.
     * @param {Number} x shift x point by this value
     * @param {Number} y shift y point by this value
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Point.prototype.shift = function (x,y){
        this.x += x;
        this.y += y;
    };
    /**
     * @returns {String} like "{x:#,y:#}"
     */
    armyc2.c2sd.renderer.so.Point.prototype.toStringFormatted = function(){
        return "{x:" + this.x + ", y:" + this.y + "}";
    };
    /**
     * Makes a copy of this point object.
     * @returns {armyc2.c2sd.renderer.so.Point} Copy of original point.
     */
    armyc2.c2sd.renderer.so.Point.prototype.clone = function(){
        return new armyc2.c2sd.renderer.so.Point(this.x,this.y);
    };
    /**
     * @param {context} context object from html5 canvas
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Point.prototype.setPath = function(context){
        var x = this.x,
            y = this.y;

        //context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + 1,y);
        context.lineTo(x + 1,y + 1);
        context.lineTo(x,y + 1);
        context.closePath();

    };
    /**
     * @param {context} context object from html5 canvas
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Point.prototype.stroke = function(context){
        context.beginPath();
        this.setPath(context);
        context.stroke();
    };
    /**
     * @param {context} context object from html5 canvas
     * @returns {void}
     */
    armyc2.c2sd.renderer.so.Point.prototype.fill = function(context){
        context.beginPath();
        this.setPath(context);
        context.fill();
    };


