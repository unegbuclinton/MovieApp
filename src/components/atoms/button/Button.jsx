import React from 'react';
import { ButtonWrapper } from './styles';

function Button({ children, className, type, onClick }) {
  return (
    <ButtonWrapper type={type} className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;
