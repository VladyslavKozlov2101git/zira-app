import React from 'react'


function Input({placeholder, value, setValue, type, name, onBlur, className, onChange}) {
    return (
        <input
            onChange = {onChange} 
            className = {"register-input "+className} 
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
