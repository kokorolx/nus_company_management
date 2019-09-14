import React from 'react';
import { connect } from 'react-redux'
import axios from '../../configs/axios';
import { fetchProjects } from '../../requests/requests_projects.js'
import { getProjects } from '../../redux/actions/actions_project.js'


class Project extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      projects: []
    }
  }

  async componentDidMount(){
    const projects = await fetchProjects()
    this.props.getProjects(projects)
  }

  projectRow() {
    return this.props.projects.items.map((project, index) => {
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

const mapStateToProps = state => ({
  projects: state.projects
})

const mapDispatchToProps = {
  getProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
