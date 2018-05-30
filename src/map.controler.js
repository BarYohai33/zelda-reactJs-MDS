// Local
import mapData from './mapData';

const generateNewMatrix = (nbRows, nbCols, zeldaPosition) => {
    const matrix = [];
    const treeNumber = 200;
    const randY = Math.floor(Math.random() * Math.floor(nbRows-1));
    const randX = Math.floor(Math.random() * Math.floor(nbCols-1));
    for (let i = 0; i < nbRows; i += 1) {
        const row = [];
        for (let j = 0; j < nbCols; j += 1) {
            row.push(0);
        }
        matrix.push(row);
    }
    matrix[randY][randX] = treeNumber
    
    return updateZeldaPosition(matrix, zeldaPosition).matrix;
};


/**
   * updateZeldaPosition
   * @param {Object} matrix
   * @param {Object} zeldaPosition
   * @param {Object} prevZeldaPosition
   * @return {Object} matrix,zeldaPosition
 */
const updateZeldaPosition = (matrix, zeldaPosition, prevZeldaPosition) => {
    let { X, Y, direction, posture } = zeldaPosition;
    const zeldaNumber1 = mapData.zeldaNumbers.zelda;
    const zeldaNumber2 = mapData.zeldaNumbers.direction[direction];
    const zeldaNumber3 = mapData.zeldaNumbers.posture[posture];
    const zeldaNumber = `${zeldaNumber1}${zeldaNumber2}${zeldaNumber3}`;
    console.log(zeldaNumber);
    if (mapData.matrixNumbers[matrix[Y][X]].action !== "forbidden") {
        if (prevZeldaPosition) matrix[prevZeldaPosition.Y][prevZeldaPosition.X] = 0;
    } else {
        X = prevZeldaPosition.X;
        Y = prevZeldaPosition.Y;
    }
    matrix[Y][X] = parseInt(zeldaNumber, 10);
    console.log(matrix[Y][X]);
    return {
        matrix,
        zeldaPosition: { direction, posture, X, Y },
    };
};

export default { generateNewMatrix, updateZeldaPosition };