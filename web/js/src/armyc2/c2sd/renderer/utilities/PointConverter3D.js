var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

armyc2.c2sd.renderer.utilities.PointConverter3D =  function(controlLong, controlLat, scale)
{
    this._controlLat = 0,
    this._controlLong = 0,
    this._scale = 0,
    this._metersPerPixel = 0;

    this._controlLat = Number(controlLat);
    this._controlLong = Number(controlLong);
    this._scale = Number(scale);
    this._metersPerPixel = armyc2.c2sd.renderer.utilities.GeoPixelConversion3D.metersPerPixel (scale);
};    
    armyc2.c2sd.renderer.utilities.PointConverter3D.prototype.PixelsToGeo = function(pixel)
    {
        var pt2dGeo = null;
        var y = armyc2.c2sd.renderer.utilities.GeoPixelConversion3D.y2lat (pixel.getY (), this._scale, this._controlLat, this._metersPerPixel);
        var x = armyc2.c2sd.renderer.utilities.GeoPixelConversion3D.x2long (pixel.getX (), this._scale, this._controlLong, y, this._metersPerPixel);
        pt2dGeo =  new armyc2.c2sd.graphics2d.Point2D (x, y);
        return pt2dGeo;
    };
    
    armyc2.c2sd.renderer.utilities.PointConverter3D.prototype.GeoToPixels = function(coord)
    {
        var ptPixels = null;
        var y = armyc2.c2sd.renderer.utilities.GeoPixelConversion3D.lat2y (coord.getY (), this._scale, this._controlLat, this._metersPerPixel);
        var x = armyc2.c2sd.renderer.utilities.GeoPixelConversion3D.long2x (coord.getX (), this._scale, this._controlLong, coord.getY (), this._metersPerPixel);
        ptPixels =  new armyc2.c2sd.graphics2d.Point2D (x, y);
        return ptPixels;
    };
