var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.ChainEnd=function()
{
    this.head = null;
    this.tail = null;
    this.partner = null;
    this.etag = 0;
    var first=arguments[0];
    var partner=arguments[1];
    this.head = first;
    this.tail = first;
    this.partner = partner;
    this.etag = first.getEdgeTag ();
    this.getChain=function () {
        return this.head;
    };
    this.setOtherEnd=function (partner) {
        this.partner = partner;
    };
    this.getPartner=function () {
        return this.partner;
    };
    this.linkTo=function (that) {
        if (this.etag === 0 || that.etag === 0) {
            throw  new InternalError ("ChainEnd linked more than once!");
        }
        if (this.etag === that.etag) {
            throw  new InternalError ("Linking chains of the same type!");
        }
        var enter;
        var exit;
        if (this.etag === 1) {
            enter = this;
            exit = that;
        } else {
            enter = that;
            exit = this;
        }
        this.etag = 0;
        that.etag = 0;
        enter.tail.setNext (exit.head);
        enter.tail = exit.tail;
        if (this.partner === that) {
            return enter.head;
        }
        var otherenter = exit.partner;
        var otherexit = enter.partner;
        otherenter.partner = otherexit;
        otherexit.partner = otherenter;
        if (enter.head.getYTop () < otherenter.head.getYTop ()) {
            enter.tail.setNext (otherenter.head);
            otherenter.head = enter.head;
        } else {
            otherexit.tail.setNext (enter.head);
            otherexit.tail = enter.tail;
        }
        return null;
    };
    this.addLink=function (newlink) {
        if (this.etag === 1) {
            this.tail.setNext (newlink);
            this.tail = newlink;
        } else {
            newlink.setNext (this.head);
            this.head = newlink;
        }
    };
    this.getX=function () {
        if (this.etag === 1) {
            return this.tail.getXBot ();
        } else {
            return this.head.getXBot ();
        }
    };
};