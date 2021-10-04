import React from 'react';
import './style.scss';

function Input({
  placeholder,
  value,
  setvalue,
  type,
  name,
  onBlur,
  className = '',
  onChange,
  autoFocus,
  autocomplete = 'off',
  required = false,
}) {
  return (
    <div className={'input-block ' + className}>
      <input
        onChange={onChange}
        className={'form-input'}
        placeholder={' '}
        name={name}
        id={name}
        value={value}
        setValue={setvalue}
        type={type}
        onBlur={onBlur}
        autoFocus={autoFocus}
        autoComplete={autocomplete}
        required={required}
      />
      <label htmlFor={name}>{placeholder}</label>
    </div>
  );
}

export default Input;
