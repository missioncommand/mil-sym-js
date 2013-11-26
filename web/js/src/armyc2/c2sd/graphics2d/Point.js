var armyc2=armyc2 || {};
armyc2.c2sd=armyc2.c2sd || {};
armyc2.c2sd.graphics2d=armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.Point=function(){
    this.x = 0;
    this.y = 0;
    if(arguments.length===2)
    {
        this.x = Number(arguments[0]);
        this.y = Number(arguments[1]);
    }
};
    armyc2.c2sd.graphics2d.Point.prototype.getX=function () {
        return this.x;
    };
    armyc2.c2sd.graphics2d.Point.prototype.getY=function () {
        return this.y;
    };
    armyc2.c2sd.graphics2d.Point.prototype.setLocation=function (x1, y1) {
        this.x = Number(x1);
        this.y = Number(y1);
    };
//}
