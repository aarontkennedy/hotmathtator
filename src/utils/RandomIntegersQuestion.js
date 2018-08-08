import QuestionGenerator from "./QuestionGenerator";
import DivideIntegersQuestion from "./DivideIntegersQuestion";
import AddIntegersQuestion from "./AddIntegersQuestion";
import SubtractIntegersQuestion from "./SubtractIntegersQuestion";
import MultiplyIntegersQuestion from "./MultiplyIntegersQuestion";

class RandomIntegersQuestion extends QuestionGenerator {
    constructor(max = 11) {
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        super();

        if (max < 10) throw new Error("Max should be 10 or more to make actually useful questions.");
        this.max = max;

        this.arrayOfQuestionBanks = [
            new AddIntegersQuestion(this.max),
            new SubtractIntegersQuestion(this.max),
            new MultiplyIntegersQuestion(this.max),
            new DivideIntegersQuestion(this.max)
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

    getSolutionHelp() {
        return this.currentQuestion.getSolutionHelp();
    }

    isCorrectAnswer(answer) {
        return this.currentQuestion.isCorrectAnswer(answer);
    }

    getAnswer() {
        return this.currentQuestion.getAnswer();
    }
}

export default RandomIntegersQuestion;