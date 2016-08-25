var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

/**
 * 
 * @param {String} image
 * @param {SO.Point} centerPoint
 * @param {SO.Rectangle} symbolBounds
 * @param {SO.Rectangle} bounds
 * @returns {ImageInfo}
 */
armyc2.c2sd.renderer.utilities.SVGInfo = function (svg, centerPoint, symbolBounds, bounds) {
    this._svg = svg;
    this._svgDataURI = null;
    this._center = centerPoint;
    this._symbolBounds = symbolBounds;
    this._bounds = bounds;
};

    /**
     * 
     * @returns {String} 
     */
    armyc2.c2sd.renderer.utilities.SVGInfo.prototype.getSVG = function(){
        return this._svg;
    };
    
    armyc2.c2sd.renderer.utilities.SVGInfo.prototype.getSVGDataURI = function(save){
        if(this._svgDataURI)
            return this._svgDataURI;
        else
        {
            /*var uri = this._svg.replace(/#/g,"%23");//# to %23 for FF
            uri = uri.replace(/"/g,"%22"); //" to %22 for EDGE, IE wont take SVG from a datauri
            uri = uri.replace(/,/g,"%2C");
            uri = uri.replace(/\./g,"%2E");//*/
            
            var uri;
            if(encodeURIComponent)
            {
                uri = encodeURIComponent(this._svg);
                uri = "data:image/svg+xml," + uri;
            }
            else//*/
             if(btoa)
            {
                uri = btoa(this._svg);
                uri = "data:image/svg+xml;base64," + uri;
            }
            else
            {
                uri = this._svg.replace(/#/g,"%23");//# to %23 for FF
                uri = uri.replace(/"/g,"%22"); //" to %22 for EDGE, IE wont take SVG from a datauri
                uri = uri.replace(/,/g,"%2C");
                uri = uri.replace(/\./g,"%2E");
                uri = "data:image/svg+xml," + uri;
            }
            //chrome doesn't seem to need any changes.
            
            if(save)
                this._svgDataURI = uri;
            return uri;
            
            //return  "data:image/svg+xml," + this._svg;//this._svg.replace(/#/g,"%23")
        }
                
    };
    
    /**
     * 
     * @returns {armyc2.c2sd.renderer.so.Point}
     */
    armyc2.c2sd.renderer.utilities.SVGInfo.prototype.getAnchorPoint = function(){
        return this._center;
    };
    /**
     * 
     * @returns {armyc2.c2sd.renderer.so.Rectangle}
     */
    armyc2.c2sd.renderer.utilities.SVGInfo.prototype.getSymbolBounds = function (){
        return this._symbolBounds;
    };
    /**
     * 
     * @returns {armyc2.c2sd.renderer.so.Rectangle}
     */
    armyc2.c2sd.renderer.utilities.SVGInfo.prototype.getSVGBounds = function(){
        return this._bounds;
    };
    
