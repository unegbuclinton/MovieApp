import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES } from '../../../constatnts/font-size';
import { DPIconCancel, DPIconCardIcon } from '../../gallery/icons';

function CardComponent({ expiry, card, onClick }) {
  return (
    <CardWrapper>
      <CardContainer>
        <div>
          <DPIconCardIcon />
        </div>

        <div onClick={onClick}>
          <DPIconCancel />
        </div>
      </CardContainer>
      <CardContainer>
        <div className="card-details">**** **** **** {card}</div>
      </CardContainer>
      <CardContainer>
        <div className="card-details">Added on: 10/06/22</div>
        <div className="card-details">Exp: {expiry}</div>
      </CardContainer>
    </CardWrapper>
  );
}

export default CardComponent;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;

  .card-details {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.small};
  }
`;

const CardWrapper = styled.div`
  padding: 1.4rem;
  width: 100%;
  height: 14.7rem;
  background-color: ${COLORS['xiketic-200']};
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`;
