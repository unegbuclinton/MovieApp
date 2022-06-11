import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';
import BodyLayout from '../../layout/BodyLayout/BodyLayout';
import AlsoScreening from '../../molecules/AlsoScreen';
import HotMovies from '../../molecules/HotMovies';
import TopBarComponent from '../../molecules/TopBarSection';

function HomePage() {
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
        <AlsoScreening />
        <AlsoScreening />
        <AlsoScreening />
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
