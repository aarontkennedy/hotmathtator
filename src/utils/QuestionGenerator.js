class QuestionGenerator {
  
    constructor() {
      this.answer=null;
    }

    // min and max are inclusive
    getRandomWholeNumber (max=10) {
      return Math.floor(Math.random()*(max+1));
    }  

    reset () {
      throw new Error ("reset not implemented");
    }

    getProblem () {
      throw new Error ("getProblem not implemented");
    }

    isCorrectAnswer (answer) {
      return answer === this.answer;
    }

    getAnswer () {
      return this.answer;
    }

    // overried to provide a more thorough solution description
    getSolutionString () {
      return this.answer;
    }
}

export default QuestionGenerator;