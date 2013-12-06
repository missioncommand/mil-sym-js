//Clazz.load (["java.lang.Comparable", "$.Number"], "java.lang.Double", null, function () {
Double = function() {
    //Clazz.instantialize (this, arguments);
    //};
    //Clazz.decorateAsType (Double, "Double", Number, Comparable, null, true);
    this.value = new Number(0);
    if (arguments.length === 1)
    {
        var t = arguments[0];
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
Double.parseDouble = function()
{
    if (arguments.length === 1)
    {
        var t = arguments[0];
        var n = new Number(t);
        return n;
    }
    return null;
};
Double.isInfinite = function()
{
    if (arguments.length === 1)
    {
        var t = arguments[0];
        var n = new Number(t);
        var b = !isFinite(n);
        return b;
    }
    else
        return true;
};
Double.toString = function()
{
    if (arguments.length === 1)
    {
        var t = arguments[0];
        var n = new Number(t);
        //var b=!isFinite(n);
        var s = n.toString();
        return s;
    }
    else
        return null;
};
Double.serialVersionUID = Double.prototype.serialVersionUID = -9172774392245257468;
Double.MIN_VALUE = Double.prototype.MIN_VALUE = 4.9e-324;
Double.MAX_VALUE = Double.prototype.MAX_VALUE = 1.7976931348623157e+308;
Double.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Double.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Double.NaN = Number.NaN;
Double.TYPE = Double.prototype.TYPE = Double;