import React from 'react';
import axios from '../../configs/axios';
import { PROJECTS_URL } from '../../configs/RequestURL.js'

class Project extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    axios.get(PROJECTS_URL).then(
      response => {
        console.log(response.data)
        if(response.data.length) {
          this.setState({projects: response.data})
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  projectRow() {
    return this.state.projects.map((project, index) => {
      return (
        <tr key={project.id}>
          <th scope="row">{index + 1}</th>
          <td>{ project.name }</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      )
    })
  }

  render() {
    let projects = this.state.projects

    return(
      <table className="table table-hover">
        <thead className='thead-dark'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Name</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          { this.projectRow() }
        </tbody>
      </table>
    )
  }
}

export default Project;
