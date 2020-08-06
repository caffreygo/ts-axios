import { AxiosRequestConfig } from './Types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  console.log(123)
  xhr(config)
}

export default axios