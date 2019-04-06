import React, { Component } from "react";

class Exercise extends Component {
  state = {
    description: this.props.exercise.description,
    date: this.props.exercise.date,
    weight: this.props.exercise.weight,
    reps: this.props.exercise.reps
  };
  render() {
    return (
      <div>
        <div id="description">{this.state.description}</div>
        <div id="date">{this.state.date}</div>
        <div id="weight">{this.state.weight}</div>
        <div id="reps">{this.state.reps}</div>
        <div id="complete">{this.state.complete}</div>
      </div>
    );
  }
}

export default Exercise;
