import React from "react";
import { render } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom component", () => {
  test("renders BodySection component with correct props", () => {
    const testTitle = "test title";
    const testChildren = <p>test children node</p>;
    const { getByText } = render(
      <BodySectionWithMarginBottom title={testTitle}>
        {testChildren}
      </BodySectionWithMarginBottom>
    );

    // Check if BodySection component is rendered correctly
    const bodySectionComponent = getByText(testTitle);
    expect(bodySectionComponent).toBeInTheDocument();

    // Check if props are passed correctly to BodySection component
    const titleElement = getByText(testTitle);
    expect(titleElement.tagName).toBe("H2");

    const childrenElement = getByText("test children node");
    expect(childrenElement.tagName).toBe("P");
  });
});
