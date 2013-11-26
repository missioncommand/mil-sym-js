var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.so = armyc2.c2sd.renderer.so || {};



/**
 * 
 * @param {Number} x1
 * @param {Number} y1
 * @param {Number} x2
 * @param {Number} y2
 * @param {Number} x3
 * @param {Number} y3
 * @param {Number} x4
 * @param {Number} y4
 * @returns {BCurve}
 */
armyc2.c2sd.renderer.so.BCurve = function (x1,y1,x2,y2,x3,y3,x4,y4) {

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.x4 = x4;
    this.y4 = y4;

    //will be larger than the actual curve.
    this.rectangle = new armyc2.c2sd.renderer.so.Rectangle(x1,y1,1,1);
    this.rectangle.unionPoint(new armyc2.c2sd.renderer.so.Point(x2,y2));
    this.rectangle.unionPoint(new armyc2.c2sd.renderer.so.Point(x3,y3));
    this.rectangle.unionPoint(new armyc2.c2sd.renderer.so.Point(x4,y4));

};
	
    armyc2.c2sd.renderer.so.BCurve.prototype.getShapeType = function(){
        return armyc2.c2sd.renderer.so.ShapeTypes.BCURVE;
    };

    armyc2.c2sd.renderer.so.BCurve.prototype.getBounds = function(){
        return new armyc2.c2sd.renderer.so.Rectangle(this.rectangle.getX()-1,
                                this.rectangle.getY()-1,
                                this.rectangle.getWidth()+2,
                                this.rectangle.getHeight()+2);
    };

    armyc2.c2sd.renderer.so.BCurve.prototype.shift = function(x,y){
        this.x1 += x;
        this.y1 += y;
        this.x2 += x;
        this.y2 += y;
        this.x3 += x;
        this.y3 += y;
        this.x4 += x;
        this.y4 += y;
        this.rectangle.shift(x,y);
    };

    armyc2.c2sd.renderer.so.BCurve.prototype.setPath = function(context){

        //context.beginPath();
        context.moveTo(this.x1,this.y1);
        context.bezierCurveTo(this.x2,this.y2,this.x3,this.y3,this.x4,this.y4);//counter-clockwise=false

    };
    armyc2.c2sd.renderer.so.BCurve.prototype.stroke = function(context){
        context.beginPath();
        this.setPath(context);
        context.stroke();
    };
    armyc2.c2sd.renderer.so.BCurve.prototype.fill = function(context){
        context.beginPath();
        this.setPath(context);
        context.fill();
    };
