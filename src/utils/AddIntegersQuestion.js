import QuestionGenerator from "./QuestionGenerator";

class AddIntegersQuestion extends QuestionGenerator {
    constructor(max = 10) {
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        super();

        if (max < 10) throw new Error("Max should be 10 or more to make actually useful questions.");
        this.max = max;
        this.reset();
    }

    randomPositiveNegative1 () {
        const one = this.getRandomWholeNumber(1);
        if (one) return 1;
        return -1;
    }

    reset () {
        const opLeft = this.randomPositiveNegative1()*this.getRandomWholeNumber(this.max);
        const opRight = this.randomPositiveNegative1()*this.getRandomWholeNumber(this.max);
        this.answer = opLeft + opRight;
        this.sameSigns = (opLeft < 0 && opRight < 0) || 
                         (opLeft > 0 && opRight > 0);
        this.hasAZeroOp = opLeft === 0 || opRight === 0;

        this.problem = `${opLeft} + ${opRight} =`
    }

    getProblem() {
        return this.problem;
    }

    // overried to provide a more thorough solution description
    getSolutionString() {
        let s = this.getProblem() + " " + this.getAnswer() + " ";
        if (this.hasAZeroOp) {
            s += "Adding 0 doesn't change a number!"
        }
        else if (this.sameSigns) {
            s += "Same signs? Add and keep the sign."
        }
        else {
            s += "Different signs?  Subtract and keep the sign of the integer with the greatest absolute value."
        }
        return s;
    }
}

export default AddIntegersQuestion;