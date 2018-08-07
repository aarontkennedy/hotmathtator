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
        let opRight = this.getRandomWholeNumber(this.max);
        opRight = opRight ? opRight : 1;
        this.answer = this.getRandomWholeNumber(this.max);
        const opLeft = this.answer*opRight;

        this.problem = `${opLeft} ÷ ${opRight} =`
    }

    getProblem() {
        return this.problem;
    }

    // overried to provide a more thorough solution description
    getSolutionString() {
        return this.getProblem() + " " + this.getAnswer();
    }
}

export default DivisionQuestion;