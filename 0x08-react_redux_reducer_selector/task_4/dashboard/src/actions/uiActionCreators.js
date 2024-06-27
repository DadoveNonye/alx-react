import { bindActionCreators } from "redux";

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

// Action Creators
export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email: email,
      password: password,
    },
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login(email, password));

    try {
      const response = await fetch("/login-success.json");

      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        const error = await response.json();
        dispatch(loginFailure(error.message || "Login failed"));
      }
    } catch (error) {
      dispatch(loginFailure(error.message || "Login failed"));
    }
  };
}
// Binding the action creators
export const boundUiActions = (dispatch) =>
  bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer,
      loginSuccess,
      loginFailure,
      loginRequest,
    },
    dispatch
  );
