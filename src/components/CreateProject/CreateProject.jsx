import React from 'react';
import Input from '../Input/Input';
import './style.scss';
import { createProject } from '../../actions/user';
import { Formik, Form } from 'formik';
import { validationShemaProj, initialValuesProj } from '../../variables/variables';

const CreateProject = ({ closeEvent }) => {
  return (
    <Formik
      initialValues={initialValuesProj}
      validateOnBlur // Validation when you come to another field
      validationSchema={validationShemaProj}
      onSubmit={(values, { resetForm }) => {
        createProject(values);
        resetForm({ values: '' });
        closeEvent();
      }}>
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
        <>
          <div className="blur-box" onClick={closeEvent}></div>
          <Form className="create_form">
            <p className="create_title">Create a new project</p>
            <div className="create_box row">
              <Input
                className={'create-title'}
                name={'title'}
                placeholder={'Title'}
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                className={'create-key'}
                name={'key'}
                placeholder={'Key'}
                value={values.key}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="create_box row end">
              <button onClick={closeEvent} className="register-login create_cancel">
                Cancel
              </button>
              <button
                type="submit"
                className="login-create "
                disabled={!isValid && !dirty}
                onClick={handleSubmit}>
                Create
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default CreateProject;
