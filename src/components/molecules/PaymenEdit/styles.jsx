import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const PaymentEditWrapper = styled.div`
  max-width: 50rem;
  padding: 1.8rem;
  position: relative;

  .back-btn {
    position: absolute;
    top: 25px;
  }
`;

export const PaymentEditContainer = styled.div`
  margin-top: 6rem;
  h3 {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.base};
    letter-spacing: 0.1rem;
    padding-left: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .add-card__btn {
    width: 100%;
    background-color: ${COLORS.amethyst};
    padding: 1rem;
    color: ${COLORS.white};
    border-radius: 0.5rem;
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.bold};
    margin-top: 3disrem;
  }
`;

export const PaymentEditHeader = styled.h1`
  font-size: ${FONTSIZES.xxlarge};
  color: ${COLORS.white};
  margin-bottom: 2rem;
`;

export const PaymentCardForm = styled.form`
  margin-bottom: 2rem;
  h2 {
    font-size: ${FONTSIZES.lg};
    color: ${COLORS.white};
    margin-bottom: 0.7rem;
  }
  p {
    font-size: ${FONTSIZES.small};
    color: ${COLORS.white};
    margin-bottom: 2rem;
  }

  .card-info {
    display: flex;
    gap: 2.7rem;
  }
`;

export const PaymentCardField = styled.div`
  margin-bottom: 2rem;
`;

export const PaymentCardLabel = styled.label`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.base};
  margin-bottom: 0.8rem;
  margin-left: 0.5rem;
`;
