/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Integer=function()
{
    this.value=new Number(0);
    if(arguments.length===1)
    {
        var t=arguments[0];
        this.value=new Number(t);
        return this.value;
    }
    this.intValue=function()
    {
        return this.value;
    };
};
Integer.parseInt=function()
{
    if (arguments.length===1)
    {
        var t=arguments[0];
        var n=new Number(t);
        return n;
    }
    return null;
};
Integer.toHexString=function(i){
    return i.toString(16);
};

Integer.isInfinite=function()
{
    if (arguments.length===1)
    {
        var t=arguments[0];
        var n=new Number(t);
        var b=!isFinite(n);
        return b;
    }
    else
        return true;
};
Integer.toString=function()
{
    if (arguments.length===1)
    {
        var t=arguments[0];
        var n=new Number(t);
        var s=n.toString();
        return s;
    }
    else
        return null;
};

Integer.serialVersionUID = Integer.prototype.serialVersionUID = 1360826667806852920;
Integer.MIN_VALUE = Integer.prototype.MIN_VALUE = -0x80000000;
Integer.MAX_VALUE = Integer.prototype.MAX_VALUE = 0x7fffffff;
Integer.TYPE = Integer.prototype.TYPE = Integer;

