var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray = armyc2.c2sd.JavaLineArray || {};
armyc2.c2sd.JavaLineArray.CChannelPoints2 = function()
{
    this.m_Line1 = new armyc2.c2sd.JavaLineArray.POINT2();
    this.m_Line2 = new armyc2.c2sd.JavaLineArray.POINT2();
    if (arguments.length === 1)
    {
        this.m_Line1 = new armyc2.c2sd.JavaLineArray.POINT2(arguments[0].m_Line1);
        this.m_Line2 = new armyc2.c2sd.JavaLineArray.POINT2(arguments[0].m_Line2);
    }
    else if (arguments.length === 2)
    {
        this.m_Line1 = new armyc2.c2sd.JavaLineArray.POINT2(arguments[0]);
        this.m_Line2 = new armyc2.c2sd.JavaLineArray.POINT2(arguments[1]);
    }
};
armyc2.c2sd.JavaLineArray.CChannelPoints2._className = "CChannelPoints2";