module.exports = {

  configureWebpack: {    // 表明你要配置的是是哪个配置文件
    resolve: {          // resolve 可以解决一些路径相关的问题
      alias: {          // 配置别名
        // '@': 'src' 默认已经配置了这个别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}