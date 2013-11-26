var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

/**
 * 
 * @param {HTML5 Canvas} image
 * @param {SO.Point} centerPoint
 * @param {SO.Rectangle} symbolBounds
 * @param {SO.Rectangle} bounds
 * @returns {ImageInfo}
 */
armyc2.c2sd.renderer.utilities.ImageInfo = function (image, centerPoint, symbolBounds, bounds) {
    this._canvas = image;
    this._center = centerPoint;
    this._symbolBounds = symbolBounds;
    this._bounds = bounds;
};
    /**
     * 
     * @returns {String}
     */
    armyc2.c2sd.renderer.utilities.ImageInfo.prototype.toDataUrl = function(){
        return this._canvas.toDataURL();
    };
    /**
     * 
     * @returns {HTML5 canvas} HTML5 canvas
     */
    armyc2.c2sd.renderer.utilities.ImageInfo.prototype.getImage = function(){
        return this._canvas;
    };
    /**
     * 
     * @returns {armyc2.c2sd.renderer.so.Point}
     */
    armyc2.c2sd.renderer.utilities.ImageInfo.prototype.getCenterPoint = function(){
        return this._center;
    };
    /**
     * 
     * @returns {armyc2.c2sd.renderer.so.Rectangle}
     */
    armyc2.c2sd.renderer.utilities.ImageInfo.prototype.getSymbolBounds = function (){
        return this._symbolBounds;
    };
    /**
     * 
     * @returns {armyc2.c2sd.renderer.so.Rectangle}
     */
    armyc2.c2sd.renderer.utilities.ImageInfo.prototype.getImageBounds = function(){
        return this._bounds;
    };
