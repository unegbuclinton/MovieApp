import React from 'react';
import Input from '../../atoms/Input/Input';
import image from '../../gallery/img/myImg.JPG';
import {
  TopBarContainer,
  TopBarImg,
  TopBarInfo,
  TopBarSpan,
  TopBarText,
  TopBarWrapper,
} from './styles';

function TopBarComponent() {
  return (
    <TopBarWrapper>
      <TopBarInfo>
        <TopBarText>
          Hello <TopBarSpan>unegbu</TopBarSpan>
        </TopBarText>
        <TopBarImg src={image} />
      </TopBarInfo>
      <TopBarContainer>
        <Input
          className="topbar-input"
          containerClass="input-container"
          placeholder="search"
        />
      </TopBarContainer>
    </TopBarWrapper>
  );
}

export default TopBarComponent;
