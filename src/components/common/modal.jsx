import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CommonModal extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.isOpen)
    return(
      <Modal isOpen={this.props.isOpen} className={this.props.className}>
        <ModalHeader onClick={this.props.toggle}>{this.props.modalTitle}</ModalHeader>
        <ModalBody>
          { this.props.children }
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.handleConfirm}>Do Something</Button>
          <Button color="secondary" onClick={this.props.handleCancle} >Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

