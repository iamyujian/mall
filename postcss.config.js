module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 667, // 视窗的高度，对应的是我们设计稿的高度（也可以不配置）
      unitPrecision: 5, // 指定'px'转换为视窗单位值得小数位数（很多时候无法整除）
      viewportUnit: 'vw',// 指定需要转换成的视窗单位，建议使用 vw
      selectorBlackList: ['ignore'], // 指定不需要转换的类，可以将类名写到这里，也可以在每个类后面加上ignore
      minPixelValue: 1, // 小于或等于 '1px' 不转换为视窗单位
      mediaQuery: false,  // 允许在媒体查询中转换 px
      exclude: [/TabBar/] // 排除文件名包含 TabBar 的文件，必须是正则来匹配文件
    }
  }
}