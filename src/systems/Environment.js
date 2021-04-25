export const Environment = {
  _depth: 1,

  setDepth: value => Environment._depth = value,

  getDepth: () => Environment._depth++
}