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
    //spMappingXml =  '<TACTICALGRAPHICS><SYMBOL><SYMBOLID>G*T*B-----****X</SYMBOLID><MAPPING>2001</MAPPING><DESCRIPTION>Tactical Graphics_ Tasks_Block</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*H-----****X</SYMBOLID><MAPPING>2002</MAPPING><DESCRIPTION>Tactical Graphics_ Tasks_Breach</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*Y-----****X</SYMBOLID><MAPPING>2003</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Bypass</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*C-----****X</SYMBOLID><MAPPING>2004</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Canalize</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*X-----****X</SYMBOLID><MAPPING>2005</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Clear</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*J-----****X</SYMBOLID><MAPPING>2006</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Contain</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*K-----****X</SYMBOLID><MAPPING>2007</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Counterattach (CATK)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*KF----****X</SYMBOLID><MAPPING>2008</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Counterattack (CATK)_Counterattack By Fire</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*L-----****X</SYMBOLID><MAPPING>2009</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Delay</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*T-----****X</SYMBOLID><MAPPING>2011</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Disrupt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*F-----****X</SYMBOLID><MAPPING>2012</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Fix</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*A-----****X</SYMBOLID><MAPPING>2013</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Follow And Assume</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*AS----****X</SYMBOLID><MAPPING>2014</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Follow And Assume_Follow And Support</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*E-----****X</SYMBOLID><MAPPING>2016</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Isolate</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*O-----****X</SYMBOLID><MAPPING>2018</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Occupy</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*P-----****X</SYMBOLID><MAPPING>2019</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Penetrate</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*R-----****X</SYMBOLID><MAPPING>2020</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Relief In Place (RIP)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*Q-----****X</SYMBOLID><MAPPING>2021</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Retain</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*M-----****X</SYMBOLID><MAPPING>2022</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Retirement</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*S-----****X</SYMBOLID><MAPPING>2023</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Secure</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*US----****X</SYMBOLID><MAPPING>2024</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Security_Screen</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*UG----****X</SYMBOLID><MAPPING>2025</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Security_Guard</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*UC----****X</SYMBOLID><MAPPING>2026</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Security_Cover</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*Z-----****X</SYMBOLID><MAPPING>2027</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Seize</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*W-----****X</SYMBOLID><MAPPING>2028</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Withdraw</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*WP----****X</SYMBOLID><MAPPING>2029</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Withdraw_Withdraw Under Pressure</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*V-----****X</SYMBOLID><MAPPING>2016</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Cordon_and_Search</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*T*2-----****X</SYMBOLID><MAPPING>2016</MAPPING><DESCRIPTION>Tactical Graphics_Tasks_Cordon_and_Knock</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GLB---****X</SYMBOLID><MAPPING>2030</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Boundaries</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GLF---****X</SYMBOLID><MAPPING>2031</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Forward Line Of Own Troops (Flot)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GLC---****X</SYMBOLID><MAPPING>2032</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Line Of Contact</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GLP---****X</SYMBOLID><MAPPING>2033</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Phase Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GLL---****X</SYMBOLID><MAPPING>2034</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Light Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAG---****X</SYMBOLID><MAPPING>2035</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_General Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAA---****X</SYMBOLID><MAPPING>2036</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Assembly Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAE---****X</SYMBOLID><MAPPING>2037</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Engagement Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAF---****X</SYMBOLID><MAPPING>2038</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Lines_Fortified Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAD---****X</SYMBOLID><MAPPING>2039</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Drop Zone</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAX---****X</SYMBOLID><MAPPING>2040</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Area_Extraction Zone (EZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAL---****X</SYMBOLID><MAPPING>2041</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Landing Zone (LZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAP---****X</SYMBOLID><MAPPING>2042</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Pickup Zone (PZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAS---****X</SYMBOLID><MAPPING>2043</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Search Area/Reconnaissance Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAY---****X</SYMBOLID><MAPPING>2044</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Limited Access Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*GAZ---****X</SYMBOLID><MAPPING>2045</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_General_Areas_Airfield Zone</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*ALC---****X</SYMBOLID><MAPPING>2046</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Air Corridor</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*ALM---****X</SYMBOLID><MAPPING>2047</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Minimum Risk Route (MRR)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*ALS---****X</SYMBOLID><MAPPING>2048</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Standard-Use Army Aircraft Flight Route (SAAFR)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*ALU---****X</SYMBOLID><MAPPING>2049</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Unmanned Aerial Vehicle (UAV) Route</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*ALL---****X</SYMBOLID><MAPPING>2050</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Low Level Transit Route (LLTR)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAR---****X</SYMBOLID><MAPPING>2051</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Restricted Operations Zone (ROZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAF---****X</SYMBOLID><MAPPING>2052</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Forward Area Ari Defense Zone (FAADEZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAF---2525C</SYMBOLID><MAPPING>2053</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_SHORT-RANGE_AIR_DEFENSE_ENGAGEMENT_ZONE (SHORADEZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAH---****X</SYMBOLID><MAPPING>2054</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_High Density Airpspace Control Zone (Hidacz)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAM---****X</SYMBOLID><MAPPING>2055</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Engagement Zone (MEZ)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAML--****X</SYMBOLID><MAPPING>2056</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Enagement Zone (MEZ) Low Altitude Mez</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAMH--****X</SYMBOLID><MAPPING>2057</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Engagement Zone (MEZ)_High Altitude MEZ</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*AAW---****X</SYMBOLID><MAPPING>2058</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Weapoins Free Zone</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PD----****X</SYMBOLID><MAPPING>2059</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Dummy (Deception) (Decoy)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PA----****X</SYMBOLID><MAPPING>2060</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Axis Of Advance For Feint</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PF----****X</SYMBOLID><MAPPING>2061</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Direction Of Attack For Feint</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PM----****X</SYMBOLID><MAPPING>2062</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Decoy Mined Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PY----****X</SYMBOLID><MAPPING>2063</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Decoy Mined Area, Fenced</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*PC----****X</SYMBOLID><MAPPING>2064</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Deception_Dummy Minefield - Dynamic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*DLF---****X</SYMBOLID><MAPPING>2065</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Defense_Lines_Forward Edge Of Battle Area (FEBA)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*DLP---****X</SYMBOLID><MAPPING>2066</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Defense_Lines_Principal Direction Of Fire (PDF)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*DAB---****X</SYMBOLID><MAPPING>2067</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Defense_Areas_Battle Position</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*DABP--****X</SYMBOLID><MAPPING>2068</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Defense_Areas_Battle Position_Prepared But Not Occupied</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*DAE---****X</SYMBOLID><MAPPING>2069</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Defense_Area_Engagement Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLAV--****X</SYMBOLID><MAPPING>2070</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Aviation</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLAA--****X</SYMBOLID><MAPPING>2071</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Airborne</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLAR--****X</SYMBOLID><MAPPING>2072</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Attack, Rotory Wing</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLAGM-****X</SYMBOLID><MAPPING>2073</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Ground_Main Attack</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLAGS-****X</SYMBOLID><MAPPING>2074</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Ground_Support Attack</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLKA--****X</SYMBOLID><MAPPING>2075</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Aviation</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLKGM-****X</SYMBOLID><MAPPING>2076</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Ground_Main Attack</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLKGS-****X</SYMBOLID><MAPPING>2077</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Ground_ Supporting Attack</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLF---****X</SYMBOLID><MAPPING>2078</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Final Coordination Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLI---****X</SYMBOLID><MAPPING>2079</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Infiltration Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLL---****X</SYMBOLID><MAPPING>2080</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Limit Of Advance</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLT---****X</SYMBOLID><MAPPING>2081</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Line Of Departure</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLC---****X</SYMBOLID><MAPPING>2082</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Line Of Departure/Line Of Contact (LD.LC)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OLP---****X</SYMBOLID><MAPPING>2083</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Probable Line Of Deployment (PLD)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAA---****X</SYMBOLID><MAPPING>2084</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Assault Position</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAK---****X</SYMBOLID><MAPPING>2085</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Attack Position</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAF---****X</SYMBOLID><MAPPING>2086</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Attack By Fire Position</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAS---****X</SYMBOLID><MAPPING>2087</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Support By Fire Position</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAO---****X</SYMBOLID><MAPPING>2088</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Objective</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*OAP---****X</SYMBOLID><MAPPING>2089</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Penetration BoX</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SLA---****X</SYMBOLID><MAPPING>2090</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Line_Ambush</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SLH---****X</SYMBOLID><MAPPING>2091</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Line_Holding Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SLR---****X</SYMBOLID><MAPPING>2092</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Line_Release Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SLB---****X</SYMBOLID><MAPPING>2093</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Bridgehead</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SAO---****X</SYMBOLID><MAPPING>2094</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Area Of Operations (AO)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SAA---****X</SYMBOLID><MAPPING>2095</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Airhead</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SAE---****X</SYMBOLID><MAPPING>2096</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Encirclement</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SAN---****X</SYMBOLID><MAPPING>2097</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Named Area Of Interest (NAI)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*G*SAT---****X</SYMBOLID><MAPPING>2098</MAPPING><DESCRIPTION>Tactical Graphics_Command And Control And General Maneuver_Special_Area_Targeted Area Of Interest (TAI)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OGB---****X</SYMBOLID><MAPPING>2099</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_General_Belt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OGL---****X</SYMBOLID><MAPPING>2100</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_General_Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OGZ---****X</SYMBOLID><MAPPING>2101</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_General_Zone</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OGF---****X</SYMBOLID><MAPPING>2102</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_General_Obstacle Free Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OGR---****X</SYMBOLID><MAPPING>2103</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_General_Obstacle Restricted Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OS----****X</SYMBOLID><MAPPING>2104</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Abatis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OADU--****X</SYMBOLID><MAPPING>2105</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch_Under Construction</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OADC--****X</SYMBOLID><MAPPING>2106</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch_Complete</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OAR---****X</SYMBOLID><MAPPING>2107</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch Reinforced With Antitank Mines</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OAW---****X</SYMBOLID><MAPPING>2108</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Wall</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OMC---****X</SYMBOLID><MAPPING>2109</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Mines_Mine Cluster</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OFD---****X</SYMBOLID><MAPPING>2110</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Dynamic Depiction</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OFG---****X</SYMBOLID><MAPPING>2111</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Gap</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OFA---****X</SYMBOLID><MAPPING>2112</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Minded Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OEB---****X</SYMBOLID><MAPPING>2113</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Block</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OEF---****X</SYMBOLID><MAPPING>2114</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_FiX</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OET---****X</SYMBOLID><MAPPING>2115</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Turn</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OED---****X</SYMBOLID><MAPPING>2116</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Disrupt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OU----****X</SYMBOLID><MAPPING>2117</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Unexploed Ordinance Area (UXO)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*ORP---****X</SYMBOLID><MAPPING>2118</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Planned</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*ORS---****X</SYMBOLID><MAPPING>2119</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Explosives, State Of Readiness 1 (Safe)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*ORA---****X</SYMBOLID><MAPPING>2120</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Explosives, State Of Readiness 2 (Armed-But Passable)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*ORC---****X</SYMBOLID><MAPPING>2121</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Roadblock Complete (Executed)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OT----****X</SYMBOLID><MAPPING>2122</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Trip Wire</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWU---****X</SYMBOLID><MAPPING>2123</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle Unspecified</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWS---****X</SYMBOLID><MAPPING>2124</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_ Single Fence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWD---****X</SYMBOLID><MAPPING>2125</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Fence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWA---****X</SYMBOLID><MAPPING>2126</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Apron Fence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWL---****X</SYMBOLID><MAPPING>2127</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Low Wire Fence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWH---****X</SYMBOLID><MAPPING>2128</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_High Wire Fence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWCS--****X</SYMBOLID><MAPPING>2129</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Single Concertina</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWCD--****X</SYMBOLID><MAPPING>2130</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Strand Concertina</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OWCT--****X</SYMBOLID><MAPPING>2131</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Triple Strand Concertina</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*OHO---****X</SYMBOLID><MAPPING>2133</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacles_Aviation Overhead Wire</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BDE---****X</SYMBOLID><MAPPING>2134</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Easy</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BDD---****X</SYMBOLID><MAPPING>2135</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Difficult</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BDI---****X</SYMBOLID><MAPPING>2136</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Impossible</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCA---****X</SYMBOLID><MAPPING>2137</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Assault Crossing Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCB---****X</SYMBOLID><MAPPING>2138</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Bridge Or Gap</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCF---****X</SYMBOLID><MAPPING>2139</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ferry</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCE---****X</SYMBOLID><MAPPING>2140</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ford Easy</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCD---****X</SYMBOLID><MAPPING>2141</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ford Difficult</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCL---****X</SYMBOLID><MAPPING>2142</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Lane</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*BCR---****X</SYMBOLID><MAPPING>2143</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Raft Site</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*SL----****X</SYMBOLID><MAPPING>2144</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Surivability_Fortified Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*SW----****X</SYMBOLID><MAPPING>2145</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Surivability_Foxhole, Emplacement Or Weapon Site</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*SP----****X</SYMBOLID><MAPPING>2146</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Surivability_Strong Point</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*NM----****X</SYMBOLID><MAPPING>2147</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Minimum Safe Distrance Zones</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*NR----****X</SYMBOLID><MAPPING>2148</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Radio Active Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*NB----****X</SYMBOLID><MAPPING>2149</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Biologically Contaminated Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*NC----****X</SYMBOLID><MAPPING>2150</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Chemically Contaminated Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*M*NL----****X</SYMBOLID><MAPPING>2151</MAPPING><DESCRIPTION>Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Dose Rate Contour Lines</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LT----****X</SYMBOLID><MAPPING>2152</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Linear Target</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LTS---****X</SYMBOLID><MAPPING>2153</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Linear Smoke Target</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LTF---****X</SYMBOLID><MAPPING>2154</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Final Protective Fire (FPF)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LCF---****X</SYMBOLID><MAPPING>2155</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Fire Support Coordination Line (FSCL)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LCC---****X</SYMBOLID><MAPPING>2156</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Coordinated Fire Line (CFL)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LCN---****X</SYMBOLID><MAPPING>2157</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_No-Fire Line (NFL)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LCR---****X</SYMBOLID><MAPPING>2158</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Restrictive Fire Line (RFL)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*LCM---****X</SYMBOLID><MAPPING>2159</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Lines_Munition Flight Path (MFP)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AT----****X</SYMBOLID><MAPPING>2160</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Area Target</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ATR---****X</SYMBOLID><MAPPING>2161</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Area Target_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ATC---****X</SYMBOLID><MAPPING>2162</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Area Target_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ATG---****X</SYMBOLID><MAPPING>2163</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Series Or Group Of Targets</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ATS---****X</SYMBOLID><MAPPING>2164</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Smoke</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ATB---****X</SYMBOLID><MAPPING>2165</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_Bomb Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACSI--****X</SYMBOLID><MAPPING>2166</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FSA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACSR--****X</SYMBOLID><MAPPING>2167</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FSA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACSC--****X</SYMBOLID><MAPPING>2168</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FSA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACAI--****X</SYMBOLID><MAPPING>2169</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_ACA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACAR--****X</SYMBOLID><MAPPING>2170</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_ACA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACAC--****X</SYMBOLID><MAPPING>2171</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_ACA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACFI--****X</SYMBOLID><MAPPING>2172</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FFA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACFR--****X</SYMBOLID><MAPPING>2173</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FFA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACFC--****X</SYMBOLID><MAPPING>2174</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_FFA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACNI--****X</SYMBOLID><MAPPING>2175</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_NFA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACNR--****X</SYMBOLID><MAPPING>2176</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_NFA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACNC--****X</SYMBOLID><MAPPING>2177</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_NFA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACRI--****X</SYMBOLID><MAPPING>2178</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_RFA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACRR--****X</SYMBOLID><MAPPING>2179</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_RFA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACRC--****X</SYMBOLID><MAPPING>2180</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_RFA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACPR--****X</SYMBOLID><MAPPING>2181</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_PAA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACPC--****X</SYMBOLID><MAPPING>2182</MAPPING><DESCRIPTION>Tactical Graphics_Fire Support_Areas_PAA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZII--****X</SYMBOLID><MAPPING>2183</MAPPING><DESCRIPTION>ATI_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZIR--****X</SYMBOLID><MAPPING>2184</MAPPING><DESCRIPTION>ATI_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZIC--****X</SYMBOLID><MAPPING>2185</MAPPING><DESCRIPTION>ATI_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZXI--****X</SYMBOLID><MAPPING>2186</MAPPING><DESCRIPTION>CFFZ_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZXR--****X</SYMBOLID><MAPPING>2187</MAPPING><DESCRIPTION>CFFZ_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZXC--****X</SYMBOLID><MAPPING>2188</MAPPING><DESCRIPTION>CFFZ_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZSI--****X</SYMBOLID><MAPPING>2189</MAPPING><DESCRIPTION>Sensor_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACEI--****X</SYMBOLID><MAPPING>2189</MAPPING><DESCRIPTION>Sensor_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZSR--****X</SYMBOLID><MAPPING>2190</MAPPING><DESCRIPTION>Sensor_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACER--****X</SYMBOLID><MAPPING>2190</MAPPING><DESCRIPTION>Sensor_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZSC--****X</SYMBOLID><MAPPING>2191</MAPPING><DESCRIPTION>Sensor_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACEC--****X</SYMBOLID><MAPPING>2191</MAPPING><DESCRIPTION>Sensor_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZCI--****X</SYMBOLID><MAPPING>2192</MAPPING><DESCRIPTION>Censor_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZCR--****X</SYMBOLID><MAPPING>2193</MAPPING><DESCRIPTION>Censor_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZCC--****X</SYMBOLID><MAPPING>2194</MAPPING><DESCRIPTION>Censor_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZDI--****X</SYMBOLID><MAPPING>2195</MAPPING><DESCRIPTION>DA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACDI--****X</SYMBOLID><MAPPING>2195</MAPPING><DESCRIPTION>DA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZDR--****X</SYMBOLID><MAPPING>2196</MAPPING><DESCRIPTION>DA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACDR--****X</SYMBOLID><MAPPING>2196</MAPPING><DESCRIPTION>DA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZDC--****X</SYMBOLID><MAPPING>2197</MAPPING><DESCRIPTION>DA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACDC--****X</SYMBOLID><MAPPING>2197</MAPPING><DESCRIPTION>DA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZFI--****X</SYMBOLID><MAPPING>2217</MAPPING><DESCRIPTION>CFZ_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZFR--****X</SYMBOLID><MAPPING>2218</MAPPING><DESCRIPTION>CFZ_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZFC--****X</SYMBOLID><MAPPING>2219</MAPPING><DESCRIPTION>CFZ_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZZI--****X</SYMBOLID><MAPPING>2198</MAPPING><DESCRIPTION>ZOR_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACZI--****X</SYMBOLID><MAPPING>2198</MAPPING><DESCRIPTION>ZOR_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZZR--****X</SYMBOLID><MAPPING>2199</MAPPING><DESCRIPTION>ZOR_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACZR--****X</SYMBOLID><MAPPING>2199</MAPPING><DESCRIPTION>ZOR_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZZC--****X</SYMBOLID><MAPPING>2200</MAPPING><DESCRIPTION>ZOR_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACZC--****X</SYMBOLID><MAPPING>2200</MAPPING><DESCRIPTION>ZOR_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZBI--****X</SYMBOLID><MAPPING>2201</MAPPING><DESCRIPTION>TBA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACBI--****X</SYMBOLID><MAPPING>2201</MAPPING><DESCRIPTION>TBA_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZBR--****X</SYMBOLID><MAPPING>2202</MAPPING><DESCRIPTION>TBA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACBR--****X</SYMBOLID><MAPPING>2202</MAPPING><DESCRIPTION>TBA_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZBC--****X</SYMBOLID><MAPPING>2203</MAPPING><DESCRIPTION>TBA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACBC--****X</SYMBOLID><MAPPING>2203</MAPPING><DESCRIPTION>TBA_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZVI--****X</SYMBOLID><MAPPING>2204</MAPPING><DESCRIPTION>TVAR_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACVI--****X</SYMBOLID><MAPPING>2204</MAPPING><DESCRIPTION>TVAR_Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZVR--****X</SYMBOLID><MAPPING>2205</MAPPING><DESCRIPTION>TVAR_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACVR--****X</SYMBOLID><MAPPING>2205</MAPPING><DESCRIPTION>TVAR_Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AZVC--****X</SYMBOLID><MAPPING>2206</MAPPING><DESCRIPTION>TVAR_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACVC--****X</SYMBOLID><MAPPING>2206</MAPPING><DESCRIPTION>TVAR_Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*ACT---****X</SYMBOLID><MAPPING>2210</MAPPING><DESCRIPTION>TGMF</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AXC---****X</SYMBOLID><MAPPING>2207</MAPPING><DESCRIPTION>Range_Fan</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AXS---****X</SYMBOLID><MAPPING>2208</MAPPING><DESCRIPTION>Sector_Range_Fan</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKBC--****X</SYMBOLID><MAPPING>2219</MAPPING><DESCRIPTION>BKB Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKBI--****X</SYMBOLID><MAPPING>2220</MAPPING><DESCRIPTION>BKB Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKBR--****X</SYMBOLID><MAPPING>2221</MAPPING><DESCRIPTION>BKB Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKPC--****X</SYMBOLID><MAPPING>2222</MAPPING><DESCRIPTION>PKB Circular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKPI--****X</SYMBOLID><MAPPING>2223</MAPPING><DESCRIPTION>PKB Irregular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*F*AKPR--****X</SYMBOLID><MAPPING>2224</MAPPING><DESCRIPTION>PKB Rectangular</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LCM---****X</SYMBOLID><MAPPING>2226</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Convoys_Moving Convoy</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LCH---****X</SYMBOLID><MAPPING>2227</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Convoys_Halted Convoy</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LRM---****X</SYMBOLID><MAPPING>2228</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Supply Routes_Main Supply Route</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LRA---****X</SYMBOLID><MAPPING>2229</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Supply Routes_Alternate Supply Route</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LRO---****X</SYMBOLID><MAPPING>2230</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Supply Routes_One-Way Traffic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LRT---****X</SYMBOLID><MAPPING>2231</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Supply Routes_Alternating Traffic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*LRW---****X</SYMBOLID><MAPPING>2232</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Lines_Supply Routes_Two-Way Traffic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*AD----****X</SYMBOLID><MAPPING>2233</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Detainee Holding Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*AE----****X</SYMBOLID><MAPPING>2234</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Enemy Prisoner Of War (EPW) Holding Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*AR----****X</SYMBOLID><MAPPING>2235</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Forward Arming And Refueling Area (FARP)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*AH----****X</SYMBOLID><MAPPING>2236</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Refugee Holding Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*ASB---****X</SYMBOLID><MAPPING>2237</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Support Areas_Brigade (BSA)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*ASD---****X</SYMBOLID><MAPPING>2238</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Support Areas_Division (DSA)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*S*ASR---****X</SYMBOLID><MAPPING>2239</MAPPING><DESCRIPTION>Tactical Graphics_Combat Service Support_Area_Support Areas_Regimental (RSA)</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*HN----****X</SYMBOLID><MAPPING>2240</MAPPING><DESCRIPTION>Tactical Graphics_Other_Hazard_Navigational</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*B-----****X</SYMBOLID><MAPPING>2241</MAPPING><DESCRIPTION>Tactical Graphics_Other_Bearing Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*BE----****X</SYMBOLID><MAPPING>2242</MAPPING><DESCRIPTION>Tactical Graphics_Other_Bearing Line_Electronic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*BA----****X</SYMBOLID><MAPPING>2243</MAPPING><DESCRIPTION>Tactical Graphics_Other_Bearing Line_Acoustic</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*BT----****X</SYMBOLID><MAPPING>2244</MAPPING><DESCRIPTION>Tactical Graphics_Other_Bearing Line_Torpedo</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>G*O*BO----****X</SYMBOLID><MAPPING>2245</MAPPING><DESCRIPTION>Tactical Graphics_Other_Bearing Line_Electro-Optical Intercept</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFC----L---</SYMBOLID><MAPPING>3000</MAPPING><DESCRIPTION>Cold Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFCU---L---</SYMBOLID><MAPPING>3001</MAPPING><DESCRIPTION>Upper Cold Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFC-FG-L---</SYMBOLID><MAPPING>3002</MAPPING><DESCRIPTION>Cold Frontogenisis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFC-FY-L---</SYMBOLID><MAPPING>3003</MAPPING><DESCRIPTION>Cold Frontolysis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFW----L---</SYMBOLID><MAPPING>3004</MAPPING><DESCRIPTION>Warm Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFWU---L---</SYMBOLID><MAPPING>3005</MAPPING><DESCRIPTION>Upper Warm Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFW-FG-L---</SYMBOLID><MAPPING>3006</MAPPING><DESCRIPTION>Warm Frontogenesis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFW-FY-L---</SYMBOLID><MAPPING>3007</MAPPING><DESCRIPTION>Warm Frontolysis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFO----L---</SYMBOLID><MAPPING>3008</MAPPING><DESCRIPTION>Occluded Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFOU---L---</SYMBOLID><MAPPING>3009</MAPPING><DESCRIPTION>Upper Occluded Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFO-FY-L---</SYMBOLID><MAPPING>3010</MAPPING><DESCRIPTION>Occluded Frontolysis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFS----L---</SYMBOLID><MAPPING>3011</MAPPING><DESCRIPTION>Stationary Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFSU---L---</SYMBOLID><MAPPING>3012</MAPPING><DESCRIPTION>Upper Stationary Front</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFS-FG-L---</SYMBOLID><MAPPING>3013</MAPPING><DESCRIPTION>Stationary Frontogenesis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPFS-FY-L---</SYMBOLID><MAPPING>3014</MAPPING><DESCRIPTION>Stationary Frontolysis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXT----L---</SYMBOLID><MAPPING>3015</MAPPING><DESCRIPTION>Trough Axis</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXR----L---</SYMBOLID><MAPPING>3016</MAPPING><DESCRIPTION>Ridge Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXSQ---L---</SYMBOLID><MAPPING>3017</MAPPING><DESCRIPTION>Squall Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXIL---L---</SYMBOLID><MAPPING>3018</MAPPING><DESCRIPTION>Instability Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXSH---L---</SYMBOLID><MAPPING>3019</MAPPING><DESCRIPTION>Shear Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXITCZ-L---</SYMBOLID><MAPPING>3020</MAPPING><DESCRIPTION>Inter-Tropical Convergance Zone</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXCV---L---</SYMBOLID><MAPPING>3021</MAPPING><DESCRIPTION>Convergance Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DPXITD--L---</SYMBOLID><MAPPING>3022</MAPPING><DESCRIPTION>Inter-Tropical Discontinuity</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WAS-WP----P----</SYMBOLID><MAPPING>3023</MAPPING><DESCRIPTION>Wind Plot</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DWJ-----L---</SYMBOLID><MAPPING>3030</MAPPING><DESCRIPTION>Jet Stream Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DWS-----L---</SYMBOLID><MAPPING>3031</MAPPING><DESCRIPTION>Stream Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DWSTSWA--A--</SYMBOLID><MAPPING>3032</MAPPING><DESCRIPTION>Tropical Storm Wind Areas</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAIF----A--</SYMBOLID><MAPPING>3034</MAPPING><DESCRIPTION>IFR</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAMV----A--</SYMBOLID><MAPPING>3035</MAPPING><DESCRIPTION>MVFR</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBATB----A--</SYMBOLID><MAPPING>3036</MAPPING><DESCRIPTION>Weather Turbulence</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAI-----A--</SYMBOLID><MAPPING>3037</MAPPING><DESCRIPTION>Weather Icing</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBALPNC--A--</SYMBOLID><MAPPING>3038</MAPPING><DESCRIPTION>Precipitation Non-Convective</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBALPC---A--</SYMBOLID><MAPPING>3039</MAPPING><DESCRIPTION>Precipitation Convective</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAFP----A--</SYMBOLID><MAPPING>3040</MAPPING><DESCRIPTION>Frozen Precipitation</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAT-----A--</SYMBOLID><MAPPING>3041</MAPPING><DESCRIPTION>Weather Thunderstorm</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAFG----A--</SYMBOLID><MAPPING>3042</MAPPING><DESCRIPTION>Weather Fog</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAD-----A--</SYMBOLID><MAPPING>3043</MAPPING><DESCRIPTION>Weather Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DBAFF----A--</SYMBOLID><MAPPING>3044</MAPPING><DESCRIPTION>Weather Freeform</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPIB---L---</SYMBOLID><MAPPING>3045</MAPPING><DESCRIPTION>Isobar Surface</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPCO---L---</SYMBOLID><MAPPING>3046</MAPPING><DESCRIPTION>Upper Air</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPIS---L---</SYMBOLID><MAPPING>3047</MAPPING><DESCRIPTION>Isotherm</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPIT---L---</SYMBOLID><MAPPING>3048</MAPPING><DESCRIPTION>Isotach</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPID---L---</SYMBOLID><MAPPING>3049</MAPPING><DESCRIPTION>Isodrosotherm</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPTH---L---</SYMBOLID><MAPPING>3050</MAPPING><DESCRIPTION>Isopleths</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WA-DIPFF---L---</SYMBOLID><MAPPING>3051</MAPPING><DESCRIPTION>Operator Freeform</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILOV---L---</SYMBOLID><MAPPING>3052</MAPPING><DESCRIPTION>Limit of Visual Observation</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILUC---L---</SYMBOLID><MAPPING>3053</MAPPING><DESCRIPTION>Limit of Undercast</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILOR---L---</SYMBOLID><MAPPING>3054</MAPPING><DESCRIPTION>Limit of Radar Observation</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILIEO--L---</SYMBOLID><MAPPING>3055</MAPPING><DESCRIPTION>Observed Ice Edge</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILIEE--L---</SYMBOLID><MAPPING>3056</MAPPING><DESCRIPTION>Estimated Ice Edge</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DILIER--L---</SYMBOLID><MAPPING>3057</MAPPING><DESCRIPTION>Ice Edge From Radar</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DIOC----L---</SYMBOLID><MAPPING>3058</MAPPING><DESCRIPTION>Cracks</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DIOCS---L---</SYMBOLID><MAPPING>3059</MAPPING><DESCRIPTION>Cracks Specific-Location</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DIOL----L---</SYMBOLID><MAPPING>3060</MAPPING><DESCRIPTION>Ice Openings-Lead</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DIOLF---L---</SYMBOLID><MAPPING>3061</MAPPING><DESCRIPTION>Frozen Lead</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHDDL---L---</SYMBOLID><MAPPING>3062</MAPPING><DESCRIPTION>Depth Curve</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHDDC---L---</SYMBOLID><MAPPING>3063</MAPPING><DESCRIPTION>Depth Contour</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHDDA----A--</SYMBOLID><MAPPING>3064</MAPPING><DESCRIPTION>Depth Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCC----L---</SYMBOLID><MAPPING>3065</MAPPING><DESCRIPTION>Coastline</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCI-----A--</SYMBOLID><MAPPING>3066</MAPPING><DESCRIPTION>Island</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCB-----A--</SYMBOLID><MAPPING>3067</MAPPING><DESCRIPTION>Beach</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCW-----A--</SYMBOLID><MAPPING>3068</MAPPING><DESCRIPTION>Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCF----L---</SYMBOLID><MAPPING>3069</MAPPING><DESCRIPTION>Foreshore Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHCF-----A--</SYMBOLID><MAPPING>3070</MAPPING><DESCRIPTION>Foreshore Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPBA---L---</SYMBOLID><MAPPING>3071</MAPPING><DESCRIPTION>Anchorage Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPBA----A--</SYMBOLID><MAPPING>3072</MAPPING><DESCRIPTION>Anchorage Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPBP---L---</SYMBOLID><MAPPING>3073</MAPPING><DESCRIPTION>Pier</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WOS-HPFF----A--</SYMBOLID><MAPPING>3074</MAPPING><DESCRIPTION>Wiers</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPMD----A--</SYMBOLID><MAPPING>3075</MAPPING><DESCRIPTION>Drydock</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPMO---L---</SYMBOLID><MAPPING>3076</MAPPING><DESCRIPTION>Offshore Loading Facility Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPMO----A--</SYMBOLID><MAPPING>3077</MAPPING><DESCRIPTION>Offshore Loading Facility Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPMRA--L---</SYMBOLID><MAPPING>3078</MAPPING><DESCRIPTION>Ramp Above Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPMRB--L---</SYMBOLID><MAPPING>3079</MAPPING><DESCRIPTION>Ramp Below Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPSPA--L---</SYMBOLID><MAPPING>3080</MAPPING><DESCRIPTION>Jetty Above Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPSPB--L---</SYMBOLID><MAPPING>3081</MAPPING><DESCRIPTION>Jetty Below Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHPSPS--L---</SYMBOLID><MAPPING>3082</MAPPING><DESCRIPTION>Seawall</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHABP----A--</SYMBOLID><MAPPING>3083</MAPPING><DESCRIPTION>Perches</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHALLA--L---</SYMBOLID><MAPPING>3084</MAPPING><DESCRIPTION>Leading Line</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHHD-----A--</SYMBOLID><MAPPING>3085</MAPPING><DESCRIPTION>Underwater Hazard</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHHDF----A--</SYMBOLID><MAPPING>3200</MAPPING><DESCRIPTION>Foul Ground</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHHDK----A--</SYMBOLID><MAPPING>3201</MAPPING><DESCRIPTION>Kelp</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHHDB---L---</SYMBOLID><MAPPING>3086</MAPPING><DESCRIPTION>Breaker</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WOS-HHDR---L---</SYMBOLID><MAPPING>3087</MAPPING><DESCRIPTION>Reef</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DHHDD----A--</SYMBOLID><MAPPING>3089</MAPPING><DESCRIPTION>Discolored Water</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DTCCCFE-L---</SYMBOLID><MAPPING>3090</MAPPING><DESCRIPTION>Ebb Tide</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DTCCCFF-L---</SYMBOLID><MAPPING>3091</MAPPING><DESCRIPTION>Flood Tide</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVA----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 1-2</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVB----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 2-3</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVC----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 3-4</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVD----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 4-5</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVE----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 5-6</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVF----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 6-7</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVG----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 7-8</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVH----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 8-9</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DOBVI----A--</SYMBOLID><MAPPING>3092</MAPPING><DESCRIPTION>VDR Level 9-10</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DBSF-----A--</SYMBOLID><MAPPING>3093</MAPPING><DESCRIPTION>Beach Slope Flat</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DBSG-----A--</SYMBOLID><MAPPING>3094</MAPPING><DESCRIPTION>Beach Slope Gentle</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DBSM-----A--</SYMBOLID><MAPPING>3095</MAPPING><DESCRIPTION>Beach Slope Moderate</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DBST-----A--</SYMBOLID><MAPPING>3096</MAPPING><DESCRIPTION>Beach Slope Steep</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSR----A--</SYMBOLID><MAPPING>3097</MAPPING><DESCRIPTION>Solid Rock</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSC----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Clay</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSSVS--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Very Course Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSSC---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Coarse Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSSM---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Medium Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSSF---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Fine Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSSVF--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Very Fine Sand</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSIVF--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Very Fine Silt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSIF---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Fine Silt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSIM---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Medium Silt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSIC---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Coarse Silt</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMSB----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Boulders</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMS-CO--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Oyster Shells</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMS-PH--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Pebbles Shells</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMS-SH--A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Sand and Shells</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGML-----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Sediments Land</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMN-----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Sediments Land</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMRS----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Roughness Smooth</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMRM----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Roughness Moderate</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMRR----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Roughness Rough</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMCL----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Clutter Low</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMCM----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Clutter Medium</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMCH----A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Clutter High</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMIBA---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Impact Burial 0</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMIBB---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Impact Burial 10</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMIBC---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Impact Burial 20</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMIBD---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Impact Burial 75</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMIBE---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Impact Burial 100</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBCA---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Category A</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBCB---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Category B</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBCC---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Category C</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTA---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type A1</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTB---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type A2</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTC---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type A3</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTD---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type B1</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTE---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type B2</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTF---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type B3</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTG---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type C1</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTH---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type C2</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DGMBTI---A--</SYMBOLID><MAPPING>3098</MAPPING><DESCRIPTION>Bottom Type C3</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-ML---L---</SYMBOLID><MAPPING>3099</MAPPING><DESCRIPTION>Maritime Limit</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-MA----A--</SYMBOLID><MAPPING>3100</MAPPING><DESCRIPTION>Maritime Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-RA---L---</SYMBOLID><MAPPING>3101</MAPPING><DESCRIPTION>Restricted Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-SA----A--</SYMBOLID><MAPPING>3102</MAPPING><DESCRIPTION>Swept Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-TA----A--</SYMBOLID><MAPPING>3103</MAPPING><DESCRIPTION>Training Area</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DL-O-----A--</SYMBOLID><MAPPING>3104</MAPPING><DESCRIPTION>Operator Defined</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DMCA----L---</SYMBOLID><MAPPING>3105</MAPPING><DESCRIPTION>Cable</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DMCC-----A--</SYMBOLID><MAPPING>3106</MAPPING><DESCRIPTION>Submerged Crib</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DMCD----L---</SYMBOLID><MAPPING>3107</MAPPING><DESCRIPTION>Canal</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DMOA-----A--</SYMBOLID><MAPPING>3108</MAPPING><DESCRIPTION>Oil Rig Field</DESCRIPTION></SYMBOL><SYMBOL><SYMBOLID>WO-DMPA----L---</SYMBOLID><MAPPING>3109</MAPPING><DESCRIPTION>Pipe</DESCRIPTION></SYMBOL></TACTICALGRAPHICS>';
    spMappingXml = {
  "TACTICALGRAPHICS": {
    "SYMBOL": [
      {
        "SYMBOLID": "G*T*B-----****X",
        "MAPPING": "2001",
        "DESCRIPTION": "Tactical Graphics_ Tasks_Block"
      },
      {
        "SYMBOLID": "G*T*H-----****X",
        "MAPPING": "2002",
        "DESCRIPTION": "Tactical Graphics_ Tasks_Breach"
      },
      {
        "SYMBOLID": "G*T*Y-----****X",
        "MAPPING": "2003",
        "DESCRIPTION": "Tactical Graphics_Tasks_Bypass"
      },
      {
        "SYMBOLID": "G*T*C-----****X",
        "MAPPING": "2004",
        "DESCRIPTION": "Tactical Graphics_Tasks_Canalize"
      },
      {
        "SYMBOLID": "G*T*X-----****X",
        "MAPPING": "2005",
        "DESCRIPTION": "Tactical Graphics_Tasks_Clear"
      },
      {
        "SYMBOLID": "G*T*J-----****X",
        "MAPPING": "2006",
        "DESCRIPTION": "Tactical Graphics_Tasks_Contain"
      },
      {
        "SYMBOLID": "G*T*K-----****X",
        "MAPPING": "2007",
        "DESCRIPTION": "Tactical Graphics_Tasks_Counterattach (CATK)"
      },
      {
        "SYMBOLID": "G*T*KF----****X",
        "MAPPING": "2008",
        "DESCRIPTION": "Tactical Graphics_Tasks_Counterattack (CATK)_Counterattack By Fire"
      },
      {
        "SYMBOLID": "G*T*L-----****X",
        "MAPPING": "2009",
        "DESCRIPTION": "Tactical Graphics_Tasks_Delay"
      },
      {
        "SYMBOLID": "G*T*T-----****X",
        "MAPPING": "2011",
        "DESCRIPTION": "Tactical Graphics_Tasks_Disrupt "
      },
      {
        "SYMBOLID": "G*T*F-----****X",
        "MAPPING": "2012",
        "DESCRIPTION": "Tactical Graphics_Tasks_Fix"
      },
      {
        "SYMBOLID": "G*T*A-----****X",
        "MAPPING": "2013",
        "DESCRIPTION": "Tactical Graphics_Tasks_Follow And Assume"
      },
      {
        "SYMBOLID": "G*T*AS----****X",
        "MAPPING": "2014",
        "DESCRIPTION": "Tactical Graphics_Tasks_Follow And Assume_Follow And Support "
      },
      {
        "SYMBOLID": "G*T*E-----****X",
        "MAPPING": "2016",
        "DESCRIPTION": "Tactical Graphics_Tasks_Isolate"
      },
      {
        "SYMBOLID": "G*T*O-----****X",
        "MAPPING": "2018",
        "DESCRIPTION": "Tactical Graphics_Tasks_Occupy"
      },
      {
        "SYMBOLID": "G*T*P-----****X",
        "MAPPING": "2019",
        "DESCRIPTION": "Tactical Graphics_Tasks_Penetrate"
      },
      {
        "SYMBOLID": "G*T*R-----****X",
        "MAPPING": "2020",
        "DESCRIPTION": "Tactical Graphics_Tasks_Relief In Place (RIP)"
      },
      {
        "SYMBOLID": "G*T*Q-----****X",
        "MAPPING": "2021",
        "DESCRIPTION": "Tactical Graphics_Tasks_Retain"
      },
      {
        "SYMBOLID": "G*T*M-----****X",
        "MAPPING": "2022",
        "DESCRIPTION": "Tactical Graphics_Tasks_Retirement"
      },
      {
        "SYMBOLID": "G*T*S-----****X",
        "MAPPING": "2023",
        "DESCRIPTION": "Tactical Graphics_Tasks_Secure"
      },
      {
        "SYMBOLID": "G*T*US----****X",
        "MAPPING": "2024",
        "DESCRIPTION": "Tactical Graphics_Tasks_Security_Screen"
      },
      {
        "SYMBOLID": "G*T*UG----****X",
        "MAPPING": "2025",
        "DESCRIPTION": "Tactical Graphics_Tasks_Security_Guard"
      },
      {
        "SYMBOLID": "G*T*UC----****X",
        "MAPPING": "2026",
        "DESCRIPTION": "Tactical Graphics_Tasks_Security_Cover"
      },
      {
        "SYMBOLID": "G*T*Z-----****X",
        "MAPPING": "2027",
        "DESCRIPTION": "Tactical Graphics_Tasks_Seize"
      },
      {
        "SYMBOLID": "G*T*W-----****X",
        "MAPPING": "2028",
        "DESCRIPTION": "Tactical Graphics_Tasks_Withdraw"
      },
      {
        "SYMBOLID": "G*T*WP----****X",
        "MAPPING": "2029",
        "DESCRIPTION": "Tactical Graphics_Tasks_Withdraw_Withdraw Under Pressure "
      },
      {
        "SYMBOLID": "G*T*V-----****X",
        "MAPPING": "2016",
        "DESCRIPTION": "Tactical Graphics_Tasks_Cordon_and_Search "
      },
      {
        "SYMBOLID": "G*T*2-----****X",
        "MAPPING": "2016",
        "DESCRIPTION": "Tactical Graphics_Tasks_Cordon_and_Knock "
      },
      {
        "SYMBOLID": "G*G*GLB---****X",
        "MAPPING": "2030",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Boundaries "
      },
      {
        "SYMBOLID": "G*G*GLF---****X",
        "MAPPING": "2031",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Forward Line Of Own Troops (Flot)"
      },
      {
        "SYMBOLID": "G*G*GLC---****X",
        "MAPPING": "2032",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Line Of Contact "
      },
      {
        "SYMBOLID": "G*G*GLP---****X",
        "MAPPING": "2033",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Phase Line "
      },
      {
        "SYMBOLID": "G*G*GLL---****X",
        "MAPPING": "2034",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Light Line "
      },
      {
        "SYMBOLID": "G*G*GAG---****X",
        "MAPPING": "2035",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_General Area"
      },
      {
        "SYMBOLID": "G*G*GAA---****X",
        "MAPPING": "2036",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Assembly Area"
      },
      {
        "SYMBOLID": "G*G*GAE---****X",
        "MAPPING": "2037",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Engagement Area"
      },
      {
        "SYMBOLID": "G*G*GAF---****X",
        "MAPPING": "2038",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Lines_Fortified Area"
      },
      {
        "SYMBOLID": "G*G*GAD---****X",
        "MAPPING": "2039",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Drop Zone "
      },
      {
        "SYMBOLID": "G*G*GAX---****X",
        "MAPPING": "2040",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Area_Extraction Zone (EZ)"
      },
      {
        "SYMBOLID": "G*G*GAL---****X",
        "MAPPING": "2041",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Landing Zone (LZ)"
      },
      {
        "SYMBOLID": "G*G*GAP---****X",
        "MAPPING": "2042",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Pickup Zone (PZ)"
      },
      {
        "SYMBOLID": "G*G*GAS---****X",
        "MAPPING": "2043",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Search Area/Reconnaissance Area"
      },
      {
        "SYMBOLID": "G*G*GAY---****X",
        "MAPPING": "2044",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Limited Access Area"
      },
      {
        "SYMBOLID": "G*G*GAZ---****X",
        "MAPPING": "2045",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_General_Areas_Airfield Zone "
      },
      {
        "SYMBOLID": "G*G*ALC---****X",
        "MAPPING": "2046",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Air Corridor "
      },
      {
        "SYMBOLID": "G*G*ALM---****X",
        "MAPPING": "2047",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Minimum Risk Route (MRR) "
      },
      {
        "SYMBOLID": "G*G*ALS---****X",
        "MAPPING": "2048",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Standard-Use Army Aircraft Flight Route (SAAFR) "
      },
      {
        "SYMBOLID": "G*G*ALU---****X",
        "MAPPING": "2049",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Unmanned Aerial Vehicle (UAV) Route "
      },
      {
        "SYMBOLID": "G*G*ALL---****X",
        "MAPPING": "2050",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Lines_Low Level Transit Route (LLTR)"
      },
      {
        "SYMBOLID": "G*G*AAR---****X",
        "MAPPING": "2051",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Restricted Operations Zone (ROZ)"
      },
      {
        "SYMBOLID": "G*G*AAF---****X",
        "MAPPING": "2052",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Forward Area Ari Defense Zone (FAADEZ)"
      },
      {
        "SYMBOLID": "G*G*AAF---2525C",
        "MAPPING": "2053",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_SHORT-RANGE_AIR_DEFENSE_ENGAGEMENT_ZONE (SHORADEZ)"
      },
      {
        "SYMBOLID": "G*G*AAH---****X",
        "MAPPING": "2054",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_High Density Airpspace Control Zone (Hidacz) "
      },
      {
        "SYMBOLID": "G*G*AAM---****X",
        "MAPPING": "2055",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Engagement Zone (MEZ) "
      },
      {
        "SYMBOLID": "G*G*AAML--****X",
        "MAPPING": "2056",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Enagement Zone (MEZ) Low Altitude Mez "
      },
      {
        "SYMBOLID": "G*G*AAMH--****X",
        "MAPPING": "2057",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Missile Engagement Zone (MEZ)_High Altitude MEZ"
      },
      {
        "SYMBOLID": "G*G*AAW---****X",
        "MAPPING": "2058",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Aviation_Areas_Weapoins Free Zone "
      },
      {
        "SYMBOLID": "G*G*PD----****X",
        "MAPPING": "2059",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Deception_Dummy (Deception) (Decoy) "
      },
      {
        "SYMBOLID": "G*G*PA----****X",
        "MAPPING": "2060",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Deception_Axis Of Advance For Feint "
      },
      {
        "SYMBOLID": "G*G*PF----****X",
        "MAPPING": "2061",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Deception_Direction Of Attack For Feint "
      },
      {
        "SYMBOLID": "G*G*PM----****X",
        "MAPPING": "2062",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Deception_Decoy Mined Area"
      },
      {
        "SYMBOLID": "G*G*PY----****X",
        "MAPPING": "2063",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Deception_Decoy Mined Area, Fenced "
      },
      {
        "SYMBOLID": "G*G*PC----****X",
        "MAPPING": "2064",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Deception_Dummy Minefield - Dynamic "
      },
      {
        "SYMBOLID": "G*G*DLF---****X",
        "MAPPING": "2065",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Defense_Lines_Forward Edge Of Battle Area (FEBA) "
      },
      {
        "SYMBOLID": "G*G*DLP---****X",
        "MAPPING": "2066",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Defense_Lines_Principal Direction Of Fire (PDF)"
      },
      {
        "SYMBOLID": "G*G*DAB---****X",
        "MAPPING": "2067",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Defense_Areas_Battle Position"
      },
      {
        "SYMBOLID": "G*G*DABP--****X",
        "MAPPING": "2068",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Defense_Areas_Battle Position_Prepared But Not Occupied "
      },
      {
        "SYMBOLID": "G*G*DAE---****X",
        "MAPPING": "2069",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Defense_Area_Engagement Area"
      },
      {
        "SYMBOLID": "G*G*OLAV--****X",
        "MAPPING": "2070",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Aviation"
      },
      {
        "SYMBOLID": "G*G*OLAA--****X",
        "MAPPING": "2071",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Airborne "
      },
      {
        "SYMBOLID": "G*G*OLAR--****X",
        "MAPPING": "2072",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Friendly Attack, Rotory Wing "
      },
      {
        "SYMBOLID": "G*G*OLAGM-****X",
        "MAPPING": "2073",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Ground_Main Attack "
      },
      {
        "SYMBOLID": "G*G*OLAGS-****X",
        "MAPPING": "2074",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Axis Of Advance_Ground_Support Attack"
      },
      {
        "SYMBOLID": "G*G*OLKA--****X",
        "MAPPING": "2075",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Aviation "
      },
      {
        "SYMBOLID": "G*G*OLKGM-****X",
        "MAPPING": "2076",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Ground_Main Attack"
      },
      {
        "SYMBOLID": "G*G*OLKGS-****X",
        "MAPPING": "2077",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Direction Of Attack_Ground_ Supporting Attack"
      },
      {
        "SYMBOLID": "G*G*OLF---****X",
        "MAPPING": "2078",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Final Coordination Line "
      },
      {
        "SYMBOLID": "G*G*OLI---****X",
        "MAPPING": "2079",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Infiltration Line "
      },
      {
        "SYMBOLID": "G*G*OLL---****X",
        "MAPPING": "2080",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Limit Of Advance "
      },
      {
        "SYMBOLID": "G*G*OLT---****X",
        "MAPPING": "2081",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Line Of Departure "
      },
      {
        "SYMBOLID": "G*G*OLC---****X",
        "MAPPING": "2082",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Line Of Departure/Line Of Contact (LD.LC)"
      },
      {
        "SYMBOLID": "G*G*OLP---****X",
        "MAPPING": "2083",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Lines_Probable Line Of Deployment (PLD) "
      },
      {
        "SYMBOLID": "G*G*OAA---****X",
        "MAPPING": "2084",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Assault Position"
      },
      {
        "SYMBOLID": "G*G*OAK---****X",
        "MAPPING": "2085",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Attack Position"
      },
      {
        "SYMBOLID": "G*G*OAF---****X",
        "MAPPING": "2086",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Attack By Fire Position "
      },
      {
        "SYMBOLID": "G*G*OAS---****X",
        "MAPPING": "2087",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Support By Fire Position "
      },
      {
        "SYMBOLID": "G*G*OAO---****X",
        "MAPPING": "2088",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Objective "
      },
      {
        "SYMBOLID": "G*G*OAP---****X",
        "MAPPING": "2089",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Offense_Areas_Penetration BoX"
      },
      {
        "SYMBOLID": "G*G*SLA---****X",
        "MAPPING": "2090",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Special_Line_Ambush"
      },
      {
        "SYMBOLID": "G*G*SLH---****X",
        "MAPPING": "2091",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Special_Line_Holding Line "
      },
      {
        "SYMBOLID": "G*G*SLR---****X",
        "MAPPING": "2092",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Special_Line_Release Line "
      },
      {
        "SYMBOLID": "G*G*SLB---****X",
        "MAPPING": "2093",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Bridgehead"
      },
      {
        "SYMBOLID": "G*G*SAO---****X",
        "MAPPING": "2094",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Area Of Operations (AO)"
      },
      {
        "SYMBOLID": "G*G*SAA---****X",
        "MAPPING": "2095",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Airhead "
      },
      {
        "SYMBOLID": "G*G*SAE---****X",
        "MAPPING": "2096",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Encirclement "
      },
      {
        "SYMBOLID": "G*G*SAN---****X",
        "MAPPING": "2097",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Named Area Of Interest (NAI)"
      },
      {
        "SYMBOLID": "G*G*SAT---****X",
        "MAPPING": "2098",
        "DESCRIPTION": "Tactical Graphics_Command And Control And General Maneuver_Special_Area_Targeted Area Of Interest (TAI) "
      },
      {
        "SYMBOLID": "G*M*OGB---****X",
        "MAPPING": "2099",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_General_Belt "
      },
      {
        "SYMBOLID": "G*M*OGL---****X",
        "MAPPING": "2100",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_General_Line "
      },
      {
        "SYMBOLID": "G*M*OGZ---****X",
        "MAPPING": "2101",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_General_Zone"
      },
      {
        "SYMBOLID": "G*M*OGF---****X",
        "MAPPING": "2102",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_General_Obstacle Free Area"
      },
      {
        "SYMBOLID": "G*M*OGR---****X",
        "MAPPING": "2103",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_General_Obstacle Restricted Area"
      },
      {
        "SYMBOLID": "G*M*OS----****X",
        "MAPPING": "2104",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Abatis "
      },
      {
        "SYMBOLID": "G*M*OADU--****X",
        "MAPPING": "2105",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch_Under Construction"
      },
      {
        "SYMBOLID": "G*M*OADC--****X",
        "MAPPING": "2106",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch_Complete "
      },
      {
        "SYMBOLID": "G*M*OAR---****X",
        "MAPPING": "2107",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Ditch Reinforced With Antitank Mines "
      },
      {
        "SYMBOLID": "G*M*OAW---****X",
        "MAPPING": "2108",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Antitank Obstacles_Antitank Wall"
      },
      {
        "SYMBOLID": "G*M*OMC---****X",
        "MAPPING": "2109",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Mines_Mine Cluster "
      },
      {
        "SYMBOLID": "G*M*OFD---****X",
        "MAPPING": "2110",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Dynamic Depiction"
      },
      {
        "SYMBOLID": "G*M*OFG---****X",
        "MAPPING": "2111",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Gap"
      },
      {
        "SYMBOLID": "G*M*OFA---****X",
        "MAPPING": "2112",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Minefields_Minded Area"
      },
      {
        "SYMBOLID": "G*M*OEB---****X",
        "MAPPING": "2113",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Block"
      },
      {
        "SYMBOLID": "G*M*OEF---****X",
        "MAPPING": "2114",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_FiX"
      },
      {
        "SYMBOLID": "G*M*OET---****X",
        "MAPPING": "2115",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Turn"
      },
      {
        "SYMBOLID": "G*M*OED---****X",
        "MAPPING": "2116",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Obstacle Effect_Disrupt "
      },
      {
        "SYMBOLID": "G*M*OU----****X",
        "MAPPING": "2117",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Unexploed Ordinance Area (UXO)"
      },
      {
        "SYMBOLID": "G*M*ORP---****X",
        "MAPPING": "2118",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Planned "
      },
      {
        "SYMBOLID": "G*M*ORS---****X",
        "MAPPING": "2119",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Explosives, State Of Readiness 1 (Safe)"
      },
      {
        "SYMBOLID": "G*M*ORA---****X",
        "MAPPING": "2120",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Explosives, State Of Readiness 2 (Armed-But Passable) "
      },
      {
        "SYMBOLID": "G*M*ORC---****X",
        "MAPPING": "2121",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Roadblocks, Craters, And Blown Bridges_Roadblock Complete (Executed)"
      },
      {
        "SYMBOLID": "G*M*OT----****X",
        "MAPPING": "2122",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Trip Wire"
      },
      {
        "SYMBOLID": "G*M*OWU---****X",
        "MAPPING": "2123",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle Unspecified "
      },
      {
        "SYMBOLID": "G*M*OWS---****X",
        "MAPPING": "2124",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_ Single Fence "
      },
      {
        "SYMBOLID": "G*M*OWD---****X",
        "MAPPING": "2125",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Fence"
      },
      {
        "SYMBOLID": "G*M*OWA---****X",
        "MAPPING": "2126",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Apron Fence "
      },
      {
        "SYMBOLID": "G*M*OWL---****X",
        "MAPPING": "2127",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Low Wire Fence "
      },
      {
        "SYMBOLID": "G*M*OWH---****X",
        "MAPPING": "2128",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_High Wire Fence "
      },
      {
        "SYMBOLID": "G*M*OWCS--****X",
        "MAPPING": "2129",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Single Concertina "
      },
      {
        "SYMBOLID": "G*M*OWCD--****X",
        "MAPPING": "2130",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Double Strand Concertina "
      },
      {
        "SYMBOLID": "G*M*OWCT--****X",
        "MAPPING": "2131",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Wire Obsticle_Triple Strand Concertina "
      },
      {
        "SYMBOLID": "G*M*OHO---****X",
        "MAPPING": "2133",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacles_Aviation Overhead Wire "
      },
      {
        "SYMBOLID": "G*M*BDE---****X",
        "MAPPING": "2134",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Easy"
      },
      {
        "SYMBOLID": "G*M*BDD---****X",
        "MAPPING": "2135",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Difficult "
      },
      {
        "SYMBOLID": "G*M*BDI---****X",
        "MAPPING": "2136",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Obstacle Bypass Difficulty_Bypass Impossible "
      },
      {
        "SYMBOLID": "G*M*BCA---****X",
        "MAPPING": "2137",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Assault Crossing Area"
      },
      {
        "SYMBOLID": "G*M*BCB---****X",
        "MAPPING": "2138",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Bridge Or Gap "
      },
      {
        "SYMBOLID": "G*M*BCF---****X",
        "MAPPING": "2139",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ferry"
      },
      {
        "SYMBOLID": "G*M*BCE---****X",
        "MAPPING": "2140",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ford Easy"
      },
      {
        "SYMBOLID": "G*M*BCD---****X",
        "MAPPING": "2141",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Ford Difficult "
      },
      {
        "SYMBOLID": "G*M*BCL---****X",
        "MAPPING": "2142",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Lane "
      },
      {
        "SYMBOLID": "G*M*BCR---****X",
        "MAPPING": "2143",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Obstacle Bypass_Crossing Site/Water Crossing_Raft Site"
      },
      {
        "SYMBOLID": "G*M*SL----****X",
        "MAPPING": "2144",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Surivability_Fortified Line "
      },
      {
        "SYMBOLID": "G*M*SW----****X",
        "MAPPING": "2145",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Surivability_Foxhole, Emplacement Or Weapon Site "
      },
      {
        "SYMBOLID": "G*M*SP----****X",
        "MAPPING": "2146",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Surivability_Strong Point"
      },
      {
        "SYMBOLID": "G*M*NM----****X",
        "MAPPING": "2147",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Minimum Safe Distrance Zones "
      },
      {
        "SYMBOLID": "G*M*NR----****X",
        "MAPPING": "2148",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Radio Active Area"
      },
      {
        "SYMBOLID": "G*M*NB----****X",
        "MAPPING": "2149",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Biologically Contaminated Area"
      },
      {
        "SYMBOLID": "G*M*NC----****X",
        "MAPPING": "2150",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Chemically Contaminated Area"
      },
      {
        "SYMBOLID": "G*M*NL----****X",
        "MAPPING": "2151",
        "DESCRIPTION": "Tactical Graphics_Mobility/Survivability_Nuclear, Biological And Chemical_Dose Rate Contour Lines "
      },
      {
        "SYMBOLID": "G*F*LT----****X",
        "MAPPING": "2152",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Lines_Linear Target "
      },
      {
        "SYMBOLID": "G*F*LTS---****X",
        "MAPPING": "2153",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Lines_Linear Smoke Target"
      },
      {
        "SYMBOLID": "G*F*LTF---****X",
        "MAPPING": "2154",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Lines_Final Protective Fire (FPF)"
      },
      {
        "SYMBOLID": "G*F*LCF---****X",
        "MAPPING": "2155",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Lines_Fire Support Coordination Line (FSCL) "
      },
      {
        "SYMBOLID": "G*F*LCC---****X",
        "MAPPING": "2156",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Lines_Coordinated Fire Line (CFL) "
      },
      {
        "SYMBOLID": "G*F*LCN---****X",
        "MAPPING": "2157",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Lines_No-Fire Line (NFL) "
      },
      {
        "SYMBOLID": "G*F*LCR---****X",
        "MAPPING": "2158",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Lines_Restrictive Fire Line (RFL) "
      },
      {
        "SYMBOLID": "G*F*LCM---****X",
        "MAPPING": "2159",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Lines_Munition Flight Path (MFP) "
      },
      {
        "SYMBOLID": "G*F*AT----****X",
        "MAPPING": "2160",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_Area Target "
      },
      {
        "SYMBOLID": "G*F*ATR---****X",
        "MAPPING": "2161",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_Area Target_Rectangular "
      },
      {
        "SYMBOLID": "G*F*ATC---****X",
        "MAPPING": "2162",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_Area Target_Circular"
      },
      {
        "SYMBOLID": "G*F*ATG---****X",
        "MAPPING": "2163",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_Series Or Group Of Targets "
      },
      {
        "SYMBOLID": "G*F*ATS---****X",
        "MAPPING": "2164",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_Smoke "
      },
      {
        "SYMBOLID": "G*F*ATB---****X",
        "MAPPING": "2165",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_Bomb Area"
      },
      {
        "SYMBOLID": "G*F*ACSI--****X",
        "MAPPING": "2166",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_FSA_Irregular"
      },
      {
        "SYMBOLID": "G*F*ACSR--****X",
        "MAPPING": "2167",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_FSA_Rectangular"
      },
      {
        "SYMBOLID": "G*F*ACSC--****X",
        "MAPPING": "2168",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_FSA_Circular"
      },
      {
        "SYMBOLID": "G*F*ACAI--****X",
        "MAPPING": "2169",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_ACA_Irregular"
      },
      {
        "SYMBOLID": "G*F*ACAR--****X",
        "MAPPING": "2170",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_ACA_Rectangular"
      },
      {
        "SYMBOLID": "G*F*ACAC--****X",
        "MAPPING": "2171",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_ACA_Circular"
      },
      {
        "SYMBOLID": "G*F*ACFI--****X",
        "MAPPING": "2172",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_FFA_Irregular"
      },
      {
        "SYMBOLID": "G*F*ACFR--****X",
        "MAPPING": "2173",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_FFA_Rectangular"
      },
      {
        "SYMBOLID": "G*F*ACFC--****X",
        "MAPPING": "2174",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_FFA_Circular"
      },
      {
        "SYMBOLID": "G*F*ACNI--****X",
        "MAPPING": "2175",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_NFA_Irregular"
      },
      {
        "SYMBOLID": "G*F*ACNR--****X",
        "MAPPING": "2176",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_NFA_Rectangular"
      },
      {
        "SYMBOLID": "G*F*ACNC--****X",
        "MAPPING": "2177",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_NFA_Circular"
      },
      {
        "SYMBOLID": "G*F*ACRI--****X",
        "MAPPING": "2178",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_RFA_Irregular"
      },
      {
        "SYMBOLID": "G*F*ACRR--****X",
        "MAPPING": "2179",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_RFA_Rectangular"
      },
      {
        "SYMBOLID": "G*F*ACRC--****X",
        "MAPPING": "2180",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_RFA_Circular"
      },
      {
        "SYMBOLID": "G*F*ACPR--****X",
        "MAPPING": "2181",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_PAA_Rectangular "
      },
      {
        "SYMBOLID": "G*F*ACPC--****X",
        "MAPPING": "2182",
        "DESCRIPTION": "Tactical Graphics_Fire Support_Areas_PAA_Circular "
      },
      {
        "SYMBOLID": "G*F*AZII--****X",
        "MAPPING": "2183",
        "DESCRIPTION": "ATI_Irregular"
      },
      {
        "SYMBOLID": "G*F*AZIR--****X",
        "MAPPING": "2184",
        "DESCRIPTION": "ATI_Rectangular"
      },
      {
        "SYMBOLID": "G*F*AZIC--****X",
        "MAPPING": "2185",
        "DESCRIPTION": "ATI_Circular"
      },
      {
        "SYMBOLID": "G*F*AZXI--****X",
        "MAPPING": "2186",
        "DESCRIPTION": "CFFZ_Irregular"
      },
      {
        "SYMBOLID": "G*F*AZXR--****X",
        "MAPPING": "2187",
        "DESCRIPTION": "CFFZ_Rectangular"
      },
      {
        "SYMBOLID": "G*F*AZXC--****X",
        "MAPPING": "2188",
        "DESCRIPTION": "CFFZ_Circular"
      },
      {
        "SYMBOLID": "G*F*AZSI--****X",
        "MAPPING": "2189",
        "DESCRIPTION": "Sensor_Irregular"
      },
      {
        "SYMBOLID": "G*F*ACEI--****X",
        "MAPPING": "2189",
        "DESCRIPTION": "Sensor_Irregular"
      },
      {
        "SYMBOLID": "G*F*AZSR--****X",
        "MAPPING": "2190",
        "DESCRIPTION": "Sensor_Rectangular"
      },
      {
        "SYMBOLID": "G*F*ACER--****X",
        "MAPPING": "2190",
        "DESCRIPTION": "Sensor_Rectangular"
      },
      {
        "SYMBOLID": "G*F*AZSC--****X",
        "MAPPING": "2191",
        "DESCRIPTION": "Sensor_Circular"
      },
      {
        "SYMBOLID": "G*F*ACEC--****X",
        "MAPPING": "2191",
        "DESCRIPTION": "Sensor_Circular"
      },
      {
        "SYMBOLID": "G*F*AZCI--****X",
        "MAPPING": "2192",
        "DESCRIPTION": "Censor_Irregular"
      },
      {
        "SYMBOLID": "G*F*AZCR--****X",
        "MAPPING": "2193",
        "DESCRIPTION": "Censor_Rectangular"
      },
      {
        "SYMBOLID": "G*F*AZCC--****X",
        "MAPPING": "2194",
        "DESCRIPTION": "Censor_Circular"
      },
      {
        "SYMBOLID": "G*F*AZDI--****X",
        "MAPPING": "2195",
        "DESCRIPTION": "DA_Irregular"
      },
      {
        "SYMBOLID": "G*F*ACDI--****X",
        "MAPPING": "2195",
        "DESCRIPTION": "DA_Irregular"
      },
      {
        "SYMBOLID": "G*F*AZDR--****X",
        "MAPPING": "2196",
        "DESCRIPTION": "DA_Rectangular"
      },
      {
        "SYMBOLID": "G*F*ACDR--****X",
        "MAPPING": "2196",
        "DESCRIPTION": "DA_Rectangular"
      },
      {
        "SYMBOLID": "G*F*AZDC--****X",
        "MAPPING": "2197",
        "DESCRIPTION": "DA_Circular"
      },
      {
        "SYMBOLID": "G*F*ACDC--****X",
        "MAPPING": "2197",
        "DESCRIPTION": "DA_Circular"
      },
      {
        "SYMBOLID": "G*F*AZFI--****X",
        "MAPPING": "2217",
        "DESCRIPTION": "CFZ_Irregular"
      },
      {
        "SYMBOLID": "G*F*AZFR--****X",
        "MAPPING": "2218",
        "DESCRIPTION": "CFZ_Rectangular"
      },
      {
        "SYMBOLID": "G*F*AZFC--****X",
        "MAPPING": "2219",
        "DESCRIPTION": "CFZ_Circular"
      },
      {
        "SYMBOLID": "G*F*AZZI--****X",
        "MAPPING": "2198",
        "DESCRIPTION": "ZOR_Irregular"
      },
      {
        "SYMBOLID": "G*F*ACZI--****X",
        "MAPPING": "2198",
        "DESCRIPTION": "ZOR_Irregular"
      },
      {
        "SYMBOLID": "G*F*AZZR--****X",
        "MAPPING": "2199",
        "DESCRIPTION": "ZOR_Rectangular"
      },
      {
        "SYMBOLID": "G*F*ACZR--****X",
        "MAPPING": "2199",
        "DESCRIPTION": "ZOR_Rectangular"
      },
      {
        "SYMBOLID": "G*F*AZZC--****X",
        "MAPPING": "2200",
        "DESCRIPTION": "ZOR_Circular"
      },
      {
        "SYMBOLID": "G*F*ACZC--****X",
        "MAPPING": "2200",
        "DESCRIPTION": "ZOR_Circular"
      },
      {
        "SYMBOLID": "G*F*AZBI--****X",
        "MAPPING": "2201",
        "DESCRIPTION": "TBA_Irregular"
      },
      {
        "SYMBOLID": "G*F*ACBI--****X",
        "MAPPING": "2201",
        "DESCRIPTION": "TBA_Irregular"
      },
      {
        "SYMBOLID": "G*F*AZBR--****X",
        "MAPPING": "2202",
        "DESCRIPTION": "TBA_Rectangular"
      },
      {
        "SYMBOLID": "G*F*ACBR--****X",
        "MAPPING": "2202",
        "DESCRIPTION": "TBA_Rectangular"
      },
      {
        "SYMBOLID": "G*F*AZBC--****X",
        "MAPPING": "2203",
        "DESCRIPTION": "TBA_Circular"
      },
      {
        "SYMBOLID": "G*F*ACBC--****X",
        "MAPPING": "2203",
        "DESCRIPTION": "TBA_Circular"
      },
      {
        "SYMBOLID": "G*F*AZVI--****X",
        "MAPPING": "2204",
        "DESCRIPTION": "TVAR_Irregular"
      },
      {
        "SYMBOLID": "G*F*ACVI--****X",
        "MAPPING": "2204",
        "DESCRIPTION": "TVAR_Irregular"
      },
      {
        "SYMBOLID": "G*F*AZVR--****X",
        "MAPPING": "2205",
        "DESCRIPTION": "TVAR_Rectangular"
      },
      {
        "SYMBOLID": "G*F*ACVR--****X",
        "MAPPING": "2205",
        "DESCRIPTION": "TVAR_Rectangular"
      },
      {
        "SYMBOLID": "G*F*AZVC--****X",
        "MAPPING": "2206",
        "DESCRIPTION": "TVAR_Circular"
      },
      {
        "SYMBOLID": "G*F*ACVC--****X",
        "MAPPING": "2206",
        "DESCRIPTION": "TVAR_Circular"
      },
      {
        "SYMBOLID": "G*F*ACT---****X",
        "MAPPING": "2210",
        "DESCRIPTION": "TGMF"
      },
      {
        "SYMBOLID": "G*F*AXC---****X",
        "MAPPING": "2207",
        "DESCRIPTION": "Range_Fan"
      },
      {
        "SYMBOLID": "G*F*AXS---****X",
        "MAPPING": "2208",
        "DESCRIPTION": "Sector_Range_Fan"
      },
      {
        "SYMBOLID": "G*F*AKBC--****X",
        "MAPPING": "2219",
        "DESCRIPTION": "BKB Circular"
      },
      {
        "SYMBOLID": "G*F*AKBI--****X",
        "MAPPING": "2220",
        "DESCRIPTION": "BKB Irregular"
      },
      {
        "SYMBOLID": "G*F*AKBR--****X",
        "MAPPING": "2221",
        "DESCRIPTION": "BKB Rectangular"
      },
      {
        "SYMBOLID": "G*F*AKPC--****X",
        "MAPPING": "2222",
        "DESCRIPTION": "PKB Circular"
      },
      {
        "SYMBOLID": "G*F*AKPI--****X",
        "MAPPING": "2223",
        "DESCRIPTION": "PKB Irregular"
      },
      {
        "SYMBOLID": "G*F*AKPR--****X",
        "MAPPING": "2224",
        "DESCRIPTION": "PKB Rectangular"
      },
      {
        "SYMBOLID": "G*S*LCM---****X",
        "MAPPING": "2226",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Lines_Convoys_Moving Convoy"
      },
      {
        "SYMBOLID": "G*S*LCH---****X",
        "MAPPING": "2227",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Lines_Convoys_Halted Convoy"
      },
      {
        "SYMBOLID": "G*S*LRM---****X",
        "MAPPING": "2228",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Lines_Supply Routes_Main Supply Route"
      },
      {
        "SYMBOLID": "G*S*LRA---****X",
        "MAPPING": "2229",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Lines_Supply Routes_Alternate Supply Route "
      },
      {
        "SYMBOLID": "G*S*LRO---****X",
        "MAPPING": "2230",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Lines_Supply Routes_One-Way Traffic"
      },
      {
        "SYMBOLID": "G*S*LRT---****X",
        "MAPPING": "2231",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Lines_Supply Routes_Alternating Traffic "
      },
      {
        "SYMBOLID": "G*S*LRW---****X",
        "MAPPING": "2232",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Lines_Supply Routes_Two-Way Traffic "
      },
      {
        "SYMBOLID": "G*S*AD----****X",
        "MAPPING": "2233",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Area_Detainee Holding Area"
      },
      {
        "SYMBOLID": "G*S*AE----****X",
        "MAPPING": "2234",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Area_Enemy Prisoner Of War (EPW) Holding Area "
      },
      {
        "SYMBOLID": "G*S*AR----****X",
        "MAPPING": "2235",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Area_Forward Arming And Refueling Area (FARP) "
      },
      {
        "SYMBOLID": "G*S*AH----****X",
        "MAPPING": "2236",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Area_Refugee Holding Area"
      },
      {
        "SYMBOLID": "G*S*ASB---****X",
        "MAPPING": "2237",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Area_Support Areas_Brigade (BSA)"
      },
      {
        "SYMBOLID": "G*S*ASD---****X",
        "MAPPING": "2238",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Area_Support Areas_Division (DSA)"
      },
      {
        "SYMBOLID": "G*S*ASR---****X",
        "MAPPING": "2239",
        "DESCRIPTION": "Tactical Graphics_Combat Service Support_Area_Support Areas_Regimental (RSA)"
      },
      {
        "SYMBOLID": "G*O*HN----****X",
        "MAPPING": "2240",
        "DESCRIPTION": "Tactical Graphics_Other_Hazard_Navigational"
      },
      {
        "SYMBOLID": "G*O*B-----****X",
        "MAPPING": "2241",
        "DESCRIPTION": "Tactical Graphics_Other_Bearing Line"
      },
      {
        "SYMBOLID": "G*O*BE----****X",
        "MAPPING": "2242",
        "DESCRIPTION": "Tactical Graphics_Other_Bearing Line_Electronic"
      },
      {
        "SYMBOLID": "G*O*BA----****X",
        "MAPPING": "2243",
        "DESCRIPTION": "Tactical Graphics_Other_Bearing Line_Acoustic"
      },
      {
        "SYMBOLID": "G*O*BT----****X",
        "MAPPING": "2244",
        "DESCRIPTION": "Tactical Graphics_Other_Bearing Line_Torpedo"
      },
      {
        "SYMBOLID": "G*O*BO----****X",
        "MAPPING": "2245",
        "DESCRIPTION": "Tactical Graphics_Other_Bearing Line_Electro-Optical Intercept"
      },
      {
        "SYMBOLID": "WA-DPFC----L---",
        "MAPPING": "3000",
        "DESCRIPTION": "Cold Front"
      },
      {
        "SYMBOLID": "WA-DPFCU---L---",
        "MAPPING": "3001",
        "DESCRIPTION": "Upper Cold Front"
      },
      {
        "SYMBOLID": "WA-DPFC-FG-L---",
        "MAPPING": "3002",
        "DESCRIPTION": "Cold Frontogenisis"
      },
      {
        "SYMBOLID": "WA-DPFC-FY-L---",
        "MAPPING": "3003",
        "DESCRIPTION": "Cold Frontolysis"
      },
      {
        "SYMBOLID": "WA-DPFW----L---",
        "MAPPING": "3004",
        "DESCRIPTION": "Warm Front"
      },
      {
        "SYMBOLID": "WA-DPFWU---L---",
        "MAPPING": "3005",
        "DESCRIPTION": "Upper Warm Front "
      },
      {
        "SYMBOLID": "WA-DPFW-FG-L---",
        "MAPPING": "3006",
        "DESCRIPTION": "Warm Frontogenesis "
      },
      {
        "SYMBOLID": "WA-DPFW-FY-L---",
        "MAPPING": "3007",
        "DESCRIPTION": "Warm Frontolysis "
      },
      {
        "SYMBOLID": "WA-DPFO----L---",
        "MAPPING": "3008",
        "DESCRIPTION": "Occluded Front "
      },
      {
        "SYMBOLID": "WA-DPFOU---L---",
        "MAPPING": "3009",
        "DESCRIPTION": "Upper Occluded Front "
      },
      {
        "SYMBOLID": "WA-DPFO-FY-L---",
        "MAPPING": "3010",
        "DESCRIPTION": "Occluded Frontolysis "
      },
      {
        "SYMBOLID": "WA-DPFS----L---",
        "MAPPING": "3011",
        "DESCRIPTION": "Stationary Front"
      },
      {
        "SYMBOLID": "WA-DPFSU---L---",
        "MAPPING": "3012",
        "DESCRIPTION": "Upper Stationary Front"
      },
      {
        "SYMBOLID": "WA-DPFS-FG-L---",
        "MAPPING": "3013",
        "DESCRIPTION": "Stationary Frontogenesis"
      },
      {
        "SYMBOLID": "WA-DPFS-FY-L---",
        "MAPPING": "3014",
        "DESCRIPTION": "Stationary Frontolysis"
      },
      {
        "SYMBOLID": "WA-DPXT----L---",
        "MAPPING": "3015",
        "DESCRIPTION": "Trough Axis"
      },
      {
        "SYMBOLID": "WA-DPXR----L---",
        "MAPPING": "3016",
        "DESCRIPTION": "Ridge Line "
      },
      {
        "SYMBOLID": "WA-DPXSQ---L---",
        "MAPPING": "3017",
        "DESCRIPTION": "Squall Line "
      },
      {
        "SYMBOLID": "WA-DPXIL---L---",
        "MAPPING": "3018",
        "DESCRIPTION": "Instability Line "
      },
      {
        "SYMBOLID": "WA-DPXSH---L---",
        "MAPPING": "3019",
        "DESCRIPTION": "Shear Line "
      },
      {
        "SYMBOLID": "WA-DPXITCZ-L---",
        "MAPPING": "3020",
        "DESCRIPTION": "Inter-Tropical Convergance Zone "
      },
      {
        "SYMBOLID": "WA-DPXCV---L---",
        "MAPPING": "3021",
        "DESCRIPTION": "Convergance Line "
      },
      {
        "SYMBOLID": "WA-DPXITD--L---",
        "MAPPING": "3022",
        "DESCRIPTION": "Inter-Tropical Discontinuity "
      },
      {
        "SYMBOLID": "WAS-WP----P----",
        "MAPPING": "3023",
        "DESCRIPTION": "Wind Plot"
      },
      {
        "SYMBOLID": "WA-DWJ-----L---",
        "MAPPING": "3030",
        "DESCRIPTION": "Jet Stream Line"
      },
      {
        "SYMBOLID": "WA-DWS-----L---",
        "MAPPING": "3031",
        "DESCRIPTION": "Stream Line"
      },
      {
        "SYMBOLID": "WA-DWSTSWA--A--",
        "MAPPING": "3032",
        "DESCRIPTION": "Tropical Storm Wind Areas"
      },
      {
        "SYMBOLID": "WA-DBAIF----A--",
        "MAPPING": "3034",
        "DESCRIPTION": "IFR"
      },
      {
        "SYMBOLID": "WA-DBAMV----A--",
        "MAPPING": "3035",
        "DESCRIPTION": "MVFR "
      },
      {
        "SYMBOLID": "WA-DBATB----A--",
        "MAPPING": "3036",
        "DESCRIPTION": "Weather Turbulence"
      },
      {
        "SYMBOLID": "WA-DBAI-----A--",
        "MAPPING": "3037",
        "DESCRIPTION": "Weather Icing"
      },
      {
        "SYMBOLID": "WA-DBALPNC--A--",
        "MAPPING": "3038",
        "DESCRIPTION": "Precipitation Non-Convective "
      },
      {
        "SYMBOLID": "WA-DBALPC---A--",
        "MAPPING": "3039",
        "DESCRIPTION": "Precipitation Convective"
      },
      {
        "SYMBOLID": "WA-DBAFP----A--",
        "MAPPING": "3040",
        "DESCRIPTION": "Frozen Precipitation"
      },
      {
        "SYMBOLID": "WA-DBAT-----A--",
        "MAPPING": "3041",
        "DESCRIPTION": "Weather Thunderstorm "
      },
      {
        "SYMBOLID": "WA-DBAFG----A--",
        "MAPPING": "3042",
        "DESCRIPTION": "Weather Fog"
      },
      {
        "SYMBOLID": "WA-DBAD-----A--",
        "MAPPING": "3043",
        "DESCRIPTION": "Weather Sand"
      },
      {
        "SYMBOLID": "WA-DBAFF----A--",
        "MAPPING": "3044",
        "DESCRIPTION": "Weather Freeform "
      },
      {
        "SYMBOLID": "WA-DIPIB---L---",
        "MAPPING": "3045",
        "DESCRIPTION": "Isobar Surface"
      },
      {
        "SYMBOLID": "WA-DIPCO---L---",
        "MAPPING": "3046",
        "DESCRIPTION": "Upper Air"
      },
      {
        "SYMBOLID": "WA-DIPIS---L---",
        "MAPPING": "3047",
        "DESCRIPTION": "Isotherm "
      },
      {
        "SYMBOLID": "WA-DIPIT---L---",
        "MAPPING": "3048",
        "DESCRIPTION": "Isotach"
      },
      {
        "SYMBOLID": "WA-DIPID---L---",
        "MAPPING": "3049",
        "DESCRIPTION": "Isodrosotherm"
      },
      {
        "SYMBOLID": "WA-DIPTH---L---",
        "MAPPING": "3050",
        "DESCRIPTION": "Isopleths "
      },
      {
        "SYMBOLID": "WA-DIPFF---L---",
        "MAPPING": "3051",
        "DESCRIPTION": "Operator Freeform "
      },
      {
        "SYMBOLID": "WO-DILOV---L---",
        "MAPPING": "3052",
        "DESCRIPTION": "Limit of Visual Observation"
      },
      {
        "SYMBOLID": "WO-DILUC---L---",
        "MAPPING": "3053",
        "DESCRIPTION": "Limit of Undercast"
      },
      {
        "SYMBOLID": "WO-DILOR---L---",
        "MAPPING": "3054",
        "DESCRIPTION": "Limit of Radar Observation"
      },
      {
        "SYMBOLID": "WO-DILIEO--L---",
        "MAPPING": "3055",
        "DESCRIPTION": "Observed Ice Edge "
      },
      {
        "SYMBOLID": "WO-DILIEE--L---",
        "MAPPING": "3056",
        "DESCRIPTION": "Estimated Ice Edge"
      },
      {
        "SYMBOLID": "WO-DILIER--L---",
        "MAPPING": "3057",
        "DESCRIPTION": "Ice Edge From Radar "
      },
      {
        "SYMBOLID": "WO-DIOC----L---",
        "MAPPING": "3058",
        "DESCRIPTION": "Cracks"
      },
      {
        "SYMBOLID": "WO-DIOCS---L---",
        "MAPPING": "3059",
        "DESCRIPTION": "Cracks Specific-Location "
      },
      {
        "SYMBOLID": "WO-DIOL----L---",
        "MAPPING": "3060",
        "DESCRIPTION": "Ice Openings-Lead"
      },
      {
        "SYMBOLID": "WO-DIOLF---L---",
        "MAPPING": "3061",
        "DESCRIPTION": "Frozen Lead "
      },
      {
        "SYMBOLID": "WO-DHDDL---L---",
        "MAPPING": "3062",
        "DESCRIPTION": "Depth Curve"
      },
      {
        "SYMBOLID": "WO-DHDDC---L---",
        "MAPPING": "3063",
        "DESCRIPTION": "Depth Contour"
      },
      {
        "SYMBOLID": "WO-DHDDA----A--",
        "MAPPING": "3064",
        "DESCRIPTION": "Depth Area "
      },
      {
        "SYMBOLID": "WO-DHCC----L---",
        "MAPPING": "3065",
        "DESCRIPTION": "Coastline "
      },
      {
        "SYMBOLID": "WO-DHCI-----A--",
        "MAPPING": "3066",
        "DESCRIPTION": "Island "
      },
      {
        "SYMBOLID": "WO-DHCB-----A--",
        "MAPPING": "3067",
        "DESCRIPTION": "Beach"
      },
      {
        "SYMBOLID": "WO-DHCW-----A--",
        "MAPPING": "3068",
        "DESCRIPTION": "Water "
      },
      {
        "SYMBOLID": "WO-DHCF----L---",
        "MAPPING": "3069",
        "DESCRIPTION": "Foreshore Line"
      },
      {
        "SYMBOLID": "WO-DHCF-----A--",
        "MAPPING": "3070",
        "DESCRIPTION": "Foreshore Area "
      },
      {
        "SYMBOLID": "WO-DHPBA---L---",
        "MAPPING": "3071",
        "DESCRIPTION": "Anchorage Line "
      },
      {
        "SYMBOLID": "WO-DHPBA----A--",
        "MAPPING": "3072",
        "DESCRIPTION": "Anchorage Area"
      },
      {
        "SYMBOLID": "WO-DHPBP---L---",
        "MAPPING": "3073",
        "DESCRIPTION": "Pier "
      },
      {
        "SYMBOLID": "WOS-HPFF----A--",
        "MAPPING": "3074",
        "DESCRIPTION": "Wiers"
      },
      {
        "SYMBOLID": "WO-DHPMD----A--",
        "MAPPING": "3075",
        "DESCRIPTION": "Drydock"
      },
      {
        "SYMBOLID": "WO-DHPMO---L---",
        "MAPPING": "3076",
        "DESCRIPTION": "Offshore Loading Facility Line"
      },
      {
        "SYMBOLID": "WO-DHPMO----A--",
        "MAPPING": "3077",
        "DESCRIPTION": "Offshore Loading Facility Area "
      },
      {
        "SYMBOLID": "WO-DHPMRA--L---",
        "MAPPING": "3078",
        "DESCRIPTION": "Ramp Above Water"
      },
      {
        "SYMBOLID": "WO-DHPMRB--L---",
        "MAPPING": "3079",
        "DESCRIPTION": "Ramp Below Water "
      },
      {
        "SYMBOLID": "WO-DHPSPA--L---",
        "MAPPING": "3080",
        "DESCRIPTION": "Jetty Above Water "
      },
      {
        "SYMBOLID": "WO-DHPSPB--L---",
        "MAPPING": "3081",
        "DESCRIPTION": "Jetty Below Water"
      },
      {
        "SYMBOLID": "WO-DHPSPS--L---",
        "MAPPING": "3082",
        "DESCRIPTION": "Seawall "
      },
      {
        "SYMBOLID": "WO-DHABP----A--",
        "MAPPING": "3083",
        "DESCRIPTION": "Perches "
      },
      {
        "SYMBOLID": "WO-DHALLA--L---",
        "MAPPING": "3084",
        "DESCRIPTION": "Leading Line"
      },
      {
        "SYMBOLID": "WO-DHHD-----A--",
        "MAPPING": "3085",
        "DESCRIPTION": "Underwater Hazard"
      },
      {
        "SYMBOLID": "WO-DHHDF----A--",
        "MAPPING": "3200",
        "DESCRIPTION": "Foul Ground"
      },
      {
        "SYMBOLID": "WO-DHHDK----A--",
        "MAPPING": "3201",
        "DESCRIPTION": "Kelp"
      },
      {
        "SYMBOLID": "WO-DHHDB---L---",
        "MAPPING": "3086",
        "DESCRIPTION": "Breaker "
      },
      {
        "SYMBOLID": "WOS-HHDR---L---",
        "MAPPING": "3087",
        "DESCRIPTION": "Reef"
      },
      {
        "SYMBOLID": "WO-DHHDD----A--",
        "MAPPING": "3089",
        "DESCRIPTION": "Discolored Water "
      },
      {
        "SYMBOLID": "WO-DTCCCFE-L---",
        "MAPPING": "3090",
        "DESCRIPTION": "Ebb Tide "
      },
      {
        "SYMBOLID": "WO-DTCCCFF-L---",
        "MAPPING": "3091",
        "DESCRIPTION": "Flood Tide"
      },
      {
        "SYMBOLID": "WO-DOBVA----A--",
        "MAPPING": "3092",
        "DESCRIPTION": "VDR Level 1-2"
      },
      {
        "SYMBOLID": "WO-DOBVB----A--",
        "MAPPING": "3092",
        "DESCRIPTION": "VDR Level 2-3 "
      },
      {
        "SYMBOLID": "WO-DOBVC----A--",
        "MAPPING": "3092",
        "DESCRIPTION": "VDR Level 3-4"
      },
      {
        "SYMBOLID": "WO-DOBVD----A--",
        "MAPPING": "3092",
        "DESCRIPTION": "VDR Level 4-5 "
      },
      {
        "SYMBOLID": "WO-DOBVE----A--",
        "MAPPING": "3092",
        "DESCRIPTION": "VDR Level 5-6"
      },
      {
        "SYMBOLID": "WO-DOBVF----A--",
        "MAPPING": "3092",
        "DESCRIPTION": "VDR Level 6-7 "
      },
      {
        "SYMBOLID": "WO-DOBVG----A--",
        "MAPPING": "3092",
        "DESCRIPTION": "VDR Level 7-8"
      },
      {
        "SYMBOLID": "WO-DOBVH----A--",
        "MAPPING": "3092",
        "DESCRIPTION": "VDR Level 8-9"
      },
      {
        "SYMBOLID": "WO-DOBVI----A--",
        "MAPPING": "3092",
        "DESCRIPTION": "VDR Level 9-10"
      },
      {
        "SYMBOLID": "WO-DBSF-----A--",
        "MAPPING": "3093",
        "DESCRIPTION": "Beach Slope Flat "
      },
      {
        "SYMBOLID": "WO-DBSG-----A--",
        "MAPPING": "3094",
        "DESCRIPTION": "Beach Slope Gentle"
      },
      {
        "SYMBOLID": "WO-DBSM-----A--",
        "MAPPING": "3095",
        "DESCRIPTION": "Beach Slope Moderate"
      },
      {
        "SYMBOLID": "WO-DBST-----A--",
        "MAPPING": "3096",
        "DESCRIPTION": "Beach Slope Steep"
      },
      {
        "SYMBOLID": "WO-DGMSR----A--",
        "MAPPING": "3097",
        "DESCRIPTION": "Solid Rock "
      },
      {
        "SYMBOLID": "WO-DGMSC----A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Clay"
      },
      {
        "SYMBOLID": "WO-DGMSSVS--A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Very Course Sand"
      },
      {
        "SYMBOLID": "WO-DGMSSC---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Coarse Sand"
      },
      {
        "SYMBOLID": "WO-DGMSSM---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Medium Sand"
      },
      {
        "SYMBOLID": "WO-DGMSSF---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Fine Sand "
      },
      {
        "SYMBOLID": "WO-DGMSSVF--A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Very Fine Sand"
      },
      {
        "SYMBOLID": "WO-DGMSIVF--A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Very Fine Silt "
      },
      {
        "SYMBOLID": "WO-DGMSIF---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Fine Silt"
      },
      {
        "SYMBOLID": "WO-DGMSIM---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Medium Silt "
      },
      {
        "SYMBOLID": "WO-DGMSIC---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Coarse Silt"
      },
      {
        "SYMBOLID": "WO-DGMSB----A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Boulders"
      },
      {
        "SYMBOLID": "WO-DGMS-CO--A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Oyster Shells"
      },
      {
        "SYMBOLID": "WO-DGMS-PH--A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Pebbles Shells "
      },
      {
        "SYMBOLID": "WO-DGMS-SH--A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Sand and Shells"
      },
      {
        "SYMBOLID": "WO-DGML-----A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Sediments Land"
      },
      {
        "SYMBOLID": "WO-DGMN-----A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Sediments Land"
      },
      {
        "SYMBOLID": "WO-DGMRS----A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Roughness Smooth"
      },
      {
        "SYMBOLID": "WO-DGMRM----A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Roughness Moderate"
      },
      {
        "SYMBOLID": "WO-DGMRR----A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Roughness Rough"
      },
      {
        "SYMBOLID": "WO-DGMCL----A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Clutter Low"
      },
      {
        "SYMBOLID": "WO-DGMCM----A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Clutter Medium"
      },
      {
        "SYMBOLID": "WO-DGMCH----A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Clutter High"
      },
      {
        "SYMBOLID": "WO-DGMIBA---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Impact Burial 0"
      },
      {
        "SYMBOLID": "WO-DGMIBB---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Impact Burial 10"
      },
      {
        "SYMBOLID": "WO-DGMIBC---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Impact Burial 20"
      },
      {
        "SYMBOLID": "WO-DGMIBD---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Impact Burial 75"
      },
      {
        "SYMBOLID": "WO-DGMIBE---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Impact Burial 100"
      },
      {
        "SYMBOLID": "WO-DGMBCA---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Category A"
      },
      {
        "SYMBOLID": "WO-DGMBCB---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Category B"
      },
      {
        "SYMBOLID": "WO-DGMBCC---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Category C"
      },
      {
        "SYMBOLID": "WO-DGMBTA---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Type A1"
      },
      {
        "SYMBOLID": "WO-DGMBTB---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Type A2"
      },
      {
        "SYMBOLID": "WO-DGMBTC---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Type A3"
      },
      {
        "SYMBOLID": "WO-DGMBTD---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Type B1"
      },
      {
        "SYMBOLID": "WO-DGMBTE---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Type B2"
      },
      {
        "SYMBOLID": "WO-DGMBTF---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Type B3"
      },
      {
        "SYMBOLID": "WO-DGMBTG---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Type C1"
      },
      {
        "SYMBOLID": "WO-DGMBTH---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Type C2"
      },
      {
        "SYMBOLID": "WO-DGMBTI---A--",
        "MAPPING": "3098",
        "DESCRIPTION": "Bottom Type C3"
      },
      {
        "SYMBOLID": "WO-DL-ML---L---",
        "MAPPING": "3099",
        "DESCRIPTION": "Maritime Limit"
      },
      {
        "SYMBOLID": "WO-DL-MA----A--",
        "MAPPING": "3100",
        "DESCRIPTION": "Maritime Area"
      },
      {
        "SYMBOLID": "WO-DL-RA---L---",
        "MAPPING": "3101",
        "DESCRIPTION": "Restricted Area"
      },
      {
        "SYMBOLID": "WO-DL-SA----A--",
        "MAPPING": "3102",
        "DESCRIPTION": "Swept Area"
      },
      {
        "SYMBOLID": "WO-DL-TA----A--",
        "MAPPING": "3103",
        "DESCRIPTION": "Training Area"
      },
      {
        "SYMBOLID": "WO-DL-O-----A--",
        "MAPPING": "3104",
        "DESCRIPTION": "Operator Defined"
      },
      {
        "SYMBOLID": "WO-DMCA----L---",
        "MAPPING": "3105",
        "DESCRIPTION": "Cable"
      },
      {
        "SYMBOLID": "WO-DMCC-----A--",
        "MAPPING": "3106",
        "DESCRIPTION": "Submerged Crib"
      },
      {
        "SYMBOLID": "WO-DMCD----L---",
        "MAPPING": "3107",
        "DESCRIPTION": "Canal"
      },
      {
        "SYMBOLID": "WO-DMOA-----A--",
        "MAPPING": "3108",
        "DESCRIPTION": "Oil Rig Field "
      },
      {
        "SYMBOLID": "WO-DMPA----L---",
        "MAPPING": "3109",
        "DESCRIPTION": "Pipe"
      },
      {
        "SYMBOLID": "CYLINDER-------",
        "MAPPING": "900",
        "DESCRIPTION": "Cylinder"
      },
      {
        "SYMBOLID": "ORBIT----------",
        "MAPPING": "900",
        "DESCRIPTION": "Orbit"
      },
      {
        "SYMBOLID": "ROUTE----------",
        "MAPPING": "900",
        "DESCRIPTION": "Route"
      },
      {
        "SYMBOLID": "POLYGON--------",
        "MAPPING": "900",
        "DESCRIPTION": "Polygon"
      },
      {
        "SYMBOLID": "RADARC---------",
        "MAPPING": "900",
        "DESCRIPTION": "Radarc"
      },
      {
        "SYMBOLID": "POLYARC--------",
        "MAPPING": "900",
        "DESCRIPTION": "Polyarc"
      },
      {
        "SYMBOLID": "CAKE-----------",
        "MAPPING": "900",
        "DESCRIPTION": "Cake"
      },
      {
        "SYMBOLID": "TRACK----------",
        "MAPPING": "900",
        "DESCRIPTION": "Track"
      },
      {
        "SYMBOLID": "CURTAIN--------",
        "MAPPING": "900",
        "DESCRIPTION": "Curtain"
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
                    data.symbolID = symbol["SYMBOLID"] || ""; //SYMBOLID
                    data.mapping = symbol["MAPPING"] || ""; //MAPPING
                    data.description = symbol["DESCRIPTION"] || ""; //DESCRIPTION
					
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
            if(armyc2.c2sd.renderer.utilities.SymbolUtilities.is3dAirspace(symbolID)===false)
            {
                basicID = armyc2.c2sd.renderer.utilities.SymbolUtilities.getBasicSymbolID(symbolID);
            }   
            if(basicID in symbolMap)
            {
                return symbolMap[basicID].mapping;
            }
            else
            {
                return null;
            }
        }
        catch(err)
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("TacticalGraphicLookup",
                "getCharCodeFromSymbol",err);
        }

    }
    
};
}());