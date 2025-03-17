var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.GeoPoint=function()
{
    this.x = 0;
    this.y = 0;
    if(arguments.length===2)
    {
        var longitudeDegrees=arguments[0];
        var latitudeDegrees=arguments[1];
        this.x = longitudeDegrees;
        this.y = latitudeDegrees;
    }
    this.getLatitude=function () {
        return this.y;
    };
    this.setLatitude=function (latitudeDegrees) {
        this.y = latitudeDegrees;
    };
    this.getLongitude=function () {
        return this.x;
    };
    this.setLongitude=function (longitudeDegrees) {
        this.x = longitudeDegrees;
    };
    this.toString=function () {
        return this.x + "," + this.y;
    };
    this.equals=function(x1,y1)
    {
        if(x1===this.x && y1===this.y)
            return true;
        else
            return false;
    };
    this.equals=function(p)
    {
        if(p.x===this.x && p.y===this.y)
            return true;
        else
            return false;
    };
};