import axios from '../configs/axios'
import { PROJECTS_URL } from '../configs/RequestURL.js'

export async function fetchProjects() {
  const response = await axios.get(PROJECTS_URL)
  return response.data
}

