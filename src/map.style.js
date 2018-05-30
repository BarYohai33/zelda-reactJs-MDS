// Local
import mapData from './mapData';

const tileWidth = 35;
const tileHeight = 35;

const container = (nbRows, nbCols) => ({
    display: 'flex',
    flexDirection: 'column',
    height: `${nbRows*tileHeight}px`,
    width: `${nbCols*tileWidth}px`,
    border: '40px solid #2C2C2C',
    backgroundColor: '#F6F6F6',
    outline: 'none',
});

const row = nbCols => ({
    display: 'flex',
    flexDirection: 'row',
    width: `${nbCols*tileWidth}px`,
    height: `${tileHeight}px`,
});

const col = {
    display: 'block',
    width: `${tileWidth}px`,
    height: `${tileHeight}px`,
    backgroundImage: `url(${mapData.matrixNumbers[0].image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}
/**
   * updateZeldaPosition
   * @param {INT} colNumber
   * @return {object} datawidth,height,backgroundImage,backgroundPosition,backgroundSizematrix
 */
const img = colNumber => {
    const imageData = mapData.matrixNumbers[colNumber];
    return ({
        width: `${tileWidth}px`,
        height: `${tileHeight}px`,
        backgroundImage: `url(${imageData.image})`,
        backgroundPosition: imageData.split ? `${imageData.split.X} ${imageData.split.Y}` : '',
        backgroundSize: imageData.split ? '' : 'cover',
    });
};

export default { container, row, col, img };