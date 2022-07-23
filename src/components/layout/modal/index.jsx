import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

function Modal({ children, show, hide }) {
  if (!show) {
    return null;
  }
  return (
    <ModalWrapper onClick={hide}>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
}

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${FONTSIZES.base};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS.white};
`;
