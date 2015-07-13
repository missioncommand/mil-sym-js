var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.kml = sec.geo.kml || {};
sec.geo.kml.KmlRenderer = function()
{
    this.colorDefault = "ff003fff";
    this.descriptionField = "#DESCRIPTION#";
    this.extendedData = "#EXTENDEDDATA#";
    this.colorField = "#COLOR#";
    this.nameField = "#NAME#";
    this.idField = "#ID#";
    this.placemarkidField = "#PLACEMARKID#";
    this.KML_START = null;
    this.KML_END = "</Folder>\n";
    this.PLACEMARK_START = null;
    this.PLACEMARK_END = "\t\t\t</MultiGeometry>\n\t\t</Placemark>\n";
    this.DEFAULT_EXDAT = "<Data name='sid'><value>#ID#</value></Data><Data name='shapeType'><value>#SHAPETYPE#</value></Data><Data name='lat'><value>#LAT#</value></Data><Data name='lon'><value>#LON#</value></Data><Data name='alt'><value>#ALT#</value></Data>";
    this.DEFAULT_BLSTY = "<![CDATA[$[sid]]]>";
    this.KML_START = "<Folder id=\"" + this.idField + "\">\n";
    this.PLACEMARK_START = "\t\t<Placemark id=\"" + this.placemarkidField + "\">\n" + "                      <Style>\n" + "                          <PolyStyle>\n" + "                              <color>" + this.colorField + "</color>\n" + "                          </PolyStyle>\n" + "                          <LineStyle>\n" + "                              <color>" + this.colorField + "</color>\n" + "                          </LineStyle>\n" + "                       </Style>\n" + "			<name>" + this.nameField + "</name>\n" + "			<description>" + this.descriptionField + "</description>\n" + "			<ExtendedData>" + this.extendedData + "</ExtendedData>\n" + "			<MultiGeometry>\n";

    
    this.KML_START = "<Folder id=\"" + this.idField + "\">\n";
    this.KML_END = "</Folder>\n";

    this.PLACEMARK_START = "" +
            "		<Placemark id=\"" + this.placemarkidField + "\">\n" +
            "                      <Style>\n" +
            "                          <PolyStyle>\n" +
            "                              <color>" + this.colorField + "</color>\n" +
            "                          </PolyStyle>\n" +
            "                          <LineStyle>\n" +
            "                              <color>" + this.colorField + "</color>\n" +
            "                          </LineStyle>\n" +
            "                       </Style>\n" +
            "			<name>" + this.nameField + "</name>\n" +
            "			<description>" + this.descriptionField + "</description>\n" +
            "			<ExtendedData>" + this.extendedData + "</ExtendedData>\n" +
            "			<MultiGeometry>\n";

    this.PLACEMARK_END = "" +
            "			</MultiGeometry>\n" +
            "		</Placemark>\n";


    this.DEFAULT_EXDAT = "<Data name='sid'><value>#ID#</value></Data><Data name='shapeType'><value>#SHAPETYPE#</value></Data><Data name='lat'><value>#LAT#</value></Data><Data name='lon'><value>#LON#</value></Data><Data name='alt'><value>#ALT#</value></Data>";
    this.DEFAULT_BLSTY = "<!" + "[CDAT" + "A[" + "$[sid]" + "]]" + ">";

    this.renderPolygons = function(ext) {
        var polys = new java.util.ArrayList();
        ext.setMaxDistance(200000);
        //ext.setFlatness(1);
        //ext.setLimit(3);
        ext.setFlatness(2);
        ext.setLimit(8);
        var perimeterPoints = new java.util.ArrayList();
        var it = null;
        var ait = null;
        var oit = ext.getPathIterator(null);
        if (Clazz.instanceOf(oit, armyc2.c2sd.graphics2d.PathIterator))
            it = oit;
        else if (Clazz.instanceOf(oit, sec.sun.awt.geom.AreaIterator))
            ait = oit;
        var pre = null;
        if (it !== null) {
            while (!it.isDone()) {
                var strokePoints = Clazz.newArray(6, 0);
                var type = it.currentSegment(strokePoints);
                var longitudeDegrees = strokePoints[0];
                var latitudeDegrees = strokePoints[1];
                switch (type) {
                    case 0:
                    case 1:
                        if (pre !== null) {
                            var ps = new java.util.ArrayList();
                            ps.add(new sec.geo.shape.Point(pre.getLongitude(), pre.getLatitude(), ext.getMinAltitude()));
                            ps.add(new sec.geo.shape.Point(pre.getLongitude(), pre.getLatitude(), ext.getMaxAltitude()));
                            ps.add(new sec.geo.shape.Point(longitudeDegrees, latitudeDegrees, ext.getMaxAltitude()));
                            ps.add(new sec.geo.shape.Point(longitudeDegrees, latitudeDegrees, ext.getMinAltitude()));
                            ps.add(new sec.geo.shape.Point(pre.getLongitude(), pre.getLatitude(), ext.getMinAltitude()));
                            polys.add(new sec.geo.kml.KmlPolygon(ps, ext.getAltitudeMode()));
                        }
                        pre = new sec.geo.shape.Point(longitudeDegrees, latitudeDegrees);
                        perimeterPoints.add(pre);
                }
                it.next();
            }
        } else if (ait !== null) {
            while (!ait.isDone()) {
                var strokePoints = Clazz.newArray(6, 0);
                var type = ait.currentSegment(strokePoints);
                var longitudeDegrees = strokePoints[0];
                var latitudeDegrees = strokePoints[1];
                switch (type) {
                    case 0:
                    case 1:
                        if (pre !== null) {
                            var ps = new java.util.ArrayList();
                            ps.add(new sec.geo.shape.Point(pre.getLongitude(), pre.getLatitude(), ext.getMinAltitude()));
                            ps.add(new sec.geo.shape.Point(pre.getLongitude(), pre.getLatitude(), ext.getMaxAltitude()));
                            ps.add(new sec.geo.shape.Point(longitudeDegrees, latitudeDegrees, ext.getMaxAltitude()));
                            ps.add(new sec.geo.shape.Point(longitudeDegrees, latitudeDegrees, ext.getMinAltitude()));
                            ps.add(new sec.geo.shape.Point(pre.getLongitude(), pre.getLatitude(), ext.getMinAltitude()));
                            polys.add(new sec.geo.kml.KmlPolygon(ps, ext.getAltitudeMode()));
                        }
                        pre = new sec.geo.shape.Point(longitudeDegrees, latitudeDegrees);
                        perimeterPoints.add(pre);
                }
                ait.next();
            }
        }
        if (perimeterPoints.size() > 0) {
            if (perimeterPoints.get(0).equals(perimeterPoints.get(perimeterPoints.size() - 1))) {
                polys.add(new sec.geo.kml.KmlPolygon(this.transformPoints(perimeterPoints, ext.getMinAltitude()), ext.getAltitudeMode()));
                polys.add(new sec.geo.kml.KmlPolygon(this.transformPoints(perimeterPoints, ext.getMaxAltitude()), ext.getAltitudeMode()));
            } else {
                perimeterPoints.add(perimeterPoints.get(0));
                polys.add(new sec.geo.kml.KmlPolygon(this.transformPoints(perimeterPoints, ext.getMinAltitude()), ext.getAltitudeMode()));
                polys.add(new sec.geo.kml.KmlPolygon(this.transformPoints(perimeterPoints, ext.getMaxAltitude()), ext.getAltitudeMode()));
            }
        }
        return polys;
    };
    this.getPlacemarkKml = function(ext, id, name, description, lineColor, fillColor) {
        try {
            var sb = new sec.geo.utilities.StringBuilder();
            var polys = this.renderPolygons(ext);
            sb.append(this.PLACEMARK_START);
            var placemarkIdIndex = sb.indexOf(this.placemarkidField);
            var placemarkIdLength = this.placemarkidField.length;
            if (id !== null) {
                sb.replace(placemarkIdIndex, placemarkIdIndex + placemarkIdLength, id + "_mg");
            }
            var descriptionIndex = sb.indexOf(this.descriptionField);
            var descriptionLength = this.descriptionField.length;
            if (description !== null)
                sb.replace(descriptionIndex, descriptionIndex + descriptionLength, "<![CDATA[" + description + "]]>");
            var colorIndex = sb.indexOf(this.colorField);
            var colorLength = this.colorField.length;
            if (fillColor !== null) {
                sb.replace(colorIndex, colorIndex + colorLength, fillColor);
            } else
                sb.replace(colorIndex, colorIndex + colorLength, this.colorDefault);
            var lineColorIndex = sb.indexOf2(this.colorField, colorIndex + colorLength);
            if (lineColor !== null) {
                sb.replace(lineColorIndex, lineColorIndex + colorLength, lineColor);
            } else
                sb.replace(lineColorIndex, lineColorIndex + colorLength, this.colorDefault);
            var nameIndex = sb.indexOf(this.nameField);
            var nameLength = this.nameField.length;
            if (name !== null)
                sb.replace(nameIndex, nameIndex + nameLength, "<![CDATA[" + name + "]]>");
            for (var j = 0; j < polys.size(); j++)
            {
                var poly = polys.get(j);
                sb.append(poly.toString());
            }
            sb.append(this.PLACEMARK_END);
            return sb.toString();
        } catch (e) {
            throw e;
        }
    };
    this.getTrackKml = function(ext, id, name, description, lineColor, fillColor) {
        try {
            var aext = this.getAExtObject(ext);
            var sb = new sec.geo.utilities.StringBuilder();
            sb.append(this.KML_START);
            var idIndex = sb.indexOf(this.idField);
            var idLength = this.idField.length;
            sb.replace(idIndex, idIndex + idLength, id);

            
            var elements = aext.getElements();
            var j = 0;
            for (j = 0; j < elements.size(); j++)
            {  
                var route = elements.get(j);
                var aext2 = new sec.geo.shape.AExtObject(route);                
                sb.append(this.getPlacemarkKml(aext2, id, name, description, lineColor, fillColor));
            }

            sb.append(this.KML_END);
            return sb.toString();
        } catch (e) {
            throw e;
        }
    };
    this.getKml = function(ext, id, name, description, lineColor, fillColor) {
        try {
            var aext = this.getAExtObject(ext);
            if (aext.getElements() !== null)            
                return (this.getTrackKml(ext, id, name, description, lineColor, fillColor));
            
            var sb = new sec.geo.utilities.StringBuilder();
            sb.append(this.KML_START);
            var idIndex = sb.indexOf(this.idField);
            var idLength = this.idField.length;
            sb.replace(idIndex, idIndex + idLength, id);
            sb.append(this.getPlacemarkKml(aext, id, name, description, lineColor, fillColor));
            sb.append(this.KML_END);
            return sb.toString();
        } catch (e) {
            throw e;
        }
    };
    this.getAExtObject = function(obj) {
        var line = null;
        var route = null;
        var circle = null;
        var polyarc = null;
        var polygon = null;
        var orbit = null;
        var radarc = null;
        var track = null;
        var cake = null;
        var point = null;
        var ext = null;
        if (Clazz.instanceOf(obj, sec.geo.shape.Line)) {
            line = obj;
            ext = new sec.geo.shape.AExtObject(line);
        } else if (Clazz.instanceOf(obj, sec.geo.shape.Route)) {
            route = obj;
            ext = new sec.geo.shape.AExtObject(route);
        } else if (Clazz.instanceOf(obj, sec.geo.shape.Polyarc)) {
            polyarc = obj;
            ext = new sec.geo.shape.AExtObject(polyarc);
        } else if (Clazz.instanceOf(obj, sec.geo.shape.Orbit)) {
            orbit = obj;
            ext = new sec.geo.shape.AExtObject(orbit);
        } else if (Clazz.instanceOf(obj, sec.geo.shape.Polygon)) {
            polygon = obj;
            ext = new sec.geo.shape.AExtObject(polygon);
        } else if (Clazz.instanceOf(obj, sec.geo.shape.Circle)) {
            circle = obj;
            ext = new sec.geo.shape.AExtObject(circle);
        } else if (Clazz.instanceOf(obj, sec.geo.shape.Radarc)) {
            radarc = obj;
            ext = new sec.geo.shape.AExtObject(radarc);
        } else if (Clazz.instanceOf(obj, sec.geo.shape.Track)) {
            track = obj;
            ext = new sec.geo.shape.AExtObject(track);
        } else if (Clazz.instanceOf(obj, sec.geo.shape.Cake)) {
            cake = obj;
            ext = new sec.geo.shape.AExtObject(cake);
        } else if (Clazz.instanceOf(obj, sec.geo.shape.Point)) {
            point = obj;
            ext = new sec.geo.shape.AExtObject(point);
        }
        return ext;
    };
    this.getCoords = function(obj) {
        var ext = this.getAExtObject(obj);
        var polys = this.renderPolygons(ext);
        var coords = new Array(polys.size());
        var i = 0;
        for (var poly, $poly = polys.iterator(); $poly.hasNext() && ((poly = $poly.next()) || true); ) {
            coords[i] = poly.toCoordString();
            i++;
        }
        return coords;
    };
    this.transformPoints = function(points, altitudeMeters) {
        var returnPoints = new java.util.ArrayList();
        for (var j = 0; j < points.size(); j++)
        {
            var p = points.get(j);
            returnPoints.add(new sec.geo.shape.Point(p.getLongitude(), p.getLatitude(), altitudeMeters));
        }
        return returnPoints;
    };
};
