import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const PurchaseWrapper = styled.form`
  padding: 1.8rem;
`;

export const PurchaseDropdown = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 2.8rem;

  .purchase-input {
    height: 2.4rem;
  }
`;

export const PurchaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;

  .price-tag {
    display: flex;
    flex-direction: column;

    &__text {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.normal};
      color: ${COLORS.white};
    }

    &__figure {
      font-size: ${FONTSIZES.xlarge};
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS.white};
    }
  }

  .purchase-cta {
    &__btn {
      outline: none;
      background: ${COLORS.amethyst};
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS.white};
      padding: 1.4rem 3rem;
      border: none;
      border-radius: 0.5rem;
    }
  }
`;
