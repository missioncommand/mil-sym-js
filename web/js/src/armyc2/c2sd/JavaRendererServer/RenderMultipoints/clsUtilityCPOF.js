var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaRendererServer = armyc2.c2sd.JavaRendererServer || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints = armyc2.c2sd.JavaRendererServer.RenderMultipoints || {};
var vincenty=vincenty || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF = {
    BuildDummyShapeSpec: function() {
        var shape = new armyc2.c2sd.renderer.utilities.ShapeInfo(null);
        try {
            var tx = new armyc2.c2sd.graphics2d.AffineTransform();
            tx.setToIdentity();
            var gp = new armyc2.c2sd.graphics2d.GeneralPath();
            shape.setLineColor(armyc2.c2sd.renderer.utilities.Color.WHITE);
            shape.setFillColor(null);
            shape.setStroke(new armyc2.c2sd.graphics2d.BasicStroke());
            shape.setTexturePaint(null);
            gp.moveTo(-1000, -1000);
            gp.lineTo(-1001, -1001);
            shape.setShape(gp);
            shape.setAffineTransform(tx);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "BuidDummyShapeSpec", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside BuildDummyShapeSpec", exc));
            }
            else {
                throw exc;
            }
        }
        return shape;
    },
    isValidShapeSpec: function(shape) {
        if (shape === null)
            return false;
        if (shape.getLineColor() === null && shape.getFillColor() === null)
            return false;
        if (shape.getShape() === null)
            return false;
        if (shape.getStroke() === null)
            return false;
        if (shape.getAffineTransform() === null)
            return false;
        return true;
    },
    SetLCColor: function(tg, shape) {
        try {
            var affiliation = tg.get_Affiliation();
            if (affiliation.equals("H")) {
                if (shape.getLineColor() === armyc2.c2sd.renderer.utilities.Color.RED)
                    shape.setLineColor(tg.get_LineColor());
                else
                    shape.setLineColor(armyc2.c2sd.renderer.utilities.Color.RED);
            } else {
                if (shape.getLineColor() !== armyc2.c2sd.renderer.utilities.Color.RED)
                    shape.setLineColor(tg.get_LineColor());
                else
                    shape.setLineColor(armyc2.c2sd.renderer.utilities.Color.RED);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "SetLCColor", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside SetLCColor", exc));
            } else {
                throw exc;
            }
        }
    },
    ValidateShapeSpecs: function(originalShapes, clipRect) {
        var shapes = null;
        try {
            var shape = null;
            if (originalShapes === null || originalShapes.length === 0) {
                shapes = new Array(0);
            } else {
                var j = 0;
                var newShapes = new java.util.ArrayList();
                for (j = 0; j < originalShapes.length; j++) {
                    shape = originalShapes[j];
                    if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.isValidShapeSpec(shape) === true)
                        newShapes.add(shape);
                }
                if (newShapes.size() > 0) {
                    shapes = new Array(newShapes.size());
                    shapes = newShapes.toArray(shapes);
                } else {
                    shape = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.BuildDummyShapeSpec();
                    shapes = new Array(1);
                    shapes[0] = shape;
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "ValidateShapeSpecs", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ValidateShapeSpecs", exc));
            } else {
                throw exc;
            }
        }
        return shapes;
    },
    PointLatLongToPixels: function(ptLatLong, converter) {
        var pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
        try {
            var x = ptLatLong.x;
            var y = ptLatLong.y;
            var pt2dGeo = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(x, y);
            var ptPixels = converter.GeoToPixels(pt2dGeo);
            pt.x = ptPixels.getX();
            pt.y = ptPixels.getY();
            pt.style = ptLatLong.style;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "PointLatLongToPixels", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside PointLatLongToPixels", exc));
            } else {
                throw exc;
            }
        }
        return pt;
    },
    GetNumericFields: function(tg, lineType, radius, width, length, attitude) {
        try {
            if (lineType === 243111001)
                return;
            var dist = 0;
            var a12 = new armyc2.c2sd.JavaLineArray.ref();
            var a21 = new armyc2.c2sd.JavaLineArray.ref();
            var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
            var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
            radius.value = Clazz.newArray(1, 0);
            width.value = Clazz.newArray(1, 0);
            attitude.value = Clazz.newArray(1, 0);
            length.value = Clazz.newArray(1, 0);
            switch (lineType) {
                case 13000001:
                    attitude.value[0] = Double.parseDouble(tg.get_T1());    //rotation
                    width.value[0] = Double.parseDouble(tg.get_H1());       //semi-major axis
                    length.value[0] = Double.parseDouble(tg.get_H2());    //semi-minor axis
                    radius.value[0] = Double.parseDouble(tg.get_H());   //buffer
                    break;
                case 15000002:
                case 22133100:
                case 22131200:
                case 23162100:
                case 24312000:
                case 24321300:
                case 24323300:
                case 24324300:
                case 24325300:
                case 24326200:
                case 24331300:
                case 24332300:
                case 24333300:
                case 24334300:
                case 24335300:
                case 24336300:
                case 24337300:
                case 24338300:
                case 24339300:
                case 24322300:
                case 24353000:
                case 24363000:
                    radius.value[0] = Double.parseDouble(tg.get_T1());
                    break;
                case 24311000:
                case 14000001:
                case 14000002:
                    length.value[0] = Double.parseDouble(tg.get_T1());
                    width.value[0] = Double.parseDouble(tg.get_H());
                    //value passed in mils
                    attitude.value[0] = Double.parseDouble(tg.get_H2()) * (0.05625);
                    radius.value[0] = Double.parseDouble(tg.get_H1());  //use for the buffer
                    //var std = armyc2.c2sd.renderer.utilities.RendererSettings.getInstance().getSymbologyStandard();
                    var std = tg.getSymbologyStandard();
                    if(std===armyc2.c2sd.renderer.utilities.RendererSettings.Symbology_2525C)//value passed in degrees
                        attitude.value[0] = Double.parseDouble(tg.get_H2());
                    break;
                case 22133200:
                case 22131300:
                case 23162200:
                case 24326101:
                case 24321200:
                case 24323200:
                case 24322200:
                case 24324200:
                case 24325200:
                case 24331200:
                case 24332200:
                case 24333200:
                case 24334200:
                case 24335200:
                case 24336200:
                case 24337200:
                case 24338200:
                case 24339200:
                case 24352000:
                case 24362000:
                    if (tg.LatLongs.size() >= 2) {
                        if (tg.LatLongs.size() >= 2) {
                            pt0 = tg.LatLongs.get(0);
                            pt1 = tg.LatLongs.get(1);
                            dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(pt0, pt1, a12, a21);
                            attitude.value[0] = a12.value[0];
                        }
                    }
                    width.value[0] = Double.parseDouble(tg.get_T1());
                    break;
                case 25200101:
                    //minor radius in meters
                    if(armyc2.c2sd.renderer.utilities.SymbolUtilities.isNumber(tg.get_T1()))
                        length.value[0] = Double.parseDouble(tg.get_T1());
                    //major radius in meters
                    if(armyc2.c2sd.renderer.utilities.SymbolUtilities.isNumber(tg.get_H()))
                        width.value[0] = Double.parseDouble(tg.get_H());
                    //rotation angle in degrees
                    if(armyc2.c2sd.renderer.utilities.SymbolUtilities.isNumber(tg.get_H2()))                    
                        attitude.value[0] = Double.parseDouble(tg.get_H2());
                    
                    break;
                default:
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "GetNumericFields", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetNumericFields", exc));
            } else {
                throw exc;
            }
        }
    },
    TransformPixels: function(tg, clipBounds) {
        try {
            var top = clipBounds.getMaxY();
            var bottom = clipBounds.getMinY();
            var xfm = null;
            var pt2d = null;
            var j = 0;
            var pt2 = null;
            for (j = 0; j < tg.Pixels.size(); j++) {
                xfm = armyc2.c2sd.graphics2d.AffineTransform.getScaleInstance(1.0, -1.0);
                pt2 = tg.Pixels.get(j);
                pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt2.x, pt2.y);
                xfm.translate(0, -top - bottom);
                xfm.transform(pt2d, pt2d);
                pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2d.getX(), pt2d.getY());
                tg.Pixels.set(j, pt2);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "TransformPixels", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside TransformPixels", exc));
            } else {
                throw exc;
            }
        }
    },
    GetFarPixels: function(tg, converter, farLeftPixels, farRightPixels) {
        try {
            if (farLeftPixels === null || farRightPixels === null)
                return;
            var pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(50, 30);
            var ptPixels50 = converter.GeoToPixels(pt2d);
            pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(60, 30);
            var ptPixels60 = converter.GeoToPixels(pt2d);
            var degLonPerPixel = 10 / Math.abs(ptPixels60.getX() - ptPixels50.getX());
            var j = 0;
            var minX = 1.7976931348623157E308;
            var maxX = -1.7976931348623157E308;
            for (j = 0; j < tg.Pixels.size(); j++) {
                if (tg.Pixels.get(j).x < minX)
                    minX = tg.Pixels.get(j).x;
                if (tg.Pixels.get(j).x > maxX)
                    maxX = tg.Pixels.get(j).x;
            }
            var degWidth = (maxX - minX) * degLonPerPixel;
            if (Math.abs(degWidth) < 180)
                return;
            var midX = Math.abs(180 / degLonPerPixel);
            var x = 0;
            var y = 0;
            for (j = 0; j < tg.Pixels.size(); j++) {
                x = tg.Pixels.get(j).x;
                y = tg.Pixels.get(j).y;
                if (x > midX) {
                    x -= 2 * midX;
                }
                farLeftPixels.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y));
            }
            for (j = 0; j < tg.Pixels.size(); j++) {
                x = tg.Pixels.get(j).x;
                y = tg.Pixels.get(j).y;
                if (x < midX) {
                    x += 2 * midX;
                }
                farRightPixels.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y));
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "GetFarPixels", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetFarPixels", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    Change1TacticalAreas: function(tg, lineType, converter, shapes) {
        try {
            var width = new armyc2.c2sd.JavaLineArray.ref();
            var length = new armyc2.c2sd.JavaLineArray.ref();
            var attitude = new armyc2.c2sd.JavaLineArray.ref();
            var radius = new armyc2.c2sd.JavaLineArray.ref();
            var j = 0;
            var pt0 = tg.LatLongs.get(0);
            var pt1 = null;
            var ptTemp = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pt00 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            if (tg.LatLongs.size() > 1) {
                pt1 = tg.LatLongs.get(1);
            } else {
                pt1 = tg.LatLongs.get(0);
            }
            var pPoints = null;
            var ptCenter=this.PointLatLongToPixels(pt0,converter);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetNumericFields(tg, lineType, radius, width, length, attitude);
            switch (lineType) {                
                case 25200101:  //launch area
                    var ellipsePts=armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.getGeoEllipse(pt0, width.value[0], length.value[0], attitude.value[0]);
                    for (j = 0; j < ellipsePts.length; j++)  //was 103
                    {
                        pt0 = ellipsePts[j];
                        pt1=this.PointLatLongToPixels(pt0,converter);
                        tg.Pixels.add(pt1);
                    }                    
                    break;
                case 22131300:
                case 22133200:
                case 23162200:
                case 24326101:
                case 24321200:
                case 24323200:
                case 24322200:
                case 24324200:
                case 24325200:
                case 24331200:
                case 24332200:
                case 24333200:
                case 24334200:
                case 24335200:
                case 24336200:
                case 24337200:
                case 24338200:
                case 24339200:
                case 24352000:
                case 24362000:
                    pt00 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, width.value[0] / 2, attitude.value[0] - 90);
                    pt00 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(pt00, converter);
                    pt00.style = 0;
                    tg.Pixels.add(pt00);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, width.value[0] / 2, attitude.value[0] + 90);
                    ptTemp = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(ptTemp, converter);
                    ptTemp.style = 0;
                    tg.Pixels.add(ptTemp);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt1, width.value[0] / 2, attitude.value[0] + 90);
                    ptTemp = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(ptTemp, converter);
                    ptTemp.style = 0;
                    tg.Pixels.add(ptTemp);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt1, width.value[0] / 2, attitude.value[0] - 90);
                    ptTemp = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(ptTemp, converter);
                    ptTemp.style = 0;
                    tg.Pixels.add(ptTemp);
                    tg.Pixels.add(pt00);
                    break;
                case 24311000:
                case 14000001:
                case 14000002:
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, length.value[0] / 2, attitude.value[0] - 90);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptTemp, width.value[0] / 2, attitude.value[0] + 0);
                    ptTemp = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(ptTemp, converter);
                    tg.Pixels.add(ptTemp);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, length.value[0] / 2, attitude.value[0] + 90);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptTemp, width.value[0] / 2, attitude.value[0] + 0);
                    ptTemp = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(ptTemp, converter);
                    tg.Pixels.add(ptTemp);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, length.value[0] / 2, attitude.value[0] + 90);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptTemp, width.value[0] / 2, attitude.value[0] + 180);
                    ptTemp = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(ptTemp, converter);
                    tg.Pixels.add(ptTemp);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, length.value[0] / 2, attitude.value[0] - 90);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptTemp, width.value[0] / 2, attitude.value[0] + 180);
                    ptTemp = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(ptTemp, converter);
                    tg.Pixels.add(ptTemp);
                    tg.Pixels.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0).x, tg.Pixels.get(0).y));
                    break;
                case 24312000:
                case 15000002:
                case 22133100:
                case 22131200:
                case 23162100:
                case 24321300:
                case 24322300:
                case 24323300:
                case 24324300:
                case 24325300:
                case 24326200:
                case 24331300:
                case 24332300:
                case 24333300:
                case 24334300:
                case 24335300:
                case 24336300:
                case 24337300:
                case 24338300:
                case 24339300:
                case 24353000:
                case 24363000:
                    pt0 = tg.LatLongs.get(0);
                    ptTemp = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, radius.value[0], 90);
                    pPoints = new Array(3);
                    pPoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                    pPoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptTemp);
                    pPoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptTemp);
                    var pPoints2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetGeodesicArc(pPoints);
                    var ptTemp2 = null;
                    for (j = 0; j < pPoints2.size(); j++) {
                        pt0 = pPoints2.get(j);
                        ptTemp2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                        ptTemp2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(pt0, converter);
                        tg.Pixels.add(ptTemp2);
                    }
                    break;
                case 243111000:
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetConcentricCircles(tg, lineType, converter);
                    if (tg.LatLongs.size() > 1)
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.RangeFanOrientation(tg, lineType, converter);
                    break;
                case 243112000:
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetSectorRangeFan(tg, converter);
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.RangeFanOrientation(tg, lineType, converter);
                    break;
                case 243111001:
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetSectorRangeFan(tg, converter);
                    break;
                case 13000000:
                case 13000001:  //ellipse
                case 13000002:  //circle
                    var buffer=parseFloat(tg.get_H());
                    var center=tg.LatLongs.get(0);
                    var semiMajor=parseFloat(tg.get_H1());
                    var semiMinor=parseFloat(tg.get_H2());
                    var rotation=90-parseFloat(tg.get_T1());
                    var ellipse = new EllipseGeometry({
                        center: Cartesian3.fromDegrees(center.x, center.y),
                        semiMajorAxis: semiMajor+buffer,
                        semiMinorAxis: semiMinor+buffer,
                        rotation: CesiumMath.toRadians(rotation)
                    });
                    var geometry = EllipseGeometry.createGeometry(ellipse);
                    var cartesian;
                    var longitude;
                    var latitude;
                    var cartographic;
                    var pt0, pt;
                    var x,y,z;
                    for(j=0;j<geometry.length/3;j++)
                    {
                        x=geometry[3*j];
                        y=geometry[3*j+1];
                        z=geometry[3*j+2];
                        cartesian=new Cartesian3(x,y,z);
                        cartographic = Cartographic.fromCartesian(cartesian);
                        longitude = CesiumMath.toDegrees(cartographic.longitude);
                        latitude = CesiumMath.toDegrees(cartographic.latitude);
                        pt=new armyc2.c2sd.graphics2d.Point2D(longitude,latitude);
                        pt=converter.GeoToPixels(pt);
                        if(j===0)
                            pt0=new armyc2.c2sd.JavaLineArray.POINT2(pt.x,pt.y);
                        pt=new armyc2.c2sd.JavaLineArray.POINT2(pt.x,pt.y);
                        tg.Pixels.add(pt);
                    }
                    //add the 0th point to close the ellipse
                    tg.Pixels.add(pt0);
                    //create the 0th shape as the buffer/fill shape
                    this.Change1PixelsToShapes(tg, shapes, true);
                    if(lineType===13000000)
                        break;
                    //start over. Build the last shape as the outline shape, this time without the buffer
                    //the fill shape will be below this shape so the outline should appear on top of the fill unless they are the same color.
                    tg.Pixels.clear();
                    ellipse = new EllipseGeometry({
                        center: Cartesian3.fromDegrees(center.x, center.y),
                        semiMajorAxis: semiMajor,
                        semiMinorAxis: semiMinor,
                        rotation: CesiumMath.toRadians(rotation)
                    });
                    geometry = EllipseGeometry.createGeometry(ellipse);
                    for(j=0;j<geometry.length/3;j++)
                    {
                        x=geometry[3*j];
                        y=geometry[3*j+1];
                        z=geometry[3*j+2];
                        cartesian=new Cartesian3(x,y,z);
                        cartographic = Cartographic.fromCartesian(cartesian);
                        longitude = CesiumMath.toDegrees(cartographic.longitude);
                        latitude = CesiumMath.toDegrees(cartographic.latitude);
                        pt=new armyc2.c2sd.graphics2d.Point2D(longitude,latitude);
                        pt=converter.GeoToPixels(pt);
                        if(j===0)
                            pt0=new armyc2.c2sd.JavaLineArray.POINT2(pt.x,pt.y);
                        pt=new armyc2.c2sd.JavaLineArray.POINT2(pt.x,pt.y);
                        tg.Pixels.add(pt);
                    }
                    //add the 0th point to close the ellipse
                    tg.Pixels.add(pt0);
                    //add the 0th shape as the buffer fill shape                    
                    //this.Change1PixelsToShapes(tg, shapes, false);
                    //the code below will build the outline shape from the pixels as part of normal processing.
                    break;
                default:
                    return false;
            }
            var farLeftPixels = new java.util.ArrayList();
            var farRightPixels = new java.util.ArrayList();
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetFarPixels(tg, converter, farLeftPixels, farRightPixels);
            var shapesLeft = new java.util.ArrayList();
            var shapesRight = new java.util.ArrayList();
            //if (farLeftPixels.isEmpty() || farRightPixels.isEmpty()) 
            //{
                var tempPixels = new java.util.ArrayList();
                tempPixels.addAll(tg.Pixels);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.postSegmentFSA(tg, converter);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.Change1PixelsToShapes(tg, shapes, false);
                tg.Pixels = tempPixels;
            //} 
//            else 
//            {
//                tg.Pixels = farLeftPixels;
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers2(tg);
//                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.Change1PixelsToShapes(tg, shapesLeft, false);
//                tg.Pixels = farRightPixels;
//                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.Change1PixelsToShapes(tg, shapesRight, false);
//                shapes.addAll(shapesLeft);
//                shapes.addAll(shapesRight);
//            }
            //diagnostic
            if(lineType===15000002)
            {
                var shape=new armyc2.c2sd.JavaLineArray.Shape2(0);
                shape.moveTo(ptCenter);
                //ptCenter.x+=1;
                ptCenter.y+=1;
                shape.lineTo(ptCenter);
                shapes.add(shape);
            }
            if (lineType === 14000001 || lineType === 14000002) 
            {
                var dist = radius.value[0];//Double.parseDouble(strH1);
                pt0 = new armyc2.c2sd.JavaLineArray.POINT2(tg.LatLongs.get(0));
                pt1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, dist, 45);//45 is arbitrary
                var pt02d = new armyc2.c2sd.graphics2d.Point2D(pt0.x, pt0.y);
                var pt12d = new armyc2.c2sd.graphics2d.Point2D(pt1.x, pt1.y);
                pt02d = converter.GeoToPixels(pt02d);
                pt12d = converter.GeoToPixels(pt12d);
                pt0.x = pt02d.getX();
                pt0.y = pt02d.getY();
                pt1.x = pt12d.getX();
                pt1.y = pt12d.getY();
                dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);    //pixels distance
                //tg.Pixels.get(0).style=(int)dist;
                var tempPixels = new java.util.ArrayList();
                tempPixels.addAll(tg.Pixels);
                //var pts=tempPixels.toArray(new armyc2.c2sd.JavaLineArray.POINT2[tempPixels.size()]);
                var pts=tempPixels.toArray(new Array(tempPixels.size()));
                pts[0].style=dist;
                armyc2.c2sd.JavaLineArray.lineutility.getExteriorPoints(pts, pts.length, lineType, false);
                tg.Pixels.clear();
                for(j=0;j<pts.length;j++)
                    tg.Pixels.add(new armyc2.c2sd.JavaLineArray.POINT2(pts[j].x,pts[j].y));

                this.Change1PixelsToShapes(tg, shapes, true);
                //reuse the original pixels for the subsequent call to AddModifier2
                tg.Pixels = tempPixels;                
            }
            //end section
            return true;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "Change1TacticalAreas", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside Change1TacticalAreas", exc));
            } else {
                throw exc;
            }
        }
        return false;
    },
    Change1PixelsToShapes: function(tg, shapes, fill) {
        var shape = null;
        var beginLine = true;
        var currentPt = null;
        var lastPt = null;
        var k = 0;
        var linetype = tg.get_LineType();
        for (k = 0; k < tg.Pixels.size(); k++) {
            if (shape === null)
            {
                //shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                if(!fill)
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                else if(fill)
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
            }
            currentPt = tg.Pixels.get(k);
            if (k > 0)
                lastPt = tg.Pixels.get(k - 1);
            if (beginLine) {
                if (k === 0)
                    shape.set_Style(currentPt.style);
                if (k > 0)
                    if (currentPt.style === 5 && lastPt.style === 5)
                        shape.lineTo(currentPt);
                shape.moveTo(currentPt);
                beginLine = false;
            } else {
                shape.lineTo(currentPt);
                if (currentPt.style === 5 || currentPt.style === 10) {
                    beginLine = true;
                    if (linetype === 243111001 && k < tg.Pixels.size() - 1) {
                        shapes.add(shape);
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    }
                }
            }
            if (k === tg.Pixels.size() - 1) {
                if(shape.getShapeType()===1)    //fill shape on the bottom
                    shapes.add(0,shape);
                else
                    shapes.add(shape);
            }
        }
    },
    GetConcentricCircles: function(tg, lineType, converter) {
        try {
            var j = 0;
            var l = 0;
            var radius = 0;
            var pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pts = new java.util.ArrayList();
            var radii = null;
            var H2 = tg.get_H2();
            if (tg.LatLongs.size() === 1 && H2 !== null) {
                var strs = H2.split(",");
                radii = Clazz.newArray(strs.length, 0);
                for (j = 0; j < strs.length; j++)
                {
                    radii[j] = strs[j];
                }
            }
            if (radii === null) {
                radii = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetRadii(tg, lineType);
            }
            var n = radii.length;
            var pPoints = null;
            for (l = 0; l < n; l++) {
                radius = radii[l];
                if (radius === 0) {
                    continue;
                }
                pPoints = new Array(3);
                pt = tg.LatLongs.get(0);
                pPoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                pt = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt, radius, 90);
                pPoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                pPoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                pts = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetGeodesicArc(pPoints);
                var ptTemp2 = null;
                for (j = 0; j < pts.size(); j++) {
                    ptTemp2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    ptTemp2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(pts.get(j), converter);
                    ptTemp2.style = 0;
                    if (j === pts.size() - 1)
                        ptTemp2.style = 5;
                    tg.Pixels.add(ptTemp2);
                }
            }
            var length = tg.Pixels.size();
            tg.Pixels.get(length - 1).style = 5;
            pPoints = null;
            pt = null;
            return;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "GetConcentricCircles", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetConcentricCircles", exc));
            } else {
                throw exc;
            }
        }
    },
    GetMaxSector: function(tg) {
        var strLeftRightMinMax = null;
        try {
            var max = 0;
            var maxx = -1.7976931348623157E308;
            var H2 = tg.get_H2();
            var leftRightMinMax = H2.split(",");
            var numSectors = Math.floor(leftRightMinMax.length / 4);
            var k = 0;
            var maxIndex = -1;
            if (numSectors < 1) {
                return null;
            }
            if (numSectors * 4 !== leftRightMinMax.length) {
                return null;
            }
            try {
                for (k = 0; k < numSectors; k++) {
                    max = Double.parseDouble(leftRightMinMax[4 * k + 3]);
                    if (max > maxx) {
                        maxx = max;
                        maxIndex = k;
                    }
                }
            } catch (e) {
                if (Clazz.instanceOf(e, NumberFormatException)) {
                    return null;
                } else {
                    throw e;
                }
            }
            var strLeft = leftRightMinMax[4 * maxIndex];
            var strRight = leftRightMinMax[4 * maxIndex + 1];
            var strMin = leftRightMinMax[4 * maxIndex + 2];
            var strMax = leftRightMinMax[4 * maxIndex + 3];
            strLeftRightMinMax = strLeft + "," + strRight + "," + strMin + "," + strMax;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "GetMaxSector", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetMaxSector", exc));
            } else {
                throw exc;
            }
        }
        return strLeftRightMinMax;
    },
    GetCircularRangeFanFillTG: function(tg) {
        var tg1 = null;
        try {
            tg1 = new armyc2.c2sd.JavaTacticalRenderer.TGLight();
            tg1.set_VisibleModifiers(true);
            tg1.set_LineThickness(0);
            tg1.set_FillColor(tg.get_FillColor());
            tg1.set_Fillstyle(tg.get_FillStyle());
            tg1.LatLongs = new java.util.ArrayList();
            tg1.Pixels = new java.util.ArrayList();
            tg1.LatLongs.add(tg.LatLongs.get(0));
            tg1.Pixels.add(tg.Pixels.get(0));
            tg1.Pixels.add(tg.Pixels.get(1));
            tg1.set_LineType(243111001);
            var strH2 = tg.get_H2();
            if (tg.get_LineType() !== 243111000) {
                tg1.set_H2(strH2);
                return tg1;
            }
            var H2 = strH2.split(",");
            var leftRightMinMax = "";
            var j = 0;
            for (j = 0; j < H2.length - 1; j++) {
                if (j > 0)
                    leftRightMinMax += ",";
                leftRightMinMax += "0,0," + H2[j] + "," + H2[j + 1];
            }
            tg1.set_H2(leftRightMinMax);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "GetCircularRangeFanFillTG", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetCircularRangeFanFillTG", exc));
            } else {
                throw exc;
            }
        }
        return tg1;
    },
    addCircularRangeFanFillShapesFromTG: function(tgShapes, fillShapes) {
        try {
            tgShapes.addAll(0, fillShapes);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "addCircularRangeFanFillShapesFromTG", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside addCircularRangeFanFillShapesFromTG", exc));
            } else {
                throw exc;
            }
        }
    },
    GetSectorRangeFan: function(tg, converter) {
        var circle = false;
        try {
            var ptCenter = tg.LatLongs.get(0);
            var k = 0;
            var l = 0;
            var numSectors = 0;
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetSectorRadiiFromPoints(tg);
            var pPoints = new java.util.ArrayList();
            var pPointsInnerArc = new java.util.ArrayList();
            var pPointsOuterArc = new java.util.ArrayList();
            var sectorPoints = new java.util.ArrayList();
            var allPoints = new java.util.ArrayList();
            var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var H2 = tg.get_H2();
            var leftRightMinMax = H2.split(",");
            var left = 0;
            var right = 0;
            var min = 0;
            var max = 0;
            numSectors = Math.floor(leftRightMinMax.length / 4);
            if (numSectors < 1) {
                return false;
            }
            if (numSectors * 4 !== leftRightMinMax.length) {
                return false;
            }
            try {
                for (k = 0; k < numSectors; k++) {
                    left = Double.parseDouble(leftRightMinMax[4 * k]);
                    right = Double.parseDouble(leftRightMinMax[4 * k + 1]);
                    min = Double.parseDouble(leftRightMinMax[4 * k + 2]);
                    max = Double.parseDouble(leftRightMinMax[4 * k + 3]);
                }
            } catch (e) {
                if (Clazz.instanceOf(e, NumberFormatException)) {
                    return false;
                } else {
                    throw e;
                }
            }
            for (k = 0; k < numSectors; k++) {
                sectorPoints.clear();
                pPointsOuterArc.clear();
                pPointsInnerArc.clear();
                left = Double.parseDouble(leftRightMinMax[4 * k]);
                right = Double.parseDouble(leftRightMinMax[4 * k + 1]);
                min = Double.parseDouble(leftRightMinMax[4 * k + 2]);
                max = Double.parseDouble(leftRightMinMax[4 * k + 3]);
                pt1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptCenter, min, left);
                pt2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptCenter, min, right);
                pPoints.clear();
                pPoints.add(ptCenter);
                pPoints.add(pt1);
                pPoints.add(pt2);
                circle = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetGeodesicArc2(pPoints, pPointsInnerArc);
                pPoints.clear();
                circle = false;
                pt1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptCenter, max, left);
                pt2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(ptCenter, max, right);
                pPoints.add(ptCenter);
                pPoints.add(pt1);
                pPoints.add(pt2);
                circle = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetGeodesicArc2(pPoints, pPointsOuterArc);
                for (l = 0; l < pPointsInnerArc.size(); l++) {
                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPointsInnerArc.get(l));
                    sectorPoints.add(pt1);
                }
                for (l = pPointsOuterArc.size() - 1; l >= 0; l--) {
                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPointsOuterArc.get(l));
                    sectorPoints.add(pt1);
                }
                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPointsInnerArc.get(0));
                pt1.style = 5;
                sectorPoints.add(pt1);
                for (l = 0; l < sectorPoints.size (); l++)
                    allPoints.add(sectorPoints.get(l));

            }
            pPointsInnerArc = null;
            pPointsOuterArc = null;
            ptCenter = null;
            var ptTemp = null;
            for (l = 0; l < allPoints.size(); l++) {
                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                pt1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(allPoints.get(l), converter);
                if (ptTemp !== null && pt1.x === ptTemp.x && pt1.y === ptTemp.y)
                    continue;
                tg.Pixels.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1));
                ptTemp = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
            }
            return true;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "GetSectorRangeFan", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetSectorRangeFan", exc));
            } else {
                throw exc;
            }
        }
        return circle;
    },
    RangeFanOrientation: function(tg, lineType, converter) {
        try {
            var pt0 = tg.LatLongs.get(0);
            var dist = 0;
            var orientation = 0;
            var radius = 0;
            var j = 0;
            var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var a12 = new armyc2.c2sd.JavaLineArray.ref();
            var a21 = new armyc2.c2sd.JavaLineArray.ref();
            if (tg.LatLongs.size() > 1) {
                pt1 = tg.LatLongs.get(1);
                dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(pt0, pt1, a12, a21);
                orientation = a12.value[0];
            } else {
                var strLeftRightMinMax = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetMaxSector(tg);
                var sector = strLeftRightMinMax.split(",");
                var left = Double.parseDouble(sector[0]);
                var right = Double.parseDouble(sector[1]);
                var min = Double.parseDouble(sector[2]);
                var max = Double.parseDouble(sector[3]);
                while (left > 360)
                    left -= 360;

                while (right > 360)
                    right -= 360;

                while (left < 0)
                    left += 360;

                while (right < 0)
                    right += 360;

                if (left > right)
                    orientation = (left - 360 + right) / 2;
                else
                    orientation = (left + right) / 2;
                dist = max;
            }
            radius = dist * 1.1;
            var pt0F = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pt1F = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var ptBaseF = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var ptLeftF = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var ptRightF = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var ptTipF = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            pt0 = tg.LatLongs.get(0);
            pt0F = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(pt0, converter);
            pt1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, radius, orientation);
            pt1F = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.PointLatLongToPixels(pt1, converter);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0F, pt1F);
            //diagnostic
            var base=10;
            if(dist<100)
                base=dist/10;
            if(base<5)
                base=5;
            var basex2=2*base;
            //end section
            ptBaseF = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0F, pt1F, dist + base);//was 10
            ptTipF = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0F, pt1F, dist + basex2);//was 20
            ptLeftF = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0F, ptBaseF, ptBaseF, 0, base);//was 10
            ptRightF = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0F, ptBaseF, ptBaseF, 1, base);//was 10
            tg.anchor0F = pt0F;
            tg.achorTipF = ptTipF;
            if (tg.h !== "false") {
                tg.Pixels.add(pt0F);
                ptTipF.style = 5;
                tg.Pixels.add(ptTipF);
                tg.Pixels.add(ptLeftF);
                ptTipF.style = 0;
                tg.Pixels.add(ptTipF);
                tg.Pixels.add(ptRightF);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "RangeFanOrientation", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside RangeFanOrientation", exc));
            } else {
                throw exc;
            }
        }
    },
    ClearPixelsStyle: function(tg) {
        try {
            switch (tg.get_LineType()) {
                case 15000001:
                case 15000000:
                case 15000003:
                case 22224000:
                case 22222000:
                case 22224001:
                case 22222001:
                case 22225000:
                case 22221000:
                case 22223000:
                case 13000000:
                case 13000001:
                case 13000002:
                    return;
                default:
                    break;
            }
            for (var j = 0; j < tg.Pixels.size (); j++)
                tg.Pixels.get(j).style = 0;

        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "ClearPixelsStyle", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ClearPixelsStyle", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    FilterPoints2: function(tg, converter) {
        try {
            var lineType = tg.get_LineType();
            var minSpikeDistance = 0;
            var segmented = true;
            if (tg.Pixels.size() < 3)
                return;
            switch (lineType) {
                case 22124000:
                case 22525000:
                case 22125000:
                case 22523000:
                case 22526000:
                case 22527000:
                case 22528000:
                case 22612000:
                case 22612001:
                case 22613000:
                case 22623000:
                case 22623001:
                case 24223000:
                    minSpikeDistance = 5;
                    segmented = false;
                    break;
                case 23131100:
                case 23131200:
                case 23132000:
                case 22122000:
                case 22134000:
                case 23330000:
                case 23350000:
                    minSpikeDistance = 25;
                    break;
                case 22123000:
                case 23115000:
                case 23114000:
                case 22624000:
                case 23111000:
                case 23111001:
                case 23113000:
                case 23112000:
                case 23134000:
                case 231111000:
                case 231112000:
                case 231113000:
                case 231114000:
                case 231115000:
                case 231116000:
                case 231117100:
                case 231117200:
                case 231117300:
                    minSpikeDistance = 35;
                    break;
                case 32156000:
                case 32164000:
                case 32162000:
                    minSpikeDistance = 35;
                    break;
                default:
                    return;
            }
            var dist = 0;
            var pts = new java.util.ArrayList();
            var j = 0;
            var pt = null;
            var pt0 = null;
            var pt1 = null;
            for (j = 0; j < tg.Pixels.size(); j++) {
                pt = tg.Pixels.get(j);
                pt.style = tg.Pixels.get(j).style;
                pts.add(pt);
            }
            var removedPt = true;
            outer : while (removedPt === true) {
                removedPt = false;
                for (j = 0; j < pts.size() - 1; j++) {
                    pt0 = pts.get(j);
                    pt1 = pts.get(j + 1);
                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pts.get(j), pts.get(j + 1));
                    if (dist < minSpikeDistance) {
                        if (segmented === false) {
                            if (j + 1 === pts.size() - 1)
                                pts.remove(j);
                            else
                                pts.remove(j + 1);
                            removedPt = true;
                            break outer;
                        } else if (pt0.style === 0 && pt1.style === -1) {
                            pts.remove(j + 1);
                            removedPt = true;
                            break outer;
                        } else if (pt0.style === 0 && pt1.style === -2) {
                            pts.remove(j + 1);
                            removedPt = true;
                            break outer;
                        } else if (pt0.style === -1 && pt1.style === 0) {
                            pts.remove(j);
                            removedPt = true;
                            break outer;
                        } else if (pt0.style === -1 && pt1.style === -1) {
                            pts.remove(j + 1);
                            removedPt = true;
                            break outer;
                        } else if (pt0.style === -1 && pt1.style === -2) {
                            pts.remove(j + 1);
                            removedPt = true;
                            break outer;
                        } else if (pt0.style === -2 && pt1.style === 0) {
                            pts.remove(j);
                            removedPt = true;
                            break outer;
                        } else if (pt0.style === -2 && pt1.style === -1) {
                            pts.remove(j);
                            removedPt = true;
                            break outer;
                        } else if (pt0.style === -2 && pt1.style === -2) {
                            pts.remove(j + 1);
                            removedPt = true;
                            break outer;
                        }
                    }
                }
            }
            tg.Pixels = pts;
            tg.LatLongs = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PixelsToLatLong(pts, converter);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "FilterPoints2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside FilterPoints2", exc));
            } else {
                throw exc;
            }
        }
    },
    canClipPoints: function(tg) {
        try {
            var symbolId = tg.get_SymbolId();
            if (armyc2.c2sd.JavaTacticalRenderer.clsMETOC.IsWeather(symbolId) > 0)
                return true;
            var linetype = tg.get_LineType();
            switch (linetype) {
                case 2237000:
                case 23120000:
                case 22612000:
                case 22623000:
                //case 22121000:    
                case 22122000:
                case 22123000:
                case 22124000:
                case 22125000:
                case 22131000:
                case 11000000:
                case 10000000:
                case 22132000:
                case 22133000:
                case 22432000:
                case 22134000:
                case 22135000:
                case 22136000:
                case 22137000:
                case 22138000:
                case 221310000:
                case 22231000:
                case 22232000:
                case 22233000:
                case 22234000:
                case 22234100:
                case 22234200:
                case 22235000:
                case 22330000:
                case 221311000:
                case 22340000:
                case 22350000:
                case 22421000:
                case 22431000:
                case 22431100:
                case 22522100:
                case 22522210:
                case 22522220:
                case 22523000:
                case 22525000:
                case 22526000:
                case 22527000:
                case 22528000:
                case 22531000:
                case 22532000:
                case 22535000:
                case 22536000:
                case 22613000:
                case 22621000:
                case 22622000:
                case 22624000:
                case 22625000:
                case 22626000:
                case 23111000:
                case 23111001:
                case 23112000:
                case 23113000:
                case 23115000:
                case 23114000:
                case 23131100:
                case 23131200:
                case 23132000:
                case 23134000:
                case 23162000:
                case 23164000:
                case 23180000:
                case 231111000:
                case 231112000:
                case 231113000:
                case 231114000:
                case 231115000:
                case 231116000:
                case 231117100:
                case 231117200:
                case 231117300:
                case 23330000:
                case 23350000:
                case 23440000:
                case 23450000:
                case 23460000:
                case 23490000:
                case 24250000:
                case 24211000:
                case 24260000:
                case 24221000:
                case 24222000:
                case 23200000:
                case 23200001:
                case 24223000:
                case 24225000:
                case 24224000:
                case 24330000:
                case 24313000:
                case 24314000:
                case 24315000:
                case 24321100:
                case 24322100:
                case 24323100:
                case 24324100:
                case 24325100:
                case 243100000:
                case 24331100:
                case 24332100:
                case 24336100:
                case 24333100:
                case 24334100:
                case 24335100:
                case 24337100:
                case 24338100:
                case 24339100:
                case 24351000:
                case 24361000:
                //case 25221000:    //MSR
                //case 25222000:    //ASR
                case 25223000:
                case 25225000:
                case 25224000:
                case 25310000:
                case 25320000:
                case 25330000:
                case 25340000:
                case 25351000:
                case 25352000:
                case 25353000:
                case 24226000:
                    return true;
                case 22121000:  //boundary
                case 25221000:  //MSR
                case 25222000:  //ASR
                    //var colorsSet=armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.segmentColorsSet(tg);
                    //if(colorsSet===true)
                        return false;
                    //else
                    //    return true;
                default:
                    return false;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "canClipPoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside canClipPoints", exc));
            } else {
                throw exc;
            }
        }
        return false;
    },
    LinesWithSeparateFill: function(linetype, shapes) {
        if (shapes === null)
            return false;
        switch (linetype) {
            case 23410000:
            case 22612000:
            case 22623000:
                return true;
            case 23114000:
            case 23115000:
            case 23350000:
            case 23113000:
            case 22134000:
            case 22624000:
            case 23111001:
            case 23111000:
            case 22340000:
            case 22350000:
            case 211100000:
            case 22121000:
            case 22122000:
            case 22123000:
            case 22124000:
            case 22125000:
            case 22330000:
            case 22522100:
            case 22522210:
            case 22522220:
            case 22523000:
            case 22525000:
            case 22526000:
            case 22527000:
            case 22528000:
            case 22613000:
            case 23112000:
            case 23120000:
            case 23131100:
            case 23131200:
            case 23132000:
            case 23134000:
            case 23172000:
            case 231111000:
            case 231112000:
            case 231113000:
            case 231114000:
            case 231115000:
            case 231116000:
            case 231117100:
            case 231117200:
            case 231117300:
            case 23330000:
            case 24250000:
            case 24211000:
            case 24221000:
            case 24222000:
            case 24223000:
            case 24225000:
            case 24224000:
            case 25221000:
            case 25222000:
            case 25223000:
            case 25225000:
            case 25224000:
            case 22222000:
            case 22222001:
            case 22224000:
            case 22224001:
            case 22221000:
            case 22223000:
            case 22225000:
                var shape = null;
                if (shapes !== null && shapes.size() > 0) {
                    for (var j = 0; j < shapes.size(); j++) {
                        shape = shapes.get(j);
                        if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE)
                            shapes.get(j).setFillColor(null);
                    }
                }
                return true;
            default:
                return false;
        }
    },
    Point2DtoPOINT2Mapped: function(pts2d, hashMap) {
        var pts = new java.util.ArrayList();
        try {
            var pt2d;
            var style = 0;
            for (var j = 0; j < pts2d.size(); j++)
            {
                pt2d = pts2d.get(j);
                if (hashMap.containsValue(pt2d))
                    style = 0;
                else
                    style = -1;
                pts.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts2d.get(j).getX(), pts2d.get(j).getY(), style));
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "Point2DToPOINT2Mapped", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside Point2DToPOINT2Mapped", exc));
            } else {
                throw exc;
            }
        }
        return pts;
    },
    Point2DtoPOINT2: function(pts2d) {
        var pts = new java.util.ArrayList();
        try {
            for (var j = 0; j < pts2d.size (); j++)
                pts.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts2d.get(j).getX(), pts2d.get(j).getY()));

        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "Point2DToPOINT2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside Point2DToPOINT2", exc));
            } else {
                throw exc;
            }
        }
        return pts;
    },
    POINT2toPoint2D: function(pts) {
        var pts2d = new java.util.ArrayList();
        try {
            for (var j = 0; j < pts.size (); j++)
                pts2d.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pts.get(j).x, pts.get(j).y));

        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "POINT2toPoint2D", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside POINT2toPoint2D", exc));
            } else {
                throw exc;
            }
        }
        return pts2d;
    },
    BuildShapeFromPoints: function(pts2d) {
        var shape = new armyc2.c2sd.graphics2d.GeneralPath();
        try {
            shape.moveTo(pts2d.get(0).getX(), pts2d.get(0).getY());
            for (var j = 1; j < pts2d.size(); j++) {
                shape.lineTo(pts2d.get(j).getX(), pts2d.get(j).getY());
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "buildShapeFromPoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside buildShapeFromPoints", exc));
            } else {
                throw exc;
            }
        }
        return shape;
    },
    buildShapeSpecFromPoints: function(tg0, shapeSpec, pts, clipArea) {
        var shapeSpecs2 = null;
        var shapeSpec2;
        try {
            shapeSpecs2 = new java.util.ArrayList();
            var j = 0;
            var h = shapeSpec.getBounds().height;
            var w = shapeSpec.getBounds().width;
            var x = shapeSpec.getBounds().x;
            var y = shapeSpec.getBounds().y;
//            if (h === 0 && w === 0)
//                return shapeSpecs2;
            if (h === 0)
                h = 1;
            if (w === 0)
                w = 1;
            var clipBounds = null;
            var clipPoints = null;

            if (clipArea !== null && clipArea instanceof armyc2.c2sd.graphics2d.Rectangle2D)
                clipBounds = clipArea;
            else if (clipArea !== null && clipArea instanceof armyc2.c2sd.graphics2d.Rectangle)
                clipBounds = clipArea;
            else if (clipArea !== null && clipArea instanceof java.util.ArrayList)
                clipPoints = clipArea;



            if (clipBounds !== null && clipBounds.containsRect(shapeSpec.getShape().getBounds2D()) === false && clipBounds.intersectsRect(shapeSpec.getShape().getBounds2D()) === false) {
                if (clipBounds.containsRect2(x, y, w, h) === false && clipBounds.intersectsRect2(x, y, w, h) === false)
                    return shapeSpecs2;
            } else if (clipPoints !== null) {
                var poly = new armyc2.c2sd.graphics2d.GeneralPath();
                for (j = 0; j < clipPoints.size(); j++) {
                    if (j === 0)
                        poly.moveTo(clipPoints.get(j).getX(), clipPoints.get(j).getY());
                    else
                        poly.lineTo(clipPoints.get(j).getX(), clipPoints.get(j).getY());
                }
                poly.closePath();
                if (poly.containsRect(shapeSpec.getShape().getBounds2D()) === false && poly.intersectsRect(shapeSpec.getShape().getBounds2D()) === false) {
                    if (poly.containsRect2(x, y, w, h) === false && poly.intersectsRect2(x, y, w, h) === false)
                        return shapeSpecs2;
                }
            }
            if (shapeSpec.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_MODIFIER || shapeSpec.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_MODIFIER_FILL) {
                shapeSpecs2.add(shapeSpec);
                return shapeSpecs2;
            }
            var tg = new armyc2.c2sd.JavaTacticalRenderer.TGLight();
            var pt = null;
            tg.set_LineType(22124000);
            var pts2 = new java.util.ArrayList();
            var pts2d = null;
            var shape = null;
            var gp = new armyc2.c2sd.graphics2d.GeneralPath();
            for (j = 0; j < pts.size(); j++) {
                pt = pts.get(j);
                switch (pt.style) {
                    case 0:
                        if (pts2.size() > 1)
                        {
                            tg = new armyc2.c2sd.JavaTacticalRenderer.TGLight();
                            tg.set_LineType(22124000);
                            tg.Pixels = pts2;
                            if (clipBounds !== null)
                            {
                                pts2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.ClipPolygon(tg, clipBounds);
                            }
                            else if (clipPoints !== null && !clipPoints.isEmpty())
                                pts2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.ClipPolygon(tg, clipPoints);
                            if (pts2d !== null && pts2d.size() > 1)
                            {
                                shape = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.BuildShapeFromPoints(pts2d);
                                gp.append(shape, false);
                            }
                            pts2.clear();
                            pts2.add(pt);
                        }
                        else
                            pts2.add(pt);
                        break;
                    case 1:
                        pts2.add(pt);
                        break;
                    default:
                        pts2.add(pt);
                        break;
                }
            }
            if (pts2.size() > 1) {
                tg = new armyc2.c2sd.JavaTacticalRenderer.TGLight();
                tg.set_LineType(22124000);
                tg.Pixels = pts2;
                if (clipBounds !== null)
                    pts2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.ClipPolygon(tg, clipBounds);
                else if (clipPoints !== null)
                    pts2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.ClipPolygon(tg, clipPoints);
                if (pts2d !== null && pts2d.size() > 1)
                {
                    shape = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.BuildShapeFromPoints(pts2d);
                    gp.append(shape, false);
                }
                tg0.set_WasClipped(tg.get_WasClipped());
            }
            shapeSpec2 = new armyc2.c2sd.JavaLineArray.Shape2(shapeSpec.getShapeType());
            shapeSpec2.setLineColor(shapeSpec.getLineColor());
            shapeSpec2.setFillColor(shapeSpec.getFillColor());
            shapeSpec2.setStroke(shapeSpec.getStroke());
            shapeSpec2.setTexturePaint(shapeSpec.getTexturePaint());
            shapeSpec2.setShape(gp);
            shapeSpecs2.add(shapeSpec2);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "buildShapeSpecFromPoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside buildShapeSpecFromPoints", exc));
            } else {
                throw exc;
            }
        }
        return shapeSpecs2;
    },
    postClipShapes: function(tg, shapeSpecsArray, clipArea) {
        var shapeSpecs2 = null;
        var tempShapes = null;
        try {
            if (shapeSpecsArray === null || shapeSpecsArray.size() === 0)
                return null;
            shapeSpecs2 = new java.util.ArrayList();
            var j = 0;
            var shapeSpecs = new java.util.ArrayList();
            for (j = 0; j < shapeSpecsArray.size (); j++)
                shapeSpecs.add(shapeSpecsArray.get(j));

            var pts = new java.util.ArrayList();
            var shape = null;
            var pt;
            var coords = Clazz.newArray(6, 0);
            var shapeSpec = null;
            for (j = 0; j < shapeSpecs.size(); j++) {
                shapeSpec = shapeSpecs.get(j);
                shape = shapeSpec.getShape();
                pts.clear();
                for (var i = shape.getPathIterator(null); !i.isDone(); i.next())
                {
                    var type = i.currentSegment(coords);
                    switch (type) {
                        case 0:
                            pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(coords[0], coords[1]);
                            pt.style = 0;
                            pts.add(pt);
                            break;
                        case 1:
                            pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(coords[0], coords[1]);
                            pt.style = 1;
                            pts.add(pt);
                            break;
                        case 2:
                            pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(coords[0], coords[1]);
                            pt.style = 2;
                            pts.add(pt);
                            pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(coords[2], coords[3]);
                            pt.style = 2;
                            pts.add(pt);
                            break;
                        case 3:
                            pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(coords[0], coords[1]);
                            pt.style = 3;
                            pts.add(pt);
                            pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(coords[2], coords[3]);
                            pt.style = 3;
                            pts.add(pt);
                            pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(coords[4], coords[5]);
                            pt.style = 3;
                            pts.add(pt);
                            break;
                        case 4:
                            pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(coords[0], coords[1]);
                            pt.style = 4;
                            pts.add(pt);
                            break;
                        default:
                            pt = null;
                            break;
                    }
                }
                tempShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.buildShapeSpecFromPoints(tg,shapeSpec, pts, clipArea);
                shapeSpecs2.addAll(tempShapes);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "postClipShapes", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside postClipShapes", exc));
            } else {
                throw exc;
            }
        }
        return shapeSpecs2;
    },
    segmentAnticipatedLine: function(tg) {
        try {
            var linetype = tg.get_LineType();
            if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(linetype, null))
                return false;
            if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.isAutoshape(tg))
                return false;
            if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.isBasicShape(linetype))
                return false;
            switch (linetype) {
                case 23200000:
                case 23200001:
                case 22421000:
                case 21700000:
                case 21710000:
                case 22320000:
                case 22521100:
                case 22521410:
                case 22521420:
                case 22521200:
                case 22521300:
                    return false;
                case 25225000:
                case 25223000:
                case 25224000:
                    return false;
                default:
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "segmentGenericLine", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside segmentGenericLine", exc));
            } else {
                throw exc;
            }
        }
        return true;
    },
    postSegmentFSA: function(tg, converter) {
        try {
            if (tg.get_Client().equals("2D"))
                return;
            var linetype = tg.get_LineType();
            switch (linetype) {
                case 22133200:
                case 22131300:
                case 23162200:
                case 24326101:
                case 24321200:
                case 24323200:
                case 24322200:
                case 24324200:
                case 24325200:
                case 24331200:
                case 24332200:
                case 24333200:
                case 24334200:
                case 24335200:
                case 24336200:
                case 24337200:
                case 24338200:
                case 24339200:
                case 24352000:
                case 24362000:
                    break;
                default:
                    return;
            }
            var latLongs = new java.util.ArrayList();
            var resultPts = new java.util.ArrayList();
            var j = 0;
            var k = 0;
            var n = 0;
            var pt0 = null;
            var pt1 = null;
            var pt = null;
            var dist = 0;
            //var interval = 1000000;
            var interval = 250000;
            var az = 0;
            var maxDist = 0;
            var pt2d = null;
            for (j = 0; j < tg.Pixels.size(); j++) {
                pt0 = tg.Pixels.get(j);
                pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt0.x, pt0.y);
                pt2d = converter.PixelsToGeo(pt2d);
                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2d.getX(), pt2d.getY());
                latLongs.add(pt0);
            }
            for (j = 0; j < latLongs.size() - 1; j++) {
                pt0 = latLongs.get(j);
                pt1 = latLongs.get(j + 1);
                pt1.style = -1;
                az = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetAzimuth(pt0, pt1);
                dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(latLongs.get(j), latLongs.get(j + 1), null, null);
                if (dist > maxDist) {
                    maxDist = dist;
                }
            }
            if (interval > maxDist)
                interval = maxDist;
            for (j = 0; j < latLongs.size() - 1; j++) {
                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(latLongs.get(j));
                pt0.style = 0;
                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(latLongs.get(j + 1));
                pt1.style = 0;
                az = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetAzimuth(pt0, pt1);
                dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(latLongs.get(j), latLongs.get(j + 1), null, null);
                n = Math.floor((dist / interval));
                if (j === 0)
                    resultPts.add(pt0);
                for (k = 1; k <= n; k++) {
                    pt = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, interval * k, az);
                    pt.style = -2;
                    dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(pt, pt1, null, null);
                    if (dist >= interval / 2)
                        resultPts.add(pt);
                }
                resultPts.add(pt1);
            }
            latLongs = resultPts;
            tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.LatLongToPixels(latLongs, converter);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "postSegmentFSA", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside postSegmentFSA", exc));
            } else {
                throw exc;
            }
        }
    },
    SegmentGeoPoints: function(tg, converter, zoomFactor) {
        try {
            if (tg.get_Client().equals("2D"))
                return;
            var resultPts = new java.util.ArrayList();
            var lineType = tg.get_LineType();
            //var interval = 1000000;
            var interval = 250000;
            var bolSegmentAC=false,bolIsAC=false,acWidth=0;
            //uncomment one line to segment AC
            bolSegmentAC=true;
            switch (lineType) {
                case 22222001:
                case 22224001:
                case 22225000:
                case 22223000:
                case 22221000:
                    if(!bolSegmentAC)
                        return;
                    bolIsAC=true;
                    break;
                case 22528000:
                case 24222000:
                case 231111000:
                case 22350000:
                case 231117300:
                case 231117200:
                case 231117100:
                case 23131100:
                case 23131200:
                case 23132000:
                case 23134000:
                case 23112000:
                case 23111000:
                case 23111001:
                case 22522100:
                case 23350000:
                case 22624000:
                case 22122000:
                case 23113000:
                case 23115000:
                case 23114000:
                case 22134000:
                case 23330000:
                    break;
                case 231116000:
                case 231115000:
                case 231114000:
                case 231113000:
                case 231112000:
                    interval = 500000;
                    break;
                case 22123000:
                    interval = 2000000;
                    break;
                default:
                    if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.segmentAnticipatedLine(tg))
                    {
                        break;
                    }
                    return;
            }
            var j = 0;
            var k = 0;
            var n = 0;
            var pt0 = null;
            var pt1 = null;
            var pt = null;
            var dist = 0;
            var az = 0;
            var maxDist = 0;
            //vincenty stuff
            var useVincenty=false;
            var fraction=0;
            var start=null,end=null;
            var lon=0, lat=0;
            var cartographic=new Cartographic(0, 0, 0);
            //ndew variables for tg.H colors
            var colorStrs = null;
            var H="";
            var color="";
            var segPlusColor=null;
            var seg="";            
            //var counter=0;
            var hmap=armyc2.c2sd.JavaTacticalRenderer.clsUtility.getMSRSegmentColorStrings(tg);
            if(hmap !== null)
                tg.set_H("");
            //uncomment following line to use Vincenty
            useVincenty = true;
            //if(converter._scale>10000)
                //useVincenty=false;
            for (j = 0; j < tg.LatLongs.size() - 1; j++) {
                pt0 = tg.LatLongs.get(j);
                pt1 = tg.LatLongs.get(j + 1);
                if(!bolIsAC)
                    pt1.style = -1;
                az = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetAzimuth(pt0, pt1);
                dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(tg.LatLongs.get(j), tg.LatLongs.get(j + 1), null, null);
                if (dist > maxDist) {
                    maxDist = dist;
                }
            }
            if (interval > maxDist)
                interval = maxDist;
            
            if(zoomFactor>0 && zoomFactor<0.01)
                zoomFactor=0.01;
            if(zoomFactor>0 && zoomFactor<1)
                interval *= zoomFactor;

            for (j = 0; j < tg.LatLongs.size() - 1; j++) {
                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.LatLongs.get(j));
                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.LatLongs.get(j + 1));
                if(!bolIsAC)
                {
                    pt0.style = 0;
                    pt1.style = 0;
                }
                else
                    acWidth=pt0.style;
                
                if(useVincenty)
                {
                    start=new Cartographic(pt0.x*Math.PI/180,pt0.y*Math.PI/180,0);    
                    end=new Cartographic(pt1.x*Math.PI/180,pt1.y*Math.PI/180,0);    
                    vincenty.EllipsoidGeodesic.EllipsoidGeodesic(start,end);
                    vincenty.EllipsoidGeodesic.setEndPoints(start,end); 
                }
                az = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetAzimuth(pt0, pt1);
                dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(tg.LatLongs.get(j), tg.LatLongs.get(j + 1), null, null);
                if(useVincenty)
                    dist=vincenty.EllipsoidGeodesic._distance;
                n = Math.floor((dist / interval));
                //for some reason it has a problem if n is too large
                if(n>100)                    
                    n=100;
                if(j===0)
                {
                    resultPts.add(pt0);
                    if (hmap !== null && hmap.containsKey(j)) 
                    {
                        if(!H.isEmpty())
                            H+=",";
                        color = hmap.get(j);
                        H+=(resultPts.size()-1).toString()+":"+color;
                    }
                }
                for (k = 1; k <= n; k++) 
                {
                    if(!useVincenty)    //geotrans interpolation
                    {
                        pt = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, interval * k, az);
                        pt.style = -2;
                        dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(pt, pt1, null, null);
                        if (dist >= interval / 2)
                        {                            
                            resultPts.add(pt);
                            if (hmap !== null && hmap.containsKey(j)) 
                            {
                                color = hmap.get(j);
                                if(!H.isEmpty())
                                    H+=",";
                                H+=(resultPts.size()-1).toString()+":"+color;
                            }                        
                        }
                    }
                    else    //use Vincenty surface distance algorithm
                    {
                        fraction = k/n;
                        if(fraction >= 1)
                            break;
                        vincenty.EllipsoidGeodesic.interpolateUsingFraction(fraction,cartographic);
                        pt=new armyc2.c2sd.JavaLineArray.POINT2(cartographic.longitude*180.0/Math.PI,cartographic.latitude*180.0/Math.PI);
                        if(bolIsAC)
                            pt.style=-acWidth;
                        resultPts.add(pt);
                        if (hmap !== null && hmap.containsKey(j)) 
                        {
                            color = hmap.get(j);
                            if(!H.isEmpty())
                                H+=",";
                            H+=(resultPts.size()-1).toString()+":"+color;
                        }                        
                    }
                }
                resultPts.add(pt1);
                if (hmap !== null && hmap.containsKey(j+1)) 
                {
                    if(!H.isEmpty())
                        H+=",";
                    color = hmap.get(j+1);
                    H+=(resultPts.size()-1).toString()+":"+color;
                }
            }
            if(!H.isEmpty())
                tg.set_H(H);
            tg.LatLongs = resultPts;
            tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.LatLongToPixels(tg.LatLongs, converter);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF._className, "SegmentGeoPoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside SegmentGeoPoints", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    _className: "clsUtilityCPOF"
};