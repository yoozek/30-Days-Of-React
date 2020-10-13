import React, { Component } from "react";

class EventsPlayground extends Component {
  state = {
    top: 0,
    left: 0,
  };

  handleOnMouseOver = (e) => {
    console.log(window.innerHeight);
    this.setState({
      top: Math.floor(Math.random() * (window.innerHeight - 120)),
      left: Math.floor(Math.random() * (window.innerWidth - 550)),
    });
  };

  render() {
    const elisiveHeaderStyle = {
      backgroundColor: "red",
      position: "absolute",
      top: this.state.top,
      left: this.state.left,
    };

    return (
      <div
        className="elusive-header"
        style={elisiveHeaderStyle}
        onMouseOver={this.handleOnMouseOver}
      >
        <h1>30 days of react</h1>
      </div>
    );
  }
}
export default EventsPlayground;
