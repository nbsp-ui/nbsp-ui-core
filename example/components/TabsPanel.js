import { h } from 'preact'
import { Box, FAIcon, Tabs } from '../../src'

export const TabsPanel = () =>
  <Box>
    <Tabs margin={{ left: 8, bottom: 8 }}
          onTabSelect={item => console.log({ item })}
          onTabClose={item => console.log({ item })}
          closable
          tabs={[
            { label: 'Profile', icon: <FAIcon icon='fas fa-home'/> },
            { label: 'Organization', icon: <FAIcon icon='fab fa-ethereum'/>, closable: true },
            { label: 'Time', closable: true },
            { label: 'Tasks' }
          ]}
    />
  </Box>