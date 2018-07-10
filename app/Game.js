const $ = require('jquery');
const BGCControl = require('BackgroundColorController');
const AudioControl = require('AudioControl');

class Game {
    constructor(questionGenerator,
        gameContainerSelector = "section",
        audioControlSelector = "#gameSound") {
        this.questions = questionGenerator;

        this.gameContainerSelector = gameContainerSelector;
        this.element = $(this.gameContainerSelector);
        this.element.addClass("centerText");
        // store the landing page html for reuse later
        this.landingPageHTML = this.element.html();

        this.questionContainer = $("<span></span>").addClass("giantProblem");
        this.answerContainer = $(`<input type="text" size="4" maxlength="4">`).addClass("giantAnswerInput");
        this.checkButton = $(`<div>Check</div>`).addClass("giantButton");

        this.startButton = $("<div>Start!</div>").addClass("giantButton");

        this.gameTimeout = null;
        this.changeBGColorInterval = null;
        this.changeAudioSpeedInterval = null;

        this.backgroundColorControl = new BGCControl(this.gameContainerSelector);
        this.audio = new AudioControl(audioControlSelector);
        this.audio.setPlayList(["songs/gallowsPole.mp3"],
            ["songs/tomDula.mp3"]);

        this.start();
    }

    start() {
        this.element.empty();
        this.element.append(this.startButton);

        this.startButton.click(() => {
            this.startButton.hide();
            this.startButton.off();
            this.audio.resetSpeed();
            this.audio.playRandomSong();
            this.enableBGColorChange();
            this.enableAudioSpeedUp();
            this.setGameTimeout(30 + this.questions.getRandomWholeNumber(15));
            this.showQuestion();
        });
    }

    showQuestion() {
        this.questionContainer.text(this.questions.getProblem());
        this.element.append(this.questionContainer);
        this.answerContainer.val("");
        this.element.append(this.answerContainer);
        this.element.append(this.checkButton);
        this.checkButton.click(() => {
            this.checkAnswer();
        });
    }

    checkAnswer() {
        this.checkButton.off();
        if (this.questions.isCorrectAnswer(this.answerContainer.val())) {
            this.questions.reset();
            this.showQuestion();
        }
        else {
            this.endGame(`${this.questions.getProblem()} ${this.questions.getAnswer()} - BURNED!`);
        }
    }

    enableBGColorChange() {
        this.changeBGColorInterval = setInterval(() => {
            this.backgroundColorControl.setRandom();
        }, 5000);
    }

    enableAudioSpeedUp() {
        this.changeAudioSpeedInterval = setInterval(() => {
            this.audio.increaseSpeed();
        }, 7000);

    }

    setGameTimeout(seconds) {
        this.gameTimeout = setTimeout(() => { this.endGame() }, seconds * 1000);
    }

    endGame(message = null) {
        clearTimeout(this.gameTimeout);
        clearInterval(this.changeBGColorInterval);
        clearInterval(this.changeAudioSpeedInterval);

        this.element.empty();
        this.audio.playRandomSong();
        this.backgroundColorControl.set("orange");
        if (message) {
            this.element.append($(`<h3>${message}</h3>`));
        }
        this.element.append($(`<h3>Burned!</h3>`));

        this.audio.buzz();
    }






    /*
        $(gameContainerSelector).html(questionGenerator.getProblem());
        backgroundColorControl.set("pink");
        audio.playRandomSong();
        setTimeout(function(){audio.increaseSpeed();}, 5000);
        setTimeout(function(){audio.increaseSpeed();}, 10000);
        setTimeout(function(){audio.increaseSpeed();}, 15000);
        setTimeout(function(){audio.stop();audio.buzz();}, 20000);*/
}


module.exports = Game;