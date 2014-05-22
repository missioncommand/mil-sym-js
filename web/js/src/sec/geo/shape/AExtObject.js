var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.shape = sec.geo.shape || {};
sec.geo.shape.AExtObject = function()
{
    this.type = -1;
    this.orbit = null;
    this.cake = null;
    this.circle = null;
    this.point = null;
    this.radarc = null;
    this.polyarc = null;
    this.polygon = null;
    this.line = null;
    this.route = null;
    this.track = null;
    var obj = arguments[0];
    if (Clazz.instanceOf(obj, Integer))
    {
        this.type = (obj).intValue();
        switch (this.type) {
            case 1:
                this.line = new sec.geo.shape.Line();
                break;
            case 2:
                this.orbit = new sec.geo.shape.Orbit();
                break;
            case 5:
                this.radarc = new sec.geo.shape.Radarc();
                break;
            case 0:
                this.cake = new sec.geo.shape.Cake();
                break;
            default:
                break;
        }
    }
    else if (Clazz.instanceOf(obj, sec.geo.shape.Line)) {
        this.line = obj;
        this.type = 1;
    } else if (Clazz.instanceOf(obj, sec.geo.shape.Route)) {
        this.route = obj;
        this.type = 8;
    } else if (Clazz.instanceOf(obj, sec.geo.shape.Polygon)) {
        this.polygon = obj;
        this.type = 7;
    } else if (Clazz.instanceOf(obj, sec.geo.shape.Radarc)) {
        this.radarc = obj;
        this.type = 5;
    } else if (Clazz.instanceOf(obj, sec.geo.shape.Polyarc)) {
        this.polyarc = obj;
        this.type = 6;
    } else if (Clazz.instanceOf(obj, sec.geo.shape.Orbit)) {
        this.orbit = obj;
        this.type = 2;
    } else if (Clazz.instanceOf(obj, sec.geo.shape.Cake)) {
        this.cake = obj;
        this.type = 0;
    } else if (Clazz.instanceOf(obj, sec.geo.shape.Circle)) {
        this.circle = obj;
        this.type = 4;
    } else if (Clazz.instanceOf(obj, sec.geo.shape.Point)) {
        this.point = obj;
        this.type = 3;
    } else if (Clazz.instanceOf(obj, sec.geo.shape.Track)) {
        this.track = obj;
        this.type = 9;
    }

    this.getElements = function()
    {
        if (this.track !== null)
            return this.track.elements;
        else if (this.cake !== null)
            return this.cake.elements;
        else
            return  null;
    };
    this.setMaxDistance = function(maxDistanceMeters) {
        switch (this.type) {
            case 2:
                this.orbit.setMaxDistance(maxDistanceMeters);
                break;
            case 4:
                this.circle.setMaxDistance(maxDistanceMeters);
                break;
            case 5:
                this.radarc.setMaxDistance(maxDistanceMeters);
                break;
            case 6:
                this.polyarc.setMaxDistance(maxDistanceMeters);
                break;
            case 7:
                this.polygon.setMaxDistance(maxDistanceMeters);
                break;
            case 8:
                this.route.setMaxDistance(maxDistanceMeters);
                break;
            case 1:
                this.line.setMaxDistance(maxDistanceMeters);
                break;
            case 4:
                this.circle.setMaxDistance(maxDistanceMeters);
                break;
            default:
                break;
        }
    };
    this.addPoint = function(point) {
        switch (this.type) {
            case 1:
                this.line.addPoint(point);
                break;
            case 5:
                break;
            case 2:
                this.orbit.addPoint(point);
                break;
            case 6:
                this.polyarc.addPoint(point);
                break;
            case 7:
                this.polygon.addPoint(point);
                break;
            case 8:
                this.route.addPoint(point);
                break;
            default:
                break;
        }
        return;
    };
    this.setFlatness = function(flatnessDistanceMeters) {
        switch (this.type) {
            case 1:
                this.line.setFlatness(flatnessDistanceMeters);
                break;
            case 2:
                this.orbit.setFlatness(flatnessDistanceMeters);
                break;
            case 4:
                this.circle.setFlatness(flatnessDistanceMeters);
                break;
            case 5:
                this.radarc.setFlatness(flatnessDistanceMeters);
                break;
            case 6:
                this.polyarc.setFlatness(flatnessDistanceMeters);
                break;
            case 7:
                this.polygon.setFlatness(flatnessDistanceMeters);
                break;
            case 8:
                this.route.setFlatness(flatnessDistanceMeters);
                break;
            default:
                break;
        }
        this.shapeChanged();
    };
    this.setLimit = function(limit) {
        switch (this.type) {
            case 1:
                this.line.setLimit(limit);
                break;
            case 2:
                this.orbit.setLimit(limit);
                break;
            case 4:
                this.circle.setLimit(limit);
                break;
            case 5:
                this.radarc.setLimit(limit);
                break;
            case 6:
                this.polyarc.setLimit(limit);
                break;
            case 7:
                this.polygon.setLimit(limit);
                break;
            case 8:
                this.route.setLimit(limit);
                break;
            default:
                break;
        }
        this.shapeChanged();
    };
    this.getMinAltitude = function() {
        switch (this.type) {
            case 1:
                return this.line.getMinAltitude();
            case 2:
                return this.orbit.getMinAltitude();
            case 4:
                return this.circle.getMinAltitude();
            case 6:
                return this.polyarc.getMinAltitude();
            case 7:
                return this.polygon.getMinAltitude();
            case 8:
                return this.route.getMinAltitude();
            case 5:
                return this.radarc.getMinAltitude();
            default:
                return -1;
        }
    };
    this.getMaxAltitude = function() {
        switch (this.type) {
            case 1:
                return this.line.getMaxAltitude();
            case 2:
                return this.orbit.getMaxAltitude();
            case 4:
                return this.circle.getMaxAltitude();
            case 6:
                return this.polyarc.getMaxAltitude();
            case 7:
                return this.polygon.getMaxAltitude();
            case 8:
                return this.route.getMaxAltitude();
            case 5:
                return this.radarc.getMaxAltitude();
            default:
                return -1;
        }
        return -1;
    };
    this.getAltitudeMode = function() {
        switch (this.type) {
            case 1:
                return this.line.getAltitudeMode();
            case 2:
                return this.orbit.getAltitudeMode();
            case 4:
                return this.circle.getAltitudeMode();
            case 6:
                return this.polyarc.getAltitudeMode();
            case 7:
                return this.polygon.getAltitudeMode();
            case 8:
                return this.route.getAltitudeMode();
            case 5:
                return this.radarc.getAltitudeMode();
            default:
                return sec.geo.kml.KmlOptions.AltitudeMode.ABSOLUTE;
        }
    };
    this.getPathIterator = function(at) {
        switch (this.type) {
            case 1:
                return this.line.getShape().getPathIterator(at);
            case 2:
                return this.orbit.getShape().getPathIterator(at);
            case 7:
                return this.polygon.getShape().getPathIterator(at);
            case 6:
                return this.polyarc.getShape().getPathIterator(at);
            case 4:
                return this.circle.getShape().getPathIterator(at);
            case 5:
                return this.radarc.getShape().getPathIterator(at);
            case 8:
                return this.route.getShape().getPathIterator(at);
            default:
                return null;
        }
    };
    this.shapeChanged = function() {
        switch (this.type) {
            case 7:
                this.polygon.shapeChanged();
                break;
            case 2:
                this.orbit.shapeChanged();
                break;
            case 8:
                this.route.shapeChanged();
                break;
            case 5:
                this.radarc.shapeChanged();
                break;
            case 6:
                this.polyarc.shapeChanged();
                break;
            default:
                break;
        }
    };
};
sec.geo.shape.AExtObject.CAKE = 0;
sec.geo.shape.AExtObject.LINE = 1;
sec.geo.shape.AExtObject.ORBIT = 2;
sec.geo.shape.AExtObject.POINT = 3;
sec.geo.shape.AExtObject.CIRCLE = 4;
sec.geo.shape.AExtObject.RADARC = 5;
sec.geo.shape.AExtObject.POLYARC = 6;
sec.geo.shape.AExtObject.POLYGON = 7;
sec.geo.shape.AExtObject.ROUTE = 8;
sec.geo.shape.AExtObject.TRACK = 9;