// actions.test.js
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import {
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";

describe("action creators", () => {
  it("markAsRead should create an action to mark notification as read", () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index: index,
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  it("setNotificationFilter should create an action to set notification filter", () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: filter,
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
