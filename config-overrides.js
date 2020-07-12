const {
    override,
    fixBabelImports,
    addLessLoader
} = require('customize-cra');

module.exports = override(
    fixBabelImports('import',{
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    // 这里设置less
    // 同时是定制ant-design的主题
    // ant-design 定制主题变量： https://ant.design/docs/react/customize-theme-cn
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#3ca59d',
            '@font-size-base': '12px',
        }
    }),
)