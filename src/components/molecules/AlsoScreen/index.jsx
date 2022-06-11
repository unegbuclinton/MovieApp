import React from 'react';
import { DPIconBookMark, DPIconRating } from '../../gallery/icons';
import image from '../../gallery/img/tenet.jpg';
import {
  AlsoScreeningContainer,
  AlsoScreeningWrapper,
  ScreeningContainer,
  ScreeningImg,
  ScreeningImgWrapper,
} from './styles';

function AlsoScreening() {
  return (
    <AlsoScreeningWrapper>
      <AlsoScreeningContainer>
        <ScreeningContainer>
          <ScreeningImgWrapper>
            <ScreeningImg src={image} />
          </ScreeningImgWrapper>
          <div className="details">
            <h3>Tenet</h3>
            <DPIconRating />
          </div>
        </ScreeningContainer>
        <DPIconBookMark />
      </AlsoScreeningContainer>
    </AlsoScreeningWrapper>
  );
}

export default AlsoScreening;
