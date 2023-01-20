import axios from 'axios'

const deta = "https://cors-anywhere.herokuapp.com/https://qty5uh.deta.dev/"

export const api = axios.create({
  baseURL: deta
})