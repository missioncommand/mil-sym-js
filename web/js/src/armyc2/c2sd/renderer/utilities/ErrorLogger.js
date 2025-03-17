//Check for IE9 which doesn't have a console object until dev tools are open.
if(!(window && window.console)){
    this.console = {
        log: function(){},
        debug: function(){},
        info: function(){},
        warn: function(){},
        error: function(){},
        dir: function(){}
    };
}

//Singleton template, unfortunately, cannot be parsed by netbeans//////////////
var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};

armyc2.c2sd.renderer.utilities.ErrorLogger = (function () {
    //private vars
    var _level = "800";
    
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    //constructor code
    //for IE8
    if(typeof String.prototype.trim !== 'function')
    {
        String.prototype.trim = function()
        {
           return this.replace(/^\s+|\s+$/g, '');
        };
    }
    
    //private functions
    function getDateString(date)
    {
        var strDate = "";
        
        try
        {
            strDate += months[date.getMonth()] + " " +
                        date.getDate() + ", " +
                        date.getFullYear() + " " +
                        date.getHours() + ":" +
                        date.getMinutes() + ":" +
                        date.getSeconds() + "." +
                        date.getMilliseconds();
        }
        catch(err)
        {
            strDate = date.toString();
        }
        
        return strDate;
    }
    
return{    

    //public vars
    OFF : Number.MAX_VALUE,
    SEVERE : 1000,
    WARNING : 900,
    INFO : 800,
    CONFIG : 700,
    FINE : 500,
    FINER : 400,
    FINEST : 300,
    ALL : Number.MIN_VALUE,
    //publicFunction: function(){return "I'm a public function";}
    
    getLevelName: function(level)
    {
        var name = "unknown";
        switch(level)
        {
            case Number.MAX_VALUE:
                name = "OFF";
                break;
            case 1000:
                name = "Severe";
                break;
            case 900:
                name = "Warning";
                break;
            case 800:
                name = "Info";
                break;
            case 700:
                name = "Config";
                break;
            case 500:
                name = "Fine";
                break;
            case 400:
                name = "Finer";
                break;
            case 300:
                name = "Finest";
                break;
            case Number.MIN_VALUE:
                name = "ALL";
                break;
            default:
                name = "Unknown Error Level";
                break;
        }
        return name;
    },
    /**
     * Logger will only log messages at the set level or higher
     * @param {Number} level like:
     * OFF : Number.MAX_VALUE,
     *  SEVERE : 1000,
     *  WARNING : 900,
     *  INFO : 800,
     *  CONFIG : 700,
     *  FINE : 500,
     *  FINER : 400,
     *  FINEST : 300,
     *  ALL : Number.MIN_VALUE,
     */
    setLevel: function(level)
    {
        _level = level;
    },
    getLevel: function()
    {
        return _level;
    },
    /**
     * 
     * @param {String} sourceClass
     * @param {String} sourceMethod
     * @param {type} param1
     */
    Entering: function(sourceClass, sourceMethod, param1)
    {
        if(_level <= this.FINER)
        {
            if(console !== undefined)
            {
                console.log("Entering: " + sourceClass + "." + sourceMethod + "()");
            }
        }
    },
    /**
     * 
     * @param {String} sourceClass
     * @param {String} sourceMethod
     * @param {type} param1
     */        
    Exiting: function(sourceClass, sourceMethod, param1)
    {
        if(_level <= this.FINER)
        {
            if(console !== undefined)
            {
                console.log("Exiting: " + sourceClass + "." + sourceMethod + "()");
            }
        }
    },
    /**
     * 
     * @param {String} sourceClass
     * @param {String} sourceMethod
     * @param {String} message
     * @param {Number} level optional, default 800 (INFO)
     */        
    LogMessage: function(sourceClass, sourceMethod, message, level)
    {
        if(level === undefined || level === null)
            level = 800;
        if(level >= _level)
        {
            if(console !== undefined)
            {
                message = getDateString(new Date()) + " " + sourceClass + " " + sourceMethod + "\n" +
                        this.getLevelName(level) + ": " + message;
                
                //message = "Info: " + sourceClass + "." + sourceMethod + "()" +
                //            "\n" + this.getLevelName(level) + ": " + message;

                console.info(message);
            }
        }
    },
    /**
     * 
     * @param {String} sourceClass
     * @param {String} sourceMethod
     * @param {String} message
     * @param {Number} level optional, default 900 (WARNING)
     */
    LogWarning: function(sourceClass, sourceMethod, message, level)
    {
        if(level === undefined || level === null)
            level = 900;
        if(level >= _level)
        {
            if(console !== undefined)
            {
                message = getDateString(new Date()) + " " + sourceClass + " " + sourceMethod + "\n" +
                        this.getLevelName(level) + ": " + message;
//                message = "Warning: " + sourceClass + "." + sourceMethod + "()" +
//                        "\n" + message;

                console.warn(message);
            }
        }
    },
    /**
     * 
     * @param {String} sourceClass
     * @param {String} sourceMethod
     * @param {String} err
     * @param {Object} param optional, an object to send to the log
     * @param {Number} level optional, default 1000 (SEVERE)
     */
    LogException: function(sourceClass, sourceMethod, err, param, level)
    {
        if(level === undefined || level === null)
            level = 1000;
        if(level >= _level)
        {
            if(console !== undefined)
            {
                var message = getDateString(new Date()) + " " + sourceClass + " " + sourceMethod + "\n" +
                        this.getLevelName(level) + ": ";
//                var message = "Error: " + sourceClass + "." + sourceMethod + "()\n";

                message += err.name + ": " + err.message;
                
                //get stack trace
                var stack = null;
                if(err.stack)
                {
                    stack = err.stack;
                }
                
                if(!(stack))
                {
                    if(err.filename && err.lineno)
                    {
                        stack = err.filename + " at line# " + err.lineno;
                    }
                }

                //group stack trace if possible so it doesn't take up too
                //much space in the console log.
                if(console.groupCollapsed)
                {
                    console.error(message);
                    if(stack !== null)
                    {
                        console.groupCollapsed("Stack Trace:");// for: " + err.message);
                        console.error(stack);
                        if(console.dir && param)
                        {
                            console.dir(param);
                        }
                        console.groupEnd();
                    }
                }
                else
                {
                    if(stack !== null)
                    {
                       message += "\n" + stack;
                    }
                    console.error(message);
                    if(console.dir && param)
                    {
                        console.info(param);
                    }
                }
            }
        }
    }
            
    
};
}());