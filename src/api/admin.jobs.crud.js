let getAllJobs = async () => {
  try {
    let response = await axiosInstance.get('admin/allJobs')

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

let getJobById = async id => {
  try {
    let response = await axiosInstance.get(`admin/byId/${id}`)

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

let getJobBySlug = async slug => {
  try {
    let response = await axiosInstance.get(`admin/bySlug/${slug}`)

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

let getMyPostedJobs = async () => {
  try {
    let response = await axiosInstance.get('admin/my-posted-jobs')

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

let createJob = async data => {
  try {
    let response = await axiosInstance.post('admin/create', data)

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

let deleteJob = async id => {
  try {
    let response = await axiosInstance.delete(`admin/delete/${id}`)

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export default {
  getAllJobs,
  getJobById,
  getJobBySlug,
  getMyPostedJobs,
  createJob,
  deleteJob
}
