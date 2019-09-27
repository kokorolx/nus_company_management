import React from 'react';
import { Input } from 'reactstrap'
import { Formik, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
class FormUser extends React.Component {

  render() {
    const projects = this.props.projects

    return (
      <Formik
        initialValues={this.props.initialValues}
        onSubmit={(values, actions) => {

          let customValues = {...values, project_ids: values.project_ids.map(item => item.id)}
          setTimeout(() => {
            this.props.onSubmit(customValues);
            actions.setSubmitting(false);
          }, 500);
        }}
        render={(props) => (
          <form onSubmit={props.handleSubmit}>
            <Field type="text" name="email" placeholder="email" required />
            <Field type="number" name="age" placeholder="age" min={1}/>
            <Field type="text" name="gender" placeholder="gender" />
            <Field type="text" name="position" placeholder="position" />
            <ProjectSelect
              value={props.values.project_ids}
              onChange={props.setFieldValue}
              onBlur={props.setFieldTouched}
              options={this.props.projects}
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
    const customOptions = this.props.options.map(item => ({id: item.id, label: item.name}))
    return (
      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="project">Projects</label>
        <Select
          id="project"
          options={customOptions}
          isMulti={true}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
          isSearchable={true}
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
