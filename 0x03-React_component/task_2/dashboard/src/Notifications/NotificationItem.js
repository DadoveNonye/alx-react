import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
  static defaultProps = {
    type: "default",
  };

  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string.isRequired,
    }),
    id: PropTypes.number.isRequired,
    markAsRead: PropTypes.func.isRequired,
  };

  markAsRead = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, value, html } = this.props;

    return (
      <li data-notification-type={type} onClick={this.markAsRead}>
        {value && <p>{value}</p>}
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      </li>
    );
  }
}

export default NotificationItem;
