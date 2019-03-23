import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
//with full dom make sure to unmount
let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});
it("has a text area and a button", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(1);
});
