import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const TopBarWrapper = styled.div`
  position: relative;
  color: ${COLORS.white};
  margin-top: 5.5rem;
  padding: 2.4rem;

  .input-container {
    display: flex;
    justify-content: flex-end;
  }

  .topbar-input {
    height: 4.7rem;
    border-radius: 1.8rem;
    padding-left: 4rem;
  }
`;

export const TopBarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.1rem;

  .profile-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
`;

export const TopBarText = styled.h1`
  font-size: ${FONTSIZES.xxlarge};
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.medium};
`;
export const TopBarItem = styled.div`
  position: absolute;
  top: 6.2rem;
  right: 3rem;
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 12rem;
  background-color: ${COLORS.amethyst};

  .menu__links {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    text-decoration: none;
    color: ${COLORS.white};
    font-size: ${FONTSIZES.small};

    &:hover {
      background-color: ${COLORS['xiketic-200']};
    }
  }
`;

export const TopBarSpan = styled.span`
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const TopBarContainer = styled.span``;

export const TopBarImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
  border-radius: 50%;
  background-position: left;
`;

export const MovieDB = styled.img`
  width: 4rem;
  position: absolute;
  top: 20rem;
  right: 2rem;
  opacity: 0.2;
`;
