import React, { Component } from 'react';
import Problem from "./Problem";
import TextInput from "./TextInput";
import CalculatorInput from "./CalculatorInput";
import BurnedModal from "./BurnedModal";
import './GameDisplay.css';
import AudioControl from "../utils/AudioControl";

class GameDisplay extends Component {

    question = null;

    state = {
        isGameOver: false,
        gameTimedOut: false,
        textInput: "",
        problemText: null
    };

    componentDidMount() {
        this.audio = new AudioControl("#gameSound");
        this.audio.setPlayList(["/songs/gallowsPole.mp3",
            "/songs/tomDula.mp3"]);

        document.onkeyup = (e) => this.handleKeyPress(e);
        this.startGame();
    }

    componentWillReceiveProps() {
        this.startGame();
    }

    startGame = () => {
        this.question = new this.props.questionGenerator();
        this.audio.playRandomSong();
        this.changeAudioSpeedInterval = setInterval(() => {
            this.audio.increaseSpeed();
        }, 7000);

        const seconds = 15 + this.question.getRandomWholeNumber(15);
        this.gameTimeout = setTimeout(() => { this.timeUp() }, seconds * 1000);

        this.nextQuestion();
    }

    nextQuestion = () => {
        this.question.reset();
        this.setState({
            isGameOver: false,
            gameTimedOut: false,
            textInput: "",
            problemText: this.question.getProblem()
        });
    }

    handleKeyPress = (event) => {
        this.handleCalcClick(event.key);
    }

    handleCalcClick = (value) => {
        if (!this.state.isGameOver) {
            switch (value.toLowerCase()) {
                case "backspace":
                case "c":
                    this.setState({ textInput: "" });
                    break;
                case "-":
                case "±":
                    if (this.state.textInput.startsWith("-")) {
                        this.setState({ textInput: this.state.textInput.slice(1) });
                    }
                    else {
                        this.setState({ textInput: "-" + this.state.textInput });
                    }
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    this.setState({ textInput: this.state.textInput + value });
                    break;
                case "enter":
                case "return":
                    this.handleCheckAnswer();
                    break;
                default:
            }
        }
    }

    handleCheckAnswer = () => {
        const correct = this.question.isCorrectAnswer(parseInt(this.state.textInput, 10));

        if (correct) {
            this.nextQuestion();
        }
        else {
            this.gameOver();
        }
    }

    timeUp() {
        this.gameOver(true);
    }

    gameOver(timedOut = false) {
        clearInterval(this.changeAudioSpeedInterval);
        clearTimeout(this.gameTimeout);
        this.audio.stop();
        this.setState({ isGameOver: true,  gameTimedOut: timedOut});
    }

    componentWillUnmount() {
        this.gameOver();
    }

    render() {
        return (
            <div className="GameDisplay row grid-x">
                <div className="cell medium-6 columns">
                    <div className="row grid-x">
                        <div className="cell columns text-center">
                            <Problem problem={this.state.problemText} />
                            <TextInput value={this.state.textInput} handleKeyPress={this.handleKeyPress} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell text-center">
                            <button type="button" className="button large success Go-Button" onClick={this.handleCheckAnswer}>Go!</button>
                        </div>
                    </div>
                </div>

                <div className="cell medium-6 columns text-center">
                    <CalculatorInput onClick={this.handleCalcClick} needNegative={false} />
                </div>

                {this.state.isGameOver ?
                    <BurnedModal
                        message={this.state.gameTimedOut ? "Time's Up!" : this.question.getSolutionString()}
                        additionalInfo={this.state.gameTimedOut ? "" : this.question.getSolutionHelp()}
                        handlePlayAgain={this.startGame} />
                    : ""}
            </div>
        );
    }

}

export default GameDisplay;