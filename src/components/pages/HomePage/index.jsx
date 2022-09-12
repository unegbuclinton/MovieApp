import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';
import LoadingState from '../../atoms/loading';
import {
  getTvSeries,
  playingMovie,
  topMovie,
} from '../../features/Home/homeSlice';
import BodyLayout from '../../layout/BodyLayout/BodyLayout';
import AlsoScreening from '../../molecules/AlsoScreen';
// import HotMovies from '../../molecules/HotMovies';
import TopBarComponent from '../../molecules/TopBarSection';
import TvSeries from '../../molecules/TvSeries';

const HotMovies = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../../molecules/HotMovies')), 2000);
  });
});

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playingMovie());
    dispatch(topMovie());
    dispatch(getTvSeries());
  }, [dispatch]);

  return (
    <BodyLayout>
      <TopSectionWrapper>
        <TopBarComponent />
      </TopSectionWrapper>
      <HotMovieSectionWrapper>
        <Suspense fallback={<LoadingState className="loading-state" />}>
          <HotMovies />
        </Suspense>
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

const HotMovieSectionWrapper = styled.section`
  .loading--state {
    margin: 40rem 0;
  }
`;

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
