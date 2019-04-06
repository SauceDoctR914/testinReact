import React, { Component } from "react";
import Exercise from "./Exercise";
class WorkoutsContainer extends Component {
  mapWorkouts = () => {
    this.props.workouts.map(exercise => (
      <Exercise key={exercise.name} exercise={exercise} />
    ));
  };
  render() {
    return <div>{this.mapWorkouts()}</div>;
  }
}

export default WorkoutsContainer;
