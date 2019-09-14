import React from 'react';
import { Form } from 'reactstrap'

import { Input } from 'reactstrap'
class FormProject extends React.Component {

  render() {
    let project = {}
    if (this.props.type === 'edit_project'){
      project = this.props.project
    }
    return (
      <Form>
        <Input
          onChange={this.props.onChange}
          name='project[name]'
          value={project.name}/>
      </Form>
    )
  }
}

export default FormProject;
