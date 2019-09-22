import React from 'react';
import { Input } from 'reactstrap'
import { Formik, Field } from 'formik';

class FormProject extends React.Component {

  render() {
    let project = {}
    if (this.props.type === 'edit_project'){
      project = this.props.project
    }
    return (
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            this.props.onSubmit(values);
            actions.setSubmitting(false);
          }, 500);
        }}
        render={(props: FormikProps<Values>) => (
          <form onSubmit={props.handleSubmit}>
            <Field type="name" name="name" placeholder="Name" />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    )
  }
}

export default FormProject;
