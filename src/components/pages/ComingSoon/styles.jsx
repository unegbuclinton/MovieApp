import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const ComingSoonWrapper = styled.div`
  padding: 1.8rem;
  margin-top: 7rem;

  @media only screen and (min-width: 768px) {
    padding: 3.8rem;
  }
`;

export const ComingSoonHeader = styled.h1`
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS.white};
  margin-bottom: 3.2rem;
`;

export const ComingSoonItem = styled.div`
  margin-bottom: 3.2rem;
`;
export const ComingSoonText = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: ${FONTSIZES.base};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS.white};
`;

export const ComingSoonImg = styled.img`
  width: 100%;

  height: 15.1rem;
  border-radius: 0.8rem;
  object-fit: cover;

  @media only screen and (min-width: 768px) {
    height: 50.1rem;
  }
`;

export const ComingSoonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.2rem;
`;

export const ComingSoonInfo = styled.div`
  width: 100%;
  display: flex;
  color: ${COLORS.white};
  justify-content: space-between;
  align-items: end;
  padding-left: 1.5rem;

  .description {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.bold};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    .details {
      font-size: ${FONTSIZES.base};
      font-weight: ${FONTWEIGHTS.normal};
    }
  }
`;

export const ComingSoonDescription = styled.div`
  padding-left: 3.5rem;
  margin-top: 1.5rem;
  h2 {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.bold};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.xsmall};
    font-weight: ${FONTWEIGHTS.normal};
    word-break: break-all;
  }
`;
