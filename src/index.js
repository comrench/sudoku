import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Square extends React.Component {
    render() {
        return (
            <Col>
                <Button>0</Button>
            </Col>
        );
    }
}

class Block extends React.Component {
    renderSquare(i) {
        return <Square />;
    }
    render() {
        return (
            <div>
                <Col>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </Col>
                <Col>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </Col>
                <Col>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </Col>
            </div>
        );
    }
}

class Board extends React.Component {
    renderBlock(i) {
        return <Block />;
    }
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={4}>
                        {this.renderBlock(0)}
                        {this.renderBlock(1)}
                        {this.renderBlock(2)}
                    </Col>
                    {/* </Row> */}
                    {/* <Row> */}
                    <Col sm={4}>
                        {this.renderBlock(3)}
                        {this.renderBlock(4)}
                        {this.renderBlock(5)}
                    </Col>
                    {/* </Row> */}
                    {/* <Row> */}
                    <Col sm={4}>
                        {this.renderBlock(6)}
                        {this.renderBlock(7)}
                        {this.renderBlock(8)}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

class Game extends React.Component {

    render() {
        const grid = input[0];
        // console.log(grid);
        return (
            <Board
                grid={grid}
            />
        );
    }
}

const input = [
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ]
]

ReactDOM.render(<Game />, document.getElementById('root'));