import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMovieById } from '../../features/Movie/MovieSlice';
import Modal from '../../layout/modal';
import {
  TvSeriesCarousel,
  TvSeriesContainer,
  TvSeriesHeader,
  TvSeriesText,
  TvSeriesWrapper,
} from './styles';

function TvSeries() {
  const [show, setShow] = useState(false);
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
                    setShow(true);
                  }}
                />
              </div>

              <TvSeriesText>{current.name}</TvSeriesText>
            </div>
          ))}
        </TvSeriesCarousel>
      </TvSeriesWrapper>
      <Modal show={show} hide={() => setShow(false)}>
        <p>This Service is currently not avialable now</p>
      </Modal>
    </TvSeriesContainer>
  );
}

export default TvSeries;
