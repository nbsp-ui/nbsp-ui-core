import { ComponentHelper } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import { Notification } from './Notification'
import './NotificationPage.sass'

/**
 * @param props
 * @param {PuffWindowNotification[]} props.notifications
 * @returns {*}
 * @constructor
 */
export const NotificationPage = ({ notifications }) => {
  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw-notification-page'
  )

  return (
    <div className={className}>
      {notifications.map(notification => (
        <Notification
          notification={notification}
        />
      ))}
    </div>
  )
}