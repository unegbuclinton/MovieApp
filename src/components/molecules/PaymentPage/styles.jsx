import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const PaymentWrapper = styled.div`
  padding: 1.8rem;
  padding-top: 4.4rem;

  span {
    cursor: pointer;
  }
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

  @media screen and (min-width: 992px) {
    gap: 10rem;
    .description-item {
      font-size: ${FONTSIZES.xlarge};
    }
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
    font-size: ${FONTSIZES.base};
    margin-left: 0.3rem;
  }

  .location {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${COLORS.white};
    font-size: ${FONTSIZES.base};
    margin-top: 1.7rem;
  }

  @media screen and (min-width: 992px) {
    .title {
      color: ${COLORS.white};
      font-size: ${FONTSIZES.xlarge};
      margin: 2rem 0;
    }

    .genre {
      color: ${COLORS.white};
      font-size: ${FONTSIZES.base};
      margin-left: 0.3rem;
    }
  }
`;

export const PaymentImage = styled.img`
  width: 11.5rem;
  height: 18rem;
  object-fit: cover;
  border-radius: 0.534rem;

  @media screen and (min-width: 992px) {
    width: 75rem;
    height: 43rem;
  }
`;

export const PaymentCTA = styled.div`
  display: flex;
  justify-content: center;

  .payment-btn {
    width: 27.7rem;
    height: 5rem;
    border-radius: 0.5rem;
    background-color: ${COLORS.amethyst};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS.white};
    font-weight: ${FONTWEIGHTS.bold};
    margin-bottom: 1rem;
    cursor: pointer;
  }

  .cancel-payment-btn {
    width: 27.7rem;
    height: 5rem;
    border-radius: 0.5rem;
    background-color: ${COLORS['cancel-red']};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS.white};
    font-weight: ${FONTWEIGHTS.bold};
    margin-bottom: 1rem;
  }
`;

export const TransferBox = styled.div``;

export const CardBox = styled.div`
  position: absolute;
  bottom: ${({ showCards }) => (showCards ? '0' : '100%')};
  width: 100%;
  height: 33.2rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background: ${COLORS['xiketic-200']};
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  transition: bottom 0.4s ease-in;

  .handle-box {
    display: flex;
    justify-content: center;

    .handle {
      width: 10.1rem;
      height: 0.537rem;
      border-radius: 0.3rem;
      background-color: ${COLORS.white};
      margin-top: 0.859rem;
    }
  }

  .no-card__header {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.base};
  }
  .add-card__btn {
    background-color: ${COLORS.amethyst};
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin: 2rem auto;
  }

  h1 {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.xlarge};
    margin-top: 2.6rem;
    margin-bottom: 3.3rem;
  }

  .added-card {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    background-color: ${COLORS.xiketic};
    padding: 1.4rem;
    border-radius: 1.3rem;
    margin-bottom: 2.2rem;

    p {
      color: ${COLORS.white};
      font-size: ${FONTSIZES.small};
    }
  }

  .active {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    background-color: ${COLORS.xiketic};
    padding: 1.4rem;
    border-radius: 1.3rem;
    margin-bottom: 2.2rem;

    p {
      color: ${COLORS.white};
      font-size: ${FONTSIZES.small};
    }

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      bottom: 20px;
      right: 10px;
      background-color: ${COLORS.amethyst};
      border-radius: 50%;
    }
  }

  .price {
    position: absolute;
    right: 24px;
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS.white};
  }

  @media screen and (min-width: 992px) {
    display: none;
  }

  @media screen and (max-width: 992px) {
    display: block;
  }
`;

// desktop card styling
export const CardBoxDesktop = styled.div`
  width: 100%;
  height: 45.2rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background: ${COLORS['xiketic-200']};
  padding-left: 2.4rem;
  padding-right: 2.4rem;

  .handle-box {
    display: flex;
    justify-content: center;

    .handle {
      width: 10.1rem;
      height: 0.537rem;
      border-radius: 0.3rem;
      background-color: ${COLORS.white};
      margin-top: 0.859rem;
    }
  }

  .no-card__header {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.base};
  }
  .add-card__btn {
    background-color: ${COLORS.amethyst};
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin: 2rem auto;
  }

  h1 {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.xlarge};
    margin-top: 2.6rem;
    margin-bottom: 3.3rem;
  }

  .added-card {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    background-color: ${COLORS.xiketic};
    padding: 1.4rem;
    border-radius: 1.3rem;
    margin-bottom: 2.2rem;

    p {
      color: ${COLORS.white};
      font-size: ${FONTSIZES.small};
    }
  }

  .active {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    background-color: ${COLORS.xiketic};
    padding: 1.4rem;
    border-radius: 1.3rem;
    margin-bottom: 2.2rem;

    p {
      color: ${COLORS.white};
      font-size: ${FONTSIZES.small};
    }

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      bottom: 20px;
      right: 10px;
      background-color: ${COLORS.amethyst};
      border-radius: 50%;
    }
  }

  .price {
    position: absolute;
    right: 24px;
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS.white};
  }

  @media screen and (min-width: 992px) {
    display: block;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
