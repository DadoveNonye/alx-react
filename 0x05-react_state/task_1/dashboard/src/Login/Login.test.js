import { shallow, mount, unmount } from "../../config/setupTests";
import { StyleSheetTestUtils } from "aphrodite";
import WithLoggingHOC from "../HOC/WithLogging";
import Login from "./Login";
import { shallow } from "enzyme";

describe("<Login />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should tests that Login should renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should renders 2 <input> and 2 <label> tags", () => {
    const Example = WithLoggingHOC(() => <Login />);
    const wrapper = mount(<Example />);
    expect(wrapper.find("input").length).toBe(2);
    expect(wrapper.find("label").length).toBe(2);
    wrapper.unmount();
  });

  test("submit button is disabled by default", () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toBe(true);
  });

  test("submit button is enabled after changing the value of both inputs", () => {
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');

    emailInput.simulate("change", { target: { value: "test@example.com" } });
    passwordInput.simulate("change", { target: { value: "password123" } });

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toBe(false);
  });
});
