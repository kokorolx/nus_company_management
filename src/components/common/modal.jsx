import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CommonModal extends React.Component {
  render(){
    console.log(this.props.isOpen)
    return(
      <Modal isOpen={this.props.isOpen} className={this.props.className}>
        <ModalHeader onClick={this.props.toggle}>{this.props.modalTitle || 'Modal title'}</ModalHeader>
        <ModalBody>
          { this.props.children }
        </ModalBody>
        {this.props.activeFotterModal &&
          <ModalFooter>
            {this.props.confirmText && <Button color="primary" onClick={this.props.handleConfirm}>{this.props.confirmText}</Button>}
            <Button color="secondary" onClick={this.props.handleCancle} >{this.props.cancelText || 'Cancel'}</Button>
          </ModalFooter>
        }
      </Modal>
    )
  }
}

