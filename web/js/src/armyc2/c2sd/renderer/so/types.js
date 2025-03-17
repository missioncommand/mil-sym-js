var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.so = armyc2.c2sd.renderer.so || {};
/**
 * Support Objects
 * @type armyc2.c2sd.renderer.so
 */
armyc2.c2sd.renderer.so.ShapeTypes ={};
    
    armyc2.c2sd.renderer.so.ShapeTypes.RECTANGLE = "RECTANGLE";
    armyc2.c2sd.renderer.so.ShapeTypes.POINT = "POINT";
    armyc2.c2sd.renderer.so.ShapeTypes.ELLIPSE = "ELLIPSE";
    armyc2.c2sd.renderer.so.ShapeTypes.ROUNDED_RECTANGLE = "ROUNDED_RECTANGLE";
    armyc2.c2sd.renderer.so.ShapeTypes.LINE = "LINE";
    armyc2.c2sd.renderer.so.ShapeTypes.BCURVE = "BCURVE";
    armyc2.c2sd.renderer.so.ShapeTypes.ARC = "ARC";
    armyc2.c2sd.renderer.so.ShapeTypes.PATH = "PATH";

armyc2.c2sd.renderer.so.ActionTypes ={};
    armyc2.c2sd.renderer.so.ActionTypes.ACTION_MOVE_TO = 0;
    armyc2.c2sd.renderer.so.ActionTypes.ACTION_LINE_TO = 1;
    armyc2.c2sd.renderer.so.ActionTypes.ACTION_CURVE_TO = 2;//cubic bezier cirve
    armyc2.c2sd.renderer.so.ActionTypes.ACTION_QUAD_TO = 3;//quadratic bezier curve
    armyc2.c2sd.renderer.so.ActionTypes.ACTION_ARC_TO = 4;
    armyc2.c2sd.renderer.so.ActionTypes.ACTION_ARC = 5;
	armyc2.c2sd.renderer.so.ActionTypes.ACTION_DASHED_LINE_TO = 6;

   
