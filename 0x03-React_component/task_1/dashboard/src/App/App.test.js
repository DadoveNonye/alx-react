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

  // Test to check that CourseList is not displayed when isLoggedIn is false
  it("does not contain the CourseList component when isLoggedIn is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  // Test to check if App contains the CourseList component when isLoggedIn is true
  describe("when isLoggedIn is true", () => {
    it("does not contain the Login component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login).length).toBe(0);
    });

    it("contains the CourseList component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });
  describe("App Component", () => {
    it("calls logOut and displays alert when Control + H keys are pressed", () => {
      const logOutMock = jest.fn();
      const alertMock = jest
        .spyOn(window, "alert")
        .mockImplementation(() => {});

      const wrapper = shallow(<App isLoggedIn={true} logOut={logOutMock} />);

      // Simulate keydown event
      const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
      document.dispatchEvent(event);

      expect(logOutMock).toHaveBeenCalledTimes(1);
      expect(alertMock).toHaveBeenCalledWith("Logging you out");

      alertMock.mockRestore();
    });
  });
});
