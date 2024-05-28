import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component", () => {
  it("renders CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correctly when listCourses is empty", () => {
    const wrapper = shallow(<CourseList />);
    const courseListRows = wrapper.find(CourseListRow);
    expect(courseListRows).toHaveLength(1); // Only header row should be present
    expect(courseListRows.at(0).props()).toEqual({
      textFirstCell: "Available courses",
      isHeader: true,
    });
  });

  it("renders correctly when listCourses is not provided", () => {
    const wrapper = shallow(<CourseList />);
    const courseListRows = wrapper.find(CourseListRow);
    expect(courseListRows).toHaveLength(1); // Only header row should be present
    expect(courseListRows.at(0).props()).toEqual({
      textFirstCell: "Available courses",
      isHeader: true,
    });
  });

  it("renders the correct content when listCourses is provided", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const courseListRows = wrapper.find(CourseListRow);
    expect(courseListRows).toHaveLength(4); // Header row + 3 course rows
    expect(courseListRows.at(0).props()).toEqual({
      textFirstCell: "Available courses",
      isHeader: true,
    });
    expect(courseListRows.at(1).props()).toEqual({
      textFirstCell: "Course name",
      textSecondCell: "Credit",
      isHeader: true,
    });
    expect(courseListRows.at(2).props()).toEqual({
      textFirstCell: "ES6",
      textSecondCell: 60,
      isHeader: false,
    });
    expect(courseListRows.at(3).props()).toEqual({
      textFirstCell: "Webpack",
      textSecondCell: 20,
      isHeader: false,
    });
    expect(courseListRows.at(4).props()).toEqual({
      textFirstCell: "React",
      textSecondCell: 40,
      isHeader: false,
    });
  });
});
