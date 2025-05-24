const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true // Changed from 'css' to true
  }),
  addLessLoader({
    // Options for less-loader v5
    javascriptEnabled: true,
    modifyVars: {
      "primary-color": "#dc4478",
      "link-color": "#e91e63",
      "processing-color": "#e91e63"
    }
  })
);