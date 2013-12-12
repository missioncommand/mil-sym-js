var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.NonZero=function()
{
    this.limit = 0;
    this.yranges = null;
    this.xlo = 0;
    this.ylo = 0;
    this.xhi = 0;
    this.yhi = 0;
    this.crosscounts = null;
    this.yranges =  Clazz.newArray (10, 0);
    var xlo=arguments[0];
    var ylo=arguments[1];
    var xhi=arguments[2];
    var yhi=arguments[3];
        
    this.xlo = xlo;
    this.ylo = ylo;
    this.xhi = xhi;
    this.yhi = yhi;
    this.crosscounts =  Clazz.newArray (Math.floor (this.yranges.length / 2), 0);
    this.covers=function (ystart, yend) {
        var i = 0;
        while (i < this.limit) {
            var ylo = this.yranges[i++];
            var yhi = this.yranges[i++];
            if (ystart >= yhi) {
                continue ;
            }
            if (ystart < ylo) {
                return false;
            }
            if (yend <= yhi) {
                return true;
            }
            ystart = yhi;
        }
        return (ystart >= yend);
    };
    this.remove=function (cur) {
        this.limit -= 2;
        var rem = this.limit - cur;
        if (rem > 0) {
            System.arraycopy (this.yranges, cur + 2, this.yranges, cur, rem);
            System.arraycopy (this.crosscounts, Math.floor (cur / 2) + 1, this.crosscounts, Math.floor (cur / 2), Math.floor (rem / 2));
        }
    };
    this.insert=function (cur, lo, hi, dir) {
        var rem = this.limit - cur;
        var oldranges = this.yranges;
        var oldcounts = this.crosscounts;
        if (this.limit >= this.yranges.length) {
            this.yranges =  Clazz.newArray (this.limit + 10, 0);
            System.arraycopy (oldranges, 0, this.yranges, 0, cur);
            this.crosscounts =  Clazz.newArray (Math.floor ((this.limit + 10) / 2), 0);
            System.arraycopy (oldcounts, 0, this.crosscounts, 0, Math.floor (cur / 2));
        }
        if (rem > 0) {
            System.arraycopy (oldranges, cur, this.yranges, cur + 2, rem);
            System.arraycopy (oldcounts, Math.floor (cur / 2), this.crosscounts, Math.floor (cur / 2) + 1, Math.floor (rem / 2));
        }
        this.yranges[cur + 0] = lo;
        this.yranges[cur + 1] = hi;
        this.crosscounts[Math.floor (cur / 2)] = dir;
        this.limit += 2;
    };
    this.record=function (ystart, yend, direction) {
        if (ystart >= yend) {
            return ;
        }
        var cur = 0;
        while (cur < this.limit && ystart > this.yranges[cur + 1]) {
            cur += 2;
        }
        if (cur < this.limit) {
            var rdir = this.crosscounts[Math.floor (cur / 2)];
            var yrlo = this.yranges[cur + 0];
            var yrhi = this.yranges[cur + 1];
            if (yrhi === ystart && rdir === direction) {
                if (cur + 2 === this.limit) {
                    this.yranges[cur + 1] = yend;
                    return ;
                }
                this.remove (cur);
                ystart = yrlo;
                rdir = this.crosscounts[Math.floor (cur / 2)];
                yrlo = this.yranges[cur + 0];
                yrhi = this.yranges[cur + 1];
            }
            if (yend < yrlo) {
                this.insert (cur, ystart, yend, direction);
                return ;
            }
            if (yend === yrlo && rdir === direction) {
                this.yranges[cur] = ystart;
                return ;
            }
            if (ystart < yrlo) {
                this.insert (cur, ystart, yrlo, direction);
                cur += 2;
                ystart = yrlo;
            } else if (yrlo < ystart) {
                this.insert (cur, yrlo, ystart, rdir);
                cur += 2;
                yrlo = ystart;
            }
            var newdir = rdir + direction;
            var newend = Math.min (yend, yrhi);
            if (newdir === 0) {
                this.remove (cur);
            } else {
                this.crosscounts[Math.floor (cur / 2)] = newdir;
                this.yranges[cur++] = ystart;
                this.yranges[cur++] = newend;
            }
            ystart = yrlo = newend;
            if (yrlo < yrhi) {
                this.insert (cur, yrlo, yrhi, rdir);
            }
        }
        if (ystart < yend) {
            this.insert (cur, ystart, yend, direction);
        }
    };
    this.getXLo=function () {
        return this.xlo;
    };
    this.getYLo=function () {
        return this.ylo;
    };
    this.getXHi=function () {
        return this.xhi;
    };
    this.getYHi=function () {
        return this.yhi;
    };
    this.isEmpty=function () {
        return (this.limit === 0);
    };
    this.accumulateLine=function (x0, y0, x1, y1) {
        if (y0 <= y1) {
            return this.accumulateLine2 (x0, y0, x1, y1, 1);
        } else {
            return this.accumulateLine2 (x1, y1, x0, y0, -1);
        }
    };
    this.accumulateLine2=function (x0, y0, x1, y1, direction) {
        if (this.yhi <= y0 || this.ylo >= y1) {
            return false;
        }
        if (x0 >= this.xhi && x1 >= this.xhi) {
            return false;
        }
        if (y0 === y1) {
            return (x0 >= this.xlo || x1 >= this.xlo);
        }
        var xstart;
        var ystart;
        var xend;
        var yend;
        var dx = (x1 - x0);
        var dy = (y1 - y0);
        if (y0 < this.ylo) {
            xstart = x0 + (this.ylo - y0) * dx / dy;
            ystart = this.ylo;
        } else {
            xstart = x0;
            ystart = y0;
        }
        if (this.yhi < y1) {
            xend = x0 + (this.yhi - y0) * dx / dy;
            yend = this.yhi;
        } else {
            xend = x1;
            yend = y1;
        }
        if (xstart >= this.xhi && xend >= this.xhi) {
            return false;
        }
        if (xstart > this.xlo || xend > this.xlo) {
            return true;
        }
        this.record (ystart, yend, direction);
        return false;
    };
};
sec.sun.awt.geom.NonZero.debug=false;