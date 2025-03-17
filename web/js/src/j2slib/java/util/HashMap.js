/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var java = java || {};
java.util = java.util || {};
java.util.HashMap = function()
{
    var length = 0;
    var items = new Array();
    for (var i = 0; i < arguments.length; i += 2) {
        if ((arguments[i + 1]) !== undefined) {
            items[arguments[i]] = arguments[i + 1];
            length++;
        }
    }

    this.remove = function(in_key)
    {
        var tmp_value;
        if ((items[in_key]) !== undefined) {
            length--;
            tmp_value = items[in_key];
            delete items[in_key];
        }
        return tmp_value;
    };

    this.get = function(in_key) {
        return items[in_key];
    };

    this.put = function(in_key, in_value)
    {
        if (in_value !== undefined) {
            if (items[in_key] === undefined) {
                length++;
            }
            items[in_key] = in_value;
        }
        return in_value;
    };

    this.containsKey = function(in_key)
    {
        return  (items[in_key] !== undefined);
    };
    this.containsValue = function(value)
    {
        var j = 0;
        for (j = 0; j < items.length; j++)
        {
            if (items[j] === value)
            {
                return true;
            }
        }
        //did not find the item
        return false;
        
        //indexOf only faster in Chrome, dramatically slower in IE and FireFox.
        //return (!(items.indexOf(value) < 0));
    };
    this.size = function()
    {
        return length;
    };
    this.isEmpty = function()
    {
        if(length>0)
            return false;
        else
            return true;
    };
};


