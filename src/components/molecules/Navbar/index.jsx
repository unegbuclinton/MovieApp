import React from 'react';
import {
  DPIconComing,
  DPIconHome,
  DPIconMore,
  DPIconProfile,
} from '../../gallery/icons';
import {
  NavbarContainer,
  NavbarWrapper,
  NavIconText,
  NavIconWrapper,
} from './styles';

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavIconWrapper>
          <DPIconHome />
          <NavIconText>Home</NavIconText>
        </NavIconWrapper>
        <NavIconWrapper>
          <DPIconComing />
          <NavIconText>Coming Soon</NavIconText>
          <span>3</span>
        </NavIconWrapper>
        <NavIconWrapper>
          <DPIconProfile />
          <NavIconText>Profile</NavIconText>
        </NavIconWrapper>
        <NavIconWrapper>
          <DPIconMore />
          <NavIconText>More</NavIconText>
        </NavIconWrapper>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
