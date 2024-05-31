import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({
  type = "default",
  value,
  html,
  id,
  markAsRead,
}) => {
  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <li data-notification-type={type} onClick={handleClick}>
      {value && <p>{value}</p>}
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;
