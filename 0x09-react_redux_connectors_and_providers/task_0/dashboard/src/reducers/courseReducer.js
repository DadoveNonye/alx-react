import { Map, fromJS } from "immutable";
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "../actions/courseActionTypes";
import { coursesNormalizer } from "../normalizer";

const initialState = Map({
  courses: Map(),
});

function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalizedData = coursesNormalizer(action.data);
      const coursesMap = fromJS(normalizedData.entities.courses).map((course) =>
        course.set("isSelected", false)
      );
      return state.set("courses", state.get("courses").merge(coursesMap));
    }

    case SELECT_COURSE:
      return state.setIn(["courses", String(action.index), "isSelected"], true);

    case UNSELECT_COURSE:
      return state.setIn(
        ["courses", String(action.index), "isSelected"],
        false
      );

    default:
      return state;
  }
}

export default courseReducer;
