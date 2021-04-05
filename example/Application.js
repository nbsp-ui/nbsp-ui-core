import React from 'react'
import { Box, VDivider } from '../src/index'
import './Application.scss'
import { AccordionPanel } from './components/AccordionPanel'
import { ButtonsPanel } from './components/ButtonsPanel'
import { FieldsPanel } from './components/FieldsPanel'
import { Header } from './components/Header'
import { MediaPanel } from './components/MediaPanel'
import { ProgressPanel } from './components/ProgressPanel'
import { SwitchesPanel } from './components/SwitchesPanel'
import { TablePanel } from './components/TablePanel'
import { TabsPanel } from './components/TabsPanel'
import { TagsPanel } from './components/TagsPanel'

export const Application = () =>
  <Box vertical>
    <Header/>
    <ButtonsPanel/>
    <VDivider/>
    <TagsPanel/>
    <FieldsPanel/>
    <SwitchesPanel/>
    <TablePanel/>
    <TabsPanel/>
    <AccordionPanel/>
    <MediaPanel/>
    <ProgressPanel/>
  </Box>