var armyc2 = armyc2 || {};
window.armyc2 = armyc2;
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.ModifiersUnits = {
    
    /**
     * The innermost part of a symbol that represents a warfighting object
     * Here for completeness, not actually used as this comes from the
     * symbol code.
     * Type: U,E,I,SI,SO,EU,EEI,EI
     * Length: G
     */
    A_SYMBOL_ICON : "A",
    /**
     * A graphic modifier in a unit symbol that identifies command level
     * We feed off of the symbol code so this isn't used
     * Type: U,SO
     * Length: G
     */
    B_ECHELON : "B",
    /**
     * A text modifier in an equipment symbol that identifies the number of items present.
     * Type: E,EEI
     * Length: 9
     */
    C_QUANTITY : "C",
    /**
     * A graphic modifier that identifies a unit or SO symbol as a task force (see 5.3.4.6
     * and figures 2 and 3).
     * Type: U,SO
     * Length: G
     */
    D_TASK_FORCE_INDICATOR : "D",
    /**
     * A graphic modifier that displays standard identity, battle dimension, or exercise
     * amplifying descriptors of an object (see 5.3.1 and table II).
     * Type: U,E,I,SO,EU,EEI,EI
     * Length: G
     */
    E_FRAME_SHAPE_MODIFIER : "E",
    /**
     * A text modifier in a unit symbol that displays (+) for reinforced, (-) for reduced,(+) reinforced and reduced.
     * R : reinforced,D : reduced,RD : reinforced and reduced
     * Type: U,SO
     * Length: 23
     */
    F_REINFORCED_REDUCED : "F",
    /**
     * A text modifier for units, equipment and installations, content is implementation specific.
     * Type: U,E,I,SI,SO
     * Length: 20
     */
    G_STAFF_COMMENTS : "G",
    /**
     * Text modifier for amplifying free text
     * Type: U,E,I,SI,SO,EU,EEI,EI
     * Length: 20
     */
    H_ADDITIONAL_INFO_1 : "H",
    /**
     * Text modifier for amplifying free text
     * Type: U,E,I,SI,SO,EU,EEI,EI
     * Length: 20
     */
    H1_ADDITIONAL_INFO_2 : "H1",
    /**
     * Text modifier for amplifying free text
     * Type: U,E,I,SI,SO,EU,EEI,EI
     * Length: 20
     */
    H2_ADDITIONAL_INFO_3 : "H2",
    /**
     * A text modifier for units, equipment, and installations that consists of 
     * a one letter reliability rating and a one-number credibility rating.
        Reliability Ratings: A-completely reliable, B-usually reliable, 
        C-fairly reliable, D-not usually reliable, E-unreliable, 
        F-reliability cannot be judged.
        Credibility Ratings: 1-confirmed by other sources,
        2-probably true, 3-possibly true, 4-doubtfully true,
        5-improbable, 6-truth cannot be judged.
        Type: U,E,I,SI,SO,EU,EEI,EI
        Length: 2
     */
    J_EVALUATION_RATING : "J",
    /**
     * A text modifier for units and installations that indicates unit effectiveness or
     * installation capability.
     * Type: U,I,SO
     * Length: 5,5,3
     */
    K_COMBAT_EFFECTIVENESS : "K",
    /**
     * A text modifier for hostile equipment, “!” indicates detectable electronic
     * signatures.
     * Type: E,SI
     * Length: 1
     */
    L_SIGNATURE_EQUIP : "L",
    /**
     * A text modifier for units that indicates number or title of higher echelon
     * command (corps are designated by Roman numerals).
     * Type: U,SI
     * Length: 21
     */
    M_HIGHER_FORMATION : "M",
    /**
     * A text modifier for equipment, letters "ENY" denote hostile symbols.
     * Type: E
     * Length: 3
     */
    N_HOSTILE : "N",
    /**
     * A text modifier displaying IFF/SIF Identification modes and codes.
     * Type: U,E,SO
     * Length: 5
     */
    P_IFF_SIF : "P",
    /**
     * A graphic modifier for units and equipment that identifies the direction of
     * movement or intended movement of an object (see 5.3.4.1 and figures 2 and 3).
     * Type: U,E,SO,EU,EEI
     * Length: G
     */
    Q_DIRECTION_OF_MOVEMENT : "Q",
    /**
     * A graphic modifier for equipment that depicts the mobility of an object (see
     *   5.3.4.3, figures 2 and 3, and table VI).
     * We feed off of the symbol code for mobility so this isn't used
     * Type: E,EEI
     * Length: G
     */
    R_MOBILITY_INDICATOR : "R",
    /**
     * M : Mobile, S : Static, or U : Uncertain.
     * Type: SI
     * Length: 1
     */
    R2_SIGNIT_MOBILITY_INDICATOR : "R2",
    /**
     * Headquarters staff indicator: A graphic modifier for units, equipment, and
     * installations that identifies a unit as a headquarters (see 5.3.4.8 and figures 2 and
     * 3).
     * Offset location indicator: A graphic modifier for units, equipment, and
     * installations used when placing an object away from its actual location (see
     * 5.3.4.9 and figures 2 and 3).
     * Type: U,E,I,SO,EU,EEI,EI
     * Length: G
     */
    S_HQ_STAFF_OR_OFFSET_INDICATOR : "S",
    /**
     * A text modifier for units, equipment, and installations that uniquely identifies a
     * particular symbol or track number. Identifies acquisitions number when used
     * with SIGINT symbology.
     * Type: U,E,I,SI,SO,EU,EEI,EI
     * Length: 21
     */
    T_UNIQUE_DESIGNATION_1 : "T",
    /**
     * A text modifier for units, equipment, and installations that uniquely identifies a
     * particular symbol or track number. Identifies acquisitions number when used
     * with SIGINT symbology.
     * Type: U,E,I,SI,SO,EU,EEI,EI
     * Length: 21
     */
    T1_UNIQUE_DESIGNATION_2 : "T1",
    /**
     * A text modifier for equipment that indicates types of equipment.
     * For Tactical Graphics:
     * A text modifier that indicates nuclear weapon type.
     * Type: E,SI,EEI
     * Length: 24
     */
    V_EQUIP_TYPE : "V",
    /**
     * A text modifier for units, equipment, and installations that displays DTG format:
     * DDHHMMSSZMONYYYY or "O/O" for on order (see 5.5.2.6).
     * Type: U,E,I,SI,SO,EU,EEI,EI
     * Length: 16
     */
    W_DTG_1 : "W",
    /**
     * A text modifier for units, equipment, and installations that displays DTG format:
     * DDHHMMSSZMONYYYY or "O/O" for on order (see 5.5.2.6).
     * Type: U,E,I,SI,SO,EU,EEI,EI
     * Length: 16
     */
    W1_DTG_2 : "W1",
    /**
     * A text modifier for units, equipment, and installations, that displays either
     * altitude flight level, depth for submerged objects, or height of equipment or
     * structures on the ground. See 5.5.2.5 for content.
     * Type: U,E,I,SO,EU,EEI,EI
     * Length: 14
     */
    X_ALTITUDE_DEPTH : "X",
    /**
     * A text modifier for units, equipment, and installations that displays a symbol’s
     * location in degrees, minutes, and seconds (or in UTM or other applicable display
     * format).
     * Conforms to decimal
     *  degrees format:
     *  xx.dddddhyyy.dddddh
     *  where
     *  xx : degrees latitude
     *  yyy : degrees longitude
     *  .ddddd : decimal degrees
     *  h : direction (N, E, S, W)
     * Type: U,E,I,SI,SO,EU,EEI,EI
     * Length: 19
     */
    Y_LOCATION : "Y",
    /**
     * A text modifier for units and equipment that displays velocity as set forth in
     * MIL-STD-6040.
     * Type: U,E,SO,EU,EEI
     * Length: 8
     */
    Z_SPEED : "Z",
    /**
     * A text modifier for units, indicator is contained inside the frame (see figures 2
     * and 3), contains the name of the special C2 Headquarters.
     * Type: U,SO
     * Length: 9
     */
    AA_SPECIAL_C2_HQ : "AA",
    /**
     * Feint or dummy indicator: A graphic modifier for units, equipment, and
     * installations that identifies an offensive or defensive unit intended to draw the
     * enemy’s attention away from the area of the main attack (see 5.3.4.7 and figures
     * 2 and 3).
     * Type: U,E,I,SO
     * Length: G
     */
    AB_FEINT_DUMMY_INDICATOR : "AB",
    /**
     * Installation: A graphic modifier for units, equipment, and installations used to
     * show that a particular symbol denotes an installation (see 5.3.4.5 and figures 2
     * and 3).
     * Not used, we feed off of symbol code for this
     * Type: U,E,I,SO,EU,EEI,EI
     * Length: G
     */
    AC_INSTALLATION : "AC",
    /**
     * ELNOT or CENOT
     * Type: SI
     * Length: 6
     */
    AD_PLATFORM_TYPE : "AD",
    /**
     * Equipment teardown time in minutes.
     * Type: SI
     * Length: 3
     */
    AE_EQUIPMENT_TEARDOWN_TIME : "AE",
    /**
     * Example: "Hawk" for Hawk SAM system.
     * Type: SI
     * Length: 12
     */
    AF_COMMON_IDENTIFIER : "AF",
    /**
     * Towed sonar array indicator: A graphic modifier for equipment that indicates the
     * presence of a towed sonar array (see 5.3.4.4, figures 2 and 3, and table VII).
     * Type: E
     * Length: G
     */
    AG_AUX_EQUIP_INDICATOR : "AG",
    /**
     * A graphic modifier for units and equipment that indicates the area where an
     * object is most likely to be, based on the object’s last report and the reporting
     * accuracy of the sensor that detected the object (see 5.3.4.11.1 and figure 4).
     * Type: E,U,SO,EU,EEI
     * Length: G
     */
    AH_AREA_OF_UNCERTAINTY : "AH",
    /**
     * A graphic modifier for units and equipment that identifies where an object
     * should be located at present, given its last reported course and speed (see
     * 5.3.4.11.2 and figure 4).
     * Type: E,U,SO,EU,EEI
     * Length: G
     */
    AI_DEAD_RECKONING_TRAILER : "AI",
    /**
     * A graphic modifier for units and equipment that depicts the speed and direction
     * of movement of an object (see 5.3.4.11.3 and figure 4).
     * Type: E,U,SO,EU,EEI
     * Length: G
     */
    AJ_SPEED_LEADER : "AJ",
    /**
     * A graphic modifier for units and equipment that connects two objects and is
     * updated dynamically as the positions of the objects change (see 5.3.4.11.4 and
     * figure 4).
     * Type: U,E,SO
     * Length: G
     */
    AK_PAIRING_LINE : "AK",
    /**
     * An optional graphic modifier for equipment or installations that indicates
     * operational condition or capacity.
     * Type: E,I,SI,SO,EU,EEI,EI
     * Length: G
     */
    AL_OPERATIONAL_CONDITION : "AL",

    /**
     * A graphic amplifier placed immediately atop the symbol. May denote, 1)
     * local/remote status, 2) engagement status, and 3) weapon type.
     *
     * Type: U,E,I
     * Length: G/8
     */
    AO_ENGAGEMENT_BAR : "AO",
    
        /**
     * Used internally by the renderer.  This value is set via the 13th & 14th
     * characters in the symbol id.  There is no formal definition of how
     * this should be indicated on the symbol in the MilStd or USAS.  
     * The renderer will place it to the right of the 'H' label.
     */
    CC_COUNTRY_CODE : "CC",

    /**
     * A generic name label that goes to the right of the symbol and
     * any existing labels.  If there are no existing labels, it goes right
     * next to the right side of the symbol.  This is a CPOF label that applies
     * to all force elements.  This IS NOT a MilStd or USAS Label.  
     */
    CN_CPOF_NAME_LABEL : "CN",
    
    /**
     * Sonar Classification Confidence level. valid values are 1-5.
     * Only applies to the 4 subsurface MILCO sea mines
     */
    SCC_SONAR_CLASSIFICATION_CONFIDENCE : "SCC",
    
    
    getModifierName : function(modifier)
    {
        switch(modifier)
        {
            //case this.A_SYMBOL_ICON:
            //    return "Symbol Icon";
            case this.B_ECHELON:
                return "Echelon";
            case this.C_QUANTITY:
                return "Quantity";
            //case this.D_TASK_FORCE_INDICATOR:
            //    return "Task Force Indicator";
            //case this.E_FRAME_SHAPE_MODIFIER:
            //    return "Frame Shape Modifier";
            case this.F_REINFORCED_REDUCED:
                return "Reinforce Reduced";
            case this.G_STAFF_COMMENTS:
                return "Staff Comments";
            case this.H_ADDITIONAL_INFO_1:
                return "Additional Info 1";
            case this.H1_ADDITIONAL_INFO_2:
                return "Additional Info 2";
            case this.H2_ADDITIONAL_INFO_3:
                return "Additional Info 3";
            case this.J_EVALUATION_RATING:
                return "Evaluation Rating";
            case this.K_COMBAT_EFFECTIVENESS:
                return "Combat Effectiveness";
            case this.L_SIGNATURE_EQUIP:
                return "Signature Equipment";
            case this.M_HIGHER_FORMATION:
                return "Higher Formation";
            case this.N_HOSTILE:
                return "Hostile";
            case this.P_IFF_SIF:
                return "IFF SIF";
            case this.Q_DIRECTION_OF_MOVEMENT:
                return "Direction of Movement";
            case this.R_MOBILITY_INDICATOR:
                return "Mobility Indicator";
            case this.R2_SIGNIT_MOBILITY_INDICATOR:
                return "Signals Intelligence Mobility Indicator";
            //case this.S_HQ_STAFF_OR_OFFSET_INDICATOR:
            //    return "HQ Staff / Offset Indicator";
            //case this.S_OFFSET_INDICATOR:
            //    return "Offset Indicator";
            case this.T_UNIQUE_DESIGNATION_1:
                return "Unique Designation 1";
            case this.T1_UNIQUE_DESIGNATION_2:
                return "Unique Designation 2";
            case this.V_EQUIP_TYPE:
                return "Equipment Type";
            case this.W_DTG_1:
                return "Date Time Group 1";
            case this.W1_DTG_2:
                return "Date Time Group 2";
            case this.X_ALTITUDE_DEPTH:
                return "Altitude Depth";
            case this.Y_LOCATION:
                return "Location";
            case this.Z_SPEED:
                return "Speed";
            case this.AA_SPECIAL_C2_HQ:
                return "Special C2 HQ";
            //case this.AB_FEINT_DUMMY_INDICATOR:
            //    return "Feint Dummy Indicator";
            //case this.AC_INSTALLATION:
            //    return "Installation";
            case this.AD_PLATFORM_TYPE:
                return "Platform Type";
            case this.AE_EQUIPMENT_TEARDOWN_TIME:
                return "Equipment Teardown Time";
            case this.AF_COMMON_IDENTIFIER:
                return "Common Identifier";
            //case this.AG_AUX_EQUIP_INDICATOR:
            //    return "Auxiliary Equipment Indicator";
            /*case this.AH_AREA_OF_UNCERTAINTY:
                return "Area of Uncertainty";
            case this.AI_DEAD_RECKONING_TRAILER:
                return "Dead Reckoning Trailer";
            case this.AJ_SPEED_LEADER:
                return "Speed Leader";
            case this.AK_PAIRING_LINE:
                return "Pairing Line";
            case this.AL_OPERATIONAL_CONDITION:
                return "Operational Condition";
            case this.AO_ENGAGEMENT_BAR:
                return "Engagement Bar";//*/
            case this.SCC_SONAR_CLASSIFICATION_CONFIDENCE:
                return "Sonar Classification Confidence";
            default:
                return "";

        }
    }

    
};
