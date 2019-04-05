import React, { Component } from "react";

class CreateExercise extends Component {
  state = {
    description: "",
    date: "",
    weight: null,
    reps: null,
    complete: false
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input name="title" value={this.state.title} />
          <select
            multiple={true}
            onChange={this.handleChange}
            value={[
              5,
              10,
              15,
              20,
              25,
              30,
              35,
              40,
              45,
              50,
              55,
              60,
              65,
              70,
              75,
              80,
              85,
              90,
              95,
              100
            ]}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateExercise;
