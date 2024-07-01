import { Component } from "react";

interface StatefulMessageState {
  message: string;
}

class StatefulMessage extends Component<object, StatefulMessageState> {
  constructor(props: object) {
    super(props);
    this.state = {
      message: "There are three types of people in the world:",
    };
  }

  changeMessage = () => {
    this.setState({ message: "Those who can count and those who can’t." });
  };

  render() {
    return (
      <div className="stateful-message">
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>What?</button>
      </div>
    );
  }
}

export default StatefulMessage;
