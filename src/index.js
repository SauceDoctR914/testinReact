import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import Root from "Root";
import { BrowserRouter as Router } from "react-router-dom";
// import reducers from "reducers"; //gives us whatever we export from index.js in the reducers directory

ReactDOM.render(
  <Root>
    <Router>
      <App />
    </Router>
  </Root>,
  document.getElementById("root")
);
