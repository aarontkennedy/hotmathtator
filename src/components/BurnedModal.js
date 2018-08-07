import React, { Component } from 'react';
import './BurnedModal.css';
import GameButtonList from "./GameButtonList";

class BurnedModal extends Component {
    render() {
        return (
            <div className="BurnedModal text-center">
                <h1>You Got BURNED!</h1>
                <h2>{this.props.message}</h2>
                <button className="button large" onClick={this.props.handlePlayAgain}>Play again?</button>
                <GameButtonList />
            </div>);
    }
    

}

export default BurnedModal;