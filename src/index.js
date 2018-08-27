import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Button, ButtonToolbar, Popover, Overlay } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

class PopButton extends React.Component {
    constructor(props){
        super(props);
        this.gridButtonValueChange=this.gridButtonValueChange.bind(this);
        this.exitPopover=this.exitPopover.bind(this);
    }

    gridButtonValueChange(event){
        // console.log("pop value "+event.target.innerHTML);
        this.props.onGridButtonValueChange(event.target.innerHTML);
        this.exitPopover();
    }

    exitPopover(){
        this.props.onExitPopover();
    }

    render() {
        return (
            <Button bsSize="xsmall" bsStyle="primary" block onClick={this.gridButtonValueChange}>{this.props.popValue}</Button>
        );
    }
}

class PopoverGrid extends React.Component {
    constructor(props){
        super(props);
        this.gridButtonValueChange=this.gridButtonValueChange.bind(this);
        this.exitPopover=this.exitPopover.bind(this);
    }

    renderPopButton(i) {
        return <PopButton 
                    popValue={i} 
                    onGridButtonValueChange={this.gridButtonValueChange}
                    onExitPopover={this.exitPopover}
                />;
    }

    gridButtonValueChange(gridButtonValue){
        // console.log("Value from popover grid: "+gridButtonValue);
        this.props.onGridButtonValueChange(gridButtonValue);
    }

    exitPopover(){
        this.props.onExitPopover();
    }

    render() {
        // console.log("Value clicked: "+this.props.gridButtonValue);
        return (
            <Grid fluid style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                <Col sm={12} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>{this.renderPopButton(1)}</Col>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>{this.renderPopButton(2)}</Col>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>{this.renderPopButton(3)}</Col>
                </Col>
                <Col sm={12} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>{this.renderPopButton(4)}</Col>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>{this.renderPopButton(5)}</Col>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>{this.renderPopButton(6)}</Col>
                </Col>
                <Col sm={12} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>{this.renderPopButton(7)}</Col>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>{this.renderPopButton(8)}</Col>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>{this.renderPopButton(9)}</Col>
                </Col>
            </Grid>
        );
    }
}

class Square extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            gridButtonValue: this.props.value
        };

        this.handleClick = this.handleClick.bind(this);
        this.gridButtonValueChange = this.gridButtonValueChange.bind(this);
        this.exitPopover=this.exitPopover.bind(this);
    }

    handleClick(e){
        // console.log("In handle onclick");
        this.setState({ target: e.target, show: !this.state.show });
    };

    exitPopover(){
        this.setState ({
            show: false
        });
    }

    gridButtonValueChange(gridButtonValue){
        // console.log("Value from Square: "+gridButtonValue);
        this.setState({
            gridButtonValue: gridButtonValue
        });
        // console.log("After update in Button: "+this.state.gridButtonValue);
    }

    render() {

        const value = this.state.gridButtonValue ? this.state.gridButtonValue : " ";
        // console.log("present value: "+value);
        return (
            
            <Col sm={12} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0, marginBottom: 1, paddingBottom: 1 }}>
                <ButtonToolbar>
                    <Button
                        className="customButton"
                        bsStyle="info"
                        bsSize="large"
                        block
                        onClick={this.handleClick}
                    >
                         {value}
                    </Button>
                    <Overlay
                        show={this.state.show}
                        target={this.state.target}
                        onHide={() => this.setState({ show: false })}
                        placement="bottom"
                        rootClose={true}
                    >
                        <Popover id="popover-contained">
                            <PopoverGrid 
                                gridButtonValue={this.state.gridButtonValue} 
                                onGridButtonValueChange={this.gridButtonValueChange}
                                onExitPopover={this.exitPopover}
                            />
                        </Popover>
                    </Overlay>
                </ButtonToolbar>
            </Col>
        );
    }
}

class Block extends React.Component {
    renderSquare(value) {
        return <Square value={value} />;
    }
    render() {
        return (
            <Col sm={12} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0, marginBottom: 0 }}>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(this.props.blockGrid[0])}
                    </Col>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(this.props.blockGrid[1])}
                    </Col>
                    <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 5 }}>
                        {this.renderSquare(this.props.blockGrid[2])}
                    </Col>
                </Col>
                <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(this.props.blockGrid[3])}
                    </Col>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(this.props.blockGrid[4])}
                    </Col>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 5 }}>
                        {this.renderSquare(this.props.blockGrid[5])}
                    </Col>
                </Col>
                <Col sm={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(this.props.blockGrid[6])}
                    </Col>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderSquare(this.props.blockGrid[7])}
                    </Col>
                    <Col xs={4} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 5 }}>
                        {this.renderSquare(this.props.blockGrid[8])}
                    </Col>
                </Col>
            </Col>
        );
    }
}

class Board extends React.Component {
    renderBlock(values) {
        return <Block
            blockGrid={values} />;
    }
    render() {
        // console.log(this.props.grid[0]);
        return (
            <Grid fluid>
                {/* <span className="border"> */}
                <Row style={{ marginLeft: 0, paddingLeft: 0, marginTop: 15, marginRight: 0, paddingRight: 0 }}>
                    <Col sm={5} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderBlock(this.props.grid[0])}
                        {this.renderBlock(this.props.grid[1])}
                        {this.renderBlock(this.props.grid[2])}
                    </Col>
                </Row>
                <Row style={{ marginLeft: 0, paddingLeft: 0, marginTop: 5, marginRight: 0, paddingRight: 0 }}>
                    <Col sm={5} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderBlock(this.props.grid[3])}
                        {this.renderBlock(this.props.grid[4])}
                        {this.renderBlock(this.props.grid[5])}
                    </Col>
                </Row>
                <Row style={{ marginLeft: 0, paddingLeft: 0, marginTop: 5, marginRight: 0, paddingRight: 0 }}>
                    <Col sm={5} style={{ marginLeft: 0, paddingLeft: 0, marginRight: 0, paddingRight: 0 }}>
                        {this.renderBlock(this.props.grid[6])}
                        {this.renderBlock(this.props.grid[7])}
                        {this.renderBlock(this.props.grid[8])}
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
        [1, 0, 0, 0, 0, 0, 2, 7, 6],
        [0, 0, 9, 1, 4, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 6, 0, 9, 1],
        [0, 8, 0, 0, 0, 9, 6, 1, 0],
        [7, 3, 0, 0, 8, 4, 0, 0, 0],
        [0, 0, 2, 0, 0, 5, 0, 8, 0],
        [5, 0, 6, 0, 0, 3, 0, 0, 0],
        [0, 0, 7, 0, 0, 0, 0, 5, 0],
        [3, 4, 0, 5, 9, 0, 0, 0, 0]
    ]
]

ReactDOM.render(<Game />, document.getElementById('root'));