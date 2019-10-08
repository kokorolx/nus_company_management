import React from 'react'
import { connect } from 'react-redux'
import { fetchProject } from '../../redux/actions/actions_project.js'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

class ProjectDetails extends React.Component {
  componentDidMount(){
    const { id } = this.props.match.params
    this.props.fetchProject(id)
    this.setState({ loading: false })
  }

  tableHeader(project) {
    const renderTableHeader = Object.keys(project).map(header => <th key={ header }>{ header }</th>)
    return (
      <thead>
        <tr>
          { renderTableHeader }
        </tr>
      </thead>
    )
  }

  tableBody(project) {
    return (
      <tbody>
        <td key={ project.id }> { project.id } </td>
        <td key={ project.name }> { project.name } </td>
        <td key={ project.company_id }> { project.company_id } </td>
        <td key={ project.users }> { project.users && project.users.map(user => <Link to={`/users/${ user.id }`}><p>{ user.email }</p></Link>) } </td>
      </tbody>
    )
  }

  render() {
    const currentProject = this.props.currentProject
    return (
      <div className='wrapper project_details'>
        <Table hover striped>
          { this.tableHeader(currentProject) }
          { this.tableBody(currentProject) }
        </Table>
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
