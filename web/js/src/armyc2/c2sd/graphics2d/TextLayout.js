var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.TextLayout = function() {
    var _font = null;
    var _str = "";
    if (arguments.length > 1)
    {
        _str = arguments[0];
        _font = arguments[1];
    }
    this.getOutline = function(tx) {
        return  new armyc2.c2sd.graphics2d.GeneralPath();
    };
    this.getPixelBounds = function(frc, x, y) {
        return null;
    };
    this.getBounds = function() {
        var width = Math.floor(_font.getSize() / 2) * _str.length;
        var height = _font.getSize();
        var rect = new armyc2.c2sd.graphics2d.Rectangle(0, 0, width, height);
        return rect;
    };
};