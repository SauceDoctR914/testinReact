import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

export default () => {
  let logout = () => localStorage.removeItem("jwt");
  return (
    <div>
      <Switch>
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
        <Route
          exact
          path="/"
          render={routerProps => <Login {...routerProps} />}
        />
      </Switch>
      <div>
        <CommentBox />
        <CommentList />
      </div>
    </div>
  );
};
