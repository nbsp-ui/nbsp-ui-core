import { h } from 'preact'
import { VBox, VDivider } from '../src/index'
import './Application.scss'
import { AccordionPanel } from './components/AccordionPanel'
import { ButtonsPanel } from './components/ButtonsPanel'
import { DialogPanel } from './components/DialogPanel'
import { FieldsPanel } from './components/FieldsPanel'
import { LollipopPanel } from './components/LollipopPanel'
import { MediaPanel } from './components/MediaPanel'
import { MenuPanel } from './components/MenuPanel'
import { PivotPanel } from './components/PivotPanel'
import { ProgressPanel } from './components/ProgressPanel'
import { SliderPanel } from './components/SliderPanel'
import { SwitchesPanel } from './components/SwitchesPanel'
import { TablePanel } from './components/TablePanel'
import { TabsPanel } from './components/TabsPanel'
import { TagsPanel } from './components/TagsPanel'

export const Application = () =>
  <VBox>
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
  </VBox>