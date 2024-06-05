import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" />);
    expect(wrapper.exists()).toBe(true);
  });

  describe("When isHeader is true", () => {
    it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
      const wrapper = shallow(
        <CourseListRow isHeader={true} textFirstCell="Test" />
      );
      const th = wrapper.find("th");
      expect(th).toHaveLength(1);
      expect(th.prop("colSpan")).toEqual("2");
      expect(th.text()).toEqual("Test");
    });

    it("renders two cells when textSecondCell is present", () => {
      const wrapper = shallow(
        <CourseListRow
          isHeader={true}
          textFirstCell="Test1"
          textSecondCell="Test2"
        />
      );
      const th = wrapper.find("th");
      expect(th).toHaveLength(2);
      expect(th.at(0).text()).toEqual("Test1");
      expect(th.at(1).text()).toEqual("Test2");
    });
  });

  describe("When isHeader is false", () => {
    it("renders correctly two td elements within a tr element", () => {
      const wrapper = shallow(
        <CourseListRow textFirstCell="Test1" textSecondCell="Test2" />
      );
      const td = wrapper.find("td");
      expect(td).toHaveLength(2);
      expect(td.at(0).text()).toEqual("Test1");
      expect(td.at(1).text()).toEqual("Test2");
    });
  });
});
