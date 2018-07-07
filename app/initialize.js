document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  
  let $ = require('jquery');
  let AdditionQuestion = require('AdditionQuestion');
  let BGCControl = require('BackgroundColorController');
  let AudioControl = require('AudioControl');

  let sectionBGCControl = new BGCControl("section");
  let audio = new AudioControl("#gameSound");
  audio.setPlayList(["songs/gallowsPole.mp3"],["songs/tomDula.mp3"]);

  const landingPageHTML = $("section").html();

  $("#addGame").click(function () {
    startGame(new AdditionQuestion());
  });
  $("#addGameHarder").click(function () {
    startGame(new AdditionQuestion(20));
  });
  $("#subtractGame").click(function () {
    startGame(new AdditionQuestion());
  });
  $("#subtractGameHarder").click(function () {
    startGame(new AdditionQuestion(20));
  });
  $("#multiplyGame").click(function () {
    startGame(new AdditionQuestion());
  });
  $("#multiplyGameHarder").click(function () {
    startGame(new AdditionQuestion(20));
  });  
  $("#divideGame").click(function () {
    startGame(new AdditionQuestion());
  });
  $("#divideGameHarder").click(function () {
    startGame(new AdditionQuestion(20));
  });
  $("#randomGame").click(function () {
    startGame(new AdditionQuestion());
  });
  
  $("#intAddGame").click(function () {
    startGame(new AdditionQuestion());
  });
  $("#intSubtractGame").click(function () {
    startGame(new AdditionQuestion());
  });
  $("#intMultiplyGame").click(function () {
    startGame(new AdditionQuestion());
  });
  $("#intDivideGame").click(function () {
    startGame(new AdditionQuestion());
  });
  $("#integerGame").click(function () {
    startGame(new AdditionQuestion());
  });


  function startGame (questionGenerator) {
    $("section").html(questionGenerator.getProblem());
    sectionBGCControl.set("pink");
    audio.playRandomSong();
    setTimeout(function(){audio.increaseSpeed();}, 5000);
    setTimeout(function(){audio.increaseSpeed();}, 10000);
    setTimeout(function(){audio.increaseSpeed();}, 15000);
    setTimeout(function(){audio.stop();audio.buzz();}, 20000);
  }




});
