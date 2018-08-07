import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {

    render() {
        return (
                <input className="TextInput" type="text" value={this.props.value} />
        );
    }

}

export default TextInput;