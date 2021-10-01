import React from 'react'
import './style.scss'
import successImg from '../../components/Images/success.svg'

function SuccessfulMSG({msg}) {
    return (
        <div className="success_message row">
            <img className="success_message-img" src={successImg} alt="icon" />
            <p className="success_message-txt" >{msg} </p>
        </div>
    )
}

export default SuccessfulMSG
