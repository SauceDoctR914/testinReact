import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import Root from "Root";
// import reducers from "reducers"; //gives us whatever we export from index.js in the reducers directory

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root")
);
