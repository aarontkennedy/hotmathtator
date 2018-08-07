import QuestionGenerator from "./QuestionGenerator";

class MultiplicationQuestion extends QuestionGenerator {
    constructor(max = 11) {
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        super();

        if (max < 10) throw new Error("Max should be 10 or more to make actually useful questions.");
        this.max = max;
        this.reset();
    }

    reset () {
        const opLeft = this.getRandomWholeNumber(this.max);
        const opRight = this.getRandomWholeNumber(this.max);
        this.answer = opLeft * opRight;

        this.problem = `${opLeft} x ${opRight} =`
    }

    getProblem() {
        return this.problem;
    }

    // overried to provide a more thorough solution description
    getSolutionString() {
        return this.getProblem() + " " + this.getAnswer();
    }
}

export default MultiplicationQuestion;