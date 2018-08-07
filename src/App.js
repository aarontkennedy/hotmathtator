import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import Game from "./components/pages/Game";
import AdditionQuestion from "./utils/AdditionQuestion";
import SubtractionQuestion from "./utils/SubtractionQuestion";
import MultiplicationQuestion from "./utils/MultiplicationQuestion";
import DivisionQuestion from "./utils/DivisionQuestion";
import RandomFactQuestion from "./utils/RandomFactQuestion";
import AddIntegersQuestion from "./utils/AddIntegersQuestion";
import MultiplyIntegersQuestion from "./utils/MultiplyIntegersQuestion";
import DivideIntegersQuestion from "./utils/DivideIntegersQuestion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/game/additionFacts" render={(props) => <Game {...props} questionGenerator={AdditionQuestion} />} />
            <Route path="/game/subtractionFacts" render={(props) => <Game {...props} questionGenerator={SubtractionQuestion} />} />
            <Route path="/game/multiplicationFacts" render={(props) => <Game {...props} questionGenerator={MultiplicationQuestion} />} />
            <Route path="/game/divisionFacts" render={(props) => <Game {...props} questionGenerator={DivisionQuestion} />} />
            <Route path="/game/randomFacts" render={(props) => <Game {...props} questionGenerator={RandomFactQuestion} />} />
            <Route path="/game/addIntegers" render={(props) => <Game {...props} questionGenerator={AddIntegersQuestion} />} />
            <Route path="/game/subtractIntegers" render={(props) => <Game {...props} questionGenerator={AdditionQuestion} />} />
            <Route path="/game/multiplyIntegers" render={(props) => <Game {...props} questionGenerator={MultiplyIntegersQuestion} />} />
            <Route path="/game/divideIntegers" render={(props) => <Game {...props} questionGenerator={DivideIntegersQuestion} />} />
            <Route path="/game/randomIntegers" render={(props) => <Game {...props} questionGenerator={AdditionQuestion} />} />
            <Route path="*" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
