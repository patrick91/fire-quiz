import React, { Component } from "react";

import Quiz from "./components/quiz";

import ControlPanel from "./components/utils/control-panel";

class App extends Component {
  render() {
    return <ControlPanel render={quiz => <Quiz step={quiz.step} />} />;
  }
}

export default App;
