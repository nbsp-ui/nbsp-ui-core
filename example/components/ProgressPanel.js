import { h } from 'preact'
import { useState } from 'preact/hooks'
import {
  Button,
  CompatButtonType,
  FAIcon,
  HBox,
  Input,
  Label,
  List,
  Loader,
  LoaderWrapper,
  Progress,
  Switch,
  Table,
  VBox
} from '../../src'
import { CompatAlign } from '../../src/utils/CompatAlign'
import { MainStorage } from '../storage/MainStorage'

export const ProgressPanel = () => {
  const [progressValue, setProgressValue] = useState(50)
  const [listLoading, setListLoading] = useState(false)

  return (
    <VBox padding={{ x: 8 }} hAlign={CompatAlign.Left}>
      <HBox margin={{ bottom: 8 }} vAlign={CompatAlign.Center}>
        <Label width={140} value="Loader" color="#757575"/>
        <HBox width={430} hAlign={CompatAlign.Center} vAlign={CompatAlign.Center}>
          <Loader size={25} strokeWidth={5}/>
        </HBox>
      </HBox>
      <VBox>
        <Input
          label="Percentage"
          labelWidth={140}
          width={400}
          margin={{ bottom: 8, right: 8 }}
          value={progressValue}
          rule={(value) => Number(value) <= 100}
          onChange={(e) => setProgressValue(e.target.value)}
        />
        <HBox width={400}>
          <HBox width={300} vertical>
            <HBox vAlign={CompatAlign.Center}>
              <Button type={CompatButtonType.Outline} label="20%" margin={{ right: 8 }}
                      onClick={() => setProgressValue(20)}/>
              <Button type={CompatButtonType.Outline} label="40%" margin={{ right: 8 }}
                      onClick={() => setProgressValue(40)}/>
              <Button type={CompatButtonType.Outline} label="60%" margin={{ right: 8 }}
                      onClick={() => setProgressValue(60)}/>
            </HBox>
            <HBox vAlign={CompatAlign.Center}>
              <Button type={CompatButtonType.Outline} label="80%" margin={{ right: 8 }}
                      onClick={() => setProgressValue(80)}/>
              <Button type={CompatButtonType.Outline} label="100%" margin={{ right: 8 }}
                      onClick={() => setProgressValue(100)}/>
              <Button type={CompatButtonType.Outline} label="120%" margin={{ right: 8 }}
                      onClick={() => setProgressValue(120)}/>
            </HBox>
          </HBox>
          <Progress progress={progressValue} radius={40} valueDisplay/>
        </HBox>
      </VBox>
      <Switch
        width={400}
        label="Turn loading"
        align={CompatAlign.Justify}
        margin={{ y: 8 }}
        onChange={(checked) => setListLoading(checked)}
      />
      <LoaderWrapper active={listLoading}>
        <List
          width={400}
          margin={{ bottom: 8 }}
          fontSize={14}
          divided
          row={
            (item) =>
              <HBox vAlign={CompatAlign.Center} margin={{ top: 7, bottom: 7 }} height={20}>
                {
                  (item.value.length > 7 || item.value.length < 7)
                    ?
                    <HBox width={30}>
                      <FAIcon icon="far fa-star"/>
                    </HBox>
                    :
                    <HBox width={30}/>
                }
                <span>{item.value}</span>
              </HBox>
          }
          data={MainStorage.getCountries().slice(0, 6)}
        />
      </LoaderWrapper>
      <LoaderWrapper active={listLoading}>
        <Table
          width={400}
          headerHeight={32}
          footerHeight={32}
          margin={{ bottom: 8 }}
          columns={[
            {
              width: 40,
              header: () => <HBox hAlign={CompatAlign.Center}><Label value="ID"/></HBox>,
              cell: item => <HBox hAlign={CompatAlign.Center}><Label value={item['id']}/></HBox>,
              sort: (a, b) => a['id'] - b['id']
            },
            {
              header: () => <HBox padding={{ x: 8 }}><Label value="Person"/></HBox>,
              cell: item => <HBox padding={{ x: 8 }}><Label value={item['person']}/></HBox>,
              sort: (a, b) => a['person'].localeCompare(b['person'])
            },
            {
              width: 120,
              header: () => <HBox padding={{ x: 8 }}><Label value="Account"/></HBox>,
              cell: item => <HBox padding={{ x: 8 }}><Label value={item['account']}/></HBox>,
              sort: (a, b) => a['account'] - b['account'],
              footer: items => <HBox padding={{ left: 8 }}><Label
                value={items.reduce((result, item) => result + item['account'], 0)}/></HBox>
            },
            {
              width: 80,
              header: () => <HBox hAlign={CompatAlign.Center}><Label value="Remove"/></HBox>,
              cell: () =>
                <HBox hAlign={CompatAlign.Center}>
                  <Button type={CompatButtonType.Icon} icon={<FAIcon icon="far fa-trash-alt"/>}/>
                </HBox>
            }
          ]}
          data={MainStorage.getPersons()}
        />
      </LoaderWrapper>
    </VBox>
  )
}