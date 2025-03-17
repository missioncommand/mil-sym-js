var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.ShapeObject = function()
{
    this.type = -1;
    this.geoEllipse = null;
    this.geoPath = null;
    this.geoArc = null;
    this.geoBlock = null;
    this.geoBlock2 = null;
    this.geoPoint = null;
    this.area = null;
    this.geoCalc = null;
    var obj = null;
    if (arguments.length === 1)
        obj = arguments[0];
    if (Clazz.instanceOf(obj, sec.geo.GeoArc))
    {
        this.geoArc = obj;
        this.type = 0;
    }
    else if (Clazz.instanceOf(obj, sec.geo.GeoPath))
    {
        this.geoPath = obj;
        this.type = 4;
    }
    else if (Clazz.instanceOf(obj, sec.geo.GeoEllipse))
    {
        this.geoEllipse = obj;
        this.type = 3;
    }
    else if (Clazz.instanceOf(obj, sec.geo.GeoBlock))
    {
        this.geoBlock = obj;
        this.type = 1;
    }
    else if (Clazz.instanceOf(obj, sec.geo.GeoBlock2))
    {
        this.geoBlock2 = obj;
        this.type = 2;
    }
    else if (Clazz.instanceOf(obj, sec.geo.GeoPoint))
    {
        this.geoPoint = obj;
        this.type = 5;
    }
    else if (Clazz.instanceOf(obj, armyc2.c2sd.graphics2d.Area)) {
        this.area = obj;
        this.type = 6;
    }
    this.arcTo = function(pivot, widthMeters, heightMeters, leftAzimuthDegrees, rightAzimuthDegrees) {
        switch (this.type) {
            case 3:
                this.geoEllipse.arcTo(pivot, widthMeters, heightMeters, leftAzimuthDegrees, rightAzimuthDegrees);
                break;
            case 0:
                this.geoArc.arcTo(pivot, widthMeters, heightMeters, leftAzimuthDegrees, rightAzimuthDegrees);
                break;
            case 4:
                this.geoPath.arcTo(pivot, widthMeters, heightMeters, leftAzimuthDegrees, rightAzimuthDegrees);
                break;
            default:
                break;
        }
    };
    this.getPathIterator = function(at) {
        switch (this.type) {
            case 3:
                return this.geoEllipse.getPathIterator(at);
            case 4:
                return this.geoPath.getPathIterator(at);
            case 1:
                return this.geoBlock.getPathIterator(at);
            case 2:
                return this.geoBlock2.getPathIterator(at, 0);
            case 0:
                return this.geoArc.getPathIterator(at);
            default:
                return null;
        }
    };
    this.moveTo = function(point) {
        switch (this.type) {
            case 3:
                break;
            case 5:
                break;
            case 0:
                this.geoArc.moveTo(point);
                break;
            case 4:
                this.geoPath.moveTo(point);
                break;
            case 1:
                this.geoBlock.moveTo(point);
                break;
            case 2:
                this.geoBlock2.moveTo(point);
                break;
            default:
                break;
        }
    };
    this.moveToLatLong = function(longitudeDegrees, latitudeDegrees) {
        switch (this.type) {
            case 3:
                break;
            case 5:
                break;
            case 0:
                this.geoArc.moveToLatLong(longitudeDegrees, latitudeDegrees);
                break;
            case 4:
                this.geoPath.moveToLatLong(longitudeDegrees, latitudeDegrees);
                break;
            case 1:
                this.geoBlock.moveToLatLong(longitudeDegrees, latitudeDegrees);
                break;
            case 2:
                this.geoBlock2.moveToLatLong(longitudeDegrees, latitudeDegrees);
                break;
            default:
                break;
        }
    };
    this.lineTo = function(point) {
        switch (this.type) {
            case 3:
                break;
            case 5:
                break;
            case 0:
                this.geoArc.lineTo(point);
                break;
            case 4:
                this.geoPath.lineTo(point);
                break;
            case 1:
                this.geoBlock.lineTo(point);
                break;
            case 2:
                this.geoBlock2.lineTo(point);
                break;
            default:
                break;
        }
    };
    this.lineToLatLong = function(longitudeDegrees, latitudeDegrees) {
        this.lineTo(new sec.geo.GeoPoint(longitudeDegrees, latitudeDegrees));
    };
    this.closePath = function() {
        switch (this.type) {
            case 0:
                this.geoArc.closePath();
                break;
            case 1:
                this.geoBlock.closePath();
                break;
            case 2:
                this.geoBlock2.closePath();
                break;
            case 4:
                this.geoPath.closePath();
                ;
                break;
            default:
                break;
        }
    };
};
sec.geo.ShapeObject.GEOARC = 0;
sec.geo.ShapeObject.GEOBLOCK = 1;
sec.geo.ShapeObject.GEOBLOCK2 = 2;
sec.geo.ShapeObject.GEOELLIPSE = 3;
sec.geo.ShapeObject.GEOPATH = 4;
sec.geo.ShapeObject.GEOPOINT = 5;
sec.geo.ShapeObject.AREA = 6;
