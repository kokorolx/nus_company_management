import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { fetchProjects } from '../../requests/requests_projects.js'
import { refreshProjects } from '../../redux/actions/actions_project.js'
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import CommonModal from '../common/modal'

class Project extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      projects: [],
      selectedProject: null,
      isOpenAddProjectModal: false,
      isOpenEditProjectModal: false,
      isOpenDeleteProjectModal: false,
    }

    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddNew(project){
    console.log('confirm add new', project)
  }

  handleEdit(project){
    console.log('confirm edit', project)
  }

  handleDelete(project){
    console.log('confirm delete', project)
  }

  toggle(type) {
    this.setState((state) => {
      return {
        ...state,
        [`isOpen${type}Modal`]: !this.state[`isOpen${type}Modal`]
      }
    })
  }

  async componentDidMount(){
    const projects = await fetchProjects()
    this.props.refreshProjects(projects)
  }

  projectRow() {
    return this.props.projects.items.map((project, index) => {
      return (
        <tr key={project.id}>
          <th scope="row">{index + 1}</th>
          <td><Link to={`/projects/${ project.id }`}>{ project.name }</Link></td>
          <td onClick={this.toggle.bind(this, 'EditProject')}>Edit</td>
          <td onClick={this.toggle.bind(this, 'DeleteProject')}>Delete</td>
        </tr>
      )
    })
  }

  render() {
    return(
      <Fragment>
        <Button onClick={this.toggle.bind(this, 'AddProject')}> Add new projects</Button>
        <Table hover striped>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            { this.projectRow() }
          </tbody>
        </Table>

        {this.state.isOpenAddProjectModal &&
          <CommonModal
            toggle={this.toggle.bind(this, 'AddProject')}
            modalTitle="Create new project"
            isOpen={this.state.isOpenAddProjectModal}>
          </CommonModal>
        }
        {this.state.isOpenEditProjectModal &&
          <CommonModal
            toggle={this.toggle.bind(this, 'EditProject')}
            modalTitle="Edit project"
            isOpen={this.state.isOpenEditProjectModal}>
          </CommonModal>
        }
        {this.state.isOpenDeleteProjectModal &&
          <CommonModal
            toggle={this.toggle.bind(this, 'DeleteProject')}
            modalTitle="Delete project"
            isOpen={this.state.isOpenDeleteProjectModal}>
          </CommonModal>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects
})

const mapDispatchToProps = {
  refreshProjects,
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
