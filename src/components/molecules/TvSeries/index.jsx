import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMovieById } from '../../features/Movie/MovieSlice';
import {
  TvSeriesCarousel,
  TvSeriesContainer,
  TvSeriesHeader,
  TvSeriesText,
  TvSeriesWrapper,
} from './styles';

function TvSeries() {
  const navigate = useNavigate();
  const { tvSeries } = useSelector((state) => state.home);

  const API_IMG = 'https://image.tmdb.org/t/p/w300/';
  const dispatch = useDispatch();
  return (
    <TvSeriesContainer>
      <TvSeriesHeader>TV Series for stream</TvSeriesHeader>
      <TvSeriesWrapper>
        <TvSeriesCarousel>
          {tvSeries?.map((current) => (
            <div key={current.id}>
              <div className="carousel-item">
                <img
                  src={`${API_IMG}${current.backdrop_path}`}
                  alt="movie poster"
                  className="carousel-item__img"
                  onClick={() => {
                    dispatch(getMovieById(current.id)).then(() =>
                      navigate('/')
                    );
                  }}
                />
              </div>
              <TvSeriesText>{current.name}</TvSeriesText>
            </div>
          ))}
        </TvSeriesCarousel>
      </TvSeriesWrapper>
    </TvSeriesContainer>
  );
}

export default TvSeries;
