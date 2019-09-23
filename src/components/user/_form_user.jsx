import React from 'react';
import { Input } from 'reactstrap'
import { Formik, Field } from 'formik';
import Select from 'react-select';
class FormUser extends React.Component {

  render() {
    const projects = this.props.projects
    console.log(projects)
    return (
      <Formik
        initialValues={this.props.initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            this.props.onSubmit(values);
            actions.setSubmitting(false);
          }, 500);
        }}
        render={(props) => (
          <form onSubmit={props.handleSubmit}>
            <Field type="text" name="email" placeholder="email" />
            <Field type="text" name="age" placeholder="age" />
            <Field type="text" name="gender" placeholder="gender" />
            <Field type="text" name="position" placeholder="position" />
            <ProjectSelect
              value={props.values.project_ids}
              onChange={props.setFieldValue}
              onBlur={props.setFieldTouched}
            />
            <button type="submit">{this.props.submitText}</button>
          </form>
        )}
      />
    )
  }
}

class ProjectSelect extends React.Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange('project_ids', value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur('project_ids', true);
  };

  render() {

    const options = [
      { value: "Food", label: "Food" },
      { value: "Being Fabulous", label: "Being Fabulous" }
    ];

    return (
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="project">Projects</label>
        <Select
          id="project"
          options={options}
          isMulti={true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error &&
          this.props.touched && (
            <div style={{ project: 'red', marginTop: '.5rem' }}>{this.props.error}</div>
          )}
      </div>
    );
  }
}


export default FormUser;
