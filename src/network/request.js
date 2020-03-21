import axios from 'axios'

export function request(config) {
  // 1.创建 axios 的实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/wh',
    timeout: 5000
  })

  // 2.axios 的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    // console.log(err)
  })

  // 发送真正的网路请求
  return instance(config)
}