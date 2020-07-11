

const {
  override,
  addLessLoader,
  fixBabelImports,
  addDecoratorsLegacy
} = require('customize-cra')
const modifyVars = './lessVars.js'

module.exports=override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars,
    }
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style: true,
  }),
  addDecoratorsLegacy()

)