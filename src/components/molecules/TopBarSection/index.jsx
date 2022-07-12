import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../atoms/Input/Input';
import { popularMovie, searchMovie } from '../../features/Home/homeSlice';
import image from '../../gallery/img/myImg.JPG';

import {
  MovieDB,
  TopBarContainer,
  TopBarImg,
  TopBarInfo,
  TopBarSpan,
  TopBarText,
  TopBarWrapper,
} from './styles';

function TopBarComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const getSearchDebounce = useCallback(
    debounce(() => {
      if (input) {
        dispatch(searchMovie(input));
      } else {
        dispatch(popularMovie());
      }
    }, 700),
    [input]
  );
  useEffect(() => {
    getSearchDebounce();
    return getSearchDebounce.cancel;
  }, [input]);
  return (
    <TopBarWrapper>
      <MovieDB
        src={
          'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
        }
        alt="movie-db"
      />
      <TopBarInfo>
        <TopBarText>
          Hello <TopBarSpan>unegbu</TopBarSpan>
        </TopBarText>
        <TopBarImg src={image} onClick={() => navigate('/profile')} />
      </TopBarInfo>
      <TopBarContainer>
        <Input
          onChange={(e) => setInput(e.target.value)}
          search
          className="topbar-input"
          containerClass="input-container"
          placeholder="search"
        />
      </TopBarContainer>
    </TopBarWrapper>
  );
}

export default TopBarComponent;
