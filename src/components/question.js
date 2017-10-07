import React, { Component } from "react";

class Question extends Component {
  render() {
    return (
      <div>
        <h1>What is love?</h1>

        <ul>
          <li>
            <button>A</button>
          </li>
          <li>
            <button>B</button>
          </li>
          <li>
            <button>C</button>
          </li>
          <li>
            <button>D</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Question;
