import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Actions } from './Actions'
import { Container } from './components/Container'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './Table.sass'

/**
 * @param {TableProps} props
 * @returns {*}
 * @constructor
 */
export const Table = props => {
  const [state, dispatch] = ReactHelper.useDispatchedState({
      items: [],
      appliedItems: [],
      selection: {},
      columns: []
    },
    {
      at: [
        [[props.data], Actions.SetItems, { items: props.data, filter: props.filter }],
        [[props.columns], Actions.SetColumns, { columns: props.columns }],
        [[props.filter], Actions.FilterItems, { filter: props.filter }],
        [[props.selection], Actions.SelectItems, { selection: props.selection }]
      ],
      on: [
        [
          [Actions.SelectItems, Actions.ToggleItem],
          ({ items, selection }) => props.onItemsSelect && props.onItemsSelect({
            selected: items.filter(({ _id }) => selection[_id]),
            all: items
          })
        ]
      ]
    }
  )

  const className = ComponentHelper.composeClass('nbsp-ui-table', props.className)

  const style = ComponentHelper.composeStyle(props)

  return (
    <div
      className={className}
      style={style}
    >
      <Header
        columns={state.columns}
        items={state.appliedItems}
        headerHeight={props.headerHeight}
        onRefreshRequest={() => dispatch(Actions.Refresh)}
        onSortRequest={column => dispatch(Actions.SortColumn, { column })}
      />
      <Container
        columns={state.columns}
        items={state.appliedItems}
        selection={state.selection}
        rowHeight={props.rowHeight}
        onItemClick={item => {
          dispatch(Actions.ToggleItem, { item, multiselect: props.multiselect })
          props.onItemClick && props.onItemClick(item)
        }}
      />
      {
        state.columns.find(column => column.footer) && (
          <Footer
            columns={state.columns}
            items={state.appliedItems}
            footerHeight={props.footerHeight}
          />
        )}
    </div>
  )
}

Table.defaultProps = {
  fit: false
}