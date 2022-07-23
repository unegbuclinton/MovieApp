import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';
import Button from '../../atoms/button/Button';
import { DPIconBack, DPIconRate, DPIconShare } from '../../gallery/icons';

function MovieLayout({ children, onClick, strange }) {
  return (
    <MoviePageWrapper>
      <MoviePageDisplay strange={strange}>
        <span onClick={onClick}>
          <DPIconBack />
        </span>
        <p className="screen-info">1hr 20min</p>
      </MoviePageDisplay>
      <MoviePageContainer>
        <div className="info-wrapper">
          <div className="container-info">
            <Button className="info-btn">18+</Button>
            <Button className="info-btn">Action</Button>
            <Button className="info-btn">
              <span>
                <DPIconRate />
              </span>
              4.8
            </Button>
          </div>
          <div className="share-btn">
            <DPIconShare />
          </div>
        </div>
      </MoviePageContainer>
      {children}
    </MoviePageWrapper>
  );
}

export default MovieLayout;

const MoviePageWrapper = styled.div`
  .btn-wrapper {
    width: 100%;
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;

    .cta-btn {
      display: block;
      margin: 0 auto;
      padding: 1rem 7rem;
      border-radius: 0.54rem;
      background: ${COLORS.amethyst};
      color: ${COLORS.white};
      font-weight: ${FONTWEIGHTS.bold};
      border: none;
      outline: none;
    }
  }

  @media only screen and (min-width: 768px) {
    max-width: 75%;
    margin: 0 auto;
    padding-top: 2rem;
    height: 51rem;
  }
`;

const MoviePageContainer = styled.div`
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
    margin-bottom: 2rem;
  }
`;

const MoviePageDisplay = styled.div`
  position: relative;
  width: 100%;
  padding-top: 2rem;
  padding-left: 1rem;
  height: 27.5rem;
  background-image: linear-gradient(
      to bottom,
      rgba(3, 2, 16, 0) 15%,
      rgba(22, 15, 41, 0)
    ),
    url(${({ strange }) => strange});
  background-size: cover;
  background-position: top;
  border-radius: 1.5rem;

  .screen-info {
    position: absolute;
    bottom: 0.8rem;
    right: 1.5rem;
    font-size: ${FONTSIZES.xsmall};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS.white};
  }

  @media only screen and (min-width: 768px) {
    height: 51rem;
  }
`;
