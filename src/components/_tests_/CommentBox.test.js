import React from "react";
import CommentBox from "components/CommentBox";
import { mount, unmount, update } from "enzyme";
//with full dom make sure to unmount
let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});
it("has a text area and a button", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(1);
});
describe("the text area", () => {
  beforeEach(() => {
    component.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    component.update();
  });

  it("has a text area users can use to type", () => {
    expect(component.find("textarea").prop("value")).toEqual("new comment");
  });
  it("empties text area on submit", () => {
    component.find("form").simulate("submit");
    component.update();
    expect(component.find("textarea").prop("value")).toEqual("");
  });
});
