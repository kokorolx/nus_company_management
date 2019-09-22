import React from 'react'
import { connect } from 'react-redux'
import CommnonTableDetails from '../common/common_table_details.jsx'
import { fetchProject } from '../../requests/requests_projects.js'
import { updateProjectDetails } from '../../redux/actions/actions_project.js'

class ProjectDetails extends React.Component {

  constructor(props) {
    super(props)
  }

  async componentDidMount(){
    const { id } = this.props.match.params
    const project = await fetchProject(id)
    this.props.updateProjectDetails(project)
  }

  render() {
    return (
      <div className='wrapper project_details'>
        <CommnonTableDetails
          object={this.props.project}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  project: state.projects.projectDetails
})

const mapDispatchToProps = {
  updateProjectDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
