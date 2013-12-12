var armyc2=armyc2 || {};
armyc2.c2sd=armyc2.c2sd || {};
armyc2.c2sd.graphics2d=armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.FlatteningPathIterator=function(){
    this.src = null;
    this.squareflat = 0;
    this.limit = 0;
    this.hold = null;
    this.curx = 0;
    this.cury = 0;
    this.movx = 0;
    this.movy = 0;
    this.holdType = 0;
    this.holdEnd = 0;
    this.holdIndex = 0;
    this.levels = null;
    this.levelIndex = 0;
    this.done = false;
    var limit;
    var src=arguments[0];
    var flatness=arguments[1];
    if(arguments.length===2)
        limit=10;
    if(arguments.length>2)
        limit=arguments[2];
    if (flatness < 0.0) {
        throw  new IllegalArgumentException ("flatness must be >= 0");
    }
    if (limit < 0) {
        throw  new IllegalArgumentException ("limit must be >= 0");
    }
    this.src = src;
    this.squareflat = flatness * flatness;
    this.limit = limit;
    this.levels =  Clazz.newArray (limit + 1, 0);
    this.hold =  Clazz.newArray (14, 0);
    armyc2.c2sd.graphics2d.FlatteningPathIterator.next2(this, false);
    this.getFlatness=function () {
        return Math.sqrt (this.squareflat);
    };
    this.getRecursionLimit=function () {
        return this.limit;
    };
    this.getWindingRule=function () {
        return this.src.getWindingRule ();
    };
    this.isDone=function () {
        return this.done;
    };
    this.ensureHoldCapacity=function (want) {
        if (this.holdIndex - want < 0) {
            var have = this.hold.length - this.holdIndex;
            var newsize = this.hold.length + 24;
            var newhold =  Clazz.newArray (newsize, 0);
            System.arraycopy (this.hold, this.holdIndex, newhold, this.holdIndex + 24, have);
            this.hold = newhold;
            this.holdIndex += 24;
            this.holdEnd += 24;
        }
    };
    this.next=function () {
        this.next2(true);
    };
    this.next2 = function (doNext) {
        var level;
        if (this.holdIndex >= this.holdEnd) {
            if (doNext) {
                this.src.next ();
            }
            if (this.src.isDone ()) {
                this.done = true;
                return ;
            }
            this.holdType = this.src.currentSegment (this.hold);
            this.levelIndex = 0;
            this.levels[0] = 0;
        }
        switch (this.holdType) {
            case 0:
            case 1:
                this.curx = this.hold[0];
                this.cury = this.hold[1];
                if (this.holdType === 0) {
                    this.movx = this.curx;
                    this.movy = this.cury;
                }
                this.holdIndex = 0;
                this.holdEnd = 0;
                break;
            case 4:
                this.curx = this.movx;
                this.cury = this.movy;
                this.holdIndex = 0;
                this.holdEnd = 0;
                break;
            case 2:
                if (this.holdIndex >= this.holdEnd) {
                    this.holdIndex = this.hold.length - 6;
                    this.holdEnd = this.hold.length - 2;
                    this.hold[this.holdIndex + 0] = this.curx;
                    this.hold[this.holdIndex + 1] = this.cury;
                    this.hold[this.holdIndex + 2] = this.hold[0];
                    this.hold[this.holdIndex + 3] = this.hold[1];
                    this.hold[this.holdIndex + 4] = this.curx = this.hold[2];
                    this.hold[this.holdIndex + 5] = this.cury = this.hold[3];
                }
                level = this.levels[this.levelIndex];
                while (level < this.limit) {
                    if (armyc2.c2sd.graphics2d.QuadCurve2D.getFlatnessSq (this.hold, this.holdIndex) < this.squareflat) {
                        break;
                    }
                    this.ensureHoldCapacity (4);
                    armyc2.c2sd.graphics2d.QuadCurve2D.subdivide (this.hold, this.holdIndex, this.hold, this.holdIndex - 4, this.hold, this.holdIndex);
                    this.holdIndex -= 4;
                    level++;
                    this.levels[this.levelIndex] = level;
                    this.levelIndex++;
                    this.levels[this.levelIndex] = level;
                }
                this.holdIndex += 4;
                this.levelIndex--;
                break;
            case 3:
                if (this.holdIndex >= this.holdEnd) {
                    this.holdIndex = this.hold.length - 8;
                    this.holdEnd = this.hold.length - 2;
                    this.hold[this.holdIndex + 0] = this.curx;
                    this.hold[this.holdIndex + 1] = this.cury;
                    this.hold[this.holdIndex + 2] = this.hold[0];
                    this.hold[this.holdIndex + 3] = this.hold[1];
                    this.hold[this.holdIndex + 4] = this.hold[2];
                    this.hold[this.holdIndex + 5] = this.hold[3];
                    this.hold[this.holdIndex + 6] = this.curx = this.hold[4];
                    this.hold[this.holdIndex + 7] = this.cury = this.hold[5];
                }
                level = this.levels[this.levelIndex];
                while (level < this.limit) 
                {
                    if (armyc2.c2sd.graphics2d.CubicCurve2D.getFlatnessSq (this.hold, this.holdIndex) < this.squareflat) 
                    {
                        break;
                    }
                    this.ensureHoldCapacity (6);
                    armyc2.c2sd.graphics2d.CubicCurve2D.subdivide (this.hold, this.holdIndex, this.hold, this.holdIndex - 6, this.hold, this.holdIndex);
                    this.holdIndex -= 6;
                    level++;
                    this.levels[this.levelIndex] = level;
                    this.levelIndex++;
                    this.levels[this.levelIndex] = level;
                }
                this.holdIndex += 6;
                this.levelIndex--;
                break;
        }
    };
    this.currentSegmentFlt=function (coords) {
        if (this.isDone ()) {
            System.out.println ("flattening iterator out of bounds");
            return -1;
        }
        var type = this.holdType;
        if (type !== 4) {
            coords[0] = this.hold[this.holdIndex + 0];
            coords[1] = this.hold[this.holdIndex + 1];
            if (type !== 0) {
                type = 1;
            }
        }
        return type;
    };
    this.currentSegment=function (coords) {
        if (this.isDone ()) {
            System.out.println ("flattening iterator out of bounds");
            return -1;
        }
        var type = this.holdType;
        if (type !== 4) {
            coords[0] = this.hold[this.holdIndex + 0];
            coords[1] = this.hold[this.holdIndex + 1];
            if (type !== 0) {
                type = 1;
            }
        }
        return type;
    };
};
armyc2.c2sd.graphics2d.FlatteningPathIterator.next2=function(that,doNext)
{
    var level;
    if (that.holdIndex >= that.holdEnd) {
        if (doNext) {
            that.src.next ();
        }
        if (that.src.isDone ()) {
            that.done = true;
            return ;
        }
        that.holdType = that.src.currentSegment (that.hold);
        that.levelIndex = 0;
        that.levels[0] = 0;
    }
    switch (that.holdType) {
        case 0:
        case 1:
            that.curx = that.hold[0];
            that.cury = that.hold[1];
            if (that.holdType === 0) {
                that.movx = that.curx;
                that.movy = that.cury;
            }
            that.holdIndex = 0;
            that.holdEnd = 0;
            break;
        case 4:
            that.curx = that.movx;
            that.cury = that.movy;
            that.holdIndex = 0;
            that.holdEnd = 0;
            break;
        case 2:
            if (that.holdIndex >= that.holdEnd) {
                that.holdIndex = that.hold.length - 6;
                that.holdEnd = that.hold.length - 2;
                that.hold[that.holdIndex + 0] = that.curx;
                that.hold[that.holdIndex + 1] = that.cury;
                that.hold[that.holdIndex + 2] = that.hold[0];
                that.hold[that.holdIndex + 3] = that.hold[1];
                that.hold[that.holdIndex + 4] = that.curx = that.hold[2];
                that.hold[that.holdIndex + 5] = that.cury = that.hold[3];
            }
            level = that.levels[that.levelIndex];
            while (level < that.limit) {
                if (armyc2.c2sd.graphics2d.QuadCurve2D.getFlatnessSq (that.hold, that.holdIndex) < that.squareflat) {
                    break;
                }
                that.ensureHoldCapacity (4);
                armyc2.c2sd.graphics2d.QuadCurve2D.subdivide (that.hold, that.holdIndex, that.hold, that.holdIndex - 4, that.hold, that.holdIndex);
                that.holdIndex -= 4;
                level++;
                that.levels[that.levelIndex] = level;
                that.levelIndex++;
                that.levels[that.levelIndex] = level;
            }
            that.holdIndex += 4;
            that.levelIndex--;
            break;
        case 3:
            if (that.holdIndex >= that.holdEnd) {
                that.holdIndex = that.hold.length - 8;
                that.holdEnd = that.hold.length - 2;
                that.hold[that.holdIndex + 0] = that.curx;
                that.hold[that.holdIndex + 1] = that.cury;
                that.hold[that.holdIndex + 2] = that.hold[0];
                that.hold[that.holdIndex + 3] = that.hold[1];
                that.hold[that.holdIndex + 4] = that.hold[2];
                that.hold[that.holdIndex + 5] = that.hold[3];
                that.hold[that.holdIndex + 6] = that.curx = that.hold[4];
                that.hold[that.holdIndex + 7] = that.cury = that.hold[5];
            }
            level = that.levels[that.levelIndex];
            while (level < that.limit) {
                if (armyc2.c2sd.graphics2d.CubicCurve2D.getFlatnessSq (that.hold, that.holdIndex) < that.squareflat) {
                    break;
                }
                that.ensureHoldCapacity (6);
                armyc2.c2sd.graphics2d.CubicCurve2D.subdivide (that.hold, that.holdIndex, that.hold, that.holdIndex - 6, that.hold, that.holdIndex);
                that.holdIndex -= 6;
                level++;
                that.levels[that.levelIndex] = level;
                that.levelIndex++;
                that.levels[that.levelIndex] = level;
            }
            that.holdIndex += 6;
            that.levelIndex--;
            break;
    }    
}
armyc2.c2sd.graphics2d.FlatteningPathIterator.GROW_SIZE=24;