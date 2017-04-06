var java = java || {};
java.util = java.util || {};
java.util.ArrayList = function()
{
    this.array = [];
    if (arguments.length === 1)
    {
        var obj = arguments[0];
        if (obj instanceof java.util.ArrayList)
        {
            this.array = obj.getArray();
        }
        else if (obj instanceof Array)
        {
            this.array = arguments[0];
        }
    }
};
java.util.ArrayList.prototype.getArray = function()
{
    return this.array;
};
java.util.ArrayList.prototype.setArray = function(obj)
{
    this.array = obj;
};
java.util.ArrayList.prototype.add = function(obj1, obj2)
{
    if(obj1 !== undefined && obj1 !== null && obj2)
    {
        var j = 0, k = 0;
        var array2 = [];
        var location = obj1;
        if (location === this.array.length)
        {
            this.array.push(obj2);
        }
        else
        {
            for (j = 0; j < this.array.length; j++)
            {
                if (j !== location)
                {
                    array2.push(this.array[j]);
                }
                else
                {
                    array2.push(obj2);
                    array2.push(this.array[j]);
                }
            }
            this.array = array2;
        }
    }
    else if (obj1)
        this.array.push(obj1);
    /*
    var obj = obj1;
    if (arguments.length === 1)
        this.array.push(obj);
    else if (arguments.length === 2)
    {
        var j = 0, k = 0;
        var array2 = [];
        var location = arguments[0];
        var obj2 = arguments[1];
        if (location === this.array.length)
        {
            this.array.push(obj2);
        }
        else
        {
            for (j = 0; j < this.array.length; j++)
            {
                if (j !== location)
                {
                    array2.push(this.array[j]);
                }
                else
                {
                    array2.push(obj2);
                    array2.push(this.array[j]);
                }
            }
            this.array = array2;
        }
    }//*/
};
java.util.ArrayList.prototype.addAll = function()//was location,obj 
{
    var location = 0, j = 0, k = 0;
    var obj = null;
    var b = false;
    if (arguments.length === 1)
    {
        obj = arguments[0];
        if (obj instanceof java.util.ArrayList)
        {
            //array=array.concat(obj.array);                        
            this.array = this.array.concat(obj.getArray());
        }
    }
    else if (arguments.length === 2)
    {
        location = arguments[0];
        obj = arguments[1];
        b = obj instanceof java.util.ArrayList;
        if (b === false)
            return;
        var array2 = [];
        var obj2 = null;
        for (j = 0; j < this.array.length; j++)
        {
            if (j !== location)
            {
                array2.push(this.array[j]);
            }
            else
            {
                for (k = 0; k < obj.size(); k++)
                {
                    obj2 = obj.get(k);
                    array2.push(obj2);
                }
                array2.push(this.array[j]);
            }
        }
        this.array = array2;
    }
};
java.util.ArrayList.prototype.clear = function() {
    this.array = [];
};
java.util.ArrayList.prototype.clone = function() {
    var a = new java.util.ArrayList();
    var j = 0;
    for (j = 0; j < this.array.length; j++)
    {
        a.add(this.array[j]);
    }
    return a;
};
java.util.ArrayList.prototype.remove = function(location) {
    this.array.splice(location, 1);
};
java.util.ArrayList.prototype.removeRange = function(start, end) {
    this.array.splice(start, end - start);
};
java.util.ArrayList.prototype.get = function(location) {
    if(location < this.array.length)
    {
        return this.array[location];
    }
    else
    {
        throw new Error("java.util.ArrayList.prototype.get - Index " + location + " out of Bounds");
    }
};
java.util.ArrayList.prototype.set = function(location, obj) {
    if(location < this.array.length)
    {
        this.array[location] = obj;
    }
    else
    {
        throw new Error("java.util.ArrayList.prototype.set - Index " + location + " out of Bounds");
    }
};
java.util.ArrayList.prototype.toArray = function() {
    var j = 0;
    var a = [];
    for (j = 0; j < this.array.length; j++)
        a.push(this.array[j]);
    return a;
};
java.util.ArrayList.prototype.size = function() {
    return this.array.length;
};
java.util.ArrayList.prototype.isEmpty = function() {
    if (this.array === null || this.array.length === 0)
        return true;
    return false;
};
java.util.ArrayList.prototype.contains = function(obj) {
    for (var j = 0; j < this.array.length; j++) {
        if (obj === this.array[j])
            return true;
    }
    return false;
};
java.util.ArrayList.prototype.indexOf = function(obj) {
    for (var j = 0; j < this.array.length; j++) {
        if (obj === this.array[j])
            return j;
    }
    return -1;
};
