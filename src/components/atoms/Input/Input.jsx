import React, { useState } from 'react';
import { DPIconMicrophone, DPIconSearch } from '../../gallery/icons';
import { Container, InputField, InputFieldIcon } from './styles';

const Input = ({
  type,
  placeholder,
  disabled,
  onChange,
  name,
  id,
  onBlur,
  className,
  containerClass,
  value,
  onWheel,
}) => {
  //   const [show, setShow] = useState(false);
  //   const toggleShowPassword = () => setShow((prev) => !prev);

  return (
    <Container className={containerClass}>
      <InputField
        className={className}
        onWheel={onWheel}
        disabled={disabled}
        name={name}
        id={id}
        // type={type === 'password' ? (show ? 'text' : 'password') : type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {/* {type === 'password' && (
        <InputFieldIcon onClick={toggleShowPassword}>
          {show ? <DPIconSkraggleEyeOpen /> : <DPIconSkraggleEyeClose />}
        </InputFieldIcon>
      )} */}
      <InputFieldIcon>
        <DPIconMicrophone className="microphone" />
        <DPIconSearch className="search" />
      </InputFieldIcon>
    </Container>
  );
};

export default Input;
