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
            <div className="form-group">
              <Field className='form-control' type="text" name="name" placeholder="Name" />
              <button className="btn btn-primary"type="submit">{this.props.submitText}</button>
            </div>
          </form>
        )}
      />
    )
  }
}

export default FormProject;
