import axios, { AxiosResponse } from 'axios'

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

request.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (response): AxiosResponse<any, any> {
    return response
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function (error): Promise<any> {
    return Promise.reject(error)
  }
)
