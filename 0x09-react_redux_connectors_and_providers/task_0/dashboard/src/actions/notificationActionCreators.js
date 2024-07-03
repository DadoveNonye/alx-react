import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { bindActionCreators } from "redux";

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index: index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
}

export const boundNotificationActions = (dispatch) =>
  bindActionCreators(
    {
      markAsRead,
      setNotificationFilter,
    },
    dispatch
  );
