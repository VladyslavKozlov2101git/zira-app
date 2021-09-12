import './registration.scss'
import '../MyIssues/myissues.scss'
import '../../index.scss'
import Input from '../../components/Input/Input'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { registration } from '../../actions/user'
import logo from '../../components/Images/logo.svg'


function Registration() {


    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeat_password, setRepeatPassword] = useState("")
    return (

        <main className="main">
            <section className="content">
                <div className="wrapper">
                    <form className="form-register column" onSubmit={(e) => e.preventDefault()} >
                        <h1 className="register-title">
                            Create a new account
                        </h1>
                        <div className="register-box row between">
                            <Input placeholder={"First name"} value={first_name} setValue={setFirstName} />
                            <Input placeholder={"Last name"} value={last_name} setValue={setLastName} />

                        </div>
                        <Input placeholder={"Email"} value={email} setValue={setEmail} type={"email"} />
                        <Input placeholder={"Username"} value={username} setValue={setUsername} />
                        <Input placeholder={"Password"} value={password} setValue={setPassword} type={"password"} />
                        <Input placeholder={"Repeat password"} value={repeat_password} setValue={setRepeatPassword} type={"password"} />

                        <div className="register-box row end">
                            <NavLink className="register-login" to="./login">Login</NavLink>
                            <button
                                type="submit"
                                className="register-create"
                                onClick={() => registration(email, password, repeat_password, username, first_name, last_name)}
                            >
                                Create
                            </button>
                        </div>

                    </form>
                    <img className="reg-logo" src={logo} alt="logo" />
                </div>
            </section>
        </main>

    )
}

export default Registration






