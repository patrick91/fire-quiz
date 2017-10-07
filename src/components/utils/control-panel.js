import React, { Component } from "react";

import styled from "styled-components";

import Quiz from "../quiz";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    // flex: 0 0 50%;
  }
`;

class ControlPanel extends Component {
  state = {
    step: Quiz.STEP_WAITING
  };

  changeQuizStep = step => this.setState({ step });

  render() {
    return (
      <Wrapper>
        <div>{this.props.render(this.state)}</div>

        <div>
          <h1>Change quiz step:</h1>

          <button onClick={() => this.changeQuizStep(Quiz.STEP_WAITING)}>
            Waiting
          </button>
          <button onClick={() => this.changeQuizStep(Quiz.STEP_READY)}>
            Ready
          </button>
          <button onClick={() => this.changeQuizStep(Quiz.STEP_STARTED)}>
            Started
          </button>
          <button onClick={() => this.changeQuizStep(Quiz.STEP_ENDED)}>
            Ended
          </button>
        </div>
      </Wrapper>
    );
  }
}

export default ControlPanel;
