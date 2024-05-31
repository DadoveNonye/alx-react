import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import WithLogging from "./WithLogging";

describe("WithLogging HOC", () => {
  let consoleSpy;
  let container = null;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  test("logs mount and unmount for pure HTML element", () => {
    const WrappedElement = () => <div>Hello World</div>;
    const ComponentWithLogging = WithLogging(WrappedElement);

    render(<ComponentWithLogging />, container);

    expect(consoleSpy).toHaveBeenCalledWith("Component is mounted");
    expect(consoleSpy).toHaveBeenCalledWith("Component is going to unmount");
  });

  test("logs mount and unmount for Login component", () => {
    const Login = () => <div>Login Component</div>;
    Login.displayName = "Login"; // Set display name for testing
    const ComponentWithLogging = WithLogging(Login);

    render(<ComponentWithLogging />, container);

    expect(consoleSpy).toHaveBeenCalledWith("Component Login is mounted");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
  });
});
