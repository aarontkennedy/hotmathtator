import React, { Component } from 'react';
import './CalculatorInputButton.css';

class CalculatorInputButton extends Component {

    render() {
        return (
            <div className="button large CalculatorInputButton"   
                onClick={() => { this.props.onClick(this.props.value) }}>
                {this.props.value}
            </div>
        );
    }

}

export default CalculatorInputButton;