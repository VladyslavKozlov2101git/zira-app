import React from 'react'

function Input({placeholder, value, setValue, type}) {
    return (
        <input
            onChange = {(e)=>setValue(e.target.value)} 
            className = "register-input" 
            placeholder = {placeholder}
            value = {value}
            setValue = {setValue}
            type = {type}
            required                           
        />
    )
}

export default Input
