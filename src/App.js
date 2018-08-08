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
import SubtractIntegersQuestion from "./utils/SubtractIntegersQuestion";
import RandomIntegersQuestion from "./utils/RandomIntegersQuestion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/game/additionFacts" render={(props) => <Game {...props} key="0" questionGenerator={AdditionQuestion} />} />
            <Route path="/game/subtractionFacts" render={(props) => <Game {...props} key="1" questionGenerator={SubtractionQuestion} />} />
            <Route path="/game/multiplicationFacts" render={(props) => <Game {...props} key="2" questionGenerator={MultiplicationQuestion} />} />
            <Route path="/game/divisionFacts" render={(props) => <Game {...props} key="3" questionGenerator={DivisionQuestion} />} />
            <Route path="/game/randomFacts" render={(props) => <Game {...props} key="4" questionGenerator={RandomFactQuestion} />} />
            <Route path="/game/addIntegers" render={(props) => <Game {...props} key="5" questionGenerator={AddIntegersQuestion} />} />
            <Route path="/game/subtractIntegers" render={(props) => <Game {...props} key="6" questionGenerator={SubtractIntegersQuestion} />} />
            <Route path="/game/multiplyIntegers" render={(props) => <Game {...props} key="7" questionGenerator={MultiplyIntegersQuestion} />} />
            <Route path="/game/divideIntegers" render={(props) => <Game {...props} key="8" questionGenerator={DivideIntegersQuestion} />} />
            <Route path="/game/randomIntegers" render={(props) => <Game {...props} key="9" questionGenerator={RandomIntegersQuestion} />} />
            <Route path="*" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
