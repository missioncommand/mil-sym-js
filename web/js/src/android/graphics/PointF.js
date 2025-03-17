var android = android || {};
android.graphics = android.graphics || {};
android.graphics.PointF = function()
{
    this.x = 0;
    this.y = 0;
    if (arguments.length === 2)
    {
        this.x = arguments[0];
        this.y = arguments[1];
    }
};