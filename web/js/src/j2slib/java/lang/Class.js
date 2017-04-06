/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Clazz = {
    newArray: function(obj1, obj2) {
        var oldArr = null;
        var arr = new Array();
        if(!obj1 && !obj2)
        {
            return arr;
        }
        else if(obj2)
        {
            if(Array.isArray(obj2))
                oldArr = obj2;
            else
                arr.push(obj2);
        }
        else if(obj1)
        {
            if(Array.isArray(obj1))
                oldArr = obj1;
            else
                arr.push(obj1);
        }
        
        if(oldArr !== null)
        {
            var len = oldArr.length;
        
            for (var i = 0; i < len; i++) 
            {
                arr[i] = oldArr[i];
            }
        }
        
        return arr;
    },
    instanceOf: function(obj)
    {
        if (arguments.length === 2)
        {
            var obj1 = arguments[0];
            var obj2 = arguments[1];
            return obj1 instanceof obj2;
        }
        if (obj !== null && obj !== undefined)
            return true;
        else
            return false;
    },
    instantialize: function()
    {
        return;
    }
};