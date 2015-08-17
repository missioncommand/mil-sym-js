var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaTacticalRenderer = armyc2.c2sd.JavaTacticalRenderer || {};
armyc2.c2sd.JavaTacticalRenderer.clsMETOC = {
    IsWeather: function(symbolID) {
        try {
            //added section for revD
            if(symbolID.length>15)
            {
                var TacticalLines=new armyc2.c2sd.JavaLineArray.TacticalLines();
                var setA=symbolID.substring(0,10);
                var setB=symbolID.substring(10);
                var entityCode=setB.substring(0,6);
                var entityCode2=Integer.parseInt(entityCode);
                var nEntityCode=entityCode2.valueOf();
                var symbolSet=setA.substring(4,6);
                var symbolSet2=Integer.parseInt(symbolSet);
                var nSymbolSet=symbolSet2.valueOf();
                switch(nSymbolSet)
                {
                    case 25:    //look for holding line, bridgehead
                        if(nEntityCode===141400)
                            return TacticalLines.BRDGHD;
                        else if(nEntityCode===141500)
                            return TacticalLines.HOLD;
                        break;
                    case 45:
                    case 46:
                        return armyc2.c2sd.JavaTacticalRenderer.clsMETOC.getWeatherLinetype(symbolSet,entityCode);
                }
            }
            //end section
            if (symbolID === null)
                return -1;
            if (symbolID.length !== 15)
                return -1;

            var strLine = symbolID;
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
            if (str3.equals("SLH") && c0.equals("G") && c2.equals("G"))
                return 22612000;
            if (str3.equals("SLB") && c0.equals("G") && c2.equals("G"))
                return 22623000;
            if(c0.equalsIgnoreCase("W")===false)
                return -1;
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
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "isWeather", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside isWeather", exc));
            } else {
                throw exc;
            }
        }
        return -1;
    },
    SetMeTOCProperties: function(tg) {
        try {
            var symbolId=tg.get_SymbolId();
            switch (tg.get_LineType()) {
                case 31141000:
                    if(symbolId.length>=20)
                    {
                       var setB=symbolId.substring(10);
                       var entityCode=setB.substring(0,6);
                       if(entityCode.equalsIgnoreCase("110401"))
                       {
                           tg.set_LineStyle(2);
                       }
                    }
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                    break;
                case 32416200:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(127, 255, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(127, 255, 0));
                    break;
                case 32416800:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 80, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 80, 0));
                    break;
                case 32416900:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 48, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 48, 0));
                    break;
                case 32414100:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(0, 0, 255));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(0, 0, 255));
                    break;
                case 32416700:
                case 32414400:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 127, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 127, 0));
                    break;
                case 32415300:
                case 32414500:
                case 32413300:
                case 32412300:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 0, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 0, 0));
                    break;
                case 32416500:
                case 32415200:
                case 32414300:
                case 32413200:
                case 32412200:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 255, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 255, 0));
                    break;
                case 32416100:
                case 32415100:
                case 32414200:
                case 32413100:
                case 32412100:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(0, 255, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(0, 255, 0));
                    break;
                case 324111700:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(230, 230, 230));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(230, 230, 230));
                    break;
                case 324111600:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(220, 220, 220));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(220, 220, 220));
                    break;
                case 324111500:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 220, 220));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 220, 220));
                    break;
                case 324111400:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 190, 190));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 190, 190));
                    break;
                case 324111300:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 150, 150));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 150, 150));
                    break;
                case 324111200:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 0, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 0, 0));
                    break;
                case 324111100:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(200, 255, 105));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(200, 255, 105));
                    break;
                case 324111000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(0, 255, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(0, 255, 0));
                    break;
                case 32411900:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(25, 255, 230));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(25, 255, 230));
                    break;
                case 32411800:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(0, 215, 255));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(0, 215, 255));
                    break;
                case 32411700:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 255, 220));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 255, 220));
                    break;
                case 32411600:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 255, 140));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 255, 140));
                    break;
                case 32411500:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 235, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 235, 0));
                    break;
                case 32411400:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 215, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 215, 0));
                    break;
                case 32416600:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 207, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 207, 0));
                    break;
                case 32411300:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 180, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 180, 0));
                    break;
                case 32411200:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(100, 130, 255));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(100, 130, 255));
                    break;
                case 32411100:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(160, 32, 240));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(160, 32, 240));
                    break;
                case 32311000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(26, 153, 55));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(26, 153, 55));
                    break;
                case 32312000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(26, 204, 77));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(26, 204, 77));
                    break;
                case 32416300:
                case 32313000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(128, 255, 51));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(128, 255, 51));
                    break;
                case 32416400:
                case 32314000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(204, 255, 26));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(204, 255, 26));
                    break;
                case 32315000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 255, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 255, 0));
                    break;
                case 32316000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 204, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 204, 0));
                    break;
                case 32317000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 128, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 128, 0));
                    break;
                case 32318000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(255, 77, 0));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 77, 0));
                    break;
                case 32319000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                    tg.set_FillColor(armyc2.c2sd.renderer.utilities.Color.RED);
                    break;
                case 32630000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                    tg.set_LineThickness(4);
                    break;
                case 32560000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.ORANGE);
                    break;
                case 32510000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.MAGENTA);
                    tg.set_LineStyle(1);
                    tg.set_LineThickness(1);
                    break;
                case 32520000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.MAGENTA);
                    tg.set_LineStyle(1);
                    break;
                case 32244200:
                case 32620000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                    tg.set_LineStyle(2);
                    tg.set_FillColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                    break;
                case 322512000:
                case 32253000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                    tg.set_LineStyle(2);
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(0, 191, 255));
                    break;
                case 32233500:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(165, 42, 42));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(165, 42, 42));
                    break;
                case 32233400:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.GRAY);
                    tg.set_LineThickness(4);
                    break;
                case 32233100:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(165, 42, 42));
                    tg.set_LineStyle(1);
                    break;
                case 32225200:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(154, 205, 50));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(154, 205, 50));
                    break;
                case 32225100:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(154, 205, 50));
                    break;
                case 32530000:
                case 32550000:
                case 32231400:
                case 32231500:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.MAGENTA);
                    break;
                case 32680000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.GRAY);
                    tg.set_FillColor(armyc2.c2sd.renderer.utilities.Color.GRAY);
                    break;
                case 32224000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.GRAY);
                    tg.set_FillColor(armyc2.c2sd.renderer.utilities.Color.WHITE);
                    tg.set_LineStyle(1);
                    break;
                case 32232400:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(245, 245, 220));
                    tg.set_LineStyle(1);
                    tg.set_LineThickness(3);
                    break;
                case 32540000:
                case 32670000:
                case 32254200:
                case 32255200:
                case 32323000:
                case 32324000:
                //case 32223000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(245, 245, 220));
                    break;
                case 32223000:
                    tg.set_LineThickness(5);
                    //tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(245, 245, 220));
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(210, 180, 140));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255,245,238));
                    break;
                case 32214000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                    tg.set_FillColor(armyc2.c2sd.renderer.utilities.Color.WHITE);
                    break;
                case 31147000:
                case 31146000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.ORANGE);
                    break;
                case 31133200:
                case 31133000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(160, 32, 240));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(160, 32, 240));
                    break;
                case 31133100:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(160, 32, 240));
                    break;
                case 31132300:
                case 31132200:
                case 31132000:
                    tg.set_FillColor(armyc2.c2sd.renderer.utilities.Color.RED);
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                    break;
                case 31132100:
                case 31710000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                    break;
                case 31131200:
                case 31131300:
                case 31131000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                    tg.set_FillColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                    break;
                case 31131100:
                case 31720000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                    break;
                case 31730000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                    tg.set_LineStyle(2);
                    break;
                case 32610000:
                case 32610001:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.MAGENTA);
                    break;
                case 32222000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(165, 42, 42));
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(165, 42, 42));
                    break;
                case 32234300:
                case 32234301:
                case 32273000:
                case 32273001:
                case 32272000:
                case 32272001:
                case 32234100:
                case 32234101:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.GRAY);
                    break;
                case 32321000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(211, 211, 211));
                    tg.set_FillColor(null);
                    break;
                case 32322000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(111, 111, 111));
                    tg.set_FillColor(null);
                    break;
                case 32259000:
                    tg.set_LineStyle(1);
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.GRAY);
                    tg.set_LineThickness(1);
                    break;
                case 32234200:
                case 32234201:
                    tg.set_LineStyle(1);
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.GRAY);
                    break;
                case 32212000:
                case 32212001:
                case 32213000:
                case 32213001:
                case 32221000:
                case 32221001:
                case 32231700:
                case 32231701:
                    tg.set_LineThickness(1);
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.GRAY);
                    break;
                case 31760000:
                case 31430000:
                case 31430001:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                    break;
                case 31770000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                    tg.set_LineStyle(3);
                    break;
                case 32233700:
                case 32233701:
                case 32155000:
                case 32155001:
                    tg.set_LineStyle(1);
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                    break;
                case 31850000:
                case 31850001:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.GREEN);
                    break;
                case 32153000:
                case 32152000:
                case 32151000:
                case 31143000:
                case 31142000:
                //case 31141000:
                case 32163000:
                case 32163001:
                case 32164000:
                case 32164001:
                case 32246000:
                case 31440000:
                case 31440001:
                case 32161000:
                case 32161001:
                case 32162000:
                case 32162001:
                case 31810000:
                case 31810001:
                case 31820000:
                case 31820001:
                case 32154000:
                case 32154001:
                case 32156000:
                case 32156001:
                case 322510000:
                case 32134000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                    break;
                case 31144000:
                    tg.set_LineStyle(4);
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                    break;
                case 31145000:
                    tg.set_LineStyle(3);
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                    break;
                case 31860000:
                case 31860001:
                case 31830000:
                case 31830001:
                    tg.set_LineStyle(1);
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                    break;
                case 31840000:
                case 31840001:
                    tg.set_LineStyle(1);
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(160, 32, 240));
                    break;
                case 31790000:
                case 31740000:
                    tg.set_LineColor(new armyc2.c2sd.renderer.utilities.Color(165, 42, 42));
                    break;
                case 31750000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.GREEN);
                    break;
                case 31751000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.GREEN);
                    tg.set_LineStyle(3);
                    break;
                case 31780000:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.YELLOW);
                    break;
                case 32233600:
                case 32233601:
                    tg.set_LineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                    break;
                default:
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "SetMeTOCProperties", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside SetMeTOCProperties", exc));
            } else {
                throw exc;
            }
        }
    },
    ExtrapolatePointFromCurve: function(splinePoints, pt) {
        var pt2 = null;
        try {
            var dx = 0;
            var dy = 0;
            var m = 1;
            var y = 0;
            var x = pt.x;
            var j = 0;
            for (j = 0; j < splinePoints.size() - 1; j++) {
                if (splinePoints.get(j).x <= x && splinePoints.get(j + 1).x >= x) {
                    dx = splinePoints.get(j + 1).x - splinePoints.get(j).x;
                    dy = splinePoints.get(j + 1).y - splinePoints.get(j).y;
                    m = dy / dx;
                    y = splinePoints.get(j).y + (x - splinePoints.get(j).x) * m;
                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y);
                    return pt2;
                }
                if (splinePoints.get(j).x >= x && splinePoints.get(j + 1).x <= x) {
                    dx = splinePoints.get(j + 1).x - splinePoints.get(j).x;
                    dy = splinePoints.get(j + 1).y - splinePoints.get(j).y;
                    m = dy / dx;
                    y = splinePoints.get(j).y + (x - splinePoints.get(j).x) * m;
                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y);
                    return pt2;
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "ExtrapolatePointFromCurve", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtrapolatePointfromCurve", exc));
            } else {
                throw exc;
            }
        }
        return pt2;
    },
    GetMeTOCShape: function(tg, shapes, rev) {
        try {
            if (shapes === null)
                return;
            var lineObject = null;
            var lineObject2 = null;
            var splinePoints = new java.util.ArrayList();
            var splinePoints2 = new java.util.ArrayList();
            var d = 0;
            var j = 0;
            var k = 0;
            var l = 0;
            var shape = null;
            var ptLast = tg.Pixels.get(tg.Pixels.size() - 1);
            var twoSplines = null;
            var upperSpline = null;
            var lowerSpline = null;
            var originalPixels = null;
            var pixels = null;
            originalPixels = null;
            var partitions = null;
            armyc2.c2sd.JavaTacticalRenderer.clsMETOC.SetMeTOCProperties(tg);
            switch (tg.get_LineType()) {
                case 31134000:
                case 31134100:
                case 31134200:
                case 31134300:
                case 31132300:
                case 31132200:
                case 31132000:
                case 31132100:
                case 31131100:
                case 31131000:
                case 31131200:
                case 31131300:
                case 31133000:
                case 31133100:
                case 31133200:
                case 31141000:
                case 31144000:
                case 31145000:
                case 31142000:
                case 31143000:
                case 31146000:
                case 31147000:
                case 31148000:
                case 31710000:
                case 31720000:
                case 31730000:
                case 31740000:
                case 31750000:
                case 31751000:
                case 31760000:
                case 31770000:
                case 31780000:
                case 31790000:
                case 317100000:
                case 31870000:
                case 32151000:
                case 32152000:
                case 32153000:
                case 32214000:
                case 32222000:
                case 32223000:
                case 32224000:
                case 32232400:
                case 32540000:
                case 32670000:
                case 32254200:
                case 32255200:
                case 32323000:
                case 32324000:
                case 32231500:
                case 32231400:
                case 32680000:
                case 32550000:
                case 32530000:
                case 322510000:
                case 32134000:
                case 32225200:
                case 32225100:
                case 32233100:
                case 32233400:
                case 32233500:
                case 32244200:
                case 32253000:
                case 32259000:
                case 322512000:
                case 32321000:
                case 32322000:
                case 32510000:
                case 32520000:
                case 32560000:
                case 32620000:
                case 32630000:
                case 32311000:
                case 32312000:
                case 32313000:
                case 32314000:
                case 32315000:
                case 32316000:
                case 32317000:
                case 32318000:
                case 32319000:
                case 32411100:
                case 32411200:
                case 32411300:
                case 32411400:
                case 32411500:
                case 32411600:
                case 32411700:
                case 32411800:
                case 32411900:
                case 324111000:
                case 324111100:
                case 324111200:
                case 324111300:
                case 324111400:
                case 324111500:
                case 324111600:
                case 324111700:
                case 32412100:
                case 32412200:
                case 32412300:
                case 32413100:
                case 32413200:
                case 32413300:
                case 32414100:
                case 32414200:
                case 32414300:
                case 32414400:
                case 32414500:
                case 32415100:
                case 32415200:
                case 32415300:
                case 32416100:
                case 32416200:
                case 32416300:
                case 32416400:
                case 32416500:
                case 32416600:
                case 32416700:
                case 32416800:
                case 32416900:
                    armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2(tg.get_LineType(), tg.Pixels, shapes, null, rev);
                    break;
                case 31810000:
                case 31810001:
                case 31820000:
                case 31820001:
                case 31830000:
                case 31830001:
                case 31840000:
                case 31840001:
                case 31850000:
                case 31850001:
                case 31860000:
                case 31860001:
                case 32154000:
                case 32154001:
                case 32155000:
                case 32155001:
                case 32161000:
                case 32161001:
                case 32212000:
                case 32212001:
                case 32213000:
                case 32213001:
                case 32221000:
                case 32221001:
                case 32231700:
                case 32231701:
                case 32233600:
                case 32233601:
                case 32233700:
                case 32233701:
                case 32234100:
                case 32234101:
                case 32234200:
                case 32234201:
                case 32234300:
                case 32234301:
                case 32272000:
                case 32273000:
                case 32272001:
                case 32273001:
                case 32610000:
                case 32610001:
                case 31430000:
                case 31440000:
                case 31430001:
                case 31440001:
                    lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                    lineObject2.lineTo(ptLast.x, ptLast.y);
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    shape.setShape(lineObject2);
                    shapes.add(shape);
                    break;
                case 22612001:
                case 22623001:
                    if (tg.get_FillColor() !== null && tg.get_FillColor().getAlpha() > 1) {
                        lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                        lineObject2.lineTo(ptLast.x, ptLast.y);
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                        shape.setShape(lineObject2);
                        shapes.add(shape);
                        splinePoints.clear();
                    }
                    lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                    lineObject2.lineTo(ptLast.x, ptLast.y);
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    shape.setShape(lineObject2);
                    shapes.add(shape);
                    armyc2.c2sd.JavaTacticalRenderer.clsMETOC.SetShapeProperties(tg, shapes, null);
                    return;
                case 22612000:
                case 22623000:
                    lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    shape.setShape(lineObject2);
                    shapes.add(shape);
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    shape.setFillColor(tg.get_FillColor());
                    if (tg.get_FillColor() !== null && tg.get_FillColor().getAlpha() > 1) {
                        if (splinePoints !== null && splinePoints.size() > 0) {
                            shape.moveTo(splinePoints.get(0));
                            for (j = 1; j < splinePoints.size (); j++)
                                shape.lineTo(splinePoints.get(j));

                            shape.lineTo(tg.Pixels.get(tg.Pixels.size() - 1));
                            shapes.add(0, shape);
                        } else {
                            shape.moveTo(tg.Pixels.get(0));
                            for (j = 1; j < tg.Pixels.size (); j++)
                                shape.lineTo(tg.Pixels.get(j));

                            shape.lineTo(tg.Pixels.get(tg.Pixels.size() - 1));
                            shapes.add(0, shape);
                        }
                    }
                    break;
                case 32162000:
                case 32162001:
                case 32156000:
                case 32156001:
                    lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    shape.setShape(lineObject2);
                    shapes.add(shape);
                    break;
                case 32163000:
                    originalPixels = tg.Pixels;
                    partitions = armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.GetPartitions2(tg);
                    for (l = 0; l < partitions.size(); l++) {
                        tg.Pixels = originalPixels;
                        pixels = new java.util.ArrayList();
                        for (k = partitions.get (l).start; k <= partitions.get (l).end_Renamed + 1; k++)
                            pixels.add(tg.Pixels.get(k));

                        if (pixels === null || pixels.isEmpty())
                            continue;
                        twoSplines = new java.util.ArrayList();
                        twoSplines = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.ParallelLines2(pixels, rev);
                        upperSpline = new java.util.ArrayList();
                        lowerSpline = new java.util.ArrayList();
                        for (j = 0; j < Math.floor(twoSplines.size() / 2); j++) {
                            upperSpline.add(twoSplines.get(j));
                        }
                        for (j = Math.floor(twoSplines.size() / 2); j < twoSplines.size(); j++) {
                            lowerSpline.add(twoSplines.get(j));
                        }
                        tg.Pixels = lowerSpline;
                        lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject2);
                        shapes.add(shape);
                        tg.Pixels = upperSpline;
                        lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject2);
                        shapes.add(shape);
                    }
                    break;
                case 32163001:
                    originalPixels = tg.Pixels;
                    partitions = armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.GetPartitions2(tg);
                    for (l = 0; l < partitions.size(); l++) {
                        tg.Pixels = originalPixels;
                        pixels = new java.util.ArrayList();
                        for (k = partitions.get (l).start; k <= partitions.get (l).end_Renamed + 1; k++)
                            pixels.add(tg.Pixels.get(k));

                        if (pixels === null || pixels.isEmpty())
                            continue;
                        twoSplines = new java.util.ArrayList();
                        twoSplines = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.ParallelLines2(pixels, rev);
                        upperSpline = new java.util.ArrayList();
                        lowerSpline = new java.util.ArrayList();
                        for (j = 0; j < Math.floor(twoSplines.size() / 2); j++) {
                            upperSpline.add(twoSplines.get(j));
                        }
                        for (j = Math.floor(twoSplines.size() / 2); j < twoSplines.size(); j++) {
                            lowerSpline.add(twoSplines.get(j));
                        }
                        tg.Pixels = lowerSpline;
                        lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                        ptLast = tg.Pixels.get(tg.Pixels.size() - 1);
                        lineObject2.lineTo(ptLast.x, ptLast.y);
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject2);
                        shapes.add(shape);
                        tg.Pixels = upperSpline;
                        splinePoints = new java.util.ArrayList();
                        lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                        ptLast = tg.Pixels.get(tg.Pixels.size() - 1);
                        lineObject2.lineTo(ptLast.x, ptLast.y);
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject2);
                        shapes.add(shape);
                    }
                    break;
                case 32164000:
                    originalPixels = tg.Pixels;
                    partitions = armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.GetPartitions2(tg);
                    for (l = 0; l < partitions.size(); l++) {
                        tg.Pixels = originalPixels;
                        pixels = new java.util.ArrayList();
                        for (k = partitions.get (l).start; k <= partitions.get (l).end_Renamed + 1; k++)
                            pixels.add(tg.Pixels.get(k));

                        if (pixels === null || pixels.isEmpty())
                            continue;
                        twoSplines = new java.util.ArrayList();
                        twoSplines = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.ParallelLines2(pixels, rev);
                        upperSpline = new java.util.ArrayList();
                        lowerSpline = new java.util.ArrayList();
                        for (j = 0; j < Math.floor(twoSplines.size() / 2); j++) {
                            upperSpline.add(twoSplines.get(j));
                        }
                        for (j = Math.floor(twoSplines.size() / 2); j < twoSplines.size(); j++) {
                            lowerSpline.add(twoSplines.get(j));
                        }
                        tg.Pixels = lowerSpline;
                        lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject2);
                        shapes.add(shape);
                        tg.Pixels = upperSpline;
                        lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints2);
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject2);
                        shapes.add(shape);
                        var splinePointsArrays = new java.util.ArrayList();
                        var splinePoints2Arrays = new java.util.ArrayList();
                        var ptsArray = new java.util.ArrayList();
                        for (j = 0; j < splinePoints.size(); j++) {
                            if (splinePoints.get(j).style !== 47) {
                                ptsArray.add(splinePoints.get(j));
                            } else {
                                splinePointsArrays.add(ptsArray);
                                ptsArray = new java.util.ArrayList();
                            }
                        }
                        for (j = 0; j < splinePoints2.size(); j++) {
                            if (splinePoints2.get(j).style !== 47) {
                                ptsArray.add(splinePoints2.get(j));
                            } else {
                                splinePoints2Arrays.add(ptsArray);
                                ptsArray = new java.util.ArrayList();
                            }
                        }
                        var array = null;
                        var array2 = null;
                        var pt;
                        var pt2;
                        lineObject = new armyc2.c2sd.graphics2d.GeneralPath();
                        for (j = 0; j < splinePointsArrays.size(); j++) {
                            array = splinePointsArrays.get(j);
                            if (splinePoints2Arrays.size() > j)
                                array2 = splinePoints2Arrays.get(j);
                            else
                                break;
                            if (splinePointsArrays.size() >= splinePoints2Arrays.size()) {
                                for (k = 0; k < array.size(); k++) {
                                    if (array.size() > k)
                                        pt = array.get(k);
                                    else
                                        break;
                                    pt2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.ExtrapolatePointFromCurve(array2, pt);
                                    if (pt2 !== null) {
                                        lineObject.moveTo(pt.x, pt.y);
                                        lineObject.lineTo(pt2.x, pt2.y);
                                    }
                                }
                            } else {
                                for (k = 0; k < array2.size(); k++) {
                                    pt = array2.get(k);
                                    pt2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.ExtrapolatePointFromCurve(array, pt);
                                    if (pt2 !== null) {
                                        lineObject.moveTo(pt.x, pt.y);
                                        lineObject.lineTo(pt2.x, pt2.y);
                                    }
                                }
                            }
                        }
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject);
                        shapes.add(shape);
                    }
                    break;
                case 32164001:
                    originalPixels = tg.Pixels;
                    partitions = armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.GetPartitions2(tg);
                    for (l = 0; l < partitions.size(); l++) {
                        tg.Pixels = originalPixels;
                        pixels = new java.util.ArrayList();
                        for (k = partitions.get (l).start; k <= partitions.get (l).end_Renamed + 1; k++)
                            pixels.add(tg.Pixels.get(k));

                        if (pixels === null || pixels.isEmpty())
                            continue;
                        twoSplines = new java.util.ArrayList();
                        twoSplines = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.ParallelLines2(pixels, rev);
                        upperSpline = new java.util.ArrayList();
                        lowerSpline = new java.util.ArrayList();
                        for (j = 0; j < Math.floor(twoSplines.size() / 2); j++) {
                            upperSpline.add(twoSplines.get(j));
                        }
                        for (j = Math.floor(twoSplines.size() / 2); j < twoSplines.size(); j++) {
                            lowerSpline.add(twoSplines.get(j));
                        }
                        tg.Pixels = lowerSpline;
                        var splinePoints3 = new java.util.ArrayList();
                        lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints3);
                        splinePoints.addAll(splinePoints3);
                        ptLast = tg.Pixels.get(tg.Pixels.size() - 1);
                        lineObject2.lineTo(ptLast.x, ptLast.y);
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject2);
                        shapes.add(shape);
                        tg.Pixels = upperSpline;
                        var splinePoints4 = new java.util.ArrayList();
                        lineObject2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints4);
                        splinePoints2.addAll(splinePoints4);
                        ptLast = tg.Pixels.get(tg.Pixels.size() - 1);
                        lineObject2.lineTo(ptLast.x, ptLast.y);
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject2);
                        shapes.add(shape);
                        splinePointsArrays = new java.util.ArrayList();
                        splinePoints2Arrays = new java.util.ArrayList();
                        ptsArray = new java.util.ArrayList();
                        for (j = 0; j < splinePoints.size(); j++) {
                            if (splinePoints.get(j).style !== 47) {
                                ptsArray.add(splinePoints.get(j));
                            } else {
                                splinePointsArrays.add(ptsArray);
                                ptsArray = new java.util.ArrayList();
                            }
                        }
                        for (j = 0; j < splinePoints2.size(); j++) {
                            if (splinePoints2.get(j).style !== 47) {
                                ptsArray.add(splinePoints2.get(j));
                            } else {
                                splinePoints2Arrays.add(ptsArray);
                                ptsArray = new java.util.ArrayList();
                            }
                        }
                        array = null;
                        array2 = null;
                        pt = null;
                        pt2 = null;
                        lineObject = new armyc2.c2sd.graphics2d.GeneralPath();
                        for (j = 0; j < splinePointsArrays.size(); j++) {
                            array = splinePointsArrays.get(j);
                            if (splinePoints2Arrays.size() > j)
                                array2 = splinePoints2Arrays.get(j);
                            else
                                break;
                            if (splinePointsArrays.size() >= splinePoints2Arrays.size()) {
                                for (k = 0; k < array.size(); k++) {
                                    if (array.size() > k)
                                        pt = array.get(k);
                                    else
                                        break;
                                    pt2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.ExtrapolatePointFromCurve(array2, pt);
                                    if (pt2 !== null) {
                                        lineObject.moveTo(pt.x, pt.y);
                                        lineObject.lineTo(pt2.x, pt2.y);
                                    }
                                }
                            } else {
                                for (k = 0; k < array2.size(); k++) {
                                    pt = array2.get(k);
                                    pt2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.ExtrapolatePointFromCurve(array, pt);
                                    if (pt2 !== null) {
                                        lineObject.moveTo(pt.x, pt.y);
                                        lineObject.lineTo(pt2.x, pt2.y);
                                    }
                                }
                            }
                        }
                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject);
                        shapes.add(shape);
                    }
                    break;
                case 32246000:
                    lineObject = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawSplines(tg, splinePoints);
                    lineObject2 = new armyc2.c2sd.graphics2d.GeneralPath();
                    if (splinePoints.size() > 0)
                        lineObject2.moveTo(splinePoints.get(0).x, splinePoints.get(0).y);
                    else {
                        lineObject2.moveTo(tg.Pixels.get(0).x, tg.Pixels.get(0).y);
                        for (j = 0; j < tg.Pixels.size (); j++)
                            lineObject2.lineTo(tg.Pixels.get(j).x, tg.Pixels.get(j).y);

                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.setShape(lineObject2);
                        shape.set_Style(1);
                        shapes.add(shape);
                        return;
                    }
                    var n = Math.floor(splinePoints.size() / 2);
                    for (j = 1; j <= n; j++) {
                        if (splinePoints.size() >= j - 1)
                            lineObject2.lineTo(splinePoints.get(j).x, splinePoints.get(j).y);
                    }
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    shape.setShape(lineObject2);
                    shapes.add(shape);
                    lineObject2 = new armyc2.c2sd.graphics2d.GeneralPath();
                    lineObject2.moveTo(splinePoints.get(n).x, splinePoints.get(n).y);
                    for (j = n + 1; j < splinePoints.size(); j++) {
                        if (splinePoints.size() >= j - 1)
                            lineObject2.lineTo(splinePoints.get(j).x, splinePoints.get(j).y);
                    }
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    shape.setShape(lineObject2);
                    shape.set_Style(1);
                    shapes.add(shape);
                    break;
                default:
                    break;
            }
            if (tg.get_LineType() !== 32163000 && tg.get_LineType() !== 32163001 && tg.get_LineType() !== 32164000 && tg.get_LineType() !== 32164001 && tg.get_LineType() !== 32156000) {
                if (splinePoints !== null && splinePoints.size() > 0) {
                    lineObject2 = new armyc2.c2sd.graphics2d.GeneralPath();
                    lineObject2.moveTo(splinePoints.get(splinePoints.size() - 1).x, splinePoints.get(splinePoints.size() - 1).y);
                    lineObject2.lineTo(ptLast.x, ptLast.y);
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    shape.setShape(lineObject2);
                    shape.set_Style(0);
                    shapes.add(shape);
                }
            }
            armyc2.c2sd.JavaTacticalRenderer.clsMETOC.SetShapeProperties(tg, shapes, null);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "GetMeTOCShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetMeTOCShape", exc));
            } else {
                throw exc;
            }
        }
    },
    GetImageFile: function(tg) {
        var fileName = "";
        try {
            switch (tg.get_LineType()) {
                case 32232400:
                    fileName = "visualAssets/Weirs.png";
                    break;
                case 32540000:
                    fileName = "visualAssets/SweptArea.png";
                    break;
                case 32670000:
                    fileName = "visualAssets/OilRigField.png";
                    break;
                case 32254200:
                    fileName = "visualAssets/FoulGround.png";
                    break;
                case 32255200:
                    fileName = "visualAssets/Kelp.png";
                    break;
                case 32324000:
                    fileName = "visualAssets/BeachSlopeSteep.png";
                    break;
                case 32223000:
                    fileName = "visualAssets/BeigeStipple.png";
                    break;
                case 32323000:
                    fileName = "visualAssets/BeachSlopeModerate.png";
                    break;
                default:
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "GetImageFile", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetImageFile", exc));
            } else {
                throw exc;
            }
        }
        return fileName;
    },
    SetShapeProperties: function(tg, shapes, bi) {
        try {
            if (shapes === null) {
                return;
            }
            switch (tg.get_LineType()) {
                case 32214000:
                    return;
                default:
                    break;
            }
            var j = 0;
            var shape = null;
            var stroke = null;
            var inFile = null;
            var bi2 = null;
            var dash = null;
            var lineThickness = tg.get_LineThickness();
            var rect = null;
            var grid = null;
            var tp = tg.get_TexturePaint();
            var fileName = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.GetImageFile(tg);
            switch (tg.get_LineType()) {
                case 32232400:
                case 32540000:
                case 32670000:
                case 32254200:
                case 32255200:
                case 32323000:
                case 32324000:
                case 32223000:
                    shape = shapes.get(0);
                    shape.setLineColor(tg.get_LineColor());
                    /*if (inFile !== null) {
                        bi2 = armyc2.c2sd.graphics2d.ImageIO.read(inFile);
                        rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, bi2.getWidth(), bi2.getHeight());
                        tp = new armyc2.c2sd.graphics2d.TexturePaint(bi2, rect);
                        shape.setTexturePaint(tp);
                        inFile.close();
                    }//*/
                    var pattern = null;
                    if(tg.get_LineType() === 32323000)//beach slope moderate
                        pattern = armyc2.c2sd.renderer.utilities.RendererUtilities.getCanvasFillStylePattern("WO-DBSM-----A--");
                    else if(tg.get_LineType() === 32324000)//beach slope steep
                        pattern = armyc2.c2sd.renderer.utilities.RendererUtilities.getCanvasFillStylePattern("WO-DBST-----A--");
                    else if(tg.get_LineType() === 32223000)//beige stipple
                        pattern = armyc2.c2sd.renderer.utilities.RendererUtilities.getCanvasFillStylePattern("WO-DHCB-----A--");
                    else if(tg.get_LineType() === 32254200)//Foul Ground
                        pattern = armyc2.c2sd.renderer.utilities.RendererUtilities.getCanvasFillStylePattern("WO-DHHDF----A--");
                    else if(tg.get_LineType() === 32255200)//Kelp
                        pattern = armyc2.c2sd.renderer.utilities.RendererUtilities.getCanvasFillStylePattern("WO-DHHDK----A--");
                    else if(tg.get_LineType() === 32670000)//OIL/GAS RIG FIELD 32670000
                        pattern = armyc2.c2sd.renderer.utilities.RendererUtilities.getCanvasFillStylePattern("WO-DMOA-----A--");
                    else if(tg.get_LineType() === 32540000)//swept area 32540000
                        pattern = armyc2.c2sd.renderer.utilities.RendererUtilities.getCanvasFillStylePattern("WO-DL-SA----A--");
                    else if(tg.get_LineType() === 32232400)//Weirs 32232400
                        pattern = armyc2.c2sd.renderer.utilities.RendererUtilities.getCanvasFillStylePattern("WOS-HPFF----A--");
                    if(pattern !== null)
                    {
                        shape.setTexturePaint(pattern);
                    }       
                    break;
                case 31134000:
                case 31134100:
                case 31134200:
                case 31134300:
                    for (j = 0; j < shapes.size(); j++) {
                        shape = shapes.get(j);
                        if (shape === null || shape.getShape() === null) {
                            continue;
                        }
                        shape.set_Style(tg.get_LineStyle());
                        stroke = new armyc2.c2sd.graphics2d.BasicStroke(lineThickness, 1, 1, 1, dash, 0);
                        shape.setStroke(stroke);
                    }
                    return;
                default:
                    break;
            }
            var shapeType = -1;
            var lineType = tg.get_LineType();
            var isChange1Area = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(lineType, null);
            var isClosedPolygon = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(lineType);
            for (j = 0; j < shapes.size(); j++) {
                shape = shapes.get(j);
                if (shape === null || shape.getShape() === null) {
                    continue;
                }
                if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL) {
                    shape.setFillColor(tg.get_FillColor());
                }
                shapeType = shape.getShapeType();
                switch (tg.get_LineType()) {
                    case 31134000:
                    case 31134100:
                    case 31134200:
                    case 31134300:
                    case 31148000:
                        break;
                    case 32246000:
                    case 32550000:
                        shape.setLineColor(tg.get_LineColor());
                        break;
                    case 22623001:
                    case 22612001:
                        if (shape.getShapeType() === armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_FILL)
                            shape.setLineColor(null);
                        else {
                            shape.setLineColor(tg.get_LineColor());
                            shape.set_Style(tg.get_LineStyle());
                        }
                        break;
                    break;
                    default:
                        shape.setLineColor(tg.get_LineColor());
                        shape.set_Style(tg.get_LineStyle());
                        break;
                }
                if (isClosedPolygon || shapeType === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL) {
                    switch (tg.get_LineType()) {
                        case 32223000:
                        case 32225200:
                        case 32224000:
                        case 32222000:
                        case 32233100:
                        case 32233500:
                        case 32244200:
                        case 32253000:
                        case 322512000:
                        case 32311000:
                        case 32312000:
                        case 32313000:
                        case 32314000:
                        case 32315000:
                        case 32316000:
                        case 32317000:
                        case 32318000:
                        case 32319000:
                        case 32411100:
                        case 32411200:
                        case 32411600:
                        case 32411500:
                        case 32411400:
                        case 32411300:
                        case 32411700:
                        case 32411800:
                        case 32411900:
                        case 324111000:
                        case 324111100:
                        case 324111200:
                        case 324111300:
                        case 324111400:
                        case 324111500:
                        case 324111600:
                        case 324111700:
                        case 32412200:
                        case 32412300:
                        case 32412100:
                        case 32413300:
                        case 32413200:
                        case 32413100:
                        case 32414100:
                        case 32414200:
                        case 32414500:
                        case 32414300:
                        case 32414400:
                        case 32415100:
                        case 32415200:
                        case 32415300:
                        case 32416100:
                        case 32416200:
                        case 32416300:
                        case 32416400:
                        case 32416500:
                        case 32416600:
                        case 32416700:
                        case 32416800:
                        case 32416900:
                        case 32620000:
                        case 317100000:
                            shape.setFillColor(tg.get_FillColor());
                            break;
                        default:
                            break;
                    }
                    switch (shape.get_FillStyle()) {
                        case 3:
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(shape.getFillColor());
                            grid.drawLine(0, 8, 8, 0);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(null);
                            grid.dispose();
                            break;
                        case 2:
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(tg.get_FillColor());
                            grid.drawLine(0, 0, 8, 8);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(null);
                            grid.dispose();
                            break;
                        case 6:
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(3, 3, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(tg.get_FillColor());
                            grid.drawLine(3, 3, 5, 3);
                            grid.drawLine(5, 3, 5, 5);
                            grid.drawLine(5, 5, 3, 5);
                            grid.drawLine(3, 5, 5, 3);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(null);
                            grid.dispose();
                            break;
                        case 4:
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(tg.get_FillColor());
                            grid.drawLine(4, 0, 4, 8);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(null);
                            grid.dispose();
                            break;
                        case 5:
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(tg.get_FillColor());
                            grid.drawLine(0, 4, 8, 4);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(null);
                            grid.dispose();
                            break;
                        case 1:
                            break;
                        default:
                            break;
                    }
                }
                switch (shape.get_Style()) {
                    case 0:
                        dash = null;
                        break;
                    case 1:
                        dash = Clazz.newArray(2, 0);
                        dash[0] = 5;
                        dash[1] = 5;
                        break;
                    case 2:
                        dash = Clazz.newArray(2, 0);
                        dash[0] = 3;
                        dash[1] = 3;
                        break;
                    case 3:
                        dash = Clazz.newArray(4, 0);
                        dash[0] = 8;
                        dash[1] = 4;
                        dash[2] = 4;
                        dash[3] = 4;
                        break;
                    case 4:
                        dash = Clazz.newArray(6, 0);
                        dash[0] = 8;
                        dash[1] = 4;
                        dash[2] = 4;
                        dash[3] = 4;
                        dash[4] = 4;
                        dash[5] = 4;
                        break;
                    default:
                        break;
                }
                stroke = new armyc2.c2sd.graphics2d.BasicStroke(lineThickness, 1, 1, 1, dash, 0);
                shape.setStroke(stroke);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "SetShapeProperties", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside SetShapeProperties", exc));
            } else {
                throw exc;
            }
        }
    },
    DrawArrow: function(pt1, pt2, size, lineObject) {
        try {
            var ptBase = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var ptTemp = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pts = new java.util.ArrayList();
            ptBase = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt2, pt1, size);
            ptTemp = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, ptBase, ptBase, 2, size);
            pts.add(ptTemp);
            pts.add(pt2);
            ptTemp = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, ptBase, ptBase, 3, size);
            pts.add(ptTemp);
            lineObject.moveTo(pts.get(0).x, pts.get(0).y);
            lineObject.lineTo(pts.get(1).x, pts.get(1).y);
            lineObject.lineTo(pts.get(2).x, pts.get(2).y);
            pts.clear();
            pts = null;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "DrawArrow", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DrawArrow", exc));
            } else {
                throw exc;
            }
        }
    },
    DrawSplines: function(tg, splinePoints2) {
        var lineObject = new armyc2.c2sd.graphics2d.GeneralPath();
        try {
            var i = 0;
            var j = 0;
            var splinePoints;
            var array = tg.get_Pixels();
            var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pt5 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pt6 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var pt;
            var pt_before;
            var pt_after;
            var Di;
            var p2;
            var p3;
            var pt_after2;
            var tension = 0.33;
            var control_scale = (tension / 0.5 * 0.175);
            var tmpArray = null;
            for (i = 0; i < array.size() - 1; i++) {
                pt = array.get(i);
                if (i === 0) {
                    lineObject.moveTo(pt.x, pt.y);
                    pt_before = pt;
                } else {
                    pt_before = array.get(i - 1);
                }
                if (i === array.size() - 1) {
                    pt2 = array.get(i);
                } else {
                    pt2 = array.get(i + 1);
                }
                if (i < array.size() - 2) {
                    pt_after = array.get(i + 1);
                } else {
                    pt_after = array.get(array.size() - 1);
                }
                if (i < array.size() - 2) {
                    pt_after2 = array.get(i + 2);
                } else {
                    pt_after2 = array.get(array.size() - 1);
                }
                Di = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                p2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                Di.x = pt_after.x - pt_before.x;
                Di.y = pt_after.y - pt_before.y;
                p2.x = pt.x + control_scale * Di.x;
                p2.y = pt.y + control_scale * Di.y;
                p3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                var DiPlus1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                DiPlus1.x = pt_after2.x - pt.x;
                DiPlus1.y = pt_after2.y - pt.y;
                p3.x = pt_after.x - control_scale * DiPlus1.x;
                p3.y = pt_after.y - control_scale * DiPlus1.y;
                tmpArray = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.drawCubicBezier2(tg, lineObject, pt, p2, p3, pt2);
                if (tg.get_LineType() === 32164000 || tg.get_LineType() === 32164001) {
                    if (tmpArray.size() > 0)
                        tmpArray.get(tmpArray.size() - 1).style = 47;
                }
                splinePoints2.addAll(tmpArray);
                splinePoints = tmpArray;
                switch (tg.get_LineType()) {
                    case 32272000:
                        if (i === array.size() - 2) {
                            if (splinePoints.size() >= 2)
                                armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawArrow(splinePoints.get(splinePoints.size() - 2), tg.Pixels.get(tg.Pixels.size() - 1), 10, lineObject);
                        }
                        break;
                    case 32273000:
//                        if (i === array.size() - 2) {
//                            if (splinePoints.size() >= 2)
//                                armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawArrow(splinePoints.get(splinePoints.size() - 2), tg.Pixels.get(tg.Pixels.size() - 1), 10, lineObject);
//                        } 
                        if (i === 0 && splinePoints.size() > 1) {
                            pt0 = splinePoints.get(0);
                            pt1 = splinePoints.get(1);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, 10);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, 20);
                            pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, 30);
                            pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt3, pt2, pt2, 3, 10);
                            pt6 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt4, pt3, pt3, 3, 10);
                            lineObject.moveTo(pt3.x, pt3.y);
                            lineObject.lineTo(pt5.x, pt5.y);
                            lineObject.moveTo(pt4.x, pt4.y);
                            lineObject.lineTo(pt6.x, pt6.y);
                        }
                        if (i === array.size() - 2) {
                            if (splinePoints.size() >= 2)
                                armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawArrow(splinePoints.get(splinePoints.size() - 2), tg.Pixels.get(tg.Pixels.size() - 1), 10, lineObject);
                        } 
                        break;
                    case 31440000:
                    case 31430000:
                        if (i === 0 && splinePoints.size() > 1) {
                            armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawArrow(splinePoints.get(1), splinePoints.get(0), 10, lineObject);
                        }
                        break;
                    case 32273001:
//                        if (i === array.size() - 2) {
//                            lineObject.moveTo(Math.floor(splinePoints2.get(0).x), Math.floor(splinePoints2.get(0).y));
//                            for (j = 1; j < splinePoints2.size (); j++)
//                                lineObject.lineTo(Math.floor(splinePoints2.get(j).x), Math.floor(splinePoints2.get(j).y));
//
//                            if (splinePoints.size() >= 2)
//                                armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawArrow(splinePoints.get(splinePoints.size() - 2), tg.Pixels.get(tg.Pixels.size() - 1), 10, lineObject);
//                        } 
                        if (i === 0 && splinePoints.size() > 1) {
                            pt0 = splinePoints.get(0);
                            pt1 = splinePoints.get(1);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, 10);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, 20);
                            pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, 30);
                            pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt3, pt2, pt2, 3, 10);
                            pt6 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt4, pt3, pt3, 3, 10);
                            lineObject.moveTo(pt3.x, pt3.y);
                            lineObject.lineTo(pt5.x, pt5.y);
                            lineObject.moveTo(pt4.x, pt4.y);
                            lineObject.lineTo(pt6.x, pt6.y);
                        }
                        if (i === array.size() - 2) {
                            lineObject.moveTo(Math.floor(splinePoints2.get(0).x), Math.floor(splinePoints2.get(0).y));
                            for (j = 1; j < splinePoints2.size (); j++)
                                lineObject.lineTo(Math.floor(splinePoints2.get(j).x), Math.floor(splinePoints2.get(j).y));

                            if (splinePoints.size() >= 2)
                                armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawArrow(splinePoints.get(splinePoints.size() - 2), tg.Pixels.get(tg.Pixels.size() - 1), 10, lineObject);
                        } 
                        break;
                    case 32272001:
                        if (i === array.size() - 2) {
                            lineObject = new armyc2.c2sd.graphics2d.GeneralPath();
                            lineObject.moveTo(Math.floor(splinePoints2.get(0).x), Math.floor(splinePoints2.get(0).y));
                            for (j = 1; j < splinePoints2.size (); j++)
                                lineObject.lineTo(Math.floor(splinePoints2.get(j).x), Math.floor(splinePoints2.get(j).y));

                            if (splinePoints.size() >= 2)
                                armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawArrow(splinePoints.get(splinePoints.size() - 2), tg.Pixels.get(tg.Pixels.size() - 1), 10, lineObject);
                        }
                        break;
                    case 31430001:
                    case 31440001:
                        if (i === 0 && splinePoints.size()>1) {
                            armyc2.c2sd.JavaTacticalRenderer.clsMETOC.DrawArrow(splinePoints.get(1), splinePoints.get(0), 10, lineObject);
                        }
                        if (i === array.size() - 2) {
                            lineObject.moveTo(Math.floor(splinePoints2.get(0).x), Math.floor(splinePoints2.get(0).y));
                            for (j = 1; j < splinePoints2.size (); j++)
                                lineObject.lineTo(Math.floor(splinePoints2.get(j).x), Math.floor(splinePoints2.get(j).y));

                        }
                        break;
                    case 32164001:
                    case 32163001:
                    case 32610001:
                    case 32234301:
                    case 32234201:
                    case 32234101:
                    case 32233601:
                    case 32233701:
                    case 32231701:
                    case 32221001:
                    case 32213001:
                    case 32212001:
                    case 32161001:
                    case 32155001:
                    case 32154001:
                    case 31860001:
                    case 31850001:
                    case 31840001:
                    case 31830001:
                    case 31820001:
                    case 31810001:
                    case 22612001:
                    case 22623001:
                        if (splinePoints2 !== null && !splinePoints2.isEmpty()) {
                            lineObject = new armyc2.c2sd.graphics2d.GeneralPath();
                            if (i === array.size() - 2) {
                                lineObject.moveTo(Math.floor(splinePoints2.get(0).x), Math.floor(splinePoints2.get(0).y));
                                for (j = 1; j < splinePoints2.size (); j++)
                                    lineObject.lineTo(Math.floor(splinePoints2.get(j).x), Math.floor(splinePoints2.get(j).y));

                            }
                        }
                        break;
                    case 32156000:
                        for (j = 0; j < splinePoints.size() - 1; j++) {
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(splinePoints.get(j).x, splinePoints.get(j).y);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(splinePoints.get(j), splinePoints.get(j + 1), pt0, 45, 5);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(splinePoints.get(j).x, splinePoints.get(j).y);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(splinePoints.get(j), splinePoints.get(j + 1), pt1, -45, 5);
                            lineObject.moveTo(splinePoints.get(j).x, splinePoints.get(j).y);
                            lineObject.lineTo(pt2.x, pt2.y);
                            lineObject.moveTo(splinePoints.get(j).x, splinePoints.get(j).y);
                            lineObject.lineTo(pt3.x, pt3.y);
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(splinePoints.get(j).x, splinePoints.get(j).y);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(splinePoints.get(j), splinePoints.get(j + 1), pt0, 135, 5);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(splinePoints.get(j).x, splinePoints.get(j).y);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(splinePoints.get(j), splinePoints.get(j + 1), pt1, -135, 5);
                            lineObject.moveTo(splinePoints.get(j).x, splinePoints.get(j).y);
                            lineObject.lineTo(pt2.x, pt2.y);
                            lineObject.moveTo(splinePoints.get(j).x, splinePoints.get(j).y);
                            lineObject.lineTo(pt3.x, pt3.y);
                        }
                        break;
                    case 32156001:
                        for (j = 0; j < splinePoints.size() - 1; j++) {
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(splinePoints.get(j).x, splinePoints.get(j).y);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(splinePoints.get(j), splinePoints.get(j + 1), pt0, 45, 5);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(splinePoints.get(j).x, splinePoints.get(j).y);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(splinePoints.get(j), splinePoints.get(j + 1), pt1, -45, 5);
                            lineObject.moveTo(splinePoints.get(j).x, splinePoints.get(j).y);
                            lineObject.lineTo(pt2.x, pt2.y);
                            lineObject.moveTo(splinePoints.get(j).x, splinePoints.get(j).y);
                            lineObject.lineTo(pt3.x, pt3.y);
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(splinePoints.get(j).x, splinePoints.get(j).y);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(splinePoints.get(j), splinePoints.get(j + 1), pt0, 135, 5);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(splinePoints.get(j).x, splinePoints.get(j).y);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(splinePoints.get(j), splinePoints.get(j + 1), pt1, -135, 5);
                            lineObject.moveTo(splinePoints.get(j).x, splinePoints.get(j).y);
                            lineObject.lineTo(pt2.x, pt2.y);
                            lineObject.moveTo(splinePoints.get(j).x, splinePoints.get(j).y);
                            lineObject.lineTo(pt3.x, pt3.y);
                        }
                        if (i === array.size() - 2) {
                            lineObject.moveTo(Math.floor(splinePoints2.get(0).x), Math.floor(splinePoints2.get(0).y));
                            for (j = 1; j < splinePoints2.size (); j++)
                                lineObject.lineTo(Math.floor(splinePoints2.get(j).x), Math.floor(splinePoints2.get(j).y));

                        }
                        break;
                    case 32162000:
                        for (j = 0; j < splinePoints.size() - 1; j++) {
                            pt0 = splinePoints.get(j + 1);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(splinePoints.get(j), splinePoints.get(j + 1), pt0, 2, 5);
                            lineObject.moveTo(pt1.x, pt1.y);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(splinePoints.get(j), splinePoints.get(j + 1), pt0, 3, 5);
                            lineObject.lineTo(pt1.x, pt1.y);
                        }
                        break;
                    case 32162001:
                        for (j = 0; j < splinePoints.size() - 1; j++) {
                            pt0 = splinePoints.get(j + 1);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(splinePoints.get(j), splinePoints.get(j + 1), pt0, 2, 5);
                            lineObject.moveTo(pt1.x, pt1.y);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(splinePoints.get(j), splinePoints.get(j + 1), pt0, 3, 5);
                            lineObject.lineTo(pt1.x, pt1.y);
                        }
                        if (i === array.size() - 2) {
                            lineObject.moveTo(Math.floor(splinePoints2.get(0).x), Math.floor(splinePoints2.get(0).y));
                            for (j = 1; j < splinePoints2.size (); j++)
                                lineObject.lineTo(Math.floor(splinePoints2.get(j).x), Math.floor(splinePoints2.get(j).y));

                        }
                        break;
                    default:
                        break;
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "DrawSplines", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DrawSplines", exc));
            } else {
                throw exc;
            }
        }
        return lineObject;
    },
    getPointOnSegment: function(P0, P1, ratio)
    {
        var pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
        try
        {
            pt.x = P0.x + (P1.x - P0.x) * ratio;
            pt.y = P0.y + (P1.y - P0.y) * ratio;
        }
        catch (exc)
        {
            if (Clazz.instanceOf(exc))
            {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "getPointOnSegment", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getPointOnSegment", exc));
            }
            else
            {
                throw exc;
            }
        }
        return pt;
    },
    drawCubicBezier2: function(tg, lineObject, P0, P1, P2, P3) {
        var array = new java.util.ArrayList();
        try {
            var PA = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.getPointOnSegment(P0, P1, 0.75);
            var PB = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.getPointOnSegment(P3, P2, 0.75);
            var dx = (P3.x - P0.x) / 16;
            var dy = (P3.y - P0.y) / 16;
            var Pc_1 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.getPointOnSegment(P0, P1, 0.375);
            var Pc_2 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.getPointOnSegment(PA, PB, 0.375);
            Pc_2.x -= dx;
            Pc_2.y -= dy;
            var Pc_3 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.getPointOnSegment(PB, PA, 0.375);
            Pc_3.x += dx;
            Pc_3.y += dy;
            var Pc_4 = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.getPointOnSegment(P3, P2, 0.375);
            var Pa_1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(Pc_1, Pc_2, 0);
            var Pa_2 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(PA, PB, 0);
            var Pa_3 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(Pc_3, Pc_4, 0);
            switch (tg.get_LineType()) {
                case 31810000:
                case 31820000:
                case 31850000:
                case 32154000:
                case 32161000:
                case 32212000:
                case 32213000:
                case 32221000:
                case 32231700:
                case 32233600:
                case 32234100:
                case 32234300:
                case 32610000:
                case 32163000:
                case 31840000:
                case 31830000:
                case 31860000:
                case 32155000:
                case 32233700:
                case 32234200:
                    lineObject.moveTo(P0.x, P0.y);
                    lineObject.curveTo(P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
                    return array;
                case 22612000:
                case 22623000:
                    lineObject.moveTo(P0.x, P0.y);
                    lineObject.curveTo(P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
                    if (tg.get_FillColor() === null || tg.get_FillColor().getAlpha() < 2)
                        return array;
                    break;
                case 32163001:
                case 32610001:
                case 32234301:
                case 32234201:
                case 32234101:
                case 32233601:
                case 32233701:
                case 32231701:
                case 32221001:
                case 32213001:
                case 32212001:
                case 32161001:
                case 32155001:
                case 32154001:
                case 31860001:
                case 31840001:
                case 31830001:
                case 31810001:
                case 31820001:
                case 31850001:
                case 32164000:
                case 32164001:
                case 32156000:
                case 32156001:
                case 32162000:
                case 32162001:
                case 32272000:
                case 32273000:
                case 32272001:
                case 32273001:
                case 31430000:
                case 31440000:
                case 31430001:
                case 31440001:
                case 22612001:
                case 22623001:
                    lineObject.moveTo(P0.x, P0.y);
                    lineObject.curveTo(P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
                    break;
                default:
                    break;
            }
            var j = 0;
            var distance;
            var n = 0;
            var x = 0;
            var y = 0;
            var increment = 0;
            var pt0;
            var pt1;
            var pt2;
            var t;
            var pt;
            array.clear();
            switch (tg.get_LineType()) {
                case 22612000:
                case 22623000:
                case 22612001:
                case 22623001:
                    increment = 3.0;
                    break;
                case 32156000:
                    increment = 10.0;
                    break;
                case 32164000:
                case 32164001:
                case 32162000:
                case 32162001:
                    increment = 7.0;
                    break;
                default:
                    increment = 10.0;
                    break;
            }
            distance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(P0, Pa_1);
            if (distance < increment)
                distance = increment;
            n = Math.floor((distance / increment));
            pt0 = P0;
            pt1 = Pc_1;
            pt2 = Pa_1;
            for (j = 0; j < n; j++) {
                t = j * (increment / distance);
                x = (1 - t) * (1 - t) * pt0.x + 2 * (1 - t) * t * pt1.x + t * t * pt2.x;
                y = (1 - t) * (1 - t) * pt0.y + 2 * (1 - t) * t * pt1.y + t * t * pt2.y;
                pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y);
                array.add(pt);
            }
            distance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(Pa_1, Pa_2);
            n = Math.floor((distance / increment));
            pt0 = Pa_1;
            pt1 = Pc_2;
            pt2 = Pa_2;
            for (j = 0; j < n; j++) {
                t = j * (increment / distance);
                x = (1 - t) * (1 - t) * pt0.x + 2 * (1 - t) * t * pt1.x + t * t * pt2.x;
                y = (1 - t) * (1 - t) * pt0.y + 2 * (1 - t) * t * pt1.y + t * t * pt2.y;
                pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y);
                array.add(pt);
            }
            distance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(Pa_2, Pa_3);
            n = Math.floor((distance / increment));
            pt0 = Pa_2;
            pt1 = Pc_3;
            pt2 = Pa_3;
            for (j = 0; j < n; j++) {
                t = j * (increment / distance);
                x = (1 - t) * (1 - t) * pt0.x + 2 * (1 - t) * t * pt1.x + t * t * pt2.x;
                y = (1 - t) * (1 - t) * pt0.y + 2 * (1 - t) * t * pt1.y + t * t * pt2.y;
                pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y);
                array.add(pt);
            }
            distance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(Pa_3, P3);
            n = Math.floor((distance / increment));
            pt0 = Pa_3;
            pt1 = Pc_4;
            pt2 = P3;
            for (j = 0; j < n; j++) {
                t = j * (increment / distance);
                x = (1 - t) * (1 - t) * pt0.x + 2 * (1 - t) * t * pt1.x + t * t * pt2.x;
                y = (1 - t) * (1 - t) * pt0.y + 2 * (1 - t) * t * pt1.y + t * t * pt2.y;
                pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y);
                array.add(pt);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "drawCubicBezier2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside drawCubicBezier2", exc));
            } else {
                throw exc;
            }
        }
        return array;
    },
    ParallelLines2: function(Pixels, rev) {
        var channelPoints2 = new java.util.ArrayList();
        try {
            var pLinePoints = Clazz.newArray(Pixels.size() * 2, 0);
            var channelPoints = Clazz.newArray(6 * Pixels.size(), 0);
            var j = 0;
            for (j = 0; j < Pixels.size(); j++) {
                pLinePoints[2 * j] = Pixels.get(j).x;
                pLinePoints[2 * j + 1] = Pixels.get(j).y;
            }
            var numPoints = Pixels.size();
            var channelWidth = 20;
            var usePtr = 0;
            var shapes = null;
            try {
                armyc2.c2sd.JavaLineArray.CELineArray.CGetChannel2Double(pLinePoints, pLinePoints, channelPoints, numPoints, numPoints, 231113001, channelWidth, usePtr, shapes, rev);
            } catch (e) {
                if (Clazz.instanceOf(e)) {
                    armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "ParallelLines2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ParallelLines2", e));
                } else {
                    throw e;
                }
            }
            var pt2 = null;
            var style = 0;
            for (j = 0; j < Math.floor(channelPoints.length / 3); j++) {
                pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(channelPoints[3 * j], channelPoints[3 * j + 1], style);
                channelPoints2.add(pt2);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsMETOC._className, "ParallelLines2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ParallelLines2", exc));
            } else {
                throw exc;
            }
        }
        return channelPoints2;
    },
    getWeatherLinetype:function(SymbolSet, entityCode)
    {
        var symbolSet=Integer.parseInt(SymbolSet);
        if(symbolSet.valueOf() !== 45 && symbolSet.valueOf() !== 46)
            return -1;
        var code=Integer.parseInt(entityCode);
        var nCode=code.valueOf();
        var TacticalLines=new armyc2.c2sd.JavaLineArray.TacticalLines();
        switch(nCode)
        {
            case 110301:
                return TacticalLines.CF;
            case 110302:
                return TacticalLines.UCF;
            case 110303:
                return TacticalLines.CFG;
            case 110304:
                return TacticalLines.CFY;
            case 110305:
                return TacticalLines.WF;
            case 110306:
                return TacticalLines.UWF;
            case 110307:
                return TacticalLines.WFG;
            case 110308:
                return TacticalLines.WFY;
            case 110309:
                return TacticalLines.OCCLUDED;
            case 110310:
                return TacticalLines.UOF;
            case 110311:
                return TacticalLines.OFY;
            case 110312:
                return TacticalLines.SF;
            case 110313:
                return TacticalLines.USF;
            case 110314:
                return TacticalLines.SFG;
            case 110315:
                return TacticalLines.SFY;
            case 110401:    //trough with dashed lines new symbol
            case 110402:    //now called upper trough
                return TacticalLines.TROUGH;
            case 110403:
                return TacticalLines.RIDGE;
            case 110404:
                return TacticalLines.SQUALL;
            case 110405:
                return TacticalLines.INSTABILITY;
            case 110406:
                return TacticalLines.SHEAR;
            case 110407:
                return TacticalLines.ITC;
            case 110408:
                return TacticalLines.CONVERGANCE;
            case 110409:
                return TacticalLines.ITD;
            case 140300:
                return TacticalLines.JET;
            case 140400:
                return TacticalLines.STREAM;
            case 162004:            //tropical storm wind
                break;
            case 170100:
                return TacticalLines.IFR;
            case 170200:
                return TacticalLines.MVFR;
            case 170300:
                return TacticalLines.TURBULENCE;
            case 170400:
                return TacticalLines.ICING;
            case 170500:
                return TacticalLines.NON_CONVECTIVE;
            case 170501:
                return TacticalLines.CONVECTIVE;
            case 170600:
                return TacticalLines.FROZEN;
            case 170700:
                return TacticalLines.THUNDERSTORMS;
            case 170800:
                return TacticalLines.FOG;                
            case 170900:
                return TacticalLines.SAND;
            case 171000:
                return TacticalLines.FREEFORM;
            case 180100:
                return TacticalLines.ISOBAR;
            case 180200:
                return TacticalLines.UPPER_AIR;
            case 180300:
                return TacticalLines.ISOTHERM;
            case 180400:
                return TacticalLines.ISOTACH;
            case 180500:
                return TacticalLines.ISODROSOTHERM;
            case 180600:
                return TacticalLines.ISOPLETHS;
            case 180700:
                return TacticalLines.OPERATOR_FREEFORM;
            case 110501:
                return TacticalLines.LVO;
            case 110502:
                return TacticalLines.UNDERCAST;
            case 110503:
                return TacticalLines.LRO;
            case 110504:
                return TacticalLines.ICE_EDGE;
            case 110505:
                return TacticalLines.ESTIMATED_ICE_EDGE;
            case 110506:
                return TacticalLines.ICE_EDGE_RADAR;
            case 110601:
                return TacticalLines.CRACKS;
            case 110602:
                return TacticalLines.CRACKS_SPECIFIC_LOCATION;
            case 110603:
                return TacticalLines.ICE_OPENINGS_LEAD;
            case 110604:
                return TacticalLines.ICE_OPENINGS_FROZEN;
            case 120102:
                return TacticalLines.DEPTH_CURVE;
            case 120103:
                return TacticalLines.DEPTH_CONTOUR;
            case 120104:
                return TacticalLines.DEPTH_AREA;
            case 120201:
                return TacticalLines.COASTLINE;
            case 120202:
                return TacticalLines.ISLAND;
            case 120203:
                return TacticalLines.BEACH;
            case 120204:
                return TacticalLines.WATER;
            case 120205:
                return TacticalLines.FORESHORE_LINE;
            case 120206:
                return TacticalLines.FORESHORE_AREA;
            case 120305:
                return TacticalLines.ANCHORAGE_LINE;
            case 120306:
                return TacticalLines.ANCHORAGE_AREA;
                
            case 120308:
                return TacticalLines.PIER;
            case 120312:
                return TacticalLines.WEIRS;
            case 120313:
                return TacticalLines.DRYDOCK;
            case 120317:
                return TacticalLines.LOADING_FACILITY_LINE;
            case 120318:
                return TacticalLines.LOADING_FACILITY_AREA;
                
            case 120319:
                return TacticalLines.RAMP_ABOVE_WATER;
            case 120320:
                return TacticalLines.RAMP_BELOW_WATER;
                
            case 120326:
                return TacticalLines.JETTY_ABOVE_WATER;
            case 120327:
                return TacticalLines.JETTY_BELOW_WATER;
            case 120328:
                return TacticalLines.SEAWALL;
            case 120405:
                return TacticalLines.PERCHES;
            case 120407:
                return TacticalLines.LEADING_LINE;
            case 120503:
                return TacticalLines.UNDERWATER_HAZARD;
            case 120505:
                return TacticalLines.FOUL_GROUND;
            case 120507:
                return TacticalLines.KELP;
            case 120511:
                return TacticalLines.BREAKERS;
            case 120512:
                return TacticalLines.REEF;
            case 120514:
                return TacticalLines.DISCOLORED_WATER;
            case 120702:
                return TacticalLines.EBB_TIDE;
            case 120703:
                return TacticalLines.FLOOD_TIDE;
                
            case 130101:
                return TacticalLines.VDR_LEVEL_12;
            case 130102:
                return TacticalLines.VDR_LEVEL_23;
            case 130103:
                return TacticalLines.VDR_LEVEL_34;
            case 130104:
                return TacticalLines.VDR_LEVEL_45;
            case 130105:
                return TacticalLines.VDR_LEVEL_56;
            case 130106:
                return TacticalLines.VDR_LEVEL_67;
            case 130107:
                return TacticalLines.VDR_LEVEL_78;
            case 130108:
                return TacticalLines.VDR_LEVEL_89;
            case 130109:
                return TacticalLines.VDR_LEVEL_910;
            case 130201:
                return TacticalLines.BEACH_SLOPE_FLAT;
            case 130202:
                return TacticalLines.BEACH_SLOPE_GENTLE;
            case 130203:
                return TacticalLines.BEACH_SLOPE_MODERATE;
            case 130204:
                return TacticalLines.BEACH_SLOPE_STEEP;
            case 140101:
                return TacticalLines.SOLID_ROCK;
            case 140102:
                return TacticalLines.CLAY;
            case 140103:
                return TacticalLines.VERY_COARSE_SAND;
            case 140104:
                return TacticalLines.COARSE_SAND;
            case 140105:
                return TacticalLines.MEDIUM_SAND;
            case 140106:
                return TacticalLines.FINE_SAND;
            case 140107:
                return TacticalLines.VERY_FINE_SAND;
            case 140108:
                return TacticalLines.VERY_FINE_SILT;
            case 140109:
                return TacticalLines.FINE_SILT;
            case 140110:
                return TacticalLines.MEDIUM_SILT;
            case 140111:
                return TacticalLines.COARSE_SILT;
            case 140112:
                return TacticalLines.BOULDERS;
            case 140113:
                return TacticalLines.OYSTER_SHELLS;
            case 140114:
                return TacticalLines.PEBBLES;
            case 140115:
                return TacticalLines.SAND_AND_SHELLS;
            case 140116:
                return TacticalLines.BOTTOM_SEDIMENTS_LAND;
            case 140117:
                return TacticalLines.BOTTOM_SEDIMENTS_NO_DATA;
            case 140118:
                return TacticalLines.BOTTOM_ROUGHNESS_SMOOTH;
            case 140119:
                return TacticalLines.BOTTOM_ROUGHNESS_MODERATE;
            case 140120:
                return TacticalLines.BOTTOM_ROUGHNESS_ROUGH;
            case 140121:
                return TacticalLines.CLUTTER_LOW;
            case 140122:
                return TacticalLines.CLUTTER_MEDIUM;
            case 140123:
                return TacticalLines.CLUTTER_HIGH;
            case 140124:
                return TacticalLines.IMPACT_BURIAL_0;
            case 140125:
                return TacticalLines.IMPACT_BURIAL_10;
            case 140126:
                return TacticalLines.IMPACT_BURIAL_20;
            case 140127:
                return TacticalLines.IMPACT_BURIAL_75;
            case 140128:
                return TacticalLines.IMPACT_BURIAL_100;
            case 140129:
                return TacticalLines.BOTTOM_CATEGORY_A;
            case 140130:
                return TacticalLines.BOTTOM_CATEGORY_B;
            case 140131:
                return TacticalLines.BOTTOM_CATEGORY_C;
            case 140132:
                return TacticalLines.BOTTOM_TYPE_A1;
            case 140133:
                return TacticalLines.BOTTOM_TYPE_A2;
            case 140134:
                return TacticalLines.BOTTOM_TYPE_A3;
            case 140135:
                return TacticalLines.BOTTOM_TYPE_B1;
            case 140136:
                return TacticalLines.BOTTOM_TYPE_B2;
            case 140137:
                return TacticalLines.BOTTOM_TYPE_B3;
            case 140138:
                return TacticalLines.BOTTOM_TYPE_C1;
            case 140139:
                return TacticalLines.BOTTOM_TYPE_C2;
            case 140140:
                return TacticalLines.BOTTOM_TYPE_C3;
            
            case 150100:
                return TacticalLines.MARITIME_LIMIT;
            case 150200:
                return TacticalLines.MARITIME_AREA;
            case 150300:
                return TacticalLines.RESTRICTED_AREA;
            case 150400:
                return TacticalLines.SWEPT_AREA;
            case 150500:
                return TacticalLines.TRAINING_AREA;
            case 150600:
                return TacticalLines.OPERATOR_DEFINED;
            case 160100:
                return TacticalLines.CABLE;
            case 160200:
                return TacticalLines.SUBMERGED_CRIB;
            case 160300:
                return TacticalLines.CANAL;
            case 160700:
                return TacticalLines.OIL_RIG_FIELD;
            case 160800:
                return TacticalLines.PIPE;
                
            default:
                return -1;
        }
        return -1;
    },

    _className: "clsMETOC"
};