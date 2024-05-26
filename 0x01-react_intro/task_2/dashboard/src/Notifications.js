import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils.js";
import closeIcon from "./images/close-icon.png";

const Notifications = () => {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          className="dangerHtml"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
};
export default Notifications;
