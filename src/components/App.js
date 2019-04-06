import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
export default () => {
  return (
    <React.Fragment>
      <div>
        <CommentBox />
        <CommentList />
      </div>
    </React.Fragment>
  );
};
