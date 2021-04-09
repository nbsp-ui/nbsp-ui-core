import { h } from 'preact'
import { Box, Tag } from '../../src'

export const TagsPanel = () =>
  <Box padding={8}>
    <Tag value='Manufacturing' color='#757575' borderColor='#E0E0E0' backgroundColor='#FAFAFA'
         onClick={() => alert('Clicked')}/>
    <Tag value='Finance' color='#FB8C00' borderColor='#FFCC80' backgroundColor='#FFF3E0'/>
    <Tag value='Marketing' color='#E53935' borderColor='#ef9a9a' backgroundColor='#ffebee'/>
    <Tag value='Customer Service' color='#43A047' borderColor='#A5D6A7' backgroundColor='#E8F5E9'/>
    <Tag value='Human Resources' color='#1E88E5' borderColor='#90CAF9' backgroundColor='#E3F2FD'/>
    <Tag value='Procurement' color='#26a69a' onClose={() => alert('Closed')}/>
    <Tag value='Communications' color='#1E88E5'/>
    <Tag value='Legal' color='#FFFFFF' borderColor='#1E88E5' backgroundColor='#1E88E5'/>
  </Box>