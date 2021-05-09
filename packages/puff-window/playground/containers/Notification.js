import { h } from 'preact'
import './Notification.sass'

/**
 * @param props
 * @param {WindowNotification} props.notification
 * @returns {*}
 * @constructor
 */
export const Notification = ({ notification }) => {
  const { title, message } = notification

  return (
    <div className="ui-window-notification">
      <p className="title">
        {title}
      </p>
      <p className="message">
        {message}
      </p>
    </div>
  )
}