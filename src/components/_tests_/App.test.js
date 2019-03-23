import React from "react";
import CommentBox from "components/CommentBox";
import App from "../App";
import { shallow } from "enzyme";
import CommentList from "components/CommentList";

let component;

beforeEach(() => {
  component = shallow(<App />);
});
it("shows a comment box", () => {
  expect(component.find(CommentList).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(component.find(CommentList).length).toEqual(1);
});
