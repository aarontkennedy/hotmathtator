document.addEventListener('DOMContentLoaded', () => {

  const $ = require('jquery');

  const AdditionQuestion = require('AdditionQuestion');
  const Game = require('Game');
  let game = null;

  const sectionElement = $("section");

  sectionElement.on("click", "#addGame", () => {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#addGameHarder", () => {
    game = new Game(new AdditionQuestion(20));
  });
  sectionElement.on("click", "#subtractGame", () => {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#subtractGameHarder", () => {
    game = new Game(new AdditionQuestion(20));
  });
  sectionElement.on("click", "#multiplyGame", () => {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#multiplyGameHarder", () => {
    game = new Game(new AdditionQuestion(20));
  });
  sectionElement.on("click", "#divideGame", () => {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#divideGameHarder", () => {
    game = new Game(new AdditionQuestion(20));
  });
  sectionElement.on("click", "#randomGame", () => {
    game = new Game(new AdditionQuestion());
  });

  sectionElement.on("click", "#intAddGame", () => {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#intSubtractGame", () => {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#intMultiplyGame", () => {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#intDivideGame", () => {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#integerGame", () => {
    game = new Game(new AdditionQuestion());
  });


});
