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
        e.data.fontInfo
*/

/* return object for KML or GeoJSON
{
    id:e.data.id,//same as what was passed in
    result:strOutput,//resultant kml,json or error message
    format:e.data.format//format number or "ERROR" if there was a problem like missing required parameters    
}
*/
/* return object for SVG
{
    id:e.data.id,//same as what was passed in
    result:{svg:dataURI,geoTL:{x,y}, geoBR:{x,y}, wasClipped:true/false, bounds:{x,y,width,height}}
    format:e.data.format//format number or "ERROR" if there was a problem like missing required parameters    
}
*/


/* expected input format for batch
var e.data = {};
        e.data.altMode = "absolute";//for 3D
		e.data.scale = scale4;//for 3D
		e.data.bbox = bbox4;
        e.data.format = format
        e.data.pHeight = pixelHeight;//for 2D
		e.data.pWidth = pixelWidth;//for 2D
        e.data.converter = optional converter for SVG format
        e.data.fontInfo = fontInfo//for SVG
        e.data.batch = [{id:"ID",name:"name",description:"description",symbolID:"GFTPL-----****X",points:controlPoints,symStd:symStd,modifiers:{ModifiersTG.T_UNIQUE_DESIGNATION_1:"T",MilStdAttributes.LineColor:"#00FF00"}}];
        
*/

/* return object for batch
{
    [{id:batch.id,symbolID:symbolID,svg:dataURI,geoTL:geoCoordTL, geoBR:geoCoordBR, wasClipped:wasClipped}]
}
*/

//GeoCanvas doesn't work in a web worker due to its need for the DOM.
importScripts('m-c.js');//for strictly KML, GeoJSON and SVG(with hatch line and metoc fills, but no symbol fills)
//importScripts('svm-bc.js');//for strictly KML, GeoJSON and SVG(with hatch line and metoc fills, and symbol fills)

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
	var output = null;
    var converter = null;
    var fontInfo = null;
    
    if(e.data.fontInfo !== null)
            fontInfo = e.data.fontInfo;
	
    if(e.data && e.data.batch && e.data.batch.length > 0)
    {
        var result = null;
        var len = e.data.batch.length;
        var items = e.data.batch;
        //output = new Array(len);
        output = [];
        try
        {
            for(var i = 0; i < len; i++)
            {
                item = items[i];
                if(e.data.altMode)
                {
                    if(e.data.converter)
                        converter = e.data.converter;	
                    //data for symbol on 3d map so call RenderSymbol     
                    result = rendererMP.RenderSymbol(item.id,item.name,item.description, item.symbolID, item.points, e.data.altMode,e.data.scale, e.data.bbox, item.modifiers,e.data.format, item.symstd, converter, fontInfo);
                }
                else
                {
                    //data for symbol on 2D map so call RenderSymbol2D
                    result = rendererMP.RenderSymbol2D(item.id,item.name,item.description, item.symbolID, item.points, e.data.pixelWidth,e.data.pixelHeight, e.data.bbox, item.modifiers,e.data.format, item.symstd, fontInfo);
                }
                if(result)
                {
                    result.id = item.id;
                    result.symbolID = item.symbolID;
                    //output[i] = result;
                    output.push(result);
                }
            }
        }
        catch(err)
        {
            throw(err);
        }
        //[{id:batch.id,symbolID:symbolID,svg:dataURI,geoTL:geoCoordTL, geoBR:geoCoordBR, wasClipped:wasClipped}]
    }
    else if(e.data)
    {
        if(e.data.altMode)
        {
            if(e.data.converter)
                converter = e.data.converter;	
            //data for symbol on 3d map so call RenderSymbol     
            output = rendererMP.RenderSymbol(e.data.id,e.data.name,e.data.description, e.data.symbolID, e.data.points, e.data.altMode,e.data.scale, e.data.bbox, e.data.modifiers,e.data.format, e.data.symstd, converter, fontInfo);
        }
        else
        {
            //data for symbol on 2D map so call RenderSymbol2D
            output = rendererMP.RenderSymbol2D(e.data.id,e.data.name,e.data.description, e.data.symbolID, e.data.points, e.data.pixelWidth,e.data.pixelHeight, e.data.bbox, e.data.modifiers,e.data.format, e.data.symstd, fontInfo);
        }
    }
	
	if(e.data.batch)
    {
        postMessage({result:output,format:e.data.format});
    }
    else
    {
        if(output && output.substring)//kml or geojson
        {
            //return results
            var format = e.data.format;
            if(output.substring(0,15) === '{"type":"error"')
            {
                format = "ERROR";
            }
            postMessage({id:e.data.id,result:output,format:format});
                
        }
        else if(output)//SVG
        {
            postMessage({id:e.data.id,result:output,format:format});
        }
    }
	
}

