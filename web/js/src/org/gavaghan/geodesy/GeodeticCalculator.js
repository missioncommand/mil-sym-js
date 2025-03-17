var org = org || {};
org.gavaghan = org.gavaghan || {};
org.gavaghan.geodesy = org.gavaghan.geodesy || {};
org.gavaghan.geodesy.GeodeticCalculator = function()
{
    this.TwoPi = 6.283185307179586;
    this.calculateEndingGlobalCoordinates = function(ellipsoid, start, startBearing, distance) {
        return org.gavaghan.geodesy.GeodeticCalculator.calculateEndingGlobalCoordinates(ellipsoid, start, startBearing, distance, null);
    };
    this.calculateGeodeticCurve = function(ellipsoid, start, end) {
        var a = ellipsoid.getSemiMajorAxis();
        var b = ellipsoid.getSemiMinorAxis();
        var f = ellipsoid.getFlattening();
        var phi1 = org.gavaghan.geodesy.Angle.toRadians(start.getLatitude());
        var lambda1 = org.gavaghan.geodesy.Angle.toRadians(start.getLongitude());
        var phi2 = org.gavaghan.geodesy.Angle.toRadians(end.getLatitude());
        var lambda2 = org.gavaghan.geodesy.Angle.toRadians(end.getLongitude());
        var a2 = a * a;
        var b2 = b * b;
        var a2b2b2 = (a2 - b2) / b2;
        var omega = lambda2 - lambda1;
        var tanphi1 = Math.tan(phi1);
        var tanU1 = (1.0 - f) * tanphi1;
        var U1 = Math.atan(tanU1);
        var sinU1 = Math.sin(U1);
        var cosU1 = Math.cos(U1);
        var tanphi2 = Math.tan(phi2);
        var tanU2 = (1.0 - f) * tanphi2;
        var U2 = Math.atan(tanU2);
        var sinU2 = Math.sin(U2);
        var cosU2 = Math.cos(U2);
        var sinU1sinU2 = sinU1 * sinU2;
        var cosU1sinU2 = cosU1 * sinU2;
        var sinU1cosU2 = sinU1 * cosU2;
        var cosU1cosU2 = cosU1 * cosU2;
        var lambda = omega;
        var A = 0.0;
        var B = 0.0;
        var sigma = 0.0;
        var deltasigma = 0.0;
        var lambda0;
        var converged = false;
        for (var i = 0; i < 20; i++) {
            lambda0 = lambda;
            var sinlambda = Math.sin(lambda);
            var coslambda = Math.cos(lambda);
            var sin2sigma = (cosU2 * sinlambda * cosU2 * sinlambda) + (cosU1sinU2 - sinU1cosU2 * coslambda) * (cosU1sinU2 - sinU1cosU2 * coslambda);
            var sinsigma = Math.sqrt(sin2sigma);
            var cossigma = sinU1sinU2 + (cosU1cosU2 * coslambda);
            sigma = Math.atan2(sinsigma, cossigma);
            var sinalpha = (sin2sigma === 0) ? 0.0 : cosU1cosU2 * sinlambda / sinsigma;
            var alpha = Math.asin(sinalpha);
            var cosalpha = Math.cos(alpha);
            var cos2alpha = cosalpha * cosalpha;
            var cos2sigmam = cos2alpha === 0.0 ? 0.0 : cossigma - 2 * sinU1sinU2 / cos2alpha;
            var u2 = cos2alpha * a2b2b2;
            var cos2sigmam2 = cos2sigmam * cos2sigmam;
            A = 1.0 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)));
            B = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)));
            deltasigma = B * sinsigma * (cos2sigmam + B / 4 * (cossigma * (-1 + 2 * cos2sigmam2) - B / 6 * cos2sigmam * (-3 + 4 * sin2sigma) * (-3 + 4 * cos2sigmam2)));
            var C = f / 16 * cos2alpha * (4 + f * (4 - 3 * cos2alpha));
            lambda = omega + (1 - C) * f * sinalpha * (sigma + C * sinsigma * (cos2sigmam + C * cossigma * (-1 + 2 * cos2sigmam2)));
            var change = Math.abs((lambda - lambda0) / lambda);
            if ((i > 1) && (change < 0.0000000000001)) {
                converged = true;
                break;
            }
        }
        var s = b * A * (sigma - deltasigma);
        var alpha1;
        var alpha2;
        if (!converged) {
            if (phi1 > phi2) {
                alpha1 = 180.0;
                alpha2 = 0.0;
            } else if (phi1 < phi2) {
                alpha1 = 0.0;
                alpha2 = 180.0;
            } else {
                alpha1 = NaN;
                alpha2 = NaN;
            }
        } else {
            var radians;
            radians = Math.atan2(cosU2 * Math.sin(lambda), (cosU1sinU2 - sinU1cosU2 * Math.cos(lambda)));
            if (radians < 0.0)
                radians += 6.283185307179586;
            alpha1 = org.gavaghan.geodesy.Angle.toDegrees(radians);
            radians = Math.atan2(cosU1 * Math.sin(lambda), (-sinU1cosU2 + cosU1sinU2 * Math.cos(lambda))) + 3.141592653589793;
            if (radians < 0.0)
                radians += 6.283185307179586;
            alpha2 = org.gavaghan.geodesy.Angle.toDegrees(radians);
        }
        if (alpha1 >= 360.0)
            alpha1 -= 360.0;
        if (alpha2 >= 360.0)
            alpha2 -= 360.0;
        return  new org.gavaghan.geodesy.GeodeticCurve(s, alpha1, alpha2);
    };
    this.calculateGeodeticMeasurement = function(refEllipsoid, start, end) {
        var elev1 = start.getElevation();
        var elev2 = end.getElevation();
        var elev12 = (elev1 + elev2) / 2.0;
        var phi1 = org.gavaghan.geodesy.Angle.toRadians(start.getLatitude());
        var phi2 = org.gavaghan.geodesy.Angle.toRadians(end.getLatitude());
        var phi12 = (phi1 + phi2) / 2.0;
        var refA = refEllipsoid.getSemiMajorAxis();
        var f = refEllipsoid.getFlattening();
        var a = refA + elev12 * (1.0 + f * Math.sin(phi12));
        var ellipsoid = org.gavaghan.geodesy.Ellipsoid.fromAAndF(a, f);
        var start1 = new org.gavaghan.geodesy.GlobalCoordinates(start.getLatitude(), start.getLongitude());
        var end1 = new org.gavaghan.geodesy.GlobalCoordinates(end.getLatitude(), end.getLongitude());
        var averageCurve = org.gavaghan.geodesy.GeodeticCalculator.calculateGeodeticCurve(ellipsoid, start1, end1);
        return  new org.gavaghan.geodesy.GeodeticMeasurement(averageCurve, elev2 - elev1);
    };

};
org.gavaghan.geodesy.GeodeticCalculator.calculateEndingGlobalCoordinates = function(ellipsoid, start, startBearing, distance, endBearing) {
    var a = ellipsoid.getSemiMajorAxis();
    var b = ellipsoid.getSemiMinorAxis();
    var aSquared = a * a;
    var bSquared = b * b;
    var f = ellipsoid.getFlattening();
    var phi1 = org.gavaghan.geodesy.Angle.toRadians(start.getLatitude());
    var alpha1 = org.gavaghan.geodesy.Angle.toRadians(startBearing);
    var cosAlpha1 = Math.cos(alpha1);
    var sinAlpha1 = Math.sin(alpha1);
    var s = distance;
    var tanU1 = (1.0 - f) * Math.tan(phi1);
    var cosU1 = 1.0 / Math.sqrt(1.0 + tanU1 * tanU1);
    var sinU1 = tanU1 * cosU1;
    var sigma1 = Math.atan2(tanU1, cosAlpha1);
    var sinAlpha = cosU1 * sinAlpha1;
    var sin2Alpha = sinAlpha * sinAlpha;
    var cos2Alpha = 1 - sin2Alpha;
    var uSquared = cos2Alpha * (aSquared - bSquared) / bSquared;
    var A = 1 + (uSquared / 16384) * (4096 + uSquared * (-768 + uSquared * (320 - 175 * uSquared)));
    var B = (uSquared / 1024) * (256 + uSquared * (-128 + uSquared * (74 - 47 * uSquared)));
    var deltaSigma;
    var sOverbA = s / (b * A);
    var sigma = sOverbA;
    var sinSigma;
    var prevSigma = sOverbA;
    var sigmaM2;
    var cosSigmaM2;
    var cos2SigmaM2;
    for (; ; ) {
        sigmaM2 = 2.0 * sigma1 + sigma;
        cosSigmaM2 = Math.cos(sigmaM2);
        cos2SigmaM2 = cosSigmaM2 * cosSigmaM2;
        sinSigma = Math.sin(sigma);
        var cosSignma = Math.cos(sigma);
        deltaSigma = B * sinSigma * (cosSigmaM2 + (B / 4.0) * (cosSignma * (-1 + 2 * cos2SigmaM2) - (B / 6.0) * cosSigmaM2 * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM2)));
        sigma = sOverbA + deltaSigma;
        if (Double.isNaN(sigma) || Double.isNaN(prevSigma)) {
            throw  new RuntimeException("Point values may be the same; approximation convereged to NaN");
        }
        if (Math.abs(sigma - prevSigma) < 0.0000000000001)
            break;
        prevSigma = sigma;
    }
    sigmaM2 = 2.0 * sigma1 + sigma;
    cosSigmaM2 = Math.cos(sigmaM2);
    cos2SigmaM2 = cosSigmaM2 * cosSigmaM2;
    var cosSigma = Math.cos(sigma);
    sinSigma = Math.sin(sigma);
    var phi2 = Math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1, (1.0 - f) * Math.sqrt(sin2Alpha + Math.pow(sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1, 2.0)));
    var lambda = Math.atan2(sinSigma * sinAlpha1, (cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1));
    var C = (f / 16) * cos2Alpha * (4 + f * (4 - 3 * cos2Alpha));
    var L = lambda - (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cosSigmaM2 + C * cosSigma * (-1 + 2 * cos2SigmaM2)));
    var alpha2 = Math.atan2(sinAlpha, -sinU1 * sinSigma + cosU1 * cosSigma * cosAlpha1);
    var latitude = org.gavaghan.geodesy.Angle.toDegrees(phi2);
    var longitude = start.getLongitude() + org.gavaghan.geodesy.Angle.toDegrees(L);
    if ((endBearing !== null) && (endBearing.length > 0)) {
        endBearing[0] = org.gavaghan.geodesy.Angle.toDegrees(alpha2);
    }
    return  new org.gavaghan.geodesy.GlobalCoordinates(latitude, longitude);
};
org.gavaghan.geodesy.GeodeticCalculator.calculateGeodeticCurve = function(ellipsoid, start, end) {
    var a = ellipsoid.getSemiMajorAxis();
    var b = ellipsoid.getSemiMinorAxis();
    var f = ellipsoid.getFlattening();
    var phi1 = org.gavaghan.geodesy.Angle.toRadians(start.getLatitude());
    var lambda1 = org.gavaghan.geodesy.Angle.toRadians(start.getLongitude());
    var phi2 = org.gavaghan.geodesy.Angle.toRadians(end.getLatitude());
    var lambda2 = org.gavaghan.geodesy.Angle.toRadians(end.getLongitude());
    var a2 = a * a;
    var b2 = b * b;
    var a2b2b2 = (a2 - b2) / b2;
    var omega = lambda2 - lambda1;
    var tanphi1 = Math.tan(phi1);
    var tanU1 = (1.0 - f) * tanphi1;
    var U1 = Math.atan(tanU1);
    var sinU1 = Math.sin(U1);
    var cosU1 = Math.cos(U1);
    var tanphi2 = Math.tan(phi2);
    var tanU2 = (1.0 - f) * tanphi2;
    var U2 = Math.atan(tanU2);
    var sinU2 = Math.sin(U2);
    var cosU2 = Math.cos(U2);
    var sinU1sinU2 = sinU1 * sinU2;
    var cosU1sinU2 = cosU1 * sinU2;
    var sinU1cosU2 = sinU1 * cosU2;
    var cosU1cosU2 = cosU1 * cosU2;
    var lambda = omega;
    var A = 0.0;
    var B = 0.0;
    var sigma = 0.0;
    var deltasigma = 0.0;
    var lambda0;
    var converged = false;
    for (var i = 0; i < 20; i++) {
        lambda0 = lambda;
        var sinlambda = Math.sin(lambda);
        var coslambda = Math.cos(lambda);
        var sin2sigma = (cosU2 * sinlambda * cosU2 * sinlambda) + (cosU1sinU2 - sinU1cosU2 * coslambda) * (cosU1sinU2 - sinU1cosU2 * coslambda);
        var sinsigma = Math.sqrt(sin2sigma);
        var cossigma = sinU1sinU2 + (cosU1cosU2 * coslambda);
        sigma = Math.atan2(sinsigma, cossigma);
        var sinalpha = (sin2sigma === 0) ? 0.0 : cosU1cosU2 * sinlambda / sinsigma;
        var alpha = Math.asin(sinalpha);
        var cosalpha = Math.cos(alpha);
        var cos2alpha = cosalpha * cosalpha;
        var cos2sigmam = cos2alpha === 0.0 ? 0.0 : cossigma - 2 * sinU1sinU2 / cos2alpha;
        var u2 = cos2alpha * a2b2b2;
        var cos2sigmam2 = cos2sigmam * cos2sigmam;
        A = 1.0 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)));
        B = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)));
        deltasigma = B * sinsigma * (cos2sigmam + B / 4 * (cossigma * (-1 + 2 * cos2sigmam2) - B / 6 * cos2sigmam * (-3 + 4 * sin2sigma) * (-3 + 4 * cos2sigmam2)));
        var C = f / 16 * cos2alpha * (4 + f * (4 - 3 * cos2alpha));
        lambda = omega + (1 - C) * f * sinalpha * (sigma + C * sinsigma * (cos2sigmam + C * cossigma * (-1 + 2 * cos2sigmam2)));
        var change = Math.abs((lambda - lambda0) / lambda);
        if ((i > 1) && (change < 0.0000000000001)) {
            converged = true;
            break;
        }
    }
    var s = b * A * (sigma - deltasigma);
    var alpha1;
    var alpha2;
    if (!converged) {
        if (phi1 > phi2) {
            alpha1 = 180.0;
            alpha2 = 0.0;
        } else if (phi1 < phi2) {
            alpha1 = 0.0;
            alpha2 = 180.0;
        } else {
            alpha1 = NaN;
            alpha2 = NaN;
        }
    } else {
        var radians;
        radians = Math.atan2(cosU2 * Math.sin(lambda), (cosU1sinU2 - sinU1cosU2 * Math.cos(lambda)));
        if (radians < 0.0)
            radians += 6.283185307179586;
        alpha1 = org.gavaghan.geodesy.Angle.toDegrees(radians);
        radians = Math.atan2(cosU1 * Math.sin(lambda), (-sinU1cosU2 + cosU1sinU2 * Math.cos(lambda))) + 3.141592653589793;
        if (radians < 0.0)
            radians += 6.283185307179586;
        alpha2 = org.gavaghan.geodesy.Angle.toDegrees(radians);
    }
    if (alpha1 >= 360.0)
        alpha1 -= 360.0;
    if (alpha2 >= 360.0)
        alpha2 -= 360.0;
    return  new org.gavaghan.geodesy.GeodeticCurve(s, alpha1, alpha2);
};
