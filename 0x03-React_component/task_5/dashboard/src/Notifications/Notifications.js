import React, { Component } from "react";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils.js";
import closeIcon from "./images/close-icon.png";
import NotificationItem from "./NotificationItem.js";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Only update if the length of the new listNotifications is longer than the current one
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  handleButtonClick() {
    console.log("Close button has been clicked");
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className="menuItem">Your notifications</div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{ float: "right" }}
              aria-label="Close"
              onClick={this.handleButtonClick}
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
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default Notifications;
