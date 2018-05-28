// Local
import mapData from './mapData';

const generateNewMatrix = (nbRows, nbCols, monsterPosition) => {
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
    return updateMonsterPosition(matrix, monsterPosition).matrix;
};

const updateMonsterPosition = (matrix, monsterPosition, prevMonsterPosition) => {
    let { X, Y, direction, posture } = monsterPosition;
    const monsterNumber1 = mapData.monsterNumbers.monster;
    const monsterNumber2 = mapData.monsterNumbers.direction[direction];
    const monsterNumber3 = mapData.monsterNumbers.posture[posture];
    const monsterNumber = `${monsterNumber1}${monsterNumber2}${monsterNumber3}`;
    if (mapData.matrixNumbers[matrix[Y][X]].action !== "forbidden") {
        if (prevMonsterPosition) matrix[prevMonsterPosition.Y][prevMonsterPosition.X] = 0;
    } else {
        X = prevMonsterPosition.X;
        Y = prevMonsterPosition.Y;
    }
    matrix[Y][X] = parseInt(monsterNumber, 10);
    return {
        matrix,
        monsterPosition: { direction, posture, X, Y },
    };
};

export default { generateNewMatrix, updateMonsterPosition };