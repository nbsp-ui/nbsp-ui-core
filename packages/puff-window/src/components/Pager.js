import { h } from 'preact'
import { ComponentHelper } from '@nbsp-ui/nbsp-ui-core'
import { InformationPage } from '../containers/InformationPage'
import { NotificationPage } from '../containers/NotificationPage'
import './Pager.sass'
import { SettingsPage } from '../containers/SettingsPage'

const composeOffset = selection => ({
  transform: `translateX(-${selection * 100}%)`
})

/**
 * @param props
 * @param {boolean} props.expanded
 * @param {number} props.selection
 * @param {PuffWindowNotification[]} props.notifications
 * @returns {*}
 * @constructor
 */
export const Pager = ({ expanded, selection, notifications }) => {
  const className = ComponentHelper.composeClass(
    'nbsp-ui-pw-pager',
    { use: 'nbsp-ui-pw-pager-expanded', if: expanded }
  )

  return (
    <div className={className}>
      <div
        className="🌶"
        style={{
          ...composeOffset(selection)
        }}
      >
        <NotificationPage
          notifications={notifications}
        />
        <SettingsPage

        />
        <InformationPage

        />
      </div>
    </div>
  )
}