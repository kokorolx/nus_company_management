import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { fetchProjects } from '../../requests/requests_projects.js'
import { refreshProjects } from '../../redux/actions/actions_project.js'
import { Table, Button } from 'reactstrap';
import CreateProjectModal from './create_project_modal.jsx'
import EditProjectModal from './edit_project_modal.jsx'

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

    this.toggleAddNewModal = this.toggleAddNewModal.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this)
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this)

    this.handleAddNew = this.handleAddNew.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleAddNew(project){
    console.log('confirm add new', project)
  }

  handleEdit(project){
    console.log('confirm edit', project)
    let projects = this.props.projects.items
  }

  handleDelete(project){
    console.log('confirm delete', project)
  }

  toggleAddNewModal(){
    this.setState((state) => {
      return {
        ...state,
        isOpenAddProjectModal: !state.isOpenAddProjectModal,
      }
    })
  }

  toggleEditModal(project) {
    this.setState((state) => {
      return {
        ...state,
        isOpenEditProjectModal: !state.isOpenEditProjectModal,
        selectedProject: project
      }
    })
  }

  toggleDeleteModal() {
    this.setState((state) => {
      return {
        ...state,
        isOpenDeleteProjectModal: !state.isOpenDeleteProjectModal
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
          <td>{ project.name }</td>
          <td onClick={(e) => this.toggleEditModal(project)}>Edit</td>
          <td onClick={(e) => this.toggleDeleteModal(project)}>Delete</td>
        </tr>
      )
    })
  }

  render() {
    return(
      <Fragment>
        <Button onClick={this.toggleAddNewModal}> Add new projects</Button>
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
          <CreateProjectModal
            handleConfirm={this.handleAddNew}
            handleCancle={this.toggleAddNewModal}
            isOpen={this.state.isOpenAddProjectModal}
            toggle={this.toggleAddNewModal}/>
        }
        {this.state.isOpenEditProjectModal &&
          <EditProjectModal
            handleConfirm={this.handleEdit}
            handleCancle={this.toggleEditModal}
            selectedProject={this.state.selectedProject}
            isOpen={this.state.isOpenEditProjectModal}
            toggle={this.toggleEditModal}/>
        }
        {this.state.isOpenDeleteProjectModal &&
          <CreateProjectModal
            handleConfirm={this.handleDelete}
            handleCancle={this.toggleDeleteModal}
            isOpen={this.state.isOpenDeleteProjectModal}
            toggle={this.toggleDeleteModal}/>
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
