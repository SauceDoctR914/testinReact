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
          <textarea name="description" value={this.state.description} />
          <select
            multiple={true}
            name="weight"
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
          <select
            multiple={true}
            name="reps"
            onChange={this.handleChange}
            value={[
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20
            ]}
          />
          <input
            name="complete"
            type="checkbox"
            defaultChecked={this.state.complete}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateExercise;
