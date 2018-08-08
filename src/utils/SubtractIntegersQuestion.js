import AddIntegersQuestion from "./AddIntegersQuestion";

class SubtractIntegersQuestion extends AddIntegersQuestion {

    reset () {
        this.opLeft = this.randomPositiveNegative1()*this.getRandomWholeNumber(this.max);
        this.opRight = this.randomPositiveNegative1()*this.getRandomWholeNumber(this.max);

        this.answer = this.opLeft - this.opRight;
        
        this.subtractNegative = (this.opRight < 0);

        const opRightStr = this.opRight < 0 ? `(${this.opRight})` : `${this.opRight}`;

        this.problem = `${this.opLeft} - ${opRightStr} =`
    }

    getSolutionHelp() {
        let s = "";
        if (this.subtractNegative) {
            s += `Subtract a negative?  Same as adding ${this.opLeft} + ${Math.abs(this.opRight)}.`;
        }
        else if (this.opRight === 0) {
            s += "Subtract 0?  Stays the same.";
        }
        else {
            s += `Start at ${this.opLeft} and count down ${Math.abs(this.opRight)}.`;
        }
        return s;
    }
}

export default SubtractIntegersQuestion;