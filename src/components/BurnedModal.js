import React, { Component } from 'react';
import './BurnedModal.css';
import GameButtonList from "./GameButtonList";

class BurnedModal extends Component {
    render() {
        return (
            <div className="BurnedModal text-center">
                <h1>You Got <span className="flamingTextSecond">BURNED!</span></h1>
                <h2>{this.props.message}</h2>
                <h3>{this.props.additionalInfo}</h3>
                <button className="button large" onClick={this.props.handlePlayAgain}>Play again?</button>
                <GameButtonList />
            </div>);
    }
    

}

export default BurnedModal;