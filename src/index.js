import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <Col sm={12} style={{marginLeft: 2,paddingLeft:2, marginRight: 0, paddingRight: 0,marginBottom: 1, paddingBottom: 1}}>
                <Button bsStyle="info" bsSize="large" block>0</Button>
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
            <Row style={{marginLeft: 0,paddingLeft:0, marginRight: 0, paddingRight: 0}}>
                <Col sm={4} style={{marginLeft: 0,paddingLeft:0, marginRight: 0, paddingRight: 0}}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </Col>
                <Col sm={4} style={{marginLeft: 0,paddingLeft:0, marginRight: 0, paddingRight: 0}}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </Col>
                <Col sm={4} style={{marginLeft: 0,paddingLeft:0, marginRight: 0, paddingRight: 0}}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </Col>
            </Row>
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
                <Row style={{marginLeft: 5,paddingLeft:5, marginRight: 0, paddingRight: 0}}>
                    <Col style={{marginLeft: 0,paddingLeft:0, marginRight: 0, paddingRight: 0}}>
                        {this.renderBlock(0)}
                        {this.renderBlock(1)}
                        {this.renderBlock(2)}
                    </Col>
                    {/* </Row> */}
                    {/* <Row> */}
                    <Col style={{marginLeft: 0,paddingLeft:0, marginRight: 0, paddingRight: 0}}>
                        {this.renderBlock(3)}
                        {this.renderBlock(4)}
                        {this.renderBlock(5)}
                    </Col>
                    {/* </Row>
                    <Row> */}
                    <Col style={{marginLeft: 0,paddingLeft:0, marginRight: 0, paddingRight: 0}}>
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