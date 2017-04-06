/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Integer = function(value)
{
    this.value = new Number(0);
    if (value !== undefined)
    {
        var t = value;
        this.value = new Number(t);
        return this.value;
    }
    this.intValue = function()
    {
        return this.value;
    };
};
Integer.parseInt = function(value)
{
    var temp = new Number(value);
    if(temp === Number.NaN)
        return null;
    else
        return temp;
};
Integer.toHexString = function(i) {
    if(i !== undefined)
        return i.toString(16);
    else
        return null;
};
Integer.isInfinite = function(value)
{
    var n = new Number(value);
    if(n !== Number.NaN)
        return !isFinite(n);
    else
        return true;   
};
Integer.toString = function(value)
{
    var n = new Number(value);
    if(n === Number.NaN)
        return null;
    else return n.toString();
};

Integer.serialVersionUID = Integer.prototype.serialVersionUID = 1360826667806852920;
Integer.MIN_VALUE = Integer.prototype.MIN_VALUE = -0x80000000;
Integer.MAX_VALUE = Integer.prototype.MAX_VALUE = 0x7fffffff;
Integer.TYPE = Integer.prototype.TYPE = Integer;

