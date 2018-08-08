class QuestionGenerator {

  constructor() {
    this.answer = null;
  }

  // min and max are inclusive
  getRandomWholeNumber(max = 10) {
    return Math.floor(Math.random() * (max + 1));
  }

  reset() {
    throw new Error("reset not implemented");
  }

  getProblem() {
    throw new Error("getProblem not implemented");
  }

  isCorrectAnswer(answer) {
    return answer === this.answer;
  }

  getAnswer() {
    return this.answer;
  }

  getSolutionString() {
    return this.getProblem() + " " + this.getAnswer();
  }

  // override to provide a more thorough solution description
  getSolutionHelp() {
    throw new Error("getSolutionHelp not implemented");
  }

  randomPositiveNegative1() {
    const one = this.getRandomWholeNumber(1);
    if (one) return 1;
    return -1;
  }

}

export default QuestionGenerator;