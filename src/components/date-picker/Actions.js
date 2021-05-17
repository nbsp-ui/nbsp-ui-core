export const Actions = {
  'Open': () => ({ opened: true }),
  'Close': () => ({ opened: false }),
  'Toggle': ({ opened }) => ({ opened: !opened }),
  'Select': (_, { date }) => ({
    selectedDate: date,
    opened: false
  })
}