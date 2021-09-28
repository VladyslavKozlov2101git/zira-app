import React from 'react';
import Select from 'react-select';
import './style.scss';
import { components } from "react-select";
const { Option } = components;

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
      fontSize: '24px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    valueContainer: () => ({
      display: 'flex !important',
      color: '#a3afb7',
      fontSize: '24px',

    }),
    option:()=>({
      display: 'flex !important',
      justifyContent: 'flex-start',
      padding:"0 10px"
    })
  };

  const IconOption = props => (
    <Option {...props}>
      <img
        src={require('../../components/Pictures/SVG/'+props.data.icon).default}
        style={{ height: 20, margin:"0px 10px 5px 0px"}}
        alt={props.data.label}
      />
      {props.data.label}
    </Option>
  );
  
  

  return (
    
    <>
     
      <Select
        placeholder={placeholder}
        className={className}
        styles={customStyles}
        options={options}
        components={{ Option: IconOption }}
      />
    </>
  );
}

export default DropdownSelect;


