var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.shape = sec.geo.shape || {};
sec.geo.shape.Cake = function()
{
    this.elements = new java.util.ArrayList();
    this.pivot = new sec.geo.GeoPoint();
    this.addLayer = function(layer)
    {
        if (Clazz.instanceOf(layer, sec.geo.shape.Polyarc))
        {
            layer.setPivot(this.pivot);
            this.elements.add(layer);
        }
        else if (Clazz.instanceOf(layer, sec.geo.shape.Radarc))
        {
            layer.setPivot(this.pivot);
            this.elements.add(layer);
        }
        else
        {
            throw  new IllegalArgumentException();
        }
    };
    this.setPivot = function(pivot)
    {
        this.pivot = pivot;
        for (var j = 0; j < this.elements.size(); j++)
        {
            var layer = this.elements.get(j);
            if (Clazz.instanceOf(layer, sec.geo.shape.Polyarc))
            {
                (layer).setPivot(pivot);
                this.elements.add(layer);
            }
            else if (Clazz.instanceOf(layer, sec.geo.shape.Radarc))
            {
                (layer).setPivot(pivot);
                this.elements.add(layer);
            }
            else if (Clazz.instanceOf(layer, sec.geo.shape.Circle))
            {
                (layer).setPivot(pivot);
                this.elements.add(layer);
            }
        }
    };
    this.getElements = function()
    {
        return this.elements;
    };
};