import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 3000
})

export const realApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 3000
})