import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  timeout: 10 * 1000,
})
// response 统一拦截，处理 errno 和 message

instance.interceptors.response.use(res => {
  const resData = (res.data || {}) as ResType
  const { errno, data, msg } = resData
  if (errno !== 0) {
    console.log('errorno', errno)
    if (msg) {
      message.error(msg)
    }
    throw new Error(msg)
  }
  return data as any
})

export default instance

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}
export type ResDataType = {
  [key: string]: any
}
