import React, { Component } from 'react';
import CalculatorInputButton from "./CalculatorInputButton";

class CalculatorInput extends Component {

    state = {
        isGameStarted: false
    };

    render() {
        return (
            <div className="grid-y">
                <div className="cell text-center">
                    <CalculatorInputButton onClick={this.props.onClick} value="7" />
                    <CalculatorInputButton onClick={this.props.onClick} value="8" />
                    <CalculatorInputButton onClick={this.props.onClick} value="9" />
                </div>
                <div className="cell text-center">
                    <CalculatorInputButton onClick={this.props.onClick} value="4" />
                    <CalculatorInputButton onClick={this.props.onClick} value="5" />
                    <CalculatorInputButton onClick={this.props.onClick} value="6" />
                </div>
                <div className="cell text-center">
                    <CalculatorInputButton onClick={this.props.onClick} value="1" />
                    <CalculatorInputButton onClick={this.props.onClick} value="2" />
                    <CalculatorInputButton onClick={this.props.onClick} value="3" />
                </div>
                <div className="cell text-center">
                    <CalculatorInputButton onClick={this.props.onClick} value="0" />
                    <CalculatorInputButton onClick={this.props.onClick} value="±" />
                    <CalculatorInputButton onClick={this.props.onClick} value="C" />
                </div>
            </div>
        );
    }

}

export default CalculatorInput;