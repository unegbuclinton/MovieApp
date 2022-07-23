import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';
import { DPIconBack } from '../../gallery/icons';
import img from '../../gallery/img/strange.jpg';

function HotNews() {
  const navigate = useNavigate();
  return (
    <HotNewsWrapper>
      <span onClick={() => navigate('/')}>
        <DPIconBack />
      </span>
      <HotNewsHeader>Hot News</HotNewsHeader>
      <HotNewsContainer>
        <HotNewsImg src={img} alt="news-poster" />
        <HotNewsHeadLine>The Dead</HotNewsHeadLine>
        <HotNewsDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quas cum sapiente inventore voluptatum minima laborum distinctio
          consequatur iure dolorum.
        </HotNewsDesc>
        <div>
          <a
            className="link-to"
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Github"
          >
            Read More ...
          </a>
        </div>
      </HotNewsContainer>
    </HotNewsWrapper>
  );
}

export default HotNews;

const HotNewsWrapper = styled.div`
  position: relative;
  padding: 1.8rem;
  margin-top: 7rem;

  span {
    position: absolute;
    top: -40px;
    left: 12px;
  }

  @media screen and (min-width: 992px) {
    max-width: 85%;
    margin: 0 auto;
  }
`;
const HotNewsHeader = styled.h1`
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS.white};
  margin-bottom: 3.2rem;
  @media screen and (min-width: 992px) {
    font-size: ${FONTSIZES.xxlarge};
  }
`;
const HotNewsContainer = styled.div`
  div {
    display: flex;

    .link-to {
      width: 100%;
      text-decoration: none;
      color: ${COLORS.white};
      text-align: right;
      font-size: ${FONTSIZES.xsmall};
      margin-top: 0.5rem;

      &:hover {
        color: ${COLORS.amethyst};
      }
    }
  }
`;
const HotNewsImg = styled.img`
  width: 100%;
  height: 16.6rem;
  object-fit: cover;
  border-radius: 0.5rem;

  @media screen and (min-width: 992px) {
    height: 50.1rem;
  }
`;
const HotNewsHeadLine = styled.h2`
  font-size: ${FONTSIZES.base};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS.white};
  margin-top: 2rem;
  @media screen and (min-width: 992px) {
    font-size: ${FONTSIZES.lg};
  }
`;
const HotNewsDesc = styled.p`
  font-size: ${FONTSIZES.xsmall};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS.white};
  margin-top: 0.7rem;
  word-break: break-all;

  @media screen and (min-width: 992px) {
    font-size: ${FONTSIZES.base};
  }
`;
