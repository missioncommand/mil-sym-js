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
                    rect = new Rectangle(-1275,-951,2550,1902);
                    break;
            case 806://HG
            case 807:
            case 808:
                    rect = new Rectangle(-1280,-1280,2560,2560);
                    break;
            case 809://NG
            case 810:
            case 811:
                    rect = new Rectangle(-975,-975,1950,1950);
                    break;
            case 812://FE
            case 813:
            case 814:
                    rect = new Rectangle(-1045,-1045,2090,2090);
                    break;
            case 816://HA/S
            case 817:
            case 818:
            case 840:
            case 841:
            case 842:
                    rect = new Rectangle(-975,-1410,1950,2160);//
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
                    rect = new Rectangle(-975,-750,1950,2160);//{x : 0, y:-7, width:50.3,height:53}
                    break;
            case 831://FSub
            case 832:
            case 833:
                    rect = new Rectangle(-952,-750,1904,1960);//y=-5
                    break;
            case 834://NSub
            case 835:
            case 836:
                    rect = new Rectangle(-952,-750,1904,1961);//y=-5
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
        var Rectangle = armyc2.c2sd.renderer.so.Rectangle;
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
                case (59046 === index || index === 60046):
                        rect = new Rectangle(-589,-392,1178,795);
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
                case (59092 <= index && index <= 59112)://Sea Surface/subsurface Control Station
                case (60092 <= index && index <= 60125):
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
                        rect = new Rectangle(-405,-994,810,994);
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
                case (59024 <= index && index <= 59031)://
                case (60024 <= index && index <= 60031):
                        rect = new Rectangle(-705,-480,1410,960);
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
                        rect = new Rectangle(-553,-1442,1106,1442);
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
                        rect = new Rectangle(-600,-600,1200,1200);
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
                        rect = new Rectangle(-500,-998,1000,998);
                        break;
                case (59132 === index || index === 60132)://booby trap
                        rect = new Rectangle(-503,-1007,1006,1281);
                        break;
                case (59133 === index || index === 60133)://unspecified mine
                case (59134 === index || index === 60134)://antitank mine
                        rect = new Rectangle(-402,-401,805,803);
                        break;
                case (59135 === index || index === 60135)://ANTITANK MINE WITH ANTIHANDLING DEVICE
                        rect = new Rectangle(-407,-398,813,1623);
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
                        rect = new Rectangle(-612,-506,1218,886);
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
                        rect = new Rectangle(-648,-574,1298,1026);
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
                case (62000 === index)://low pressure center
                        rect = new Rectangle(-390,-545,777,1096);
                        break;
                case (62001 === index)://LPC Cyclone Center
                        rect = new Rectangle(-444,-544,883,1088);
                        break;
                case (62002 === index)://LPC TROPOPAUSE LOW
                        rect = new Rectangle(-452,-424,896,859);
                        break;
                case (62003 === index)://High Pressure Center
                        rect = new Rectangle(-442,-548,877,1098);
                        break;
                case (62004 === index)://HPC ANTICYCLONE CENTER
                        rect = new Rectangle(-437,-543,870,1100);
                        break;
                case (62005 === index)://HPC TROPOPAUSE HIGH
                        rect = new Rectangle(-451,-424,895,859);
                        break;
                case (62006 === index)://TURBULENCE - LIGHT
                        rect = new Rectangle(-645,-358,1287,718);
                        break;
                case (62007 === index)://TURBULENCE - Moderate
                        rect = new Rectangle(-755,-358,1508,718);
                        break;
                case (62008 === index)://TURBULENCE - Severe
                        rect = new Rectangle(-755,-456,1508,1006);
                        break;
                case (62009 === index)://TURBULENCE - Extreme
                        rect = new Rectangle(-755,-556,1508,1118);
                        break;
                case (62010 === index)://TURBULENCE - Mountain Waves
                        rect = new Rectangle(-405,-201,813,402);
                        break;
                case (62011 === index)://Clear Icing Light, Moderate, severe
                case (62012 === index)://Clear Icing Light, Moderate, severe
                case (62013 === index)://Clear Icing Light, Moderate, severe
                        rect = new Rectangle(-796,-488,1589,971);
                        break;
                case (62014 === index)://Rime Icing Light, Moderate, severe
                case (62015 === index)://Rime Icing Light, Moderate, severe
                case (62016 === index)://Rime Icing Light, Moderate, severe
                        rect = new Rectangle(-796,-488,1589,972);
                        break;
                case (62017 === index)://Mixed Icing Light
                        rect = new Rectangle(-815,-902,1630,1804);
                        break;
                case (62018 === index)://Mixed Icing Moderate, severe
                case (62019 === index)://Mixed Icing Moderate, severe
                        rect = new Rectangle(-1009,-576,2014,1158);
                        break;
                case (62020 === index)://Calm Winds
                        rect = new Rectangle(-500,-500,1000,1000);
                        break;
                case (62021 <= index && index <= 62026)://Calm Winds
                        rect = new Rectangle(-640,-641,1283,1281);
                        break;
                case (62027 === index)://RAIN - INTERMITTENT LIGHT
                        rect = new Rectangle(-141,-141,282,282);
                        break;
                case (62028 === index)://RAIN - INTERMITTENT Continuous
                        rect = new Rectangle(-596,-141,1192,282);
                        break;
                case (62029 === index)://RAIN - INTERMITTENT moderdate
                        rect = new Rectangle(-142,-446,284,892);
                        break;
                case (62030 === index)://RAIN - INTERMITTENT continuous moderdate
                        rect = new Rectangle(-425,-370,850,745);
                        break;
                case (62031 === index)://RAIN - INTERMITTENT heavy
                        rect = new Rectangle(-141,-500,282,1000);
                        break;
                case (62032 === index)://RAIN - INTERMITTENT continuous heavy
                        rect = new Rectangle(-572,-446,1144,892);
                        break;
                case (62033 === index)://freezing rain
                case (62034 === index)://
                        rect = new Rectangle(-800,-413,1600,844);
                        break;
                case (62035 === index)://rain showers
                case (62036 === index)://
                        rect = new Rectangle(-181,-441,362,893);
                        break;
                case (62037 === index)://rain showers
                        rect = new Rectangle(-181,-615,362,1237);
                        break;
                case (62038 === index)://drizzle
                        rect = new Rectangle(-108,-207,222,430);
                        break;
                case (62039 === index)://drizzle
                        rect = new Rectangle(-354,-207,695,430);
                        break;
                case (62040 === index)://drizzle
                        rect = new Rectangle(-108,-520,222,1041);
                        break;
                case (62041 === index)://drizzle
                        rect = new Rectangle(-355,-471,695,950);
                        break;
                case (62042 === index)://drizzle
                        rect = new Rectangle(-108,-721,222,1446);
                        break;
                case (62043 === index)://drizzle
                        rect = new Rectangle(-449,-576,890,1443);
                        break;
                case (62044 === index)://freezing drizzle
                case (62045 === index)://
                        rect = new Rectangle(-800,-413,1600,844);
                        break;
                case (62046 === index)://rain or drizzle and snow
                        rect = new Rectangle(-250,-546,500,1085);
                        break;
                case (62047 === index)://
                        rect = new Rectangle(-250,-870,500,1749);
                        break;
                case (62048 === index)://
                        rect = new Rectangle(-250,-787,500,1843);
                        break;
                case (62049 === index)://
                        rect = new Rectangle(-250,-787,500,1828);
                        break;
                case (62050 === index)://
                        rect = new Rectangle(-250,-300,500,600);
                        break;
                case (62051 === index)://
                        rect = new Rectangle(-579,-300,1158,600);
                        break;
                case (62052 === index)://
                        rect = new Rectangle(-250,-655,500,1310);
                        break;
                case (62053 === index)://
                        rect = new Rectangle(-579,-655,1158,1319);
                        break;
                case (62054 === index)://
                        rect = new Rectangle(-250,-1000,500,2009);
                        break;
                case (62055 === index)://
                        rect = new Rectangle(-579,-1000,1158,2009);
                        break;
                case (62056 === index)://blowing snow
                case (62057 === index)://blowing snow
                        rect = new Rectangle(-557,-559,1117,1114);
                        break;
                case (62058 === index)://snow grains
                        rect = new Rectangle(-702,-336,1404,640);
                        break;
                case (62059 === index)://snow showers
                case (62060 === index)://snow showers
                        rect = new Rectangle(-180,-441,360,893);
                        break;
                case (62061 === index)://snow showers
                case (62062 === index)://snow showers
                        rect = new Rectangle(-180,-458,360,910);
                        break;
                case (62063 === index)://ice crystals
                        rect = new Rectangle(-180,-458,360,910);
                        break;
                case (62064 === index)://ice pellets
                        rect = new Rectangle(-400,-336,800,640);
                        break;
                case (62065 === index)://ice pellets
                        rect = new Rectangle(-551,-511,1103,1014);
                        break;
                case (62066 === index)://ice pellets
                        rect = new Rectangle(-551,-671,1103,1362);
                        break;
                case (62067 === index)://thunderstorm
                        rect = new Rectangle(-813,-696,1626,1406);
                        break;
                case (62068 === index)://thunderstorm
                        rect = new Rectangle(-422,-800,850,1600);
                        break;
                case (62069 === index)://thunderstorm
                        rect = new Rectangle(-465,-800,921,1600);
                        break;
                case (62070 === index)://thunderstorm
                        rect = new Rectangle(-379,-800,760,1600);
                        break;
                case (62071 === index)://thunderstorm
                        rect = new Rectangle(-416,-800,821,1600);
                        break;
                case (62072 === index)://funnel cloud
                        rect = new Rectangle(-423,-800,821,1600);
                        break;
                case (62073 === index)://squall
                        rect = new Rectangle(-383,-478,766,939);
                        break;
                case (62074 === index)://lightning
                        rect = new Rectangle(-520,-697,1040,1401);
                        break;
                case (62075 <= index && index <= 62079)://fog
                        rect = new Rectangle(-450,-490,900,980);
                        break;
                case (62080 === index)://fog freezing
                case (62081 === index)://fog freezing
                        rect = new Rectangle(-500,-483,1000,972);
                        break;
                case (62082 === index)://mist
                        rect = new Rectangle(-450,-259,900,518);
                        break;
                case (62083 === index)://smoke
                        rect = new Rectangle(-435,-800,868,1600);
                        break;
                case (62084 === index)://haze
                        rect = new Rectangle(-803,-371,1606,742);
                        break;
                case (62085 === index)://dust sandstorm
                case (62086 === index)://dust sandstorm
                        rect = new Rectangle(-700,-700,1400,1400);
                        break;
                case (62087 === index)://dust devil
                        rect = new Rectangle(-430,-791,848,1597);
                        break;
                case (62088 === index)://blowing dust or sand
                        rect = new Rectangle(-459,-800,918,1600);
                        break;
                case (62089 === index)://tropical depression
                        rect = new Rectangle(-405,-405,813,813);
                        break;
                case (62090 === index)://tropical storm
                case (62091 === index)://hurricane typhoon
                        rect = new Rectangle(-546,-869,1092,1746);
                        break;
                case (62092 === index)://volcanic eruption
                        rect = new Rectangle(-517,-607,1018,1223);
                        break;
                case (62093 === index)://volcanic ash
                        rect = new Rectangle(-400,-429,856,876);
                        break;
                case (62094 === index)://TROPOPAUSE LEVEL
                case (62095 === index)://FREEZING LEVEL
                        rect = new Rectangle(-826,-448,1652,896);
                        break;
                case (62096 === index)://PRECIPITATION OF UNKNOWN TYPE AND INTENSITY
                        rect = new Rectangle(-795,-400,1590,818);
                        break;
                case (62097 <= index && index <= 62116)://stuff
                        rect = new Rectangle(-604,-647,1208,1294);
                        break;
                case (62117 === index)://icebergs
                        rect = new Rectangle(-600,-474,1200,961);
                        break;
                case (62118 === index)://icebergs
                        rect = new Rectangle(-450,-353,1200,715);
                        break;
                case (62119 === index)://belt and strips
                        rect = new Rectangle(-600,-152,1200,315);
                        break;
                case (62120 === index)://iceberg
                case (62121 === index)://iceberg
                        rect = new Rectangle(-600,-474,1200,961);
                        break;
                case (62122 === index)://bergy bit
                case (62123 === index)://bergy bit
                        rect = new Rectangle(-510,-496,1020,1006);
                        break;
                case (62124 === index)://growler
                case (62125 === index)://growler
                        rect = new Rectangle(-510,-386,1020,766);
                        break;
                case (62126 === index)://FLOEBERG
                        rect = new Rectangle(-600,-600,1200,1200);
                        break;
                case (62127 === index)://ice island
                        rect = new Rectangle(-600,-600,1200,1202);
                        break;
                case (62128 === index)://bergy water
                        rect = new Rectangle(-800,-267,1600,544);
                        break;
                case (62129 === index)://water with target
                        rect = new Rectangle(-800,-259,1600,518);
                        break;
                case (62130 === index)://ice free
                        rect = new Rectangle(-600,-233,1200,466);
                        break;
                case (62131 === index)://convergence
                case (62132 === index)://divergence
                        rect = new Rectangle(-698,-130,1396,260);
                        break;
                case (62133 === index)://SHEARING OR SHEAR ZONE
                        rect = new Rectangle(-698,-130,1396,260);
                        break;
                case (62134 === index)://ice drift
                        rect = new Rectangle(-328,-130,650,260);
                        break;
                case (62135 === index)://sea ice 
                        rect = new Rectangle(-328,-405,650,815);
                        break;
                case (62136 === index)://ice thickness
                case (62137 === index)://ice thickness  
                        rect = new Rectangle(-753,-670,1506,1340);
                        break;
                case (62138 === index)://MELT PUDDLES OR FLOODED ICE  
                        rect = new Rectangle(-655,-233,1310,466);
                        break;
                case (62139 === index)://snow cover  
                        rect = new Rectangle(-285,-474,558,964);
                        break;
                case (62140 === index)://SASTRUGI  
                        rect = new Rectangle(-483,-731,966,1475);
                        break;
                case (62141 === index)://RIDGES OR HUMMOCKS  
                        rect = new Rectangle(-600,-294,1200,588);
                        break;
                case (62142 === index)://Rafting  
                        rect = new Rectangle(-600,-414,1200,839);
                        break;
                case (62143 === index)://JAMMED BRASH BARRIER  
                        rect = new Rectangle(-600,-294,1200,588);
                        break;
                case (62144 === index)://soundings  
                        rect = new Rectangle(-504,-521,1005,1054);
                        break;
                case (62145 === index)://berths  
                        rect = new Rectangle(-601,-601,1202,1202);
                        break;
                case (62146 === index)://BERTHS (ANCHOR)
                case (62147 === index)://ports anchorage    
                        rect = new Rectangle(-779,-730,1558,1467);
                        break;
                case (62148 === index)://call in point    
                        rect = new Rectangle(-300,-600,600,1200);
                        break;
                case (62149 === index)://fishing harbor  //FISH STAKES/TRAPS/WEIRS  
                        rect = new Rectangle(-600,-556,1200,1104);
                        break;
                case (62150 === index)://FISH STAKES/TRAPS/WEIRS  
                        rect = new Rectangle(-550,-515,1100,1035);
                        break;
                case (62151 === index)://FISH STAKES  
                        rect = new Rectangle(-600,-509,1200,1033);
                        break;
                case (62152 === index)://Landing place  
                        rect = new Rectangle(-600,-600,1200,1200);
                        break;
                case (62153 === index)://OFFSHORE LOADING FACILITY  
                        rect = new Rectangle(-581,-657,1162,1098);
                        break;
                case (62154 === index)://OFFSHORE LOADING FACILITY  
                        rect = new Rectangle(-600,-38,1200,76);
                        break;
                case (62155 === index)://Landing Ring
                case (62156 === index)://
                case (62159 === index):// Dolphin
                case (62160 === index)://   
                        rect = new Rectangle(-600,-325,1200,650);
                        break;
                case (62157 === index)://ferry crossing
                case (62158 === index)://    cable ferry crossing
                        rect = new Rectangle(-615,-152,1236,304);
                        break;
                case (62161 === index)://beacon
                        rect = new Rectangle(-600,-648,1200,1300);
                        break;
                case (62162 === index)://buoy default
                case (62163 === index)://buoy default
                        rect = new Rectangle(-861,-551,1722,1103);
                        break;
                case (62164 === index)://marker
                        rect = new Rectangle(-396,-523,792,1055);
                        break;
                case (62165 === index)://perches stakes
                        rect = new Rectangle(-406,-406,813,812);
                        break;
                case (62166 === index)://light
                        rect = new Rectangle(-655,-593,1309,1193);
                        break;
                case (62167 === index)://LIGHT VESSEL/LIGHTSHIP
                        rect = new Rectangle(-582,-521,1164,1042);
                        break;
                case (62168 === index)://LIGHTHOUSE
                        rect = new Rectangle(-450,-600,900,1200);
                        break;
                case (62169 === index)://rock submerged
                case (62170 === index)://rock submerged
                        rect = new Rectangle(-436,-433,870,869);
                        break;
                case (62171 === index)://rock awashed
                        rect = new Rectangle(-443,-601,884,1202);
                        break;
                case (62172 === index)://foul ground
                        rect = new Rectangle(-430,-598,861,1196);
                        break;
                case (62173 === index)://kelp/seaweed
                        rect = new Rectangle(-645,-208,1283,422);
                        break;
                case (62174 === index)://mine naval doubtful
                case (62175 === index)://mine naval definite
                        rect = new Rectangle(-383,-598,772,1204);
                        break;
                case (62176 === index)://snags/stumps
                case (62177 === index)://snags/stumps
                case (62179 === index)://wreck submerged
                case (62180 === index)://wreck submerged
                        rect = new Rectangle(-600,-360,1200,712);
                        break;
                case (62178 === index)://wreck uncovers
                        rect = new Rectangle(-698,-834,1396,952);
                        break;
                case (62181 === index)://EDDIES/OVERFALLS/TIDE RIPS
                        rect = new Rectangle(-989,-338,1981,670);
                        break;
                case (62182 === index)://Sand
                        rect = new Rectangle(-472,-603,949,1229);
                        break;
                case (62183 === index)://Mud
                        rect = new Rectangle(-638,-440,1264,875);
                        break;
                case (62184 === index)://Clay
                        rect = new Rectangle(-603,-485,1204,992);
                        break;
                case (62185 === index)://Silt
                        rect = new Rectangle(-594,-545,1201,1096);
                        break;
                case (62186 === index)://Stones
                        rect = new Rectangle(-604,-545,1214,1096);
                        break;
                case (62187 === index)://gravel
                        rect = new Rectangle(-674,-702,1342,1419);
                        break;
                case (62188 === index)://pebbles
                        rect = new Rectangle(-480,-487,971,997);
                        break;
                case (62189 === index)://cobbles
                        rect = new Rectangle(-598,-412,1204,826);
                        break;
                case (62190 === index)://rock
                        rect = new Rectangle(-503,-549,1004,1104);
                        break;
                case (62191 === index)://coral
                        rect = new Rectangle(-608,-398,1209,809);
                        break;
                case (62192 === index)://shell
                        rect = new Rectangle(-597,-451,1194,915);
                        break;
                case (62193 === index)://fine
                        rect = new Rectangle(-424,-603,855,1205);
                        break;
                case (62194 === index)://medium
                        rect = new Rectangle(-596,-400,1202,824);
                        break;
                case (62195 === index)://coarse
                        rect = new Rectangle(-521,-593,1051,1197);
                        break;
                case (62196 === index)://water turbulence
                        rect = new Rectangle(-1002,-335,1997,681);
                        break;
                case (62197 === index)://tide data point
                        rect = new Rectangle(-515,-602,1030,1204);
                        break;
                case (62198 === index)://tide gauge
                case (62199 === index)://tide gauge
                        rect = new Rectangle(-724,-488,1448,976);
                        break;
                case (62200 === index)://Ford
                        rect = new Rectangle(-180,-561,360,1122);
                        break;
                case (62201 === index)://Lock
                        rect = new Rectangle(-357,-442,718,887);
                        break;
                case (62202 === index)://oil/gas rig
                        rect = new Rectangle(-508,-700,1016,1400);
                        break;
                case (62203 === index)://PILE/PILING/POST
                        rect = new Rectangle(-405,-405,813,813);
                        break;
                default:
                        break;
            }
        }
        else if(schema === "E")//EMS Natural Events
        {
            switch(true)
            {
                case (63000 === index)://aftershock
                        rect = new Rectangle(-563,-562,1131,1133);
                        break;
                case (63001 === index)://avalanche
                        rect = new Rectangle(-501,-651,984,1164);
                        break;
                case (63002 === index)://earthquake epicenter
                        rect = new Rectangle(-632,-629,1266,1268);
                        break;
                case (63003 === index)://landslide
                        rect = new Rectangle(-650,-587,1300,1023);
                        break;
                case (63004 === index)://subsidence
                        rect = new Rectangle(-702,-292,1404,585);
                        break;
                case (63005 === index)://volcanic eruption, should use the weather graphic: WAS-WSVE--P----
                        rect = new Rectangle(-0,-0,0,0);
                        break;
                case (63006 === index)://volcanic threat
                        rect = new Rectangle(-565,-512,1131,1027);
                        break;
                case (63007 === index)://drought
                        rect = new Rectangle(-599,-413,1198,805);
                        break;
                case (63008 === index)://flood
                        rect = new Rectangle(-532,-446,1066,895);
                        break;
                case (63009 === index)://inversion
                        rect = new Rectangle(-507,-460,1015,922);
                        break;
                case (63010 === index)://tsunami
                        rect = new Rectangle(-583,-410,1166,823);
                        break;
                case (63011 === index)://bird infestation
                        rect = new Rectangle(-665,-501,1335,1009);
                        break;
                case (63012 === index)://insect infestation
                        rect = new Rectangle(-742,-427,1482,861);
                        break;
                case (63013 === index)://microbial infestation
                        rect = new Rectangle(-670,-273,1341,549);
                        break;
                case (63014 === index)://reptile infestation
                        rect = new Rectangle(-615,-369,1231,741);
                        break;
                case (63015 === index)://rodent infestation
                        rect = new Rectangle(-629,-459,1261,924);
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
    
