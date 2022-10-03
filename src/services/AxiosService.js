import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 4200
})

export const realApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 4200
})