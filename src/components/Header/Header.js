import React from 'react'
import './header.scss'
import {NavLink} from 'react-router-dom'
import logo from '../Images/logo.svg'
import avatar from '../Images/avatar1.png'
import { Logout } from '../../actions/user'


export default function Header() {
    return (
        <header className="header">
            <nav className="header-navigation row">
                <div className="header-container row ">                    
                    <NavLink to="/home" className="header-logo logo">                        
                        <img className="header-logo-img" src={logo} alt="logo"/>
                    </NavLink>
                    <ul className="header-menu row">
                        
                        <li className="header-menu-item">
                            <NavLink className="header-menu-link" to="/projects">Projects</NavLink>
                            <button className="header-arrow"></button>
                        </li>
                        <li className="header-menu-item">
                            <NavLink className="header-menu-link" to="/issues">My issues</NavLink>
                        </li>
                </ul>
                </div>
                
                
                <div className="header-container">
                    <img className="header-profile" title={"Log Out"} onClick = {()=>Logout()}  src={avatar} alt="profile" />
                </div>
            </nav>       
        </header>
    )
}
