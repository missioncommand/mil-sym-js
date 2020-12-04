var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaTacticalRenderer = armyc2.c2sd.JavaTacticalRenderer || {};
armyc2.c2sd.JavaTacticalRenderer.Modifier2 = function() {
  this.textPath = new Array(2);
  this.textID = null;
  this.featureID = null;
  this.text = null;
  this.iteration = 0;
  this.justify = 0;
  this.type = 0;
  this.lineFactor = 0;
  this.isIntegral = false;
  this.fitsMBR = true;
  this.get_TextPath = function() {
    return this.textPath;
  };
  this.set_TextPath = function(value) {
    this.textPath = value;
  };
  this.set_IsIntegral = function(value) {
    this.isIntegral = value;
  };
  this.get_IsIntegral = function() {
    return this.isIntegral;
  };
};
/**
 * Assumes pt0, pt1, pt2 are in a continuous line sequence with no points in between.
 * Tests to see if the segment doubles back, i.e. line pt1-pt2 doubles back on line pt0-pt1
 * @param {type} pt0    previous line point
 * @param {type} pt1    label segment start
 * @param {type} pt2    label segment end
 * @returns {Boolean|armyc2.c2sd.JavaTacticalRenderer.Modifier2.DoublesBack.result}
 */
armyc2.c2sd.JavaTacticalRenderer.Modifier2.DoublesBack = function(pt0, pt1, pt2) {
  var result = true;
  try {
    //theta = Math.atan2(y2 - y1, x2 - x1);
    var theta1 = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x);
    var theta0 = Math.atan2(pt0.y - pt1.y, pt0.x - pt1.x);
    var beta = Math.abs(theta0 - theta1);
    if (beta > 0.1)
      result = false;
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "DoublesBack", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetCenterLabel", exc));
    } else {
      throw exc;
    }
  }
  return result;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetCenterLabel = function(tg) {
  var label = "";
  try {
    switch (tg.get_LineType()) {
      case 22223000:
        label = "SAAFR";
        break;
      case 22221000:
        label = "AC";
        break;
      case 212100000:
      case 212300000:
      case 212300001:
        label = "S";
        break;
      case 211900000:
        label = "R";
        break;
      case 211700000:
        label = "P";
        break;
      case 211600000:
        label = "O";
        break;
      case 211400000:
        label = "I";
        break;
      case 211100000:
        label = "F";
        break;
      case 211000000:
        label = "D";
        break;
      case 21400000:
      case 21500000:
        label = "C";
        break;
      case 21200000:
      case 21300000:
        label = "B";
        break;
      case 212600000:
        label = "C/K";
        break;
      case 212500000:
        label = "C/S";
        break;
      case 23180000:
        label = "UXO";
        break;
      case 212000000:
        label = "R";
        break;
      case 22623000:
      case 22623001:
        label = "BL ";
        break;
      case 22612000:
      case 22612001:
        label = "HL ";
        break;
      case 22124000:
        label = "PL ";
        break;
      case 22125000:
        label = "LL";
        break;
      case 212210000:
      case 212210001:
        label = "S";
        break;
      case 212230000:
      case 212230001:
        label = "C";
        break;
      case 212220000:
      case 212220001:
        label = "G";
        break;
      case 211800000:
        label = "RIP";
        break;
      case 212400000:
        label = "W";
        break;
      case 212410000:
        label = "WP";
        break;
      case 21700000:
      case 21710000:
        label = "CATK";
        break;
      case 22122000:
        label = "FLOT";
        break;
      case 22132000:
        label = "AA";
        break;
      case 22133000:
      case 22133100:
      case 22133200:
        label = "EA";
        break;
      case 22135000:
        label = "DZ";
        break;
      case 22136000:
        label = "EZ";
        break;
      case 22137000:
        label = "LZ";
        break;
      case 22138000:
        label = "PZ";
        break;
      case 22222000:
      case 22222001:
        label = "MRR";
        break;
      case 22224000:
        if (tg.getSymbologyStandard() === 1)
          label = "UA";
        else
          label = "UAV";
        break;
      case 22224001:
        label = "UAV";
        break;
      case 22225000:
        label = "LLTR";
        break;
      case 22231000:
        label = "ROZ";
        break;
      case 22232000:
        if (tg.getSymbologyStandard() === 1)
          label = "SHORADEZ";
        else
          label = "FAADEZ";
        break;
      case 22233000:
        label = "HIDACZ";
        break;
      case 22234000:
        label = "MEZ";
        break;
      case 22234100:
        label = "LOMEZ";
        break;
      case 22234200:
        label = "HIMEZ";
        break;
      case 22235000:
        label = "WFZ";
        break;
      case 22340000:
        label = "M";
        break;
      case 23164000:
      case 22350000:
        label = "M";
        break;
      case 22421000:
        label = "FEBA";
        break;
      case 22422000:
        label = "(PDF)";
        break;
      case 22431100:
        label = "(P)";
        break;
      case 22432000:
        label = "EA ";
        break;
      case 22535000:
        label = "OBJ ";
        if (tg.get_Client().equalsIgnoreCase("ge"))
          label = "OBJ  ";
        break;
      case 22625000:
        label = "NAI";
        break;
      case 22626000:
        label = "TAI";
        break;
      case 24211000:
        label = "SMOKE";
        break;
      case 24260000:
        label = "FPF";
        break;
      case 22532000:
        label = "ATK";
        break;
      case 22523000:
        label = "FINAL CL";
        break;
      case 22525000:
        label = "LOA";
        break;
      case 22526000:
        label = "LD";
        break;
      case 22528000:
        label = "PLD";
        break;
      case 21800000:
        label = "D";
        break;
      case 22613000:
        label = "RL";
        break;
      case 24314000:
        label = "SMOKE";
        break;
      case 24223000:
        label = "NFL";
        break;
      case 24225000:
        label = "MFP";
        break;
      case 24221000:
        label = " FSCL";
        break;
      case 24222000:
        label = "CFL ";
        break;
      case 24224000:
        label = "RFL ";
        break;
      case 22621000:
        label = "AO ";
        break;
      case 24315000:
        label = "BOMB";
        break;
      case 24226000:
        label = "TGMF";
        break;
      case 24321100:
        label = "FSA ";
        break;
      case 24321300:
      case 24321200:
        label = "FSA";
        break;
      case 24322100:
      case 24322300:
      case 24322200:
        label = "ACA";
        break;
      case 24323100:
      case 24323300:
      case 24323200:
        label = "FFA";
        break;
      case 24324100:
      case 24324300:
      case 24324200:
        label = "NFA";
        break;
      case 24325100:
      case 24325300:
      case 24325200:
        label = "RFA";
        break;
      case 24331100:
      case 24331300:
      case 24331200:
        label = "ATI ZONE";
        break;
      case 243100000:
      case 24326200:
      case 24326100:
      case 24326101:
        label = "PAA";
        break;
      case 24332100:
      case 24332300:
      case 24332200:
        label = "CFF ZONE";
        break;
      case 24336100:
      case 24336300:
      case 24336200:
        label = "CF ZONE";
        break;
      case 24333100:
      case 24333300:
      case 24333200:
        label = "SENSOR ZONE";
        break;
      case 24334100:
      case 24334300:
      case 24334200:
        label = "CENSOR ZONE";
        break;
      case 24335100:
      case 24335300:
      case 24335200:
        label = "DA";
        break;
      case 24337100:
      case 24337300:
      case 24337200:
        label = "ZOR";
        break;
      case 24338100:
      case 24338300:
      case 24338200:
        label = "TBA";
        break;
      case 24339100:
      case 24339300:
      case 24339200:
        label = "TVAR";
        break;
      case 24351000:
      case 24353000:
      case 24352000:
        label = "BKB";
        break;
      case 24361000:
      case 24363000:
      case 24362000:
        label = "PKB";
        break;
      case 25221000:
        label = "MSR ";
        break;
      case 25222000:
        label = "ASR ";
        break;
      case 25224000:
      case 25223000:
      case 25225000:
        label = "MSR ";
        break;
      case 22527000:
        label = "LD/LC";
        break;
      case 22622000:
        label = "AIRHEAD LINE";
        break;
      case 21100000:
      case 26400000:
        label = "B";
        break;
      case 26410000:
        label = "E";
        break;
      case 26420000:
        label = "A";
        break;
      case 26430000:
        label = "T";
        break;
      case 26440000:
        label = "O";
        break;
      case 25330000:
        label = "FARP";
        break;
      case 25351000:
        label = "BSA";
        break;
      case 25352000:
        label = "DSA";
        break;
      case 25353000:
        label = "RSA";
        break;
      case 21600000:
        label = "ENY";
        break;
      case 23114000:
        label = "FREE";
        break;
      default:
        break;
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "GetCenterLabel", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetCenterLabel", exc));
    } else {
      throw exc;
    }
  }
  return label;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddOffsetModifier = function(tg, text, type, lineFactor, startIndex, endIndex, spaces, rightOrLeft) {
  try {
    if (text === null || text.equals("")) {
      return;
    }
    var modifier = new armyc2.c2sd.JavaTacticalRenderer.Modifier2();
    if (text === null || text.equals("")) {
      return;
    }
    if (tg.Pixels === null || tg.Pixels.size() < 2) {
      return;
    }
    modifier.text = text;
    modifier.set_IsIntegral(false);
    modifier.type = type;
    modifier.lineFactor = lineFactor;
    if (tg.Pixels.size() > endIndex) {
      modifier.textPath[0] = tg.Pixels.get(startIndex);
      modifier.textPath[1] = tg.Pixels.get(endIndex);
      if (rightOrLeft !== null) {
        if (rightOrLeft.equals("left")) {
          modifier.textPath[0].x -= spaces;
          modifier.textPath[1].x -= spaces;
        } else {
          modifier.textPath[0].x += spaces;
          modifier.textPath[1].x += spaces;
        }
      }
      tg.modifiers.add(modifier);
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddOffsetModifier", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddOffsetModifier", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier = function(tg, text, type, lineFactor, ptStart, ptEnd) {
  try {
    if (text === null || text.equals("")) {
      return;
    }
    var modifier = new armyc2.c2sd.JavaTacticalRenderer.Modifier2();
    if (text === null || text.equals("")) {
      return;
    }
    if (tg.Pixels === null || tg.Pixels.size() < 2) {
      return;
    }
    modifier.text = text;
    modifier.set_IsIntegral(false);
    modifier.type = type;
    modifier.lineFactor = lineFactor;
    modifier.textPath[0] = ptStart;
    modifier.textPath[1] = ptEnd;
    tg.modifiers.add(modifier);
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddModifier", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddModifier", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2 = function(tg, text, type, lineFactor, pt0, pt1, isIntegral, modifierType) {
  try {
    if (text === null || text.equals("")) {
      return;
    }
    var modifier = new armyc2.c2sd.JavaTacticalRenderer.Modifier2();
    if (text === null || text.equals("")) {
      return;
    }
    modifier.text = text;
    if (isIntegral !== undefined)
      modifier.set_IsIntegral(isIntegral);
    modifier.type = type;
    modifier.lineFactor = lineFactor;
    modifier.textPath[0] = pt0;
    modifier.textPath[1] = pt1;
    modifier.isIntegral = isIntegral;
    modifier.textID = modifierType;
    tg.modifiers.add(modifier);
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddModifier", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddModifier", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier = function(tg, text, type, lineFactor, startIndex, endIndex, isIntegral) {
  try {
    if (text === null || text.equals("")) {
      return;
    }
    var modifier = new armyc2.c2sd.JavaTacticalRenderer.Modifier2();
    if (isIntegral !== undefined)
      modifier.set_IsIntegral((isIntegral).valueOf());
    if (text === null || text.equals("")) {
      return;
    }
    if (tg.Pixels === null || tg.Pixels.isEmpty()) {
      return;
    }
    modifier.text = text;
    modifier.type = type;
    modifier.lineFactor = lineFactor;
    if (tg.Pixels.size() > endIndex) {
      modifier.textPath[0] = tg.Pixels.get(startIndex);
      modifier.textPath[1] = tg.Pixels.get(endIndex);
      tg.modifiers.add(modifier);
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddModifier", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddIntegralModifier", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier = function(tg, text, type, lineFactor, pt0, pt1, modifierType) {
  try {
    if (text === null || text.equals("")) {
      return;
    }
    var modifier = new armyc2.c2sd.JavaTacticalRenderer.Modifier2();
    modifier.text = text;
    modifier.set_IsIntegral(true);
    if (pt0 === null || pt1 === null) {
      return;
    }
    modifier.type = type;
    if (arguments.length > 6)
      modifier.textID = modifierType;
    modifier.lineFactor = lineFactor;
    modifier.textPath[0] = pt0;
    modifier.textPath[1] = pt1;
    tg.modifiers.add(modifier);
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddAreaModifier", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddAreaModifier", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier = function(tg, text, type, lineFactor, pt0, pt1, isIntegral, modifierType) {
  try {
    if (text === null || text.equals("")) {
      return;
    }
    var modifier = new armyc2.c2sd.JavaTacticalRenderer.Modifier2();
    modifier.set_IsIntegral((isIntegral).valueOf());
    modifier.text = text;
    if (text === null || text.equals("")) {
      return;
    }
    if (pt0 === null || pt1 === null) {
      return;
    }
    modifier.type = type;
    modifier.lineFactor = lineFactor;
    modifier.textPath[0] = pt0;
    modifier.textPath[1] = pt1;
    modifier.textID = modifierType;
    tg.modifiers.add(modifier);
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddAreaModifier", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddAreaModifier", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetMBR = function(tg, ptUl, ptUr, ptLr, ptLl) {
  try {
    var j = 0;
    var x = 0;
    var y = 0;
    ptUl.x = tg.Pixels.get(0).x;
    ptUl.y = tg.Pixels.get(0).y;
    ptUr.x = tg.Pixels.get(0).x;
    ptUr.y = tg.Pixels.get(0).y;
    ptLl.x = tg.Pixels.get(0).x;
    ptLl.y = tg.Pixels.get(0).y;
    ptLr.x = tg.Pixels.get(0).x;
    ptLr.y = tg.Pixels.get(0).y;
    for (j = 1; j < tg.Pixels.size(); j++) {
      x = tg.Pixels.get(j).x;
      y = tg.Pixels.get(j).y;
      if (x < ptLl.x) {
        ptLl.x = x;
        ptUl.x = x;
      }
      if (x > ptLr.x) {
        ptLr.x = x;
        ptUr.x = x;
      }
      if (y > ptLl.y) {
        ptLl.y = y;
        ptLr.y = y;
      }
      if (y < ptUl.y) {
        ptUl.y = y;
        ptUr.y = y;
      }
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "GetMBR", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetMBR", exc));
    } else {
      throw exc;
    }
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetBoundaryMiddleSegment = function(tg, g2d, pt0, pt1) {
  var middleSegment = Math.floor(tg.Pixels.size() / 2) - 1;
  var tooShort = armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetLineTooShort(tg, g2d);
  var stringWidthENY = 0;
  var stringWidthEchelonSymbol = 0;
  g2d.setFont(tg.get_Font());
  var metrics = g2d.getFontMetrics();
  var midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(middleSegment), tg.Pixels.get(middleSegment + 1), 0);
  var ptTemp = null;
  var dist = 0;
  if (tooShort) {
    if (tg.get_Affiliation().equals("H")) {
      stringWidthENY = metrics.stringWidth(tg.get_N());
    }
    if (tg.get_EchelonSymbol() !== null) {
      stringWidthEchelonSymbol = metrics.stringWidth(tg.get_EchelonSymbol());
    }
    //dist = 1.5 * (2 * stringWidthENY + stringWidthEchelonSymbol);
    dist = stringWidthENY + stringWidthEchelonSymbol;
    ptTemp = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(midpt, tg.Pixels.get(middleSegment), dist / 2);
    pt0.x = ptTemp.x;
    pt0.y = ptTemp.y;
    ptTemp = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(midpt, tg.Pixels.get(middleSegment + 1), dist / 2);
    pt1.x = ptTemp.x;
    pt1.y = ptTemp.y;
  } else {
    ptTemp = tg.Pixels.get(middleSegment);
    pt0.x = ptTemp.x;
    pt0.y = ptTemp.y;
    ptTemp = tg.Pixels.get(middleSegment + 1);
    pt1.x = ptTemp.x;
    pt1.y = ptTemp.y;
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetLineTooShort = function(tg, g2d) {
  var lineTooShort = false;
  try {
    var middleSegment = Math.floor(tg.Pixels.size() / 2) - 1;
    g2d.setFont(tg.get_Font());
    var metrics = g2d.getFontMetrics();
    var echelonSymbol = null;
    var stringWidthEchelonSymbol = 0;
    var stringWidthENY = 0;
    var pt0 = tg.Pixels.get(middleSegment);
    var pt1 = tg.Pixels.get(middleSegment + 1);
    var dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
    echelonSymbol = tg.get_EchelonSymbol();
    if (tg.get_Affiliation().equals("H")) {
      stringWidthENY = metrics.stringWidth(tg.get_N());
    }
    if (echelonSymbol !== null) {
      stringWidthEchelonSymbol = metrics.stringWidth(echelonSymbol);
    }
    switch (tg.get_LineType()) {
      case 22121000:
        if (dist < 1.5 * (stringWidthENY * 2 + stringWidthEchelonSymbol))
          lineTooShort = true;
        break;
      default:
        break;
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "GetBoundaryLineTooShort", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetBoundaryLineTooShort", exc));
    } else {
      throw exc;
    }
  }
  return lineTooShort;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetBoundarySegmentTooShort = function(tg, g2d, middleSegment) {
  var lineTooShort = false;
  try {
    g2d.setFont(tg.get_Font());
    var metrics = g2d.getFontMetrics();
    var echelonSymbol = null;
    var stringWidthEchelonSymbol = 0;
    var stringWidthENY = 0;
    var pt0 = tg.Pixels.get(middleSegment);
    var pt1 = tg.Pixels.get(middleSegment + 1);
    var dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
    echelonSymbol = tg.get_EchelonSymbol();
    if (tg.get_Affiliation() !== null && tg.get_Affiliation().equals("H")) {
      stringWidthENY = metrics.stringWidth(tg.get_N());
    }
    if (echelonSymbol !== null) {
      stringWidthEchelonSymbol = metrics.stringWidth(echelonSymbol);
    }
    var tWidth = 0;
    var t1Width = 0;
    if (tg.get_Name() !== null && !tg.get_Name().isEmpty())
      tWidth = metrics.stringWidth(tg.get_Name());
    if (tg.get_T1() !== null && !tg.get_T1().isEmpty())
      t1Width = metrics.stringWidth(tg.get_T1());
    var totalWidth = stringWidthENY * 2 + stringWidthEchelonSymbol;
    if (totalWidth < tWidth)
      totalWidth = tWidth;
    if (totalWidth < t1Width)
      totalWidth = t1Width;
    switch (tg.get_LineType()) {
      case 22121000:
        if (dist < 1.25 * (totalWidth))
          lineTooShort = true;
        break;
      default:
        break;
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "GetBoundaryLineTooShort", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetBoundaryLineTooShort", exc));
    } else {
      throw exc;
    }
  }
  return lineTooShort;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddBoundaryModifiers = function(tg, g2d, clipBounds) {
  try {
    var j = 0;
    var csFactor = 1;
    var foundSegment = new Boolean(false);
    var pt0 = null;
    var pt1 = null;
    var ptLast = null;
    var TLineFactor = 0;
    var T1LineFactor = 0;
    var affiliation = tg.get_Affiliation();
    var lineTooShort = new Boolean(false);
    if (tg.get_Client().equals("cpof3d"))
      csFactor = 0.85;
    var middleSegment = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getVisibleMiddleSegment(tg, clipBounds);
    for (j = 0; j < tg.Pixels.size() - 1; j++) {
      if (tg.get_Client().equalsIgnoreCase("ge"))
        if (j !== middleSegment)
          continue;
      pt0 = tg.Pixels.get(j);
      pt1 = tg.Pixels.get(j + 1);
      if (pt0.x < pt1.x) {
        TLineFactor = -1.3;
        T1LineFactor = 1;
      } else if (pt0.x === pt1.x) {
        if (pt1.y < pt0.y) {
          TLineFactor = -1;
          T1LineFactor = 1;
        } else {
          TLineFactor = 1;
          T1LineFactor = -1;
        }
      } else {
        TLineFactor = 1;
        T1LineFactor = -1.3;
      }
      lineTooShort = new Boolean(armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetBoundarySegmentTooShort(tg, g2d, j));
      if (lineTooShort.valueOf() === false) {
        foundSegment = new Boolean(true);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, TLineFactor * csFactor, j, j + 1, new Boolean(true));
        if (!tg.get_EchelonSymbol().equals("")) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_EchelonSymbol(), 2, -0.2 * csFactor, j, j + 1, new Boolean(true));
        }
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_T1(), 2, T1LineFactor * csFactor, j, j + 1, new Boolean(true));
        if (affiliation !== null && affiliation.equals("H")) {
          ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
          ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, ptLast, 0);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, ptLast, new Boolean(true));
          ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, pt0, 0);
          ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, ptLast, 0);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt1, ptLast, new Boolean(true));
        }
      }
    }
    if (foundSegment.valueOf() === false) {
      //TLineFactor = -1;
      //T1LineFactor = 1;
      pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
      pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetBoundaryMiddleSegment(tg, g2d, pt0, pt1);
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, TLineFactor * csFactor, middleSegment, middleSegment + 1, new Boolean(true));
      if (!tg.get_EchelonSymbol().equals("")) {
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_EchelonSymbol(), 2, -0.202 * csFactor, middleSegment, middleSegment + 1, new Boolean(true));
      }
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_T1(), 2, T1LineFactor * csFactor, middleSegment, middleSegment + 1, new Boolean(true));
      if (affiliation !== null && affiliation.equals("H")) {
        ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
        ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, ptLast, 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, ptLast, new Boolean(true));
        ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, pt0, 0);
        ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, ptLast, 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt1, ptLast, new Boolean(true));
      }
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddBoundaryModifiers", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddBoundaryModifiers", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddBoundaryModifiers2 = function(tg, g2d, clipBounds) {
  try {
    var j = 0;
    var csFactor = 1;
    var foundSegment = new Boolean(false);
    var pt0 = null;
    var pt1 = null;
    var ptLast = null;
    var TLineFactor = 0;
    var T1LineFactor = 0;
    var affiliation = tg.get_Affiliation();
    var lineTooShort = new Boolean(false);
    if (tg.get_Client().equals("cpof3d")) {
      csFactor = 0.85;
    }
    var middleSegment = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getVisibleMiddleSegment2(tg, clipBounds);
    for (j = 0; j < tg.Pixels.size() - 1; j++) {
      if (tg.get_Client().equalsIgnoreCase("ge"))
        if (j !== middleSegment)
          continue;
      pt0 = tg.Pixels.get(j);
      pt1 = tg.Pixels.get(j + 1);
      if (pt0.x < pt1.x) {
        TLineFactor = -1.3;
        T1LineFactor = 1;
      } else if (pt0.x === pt1.x) {
        if (pt1.y < pt0.y) {
          TLineFactor = -1;
          T1LineFactor = 1;
        } else {
          TLineFactor = 1;
          T1LineFactor = -1;
        }
      } else {
        TLineFactor = 1;
        T1LineFactor = -1.3;
      }
      lineTooShort = new Boolean(armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetBoundarySegmentTooShort(tg, g2d, j));
      if (lineTooShort.valueOf() === false) {
        foundSegment = new Boolean(true);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, TLineFactor * csFactor, j, j + 1, new Boolean(true));
        if (!tg.get_EchelonSymbol().equals("")) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_EchelonSymbol(), 2, -0.2 * csFactor, j, j + 1, new Boolean(true));
        }
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_T1(), 2, T1LineFactor * csFactor, j, j + 1, new Boolean(true));
        if (affiliation !== null && affiliation.equals("H")) {
          ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
          ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, ptLast, 0);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, ptLast, new Boolean(true));
          ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, pt0, 0);
          ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, ptLast, 0);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt1, ptLast, new Boolean(true));
        }
      }
    }
    if (foundSegment.valueOf() === false) {
      //TLineFactor = -1;
      //T1LineFactor = 1;
      pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
      pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetBoundaryMiddleSegment(tg, g2d, pt0, pt1);
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, TLineFactor * csFactor, middleSegment, middleSegment + 1, new Boolean(true));
      if (!tg.get_EchelonSymbol().equals("")) {
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_EchelonSymbol(), 2, -0.202 * csFactor, middleSegment, middleSegment + 1, new Boolean(true));
      }
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_T1(), 2, T1LineFactor * csFactor, middleSegment, middleSegment + 1, new Boolean(true));
      if (affiliation !== null && affiliation.equals("H")) {
        ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
        ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, ptLast, 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, ptLast, new Boolean(true));
        ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, pt0, 0);
        ptLast = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, ptLast, 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt1, ptLast, new Boolean(true));
      }
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddBoundaryModifiers", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddBoundaryModifiers", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddNameAboveDTG = function(tg, metrics) {
  try {
    var csFactor = 1;
    if (tg.get_Client().equals("cpof3d"))
      csFactor = 0.667;
    var label = armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetCenterLabel(tg);
    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(1));
    var lastIndex = tg.Pixels.size() - 1;
    var nextToLastIndex = tg.Pixels.size() - 2;
    var ptLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(lastIndex));
    var ptNextToLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(nextToLastIndex));
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.shiftModifierPath(tg, pt0, pt1, ptLast, ptNextToLast);
    var stringWidth = metrics.stringWidth(label + " " + tg.get_Name());
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + " " + tg.get_Name(), 1, 0, pt0, pt1, new Boolean(false));
    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(tg.Pixels.get(0), tg.Pixels.get(1), -1.5 * stringWidth);
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + " " + tg.get_Name(), 1, 0, ptLast, ptNextToLast, new Boolean(false));
    pt0 = tg.Pixels.get(lastIndex);
    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(tg.Pixels.get(lastIndex), tg.Pixels.get(nextToLastIndex), -1.5 * stringWidth);
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddBoundaryModifiers", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddBoundaryModifiers", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.blankString = function(metrics, width) {
  var str = "";
  try {
    while (metrics.stringWidth(str) < width)
      str += " ";
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "getLowestSegmentIndex", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getLowestSegmentIndex", exc));
    } else {
      throw exc;
    }
  }
  return str;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.shiftModifierPath = function(tg, pt0, pt1, ptLast, ptNextToLast) {
  try {
    var p0 = null,
      p1 = null;
    var last = 1.0;
    switch (tg.get_LineType()) {
      case 22121000:
        for (var j = 0; j < tg.Pixels.size() - 1; j++) {
          p0 = tg.Pixels.get(j);
          p1 = tg.Pixels.get(j + 1);
          //if(Math.abs(p0.x-p1.x)<1)
          if (p0.x === p1.x) {
            p1.x += last;
            last = -last;
          }
        }
        break;
      case 22422000:
      case 22124000:
      case 22525000:
      case 22526000:
      case 22613000:
      case 22527000:
      case 22125000:
      case 22523000:
      case 22528000:
      case 24223000:
      case 22122000:
      case 22123000:
      case 22612000:
      case 22623000:
      case 22612001:
      case 22623001:
        //if (pt0 !== null && pt1 !== null && Math.abs(pt0.x - pt1.x)<1)
        if (pt0 !== null && pt1 !== null && pt0.x === pt1.x)
          pt1.x += 1;
        //if (ptLast !== null && ptNextToLast !== null && Math.abs(ptNextToLast.x - ptLast.x)<1)
        if (ptLast !== null && ptNextToLast !== null && ptNextToLast.x === ptLast.x)
          ptNextToLast.x += 1;
        break;
      default:
        return;
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "shiftModifierPath", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside shiftModifierPath", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithTwoLabels = function(tg, label, eny, g2d) {
  try {
    switch (tg.get_LineType()) {
      case 2237000:
        if (!tg.get_Affiliation().equalsIgnoreCase("H")) {
          eny = "";
        }
        break;
      default:
        return false;
    }
    var metrics = g2d.getFontMetrics();
    var labelLength = metrics.stringWidth(label);
    var enyLength = metrics.stringWidth(eny);
    var j = 0;
    var pt0 = null,
      pt1 = null;
    var last = eny;
    var dist = 0;
    var sumLabel = 0,
      sumENY = 0;
    for (j = 0; j < tg.Pixels.size() - 1; j++) {
      if (eny.isEmpty() && last.equalsIgnoreCase(label))
        last = eny;
      if (label.isEmpty() && last.equalsIgnoreCase(eny))
        last = label;
      pt0 = tg.Pixels.get(j);
      pt1 = tg.Pixels.get(j + 1);
      dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
      if (dist > 1.5 * labelLength && last.equalsIgnoreCase(eny)) {
        last = label;
        sumLabel++;
      } else if (dist > 1.5 * enyLength && last.equalsIgnoreCase(label)) {
        sumENY++;
        last = eny;
      }
    }
    if (eny.isEmpty()) {
      if (sumENY < 2) {
        sumENY = 2;
      }
    }
    if (sumLabel + sumENY < 4) {
      return false;
    }
    var aboveMiddle = 2;
    //at this point we have valid pixels for alternating labels, i.e. at least one of each will appear
    for (j = 0; j < tg.Pixels.size() - 1; j++) {
      if (eny.isEmpty() && last.equalsIgnoreCase(label))
        last = eny;
      if (label.isEmpty() && last.equalsIgnoreCase(eny))
        last = label;
      pt0 = tg.Pixels.get(j);
      pt1 = tg.Pixels.get(j + 1);
      dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
      if (dist > 1.5 * labelLength && last.equalsIgnoreCase(eny)) {
        //add the label
        if (!label.isEmpty())
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, aboveMiddle, 0, pt0, pt1, new Boolean(true));
        last = label;
      } else if (dist > 1.5 * enyLength && last.equalsIgnoreCase(label)) {
        //add the eny
        if (!eny.isEmpty())
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, eny, aboveMiddle, 0, pt0, pt1, new Boolean(true));
        last = eny;
      }
    }
    return true;
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "areasWithTwoLabels", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside areasWithTwoLabels", exc));
    } else {
      throw exc;
    }
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY = function(tg, g2d) {
  try {
    var metrics = g2d.getFontMetrics();
    var label = null;
    var middleSegment = Math.floor(tg.Pixels.size() / 2) - 1;
    var middleSegment2 = tg.Pixels.size() - 2;
    var startIndex = 0;

    var j = 0;
    var linetype = tg.get_LineType();
    var affiliation = tg.get_Affiliation();
    var echelonSymbol = tg.get_EchelonSymbol();
    if (affiliation !== null && affiliation.equals("H"))
      label = tg.get_N();
    if (tg.Pixels.size() > 3)
      middleSegment = Math.floor(tg.Pixels.size() / 4);
    if (tg.Pixels.size() > 3)
      middleSegment2 = Math.floor(3 * tg.Pixels.size() / 4);
    switch (linetype) {
      case 22340000:
      case 22350000:
      case 23164000:
        label = "M";
        break;
      case 23180000:
        label = "UXO";
        break;
      case 22431000:
      case 22431100:
        if (echelonSymbol !== null && !echelonSymbol.isEmpty())
          startIndex = 1;
        break;
      default:
        break;
    }
    if (label === null || label.isEmpty())
      return;
    var stringWidth = metrics.stringWidth(label);
    var foundLongSegment = false;
    var dist = 0;
    var pt0 = null;
    var pt1 = null;
    var northestPtIndex = null;
    var southestPtIndex = null;
    var northestPt = null;
    var southestPt = null;

    //acevedo - 11/29/2017 - adding option to render only 2 ENY labels.
    if (armyc2.c2sd.renderer.utilities.RendererSettings.getInstance().getTwoLabelOnly() === false) {
      for (j = startIndex; j < tg.Pixels.size() - 1; j++) {
        pt0 = tg.Pixels.get(j);
        pt1 = tg.Pixels.get(j + 1);
        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
        if (dist > 1.5 * stringWidth) {
          foundLongSegment = true;
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, 0, pt0, pt1, new Boolean(true));
        }
      }
      if (foundLongSegment === false) {
        if (middleSegment !== startIndex)
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, middleSegment, middleSegment + 1, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, middleSegment2, middleSegment2 + 1, new Boolean(true));
      }
    } else {
      // 2 ENY labels
      for (j = startIndex; j < tg.Pixels.size() - 1; j++) {
        pt0 = tg.Pixels.get(j);

        if (northestPt === null) {
          northestPt = pt0;
          northestPtIndex = j;
        }
        if (southestPt === null) {
          southestPt = pt0;
          southestPtIndex = j;
        }
        if (pt0.y >= northestPt.y) {
          northestPt = pt0;
          northestPtIndex = j;
        }

        if (pt0.y <= southestPt.y) {
          southestPt = pt0;
          southestPtIndex = j;
        }
      } //for

      middleSegment = northestPtIndex;
      middleSegment2 = southestPtIndex;
      if (middleSegment !== startIndex)
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, middleSegment, middleSegment + 1, new Boolean(true));
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, middleSegment2, middleSegment2 + 1, new Boolean(true));
    } //else
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "areasWithENY", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside areasWithENY", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.getVisibleMiddleSegment = function(tg, clipBounds) {
  var middleSegment = -1;
  try {
    var pt0 = null;
    var pt1 = null;
    var j = 0;
    var dist = 0;
    var lastPt = null;
    var doublesBack = false;
    var lineType = tg.get_LineType();
    middleSegment = Math.floor((tg.Pixels.size() + 1) / 2) - 1;
    var foundVisibleSegment = new Boolean(false);
    if (clipBounds === null)
      return middleSegment;
    for (j = middleSegment; j < tg.Pixels.size() - 1; j++) {
      pt0 = tg.Pixels.get(j);
      pt1 = tg.Pixels.get(j + 1);
      dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
      if (dist < 5)
        continue;
      //diagnostic
      if (j > 0 && lineType === 22121000) //boundary
      {
        if (lastPt === null)
          lastPt = tg.Pixels.get(j - 1);
        doublesBack = armyc2.c2sd.JavaTacticalRenderer.Modifier2.DoublesBack(lastPt, pt0, pt1);
        if (doublesBack === true)
          continue;
        lastPt = null;
      }
      //end section

      if (clipBounds.containsPt2(pt0.x, pt0.y) || clipBounds.containsPt2(pt1.x, pt1.y)) {
        middleSegment = j;
        foundVisibleSegment = new Boolean(true);
        break;
      }
    }
    if (foundVisibleSegment.valueOf() === false) {
      for (j = middleSegment; j > 0; j--) {
        pt0 = tg.Pixels.get(j);
        pt1 = tg.Pixels.get(j - 1);
        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
        if (dist < 5)
          continue;
        //diagnostic
        if (j > 0 && lineType === 22121000) //boundary
        {
          if (lastPt === null)
            lastPt = tg.Pixels.get(j - 1);
          doublesBack = armyc2.c2sd.JavaTacticalRenderer.Modifier2.DoublesBack(lastPt, pt0, pt1);
          if (doublesBack === true)
            continue;
          lastPt = null;
        }
        //end section
        if (clipBounds.containsPt2(pt0.x, pt0.y) || clipBounds.containsPt2(pt1.x, pt1.y)) {
          middleSegment = j - 1;
          foundVisibleSegment = new Boolean(true);
          break;
        }
      }
    }
    if (foundVisibleSegment.valueOf() === false) {
      //this will cause a problem if segment length=0;
      middleSegment = Math.floor(tg.Pixels.size() / 2) - 1;
      //middleSegment=-1;
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "getMiddleSegment", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getMiddleSegment", exc));
    } else {
      throw exc;
    }
  }
  return middleSegment;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.getvisibleMiddleSegment2 = function(tg, clipBounds) {
  var middleSegment = -1;
  try {
    var clipBoundsPoly = new armyc2.c2sd.graphics2d.Polygon();
    var pt0 = null;
    var pt1 = null;
    var j = 0;
    var x = 0;
    var y = 0;
    var dist = 0;
    var lastPt = null;
    var doublesBack = false;
    middleSegment = Math.floor((tg.Pixels.size() + 1) / 2) - 1;
    var foundVisibleSegment = new Boolean(false);
    if (clipBounds === null)
      return middleSegment;
    for (j = 0; j < clipBounds.size(); j++) {
      x = Math.floor(clipBounds.get(j).getX());
      y = Math.floor(clipBounds.get(j).getY());
      clipBoundsPoly.addPoint(x, y);
    }
    for (j = middleSegment; j < tg.Pixels.size() - 1; j++) {
      pt0 = tg.Pixels.get(j);
      pt1 = tg.Pixels.get(j + 1);
      dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
      if (dist < 5)
        continue;
      //diagnostic
      if (j > 0 && lineType === 22121000) //boundary
      {
        if (lastPt === null)
        ;
        lastPt = tg.Pixels.get(j - 1);
        doublesBack = armyc2.c2sd.JavaTacticalRenderer.Modifier2.DoublesBack(lastPt, pt0, pt1);
        if (doublesBack === true)
          continue;
        lastPt = null;
      }
      //end section

      if (clipBoundsPoly.contains(pt0.x, pt0.y) || clipBoundsPoly.contains(pt1.x, pt1.y)) {
        middleSegment = j;
        foundVisibleSegment = new Boolean(true);
        break;
      }
    }
    lastPt = null;
    if (foundVisibleSegment.valueOf() === false) {
      for (j = middleSegment; j > 0; j--) {
        pt0 = tg.Pixels.get(j);
        pt1 = tg.Pixels.get(j - 1);
        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
        if (dist < 5)
          continue;
        //diagnostic
        if (j > 0 && lineType === 22121000) //boundary
        {
          if (lastPt === null)
            lastPt = tg.Pixels.get(j - 1);
          doublesBack = armyc2.c2sd.JavaTacticalRenderer.Modifier2.DoublesBack(lastPt, pt0, pt1);
          if (doublesBack === true)
            continue;
          lastPt = null;
        }
        //end section
        if (clipBoundsPoly.contains(pt0.x, pt0.y) || clipBoundsPoly.contains(pt1.x, pt1.y)) {
          middleSegment = j - 1;
          foundVisibleSegment = new Boolean(true);
          break;
        }
      }
    }
    if (foundVisibleSegment.valueOf() === false) {
      //this will cause a problem if the segment length is 0
      middleSegment = Math.floor(tg.Pixels.size() / 2) - 1;
      //middleSegment=-1;
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "getMiddleSegment", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getMiddleSegment", exc));
    } else {
      throw exc;
    }
  }
  return middleSegment;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.removeModifier = function(tg, modifierType) {
  try {
    var j = 0;
    var modifier = null;
    for (j = 0; j < tg.modifiers.size(); j++) {
      modifier = tg.modifiers.get(j);
      if (modifier.textID === null)
        continue;
      if (modifier.textID.equalsIgnoreCase(modifierType)) {
        tg.modifiers.remove(modifier);
        break;
      }
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "removeModifier", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside removeModifier", exc));
    } else {
      throw exc;
    }
  }
  return;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.RemoveModifiers = function(tg, g2d, isTextFlipped, iteration) {
  try {
    if (!tg.get_Client().equalsIgnoreCase("cpof2d") && !tg.get_Client().equalsIgnoreCase("cpof3d"))
      return;
    var j = 0;
    var mbrPoly = null;
    switch (tg.get_LineType()) {
      case 22133200:
      case 22133100:
      case 22131200:
      case 22131300:
      case 23162100:
      case 24311000:
      case 24322200:
      case 24323200:
      case 24324200:
      case 24325200:
      case 24352000:
      case 24362000:
      case 23162200:
      case 24321200:
      case 24331200:
      case 24332200:
      case 24333200:
      case 24334200:
      case 24335200:
      case 24336200:
      case 24337200:
      case 24338200:
      case 24339200:
      case 24322300:
      case 24312000:
      case 24321300:
      case 24331300:
      case 24332300:
      case 24333300:
      case 24334300:
      case 24335300:
      case 24336300:
      case 24337300:
      case 24338300:
      case 24339300:
      case 24323300:
      case 24324300:
      case 24325300:
      case 24353000:
      case 24363000:
        if (tg.modifiers === null || tg.modifiers.isEmpty() || iteration !== 1)
          return;
        mbrPoly = new armyc2.c2sd.graphics2d.Polygon();
        for (j = 0; j < tg.Pixels.size(); j++)
          mbrPoly.addPoint(Math.floor(tg.Pixels.get(j).x), Math.floor(tg.Pixels.get(j).y));
        break;
      default:
        if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(tg.get_LineType()) === false || iteration !== 0)
          return;
        if (tg.modifiers === null || tg.modifiers.isEmpty())
          return;
        mbrPoly = new armyc2.c2sd.graphics2d.Polygon();
        for (j = 0; j < tg.Pixels.size(); j++)
          mbrPoly.addPoint(Math.floor(tg.Pixels.get(j).x), Math.floor(tg.Pixels.get(j).y));
    }
    var font = null;
    font = tg.get_Font();
    if (font === null) {
      font = g2d.getFont();
    }
    g2d.setFont(font);
    var metrics = g2d.getFontMetrics();
    var stringWidth = 0;
    var stringHeight = 0;
    var wfits = true;
    var w1fits = true;
    var ww1fits = true;
    var hfits = true;
    var h1fits = true;
    var h2fits = true;
    var modifier = null;
    var modifierType = "";
    var s = "";
    var pt0 = null;
    var pt1 = null;
    var pt2 = null;
    var pt3 = null;
    var pt4 = null;
    var lineFactor = 0;
    var x = 0;
    var y = 0;
    var x0 = 0;
    var y0 = 0;
    var x1 = 0;
    var y1 = 0;
    for (j = 0; j < tg.modifiers.size(); j++) {
      modifier = tg.modifiers.get(j);
      if (modifier.textID === null || modifier.textID.isEmpty())
        continue;
      modifierType = modifier.textID;
      lineFactor = modifier.lineFactor;
      if (isTextFlipped === true)
        lineFactor = -lineFactor;
      s = modifier.text;
      if (s === null || s.equals("")) {
        continue;
      }
      stringWidth = metrics.stringWidth(s) + 1;
      stringHeight = font.getSize();
      if (modifier.type === 3) {
        pt0 = modifier.textPath[0];
        x0 = pt0.x;
        y0 = pt0.y;
        x = Math.floor(x0) - Math.floor(Math.floor(stringWidth) / 2);
        y = Math.floor(y0) + Math.floor((stringHeight / 2)) + Math.floor((1.25 * lineFactor * stringHeight));
        x1 = Math.floor(x0) + Math.floor(Math.floor(stringWidth) / 2);
        y1 = Math.floor(y0) + Math.floor((stringHeight / 2)) + Math.floor((1.25 * lineFactor * stringHeight));
        if (mbrPoly.contains(x, y) && mbrPoly.contains(x1, y1))
          modifier.fitsMBR = true;
        else
          modifier.fitsMBR = false;
      } else if (modifier.type === 2) {
        pt0 = modifier.textPath[0];
        pt1 = modifier.textPath[1];
        var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
        pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(ptCenter, pt0, stringWidth / 2);
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(ptCenter, pt1, stringWidth / 2);
        if (lineFactor >= 0)
          pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(ptCenter, pt0, pt0, 3, Math.abs((lineFactor) * stringHeight));
        else
          pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(ptCenter, pt0, pt0, 2, Math.abs((lineFactor) * stringHeight));
        if (lineFactor >= 0)
          pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(ptCenter, pt1, pt1, 3, Math.abs((lineFactor) * stringHeight));
        else
          pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(ptCenter, pt1, pt1, 2, Math.abs((lineFactor) * stringHeight));
        x0 = pt2.x;
        y0 = pt2.y;
        x1 = pt3.x;
        y1 = pt3.y;
        if (mbrPoly.contains(x0, y0) && mbrPoly.contains(x1, y1))
          modifier.fitsMBR = true;
        else
          modifier.fitsMBR = false;
      } else
        modifier.fitsMBR = true;
    }
    for (j = 0; j < tg.modifiers.size(); j++) {
      modifier = tg.modifiers.get(j);
      if (modifier.textID === null || modifier.textID.isEmpty())
        continue;
      if (modifier.fitsMBR === false) {
        if (modifier.textID.equalsIgnoreCase("W"))
          wfits = false;
        else if (modifier.textID.equalsIgnoreCase("W1"))
          w1fits = false;
        else if (modifier.textID.equalsIgnoreCase("W+W1"))
          ww1fits = false;
        else if (modifier.textID.equalsIgnoreCase("H"))
          hfits = false;
        else if (modifier.textID.equalsIgnoreCase("H1"))
          h1fits = false;
        else if (modifier.textID.equalsIgnoreCase("H2"))
          h2fits = false;
      }
    }
    if (wfits === false || w1fits === false) {
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.removeModifier(tg, "W");
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.removeModifier(tg, "W1");
    }
    if (ww1fits === false) {
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.removeModifier(tg, "W+W1");
    }
    if (hfits === false || h1fits === false || h2fits === false) {
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.removeModifier(tg, "H");
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.removeModifier(tg, "H1");
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.removeModifier(tg, "H2");
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "RemoveModifeirs", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside RemoveModifiers", exc));
    } else {
      throw exc;
    }
  }
};
//armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers = function (tg, g2d, clipBounds) {
//    try {
//        if (tg.Pixels === null || tg.Pixels.isEmpty())
//            return;
//        var font = tg.get_Font();
//        var stringHeight = font.getSize();
//        var shiftLines = armyc2.c2sd.JavaLineArray.Channels.getShiftLines();
//        var usas = false;
//        var foundSegment = false;
//        var csFactor = 1;
//        var dist = 0;
//        var dist2 = 0;
//        var midPt = null;
//        var isChange1Area = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(tg.get_LineType(), null);
//        if (isChange1Area)
//            return;
//        var clipRect = null;
//        var clipArray = null;
//        if (clipBounds !== null && clipBounds instanceof java.util.ArrayList) {
//            clipArray = clipBounds;
//        }
//        if (clipBounds !== null && clipBounds instanceof armyc2.c2sd.graphics2d.Rectangle2D) {
//            clipRect = clipBounds;
//        }
//        if (clipBounds !== null && clipBounds instanceof armyc2.c2sd.graphics2d.Rectangle) {
//            clipRect = clipBounds;
//        }
//        var metrics = g2d.getFontMetrics();
//        var stringWidth = 0;
//        var stringWidth2 = 0;
//        var dash = "";
//        if (tg.get_DTG() !== null && tg.get_DTG1() !== null && tg.get_DTG().isEmpty() === false && tg.get_DTG1().isEmpty() === false)
//            dash = " - ";
//        if (tg.get_Client().equals("cpof3d"))
//            csFactor = 0.9;
//        switch (tg.get_LineType()) {
//            case 2237000:
//            case 24313000:
//            case 25224000:
//            case 25223000:
//            case 25225000:
//            case 25310000:
//            case 25320000:
//            case 23180000:
//            case 25330000:
//            case 25351000:
//            case 25352000:
//            case 25353000:
//            case 31770000:
//            case 31740000:
//            case 317100000:
//            case 25340000:
//            case 25221000:
//            case 25222000:
//            case 24250000:
//            case 24211000:
//            case 24260000:
//            case 23163000:
//            case 23162000:
//            case 22622000:
//            case 25211000:
//            case 25212000:
//            case 24321100:
//            case 22522100:
//            case 22535000:
//            case 22432000:
//            case 22621000:
//            case 24322100:
//            case 24323100:
//            case 24324100:
//            case 24325100:
//            case 24331100:
//            case 24332100:
//            case 24336100:
//            case 24338100:
//            case 24339100:
//            case 24351000:
//            case 24361000:
//            case 24337100:
//            case 24335100:
//            case 24333100:
//            case 24334100:
//            case 24314000:
//            case 22431000:
//            case 22431100:
//            case 22422000:
//            case 22421000:
//            case 22625000:
//            case 22626000:
//            case 22532000:
//            case 22531000:
//            case 22235000:
//            case 23114000:
//            case 23115000:
//            case 22231000:
//            case 22232000:
//            case 22233000:
//            case 22234000:
//            case 22234100:
//            case 22234200:
//            case 22223000:
//            case 22221000:
//            case 22222000:
//            case 22224000:
//            case 22222001:
//            case 22224001:
//            case 22225000:
//            case 221311000:
//            case 22131000:
//            case 22134000:
//            case 22624000:
//            case 22132000:
//            case 22133000:
//            case 22135000:
//            case 22136000:
//            case 22137000:
//            case 22138000:
//            case 22121000:
//            case 22340000:
//            case 22350000:
//            case 23164000:
//            case 22124000:
//            case 22523000:
//            case 22525000:
//            case 22526000:
//            case 22125000:
//            case 22613000:
//            case 22527000:
//            case 22528000:
//            case 24223000:
//            case 24225000:
//            case 24221000:
//            case 24222000:
//            case 24224000:
//            case 22122000:
//            case 22123000:
//            case 21700000:
//            case 21710000:
//            case 22320000:
//            case 22330000:
//            case 22524000:
//            case 23490000:
//            case 212000000:
//            case 212400000:
//            case 212410000:
//            case 26400000:
//            case 26410000:
//            case 26420000:
//            case 26430000:
//            case 26440000:
//            case 211800000:
//            case 24315000:
//            case 23111000:
//            case 23111001:
//            case 23113000:
//            case 24330000:
//            case 23350000:
//            case 23410000:
//            case 212210000:
//            case 212230000:
//            case 212220000:
//            case 212210001:
//            case 212230001:
//            case 212220001:
//            case 21800000:
//            case 24226000:
//            case 22131001:
//            case 15000000:
//            case 15000001:
//            case 10000000:
//            case 11000000:
//                break;
//            default:
//                return;
//        }
//        var factor = 1;
//        var linetype = tg.get_LineType();
//        var j = 0;
//        var k = 0;
//        var x = 0;
//        var y = 0;
//        if (tg.get_Font() !== null && tg.get_Font().getSize() > 0) {
//            factor = 10 / tg.get_Font().getSize();
//        } else
//            return;
//        var lastIndex = tg.Pixels.size() - 1;
//        var nextToLastIndex = tg.Pixels.size() - 2;
//        var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
//        var pt1 = null;
//        var pt2 = null;
//        var pt3 = null;
//        var ptLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(lastIndex));
//        var ptNextToLast = null;
//        if (lastIndex > 0)
//            ptNextToLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(lastIndex - 1));
//        if (tg.Pixels.size() > 1)
//            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(1));
//        armyc2.c2sd.JavaTacticalRenderer.Modifier2.shiftModifierPath(tg, pt0, pt1, ptLast, ptNextToLast);
//        var label = armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetCenterLabel(tg);
//        var pts = tg.Pixels.toArray();
//        var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble2(pts, pts.length);
//        var middleSegment = Math.floor((tg.Pixels.size() + 1) / 2) - 1;
//        if (clipRect !== null)
//            middleSegment = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getVisibleMiddleSegment(tg, clipRect);
//        else if (clipArray !== null)
//            middleSegment = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getVisibleMiddleSegment2(tg, clipArray);
//        var affiliation = tg.get_Affiliation();
//        if (tg.Pixels.size() > 2) {
//            pt2 = tg.Pixels.get(2);
//        }
//        if (tg.Pixels.size() > 3) {
//            pt3 = tg.Pixels.get(3);
//        }
//        var TLineFactor = 0;
//        var T1LineFactor = 0;
//        var lr = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
//        var ll = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
//        var ul = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
//        var ur = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
//        var index = 0;
//        var nextIndex = 0;
//        var size = tg.Pixels.size();
//        switch (linetype) {
//            case 10000000:
//            case 15000000:
//                if (tg.get_T1() === null || tg.get_T1().isEmpty())
//                {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, pt0, pt1, false);
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, ptLast, ptNextToLast, false);
//                }
//                else
//                {
//                    if (tg.get_T1().equalsIgnoreCase("1"))
//                    {
//                        for (j = 0; j < tg.Pixels.size() - 1; j++)
//                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 2, 0, tg.Pixels.get(j), tg.Pixels.get(j + 1), false);
//                    }
//                    else if (tg.get_T1().equalsIgnoreCase("2"))
//                    {
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, ptLast, ptNextToLast, false);
//                    }
//                    else if (tg.get_T1().equalsIgnoreCase("3"))
//                    {
//                        //either end of the polyline
//                        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
//                        stringWidth = metrics.stringWidth(tg.get_Name());
//                        stringWidth /= 2;
//                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt1, pt0, dist + stringWidth);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, pt2, pt2, false);
//                        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(ptNextToLast, ptLast);
//                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(ptNextToLast, ptLast, dist + stringWidth);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, pt2, pt2, false);
//                        //the intermediate points
//                        for (j = 1; j < tg.Pixels.size() - 1; j++)
//                        {
//                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, tg.Pixels.get(j), tg.Pixels.get(j), false);
//                        }
//                    }
//                    else    //t1 is set inadvertantly or for other graphics
//                    {
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, ptLast, ptNextToLast, false);
//                    }
//                }
//                break;
//            case 11000000:
//            case 15000001:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 22131001:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(true));
//                break;
//            case 2237000:
//                if (affiliation !== null && affiliation.equals("H")) {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_N(), 2, 0, 0, 1, new Boolean(true));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_N(), 2, 0, Math.floor(lastIndex / 2), Math.floor(lastIndex / 2) + 1, new Boolean(true));
//                }
//                if (tg.Pixels.size() === 3)
//                {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_H(), 2, 0, 0, 1, new Boolean(true));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_H(), 2, 0, 1, 2, new Boolean(true));
//                }
//                else
//                {
//                    if (lastIndex > 3)
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_H(), 2, 0, Math.floor(lastIndex / 2) - 1, Math.floor(lastIndex / 2), new Boolean(true));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_H(), 2, 0, Math.floor(lastIndex / 2) + 1, Math.floor(lastIndex / 2) + 2, new Boolean(true));
//                }
//                break;
//            case 24313000:
//                y = pt0.y;
//                index = 0;
//                for (j = 1; j < size - 1; j++) {
//                    if (tg.Pixels.get(j).y < y) {
//                        y = tg.Pixels.get(j).y;
//                        index = j;
//                    }
//                    if (index > 0) {
//                        if (tg.Pixels.get(index - 1).y < tg.Pixels.get(index + 1).y) {
//                            nextIndex = index - 1;
//                        } else {
//                            nextIndex = index + 1;
//                        }
//                    }
//                    if (index === 0) {
//                        if (pt1.y < ptNextToLast.y) {
//                            nextIndex = 1;
//                        } else {
//                            nextIndex = nextToLastIndex;
//                        }
//                    }
//                }
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, index, nextIndex, new Boolean(true));
//                break;
//            case 212210000:
//            case 212230000:
//            case 212220000:
//                stringWidth = Math.floor((1.5 * metrics.stringWidth(label)));
//                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
//                pt0.x += 2 * stringWidth;   //was 4
//                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
//                pt1.x -= 2 * stringWidth;   //was 4
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt0, pt0, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(true));
//                break;
//            case 212210001:
//            case 212230001:
//            case 212220001:
//                stringWidth = Math.floor((1.5 * metrics.stringWidth(label)));
//                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(1));
//                pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(2));
//                pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt1, pt2, stringWidth / 2);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, pt1, pt1, new Boolean(true));//was 3
//                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(2));
//                pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(1));
//                pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt1, pt2, stringWidth / 2);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, pt1, pt1, new Boolean(true));//was 3
//                //end section
//                break;
//            case 24225000:
//                pt0 = tg.Pixels.get(middleSegment);
//                pt1 = tg.Pixels.get(middleSegment + 1);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, middleSegment, middleSegment + 1, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG(), 2, 1 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG1(), 2, 2 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                break;
//            case 25224000:
//                stringWidth = Math.floor((1.5 * metrics.stringWidth("ALT")));
//                stringWidth2 = Math.floor((1.5 * metrics.stringWidth(label + tg.get_Name())));
//                if (stringWidth2 > stringWidth)
//                    stringWidth = stringWidth2;
//                foundSegment = false;
//                for (j = 0; j < tg.Pixels.size() - 1; j++) {
//                    pt0 = tg.Pixels.get(j);
//                    pt1 = tg.Pixels.get(j + 1);
//                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
//                    if (dist < stringWidth)
//                        continue;
//                    else {
//                        if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
//                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -3.5 * factor * csFactor, j, j + 1, new Boolean(false));
//                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "ALT", 2, -1.5 * factor * csFactor, j, j + 1, new Boolean(true));
//                        } else {
//                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, j, j + 1, new Boolean(false));
//                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "ALT", 2, 0.7 * csFactor, j, j + 1, new Boolean(true));
//                        }
//                        foundSegment = true;
//                    }
//                }
//                if (foundSegment === false) {
//                    pt0 = tg.Pixels.get(middleSegment);
//                    pt1 = tg.Pixels.get(middleSegment + 1);
//                    if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -3.5 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "ALT", 2, -1.5 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(true));
//                    } else {
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "ALT", 2, 0.7 * csFactor, middleSegment, middleSegment + 1, new Boolean(true));
//                    }
//                }
//                break;
//            case 25223000:
//                stringWidth = Math.floor((1.5 * metrics.stringWidth(label + tg.get_Name())));
//                foundSegment = false;
//                for (j = 0; j < tg.Pixels.size() - 1; j++) {
//                    pt0 = tg.Pixels.get(j);
//                    pt1 = tg.Pixels.get(j + 1);
//                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
//                    if (dist < stringWidth)
//                        continue;
//                    else {
//                        if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
//                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -3 * factor * csFactor, j, j + 1, new Boolean(false));
//                        } else {
//                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, j, j + 1, new Boolean(false));
//                        }
//                        foundSegment = true;
//                    }
//                }
//                if (foundSegment === false) {
//                    pt0 = tg.Pixels.get(middleSegment);
//                    pt1 = tg.Pixels.get(middleSegment + 1);
//                    if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -3 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    } else {
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    }
//                }
//                break;
//            case 25225000:
//                stringWidth = Math.floor((1.5 * metrics.stringWidth(label + tg.get_Name())));
//                foundSegment = false;
//                for (j = 0; j < tg.Pixels.size() - 1; j++) {
//                    pt0 = tg.Pixels.get(j);
//                    pt1 = tg.Pixels.get(j + 1);
//                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
//                    if (dist < stringWidth)
//                        continue;
//                    else {
//                        if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
//                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -4.5 * factor * csFactor, j, j + 1, new Boolean(false));
//                        } else {
//                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, j, j + 1, new Boolean(false));
//                        }
//                        foundSegment = true;
//                    }
//                }
//                if (foundSegment === false) {
//                    pt0 = tg.Pixels.get(middleSegment);
//                    pt1 = tg.Pixels.get(middleSegment + 1);
//                    if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -4.5 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    } else {
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    }
//                }
//                break;
//            case 25310000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "DETAINEE", 3, -1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "HOLDING", 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "AREA", 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 25320000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "EPW", 3, -1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "HOLDING", 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "AREA", 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 23180000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
//                break;
//            case 25330000:
//            case 25351000:
//            case 25352000:
//            case 25353000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 31770000:
//            case 31740000:
//            case 317100000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, tg.get_H(), 3, -0.5, ptCenter, ptCenter, "H");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, tg.get_H1(), 3, 0.5, ptCenter, ptCenter, "H1");
//                break;
//            case 25340000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "REFUGEE", 3, -1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "HOLDING", 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "AREA", 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 25221000:
//            case 25222000:
//                foundSegment = false;
//                for (j = 0; j < tg.Pixels.size() - 1; j++) {
//                    pt0 = tg.Pixels.get(j);
//                    pt1 = tg.Pixels.get(j + 1);
//                    stringWidth = Math.floor((1.5 * metrics.stringWidth(label + tg.get_Name())));
//                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
//                    if (dist < stringWidth)
//                        continue;
//                    else {
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1 * csFactor, j, j + 1, new Boolean(false));
//                        foundSegment = true;
//                    }
//                }
//                if (foundSegment === false)
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                break;
//            case 24250000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -0.8 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                break;
//            case 24211000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -0.8 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0.8 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                break;
//            case 24260000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -1 * csFactor, 0, 1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 1 * csFactor, 0, 1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_T1(), 2, 2 * csFactor, 0, 1, new Boolean(false));
//                break;
//            case 23163000:
//                if (tg.Pixels.get(1).y > tg.Pixels.get(0).y) {
//                    pt0 = tg.Pixels.get(1);
//                    pt1 = tg.Pixels.get(3);
//                    pt2 = tg.Pixels.get(0);
//                    pt3 = tg.Pixels.get(2);
//                } else {
//                    pt0 = tg.Pixels.get(0);
//                    pt1 = tg.Pixels.get(2);
//                    pt2 = tg.Pixels.get(1);
//                    pt3 = tg.Pixels.get(3);
//                }
//                pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pt2, -20);
//                pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt1, pt3, -20);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 0, pt2, pt3, new Boolean(false));
//                break;
//            case 23162000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetMBR(tg, ul, ur, lr, ll);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_H(), 2, -1.5 * factor * csFactor, ul, ur, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), 2, 1.5 * factor * csFactor, ll, lr, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
//                break;
//            case 22622000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetMBR(tg, ul, ur, lr, ll);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, 1.35 * factor * csFactor, ll, lr, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "(PL " + tg.get_Name() + ")", 2, 1.1 * (factor * csFactor + csFactor), ll, lr, new Boolean(false));
//                break;
//            case 25211000:
//            case 25212000:
//                var convoyBlankString = armyc2.c2sd.JavaTacticalRenderer.Modifier2.blankString(metrics, 35);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_H() + convoyBlankString + tg.get_H1(), 2, 0, 0, 1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 1.2 * csFactor, 0, 1, new Boolean(false));
//                break;
//            case 22522100:
//                if (affiliation !== null && affiliation.equals("H")) {
//                    k = tg.Pixels.size();
//                    j = armyc2.c2sd.JavaLineArray.lineutility.GetDirAtkAirMiddleSegment(tg.Pixels.toArray(new Array(tg.Pixels.size())), tg.Pixels.size());
//                    pt1 = tg.Pixels.get(k - j - 1);
//                    pt0 = tg.Pixels.get(k - j);
//                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
//                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, 2 * dist / 3);
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_N(), 2, 0, pt0, pt1, true);
//                }
//                break;
//            case 22535000:
//            case 22432000:
//            case 22621000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 24322100:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -3 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -2 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "MIN ALT: " + tg.get_H(), 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false), "H");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "MAX ALT: " + tg.get_H1(), 3, 0, ptCenter, ptCenter, new Boolean(false), "H1");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "Grids: " + tg.get_H2(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false), "H2");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "EFF: " + tg.get_DTG(), 3, 2 * csFactor, ptCenter, ptCenter, new Boolean(false), "W");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), 3, 3 * csFactor, ptCenter, ptCenter, new Boolean(false), "W1");
//                break;
//            case 24323100:
//            case 24325100:
//            case 24351000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false), "W+W1");
//                break;
//            case 24361000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false), "W+W1");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_H1(), 3, 2 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 24324100:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(true), "W+W1");
//                break;
//            case 24321100:
//            case 24331100:
//            case 24332100:
//            case 24336100:
//            case 24338100:
//            case 24339100:
//            case 24337100:
//            case 24335100:
//            case 24333100:
//            case 24334100:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetMBR(tg, ul, ur, lr, ll);
//                var ptLeft = ul;
//                var ptRight = ur;
//                if (tg.get_Client().equalsIgnoreCase("ge")) {
//                    ptLeft.x -= Math.floor(font.getSize() / 2);
//                    ptRight.x -= Math.floor(font.getSize() / 2);
//                }
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), 1, 0.5 * csFactor, ptLeft, ptRight, new Boolean(false), "W");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), 1, 1.5 * csFactor, ptLeft, ptRight, new Boolean(false), "W1");
//                break;
//            case 24314000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false), "W+W1");
//                break;
//            case 22431000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_EchelonSymbol(), 2, -0.2 * csFactor, 0, 1, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
//                break;
//            case 22431100:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_EchelonSymbol(), 2, -0.2 * csFactor, 0, 1, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
//                break;
//            case 22422000:
//                pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt1, pt0, -22, 0);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(false));
//                break;
//            case 22421000:
//                stringWidth = metrics.stringWidth(label);
//                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
//                if (pt0.x > ptLast.x)
//                    pt1.x += 32;
//                else
//                {
//                    pt1.x -= stringWidth - 8;
//                    pt1.y -= 1.1 * stringHeight;
//                }
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(false));
//                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptLast);
//                if (pt0.x > ptLast.x)
//                {
//                    pt1.x -= stringWidth - 8;
//                    pt1.y -= 1.1 * stringHeight;
//                }
//                else
//                    pt1.x += 32;
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(false));
//                break;
//            case 22625000:
//            case 22626000:
//            case 22532000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 22531000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "ASLT", 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "PSN", 3, 0, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 22235000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1.5 * csFactor, ptCenter, ptCenter, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "TIME FROM: " + tg.get_DTG(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(true), "W");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "TIME TO: " + tg.get_DTG1(), 3, 1.5 * csFactor, ptCenter, ptCenter, new Boolean(true), "W1");
//                break;
//            case 23114000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false), "W");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), 3, 1.5 * csFactor, ptCenter, ptCenter, new Boolean(false), "W1");
//                break;
//            case 23115000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), 3, 0, ptCenter, ptCenter, new Boolean(true), "W");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(true), "W1");
//                break;
//            case 22231000:
//            case 22232000:
//            case 22233000:
//            case 22234000:
//            case 22234100:
//            case 22234200:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -2.5, ptCenter, ptCenter, new Boolean(false), "");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -1.5, ptCenter, ptCenter, new Boolean(false), "T");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "MIN ALT: " + tg.get_H(), 3, -0.5, ptCenter, ptCenter, new Boolean(false), "H");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "MAX ALT: " + tg.get_H1(), 3, 0.5, ptCenter, ptCenter, new Boolean(false), "H1");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "TIME FROM: " + tg.get_DTG(), 3, 1.5, ptCenter, ptCenter, new Boolean(false), "W");
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "TIME TO: " + tg.get_DTG1(), 3, 2.5, ptCenter, ptCenter, new Boolean(false), "W1");
//                break;
//            case 22223000:
//                if (tg.getSymbologyStandard() === 1) {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "SAAFR " + tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Max Alt: " + tg.get_H1(), 2, -4 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Min Alt: " + tg.get_H(), 2, -5 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Width: " + tg.get_H2(), 2, -6 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Name: " + tg.get_Name(), 2, -7 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "DTG Start: " + tg.get_DTG(), 2, -3 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "DTG End: " + tg.get_DTG1(), 2, -2 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                } else {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Max Alt: " + tg.get_H1(), 2, -2 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Min Alt: " + tg.get_H(), 2, -3 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Width: " + tg.get_H2(), 2, -4 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Name: " + tg.get_Name(), 2, -5 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                }
//                break;
//            case 22221000:
//                if (tg.getSymbologyStandard() === 1) {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + " " + tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Max Alt: " + tg.get_H1(), 2, -4 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Min Alt: " + tg.get_H(), 2, -5 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Width: " + tg.get_H2(), 2, -6 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Name: " + tg.get_Name(), 2, -7 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "DTG Start: " + tg.get_DTG(), 2, -3 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "DTG End: " + tg.get_DTG1(), 2, -2 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                } else {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -0.5 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_T1(), 2, 0.5 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                }
//                break;
//            case 22222001:
//            case 22224001:
//            case 22222000:
//            case 22224000:
//            case 22225000:
//                if (tg.getSymbologyStandard() === 1) {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + " " + tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Max Alt: " + tg.get_H1(), 2, -4 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Min Alt: " + tg.get_H(), 2, -5 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Width: " + tg.get_H2(), 2, -6 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Name: " + tg.get_Name(), 2, -7 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "DTG Start: " + tg.get_DTG(), 2, -3 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "DTG End: " + tg.get_DTG1(), 2, -2 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                } else {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, -0.5, middleSegment, middleSegment + 1, new Boolean(false));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 0.5, middleSegment, middleSegment + 1, new Boolean(false));
//                }
//                break;
//            case 221311000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
//                break;
//            case 22131000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 22134000:
//            case 22624000:
//                if (affiliation !== null && affiliation.equals("H")) {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_N(), 2, 0, 0, 1, new Boolean(true));
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_N(), 2, 0, middleSegment, middleSegment + 1, new Boolean(true));
//                }
//                break;
//            case 22132000:
//            case 22133000:
//            case 22135000:
//            case 22136000:
//            case 22137000:
//            case 22138000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 22121000:
//                if (clipRect !== null)
//                {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddBoundaryModifiers(tg, g2d, clipRect);
//                }
//                else if (clipArray !== null)
//                {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddBoundaryModifiers2(tg, g2d, clipArray);
//                }
//                else
//                {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddBoundaryModifiers(tg, g2d, null);
//                }
//                break;
//            case 22340000:
//            case 22350000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
//                if (affiliation !== null && affiliation.equals("H")) {
//                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, pt1, new Boolean(true));
//                    if (middleSegment !== 0) {
//                        pt0 = tg.Pixels.get(middleSegment);
//                        pt1 = tg.Pixels.get(middleSegment + 1);
//                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, pt1, new Boolean(true));
//                    }
//                }
//                break;
//            case 23164000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
//                if (affiliation !== null && affiliation.equals("H")) {
//                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, pt1, new Boolean(true));
//                    if (middleSegment !== 0) {
//                        pt0 = tg.Pixels.get(middleSegment);
//                        pt1 = tg.Pixels.get(middleSegment + 1);
//                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, pt1, new Boolean(true));
//                    }
//                }
//                break;
//            case 22124000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + tg.get_Name(), 1, T1LineFactor, pt0, pt1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + tg.get_Name(), 1, T1LineFactor, ptLast, ptNextToLast, new Boolean(false));
//                break;
//            case 22525000:
//            case 22526000:
//            case 22613000:
//            case 22527000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "(PL " + tg.get_Name() + ")", 1, 1 * csFactor, pt0, pt1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, pt0, pt1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "(PL " + tg.get_Name() + ")", 1, 1 * csFactor, ptLast, ptNextToLast, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, ptLast, ptNextToLast, new Boolean(false));
//                break;
//            case 22125000:
//            case 22523000:
//            case 22528000:
//            case 24223000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, -1, pt0, pt1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, -1, ptLast, ptNextToLast, new Boolean(false));
//                break;
//            case 24221000:
//                pt0 = tg.Pixels.get(0);
//                pt1 = tg.Pixels.get(1);
//                pt2 = tg.Pixels.get(tg.Pixels.size() - 1);
//                pt3 = tg.Pixels.get(tg.Pixels.size() - 2);
//                dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
//                dist2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt2, pt3);
//                stringWidth = Math.floor((metrics.stringWidth(tg.get_Name() + " " + label)));
//                stringWidth2 = Math.floor((metrics.stringWidth(tg.get_DTG())));
//                if (stringWidth2 > stringWidth)
//                    stringWidth = stringWidth2;
//                if (tg.Pixels.size() === 2) {
//                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name() + " " + label, 2, -0.7 * csFactor, pt0, pt1, false);
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
//                    if (dist > 2 * stringWidth + 5) {
//                        pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
//                        pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
//                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name() + " " + label, 2, -0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
//                    }
//                } else {
//                    var dist3 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt2);
//                    if (dist > stringWidth + 5 || dist >= dist2 || dist3 > stringWidth + 5) {
//                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name() + " " + label, 2, -0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
//                    }
//                    if (dist2 > stringWidth + 5 || dist2 > dist || dist3 > stringWidth + 5) {
//                        pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
//                        pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
//                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name() + " " + label, 2, -0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
//                    }
//                }
//                break;
//            case 24222000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -0.7 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 0.7 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
//                break;
//            case 24224000:
//                pt0 = tg.Pixels.get(0);
//                pt1 = tg.Pixels.get(1);
//                pt2 = tg.Pixels.get(tg.Pixels.size() - 1);
//                pt3 = tg.Pixels.get(tg.Pixels.size() - 2);
//                dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
//                dist2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt2, pt3);
//                stringWidth = Math.floor((metrics.stringWidth(label + " " + tg.get_Name())));
//                stringWidth2 = Math.floor((metrics.stringWidth(tg.get_DTG())));
//                if (stringWidth2 > stringWidth)
//                    stringWidth = stringWidth2;
//                if (tg.Pixels.size() === 2) {
//                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), 2, -0.7 * csFactor, pt0, pt1, false);
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
//                    if (dist > 2 * stringWidth + 5) {
//                        pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
//                        pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
//                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), 2, -0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
//                    }
//                } else {
//                    dist3 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt2);
//                    if (dist > stringWidth + 5 || dist >= dist2 || dist3 > stringWidth + 5) {
//                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), 2, -0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
//                    }
//                    if (dist2 > stringWidth + 5 || dist2 > dist || dist3 > stringWidth + 5) {
//                        pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
//                        pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
//                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), 2, -0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
//                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
//                    }
//                }
//                break;
//            case 22122000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, pt0, pt1, new Boolean(false));
//                if (affiliation !== null && affiliation.equals("H")) {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 1, -1 * csFactor, pt0, pt1, new Boolean(false));
//                }
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, ptLast, ptNextToLast, new Boolean(false));
//                if (affiliation !== null && affiliation.equals("H")) {
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 1, -1 * csFactor, ptLast, ptNextToLast, new Boolean(false));
//                }
//                break;
//            case 22123000:
//                var shiftFactor = 1;
//                if (affiliation !== null && affiliation.equals("H")) {
//                    if (pt0.x < pt1.x) {
//                        TLineFactor = -shiftFactor;
//                    } else {
//                        TLineFactor = shiftFactor;
//                    }
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 1, TLineFactor, pt0, pt1, new Boolean(false));
//                    if (ptNextToLast.x < ptLast.x) {
//                        TLineFactor = -shiftFactor;
//                    } else {
//                        TLineFactor = shiftFactor;
//                    }
//                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 1, TLineFactor, ptLast, ptNextToLast, new Boolean(false));
//                }
//                break;
//            case 21700000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, 1, 0, new Boolean(false));
//                break;
//            case 21710000:
//                stringWidth = Math.floor((1.5 * metrics.stringWidth(label)));
//                pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, 0, pt1, pt2, false);
//                break;
//            case 22330000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -0.7 * csFactor, 1, 0, new Boolean(false));
//                break;
//            case 22320000:
//                midPt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(lastIndex - 1), tg.Pixels.get(nextToLastIndex - 1), 0);
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 2, 0, tg.Pixels.get(lastIndex - 1), midPt, new Boolean(false));
//                break;
//            case 22524000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, 1, 0, new Boolean(false));
//                break;
//            case 23490000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, 1, 0, new Boolean(true));
//                break;
//            case 212000000:
//            case 212400000:
//            case 212410000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, 0, 1, new Boolean(true));
//                break;
//            case 26400000:
//            case 26410000:
//            case 26420000:
//            case 26430000:
//            case 26440000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, 0, tg.Pixels.get(0), tg.Pixels.get(1), new Boolean(true));
//                break;
//            case 211800000:
//            case 24315000:
//            case 24226000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, ptCenter, ptCenter, new Boolean(true));
//                break;
//            case 23111000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_T1(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 23111001:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(false));
//                break;
//            case 23113000:
//            case 24330000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
//                break;
//            case 23350000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_EchelonSymbol(), 2, 0, 0, 1, new Boolean(true));
//                break;
//            case 23410000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "1", 3, 0, pt1, pt1, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "2", 3, 0, pt2, pt2, new Boolean(true));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "3", 3, 0, pt3, pt3, new Boolean(true));
//                break;
//            case 24311000:
//            case 24312000:
//            case 15000002:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, pt0, pt0, new Boolean(false));
//                break;
//            case 21800000:
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG(), 2, -1 * csFactor, 0, 1, new Boolean(false));
//                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, 0, 1, new Boolean(true));
//                break;
//            default:
//                break;
//        }
//    } catch (exc) {
//        if (Clazz.instanceOf(exc)) {
//            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddModifiers", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddModifiers", exc));
//        } else {
//            throw exc;
//        }
//    }
//};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.getChange1Height = function(tg) {
  var height = 0;
  try {
    switch (tg.get_LineType()) {
      case 22133200:
      case 23162200:
      //case 24326101:
      case 24321200:
      case 24323200:
      case 24322200:
      case 24324200:
      case 24325200:
      case 24331200:
      case 24332200:
      case 24333200:
      case 24334200:
      case 24335200:
      case 24336200:
      case 24337200:
      case 24338200:
      case 24339200:
      case 24352000:
        //case 24362000:
        break;
      default:
        return 0;
    }
    var x0 = tg.Pixels.get(0).x;
    var y0 = tg.Pixels.get(0).y;
    var x1 = tg.Pixels.get(1).x;
    var y1 = tg.Pixels.get(1).y;
    var deltax = x1 - x0;
    var deltay = y1 - y0;
    height = Math.sqrt(deltax * deltax + deltay * deltay);
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "scaleModifiers", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getChange1Height", exc));
    } else {
      throw exc;
    }
  }
  return height;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.scaleModifiers = function(tg) {
  try {
    if (armyc2.c2sd.renderer.utilities.RendererSettings.getInstance().getAutoCollapseModifiers() === false)
      return;
    if (!tg.get_Client().equalsIgnoreCase("ge"))
      return;
    if (tg.modifiers === null || tg.modifiers.isEmpty())
      return;
    var linetype = tg.get_LineType();
    var isClosedPolygon = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(linetype);
    var isChange1Area = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(linetype, null);
    if (!isClosedPolygon && !isChange1Area)
      return;
    switch (linetype) {
      case 24326200:
      case 24326100:
      case 24326101:
      case 243111000:
      case 243112000:
        return;
      default:
        break;
    }

    var ptUl = new armyc2.c2sd.JavaLineArray.POINT2(),
      ptUr = new armyc2.c2sd.JavaLineArray.POINT2(),
      ptLr = new armyc2.c2sd.JavaLineArray.POINT2(),
      ptLl = new armyc2.c2sd.JavaLineArray.POINT2();
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetMBR(tg, ptUl, ptUr, ptLr, ptLl);
    var sz = tg.get_Font().getSize();
    //heightMBR is half the MBR height
    //var heightMBR = Math.abs(ptLr.y - ptUr.y) / 2;
    var heightMBR = 0;
    var change1Height = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getChange1Height(tg);
    if (change1Height <= 0)
      heightMBR = Math.abs(ptLr.y - ptUr.y) / 2;
    else
      heightMBR = change1Height;

    var heightModifiers = 0;
    var modifiers = tg.modifiers;
    var modifier = null;
    var minLF = Integer.MAX_VALUE;
    var j = 0;
    var isValid = false;
    for (j = 0; j < modifiers.size(); j++) {
      modifier = modifiers.get(j);
      if (modifier.type === armyc2.c2sd.JavaTacticalRenderer.Modifier2.toEnd)
        continue;
      if (modifier.type === armyc2.c2sd.JavaTacticalRenderer.Modifier2.aboveMiddle && isChange1Area === 0)
        continue;
      if (modifier.lineFactor < minLF)
        minLF = modifier.lineFactor;
      isValid = true;
    }
    //if there are no 'area' modifiers then exit early
    if (!isValid)
      return;
    heightModifiers = Math.abs(minLF) * sz;
    var expandModifiers = false,
      shrinkModifiers = false;
    if (heightModifiers > heightMBR)
      shrinkModifiers = true;
    else if (heightModifiers < 0.5 * heightMBR)
      expandModifiers = true;
    var addEllipsis = false;
    //modifierE is ellipses modifier
    var modifierE = new armyc2.c2sd.JavaTacticalRenderer.Modifier2();
    if (expandModifiers) {
      var factor = heightMBR / heightModifiers;
      factor = 1 + (factor - 1) / 4;
      if (factor > 1)
        factor = 1;
      for (j = 0; j < modifiers.size(); j++) {
        modifier = modifiers.get(j);
        if (modifier.type === armyc2.c2sd.JavaTacticalRenderer.Modifier2.aboveMiddle) {
          if (isChange1Area === false)
            continue;
        } else if (modifier.type !== armyc2.c2sd.JavaTacticalRenderer.Modifier2.area)
          continue;
        modifier.lineFactor *= factor;
      }
    } else if (shrinkModifiers) {
      var deltaLF = (heightModifiers - heightMBR) / sz;
      var newLF = 0;
      //use maxLF for the ellipsis modifier
      var maxLF = 0;
      for (j = 0; j < modifiers.size(); j++) {
        modifier = modifiers.get(j);
        if (modifier.type === armyc2.c2sd.JavaTacticalRenderer.Modifier2.aboveMiddle) {
          if (isChange1Area === false)
            continue;
        } else if (modifier.type !== armyc2.c2sd.JavaTacticalRenderer.Modifier2.area)
          continue;
        newLF = modifier.lineFactor + deltaLF;
        if (Math.abs(newLF * sz) >= heightMBR) {
          //flag the modifier to remove
          if (modifier.lineFactor > minLF) {
            modifierE.type = modifier.type;
            modifier.type = 7;
            if (!modifier.text.isEmpty())
              addEllipsis = true;
          }
          modifier.lineFactor = newLF;
          //modifierE.type = armyc2.c2sd.JavaTacticalRenderer.Modifier2.area;
          modifierE.textPath = modifier.textPath;
          continue;
        }
        modifier.lineFactor = newLF;
      }
      var modifiers2 = new java.util.ArrayList();
      for (j = 0; j < modifiers.size(); j++) {
        modifier = modifiers.get(j);
        if (modifier.type !== 7) {
          if (modifier.lineFactor > maxLF)
            maxLF = modifier.lineFactor;
          modifiers2.add(modifier);
        }
      }
      if (addEllipsis) {
        var s = String.fromCharCode(9679);
        var echelonSymbol = s + s + s;
        modifierE.text = echelonSymbol;
        modifierE.lineFactor = maxLF + 1;
        modifiers2.add(modifierE);
      }
      tg.modifiers = modifiers2;
    } //end shrink modifiers
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "scaleModifiers", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside scaleModifiers", exc));
    } else {
      throw exc;
    }
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiersGeo = function(tg, g2d, clipBounds, converter) {
  try {
    if (tg.Pixels === null || tg.Pixels.isEmpty())
      return;
    var origPoints = null;
    var font = tg.get_Font();
    var stringHeight = font.getSize();
    var shiftLines = armyc2.c2sd.JavaLineArray.Channels.getShiftLines();
    var usas = false;
    var foundSegment = false;
    var csFactor = 1;
    var dist = 0;
    var dist2 = 0;
    var midPt = null;
    var clipRect = null;
    var clipArray = null;
    if (clipBounds !== null && clipBounds instanceof java.util.ArrayList) {
      clipArray = clipBounds;
    }
    if (clipBounds !== null && clipBounds instanceof armyc2.c2sd.graphics2d.Rectangle2D) {
      clipRect = clipBounds;
    }
    if (clipBounds !== null && clipBounds instanceof armyc2.c2sd.graphics2d.Rectangle) {
      clipRect = clipBounds;
    }
    var metrics = g2d.getFontMetrics();
    var stringWidth = 0;
    var stringWidth2 = 0;
    var dash = "";
    if (tg.get_DTG() !== null && tg.get_DTG1() !== null && tg.get_DTG().isEmpty() === false && tg.get_DTG1().isEmpty() === false)
      dash = " - ";
    if (tg.get_Client().equals("cpof3d"))
      csFactor = 0.9;
  	
    switch (tg.get_LineType()) {
      case 2237000:
      case 24313000:
      case 25224000:
      case 25223000:
      case 25225000:
      case 25310000:
      case 25320000:
      case 23180000:
      case 25330000:
      case 25351000:
      case 25352000:
      case 25353000:
      case 31770000:
      case 31740000:
      case 317100000:
      case 25340000:
      case 25221000:
      case 25222000:
      case 24250000:
      case 24211000:
      case 24260000:
      case 23163000:
      case 23162000:
      case 22622000:
      case 25211000:
      case 25212000:
      case 24321100:
      case 22522100:
      case 22535000:
      case 22432000:
      case 22621000:
      case 24322100:
      case 24323100:
      case 24324100:
      case 24325100:
      case 24331100:
      case 24332100:
      case 24336100:
      case 24338100:
      case 24339100:
      case 24351000:
      case 24361000:
      case 24337100:
      case 24335100:
      case 24333100:
      case 24334100:
      case 24314000:
      case 22431000:
      case 22431100:
      case 22422000:
      case 22421000:
      case 22625000:
      case 22626000:
      case 22532000:
      case 22531000:
      case 22235000:
      case 23114000:
      case 23115000:
      case 22231000:
      case 22232000:
      case 22233000:
      case 22234000:
      case 22234100:
      case 22234200:
      case 22223000:
      case 22221000:
      case 22222000:
      case 22224000:
      case 22222001:
      case 22224001:
      case 22225000:
      case 221311000:
      case 22131000:
      case 22134000:
      case 22624000:
      case 22132000:
      case 22133000:
      case 22135000:
      case 22136000:
      case 22137000:
      case 22138000:
      case 22121000:
      case 22340000:
      case 22350000:
      case 23164000:
      case 22124000:
      case 22523000:
      case 22525000:
      case 22526000:
      case 22125000:
      case 22613000:
      case 22527000:
      case 22528000:
      case 24223000:
      case 24225000:
      case 24221000:
      case 24222000:
      case 24224000:
      case 22122000:
      case 22123000:
      case 21700000:
      case 21710000:
      case 22320000:
      case 22330000:
      case 22524000:
      case 23490000:
      case 212000000:
      case 212400000:
      case 212410000:
      case 26400000:
      case 26410000:
      case 26420000:
      case 26430000:
      case 26440000:
      case 211800000:
      case 24315000:
      case 23111000:
      case 23111001:
      case 23113000:
      case 24330000:
      case 23350000:
      case 23410000:
      case 212210000:
      case 212230000:
      case 212220000:
      case 212210001:
      case 212230001:
      case 212220001:
      case 21800000:
      case 24226000:
      case 22131001:
      case 15000000:
      case 15000001:
      case 10000000:
      case 11000000:
        origPoints = armyc2.c2sd.JavaLineArray.lineutility.getDeepCopy(tg.Pixels);
        break;
      default:
        return;
    }
    var factor = 1;
    var linetype = tg.get_LineType();
    var j = 0;
    var k = 0;
    var x = 0;
    var y = 0;
    if (tg.get_Font() !== null && tg.get_Font().getSize() > 0) {
      factor = 10 / tg.get_Font().getSize();
    } else
      return;
    var lastIndex = tg.Pixels.size() - 1;
    var nextToLastIndex = tg.Pixels.size() - 2;
    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var pt1 = null;
    var pt2 = null;
    var pt3 = null;
    var ptLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(lastIndex));
    var ptNextToLast = null;
    if (lastIndex > 0)
      ptNextToLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(lastIndex - 1));
    if (tg.Pixels.size() > 1)
      pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(1));
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.shiftModifierPath(tg, pt0, pt1, ptLast, ptNextToLast);
    var label = armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetCenterLabel(tg);
    var pts = tg.Pixels.toArray();
    //var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble2(pts, pts.length);
    var ptCenter = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_center(tg.LatLongs);
    if (ptCenter === null)
      ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble2(pts, pts.length);
    else {
      var pt = converter.GeoToPixels(new armyc2.c2sd.graphics2d.Point2D(ptCenter.x, ptCenter.y));
      ptCenter.x = pt.x;
      ptCenter.y = pt.y;
    }

    var middleSegment = Math.floor((tg.Pixels.size() + 1) / 2) - 1;
    if (clipRect !== null)
      middleSegment = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getVisibleMiddleSegment(tg, clipRect);
    else if (clipArray !== null)
      middleSegment = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getVisibleMiddleSegment2(tg, clipArray);
    var affiliation = tg.get_Affiliation();
    if (tg.Pixels.size() > 2) {
      pt2 = tg.Pixels.get(2);
    }
    if (tg.Pixels.size() > 3) {
      pt3 = tg.Pixels.get(3);
    }
    var TLineFactor = 0;
    var T1LineFactor = 0;
    var lr = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var ll = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var ul = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var ur = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var index = 0;
    var nextIndex = 0;
    var size = tg.Pixels.size();
	var dAngle0;
	var dAngle1;
	var stringHeight;
    switch (linetype) {
      case 10000000:
      case 15000000:
        //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, pt0, pt1, new Boolean(false));
        //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, ptLast, ptNextToLast, new Boolean(false));
        if (tg.get_T1() === null || tg.get_T1().isEmpty()) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, pt0, pt1, false);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, ptLast, ptNextToLast, false);
        } else {
          if (tg.get_T1().equalsIgnoreCase("1")) {
            for (j = 0; j < tg.Pixels.size() - 1; j++)
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 2, 0, tg.Pixels.get(j), tg.Pixels.get(j + 1), false);
          } else if (tg.get_T1().equalsIgnoreCase("2")) {
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, ptLast, ptNextToLast, false);
          } else if (tg.get_T1().equalsIgnoreCase("3")) {
            //either end of the polyline
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
            stringWidth = metrics.stringWidth(tg.get_Name());
            stringWidth /= 2;
            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt1, pt0, dist + stringWidth);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, pt2, pt2, false);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(ptNextToLast, ptLast);
            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(ptNextToLast, ptLast, dist + stringWidth);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, pt2, pt2, false);
            //the intermediate points
            for (j = 1; j < tg.Pixels.size() - 1; j++) {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, tg.Pixels.get(j), tg.Pixels.get(j), false);
            }
          } else //t1 is set inadvertently or for other graphics
          {
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 1, T1LineFactor, ptLast, ptNextToLast, false);
          }
        }
        break;
      case 11000000:
      case 15000001:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        break;
      case 22131001:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(true));
        break;
      case 2237000:
        if (armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithTwoLabels(tg, tg.get_H(), tg.get_N(), g2d) === true)
          break;
        if (affiliation !== null && affiliation.equals("H")) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_N(), 2, 0, 0, 1, new Boolean(true));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_N(), 2, 0, Math.floor(lastIndex / 2), Math.floor(lastIndex / 2) + 1, new Boolean(true));
        }
        if (tg.Pixels.size() === 3) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_H(), 2, 0, 0, 1, new Boolean(true));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_H(), 2, 0, 1, 2, new Boolean(true));
        } else {
          if (lastIndex > 3)
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_H(), 2, 0, Math.floor(lastIndex / 2) - 1, Math.floor(lastIndex / 2), new Boolean(true));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_H(), 2, 0, Math.floor(lastIndex / 2) + 1, Math.floor(lastIndex / 2) + 2, new Boolean(true));
        }
        break;
      case 24313000:
        y = pt0.y;
        index = 0;
        for (j = 1; j < size - 1; j++) {
          if (tg.Pixels.get(j).y < y) {
            y = tg.Pixels.get(j).y;
            index = j;
          }
          if (index > 0) {
            if (tg.Pixels.get(index - 1).y < tg.Pixels.get(index + 1).y) {
              nextIndex = index - 1;
            } else {
              nextIndex = index + 1;
            }
          }
          if (index === 0) {
            if (pt1.y < ptNextToLast.y) {
              nextIndex = 1;
            } else {
              nextIndex = nextToLastIndex;
            }
          }
        }
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, index, nextIndex, new Boolean(true));
        break;
      case 212210000:
      case 212230000:
      case 212220000:
        stringHeight = parseInt(0.5 * metrics.getHeight());
		dAngle0 = Math.atan2(tg.Pixels.get(0).y - tg.Pixels.get(1).y, tg.Pixels.get(0).x - tg.Pixels.get(1).x);
		dAngle1 = Math.atan2(tg.Pixels.get(0).y - tg.Pixels.get(2).y, tg.Pixels.get(0).x - tg.Pixels.get(2).x);
        pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
        pt0.x -= 30 * Math.cos(dAngle0);
		pt0.y -= 30 * Math.sin(dAngle0) + stringHeight;
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
        pt1.x -= 30 * Math.cos(dAngle1);
		pt1.y -= 30 * Math.sin(dAngle1) + stringHeight;
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt0, pt0, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(true));
        break;
      case 212210001:
      case 212230001:
      case 212220001:
        //                stringWidth = Math.floor((1.5 * metrics.stringWidth(label)));
        //                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(1));
        //                pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(2));
        //                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(true));
        //                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt2, pt2, new Boolean(true));
        //diagnostic
        stringWidth = Math.floor((1.5 * metrics.stringWidth(label)));
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(1));
        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(2));
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt1, pt2, stringWidth / 2);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, pt1, pt1, new Boolean(true)); //was 3
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(2));
        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(1));
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt1, pt2, stringWidth / 2);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, pt1, pt1, new Boolean(true)); //was 3
        //end section
        break;
      case 24225000:
        pt0 = tg.Pixels.get(middleSegment);
        pt1 = tg.Pixels.get(middleSegment + 1);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, middleSegment, middleSegment + 1, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG(), 2, 1 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG1(), 2, 2 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
        break;
      case 25224000:
        stringWidth = Math.floor((1.5 * metrics.stringWidth("ALT")));
        stringWidth2 = Math.floor((1.5 * metrics.stringWidth(label + tg.get_Name())));
        if (stringWidth2 > stringWidth)
          stringWidth = stringWidth2;
        foundSegment = false;
        if (armyc2.c2sd.renderer.utilities.RendererSettings.getInstance().getTwoLabelOnly() === false) {
          for (j = 0; j < tg.Pixels.size() - 1; j++) {
            pt0 = tg.Pixels.get(j);
            pt1 = tg.Pixels.get(j + 1);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
            if (dist < stringWidth)
              continue;
            else {
              if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -3.5 * factor * csFactor, j, j + 1, new Boolean(false));
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "ALT", 2, -1.5 * factor * csFactor, j, j + 1, new Boolean(true));
              } else {
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, j, j + 1, new Boolean(false));
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "ALT", 2, 0.7 * csFactor, j, j + 1, new Boolean(true));
              }
              foundSegment = true;
            }
          }
          if (foundSegment === false) {
            pt0 = tg.Pixels.get(middleSegment);
            pt1 = tg.Pixels.get(middleSegment + 1);
            if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -3.5 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "ALT", 2, -1.5 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(true));
            } else {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "ALT", 2, 0.7 * csFactor, middleSegment, middleSegment + 1, new Boolean(true));
            }
          }
        } else {
          // 2  labels
          // var northestPtIndex = null;
          var southestPtIndex = 0,
            northestPt = null,
            southestPt = null,
            middleSegment2 = 0;
          for (j = 0; j < tg.Pixels.size() ; j++) {
            pt0 = tg.Pixels.get(j);

            if (northestPt === null) {
              northestPt = pt0;
              northestPtIndex = j;
            }
            if (southestPt === null) {
              southestPt = pt0;
              southestPtIndex = j;
            }
            if (pt0.y >= northestPt.y) {
              northestPt = pt0
              northestPtIndex = j;
            }

            if (pt0.y <= southestPt.y) {
              southestPt = pt0;
              southestPtIndex = j;
            }
          } //for
          middleSegment = northestPtIndex;
          middleSegment2 = southestPtIndex;

          if (middleSegment  == tg.Pixels.size() -1) {
          	middleSegment-=1;
          }
          if (middleSegment2  == tg.Pixels.size() -1) {
          	middleSegment2-=1;
          }
          if (middleSegment == middleSegment2) {
          	middleSegment2-=1;
          }

          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -3.5 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "ALT", 2, -1.5 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(true));

          if (middleSegment !== middleSegment2)
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -3.5 * factor * csFactor, middleSegment2, middleSegment2 + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "ALT", 2, -1.5 * factor * csFactor, middleSegment2, middleSegment2 + 1, new Boolean(true));
        }

        break;
      case 25223000:
        stringWidth = Math.floor((1.5 * metrics.stringWidth(label + tg.get_Name())));
        foundSegment = false;
        if (armyc2.c2sd.renderer.utilities.RendererSettings.getInstance().getTwoLabelOnly() === false) {
          for (j = 0; j < tg.Pixels.size() - 1; j++) {
            pt0 = tg.Pixels.get(j);
            pt1 = tg.Pixels.get(j + 1);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
            if (dist < stringWidth)
              continue;
            else {
              if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -3 * factor * csFactor, j, j + 1, new Boolean(false));
              } else {
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, j, j + 1, new Boolean(false));
              }
              foundSegment = true;
            }
          }
          if (foundSegment === false) {
            pt0 = tg.Pixels.get(middleSegment);
            pt1 = tg.Pixels.get(middleSegment + 1);
            if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -3 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
            } else {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
            }
          }
        } else {
          // 2  labels
          // var northestPtIndex = null;
          var southestPtIndex = 0,
            northestPt = null,
            southestPt = null,
            middleSegment2 = 0;
          for (j = 0; j < tg.Pixels.size(); j++) {
            pt0 = tg.Pixels.get(j);

            if (northestPt === null) {
              northestPt = pt0;
              northestPtIndex = j;
            }
            if (southestPt === null) {
              southestPt = pt0;
              southestPtIndex = j;
            }
            if (pt0.y >= northestPt.y) {
              northestPt = pt0
              northestPtIndex = j;
            }

            if (pt0.y <= southestPt.y) {
              southestPt = pt0;
              southestPtIndex = j;
            }
          } //for
          middleSegment = northestPtIndex;
          middleSegment2 = southestPtIndex;

          if (middleSegment  == tg.Pixels.size() -1) {
          	middleSegment-=1;
          }
          if (middleSegment2  == tg.Pixels.size() -1) {
          	middleSegment2-=1;
          }
          if (middleSegment == middleSegment2) {
          	middleSegment2-=1;
          }

          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
          if (middleSegment !== middleSegment2)
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1 * csFactor, middleSegment2, middleSegment2 + 1, new Boolean(false));
        }
        break;
      case 25225000:
        stringWidth = Math.floor((1.5 * metrics.stringWidth(label + tg.get_Name())));
        foundSegment = false;
        //acevedo - 11/29/2017 - adding option to render only 2 ENY labels.
        if (armyc2.c2sd.renderer.utilities.RendererSettings.getInstance().getTwoLabelOnly() === false) {
          for (j = 0; j < tg.Pixels.size() - 1; j++) {
            pt0 = tg.Pixels.get(j);
            pt1 = tg.Pixels.get(j + 1);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
            if (dist < stringWidth)
              continue;
            else {
              if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -4.5 * factor * csFactor, j, j + 1, new Boolean(false));
              } else {
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, j, j + 1, new Boolean(false));
              }
              foundSegment = true;
            }
          }
          if (foundSegment === false) {
            pt0 = tg.Pixels.get(middleSegment);
            pt1 = tg.Pixels.get(middleSegment + 1);
            if (pt0.x < pt1.x || (pt0.x === pt1.x && pt0.y > pt1.y)) {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -4.5 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
            } else {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -2 * factor * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
            }
          }
        } else {
          // 2  labels
          // var northestPtIndex = null;
          var southestPtIndex = 0,
            northestPt = null,
            southestPt = null,
            middleSegment2 = 0;
          for (j = 0; j < tg.Pixels.size(); j++) {
            pt0 = tg.Pixels.get(j);

            if (northestPt === null) {
              northestPt = pt0;
              northestPtIndex = j;
            }
            if (southestPt === null) {
              southestPt = pt0;
              southestPtIndex = j;
            }
            if (pt0.y >= northestPt.y) {
              northestPt = pt0
              northestPtIndex = j;
            }

            if (pt0.y <= southestPt.y) {
              southestPt = pt0;
              southestPtIndex = j;
            }
          } //for
          middleSegment = northestPtIndex;
          middleSegment2 = southestPtIndex;

          if (middleSegment  == tg.Pixels.size() -1) {
          	middleSegment-=1;
          }
          if (middleSegment2  == tg.Pixels.size() -1) {
          	middleSegment2-=1;
          }
          if (middleSegment == middleSegment2) {
          	middleSegment2-=1;
          }


          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
          if (middleSegment !== middleSegment2)
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1 * csFactor, middleSegment2, middleSegment2 + 1, new Boolean(false));

        } //else
        break;

      case 25310000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "DETAINEE", 3, -1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "HOLDING", 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "AREA", 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        break;
      case 25320000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "EPW", 3, -1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "HOLDING", 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "AREA", 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        break;
      case 23180000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -0.5 *csFactor, ptCenter, ptCenter, new Boolean(false));
        break;
      case 25330000:
      case 25351000:
      case 25352000:
      case 25353000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        break;
      case 31770000:
      case 31740000:
      case 317100000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, tg.get_H(), 3, -0.5, ptCenter, ptCenter, "H");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, tg.get_H1(), 3, 0.5, ptCenter, ptCenter, "H1");
        break;
      case 25340000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "REFUGEE", 3, -1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "HOLDING", 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "AREA", 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        break;
      case 25221000:
      case 25222000:
        foundSegment = false;
        //acevedo - 11/29/2017 - adding option to render only 2 ENY labels.
        if (armyc2.c2sd.renderer.utilities.RendererSettings.getInstance().getTwoLabelOnly() === false) {
          for (j = 0; j < tg.Pixels.size() - 1; j++) {
            pt0 = tg.Pixels.get(j);
            pt1 = tg.Pixels.get(j + 1);
            stringWidth = Math.floor((1.5 * metrics.stringWidth(label + tg.get_Name())));
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
            if (dist < stringWidth)
              continue;
            else {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1 * csFactor, j, j + 1, new Boolean(false));
              foundSegment = true;
            }
          } //for
          if (foundSegment === false)
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));

        } else {
          // 2  labels
          // var northestPtIndex = null;
          var southestPtIndex = 0,
            northestPt = null,
            southestPt = null,
            middleSegment2 = 0;
          for (j = 0; j < tg.Pixels.size(); j++) {
            pt0 = tg.Pixels.get(j);

            if (northestPt === null) {
              northestPt = pt0;
              northestPtIndex = j;
            }
            if (southestPt === null) {
              southestPt = pt0;
              southestPtIndex = j;
            }
            if (pt0.y >= northestPt.y) {
              northestPt = pt0
              northestPtIndex = j;
            }

            if (pt0.y <= southestPt.y) {
              southestPt = pt0;
              southestPtIndex = j;
            }
          } //for
          middleSegment = northestPtIndex;
          middleSegment2 = southestPtIndex;

          if (middleSegment  == tg.Pixels.size() -1) {
          	middleSegment-=1;
          }
          if (middleSegment2  == tg.Pixels.size() -1) {
          	middleSegment2-=1;
          }
          if (middleSegment == middleSegment2) {
          	middleSegment2-=1;
          }


          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
          if (middleSegment !== middleSegment2)
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1 * csFactor, middleSegment2, middleSegment2 + 1, new Boolean(false));

        } //else
        break;
      case 24250000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -0.8 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
        break;
      case 24211000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -0.8 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0.8 * csFactor, middleSegment, middleSegment + 1, new Boolean(false));
        break;
      case 24260000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -1 * csFactor, 0, 1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 1 * csFactor, 0, 1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_T1(), 2, 2 * csFactor, 0, 1, new Boolean(false));
        break;
      case 23163000:
        if (tg.Pixels.get(1).y > tg.Pixels.get(0).y) {
          pt0 = tg.Pixels.get(1);
          pt1 = tg.Pixels.get(3);
          pt2 = tg.Pixels.get(0);
          pt3 = tg.Pixels.get(2);
        } else {
          pt0 = tg.Pixels.get(0);
          pt1 = tg.Pixels.get(2);
          pt2 = tg.Pixels.get(1);
          pt3 = tg.Pixels.get(3);
        }
        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pt2, -20);
        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt1, pt3, -20);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 0, pt2, pt3, new Boolean(false));
        break;
      case 23162000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetMBR(tg, ul, ur, lr, ll);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_H(), 2, -1.5 * factor * csFactor, ul, ur, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), 2, 1.5 * factor * csFactor, ll, lr, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
        break;
      case 22622000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetMBR(tg, ul, ur, lr, ll);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, 0, ll, lr, new Boolean(false));
        //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "(PL " + tg.get_Name() + ")", 2, 1.1 * (factor * csFactor + csFactor), ll, lr, new Boolean(false));
        break;
      case 25211000:
      case 25212000:
        var convoyBlankString = armyc2.c2sd.JavaTacticalRenderer.Modifier2.blankString(metrics, 35);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_H() + convoyBlankString + tg.get_H1(), 2, 0, 0, 1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 1.2 * csFactor, 0, 1, new Boolean(false));
        break;
      case 22522100:
        if (affiliation !== null && affiliation.equals("H")) {
          k = tg.Pixels.size();
          j = armyc2.c2sd.JavaLineArray.lineutility.GetDirAtkAirMiddleSegment(tg.Pixels.toArray(new Array(tg.Pixels.size())), tg.Pixels.size());
          pt1 = tg.Pixels.get(k - j - 1);
          pt0 = tg.Pixels.get(k - j);
          dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
          pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, 2 * dist / 3);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_N(), 2, 0, pt0, pt1, true);
        }
        break;
      case 22535000:
      case 22432000:
      case 22621000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        break;
      case 24322100:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -3 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -2 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "MIN ALT: " + tg.get_H(), 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false), "H");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "MAX ALT: " + tg.get_H1(), 3, 0, ptCenter, ptCenter, new Boolean(false), "H1");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "Grids: " + tg.get_H2(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false), "H2");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "EFF: " + tg.get_DTG(), 3, 2 * csFactor, ptCenter, ptCenter, new Boolean(false), "W");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), 3, 3 * csFactor, ptCenter, ptCenter, new Boolean(false), "W1");
        break;
      case 24323100:
      case 24325100:
      case 24351000:
        // the number of modifiers that will be added (additional info modifiers will not be added if empty, but label, name and dtg's always will)
        var modifierCount = 3 + [tg.get_H(), tg.get_H1(), tg.get_H2(), tg.get_H3()].filter(Boolean).length;
        // calculate the line factor of the upper most modifier, so that all the modifiers are centered around line 0 and with one line between each
        var minLineFactor = 0.5 - modifierCount / 2;
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, minLineFactor * csFactor, ptCenter, ptCenter, new Boolean(false));
        minLineFactor++;
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, minLineFactor * csFactor, ptCenter, ptCenter, new Boolean(false));
        minLineFactor++;
        if (tg.get_H()) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "REST FS SYS: " + tg.get_H(), 3, minLineFactor * csFactor, ptCenter, ptCenter, new Boolean(false), "H");
          minLineFactor++;
        }
        if (tg.get_H1()) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "REST AMMO: " + tg.get_H1(), 3, minLineFactor * csFactor, ptCenter, ptCenter, new Boolean(false), "H1");
          minLineFactor++;
        }
        if (tg.get_H2()) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "REST FUSE: " + tg.get_H2(), 3, minLineFactor * csFactor, ptCenter, ptCenter, new Boolean(false), "H2");
          minLineFactor++;
        }
        if (tg.get_H3()) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "REST CAL: " + tg.get_H3(), 3, minLineFactor * csFactor, ptCenter, ptCenter, new Boolean(false), "H3");
          minLineFactor++;
        }
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, minLineFactor * csFactor, ptCenter, ptCenter, new Boolean(false), "W+W1");
        break;
      case 24361000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false), "W+W1");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_H1(), 3, 2 * csFactor, ptCenter, ptCenter, new Boolean(false));
        break;
      case 24324100:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(true), "W+W1");
        break;
      case 24321100:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + " " + tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetMBR(tg, ul, ur, lr, ll);
        var ptLeftFSA = ul;
        var ptRightFSA = ur;
        if (tg.get_Client().equalsIgnoreCase("ge")) {
          ptLeftFSA.x -= Math.floor(font.getSize() / 2);
          ptRightFSA.x -= Math.floor(font.getSize() / 2);
        }
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), 1, 0.5 * csFactor, ptLeftFSA, ptRightFSA, new Boolean(false), "W");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), 1, 1.5 * csFactor, ptLeftFSA, ptRightFSA, new Boolean(false), "W1");
        break;
      case 24331100:
      case 24332100:
      case 24336100:
      case 24338100:
      case 24339100:
      case 24337100:
      case 24335100:
      case 24333100:
      case 24334100:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetMBR(tg, ul, ur, lr, ll);
        var ptLeft = ul;
        var ptRight = ur;
        if (tg.get_Client().equalsIgnoreCase("ge")) {
          ptLeft.x -= Math.floor(font.getSize() / 2);
          ptRight.x -= Math.floor(font.getSize() / 2);
        }
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), 1, 0.5 * csFactor, ptLeft, ptRight, new Boolean(false), "W");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), 1, 1.5 * csFactor, ptLeft, ptRight, new Boolean(false), "W1");
        break;
      case 24314000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false), "W+W1");
        break;
      case 22431000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_EchelonSymbol(), 2, -0.2 * csFactor, 0, 1, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
        break;
      case 22431100:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_EchelonSymbol(), 2, -0.2 * csFactor, 0, 1, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
        break;
      case 22422000:
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt1, pt0, -22, 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(false));
        break;
      case 22421000:
        stringWidth = metrics.stringWidth(label);
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
        if (pt0.x > ptLast.x)
          pt1.x += 32;
        else {
          pt1.x -= stringWidth - 8;
          pt1.y -= 1.1 * stringHeight;
        }
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(false));
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptLast);
        if (pt0.x > ptLast.x) {
          pt1.x -= stringWidth - 8;
          pt1.y -= 1.1 * stringHeight;
        } else
          pt1.x += 32;
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(false));
        break;
      case 22625000:
      case 22626000:
      case 22532000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        break;
      case 22531000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "ASLT", 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "PSN", 3, 0, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false));
        break;
      case 22235000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1.5 * csFactor, ptCenter, ptCenter, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "TIME FROM: " + tg.get_DTG(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(true), "W");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "TIME TO: " + tg.get_DTG1(), 3, 1.5 * csFactor, ptCenter, ptCenter, new Boolean(true), "W1");
        break;
      case 23114000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false), "W");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), 3, 1.5 * csFactor, ptCenter, ptCenter, new Boolean(false), "W1");
        break;
      case 23115000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), 3, 0, ptCenter, ptCenter, new Boolean(true), "W");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(true), "W1");
        break;
      case 22231000:
      case 22232000:
      case 22233000:
      case 22234000:
      case 22234100:
      case 22234200:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -2.5, ptCenter, ptCenter, new Boolean(false), "");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -1.5, ptCenter, ptCenter, new Boolean(false), "T");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "MIN ALT: " + tg.get_H(), 3, -0.5, ptCenter, ptCenter, new Boolean(false), "H");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "MAX ALT: " + tg.get_H1(), 3, 0.5, ptCenter, ptCenter, new Boolean(false), "H1");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "TIME FROM: " + tg.get_DTG(), 3, 1.5, ptCenter, ptCenter, new Boolean(false), "W");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "TIME TO: " + tg.get_DTG1(), 3, 2.5, ptCenter, ptCenter, new Boolean(false), "W1");
        break;
      case 22223000:
        pt0 = new armyc2.c2sd.JavaLineArray.POINT2(tg.Pixels.get(middleSegment));
        dist = pt0.style / tg.get_Font().getSize();
        dist /= 2;
        if (tg.getSymbologyStandard() === 1) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "SAAFR " + tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Max Alt: " + tg.get_H1(), 2, -4 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Min Alt: " + tg.get_H(), 2, -5 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Width: " + tg.get_H2(), 2, -6 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Name: " + tg.get_Name(), 2, -7 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "DTG Start: " + tg.get_DTG(), 2, -3 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "DTG End: " + tg.get_DTG1(), 2, -2 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
        } else {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Max Alt: " + tg.get_H1(), 2, -2 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Min Alt: " + tg.get_H(), 2, -3 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Width: " + tg.get_H2(), 2, -4 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Name: " + tg.get_Name(), 2, -5 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
        }
        break;
      case 22221000:
        pt0 = new armyc2.c2sd.JavaLineArray.POINT2(tg.Pixels.get(middleSegment));
        dist = pt0.style / tg.get_Font().getSize();
        dist /= 2;
        if (tg.getSymbologyStandard() === 1) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + " " + tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Max Alt: " + tg.get_H1(), 2, -4 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Min Alt: " + tg.get_H(), 2, -5 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Width: " + tg.get_H2(), 2, -6 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "Name: " + tg.get_Name(), 2, -7 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "DTG Start: " + tg.get_DTG(), 2, -3 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, "DTG End: " + tg.get_DTG1(), 2, -2 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
        } else {
          //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -0.5 * csFactor-dist, middleSegment, middleSegment + 1, new Boolean(false));
          //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_T1(), 2, 0.5 * csFactor-dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -1.0 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_T1(), 2, 1.0 * csFactor - dist, middleSegment, middleSegment + 1, new Boolean(false));
        }
        break;
      case 22222001:
      case 22224001:
      case 22222000:
      case 22224000:
      case 22225000:
        if (tg.getSymbologyStandard() === 1) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + " " + tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(false));

          pt0 = new armyc2.c2sd.JavaLineArray.POINT2(tg.Pixels.get(middleSegment));
          pt1 = new armyc2.c2sd.JavaLineArray.POINT2(tg.Pixels.get(middleSegment + 1));
          if (pt0.y < pt1.y)
            pt1.y = pt0.y;
          else
            pt0.y = pt1.y;
          pt0.y -= pt0.style / 2;
          pt1.y -= pt0.style / 2;
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "Max Alt: " + tg.get_H1(), 2, -4 * csFactor, pt0, pt1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "Min Alt: " + tg.get_H(), 2, -5 * csFactor, pt0, pt1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "Width: " + tg.get_H2(), 2, -6 * csFactor, pt0, pt1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "Name: " + tg.get_Name(), 2, -7 * csFactor, pt0, pt1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "DTG Start: " + tg.get_DTG(), 2, -3 * csFactor, pt0, pt1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "DTG End: " + tg.get_DTG1(), 2, -2 * csFactor, pt0, pt1, new Boolean(false));
        } else {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, -0.5, middleSegment, middleSegment + 1, new Boolean(false));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 0.5, middleSegment, middleSegment + 1, new Boolean(false));
        }
        break;
      case 221311000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
        break;
      case 22131000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        break;
      case 22134000:
      case 22624000:
        if (affiliation !== null && affiliation.equals("H")) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_N(), 2, 0, 0, 1, new Boolean(true));
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_N(), 2, 0, middleSegment, middleSegment + 1, new Boolean(true));
        }
        break;
      case 22132000:
      case 22133000:
      case 22135000:
      case 22136000:
      case 22137000:
      case 22138000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false));
        break;
      case 22121000:
        if (clipRect !== null) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddBoundaryModifiers(tg, g2d, clipRect);
        } else if (clipArray !== null) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddBoundaryModifiers2(tg, g2d, clipArray);
        } else {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddBoundaryModifiers(tg, g2d, null);
        }
        break;
      case 22340000:
      case 22350000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
        if (affiliation !== null && affiliation.equals("H")) {
          pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, pt1, new Boolean(true));
          if (middleSegment !== 0) {
            pt0 = tg.Pixels.get(middleSegment);
            pt1 = tg.Pixels.get(middleSegment + 1);
            pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, pt1, new Boolean(true));
          }
        }
        break;
      case 23164000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
        if (affiliation !== null && affiliation.equals("H")) {
          pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, pt1, new Boolean(true));
          if (middleSegment !== 0) {
            pt0 = tg.Pixels.get(middleSegment);
            pt1 = tg.Pixels.get(middleSegment + 1);
            pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, pt1, new Boolean(true));
          }
        }
        break;
      case 22124000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + tg.get_Name(), 1, T1LineFactor, pt0, pt1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + tg.get_Name(), 1, T1LineFactor, ptLast, ptNextToLast, new Boolean(false));
        break;
      case 22525000:
      case 22526000:
        //case 22613000:
      case 22527000:
        if (!tg.get_Name().isEmpty())
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "(PL " + tg.get_Name() + ")", 1, csFactor / 2, pt0, pt1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, -csFactor / 2, pt0, pt1, new Boolean(false));
        if (!tg.get_Name().isEmpty())
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "(PL " + tg.get_Name() + ")", 1, csFactor / 2, ptLast, ptNextToLast, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, -csFactor / 2, ptLast, ptNextToLast, new Boolean(false));
        break;
      case 22613000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, -csFactor / 2, pt0, pt1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, -csFactor / 2, ptLast, ptNextToLast, new Boolean(false));
        break;
      case 22125000:
      case 22523000:
      case 22528000:
      case 24223000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, -1, pt0, pt1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, -1, ptLast, ptNextToLast, new Boolean(false));
        break;
        //            case 22523000:
        //            case 22528000:
        //                if (usas === false) {
        //                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "(PL " + tg.get_Name() + ")", 1, 1 * csFactor, pt0, pt1, new Boolean(false));
        //                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, pt0, pt1, new Boolean(false));
        //                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "(PL " + tg.get_Name() + ")", 1, 1 * csFactor, ptLast, ptNextToLast, new Boolean(false));
        //                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, ptLast, ptNextToLast, new Boolean(false));
        //                } else
        //                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddNameAboveDTG(tg, metrics);
        //                break;
        //            case 24223000:
        //                if (usas === false) {
        //                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "(PL " + tg.get_Name() + ")", 1, 1 * csFactor, pt0, pt1, new Boolean(false));
        //                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, pt0, pt1, new Boolean(false));
        //                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "(PL " + tg.get_Name() + ")", 1, 1 * csFactor, ptLast, ptNextToLast, new Boolean(false));
        //                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, ptLast, ptNextToLast, new Boolean(false));
        //                } else {
        //                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddNameAboveDTG(tg, metrics);
        //                }
        //                break;
      case 24221000: //FSCL
        pt0 = tg.Pixels.get(0);
        pt1 = tg.Pixels.get(1);
        pt2 = tg.Pixels.get(tg.Pixels.size() - 1);
        pt3 = tg.Pixels.get(tg.Pixels.size() - 2);
        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
        dist2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt2, pt3);
        stringWidth = Math.floor((metrics.stringWidth(tg.get_Name() + " " + label)));
        stringWidth2 = Math.floor((metrics.stringWidth(tg.get_DTG())));
        if (stringWidth2 > stringWidth)
          stringWidth = stringWidth2;
        if (tg.Pixels.size() === 2) {
          if (pt0.x < pt1.x)
            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth); //was stringWidth
          else
            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth / 2); //was stringWidth
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name() + " " + label, 2, -0.7 * csFactor, pt0, pt1, false);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
          if (dist > 2 * stringWidth + 5) {
            pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
            pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
            if (pt0.x > pt1.x)
              pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth / 2); //was stringWidth
            else
              pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth); //was stringWidth
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name() + " " + label, 2, -0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
          }
        } else {
          var dist3 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt2);
          if (dist > stringWidth + 5 || dist >= dist2 || dist3 > stringWidth + 5) {
            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name() + " " + label, 2, -0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
          }
          if (dist2 > stringWidth + 5 || dist2 > dist || dist3 > stringWidth + 5) {
            pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
            pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name() + " " + label, 2, -0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
          }
        }
        break;
      case 24222000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "PL " + tg.get_T1(), 1, 0, pt0, pt1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label + tg.get_Name(), 2, -1, middleSegment, middleSegment + 1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 1, middleSegment, middleSegment + 1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "PL " + tg.get_T1(), 1, 0, ptLast, ptNextToLast, new Boolean(false));
        break;
      case 24224000: //RFL
        pt0 = tg.Pixels.get(0);
        pt1 = tg.Pixels.get(1);
        pt2 = tg.Pixels.get(tg.Pixels.size() - 1);
        pt3 = tg.Pixels.get(tg.Pixels.size() - 2);
        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
        dist2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt2, pt3);
        stringWidth = Math.floor((metrics.stringWidth(label + " " + tg.get_Name())));
        stringWidth2 = Math.floor((metrics.stringWidth(tg.get_DTG())));
        if (stringWidth2 > stringWidth)
          stringWidth = stringWidth2;
        if (tg.Pixels.size() === 2) {
          if (pt0.x < pt1.x)
            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth); //was stringWidth
          else
            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth / 2); //was stringWidth
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), 2, -0.7 * csFactor, pt0, pt1, false);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
          if (dist > 2 * stringWidth + 5) {
            pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
            pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
            if (pt0.x > pt1.x)
              pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth / 2); //was stringWidth
            else
              pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth); //was stringWidth
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), 2, -0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
          }
        } else {
          dist3 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt2);
          if (dist > stringWidth + 5 || dist >= dist2 || dist3 > stringWidth + 5) {
            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), 2, -0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
          }
          if (dist2 > stringWidth + 5 || dist2 > dist || dist3 > stringWidth + 5) {
            pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
            pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), 2, -0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG(), 2, 0.7 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 1.7 * csFactor, pt0, pt1, false);
          }
        }
        break;
      case 22122000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, pt0, pt1, new Boolean(false));
        if (affiliation !== null && affiliation.equals("H")) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 1, -1 * csFactor, pt0, pt1, new Boolean(false));
        }
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 1, 0, ptLast, ptNextToLast, new Boolean(false));
        if (affiliation !== null && affiliation.equals("H")) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 1, -1 * csFactor, ptLast, ptNextToLast, new Boolean(false));
        }
        break;
      case 22123000:
        var shiftFactor = 1;
        //if (shiftLines)
        //shiftFactor = 0.5;
        if (affiliation !== null && affiliation.equals("H")) {
          if (pt0.x < pt1.x) {
            TLineFactor = -shiftFactor;
          } else {
            TLineFactor = shiftFactor;
          }
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 1, TLineFactor, pt0, pt1, new Boolean(false));
          if (ptNextToLast.x < ptLast.x) {
            TLineFactor = -shiftFactor;
          } else {
            TLineFactor = shiftFactor;
          }
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 1, TLineFactor, ptLast, ptNextToLast, new Boolean(false));
        }
        break;
      case 21700000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, 1, 0, new Boolean(false));
        break;
      case 21710000:
        stringWidth = Math.floor((1.5 * metrics.stringWidth(label)));
        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, 0, pt1, pt2, false);
        break;
      case 22330000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, -0.7 * csFactor, 1, 0, new Boolean(false));
        break;
      case 22320000:
        midPt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(lastIndex - 1), tg.Pixels.get(nextToLastIndex - 1), 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 2, 0, tg.Pixels.get(lastIndex - 1), midPt, new Boolean(false));
        break;
      case 22524000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, 1, 0, new Boolean(false));
        break;
      case 23490000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, 1, 0, new Boolean(true));
        break;
      case 212000000:
      case 212400000:
      case 212410000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, 0, 1, new Boolean(true));
        break;
      case 26400000:
      case 26410000:
      case 26420000:
      case 26430000:
      case 26440000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, 0, tg.Pixels.get(0), tg.Pixels.get(1), new Boolean(true));
        break;
      case 211800000:
      case 24315000:
      case 24226000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, ptCenter, ptCenter, new Boolean(true));
        break;
      case 23111000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_T1(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(false));
        break;
      case 23111001:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_Name(), 2, 0, middleSegment, middleSegment + 1, new Boolean(false));
        break;
      case 23113000:
      case 24330000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        break;
      case 23350000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_EchelonSymbol(), 2, 0, 0, 1, new Boolean(true));
        break;
      case 23410000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "1", 3, 0, pt1, pt1, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "2", 3, 0, pt2, pt2, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "3", 3, 0, pt3, pt3, new Boolean(true));
        break;
      case 24311000:
      case 24312000:
      case 15000002:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, pt0, pt0, new Boolean(false));
        break;
      case 21800000:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, tg.get_DTG(), 2, -1 * csFactor, 0, 1, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, 0, 1, new Boolean(true));
        break;
      default:
        break;
    }
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.scaleModifiers(tg);
    tg.Pixels = origPoints;
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddModifiersGeo", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddModifiersGeo", exc));
    } else {
      throw exc;
    }
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.getRFALines = function(tg) {
  var lines = 1;
  try {
    if (tg.get_Name() !== null && !tg.get_Name().isEmpty())
      lines++;
    if (tg.get_DTG() !== null && !tg.get_DTG().isEmpty())
      lines++;
    else if (tg.get_DTG1() !== null && !tg.get_DTG1().isEmpty())
      lines++;
    switch (tg.get_LineType()) {
      case 24352000:
      case 24362000:
        if (tg.get_H1() !== null && !tg.get_H1().isEmpty())
          lines++;
        break;
      default:
        break;
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddModifiers", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddModifiers", exc));
    } else {
      throw exc;
    }
  }
  return lines;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.Test = function(tg) {
  return 'test';
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.addSectorModifiers = function(tg, converter) {
  var linetype = tg.get_LineType();
  if (linetype !== 243112000) {
    return false;
  }
  var AM = new java.util.ArrayList();
  var AN = new java.util.ArrayList();
  var H1 = tg.get_H1();
  var T = tg.get_Name();
  var T1 = tg.get_T1();
  var az = T.split(","); //azimuths l,r,l,r,...
  var am = T1.split(","); //radii
  //var altitudes = H1.split(",");
  var altitudes = null;
  var min = 0;
  //diagnostic
  var left = 0,
    right = 0;
  //end section

  var numSectors = az.length / 2;
  if (numSectors < 1) {
    return false;
  }
  if (!H1.isEmpty())
    altitudes = H1.split(",");
  try {
    for (var k = 0; k < am.length; k++) {
      min = Double.parseDouble(am[k]);
      AM.add(min);
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "addSectorModifiers", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddModifiers", exc));
    } else {
      throw exc;
    }
  }
  //diagnostic
  try {
    for (var k = 0; k < az.length / 2; k++) {
      left = Double.parseDouble(az[2 * k]);
      right = Double.parseDouble(az[2 * k + 1]);
      AN.add(left);
      AN.add(right);
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "addSectorModifiers", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddModifiers", exc));
    } else {
      throw exc;
    }
  }
  //end section

  var n = tg.Pixels.size();
  //pt0 and pt1 are points for the location indicator
  var pt0 = tg.anchor0F;
  var pt1 = tg.achorTipF;
  // var pt0 = tg.Pixels.get(n - 5);
  // var pt1 = tg.Pixels.get(n - 4);
  var pt02d = new armyc2.c2sd.graphics2d.Point2D(pt0.x, pt0.y);
  var pt12d = new armyc2.c2sd.graphics2d.Point2D(pt1.x, pt1.y);
  pt02d = converter.PixelsToGeo(pt02d);
  pt12d = converter.PixelsToGeo(pt12d);
  pt0.x = pt02d.getX();
  pt0.y = pt02d.getY();
  pt1.x = pt12d.getX();
  pt1.y = pt12d.getY();
  //azimuth of the orientation indicator
  var az12 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetAzimuth(pt0, pt1);
  var pt2 = null;
  var locModifier = new java.util.ArrayList();
  //diagnostic
  var ptLeft = null,
    ptRight = null;
  var locAZModifier = new java.util.ArrayList();
  //end section
  var pt22d = null;
  var radius = 0;
  for (var k = 0; k < numSectors; k++) {
    if (AM.size() < k + 2) {
      break;
    }
    radius = (AM.get(k) + AM.get(k + 1)) / 2;
    pt2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, radius, az12);
    //need locModifier in geo pixels
    pt22d = new armyc2.c2sd.graphics2d.Point2D(pt2.x, pt2.y);
    pt22d = converter.GeoToPixels(pt22d);
    pt2.x = pt22d.getX();
    pt2.y = pt22d.getY();
    locModifier.add(pt2);
    //diagnostic
    if (tg.get_HideOptionalLabels())
      continue;
    ptLeft = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, radius, AN.get(2 * k));
    //need ptLeft in geo pixels
    pt22d = new armyc2.c2sd.graphics2d.Point2D(ptLeft.x, ptLeft.y);
    pt22d = converter.GeoToPixels(pt22d);
    ptLeft.x = pt22d.getX();
    ptLeft.y = pt22d.getY();
    ptRight = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, radius, AN.get(2 * k + 1));
    //need ptRight in geo pixels
    pt22d = new armyc2.c2sd.graphics2d.Point2D(ptRight.x, ptRight.y);
    pt22d = converter.GeoToPixels(pt22d);
    ptRight.x = pt22d.getX();
    ptRight.y = pt22d.getY();
    locAZModifier.add(ptLeft);
    locAZModifier.add(ptRight);
    //end section
  }
  if (altitudes !== null) {
    for (var k = 0; k < altitudes.length; k++) {
      if (k >= locModifier.size()) {
        break;
      }
      pt0 = locModifier.get(k);
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, "ALT " + altitudes[k], 3, 0, pt0, pt0);
    }
  }
  //diagnostic    add range and azimuth modifiers
  //add early eixt if tg.setRangeFanAZLabels is false
  if (tg.get_HideOptionalLabels())
    return true;
  for (var k = 0; k < numSectors; k++) {
    pt0 = locModifier.get(k);
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, "RG " + AM.get(k + 1), 3, -1, pt0, pt0);
    ptLeft = locAZModifier.get(2 * k);
    ptRight = locAZModifier.get(2 * k + 1);
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, az[2 * k], 3, 0, ptLeft, ptLeft);
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, az[2 * k + 1], 3, 0, ptRight, ptRight);
  }
  //end section
  return true;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers2 = function(tg) {
  try {
    if (tg.Pixels === null || tg.Pixels.isEmpty())
      return;
    if (tg.modifiers === null)
      tg.modifiers = new java.util.ArrayList();
    var linetype = tg.get_LineType();
    //diagnostic add early exit for lines which do not use this function
    switch (linetype) {
      case 22133200:
      case 22133100:
      case 14000000:
      case 15000003:
      case 21200000:
      case 21300000:
      case 21400000:
      case 211700000:
      case 21500000:
      case 211000000:
      case 211100000:
      case 211400000:
      case 211600000:
      case 211900000:
      case 212100000:
      case 21600000:
      case 212300000:
      case 212300001:
      case 212600000:
      case 212500000:
      case 211200000:
      case 211210000:
      case 22131200:
      case 22131300:
      case 24322200:
      case 24322300:
      case 24311000:
      case 24312000:
      case 15000002:
      case 24321300:
      case 24331300:
      case 24332300:
      case 24333300:
      case 24334300:
      case 24335300:
      case 24336300:
      case 24337300:
      case 24338300:
      case 24339300:
      case 24323300:
      case 24324300:
      case 24325300:
      case 24353000:
      case 24363000:
      case 21100000:
      case 22612000:
      case 22623000:
      case 22612001:
      case 22623001:
      case 23162100:
      case 23162200:
      case 24323200:
      case 24324200:
      case 24325200:
      case 24352000:
      case 24362000:
      case 24321200:
      case 24331200:
      case 24332200:
      case 24333200:
      case 24334200:
      case 24335200:
      case 24336200:
      case 24337200:
      case 24338200:
      case 24339200:
      case 24326100:
      case 24326101:
      case 24326200:
      case 243111000:
      case 243112000:
        break;
      default:
        return;
    }
    //end section
    var origPoints = armyc2.c2sd.JavaLineArray.lineutility.getDeepCopy(tg.Pixels);
    var font = tg.get_Font();
    var ptCenter = null;
    var csFactor = 1;
    var pt0 = null;
    var pt1 = null;
    var pt2 = null;
    var pt3 = null;
    var j = 0;
    var k = 0;
    var dist = 0;
    var label = armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetCenterLabel(tg);
    var H1 = null;
    var lastIndex = tg.Pixels.size() - 1;
    var nextToLastIndex = 0;
    if (tg.Pixels.size() > 1)
      nextToLastIndex = tg.Pixels.size() - 2;
    var ptLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(lastIndex));
    var ptNextToLast = null;
    if (tg.Pixels.size() > 1)
      ptNextToLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(nextToLastIndex));
    var dash = "";
    if (tg.get_DTG() !== null && tg.get_DTG1() !== null && tg.get_DTG().isEmpty() === false && tg.get_DTG1().isEmpty() === false)
      dash = " - ";
    var ptLeft = null;
    var ptRight = null;
    var bi = new armyc2.c2sd.graphics2d.BufferedImage(8, 8, 2);
    var g2d = bi.createGraphics();
    var metrics = g2d.getFontMetrics();
    var stringWidth = 0;
    var rfaLines = 0;
    var pts = null;
    pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    if (tg.Pixels.size() > 1)
      pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(1));
    if (tg.get_Client().equals("cpof3d"))
      csFactor = 0.9;
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.shiftModifierPath(tg, pt0, pt1, ptLast, ptNextToLast);
    if (tg.getSymbologyStandard() === 1) {
      switch (linetype) {
        case 14000000:
        case 15000003:
          pts = new Array(4);
          for (j = 0; j < 4; j++)
            pts[j] = tg.Pixels.get(j);
          ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble2(pts, 4);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -0.125 * csFactor, ptCenter, ptCenter, false);
          break;
        case 21200000:
        case 21300000:
        case 21400000:
          pt0 = tg.Pixels.get(1);
          pt1 = tg.Pixels.get(2);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 6, -0.125 * csFactor, pt0, pt1, new Boolean(true));
          break;
        case 211700000:
        case 21500000:
          pt0 = tg.Pixels.get(2);
          pt1 = tg.Pixels.get(3);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, -0.125 * csFactor, pt0, pt1, new Boolean(true));
          break;
        case 211000000:
          pt0 = tg.Pixels.get(4);
          pt1 = tg.Pixels.get(5);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, -0.125 * csFactor, pt0, pt1, new Boolean(true));
          break;
        case 211100000:
          pt0 = tg.Pixels.get(0);
          pt1 = tg.Pixels.get(1);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, -0.125 * csFactor, pt0, pt1, new Boolean(true));
          break;
        case 211400000:
        case 211600000:
        case 211900000:
        case 212100000:
          pt0 = tg.Pixels.get(13);
          pt1 = tg.Pixels.get(14);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, -0.125 * csFactor, pt0, pt1, new Boolean(true));
          break;
        case 21600000:
          pt0 = tg.Pixels.get(13);
          pt1 = tg.Pixels.get(14);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "C", 2, -0.125 * csFactor, pt0, pt1, new Boolean(true));
          break;
        case 212300000:
        case 212300001:
          pt0 = tg.Pixels.get(26);
          pt1 = tg.Pixels.get(27);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, -0.125 * csFactor, pt0, pt1, new Boolean(true));
          break;
        default:
          break;
      }
    }
    switch (linetype) {
      case 212600000:
      case 212500000:
        pt0 = tg.Pixels.get(13);
        pt1 = tg.Pixels.get(0);
        stringWidth = metrics.stringWidth(label);
        if (pt0.x < pt1.x)
          stringWidth = -stringWidth;
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pt1, 0.75 * stringWidth);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, 0, pt0, pt1, new Boolean(true));
        break;
      case 211200000:
        pt0 = tg.Pixels.get(0);
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(5), tg.Pixels.get(6), 0);
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt1, pt0, -10);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 2, 0, pt0, pt1, new Boolean(true));
        break;
      case 211210000:
        pt0 = tg.Pixels.get(3);
        pt1 = tg.Pixels.get(6);
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt1, pt0, -10);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 2, 0, pt0, pt1, new Boolean(true));
        break;
      case 24322200:
        ptLeft = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(0), tg.Pixels.get(1), 0);
        ptRight = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(2), tg.Pixels.get(3), 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, -3 * csFactor, ptLeft, ptRight, false);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name(), 2, -2 * csFactor, ptLeft, ptRight, false);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, "MIN ALT: " + tg.get_H(), 2, -1 * csFactor, ptLeft, ptRight, false, "H");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, "MAX ALT: " + tg.get_H1(), 2, 0, ptLeft, ptRight, false, "H1");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, "Grids: " + tg.get_H2(), 2, 1 * csFactor, ptLeft, ptRight, false, "H2");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, "EFF: " + tg.get_DTG(), 2, 2 * csFactor, ptLeft, ptRight, false, "W");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG1(), 2, 3 * csFactor, ptLeft, ptRight, false, "W1");
        break;
      case 24322300:
        ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble2(tg.Pixels.toArray(), tg.Pixels.size());
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -3 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, -2 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "MIN ALT: " + tg.get_H(), 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false), "H");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "MAX ALT: " + tg.get_H1(), 3, 0, ptCenter, ptCenter, new Boolean(false), "H1");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "Grids: " + tg.get_H2(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false), "H2");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, "EFF: " + tg.get_DTG(), 3, 2 * csFactor, ptCenter, ptCenter, new Boolean(false), "W");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), 3, 3 * csFactor, ptCenter, ptCenter, new Boolean(false), "W1");
        break;
      case 24311000:
      case 24312000:
      case 15000002:
        ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble2(tg.Pixels.toArray(), tg.Pixels.size());
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        break;
      case 22133100:
      case 22131200:
      case 22131300:
      case 24321300:
      case 24331300:
      case 24332300:
      case 24333300:
      case 24334300:
      case 24335300:
      case 24336300:
      case 24337300:
      case 24338300:
      case 24339300:
        ptCenter = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(0), tg.Pixels.get(Math.floor(tg.Pixels.size() / 2)), 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(false));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddOffsetModifier(tg, tg.get_DTG(), 1, -1 * csFactor, Math.floor(tg.Pixels.size() / 2), 0, 4, "left");
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddOffsetModifier(tg, tg.get_DTG1(), 1, 0, Math.floor(tg.Pixels.size() / 2), 0, 4, "left");
        break;
      case 23162100:
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddOffsetModifier(tg, tg.get_H(), 1, -1 * csFactor, Math.floor(tg.Pixels.size() / 4) * 3, 0, 4, "left");
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddOffsetModifier(tg, tg.get_DTG(), 1, -1 * csFactor, Math.floor(tg.Pixels.size() / 4), 0, 4, "left");
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddOffsetModifier(tg, tg.get_DTG1(), 1, -1 * csFactor, Math.floor(tg.Pixels.size() / 4), 0, 4, "left");
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.areasWithENY(tg, g2d);
          break;
      case 24323300:
      case 24324300:
      case 24325300:
        rfaLines = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getRFALines(tg);
        ptCenter = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(0), tg.Pixels.get(51), 0);
        switch (rfaLines) {
          case 3:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(true));
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(true));
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(true), "W+W1");
            break;
          case 2:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(true));
            if (tg.get_Name() !== null && !tg.get_Name().isEmpty())
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(true));
            else
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(true), "W+W1");
            break;
          default:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, ptCenter, ptCenter, new Boolean(true));
            break;
        }
        break;
      case 24353000:
      case 24363000:
        rfaLines = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getRFALines(tg);
        ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble2(tg.Pixels.toArray(), tg.Pixels.size());
        switch (rfaLines) {
          case 4:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(true));
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(true));
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(true), "W+W1");
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_H1(), 3, 2 * csFactor, ptCenter, ptCenter, new Boolean(true), "H1");
            break;
          case 3:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -1 * csFactor, ptCenter, ptCenter, new Boolean(true));
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0, ptCenter, ptCenter, new Boolean(true));
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(true), "W+W1");
            break;
          case 2:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, -0.5 * csFactor, ptCenter, ptCenter, new Boolean(true));
            if (tg.get_Name() !== null && !tg.get_Name().isEmpty())
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(true));
            else
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), 3, 0.5 * csFactor, ptCenter, ptCenter, new Boolean(true), "W+W1");
            break;
          default:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, ptCenter, ptCenter, new Boolean(true));
            break;
        }
        break;
      case 21100000:
        for (j = 0; j < tg.Pixels.size(); j++) {
          if (tg.Pixels.get(j).style === 14) {
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, j, j + 1);
            break;
          }
        }
        break;
      case 21600000:
        for (j = 0; j < tg.Pixels.size(); j++) {
          if (tg.Pixels.get(j).style === 14) {
            pt0 = tg.Pixels.get(j);
            pt1 = tg.Pixels.get(j + 1);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, 0, pt0, pt1, new Boolean(true));
            break;
          }
        }
        break;
      case 22612000:
      case 22623000:
      case 22612001:
      case 22623001:
        if (ptLast.x < pt0.x) {
          pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptLast);
          ptLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
          pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
        }
        stringWidth = metrics.stringWidth(label);
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
        pt1.x -= stringWidth / 1.5;
        pt1.y -= Math.floor(font.getSize() / 2);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(false));
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptLast);
        pt1.x += stringWidth / 1.5;
        pt1.y -= Math.floor(font.getSize() / 2);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt1, pt1, new Boolean(false));
        break;
      case 24323200:
      case 24324200:
      case 24325200:
        rfaLines = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getRFALines(tg);
        pt0 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(0), tg.Pixels.get(1), 0);
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(2), tg.Pixels.get(3), 0);
        switch (rfaLines) {
          case 3:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, -1 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name(), 2, 0, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 1 * csFactor, pt0, pt1, false, "W+W1");
            break;
          case 2:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, -0.5 * csFactor, pt0, pt1, false);
            if (tg.get_Name() !== null && !tg.get_Name().isEmpty()) {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name(), 2, 0.5 * csFactor, pt0, pt1, false);
            } else {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 0.5 * csFactor, pt0, pt1, false, "W+W1");
            }
            break;
          default:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, 0, pt0, pt1, false);
            break;
        }
        break;
      case 24352000:
      case 24362000:
        rfaLines = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getRFALines(tg);
        pt0 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(0), tg.Pixels.get(1), 0);
        pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(2), tg.Pixels.get(3), 0);
        switch (rfaLines) {
          case 4:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, -1 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name(), 2, 0, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 1 * csFactor, pt0, pt1, false, "W+W1");
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_H1(), 2, 2 * csFactor, pt0, pt1, false, "H1");
            break;
          case 3:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, -1 * csFactor, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name(), 2, 0, pt0, pt1, false);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 1 * csFactor, pt0, pt1, false, "W+W1");
            break;
          case 2:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, -0.5 * csFactor, pt0, pt1, false);
            if (tg.get_Name() !== null && !tg.get_Name().isEmpty()) {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name(), 2, 0.5 * csFactor, pt0, pt1, false);
            } else {
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_DTG() + dash + tg.get_DTG1(), 2, 0.5 * csFactor, pt0, pt1, false, "W+W1");
            }
            break;
          default:
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, 0, pt0, pt1, false);
            break;
        }
        break;
      case 23162200:
        ptLeft = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(0), tg.Pixels.get(1), 0);
        ptRight = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(2), tg.Pixels.get(3), 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, 0, ptLeft, ptRight, false);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name(), 2, 1 * csFactor, ptLeft, ptRight, false);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false));
        pt0 = tg.Pixels.get(0);
        pt1 = tg.Pixels.get(1);
        pt2 = tg.Pixels.get(2);
        pt3 = tg.Pixels.get(3);
        if (tg.get_Client().equalsIgnoreCase("ge")) {
          pt0.x -= Math.floor(font.getSize() / 2);
          pt2.x -= Math.floor(font.getSize() / 2);
        }
        if (!tg.get_Client().equalsIgnoreCase("ge")) {
          armyc2.c2sd.JavaTacticalRenderer.clsUtility.shiftModifiersLeft(pt0, pt3, 12.5);
          armyc2.c2sd.JavaTacticalRenderer.clsUtility.shiftModifiersLeft(pt1, pt2, 12.5);
        }
        if (ptLeft.x === ptRight.x)
          ptRight.x += 1;
        if (ptLeft.x < ptRight.x) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier(tg, tg.get_H(), 1, 0, pt2, pt1);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier(tg, tg.get_DTG(), 1, 0, pt0, pt3);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier(tg, tg.get_DTG1(), 1, 1 * csFactor, pt0, pt3);
        } else {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier(tg, tg.get_H(), 1, 0, pt0, pt3);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier(tg, tg.get_DTG(), 1, 0, pt2, pt1);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier(tg, tg.get_DTG1(), 1, 1, pt2, pt1);
        }
        break;
      case 22133200:
      case 24321200:
      case 24331200:
      case 24332200:
      case 24333200:
      case 24334200:
      case 24335200:
      case 24336200:
      case 24337200:
      case 24338200:
      case 24339200:
        ptLeft = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(0), tg.Pixels.get(1), 0);
        ptRight = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(2), tg.Pixels.get(3), 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, label, 2, 0, ptLeft, ptRight, false);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier2(tg, tg.get_Name(), 2, 1 * csFactor, ptLeft, ptRight, false);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), 3, 1 * csFactor, ptCenter, ptCenter, new Boolean(false));
        pt0 = tg.Pixels.get(0);
        pt1 = tg.Pixels.get(1);
        pt2 = tg.Pixels.get(2);
        pt3 = tg.Pixels.get(3);
        if (tg.get_Client().equalsIgnoreCase("ge")) {
          pt0.x -= Math.floor(font.getSize() / 2);
          pt2.x -= Math.floor(font.getSize() / 2);
        }
        if (!tg.get_Client().equalsIgnoreCase("ge")) {
          armyc2.c2sd.JavaTacticalRenderer.clsUtility.shiftModifiersLeft(pt0, pt3, 12.5);
          armyc2.c2sd.JavaTacticalRenderer.clsUtility.shiftModifiersLeft(pt1, pt2, 12.5);
        }
        if (ptLeft.x === ptRight.x)
          ptRight.x += 1;
        if (ptLeft.x < ptRight.x) {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier(tg, tg.get_DTG(), 1, 0, pt0, pt3);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier(tg, tg.get_DTG1(), 1, 1 * csFactor, pt0, pt3);
        } else {
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier(tg, tg.get_DTG(), 1, 0, pt2, pt1);
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifier(tg, tg.get_DTG1(), 1, 1, pt2, pt1);
        }
        break;
      case 24326100:
      case 24326101:
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, 0, 1, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, 1, 2, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, 2, 3, new Boolean(true));
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralModifier(tg, label, 2, 0, 3, 0, new Boolean(true));
        break;
      case 24326200:
        pt0 = tg.Pixels.get(0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt0, pt0, new Boolean(true));
        pt0 = tg.Pixels.get(25);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt0, pt0, new Boolean(true));
        pt0 = tg.Pixels.get(50);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt0, pt0, new Boolean(true));
        pt0 = tg.Pixels.get(75);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 3, 0, pt0, pt0, new Boolean(true));
        break;
      case 243111000:
        if (tg.get_H1() !== null && tg.get_H1().equals("") === false) {
          H1 = tg.get_H1().split(",");
          for (j = 0; j < H1.length; j++) {
            if (tg.Pixels.size() > j * 102 + 25) {
              pt0 = tg.Pixels.get(j * 102 + 25);
              armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, "ALT " + H1[j], 3, 0, pt0, pt0);
            }
          }
        }
        if (!tg.get_HideOptionalLabels()) {
          var H2 = tg.get_H2();
          var am = H2.split(",");
          for (j = 0; j < am.length; j++) {
            if (tg.Pixels.size() > j * 102 + 25) {
              pt0 = tg.Pixels.get(j * 102 + 25);
              //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, "RG " + am[j], 3, -1, pt0, pt0);
              if (j === 0)
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, "MIN RG " + am[j], 3, -1, pt0, pt0);
              else
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, "MAX RG " + "(" + j.toString() + ") " + am[j], 3, -1, pt0, pt0);

            }
          }
        } // end if set range fan text
        break;
      case 243112000:
        //                if (tg.get_H1() !== null && tg.get_H1().equals("") === false)
        //                {
        //                    H1 = tg.get_H1().split(",");
        //                    for (j = 0; j < H1.length; j++) {
        //                        if (tg.Pixels.size() > j * 203 + 151) {
        //                            pt0 = tg.Pixels.get(j * 203 + 151);
        //                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddAreaModifier(tg, "ALT " + H1[j], 3, 0, pt0, pt0);
        //                        }
        //                    }
        //                }
        break;
      default:
        return;
    }
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.scaleModifiers(tg);
    tg.Pixels = origPoints;
    g2d.dispose();
    g2d = null;
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddModifiers2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddModifiers2", exc));
    } else {
      throw exc;
    }
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers = function(tg, g2d) {
  try {
    var id = new armyc2.c2sd.graphics2d.AffineTransform();
    id.setToIdentity();
    g2d.setTransform(id);
    var font = g2d.getFont();
    var j = 0;
    var modifier = null;
    g2d.setBackground(armyc2.c2sd.renderer.utilities.Color.white);
    var pt = null;
    var theta = 0;
    var stringWidth = 0;
    var stringHeight = 0;
    var metrics = g2d.getFontMetrics();
    var s = "";
    var x = 0;
    var y = 0;
    var pt1 = null;
    var pt2 = null;
    var quadrant = -1;
    for (j = 0; j < tg.modifiers.size(); j++) {
      modifier = tg.modifiers.get(j);
      var lineFactor = modifier.lineFactor;
      s = modifier.text;
      var x0 = 0;
      var y0 = 0;
      var x1 = 0;
      var y1 = 0;
      pt = modifier.textPath[0];
      x0 = pt.x;
      y0 = pt.y;
      pt = modifier.textPath[1];
      x1 = pt.x;
      y1 = pt.y;
      theta = Math.atan2(y1 - y0, x1 - x0);
      var midPt;
      if (x0 > x1) {
        theta -= 3.141592653589793;
      }
      switch (modifier.type) {
        case 1:
          g2d.rotate(theta, x0, y0);
          stringWidth = metrics.stringWidth(s);
          stringHeight = font.getSize();
          if (x0 < x1 || (x0 === x1 && y0 > y1)) {
            x = Math.floor(x0) - stringWidth;
            y = Math.floor(y0) - Math.floor(stringHeight / 2) + Math.floor((lineFactor * stringHeight));
            g2d.setColor(tg.get_FontBackColor());
            g2d.clearRect(x, y, stringWidth, stringHeight);
            y = Math.floor(y0) + Math.floor(stringHeight / 2) + Math.floor((lineFactor * stringHeight));
            g2d.setColor(tg.get_TextColor());
            g2d.drawString(s, x, y);
          } else {
            x = Math.floor(x0);
            y = Math.floor(y0) - Math.floor(stringHeight / 2) + Math.floor((lineFactor * stringHeight));
            g2d.setColor(tg.get_FontBackColor());
            g2d.clearRect(x, y, stringWidth, stringHeight);
            y = Math.floor(y0) + Math.floor(stringHeight / 2) + Math.floor((lineFactor * stringHeight));
            g2d.setColor(tg.get_TextColor());
            g2d.drawString(s, x, y);
          }
          break;
        case 2:
          midPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2((x0 + x1) / 2, (y0 + y1) / 2);
          g2d.rotate(theta, midPt.x, midPt.y);
          stringWidth = metrics.stringWidth(s);
          stringHeight = font.getSize();
          x = Math.floor(midPt.x) - Math.floor(stringWidth / 2);
          y = Math.floor(midPt.y) - Math.floor(stringHeight / 2) + Math.floor((lineFactor * stringHeight));
          g2d.setColor(tg.get_FontBackColor());
          g2d.clearRect(x, y, stringWidth, stringHeight);
          y = Math.floor(midPt.y) + (Math.floor(stringHeight / 2)) + Math.floor((lineFactor * stringHeight));
          g2d.setColor(tg.get_TextColor());
          g2d.drawString(s, x, y);
          break;
        case 3:
          g2d.rotate(0, x0, y0);
          stringWidth = metrics.stringWidth(s);
          stringHeight = font.getSize();
          x = Math.floor(x0) - Math.floor(stringWidth / 2);
          y = Math.floor(y0) - Math.floor(stringHeight / 2) + Math.floor((lineFactor * stringHeight));
          g2d.setColor(tg.get_FontBackColor());
          g2d.clearRect(x, y, stringWidth, stringHeight);
          y = Math.floor(y0) + (Math.floor(stringHeight / 2)) + Math.floor((lineFactor * stringHeight));
          g2d.setColor(tg.get_TextColor());
          g2d.drawString(s, x, y);
          break;
        case 4:
          if (tg.Pixels.size() >= 14) {
            pt1 = tg.Pixels.get(3);
            pt2 = tg.Pixels.get(10);
            quadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(pt1, pt2);
            theta = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x);
            switch (quadrant) {
              case 1:
                theta += 1.5707963267948966;
                break;
              case 2:
                theta -= 1.5707963267948966;
                break;
              case 3:
                theta -= 1.5707963267948966;
                break;
              case 4:
                theta += 1.5707963267948966;
                break;
              default:
                break;
            }
            g2d.rotate(theta, x0, y0);
            stringWidth = metrics.stringWidth(s);
            stringHeight = font.getSize();
            x = Math.floor(x0) - Math.floor(stringWidth / 2);
            y = Math.floor(y0) - Math.floor(stringHeight / 2) + Math.floor((lineFactor * stringHeight));
            g2d.setColor(tg.get_FontBackColor());
            g2d.clearRect(x, y, stringWidth, stringHeight);
            y = Math.floor(y0) + (Math.floor(stringHeight / 2)) + Math.floor((lineFactor * stringHeight));
            g2d.setColor(tg.get_TextColor());
            g2d.drawString(s, x, y);
          } else {
            stringWidth = metrics.stringWidth(s);
            stringHeight = font.getSize();
            x = Math.floor(tg.Pixels.get(0).x);
            y = Math.floor(tg.Pixels.get(0).y);
            g2d.setColor(tg.get_FontBackColor());
            g2d.clearRect(x, y, stringWidth, stringHeight);
            y = y + (Math.floor(stringHeight / 2)) + Math.floor((lineFactor * stringHeight));
            g2d.setColor(tg.get_TextColor());
            g2d.drawString(s, x, y);
          }
          break;
        default:
          break;
      }
      g2d.setTransform(id);
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "DisplayModifiers", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DisplayModifiers", exc));
    } else {
      throw exc;
    }
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.BuildModifierShape = function(tg, pt0, pt1, stringWidth, stringHeight, lineFactor, isTextFlipped) {
  var modifierFill = null;
  try {
    var ptTemp0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
    var ptTemp1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
    if (isTextFlipped === true)
      lineFactor += 1;
    if (lineFactor < 0) {
      ptTemp0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 2, -lineFactor * stringHeight);
      ptTemp1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 2, -lineFactor * stringHeight);
    }
    if (lineFactor > 0) {
      ptTemp0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 3, lineFactor * stringHeight);
      ptTemp1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 3, lineFactor * stringHeight);
    }
    if (ptTemp0.y === ptTemp1.y) {
      ptTemp0.y += 1;
    }
    var pt3 = null;
    var pt4 = null;
    var pt5 = null;
    var pt6 = null;
    var pt7 = null;
    pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(ptTemp0, ptTemp1, -stringWidth);
    pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(ptTemp1, ptTemp0, pt3, 0, Math.floor(stringHeight / 2));
    pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(ptTemp1, ptTemp0, pt3, 1, Math.floor(stringHeight / 2));
    pt6 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(ptTemp1, ptTemp0, ptTemp0, 1, Math.floor(stringHeight / 2));
    pt7 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(ptTemp1, ptTemp0, ptTemp0, 0, Math.floor(stringHeight / 2));
    modifierFill = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_MODIFIER_FILL);
    modifierFill.moveTo(pt4);
    modifierFill.lineTo(pt5);
    modifierFill.lineTo(pt6);
    modifierFill.lineTo(pt7);
    modifierFill.lineTo(pt4);
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "BuildModifierShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside BuildModifierShape", exc));
    } else {
      throw exc;
    }
  }
  return modifierFill;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetIntegralTextShapes = function(tg, g2d, shapes) {
  try {
    if (tg.Pixels === null || shapes === null)
      return;
    var hmap = armyc2.c2sd.JavaTacticalRenderer.clsUtility.getMSRSegmentColors(tg);
    var color = null;
    var shape = null;
    var segShape = null;
    g2d.setFont(tg.get_Font());
    var j = 0;
    var affiliation = null;
    var metrics = g2d.getFontMetrics();
    var echelonSymbol = null;
    var stringWidthEchelonSymbol = 0;
    var stringWidthENY = 0;
    //var lineTooShort = false;
    var ptEchelonStart = null;
    var ptEchelonEnd = null;
    var midpt;
    var ptENY0Start = null;
    var ptENY0End = null;
    var ptENY1Start;
    var ptENY1End;
    var pt0 = null;
    var pt1 = null;
    var dist = 0;
    var stroke = null;
    switch (tg.get_LineType()) {
      case 22121000:
        echelonSymbol = tg.get_EchelonSymbol();
        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
        shape.setLineColor(tg.get_LineColor());
        shape.set_Style(tg.get_LineStyle());
        affiliation = tg.get_Affiliation();
        stroke = armyc2.c2sd.JavaTacticalRenderer.clsUtility.getLineStroke(tg.get_LineThickness(), shape.get_Style(), 1, 1);
        shape.setStroke(stroke);
        if (tg.get_Affiliation() !== null && tg.get_Affiliation().equals("H")) {
          stringWidthENY = metrics.stringWidth(tg.get_N());
        }
        if (echelonSymbol !== null && !echelonSymbol.isEmpty())
          stringWidthEchelonSymbol = metrics.stringWidth(echelonSymbol);
        //diagnostic
        if (hmap === null || hmap.isEmpty()) {
          shape.moveTo(tg.Pixels.get(0));
          for (j = 1; j < tg.Pixels.size(); j++)
            shape.lineTo(tg.Pixels.get(j));
          shapes.add(shape);
          break;
        }
        //end section
        for (j = 0; j < tg.Pixels.size() - 1; j++) {
          segShape = null;
          if (hmap !== null) {
            if (hmap.containsKey(new Integer(j))) {
              color = hmap.get(new Integer(j));
              segShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
              segShape.setLineColor(color);
              segShape.set_Style(tg.get_LineStyle());
              segShape.setStroke(stroke);
            }
          }
          pt0 = tg.Pixels.get(j);
          pt1 = tg.Pixels.get(j + 1);
          //lineTooShort = armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetBoundarySegmentTooShort(tg, g2d, j);
          if (segShape !== null)
            segShape.moveTo(pt0);
          else
            shape.moveTo(pt0);
          //if (lineTooShort || tg.get_Client().equals("ge"))
          if (tg.get_Client().equals("ge") || armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetBoundarySegmentTooShort(tg, g2d, j) === true) {
            if (segShape !== null) {
              segShape.lineTo(pt1);
              shapes.add(segShape);
              continue;
            } else {
              shape.lineTo(pt1);
              continue;
            }
          }
          midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
          if (stringWidthENY > 0) {
            midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, midpt, 0);
            midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, midpt, 0);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, midpt) - stringWidthENY / 1.5;
            ptENY0Start = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, dist);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, midpt) + stringWidthENY / 1.5;
            ptENY0End = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, dist);
            if (segShape !== null) {
              segShape.moveTo(pt0);
              segShape.lineTo(ptENY0Start);
              segShape.moveTo(ptENY0End);
            } else {
              shape.moveTo(pt0);
              shape.lineTo(ptENY0Start);
              shape.moveTo(ptENY0End);
            }
          } else {
            if (segShape !== null)
              segShape.moveTo(pt0);
            else
              shape.moveTo(pt0);
          }
          if (stringWidthEchelonSymbol > 0) {
            midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, midpt) - stringWidthEchelonSymbol / 1.5;
            ptEchelonStart = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, dist);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, midpt) + stringWidthEchelonSymbol / 1.5;
            ptEchelonEnd = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, dist);
            if (segShape !== null) {
              segShape.lineTo(ptEchelonStart);
              segShape.moveTo(ptEchelonEnd);
            } else {
              shape.lineTo(ptEchelonStart);
              shape.moveTo(ptEchelonEnd);
            }
          }
          if (stringWidthENY > 0) {
            midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
            midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, midpt, 0);
            midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, midpt, 0);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, midpt) - stringWidthENY / 1.5;
            ptENY1Start = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt1, pt0, dist);
            dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, midpt) + stringWidthENY / 1.5;
            ptENY1End = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt1, pt0, dist);
            if (segShape !== null) {
              segShape.lineTo(ptENY1End);
              segShape.moveTo(ptENY1Start);
              segShape.lineTo(pt1);
            } else {
              shape.lineTo(ptENY1End);
              shape.moveTo(ptENY1Start);
              shape.lineTo(pt1);
            }
          } else {
            if (segShape !== null)
              segShape.lineTo(pt1);
            else
              shape.lineTo(pt1);
          }
          if (segShape !== null)
            shapes.add(segShape);
        }
        if (!shape.getShape().getPathIterator().getPoints().isEmpty())
          shapes.add(shape);
        break;
      default:
        break;
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "GetIntegralTextShapes", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetIntegralTextShapes", exc));
    } else {
      throw exc;
    }
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.switchDirection = function(direction) {
  var result = -1;
  switch (direction) {
    case 0:
      return 1;
    case 1:
      return 0;
    case 2:
      return 3;
    case 3:
      return 2;
  }
  return result;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2 = function(tg, g2d, shapes, isTextFlipped, converter) {
  try {
    if (shapes === null)
      return;
    if (tg.modifiers === null || tg.modifiers.isEmpty())
      return;
    var font = null;
    var j = 0;
    var modifier = null;
    var fontBackColor = tg.get_FontBackColor();
    var textColor = tg.get_TextColor();
    var theta = 0;
    var stringWidth = 0;
    var stringHeight = 0;
    var s = "";
    var x = 0;
    var y = 0;
    var pt0 = null;
    var pt1 = null;
    var pt2 = null;
    var pt3 = null;
    var quadrant = -1;
    var shape2 = null;
    var lineType = tg.get_LineType();
    var sz = armyc2.c2sd.renderer.utilities.RendererSettings.getMPModifierFontSize();
    if (sz === 0)
      return;
    font = tg.get_Font();
    if (font === null) {
      font = g2d.getFont();
    }
    if (font.getSize() === 0)
      return;
    g2d.setFont(font);
    var metrics = g2d.getFontMetrics();
    if (fontBackColor !== null) {
      g2d.setBackground(fontBackColor);
    } else {
      g2d.setBackground(armyc2.c2sd.renderer.utilities.Color.white);
    }
    if (textColor === null)
      textColor = tg.get_LineColor();
    var direction = -1;
    var glyphPosition = null;
    var modifierPosition = null;
    for (j = 0; j < tg.modifiers.size(); j++) {
      modifier = tg.modifiers.get(j);
      var lineFactor = modifier.lineFactor;
      if (modifier.type !== 3 && lineType !== 22123000) {
        lineFactor += 0.25;
      }
      if (isTextFlipped === true)
        lineFactor = -lineFactor;
      s = modifier.text;
      if (s === null || s.equals("")) {
        continue;
      }
      //stringWidth = metrics.stringWidth(s)+1;
      //stringHeight = font.getSize();
      var bounds = metrics.getTextBounds(s);
      stringWidth = bounds.width / 1.5;
      stringHeight = bounds.height;
      var x0 = 0;
      var y0 = 0;
      var x1 = 0;
      var y1 = 0;
      var dist = 0;
      pt0 = modifier.textPath[0];
      x0 = Math.round(pt0.x);
      y0 = Math.round(pt0.y);
      pt1 = modifier.textPath[1];
      x1 = Math.round(pt1.x);
      y1 = Math.round(pt1.y);
      theta = Math.atan2(y1 - y0, x1 - x0);
      var midPt;
      if (x0 > x1) {
        theta -= 3.141592653589793;
      }
      pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0, y0);
      pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x1, y1);
      midPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2((x0 + x1) / 2, (y0 + y1) / 2);
      var justify = armyc2.c2sd.renderer.utilities.ShapeInfo.justify_left;
      switch (modifier.type) {
        case 5: //aboveEnd
          if (x0 === x1) {
            x1 += 1;
          }

          if (x0 < x1) {
            x = x0;
            y = y0 + stringHeight / 2 + (lineFactor * stringHeight);
          } else {
            x = x0 - stringWidth;
            y = y0 + stringHeight / 2 + (lineFactor * stringHeight);
          }
          if (lineFactor >= 0) {
            direction = 2;
          } else {
            direction = 3;
          }

          if (lineType === 22123000 || tg.get_Client().equalsIgnoreCase("ge")) { //LC
            direction = armyc2.c2sd.JavaTacticalRenderer.Modifier2.switchDirection(direction);
          }

          //add section 6/22/15
          if (x0 < x1)
            justify = armyc2.c2sd.renderer.utilities.ShapeInfo.justify_right;
          else
            justify = armyc2.c2sd.renderer.utilities.ShapeInfo.justify_left;
          //if using justify
          pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt0, pt0, direction, lineFactor * stringHeight);
          modifierPosition = new armyc2.c2sd.graphics2d.Point(pt3.x, pt3.y);
          //end setcion

          //if using offset point, not justify
          pt0.x = x;
          pt0.y = y;
          pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt0, pt0, direction, lineFactor * stringHeight);
          glyphPosition = new armyc2.c2sd.graphics2d.Point(pt3.x, pt3.y);
          break;
        case 1: //to end
          if (x0 === x1) {
            x1 += 1;
          }
          dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
          direction = 2;
          if (lineFactor >= 0)
            direction = 2;
          else
            direction = 3;
          if (lineType === 22123000 || tg.get_Client().equalsIgnoreCase("ge")) {
            direction = armyc2.c2sd.JavaTacticalRenderer.Modifier2.switchDirection(direction);
          }
          pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt0, pt1, direction, lineFactor * stringHeight);
          pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt0, pt0, direction, lineFactor * stringHeight);
          //add setcion 6-22-15
          if (x0 < x1)
            justify = armyc2.c2sd.renderer.utilities.ShapeInfo.justify_right;
          else
            justify = armyc2.c2sd.renderer.utilities.ShapeInfo.justify_left;
          //if using justify
          modifierPosition = new armyc2.c2sd.graphics2d.Point(pt3.x, pt3.y);
          //end section

          if (pt0.x > pt1.x)
            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt3, pt2, -stringWidth / 2);
          else
            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt3, pt2, -stringWidth);
          glyphPosition = new armyc2.c2sd.graphics2d.Point(pt3.x, pt3.y);
          //diagnostic
          //theta = 0;
          pt3.x -= stringWidth / 2;
          pt3.y -= stringHeight / 2;
          glyphPosition = new armyc2.c2sd.graphics2d.Point(pt3.x, pt3.y);
          //end section
          break;
        case 2: //breach
        case 6:
          dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
          if (converter !== null && dist > 100 && lineType !== 22121000) {
            var pt1Geo = converter.PixelsToGeo(new armyc2.c2sd.graphics2d.Point(Math.floor(pt0.x), Math.floor(pt0.y)));
            var pt2Geo = converter.PixelsToGeo(new armyc2.c2sd.graphics2d.Point(Math.floor(pt1.x), Math.floor(pt1.y)));
            var a12 = new armyc2.c2sd.JavaLineArray.ref();
            var a21 = new armyc2.c2sd.JavaLineArray.ref();
            a12.value = Clazz.newArray(1, 0);
            a21.value = Clazz.newArray(1, 0);
            dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1Geo.x, pt1Geo.y), armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2Geo.x, pt2Geo.y), a12, a21);
            var midPtGeo = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1Geo.x, pt1Geo.y), dist / 2, a12.value[0]);
            var pt2d = new armyc2.c2sd.graphics2d.Point2D(midPtGeo.x, midPtGeo.y);
            var midPt2D = converter.GeoToPixels(pt2d);
            midPt.x = midPt2D.getX();
            midPt.y = midPt2D.getY();
          }
          x = Math.floor(midPt.x) - Math.floor(Math.floor(stringWidth) / 2);
          y = Math.floor(midPt.y) + Math.floor((stringHeight / 2)) + Math.floor((lineFactor * stringHeight));
          if (pt0.x <= pt1.x)
            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(midPt, pt0, 0.5 * stringWidth);
          else
            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(midPt, pt1, 0.5 * stringWidth);
          if (tg.get_Client().equals("2D"))
            lineFactor += 0.5;
          if (lineFactor >= 0) {
            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt2, pt2, 3, Math.abs((lineFactor) * stringHeight));
            midPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, midPt, midPt, 3, Math.abs((lineFactor) * stringHeight));
          } else {
            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt2, pt2, 2, Math.abs((lineFactor) * stringHeight));
            midPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, midPt, midPt, 2, Math.abs((lineFactor) * stringHeight));
          }
          if (x0 === x1 && y0 > y1) {
            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt2, pt2, 1, Math.abs((lineFactor) * stringHeight));
            midPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, midPt, midPt, 1, Math.abs((lineFactor) * stringHeight));
          }
          if (x0 === x1 && y0 < y1) {
            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt2, pt2, 0, Math.abs((lineFactor) * stringHeight));
            midPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, midPt, midPt, 0, Math.abs((lineFactor) * stringHeight));
          }
          glyphPosition = new armyc2.c2sd.graphics2d.Point(Math.floor(pt3.x), Math.floor(pt3.y));
          pt3.x -= stringWidth / 2;
          pt3.y -= stringHeight / 2;
          glyphPosition = new armyc2.c2sd.graphics2d.Point(pt3.x, pt3.y);
          justify = armyc2.c2sd.renderer.utilities.ShapeInfo.justify_center;
          modifierPosition = new armyc2.c2sd.graphics2d.Point2D(midPt.x, midPt.y);

          if(modifier.type === 6)//armyc2.c2sd.JavaTacticalRenderer.Modifier2.aboveMiddlePerpendicular
          {
            // Need to negate the original rotation
            if(x0 > x1)
            {
              theta += Math.PI;
            }
            // Adjust the label rotation based on the y values
            if(y0 > y1)
            {
              theta += Math.PI;
            }
            // Rotate by 90 degrees. This is how we rotate the label perpendicular to the line
            theta -= Math.PI / 2;
          }

          break;
        case 3: //screen, cover, guard, area
          theta = 0;
          x = x0;
          y = y0 + stringHeight / 2 + .5 * lineFactor * stringHeight;
          glyphPosition = new armyc2.c2sd.graphics2d.Point(x, y);
          justify = armyc2.c2sd.renderer.utilities.ShapeInfo.justify_center;
          modifierPosition = new armyc2.c2sd.graphics2d.Point2D(x, y);
          break;
        case 4:
          if (tg.Pixels.size() >= 14) {
            pt1 = tg.Pixels.get(3);
            pt2 = tg.Pixels.get(10);
            quadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(pt1, pt2);
            theta = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x);
            if (Math.abs(theta) < 0.39269908169872414) {
              if (theta < 0) {
                theta -= 1.5707963267948966;
              } else {
                theta += 1.5707963267948966;
              }
            }
            switch (quadrant) {
              case 1:
                theta += 1.5707963267948966;
                break;
              case 2:
                theta -= 1.5707963267948966;
                break;
              case 3:
                theta -= 1.5707963267948966;
                break;
              case 4:
                theta += 1.5707963267948966;
                break;
              default:
                break;
            }
            x = Math.floor(x0) - Math.floor(Math.floor(stringWidth) / 2);
            y = Math.floor(y0) - Math.floor(Math.floor(stringHeight) / 2) + Math.floor((lineFactor * stringHeight));
            y = Math.floor(y0) + Math.floor((stringHeight / 2)) + Math.floor((lineFactor * stringHeight));
          } else {
            theta = 0;
            x = Math.floor(tg.Pixels.get(0).x);
            y = Math.floor(tg.Pixels.get(0).y);
            x = x - Math.floor(Math.floor(stringWidth) / 2);
            y = y - Math.floor(Math.floor(stringHeight) / 2) + Math.floor((lineFactor * stringHeight));
            y = y + Math.floor((stringHeight / 2)) + Math.floor((lineFactor * stringHeight));
          }
          glyphPosition = new armyc2.c2sd.graphics2d.Point(x, y);
          break;
        default:
          break;
      }
      shape2 = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_MODIFIER_FILL);
      shape2.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(0, 1, 1, 3));
      if (tg.get_TextColor() !== null) {
        shape2.setFillColor(tg.get_TextColor());
      } else if (tg.get_LineColor() !== null) {
        shape2.setFillColor(tg.get_LineColor());
      }
      if (tg.get_LineColor() !== null) {
        shape2.setLineColor(tg.get_LineColor());
      }
      var tl = new armyc2.c2sd.graphics2d.TextLayout(s, font, g2d.getFontMetrics().getFontRenderContext());
      shape2.setTextLayout(tl);
      if (converter !== null)
        shape2.setGlyphPosition(glyphPosition);
      else
        shape2.setGlyphPosition(new armyc2.c2sd.graphics2d.Point2D(0, 0));
      shape2.setModifierString(s);
      shape2.setModifierStringAngle(theta * 180 / 3.141592653589793);
      shape2.setModifierStringPosition(modifierPosition);
      shape2.setTextJustify(justify);
      if (shape2 !== null) {
        shapes.add(shape2);
      }
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "DisplayModifiers2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DisplayModifiers2", exc));
    } else {
      throw exc;
    }
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.getTextShape = function(g2d, str, font, tx) {
  var tl = null;
  var frc = null;
  try {
    frc = g2d.getFontRenderContext();
    tl = new armyc2.c2sd.graphics2d.TextLayout(str, font, frc);
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "getTextShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getTextShape", exc));
    } else {
      throw exc;
    }
  }
  return tl.getOutline(tx);
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.createTextOutline = function(originalText) {
  var siOutline = null;
  try {
    var outline = originalText.getShape();
    siOutline = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_MODIFIER_FILL);
    siOutline.setShape(outline);
    if (originalText.getFillColor().getRed() === 255 && originalText.getFillColor().getGreen() === 255 && originalText.getFillColor().getBlue() === 255)
      siOutline.setLineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
    else
      siOutline.setLineColor(armyc2.c2sd.renderer.utilities.Color.WHITE);
    var width = armyc2.c2sd.renderer.utilities.RendererSettings.getInstance().getTextOutlineWidth();
    siOutline.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(width, 1, 1, 3));
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "createTextOutline", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside createTextOutline", exc));
    } else {
      throw exc;
    }
  }
  return siOutline;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.getShapePoints = function(shape) {
  try {
    var ptsPoly = new java.util.ArrayList();
    var ptPoly = null;
    var coords = new Array(6);
    var zeros = 0;
    for (var i = shape.getPathIterator(null); !i.isDone(); i.next()) {
      var type = i.currentSegment(coords);
      if (type === 0 && zeros === 2)
        break;
      switch (type) {
        case armyc2.c2sd.graphics2d.PathIterator.SEG_MOVETO:
          ptPoly = new armyc2.c2sd.graphics2d.Point2D(coords[0], coords[1]);
          ptsPoly.add(ptPoly);
          zeros++;
          break;
        case armyc2.c2sd.graphics2d.PathIterator.SEG_LINETO:
          ptPoly = new armyc2.c2sd.graphics2d.Point2D(coords[0], coords[1]);
          ptsPoly.add(ptPoly);
          break;
        case armyc2.c2sd.graphics2d.PathIterator.SEG_QUADTO: //quadTo was never used
          break;
        case armyc2.c2sd.graphics2d.PathIterator.SEG_CUBICTO: //curveTo was used for HOLD, BRDGHD and some METOC's
          break;
        case armyc2.c2sd.graphics2d.PathIterator.SEG_CLOSE: //closePath was never used
          break;
      }
    }
    if (ptsPoly.size() > 0) {
      var pts = null;
      pts = new java.util.ArrayList();
      for (var j = 0; j < ptsPoly.size(); j++) {
        var pt2d = ptsPoly.get(j);
        var pt = new armyc2.c2sd.JavaLineArray.POINT2(pt2d.getX(), pt2d.getY());
        pts.add(pt);
      }
      return pts;
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "createTextOutline", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getShapePoints", exc));
    } else {
      throw exc;
    }
  }
  return null;
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers2RevD = function(tg, shapes) {
  if (tg.get_SymbolId().length < 20) {
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers2(tg);
    return;
  }
  try {
    var symbolId = tg.get_SymbolId();
    var setA = symbolId.substring(0, 10);
    var setB = symbolId.substring(10);
    var code = setB.substring(0, 6);
    var code2 = Integer.parseInt(code);
    var nCode = code2.valueOf();
    var symbolSet = setA.substring(4, 6);
    var nSymbol = Integer.parseInt(symbolSet);
    //default values for modifiers AP and V
    var country = "US"; //country AS modifier
    var v = "MORTAR"; //type
    var ap = "QC 1968"; //target designator    AP modifier
    var pt0 = null,
      pt1 = null;
    var csFactor = 1.0;
    var n = tg.Pixels.size();
    var ptLeft = null,
      ptRight = null,
      ptCenter = null;
    var label = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getRevDLabel(nCode);
    var dash = " - ";
    switch (nCode) {
      case 200202:
        ptLeft = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(0), tg.Pixels.get(1), 0);
        ptRight = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(tg.Pixels.get(2), tg.Pixels.get(3), 0);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label + " - " + tg.get_Name(), 2, -csFactor / 2, ptLeft, ptRight, false);
        break;
      case 290600:
        pt0 = tg.Pixels.get(4);
        pt1 = tg.Pixels.get(2);
        if (tg.Pixels.get(0).y < tg.Pixels.get(1).y)
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + " - " + tg.get_DTG1(), 2, csFactor / 2, pt0, pt1, false);
        else
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + " - " + tg.get_DTG1(), 2, -csFactor / 2, pt0, pt1, false);
        break;
      case 200402:
        if (tg.Pixels.get(0).x > tg.Pixels.get(3).x)
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, csFactor, tg.Pixels.get(0), tg.Pixels.get(3), false);
        else
          armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, label, 2, csFactor, tg.Pixels.get(1), tg.Pixels.get(2), false);
        break;
      case 141500:
      case 141400:
      case 200300:
      case 240804:
        break;
      case 151407: //eny spt confirmed
      case 151408: //eny spt anticipated
        var shape = shapes.get(shapes.size() - 1);
        var pts = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getShapePoints(shape.getShape());
        n = pts.size();
        if (n === 4) //was 3
        {
          pt0 = pts.get(0);
          pt1 = pts.get(1);
          pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
        } else if (n === 6) {
          pt0 = pts.get(3);
          pt1 = pts.get(4);
        } else {
          pt0 = pts.get(1); //was n-4
          pt1 = pts.get(2); //was n-3
        }
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, pt1, false);
        if (n === 4) {
          pt0 = pts.get(2); //was pts.size()-9
          pt1 = pts.get(3); //was pts.size()-8
          pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
        } else if (n === 6) {
          pt0 = pts.get(0);
          pt1 = pts.get(1);
        } else {
          pt0 = pts.get(n / 2 + 1); //was pts.size()-10
          pt1 = pts.get(n / 2 + 2); //was pts.get(pts.size()-9
        }
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), 2, 0, pt0, pt1, false);
        break;
      default:
        var saveStd = tg.getSymbologyStandard();
        tg.setSymbologyStandard(armyc2.c2sd.renderer.utilities.RendererSettings.Symbology_2525C);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers2(tg);
        tg.setSymbologyStandard(saveStd);
        break;
    }

  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddModifiers2RevD", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside addModifiers2RevD", exc));
    } else {
      throw exc;
    }
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.getRevDLabel = function(code) {
  switch (code) {

    case 200401:
    case 200402:
      return "AOI";
    case 200300:
      return "N";
    case 200101:
      return "LA";
    case 200201:
    case 200202:
      return "DA";
    case 170800:
      return "BDZ";
    case 150501:
      return "JTAA";
    case 150502:
      return "SAA";
    case 150503:
      return "SGSA";
    case 140700:
      return "FCL";
    case 151500:
      return "ASLT";
    case 170400:
      return "SL";
    case 170600:
      return "TC";
    case 171100:
      return "AARROZ";
    case 171200:
      return "UAROZ";
    case 171300:
      return "WEZ";
    case 171400:
      return "FEZ";
    case 171500:
      return "JEZ";
    case 171900:
      return "SHORADEZ";
    case 190100:
      return "IFF OFF";
    case 190200:
      return "IFF ON";
    case 220102:
      return "EW";
    case 220107:
      return "J";
    case 220108:
      return "RDF";
    case 260300: //nfl handle like fscl
      return "NFL";
    case 260400:
      return "BCL";
    case 300100:
      return "ICL";
    case 140400:
    case 140401:
      return "FEBA";
    case 140900:
      return "LOA";
    default:
      return "";
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiersGeo2 = function(tg,
  g2d,
  clipBounds,
  converter) {
  if (tg.get_SymbolId().length < 20) {
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiersGeo(tg, g2d, clipBounds, converter);
    return;
  }
  try {
    var country = "US"; //country AS modifier
    var v = "MORTAR"; //type
    var ap = "QC 1968"; //target designator    AP modifier
    //assume we are using tg.get_Location() for the Y modifier
    //uncomment 3 lines after the methods become available
    //country=tg.get_AS();
    //v=tg.get_V();
    //ap=tg.get_AP();

    var symbolId = tg.get_SymbolId();
    var setA = symbolId.substring(0, 10);
    var setB = symbolId.substring(10);
    var code = setB.substring(0, 6);
    var code2 = Integer.parseInt(code);
    var nCode = code2.valueOf();
    var t = tg.get_Name();
    switch (nCode) {
      case 110101: //lateral boundary
      case 110102: //fwd boundary
      case 110103: //rear boundary
        t += " " + "(" + country + ")";
        tg.set_Name(t);
        tg.set_T1(t);
        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiersGeo(tg, g2d, clipBounds, converter);
        return;
      default:
        break;
    }
    var symbolSet = setA.substring(4, 6);
    var nSymbol = Integer.parseInt(symbolSet);
    //default values for modifiers AP and V
    var lineutility = armyc2.c2sd.JavaLineArray.lineutility;
    var Modifier2 = armyc2.c2sd.JavaTacticalRenderer.Modifier2;
    var mdlGeodesic = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic;
    var graphics2d = armyc2.c2sd.graphics2d;
    var label = Modifier2.GetCenterLabel(tg);
    if (nSymbol.valueOf() !== 25) {
      Modifier2.AddModifiersGeo(tg, g2d, clipBounds, converter);
      return;
    }
    var ptUl = null,
      ptUr = null,
      ptLl = null,
      ptLr = null;
    var toEnd = 1,
      aboveMiddle = 2,
      area = 3,
      screen = 4,
      aboveEnd = 5;
    if (tg.Pixels === null || tg.Pixels.isEmpty())
      return;
    var font = tg.get_Font();
    var stringHeight = font.getSize();
    var shiftLines = armyc2.c2sd.JavaLineArray.Channels.getShiftLines();
    var usas = false;
    var foundSegment = false;
    var csFactor = 1;
    var dist = 0;
    var dist2 = 0;
    var midPt = null;
    //ok to here
    var isChange1Area = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(tg.get_LineType(), null);
    if (isChange1Area) {
      switch (nCode) {
        case 200101:
        case 200201:
        case 240804:
          break;
        default:
          return;
      }
    }

    var clipRect = null;
    var clipArray = null;
    if (clipBounds !== null && clipBounds instanceof java.util.ArrayList) {
      clipArray = clipBounds;
    }
    if (clipBounds !== null && clipBounds instanceof armyc2.c2sd.graphics2d.Rectangle2D) {
      clipRect = clipBounds;
    }
    if (clipBounds !== null && clipBounds instanceof armyc2.c2sd.graphics2d.Rectangle) {
      clipRect = clipBounds;
    }
    //ok to here
    var metrics = g2d.getFontMetrics();
    var stringWidth = 0;
    var stringWidth2 = 0;
    var dash = "";
    if (tg.get_DTG() !== null && tg.get_DTG1() !== null && tg.get_DTG().isEmpty() === false && tg.get_DTG1().isEmpty() === false)
      dash = " - ";
    if (tg.get_Client().equals("cpof3d"))
      csFactor = 0.9;
    var factor = 1;
    var linetype = tg.get_LineType();
    var j = 0;
    var k = 0;
    var x = 0;
    var y = 0;
    if (nCode === 110101) {
      var s = tg.get_Name() + " " + "(" + country + ")";
      tg.set_Name(s);
      tg.set_T1(s);
      armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiersGeo(tg, g2d, clipBounds, converter);
      return;
    }
    if (tg.get_Font() !== null && tg.get_Font().getSize() > 0) {
      factor = 10 / tg.get_Font().getSize();
    } else
      return;
    var lastIndex = tg.Pixels.size() - 1;
    var nextToLastIndex = tg.Pixels.size() - 2;
    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var pt1 = null;
    var pt2 = null;
    var pt3 = null;
    var ptLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(lastIndex));
    var ptNextToLast = null;
    if (lastIndex > 0)
      ptNextToLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(lastIndex - 1));
    if (tg.Pixels.size() > 1)
      pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(1));
    armyc2.c2sd.JavaTacticalRenderer.Modifier2.shiftModifierPath(tg, pt0, pt1, ptLast, ptNextToLast);
    //var label = armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetCenterLabel(tg);
    var pts = tg.Pixels.toArray();
    //var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble2(pts, pts.length);
    var ptCenter = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_center(tg.LatLongs);
    if (ptCenter === null)
      ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble2(pts, pts.length);
    else {
      var pt = converter.GeoToPixels(new armyc2.c2sd.graphics2d.Point2D(ptCenter.x, ptCenter.y));
      ptCenter.x = pt.x;
      ptCenter.y = pt.y;
    }

    var middleSegment = Math.floor((tg.Pixels.size() + 1) / 2) - 1;
    if (clipRect !== null)
      middleSegment = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getVisibleMiddleSegment(tg, clipRect);
    else if (clipArray !== null)
      middleSegment = armyc2.c2sd.JavaTacticalRenderer.Modifier2.getVisibleMiddleSegment2(tg, clipArray);
    var affiliation = tg.get_Affiliation();
    if (tg.Pixels.size() > 2) {
      pt2 = tg.Pixels.get(2);
    }
    if (tg.Pixels.size() > 3) {
      pt3 = tg.Pixels.get(3);
    }
    var TLineFactor = 0;
    var T1LineFactor = 0;
    var lr = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var ll = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var ul = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var ur = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(0));
    var index = 0;
    var nextIndex = 0;
    var size = tg.Pixels.size();
    //switch adds the new modifiers or calls the old function if the modifiers did not change
    switch (nCode) {
      case 200401:
        ptUr = new armyc2.c2sd.JavaLineArray.POINT2();
        ptUl = new armyc2.c2sd.JavaLineArray.POINT2();
        ptLl = new armyc2.c2sd.JavaLineArray.POINT2();
        ptLr = new armyc2.c2sd.JavaLineArray.POINT2();
        Modifier2.GetMBR(tg, ptUl, ptUr, ptLr, ptLl);
        label = Modifier2.getRevDLabel(nCode);
        Modifier2.AddIntegralAreaModifier(tg, label, aboveMiddle, csFactor, ptLl, ptLr, false);
        break;
        //            case 110101:    //lateral boundary
        //            case 110102:    //fwd boundary
        //            case 110103:    //rear boundary
        //                t += " " + "(" + country + ")";
        //                tg.set_Name(t);
        //                tg.set_T1(t);
        //                Modifier2.AddModifiersGeo(tg, g2d, clipBounds, converter);
        //                break;
      case 110200: //LL
      case 141000: //LD
      case 141100: //LDLC
      case 141200: //PLD
      case 141400: //BL
      case 141500: //HOLD
      case 141600: //release
        Modifier2.AddIntegralAreaModifier(tg, label, aboveEnd, -csFactor, pt0, pt1, false);
        Modifier2.AddIntegralAreaModifier(tg, label, aboveEnd, -csFactor, ptLast, ptNextToLast, false);
        break;
      case 120400:
        ptUr = new armyc2.c2sd.JavaLineArray.POINT2();
        ptUl = new armyc2.c2sd.JavaLineArray.POINT2();
        ptLl = new armyc2.c2sd.JavaLineArray.POINT2();
        ptLr = new armyc2.c2sd.JavaLineArray.POINT2();
        Modifier2.GetMBR(tg, ptUl, ptUr, ptLr, ptLl);
        stringWidth = metrics.stringWidth(tg.get_H());
        pt0.x = ptUr.x + stringWidth / 2 + 1;
        //pt0.y = (ptUr.y + ptLr.y) / 2 - metrics.getFont().getSize();
        pt0.y = (ptUr.y + ptLr.y) / 2 - stringHeight;
        Modifier2.AddIntegralAreaModifier(tg, tg.get_H(), area, csFactor, pt0, pt0, false);
        break;
      case 200101:
      case 200201:
        label = Modifier2.getRevDLabel(nCode);
        Modifier2.AddIntegralAreaModifier(tg, label + " - " + tg.get_Name(), area, 0, ptCenter, ptCenter, false);
        break;
      case 140700:
      case 140900:
      case 190100:
      case 190200:
        label = Modifier2.getRevDLabel(nCode);
        Modifier2.AddIntegralAreaModifier(tg, label, aboveEnd, -csFactor, pt0, pt1, false);
        Modifier2.AddIntegralAreaModifier(tg, label, aboveEnd, -csFactor, ptLast, ptNextToLast, false);
        break;
      case 140103:
      case 140104:
        Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), toEnd, -1 * csFactor, pt0, pt1, false);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), toEnd, -1 * csFactor, ptLast, ptNextToLast, false);
        break;
      case 200402:
      case 140101: //flot has no labels
      case 140102:
      case 150101:
      case 150102:
        //case 151801:
      case 151900:
      case 152000:
      case 152100:
      case 152200:
      case 141700:
        break;
      case 140400: //feba has labels at end
      case 140401:
        label = Modifier2.getRevDLabel(nCode);
        Modifier2.AddIntegralAreaModifier(tg, label, toEnd, 0, pt0, pt1, false);
        Modifier2.AddIntegralAreaModifier(tg, label, toEnd, 0, ptLast, ptNextToLast, false);
        break;
      case 150103:
      case 150104:
        //case 151802:
        Modifier2.areasWithENY(tg, g2d);
        break;
      case 150501:
      case 150502:
      case 150503:
        Modifier2.areasWithENY(tg, g2d);
        label = Modifier2.getRevDLabel(nCode);
        Modifier2.AddIntegralAreaModifier(tg, label + " " + tg.get_Name(), area, 0, ptCenter, ptCenter, false);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), aboveMiddle, csFactor, ptCenter, ptCenter, false);
        break;
      case 151000: //fort now has T modifier
        Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), area, 0, ptCenter, ptCenter, false);
        break;
      case 151401: //airaoa
      case 151402: //rotary
        if (tg.Pixels.size() === 3) //one segment
        {
          midPt = lineutility.MidPointDouble(pt0, pt1, 0);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), aboveMiddle, 0, midPt, midPt, false);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), aboveMiddle, csFactor, midPt, midPt, false);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), aboveMiddle, 2 * csFactor, midPt, midPt, false);
        } else if (tg.Pixels.size() === 4) //2 segments
        {
          midPt = lineutility.MidPointDouble(pt1, pt2, 0);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), aboveMiddle, 0, midPt, midPt, false);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), aboveMiddle, csFactor, midPt, midPt, false);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), aboveMiddle, 2 * csFactor, midPt, midPt, false);
        } else // 3 or more segments
        {
          midPt = lineutility.MidPointDouble(pt1, pt2, 0);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), aboveMiddle, -csFactor / 2, midPt, midPt, false);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), aboveMiddle, csFactor / 2, midPt, midPt, false);
          midPt = lineutility.MidPointDouble(pt2, pt3, 0);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), aboveMiddle, -csFactor / 2, midPt, midPt, false);
        }
        break;
      case 151403: //main
      case 151404: //spt
      case 151405:
      case 151406:
      case 151407:
      case 151408:
        if (tg.Pixels.size() === 3) //one segment
        {
          midPt = lineutility.MidPointDouble(pt0, pt1, 0);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), aboveMiddle, 0, midPt, midPt, false);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), aboveMiddle, csFactor, midPt, midPt, false);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), aboveMiddle, 2 * csFactor, midPt, midPt, false);
        } else //2 or more segments
        {
          midPt = lineutility.MidPointDouble(pt0, pt1, 0);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), aboveMiddle, -csFactor / 2, midPt, midPt, false);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), aboveMiddle, csFactor / 2, midPt, midPt, false);
          midPt = lineutility.MidPointDouble(pt1, pt2, 0);
          Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), aboveMiddle, -csFactor / 2, midPt, midPt, false);
        }
        break;
      case 140601: //diratkair
      case 140602:
      case 140603:
      case 140604:
      case 140605:
        midPt = lineutility.MidPointDouble(pt0, pt1, 0);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), aboveMiddle, -csFactor / 2, pt0, midPt, false);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), aboveMiddle, csFactor / 2, pt0, pt1, false);
        break;
      case 140606:
      case 140607:
        midPt = lineutility.MidPointDouble(pt0, pt1, 0);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_N(), aboveMiddle, -csFactor / 2, pt1, midPt, false);
        break;
      case 170800: //bdz
        label = Modifier2.getRevDLabel(nCode);
        Modifier2.AddIntegralAreaModifier(tg, label, aboveMiddle, -csFactor / 2, ptCenter, ptCenter, false);
        break;
      case 151500: //assault pos
        label = Modifier2.getRevDLabel(nCode);
        Modifier2.AddIntegralAreaModifier(tg, label + " " + tg.get_Name(), aboveMiddle, 0, ptCenter, ptCenter, false);
        break;
      case 151600: //atk pos
      case 151700: //obj
        Modifier2.AddIntegralAreaModifier(tg, label + " " + tg.get_Name(), aboveMiddle, 0, ptCenter, ptCenter, false);
        break;
      case 141300:
        Modifier2.GetMBR(tg, ul, ur, lr, ll);
        Modifier2.AddIntegralAreaModifier(tg, label, aboveMiddle, 1.35 * factor * csFactor, ll, lr, false);
        break;
      case 170100:
      case 170101:
      case 170200:
      case 170300:
      case 170500:
      case 170700:
        Modifier2.AddIntegralModifier(tg, label + " " + tg.get_Name(), aboveMiddle, 0, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "Max Alt: " + tg.get_H1(), aboveMiddle, -4 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "Min Alt: " + tg.get_H(), aboveMiddle, -5 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "Width: " + tg.get_H2(), aboveMiddle, -6 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "Name: " + tg.get_Name(), aboveMiddle, -7 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "DTG Start: " + tg.get_DTG(), aboveMiddle, -3 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "DTG End: " + tg.get_DTG1(), aboveMiddle, -2 * csFactor, middleSegment, middleSegment + 1, false);
        break;
      case 170400:
      case 170600:
        label = Modifier2.getRevDLabel(nCode);
        Modifier2.AddIntegralModifier(tg, label + " " + tg.get_Name(), aboveMiddle, 0, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "Max Alt: " + tg.get_H1(), aboveMiddle, -4 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "Min Alt: " + tg.get_H(), aboveMiddle, -5 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "Width: " + tg.get_H2(), aboveMiddle, -6 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "Name: " + tg.get_Name(), aboveMiddle, -7 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "DTG Start: " + tg.get_DTG(), aboveMiddle, -3 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, "DTG End: " + tg.get_DTG1(), aboveMiddle, -2 * csFactor, middleSegment, middleSegment + 1, false);
        break;
      case 171100:
      case 171200:
      case 171300:
      case 171400:
      case 171500:
      case 171900:
        label = Modifier2.getRevDLabel(nCode);
        Modifier2.AddIntegralAreaModifier(tg, label, area, -2.5, ptCenter, ptCenter, false, "");
        Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), area, -1.5, ptCenter, ptCenter, false, "T");
        Modifier2.AddIntegralAreaModifier(tg, "MIN ALT: " + tg.get_H(), area, -0.5, ptCenter, ptCenter, false, "H");
        Modifier2.AddIntegralAreaModifier(tg, "MAX ALT: " + tg.get_H1(), area, 0.5, ptCenter, ptCenter, false, "H1");
        Modifier2.AddIntegralAreaModifier(tg, "TIME FROM: " + tg.get_DTG(), area, 1.5, ptCenter, ptCenter, false, "W");
        Modifier2.AddIntegralAreaModifier(tg, "TIME TO: " + tg.get_DTG1(), area, 2.5, ptCenter, ptCenter, false, "W1");
        break;
      case 200300:
        label = getRevDLabel(nCode);
        Modifier2.AddIntegralAreaModifier(tg, label, aboveMiddle, -1, pt0, pt0, false); //ENY or N?
        Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), aboveMiddle, csFactor, pt0, pt0, false);
        break;
      case 220107:
      case 220108:
        label = Modifier2.getRevDLabel(nCode);
        Modifier2.AddIntegralAreaModifier(tg, label, aboveMiddle, 0, pt0, pt1, false); //ENY or N?
        break;
      case 240101:
        Modifier2.AddIntegralAreaModifier(tg, label, area, -3 * csFactor, ptCenter, ptCenter, false);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), area, -2 * csFactor, ptCenter, ptCenter, false);
        Modifier2.AddIntegralAreaModifier(tg, "MIN ALT: " + tg.get_H(), area, -1 * csFactor, ptCenter, ptCenter, false, "H");
        Modifier2.AddIntegralAreaModifier(tg, "MAX ALT: " + tg.get_H1(), area, 0, ptCenter, ptCenter, false, "H1");
        Modifier2.AddIntegralAreaModifier(tg, tg.get_Location(), area, 1 * csFactor, ptCenter, ptCenter, false, "H2");
        Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), area, 2 * csFactor, ptCenter, ptCenter, false, "W");
        Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), area, 3 * csFactor, ptCenter, ptCenter, false, "W1");
        break;
      case 300100: //icl
        label = Modifier2.getRevDLabel(nCode);
        pt0 = tg.Pixels.get(0);
        pt1 = tg.Pixels.get(1);
        pt2 = tg.Pixels.get(tg.Pixels.size() - 1);
        pt3 = tg.Pixels.get(tg.Pixels.size() - 2);
        dist = lineutility.CalcDistanceDouble(pt0, pt1);
        dist2 = lineutility.CalcDistanceDouble(pt2, pt3);
        stringWidth = (metrics.stringWidth(tg.get_Name() + " " + label));
        stringWidth2 = (metrics.stringWidth(tg.get_DTG()));
        if (stringWidth2 > stringWidth) {
          stringWidth = stringWidth2;
        }

        if (tg.Pixels.size() === 2) //one segment
        {
          pt1 = lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
          Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), aboveMiddle, -0.7 * csFactor, pt0, pt1, false);
          Modifier2.AddModifier2(tg, tg.get_DTG(), aboveMiddle, 0.7 * csFactor, pt0, pt1, false);
          Modifier2.AddModifier2(tg, tg.get_DTG1(), aboveMiddle, 1.7 * csFactor, pt0, pt1, false);
          if (dist > 3.5 * stringWidth) //was 28stringwidth+5
          {
            pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
            pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
            pt1 = lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
            Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), aboveMiddle, -0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG(), aboveMiddle, 0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG1(), aboveMiddle, 1.7 * csFactor, pt0, pt1, false);
          }
        } else //more than one semgent
        {
          var dist3 = lineutility.CalcDistanceDouble(pt0, pt2);
          if (dist > stringWidth + 5 || dist >= dist2 || dist3 > stringWidth + 5) {
            pt1 = lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
            Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), aboveMiddle, -0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG(), aboveMiddle, 0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG1(), aboveMiddle, 1.7 * csFactor, pt0, pt1, false);
          }
          if (dist2 > stringWidth + 5 || dist2 > dist || dist3 > stringWidth + 5) {
            pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
            pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
            pt1 = lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
            Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), aboveMiddle, -0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG(), aboveMiddle, 0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG1(), aboveMiddle, 1.7 * csFactor, pt0, pt1, false);
          }
        }
        break;
      case 260300: //nfl handle like fscl
      case 260400:
        label = Modifier2.getRevDLabel(nCode);
        pt0 = tg.Pixels.get(0);
        pt1 = tg.Pixels.get(1);
        pt2 = tg.Pixels.get(tg.Pixels.size() - 1);
        pt3 = tg.Pixels.get(tg.Pixels.size() - 2);
        dist = lineutility.CalcDistanceDouble(pt0, pt1);
        dist2 = lineutility.CalcDistanceDouble(pt2, pt3);
        stringWidth = (metrics.stringWidth(tg.get_Name() + " " + label));
        stringWidth2 = (metrics.stringWidth(tg.get_DTG()));
        if (stringWidth2 > stringWidth) {
          stringWidth = stringWidth2;
        }

        if (tg.Pixels.size() == 2) //one segment
        {
          pt1 = lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
          Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), aboveMiddle, -0.7 * csFactor, pt0, pt1, false);
          Modifier2.AddModifier2(tg, tg.get_DTG(), aboveMiddle, 0.7 * csFactor, pt0, pt1, false);
          Modifier2.AddModifier2(tg, tg.get_DTG1(), aboveMiddle, 1.7 * csFactor, pt0, pt1, false);
          if (dist > 3.5 * stringWidth) //was 28stringwidth+5
          {
            pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
            pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
            pt1 = lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
            Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), aboveMiddle, -0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG(), aboveMiddle, 0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG1(), aboveMiddle, 1.7 * csFactor, pt0, pt1, false);
          }
        } else //more than one semgent
        {
          var dist3 = lineutility.CalcDistanceDouble(pt0, pt2);
          if (dist > stringWidth + 5 || dist >= dist2 || dist3 > stringWidth + 5) {
            pt1 = lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
            Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), aboveMiddle, -0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG(), aboveMiddle, 0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG1(), aboveMiddle, 1.7 * csFactor, pt0, pt1, false);
          }
          if (dist2 > stringWidth + 5 || dist2 > dist || dist3 > stringWidth + 5) {
            pt0 = tg.Pixels.get(tg.Pixels.size() - 1);
            pt1 = tg.Pixels.get(tg.Pixels.size() - 2);
            pt1 = lineutility.ExtendAlongLineDouble(pt0, pt1, stringWidth);
            Modifier2.AddModifier2(tg, label + " " + tg.get_Name(), aboveMiddle, -0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG(), aboveMiddle, 0.7 * csFactor, pt0, pt1, false);
            Modifier2.AddModifier2(tg, tg.get_DTG1(), aboveMiddle, 1.7 * csFactor, pt0, pt1, false);
          }
        }
        break;
      case 260600: //mfp
        pt0 = tg.Pixels.get(middleSegment);
        pt1 = tg.Pixels.get(middleSegment + 1);
        Modifier2.AddIntegralModifier(tg, label, aboveMiddle, 0, middleSegment, middleSegment + 1, true);
        Modifier2.AddIntegralModifier(tg, tg.get_DTG(), aboveEnd, 1 * csFactor, 0, 1, false);
        Modifier2.AddIntegralModifier(tg, tg.get_DTG1(), aboveEnd, 2 * csFactor, 0, 1, false);
        break;
      case 240701: //lintgt
        Modifier2.AddIntegralModifier(tg, ap, aboveMiddle, -0.8 * csFactor, middleSegment, middleSegment + 1, false);
        break;
      case 240702: //smoke
        Modifier2.AddIntegralModifier(tg, ap, aboveMiddle, -0.8 * csFactor, middleSegment, middleSegment + 1, false);
        Modifier2.AddIntegralModifier(tg, label, aboveMiddle, 0.8 * csFactor, middleSegment, middleSegment + 1, false);
        break;
      case 240703:
        Modifier2.AddIntegralModifier(tg, ap, aboveMiddle, -1 * csFactor, 0, 1, false);
        Modifier2.AddIntegralModifier(tg, label, aboveMiddle, 1 * csFactor, 0, 1, false);
        Modifier2.AddIntegralModifier(tg, tg.get_T1(), aboveMiddle, 2 * csFactor, 0, 1, false);
        Modifier2.AddIntegralModifier(tg, v, aboveMiddle, 3 * csFactor, 0, 1, false);
        break;
      case 240801:
        Modifier2.AddIntegralAreaModifier(tg, ap, area, 0, ptCenter, ptCenter, false);
        break;
      case 240802:
      case 240803:
        Modifier2.AddIntegralAreaModifier(tg, ap, area, 0, pt0, pt0, false);
        break;
      case 240804:
        Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), area, 0, ptCenter, ptCenter, false);
        break;
      case 240806: //smoke
      case 240807:
        Modifier2.AddIntegralAreaModifier(tg, ap, area, -csFactor, ptCenter, ptCenter, false);
        Modifier2.AddIntegralAreaModifier(tg, label, area, 0, ptCenter, ptCenter, false);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), area, 1 * csFactor, ptCenter, ptCenter, false, "W+W1");
        break;
      case 242301: //kill boxes irregular
      case 242304:
        Modifier2.AddIntegralAreaModifier(tg, label, area, 0, ptCenter, ptCenter, false);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_Name(), area, 1 * csFactor, ptCenter, ptCenter, false);
        Modifier2.GetMBR(tg, ul, ur, lr, ll);
        var ptLeft = ul;
        var ptRight = ur;
        if (tg.get_Client().equalsIgnoreCase("ge")) {
          ptLeft.x -= font.getSize() / 2;
          ptRight.x -= font.getSize() / 2;
        }
        Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), toEnd, 0.5 * csFactor, ptLeft, ptRight, false, "W");
        Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG1(), toEnd, 1.5 * csFactor, ptLeft, ptRight, false, "W1");
        break;
      case 242302: //kill box rect, circ have W,W1 outside use AddModifiers2RevD
      case 242303:
      case 242305:
      case 242306:
      case 140500: //pdf has no label
        break;
      case 290100: //zone
        Modifier2.AddIntegralModifier(tg, tg.get_Name(), aboveMiddle, csFactor, middleSegment, middleSegment + 1, false);
        break;
      case 290600: //lane new W-W1 use addModifiers2RevD
        break;
      case 270800: //mined
        Modifier2.GetMBR(tg, ul, ur, lr, ll);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_H(), aboveMiddle, -1.5 * factor * csFactor, ul, ur, false);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG(), aboveMiddle, 1.5 * factor * csFactor, ll, lr, false);
        Modifier2.areasWithENY(tg, g2d);
        break;
      case 271300: //ASLTXING uses W-W1 like gap
        if (tg.Pixels.get(1).y > tg.Pixels.get(0).y) {
          pt0 = tg.Pixels.get(1);
          pt1 = tg.Pixels.get(3);
          pt2 = tg.Pixels.get(0);
          pt3 = tg.Pixels.get(2);
        } else {
          pt0 = tg.Pixels.get(0);
          pt1 = tg.Pixels.get(2);
          pt2 = tg.Pixels.get(1);
          pt3 = tg.Pixels.get(3);
        }
        pt2 = lineutility.ExtendAlongLineDouble2(pt0, pt2, -20);
        pt3 = lineutility.ExtendAlongLineDouble2(pt1, pt3, -20);
        Modifier2.AddIntegralAreaModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), aboveMiddle, 0, pt2, pt3, false);
        break;
      case 330100: //convoys
      case 330200:
        var convoyBlankString = Modifier2.blankString(metrics, 35);
        Modifier2.AddIntegralModifier(tg, v + convoyBlankString + tg.get_H(), aboveMiddle, 0, 0, 1, false);
        Modifier2.AddIntegralModifier(tg, tg.get_DTG() + dash + tg.get_DTG1(), aboveMiddle, 1.2 * csFactor, 0, 1, false);
        break;
      default:
        Modifier2.AddModifiersGeo(tg, g2d, clipBounds, converter);
        break;
    }
  } catch (exc) {
    if (Clazz.instanceOf(exc)) {
      armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.Modifier2._className, "AddModifier", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddModifiersGeo2", exc));
    } else {
      throw exc;
    }
  }
};
armyc2.c2sd.JavaTacticalRenderer.Modifier2._className = "Modifier2";
armyc2.c2sd.JavaTacticalRenderer.Modifier2.toEnd = 1;
armyc2.c2sd.JavaTacticalRenderer.Modifier2.aboveMiddle = 2;
armyc2.c2sd.JavaTacticalRenderer.Modifier2.area = 3;
armyc2.c2sd.JavaTacticalRenderer.Modifier2.screen = 4;
armyc2.c2sd.JavaTacticalRenderer.Modifier2.aboveEnd = 5;
armyc2.c2sd.JavaTacticalRenderer.Modifier2.aboveMiddlePerpendicular = 6;
armyc2.c2sd.JavaTacticalRenderer.Modifier2.fillAlphaCanObscureText = 50;
