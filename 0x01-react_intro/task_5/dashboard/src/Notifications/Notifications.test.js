import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find("li");
    expect(listItems).toHaveLength(3);
  });

  it("renders the text Here is the list of notifications", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain("Here is the list of notifications");
  });
});
