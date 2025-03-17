var sec = sec || {};
/** namespace */
sec.web = sec.web || {};
sec.web.renderer = sec.web.renderer || {};
/** @class */
sec.web.renderer.GeoPixelConversion = (function () {
    //private vars
    var inchPerMeter = 39.3700787,
        pixelsPerInch = 96,
        METERS_PER_DEG = 111319.49079327357264771338267056;
    
    //constructor code
    //privateVar = "whatever";
    
    //private functions
    //function privateFunction(){return "I'm a private function";};
    
return{    
    //public vars
    //publicVar : "I'm a public var",
    //publicFunction: function(){return "I'm a public function";}
    
    metersPerPixel: function(scale)
    {
        var step1 = scale / pixelsPerInch;
        return step1 / inchPerMeter;
    },
    
    lat2y: function( latitude,  scale,  latOrigin,  metPerPix) 
    {

        //var latRem = -(latitude - latOrigin);
        var latRem = latOrigin - latitude;
        var pixDis = (latRem * METERS_PER_DEG) / metPerPix;
        return pixDis;
    },

    y2lat: function(yPosition, scale, latOrigin, metPerPix) {

        var latitude = latOrigin - ((yPosition * metPerPix) / METERS_PER_DEG);        
        return latitude;
    },

    long2x: function(longitude, scale, longOrigin, latitude, metPerPix, normalize) {
        
        var longRem = longitude-longOrigin;
        if(normalize===true)
        {
            if (longRem > 180) {
                longRem -= 360;
            }
            if (longRem < -180) {
                longRem += 360;
            }        
        }
        var metersPerDeg = this.GetMetersPerDegAtLat(latitude);
        var pixDis = (longRem * metersPerDeg) / metPerPix;
        return pixDis;
    },

    x2long: function(xPosition, scale, longOrigin, latitude, metPerPix) {
        
        var metersPerDeg = this.GetMetersPerDegAtLat(latitude);
        var longitude = longOrigin + ((xPosition * metPerPix) / metersPerDeg);

        if (longitude < -180) {
            longitude += 360;
        } else if (longitude > 180) {
            longitude -= 360;
        }

        return longitude;
    },

    Deg2Rad: function(deg) {
        var conv_factor = (2.0 * Math.PI) / 360.0;
        return (deg * conv_factor);
    },

    GetMetersPerDegAtLat: function(lat) {
        // Convert latitude to radians
        lat = this.Deg2Rad(lat);
        // Set up "Constants"
        var p1 = 111412.84; // longitude calculation term 1

        var p2 = -93.5; // longitude calculation term 2

        var p3 = 0.118; // longitude calculation term 3

        // Calculate the length of a degree of longitude in meters at given
        // latitude
        var longlen = (p1 * Math.cos(lat)) + (p2 * Math.cos(3 * lat)) + (p3 * Math.cos(5 * lat));

        return longlen;
    }
};
}());
