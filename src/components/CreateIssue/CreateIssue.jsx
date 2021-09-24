import React from 'react';
import Input from '../Input/Input';
import './style.scss';
import { Formik, Form } from 'formik';
import { validationShemaProj, initialValuesProj } from '../../variables/variables';
import axios from 'axios';

const CreateIssue = ({ closeEvent, setProjects }) => {
  const createIssue = async (values) => {
    try {
      const response = await axios
        .post('http://api.zira.givenfly.space/projects/', values, {
          headers: { Authorization: `Token ${localStorage.token}` },
        })
        .then(() => {
          axios
            .get('http://api.zira.givenfly.space/projects/', {
              headers: { Authorization: `Token ${localStorage.token}` },
            })
            .then((res) => {
              setProjects(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValuesProj}
      validateOnBlur // Validation when you come to another field
      validationSchema={validationShemaProj}
      onSubmit={(values, { resetForm }) => {
        //createProject(values);
        resetForm({ values: '' });
        closeEvent();
      }}>
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
        <>
          <div className="blur-box" onClick={closeEvent}></div>
          <Form className="create_form-issue">
            <p className="create_title">Create an issue</p>
            <div className="create_box row">
              <Input
                className={'create-title-issue'}
                name={'title'}
                placeholder={'Title'}
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="create_box row">
              <Input
                className={'create-description'}
                name={'issue_type'}
                placeholder={'Type'}
                value={values.issue_type}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                className={'create-description'}
                name={'priority'}
                placeholder={'Priority'}
                value={values.priority}
                onChange={handleChange}
                onBlur={handleBlur}
              />

            </div>

            <div className="create_box row">
              <Input
                className={'create-description'}
                name={'assignee'}
                placeholder={'Assignee'}
                value={values.assignee}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="create_box row">
              <Input
                className={'create-description'}
                name={'original_estimate'}
                placeholder={'Original estimate (optional)'}
                value={values.original_estimate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                className={'create-description'}
                name={'deadline'}
                type={'date'}
                placeholder={'Deadline (optional)'}
                value={values.deadline}
                onChange={handleChange}
                onBlur={handleBlur}
              />

            </div>

            <div className="create_box row end">


              <div>
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
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default CreateIssue;
