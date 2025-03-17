var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.shape = sec.geo.shape || {};
sec.geo.shape.Track = function()
{
    this.elements = null;
    this.elements = new java.util.ArrayList();
    this.addRoute = function(route) {
        this.elements.add(route);
    };
};