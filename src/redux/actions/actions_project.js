import { PROJECTS_URL } from '../../configs/request_urls.js'
import axios from '../../configs/axios'


export const PROJECT_ACTIONS = {
  REFRESH_PROJECTS: 'REFRESH_PROJECTS',
  UPDATE_PROJECT_DETAILS: 'UPDATE_PROJECT_DETAILS',
  REMOVE_PROJECT: 'REMOVE_PROJECT',
  ADD_NEW_PROJECT: 'ADD_NEW_PROJECT',
}

export function refreshProjects(projects){
  return {
    type: PROJECT_ACTIONS.REFRESH_PROJECTS,
    payload: {
      projects
    }
  }
}

export function updateProjectDetails(project){
  return {
    type: PROJECT_ACTIONS.UPDATE_PROJECT_DETAILS,
    payload: {
      currentProject: project
    }
  }
}

export function removeProject(projectId){
  return {
    type: PROJECT_ACTIONS.REMOVE_PROJECT,
    payload: {
      projectId
    }
  }
}

export function addProject(project) {
  return {
    type: PROJECT_ACTIONS.ADD_NEW_PROJECT,
    payload: {
      project
    }
  }
}

export const deleteProject = (projectId) => {
  return (dispatch) => {
    return axios.delete(`${PROJECTS_URL}/${projectId}`).then(
      response => {
        dispatch(removeProject(projectId));
      },
      error => {
        alert('There is an issue when delete this project!')
      }
    )
  }
}

export const addNewProject = (project) => {
  return (dispatch) => {
    return axios.post(PROJECTS_URL, { project }).then(
      response => {
        dispatch(addProject(response.data))
      },
      error => {
        alert(error)
      }
    )
  }
}

export const fetchProjects = () => {
  return (dispatch) => {
    return axios.get(`${PROJECTS_URL}`).then(
      response => {
        dispatch(refreshProjects(response.data));
      },
      error => {
        alert('There is an issue when fetch projects')
      }
    )
  }
}

export const fetchProject = (projectId) => {
  return (dispatch) => {
    return axios.get(`${PROJECTS_URL}/${projectId}`).then(
      response => {
        dispatch(updateProjectDetails(response.data));
      },
      error => {
        alert(`There is an issue when fetch project ${projectId}`)
      }
    )
  }
}


