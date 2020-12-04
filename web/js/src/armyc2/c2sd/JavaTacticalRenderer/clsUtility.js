var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaTacticalRenderer = armyc2.c2sd.JavaTacticalRenderer || {};
armyc2.c2sd.JavaTacticalRenderer.clsUtility = {
    POINT2ToPoint2D: function (pt2) {
        if (pt2 === null) {
            return null;
        }
        var x = pt2.x;
        var y = pt2.y;
        var pt = new armyc2.c2sd.graphics2d.Point2D(x, y);
        return pt;
    },
    linesOutsideClipBounds: function (tg, clipBounds) {
        try {
            var isAutoshape = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isAutoshape(tg);
            if (isAutoshape)
                return false;
            var xmin = clipBounds.getMinX();
            var xmax = clipBounds.getMaxX();
            var ymin = clipBounds.getMinY();
            var ymax = clipBounds.getMaxY();
            var j = 0;
            var pt0 = null;
            var pt1 = null;
            var boundsEdge = null;
            var ptsLine = null;
            for (j = 0; j < tg.Pixels.size() - 1; j++) {
                pt0 = tg.Pixels.get(j);
                pt1 = tg.Pixels.get(j + 1);
                if (clipBounds.containsPt2(pt0.x, pt0.y))
                    return false;
                if (clipBounds.containsPt2(pt1.x, pt1.y))
                    return false;
                ptsLine = new armyc2.c2sd.graphics2d.Line2D(pt0.x, pt0.y, pt1.x, pt1.y);
                boundsEdge = new armyc2.c2sd.graphics2d.Line2D(xmin, ymin, xmax, ymin);
                if (ptsLine.intersectsLine(boundsEdge))
                    return false;
                boundsEdge = new armyc2.c2sd.graphics2d.Line2D(xmax, ymin, xmax, ymax);
                if (ptsLine.intersectsLine(boundsEdge))
                    return false;
                boundsEdge = new armyc2.c2sd.graphics2d.Line2D(xmax, ymax, xmin, ymax);
                if (ptsLine.intersectsLine(boundsEdge))
                    return false;
                boundsEdge = new armyc2.c2sd.graphics2d.Line2D(xmin, ymax, xmin, ymin);
                if (ptsLine.intersectsLine(boundsEdge))
                    return false;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "linesOutsideClipBounds", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside linesOutsideClipBounds", exc));
            } else {
                throw exc;
            }
        }
        return true;
    },
    GetMinPoints: function (lineType) {
        var result = -1;
        switch (lineType) {
            case 24311000:
            case 14000001:
            case 14000002:
                result = 1;
                break;
            case 15000002:
            case 22133100:
            case 22131200:
            case 23162100:
            case 24312000:
            case 24321300:
            case 24323300:
            case 24324300:
            case 24325300:
            case 24322300:
            case 24326200:
            case 24331300:
            case 24332300:
            case 24333300:
            case 24334300:
            case 24335300:
            case 24336300:
            case 24337300:
            case 24338300:
            case 24339300:
            case 24353000:
            case 24363000:
            case 25200101:
                result = 1;
                break;
            case 243111000:
            case 243112000:
                result = 1;
                break;
            case 23162200:
            case 23161300:
            case 22133200:
            case 24326101:
            case 24321200:
            case 24323200:
            case 24325200:
            case 24324200:
            case 24322200:
            case 24331200:
            case 24332200:
            case 24333200:
            case 24334200:
            case 24335200:
            case 24336200:
            case 24337200:
            case 24338200:
            case 24339200:
            case 24352000:
            case 24362000:
                result = 2;
                break;
            case 22534000:
            case 211800000:
            case 23163000:
            case 23221000:
            case 23222000:
            case 23410000:
            case 212210001:
            case 212230001:
            case 212220001:
            case 212300001:
                result = 4;
                break;
            case 21300000:
            case 21100000:
            case 21200000:
            case 21400000:
            case 21500000:
            case 21600000:
            case 21800000:
            case 211000000:
            case 211700000:
            case 212000000:
            case 212210000:
            case 212230000:
            case 212220000:
            case 212300000:
            case 212400000:
            case 212410000:
            case 22139000:
            case 22310000:
            case 2237000:
            case 22422000:
            case 22524000:
            case 22533000:
            case 22611000:
            case 22612000:
            case 22613000:
            case 22623000:
            case 23171000:
            case 23174000:
            case 23173000:
            case 23191000:
            case 23192000:
            case 23193000:
            case 23194000:
            case 231100000:
            case 23211000:
            case 23212000:
            case 23213000:
            case 23224000:
            case 23225000:
            case 31710000:
            case 31720000:
            case 31730000:
            case 31740000:
            case 31750000:
            case 31751000:
            case 31760000:
            case 31770000:
            case 31780000:
            case 31790000:
            case 317100000:
            case 32214000:
            case 32222000:
            case 32223000:
            case 32224000:
            case 32232400:
            case 32540000:
            case 32670000:
            case 32254200:
            case 32255200:
            case 32323000:
            case 32324000:
            case 32231500:
            case 32550000:
            case 32225200:
            case 32233100:
            case 32233500:
            case 32244200:
            case 32253000:
            case 322512000:
            case 32321000:
            case 32322000:
            case 32520000:
            case 32560000:
            case 32620000:
            case 32311000:
            case 32312000:
            case 32313000:
            case 32314000:
            case 32315000:
            case 32316000:
            case 32317000:
            case 32318000:
            case 32319000:
            case 32411100:
            case 32411200:
            case 32411300:
            case 32411400:
            case 32411500:
            case 32411600:
            case 32411700:
            case 32411800:
            case 32411900:
            case 324111000:
            case 324111100:
            case 324111200:
            case 324111300:
            case 324111400:
            case 324111500:
            case 324111600:
            case 324111700:
            case 32412100:
            case 32412200:
            case 32412300:
            case 32413100:
            case 32413200:
            case 32413300:
            case 32414100:
            case 32414200:
            case 32414300:
            case 32414400:
            case 32414500:
            case 32415100:
            case 32415200:
            case 32415300:
            case 32416100:
            case 32416200:
            case 32416300:
            case 32416400:
            case 32416500:
            case 32416600:
            case 32416700:
            case 32416800:
            case 32416900:
                result = 3;
                break;
            case 22222000:
            case 22224000:
            case 22225000:
            case 22421000:
            case 22522100:
            case 23120000:
            case 23157000:
            case 23172000:
            case 23223000:
            case 23226000:
            case 23227000:
            case 23340000:
            case 24250000:
            case 24211000:
            case 24260000:
            case 25211000:
            case 25212000:
                result = 2;
                break;
            default:
                result = 2;
                break;
        }
        if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(lineType)) {
            result = 3;
        }
        return result;
    },
    isBasicShape: function (linetype) {
        switch (linetype) {
            case 11000000:
            case 10000000:
            case 12000000:
            case 13000000:
            case 13000001:
            case 13000002:
            case 14000000:
            case 15000001:
            case 15000000:
            case 15000002:
            case 15000003:
            case 15000004:
            case 14000001:
            case 14000002:
                return true;
            default:
                return false;
        }
    },
    isClosedPolygon: function (linetype) {
        var result = false;
        switch (linetype) {
            case 15000001:
            case 15000004:
            case 24330000:
            case 23162000:
            case 22135000:
            case 23164000:
            case 23180000:
            case 22231000:
            case 22232000:
            case 22233000:
            case 22234000:
            case 22234100:
            case 22234200:
            case 22235000:
            case 2237000:
            case 22431100:
            case 22431000:
            case 22133000:
            case 22136000:
            case 22137000:
            case 22138000:
            case 22131000:
            case 11000000:
            case 22432000:
            case 22531000:
            case 22532000:
            case 22535000:
            case 22621000:
            case 22622000:
            case 22625000:
            case 22626000:
            case 23114000:
            case 23115000:
            case 23113000:
            case 23111000:
            case 23350000:
            case 23490000:
            case 24321100:
            case 24322100:
            case 22132000:
            case 25351000:
            case 24324100:
            case 24325100:
            case 25330000:
            case 221311000:
            case 221310000:
            case 22340000:
            case 22350000:
            case 24315000:
            case 24323100:
            case 24314000:
            case 243100000:
            case 22624000:
            case 25310000:
            case 25320000:
            case 25340000:
            case 25352000:
            case 25353000:
            case 22134000:
            case 22536000:
            case 23450000:
            case 23440000:
            case 23460000:
            case 24313000:
            case 24331100:
            case 24338100:
            case 24339100:
            case 24332100:
            case 24334100:
            case 24333100:
            case 24337100:
            case 24335100:
            case 24336100:
            case 24351000:
            case 24361000:
            case 31710000:
            case 31720000:
            case 31730000:
            case 31740000:
            case 31750000:
            case 31751000:
            case 31760000:
            case 31770000:
            case 31780000:
            case 31790000:
            case 317100000:
            case 32214000:
            case 32222000:
            case 32223000:
            case 32224000:
            case 32232400:
            case 32540000:
            case 32670000:
            case 32254200:
            case 32255200:
            case 32323000:
            case 32324000:
            case 32231500:
            case 32550000:
            case 32225200:
            case 32233100:
            case 32233500:
            case 32244200:
            case 32253000:
            case 322512000:
            case 32321000:
            case 32322000:
            case 32520000:
            case 32560000:
            case 32620000:
            case 32311000:
            case 32312000:
            case 32313000:
            case 32314000:
            case 32315000:
            case 32316000:
            case 32317000:
            case 32318000:
            case 32319000:
            case 32411100:
            case 32411200:
            case 32411300:
            case 32411400:
            case 32411500:
            case 32411600:
            case 32411700:
            case 32411800:
            case 32411900:
            case 324111000:
            case 324111100:
            case 324111200:
            case 324111300:
            case 324111400:
            case 324111500:
            case 324111600:
            case 324111700:
            case 32412100:
            case 32412200:
            case 32412300:
            case 32413100:
            case 32413200:
            case 32413300:
            case 32414100:
            case 32414200:
            case 32414300:
            case 32414400:
            case 32414500:
            case 32415100:
            case 32415200:
            case 32415300:
            case 32416100:
            case 32416200:
            case 32416300:
            case 32416400:
            case 32416500:
            case 32416600:
            case 32416700:
            case 32416800:
            case 32416900:
            case 24226000:
                result = true;
            default:
                break;
        }
        return result;
    },
    ClosePolygon: function (Pixels) {
        try {
            var pt0 = Pixels.get(0);
            var pt1 = Pixels.get(Pixels.size() - 1);
            if (pt0.x !== pt1.x || pt0.y !== pt1.y) {
                Pixels.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0.x, pt0.y));
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "ClosePolygon", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ClosePolygon", exc));
            } else {
                throw exc;
            }
        }
    },
    shiftModifiersLeft: function (p1, p2, shift) {
        try {
            var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(p1);
            var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(p2);
            var dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, pt2);
            if (pt1.x < pt2.x || (pt1.x === pt2.x && pt1.y < pt2.y)) {
                pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt2, pt1, dist + shift);
                pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt1, pt2, dist - shift);
            } else {
                pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt2, pt1, dist - shift);
                pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt1, pt2, dist + shift);
            }
            p1.x = pt1.x;
            p1.y = pt1.y;
            p2.x = pt2.x;
            p2.y = pt2.y;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "shiftModifiersLeft", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside shiftModifiersLeft", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    ResolveModifierShape: function (tg, shape) {
        try {
            var shapeStyle = shape.get_Style();
            var lineStyle = tg.get_LineStyle();
            var lineType = tg.get_LineType();
            var hasFill = armyc2.c2sd.JavaTacticalRenderer.clsUtility.LinesWithFill(lineType);
            var bolMETOC = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.IsWeather(tg.get_SymbolId());
            if (bolMETOC > 0)
                return;
            var fillStyle=0;
            switch (tg.get_LineType()) {
                case 22421000:
                    shape.setFillColor(null);
                    shape.set_Style(tg.get_LineStyle());
                    shape.setLineColor(tg.get_LineColor());
                    break;
                case 24324100:
                case 24324300:
                case 24324200:
                case 24351000:
                case 24361000:
                case 24352000:
                case 24362000:
                case 24353000:
                case 24363000:
                case 23450000:
                case 23460000:
                case 23440000:
                case 22235000:
                    fillStyle=3;
                    if(tg.get_UseHatchFill()===true)
                        fillStyle=0;
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        shape.set_Style(tg.get_LineStyle());
                        shape.setLineColor(tg.get_LineColor());
                        shape.set_Fillstyle(fillStyle);//was 3
                        shape.setFillColor(tg.get_FillColor());
                    }
                    break;
                case 23115000:
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        shape.set_Style(tg.get_LineStyle());
                        shape.setLineColor(tg.get_LineColor());
                        shape.set_Fillstyle(0);
                        shape.setFillColor(tg.get_FillColor());
                    }
                    break;
                case 221310000:
                    fillStyle=2;
                    if(tg.get_UseHatchFill()===true)
                        fillStyle=0;
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        shape.set_Style(tg.get_LineStyle());
                        shape.setLineColor(tg.get_LineColor());
                        shape.set_Fillstyle(fillStyle);//was 2
                        shape.setFillColor(tg.get_FillColor());
                    }
                    break;
                case 23200001:
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL) {
                        shape.set_Fillstyle(1);
                        shape.setFillColor(tg.get_LineColor());
                    }
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        shape.set_Style(1);
                        shape.setLineColor(tg.get_LineColor());
                    }
                    break;
                case 22522100:
                case 23131200:
                case 23132000:
                case 22139000:
                case 211210000:
                case 23223000:
                case 23172000:
                case 23173000:
                case 23174000:
                case 23211000:
                case 23212000:
                case 23213000:
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL) {
                        shape.set_Fillstyle(1);
                        shape.setFillColor(tg.get_LineColor());
                    }
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        shape.set_Style(tg.get_LineStyle());
                        shape.setLineColor(tg.get_LineColor());
                    }
                    break;
                case 22310000:
                case 23157000:
                case 21700000:
                case 21710000:
                case 22528000:
                case 23191000:
                case 24222000:
                case 23224000:
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        shape.set_Style(1);
                        shape.setLineColor(tg.get_LineColor());
                    }
                    break;
                case 22431100:
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        shape.set_Style(1);
                        shape.setLineColor(tg.get_LineColor());
                        shape.setFillColor(tg.get_FillColor());
                        shape.set_Fillstyle(tg.get_FillStyle());
                    }
                    break;
                case 22340000:
                case 22350000:
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        shape.setLineColor(tg.get_LineColor());
                        if (shapeStyle !== lineStyle) {
                            if (shapeStyle !== 1) {
                                shape.set_Style(lineStyle);
                            }
                        }
                    }
                    break;
                case 2237000:
                case 22330000:
                case 211200000:
                case 23192000:
                case 23225000:
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        shape.setLineColor(tg.get_LineColor());
                        if (shapeStyle !== lineStyle) {
                            if (shapeStyle !== 1) {
                                shape.set_Style(lineStyle);
                            }
                        }
                    }
                    break;
                case 22320000:
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        shape.setLineColor(tg.get_LineColor());
                        if (shapeStyle !== lineStyle) {
                            if (shapeStyle !== 2) {
                                shape.set_Style(lineStyle);
                            }
                        }
                    }
                    break;
                default:
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL) {
                        shape.set_Fillstyle(tg.get_FillStyle());
                        shape.setFillColor(tg.get_FillColor());
                    }
                    if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE) {
                        if (lineType !== 22123000) {
                            shape.setLineColor(tg.get_LineColor());
                        }
                        shape.set_Style(lineStyle);
                        if (hasFill || armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(lineType) || armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(lineType, null)) {
                            if (lineType !== 243111000 && lineType !== 243112000 && lineType !== 15000001) {
                                shape.set_Fillstyle(tg.get_FillStyle());
                                shape.setFillColor(tg.get_FillColor());
                            }
                        }
                        switch (lineType) {
                            case 13000000:
                            //case 13000001:
                            //case 13000002:
                            case 14000000:
                                //case 15000003:
                                shape.set_Fillstyle(tg.get_FillStyle());
                                shape.setFillColor(tg.get_FillColor());
                                break;
                            case 15000003:
                            case 15000002:
                            case 15000001:
                            case 15000000:
                            case 14000001:
                            case 14000002:
                            case 13000001:
                            case 13000002:
                                shape.setFillColor(null);
                                break;
                            default:
                                break;
                        }
                    }
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "ResolveModifierShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ResolveModifierShape", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    GetOpaqueColor: function (color) {
        var r = color.getRed();
        var g = color.getGreen();
        var b = color.getBlue();
        return  new armyc2.c2sd.renderer.utilities.Color(r, g, b);
    },
    LinesWithFill: function (linetype) {
        var result = false;
        try {
            switch (linetype) {
                case 10000000:
                case 24326100:
                case 24222000:
                case 22330000:
                case 22522100:
                case 22121000:
                case 211400000:
                case 212600000:
                case 212500000:
                case 211600000:
                case 211900000:
                case 212100000:
                case 22122000:
                case 22123000:
                case 22124000:
                case 22125000:
                    //case 22221000:
                    //case 22223000:
                case 22421000:
                case 22522210:
                case 22522220:
                case 22523000:
                case 22525000:
                case 22526000:
                case 22527000:
                case 22613000:
                case 23112000:
                case 23120000:
                case 23131100:
                case 23134000:
                case 231112000:
                case 231113000:
                case 231111000:
                case 22528000:
                case 231114000:
                case 231115000:
                case 231116000:
                case 231117100:
                case 231117200:
                case 231117300:
                case 23330000:
                case 24250000:
                case 24211000:
                case 24221000:
                case 24223000:
                case 24225000:
                case 24224000:
                case 25211000:
                case 25212000:
                case 25221000:
                case 25222000:
                case 25223000:
                case 25225000:
                case 25224000:
                    result = true;
                    break;
                default:
                    result = false;
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "LinesWithFill", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside LinesWithFill", exc));
            } else {
                throw exc;
            }
        }
        return result;
    },
    tweakFillColor: function (tg) {
        try {
            if ((armyc2.c2sd.JavaTacticalRenderer.clsUtility.isSameColor(tg.get_LineColor(), tg.get_FillColor())).valueOf() === false)
                return;
            var fillColor = tg.get_FillColor();
            var r = fillColor.getRed();
            var g = fillColor.getGreen();
            var b = fillColor.getBlue();
            var alpha = fillColor.getAlpha();
            r *= 0.9;
            g *= 0.9;
            b *= 0.9;
            alpha *= 0.8;
            fillColor = new armyc2.c2sd.renderer.utilities.Color(r, g, b, alpha);
            tg.set_FillColor(fillColor);
        }
        catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "tweakFillColor", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside tweakFillColor", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    isSameColor: function (c1, c2) {
        try {
            if (c1 === null || c2 === null)
                return true;
            var r1 = c1.getRed();
            var r2 = c2.getRed();
            var g1 = c1.getGreen();
            var g2 = c2.getGreen();
            var b1 = c1.getBlue();
            var b2 = c2.getBlue();
            if (Math.abs(r1 - r2) < 5)
                if (Math.abs(g1 - g2) < 5)
                    if (Math.abs(b1 - b2) < 5)
                        return true;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "isSameColor", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside isSameColor", exc));
            } else {
                throw exc;
            }
        }
        return false;
    },
    getLineStroke: function (width, style, cap, round) {
        var stroke = null;
        try {
            switch (style) {
                case 0:
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round);
                    break;
                case 1:
                    var dash = [2 * width, 2 * width, 2 * width, 2 * width];
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round, 4, dash, 0);
                    break;
                case 2:
                    var dot = [0.1 * width, 2 * width, 0.1 * width, 2 * width, 0.1 * width, 2 * width, 0.1 * width, 2 * width];
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round, 4, dot, 0);
                    break;
                case 3:
                    var dashdot = [4 * width, 2 * width, 0.1 * width, 2 * width];
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round, 4, dashdot, 0);
                    break;
                case 4:
                    var dashdotdot = [2 * width, 2 * width, 0.1 * width, 2 * width, 0.1 * width, 2 * width];
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round, 4, dashdotdot, 0);
                    break;
                default:
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round);
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "getLineStroke", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getLineStroke", exc));
            } else {
                throw exc;
            }
        }
        return stroke;
    },
    getLineStroke2: function (width, style, cap, round) {
        var stroke = null;
        try {
            switch (style) {
                case 0:
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round);
                    break;
                case 1:
                    var dash = [2 * width, 2 * width];
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round, 4, dash, 0);
                    break;
                case 2:
                    var dot = [0.1 * width, 2 * width];
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round, 4, dot, 0);
                    break;
                case 3:
                    var dashdot = [4 * width, 2 * width, 0.1 * width, 2 * width];
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round, 4, dashdot, 0);
                    break;
                case 4:
                    var dashdotdot = [2 * width, 2 * width, 0.1 * width, 2 * width, 0.1 * width, 2 * width];
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round, 4, dashdotdot, 0);
                    break;
                default:
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(width, cap, round);
                    break;
            }
        }
        catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "getLineStroke", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getLineStroke", exc));
            } else {
                throw exc;
            }
        }
        return stroke;
    },
    SetShapeProperties: function (tg, shapes, bi) {
        try {
            if (shapes === null) {
                return;
            }
            var j = 0;
            var shape = null;
            var stroke = null;
            var dash = null;
            var lineThickness = tg.get_LineThickness();
            var shapeType = -1;
            var lineType = tg.get_LineType();
            var hasFill = armyc2.c2sd.JavaTacticalRenderer.clsUtility.LinesWithFill(lineType);
            var isChange1Area = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(lineType, null);
            var isClosedPolygon = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(lineType);
            if (tg.get_FillColor() === null)
            {
                switch (tg.get_LineType())
                {
                    case 22221000:
                    case 22223000:
                    case 22222000:
                    case 22222001:
                    case 22224000:
                    case 22224001:
                    case 22225000:
                        shape = shapes.get(shapes.size() - 1);
                        shapes.clear();
                        shapes.add(shape);
                        break;
                    case 21700000:
                    case 22521100:
                    case 22521200:
                    case 22521300:
                    case 22521420:
                    case 22320000:
                    case 22521410:
                    case 21710000:
                        var tempShapes = new java.util.ArrayList();
                        for (j = 0; j < shapes.size(); j++)
                        {
                            shape = shapes.get(j);
                            if (shape.getShapeType() !== armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL)
                                tempShapes.add(shape);
                        }
                        //alert(tempShapes.size());
                        shapes.clear();
                        shapes.addAll(tempShapes);
                        break;
                    default:
                        break;
                }
            }
            for (j = 0; j < shapes.size(); j++) {
                shape = shapes.get(j);
                if (shape === null || shape.getShape() === null) {
                    continue;
                }
                if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL) {
                    switch (tg.get_LineType()) {
                        case 32214000:
                            break;
                        default:
                            shape.setFillColor(tg.get_FillColor());
                            break;
                    }
                }
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ResolveModifierShape(tg, shape);
                if (lineType === 221311000)    //AIRFIELD
                    if (j === 1)
                        shape.setFillColor(null);
                //diagnostic
                if (lineType === 15000002)    //BBS_POINT
                    if (j === 0)
                        shape.setLineColor(null);
                //end section
                shapeType = shape.getShapeType();
                if (lineType === 22123000) {
                    armyc2.c2sd.JavaTacticalRenderer.clsUtility.SetLCColor(tg, shape);
                }
                var rect = null;
                var grid = null;
                var tp = tg.get_TexturePaint();
                if (hasFill || isClosedPolygon || isChange1Area || shapeType === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL) {
                    switch (shape.get_FillStyle()) {
                        case 3:
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetOpaqueColor(tg.get_LineColor()));
                            grid.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(2));
                            grid.drawLine(0, 8, 8, 0);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(tg.get_FillColor());
                            grid.dispose();
                            break;
                        case 2:
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetOpaqueColor(tg.get_LineColor()));
                            grid.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(2));
                            grid.drawLine(0, 0, 8, 8);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(tg.get_FillColor());
                            grid.dispose();
                            break;
                        case 6:
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(3, 3, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(tg.get_FillColor());
                            grid.drawLine(3, 3, 5, 3);
                            grid.drawLine(5, 3, 5, 5);
                            grid.drawLine(5, 5, 3, 5);
                            grid.drawLine(3, 5, 5, 3);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(null);
                            grid.dispose();
                            break;
                        case 4:
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetOpaqueColor(tg.get_LineColor()));
                            grid.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(2));
                            grid.drawLine(4, 0, 4, 8);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(tg.get_FillColor());
                            grid.dispose();
                            break;
                        case 5:
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetOpaqueColor(tg.get_LineColor()));
                            grid.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(2));
                            grid.drawLine(0, 4, 8, 4);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(tg.get_FillColor());
                            grid.dispose();
                            break;
                        case 7:// +
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
                            grid = bi.createGraphics();
                            grid.setColor(armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetOpaqueColor(tg.get_LineColor()));
                            grid.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(1));
                            //grid.drawLine(0, 4, 8, 4);
                            grid.drawLine(4, 2, 4, 6);
                            grid.drawLine(2, 4, 6, 4);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(tg.get_FillColor());
                            grid.dispose();
                            break;
                        case 8:// x hatch
                            //rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
                            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 10, 10);
                            grid = bi.createGraphics();
                            grid.setColor(armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetOpaqueColor(tg.get_LineColor()));
                            grid.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(1));
                            //grid.drawLine(0, 4, 8, 4);
                            grid.drawLine(2, 2, 8, 8);
                            grid.drawLine(2, 8, 8, 2);
                            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
                            shape.setTexturePaint(tp);
                            shape.setFillColor(tg.get_FillColor());
                            grid.dispose();
                            break;
                        case 1:
                            break;
                        default:
                            break;
                    }
                }
                if (lineThickness === 0)
                    lineThickness = 1;
                stroke = armyc2.c2sd.JavaTacticalRenderer.clsUtility.getLineStroke(lineThickness, shape.get_Style(), 1, 1);
                if (tg.get_Client().equalsIgnoreCase("ge"))
                {
                    if (tg.get_LineType() === 22320000 && shape.get_Style() === 2)
                        shape.set_Style(1);

                    stroke = armyc2.c2sd.JavaTacticalRenderer.clsUtility.getLineStroke2(lineThickness, shape.get_Style(), 1, 1);
                }
                if (shape.getShapeType() === armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL) {
                    stroke = new armyc2.c2sd.graphics2d.BasicStroke(lineThickness, 1, 0);
                }
                shape.setStroke(stroke);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "SetShapeProperties", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside SetShapeProperties", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    IsChange1Area: function (lineType, minPoints) {
        try {
            if (minPoints !== null) {
                minPoints.value = Clazz.newArray(1, 0);
            }
            switch (lineType) {
                case 25200101:
                    if (minPoints !== null) {
                        minPoints.value[0] = 1;
                    }
                    return true;
                case 22421000:
                    if (minPoints !== null) {
                        minPoints.value[0] = 1;
                    }
                    return false;
                case 22133200:
                case 13000000:  //bs_ellipse
                case 13000001:  //pbs ellipse
                case 13000002:  //pbs 
                case 15000002:
                case 24311000:
                case 22133100:
                case 22131200:
                case 22131300:
                case 14000001:
                case 14000002:
                case 23162200:
                case 24312000:
                case 24321300:
                case 24323300:
                case 24324300:
                case 24325300:
                case 24322300:
                case 24326200:
                case 24331300:
                case 24332300:
                case 24333300:
                case 24334300:
                case 24335300:
                case 24336300:
                case 24337300:
                case 24338300:
                case 24339300:
                case 24353000:
                case 24363000:
                case 243111000:
                case 243111001:
                case 243112000:
                case 24326101:
                case 24321200:
                case 24323200:
                case 24325200:
                case 24324200:
                case 24322200:
                case 24331200:
                case 24332200:
                case 24333200:
                case 24334200:
                case 24335200:
                case 24336200:
                case 24337200:
                case 24338200:
                case 24339200:
                case 24352000:
                case 24362000:
                case 23162100:
                    if (minPoints !== null) {
                        minPoints.value[0] = 1;
                    }
                    return true;
                default:
                    return false;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "IsChange1Area", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside IsChange1Area", exc));
            } else {
                throw exc;
            }
        }
        return false;
    },
    WriteFile: function (str) {
        try {
			//sourceClass, sourceMethod, message, level
			armyc2.c2sd.renderer.utilities.ErrorLogger.LogMessage("JavaTacticalRenderer.clsUtility","WriteFile",str,800);
            /*var bufferedWriter = new java.io.BufferedWriter(new java.io.FileWriter("Test.txt"));
            bufferedWriter.write(str);
            bufferedWriter.close();
            bufferedWriter = null;//*/
        } catch (exc) {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "WriteFile", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside WriteFile", exc));
        }
    },
    CalcIntersectPt: function (pt1, m1, pt2, m2, ptIntersect) {
        try {
            if (m1 === m2) {
                return;
            }
            var x1 = pt1.x;
            var y1 = pt1.y;
            var x2 = pt2.x;
            var y2 = pt2.y;
            var dx2 = ((y1 - y2 + m1 * x2 - m1 * x1) / (m2 - m1));
            var x3 = x2 + dx2;
            var y3 = (y2 + m2 * dx2);
            ptIntersect.x = x3;
            ptIntersect.y = y3;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "CalcIntersectPt", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcIntersectPt", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    ChannelWidth: function (pixels, distanceToChannelPOINT2) {
        var width = 0;
        try {
            var numPOINT2s = Math.floor(pixels.length / 2);
            if (numPOINT2s < 3) {
                return 0;
            }
            var channelWidthPOINT2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
            var lastSegmentPt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
            var lastSegmentPt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
            lastSegmentPt1.x = pixels[2 * numPOINT2s - 6];
            lastSegmentPt1.y = pixels[2 * numPOINT2s - 5];
            lastSegmentPt2.x = pixels[2 * numPOINT2s - 4];
            lastSegmentPt2.y = pixels[2 * numPOINT2s - 3];
            channelWidthPOINT2.x = pixels[2 * numPOINT2s - 2];
            channelWidthPOINT2.y = pixels[2 * numPOINT2s - 1];
            var m = new armyc2.c2sd.JavaLineArray.ref();
            var m1 = 0;
            var distance = 0;
            var ptIntersect = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
            var bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble2(lastSegmentPt1, lastSegmentPt2, m);
            if (bolVertical == true && m.value[0] != 0) {
                m1 = -1 / m.value[0];
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.CalcIntersectPt(channelWidthPOINT2, m1, lastSegmentPt2, m.value[0], ptIntersect);
                distance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(channelWidthPOINT2, ptIntersect);
            }
            if (bolVertical == true && m.value[0] == 0) {
                distance = Math.abs(channelWidthPOINT2.y - lastSegmentPt1.y);
            }
            if (bolVertical == false) {
                distance = Math.abs(channelWidthPOINT2.x - lastSegmentPt1.x);
                distanceToChannelPOINT2.value = Clazz.newArray(1, 0);
                distanceToChannelPOINT2.value[0] = distance;
                return Math.floor(distance) * 4;
            }
            width = Math.floor(distance) * 8;
            if (width < 2) {
                width = 2;
            }
            var hypotenuse = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(lastSegmentPt2, channelWidthPOINT2);
            distanceToChannelPOINT2.value = Clazz.newArray(1, 0);
            distanceToChannelPOINT2.value[0] = Math.sqrt(hypotenuse * hypotenuse - distance * distance);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "ChannelWidth", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ChannelWidth", exc));
            } else {
                throw exc;
            }
        }
        return width;
    },
    InYOrder: function (pt0, pt1, pt2) {
        try {
            if (pt0.y <= pt1.y && pt1.y <= pt2.y) {
                return true;
            }
            if (pt2.y <= pt1.y && pt1.y <= pt0.y) {
                return true;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "InYOrder", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside InYOrder", exc));
            } else {
                throw exc;
            }
        }
        return false;
    },
    InXOrder: function (pt0, pt1, pt2) {
        try {
            if (pt0.x <= pt1.x && pt1.x <= pt2.x) {
                return true;
            }
            if (pt2.x <= pt1.x && pt1.x <= pt0.x) {
                return true;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "InXOrder", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside InXOrder", exc));
            } else {
                throw exc;
            }
        }
        return false;
    },
    GetSectorRadiiFromPoints: function (tg) {
        try {
            if (tg.get_LineType() === 243111001)
                return;
            var ptCenter = tg.LatLongs.get(0);
            var ptLeftMin = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var ptRightMax = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var k = 0;
            var strLeft = "";
            var strRight = "";
            var strMin = "";
            var strMax = "";
            var temp = "";
            var nLeft = 0;
            var nRight = 0;
            var nMin = 0;
            var nMax = 0;
            var dist = 0;
            var a12 = new armyc2.c2sd.JavaLineArray.ref();
            var a21 = new armyc2.c2sd.JavaLineArray.ref();
            var numSectors = 0;
            if (tg.LatLongs.size() > 2) {
                numSectors = Math.floor((tg.LatLongs.size() - 2) / 2);
                for (k = 0; k < numSectors; k++) {
                    ptLeftMin = tg.LatLongs.get(2 * k + 2);
                    ptRightMax = tg.LatLongs.get(2 * k + 3);
                    dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(ptCenter, ptLeftMin, a12, a21);
                    nLeft = a12.value[0];
                    strLeft = Double.toString(nLeft);
                    nMin = dist;
                    strMin = Double.toString(nMin);
                    dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(ptCenter, ptRightMax, a12, a21);
                    nRight = a12.value[0];
                    strRight = Double.toString(nRight);
                    nMax = dist;
                    strMax = Double.toString(nMax);
                    if (k === 0) {
                        temp = strLeft + "," + strRight + "," + strMin + "," + strMax;
                    } else {
                        temp += "," + strLeft + "," + strRight + "," + strMin + "," + strMax;
                    }
                }
                if (!temp.equals("")) {
                    tg.set_H2(temp);
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "GetSectorRadiiFromPoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetSectorRadiiFromPoints", exc));
            } else {
                throw exc;
            }
        }
    },
    GetRadii: function (tg, lineType) {
        var radius = null;
        try {
            if (lineType === 243111000 && tg.LatLongs.size() > 2) {
                var ptCenter = tg.LatLongs.get(0);
                var pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                var dist = 0;
                var a12 = new armyc2.c2sd.JavaLineArray.ref();
                var a21 = new armyc2.c2sd.JavaLineArray.ref();
                var rad = 0;
                var temp = "";
                for (var j = 2; j < tg.LatLongs.size(); j++) {
                    pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.LatLongs.get(j));
                    dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(ptCenter, pt, a12, a21);
                    rad = Math.floor(dist);
                    if (rad <= 0) {
                        continue;
                    }
                    if (j === 2) {
                        temp = Double.toString(rad);
                    } else {
                        temp += ",";
                        temp += Double.toString(rad);
                    }
                }
                tg.set_H2(temp);
            }
            var strRadius = null;
            var radii = tg.get_H2();
            if (lineType === 243112000) {
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetSectorRadiiFromPoints(tg);
                radii = tg.get_H2();
            }
            strRadius = radii.split(",");
            var n = strRadius.length;
            if (n > 0) {
                radius = Clazz.newArray(n, 0);
            } else {
                return null;
            }
            if (lineType === 243111000) {
                for (var k = 0; k < n; k++) {
                    radius[k] = Double.parseDouble(strRadius[k]);
                }
            } else if (lineType === 243112000) {
                var numSectors = Math.floor(n / 4);
                var radius2 = Clazz.newArray(numSectors * 2, 0);
                var l = 0;
                for (k = 0; k < numSectors; k++) {
                    radius2[l++] = Double.parseDouble(strRadius[4 * k + 2]);
                    radius2[l++] = Double.parseDouble(strRadius[4 * k + 3]);
                }
                radius = radius2;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "GetRadii", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetRadii", exc));
            } else {
                throw exc;
            }
        }
        return radius;
    },
    ReorderPixels: function (pixels) {
        try {
            var tempPixels;
            var j;
            var x;
            var y;
            var counter;
            var numPoints;
            counter = 0;
            numPoints = Math.floor(pixels.length / 2);
            tempPixels = Clazz.newArray(pixels.length, 0);
            for (j = 0; j < numPoints - 1; j++) {
                x = pixels[pixels.length - 2 * j - 4];
                y = pixels[pixels.length - 2 * j - 3];
                tempPixels[counter] = x;
                tempPixels[counter + 1] = y;
                counter += 2;
            }
            var intPixelSize = pixels.length;
            tempPixels[counter] = pixels[intPixelSize - 2];
            tempPixels[counter + 1] = pixels[intPixelSize - 1];
            for (j = 0; j < pixels.length; j++) {
                pixels[j] = tempPixels[j];
            }
            tempPixels = null;
            return;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "ReorderPixels", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ReorderPixels", exc));
            } else {
                throw exc;
            }
        }
    },
    FilterVerticalSegments: function (tg) {
        try {
            switch (tg.get_LineType()) {
                case 22320000:
                case 22521410:
                case 21700000:
                case 21710000:
                case 22521100:
                case 22521200:
                case 22521300:
                case 22521420:
                case 22123000:
                case 22123001:
                case 231111000:
                case 231113000:
                case 231112000:
                case 231114000:
                case 231115000:
                case 231116000:
                case 231117100:
                case 15000000:
                case 231117101:
                case 231117200:
                case 231117201:
                case 231117300:
                case 231117301:
                case 23111001:
                case 25224000:
                case 25223000:
                case 25225000:
                    //case 23134000:
                    break;
                default:
                    return;
            }
            var ptCurrent = null;
            var ptLast = null;
            for (var j = 1; j < tg.Pixels.size(); j++) {
                ptLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(j - 1));
                ptCurrent = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(j));
                //if (Math.abs(ptCurrent.x-ptLast.x)<1) 
                if (ptCurrent.x === ptLast.x)
                {
                    ptCurrent.x += Math.pow(-1, j);
                    tg.Pixels.set(j, ptCurrent);
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsUtility", "FilterVerticalSegments", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside FilterVerticalSegments", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    MovePixels2: function (pixels2) {
        try {
            var pixels = Clazz.newArray(pixels2.size() * 2, 0);
            var j = 0;
            var ptTemp = null;
            for (j = 0; j < pixels2.size(); j++) {
                ptTemp = pixels2.get(j);
                pixels[2 * j] = ptTemp.x;
                pixels[2 * j + 1] = ptTemp.y;
            }
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.MovePixels(pixels, pixels2.size());
            for (j = 0; j < pixels2.size(); j++) {
                ptTemp = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pixels[2 * j], pixels[2 * j + 1]);
                pixels2.set(j, ptTemp);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "MovePixels2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside MovePixels2", exc));
            } else {
                throw exc;
            }
        }
    },
    MovePixels: function (pixels, count) {
        try {
            var bolNoRepeats = false;
            var j;
            var x1;
            var y1;
            var x2;
            var y2;
            var count2;
            if (count > 0) {
                count2 = count;
            } else {
                count2 = Math.floor(pixels.length / 2);
            }
            bolNoRepeats = false;
            do {
                bolNoRepeats = true;
                for (j = 0; j < count2 - 1; j++) {
                    x1 = pixels[2 * j];
                    y1 = pixels[2 * j + 1];
                    x2 = pixels[2 * j + 2];
                    y2 = pixels[2 * j + 3];
                    if (Math.abs(x2 - x1) < 1) {
                        bolNoRepeats = false;
                        pixels[2 * j + 2] = x1 + 1;
                        break;
                    }
                    if (Math.abs(y2 - y1) < 1) {
                        bolNoRepeats = false;
                        pixels[2 * j + 3] = y1 + 1;
                        break;
                    }
                }
            } while (bolNoRepeats === false);
            return;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "MovePixels", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside MovePixels", exc));
            } else {
                throw exc;
            }
        }
    },
    ComputeLastPoint: function (arrLocation) {
        var locD = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
        try {
            var locA = arrLocation.get(1);
            var locB = arrLocation.get(0);
            var dblDx = locB.x - locA.x;
            var dblDy = locB.y - locA.y;
            var dblTheta = Math.atan2(-dblDy, dblDx);
            var locC = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
            locC.x = Math.floor((locA.x + 0.85 * dblDx));
            locC.y = Math.floor((locA.y + 0.85 * dblDy));
            var dblAngle = dblTheta + 1.5707963267948966;
            if (dblAngle > 3.141592653589793) {
                dblAngle = dblAngle - 6.283185307179586;
            }
            if (dblAngle < -3.141592653589793) {
                dblAngle = dblAngle + 6.283185307179586;
            }
            var dblWidth = 30;
            locD.x = (locC.x + dblWidth * Math.cos(dblAngle));
            locD.y = (locC.y - dblWidth * Math.sin(dblAngle));
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "ComputeLastPoint", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ComputeLastPoint", exc));
            } else {
                throw exc;
            }
        }
        return locD;
    },
    GetSegments: function (pixels, segments, factor) {
        try {
            var j = 0;
            var m1 = new armyc2.c2sd.JavaLineArray.ref();
            var m2 = new armyc2.c2sd.JavaLineArray.ref();
            var numPoints = 0;
            var bolVertical1 = false;
            var bolVertical2 = false;
            var pt0F = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
            var pt1F = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
            var pt2F = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(0, 0);
            segments[0] = true;
            numPoints = Math.floor(pixels.length / 2);
            for (j = 0; j < numPoints - 2; j++) {
                pt0F.x = pixels[2 * j];
                pt0F.y = pixels[2 * j + 1];
                pt1F.x = pixels[2 * j + 2];
                pt1F.y = pixels[2 * j + 3];
                pt2F.x = pixels[2 * j + 4];
                pt2F.y = pixels[2 * j + 5];
                bolVertical1 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDoubleForRoutes(pt0F, pt1F, m1);
                bolVertical2 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDoubleForRoutes(pt1F, pt2F, m2);
                segments[j + 1] = true;
                if (bolVertical1 === true && bolVertical2 === true) {
                    if (Math.abs(Math.atan(m1.value[0]) - Math.atan(m2.value[0])) < 1 / factor && armyc2.c2sd.JavaTacticalRenderer.clsUtility.InXOrder(pt0F, pt1F, pt2F) === false) {
                        segments[j + 1] = false;
                    }
                }
                if ((bolVertical1 === false || Math.abs(m1.value[0]) > factor) && (bolVertical2 === false || Math.abs(m2.value[0]) > factor) && armyc2.c2sd.JavaTacticalRenderer.clsUtility.InYOrder(pt0F, pt1F, pt2F) === false) {
                    segments[j + 1] = false;
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "GetSegments", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetSegments", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    SetLCColor: function (tg, shape) {
        try {
            var affiliation = tg.get_Affiliation();
            if (affiliation !== null && affiliation.equals("H")) {
                if (shape.getLineColor() === armyc2.c2sd.renderer.utilities.Color.RED) {
                    shape.setLineColor(tg.get_LineColor());
                } else {
                    shape.setLineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                }
            } else {
                if (shape.getLineColor() !== armyc2.c2sd.renderer.utilities.Color.RED) {
                    shape.setLineColor(tg.get_LineColor());
                } else {
                    shape.setLineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "SetLCColor", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside SetLCColor", exc));
            } else {
                throw exc;
            }
        }
    },
    ReverseUSASLCPointsByQuadrant: function (tg) {
        try {
            if (tg.Pixels.size() < 2)
                return;
            var quadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(tg.Pixels.get(0), tg.Pixels.get(1));
            switch (tg.get_LineType()) {
                case 22123000:
                case 22123001:
                    if (tg.get_Affiliation() !== null && tg.get_Affiliation().equals("H")) {
                        switch (quadrant) {
                            case 2:
                            case 3:
                                break;
                            case 1:
                            case 4:
                                var n = tg.Pixels.size();
                                var pts2 = tg.Pixels.clone();
                                for (var j = 0; j < tg.Pixels.size (); j++)
                                    tg.Pixels.set(j, pts2.get(n - j - 1));

                                break;
                        }
                    } else {
                        switch (quadrant) {
                            case 1:
                            case 4:
                                break;
                            case 2:
                            case 3:
                                n = tg.Pixels.size();
                                pts2 = tg.Pixels.clone();
                                for (j = 0; j < tg.Pixels.size (); j++)
                                    tg.Pixels.set(j, pts2.get(n - j - 1));

                                break;
                        }
                    }
                default:
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "ReverseUSASLCPointsByQuadrant", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ReverseUSASLCPointsByQuadrant", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    getHatchShape: function (tg, bi) {
        var shape = null;
        try {
            if(tg.get_UseHatchFill()===true)
                return null;
            switch (tg.get_LineType()) {
                case 23115000:
                    break;
                default:
                    return null;
            }
            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
            shape.moveTo(tg.Pixels.get(0));
            var j = 0;
            for (j = 1; j < tg.Pixels.size(); j++) {
                shape.lineTo(tg.Pixels.get(j));
            }
            shape.setLineColor(new armyc2.c2sd.renderer.utilities.Color(0, 0, 0, 0));
            shape.set_Fillstyle(3);
            var rect = null;
            var grid = null;
            var tp = tg.get_TexturePaint();
            rect = new armyc2.c2sd.graphics2d.Rectangle2D(0, 0, 8, 8);
            grid = bi.createGraphics();
            grid.setColor(armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetOpaqueColor(tg.get_LineColor()));
            grid.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(2));
            grid.drawLine(0, 8, 8, 0);
            tp = new armyc2.c2sd.graphics2d.TexturePaint(bi, rect);
            shape.setTexturePaint(tp);
            shape.setFillColor(new armyc2.c2sd.renderer.utilities.Color(0, 0, 0, 0));
            grid.dispose();
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "GetHatchShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetHatchShape", exc));
            } else {
                throw exc;
            }
        }
        return shape;
    },
    initializeLinetypes: function (rev) {
        try {
            if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes !== null || armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs !== null)
                return;
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes = new java.util.HashMap();
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("BS_LINE--------", (10000000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("BS_AREA--------", (11000000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("BS_CROSS-------", (12000000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("BS_ELLIPSE-----", (13000000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("PBS_ELLIPSE----", (13000001));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("PBS_CIRCLE-----", (13000002));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("BS_RECTANGLE---", (14000000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("PBS_RECTANGLE--", (14000001));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("PBS_SQUARE-----", (14000002));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("BBS_LINE-------", (15000000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("BBS_AREA-------", (15000001));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("BBS_POINT------", (15000002));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("BBS_RECTANGLE--", (15000003));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("BS_BBOX--------", (15000004));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOHO---****X", (23200000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPB-----****X", (21100000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPH-----****X", (21200000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPY-----****X", (21300000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPC-----****X", (21400000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPX-----****X", (21500000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPJ-----****X", (21600000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPK-----****X", (21700000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPKF----****X", (21710000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPL-----****X", (21800000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPT-----****X", (211000000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPF-----****X", (211100000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPA-----****X", (211200000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPAS----****X", (211210000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPE-----****X", (211400000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPO-----****X", (211600000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPP-----****X", (211700000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPR-----****X", (211800000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPQ-----****X", (211900000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPM-----****X", (212000000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPS-----****X", (212100000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPUS----****X", (212210000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPUC----****X", (212230000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPUG----****X", (212220000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPZ-----****X", (212300000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPW-----****X", (212400000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPWP----****X", (212410000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPV-----****X", (212500000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TP2-----****X", (212600000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGLB---****X", (22121000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGLF---****X", (22122000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGLC---****X", (22123000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGLP---****X", (22124000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGLL---****X", (22125000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAG---****X", (22131000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAGC--****X", (22131200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAGR--****X", (22131300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAGI--****X", (22131000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAA---****X", (22132000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAE---****X", (22133000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAEI--****X", (22133000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAEC--****X", (22133100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAER--****X", (22133200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAF---****X", (22134000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAD---****X", (22135000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAX---****X", (22136000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAL---****X", (22137000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAP---****X", (22138000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAS---****X", (22139000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAY---****X", (221310000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPGAZ---****X", (221311000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPALC---****X", (22221000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPALM---****X", (22222000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPALS---****X", (22223000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPALU---****X", (22224000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPALL---****X", (22225000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPAAR---****X", (22231000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPAAF---****X", (22232000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPAAH---****X", (22233000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPAAM---****X", (22234000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPAAML--****X", (22234100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPAAMH--****X", (22234200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPAAW---****X", (22235000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPPD----****X", (22310000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPPA----****X", (22320000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPPF----****X", (22330000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPPM----****X", (22340000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPPY----****X", (22350000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPPC----****X", (2237000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPDLF---****X", (22421000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPDLP---****X", (22422000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPDAB---****X", (22431000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPDABP--****X", (22431100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPDAE---****X", (22432000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLAV--****X", (22521100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLAA--****X", (22521200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLAR--****X", (22521300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLAGM-****X", (22521410));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLAGS-****X", (22521420));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLKA--****X", (22522100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLKGM-****X", (22522210));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLKGS-****X", (22522220));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLF---****X", (22523000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLI---****X", (22524000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLL---****X", (22525000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLT---****X", (22526000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLC---****X", (22527000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOLP---****X", (22528000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOAA---****X", (22531000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOAK---****X", (22532000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOAF---****X", (22533000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOAS---****X", (22534000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOAO---****X", (22535000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPOAP---****X", (22536000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPSLA---****X", (22611000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPSLH---****X", (22612000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPSLR---****X", (22613000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPSLB---****X", (22623000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPSAO---****X", (22621000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPSAA---****X", (22622000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPSAE---****X", (22624000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPSAN---****X", (22625000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*GPSAT---****X", (22626000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOGB---****X", (23111000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOGL---****X", (23112000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOGZ---****X", (23113000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOGF---****X", (23114000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOGR---****X", (23115000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOS----****X", (23120000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOADU--****X", (23131100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOADC--****X", (23131200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOAR---****X", (23132000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOAW---****X", (23134000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOMC---****X", (23157000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOFD---****X", (23162000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOFDI--****X", (23162000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOFDC--****X", (23162100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOFDR--****X", (23162200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOFG---****X", (23163000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOFA---****X", (23164000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOEB---****X", (23171000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOEF---****X", (23172000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOET---****X", (23173000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOED---****X", (23174000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOU----****X", (23180000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPORP---****X", (23191000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPORS---****X", (23192000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPORA---****X", (23193000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPORC---****X", (23194000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOT----****X", (231100000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOWU---****X", (231111000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOWS---****X", (231112000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOWD---****X", (231113000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOWA---****X", (231114000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOWL---****X", (231115000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOWH---****X", (231116000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOWCS--****X", (231117100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOWCD--****X", (231117200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPOWCT--****X", (231117300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPBDE---****X", (23211000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPBDD---****X", (23212000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPBDI---****X", (23213000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPBCA---****X", (23221000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPBCB---****X", (23222000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPBCF---****X", (23223000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPBCE---****X", (23224000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPBCD---****X", (23225000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPBCL---****X", (23226000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPBCR---****X", (23227000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPSL----****X", (23330000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPSW----****X", (23340000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPSP----****X", (23350000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPNM----****X", (23410000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPNR----****X", (23440000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPNB----****X", (23450000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPNC----****X", (23460000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*MPNL----****X", (23490000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPLT----****X", (24250000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPLTS---****X", (24211000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPLTF---****X", (24260000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPLCF---****X", (24221000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPLCC---****X", (24222000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPLCN---****X", (24223000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPLCR---****X", (24224000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAT----****X", (24330000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPATR---****X", (24311000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPATC---****X", (24312000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPATG---****X", (24313000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPATS---****X", (24314000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPATB---****X", (24315000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACSI--****X", (24321100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACSR--****X", (24321200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACSC--****X", (24321300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACAI--****X", (24322100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACAR--****X", (24322200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACAC--****X", (24322300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACFI--****X", (24323100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACFR--****X", (24323200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACFC--****X", (24323300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACNI--****X", (24324100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACNR--****X", (24324200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACNC--****X", (24324300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACRI--****X", (24325100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACRR--****X", (24325200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACRC--****X", (24325300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACPR--****X", (24326101));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACPC--****X", (24326200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZII--****X", (24331100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZIR--****X", (24331200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZIC--****X", (24331300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZXI--****X", (24332100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZXR--****X", (24332200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZXC--****X", (24332300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZSI--****X", (24333100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZSR--****X", (24333200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZSC--****X", (24333300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZCI--****X", (24334100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZCR--****X", (24334200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZCC--****X", (24334300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZDI--****X", (24335100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZDR--****X", (24335200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZDC--****X", (24335300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZFI--****X", (24336100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZFR--****X", (24336200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZFC--****X", (24336300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZZI--****X", (24337100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZZR--****X", (24337200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZZC--****X", (24337300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZBI--****X", (24338100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZBR--****X", (24338200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZBC--****X", (24338300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZVI--****X", (24339100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAKBI--****X", (24351000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAKBR--****X", (24352000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAKBC--****X", (24353000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAKPI--****X", (24361000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAKPR--****X", (24362000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAKPC--****X", (24363000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZVR--****X", (24339200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAZVC--****X", (24339300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAXC---****X", (243111000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPAXS---****X", (243112000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPLCM---****X", (25211000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPLCH---****X", (25212000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPLRM---****X", (25221000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPLRA---****X", (25222000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPLRO---****X", (25223000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPLRT---****X", (25224000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPLRW---****X", (25225000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPAD----****X", (25310000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPAE----****X", (25320000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPAR----****X", (25330000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPAH----****X", (25340000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPASB---****X", (25351000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPASD---****X", (25352000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*SPASR---****X", (25353000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*OPHN----****X", (26220000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*OPB-----****X", (26400000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*OPBE----****X", (26410000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*OPBA----****X", (26420000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*OPBT----****X", (26430000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*OPBO----****X", (26440000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("GENERIC---****X", (22131001));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPLCM---****X", (24225000));
            if (rev === 1) {
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPUS----****X", (212210001));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPUC----****X", (212230001));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPUG----****X", (212220001));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*TPZ-----****X", (212300001));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACEI--****X", (24333100));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACEC--****X", (24333300));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACER--****X", (24333200));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACDI--****X", (24335100));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACDC--****X", (24335300));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACDR--****X", (24335200));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACZI--****X", (24337100));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACZC--****X", (24337300));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACZR--****X", (24337200));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACBI--****X", (24338100));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACBC--****X", (24338300));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACBR--****X", (24338200));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACVI--****X", (24339100));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACVC--****X", (24339300));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACVR--****X", (24339200));
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.put("G*FPACT---****X", (24226000));
            }
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs = new java.util.HashMap();
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFC----L---", (31131000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFCU---L---", (31131100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFC-FG-L---", (31131200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFC-FY-L---", (31131300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFW----L---", (31132000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFWU---L---", (31132100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFW-FG-L---", (31132200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFW-FY-L---", (31132300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFO----L---", (31133000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFOU---L---", (31133100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFO-FY-L---", (31133200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFS----L---", (31134000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFSU---L---", (31134100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFS-FG-L---", (31134200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPFS-FY-L---", (31134300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPXT----L---", (31141000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPXR----L---", (31142000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPXSQ---L---", (31143000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPXIL---L---", (31144000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPXSH---L---", (31145000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPXITCZ-L---", (31146000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPXCV---L---", (31147000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DPXITD--L---", (31148000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DWJ-----L---", (31430000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DWS-----L---", (31440000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBAIF----A--", (31710000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBAMV----A--", (31720000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBATB----A--", (31730000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBAI-----A--", (31740000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBALPNC--A--", (31750000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBALPC---A--", (31751000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBAFP----A--", (31760000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBAT-----A--", (31770000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBAFG----A--", (31780000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBAD-----A--", (31790000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DBAFF----A--", (317100000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DIPIB---L---", (31810000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DIPCO---L---", (31820000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DIPIS---L---", (31830000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DIPIT---L---", (31840000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DIPID---L---", (31850000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DIPTH---L---", (31860000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WA-DIPFF---L---", (31870000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHHDB---L---", (32259000));
            
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DIDID---L---", (32134000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DILOV---L---", (32151000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DILUC---L---", (32152000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DILOR---L---", (32153000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DILIEO--L---", (32154000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DILIEE--L---", (32155000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DILIER--L---", (32156000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DIOC----L---", (32161000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DIOCS---L---", (32162000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DIOL----L---", (32163000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DIOLF---L---", (32164000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHDDL---L---", (32212000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHDDC---L---", (32213000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHDDA----A--", (32214000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHCC----L---", (32221000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHCI-----A--", (32222000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHCB-----A--", (32223000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHCW-----A--", (32224000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHCF----L---", (32225100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHCF-----A--", (32225200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPBA---L---", (32231400));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPBA----A--", (32231500));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPBP---L---", (32231700));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WOS-HPFF----A--", (32232400));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPMD----A--", (32233100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPMO---L---", (32233400));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPMO----A--", (32233500));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPMRA--L---", (32233600));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPMRB--L---", (32233700));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPSPA--L---", (32234100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPSPB--L---", (32234200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHPSPS--L---", (32234300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHABP----A--", (32244200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHALLA--L---", (32246000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHHD-----A--", (32253000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHHDF----A--", (32254200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHHDK----A--", (32255200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WOS-HHDR---L---", (322510000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DHHDD----A--", (322512000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DTCCCFE-L---", (32272000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DTCCCFF-L---", (32273000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DOBVA----A--", (32311000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DOBVB----A--", (32312000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DOBVC----A--", (32313000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DOBVD----A--", (32314000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DOBVE----A--", (32315000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DOBVF----A--", (32316000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DOBVG----A--", (32317000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DOBVH----A--", (32318000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DOBVI----A--", (32319000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DBSF-----A--", (32321000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DBSG-----A--", (32322000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DBSM-----A--", (32323000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DBST-----A--", (32324000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSR----A--", (32411100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSC----A--", (32411200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSSVS--A--", (32411300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSSC---A--", (32411400));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSSM---A--", (32411500));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSSF---A--", (32411600));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSSVF--A--", (32411700));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSIVF--A--", (32411800));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSIF---A--", (32411900));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSIM---A--", (324111000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSIC---A--", (324111100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMSB----A--", (324111200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMS-CO--A--", (324111300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMS-PH--A--", (324111400));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMS-SH--A--", (324111500));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGML-----A--", (324111600));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMN-----A--", (324111700));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMRS----A--", (32412100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMRM----A--", (32412200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMRR----A--", (32412300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMCL----A--", (32413100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMCM----A--", (32413200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMCH----A--", (32413300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMIBA---A--", (32414100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMIBB---A--", (32414200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMIBC---A--", (32414300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMIBD---A--", (32414400));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMIBE---A--", (32414500));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBCA---A--", (32415100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBCB---A--", (32415200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBCC---A--", (32415300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBTA---A--", (32416100));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBTB---A--", (32416200));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBTC---A--", (32416300));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBTD---A--", (32416400));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBTE---A--", (32416500));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBTF---A--", (32416600));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBTG---A--", (32416700));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBTH---A--", (32416800));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DGMBTI---A--", (32416900));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DL-ML---L---", (32510000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DL-MA----A--", (32520000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DL-RA---L---", (32530000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DL-SA----A--", (32540000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DL-TA----A--", (32550000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DL-O-----A--", (32560000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DMCA----L---", (32610000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DMCC-----A--", (32620000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DMCD----L---", (32630000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DMOA-----A--", (32670000));
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.put("WO-DMPA----L---", (32680000));
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "initializeLinetypes", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside initializeLinetypes", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    GetLinetypeFromString: function (str) {
        var result = -1;
        try {
            var strLine = str;
            var strMask = strLine.substring(0, 1) + "*" + strLine.substring(2, 3) + "P" + strLine.substring(4, 10) + "****X";
            if (str.equalsIgnoreCase("GENERIC---****X")) {
                strMask = str;
            }
            else if (str.equalsIgnoreCase("BS_LINE--------")) {
                strMask = str;
            } else if (str.equalsIgnoreCase("BS_AREA--------")) {
                strMask = str;
            } else if (str.equalsIgnoreCase("BS_CROSS-------")) {
                strMask = str;
            }
            else if (str.equalsIgnoreCase("BS_ELLIPSE-----")) {
                strMask = str;
            }
            else if (str.equalsIgnoreCase("PBS_ELLIPSE----")) {
                strMask = str;
            }
            else if (str.equalsIgnoreCase("PBS_CIRCLE-----")) {
                strMask = str;
            }
            else if (str.equalsIgnoreCase("BS_RECTANGLE---")) {
                strMask = str;
            } 
            else if (str.equalsIgnoreCase("PBS_RECTANGLE--")) 
            {
                strMask = str;
            } 
            else if (str.equalsIgnoreCase("PBS_SQUARE-----")) 
            {
                strMask = str;
            } 
            else if (str.equalsIgnoreCase("BBS_LINE-------")) {
                strMask = str;
            } else if (str.equalsIgnoreCase("BBS_AREA-------")) {
                strMask = str;
            } else if (str.equalsIgnoreCase("BBS_POINT------")) {
                strMask = str;
            }
            else if (str.equalsIgnoreCase("BBS_RECTANGLE--")) {
                strMask = str;
            }
            else if (str.equalsIgnoreCase("BS_BBOX--------")) {
                strMask = str;
            }
            var objResult = null;
            if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes !== null && armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs !== null) {
                objResult = armyc2.c2sd.JavaTacticalRenderer.clsUtility.linetypes.get(strMask);
                if (objResult !== null && objResult !== undefined) {
                    return objResult;
                }
                objResult = armyc2.c2sd.JavaTacticalRenderer.clsUtility.metocs.get(strLine);
                if (objResult !== null && objResult !== undefined) {
                    return objResult;
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "CGetLinetypeFromString2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CGetLinetypeFromString2", exc));
            } else {
                throw exc;
            }
        }
        return result;
    },
    setRevC: function (tg) {
        try {
            var rev = tg.getSymbologyStandard();
            if (rev === 0) {
                switch (tg.get_LineType()) {
                    case 22222000:
                        tg.set_LineType(22222001);
                        return;
                    case 22224000:
                        tg.set_LineType(22224001);
                        return;
                    default:
                        return;
                }
            }
            if (rev === 1) {
                switch (tg.get_LineType()) {
                    case 212210000:
                        if (tg.Pixels.size() === 4)
                            tg.set_LineType(212210001);
                        break;
                    case 212220000:
                        if (tg.Pixels.size() === 4)
                            tg.set_LineType(212220001);
                        break;
                    case 212230000:
                        if (tg.Pixels.size() === 4)
                            tg.set_LineType(212230001);
                        break;
                    case 212300000:
                        if (tg.Pixels.size() === 4)
                            tg.set_LineType(212300001);
                        break;
                    case 24326100:
                        tg.set_LineType(24326101);
                        break;
                    default:
                        break;
                }
            }
            switch (tg.get_LineType()) {
                case 212210001:
                    if (tg.Pixels.size() < 4)
                        tg.set_LineType(212210000);
                    break;
                case 212220001:
                    if (tg.Pixels.size() < 4)
                        tg.set_LineType(212220000);
                    break;
                case 212230001:
                    if (tg.Pixels.size() < 4)
                        tg.set_LineType(212230000);
                    break;
                case 212300001:
                    if (tg.Pixels.size() < 4)
                        tg.set_LineType(212300000);
                    break;
                default:
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "setRevC", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside setRevC", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    isAutoshape: function (tg) {
        try {
            var linetype = tg.get_LineType();
            switch (linetype) {
                case 15000003:
                case 15000002:
                case 13000000:
                case 13000001:
                case 13000002:
                case 14000000:
                case 12000000:
                case 212600000:
                case 212500000:
                case 21100000:
                case 21200000:
                case 21300000:
                case 21400000:
                case 21500000:
                case 21600000:
                case 21800000:
                case 211000000:
                case 211100000:
                case 211200000:
                case 211210000:
                case 211400000:
                case 211600000:
                case 211700000:
                case 211800000:
                case 211900000:
                case 212000000:
                case 212100000:
                case 212210000:
                case 212230000:
                case 212220000:
                case 212210001:
                case 212230001:
                case 212220001:
                case 212300000:
                case 212300001:
                case 212400000:
                case 212410000:
                case 22139000:
                case 22221000:
                case 22222000:
                case 22223000:
                case 22225000:
                case 22224000:
                case 22310000:
                case 22422000:
                case 22524000:
                case 22533000:
                case 22534000:
                case 22611000:
                case 23157000:
                case 23163000:
                case 23171000:
                case 23172000:
                case 23174000:
                case 23173000:
                case 23191000:
                case 23194000:
                case 23192000:
                case 23193000:
                case 231100000:
                case 23211000:
                case 23212000:
                case 23213000:
                case 23221000:
                case 23222000:
                case 23223000:
                case 23224000:
                case 23225000:
                case 23226000:
                case 23227000:
                case 23340000:
                case 23410000:
                case 25211000:
                case 25212000:
                case 24250000:
                case 24211000:
                case 24260000:
                case 26400000:
                case 26420000:
                case 26410000:
                case 26440000:
                case 26430000:
                    return true;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "isAutoshape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside isAutoshape", exc));
            } else {
                throw exc;
            }
        }
        return false;
    },
    getMSRSegmentColors: function (tg) {
        var hMap = null;
        try {
            var linetype = tg.get_LineType();
            switch (linetype) {
                case 25221000:
                case 25222000:
                case 22121000:
                    if (tg.get_H() === null || tg.get_H().isEmpty())
                        return null;
                    hMap = new java.util.HashMap();
                    break;
                default:
                    return null;
            }
            var colorStrs = tg.get_H().split(",");
            var j = 0;
            var numSegs = colorStrs.length;
            var segPlusColor = "";
            var seg = null;
            var color = null;
            var index = -1;
            for (j = 0; j < numSegs; j++) {
                segPlusColor = colorStrs[j];
                if (!segPlusColor.contains(":"))
                    continue;
                seg = segPlusColor.split(":");
                color = armyc2.c2sd.renderer.utilities.SymbolUtilities.getColorFromHexString(seg[1]);
                index = Integer.parseInt(seg[0]);
                hMap.put(new Integer(index), color);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "getMSRSegmentColors", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getMSRSegmentColors", exc));
            } else {
                throw exc;
            }
        }
        return hMap;
    },
    getMSRSegmentColorStrings: function (tg) {
        var hMap = null;
        try {
            var linetype = tg.get_LineType();
            switch (linetype) {
                case 25221000:
                case 25222000:
                case 22121000:
                    if (tg.get_H() === null || tg.get_H().isEmpty())
                        return null;
                    hMap = new java.util.HashMap();
                    break;
                default:
                    return null;
            }
            var colorStrs = tg.get_H().split(",");
            var j = 0;
            var numSegs = colorStrs.length;
            var segPlusColor = "";
            var seg = null;
            var color = null;
            var index = -1;
            for (j = 0; j < numSegs; j++) {
                segPlusColor = colorStrs[j];
                if (!segPlusColor.contains(":"))
                    continue;
                seg = segPlusColor.split(":");
                //color = armyc2.c2sd.renderer.utilities.SymbolUtilities.getColorFromHexString(seg[1]);
                index = Integer.parseInt(seg[0]);
                //hMap.put(new Integer(index), color);
                hMap.put(new Integer(index), seg[1]);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "getMSRSegmentColors", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getMSRSegmentColors", exc));
            } else {
                throw exc;
            }
        }
        return hMap;
    },
    reviseHModifier: function (originalPixels, tg) {
        try {
            if (tg.get_H() === null || tg.get_H().isEmpty())
                return;
            var linetype = tg.get_LineType();
            switch (linetype) {
                case 25222000:
                case 25221000:
                case 22121000:
                    break;
                default:
                    return;
            }
            var j = 0;
            var k = 0;
            var n = -1;
            var foundPt = false;
            for (j = 0; j < originalPixels.size(); j++) {
                for (k = 0; k < tg.Pixels.size(); k++) {
                    if (originalPixels.get(j).x === tg.Pixels.get(k).x && originalPixels.get(j).y === tg.Pixels.get(k).y) {
                        n = j;
                        foundPt = true;
                        break;
                    }
                }
                if (foundPt)
                    break;
            }
            var hmap = armyc2.c2sd.JavaTacticalRenderer.clsUtility.getMSRSegmentColors(tg);
            var hmap2 = new java.util.HashMap();
            var segPt0 = null;
            var segPt1 = null;
            var pt0 = null;
            var pt1 = null;
            var color = null;
            if (n < 1)
                n = 1;
            for (var key, $key = hmap.keySet().iterator(); $key.hasNext() && ((key = $key.next()) || true); ) {
                if ((key).intValue() < n - 1)
                    continue;
                if ((key).intValue() + 1 > originalPixels.size() - 1)
                    break;
                color = hmap.get(key);
                segPt0 = originalPixels.get((key).intValue());
                segPt1 = originalPixels.get((key).intValue() + 1);
                for (j = 0; j < tg.Pixels.size() - 1; j++) {
                    pt0 = tg.Pixels.get(j);
                    pt1 = tg.Pixels.get(j + 1);
                    if (segPt0.x === pt0.x && segPt0.y === pt0.y) {
                        hmap2.put(new Integer(j), color);
                        break;
                    } else if (segPt1.x === pt1.x && segPt1.y === pt1.y) {
                        hmap2.put(new Integer(j), color);
                        break;
                    } else {
                        if (pt0.x === segPt1.x && pt0.y === segPt1.y)
                            continue;
                        if (pt1.x === segPt0.x && pt1.y === segPt0.y)
                            continue;
                        else {
                            var dist0 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceToLineDouble(segPt0, segPt1, pt0);
                            var dist1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceToLineDouble(segPt0, segPt1, pt1);
                            var lineOrigPts = new armyc2.c2sd.graphics2d.Line2D(segPt0.x, segPt0.y, segPt1.x, segPt1.y);
                            var rectOrigPts = lineOrigPts.getBounds2D();
                            var lineClipPts = new armyc2.c2sd.graphics2d.Line2D(pt0.x, pt0.y, pt1.x, pt1.y);
                            var rectClipPts = lineClipPts.getBounds2D();
                            if (dist0 < 1 && dist1 < 1 && rectOrigPts.containsRect(rectClipPts)) {
                                hmap2.put(new Integer(j), color);
                            }
                        }
                    }
                }
            }
            if (hmap2.isEmpty()) {
                tg.set_H(null);
                return;
            }
            var h = "";
            var temp = "";
            for (var key, $key = hmap2.keySet().iterator(); $key.hasNext() && ((key = $key.next()) || true); ) {
                color = hmap2.get(key);
                temp = Integer.toHexString(color.toARGB());
                h += key.toString() + ":" + temp + ",";
            }
            h = h.substring(0, h.length - 1);
            tg.set_H(h);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "reviseHModifer", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside reviseHModifier", exc));
            } else {
                throw exc;
            }
        }
    },
    InterpolatePixels: function (tg) {
        try {
            if (tg.get_UseLineInterpolation() === false)
                return;
            var linetype = tg.get_LineType();
            var glyphSize = 10;
            switch (linetype) {
                case 23131100:
                case 23131200:
                    glyphSize = 25;
                    break;
                case 23132000:
                    glyphSize = 50;
                    break;
                case 22350000:
                    glyphSize = 20;
                    break;
                case 22122000:
                case 22123000:
                case 22134000:
                case 23330000:
                case 22624000:
                case 23111000:
                case 23113000:
                case 23114000:
                case 23115000:
                case 231114000:
                case 231115000:
                case 231116000:
                case 231117100:
                case 231117200:
                case 231117300:
                case 23350000:
                case 15000000:
                    glyphSize = 30;
                    break;
                case 231111000:
                case 23112000:
                case 23134000:
                case 231112000:
                    glyphSize = 40;
                    break;
                case 231113000:
                    glyphSize = 50;
                    break;
                default:
                    return;
            }
            var hmapPixels = new java.util.HashMap();
            var hmapGeo = new java.util.HashMap();
            var j = 0;
            var currentIndex = 0;
            var dist = 0;
            var dist2 = 0;
            var direction1 = 0;
            var direction2 = 0;
            var delta = 0;
            var pt0 = null;
            var pt1 = null;
            var pt2 = null;
            for (j = 0; j < tg.Pixels.size(); j++) {
                if (j === 0) {
                    hmapPixels.put(new Integer(j), tg.Pixels.get(j));
                    hmapGeo.put(new Integer(j), tg.LatLongs.get(j));
                    currentIndex = 0;
                } else if (j === tg.Pixels.size() - 1) {
                    hmapPixels.put(new Integer(j), tg.Pixels.get(j));
                    hmapGeo.put(new Integer(j), tg.LatLongs.get(j));
                } else {
                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(tg.Pixels.get(currentIndex), tg.Pixels.get(j));
                    dist2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(tg.Pixels.get(j), tg.Pixels.get(j + 1));
                    pt0 = tg.Pixels.get(currentIndex);
                    pt1 = tg.Pixels.get(j);
                    pt2 = tg.Pixels.get(j + 1);
                    direction1 = (57.29577951308232) * Math.atan((pt0.y - pt1.y) / (pt0.x - pt1.x));
                    direction2 = (57.29577951308232) * Math.atan((pt1.y - pt2.y) / (pt1.x - pt2.x));
                    delta = Math.abs(direction1 - direction2);
                    if (dist > glyphSize || dist2 > glyphSize || delta > 20) {
                        hmapPixels.put(new Integer(j), tg.Pixels.get(j));
                        hmapGeo.put(new Integer(j), tg.LatLongs.get(j));
                        currentIndex = j;
                    }
                }
            }
            var pixels = new java.util.ArrayList();
            var geo = new java.util.ArrayList();
            for (j = 0; j < tg.Pixels.size(); j++) {
                if (hmapPixels.containsKey(new Integer(j)))
                    pixels.add(hmapPixels.get(new Integer(j)));
                if (hmapGeo.containsKey(new Integer(j)))
                    geo.add(hmapGeo.get(new Integer(j)));
            }
            switch (linetype) {
                case 22350000:
                case 22134000:
                case 22624000:
                case 23111000:
                case 23113000:
                case 23114000:
                case 23115000:
                case 23350000:
                    if (pixels.size() === 2) {
                        for (j = 0; j < tg.Pixels.size(); j++) {
                            if (hmapPixels.containsKey(new Integer(j)) === false && hmapGeo.containsKey(new Integer(j)) === false) {
                                pixels.add(j, tg.Pixels.get(j));
                                geo.add(j, tg.LatLongs.get(j));
                                break;
                            }
                        }
                    }
                    break;
                default:
                    break;
            }
            tg.Pixels = pixels;
            tg.LatLongs = geo;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsUtility._className, "InterpolatePixels", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside InterpolatePixels", exc));
            } else {
                throw exc;
            }
        }
    },
    linetypes: null,
    metocs: null,
    _className: "clsUtility"
};