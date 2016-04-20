armyc2.c2sd=armyc2.c2sd || {};
armyc2.c2sd.graphics2d=armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.Area=function()
{
    this._path = null;
    this._pathIterator = null;
    if(arguments.length===1) 
    {
        var obj=arguments[0];
        var poly = null;
        var shape = null;
        var pt = null;
        var j = 0;
        if (obj instanceof armyc2.c2sd.graphics2d.Polygon) 
        {
            poly = obj;
            this._path =  new android.graphics.Path ();
            this._pathIterator =  new armyc2.c2sd.graphics2d.PathIterator (null);
            for (j = 0; j < poly.size (); j++) 
            {
                pt = poly.getPts ().get (j);
                if (j === 0) 
                {
                    this._path.moveTo (pt.x, pt.y);
                    this._pathIterator.moveTo (pt.x, pt.y);
                }
                else 
                {
                    this._path.lineTo (pt.x, pt.y);
                    this._pathIterator.lineTo (pt.x, pt.y);
                }
            }
        }
        else if (obj instanceof armyc2.c2sd.graphics2d.GeneralPath) 
        {
            shape = obj;
            
            this._path =  new android.graphics.Path ();
            this._pathIterator =  new armyc2.c2sd.graphics2d.PathIterator (null);
            var p = shape.getPathIterator (null);
            var pts = p.getPoints ();
            for (j = 0; j < pts.size (); j++) {
                pt = pts.get (j);
                switch (pt.style) {
                    case 0:
                        this._path.moveTo (pt.x, pt.y);
                        this._pathIterator.moveTo (pt.x, pt.y);
                        break;
                    case 1:
                        this._path.lineTo (pt.x, pt.y);
                        this._pathIterator.lineTo (pt.x, pt.y);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    this.lineTo = function (x, y) {
        this._path.lineTo (x, y);
        this._pathIterator.lineTo (x, y);
    };
    this.moveTo = function (x, y) {
        this._path.moveTo (x, y);
        this._pathIterator.moveTo (x, y);
    };
    this.getPathIterator=function (at) {
        return this._pathIterator;
    };
};
armyc2.c2sd.graphics2d.Area.prototype.containsPt2=function (x, y) {
    return false;
};
armyc2.c2sd.graphics2d.Area.prototype.containsRect2=function (x, y, width, height) {
    return false;
};
armyc2.c2sd.graphics2d.Area.prototype.containsPt=function (pt) {
    return false;
};
armyc2.c2sd.graphics2d.Area.prototype.getBounds2D=function () {
    return null;
};
armyc2.c2sd.graphics2d.Area.prototype.getbounds=function () {
    return null;
};
armyc2.c2sd.graphics2d.Area.prototype.intersectsRect2=function (x, y, w, h) {
    return false;
};
armyc2.c2sd.graphics2d.Area.prototype.intersectsRect=function (rect) {
    return false;
};
armyc2.c2sd.graphics2d.Area.prototype.intersect=function (area) {
    try {
        var j = 0;
        var polygon = area.getPathIterator (null).getPoints ();
        var hatchLines = this.getPathIterator (null).getPoints ();
        if (polygon.get (0).x !== polygon.get (polygon.size () - 1).x || polygon.get (0).y !== polygon.get (polygon.size () - 1).y) {
            polygon.add ( new armyc2.c2sd.JavaLineArray.POINT2 (polygon.get (polygon.size () - 1)));
        }
        var hatchLine = null;
        var rectHatch = null;
        var rectPoly = armyc2.c2sd.graphics2d.Area.getMBR (polygon);
        var pts =  new java.util.ArrayList ();
        var ptsTemp = null;
        for (j = 0; j < hatchLines.size() - 1; j++) {
            hatchLine = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D (hatchLines.get (j).x, hatchLines.get (j).y, hatchLines.get (j + 1).x, hatchLines.get (j + 1).y);
            rectHatch = hatchLine.getBounds2D ();
            if (rectHatch.intersectsRect (rectPoly) === false) continue ;
            ptsTemp = armyc2.c2sd.graphics2d.Area.getLineIntersectPoints (polygon, hatchLine);
            if (ptsTemp !== null) 
                pts.addAll (ptsTemp);
        }
        this.getPathIterator (null).getPoints ().clear ();
        for (j = 0; j < pts.size (); j++) {
            pt = pts.get (j);
            switch (pt.style) {
                case 0:
                    this.moveTo (pt.x, pt.y);
                    break;
                case 1:
                    this.lineTo (pt.x, pt.y);
                    break;
                default:
                    break;
            }
        }
        this.getPathIterator (null).reset ();
        return ;
    } catch (exc) {
        if (Clazz.instanceOf (exc)) {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (this._className, "intersect",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside intersect", exc));
        } else {
            throw exc;
        }
    }
};
armyc2.c2sd.graphics2d.Area.reorderPointsByDistance = function (hatchLine, pts) {
    try {
        var minDistance = 0;
        var dist = 0;
        var j = 0;
        var minIndex = -1;
        var distances =  new java.util.HashMap ();
        var ptsOrdered =  new java.util.ArrayList ();
        var origin = hatchLine.getP1 ();
        var pt0 =  new armyc2.c2sd.JavaLineArray.POINT2 (origin.getX (), origin.getY ());
        var pt1 = null;
        for (j = 0; j < pts.size (); j++) {
            pt1 =  new armyc2.c2sd.JavaLineArray.POINT2 (pts.get (j).getX (), pts.get (j).getY ());
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pt0, pt1);
            distances.put (new Integer (j), new Double (dist));
        }
        while (distances.size () > 0) {
            for (j = 0; j < pts.size (); j++) {
                if (distances.containsKey (new Integer (j))) {
                    minIndex = j;
                    minDistance = (distances.get (new Integer (j))).doubleValue ();
                    break;
                }
            }
            for (j = 0; j < pts.size (); j++) {
                if (distances.containsKey (new Integer (j))) {
                    dist = (distances.get (new Integer (j))).doubleValue ();
                    if (dist < minDistance) {
                        minDistance = dist;
                        minIndex = j;
                    }
                }
            }
            ptsOrdered.add (pts.get (minIndex));
            distances.remove (new Integer (minIndex));
        }
        pts.clear ();
        for (j = 0; j < ptsOrdered.size (); j++) 
            pts.add (ptsOrdered.get (j));

    } catch (exc) {
        if (Clazz.instanceOf (exc)) {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (this._className, "reorderPointsByDistance",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside reorderPointsByDistance", exc));
        } else {
            throw exc;
        }
    }
    return ;
};
armyc2.c2sd.graphics2d.Area.getMBR=function (polygon) {
    var j = 0;
    var left = polygon.get (0).x;
    var top = polygon.get (0).y;
    var right = polygon.get (0).x;
    var bottom = polygon.get (0).y;
    for (j = 1; j < polygon.size (); j++) {
        if (polygon.get (j).x < left) left = polygon.get (j).x;
        if (polygon.get (j).x > right) right = polygon.get (j).x;
        if (polygon.get (j).y < top) top = polygon.get (j).y;
        if (polygon.get (j).y > bottom) bottom = polygon.get (j).y;
    }
    return  new armyc2.c2sd.graphics2d.Rectangle2D (left, top, right - left, bottom - top);
};
armyc2.c2sd.graphics2d.Area.isVertical=function (edge) {
    if (edge.getX1 () === edge.getX2 ()) return true;
    else return false;
};
armyc2.c2sd.graphics2d.Area.adjustVerticalLine = function (line) {
    var linePt0 = line.getP1 ();
    var linePt1 = line.getP2 ();
    if (armyc2.c2sd.graphics2d.Area.isVertical (line)) 
    {
        var x = line.getX2 () + 1;
        var y = line.getY2 ();
        linePt1.setLocation (x, y);
        line.setLine (linePt0, linePt1);
    }
};
armyc2.c2sd.graphics2d.Area.getLineIntersectPoints = function (polygon, hatchLine) {
    var pts = null;
    try {
        var j = 0;
        var k = 0;
        var segment = null;
        var pt0 = null;
        var pt1 = null;
        //close polygon
        pt0=polygon.get(0);
        pt1=polygon.get(polygon.size()-1);
        if(pt0.x !== pt1.x || pt0.y !== pt1.y)        
            polygon.add(pt0);            
        
        var pt2 = null;
        armyc2.c2sd.graphics2d.Area.adjustVerticalLine (hatchLine);
        var ptsPath =  new java.util.ArrayList ();
        var x = 0;
        var y = 0;
        var m1 = 0;
        var m2 = 0;
        var b1 = 0;
        var b2 = 0;
        for (j = 0; j < polygon.size () - 1; j++) 
        {
            pt0 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (polygon.get (j).x, polygon.get (j).y);
            pt1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (polygon.get (j + 1).x, polygon.get (j + 1).y);
            segment = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D (pt0, pt1);
            armyc2.c2sd.graphics2d.Area.adjustVerticalLine (segment);
            pt0 = segment.getP1 ();
            pt1 = segment.getP2 ();
            m1 = (hatchLine.getY1 () - hatchLine.getY2 ()) / (hatchLine.getX1 () - hatchLine.getX2 ());
            m2 = (pt0.getY () - pt1.getY ()) / (pt0.getX () - pt1.getX ());
            if (hatchLine.intersectsLine (segment)) {
                if (m1 === m2) {
                    ptsPath.add (pt0);
                    ptsPath.add (pt1);
                } else {
                    b1 = hatchLine.getY1 () - m1 * hatchLine.getX1 ();
                    b2 = segment.getY1 () - m2 * segment.getX1 ();
                    x = (b2 - b1) / (m1 - m2);
                    y = (m1 * x + b1);
                    pt2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (x, y);
                    ptsPath.add (pt2);
                }
            }
        }
        armyc2.c2sd.graphics2d.Area.reorderPointsByDistance (hatchLine, ptsPath);
        var pt = null;
        pts =  new java.util.ArrayList ();
        for (k = 0; k < ptsPath.size (); k++) {
            pt = ptsPath.get (k);
            if (k % 2 === 0) {
                pts.add ( new armyc2.c2sd.JavaLineArray.POINT2 (pt.getX (), pt.getY (), 0));
            } else {
                pts.add ( new armyc2.c2sd.JavaLineArray.POINT2 (pt.getX (), pt.getY (), 1));
            }
        }
        ptsPath.clear ();
    } catch (exc) {
        if (Clazz.instanceOf (exc)) {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (this._className, "getLineIntersectPoints",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside getLineIntersectPoints", exc));
        } else {
            throw exc;
        }
    }
    return pts;
};
armyc2.c2sd.graphics2d.Area._className="Area";
