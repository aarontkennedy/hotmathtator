import React, { Component } from 'react';
import './BigGameStartButton.css';

class BigGameStartButton extends Component {
  render(props) {
    return (<div className="button BigGameStartButton" onClick={this.props.onClick}>Start!</div>);
  }

}

export default BigGameStartButton;