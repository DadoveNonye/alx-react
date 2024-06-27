import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";

describe("action creators", () => {
  it("login should create an action to log in a user", () => {
    const email = "test@example.com";
    const password = "password123";
    const expectedAction = {
      type: LOGIN,
      user: {
        email: email,
        password: password,
      },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it("logout should create an action to log out a user", () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });

  it("displayNotificationDrawer should create an action to display the notification drawer", () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it("hideNotificationDrawer should create an action to hide the notification drawer", () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });

  it("dispatches LOGIN and LOGIN_SUCCESS when API returns the right response", async () => {
    const email = "user@example.com";
    const password = "password123";
    const store = mockStore({});
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_SUCCESS },
    ];

    await store.dispatch(loginRequest(email, password));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches LOGIN and LOGIN_FAILURE when API query fails", async () => {
    const email = "user@example.com";
    const password = "password123";
    const store = mockStore({});
    fetchMock.mockRejectOnce(new Error("API is down"));

    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_FAILURE, error: "API is down" },
    ];

    await store.dispatch(loginRequest(email, password));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
