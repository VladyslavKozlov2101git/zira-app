import './registration.scss';
import '../MyIssues/myissues.scss';
import '../../index.scss';
import { validationShema, initialValues } from '../../variables/variables';
import Input from '../../components/Input/Input';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { registration } from '../../actions/user';
import logo from '../../components/Images/logo.svg';
import { Formik } from 'formik';
import ErrorMSG from '../../components/ErrorMSG/ErrorMSG';

function Registration() {
  return (
    <main className="main">
      <section className="content">
        <div className="wrapper">
          <Formik
            initialValues={initialValues}
            validateOnBlur // Validation when you come to another field
            validationSchema={validationShema}
            onSubmit={(values) => registration(values)}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <>
                {touched.email && errors.email && <ErrorMSG msg={errors.email} />}

                <form className="form-register column" onSubmit={(e) => e.preventDefault()}>
                  <h1 className="register-title">Create a new account</h1>

                  <div className="register-box row between">
                    <Input
                      className={
                        touched.first_name && errors.first_name
                          ? 'input-half red-border-bottom'
                          : 'input-half'
                      }
                      placeholder={'First name'}
                      name={'first_name'}
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Input
                      className={
                        touched.last_name && errors.last_name
                          ? 'input-half red-border-bottom'
                          : 'input-half'
                      }
                      placeholder={'Last name'}
                      name={'last_name'}
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <Input
                    className={touched.email && errors.email && 'red-border-bottom'}
                    placeholder={'Email'}
                    name={'email'}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Input
                    className={touched.username && errors.username && 'red-border-bottom'}
                    placeholder={'Username'}
                    name={'username'}
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Input
                    className={touched.password && errors.password && 'red-border-bottom'}
                    placeholder={'Password'}
                    name={'password'}
                    value={values.password}
                    type={'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Input
                    className={
                      touched.repeat_password && errors.repeat_password && 'red-border-bottom'
                    }
                    placeholder={'Repeat password'}
                    name={'repeat_password'}
                    value={values.repeat_password}
                    type={'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="register-box row end">
                    <NavLink className="register-login" to="./login">
                      Login
                    </NavLink>
                    <button
                      type="submit"
                      className="register-create"
                      disabled={!isValid && !dirty}
                      onClick={handleSubmit}>
                      Create
                    </button>
                  </div>
                </form>
              </>
            )}
          </Formik>

          <img className="reg-logo" src={logo} alt="logo" />
        </div>
      </section>
    </main>
  );
}

export default Registration;
