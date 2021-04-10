import { h } from 'preact'
import { Box, Button, CompatButtonType } from '../../src'
import { LollipopType } from "../../src/components/lollipop/Lollipop";
import { useLollipop } from "../../src/components/lollipop/LollipopProvider"

export const LollipopPanel = () => {
  const lollipop = useLollipop()

  const lollipopDefault = () => lollipop({
    title: "Notification",
    description: 'You are reading the notification',
    indicated: true
  })

  const lollipopWarning = () => lollipop({
    type: LollipopType.Warning,
    title: "Warning",
    description: 'This is the Warning',
    indicated: true
  })

  const lollipopError = () => lollipop({
    type: LollipopType.Error,
    title: "Error",
    description: 'This is the Error',
    indicated: true
  })

  const lollipopSuccess = () => lollipop({
    type: LollipopType.Success,
    title: "Success",
    description: 'This is the Success',
    indicated: true,
    onClick: () => console.log('dismissed')
  })

  return (
    <Box padding={8}>
      <Button margin={{ right: 8 }} type={CompatButtonType.Outline} label="Default" onClick={() => lollipopDefault()}/>
      <Button margin={{ right: 8 }} type={CompatButtonType.Outline} label="Warning" onClick={() => lollipopWarning()}/>
      <Button margin={{ right: 8 }} type={CompatButtonType.Outline} label="Error" onClick={() => lollipopError()}/>
      <Button margin={{ right: 8 }} type={CompatButtonType.Outline} label="Success" onClick={() => lollipopSuccess()}/>
    </Box>
  )
}