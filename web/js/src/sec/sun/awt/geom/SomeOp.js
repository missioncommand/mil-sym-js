var sec = sec || {};
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.SomeOp = function()
{
    this._type = -1;
    this.inLeft = false;
    this.inRight = false;
    this.inResult = false;
    var type = arguments[0];
    this._type = type;
    this.newRow = function()
    {
        this.inLeft = false;
        this.inRight = false;
        this.inResult = false;
    };
    this.classify = function(e)
    {
        if (e.getCurveTag() === 0) {
            this.inLeft = !this.inLeft;
        } else {
            this.inRight = !this.inRight;
        }
        var newClass = this.newClassification(this.inLeft, this.inRight);
        if (this.inResult === newClass) {
            return 0;
        }
        this.inResult = newClass;
        return (newClass ? 1 : -1);
    };
    this.getState = function()
    {
        return (this.inResult ? 1 : -1);
    };
    this.newClassification = function(inLeft, inRight)
    {
        switch (this._type)
        {
            case 1:
                return (inLeft || inRight);
            case 0:
                return (inLeft && !inRight);
            case 2:
                return (inLeft && inRight);
            case 3:
                return (inLeft !== inRight);
            default:
                return false;
        }
    };
    this.calculate = function(left, right)
    {
        var edges = new sec.sun.awt.geom.Vector();
        sec.sun.awt.geom.SomeOp.addEdges(edges, left, 0);
        sec.sun.awt.geom.SomeOp.addEdges(edges, right, 1);
        edges = this.pruneEdges(edges);
        if (false) {
            System.out.println("result: ");
            var numcurves = edges.size();
            var curvelist = edges.toArray2();
            for (var i = 0; i < numcurves; i++) {
                System.out.println("curvelist[" + i + "] = " + curvelist[i]);
            }
        }
        return edges;
    };
    this.pruneEdges = function(edges)
    {
        var numedges = edges.size();
        if (numedges < 2) {
            return edges;
        }
        var edgelist = new Array(numedges);
        var _enum = edges.elements();
        var k = 0;
        while (_enum.hasMoreElements()) {
            edgelist[k++] = _enum.nextElement();
        }
        sec.sun.awt.geom.Arrays.sort(edgelist);
        if (false) {
            System.out.println("pruning: ");
            for (var i = 0; i < numedges; i++) {
                System.out.println("edgelist[" + i + "] = " + edgelist[i]);
            }
        }
        var e;
        var left = 0;
        var right = 0;
        var cur = 0;
        var next = 0;
        var yrange = Clazz.newArray(2, 0);
        var subcurves = new sec.sun.awt.geom.Vector();
        var chains = new sec.sun.awt.geom.Vector();
        var links = new sec.sun.awt.geom.Vector();
        while (left < numedges) {
            var y = yrange[0];
            for (cur = next = right - 1; cur >= left; cur--) {
                e = edgelist[cur];
                if (e.getCurve().getYBot() > y) {
                    if (next > cur) {
                        edgelist[next] = e;
                    }
                    next--;
                }
            }
            left = next + 1;
            if (left >= right) {
                if (right >= numedges) {
                    break;
                }
                y = edgelist[right].getCurve().getYTop();
                if (y > yrange[0]) {
                    sec.sun.awt.geom.SomeOp.finalizeSubCurves(subcurves, chains);
                }
                yrange[0] = y;
            }
            while (right < numedges) {
                e = edgelist[right];
                if (e.getCurve().getYTop() > y) {
                    break;
                }
                right++;
            }
            yrange[1] = edgelist[left].getCurve().getYBot();
            if (right < numedges) {
                y = edgelist[right].getCurve().getYTop();
                if (yrange[1] > y) {
                    yrange[1] = y;
                }
            }
            if (false) {
                System.out.println("current line: y = [" + yrange[0] + ", " + yrange[1] + "]");
                for (cur = left; cur < right; cur++) {
                    System.out.println("  " + edgelist[cur]);
                }
            }
            var nexteq = 1;
            for (cur = left; cur < right; cur++) {
                e = edgelist[cur];
                e.setEquivalence(0);
                for (next = cur; next > left; next--) {
                    var prevedge = edgelist[next - 1];
                    var ordering = e.compareTo(prevedge, yrange);
                    if (yrange[1] <= yrange[0]) {
                        throw  new InternalError("backstepping to " + yrange[1] + " from " + yrange[0]);
                    }
                    if (ordering >= 0) {
                        if (ordering === 0) {
                            var eq = prevedge.getEquivalence();
                            if (eq === 0) {
                                eq = nexteq++;
                                prevedge.setEquivalence(eq);
                            }
                            e.setEquivalence(eq);
                        }
                        break;
                    }
                    edgelist[next] = prevedge;
                }
                edgelist[next] = e;
            }
            if (false) {
                System.out.println("current sorted line: y = [" + yrange[0] + ", " + yrange[1] + "]");
                for (cur = left; cur < right; cur++) {
                    System.out.println("  " + edgelist[cur]);
                }
            }
            this.newRow();
            var ystart = yrange[0];
            var yend = yrange[1];
            for (cur = left; cur < right; cur++) {
                e = edgelist[cur];
                var etag;
                var eq = e.getEquivalence();
                if (eq !== 0) {
                    var origstate = this.getState();
                    etag = (origstate === 1 ? -1 : 1);
                    var activematch = null;
                    var longestmatch = e;
                    var furthesty = yend;                    
                    do {
                        this.classify(e);
                        if (activematch === null && e.isActiveFor(ystart, etag)) {
                            activematch = e;
                        }
                        y = e.getCurve().getYBot();
                        if (y > furthesty) {
                            longestmatch = e;
                            furthesty = y;
                        }
                    }
                    //while (++cur < right && (e === edgelist[cur]).getEquivalence() === eq);
                    //while (++cur < right && (e === edgelist[cur]) && e.getEquivalence() === eq);
                    while (++cur < right && (e = edgelist[cur]).getEquivalence() === eq);
                    --cur;
                    if (this.getState() === origstate) {
                        etag = 0;
                    } else {
                        e = (activematch !== null ? activematch : longestmatch);
                    }
                } else {
                    etag = this.classify(e);
                }
                if (etag !== 0) {
                    e.record(yend, etag);
                    links.add(new sec.sun.awt.geom.CurveLink(e.getCurve(), ystart, yend, etag));
                }
            }
            if (this.getState() !== -1) {
                System.out.println("Still inside at end of active edge list!");
                System.out.println("num curves = " + (right - left));
                System.out.println("num links = " + links.size());
                System.out.println("y top = " + yrange[0]);
                if (right < numedges) {
                    System.out.println("y top of next curve = " + edgelist[right].getCurve().getYTop());
                } else {
                    System.out.println("no more curves");
                }
                for (cur = left; cur < right; cur++) {
                    e = edgelist[cur];
                    System.out.println(e);
                    var eq = e.getEquivalence();
                    if (eq !== 0) {
                        System.out.println("  was equal to " + eq + "...");
                    }
                }
            }
            if (false) {
                System.out.println("new links:");
                for (var i = 0; i < links.size(); i++) {
                    var link = links.elementAt(i);
                    System.out.println("  " + link.getSubCurve());
                }
            }
            sec.sun.awt.geom.SomeOp.resolveLinks(subcurves, chains, links);
            links.clear();
            yrange[0] = yend;
        }
        sec.sun.awt.geom.SomeOp.finalizeSubCurves(subcurves, chains);
        var ret = new sec.sun.awt.geom.Vector();
        var enum_ = subcurves.elements();
        var c = null;
        var obj = null;
        while (enum_.hasMoreElements())
        {
            link = enum_.nextElement();
            ret.add(link.getMoveto());
            var nextlink = link;
            while ((nextlink = nextlink.getNext()) !== null)
            {
                if (!link.absorb(nextlink))
                {
                    obj = link.getSubCurve();
                    if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order0))
                    {
                        c = (obj).getParent();
                    }
                    else if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order1))
                    {
                        c = (obj).getParent();
                    }
                    else if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order2))
                    {
                        c = (obj).getParent();
                    }
                    else if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order3))
                    {
                        c = (obj).getParent();
                    }
                    else if (Clazz.instanceOf(obj, sec.sun.awt.geom.CurveObject))
                    {
                        c = obj;
                    }
                    if (c === null)
                    {
                        c = new sec.sun.awt.geom.CurveObject(obj);
                    }
                    ret.add(c);
                    link = nextlink;
                }
            }
            obj = link.getSubCurve();
            if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order0))
                c = (obj).getParent();
            else if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order1))
                c = (obj).getParent();
            else if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order2))
                c = (obj).getParent();
            else if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order3))
                c = (obj).getParent();
            else if (Clazz.instanceOf(obj, sec.sun.awt.geom.CurveObject))
                c = obj;
            if (c === null)
                c = new sec.sun.awt.geom.CurveObject(obj);
            ret.add(c);
        }
        return ret;
    };
};

sec.sun.awt.geom.SomeOp.addEdges = function(edges, curves, curvetag)
{
    var enum_ = curves.elements();
    var c = null;
    var obj = null;
    while (enum_.hasMoreElements())
    {
        obj = enum_.nextElement();
        if (Clazz.instanceOf(obj, sec.sun.awt.geom.CurveObject))
            c = obj;
        else
            c = new sec.sun.awt.geom.CurveObject(obj);
        if (c.getOrder() > 0)
        {
            edges.add(new sec.sun.awt.geom.Edge(c, curvetag));
        }
    }
};
sec.sun.awt.geom.SomeOp.finalizeSubCurves = function(subcurves, chains)
{
    var numchains = chains.size();
    if (numchains === 0) {
        return;
    }
    if ((numchains & 1) !== 0) {
        throw  new InternalError("Odd number of chains!");
    }
    var endlist = new Array(numchains);
    chains.toArray(endlist);
    for (var i = 1; i < numchains; i += 2)
    {
        var open = endlist[i - 1];
        var close = endlist[i];
        var subcurve = open.linkTo(close);
        if (subcurve !== null)
        {
            subcurves.add(subcurve);
        }
    }
    chains.clear();
};
sec.sun.awt.geom.SomeOp.resolveLinks = function(subcurves, chains, links)
{
    var numlinks = links.size();
    var linklist;
    if (numlinks === 0) {
        linklist = sec.sun.awt.geom.SomeOp.EmptyLinkList;
    } else {
        if ((numlinks & 1) !== 0) {
            throw  new InternalError("Odd number of new curves!");
        }
        linklist = new Array(numlinks + 2);
        links.toArray(linklist);
    }
    var numchains = chains.size();
    var endlist;
    if (numchains === 0) {
        endlist = sec.sun.awt.geom.SomeOp.EmptyChainList;
    } else {
        if ((numchains & 1) !== 0) {
            throw  new InternalError("Odd number of chains!");
        }
        endlist = new Array(numchains + 2);
        chains.toArray(endlist);
    }
    var curchain = 0;
    var curlink = 0;
    chains.clear();
    var chain = endlist[0];
    var nextchain = endlist[1];
    var link = linklist[0];
    var nextlink = linklist[1];
    while (chain != null || link != null) {
        var connectchains = (link == null);
        var connectlinks = (chain == null);
        if (!connectchains && !connectlinks) {
            connectchains = ((curchain & 1) == 0 && chain.getX() == nextchain.getX());
            connectlinks = ((curlink & 1) == 0 && link.getX() == nextlink.getX());
            if (!connectchains && !connectlinks) {
                var cx = chain.getX();
                var lx = link.getX();
                connectchains = (nextchain != null && cx < lx && sec.sun.awt.geom.SomeOp.obstructs(nextchain.getX(), lx, curchain));
                connectlinks = (nextlink != null && lx < cx && sec.sun.awt.geom.SomeOp.obstructs(nextlink.getX(), cx, curlink));
            }
        }
        if (connectchains) {
            var subcurve = chain.linkTo(nextchain);
            if (subcurve !== null) {
                subcurves.add(subcurve);
            }
            curchain += 2;
            chain = endlist[curchain];
            nextchain = endlist[curchain + 1];
        }
        if (connectlinks) {
            var openend = new sec.sun.awt.geom.ChainEnd(link, null);
            var closeend = new sec.sun.awt.geom.ChainEnd(nextlink, openend);
            openend.setOtherEnd(closeend);
            chains.add(openend);
            chains.add(closeend);
            curlink += 2;
            link = linklist[curlink];
            nextlink = linklist[curlink + 1];
        }
        if (!connectchains && !connectlinks) {
            chain.addLink(link);
            chains.add(chain);
            curchain++;
            chain = nextchain;
            nextchain = endlist[curchain + 1];
            curlink++;
            link = nextlink;
            nextlink = linklist[curlink + 1];
        }
    }
    if ((chains.size() & 1) !== 0) {
        System.out.println("Odd number of chains!");
    }
};
sec.sun.awt.geom.SomeOp.obstructs = function(v1, v2, phase)
{
    return (((phase & 1) === 0) ? (v1 <= v2) : (v1 < v2));
};
sec.sun.awt.geom.SomeOp.SUBOP = 0;
sec.sun.awt.geom.SomeOp.ADDOP = 1;
sec.sun.awt.geom.SomeOp.INTOP = 2;
sec.sun.awt.geom.SomeOp.XOROP = 3;
sec.sun.awt.geom.SomeOp.EmptyLinkList = new Array(2);
sec.sun.awt.geom.SomeOp.EmptyChainList = new Array(2);