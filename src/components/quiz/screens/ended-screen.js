import React, { Component } from "react";

import MessageBox from "../../message-box";

import Wrapper from "./screen";

class EndedScreen extends Component {
  render() {
    return (
      <Wrapper>
        <MessageBox>The game has ended.</MessageBox>
      </Wrapper>
    );
  }
}

export default EndedScreen;
