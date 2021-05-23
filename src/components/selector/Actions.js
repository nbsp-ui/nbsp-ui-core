export const Actions = {
  'Toggle': ({ opened }) => ({ opened: !opened }),
  'Close': () => ({ opened: false }),
  'Set': (_, { opened }) => ({ opened })
}

