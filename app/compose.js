const compose = (...fns) => fns.reduce((f, g) => (...args) =>
  g ? f(g(...args)) : f(...args),
  fn => async (req, res) => fn(req, res)
)

module.exports = compose