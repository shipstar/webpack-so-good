counter = 0

module.exports = {
  increment: (step = 1) => {
    return counter += step
  },

  decrement: (step = 1) => {
    return counter -= step
  },

  value: () => {
    return counter
  }
}
