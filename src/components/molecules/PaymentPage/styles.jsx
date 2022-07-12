import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const PaymentWrapper = styled.div`
  padding: 1.8rem;
  padding-top: 4.4rem;
`;

export const PaymentContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 4rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4.2rem;
  color: ${COLORS.white};
  margin-top: 3rem;

  .description-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.4rem;
    font-size: ${FONTSIZES.small};
    align-items: center;
  }
`;

export const PaymentBox = styled.div`
  .payment-header {
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS.white};
    margin: 3rem 0;
  }

  .payment-option {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${COLORS['border-line']};
    margin-bottom: 2rem;

    &__header {
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS.white};
    }
  }
`;

export const PaymentDescription = styled.div`
  .title {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.small};
    margin: 2rem 0;
  }
  .genre {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.xsmall};
    margin-left: 0.3rem;
  }

  .location {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${COLORS.white};
    font-size: ${FONTSIZES.xsmall};
    margin-top: 1.7rem;
  }
`;

export const PaymentImage = styled.img`
  width: 11.5rem;
  height: 18rem;
  object-fit: cover;
  border-radius: 0.534rem;
`;

export const PaymentCTA = styled.div`
  .payment-btn {
    width: 27.7rem;
    height: 5rem;
    border-radius: 0.5rem;
    background-color: ${COLORS.amethyst};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS.white};
    font-weight: ${FONTWEIGHTS.bold};
  }
`;

export const TransferBox = styled.div``;

export const CardBox = styled.div``;
