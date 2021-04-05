import React from 'react'
import { Box, Tabs } from '../../src'

export const TabsPanel = () =>
  <Box>
    <Tabs width={400} margin={{ left: 8, bottom: 8 }}
          onChange={(updatedItem, oldItem) => console.log({ updatedItem, oldItem })}
          onClose={(item) => console.log({ item })}
          tabs={[
            { header: 'Profile', icon: 'fas fa-home' },
            { header: 'Organization', icon: 'fab fa-ethereum', closable: true },
            { header: 'Time', closable: true },
            { header: 'Tasks' }
          ]}
    />
  </Box>