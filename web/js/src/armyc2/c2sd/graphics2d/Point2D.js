var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.Point2D = function() {
    this.x = 0;
    this.y = 0;
    if (arguments.length === 2)
    {
        this.x = Number(arguments[0]);
        this.y = Number(arguments[1]);
    }
    if (arguments.length === 1)
    {
        this.x = Number(arguments[0].x);
        this.y = Number(arguments[0].y);
    }
};
armyc2.c2sd.graphics2d.Point2D.prototype.distance = function(x1, y1)
{
    var dist = Math.sqrt((this.x - x1) * (this.x - x1) + (this.y - y1) * (this.y - y1));
    return dist;
};
armyc2.c2sd.graphics2d.Point2D.prototype.getX = function() {
    return this.x;
};
armyc2.c2sd.graphics2d.Point2D.prototype.getY = function() {
    return this.y;
};
armyc2.c2sd.graphics2d.Point2D.prototype.setLocation = function(x1, y1) {
    this.x = Number(x1);
    this.y = Number(y1);
};
