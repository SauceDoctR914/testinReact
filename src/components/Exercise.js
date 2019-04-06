import React, { Component } from "react";

class Exercise extends Component {
  state = {
    description: this.props.exercise.description,
    date: this.props.exercise.date,
    weight: this.props.exercise.weight,
    reps: this.props.exercise.reps
  };
  handleChecked = () => {
    this.setState(({ completed }) => ({
      completed: !completed
    }));
  };
  render() {
    return (
      <div>
        <div id="description">{this.state.description}</div>
        <div id="date">{this.state.date}</div>
        <div id="weight">{this.state.weight}</div>
        <div id="reps">{this.state.reps}</div>
        <div id="complete">{this.state.complete}</div>
        <input
          name="complete"
          type="checkbox"
          defaultChecked={this.state.complete}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Exercise;
