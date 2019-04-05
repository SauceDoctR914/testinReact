import React, { Component } from "react";

class CreateExercise extends Component {
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

export default CreateExercise;
