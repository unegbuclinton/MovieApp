import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToFavorite } from '../../features/redux/favorite';
import { DPIconFavourite, DPIconRating } from '../../gallery/icons';
import {
  AlsoScreeningContainer,
  AlsoScreeningWrapper,
  ScreeningContainer,
  ScreeningImg,
  ScreeningImgWrapper,
} from './styles';

function AlsoScreening() {
  const dispatch = useDispatch();
  const API_IMG = 'https://image.tmdb.org/t/p/w200/';
  const { topRated } = useSelector((state) => state.home);
  const notify = () => toast('added to favourite');
  return (
    <AlsoScreeningWrapper>
      {topRated?.map((current) => (
        <AlsoScreeningContainer key={current.id}>
          <ScreeningContainer>
            <ScreeningImgWrapper>
              <ScreeningImg src={`${API_IMG}${current.poster_path}`} />
            </ScreeningImgWrapper>
            <div className="details">
              <h3>{current.original_title}</h3>
              <DPIconRating />
            </div>
          </ScreeningContainer>

          <DPIconFavourite
            className="icon"
            onClick={() => {
              dispatch(addToFavorite(current));
              notify();
            }}
          />
        </AlsoScreeningContainer>
      ))}
    </AlsoScreeningWrapper>
  );
}

export default AlsoScreening;
