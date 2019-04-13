import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import SignUp from "components/SignUp";
import Login from "components/Login";
import HomePage from "components/HomePage";
import WorkoutsContainer from "components/WorkoutsContainer";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

export default () => {
  let logout = () => localStorage.removeItem("jwt");
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={routerProps => <Login {...routerProps} />}
        />
        <Route
          exact
          path="/signup"
          render={routerProps => <SignUp {...routerProps} />}
        />
        <Route
          exact
          path="/homepage"
          render={routerProps => <HomePage {...routerProps} />}
        />
        <Route
          exact
          path="/workouts"
          render={routerProps => <WorkoutsContainer {...routerProps} />}
        />
      </Switch>
      <div>
        <CommentBox />
        <CommentList />
      </div>
    </div>
  );
};
