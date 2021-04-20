import { h } from 'preact'
import { Box, VDivider } from '../src/index'
import './Application.scss'
import { AccordionPanel } from './components/AccordionPanel'
import { ButtonsPanel } from './components/ButtonsPanel'
import { LollipopPanel } from "./components/LollipopPanel"
import { DialogPanel } from "./components/DialogPanel"
import { FieldsPanel } from './components/FieldsPanel'
import { Header } from './components/Header'
import { MediaPanel } from './components/MediaPanel'
import { PivotPanel } from './components/PivotPanel'
import { ProgressPanel } from './components/ProgressPanel'
import { SliderPanel } from './components/SliderPanel'
import { SwitchesPanel } from './components/SwitchesPanel'
import { TablePanel } from './components/TablePanel'
import { TabsPanel } from './components/TabsPanel'
import { TagsPanel } from './components/TagsPanel'
import { MenuPanel } from './components/MenuPanel'

export const Application = () =>
  <Box vertical>
    <Header/>
    <ButtonsPanel/>
    <LollipopPanel/>
    <DialogPanel/>
    <VDivider/>
    <TagsPanel/>
    <FieldsPanel/>
    <SwitchesPanel/>
    <TablePanel/>
    <TabsPanel/>
    <AccordionPanel/>
    <MediaPanel/>
    <ProgressPanel/>
    <SliderPanel/>
    <MenuPanel/>
    <PivotPanel/>
  </Box>