var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.utilities = sec.geo.utilities || {};
sec.geo.utilities.StringBuilder = function()
{
    this.str = "";
    var str2;
    if (arguments.length === 1)
    {
        str2 = arguments[0];
        this.str += str2;
    }
};
sec.geo.utilities.StringBuilder.prototype.append = function(obj) {
    if (typeof (obj) === 'string')
    {
        this.str += obj;
    }
    else if (Clazz.instanceOf(obj, String))
    {
        this.str += obj;
    }
    else if (Clazz.instanceOf(obj, Double)) {
        var d = (obj).doubleValue();
        this.str += Double.toString(d);
    }
};
sec.geo.utilities.StringBuilder.prototype.toString = function() {
    return this.str;
};
sec.geo.utilities.StringBuilder.prototype.replace = function(first, last, str2) {
    var startStr = "";
    var endStr = "";
    startStr = this.str.substring(0, first);
    endStr = this.str.substring(last, this.str.length);
    this.str = startStr + str2 + endStr;
};
sec.geo.utilities.StringBuilder.prototype.indexOf = function(str2) {
    return this.str.indexOf(str2);
};
sec.geo.utilities.StringBuilder.prototype.indexOf2 = function(str2, index) {
    return this.str.indexOf(str2, index);
};
