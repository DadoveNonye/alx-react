import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils.js";
import closeIcon from "./images/close-icon.png";
import NotificationItem from "./NotificationItem.js";

const Notifications = ({ displayDrawer }) => {
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
            <NotificationItem data-priority="default">
              New course available
            </NotificationItem>
            <NotificationItem data-priority="urgent">
              New resume available
            </NotificationItem>
            <NotificationItem
              className="dangerHtml"
              dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </>
  );
};
Notifications.defaultProps = {
  displayDrawer: false,
};
export default Notifications;
