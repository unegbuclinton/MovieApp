import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const TopBarWrapper = styled.div`
  color: ${COLORS.white};
  margin-top: 5.5rem;
  padding: 2.4rem;

  .input-container {
    display: flex;
    justify-content: flex-end;
  }

  .topbar-input {
    /* width: 27.9rem; */
    height: 4.7rem;
    border-radius: 1.8rem;
    padding-left: 4rem;
  }
`;

export const TopBarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.1rem;
`;

export const TopBarText = styled.h1`
  font-size: ${FONTSIZES.xxlarge};
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.medium};
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
