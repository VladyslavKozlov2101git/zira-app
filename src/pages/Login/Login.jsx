import './login.scss'
import '../MyIssues/myissues.scss'
import '../../index.scss'
import Input from '../../components/Input/Input'
import React, {useState } from 'react'
import {NavLink} from 'react-router-dom'
import { login } from '../../actions/user'
import logo from '../../components/Images/logo.svg'


function Login() {    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <main className="main">
            <section className="content">
                <div className="wrapper">
                    <form className="form-register column" onSubmit={(e)=> e.preventDefault()} >
                        <h1 className="login-title">
                            Login
                        </h1>
                        <Input placeholder={"Email or username"} value = {username} setValue = {setUsername}/>
                        <Input placeholder={"Password"} value = {password} setValue = {setPassword} type ={"password"} />
                        
                        <div className="login-box row end">
                            <NavLink className="login-login" to="./registration">Register</NavLink>
                            <button 
                                type="submit" 
                                className="login-create"
                                onClick={()=> login(password, username)}
                            >
                                 Login
                            </button>
                        </div>

                    </form>

                    <img className="reg-res-logo" src={logo} alt="logo"/>

                </div>
            </section>              
        </main>
    )
}

export default Login




            

