import React from 'react';
import Select from 'react-select';
import './style.scss';

function DropdownSelect({ options, className, placeholder }) {
  const customStyles = {
    control: () => ({
      // none of react-select's styles are passed to <Control />
      background: 'inherit',
      display: 'flex !important',
      justifyContent: 'space-between',
      borderBottom: '1px solid #A3AFB7',
      color: 'a3afb7',
      fontSize: '24px',
    }),
    placeholder: () => ({
      color: '#A3AFB7',
      display: 'flex !important',
    }),
    singleValue: () => ({
      color: '#A3AFB7',
      fontSize: '24px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    ValueContainer: () => ({
      color: '#a3afb7',
      fontSize: '24px',
      display: 'flex !important',
    }),
  };
  return (
    <Select
      placeholder={placeholder}
      className={className}
      styles={customStyles}
      options={options}
    />
  );
}

export default DropdownSelect;
