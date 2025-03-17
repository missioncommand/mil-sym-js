var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray = armyc2.c2sd.JavaLineArray || {};
/*
*contructors:
*(POINT2)
*(x,y)
*(x,y,style)
*(x,y,segment,style)
*/
armyc2.c2sd.JavaLineArray.POINT2 = function(x, y, param1, param2)
{

    this.x = 0;
    this.y = 0;
    this.segment = 0;
    this.style = 0;
    if (x !== undefined && y !== undefined)
    {
        this.x = x;
        this.y = y;
        if(param2 !== undefined)
        {
            this.style = param2;
            if(param1 !== undefined)
                this.segment = param1;
        }
        else if(param1 !== undefined)
            this.style = param1;
    }
    else if (x !== undefined && y === undefined)
    {
        this.x = x.x;
        this.y = x.y;
        this.segment = x.segment;
        this.style = x.style;
    }
    /*if (arguments.length === 1)
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
    }//*/
};
