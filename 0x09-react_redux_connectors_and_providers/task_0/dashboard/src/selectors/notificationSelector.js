import { createSelector } from "reselect";

export const filterTypeSelected = (state) =>
  state.notificationReducer.get("filter");

export const getNotifications = (state) =>
  state.notificationReducer.get("notifications");

export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) =>
    notifications.filter((notification) => !notification.get("isRead"))
);
