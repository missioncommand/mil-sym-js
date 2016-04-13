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
        if (typeof (arguments[i + 1]) !== 'undefined') {
            items[arguments[i]] = arguments[i + 1];
            length++;
        }
    }

    this.remove = function(in_key)
    {
        var tmp_value;
        if (typeof (items[in_key]) !== 'undefined') {
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
        if (typeof (in_value) !== 'undefined') {
            if (typeof (items[in_key]) === 'undefined') {
                length++;
            }
            items[in_key] = in_value;
        }
        return in_value;
    };

    this.containsKey = function(in_key)
    {
        return typeof (items[in_key]) !== 'undefined';
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


