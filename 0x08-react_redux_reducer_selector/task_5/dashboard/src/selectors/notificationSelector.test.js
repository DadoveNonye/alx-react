import { Map, List } from "immutable";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelectors";

const initialState = Map({
  notificationReducer: Map({
    filter: "DEFAULT",
    notifications: List([
      Map({
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      }),
      Map({
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: true,
      }),
      Map({
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false,
      }),
    ]),
  }),
});

describe("notification selectors", () => {
  it("filterTypeSelected selector works as expected", () => {
    const selectedFilter = filterTypeSelected(initialState);
    expect(selectedFilter).toEqual("DEFAULT");
  });

  it("getNotifications selector returns a List of notifications", () => {
    const notifications = getNotifications(initialState);
    expect(notifications.size).toBe(3);
    expect(notifications.getIn([0, "value"])).toBe("New course available");
    expect(notifications.getIn([1, "value"])).toBe("New resume available");
    expect(notifications.getIn([2, "value"])).toBe("New data available");
  });

  it("getUnreadNotifications selector returns a List of unread notifications", () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    expect(unreadNotifications.size).toBe(2);
    expect(unreadNotifications.getIn([0, "value"])).toBe(
      "New course available"
    );
    expect(unreadNotifications.getIn([1, "value"])).toBe("New data available");
  });
});
