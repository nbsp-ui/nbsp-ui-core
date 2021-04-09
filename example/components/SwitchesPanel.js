import { h } from 'preact'
import { Box, Checkbox, Switch } from '../../src'
import { CompatAlign } from '../../src/utils/CompatAlign'

export const SwitchesPanel = () =>
  <Box vertical padding={{ x: 8, bottom: 8 }}>
    <Checkbox
      width={400}
      label='Use default settings'
      align={CompatAlign.Justify}
      margin={{ bottom: 8 }}
    />
    <Switch
      width={400}
      label='Enable forced update'
      align={CompatAlign.Justify}
    />
  </Box>