/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
System = function()
{
};
System.arraycopy = function(src, srcPos, dest, destPos, length) {
    var j = 0;
    for (j = 0; j < length; j++)
        dest[j + destPos] = src[srcPos + j];
};
