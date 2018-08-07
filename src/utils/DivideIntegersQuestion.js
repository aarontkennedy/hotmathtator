import MultiplyIntegersQuestion from "./MultiplyIntegersQuestion";

class DivideIntegersQuestion extends MultiplyIntegersQuestion {

    reset () {
        this.answer = this.randomPositiveNegative1()*this.getRandomWholeNumber(this.max);
        let opRight = this.randomPositiveNegative1()*this.getRandomWholeNumber(this.max);
        opRight = opRight ? opRight : 1;
        const opLeft = this.answer * opRight;
        this.sameSigns = (opLeft < 0 && opRight < 0) || 
                         (opLeft > 0 && opRight > 0);
        this.hasAZeroOp = opLeft === 0 || opRight === 0;

        this.problem = `${opLeft} ÷ ${opRight} =`
    }

    // overried to provide a more thorough solution description
    getSolutionString() {
        let s = this.getProblem() + " " + this.getAnswer() + " ";
        if (this.hasAZeroOp) {
            s += "0 divided by anythign is 0!"
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

export default DivideIntegersQuestion;