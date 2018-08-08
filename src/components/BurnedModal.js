import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './BurnedModal.css';
import GameButtonList from "./GameButtonList";

class BurnedModal extends Component {
    render() {
        return (
            <div className="BurnedModal text-center">
                <h1>You Got <span className="flamingTextSecond">BURNED!</span></h1>
                <h2>{this.props.message}</h2>
                <h3>{this.props.additionalInfo}</h3>
                <div>
                    <button className="button large success" onClick={this.props.handlePlayAgain}>Play Again</button>
                    <Link to="/" > cancel</Link>
                </div>
                <GameButtonList />
            </div>);
    }
    

}

export default BurnedModal;