import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Grid, Row, Col, Button, ButtonToolbar, Popover, Overlay, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

class PopButton extends React.Component {
    render(){
        return (
            <Button bsStyle="info" bsSize="small" onClick={this.handleClick}>0</Button>
        );
    }
}

class PopoverGrid extends React.Component {
    renderPopButton(i){
        return <PopButton />;
    }
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col>{this.renderPopButton(1)}</Col>
                    <Col>{this.renderPopButton(1)}</Col>
                    <Col>{this.renderPopButton(1)}</Col>
                </Row>
                <Row>
                    <Col>{this.renderPopButton(1)}</Col>
                    <Col>{this.renderPopButton(1)}</Col>
                    <Col>{this.renderPopButton(1)}</Col>
                </Row>
                <Row>
                    <Col>{this.renderPopButton(1)}</Col>
                    <Col>{this.renderPopButton(1)}</Col>
                    <Col>{this.renderPopButton(1)}</Col>
                </Row>
            </Grid>
        );
    }
}

class Square extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = e => {
            console.log("In handle onclick");
            this.setState({ target: e.target, show: !this.state.show });
        };

        this.state = {
            show: false
        };
    }

    render() {
        return (
            <Col sm={12} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0, marginBottom: 1, paddingBottom: 1 }}>
                <ButtonToolbar>
                    <Button className="customButton" bsStyle="info" bsSize="large" block onClick={this.handleClick}>0</Button>
                    <Overlay
                        show={this.state.show}
                        target={this.state.target}
                        onHide={() => this.setState({ show: false })}
                        placement="bottom"
                        rootClose={true}
                    >
                        <Popover id="popover-contained">
                            <PopoverGrid />
                        </Popover>
                    </Overlay>
                </ButtonToolbar>
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
            <Col sm={12} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0, marginBottom: 0 }}>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(0)}
                    </Col>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(3)}
                    </Col>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 5 }}>
                        {this.renderSquare(6)}
                    </Col>
                </Col>
                <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(0)}
                    </Col>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(3)}
                    </Col>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 5 }}>
                        {this.renderSquare(6)}
                    </Col>
                </Col>
                <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(0)}
                    </Col>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(3)}
                    </Col>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 5 }}>
                        {this.renderSquare(6)}
                    </Col>
                </Col>
            </Col>
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
                {/* <span className="border"> */}
                <Row style={{ marginLeft: 0, paddingLeft: 0, marginTop: 5, marginRight: 0, paddingRight: 0 }}>
                    <Col sm={5} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderBlock(0)}
                        {this.renderBlock(1)}
                        {this.renderBlock(2)}
                    </Col>
                </Row>
                <Row style={{ marginLeft: 0, paddingLeft: 0, marginTop: 5, marginRight: 0, paddingRight: 0 }}>
                    <Col sm={5} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderBlock(0)}
                        {this.renderBlock(1)}
                        {this.renderBlock(2)}
                    </Col>
                </Row>
                <Row style={{ marginLeft: 0, paddingLeft: 0, marginTop: 5, marginRight: 0, paddingRight: 0 }}>
                    <Col sm={5} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderBlock(0)}
                        {this.renderBlock(1)}
                        {this.renderBlock(2)}
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