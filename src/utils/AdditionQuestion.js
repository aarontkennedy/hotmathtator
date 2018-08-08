import QuestionGenerator from "./QuestionGenerator";

class AdditionQuestion extends QuestionGenerator {
    constructor(max = 10) {
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
        this.answer = opLeft + opRight;

        this.problem = `${opLeft} + ${opRight} =`
    }

    getProblem() {
        return this.problem;
    }

    getSolutionHelp() {
        return "Count Up!";
    }
}

export default AdditionQuestion;