import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import Game from "./components/pages/Game";
import AdditionQuestion from "./utils/AdditionQuestion";
import SubtractionQuestion from "./utils/SubtractionQuestion";
import MultiplicationQuestion from "./utils/MultiplicationQuestion";
import DivisionQuestion from "./utils/DivisionQuestion";
import RandomFactQuestion from "./utils/RandomFactQuestion";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/game/additionFacts" render={(props) => <Game {...props} questionGenerator={AdditionQuestion} />} />
          <Route path="/game/subtractionFacts" render={(props) => <Game {...props} questionGenerator={SubtractionQuestion} />} />
          <Route path="/game/multiplicationFacts" render={(props) => <Game {...props} questionGenerator={MultiplicationQuestion} />} />
          <Route path="/game/divisionFacts" render={(props) => <Game {...props} questionGenerator={DivisionQuestion} />} />
          <Route path="/game/randomFacts" render={(props) => <Game {...props} questionGenerator={RandomFactQuestion} />} />
          <Route path="/game/addIntegers" render={(props) => <Game {...props} questionGenerator={AdditionQuestion} />} />
          <Route path="/game/subtractIntegers" render={(props) => <Game {...props} questionGenerator={AdditionQuestion} />} />
          <Route path="/game/multiplyIntegers" render={(props) => <Game {...props} questionGenerator={AdditionQuestion} />} />
          <Route path="/game/divideIntegers" render={(props) => <Game {...props} questionGenerator={AdditionQuestion} />} />
          <Route path="/game/randomIntegers" render={(props) => <Game {...props} questionGenerator={AdditionQuestion} />} />
          <Route path="*" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
