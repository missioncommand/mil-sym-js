var sec = sec || {};
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.Enumeration = function()
{
    this._vector = null;
    this.currentIndex = 0;
    var vector = arguments[0];
    this._vector = vector;
    this.nextElement = function() {
        if (this.currentIndex < this._vector.size())
            return this._vector.get(this.currentIndex++);
        else
            return null;
    };
    this.hasMoreElements = function() {
        if (this.currentIndex < this._vector.size())
            return true;
        else
            return false;
    };
};