import axios from 'axios'

export function request(config) {
  // 1.创建 axios 的实例
  const instance = axios.create({
    baseURL: '接口地址',
    timeout: 5000
  })

  // 2.axios 的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log('来到了response拦截failure中');
    console.log(err);
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
      }
    }
    return err
  })

  // 发送真正的网路请求
  return instance(config)
}