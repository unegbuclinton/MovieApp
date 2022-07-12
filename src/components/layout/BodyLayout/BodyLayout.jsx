import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES } from '../../../constatnts/font-size';
import Navbar from '../../molecules/Navbar';

function BodyLayout({ children }) {
  const [show, setShow] = useState(false);

  const onClick = () => setShow((prev) => !prev);
  return (
    <BodyLayoutWrapper show={show}>
      <div className="nav-menu">
        <Link className="nav-menu__links" to="/">
          Cinema Card
        </Link>
        <Link className="nav-menu__links" to="/">
          Subscription
        </Link>
        <Link className="nav-menu__links" to="/">
          Hot News
        </Link>
      </div>

      {children}
      <Navbar onClick={onClick} />
    </BodyLayoutWrapper>
  );
}

export default BodyLayout;

const BodyLayoutWrapper = styled.div`
  margin-bottom: 1rem;

  .nav-menu {
    position: fixed;
    top: 0;
    left: ${({ show }) => (show ? '0' : '100%')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    width: 100%;
    height: 100vh;
    background-color: ${COLORS.xiketic};
    z-index: 5;
    opacity: 0.97;
    transition: left 0.4s ease-in;

    &__links {
      width: 100%;
      text-align: center;
      padding: 1rem 0;
      text-decoration: none;
      color: ${COLORS.white};
      font-size: ${FONTSIZES.xxlarge};

      &:hover {
        background-color: ${COLORS.amethyst};
      }
    }
  }
`;
