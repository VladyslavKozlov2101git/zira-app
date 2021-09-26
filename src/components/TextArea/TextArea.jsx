import React from 'react';
import './style.scss';
import { Field } from 'formik';

function TextArea({
  placeholder,
  value,
  //setValue,
  type,
  row,
  name,
  onBlur,
  className = '',
  onChange,
  required = false,
}) {
  return (
    <div className={'textarea-block ' + className}>
      <Field
        as="textarea"
        onChange={onChange}
        className={'form-input form-textarea'}
        placeholder={' '}
        name={name}
        id={name}
        value={value}
        //setValue={setValue}
        type={type}
        onBlur={onBlur}
        required={required}
        row={row}
      />
      <label htmlFor={name}>{placeholder}</label>
    </div>
  );
}

export default TextArea;
