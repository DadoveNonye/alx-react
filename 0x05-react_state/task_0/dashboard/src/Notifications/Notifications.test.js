import { shallow, mount } from "../../config/setupTests";
import { StyleSheetTestUtils } from "aphrodite";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("<Notifications />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
  ];

  const listNotifications2 = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: "HTML" } },
  ];

  it("should should renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should renders correct html", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain("Your notifications");
  });

  it("should rendered when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".menuItem").length).toBe(1);
  });

  it("should rendered when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".Notifications").length).toBe(0);
  });

  it("should rendered when displayDrawer is true", () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={[]} />
    );
    expect(wrapper.find(".menuItem").length).toBe(1);
  });

  it("should check empty array", () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find(".NotificationItem").length).toBe(0);
  });

  it("should check NO array", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".NotificationItem").length).toBe(0);
  });

  it(`Passes spy as markAsRead property and simulates a click on NotificationList component to
	test that spy is called with the right ID`, () => {
    const ConsoleSpy = jest.spyOn(global.console, "log");
    const wrapper = mount(
      <Notifications displayDrawer listNotifications={[]} />
    );
    wrapper.instance().markAsRead(1);
    expect(ConsoleSpy).toHaveBeenCalledWith(`Notification 1 has been read`);
    wrapper.unmount();
  });

  it(`When updating the props of the component with the SAME listNotifications, the component doesn't rerender`, () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    wrapper.setProps({ listNotifications });
    expect(wrapper.find(NotificationItem).length).toBe(2);
  });

  it(`When updating the props of the component with a LONGER listNotifications, the component DOES rerender`, () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    wrapper.setProps({ listNotifications: listNotifications2 });
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });
  test("clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawerSpy = jest.spyOn(
      wrapper.instance(),
      "handleDisplayDrawer"
    );
    wrapper.instance().forceUpdate();

    const notificationsComponent = wrapper.find(Notifications);
    notificationsComponent.dive().find(".menuItem").simulate("click");

    expect(handleDisplayDrawerSpy).toHaveBeenCalled();
  });

  test("clicking on the button calls handleHideDrawer", () => {
    wrapper.setState({ displayDrawer: true });
    const handleHideDrawerSpy = jest.spyOn(
      wrapper.instance(),
      "handleHideDrawer"
    );
    wrapper.instance().forceUpdate();

    const notificationsComponent = wrapper.find(Notifications);
    notificationsComponent
      .dive()
      .find('button[aria-label="close"]')
      .simulate("click");

    expect(handleHideDrawerSpy).toHaveBeenCalled();
  });
});
