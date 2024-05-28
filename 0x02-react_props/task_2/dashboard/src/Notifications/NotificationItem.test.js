import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

// Set up enzyme
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("NotificationItem component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct html with type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").text()).toEqual("test");
    expect(wrapper.find("li").prop("data-notification-type")).toEqual(
      "default"
    );
  });

  it("renders the correct html with html prop", () => {
    const htmlContent = { __html: "<u>test</u>" };
    const wrapper = shallow(<NotificationItem html={htmlContent} />);
    expect(wrapper.find("li").html()).toContain(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });
});
