import React, { Component } from "react";

import styled from "styled-components";

import Button from "../../button";

import Wrapper from "./screen";

const QuestionTitle = styled.div`
  width: 80%;
  background-color: #7915a4;
  color: #fde9bb;

  padding: 2rem;

  font-weight: normal;
  font-size: 2rem;
`;

class QuestionScreen extends Component {
  render() {
    const { question } = this.props;

    if (!question) {
      return null;
    }

    return (
      <Wrapper>
        <QuestionTitle
          style={{
            marginBottom: "2rem"
          }}
        >
          <strong>Question:</strong> {question.title}
        </QuestionTitle>

        {question.answers.map(answer => (
          <Button inverted key={answer} style={{ marginBottom: "2rem" }}>
            {answer}
          </Button>
        ))}
      </Wrapper>
    );
  }
}

export default QuestionScreen;
