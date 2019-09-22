import React from 'react';
import { Input } from 'reactstrap'

class FormProject extends React.Component {

  render() {
    let project = {}
    if (this.props.type === 'edit_project'){
      project = this.props.project
    }
    return (
      <Input
        onChange={this.props.onChange}
        name='project[name]'
        value={project.name}/>
    )
  }
}

export default FormProject;
