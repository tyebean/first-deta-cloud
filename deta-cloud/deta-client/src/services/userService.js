import { api } from './apiConfig.js'

export const createUser = async (data) => {
  const res = await api.post('/users', data)
  return res.data
}

export const getAllUsers = async () => {
  const res = await api.get('/users')
  return res.data
}

export const getUser = async (user_key) => {
  const res = await api.get(`/users/${user_key}`)
  return res.data
}

export const updateUser = async (user_key, updateUser) => {
  const res = await api.put(`/users/${user_key}`, {user: updateUser})
  return res.data
}

export const deleteUser = async (user_key) => {
  const res = await api.delete(`/users/${user_key}`)
  return res.data
}