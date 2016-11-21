Example for sec.web.renderer.MultiPointHandler.Rendersymbol clients using canvas, svg, or datauri formats.

The most commonly used formats used by clients for this function are KML and GeoJSON. For these formats the renderer uses virtual pixels and returns geo based strings to the client, so that the virtual pixels estimate typically affects only the glyph size for decorated lines and the variance between scales is usually not noticeable. For canvas, svg and datauri formats the object returned is a pixels based image so it is not well suited for virtual pixels. The client can pass the optional converter parameter to ensure that the renderer geo to pixels conversions match the conversions being done by the client. The example below is for Cesium/webGL clients and describes the required interface for all clients in the commented code.
 
For calls to RenderSymbol:            

	    var viewer = new Cesium.Viewer('cesiumContainer');            

            var _converter=
            {
                normalize:false,
                //required interface
                /**
                 * 
                 * @param {type} coord must accept type armyc2.c2sd.graphics2d.Point2D
                 * @returns {armyc2.c2sd.graphics2d.Point2D} must return type armyc2.c2sd.graphics2d.Point2D
                 */
                GeoToPixels:function(coord)
                {
                    var position = Cesium.Cartesian3.fromDegrees(coord.x, coord.y);
                    var result=new Cesium.Cartesian2(0,0);
                    var cart3=Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene,position,result);
                    //you need to return armyc2.c2sd.graphics2d.Point2D
                    var pt2d=new armyc2.c2sd.graphics2d.Point2D(result.x,result.y);                    
                    return pt2d;
                },
                //required interface
                /**
                 * 
                 * @param {type} pixel  must accept type armyc2.c2sd.graphics2d.Point2D
                 * @returns {undefined} must return type armyc2.c2sd.graphics2d.Point2D
                 */
                PixelsToGeo:function(pixel)
                {
                    var position = viewer.camera.pickEllipsoid(pixel);
                    var cartographicPosition = Cesium.Ellipsoid.WGS84.cartesianToCartographic(position);
                    var longitude = Cesium.Math.toDegrees(cartographicPosition.longitude);
                    var latitude = Cesium.Math.toDegrees(cartographicPosition.latitude);
                    //you need to return armyc2.c2sd.graphics2d.Point2D
                    var pt2d=new armyc2.c2sd.graphics2d.Point2D(longitude,latitude);
                    return pt2d;
                },
                //required interface takes a boolean
                /**
                 * 
                 * @param {type} accepts a boolean
                 * @returns {undefined}
                 */
                set_normalize:function(n)
                {
                    this.normalize=n;
                }
            };
