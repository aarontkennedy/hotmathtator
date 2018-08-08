import React, { Component } from 'react';
import './Problem.css';

class Problem extends Component {

    render() {
        return (
            <span className="h1 Problem">
            {this.props.problem}
            </span>
        );
    }

}

export default Problem;