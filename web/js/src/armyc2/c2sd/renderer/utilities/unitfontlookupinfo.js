var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

/**
 * 
 * @param {String} basicSymbolID
 * @param {String} description
 * @param {Number} mapping1U
 * @param {Number} mapping1F
 * @param {Number} mapping1N
 * @param {Number} mapping1H
 * @param {String} mapping1Color like "#0000FF" for blue
 * @param {Number} mapping2
 * @param {String} mapping2Color like "#FF0000" for red
 * @returns {undefined}
 */
armyc2.c2sd.renderer.utilities.UnitFontLookupInfo = function (basicSymbolID, description, 
                                    mapping1U, mapping1F,mapping1N, mapping1H,
                                    mapping1Color, mapping2, mapping2Color){
                                        
    var _SymbolID = basicSymbolID,
        _Description = description,
        _mapping1U = mapping1U,
        _mapping1F = mapping1F,
        _mapping1N = mapping1N,
        _mapping1H = mapping1H,
        _mapping1Color = mapping1Color,
        _mapping2 = mapping2,
        _mapping2Color = mapping2Color;

    /**
    * 
    * @returns {String}
    */
   this.getBasicSymbolID = function(){
       return _SymbolID;
   };
   /**
    * 
    * @returns {String}
    */
   this.getDescription = function(){
       return _Description;
   };
   /**
    * 
    * @param {String} symbolID
    * @returns {Number}
    */
   this.getMapping1 = function(symbolID){
         var affiliation = symbolID.charAt(1);
         if(affiliation === 'F' ||
                           affiliation === 'A' ||
                           affiliation === 'D' ||
                           affiliation === 'M' ||
                           affiliation === 'J' ||
                           affiliation === 'K')
             return _mapping1F;
         else if(affiliation === 'H' || affiliation === 'S')
             return _mapping1H;
         if(affiliation === 'N' || affiliation === 'L')
             return _mapping1N;
         else /*(affiliation == 'P' ||
                      affiliation == 'U' ||
                      affiliation == 'G' ||
                      affiliation == 'W')*/
            return _mapping1U;
   };
   /**
    * 
    * @returns {Number}
    */
   this.getMapping2 = function(){
       return _mapping2;
   };
   /**
    * 
    * @returns {String}
    */
   this.getColor1 = function(){
       return _mapping1Color;
   };
   /**
    * 
    * @returns {String}
    */
   this.getColor2 = function(){
       return _mapping2Color;
   };
};
