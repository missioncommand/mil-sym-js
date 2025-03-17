var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.FillPatterns = (function () {
    //private vars
    var patternBeachSlopeModerate = null;
    var patternBeachSlopeSteep = null;
    var patternBeigeStipple = null;
    var patternFoulGround = null;
    var patternKelp = null;
    var patternRigField = null;
    var patternSweptArea = null;
    var patternWeirs = null;
    
    var duriBeachSlopeModerate = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAzBAMAAAAupuZdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAYUExURQAAAMXFxczMzM3NzdXV1dnZ2eLi4ubm5nz94OEAAAABdFJOUwBA5thmAAAAWklEQVQ4y2NgoD8wA5PMCQgSKgTkCjuAKEMTBAkRYgIyhAxAfCNlBAkVAgJ3MMlSgCChQiMc4AtrIcywFoKFtTJmWCuPhjXJaVcIT9odDU/qpl1hPGl3SJUTACZHFZF+np+2AAAAAElFTkSuQmCC";
    var duriBeachSlopeSteep = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAVUExURQAAAJSUlKKioru7u87OztfX1+Li4hAmdeYAAAABdFJOUwBA5thmAAAAJElEQVQY02NgIB+YIpEMzEIOMJIJiAQVGGAkELghkfQHg8WdABqRBBGoXfbeAAAAAElFTkSuQmCC";
    var duriBeigeStipple = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAQMAAAAB/jzhAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9gMHhIBKQOEJ3wAAAADUExURfnz8ehEBXEAAAAMSURBVAgdY2AYjAAAAJYAASEQeSYAAAAASUVORK5CYII=";
    var duriFoulGround = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAABOUExURQAAAICAgIaGhouLi42NjZCQkJSUlJiYmJycnKCgoKWlpampqa6urrGxsbe3t7u7u7y8vMbGxsjIyMzMzNHR0djY2N/f3+Xl5evr6/Ly8oBtGtwAAAABdFJOUwBA5thmAAAA50lEQVRIx+2UwW7DMAxDySVy0iqRl7WL6v//0R2GDttR8iHoEN4JU7T0gFOngrpZBZqZZ8yFM1DJe8LbRl4ApTwS5k/SgJklk3olHRBeo8bdzArH1ZSUaGPG37KYuf4x12DT7u/k4l5Y3Fuur1bifQGAcgL28MDfsYWzu5JbOHZX213m3UZSq76xmNkenfrK8lzvzD1enusdlg9cAKVkHt7IDRBOGXNzB+D+wH/R4VAdk1CtwJz7xE6oDqstpETv5bgz/4Hq1ANV6YNqzdyacHJX8iMcux4I1YHUqgPl1aCqJ1RPvZy+AED/Df1MKozlAAAAAElFTkSuQmCC";
    var duriKelp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA5CAMAAABwHZdJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAABFUExURQAAAICAgIeHh4qKio+Pj5KSkpSUlJqamp6enqGhoaenp6+vr7Gxsbi4uMDAwMjIyM/Pz9bW1tra2t7e3uDg4OXl5evr67APy9YAAAABdFJOUwBA5thmAAABCUlEQVQYGe3BQXbCMAwFwO8KXMWJI6uudP+j9kGB57AjMaw8AwzD8FnueAON6MDxJGUcx5QNG1HQgcRzQcOpoAP9msKiuNF1CjOeVbxojgYUDknUJIVF7DedDRuF8BrL+FclBVJcFUoVd1aYHXslUjwUpjhRuOBZsZfQikadKP3gIGd2NFJUHCZB0FBa0cGM1kqG7owdwzB8TsU7kOENlHCcECs2MqMDTbQ4GpnRgX9HigU3VdLp5HjihtcUEqDOxLlYzcRSLQfBhlPBa2bDlclyChlXnmLBnddMir2EMh5sDueJw0VMBXtZTI5GDpMYDlqpoFFCxmEWE1rMjuOyouG0oj9SDMPwcX/MrgqpcUsGFwAAAABJRU5ErkJggg==";
    var duriRigField = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAqUExURQAAAMDAwMTExMjIyM3NzdHR0dXV1dnZ2d3d3eHh4eXl5enp6e3t7fDw8Awi1VsAAAABdFJOUwBA5thmAAAAh0lEQVQoz2NgGAqATdAHxiwSngBj8goKCkI5TIKCojBhZqCwAIRZCGRugCpmBLKlIGxFIDMBqhokLAlhAlmCAUjC0hCmIZBZABVmBbIVIMyJQOYFmJ2GgkIH4Cok4e7mCm2AMbeFX2AYBbgBjqDCHrDYo4EXR6ThiWIsCQJ78sGV2HAkzUENAN13GlU/PHOyAAAAAElFTkSuQmCC";
    var duriSweptArea = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAnUExURQAAAP4A/v41/v5k/v51/v6F/v6T/v6h/v6t/v7E/v7P/v7Z/v7j/s8+NL4AAAABdFJOUwBA5thmAAAAbElEQVQoz2NgGHLgmKHZAVQRVkFBQVFUIUOgkKABsggLSERQBFloIlhIcAK6PkFBByQhiIigAEKEGyokjVcIi0YGRYiQApJQIUSoAEmICSwihOxUTrCQJAOG8yegCPEECgrGoAfYigUMwwIAAJevDkkSlISwAAAAAElFTkSuQmCC";
    var duriWeirs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiBAMAAADFd2a2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAAhUExURQAAAMDAwMTExMjIyM7OztHR0dXV1d3d3eHh4enp6fDw8MnCp1cAAAABdFJOUwBA5thmAAAASUlEQVQoz2NgIBp4YoiwCU7AEFOUxBBioqEy1lAgCBEUCQUDsNBCQWSwACxk0QEE7R1gYAgRCkAyJXDICWHxI6YQ1ypkwDB4AQCRDzCzcuhQTwAAAABJRU5ErkJggg==";
    
    //<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" width="64" height="64" ></pattern></defs>
    var svgBeachSlopeModerate = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" width="64" height="64" >'
                        + '<circle id="svg_2" r="4" cy="16" cx="16" fill="#808080"/>'
                        + '<circle id="svg_2" r="4" cy="16" cx="48" fill="#808080"/>'
                        + '<circle id="svg_2" r="4" cy="48" cx="16" fill="#808080"/>'
                        + '<circle id="svg_2" r="4" cy="48" cx="48" fill="#808080"/>'
                        +   '</pattern></defs>';
    var svgBeachSlopeSteep = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" width="64" height="64" >'
                        + '<circle id="svg_2" r="4" cy="16" cx="16" fill="#E6E6E6"/>'
                        + '<circle id="svg_2" r="4" cy="16" cx="48" fill="#E6E6E6"/>'
                        + '<circle id="svg_2" r="4" cy="48" cx="16" fill="#E6E6E6"/>'
                        + '<circle id="svg_2" r="4" cy="48" cx="48" fill="#E6E6E6"/>'
                        +   '</pattern></defs>';
    var svgBeigeStipple = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" width="64" height="64" >'
                        +   '<rect id="svg_1" height="68" width="68" y="-2" x="-2" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" fill="#F9F3F1"/>'
                        +   '</pattern></defs>';
    var svgFoulGround = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" width="64" height="64" >'
                        + '<text fill="#808080" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="23" y="30.399994" id="svg_1" font-size="24" font-family="arial, san-serif" text-anchor="middle" xml:space="preserve" font-weight="normal">#</text>'
                        + '<text id="svg_2" fill="#808080" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="52.033325" y="61.5" font-size="24" font-family="arial, san-serif" text-anchor="middle" xml:space="preserve" font-weight="normal">#</text>'
                        +   '</pattern></defs>';
    var svgKelp = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" width="160" height="96" >'
                        +   '<g transform="translate(43, 15) scale(0.0642857, -0.0642857)" id="svg_9"><path d="m-87.349503,25.374092q130.510529,-167.594231 198.975067,-167.594231q0,-6.012329 39.937653,-18.037048q249.610245,17.285507 249.610245,48.098793l22.821533,18.037048q8.558105,0 17.11618,-18.037048q-44.216705,-72.14817 -278.137207,-72.14817q-74.883087,-19.540131 -171.161346,-107.470749l-10.697578,0q-11.410755,0 -11.410755,12.024719q79.162128,84.172867 141.921276,101.458389l0,6.012329q-33.519081,0 -114.107555,60.123497l-11.410755,0q-111.25486,0 -318.074814,-155.569557l-11.410797,18.037094q126.944641,101.458374 147.626633,101.458374l0,6.01236q-64.185471,0 -153.332016,48.098785q-20.681946,-9.770065 -67.751343,-48.098785l-11.410736,0q-11.410797,0 -11.410797,12.024689l51.34848,48.098785q-74.883087,26.304016 -85.580719,42.086441l0,6.012352q1.426361,12.024696 11.410736,12.024696q218.230682,-96.197571 295.253281,-96.197571l11.410767,0q86.293839,30.061737 102.696808,30.061737l17.116135,0l0,6.012344q-66.325027,80.415168 -68.464523,95.446021l17.116112,12.024713l0.000015,0l-0.000008,0l0.000031,0.000008l0,-0.000008l0,-0.000008z" fill="#808080" id="svg_10"/></g>'
                        + '<g id="svg_2" transform="translate(43, 15) scale(0.0642857, -0.0642857)"><path id="svg_3" d="m1116.504639,-692.460327q130.510742,-167.594727 198.975586,-167.594727q0,-6.011719 39.937012,-18.037109q249.609863,17.286133 249.609863,48.099121l22.822266,18.037109q8.558105,0 17.115723,-18.037109q-44.216797,-72.147949 -278.136719,-72.147949q-74.883301,-19.540039 -171.161621,-107.471191l-10.697266,0q-11.411133,0 -11.411133,12.025391q79.162109,84.172852 141.921875,101.458008l0,6.012695q-33.519531,0 -114.10791,60.123047l-11.410645,0q-111.255371,0 -318.075195,-155.568848l-11.410156,18.037109q126.943848,101.458008 147.625977,101.458008l0,6.011719q-64.185059,0 -153.332031,48.099121q-20.682129,-9.77002 -67.750977,-48.099121l-11.411133,0q-11.411133,0 -11.411133,12.024902l51.349121,48.099121q-74.882813,26.303711 -85.581055,42.086426l0,6.012207q1.427246,12.024902 11.411133,12.024902q218.230957,-96.197754 295.25293,-96.197754l11.411133,0q86.293945,30.062012 102.696777,30.062012l17.116211,0l0,6.012207q-66.325195,80.415039 -68.464844,95.445801l17.116211,12.024902l0,0l0,0l0,0z" fill="#808080"/></g>'
                        +   '</pattern></defs>';
    var svgRigField = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" width="64" height="64" >'
                        + '<circle id="svg_2" r="8" cy="16" cx="16" fill="#E6E6E6"/>' 
                        + '<circle id="svg_2" r="8" cy="16" cx="48" fill="#E6E6E6"/>'
                        + '<circle id="svg_2" r="8" cy="48" cx="16" fill="#E6E6E6"/>'
                        + '<circle id="svg_2" r="8" cy="48" cx="48" fill="#E6E6E6"/>'
                        + '</pattern></defs>';
    var svgSweptArea = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" width="64" height="64" >'
                        +   '<circle fill="#ff00ff" stroke="#000000" stroke-width="0" cx="16" cy="16" r="8" />'
                        +   '<circle fill="#ff00ff" stroke="#000000" stroke-width="0" cx="48" cy="48" r="8" /></pattern></defs>';
    var svgWeirs = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" width="64" height="64" >'//stroke="#E6E6E6"//light gray
                        + '<rect height="10" width="20" y="17" x="10" fill="none" stroke-linecap="null" stroke-linejoin="null" stroke-width="2" stroke="#E6E6E6" id="svg_1"/>'
                        + '<line x1="20" y1="16" x2="13" y2="9" stroke-width="2" stroke="#E6E6E6" id="svg_5"/>'
                        + '<rect height="10" width="20" y="48" x="42" fill="none" stroke-linecap="null" stroke-linejoin="null" stroke-width="2" stroke="#E6E6E6" id="svg_7"/>'
                        + '<line x1="52" y1="48" x2="45" y2="41" stroke-width="2" stroke="#E6E6E6" id="svg_8"/>'
                        + '</pattern></defs>';

    var svgCrossHatchSmall = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" x="0" y="0" width="15" height="15">'
                        + '<g style="fill:none; stroke:black; stroke-width:1">'
				        + '<path d="M0,0 l15,15"/>'
				        + '<path d="M15,0 l-15,15"/>'
			            + '</g></pattern></defs>';

    var svgCrossHatchMedium = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">'
                        + '<g style="fill:none; stroke:black; stroke-width:1">'
				        + '<path d="M0,0 l25,25"/>'
				        + '<path d="M25,0 l-25,25"/>'
			            + '</g></pattern></defs>';

    var svgCrossHatchLarge = '<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">'
                        + '<g style="fill:none; stroke:black; stroke-width:1">'
				        + '<path d="M0,0 l50,50"/>'
				        + '<path d="M50,0 l-50,50"/>'
			            + '</g></pattern></defs>';

    var svgHatch = '<defs><pattern id="fillPattern" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">'
                        + '<line x1="1" y1="0" x2="1" y2="10" style="stroke:black; stroke-width:1" />'
                        + '</pattern></defs>';
		
    
    
    //constructor code
    var _document = null;
    if(document)
    {
        _document = document;
        patternBeachSlopeModerate = new Image();
        patternBeachSlopeSteep = new Image();
        patternBeigeStipple = new Image();
        patternFoulGround = new Image();
        patternKelp = new Image();
        patternRigField = new Image();
        patternSweptArea = new Image();
        patternWeirs = new Image();
        //set METOC patterns, do this now so that they're loaded by the time someone needs them
        patternBeachSlopeModerate.src = duriBeachSlopeModerate;
        patternBeachSlopeSteep.src = duriBeachSlopeSteep;
        patternBeigeStipple.src = duriBeigeStipple;
        patternFoulGround.src = duriFoulGround;
        patternKelp.src = duriKelp;
        patternRigField.src = duriRigField;
        patternSweptArea.src = duriSweptArea;
        patternWeirs.src = duriWeirs;
    }
    //patternWeirs.onload=function(){patternWeirs.loaded=true;console.log("loaded");if(_ctx != null){patternWeirs = _ctx.createPattern(patternWeirs, "repeat");}}
    

    
    //private functions
    
    
return{    

    PatternSolid : 0,//does nothing.
    PatternCrossHatch : 8,//X
    PatternForwardHatch : 2,// /
    PatternBackwardHatch : 3,// \
    PatternVerticalHatch : 4,// |
    PatternHorizontalHatch : 5,// _
    //Hatching patterns
    //forward diagonal (fillStyle=2), backward diagonal (3). We also have capabilities for vertical (4), horizontal (5), and cross (8).


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

        if(pattern.charAt && pattern.charAt(0) === "W")//METOC fill
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
        else if(_document && pattern > 0 && pattern < 9)//hatch fill
        {
            imagePattern = _document.createElement('canvas');
            imagePattern.id = pattern + "";
            if(pattern < 8)
            {
                imagePattern.width = 15;
                imagePattern.height = 15;
            }
            else
            {
                imagePattern.width = 15;
                imagePattern.height = 15;
            }
            var ctx = imagePattern.getContext("2d");
            //ctx.clearRect(0,0,50,50);
            ctx.lineWidth = 1;
            ctx.strokeStyle = lineColor;
            //pattern = 8;
            if(pattern > 1 && pattern < 6)
            {
                if(pattern === 2)//forward diagonal \
                {
                    ctx.beginPath();
                    ctx.moveTo(15,15);
                    ctx.lineTo(-1,-1);
                    ctx.moveTo(1,16);
                    ctx.lineTo(-1,14);
                    ctx.moveTo(14,-1);
                    ctx.lineTo(16,1);
                    ctx.stroke();                    
                }
                else if(pattern === 3)//backward diagonal /
                {
                    ctx.beginPath();
                    ctx.moveTo(-1,16);
                    ctx.lineTo(16,-1);
                    ctx.moveTo(14,16);
                    ctx.lineTo(16,14);
                    ctx.moveTo(-1,1);
                    ctx.lineTo(1,-1);
                    ctx.stroke();
                }
                else if(pattern === 4)//vertical |
                {
                    ctx.beginPath();
                    ctx.moveTo(3,0);
                    ctx.lineTo(3,15);
                    ctx.stroke();
                }
                else if(pattern === 5)//horizontal _
                {
                    ctx.beginPath();
                    ctx.moveTo(0,4);
                    ctx.lineTo(15,4);
                    ctx.stroke();
                }
                /*ctx.beginPath();
                ctx.moveTo(0,0);
                ctx.lineTo(0,15);
                ctx.stroke();*/

                
            }
            else if(pattern === 8)//cross X
            {
                /*'<defs><pattern id="fillPattern" patternUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">'
                    + '<g style="fill:none; stroke:black; stroke-width:1">'
                    + '<path d="M0,0 l25,25"/>'
                    + '<path d="M25,0 l-25,25"/>'
                    + '</g></pattern></defs>';//*/
                
                /*ctx.beginPath();
                ctx.moveTo(0,0);
                ctx.lineTo(24,24);
                ctx.moveTo(0,24);
                ctx.lineTo(24,0);
                ctx.stroke();*/

                ctx.beginPath();
                ctx.moveTo(-1,16);
                ctx.lineTo(16,-1);
                ctx.moveTo(14,16);
                ctx.lineTo(16,14);
                ctx.moveTo(-1,1);
                ctx.lineTo(1,-1);
                ctx.moveTo(15,15);
                ctx.lineTo(-1,-1);
                ctx.moveTo(1,16);
                ctx.lineTo(-1,14);
                ctx.moveTo(14,-1);
                ctx.lineTo(16,1);
                ctx.stroke();
            }

            /*var image = new Image();
            image.src = imagePattern.toDataURL("image/png");
            return image;//*/
            //return ctx;
            
            /*console.log(imagePattern.toDataURL());
            var duri = imagePattern.toDataURL();*/
            return imagePattern;
        }
        
        return null;        
    },
    getSVGFillStylePattern: function (pattern, lineColor, alpha, lineWidth)
    {
        var svgPattern = null;
        if(pattern.charAt && pattern.charAt(0) === "W")//METOC fill
        {
            if(pattern === "WO-DBSM-----A--")//beach slope moderate
                return svgBeachSlopeModerate;
            else if(pattern === "WO-DBST-----A--")//beach slope steep
                return svgBeachSlopeSteep;
            else if(pattern === "WO-DHCB-----A--")//beige stipple
                return svgBeigeStipple;
            else if(pattern === "WO-DHHDF----A--")//Foul Ground
                return svgFoulGround;
            else if(pattern === "WO-DHHDK----A--")//Kelp
                return svgKelp;
            else if(pattern === "WO-DMOA-----A--")//OIL/GAS RIG FIELD
                return svgRigField;
            else if(pattern === "WO-DL-SA----A--")//swept area
                return svgSweptArea;
            else if(pattern === "WOS-HPFF----A--")//Weirs
                return svgWeirs;            
        }
        else//hash fill 
        {//forward diagonal (fillStyle=2), backward diagonal (3). We also have capabilities for vertical (4), horizontal (5), and cross (8).
            //pattern = 5;
            if(pattern === 2)//forward diagonal /
            {
                svgPattern = svgHatch.replace("rotate(45 0 0)","rotate(-45 0 0)");
            }
            else if(pattern === 3)//backward diagonal \
            {
                svgPattern = svgHatch + "";//force copy
            }
            else if(pattern === 8)//cross X
            {
                svgPattern = svgCrossHatchMedium + "";//force copy
            }
            else if(pattern === 4)//vertical |
            {
                svgPattern = svgHatch.replace("rotate(45 0 0)","rotate(0 0 0)");
            }
            else if(pattern === 5)//horizontal _
            {
                svgPattern = svgHatch.replace("rotate(45 0 0)","rotate(90 0 0)");
            }

            if(svgPattern)
            {
                svgPattern = svgPattern.replace("black",lineColor);
            }
        
            return svgPattern;
        }
        
        return null;
        
        //pattern name
        //set ctx.fillStyle=pattern
        //then ctx.fill();
        
    },
    isMETOCWithFillPattern: function(symbolID)
    {
        var returnVal = false;
        if(symbolID.charAt(0) === "W")
        {
            switch(symbolID)
            {
                case "WO-DBSM-----A--"://beach slope moderate
                case "WO-DBST-----A--"://beach slope steep
                case "WO-DHCB-----A--"://beige stipple
                case "WO-DHHDF----A--"://Foul Ground
                case "WO-DHHDK----A--"://Kelp
                case "WO-DMOA-----A--"://OIL/GAS RIG FIELD
                case "WO-DL-SA----A--"://swept area
                case "WOS-HPFF----A--"://Weirs
                    returnVal = true;
                    break;
                default:
                    break;
            }
        }
        return returnVal;
    }
    
};
}());