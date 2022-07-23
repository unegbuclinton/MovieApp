import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';
import { removeFromFavorite } from '../../features/redux/favorite';
import { DPIconBack } from '../../gallery/icons';

function FavouriteScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { favouriteMovie } = useSelector((state) => state.favourite);
  const API_IMG = 'https://image.tmdb.org/t/p/w500/';
  return (
    <FavouriteWrapper>
      <span className="back-btn" onClick={() => navigate('/')}>
        <DPIconBack />
      </span>
      <FavouriteHeader>Favourites</FavouriteHeader>
      {!!favouriteMovie.length ? (
        favouriteMovie?.map((current) => (
          <FavouriteContainer key={current.id}>
            <FavouriteImage
              src={`${API_IMG}${current?.payload?.backdrop_path}`}
            />
            <div>
              <FavouriteText>{current?.payload?.original_title}</FavouriteText>
              <FavouriteText
                onClick={() => dispatch(removeFromFavorite(current.id))}
              >
                <span className="remove-cta">Remove from list</span>
              </FavouriteText>
            </div>
          </FavouriteContainer>
        ))
      ) : (
        <EmptyState> There are no favourite movies added </EmptyState>
      )}
    </FavouriteWrapper>
  );
}

export default FavouriteScreen;

const FavouriteWrapper = styled.div`
  position: relative;
  padding: 1.8rem;
  margin-top: 8rem;

  .back-btn {
    position: absolute;
    top: -35px;
    left: 12px;
  }
`;

const FavouriteHeader = styled.h1`
  color: ${COLORS.white};
  margin-bottom: 5.6rem;
`;

const FavouriteImage = styled.img`
  width: 13.5rem;
  height: 20.5rem;
  object-fit: cover;
  border-radius: 1.2rem;
  margin-bottom: 2rem;
`;

const FavouriteText = styled.p`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.normal};
  margin-bottom: 2.7rem;

  span {
    color: ${COLORS['cancel-red']};
  }
`;
const FavouriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media screen and (min-width: 992px) {
    max-width: 70%;
    margin: 0 auto;
  }
`;
const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.white};
`;
