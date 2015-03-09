var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.xml = armyc2.c2sd.renderer.xml || {};

armyc2.c2sd.renderer.xml.UnitConstantsC = {
  "UNITCONSTANTS": {
    "SYMBOL": [
      {
        "SYMBOLID": "S***------*****",
        "DESCRIPTION": "Warfighting Symbology",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "1.X",
        "ALPHAHIERARCHY": "WAR"
      },
      {
        "SYMBOLID": "S*P*------*****",
        "DESCRIPTION": "Space Track",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.1",
        "ALPHAHIERARCHY": "WAR.SPC",
        "PATH": "Warfighting Symbology"
      },
      {
        "SYMBOLID": "S*P*S-----*****",
        "DESCRIPTION": "Satellite",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.1.1",
        "ALPHAHIERARCHY": "WAR.SPC.SAT",
        "PATH": "Warfighting Symbology/Space Track"
      },
      {
        "SYMBOLID": "S*P*V-----*****",
        "DESCRIPTION": "Crewed Space Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.1.2",
        "ALPHAHIERARCHY": "WAR.SPC.CSV",
        "PATH": "Warfighting Symbology/Space Track"
      },
      {
        "SYMBOLID": "S*P*T-----*****",
        "DESCRIPTION": "Space Station",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.1.3",
        "ALPHAHIERARCHY": "WAR.SPC.SST",
        "PATH": "Warfighting Symbology/Space Track"
      },
      {
        "SYMBOLID": "S*P*L-----*****",
        "DESCRIPTION": "Space Launch Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.1.4",
        "ALPHAHIERARCHY": "WAR.SPC.SLV",
        "PATH": "Warfighting Symbology/Space Track"
      },
      {
        "SYMBOLID": "S*A*------*****",
        "DESCRIPTION": "Air Track",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK",
        "PATH": "Warfighting Symbology"
      },
      {
        "SYMBOLID": "S*A*M-----*****",
        "DESCRIPTION": "Military",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL",
        "PATH": "Warfighting Symbology/Air Track"
      },
      {
        "SYMBOLID": "S*A*MF----*****",
        "DESCRIPTION": "Fixed Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD",
        "PATH": "Warfighting Symbology/Air Track/Military"
      },
      {
        "SYMBOLID": "S*A*MFB---*****",
        "DESCRIPTION": "Fixed Wing Bomber",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.BMB",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFF---*****",
        "DESCRIPTION": "Fixed Wing Fighter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.FTR",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFFI--*****",
        "DESCRIPTION": "Fixed Wing Interceptor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.2.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.FTR.INCR",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Fighter"
      },
      {
        "SYMBOLID": "S*A*MFT---*****",
        "DESCRIPTION": "Fixed Wing Trainer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.TNE",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFA---*****",
        "DESCRIPTION": "Attack/Strike",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.4",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.ATK",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFL---*****",
        "DESCRIPTION": "Fixed Wing V/STOL",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.5",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.VSTOL",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFK---*****",
        "DESCRIPTION": "Fixed Wing Tanker",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.6",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.TNK",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFKB--*****",
        "DESCRIPTION": "Fixed Wing Tanker Boom-Only",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.6.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.TNK.BOOM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Tanker"
      },
      {
        "SYMBOLID": "S*A*MFKD--*****",
        "DESCRIPTION": "Fixed Wing Tanker Drouge-Only",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.6.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.TNK.DROG",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Tanker"
      },
      {
        "SYMBOLID": "S*A*MFC---*****",
        "DESCRIPTION": "Fixed Wing Cargo Airlift (Transport)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.7",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.CGOALT",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFCL--*****",
        "DESCRIPTION": "Fixed Wing Cargo Airlift (Light)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.7.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.CGOALT.LIT",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Cargo Airlift (Transport)"
      },
      {
        "SYMBOLID": "S*A*MFCM--*****",
        "DESCRIPTION": "Fixed Wing Cargo Airlift (Medium)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.7.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.CGOALT.MDM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Cargo Airlift (Transport)"
      },
      {
        "SYMBOLID": "S*A*MFCH--*****",
        "DESCRIPTION": "Fixed Wing Cargo Airlift (Heavy)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.7.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.CGOALT.HVY",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Cargo Airlift (Transport)"
      },
      {
        "SYMBOLID": "S*A*MFJ---*****",
        "DESCRIPTION": "Fixed Wing ECM/Jammer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.8",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.ECM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFO---*****",
        "DESCRIPTION": "Fixed Wing Medical Evacuation MEDEVAC",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.9",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.MEDV",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFR---*****",
        "DESCRIPTION": "Fixed Wing Reconnaissance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.10",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.RECON",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFRW--*****",
        "DESCRIPTION": "Fixed Wing Airborne Early Warning (AEW)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.10.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.RECON.ABNEW",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Reconnaissance"
      },
      {
        "SYMBOLID": "S*A*MFRZ--*****",
        "DESCRIPTION": "Fixed Wing Electronic Surveillance Measures",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.10.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.RECON.ESM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Reconnaissance"
      },
      {
        "SYMBOLID": "S*A*MFRX--*****",
        "DESCRIPTION": "Fixed Wing Photographic",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.10.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.RECON.PHG",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Reconnaissance"
      },
      {
        "SYMBOLID": "S*A*MFP---*****",
        "DESCRIPTION": "Fixed Wing Patrol",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.11",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.PAT",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFPN--*****",
        "DESCRIPTION": "Patrol Antisurface Warfare (ASUW)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.11.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.PAT.ASUW",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Patrol"
      },
      {
        "SYMBOLID": "S*A*MFPM--*****",
        "DESCRIPTION": "Fixed Wing Mine Countermeasures",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.11.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.PAT.MNECM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Patrol"
      },
      {
        "SYMBOLID": "S*A*MFU---*****",
        "DESCRIPTION": "Fixed Wing Utility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.12",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.UTY",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFUL--*****",
        "DESCRIPTION": "Fixed Wing Utility (Light)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.12.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.UTY.LIT",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Utility"
      },
      {
        "SYMBOLID": "S*A*MFUM--*****",
        "DESCRIPTION": "Fixed Wing Utility (Medium)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.12.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.UTY.MDM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Utility"
      },
      {
        "SYMBOLID": "S*A*MFUH--*****",
        "DESCRIPTION": "Fixed Wing Utility (Heavy)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.12.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.UTY.HVY",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Fixed Wing Utility"
      },
      {
        "SYMBOLID": "S*A*MFY---*****",
        "DESCRIPTION": "Fixed Wing Communications",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.13",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.COMM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFH---*****",
        "DESCRIPTION": "Fixed Wing Combat Search and Rescue (CSAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.14",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.CSAR",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFD---*****",
        "DESCRIPTION": "Fixed Wing Airborne Command Post (C2)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.15",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.ABNCP",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQ---*****",
        "DESCRIPTION": "Drone (RPV/UA) Fixed Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQA--*****",
        "DESCRIPTION": "Drone Attack",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.ATK",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQB--*****",
        "DESCRIPTION": "Drone Bomber",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.BMB",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQC--*****",
        "DESCRIPTION": "Drone Cargo",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.CGO",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQD--*****",
        "DESCRIPTION": "Drone (RPV/UA) Airborne Command Post",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.4",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.ABNCP",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQF--*****",
        "DESCRIPTION": "Drone Fighter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.5",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.FTR",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQH--*****",
        "DESCRIPTION": "Search & Rescue (CSAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.6",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.CSAR",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQJ--*****",
        "DESCRIPTION": "Drone Electronic Countermeasures (Jammer)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.7",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.ECM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQK--*****",
        "DESCRIPTION": "Drone Tanker",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.8",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.TNK",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQL--*****",
        "DESCRIPTION": "Drone V/STOL",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.9",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.VSTOL",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQM--*****",
        "DESCRIPTION": "Drone Special Operations Forces (SOF)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.10",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.SOF",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQI--*****",
        "DESCRIPTION": "Drone Mine Countermeasures",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.11",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.MNECM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQN--*****",
        "DESCRIPTION": "Drone Antisurface Warfare (ASUW)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.12",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.ASUW",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQP--*****",
        "DESCRIPTION": "Drone Patrol",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.13",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.PAT",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQR--*****",
        "DESCRIPTION": "Drone Reconnaissance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.14",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.RECON",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQRW-*****",
        "DESCRIPTION": "Drone Airborne Early Warning (AEW)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.14.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.RECON.ABNEW",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing/Drone Reconnaissance"
      },
      {
        "SYMBOLID": "S*A*MFQRZ-*****",
        "DESCRIPTION": "Drone Electronic Surveillance Measures",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.14.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.RECON.ESM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing/Drone Reconnaissance"
      },
      {
        "SYMBOLID": "S*A*MFQRX-*****",
        "DESCRIPTION": "Drone Photographic",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.14.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.RECON.PHG",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing/Drone Reconnaissance"
      },
      {
        "SYMBOLID": "S*A*MFQS--*****",
        "DESCRIPTION": "Drone Antisubmarine Warfare (ASW)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.15",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.ASBW",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQT--*****",
        "DESCRIPTION": "Drone Trainer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.16",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.TNE",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQU--*****",
        "DESCRIPTION": "Drone Utility Fixed Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.17",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.UTY",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQY--*****",
        "DESCRIPTION": "Drone Communications",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.18",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.COMM",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFQO--*****",
        "DESCRIPTION": "Drone Medevac",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.16.19",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.DRN.MEDV",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing/Drone (RPV-UAV) Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFS---*****",
        "DESCRIPTION": "Antisubmarine Warfare (ASW) Carrier Based",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.17",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.ASBWCB",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MFM---*****",
        "DESCRIPTION": "Fixed Wing Special Operations Forces (SOF)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.1.18",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.FIXD.SOF",
        "PATH": "Warfighting Symbology/Air Track/Military/Fixed Wing"
      },
      {
        "SYMBOLID": "S*A*MH----*****",
        "DESCRIPTION": "Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT",
        "PATH": "Warfighting Symbology/Air Track/Military"
      },
      {
        "SYMBOLID": "S*A*MHA---*****",
        "DESCRIPTION": "Rotary Wing Attack",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.ATK",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHS---*****",
        "DESCRIPTION": "Antisubmarine Warfare/MPA ROTARY WING",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.ASBW",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHU---*****",
        "DESCRIPTION": "Rotary Wing Utility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.UTY",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHUL--*****",
        "DESCRIPTION": "Rotary Wing Utility (Light)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.3.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.UTY.LIT",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing/Rotary Wing Utility"
      },
      {
        "SYMBOLID": "S*A*MHUM--*****",
        "DESCRIPTION": "Rotary Wing Utility (Medium)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.3.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.UTY.MDM",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing/Rotary Wing Utility"
      },
      {
        "SYMBOLID": "S*A*MHUH--*****",
        "DESCRIPTION": "Rotary Wing Utility (Heavy)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.3.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.UTY.HVY",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing/Rotary Wing Utility"
      },
      {
        "SYMBOLID": "S*A*MHI---*****",
        "DESCRIPTION": "Rotary Wing Mine Countermeasures",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.4",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.MNECM",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHH---*****",
        "DESCRIPTION": "Rotary Wing Combat Search and Rescue(Military)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.5",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.CSAR",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHR---*****",
        "DESCRIPTION": "Rotary Wing Reconnaissance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.6",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.RECON",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHQ---*****",
        "DESCRIPTION": "Drone (RPV/UAV) Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.7",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.DRN",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHC---*****",
        "DESCRIPTION": "Rotary Wing Cargo AirLift (Transport)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.8",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.CGOALT",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHCL--*****",
        "DESCRIPTION": "Rotary Wing Cargo Airlift (Light)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.8.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.CGOALT.LIT",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing/Rotary Wing Cargo AirLift (Transport)"
      },
      {
        "SYMBOLID": "S*A*MHCM--*****",
        "DESCRIPTION": "Rotary Wing Cargo AirLift (Medium)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.8.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.CGOALT.MDM",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing/Rotary Wing Cargo AirLift (Transport)"
      },
      {
        "SYMBOLID": "S*A*MHCH--*****",
        "DESCRIPTION": "Rotary Wing Cargo Airlift (Heavy)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.8.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.CGOALT.HVY",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing/Rotary Wing Cargo AirLift (Transport)"
      },
      {
        "SYMBOLID": "S*A*MHT---*****",
        "DESCRIPTION": "Rotary Wing Trainer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.9",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.TNE",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHO---*****",
        "DESCRIPTION": "Rotary Wing MEDEVAC",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.10",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.MEDV",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHM---*****",
        "DESCRIPTION": "Rotary Wing Special Operations Forces",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.11",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.SOF",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHD---*****",
        "DESCRIPTION": "Rotary Wing Airborne Command Post",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.12",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.ABNCP",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHK---*****",
        "DESCRIPTION": "Rotary Wing Tanker",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.13",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.TNK",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*MHJ---*****",
        "DESCRIPTION": "Rotary Wing ECM/Jammer(TANKER)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.2.14",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ROT.ECM",
        "PATH": "Warfighting Symbology/Air Track/Military/Rotary Wing"
      },
      {
        "SYMBOLID": "S*A*ML----*****",
        "DESCRIPTION": "Military Aircraft Lighter Than Air",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.LTA",
        "PATH": "Warfighting Symbology/Air Track/Military"
      },
      {
        "SYMBOLID": "S*A*MV----*****",
        "DESCRIPTION": "VIP",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.4",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.VIP",
        "PATH": "Warfighting Symbology/Air Track/Military"
      },
      {
        "SYMBOLID": "S*A*ME----*****",
        "DESCRIPTION": "Escort",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.1.5",
        "ALPHAHIERARCHY": "WAR.AIRTRK.MIL.ESCORT",
        "PATH": "Warfighting Symbology/Air Track/Military"
      },
      {
        "SYMBOLID": "S*A*W-----*****",
        "DESCRIPTION": "Air Track Weapon",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN",
        "PATH": "Warfighting Symbology/Air Track"
      },
      {
        "SYMBOLID": "S*A*WM----*****",
        "DESCRIPTION": "Missile In Flight",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon"
      },
      {
        "SYMBOLID": "S*A*WMS---*****",
        "DESCRIPTION": "Surface Launched Missile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.SLM",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight"
      },
      {
        "SYMBOLID": "S*A*WMSS--*****",
        "DESCRIPTION": "Surface-to-Surface Missile (SSM)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.1.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.SLM.SSM",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight/Surface Launched Missile"
      },
      {
        "SYMBOLID": "S*A*WMSA--*****",
        "DESCRIPTION": "Surface-to-Air Missile (SAM)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.1.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.SLM.SAM",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight/Surface Launched Missile"
      },
      {
        "SYMBOLID": "S*A*WMSU--*****",
        "DESCRIPTION": "Surface-to-Subsurface Missile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.1.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.SLM.SSUM",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight/Surface Launched Missile"
      },
      {
        "SYMBOLID": "S*A*WMSB--*****",
        "DESCRIPTION": "Antiballistic Missile (ABM)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.1.4",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.SLM.ABM",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight/Surface Launched Missile"
      },
      {
        "SYMBOLID": "S*A*WMA---*****",
        "DESCRIPTION": "Air Launched Missile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.ALM",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight"
      },
      {
        "SYMBOLID": "S*A*WMAS--*****",
        "DESCRIPTION": "Air-to-Surface Missile (ASM)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.2.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.ALM.ASM",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight/Air Launched Missile"
      },
      {
        "SYMBOLID": "S*A*WMAA--*****",
        "DESCRIPTION": "Air-to-Air Missile (AAM)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.2.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.ALM.AAM",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight/Air Launched Missile"
      },
      {
        "SYMBOLID": "S*A*WMAP--*****",
        "DESCRIPTION": "Air-to-Space Missile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.2.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.ALM.ASPC",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight/Air Launched Missile"
      },
      {
        "SYMBOLID": "S*A*WMU---*****",
        "DESCRIPTION": "Subsurface-to-Surface Missile (S/SSM)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.SBSM",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight"
      },
      {
        "SYMBOLID": "S*A*WMCM--*****",
        "DESCRIPTION": "Cruise Missile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.4",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.CM",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight"
      },
      {
        "SYMBOLID": "S*A*WMB---*****",
        "DESCRIPTION": "Ballistic Missile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.1.5",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.MSLIF.BLST",
        "PATH": "Warfighting Symbology/Air Track/Air Track Weapon/Missile In Flight"
      },
      {
        "SYMBOLID": "S*A*WD----*****",
        "DESCRIPTION": "Decoy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.DCY",
        "PATH": "Warfighting Symbology/Air Track/Weapon"
      },
      {
        "SYMBOLID": "S*A*WB----*****",
        "DESCRIPTION": "Bomb",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.2.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.WPN.BM",
        "PATH": "Warfighting Symbology/Air Track/Weapon"
      },
      {
        "SYMBOLID": "S*A*C-----*****",
        "DESCRIPTION": "Civil Aircraft",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.CVL",
        "PATH": "Warfighting Symbology/Air Track"
      },
      {
        "SYMBOLID": "S*A*CF----*****",
        "DESCRIPTION": "Civil Fixed Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.3.1",
        "ALPHAHIERARCHY": "WAR.AIRTRK.CVL.FIXD",
        "PATH": "Warfighting Symbology/Air Track/Civil Aircraft"
      },
      {
        "SYMBOLID": "S*A*CH----*****",
        "DESCRIPTION": "Civil Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.3.2",
        "ALPHAHIERARCHY": "WAR.AIRTRK.CVL.ROT",
        "PATH": "Warfighting Symbology/Air Track/Civil Aircraft"
      },
      {
        "SYMBOLID": "S*A*CL----*****",
        "DESCRIPTION": "Civil Aircraft Lighter Than Air",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.2.3.3",
        "ALPHAHIERARCHY": "WAR.AIRTRK.CVL.LTA",
        "PATH": "Warfighting Symbology/Air Track/Civil Aircraft"
      },
      {
        "SYMBOLID": "S*G*------*****",
        "DESCRIPTION": "Ground Track",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK",
        "PATH": "Warfighting Symbology"
      },
      {
        "SYMBOLID": "S*G*U-----*****",
        "DESCRIPTION": "Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT",
        "PATH": "Warfighting Symbology/Ground Track"
      },
      {
        "SYMBOLID": "S*G*UC----*****",
        "DESCRIPTION": "Combat",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT",
        "PATH": "Warfighting Symbology/Ground Track/Unit"
      },
      {
        "SYMBOLID": "S*G*UCD---*****",
        "DESCRIPTION": "Air Defense",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UCDS--*****",
        "DESCRIPTION": "Short Range",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.SHTR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense"
      },
      {
        "SYMBOLID": "S*G*UCDSC-*****",
        "DESCRIPTION": "Chaparral",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.SHTR.CPL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense/Short Range"
      },
      {
        "SYMBOLID": "S*G*UCDSS-*****",
        "DESCRIPTION": "Stinger",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.SHTR.STG",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense/Short Range"
      },
      {
        "SYMBOLID": "S*G*UCDSV-*****",
        "DESCRIPTION": "Vulcan",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.SHTR.VUL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense/Short Range"
      },
      {
        "SYMBOLID": "S*G*UCDM--*****",
        "DESCRIPTION": "Air Defense Missile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.MSL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense"
      },
      {
        "SYMBOLID": "S*G*UCDML-*****",
        "DESCRIPTION": "Air Defense Missile Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.MSL.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense/Air Defense Missile"
      },
      {
        "SYMBOLID": "S*G*UCDMLA*****",
        "DESCRIPTION": "Air Defense Missile Motorized (Avenger)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.2.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.MSL.LIT.MOT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense/Air Defense Missile/Air Defense Missile Light"
      },
      {
        "SYMBOLID": "S*G*UCDMM-*****",
        "DESCRIPTION": "Air Defense Missile Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.MSL.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense/Air Defense Missile"
      },
      {
        "SYMBOLID": "S*G*UCDMH-*****",
        "DESCRIPTION": "Air Defense Missile Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.MSL.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense/Air Defense Missile"
      },
      {
        "SYMBOLID": "S*G*UCDH--*****",
        "DESCRIPTION": "H/MAD",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.2.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.MSL.HMAD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense/Air Defense Missile"
      },
      {
        "SYMBOLID": "S*G*UCDHH-*****",
        "DESCRIPTION": "Hawk",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.2.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.MSL.HMAD.HWK",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense/Air Defense Missile/H and MAD"
      },
      {
        "SYMBOLID": "S*G*UCDHP-*****",
        "DESCRIPTION": "Patriot",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.2.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.MSL.HMAD.PATT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense/Air Defense Missile/H and MAD"
      },
      {
        "SYMBOLID": "S*G*UCDG--*****",
        "DESCRIPTION": "Gun Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.GUNUNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense"
      },
      {
        "SYMBOLID": "S*G*UCDC--*****",
        "DESCRIPTION": "Air Defense Composite",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.CMPS",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense"
      },
      {
        "SYMBOLID": "S*G*UCDT--*****",
        "DESCRIPTION": "Targeting Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.TGTGUT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense"
      },
      {
        "SYMBOLID": "S*G*UCDO--*****",
        "DESCRIPTION": "Theater Missile Defense Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.1.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ADF.TMDU",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Air Defense"
      },
      {
        "SYMBOLID": "S*G*UCA---*****",
        "DESCRIPTION": "Armor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UCAT--*****",
        "DESCRIPTION": "Armor Track",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.TRK",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor"
      },
      {
        "SYMBOLID": "S*G*UCATA-*****",
        "DESCRIPTION": "Armor Track Airborne",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.TRK.ABN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor Track"
      },
      {
        "SYMBOLID": "S*G*UCATW-*****",
        "DESCRIPTION": "Armor Track Amphibious",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.TRK.AMP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor Track"
      },
      {
        "SYMBOLID": "S*G*UCATWR*****",
        "DESCRIPTION": "Armor Track Amphibious Recovery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.TRK.AMP.RCY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor Track/Armor Track Amphibious"
      },
      {
        "SYMBOLID": "S*G*UCATL-*****",
        "DESCRIPTION": "Armor Track, Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.TRK.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor Track"
      },
      {
        "SYMBOLID": "S*G*UCATM-*****",
        "DESCRIPTION": "Armor Track, Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.TRK.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor Track"
      },
      {
        "SYMBOLID": "S*G*UCATH-*****",
        "DESCRIPTION": "Armor Track, Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.1.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.TRK.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor Track"
      },
      {
        "SYMBOLID": "S*G*UCATR-*****",
        "DESCRIPTION": "Armor Track, Recovery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.1.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.TRK.RCY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor Track"
      },
      {
        "SYMBOLID": "S*G*UCAW--*****",
        "DESCRIPTION": "Armor, Wheeled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.WHD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor"
      },
      {
        "SYMBOLID": "S*G*UCAWS-*****",
        "DESCRIPTION": "Armor, Wheeled Air Assault",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.WHD.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor, Wheeled"
      },
      {
        "SYMBOLID": "S*G*UCAWA-*****",
        "DESCRIPTION": "Armor, Wheeled Airborne",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.WHD.ABN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor, Wheeled"
      },
      {
        "SYMBOLID": "S*G*UCAWW-*****",
        "DESCRIPTION": "Armor, Wheeled Amphibious",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.WHD.AMP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor, Wheeled"
      },
      {
        "SYMBOLID": "S*G*UCAWWR*****",
        "DESCRIPTION": "Armor, Wheeled Amphibious Recovery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.2.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.WHD.AMP.RCY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor, Wheeled/Armor, Wheeled Amphibious"
      },
      {
        "SYMBOLID": "S*G*UCAWL-*****",
        "DESCRIPTION": "Armor, Wheeled Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.2.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.WHD.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor, Wheeled"
      },
      {
        "SYMBOLID": "S*G*UCAWM-*****",
        "DESCRIPTION": "Armor, Wheeled Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.2.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.WHD.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor, Wheeled"
      },
      {
        "SYMBOLID": "S*G*UCAWH-*****",
        "DESCRIPTION": "Armor, Wheeled Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.2.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.WHD.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor, Wheeled"
      },
      {
        "SYMBOLID": "S*G*UCAWR-*****",
        "DESCRIPTION": "Armor, Wheeled Recovery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.2.2.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ARM.WHD.RCY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Armor/Armor, Wheeled"
      },
      {
        "SYMBOLID": "S*G*UCAA--*****",
        "DESCRIPTION": "Anti Armor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UCAAD-*****",
        "DESCRIPTION": "Anti Armor Dismounted",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.DMD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor"
      },
      {
        "SYMBOLID": "S*G*UCAAL-*****",
        "DESCRIPTION": "Anti Armor Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor"
      },
      {
        "SYMBOLID": "S*G*UCAAM-*****",
        "DESCRIPTION": "Anti Armor Airborne",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.ABN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor"
      },
      {
        "SYMBOLID": "S*G*UCAAS-*****",
        "DESCRIPTION": "Anti Armor Air Assault",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor"
      },
      {
        "SYMBOLID": "S*G*UCAAU-*****",
        "DESCRIPTION": "Anti Armor Mountain",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.MNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor"
      },
      {
        "SYMBOLID": "S*G*UCAAC-*****",
        "DESCRIPTION": "Anti Armor Arctic",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.ARC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor"
      },
      {
        "SYMBOLID": "S*G*UCAAA-*****",
        "DESCRIPTION": "Anti Armor Armored",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.ARMD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor"
      },
      {
        "SYMBOLID": "S*G*UCAAAT*****",
        "DESCRIPTION": "Anti Armor Armored Tracked",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.7.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.ARMD.TKD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor/Anti Armor Armored"
      },
      {
        "SYMBOLID": "S*G*UCAAAW*****",
        "DESCRIPTION": "Anti Armor Armored Wheeled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.7.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.ARMD.WHD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor/Anti Armor Armored"
      },
      {
        "SYMBOLID": "S*G*UCAAAS*****",
        "DESCRIPTION": "Anti Armor Armored Air Assault",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.7.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.ARMD.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor/Anti Armor Armored"
      },
      {
        "SYMBOLID": "S*G*UCAAO-*****",
        "DESCRIPTION": "Anti Armor Motorized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.MOT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor"
      },
      {
        "SYMBOLID": "S*G*UCAAOS*****",
        "DESCRIPTION": "Anti Armor Motorized Air Assault",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.3.8.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AARM.MOT.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Anti Armor/Anti Armor Motorized"
      },
      {
        "SYMBOLID": "S*G*UCV---*****",
        "DESCRIPTION": "Aviation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UCVF--*****",
        "DESCRIPTION": "Aviation Fixed Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.FIXD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation"
      },
      {
        "SYMBOLID": "S*G*UCVFU-*****",
        "DESCRIPTION": "Utility Fixed Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.FIXD.UTY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Fixed Wing"
      },
      {
        "SYMBOLID": "S*G*UCVFA-*****",
        "DESCRIPTION": "Fixed Wing Attack",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.FIXD.ATK",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Fixed Wing"
      },
      {
        "SYMBOLID": "S*G*UCVFR-*****",
        "DESCRIPTION": "Recon Fixed Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.FIXD.RECON",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Fixed Wing"
      },
      {
        "SYMBOLID": "S*G*UCVR--*****",
        "DESCRIPTION": "Aviation Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation"
      },
      {
        "SYMBOLID": "S*G*UCVRA-*****",
        "DESCRIPTION": "Attack Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT.ATK",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Aviation Rotary Wing"
      },
      {
        "SYMBOLID": "S*G*UCVRS-*****",
        "DESCRIPTION": "Scout Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT.SCUT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Aviation Rotary Wing"
      },
      {
        "SYMBOLID": "S*G*UCVRW-*****",
        "DESCRIPTION": "Antisubmarine Warfare Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT.ASBW",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Aviation Rotary Wing"
      },
      {
        "SYMBOLID": "S*G*UCVRU-*****",
        "DESCRIPTION": "Utility Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT.UTY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Aviation Rotary Wing"
      },
      {
        "SYMBOLID": "S*G*UCVRUL*****",
        "DESCRIPTION": "Light Utility Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT.UTY.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Aviation Rotary Wing/Utility Rotary Wing"
      },
      {
        "SYMBOLID": "S*G*UCVRUM*****",
        "DESCRIPTION": "Medium Utility Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT.UTY.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Aviation Rotary Wing/Utility Rotary Wing"
      },
      {
        "SYMBOLID": "S*G*UCVRUH*****",
        "DESCRIPTION": "Heavy Utility Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2.4.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT.UTY.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Aviation Rotary Wing/Utility Rotary Wing"
      },
      {
        "SYMBOLID": "S*G*UCVRUC*****",
        "DESCRIPTION": "C2 Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT.C2",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Aviation Rotary Wing"
      },
      {
        "SYMBOLID": "S*G*UCVRUE*****",
        "DESCRIPTION": "Medevac Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT.MEDV",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Aviation Rotary Wing"
      },
      {
        "SYMBOLID": "S*G*UCVRM-*****",
        "DESCRIPTION": "Mine Countermeasure Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.2.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.ROT.MNECM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Aviation Rotary Wing"
      },
      {
        "SYMBOLID": "S*G*UCVS--*****",
        "DESCRIPTION": "Search and Rescue",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.SAR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation"
      },
      {
        "SYMBOLID": "S*G*UCVC--*****",
        "DESCRIPTION": "Aviation Composite",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.CMPS",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation"
      },
      {
        "SYMBOLID": "S*G*UCVV--*****",
        "DESCRIPTION": "Vertical and/or Short Takeoff and Landing Aircraft (V/STOL)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.VSTOL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation"
      },
      {
        "SYMBOLID": "S*G*UCVU--*****",
        "DESCRIPTION": "Unmanned Aerial",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.UAV",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation"
      },
      {
        "SYMBOLID": "S*G*UCVUF-*****",
        "DESCRIPTION": "Unmanned Aerial Fixed Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.UAV.FIXD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Unmanned Aerial Vehicle"
      },
      {
        "SYMBOLID": "S*G*UCVUR-*****",
        "DESCRIPTION": "Unmanned Aerial Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.4.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.AVN.UAV.ROT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Aviation/Unmanned Aerial Vehicle"
      },
      {
        "SYMBOLID": "S*G*UCI---*****",
        "DESCRIPTION": "Infantry",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.INF",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UCIL--*****",
        "DESCRIPTION": "Infantry Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.INF.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Infantry"
      },
      {
        "SYMBOLID": "S*G*UCIM--*****",
        "DESCRIPTION": "Infantry Motorized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.INF.MOT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Infantry"
      },
      {
        "SYMBOLID": "S*G*UCIO--*****",
        "DESCRIPTION": "Infantry Mountain",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.5.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.INF.MNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Infantry"
      },
      {
        "SYMBOLID": "S*G*UCIA--*****",
        "DESCRIPTION": "Infantry Airborne",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.5.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.INF.ABN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Infantry"
      },
      {
        "SYMBOLID": "S*G*UCIS--*****",
        "DESCRIPTION": "Infantry Air Assault",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.5.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.INF.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Infantry"
      },
      {
        "SYMBOLID": "S*G*UCIZ--*****",
        "DESCRIPTION": "Infantry Mechanized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.5.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.INF.MECH",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Infantry"
      },
      {
        "SYMBOLID": "S*G*UCIN--*****",
        "DESCRIPTION": "Infantry Naval",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.5.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.INF.NAV",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Infantry"
      },
      {
        "SYMBOLID": "S*G*UCII--*****",
        "DESCRIPTION": "Infantry Fighting Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.5.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.INF.INFFV",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Infantry"
      },
      {
        "SYMBOLID": "S*G*UCIC--*****",
        "DESCRIPTION": "Infantry Arctic",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.5.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.INF.ARC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Infantry"
      },
      {
        "SYMBOLID": "S*G*UCE---*****",
        "DESCRIPTION": "Engineer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UCEC--*****",
        "DESCRIPTION": "Engineer Combat",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer"
      },
      {
        "SYMBOLID": "S*G*UCECS-*****",
        "DESCRIPTION": "Engineer Combat Air Assault",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Combat"
      },
      {
        "SYMBOLID": "S*G*UCECA-*****",
        "DESCRIPTION": "Engineer Combat Airborne",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT.ABN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Combat"
      },
      {
        "SYMBOLID": "S*G*UCECC-*****",
        "DESCRIPTION": "Engineer Combat Arctic",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT.ARC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Combat"
      },
      {
        "SYMBOLID": "S*G*UCECL-*****",
        "DESCRIPTION": "Engineer Combat Light (Sapper)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Combat"
      },
      {
        "SYMBOLID": "S*G*UCECM-*****",
        "DESCRIPTION": "Engineer Combat Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Combat"
      },
      {
        "SYMBOLID": "S*G*UCECH-*****",
        "DESCRIPTION": "Engineer Combat Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Combat"
      },
      {
        "SYMBOLID": "S*G*UCECT-*****",
        "DESCRIPTION": "Engineer Combat Mechanized (Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT.MECH",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Combat"
      },
      {
        "SYMBOLID": "S*G*UCECW-*****",
        "DESCRIPTION": "Engineer Combat Motorized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT.MOT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Combat"
      },
      {
        "SYMBOLID": "S*G*UCECO-*****",
        "DESCRIPTION": "Engineer Combat Mountain",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT.MNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Combat"
      },
      {
        "SYMBOLID": "S*G*UCECR-*****",
        "DESCRIPTION": "Engineer Combat Recon",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.1.10",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CBT.RECON",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Combat"
      },
      {
        "SYMBOLID": "S*G*UCEN--*****",
        "DESCRIPTION": "Engineer Construction",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CSN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer"
      },
      {
        "SYMBOLID": "S*G*UCENN-*****",
        "DESCRIPTION": "Engineer Naval Construction",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.6.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ENG.CSN.NAV",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Engineer/Engineer Construction"
      },
      {
        "SYMBOLID": "S*G*UCF---*****",
        "DESCRIPTION": "Field Artillery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UCFH--*****",
        "DESCRIPTION": "Howitzer/Gun",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.HOW",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery"
      },
      {
        "SYMBOLID": "S*G*UCFHE-*****",
        "DESCRIPTION": "Self-Propelled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.HOW.SPD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Howitzer and Gun"
      },
      {
        "SYMBOLID": "S*G*UCFHS-*****",
        "DESCRIPTION": "Howitzer/Gun Air Assault",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.HOW.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Howitzer and Gun"
      },
      {
        "SYMBOLID": "S*G*UCFHA-*****",
        "DESCRIPTION": "Howitzer/Gun Airborne",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.HOW.ABN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Howitzer and Gun"
      },
      {
        "SYMBOLID": "S*G*UCFHC-*****",
        "DESCRIPTION": "Arctic",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.HOW.ARC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Howitzer and Gun"
      },
      {
        "SYMBOLID": "S*G*UCFHO-*****",
        "DESCRIPTION": "Howitzer/Gun Mountain",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.1.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.HOW.MNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Howitzer and Gun"
      },
      {
        "SYMBOLID": "S*G*UCFHL-*****",
        "DESCRIPTION": "Howitzer/Gun Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.1.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.HOW.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Howitzer and Gun"
      },
      {
        "SYMBOLID": "S*G*UCFHM-*****",
        "DESCRIPTION": "Howitzer/Gun Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.1.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.HOW.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Howitzer and Gun"
      },
      {
        "SYMBOLID": "S*G*UCFHH-*****",
        "DESCRIPTION": "Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.1.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.HOW.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Howitzer and Gun"
      },
      {
        "SYMBOLID": "S*G*UCFHX-*****",
        "DESCRIPTION": "Amphibious",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.1.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.HOW.AMP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Howitzer and Gun"
      },
      {
        "SYMBOLID": "S*G*UCFR--*****",
        "DESCRIPTION": "Rocket",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ROC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery"
      },
      {
        "SYMBOLID": "S*G*UCFRS-*****",
        "DESCRIPTION": "Rocket Single Rocket Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ROC.SRL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Rocket"
      },
      {
        "SYMBOLID": "S*G*UCFRSS*****",
        "DESCRIPTION": "Single Rocket Self-Propelled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.2.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ROC.SRL.SRSPD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Rocket/Rocket Single Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*UCFRSR*****",
        "DESCRIPTION": "Single Rocket Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.2.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ROC.SRL.SRTRK",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Rocket/Rocket Single Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*UCFRST*****",
        "DESCRIPTION": "Single Rocket Towed",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.2.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ROC.SRL.SRTOW",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Rocket/Rocket Single Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*UCFRM-*****",
        "DESCRIPTION": "Multiple Rocket Launcher (Field Artillary)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ROC.MRL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Rocket"
      },
      {
        "SYMBOLID": "S*G*UCFRMS*****",
        "DESCRIPTION": "Multiple Rocket Self-Propelled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.2.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ROC.MRL.MRSPD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Rocket/Multi Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*UCFRMR*****",
        "DESCRIPTION": "Multiple Rocket Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.2.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ROC.MRL.MRTRK",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Rocket/Multi Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*UCFRMT*****",
        "DESCRIPTION": "Multiple Rocket Towed",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.2.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ROC.MRL.MRTOW",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Rocket/Multi Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*UCFT--*****",
        "DESCRIPTION": "Target Acquisition",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.TGTAQ",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery"
      },
      {
        "SYMBOLID": "S*G*UCFTR-*****",
        "DESCRIPTION": "Target Acquisition Radar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.TGTAQ.RAD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Target Acquisition"
      },
      {
        "SYMBOLID": "S*G*UCFTS-*****",
        "DESCRIPTION": "Sound",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.TGTAQ.SND",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Target Acquisition"
      },
      {
        "SYMBOLID": "S*G*UCFTF-*****",
        "DESCRIPTION": "Flash (Optical)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.TGTAQ.FLH",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Target Acquisition"
      },
      {
        "SYMBOLID": "S*G*UCFTC-*****",
        "DESCRIPTION": "Colt/Fist",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.3.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.TGTAQ.CLT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Target Acquisition"
      },
      {
        "SYMBOLID": "S*G*UCFTCD*****",
        "DESCRIPTION": "Dismounted Colt/Fist",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.3.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.TGTAQ.CLT.DMD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Target Acquisition/Colt and Fist"
      },
      {
        "SYMBOLID": "S*G*UCFTCM*****",
        "DESCRIPTION": "Tracked Colt/Fist",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.3.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.TGTAQ.CLT.TKD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Target Acquisition/Colt and Fist"
      },
      {
        "SYMBOLID": "S*G*UCFTA-*****",
        "DESCRIPTION": "Anglico",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.3.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.TGTAQ.ANG",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Target Acquisition"
      },
      {
        "SYMBOLID": "S*G*UCFM--*****",
        "DESCRIPTION": "Field Artillery Mortar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.MORT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery"
      },
      {
        "SYMBOLID": "S*G*UCFMS-*****",
        "DESCRIPTION": "Self-Propelled (SP) Tracked Mortar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.MORT.SPDTRK",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Mortar"
      },
      {
        "SYMBOLID": "S*G*UCFMW-*****",
        "DESCRIPTION": "SP Wheeled Mortar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.MORT.SPDWHD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Mortar"
      },
      {
        "SYMBOLID": "S*G*UCFMT-*****",
        "DESCRIPTION": "Towed Mortar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.4.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.MORT.TOW",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Mortar"
      },
      {
        "SYMBOLID": "S*G*UCFMTA*****",
        "DESCRIPTION": "Towed Airborne Mortar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.4.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.MORT.TOW.ABN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Mortar/Towed Mortar"
      },
      {
        "SYMBOLID": "S*G*UCFMTS*****",
        "DESCRIPTION": "Towed Air Assault Mortar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.4.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.MORT.TOW.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Mortar/Towed Mortar"
      },
      {
        "SYMBOLID": "S*G*UCFMTC*****",
        "DESCRIPTION": "Towed Arctic Mortar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.4.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.MORT.TOW.ARC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Mortar/Towed Mortar"
      },
      {
        "SYMBOLID": "S*G*UCFMTO*****",
        "DESCRIPTION": "Towed Mountain Mortar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.4.3.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.MORT.TOW.MNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Mortar/Towed Mortar"
      },
      {
        "SYMBOLID": "S*G*UCFML-*****",
        "DESCRIPTION": "Amphibious Mortar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.4.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.MORT.AMP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Mortar"
      },
      {
        "SYMBOLID": "S*G*UCFS--*****",
        "DESCRIPTION": "Artillery Survey",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ARTSVY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery"
      },
      {
        "SYMBOLID": "S*G*UCFSS-*****",
        "DESCRIPTION": "Artillery Survey Air Assault",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ARTSVY.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Artillery Survey"
      },
      {
        "SYMBOLID": "S*G*UCFSA-*****",
        "DESCRIPTION": "Artillery Survey Airborne",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ARTSVY.ABN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Artillery Survey"
      },
      {
        "SYMBOLID": "S*G*UCFSL-*****",
        "DESCRIPTION": "Artillery Survey Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.5.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ARTSVY.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Artillery Survey"
      },
      {
        "SYMBOLID": "S*G*UCFSO-*****",
        "DESCRIPTION": "Artillery Survey Mountain",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.5.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.ARTSVY.MNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Artillery Survey"
      },
      {
        "SYMBOLID": "S*G*UCFO--*****",
        "DESCRIPTION": "Field Artillery Meteorological",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.METO",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery"
      },
      {
        "SYMBOLID": "S*G*UCFOS-*****",
        "DESCRIPTION": "Air Assault Meteorological",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.METO.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Meteorologicall"
      },
      {
        "SYMBOLID": "S*G*UCFOA-*****",
        "DESCRIPTION": "Airborne Meteorological",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.METO.ABN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Meteorological"
      },
      {
        "SYMBOLID": "S*G*UCFOL-*****",
        "DESCRIPTION": "Light Meteorological",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.6.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.METO.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Meteorological"
      },
      {
        "SYMBOLID": "S*G*UCFOO-*****",
        "DESCRIPTION": "Mountain Meteorological",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.7.6.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.FLDART.METO.MNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Field Artillery/Field Artillery Meteorological"
      },
      {
        "SYMBOLID": "S*G*UCR---*****",
        "DESCRIPTION": "Combat Reconnaissance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UCRH--*****",
        "DESCRIPTION": "Reconnaissance Horse",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.HRE",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance"
      },
      {
        "SYMBOLID": "S*G*UCRV--*****",
        "DESCRIPTION": "Reconnaissance Cavalry",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.CVY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance"
      },
      {
        "SYMBOLID": "S*G*UCRVA-*****",
        "DESCRIPTION": "Reconnaissance Cavalry Armored",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.CVY.ARMD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance/Reconnaissance Cavalry"
      },
      {
        "SYMBOLID": "S*G*UCRVM-*****",
        "DESCRIPTION": "Reconnaissance Cavalry Motorized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.CVY.MOT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance/Reconnaissance Cavalry"
      },
      {
        "SYMBOLID": "S*G*UCRVG-*****",
        "DESCRIPTION": "Reconnaissance Cavalry Ground",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.CVY.GRD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance/Reconnaissance Cavalry"
      },
      {
        "SYMBOLID": "S*G*UCRVO-*****",
        "DESCRIPTION": "Reconnaissance Cavalry Air",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.2.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.CVY.AIR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance/Reconnaissance Cavalry"
      },
      {
        "SYMBOLID": "S*G*UCRC--*****",
        "DESCRIPTION": "Reconnaissance Arctic",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.ARC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance"
      },
      {
        "SYMBOLID": "S*G*UCRS--*****",
        "DESCRIPTION": "Reconnaissance Air Assault",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.AAST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance"
      },
      {
        "SYMBOLID": "S*G*UCRA--*****",
        "DESCRIPTION": "Reconnaissance Airborne",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.ABN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance"
      },
      {
        "SYMBOLID": "S*G*UCRO--*****",
        "DESCRIPTION": "Reconnaissance Mountain",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.MNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance"
      },
      {
        "SYMBOLID": "S*G*UCRL--*****",
        "DESCRIPTION": "Reconnaissance Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance"
      },
      {
        "SYMBOLID": "S*G*UCRR--*****",
        "DESCRIPTION": "Reconnaissance Marine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.MAR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance"
      },
      {
        "SYMBOLID": "S*G*UCRRD-*****",
        "DESCRIPTION": "Reconnaissance Marine Division",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.8.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.MAR.DIV",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance/Reconnaissance Marine"
      },
      {
        "SYMBOLID": "S*G*UCRRF-*****",
        "DESCRIPTION": "Reconnaissance Marine Force",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.8.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.MAR.FOR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance/Reconnaissance Marine"
      },
      {
        "SYMBOLID": "S*G*UCRRL-*****",
        "DESCRIPTION": "Reconnaissance Marine Light Armored (LAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.8.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.MAR.LAR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance/Reconnaissance Marine"
      },
      {
        "SYMBOLID": "S*G*UCRX--*****",
        "DESCRIPTION": "Reconnaissance Long Range Surveillance (LRS)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.8.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.RECON.LRS",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Combat Reconnaissance"
      },
      {
        "SYMBOLID": "S*G*UCM---*****",
        "DESCRIPTION": "Missile (Surf-Surf)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.MSL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UCMT--*****",
        "DESCRIPTION": "Missile (Surf-Surf) Tactical",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.9.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.MSL.TAC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Missile (Surf-Surf)"
      },
      {
        "SYMBOLID": "S*G*UCMS--*****",
        "DESCRIPTION": "Missile (Surf-Surf) Strategic",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.9.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.MSL.STGC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Missile (Surf-Surf)"
      },
      {
        "SYMBOLID": "S*G*UCS---*****",
        "DESCRIPTION": "Internal Security Forces",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.10",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ISF",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UCSW--*****",
        "DESCRIPTION": "Internal Security Forces Riverine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.10.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ISF.RIV",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Internal Security Forces"
      },
      {
        "SYMBOLID": "S*G*UCSG--*****",
        "DESCRIPTION": "Internal Security Forces Ground",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.10.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ISF.GRD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Internal Security Forces"
      },
      {
        "SYMBOLID": "S*G*UCSGD-*****",
        "DESCRIPTION": "Internal Security Forces Dismounted",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.10.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ISF.GRD.DMD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Internal Security Forces/Internal Security Forces Ground"
      },
      {
        "SYMBOLID": "S*G*UCSGM-*****",
        "DESCRIPTION": "Internal Security Forces Motorized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.10.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ISF.GRD.MOT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Internal Security Forces/Internal Security Forces Ground"
      },
      {
        "SYMBOLID": "S*G*UCSGA-*****",
        "DESCRIPTION": "Internal Security Forces Mechanized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.10.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ISF.GRD.MECH",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Internal Security Forces/Internal Security Forces Ground"
      },
      {
        "SYMBOLID": "S*G*UCSM--*****",
        "DESCRIPTION": "Internal Security Forces Wheeled Mechanized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.10.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ISF.WHMECH",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Internal Security Forces"
      },
      {
        "SYMBOLID": "S*G*UCSR--*****",
        "DESCRIPTION": "Internal Security Forces Railroad",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.10.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ISF.RALRD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Internal Security Forces"
      },
      {
        "SYMBOLID": "S*G*UCSA--*****",
        "DESCRIPTION": "Internal Security Forces Aviation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.10.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.ISF.AVN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat/Internal Security Forces"
      },
      {
        "SYMBOLID": "S*G*UCL---*****",
        "DESCRIPTION": "Surveillance Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.1.11",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CBT.SVL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat"
      },
      {
        "SYMBOLID": "S*G*UU----*****",
        "DESCRIPTION": "Combat Support",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS",
        "PATH": "Warfighting Symbology/Ground Track/Unit"
      },
      {
        "SYMBOLID": "S*G*UUA---*****",
        "DESCRIPTION": "Combat Support CBRN",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support"
      },
      {
        "SYMBOLID": "S*G*UUAC--*****",
        "DESCRIPTION": "Combat Support Chemical",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.CML",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN"
      },
      {
        "SYMBOLID": "S*G*UUACC-*****",
        "DESCRIPTION": "Smoke/Decon",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.CML.SMKDEC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN/Combat Support Chemical"
      },
      {
        "SYMBOLID": "S*G*UUACCK*****",
        "DESCRIPTION": "Mechanized Smoke/Decon",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.1.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.CML.SMKDEC.MECH",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN/Combat Support Chemical/Smoke and Decon"
      },
      {
        "SYMBOLID": "S*G*UUACCM*****",
        "DESCRIPTION": "Motorized Smoke/Decon",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.1.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.CML.SMKDEC.MOT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN/Combat Support Chemical/Smoke and Decon"
      },
      {
        "SYMBOLID": "S*G*UUACS-*****",
        "DESCRIPTION": "Smoke",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.CML.SMK",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN/Combat Support Chemical"
      },
      {
        "SYMBOLID": "S*G*UUACSM*****",
        "DESCRIPTION": "Motorized Smoke",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.CML.SMK.MOT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN/Combat Support Chemical/Smoke"
      },
      {
        "SYMBOLID": "S*G*UUACSA*****",
        "DESCRIPTION": "Armor Smoke",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.1.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.CML.SMK.ARM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN/Combat Support Chemical/Smoke"
      },
      {
        "SYMBOLID": "S*G*UUACR-*****",
        "DESCRIPTION": "Chemical Recon",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.CML.RECON",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN/Combat Support Chemical"
      },
      {
        "SYMBOLID": "S*G*UUACRW*****",
        "DESCRIPTION": "Chemical Wheeled Armored Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.1.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.CML.RECON.WARMVH",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN/Combat Support Chemical/Chemical Recon"
      },
      {
        "SYMBOLID": "S*G*UUACRS*****",
        "DESCRIPTION": "Chemical Wheeled Armored Vehicle Reconnaissance Surveillance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.1.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.CML.RECON.WAVS",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN/Combat Support Chemical/Chemical Recon"
      },
      {
        "SYMBOLID": "S*G*UUAN--*****",
        "DESCRIPTION": "Combat Support CBRN Nuclear",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.NUC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN"
      },
      {
        "SYMBOLID": "S*G*UUAB--*****",
        "DESCRIPTION": "Combat Support CBRN Biological",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.BIO",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN"
      },
      {
        "SYMBOLID": "S*G*UUABR-*****",
        "DESCRIPTION": "Recon Equipped",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.BIO.RECEQP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN/Combat Support NBC Biological"
      },
      {
        "SYMBOLID": "S*G*UUAD--*****",
        "DESCRIPTION": "CBRN Decontamination",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.CBRN.DECON",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Combat Support CBRN"
      },
      {
        "SYMBOLID": "S*G*UUM---*****",
        "DESCRIPTION": "Military Intelligence",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support"
      },
      {
        "SYMBOLID": "S*G*UUMA--*****",
        "DESCRIPTION": "Aerial Exploitation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.AEREXP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence"
      },
      {
        "SYMBOLID": "S*G*UUMS--*****",
        "DESCRIPTION": "Signal Intelligence (SIGINT)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SIGINT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence"
      },
      {
        "SYMBOLID": "S*G*UUMSE-*****",
        "DESCRIPTION": "Electronic Warfare",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SIGINT.ECW",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Signal Intelligence (SIGINT)"
      },
      {
        "SYMBOLID": "S*G*UUMSEA*****",
        "DESCRIPTION": "Armored Wheeled Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.2.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SIGINT.ECW.ARMWVH",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Signal Intelligence (SIGINT)/Electronic Warfare"
      },
      {
        "SYMBOLID": "S*G*UUMSED*****",
        "DESCRIPTION": "Direction Finding",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.2.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SIGINT.ECW.DFN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Signal Intelligence (SIGINT)/Electronic Warfare"
      },
      {
        "SYMBOLID": "S*G*UUMSEI*****",
        "DESCRIPTION": "Intercept",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.2.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SIGINT.ECW.INC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Signal Intelligence (SIGINT)/Electronic Warfare"
      },
      {
        "SYMBOLID": "S*G*UUMSEJ*****",
        "DESCRIPTION": "Jamming",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.2.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SIGINT.ECW.JMG",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Signal Intelligence (SIGINT)/Electronic Warfare"
      },
      {
        "SYMBOLID": "S*G*UUMSET*****",
        "DESCRIPTION": "Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.2.1.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SIGINT.ECW.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Signal Intelligence (SIGINT)/Electronic Warfare"
      },
      {
        "SYMBOLID": "S*G*UUMSEC*****",
        "DESCRIPTION": "Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.2.1.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SIGINT.ECW.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Signal Intelligence (SIGINT)/Electronic Warfare"
      },
      {
        "SYMBOLID": "S*G*UUMC--*****",
        "DESCRIPTION": "Counter Intelligence",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.CINT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence"
      },
      {
        "SYMBOLID": "S*G*UUMR--*****",
        "DESCRIPTION": "Counter Intelligence Surveillance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SVL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence"
      },
      {
        "SYMBOLID": "S*G*UUMRG-*****",
        "DESCRIPTION": "Ground Surveillance Radar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SVL.GRDSR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Counter Intelligence Surveillance"
      },
      {
        "SYMBOLID": "S*G*UUMRS-*****",
        "DESCRIPTION": "Surveillance Sensor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SVL.SNS",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Counter Intelligence Surveillance"
      },
      {
        "SYMBOLID": "S*G*UUMRSS*****",
        "DESCRIPTION": "Sensor SCM",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.4.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SVL.SNS.SCM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Counter Intelligence Surveillance/Surveillance Sensor"
      },
      {
        "SYMBOLID": "S*G*UUMRX-*****",
        "DESCRIPTION": "Ground Station Module",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.4.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SVL.GRDSM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Counter Intelligence Surveillance"
      },
      {
        "SYMBOLID": "S*G*UUMMO-*****",
        "DESCRIPTION": "Surveillance Meteorological",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.4.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.SVL.METO",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence/Counter Intelligence Surveillance"
      },
      {
        "SYMBOLID": "S*G*UUMO--*****",
        "DESCRIPTION": "Military Intelligence Operations",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.OPN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence"
      },
      {
        "SYMBOLID": "S*G*UUMT--*****",
        "DESCRIPTION": "Tactical Exploit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.TACEXP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence"
      },
      {
        "SYMBOLID": "S*G*UUMQ--*****",
        "DESCRIPTION": "Interrogation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.INTGN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence"
      },
      {
        "SYMBOLID": "S*G*UUMJ--*****",
        "DESCRIPTION": "Joint Intelligence Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.2.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.MILINT.JINTCT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Military Intelligence"
      },
      {
        "SYMBOLID": "S*G*UUL---*****",
        "DESCRIPTION": "Law Enforcement Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.LAWENU",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support"
      },
      {
        "SYMBOLID": "S*G*UULS--*****",
        "DESCRIPTION": "Shore Patrol",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.LAWENU.SHRPAT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Law Enforcement Unit"
      },
      {
        "SYMBOLID": "S*G*UULM--*****",
        "DESCRIPTION": "Military Police",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.LAWENU.MILP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Law Enforcement Unit"
      },
      {
        "SYMBOLID": "S*G*UULC--*****",
        "DESCRIPTION": "Civilian Law Enforcement",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.LAWENU.CLE",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Law Enforcement Unit"
      },
      {
        "SYMBOLID": "S*G*UULF--*****",
        "DESCRIPTION": "Security Police (Air)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.3.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.LAWENU.SECPOL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Law Enforcement Unit"
      },
      {
        "SYMBOLID": "S*G*UULD--*****",
        "DESCRIPTION": "Central Intelligence Division (CID)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.3.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.LAWENU.CID",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Law Enforcement Unit"
      },
      {
        "SYMBOLID": "S*G*UUS---*****",
        "DESCRIPTION": "Signal Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support"
      },
      {
        "SYMBOLID": "S*G*UUSA--*****",
        "DESCRIPTION": "Area",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.ARA",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit"
      },
      {
        "SYMBOLID": "S*G*UUSC--*****",
        "DESCRIPTION": "Communication Configured Package",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.COMCP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit"
      },
      {
        "SYMBOLID": "S*G*UUSCL-*****",
        "DESCRIPTION": "Large Communication Configured Package (LCCP)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.COMCP.LCCP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit/Communication Configured Package"
      },
      {
        "SYMBOLID": "S*G*UUSO--*****",
        "DESCRIPTION": "Command Operations",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.CMDOPN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit"
      },
      {
        "SYMBOLID": "S*G*UUSF--*****",
        "DESCRIPTION": "Forward Communications",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.FWDCOM",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit"
      },
      {
        "SYMBOLID": "S*G*UUSM--*****",
        "DESCRIPTION": "Multiple Subscriber Element",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.MSE",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit"
      },
      {
        "SYMBOLID": "S*G*UUSMS-*****",
        "DESCRIPTION": "Small Extension Node",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.MSE.SEN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit/Multiple Subscriber Element"
      },
      {
        "SYMBOLID": "S*G*UUSML-*****",
        "DESCRIPTION": "Large Extension Node",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.MSE.LEN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit/Multiple Subscriber Element"
      },
      {
        "SYMBOLID": "S*G*UUSMN-*****",
        "DESCRIPTION": "Node Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.5.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.MSE.NODCTR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit/Multiple Subscriber Element"
      },
      {
        "SYMBOLID": "S*G*UUSR--*****",
        "DESCRIPTION": "Radio Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.RDOUNT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit"
      },
      {
        "SYMBOLID": "S*G*UUSRS-*****",
        "DESCRIPTION": "Tactical Satellite",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.RDOUNT.TACSAT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit/Radio Unit"
      },
      {
        "SYMBOLID": "S*G*UUSRT-*****",
        "DESCRIPTION": "Teletype Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.RDOUNT.TTYCTR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit/Radio Unit"
      },
      {
        "SYMBOLID": "S*G*UUSRW-*****",
        "DESCRIPTION": "Relay",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.6.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.RDOUNT.RLY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit/Radio Unit"
      },
      {
        "SYMBOLID": "S*G*UUSS--*****",
        "DESCRIPTION": "Signal Support",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.SIGSUP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit"
      },
      {
        "SYMBOLID": "S*G*UUSW--*****",
        "DESCRIPTION": "Telephone Switch",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.PHOSWT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit"
      },
      {
        "SYMBOLID": "S*G*UUSX--*****",
        "DESCRIPTION": "Electronic Ranging",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.4.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.SIGUNT.ECRG",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support/Signal Unit"
      },
      {
        "SYMBOLID": "S*G*UUI---*****",
        "DESCRIPTION": "Information Warfare Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.IWU",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support"
      },
      {
        "SYMBOLID": "S*G*UUP---*****",
        "DESCRIPTION": "Landing Support",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.LNDSUP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support"
      },
      {
        "SYMBOLID": "S*G*UUE---*****",
        "DESCRIPTION": "Explosive Ordnance Disposal",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.2.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CS.EOD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Support"
      },
      {
        "SYMBOLID": "S*G*US----*****",
        "DESCRIPTION": "Combat Service Support",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS",
        "PATH": "Warfighting Symbology/Ground Track/Unit"
      },
      {
        "SYMBOLID": "S*G*USA---*****",
        "DESCRIPTION": "Administrative (ADMIN)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support"
      },
      {
        "SYMBOLID": "S*G*USAT--*****",
        "DESCRIPTION": "Admin Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAC--*****",
        "DESCRIPTION": "Admin Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAJ--*****",
        "DESCRIPTION": "Judge Advocate General (JAG)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.JAG",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAJT-*****",
        "DESCRIPTION": "JAG Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.JAG.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Judge Advocate General (JAG)"
      },
      {
        "SYMBOLID": "S*G*USAJC-*****",
        "DESCRIPTION": "JAG Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.JAG.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Judge Advocate General (JAG)"
      },
      {
        "SYMBOLID": "S*G*USAO--*****",
        "DESCRIPTION": "Postal",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PST",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAOT-*****",
        "DESCRIPTION": "Postal Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PST.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Postal"
      },
      {
        "SYMBOLID": "S*G*USAOC-*****",
        "DESCRIPTION": "Postal Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PST.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Postal"
      },
      {
        "SYMBOLID": "S*G*USAF--*****",
        "DESCRIPTION": "Finance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.FIN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAFT-*****",
        "DESCRIPTION": "Finance Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.FIN.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Finance"
      },
      {
        "SYMBOLID": "S*G*USAFC-*****",
        "DESCRIPTION": "Finance Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.FIN.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Finance"
      },
      {
        "SYMBOLID": "S*G*USAS--*****",
        "DESCRIPTION": "Personnel Services",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PERSVC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAST-*****",
        "DESCRIPTION": "Personnel Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PERSVC.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Personnel Services"
      },
      {
        "SYMBOLID": "S*G*USASC-*****",
        "DESCRIPTION": "Personnel Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PERSVC.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Personnel Services"
      },
      {
        "SYMBOLID": "S*G*USAM--*****",
        "DESCRIPTION": "Mortuary/Graves Registry",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.MTRY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAMT-*****",
        "DESCRIPTION": "Mortuary/Graves Registry Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.7.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.MTRY.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Mortuary and Graves Registry"
      },
      {
        "SYMBOLID": "S*G*USAMC-*****",
        "DESCRIPTION": "Mortuary/Graves Registry Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.7.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.MTRY.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Mortuary and Graves Registry"
      },
      {
        "SYMBOLID": "S*G*USAR--*****",
        "DESCRIPTION": "Religious/Chaplain",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.RELG",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USART-*****",
        "DESCRIPTION": "Religious/Chaplain Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.8.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.RELG.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Religious and Chaplain"
      },
      {
        "SYMBOLID": "S*G*USARC-*****",
        "DESCRIPTION": "Religious/Chaplain Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.8.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.RELG.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Religious and Chaplain"
      },
      {
        "SYMBOLID": "S*G*USAP--*****",
        "DESCRIPTION": "Public Affairs",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PUBAFF",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAPT-*****",
        "DESCRIPTION": "Public Affairs Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.9.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PUBAFF.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Public Affairs"
      },
      {
        "SYMBOLID": "S*G*USAPC-*****",
        "DESCRIPTION": "Public Affairs Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.9.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PUBAFF.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Public Affairs"
      },
      {
        "SYMBOLID": "S*G*USAPB-*****",
        "DESCRIPTION": "Public Affairs Broadcast",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.9.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PUBAFF.BRCT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Public Affairs"
      },
      {
        "SYMBOLID": "S*G*USAPBT*****",
        "DESCRIPTION": "Public Affairs Broadcast Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.9.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PUBAFF.BRCT.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Public Affairs/Public Affairs Broadcast"
      },
      {
        "SYMBOLID": "S*G*USAPBC*****",
        "DESCRIPTION": "Public Affairs Broadcast Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.9.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PUBAFF.BRCT.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Public Affairs/Public Affairs Broadcast"
      },
      {
        "SYMBOLID": "S*G*USAPM-*****",
        "DESCRIPTION": "Public Affairs Joint Information Bureau (JIB)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.9.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PUBAFF.JIB",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Public Affairs"
      },
      {
        "SYMBOLID": "S*G*USAPMT*****",
        "DESCRIPTION": "Public Affairs JIB Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.9.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PUBAFF.JIB.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Public Affairs/Public Affairs Joint Information Bureau (JIB)"
      },
      {
        "SYMBOLID": "S*G*USAPMC*****",
        "DESCRIPTION": "Public Affairs JIB Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.9.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.PUBAFF.JIB.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Public Affairs/Public Affairs Joint Information Bureau (JIB)"
      },
      {
        "SYMBOLID": "S*G*USAX--*****",
        "DESCRIPTION": "Replacement Holding Unit (RHU)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.10",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.RHU",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAXT-*****",
        "DESCRIPTION": "RHU Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.10.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.RHU.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Replacement Holding Unit (RHU)"
      },
      {
        "SYMBOLID": "S*G*USAXC-*****",
        "DESCRIPTION": "RHU Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.10.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.RHU.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Replacement Holding Unit (RHU)"
      },
      {
        "SYMBOLID": "S*G*USAL--*****",
        "DESCRIPTION": "Labor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.11",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.LBR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USALT-*****",
        "DESCRIPTION": "Labor Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.11.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.LBR.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Labor"
      },
      {
        "SYMBOLID": "S*G*USALC-*****",
        "DESCRIPTION": "Labor Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.11.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.LBR.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Labor"
      },
      {
        "SYMBOLID": "S*G*USAW--*****",
        "DESCRIPTION": "Morale, Welfare, Recreation (MWR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.12",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.MWR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAWT-*****",
        "DESCRIPTION": "MWR Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.12.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.MWR.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Morale, Welfare, Recreation (MWR)"
      },
      {
        "SYMBOLID": "S*G*USAWC-*****",
        "DESCRIPTION": "MWR Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.12.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.MWR.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Morale, Welfare, Recreation (MWR)"
      },
      {
        "SYMBOLID": "S*G*USAQ--*****",
        "DESCRIPTION": "Quartermaster (Supply)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.13",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.SUPPLY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)"
      },
      {
        "SYMBOLID": "S*G*USAQT-*****",
        "DESCRIPTION": "Quartermaster (Supply) Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.13.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.SUPPLY.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Quartermaster (Supply)"
      },
      {
        "SYMBOLID": "S*G*USAQC-*****",
        "DESCRIPTION": "Quartermaster (Supply) Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.1.13.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.ADMIN.SUPPLY.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Administrative (ADMIN)/Quartermaster (Supply)"
      },
      {
        "SYMBOLID": "S*G*USM---*****",
        "DESCRIPTION": "Medical",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support"
      },
      {
        "SYMBOLID": "S*G*USMT--*****",
        "DESCRIPTION": "Medical Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical"
      },
      {
        "SYMBOLID": "S*G*USMC--*****",
        "DESCRIPTION": "Medical Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical"
      },
      {
        "SYMBOLID": "S*G*USMM--*****",
        "DESCRIPTION": "Medical Treatment Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.MEDTF",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical"
      },
      {
        "SYMBOLID": "S*G*USMMT-*****",
        "DESCRIPTION": "Medical Treatment Facility Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.MEDTF.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical/Medical Treatment Facility"
      },
      {
        "SYMBOLID": "S*G*USMMC-*****",
        "DESCRIPTION": "Medical Treatment Facility Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.MEDTF.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical/Medical Treatment Facility"
      },
      {
        "SYMBOLID": "S*G*USMV--*****",
        "DESCRIPTION": "Medical Veterinary",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.VNY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical"
      },
      {
        "SYMBOLID": "S*G*USMVT-*****",
        "DESCRIPTION": "Medical Veterinary Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.VNY.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical/Medical Veterinary"
      },
      {
        "SYMBOLID": "S*G*USMVC-*****",
        "DESCRIPTION": "Medical Veterinary Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.VNY.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical/Medical Veterinary"
      },
      {
        "SYMBOLID": "S*G*USMD--*****",
        "DESCRIPTION": "Medical Dental",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.DEN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical"
      },
      {
        "SYMBOLID": "S*G*USMDT-*****",
        "DESCRIPTION": "Medical Dental Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.DEN.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical/Medical Dental"
      },
      {
        "SYMBOLID": "S*G*USMDC-*****",
        "DESCRIPTION": "Medical Dental Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.DEN.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical/Medical Dental"
      },
      {
        "SYMBOLID": "S*G*USMP--*****",
        "DESCRIPTION": "Medical Psychological",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.PSY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical"
      },
      {
        "SYMBOLID": "S*G*USMPT-*****",
        "DESCRIPTION": "Medical Psychological Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.PSY.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical/Medical Psychological"
      },
      {
        "SYMBOLID": "S*G*USMPC-*****",
        "DESCRIPTION": "Medical Psychological Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.2.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MED.PSY.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Medical/Medical Psychological"
      },
      {
        "SYMBOLID": "S*G*USS---*****",
        "DESCRIPTION": "Supply",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support"
      },
      {
        "SYMBOLID": "S*G*USST--*****",
        "DESCRIPTION": "Supply Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USSC--*****",
        "DESCRIPTION": "Supply Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USS1--*****",
        "DESCRIPTION": "Supply Class I",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS1",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USS1T-*****",
        "DESCRIPTION": "Supply Class I Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS1.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class I"
      },
      {
        "SYMBOLID": "S*G*USS1C-*****",
        "DESCRIPTION": "Supply Class I Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS1.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class I"
      },
      {
        "SYMBOLID": "S*G*USS2--*****",
        "DESCRIPTION": "Supply Class II",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS2",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USS2T-*****",
        "DESCRIPTION": "Supply Class II Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS2.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class II"
      },
      {
        "SYMBOLID": "S*G*USS2C-*****",
        "DESCRIPTION": "Supply Class II Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS2.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class II"
      },
      {
        "SYMBOLID": "S*G*USS3--*****",
        "DESCRIPTION": "Supply Class III",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS3",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USS3T-*****",
        "DESCRIPTION": "Supply Class III Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS3.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class III"
      },
      {
        "SYMBOLID": "S*G*USS3C-*****",
        "DESCRIPTION": "Supply Class III Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS3.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class III"
      },
      {
        "SYMBOLID": "S*G*USS3A-*****",
        "DESCRIPTION": "Supply Class III Aviation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.5.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS3.AVN",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class III"
      },
      {
        "SYMBOLID": "S*G*USS3AT*****",
        "DESCRIPTION": "Supply Class III Aviation Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.5.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS3.AVN.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class III/Supply Class III Aviation"
      },
      {
        "SYMBOLID": "S*G*USS3AC*****",
        "DESCRIPTION": "Supply Class III Aviation Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.5.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS3.AVN.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class III/Supply Class III Aviation"
      },
      {
        "SYMBOLID": "S*G*USS4--*****",
        "DESCRIPTION": "Supply Class IV",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS4",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USS4T-*****",
        "DESCRIPTION": "Supply Class IV Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS4.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class IV"
      },
      {
        "SYMBOLID": "S*G*USS4C-*****",
        "DESCRIPTION": "Supply Class IV Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS4.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class IV"
      },
      {
        "SYMBOLID": "S*G*USS5--*****",
        "DESCRIPTION": "Supply Class V",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS5",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USS5T-*****",
        "DESCRIPTION": "Supply Class V Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.7.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS5.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class V"
      },
      {
        "SYMBOLID": "S*G*USS5C-*****",
        "DESCRIPTION": "Supply Class V Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.7.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS5.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class V"
      },
      {
        "SYMBOLID": "S*G*USS6--*****",
        "DESCRIPTION": "Supply Class VI",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS6",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USS6T-*****",
        "DESCRIPTION": "Supply Class VI Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.8.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS6.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class VI"
      },
      {
        "SYMBOLID": "S*G*USS6C-*****",
        "DESCRIPTION": "Supply Class VI Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.8.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS6.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class VI"
      },
      {
        "SYMBOLID": "S*G*USS7--*****",
        "DESCRIPTION": "Supply Class VII",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS7",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USS7T-*****",
        "DESCRIPTION": "Supply Class VII Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.9.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS7.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class VII"
      },
      {
        "SYMBOLID": "S*G*USS7C-*****",
        "DESCRIPTION": "Supply Class VII Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.9.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS7.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class VII"
      },
      {
        "SYMBOLID": "S*G*USS8--*****",
        "DESCRIPTION": "Supply Class VIII",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.10",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS8",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USS8T-*****",
        "DESCRIPTION": "Supply Class VIII Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.10.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS8.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class VIII"
      },
      {
        "SYMBOLID": "S*G*USS8C-*****",
        "DESCRIPTION": "Supply Class VIII Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.10.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS8.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class VIII"
      },
      {
        "SYMBOLID": "S*G*USS9--*****",
        "DESCRIPTION": "Supply Class IX",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.11",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS9",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USS9T-*****",
        "DESCRIPTION": "Supply Class IX Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.11.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS9.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class IX"
      },
      {
        "SYMBOLID": "S*G*USS9C-*****",
        "DESCRIPTION": "Supply Class IX Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.11.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS9.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class IX"
      },
      {
        "SYMBOLID": "S*G*USSX--*****",
        "DESCRIPTION": "Supply Class X",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.12",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS10",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USSXT-*****",
        "DESCRIPTION": "Supply Class X Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.12.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS10.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class X"
      },
      {
        "SYMBOLID": "S*G*USSXC-*****",
        "DESCRIPTION": "Supply Class X Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.12.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.CLS10.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Class X"
      },
      {
        "SYMBOLID": "S*G*USSL--*****",
        "DESCRIPTION": "Supply Laundry/Bath",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.13",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.LDY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USSLT-*****",
        "DESCRIPTION": "Supply Laundry/Bath Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.13.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.LDY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Laundry and Bath"
      },
      {
        "SYMBOLID": "S*G*USSLC-*****",
        "DESCRIPTION": "Supply Laundry/Bath Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.13.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.LDY.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Laundry and Bath"
      },
      {
        "SYMBOLID": "S*G*USSW--*****",
        "DESCRIPTION": "Supply Water",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.14",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.H2O",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply"
      },
      {
        "SYMBOLID": "S*G*USSWT-*****",
        "DESCRIPTION": "Supply Water Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.14.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.H2O.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Water"
      },
      {
        "SYMBOLID": "S*G*USSWC-*****",
        "DESCRIPTION": "Supply Water Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.14.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.H2O.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Water"
      },
      {
        "SYMBOLID": "S*G*USSWP-*****",
        "DESCRIPTION": "Supply Water Purification",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.14.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.H2O.PUR",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Water"
      },
      {
        "SYMBOLID": "S*G*USSWPT*****",
        "DESCRIPTION": "Supply Water Purification Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.14.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.H2O.PUR.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Water/Supply Water Purification"
      },
      {
        "SYMBOLID": "S*G*USSWPC*****",
        "DESCRIPTION": "Supply Water Purification Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.3.14.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.SLP.H2O.PUR.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Supply/Supply Water/Supply Water Purification"
      },
      {
        "SYMBOLID": "S*G*UST---*****",
        "DESCRIPTION": "Transportation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support"
      },
      {
        "SYMBOLID": "S*G*USTT--*****",
        "DESCRIPTION": "Transportation Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation"
      },
      {
        "SYMBOLID": "S*G*USTC--*****",
        "DESCRIPTION": "Transportation Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation"
      },
      {
        "SYMBOLID": "S*G*USTM--*****",
        "DESCRIPTION": "Movement Control Center (MCC)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.MCC",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation"
      },
      {
        "SYMBOLID": "S*G*USTMT-*****",
        "DESCRIPTION": "MCC Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.MCC.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation/Movement Control Center (MCC)"
      },
      {
        "SYMBOLID": "S*G*USTMC-*****",
        "DESCRIPTION": "MCC Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.MCC.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation/Movement Control Center (MCC)"
      },
      {
        "SYMBOLID": "S*G*USTR--*****",
        "DESCRIPTION": "Railhead",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.RHD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation"
      },
      {
        "SYMBOLID": "S*G*USTRT-*****",
        "DESCRIPTION": "Railhead Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.RHD.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation/Railhead"
      },
      {
        "SYMBOLID": "S*G*USTRC-*****",
        "DESCRIPTION": "Railhead Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.RHD.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation/Railhead"
      },
      {
        "SYMBOLID": "S*G*USTS--*****",
        "DESCRIPTION": "SPOD/SPOE",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.SPOD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation"
      },
      {
        "SYMBOLID": "S*G*USTST-*****",
        "DESCRIPTION": "SPOD/SPOE Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.SPOD.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation/SPOD and SPOE"
      },
      {
        "SYMBOLID": "S*G*USTSC-*****",
        "DESCRIPTION": "SPOD/SPOE Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.SPOD.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation/SPOD and SPOE"
      },
      {
        "SYMBOLID": "S*G*USTA--*****",
        "DESCRIPTION": "APOD/APOE",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.APOD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation"
      },
      {
        "SYMBOLID": "S*G*USTAT-*****",
        "DESCRIPTION": "APOD/APOE Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.APOD.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation/APOD and APOE"
      },
      {
        "SYMBOLID": "S*G*USTAC-*****",
        "DESCRIPTION": "APOD/APOE Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.APOD.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation/APOD and APOE"
      },
      {
        "SYMBOLID": "S*G*USTI--*****",
        "DESCRIPTION": "Missile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.MSL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation"
      },
      {
        "SYMBOLID": "S*G*USTIT-*****",
        "DESCRIPTION": "Missile Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.7.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.MSL.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation/Missile"
      },
      {
        "SYMBOLID": "S*G*USTIC-*****",
        "DESCRIPTION": "Missile Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.4.7.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.TPT.MSL.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Transportation/Missile"
      },
      {
        "SYMBOLID": "S*G*USX---*****",
        "DESCRIPTION": "Maintenance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support"
      },
      {
        "SYMBOLID": "S*G*USXT--*****",
        "DESCRIPTION": "Maintenance Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance"
      },
      {
        "SYMBOLID": "S*G*USXC--*****",
        "DESCRIPTION": "Maintenance Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance"
      },
      {
        "SYMBOLID": "S*G*USXH--*****",
        "DESCRIPTION": "Maintenance Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance"
      },
      {
        "SYMBOLID": "S*G*USXHT-*****",
        "DESCRIPTION": "Maintenance Heavy Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.HVY.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Maintenance Heavy"
      },
      {
        "SYMBOLID": "S*G*USXHC-*****",
        "DESCRIPTION": "Maintenance Heavy Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.HVY.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Maintenance Heavy"
      },
      {
        "SYMBOLID": "S*G*USXR--*****",
        "DESCRIPTION": "Maintenance Recovery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.RCY",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance"
      },
      {
        "SYMBOLID": "S*G*USXRT-*****",
        "DESCRIPTION": "Maintenance Recovery Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.RCY.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Maintenance Recovery"
      },
      {
        "SYMBOLID": "S*G*USXRC-*****",
        "DESCRIPTION": "Maintenance Recovery Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.RCY.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Maintenance Recovery"
      },
      {
        "SYMBOLID": "S*G*USXO--*****",
        "DESCRIPTION": "Ordnance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.ORD",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance"
      },
      {
        "SYMBOLID": "S*G*USXOT-*****",
        "DESCRIPTION": "Ordnance Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.ORD.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Ordnance"
      },
      {
        "SYMBOLID": "S*G*USXOC-*****",
        "DESCRIPTION": "Ordnance Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.ORD.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Ordnance"
      },
      {
        "SYMBOLID": "S*G*USXOM-*****",
        "DESCRIPTION": "Ordnance Missile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.5.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.ORD.MSL",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Ordnance"
      },
      {
        "SYMBOLID": "S*G*USXOMT*****",
        "DESCRIPTION": "Ordnance Missile Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.5.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.ORD.MSL.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Ordnance/Ordnance Missile"
      },
      {
        "SYMBOLID": "S*G*USXOMC*****",
        "DESCRIPTION": "Ordnance Missile Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.5.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.ORD.MSL.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Ordnance/Ordnance Missile"
      },
      {
        "SYMBOLID": "S*G*USXE--*****",
        "DESCRIPTION": "Electro-Optical",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.EOP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance"
      },
      {
        "SYMBOLID": "S*G*USXET-*****",
        "DESCRIPTION": "Electro-Optical Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.EOP.THT",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Electro-Optical"
      },
      {
        "SYMBOLID": "S*G*USXEC-*****",
        "DESCRIPTION": "Electro-Optical Corps",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.3.5.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.CSS.MAINT.EOP.CRP",
        "PATH": "Warfighting Symbology/Ground Track/Unit/Combat Service Support/Maintenance/Electro-Optical"
      },
      {
        "SYMBOLID": "S*G*UH----*****",
        "DESCRIPTION": "Special C2 Headquarters Component",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.UNT.C2HQ",
        "PATH": "Warfighting Symbology/Ground Track/Unit"
      },
      {
        "SYMBOLID": "S*G*E-----*****",
        "DESCRIPTION": "Ground Track Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT",
        "PATH": "Warfighting Symbology/Ground Track"
      },
      {
        "SYMBOLID": "S*G*EW----*****",
        "DESCRIPTION": "Weapon",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "1.X.3.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment"
      },
      {
        "SYMBOLID": "S*G*EWM---*****",
        "DESCRIPTION": "Missile Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWMA--*****",
        "DESCRIPTION": "Air Defense (AD) Missile Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher"
      },
      {
        "SYMBOLID": "S*G*EWMAS-*****",
        "DESCRIPTION": "Short Range AD Missile Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.SHTR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher"
      },
      {
        "SYMBOLID": "S*G*EWMASR*****",
        "DESCRIPTION": "Short Range Transporter Launcher and Radar (TLAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.SHTR.TLAR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher/ShortRange"
      },
      {
        "SYMBOLID": "S*G*EWMASE*****",
        "DESCRIPTION": "Short Range Transporter Erector Launcher and Radar (TELAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.SHTR.TELAR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher/ShortRange"
      },
      {
        "SYMBOLID": "S*G*EWMAI-*****",
        "DESCRIPTION": "Intermediate Range AD Missile Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.INTMR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher"
      },
      {
        "SYMBOLID": "S*G*EWMAIR*****",
        "DESCRIPTION": "Intermediate Transporter Launcher and Radar (TLAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.INTMR.TLAR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher/Intermediate Range"
      },
      {
        "SYMBOLID": "S*G*EWMAIE*****",
        "DESCRIPTION": "Intermediate Transporter Erector Launcher and Radar (TELAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.INTMR.TELAR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher/Intermediate Range"
      },
      {
        "SYMBOLID": "S*G*EWMAL-*****",
        "DESCRIPTION": "Long Range AD Missile Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.LNGR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher"
      },
      {
        "SYMBOLID": "S*G*EWMALR*****",
        "DESCRIPTION": "Long Range Transporter Launcher and Radar (TLAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.LNGR.TLAR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher/Long Range"
      },
      {
        "SYMBOLID": "S*G*EWMALE*****",
        "DESCRIPTION": "Long Range Transporter Erector Launcher and Radar (TELAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.LNGR.TELAR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher/Long Range"
      },
      {
        "SYMBOLID": "S*G*EWMAT-*****",
        "DESCRIPTION": "AD Missile Launcher Theater",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.THT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher"
      },
      {
        "SYMBOLID": "S*G*EWMATR*****",
        "DESCRIPTION": "Theater Transporter Launcher and Radar (TLAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.THT.TLAR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher/Theater"
      },
      {
        "SYMBOLID": "S*G*EWMATE*****",
        "DESCRIPTION": "Theater Transporter Erector Launcher and Radar (TELAR)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.1.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.ADFAD.THT.TELAR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Air Defense (AD) Missile Launcher/Theater"
      },
      {
        "SYMBOLID": "S*G*EWMS--*****",
        "DESCRIPTION": "Surf-Surf (SS) Missile Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.SUF",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher"
      },
      {
        "SYMBOLID": "S*G*EWMSS-*****",
        "DESCRIPTION": "Short Range SS Missile Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.SUF.SHTR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Surf-Surf (SS) Missile Launcher"
      },
      {
        "SYMBOLID": "S*G*EWMSI-*****",
        "DESCRIPTION": "Intermediate Range SS Missile Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.SUF.INTMR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Surf-Surf (SS) Missile Launcher"
      },
      {
        "SYMBOLID": "S*G*EWMSL-*****",
        "DESCRIPTION": "Long Range SS Missile Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.SUF.LNGR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Surf-Surf (SS) Missile Launcher"
      },
      {
        "SYMBOLID": "S*G*EWMT--*****",
        "DESCRIPTION": "Missile Launcher Antitank (AT)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.AT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher"
      },
      {
        "SYMBOLID": "S*G*EWMTL-*****",
        "DESCRIPTION": "Missile Launcher AT Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.AT.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Missile Launcher Antitank (AT)"
      },
      {
        "SYMBOLID": "S*G*EWMTM-*****",
        "DESCRIPTION": "Missile Launcher AT Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.AT.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Missile Launcher Antitank (AT)"
      },
      {
        "SYMBOLID": "S*G*EWMTH-*****",
        "DESCRIPTION": "Missile Launcher AT Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.1.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MSLL.AT.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Missile Launcher/Missile Launcher Antitank (AT)"
      },
      {
        "SYMBOLID": "S*G*EWS---*****",
        "DESCRIPTION": "Weapon Single Rocket Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.SRL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWSL--*****",
        "DESCRIPTION": "Single Rocket Launcher Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.SRL.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Single Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*EWSM--*****",
        "DESCRIPTION": "Single Rocket Launcher Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.SRL.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Single Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*EWSH--*****",
        "DESCRIPTION": "Single Rocket Launcher Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.SRL.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Single Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*EWX---*****",
        "DESCRIPTION": "Multiple Rocket Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MRL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWXL--*****",
        "DESCRIPTION": "Multiple Rocket Launcher Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MRL.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Multiple Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*EWXM--*****",
        "DESCRIPTION": "Multiple Rocket Launcher Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MRL.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Multiple Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*EWXH--*****",
        "DESCRIPTION": "Multiple Rocket Launcher Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MRL.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Multiple Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*EWT---*****",
        "DESCRIPTION": "Antitank Rocket Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ATRL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWTL--*****",
        "DESCRIPTION": "Antitank Rocket Launcher Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.4.1",
        "ALPHAHIERARCHY": "211SYMBOL UNKNOWN FRIEND NEUTRAL HOSTILEWAR.GRDTRK.EQT.WPN.MRL.HVYWARFIGHTING SYMBOLSGROUND TRACKEQUIPMENTWEAPONMULTIPLE ROCKET LAUNCHERHEAVYHierarchy: 1.X.3.2.1.3.3Framed: FOSUGPEWXH--*****SFGPEWXH--*****SNGPEWXH--*****SHGPEWXH--*****SUGPEWXH--*****SFGPEWXH--*****SNGPEWXH--*****SHGPEWXH--*****WAR.GRDTRK.EQT.WPN.ATRLWARFIGHTING SYMBOLSGROUND TRACKEQUIPMENTWEAPONANTITANK ROCKET LAUNCHERHierarchy: 1.X.3.2.1.4Framed: FOSUGPEWT---*****SFGPEWT---*****SNGPEWT---*****SHGPEWT---*****SUGPEWT---*****SFGPEWT---*****SNGPEWT---*****SHGPEWT---*****WAR.GRDTRK.EQT.WPN.ATRL.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Anti-Tank Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*EWTM--*****",
        "DESCRIPTION": "Antitank Rocket Launcher Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ATRL.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Anti-Tank Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*EWTH--*****",
        "DESCRIPTION": "Antitank Rocket Launcher Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.4.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ATRL.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Anti-Tank Rocket Launcher"
      },
      {
        "SYMBOLID": "S*G*EWR---*****",
        "DESCRIPTION": "Rifle/Automatic Weapon",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.RIFWPN",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWRR--*****",
        "DESCRIPTION": "Rifle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.RIFWPN.RIF",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Rifle and Automatic Weapon"
      },
      {
        "SYMBOLID": "S*G*EWRR--*****",
        "DESCRIPTION": "Weapons Cache",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.5.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.RIFWPN.RIF.CACHE",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Rifle and Automatic Weapon/Rifle"
      },
      {
        "SYMBOLID": "S*G*EWRR--*****",
        "DESCRIPTION": "Weapons Confiscated",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.5.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.RIFWPN.RIF.CONF",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Rifle and Automatic Weapon/Rifle"
      },
      {
        "SYMBOLID": "S*G*EWRR--*****",
        "DESCRIPTION": "Weapons Found",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.5.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.RIFWPN.RIF.FND",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Rifle and Automatic Weapon/Rifle"
      },
      {
        "SYMBOLID": "S*G*EWRR--*****",
        "DESCRIPTION": "Weapons Market",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.5.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.RIFWPN.RIF.MKT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Rifle and Automatic Weapon/Rifle"
      },
      {
        "SYMBOLID": "S*G*EWRR--*****",
        "DESCRIPTION": "Weapons Sale",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.5.1.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.RIFWPN.RIF.SALE",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Rifle and Automatic Weapon/Rifle"
      },
      {
        "SYMBOLID": "S*G*EWRL--*****",
        "DESCRIPTION": "Light Machine Gun",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.RIFWPN.LMG",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Rifle and Automatic Weapon"
      },
      {
        "SYMBOLID": "S*G*EWRH--*****",
        "DESCRIPTION": "Heavy Machine Gun",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.5.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.RIFWPN.HMG",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Rifle and Automatic Weapon"
      },
      {
        "SYMBOLID": "S*G*EWZ---*****",
        "DESCRIPTION": "Grenade Launcher",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.GREL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWZL--*****",
        "DESCRIPTION": "Grenade Launcher Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.GREL.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Grenade Launcher"
      },
      {
        "SYMBOLID": "S*G*EWZM--*****",
        "DESCRIPTION": "Grenade Launcher Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.GREL.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Grenade Launcher"
      },
      {
        "SYMBOLID": "S*G*EWZH--*****",
        "DESCRIPTION": "Grenade Launcher Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.6.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.GREL.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Grenade Launcher"
      },
      {
        "SYMBOLID": "S*G*EWO---*****",
        "DESCRIPTION": "Weapon Mortar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MORT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWOL--*****",
        "DESCRIPTION": "Mortar Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.7.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MORT.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Weapon Mortar"
      },
      {
        "SYMBOLID": "S*G*EWOM--*****",
        "DESCRIPTION": "Mortar Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.7.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MORT.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Weapon Mortar"
      },
      {
        "SYMBOLID": "S*G*EWOH--*****",
        "DESCRIPTION": "Mortar Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.7.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.MORT.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Weapon Mortar"
      },
      {
        "SYMBOLID": "S*G*EWH---*****",
        "DESCRIPTION": "Howitzer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.HOW",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWHL--*****",
        "DESCRIPTION": "Howitzer Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.8.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.HOW.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Howitzer"
      },
      {
        "SYMBOLID": "S*G*EWHLS-*****",
        "DESCRIPTION": "Howitzer Light Self-Propelled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.8.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.HOW.LIT.SPD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Howitzer/Howitzer Light"
      },
      {
        "SYMBOLID": "S*G*EWHM--*****",
        "DESCRIPTION": "Howitzer Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.8.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.HOW.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Howitzer"
      },
      {
        "SYMBOLID": "S*G*EWHMS-*****",
        "DESCRIPTION": "Howitzer Medium Self-Propelled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.8.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.HOW.MDM.SPD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Howitzer/Howitzer Medium"
      },
      {
        "SYMBOLID": "S*G*EWHH--*****",
        "DESCRIPTION": "Howitzer Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.8.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.HOW.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Howitzer"
      },
      {
        "SYMBOLID": "S*G*EWHHS-*****",
        "DESCRIPTION": "Howitzer Heavy Self-Propelled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.8.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.HOW.HVY.SPD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Howitzer/Howitzer Heavy"
      },
      {
        "SYMBOLID": "S*G*EWG---*****",
        "DESCRIPTION": "Antitank Gun",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ATG",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWGL--*****",
        "DESCRIPTION": "Antitank Gun Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.9.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ATG.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Anti-Tank Gun"
      },
      {
        "SYMBOLID": "S*G*EWGM--*****",
        "DESCRIPTION": "Antitank Gun Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.9.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ATG.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Anti-Tank Gun"
      },
      {
        "SYMBOLID": "S*G*EWGH--*****",
        "DESCRIPTION": "Antitank Gun Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.9.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ATG.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Anti-Tank Gun"
      },
      {
        "SYMBOLID": "S*G*EWGR--*****",
        "DESCRIPTION": "Antitank Gun Recoilless",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.9.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ATG.RECL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Anti-Tank Gun"
      },
      {
        "SYMBOLID": "S*G*EWD---*****",
        "DESCRIPTION": "Direct Fire Gun",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.10",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.DFG",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWDL--*****",
        "DESCRIPTION": "Direct Fire Gun Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.10.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.DFG.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Direct Fire Gun"
      },
      {
        "SYMBOLID": "S*G*EWDLS-*****",
        "DESCRIPTION": "Direct Fire Gun Light Self-Propelled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.10.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.DFG.LIT.SPD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Direct Fire Gun/Direct Fire Gun Light"
      },
      {
        "SYMBOLID": "S*G*EWDM--*****",
        "DESCRIPTION": "Direct Fire Gun Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.10.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.DFG.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Direct Fire Gun"
      },
      {
        "SYMBOLID": "S*G*EWDMS-*****",
        "DESCRIPTION": "Direct Fire Gun Medium Self-Propelled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.10.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.DFG.MDM.SPD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Direct Fire Gun/Direct Fire Gun Medium"
      },
      {
        "SYMBOLID": "S*G*EWDH--*****",
        "DESCRIPTION": "Direct Fire Gun Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.10.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.DFG.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Direct Fire Gun"
      },
      {
        "SYMBOLID": "S*G*EWDHS-*****",
        "DESCRIPTION": "Direct Fire Gun Heavy Self-Propelled",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.10.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.DFG.HVY.SPD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Direct Fire Gun/Direct Fire Gun Heavy"
      },
      {
        "SYMBOLID": "S*G*EWA---*****",
        "DESCRIPTION": "Air Defense Gun",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.11",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ADFG",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon"
      },
      {
        "SYMBOLID": "S*G*EWAL--*****",
        "DESCRIPTION": "Air Defense Gun Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.11.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ADFG.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Air Defense Gun"
      },
      {
        "SYMBOLID": "S*G*EWAM--*****",
        "DESCRIPTION": "Air Defense Gun Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.11.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ADFG.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Air Defense Gun"
      },
      {
        "SYMBOLID": "S*G*EWAH--*****",
        "DESCRIPTION": "Air Defense Gun Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.1.11.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.WPN.ADFG.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Weapon/Air Defense Gun"
      },
      {
        "SYMBOLID": "S*G*EV----*****",
        "DESCRIPTION": "Ground Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment"
      },
      {
        "SYMBOLID": "S*G*EVA---*****",
        "DESCRIPTION": "Armored Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVAT--*****",
        "DESCRIPTION": "Tank",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.TANK",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVATL-*****",
        "DESCRIPTION": "Tank Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.TANK.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle/Tank"
      },
      {
        "SYMBOLID": "S*G*EVATLR*****",
        "DESCRIPTION": "Tank Light Recovery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.1.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.TANK.LIT.RCY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle/Tank/Tank Light"
      },
      {
        "SYMBOLID": "S*G*EVATM-*****",
        "DESCRIPTION": "Tank Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.TANK.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle/Tank"
      },
      {
        "SYMBOLID": "S*G*EVATMR*****",
        "DESCRIPTION": "Tank Medium Recovery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.TANK.MDM.RCY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle/Tank/Tank Medium"
      },
      {
        "SYMBOLID": "S*G*EVATH-*****",
        "DESCRIPTION": "Tank Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.TANK.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle/Tank"
      },
      {
        "SYMBOLID": "S*G*EVATHR*****",
        "DESCRIPTION": "Tank Heavy Recovery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.1.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.TANK.HVY.RCY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle/Tank/Tank Heavy"
      },
      {
        "SYMBOLID": "S*G*EVAA--*****",
        "DESCRIPTION": "Armored Personnel Carrier",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.ARMPC",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVAAR-*****",
        "DESCRIPTION": "Armored Personnel Carrier Recovery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.ARMPC.RCY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle/Armored Personnel Carrier"
      },
      {
        "SYMBOLID": "S*G*EVAI--*****",
        "DESCRIPTION": "Armored Infantry",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.ARMINF",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVAC--*****",
        "DESCRIPTION": "C2V/ACV",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.C2V",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVAS--*****",
        "DESCRIPTION": "Combat Service Support Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.CSSVEH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVAL--*****",
        "DESCRIPTION": "Light Armored Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.1.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ARMD.LARMVH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Armored Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVU---*****",
        "DESCRIPTION": "Utility Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVUB--*****",
        "DESCRIPTION": "Bus",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.BUS",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVUS--*****",
        "DESCRIPTION": "Semi",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.SEMI",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVUSL-*****",
        "DESCRIPTION": "Semi Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.SEMI.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle/Semi"
      },
      {
        "SYMBOLID": "S*G*EVUSM-*****",
        "DESCRIPTION": "Semi Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.SEMI.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle/Semi"
      },
      {
        "SYMBOLID": "S*G*EVUSH-*****",
        "DESCRIPTION": "Semi Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.SEMI.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle/Semi"
      },
      {
        "SYMBOLID": "S*G*EVUL--*****",
        "DESCRIPTION": "Limited Cross-Country Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.LCCTRK",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVUX--*****",
        "DESCRIPTION": "Cross-Country Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.CCTRK",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVUR--*****",
        "DESCRIPTION": "Water Craft",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.H2OCRT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVUT--*****",
        "DESCRIPTION": "Tow Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.TOWTRK",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVUTL-*****",
        "DESCRIPTION": "Tow Truck Light",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.TOWTRK.LIT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle/Tow Truck"
      },
      {
        "SYMBOLID": "S*G*EVUTH-*****",
        "DESCRIPTION": "Tow Truck Heavy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.TOWTRK.HVY",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle/Tow Truck"
      },
      {
        "SYMBOLID": "S*G*EVUA--*****",
        "DESCRIPTION": "Ambulance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.AMBLNC",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVUAA-*****",
        "DESCRIPTION": "Ambulance Armored",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.2.7.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.UTYVEH.AMBLNC.ARMD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Utility Vehicle/Ambulance"
      },
      {
        "SYMBOLID": "S*G*EVE---*****",
        "DESCRIPTION": "Engineer Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEB--*****",
        "DESCRIPTION": "Engineer Vehicle Bridge",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.BRG",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEE--*****",
        "DESCRIPTION": "Earthmover",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.ERHMR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEC--*****",
        "DESCRIPTION": "Construction Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.CSNVEH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEM--*****",
        "DESCRIPTION": "Mine Laying Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.MLVEH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEMV-*****",
        "DESCRIPTION": "Armored Carrier with Volcano",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.MLVEH.ARMCV",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle/Mine Laying Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEML-*****",
        "DESCRIPTION": "Truck Mounted with Volcano",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.MLVEH.TRKMV",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle/Mine Laying Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEA--*****",
        "DESCRIPTION": "Mine Clearing Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.MCVEH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEAA-*****",
        "DESCRIPTION": "Armored Mounted Mine Clearing Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.MCVEH.ARMVM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle/Mine Clearing Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEAT-*****",
        "DESCRIPTION": "Trailer Mounted Mine Clearing Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.MCVEH.TM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle/Mine Clearing Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVED--*****",
        "DESCRIPTION": "Dozer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.DZR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEDA-*****",
        "DESCRIPTION": "Armored Dozer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.DZR.ARMD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVES--*****",
        "DESCRIPTION": "Armored Assault",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.AST",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVER--*****",
        "DESCRIPTION": "Armored Engineer Recon Vehicle (AERV)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.ARMERV",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEH--*****",
        "DESCRIPTION": "Backhoe",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.BH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Engineer Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVEF--*****",
        "DESCRIPTION": "Ferry Transporter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.3.10",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.ENGVEH.FRYTSP",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVT---*****",
        "DESCRIPTION": "Train Locomotive",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.TRNLCO",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVC---*****",
        "DESCRIPTION": "Civilian Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCA--*****",
        "DESCRIPTION": "Civilian Automobile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.AUT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCAL-*****",
        "DESCRIPTION": "Civilian Compact Automobile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.AUT.CPCT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Automobile"
      },
      {
        "SYMBOLID": "S*G*EVCAM-*****",
        "DESCRIPTION": "Civilian Midsize Automobile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.AUT.MDSZ",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Automobile"
      },
      {
        "SYMBOLID": "S*G*EVCAH-*****",
        "DESCRIPTION": "Civilian Automobile Sedan",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.AUT.SDN",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Automobile"
      },
      {
        "SYMBOLID": "S*G*EVCO--*****",
        "DESCRIPTION": "Civilian Open-Bed Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.OBTRK",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCOL-*****",
        "DESCRIPTION": "Civilian Pickup Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.OBTRK.PU",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Open-Bed Truck"
      },
      {
        "SYMBOLID": "S*G*EVCOM-*****",
        "DESCRIPTION": "Civilian Small Open-Bed Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.2.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.OBTRK.SMAL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Open-Bed Truck"
      },
      {
        "SYMBOLID": "S*G*EVCOH-*****",
        "DESCRIPTION": "Civilian Large Open-Bed Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.OBTRK.LRG",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Open-Bed Truck"
      },
      {
        "SYMBOLID": "S*G*EVCM--*****",
        "DESCRIPTION": "Civilian Multiple Passenger Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.MPV",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCML-*****",
        "DESCRIPTION": "Civilian Multiple Passenger Van",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.MPV.VAN",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Multi-Passenger Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCMM-*****",
        "DESCRIPTION": "Civilian Small Bus",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.MPV.SBUS",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Multi-Passenger Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCMH-*****",
        "DESCRIPTION": "Civilian Large Bus",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.MPV.LBUS",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Multi-Passenger Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCU--*****",
        "DESCRIPTION": "Civilian Utility Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.UTYVEH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCUL-*****",
        "DESCRIPTION": "Civilian Sport Utility Vehicle (SUV)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.UTYVEH.SUV",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Utility Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCUM-*****",
        "DESCRIPTION": "Civilian Utility Small Box Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.UTYVEH.SBOX",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Utility Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCUH-*****",
        "DESCRIPTION": "Civilian Utility Large Box Truck",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.4.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.UTYVEH.LBOX",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Utility Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCJ--*****",
        "DESCRIPTION": "Civilian Jeep Type Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.JP",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCJL-*****",
        "DESCRIPTION": "Civilian Small/Light Jeep Type Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.JP.SMAL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Jeep Type Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCJM-*****",
        "DESCRIPTION": "Civilian Medium Jeep Type Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.JP.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Jeep Type Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCJH-*****",
        "DESCRIPTION": "Civilian Large/Heavy Jeep Type Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.5.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.JP.LRG",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Jeep Type Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCT--*****",
        "DESCRIPTION": "Civilian Tractor Trailer Truck With Box Trailer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.TRTRL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCTL-*****",
        "DESCRIPTION": "Civilian Small/Light Box Trailer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.TRTRL.SMAL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Tractor Trailer Truck With Box Trailer"
      },
      {
        "SYMBOLID": "S*G*EVCTM-*****",
        "DESCRIPTION": "Civilian Medium Box Trailer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.TRTRL.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Tractor Trailer Truck With Box Trailer"
      },
      {
        "SYMBOLID": "S*G*EVCTH-*****",
        "DESCRIPTION": "Civilian Large/Heavy Box Trailer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.6.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.TRTRL.LRG",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Tractor Trailer Truck With Box Trailer"
      },
      {
        "SYMBOLID": "S*G*EVCF--*****",
        "DESCRIPTION": "Civilian Tractor Trailer Truck With Flatbed Trailer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.TRTRLF",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVCFL-*****",
        "DESCRIPTION": "Civilian Small/Light Flatbed Trailer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.7.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.TRTRLF.SMAL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Tractor Trailer Truck With Flatbed Trailer"
      },
      {
        "SYMBOLID": "S*G*EVCFM-*****",
        "DESCRIPTION": "Civilian Medium Flatbed Trailer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.7.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.TRTRLF.MDM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Tractor Trailer Truck With Flatbed Trailer"
      },
      {
        "SYMBOLID": "S*G*EVCFH-*****",
        "DESCRIPTION": "Civilian Large/Heavy Flatbed Trailer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.5.7.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.CVLVEH.TRTRLF.LRG",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Civilian Vehicle/Civilian Tractor Trailer Truck With Flatbed Trailer"
      },
      {
        "SYMBOLID": "S*G*EVS---*****",
        "DESCRIPTION": "Missile Support",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.MSLSPT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle"
      },
      {
        "SYMBOLID": "S*G*EVST--*****",
        "DESCRIPTION": "Transloader",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.MSLSPT.TLDR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Missile Support"
      },
      {
        "SYMBOLID": "S*G*EVSR--*****",
        "DESCRIPTION": "Transporter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.6.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.MSLSPT.TPTR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Missile Support"
      },
      {
        "SYMBOLID": "S*G*EVSC--*****",
        "DESCRIPTION": "Crane/Loading Device",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.6.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.MSLSPT.CRN",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Missile Support"
      },
      {
        "SYMBOLID": "S*G*EVSP--*****",
        "DESCRIPTION": "Propellant Transporter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.6.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.MSLSPT.PLNT",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Missile Support"
      },
      {
        "SYMBOLID": "S*G*EVSW--*****",
        "DESCRIPTION": "Warhead Transporter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.6.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.MSLSPT.WH",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle/Missile Support"
      },
      {
        "SYMBOLID": "S*G*EVM---*****",
        "DESCRIPTION": "Pack Animal(s)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.2.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.GRDVEH.PKAN",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Ground Vehicle"
      },
      {
        "SYMBOLID": "S*G*ES----*****",
        "DESCRIPTION": "Equipment Sensor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.SNS",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment"
      },
      {
        "SYMBOLID": "S*G*ESR---*****",
        "DESCRIPTION": "Sensor Radar",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.SNS.RAD",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Sensor"
      },
      {
        "SYMBOLID": "S*G*ESE---*****",
        "DESCRIPTION": "Emplaced Sensor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.SNS.EMP",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Sensor"
      },
      {
        "SYMBOLID": "S*G*EX----*****",
        "DESCRIPTION": "Special",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "1.X.3.2.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.SPL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment"
      },
      {
        "SYMBOLID": "S*G*EXL---*****",
        "DESCRIPTION": "Laser",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.SPL.LSR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Special"
      },
      {
        "SYMBOLID": "S*G*EXN---*****",
        "DESCRIPTION": "CBRN Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.SPL.NBCEQ",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Special"
      },
      {
        "SYMBOLID": "S*G*EXF---*****",
        "DESCRIPTION": "Flame Thrower",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.4.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.SPL.FLMTHR",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Special"
      },
      {
        "SYMBOLID": "S*G*EXM---*****",
        "DESCRIPTION": "Land Mines",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.4.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.SPL.LNDMNE",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Special"
      },
      {
        "SYMBOLID": "S*G*EXMC--*****",
        "DESCRIPTION": "Claymore",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.4.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.SPL.LNDMNE.CLM",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Special/Land Mines"
      },
      {
        "SYMBOLID": "S*G*EXML--*****",
        "DESCRIPTION": "Less Than Lethal",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.4.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.EQT.SPL.LNDMNE.LTL",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Special/Land Mines"
      },
      {
        "SYMBOLID": "S*G*EXI---*****",
        "DESCRIPTION": "IED",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.4.5",
        "ALPHAHIERARCHY": "WAR.GRNTRK.EQT.SPL.IED",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Special"
      },
      {
        "SYMBOLID": "S*G*EXI---MO***",
        "DESCRIPTION": "VBIED",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.2.4.5.1",
        "ALPHAHIERARCHY": "WAR.GRNTRK.EQT.SPL.IED.VBIED",
        "PATH": "Warfighting Symbology/Ground Track/Ground Track Equipment/Special/Improvised Explosive Device (IED)"
      },
      {
        "SYMBOLID": "S*G*I-----H****",
        "DESCRIPTION": "Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS",
        "PATH": "Warfighting Symbology/Ground Track"
      },
      {
        "SYMBOLID": "S*G*IR----H****",
        "DESCRIPTION": "Raw Material Production/Storage",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.RMP",
        "PATH": "Warfighting Symbology/Ground Track/Installation"
      },
      {
        "SYMBOLID": "S*G*IRM---H****",
        "DESCRIPTION": "Raw Material Production/Storage Mine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.RMP.MNE",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Raw Material Production and Storage"
      },
      {
        "SYMBOLID": "S*G*IRP---H****",
        "DESCRIPTION": "Petroleum/Gas/Oil",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.RMP.PGO",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Raw Material Production and Storage"
      },
      {
        "SYMBOLID": "S*G*IRN---H****",
        "DESCRIPTION": "Production/Storage CBRN",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.RMP.CBRN",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Raw Material Production and Storage"
      },
      {
        "SYMBOLID": "S*G*IRNB--H****",
        "DESCRIPTION": "Production/Storage CBRN Biological",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.1.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.RMP.CBRN.BIO",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Raw Material Production and Storage/NBC"
      },
      {
        "SYMBOLID": "S*G*IRNC--H****",
        "DESCRIPTION": "Production/Storage CBRN Chemical",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.1.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.RMP.CBRN.CML",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Raw Material Production and Storage/NBC"
      },
      {
        "SYMBOLID": "S*G*IRNN--H****",
        "DESCRIPTION": "Production/Storage CBRN Nuclear",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.1.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.RMP.CBRN.NUC",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Raw Material Production and Storage/NBC"
      },
      {
        "SYMBOLID": "S*G*IP----H****",
        "DESCRIPTION": "Processing Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.PF",
        "PATH": "Warfighting Symbology/Ground Track/Installation"
      },
      {
        "SYMBOLID": "S*G*IPD---H****",
        "DESCRIPTION": "Processing Facility Decontamination",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.PF.DECON",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Processing Facility"
      },
      {
        "SYMBOLID": "S*G*IE----H****",
        "DESCRIPTION": "Equipment Manufacture",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.EQTMNF",
        "PATH": "Warfighting Symbology/Ground Track/Installation"
      },
      {
        "SYMBOLID": "S*G*IU----H****",
        "DESCRIPTION": "Service, Reasearch, Utility Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.SRUF",
        "PATH": "Warfighting Symbology/Ground Track/Installation"
      },
      {
        "SYMBOLID": "S*G*IUR---H****",
        "DESCRIPTION": "Technological Research Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.4.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.SRUF.TRF",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Service, Reasearch, Utility Facility"
      },
      {
        "SYMBOLID": "S*G*IUT---H****",
        "DESCRIPTION": "Telecommunications Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.4.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.SRUF.TCF",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Service, Reasearch, Utility Facility"
      },
      {
        "SYMBOLID": "S*G*IUE---H****",
        "DESCRIPTION": "Electric Power Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.4.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.SRUF.EPF",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Service, Reasearch, Utility Facility"
      },
      {
        "SYMBOLID": "S*G*IUEN--H****",
        "DESCRIPTION": "Nuclear Plant",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.4.3.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.SRUF.EPF.NPT",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Service, Reasearch, Utility Facility/Electric Power Facility"
      },
      {
        "SYMBOLID": "S*G*IUED--H****",
        "DESCRIPTION": "Dam",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.4.3.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.SRUF.EPF.DAM",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Service, Reasearch, Utility Facility/Electric Power Facility"
      },
      {
        "SYMBOLID": "S*G*IUEF--H****",
        "DESCRIPTION": "Fossil Fuel",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.4.3.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.SRUF.EPF.FOSF",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Service, Reasearch, Utility Facility/Electric Power Facility"
      },
      {
        "SYMBOLID": "S*G*IUP---H****",
        "DESCRIPTION": "Public Water Services",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.4.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.SRUF.PWS",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Service, Reasearch, Utility Facility"
      },
      {
        "SYMBOLID": "S*G*IM----H****",
        "DESCRIPTION": "Military Materiel Facility",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "1.X.3.3.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF",
        "PATH": "Warfighting Symbology/Ground Track/Installation"
      },
      {
        "SYMBOLID": "S*G*IMF---H****",
        "DESCRIPTION": "Nuclear Energy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.NENY",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility"
      },
      {
        "SYMBOLID": "S*G*IMFA--H****",
        "DESCRIPTION": "Atomic Energy Reactor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.1.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.NENY.ATMER",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility/Nuclear Energy"
      },
      {
        "SYMBOLID": "S*G*IMFP--H****",
        "DESCRIPTION": "Nuclear Material Production",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.1.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.NENY.NMP",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility/Nuclear Energy"
      },
      {
        "SYMBOLID": "S*G*IMFPW-H****",
        "DESCRIPTION": "Weapons Grade",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.1.2.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.NENY.NMP.WPNGR",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility/Nuclear Energy/Nuclear Material Production"
      },
      {
        "SYMBOLID": "S*G*IMFS--H****",
        "DESCRIPTION": "Nuclear Material Storage",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.1.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.NENY.NMS",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility/Nuclear Energy"
      },
      {
        "SYMBOLID": "S*G*IMA---H****",
        "DESCRIPTION": "Aircraft Production & Assembly",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.APA",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility"
      },
      {
        "SYMBOLID": "S*G*IME---H****",
        "DESCRIPTION": "Ammunition And Explosives Production",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.3",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.AMEP",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility"
      },
      {
        "SYMBOLID": "S*G*IMG---H****",
        "DESCRIPTION": "Armament Production",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.4",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.AMTP",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility"
      },
      {
        "SYMBOLID": "S*G*IMV---H****",
        "DESCRIPTION": "Military Vehicle Production",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.5",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.MILVP",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility"
      },
      {
        "SYMBOLID": "S*G*IMN---H****",
        "DESCRIPTION": "Engineering Equipment Production",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.ENGEP",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility"
      },
      {
        "SYMBOLID": "S*G*IMNB--H****",
        "DESCRIPTION": "Engineering Equipment Production Bridge",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.6.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.ENGEP.BRG",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility/Engineering Equipment Production"
      },
      {
        "SYMBOLID": "S*G*IMC---H****",
        "DESCRIPTION": "Chemical & Biological Warfare Production",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.CBWP",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility"
      },
      {
        "SYMBOLID": "S*G*IMS---H****",
        "DESCRIPTION": "Ship Construction",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.SHPCSN",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility"
      },
      {
        "SYMBOLID": "S*G*IMM---H****",
        "DESCRIPTION": "Missile & Space System Production",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.5.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MMF.MSSP",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Materiel Facility"
      },
      {
        "SYMBOLID": "S*G*IG----H****",
        "DESCRIPTION": "Government Leadership",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.6",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.GOVLDR",
        "PATH": "Warfighting Symbology/Ground Track/Installation"
      },
      {
        "SYMBOLID": "S*G*IB----H****",
        "DESCRIPTION": "Military Base/Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.7",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MILBF",
        "PATH": "Warfighting Symbology/Ground Track/Installation"
      },
      {
        "SYMBOLID": "S*G*IBA---H****",
        "DESCRIPTION": "Airport/Airbase",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.7.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MILBF.AB",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Base and Facility"
      },
      {
        "SYMBOLID": "S*G*IBN---H****",
        "DESCRIPTION": "Seaport/Naval Base",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.7.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MILBF.SP",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Military Base and Facility"
      },
      {
        "SYMBOLID": "S*G*IT----H****",
        "DESCRIPTION": "Transport Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.8",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.TSPF",
        "PATH": "Warfighting Symbology/Ground Track/Installation"
      },
      {
        "SYMBOLID": "S*G*IX----H****",
        "DESCRIPTION": "Medical Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.9",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MEDF",
        "PATH": "Warfighting Symbology/Ground Track/Installation"
      },
      {
        "SYMBOLID": "S*G*IXH---H****",
        "DESCRIPTION": "Hospital",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.9.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.MEDF.HSP",
        "PATH": "Warfighting Symbology/Ground Track/Installation/Medical Facility"
      },
      {
        "SYMBOLID": "S*G*IC----H****",
        "DESCRIPTION": "Tented Camp",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.10",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.TNTCMP",
        "PATH": "WARFIGHTING SYMBOLS/GROUND TRACK/INSTALLATION"
      },
      {
        "SYMBOLID": "S*G*ICD---H****",
        "DESCRIPTION": "Tented Camp, Displaced Persons/Refugees",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.10.1",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.TNTCMP.DPRE",
        "PATH": "WARFIGHTING SYMBOLS/GROUND TRACK/INSTALLATION/Tented Camp"
      },
      {
        "SYMBOLID": "S*G*ICT---H****",
        "DESCRIPTION": "Tented Training Camp",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.10.2",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INK.INS.TNTCMP.TNG",
        "PATH": "WARFIGHTING SYMBOLS/GROUND TRACK/INSTALLATION/TENTED CAMP"
      },
      {
        "SYMBOLID": "S*G*IW----H****",
        "DESCRIPTION": "Warehouse/Storage Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.3.3.11",
        "ALPHAHIERARCHY": "WAR.GRDTRK.INS.WAREHS",
        "PATH": "WARFIGHTING SYMBOLS/GROUND TRACK/INSTALLATION"
      },
      {
        "SYMBOLID": "S*S*------*****",
        "DESCRIPTION": "Sea Surface Track",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4",
        "ALPHAHIERARCHY": "WAR.SSUF",
        "PATH": "Warfighting Symbology"
      },
      {
        "SYMBOLID": "S*S*C-----*****",
        "DESCRIPTION": "Sea Surface Track Combatant",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT",
        "PATH": "Warfighting Symbology/Sea Surface Track"
      },
      {
        "SYMBOLID": "S*S*CL----*****",
        "DESCRIPTION": "Line",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.LNE",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant"
      },
      {
        "SYMBOLID": "S*S*CLCV--*****",
        "DESCRIPTION": "Carrier",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.1.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.LNE.CRR",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Line"
      },
      {
        "SYMBOLID": "S*S*CLBB--*****",
        "DESCRIPTION": "Battleship",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.1.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.LNE.BBS",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Line"
      },
      {
        "SYMBOLID": "S*S*CLCC--*****",
        "DESCRIPTION": "Cruiser",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.1.3",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.LNE.CRU",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Line"
      },
      {
        "SYMBOLID": "S*S*CLDD--*****",
        "DESCRIPTION": "Destroyer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.1.4",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.LNE.DD",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Line"
      },
      {
        "SYMBOLID": "S*S*CLFF--*****",
        "DESCRIPTION": "Frigate/Corvette",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.1.5",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.LNE.FFR",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Line"
      },
      {
        "SYMBOLID": "S*S*CLLL--*****",
        "DESCRIPTION": "Littoral Combatant",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.1.6",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.LNE.LL",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Line"
      },
      {
        "SYMBOLID": "S*S*CLLLAS*****",
        "DESCRIPTION": "Antisubmarine Warfare Mission Package",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.1.6.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.LNE.LL.ASBW",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Line/Littoral Combatant"
      },
      {
        "SYMBOLID": "S*S*CLLLMI*****",
        "DESCRIPTION": "Mine Warfare Mission Package",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.1.6.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.LNE.LL.MNEW",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Line/Littoral Combatant"
      },
      {
        "SYMBOLID": "S*S*CLLLSU*****",
        "DESCRIPTION": "Surface Warfare (SUW) Mission Package",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.1.6.3",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.LNE.LL.SUW",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Line/Littoral Combatant"
      },
      {
        "SYMBOLID": "S*S*CA----*****",
        "DESCRIPTION": "Amphibious Warfare Ship",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.AMPWS",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant"
      },
      {
        "SYMBOLID": "S*S*CALA--*****",
        "DESCRIPTION": "Assault Vessel",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.2.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.AMPWS.ASTVES",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Amphibious Warfare Ship"
      },
      {
        "SYMBOLID": "S*S*CALS--*****",
        "DESCRIPTION": "Landing Ship",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.2.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.AMPWS.LNDSHP",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Amphibious Warfare Ship"
      },
      {
        "SYMBOLID": "S*S*CALSM-*****",
        "DESCRIPTION": "Landing Ship Medium",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.2.2.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.AMPWS.LNDSHP.MDM",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Amphibious Warfare Ship/Landing Ship"
      },
      {
        "SYMBOLID": "S*S*CALST-*****",
        "DESCRIPTION": "Landing Ship Tank",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.2.2.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.AMPWS.LNDSHP.TANK",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Amphibious Warfare Ship/Landing Ship"
      },
      {
        "SYMBOLID": "S*S*CALC--*****",
        "DESCRIPTION": "Landing Craft",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.2.3",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.AMPWS.LNDCRT",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Amphibious Warfare Ship"
      },
      {
        "SYMBOLID": "S*S*CM----*****",
        "DESCRIPTION": "Mine Warfare Vessel",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.3",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.MNEWV",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant"
      },
      {
        "SYMBOLID": "S*S*CMML--*****",
        "DESCRIPTION": "Minelayer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.3.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.MNEWV.MNELYR",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Mine Warfare Vessel"
      },
      {
        "SYMBOLID": "S*S*CMMS--*****",
        "DESCRIPTION": "Minesweeper",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.3.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.MNEWV.MNESWE",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Mine Warfare Vessel"
      },
      {
        "SYMBOLID": "S*S*CMMH--*****",
        "DESCRIPTION": "Minehunter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.3.3",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.MNEWV.MNEHNT",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Mine Warfare Vessel"
      },
      {
        "SYMBOLID": "S*S*CMMA--*****",
        "DESCRIPTION": "MCM Support",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.3.4",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.MNEWV.MCMSUP",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Mine Warfare Vessel"
      },
      {
        "SYMBOLID": "S*S*CP----*****",
        "DESCRIPTION": "Sea Surface Combatant Patrol",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.4",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.PAT",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant"
      },
      {
        "SYMBOLID": "S*S*CPSB--*****",
        "DESCRIPTION": "Antisubmarine Warfare",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.4.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.PAT.ASBW",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Sea Surface Combatant Patrol"
      },
      {
        "SYMBOLID": "S*S*CPSU--*****",
        "DESCRIPTION": "Antisurface Warfare",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.4.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.PAT.ASUW",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Sea Surface Combatant Patrol"
      },
      {
        "SYMBOLID": "S*S*CPSUM-*****",
        "DESCRIPTION": "Antisurface Warfare Antiship Missile",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.4.2.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.PAT.ASUW.ASMSL",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Patrol/Antisurface Warfare"
      },
      {
        "SYMBOLID": "S*S*CPSUT-*****",
        "DESCRIPTION": "Antisurface Warfare Torpedo",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.4.2.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.PAT.ASUW.TPD",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Patrol/Antisurface Warfare"
      },
      {
        "SYMBOLID": "S*S*CPSUG-*****",
        "DESCRIPTION": "Antisurface Warfare Gun",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.4.2.3",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.PAT.ASUW.GUN",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Patrol/Antisurface Warfare"
      },
      {
        "SYMBOLID": "S*S*CH----*****",
        "DESCRIPTION": "Combatant Hovercraft",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.5",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.HOV",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant"
      },
      {
        "SYMBOLID": "S*S*S-----*****",
        "DESCRIPTION": "Sea Surface Station",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.6",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.STN",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant"
      },
      {
        "SYMBOLID": "S*S*SP----*****",
        "DESCRIPTION": "Picket",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.6.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.STN.PKT",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Station"
      },
      {
        "SYMBOLID": "S*S*SA----*****",
        "DESCRIPTION": "ASW Ship",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.6.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.STN.ASWSHP",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Station"
      },
      {
        "SYMBOLID": "S*S*G-----*****",
        "DESCRIPTION": "Navy Group",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.7",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.NAVGRP",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant"
      },
      {
        "SYMBOLID": "S*S*GT----*****",
        "DESCRIPTION": "Navy Task Force",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.7.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.NAVGRP.NAVTF",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Navy Group"
      },
      {
        "SYMBOLID": "S*S*GG----*****",
        "DESCRIPTION": "Navy Task Group",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.7.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.NAVGRP.NAVTG",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Navy Group"
      },
      {
        "SYMBOLID": "S*S*GU----*****",
        "DESCRIPTION": "Navy Task Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.7.3",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.NAVGRP.NAVTU",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Navy Group"
      },
      {
        "SYMBOLID": "S*S*GC----*****",
        "DESCRIPTION": "Convoy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.7.4",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.NAVGRP.CNY",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Navy Group"
      },
      {
        "SYMBOLID": "S*S*CD----*****",
        "DESCRIPTION": "Surface Decoy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.8",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.SUFDCY",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant"
      },
      {
        "SYMBOLID": "S*S*CU----*****",
        "DESCRIPTION": "Unmanned Surface Vehicle (USV)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.9",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.USV",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/"
      },
      {
        "SYMBOLID": "S*S*CUM---*****",
        "DESCRIPTION": "USV Mine Countermeasures",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.9.1",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.USV.MNECM",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Unmanned Surface Vehicle (USV)"
      },
      {
        "SYMBOLID": "S*S*CUS---*****",
        "DESCRIPTION": "USV Antisubmarine Warfare",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.9.2",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.USV.ASBW",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Unmanned Surface Vehicle (USV)"
      },
      {
        "SYMBOLID": "S*S*CUN---*****",
        "DESCRIPTION": "USV Antisurface Warfare",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.9.3",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.USV.ASUW",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Unmanned Surface Vehicle (USV)"
      },
      {
        "SYMBOLID": "S*S*CUR---*****",
        "DESCRIPTION": "USV Remote Multimission Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.1.9.4",
        "ALPHAHIERARCHY": "WAR.SSUF.CBTT.USV.RMV",
        "PATH": "Warfighting Symbology/Sea Surface Track/Sea Surface Track Combatant/Unmanned Surface Vehicle (USV)"
      },
      {
        "SYMBOLID": "S*S*N-----*****",
        "DESCRIPTION": "Noncombatant",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.2",
        "ALPHAHIERARCHY": "WAR.SSUF.NCBTT",
        "PATH": "Warfighting Symbology/Sea Surface Track"
      },
      {
        "SYMBOLID": "S*S*NR----*****",
        "DESCRIPTION": "Underway Replenishment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.2.1",
        "ALPHAHIERARCHY": "WAR.SSUF.NCBTT.UWRPM",
        "PATH": "Warfighting Symbology/Sea Surface Track/Noncombatant"
      },
      {
        "SYMBOLID": "S*S*NF----*****",
        "DESCRIPTION": "Fleet Support",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.2.2",
        "ALPHAHIERARCHY": "WAR.SSUF.NCBTT.FLTSUP",
        "PATH": "Warfighting Symbology/Sea Surface Track/Noncombatant"
      },
      {
        "SYMBOLID": "S*S*NI----*****",
        "DESCRIPTION": "Intelligence",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.2.3",
        "ALPHAHIERARCHY": "WAR.SSUF.NCBTT.INT",
        "PATH": "Warfighting Symbology/Sea Surface Track/Noncombatant"
      },
      {
        "SYMBOLID": "S*S*NS----*****",
        "DESCRIPTION": "Service & Support Harbor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.2.4",
        "ALPHAHIERARCHY": "WAR.SSUF.NCBTT.SSH",
        "PATH": "Warfighting Symbology/Sea Surface Track/Noncombatant"
      },
      {
        "SYMBOLID": "S*S*NM----*****",
        "DESCRIPTION": "Hospital Ship",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.2.5",
        "ALPHAHIERARCHY": "WAR.SSUF.NCBTT.HSPSHP",
        "PATH": "Warfighting Symbology/Sea Surface Track/Noncombatant"
      },
      {
        "SYMBOLID": "S*S*NH----*****",
        "DESCRIPTION": "Noncombatant Hovercraft",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.2.6",
        "ALPHAHIERARCHY": "WAR.SSUF.NCBTT.HOV",
        "PATH": "Warfighting Symbology/Sea Surface Track/Noncombatant"
      },
      {
        "SYMBOLID": "S*S*NN----*****",
        "DESCRIPTION": "Noncombatant Station",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.2.7",
        "ALPHAHIERARCHY": "WAR.SSUF.NCBTT.STN",
        "PATH": "Warfighting Symbology/Sea Surface Track/Noncombatant"
      },
      {
        "SYMBOLID": "S*S*NNR---*****",
        "DESCRIPTION": "Rescue",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.2.7.1",
        "ALPHAHIERARCHY": "WAR.SSUF.NCBTT.STN.RSC",
        "PATH": "Warfighting Symbology/Sea Surface Track/Noncombatant/Station"
      },
      {
        "SYMBOLID": "S*S*X-----*****",
        "DESCRIPTION": "Non-Military",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "1.X.4.3",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL",
        "PATH": "Warfighting Symbology/Sea Surface Track"
      },
      {
        "SYMBOLID": "S*S*XM----*****",
        "DESCRIPTION": "Merchant",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.1",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.MCT",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military"
      },
      {
        "SYMBOLID": "S*S*XMC---*****",
        "DESCRIPTION": "Subsurface Non-military Cargo",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.1.1",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.MCT.CGO",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Merchant"
      },
      {
        "SYMBOLID": "S*S*XMR---*****",
        "DESCRIPTION": "Roll On/Roll Off",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.1.2",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.MCT.RORO",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Merchant"
      },
      {
        "SYMBOLID": "S*S*XMO---*****",
        "DESCRIPTION": "Oiler/Tanker",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.1.3",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.MCT.OLR",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Merchant"
      },
      {
        "SYMBOLID": "S*S*XMTU--*****",
        "DESCRIPTION": "Tug",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.1.4",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.MCT.TUG",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Merchant"
      },
      {
        "SYMBOLID": "S*S*XMF---*****",
        "DESCRIPTION": "Ferry",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.1.5",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.MCT.FRY",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Merchant"
      },
      {
        "SYMBOLID": "S*S*XMP---*****",
        "DESCRIPTION": "Passenger",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.1.6",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.MCT.PSG",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Merchant"
      },
      {
        "SYMBOLID": "S*S*XMH---*****",
        "DESCRIPTION": "Hazardous Materials (HAZMAT)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.1.7",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.MCT.HAZMAT",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Merchant"
      },
      {
        "SYMBOLID": "S*S*XMTO--*****",
        "DESCRIPTION": "Towing Vessel",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.1.8",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.MCT.TOWVES",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Merchant"
      },
      {
        "SYMBOLID": "S*S*XF----*****",
        "DESCRIPTION": "Fishing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.2",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.FSG",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military"
      },
      {
        "SYMBOLID": "S*S*XFDF--*****",
        "DESCRIPTION": "Drifter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.2.1",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.FSG.DRFT",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Fishing"
      },
      {
        "SYMBOLID": "S*S*XFDR--*****",
        "DESCRIPTION": "Dredge",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.2.2",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.FSG.DRG",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Fishing"
      },
      {
        "SYMBOLID": "S*S*XFTR--*****",
        "DESCRIPTION": "Trawler",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.2.3",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.FSG.TRW",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military/Fishing"
      },
      {
        "SYMBOLID": "S*S*XR----*****",
        "DESCRIPTION": "Leisure Craft",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.3",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.LESCRT",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military"
      },
      {
        "SYMBOLID": "S*S*XL----*****",
        "DESCRIPTION": "Law Enforcement Vessel",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.4",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.LAWENV",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military"
      },
      {
        "SYMBOLID": "S*S*XH----*****",
        "DESCRIPTION": "Non-military Hovercraft",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.3.5",
        "ALPHAHIERARCHY": "WAR.SSUF.NMIL.HOV",
        "PATH": "Warfighting Symbology/Sea Surface Track/Non-Military"
      },
      {
        "SYMBOLID": "S*S*O-----*****",
        "DESCRIPTION": "Own Track",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.4.4",
        "ALPHAHIERARCHY": "WAR.SSUF.OWN",
        "PATH": "Warfighting Symbology/Sea Surface Track"
      },
      {
        "SYMBOLID": "S*U*------*****",
        "DESCRIPTION": "Subsurface Track",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5",
        "ALPHAHIERARCHY": "WAR.SBSUF",
        "PATH": "Warfighting Symbology"
      },
      {
        "SYMBOLID": "S*U*S-----*****",
        "DESCRIPTION": "Submarine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB",
        "PATH": "Warfighting Symbology/Subsurface Track"
      },
      {
        "SYMBOLID": "S*U*SN----*****",
        "DESCRIPTION": "Nuclear Propulsion",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.NPRN",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine"
      },
      {
        "SYMBOLID": "S*U*SNF---*****",
        "DESCRIPTION": "Submarine Nuclear Surfaced",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.1.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.NPRN.SURF",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Nuclear Propulsion"
      },
      {
        "SYMBOLID": "S*U*SNA---*****",
        "DESCRIPTION": "Submarine Nuclear Attack (SSN)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.1.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.NPRN.ATK",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Nuclear Propulsion"
      },
      {
        "SYMBOLID": "S*U*SNM---*****",
        "DESCRIPTION": "Submarine Nuclear Missile Type Unknown",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.1.3",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.NPRN.MSL",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Nuclear Propulsion"
      },
      {
        "SYMBOLID": "S*U*SNG---*****",
        "DESCRIPTION": "Submarine Nuclear Guided Missile (SSGN)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.1.4",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.NPRN.GDD",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Nuclear Propulsion"
      },
      {
        "SYMBOLID": "S*U*SNB---*****",
        "DESCRIPTION": "Ballistic Missile Submarine (SSB)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.1.5",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.NPRN.BLST",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Nuclear Propulsion"
      },
      {
        "SYMBOLID": "S*U*SC----*****",
        "DESCRIPTION": "Conventional Propulsion",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.CNVPRN",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine"
      },
      {
        "SYMBOLID": "S*U*SCF---*****",
        "DESCRIPTION": "Conventional Propulsion Surfaced",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.2.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.CNVPRN.SURF",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Conventional Propulsion"
      },
      {
        "SYMBOLID": "S*U*SCA---*****",
        "DESCRIPTION": "Attack Submarine (SS)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.2.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.CNVPRN.ATK",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Conventional Propulsion"
      },
      {
        "SYMBOLID": "S*U*SCM---*****",
        "DESCRIPTION": "Conventional Propulsion Missile Submarine (TYPE UNKNOWN)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.2.3",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.CNVPRN.MSL",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Conventional Propulsion"
      },
      {
        "SYMBOLID": "S*U*SCG---*****",
        "DESCRIPTION": "Guided Missile Submarine (SSG)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.2.4",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.CNVPRN.GDD",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Conventional Propulsion"
      },
      {
        "SYMBOLID": "S*U*SCB---*****",
        "DESCRIPTION": "Conventional Propulsion Ballistic Missile (SSB)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.2.5",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.CNVPRN.BLST",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Conventional Propulsion"
      },
      {
        "SYMBOLID": "S*U*SO----*****",
        "DESCRIPTION": "Other Submersible",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.3",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.OTH",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine"
      },
      {
        "SYMBOLID": "S*U*SOF---*****",
        "DESCRIPTION": "Other Submersible Surfaced",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.3.0",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.OTH.SURF",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Other Submersible"
      },
      {
        "SYMBOLID": "S*U*SU----*****",
        "DESCRIPTION": "Unmanned Underwater Vehicle (UUV)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.3.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.UUV",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Other Submersible"
      },
      {
        "SYMBOLID": "S*U*SUM---*****",
        "DESCRIPTION": "UUV Mine Warfare",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.3.1.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.UUV.MNEW",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Other Submersible/Unmanned Underwater Vehicle (UUV)"
      },
      {
        "SYMBOLID": "S*U*SUS---*****",
        "DESCRIPTION": "UUV Antisubmarine Warfare",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.3.1.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.UUV.ASBW",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Other Submersible/Unmanned Underwater Vehicle (UUV)"
      },
      {
        "SYMBOLID": "S*U*SUN---*****",
        "DESCRIPTION": "UUV Antisurface Warfare",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.3.1.3",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.UUV.ASUW",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Other Submersible/Unmanned Underwater Vehicle (UUV)"
      },
      {
        "SYMBOLID": "S*U*SF----*****",
        "DESCRIPTION": "Submarine Surfaced",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.5",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.SURF",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Station"
      },
      {
        "SYMBOLID": "S*U*SB----*****",
        "DESCRIPTION": "Submarine Bottomed",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.6",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.BOTTMD",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Station"
      },
      {
        "SYMBOLID": "S*U*SR----*****",
        "DESCRIPTION": "Submarine Certsub",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.7",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.CRT",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Station"
      },
      {
        "SYMBOLID": "S*U*SX----*****",
        "DESCRIPTION": "Non Submarine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.8",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.NONSUB",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Station"
      },
      {
        "SYMBOLID": "S*U*S1----*****",
        "DESCRIPTION": "Possub-1",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.9",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.POSS1",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Station"
      },
      {
        "SYMBOLID": "S*U*S2----*****",
        "DESCRIPTION": "Possub-2",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.10",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.POSS2",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Station"
      },
      {
        "SYMBOLID": "S*U*S3----*****",
        "DESCRIPTION": "Possub-3",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.11",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.POSS3",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Station"
      },
      {
        "SYMBOLID": "S*U*S4----*****",
        "DESCRIPTION": "Possub-4",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.12",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.POSS4",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Station"
      },
      {
        "SYMBOLID": "S*U*SL----*****",
        "DESCRIPTION": "ProbSub",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.13",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.PRBSUB",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Station"
      },
      {
        "SYMBOLID": "S*U*SK----*****",
        "DESCRIPTION": "Snorkeling",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.1.14",
        "ALPHAHIERARCHY": "WAR.SBSUF.SUB.SNORKL",
        "PATH": "Warfighting Symbology/Subsurface Track/Submarine/Station"
      },
      {
        "SYMBOLID": "S*U*W-----*****",
        "DESCRIPTION": "Underwater Weapon",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN",
        "PATH": "Warfighting Symbology/Subsurface Track"
      },
      {
        "SYMBOLID": "S*U*WT----*****",
        "DESCRIPTION": "Torpedo",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.TPD",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon"
      },
      {
        "SYMBOLID": "S*U*WM----*****",
        "DESCRIPTION": "Sea Mine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon"
      },
      {
        "SYMBOLID": "S*U*WMD---*****",
        "DESCRIPTION": "Sea Mine Neutralized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.NTRLZD",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMG---*****",
        "DESCRIPTION": "Sea Mine (Ground)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMG",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMGD--*****",
        "DESCRIPTION": "Sea Mine (Ground) Neutralized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.2.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMG.NTRLZD",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Ground)"
      },
      {
        "SYMBOLID": "S*U*WMGX--*****",
        "DESCRIPTION": "Ground (Bottom) Excercise Mine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.2.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMG.EXER",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Ground)"
      },
      {
        "SYMBOLID": "S*U*WMGE--*****",
        "DESCRIPTION": "Ground (Bottom) MILEC",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.2.3",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMG.MILEC",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Ground)"
      },
      {
        "SYMBOLID": "S*U*WMGC--*****",
        "DESCRIPTION": "Ground (Bottom) MILCO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.2.4",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMG.MILCO",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Ground)"
      },
      {
        "SYMBOLID": "S*U*WMGR--*****",
        "DESCRIPTION": "Ground (Bottom) Negative Reacquisition",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.2.5",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMG.NGREAC",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Ground)"
      },
      {
        "SYMBOLID": "S*U*WMGO--*****",
        "DESCRIPTION": "Ground (Bottom) Non-Mine Mike-Like Contact",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.2.6",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMG.NMMLCO",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Ground)"
      },
      {
        "SYMBOLID": "S*U*WMM---*****",
        "DESCRIPTION": "Sea Mine (Moored)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.3",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMM",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMMD--*****",
        "DESCRIPTION": "Sea Mine (Moored) Neutralized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.3.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMM.NTRLZD",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Moored)"
      },
      {
        "SYMBOLID": "S*U*WMMX--*****",
        "DESCRIPTION": "Moored Exercise Mine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.3.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMM.EXER",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Moored)"
      },
      {
        "SYMBOLID": "S*U*WMME--*****",
        "DESCRIPTION": "Moored MILEC",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.3.3",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMM.MILEC",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Moored)"
      },
      {
        "SYMBOLID": "S*U*WMMC--*****",
        "DESCRIPTION": "Moored MILCO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.3.4",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMM.MILCO",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Moored)"
      },
      {
        "SYMBOLID": "S*U*WMMR--*****",
        "DESCRIPTION": "Moored Negative Reacquisition",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.3.5",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMM.NGREAC",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Moored)"
      },
      {
        "SYMBOLID": "S*U*WMMO--*****",
        "DESCRIPTION": "Moored Non-Mine Mine-Like Object",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.3.6",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMM.NMMLCO",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Moored)"
      },
      {
        "SYMBOLID": "S*U*WMF---*****",
        "DESCRIPTION": "Sea Mine (Floating)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.4",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMF",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMFD--*****",
        "DESCRIPTION": "Sea Mine (Floating) Neutralized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.4.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMF.DLT",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Floating)"
      },
      {
        "SYMBOLID": "S*U*WMFX--*****",
        "DESCRIPTION": "Floating Exercise Mine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.4.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMF.EXER",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Floating)"
      },
      {
        "SYMBOLID": "S*U*WMFE--*****",
        "DESCRIPTION": "Floating MILEC",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.4.3",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMF.MILEC",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Floating)"
      },
      {
        "SYMBOLID": "S*U*WMFC--*****",
        "DESCRIPTION": "Floating MILCO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.4.4",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMF.MILCO",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Floating)"
      },
      {
        "SYMBOLID": "S*U*WMFR--*****",
        "DESCRIPTION": "Floating Negative Reacquisition",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.4.5",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMF.NGREAC",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Floating)"
      },
      {
        "SYMBOLID": "S*U*WMFO--*****",
        "DESCRIPTION": "Floating Non-Mine Mine-Like Contact",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.4.6",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMF.NMMLCO",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (Floating)"
      },
      {
        "SYMBOLID": "S*U*WMO---*****",
        "DESCRIPTION": "Sea Mine (Other Position)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.5",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMOP",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMOD--*****",
        "DESCRIPTION": "Sea Mine (Other Position) Neutralized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.5.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.SMOP.NTRLZD",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Sea Mine (In Other Position)"
      },
      {
        "SYMBOLID": "S*U*WMX---*****",
        "DESCRIPTION": "General Exercise Mine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.6",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.EXER",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WME---*****",
        "DESCRIPTION": "General MILEC",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.7",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.MILEC",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMA---*****",
        "DESCRIPTION": "General Mine Anchor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.8",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.ANCHOR",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMC---*****",
        "DESCRIPTION": "General MILCO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.9",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.MILCO",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMR---*****",
        "DESCRIPTION": "General Negative Reacquisition",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.10",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.NGREAC",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMB---*****",
        "DESCRIPTION": "General Obstructor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.11",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.OBSTRC",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMBD--*****",
        "DESCRIPTION": "General Obstructor Neutralized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.11.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.OBSTRC.NTRLZD",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/General Obstructor"
      },
      {
        "SYMBOLID": "S*U*WMN---*****",
        "DESCRIPTION": "General Non-Mine Mine-Like Object",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.12",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.NMMLCO",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMS---*****",
        "DESCRIPTION": "Rising Mine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.13",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.RISING",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine"
      },
      {
        "SYMBOLID": "S*U*WMSX--*****",
        "DESCRIPTION": "Rising Exercise Mine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.13.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.RISING.EXER",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Rising Mine"
      },
      {
        "SYMBOLID": "S*U*WMSD--*****",
        "DESCRIPTION": "Rising Mine Neutralized",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.2.2.13.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2WPN.SMNE.RISING.NTRLZD",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Weapon/Sea Mine/Rising Mine"
      },
      {
        "SYMBOLID": "S*U*WD----*****",
        "DESCRIPTION": "Underwater Decoy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.3",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2DCY",
        "PATH": "Warfighting Symbology/Subsurface Track"
      },
      {
        "SYMBOLID": "S*U*WDM---*****",
        "DESCRIPTION": "Sea Mine Decoy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.3.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2DCY.SMDCY",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Decoy"
      },
      {
        "SYMBOLID": "S*U*WDMG--*****",
        "DESCRIPTION": "Ground (Bottom) Decoy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.3.1.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2DCY.SMDCY.GRND",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Decoy/Sea Mine Decoy"
      },
      {
        "SYMBOLID": "S*U*WDMM--*****",
        "DESCRIPTION": "Moored Decoy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.3.1.2",
        "ALPHAHIERARCHY": "WAR.SBSUF.UH2DCY.SMDCY.MOORED",
        "PATH": "Warfighting Symbology/Subsurface Track/Underwater Decoy/Sea Mine Decoy"
      },
      {
        "SYMBOLID": "S*U*N-----*****",
        "DESCRIPTION": "Non-Submarine",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "1.X.5.4",
        "ALPHAHIERARCHY": "WAR.SBSUF.NSUB",
        "PATH": "Warfighting Symbology/Subsurface Track"
      },
      {
        "SYMBOLID": "S*U*ND----*****",
        "DESCRIPTION": "Diver",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.4.1",
        "ALPHAHIERARCHY": "WAR.SBSUF.NSUB.DVR",
        "PATH": "Warfighting Symbology/Subsurface Track/Non-Submarine"
      },
      {
        "SYMBOLID": "S*U*E-----*****",
        "DESCRIPTION": "Environmental Report Location",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.5",
        "ALPHAHIERARCHY": "WAR.SBSUF.ERL",
        "PATH": "WARFIGHTING SYMBOLS/SUBSURFACE TRACK"
      },
      {
        "SYMBOLID": "S*U*V-----*****",
        "DESCRIPTION": "Dive Report Location",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.6",
        "ALPHAHIERARCHY": "WAR.SBSUF.DRL",
        "PATH": "WARFIGHTING SYMBOLS/SUBSURFACE TRACK"
      },
      {
        "SYMBOLID": "S*U*X-----*****",
        "DESCRIPTION": "Unexploded Ordnance Area (Subsurface)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.5.7",
        "ALPHAHIERARCHY": "WAR.SBSUF.UXO",
        "PATH": "WARFIGHTING SYMBOLS/SUBSURFACE TRACK"
      },
      {
        "SYMBOLID": "S*F*------*****",
        "DESCRIPTION": "Special Operations Forces (SOF) Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6",
        "ALPHAHIERARCHY": "WAR.SOFUNT",
        "PATH": "Warfighting Symbology"
      },
      {
        "SYMBOLID": "S*F*A-----*****",
        "DESCRIPTION": "SOF Unit Aviation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit"
      },
      {
        "SYMBOLID": "S*F*AF----*****",
        "DESCRIPTION": "SOF Unit Fixed Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.1",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.FIXD",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation"
      },
      {
        "SYMBOLID": "S*F*AFA---*****",
        "DESCRIPTION": "SOF Unit Fixed Wing Attack",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.1.1",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.FIXD.ATK",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Fixed Wing"
      },
      {
        "SYMBOLID": "S*F*AFK---*****",
        "DESCRIPTION": "SOF Unit Refuel",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.1.2",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.FIXD.RFE",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Fixed Wing"
      },
      {
        "SYMBOLID": "S*F*AFU---*****",
        "DESCRIPTION": "SOF Unit Fixed Wing Utility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.1.3",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.FIXD.UTY",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Fixed Wing"
      },
      {
        "SYMBOLID": "S*F*AFUL--*****",
        "DESCRIPTION": "SOF Unit Fixed Wing Utility (Light)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.1.3.1",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.FIXD.UTY.LIT",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Fixed Wing/SOF Unit Fixed Wing Utility"
      },
      {
        "SYMBOLID": "S*F*AFUM--*****",
        "DESCRIPTION": "SOF Unit Fixed Wing Utility (Medium)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.1.3.2",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.FIXD.UTY.MDM",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Fixed Wing/SOF Unit Fixed Wing Utility"
      },
      {
        "SYMBOLID": "S*F*AFUH--*****",
        "DESCRIPTION": "SOF Unit Fixed Wing Utility (Heavy)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.1.3.3",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.FIXD.UTY.HVY",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Fixed Wing/SOF Unit Fixed Wing Utility"
      },
      {
        "SYMBOLID": "S*F*AV----*****",
        "DESCRIPTION": "SOF Unit V/STOL",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.2",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.VSTOL",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation"
      },
      {
        "SYMBOLID": "S*F*AH----*****",
        "DESCRIPTION": "SOF Unit Rotary Wing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.3",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.ROT",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation"
      },
      {
        "SYMBOLID": "S*F*AHH---*****",
        "DESCRIPTION": "SOF Unit Rotary Wing Combat Search & Rescue",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.3.1",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.ROT.CSAR",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Rotary Wing"
      },
      {
        "SYMBOLID": "S*F*AHA---*****",
        "DESCRIPTION": "SOF Unit Rotary Wing Attack",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.3.2",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.ROT.ATK",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Rotary Wing"
      },
      {
        "SYMBOLID": "S*F*AHU---*****",
        "DESCRIPTION": "SOF Unit Rotary Wing Utility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.3.3",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.ROT.UTY",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Rotary Wing"
      },
      {
        "SYMBOLID": "S*F*AHUL--*****",
        "DESCRIPTION": "SOF Unit Rotary Wing Utility (Light)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.3.3.1",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.ROT.UTY.LIT",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Rotary Wing/SOF Unit Rotary Wing Utility"
      },
      {
        "SYMBOLID": "S*F*AHUM--*****",
        "DESCRIPTION": "SOF Unit Rotary Wing Utility (Medium)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.3.3.2",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.ROT.UTY.MDM",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Rotary Wing/SOF Unit Rotary Wing Utility"
      },
      {
        "SYMBOLID": "S*F*AHUH--*****",
        "DESCRIPTION": "SOF Unit Rotary Wing Utility (Heavy)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.1.3.3.3",
        "ALPHAHIERARCHY": "WAR.SOFUNT.AVN.ROT.UTY.HVY",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Aviation/SOF Unit Rotary Wing/SOF Unit Rotary Wing Utility"
      },
      {
        "SYMBOLID": "S*F*N-----*****",
        "DESCRIPTION": "SOF Unit SOF Unit Naval",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.2",
        "ALPHAHIERARCHY": "WAR.SOFUNT.NAV",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit"
      },
      {
        "SYMBOLID": "S*F*NS----*****",
        "DESCRIPTION": "SOF Unit Seal",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.2.1",
        "ALPHAHIERARCHY": "WAR.SOFUNT.NAV.SEAL",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit SOF Unit Naval"
      },
      {
        "SYMBOLID": "S*F*NU----*****",
        "DESCRIPTION": "SOF Unit Underwater Demolition Team",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.2.2",
        "ALPHAHIERARCHY": "WAR.SOFUNT.NAV.UH2DML",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit SOF Unit Naval"
      },
      {
        "SYMBOLID": "S*F*NB----*****",
        "DESCRIPTION": "SOF Unit Special Boat",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.2.3",
        "ALPHAHIERARCHY": "WAR.SOFUNT.NAV.SBT",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit SOF Unit Naval"
      },
      {
        "SYMBOLID": "S*F*NN----*****",
        "DESCRIPTION": "SOF Unit Special SSNR",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.2.4",
        "ALPHAHIERARCHY": "WAR.SOFUNT.NAV.SSSNR",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit SOF Unit Naval"
      },
      {
        "SYMBOLID": "S*F*G-----*****",
        "DESCRIPTION": "SOF Unit Ground",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.3",
        "ALPHAHIERARCHY": "WAR.SOFUNT.GRD",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit"
      },
      {
        "SYMBOLID": "S*F*GS----*****",
        "DESCRIPTION": "SOF Unit Special Forces",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.3.1",
        "ALPHAHIERARCHY": "WAR.SOFUNT.GRD.SOF",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Ground"
      },
      {
        "SYMBOLID": "S*F*GR----*****",
        "DESCRIPTION": "SOF Unit Ranger",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.3.2",
        "ALPHAHIERARCHY": "WAR.SOFUNT.GRD.RGR",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Ground"
      },
      {
        "SYMBOLID": "S*F*GP----*****",
        "DESCRIPTION": "SOF Unit Psychological Operations (PSYOP)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.3.3",
        "ALPHAHIERARCHY": "WAR.SOFUNT.GRD.PSYOP",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Ground"
      },
      {
        "SYMBOLID": "S*F*GPA---*****",
        "DESCRIPTION": "SOF Unit Fixed Wing Aviation (PSYOP)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.3.3.1",
        "ALPHAHIERARCHY": "WAR.SOFUNT.GRD.PSYOP.FIXAVN",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Ground/SOF Unit Psychological Operations (PSYOP)"
      },
      {
        "SYMBOLID": "S*F*GC----*****",
        "DESCRIPTION": "SOF Unit Civil Affairs",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.3.4",
        "ALPHAHIERARCHY": "WAR.SOFUNT.GRD.CVLAFF",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit/SOF Unit Ground"
      },
      {
        "SYMBOLID": "S*F*B-----*****",
        "DESCRIPTION": "SOF Unit Support",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.6.4",
        "ALPHAHIERARCHY": "WAR.SOFUNT.SUP",
        "PATH": "Warfighting Symbology/Special Operations Forces (SOF) Unit"
      },
      {
        "SYMBOLID": "S*Z*------*****",
        "DESCRIPTION": "Unknown Battle Dimension",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "1.X.7",
        "ALPHAHIERARCHY": "UNK",
        "PATH": "Warfighting Symbology"
      },
      {
        "SYMBOLID": "I*-*--------***",
        "DESCRIPTION": "Signals Intelligence",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X",
        "ALPHAHIERARCHY": "SIGINT"
      },
      {
        "SYMBOLID": "I*P*--------***",
        "DESCRIPTION": "Space Track",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.1",
        "ALPHAHIERARCHY": "SIGINT.SPC",
        "PATH": "Signals Intelligence"
      },
      {
        "SYMBOLID": "I*P*S-------***",
        "DESCRIPTION": "Signal Intercept",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.1.1",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC",
        "PATH": "Signals Intelligence/Space Track"
      },
      {
        "SYMBOLID": "I*P*SC------***",
        "DESCRIPTION": "Communications",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.1.1.1",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.COMM",
        "PATH": "Signals Intelligence/Space Track/Signal Intercept"
      },
      {
        "SYMBOLID": "I*P*SCD-----***",
        "DESCRIPTION": "Satellite Down-Link",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.1.1.1.1",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.COMM.SATDL",
        "PATH": "Signals Intelligence/Space Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*P*SR------***",
        "DESCRIPTION": "Radar(Signal Intercept)",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.1.1.2",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.RAD",
        "PATH": "Signals Intelligence/Space Track/Signal Intercept"
      },
      {
        "SYMBOLID": "I*P*SRD-----***",
        "DESCRIPTION": "Data Transmission(SPACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.1.1.2.1",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.RAD.DATTMN",
        "PATH": "Signals Intelligence/Space Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*P*SRE-----***",
        "DESCRIPTION": "Earth Surveillance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.1.1.2.2",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.RAD.ERHSVL",
        "PATH": "Signals Intelligence/Space Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*P*SRI-----***",
        "DESCRIPTION": "IFF (Transponder)(SPACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.1.1.2.3",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.RAD.IFF",
        "PATH": "Signals Intelligence/Space Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*P*SRM-----***",
        "DESCRIPTION": "Multi-function(SPACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.1.1.2.4",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.RAD.MFN",
        "PATH": "Signals Intelligence/Space Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*P*SRT-----***",
        "DESCRIPTION": "Target Acquisition(Space Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.1.1.2.5",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.RAD.TGTAQ",
        "PATH": "Signals Intelligence/Space Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*P*SRS-----***",
        "DESCRIPTION": "Space",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.1.1.2.6",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.RAD.SPC",
        "PATH": "Signals Intelligence/Space Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*P*SRU-----***",
        "DESCRIPTION": "Unknown(Space Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.1.1.2.7",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.RAD.UNK",
        "PATH": "Signals Intelligence/Space Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*--------***",
        "DESCRIPTION": "Air Track",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.2",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK",
        "PATH": "Signals Intelligence"
      },
      {
        "SYMBOLID": "I*A*S-------***",
        "DESCRIPTION": "Signal Intercept",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.2.1",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC",
        "PATH": "Signals Intelligence/Air Track"
      },
      {
        "SYMBOLID": "I*A*SC------***",
        "DESCRIPTION": "Communications",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.2.1.1",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.COMM",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept"
      },
      {
        "SYMBOLID": "I*A*SCC-----***",
        "DESCRIPTION": "Cellular/Mobile(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.1.1",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.COMM.CELL",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*A*SCO-----***",
        "DESCRIPTION": "Omni-Line-Of-Sight (LOS)(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.1.2",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.COMM.OLOS",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*A*SCP-----***",
        "DESCRIPTION": "Point-To-Point Line-Of-Sight (LOS)(Air Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.1.3",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.COMM.PTPLOS",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*A*SCS-----***",
        "DESCRIPTION": "Satellite Up-Link(Air Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.1.4",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.COMM.SATUL",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*A*SR------***",
        "DESCRIPTION": "Radar",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.2.1.2",
        "ALPHAHIERARCHY": "SIGINT.SPC.SIGINC.RAD",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept"
      },
      {
        "SYMBOLID": "I*A*SRAI----***",
        "DESCRIPTION": "Airborne Intercept",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.1",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.ABNINC",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRAS----***",
        "DESCRIPTION": "Airborne Search and Bombing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.2",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.ABNSB",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRC-----***",
        "DESCRIPTION": "Controlled Intercept(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.3",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.CTDINC",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRD-----***",
        "DESCRIPTION": "Data Transmission(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.4",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.DATTMN",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRE-----***",
        "DESCRIPTION": "Early Warning(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.5",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.EW",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRF-----***",
        "DESCRIPTION": "Fire Control(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.6",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.FIRCTL",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRI-----***",
        "DESCRIPTION": "IFF (Transponder)(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.7",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.IFF",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRMA----***",
        "DESCRIPTION": "Missile Acquisition(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.8",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.MSLAQ",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRMD----***",
        "DESCRIPTION": "Missile Downlink",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.9",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.MSLDL",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRMG----***",
        "DESCRIPTION": "Missile Guidance(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.10",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.MSLGDN",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRMT----***",
        "DESCRIPTION": "Missile Tracking(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.11",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.MSLTRK",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRMF----***",
        "DESCRIPTION": "Multi-Function(AIR TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.12",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.MFN",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRTI----***",
        "DESCRIPTION": "Target Illuminator(Air Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.13",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.TGTILL",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRTA----***",
        "DESCRIPTION": "Target Acquisition(Air Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.14",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.TGTAQ",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRTT----***",
        "DESCRIPTION": "Target Tracking(Air Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.15",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.TGTTRK",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*A*SRU-----***",
        "DESCRIPTION": "Unknown(Air Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.2.1.2.16",
        "ALPHAHIERARCHY": "SIGINT.AIRTRK.SIGINC.RAD.UNK",
        "PATH": "Signals Intelligence/Air Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*--------***",
        "DESCRIPTION": "Ground Track",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.3",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK",
        "PATH": "Signals Intelligence"
      },
      {
        "SYMBOLID": "I*G*S-------***",
        "DESCRIPTION": "Signal Intercept",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.3.1",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC",
        "PATH": "Signals Intelligence/Ground Track"
      },
      {
        "SYMBOLID": "I*G*SC------***",
        "DESCRIPTION": "Communications",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.3.1.1",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.COMM",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept"
      },
      {
        "SYMBOLID": "I*G*SCC-----***",
        "DESCRIPTION": "Cellular/Mobile(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.1.1",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.COMM.CELL",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*G*SCO-----***",
        "DESCRIPTION": "Omni-Line-Of-Sight (LOS)(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.1.2",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.COMM.OLOS",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*G*SCP-----***",
        "DESCRIPTION": "Point-To-Point Line-Of-Sight (LOS)(Ground Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.1.3",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.COMM.PTPLOS",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*G*SCS-----***",
        "DESCRIPTION": "Satellite Up-Link(Ground Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.1.4",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.COMM.SATUL",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*G*SCT-----***",
        "DESCRIPTION": "Tropospheric Scatter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.1.5",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.COMM.TPSSCT",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*G*SR------***",
        "DESCRIPTION": "Radar(Signals Intelligence)",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.3.1.2",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept"
      },
      {
        "SYMBOLID": "I*G*SRAT----***",
        "DESCRIPTION": "Air Traffic Control(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.1",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.ATCTL",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRAA----***",
        "DESCRIPTION": "Anti-Aircraft(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.2",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.AAC",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRB-----***",
        "DESCRIPTION": "Battlefield Surveillance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.3",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.BTFSVL",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRCS----***",
        "DESCRIPTION": "Coastal Surveillance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.4",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.CSTSVL",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRCA----***",
        "DESCRIPTION": "Controlled Approach(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.5",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.CTDAPP",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRD-----***",
        "DESCRIPTION": "Data Transmission(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.6",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.DATTMN",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRE-----***",
        "DESCRIPTION": "Early Warning(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.7",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.EW",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRF-----***",
        "DESCRIPTION": "Fire Control(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.8",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.FIRCTL",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRH-----***",
        "DESCRIPTION": "Height Finding(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.9",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.HGTFDG",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRI-----***",
        "DESCRIPTION": "Indentification Friend/Foe (Interrogator)(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.10",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.IDFF",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRMM----***",
        "DESCRIPTION": "Meteorological (Military)(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.11",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.METO",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRMA----***",
        "DESCRIPTION": "Missile Acquisition(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.12",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.MSLAQ",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRMG----***",
        "DESCRIPTION": "Missile Guidance(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.13",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.MSLGDN",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRMT----***",
        "DESCRIPTION": "Missile Tracking(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.14",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.MSLTRK",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRMF----***",
        "DESCRIPTION": "Multi-Function(GROUND TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.15",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.MFN",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRS-----***",
        "DESCRIPTION": "Shell Tracking",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.16",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.SHETKG",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRTA----***",
        "DESCRIPTION": "Target Acquisition(Radar)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.17",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.TGTAQ",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRTI----***",
        "DESCRIPTION": "Target Illuminator(Ground Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.18",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.TGTILL",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRTT----***",
        "DESCRIPTION": "Target Tracking(Ground Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.19",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.TGTTRK",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*G*SRU-----***",
        "DESCRIPTION": "Unknown(Ground Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.3.1.2.20",
        "ALPHAHIERARCHY": "SIGINT.GRDTRK.SIGINC.RAD.UNK",
        "PATH": "Signals Intelligence/Ground Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*--------***",
        "DESCRIPTION": "Sea Surface Track",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.4",
        "ALPHAHIERARCHY": "SIGINT.SSUF",
        "PATH": "Signals Intelligence"
      },
      {
        "SYMBOLID": "I*S*S-------***",
        "DESCRIPTION": "Signal Intercept",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.4.1",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC",
        "PATH": "Signals Intelligence/Sea Surface Track"
      },
      {
        "SYMBOLID": "I*S*SC------***",
        "DESCRIPTION": "Communications",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.4.1.1",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.COMM",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept"
      },
      {
        "SYMBOLID": "I*S*SCC-----***",
        "DESCRIPTION": "Cellular/Mobile(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.1.1",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.COMM.CELL",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*S*SCO-----***",
        "DESCRIPTION": "Omni-Line-Of-Sight (LOS)(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.1.2",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.COMM.OLOS",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*S*SCP-----***",
        "DESCRIPTION": "Point-To-Point Line-Of-Sight (LOS)(Sea Surface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.1.3",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.COMM.PTPLOS",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*S*SCS-----***",
        "DESCRIPTION": "Satellite Up-Link(Sea Surface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.1.4",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.COMM.SATUL",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*S*SR------***",
        "DESCRIPTION": "Radar(Sea Surface Track)",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.4.1.2",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept"
      },
      {
        "SYMBOLID": "I*S*SRAT----***",
        "DESCRIPTION": "Air Traffic Control(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.1",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.ATCTL",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRAA----***",
        "DESCRIPTION": "Anti-Aircraft(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.2",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.AAC",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRCA----***",
        "DESCRIPTION": "Controlled Approach(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.3",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.CTDAPP",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRCI----***",
        "DESCRIPTION": "Controlled Intercept(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.4",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.CTDINC",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRD-----***",
        "DESCRIPTION": "Data Transmission(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.5",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.DATTMN",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRE-----***",
        "DESCRIPTION": "Early Warning(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.6",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.EW",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRF-----***",
        "DESCRIPTION": "Fire Control(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.7",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.FIRCTL",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRH-----***",
        "DESCRIPTION": "Height Finding(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.8",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.HGTFDG",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRI-----***",
        "DESCRIPTION": "Indentification Friend/Foe (Interrogator)(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.9",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.IDFF",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRMM----***",
        "DESCRIPTION": "Meteorological (Military)(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.10",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.METO",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRMA----***",
        "DESCRIPTION": "Missile Acquisition(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.11",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.MSLAQ",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRMG----***",
        "DESCRIPTION": "Missile Guidance(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.12",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.MSLGDN",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRMT----***",
        "DESCRIPTION": "Missile Tracking(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.13",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.MSLTRK",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRMF----***",
        "DESCRIPTION": "Multi-Function(SEA SURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.14",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.MFN",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRS-----***",
        "DESCRIPTION": "Surface Search(Sea Surface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.15",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.SUFSRH",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRTA----***",
        "DESCRIPTION": "Target Acquisition(Sea Surface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.16",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.TGTAQ",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRTI----***",
        "DESCRIPTION": "Target Illuminator(Sea Surface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.17",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.TGTILL",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRTT----***",
        "DESCRIPTION": "Target Tracking(Sea Surface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.18",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.TGTTRK",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*S*SRU-----***",
        "DESCRIPTION": "Unknown(Sea Surface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.4.1.2.19",
        "ALPHAHIERARCHY": "SIGINT.SSUF.SIGINC.RAD.UNK",
        "PATH": "Signals Intelligence/Sea Surface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*U*--------***",
        "DESCRIPTION": "Subsurface Track",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.5",
        "ALPHAHIERARCHY": "SIGINT.SBSUF",
        "PATH": "Signals Intelligence"
      },
      {
        "SYMBOLID": "I*U*S-------***",
        "DESCRIPTION": "Signal Intercept",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.5.1",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC",
        "PATH": "Signals Intelligence/Subsurface Track"
      },
      {
        "SYMBOLID": "I*U*SC------***",
        "DESCRIPTION": "Communications",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.5.1.1",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.COMM",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept"
      },
      {
        "SYMBOLID": "I*U*SCO-----***",
        "DESCRIPTION": "Omni-Line-Of-Sight (LOS)(SUBSURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.5.1.1.1",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.COMM.OLOS",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*U*SCP-----***",
        "DESCRIPTION": "Point-To-Point Line-Of-Sight (LOS)(Subsurface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.5.1.1.2",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.COMM.PTPLOS",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*U*SCS-----***",
        "DESCRIPTION": "Satellite Up-Link(Subsurface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.5.1.1.3",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.COMM.SATUL",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept/Communications"
      },
      {
        "SYMBOLID": "I*U*SR------***",
        "DESCRIPTION": "Radar(Subsurface Track)",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "4.X.5.1.2",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.RAD",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept"
      },
      {
        "SYMBOLID": "I*U*SRD-----***",
        "DESCRIPTION": "Data Transmission(SUBSURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.5.1.2.1",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.RAD.DATTMN",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*U*SRE-----***",
        "DESCRIPTION": "Early Warning(SUBSURFACE TRACK)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.5.1.2.2",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.RAD.EW",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*U*SRM-----***",
        "DESCRIPTION": "Multi-Function(Subsurface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.5.1.2.3",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.RAD.MFN",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*U*SRS-----***",
        "DESCRIPTION": "Surface Search(Subsurface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.5.1.2.4",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.RAD.SUFSRH",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*U*SRT-----***",
        "DESCRIPTION": "Target Acquisition(Subsurface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.5.1.2.5",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.RAD.TGTAQ",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "I*U*SRU-----***",
        "DESCRIPTION": "Unknown(Subsurface Track)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "4.X.5.1.2.6",
        "ALPHAHIERARCHY": "SIGINT.SBSUF.SIGINC.RAD.UNK",
        "PATH": "Signals Intelligence/Subsurface Track/Signal Intercept/Radar"
      },
      {
        "SYMBOLID": "O*-*------*****",
        "DESCRIPTION": "Stability Operations",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X",
        "ALPHAHIERARCHY": "STBOPS"
      },
      {
        "SYMBOLID": "O*V*------*****",
        "DESCRIPTION": "Violent Activities",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.1",
        "ALPHAHIERARCHY": "STBOPS.VIOATY",
        "PATH": "Stability Operations"
      },
      {
        "SYMBOLID": "O*V*A-----*****",
        "DESCRIPTION": "Arson/Fire",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.1",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.ASN",
        "PATH": "Stability Operations/Violent Activities"
      },
      {
        "SYMBOLID": "O*V*M-----*****",
        "DESCRIPTION": "Killing (General)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.2",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.KILL",
        "PATH": "Stability Operations/Violent Activities"
      },
      {
        "SYMBOLID": "O*V*MA----*****",
        "DESCRIPTION": "Murder",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.2.1",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.KILL.MDR",
        "PATH": "Stability Operations/Violent Activities/Killing (General)"
      },
      {
        "SYMBOLID": "O*V*MB----*****",
        "DESCRIPTION": "Execution",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.2.2",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.KILL.EX",
        "PATH": "Stability Operations/Violent Activities/Killing (General)"
      },
      {
        "SYMBOLID": "O*V*MC----*****",
        "DESCRIPTION": "Assassination",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.2.3",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.KILL.ASS",
        "PATH": "Stability Operations/Violent Activities/Killing (General)"
      },
      {
        "SYMBOLID": "O*V*B-----*****",
        "DESCRIPTION": "Bomb/Bombing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.3",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.BM",
        "PATH": "Stability Operations/Violent Activities"
      },
      {
        "SYMBOLID": "O*V*Y-----*****",
        "DESCRIPTION": "Booby Trap",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.4",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.BBY",
        "PATH": "Stability Operations/Violent Activities"
      },
      {
        "SYMBOLID": "O*V*D-----*****",
        "DESCRIPTION": "Drive-By Shooting",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.5",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.DBS",
        "PATH": "Stability Operations/Violent Activities"
      },
      {
        "SYMBOLID": "O*V*S-----*****",
        "DESCRIPTION": "Sniping",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.6",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.SPG",
        "PATH": "Stability Operations/Violent Activities"
      },
      {
        "SYMBOLID": "O*V*P-----*****",
        "DESCRIPTION": "Poisoning",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.7",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.PSNG",
        "PATH": "Stability Operations/Violent Activities"
      },
      {
        "SYMBOLID": "O*V*E-----*****",
        "DESCRIPTION": "Explosion",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.8",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.EXPLSN",
        "PATH": "Stability Operations/Violent Activities"
      },
      {
        "SYMBOLID": "O*V*EI----*****",
        "DESCRIPTION": "IED Explosion",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.8.1",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.EXPLSN.EXPLSN",
        "PATH": "Stability Operations/Violent Activities/Explosion"
      },
      {
        "SYMBOLID": "O*V*EG----*****",
        "DESCRIPTION": "Explosion, Grenade",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.8.2",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.EXPLSN",
        "PATH": "Stability Operations/Violent Activities/Explosion"
      },
      {
        "SYMBOLID": "O*V*EN----*****",
        "DESCRIPTION": "Explosion, Incendiary",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.8.3",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.EXPLSN",
        "PATH": "Stability Operations/Violent Activities/Explosion"
      },
      {
        "SYMBOLID": "O*V*EM----*****",
        "DESCRIPTION": "Explosion, Mine",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.8.4",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.EXPLSN",
        "PATH": "Stability Operations/Violent Activities/Explosion"
      },
      {
        "SYMBOLID": "O*V*EO----*****",
        "DESCRIPTION": "Explosion, Mortar Fire",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.8.5",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.EXPLSN",
        "PATH": "Stability Operations/Violent Activities/Explosion"
      },
      {
        "SYMBOLID": "O*V*ER----*****",
        "DESCRIPTION": "Explosion, Rocket",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.8.6",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.EXPLSN",
        "PATH": "Stability Operations/Violent Activities/Explosion"
      },
      {
        "SYMBOLID": "O*V*EV----*****",
        "DESCRIPTION": "Explosion, Wheeled Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.1.8.7",
        "ALPHAHIERARCHY": "STBOPS.VIOATY.EXPLSN.VEH",
        "PATH": "Stability Operations/Violent Activities/Explosion"
      },
      {
        "SYMBOLID": "O*L*------*****",
        "DESCRIPTION": "Locations",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.2",
        "ALPHAHIERARCHY": "STBOPS.LOCAT",
        "PATH": "Stability Operations"
      },
      {
        "SYMBOLID": "O*L*B-----*****",
        "DESCRIPTION": "Black List Location",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.2.1",
        "ALPHAHIERARCHY": "STBOPS.LOCAT.BLST",
        "PATH": "Stability Operations/Locations"
      },
      {
        "SYMBOLID": "O*L*G-----*****",
        "DESCRIPTION": "Gray List Location",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.2.2",
        "ALPHAHIERARCHY": "STBOPS.LOCAT.GLST",
        "PATH": "Stability Operations/Locations"
      },
      {
        "SYMBOLID": "O*L*W-----*****",
        "DESCRIPTION": "White List Location",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.2.3",
        "ALPHAHIERARCHY": "STBOPS.LOCAT.WLST",
        "PATH": "Stability Operations/Locations"
      },
      {
        "SYMBOLID": "O*L*M-----*****",
        "DESCRIPTION": "Mass Grave Location",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.2.4",
        "ALPHAHIERARCHY": "STBOPS.LOCAT.MASS",
        "PATH": "Stability Operations/Locations"
      },
      {
        "SYMBOLID": "O*L*E-----H****",
        "DESCRIPTION": "Drug Lab",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.2.6",
        "ALPHAHIERARCHY": "STBOPS.LOCAT.DGLAB",
        "PATH": "Stability Operations/Locations"
      },
      {
        "SYMBOLID": "O*L*H-----H****",
        "DESCRIPTION": "House/Residence",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.2.7",
        "ALPHAHIERARCHY": "STBOPS.LOCAT.HOUSE",
        "PATH": "Stability Operations/LOCATIONS"
      },
      {
        "SYMBOLID": "O*L*N-----H****",
        "DESCRIPTION": "Cave Entrance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.2.8",
        "ALPHAHIERARCHY": "STBOPS.LOCAT.CAVENT",
        "PATH": "Stability Operations/Locations"
      },
      {
        "SYMBOLID": "O*L*H-----H****",
        "DESCRIPTION": "Palace/Presidential Residence",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.2.9",
        "ALPHAHIERARCHY": "STBOPS.LOCAT.HOUSE",
        "PATH": "Stability Operations/lOCATIONS"
      },
      {
        "SYMBOLID": "O*L*F-----H****",
        "DESCRIPTION": "Polling Place",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.2.10",
        "ALPHAHIERARCHY": "STBOPS.LOCAT.POLLPL",
        "PATH": "Stability Operations/LOCATIONS"
      },
      {
        "SYMBOLID": "O*O*------*****",
        "DESCRIPTION": "Operations",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.3",
        "ALPHAHIERARCHY": "STBOPS.OPN",
        "PATH": "Stability Operations"
      },
      {
        "SYMBOLID": "O*O*P-----*****",
        "DESCRIPTION": "Patrolling",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.1",
        "ALPHAHIERARCHY": "STBOPS.OPN.PATG",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*R-----*****",
        "DESCRIPTION": "Recruitment",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.3.2",
        "ALPHAHIERARCHY": "STBOPS.OPN.RCMT",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*RW----*****",
        "DESCRIPTION": "Recruitment (Willing)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.2.1",
        "ALPHAHIERARCHY": "STBOPS.OPN.RCMT.WLG",
        "PATH": "Stability Operations/Operations/Recruitment"
      },
      {
        "SYMBOLID": "O*O*RC----*****",
        "DESCRIPTION": "Recruitment (Coerced/Impressed)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.2.2",
        "ALPHAHIERARCHY": "STBOPS.OPN.RCMT.CRCD",
        "PATH": "Stability Operations/Operations/Recruitment"
      },
      {
        "SYMBOLID": "O*O*D-----*****",
        "DESCRIPTION": "Demonstration",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.3",
        "ALPHAHIERARCHY": "STBOPS.OPN.DEMO",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*M-----*****",
        "DESCRIPTION": "Mine Laying",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.4",
        "ALPHAHIERARCHY": "STBOPS.OPN.ML",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*Y-----*****",
        "DESCRIPTION": "Psychological Operations (Psyop)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.5",
        "ALPHAHIERARCHY": "STBOPS.OPN.PSYOP",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*YT----*****",
        "DESCRIPTION": "Psyop (TV and Radio Propaganda)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.5.1",
        "ALPHAHIERARCHY": "STBOPS.OPN.PSYOP.TARP",
        "PATH": "Stability Operations/Operations/Psychological Operations (Psyop)"
      },
      {
        "SYMBOLID": "O*O*YW----*****",
        "DESCRIPTION": "Psyop (Written Propaganda)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.5.2",
        "ALPHAHIERARCHY": "STBOPS.OPN.PSYOP.WP",
        "PATH": "Stability Operations/Operations/Psychological Operations (Psyop)"
      },
      {
        "SYMBOLID": "O*O*YH----*****",
        "DESCRIPTION": "House-to-House Propaganda",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.5.3",
        "ALPHAHIERARCHY": "STBOPS.OPN.PSYOP.HTHP",
        "PATH": "Stability Operations/Operations/Psychological Operations (Psyop)"
      },
      {
        "SYMBOLID": "O*O*F-----*****",
        "DESCRIPTION": "Foraging/Searching",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.6",
        "ALPHAHIERARCHY": "STBOPS.OPN.FRGSRH",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*S-----*****",
        "DESCRIPTION": "Spy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.7",
        "ALPHAHIERARCHY": "STBOPS.OPN.SPY",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*O-----*****",
        "DESCRIPTION": "Food Distribution",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.8",
        "ALPHAHIERARCHY": "STBOPS.OPN.FDDIST",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*E-----*****",
        "DESCRIPTION": "Extortion",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.9",
        "ALPHAHIERARCHY": "STBOPS.OPN.EXTN",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*H-----*****",
        "DESCRIPTION": "Hijacking",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.3.10",
        "ALPHAHIERARCHY": "STBOPS.OPN.HJKG",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*HT----*****",
        "DESCRIPTION": "Hijacking (Vehicle)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.10.1",
        "ALPHAHIERARCHY": "STBOPS.OPN.HJKG.VEH",
        "PATH": "Stability Operations/Operations/Hijacking"
      },
      {
        "SYMBOLID": "O*O*HA----*****",
        "DESCRIPTION": "Hijacking (Airplane)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.10.2",
        "ALPHAHIERARCHY": "STBOPS.OPN.HJKG.APL",
        "PATH": "Stability Operations/Operations/Hijacking"
      },
      {
        "SYMBOLID": "O*O*HV----*****",
        "DESCRIPTION": "Hijacking (Boat)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.10.3",
        "ALPHAHIERARCHY": "STBOPS.OPN.HJKG.BOAT",
        "PATH": "Stability Operations/Operations/Hijacking"
      },
      {
        "SYMBOLID": "O*O*K-----*****",
        "DESCRIPTION": "Kidnapping",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.11",
        "ALPHAHIERARCHY": "STBOPS.OPN.KDNG",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*KA----*****",
        "DESCRIPTION": "Attempted Kidnapping",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.11.1",
        "ALPHAHIERARCHY": "STBOPS.OPN.KDNG.ATEMPT",
        "PATH": "Stability Operations/Operations/Kidnapping"
      },
      {
        "SYMBOLID": "O*O*A-----*****",
        "DESCRIPTION": "Arrest",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.12",
        "ALPHAHIERARCHY": "STBOPS.OPN.ARR",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*U-----*****",
        "DESCRIPTION": "Drug Operation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.13",
        "ALPHAHIERARCHY": "STBOPS.OPN.DGOPN",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*UT----*****",
        "DESCRIPTION": "Drug Trafficking",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.13.1",
        "ALPHAHIERARCHY": "STBOPS.OPN.DGOPN.DGTRFC",
        "PATH": "Stability Operations/OPERATIONS/DRUG OPERATION"
      },
      {
        "SYMBOLID": "O*O*N-----*****",
        "DESCRIPTION": "Raid on a House",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.14",
        "ALPHAHIERARCHY": "STBOPS.OPN.HSRAID",
        "PATH": "Stability Operations/OPERATIONS"
      },
      {
        "SYMBOLID": "O*O*2-----*****",
        "DESCRIPTION": "Burglary",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.15",
        "ALPHAHIERARCHY": "STBOPS.OPN.BRGLRY",
        "PATH": "Stability Operations/OPERATIONS"
      },
      {
        "SYMBOLID": "O*O*V-----*****",
        "DESCRIPTION": "Home Eviction",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.16",
        "ALPHAHIERARCHY": "STBOPS.OPN.HSEVCT",
        "PATH": "Stability Operations/OPERATIONS"
      },
      {
        "SYMBOLID": "O*O*I-----*****",
        "DESCRIPTION": "Black Marketing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.17",
        "ALPHAHIERARCHY": "STBOPS.OPM.BLKMKT",
        "PATH": "Stability Operations/OPERATIONS"
      },
      {
        "SYMBOLID": "O*O*J-----*****",
        "DESCRIPTION": "Jail Break",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.18",
        "ALPHAHIERARCHY": "STBOPS.OPN.JAILBREAK",
        "PATH": "Stability Operations/OPERATIONS"
      },
      {
        "SYMBOLID": "O*O*B-----*****",
        "DESCRIPTION": "Robbery",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.19",
        "ALPHAHIERARCHY": "STBOPS.OPN.ROB",
        "PATH": "Stability Operations/OPERATIONS"
      },
      {
        "SYMBOLID": "O*O*G-----*****",
        "DESCRIPTION": "Sabotage",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.21",
        "ALPHAHIERARCHY": "STBOPS.OPN.SABOTG",
        "PATH": "Stability Operations/OPERATIONS"
      },
      {
        "SYMBOLID": "O*O*X-----*****",
        "DESCRIPTION": "Smuggling",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.22",
        "ALPHAHIERARCHY": "STBOPS.OPN.SMGLNG",
        "PATH": "Stability Operations/OPERATIONS"
      },
      {
        "SYMBOLID": "O*O*W-----*****",
        "DESCRIPTION": "Rock Throwing",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.23",
        "ALPHAHIERARCHY": "STBOPS.OPN.RCKTHR",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*Z-----*****",
        "DESCRIPTION": "Suspicious Activity",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.24",
        "ALPHAHIERARCHY": "STBOPS.OPN.SUSACT",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*T-----*****",
        "DESCRIPTION": "Theft",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.25",
        "ALPHAHIERARCHY": "STBOPS.OPN.THEFT",
        "PATH": "Stability Operations/Operations"
      },
      {
        "SYMBOLID": "O*O*TV----*****",
        "DESCRIPTION": "Wheeled Vehicle Theft",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.25.1",
        "ALPHAHIERARCHY": "STBOPS.OPN.THEFT.VEH",
        "PATH": "Stability Operations/OPERATIONS/THEFT"
      },
      {
        "SYMBOLID": "O*O*Q-----*****",
        "DESCRIPTION": "Warrant Served",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.3.26",
        "ALPHAHIERARCHY": "STBOPS.OPN.WARRENT",
        "PATH": "Stability Operations/OPERATIONS"
      },
      {
        "SYMBOLID": "O*I*------*****",
        "DESCRIPTION": "Items",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.4",
        "ALPHAHIERARCHY": "STBOPS.ITM",
        "PATH": "Stability Operations"
      },
      {
        "SYMBOLID": "O*I*R-----*****",
        "DESCRIPTION": "Refugees",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.4.1",
        "ALPHAHIERARCHY": "STBOPS.ITM.RFG",
        "PATH": "Stability Operations/Items"
      },
      {
        "SYMBOLID": "O*I*S-----*****",
        "DESCRIPTION": "Safe House",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.4.2",
        "ALPHAHIERARCHY": "STBOPS.ITM.SAFHSE",
        "PATH": "Stability Operations/Items"
      },
      {
        "SYMBOLID": "O*I*G-----*****",
        "DESCRIPTION": "Graffiti",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.4.3",
        "ALPHAHIERARCHY": "STBOPS.ITM.GRF",
        "PATH": "Stability Operations/Items"
      },
      {
        "SYMBOLID": "O*I*V-----*****",
        "DESCRIPTION": "Vandalism/Loot/Ransack/Plunder/Sack",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.4.4",
        "ALPHAHIERARCHY": "STBOPS.ITM.VRLRPS",
        "PATH": "Stability Operations/Items"
      },
      {
        "SYMBOLID": "O*I*I-----*****",
        "DESCRIPTION": "Known Insurgent Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.4.5",
        "ALPHAHIERARCHY": "STBOPS.ITM.KNIVEH",
        "PATH": "Stability Operations/Items"
      },
      {
        "SYMBOLID": "O*I*D-----*****",
        "DESCRIPTION": "Drug Vehicle",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.4.6",
        "ALPHAHIERARCHY": "STBOPS.ITM.DGVEH",
        "PATH": "Stability Operations/Items"
      },
      {
        "SYMBOLID": "O*I*F-----*****",
        "DESCRIPTION": "Internal Security Force",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.4.7",
        "ALPHAHIERARCHY": "STBOPS.ITM.ISF",
        "PATH": "Stability Operations/Items"
      },
      {
        "SYMBOLID": "O*I*M-----*****",
        "DESCRIPTION": "Meeting",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.4.8",
        "ALPHAHIERARCHY": "STBOPS.ITM.MEETING",
        "PATH": "Stability Operations/ITEMS"
      },
      {
        "SYMBOLID": "O*I*T-----*****",
        "DESCRIPTION": "Tent",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.4.9",
        "ALPHAHIERARCHY": "STBOPS.ITM.TENT",
        "PATH": "Stability Operations/ITEMS"
      },
      {
        "SYMBOLID": "O*P*------*****",
        "DESCRIPTION": "Individual",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.5",
        "ALPHAHIERARCHY": "STBOPS.INDIV",
        "PATH": "Stability Operations/INDIVIDUAL"
      },
      {
        "SYMBOLID": "O*P*A-----*****",
        "DESCRIPTION": "Leader",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.5.1",
        "ALPHAHIERARCHY": "STBOPS.INDIV.LEADER",
        "PATH": "Stability Operations/INDIVIDUAL"
      },
      {
        "SYMBOLID": "O*P*AR----*****",
        "DESCRIPTION": "Religious Leader",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.5.1.1",
        "ALPHAHIERARCHY": "STBOPS.INDIV.LEADER.RELIGS",
        "PATH": "Stability Operations/INDIVIDUAL/LEADER"
      },
      {
        "SYMBOLID": "O*P*B-----*****",
        "DESCRIPTION": "Targeted Individual",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.5.2",
        "ALPHAHIERARCHY": "STBOPS.INDIV.TRGTD",
        "PATH": "Stability Operations/INDIVIDUAL"
      },
      {
        "SYMBOLID": "O*P*C-----*****",
        "DESCRIPTION": "Terrorist",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.5.3",
        "ALPHAHIERARCHY": "STBOPS.INDIV.TERRST",
        "PATH": "Stability Operations/Individual"
      },
      {
        "SYMBOLID": "O*P*D-----*****",
        "DESCRIPTION": "Dead Body",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.5.4",
        "ALPHAHIERARCHY": "STBOPS.INDIV.DDBODY",
        "PATH": "Stability Operations/INDIVIDUAL"
      },
      {
        "SYMBOLID": "O*P*E-----*****",
        "DESCRIPTION": "Speaker",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.5.5",
        "ALPHAHIERARCHY": "STBOPS.INDIV.SPKR",
        "PATH": "Stability Operations/Individual"
      },
      {
        "SYMBOLID": "O*P*F-----*****",
        "DESCRIPTION": "IED Suicide Bomber",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.5.6",
        "ALPHAHIERARCHY": "STBOPS.INDIV.SUICBM",
        "PATH": "Stability Operations/Individual"
      },
      {
        "SYMBOLID": "O*P*G-----*****",
        "DESCRIPTION": "Exfiltrating Individual",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.5.7",
        "ALPHAHIERARCHY": "STBOPS.INDIV.EXFLT",
        "PATH": "Stability Operations/INDIVIDUAL"
      },
      {
        "SYMBOLID": "O*P*H-----*****",
        "DESCRIPTION": "Infiltrating Individual",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.5.8",
        "ALPHAHIERARCHY": "STBOPS.INDIV.INFLT",
        "PATH": "Stability Operations/INDIVIDUAL"
      },
      {
        "SYMBOLID": "O*G*------*****",
        "DESCRIPTION": "Non-Military Group or Organization",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.6",
        "ALPHAHIERARCHY": "STBOPS.GRPORG",
        "PATH": "Stability Operations"
      },
      {
        "SYMBOLID": "O*G*B-----*****",
        "DESCRIPTION": "Non-Governmental Organizations (NGO)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.6.2",
        "ALPHAHIERARCHY": "STBOPS.GRPORG.NGO",
        "PATH": "Stability Operations/NONMILITARY GROUP OR ORGANIZATION"
      },
      {
        "SYMBOLID": "O*G*C-----*****",
        "DESCRIPTION": "Terrorist Organization",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.6.3",
        "ALPHAHIERARCHY": "STBOPS.GRPORG.TERRST",
        "PATH": "Stability Operations/NONMILITARY GROUP OR ORGANIZATION"
      },
      {
        "SYMBOLID": "O*G*D-----*****",
        "DESCRIPTION": "Religious Organization",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.6.4",
        "ALPHAHIERARCHY": "STBOPS.GRPORG.RELIGS",
        "PATH": "Stability Operations/NONMILITARY GROUP OR ORGANIZATION"
      },
      {
        "SYMBOLID": "O*G*E-----*****",
        "DESCRIPTION": "Foreign Fighter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.6.5",
        "ALPHAHIERARCHY": "STBOPS.GRPORG.FNFGHT",
        "PATH": "Stability Operations/NONMILITARY GROUP OR ORGANIZATION"
      },
      {
        "SYMBOLID": "O*G*F-----*****",
        "DESCRIPTION": "Gang",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.6.6",
        "ALPHAHIERARCHY": "STBOPS.GRPORG.GANG",
        "PATH": "Stability Operations/NONMILITARY GROUP OR ORGANIZATION"
      },
      {
        "SYMBOLID": "O*R*------*****",
        "DESCRIPTION": "Rape",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.7",
        "ALPHAHIERARCHY": "STBOPS.RAPE",
        "PATH": "Stability Operations/RAPE"
      },
      {
        "SYMBOLID": "O*R*A-----*****",
        "DESCRIPTION": "Attempted Rape",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.7.1",
        "ALPHAHIERARCHY": "STBOPS.RAPE.ATEMPT",
        "PATH": "Stability Operations/Rape"
      },
      {
        "SYMBOLID": "O*E*------*****",
        "DESCRIPTION": "Events SASO",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.10",
        "ALPHAHIERARCHY": "STBOPS.SASO",
        "PATH": "Stability Operations"
      },
      {
        "SYMBOLID": "O*E*A-----*****",
        "DESCRIPTION": "Elections SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.1",
        "ALPHAHIERARCHY": "STBOPS.SASO.ELCT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*B-----*****",
        "DESCRIPTION": "Speech SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.2",
        "ALPHAHIERARCHY": "STBOPS.SASO.SPH",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*C-----*****",
        "DESCRIPTION": "Sermon SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.3",
        "ALPHAHIERARCHY": "STBOPS.SASO.SRMN",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*D-----*****",
        "DESCRIPTION": "Meeting SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.4",
        "ALPHAHIERARCHY": "STBOPS.SASO.MTG",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*E-----*****",
        "DESCRIPTION": "Demonstration(Events) SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.5",
        "ALPHAHIERARCHY": "STBOPS.SASO.DEMO",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*F-----*****",
        "DESCRIPTION": "Riot SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.6",
        "ALPHAHIERARCHY": "STBOPS.SASO.RIOT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*G-----*****",
        "DESCRIPTION": "Gang Activity SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.7",
        "ALPHAHIERARCHY": "STBOPS.SASO.GANG",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*H-----*****",
        "DESCRIPTION": "Jail Break/Escape Custody SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.8",
        "ALPHAHIERARCHY": "STBOPS.SASO.JAIL.BK",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*I-----*****",
        "DESCRIPTION": "Rock Throwing SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.9",
        "ALPHAHIERARCHY": "STBOPS.SASO.RCKTHR",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*J-----*****",
        "DESCRIPTION": "Illegal Selling/Purchasing/Distributing/Black Market SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.10",
        "ALPHAHIERARCHY": "STBOPS.SASO.BLKMKT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*K-----*****",
        "DESCRIPTION": "Surveillance SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.11",
        "ALPHAHIERARCHY": "STBOPS.SASO.SRVLLNCE",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*L-----*****",
        "DESCRIPTION": "Lights SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.12",
        "ALPHAHIERARCHY": "STBOPS.SASO.LIT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*M-----*****",
        "DESCRIPTION": "Border Crossing SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.13",
        "ALPHAHIERARCHY": "STBOPS.SASO.BRDCSG",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*N-----*****",
        "DESCRIPTION": "Border Activity SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.14",
        "ALPHAHIERARCHY": "STBOPS.SASO.BRDACT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*O-----*****",
        "DESCRIPTION": "Smuggling SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.15",
        "ALPHAHIERARCHY": "STBOPS.SASO.SMGL",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*P-----*****",
        "DESCRIPTION": "Exfiltration SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.16",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXFNLE",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*Q-----*****",
        "DESCRIPTION": "Infiltration SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.17",
        "ALPHAHIERARCHY": "STBOPS.SASO.INFNLE",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*R-----*****",
        "DESCRIPTION": "Auto Theft SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.18",
        "ALPHAHIERARCHY": "STBOPS.SASO.AUTOTHEFT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*S-----*****",
        "DESCRIPTION": "Auto Accident SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.19",
        "ALPHAHIERARCHY": "STBOPS.SASO.AUTOACDNT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*T-----*****",
        "DESCRIPTION": "Looting SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.20",
        "ALPHAHIERARCHY": "STBOPS.SASO.LOOT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*U-----*****",
        "DESCRIPTION": "Theft SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.21",
        "ALPHAHIERARCHY": "STBOPS.SASO.THEFT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*V-----*****",
        "DESCRIPTION": "Robbery SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.22",
        "ALPHAHIERARCHY": "STBOPS.SASO.ROB",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*W-----*****",
        "DESCRIPTION": "Home Eviction SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.23",
        "ALPHAHIERARCHY": "STBOPS.SASO.HSEVCT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*X-----*****",
        "DESCRIPTION": "Shooting (Non Deadly) SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.24",
        "ALPHAHIERARCHY": "STBOPS.SASO.SHTGND",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*Y-----*****",
        "DESCRIPTION": "Raid SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.25",
        "ALPHAHIERARCHY": "STBOPS.SASO.RAID",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*Z-----*****",
        "DESCRIPTION": "Sabotage SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.26",
        "ALPHAHIERARCHY": "STBOPS.SASO.SABOTG",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AA----*****",
        "DESCRIPTION": "Warrant Served SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.27",
        "ALPHAHIERARCHY": "STBOPS.SASO.WARRNT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AB----*****",
        "DESCRIPTION": "Rape SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.28",
        "ALPHAHIERARCHY": "STBOPS.SASO.RAPE",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AC----*****",
        "DESCRIPTION": "Attempted Rape SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.29",
        "ALPHAHIERARCHY": "STBOPS.SASO.RAPEATEMPT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AD----*****",
        "DESCRIPTION": "Attack(Events) SASO",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.10.30",
        "ALPHAHIERARCHY": "STBOPS.SASO.ATK",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*ADA---*****",
        "DESCRIPTION": "Attack on NGO SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.30.1",
        "ALPHAHIERARCHY": "STBOPS.SASO.ATK.NGO",
        "PATH": "Stability Operations/Events/Attack"
      },
      {
        "SYMBOLID": "O*E*ADB---*****",
        "DESCRIPTION": "Terrorist Attack SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.30.2",
        "ALPHAHIERARCHY": "STBOPS.SASO.ATK.TER",
        "PATH": "Stability Operations/Events/Attack"
      },
      {
        "SYMBOLID": "O*E*ADC---*****",
        "DESCRIPTION": "Grenade Attack SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.30.3",
        "ALPHAHIERARCHY": "STBOPS.SASO.ATK.GREN",
        "PATH": "Stability Operations/Events/Attack"
      },
      {
        "SYMBOLID": "O*E*ADD---*****",
        "DESCRIPTION": "Rocket Attack SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.30.4",
        "ALPHAHIERARCHY": "STBOPS.SASO.ATK.ROCKET",
        "PATH": "Stability Operations/Events/Attack"
      },
      {
        "SYMBOLID": "O*E*AE----*****",
        "DESCRIPTION": "Explosions SASO",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.10.31",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AEA---*****",
        "DESCRIPTION": "Explosion (general) SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.31.1",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN.GEN",
        "PATH": "Stability Operations/Events/Explosions"
      },
      {
        "SYMBOLID": "O*E*AEB---*****",
        "DESCRIPTION": "Explosion, Mine SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.31.2",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN.MINE",
        "PATH": "Stability Operations/Events/Explosions"
      },
      {
        "SYMBOLID": "O*E*AEC---*****",
        "DESCRIPTION": "Explosion, Grenade SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.31.3",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN.GREN",
        "PATH": "Stability Operations/Events/Explosions"
      },
      {
        "SYMBOLID": "O*E*AED---*****",
        "DESCRIPTION": "Explosion, Bomb SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.31.4",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN.BOMB",
        "PATH": "Stability Operations/Events/Explosions"
      },
      {
        "SYMBOLID": "O*E*AEE---*****",
        "DESCRIPTION": "Explosion, Mortar Fire SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.31.5",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN.MTRFR",
        "PATH": "Stability Operations/Events/Explosions"
      },
      {
        "SYMBOLID": "O*E*AEF---*****",
        "DESCRIPTION": "Explosion, Incendiary SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.31.6",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN.INCEND",
        "PATH": "Stability Operations/Events/Explosions"
      },
      {
        "SYMBOLID": "O*E*AEG---*****",
        "DESCRIPTION": "Explosion, Rocket SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.31.7",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN.ROCKET",
        "PATH": "Stability Operations/Events/Explosions"
      },
      {
        "SYMBOLID": "O*E*AEH---*****",
        "DESCRIPTION": "Explosion, Improvised Explosive Device (IED) SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.31.8",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN.IED",
        "PATH": "Stability Operations/Events/Explosions"
      },
      {
        "SYMBOLID": "O*E*AEI---*****",
        "DESCRIPTION": "Explosion, Car Bomb SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.31.9",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN",
        "PATH": "Stability Operations/Events/Explosions"
      },
      {
        "SYMBOLID": "O*E*AEJ---*****",
        "DESCRIPTION": "Suicide Bombing SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.31.10",
        "ALPHAHIERARCHY": "STBOPS.SASO.EXPLSN.SUICBM",
        "PATH": "Stability Operations/Events/Explosions"
      },
      {
        "SYMBOLID": "O*E*AF----*****",
        "DESCRIPTION": "Fighting/Contact SASO",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.10.32",
        "ALPHAHIERARCHY": "STBOPS.SASO.FT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AFA---*****",
        "DESCRIPTION": "Fighting (General) SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.32.1",
        "ALPHAHIERARCHY": "STBOPS.SASO.FT.GEN",
        "PATH": "Stability Operations/Events/Fighting and Contact"
      },
      {
        "SYMBOLID": "O*E*AFB---*****",
        "DESCRIPTION": "Coalition vs. Enemy SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.32.2",
        "ALPHAHIERARCHY": "STBOPS.SASO.FT.CLTNVENMY",
        "PATH": "Stability Operations/Events/Fighting and Contact"
      },
      {
        "SYMBOLID": "O*E*AFC---*****",
        "DESCRIPTION": "Coalition vs. Coalition SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.32.3",
        "ALPHAHIERARCHY": "STBOPS.SASO.FT.CLTNVCLTN",
        "PATH": "Stability Operations/Events/Fighting and Contact"
      },
      {
        "SYMBOLID": "O*E*AG----*****",
        "DESCRIPTION": "Drug Possession SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.33",
        "ALPHAHIERARCHY": "STBOPS.SASO.DGPOS",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AH----*****",
        "DESCRIPTION": "Drug Trafficking SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.34",
        "ALPHAHIERARCHY": "STBOPS.SASO.DGTRFC",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AI----*****",
        "DESCRIPTION": "Suspicious Activity SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.35",
        "ALPHAHIERARCHY": "STBOPS.SASO.SUSACT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AJ----*****",
        "DESCRIPTION": "Activity SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.36",
        "ALPHAHIERARCHY": "STBOPS.SASO.ACT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AK----*****",
        "DESCRIPTION": "Threat SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.37",
        "ALPHAHIERARCHY": "STBOPS.SASO.THT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AL----*****",
        "DESCRIPTION": "Crater SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.38",
        "ALPHAHIERARCHY": "STBOPS.SASO.CRTR",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AM----*****",
        "DESCRIPTION": "Pothole SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.39",
        "ALPHAHIERARCHY": "STBOPS.SASO.POTHOLE",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AN----*****",
        "DESCRIPTION": "Escalation of Force SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.40",
        "ALPHAHIERARCHY": "STBOPS.SASO.ESCLTNFRCE",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AO----*****",
        "DESCRIPTION": "Submunitions SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.41",
        "ALPHAHIERARCHY": "STBOPS.SASO.SUBMNTN",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AP----*****",
        "DESCRIPTION": "Confiscation SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.42",
        "ALPHAHIERARCHY": "STBOPS.SASO.CONF",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AQ----*****",
        "DESCRIPTION": "Counter Insurgency SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.43",
        "ALPHAHIERARCHY": "STBOPS.SASO.CI",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AR----*****",
        "DESCRIPTION": "Counter Terrorism SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.44",
        "ALPHAHIERARCHY": "STBOPS.SASO.CT",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AS----*****",
        "DESCRIPTION": "Humanitarian Assistance SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.45",
        "ALPHAHIERARCHY": "STBOPS.SASO.HA",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AT----*****",
        "DESCRIPTION": "Tests of Security SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.46",
        "ALPHAHIERARCHY": "STBOPS.SASO.TOS",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AU----*****",
        "DESCRIPTION": "AWOL SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.47",
        "ALPHAHIERARCHY": "STBOPS.SASO.AWOL",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AV----*****",
        "DESCRIPTION": "Curfew SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.48",
        "ALPHAHIERARCHY": "STBOPS.SASO.CURFEW",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AW----*****",
        "DESCRIPTION": "DUI SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.49",
        "ALPHAHIERARCHY": "STBOPS.SASO.DUI",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*E*AX----*****",
        "DESCRIPTION": "Prostitution SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.10.50",
        "ALPHAHIERARCHY": "STBOPS.SASO.PROS",
        "PATH": "Stability Operations/Events"
      },
      {
        "SYMBOLID": "O*Y*------*****",
        "DESCRIPTION": "Organization/Groups SASO",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.11",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG",
        "PATH": "Stability Operations"
      },
      {
        "SYMBOLID": "O*Y*A-----*****",
        "DESCRIPTION": "Organization (General) SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.1",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.GEN",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*B-----*****",
        "DESCRIPTION": "NGO Organization SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.2",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.NGO",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*C-----*****",
        "DESCRIPTION": "Displaced Persons, Refugees SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.3",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.DPR",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*D-----*****",
        "DESCRIPTION": "Terrorist Organization SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.4",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.TERRST",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*E-----*****",
        "DESCRIPTION": "Religious Organization SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.5",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.REL",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*F-----*****",
        "DESCRIPTION": "Group Tribe Cell SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.6",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.GTC",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*G-----*****",
        "DESCRIPTION": "Foreign Fighters SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.7",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.FNFGHT",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*R-----*****",
        "DESCRIPTION": "Red Cross SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.8",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.RDCRSS",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*SP----*****",
        "DESCRIPTION": "State Police SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.9",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.STPOL",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*LP----*****",
        "DESCRIPTION": "Local Police SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.10",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.LCPOL",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*SH----*****",
        "DESCRIPTION": "Shelter SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.11",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.SHL",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*FM----*****",
        "DESCRIPTION": "FEMA SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.12",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.FEMA",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*SA----*****",
        "DESCRIPTION": "Staging Area SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.13",
        "ALPHAHIERARCHY": "STBOPS.SASO.",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*EP----*****",
        "DESCRIPTION": "Evacuation Point SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.14",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.EVAC",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*Y*PD----*****",
        "DESCRIPTION": "Person in Distress SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.11.15",
        "ALPHAHIERARCHY": "STBOPS.SASO.ORG.PID",
        "PATH": "Stability Operations/Organization and Groups"
      },
      {
        "SYMBOLID": "O*S*------*****",
        "DESCRIPTION": "Structures SASO",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.13",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT",
        "PATH": "Stability Operations"
      },
      {
        "SYMBOLID": "O*S*A-----*****",
        "DESCRIPTION": "Compound/Post/Fort SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.1",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.CPD",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*B-----*****",
        "DESCRIPTION": "House/Residence SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.2",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.HSE",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*C-----*****",
        "DESCRIPTION": "Safe House(Structures) SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.3",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.SAFHSE",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*D-----*****",
        "DESCRIPTION": "Church SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.4",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.CHRCH",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*E-----*****",
        "DESCRIPTION": "Mosque SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.5",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.MOS",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*F-----*****",
        "DESCRIPTION": "Synagogue SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.6",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.SYN",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*G-----*****",
        "DESCRIPTION": "Warehouse/Storage Facility SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.7",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.WAREHS",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*H-----*****",
        "DESCRIPTION": "Bunker/Underground Facility SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.8",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.BKR",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*I-----*****",
        "DESCRIPTION": "Tents SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.9",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.TENT",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*J-----*****",
        "DESCRIPTION": "Cave SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.10",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.CAVE",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*K-----*****",
        "DESCRIPTION": "Camps SASO",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.13.11",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.CMP",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*KA----*****",
        "DESCRIPTION": "Camp (General) SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.11.1",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.CMP.GEN",
        "PATH": "Stability Operations/Structures/Camps"
      },
      {
        "SYMBOLID": "O*S*KB----*****",
        "DESCRIPTION": "Displaced Persons/Refugees Camp SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.11.2",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.CMP.DPRC",
        "PATH": "Stability Operations/Structures/Camps"
      },
      {
        "SYMBOLID": "O*S*KC----*****",
        "DESCRIPTION": "Training Camp SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.11.3",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.CMP.TRG",
        "PATH": "Stability Operations/Structures/Camps"
      },
      {
        "SYMBOLID": "O*S*L-----*****",
        "DESCRIPTION": "Prison/Detention Facility SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.12",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.PRSN",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*M-----*****",
        "DESCRIPTION": "Police Station SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.13",
        "ALPHAHIERARCHY": "STBOPS.SASO.STRT.POL",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*S*N-----*****",
        "DESCRIPTION": "Palace/Presidential Residence SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.13.14",
        "ALPHAHIERARCHY": "STBOPS.SASO.PAL",
        "PATH": "Stability Operations/Structures"
      },
      {
        "SYMBOLID": "O*Q*------*****",
        "DESCRIPTION": "Equipment/Weapons SASO",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "5.X.14",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN",
        "PATH": "Stability Operations"
      },
      {
        "SYMBOLID": "O*Q*A-----*****",
        "DESCRIPTION": "Weapons Found SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.1",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.FIND",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "O*Q*B-----*****",
        "DESCRIPTION": "Weapons Cache SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.2",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.CACHE",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "O*Q*C-----*****",
        "DESCRIPTION": "Weapons Confiscated SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.3",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.CONF",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "O*Q*D-----*****",
        "DESCRIPTION": "Weapons Sale SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.4",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.SALE",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "O*Q*E-----*****",
        "DESCRIPTION": "Weapons Market SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.5",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.MKT",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "O*Q*F-----*****",
        "DESCRIPTION": "Chem/Bio Weapons Cache SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.6",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.BIO",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "O*Q*G-----*****",
        "DESCRIPTION": "Improvised Explosive Device (IED) SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.7",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.IED",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "O*Q*H-----*****",
        "DESCRIPTION": "Unexploded Ordnance (UXO) SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.8",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.UXO",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "O*Q*I-----*****",
        "DESCRIPTION": "Horses SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.9",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.HRE",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "O*Q*J-----*****",
        "DESCRIPTION": "Camels SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.10",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.CML",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "O*Q*K-----*****",
        "DESCRIPTION": "Donkeys SASO",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "5.X.14.11",
        "ALPHAHIERARCHY": "STBOPS.SASO.EQTWPN.DKY",
        "PATH": "Stability Operations/Equipment and Weapons"
      },
      {
        "SYMBOLID": "E*-*------*****",
        "DESCRIPTION": "Emergency Management Symbols",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "6.X",
        "ALPHAHIERARCHY": "EMS"
      },
      {
        "SYMBOLID": "E*I*------*****",
        "DESCRIPTION": "Incident",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "6.X.1",
        "ALPHAHIERARCHY": "EMS.INCDNT",
        "PATH": "Emergency Management Symbols"
      },
      {
        "SYMBOLID": "E*I*A-----*****",
        "DESCRIPTION": "Civil Disturbance Incident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.1",
        "ALPHAHIERARCHY": "EMS.INCDNT.CVDIS",
        "PATH": "Emergency Management Symbols/Incident"
      },
      {
        "SYMBOLID": "O*O*D-----*****",
        "DESCRIPTION": "Civil Demonstration",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.1.1",
        "ALPHAHIERARCHY": "EMS.INCDNT.CVDIS.DEMO",
        "PATH": "Emergency Management Symbols/Incident/Civil Disturbance Incident"
      },
      {
        "SYMBOLID": "O*I*R-----*****",
        "DESCRIPTION": "Civil Displaced Population",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "6.X.1.1.2",
        "ALPHAHIERARCHY": "EMS.INCDNT.CVDIS.DISPOP",
        "PATH": "Emergency Management Symbols/Incident/Civil Disturbance Incident"
      },
      {
        "SYMBOLID": "E*I*AC----*****",
        "DESCRIPTION": "Civil Rioting",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.1.3",
        "ALPHAHIERARCHY": "EMS.INCDNT.CVDIS.CVRIOT",
        "PATH": "Emergency Management Symbols/Incident/Civil Disturbance Incident"
      },
      {
        "SYMBOLID": "E*I*B-----*****",
        "DESCRIPTION": "Criminal Activity Incident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.2",
        "ALPHAHIERARCHY": "EMS.INCDNT.CRMACT",
        "PATH": "Emergency Management Symbols/Incident"
      },
      {
        "SYMBOLID": "E*I*BA----*****",
        "DESCRIPTION": "Bomb Threat",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.2.1",
        "ALPHAHIERARCHY": "EMS.INCDNT.CRMACT.BMTHT",
        "PATH": "Emergency Management Symbols/Incident/Criminal Activity Incident"
      },
      {
        "SYMBOLID": "O*V*B-----*****",
        "DESCRIPTION": "Bomb",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.2.2",
        "ALPHAHIERARCHY": "EMS.INCDNT.CRMACT.BM",
        "PATH": "Emergency Management Symbols/Incident/Criminal Activity Incident"
      },
      {
        "SYMBOLID": "E*I*BC----*****",
        "DESCRIPTION": "Explosion (Bomb)",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.2.3",
        "ALPHAHIERARCHY": "EMS.INCDNT.CRMACT.EXPLN",
        "PATH": "EMERGENCY MANAGEMENT SYMBOLS/INCIDENT/CRIMINAL ACTIVITY INCIDENT"
      },
      {
        "SYMBOLID": "E*I*BD----*****",
        "DESCRIPTION": "Looting",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.2.4",
        "ALPHAHIERARCHY": "EMS.INCDNT.CRMACT.LOOT",
        "PATH": "EMERGENCY MANAGEMENT SYMBOLS/INCIDENT/CRIMINAL ACTIVITY INCIDENT"
      },
      {
        "SYMBOLID": "O*V*P-----*****",
        "DESCRIPTION": "Poisoning",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.2.5",
        "ALPHAHIERARCHY": "EMS.INCDNT.CRMACT.PSNG",
        "PATH": "EMERGENCY MANAGEMENT SYMBOLS/INCIDENT/CRIMINAL ACTIVITY INCIDENT"
      },
      {
        "SYMBOLID": "E*I*BF----*****",
        "DESCRIPTION": "Shooting",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.2.6",
        "ALPHAHIERARCHY": "EMS..INCDNT.CRMACT.SHTG",
        "PATH": "EMERGENCY MANAGEMENT SYMBOLS/INCIDENT/CRIMINAL ACTIVITY INCIDENT"
      },
      {
        "SYMBOLID": "E*I*C-----*****",
        "DESCRIPTION": "Fire Incident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.3",
        "ALPHAHIERARCHY": "EMS.INCDNT.FIRE",
        "PATH": "Emergency Management Symbols/Incident"
      },
      {
        "SYMBOLID": "E*I*CA----*****",
        "DESCRIPTION": "Hot Spot",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.3.1",
        "ALPHAHIERARCHY": "EMS.INCDNT.FIRE.HTSPT",
        "PATH": "Emergency Management Symbols/Incident/Fire Incident"
      },
      {
        "SYMBOLID": "E*I*CB----*****",
        "DESCRIPTION": "Non-Residential Fire",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.3.2",
        "ALPHAHIERARCHY": "EMS.INCDNT.FIRE.NRES",
        "PATH": "Emergency Management Symbols/Incident/Fire Incident"
      },
      {
        "SYMBOLID": "E*I*CC----*****",
        "DESCRIPTION": "Origin",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.3.3",
        "ALPHAHIERARCHY": "EMS.INCDNT.FIRE.ORGN",
        "PATH": "Emergency Management Symbols/Incident/Fire Incident"
      },
      {
        "SYMBOLID": "E*I*CD----*****",
        "DESCRIPTION": "Residential Fire",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.3.4",
        "ALPHAHIERARCHY": "EMS.INCDNT.FIRE.RES",
        "PATH": "Emergency Management Symbols/Incident/Fire Incident"
      },
      {
        "SYMBOLID": "E*I*CE----*****",
        "DESCRIPTION": "School Fire",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.3.5",
        "ALPHAHIERARCHY": "EMS.INCDNT.FIRE.SCH",
        "PATH": "Emergency Management Symbols/Incident/Fire Incident"
      },
      {
        "SYMBOLID": "E*I*CF----*****",
        "DESCRIPTION": "Smoke",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.3.6",
        "ALPHAHIERARCHY": "EMS.INCDNT.FIRE.SMK",
        "PATH": "Emergency Management Symbols/Incident/Fire Incident"
      },
      {
        "SYMBOLID": "E*I*CG----*****",
        "DESCRIPTION": "Special Needs Fire",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.3.7",
        "ALPHAHIERARCHY": "EMS.INCDNT.FIRE.SN",
        "PATH": "Emergency Management Symbols/Incident/Fire Incident"
      },
      {
        "SYMBOLID": "E*I*CH----*****",
        "DESCRIPTION": "Wild Fire",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.3.8",
        "ALPHAHIERARCHY": "EMS.INCDNT.FIRE.WLD",
        "PATH": "Emergency Management Symbols/Incident/Fire Incident"
      },
      {
        "SYMBOLID": "E*I*D-----*****",
        "DESCRIPTION": "Hazardous Material Incident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT",
        "PATH": "Emergency Management Symbols/Incident"
      },
      {
        "SYMBOLID": "E*I*DA----*****",
        "DESCRIPTION": "Chemical Agent",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.1",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.CHMAGT",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DB----*****",
        "DESCRIPTION": "Corrosive Material",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.2",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.CORMTL",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DC----*****",
        "DESCRIPTION": "Hazardous When Wet",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.3",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.WHWET",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DD----*****",
        "DESCRIPTION": "Explosive",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.4",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.EXPLV",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DE----*****",
        "DESCRIPTION": "Flammable Gas",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.5",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.FLGAS",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DF----*****",
        "DESCRIPTION": "Flammable Liquid",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.6",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.FLLIQ",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DG----*****",
        "DESCRIPTION": "Flammable Solid",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.7",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.FLSLD",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DH----*****",
        "DESCRIPTION": "Non-Flammable Gas",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.8",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.NFLGAS",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DI----*****",
        "DESCRIPTION": "Organic Peroxide",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.9",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.ORGPER",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DJ----*****",
        "DESCRIPTION": "Oxidizer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.10",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.OXDZR",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DK----*****",
        "DESCRIPTION": "Radioactive Material",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.11",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.RADMTL",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DL----*****",
        "DESCRIPTION": "Spontaneously Combustible",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.12",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.SPCMB",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DM----*****",
        "DESCRIPTION": "Toxic Gas",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.13",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.TXGAS",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DN----*****",
        "DESCRIPTION": "Toxic and Infectious",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.14",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.TXINF",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*DO----*****",
        "DESCRIPTION": "Unexploded Ordinance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.4.15",
        "ALPHAHIERARCHY": "EMS.INCDNT.HAZMAT.UNXORD",
        "PATH": "Emergency Management Symbols/Incident/Hazardous Material Incident"
      },
      {
        "SYMBOLID": "E*I*E-----*****",
        "DESCRIPTION": "Air Incident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.5",
        "ALPHAHIERARCHY": "EMS.INCDNT.AIR",
        "PATH": "Emergency Management Symbols/Incident"
      },
      {
        "SYMBOLID": "E*I*EA----*****",
        "DESCRIPTION": "Air Accident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.5.1",
        "ALPHAHIERARCHY": "EMS.INCDNT.AIR.ACDNT",
        "PATH": "Emergency Management Symbols/Incident/Air Incident"
      },
      {
        "SYMBOLID": "O*O*HA----*****",
        "DESCRIPTION": "Air Hijacking",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.5.2",
        "ALPHAHIERARCHY": "EMS.INCDNT.AIR.HJKG.APL",
        "PATH": "Emergency Management Symbols/Incident/Air Incident"
      },
      {
        "SYMBOLID": "E*I*F-----*****",
        "DESCRIPTION": "Marine Incident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.6",
        "ALPHAHIERARCHY": "EMS.INCDNT.MRN",
        "PATH": "Emergency Management Symbols/Incident"
      },
      {
        "SYMBOLID": "E*I*FA----*****",
        "DESCRIPTION": "Marine Accident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.6.1",
        "ALPHAHIERARCHY": "EMS.INCDNT.MRN.ACDNT",
        "PATH": "Emergency Management Symbols/Incident/Marine Incident"
      },
      {
        "SYMBOLID": "O*O*HV----*****",
        "DESCRIPTION": "Marine Hijacking",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.6.2",
        "ALPHAHIERARCHY": "EMS.INCDNT.MRN.HJKG",
        "PATH": "Emergency Management Symbols/Incident/Marine Incident"
      },
      {
        "SYMBOLID": "E*I*G-----*****",
        "DESCRIPTION": "Rail Incident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.7",
        "ALPHAHIERARCHY": "EMS.INCDNT.RAIL",
        "PATH": "Emergency Management Symbols/Incident"
      },
      {
        "SYMBOLID": "E*I*GA----*****",
        "DESCRIPTION": "Rail Accident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.7.1",
        "ALPHAHIERARCHY": "EMS.INCDNT.RAIL.ACDNT",
        "PATH": "Emergency Management Symbols/Incident/Rail Incident"
      },
      {
        "SYMBOLID": "E*I*GB----*****",
        "DESCRIPTION": "Rail Hijacking",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.7.2",
        "ALPHAHIERARCHY": "EMS.INCDNT.RAIL.HJCK",
        "PATH": "Emergency Management Symbols/Incident/Rail Incident"
      },
      {
        "SYMBOLID": "E*I*H-----*****",
        "DESCRIPTION": "Vehicle Incident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.8",
        "ALPHAHIERARCHY": "EMS.INCDNT.VEH",
        "PATH": "Emergency Management Symbols/Incident"
      },
      {
        "SYMBOLID": "E*I*HA----*****",
        "DESCRIPTION": "Vehicle Accident",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.8.1",
        "ALPHAHIERARCHY": "EMS.INCDNT.VEH.ACDNT",
        "PATH": "Emergency Management Symbols/Incident/Vehicle Incident"
      },
      {
        "SYMBOLID": "O*O*HT----*****",
        "DESCRIPTION": "Vehicle Hijacking",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.1.8.2",
        "ALPHAHIERARCHY": "EMS.INCDNT.VEH.HJKG",
        "PATH": "Emergency Management Symbols/Incident/Vehicle Incident"
      },
      {
        "SYMBOLID": "E*N*------*****",
        "DESCRIPTION": "Natural Events",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "6.X.2",
        "ALPHAHIERARCHY": "EMS.NATEVT",
        "PATH": "Emergency Management Symbols"
      },
      {
        "SYMBOLID": "E*O*------*****",
        "DESCRIPTION": "Operations",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "6.X.3",
        "ALPHAHIERARCHY": "EMS.OPN",
        "PATH": "Emergency Management Symbols"
      },
      {
        "SYMBOLID": "E*O*A-----*****",
        "DESCRIPTION": "Emergency Medical Operation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED",
        "PATH": "Emergency Management Symbols/Operations"
      },
      {
        "SYMBOLID": "E*O*AA----*****",
        "DESCRIPTION": "Emergency Medical Operation Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.1",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.UNT",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*AB----*****",
        "DESCRIPTION": "Emergency Medical Operation Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.2",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.EQPT",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*AC----H****",
        "DESCRIPTION": "Emergency Medical Operation Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.3",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.INS",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*AD----H****",
        "DESCRIPTION": "EMT Station Location",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.4",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.EMTLOC",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*AE----*****",
        "DESCRIPTION": "Ambulance",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.5",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.AMBLNC",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*AF----*****",
        "DESCRIPTION": "Medical Evacuation Helicopter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.6",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.MEH",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*AG----H****",
        "DESCRIPTION": "Health Department Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.7",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.HDF",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "S*G*IXH---H****",
        "DESCRIPTION": "Hospital",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.8",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.HSP",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "S*S*NM----*****",
        "DESCRIPTION": "Hospital Ship",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.9",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.HSPSHP",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*AJ----H****",
        "DESCRIPTION": "Medical Facilities Out Patient",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.10",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.MFOP",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*AK----H****",
        "DESCRIPTION": "Morgue",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.11",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.MRG",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*AL----H****",
        "DESCRIPTION": "Pharmacy",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.12",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.RX",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*AM----H****",
        "DESCRIPTION": "Triage",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.1.13",
        "ALPHAHIERARCHY": "EMS.OPN.EMMED.TRIAGE",
        "PATH": "Emergency Management Symbols/Operations/Emergency Medical Operation"
      },
      {
        "SYMBOLID": "E*O*B-----*****",
        "DESCRIPTION": "Emergency Operation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN",
        "PATH": "Emergency Management Symbols/Operations"
      },
      {
        "SYMBOLID": "E*O*BA----*****",
        "DESCRIPTION": "Emergency Operation Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.1",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.UNT",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BB----*****",
        "DESCRIPTION": "Emergency Operation Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.2",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.EQPT",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BC----H****",
        "DESCRIPTION": "Emergency Operation Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.3",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.INS",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BD----*****",
        "DESCRIPTION": "Emergency Collection Evacuation Point",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.4",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.ECEP",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BE----H****",
        "DESCRIPTION": "Emergency Incident Command Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.5",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.EICC",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BF----H****",
        "DESCRIPTION": "Emergency Operations Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.6",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.EOC",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BG----H****",
        "DESCRIPTION": "Emergency Public Information Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.7",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.EPIC",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BH----H****",
        "DESCRIPTION": "Emergency Shelter",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.8",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.EMSHLT",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BI----H****",
        "DESCRIPTION": "Emergency Staging Area",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.9",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.ESA",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BJ----*****",
        "DESCRIPTION": "Emergency Team",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.10",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.EMTM",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BK----H****",
        "DESCRIPTION": "Emergency Water Distribution Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.11",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.EWDC",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*BL----H****",
        "DESCRIPTION": "Emergency Food Distribution Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.2.12",
        "ALPHAHIERARCHY": "EMS.OPN.EMOPN.FDDIST",
        "PATH": "Emergency Management Symbols/Operations/Emergency Operation"
      },
      {
        "SYMBOLID": "E*O*C-----*****",
        "DESCRIPTION": "Fire Fighting Operation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.3",
        "ALPHAHIERARCHY": "EMS.OPN.FIRFT",
        "PATH": "Emergency Management Symbols/Operations"
      },
      {
        "SYMBOLID": "E*O*CA----*****",
        "DESCRIPTION": "Fire Fighting Operation Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.3.1",
        "ALPHAHIERARCHY": "EMS.OPN.FIRFT.FIRFTU",
        "PATH": "Emergency Management Symbols/Operations/Fire Fighting Operation"
      },
      {
        "SYMBOLID": "E*O*CB----*****",
        "DESCRIPTION": "Fire Fighting Operation Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.3.2",
        "ALPHAHIERARCHY": "EMS.OPN.FIRFT.FIRFTE",
        "PATH": "Emergency Management Symbols/Operations/Fire Fighting Operation"
      },
      {
        "SYMBOLID": "E*O*CC----*****",
        "DESCRIPTION": "Fire Hydrant",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.3.3",
        "ALPHAHIERARCHY": "EMS.OPN.FIRFT.FIRHYD",
        "PATH": "Emergency Management Symbols/Operations/Fire Fighting Operation"
      },
      {
        "SYMBOLID": "E*O*CD----H****",
        "DESCRIPTION": "Other Water Supply Location",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.3.4",
        "ALPHAHIERARCHY": "EMS.OPN.FIRFT.OTHH2O",
        "PATH": "Emergency Management Symbols/Operations/Fire Fighting Operation"
      },
      {
        "SYMBOLID": "E*O*CE----H****",
        "DESCRIPTION": "Fire Station",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.3.5",
        "ALPHAHIERARCHY": "EMS.OPN.FIRFT.FIRSTN",
        "PATH": "Emergency Management Symbols/Operations/Fire Fighting Operation"
      },
      {
        "SYMBOLID": "E*O*D-----*****",
        "DESCRIPTION": "Law Enforcement Operation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF",
        "PATH": "Emergency Management Symbols/Operations"
      },
      {
        "SYMBOLID": "E*O*DA----*****",
        "DESCRIPTION": "Law Enforcement Operation Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.LAWENU",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DB----*****",
        "DESCRIPTION": "Law Enforcement Operation Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.LAWENE",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DC----H****",
        "DESCRIPTION": "Law Enforcement Operation Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.LAWENI",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DD----*****",
        "DESCRIPTION": "ATF",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.4",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.ATF",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DDA---*****",
        "DESCRIPTION": "ATF Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.4.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.ATF.ATFUNT",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/ATF"
      },
      {
        "SYMBOLID": "E*O*DDB---*****",
        "DESCRIPTION": "ATF Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.4.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.ATF.ATFEQP",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/ATF"
      },
      {
        "SYMBOLID": "E*O*DDC---H****",
        "DESCRIPTION": "ATF Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.4.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.ATF.ATFINS",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/ATF"
      },
      {
        "SYMBOLID": "E*O*DE----*****",
        "DESCRIPTION": "Border Patrol",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.5",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.BDRPT",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DEA---*****",
        "DESCRIPTION": "Border Patrol Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.5.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.BDRPT.BDRPTU",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Border Patrol"
      },
      {
        "SYMBOLID": "E*O*DEB---*****",
        "DESCRIPTION": "Border Patrol Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.5.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.BDRPT.BDRPTE",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Border Patrol"
      },
      {
        "SYMBOLID": "E*O*DEC---H****",
        "DESCRIPTION": "Border Patrol Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.5.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.BDRPT.BDRPTI",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Border Patrol"
      },
      {
        "SYMBOLID": "E*O*DF----*****",
        "DESCRIPTION": "Customs Service",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.6",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.CSTM",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DFA---*****",
        "DESCRIPTION": "Customs Service Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.6.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.CSTM.CSTMUN",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Customs Service"
      },
      {
        "SYMBOLID": "E*O*DFB---*****",
        "DESCRIPTION": "Customs Service Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.6.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.CSTM.CSTMEQ",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Customs Service"
      },
      {
        "SYMBOLID": "E*O*DFC---H****",
        "DESCRIPTION": "Customs Service Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.6.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.CSTM.CSTMIN",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Customs Service"
      },
      {
        "SYMBOLID": "E*O*DG----*****",
        "DESCRIPTION": "DEA",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.7",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.DEA",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DGA---*****",
        "DESCRIPTION": "DEA Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.7.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.DEA.DEAUNT",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/DEA"
      },
      {
        "SYMBOLID": "E*O*DGB---*****",
        "DESCRIPTION": "DEA Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.7.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.DEA.DEAEQP",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/DEA"
      },
      {
        "SYMBOLID": "E*O*DGC---H****",
        "DESCRIPTION": "DEA Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.7.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.DEA.DEAINS",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/DEA"
      },
      {
        "SYMBOLID": "E*O*DH----*****",
        "DESCRIPTION": "DOJ",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.8",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.DOJ",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DHA---*****",
        "DESCRIPTION": "DOJ Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.8.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.DOJ.DOJUNT",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/DOJ"
      },
      {
        "SYMBOLID": "E*O*DHB---*****",
        "DESCRIPTION": "DOJ Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.8.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.DOJ.DOJEQP",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/DOJ"
      },
      {
        "SYMBOLID": "E*O*DHC---H****",
        "DESCRIPTION": "DOJ Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.8.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.DOJ.DOJINS",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/DOJ"
      },
      {
        "SYMBOLID": "E*O*DI----*****",
        "DESCRIPTION": "FBI",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.9",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.FBI",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DIA---*****",
        "DESCRIPTION": "FBI Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.9.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.FBI.FBIUNT",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/FBI"
      },
      {
        "SYMBOLID": "E*O*DIB---*****",
        "DESCRIPTION": "FBI Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.9.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.FBI.FBIEQP",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/FBI"
      },
      {
        "SYMBOLID": "E*O*DIC---H****",
        "DESCRIPTION": "FBI Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.9.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.FBI.FBIINS",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/FBI"
      },
      {
        "SYMBOLID": "E*O*DJ----*****",
        "DESCRIPTION": "Police",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.10",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.POL",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "S*G*UULC--*****",
        "DESCRIPTION": "Police Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.10.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.POL.POLUNT",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Police"
      },
      {
        "SYMBOLID": "E*O*DJB---*****",
        "DESCRIPTION": "Police Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.10.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.POL.POLEQP",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Police"
      },
      {
        "SYMBOLID": "E*O*DJC---H****",
        "DESCRIPTION": "Police Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.10.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.POL.POLINS",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Police"
      },
      {
        "SYMBOLID": "E*O*DK----H****",
        "DESCRIPTION": "Prison",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.11",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.PRSN",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DL----*****",
        "DESCRIPTION": "Secret Service",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.12",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.SECSR",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DLA---*****",
        "DESCRIPTION": "Secret Service Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.12.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.SECSR.SECSRU",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Secret Service"
      },
      {
        "SYMBOLID": "E*O*DLB---*****",
        "DESCRIPTION": "Secret Service Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.12.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.SECSR.SECSRE",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Secret Service"
      },
      {
        "SYMBOLID": "E*O*DLC---H****",
        "DESCRIPTION": "Secret Service Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.12.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.SECSR.SECSRI",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Secret Service"
      },
      {
        "SYMBOLID": "E*O*DM----*****",
        "DESCRIPTION": "TSA",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.13",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.TSA",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DMA---*****",
        "DESCRIPTION": "TSA Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.13.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.TSA.TSAUNT",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/TSA"
      },
      {
        "SYMBOLID": "E*O*DMB---*****",
        "DESCRIPTION": "TSA Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.13.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.TSA.TSAEQP",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/TSA"
      },
      {
        "SYMBOLID": "E*O*DMC---H****",
        "DESCRIPTION": "TSA Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.13.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.TSA.TSAINS",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/TSA"
      },
      {
        "SYMBOLID": "E*O*DN----*****",
        "DESCRIPTION": "Coast Guard",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.14",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.CSTGD",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DNA---*****",
        "DESCRIPTION": "Coast Guard Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.14.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.CSTGD.CSTGDU",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Coast Guard"
      },
      {
        "SYMBOLID": "S*S*XL----*****",
        "DESCRIPTION": "Coast Guard Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.14.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.CSTGD.CSTGDE",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Coast Guard"
      },
      {
        "SYMBOLID": "E*O*DNC---H****",
        "DESCRIPTION": "Coast Guard Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.14.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.CSTGD.CSTGDI",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/Coast Guard"
      },
      {
        "SYMBOLID": "E*O*DO----*****",
        "DESCRIPTION": "US Marshals Service",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.15",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.USMAR",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation"
      },
      {
        "SYMBOLID": "E*O*DOA---*****",
        "DESCRIPTION": "US Marshals Service Unit",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.15.1",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.USMAR.USMARU",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/US Marshals Service"
      },
      {
        "SYMBOLID": "E*O*DOB---*****",
        "DESCRIPTION": "US Marshals Service Equipment",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.15.2",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.USMAR.USMARE",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/US Marshals Service"
      },
      {
        "SYMBOLID": "E*O*DOC---H****",
        "DESCRIPTION": "US Marshals Service Installation",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.4.15.3",
        "ALPHAHIERARCHY": "EMS.OPN.LAWENF.USMAR.USMARI",
        "PATH": "Emergency Management Symbols/Operations/Law Enforcement Operation/US Marshals Service"
      },
      {
        "SYMBOLID": "S*G*ES----*****",
        "DESCRIPTION": "Sensor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.5",
        "ALPHAHIERARCHY": "EMS.OPN.SNS",
        "PATH": "Emergency Management Symbols/Operations"
      },
      {
        "SYMBOLID": "E*O*EA----*****",
        "DESCRIPTION": "Biological Sensor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.5.1",
        "ALPHAHIERARCHY": "EMS.OPN.SNS.BIO",
        "PATH": "Emergency Management Symbols/Operations/Sensor"
      },
      {
        "SYMBOLID": "E*O*EB----*****",
        "DESCRIPTION": "Chemical Sensor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.5.2",
        "ALPHAHIERARCHY": "EMS.OPN.SNS.CML",
        "PATH": "Emergency Management Symbols/Operations/Sensor"
      },
      {
        "SYMBOLID": "E*O*EC----*****",
        "DESCRIPTION": "Intrusion Sensor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.5.3",
        "ALPHAHIERARCHY": "EMS.OPN.SNS.INT",
        "PATH": "Emergency Management Symbols/Operations/Sensor"
      },
      {
        "SYMBOLID": "E*O*ED----*****",
        "DESCRIPTION": "Nuclear Sensor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.5.4",
        "ALPHAHIERARCHY": "EMS.OPN.SNS.NUC",
        "PATH": "Emergency Management Symbols/Operations/Sensor"
      },
      {
        "SYMBOLID": "E*O*EE----*****",
        "DESCRIPTION": "Radiological Sensor",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.3.5.5",
        "ALPHAHIERARCHY": "EMS.OPN.SNS.RAD",
        "PATH": "Emergency Management Symbols/Operations/Sensor"
      },
      {
        "SYMBOLID": "E*F*------H****",
        "DESCRIPTION": "Infrastructure",
        "DRAWCATEGORY": "0",
        "HIERARCHY": "6.X.4",
        "ALPHAHIERARCHY": "EMS.INFSTR",
        "PATH": "Emergency Management Symbols"
      },
      {
        "SYMBOLID": "E*F*A-----H****",
        "DESCRIPTION": "Agriculture and Food Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.AGFD",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*AA----H****",
        "DESCRIPTION": "Agricultural Laboratory",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.1.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.AGFD.AGLAB",
        "PATH": "Emergency Management Symbols/Infrastructure/Agriculture and Food Infrastructure"
      },
      {
        "SYMBOLID": "E*F*AB----H****",
        "DESCRIPTION": "Animal Feedlot",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.1.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.AGFD.AFL",
        "PATH": "Emergency Management Symbols/Infrastructure/Agriculture and Food Infrastructure"
      },
      {
        "SYMBOLID": "E*F*AC----H****",
        "DESCRIPTION": "Commercial Food Distribution Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.1.3",
        "ALPHAHIERARCHY": "EMS.INFSTR.AGFD.CFDC",
        "PATH": "Emergency Management Symbols/Infrastructure/Agriculture and Food Infrastructure"
      },
      {
        "SYMBOLID": "E*F*AD----H****",
        "DESCRIPTION": "Farm/Ranch",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.1.4",
        "ALPHAHIERARCHY": "EMS.INFSTR.AGFD.FRMRNC",
        "PATH": "Emergency Management Symbols/Infrastructure/Agriculture and Food Infrastructure"
      },
      {
        "SYMBOLID": "E*F*AE----H****",
        "DESCRIPTION": "Food Production Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.1.5",
        "ALPHAHIERARCHY": "EMS.INFSTR.AGFD.FPC",
        "PATH": "Emergency Management Symbols/Infrastructure/Agriculture and Food Infrastructure"
      },
      {
        "SYMBOLID": "E*F*AF----H****",
        "DESCRIPTION": "Food Retail",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.1.6",
        "ALPHAHIERARCHY": "EMS.INFSTR.AGFD.FDRTL",
        "PATH": "Emergency Management Symbols/Infrastructure/Agriculture and Food Infrastructure"
      },
      {
        "SYMBOLID": "E*F*AH----H****",
        "DESCRIPTION": "Grain Storage",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.1.7",
        "ALPHAHIERARCHY": "EMS.INFSTR.AGFD.GRSTR",
        "PATH": "Emergency Management Symbols/Infrastructure/Agriculture and Food Infrastructure"
      },
      {
        "SYMBOLID": "E*F*B-----H****",
        "DESCRIPTION": "Banking Finance and Insurance Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.BFI",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*BA----*****",
        "DESCRIPTION": "ATM",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.2.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.BFI.ATM",
        "PATH": "Emergency Management Symbols/Infrastructure/Banking Finance and Insurance Infrastructure"
      },
      {
        "SYMBOLID": "E*F*BB----H****",
        "DESCRIPTION": "Bank",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.2.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.BFI.BANK",
        "PATH": "Emergency Management Symbols/Infrastructure/Banking Finance and Insurance Infrastructure"
      },
      {
        "SYMBOLID": "E*F*BC----H****",
        "DESCRIPTION": "Bullion Storage",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.2.3",
        "ALPHAHIERARCHY": "EMS.INFSTR.BFI.BLSTR",
        "PATH": "Emergency Management Symbols/Infrastructure/Banking Finance and Insurance Infrastructure"
      },
      {
        "SYMBOLID": "E*F*BD----H****",
        "DESCRIPTION": "Federal Reserve Bank",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.2.4",
        "ALPHAHIERARCHY": "EMS.INFSTR.BFI.FRB",
        "PATH": "Emergency Management Symbols/Infrastructure/Banking Finance and Insurance Infrastructure"
      },
      {
        "SYMBOLID": "E*F*BE----H****",
        "DESCRIPTION": "Financial Exchange",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.2.5",
        "ALPHAHIERARCHY": "EMS.INFSTR.BFI.FINEX",
        "PATH": "Emergency Management Symbols/Infrastructure/Banking Finance and Insurance Infrastructure"
      },
      {
        "SYMBOLID": "E*F*BF----H****",
        "DESCRIPTION": "Financial Services Other",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.2.6",
        "ALPHAHIERARCHY": "EMS.INFSTR.BFI.FSO",
        "PATH": "Emergency Management Symbols/Infrastructure/Banking Finance and Insurance Infrastructure"
      },
      {
        "SYMBOLID": "E*F*C-----H****",
        "DESCRIPTION": "Commercial Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*CA----H****",
        "DESCRIPTION": "Chemical Plant",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL.CMLPLN",
        "PATH": "Emergency Management Symbols/Infrastructure/Commercial Infrastructure"
      },
      {
        "SYMBOLID": "E*F*CB----H****",
        "DESCRIPTION": "Firearms Manufacturer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL.FIRMAN",
        "PATH": "Emergency Management Symbols/Infrastructure/Commercial Infrastructure"
      },
      {
        "SYMBOLID": "E*F*CC----H****",
        "DESCRIPTION": "Firearms Retailer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3.3",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL.FIRRET",
        "PATH": "Emergency Management Symbols/Infrastructure/Commercial Infrastructure"
      },
      {
        "SYMBOLID": "E*F*CD----H****",
        "DESCRIPTION": "Hazardous Material Production",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3.4",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL.HZMTPR",
        "PATH": "Emergency Management Symbols/Infrastructure/Commercial Infrastructure"
      },
      {
        "SYMBOLID": "E*F*CE----H****",
        "DESCRIPTION": "Hazardous Material Storage",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3.5",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL.HZMTST",
        "PATH": "Emergency Management Symbols/Infrastructure/Commercial Infrastructure"
      },
      {
        "SYMBOLID": "E*F*CF----H****",
        "DESCRIPTION": "Industrial Site",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3.6",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL.INDSTE",
        "PATH": "Emergency Management Symbols/Infrastructure/Commercial Infrastructure"
      },
      {
        "SYMBOLID": "E*F*CG----*****",
        "DESCRIPTION": "Landfill",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3.7",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL.LNDFL",
        "PATH": "Emergency Management Symbols/Infrastructure/Commercial Infrastructure"
      },
      {
        "SYMBOLID": "E*F*CH----H****",
        "DESCRIPTION": "Pharmaceutical Manufacturer",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3.8",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL.RXMFG",
        "PATH": "Emergency Management Symbols/Infrastructure/Commercial Infrastructure"
      },
      {
        "SYMBOLID": "E*F*CI----H****",
        "DESCRIPTION": "Contaminated Hazardous Waste Site",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3.9",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL.CHWS",
        "PATH": "Emergency Management Symbols/Infrastructure/Commercial Infrastructure"
      },
      {
        "SYMBOLID": "E*F*CJ----H****",
        "DESCRIPTION": "Toxic Release Inventory",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.3.10",
        "ALPHAHIERARCHY": "EMS.INFSTR.CMCL.TXRLIN",
        "PATH": "Emergency Management Symbols/Infrastructure/Commercial Infrastructure"
      },
      {
        "SYMBOLID": "E*F*D-----H****",
        "DESCRIPTION": "Educational Facilties Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.4",
        "ALPHAHIERARCHY": "EMS.INFSTR.EDFAC",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*DA----H****",
        "DESCRIPTION": "College University",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.4.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.EDFAC.COLUNI",
        "PATH": "Emergency Management Symbols/Infrastructure/Educational Facilties Infrastructure"
      },
      {
        "SYMBOLID": "E*F*DB----H****",
        "DESCRIPTION": "School",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.4.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.EDFAC.SCHOOL",
        "PATH": "Emergency Management Symbols/Infrastructure/Educational Facilties Infrastructure"
      },
      {
        "SYMBOLID": "S*G*IUE---H****",
        "DESCRIPTION": "Energy Facilities Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.5",
        "ALPHAHIERARCHY": "EMS.INFSTR.ENGFAC",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*EA----H****",
        "DESCRIPTION": "Generation Station",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.5.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.ENGFAC.GENSTA",
        "PATH": "Emergency Management Symbols/Infrastructure/Energy Facilities Infrastructure"
      },
      {
        "SYMBOLID": "E*F*EB----H****",
        "DESCRIPTION": "Natural Gas Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.5.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.ENGFAC.NTLGAS",
        "PATH": "Emergency Management Symbols/Infrastructure/Energy Facilities Infrastructure"
      },
      {
        "SYMBOLID": "S*G*IUEN--H****",
        "DESCRIPTION": "Nuclear Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.5.3",
        "ALPHAHIERARCHY": "EMS.INFSTR.ENGFAC.NUCFAC",
        "PATH": "Emergency Management Symbols/Infrastructure/Energy Facilities Infrastructure"
      },
      {
        "SYMBOLID": "S*G*IRP---*****",
        "DESCRIPTION": "Petrolium Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.5.4",
        "ALPHAHIERARCHY": "EMS.INFSTR.ENGFAC.PETFAC",
        "PATH": "Emergency Management Symbols/Infrastructure/Energy Facilities Infrastructure"
      },
      {
        "SYMBOLID": "E*F*EE----H****",
        "DESCRIPTION": "Propane Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.5.5",
        "ALPHAHIERARCHY": "EMS.INFSTR.ENGFAC.PROPNE",
        "PATH": "Emergency Management Symbols/Infrastructure/Energy Facilities Infrastructure"
      },
      {
        "SYMBOLID": "E*F*F-----H****",
        "DESCRIPTION": "Government Site Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.6",
        "ALPHAHIERARCHY": "EMS.INFSTR.GVTSTE",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*G-----H****",
        "DESCRIPTION": "Military Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.7",
        "ALPHAHIERARCHY": "EMS.INFSTR.MIL",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*GA----H****",
        "DESCRIPTION": "Military Armory",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.7.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.MIL.ARMORY",
        "PATH": "Emergency Management Symbols/Infrastructure/Military Infrastructure"
      },
      {
        "SYMBOLID": "S*G*IB----H****",
        "DESCRIPTION": "Military Base",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.7.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.MIL.MILBF",
        "PATH": "Emergency Management Symbols/Infrastructure/Military Infrastructure"
      },
      {
        "SYMBOLID": "E*F*H-----H****",
        "DESCRIPTION": "Postal Service Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.8",
        "ALPHAHIERARCHY": "EMS.INFSTR.PSTSRV",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*HA----H****",
        "DESCRIPTION": "Postal Distribution Center",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.8.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.PSTSRV.PDC",
        "PATH": "Emergency Management Symbols/Infrastructure/Postal Service Infrastructure"
      },
      {
        "SYMBOLID": "E*F*HB----H****",
        "DESCRIPTION": "Post Office",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.8.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.PSTSRV.PO",
        "PATH": "Emergency Management Symbols/Infrastructure/Postal Service Infrastructure"
      },
      {
        "SYMBOLID": "E*F*I-----H****",
        "DESCRIPTION": "Public Venues Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.9",
        "ALPHAHIERARCHY": "EMS.INFSTR.PUBVEN",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*IA----H****",
        "DESCRIPTION": "Enclosed Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.9.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.PUBVEN.ENCFAC",
        "PATH": "Emergency Management Symbols/Infrastructure/Public Venues Infrastructure"
      },
      {
        "SYMBOLID": "E*F*IB----H****",
        "DESCRIPTION": "Open Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.9.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.PUBVEN.OPNFAC",
        "PATH": "Emergency Management Symbols/Infrastructure/Public Venues Infrastructure"
      },
      {
        "SYMBOLID": "E*F*IC----H****",
        "DESCRIPTION": "Recreational Area",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.9.3",
        "ALPHAHIERARCHY": "EMS.INFSTR.PUBVEN.RECARE",
        "PATH": "Emergency Management Symbols/Infrastructure/Public Venues Infrastructure"
      },
      {
        "SYMBOLID": "E*F*ID----H****",
        "DESCRIPTION": "Religious Institution",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.9.4",
        "ALPHAHIERARCHY": "EMS.INFSTR.PUBVEN.RELIG",
        "PATH": "Emergency Management Symbols/Infrastructure/Public Venues Infrastructure"
      },
      {
        "SYMBOLID": "E*F*J-----H****",
        "DESCRIPTION": "Special Needs Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.10",
        "ALPHAHIERARCHY": "EMS.INFSTR.SPCNDS",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*JA----H****",
        "DESCRIPTION": "Adult Day Care",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.10.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.SPCNDS.ADLTDC",
        "PATH": "Emergency Management Symbols/Infrastructure/Special Needs Infrastructure"
      },
      {
        "SYMBOLID": "E*F*JB----H****",
        "DESCRIPTION": "Child Day Care",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.10.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.SPCNDS.CHLDC",
        "PATH": "Emergency Management Symbols/Infrastructure/Special Needs Infrastructure"
      },
      {
        "SYMBOLID": "E*F*JC----H****",
        "DESCRIPTION": "Elder Care",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.10.3",
        "ALPHAHIERARCHY": "EMS.INFSTR.SPCNDS.ELDERC",
        "PATH": "Emergency Management Symbols/Infrastructure/Special Needs Infrastructure"
      },
      {
        "SYMBOLID": "E*F*K-----H****",
        "DESCRIPTION": "Telecommunications Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.11",
        "ALPHAHIERARCHY": "EMS.INFSTR.TELCOM",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "S*G*IUT---H****",
        "DESCRIPTION": "Telecommunications Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.11.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.TELCOM.TCF",
        "PATH": "Emergency Management Symbols/Infrastructure/Telecommunications Infrastructure"
      },
      {
        "SYMBOLID": "E*F*KB----H****",
        "DESCRIPTION": "Telecommunications Tower",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.11.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.TELCOM.TCTWR",
        "PATH": "Emergency Management Symbols/Infrastructure/Telecommunications Infrastructure"
      },
      {
        "SYMBOLID": "S*G*IT----H****",
        "DESCRIPTION": "Transportation Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*LA----H****",
        "DESCRIPTION": "Air Traffic Control Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.ATCF",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "S*G*IBA---H****",
        "DESCRIPTION": "Airport",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.AIRPT",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "G*M*BCB---****X",
        "DESCRIPTION": "Bridge",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.3",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.BRG",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "E*F*LD----H****",
        "DESCRIPTION": "Bus Station",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.4",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.BSTN",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "E*F*LE----H****",
        "DESCRIPTION": "Ferry Terminal",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.5",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.FRYTRM",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "E*F*LF----H****",
        "DESCRIPTION": "Helicopter Landing Site",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.6",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.HLS",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "WOS-ML----P----",
        "DESCRIPTION": "Lock",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.7",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.LCK",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "E*F*LH----H****",
        "DESCRIPTION": "Maintenance Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.8",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.MAINTF",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "S*G*IBN---H****",
        "DESCRIPTION": "Port",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.9",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.SP",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "E*F*LJ----H****",
        "DESCRIPTION": "Rail Station",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.10",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.RLSTN",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "E*F*LK----H****",
        "DESCRIPTION": "Rest Stop",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.11",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.RSTSTP",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "WOS-HPBA--P----",
        "DESCRIPTION": "Ship Anchorage",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.12",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.ANCRG",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "E*F*LM----H****",
        "DESCRIPTION": "Toll Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.13",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.TOLLF",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "G*S*PO----****X",
        "DESCRIPTION": "Traffic Control Point",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.14",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.TCP",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "E*F*LO----H****",
        "DESCRIPTION": "Traffic Inspection Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.15",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.TIF",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "E*F*LP----H****",
        "DESCRIPTION": "Tunnel",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.12.16",
        "ALPHAHIERARCHY": "EMS.INFSTR.TSP.TML",
        "PATH": "Emergency Management Symbols/Infrastructure/Transportation Infrastructure"
      },
      {
        "SYMBOLID": "S*G*IUP---H****",
        "DESCRIPTION": "Water Supply Infrastructure",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.13",
        "ALPHAHIERARCHY": "EMS.INFSTR.WS",
        "PATH": "Emergency Management Symbols/Infrastructure"
      },
      {
        "SYMBOLID": "E*F*MA----H****",
        "DESCRIPTION": "Control Valve",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.13.1",
        "ALPHAHIERARCHY": "EMS.INFSTR.WS.CV",
        "PATH": "Emergency Management Symbols/Infrastructure/Water Supply Infrastructure"
      },
      {
        "SYMBOLID": "E*F*MB----H****",
        "DESCRIPTION": "Dam",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.13.2",
        "ALPHAHIERARCHY": "EMS.INFSTR.WS.DAM",
        "PATH": "Emergency Management Symbols/Infrastructure/Water Supply Infrastructure"
      },
      {
        "SYMBOLID": "E*F*MC----H****",
        "DESCRIPTION": "Discharge Outfall",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.13.3",
        "ALPHAHIERARCHY": "EMS.INFSTR.WS.DO",
        "PATH": "Emergency Management Symbols/Infrastructure/Water Supply Infrastructure"
      },
      {
        "SYMBOLID": "E*F*MD----H****",
        "DESCRIPTION": "Ground Water Well",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.13.4",
        "ALPHAHIERARCHY": "EMS.INFSTR.WS.GWWELL",
        "PATH": "Emergency Management Symbols/Infrastructure/Water Supply Infrastructure"
      },
      {
        "SYMBOLID": "E*F*ME----H****",
        "DESCRIPTION": "Pumping Station",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.13.5",
        "ALPHAHIERARCHY": "EMS.INFSTR.WS.PMPSTN",
        "PATH": "Emergency Management Symbols/Infrastructure/Water Supply Infrastructure"
      },
      {
        "SYMBOLID": "E*F*MF----H****",
        "DESCRIPTION": "Reservoir",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.13.6",
        "ALPHAHIERARCHY": "EMS.INFSTR.WS.RSVR",
        "PATH": "Emergency Management Symbols/Infrastructure/Water Supply Infrastructure"
      },
      {
        "SYMBOLID": "E*F*MG----H****",
        "DESCRIPTION": "Storage Tower",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.13.7",
        "ALPHAHIERARCHY": "EMS.INFSTR.WS.STRTWR",
        "PATH": "Emergency Management Symbols/Infrastructure/Water Supply Infrastructure"
      },
      {
        "SYMBOLID": "E*F*MH----H****",
        "DESCRIPTION": "Surface Water Intake",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.13.8",
        "ALPHAHIERARCHY": "EMS.INFSTR.WS.SWI",
        "PATH": "Emergency Management Symbols/Infrastructure/Water Supply Infrastructure"
      },
      {
        "SYMBOLID": "E*F*MI----H****",
        "DESCRIPTION": "Wastewater Treatment Facility",
        "DRAWCATEGORY": "8",
        "HIERARCHY": "6.X.4.13.9",
        "ALPHAHIERARCHY": "EMS.INFSTR.WS.WH20TF",
        "PATH": "Emergency Management Symbols/Infrastructure/Water Supply Infrastructure"
      }
    ]
  }
};