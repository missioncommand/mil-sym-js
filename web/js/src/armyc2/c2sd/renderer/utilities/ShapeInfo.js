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
        _Polylines = null;

    //constructor code
    if(arguments.length === 2)
    {
        _shapeType = shapeType;
    }
    if(arguments.length >= 1)
    {
        _Shape = shape;
    }

    this.getShape = function()
    {
        return _Shape;
    };

    this.setShape = function(value)
    {
        _Shape = value;
    };

    this.setModifierString = function(value)
    {
        _ModifierString = value;
    };

    this.getModifierString = function()
    {
        return _ModifierString;
    };

    /**
     * @param {armyc2.c2sd.graphics2d.Point2D} value description
     */
    this.setModifierStringPosition = function(value)
    {
        _ModifierStringPosition = value;
    };
    
    /**
     * @return {armyc2.c2sd.graphics2d.Point2D} description
     */
    this.getModifierStringPosition = function()
    {
        return _ModifierStringPosition;
    };
    
    this.getGlyphPosition = function()
    {
        return _Position;
    };
    this.setGlyphPosition = function(value)
    {
        //alert('si');
        _Position = value;
    };
    
    /**
     * @param {Number} value description
     */
    this.setModifierStringAngle = function(value)
    {
        _ModifierStringAngle = value;
    };
    
    this.getModifierStringAngle = function()
    {
        return _ModifierStringAngle;
    };
    
    this.setTag = function(value)
    {
        _Tag = value;
    };    
    this.getTag = function()
    {
        return _Tag;
    };
    
    /**
     * @param {armyc2.c2sd.renderer.utilities.Color} value description
     */
    this.setLineColor = function(value)
    {
        lineColor = value;
    };
    this.getLineColor = function()
    {
        return lineColor;
    };
    
    /**
     * @param {armyc2.c2sd.renderer.utilities.Color} value description
     */
    this.setFillColor = function(value)
    {
        fillColor = value;
    };
    this.getFillColor = function()
    {
        return fillColor;
    };
    
    this.setAffineTransform = function(value)
    {
        affineTransform = value;
    };
    this.getAffineTransform = function()
    {
        return affineTransform;
    };
    
    this.setStroke = function(value)
    {
        stroke = value;
    };
    this.getStroke = function()
    {
        return stroke;
    };
    
    this.getTexturePaint = function()
    {
        return texturePaint;
    };
    this.setTexturePaint = function(value)
    {
        texturePaint = value;
    };
    
    this.setTextLayout = function(value)
    {
       _TextLayout = value;
    };
    this.getTextLayout = function()
    {
        return _TextLayout;
    };
    
    this.setShapeType = function(value)
    {
        _shapeType = value;
    };
    this.getShapeType = function()
    {
        return _shapeType;
    };
    
    /**
     * @param {Array} value Array of armyc2.c2sd.graphics2d.Point2D
     */
    this.setPolylines = function(value)
    {
        _Polylines = value;
    };
    /**
     * @return {Array} value Array of armyc2.c2sd.graphics2d.Point2D
     */
    this.getPolylines = function()
    {
        return _Polylines;
    };
    
    /**
     * @return {armyc2.c2sd.graphics2d.Rectangle} description
     */
    this.getBounds = function()
    {
        var temp = null;
        if (_Shape !== null) 
        {
            temp = this._Shape.getBounds();
            if (this._Shape instanceof armyc2.c2sd.graphics2d.GeneralPath) 
            {
                if (shapeType === armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_UNIT_OUTLINE) 
                {
                    if (lineColor !== null && stroke !== null) {
                        var bs = this.stroke;
                        if (bs !== null && bs.getLineWidth() > 2)
                            temp.grow(Math.floor(Math.round(bs.getLineWidth()) / 2), Math.floor(Math.round(bs.getLineWidth()) / 2));
                    }
                } 
                else 
                {
                    if (lineColor !== null && stroke !== null) 
                    {
                        var bs = stroke;
                        if (bs !== null && bs.getLineWidth() > 2)
                            temp.grow(Math.round(bs.getLineWidth()) - 1, Math.round(bs.getLineWidth()) - 1);
                    }
                }
            }
        }
        if (_TextLayout !== null && _Position !== null) {
            temp = _TextLayout.getPixelBounds(null, _Position.getX(), _Position.getY());
        } else if (_TextLayout !== null) {
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