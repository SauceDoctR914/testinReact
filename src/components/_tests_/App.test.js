import React from "react";
import CommentBox from "../CommentBox";
import App from "../App";
import { shallow } from "enzyme";
import CommentList from "../CommentList";

it("shows a comment box", () => {
  const component = shallow(<App />);

  expect(component.find(CommentList).length).toEqual(1);
});
it("shows a comment list", () => {
  expect(component.find(CommentList).length).toEqual(1);
});
