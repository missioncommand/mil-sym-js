var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

/**
 * 
 * @param {String} basicSymbolID
 * @param {String} description
 * @param {Number} mappingP
 * @param {Number} mappingA
 * @param {Number} width
 * @param {Number} height
 * @returns {SinglePointLookupInfo}
 */
armyc2.c2sd.renderer.utilities.SinglePointLookupInfo = function (basicSymbolID, description, 
                            mappingP, mappingA,width,height){
    var _SymbolID = basicSymbolID,
        _Description = description,
        _mappingP = mappingP,
        _mappingA = mappingA,
        _width = width,
        _height = height;


    /**
    * 
    * @returns {String}
    */
   this.getBasicSymbolIDStrict = function(){
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
    * @returns {Number}
    */
   this.getMappingA = function(){
       return _mappingA;
   };
   /**
    * 
    * @returns {Number}
    */
   this.getMappingP = function(){
       return _mappingP;
   };
   /**
    * 
    * @returns {Number}
    */
   this.getWidth = function(){
       return _width;
   };
   /**
    * 
    * @returns {Number}
    */
   this.getHeight = function(){
       return _height;
   };
};