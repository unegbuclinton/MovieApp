import React from 'react';
import img from '../../gallery/img/strange.jpg';
import img1 from '../../gallery/img/unchart.png';
import {
  HotMoviesCarousel,
  HotMoviesContainer,
  HotMoviesHeader,
  HotMoviesText,
  HotMoviesWrapper,
} from './styles';

function HotMovies() {
  return (
    <HotMoviesContainer>
      <HotMoviesHeader>Hot Movies</HotMoviesHeader>
      <HotMoviesWrapper>
        <HotMoviesCarousel>
          <div className="carousel-item">
            <img src={img} alt="" className="carousel-item__img" />
            <HotMoviesText> Dr. strange </HotMoviesText>
          </div>
          <div className="carousel-item">
            <img src={img1} alt="" className="carousel-item__img" />
            <HotMoviesText> Dr. strange </HotMoviesText>
          </div>
          <div className="carousel-item">
            <img src={img} alt="" className="carousel-item__img" />
            <HotMoviesText> Dr. strange </HotMoviesText>
          </div>
          <div className="carousel-item">
            <img src={img1} alt="" className="carousel-item__img" />
            <HotMoviesText> Dr. strange </HotMoviesText>
          </div>
          <div className="carousel-item">
            <img src={img} alt="" className="carousel-item__img" />
            <HotMoviesText> Dr. strange </HotMoviesText>
          </div>
          <div className="carousel-item">
            <img src={img} alt="" className="carousel-item__img" />
            <HotMoviesText> Dr. strange </HotMoviesText>
          </div>
        </HotMoviesCarousel>
      </HotMoviesWrapper>
    </HotMoviesContainer>
  );
}

export default HotMovies;
