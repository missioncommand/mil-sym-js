var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.utilities=sec.geo.utilities || {};
sec.geo.utilities.StringBuilder=function()
{
    this.str = "";
    //Clazz.makeConstructor (c$, 
    //function (str2) {
    var str2;
    if(arguments.length===1)
    {
        str2=arguments[0];
        this.str += str2;
    }
};
    //}, "~S");
//Clazz.defineMethod (c$, "append", 
sec.geo.utilities.StringBuilder.prototype.append=function (obj) {
    //var str2;
    if(typeof(obj) === 'string')
    {
        //str2=obj;
        this.str += obj;//str2;
    }
    else if (Clazz.instanceOf (obj, String)) 
    {
        //str2 = obj;            
        this.str += obj;//str2;
    } 
    else if (Clazz.instanceOf (obj, Double)) {
        var d = (obj).doubleValue ();
        this.str += Double.toString (d);
    }
};//, "~O");
//Clazz.overrideMethod (c$, "toString", 
sec.geo.utilities.StringBuilder.prototype.toString=function () {
    return this.str;
};//);
//Clazz.defineMethod (c$, "replace", 
sec.geo.utilities.StringBuilder.prototype.replace=function (first, last, str2) {
    var startStr = "";
    var endStr = "";
    startStr = this.str.substring (0, first);
    endStr = this.str.substring (last, this.str.length);
    this.str = startStr + str2 + endStr;
};//, "~N,~N,~S");
//Clazz.defineMethod (c$, "indexOf", 
sec.geo.utilities.StringBuilder.prototype.indexOf=function (str2) {
    return this.str.indexOf (str2);
};//, "~S");
//Clazz.defineMethod (c$, "indexOf2", 
sec.geo.utilities.StringBuilder.prototype.indexOf2=function (str2, index) {
    return this.str.indexOf (str2, index);
};//, "~S,~N");


