

const { detect } = require('detect-browser');
const browser = detect();
 
let $ = require('jquery');

class AudioControl {

    constructor(selector) {
        this.element = $(selector);
        if (!this.element) throw new Error("Couldn't retrieve element with selector: " + selector);
        this.domElement = this.element[0];
        this.playList = null;
        // for some reason, safari can't handle speeding up the 
        // audio - gross.
        console.log(browser.name);
        this.isSafari = (("safari") === browser.name.toLowerCase()) ? true : false;

    }

    setPlayList(arrayOfURLs) {
        this.playList = arrayOfURLs;
    }

    playRandomSong() {
        if (!this.playList) throw new Error("playList not set!");

        this.element.attr("src", this.playList[Math.floor(Math.random() * (this.playList.length))]);

        this.resetSpeed();

        this.domElement.play();
    }

    stop() {
        this.domElement.pause();
    }

    increaseSpeed() {
        if (!this.isSafari) {
            this.domElement.playbackRate += .2;
        }
    }

    resetSpeed() {
        if (!this.isSafari) {
            this.domElement.playbackRate = 1;
        }
    }

    buzz() {
        this.stop();
        this.element.attr("src", "/songs/outOfTimeZap.mp3");
        this.domElement.play();
    }
}

export default AudioControl;