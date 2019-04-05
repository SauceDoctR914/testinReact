import React, { Component } from "react";

class WorkoutPlan extends Component {
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
        <form>
          <input name="title" value={this.state.title} />
        </form>
      </div>
    );
  }
}

export default WorkoutPlan;
