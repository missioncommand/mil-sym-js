/* expected input format for non-batch
var e.data = {};
		e.data.id = "ID";
		e.data.symbolID = "SFGPU----------";//A 15 character symbolID corresponding to one of the graphics in the MIL-STD-2525C
		e.data.modifiers = {ModifiersUnits.T_UNIQUE_DESIGNATION_1:"T",MilStdAttributes.PixelSize:50};
*/

/* return object for non-batch
{
    id:e.data.id,//same as what was passed in
    symbolID:e.data.SymbolID,//resultant kml,json or error message
    si:si//SVGInfo object
    anchorPoint:
    symbolBounds:
    imageBounds:
}
*/

/* expected input format for batch
var e.data = {};
        e.data.batch = {fontInfo:fontInfo,batch:[{id:"ID",symbolID:"SFGPU----------",modifiers:{ModifiersUnits.T_UNIQUE_DESIGNATION_1:"T",MilStdAttributes.PixelSize:50}}]}
*/

/* return object for batch
{
    [{id:batch.id,symbolID:batch.symbolID,svg:si.getSVG(),anchorPoint:si.getAnchorPoint(),symbolBounds:si.getSymbolBounds(),bounds:si.getSVGBounds()}]
}
*/



importScripts('sv-bc.js');


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
    var si = null;
    var batch = null;
	
    if(e.data !== null)
    {
        try
        {
            
            if(e.data.batch && e.data.batch.length > 0)
            {
                var batch = e.data.batch;
                var returnBatch = [];
                var len = e.data.batch.length;
                for(var i = 0; i < len; i++)
                {
                    si = armyc2.c2sd.renderer.MilStdSVGRenderer.Render(batch[i].symbolID,batch[i].modifiers,e.data.fontInfo);
                    returnBatch.push({id:batch.id,symbolID:batch.symbolID,svg:si.getSVG(),anchorPoint:si.getAnchorPoint(),symbolBounds:si.getSymbolBounds(),bounds:si.getSVGBounds()});
                }
                if(si !== null)
                {
                    postMessage(returnBatch);
                }
                else
                {
                    postMessage({error:"no results"});
                }
            }
            else if(e.data.id && e.data.symbolID)
            {
                si = armyc2.c2sd.renderer.MilStdSVGRenderer.Render(e.data.symbolID,e.data.modifiers,e.data.fontInfo);
            
                if(si !== null)
                {
                    //return results
                    postMessage({id:e.data.id,symbolID:e.data.symbolID,svg:si.getSVG(),anchorPoint:si.getAnchorPoint(),symbolBounds:si.getSymbolBounds(),bounds:si.getSVGBounds()});
                }
                else
                {
                    postMessage({error:"no results"});
                }
            }
            else
            {
                JSON.stringify(e.data);
                postMessage({error:"no batch object or symbol information" + JSON.stringify(e.data)});
            }
            
            
        }
        catch(err)
        {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("SPWorker","onmessage",err);
        }
    }
	
	
	
}

