import React from "react";

import styled from "styled-components";

import WaitingScreen from "./screens/waiting-screen";
import ReadyScreen from "./screens/ready-screen";
import QuestionScreen from "./screens/question-screen";
import EndedScreen from "./screens/ended-screen";

import pattern from "./assets/pattern.svg";

const Wrapper = styled.div`
  background: url(${pattern});
  background-size: 86%;

  max-width: 500px;
  height: 100vh;

  margin: 0 auto;
`;

class Quiz extends React.Component {
  static STEP_WAITING = 0;
  static STEP_READY = 1;
  static STEP_STARTED = 2;
  static STEP_ENDED = 3;

  renderCurrentStep() {
    switch (this.props.step) {
      default:
      case Quiz.STEP_WAITING:
        return <WaitingScreen />;
      case Quiz.STEP_READY:
        return <ReadyScreen onJoin={this.props.onJoin} />;
      case Quiz.STEP_STARTED:
        return <QuestionScreen question={this.props.questions[0]} />;
      case Quiz.STEP_ENDED:
        return <EndedScreen />;
    }
  }

  render() {
    return <Wrapper>{this.renderCurrentStep()}</Wrapper>;
  }
}

export default Quiz;
