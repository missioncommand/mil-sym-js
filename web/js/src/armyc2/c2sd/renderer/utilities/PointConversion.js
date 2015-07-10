var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

armyc2.c2sd.renderer.utilities.PointConversion =  function(pixelWidth, pixelHeight, geoTop, geoLeft, geoBottom, geoRight)
{
    //private vars
    this._pixelWidth = 0;
    this._PixelHeight = 0;
    this._geoTop = 0;
    this._geoLeft = 0;
    this._geoBottom = 0;
    this._geoRight = 0;
    this._pixelMultiplierX = 0;
    this._pixelMultiplierY = 0;
    this._normalize=true;
    //constructor code
    this.UpdateExtents (pixelWidth, pixelHeight, geoTop, geoLeft, geoBottom, geoRight);
};   

    armyc2.c2sd.renderer.utilities.PointConversion.prototype.set_normalize=function(value)
    {
        this._normalize=value;
    };
    armyc2.c2sd.renderer.utilities.PointConversion.prototype.UpdateExtents = function(pixelWidth, pixelHeight, geoTop, geoLeft, geoBottom, geoRight)
    {
        this._pixelWidth = Number(pixelWidth);
        this._PixelHeight = Number(pixelHeight);
        this._geoTop = Number(geoTop);
        this._geoLeft = Number(geoLeft);
        this._geoBottom = Number(geoBottom);
        this._geoRight = Number(geoRight);
        this._pixelMultiplierX = (this._geoRight - this._geoLeft) / (this._pixelWidth);
        this._pixelMultiplierY = (this._geoTop - this._geoBottom) / (this._PixelHeight);
        if (this._geoRight - this._geoLeft < -180) {
            this._pixelMultiplierX = (this._geoRight - this._geoLeft + 360) / (this._pixelWidth);
        }
        if (this._geoRight - this._geoLeft > 180) {
            this._pixelMultiplierX = (360 - (this._geoRight - this._geoLeft)) / (this._pixelWidth);
        }
        if (this._geoTop < this._geoBottom)
            this._pixelMultiplierY = -Math.abs(this._pixelMultiplierY);
        else
            this._pixelMultiplierY = Math.abs(this._pixelMultiplierY);
//        if (this._geoRight < this._geoLeft)
//            this._pixelMultiplierX = -Math.abs(this._pixelMultiplierX);
//        else
//            this._pixelMultiplierX = Math.abs(this._pixelMultiplierX);
    };
    
    //public functions
    armyc2.c2sd.renderer.utilities.PointConversion.prototype.PixelsToGeo = function(pixel)
    {
        var coords =  new armyc2.c2sd.graphics2d.Point2D ();
        var x = ((pixel.getX () * this._pixelMultiplierX) + this._geoLeft);
        var y = (this._geoTop - (pixel.getY () * this._pixelMultiplierY));
        if (x > 180) x -= 360;
        if (x < -180) x += 360;
        coords.setLocation (x, y);
        return coords;
    };
    
    armyc2.c2sd.renderer.utilities.PointConversion.prototype.GeoToPixels = function(coord)
    {
        var pixel =  new armyc2.c2sd.graphics2d.Point2D ();
        var x = 0;
        var y = 0;
        var temp;
        //temp = ((coord.getX () - this._geoLeft) / this._pixelMultiplierX);
        var calcValue=coord.getX()  - this._geoLeft;
        if(this._normalize)
        {
            if(calcValue<-180)
                calcValue+=360;
            else if(calcValue>180)
                calcValue-=360;
        }
        temp = (calcValue / this._pixelMultiplierX);
                
        //x = Math.round (temp);
        x = temp;
        temp = ((this._geoTop - coord.getY ()) / this._pixelMultiplierY);
        //y = Math.round (temp);
        y = temp;
        pixel.setLocation (x, y);
        return pixel;
    };
    

