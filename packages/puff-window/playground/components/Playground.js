import { FAIcon } from '@nbsp-ui/nbsp-ui-core'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { PuffWindow } from '../../src/PuffWindow'
import { NotificationPage } from '../containers/NotificationPage'
import './Playground.sass'

export const Playground = () => {
  const [notifications] = useState([
    {
      title: 'Lorem ipsum dolor sit amet',
      message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
  ])

  return (
    <PuffWindow
      title="Dynamic report"
      pages={[
        {
          icon: <FAIcon icon="far fa-bell"/>,
          content: (
            <NotificationPage
              notifications={notifications}
            />
          )
        },
        {
          icon: <FAIcon icon="fas fa-cog"/>
        },
        {
          icon: <FAIcon icon="fas fa-info"/>
        }
      ]}
    >

    </PuffWindow>
  )
}