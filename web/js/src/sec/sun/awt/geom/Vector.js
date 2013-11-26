var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.Vector=function()
{

    //alert('vector');
    this._vector = null;
    this._elements = null;
    //Clazz.instantialize (this, arguments);
    //}, sec.sun.awt.geom, "Vector");
    //Clazz.makeConstructor (c$, 
    //function () {
    this._vector =  new java.util.ArrayList ();
    this._elements =  new sec.sun.awt.geom.Enumeration (this._vector);
    this.elements=function () 
    {
        return this._elements;
    };//);
    this.elementAt=function (j) 
    {
        return this._vector.get (j);
    };//, "~N");
    this.size=function () 
    {
        return this._vector.size ();
    };//);
    this.get=function (j) 
    {
        return this._vector.get (j);
    };//, "~N");
    this.isEmpty=function () 
    {
        return this._vector.isEmpty ();
    };//);
    this.toArray2=function () {
        return this._vector.toArray ();
    };//);
    this.toArray=function (obj) 
    {
        var j = 0;
        for (j = 0; j < obj.length; j++) 
        {
            if (this._vector.size () > j) obj[j] = this._vector.get (j);
            else obj[j] = null;
        }
    };//, "~A");
    this.add=function (obj) 
    {
        this._vector.add (obj);
        //alert(this._vector.size());
    };//, "~O");
    this.clear=function () 
    {
        this._vector.clear ();
    };//);
};