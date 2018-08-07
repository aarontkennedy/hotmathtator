import React, { Component } from 'react';
import './Problem.css';

class Problem extends Component {

    render() {
        return (
            <span className="Problem">
            {this.props.problem}
            </span>
        );
    }

}

export default Problem;