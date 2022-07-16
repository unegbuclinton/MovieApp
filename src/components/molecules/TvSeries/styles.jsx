import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const TvSeriesContainer = styled.div``;

export const TvSeriesWrapper = styled.div`
  max-width: 50rem;
  display: flex;
`;

export const TvSeriesCarousel = styled.div`
  display: flex;
  gap: 1rem;
  height: 26.8rem;
  width: 100%;
  overflow-x: scroll;
  /* scroll-snap-type: x mandatory; */
  scroll-behavior: smooth;

  .carousel-item {
    width: 11.3rem;
    height: 15.8rem;
    display: flex;
    flex-direction: column;
    flex: 1 0 35%;
    border-radius: 0.556rem;
    margin: 0 1.6rem;
    scroll-snap-align: start;

    &__img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 0.856rem;
    }
  }
`;
export const TvSeriesHeader = styled.h1`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.bold};
  margin-left: 1.6rem;
  margin-bottom: 1.2rem;
`;
export const TvSeriesText = styled.h1`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  margin-left: 1.8rem;
  margin-top: 0.8rem;
`;
