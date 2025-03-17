var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

armyc2.c2sd.renderer.utilities.ShapeInfo = function(shape, shapeType)
{
    var _Shape = null,
        stroke = null,
        gp = null,
        fillStyle = null,
        texturePaint = null,
        _shapeType = -1,
        lineColor = null,
        fillColor = null,
        lineWidth = 2,
        affineTransform = null,
        _TextLayout = null,
        _Position = null,
        _ModifierString = null,
        _ModifierStringPosition = null,
        _ModifierStringAngle = 0,
        _Tag = null,
        //private int _justify=justify_left;
        _justify = armyc2.c2sd.renderer.utilities.ShapeInfo.justify_left,
        _Polylines = null;

    //constructor code
    if(shapeType)
    {
        _shapeType = shapeType;
    }
    if(shape)
    {
        _Shape = shape;
    }
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getShape = function()
{
    return this._Shape;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setShape = function(value)
{
    this._Shape = value;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setModifierString = function(value)
{
    this._ModifierString = value;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getModifierString = function()
{
    return this._ModifierString;
};

/**
 * @param {armyc2.c2sd.graphics2d.Point2D} value description
 */
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setModifierStringPosition = function(value)
{
    this._ModifierStringPosition = value;
};

/**
 * @return {armyc2.c2sd.graphics2d.Point2D} description
 */
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getModifierStringPosition = function()
{
    return this._ModifierStringPosition;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getGlyphPosition = function()
{
    return this._Position;
};
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setGlyphPosition = function(value)
{
    //alert('si');
    this._Position = value;
};

/**
 * @param {Number} value description
 */
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setModifierStringAngle = function(value)
{
    this._ModifierStringAngle = value;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getModifierStringAngle = function()
{
    return this._ModifierStringAngle;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setTag = function(value)
{
    this._Tag = value;
};    
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getTag = function()
{
    return this._Tag;
};

/**
 * @param {armyc2.c2sd.renderer.utilities.Color} value description
 */
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setLineColor = function(value)
{
    this.lineColor = value;
};
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getLineColor = function()
{
    return this.lineColor;
};

/**
 * @param {armyc2.c2sd.renderer.utilities.Color} value description
 */
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setFillColor = function(value)
{
    this.fillColor = value;
};
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getFillColor = function()
{
    return this.fillColor;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setAffineTransform = function(value)
{
    this.affineTransform = value;
};
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getAffineTransform = function()
{
    return this.affineTransform;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setStroke = function(value)
{
    this.stroke = value;
};
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getStroke = function()
{
    return this.stroke;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getTexturePaint = function()
{
    return this.texturePaint;
};
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setTexturePaint = function(value)
{
    this.texturePaint = value;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getFillStyle = function()
{
    return this.fillStyle;
};
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setFillStyle = function(value)
{
    this.fillStyle = value;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setTextLayout = function(value)
{
    this._TextLayout = value;
};
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getTextLayout = function()
{
    return this._TextLayout;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setShapeType = function(value)
{
    this._shapeType = value;
};
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getShapeType = function()
{
    return this._shapeType;
};

/**
 * @param {Array} value Array of armyc2.c2sd.graphics2d.Point2D
 */
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setPolylines = function(value)
{
    this._Polylines = value;
};
/**
 * @return {Array} value Array of armyc2.c2sd.graphics2d.Point2D
 */
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getPolylines = function()
{
    return this._Polylines;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.setTextJustify = function(value)
{
    this._justify = value;
};
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getTextJustify = function()
{
    return this._justify;
};

/**
 * @return {armyc2.c2sd.graphics2d.Rectangle} description
 */
armyc2.c2sd.renderer.utilities.ShapeInfo.prototype.getBounds = function()
{
    var temp = null;
    if (this._Shape !== null) 
    {
        temp = this._Shape.getBounds();
        if (this._Shape instanceof armyc2.c2sd.graphics2d.GeneralPath) 
        {
            if (shapeType === armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_OUTLINE) 
            {
                if (this.lineColor !== null && this.stroke !== null) {
                    var bs = this.stroke;
                    if (bs !== null && bs.getLineWidth() > 2)
                        temp.grow(Math.floor(Math.round(bs.getLineWidth()) / 2), Math.floor(Math.round(bs.getLineWidth()) / 2));
                }
            } 
            else 
            {
                if (lineColor !== null && stroke !== null) 
                {
                    var bs = this.stroke;
                    if (bs !== null && bs.getLineWidth() > 2)
                        temp.grow(Math.round(bs.getLineWidth()) - 1, Math.round(bs.getLineWidth()) - 1);
                }
            }
        }
    }
    if (this._TextLayout !== null && this._Position !== null) {
        temp = _TextLayout.getPixelBounds(null, this._Position.getX(), this._Position.getY());
    } else if (this._TextLayout !== null) {
        temp = new armyc2.c2sd.graphics2d.Rectangle(0, 0, 0, 0);
        temp.setRect(this._TextLayout.getBounds());
    } else
        return null;
    if (this.affineTransform !== null) {
        var sTemp = temp;
        sTemp = this.affineTransform.createTransformedShape(temp);
        temp = sTemp.getBounds();
    }
    return temp;
};

armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_POLYLINE = 0;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_FILL = 1;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_MODIFIER = 2;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_MODIFIER_FILL = 3;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_FRAME = 4;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_FILL = 5;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_SYMBOL1 = 6;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_SYMBOL2 = 7;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_DISPLAY_MODIFIER = 8;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_ECHELON = 9;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_AFFILIATION_MODIFIER = 10;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_HQ_STAFF = 11;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_TG_SP_FILL = 12;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_TG_SP_FRAME = 13;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_TG_Q_MODIFIER = 14;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_TG_SP_OUTLINE = 15;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_SINGLE_POINT_OUTLINE = 16;
armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_OUTLINE = 17;
    //public static int justify_left=0;
    //public static int justify_center=1;
    //public static int justify_right=2;
armyc2.c2sd.renderer.utilities.ShapeInfo.justify_left = 0;
armyc2.c2sd.renderer.utilities.ShapeInfo.justify_center = 1;
armyc2.c2sd.renderer.utilities.ShapeInfo.justify_right = 2;

armyc2.c2sd.renderer.utilities.ShapeInfoTextLayout = function(textLayout, position)
{
    var si = armyc2.c2sd.renderer.utilities.ShapeInfo();
    si.setTextLayout(textLayout);
    si.setGlyphPosition(position);
};

armyc2.c2sd.renderer.utilities.ShapeInfoGlyphVector = function(glyphVector, position)
{
    var si = armyc2.c2sd.renderer.utilities.ShapeInfo();
    //si.setGl
    si.setGlyphPosition(position);
};