var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.Arrays=function()
{
};
sec.sun.awt.geom.Arrays.sort= function (a) {
    var aux =  new Array(a.length);
    for (var j = 0; j < a.length; j++) 
        aux[j] = a[j];
    
    sec.sun.awt.geom.Arrays.mergeSort (aux, a, 0, a.length, 0);
};
sec.sun.awt.geom.Arrays.swap = function (x, a, b) {
    var t = x[a];
    x[a] = x[b];
    x[b] = t;
};
sec.sun.awt.geom.Arrays.compare = function (o1, o2) {
    var c1 = (o1).getCurve ();
    var c2 = (o2).getCurve ();
    var v1;
    var v2;
    if ((v1 = c1.getYTop ()) === (v2 = c2.getYTop ())) {
        if ((v1 = c1.getXTop ()) === (v2 = c2.getXTop ())) {
            return 0;
        }
    }
    if (v1 < v2) {
        return -1;
    }
    return 1;
};
sec.sun.awt.geom.Arrays.test=2;
sec.sun.awt.geom.Arrays.mergeSort = function (src, dest, low, high, off) {
    var length = high - low;
    var i=0;
    var j=0;
    if (length < 7) {
        for (i = low; i < high; i++) 
            for (j = i; j > low && sec.sun.awt.geom.Arrays.compare (dest[j - 1], dest[j]) > 0; j--) 
                sec.sun.awt.geom.Arrays.swap (dest, j, j - 1);
        return ;
    }
    var destLow = low;
    var destHigh = high;
    low += off;
    high += off;
    var mid = (low + high) >>> 1;
    if(mid===45)
    {
        sec.sun.awt.geom.Arrays.test=3;
    }
    sec.sun.awt.geom.Arrays.mergeSort (dest, src, low, mid, -off);
    sec.sun.awt.geom.Arrays.mergeSort (dest, src, mid, high, -off);
    if (sec.sun.awt.geom.Arrays.compare (src[mid - 1], src[mid]) <= 0) {
        System.arraycopy (src, low, dest, destLow, length);
    }
    for (i = destLow, p = low, q = mid; i < destHigh; i++) {
        if ( q >= high || p < mid && sec.sun.awt.geom.Arrays.compare (src[p], src[q]) <= 0) 
            dest[i] = src[p++];
        else dest[i] = src[q++];
    }
};
sec.sun.awt.geom.Arrays.arraycopy = function (src, srcPos, dest, destPos, length) {
    var j = 0;
    for (j = 0; j < length; j++) 
        dest[j + destPos] = src[srcPos + j];

};
sec.sun.awt.geom.Arrays.INSERTIONSORT_THRESHOLD=7;
