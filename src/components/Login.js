import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };
  componentDidMount() {}

  login = async obj => {
    let URL;
    let response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
    })
      let jsonRes = await response.json())
      .then(user => {
        if (user.error) {
          this.setState({ errors: true });
        } else {
          localStorage.setItem("jwt", user.jwt);
          if (user.jwt) {
            console.log("user", user);
          }
        }
      })
      .catch(console.error);
  };

  render() {
    return (
      <div>
        <div>gavin</div>
      </div>
    );
  }
}

export default Login;
