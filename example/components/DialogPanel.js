import { h } from 'preact'
import { useState } from "preact/hooks"
import { Box, Button, CompatButtonType, Dialog } from '../../src'
import { CompatAlign } from "../../src/utils/CompatAlign"

export const DialogPanel = () => {

  const [open, setOpen] = useState(false)

  return (
    <Box padding={8}>
      <Button type={CompatButtonType.Outline} label='Dialog' margin={{ right: 8 }} onClick={() => setOpen(!open)}/>
      <Dialog height={200} opened={open} onOpen={() => console.log('opened')} onClose={() => console.log('closed')} onOverlayClick={() => setOpen(!open)}>
        <Box vertical height={200}>
          <span style={{fontSize: '16pt', color: '#757575'}}>Message</span>
          <Box vertical height={150}>
            <p style={{color: '#757575'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </Box>
          <Box hAlign={CompatAlign.Right}>
            <Button margin={{ right: 8 }} type={CompatButtonType.Primary} label={'Confirm'} onClick={() => setOpen(false)}/>
            <Button type={CompatButtonType.Outline} label={'Cancel'} onClick={() => setOpen(false)}/>
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
}