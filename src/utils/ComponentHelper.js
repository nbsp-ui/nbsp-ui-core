// noinspection JSUnusedGlobalSymbols

import { CompatAlign } from './CompatAlign'

export const ComponentHelper = {
  composeClass: (...properties) => properties.map(property => !property || typeof property === 'string' ? property : property.if && property.use).filter(value => value).join(' '),

  composeStyle: function(props, mappers) {
    const combination = {
      ...this.mappers,
      ...mappers
    }

    return Object.keys(props)
      .filter(key => combination[key])
      .map(key => combination[key])
      .reduce((style, mapper) => ({ ...style, ...mapper(props) }), {})
  },

  extractListeners: props => Object.keys(props).filter(key => key.startsWith('on')).reduce((result, key) => ({
    ...result,
    [key]: props[key]
  }), {}),

  mappers: {
    'vertical': ({ vertical }) => ({ flexDirection: vertical ? 'column' : 'row' }),

    'reversed': ({ vertical, reversed }) => ({
      flexDirection: vertical ? (reversed ? 'column-reverse' : 'column') : (reversed ? 'row-reverse' : 'row')
    }),

    'width': ({ width, height }) => ({
      ...width && {
        width: `${width}px`,
        maxWidth: `${width}px`
      },
      flexBasis: width || height ? 'auto' : 0
    }),

    'height': ({ width, height }) => ({
      ...height && {
        height: `${height}px`,
        maxHeight: `${height}px`
      },
      flexBasis: width || height ? 'auto' : 0
    }),

    'fit': ({ fit }) => ({ ...(fit ? { flexShrink: 0, flexGrow: 0 } : { flexShrink: 1, flexGrow: 1 }) }),

    'padding': ({ padding }) => ComponentHelper.mappers._indent('padding', padding),

    'margin': ({ margin }) => ComponentHelper.mappers._indent('margin', margin),

    _indent: (property, indent) => ({
      ...(indent
        ? {
          [property]: typeof indent === 'string' || typeof indent === 'number'
            ? indent + 'px'
            : `${indent.top || indent.y || 0}px ${indent.right || indent.x || 0}px ${indent.bottom || indent.y || 0}px ${indent.left || indent.x || 0}px`
        }
        : {})
    }),

    'align': ({ align, reversed }) => ({
      justifyContent: match(align, {
        [CompatAlign.Left]: reversed ? 'flex-end' : 'flex-start',
        [CompatAlign.Right]: reversed ? 'flex-start' : 'flex-end',
        [CompatAlign.Center]: 'center',
        [CompatAlign.Justify]: 'space-between'
      })
    }),

    'vAlign': ({ vertical, vAlign }) => ({
      [vertical ? 'justifyContent' : 'alignItems']: match(vAlign, {
        [CompatAlign.Left]: 'flex-start',
        [CompatAlign.Right]: 'flex-end',
        [CompatAlign.Center]: 'center'
      })
    }),

    'hAlign': ({ vertical, hAlign }) => ({
      [vertical ? 'alignItems' : 'justifyContent']: match(hAlign, {
        [CompatAlign.Left]: 'flex-start',
        [CompatAlign.Right]: 'flex-end',
        [CompatAlign.Center]: 'center'
      })
    }),

    'color': ({ color }) => ({ ...(color ? { color } : {}) }),

    'backgroundColor': ({ backgroundColor }) => ({ ...(backgroundColor ? { backgroundColor } : {}) }),

    'borderColor': ({ borderColor }) => ({ ...(borderColor ? { borderColor } : {}) }),

    'fontSize': ({ fontSize }) => ({ ...(fontSize ? { fontSize } : {}) })
  }
}