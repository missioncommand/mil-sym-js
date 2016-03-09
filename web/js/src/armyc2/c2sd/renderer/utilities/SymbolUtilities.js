/**
 * @fileOverview Mil Symbology Renderer.  Generate MIL-STD-2525 B Change II +USAS 13-14 and C +USAS 13-14 icon and area based symbology in KML, JSON, and PNG formats
 * @version 1.0.0
 */
var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.SymbolUtilities = {};
    
    /**
     * 
     * @param {String} symbolID 15 character code
     * @returns {String} basic symbolID
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getBasicSymbolID = function (symbolID) {
        //try {
        
            var basic = symbolID;
            if(symbolID && symbolID.length === 15)
            {
                var scheme = symbolID.charAt(0);
                if (scheme === 'G') //tactical graphic
                {
                    basic = scheme + '*' + basic.charAt(2) + '*' + basic.substring(4, 10) + "****X";
                } 
                else if (scheme !== 'W' && scheme !== 'B')//weather or basic/buffered shape
                {
                    basic = scheme + '*' + basic.charAt(2) + '*' + basic.substring(4, 10) + "*****";
                }
            }
            return basic;
        //} catch (error) {}
        //return symbolID;
    };
    /**
     * @param {String} symbolID
     * @returns {String}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.reconcileSymbolID = function(symbolID, isMultiPoint)
    {
        
        if(isMultiPoint !== true)
            isMultiPoint = false;
        var sb = "";
        var codingScheme = symbolID.charAt(0);

        if(symbolID.indexOf("BS_") === 0 || symbolID.indexOf("BBS_") === 0 )
        {
            return symbolID;
        }

        if(symbolID.length < 15)
        {
            while (symbolID.length < 15)
            {
                symbolID += "-";
            }
        }
        if(symbolID.length > 15)
        {
            symbolID = symbolID.substring(0, 15);
        }

        if(symbolID !== null && symbolID.length===15)
        {
            if(codingScheme==='S' || //warfighting
                    codingScheme==='I' ||//sigint
                    codingScheme==='O' ||//stability operation
                    codingScheme==='E')//emergency management
            {
                sb += (codingScheme);

                if(this.hasValidAffiliation(symbolID)===false)
                    sb += ('U');
                else
                    sb += (symbolID.charAt(1));

                if(this.hasValidBattleDimension(symbolID)===false)
                {
                    sb = "S" + sb.substring(1);
                    sb += ('Z');
                }
                else
                    sb += (symbolID.charAt(2));

                if(this.hasValidStatus(symbolID)===false)
                    sb += ('P');
                else
                    sb += (symbolID.charAt(3));

                sb += ("------");
                sb += (symbolID.substring(10, 15));

            }
            else if(codingScheme==='G')//tactical
            {
                sb += (codingScheme);

                if(this.hasValidAffiliation(symbolID)===false)
                    sb += ('U');
                else
                    sb += (symbolID.charAt(1));

                //if(this.hasValidBattleDimension(SymbolID)==false)
                    sb += ('G');
                //else
                //    sb += (SymbolID.charAt(2));

                if(this.hasValidStatus(symbolID)===false)
                    sb += ('P');
                else
                    sb += (symbolID.charAt(3));

                if(isMultiPoint)
                    sb += ("GAG---");//return a boundary
                else
                    sb += ("GPP---");//return an action point

                sb += (symbolID.substring(10, 15));

            }
            else if(codingScheme==='W')//weather
            {//no default weather graphic
                return "SUZP-----------";//unknown
            }
            else//bad codingScheme
            {
                sb += ('S');
                if(this.hasValidAffiliation(symbolID)===false)
                    sb += ('U');
                else
                    sb += (symbolID.charAt(1));

                if(this.hasValidBattleDimension(symbolID)===false)
                {
                    sb += ('Z');
                    //sb.replace(0, 1, "S");
                }
                else
                    sb += (symbolID.charAt(2));

                if(this.hasValidStatus(symbolID)===false)
                    sb += ('P');
                else
                    sb += (symbolID.charAt(3));

                sb += ("------");
                sb += (symbolID.substring(10, 15));
            }
        }
        else
        {
            return "SUZP-----------";//unknown
        }
        return sb;
    };
    /**
     * Returns true if the SymbolID has a valid Status (4th character)
     * @param {String} SymbolID
     * @returns {Boolean}
     */            
    armyc2.c2sd.renderer.utilities.SymbolUtilities.hasValidStatus = function (SymbolID){
        if(SymbolID !== null && SymbolID.length>=10)
        {
            var status = SymbolID.charAt(3),
            codingScheme = SymbolID.charAt(0);

            if(codingScheme==='S' || //warfighting
                 codingScheme==='I' ||//sigint
                 codingScheme==='O' ||//stability operation
                 codingScheme==='E')//emergency management
            {
                if(status === 'A' ||
                    status === 'P' ||
                    status === 'C' ||
                    status === 'D' ||
                    status === 'X' ||
                    status === 'F')
                {
                    return true;
                }
                else
                    return false;
            }
            else if(codingScheme==='G')
            {
                if(status === 'A' ||
                    status === 'S' ||
                    status === 'P' ||
                    status === 'K')
                {
                    return true;
                }
                else
                    return false;
            }
            else if(codingScheme==='W')
            {
                return true;//doesn't apply
            }

            return false;
        }
        else
            return false;
    };
    /**
     * Returns true if the SymbolID has a valid Affiliation (2nd character)
     * @param {String} SymbolID
     * @returns {Boolean}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.hasValidAffiliation = function (SymbolID){
        if(SymbolID !== null && SymbolID.length>=10)
        {
            var affiliation = SymbolID.charAt(1);
            if(affiliation === 'P' ||
                    affiliation === 'U' ||
                    affiliation === 'A' ||
                    affiliation === 'F' ||
                    affiliation === 'N' ||
                    affiliation === 'S' ||
                    affiliation === 'H' ||
                    affiliation === 'G' ||
                    affiliation === 'W' ||
                    affiliation === 'M' ||
                    affiliation === 'D' ||
                    affiliation === 'L' ||
                    affiliation === 'J' ||
                    affiliation === 'K')
                return true;
            else
                return false;
        }
        else
            return false;
    };
    /**
     * Returns true if the SymbolID has a valid Coding Scheme (1st character)
     * @param {type} symbolID
     * @returns {Boolean}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.hasValidCodingScheme = function (symbolID){
        if(symbolID !== null && symbolID.length>0)
           {
               var codingScheme = symbolID.charAt(0);
               if(codingScheme==='S'||
                       codingScheme==='G'||
                       codingScheme==='W'||
                       codingScheme==='I'||
                       codingScheme==='O'||
                       codingScheme==='E')
               {
                   return true;
               }
               else
               {
                   return false;
               }
           }
           else
           {
               return false;
           }
    };
    /**
     * Returns true if the SymbolID has a valid BattleDimension (3rd character)
     * "Category" for tactical graphics
     * @param {String} SymbolID
     * @returns {Boolean}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.hasValidBattleDimension = function (SymbolID){
        if(SymbolID !== null && SymbolID.length>=10)
        {
            var codingScheme = SymbolID.charAt(0),
            bd = SymbolID.charAt(2);

            if(codingScheme==='S')//warfighting
            {
                if(bd === 'P' ||
                    bd === 'A' ||
                    bd === 'G' ||
                    bd === 'S' ||
                    bd === 'U' ||
                    bd === 'F' ||
                    //status == 'X' ||//doesn't seem to be a valid use for this one
                    bd === 'Z')
                    return true;
                else
                    return false;
            }
            else if(codingScheme==='O')//stability operation
            {
                if(bd === 'V' ||
                    bd === 'L' ||
                    bd === 'O' ||
                    bd === 'I' ||
                    bd === 'P' ||
                    bd === 'G' ||
                    bd === 'R')
                    return true;
                else
                    return false;
            }
            else if(codingScheme==='E')//emergency management
            {
                if(bd === 'I' ||
                    bd === 'N' ||
                    bd === 'O' ||
                    bd === 'F')
                    return true;
                else
                    return false;
            }
            else if(codingScheme==='G')//tactical grahpic
            {
                if(bd === 'T' ||
                    bd === 'G' ||
                    bd === 'M' ||
                    bd === 'F' ||
                    bd === 'S' ||
                    bd === 'O')
                {
                    return true;
                }
                else
                    return false;
            }
            else if(codingScheme==='W')//weather
            {
                return true;//doesn't apply
            }
            else if(codingScheme==='I')//sigint
            {
                if(bd === 'P' ||
                    bd === 'A' ||
                    bd === 'G' ||
                    bd === 'S' ||
                    bd === 'U' ||
                    //status === 'X' ||//doesn't seem to be a valid use for this one
                    bd === 'Z')
                    return true;
                else
                    return false;
            }
            else//bad codingScheme, can't confirm battle dimension
                 return false;
        }
        else
            return false;
    };
    
    /**
     * Takes a single character or a string and will test for non-letter characters.
     * @param {type} str
     * @returns {armyc2.c2sd.renderer.utilities.SymbolUtilities.isLetter.returnVal|Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isLetter = function (str)
    {
        var returnVal = true,
            len = str.length,
            code = 0;
        for(var i = 0; i < len; i++)
        {
            code = str.charCodeAt(i);
            if(!(code >= 65 && code <= 90) || (code>= 97 && code <= 122))
            {
                returnVal = false;
                break;
            }
        }
        return returnVal;
    };
    
    /**
     * Returns true if the characters in the country code positions of the 
     * SymbolID are letters.
     * @param {String} symbolID
     * @returns {Boolean}
     */            
    armyc2.c2sd.renderer.utilities.SymbolUtilities.hasValidCountryCode = function (symbolID)
    {
        if(this.isLetter(symbolID.substring(12,14)))
            return true;
        else
            return false;
    };
    
    /**
     * converts a Javascript Date object into a properly formated String for
     * W or W1
     * @param {Date} date
     * @returns {String}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getDateLabel = function (date) {
        var strDate = null, //ddHHmmssZMMMyy
        day, //##
        hour, //##
        min, //##
        sec, //##
        zulu, //Z
        month, //###, (APR)
        strMonth, //###, (APR)
        year,
        strYear, //##
        months;
        
        if(date instanceof Date)
        {
            day = date.getDate();
            hour = date.getHours();
            min = date.getMinutes();
            sec = date.getSeconds();
            zulu = date.getTimezoneOffset();
            if (zulu !== 0) {
                zulu = zulu / -60;
            }
            month = date.getMonth();
            year = date.getFullYear();
            months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
            strMonth = months[month];
            strYear = year.toString();
            strYear = strYear.substr(2, 2);
            strDate = this.formatNumberLength(day, 2) + this.formatNumberLength(hour, 2) + this.formatNumberLength(min, 2) + this.formatNumberLength(sec, 2) + this.getZuluCharacter(zulu) + strMonth + strYear;
        }
        return strDate;
    };
    
    /**
     * usage: formatNumberLength(30,4);
     * returns: "0030"
     * @param {Number} number
     * @param {Number} length
     * @returns {String}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.formatNumberLength = function (number, length) {
        var r = "";
        r = r + number;
        while (r.length < length) {
            r = "0" + r;
        }
        return r;
    };
    /**
     * Takes the timezone offset and returns the apropriate 
     * time zone letter string.
     * @param {Number} hour hour,time zone offset (int, -12 to 12)
     * @returns {String}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getZuluCharacter = function (hour) {
        if (hour === 0) {
            return "Z";
        } else if (hour === -1) {
            return "N";
        } else if (hour === -2) {
            return "O";
        } else if (hour === -3) {
            return "P";
        } else if (hour === -4) {
            return "Q";
        } else if (hour === -5) {
            return "R";
        } else if (hour === -6) {
            return "S";
        } else if (hour === -7) {
            return "T";
        } else if (hour === -8) {
            return "U";
        } else if (hour === -9) {
            return "V";
        } else if (hour === -10) {
            return "W";
        } else if (hour === -11) {
            return "X";
        } else if (hour === -12) {
            return "Y";
        } else if (hour === 1) {
            return "A";
        } else if (hour === 2) {
            return "B";
        } else if (hour === 3) {
            return "C";
        } else if (hour === 4) {
            return "D";
        } else if (hour === 5) {
            return "E";
        } else if (hour === 6) {
            return "F";
        } else if (hour === 7) {
            return "G";
        } else if (hour === 8) {
            return "H";
        } else if (hour === 9) {
            return "I";
        } else if (hour === 10) {
            return "K";
        } else if (hour === 11) {
            return "L";
        } else if (hour === 12) {
            return "M";
        } else {
            return "-";
        }
    };

    /**
     * 
     * @param {String} symbolID
     * @param {String} modifier from the constants ModifiersUnits or ModifiersTG
     * @param {int} symStd 0=2525B, 1=2525C.  Constants available in RendererSettings.
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.hasModifier = function (symbolID, modifier, symStd){
        var returnVal = false;
        if(symStd === undefined)
        {
            symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
        }
        if(this.isTacticalGraphic(symbolID)===true)
        {
            returnVal = this.canSymbolHaveModifier(symbolID, modifier, symStd);
        }
        else
        {
            returnVal = this.canUnitHaveModifier(symbolID, modifier);
        }
        return returnVal;
    };
    /**
     * 
     * @param {String} symbolID
     * @param {String} unitModifier
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.canUnitHaveModifier = function (symbolID, unitModifier){

        var ModifiersUnits = armyc2.c2sd.renderer.utilities.ModifiersUnits;
        if(unitModifier===(ModifiersUnits.B_ECHELON))
        {
            return (this.isUnit(symbolID) || this.isSTBOPS(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.C_QUANTITY))
        {
            return (this.isEquipment(symbolID) ||
                    this.isEMSEquipment(symbolID) ||
                    this.isEMSIncident(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.D_TASK_FORCE_INDICATOR))
        {
            return (this.isUnit(symbolID) ||
                    this.isSTBOPS(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.F_REINFORCED_REDUCED))
        {
            return (this.isUnit(symbolID) ||
                    this.isSTBOPS(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.G_STAFF_COMMENTS))
        {
            return (this.isEMS(symbolID) === false);
        }
        else if(unitModifier===(ModifiersUnits.H_ADDITIONAL_INFO_1))
        {
            return true;
        }
        else if(unitModifier===(ModifiersUnits.J_EVALUATION_RATING))
        {
            return true;
        }
        else if(unitModifier===(ModifiersUnits.K_COMBAT_EFFECTIVENESS))
        {
            return (this.isUnit(symbolID) ||
                    this.isSTBOPS(symbolID) ||
                    (this.hasInstallationModifier(symbolID) && this.isEMS(symbolID)===false));
        }
        else if(unitModifier===(ModifiersUnits.L_SIGNATURE_EQUIP))
        {
            return (this.isEquipment(symbolID) ||
                    this.isSIGINT(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.M_HIGHER_FORMATION))
        {
            return (this.isUnit(symbolID) ||
                    this.isSIGINT(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.N_HOSTILE))
        {
            return (this.isEquipment(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.P_IFF_SIF))
        {
            return (this.isUnit(symbolID) ||
                    this.isEquipment(symbolID) ||
                    (this.hasInstallationModifier(symbolID) && this.isEMS(symbolID)===false) ||
                    this.isSTBOPS(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.Q_DIRECTION_OF_MOVEMENT))
        {
            return ((this.hasInstallationModifier(symbolID) === false) &&
                    (this.isSIGINT(symbolID) === false));
        }
        else if(unitModifier===(ModifiersUnits.R_MOBILITY_INDICATOR))
        {
            return (this.isEquipment(symbolID) ||
                    this.isEMSEquipment(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.R2_SIGNIT_MOBILITY_INDICATOR))
        {
            return (this.isSIGINT(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.S_HQ_STAFF_OR_OFFSET_INDICATOR))
        {
            return (this.isSIGINT(symbolID)===false);
        }
        else if(unitModifier===(ModifiersUnits.T_UNIQUE_DESIGNATION_1))
        {
            return true;
        }
        else if(unitModifier===(ModifiersUnits.V_EQUIP_TYPE))
        {
            return (this.isEquipment(symbolID) ||
                    this.isSIGINT(symbolID) ||
                    this.isEMSEquipment(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.W_DTG_1))
        {
            return true;
        }
        else if(unitModifier===(ModifiersUnits.X_ALTITUDE_DEPTH))
        {
            return (this.isSIGINT(symbolID)===false);
        }
        else if(unitModifier===(ModifiersUnits.Y_LOCATION))
        {
            return true;
        }
        else if(unitModifier===(ModifiersUnits.Z_SPEED))
        {
            return ((this.hasInstallationModifier(symbolID)===false) &&
                    (this.isSIGINT(symbolID)===false));
        }
        else if(unitModifier===(ModifiersUnits.AA_SPECIAL_C2_HQ))
        {
            return (this.isUnit(symbolID) ||
                    this.isSTBOPS(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.AB_FEINT_DUMMY_INDICATOR))
        {
            return ((this.isSIGINT(symbolID)===false) &&
                    (this.isEMS(symbolID)===false));
        }
        else if(unitModifier===(ModifiersUnits.AC_INSTALLATION))
        {
            return (this.isSIGINT(symbolID)===false);
        }
        else if(unitModifier===(ModifiersUnits.AD_PLATFORM_TYPE))
        {
            return (this.isSIGINT(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.AE_EQUIPMENT_TEARDOWN_TIME))
        {
            return (this.isSIGINT(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.AF_COMMON_IDENTIFIER))
        {
            return (this.isSIGINT(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.AG_AUX_EQUIP_INDICATOR))
        {
            return (this.isEquipment(symbolID));
        }
        else if(unitModifier===(ModifiersUnits.AH_AREA_OF_UNCERTAINTY) ||
                unitModifier===(ModifiersUnits.AI_DEAD_RECKONING_TRAILER) ||
                unitModifier===(ModifiersUnits.AJ_SPEED_LEADER))
        {
            return ((this.isSIGINT(symbolID)===false) &&
                    (this.hasInstallationModifier(symbolID)===false));
        }
        else if(unitModifier===(ModifiersUnits.AK_PAIRING_LINE))
        {
            return ((this.isSIGINT(symbolID)===false) &&
                    (this.isEMS(symbolID)===false) &&
                    (this.hasInstallationModifier(symbolID)===false));
        }
        else if(unitModifier===(ModifiersUnits.AL_OPERATIONAL_CONDITION))
        {
            return (this.isUnit(symbolID)===false);
        }
        else if(unitModifier===(ModifiersUnits.AO_ENGAGEMENT_BAR))
        {
            return ((this.isEquipment(symbolID) ||
                    this.isUnit(symbolID) ||
                    this.hasInstallationModifier(symbolID)) &&
                    this.isEMS(symbolID)===false);
        }
        //out of order because used less often
        else if(unitModifier===(ModifiersUnits.A_SYMBOL_ICON))
        {
            return true;
        }
        else if(unitModifier===(ModifiersUnits.E_FRAME_SHAPE_MODIFIER))
        {
            //return (this.isSIGINT(symbolID)==false);
            //not sure why milstd say sigint don't have it.
            //they clearly do.
            return true;
        }
        else if(unitModifier.equals(ModifiersUnits.SCC_SONAR_CLASSIFICATION_CONFIDENCE))
        {
           if(this.isSubSurface(symbolID))
           {
               //these symbols only exist in 2525C
               var temp = symbolID.substring(4, 10);
               if(temp === ("WMGC--") ||
                       temp === ("WMMC--") ||
                       temp === ("WMFC--") ||
                       temp === ("WMC---"))
               {
                   return true;
               }
           }
           
           return false;
        }
        else
            return false;
    };
    /**
     * 
     * @param {String} symbolID
     * @param {String} tgModifier like armyc2.c2sd.renderer.utilities.ModifiersTG.AN_AZIMUTH
     * @param {Number} symStd like armyc2.c2sd.renderer.utilities.RendererSettings.Symbology_2525C
     * @returns {Boolean}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.canSymbolHaveModifier = function(symbolID, tgModifier, symStd){
        if(symStd === undefined)
        {
            symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
        }
        var basic = null,
        sd = null,//symbolDef
        returnVal = false;
        

        var ModifiersTG = armyc2.c2sd.renderer.utilities.ModifiersTG;
        var SymbolDefTable = armyc2.c2sd.renderer.utilities.SymbolDefTable;
        basic = this.getBasicSymbolID(symbolID);
        sd = SymbolDefTable.getSymbolDef(basic, symStd);
        if(sd !== null)
        {
            var dc = sd.drawCategory;
            if(tgModifier===(ModifiersTG.AM_DISTANCE))
            {
                switch(dc)
                {
                    case SymbolDefTable.DRAW_CATEGORY_RECTANGULAR_PARAMETERED_AUTOSHAPE:
                    case SymbolDefTable.DRAW_CATEGORY_SECTOR_PARAMETERED_AUTOSHAPE:
                    case SymbolDefTable.DRAW_CATEGORY_TWO_POINT_RECT_PARAMETERED_AUTOSHAPE: 
                        returnVal = true;
                        break;
                    case SymbolDefTable.DRAW_CATEGORY_CIRCULAR_PARAMETERED_AUTOSHAPE:
                    case SymbolDefTable.DRAW_CATEGORY_CIRCULAR_RANGEFAN_AUTOSHAPE:
                        returnVal = true;
                        break;
					case SymbolDefTable.DRAW_CATEGORY_LINE:
						if(sd.modifiers.indexOf(tgModifier + ".") > -1)
							returnVal = true;
						break;
                    default:
                        returnVal = false;
                }
            }
            else if(tgModifier===(ModifiersTG.AN_AZIMUTH))
            {
                switch(dc)
                {
                    case SymbolDefTable.DRAW_CATEGORY_RECTANGULAR_PARAMETERED_AUTOSHAPE:
                    case SymbolDefTable.DRAW_CATEGORY_SECTOR_PARAMETERED_AUTOSHAPE:
                        returnVal = true;
                        break;
                    default:
                        returnVal = false;
                }
            }
            else
            {
                if(sd.modifiers.indexOf(tgModifier + ".")>-1)
                    returnVal = true;
            }
        }

        return returnVal;

    };
    /**
     * Gets line color used if no line color has been set. The color is specified based on the affiliation of
     * the symbol and whether it is a unit or not.
     * @param {String} symbolID
     * @returns {armyc2.c2sd.renderer.utilities.Color} hex color like #FFFFFF
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getLineColorOfAffiliation = function(symbolID){
        var retColor = null,
        basicSymbolID = this.getBasicSymbolID(symbolID);
        //var AffiliationColors = armyc2.c2sd.renderer.utilities.AffiliationColors;

        // We can't get the fill color if there is no symbol id, since that also means there is no affiliation
        if((symbolID === null) || (symbolID===("")))
        {
                return retColor;
        }

        if (this.isTacticalGraphic(symbolID))// && !this.isTGWithFill(symbolID))
        {
            if (this.isWeather(symbolID))
            {
                retColor = this.getLineColorOfWeather(symbolID);
            }
            else if(this.isObstacle(symbolID))
            {
                retColor = armyc2.c2sd.renderer.utilities.Color.GREEN;	// Green
            }
            else if(this.isEMSNaturalEvent(symbolID))
            {
                retColor = armyc2.c2sd.renderer.utilities.Color.BLACK;	// Black
            }
            else if ((this.isNBC(symbolID)) && 
                    (basicSymbolID===("G*M*NR----****X") || //Radioactive Area
                    basicSymbolID===("G*M*NC----****X") || //Chemically Contaminated Area
                    basicSymbolID===("G*M*NB----****X"))) //Biologically Contaminated Area
            {
                retColor = armyc2.c2sd.renderer.utilities.Color.BLACK;//0xffff00;
            }
            else
            {
                    var switchChar = symbolID.charAt(1);
                    if(switchChar===("F") ||
                        switchChar===("A") ||
                        switchChar===("D") ||
                        switchChar===("M"))
                    {
                        retColor = armyc2.c2sd.renderer.utilities.Color.BLACK;//0x000000;	// Black
                    }
                    else if(switchChar===("H") ||
                        switchChar===("S") ||
                        switchChar===("J") ||
                        switchChar===("K"))
                    {

                        if (this.getBasicSymbolID(symbolID)===("G*G*GLC---****X"))	// Line of Contact
                        {
                            retColor = armyc2.c2sd.renderer.utilities.Color.BLACK;//0x000000;	// Black
                        }
                        else
                        {
                            retColor = armyc2.c2sd.renderer.utilities.Color.RED;//0xff0000;	// Red
                        }

                    }
                    else if(switchChar===("N") ||
                            switchChar===("L"))	// Neutral:
                    {
                            retColor = armyc2.c2sd.renderer.utilities.Color.GREEN;//0x00ff00;	// Green

                    }
                    else if(switchChar===("U") ||
                        switchChar===("P") ||
                        switchChar===("O") ||
                        switchChar===("G") ||
                        switchChar===("W"))
                    {
                        retColor = armyc2.c2sd.renderer.utilities.Color.YELLOW;//0xffff00;	// Yellow
                    }
                    else
                    {
                        retColor = armyc2.c2sd.renderer.utilities.Color.BLACK;//null;//0;//Color.Empty;
                    }	// End default

            }	// End else
        }// End if (SymbolUtilities.IsTacticalGraphic(this.SymbolID))
        else
        {
            //stopped doing check because all warfighting
            //should have black for line color.
            retColor = armyc2.c2sd.renderer.utilities.Color.BLACK;

        }	// End else

        return retColor;
    };
    /**
     * Is the fill color used if no fill color has been set. The color is specified based on the affiliation
     * of the symbol and whether it is a unit or not.
     * @param {String} symbolID
     * @returns {armyc2.c2sd.renderer.utilities.Color} hex color like #FFFFFF
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getFillColorOfAffiliation = function(symbolID) {
        var retColor = null,
        basicSymbolID = this.getBasicSymbolID(symbolID);
        var AffiliationColors = armyc2.c2sd.renderer.utilities.AffiliationColors;
        
        var switchChar;
        // We can't get the fill color if there is no symbol id, since that also means there is no affiliation
        if((symbolID === null) || (symbolID===("")))
        {
                return retColor;
        }

        if(basicSymbolID===("G*M*NZ----****X") ||//ground zero
            //basicSymbolID===("G*M*NF----****X") || //fallout producing
            basicSymbolID===("G*M*NEB---****X") ||//biological
            basicSymbolID===("G*M*NEC---****X"))//chemical
        {
                retColor = AffiliationColors.UnknownUnitFillColor;//  Color.yellow;
        }
        else if(this.isTacticalGraphic(symbolID) && !this.isTGSPWithFill(symbolID))
        {
                if(basicSymbolID===("G*M*NZ----****X") ||//ground zero
                //basicSymbolID===("G*M*NF----****X") || //fallout producing
                basicSymbolID===("G*M*NEB---****X") ||//biological
                basicSymbolID===("G*M*NEC---****X"))//chemical
                {
                    retColor = armyc2.c2sd.renderer.utilities.Color.yellow;
                }
                else
                {
                    switchChar = symbolID.charAt(1);
                    if(switchChar===("F") ||
                        switchChar===("A") ||
                        switchChar===("D") ||
                        switchChar===("M"))
                    {
                            retColor = AffiliationColors.FriendlyGraphicFillColor;//0x00ffff;	// Cyan

                    }
                    else if(switchChar===("H") ||
                        switchChar===("S") ||
                        switchChar===("J") ||
                        switchChar===("K"))
                    {
                            retColor = AffiliationColors.HostileGraphicFillColor;//0xfa8072;	// Salmon

                    }
                    else if(switchChar===("N") ||
                            switchChar===("L"))
                    {
                            retColor = AffiliationColors.NeutralGraphicFillColor;//0x7fff00;	// Light Green

                    }
                    else if(switchChar===("U") ||
                        switchChar===("P") ||
                        switchChar===("O") ||
                        switchChar===("G") ||
                        switchChar===("W"))
                    {
                            retColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString("#FFFACD");//armyc2.c2sd.renderer.utilities.Color.rgbToHexString(255,250, 205); //0xfffacd;	// LemonChiffon 255 250 205
                    }
                    else

                    {
                            retColor = null;
                    }
                }
        }	// End if(this.IsTacticalGraphic(this._strSymbolID))
        else
        {
                switchChar = symbolID.charAt(1);
                if(switchChar===("F") ||
                    switchChar===("A") ||
                    switchChar===("D") ||
                    switchChar===("M"))
                {
                        retColor = AffiliationColors.FriendlyUnitFillColor;//0x00ffff;	// Cyan

                }
                else if(switchChar===("H") ||
                    switchChar===("S") ||
                    switchChar===("J") ||
                    switchChar===("K"))
                {
                        retColor = AffiliationColors.HostileUnitFillColor;//0xfa8072;	// Salmon

                }
                else if(switchChar===("N") ||
                        switchChar===("L"))
                {
                        retColor = AffiliationColors.NeutralUnitFillColor;//0x7fff00;	// Light Green

                }
                else if(switchChar===("U") ||
                    switchChar===("P") ||
                    switchChar===("O") ||
                    switchChar===("G") ||
                    switchChar===("W"))
                {
                        retColor = AffiliationColors.UnknownUnitFillColor;//armyc2.c2sd.renderer.utilities.Color.rgbToHexString(255,250, 205); //0xfffacd;	// LemonChiffon 255 250 205
                }
                else

                {
                        retColor = AffiliationColors.UnknownUnitFillColor;//null;
                }


        }	// End else
        

        return retColor;
    };
    /**
     * 
     * @param {String} symbolID
     * @returns {armyc2.c2sd.renderer.utilities.Color} hex color like #FFFFFF
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getLineColorOfWeather = function(symbolID){
        var retColor = armyc2.c2sd.renderer.utilities.Color.BLACK;//Color.BLACK;
        // Get the basic id
        //String symbolID = SymbolUtilities.getBasicSymbolID(symbolID);

        if(symbolID === ("WAS-WSGRL-P----") || // Hail - Light not Associated With Thunder
            symbolID === ("WAS-WSGRMHP----") || // Hail - Moderate/Heavy not Associated with Thunder
            symbolID === ("WAS-PL----P----") || // Low Pressure Center - Pressure Systems
            symbolID === ("WAS-PC----P----") || // Cyclone Center - Pressure Systems
            symbolID === ("WAS-WSIC--P----") || // Ice Crystals (Diamond Dust)
            symbolID === ("WAS-WSPLL-P----") || // Ice Pellets - Light
            symbolID === ("WAS-WSPLM-P----") || // Ice Pellets - Moderate
            symbolID === ("WAS-WSPLH-P----") || // Ice Pellets - Heavy
            symbolID === ("WAS-WST-NPP----") || // Thunderstorm - No Precipication
            symbolID === ("WAS-WSTMR-P----") || // Thunderstorm Light to Moderate with Rain/Snow - No Hail
            symbolID === ("WAS-WSTHR-P----") || // Thunderstorm Heavy with Rain/Snow - No Hail
            symbolID === ("WAS-WSTMH-P----") || // Thunderstorm Light to Moderate - With Hail
            symbolID === ("WAS-WSTHH-P----") || // Thunderstorm Heavy - With Hail
            symbolID === ("WAS-WST-FCP----") || // Funnel Cloud (Tornado/Waterspout)
            symbolID === ("WAS-WST-SQP----") || // Squall
            symbolID === ("WAS-WST-LGP----") || // Lightning
            symbolID === ("WAS-WSFGFVP----") || // Fog - Freezing, Sky Visible
            symbolID === ("WAS-WSFGFOP----") || // Fog - Freezing, Sky not Visible
            symbolID === ("WAS-WSTSD-P----") || // Tropical Depression
            symbolID === ("WAS-WSTSS-P----") || // Tropical Storm
            symbolID === ("WAS-WSTSH-P----") || // Hurricane/Typhoon
            symbolID === ("WAS-WSRFL-P----") || // Freezing Rain - Light
            symbolID === ("WAS-WSRFMHP----") || // Freezing Rain - Moderate/Heavy
            symbolID === ("WAS-WSDFL-P----") || // Freezing Drizzle - Light
            symbolID === ("WAS-WSDFMHP----") || // Freezing Drizzle - Moderate/Heavy
            symbolID === ("WOS-HHDMDBP----") || //mine-naval (doubtful)
            symbolID === ("WOS-HHDMDFP----") || // mine-naval (definited)
            symbolID.substring(0,7) === ("WA-DPFW")  ||//warm front
            //symbolID.substring(0,7) === ("WA-DPFS")//stationary front (actually, it's red & blue)
            symbolID === ("WA-DBAIF----A--") || // INSTRUMENT FLIGHT RULE (IFR)
            symbolID === ("WA-DBAFP----A--") || // 
            symbolID === ("WA-DBAT-----A--") || // 
            symbolID === ("WA-DIPIS---L---") || // 
            symbolID === ("WA-DIPTH---L---") || // 
            symbolID === ("WA-DWJ-----L---") || // Jet Stream  
            symbolID === ("WO-DGMSB----A--") || //
            symbolID === ("WO-DGMRR----A--") ||
            symbolID === ("WO-DGMCH----A--") ||
            symbolID === ("WO-DGMIBE---A--") ||
            symbolID === ("WO-DGMBCC---A--") ||
            symbolID === ("WO-DOBVI----A--"))

        {
            retColor = armyc2.c2sd.renderer.utilities.Color.RED;//0xff0000;	// Red
        }
        else if(symbolID === ("WAS-PH----P----") || // High Pressure Center - Pressure Systems
                symbolID === ("WAS-PA----P----")  ||// Anticyclone Center - Pressure Systems
                symbolID === ("WA-DBAMV----A--")  ||// MARGINAL VISUAL FLIGHT RULE (MVFR)
                symbolID === ("WA-DBATB----A--")  ||// BOUNDED AREAS OF WEATHER / TURBULENCE
                symbolID.substring(0,5) === ("WAS-T")  ||// Turbulence
                symbolID.substring(0,7) === ("WA-DPFC") || //cold front
                symbolID === ("WO-DGMIBA---A--"))
        {
            retColor = armyc2.c2sd.renderer.utilities.Color.BLUE;
        }
        else if(
        symbolID === ("WAS-WSFGPSP----") || // Fog - Shallow Patches
        symbolID === ("WAS-WSFGCSP----") || // Fog - Shallow Continuous
        symbolID === ("WAS-WSFGP-P----") || // Fog - Patchy
        symbolID === ("WAS-WSFGSVP----") || // Fog - Sky Visible
        symbolID === ("WAS-WSFGSOP----") || // Fog - Sky Obscured
        symbolID === ("WA-DBAFG----A--") || // Fog
        symbolID === ("WO-DGMRM----A--") ||
        symbolID === ("WO-DGMCM----A--") ||
        symbolID === ("WO-DGMIBC---A--") ||
        symbolID === ("WO-DGMBCB---A--") ||
        symbolID === ("WO-DGMBTE---A--") ||
        symbolID === ("WAS-WSBR--P----")) // Mist
        {
            retColor = armyc2.c2sd.renderer.utilities.Color.YELLOW;//0xffff00;	// Yellow
        }
        else if(
        symbolID === ("WAS-WSFU--P----") || // Smoke
        symbolID === ("WAS-WSHZ--P----") || // Haze
        symbolID === ("WAS-WSDSLMP----") || // Dust/Sand Storm - Light to Moderate
        symbolID === ("WAS-WSDSS-P----") || // Dust/Sand Storm - Severe
        symbolID === ("WAS-WSDD--P----") || // Dust Devil
        symbolID === ("WA-DBAD-----A--") || // Dust or Sand
        symbolID === ("WAS-WSBD--P----")) // Blowing Dust or Sand
        {
            retColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString("#A52A2A");//armyc2.c2sd.renderer.utilities.Color.rgbToHexString(165,42,42);  //165 42 42 //0xa52a2a;	// Brown
        }
        else if(
        symbolID === ("WA-DBALPNC--A--") || // 
        symbolID === ("WA-DBALPC---A--") || // 
        symbolID === ("WA-DIPID---L---") || // 
        symbolID === ("WO-DHCF----L---") || // 
        symbolID === ("WO-DHCF-----A--") || //
        symbolID === ("WO-DGMSIM---A--") || //
        symbolID === ("WO-DGMRS----A--") ||
        symbolID === ("WO-DGMCL----A--") ||
        symbolID === ("WO-DGMIBB---A--") ||
        symbolID === ("WO-DGMBCA---A--") || 
        symbolID === ("WAS-WSR-LIP----") || // Rain - Intermittent Light
        symbolID === ("WAS-WSR-LCP----") || // Rain - Continuous Light
        symbolID === ("WAS-WSR-MIP----") || // Rain - Intermittent Moderate
        symbolID === ("WAS-WSR-MCP----") || // Rain - Continuous Moderate
        symbolID === ("WAS-WSR-HIP----") || // Rain - Intermittent Heavy
        symbolID === ("WAS-WSR-HCP----") || // Rain - Continuous Heavy
        symbolID === ("WAS-WSRSL-P----") || // Rain Showers - Light
        symbolID === ("WAS-WSRSMHP----") || // Rain Showers - Moderate/Heavy
        symbolID === ("WAS-WSRST-P----") || // Rain Showers - Torrential
        symbolID === ("WAS-WSD-LIP----") || // Drizzle - Intermittent Light
        symbolID === ("WAS-WSD-LCP----") || // Drizzle - Continuous Light
        symbolID === ("WAS-WSD-MIP----") || // Drizzle - Intermittent Moderate
        symbolID === ("WAS-WSD-MCP----") || // Drizzle - Continuous Moderate
        symbolID === ("WAS-WSD-HIP----") || // Drizzle - Intermittent Heavy
        symbolID === ("WAS-WSD-HCP----") || // Drizzle - Continuous Heavy
        symbolID === ("WAS-WSM-L-P----") || // Rain or Drizzle and Snow - Light
        symbolID === ("WAS-WSM-MHP----") || // Rain or Drizzle and Snow - Moderate/Heavy
        symbolID === ("WAS-WSMSL-P----") || // Rain and Snow Showers - Light
        symbolID === ("WAS-WSMSMHP----") || // Rain and Snow Showers - Moderate/Heavy
        symbolID === ("WAS-WSS-LIP----") || // Snow - Intermittent Light
        symbolID === ("WAS-WSS-LCP----") || // Snow - Continuous Light
        symbolID === ("WAS-WSS-MIP----") || // Snow - Intermittent Moderate
        symbolID === ("WAS-WSS-MCP----") || // Snow - Continuous Moderate
        symbolID === ("WAS-WSS-HIP----") || // Snow - Intermittent Heavy
        symbolID === ("WAS-WSS-HCP----") || // Snow - Continuous Heavy
        symbolID === ("WAS-WSSBLMP----") || // Blowing Snow - Light/Moderate
        symbolID === ("WAS-WSSBH-P----") || // Blowing Snow - Heavy
        symbolID === ("WAS-WSSG--P----") || // Snow Grains
        symbolID === ("WAS-WSSSL-P----") || // Snow Showers - Light
        symbolID === ("WAS-WSSSMHP----") || // Snow Showers - Moderate/Heavy
        symbolID === ("WAS-WSUKP-P----")) // PRECIPITATION OF UNKNOWN TYPE AND INTENSITY
        {
            //Color.GREEN;// 0x00ff00;	// Green
            retColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString("#00FF00");
        }
        else if(symbolID === ("WOS-HDS---P----")|| // Soundings
            symbolID === ("WOS-HHDF--P----")||//foul ground
            symbolID === ("WO-DHHDF----A--")||//foul ground
            symbolID === ("WOS-HPFS--P----")||//fish stakes/traps/weirs
            symbolID === ("WOS-HPFS---L---")||//fish stakes
            symbolID === ("WOS-HPFF----A--")||//fish stakes/traps/weirs
            symbolID === ("WO-DHDDL---L---")||//depth curve
            symbolID===("WO-DHDDC---L---")||//depth contour
            symbolID===("WO-DHCC----L---")||//coastline
            symbolID===("WO-DHPBP---L---")||//ports
            symbolID===("WO-DHPMO---L---")||//offshore loading
            symbolID===("WO-DHPSPA--L---")||//sp above water
            symbolID===("WO-DHPSPB--L---")||//sp below water
            symbolID===("WO-DHPSPS--L---")||//sp sea wall
            symbolID===("WO-DHHDK--P----")||//kelp seaweed
            symbolID===("WO-DHHDK----A--")||//kelp seaweed
            symbolID===("WO-DHHDB---L---")||//breakers
            symbolID===("WO-DTCCCFE-L---")||//current flow - ebb
            symbolID===("WO-DTCCCFF-L---")||//current flow - flood
            symbolID===("WOS-TCCTD-P----")||//tide data point
            symbolID === ("WO-DHCW-----A--") ||
            symbolID === ("WO-DMOA-----A--") ||
            symbolID === ("WO-DHCW-----A--"))//water
            retColor = armyc2.c2sd.renderer.utilities.Color.GRAY;//0x808080;	// Gray
        else if(
                    symbolID.equals("WO-DBSM-----A--") ||
                    symbolID.equals("WO-DBSF-----A--") ||
                    symbolID.equals("WO-DGMN-----A--")) // 
        {
                retColor = new armyc2.c2sd.renderer.utilities.Color(230,230,230);//230,230,230;	// light gray
        }
        else if(
                    symbolID.equals("WO-DBSG-----A--")) // 
        {
                retColor = new armyc2.c2sd.renderer.utilities.Color(169,169,169);//169,169,169;	// dark gray
        }
        else if(
        symbolID === ("WAS-WSVE--P----") || // Volcanic Eruption
        symbolID === ("WAS-WSVA--P----") || // Volcanic Ash
        symbolID === ("WAS-WST-LVP----") || // Tropopause Level
        symbolID === ("WAS-WSF-LVP----")) // Freezing Level
        {
                retColor = armyc2.c2sd.renderer.utilities.Color.BLACK;//0x000000;	// Black
        }
        else if(
        symbolID === ("WOS-HPBA--P----") || // anchorage
        symbolID === ("WOS-HPBA---L---") || // anchorage
        symbolID === ("WOS-HPBA----A--") || // anchorage
        symbolID === ("WOS-HPCP--P----") || // call in point
        symbolID === ("WOS-HPFH--P----") || // fishing harbor
        symbolID === ("WOS-HPM-FC-L---") ||//ferry crossing
        symbolID === ("WOS-HABM--P----") ||//marker
        symbolID === ("WOS-HAL---P----") ||//light
        symbolID === ("WA-DIPIT---L---") ||//ISOTACH
        symbolID === ("WOS-TCCTG-P----") || // Tide gauge
        symbolID === ("WO-DL-ML---L---") ||
        symbolID === ("WOS-HPM-FC-L---") ||
        symbolID === ("WO-DL-RA---L---") ||
        symbolID === ("WO-DHPBA---L---") ||
        symbolID === ("WO-DMCA----L---") ||
        symbolID === ("WO-DHPBA----A--") ||
        symbolID === ("WO-DL-MA----A--") ||
        symbolID === ("WO-DL-SA----A--") ||
        symbolID === ("WO-DL-TA----A--") ||
        symbolID === ("WO-DGMSR----A--")) 
        {
            retColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString("#FF00FF");//armyc2.c2sd.renderer.utilities.Color.rgbToHexString(255,0,255);//magenta
        }
        else if(symbolID.substring(0,7) === ("WA-DPFO")//occluded front
        )
        {
            retColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString("#E29FFF");//armyc2.c2sd.renderer.utilities.Color.rgbToHexString(226,159,255);//light purple
        }
        else if(
        symbolID === ("WA-DPXITCZ-L---") || // inter-tropical convergance zone oragne?
        symbolID === ("WO-DL-O-----A--") ||
        symbolID === ("WA-DPXCV---L---")) // 
        {
            retColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString("#FF7F00");//armyc2.c2sd.renderer.utilities.Color.rgbToHexString(255,127,0);//bright orange
        }
        else if(symbolID ===("WA-DBAI-----A--") || //BOUNDED AREAS OF WEATHER / ICING
                symbolID.indexOf("WAS-IC") === 0 || // Clear Icing
                symbolID.indexOf("WAS-IR") === 0  ||// Rime Icing
                symbolID.indexOf("WAS-IM") === 0) // Mixed Icing
        {
            retColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString("#806010");//armyc2.c2sd.renderer.utilities.Color.rgbToHexString(128,96,16);//mud?
        }
        else if(
        symbolID===("WO-DHCI-----A--") || //Island
        symbolID===("WO-DHCB-----A--") || //Beach
        symbolID===("WO-DHPMO---L---")||//offshore loading"
        symbolID===("WO-DHCI-----A--")) // mixed icing
        {
            retColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString("#D2B06A");//armyc2.c2sd.renderer.utilities.Color.rgbToHexString(210,176,106);//light/soft brown
        }
        else if(symbolID.substring(0,7).equals("WO-DOBVA----A--")
        )
        {
            retColor = new armyc2.c2sd.renderer.utilities.Color(26,153,77);//dark green
        }
        else if(symbolID.substring(0,7).equals("WO-DGMBTI---A--")
        )
        {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255,48,0);//orange red
        }
        else if(symbolID.substring(0,7).equals("WO-DGMBTH---A--")
        )
        {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255,80,0);//dark orange
        }
        //255,127,0
        //WO-DGMBTG---A--
        else if (symbolID === ("WO-DGMBTG---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 127, 0);
        }
        //255,207,0
        //WO-DGMBTF---A--
        else if (symbolID === ("WO-DGMBTF---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 207, 0);
        }
        //048,255,0
        //WO-DGMBTA---A--
        else if (symbolID === ("WO-DGMBTA---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(48, 255, 0);
        }
        //220,220,220
        //WO-DGML-----A--
        else if (symbolID === ("WO-DGML-----A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(220, 220, 220);
        }
        //255,220,220
        //WO-DGMS-SH--A--
        else if (symbolID === ("WO-DGMS-SH--A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 220, 220);
        }
        //255,190,190
        //WO-DGMS-PH--A--
        else if (symbolID === ("WO-DGMS-PH--A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 190, 190);
        }
        //lime green 128,255,51
        //WO-DOBVC----A--
        else if (symbolID === ("WO-DOBVC----A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(128, 255, 51);
        }
        //255,255,0
        //WO-DOBVE----A--
        else if (symbolID === ("WO-DOBVE----A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 255, 0);
        }
        //255,150,150
        //WO-DGMS-CO--A--
        else if (symbolID === ("WO-DGMS-CO--A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 150, 150);
        }
        //175,255,0
        //WO-DGMBTC---A--
        else if (symbolID === ("WO-DGMBTC---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(175, 255, 0);
        }
        //207,255,0
        //WO-DGMBTD---A--
        else if (symbolID === ("WO-DGMBTD---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(207, 255, 0);
        }
        //127,255,0
        //WO-DGMBTB---A--
        else if (symbolID === ("WO-DGMBTB---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(127, 255, 0);
        }
        //255,127,0
        //WO-DGMIBD---A--
        else if (symbolID === ("WO-DGMIBD---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 127, 0);
        }
        else if (symbolID === ("WO-DGMSIF---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(25, 255, 230);
        }
        //0,215,255
        //WO-DGMSIVF--A--
        else if (symbolID === ("WO-DGMSIVF--A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(0, 215, 255);
        }
        //255,255,220
        //WO-DGMSSVF--A--
        else if (symbolID === ("WO-DGMSSVF--A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 255, 220);
        }
        //255,255,140
        //WO-DGMSSF---A--
        else if (symbolID === ("WO-DGMSSF---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 255, 140);
        }
        //255,235,0
        //WO-DGMSSM---A--
        else if (symbolID === ("WO-DGMSSM---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 235, 0);
        }
        //255,215,0
        //WO-DGMSSC---A--
        else if (symbolID === ("WO-DGMSSC---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 215, 0);
        }
        //255,180,0
        //WO-DGMSSVS--A--
        else if (symbolID === ("WO-DGMSSVS--A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 180, 0);
        }
        //200,255,105
        //WO-DGMSIC---A--
        else if (symbolID === ("WO-DGMSIC---A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(200, 255, 105);
        }
        //100,130,255
        //WO-DGMSC----A--
        else if (symbolID === ("WO-DGMSC----A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(100, 130, 255);
        }
        //255,77,0
        //WO-DOBVH----A--
        else if (symbolID === ("WO-DOBVH----A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 77, 0);
        }
        //255,128,0
        //WO-DOBVG----A--
        else if (symbolID === ("WO-DOBVG----A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 128, 0);
        }
        //255,204,0
        //WO-DOBVF----A--
        else if (symbolID === ("WO-DOBVF----A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(255, 204, 0);
        }
        //204,255,26
        //WO-DOBVD----A--
        else if (symbolID === ("WO-DOBVD----A--")) {
            retColor = new armyc2.c2sd.renderer.utilities.Color(204, 255, 26);
        }
        else
        {
            retColor = armyc2.c2sd.renderer.utilities.Color.BLACK;//0x000000;	// Black
        }

        return retColor;
    };
    /**
     * 
     * @param {String} symbolID
     * @returns {armyc2.c2sd.renderer.utilities.Color} hex color like #FFFFFF
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getFillColorOfWeather = function(symbolID){
        if(symbolID === ("WOS-HPM-R-P----"))//landing ring - brown 148,48,0
            return new armyc2.c2sd.renderer.utilities.Color(148,48,0);
        else if(symbolID === ("WOS-HPD---P----"))//dolphin facilities - brown
            return new armyc2.c2sd.renderer.utilities.Color(148,48,0);
        else if(symbolID === ("WO-DHCB-----A--"))//
            return new armyc2.c2sd.renderer.utilities.Color(249,243,241);
        else if(symbolID === ("WOS-HABB--P----"))//buoy default - 255,0,255
            return new armyc2.c2sd.renderer.utilities.Color(255,0,255);//magenta
        else if(symbolID === ("WOS-HHRS--P----"))//rock submerged - 0,204,255
            return new armyc2.c2sd.renderer.utilities.Color(0,204,255);//a type of blue
        else if(symbolID === ("WOS-HHDS--P----"))//snags/stumps - 0,204,255
            return new armyc2.c2sd.renderer.utilities.Color(0,204,255);
        else if(symbolID === ("WOS-HHDWB-P----"))//wreck - 0,204,255
            return new armyc2.c2sd.renderer.utilities.Color(0,204,255);
        else if(symbolID === ("WOS-TCCTG-P----"))//tide gauge - 210, 176, 106
            return new armyc2.c2sd.renderer.utilities.Color(210,176,106);
        else if(symbolID === ("WO-DHCW-----A--"))//water
            return new armyc2.c2sd.renderer.utilities.Color(255,255,255);
        else if (symbolID === ("WO-DHABP----A--") ||
            symbolID === ("WO-DHHD-----A--") ||
            symbolID === ("WO-DHHDD----A--") ||
            symbolID === ("WO-DMCC-----A--")) 
        {
            return new armyc2.c2sd.renderer.utilities.Color(0,0,255);
        }
        else if(symbolID === ("WO-DHPMD----A--"))//drydock
            return new armyc2.c2sd.renderer.utilities.Color(188,153,58);
        else return null;
    };
    
    /**
    *
    * @param hexValue - String representing hex value
    * (formatted "0xRRGGBB" i.e. "0xFFFFFF")
    * OR
    * formatted "0xAARRGGBB" i.e. "0x00FFFFFF" for a color with an alpha value
    * I will also put up with "RRGGBB" and "AARRGGBB" without the starting "0x"
    * @return
    */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getColorFromHexString = function(hexValue)
    {
        //var hexOriginal = new String(hexValue);

        var hexAlphabet = "0123456789ABCDEF";

        if(hexValue.charAt(0)==='#')
            hexValue = hexValue.substring(1);
        if(hexValue.substring(0,2)===("0x") || hexValue.substring(0,2)===("0X"))
            hexValue = hexValue.substring(2);

        hexValue = hexValue.toUpperCase();

        var count = hexValue.length,
            value = null,
            k = 0,
            int1 = 0,
            int2 = 0;

        if(count === 8 || count === 6)
        {
            value = new Array();//int[(count / 2)];
            for(var i=0; i<count;i+=2)
            {
                    int1 = hexAlphabet.indexOf(hexValue.charAt(i));
                    int2 = hexAlphabet.indexOf(hexValue.charAt(i+1));
                    value[k]=(int1 * 16) + int2;
                    k++;
            }

            if(count === 8)
            {
                    return new armyc2.c2sd.renderer.utilities.Color(value[1],value[2],value[3],value[0]);
            }
            else if(count === 6)
            {
                    return new armyc2.c2sd.renderer.utilities.Color(value[0],value[1],value[2]);
            }
        }
        else
        {       
                //ErrorLogger.LogMessage("SymbolUtilties", "getColorFromHexString", "Bad hex value: " + hexOriginal, Level.WARNING);
        }
        return null;
    };
    
    /**
     * Determines if the symbol is a tactical graphic
     * @param {String} strSymbolID
     * @returns {Boolean} true if symbol starts with "G", or is a weather graphic, or an EMS natural event
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isTacticalGraphic = function (strSymbolID){
       
        if(strSymbolID && 
                ((strSymbolID.charAt(0)===('G')) || (strSymbolID.charAt(0)===('W')) 
                || this.isEMSNaturalEvent(strSymbolID)))
        {
          return true;
        }
      
        return false;
    };
    /**
     * Determines if symbols is a warfighting symbol.
     * @param {String} strSymbolID
     * @returns {Boolean} True if code starts with "O", "S", or "I". (or "E" in 2525C)
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isWarfighting = function (strSymbolID){
        
        if(!strSymbolID) // Error handling
        {
          return false;
        }
        var scheme = strSymbolID.charAt(0);
        if((scheme===('O')) || (scheme===('S')) ||
                (scheme===('I')) || (scheme===('E') && strSymbolID[2] !== 'N'))
        {
          return true;
        }

        return false;
    };
    /**
     * 
     * @param {String} strSymbolID
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isWeather = function (strSymbolID){

        if(strSymbolID.charAt(0) === ('W'))
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    /**
     * 
     * @param {String} text
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isNumber = function (text){
        var re = new RegExp("((-|\\+)?[0-9]+(\\.[0-9]+)?)+");
        return(re.test(text));
    };
    /**
     * Symbols that don't exist outside of MCS
     * @param {symbolDef} sd
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isMCSSpecificTacticalGraphic = function (sd){
        
        
        if(sd !== undefined && sd !== null && 
                sd.hierarchy !== undefined && sd.basicSymbolID !== undefined)
        {
            var hierarchy = sd.hierarchy;
            var basicSymbolID = sd.symbolID;
        
            if(hierarchy.substring(0,5)===("2.X.7") || //Engineering Overlay graphics (ESRI----)
                hierarchy.substring(0,9)===("2.X.5.2.3") || //Route Critical Points
                basicSymbolID.substring(0,4)===("G*R*") || //Route Critical Points
                hierarchy.substring(0,4)===("21.X") || //JCID (21.X)
                basicSymbolID.substring(0,4)("G*E*"))//MCS Eng (20.X)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        return false;
    };
    /**
     * Symbols that don't exist outside of MCS
     * or units that are no longer supported like
     * those from the SASO Proposal.
     * @param {unitDef} ud
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isMCSSpecificForceElement = function (ud){
        if(this.isSASO(ud))
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    /**
     * Just checks the symbolID if it could be rendered in 3D.  Does not check
     * for needed modifiers.
     * @param {String} symbolID
     * @returns {Boolean}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.is3dGraphic = function(symbolID)  {
        var symbolId = symbolID.substring(4, 10);

        if (symbolId === "ACAI--" || // Airspace Coordination Area Irregular
            symbolId === "ACAR--" || // Airspace Coordination Area Rectangular
            symbolId === "ACAC--" || // Airspace Coordination Area Circular
            symbolId === "AKPC--" || // Kill box circular
            symbolId === "AKPR--" || // Kill box rectangular
            symbolId === "AKPI--" || // Kill box irregular
            symbolId === "ALC---" || // Air corridor
            symbolId === "ALM---" || // 
            symbolId === "ALS---" || // SAAFR
            symbolId === "ALU---" || // UAV
            symbolId === "ALL---" || // Low level transit route
            symbolId === "AAR---" ||
            symbolId === "AAF---" ||
            symbolId === "AAH---" ||
            symbolId === "AAM---" || // MEZ
            symbolId === "AAML--" || // LOMEZ
            symbolId === "AAMH--")
        {
            return true;
        }
        else
        {
           return false;
        }
    };
    /**
     * 
     * @param {String} symbolID
     * @returns {Boolean}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.is3dAirspace = function(symbolID)  {

        if(symbolID===("CYLINDER-------") ||
            symbolID===("ORBIT----------") ||
            symbolID===("ROUTE----------") ||
            symbolID===("POLYGON--------") ||
            symbolID===("RADARC---------") ||
            symbolID===("POLYARC--------") ||
            symbolID===("CAKE-----------") ||
            symbolID===("TRACK----------") ||
            symbolID===("CURTAIN--------"))
        {
            return true;
        }
        else
        {
           return false;
        }
    };
    /**
     * 
     * @param {symbolDef} sd
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isSASO = function (sd){
        var hierarchy = sd.hierarchy;
        if(hierarchy.length >5 &&
                (hierarchy.indexOf("5.X.10") === 0 || //SASOP Individuals
                hierarchy.indexOf("5.X.11") === 0 || //SASOP Organization/groups
                hierarchy.indexOf("5.X.12") === 0 ||//SASOP //replaced by USAS 13-14 update
                hierarchy.indexOf("5.X.13") === 0 || //SASOP Structures
                hierarchy.indexOf("5.X.14") === 0)) //SASOP Equipment/Weapons
         {
             return true;
         }
         else
             return false;
    };
    /**
     * 
     * @param {String} strSymbolID
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isMOOTW = function (strSymbolID){
        
        if(strSymbolID.charAt(0) === ('O'))
        {
          return true;
        }
        else
        {
          return false;
        }
    };
    /**
     * 
     * @param {String} strSymbolID
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isSTBOPS = function (strSymbolID){
        
        if(strSymbolID.substring(0, 1) === ('O'))
        {
          return true;
        }
        else
        {
          return false;
        }
    };
    /**
     * 
     * @param {String} strSymbolID
     * @returns {Boolean}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isEvent = function(strSymbolID)
    {
        
        var arr = null;
        var category = strSymbolID.charAt(2);
        var strBasicSymbolID = this.getBasicSymbolID(strSymbolID);
        if(this.isMOOTW(strSymbolID) || 
                (this.isEMS(strSymbolID) && 
                      (category === 'I' || category === 'N' || category === 'O')))
            return true;
        else
        {
            arr = new Array("S*G*EXI---*****",
                                     "S*G*EXI---MO***");
            var arrLength = arr.length;
            for(var i = 0; i < arrLength; i++)
            {
                if(arr[i] === (strBasicSymbolID))
                {
                  return true;
                }
            }
        }
        
        return false;
    }; 
                
    /**
     * Determines if the symbol id passed in contains a flag for one of the
     * various HQ options Pos 11 of the symbol code
     * @param {String} strSymbolID
     * @returns {Boolean}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isHQ = function (strSymbolID){
        
        var hq = strSymbolID.charAt(10);
        var blRetVal = (hq===('A')
                        || hq===('B')
                            || hq===('C') || hq===('D'));
        return blRetVal;
    };
    /**
     * 
     * @param {String} strSymbolID
     * @returns {Boolean}
     */        
   armyc2.c2sd.renderer.utilities.SymbolUtilities.isTaskForce = function(strSymbolID){
        
        var tf = strSymbolID.charAt(10);
        // Return whether or not task force is included in the symbol id.
        var blRetVal = (tf===('B')
                            || tf===('D')
                                || tf===('E') || tf===('G'));
        return blRetVal;
    };
    /**
     * 
     * @param {String} strSymbolID
     * @returns {Boolean}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isFeintDummy = function(strSymbolID){
        
        var fd = strSymbolID.charAt(10);
        // Return whether or not task force is included in the symbol id.
        var blRetVal = (fd===('C')
                            || fd===('D')
                                || fd===('F') || fd===('G'));
        return blRetVal;
    };
            
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isMobility = function(strSymbolID){

        var mobility = strSymbolID.substring(10, 12);
        if(mobility===("MO") ||
              mobility===("MP") ||
              mobility===("MQ") ||
              mobility===("MR") ||
              mobility===("MS") ||
              mobility===("MT") ||
              mobility===("MU") ||
              mobility===("MV") ||
              mobility===("MW") ||
              mobility===("MX") ||
              mobility===("MY") ||
              mobility===("NS") ||
              mobility===("NL"))
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    /**
     * 
     * @param {String} strSymbolID
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isObstacle = function(strSymbolID){
        
          // An Obstacle is denoted by the symbol code "G*M*O"
          // So see if it is a tactical graphic then check to see
          // if we have the M and then the O in the correct position.
          var blRetVal = ((strSymbolID.charAt(0) === ('G')) && ((strSymbolID.charAt(2) === ('M')) && (strSymbolID.charAt(4) === ('O'))));
          return blRetVal;
    };
    /**
     * 
     * @param {String} strSymbolID
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isNBC = function (strSymbolID){
       
        //var temp = this.getBasicSymbolID(strSymbolID),
        //var blRetVal = (temp.substring(0, 5) === ("G*M*N"));         
        var blRetVal = ((strSymbolID.charAt(0) === ('G')) && ((strSymbolID.charAt(2) === ('M')) && (strSymbolID.charAt(4) === ('N'))));
        return blRetVal;

    };
    /**
     * 
     * @param {String} strSymbolID
     * @returns {Boolean}
     */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isDeconPoint = function (strSymbolID){
        
          var blRetVal = ((this.isNBC(strSymbolID)) && (strSymbolID.substring(4, 6) === ("ND")));
          return blRetVal;
     };
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isCheckPoint = function (strSymbolID){
        var basicID = this.getBasicSymbolID(strSymbolID);
        var blRetVal = false;
        if(basicID===("G*G*GPPE--****X")//release point
          || basicID===("G*G*GPPK--****X")//check point
          || basicID===("G*G*GPPS--****X"))//start point
        {
          blRetVal = true;
        }
        return blRetVal;
     };
    /**
    * Reads the Symbol ID string and returns the text that represents the echelon
    * code.
    * @param {String} echelon
    * @returns {String}
    */             
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getEchelonText = function(echelon){

        var text = null;
        if(echelon === ("A"))
        {
            text = "0";
        }
        else if(echelon === ("B"))
        {
            text = String.fromCharCode(8226);//8226
        }
        else if(echelon === ("C"))
        {
            text = String.fromCharCode(8226,8226);//8226
        }
        else if(echelon === ("D"))
        {
            text = String.fromCharCode(8226,8226,8226);//8226
        }
        else if(echelon === ("E"))
        {
            text = "|";
        }
        else if(echelon === ("F"))
        {
            text = "||";
        }
        else if(echelon === ("G"))
        {
            text = "|||";
        }
        else if(echelon === ("H"))
        {
            text = "X";
        }
        else if(echelon === ("I"))
        {
            text = "XX";
        }
        else if(echelon === ("J"))
        {
            text = "XXX";
        }
        else if(echelon === ("K"))
        {
            text = "XXXX";
        }
        else if(echelon === ("L"))
        {
            text = "XXXXX";
        }
        else if(echelon === ("M"))
        {
            text = "XXXXXX";
        }
        else if(echelon === ("N"))
        {
            text = "++";
        }
        return text;
    };
    /**
     * 
     * @param {string} strSymbolID
     * @returns {boolean}
     */        
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isUnit = function (strSymbolID){
        
          var blRetVal = ((strSymbolID.charAt(0) === ('S')) && 
                                (strSymbolID.charAt(2) === ('G')) &&
                                (strSymbolID.charAt(4) === ('U')));
          return blRetVal;
        
    };
    /**
     * 
     * 
     * @param {string} strSymbolID 
     * @param {number} symStd 
     * @returns {boolean} 
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isTGWithControlPoints = function (strSymbolID, symStd){
        
        if(symStd!==undefined)
        {
            symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
        }

        var temp = this.getBasicSymbolID(strSymbolID);
        var sd = armyc2.c2sd.renderer.utilities.SymbolDefTable.GetSymbolDef(temp,symStd);

        if (sd !== null && 
                sd.getDrawCategory() === armyc2.c2sd.renderer.utilities.SymbolDefTable.DRAW_CATEGORY_ROUTE)
        {
            return true;
        }
        else
        {
          return false;//blRetVal;
        }
        
    };
    /**
     * There's a handful of single point tactical graphics with unique
     * modifier positions.
     * @param {String} strSymbolID
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isTGSPWithSpecialModifierLayout = function (strSymbolID){
        var temp = this.getBasicSymbolID(strSymbolID);
      
        var blRetVal = (temp === ("G*G*GPH---****X"))//Harbor(General) - center
        || (temp === ("G*G*GPPC--****X")) //Contact Point - center
        || (temp === ("G*G*GPPD--****X"))//Decisions Point - center
        || (temp === ("G*G*GPPW--****X")) //Waypoint - right of center
        || (temp === ("G*G*APP---****X"))//ACP - circle, just below center
        || (temp === ("G*G*APC---****X"))//CCP - circle, just below center
        || (temp === ("G*G*DPT---****X")) //Target Reference - target special
        || (temp === ("G*F*PTS---****X"))//Point/Single Target - target special
        || (temp === ("G*F*PTN---****X"))//Nuclear Target - target special
        || (temp === ("G*F*PCF---****X")) //Fire Support Station - right of center
        || (temp === ("G*M*NZ----****X")) //NUCLEAR DETINATIONS GROUND ZERO
        || (temp === ("G*M*NEB---****X"))//BIOLOGICAL
        || (temp === ("G*M*NEC---****X"))//CHEMICAL
        || (temp === ("G*G*GPRI--****X"))//Point of Interest
        || (temp === ("G*M*OFS---****X"));//Minefield
      return blRetVal;
    };
    /**
     * Is a single point tactical graphic that has integral text (like the NBC
     * single points)
     * @param {String} strSymbolID
     * @returns {Boolean}
     */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isTGSPWithIntegralText = function (strSymbolID){
         var temp = this.getBasicSymbolID(strSymbolID);

        // ErrorLogger.LogMessage("SU", "integraltext?", temp);

         var blRetVal = (temp === ("G*G*GPRD--****X"))//DLRP (D)
           || (temp === ("G*G*APU---****X")) //pull-up point (PUP)
           || (temp === ("G*M*NZ----****X")) //Nuclear Detonation Ground Zero (N)
           || (temp === ("G*M*NF----****X"))//Fallout Producing (N)
           || (temp === ("G*M*NEB---****X"))//Release Events Chemical (BIO, B)
           || (temp === ("G*M*NEC---****X"));//Release Events Chemical (CML, C)

         //if(temp === ("G*G*GPRD--****X"))
         //    ErrorLogger.LogMessage("DLRP");

         return blRetVal;//blRetVal;
     };
    /**
     * Is a single point tactical graphic that has integral text (like the NBC
     * single points)
     * @param {String} strSymbolID
     * @returns {Boolean}
     */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isTGSPWithFill = function (strSymbolID){
         var temp = this.getBasicSymbolID(strSymbolID),
         blRetVal = this.isDeconPoint(temp)//Decon Points
          || temp.substring(0,5)===("G*S*P")//TG/combat service support/points
          ||(temp === ("G*G*GPP---****X"))//Action points (general)
          || (temp === ("G*G*GPPK--****X"))//Check Point
          || (temp === ("G*G*GPPL--****X"))//Linkup Point
          || (temp === ("G*G*GPPP--****X"))//Passage Point
          || (temp === ("G*G*GPPR--****X"))//Rally Point
          || (temp === ("G*G*GPPE--****X"))//Release Point
          || (temp === ("G*G*GPPS--****X"))//Start Point
          || (temp === ("G*G*GPPA--****X"))//Amnesty Point
          || (temp === ("G*G*GPPN--****X"))//Entry Control Point
          || (temp === ("G*G*APD---****X"))//Down Aircrew Pickup Point
          || (temp === ("G*G*OPP---****X"))//Point of Departure
          || (temp === ("G*F*PCS---****X"))//Survey Control Point
          || (temp === ("G*F*PCB---****X"))//Firing Point
          || (temp === ("G*F*PCR---****X"))//Reload Point
          || (temp === ("G*F*PCH---****X"))//Hide Point
          || (temp === ("G*F*PCL---****X"))//Launch Point
          || (temp === ("G*M*BCP---****X"))//Engineer Regulating Point
          || (temp === ("G*O*ES----****X"))//Emergency Distress Call
              
          //star
          || (temp.substring(0,9)===("G*G*GPPD-"))//Decision Point    

          //circle
          || (temp === ("G*G*GPPO--****X"))//Coordination Point
          || (temp === ("G*G*APP---****X"))//ACP
          || (temp === ("G*G*APC---****X"))//CCP
          || (temp === ("G*G*APU---****X"))//PUP

          //circle with squiggly
          || (temp.substring(0,8)===("G*G*GPUY"))//SONOBUOY and those that fall under it
              
          //reference point
          || ((temp.substring(0,7)===("G*G*GPR") && temp.charAt(7) !== 'I'))

          //NBC
          || (temp === ("G*M*NEB---****X"))//BIO
          || (temp === ("G*M*NEC---****X")) //CHEM
          || (temp === ("G*M*NF----****X")) //fallout producing
          || (temp === ("G*M*NZ----****X"));//NUC

        return blRetVal;
     };
    /**
     * 
     * @param {String} strSymbolID
     * @returns {Boolean}
     */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.hasDefaultFill = function(strSymbolID){
        if(this.isTacticalGraphic(strSymbolID))
        {
                var temp = this.getBasicSymbolID(strSymbolID);
                //SymbolDef sd = SymbolDefTable.getInstance().getSymbolDef(temp);
                if((temp === ("G*M*NEB---****X"))//BIO
                    || (temp === ("G*M*NEC---****X")) //CHEM
                   // || (temp === ("G*M*NF----****X")) //fallout producing
                    || (temp === ("G*M*NZ----****X")))//NUC)
                {
                    return true;
                }
                else
                    return false;
        }
        else
            return true;
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {String}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.getTGFillSymbolCode = function (strSymbolID){
        var temp = this.getBasicSymbolID(strSymbolID);
        if(temp === ("G*M*NEB---****X"))
            return "NBCBIOFILL****X";
        if(temp === ("G*M*NEC---****X"))
            return "NBCCMLFILL****X";
        if(temp === ("G*M*NZ----****X") || temp === ("G*M*NF----****X"))
            return "NBCNUCFILL****X";
        if(temp.substring(0,8)===("G*G*GPUY"))
            return "SONOBYFILL****X";
        if((temp === ("G*G*GPPO--****X"))//Coordination Point
            || (temp === ("G*G*APP---****X"))//ACP
            || (temp === ("G*G*APC---****X"))//CCP
            || (temp === ("G*G*APU---****X")))//PUP)
        {
            return "CPOINTFILL****X";
        }
        if(this.isDeconPoint(temp)//Decon Points
            || temp.substring(0,5)===("G*S*P")//TG/combat service support/points
            || (temp === ("G*G*GPP---****X"))//Action points (general)
            || (temp === ("G*G*GPPK--****X"))//Check Point
            || (temp === ("G*G*GPPL--****X"))//Linkup Point
            || (temp === ("G*G*GPPP--****X"))//Passage Point
            || (temp === ("G*G*GPPR--****X"))//Rally Point
            || (temp === ("G*G*GPPE--****X"))//Release Point
            || (temp === ("G*G*GPPS--****X"))//Start Point
            || (temp === ("G*G*GPPA--****X"))//Amnesty Point
            || (temp === ("G*G*APD---****X"))//Down Aircrew Pickup Point
            || (temp === ("G*G*OPP---****X"))//Point of Departure
            || (temp === ("G*F*PCS---****X"))//Survey Control Point
            || (temp === ("G*F*PCB---****X"))//Firing Point
            || (temp === ("G*F*PCR---****X"))//Reload Point
            || (temp === ("G*F*PCH---****X"))//Hide Point
            || (temp === ("G*F*PCL---****X"))//Launch Point
            || (temp === ("G*G*GPPN--****X"))//Entry Control Point
            || (temp === ("G*O*ES----****X"))//Emergency Distress Call
            || (temp === ("G*M*BCP---****X")))//Engineer Regulating Point
        {
            return "CHKPNTFILL****X";
        }
        if(temp.substring(0,7)===("G*G*GPR") && temp.charAt(7) !== 'I')
        {
            return "REFPNTFILL****X";
        }
        if(temp.substring(0,8)===("G*G*GPPD"))
        {
            return "DECPNTFILL****X";
        }


        return null;
     };
     /**
      * 
      * @param {String} symbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isWeatherSPWithFill = function (symbolID){
        if(symbolID===("WOS-HPM-R-P----") ||//landing ring - brown 148,48,0
            symbolID===("WOS-HPD---P----")||//dolphin facilities - brown
            symbolID===("WOS-HABB--P----")||//buoy default - 255,0,255
            symbolID===("WOS-HHRS--P----")||//rock submerged - 0,204,255
            symbolID===("WOS-HHDS--P----")||//snags/stumps - 0,204,255
            symbolID===("WOS-HHDWB-P----")||//wreck - 0,204,255
            symbolID===("WOS-TCCTG-P----"))//tide gauge - 210, 176, 106
             return true;
         else
             return false;
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isSOF = function (strSymbolID){
       try
       {
         var blRetVal = ((strSymbolID.charAt(0)===('S')) && (strSymbolID.charAt(2)===('F')));
         return blRetVal;
       }
       catch(t)
       {
         //System.out.println(t);
       }
       return false;
     };
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isSonobuoy = function (strSymbolID){
        
        var basic = this.getBasicSymbolID(strSymbolID);
        var blRetVal = (basic.substring(0, 8)==="G*G*GPUY");
        return blRetVal;
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isSeaSurface = function (strSymbolID){

        var blRetVal = ((strSymbolID.charAt(0)===('S')) && (strSymbolID.charAt(2)===('S')));
        return blRetVal;

     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isSubSurface = function (strSymbolID){
            var blRetVal = ((strSymbolID.charAt(0)===('S')) && (strSymbolID.charAt(2)===('U')));
            return blRetVal;
     };
     /**
      * Returns true if the symbol id is an Equipment Id (S*G*E).
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isEquipment = function (strSymbolID){
       
        var blRetVal = ((strSymbolID.charAt(0) === ('S')) && 
        (strSymbolID.charAt(2) === ('G')) &&
        (strSymbolID.charAt(4) === ('E')));
         // || isEMSEquipment(strSymbolID); //uncomment when supporting 2525C
         return blRetVal;

     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isEMSEquipment = function (strSymbolID){
        var basicCode = this.getBasicSymbolID(strSymbolID),
        blRetVal = false;
       
        if(strSymbolID.charAt(0)==='E')
        {
            if(basicCode === ("E*O*AB----*****") || //equipment
                    basicCode === ("E*O*AE----*****") ||//ambulance
                    basicCode === ("E*O*AF----*****") ||//medivac helicopter
                    basicCode === ("E*O*BB----*****") ||//emergency operation equipment
                    basicCode === ("E*O*CB----*****") ||//fire fighting operation equipment
                    basicCode === ("E*O*CC----*****") ||//fire hydrant
                    basicCode === ("E*O*DB----*****") ||//law enforcement operation equipment
                    //equipment for different service departments
                    (basicCode.substring(0,5) === ("E*O*D") && basicCode.indexOf("B---*****")>0) || 
                    //different sensor types
                    (basicCode.substring(0,5) === ("E*O*E") && basicCode.indexOf("----*****")>0) ||
                    basicCode === ("E*F*BA----*****") ||//ATM
                    basicCode === ("E*F*LF----*****") ||//Heli Landing site
                    basicCode === ("E*F*MA----*****") ||//control valve
                    basicCode === ("E*F*MC----*****"))// ||//discharge outfall
            {
                blRetVal = true;
            }
        }
        return blRetVal;

     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isEMS = function (strSymbolID){
          return (strSymbolID[0]==='E');
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isEMSNaturalEvent = function (strSymbolID){
          return (strSymbolID.charAt(0)==='E' && strSymbolID.charAt(2)==='N');
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isEMSIncident = function (strSymbolID){
          return (strSymbolID.charAt(0)==='E' && strSymbolID.charAt(2)==='I'); 
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isInstallation = function (strSymbolID){
    
          var blRetVal = ((strSymbolID.charAt(0)===('S')) && (strSymbolID.charAt(2)===('G')) && (strSymbolID.charAt(4)===('I')));
          return blRetVal;
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isSIGINT = function (strSymbolID){
          var blRetVal = ((strSymbolID.charAt(0)===('I')));
          return blRetVal;
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.isFeintDummyInstallation = function (strSymbolID){

        var blRetVal = (strSymbolID.charAt(10)===('H') && strSymbolID.charAt(11)===('B'));
        return blRetVal;
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.hasInstallationModifier = function (strSymbolID){

          var blRetVal = (strSymbolID.charAt(10)===('H'));
          return blRetVal;
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {String}
      */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getAffiliation = function (strSymbolID){
        
            return strSymbolID.charAt(1);
     };
     /**
      * 
      * @param {String} strSymbolID
      * @returns {String}
      */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.getStatus = function (strSymbolID){
            return strSymbolID.charAt(3);
     };
     /**
      * Gets the Echelon character from the symbolID string
      * @param {String} strSymbolID
      * @returns {String} the echelon character.
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.getEchelon = function (strSymbolID){
            return strSymbolID.charAt(11);
     };
     /**
      * 
      * @param {String} symbolID
      * @param {Number} symStd
      * @returns {String}
      */        
     armyc2.c2sd.renderer.utilities.SymbolUtilities.getUnitAffiliationModifier = function (symbolID, symStd){
        var textChar = null,
        affiliation = null;
		
        if(symStd===undefined)
        {
            symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
        }
        affiliation = symbolID.charAt(1);

        if(affiliation===('F') ||
            affiliation===('H') ||
            affiliation===('U') ||
            affiliation===('N') ||
            affiliation===('P'))
        {
                //return null;
                textChar=null;
        }
        else if(affiliation===('A') ||
                affiliation===('S'))
        {
            if(symStd===armyc2.c2sd.renderer.utilities.RendererSettings.Symbology_2525Bch2_USAS_13_14)
                textChar = "?";
            else
                textChar=null;
        }
        else if(affiliation===('J'))
            textChar = "J";
        else if(affiliation===('K'))
            textChar = "K";
        else if(affiliation===('D') ||
                affiliation===('L') ||
                affiliation===('G') ||
                affiliation===('W'))
            textChar = "X";
        else if(affiliation===('M'))
        {
            if(symStd===armyc2.c2sd.renderer.utilities.RendererSettings.Symbology_2525Bch2_USAS_13_14)
                textChar = "X?";
            else
                textChar = "X";
        }

        //check sea mine symbols
        if(symStd===armyc2.c2sd.renderer.utilities.RendererSettings.Symbology_2525C) 
        {
            if(symbolID.charAt(4)==='W' && symbolID.charAt(0)==='S' && symbolID.charAt(5)==='M')//&& symbolID.substring(4,6)=="WM")
            {//various sea mine exercises
                var temp = symbolID.substring(6,8);
                if(temp==="GX" ||
                        temp==="MX" ||
                        temp==="FX" ||
                        temp==="SX" ||
                        temp.charAt(0)==="X")
                    textChar = "X";
                else
                    textChar=null;
            }
        }

        return textChar;
     };
 
     /**
      * 
      * @param {String} symbolID
      * @param {Number} symStd
      * @returns {Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.hasAMmodifierWidth = function (symbolID, symStd){
        var sd = null,
            returnVal = false,
            basic = this.getBasicSymbolID(symbolID);
            
        if(symStd === undefined)
        {
            symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
        }
        
        var SymbolDefTable = armyc2.c2sd.renderer.utilities.SymbolDefTable;
        basic = this.getBasicSymbolID(symbolID);
        sd = SymbolDefTable.getSymbolDef(basic, symStd);
        if(sd !== null)
        {
            var dc = sd.drawCategory;
        
            switch(dc)
            {
                case SymbolDefTable.DRAW_CATEGORY_RECTANGULAR_PARAMETERED_AUTOSHAPE:  //width
                case SymbolDefTable.DRAW_CATEGORY_SECTOR_PARAMETERED_AUTOSHAPE:
                case SymbolDefTable.DRAW_CATEGORY_TWO_POINT_RECT_PARAMETERED_AUTOSHAPE: 
                    returnVal = true;
                    break;
				case SymbolDefTable.DRAW_CATEGORY_LINE:
						if(sd.modifiers.indexOf(armyc2.c2sd.renderer.utilities.ModifiersTG.AM_DISTANCE + ".") > -1)
							returnVal = true;
						break;
                default:
                    returnVal = false;
            }
        }
        
        return returnVal;
     };
     /**
      * 
      * @param {type} symbolID
      * @param {type} symStd
      * @returns {armyc2.c2sd.renderer.utilities.SymbolUtilities.hasAMmodifierRadius.returnVal|Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.hasAMmodifierRadius = function (symbolID, symStd){
        var sd = null,
            returnVal = false,
            basic = this.getBasicSymbolID(symbolID);
            
        if(symStd === undefined)
        {
            symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
        }
        
        var SymbolDefTable = armyc2.c2sd.renderer.utilities.SymbolDefTable;
        basic = this.getBasicSymbolID(symbolID);
        sd = SymbolDefTable.getSymbolDef(basic, symStd);
        if(sd !== null)
        {
            var dc = sd.drawCategory;
        
            switch(dc)
            {
                case SymbolDefTable.DRAW_CATEGORY_CIRCULAR_PARAMETERED_AUTOSHAPE://radius
                case SymbolDefTable.DRAW_CATEGORY_CIRCULAR_RANGEFAN_AUTOSHAPE:
                    returnVal = true;
                    break;
                default:
                    returnVal = false;
            }
        }
        
        return returnVal;
     };
     /**
      * 
      * @param {type} symbolID
      * @param {type} symStd
      * @returns {armyc2.c2sd.renderer.utilities.SymbolUtilities.hasANmodifier.returnVal|Boolean}
      */
     armyc2.c2sd.renderer.utilities.SymbolUtilities.hasANmodifier = function (symbolID, symStd){
        var sd = null,
            returnVal = false,
            basic = this.getBasicSymbolID(symbolID);
            
        if(symStd === undefined)
        {
            symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
        }
        
        var SymbolDefTable = armyc2.c2sd.renderer.utilities.SymbolDefTable;
        basic = this.getBasicSymbolID(symbolID);
        sd = SymbolDefTable.getSymbolDef(basic, symStd);
        if(sd !== null)
        {
            var dc = sd.drawCategory;
        
            switch(dc)
            {
                case SymbolDefTable.DRAW_CATEGORY_RECTANGULAR_PARAMETERED_AUTOSHAPE:
                case SymbolDefTable.DRAW_CATEGORY_SECTOR_PARAMETERED_AUTOSHAPE:
                    returnVal = true;
                    break;
                default:
                    returnVal = false;
            }
        }
        
        return returnVal;
     };


    /**
     * Checks if symbol is a multipoint symbol
     * @param {type} symbolID
     * @param {type} symStd
     * @returns {Boolean}
     * @deprecated use armyc2.c2sd.renderer.utilities.SymbolDefTable.isMultiPoint
     */
    armyc2.c2sd.renderer.utilities.SymbolUtilities.isMultiPoint = function (symbolID, symStd) {
        
        return armyc2.c2sd.renderer.utilities.SymbolDefTable.isMultiPoint(symbolID, symStd);
        
    };