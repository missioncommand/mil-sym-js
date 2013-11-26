var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.shape=sec.geo.shape || {};
sec.geo.shape.Cake=function()
{
    //﻿Clazz.declarePackage ("sec.geo.shape");
    //Clazz.load (null, "sec.geo.shape.Cake", ["java.lang.IllegalArgumentException", "java.util.ArrayList", "sec.geo.GeoPoint"], function () {
    //c$ = Clazz.decorateAsClass (function () {
    //this.pivot = null;
    //this.elements = null;
    //Clazz.instantialize (this, arguments);
    //}, sec.geo.shape, "Cake");
    //Clazz.makeConstructor (c$, 
    //function () {
    this.elements =  new java.util.ArrayList ();
    this.pivot =  new sec.geo.GeoPoint ();
    //});
    //Clazz.defineMethod (c$, "addLayer", 
    this.addLayer=function (layer) 
    {
        //alert('addlayer');
        if (Clazz.instanceOf (layer, sec.geo.shape.Polyarc)) 
        {
            //alert('polyarc');
            //(layer).setPivot (this.pivot);
            layer.setPivot (this.pivot);
            this.elements.add (layer);
        } 
        else if (Clazz.instanceOf (layer, sec.geo.shape.Radarc)) 
        {
            //alert('radarc');
            //alert(this.pivot);
            //(layer).setPivot (this.pivot);
            layer.setPivot (this.pivot);
            this.elements.add (layer);
            //alert();
        } 
        else 
        {
            //alert('illegal');
            throw  new IllegalArgumentException ();
        }
    };//, "~O");
    //Clazz.defineMethod (c$, "setPivot", 
    this.setPivot=function (pivot) 
    {
        this.pivot = pivot;
        //for (var layer, $layer = this.elements.iterator (); $layer.hasNext () && ((layer = $layer.next ()) || true);) 
        for (var j=0;j<this.elements.size();j++) 
        {
            var layer=this.elements.get(j);
            if (Clazz.instanceOf (layer, sec.geo.shape.Polyarc)) 
            {   
                //alert('polyarc');
                (layer).setPivot (pivot);
                this.elements.add (layer);
            } 
            else if (Clazz.instanceOf (layer, sec.geo.shape.Radarc)) 
            {
                //alert('radarc');
                (layer).setPivot (pivot);
                this.elements.add (layer);
            } 
            else if (Clazz.instanceOf (layer, sec.geo.shape.Circle)) 
            {
                (layer).setPivot (pivot);
                this.elements.add (layer);
            }
        }
    };//, "sec.geo.GeoPoint");
    //Clazz.defineMethod (c$, "getElements", 
    this.getElements=function () 
    {
        return this.elements;
    };//);
};