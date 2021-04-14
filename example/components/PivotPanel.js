import { h } from 'preact'
import { Box } from '../../src'
import { ColumnAggregation } from '../../src/components/table-pivot/ColumnAggregation'
import { PivotTable } from '../../src/components/table-pivot/PivotTable'
import { MainStorage } from '../storage/MainStorage'

export const PivotPanel = () => {
  return (
    <Box vertical>
      <PivotTable
        data={MainStorage.getProducts()}
        fields={{
          rows: ['h', 'i', 'f'],
          columns: [
            { key: 'u', label: 'Фактический остаток на дату (кол-во)', as: ColumnAggregation.Sum }
          ]
        }}
      />
    </Box>
  )
}