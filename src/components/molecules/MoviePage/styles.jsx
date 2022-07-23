import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const MoviePageWrapper = styled.div``;

export const MoviePageContainer = styled.div`
  padding-left: 1.8rem;
  margin-bottom: 4rem;
  .info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .share-btn {
      margin-right: 1.4rem;
      margin-top: 2rem;
    }
    .container-info {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;

      .info-btn {
        display: flex;
        gap: 0.4rem;
        justify-content: center;
        align-items: center;
        outline: none;
        background: ${COLORS['xiketic-200']};
        color: ${COLORS.white};
        padding: 0.7rem;
        border: none;
        border-radius: 0.5rem;
      }
    }
  }
  .release-info {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  .header {
    margin-bottom: 0.9rem;
  }

  @media only screen and (min-width: 768px) {
    max-width: 75%;
    /* margin: 0 auto; */
  }
`;

export const MoviePageHeader = styled.h1`
  color: ${COLORS.white};
`;

export const MoviePageText = styled.p`
  color: ${COLORS.white};
  line-height: 1.8rem;
  max-width: 25rem;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.normal};

  @media only screen and (min-width: 768px) {
    max-width: 100%;
  }
`;
