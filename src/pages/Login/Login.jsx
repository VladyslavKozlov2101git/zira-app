import './login.scss';
import '../ProjectInner/style.scss';
import '../../index.scss';
import { validationShemaAuth, initialValuesAuth } from '../../variables/variables';
import Input from '../../components/Input/Input';
import ErrorMSG from '../../components/ErrorMSG/ErrorMSG';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { login } from '../../actions/user';
import logo from '../../components/Images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';

function Login() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.message);
  const setMessage = (message) => {
    dispatch({ type: 'SET_ERROR_MESSAGE', payload: message });
  };

  return (
    <main className="main">
      <section className="content">
        <div className="wrapper">
          <Formik
            initialValues={initialValuesAuth}
            validateOnBlur // Validation when you come to another field
            validationSchema={validationShemaAuth}
            onSubmit={(values) => login(values, setMessage)}>
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
                {touched.username && errors.username && <ErrorMSG msg={errors.username} />}
                {touched.password && errors.password && <ErrorMSG msg={errors.password} />}
                {message && <ErrorMSG msg={message} />}
                <form className="form-register column" onSubmit={(e) => e.preventDefault()}>
                  <h1 className="login-title">Login</h1>

                  <Input
                    className={touched.username && errors.username && 'red-border-bottom'}
                    placeholder={'Email or username'}
                    name={'username'}
                    value={values.username}
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Input
                    className={touched.password && errors.password && 'red-border-bottom'}
                    placeholder={'Password'}
                    name={'password'}
                    value={values.password}
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="login-box row end">
                    <NavLink className="login-login" to="./registration">
                      Register
                    </NavLink>
                    <button
                      type="submit"
                      className="login-create"
                      disabled={!isValid && !dirty}
                      onClick={handleSubmit}>
                      Login
                    </button>
                  </div>
                </form>
              </>
            )}
          </Formik>

          <img className="reg-res-logo" src={logo} alt="logo" />
        </div>
      </section>
    </main>
  );
}

export default Login;
