var sec = sec || {};
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.EOWindOp = function()
{
    this.inside = false;
    this.newRow = function() {
        this.inside = false;
    };
    this.classify = function(e) {
        var newInside = !this.inside;
        this.inside = newInside;
        return (newInside ? 1 : -1);
    };
    this.getState = function() {
        return (this.inside ? 1 : -1);
    };
};
