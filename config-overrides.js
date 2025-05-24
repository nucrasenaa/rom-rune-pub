const { override, addWebpackPlugin } = require('customize-cra');

module.exports = override((config) => {
  // Remove ForkTsCheckerWebpackPlugin (TypeScript type checker)
  config.plugins = config.plugins.filter(
    plugin => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
  );
  return config;
});