import { h } from 'preact'
import { PuffWindow } from '../../src/PuffWindow'

export const Playground = () => {
  return (
    <PuffWindow
      title="Dynamic report"
      notifications={[
        {
          title: 'Lorem ipsum dolor sit amet',
          message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        }
      ]}
    >

    </PuffWindow>
  )
}