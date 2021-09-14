import './login.scss'
import '../MyIssues/myissues.scss'
import '../../index.scss'
import Input from '../../components/Input/Input'
import ErrorMSG from '../../components/ErrorMSG/ErrorMSG'
import React, {useState } from 'react'
import {NavLink} from 'react-router-dom'
import { login } from '../../actions/user'
import logo from '../../components/Images/logo.svg'


function Login() {    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameDirty, setUsernameDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [usernameError, setUsernameError] = useState("Email не может быть пустым")
    const [passwordError, setPasswordError] = useState("Password не может быть пустым")


    const usernameHandler = (e) =>{
        setUsername(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
        if (!re.test(String(e.target.value).toLowerCase)){
            setUsernameError("Некоректное значение Email")
        } else{
            setUsernameError("")
        }
    }


    const passwordHandler = (e) =>{
        
        setPassword(e.target.value)

        if (e.target.value.length < 6 || e.target.value.length > 16){
            setPasswordError ("Пароль должен быть больше 6 и меньше 16 символов")
            // if (!e.target.value){
            //     setPasswordError ("Пароль не должен быть пустым")
            // }
        } else {
            setPasswordError ("")
        }
    }


    const blurHandler = (e) =>{
        switch (e.target.name){
            case "email":
                console.log(e)
                setUsernameDirty(true)
                break
            case "password":
                console.log(e)
                setPasswordDirty(true)
                break
        }
    }

    

    return (
        <main className="main">
            <section className="content">
                <div className="wrapper">


                    {(usernameDirty && usernameError &&  <div><ErrorMSG msg={usernameError}/></div>)}

                    {(passwordDirty && passwordError &&  <div><ErrorMSG msg={passwordError}/></div>)}

                   
                    <form className="form-register column" onSubmit={(e)=> e.preventDefault()} >
                        <h1 className="login-title">
                            Login
                        </h1>
                        
                        {/* <Input onBlur ={e => blurHandler(e)} placeholder={"Email or username"} name ={"username"} value = {username} setValue = {setUsername}/>
                    
                        <Input  placeholder={"Password"} name ={"password"} value = {password} setValue = {setPassword} type ={"password"} /> */}

                        <input
                            className = "register-input" 
                            placeholder = {"Email or username"}
                            name = "email"
                            value = {username}
                            type = "email"
                            onChange = {e => usernameHandler(e)}
                            onBlur ={e => blurHandler(e)}
                            required                           
                        />

                        <input
                            className = "register-input" 
                            placeholder = {"Password"}
                            name = "password"
                            value = {password}
                            type = "password"
                            onChange = {e => passwordHandler(e)}
                            onBlur ={e => blurHandler(e)}
                            required                           
                        />
                        
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




            

