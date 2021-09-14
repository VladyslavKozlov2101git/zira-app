import React from 'react'
import './style.scss'
import errorImg from '../../components/Images/error.svg'

function ErrorMSG({msg}) {
    return (
        <div className="error_message row">
            <img className="error_message-img" src={errorImg} alt="icon" />
            <p className="error_message-txt" >{msg} </p>
        </div>
    )
}

export default ErrorMSG
