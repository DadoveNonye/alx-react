import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

// Test to check if Login renders without crashing
describe("<Login />", () => {
  it("renders without crashing", () => {
    shallow(<Login />);
  });

  // Test to check if Login renders 2 input tags
  it("renders 2 input tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(2);
  });

  // Test to check if Login renders 2 label tags
  it("renders 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label").length).toBe(2);
  });
});
