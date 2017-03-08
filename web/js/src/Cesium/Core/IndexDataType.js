/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var IndexDatatype = {};
IndexDatatype.createTypedArray = function (numberOfVertices, indicesLengthOrArray) {
    //>>includeStart('debug', pragmas.debug);
    if (!defined(numberOfVertices)) {
        throw new DeveloperError('numberOfVertices is required.');
    }
    //>>includeEnd('debug');

    if (numberOfVertices >= CesiumMath.SIXTY_FOUR_KILOBYTES) {
        return new Uint32Array(indicesLengthOrArray);
    }

    return new Uint16Array(indicesLengthOrArray);
};

