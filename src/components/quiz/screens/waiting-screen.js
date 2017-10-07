import React, { Component } from "react";

import MessageBox from "../../message-box";

import Wrapper from "./screen";

class WaitingScreen extends Component {
  render() {
    return (
      <Wrapper>
        <MessageBox>Waiting for a game to start.</MessageBox>
      </Wrapper>
    );
  }
}

export default WaitingScreen;
