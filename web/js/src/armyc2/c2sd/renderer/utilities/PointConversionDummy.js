var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

armyc2.c2sd.renderer.utilities.PointConversionDummy =  function()
{
    this.PixelsToGeo = function(pixel)
    {
        return new armyc2.c2sd.graphics2d.Point2D (pixel.getX (), pixel.getY ());
    };
    
    this.GeoToPixels = function(coord)
    {
        return new armyc2.c2sd.graphics2d.Point2D (coord.getX (), coord.getY ());;
    };
};

