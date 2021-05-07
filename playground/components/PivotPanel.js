import { h } from 'preact'
import { VBox } from '../../src'
import { PivotTable } from '../../src/components/table-pivot/PivotTable'
import { PivotTableMethod } from '../../src/components/table-pivot/PivotTableMethod'
import { MainStorage } from '../storage/MainStorage'

export const PivotPanel = () => {
  return (
    <VBox>
      <PivotTable
        data={MainStorage.getProducts()}
        fields={{
          rows: ['h', 'i', 'f'],
          columns: [
            { key: 'a', as: [PivotTableMethod.Count] }
          ],
          all: [
            { key: 'a', label: 'Филиал' },
            { key: 'b', label: 'Наименование товара' },
            { key: 'e', label: 'Юр. лицо' },
            { key: 'f', label: 'Поставщик' },
            { key: 'g', label: '№ приходного документа' },
            { key: 'h', label: 'Интернет заказ' },
            { key: 'i', label: 'Бренды' },
            { key: 'j', label: 'Дата документа' },
            { key: 'l', label: 'Тип документа' },
            { key: 'r', label: 'Код товара' },
            { key: 's', label: 'Производитель' },
            { key: 'z', label: 'Штрихкод' },
            { key: 'q', label: 'ИНН' },
            { key: 'x', label: 'CIP-цена' },

            { key: 'u', label: 'Фактический остаток на дату (кол-во)' },
            { key: 'ua', label: 'Фактический остаток на дату (опт с НДС)' }
          ]
        }}
      />
    </VBox>
  )
}