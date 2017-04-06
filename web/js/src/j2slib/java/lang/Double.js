Double = function(value) {
    this.value = new Number(0);
    if (value !== undefined)
    {
        var t = value;
        this.value = new Number(t);
        //return this.value;
    }
    this.valueOf = function()
    {
        return this.value;
    };
    this.doubleValue = function()
    {
        return this.value;
    };
};
Double.isNaN = function(t)
{
    return isNaN(t);
};
Double.parseDouble = function(value)
{
    if (value !== undefined)
    {
        var t = value;
        return new Number(value);
    }
    return null;
};
Double.isInfinite = function(value)
{
    if (value !== undefined)
    {
        var n = new Number(value);
        return !isFinite(n);
    }
    else
        return true;
};
Double.toString = function(value)
{
    var n = new Number(value);
    if(n === Number.NaN)
        return null;
    else return n.toString();
};
Double.serialVersionUID = Double.prototype.serialVersionUID = -9172774392245257468;
Double.MIN_VALUE = Double.prototype.MIN_VALUE = 4.9e-324;
Double.MAX_VALUE = Double.prototype.MAX_VALUE = 1.7976931348623157e+308;
Double.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Double.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Double.NaN = Number.NaN;
Double.TYPE = Double.prototype.TYPE = Double;