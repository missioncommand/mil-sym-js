/* expected input format
var e.data = {};
		e.data.id = "ID";
		e.data.name = "Name";
		e.data.description = "description";
		e.data.symbolID = "SFGPU----------";//A 15 character symbolID corresponding to one of the graphics in the MIL-STD-2525C
		e.data.points = controlPoints4;
		e.data.altMode = "absolute";//for 3D
		e.data.scale = scale4;//for 3D
		e.data.bbox = bbox4;
		e.data.modifiers = modifiers;
		e.data.format = format;
		e.data.pHeight = pixelHeight;//for 2D
		e.data.pWidth = pixelWidth;//for 2D
        e.data.converter l converter for canvas or datauri format
*/

/* return object
{
    id:e.data.id,//same as what was passed in
    result:strOutput,//resultant kml,json or error message
    format:e.data.format//format number or "ERROR" if there was a problem like missing required parameters    
}
*/

importScripts('m-c.js');

var rendererMP = sec.web.renderer.SECWebRenderer;

	armyc2.c2sd.renderer.utilities.ErrorLogger = {};
	armyc2.c2sd.renderer.utilities.ErrorLogger.LogMessage = function(sourceClass, sourceMethod, message){throw {message:(sourceClass + "-" + sourceMethod + ": " + message)}};
	armyc2.c2sd.renderer.utilities.ErrorLogger.LogWarning = function(sourceClass, sourceMethod, message, level){throw {message:(sourceClass + "-" + sourceMethod + ": " + message)}};
	armyc2.c2sd.renderer.utilities.ErrorLogger.LogException = function(sourceClass, sourceMethod, err, level)
	{
		var strMessage = (sourceClass + "." + sourceMethod + "(): " + err.message);
		var myStack = "";
		if(err.stack !== undefined)
		{
			myStack = err.stack;
		}
		
		if(!(myStack))
		{
			if(err.filename && err.lineno)
			{
				myStack = err.filename + " @ line# " + err.lineno;
			}
		}
		strMessage += "\n" + myStack;
		err.message += "\n" + myStack;
		throw strMessage;
		//throw {message:strMessage,error:err, stack:myStack};
	};
	
	
	var window = {};
	var console = {};
	console.log = console.log || function(){};
	console.info = console.info || function(){};
	console.warn = console.warn || function(){};
	console.error = console.error || function(){};
	window.console = console;
	
	var document = {};
	

onmessage = function(e)
{
	var strOutput = null;
	
	if(e.data !== null && e.data.altMode !== null)
	{	
        //data for symbol on 3d map so call RenderSymbol     
        strOutput = rendererMP.RenderSymbol(e.data.id,e.data.name,e.data.description, e.data.symbolID, e.data.points, e.data.altMode,e.data.scale, e.data.bbox, e.data.modifiers,e.data.format, e.data.symstd);
	}
	else
	{
        //data for symbol on 2D map so call RenderSymbol2D
        strOutput = rendererMP.RenderSymbol2D(e.data.id,e.data.name,e.data.description, e.data.symbolID, e.data.points, e.data.pixelWidth,e.data.pixelHeight, e.data.bbox, e.data.modifiers,e.data.format, e.data.symstd);
	}
	
	
	if(strOutput !== null)
	{
        //return results
        var format = e.data.format;
        if(strOutput.substring(0,15) === '{"type":"error"')
            format = "ERROR";
		postMessage({id:e.data.id,result:strOutput,format:format});
	}
}

