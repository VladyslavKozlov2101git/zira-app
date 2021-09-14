import React from 'react'


function Input({placeholder, value, setValue, type, name, onBlur}) {
    return (
        <input
            onChange = {(e)=>setValue(e.target.value)} 
            className = "register-input" 
            placeholder = {placeholder}
            name = {name}
            value = {value}
            setValue = {setValue}
            type = {type}
            onBlur = {onBlur}
            required                           
        />
    )
}

export default Input
