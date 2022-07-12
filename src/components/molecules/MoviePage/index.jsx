import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button/Button';
import MovieLayout from '../../layout/movieLayout';
import { MoviePageContainer, MoviePageHeader, MoviePageText } from './styles';

function MoviePage() {
  const { singleMovie } = useSelector((state) => state.movie);

  const { release_date, overview, original_title, backdrop_path } = singleMovie;
  const navigate = useNavigate();
  const API_IMG = 'https://image.tmdb.org/t/p/w400/';
  const movieImg = `${API_IMG}${backdrop_path}`;
  const MoveNext = () => {
    navigate('/purchase');
  };
  return (
    <MovieLayout onClick={() => navigate('/')} strange={movieImg}>
      <MoviePageContainer>
        <div className="release-info">
          <MoviePageHeader>Release Date :</MoviePageHeader>
          <MoviePageText>{release_date}</MoviePageText>
        </div>
      </MoviePageContainer>

      <MoviePageContainer>
        <div className="header">
          <MoviePageHeader> {original_title}</MoviePageHeader>
        </div>
        <MoviePageText>{overview}</MoviePageText>
      </MoviePageContainer>
      <div className="btn-wrapper">
        <Button type="button" className="cta-btn" onClick={MoveNext}>
          Book Ticket
        </Button>
      </div>
    </MovieLayout>
  );
}

export default MoviePage;
