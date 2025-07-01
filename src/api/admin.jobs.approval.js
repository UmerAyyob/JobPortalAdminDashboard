/*Job Approval */
let approveJob = async id => {
  try {
    let response = await axiosInstance.patch(`admin/approve/${id}`)

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

let getUnapprovedJobs = async () => {
  try {
    let response = await axiosInstance.get('admin/unapprovedJobs')

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export default {
  approveJob,
  getUnapprovedJobs
}
