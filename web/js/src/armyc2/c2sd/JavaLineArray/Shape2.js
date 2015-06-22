var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray = armyc2.c2sd.JavaLineArray || {};
armyc2.c2sd.JavaLineArray.Shape2 = function()
{
    this.affineTransform = null;
    this._Shape = null;
    this.stroke = null;
    this.gp = null;
    this.texturePaint = null;
    this.shapeType = -1;
    this.lineColor = null;
    this.fillColor = null;
    this.lineWidth = 2;
    this._TextLayout = null;
    this._Position = null;
    this._ModifierString = null;
    this._ModifierStringPosition = null;
    this._ModifierStringAngle = 0;
    this._Polylines = null;
    this.style = 0;
    this._justify = 0,
    this.fillStyle = 0;
    if (arguments.length === 1)
    {
        this.shapeType = arguments[0];
        this._Shape = new armyc2.c2sd.graphics2d.GeneralPath();
        this.affineTransform = new armyc2.c2sd.graphics2d.AffineTransform();
        this.affineTransform.setToIdentity();
        var stroke1 = new armyc2.c2sd.graphics2d.BasicStroke();
        this.stroke = stroke1;
    }
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.set_Style = function(value) {
    this.style = value;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.set_Fillstyle = function(value) {
    this.fillStyle = value;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.get_FillStyle = function() {
    return this.fillStyle;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.get_Style = function() {
    return this.style;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.lineTo = function(pt) {
    //this._Shape.lineTo(Math.floor(pt.x), Math.floor(pt.y));
    this._Shape.lineTo(pt.x, pt.y);
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.moveTo = function(pt) {
    //this._Shape.moveTo(Math.floor(pt.x), Math.floor(pt.y));
    this._Shape.moveTo(pt.x, pt.y);
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getBounds = function() {
    var rectf = new android.graphics.RectF();
    if (this._Shape instanceof armyc2.c2sd.graphics2d.GeneralPath) {
        var path = this._Shape.getPath();
        path.computeBounds(rectf, true);
        var width = Math.floor(rectf.right) - Math.floor(rectf.left);
        var height = Math.floor(rectf.bottom) - Math.floor(rectf.top);
        var rect = new armyc2.c2sd.graphics2d.Rectangle(Math.floor(rectf.left), Math.floor(rectf.top), width, height);
        return rect;
    } else
        return null;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getShape = function() {
    return this._Shape;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setShape = function(value) {
    this._Shape = value;
    this._TextLayout = null;
};

armyc2.c2sd.JavaLineArray.Shape2.prototype.getTextJustify = function() {
    return this._justify;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setTextJustify = function(value) {
    this._justify = value;
};


armyc2.c2sd.JavaLineArray.Shape2.prototype.getTextLayout = function() {
    return this._TextLayout;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setTextLayout = function(value) {
    this._TextLayout = value;
    this._Shape = null;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setModifierString = function(value) {
    this._ModifierString = value;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getModifierString = function() {
    return this._ModifierString;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setModifierStringPosition = function(value) {
    this._ModifierStringPosition = value;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getModifierStringPosition = function() {
    return this._ModifierStringPosition;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setModifierStringAngle = function(value) {
    this._ModifierStringAngle = value;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getModifierStringAngle = function() {
    return this._ModifierStringAngle;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setLineColor = function(value) {
    this.lineColor = value;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getLineColor = function() {
    return this.lineColor;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setFillColor = function(value) {
    this.fillColor = value;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getFillColor = function() {
    return this.fillColor;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setGlyphPosition = function(position) {
    this._Position = new armyc2.c2sd.graphics2d.Point2D(position.x, position.y);
    this._ModifierStringPosition = new armyc2.c2sd.graphics2d.Point2D(position.x, position.y);
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setGlyphPosition = function(position) {
    this._Position = position;
    this._ModifierStringPosition = new armyc2.c2sd.graphics2d.Point2D(position.getX(), position.getY());
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getGlyphPosition = function() {
    return this._Position;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setAffineTransform = function(value) {
    this.affineTransform = value;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getAffineTransform = function() {
    return this.affineTransform;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getStroke = function() {
    return this.stroke;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getTexturePaint = function() {
    return this.texturePaint;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setTexturePaint = function(value) {
    this.texturePaint = value;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setStroke = function(s) {
    this.stroke = s;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setShapeType = function(value) {
    this.shapeType = value;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getShapeType = function() {
    return this.shapeType;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.getPolylines = function() {
    return this._Polylines;
};
armyc2.c2sd.JavaLineArray.Shape2.prototype.setPolylines = function(value) {
    this._Polylines = value;
};

armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE = 0;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL = 1;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_MODIFIER = 2;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_MODIFIER_FILL = 3;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_UNIT_FRAME = 4;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_UNIT_FILL = 5;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_UNIT_SYMBOL1 = 6;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_UNIT_SYMBOL2 = 7;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_UNIT_DISPLAY_MODIFIER = 8;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_UNIT_ECHELON = 9;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_UNIT_AFFILIATION_MODIFIER = 10;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_UNIT_HQ_STAFF = 11;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_TG_SP_FILL = 12;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_TG_SP_FRAME = 13;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_TG_Q_MODIFIER = 14;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_TG_SP_OUTLINE = 15;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_SINGLE_POINT_OUTLINE = 16;
armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_UNIT_OUTLINE = 17;


