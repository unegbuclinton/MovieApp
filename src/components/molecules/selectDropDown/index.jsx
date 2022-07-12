import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

function SelectDropDown({
  options,
  isMulti,
  placeholder,
  myValue,
  onChange,
  className,
}) {
  const defaultValue = (options, myValue) => {
    return options ? options.find((option) => option.value === myValue) : '';
  };
  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#171622',
      fontSize: '1.4rem',
      outline: 'none',
      color: '#ffff',
      border: 'none',
      outerHeight: '4.6rem',
    }),
    option: (styles) => ({ ...styles, fontSize: '1.4rem' }),
  };
  return (
    <ReactSelect
      options={options}
      value={defaultValue(options, myValue)}
      onChange={(value) => onChange(value)}
      className={className}
      isMulti={isMulti}
      styles={customStyles}
      placeholder={placeholder}
    />
  );
}

export default SelectDropDown;

const ReactSelect = styled(Select)`
  width: 100%;
`;
