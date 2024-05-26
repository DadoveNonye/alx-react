import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "./Notifications/Notifications";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";

// Test to check if App renders without crashing
describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  // Test to check if App contains the Notifications component
  it("contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  // Test to check if App contains the Header component
  it("contains the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  // Test to check if App contains the Login component
  it("contains the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  // Test to check if App contains the Footer component
  it("contains the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });
});
