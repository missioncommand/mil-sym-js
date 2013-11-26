var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.so = armyc2.c2sd.renderer.so || {};

/**
 * 
 * @param {Number} x
 * @param {Number} y
 * @param {Number} w
 * @param {Number} h
 * @returns {Ellipse}
 */
armyc2.c2sd.renderer.so.Ellipse = function (x,y,w,h) {

    this.rectangle = new armyc2.c2sd.renderer.so.Rectangle(x,y,w,h);
};
    armyc2.c2sd.renderer.so.Ellipse.prototype.getShapeType = function(){
        return armyc2.c2sd.renderer.so.ShapeTypes.ELLIPSE;
    };

    armyc2.c2sd.renderer.so.Ellipse.prototype.getBounds = function(){
        return new armyc2.c2sd.renderer.so.Rectangle(this.rectangle.getX()-1,
                                this.rectangle.getY()-1,
                                this.rectangle.getWidth()+2,
                                this.rectangle.getHeight()+2);
    };

    armyc2.c2sd.renderer.so.Ellipse.prototype.shift = function(x,y){
        this.rectangle.shift(x,y);
    };

    armyc2.c2sd.renderer.so.Ellipse.prototype.setPath = function(context){
        var x = this.rectangle.getX(),
            y = this.rectangle.getY(),
            w = this.rectangle.getWidth(),
            h = this.rectangle.getHeight();

        var kappa = 0.5522848,
            ox = (w/2)*kappa,//control point offset horizontal
            oy = (h/2)*kappa,//control point offset vertical
            xe = x + w,      //x-end
            ye = y + h,      //y-end
            xm = x + w / 2,  //x-middle
            ym = y + h / 2;  //y-middle

        //context.beginPath();
        context.moveTo(x,ym);
        context.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y);
        context.bezierCurveTo(xm + ox,y,xe,ym - oy,xe,ym);
        context.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye);
        context.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym);
        context.closePath();
    };
    armyc2.c2sd.renderer.so.Ellipse.prototype.stroke = function(context){
        context.beginPath();
        this.setPath(context);
        context.stroke();
    };
    armyc2.c2sd.renderer.so.Ellipse.prototype.fill = function(context){
        context.beginPath();
        this.setPath(context);
        context.fill();
    };
