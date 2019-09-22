import axios from '../configs/axios'
import { PROJECTS_URL } from '../configs/request_urls.js'

export async function fetchProjects() {
  const response = await axios.get(PROJECTS_URL)
  return response.data
}

export async function fetchProject(projectId) {
  const response = await axios.get(`${PROJECTS_URL}/${projectId}`)
  return response.data
}
