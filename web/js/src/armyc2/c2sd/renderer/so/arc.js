var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.so = armyc2.c2sd.renderer.so || {};



/**
 * 
 * @param {Number} x centerX
 * @param {Number} y centerY
 * @param {Number} r radius
 * @param {Number} sa start angle
 * @param {Number} ea end angle
 * @returns {armyc2.c2sd.renderer.so.Arc}
    */
armyc2.c2sd.renderer.so.Arc = function (x,y,r,sa,ea) {

    this.x = x,
    this.y = y,
    this.r = r,
    this.sa = sa * (Math.PI / 180),
    this.ea = ea * (Math.PI / 180);
    //not accurate, covers the whole circle, not just the arc.
    this.rectangle = new armyc2.c2sd.renderer.so.Rectangle(x-r,y-r,r*2,r*2);
};
    armyc2.c2sd.renderer.so.Arc.prototype.getShapeType = function(){
        return "ARC";//armyc2.c2sd.renderer.so.ShapeTypes.ARC;
    };

    armyc2.c2sd.renderer.so.Arc.prototype.getBounds = function(){
        return new armyc2.c2sd.renderer.so.Rectangle(this.rectangle.getX(),
                                this.rectangle.getY(),
                                this.rectangle.getWidth(),
                                this.rectangle.getHeight());
    };

    armyc2.c2sd.renderer.so.Arc.prototype.shift = function(x,y){
        this.x +=x;
        this.y +=y;
        this.rectangle.shift(x,y);
    };

    armyc2.c2sd.renderer.so.Arc.prototype.setPath = function(context){

        //context.beginPath();
        context.arc(this.x,this.y,this.r,this.sa,this.ea,false);//counter-clockwise=false

    };
    armyc2.c2sd.renderer.so.Arc.prototype.stroke = function(context){
        context.beginPath();
        this.setPath(context);
        context.stroke();
    };
    armyc2.c2sd.renderer.so.Arc.prototype.fill = function(context){
        context.beginPath();
        this.setPath(context);
        context.fill();
    };
