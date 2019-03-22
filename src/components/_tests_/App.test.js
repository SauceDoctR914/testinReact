import React from "react";
import CommentBox from "../CommentBox";
import App from "../App";
import { shallow } from "enzyme";

it("shows a comment box", () => {
  const component = shallow(<App />);
  expect(component.find(CommentBox).length).toEqual(1);
});
