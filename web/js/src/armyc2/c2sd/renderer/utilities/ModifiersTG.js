var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.ModifiersTG = {
    
     /**
     * The innermost part of a symbol that represents a warfighting object
     * Here for completeness, not actually used as this comes from the
     * symbol code.
     * SIDC positions 3, 5-104
     * TG: P,L,A,BL,N,B/C
     * Length: G
     */
    A_SYMBOL_ICON : "A",
    /**
     * The basic graphic (see 5.5.1).
     * We feed off of the symbol code so this isn't used
     * SIDC positions 11 and 12
     * TG: L,A,BL
     * Length: G
     */
    B_ECHELON : "B",
    /**
     * A graphic modifier in a boundary graphic that
     * identifies command level (see 5.5.2.2, table V, and
     * figures 10 and 12).
     * TG: N
     * Length: 6
     */
    C_QUANTITY : "C",
    /**
     * A text modifier for tactical graphics, content is
     * implementation specific.
     * TG: P,L,A,N,B/C
     * Length: 20
     */
    H_ADDITIONAL_INFO_1 : "H",
    /**
     * A text modifier for tactical graphics, content is
     * implementation specific.
     * TG: P,L,A,N,B/C
     * Length: 20
     */
    H1_ADDITIONAL_INFO_2 : "H1",
    /**
     * A text modifier for tactical graphics, content is
     * implementation specific.
     * TG: P,L,A,N,B/C
     * Length: 20
     */
    H2_ADDITIONAL_INFO_3 : "H2",
    /**
     * A text modifier for tactical graphics, content is
     * implementation specific.
     * TG: P,L,A,N,B/C
     * Length: 20
     */
    H3_ADDITIONAL_INFO_4 : "H3",
    /**
     * A text modifier for tactical graphics, letters "ENY" denote hostile symbols.
     * TG: P,L,A,BL,N,B/C
     * Length: 3
     */
    N_HOSTILE : "N",
    /**
     * A graphic modifier for CBRN events that
     * identifies the direction of movement (see 5.5.2.1
     * and figure 11).
     * TG: N,B/C
     * Length: G
     */
    Q_DIRECTION_OF_MOVEMENT : "Q",
    /**
     * A graphic modifier for points and CBRN events
     * used when placing an object away from its actual
     * location (see 5.5.2.3 and figures 10, 11, and 12).
     * TG: P,N,B/C
     * Length: G
     */
    S_OFFSET_INDICATOR : "S",
    /**
     * A text modifier that uniquely identifies a particular
     * tactical graphic, track number.
     * Nuclear: delivery unit (missile, aircraft, satellite,
     * etc.)
     * TG:P,L,A,BL,N,B/C
     * Length: 15 (35 for BL)
     */
    T_UNIQUE_DESIGNATION_1 : "T",
    /**
     * A text modifier that uniquely identifies a particular
     * tactical graphic, track number.
     * Nuclear: delivery unit (missile, aircraft, satellite,
     * etc.)
     * TG:P,L,A,BL,N,B/C
     * Length: 15 (35 for BL)
     */
    T1_UNIQUE_DESIGNATION_2 : "T1",
    /**
     * A text modifier that indicates nuclear weapon type.
     * TG: N
     * Length: 20
     */
    V_EQUIP_TYPE : "V",
    /**
     * A text modifier for units, equipment, and installations that displays DTG format:
     * DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).
     * TG:P,L,A,N,B/C
     * Length: 16
     */
    W_DTG_1 : "W",
    /**
     * A text modifier for units, equipment, and installations that displays DTG format:
     * DDHHMMSSZMONYYYY or “O/O” for on order (see 5.5.2.6).
     * TG:P,L,A,N,B/C
     * Length: 16
     */
    W1_DTG_2 : "W1",
    /**
     * A text modifier that displays the minimum,
     * maximum, and/or specific altitude (in feet or
     * meters in relation to a reference datum), flight
     * level, or depth (for submerged objects in feet
     * below sea level). See 5.5.2.5 for content.
     * TG:P,L,A,N,B/C
     * Length: 14
     */
    X_ALTITUDE_DEPTH : "X",
    /**
     * A text modifier that displays a graphic’s location
     * in degrees, minutes, and seconds (or in UTM or
     * other applicable display format).
     *  Conforms to decimal
     *  degrees format:
     *  xx.dddddhyyy.dddddh
     *  where
     *  xx : degrees latitude
     *  yyy : degrees longitude
     *  .ddddd : decimal degrees
     *  h : direction (N, E, S, W)
     * TG:P,L,A,BL,N,B/C
     * Length: 19
     */
    Y_LOCATION : "Y",

    /**
     * For Tactical Graphics
     * A numeric modifier that displays a minimum,
     * maximum, or a specific distance (range, radius,
     * width, length, etc.), in meters.
     * 0 - 999,999 meters
     * TG: P.L.A
     * Length: 6
     */
    AM_DISTANCE : "AM",
    /**
     * For Tactical Graphics
     * A numeric modifier that displays an angle
     * measured from true north to any other line in
     * degrees.
     * 0 - 359 degrees
     * TG: P.L.A
     * Length: 3
     */
    AN_AZIMUTH : "AN",




    LENGTH : "Length",
    WIDTH : "Width",
    RADIUS : "Radius",
    ANGLE : "Angle",
    //SEGMENT_DATA : "Segment Data",
    
    getModifierName : function(modifier)
    {
        switch(modifier)
        {
            //case A_SYMBOL_ICON:
            //    return "Symbol Icon";
            case this.B_ECHELON:
                return "Echelon";
            case this.C_QUANTITY:
                return "Quantity";
            case this.H_ADDITIONAL_INFO_1:
                return "Additional Info 1";
            case this.H1_ADDITIONAL_INFO_2:
                return "Additional Info 2";
            case this.H2_ADDITIONAL_INFO_3:
                return "Additional Info 3";
            case this.H3_ADDITIONAL_INFO_4:
                return "Additional Info 4";
            case this.N_HOSTILE:
                return "Hostile";
            case this.Q_DIRECTION_OF_MOVEMENT:
                return "Direction of Movement";
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
            case this.AM_DISTANCE:
                return "Distance";
            case this.AN_AZIMUTH:
                return "Azimuth";
            default:
                return "";

        }
    }
    
};

