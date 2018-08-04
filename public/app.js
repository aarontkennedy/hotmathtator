(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("AdditionQuestion.js", function(exports, require, module) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionGenerator = require("QuestionGenerator");

var AdditionQuestion = function (_QuestionGenerator) {
    _inherits(AdditionQuestion, _QuestionGenerator);

    function AdditionQuestion() {
        var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

        _classCallCheck(this, AdditionQuestion);

        var _this = _possibleConstructorReturn(this, (AdditionQuestion.__proto__ || Object.getPrototypeOf(AdditionQuestion)).call(this));
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.


        if (max < 10) throw new Error("Max should be 10 or more to make actually useful questions.");
        _this.max = max;
        _this.reset();
        return _this;
    }

    _createClass(AdditionQuestion, [{
        key: "reset",
        value: function reset() {
            var opLeft = this.getRandomWholeNumber(this.max);
            var opRight = this.getRandomWholeNumber(this.max);
            this.answer = opLeft + opRight;

            this.problem = opLeft + " + " + opRight + " =";
        }
    }, {
        key: "getProblem",
        value: function getProblem() {
            return this.problem;
        }

        // overried to provide a more thorough solution description

    }, {
        key: "getSolutionString",
        value: function getSolutionString() {
            return this.getProblem() + " " + this.getAnswer();
        }
    }]);

    return AdditionQuestion;
}(QuestionGenerator);

module.exports = AdditionQuestion;
});

require.register("AudioControl.js", function(exports, require, module) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var AudioControl = function () {
    function AudioControl(selector) {
        _classCallCheck(this, AudioControl);

        this.element = $(selector);
        if (!this.element) throw new Error("Couldn't retrieve element with selector: " + selector);
        this.domElement = this.element[0];
        this.playList = null;

        this.isSafari = navigator.userAgent.indexOf("Safari") != -1 ? true : false;
    }

    _createClass(AudioControl, [{
        key: "setPlayList",
        value: function setPlayList(arrayOfURLs) {
            this.playList = arrayOfURLs;
        }
    }, {
        key: "playRandomSong",
        value: function playRandomSong() {
            if (!this.playList) throw new Error("playList not set!");

            this.element.attr("src", this.playList[Math.floor(Math.random() * this.playList.length)]);

            this.domElement.play();
        }
    }, {
        key: "stop",
        value: function stop() {
            this.domElement.pause();
        }
    }, {
        key: "increaseSpeed",
        value: function increaseSpeed() {
            if (!this.isSafari) {
                this.domElement.playbackRate += .2;
            }
        }
    }, {
        key: "resetSpeed",
        value: function resetSpeed() {
            if (!this.isSafari) {
                this.domElement.playbackRate = 1;
            }
        }
    }, {
        key: "buzz",
        value: function buzz() {
            this.stop();
            this.element.attr("src", "songs/outOfTimeZap.mp3");
            this.domElement.play();
        }
    }]);

    return AudioControl;
}();

module.exports = AudioControl;
});

require.register("BackgroundColorController.js", function(exports, require, module) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

var BackgroundColorController = function () {
    function BackgroundColorController(selector) {
        _classCallCheck(this, BackgroundColorController);

        this.element = $(selector);
        if (!this.element) throw new Error("Couldn't retrieve element with selector: " + selector);
        this.originalBackground = this.element.css("background-color");
    }

    _createClass(BackgroundColorController, [{
        key: "reset",
        value: function reset() {
            this.element.css("background-color", this.originalBackground);
        }
    }, {
        key: "set",
        value: function set(color) {
            this.element.css("background-color", color);
        }
    }, {
        key: "setRandom",
        value: function setRandom() {
            var colors = ["pink", "aqua", "aquamarine", "chartreuse", "chocolate", "cornflowerblue", "darkseagreen", "deepskyblue", "fuschia", "gold", "greenyellow", "lightcoral", "light salmon", "mediumpurple", "plum", "thistle", "yellow"];

            function getRandomWholeNumber() {
                var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

                return Math.floor(Math.random() * max);
            }

            this.set(colors[getRandomWholeNumber(colors.length)]);
        }
    }]);

    return BackgroundColorController;
}();

module.exports = BackgroundColorController;
});

require.register("Game.js", function(exports, require, module) {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');
var BGCControl = require('BackgroundColorController');
var AudioControl = require('AudioControl');

var Game = function () {
    function Game(questionGenerator) {
        var gameContainerSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "section";
        var audioControlSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#gameSound";

        _classCallCheck(this, Game);

        this.questions = questionGenerator;

        this.gameContainerSelector = gameContainerSelector;
        this.element = $(this.gameContainerSelector);
        this.element.addClass("centerText");
        // store the landing page html for reuse later
        this.landingPageHTML = this.element.html();

        this.questionContainer = $("<span></span>").addClass("giantProblem");
        this.answerContainer = $('<input type="text" size="4" maxlength="4">').addClass("giantAnswerInput");
        this.checkButton = $('<div>Check</div>').addClass("giantButton");
        this.startButton = $("<div>Start!</div>").addClass("giantButton");
        this.quitButton = $("<div>Quit</div>").addClass("giantButton");
        this.playAgainButton = $("<div>Play Again</div>").addClass("giantButton");

        this.gameTimeout = null;
        this.changeBGColorInterval = null;
        this.changeAudioSpeedInterval = null;

        this.backgroundColorControl = new BGCControl(this.gameContainerSelector);
        this.audio = new AudioControl(audioControlSelector);
        this.audio.setPlayList(["songs/gallowsPole.mp3"], ["songs/tomDula.mp3"]);

        this.start();
    }

    _createClass(Game, [{
        key: 'start',
        value: function start() {
            var _this = this;

            this.element.empty();
            this.element.append(this.startButton);

            this.startButton.click(function () {
                _this.startButton.hide();
                _this.startButton.off();
                _this.audio.resetSpeed();
                _this.audio.playRandomSong();
                _this.enableBGColorChange();
                _this.enableAudioSpeedUp();
                _this.setGameTimeout(30 + _this.questions.getRandomWholeNumber(15));
                _this.showQuestion();
            });
        }
    }, {
        key: 'showQuestion',
        value: function showQuestion() {
            var _this2 = this;

            this.questionContainer.text(this.questions.getProblem());
            this.element.append(this.questionContainer);
            this.answerContainer.val("");
            this.element.append(this.answerContainer);
            this.element.append(this.checkButton);
            this.checkButton.click(function () {
                _this2.checkAnswer();
            });
        }
    }, {
        key: 'checkAnswer',
        value: function checkAnswer() {
            this.checkButton.off();
            if (this.questions.isCorrectAnswer(this.answerContainer.val())) {
                this.questions.reset();
                this.showQuestion();
            } else {
                this.endGame(this.questions.getProblem() + ' ' + this.questions.getAnswer());
            }
        }
    }, {
        key: 'enableBGColorChange',
        value: function enableBGColorChange() {
            var _this3 = this;

            this.changeBGColorInterval = setInterval(function () {
                _this3.backgroundColorControl.setRandom();
            }, 5000);
        }
    }, {
        key: 'enableAudioSpeedUp',
        value: function enableAudioSpeedUp() {
            var _this4 = this;

            this.changeAudioSpeedInterval = setInterval(function () {
                _this4.audio.increaseSpeed();
            }, 7000);
        }
    }, {
        key: 'setGameTimeout',
        value: function setGameTimeout(seconds) {
            var _this5 = this;

            this.gameTimeout = setTimeout(function () {
                _this5.endGame();
            }, seconds * 1000);
        }
    }, {
        key: 'endGame',
        value: function endGame() {
            var _this6 = this;

            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


            clearTimeout(this.gameTimeout);
            clearInterval(this.changeBGColorInterval);
            clearInterval(this.changeAudioSpeedInterval);

            this.element.empty();
            this.audio.stop();
            this.backgroundColorControl.set("orange");
            if (message) {
                this.element.append($('<h3>' + message + '</h3>'));
            }
            this.element.append($('<h3>Burned!</h3>'));

            this.quitButton.click(function () {
                _this6.cleanUp();
                _this6.backgroundColorControl.reset();
                _this6.element.html(_this6.landingPageHTML);
            });
            this.playAgainButton.click(function () {
                _this6.cleanUp();
                _this6.start();
            });
            this.element.append(this.playAgainButton);
            this.element.append(this.quitButton);

            this.audio.buzz();
        }
    }, {
        key: 'cleanUp',
        value: function cleanUp() {
            this.quitButton.off();
            this.playAgainButton.off();
            this.element.empty();
        }
    }]);

    return Game;
}();

module.exports = Game;
});

require.register("QuestionGenerator.js", function(exports, require, module) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuestionGenerator = function () {
  function QuestionGenerator() {
    _classCallCheck(this, QuestionGenerator);

    this.answer = null;
  }

  // min and max are inclusive


  _createClass(QuestionGenerator, [{
    key: "getRandomWholeNumber",
    value: function getRandomWholeNumber() {
      var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

      return Math.floor(Math.random() * (max + 1));
    }
  }, {
    key: "reset",
    value: function reset() {
      throw new Error("reset not implemented");
    }
  }, {
    key: "getProblem",
    value: function getProblem() {
      throw new Error("getProblem not implemented");
    }
  }, {
    key: "isCorrectAnswer",
    value: function isCorrectAnswer(answer) {
      return answer == this.answer;
    }
  }, {
    key: "getAnswer",
    value: function getAnswer() {
      return this.answer;
    }

    // overried to provide a more thorough solution description

  }, {
    key: "getSolutionString",
    value: function getSolutionString() {
      return this.answer;
    }
  }]);

  return QuestionGenerator;
}();

module.exports = QuestionGenerator;
});

require.register("initialize.js", function(exports, require, module) {
'use strict';

document.addEventListener('DOMContentLoaded', function () {

  var $ = require('jquery');

  var AdditionQuestion = require('AdditionQuestion');
  var Game = require('Game');
  var game = null;

  var sectionElement = $("section");

  sectionElement.on("click", "#addGame", function () {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#addGameHarder", function () {
    game = new Game(new AdditionQuestion(20));
  });
  sectionElement.on("click", "#subtractGame", function () {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#subtractGameHarder", function () {
    game = new Game(new AdditionQuestion(20));
  });
  sectionElement.on("click", "#multiplyGame", function () {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#multiplyGameHarder", function () {
    game = new Game(new AdditionQuestion(20));
  });
  sectionElement.on("click", "#divideGame", function () {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#divideGameHarder", function () {
    game = new Game(new AdditionQuestion(20));
  });
  sectionElement.on("click", "#randomGame", function () {
    game = new Game(new AdditionQuestion());
  });

  sectionElement.on("click", "#intAddGame", function () {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#intSubtractGame", function () {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#intMultiplyGame", function () {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#intDivideGame", function () {
    game = new Game(new AdditionQuestion());
  });
  sectionElement.on("click", "#integerGame", function () {
    game = new Game(new AdditionQuestion());
  });
});
});

require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map