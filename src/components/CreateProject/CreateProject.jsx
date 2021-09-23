import React from 'react';
import Input from '../Input/Input';
import './style.scss';
import { Formik, Form } from 'formik';
import { validationShemaProj, initialValuesProj } from '../../variables/variables';
import axios from 'axios';



const CreateProject = ({ closeEvent, setProjects }) => {
  const createProject = async (values) => {
    try {
      const response = await axios.post('http://api.zira.givenfly.space/api/projects/',
        values, { headers: { "Authorization": `Token ${localStorage.token}` } }).then(() => {
          axios
            .get('http://api.zira.givenfly.space/api/projects/', {
              headers: { Authorization: `Token ${localStorage.token}` },
            })
            .then((res) => {
              setProjects(res.data);
            })
            .catch((err) => {
              console.log(err);
            })
        })

    } catch (error) {
      console.error(error)
    }
  }


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
