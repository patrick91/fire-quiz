import React, { Component } from "react";

import MessageBox from "../../message-box";
import Button from "../../button";

import Wrapper from "./screen";

class ReadyScreen extends Component {
  render() {
    return (
      <Wrapper>
        <MessageBox>The game is ready!</MessageBox>

        <Button>Join!</Button>
      </Wrapper>
    );
  }
}

export default ReadyScreen;
