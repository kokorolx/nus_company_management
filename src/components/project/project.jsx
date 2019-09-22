import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { fetchProjects, deleteProject, addNewProject } from '../../redux/actions/actions_project.js'
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import CommonModal from '../common/modal'
import FormProject from './_form_project.jsx'

const ACTION_TYPE = {
  AddProject: 'AddProject',
  EditProject: 'EditProject',
  DeleteProject: 'DeleteProject',
}

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
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  handleAddNew(project){
    this.props.addNewProject(project)
    this.toggle(ACTION_TYPE.AddProject)
  }

  handleEdit(project){
    console.log('confirm edit', project)
  }

  handleOpenDeleteModal(project){
    this.toggle(ACTION_TYPE.DeleteProject)
    this.setState({selectedProject: project})
  }

  confirmDelete(){
    this.props.deleteProject(this.state.selectedProject.id)
    this.toggle(ACTION_TYPE.DeleteProject)
  }

  handleCancle(type) {
    this.toggle(type)
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
    this.props.fetchProjects()
  }

  projectRow() {
    return this.props.projects.items.map((project, index) => {
      return (
        <tr key={project.id}>
          <th scope="row">{index + 1}</th>
          <td><Link to={`/projects/${ project.id }`}>{ project.name }</Link></td>
          <td onClick={this.toggle.bind(this, ACTION_TYPE.EditProject)}>Edit</td>
          <td onClick={this.handleOpenDeleteModal.bind(this, project)}>Delete</td>
        </tr>
      )
    })
  }

  render() {
    return(
      <Fragment>
        <Button onClick={this.toggle.bind(this, ACTION_TYPE.AddProject)}> Add new projects</Button>
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
            toggle={this.toggle.bind(this, ACTION_TYPE.AddProject)}
            modalTitle="Create new project"
            isOpen={this.state.isOpenAddProjectModal}>

            <FormProject
              initialValues={{name: ''}}
              onSubmit={this.handleAddNew}
            />
          </CommonModal>
        }
        {this.state.isOpenEditProjectModal &&
          <CommonModal
            toggle={this.toggle.bind(this, ACTION_TYPE.EditProject)}
            modalTitle="Edit project"
            isOpen={this.state.isOpenEditProjectModal}>
          </CommonModal>
        }
        {this.state.isOpenDeleteProjectModal &&
          <CommonModal
            toggle={this.toggle.bind(this, ACTION_TYPE.DeleteProject)}
            modalTitle='Delete project'
            activeFotterModal={true}
            confirmText='Delete'
            handleConfirm={this.confirmDelete}
            handleCancle={this.handleCancle.bind(this, ACTION_TYPE.DeleteProject)}
            isOpen={this.state.isOpenDeleteProjectModal}>
            <div>
              Delete <b>{this.state.selectedProject.name} </b> project?
            </div>
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
  fetchProjects,
  deleteProject,
  addNewProject,
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
