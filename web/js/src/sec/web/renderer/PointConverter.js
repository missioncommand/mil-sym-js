var sec = sec || {};
/** namespace */
sec.web = sec.web || {};
sec.web.renderer = sec.web.renderer || {};

sec.web.renderer.PointConverter = function (controlLong, controlLat, scale) {

    //private vars
    var _controlLat = 0,
        _controlLong = 0,
        _scale = 0,
        _metersPerPixel = 0,
        GeoPixelConversion = sec.web.renderer.GeoPixelConversion;
    
    
    //constructor code
    _controlLat=Number(controlLat);
    _controlLong=Number(controlLong);
    _scale=Number(scale);
    _metersPerPixel=sec.web.renderer.GeoPixelConversion.metersPerPixel(scale);
    
    //private functions
    //function privateFunction(){};
    
    //public vars/functions
    //this.publicVar = "I'm a public var";
    //this.publicFunction = function(){};
    
    this.GeoToPixels = function(coord)
    {
        var y=GeoPixelConversion.lat2y(coord.getY(), _scale, _controlLat, _metersPerPixel);
        var x=GeoPixelConversion.long2x(coord.getX(), _scale, _controlLong, coord.getY(), _metersPerPixel);
        var ptPixels=new armyc2.c2sd.graphics2d.Point2D(x,y);
        
        return ptPixels;
    };
    
    this.PixelsToGeo = function(pixel)
    {
        var y=GeoPixelConversion.y2lat(pixel.getY(), _scale, _controlLat, _metersPerPixel);
        var x=GeoPixelConversion.x2long(pixel.getX(), _scale, _controlLong, y, _metersPerPixel);
        var pt2dGeo=new armyc2.c2sd.graphics2d.Point2D(x,y);
        
        return pt2dGeo;
    };
    
};

