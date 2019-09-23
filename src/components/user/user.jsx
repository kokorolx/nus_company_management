import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { fetchUsers, deleteUser, addNewUser, updateUserInformations } from '../../redux/actions/actions_user.js'
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import CommonModal from '../common/modal'
import FormUser from './_form_user.jsx'

const ACTION_TYPE = {
  AddUser: 'AddUser',
  EditUser: 'EditUser',
  DeleteUser: 'DeleteUser',
}

class User extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      users: [],
      selectedUser: null,
      isOpenAddUserModal: false,
      isOpenEditUserModal: false,
      isOpenDeleteUserModal: false,
    }

    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchUsers()
  }
  handleAddNew(user){
    this.props.addNewUser(user)
    this.toggle(ACTION_TYPE.AddUser)
  }

  handleEdit(user){
    this.props.updateUserInformations(user)
    this.toggle(ACTION_TYPE.EditUser)
  }

  handleOpenModal(user, type){
    this.toggle(type)
    this.setState({selectedUser: user})
  }

  confirmDelete(){
    this.props.deleteUser(this.state.selectedUser.id)
    this.toggle(ACTION_TYPE.DeleteUser)
  }

  toggle(type) {
    this.setState((state) => {
      return {
        ...state,
        [`isOpen${type}Modal`]: !this.state[`isOpen${type}Modal`]
      }
    })
  }

  userRow(users) {
    return users.map((user, index) => {
      return (
        <tr key={user.id}>
          <td>{ index + 1 }</td>
          { Object.values(user).map(value => <td>{value.toString()}</td>) }
          <td onClick={this.handleOpenModal.bind(this, user, ACTION_TYPE.EditUser)}>Edit</td>
          <td onClick={this.handleOpenModal.bind(this, user, ACTION_TYPE.DeleteUser)}>Delete</td>
        </tr>
      )
    })
  }

  render() {
    const users = this.props.users.items
    let renderTableHeader = <td></td>
    if(users.length) {
      renderTableHeader = Object.keys(users[0]).map(header => <th key={header}>{ header }</th>)
    }
    return(
      <Fragment>
        <Button onClick={this.toggle.bind(this, ACTION_TYPE.AddUser)}> Add new users</Button>
        <Table hover striped>
          <thead>
            <tr>
              <th scope="col">#</th>
              { renderTableHeader }
              <th scope="col" colSpan='2'>Handle</th>
            </tr>
          </thead>
          { !!users.length &&
            <tbody>
              { this.userRow(users) }
            </tbody>
          }
        </Table>
        { !users.length && <div className="text-center"> Please add new user </div> }

        {this.state.isOpenAddUserModal &&
          <CommonModal
            toggle={this.toggle.bind(this, ACTION_TYPE.AddUser)}
            modalTitle="Create new user"
            activeFotterModal={true}
            handleCancle={this.toggle.bind(this, ACTION_TYPE.AddUser)}
            isOpen={this.state.isOpenAddUserModal}>
            <FormUser
              initialValues={{
                "email": "tamlh1",
                "age": 11,
                "gender": "male",
                "position": "developer",
                "project_ids": []
              }}
              projects={this.props.projects}
              onSubmit={this.handleAddNew}
              submitText='Save'
            />
          </CommonModal>
        }
        {this.state.isOpenEditUserModal &&
          <CommonModal
            toggle={this.toggle.bind(this, ACTION_TYPE.EditUser)}
            modalTitle="Edit user"
            activeFotterModal={true}
            handleCancle={this.toggle.bind(this, ACTION_TYPE.EditUser)}
            isOpen={this.state.isOpenEditUserModal}>
            <FormUser
              initialValues={this.state.selectedUser}
              onSubmit={this.handleEdit}
              submitText='Save'
            />
          </CommonModal>
        }
        {this.state.isOpenDeleteUserModal &&
          <CommonModal
            toggle={this.toggle.bind(this, ACTION_TYPE.DeleteUser)}
            modalTitle='Delete user'
            activeFotterModal={true}
            confirmText='Delete'
            handleConfirm={this.confirmDelete}
            handleCancle={this.toggle.bind(this, ACTION_TYPE.DeleteUser)}
            isOpen={this.state.isOpenDeleteUserModal}>
            <div>
              Delete <b>{this.state.selectedUser.name} </b> user?
            </div>
          </CommonModal>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  projects: state.projects.items
})

const mapDispatchToProps = {
  fetchUsers,
  deleteUser,
  addNewUser,
  updateUserInformations,
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
