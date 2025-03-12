
const scriptSrc = document.currentScript.src;
const scriptDir = scriptSrc.substring(0, scriptSrc.lastIndexOf("/"));
//document.write(scriptDir + "\n");
const cssTag = "<link rel=\"stylesheet\" href=\"" + scriptDir + "/renderer.css\" type=\"text/css\" charset=\"utf-8\" />";
const rendererScriptTag = "<script src=\"" + scriptDir + "/sm-bc.min.js\" type=\"text/javascript\" ></script>";
document.write(cssTag);
document.write(rendererScriptTag);
document.write('\
\
	\
    <script type = "text/javascript">\
\
	var fontCheckTimer =  null;\
	var retries = 15;\
	var attempts = 0;\
		function checkFonts(){\
            if(armyc2.c2sd.renderer.utilities.RendererUtilities.fontsLoaded())\
            {\
                setSpeedTestImages();\
                console.log("fonts loaded");\
            }\
            else if(attempts < retries)\
            {\
                attempts++;\
                fontCheckTimer = setTimeout(checkFonts, 1000);\
                console.log("fonts loading...");\
                armyc2.c2sd.renderer.MilStdIconRenderer.Render("SHAPWMSA-------",{});\
            }\
            else\
            {\
                console.log("fonts didn\'t load or status couldn\'t be determined for " + retries + " seconds.");\
            }\
	}\
\
	function preloadfonts()\
	{\
            var msi = armyc2.c2sd.renderer.MilStdIconRenderer;\
            var symStd = 1;\
            if(armyc2.c2sd.renderer.utilities.RendererUtilities.fontsLoaded()){\
                    console.log("fonts loaded fast");\
                    setSpeedTestImages();\
            }\
            else\
            {\
                    fontCheckTimer = setTimeout(checkFonts, 1000);\
            }\
            armyc2.c2sd.renderer.utilities.RendererSettings.setTextOutlineWidth(1);\
			armyc2.c2sd.renderer.utilities.RendererSettings.setSymbologyStandard(1);\
	}\
	preloadfonts();\
</script>\
');