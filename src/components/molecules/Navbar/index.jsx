import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  DPIconComing,
  DPIconHome,
  DPIconMore,
  DPIconProfile,
} from '../../gallery/icons';
import {
  NavbarContainer,
  NavbarMobileWrapper,
  NavbarWrapper,
  NavIconText,
} from './styles';

function Navbar({ onClick }) {
  return (
    <>
      <NavbarWrapper>
        <NavbarContainer>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'isActive' : 'links')}
          >
            <DPIconHome />
            <NavIconText>Home</NavIconText>
          </NavLink>
          <NavLink
            to="/coming-soon"
            className={({ isActive }) => (isActive ? 'isActive' : 'links')}
          >
            <DPIconComing />
            <NavIconText>Coming Soon</NavIconText>
            <span>3</span>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'isActive' : 'links')}
          >
            <DPIconProfile />
            <NavIconText>Profile</NavIconText>
          </NavLink>
          <div>
            <DPIconMore />
            <NavIconText onClick={onClick}>More</NavIconText>
          </div>
        </NavbarContainer>
      </NavbarWrapper>

      <NavbarMobileWrapper>
        <NavbarContainer>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'isActive' : 'links')}
          >
            <NavIconText>Home</NavIconText>
          </NavLink>
          <NavLink
            to="/coming-soon"
            className={({ isActive }) => (isActive ? 'isActive' : 'links')}
          >
            <NavIconText>Coming Soon</NavIconText>
            <span>3</span>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'isActive' : 'links')}
          >
            <NavIconText>Profile</NavIconText>
          </NavLink>
        </NavbarContainer>
      </NavbarMobileWrapper>
    </>
  );
}

export default Navbar;
