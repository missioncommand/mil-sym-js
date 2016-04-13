var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

/** @class */
armyc2.c2sd.renderer.utilities.SymbolDimensions = {};
    
      
    /**
     * 
     * @param {Number} charIndex
     * @param {Number} fontSize
     * @return {armyc2.c2sd.renderer.so.Rectangle} 
     */
    armyc2.c2sd.renderer.utilities.SymbolDimensions.getUnitBounds = function(charIndex, fontSize){
        var Rectangle = armyc2.c2sd.renderer.so.Rectangle,
            index = charIndex - 57000;
        var rect = null;

        switch(index)
        {
            case 800://unknown ground
            case 801:
            case 802:
                    rect = new Rectangle(0,0,60.8,60.8);
                    break;
            case 803://FG
            case 804:
            case 805:
                    rect = new Rectangle(0,0,65,47);
                    break;
            case 806://HG
            case 807:
            case 808:
                    rect = new Rectangle(0,0,62.5,62.5);
                    break;
            case 809://NG
            case 810:
            case 811:
                    rect = new Rectangle(0,0,50.05,50.05);
                    break;
            case 812://FE
            case 813:
            case 814:
                    rect = new Rectangle(0,0,53.75,53.75);
                    break;
            case 816://HA/S
            case 817:
            case 818:
            case 840:
            case 841:
            case 842:
                    rect = new Rectangle(0,8,50.3,53);//
                    break;
            case 819://FA/S
            case 820:
            case 821:
            case 843:
            case 844:
            case 845:
                    rect = new Rectangle(0,7,46.6,48);//y=7
                    break;
            case 822://NA/S
            case 823:
            case 824:
            case 846:
            case 847:
            case 848:
                    rect = new Rectangle(0,6,47,48);//y=6
                    break;
            case 825://UA/S
            case 826:
            case 827:
            case 849:
            case 850:
            case 851:
                    rect = new Rectangle(0,5,64.7,56);//
                    break;
            case 828://HSub
            case 829:
            case 830:
                    rect = new Rectangle(0,-8,50.3,53);//{x : 0, y:-7, width:50.3,height:53}
                    break;
            case 831://FSub
            case 832:
            case 833:
                    rect = new Rectangle(0,-5,46.6,49);//y=-5
                    break;
            case 834://NSub
            case 835:
            case 836:
                    rect = new Rectangle(0,-5,46.5,48);//y=-5
                    break;
            case 837://USub
            case 838:
            case 839:
                    rect = new Rectangle(0,-5,64.7,58);//y=-10
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
                    rect = new Rectangle(0,-5,35,43);//y=-10
                    break;			
            default:
                    rect = new Rectangle(0,0,65,65);
                    break;
        }

        var ratio = 1;
        if(fontSize !== 50)
        {
                ratio = fontSize / 50;
                //I only measured for a font size of 50.  if we get the ratio and multiply the values
                //by it, we in theory should have a correct adjusted rectangle.
                rect = new Rectangle(0,Math.ceil(rect.y*ratio), Math.ceil(rect.width*ratio), Math.ceil(rect.height*ratio));
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
    armyc2.c2sd.renderer.utilities.SymbolDimensions.getSymbolBounds = function (symbolID, symStd, fontSize){
        var spli = armyc2.c2sd.renderer.utilities.SinglePointLookup.getSPLookupInfo(symbolID, symStd);

        var Rectangle = armyc2.c2sd.renderer.so.Rectangle;

        var rect = new Rectangle(0,0,spli.width, spli.height);//new Rectangle(0,0,spli.width, spli.height);

        if(fontSize !== 60)//adjust boundaries ratio if font size is not at the default setting.
        {
                var ratio = fontSize/60;
                
                rect = new Rectangle(0,0,Math.round(rect.width*ratio), Math.round(rect.height*ratio));
                //rect = new Rectangle(0,0,Math.ceil(rect.width*ratio), Math.ceil(rect.height*ratio));
        }

        return rect; 
    };

    /**
     * 
     * @param {String} symbolID
     * @param {armyc2.c2sd.renderer.so.Rectangle} bounds
     * @returns {armyc2.c2sd.renderer.so.Point}
     */
    armyc2.c2sd.renderer.utilities.SymbolDimensions.getSymbolCenter = function (symbolID, bounds){
        
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
    
