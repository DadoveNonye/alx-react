import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

// Test to check if Footer renders without crashing
describe("<Footer />", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  // Test to check if Footer renders the text "Copyright"
  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes("Copyright")).toBe(true);
  });
});
