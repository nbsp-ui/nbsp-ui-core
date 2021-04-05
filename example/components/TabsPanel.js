import React from 'react'
import { Box, Tabs } from '../../src'

export const TabsPanel = () =>
  <Box>
    <Tabs width={400} margin={{ bottom: 8 }}
          onChange={(updatedItem, oldItem) => console.log({ updatedItem, oldItem })}
          onClose={(item) => console.log({ item })}
          tabs={[
            { header: 'Main', icon: 'fas fa-home' },
            { header: 'Second', icon: 'fab fa-ethereum', closable: true },
            { header: 'Optional', closable: true },
            { header: 'Extra' }
          ]}
    />
  </Box>