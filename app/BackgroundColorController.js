
let $ = require('jquery');

class BackgroundColorController {

    constructor(selector) {
        this.element = $(selector);
        if (!this.element) throw new Error("Couldn't retrieve element with selector: " + selector);
        this.originalBackground = this.element.css("background-color");
    }

    reset () {
        this.element.css("background-color", this.originalBackground);
    }

    set (color) {
        this.element.css("background-color", color);
    }
}

module.exports = BackgroundColorController;