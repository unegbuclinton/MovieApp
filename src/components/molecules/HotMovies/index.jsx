import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMovieById } from '../../features/Movie/MovieSlice';
import {
  HotMoviesCarousel,
  HotMoviesContainer,
  HotMoviesHeader,
  HotMoviesText,
  HotMoviesWrapper,
} from './styles';

function HotMovies() {
  const navigate = useNavigate();
  const { nowPlaying } = useSelector((state) => state.home);
  const API_IMG = 'https://image.tmdb.org/t/p/w300/';
  const dispatch = useDispatch();

  return (
    <HotMoviesContainer>
      <HotMoviesHeader>Hot Movies</HotMoviesHeader>
      <HotMoviesWrapper>
        <HotMoviesCarousel>
          {nowPlaying?.map((current) => (
            <div key={current.id}>
              <div className="carousel-item">
                <img
                  src={`${API_IMG}${current.backdrop_path}`}
                  alt="movie poster"
                  className="carousel-item__img"
                  onClick={() => {
                    dispatch(getMovieById(current.id)).then(() =>
                      navigate('/movie')
                    );
                  }}
                />
              </div>
              <HotMoviesText>{current.original_title}</HotMoviesText>
            </div>
          ))}
        </HotMoviesCarousel>
      </HotMoviesWrapper>
    </HotMoviesContainer>
  );
}

export default HotMovies;
