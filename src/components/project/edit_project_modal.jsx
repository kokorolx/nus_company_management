import React from 'react';

import CommonModal from '../common/modal'
import FromProject from './_form_project'

class EditProjectModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: props.selectedProject,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm(){
    this.props.handleConfirm(this.state.project)
  }

  handleOnChange(e) {
    this.setState({
      project: {...this.state.project, name: e.target.value}
    })
  }

  render() {
    return(
      <CommonModal
        toggle={this.props.toggle}
        modalTitle="Edit project"
        handleConfirm={this.handleConfirm}
        handleCancle={this.props.handleCancle}
        isOpen={this.props.isOpen}>
        <FromProject
          type='edit_project'
          project={this.state.project}
          onChange={this.handleOnChange}
        />
      </CommonModal>
    )
  }
}

export default EditProjectModal;
