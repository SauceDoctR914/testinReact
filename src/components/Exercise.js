import React, { Component } from "react";

class Exercise extends Component {
  state = {
    description: "",
    date: "",
    weight: null,
    reps: null,
    complete: false
  };
  render() {
    return (
      <div>
        <div>{this.state.description}</div>
        <div>{this.state.date}</div>
        <div>{this.state.weight}</div>
        <div>{this.state.reps}</div>
        <div>{this.state.complete}</div>
      </div>
    );
  }
}

export default Exercise;
