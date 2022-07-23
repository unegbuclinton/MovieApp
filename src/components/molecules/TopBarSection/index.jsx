import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../atoms/Input/Input';
import { playingMovie, searchMovie } from '../../features/Home/homeSlice';
import { DPIconDown } from '../../gallery/icons';
import image from '../../gallery/img/myImg.JPG';

import {
  MovieDB,
  TopBarContainer,
  TopBarImg,
  TopBarInfo,
  TopBarItem,
  TopBarSpan,
  TopBarText,
  TopBarWrapper,
} from './styles';

function TopBarComponent() {
  const [showMenu, setShowMenu] = useState(false);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 992);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getSearchDebounce = debounce((input) => {
    if (input) {
      dispatch(searchMovie(input));
    } else {
      console.log('Welcomeeeee');
      dispatch(playingMovie());
    }
  }, 700);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 992);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });
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
        <div className="profile-container">
          <TopBarImg src={image} onClick={() => navigate('/profile')} />
          {isDesktop && (
            <DPIconDown onClick={() => setShowMenu((prev) => !prev)} />
          )}
        </div>
      </TopBarInfo>
      <TopBarContainer>
        <Input
          onChange={(e) => getSearchDebounce(e.target.value)}
          search
          className="topbar-input"
          containerClass="input-container"
          placeholder="Search"
        />
      </TopBarContainer>
      {showMenu && (
        <TopBarItem>
          <Link
            className="menu__links"
            to="/"
            onClick={() => setShowMenu(false)}
          >
            Cinema Card
          </Link>
          <Link className="menu__links" to="/favourite">
            Favourites
          </Link>
          <Link className="menu__links" to="/hot-news">
            Hot News
          </Link>
        </TopBarItem>
      )}
    </TopBarWrapper>
  );
}

export default TopBarComponent;
