import React from 'react'
import './style.scss'

function Input({ placeholder, value, setValue, type, name, onBlur, className, onChange, autocomplete = "off", required = false }) {
    return (
        <div className="input-block">
            <input
                onChange={onChange}
                className={"form-input " + className}
                placeholder={" "}
                name={name}
                id = {name}
                value={value}
                setValue={setValue}
                type={type}
                onBlur={onBlur}
                autoComplete={autocomplete}
                required={required}
            />
            <label htmlFor={name}>{placeholder}</label>
        </div>

    )
}

export default Input
