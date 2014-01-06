var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaTacticalRenderer = armyc2.c2sd.JavaTacticalRenderer || {};
armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic = {
    DegToRad: function(deg) {
        return deg / 180.0 * 3.141592653589793;
    },
    RadToDeg: function(rad) {
        return rad / 3.141592653589793 * 180.0;
    },
    GetAzimuth: function(c1, c2) {
        var theta = 0;
        try {
            var lat1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(c1.y);
            var lon1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(c1.x);
            var lat2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(c2.y);
            var lon2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(c2.x);
            var y = Math.sin(lon2 - lon1);
            y *= Math.cos(lat2);
            var x = Math.cos(lat1);
            x *= Math.sin(lat2);
            var z = Math.sin(lat1);
            z *= Math.cos(lat2);
            z *= Math.cos(lon2 - lon1);
            x = x - z;
            theta = Math.atan2(y, x);
            theta = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.RadToDeg(theta);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic._className, "GetAzimuth", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetAzimuth", exc));
            } else {
                throw exc;
            }
        }
        return theta;
    },
    geodesic_distance: function(c1, c2, a12, a21) {
        var h = 0;
        try {
            if (a12 !== null && a21 !== null) {
                a12.value = Clazz.newArray(1, 0);
                a21.value = Clazz.newArray(1, 0);
                a12.value[0] = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetAzimuth(c1, c2);
                a21.value[0] = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetAzimuth(c2, c1);
            }
            var dLat = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(c2.y - c1.y);
            var dLon = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(c2.x - c1.x);
            var b = 0;
            var lat1 = 0;
            var lat2 = 0;
            var e = 0;
            var f = 0;
            var g = 0;
            var k = 0;
            b = Math.sin(dLat / 2);
            lat1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(c1.y);
            lat2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(c2.y);
            e = Math.sin(dLon / 2);
            f = Math.cos(lat1);
            g = Math.cos(lat2);
            var a = b * b + f * g * e * e;
            h = Math.sqrt(a);
            k = Math.sqrt(1 - a);
            h = 2 * Math.atan2(h, k);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic._className, "geodesic_distance", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside geodesic_distance", exc));
            } else {
                throw exc;
            }
        }
        return armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.sm_a * h;
    },
    geodesic_coordinate: function(start, distance, azimuth) {
        var pt = null;
        try {
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            var e = 0;
            var f = 0;
            var g = 0;
            var h = 0;
            var j = 0;
            var k = 0;
            var l = 0;
            var m = 0;
            var n = 0;
            var p = 0;
            var q = 0;
            a = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(start.y);
            b = Math.cos(a);
            c = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(azimuth);
            d = Math.sin(a);
            e = Math.cos(distance / armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.sm_a);
            f = Math.sin(distance / armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.sm_a);
            g = Math.cos(c);
            var lat = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.RadToDeg(Math.asin(d * e + b * f * g));
            h = Math.sin(c);
            k = Math.sin(h);
            l = Math.cos(a);
            m = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(lat);
            n = Math.sin(m);
            p = Math.atan2(h * f * b, e - d * n);
            var lon = Double.parseDouble(start.x) + armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.RadToDeg(p);                
            pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(lon, lat);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic._className, "geodesic_coordinate", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside geodesic_coordinate", exc));
            } else {
                throw exc;
            }
        }
        return pt;
    },
    GetGeodesicArc: function(pPoints) {
        var pPoints2 = new java.util.ArrayList();
        try {
            if (pPoints === null) {
                return null;
            }
            if (pPoints.length < 3) {
                return null;
            }
            var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPoints[0]);
            var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPoints[1]);
            var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPoints[2]);
            var ptTemp = null;
            var a12b = new armyc2.c2sd.JavaLineArray.ref();
            var dist2 = 0.0;
            var dist1 = 0.0;
            var a12 = new armyc2.c2sd.JavaLineArray.ref();
            var a21 = new armyc2.c2sd.JavaLineArray.ref();
            dist1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(ptCenter, pt1, a12, a21);
            var saveAzimuth = a21.value[0];
            dist2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(ptCenter, pt2, a12b, a21);
            if (Math.abs(a21.value[0] - saveAzimuth) <= 1) {
                if (a12.value[0] < 360) {
                    a12.value[0] += 360;
                }
                a12b.value[0] = a12.value[0] + 360;
            }
            var a12c = new armyc2.c2sd.JavaLineArray.ref();
            var j = 0;
            if (a12b.value[0] < 0) {
                a12b.value[0] = 360 + a12b.value[0];
            }
            if (a12.value[0] < 0) {
                a12.value[0] = 360 + a12.value[0];
            }
            if (a12b.value[0] < a12.value[0]) {
                a12b.value[0] = a12b.value[0] + 360;
            }
            a12c.value = Clazz.newArray(1, 0);
            for (j = 0; j <= 100; j++) {
                a12c.value[0] = a12.value[0] + (j / 100.0) * (a12b.value[0] - a12.value[0]);
                ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptCenter, dist1, a12c.value[0]);
                pPoints2.add(ptTemp);
            }
            if (Math.abs(a21.value[0] - saveAzimuth) > 1) {
                pPoints2.add(ptCenter);
            }
            if (a12.value[0] < a12b.value[0]) {
                pPoints2.add(pt1);
            } else {
                pPoints2.add(pt2);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic._className, "GetGeodesicArc", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetGeodesicArc", exc));
            } else {
                throw exc;
            }
        }
        return pPoints2;
    },
    GetGeodesicArc2: function(pPoints, pPoints2) {
        var circle = false;
        try {
            var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPoints.get(0));
            var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPoints.get(1));
            var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPoints.get(2));
            var a12b = new armyc2.c2sd.JavaLineArray.ref();
            var dist1 = 0;
            var a12 = new armyc2.c2sd.JavaLineArray.ref();
            var a21 = new armyc2.c2sd.JavaLineArray.ref();
            dist1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(ptCenter, pt1, a12, a21);
            var saveAzimuth = a21.value[0];
            var dist2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(ptCenter, pt2, a12b, a21);
            if (Math.abs(a21.value[0] - saveAzimuth) <= 1) {
                if (a12.value[0] < 360) {
                    a12.value[0] += 360;
                }
                a12b.value[0] = a12.value[0] + 360;
                circle = true;
            }
            var a12c = new armyc2.c2sd.JavaLineArray.ref();
            a12c.value = Clazz.newArray(1, 0);
            var j = 0;
            var pPoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            if (a12b.value[0] < 0) {
                a12b.value[0] = 360 + a12b.value[0];
            }
            if (a12.value[0] < 0) {
                a12.value[0] = 360 + a12.value[0];
            }
            if (a12b.value[0] < a12.value[0]) {
                a12b.value[0] = a12b.value[0] + 360;
            }
            for (j = 0; j <= 100; j++) {
                a12c.value[0] = a12.value[0] + (j / 100) * (a12b.value[0] - a12.value[0]);
                pPoint = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptCenter, dist1, a12c.value[0]);
                pPoints2.add(pPoint);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic._className, "GetGeodesicArc2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetGeodesicArc2", exc));
            } else {
                throw exc;
            }
        }
        return circle;
    },
    IntersectLines: function(p1, brng1, p2, brng2) {
        var ptResult = null;
        try {
            var lat1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(p1.y);
            var lon1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(p1.x);
            var lat2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(p2.y);
            var lon2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(p2.x);
            var brng13 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(brng1);
            var brng23 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.DegToRad(brng2);
            var dLat = lat2 - lat1;
            var dLon = lon2 - lon1;
            var dist12 = 2 * Math.asin(Math.sqrt(Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2)));
            if (dist12 === 0) {
                return null;
            }
            var brngA = Math.acos((Math.sin(lat2) - Math.sin(lat1) * Math.cos(dist12)) / (Math.sin(dist12) * Math.cos(lat1)));
            if (Double.isNaN(brngA)) {
                brngA = 0;
            }
            var brngB = Math.acos((Math.sin(lat1) - Math.sin(lat2) * Math.cos(dist12)) / (Math.sin(dist12) * Math.cos(lat2)));
            var brng12 = 0;
            var brng21 = 0;
            if (Math.sin(lon2 - lon1) > 0) {
                brng12 = brngA;
                brng21 = 6.283185307179586 - brngB;
            } else {
                brng12 = 6.283185307179586 - brngA;
                brng21 = brngB;
            }
            var alpha1 = (brng13 - brng12 + 3.141592653589793) % (6.283185307179586) - 3.141592653589793;
            var alpha2 = (brng21 - brng23 + 3.141592653589793) % (6.283185307179586) - 3.141592653589793;
            if (Math.sin(alpha1) === 0 && Math.sin(alpha2) === 0) {
                return null;
            }
            if (Math.sin(alpha1) * Math.sin(alpha2) < 0) {
                return null;
            }
            var alpha3 = Math.acos(-Math.cos(alpha1) * Math.cos(alpha2) + Math.sin(alpha1) * Math.sin(alpha2) * Math.cos(dist12));
            var dist13 = Math.atan2(Math.sin(dist12) * Math.sin(alpha1) * Math.sin(alpha2), Math.cos(alpha2) + Math.cos(alpha1) * Math.cos(alpha3));
            var lat3 = Math.asin(Math.sin(lat1) * Math.cos(dist13) + Math.cos(lat1) * Math.sin(dist13) * Math.cos(brng13));
            var dLon13 = Math.atan2(Math.sin(brng13) * Math.sin(dist13) * Math.cos(lat1), Math.cos(dist13) - Math.sin(lat1) * Math.sin(lat3));
            var lon3 = lon1 + dLon13;
            lon3 = (lon3 + 3.141592653589793) % (6.283185307179586) - 3.141592653589793;
            ptResult = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.RadToDeg(lon3), armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.RadToDeg(lat3));
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic._className, "IntersectLines", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside IntersectLines", exc));
            } else {
                throw exc;
            }
        }
        return ptResult;
    },
    SegmentGeoPoints: function(geoPoints, interval, lineType) {
        var resultPts = new java.util.ArrayList();
        try {
            switch (lineType) {
                case 22350000:
                case 23350000:
                case 231117300:
                case 231117200:
                case 231117100:
                case 231116000:
                case 231115000:
                case 231114000:
                case 231113000:
                case 231112000:
                case 23112000:
                case 22123000:
                case 22122000:
                case 23134000:
                case 22624000:
                case 23113000:
                case 23115000:
                case 23114000:
                case 23131100:
                case 23131200:
                case 23132000:
                case 22134000:
                case 23330000:
                case 23111000:
                case 23111001:
                    break;
                default:
                    return geoPoints;
            }
            var j = 0;
            var k = 0;
            var n = 0;
            var pt0 = null;
            var pt1 = null;
            var pt = null;
            var dist = 0;
            var az = 0;
            var remainder = 0;
            for (j = 0; j < geoPoints.size() - 1; j++) {
                pt0 = geoPoints.get(j);
                pt1 = geoPoints.get(j + 1);
                az = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetAzimuth(pt0, pt1);
                dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(geoPoints.get(j), geoPoints.get(j + 1), null, null);
                n = Math.floor((dist / interval));
                remainder = dist - n * interval;
                if (remainder < interval / 2)
                    n -= 1;
                resultPts.add(pt0);
                for (k = 1; k <= n; k++) {
                    pt = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, interval * k, az);
                    resultPts.add(pt);
                }
            }
            resultPts.add(pt1);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic._className, "SegmentGeoPoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside SegmentGeoPoints", exc));
            } else {
                throw exc;
            }
        }
        return resultPts;
    },
    _className: "mdlGeodesic",
    sm_a: 6378137
};