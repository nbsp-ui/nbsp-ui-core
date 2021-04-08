import React from 'react'
import { Box, FAIcon, Tabs } from '../../src'

export const TabsPanel = () =>
  <Box>
    <Tabs width={400} margin={{ left: 8, bottom: 8 }}
          onChange={(updatedItem, oldItem) => console.log({ updatedItem, oldItem })}
          onClose={(item) => console.log({ item })}
          tabs={[
            { label: 'Profile', icon: <FAIcon icon='fas fa-home'/> },
            { label: 'Organization', icon: <FAIcon icon='fab fa-ethereum'/>, closable: true },
            { label: 'Time', closable: true },
            { label: 'Tasks' }
          ]}
    />
  </Box>