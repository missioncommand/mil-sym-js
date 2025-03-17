var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.kml = sec.geo.kml || {};
sec.geo.kml.KmlOptions = function()
{

    this.mode = "absolute";
    
    this.fromString = function(a) {
        
        return a;//"absolute";
        /*
        for(var key in sec.geo.kml.KmlOptions.AltitudeMode)
        {
            if(sec.geo.kml.KmlOptions.AltitudeMode[key])
            {
                var prop = sec.geo.kml.KmlOptions.AltitudeMode[key];
                if(a === prop)
                    return key;
            }
        }//*/
        /*if (a !== null) {
            for (var am, $am = 0, $$am = sec.geo.kml.KmlOptions.AltitudeMode.values(); $am < $$am.length && ((am = $$am[$am]) || true); $am++) {
                if (am.getMode().equals(a)) {
                    return am;
                }
            }
        }//*/
        throw  new IllegalArgumentException("No AltitudeMode with mode \"" + a + "\" found");
    };
    this.toString = function() {
        return this.mode;
    };
    this.getMode = function() {
        return this.mode;
    };
};
sec.geo.kml.KmlOptions.AltitudeMode =
        {
            ABSOLUTE: "absolute",
            RELATIVE_TO_GROUND: "relativeToGround",
            RELATIVE_TO_SEA_FLOOR: "relativeToSeaFloor",
            CLAMP_TO_GROUND: "clampToGround",
            CLAMP_TO_SEA_FLOOR: "clampToSeaFloor"
        };
