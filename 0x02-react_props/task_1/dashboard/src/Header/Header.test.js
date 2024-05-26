import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

// Test to check if Header renders without crashing
describe("<Header />", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  // Test to check if Header renders an img tag
  it("renders an img tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").length).toBe(1);
  });

  // Test to check if Header renders an h1 tag
  it("renders an h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").length).toBe(1);
  });
});
