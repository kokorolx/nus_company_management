import React from 'react';
import { Input } from 'reactstrap'
import { Formik, Field } from 'formik';

class FormProject extends React.Component {

  render() {
    return (
      <Formik
        initialValues={this.props.initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            this.props.onSubmit(values);
            actions.setSubmitting(false);
          }, 500);
        }}
        render={(props: FormikProps<Values>) => (
          <form onSubmit={props.handleSubmit}>
            <Field type="text" name="name" placeholder="Name" />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    )
  }
}

export default FormProject;
