import React, { Component } from "react";

import Quiz from "./components/quiz";

import FirebaseQuiz from "./containers/firebase-quiz";

class App extends Component {
  render() {
    return <FirebaseQuiz render={quiz => <Quiz {...quiz} />} />;
  }
}

export default App;
