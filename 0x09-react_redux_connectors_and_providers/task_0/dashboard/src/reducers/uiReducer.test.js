import uiReducer from "..reducers/uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./uiActionTypes";

describe("uiReducer", () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it("should return the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should return the initial state when the action SELECT_COURSE is passed", () => {
    const action = { type: "SELECT_COURSE" };
    const state = uiReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it("should change isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    const state = uiReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  // Additional tests for other actions (optional)
  it("should change isNotificationDrawerVisible property when the action HIDE_NOTIFICATION_DRAWER is passed", () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: false,
    };
    const state = uiReducer(
      { ...initialState, isNotificationDrawerVisible: true },
      action
    );
    expect(state).toEqual(expectedState);
  });

  it("should change isUserLoggedIn to true when the action LOGIN_SUCCESS is passed", () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const state = uiReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it("should change isUserLoggedIn to false when the action LOGIN_FAILURE is passed", () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false,
    };
    const state = uiReducer({ ...initialState, isUserLoggedIn: true }, action);
    expect(state).toEqual(expectedState);
  });

  it("should change isUserLoggedIn to false when the action LOGOUT is passed", () => {
    const action = { type: LOGOUT };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false,
    };
    const state = uiReducer({ ...initialState, isUserLoggedIn: true }, action);
    expect(state).toEqual(expectedState);
  });
});
