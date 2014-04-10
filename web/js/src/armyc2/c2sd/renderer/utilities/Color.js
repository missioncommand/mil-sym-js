var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/**
 * 
 * @param {Number} R
 * @param {Number} G
 * @param {Number} B
 * @param {Number} A
 * @returns {armyc2.c2sd.renderer.utilities.Color}
 */
armyc2.c2sd.renderer.utilities.Color = function (R,G,B,A) {

    //private vars
    this.A = 255;
    this.R = 0;
    this.G = 0;
    this.B = 0;
    
    //constructor code
    this.R = R;
    this.G = G;
    this.B = B;
    if(A !== undefined)
        this.A = A;
};        
        
    
    
    armyc2.c2sd.renderer.utilities.Color.prototype.convert = function(integer)
    {
        //Simpler
        //var str = integer.toString(16);
        //return str.length === 1 ? "0" + str : str;
        
        //Much Faster
        var hexAlphabet = "0123456789ABCDEF";
        return isNaN(integer) ? "00" : hexAlphabet.charAt((integer - integer % 16)/16) + hexAlphabet.charAt(integer % 16);
    };
    
    
    
    armyc2.c2sd.renderer.utilities.Color.prototype.getAlpha = function()
    {
        return this.A;
    };
    
    armyc2.c2sd.renderer.utilities.Color.prototype.getRed = function()
    {
        return this.R;
    };
    
    armyc2.c2sd.renderer.utilities.Color.prototype.getGreen = function()
    {
        return this.G;
    };
    
    armyc2.c2sd.renderer.utilities.Color.prototype.getBlue = function()
    {
        return this.B;
    };
    
    armyc2.c2sd.renderer.utilities.Color.prototype.toARGB = function()
    {
        return (this.A << 24) + ((this.R & 0xFF) << 16) + ((this.G & 0xFF) << 8) + (this.B & 0xFF);
    };
    /**
     * A hex string in the format of AARRGGBB
	 * @param {Boolean} withAlpha Optional, default is true. If set to false, 
	 * will return a hex string without alpha values.
     */
    armyc2.c2sd.renderer.utilities.Color.prototype.toHexString = function(withAlpha)
    {
        if(withAlpha === false)
        {
            return "#" + this.convert(this.R) + 
                            this.convert(this.G) + 
                            this.convert(this.B);
        }
        else
        {
            return "#" + this.convert(this.A) + 
                            this.convert(this.R) + 
                            this.convert(this.G) + 
                            this.convert(this.B);
        }    
    };
    /**
     * A KML Formatted hex string is in the format of AABBGGRR
     */
    armyc2.c2sd.renderer.utilities.Color.prototype.toKMLHexString = function()
    {
        return "#" + 
                this.convert(this.A) + 
                this.convert(this.B) + 
                this.convert(this.G) + 
                this.convert(this.R);
    };
    

    

//static public vars/functions
//milstd.renderer.ClassName.MY_CONSTANT = "constant_value";
//milstd.renderer.ClassName.myStaticFunction = function(){};

/**
 * @param {Number} color int value of a color
 * @return {Number} 0 - 255, alpha value
 */
armyc2.c2sd.renderer.utilities.Color.getAlphaFromColor = function(color)
{
	var alpha = 255;
	if (color > 16777215) alpha = (color >>> 24);
	return alpha;
};

/**
 * @param {Number} color int value of a color
 * @return {Number} 0 - 255, Red value
 */
armyc2.c2sd.renderer.utilities.Color.getRedFromColor = function(color)
{
	var red = 255;
	red = (color >> 16) & 0xFF;
	return red;
};

/**
 * @param {Number} color int value of a color
 * @return {Number} 0 - 255, Green value
 */
armyc2.c2sd.renderer.utilities.Color.getGreenFromColor = function(color)
{
	var green = 255;
	green = (color >> 8) & 0xFF;
	return green;
};

/**
 * @param {Number} color int value of a color
 * @return {Number} 0 - 255, Blue value
 */
armyc2.c2sd.renderer.utilities.Color.getBlueFromColor = function(color)
{
	var blue = 255;
	if (color > 16777215) 
		blue = color & 0x000000FF;
	else 
		blue = color & 0x0000FF;
	return blue;
};

/**
*
* @param hexValue - String representing hex value
* (formatted "0xRRGGBB" i.e. "0xFFFFFF")
* OR
* formatted "0xAARRGGBB" i.e. "0x00FFFFFF" for a color with an alpha value
* I will also put up with "RRGGBB" and "AARRGGBB" without the starting "0x"
* @return
*/
armyc2.c2sd.renderer.utilities.Color.getColorFromHexString = function(hexValue)
{
    var hexOriginal = new String(hexValue);

    var hexAlphabet = "0123456789ABCDEF";

    if(hexValue.charAt(0)==='#')
        hexValue = hexValue.substring(1);
    if(hexValue.substring(0,2)===("0x") || hexValue.substring(0,2)===("0X"))
        hexValue = hexValue.substring(2);

    hexValue = hexValue.toUpperCase();

    var count = hexValue.length,
        value = null,
        k = 0,
        int1 = 0,
        int2 = 0;

    if(count === 8 || count === 6)
    {
        value = new Array();//int[(count / 2)];
        for(var i=0; i<count;i+=2)
        {
                int1 = hexAlphabet.indexOf(hexValue.charAt(i));
                int2 = hexAlphabet.indexOf(hexValue.charAt(i+1));
                value[k]=(int1 * 16) + int2;
                k++;
        }

        if(count === 8)
        {
                return new armyc2.c2sd.renderer.utilities.Color(value[1],value[2],value[3],value[0]);
        }
        else if(count === 6)
        {
                return new armyc2.c2sd.renderer.utilities.Color(value[0],value[1],value[2]);
        }
    }
    else
    {       
            //ErrorLogger.LogMessage("SymbolUtilties", "getColorFromHexString", "Bad hex value: " + hexOriginal, Level.WARNING);
    }
    return null;
};

armyc2.c2sd.renderer.utilities.Color.white =  new armyc2.c2sd.renderer.utilities.Color (255, 255, 255);
armyc2.c2sd.renderer.utilities.Color.WHITE = armyc2.c2sd.renderer.utilities.Color.white;
armyc2.c2sd.renderer.utilities.Color.lightGray =  new armyc2.c2sd.renderer.utilities.Color (192, 192, 192);
armyc2.c2sd.renderer.utilities.Color.LIGHT_GRAY = armyc2.c2sd.renderer.utilities.Color.lightGray;
armyc2.c2sd.renderer.utilities.Color.gray =  new armyc2.c2sd.renderer.utilities.Color (128, 128, 128);
armyc2.c2sd.renderer.utilities.Color.GRAY = armyc2.c2sd.renderer.utilities.Color.gray;
armyc2.c2sd.renderer.utilities.Color.darkGray =  new armyc2.c2sd.renderer.utilities.Color (64, 64, 64);
armyc2.c2sd.renderer.utilities.Color.DARK_GRAY = armyc2.c2sd.renderer.utilities.Color.darkGray;
armyc2.c2sd.renderer.utilities.Color.black =  new armyc2.c2sd.renderer.utilities.Color (0, 0, 0);
armyc2.c2sd.renderer.utilities.Color.BLACK = armyc2.c2sd.renderer.utilities.Color.black;
armyc2.c2sd.renderer.utilities.Color.red =  new armyc2.c2sd.renderer.utilities.Color (255, 0, 0);
armyc2.c2sd.renderer.utilities.Color.RED = armyc2.c2sd.renderer.utilities.Color.red;
armyc2.c2sd.renderer.utilities.Color.pink =  new armyc2.c2sd.renderer.utilities.Color (255, 175, 175);
armyc2.c2sd.renderer.utilities.Color.PINK = armyc2.c2sd.renderer.utilities.Color.pink;
armyc2.c2sd.renderer.utilities.Color.orange =  new armyc2.c2sd.renderer.utilities.Color (255, 200, 0);
armyc2.c2sd.renderer.utilities.Color.ORANGE = armyc2.c2sd.renderer.utilities.Color.orange;
armyc2.c2sd.renderer.utilities.Color.yellow =  new armyc2.c2sd.renderer.utilities.Color (255, 255, 0);
armyc2.c2sd.renderer.utilities.Color.YELLOW = armyc2.c2sd.renderer.utilities.Color.yellow;
armyc2.c2sd.renderer.utilities.Color.green =  new armyc2.c2sd.renderer.utilities.Color (0, 255, 0);
armyc2.c2sd.renderer.utilities.Color.GREEN = armyc2.c2sd.renderer.utilities.Color.green;
armyc2.c2sd.renderer.utilities.Color.magenta =  new armyc2.c2sd.renderer.utilities.Color (255, 0, 255);
armyc2.c2sd.renderer.utilities.Color.MAGENTA = armyc2.c2sd.renderer.utilities.Color.magenta;
armyc2.c2sd.renderer.utilities.Color.cyan =  new armyc2.c2sd.renderer.utilities.Color (0, 255, 255);
armyc2.c2sd.renderer.utilities.Color.CYAN = armyc2.c2sd.renderer.utilities.Color.cyan;
armyc2.c2sd.renderer.utilities.Color.blue =  new armyc2.c2sd.renderer.utilities.Color (0, 0, 255);
armyc2.c2sd.renderer.utilities.Color.BLUE = armyc2.c2sd.renderer.utilities.Color.blue;

