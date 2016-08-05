var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

/** @class */
armyc2.c2sd.renderer.utilities.SymbolSVGDimensions = {};
    
      
    /**
     * 
     * @param {Number} charIndex
     * @return {armyc2.c2sd.renderer.so.Rectangle} 
     */
    armyc2.c2sd.renderer.utilities.SymbolSVGDimensions.getUnitBounds = function(charIndex){
        var Rectangle = armyc2.c2sd.renderer.so.Rectangle,
            index = charIndex - 57000;
        var rect = null;

        switch(index)
        {
            case 800://unknown ground
            case 801:
            case 802:
                    rect = new Rectangle(-1245,-1245,2490,2490);
                    break;
            case 803://FG
            case 804:
            case 805:
                    rect = new Rectangle(-1325,-951,2650,1902);
                    break;
            case 806://HG
            case 807:
            case 808:
                    rect = new Rectangle(-1280,-1280,2560,2560);
                    break;
            case 809://NG
            case 810:
            case 811:
                    rect = new Rectangle(-1025,-1025,2050,2050);
                    break;
            case 812://FE
            case 813:
            case 814:
                    rect = new Rectangle(-1100,-1100,2200,2200);
                    break;
            case 816://HA/S
            case 817:
            case 818:
            case 840:
            case 841:
            case 842:
                    rect = new Rectangle(-1030,-1410,2060,2160);//
                    break;
            case 819://FA/S
            case 820:
            case 821:
            case 843:
            case 844:
            case 845:
                    rect = new Rectangle(-954,-1210,1908,1960);//y=7
                    break;
            case 822://NA/S
            case 823:
            case 824:
            case 846:
            case 847:
            case 848:
                    rect = new Rectangle(-952,-1210,1904,1960);//y=6
                    break;
            case 825://UA/S
            case 826:
            case 827:
            case 849:
            case 850:
            case 851:
                    rect = new Rectangle(-1325,-1400,2650,2314);//
                    break;
            case 828://HSub
            case 829:
            case 830:
                    rect = new Rectangle(-1030,-750,2060,2160);//{x : 0, y:-7, width:50.3,height:53}
                    break;
            case 831://FSub
            case 832:
            case 833:
                    rect = new Rectangle(-952,-750,1904,1960);//y=-5
                    break;
            case 834://NSub
            case 835:
            case 836:
                    rect = new Rectangle(952,-1211,1904,1961);//y=-5
                    break;
            case 837://USub
            case 838:
            case 839:
                    rect = new Rectangle(-1325,-914,2650,2314);//y=-10
                    break;
                case 2059:
                case 2062:
                case 2064:
                case 2073:
                case 2075:
                case 2084:
                case 2086:
                case 2094:
                case 2115:
                case 2121:
                    rect = new Rectangle(-544,-612,1091,1221);//y=-10
                    break;			
            default:
                    rect = new Rectangle(-1245,-1245,2490,2490);
                    break;
        }

        return rect;
    };
    /**
     * 
     * @param {String} symbolID
     * @param {Number} symStd 0=2525B,1=2525C
     * @param {Number} fontSize
     * @returns {armyc2.c2sd.renderer.so.Rectangle}
     */
    armyc2.c2sd.renderer.utilities.SymbolSVGDimensions.getSymbolBounds = function (symbolID, index){
        var rect = null;
        var schema = symbolID.charAt(0);
        if(schema === "G")
        {
            switch(true)
            {
                case (59080 <= index && index <= 59081)://Action Points
                case (60080 <= index && index <= 60081)://Action Points
                case (59085 <= index && index <= 59089):
                case (60085 <= index && index <= 60089):
                case (59151 <= index && index <= 59157):
                case (60151 <= index && index <= 60157):
                case (59165 <= index && index <= 59197):
                case (60165 <= index && index <= 60197):
                case (59091 === index || index === 60091):
                case (59119 === index || index === 60119):
                case (59128 === index || index === 60128):
                case (59142 === index || index === 60142):
                case (59214 === index || index === 60214):
                        rect = new Rectangle(-418,-1509,836,1509);
                        break;
                case (59007 <= index && index <= 59018)://SONOBUOY
                case (60007 <= index && index <= 60018)://SONOBUOY
                        rect = new Rectangle(-405,-1196,810,1576);
                        break;
                case (59007 <= index && index <= 59018)://Reference Point
                case (60007 <= index && index <= 60018):
                        rect = new Rectangle(-521,-502,1042,1004);
                        break;  
                case (59041 <= index && index <= 59045)://Harbor
                case (60041 <= index && index <= 60045):
                        rect = new Rectangle(-519,-376,1038,746);
                        break;
                case (59047 <= index && index <= 59051)://Point Route specific
                case (60047 <= index && index <= 60051):
                        rect = new Rectangle(-592,-376,1184,1132);
                        break;
                case (59052 <= index && index <= 59074)://Air Control
                case (60052 <= index && index <= 60074):
                        rect = new Rectangle(-480,-705,960,1410);
                        break;
                case (61006 <= index && index <= 61015)://2525B specific air control
                case (61506 <= index && index <= 61515)://
                        rect = new Rectangle(-480,-705,960,1410);
                        break;
                case (59092 <= index && index <= 59105)://Sea Surface Control Station
                case (60092 <= index && index <= 60105):
                        rect = new Rectangle(-705,-480,1410,960);
                        break;
                case (58999 === index || index === 59999):
                        rect = new Rectangle(-1038,-600,2089,1080);
                        break;
                case (59000 === index || index === 60000)://task destory
                        rect = new Rectangle(-1046,-610,2089,1220);
                        break;
                case (59001 === index || index === 60001)://task interdict
                        rect = new Rectangle(-1054,-592,2040,1274);
                        break;
                case (59002 === index || index === 60002)://task neutralize
                        rect = new Rectangle(-1046,-610,2089,1220);
                        break;
                case (59003 === index || index === 60003)://underwater datum
                        rect = new Rectangle(-642,-637,1284,1281);
                        break;
                case (59004 === index || index === 60004)://underwater brief contact
                case (59005 === index || index === 60005)://underwater lost contact
                        rect = new Rectangle(-405,-637,994,994);
                        break;
                case (59006 === index || index === 60006)://underwater sinker
                        rect = new Rectangle(-502,-1038,1004,1038);
                        break;
                case (59019 === index || index === 60019)://sonobuoy expired
                        rect = new Rectangle(-832,-1200,1664,1696);
                        break;
                case (59020 === index || index === 60020)://search
                case (59021 === index || index === 60021)://search area
                case (59022 === index || index === 60022)://dip postiion
                        rect = new Rectangle(-663,-579,1326,1158);
                        break;
                case (59023 === index || index === 60023)://search center
                        rect = new Rectangle(-600,-600,1200,1200);
                        break;
                case (59032 === index || index === 60032)://point of interest
                        rect = new Rectangle(-405,-1406,810,1406);
                        break;
                case (59033 === index || index === 60033)://aim point
                        rect = new Rectangle(-791,-791,1582,1582);
                        break;
                case (59034 === index || index === 60034)://drop point
                        rect = new Rectangle(-725,-1120,1450,1283);
                        break;
                case (59035 === index || index === 60035)://entry point
                        rect = new Rectangle(-1050,-1134,2100,1134);
                        break;
                case (59036 === index || index === 60036)://ground zero
                        rect = new Rectangle(-553,-1142,1106,1142);
                        break;
                case (59037 === index || index === 60037)://msl detection point
                        rect = new Rectangle(-762,-1352,1524,1352);
                        break;
                case (59038 === index || index === 60038)://impact point
                        rect = new Rectangle(-705,-705,1410,1410);
                        break;
                case (59039 === index || index === 60039)://predicted impact point
                        rect = new Rectangle(-703,-703,1406,1406);
                        break;
                case (59040 === index || index === 60040)://formation
                        rect = new Rectangle(-600,-600,1200,1200);
                        break;
                case (59082 === index || index === 60082)://contact point
                        rect = new Rectangle(-370,-1002,740,1002);
                        break;
                case (59083 === index || index === 60083)://coordination point
                        rect = new Rectangle(-498,-498,996,996);
                        break;
                case (59084 === index || index === 60084)://coordination point
                        rect = new Rectangle(-520,-500,1040,1000);
                        break;
                case (59090 === index || index === 60090)://way point
                        rect = new Rectangle(-520,-504,1040,1008);
                        break;
                case (59116 <= index && index <= 59118)://ACP, CCP, Pull-up
                case (60116 <= index && index <= 60118):
                        rect = new Rectangle(-500,-500,1000,1000);
                        break;
                case (59120 === index || index === 60120)://dummy minefield static
                        rect = new Rectangle(-800,-953,1600,1393);
                        break;
                case (59121 === index || index === 60121)://target reference
                        rect = new Rectangle(-800,-953,1600,1393);
                        break;
                case (59123 === index || index === 60123)://combat outpost
                        rect = new Rectangle(-582,-654,1164,1148);
                        break;
                case (59122 <= index && index <= 59127)://observation post/outpost
                case (60122 <= index && index <= 60127):
                        rect = new Rectangle(-500,-654,1000,999);
                        break;
                case (59129 <= index && index <= 59131)://anti-tank obstacles
                case (60129 <= index && index <= 60131):
                        rect = new Rectangle(-500,-986,1000,994);
                        break;
                case (59132 === index || index === 60132)://booby trap
                        rect = new Rectangle(-503,-1007,1006,1281);
                        break;
                case (59133 === index || index === 60133)://unspecified mine
                case (59134 === index || index === 60134)://antitank mine
                        rect = new Rectangle(-400,-400,800,800);
                        break;
                case (59135 === index || index === 60135)://ANTITANK MINE WITH ANTIHANDLING DEVICE
                        rect = new Rectangle(-406,-400,812,1622);
                        break;
                case (59136 === index || index === 60136)://ANTITANK MINE directional
                        rect = new Rectangle(-400,-1371,800,1771);
                        break;
                case (59137 === index || index === 60137)://ANTIpersonnel mines
                        rect = new Rectangle(-654,-700,1308,1100);
                        break;
                case (59138 === index || index === 60138)://wide area mines
                        rect = new Rectangle(-900,-400,1800,1380);
                        break;
                case (59139 === index || index === 60139)://minefield static depiction
                        rect = new Rectangle(-830,-452,1800,904);
                        break;
                case (59140 === index || index === 60140)://tower low
                case (59141 === index || index === 60141)://tower high
                        rect = new Rectangle(-427,-977,854,1084);
                        break;
                case (59143 === index || index === 60143)://fortification
                        rect = new Rectangle(-513,-495,1026,990);
                        break;
                case (59144 === index || index === 60144)://fort
                        rect = new Rectangle(-750,-815,1500,1630);
                        break;
                case (59145 === index || index === 60145)://surface shelter
                        rect = new Rectangle(-800,-490,1600,990);
                        break;
                case (59146 === index || index === 60146)://underground shelter
                        rect = new Rectangle(-800,-485,1600,985);
                        break;
                case (59147 === index || index === 60147)://Nuclear Detonations Ground Zero
                case (59148 === index || index === 60148)://Fallout Producing
                        rect = new Rectangle(-510,-1310,1020,1310);
                        break;
                case (59149 === index || index === 60149)://Biological Event
                        rect = new Rectangle(-465,-1300,930,1300);
                        break;
                case (59150 === index || index === 60150)://Chemical Event
                        rect = new Rectangle(-350,-1300,700,1300);
                        break;
                case (59162 === index || index === 60162)://Point/Single Target
                case (59163 === index || index === 60163)://Nuclear Target
                        rect = new Rectangle(-600,-600,1200,1200);
                        break;
                case (59164 === index || index === 60164)://Fire Support Station
                        rect = new Rectangle(-503,-502,1006,1004);
                        break;
                case (59198 === index || index === 60198)://Ditched Aircraft
                        rect = new Rectangle(-737,-1160,1468,1162);
                        break;
                case (59199 === index || index === 60199)://Person in Water
                        rect = new Rectangle(-525,-679,1050,679);
                        break;
                case (59200 === index || index === 60200)://Distressed vessel
                        rect = new Rectangle(-889,-1239,1771,1239);
                        break;
                case (59201 === index || index === 60201)://sea mine-like
                        rect = new Rectangle(-355,-471,711,719);
                        break;
                case (59202 === index || index === 60202)://iceberg
                        rect = new Rectangle(-612,-506,711,1218);
                        break;
                case (59203 === index || index === 60203)://oilrig
                        rect = new Rectangle(-500,-339,1000,600);
                        break;
                case (59204 === index || index === 60204)://BOTTOM RETURN/NON-MILCO
                case (59205 === index || index === 60205)://INSTALLATION/MANMADE
                case (59206 === index || index === 60206)://SEABED ROCK/STONE, OBSTACLE,OTHER
                        rect = new Rectangle(-497,-732,990,732);
                        break;
                case (59207 === index || index === 60207)://wreck non-dangerous
                        rect = new Rectangle(-726,-405,1457,805);
                        break;
                case (59208 === index || index === 60208)://wreck dangerous
                        rect = new Rectangle(-600,-357,1200,706);
                        break;
                case (59209 === index || index === 60209)://marine life
                        rect = new Rectangle(-0,-321,1140,642);
                        break;
                case (59210 === index || index === 60210)://Sea Anomoly
                        rect = new Rectangle(-648,-474,1298,1026);
                        break;
                case (59211 === index || index === 60211)://FIX
                        rect = new Rectangle(-462,-480,924,960);
                        break;
                case (59212 === index || index === 60212)://
                        rect = new Rectangle(-512,-480,1030,960);
                        break;
                case (59213 === index || index === 60213)://
                        rect = new Rectangle(-480,-480,960,960);
                        break;
                case (61000 === index || index === 61500)://  2525B only symbols
                case (61002 === index || index === 61502)://  2525B only symbols
                        rect = new Rectangle(-1041,-600,2089,1180);
                        break;
                case (61001 === index || index === 61501)://  2525B only symbols
                        rect = new Rectangle(-1054,-592,2041,1274);
                        break;
                case (61003 === index || index === 61503)://  2525B only symbols
                        rect = new Rectangle(-501,-505,1002,1010);
                        break;
                case (61004 === index || index === 61504)://  2525B only symbols
                        rect = new Rectangle(-503,-503,1006,1006);
                        break;
                case (61005 === index || index === 61505)://  2525B only symbols
                        rect = new Rectangle(-509,-500,1042,1005);
                        break;
                default:
                        break;
            }
        }
        if(schema === "W")
        {
            switch(true)
            {
                case (59080 <= index && index <= 59081)://Action Points
                case (60080 <= index && index <= 60081)://Action Points
                case (59085 <= index && index <= 59089):
                case (60085 <= index && index <= 60089):
                case (59151 <= index && index <= 59157):
                case (60151 <= index && index <= 60157):
                case (59165 <= index && index <= 59197):
                case (60165 <= index && index <= 60197):
                case (59091 === index || index === 60091):
                case (59119 === index || index === 60119):
                case (59128 === index || index === 60128):
                case (59142 === index || index === 60142):
                case (59214 === index || index === 60214):
                        rect = new Rectangle(-418,-1509,836,1509);
                        break;
                case (59007 <= index && index <= 59018)://SONOBUOY
                case (60007 <= index && index <= 60018)://SONOBUOY
                        rect = new Rectangle(-405,-1196,810,1576);
                        break;
                case (59007 <= index && index <= 59018)://Reference Point
                case (60007 <= index && index <= 60018):
                        rect = new Rectangle(-521,-502,1042,1004);
                        break;  
                case (59041 <= index && index <= 59045)://Harbor
                case (60041 <= index && index <= 60045):
                        rect = new Rectangle(-519,-376,1038,746);
                        break;
                case (59047 <= index && index <= 59051)://Point Route specific
                case (60047 <= index && index <= 60051):
                        rect = new Rectangle(-592,-376,1184,1132);
                        break;
                case (59052 <= index && index <= 59074)://Air Control
                case (60052 <= index && index <= 60074):
                        rect = new Rectangle(-480,-705,960,1410);
                        break;
                case (59092 <= index && index <= 59105)://Sea Surface Control Station
                case (60092 <= index && index <= 60105):
                        rect = new Rectangle(-480,-705,960,1410);
                        break;
                default:
                        break;
            }
        }
        else if(schema === "E")
        {
            switch(true)
            {
                case (59080 <= index && index <= 59081)://Action Points
                case (60080 <= index && index <= 60081)://Action Points
                case (59085 <= index && index <= 59089):
                case (60085 <= index && index <= 60089):
                case (59151 <= index && index <= 59157):
                case (60151 <= index && index <= 60157):
                case (59165 <= index && index <= 59197):
                case (60165 <= index && index <= 60197):
                case (59091 === index || index === 60091):
                case (59119 === index || index === 60119):
                case (59128 === index || index === 60128):
                case (59142 === index || index === 60142):
                case (59214 === index || index === 60214):
                        rect = new Rectangle(-418,-1509,836,1509);
                        break;
                case (59007 <= index && index <= 59018)://SONOBUOY
                case (60007 <= index && index <= 60018)://SONOBUOY
                        rect = new Rectangle(-405,-1196,810,1576);
                        break;
                case (59007 <= index && index <= 59018)://Reference Point
                case (60007 <= index && index <= 60018):
                        rect = new Rectangle(-521,-502,1042,1004);
                        break;  
                case (59041 <= index && index <= 59045)://Harbor
                case (60041 <= index && index <= 60045):
                        rect = new Rectangle(-519,-376,1038,746);
                        break;
                case (59047 <= index && index <= 59051)://Point Route specific
                case (60047 <= index && index <= 60051):
                        rect = new Rectangle(-592,-376,1184,1132);
                        break;
                case (59052 <= index && index <= 59074)://Air Control
                case (60052 <= index && index <= 60074):
                        rect = new Rectangle(-480,-705,960,1410);
                        break;
                case (59092 <= index && index <= 59105)://Sea Surface Control Station
                case (60092 <= index && index <= 60105):
                        rect = new Rectangle(-480,-705,960,1410);
                        break;
                default:
                        break;
            }
        }
       
        return rect; 
    };

    /**
     * 
     * @param {String} symbolID
     * @param {armyc2.c2sd.renderer.so.Rectangle} bounds
     * @returns {armyc2.c2sd.renderer.so.Point}
     */
    armyc2.c2sd.renderer.utilities.SymbolSVGDimensions.getSymbolCenter = function (symbolID, bounds){
        
        var SymbolUtilities = armyc2.c2sd.renderer.utilities.SymbolUtilities;
        var basicID = SymbolUtilities.getBasicSymbolIDStrict(symbolID),
            center = new armyc2.c2sd.renderer.so.Point(bounds.width/2,bounds.height/2);

        if(basicID === "G*G*GPUUB-****X" ||
                basicID === "G*G*GPUUL-****X" ||
                basicID === "G*G*GPUUS-****X" ||
                basicID === "G*G*GPRI--****X" ||
                basicID === "G*G*GPWE--****X" ||
                basicID === "G*G*GPWG--****X" ||
                basicID === "G*G*GPWM--****X" ||
                basicID === "G*G*GPP---****X" ||
                basicID === "G*G*GPPC--****X" ||
                basicID === "G*G*GPPL--****X" ||
                basicID === "G*G*GPPP--****X" ||
                basicID === "G*G*GPPR--****X" ||
                basicID === "G*G*GPPA--****X" ||
                basicID === "G*G*APD---****X" ||
                basicID === "G*G*OPP---****X" ||
                basicID.substring(0,7) === "G*M*OAO" ||//antitank obstacles
                basicID === "G*M*BCP---****X" ||
                basicID === "G*F*PCS---****X" ||
                basicID === "G*F*PCB---****X" ||
                basicID === "G*F*PCR---****X" ||
                basicID === "G*F*PCH---****X" ||
                basicID === "G*F*PCL---****X" ||
                basicID.substring(0,5) === "G*S*P" ||//combat service suppport/points
                basicID === "G*O*ED----****X" ||
                basicID === "G*O*EP----****X" ||
                basicID === "G*O*EV----****X" ||
                basicID === "G*O*SB----****X" ||
                basicID === "G*O*SBM---****X" ||
                basicID === "G*O*SBN---****X" ||
                basicID === "G*O*SS----****X" ||
                basicID === "G*G*GPPN--****X" || //entry control point
                basicID === "G*S*PX----****X" || //ambulance exchange point
                basicID === "G*O*ES----****X" || //emergency distress call
                SymbolUtilities.isNBC(basicID) ||
                SymbolUtilities.isDeconPoint(basicID) ||
                SymbolUtilities.isCheckPoint(basicID))
        {
                //center on bottom middle
                center.x = bounds.width/2;
                center.y = bounds.height;
        }
        else if(SymbolUtilities.isSonobuoy(basicID))
        {
                //bottom third
                center.x = bounds.width/2;
                center.y = Math.round(bounds.height * 0.66);
        }
        else if((basicID.substring(0,7)==="G*G*GPO" && basicID.substring(7,8)!=="-"))//antitank mine w/ handling device
        {
                //upper third
                center.x = bounds.width/2;
                center.y = Math.round(bounds.height * 0.33);
        }
        else if(basicID==="G*M*OMD---****X")
        {
                //upper third
                center.x = bounds.width/2;
                center.y = Math.round(bounds.height * 0.28);
        }
        else if(basicID.substring(0,7)==="G*G*DPO")//OBSERVATION POST/OUTPOST
        {
                if(basicID.substring(7,8)==="C")//combat outpost
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.55);
                }
                else//everything else under OBSERVATION POST/OUTPOST
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.65);
                }
        }
        else if(basicID === "G*G*GPWD--****X"||//drop point
                basicID === "G*G*PN----****X" ||//dummy minefield static
                basicID === "G*M*OB----****X" ||//booby trap
                basicID === "G*M*OME---****X" ||//antitank mine directional
                basicID === "G*M*OMW---****X" ||//wide area mines
                basicID === "G*M*OMP---****X" ||//anti-personnel mines
                basicID === "G*M*OHTL--****X" ||//Aviation/tower/low
                basicID === "G*M*OHTH--****X" ||//Aviation/tower/high
                basicID === "G*O*HM----****X" ||//
                basicID === "G*O*HI----****X" ||//
                basicID === "G*O*SM----****X")
        {
                if(basicID === "G*G*GPWD--****X")//drop point
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.87);
                }
                if(basicID === "G*G*PN----****X")//dummy minefield static
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.69);
                }
                if(basicID === "G*M*OB----****X")//booby trap
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.79);
                }
                if(basicID === "G*M*OME---****X")//antitank mine directional
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.77);
                }
                if(basicID === "G*M*OMW---****X")//wide area mines
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.3);
                }
                if(basicID === "G*M*OMP---****X")//anti personnel mines
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.64);
                }
                if(basicID === "G*M*OHTL--****X")//Aviation/tower/low//2525C
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.88);
                }
                if(basicID === "G*M*OHTH--****X")//Aviation/tower/high//2525C
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.90);
                }
                if(basicID === "G*O*HM----****X")//sea mine-like
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.65);
                }
                if(basicID === "G*O*HI----****X")
                {
                        center.x = bounds.width/2;
                        center.y = Math.round(bounds.height * 0.58);
                }
                if(basicID === "G*O*SM----****X")
                {
                        center.x = 0;
                        center.y = Math.round(bounds.height * 0.5);
                }
        }
        else
        {
                //center on center
                center.x = bounds.width/2;
                center.y = bounds.height/2;
                //var foo = new armyc2.c2sd.renderer.utilities.Point(0,0);
                
        }

        return center;
    };
    
