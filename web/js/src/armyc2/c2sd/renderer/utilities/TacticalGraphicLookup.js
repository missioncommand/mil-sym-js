var armyc2 = armyc2 || {};
window.armyc2 = armyc2;
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.TacticalGraphicLookup = (function () {
    var symbols = null,
    symbolMap = null,
    parser,
    spMappingXml = {
  "TACTICALGRAPHICS": {
    "SYMBOL": [
      {
        "ID": "G*T*B-----****X",
        "M": "2001",
      },
      {
        "ID": "G*T*H-----****X",
        "M": "2002",
      },
      {
        "ID": "G*T*Y-----****X",
        "M": "2003",
      },
      {
        "ID": "G*T*C-----****X",
        "M": "2004",
      },
      {
        "ID": "G*T*X-----****X",
        "M": "2005",
      },
      {
        "ID": "G*T*J-----****X",
        "M": "2006",
      },
      {
        "ID": "G*T*K-----****X",
        "M": "2007",
      },
      {
        "ID": "G*T*KF----****X",
        "M": "2008",
      },
      {
        "ID": "G*T*L-----****X",
        "M": "2009",
      },
      {
        "ID": "G*T*T-----****X",
        "M": "2011",
      },
      {
        "ID": "G*T*F-----****X",
        "M": "2012",
      },
      {
        "ID": "G*T*A-----****X",
        "M": "2013",
      },
      {
        "ID": "G*T*AS----****X",
        "M": "2014",
      },
      {
        "ID": "G*T*E-----****X",
        "M": "2016",
      },
      {
        "ID": "G*T*O-----****X",
        "M": "2018",
      },
      {
        "ID": "G*T*P-----****X",
        "M": "2019",
      },
      {
        "ID": "G*T*R-----****X",
        "M": "2020",
      },
      {
        "ID": "G*T*Q-----****X",
        "M": "2021",
      },
      {
        "ID": "G*T*M-----****X",
        "M": "2022",
      },
      {
        "ID": "G*T*S-----****X",
        "M": "2023",
      },
      {
        "ID": "G*T*US----****X",
        "M": "2024",
      },
      {
        "ID": "G*T*UG----****X",
        "M": "2025",
      },
      {
        "ID": "G*T*UC----****X",
        "M": "2026",
      },
      {
        "ID": "G*T*Z-----****X",
        "M": "2027",
      },
      {
        "ID": "G*T*W-----****X",
        "M": "2028",
      },
      {
        "ID": "G*T*WP----****X",
        "M": "2029",
      },
      {
        "ID": "G*T*V-----****X",
        "M": "2016",
      },
      {
        "ID": "G*T*2-----****X",
        "M": "2016",
      },
      {
        "ID": "G*G*GLB---****X",
        "M": "2030",
      },
      {
        "ID": "G*G*GLF---****X",
        "M": "2031",
      },
      {
        "ID": "G*G*GLC---****X",
        "M": "2032",
      },
      {
        "ID": "G*G*GLP---****X",
        "M": "2033",
      },
      {
        "ID": "G*G*GLL---****X",
        "M": "2034",
      },
      {
        "ID": "G*G*GAG---****X",
        "M": "2035",
      },
      {
        "ID": "G*G*GAA---****X",
        "M": "2036",
      },
      {
        "ID": "G*G*GAE---****X",
        "M": "2037",
      },
      {
        "ID": "G*G*GAF---****X",
        "M": "2038",
      },
      {
        "ID": "G*G*GAD---****X",
        "M": "2039",
      },
      {
        "ID": "G*G*GAX---****X",
        "M": "2040",
      },
      {
        "ID": "G*G*GAL---****X",
        "M": "2041",
      },
      {
        "ID": "G*G*GAP---****X",
        "M": "2042",
      },
      {
        "ID": "G*G*GAS---****X",
        "M": "2043",
      },
      {
        "ID": "G*G*GAY---****X",
        "M": "2044",
      },
      {
        "ID": "G*G*GAZ---****X",
        "M": "2045",
      },
      {
        "ID": "G*G*ALC---****X",
        "M": "2046",
      },
      {
        "ID": "G*G*ALM---****X",
        "M": "2047",
      },
      {
        "ID": "G*G*ALS---****X",
        "M": "2048",
      },
      {
        "ID": "G*G*ALU---****X",
        "M": "2049",
      },
      {
        "ID": "G*G*ALL---****X",
        "M": "2050",
      },
      {
        "ID": "G*G*AAR---****X",
        "M": "2051",
      },
      {
        "ID": "G*G*AAF---2525C",
        "M": "2052",
      },
      {
        "ID": "G*G*AAF---****X",
        "M": "2053",
      },
      {
        "ID": "G*G*AAH---****X",
        "M": "2054",
      },
      {
        "ID": "G*G*AAM---****X",
        "M": "2055",
      },
      {
        "ID": "G*G*AAML--****X",
        "M": "2056",
      },
      {
        "ID": "G*G*AAMH--****X",
        "M": "2057",
      },
      {
        "ID": "G*G*AAW---****X",
        "M": "2058",
      },
      {
        "ID": "G*G*PD----****X",
        "M": "2059",
      },
      {
        "ID": "G*G*PA----****X",
        "M": "2060",
      },
      {
        "ID": "G*G*PF----****X",
        "M": "2061",
      },
      {
        "ID": "G*G*PM----****X",
        "M": "2062",
      },
      {
        "ID": "G*G*PY----****X",
        "M": "2063",
      },
      {
        "ID": "G*G*PC----****X",
        "M": "2064",
      },
      {
        "ID": "G*G*DLF---****X",
        "M": "2065",
      },
      {
        "ID": "G*G*DLP---****X",
        "M": "2066",
      },
      {
        "ID": "G*G*DAB---****X",
        "M": "2067",
      },
      {
        "ID": "G*G*DABP--****X",
        "M": "2068",
      },
      {
        "ID": "G*G*DAE---****X",
        "M": "2069",
      },
      {
        "ID": "G*G*OLAV--****X",
        "M": "2070",
      },
      {
        "ID": "G*G*OLAA--****X",
        "M": "2071",
      },
      {
        "ID": "G*G*OLAR--****X",
        "M": "2072",
      },
      {
        "ID": "G*G*OLAGM-****X",
        "M": "2073",
      },
      {
        "ID": "G*G*OLAGS-****X",
        "M": "2074",
      },
      {
        "ID": "G*G*OLKA--****X",
        "M": "2075",
      },
      {
        "ID": "G*G*OLKGM-****X",
        "M": "2076",
      },
      {
        "ID": "G*G*OLKGS-****X",
        "M": "2077",
      },
      {
        "ID": "G*G*OLF---****X",
        "M": "2078",
      },
      {
        "ID": "G*G*OLI---****X",
        "M": "2079",
      },
      {
        "ID": "G*G*OLL---****X",
        "M": "2080",
      },
      {
        "ID": "G*G*OLT---****X",
        "M": "2081",
      },
      {
        "ID": "G*G*OLC---****X",
        "M": "2082",
      },
      {
        "ID": "G*G*OLP---****X",
        "M": "2083",
      },
      {
        "ID": "G*G*OAA---****X",
        "M": "2084",
      },
      {
        "ID": "G*G*OAK---****X",
        "M": "2085",
      },
      {
        "ID": "G*G*OAF---****X",
        "M": "2086",
      },
      {
        "ID": "G*G*OAS---****X",
        "M": "2087",
      },
      {
        "ID": "G*G*OAO---****X",
        "M": "2088",
      },
      {
        "ID": "G*G*OAP---****X",
        "M": "2089",
      },
      {
        "ID": "G*G*SLA---****X",
        "M": "2090",
      },
      {
        "ID": "G*G*SLH---****X",
        "M": "2091",
      },
      {
        "ID": "G*G*SLR---****X",
        "M": "2092",
      },
      {
        "ID": "G*G*SLB---****X",
        "M": "2093",
      },
      {
        "ID": "G*G*SAO---****X",
        "M": "2094",
      },
      {
        "ID": "G*G*SAA---****X",
        "M": "2095",
      },
      {
        "ID": "G*G*SAE---****X",
        "M": "2096",
      },
      {
        "ID": "G*G*SAN---****X",
        "M": "2097",
      },
      {
        "ID": "G*G*SAT---****X",
        "M": "2098",
      },
      {
        "ID": "G*M*OGB---****X",
        "M": "2099",
      },
      {
        "ID": "G*M*OGL---****X",
        "M": "2100",
      },
      {
        "ID": "G*M*OGZ---****X",
        "M": "2101",
      },
      {
        "ID": "G*M*OGF---****X",
        "M": "2102",
      },
      {
        "ID": "G*M*OGR---****X",
        "M": "2103",
      },
      {
        "ID": "G*M*OS----****X",
        "M": "2104",
      },
      {
        "ID": "G*M*OADU--****X",
        "M": "2105",
      },
      {
        "ID": "G*M*OADC--****X",
        "M": "2106",
      },
      {
        "ID": "G*M*OAR---****X",
        "M": "2107",
      },
      {
        "ID": "G*M*OAW---****X",
        "M": "2108",
      },
      {
        "ID": "G*M*OMC---****X",
        "M": "2109",
      },
      {
        "ID": "G*M*OFD---****X",
        "M": "2110",
      },
      {
        "ID": "G*M*OFG---****X",
        "M": "2111",
      },
      {
        "ID": "G*M*OFA---****X",
        "M": "2112",
      },
      {
        "ID": "G*M*OEB---****X",
        "M": "2113",
      },
      {
        "ID": "G*M*OEF---****X",
        "M": "2114",
      },
      {
        "ID": "G*M*OET---****X",
        "M": "2115",
      },
      {
        "ID": "G*M*OED---****X",
        "M": "2116",
      },
      {
        "ID": "G*M*OU----****X",
        "M": "2117",
      },
      {
        "ID": "G*M*ORP---****X",
        "M": "2118",
      },
      {
        "ID": "G*M*ORS---****X",
        "M": "2119",
      },
      {
        "ID": "G*M*ORA---****X",
        "M": "2120",
      },
      {
        "ID": "G*M*ORC---****X",
        "M": "2121",
      },
      {
        "ID": "G*M*OT----****X",
        "M": "2122",
      },
      {
        "ID": "G*M*OWU---****X",
        "M": "2123",
      },
      {
        "ID": "G*M*OWS---****X",
        "M": "2124",
      },
      {
        "ID": "G*M*OWD---****X",
        "M": "2125",
      },
      {
        "ID": "G*M*OWA---****X",
        "M": "2126",
      },
      {
        "ID": "G*M*OWL---****X",
        "M": "2127",
      },
      {
        "ID": "G*M*OWH---****X",
        "M": "2128",
      },
      {
        "ID": "G*M*OWCS--****X",
        "M": "2129",
      },
      {
        "ID": "G*M*OWCD--****X",
        "M": "2130",
      },
      {
        "ID": "G*M*OWCT--****X",
        "M": "2131",
      },
      {
        "ID": "G*M*OHO---****X",
        "M": "2133",
      },
      {
        "ID": "G*M*BDE---****X",
        "M": "2134",
      },
      {
        "ID": "G*M*BDD---****X",
        "M": "2135",
      },
      {
        "ID": "G*M*BDI---****X",
        "M": "2136",
      },
      {
        "ID": "G*M*BCA---****X",
        "M": "2137",
      },
      {
        "ID": "G*M*BCB---****X",
        "M": "2138",
      },
      {
        "ID": "G*M*BCF---****X",
        "M": "2139",
      },
      {
        "ID": "G*M*BCE---****X",
        "M": "2140",
      },
      {
        "ID": "G*M*BCD---****X",
        "M": "2141",
      },
      {
        "ID": "G*M*BCL---****X",
        "M": "2142",
      },
      {
        "ID": "G*M*BCR---****X",
        "M": "2143",
      },
      {
        "ID": "G*M*SL----****X",
        "M": "2144",
      },
      {
        "ID": "G*M*SW----****X",
        "M": "2145",
      },
      {
        "ID": "G*M*SP----****X",
        "M": "2146",
      },
      {
        "ID": "G*M*NM----****X",
        "M": "2147",
      },
      {
        "ID": "G*M*NR----****X",
        "M": "2148",
      },
      {
        "ID": "G*M*NB----****X",
        "M": "2149",
      },
      {
        "ID": "G*M*NC----****X",
        "M": "2150",
      },
      {
        "ID": "G*M*NL----****X",
        "M": "2151",
      },
      {
        "ID": "G*F*LT----****X",
        "M": "2152",
      },
      {
        "ID": "G*F*LTS---****X",
        "M": "2153",
      },
      {
        "ID": "G*F*LTF---****X",
        "M": "2154",
      },
      {
        "ID": "G*F*LCF---****X",
        "M": "2155",
      },
      {
        "ID": "G*F*LCC---****X",
        "M": "2156",
      },
      {
        "ID": "G*F*LCN---****X",
        "M": "2157",
      },
      {
        "ID": "G*F*LCR---****X",
        "M": "2158",
      },
      {
        "ID": "G*F*LCM---****X",
        "M": "2159",
      },
      {
        "ID": "G*F*AT----****X",
        "M": "2160",
      },
      {
        "ID": "G*F*ATR---****X",
        "M": "2161",
      },
      {
        "ID": "G*F*ATC---****X",
        "M": "2162",
      },
      {
        "ID": "G*F*ATG---****X",
        "M": "2163",
      },
      {
        "ID": "G*F*ATS---****X",
        "M": "2164",
      },
      {
        "ID": "G*F*ATB---****X",
        "M": "2165",
      },
      {
        "ID": "G*F*ACSI--****X",
        "M": "2166",
      },
      {
        "ID": "G*F*ACSR--****X",
        "M": "2167",
      },
      {
        "ID": "G*F*ACSC--****X",
        "M": "2168",
      },
      {
        "ID": "G*F*ACAI--****X",
        "M": "2169",
      },
      {
        "ID": "G*F*ACAR--****X",
        "M": "2170",
      },
      {
        "ID": "G*F*ACAC--****X",
        "M": "2171",
      },
      {
        "ID": "G*F*ACFI--****X",
        "M": "2172",
      },
      {
        "ID": "G*F*ACFR--****X",
        "M": "2173",
      },
      {
        "ID": "G*F*ACFC--****X",
        "M": "2174",
      },
      {
        "ID": "G*F*ACNI--****X",
        "M": "2175",
      },
      {
        "ID": "G*F*ACNR--****X",
        "M": "2176",
      },
      {
        "ID": "G*F*ACNC--****X",
        "M": "2177",
      },
      {
        "ID": "G*F*ACRI--****X",
        "M": "2178",
      },
      {
        "ID": "G*F*ACRR--****X",
        "M": "2179",
      },
      {
        "ID": "G*F*ACRC--****X",
        "M": "2180",
      },
      {
        "ID": "G*F*ACPR--****X",
        "M": "2181",
      },
      {
        "ID": "G*F*ACPC--****X",
        "M": "2182",
      },
      {
        "ID": "G*F*AZII--****X",
        "M": "2183",
      },
      {
        "ID": "G*F*AZIR--****X",
        "M": "2184",
      },
      {
        "ID": "G*F*AZIC--****X",
        "M": "2185",
      },
      {
        "ID": "G*F*AZXI--****X",
        "M": "2186",
      },
      {
        "ID": "G*F*AZXR--****X",
        "M": "2187",
      },
      {
        "ID": "G*F*AZXC--****X",
        "M": "2188",
      },
      {
        "ID": "G*F*AZSI--****X",
        "M": "2189",
      },
      {
        "ID": "G*F*ACEI--****X",
        "M": "2189",
      },
      {
        "ID": "G*F*AZSR--****X",
        "M": "2190",
      },
      {
        "ID": "G*F*ACER--****X",
        "M": "2190",
      },
      {
        "ID": "G*F*AZSC--****X",
        "M": "2191",
      },
      {
        "ID": "G*F*ACEC--****X",
        "M": "2191",
      },
      {
        "ID": "G*F*AZCI--****X",
        "M": "2192",
      },
      {
        "ID": "G*F*AZCR--****X",
        "M": "2193",
      },
      {
        "ID": "G*F*AZCC--****X",
        "M": "2194",
      },
      {
        "ID": "G*F*AZDI--****X",
        "M": "2195",
      },
      {
        "ID": "G*F*ACDI--****X",
        "M": "2195",
      },
      {
        "ID": "G*F*AZDR--****X",
        "M": "2196",
      },
      {
        "ID": "G*F*ACDR--****X",
        "M": "2196",
      },
      {
        "ID": "G*F*AZDC--****X",
        "M": "2197",
      },
      {
        "ID": "G*F*ACDC--****X",
        "M": "2197",
      },
      {
        "ID": "G*F*AZFI--****X",
        "M": "2217",
      },
      {
        "ID": "G*F*AZFR--****X",
        "M": "2218",
      },
      {
        "ID": "G*F*AZFC--****X",
        "M": "1052",
      },
      {
        "ID": "G*F*AZZI--****X",
        "M": "2198",
      },
      {
        "ID": "G*F*ACZI--****X",
        "M": "2198",
      },
      {
        "ID": "G*F*AZZR--****X",
        "M": "2199",
      },
      {
        "ID": "G*F*ACZR--****X",
        "M": "2199",
      },
      {
        "ID": "G*F*AZZC--****X",
        "M": "2200",
      },
      {
        "ID": "G*F*ACZC--****X",
        "M": "2200",
      },
      {
        "ID": "G*F*AZBI--****X",
        "M": "2201",
      },
      {
        "ID": "G*F*ACBI--****X",
        "M": "2201",
      },
      {
        "ID": "G*F*AZBR--****X",
        "M": "2202",
      },
      {
        "ID": "G*F*ACBR--****X",
        "M": "2202",
      },
      {
        "ID": "G*F*AZBC--****X",
        "M": "2203",
      },
      {
        "ID": "G*F*ACBC--****X",
        "M": "2203",
      },
      {
        "ID": "G*F*AZVI--****X",
        "M": "2204",
      },
      {
        "ID": "G*F*ACVI--****X",
        "M": "2204",
      },
      {
        "ID": "G*F*AZVR--****X",
        "M": "2205",
      },
      {
        "ID": "G*F*ACVR--****X",
        "M": "2205",
      },
      {
        "ID": "G*F*AZVC--****X",
        "M": "2206",
      },
      {
        "ID": "G*F*ACVC--****X",
        "M": "2206",
      },
      {
        "ID": "G*F*ACT---****X",
        "M": "2210",
      },
      {
        "ID": "G*F*AXC---****X",
        "M": "2207",
      },
      {
        "ID": "G*F*AXS---****X",
        "M": "2208",
      },
      {
        "ID": "G*F*AKBC--****X",
        "M": "2219",
      },
      {
        "ID": "G*F*AKBI--****X",
        "M": "2220",
      },
      {
        "ID": "G*F*AKBR--****X",
        "M": "2221",
      },
      {
        "ID": "G*F*AKPC--****X",
        "M": "2222",
      },
      {
        "ID": "G*F*AKPI--****X",
        "M": "2223",
      },
      {
        "ID": "G*F*AKPR--****X",
        "M": "2224",
      },
      {
        "ID": "G*S*LCM---****X",
        "M": "2226",
      },
      {
        "ID": "G*S*LCH---****X",
        "M": "2227",
      },
      {
        "ID": "G*S*LRM---****X",
        "M": "2228",
      },
      {
        "ID": "G*S*LRA---****X",
        "M": "2229",
      },
      {
        "ID": "G*S*LRO---****X",
        "M": "2230",
      },
      {
        "ID": "G*S*LRT---****X",
        "M": "2231",
      },
      {
        "ID": "G*S*LRW---****X",
        "M": "2232",
      },
      {
        "ID": "G*S*AD----****X",
        "M": "2233",
      },
      {
        "ID": "G*S*AE----****X",
        "M": "2234",
      },
      {
        "ID": "G*S*AR----****X",
        "M": "2235",
      },
      {
        "ID": "G*S*AH----****X",
        "M": "2236",
      },
      {
        "ID": "G*S*ASB---****X",
        "M": "2237",
      },
      {
        "ID": "G*S*ASD---****X",
        "M": "2238",
      },
      {
        "ID": "G*S*ASR---****X",
        "M": "2239",
      },
      {
        "ID": "G*O*HN----****X",
        "M": "2240",
      },
      {
        "ID": "G*O*B-----****X",
        "M": "2241",
      },
      {
        "ID": "G*O*BE----****X",
        "M": "2242",
      },
      {
        "ID": "G*O*BA----****X",
        "M": "2243",
      },
      {
        "ID": "G*O*BT----****X",
        "M": "2244",
      },
      {
        "ID": "G*O*BO----****X",
        "M": "2245",
      },
      {
        "ID": "WA-DPFC----L---",
        "M": "3000",
      },
      {
        "ID": "WA-DPFCU---L---",
        "M": "3001",
      },
      {
        "ID": "WA-DPFC-FG-L---",
        "M": "3002",
      },
      {
        "ID": "WA-DPFC-FY-L---",
        "M": "3003",
      },
      {
        "ID": "WA-DPFW----L---",
        "M": "3004",
      },
      {
        "ID": "WA-DPFWU---L---",
        "M": "3005",
      },
      {
        "ID": "WA-DPFW-FG-L---",
        "M": "3006",
      },
      {
        "ID": "WA-DPFW-FY-L---",
        "M": "3007",
      },
      {
        "ID": "WA-DPFO----L---",
        "M": "3008",
      },
      {
        "ID": "WA-DPFOU---L---",
        "M": "3009",
      },
      {
        "ID": "WA-DPFO-FY-L---",
        "M": "3010",
      },
      {
        "ID": "WA-DPFS----L---",
        "M": "3011",
      },
      {
        "ID": "WA-DPFSU---L---",
        "M": "3012",
      },
      {
        "ID": "WA-DPFS-FG-L---",
        "M": "3013",
      },
      {
        "ID": "WA-DPFS-FY-L---",
        "M": "3014",
      },
      {
        "ID": "WA-DPXT----L---",
        "M": "3015",
      },
      {
        "ID": "WA-DPXR----L---",
        "M": "3016",
      },
      {
        "ID": "WA-DPXSQ---L---",
        "M": "3017",
      },
      {
        "ID": "WA-DPXIL---L---",
        "M": "3018",
      },
      {
        "ID": "WA-DPXSH---L---",
        "M": "3019",
      },
      {
        "ID": "WA-DPXITCZ-L---",
        "M": "3020",
      },
      {
        "ID": "WA-DPXCV---L---",
        "M": "3021",
      },
      {
        "ID": "WA-DPXITD--L---",
        "M": "3022",
      },
      {
        "ID": "WAS-WP----P----",
        "M": "3023",
      },
      {
        "ID": "WA-DWJ-----L---",
        "M": "3030",
      },
      {
        "ID": "WA-DWS-----L---",
        "M": "3031",
      },
      {
        "ID": "WA-DWSTSWA--A--",
        "M": "3032",
      },
      {
        "ID": "WA-DBAIF----A--",
        "M": "3034",
      },
      {
        "ID": "WA-DBAMV----A--",
        "M": "3035",
      },
      {
        "ID": "WA-DBATB----A--",
        "M": "3036",
      },
      {
        "ID": "WA-DBAI-----A--",
        "M": "3037",
      },
      {
        "ID": "WA-DBALPNC--A--",
        "M": "3038",
      },
      {
        "ID": "WA-DBALPC---A--",
        "M": "3039",
      },
      {
        "ID": "WA-DBAFP----A--",
        "M": "3040",
      },
      {
        "ID": "WA-DBAT-----A--",
        "M": "3041",
      },
      {
        "ID": "WA-DBAFG----A--",
        "M": "3042",
      },
      {
        "ID": "WA-DBAD-----A--",
        "M": "3043",
      },
      {
        "ID": "WA-DBAFF----A--",
        "M": "3044",
      },
      {
        "ID": "WA-DIPIB---L---",
        "M": "3045",
      },
      {
        "ID": "WA-DIPCO---L---",
        "M": "3046",
      },
      {
        "ID": "WA-DIPIS---L---",
        "M": "3047",
      },
      {
        "ID": "WA-DIPIT---L---",
        "M": "3048",
      },
      {
        "ID": "WA-DIPID---L---",
        "M": "3049",
      },
      {
        "ID": "WA-DIPTH---L---",
        "M": "3050",
      },
      {
        "ID": "WA-DIPFF---L---",
        "M": "3051",
      },
      {
        "ID": "WO-DILOV---L---",
        "M": "3052",
      },
      {
        "ID": "WO-DILUC---L---",
        "M": "3053",
      },
      {
        "ID": "WO-DILOR---L---",
        "M": "3054",
      },
      {
        "ID": "WO-DILIEO--L---",
        "M": "3055",
      },
      {
        "ID": "WO-DILIEE--L---",
        "M": "3056",
      },
      {
        "ID": "WO-DILIER--L---",
        "M": "3057",
      },
      {
        "ID": "WO-DIOC----L---",
        "M": "3058",
      },
      {
        "ID": "WO-DIOCS---L---",
        "M": "3059",
      },
      {
        "ID": "WO-DIOL----L---",
        "M": "3060",
      },
      {
        "ID": "WO-DIOLF---L---",
        "M": "3061",
      },
      {
        "ID": "WO-DHDDL---L---",
        "M": "3062",
      },
      {
        "ID": "WO-DHDDC---L---",
        "M": "3063",
      },
      {
        "ID": "WO-DHDDA----A--",
        "M": "3064",
      },
      {
        "ID": "WO-DHCC----L---",
        "M": "3065",
      },
      {
        "ID": "WO-DHCI-----A--",
        "M": "3066",
      },
      {
        "ID": "WO-DHCB-----A--",
        "M": "3067",
      },
      {
        "ID": "WO-DHCW-----A--",
        "M": "3068",
      },
      {
        "ID": "WO-DHCF----L---",
        "M": "3069",
      },
      {
        "ID": "WO-DHCF-----A--",
        "M": "3070",
      },
      {
        "ID": "WO-DHPBA---L---",
        "M": "3071",
      },
      {
        "ID": "WO-DHPBA----A--",
        "M": "3072",
      },
      {
        "ID": "WO-DHPBP---L---",
        "M": "3073",
      },
      {
        "ID": "WOS-HPFF----A--",
        "M": "3074",
      },
      {
        "ID": "WO-DHPMD----A--",
        "M": "3075",
      },
      {
        "ID": "WO-DHPMO---L---",
        "M": "3076",
      },
      {
        "ID": "WO-DHPMO----A--",
        "M": "3077",
      },
      {
        "ID": "WO-DHPMRA--L---",
        "M": "3078",
      },
      {
        "ID": "WO-DHPMRB--L---",
        "M": "3079",
      },
      {
        "ID": "WO-DHPSPA--L---",
        "M": "3080",
      },
      {
        "ID": "WO-DHPSPB--L---",
        "M": "3081",
      },
      {
        "ID": "WO-DHPSPS--L---",
        "M": "3082",
      },
      {
        "ID": "WO-DHABP----A--",
        "M": "3083",
      },
      {
        "ID": "WO-DHALLA--L---",
        "M": "3084",
      },
      {
        "ID": "WO-DHHD-----A--",
        "M": "3085",
      },
      {
        "ID": "WO-DHHDF----A--",
        "M": "3200",
      },
      {
        "ID": "WO-DHHDK----A--",
        "M": "3201",
      },
      {
        "ID": "WO-DHHDB---L---",
        "M": "3086",
      },
      {
        "ID": "WOS-HHDR---L---",
        "M": "3087",
      },
      {
        "ID": "WO-DHHDD----A--",
        "M": "3089",
      },
      {
        "ID": "WO-DTCCCFE-L---",
        "M": "3090",
      },
      {
        "ID": "WO-DTCCCFF-L---",
        "M": "3091",
      },
      {
        "ID": "WO-DOBVA----A--",
        "M": "3092",
      },
      {
        "ID": "WO-DOBVB----A--",
        "M": "3092",
      },
      {
        "ID": "WO-DOBVC----A--",
        "M": "3092",
      },
      {
        "ID": "WO-DOBVD----A--",
        "M": "3092",
      },
      {
        "ID": "WO-DOBVE----A--",
        "M": "3092",
      },
      {
        "ID": "WO-DOBVF----A--",
        "M": "3092",
      },
      {
        "ID": "WO-DOBVG----A--",
        "M": "3092",
      },
      {
        "ID": "WO-DOBVH----A--",
        "M": "3092",
      },
      {
        "ID": "WO-DOBVI----A--",
        "M": "3092",
      },
      {
        "ID": "WO-DBSF-----A--",
        "M": "3093",
      },
      {
        "ID": "WO-DBSG-----A--",
        "M": "3094",
      },
      {
        "ID": "WO-DBSM-----A--",
        "M": "3095",
      },
      {
        "ID": "WO-DBST-----A--",
        "M": "3096",
      },
      {
        "ID": "WO-DGMSR----A--",
        "M": "3097",
      },
      {
        "ID": "WO-DGMSC----A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMSSVS--A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMSSC---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMSSM---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMSSF---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMSSVF--A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMSIVF--A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMSIF---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMSIM---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMSIC---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMSB----A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMS-CO--A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMS-PH--A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMS-SH--A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGML-----A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMN-----A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMRS----A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMRM----A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMRR----A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMCL----A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMCM----A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMCH----A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMIBA---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMIBB---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMIBC---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMIBD---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMIBE---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBCA---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBCB---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBCC---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBTA---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBTB---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBTC---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBTD---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBTE---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBTF---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBTG---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBTH---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DGMBTI---A--",
        "M": "3098",
      },
      {
        "ID": "WO-DL-ML---L---",
        "M": "3099",
      },
      {
        "ID": "WO-DL-MA----A--",
        "M": "3100",
      },
      {
        "ID": "WO-DL-RA---L---",
        "M": "3101",
      },
      {
        "ID": "WO-DL-SA----A--",
        "M": "3102",
      },
      {
        "ID": "WO-DL-TA----A--",
        "M": "3103",
      },
      {
        "ID": "WO-DL-O-----A--",
        "M": "3104",
      },
      {
        "ID": "WO-DMCA----L---",
        "M": "3105",
      },
      {
        "ID": "WO-DMCC-----A--",
        "M": "3106",
      },
      {
        "ID": "WO-DMCD----L---",
        "M": "3107",
      },
      {
        "ID": "WO-DMOA-----A--",
        "M": "3108",
      },
      {
        "ID": "WO-DMPA----L---",
        "M": "3109",
      },
      {
        "ID": "CYLINDER-------",
        "M": "900",
      },
      {
        "ID": "ORBIT----------",
        "M": "900",
      },
      {
        "ID": "ROUTE----------",
        "M": "900",
      },
      {
        "ID": "POLYGON--------",
        "M": "900",
      },
      {
        "ID": "RADARC---------",
        "M": "900",
      },
      {
        "ID": "POLYARC--------",
        "M": "900",
      },
      {
        "ID": "CAKE-----------",
        "M": "900",
      },
      {
        "ID": "TRACK----------",
        "M": "900",
      },
      {
        "ID": "CURTAIN--------",
        "M": "900",
      }
    ]
  }
};


return{    
    
    init: function ()
    {
        var i,
        data = null,
        symbol = null,
        count;

        //symbolDefTable
        if(symbolMap===null)
        {
            symbols = spMappingXml.TACTICALGRAPHICS.SYMBOL;
            spMappingXml = null;
            symbolMap = {};
            this.parser = null;
            count = symbols.length;
            for (i = 0; i < count; i += 1) {
                symbol = symbols[i];
                //Firefox and IE parsers handle things differently
                if (symbol !== null) {

                    data = {};
                    data.symbolID = symbol["ID"] || ""; //SYMBOLID
                    data.mapping = symbol["M"] || ""; //MAPPING
					
					if(data.mapping !== "")
							data.mapping = (parseInt(data.mapping) + 57000) + "";
                    
                } 
                if((symbolMap[data.symbolID])===undefined)
                {
                    symbolMap[data.symbolID] = data;
                }
            }
        }

    },
    getCharCodeFromSymbol: function (symbolID, symStd) 
    {
        try
        {
            var basicID = symbolID;
            var returnVal = null;
            if(armyc2.c2sd.renderer.utilities.SymbolUtilities.is3dAirspace(symbolID)===false)
            {
                basicID = armyc2.c2sd.renderer.utilities.SymbolUtilities.getBasicSymbolIDStrict(symbolID);
            }   
            if(basicID in symbolMap)
            {
                returnVal = symbolMap[basicID].mapping;
                if(returnVal === "59053")
                {
                  if(symStd === null || symStd === undefined)
                    symStd = armyc2.c2sd.renderer.utilities.RendererSettings.getSymbologyStandard();
                  if(symStd === 1)
                    returnVal = "59052";//2052 is SHORADEZ(2525C), 2053 is FAADEZ 2525B.  
                  //Both share the same symbolID G*G*AAF--------

                }
                
                  
            }
            
            return returnVal;
        }
        catch(err)
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("TacticalGraphicLookup",
                "getCharCodeFromSymbol",err);
        }

    }
    
};
}());