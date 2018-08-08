import QuestionGenerator from "./QuestionGenerator";

class DivisionQuestion extends QuestionGenerator {
    constructor(max = 11) {
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        super();

        if (max < 10) throw new Error("Max should be 10 or more to make actually useful questions.");
        this.max = max;
        this.reset();
    }

    reset () {
        this.opRight = this.getRandomWholeNumber(this.max);
        this.opRight = this.opRight ? this.opRight : 1;
        this.answer = this.getRandomWholeNumber(this.max);
        this.opLeft = this.answer*this.opRight;

        this.problem = `${this.opLeft} ÷ ${this.opRight} =`
    }

    getProblem() {
        return this.problem;
    }

    getSolutionHelp() {
        return `Skip count by ${this.opRight} till you get to ${this.opLeft}.`;
    }
}

export default DivisionQuestion;