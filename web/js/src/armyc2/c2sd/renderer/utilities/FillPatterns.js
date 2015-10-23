var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.FillPatterns = (function () {
    //private vars
    var patternBeachSlopeModerate = new Image();
    var patternBeachSlopeSteep = new Image();
    var patternBeigeStipple = new Image();
    var patternFoulGround = new Image();
    var patternKelp = new Image();
    var patternRigField = new Image();
    var patternSweptArea = new Image();
    var patternWeirs = new Image();
    
    var duriBeachSlopeModerate = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAzBAMAAAAupuZdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAYUExURQAAAMXFxczMzM3NzdXV1dnZ2eLi4ubm5nz94OEAAAABdFJOUwBA5thmAAAAWklEQVQ4y2NgoD8wA5PMCQgSKgTkCjuAKEMTBAkRYgIyhAxAfCNlBAkVAgJ3MMlSgCChQiMc4AtrIcywFoKFtTJmWCuPhjXJaVcIT9odDU/qpl1hPGl3SJUTACZHFZF+np+2AAAAAElFTkSuQmCC";
    var duriBeachSlopeSteep = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAVUExURQAAAJSUlKKioru7u87OztfX1+Li4hAmdeYAAAABdFJOUwBA5thmAAAAJElEQVQY02NgIB+YIpEMzEIOMJIJiAQVGGAkELghkfQHg8WdABqRBBGoXfbeAAAAAElFTkSuQmCC";
    var duriBeigeStipple = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAQMAAAAB/jzhAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9gMHhIBKQOEJ3wAAAADUExURfnz8ehEBXEAAAAMSURBVAgdY2AYjAAAAJYAASEQeSYAAAAASUVORK5CYII=";
    var duriFoulGround = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAABOUExURQAAAICAgIaGhouLi42NjZCQkJSUlJiYmJycnKCgoKWlpampqa6urrGxsbe3t7u7u7y8vMbGxsjIyMzMzNHR0djY2N/f3+Xl5evr6/Ly8oBtGtwAAAABdFJOUwBA5thmAAAA50lEQVRIx+2UwW7DMAxDySVy0iqRl7WL6v//0R2GDttR8iHoEN4JU7T0gFOngrpZBZqZZ8yFM1DJe8LbRl4ApTwS5k/SgJklk3olHRBeo8bdzArH1ZSUaGPG37KYuf4x12DT7u/k4l5Y3Fuur1bifQGAcgL28MDfsYWzu5JbOHZX213m3UZSq76xmNkenfrK8lzvzD1enusdlg9cAKVkHt7IDRBOGXNzB+D+wH/R4VAdk1CtwJz7xE6oDqstpETv5bgz/4Hq1ANV6YNqzdyacHJX8iMcux4I1YHUqgPl1aCqJ1RPvZy+AED/Df1MKozlAAAAAElFTkSuQmCC";
    var duriKelp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA5CAMAAABwHZdJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAABFUExURQAAAICAgIeHh4qKio+Pj5KSkpSUlJqamp6enqGhoaenp6+vr7Gxsbi4uMDAwMjIyM/Pz9bW1tra2t7e3uDg4OXl5evr67APy9YAAAABdFJOUwBA5thmAAABCUlEQVQYGe3BQXbCMAwFwO8KXMWJI6uudP+j9kGB57AjMaw8AwzD8FnueAON6MDxJGUcx5QNG1HQgcRzQcOpoAP9msKiuNF1CjOeVbxojgYUDknUJIVF7DedDRuF8BrL+FclBVJcFUoVd1aYHXslUjwUpjhRuOBZsZfQikadKP3gIGd2NFJUHCZB0FBa0cGM1kqG7owdwzB8TsU7kOENlHCcECs2MqMDTbQ4GpnRgX9HigU3VdLp5HjihtcUEqDOxLlYzcRSLQfBhlPBa2bDlclyChlXnmLBnddMir2EMh5sDueJw0VMBXtZTI5GDpMYDlqpoFFCxmEWE1rMjuOyouG0oj9SDMPwcX/MrgqpcUsGFwAAAABJRU5ErkJggg==";
    var duriRigField = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAqUExURQAAAMDAwMTExMjIyM3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fDw8Awi1VsAAAABdFJOUwBA5thmAAAAh0lEQVQoz2NgGAqATdAHxiwSngBj8goKCkI5TIKCojBhZqCwAIRZCGRugCpmBLKlIGxFIDMBqhokLAlhAlmCAUjC0hCmIZBZABVmBbIVIMyJQOYFmJ2GgkIH4Cok4e7mCm2AMbeFX2AYBbgBjqDCHrDYo4EXR6ThiWIsCQJ78sGV2HAkzUENAN13GlU/PHOyAAAAAElFTkSuQmCC";
    var duriSweptArea = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAnUExURQAAAP4A/v41/v5k/v51/v6F/v6T/v6h/v6t/v7E/v7P/v7Z/v7j/s8+NL4AAAABdFJOUwBA5thmAAAAbElEQVQoz2NgGHLgmKHZAVQRVkFBQVFUIUOgkKABsggLSERQBFloIlhIcAK6PkFBByQhiIigAEKEGyokjVcIi0YGRYiQApJQIUSoAEmICSwihOxUTrCQJAOG8yegCPEECgrGoAfYigUMwwIAAJevDkkSlISwAAAAAElFTkSuQmCC";
    var duriWeirs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiBAMAAADFd2a2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAhUExURQAAAMDAwMTExMjIyM7OztHR0dXV1d3d3eHh4enp6fDw8MnCp1cAAAABdFJOUwBA5thmAAAASUlEQVQoz2NgIBp4YoiwCU7AEFOUxBBioqEy1lAgCBEUCQUDsNBCQWSwACxk0QEE7R1gYAgRCkAyJXDICWHxI6YQ1ypkwDB4AQCRDzCzcuhQTwAAAABJRU5ErkJggg==";
    
    //constructor code

    //set METOC patterns, do this now so that they're loaded by the time someone needs them
    patternBeachSlopeModerate.src = duriBeachSlopeModerate;
    patternBeachSlopeSteep.src = duriBeachSlopeSteep;
    patternBeigeStipple.src = duriBeigeStipple;
    patternFoulGround.src = duriFoulGround;
    patternKelp.src = duriKelp;
    patternRigField.src = duriRigField;
    patternSweptArea.src = duriSweptArea;
    patternWeirs.src = duriWeirs;
    //patternWeirs.onload=function(){patternWeirs.loaded=true;console.log("loaded");if(_ctx != null){patternWeirs = _ctx.createPattern(patternWeirs, "repeat");}}
    

    
    //private functions
    
    
return{    

    /**
     * 
     * @param {type} pattern (back, forward, vertical, horizontal, cross, symbolID)
     * @param {type} lineColor
     * @param {type} fillColor
     * @param {type} lineWidth
     * @returns {html5 canvas}
     */
    getCanvasFillStylePattern: function (pattern, lineColor, fillColor, lineWidth)
    {
        var imagePattern = null;
        var duri = null;
        if(pattern.charAt(0) === "W")//METOC fill
        {
            if(pattern === "WO-DBSM-----A--")//beach slope moderate
                return patternBeachSlopeModerate;
            else if(pattern === "WO-DBST-----A--")//beach slope steep
                return patternBeachSlopeSteep;
            else if(pattern === "WO-DHCB-----A--")//beige stipple
                return patternBeigeStipple;
            else if(pattern === "WO-DHHDF----A--")//Foul Ground
                return patternFoulGround;
            else if(pattern === "WO-DHHDK----A--")//Kelp
                return patternKelp;
            else if(pattern === "WO-DMOA-----A--")//OIL/GAS RIG FIELD
                return patternRigField;
            else if(pattern === "WO-DL-SA----A--")//swept area
                return patternSweptArea;
            else if(pattern === "WOS-HPFF----A--")//Weirs
                return patternWeirs;            
        }
        else//hash fill 
        {//TODO: implement generation of hash pattern based on pattern, color, and line width.
            /*
            if(imagePattern == null)
            {
                imagePattern = _document.createElement('canvas');
                buffer.width = 50;
                buffer.height = 50;
            }
            ctx = imagePattern.getContext("2d");
            ctx.clearRect(0,0,50,50);
            
            return imagePattern;//*/
        
            return null;
        }
        
        return null;
        
        //pattern name
        //set ctx.fillStyle=pattern
        //then ctx.fill();
        
    }
};
}());