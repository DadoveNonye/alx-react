import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${this.displayName || "Component"} is mounted`);
    }

    componentWillUnmount() {
      console.log(
        `Component ${this.displayName || "Component"} is going to unmount`
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";
  WithLoggingComponent.displayName = `WithLogging(${displayName})`;

  return WithLoggingComponent;
};

export default WithLogging;
