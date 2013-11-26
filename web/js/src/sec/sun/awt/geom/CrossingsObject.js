var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.CrossingsObject=function()
{

    ////﻿Clazz.declarePackage ("sec.sun.awt.geom");
    //Clazz.load (["sec.sun.awt.geom.Vector"], "sec.sun.awt.geom.CrossingsObject", ["armyc2.c2sd.graphics2d.PathIterator", "sec.sun.awt.geom.Crossings", "$.Curve", "$.EvenOdd", "$.NonZero"], function () {
    //    c$ = Clazz.decorateAsClass (function () {
    this.limit = 0;
    this.yranges = null;
    this.xlo = 0;
    this.ylo = 0;
    this.xhi = 0;
    this.yhi = 0;
    this.crosscounts = null;
    this.evenOdd = null;
    this.crossings = null;
    this.nonZero = null;
    this.type = -1;
    this.tmp = null;
    //Clazz.instantialize (this, arguments);
    //}, sec.sun.awt.geom, "CrossingsObject");
    //Clazz.prepareFields (c$, function () {
    this.yranges =  Clazz.newArray (10, 0);
    this.tmp =  new sec.sun.awt.geom.Vector ();
    //});
    //Clazz.makeConstructor (c$, 
    //function (xlo, ylo, xhi, yhi, type) {
    var xlo=arguments[0];
    var ylo=arguments[1];
    var xhi=arguments[2];
    var yhi=arguments[3];
    var type=arguments[4];
    this.xlo = xlo;
    this.ylo = ylo;
    this.xhi = xhi;
    this.yhi = yhi;
    this.type = type;
    switch (type) {
        case 0:
            this.crossings =  new sec.sun.awt.geom.Crossings (xlo, ylo, xhi, yhi);
            break;
        case 1:
            this.nonZero =  new sec.sun.awt.geom.NonZero (xlo, ylo, xhi, yhi);
            this.crosscounts =  Clazz.newArray (Math.floor (this.yranges.length / 2), 0);
            break;
        case 2:
            this.evenOdd =  new sec.sun.awt.geom.EvenOdd (xlo, ylo, xhi, yhi);
            break;
    }
    //}, "~N,~N,~N,~N,~N");
    //Clazz.defineMethod (c$, "getXLo", 
    this.getXLo=function () {
        switch (this.type) {
            case 0:
                return this.crossings.getXLo ();
            case 2:
                return this.evenOdd.getXLo ();
            case 1:
                return this.nonZero.getXLo ();
            default:
                return -1;
        }
    };//);
    //Clazz.defineMethod (c$, "getYLo", 
    this.getYLo=function () {
        switch (this.type) {
            case 0:
                return this.crossings.getYLo ();
            case 2:
                return this.evenOdd.getYLo ();
            case 1:
                return this.nonZero.getYLo ();
            default:
                return -1;
        }
    };//);
    //Clazz.defineMethod (c$, "getXHi", 
    this.getXHi=function () {
        switch (this.type) {
            case 0:
                return this.crossings.getXHi ();
            case 2:
                return this.evenOdd.getXHi ();
            case 1:
                return this.nonZero.getXHi ();
            default:
                return -1;
        }
    };//);
    //Clazz.defineMethod (c$, "getYHi", 
    this.getYHi=function () {
        switch (this.type) {
            case 0:
                return this.crossings.getYHi ();
            case 2:
                return this.evenOdd.getYHi ();
            case 1:
                return this.nonZero.getYHi ();
            default:
                return -1;
        }
    };//);
    //Clazz.defineMethod (c$, "isEmpty", 
    this.isEmpty=function () {
        switch (this.type) {
            case 0:
                return this.crossings.isEmpty ();
            case 2:
                return this.evenOdd.isEmpty ();
            case 1:
                return this.nonZero.isEmpty ();
            default:
                return true;
        }
    };//);
    //Clazz.defineMethod (c$, "record", 
    this.record=function (ystart, yend, direction) {
        switch (this.type) {
            case 0:
                this.crossings.record (ystart, yend, direction);
            case 2:
                this.evenOdd.record (ystart, yend, direction);
            case 1:
                this.nonZero.record (ystart, yend, direction);
            default:
                return ;
        }
    };//, "~N,~N,~N");
    //c$.findCrossings = Clazz.defineMethod (c$, "findCrossings", 
    //Clazz.defineMethod (c$, "findCrossings2", 
//    this.findCrossings2=function (pi, xlo, ylo, xhi, yhi) {
//        var cross;
//        if (pi.getWindingRule () == pi.WIND_EVEN_ODD) {
//            cross =  new sec.sun.awt.geom.CrossingsObject (xlo, ylo, xhi, yhi, 2);
//        } else {
//            cross =  new sec.sun.awt.geom.CrossingsObject (xlo, ylo, xhi, yhi, 1);
//        }
//        var coords =  Clazz.newArray (23, 0);
//        var movx = 0;
//        var movy = 0;
//        var curx = 0;
//        var cury = 0;
//        var newx;
//        var newy;
//        while (!pi.isDone ()) {
//            var type = pi.currentSegment (coords);
//            switch (type) {
//                case 0:
//                    if (movy != cury && cross.accumulateLine (curx, cury, movx, movy)) {
//                        return null;
//                    }
//                    movx = curx = coords[0];
//                    movy = cury = coords[1];
//                    break;
//                case 1:
//                    newx = coords[0];
//                    newy = coords[1];
//                    if (cross.accumulateLine (curx, cury, newx, newy)) {
//                        return null;
//                    }
//                    curx = newx;
//                    cury = newy;
//                    break;
//                case 2:
//                    newx = coords[2];
//                    newy = coords[3];
//                    if (cross.accumulateQuad (curx, cury, coords)) {
//                        return null;
//                    }
//                    curx = newx;
//                    cury = newy;
//                    break;
//                case 3:
//                    newx = coords[4];
//                    newy = coords[5];
//                    if (cross.accumulateCubic (curx, cury, coords)) {
//                        return null;
//                    }
//                    curx = newx;
//                    cury = newy;
//                    break;
//                case 4:
//                    if (movy != cury && cross.accumulateLine (curx, cury, movx, movy)) {
//                        return null;
//                    }
//                    curx = movx;
//                    cury = movy;
//                    break;
//            }
//            pi.next ();
//        }
//        if (movy != cury) {
//            if (cross.accumulateLine (curx, cury, movx, movy)) {
//                return null;
//            }
//        }
//        return cross;
//    };//, "armyc2.c2sd.graphics2d.PathIterator,~N,~N,~N,~N");
    //Clazz.defineMethod (c$, "accumulateLine", 
    this.accumulateLine=function (x0, y0, x1, y1) {
        switch (this.type) {
            case 0:
                return this.crossings.accumulateLine (x0, y0, x1, y1);
            case 2:
                return this.evenOdd.accumulateLine (x0, y0, x1, y1);
            case 1:
                return this.nonZero.accumulateLine (x0, y0, x1, y1);
            default:
                return false;
        }
    };//, "~N,~N,~N,~N");
    //Clazz.defineMethod (c$, "accumulateLine2", 
//    this.accumulateLine2=function (x0, y0, x1, y1, direction) {
//        switch (this.type) {
//            case 0:
//                return this.crossings.accumulateLine2 (x0, y0, x1, y1, direction);
//            case 2:
//                return this.evenOdd.accumulateLine2 (x0, y0, x1, y1, direction);
//            case 1:
//                return this.nonZero.accumulateLine2 (x0, y0, x1, y1, direction);
//            default:
//                return false;
//        }
//    };//, "~N,~N,~N,~N,~N");
    //Clazz.defineMethod (c$, "accumulateQuad", 
    this.accumulateQuad=function (x0, y0, coords) {
        if (y0 < this.ylo && coords[1] < this.ylo && coords[3] < this.ylo) {
            return false;
        }
        if (y0 > this.yhi && coords[1] > this.yhi && coords[3] > this.yhi) {
            return false;
        }
        if (x0 > this.xhi && coords[0] > this.xhi && coords[2] > this.xhi) {
            return false;
        }
        if (x0 < this.xlo && coords[0] < this.xlo && coords[2] < this.xlo) {
            if (y0 < coords[3]) {
                this.record (Math.max (y0, this.ylo), Math.min (coords[3], this.yhi), 1);
            } else if (y0 > coords[3]) {
                this.record (Math.max (coords[3], this.ylo), Math.min (y0, this.yhi), -1);
            }
            return false;
        }
        sec.sun.awt.geom.Curve.insertQuad (this.tmp, x0, y0, coords);
        var enum_ = this.tmp.elements ();
        while (enum_.hasMoreElements ()) {
            var c = enum_.nextElement ();
            if (c.accumulateCrossings (this)) {
                return true;
            }
        }
        this.tmp.clear ();
        return false;
    };//, "~N,~N,~A");
    //Clazz.defineMethod (c$, "accumulateCubic", 
    this.accumulateCubic=function (x0, y0, coords) {
        if (y0 < this.ylo && coords[1] < this.ylo && coords[3] < this.ylo && coords[5] < this.ylo) {
            return false;
        }
        if (y0 > this.yhi && coords[1] > this.yhi && coords[3] > this.yhi && coords[5] > this.yhi) {
            return false;
        }
        if (x0 > this.xhi && coords[0] > this.xhi && coords[2] > this.xhi && coords[4] > this.xhi) {
            return false;
        }
        if (x0 < this.xlo && coords[0] < this.xlo && coords[2] < this.xlo && coords[4] < this.xlo) {
            if (y0 <= coords[5]) {
                this.record (Math.max (y0, this.ylo), Math.min (coords[5], this.yhi), 1);
            } else {
                this.record (Math.max (coords[5], this.ylo), Math.min (y0, this.yhi), -1);
            }
            return false;
        }
        sec.sun.awt.geom.Curve.insertCubic (this.tmp, x0, y0, coords);
        var enum_ = this.tmp.elements ();
        while (enum_.hasMoreElements ()) {
            var c = enum_.nextElement ();
            if (c.accumulateCrossings (this)) {
                return true;
            }
        }
        this.tmp.clear ();
        return false;
    };//, "~N,~N,~A");
//    Clazz.defineStatics (c$,
//        "CROSSINGS", 0,
//        "NONZERO", 1,
//        "EVENODD", 2,
//        "debug", false);
//});

};
sec.sun.awt.geom.CrossingsObject.CROSSINGS=0;
sec.sun.awt.geom.CrossingsObject.NONZERO=1;
sec.sun.awt.geom.CrossingsObject.EVENODD=2;
sec.sun.awt.geom.CrossingsObject.debug=false;
sec.sun.awt.geom.CrossingsObject.findCrossings=function (curves, xlo, ylo, xhi, yhi) {
    var cross =  new sec.sun.awt.geom.CrossingsObject (xlo, ylo, xhi, yhi, 2);
    var enum_ = curves.elements ();
    while (enum_.hasMoreElements ()) {
        var c = enum_.nextElement ();
        if (c.accumulateCrossings (cross)) {
            return null;
        }
    }
    return cross;
};//, "sec.sun.awt.geom.Vector,~N,~N,~N,~N");
