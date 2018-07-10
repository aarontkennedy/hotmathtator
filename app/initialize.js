document.addEventListener('DOMContentLoaded', () => {

  const $ = require('jquery');

  const AdditionQuestion = require('AdditionQuestion');
  const Game = require('Game');
  let game = null;



  $("#addGame").click(function () {
    game = new Game(new AdditionQuestion());
  });
  $("#addGameHarder").click(function () {
    game = new Game(new AdditionQuestion(20));
  });
  $("#subtractGame").click(function () {
    game = new Game(new AdditionQuestion());
  });
  $("#subtractGameHarder").click(function () {
    game = new Game(new AdditionQuestion(20));
  });
  $("#multiplyGame").click(function () {
    game = new Game(new AdditionQuestion());
  });
  $("#multiplyGameHarder").click(function () {
    game = new Game(new AdditionQuestion(20));
  });
  $("#divideGame").click(function () {
    game = new Game(new AdditionQuestion());
  });
  $("#divideGameHarder").click(function () {
    game = new Game(new AdditionQuestion(20));
  });
  $("#randomGame").click(function () {
    game = new Game(new AdditionQuestion());
  });

  $("#intAddGame").click(function () {
    game = new Game(new AdditionQuestion());
  });
  $("#intSubtractGame").click(function () {
    game = new Game(new AdditionQuestion());
  });
  $("#intMultiplyGame").click(function () {
    game = new Game(new AdditionQuestion());
  });
  $("#intDivideGame").click(function () {
    game = new Game(new AdditionQuestion());
  });
  $("#integerGame").click(function () {
    game = new Game(new AdditionQuestion());
  });






});
