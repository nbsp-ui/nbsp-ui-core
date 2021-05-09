import { h } from 'preact'
import { Notification } from './Notification'

/**
 * @param props
 * @param {WindowNotification[]} props.notifications
 * @returns {*}
 * @constructor
 */
export const NotificationPage = ({ notifications }) => {
  return (
    <div className="ui-notification-page">
      {notifications.map(notification => (
        <Notification
          notification={notification}
        />
      ))}
    </div>
  )
}