import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const AlsoScreeningWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const AlsoScreeningContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;

  .icon {
    flex: 1;
  }
`;

export const ScreeningImgWrapper = styled.div`
  width: 9.4rem;
  height: 11.1rem;
  border-radius: 0.6rem;
`;

export const ScreeningImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.6rem;
`;

export const ScreeningContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .details {
    width: 12rem;

    h3 {
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS.white};
      margin-bottom: 0.5rem;
    }
  }
`;
