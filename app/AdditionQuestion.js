const QuestionGenerator = require("QuestionGenerator");

class AdditionQuestion extends QuestionGenerator {
    constructor(max = 10) {
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        super();

        if (max < 10) throw new Error("Max should be 10 or more to make actually useful questions.");

        const opLeft = this.getRandomWholeNumber(max);
        const opRight = this.getRandomWholeNumber(max);
        this.answer = opLeft + opRight;

        this.problem = `${opLeft} + ${opRight} =`
    }

    getProblem() {
        return this.problem;
    }

    // overried to provide a more thorough solution description
    getSolutionString() {
        return this.getProblem() + " " + this.getAnswer();
    }
}

module.exports = AdditionQuestion;