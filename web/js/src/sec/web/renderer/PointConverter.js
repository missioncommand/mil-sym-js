var sec = sec || {};
/** namespace */
sec.web = sec.web || {};
sec.web.renderer = sec.web.renderer || {};

/**
 * @class
 * @param {Number} controlLong
 * @param {Number} controlLat
 * @param {Number} scale
 */
sec.web.renderer.PointConverter = function (controlLong, controlLat, scale) {

    //private vars
    this._controlLat = 0,
    this._controlLong = 0,
    this._scale = 0,
    this._metersPerPixel = 0,
    this._normalize=true,
    this._GeoPixelConversion = sec.web.renderer.GeoPixelConversion;    
        
    //constructor code
    this._controlLat=Number(controlLat);
    this._controlLong=Number(controlLong);
    this._scale=Number(scale);
    this._metersPerPixel=sec.web.renderer.GeoPixelConversion.metersPerPixel(scale);
    
};
sec.web.renderer.PointConverter.prototype.set_normalize = function(value)
{
    this._normalize=value;
};
/**
 * @param {armyc2.c2sd.graphics2d.Point2D} coord
 * @returns {armyc2.c2sd.graphics2d.Point2D}
 */
sec.web.renderer.PointConverter.prototype.GeoToPixels = function(coord)
{
    var y=this._GeoPixelConversion.lat2y(coord.getY(), this._scale, this._controlLat, this._metersPerPixel);
    var x=this._GeoPixelConversion.long2x(coord.getX(), this._scale, this._controlLong, coord.getY(), this._metersPerPixel, this._normalize);
    var ptPixels=new armyc2.c2sd.graphics2d.Point2D(x,y);

    return ptPixels;
};
/**
 * @function PixelsToGeo
 * @param {armyc2.c2sd.graphics2d.Point2D} pixel
 * @returns {armyc2.c2sd.graphics2d.Point2D}
 */
sec.web.renderer.PointConverter.prototype.PixelsToGeo = function(pixel)
{
    var y=this._GeoPixelConversion.y2lat(pixel.getY(), this._scale, this._controlLat, this._metersPerPixel);
    var x=this._GeoPixelConversion.x2long(pixel.getX(), this._scale, this._controlLong, y, this._metersPerPixel);
    var pt2dGeo=new armyc2.c2sd.graphics2d.Point2D(x,y);

    return pt2dGeo;
};
