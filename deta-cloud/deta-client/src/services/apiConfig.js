import axios from 'axios'

const deta = "https://qty5uh.deta.dev/"

export const api = axios.create({
  baseURL: deta
})