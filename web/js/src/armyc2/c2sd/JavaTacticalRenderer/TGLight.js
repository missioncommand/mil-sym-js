var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaTacticalRenderer = armyc2.c2sd.JavaTacticalRenderer || {};
armyc2.c2sd.JavaTacticalRenderer.TGLight = function () {
    this.LatLongs = null;
    this.Pixels = null;
    this.modifiers = null;
    this.tp = null;
    this.maskOff = false;
    this.font = null;
    this.lineType = 0;
    this.lineStyle = 0;
    this.lineColor = null;
    this.fillStyle = 0;
    this.fillColor = null;
    this.fontBackColor = null;
    this.textColor = null;
    this.lineThickness = 0;
    this.t = "";
    this.client = "";
    this.t1 = "";
    this.h = "";
    this.h1 = "";
    this.y = "";
    this.n = "ENY";
    this.h2 = "";
    this.h3 = "";
    this.w = "";
    this.w1 = "";
    this.affiliation = null;
    this.echelon = null;
    this.echelonSymbol = "";
    this.symbolId = null;
    this.status = null;
    this.visibleModifiers = false;
    this.visibleLabels = false;
    this._SymbologyStandard = 0;
    this._useLineInterpolation = false;
    this.fontBackColor = armyc2.c2sd.renderer.utilities.Color.WHITE;
    this._useDashArray = false;
    this._useHatchFill = false;
    this._wasClipped = false;
    this._HideOptionalLabels = false;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_WasClipped = function () {
    return this._wasClipped;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_WasClipped = function (value) {
    this._wasClipped = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_LatLongs = function () {
    return this.LatLongs;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_LatLongs = function (value) {
    this.LatLongs = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_Pixels = function () {
    return this.Pixels;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_Pixels = function (value) {
    this.Pixels = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_Modifiers = function () {
    return this.modifiers;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_Modifiers = function (value) {
    this.modifiers = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_TexturePaint = function (value) {
    this.tp = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_TexturePaint = function () {
    return this.tp;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_Font = function (value) {
    this.font = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_Font = function () {
    return this.font;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_LineType = function (value) {
    this.lineType = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_LineType = function () {
    return this.lineType;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_LineStyle = function (value) {
    this.lineStyle = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_LineStyle = function () {
    return this.lineStyle;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_LineColor = function () {
    return this.lineColor;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_LineColor = function (value) {
    this.lineColor = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_FillStyle = function () {
    return this.fillStyle;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_Fillstyle = function (value) {
    this.fillStyle = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_FillColor = function () {
    return this.fillColor;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_FillColor = function (value) {
    this.fillColor = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_FontBackColor = function () {
    return this.fontBackColor;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_FontBackColor = function (value) {
    this.fontBackColor = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_TextColor = function () {
    return this.textColor;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_TextColor = function (value) {
    this.textColor = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_LineThickness = function () {
    return this.lineThickness;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_LineThickness = function (value) {
    this.lineThickness = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_Name = function () {
    if (this.visibleModifiers)
        return this.t;
    else
        return "";
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_Client = function () {
    return this.client;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_client = function (value) {
    this.client = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_Name = function (value) {
    this.t = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_T1 = function () {
    if (this.visibleModifiers)
        return this.t1;
    else
        return "";
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_T1 = function (value) {
    this.t1 = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_H = function () {
    if (this.visibleModifiers || this.lineType === 24311000)
        return this.h;
    else
        return "";
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_H = function (value) {
    this.h = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_Location = function () {
    if (this.visibleModifiers)
        return this.y;
    else
        return "";
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_Location = function (value) {
    this.y = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_H1 = function () {
    if (this.visibleModifiers)
        return this.h1;
    else
        return "";
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_H1 = function (value) {
    this.h1 = value.toString();
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_N = function () {
    return this.n;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_N = function (value) {
    this.n = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_H2 = function () {
    if (this.visibleModifiers || this.lineType === 24311000)
        return this.h2;
    else
        return "";
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_H2 = function (value) {
    this.h2 = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_H3 = function () {
    if (this.visibleModifiers || this.lineType === 24311000)
        return this.h3;
    else
        return "";
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_H3 = function (value) {
    this.h3 = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_DTG = function () {
    if (this.visibleModifiers)
        return this.w;
    else
        return "";
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_DTG = function (value) {
    this.w = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_DTG1 = function () {
    if (this.visibleModifiers)
        return this.w1;
    else
        return "";
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_DTG1 = function (value) {
    this.w1 = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_Affiliation = function () {
    return this.affiliation;
};
this.set_Affiliation = function (value) {
    this.affiliation = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_Echelon = function () {
    return this.echelon;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_Echelon = function (value) {
    this.echelon = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_EchelonSymbol = function () {
    return this.echelonSymbol;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_EcheclonSymbol = function (value) {
    this.echelonSymbol = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_SymbolId = function () {
    return this.symbolId;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_Status = function () {
    return this.status;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_Status = function (value) {
    this.status = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_SymbolId = function (value) {
    try {
        this.symbolId = value;
        var letter;
        if (this.symbolId.length === 15)
        {
            this.status = this.symbolId.substring(3, 4);
            if (this.status.equals("A") && !value.equalsIgnoreCase("BS_AREA--------")) {
                this.lineStyle = 1;
            }
            this.affiliation = this.symbolId.substring(1, 2);
            this.echelon = this.symbolId.substring(11, 12);
        }   //end if symbolId length is 15
        else if (this.symbolId.length >= 20)
        {
            var setA = this.symbolId.substring(0, 10);
            var symbolSet = setA.substring(4, 6);
            var setB=this.symbolId.substring(10);
            var entityCode=setB.substring(0,6);
            var code=Integer.parseInt(entityCode);
            var nCode=code.valueOf();
            if (symbolSet.equalsIgnoreCase("25"))
            {

                this.affiliation = setA.substring(2, 4);
                if (this.affiliation.equalsIgnoreCase("03")) {
                    this.affiliation = "F";
                } else if (this.affiliation.equalsIgnoreCase("06")) {
                    this.affiliation = "H";
                }
                switch(nCode)
                {
                    case 140103:
                    case 140104:
                    case 150103:
                    case 150104:
                    case 150501:
                    case 150502:
                    case 150503:
                    case 140606:
                    case 140607:
                    case 151802:
                    case 200300:    //?
                        this.affiliation="H";
                        break;
                    default:
                        break;
                }
                this.status = setA.substring(6, 7);
                if (this.status.equalsIgnoreCase("0")) {
                    this.status = "P";
                } else if (this.status.equalsIgnoreCase("1")) {
                    this.status = "A";
                }
                if (this.status.equalsIgnoreCase("A")) {
                    this.lineStyle = 1;    //dashed
                }
                this.echelon = setA.substring(8);
                if (this.echelon.equalsIgnoreCase("11")) {
                    this.echelon = "A";
                } else if (this.echelon.equalsIgnoreCase("12")) {
                    this.echelon = "B";
                } else if (this.echelon.equalsIgnoreCase("13")) {
                    this.echelon = "C";
                } else if (this.echelon.equalsIgnoreCase("14")) {
                    this.echelon = "D";
                } else if (this.echelon.equalsIgnoreCase("15")) {
                    this.echelon = "E";
                } else if (this.echelon.equalsIgnoreCase("16")) {
                    this.echelon = "F";
                } else if (this.echelon.equalsIgnoreCase("17")) {
                    this.echelon = "G";
                } else if (this.echelon.equalsIgnoreCase("18")) {
                    this.echelon = "H";
                } else if (this.echelon.equalsIgnoreCase("21")) {
                    this.echelon = "I";
                } else if (this.echelon.equalsIgnoreCase("22")) {
                    this.echelon = "J";
                } else if (this.echelon.equalsIgnoreCase("23")) {
                    this.echelon = "K";
                } else if (this.echelon.equalsIgnoreCase("24")) {
                    this.echelon = "L";
                } else if (this.echelon.equalsIgnoreCase("M")) {
                    this.echelon = "M";
                }
            }
            else return;
        }//end if symbolId length >= 20
        if (this.echelon.equals("M"))
            this.echelonSymbol = "XXXXXX";
        else if (this.echelon.equals("L"))
            this.echelonSymbol = "XXXXX";
        else if (this.echelon.equals("K"))
            this.echelonSymbol = "XXXX";
        else if (this.echelon.equals("J"))
            this.echelonSymbol = "XXX";
        else if (this.echelon.equals("I"))
            this.echelonSymbol = "XX";
        else if (this.echelon.equals("H"))
            this.echelonSymbol = "X";
        else if (this.echelon.equals("G"))
            this.echelonSymbol = "III";
        else if (this.echelon.equals("F"))
            this.echelonSymbol = "II";
        else if (this.echelon.equals("E"))
            this.echelonSymbol = "I";
        else if (this.echelon.equals("D")) {
            letter = String.fromCharCode(9679);
            this.echelonSymbol = (letter) + (letter) + (letter);
        } else if (this.echelon.equals("C")) {
            letter = String.fromCharCode(9679);
            this.echelonSymbol = (letter) + (letter);
        } else if (this.echelon.equals("B")) {
            letter = String.fromCharCode(9679);
            this.echelonSymbol = (letter);
        } else if (this.echelon.equals("A")) {
            letter = String.fromCharCode(216);
            this.echelonSymbol = (letter);
        }
    }
    catch (exc)
    {
        if (Clazz.instanceOf(exc))
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.TGLight._className, "set_SymbolId", exc);
        }
        else
        {
            throw exc;
        }
    }
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_VisibleModifiers = function (value) {
    this.visibleModifiers = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_VisibleModifiers = function () {
    return this.visibleModifiers;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_VisibleLabels = function (value) {
    this.visibleLabels = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_VisibleLabels = function () {
    return this.visibleLabels;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.setSymbologyStandard = function (standard) {
    this._SymbologyStandard = standard;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.getSymbologyStandard = function () {
    return this._SymbologyStandard;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_UseLineInterpolation = function () {
    return this._useLineInterpolation;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_UseLineInterpolation = function (value) {
    this._useLineInterpolation = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_UseDashArray = function () {
    return this._useDashArray;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_UseDashArray = function (value) {
    this._useDashArray = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_UseHatchFill = function () {
    return this._useHatchFill;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_UseHatchFill = function (value) {
    this._useHatchFill = value;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.get_HideOptionalLabels = function () {
    return this._HideOptionalLabels;
};
armyc2.c2sd.JavaTacticalRenderer.TGLight.prototype.set_HideOptionalLabels = function (value) {
    this._HideOptionalLabels = value;
};

armyc2.c2sd.JavaTacticalRenderer.TGLight._className = "TGLight";