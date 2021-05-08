import { h } from 'preact'
import './Notification.sass'

/**
 * @param props
 * @param {PuffWindowNotification} props.notification
 * @returns {*}
 * @constructor
 */
export const Notification = ({ notification }) => {
  return (
    <div className="nbsp-ui-pw-notification">
      <p className="title">
        {notification.title}
      </p>
      <p className="message">
        {notification.message}
      </p>
    </div>
  )
}