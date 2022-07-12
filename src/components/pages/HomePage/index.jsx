import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';
import { playingMovie, popularMovie } from '../../features/Home/homeSlice';
import BodyLayout from '../../layout/BodyLayout/BodyLayout';
import AlsoScreening from '../../molecules/AlsoScreen';
import HotMovies from '../../molecules/HotMovies';
import TopBarComponent from '../../molecules/TopBarSection';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playingMovie());
    dispatch(popularMovie());
  });

  return (
    <BodyLayout>
      <TopSectionWrapper>
        <TopBarComponent />
      </TopSectionWrapper>
      <HotMovieSectionWrapper>
        <HotMovies />
      </HotMovieSectionWrapper>
      <AlsoScreeningSectionWrapper>
        <HomePageHeader>Also Showing</HomePageHeader>
        <AlsoScreening />
      </AlsoScreeningSectionWrapper>
    </BodyLayout>
  );
}

export default HomePage;

const TopSectionWrapper = styled.section``;

const HotMovieSectionWrapper = styled.section``;

const AlsoScreeningSectionWrapper = styled.section`
  padding: 2.4rem;
`;

const HomePageHeader = styled.div`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  margin-bottom: 1.2rem;
`;
