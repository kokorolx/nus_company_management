import React from 'react';
import { Input } from 'reactstrap'
import { Formik, Field } from 'formik';

class FormUser extends React.Component {

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
            <button type="submit">{this.props.submitText}</button>
          </form>
        )}
      />
    )
  }
}

export default FormUser;
