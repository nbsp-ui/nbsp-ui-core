import { h } from 'preact'
import { ComponentHelper } from '../../utils/ComponentHelper'
import { ReactHelper } from '../../utils/ReactHelper'
import { Button, CompatButtonType } from '../button/Button'
import { FAIcon } from '../icon-fa/FAIcon'
import { Input } from '../input/Input'
import { Selector } from '../selector/Selector'
import { Spacer } from '../spacer/Spacer'
import { Actions } from './Actions'
import './ValueSelector.sass'

/**
 * @param {ValueSelectorProps} props
 * @returns {*}
 * @constructor
 */
export const ValueSelector = props => {
  const [state, dispatch] = ReactHelper.useDispatchedState({
      items: [],
      appliedItems: [],
      opened: false,
      query: '',
      selection: {},
      label: '',
      icon: ''
    },
    {
      at: [
        [[props.data], Actions.Set, { items: props.data }]
      ]
    }
  )

  const className = ComponentHelper.composeClass(
    'nbsp-ui-value-selector',
    props.className
  )

  return (
    <Selector
      className={className}
      padding={props.padding}
      margin={props.margin}
      label={props.label}
      labelWidth={props.labelWidth}
      value={state.label}
    >
      {
        (props.search || props.multiselect) && (
          <div
            className="header"
          >
            {props.search && (
              <Input
                className="search"
                placeholder="Search..."
                value={state.query}
                onChange={event =>
                  dispatch(Actions.Search, {
                    query: event.currentTarget.value,
                    search: props.search,
                    filter: props.filter
                  })
                }
              />
            )}
            {props.search && props.multiselect && <Spacer size={8}/>}
            {props.multiselect && (
              <Button
                type={CompatButtonType.Icon}
                icon={
                  <FAIcon
                    icon={state.icon}
                    color="#616161"
                  />
                }
                onClick={() => dispatch(Actions.ToggleEntire)}
              />
            )}
          </div>
        )}
      {(props.search || props.multiselect) && <div className="divider"/>}
      {props.header && props.header(state.appliedItems)}
      {props.header && <div className="divider"/>}
      <div className="content">
        {state.appliedItems.map(item => (
          <div
            className={ComponentHelper.composeClass(
              state.selection[item._id] && 'selected'
            )}
            onClick={() => dispatch(Actions.ToggleItem, { item, multiselect: props.multiselect })}
          >
            {props.row(item)}
          </div>
        ))}
      </div>
      {props.footer && <div className="divider"/>}
      {props.footer && props.footer(state.appliedItems)}
    </Selector>
  )
}
