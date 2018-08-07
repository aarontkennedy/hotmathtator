import QuestionGenerator from "./QuestionGenerator";
import DivisionQuestion from "./DivisionQuestion";
import AdditionQuestion from "./AdditionQuestion";
import SubtractionQuestion from "./SubtractionQuestion";
import MultiplicationQuestion from "./MultiplicationQuestion";

class RandomFactQuestion extends QuestionGenerator {
    constructor(max = 11) {
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        super();

        if (max < 10) throw new Error("Max should be 10 or more to make actually useful questions.");
        this.max = max;

        this.arrayOfQuestionBanks = [
            new AdditionQuestion(this.max),
            new SubtractionQuestion(this.max),
            new MultiplicationQuestion(this.max),
            new DivisionQuestion(this.max)
        ];

        this.currentQuestion = this.arrayOfQuestionBanks[0];

        this.reset();
    }

    reset() {
        const index = this.getRandomWholeNumber(this.arrayOfQuestionBanks.length-1);
        this.currentQuestion = this.arrayOfQuestionBanks[index];
        this.currentQuestion.reset(); // get new question
    }

    getProblem() {
        return this.currentQuestion.getProblem();
    }

    getSolutionString() {
        return this.currentQuestion.getSolutionString();
    }

    isCorrectAnswer(answer) {
        return this.currentQuestion.isCorrectAnswer(answer);
    }

    getAnswer() {
        return this.currentQuestion.getAnswer();
    }
}

export default RandomFactQuestion;