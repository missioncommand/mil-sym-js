var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray = armyc2.c2sd.JavaLineArray || {};
armyc2.c2sd.JavaLineArray.POINT2 = function()
{

    this.x = 0;
    this.y = 0;
    this.segment = 0;
    this.style = 0;
    if (arguments.length === 1)
    {
        this.x = arguments[0].x;
        this.y = arguments[0].y;
        this.segment = arguments[0].segment;
        this.style = arguments[0].style;
        
    }
    else if (arguments.length === 2)
    {
        this.x = arguments[0];
        this.y = arguments[1];
    }
    else if (arguments.length === 3)
    {
        this.x = arguments[0];
        this.y = arguments[1];
        this.style = arguments[2];
    }
    else if (arguments.length === 4)
    {
        this.x = arguments[0];
        this.y = arguments[1];
        this.segment = arguments[2];
        this.style = arguments[3];
    }
};
