import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Box, Input, Slider } from '../../src'
import { CompatAlign } from '../../src/utils/CompatAlign'

export const SliderPanel = () => {
  const [simpleSliderValue, setSimpleSliderValue] = useState(100)
  const [simpleSliderStep, setSimpleSliderStep] = useState(10)
  const [simpleSliderDots, setSimpleSliderDots] = useState([0, 100, 220, 333, 500, 750, 1000])
  const [simpleSliderMarks, setSimpleSliderMarks] = useState([0, 100, 220, 333, 500, 750, 1000])
  const [simpleSliderMin, setSimpleSliderMin] = useState(0)
  const [simpleSliderMax, setSimpleSliderMax] = useState(1000)

  const [rangeFirstValue, setRangeFirstValue] = useState(10)
  const [rangeSecondValue, setRangeSecondValue] = useState(90)

  return (
    <Box vertical width={400} margin={{ top: 16, left: 8 }} padding={{ x: 8 }} hAlign={CompatAlign.Center} vAlign={CompatAlign.Center}>
      <Box vertical margin={{ bottom: 8 }}>
        <Box>
          <Input
            margin={{ right: 8, bottom: 8 }} label="Value" labelWidth={40} value={simpleSliderValue}
            onChange={({ target }) => setSimpleSliderValue(target.value)} />
          <Input margin={{ right: 8, bottom: 8 }} label="Step" labelWidth={40} value={simpleSliderStep}
                 onChange={({ target }) => setSimpleSliderStep(target.value)} />
        </Box>
        <Box>
          <Input margin={{ right: 8, bottom: 8 }} label="Dots" labelWidth={40} value={simpleSliderDots}
                 onChange={({ target }) => setSimpleSliderDots(target.value.split(','))} />
          <Input margin={{ right: 8, bottom: 8 }} label="Marks" labelWidth={40} value={simpleSliderMarks}
                 onChange={({ target }) => setSimpleSliderMarks(target.value.split(','))} />
        </Box>
        <Box>
          <Input margin={{ right: 8, bottom: 8 }} label="Min" labelWidth={40} value={simpleSliderMin}
                 onChange={({ target }) => setSimpleSliderMin(target.value)} />
          <Input margin={{ right: 8, bottom: 8 }} label="Max" labelWidth={40} value={simpleSliderMax}
                 onChange={({ target }) => setSimpleSliderMax(target.value)} />
        </Box>
      </Box>
      <Slider
        width={300}
        margin={{ left: -8, bottom: 16 }}
        min={simpleSliderMin}
        max={simpleSliderMax}
        step={simpleSliderStep}
        values={[simpleSliderValue]}
        dots={simpleSliderDots}
        marks={simpleSliderMarks}
        onChange={(value) => setSimpleSliderValue(value)}
      />
      <Box margin={{ bottom: 16 }}>
        <Input margin={{ right: 8 }} label="x1" value={rangeFirstValue}
               onChange={({ target }) => setRangeFirstValue(target.value)} />
        <Input margin={{ right: 8 }} label="x2" value={rangeSecondValue}
               onChange={({ target }) => setRangeSecondValue(target.value)} />
      </Box>
      <Slider
        width={300}
        margin={{ left: -8 }}
        min={0}
        max={100}
        range
        values={[rangeFirstValue, rangeSecondValue]}
        marks={[0, 100]}
        onChange={(value) => setRangeFirstValue(Math.round(value))}
        onSecondChange={(value) => setRangeSecondValue(Math.round(value))}
      />
    </Box>
  )
}