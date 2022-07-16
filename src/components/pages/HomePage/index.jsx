import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';
import {
  getTvSeries,
  playingMovie,
  topMovie,
} from '../../features/Home/homeSlice';
import BodyLayout from '../../layout/BodyLayout/BodyLayout';
import AlsoScreening from '../../molecules/AlsoScreen';
import HotMovies from '../../molecules/HotMovies';
import TopBarComponent from '../../molecules/TopBarSection';
import TvSeries from '../../molecules/TvSeries';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playingMovie());
    dispatch(topMovie());
    dispatch(getTvSeries());
  });

  return (
    <BodyLayout>
      <TopSectionWrapper>
        <TopBarComponent />
      </TopSectionWrapper>
      <HotMovieSectionWrapper>
        <HotMovies />
      </HotMovieSectionWrapper>
      <TvSeriesSectionWrapper>
        <TvSeries />
      </TvSeriesSectionWrapper>
      <AlsoScreeningSectionWrapper>
        <HomePageHeader>Top Rated Movie</HomePageHeader>
        <AlsoScreening />
      </AlsoScreeningSectionWrapper>
    </BodyLayout>
  );
}

export default HomePage;

const TopSectionWrapper = styled.section``;

const HotMovieSectionWrapper = styled.section``;

const TvSeriesSectionWrapper = styled.section``;

const AlsoScreeningSectionWrapper = styled.section`
  padding: 2.4rem;
`;

const HomePageHeader = styled.div`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  margin-bottom: 1.2rem;
`;
