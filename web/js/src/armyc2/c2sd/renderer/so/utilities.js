var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.so = armyc2.c2sd.renderer.so || {};
armyc2.c2sd.renderer.so.utilities = armyc2.c2sd.renderer.so.utilities || {};

/**
* Returns an indicator of where the specified point 
* {@code (px,py)} lies with respect to the line segment from 
* {@code (x1,y1)} to {@code (x2,y2)}.
* The return value can be either 1, -1, or 0 and indicates
* in which direction the specified line must pivot around its
* first end point, {@code (x1,y1)}, in order to point at the
* specified point {@code (px,py)}.
* <p>A return value of 1 indicates that the line segment must
* turn in the direction that takes the positive X axis towards
* the negative Y axis.  In the default coordinate system used by
* Java 2D, this direction is counterclockwise.  
* <p>A return value of -1 indicates that the line segment must
* turn in the direction that takes the positive X axis towards
* the positive Y axis.  In the default coordinate system, this 
* direction is clockwise.
* <p>A return value of 0 indicates that the point lies
* exactly on the line segment.  Note that an indicator value 
* of 0 is rare and not useful for determining colinearity 
* because of floating point rounding issues. 
* <p>If the point is colinear with the line segment, but 
* not between the end points, then the value will be -1 if the point
* lies "beyond {@code (x1,y1)}" or 1 if the point lies 
* "beyond {@code (x2,y2)}".
*
* @param x1 the X coordinate of the start point of the
*           specified line segment
* @param y1 the Y coordinate of the start point of the
*           specified line segment
* @param x2 the X coordinate of the end point of the
*           specified line segment
* @param y2 the Y coordinate of the end point of the
*           specified line segment
* @param px the X coordinate of the specified point to be
*           compared with the specified line segment
* @param py the Y coordinate of the specified point to be
*           compared with the specified line segment
* @return an integer that indicates the position of the third specified
*			coordinates with respect to the line segment formed
*			by the first two specified coordinates.
* @since 1.2
*/
armyc2.c2sd.renderer.so.utilities.relativeCCW = function(x1, y1,  x2, y2,  px, py)
{
    x2 -= x1;
    y2 -= y1;
    px -= x1;
    py -= y1;
    var ccw = px * y2 - py * x2;
    if (ccw === 0.0) {
        // The point is colinear, classify based on which side of
        // the segment the point falls on.  We can calculate a
        // relative value using the projection of px,py onto the
        // segment - a negative value indicates the point projects
        // outside of the segment in the direction of the particular
        // endpoint used as the origin for the projection.
        ccw = px * x2 + py * y2;
        if (ccw > 0.0) {
            // Reverse the projection to be relative to the original x2,y2
            // x2 and y2 are simply negated.
            // px and py need to have (x2 - x1) or (y2 - y1) subtracted
            //    from them (based on the original values)
            // Since we really want to get a positive answer when the
            //    point is "beyond (x2,y2)", then we want to calculate
            //    the inverse anyway - thus we leave x2 & y2 negated.
            px -= x2;
            py -= y2;
            ccw = px * x2 + py * y2;
            if (ccw < 0.0) {
                ccw = 0.0;
            }
        }
    }
    return (ccw < 0.0) ? -1 : ((ccw > 0.0) ? 1 : 0);
};

/**
 * 
 * @param {Number} x1
 * @param {Number} y1
 * @param {Number} x2
 * @param {Number} y2
 * @param {Number} x3
 * @param {Number} y3
 * @param {Number} x4
 * @param {Number} y4
 * @returns {Boolean}
 */
armyc2.c2sd.renderer.so.utilities.linesIntersect = function(x1,y1,x2,y2,x3,y3,x4,y4)   
{
    var rCCW1 = this.relativeCCW(x1,y1,
                x2,y2,
                x3,y3),

        rCCW2 = this.relativeCCW(x1,y1,
                x2,y2,
                x4,y4),

        rCCW3 = this.relativeCCW(x3,y3,
                x4,y4,
                x1,y1),

        rCCW4 = this.relativeCCW(x3,y3,
                x4,y4,
                x2,y2);

    return (((rCCW1 * rCCW2) <= 0) && ((rCCW3 * rCCW4) <= 0));  
};

/**
* Intersects the pair of specified source <code>Rectangle</code>
* objects and puts the result into the specified destination
* <code>Rectangle</code> object.  One of the source rectangles
* can also be the destination to avoid creating a third Rectangle2D
* object, but in this case the original points of this source
* rectangle will be overwritten by this method. 
* @param src1 the first of a pair of <code>Rectangle</code> 
* objects to be intersected with each other
* @param src2 the second of a pair of <code>Rectangle</code>
* objects to be intersected with each other
* @return the <code>Rectangle</code> that holds the
* results of the intersection of <code>src1</code> and
* <code>src2</code>
* @since 1.2
*/    
armyc2.c2sd.renderer.so.utilities.intersectRects = function(src1,src2)
{
    var x1 = Math.max(src1.getMinX(), src2.getMinX()),
	y1 = Math.max(src1.getMinY(), src2.getMinY()),
	x2 = Math.min(src1.getMaxX(), src2.getMaxX()),
	y2 = Math.min(src1.getMaxY(), src2.getMaxY());
    
    return new armyc2.c2sd.renderer.so.Rectangle(x1, y1, x2-x1, y2-y1);
};

 /**
* Unions the pair of source <code>Rectangle</code> objects 
* and puts the result into the specified destination 
* <code>Rectangle</code> object.  One of the source rectangles
* can also be the destination to avoid creating a third Rectangle
* object, but in this case the original points of this source
* rectangle will be overwritten by this method.
* @param src1 the first of a pair of <code>Rectangle</code>
* objects to be combined with each other
* @param src2 the second of a pair of <code>Rectangle</code>
* objects to be combined with each other
* @return the <code>Rectangle</code> that holds the
* results of the union of <code>src1</code> and  
* <code>src2</code>
* @since 1.2
*/
armyc2.c2sd.renderer.so.utilities.unionRects = function(src1,src2)
{
    var x1 = Math.min(src1.getMinX(), src2.getMinX()),
        y1 = Math.min(src1.getMinY(), src2.getMinY()),
        x2 = Math.max(src1.getMaxX(), src2.getMaxX()),
        y2 = Math.max(src1.getMaxY(), src2.getMaxY());
    return new armyc2.c2sd.renderer.so.Rectangle(x1, y1, x2, y2);
};

if(typeof CanvasRenderingContext2D !== 'undefined' && CanvasRenderingContext2D.prototype.dashedLineTo !== 'undefined')
{	//public function from:
	//https://davidowens.wordpress.com/2010/09/07/html-5-canvas-dashed-lines/
	CanvasRenderingContext2D.prototype.dashedLineTo = function (fromX, fromY, toX, toY, pattern) 
	{
		// Our growth rate for our line can be one of the following:
		//   (+,+), (+,-), (-,+), (-,-)
		// Because of this, our algorithm needs to understand if the x-coord and
		// y-coord should be getting smaller or larger and properly cap the values
		// based on (x,y).
		var lt = function (a, b) { return a <= b; };
		var gt = function (a, b) { return a >= b; };
		var capmin = function (a, b) { return Math.min(a, b); };
		var capmax = function (a, b) { return Math.max(a, b); };

		var checkX = { thereYet: gt, cap: capmin };
		var checkY = { thereYet: gt, cap: capmin };

		if (fromY - toY > 0) {
			checkY.thereYet = lt;
			checkY.cap = capmax;
		}
		if (fromX - toX > 0) 
		{
			checkX.thereYet = lt;
			checkX.cap = capmax;
		}

		this.moveTo(fromX, fromY);
		var offsetX = fromX;
		var offsetY = fromY;
		var idx = 0, dash = true;
		while (!(checkX.thereYet(offsetX, toX) && checkY.thereYet(offsetY, toY))) 
		{
			var ang = Math.atan2(toY - fromY, toX - fromX);
			var len = pattern[idx];

			offsetX = checkX.cap(toX, offsetX + (Math.cos(ang) * len));
			offsetY = checkY.cap(toY, offsetY + (Math.sin(ang) * len));

			if (dash) this.lineTo(offsetX, offsetY);
			else this.moveTo(offsetX, offsetY);

			idx = (idx + 1) % pattern.length;
			dash = !dash;
		}
	};
}