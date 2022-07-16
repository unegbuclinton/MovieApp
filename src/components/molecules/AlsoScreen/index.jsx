import React from 'react';
import { useSelector } from 'react-redux';
import { DPIconBookMark, DPIconRating } from '../../gallery/icons';
import {
  AlsoScreeningContainer,
  AlsoScreeningWrapper,
  ScreeningContainer,
  ScreeningImg,
  ScreeningImgWrapper,
} from './styles';

function AlsoScreening() {
  const API_IMG = 'https://image.tmdb.org/t/p/w200/';
  const { topRated } = useSelector((state) => state.home);
  return (
    <AlsoScreeningWrapper>
      {topRated?.map(({ poster_path, original_title, id }) => (
        <AlsoScreeningContainer key={id}>
          <ScreeningContainer>
            <ScreeningImgWrapper>
              <ScreeningImg src={`${API_IMG}${poster_path}`} />
            </ScreeningImgWrapper>
            <div className="details">
              <h3>{original_title}</h3>
              <DPIconRating />
            </div>
          </ScreeningContainer>

          <DPIconBookMark className="icon" />
        </AlsoScreeningContainer>
      ))}
    </AlsoScreeningWrapper>
  );
}

export default AlsoScreening;
