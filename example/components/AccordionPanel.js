import { h } from 'preact'
import { Accordion, Box, Switch, Tag } from '../../src'
import { CompatAlign } from '../../src/utils/CompatAlign'

export const AccordionPanel = () =>
  <Box vertical padding={{ x: 8 }}>
    <Accordion collapsed width={400} contentHeight={150} margin={{ bottom: 8 }} header={'First'}>
      <div style={{ color: '#9E9E9E', fontSize: '0.95em' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </div>
    </Accordion>
    <Accordion collapsed width={400} contentHeight={150} margin={{ bottom: 8 }} header={'Second'}>
      <div style={{ color: '#9E9E9E', fontSize: '0.95em' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </div>
    </Accordion>
    <Accordion collapsed width={400} contentHeight={150} margin={{ bottom: 8 }} header={'Third'}>
      <Switch
        width={400}
        label='Third switch'
        align={CompatAlign.Justify}
        margin={{ bottom: 8 }}
        onChange={(checked) => setListLoading(checked)}
      />
      <Tag value='Third tag' color='#1E88E5' width={50}/>
    </Accordion>
  </Box>