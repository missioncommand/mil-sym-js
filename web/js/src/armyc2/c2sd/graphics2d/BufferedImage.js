var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.BufferedImage = function() {
    this.createGraphics = function() {
        return  new armyc2.c2sd.graphics2d.Graphics2D();
    };
    this.flush = function() {
        return;
    };
    this.getWidth = function() {
        return 0;
    };
    this.getHeight = function() {
        return 0;
    };
};
armyc2.c2sd.graphics2d.BufferedImage.TYPE_INT_ARGB = 2;