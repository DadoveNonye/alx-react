import React from "react";
import { render } from "@testing-library/react";
import BodySection from "./BodySection";

describe("BodySection component", () => {
  test("renders title and children correctly", () => {
    const testTitle = "test title";
    const testChildren = <p>test children node</p>;
    const { getByText } = render(
      <BodySection title={testTitle}>{testChildren}</BodySection>
    );

    // Check if the title is rendered correctly
    const titleElement = getByText(testTitle);
    expect(titleElement.tagName).toBe("H2");

    // Check if the children are rendered correctly
    const childrenElement = getByText("test children node");
    expect(childrenElement.tagName).toBe("P");
  });
});
