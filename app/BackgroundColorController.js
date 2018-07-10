
let $ = require('jquery');

class BackgroundColorController {

    constructor(selector) {
        this.element = $(selector);
        if (!this.element) throw new Error("Couldn't retrieve element with selector: " + selector);
        this.originalBackground = this.element.css("background-color");
    }

    reset() {
        this.element.css("background-color", this.originalBackground);
    }

    set(color) {
        this.element.css("background-color", color);
    }

    setRandom() {
        const colors = ["pink", "aqua", "aquamarine", "chartreuse", "chocolate", "cornflowerblue", "darkseagreen", "deepskyblue", "fuschia", "gold", "greenyellow", "lightcoral", "light salmon", "mediumpurple", "plum", "thistle", "yellow"];

        function getRandomWholeNumber(max = 10) {
            return Math.floor(Math.random() * (max));
        }

        this.set(colors[getRandomWholeNumber(colors.length)]);
    }
}

module.exports = BackgroundColorController;