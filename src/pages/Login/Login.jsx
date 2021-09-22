import './login.scss'
import '../MyIssues/myissues.scss'
import '../../index.scss'
import { validationShemaAuth , initialValuesAuth  } from '../../variables/variables'
import Input from '../../components/Input/Input'
import ErrorMSG from '../../components/ErrorMSG/ErrorMSG'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { login } from '../../actions/user'
import logo from '../../components/Images/logo.svg'


import { Formik } from 'formik'




function Login() {

    return (

        <main className="main">
            <section className="content">
                <div className="wrapper">
                    <Formik
                        initialValues={initialValuesAuth }
                        validateOnBlur // Validation when you come to another field
                        validationSchema={validationShemaAuth}
                        onSubmit={values => login(values)}

                    >
                        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                            <>
                                {touched.username && errors.username && <ErrorMSG msg={errors.username} />}
                                {touched.password && errors.password && <ErrorMSG msg={errors.password} />}
                                <form className="form-register column" onSubmit={e => e.preventDefault()} >
                                    <h1 className="login-title">
                                        Login
                                    </h1>

                                    <Input
                                        placeholder={"Email or username"}
                                        name={"username"}
                                        value={values.username}
                                        type="email"
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                    />

                                    <Input
                                        placeholder={"Password"}
                                        name={"password"}
                                        value={values.password}
                                        type="password"
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                    />

                                    <div className="login-box row end">
                                        <NavLink className="login-login" to="./registration">Register</NavLink>
                                        <button
                                            type="submit"
                                            className="login-create"
                                            disabled={!isValid && !dirty}
                                            onClick={handleSubmit}
                                        >
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
    )
}

export default Login






