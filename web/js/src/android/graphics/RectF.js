var android = android || {};
android.graphics = android.graphics || {};
android.graphics.RectF = function() {
    this.top = 0;
    this.left = 0;
    this.bottom = 0;
    this.right = 0;
    if (arguments.length === 4)
    {
        this.left = arguments[0];
        this.top = arguments[1];
        this.right = arguments[2];
        this.bottom = arguments[3];
    }
    this.intersects = function(a, b) {
        if (a.contains(b.left, b.top))
            return true;
        else if (a.contains(b.left, b.bottom))
            return true;
        else if (a.contains(b.right, b.top))
            return true;
        else if (a.contains(b.right, b.bottom))
            return true;
        return false;
    };
    this.width = function() {
        return this.right - this.left;
    };
    this.height = function() {
        return this.bottom - this.top;
    };
    this.contains = function(x, y) {
        if (this.left < x && x < this.right)
            if (this.top < y && y < this.bottom)
                return true;
        return false;
    };
};