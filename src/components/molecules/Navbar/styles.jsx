import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES } from '../../../constatnts/font-size';

export const NavbarWrapper = styled.div`
  background-color: ${COLORS.xiketic};
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10;

  @media screen and (min-width: 992px) {
    display: none;
  }

  @media screen and (max-width: 992px) {
    display: block;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 2.6rem 0.2rem 2.4rem;

  .links {
    text-decoration: none;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      background-color: red;
      border-radius: 50%;
      position: absolute;
      top: -0.4rem;
      right: 0.5rem;
      color: ${COLORS.white};
    }
  }

  .isActive {
    text-decoration: none;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    border-bottom: 1px solid ${COLORS.amethyst};
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      background-color: red;
      border-radius: 50%;
      position: absolute;
      top: -0.4rem;
      right: 0.5rem;
      color: ${COLORS.white};
    }
  }

  @media screen and (min-width: 992px) {
    height: 6rem;
    align-items: center;
    justify-content: normal;

    .links {
      font-size: ${FONTSIZES.xsmall};
      margin-right: 2rem;

      span {
        top: -1.1rem;
        right: -1.5rem;
      }
    }

    .isActive {
      font-size: ${FONTSIZES.base};
      margin-right: 2rem;

      span {
        top: -1.4rem;
        right: -1.5rem;
      }
    }
  }
`;

export const NavIconText = styled.div`
  color: ${COLORS.white};
`;

// desktop

export const NavbarMobileWrapper = styled.div`
  background-color: ${COLORS.xiketic};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 992px) {
    display: block;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
