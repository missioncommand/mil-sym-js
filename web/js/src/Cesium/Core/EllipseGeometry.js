/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//'use strict';
var EllipseGeometry = EllipseGeometry || {};
var Matrix3 = Matrix3 || {};
//var Quaternnion = Quaternion || {};
//var VertexFormat = VertexFormat || {};

function EllipseGeometry(options) {
    options = defaultValue(options, defaultValue.EMPTY_OBJECT);

    var center = options.center;
    //var ellipsoid = defaultValue(options.ellipsoid, vincenty.Ellipsoid.WGS84);
    var ellipsoid = vincenty.Ellipsoid.WGS84;
    var semiMajorAxis = options.semiMajorAxis;
    var semiMinorAxis = options.semiMinorAxis;
    var granularity = defaultValue(options.granularity, CesiumMath.RADIANS_PER_DEGREE);
    granularity /= 2;
    var height = defaultValue(options.height, 0.0);
    var extrudedHeight = options.extrudedHeight;
    var extrude = (defined(extrudedHeight) && Math.abs(height - extrudedHeight) > 1.0);
    var vertexFormat = defaultValue(options.vertexFormat, VertexFormat.DEFAULT);

    //>>includeStart('debug', pragmas.debug);
    if (!defined(center)) {
        throw new DeveloperError('center is required.');
    }
    if (!defined(semiMajorAxis)) {
        throw new DeveloperError('semiMajorAxis is required.');
    }
    if (!defined(semiMinorAxis)) {
        throw new DeveloperError('semiMinorAxis is required.');
    }
    if (semiMajorAxis < semiMinorAxis) {
        throw new DeveloperError('semiMajorAxis must be greater than or equal to the semiMinorAxis.');
    }
    if (granularity <= 0.0) {
        throw new DeveloperError('granularity must be greater than zero.');
    }
    //>>includeEnd('debug');

    this._center = Cartesian3.clone(center);
    this._semiMajorAxis = semiMajorAxis;
    this._semiMinorAxis = semiMinorAxis;
    //this._ellipsoid = vincenty.Ellipsoid.clone(ellipsoid);
    this._ellipsoid = ellipsoid;
    this._rotation = defaultValue(options.rotation, 0.0);
    this._stRotation = defaultValue(options.stRotation, 0.0);
    this._height = height;
    this._granularity = granularity;
    this._vertexFormat = VertexFormat.clone(vertexFormat);
    this._extrudedHeight = defaultValue(extrudedHeight, height);
    this._extrude = extrude;
    this._workerName = 'createEllipseGeometry';

    //this._rectangle = computeRectangle(this._center, this._ellipsoid, semiMajorAxis, semiMinorAxis, this._rotation);
}
/**
 * Computes the geometric representation of a ellipse on an ellipsoid, including its vertices, indices, and a bounding sphere.
 *
 * @param {EllipseGeometry} ellipseGeometry A description of the ellipse.
 * @returns {Geometry|undefined} The computed vertices and indices.
 */
EllipseGeometry.createGeometry = function (ellipseGeometry) {
    if ((ellipseGeometry._semiMajorAxis <= 0.0) || (ellipseGeometry._semiMinorAxis <= 0.0)) {
        return;
    }

    ellipseGeometry._center = ellipseGeometry._ellipsoid.scaleToGeodeticSurface(ellipseGeometry._center, ellipseGeometry._center);
    var options = {
        center: ellipseGeometry._center,
        semiMajorAxis: ellipseGeometry._semiMajorAxis,
        semiMinorAxis: ellipseGeometry._semiMinorAxis,
        ellipsoid: ellipseGeometry._ellipsoid,
        rotation: ellipseGeometry._rotation,
        height: ellipseGeometry._height,
        extrudedHeight: ellipseGeometry._extrudedHeight,
        granularity: ellipseGeometry._granularity,
        vertexFormat: ellipseGeometry._vertexFormat,
        stRotation: ellipseGeometry._stRotation
    };
    var geometry;
    if (ellipseGeometry._extrude) {
        options.extrudedHeight = Math.min(ellipseGeometry._extrudedHeight, ellipseGeometry._height);
        options.height = Math.max(ellipseGeometry._extrudedHeight, ellipseGeometry._height);
        geometry = computeExtrudedEllipse(options);
    } else {
        geometry = EllipseGeometry.computeEllipse(options);
    }

//    return new Geometry({
//        attributes: geometry.attributes,
//        indices: geometry.indices,
//        primitiveType: PrimitiveType.TRIANGLES,
//        boundingSphere: geometry.boundingSphere
//    });
    return geometry;
};

var boundingSphereCenter = new Cartesian3();

EllipseGeometry.computeEllipse = function (options) {
    var center = options.center;
    //boundingSphereCenter = Cartesian3.multiplyByScalar(options.ellipsoid.geodeticSurfaceNormal(center, boundingSphereCenter), options.height, boundingSphereCenter);
    //boundingSphereCenter = Cartesian3.add(center, boundingSphereCenter, boundingSphereCenter);
    //var boundingSphere = new BoundingSphere(boundingSphereCenter, options.semiMajorAxis);
    var boundingSphere = null;
    //var cep = EllipseGeometryLibrary.computeEllipsePositions(options, true, false);
    var cep = EllipseGeometryLibrary.computeEllipsePositions(options, false, true);
    var positions = cep.positions;
    var outerPositions= cep.outerPositions;
//    var numPts = cep.numPts;
//    var attributes = computeTopBottomAttributes(positions, options, false);
//    var attributes = null;
//    var indices = EllipseGeometry.topIndices(numPts);
//    indices = IndexDatatype.createTypedArray(positions.length / 3, indices);
//    return {
//        boundingSphere: boundingSphere,
//        attributes: attributes,
//        indices: indices
//    };
    return outerPositions;
    //return positions;
};

EllipseGeometry.topIndices = function (numPts) {
    // numTriangles in half = 3 + 8 + 12 + ... = -1 + 4 + (4 + 4) + (4 + 4 + 4) + ... = -1 + 4 * (1 + 2 + 3 + ...)
    //              = -1 + 4 * ((n * ( n + 1)) / 2)
    // total triangles = 2 * numTrangles in half
    // indices = total triangles * 3;
    // Substitute numPts for n above

    var indices = new Array(12 * (numPts * (numPts + 1)) - 6);
    var indicesIndex = 0;
    var prevIndex;
    var numInterior;
    var positionIndex;
    var i;
    var j;
    // Indices triangles to the 'right' of the north vector

    prevIndex = 0;
    positionIndex = 1;
    for (i = 0; i < 3; i++) {
        indices[indicesIndex++] = positionIndex++;
        indices[indicesIndex++] = prevIndex;
        indices[indicesIndex++] = positionIndex;
    }

    for (i = 2; i < numPts + 1; ++i) {
        positionIndex = i * (i + 1) - 1;
        prevIndex = (i - 1) * i - 1;

        indices[indicesIndex++] = positionIndex++;
        indices[indicesIndex++] = prevIndex;
        indices[indicesIndex++] = positionIndex;

        numInterior = 2 * i;
        for (j = 0; j < numInterior - 1; ++j) {

            indices[indicesIndex++] = positionIndex;
            indices[indicesIndex++] = prevIndex++;
            indices[indicesIndex++] = prevIndex;

            indices[indicesIndex++] = positionIndex++;
            indices[indicesIndex++] = prevIndex;
            indices[indicesIndex++] = positionIndex;
        }

        indices[indicesIndex++] = positionIndex++;
        indices[indicesIndex++] = prevIndex;
        indices[indicesIndex++] = positionIndex;
    }

    // Indices for center column of triangles
    numInterior = numPts * 2;
    ++positionIndex;
    ++prevIndex;
    for (i = 0; i < numInterior - 1; ++i) {
        indices[indicesIndex++] = positionIndex;
        indices[indicesIndex++] = prevIndex++;
        indices[indicesIndex++] = prevIndex;

        indices[indicesIndex++] = positionIndex++;
        indices[indicesIndex++] = prevIndex;
        indices[indicesIndex++] = positionIndex;
    }

    indices[indicesIndex++] = positionIndex;
    indices[indicesIndex++] = prevIndex++;
    indices[indicesIndex++] = prevIndex;

    indices[indicesIndex++] = positionIndex++;
    indices[indicesIndex++] = prevIndex++;
    indices[indicesIndex++] = prevIndex;

    // Reverse the process creating indices to the 'left' of the north vector
    ++prevIndex;
    for (i = numPts - 1; i > 1; --i) {
        indices[indicesIndex++] = prevIndex++;
        indices[indicesIndex++] = prevIndex;
        indices[indicesIndex++] = positionIndex;

        numInterior = 2 * i;
        for (j = 0; j < numInterior - 1; ++j) {
            indices[indicesIndex++] = positionIndex;
            indices[indicesIndex++] = prevIndex++;
            indices[indicesIndex++] = prevIndex;

            indices[indicesIndex++] = positionIndex++;
            indices[indicesIndex++] = prevIndex;
            indices[indicesIndex++] = positionIndex;
        }

        indices[indicesIndex++] = prevIndex++;
        indices[indicesIndex++] = prevIndex++;
        indices[indicesIndex++] = positionIndex++;
    }

    for (i = 0; i < 3; i++) {
        indices[indicesIndex++] = prevIndex++;
        indices[indicesIndex++] = prevIndex;
        indices[indicesIndex++] = positionIndex;
    }
    return indices;
};

