var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.TacticalGraphicLookup = (function () {
    var symbols = null,
    symbolMap = null,
    parser,
    //spMappingXml =  '<TACTICALGRAPHICS><SYMBOL><SYMBOLID>G*T*B-----****X</SYMBOLID><MAPPING>2001</MAPPING><DESCRIPTION>Tactical Graphics_ Tasks_Block</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*H-----****X</SYMBOLID><MAPPING>2002</MAPPING><DESCRIPTION>Tactical Graphics_ Tasks_Breach</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*Y-----****X</SYMBOLID><MAPPING>2003</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Bypass</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*C-----****X</SYMBOLID><MAPPING>2004</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Canalize</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*X-----****X</SYMBOLID><MAPPING>2005</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Clear</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*J-----****X</SYMBOLID><MAPPING>2006</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Contain</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*K-----****X</SYMBOLID><MAPPING>2007</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Counterattach (CATK)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*KF----****X</SYMBOLID><MAPPING>2008</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Counterattack (CATK)_Counterattack By Fire</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*L-----****X</SYMBOLID><MAPPING>2009</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Delay</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*T-----****X</SYMBOLID><MAPPING>2011</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Disrupt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*F-----****X</SYMBOLID><MAPPING>2012</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Fix</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*A-----****X</SYMBOLID><MAPPING>2013</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Follow And Assume</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*AS----****X</SYMBOLID><MAPPING>2014</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Follow And Assume_Follow And Support</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*E-----****X</SYMBOLID><MAPPING>2016</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Isolate</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*O-----****X</SYMBOLID><MAPPING>2018</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Occupy</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*P-----****X</SYMBOLID><MAPPING>2019</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Penetrate</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*R-----****X</SYMBOLID><MAPPING>2020</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Relief In Place (RIP)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*Q-----****X</SYMBOLID><MAPPING>2021</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Retain</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*M-----****X</SYMBOLID><MAPPING>2022</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Retirement</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*S-----****X</SYMBOLID><MAPPING>2023</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Secure</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*US----****X</SYMBOLID><MAPPING>2024</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Security_Screen</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*UG----****X</SYMBOLID><MAPPING>2025</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Security_Guard</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*UC----****X</SYMBOLID><MAPPING>2026</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Security_Cover</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*Z-----****X</SYMBOLID><MAPPING>2027</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Seize</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*W-----****X</SYMBOLID><MAPPING>2028</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Withdraw</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*WP----****X</SYMBOLID><MAPPING>2029</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Withdraw_Withdraw Under Pressure</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*V-----****X</SYMBOLID><MAPPING>2016</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Cordon_and_Search</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*2-----****X</SYMBOLID><MAPPING>2016</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Cordon_and_Knock</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GLB---****X</SYMBOLID><MAPPING>2030</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Boundaries</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GLF---****X</SYMBOLID><MAPPING>2031</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Forward Line Of Own Troops (Flot)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GLC---****X</SYMBOLID><MAPPING>2032</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Line Of Contact</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GLP---****X</SYMBOLID><MAPPING>2033</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Phase Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GLL---****X</SYMBOLID><MAPPING>2034</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Light Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAG---****X</SYMBOLID><MAPPING>2035</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_General Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAA---****X</SYMBOLID><MAPPING>2036</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Assembly Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAE---****X</SYMBOLID><MAPPING>2037</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Engagement Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAF---****X</SYMBOLID><MAPPING>2038</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Fortified Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAD---****X</SYMBOLID><MAPPING>2039</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Drop Zone</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAX---****X</SYMBOLID><MAPPING>2040</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Area_Extraction Zone (EZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAL---****X</SYMBOLID><MAPPING>2041</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Landing Zone (LZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAP---****X</SYMBOLID><MAPPING>2042</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Pickup Zone (PZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAS---****X</SYMBOLID><MAPPING>2043</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Search Area/Reconnaissance Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAY---****X</SYMBOLID><MAPPING>2044</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Limited Access Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAZ---****X</SYMBOLID><MAPPING>2045</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Airfield Zone</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*ALC---****X</SYMBOLID><MAPPING>2046</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Air Corridor</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*ALM---****X</SYMBOLID><MAPPING>2047</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Minimum Risk Route (MRR)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*ALS---****X</SYMBOLID><MAPPING>2048</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Standard-Use Army Aircraft Flight Route (SAAFR)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*ALU---****X</SYMBOLID><MAPPING>2049</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Unmanned Aerial Vehicle (UAV) Route</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*ALL---****X</SYMBOLID><MAPPING>2050</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Low Level Transit Route (LLTR)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAR---****X</SYMBOLID><MAPPING>2051</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Restricted Operations Zone (ROZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAF---****X</SYMBOLID><MAPPING>2052</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Forward Area Ari Defense Zone (FAADEZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAF---2525C</SYMBOLID><MAPPING>2053</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_SHORT-RANGE_AIR_DEFENSE_ENGAGEMENT_ZONE (SHORADEZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAH---****X</SYMBOLID><MAPPING>2054</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_High Density Airpspace Control Zone (Hidacz)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAM---****X</SYMBOLID><MAPPING>2055</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Engagement Zone (MEZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAML--****X</SYMBOLID><MAPPING>2056</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Enagement Zone (MEZ) Low Altitude Mez</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAMH--****X</SYMBOLID><MAPPING>2057</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Engagement Zone (MEZ)_High Altitude MEZ</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAW---****X</SYMBOLID><MAPPING>2058</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Weapoins Free Zone</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PD----****X</SYMBOLID><MAPPING>2059</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Dummy (Deception) (Decoy)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PA----****X</SYMBOLID><MAPPING>2060</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Axis Of Advance For Feint</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PF----****X</SYMBOLID><MAPPING>2061</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Direction Of Attack For Feint</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PM----****X</SYMBOLID><MAPPING>2062</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Decoy Mined Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PY----****X</SYMBOLID><MAPPING>2063</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Decoy Mined Area, Fenced</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PC----****X</SYMBOLID><MAPPING>2064</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Dummy Minefield - Dynamic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*DLF---****X</SYMBOLID><MAPPING>2065</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Defense_Lines_Forward Edge Of Battle Area (FEBA)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*DLP---****X</SYMBOLID><MAPPING>2066</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Defense_Lines_Principal Direction Of Fire (PDF)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*DAB---****X</SYMBOLID><MAPPING>2067</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Defense_Areas_Battle Position</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*DABP--****X</SYMBOLID><MAPPING>2068</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Defense_Areas_Battle Position_Prepared But Not Occupied</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*DAE---****X</SYMBOLID><MAPPING>2069</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Defense_Area_Engagement Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLAV--****X</SYMBOLID><MAPPING>2070</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Aviation</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLAA--****X</SYMBOLID><MAPPING>2071</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Airborne</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLAR--****X</SYMBOLID><MAPPING>2072</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Attack, Rotory Wing</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLAGM-****X</SYMBOLID><MAPPING>2073</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Ground_Main Attack</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLAGS-****X</SYMBOLID><MAPPING>2074</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Ground_Support Attack</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLKA--****X</SYMBOLID><MAPPING>2075</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Aviation</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLKGM-****X</SYMBOLID><MAPPING>2076</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Ground_Main Attack</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLKGS-****X</SYMBOLID><MAPPING>2077</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Ground_ Supporting Attack</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLF---****X</SYMBOLID><MAPPING>2078</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Final Coordination Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLI---****X</SYMBOLID><MAPPING>2079</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Infiltration Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLL---****X</SYMBOLID><MAPPING>2080</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Limit Of Advance</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLT---****X</SYMBOLID><MAPPING>2081</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Line Of Departure</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLC---****X</SYMBOLID><MAPPING>2082</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Line Of Departure/Line Of Contact (LD.LC)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLP---****X</SYMBOLID><MAPPING>2083</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Probable Line Of Deployment (PLD)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAA---****X</SYMBOLID><MAPPING>2084</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Assault Position</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAK---****X</SYMBOLID><MAPPING>2085</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Attack Position</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAF---****X</SYMBOLID><MAPPING>2086</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Attack By Fire Position</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAS---****X</SYMBOLID><MAPPING>2087</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Support By Fire Position</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAO---****X</SYMBOLID><MAPPING>2088</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Objective</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAP---****X</SYMBOLID><MAPPING>2089</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Penetration BoX</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SLA---****X</SYMBOLID><MAPPING>2090</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Line_Ambush</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SLH---****X</SYMBOLID><MAPPING>2091</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Line_Holding Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SLR---****X</SYMBOLID><MAPPING>2092</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Line_Release Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SLB---****X</SYMBOLID><MAPPING>2093</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Bridgehead</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SAO---****X</SYMBOLID><MAPPING>2094</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Area Of Operations (AO)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SAA---****X</SYMBOLID><MAPPING>2095</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Airhead</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SAE---****X</SYMBOLID><MAPPING>2096</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Encirclement</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SAN---****X</SYMBOLID><MAPPING>2097</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Named Area Of Interest (NAI)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SAT---****X</SYMBOLID><MAPPING>2098</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Targeted Area Of Interest (TAI)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OGB---****X</SYMBOLID><MAPPING>2099</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_General_Belt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OGL---****X</SYMBOLID><MAPPING>2100</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_General_Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OGZ---****X</SYMBOLID><MAPPING>2101</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_General_Zone</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OGF---****X</SYMBOLID><MAPPING>2102</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_General_Obstacle Free Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OGR---****X</SYMBOLID><MAPPING>2103</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_General_Obstacle Restricted Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OS----****X</SYMBOLID><MAPPING>2104</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Abatis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OADU--****X</SYMBOLID><MAPPING>2105</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch_Under Construction</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OADC--****X</SYMBOLID><MAPPING>2106</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch_Complete</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OAR---****X</SYMBOLID><MAPPING>2107</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch Reinforced With Antitank Mines</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OAW---****X</SYMBOLID><MAPPING>2108</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Wall</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OMC---****X</SYMBOLID><MAPPING>2109</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Mines_Mine Cluster</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OFD---****X</SYMBOLID><MAPPING>2110</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Dynamic Depiction</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OFG---****X</SYMBOLID><MAPPING>2111</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Gap</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OFA---****X</SYMBOLID><MAPPING>2112</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Minded Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OEB---****X</SYMBOLID><MAPPING>2113</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Block</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OEF---****X</SYMBOLID><MAPPING>2114</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_FiX</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OET---****X</SYMBOLID><MAPPING>2115</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Turn</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OED---****X</SYMBOLID><MAPPING>2116</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Disrupt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OU----****X</SYMBOLID><MAPPING>2117</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Unexploed Ordinance Area (UXO)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*ORP---****X</SYMBOLID><MAPPING>2118</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Planned</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*ORS---****X</SYMBOLID><MAPPING>2119</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Explosives, State Of Readiness 1 (Safe)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*ORA---****X</SYMBOLID><MAPPING>2120</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Explosives, State Of Readiness 2 (Armed-But Passable)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*ORC---****X</SYMBOLID><MAPPING>2121</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Roadblock Complete (Executed)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OT----****X</SYMBOLID><MAPPING>2122</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Trip Wire</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWU---****X</SYMBOLID><MAPPING>2123</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle Unspecified</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWS---****X</SYMBOLID><MAPPING>2124</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_ Single Fence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWD---****X</SYMBOLID><MAPPING>2125</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Fence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWA---****X</SYMBOLID><MAPPING>2126</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Apron Fence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWL---****X</SYMBOLID><MAPPING>2127</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Low Wire Fence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWH---****X</SYMBOLID><MAPPING>2128</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_High Wire Fence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWCS--****X</SYMBOLID><MAPPING>2129</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Single Concertina</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWCD--****X</SYMBOLID><MAPPING>2130</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Strand Concertina</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWCT--****X</SYMBOLID><MAPPING>2131</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Triple Strand Concertina</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OHO---****X</SYMBOLID><MAPPING>2133</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Aviation Overhead Wire</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BDE---****X</SYMBOLID><MAPPING>2134</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Easy</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BDD---****X</SYMBOLID><MAPPING>2135</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Difficult</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BDI---****X</SYMBOLID><MAPPING>2136</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Impossible</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCA---****X</SYMBOLID><MAPPING>2137</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Assault Crossing Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCB---****X</SYMBOLID><MAPPING>2138</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Bridge Or Gap</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCF---****X</SYMBOLID><MAPPING>2139</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ferry</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCE---****X</SYMBOLID><MAPPING>2140</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ford Easy</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCD---****X</SYMBOLID><MAPPING>2141</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ford Difficult</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCL---****X</SYMBOLID><MAPPING>2142</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Lane</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCR---****X</SYMBOLID><MAPPING>2143</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Raft Site</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*SL----****X</SYMBOLID><MAPPING>2144</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Surivability_Fortified Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*SW----****X</SYMBOLID><MAPPING>2145</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Surivability_Foxhole, Emplacement Or Weapon Site</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*SP----****X</SYMBOLID><MAPPING>2146</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Surivability_Strong Point</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*NM----****X</SYMBOLID><MAPPING>2147</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Minimum Safe Distrance Zones</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*NR----****X</SYMBOLID><MAPPING>2148</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Radio Active Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*NB----****X</SYMBOLID><MAPPING>2149</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Biologically Contaminated Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*NC----****X</SYMBOLID><MAPPING>2150</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Chemically Contaminated Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*NL----****X</SYMBOLID><MAPPING>2151</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Dose Rate Contour Lines</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LT----****X</SYMBOLID><MAPPING>2152</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Linear Target</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LTS---****X</SYMBOLID><MAPPING>2153</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Linear Smoke Target</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LTF---****X</SYMBOLID><MAPPING>2154</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Final Protective Fire (FPF)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LCF---****X</SYMBOLID><MAPPING>2155</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Fire Support Coordination Line (FSCL)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LCC---****X</SYMBOLID><MAPPING>2156</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Coordinated Fire Line (CFL)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LCN---****X</SYMBOLID><MAPPING>2157</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_No-Fire Line (NFL)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LCR---****X</SYMBOLID><MAPPING>2158</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Restrictive Fire Line (RFL)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LCM---****X</SYMBOLID><MAPPING>2159</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Munition Flight Path (MFP)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AT----****X</SYMBOLID><MAPPING>2160</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Area Target</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ATR---****X</SYMBOLID><MAPPING>2161</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Area Target_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ATC---****X</SYMBOLID><MAPPING>2162</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Area Target_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ATG---****X</SYMBOLID><MAPPING>2163</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Series Or Group Of Targets</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ATS---****X</SYMBOLID><MAPPING>2164</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Smoke</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ATB---****X</SYMBOLID><MAPPING>2165</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Bomb Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACSI--****X</SYMBOLID><MAPPING>2166</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FSA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACSR--****X</SYMBOLID><MAPPING>2167</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FSA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACSC--****X</SYMBOLID><MAPPING>2168</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FSA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACAI--****X</SYMBOLID><MAPPING>2169</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_ACA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACAR--****X</SYMBOLID><MAPPING>2170</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_ACA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACAC--****X</SYMBOLID><MAPPING>2171</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_ACA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACFI--****X</SYMBOLID><MAPPING>2172</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FFA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACFR--****X</SYMBOLID><MAPPING>2173</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FFA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACFC--****X</SYMBOLID><MAPPING>2174</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FFA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACNI--****X</SYMBOLID><MAPPING>2175</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_NFA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACNR--****X</SYMBOLID><MAPPING>2176</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_NFA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACNC--****X</SYMBOLID><MAPPING>2177</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_NFA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACRI--****X</SYMBOLID><MAPPING>2178</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_RFA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACRR--****X</SYMBOLID><MAPPING>2179</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_RFA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACRC--****X</SYMBOLID><MAPPING>2180</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_RFA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACPR--****X</SYMBOLID><MAPPING>2181</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_PAA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACPC--****X</SYMBOLID><MAPPING>2182</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_PAA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZII--****X</SYMBOLID><MAPPING>2183</MAPPING><DESCRIPTION>ATI_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZIR--****X</SYMBOLID><MAPPING>2184</MAPPING><DESCRIPTION>ATI_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZIC--****X</SYMBOLID><MAPPING>2185</MAPPING><DESCRIPTION>ATI_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZXI--****X</SYMBOLID><MAPPING>2186</MAPPING><DESCRIPTION>CFFZ_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZXR--****X</SYMBOLID><MAPPING>2187</MAPPING><DESCRIPTION>CFFZ_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZXC--****X</SYMBOLID><MAPPING>2188</MAPPING><DESCRIPTION>CFFZ_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZSI--****X</SYMBOLID><MAPPING>2189</MAPPING><DESCRIPTION>Sensor_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACEI--****X</SYMBOLID><MAPPING>2189</MAPPING><DESCRIPTION>Sensor_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZSR--****X</SYMBOLID><MAPPING>2190</MAPPING><DESCRIPTION>Sensor_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACER--****X</SYMBOLID><MAPPING>2190</MAPPING><DESCRIPTION>Sensor_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZSC--****X</SYMBOLID><MAPPING>2191</MAPPING><DESCRIPTION>Sensor_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACEC--****X</SYMBOLID><MAPPING>2191</MAPPING><DESCRIPTION>Sensor_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZCI--****X</SYMBOLID><MAPPING>2192</MAPPING><DESCRIPTION>Censor_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZCR--****X</SYMBOLID><MAPPING>2193</MAPPING><DESCRIPTION>Censor_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZCC--****X</SYMBOLID><MAPPING>2194</MAPPING><DESCRIPTION>Censor_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZDI--****X</SYMBOLID><MAPPING>2195</MAPPING><DESCRIPTION>DA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACDI--****X</SYMBOLID><MAPPING>2195</MAPPING><DESCRIPTION>DA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZDR--****X</SYMBOLID><MAPPING>2196</MAPPING><DESCRIPTION>DA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACDR--****X</SYMBOLID><MAPPING>2196</MAPPING><DESCRIPTION>DA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZDC--****X</SYMBOLID><MAPPING>2197</MAPPING><DESCRIPTION>DA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACDC--****X</SYMBOLID><MAPPING>2197</MAPPING><DESCRIPTION>DA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZFI--****X</SYMBOLID><MAPPING>2217</MAPPING><DESCRIPTION>CFZ_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZFR--****X</SYMBOLID><MAPPING>2218</MAPPING><DESCRIPTION>CFZ_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZFC--****X</SYMBOLID><MAPPING>1052</MAPPING><DESCRIPTION>CFZ_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZZI--****X</SYMBOLID><MAPPING>2198</MAPPING><DESCRIPTION>ZOR_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACZI--****X</SYMBOLID><MAPPING>2198</MAPPING><DESCRIPTION>ZOR_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZZR--****X</SYMBOLID><MAPPING>2199</MAPPING><DESCRIPTION>ZOR_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACZR--****X</SYMBOLID><MAPPING>2199</MAPPING><DESCRIPTION>ZOR_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZZC--****X</SYMBOLID><MAPPING>2200</MAPPING><DESCRIPTION>ZOR_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACZC--****X</SYMBOLID><MAPPING>2200</MAPPING><DESCRIPTION>ZOR_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZBI--****X</SYMBOLID><MAPPING>2201</MAPPING><DESCRIPTION>TBA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACBI--****X</SYMBOLID><MAPPING>2201</MAPPING><DESCRIPTION>TBA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZBR--****X</SYMBOLID><MAPPING>2202</MAPPING><DESCRIPTION>TBA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACBR--****X</SYMBOLID><MAPPING>2202</MAPPING><DESCRIPTION>TBA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZBC--****X</SYMBOLID><MAPPING>2203</MAPPING><DESCRIPTION>TBA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACBC--****X</SYMBOLID><MAPPING>2203</MAPPING><DESCRIPTION>TBA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZVI--****X</SYMBOLID><MAPPING>2204</MAPPING><DESCRIPTION>TVAR_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACVI--****X</SYMBOLID><MAPPING>2204</MAPPING><DESCRIPTION>TVAR_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZVR--****X</SYMBOLID><MAPPING>2205</MAPPING><DESCRIPTION>TVAR_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACVR--****X</SYMBOLID><MAPPING>2205</MAPPING><DESCRIPTION>TVAR_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZVC--****X</SYMBOLID><MAPPING>2206</MAPPING><DESCRIPTION>TVAR_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACVC--****X</SYMBOLID><MAPPING>2206</MAPPING><DESCRIPTION>TVAR_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACT---****X</SYMBOLID><MAPPING>2210</MAPPING><DESCRIPTION>TGMF</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AXC---****X</SYMBOLID><MAPPING>2207</MAPPING><DESCRIPTION>Range_Fan</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AXS---****X</SYMBOLID><MAPPING>2208</MAPPING><DESCRIPTION>Sector_Range_Fan</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKBC--****X</SYMBOLID><MAPPING>2219</MAPPING><DESCRIPTION>BKB Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKBI--****X</SYMBOLID><MAPPING>2220</MAPPING><DESCRIPTION>BKB Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKBR--****X</SYMBOLID><MAPPING>2221</MAPPING><DESCRIPTION>BKB Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKPC--****X</SYMBOLID><MAPPING>2222</MAPPING><DESCRIPTION>PKB Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKPI--****X</SYMBOLID><MAPPING>2223</MAPPING><DESCRIPTION>PKB Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKPR--****X</SYMBOLID><MAPPING>2224</MAPPING><DESCRIPTION>PKB Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LCM---****X</SYMBOLID><MAPPING>2226</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Convoys_Moving Convoy</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LCH---****X</SYMBOLID><MAPPING>2227</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Convoys_Halted Convoy</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LRM---****X</SYMBOLID><MAPPING>2228</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Supply Routes_Main Supply Route</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LRA---****X</SYMBOLID><MAPPING>2229</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Supply Routes_Alternate Supply Route</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LRO---****X</SYMBOLID><MAPPING>2230</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Supply Routes_One-Way Traffic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LRT---****X</SYMBOLID><MAPPING>2231</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Supply Routes_Alternating Traffic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LRW---****X</SYMBOLID><MAPPING>2232</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Supply Routes_Two-Way Traffic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*AD----****X</SYMBOLID><MAPPING>2233</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Detainee Holding Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*AE----****X</SYMBOLID><MAPPING>2234</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Enemy Prisoner Of War (EPW) Holding Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*AR----****X</SYMBOLID><MAPPING>2235</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Forward Arming And Refueling Area (FARP)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*AH----****X</SYMBOLID><MAPPING>2236</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Refugee Holding Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*ASB---****X</SYMBOLID><MAPPING>2237</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Support Areas_Brigade (BSA)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*ASD---****X</SYMBOLID><MAPPING>2238</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Support Areas_Division (DSA)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*ASR---****X</SYMBOLID><MAPPING>2239</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Support Areas_Regimental (RSA)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*HN----****X</SYMBOLID><MAPPING>2240</MAPPING><DESCRIPTION>Tactical Graphics_Other_Hazard_Navigational</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*B-----****X</SYMBOLID><MAPPING>2241</MAPPING><DESCRIPTION>Tactical Graphics_Other_Bearing Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*BE----****X</SYMBOLID><MAPPING>2242</MAPPING><DESCRIPTION>Tactical Graphics_Other_Bearing Line_Electronic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*BA----****X</SYMBOLID><MAPPING>2243</MAPPING><DESCRIPTION>Tactical Graphics_Other_Bearing Line_Acoustic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*BT----****X</SYMBOLID><MAPPING>2244</MAPPING><DESCRIPTION>Tactical Graphics_Other_Bearing Line_Torpedo</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*BO----****X</SYMBOLID><MAPPING>2245</MAPPING><DESCRIPTION>Tactical Graphics_Other_Bearing Line_Electro-Optical Intercept</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFC----L---</SYMBOLID><MAPPING>3000</MAPPING><DESCRIPTION>Cold Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFCU---L---</SYMBOLID><MAPPING>3001</MAPPING><DESCRIPTION>Upper Cold Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFC-FG-L---</SYMBOLID><MAPPING>3002</MAPPING><DESCRIPTION>Cold Frontogenisis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFC-FY-L---</SYMBOLID><MAPPING>3003</MAPPING><DESCRIPTION>Cold Frontolysis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFW----L---</SYMBOLID><MAPPING>3004</MAPPING><DESCRIPTION>Warm Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFWU---L---</SYMBOLID><MAPPING>3005</MAPPING><DESCRIPTION>Upper Warm Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFW-FG-L---</SYMBOLID><MAPPING>3006</MAPPING><DESCRIPTION>Warm Frontogenesis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFW-FY-L---</SYMBOLID><MAPPING>3007</MAPPING><DESCRIPTION>Warm Frontolysis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFO----L---</SYMBOLID><MAPPING>3008</MAPPING><DESCRIPTION>Occluded Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFOU---L---</SYMBOLID><MAPPING>3009</MAPPING><DESCRIPTION>Upper Occluded Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFO-FY-L---</SYMBOLID><MAPPING>3010</MAPPING><DESCRIPTION>Occluded Frontolysis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFS----L---</SYMBOLID><MAPPING>3011</MAPPING><DESCRIPTION>Stationary Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFSU---L---</SYMBOLID><MAPPING>3012</MAPPING><DESCRIPTION>Upper Stationary Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFS-FG-L---</SYMBOLID><MAPPING>3013</MAPPING><DESCRIPTION>Stationary Frontogenesis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFS-FY-L---</SYMBOLID><MAPPING>3014</MAPPING><DESCRIPTION>Stationary Frontolysis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXT----L---</SYMBOLID><MAPPING>3015</MAPPING><DESCRIPTION>Trough Axis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXR----L---</SYMBOLID><MAPPING>3016</MAPPING><DESCRIPTION>Ridge Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXSQ---L---</SYMBOLID><MAPPING>3017</MAPPING><DESCRIPTION>Squall Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXIL---L---</SYMBOLID><MAPPING>3018</MAPPING><DESCRIPTION>Instability Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXSH---L---</SYMBOLID><MAPPING>3019</MAPPING><DESCRIPTION>Shear Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXITCZ-L---</SYMBOLID><MAPPING>3020</MAPPING><DESCRIPTION>Inter-Tropical Convergance Zone</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXCV---L---</SYMBOLID><MAPPING>3021</MAPPING><DESCRIPTION>Convergance Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXITD--L---</SYMBOLID><MAPPING>3022</MAPPING><DESCRIPTION>Inter-Tropical Discontinuity</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WAS-WP----P----</SYMBOLID><MAPPING>3023</MAPPING><DESCRIPTION>Wind Plot</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DWJ-----L---</SYMBOLID><MAPPING>3030</MAPPING><DESCRIPTION>Jet Stream Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DWS-----L---</SYMBOLID><MAPPING>3031</MAPPING><DESCRIPTION>Stream Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DWSTSWA--A--</SYMBOLID><MAPPING>3032</MAPPING><DESCRIPTION>Tropical Storm Wind Areas</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAIF----A--</SYMBOLID><MAPPING>3034</MAPPING><DESCRIPTION>IFR</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAMV----A--</SYMBOLID><MAPPING>3035</MAPPING><DESCRIPTION>MVFR</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBATB----A--</SYMBOLID><MAPPING>3036</MAPPING><DESCRIPTION>Weather Turbulence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAI-----A--</SYMBOLID><MAPPING>3037</MAPPING><DESCRIPTION>Weather Icing</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBALPNC--A--</SYMBOLID><MAPPING>3038</MAPPING><DESCRIPTION>Precipitation Non-Convective</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBALPC---A--</SYMBOLID><MAPPING>3039</MAPPING><DESCRIPTION>Precipitation Convective</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAFP----A--</SYMBOLID><MAPPING>3040</MAPPING><DESCRIPTION>Frozen Precipitation</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAT-----A--</SYMBOLID><MAPPING>3041</MAPPING><DESCRIPTION>Weather Thunderstorm</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAFG----A--</SYMBOLID><MAPPING>3042</MAPPING><DESCRIPTION>Weather Fog</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAD-----A--</SYMBOLID><MAPPING>3043</MAPPING><DESCRIPTION>Weather Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAFF----A--</SYMBOLID><MAPPING>3044</MAPPING><DESCRIPTION>Weather Freeform</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPIB---L---</SYMBOLID><MAPPING>3045</MAPPING><DESCRIPTION>Isobar Surface</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPCO---L---</SYMBOLID><MAPPING>3046</MAPPING><DESCRIPTION>Upper Air</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPIS---L---</SYMBOLID><MAPPING>3047</MAPPING><DESCRIPTION>Isotherm</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPIT---L---</SYMBOLID><MAPPING>3048</MAPPING><DESCRIPTION>Isotach</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPID---L---</SYMBOLID><MAPPING>3049</MAPPING><DESCRIPTION>Isodrosotherm</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPTH---L---</SYMBOLID><MAPPING>3050</MAPPING><DESCRIPTION>Isopleths</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPFF---L---</SYMBOLID><MAPPING>3051</MAPPING><DESCRIPTION>Operator Freeform</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILOV---L---</SYMBOLID><MAPPING>3052</MAPPING><DESCRIPTION>Limit of Visual Observation</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILUC---L---</SYMBOLID><MAPPING>3053</MAPPING><DESCRIPTION>Limit of Undercast</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILOR---L---</SYMBOLID><MAPPING>3054</MAPPING><DESCRIPTION>Limit of Radar Observation</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILIEO--L---</SYMBOLID><MAPPING>3055</MAPPING><DESCRIPTION>Observed Ice Edge</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILIEE--L---</SYMBOLID><MAPPING>3056</MAPPING><DESCRIPTION>Estimated Ice Edge</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILIER--L---</SYMBOLID><MAPPING>3057</MAPPING><DESCRIPTION>Ice Edge From Radar</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DIOC----L---</SYMBOLID><MAPPING>3058</MAPPING><DESCRIPTION>Cracks</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DIOCS---L---</SYMBOLID><MAPPING>3059</MAPPING><DESCRIPTION>Cracks Specific-Location</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DIOL----L---</SYMBOLID><MAPPING>3060</MAPPING><DESCRIPTION>Ice Openings-Lead</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DIOLF---L---</SYMBOLID><MAPPING>3061</MAPPING><DESCRIPTION>Frozen Lead</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHDDL---L---</SYMBOLID><MAPPING>3062</MAPPING><DESCRIPTION>Depth Curve</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHDDC---L---</SYMBOLID><MAPPING>3063</MAPPING><DESCRIPTION>Depth Contour</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHDDA----A--</SYMBOLID><MAPPING>3064</MAPPING><DESCRIPTION>Depth Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCC----L---</SYMBOLID><MAPPING>3065</MAPPING><DESCRIPTION>Coastline</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCI-----A--</SYMBOLID><MAPPING>3066</MAPPING><DESCRIPTION>Island</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCB-----A--</SYMBOLID><MAPPING>3067</MAPPING><DESCRIPTION>Beach</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCW-----A--</SYMBOLID><MAPPING>3068</MAPPING><DESCRIPTION>Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCF----L---</SYMBOLID><MAPPING>3069</MAPPING><DESCRIPTION>Foreshore Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCF-----A--</SYMBOLID><MAPPING>3070</MAPPING><DESCRIPTION>Foreshore Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPBA---L---</SYMBOLID><MAPPING>3071</MAPPING><DESCRIPTION>Anchorage Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPBA----A--</SYMBOLID><MAPPING>3072</MAPPING><DESCRIPTION>Anchorage Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPBP---L---</SYMBOLID><MAPPING>3073</MAPPING><DESCRIPTION>Pier</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WOS-HPFF----A--</SYMBOLID><MAPPING>3074</MAPPING><DESCRIPTION>Wiers</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPMD----A--</SYMBOLID><MAPPING>3075</MAPPING><DESCRIPTION>Drydock</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPMO---L---</SYMBOLID><MAPPING>3076</MAPPING><DESCRIPTION>Offshore Loading Facility Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPMO----A--</SYMBOLID><MAPPING>3077</MAPPING><DESCRIPTION>Offshore Loading Facility Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPMRA--L---</SYMBOLID><MAPPING>3078</MAPPING><DESCRIPTION>Ramp Above Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPMRB--L---</SYMBOLID><MAPPING>3079</MAPPING><DESCRIPTION>Ramp Below Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPSPA--L---</SYMBOLID><MAPPING>3080</MAPPING><DESCRIPTION>Jetty Above Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPSPB--L---</SYMBOLID><MAPPING>3081</MAPPING><DESCRIPTION>Jetty Below Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPSPS--L---</SYMBOLID><MAPPING>3082</MAPPING><DESCRIPTION>Seawall</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHABP----A--</SYMBOLID><MAPPING>3083</MAPPING><DESCRIPTION>Perches</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHALLA--L---</SYMBOLID><MAPPING>3084</MAPPING><DESCRIPTION>Leading Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHHD-----A--</SYMBOLID><MAPPING>3085</MAPPING><DESCRIPTION>Underwater Hazard</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHHDF----A--</SYMBOLID><MAPPING>3200</MAPPING><DESCRIPTION>Foul Ground</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHHDK----A--</SYMBOLID><MAPPING>3201</MAPPING><DESCRIPTION>Kelp</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHHDB---L---</SYMBOLID><MAPPING>3086</MAPPING><DESCRIPTION>Breaker</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WOS-HHDR---L---</SYMBOLID><MAPPING>3087</MAPPING><DESCRIPTION>Reef</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHHDD----A--</SYMBOLID><MAPPING>3089</MAPPING><DESCRIPTION>Discolored Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DTCCCFE-L---</SYMBOLID><MAPPING>3090</MAPPING><DESCRIPTION>Ebb Tide</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DTCCCFF-L---</SYMBOLID><MAPPING>3091</MAPPING><DESCRIPTION>Flood Tide</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVA----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 1-2</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVB----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 2-3</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVC----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 3-4</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVD----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 4-5</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVE----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 5-6</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVF----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 6-7</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVG----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 7-8</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVH----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 8-9</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVI----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 9-10</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DBSF-----A--</SYMBOLID><MAPPING>3093</MAPPING><DESCRIPTION>Beach Slope Flat</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DBSG-----A--</SYMBOLID><MAPPING>3094</MAPPING><DESCRIPTION>Beach Slope Gentle</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DBSM-----A--</SYMBOLID><MAPPING>3095</MAPPING><DESCRIPTION>Beach Slope Moderate</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DBST-----A--</SYMBOLID><MAPPING>3096</MAPPING><DESCRIPTION>Beach Slope Steep</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSR----A--</SYMBOLID><MAPPING>3097</MAPPING><DESCRIPTION>Solid Rock</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSC----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Clay</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSSVS--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Very Course Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSSC---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Coarse Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSSM---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Medium Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSSF---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Fine Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSSVF--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Very Fine Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSIVF--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Very Fine Silt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSIF---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Fine Silt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSIM---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Medium Silt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSIC---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Coarse Silt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSB----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Boulders</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMS-CO--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Oyster Shells</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMS-PH--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Pebbles Shells</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMS-SH--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Sand and Shells</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGML-----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Sediments Land</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMN-----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Sediments Land</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMRS----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Roughness Smooth</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMRM----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Roughness Moderate</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMRR----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Roughness Rough</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMCL----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Clutter Low</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMCM----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Clutter Medium</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMCH----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Clutter High</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMIBA---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Impact Burial 0</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMIBB---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Impact Burial 10</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMIBC---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Impact Burial 20</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMIBD---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Impact Burial 75</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMIBE---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Impact Burial 100</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBCA---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Category A</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBCB---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Category B</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBCC---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Category C</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTA---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type A1</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTB---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type A2</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTC---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type A3</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTD---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type B1</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTE---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type B2</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTF---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type B3</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTG---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type C1</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTH---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type C2</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTI---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type C3</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-ML---L---</SYMBOLID><MAPPING>3099</MAPPING><DESCRIPTION>Maritime Limit</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-MA----A--</SYMBOLID><MAPPING>3100</MAPPING><DESCRIPTION>Maritime Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-RA---L---</SYMBOLID><MAPPING>3101</MAPPING><DESCRIPTION>Restricted Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-SA----A--</SYMBOLID><MAPPING>3102</MAPPING><DESCRIPTION>Swept Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-TA----A--</SYMBOLID><MAPPING>3103</MAPPING><DESCRIPTION>Training Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-O-----A--</SYMBOLID><MAPPING>3104</MAPPING><DESCRIPTION>Operator Defined</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DMCA----L---</SYMBOLID><MAPPING>3105</MAPPING><DESCRIPTION>Cable</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DMCC-----A--</SYMBOLID><MAPPING>3106</MAPPING><DESCRIPTION>Submerged Crib</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DMCD----L---</SYMBOLID><MAPPING>3107</MAPPING><DESCRIPTION>Canal</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DMOA-----A--</SYMBOLID><MAPPING>3108</MAPPING><DESCRIPTION>Oil Rig Field</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DMPA----L---</SYMBOLID><MAPPING>3109</MAPPING><DESCRIPTION>Pipe</DESCRIPTION></SYMBOL></TACTICALGRAPHICS>';
    spMappingXml = {
  "TACTICALGRAPHICS": {
    "SYMBOL": [
      {
        "ID": "G*T*B-----****X",
        "M": "2001",
        "D": "Tactical Graphics_ Tasks_Block"
      },
      {
        "ID": "G*T*H-----****X",
        "M": "2002",
        "D": "Tactical Graphics_ Tasks_Breach"
      },
      {
        "ID": "G*T*Y-----****X",
        "M": "2003",
        "D": "Tactical Graphics_Tasks_Bypass"
      },
      {
        "ID": "G*T*C-----****X",
        "M": "2004",
        "D": "Tactical Graphics_Tasks_Canalize"
      },
      {
        "ID": "G*T*X-----****X",
        "M": "2005",
        "D": "Tactical Graphics_Tasks_Clear"
      },
      {
        "ID": "G*T*J-----****X",
        "M": "2006",
        "D": "Tactical Graphics_Tasks_Contain"
      },
      {
        "ID": "G*T*K-----****X",
        "M": "2007",
        "D": "Tactical Graphics_Tasks_Counterattach (CATK)"
      },
      {
        "ID": "G*T*KF----****X",
        "M": "2008",
        "D": "Tactical Graphics_Tasks_Counterattack (CATK)_Counterattack By Fire"
      },
      {
        "ID": "G*T*L-----****X",
        "M": "2009",
        "D": "Tactical Graphics_Tasks_Delay"
      },
      {
        "ID": "G*T*T-----****X",
        "M": "2011",
        "D": "Tactical Graphics_Tasks_Disrupt "
      },
      {
        "ID": "G*T*F-----****X",
        "M": "2012",
        "D": "Tactical Graphics_Tasks_Fix"
      },
      {
        "ID": "G*T*A-----****X",
        "M": "2013",
        "D": "Tactical Graphics_Tasks_Follow And Assume"
      },
      {
        "ID": "G*T*AS----****X",
        "M": "2014",
        "D": "Tactical Graphics_Tasks_Follow And Assume_Follow And Support "
      },
      {
        "ID": "G*T*E-----****X",
        "M": "2016",
        "D": "Tactical Graphics_Tasks_Isolate"
      },
      {
        "ID": "G*T*O-----****X",
        "M": "2018",
        "D": "Tactical Graphics_Tasks_Occupy"
      },
      {
        "ID": "G*T*P-----****X",
        "M": "2019",
        "D": "Tactical Graphics_Tasks_Penetrate"
      },
      {
        "ID": "G*T*R-----****X",
        "M": "2020",
        "D": "Tactical Graphics_Tasks_Relief In Place (RIP)"
      },
      {
        "ID": "G*T*Q-----****X",
        "M": "2021",
        "D": "Tactical Graphics_Tasks_Retain"
      },
      {
        "ID": "G*T*M-----****X",
        "M": "2022",
        "D": "Tactical Graphics_Tasks_Retirement"
      },
      {
        "ID": "G*T*S-----****X",
        "M": "2023",
        "D": "Tactical Graphics_Tasks_Secure"
      },
      {
        "ID": "G*T*US----****X",
        "M": "2024",
        "D": "Tactical Graphics_Tasks_Security_Screen"
      },
      {
        "ID": "G*T*UG----****X",
        "M": "2025",
        "D": "Tactical Graphics_Tasks_Security_Guard"
      },
      {
        "ID": "G*T*UC----****X",
        "M": "2026",
        "D": "Tactical Graphics_Tasks_Security_Cover"
      },
      {
        "ID": "G*T*Z-----****X",
        "M": "2027",
        "D": "Tactical Graphics_Tasks_Seize"
      },
      {
        "ID": "G*T*W-----****X",
        "M": "2028",
        "D": "Tactical Graphics_Tasks_Withdraw"
      },
      {
        "ID": "G*T*WP----****X",
        "M": "2029",
        "D": "Tactical Graphics_Tasks_Withdraw_Withdraw Under Pressure "
      },
      {
        "ID": "G*T*V-----****X",
        "M": "2016",
        "D": "Tactical Graphics_Tasks_Cordon_and_Search "
      },
      {
        "ID": "G*T*2-----****X",
        "M": "2016",
        "D": "Tactical Graphics_Tasks_Cordon_and_Knock "
      },
      {
        "ID": "G*G*GLB---****X",
        "M": "2030",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Boundaries "
      },
      {
        "ID": "G*G*GLF---****X",
        "M": "2031",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Forward Line Of Own Troops (Flot)"
      },
      {
        "ID": "G*G*GLC---****X",
        "M": "2032",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Line Of Contact "
      },
      {
        "ID": "G*G*GLP---****X",
        "M": "2033",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Phase Line "
      },
      {
        "ID": "G*G*GLL---****X",
        "M": "2034",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Light Line "
      },
      {
        "ID": "G*G*GAG---****X",
        "M": "2035",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_General Area"
      },
      {
        "ID": "G*G*GAA---****X",
        "M": "2036",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Assembly Area"
      },
      {
        "ID": "G*G*GAE---****X",
        "M": "2037",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Engagement Area"
      },
      {
        "ID": "G*G*GAF---****X",
        "M": "2038",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Fortified Area"
      },
      {
        "ID": "G*G*GAD---****X",
        "M": "2039",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Drop Zone "
      },
      {
        "ID": "G*G*GAX---****X",
        "M": "2040",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Area_Extraction Zone (EZ)"
      },
      {
        "ID": "G*G*GAL---****X",
        "M": "2041",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Landing Zone (LZ)"
      },
      {
        "ID": "G*G*GAP---****X",
        "M": "2042",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Pickup Zone (PZ)"
      },
      {
        "ID": "G*G*GAS---****X",
        "M": "2043",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Search Area/Reconnaissance Area"
      },
      {
        "ID": "G*G*GAY---****X",
        "M": "2044",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Limited Access Area"
      },
      {
        "ID": "G*G*GAZ---****X",
        "M": "2045",
        "D": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Airfield Zone "
      },
      {
        "ID": "G*G*ALC---****X",
        "M": "2046",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Air Corridor "
      },
      {
        "ID": "G*G*ALM---****X",
        "M": "2047",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Minimum Risk Route (MRR) "
      },
      {
        "ID": "G*G*ALS---****X",
        "M": "2048",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Standard-Use Army Aircraft Flight Route (SAAFR) "
      },
      {
        "ID": "G*G*ALU---****X",
        "M": "2049",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Unmanned Aerial Vehicle (UAV) Route "
      },
      {
        "ID": "G*G*ALL---****X",
        "M": "2050",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Low Level Transit Route (LLTR)"
      },
      {
        "ID": "G*G*AAR---****X",
        "M": "2051",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Restricted Operations Zone (ROZ)"
      },
      {
        "ID": "G*G*AAF---2525C",
        "M": "2052",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_SHORT-RANGE_AIR_DEFENSE_ENGAGEMENT_ZONE (SHORADEZ)"
      },
      {
        "ID": "G*G*AAF---****X",
        "M": "2053",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Forward Area Ari Defense Zone (FAADEZ)"
      },
      {
        "ID": "G*G*AAH---****X",
        "M": "2054",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_High Density Airpspace Control Zone (Hidacz) "
      },
      {
        "ID": "G*G*AAM---****X",
        "M": "2055",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Engagement Zone (MEZ) "
      },
      {
        "ID": "G*G*AAML--****X",
        "M": "2056",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Enagement Zone (MEZ) Low Altitude Mez "
      },
      {
        "ID": "G*G*AAMH--****X",
        "M": "2057",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Engagement Zone (MEZ)_High Altitude MEZ"
      },
      {
        "ID": "G*G*AAW---****X",
        "M": "2058",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Weapoins Free Zone "
      },
      {
        "ID": "G*G*PD----****X",
        "M": "2059",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Deception_Dummy (Deception) (Decoy) "
      },
      {
        "ID": "G*G*PA----****X",
        "M": "2060",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Deception_Axis Of Advance For Feint "
      },
      {
        "ID": "G*G*PF----****X",
        "M": "2061",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Deception_Direction Of Attack For Feint "
      },
      {
        "ID": "G*G*PM----****X",
        "M": "2062",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Deception_Decoy Mined Area"
      },
      {
        "ID": "G*G*PY----****X",
        "M": "2063",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Deception_Decoy Mined Area, Fenced "
      },
      {
        "ID": "G*G*PC----****X",
        "M": "2064",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Deception_Dummy Minefield - Dynamic "
      },
      {
        "ID": "G*G*DLF---****X",
        "M": "2065",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Defense_Lines_Forward Edge Of Battle Area (FEBA) "
      },
      {
        "ID": "G*G*DLP---****X",
        "M": "2066",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Defense_Lines_Principal Direction Of Fire (PDF)"
      },
      {
        "ID": "G*G*DAB---****X",
        "M": "2067",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Defense_Areas_Battle Position"
      },
      {
        "ID": "G*G*DABP--****X",
        "M": "2068",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Defense_Areas_Battle Position_Prepared But Not Occupied "
      },
      {
        "ID": "G*G*DAE---****X",
        "M": "2069",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Defense_Area_Engagement Area"
      },
      {
        "ID": "G*G*OLAV--****X",
        "M": "2070",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Aviation"
      },
      {
        "ID": "G*G*OLAA--****X",
        "M": "2071",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Airborne "
      },
      {
        "ID": "G*G*OLAR--****X",
        "M": "2072",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Attack, Rotory Wing "
      },
      {
        "ID": "G*G*OLAGM-****X",
        "M": "2073",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Ground_Main Attack "
      },
      {
        "ID": "G*G*OLAGS-****X",
        "M": "2074",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Ground_Support Attack"
      },
      {
        "ID": "G*G*OLKA--****X",
        "M": "2075",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Aviation "
      },
      {
        "ID": "G*G*OLKGM-****X",
        "M": "2076",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Ground_Main Attack"
      },
      {
        "ID": "G*G*OLKGS-****X",
        "M": "2077",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Ground_ Supporting Attack"
      },
      {
        "ID": "G*G*OLF---****X",
        "M": "2078",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Final Coordination Line "
      },
      {
        "ID": "G*G*OLI---****X",
        "M": "2079",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Infiltration Line "
      },
      {
        "ID": "G*G*OLL---****X",
        "M": "2080",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Limit Of Advance "
      },
      {
        "ID": "G*G*OLT---****X",
        "M": "2081",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Line Of Departure "
      },
      {
        "ID": "G*G*OLC---****X",
        "M": "2082",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Line Of Departure/Line Of Contact (LD.LC)"
      },
      {
        "ID": "G*G*OLP---****X",
        "M": "2083",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Probable Line Of Deployment (PLD) "
      },
      {
        "ID": "G*G*OAA---****X",
        "M": "2084",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Assault Position"
      },
      {
        "ID": "G*G*OAK---****X",
        "M": "2085",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Attack Position"
      },
      {
        "ID": "G*G*OAF---****X",
        "M": "2086",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Attack By Fire Position "
      },
      {
        "ID": "G*G*OAS---****X",
        "M": "2087",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Support By Fire Position "
      },
      {
        "ID": "G*G*OAO---****X",
        "M": "2088",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Objective "
      },
      {
        "ID": "G*G*OAP---****X",
        "M": "2089",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Penetration BoX"
      },
      {
        "ID": "G*G*SLA---****X",
        "M": "2090",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Special_Line_Ambush"
      },
      {
        "ID": "G*G*SLH---****X",
        "M": "2091",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Special_Line_Holding Line "
      },
      {
        "ID": "G*G*SLR---****X",
        "M": "2092",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Special_Line_Release Line "
      },
      {
        "ID": "G*G*SLB---****X",
        "M": "2093",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Bridgehead"
      },
      {
        "ID": "G*G*SAO---****X",
        "M": "2094",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Area Of Operations (AO)"
      },
      {
        "ID": "G*G*SAA---****X",
        "M": "2095",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Airhead "
      },
      {
        "ID": "G*G*SAE---****X",
        "M": "2096",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Encirclement "
      },
      {
        "ID": "G*G*SAN---****X",
        "M": "2097",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Named Area Of Interest (NAI)"
      },
      {
        "ID": "G*G*SAT---****X",
        "M": "2098",
        "D": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Targeted Area Of Interest (TAI) "
      },
      {
        "ID": "G*M*OGB---****X",
        "M": "2099",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_General_Belt "
      },
      {
        "ID": "G*M*OGL---****X",
        "M": "2100",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_General_Line "
      },
      {
        "ID": "G*M*OGZ---****X",
        "M": "2101",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_General_Zone"
      },
      {
        "ID": "G*M*OGF---****X",
        "M": "2102",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_General_Obstacle Free Area"
      },
      {
        "ID": "G*M*OGR---****X",
        "M": "2103",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_General_Obstacle Restricted Area"
      },
      {
        "ID": "G*M*OS----****X",
        "M": "2104",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Abatis "
      },
      {
        "ID": "G*M*OADU--****X",
        "M": "2105",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch_Under Construction"
      },
      {
        "ID": "G*M*OADC--****X",
        "M": "2106",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch_Complete "
      },
      {
        "ID": "G*M*OAR---****X",
        "M": "2107",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch Reinforced With Antitank Mines "
      },
      {
        "ID": "G*M*OAW---****X",
        "M": "2108",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Wall"
      },
      {
        "ID": "G*M*OMC---****X",
        "M": "2109",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Mines_Mine Cluster "
      },
      {
        "ID": "G*M*OFD---****X",
        "M": "2110",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Dynamic Depiction"
      },
      {
        "ID": "G*M*OFG---****X",
        "M": "2111",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Gap"
      },
      {
        "ID": "G*M*OFA---****X",
        "M": "2112",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Minded Area"
      },
      {
        "ID": "G*M*OEB---****X",
        "M": "2113",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Block"
      },
      {
        "ID": "G*M*OEF---****X",
        "M": "2114",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_FiX"
      },
      {
        "ID": "G*M*OET---****X",
        "M": "2115",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Turn"
      },
      {
        "ID": "G*M*OED---****X",
        "M": "2116",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Disrupt "
      },
      {
        "ID": "G*M*OU----****X",
        "M": "2117",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Unexploed Ordinance Area (UXO)"
      },
      {
        "ID": "G*M*ORP---****X",
        "M": "2118",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Planned "
      },
      {
        "ID": "G*M*ORS---****X",
        "M": "2119",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Explosives, State Of Readiness 1 (Safe)"
      },
      {
        "ID": "G*M*ORA---****X",
        "M": "2120",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Explosives, State Of Readiness 2 (Armed-But Passable) "
      },
      {
        "ID": "G*M*ORC---****X",
        "M": "2121",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Roadblock Complete (Executed)"
      },
      {
        "ID": "G*M*OT----****X",
        "M": "2122",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Trip Wire"
      },
      {
        "ID": "G*M*OWU---****X",
        "M": "2123",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle Unspecified "
      },
      {
        "ID": "G*M*OWS---****X",
        "M": "2124",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_ Single Fence "
      },
      {
        "ID": "G*M*OWD---****X",
        "M": "2125",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Fence"
      },
      {
        "ID": "G*M*OWA---****X",
        "M": "2126",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Apron Fence "
      },
      {
        "ID": "G*M*OWL---****X",
        "M": "2127",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Low Wire Fence "
      },
      {
        "ID": "G*M*OWH---****X",
        "M": "2128",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_High Wire Fence "
      },
      {
        "ID": "G*M*OWCS--****X",
        "M": "2129",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Single Concertina "
      },
      {
        "ID": "G*M*OWCD--****X",
        "M": "2130",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Strand Concertina "
      },
      {
        "ID": "G*M*OWCT--****X",
        "M": "2131",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Triple Strand Concertina "
      },
      {
        "ID": "G*M*OHO---****X",
        "M": "2133",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacles_Aviation Overhead Wire "
      },
      {
        "ID": "G*M*BDE---****X",
        "M": "2134",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Easy"
      },
      {
        "ID": "G*M*BDD---****X",
        "M": "2135",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Difficult "
      },
      {
        "ID": "G*M*BDI---****X",
        "M": "2136",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Impossible "
      },
      {
        "ID": "G*M*BCA---****X",
        "M": "2137",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Assault Crossing Area"
      },
      {
        "ID": "G*M*BCB---****X",
        "M": "2138",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Bridge Or Gap "
      },
      {
        "ID": "G*M*BCF---****X",
        "M": "2139",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ferry"
      },
      {
        "ID": "G*M*BCE---****X",
        "M": "2140",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ford Easy"
      },
      {
        "ID": "G*M*BCD---****X",
        "M": "2141",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ford Difficult "
      },
      {
        "ID": "G*M*BCL---****X",
        "M": "2142",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Lane "
      },
      {
        "ID": "G*M*BCR---****X",
        "M": "2143",
        "D": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Raft Site"
      },
      {
        "ID": "G*M*SL----****X",
        "M": "2144",
        "D": "Tactical Graphics_Mobility/Survivability_Surivability_Fortified Line "
      },
      {
        "ID": "G*M*SW----****X",
        "M": "2145",
        "D": "Tactical Graphics_Mobility/Survivability_Surivability_Foxhole, Emplacement Or Weapon Site "
      },
      {
        "ID": "G*M*SP----****X",
        "M": "2146",
        "D": "Tactical Graphics_Mobility/Survivability_Surivability_Strong Point"
      },
      {
        "ID": "G*M*NM----****X",
        "M": "2147",
        "D": "Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Minimum Safe Distrance Zones "
      },
      {
        "ID": "G*M*NR----****X",
        "M": "2148",
        "D": "Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Radio Active Area"
      },
      {
        "ID": "G*M*NB----****X",
        "M": "2149",
        "D": "Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Biologically Contaminated Area"
      },
      {
        "ID": "G*M*NC----****X",
        "M": "2150",
        "D": "Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Chemically Contaminated Area"
      },
      {
        "ID": "G*M*NL----****X",
        "M": "2151",
        "D": "Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Dose Rate Contour Lines "
      },
      {
        "ID": "G*F*LT----****X",
        "M": "2152",
        "D": "Tactical Graphics_Fire Support_Lines_Linear Target "
      },
      {
        "ID": "G*F*LTS---****X",
        "M": "2153",
        "D": "Tactical Graphics_Fire Support_Lines_Linear Smoke Target"
      },
      {
        "ID": "G*F*LTF---****X",
        "M": "2154",
        "D": "Tactical Graphics_Fire Support_Lines_Final Protective Fire (FPF)"
      },
      {
        "ID": "G*F*LCF---****X",
        "M": "2155",
        "D": "Tactical Graphics_Fire Support_Lines_Fire Support Coordination Line (FSCL) "
      },
      {
        "ID": "G*F*LCC---****X",
        "M": "2156",
        "D": "Tactical Graphics_Fire Support_Lines_Coordinated Fire Line (CFL) "
      },
      {
        "ID": "G*F*LCN---****X",
        "M": "2157",
        "D": "Tactical Graphics_Fire Support_Lines_No-Fire Line (NFL) "
      },
      {
        "ID": "G*F*LCR---****X",
        "M": "2158",
        "D": "Tactical Graphics_Fire Support_Lines_Restrictive Fire Line (RFL) "
      },
      {
        "ID": "G*F*LCM---****X",
        "M": "2159",
        "D": "Tactical Graphics_Fire Support_Lines_Munition Flight Path (MFP) "
      },
      {
        "ID": "G*F*AT----****X",
        "M": "2160",
        "D": "Tactical Graphics_Fire Support_Areas_Area Target "
      },
      {
        "ID": "G*F*ATR---****X",
        "M": "2161",
        "D": "Tactical Graphics_Fire Support_Areas_Area Target_Rectangular "
      },
      {
        "ID": "G*F*ATC---****X",
        "M": "2162",
        "D": "Tactical Graphics_Fire Support_Areas_Area Target_Circular"
      },
      {
        "ID": "G*F*ATG---****X",
        "M": "2163",
        "D": "Tactical Graphics_Fire Support_Areas_Series Or Group Of Targets "
      },
      {
        "ID": "G*F*ATS---****X",
        "M": "2164",
        "D": "Tactical Graphics_Fire Support_Areas_Smoke "
      },
      {
        "ID": "G*F*ATB---****X",
        "M": "2165",
        "D": "Tactical Graphics_Fire Support_Areas_Bomb Area"
      },
      {
        "ID": "G*F*ACSI--****X",
        "M": "2166",
        "D": "Tactical Graphics_Fire Support_Areas_FSA_Irregular"
      },
      {
        "ID": "G*F*ACSR--****X",
        "M": "2167",
        "D": "Tactical Graphics_Fire Support_Areas_FSA_Rectangular"
      },
      {
        "ID": "G*F*ACSC--****X",
        "M": "2168",
        "D": "Tactical Graphics_Fire Support_Areas_FSA_Circular"
      },
      {
        "ID": "G*F*ACAI--****X",
        "M": "2169",
        "D": "Tactical Graphics_Fire Support_Areas_ACA_Irregular"
      },
      {
        "ID": "G*F*ACAR--****X",
        "M": "2170",
        "D": "Tactical Graphics_Fire Support_Areas_ACA_Rectangular"
      },
      {
        "ID": "G*F*ACAC--****X",
        "M": "2171",
        "D": "Tactical Graphics_Fire Support_Areas_ACA_Circular"
      },
      {
        "ID": "G*F*ACFI--****X",
        "M": "2172",
        "D": "Tactical Graphics_Fire Support_Areas_FFA_Irregular"
      },
      {
        "ID": "G*F*ACFR--****X",
        "M": "2173",
        "D": "Tactical Graphics_Fire Support_Areas_FFA_Rectangular"
      },
      {
        "ID": "G*F*ACFC--****X",
        "M": "2174",
        "D": "Tactical Graphics_Fire Support_Areas_FFA_Circular"
      },
      {
        "ID": "G*F*ACNI--****X",
        "M": "2175",
        "D": "Tactical Graphics_Fire Support_Areas_NFA_Irregular"
      },
      {
        "ID": "G*F*ACNR--****X",
        "M": "2176",
        "D": "Tactical Graphics_Fire Support_Areas_NFA_Rectangular"
      },
      {
        "ID": "G*F*ACNC--****X",
        "M": "2177",
        "D": "Tactical Graphics_Fire Support_Areas_NFA_Circular"
      },
      {
        "ID": "G*F*ACRI--****X",
        "M": "2178",
        "D": "Tactical Graphics_Fire Support_Areas_RFA_Irregular"
      },
      {
        "ID": "G*F*ACRR--****X",
        "M": "2179",
        "D": "Tactical Graphics_Fire Support_Areas_RFA_Rectangular"
      },
      {
        "ID": "G*F*ACRC--****X",
        "M": "2180",
        "D": "Tactical Graphics_Fire Support_Areas_RFA_Circular"
      },
      {
        "ID": "G*F*ACPR--****X",
        "M": "2181",
        "D": "Tactical Graphics_Fire Support_Areas_PAA_Rectangular "
      },
      {
        "ID": "G*F*ACPC--****X",
        "M": "2182",
        "D": "Tactical Graphics_Fire Support_Areas_PAA_Circular "
      },
      {
        "ID": "G*F*AZII--****X",
        "M": "2183",
        "D": "ATI_Irregular"
      },
      {
        "ID": "G*F*AZIR--****X",
        "M": "2184",
        "D": "ATI_Rectangular"
      },
      {
        "ID": "G*F*AZIC--****X",
        "M": "2185",
        "D": "ATI_Circular"
      },
      {
        "ID": "G*F*AZXI--****X",
        "M": "2186",
        "D": "CFFZ_Irregular"
      },
      {
        "ID": "G*F*AZXR--****X",
        "M": "2187",
        "D": "CFFZ_Rectangular"
      },
      {
        "ID": "G*F*AZXC--****X",
        "M": "2188",
        "D": "CFFZ_Circular"
      },
      {
        "ID": "G*F*AZSI--****X",
        "M": "2189",
        "D": "Sensor_Irregular"
      },
      {
        "ID": "G*F*ACEI--****X",
        "M": "2189",
        "D": "Sensor_Irregular"
      },
      {
        "ID": "G*F*AZSR--****X",
        "M": "2190",
        "D": "Sensor_Rectangular"
      },
      {
        "ID": "G*F*ACER--****X",
        "M": "2190",
        "D": "Sensor_Rectangular"
      },
      {
        "ID": "G*F*AZSC--****X",
        "M": "2191",
        "D": "Sensor_Circular"
      },
      {
        "ID": "G*F*ACEC--****X",
        "M": "2191",
        "D": "Sensor_Circular"
      },
      {
        "ID": "G*F*AZCI--****X",
        "M": "2192",
        "D": "Censor_Irregular"
      },
      {
        "ID": "G*F*AZCR--****X",
        "M": "2193",
        "D": "Censor_Rectangular"
      },
      {
        "ID": "G*F*AZCC--****X",
        "M": "2194",
        "D": "Censor_Circular"
      },
      {
        "ID": "G*F*AZDI--****X",
        "M": "2195",
        "D": "DA_Irregular"
      },
      {
        "ID": "G*F*ACDI--****X",
        "M": "2195",
        "D": "DA_Irregular"
      },
      {
        "ID": "G*F*AZDR--****X",
        "M": "2196",
        "D": "DA_Rectangular"
      },
      {
        "ID": "G*F*ACDR--****X",
        "M": "2196",
        "D": "DA_Rectangular"
      },
      {
        "ID": "G*F*AZDC--****X",
        "M": "2197",
        "D": "DA_Circular"
      },
      {
        "ID": "G*F*ACDC--****X",
        "M": "2197",
        "D": "DA_Circular"
      },
      {
        "ID": "G*F*AZFI--****X",
        "M": "2217",
        "D": "CFZ_Irregular"
      },
      {
        "ID": "G*F*AZFR--****X",
        "M": "2218",
        "D": "CFZ_Rectangular"
      },
      {
        "ID": "G*F*AZFC--****X",
        "M": "1052",
        "D": "CFZ_Circular"
      },
      {
        "ID": "G*F*AZZI--****X",
        "M": "2198",
        "D": "ZOR_Irregular"
      },
      {
        "ID": "G*F*ACZI--****X",
        "M": "2198",
        "D": "ZOR_Irregular"
      },
      {
        "ID": "G*F*AZZR--****X",
        "M": "2199",
        "D": "ZOR_Rectangular"
      },
      {
        "ID": "G*F*ACZR--****X",
        "M": "2199",
        "D": "ZOR_Rectangular"
      },
      {
        "ID": "G*F*AZZC--****X",
        "M": "2200",
        "D": "ZOR_Circular"
      },
      {
        "ID": "G*F*ACZC--****X",
        "M": "2200",
        "D": "ZOR_Circular"
      },
      {
        "ID": "G*F*AZBI--****X",
        "M": "2201",
        "D": "TBA_Irregular"
      },
      {
        "ID": "G*F*ACBI--****X",
        "M": "2201",
        "D": "TBA_Irregular"
      },
      {
        "ID": "G*F*AZBR--****X",
        "M": "2202",
        "D": "TBA_Rectangular"
      },
      {
        "ID": "G*F*ACBR--****X",
        "M": "2202",
        "D": "TBA_Rectangular"
      },
      {
        "ID": "G*F*AZBC--****X",
        "M": "2203",
        "D": "TBA_Circular"
      },
      {
        "ID": "G*F*ACBC--****X",
        "M": "2203",
        "D": "TBA_Circular"
      },
      {
        "ID": "G*F*AZVI--****X",
        "M": "2204",
        "D": "TVAR_Irregular"
      },
      {
        "ID": "G*F*ACVI--****X",
        "M": "2204",
        "D": "TVAR_Irregular"
      },
      {
        "ID": "G*F*AZVR--****X",
        "M": "2205",
        "D": "TVAR_Rectangular"
      },
      {
        "ID": "G*F*ACVR--****X",
        "M": "2205",
        "D": "TVAR_Rectangular"
      },
      {
        "ID": "G*F*AZVC--****X",
        "M": "2206",
        "D": "TVAR_Circular"
      },
      {
        "ID": "G*F*ACVC--****X",
        "M": "2206",
        "D": "TVAR_Circular"
      },
      {
        "ID": "G*F*ACT---****X",
        "M": "2210",
        "D": "TGMF"
      },
      {
        "ID": "G*F*AXC---****X",
        "M": "2207",
        "D": "Range_Fan"
      },
      {
        "ID": "G*F*AXS---****X",
        "M": "2208",
        "D": "Sector_Range_Fan"
      },
      {
        "ID": "G*F*AKBC--****X",
        "M": "2219",
        "D": "BKB Circular"
      },
      {
        "ID": "G*F*AKBI--****X",
        "M": "2220",
        "D": "BKB Irregular"
      },
      {
        "ID": "G*F*AKBR--****X",
        "M": "2221",
        "D": "BKB Rectangular"
      },
      {
        "ID": "G*F*AKPC--****X",
        "M": "2222",
        "D": "PKB Circular"
      },
      {
        "ID": "G*F*AKPI--****X",
        "M": "2223",
        "D": "PKB Irregular"
      },
      {
        "ID": "G*F*AKPR--****X",
        "M": "2224",
        "D": "PKB Rectangular"
      },
      {
        "ID": "G*S*LCM---****X",
        "M": "2226",
        "D": "Tactical Graphics_Combat Service Support_Lines_Convoys_Moving Convoy"
      },
      {
        "ID": "G*S*LCH---****X",
        "M": "2227",
        "D": "Tactical Graphics_Combat Service Support_Lines_Convoys_Halted Convoy"
      },
      {
        "ID": "G*S*LRM---****X",
        "M": "2228",
        "D": "Tactical Graphics_Combat Service Support_Lines_Supply Routes_Main Supply Route"
      },
      {
        "ID": "G*S*LRA---****X",
        "M": "2229",
        "D": "Tactical Graphics_Combat Service Support_Lines_Supply Routes_Alternate Supply Route "
      },
      {
        "ID": "G*S*LRO---****X",
        "M": "2230",
        "D": "Tactical Graphics_Combat Service Support_Lines_Supply Routes_One-Way Traffic"
      },
      {
        "ID": "G*S*LRT---****X",
        "M": "2231",
        "D": "Tactical Graphics_Combat Service Support_Lines_Supply Routes_Alternating Traffic "
      },
      {
        "ID": "G*S*LRW---****X",
        "M": "2232",
        "D": "Tactical Graphics_Combat Service Support_Lines_Supply Routes_Two-Way Traffic "
      },
      {
        "ID": "G*S*AD----****X",
        "M": "2233",
        "D": "Tactical Graphics_Combat Service Support_Area_Detainee Holding Area"
      },
      {
        "ID": "G*S*AE----****X",
        "M": "2234",
        "D": "Tactical Graphics_Combat Service Support_Area_Enemy Prisoner Of War (EPW) Holding Area "
      },
      {
        "ID": "G*S*AR----****X",
        "M": "2235",
        "D": "Tactical Graphics_Combat Service Support_Area_Forward Arming And Refueling Area (FARP) "
      },
      {
        "ID": "G*S*AH----****X",
        "M": "2236",
        "D": "Tactical Graphics_Combat Service Support_Area_Refugee Holding Area"
      },
      {
        "ID": "G*S*ASB---****X",
        "M": "2237",
        "D": "Tactical Graphics_Combat Service Support_Area_Support Areas_Brigade (BSA)"
      },
      {
        "ID": "G*S*ASD---****X",
        "M": "2238",
        "D": "Tactical Graphics_Combat Service Support_Area_Support Areas_Division (DSA)"
      },
      {
        "ID": "G*S*ASR---****X",
        "M": "2239",
        "D": "Tactical Graphics_Combat Service Support_Area_Support Areas_Regimental (RSA)"
      },
      {
        "ID": "G*O*HN----****X",
        "M": "2240",
        "D": "Tactical Graphics_Other_Hazard_Navigational"
      },
      {
        "ID": "G*O*B-----****X",
        "M": "2241",
        "D": "Tactical Graphics_Other_Bearing Line"
      },
      {
        "ID": "G*O*BE----****X",
        "M": "2242",
        "D": "Tactical Graphics_Other_Bearing Line_Electronic"
      },
      {
        "ID": "G*O*BA----****X",
        "M": "2243",
        "D": "Tactical Graphics_Other_Bearing Line_Acoustic"
      },
      {
        "ID": "G*O*BT----****X",
        "M": "2244",
        "D": "Tactical Graphics_Other_Bearing Line_Torpedo"
      },
      {
        "ID": "G*O*BO----****X",
        "M": "2245",
        "D": "Tactical Graphics_Other_Bearing Line_Electro-Optical Intercept"
      },
      {
        "ID": "WA-DPFC----L---",
        "M": "3000",
        "D": "Cold Front"
      },
      {
        "ID": "WA-DPFCU---L---",
        "M": "3001",
        "D": "Upper Cold Front"
      },
      {
        "ID": "WA-DPFC-FG-L---",
        "M": "3002",
        "D": "Cold Frontogenisis"
      },
      {
        "ID": "WA-DPFC-FY-L---",
        "M": "3003",
        "D": "Cold Frontolysis"
      },
      {
        "ID": "WA-DPFW----L---",
        "M": "3004",
        "D": "Warm Front"
      },
      {
        "ID": "WA-DPFWU---L---",
        "M": "3005",
        "D": "Upper Warm Front "
      },
      {
        "ID": "WA-DPFW-FG-L---",
        "M": "3006",
        "D": "Warm Frontogenesis "
      },
      {
        "ID": "WA-DPFW-FY-L---",
        "M": "3007",
        "D": "Warm Frontolysis "
      },
      {
        "ID": "WA-DPFO----L---",
        "M": "3008",
        "D": "Occluded Front "
      },
      {
        "ID": "WA-DPFOU---L---",
        "M": "3009",
        "D": "Upper Occluded Front "
      },
      {
        "ID": "WA-DPFO-FY-L---",
        "M": "3010",
        "D": "Occluded Frontolysis "
      },
      {
        "ID": "WA-DPFS----L---",
        "M": "3011",
        "D": "Stationary Front"
      },
      {
        "ID": "WA-DPFSU---L---",
        "M": "3012",
        "D": "Upper Stationary Front"
      },
      {
        "ID": "WA-DPFS-FG-L---",
        "M": "3013",
        "D": "Stationary Frontogenesis"
      },
      {
        "ID": "WA-DPFS-FY-L---",
        "M": "3014",
        "D": "Stationary Frontolysis"
      },
      {
        "ID": "WA-DPXT----L---",
        "M": "3015",
        "D": "Trough Axis"
      },
      {
        "ID": "WA-DPXR----L---",
        "M": "3016",
        "D": "Ridge Line "
      },
      {
        "ID": "WA-DPXSQ---L---",
        "M": "3017",
        "D": "Squall Line "
      },
      {
        "ID": "WA-DPXIL---L---",
        "M": "3018",
        "D": "Instability Line "
      },
      {
        "ID": "WA-DPXSH---L---",
        "M": "3019",
        "D": "Shear Line "
      },
      {
        "ID": "WA-DPXITCZ-L---",
        "M": "3020",
        "D": "Inter-Tropical Convergance Zone "
      },
      {
        "ID": "WA-DPXCV---L---",
        "M": "3021",
        "D": "Convergance Line "
      },
      {
        "ID": "WA-DPXITD--L---",
        "M": "3022",
        "D": "Inter-Tropical Discontinuity "
      },
      {
        "ID": "WAS-WP----P----",
        "M": "3023",
        "D": "Wind Plot"
      },
      {
        "ID": "WA-DWJ-----L---",
        "M": "3030",
        "D": "Jet Stream Line"
      },
      {
        "ID": "WA-DWS-----L---",
        "M": "3031",
        "D": "Stream Line"
      },
      {
        "ID": "WA-DWSTSWA--A--",
        "M": "3032",
        "D": "Tropical Storm Wind Areas"
      },
      {
        "ID": "WA-DBAIF----A--",
        "M": "3034",
        "D": "IFR"
      },
      {
        "ID": "WA-DBAMV----A--",
        "M": "3035",
        "D": "MVFR "
      },
      {
        "ID": "WA-DBATB----A--",
        "M": "3036",
        "D": "Weather Turbulence"
      },
      {
        "ID": "WA-DBAI-----A--",
        "M": "3037",
        "D": "Weather Icing"
      },
      {
        "ID": "WA-DBALPNC--A--",
        "M": "3038",
        "D": "Precipitation Non-Convective "
      },
      {
        "ID": "WA-DBALPC---A--",
        "M": "3039",
        "D": "Precipitation Convective"
      },
      {
        "ID": "WA-DBAFP----A--",
        "M": "3040",
        "D": "Frozen Precipitation"
      },
      {
        "ID": "WA-DBAT-----A--",
        "M": "3041",
        "D": "Weather Thunderstorm "
      },
      {
        "ID": "WA-DBAFG----A--",
        "M": "3042",
        "D": "Weather Fog"
      },
      {
        "ID": "WA-DBAD-----A--",
        "M": "3043",
        "D": "Weather Sand"
      },
      {
        "ID": "WA-DBAFF----A--",
        "M": "3044",
        "D": "Weather Freeform "
      },
      {
        "ID": "WA-DIPIB---L---",
        "M": "3045",
        "D": "Isobar Surface"
      },
      {
        "ID": "WA-DIPCO---L---",
        "M": "3046",
        "D": "Upper Air"
      },
      {
        "ID": "WA-DIPIS---L---",
        "M": "3047",
        "D": "Isotherm "
      },
      {
        "ID": "WA-DIPIT---L---",
        "M": "3048",
        "D": "Isotach"
      },
      {
        "ID": "WA-DIPID---L---",
        "M": "3049",
        "D": "Isodrosotherm"
      },
      {
        "ID": "WA-DIPTH---L---",
        "M": "3050",
        "D": "Isopleths "
      },
      {
        "ID": "WA-DIPFF---L---",
        "M": "3051",
        "D": "Operator Freeform "
      },
      {
        "ID": "WO-DILOV---L---",
        "M": "3052",
        "D": "Limit of Visual Observation"
      },
      {
        "ID": "WO-DILUC---L---",
        "M": "3053",
        "D": "Limit of Undercast"
      },
      {
        "ID": "WO-DILOR---L---",
        "M": "3054",
        "D": "Limit of Radar Observation"
      },
      {
        "ID": "WO-DILIEO--L---",
        "M": "3055",
        "D": "Observed Ice Edge "
      },
      {
        "ID": "WO-DILIEE--L---",
        "M": "3056",
        "D": "Estimated Ice Edge"
      },
      {
        "ID": "WO-DILIER--L---",
        "M": "3057",
        "D": "Ice Edge From Radar "
      },
      {
        "ID": "WO-DIOC----L---",
        "M": "3058",
        "D": "Cracks"
      },
      {
        "ID": "WO-DIOCS---L---",
        "M": "3059",
        "D": "Cracks Specific-Location "
      },
      {
        "ID": "WO-DIOL----L---",
        "M": "3060",
        "D": "Ice Openings-Lead"
      },
      {
        "ID": "WO-DIOLF---L---",
        "M": "3061",
        "D": "Frozen Lead "
      },
      {
        "ID": "WO-DHDDL---L---",
        "M": "3062",
        "D": "Depth Curve"
      },
      {
        "ID": "WO-DHDDC---L---",
        "M": "3063",
        "D": "Depth Contour"
      },
      {
        "ID": "WO-DHDDA----A--",
        "M": "3064",
        "D": "Depth Area "
      },
      {
        "ID": "WO-DHCC----L---",
        "M": "3065",
        "D": "Coastline "
      },
      {
        "ID": "WO-DHCI-----A--",
        "M": "3066",
        "D": "Island "
      },
      {
        "ID": "WO-DHCB-----A--",
        "M": "3067",
        "D": "Beach"
      },
      {
        "ID": "WO-DHCW-----A--",
        "M": "3068",
        "D": "Water "
      },
      {
        "ID": "WO-DHCF----L---",
        "M": "3069",
        "D": "Foreshore Line"
      },
      {
        "ID": "WO-DHCF-----A--",
        "M": "3070",
        "D": "Foreshore Area "
      },
      {
        "ID": "WO-DHPBA---L---",
        "M": "3071",
        "D": "Anchorage Line "
      },
      {
        "ID": "WO-DHPBA----A--",
        "M": "3072",
        "D": "Anchorage Area"
      },
      {
        "ID": "WO-DHPBP---L---",
        "M": "3073",
        "D": "Pier "
      },
      {
        "ID": "WOS-HPFF----A--",
        "M": "3074",
        "D": "Wiers"
      },
      {
        "ID": "WO-DHPMD----A--",
        "M": "3075",
        "D": "Drydock"
      },
      {
        "ID": "WO-DHPMO---L---",
        "M": "3076",
        "D": "Offshore Loading Facility Line"
      },
      {
        "ID": "WO-DHPMO----A--",
        "M": "3077",
        "D": "Offshore Loading Facility Area "
      },
      {
        "ID": "WO-DHPMRA--L---",
        "M": "3078",
        "D": "Ramp Above Water"
      },
      {
        "ID": "WO-DHPMRB--L---",
        "M": "3079",
        "D": "Ramp Below Water "
      },
      {
        "ID": "WO-DHPSPA--L---",
        "M": "3080",
        "D": "Jetty Above Water "
      },
      {
        "ID": "WO-DHPSPB--L---",
        "M": "3081",
        "D": "Jetty Below Water"
      },
      {
        "ID": "WO-DHPSPS--L---",
        "M": "3082",
        "D": "Seawall "
      },
      {
        "ID": "WO-DHABP----A--",
        "M": "3083",
        "D": "Perches "
      },
      {
        "ID": "WO-DHALLA--L---",
        "M": "3084",
        "D": "Leading Line"
      },
      {
        "ID": "WO-DHHD-----A--",
        "M": "3085",
        "D": "Underwater Hazard"
      },
      {
        "ID": "WO-DHHDF----A--",
        "M": "3200",
        "D": "Foul Ground"
      },
      {
        "ID": "WO-DHHDK----A--",
        "M": "3201",
        "D": "Kelp"
      },
      {
        "ID": "WO-DHHDB---L---",
        "M": "3086",
        "D": "Breaker "
      },
      {
        "ID": "WOS-HHDR---L---",
        "M": "3087",
        "D": "Reef"
      },
      {
        "ID": "WO-DHHDD----A--",
        "M": "3089",
        "D": "Discolored Water "
      },
      {
        "ID": "WO-DTCCCFE-L---",
        "M": "3090",
        "D": "Ebb Tide "
      },
      {
        "ID": "WO-DTCCCFF-L---",
        "M": "3091",
        "D": "Flood Tide"
      },
      {
        "ID": "WO-DOBVA----A--",
        "M": "3092",
        "D": "VDR Level 1-2"
      },
      {
        "ID": "WO-DOBVB----A--",
        "M": "3092",
        "D": "VDR Level 2-3 "
      },
      {
        "ID": "WO-DOBVC----A--",
        "M": "3092",
        "D": "VDR Level 3-4"
      },
      {
        "ID": "WO-DOBVD----A--",
        "M": "3092",
        "D": "VDR Level 4-5 "
      },
      {
        "ID": "WO-DOBVE----A--",
        "M": "3092",
        "D": "VDR Level 5-6"
      },
      {
        "ID": "WO-DOBVF----A--",
        "M": "3092",
        "D": "VDR Level 6-7 "
      },
      {
        "ID": "WO-DOBVG----A--",
        "M": "3092",
        "D": "VDR Level 7-8"
      },
      {
        "ID": "WO-DOBVH----A--",
        "M": "3092",
        "D": "VDR Level 8-9"
      },
      {
        "ID": "WO-DOBVI----A--",
        "M": "3092",
        "D": "VDR Level 9-10"
      },
      {
        "ID": "WO-DBSF-----A--",
        "M": "3093",
        "D": "Beach Slope Flat "
      },
      {
        "ID": "WO-DBSG-----A--",
        "M": "3094",
        "D": "Beach Slope Gentle"
      },
      {
        "ID": "WO-DBSM-----A--",
        "M": "3095",
        "D": "Beach Slope Moderate"
      },
      {
        "ID": "WO-DBST-----A--",
        "M": "3096",
        "D": "Beach Slope Steep"
      },
      {
        "ID": "WO-DGMSR----A--",
        "M": "3097",
        "D": "Solid Rock "
      },
      {
        "ID": "WO-DGMSC----A--",
        "M": "3098",
        "D": "Clay"
      },
      {
        "ID": "WO-DGMSSVS--A--",
        "M": "3098",
        "D": "Very Course Sand"
      },
      {
        "ID": "WO-DGMSSC---A--",
        "M": "3098",
        "D": "Coarse Sand"
      },
      {
        "ID": "WO-DGMSSM---A--",
        "M": "3098",
        "D": "Medium Sand"
      },
      {
        "ID": "WO-DGMSSF---A--",
        "M": "3098",
        "D": "Fine Sand "
      },
      {
        "ID": "WO-DGMSSVF--A--",
        "M": "3098",
        "D": "Very Fine Sand"
      },
      {
        "ID": "WO-DGMSIVF--A--",
        "M": "3098",
        "D": "Very Fine Silt "
      },
      {
        "ID": "WO-DGMSIF---A--",
        "M": "3098",
        "D": "Fine Silt"
      },
      {
        "ID": "WO-DGMSIM---A--",
        "M": "3098",
        "D": "Medium Silt "
      },
      {
        "ID": "WO-DGMSIC---A--",
        "M": "3098",
        "D": "Coarse Silt"
      },
      {
        "ID": "WO-DGMSB----A--",
        "M": "3098",
        "D": "Boulders"
      },
      {
        "ID": "WO-DGMS-CO--A--",
        "M": "3098",
        "D": "Oyster Shells"
      },
      {
        "ID": "WO-DGMS-PH--A--",
        "M": "3098",
        "D": "Pebbles Shells "
      },
      {
        "ID": "WO-DGMS-SH--A--",
        "M": "3098",
        "D": "Sand and Shells"
      },
      {
        "ID": "WO-DGML-----A--",
        "M": "3098",
        "D": "Bottom Sediments Land"
      },
      {
        "ID": "WO-DGMN-----A--",
        "M": "3098",
        "D": "Bottom Sediments Land"
      },
      {
        "ID": "WO-DGMRS----A--",
        "M": "3098",
        "D": "Bottom Roughness Smooth"
      },
      {
        "ID": "WO-DGMRM----A--",
        "M": "3098",
        "D": "Bottom Roughness Moderate"
      },
      {
        "ID": "WO-DGMRR----A--",
        "M": "3098",
        "D": "Bottom Roughness Rough"
      },
      {
        "ID": "WO-DGMCL----A--",
        "M": "3098",
        "D": "Clutter Low"
      },
      {
        "ID": "WO-DGMCM----A--",
        "M": "3098",
        "D": "Clutter Medium"
      },
      {
        "ID": "WO-DGMCH----A--",
        "M": "3098",
        "D": "Clutter High"
      },
      {
        "ID": "WO-DGMIBA---A--",
        "M": "3098",
        "D": "Impact Burial 0"
      },
      {
        "ID": "WO-DGMIBB---A--",
        "M": "3098",
        "D": "Impact Burial 10"
      },
      {
        "ID": "WO-DGMIBC---A--",
        "M": "3098",
        "D": "Impact Burial 20"
      },
      {
        "ID": "WO-DGMIBD---A--",
        "M": "3098",
        "D": "Impact Burial 75"
      },
      {
        "ID": "WO-DGMIBE---A--",
        "M": "3098",
        "D": "Impact Burial 100"
      },
      {
        "ID": "WO-DGMBCA---A--",
        "M": "3098",
        "D": "Bottom Category A"
      },
      {
        "ID": "WO-DGMBCB---A--",
        "M": "3098",
        "D": "Bottom Category B"
      },
      {
        "ID": "WO-DGMBCC---A--",
        "M": "3098",
        "D": "Bottom Category C"
      },
      {
        "ID": "WO-DGMBTA---A--",
        "M": "3098",
        "D": "Bottom Type A1"
      },
      {
        "ID": "WO-DGMBTB---A--",
        "M": "3098",
        "D": "Bottom Type A2"
      },
      {
        "ID": "WO-DGMBTC---A--",
        "M": "3098",
        "D": "Bottom Type A3"
      },
      {
        "ID": "WO-DGMBTD---A--",
        "M": "3098",
        "D": "Bottom Type B1"
      },
      {
        "ID": "WO-DGMBTE---A--",
        "M": "3098",
        "D": "Bottom Type B2"
      },
      {
        "ID": "WO-DGMBTF---A--",
        "M": "3098",
        "D": "Bottom Type B3"
      },
      {
        "ID": "WO-DGMBTG---A--",
        "M": "3098",
        "D": "Bottom Type C1"
      },
      {
        "ID": "WO-DGMBTH---A--",
        "M": "3098",
        "D": "Bottom Type C2"
      },
      {
        "ID": "WO-DGMBTI---A--",
        "M": "3098",
        "D": "Bottom Type C3"
      },
      {
        "ID": "WO-DL-ML---L---",
        "M": "3099",
        "D": "Maritime Limit"
      },
      {
        "ID": "WO-DL-MA----A--",
        "M": "3100",
        "D": "Maritime Area"
      },
      {
        "ID": "WO-DL-RA---L---",
        "M": "3101",
        "D": "Restricted Area"
      },
      {
        "ID": "WO-DL-SA----A--",
        "M": "3102",
        "D": "Swept Area"
      },
      {
        "ID": "WO-DL-TA----A--",
        "M": "3103",
        "D": "Training Area"
      },
      {
        "ID": "WO-DL-O-----A--",
        "M": "3104",
        "D": "Operator Defined"
      },
      {
        "ID": "WO-DMCA----L---",
        "M": "3105",
        "D": "Cable"
      },
      {
        "ID": "WO-DMCC-----A--",
        "M": "3106",
        "D": "Submerged Crib"
      },
      {
        "ID": "WO-DMCD----L---",
        "M": "3107",
        "D": "Canal"
      },
      {
        "ID": "WO-DMOA-----A--",
        "M": "3108",
        "D": "Oil Rig Field "
      },
      {
        "ID": "WO-DMPA----L---",
        "M": "3109",
        "D": "Pipe"
      },
      {
        "ID": "CYLINDER-------",
        "M": "900",
        "D": "Cylinder"
      },
      {
        "ID": "ORBIT----------",
        "M": "900",
        "D": "Orbit"
      },
      {
        "ID": "ROUTE----------",
        "M": "900",
        "D": "Route"
      },
      {
        "ID": "POLYGON--------",
        "M": "900",
        "D": "Polygon"
      },
      {
        "ID": "RADARC---------",
        "M": "900",
        "D": "Radarc"
      },
      {
        "ID": "POLYARC--------",
        "M": "900",
        "D": "Polyarc"
      },
      {
        "ID": "CAKE-----------",
        "M": "900",
        "D": "Cake"
      },
      {
        "ID": "TRACK----------",
        "M": "900",
        "D": "Track"
      },
      {
        "ID": "CURTAIN--------",
        "M": "900",
        "D": "Curtain"
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
                    data.description = symbol["D"] || ""; //DESCRIPTION
					
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