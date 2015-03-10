/* 
 * This class adds functions that exist in Java but not in JavaScript
 */
if(typeof String.prototype.equalsIgnoreCase !== 'function')
{
    String.prototype.equalsIgnoreCase = function(anotherString) {
        return(anotherString === null) ? false : (this === anotherString
                || this.toLowerCase() === anotherString.toLowerCase());
    };
}

if(typeof String.prototype.equals !== 'function')
{
    String.prototype.equals = function(anObject) {
        return this.valueOf() === anObject;
    };
}

if(typeof String.prototype.isEmpty !== 'function')
{
    String.prototype.isEmpty = function() {
        if (this.length === 0)
            return true;
        else
            return false;
    };
}

if(typeof String.prototype.contains !== 'function')
{
    String.prototype.contains = function(exp)
    {
        if (this.match(exp) !== null)
            return true;
        else
            return false;
    };
}

if(typeof Math.toRadians !== 'function')
{
    Math.toRadians = function(v)
    {
        return v * Math.PI / 180.0;
    };
}
/*
Boolean.prototype.booleanValue = function() {
    return this.valueOf();
};
String.prototype.startsWith = function(prefix) {
    if (arguments.length === 1) {
        return this.startsWith_string_number(arguments[0], 0);
    } else if (arguments.length === 2) {
        return this.startsWith_string_number(arguments[0], arguments[1]);
    } else {
        return false;
    }
};
String.prototype.endsWith = function(suffix) {
    return this.startsWith(suffix, this.length - suffix.length);
};
String.prototype.toCharArray = function() {
    var result = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
        result[i] = this.charAt(i);
    }
    return result;
};

String.prototype.startsWith_string_number = function(prefix, toffset) {
    var to = toffset;
    var po = 0;
    var pc = prefix.length;

    if ((toffset < 0) || (toffset > this.length - pc)) {
        return false;
    }
    while (--pc >= 0) {
        if (this.charAt(to++) !== prefix.charAt(po++)) {
            return false;
        }
    }
    return true;
};
String.prototype.startsWith = function(prefix) {
    if (arguments.length === 1) {
        return this.startsWith_string_number(arguments[0], 0);
    } else if (arguments.length === 2) {
        return this.startsWith_string_number(arguments[0], arguments[1]);
    } else {
        return false;
    }
};
String.prototype.matches = function(exp) {
    if (exp !== null) {
        exp = "^(" + exp + ")$";
    }
    var regExp = new RegExp(exp, "gm");
    var m = this.match(regExp);
    return m !== null && m.length !== 0;
};
String.prototype.$plit = function(regex, limit) {

    if (limit !== null && limit > 0) {
        if (limit === 1) {
            return this;
        }
        var regExp = new RegExp("(" + regex + ")", "gm");
        var count = 1;
        var s = this.replace(regExp, function($0, $1) {
            count++;
            if (count === limit) {
                return"@@_@@";
            } else if (count > limit) {
                return $0;
            } else {
                return $0;
            }
        });
        regExp = new RegExp(regex, "gm");
        var arr = this.split(regExp);
        if (arr.length > limit) {
            arr[limit - 1] = s.substring(s.indexOf("@@_@@") + 5);
            arr.length = limit;
        }
        return arr;
    } else {
        var regExp = new RegExp(regex, "gm");
        return this.split(regExp);
    }
};
String.prototype.doubleValue = function()
{
    return this.valueOf();
};//*/
