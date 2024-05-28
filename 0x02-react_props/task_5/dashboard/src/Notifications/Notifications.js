import React from "react";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils.js";
import closeIcon from "./images/close-icon.png";
import NotificationItem from "./NotificationItem.js";

const Notifications = ({ displayDrawer, listNotifications }) => {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{ float: "right" }}
            aria-label="Close"
            onClick={handleButtonClick}
          >
            <img src={closeIcon} alt="Close" className="closeicon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul className="NotificationList">
            {listNotifications.length === 0 ? (
              <NotificationItem
                key={0}
                type="default"
                value="No new notification for now"
              />
            ) : (
              listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
};

export default Notifications;
