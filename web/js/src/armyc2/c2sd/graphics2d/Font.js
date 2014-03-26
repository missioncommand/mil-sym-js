var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.Font = function() {
    var _size = 12; //was 10
    var _text = "";
    var _type = 0;
    if (arguments.length > 0) {
        _text = arguments[0];
        _type = arguments[1];
        _size = arguments[2];
    }
    this.getSize = function()
    {
        return _size;
    };
};
armyc2.c2sd.graphics2d.Font.PLAIN = 0;