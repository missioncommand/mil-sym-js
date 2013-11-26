var armyc2=armyc2 || {};
armyc2.c2sd=armyc2.c2sd || {};
armyc2.c2sd.graphics2d=armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.QuadCurve2D=function(){
    }
//﻿Clazz.declarePackage ("armyc2.c2sd.graphics2d");
//Clazz.load (null, "armyc2.c2sd.graphics2d.QuadCurve2D", ["armyc2.c2sd.graphics2d.Line2D", "java.lang.InternalError"], function () {
//c$ = Clazz.declareType (armyc2.c2sd.graphics2d, "QuadCurve2D");
//c$.getFlatnessSq2 = Clazz.defineMethod (c$, "getFlatnessSq2", 
armyc2.c2sd.graphics2d.QuadCurve2D.getFlatnessSq2 = function (x1, y1, ctrlx, ctrly, x2, y2) {
    return armyc2.c2sd.graphics2d.Line2D.ptSegDistSq (x1, y1, x2, y2, ctrlx, ctrly);
};//, "~N,~N,~N,~N,~N,~N");
//c$.getFlatnessSq = Clazz.defineMethod (c$, "getFlatnessSq", 
armyc2.c2sd.graphics2d.QuadCurve2D.getFlatnessSq=function (coords, offset) {
    return armyc2.c2sd.graphics2d.Line2D.ptSegDistSq (coords[offset + 0], coords[offset + 1], coords[offset + 4], coords[offset + 5], coords[offset + 2], coords[offset + 3]);
};//, "~A,~N");
//c$.subdivide = Clazz.defineMethod (c$, "subdivide", 
armyc2.c2sd.graphics2d.QuadCurve2D.subdivide=function (src, srcoff, left, leftoff, right, rightoff) {
    var x1 = src[srcoff + 0];
    var y1 = src[srcoff + 1];
    var ctrlx = src[srcoff + 2];
    var ctrly = src[srcoff + 3];
    var x2 = src[srcoff + 4];
    var y2 = src[srcoff + 5];
    if (left != null) {
        left[leftoff + 0] = x1;
        left[leftoff + 1] = y1;
    }
    if (right != null) {
        right[rightoff + 4] = x2;
        right[rightoff + 5] = y2;
    }
    x1 = (x1 + ctrlx) / 2.0;
    y1 = (y1 + ctrly) / 2.0;
    x2 = (x2 + ctrlx) / 2.0;
    y2 = (y2 + ctrly) / 2.0;
    ctrlx = (x1 + x2) / 2.0;
    ctrly = (y1 + y2) / 2.0;
    if (left != null) {
        left[leftoff + 2] = x1;
        left[leftoff + 3] = y1;
        left[leftoff + 4] = ctrlx;
        left[leftoff + 5] = ctrly;
    }
    if (right != null) {
        right[rightoff + 0] = ctrlx;
        right[rightoff + 1] = ctrly;
        right[rightoff + 2] = x2;
        right[rightoff + 3] = y2;
    }
};//, "~A,~N,~A,~N,~A,~N");
//c$.solveQuadratic = Clazz.defineMethod (c$, "solveQuadratic", 
armyc2.c2sd.graphics2d.QuadCurve2D.solveQuadratic=function (eqn) {
    return armyc2.c2sd.graphics2d.QuadCurve2D.solveQuadratic2 (eqn, eqn);
};//, "~A");
//c$.solveQuadratic2 = Clazz.defineMethod (c$, "solveQuadratic2", 
armyc2.c2sd.graphics2d.QuadCurve2D.solveQuadratic2=function (eqn, res) {
    var a = eqn[2];
    var b = eqn[1];
    var c = eqn[0];
    var roots = 0;
    if (a == 0.0) {
        if (b == 0.0) {
            return -1;
        }
        res[roots++] = -c / b;
    } else {
        var d = b * b - 4.0 * a * c;
        if (d < 0.0) {
            return 0;
        }
        d = Math.sqrt (d);
        if (b < 0.0) {
            d = -d;
        }
        var q = (b + d) / -2.0;
        res[roots++] = q / a;
        if (q != 0.0) {
            res[roots++] = c / q;
        }
    }
    return roots;
};//, "~A,~A");
//    Clazz.defineMethod (c$, "clone", 
//        function () {
//            try {
//                return Clazz.superCall (this, armyc2.c2sd.graphics2d.QuadCurve2D, "clone", []);
//            } catch (e) {
//                if (Clazz.instanceOf (e, CloneNotSupportedException)) {
//                    throw  new InternalError ();
//                } else {
//                    throw e;
//                }
//            }
//        });
//    Clazz.defineStatics (c$,
//        "BELOW", -2,
//        "LOWEDGE", -1,
//        "INSIDE", 0,
//        "HIGHEDGE", 1,
//        "ABOVE", 2);
//});
armyc2.c2sd.graphics2d.QuadCurve2D.BELOW=-2;
armyc2.c2sd.graphics2d.QuadCurve2D.LOWEDGE=-1;
armyc2.c2sd.graphics2d.QuadCurve2D.INSIDE=0;
armyc2.c2sd.graphics2d.QuadCurve2D.HIGHEDGE=1;
armyc2.c2sd.graphics2d.QuadCurve2D.ABOVE=2;