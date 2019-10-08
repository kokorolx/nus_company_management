import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../redux/actions/actions_user.js'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

class UserDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }
  componentDidMount(){
    const { id } = this.props.match.params
    this.props.fetchUser(id)
    this.setState({ loading: false })
  }

  tableHeader(user) {
    const renderTableHeader = Object.keys(user).map(header => <th key={ header }>{ header }</th>)
    return (
      <thead>
        <tr>
          { renderTableHeader }
        </tr>
      </thead>
    )
  }

  tableBody(user) {
    return (
      <tbody>
        <td key={ user.id }> { user.id } </td>
        <td key={ user.email }> { user.name } </td>
        <td key={ user.age }> { user.age } </td>
        <td key={ user.gender }> { user.gender } </td>
        <td key={ user.position }> { user.position } </td>
        <td key={ user.company_id }> { user.company_id } </td>
        <td key={ user.projects }> { user.projects && user.projects.map(project => <Link to={`/projects/${ project.id }`}><p>{ project.id }</p></Link>) } </td>
      </tbody>
    )
  }

  render() {
    const currentUser = this.props.currentUser
    const loading = this.state.loading
    return (
      <Fragment>
        { loading ?
          <div>Loading...</div>
          :
            <div className='wrapper user_details'>
              <Table hover striped>
                { this.tableHeader(currentUser) }
                { this.tableBody(currentUser) }
              </Table>
            </div>
         }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
})

const mapDispatchToProps = {
  fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
