import { Component } from "react";

interface DisplayMessageProps {
  message: string;
}

class DisplayMessage extends Component<DisplayMessageProps> {
  render() {
    return <h3 className="display-message">{this.props.message}</h3>;
  }
}

export default DisplayMessage;
