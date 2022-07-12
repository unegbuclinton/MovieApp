import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const RecieptWrapper = styled.div`
  margin: 3rem 2rem;

  .download-btn {
    background-color: ${COLORS.amethyst};
    color: ${COLORS.white};
    width: 100%;
    padding: 1rem;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.base};
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }
  .cancel-btn {
    background-color: ${COLORS['cancel-red']};
    color: ${COLORS.white};
    width: 100%;
    padding: 1rem;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.base};
    border-radius: 0.5rem;
  }
`;
export const RecieptHeader = styled.h1`
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS.white};
  margin-bottom: 4rem;
`;

export const RecieptTitle = styled.p`
  text-align: center;
  font-size: ${FONTSIZES.base};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS.white};
  margin-bottom: 3rem;
`;
export const RecieptImg = styled.img`
  width: 24.6rem;
  height: 25.4rem;
  border-radius: 1.3rem;
  object-fit: cover;
  text-align: center;
  margin-bottom: 2rem;
`;

export const RecieptDetailsBox = styled.div`
  color: ${COLORS.white};
`;

export const RecieptDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 13rem;
  font-size: ${FONTSIZES.base};
  margin-bottom: 3.2rem;
`;

export const RecieptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`;
