var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray = armyc2.c2sd.JavaLineArray || {};
armyc2.c2sd.JavaLineArray.CELineArray =
        {
            CGetChannel2Double: function(lpsaUpperVBPoints, lpsaLowerVBPoints, resultVBPoints, vblUpperCounter, vblLowerCounter, vbiDrawThis, vblChannelWidth, usePtr, shapes, rev) {
                var lResult = -1;
                try {
                    lResult = armyc2.c2sd.JavaLineArray.Channels.GetChannel1Double(lpsaUpperVBPoints, lpsaLowerVBPoints, resultVBPoints, vblUpperCounter, vblLowerCounter, vbiDrawThis, vblChannelWidth, usePtr, shapes, rev);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.CELineArray._className, "CGetChannel2Double", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CGetChannel2Double " + Integer.toString(vbiDrawThis), exc));
                    } else {
                        throw exc;
                    }
                }
                return lResult;
            },
            CGetLineCountDouble: function(plArrayOfLongs, lElements, lineType, ChannelWidth, rev) {
                var lResult = 0;
                try {
                    var lPtrcntr = 0;
                    var lLowerFlotCount = 0;
                    var lUpperFlotCount = 0;
                    var pLinePoints = new Array(lElements);
                    var pLowerLinePoints = new Array(lElements);
                    var pUpperLinePoints = new Array(lElements);
                    var pUpperLowerLinePoints = new Array(2 * lElements + 2);
                    var i = 0;
                    if (lElements <= 0) {
                        return -1;
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pLinePoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pUpperLinePoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pLowerLinePoints);
                    for (i = 0; i < lElements; i++) {
                        pLinePoints[i].x = plArrayOfLongs[lPtrcntr];
                        lPtrcntr++;
                        pLinePoints[i].y = plArrayOfLongs[lPtrcntr];
                        lPtrcntr++;
                    }
                    for (i = 0; i < lElements; i++) {
                        pLowerLinePoints[i] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[i]);
                        pUpperLinePoints[i] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[i]);
                    }
                    switch (lineType) {
                        case 231113001:
                        case 231113002:
                        case 231113003:
                            lResult = 2 * lElements;
                            break;
                        case 22521100:
                        case 22521410:
                        case 22521411:
                        case 22320000:
                        case 22320001:
                        case 22521200:
                        case 22521420:
                        case 22521421:
                            lResult = 2 * lElements + 8;
                            break;
                        case 21700000:
                            lResult = 2 * lElements + 8;
                            break;
                        case 21710000:
                            lResult = 2 * lElements + 17;
                            break;
                        case 22521300:
                            lResult = 2 * lElements + 19;
                            break;
                        case 22123000:
                            pUpperLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetChannelArray2Double(1, pUpperLinePoints, 1, lElements, lineType, ChannelWidth);
                            pLowerLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetChannelArray2Double(1, pLowerLinePoints, 0, lElements, lineType, ChannelWidth);
                            lUpperFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotCountDouble(pUpperLinePoints, lElements);
                            lLowerFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotCountDouble(pLowerLinePoints, lElements);
                            lResult = lUpperFlotCount + lLowerFlotCount;
                            break;
                        default:
                            lResult = armyc2.c2sd.JavaLineArray.countsupport.GetCountersDouble(lineType, lElements, pLinePoints, null, rev);
                            break;
                    }
                    pLinePoints = null;
                    pLowerLinePoints = null;
                    pUpperLinePoints = null;
                    pUpperLowerLinePoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.CELineArray._className, "CGetLineCountDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CGetLineCount " + Integer.toString(lineType), exc));
                    } else {
                        throw exc;
                    }
                }
                return (lResult);
            },
            CGetLinetypeFromString: function(strLine, rev) {
                try {
                    var str1;
                    var str2;
                    var str3;
                    var str4;
                    var str5;
                    var str6;
                    var str7;
                    var str10;
                    var c0 = strLine.substring(0, 1);
                    var c1 = strLine.substring(1, 2);
                    var c2 = strLine.substring(2, 3);
                    str1 = strLine.substring(4, 5);
                    str2 = strLine.substring(4, 6);
                    str3 = strLine.substring(4, 7);
                    str4 = strLine.substring(4, 8);
                    str5 = strLine.substring(4, 9);
                    str6 = strLine.substring(3, 9);
                    str7 = strLine.substring(3, 10);
                    str10 = strLine.substring(3, 13);
                    if (strLine.equalsIgnoreCase("BS_LINE--------"))
                        return 10000000;
                    if (strLine.equalsIgnoreCase("BS_AREA--------"))
                        return 11000000;
                    if (strLine.equalsIgnoreCase("BS_CROSS-------"))
                        return 12000000;
                    if (strLine.equalsIgnoreCase("BS_ELLIPSE-----"))
                        return 13000000;
                    if (strLine.equalsIgnoreCase("PBS_ELLIPSE----"))
                        return 13000001;
                    if (strLine.equalsIgnoreCase("BS_RECTANGLE---"))
                        return 14000000;
                    if (strLine.equalsIgnoreCase("PBS_RECTANGLE--"))
                        return 14000001;
                    if (strLine.equalsIgnoreCase("BBS_LINE-------"))
                        return 15000000;
                    if (strLine.equalsIgnoreCase("BBS_AREA-------"))
                        return 15000001;
                    if (strLine.equalsIgnoreCase("BBS_POINT------"))
                        return 15000002;
                    if (strLine.equalsIgnoreCase("BBS_RECTANGLE--"))
                        return 15000003;
                    if (strLine.equalsIgnoreCase("BS_BBOX--------"))
                        return 15000004;
                    if (c0.equals("W") && c1.equals("A")) {
                        if (str7.equals("DPXSQ--")) {
                            return 31143000;
                        }
                        if (str7.equals("DPFC---")) {
                            return 31131000;
                        }
                        if (str7.equals("DPFC-FG")) {
                            return 31131200;
                        }
                        if (str7.equals("DPFC-FY")) {
                            return 31131300;
                        }
                        if (str7.equals("DPFW-FG")) {
                            return 31132200;
                        }
                        if (str7.equals("DPFW-FY")) {
                            return 31132300;
                        }
                        if (str7.equals("DPFOU--")) {
                            return 31133100;
                        }
                        if (str7.equals("DPFO-FY")) {
                            return 31133200;
                        }
                        if (str7.equals("DPFSU--")) {
                            return 31134100;
                        }
                        if (str7.equals("DPFS-FG")) {
                            return 31134200;
                        }
                        if (str7.equals("DPFS-FY")) {
                            return 31134300;
                        }
                        if (str7.equals("DPXIL--")) {
                            return 31144000;
                        }
                        if (str7.equals("DPXSH--")) {
                            return 31145000;
                        }
                        if (str7.equals("DPXITCZ")) {
                            return 31146000;
                        }
                        if (str7.equals("DPXCV--")) {
                            return 31147000;
                        }
                        if (str7.equals("DPXITD-")) {
                            return 31148000;
                        }
                        if (str7.equals("DWJ----")) {
                            return 31430000;
                        }
                        if (str7.equals("DWS----")) {
                            return 31440000;
                        }
                        if (str7.equals("DBAIF--")) {
                            return 31710000;
                        }
                        if (str7.equals("DBAMV--")) {
                            return 31720000;
                        }
                        if (str7.equals("DBATB--")) {
                            return 31730000;
                        }
                        if (str7.equals("DBAI---")) {
                            return 31740000;
                        }
                        if (str7.equals("DBALPNC")) {
                            return 31750000;
                        }
                        if (str7.equals("DBALPC-")) {
                            return 31751000;
                        }
                        if (str7.equals("DBAFP--")) {
                            return 31760000;
                        }
                        if (str7.equals("DBAT---")) {
                            return 31770000;
                        }
                        if (str7.equals("DBAFG--")) {
                            return 31780000;
                        }
                        if (str7.equals("DBAD---")) {
                            return 31790000;
                        }
                        if (str7.equals("DBAFF--")) {
                            return 317100000;
                        }
                        if (str7.equals("DIPIB--")) {
                            return 31810000;
                        }
                        if (str7.equals("DIPCO--")) {
                            return 31820000;
                        }
                        if (str7.equals("DIPIS--")) {
                            return 31830000;
                        }
                        if (str7.equals("DIPIT--")) {
                            return 31840000;
                        }
                        if (str7.equals("DIPID--")) {
                            return 31850000;
                        }
                        if (str7.equals("DIPTH--")) {
                            return 31860000;
                        }
                        if (str7.equals("DIPFF--")) {
                            return 31870000;
                        }
                        if (str3.equals("PXR")) {
                            return 31142000;
                        }
                        if (str3.equals("PXT")) {
                            return 31141000;
                        }
                        if (str4.equals("PFCU")) {
                            return 31131100;
                        }
                        if (str3.equals("PFO")) {
                            return 31133000;
                        }
                        if (str3.equals("PFS")) {
                            return 31134000;
                        }
                        if (str4.equals("PFWU")) {
                            return 31132100;
                        }
                        if (str3.equals("PFW")) {
                            return 31132000;
                        }
                        if (str3.equals("PFC")) {
                            return 31131000;
                        }
                    }
                    if (c0.equals("W") && c1.equals("O")) {
                        if (str10.equals("DHCF----L-")) {
                            return 32225100;
                        }
                        if (str10.equals("DHCF-----A")) {
                            return 32225200;
                        }
                        if (str10.equals("DHPBA---L-")) {
                            return 32231400;
                        }
                        if (str10.equals("DHPBA----A")) {
                            return 32231500;
                        }
                        if (str10.equals("DHPMO---L-")) {
                            return 32233400;
                        }
                        if (str10.equals("DHPMO----A")) {
                            return 32233500;
                        }
                    }
                    if (c0.equals("W") && c1.equals("O")) {
                        if (str7.equals("DIDID--")) {
                            return 32134000;
                        }
                        if (str7.equals("DILOV--")) {
                            return 32151000;
                        }
                        if (str7.equals("DILUC--")) {
                            return 32152000;
                        }
                        if (str7.equals("DILOR--")) {
                            return 32153000;
                        }
                        if (str7.equals("DILIEO-")) {
                            return 32154000;
                        }
                        if (str7.equals("DILIEE-")) {
                            return 32155000;
                        }
                        if (str7.equals("DILIER-")) {
                            return 32156000;
                        }
                        if (str7.equals("DIOC---")) {
                            return 32161000;
                        }
                        if (str7.equals("DIOCS--")) {
                            return 32162000;
                        }
                        if (str7.equals("DIOL---")) {
                            return 32163000;
                        }
                        if (str7.equals("DIOLF--")) {
                            return 32164000;
                        }
                        if (str7.equals("DHDDL--")) {
                            return 32212000;
                        }
                        if (str7.equals("DHDDC--")) {
                            return 32213000;
                        }
                        if (str7.equals("DHDDA--")) {
                            return 32214000;
                        }
                        if (str7.equals("DHCC---")) {
                            return 32221000;
                        }
                        if (str7.equals("DHCI---")) {
                            return 32222000;
                        }
                        if (str7.equals("DHCB---")) {
                            return 32223000;
                        }
                        if (str7.equals("DHCW---")) {
                            return 32224000;
                        }
                        if (str7.equals("DHPBP--")) {
                            return 32231700;
                        }
                        if (str7.equals("-HPFF--")) {
                            return 32232400;
                        }
                        if (str7.equals("-HHDR--")) {
                            return 322510000;
                        }
                        if (str7.equals("DHPMD--")) {
                            return 32233100;
                        }
                        if (str7.equals("DHPMRA-")) {
                            return 32233600;
                        }
                        if (str7.equals("DHPMRB-")) {
                            return 32233700;
                        }
                        if (str7.equals("DHPSPA-")) {
                            return 32234100;
                        }
                        if (str7.equals("DHPSPB-")) {
                            return 32234200;
                        }
                        if (str7.equals("DHPSPS-")) {
                            return 32234300;
                        }
                        if (str7.equals("DHABP--")) {
                            return 32244200;
                        }
                        if (str7.equals("DHALLA-")) {
                            return 32246000;
                        }
                        if (str7.equals("DHHD---")) {
                            return 32253000;
                        }
                        if (str7.equals("DHHDF--")) {
                            return 32254200;
                        }
                        if (str7.equals("DHHDK--")) {
                            return 32255200;
                        }
                        if (str7.equals("DHHDB--")) {
                            return 32259000;
                        }
                        if (str7.equals("DHHDD--")) {
                            return 322512000;
                        }
                        if (str7.equals("DTCCCFE")) {
                            return 32272000;
                        }
                        if (str7.equals("DTCCCFF")) {
                            return 32273000;
                        }
                        if (str7.equals("DL-RA--")) {
                            return 32530000;
                        }
                        if (str7.equals("DMPA---")) {
                            return 32680000;
                        }
                        if (str7.equals("DL-TA--")) {
                            return 32550000;
                        }
                        if (str7.equals("DOBVA--")) {
                            return 32311000;
                        }
                        if (str7.equals("DOBVB--")) {
                            return 32312000;
                        }
                        if (str7.equals("DOBVC--")) {
                            return 32313000;
                        }
                        if (str7.equals("DOBVD--")) {
                            return 32314000;
                        }
                        if (str7.equals("DOBVE--")) {
                            return 32315000;
                        }
                        if (str7.equals("DOBVF--")) {
                            return 32316000;
                        }
                        if (str7.equals("DOBVG--")) {
                            return 32317000;
                        }
                        if (str7.equals("DOBVH--")) {
                            return 32318000;
                        }
                        if (str7.equals("DOBVI--")) {
                            return 32319000;
                        }
                        if (str7.equals("DBSF---")) {
                            return 32321000;
                        }
                        if (str7.equals("DBSG---")) {
                            return 32322000;
                        }
                        if (str7.equals("DBSM---")) {
                            return 32323000;
                        }
                        if (str7.equals("DBST---")) {
                            return 32324000;
                        }
                        if (str7.equals("DGMSR--")) {
                            return 32411100;
                        }
                        if (str7.equals("DGMSC--")) {
                            return 32411200;
                        }
                        if (str7.equals("DGMSSVS")) {
                            return 32411300;
                        }
                        if (str7.equals("DGMSSC-")) {
                            return 32411400;
                        }
                        if (str7.equals("DGMSSM-")) {
                            return 32411500;
                        }
                        if (str7.equals("DGMSSF-")) {
                            return 32411600;
                        }
                        if (str7.equals("DGMSSVF")) {
                            return 32411700;
                        }
                        if (str7.equals("DGMSIVF")) {
                            return 32411800;
                        }
                        if (str7.equals("DGMSIF-")) {
                            return 32411900;
                        }
                        if (str7.equals("DGMSIM-")) {
                            return 324111000;
                        }
                        if (str7.equals("DGMSIC-")) {
                            return 324111100;
                        }
                        if (str7.equals("DGMSB--")) {
                            return 324111200;
                        }
                        if (str7.equals("DGMS-CO")) {
                            return 324111300;
                        }
                        if (str7.equals("DGMS-PH")) {
                            return 324111400;
                        }
                        if (str7.equals("DGMS-SH")) {
                            return 324111500;
                        }
                        if (str7.equals("DGML---")) {
                            return 324111600;
                        }
                        if (str7.equals("DGMN---")) {
                            return 324111700;
                        }
                        if (str7.equals("DGMRS--")) {
                            return 32412100;
                        }
                        if (str7.equals("DGMRM--")) {
                            return 32412200;
                        }
                        if (str7.equals("DGMRR--")) {
                            return 32412300;
                        }
                        if (str7.equals("DGMCL--")) {
                            return 32413100;
                        }
                        if (str7.equals("DGMCM--")) {
                            return 32413200;
                        }
                        if (str7.equals("DGMCH--")) {
                            return 32413300;
                        }
                        if (str7.equals("DGMIBA-")) {
                            return 32414100;
                        }
                        if (str7.equals("DGMIBB-")) {
                            return 32414200;
                        }
                        if (str7.equals("DGMIBC-")) {
                            return 32414300;
                        }
                        if (str7.equals("DGMIBD-")) {
                            return 32414400;
                        }
                        if (str7.equals("DGMIBE-")) {
                            return 32414500;
                        }
                        if (str7.equals("DGMBCA-")) {
                            return 32415100;
                        }
                        if (str7.equals("DGMBCB-")) {
                            return 32415200;
                        }
                        if (str7.equals("DGMBCC-")) {
                            return 32415300;
                        }
                        if (str7.equals("DGMBTA-")) {
                            return 32416100;
                        }
                        if (str7.equals("DGMBTB-")) {
                            return 32416200;
                        }
                        if (str7.equals("DGMBTC-")) {
                            return 32416300;
                        }
                        if (str7.equals("DGMBTD-")) {
                            return 32416400;
                        }
                        if (str7.equals("DGMBTE-")) {
                            return 32416500;
                        }
                        if (str7.equals("DGMBTF-")) {
                            return 32416600;
                        }
                        if (str7.equals("DGMBTG-")) {
                            return 32416700;
                        }
                        if (str7.equals("DGMBTH-")) {
                            return 32416800;
                        }
                        if (str7.equals("DGMBTI-")) {
                            return 32416900;
                        }
                        if (str7.equals("DL-SA--")) {
                            return 32540000;
                        }
                        if (str7.equals("DMOA---")) {
                            return 32670000;
                        }
                        if (str7.equals("DMCC---")) {
                            return 32620000;
                        }
                        if (str7.equals("DMCA---")) {
                            return 32610000;
                        }
                        if (str7.equals("DL-ML--")) {
                            return 32510000;
                        }
                        if (str7.equals("DL-MA--")) {
                            return 32520000;
                        }
                        if (str7.equals("DMCD---")) {
                            return 32630000;
                        }
                        if (str7.equals("DL-O---")) {
                            return 32560000;
                        }
                    }
                    if (str5.equals("OLAGS") && c0.equals("G") && c2.equals("G")) {
                        return 22521420;
                    }
                    if (str5.equals("OLAGM") && c0.equals("G") && c2.equals("G")) {
                        return 22521410;
                    }
                    if (str5.equals("OLKGM") && c0.equals("G") && c2.equals("G")) {
                        return 22522210;
                    }
                    if (str5.equals("OLKGS") && c0.equals("G") && c2.equals("G")) {
                        return 22522220;
                    }
                    if (str4.equals("OLAA") && c0.equals("G") && c2.equals("G")) {
                        return 22521200;
                    }
                    if (str4.equals("OLAR") && c0.equals("G") && c2.equals("G")) {
                        return 22521300;
                    }
                    if (str4.equals("OLKA") && c0.equals("G") && c2.equals("G")) {
                        return 22522100;
                    }
                    if (str4.equals("OLAV") && c0.equals("G") && c2.equals("G")) {
                        return 22521100;
                    }
                    if (str4.equals("OADU") && c0.equals("G") && c2.equals("M")) {
                        return 23131100;
                    }
                    if (str4.equals("OADC") && c0.equals("G") && c2.equals("M")) {
                        return 23131200;
                    }
                    if (str4.equals("AAML") && c0.equals("G") && c2.equals("G")) {
                        return 22234100;
                    }
                    if (str4.equals("AAMH") && c0.equals("G") && c2.equals("G")) {
                        return 22234200;
                    }
                    if (str4.equals("DABP") && c0.equals("G") && c2.equals("G")) {
                        return 22431100;
                    }
                    if (str4.equals("OWCT") && c0.equals("G") && c2.equals("M")) {
                        return 231117300;
                    }
                    if (str4.equals("OWCD") && c0.equals("G") && c2.equals("M")) {
                        return 231117200;
                    }
                    if (str4.equals("OWCS") && c0.equals("G") && c2.equals("M")) {
                        return 231117100;
                    }
                    if (str4.equals("ACPR") && c0.equals("G") && c2.equals("F")) {
                        return 24326101;
                    }
                    if (str4.equals("ACSI") && c0.equals("G") && c2.equals("F")) {
                        return 24321100;
                    }
                    if (str4.equals("ACSR") && c0.equals("G") && c2.equals("F")) {
                        return 24321200;
                    }
                    if (str4.equals("ACSC") && c0.equals("G") && c2.equals("F")) {
                        return 24321300;
                    }
                    if (str4.equals("ACAI") && c0.equals("G") && c2.equals("F")) {
                        return 24322100;
                    }
                    if (str4.equals("ACAR") && c0.equals("G") && c2.equals("F")) {
                        return 24322200;
                    }
                    if (str4.equals("ACAC") && c0.equals("G") && c2.equals("F")) {
                        return 24322300;
                    }
                    if (str4.equals("ACFI") && c0.equals("G") && c2.equals("F")) {
                        return 24323100;
                    }
                    if (str4.equals("ACFR") && c0.equals("G") && c2.equals("F")) {
                        return 24323200;
                    }
                    if (str4.equals("ACFC") && c0.equals("G") && c2.equals("F")) {
                        return 24323300;
                    }
                    if (str4.equals("ACNI") && c0.equals("G") && c2.equals("F")) {
                        return 24324100;
                    }
                    if (str4.equals("ACNR") && c0.equals("G") && c2.equals("F")) {
                        return 24324200;
                    }
                    if (str4.equals("ACNC") && c0.equals("G") && c2.equals("F")) {
                        return 24324300;
                    }
                    if (str4.equals("ACRI") && c0.equals("G") && c2.equals("F")) {
                        return 24325100;
                    }
                    if (str4.equals("ACRR") && c0.equals("G") && c2.equals("F")) {
                        return 24325200;
                    }
                    if (str4.equals("ACRC") && c0.equals("G") && c2.equals("F")) {
                        return 24325300;
                    }
                    if (str4.equals("ACPC") && c0.equals("G") && c2.equals("F")) {
                        return 24326200;
                    }
                    if (str4.equals("AZII") && c0.equals("G") && c2.equals("F")) {
                        return 24331100;
                    }
                    if (str4.equals("AZIR") && c0.equals("G") && c2.equals("F")) {
                        return 24331200;
                    }
                    if (str4.equals("AZIC") && c0.equals("G") && c2.equals("F")) {
                        return 24331300;
                    }
                    if (str4.equals("AZXI") && c0.equals("G") && c2.equals("F")) {
                        return 24332100;
                    }
                    if (str4.equals("AZXR") && c0.equals("G") && c2.equals("F")) {
                        return 24332200;
                    }
                    if (str4.equals("AZXC") && c0.equals("G") && c2.equals("F")) {
                        return 24332300;
                    }
                    if (str4.equals("AZSI") && c0.equals("G") && c2.equals("F")) {
                        return 24333100;
                    }
                    if (str4.equals("ACEI") && c0.equals("G") && c2.equals("F")) {
                        return 24333100;
                    }
                    if (str4.equals("AZSR") && c0.equals("G") && c2.equals("F")) {
                        return 24333200;
                    }
                    if (str4.equals("ACER") && c0.equals("G") && c2.equals("F")) {
                        return 24333200;
                    }
                    if (str4.equals("AZSC") && c0.equals("G") && c2.equals("F")) {
                        return 24333300;
                    }
                    if (str4.equals("ACEC") && c0.equals("G") && c2.equals("F")) {
                        return 24333300;
                    }
                    if (str4.equals("AZCI") && c0.equals("G") && c2.equals("F")) {
                        return 24334100;
                    }
                    if (str4.equals("AZCR") && c0.equals("G") && c2.equals("F")) {
                        return 24334200;
                    }
                    if (str4.equals("AZCC") && c0.equals("G") && c2.equals("F")) {
                        return 24334300;
                    }
                    if (str4.equals("AZDI") && c0.equals("G") && c2.equals("F")) {
                        return 24335100;
                    }
                    if (str4.equals("ACDI") && c0.equals("G") && c2.equals("F")) {
                        return 24335100;
                    }
                    if (str4.equals("AZDR") && c0.equals("G") && c2.equals("F")) {
                        return 24335200;
                    }
                    if (str4.equals("ACDR") && c0.equals("G") && c2.equals("F")) {
                        return 24335200;
                    }
                    if (str4.equals("AZDC") && c0.equals("G") && c2.equals("F")) {
                        return 24335300;
                    }
                    if (str4.equals("ACDC") && c0.equals("G") && c2.equals("F")) {
                        return 24335300;
                    }
                    if (str4.equals("ACFZ") && c0.equals("G") && c2.equals("F")) {
                        return 24336100;
                    }
                    if (str4.equals("AZFI") && c0.equals("G") && c2.equals("F")) {
                        return 24336100;
                    }
                    if (str4.equals("AZFR") && c0.equals("G") && c2.equals("F")) {
                        return 24336200;
                    }
                    if (str4.equals("AZFC") && c0.equals("G") && c2.equals("F")) {
                        return 24336300;
                    }
                    if (str4.equals("AZZI") && c0.equals("G") && c2.equals("F")) {
                        return 24337100;
                    }
                    if (str4.equals("AZOR") && c0.equals("G") && c2.equals("F")) {
                        return 24337100;
                    }
                    if (str4.equals("ACZI") && c0.equals("G") && c2.equals("F")) {
                        return 24337100;
                    }
                    if (str4.equals("AZZR") && c0.equals("G") && c2.equals("F")) {
                        return 24337200;
                    }
                    if (str4.equals("ACZR") && c0.equals("G") && c2.equals("F")) {
                        return 24337200;
                    }
                    if (str4.equals("AZZC") && c0.equals("G") && c2.equals("F")) {
                        return 24337300;
                    }
                    if (str4.equals("ACZC") && c0.equals("G") && c2.equals("F")) {
                        return 24337300;
                    }
                    if (str4.equals("AZBI") && c0.equals("G") && c2.equals("F")) {
                        return 24338100;
                    }
                    if (str4.equals("ATBA") && c0.equals("G") && c2.equals("F")) {
                        return 24338100;
                    }
                    if (str4.equals("ACBI") && c0.equals("G") && c2.equals("F")) {
                        return 24338100;
                    }
                    if (str4.equals("AZBR") && c0.equals("G") && c2.equals("F")) {
                        return 24338200;
                    }
                    if (str4.equals("ACBR") && c0.equals("G") && c2.equals("F")) {
                        return 24338200;
                    }
                    if (str4.equals("AZBC") && c0.equals("G") && c2.equals("F")) {
                        return 24338300;
                    }
                    if (str4.equals("ACBC") && c0.equals("G") && c2.equals("F")) {
                        return 24338300;
                    }
                    if (str4.equals("AZVI") && c0.equals("G") && c2.equals("F")) {
                        return 24339100;
                    }
                    if (str4.equals("ACVI") && c0.equals("G") && c2.equals("F")) {
                        return 24339100;
                    }
                    if (str4.equals("AZVR") && c0.equals("G") && c2.equals("F")) {
                        return 24339200;
                    }
                    if (str4.equals("ACVR") && c0.equals("G") && c2.equals("F")) {
                        return 24339200;
                    }
                    if (str4.equals("AZVC") && c0.equals("G") && c2.equals("F")) {
                        return 24339300;
                    }
                    if (str4.equals("ACVC") && c0.equals("G") && c2.equals("F")) {
                        return 24339300;
                    }
                    if (str4.equals("AKBI") && c0.equals("G") && c2.equals("F")) {
                        return 24351000;
                    }
                    if (str4.equals("AKBR") && c0.equals("G") && c2.equals("F")) {
                        return 24352000;
                    }
                    if (str4.equals("AKBC") && c0.equals("G") && c2.equals("F")) {
                        return 24353000;
                    }
                    if (str4.equals("AKPI") && c0.equals("G") && c2.equals("F")) {
                        return 24361000;
                    }
                    if (str4.equals("AKPR") && c0.equals("G") && c2.equals("F")) {
                        return 24362000;
                    }
                    if (str4.equals("AKPC") && c0.equals("G") && c2.equals("F")) {
                        return 24363000;
                    }
                    if (str3.equals("LCR") && c0.equals("G") && c2.equals("F")) {
                        return 24224000;
                    }
                    if (str3.equals("LCN") && c0.equals("G") && c2.equals("F")) {
                        return 24223000;
                    }
                    if (str3.equals("LCM") && c0.equals("G") && c2.equals("F")) {
                        return 24225000;
                    }
                    if (str3.equals("LCC") && c0.equals("G") && c2.equals("F")) {
                        return 24220000;
                    }
                    if (str3.equals("LCF") && c0.equals("G") && c2.equals("F")) {
                        return 24221000;
                    }
                    if (str3.equals("LTS") && c0.equals("G") && c2.equals("F")) {
                        return 24211000;
                    }
                    if (str3.equals("AXC") && c0.equals("G") && c2.equals("F")) {
                        return 243111000;
                    }
                    if (str3.equals("AXS") && c0.equals("G") && c2.equals("F")) {
                        return 243112000;
                    }
                    if (str3.equals("LTF") && c0.equals("G") && c2.equals("F")) {
                        return 24260000;
                    }
                    if (str3.equals("OWS") && c0.equals("G") && c2.equals("M")) {
                        return 231112000;
                    }
                    if (str3.equals("OWD") && c0.equals("G") && c2.equals("M")) {
                        return 231113000;
                    }
                    if (str3.equals("OWA") && c0.equals("G") && c2.equals("M")) {
                        return 231114000;
                    }
                    if (str3.equals("OWU") && c0.equals("G") && c2.equals("M")) {
                        return 231111000;
                    }
                    if (str3.equals("OWL") && c0.equals("G") && c2.equals("M")) {
                        return 231115000;
                    }
                    if (str3.equals("OWH") && c0.equals("G") && c2.equals("M")) {
                        return 231116000;
                    }
                    if (str3.equals("OAR") && c0.equals("G") && c2.equals("M")) {
                        return 23132000;
                    }
                    if (str3.equals("OGB") && c0.equals("G") && c2.equals("M")) {
                        return 23111000;
                    }
                    if (str3.equals("OAW") && c0.equals("G") && c2.equals("M")) {
                        return 23134000;
                    }
                    if (str3.equals("SLA") && c0.equals("G") && c2.equals("G")) {
                        return 22611000;
                    }
                    if (str3.equals("AAR") && c0.equals("G") && c2.equals("G")) {
                        return 22231000;
                    }
                    if (str3.equals("OLI") && c0.equals("G") && c2.equals("G")) {
                        return 22524000;
                    }
                    if (str3.equals("ORP") && c0.equals("G") && c2.equals("M")) {
                        return 23191000;
                    }
                    if (str3.equals("ORS") && c0.equals("G") && c2.equals("M")) {
                        return 23192000;
                    }
                    if (str3.equals("ORA") && c0.equals("G") && c2.equals("M")) {
                        return 23193000;
                    }
                    if (str3.equals("ORC") && c0.equals("G") && c2.equals("M")) {
                        return 23194000;
                    }
                    if (str3.equals("OLP") && c0.equals("G") && c2.equals("G")) {
                        return 22528000;
                    }
                    if (str3.equals("BDD") && c0.equals("G") && c2.equals("M")) {
                        return 23212000;
                    }
                    if (str3.equals("BDI") && c0.equals("G") && c2.equals("M")) {
                        return 23213000;
                    }
                    if (str3.equals("BDE") && c0.equals("G") && c2.equals("M")) {
                        return 23211000;
                    }
                    if (str3.equals("GLF") && c0.equals("G") && c2.equals("G")) {
                        return 22122000;
                    }
                    if (str3.equals("GLC") && c0.equals("G") && c2.equals("G")) {
                        return 22123000;
                    }
                    if (str3.equals("OLC") && c0.equals("G") && c2.equals("G")) {
                        return 22527000;
                    }
                    if (str3.equals("OGZ") && c0.equals("G") && c2.equals("M")) {
                        return 23113000;
                    }
                    if (str3.equals("SAE") && c0.equals("G") && c2.equals("G")) {
                        return 22624000;
                    }
                    if (str3.equals("DAB") && c0.equals("G") && c2.equals("G")) {
                        return 22431000;
                    }
                    if (str3.equals("GAA") && c0.equals("G") && c2.equals("G")) {
                        return 22132000;
                    }
                    if (str3.equals("SAT") && c0.equals("G") && c2.equals("G")) {
                        return 22626000;
                    }
                    if (str3.equals("ASB") && c0.equals("G") && c2.equals("S")) {
                        return 25351000;
                    }
                    if (str3.equals("ASD") && c0.equals("G") && c2.equals("S")) {
                        return 25352000;
                    }
                    if (str3.equals("GAE") && c0.equals("G") && c2.equals("G")) {
                        return 22133000;
                    }
                    if (str3.equals("SAN") && c0.equals("G") && c2.equals("G")) {
                        return 22625000;
                    }
                    if (str3.equals("GAF") && c0.equals("G") && c2.equals("G")) {
                        return 22134000;
                    }
                    if (str3.equals("OGR") && c0.equals("G") && c2.equals("M")) {
                        return 23115000;
                    }
                    if (str3.equals("OGF") && c0.equals("G") && c2.equals("M")) {
                        return 23114000;
                    }
                    if (str3.equals("GAP") && c0.equals("G") && c2.equals("G")) {
                        return 22138000;
                    }
                    if (str3.equals("GAL") && c0.equals("G") && c2.equals("G")) {
                        return 22137000;
                    }
                    if (str3.equals("GAD") && c0.equals("G") && c2.equals("G")) {
                        return 22135000;
                    }
                    if (str3.equals("AAF") && c0.equals("G") && c2.equals("G")) {
                        return 22232000;
                    }
                    if (str3.equals("AAM") && c0.equals("G") && c2.equals("G")) {
                        return 22234000;
                    }
                    if (str3.equals("AAW") && c0.equals("G") && c2.equals("G")) {
                        return 22235000;
                    }
                    if (str3.equals("DLF") && c0.equals("G") && c2.equals("G")) {
                        return 22421000;
                    }
                    if (str3.equals("ALS") && c0.equals("G") && c2.equals("G")) {
                        return 22223000;
                    }
                    if (str3.equals("ALL") && c0.equals("G") && c2.equals("G")) {
                        return 22225000;
                    }
                    if (str3.equals("ALC") && c0.equals("G") && c2.equals("G")) {
                        return 22221000;
                    }
                    if (str3.equals("ALM") && c0.equals("G") && c2.equals("G")) {
                        return 22222000;
                    }
                    if (str3.equals("ALU") && c0.equals("G") && c2.equals("G")) {
                        return 22224000;
                    }
                    if (str3.equals("BCF") && c0.equals("G") && c2.equals("M")) {
                        return 23223000;
                    }
                    if (str3.equals("BCB") && c0.equals("G") && c2.equals("M")) {
                        return 23222000;
                    }
                    if (str3.equals("BCA") && c0.equals("G") && c2.equals("M")) {
                        return 23221000;
                    }
                    if (str3.equals("OFG") && c0.equals("G") && c2.equals("M")) {
                        return 23163000;
                    }
                    if (str3.equals("OHO") && c0.equals("G") && c2.equals("M")) {
                        return 23200000;
                    }
                    if (str3.equals("BCE") && c0.equals("G") && c2.equals("M")) {
                        return 23224000;
                    }
                    if (str3.equals("BCL") && c0.equals("G") && c2.equals("M")) {
                        return 23226000;
                    }
                    if (str3.equals("BCR") && c0.equals("G") && c2.equals("M")) {
                        return 23227000;
                    }
                    if (str3.equals("OED") && c0.equals("G") && c2.equals("M")) {
                        return 23174000;
                    }
                    if (str3.equals("LRM") && c0.equals("G") && c2.equals("S")) {
                        return 25221000;
                    }
                    if (str3.equals("LRA") && c0.equals("G") && c2.equals("S")) {
                        return 25222000;
                    }
                    if (str3.equals("GLL") && c0.equals("G") && c2.equals("G")) {
                        return 22125000;
                    }
                    if (str3.equals("OLT") && c0.equals("G") && c2.equals("G")) {
                        return 22526000;
                    }
                    if (str3.equals("GLP") && c0.equals("G") && c2.equals("G")) {
                        return 22124000;
                    }
                    if (str3.equals("OLF") && c0.equals("G") && c2.equals("G")) {
                        return 22523000;
                    }
                    if (str3.equals("OLL") && c0.equals("G") && c2.equals("G")) {
                        return 22525000;
                    }
                    if (str3.equals("SLB") && c0.equals("G") && c2.equals("G")) {
                        return 22623000;
                    }
                    if (str3.equals("OEF") && c0.equals("G") && c2.equals("M")) {
                        return 23172000;
                    }
                    if (str3.equals("OEB") && c0.equals("G") && c2.equals("M")) {
                        return 23171000;
                    }
                    if (str3.equals("LRO") && c0.equals("G") && c2.equals("S")) {
                        return 25223000;
                    }
                    if (str3.equals("LRT") && c0.equals("G") && c2.equals("S")) {
                        return 25224000;
                    }
                    if (str3.equals("LRW") && c0.equals("G") && c2.equals("S")) {
                        return 25225000;
                    }
                    if (str3.equals("ASR") && c0.equals("G") && c2.equals("S")) {
                        return 25353000;
                    }
                    if (str3.equals("GLB") && c0.equals("G") && c2.equals("G")) {
                        return 22121000;
                    }
                    if (str3.equals("GAG") && c0.equals("G") && c2.equals("G")) {
                        return 22131000;
                    }
                    if (str3.equals("GAX") && c0.equals("G") && c2.equals("G")) {
                        return 22136000;
                    }
                    if (str3.equals("GAZ") && c0.equals("G") && c2.equals("G")) {
                        return 221311000;
                    }
                    if (str3.equals("AAH") && c0.equals("G") && c2.equals("G")) {
                        return 22233000;
                    }
                    if (str3.equals("DAE") && c0.equals("G") && c2.equals("G")) {
                        return 22432000;
                    }
                    if (str3.equals("OAA") && c0.equals("G") && c2.equals("G")) {
                        return 22531000;
                    }
                    if (str3.equals("OAK") && c0.equals("G") && c2.equals("G")) {
                        return 22532000;
                    }
                    if (str3.equals("OAO") && c0.equals("G") && c2.equals("G")) {
                        return 22535000;
                    }
                    if (str3.equals("SAO") && c0.equals("G") && c2.equals("G")) {
                        return 22621000;
                    }
                    if (str3.equals("SAA") && c0.equals("G") && c2.equals("G")) {
                        return 22622000;
                    }
                    if (str3.equals("OAP") && c0.equals("G") && c2.equals("G")) {
                        return 22536000;
                    }
                    if (str3.equals("SLH") && c0.equals("G") && c2.equals("G")) {
                        return 22612000;
                    }
                    if (str3.equals("SLR") && c0.equals("G") && c2.equals("G")) {
                        return 22613000;
                    }
                    if (str3.equals("OFD") && c0.equals("G") && c2.equals("M")) {
                        return 23162000;
                    }
                    if (str3.equals("OFA") && c0.equals("G") && c2.equals("M")) {
                        return 23164000;
                    }
                    if (str3.equals("GAS") && c0.equals("G") && c2.equals("G")) {
                        return 22139000;
                    }
                    if (str3.equals("GAY") && c0.equals("G") && c2.equals("G")) {
                        return 221310000;
                    }
                    if (str3.equals("DLP") && c0.equals("G") && c2.equals("G")) {
                        return 22422000;
                    }
                    if (str3.equals("OAF") && c0.equals("G") && c2.equals("G")) {
                        return 22533000;
                    }
                    if (str3.equals("OAS") && c0.equals("G") && c2.equals("G")) {
                        return 22534000;
                    }
                    if (str3.equals("OMC") && c0.equals("G") && c2.equals("M")) {
                        return 23157000;
                    }
                    if (str3.equals("OET") && c0.equals("G") && c2.equals("M")) {
                        return 23173000;
                    }
                    if (str3.equals("LCM") && c0.equals("G") && c2.equals("S")) {
                        return 25211000;
                    }
                    if (str3.equals("LCH") && c0.equals("G") && c2.equals("S")) {
                        return 25212000;
                    }
                    if (str3.equals("OGL") && c0.equals("G") && c2.equals("M")) {
                        return 23112000;
                    }
                    if (str3.equals("BCD") && c0.equals("G") && c2.equals("M")) {
                        return 23225000;
                    }
                    if (str3.equals("DPT") && c0.equals("G") && c2.equals("G")) {
                        return 22411000;
                    }
                    if (str3.equals("ATR") && c0.equals("G") && c2.equals("F")) {
                        return 24311000;
                    }
                    if (str3.equals("ATC") && c0.equals("G") && c2.equals("F")) {
                        return 24312000;
                    }
                    if (str3.equals("ATG") && c0.equals("G") && c2.equals("F")) {
                        return 24313000;
                    }
                    if (str3.equals("ATS") && c0.equals("G") && c2.equals("F")) {
                        return 24314000;
                    }
                    if (str3.equals("ATB") && c0.equals("G") && c2.equals("F")) {
                        return 24315000;
                    }
                    if (str3.equals("ACT") && c0.equals("G") && c2.equals("F")) {
                        return 24226000;
                    }
                    if (str2.equals("OT") && c0.equals("G") && c2.equals("M")) {
                        return 231100000;
                    }
                    if (str2.equals("OS") && c0.equals("G") && c2.equals("M")) {
                        return 23120000;
                    }
                    if (str2.equals("OU") && c0.equals("G") && c2.equals("M")) {
                        return 23180000;
                    }
                    if (str2.equals("AD") && c0.equals("G") && c2.equals("S")) {
                        return 25310000;
                    }
                    if (str2.equals("AE") && c0.equals("G") && c2.equals("S")) {
                        return 25320000;
                    }
                    if (str2.equals("AH") && c0.equals("G") && c2.equals("S")) {
                        return 25340000;
                    }
                    if (str2.equals("NL") && c0.equals("G") && c2.equals("M")) {
                        return 23490000;
                    }
                    if (str2.equals("NR") && c0.equals("G") && c2.equals("M")) {
                        return 23440000;
                    }
                    if (str2.equals("NC") && c0.equals("G") && c2.equals("M")) {
                        return 23460000;
                    }
                    if (str2.equals("NB") && c0.equals("G") && c2.equals("M")) {
                        return 23450000;
                    }
                    if (str2.equals("AF") && c0.equals("G") && c2.equals("F")) {
                        return 24323100;
                    }
                    if (str2.equals("AA") && c0.equals("G") && c2.equals("F")) {
                        return 24321100;
                    }
                    if (str2.equals("AR") && c0.equals("G") && c2.equals("F")) {
                        return 24325100;
                    }
                    if (str2.equals("AS") && c0.equals("G") && c2.equals("T")) {
                        return 211210000;
                    }
                    if (str2.equals("AR") && c0.equals("G") && c2.equals("S")) {
                        return 25330000;
                    }
                    if (str2.equals("PA") && c0.equals("G") && c2.equals("G")) {
                        return 22320000;
                    }
                    if (str2.equals("PF") && c0.equals("G") && c2.equals("G")) {
                        return 22330000;
                    }
                    if (str2.equals("SP") && c0.equals("G") && c2.equals("M")) {
                        return 23350000;
                    }
                    if (str2.equals("LT") && c0.equals("G") && c2.equals("F")) {
                        return 24250000;
                    }
                    if (str2.equals("SL") && c0.equals("G") && c2.equals("M")) {
                        return 23330000;
                    }
                    if (str2.equals("LP") && c0.equals("G") && c2.equals("F")) {
                        return 24260000;
                    }
                    if (str2.equals("AC") && c0.equals("G") && c2.equals("F")) {
                        return 24322100;
                    }
                    if (str2.equals("AT") && c0.equals("G") && c2.equals("F")) {
                        return 24330000;
                    }
                    if (str2.equals("AK") && c0.equals("G") && c2.equals("F")) {
                        return 24314000;
                    }
                    if (str2.equals("AS") && c0.equals("G") && c2.equals("F")) {
                        return 24313000;
                    }
                    if (str2.equals("AB") && c0.equals("G") && c2.equals("F")) {
                        return 24315000;
                    }
                    if (str2.equals("BE") && c0.equals("G") && c2.equals("O")) {
                        return 26410000;
                    }
                    if (str2.equals("BA") && c0.equals("G") && c2.equals("O")) {
                        return 26420000;
                    }
                    if (str2.equals("BT") && c0.equals("G") && c2.equals("O")) {
                        return 26430000;
                    }
                    if (str2.equals("BO") && c0.equals("G") && c2.equals("O")) {
                        return 26440000;
                    }
                    if (str2.equals("PC") && c0.equals("G") && c2.equals("G")) {
                        return 2237000;
                    }
                    if (str2.equals("PN") && c0.equals("G") && c2.equals("G")) {
                        return 22360000;
                    }
                    if (str2.equals("UC") && c0.equals("G") && c2.equals("T")) {
                        if (rev == 1)
                            return 212230001;
                        else
                            return 212230000;
                    }
                    if (str2.equals("US") && c0.equals("G") && c2.equals("T")) {
                        if (rev == 1)
                            return 212210001;
                        else
                            return 212210000;
                    }
                    if (str2.equals("UG") && c0.equals("G") && c2.equals("T")) {
                        if (rev == 1)
                            return 212220001;
                        else
                            return 212220000;
                    }
                    if (str2.equals("PM") && c0.equals("G") && c2.equals("G")) {
                        return 22340000;
                    }
                    if (str2.equals("PY") && c0.equals("G") && c2.equals("G")) {
                        return 22350000;
                    }
                    if (str2.equals("PD") && c0.equals("G") && c2.equals("G")) {
                        return 22310000;
                    }
                    if (str2.equals("SW") && c0.equals("G") && c2.equals("M")) {
                        return 23340000;
                    }
                    if (str2.equals("KF") && c0.equals("G") && c2.equals("T")) {
                        return 21710000;
                    }
                    if (str2.equals("NL") && c0.equals("G") && c2.equals("M")) {
                        return 23490000;
                    }
                    if (str2.equals("NM") && c0.equals("G") && c2.equals("M")) {
                        return 23410000;
                    }
                    if (str2.equals("WP") && c0.equals("G") && c2.equals("T")) {
                        return 212410000;
                    }
                    if (str2.equals("HN") && c0.equals("G") && c2.equals("O")) {
                        return 26220000;
                    }
                    if (str2.equals("SF") && c0.equals("G") && c2.equals("M")) {
                        return 23320000;
                    }
                    if (str1.equals("R") && c0.equals("G") && c2.equals("T")) {
                        return 211800000;
                    }
                    if (str1.equals("A") && c0.equals("G") && c2.equals("T")) {
                        return 211200000;
                    }
                    if (str1.equals("M") && c0.equals("G") && c2.equals("T")) {
                        return 212000000;
                    }
                    if (str1.equals("B") && c0.equals("G") && c2.equals("O")) {
                        return 26400000;
                    }
                    if (str1.equals("L") && c0.equals("G") && c2.equals("T")) {
                        return 21800000;
                    }
                    if (str1.equals("V") && c0.equals("G") && c2.equals("T")) {
                        return 212500000;
                    }
                    if (str1.equals("2") && c0.equals("G") && c2.equals("T")) {
                        return 212600000;
                    }
                    if (str1.equals("W") && c0.equals("G") && c2.equals("T")) {
                        return 212400000;
                    }
                    if (str1.equals("H") && c0.equals("G") && c2.equals("T")) {
                        return 21200000;
                    }
                    if (str1.equals("C") && c0.equals("G") && c2.equals("T")) {
                        return 21400000;
                    }
                    if (str1.equals("Y") && c0.equals("G") && c2.equals("T")) {
                        return 21300000;
                    }
                    if (str1.equals("B") && c0.equals("G") && c2.equals("T")) {
                        return 21100000;
                    }
                    if (str1.equals("T") && c0.equals("G") && c2.equals("T")) {
                        return 211000000;
                    }
                    if (str1.equals("Z") && c0.equals("G") && c2.equals("T")) {
                        if (rev == 1)
                            return 212300001;
                        else
                            return 212300000;
                    }
                    if (str1.equals("S") && c0.equals("G") && c2.equals("T")) {
                        return 212100000;
                    }
                    if (str1.equals("Q") && c0.equals("G") && c2.equals("T")) {
                        return 211900000;
                    }
                    if (str1.equals("P") && c0.equals("G") && c2.equals("T")) {
                        return 211700000;
                    }
                    if (str1.equals("E") && c0.equals("G") && c2.equals("T")) {
                        return 211400000;
                    }
                    if (str1.equals("X") && c0.equals("G") && c2.equals("T")) {
                        return 21500000;
                    }
                    if (str1.equals("J") && c0.equals("G") && c2.equals("T")) {
                        return 21600000;
                    }
                    if (str1.equals("O") && c0.equals("G") && c2.equals("T")) {
                        return 211600000;
                    }
                    if (str1.equals("F") && c0.equals("G") && c2.equals("T")) {
                        return 211100000;
                    }
                    if (str1.equals("K") && c0.equals("G") && c2.equals("T")) {
                        return 21700000;
                    }
                    if (str1.equals("D") && c0.equals("G") && c2.equals("T")) {
                        return 21900000;
                    }
                    if (str1.equals("I") && c0.equals("G") && c2.equals("T")) {
                        return 211300000;
                    }
                    if (str1.equals("N") && c0.equals("G") && c2.equals("T")) {
                        return 211500000;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.CELineArray._className, "CGetLinetypeFromString", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CGetLinetypeFromString " + strLine, exc));
                    } else {
                        throw exc;
                    }
                }
                return -1;
            },
            CIsChannel: function(lineType) {
                var lResult = 0;
                try {
                    switch (lineType) {
                        case 21700000:
                        case 21710000:
                        case 22123000:
                        case 22123001:
                        case 22320000:
                        case 22320001:
                        case 22521100:
                        case 22521200:
                        case 22521300:
                        case 22521410:
                        case 22521411:
                        case 22521420:
                        case 22521421:
                        case 231111000:
                        case 231112000:
                        case 231113000:
                        case 231114000:
                        case 231115000:
                        case 231116000:
                        case 231117100:
                        case 231117101:
                        case 231117200:
                        case 231117201:
                        case 231117300:
                        case 231117301:
                        case 231113001:
                        case 231113002:
                        case 231113003:
                        case 15000000:
                            lResult = 1;
                            break;
                        default:
                            lResult = 0;
                            break;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.CELineArray._className, "CIsChannel", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CIsChannel " + Integer.toString(lineType), exc));
                    } else {
                        throw exc;
                    }
                }
                return lResult;
            },
            setClient: function(value) {
                _client = value;
                armyc2.c2sd.JavaLineArray.Channels.setClient(value);
            },
            getClient: function() {
                return armyc2.c2sd.JavaLineArray.CELineArray._client;
            }
//            setMinLength: function(value) {
//                armyc2.c2sd.JavaLineArray.DISMSupport.setMinLength(value);
//                armyc2.c2sd.JavaLineArray.arraysupport.setMinLength(value);
//                armyc2.c2sd.JavaLineArray.countsupport.setMinLength(value);
//                return;
//            }
        };
armyc2.c2sd.JavaLineArray.CELineArray._className = "CELineArray";
armyc2.c2sd.JavaLineArray.CELineArray._client = "";