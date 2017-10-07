import React from "react";

import styled from "styled-components";

import Question from "../question";

import WaitingScreen from "./screens/waiting-screen";
import ReadyScreen from "./screens/ready-screen";

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

  renderReady() {
    return (
      <div>
        A quiz is ready, do you want to join?
        <button>Join!</button>
      </div>
    );
  }

  renderStarted() {
    return <Question />;
  }

  renderEnded() {
    return <div>wohoo, the quiz has ended!</div>;
  }

  renderCurrentStep() {
    switch (this.props.step) {
      default:
      case Quiz.STEP_WAITING:
        return <WaitingScreen />;
      case Quiz.STEP_READY:
        return <ReadyScreen />;
      case Quiz.STEP_STARTED:
        return this.renderStarted();
      case Quiz.STEP_ENDED:
        return this.renderEnded();
    }
  }

  render() {
    return <Wrapper>{this.renderCurrentStep()}</Wrapper>;
  }
}

export default Quiz;
