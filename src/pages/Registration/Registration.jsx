import React from 'react'
import './registration.scss'
import '../MyIssues/myissues.scss'
import '../../index.scss'

function Registration() {
    return (
        <main className="main">
            <section className="content">
                <div className="wrapper">
                    <form className="form-register column">
                        <h1 className="register-title">
                            Create a new account
                        </h1>
                        <div className="register-box row between">
                            <input className="register-input" placeholder="First name"/>
                            <input className="register-input" placeholder="Last name"/>
                        </div>
                        <input className="register-input" placeholder="Email"/>
                        <input className="register-input" placeholder="Username"/>
                        <input className="register-input" placeholder="Password"/>
                        <input className="register-input" placeholder="Repeat password"/>
                        <div className="register-box row end">
                            <button className="register-login">Login</button>
                            <button type="submit" className="register-create">Create</button>
                        </div>

                    </form>
                </div>
            </section>              
        </main>
    )
}

export default Registration
