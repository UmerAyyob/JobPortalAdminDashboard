/*Job Application */
let applyToJob = async (jobId, data) => {
  try {
    let response = await axiosInstance.post(`admin/${jobId}/apply`, data)

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

let getApplicationsForMyJobs = async () => {
  try {
    let response = await axiosInstance.get('admin/my-posted-job-applications')

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

let updateJobApplicationStatus = async (applicationId, data) => {
  try {
    let response = await axiosInstance.patch(`admin/application/${applicationId}/status`, data)

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

let getMyJobApplications = async () => {
  try {
    let response = await axiosInstance.get('admin/my-applications')

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export default {
  applyToJob,
  getApplicationsForMyJobs,
  updateJobApplicationStatus,
  getMyJobApplications
}
