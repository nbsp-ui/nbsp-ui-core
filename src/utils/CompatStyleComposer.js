import { CompatAlign } from './CompatAlign'

export const CompatStyleComposer = {
  /**
   * @param {{}} props
   * @return {CSSProperties}
   */
  compose: props => Object.keys(props)
    .filter(key => CompatStyleComposer.reducers[key])
    .map(key => CompatStyleComposer.reducers[key])
    .reduce((style, reducer) => reducer(style, props), {}),

  reducers: {
    vertical: (style, { vertical }) => ({
      ...style,
      flexDirection: vertical ? 'column' : 'row'
    }),

    reverse: (style, { vertical, reverse }) => ({
      ...style,
      flexDirection: vertical ? (reverse ? 'column-reverse' : 'column') : (reverse ? 'row-reverse' : 'row')
    }),

    width: (style, { width }) => ({
      ...style,
      width: `${width}px`,
      flexShrink: 0,
      flexGrow: 0
    }),

    height: (style, { height }) => ({
      ...style,
      height: `${height}px`,
      flexShrink: 0,
      flexGrow: 0
    }),

    fit: (style, { fit }) => ({
      ...style,
      ...(fit ? {
        flexShrink: 0,
        flexGrow: 0
      } : {
        flexShrink: 1,
        flexGrow: 1
      })
    }),

    padding: (style, { padding }) => CompatStyleComposer.reducers._indent(style, 'padding', padding),

    margin: (style, { margin }) => CompatStyleComposer.reducers._indent(style, 'margin', margin),

    _indent: (style, property, indent) => ({
      ...style,
      ...(indent
        ? {
          [property]: typeof indent === 'string' || typeof indent === 'number'
            ? indent + 'px'
            : `${indent.top || indent.y || 0}px ${indent.right || indent.x || 0}px ${indent.bottom || indent.y || 0}px ${indent.left || indent.x || 0}px`
        }
        : {})
    }),

    vAlign: (style, { vertical, vAlign }) => ({
      ...style,
      [vertical ? 'justifyContent' : 'alignItems']: match(vAlign, {
        [CompatAlign.Left]: 'flex-start',
        [CompatAlign.Right]: 'flex-end',
        [CompatAlign.Center]: 'center'
      })
    }),

    hAlign: (style, { vertical, hAlign }) => ({
      ...style,
      [vertical ? 'alignItems' : 'justifyContent']: match(hAlign, {
        [CompatAlign.Left]: 'flex-start',
        [CompatAlign.Right]: 'flex-end',
        [CompatAlign.Center]: 'center'
      })
    }),

    color: (style, { color }) => ({
      ...style,
      ...(color ? { color } : {})
    })
  }
}