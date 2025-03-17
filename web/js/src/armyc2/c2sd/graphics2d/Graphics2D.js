var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.Graphics2D = function() {
    var _fontRenderContext = null;
    var _font = new armyc2.c2sd.graphics2d.Font("arial", 10, 10);
    var _fontMetrics = new armyc2.c2sd.graphics2d.FontMetrics(_font);

    this.setFont = function(value) {
        _font = value;
        _fontMetrics = new armyc2.c2sd.graphics2d.FontMetrics(_font);
    };
    this.getfont = function() {
        return null;
    };
    this.setFontMetrics = function(value) {
        _fontMetrics = value;
    };
    this.getFontMetrics = function() {
        return _fontMetrics;
    };
    this.setColor = function(color) {
        return;
    };
    this.setBackground = function(color) {
        return;
    };
    this.setTransform = function(id) {
        return;
    };
    this.getTransform = function() {
        return null;
    };
    this.setStroke = function(stroke) {
        return;
    };
    this.drawLine = function(x1, y1, x2, y2) {
        return;
    };
    this.dispose = function() {
        return;
    };
    this.rotate = function(theta, x, y) {
        return;
    };
    this.clearRect = function(x, y, width, height) {
        return;
    };
    this.drtawString = function(s, x, y) {
        return;
    };
    this.getFontRenderContext = function() {
        return _fontRenderContext;
    };
};
