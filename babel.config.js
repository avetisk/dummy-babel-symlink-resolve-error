module.exports = api => {
  api.cache(false)

  return {
    exclude: /node_modules/,
    plugins: [['@babel/plugin-transform-modules-commonjs']],
  }
}
