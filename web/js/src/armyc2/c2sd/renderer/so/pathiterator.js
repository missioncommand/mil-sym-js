var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.so = armyc2.c2sd.renderer.so || {};
/** @class */
armyc2.c2sd.renderer.so.PathIterator = function (actions) {

    //private vars
    
    
    //constructor code
    var arrActions = actions;
    var size = actions.length;
    var index = 0;
    
    //private functions
        
    //public vars/functions
    /**
     * Tests if the iteration is complete.
     * @return <code>true</code> if all the segments have 
     * been read; <code>false</code> otherwise.
     */
    this.isDone = function()
    {
        if(index === size)
            return true;
    };
    /**
     * Moves the iterator to the next segment of the path forwards
     * along the primary direction of traversal as long as there are
     * more points in that direction.
     */
    this.next = function()
    {
        index++;
    };
    /**
     * Returns the coordinates and type of the current path segment in
     * the iteration.
     * The return value is the path-segment type:
     * MOVE_TO, LINE_TO, QUAD_TO, CURVE_TO, or CLOSE.
     * A float array of length 6 must be passed in and can be used to
     * store the coordinates of the point(s).
     * Each point is stored as a pair of float x,y coordinates.
     * MOVE_TO and LINE_TO types returns one point,
     * QUAD_TO returns two points,
     * CURVE_TO returns 3 points.
     * ARC_TO
     * ARC
     * CLOSE will never get returned as it is replace with LINE_TO.
     * @return the path-segment where the first index is the segment type.
     * @see #armyc2.c2sd.renderer.so.ActionTypes
     */
    this.currentSegment();
    {
        return arrActions[index];
    }
    
};
