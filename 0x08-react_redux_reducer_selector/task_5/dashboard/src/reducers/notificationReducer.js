import { List, fromJS } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "./notificationActionTypes";
import { notificationsNormalizer } from "../normalizer";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";

const initialState = {
  notifications: List(),
  filter: fromJS(NotificationTypeFilters.DEFAULT),
};

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);
      return {
        ...state,
        notifications: state.notifications.merge(
          normalizedData.entities.notifications.map((notification) => ({
            ...notification,
            isRead: false,
          }))
        ),
      };
    }

    case MARK_AS_READ: {
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : notification
        ),
      };
    }

    case SET_TYPE_FILTER: {
      return {
        ...state,
        filter: action.filter,
      };
    }

    default:
      return state;
  }
}

export default notificationReducer;
