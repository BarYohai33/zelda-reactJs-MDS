// React
import React, { Component } from 'react';

// Controlers
import MapControler from './map.controler';

// Styles
import Style from './map.style';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nbRows: 20,
            nbCols: 30,
            matrix: [],
            monsterPosition: {
                X: 0,
                Y: 0,
                direction: 'down',
                posture: 'stay',
            },
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    UNSAFE_componentWillMount() {
        const matrix = MapControler.generateNewMatrix(this.state.nbRows, this.state.nbCols, this.state.monsterPosition);
        this.setState({ matrix });
    }
    
    componentDidMount() {
        document.getElementById("map").focus();
    }

    handleKeyDown({ key }) {
        // Variables
        let direction = '';
        let posture = '';
        let X = this.state.monsterPosition.X;
        let Y = this.state.monsterPosition.Y;

        // Direction
        if (key === "ArrowUp") {
            direction = 'up';
            if (this.state.monsterPosition.Y !== 0) Y -= 1;
        } else if (key === "ArrowDown") {
            direction = 'down';
            if (this.state.monsterPosition.Y !== this.state.nbRows-1) Y += 1;
        } else if (key === "ArrowLeft") {
            direction = 'left';
            if (this.state.monsterPosition.X !== 0) X -= 1;
        } else if (key === "ArrowRight") {
            direction = 'right';
            if (this.state.monsterPosition.X !== this.state.nbCols-1) X += 1;
        } else {
            direction = this.state.monsterPosition.direction;
        }

        // Posture
        if (this.state.monsterPosition.direction === direction) {
            if (this.state.monsterPosition.posture === 'stay') posture = 'move1';
            if (this.state.monsterPosition.posture === 'move1') posture = 'move2';
            if (this.state.monsterPosition.posture === 'move2') posture = 'move1';
        } else {
            posture = 'stay';
        }

        // Monster position
        const monsterPosition = { X, Y, direction, posture };

        // Matrix
        const data = MapControler.updateMonsterPosition(this.state.matrix, monsterPosition, this.state.monsterPosition);

        // Set State
        this.setState({
            matrix: data.matrix,
            monsterPosition: data.monsterPosition,
        });
    }

    render() {
        return (
            <div tabIndex="0" id="map" onKeyDown={this.handleKeyDown} style={Style.container(this.state.nbRows, this.state.nbCols)}>
            {
                this.state.matrix.map((row, key) => (
                    <div key={key} style={Style.row(this.state.nbCols)}>
                    {
                        row.map((colNumber, key) => (
                            <div
                                key={key}
                                style={Style.col}
                            >
                            {
                                colNumber !== 0 &&
                                <div style={Style.img(colNumber)} />
                            }
                            </div>
                        ))
                    }
                    </div>
                ))
            }
            </div>
        );
    }
}

export default Map;