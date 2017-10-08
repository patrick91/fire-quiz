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
    return (
      <Wrapper>
        <QuestionTitle
          style={{
            marginBottom: "2rem"
          }}
        >
          <strong>Question:</strong>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, culpa
          ea.
        </QuestionTitle>

        <Button inverted style={{ marginBottom: "2rem" }}>Answer A!</Button>
        <Button inverted style={{ marginBottom: "2rem" }}>Answer B!</Button>
        <Button inverted style={{ marginBottom: "2rem" }}>Answer C!</Button>
        <Button inverted>Answer D!</Button>
      </Wrapper>
    );
  }
}

export default QuestionScreen;
