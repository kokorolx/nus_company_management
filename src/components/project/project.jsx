import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { fetchProjects, deleteProject, addNewProject, updateProjectInformations } from '../../redux/actions/actions_project.js'
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

  componentDidMount(){
    this.props.fetchProjects()
  }
  handleAddNew(project){
    this.props.addNewProject(project)
    this.toggle(ACTION_TYPE.AddProject)
  }

  handleEdit(project){
    this.props.updateProjectInformations(project)
    this.toggle(ACTION_TYPE.EditProject)
  }

  handleOpenModal(project, type){
    this.toggle(type)
    this.setState({selectedProject: project})
  }

  confirmDelete(){
    this.props.deleteProject(this.state.selectedProject.id)
    this.toggle(ACTION_TYPE.DeleteProject)
  }

  toggle(type) {
    this.setState((state) => {
      return {
        ...state,
        [`isOpen${type}Modal`]: !this.state[`isOpen${type}Modal`]
      }
    })
  }

  projectRow(projects) {
    return projects.map((project, index) => {
      return (
        <tr key={project.id}>
          <th scope="row">{index + 1}</th>
          <td><Link to={`/projects/${ project.id }`}>{ project.name }</Link></td>
          <td onClick={this.handleOpenModal.bind(this, project, ACTION_TYPE.EditProject)}>Edit</td>
          <td onClick={this.handleOpenModal.bind(this, project, ACTION_TYPE.DeleteProject)}>Delete</td>
        </tr>
      )
    })
  }

  render() {
    const projects = this.props.projects.items
    return(
      <Fragment>
        <Button onClick={this.toggle.bind(this, ACTION_TYPE.AddProject)}> Add new projects</Button>
        <Table hover striped>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col" colSpan='2'>Handle</th>
            </tr>
          </thead>
          { !!projects.length &&
            <tbody>
              { this.projectRow(projects) }
            </tbody>
          }
        </Table>
        { !projects.length && <div className="text-center"> Please add new project </div> }

        {this.state.isOpenAddProjectModal &&
          <CommonModal
            toggle={this.toggle.bind(this, ACTION_TYPE.AddProject)}
            modalTitle="Create new project"
            activeFotterModal={true}
            handleCancle={this.toggle.bind(this, ACTION_TYPE.AddProject)}
            isOpen={this.state.isOpenAddProjectModal}>
            <FormProject
              initialValues={{name: ''}}
              onSubmit={this.handleAddNew}
              submitText='Save'
            />
          </CommonModal>
        }
        {this.state.isOpenEditProjectModal &&
          <CommonModal
            toggle={this.toggle.bind(this, ACTION_TYPE.EditProject)}
            modalTitle="Edit project"
            activeFotterModal={true}
            handleCancle={this.toggle.bind(this, ACTION_TYPE.EditProject)}
            isOpen={this.state.isOpenEditProjectModal}>
            <FormProject
              initialValues={this.state.selectedProject}
              onSubmit={this.handleEdit}
              submitText='Save'
            />
          </CommonModal>
        }
        {this.state.isOpenDeleteProjectModal &&
          <CommonModal
            toggle={this.toggle.bind(this, ACTION_TYPE.DeleteProject)}
            modalTitle='Delete project'
            activeFotterModal={true}
            confirmText='Delete'
            handleConfirm={this.confirmDelete}
            handleCancle={this.toggle.bind(this, ACTION_TYPE.DeleteProject)}
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
  updateProjectInformations,
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
