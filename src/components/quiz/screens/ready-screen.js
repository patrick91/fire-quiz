import React, { Component } from "react";

import MessageBox from "../../message-box";
import Button from "../../button";

import Wrapper from "./screen";

class ReadyScreen extends Component {
  render() {
    return (
      <Wrapper>
        <MessageBox
          style={{
            marginBottom: "2rem"
          }}
        >
          The game is ready!
        </MessageBox>

        <Button onClick={this.props.onJoin}>Join!</Button>
      </Wrapper>
    );
  }
}

export default ReadyScreen;
