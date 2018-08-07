import AddIntegersQuestion from "./AddIntegersQuestion";

class MultiplyIntegersQuestion extends AddIntegersQuestion {

    reset () {
        const opLeft = this.randomPositiveNegative1()*this.getRandomWholeNumber(this.max);
        const opRight = this.randomPositiveNegative1()*this.getRandomWholeNumber(this.max);
        this.answer = opLeft * opRight;
        this.sameSigns = (opLeft < 0 && opRight < 0) || 
                         (opLeft > 0 && opRight > 0);
        this.hasAZeroOp = opLeft === 0 || opRight === 0;

        this.problem = `${opLeft} x ${opRight} =`
    }

    // overried to provide a more thorough solution description
    getSolutionString() {
        let s = this.getProblem() + " " + this.getAnswer() + " ";
        if (this.hasAZeroOp) {
            s += "Anything times 0 is 0!"
        }
        else if (this.sameSigns) {
            s += "Same signs? Always positive."
        }
        else {
            s += "Different signs?  Always negative."
        }
        return s;
    }
}

export default MultiplyIntegersQuestion;