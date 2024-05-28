import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders three NotificationItem components", () => {
    const wrapper = shallow(<Notifications />);
    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems).toHaveLength(3);
  });

  it("renders the text Here is the list of notifications", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain("Here is the list of notifications");
  });

  it("first NotificationItem element renders the right html", () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).at(0);
    expect(firstItem.html()).toContain(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const menuItem = wrapper.find(".menuItem");
    expect(menuItem.exists()).toBe(true);
  });

  it("does not display div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    const notificationsDiv = wrapper.find("div.Notifications");
    expect(notificationsDiv.exists()).toBe(false);
  });

  it("displays menu item when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const menuItem = wrapper.find(".menuItem");
    expect(menuItem.exists()).toBe(true);
  });

  it("displays div.Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const notificationsDiv = wrapper.find("div.Notifications");
    expect(notificationsDiv.exists()).toBe(true);
  });
});
