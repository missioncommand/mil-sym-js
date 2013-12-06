/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Clazz = {
    newArray: function() {
        var args = arguments;
        if (arguments.length === 1) {
            if (arguments[0]instanceof Array) {
                args = arguments[0];
            }
        }
        if (args.length <= 1) {
            return new Array();
        } else if (args.length === 2) {
            var dim = args[0];
            if (typeof dim === "string") {
                dim = dim.charCodeAt(0);
            }
            var val = args[1];
            var arr = new Array(dim);
            for (var i = 0; i < dim; i++) {
                arr[i] = val;
            }
            return arr;
        } else {
            dim = args[0];
            if (typeof dim === "string") {
                dim = dim.charCodeAt(0);
            }
            var len = args.length - 1;
            var xargs = new Array(len);
            for (i = 0; i < len; i++) {
                xargs[i] = args[i + 1];
            }
            arr = new Array(dim);
            for (i = 0; i < dim; i++) {
                arr[i] = Clazz.newArray(xargs);
            }
            return arr;
        }
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