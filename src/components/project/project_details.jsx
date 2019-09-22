import React from 'react'
import { connect } from 'react-redux'
import CommnonTableDetails from '../common/common_table_details.jsx'
import { fetchProject } from '../../redux/actions/actions_project.js'

class ProjectDetails extends React.Component {

  constructor(props) {
    super(props)
  }

  async componentDidMount(){
    const { id } = this.props.match.params
    this.props.fetchProject(id)
  }

  render() {
    return (
      <div className='wrapper project_details'>
        <CommnonTableDetails
          object={this.props.currentProject}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentProject: state.projects.currentProject
})

const mapDispatchToProps = {
  fetchProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
