var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.UnitFontLookup = (function () {

//UNKNOWN FILL Indexes
  var FillIndexUZ = 800,//Unknown
  FillIndexUP = 849,//Space
  FillIndexUA = 825,//Air
  FillIndexUG = 800,//Ground
  FillIndexUGE = 800,//Ground Equipment
  FillIndexUS = 800,//Sea Surface
  FillIndexUU = 837,//Subsurface
  FillIndexUF = 800,//SOF
   //FRIENDLY FILL Indexes
  FillIndexFZ = 812,
  FillIndexFP = 843,
  FillIndexFA = 819,
  FillIndexFG = 803,
  FillIndexFGE = 812,
  FillIndexFS = 812,
  FillIndexFU = 831,
  FillIndexFF = 803,
   //NEUTRAL FILL Indexes
  FillIndexNZ = 809,
  FillIndexNP = 846,
  FillIndexNA = 822,
  FillIndexNG = 809,
  FillIndexNGE = 809,
  FillIndexNS = 809,
  FillIndexNU = 834,
  FillIndexNF = 809,
   //HOSTILE FILL Indexes
  FillIndexHZ = 806,
  FillIndexHP = 840,
  FillIndexHA = 816,
  FillIndexHG = 806,
  FillIndexHGE = 806,
  FillIndexHS = 806,
  FillIndexHU = 828,
  FillIndexHF = 806;
  
  //imports
    var SymbolUtilities = armyc2.c2sd.renderer.utilities.SymbolUtilities,
        RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings;

    var symbolMapB = null,
        symbolMapC = null,
        symbolsLoaded = false;


    return {

        
        /**
         * 
         * @returns {undefined}
         */
        init: function ()
        {
            var i,
            symbols = null,
            data = null,
            symbol = null,
            count;
            
            //symbolDefTable
            if(symbolMapB===null && armyc2.c2sd.renderer.xml.UnitFontMappingsB !== undefined)
            {
                symbols = armyc2.c2sd.renderer.xml.UnitFontMappingsB.UNITFONTMAPPINGS.SYMBOL;
                armyc2.c2sd.renderer.xml.UnitFontMappingsB = null;
                symbolMapB = {};
                this.parser = null;
                count = symbols.length;
                for (i = 0; i < count; i += 1) {
                    symbol = symbols[i];
                    //Firefox and IE parsers handle things differently
                    if (symbol !== null) {

                        data = {};
                        data.symbolID = symbol["ID"] || ""; //SYMBOLID
                        data.description = "";//symbol["D"] || ""; //DESCRIPTION
                        data.mapping1U = symbol["M1U"] || null; //MAPPING1U
                        data.mapping1F = symbol["M1F"] || null; //MAPPING1F
                        data.mapping1N = symbol["M1N"] || null; //MAPPING1N
                        data.mapping1H = symbol["M1H"] || null; //MAPPING1H
                        data.mapping1color = symbol["M1C"] || "#000000"; //MAPPING1COLOR
                        data.mapping2 = symbol["M2"] || null; //MAPPING2
                        data.mapping2color = symbol["M2C"] || null; //MAPPING2COLOR
                        
                        
                        if(data.mapping1color !== null && data.mapping1color.length === 6)
                            data.mapping1color = "#" + data.mapping1color;
                        
                        if(data.mapping2color !== null && data.mapping2color.length === 6)
                            data.mapping2color = "#" + data.mapping2color;
						
						 //Check for bad font locations and remap
						  data.mapping1U = this.checkMappingIndex(data.mapping1U);
						  data.mapping1F = this.checkMappingIndex(data.mapping1F);
						  data.mapping1N = this.checkMappingIndex(data.mapping1N);
						  data.mapping1H = this.checkMappingIndex(data.mapping1H);
						  data.mapping2 = this.checkMappingIndex(data.mapping2);
						  ////////////////////////////////////////

                    } 
                    if((symbolMapB[data.symbolID])===undefined)
                    {
                        var ufli = new armyc2.c2sd.renderer.utilities.UnitFontLookupInfo(data.symbolID,
                                    data.description,data.mapping1U,data.mapping1F,
                                    data.mapping1N,data.mapping1H,
                                    data.mapping1color, data.mapping2,
                                    data.mapping2color);
                        symbolMapB[data.symbolID] = ufli;
                    }
                }
            }
            
            if(symbolMapC===null && armyc2.c2sd.renderer.xml.UnitFontMappingsC !== undefined)
            {
                symbols = armyc2.c2sd.renderer.xml.UnitFontMappingsC.UNITFONTMAPPINGS.SYMBOL;
                armyc2.c2sd.renderer.xml.UnitFontMappingsC = null;
                symbolMapC = {};
                this.parser = null;
                count = symbols.length;
                for (i = 0; i < count; i += 1) {
                    symbol = symbols[i];
                    //Firefox and IE parsers handle things differently
                    if (symbol !== null) {

                        data = {};
                        data.symbolID = symbol["ID"] || ""; //SYMBOLID
                        data.description = "";//symbol["D"] || ""; //DESCRIPTION
                        data.mapping1U = symbol["M1U"] || null; //MAPPING1U
                        data.mapping1F = symbol["M1F"] || null; //MAPPING1F
                        data.mapping1N = symbol["M1N"] || null; //MAPPING1N
                        data.mapping1H = symbol["M1H"] || null; //MAPPING1H
                        data.mapping1color = symbol["M1C"] || "#000000"; //MAPPING1COLOR
                        data.mapping2 = symbol["M2"] || null; //MAPPING2
                        data.mapping2color = symbol["M2C"] || null; //MAPPING2COLOR
                        
                        
                        if(data.mapping1color !== null && data.mapping1color.length === 6)
                            data.mapping1color = "#" + data.mapping1color;
                        
                        if(data.mapping2color !== null && data.mapping2color.length === 6)
                            data.mapping2color = "#" + data.mapping2color;
						
						//Check for bad font locations and remap
						  data.mapping1U = this.checkMappingIndex(data.mapping1U);
						  data.mapping1F = this.checkMappingIndex(data.mapping1F);
						  data.mapping1N = this.checkMappingIndex(data.mapping1N);
						  data.mapping1H = this.checkMappingIndex(data.mapping1H);
						  data.mapping2 = this.checkMappingIndex(data.mapping2);
						  ////////////////////////////////////////

                    } 
                    if((symbolMapC[data.symbolID])===undefined)
                    {
                        var ufli = new armyc2.c2sd.renderer.utilities.UnitFontLookupInfo(data.symbolID,
                                    data.description,data.mapping1U,data.mapping1F,
                                    data.mapping1N,data.mapping1H,
                                    data.mapping1color, data.mapping2,
                                    data.mapping2color);
                        symbolMapC[data.symbolID] = ufli;
                    }
                }
            }
            if(symbolMapB !== null || symbolMapC !== null)
                symbolsLoaded = true;
        },
		
	   /**
	    * Until XML files are updated, we need to shift the index
	    * @param index
	    * @return 
	    */  
		checkMappingIndex: function (index)
		{
			var i = -1;
			if(index)
			{
				i = parseInt(index);

				if(i < 9000)
				  return (i + 57000);
				else
				  return (i + 54000);
			}
			else
				return index;
		  
		},
        /**
         * 
         * @param {String} symbolID
         * @param {Number} symStd 0=2525B, 1=2525C
         * @returns {unitFontLookupInfo} has symbolID, description, mapping1U, mapping1F,
         * mapping1N, mapping1H, mapping1color, mapping2, mapping2color
         */
        getUnitLookup: function (symbolID, symStd) {
            
            if(symStd === undefined)
                symStd = RendererSettings.getSymbologyStandard();
            var map = null;
            
            if(symStd === RendererSettings.Symbology_2525B)
                map = symbolMapB;
            else
                map = symbolMapC;
            
            if(map[symbolID] !== undefined)
            {
                return map[symbolID];
            }
            else
            {
                return null;
            }
            
        },
        /**
         * 
         * @param {String} symbolID
         * @returns {Boolean}
         */
        hasUnitLookup: function (symbolID, symStd) {
            
            if(symStd === undefined)
                symStd = RendererSettings.getSymbologyStandard();
            var map = null;
            
            if(symStd === RendererSettings.Symbology_2525B)
                map = symbolMapB;
            else
                map = symbolMapC;
            
            if(map[symbolID] !== undefined)
            {
                return true;
            }
            else
            {
                return false;
            }
            
        },
        /**
         * we only have font lookups for F,H,N,U.  But the shapes match one of these
         * four for the remaining affiliations.  So we convert the string to a base
         * affiliation before we do the lookup.
         * @param {String} symbolID
         * @returns {String}
         */        
        resolveAffiliation: function (symbolID) {
            var code = symbolID.substring(0);
            var affiliation = symbolID.charAt(1);

            if(affiliation === "F" ||//friendly
                    affiliation === "H" ||//hostile
                    affiliation === "U" ||//unknown
                    affiliation === "N" )//neutral
                return code;
            else if(affiliation === "S")//suspect
                code = code.charAt(0) + "H" + code.substring(2, 15);
            else if(affiliation === "L")//exercise neutral
                code = code.charAt(0) + "N" + code.substring(2, 15);
            else if(affiliation === "A" ||//assumed friend
                    affiliation === "D" ||//exercise friend
                    affiliation === "M" ||//exercise assumed friend
                    affiliation === "K" ||//faker
                    affiliation === "J")//joker
                code = code.charAt(0) + "F" + code.substring(2, 15);
            else if(affiliation === "P" ||//pending
                    affiliation === "G" ||//exercise pending
                    affiliation === "O" ||//? brought it over from mitch's code
                    affiliation === "W")//exercise unknown
                code = code.charAt(0) + "U" + code.substring(2, 15);
            else
                code = code.charAt(0) + "U" + code.substring(2, 15);

            return code;
        },
        /**
         * 2525C
         * returns the character index for the fill frame based on the symbol code.
         * @param {String} SymbolID
         * @returns {Number}
         */
        getFillCode: function (SymbolID, symStd){
            
            var returnVal = -1,
            scheme = "",
            battleDimension = "",
            status = "",
            affiliation = "",
            grdtrkSubset = "";
    
            if(SymbolID !== null && SymbolID.length >= 10)
          {
              scheme = SymbolID.charAt(0);//S,O,E,I,etc...
              affiliation = SymbolID.charAt(1);//F,H,N,U,etc...
              battleDimension = SymbolID.charAt(2);//P,A,G,S,U,F,X,Z
              status = SymbolID.charAt(3);//A,P,C,D,X,F
              grdtrkSubset = SymbolID.charAt(4);
              
              if(symStd === undefined)
                {
                    symStd = RendererSettings.getSymbologyStandard();
                }

              if(scheme === 'S')//Warfighting symbols
              {
                  if(affiliation === 'F' ||
                          affiliation === 'A' ||
                          affiliation === 'D' ||
                          affiliation === 'M' ||
                          affiliation === 'J' ||
                          affiliation === 'K')
                  {
                      
                      if(battleDimension==='F' || battleDimension==='G')//ground & SOF
                      {
                          if(battleDimension==='F' ||
                                  (battleDimension==='G' &&
                                    (grdtrkSubset==='U' || grdtrkSubset==='I' || grdtrkSubset==='0'|| grdtrkSubset==='-')))
                          {
                              returnVal = 803;
                          }
                          else if(battleDimension==='G' && grdtrkSubset==='E')
                          {
                              returnVal = 812;
                          }
                          else
                              returnVal = 803;
                      }
                      else if(battleDimension==='A')//Air
                      {
                          returnVal = 819;
                      }
                      else if(battleDimension==='S')//SeaSurface
                      {
                          returnVal = this.getSeaSurfaceFill(SymbolID);
                      }
                      else if(battleDimension==='U')//Subsurface
                      {
                          returnVal = this.getSubSurfaceFill(SymbolID,symStd);
                      }
                      else if(battleDimension==='P')//space
                      {
                          if(symStd === 0)
                            returnVal = 819;
                          else
                            returnVal = 843; 
                      }
                      else//if(battleDimension==='Z')//unknown
                      {
                          returnVal = 812;//index in font file
                      }
                  }
                  else if(affiliation === 'H' || affiliation === 'S')//hostile,suspect
                  {
                      if(battleDimension==='F' || battleDimension==='G')//ground & SOF
                      {
                          returnVal = 806;
                      }
                      else if(battleDimension==='A')//Air
                      {
                          returnVal = 816;
                      }
                      else if(battleDimension==='S')//SeaSurface
                      {
                          returnVal = this.getSeaSurfaceFill(SymbolID);
                      }
                      else if(battleDimension==='U')//Subsurface
                      {
                          returnVal = this.getSubSurfaceFill(SymbolID,symStd);
                      }
                      else if(battleDimension==='P')//space
                      {
                          if(symStd === 0)
                            returnVal = 816;
                          else
                            returnVal = 840; 
                      }
                      else//if(battleDimension==='Z')//unknown
                      {
                          returnVal = 806;//index in font file
                      }
                  }
                  else if(affiliation === 'N' || affiliation === 'L')//neutral,exercise neutral
                  {
                      if(battleDimension==='F' || battleDimension==='G')//ground & SOF
                      {
                          returnVal = 809;
                      }
                      else if(battleDimension==='A')//Air
                      {
                          returnVal = 822;
                      }
                      else if(battleDimension==='S')//SeaSurface
                      {
                          returnVal = this.getSeaSurfaceFill(SymbolID);
                      }
                      else if(battleDimension==='U')//Subsurface
                      {
                          returnVal = this.getSubSurfaceFill(SymbolID,symStd);
                      }
                      else if(battleDimension==='P')//space
                      {
                          if(symStd === 0)
                            returnVal = 822;
                          else
                            returnVal = 846; 
                      }
                      else//if(battleDimension==='Z')//unknown
                      {
                          returnVal = 809;//index in font file
                      }
                  }
                  else /*if(affiliation === 'P' ||
                     affiliation === 'U' ||
                     affiliation === 'G' ||
                     affiliation === 'W')*/ //these or bad affiliation codes.
                  {

                      if(battleDimension==='Z' ||//unknown
                            battleDimension==='G' ||//ground
                            battleDimension==='F')//SOF
                      {
                          returnVal = 800;//index in font file
                      }
                      else if(battleDimension==='A')//Air
                      {
                          returnVal = 825;
                      }
                      else if(battleDimension==='S')//SeaSurface
                      {
                          returnVal = this.getSeaSurfaceFill(SymbolID);
                      }
                      else if(battleDimension==='U')//Subsurface
                      {
                          returnVal = this.getSubSurfaceFill(SymbolID,symStd);
                      }
                      else if(battleDimension==='P')//space
                      {
                          if(symStd === 0)
                            returnVal = 825;
                          else
                            returnVal = 849;
                      }
                      else
                          returnVal = FillIndexUG;
                  }

              }//end if scheme === 's'
              else if(scheme === 'E')//Emergency Management Symbols
              {
                  if(battleDimension !== 'N')//if not EMS natural event
                  {
                      if(affiliation === 'F' ||
                              affiliation === 'A' ||
                              affiliation === 'D' ||
                              affiliation === 'M' ||
                              affiliation === 'J' ||
                              affiliation === 'K')
                      {

                          //EMS symbols break some rules about symbol codes
                          if(SymbolUtilities.isEMSEquipment(SymbolID))
                              returnVal = 812;
                          else
                            returnVal = 803;
                      }
                      else if(affiliation === 'H' || affiliation === 'S')//hostile,suspect
                      {
                          returnVal = 806;//index in font file

                      }
                      else if(affiliation === 'N' || affiliation === 'L')//neutral,exercise neutral
                      {
                          returnVal = 809;
                      }
                      else /*if(affiliation === 'P' ||
                         affiliation === 'U' ||
                         affiliation === 'G' ||
                         affiliation === 'W')*/
                      {
                          returnVal = 800;//index in font file
                      }
                  }
                  else //natural events do not have a fill/frame
                  {
                      returnVal = -1;
                  }
              }//end if scheme === 'E'
              else if(scheme === 'I')//Also default behavior
              {
                  if(affiliation === 'F' ||
                          affiliation === 'A' ||
                          affiliation === 'D' ||
                          affiliation === 'M' ||
                          affiliation === 'J' ||
                          affiliation === 'K')
                  {
                      if(battleDimension==='Z')//unknown
                      {
                          returnVal = 812;//index in font file
                      }
                      else if(battleDimension==='F' || battleDimension==='G' || battleDimension==='S')//ground & SOF & sea surface
                      {
                          if(scheme==='I')
                            returnVal = 812;
                          else
                            returnVal = 803;
                      }
                      else if(battleDimension==='A')//Air
                      {
                          returnVal = 819;
                      }
                      else if(battleDimension==='U')//Subsurface
                      {
                          returnVal = 831;
                      }
                      else if(battleDimension==='P')//space
                      {
                          if(symStd === 0)
                            returnVal = 819;
                          else
                            returnVal = 843;
                      }
                      else
                      {
                          if(scheme==='I')
                            returnVal = 812;
                          else
                            returnVal = 803;
                      }
                  }
                  if(affiliation === 'H' || affiliation === 'S')//hostile,suspect
                  {
                      if(battleDimension==='Z')//unknown
                      {
                          returnVal = 806;//index in font file
                      }
                      else if(battleDimension==='F' || battleDimension==='G' || battleDimension==='S')//ground & SOF & sea surface
                      {
                          returnVal = 806;
                      }
                      else if(battleDimension==='A')//Air
                      {
                          returnVal = 816;
                      }
                      else if(battleDimension==='U')//Subsurface
                      {
                          returnVal = 828;
                      }
                      else if(battleDimension==='P')//space
                      {
                          if(symStd === 0)
                            returnVal = 816;
                          else
                            returnVal = 840;
                      }
                      else
                      {
                          returnVal = 806;
                      }
                  }
                  if(affiliation === 'N' || affiliation === 'L')//neutral,exercise neutral
                  {
                      if(battleDimension==='Z')//unknown
                      {
                          returnVal = 809;//index in font file
                      }
                      else if(battleDimension==='F' || battleDimension==='G' || battleDimension==='S')//ground & SOF & sea surface
                      {
                          returnVal = 809;
                      }
                      else if(battleDimension==='A')//Air
                      {
                          returnVal = 822;
                      }
                      else if(battleDimension==='U')//Subsurface
                      {
                          returnVal = 834;
                      }
                      else if(battleDimension==='P')//space
                      {
                          if(symStd === 0)
                            returnVal = 822;
                          else
                            returnVal = 846;
                      }
                      else
                      {
                          returnVal = 809;
                      }
                  }
                  else if(affiliation === 'P' ||
                     affiliation === 'U' ||
                     affiliation === 'G' ||
                     affiliation === 'W')
                  {

                      if(battleDimension==='Z' ||//unknown
                            battleDimension==='G' ||//ground
                            battleDimension==='S' ||//sea surface
                            battleDimension==='F')//SOF
                      {
                          returnVal = 800;//index in font file
                      }
                      else if(battleDimension==='A')//Air
                      {
                          returnVal = 825;
                      }
                      else if(battleDimension==='U')//Subsurface
                      {
                          returnVal = 837;
                      }
                      else if(battleDimension==='P')//Space
                      {
                          if(symStd === 0)
                            returnVal = 825;
                          else
                            returnVal = 849;
                      }
                      else
                      {
                          returnVal = 800;
                      }
                  }
              }//end if scheme === 'I'
              else//scheme = 'O' and anything else
              {
                  if(affiliation === 'F' ||
                          affiliation === 'A' ||
                          affiliation === 'D' ||
                          affiliation === 'M' ||
                          affiliation === 'J' ||
                          affiliation === 'K')
                  {
                      if(SymbolID.substring(0,3)==="OFI" && SymbolID.substring(4,10)===("T-----"))
                      {
                          //friendly tent is the ONE STBOPS that draws like equipment.
                          returnVal = FillIndexFGE;
                      }
                      else
                      {
                          returnVal = 803;
                      }
                  }
                  else if(affiliation === 'H' || affiliation === 'S')//hostile,suspect
                  {
                      returnVal = 806;//index in font file
                  }
                  else if(affiliation === 'N' || affiliation === 'L')//neutral,exercise neutral
                  {
                      returnVal = 809;
                  }
                  else /*if(affiliation === 'P' ||
                     affiliation == 'U' ||
                     affiliation == 'G' ||
                     affiliation == 'W')*/
                  {
                      returnVal = 800;//index in font file
                  }
              }//end default

          }
          else
          {
              returnVal = 800;
          }
          
          return returnVal + 57000;
    
        },
        /**
         * 
         * @param {String} SymbolID
         * @param {Number} fillCode
         * @returns {Number}
         */        
        getFrameCode: function(SymbolID, fillCode, symStd){
            var returnVal = 0,
            status = SymbolID.charAt(3);

            if(status === 'A')
                returnVal = fillCode + 2;
            else//P, C, D, X, F
                returnVal = fillCode + 1;
            
            
            if(symStd === undefined)
                symStd = RendererSettings.getSymbologyStandard();
            if(symStd > RendererSettings.Symbology_2525B && status === 'A')
            {
                var affiliation = SymbolID.charAt(1);
                switch(affiliation)
                {
                    case 'P':
                    case 'A':
                    case 'S':
                    case 'G':
                    case 'M':
                        returnVal--;
                        break;
                }
            }//*/
            
            if(returnVal === 847)//847 seems to be reserved in FF & IE.
                returnVal = 852;

            if(SymbolUtilities.isSeaSurface(SymbolID))
            {
                returnVal = this.getSeaSurfaceFrame(SymbolID, fillCode);
            }
            if(SymbolUtilities.isSubSurface(SymbolID))
            {
                returnVal = this.getSubSurfaceFrame(SymbolID, fillCode);
            }

            return returnVal;
        },
        /**
         * 
         * @param {String} SymbolID
         * @returns {Number}
         */
        getSeaSurfaceFill: function (SymbolID) {
            var affiliation = "U",
    
            affiliation = SymbolID.charAt(1);//F,H,N,U,etc...
            

            if(SymbolUtilities.getBasicSymbolIDStrict(SymbolID)===("S*S*O-----*****"))
            {
              return 2016;  
            }
            else
            {
                if(affiliation === 'F' ||
                            affiliation === 'A' ||
                            affiliation === 'D' ||
                            affiliation === 'M' ||
                            affiliation === 'J' ||
                            affiliation === 'K')
                {
                    return FillIndexFS;
                }
                else if(affiliation === 'H' || affiliation === 'S')//hostile,suspect
                {
                    return FillIndexHS;
                }
                else if(affiliation === 'N' || affiliation === 'L')//neutral,exercise neutral
                {
                    return FillIndexNS;
                }
                else if(affiliation === 'P' ||
                         affiliation === 'U' ||
                         affiliation === 'G' ||
                         affiliation === 'W')
                {
                    return FillIndexUS;
                }
                else
                {
                    return FillIndexUG;
                }
            }
        },
        /**
         * 
         * @param {String} SymbolID
         * @returns {Number}
         */
        getSubSurfaceFill: function (SymbolID, symStd){
    
            var affiliation = 0,
            status = 0,
            returnVal = 831;
            try
            {
                if(symStd === undefined)
                {
                    symStd = RendererSettings.getSymbologyStandard();
                }
                affiliation = SymbolID.charAt(1);//F,H,N,U,etc...
                status = SymbolID.charAt(3);//A,P,C,D,X,F

                if(affiliation === 'F' ||
                        affiliation === 'A' ||
                        affiliation === 'D' ||
                        affiliation === 'M' ||
                        affiliation === 'J' ||
                        affiliation === 'K')
                {
                      returnVal = 831;//
                }
               else if(affiliation === 'H' || affiliation === 'S')//hostile,suspect
                {
                    returnVal = 828;//index in font file

                }
               else if(affiliation === 'N' || affiliation === 'L')//neutral,exercise neutral
                {
                    returnVal = 834;
                }
                else if(affiliation === 'P' ||
                   affiliation === 'U' ||
                   affiliation === 'G' ||
                   affiliation === 'W')
                {
                    returnVal = 837;//index in font file
                }

                //appears in USAS so we check in both standards
                if(SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*X-----*****"))
                {
                    if(status==='A')
                        returnVal = returnVal+2;
                    else
                        returnVal++;
                }

                //Special check for sea mine graphics
                //2525C///////////////////////////////////////////////////////////////
                if(symStd === RendererSettings.Symbology_2525C)
                {
                    if(SymbolID.indexOf("WM")===4 || //Sea Mine
                            SymbolID.indexOf("WDM")===4 ||//Sea Mine Decoy
                            SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*E-----*****") ||
                            SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*V-----*****"))
                    {
                        returnVal++;

                        if(status === 'A')
                            returnVal++;

                    }
                    else if(SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*ND----*****"))
                    {
                        returnVal = 2121;
                    }
                }
                else//2525Bch2////////////////////////////////////////////////////////
                {
                    if(SymbolID.indexOf("WM")===4)//Sea Mine
                    {
                        if(SymbolID.indexOf("----", 6)===6 || SymbolID.indexOf("D---", 6)===6)
                            returnVal = 2059;//
                        else if(SymbolID.indexOf("G---", 6)===6)
                            returnVal = 2062;
                        else if(SymbolID.indexOf("GD--", 6)===6)
                            returnVal = 2064;
                        else if(SymbolID.indexOf("M---", 6)===6)
                            returnVal = 2073;
                        else if(SymbolID.indexOf("MD--", 6)===6)
                            returnVal = 2075;
                        else if(SymbolID.indexOf("F---", 6)===6)
                            returnVal = 2084;
                        else if(SymbolID.indexOf("FD--", 6)===6)
                            returnVal = 2086;
                        else if(SymbolID.indexOf("O---", 6)===6 ||
                                SymbolID.indexOf("OD--", 6)===6)
                            returnVal = 2094;

                    }
                    else if(SymbolID.indexOf("WDM")===4)//Sea Mine Decoy
                    {
                          returnVal = 2115;
                    }
                    else if(SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*ND----*****"))
                    {
                          returnVal = 2121;
                    }//
                }
            }
            catch(exc)
            {
                //ErrorLogger.LogException("UnitFontLookupC", "getSubSurfaceFill", exc);
                return FillIndexUU;
            }

            return returnVal;
    
        },
        /**
         * 
         * @param {String} SymbolID
         * @param {Number} fillCode
         * @returns {Number}
         */
        getSeaSurfaceFrame: function(SymbolID, fillCode){
            var returnVal = fillCode+1;

            if(SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*S*O-----*****"))
                returnVal = -1;
            else
            {
                if(SymbolID.charAt(3)==='A' || SymbolID.charAt(3)==='a')
                            return fillCode + 2;
                        else
                            return fillCode + 1;
            }

            return returnVal;
        },
        /**
         * 
         * @param {String} SymbolID
         * @param {Number} fillCode
         * @returns {Number}
         */        
        getSubSurfaceFrame: function(SymbolID, fillCode){
              var returnVal = fillCode+1;

              try
              {
                  //Special check for sea mine graphics
                  //2525C///////////////////////////////////////////////////////////////
                  if(RendererSettings.getSymbologyStandard() === 
                          RendererSettings.Symbology_2525C)
                  {
                      if(SymbolID.indexOf("WM")===4 || //Sea Mine
                              SymbolID.indexOf("WDM")===4 ||//Sea Mine Decoy
                              SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*E-----*****") ||
                              SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*V-----*****") ||
                              SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*X-----*****"))
                      {
                          returnVal = -1;
                      }
                      else if(SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*ND----*****"))
                      {
                          returnVal = -1;
                      }
                      else
                      {
                          if(SymbolID.charAt(3)==='A' || SymbolID.charAt(3)==='a')
                              return fillCode + 2;
                          else
                              return fillCode + 1;
                      }//
                  }
                  else//2525Bch2////////////////////////////////////////////////////////
                  {
                      if(SymbolID.indexOf("WM")===4)//Sea Mine
                      {
                          returnVal = -1;

                      }
                      else if(SymbolID.indexOf("WDM")===4)//Sea Mine Decoy
                      {
                            returnVal = -1;
                      }
                      else if(SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*ND----*****"))
                      {
                            returnVal = -1;
                      }//
                      else if(SymbolUtilities.getBasicSymbolIDStrict(SymbolID) === ("S*U*X-----*****"))
                      {
                          returnVal = -1;
                      }
                      else
                      {
                          if(SymbolID.charAt(3)==='A' || SymbolID.charAt(3)==='a')
                              return fillCode + 2;
                          else
                              return fillCode + 1;
                      }
                  }
              }
              catch(exc)
              {
                  //ErrorLogger.LogException("UnitFontLookupC", "getSubSurfaceFrame", exc);
                  return fillCode;
              }

              return returnVal;
        },
        /**
         * Until XML files are updated, we need to shift the index
         * @param {Number} characterIndex
         * @returns {Number}
         */        
        getUnitRatioHeight: function(charIndex){
            var characterIndex = charIndex - 57000;
            if(characterIndex === FillIndexHP ||
              characterIndex === FillIndexHA ||
              characterIndex === FillIndexHU ||
              characterIndex === (FillIndexHU+1) ||
              characterIndex === (FillIndexHU+2) ||
              characterIndex === FillIndexUP ||
              characterIndex === FillIndexUA ||
              characterIndex === FillIndexUU ||
              characterIndex === (FillIndexUU+1) ||
              characterIndex === (FillIndexUU+2))
            {
                return 1.3;
            }
            else if(characterIndex === FillIndexHZ ||
                    characterIndex === FillIndexHG ||
                    characterIndex === FillIndexHGE ||
                    characterIndex === FillIndexHS ||
                    characterIndex === FillIndexHF ||
                    characterIndex === FillIndexUZ ||
                    characterIndex === FillIndexUG ||
                    characterIndex === FillIndexUGE ||
                    characterIndex === FillIndexUS ||
                    characterIndex === FillIndexUF)
            {
                return 1.44;
            }
            else if(characterIndex === FillIndexFGE ||
                    characterIndex === FillIndexFP ||
                    characterIndex === FillIndexFA ||
                    characterIndex === FillIndexFU ||
                    characterIndex === (FillIndexFU+1) ||
                    characterIndex === (FillIndexFU+2) ||
                    characterIndex === FillIndexFZ ||
                    characterIndex === FillIndexFS ||
                    characterIndex === FillIndexNP ||
                    characterIndex === FillIndexNA ||
                    characterIndex === FillIndexNU ||
                    characterIndex === (FillIndexNU+1) ||
                    characterIndex === (FillIndexNU+2))
            {
                return 1.2;
            }
            else if(characterIndex === FillIndexNZ ||
                    characterIndex === FillIndexNG ||
                    characterIndex === FillIndexNGE ||
                    characterIndex === FillIndexNS ||
                    characterIndex === FillIndexNF)
            {
                return 1.1;
            }
            else if(characterIndex === FillIndexFG ||
                    characterIndex === FillIndexFGE)
            {
                return 1.0;
            }
            else
            {
                return 1.2;
            }
        },
        /**
         * 
         * @param {Number} charIndex
         * @returns {Number}
         */               
        getUnitRatioWidth: function (charIndex) {
            var characterIndex = charIndex - 57000;
              if(characterIndex === FillIndexUP ||
                      characterIndex === FillIndexUA ||
                      characterIndex === FillIndexUU ||
                      characterIndex === FillIndexUU+1 ||
                      characterIndex === FillIndexUU+2 ||
                      characterIndex === FillIndexFG ||
                      characterIndex === FillIndexFF)
              {
                  return 1.5;
              }
              else if(characterIndex === FillIndexHZ ||
                      characterIndex === FillIndexHG ||
                      characterIndex === FillIndexHGE ||
                      characterIndex === FillIndexHS ||
                      characterIndex === FillIndexHF ||
                      characterIndex === FillIndexUZ ||
                      characterIndex === FillIndexUG ||
                      characterIndex === FillIndexUGE ||
                      characterIndex === FillIndexUS ||
                      characterIndex === FillIndexUF)
              {
                  return 1.44;
              }
              else if(characterIndex === FillIndexFZ ||
                      characterIndex === FillIndexFGE ||
                      characterIndex === FillIndexFS)
              {
                  return 1.2;
              }
              else
              {
                  return 1.1;
              }
        }

    };
}());