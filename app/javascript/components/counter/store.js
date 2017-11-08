counter = 0

module.exports = {
  increment: (step = 1) => {
    return counter += step
  },

  decrement: (step = 1) => {
    return counter -= step
  },

  change: (amount) => {
    return counter += amount
  },

  value: () => {
    return counter
  }
}
