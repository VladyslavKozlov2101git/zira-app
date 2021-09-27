import React from 'react';
import Input from '../Input/Input';
import './style.scss';
import { Formik, Form } from 'formik';
import { validationShemaProj, initialValuesProj } from '../../variables/variables';
import axios from 'axios';
import TextArea from '../TextArea/TextArea';
import DropdownSelect from '../DropdownSelect/DropdownSelect';

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
              <DropdownSelect
                className={'crete-quater dropdown'}
                placeholder={'Type'}
                options={[
                  { value: 'task', label: 'Task' },
                  { value: 'bug', label: 'Bug' },
                  { value: 'idea', label: 'Idea' },
                ]}
              />
              <DropdownSelect
                className={'crete-quater dropdown'}
                placeholder={'Priority'}
                options={[
                  { value: 'lowest', label: 'Lowest' },
                  { value: 'low', label: 'Low' },
                  { value: 'medium', label: 'Medium' },
                  { value: 'hight', label: 'Hight' },
                  { value: 'highest', label: 'Highest' },
                ]}
              />

              <Input
                className={'crete-quater'}
                name={'estimate'}
                placeholder={'Estimate'}
                value={values.estimate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                className={'crete-quater'}
                name={'deadline'}
                type={'date'}
                placeholder={'Deadline (optional)'}
                value={values.deadline}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="create_box row">
              <Input
                className={'crete-half'}
                name={'reporter'}
                placeholder={'Reporter'}
                value={values.reporter}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                className={'crete-half'}
                name={'assignee'}
                placeholder={'Assignee'}
                value={values.assignee}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="create_box create_box-wysiwyg row">
              <TextArea className={'create-description create-description-textarea '} />
            </div>

            <div className="create_box  row end">
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
