import React from 'react';
import { Form } from 'reactstrap'

import CommonModal from '../common/modal'
import FromProject from './_form_project'

class CreateProjectModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <CommonModal
        toggle={this.props.toggle}
        modalTitle="Create new project"
        handleConfirm={this.props.handleConfirm}
        handleCancle={this.props.handleCancle}
        isOpen={this.props.isOpen}>
        <FromProject
          type="create_project"
        />
      </CommonModal>
    )
  }
}

export default CreateProjectModal;
