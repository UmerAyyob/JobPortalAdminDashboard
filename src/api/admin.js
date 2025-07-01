import { axiosInstance } from './axios.Instance'

let registerAdmin = async data => {
  try {
    let response = await axiosInstance.post('admin/register', data)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}
let loginAdmin = async data => {
  try {
    let response = await axiosInstance.post('admin/login', data)
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}
let logoutAdmin = async data => {
  try {
    let response = await axiosInstance.post('admin/logout')
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export default {
  registerAdmin,
  loginAdmin,
  logoutAdmin
}
