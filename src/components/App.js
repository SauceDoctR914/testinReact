import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

export default () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={routerProps => <HomePage {...routerProps} />}
        />
        <Route
          exact
          path="/workouts"
          render={routerProps => <WorkoutsContainer {...routerProps} />}
        />
        <div>
          <CommentBox />
          <CommentList />
        </div>
      </Switch>
      <div>
        <CommentBox />
        <CommentList />
      </div>
    </div>
  );
};
