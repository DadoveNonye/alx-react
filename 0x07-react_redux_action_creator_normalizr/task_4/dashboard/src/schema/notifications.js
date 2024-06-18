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
  const normalizedData = normalize(notificationsData.default, [notification]);

  const notificationsByUser = normalizedData.result.reduce((acc, id) => {
    const notification = normalizedData.entities.notifications[id];
    if (notification.author === userId) {
      acc.push(notification.context);
    }
    return acc;
  }, []);

  return notificationsByUser;
}
