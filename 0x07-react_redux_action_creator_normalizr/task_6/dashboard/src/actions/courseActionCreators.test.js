// actions.test.js
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  selectCourse,
  unselectCourse,
} from "./actions";

describe("action creators", () => {
  it("selectCourse should create an action to select a course", () => {
    const expectedAction = {
      type: SELECT_COURSE,
      index: 1,
    };
    expect(selectCourse(1)).toEqual(expectedAction);
  });

  it("unselectCourse should create an action to unselect a course", () => {
    const expectedAction = {
      type: UNSELECT_COURSE,
      index: 1,
    };
    expect(unselectCourse(1)).toEqual(expectedAction);
  });
});
