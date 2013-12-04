var android = android || {};
android.graphics = android.graphics || {};
android.graphics.Region = function() {
    var _gp = new java.awt.geom.GeneralPath();
    var _rect = null;
    if (arguments.length === 1)
    {
        var rect = arguments[0];
        _gp.moveTo(rect.x, rect.y);
        _gp.lineTo(rect.x + rect.width, rect.y);
        _gp.lineTo(rect.x + rect.width, rect.y + rect.height);
        _gp.lineTo(rect.x, rect.y + rect.height);
        _gp.lineTo(rect.x, rect.y);
        _rect = rect;
    }
    this.setPath = function(path, clipRegion) {
        return true;
    };
    this.contains = function(x, y) {
        return _gp.contains(x, y);
    };
    this.getBounds = function() {
        var rect = _gp.getBounds();
        return  new armyc2.c2sd.graphics2d.Rectangle(rect.x, rect.y, rect.width, rect.height);
    };
    this.op = function(region, op) {
        return false;
    };
};