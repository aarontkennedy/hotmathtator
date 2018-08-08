import React, { Component } from 'react';
import './Game.css';
import Header from "../Header";
import BackgroundColorChangeSection from "../BackgroundColorChangeSection";
import BigGameStartButton from "../BigGameStartButton";
import GameDisplay from "../GameDisplay";

class Game extends Component {

    state = {
        isGameStarted: false
    };

    handleStartGameClick = (event) => {
        this.setState({ isGameStarted: true });
    }

    handleGameIsDone = () => {
        this.setState({isGameStarted: false});
    }

    render() {
        return (
            <div className="Game">
                <Header  gameMode={true}/>
                <BackgroundColorChangeSection gameOver={false} interval={5000}>
                    { !this.state.isGameStarted ?
                    <BigGameStartButton onClick={this.handleStartGameClick} />
                    : <GameDisplay questionGenerator={this.props.questionGenerator}
                    handleGameIsDone={this.handleGameIsDone} /> }

                </BackgroundColorChangeSection>
            </div>
        );
    }

}

export default Game;