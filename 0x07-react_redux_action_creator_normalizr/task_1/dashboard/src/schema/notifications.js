import * as notificationsData from "../../../../notifications.json";

import { schema, normalize } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export default function getAllNotificationsByUser(userId) {
  if (
    !notificationsData ||
    !notificationsData.default ||
    !Array.isArray(notificationsData.default)
  ) {
    return [];
  }

  const normalizedData = normalize(notificationsData.default, [notification]);

  const notificationsByUser = normalizedData.result
    .filter((id) => {
      return normalizedData.entities.notifications[id].author === userId;
    })
    .map((id) => normalizedData.entities.notifications[id].context);

  return notificationsByUser;
}
