import React from 'react';
import Select from 'react-select';
import './style.scss';
import { components } from 'react-select';
const { Option, SingleValue } = components;

function DropdownSelect({ options, className, placeholder, components }) {
  const customStyles = {
    control: () => ({
      background: 'inherit',
      display: 'flex !important',
      justifyContent: 'space-between',
      borderBottom: '1px solid #A3AFB7',
      color: '#a3afb7',
      fontSize: '24px',
    }),
    placeholder: () => ({
      color: '#A3AFB7',
      display: 'flex !important',
    }),
    singleValue: () => ({
      color: '#A3AFB7',
      fontSize: '20px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    valueContainer: () => ({
      display: 'flex !important',
      color: '#a3afb7',
      fontSize: '24px',
      cursor: 'pointer',
    }),
    option: () => ({
      display: 'flex !important',
      justifyContent: 'flex-start',
      padding: '0 10px',
      cursor: 'pointer',
      zIndex: 100,
      fontSize: 14,
      fontStyle: 'italic',
      color: '#A3AFB7',
      margin: '8px 0',
    }),
  };

  const IconOption = (props) => (
    <Option {...props}>
      <img
        src={require('../../components/Pictures/SVG/' + props.data.icon).default}
        style={{ height: 20, margin: '0px 10px 5px 0px' }}
        alt={props.data.label}
      />
      {props.data.label}
    </Option>
  );

  const IconSingleValue = (props) => (
    <SingleValue {...props}>
      <img
        src={require('../../components/Pictures/SVG/' + props.data.icon).default}
        style={{ height: 20, margin: '0px 10px 0px 0px' }}
        alt={props.data.label}
      />
      {props.data.label}
    </SingleValue>
  );

  return (
    <>
      <Select
        placeholder={placeholder}
        className={className}
        styles={customStyles}
        options={options}
        components={{ Option: IconOption, SingleValue: IconSingleValue }}
      />
    </>
  );
}

export default DropdownSelect;
