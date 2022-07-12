import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';

export const NavbarWrapper = styled.div`
  background-color: ${COLORS.xiketic};
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10;
`;
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 2.6rem 0.2rem 2.4rem;

  .links {
    text-decoration: none;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      background-color: red;
      border-radius: 50%;
      position: absolute;
      top: -0.4rem;
      right: 0.5rem;
      color: ${COLORS.white};
    }
  }

  .isActive {
    .links {
      text-decoration: none;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
      border-bottom: 1px solid ${COLORS.xiketic};

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        top: -0.4rem;
        right: 0.5rem;
        color: ${COLORS.white};
      }
    }
  }
`;

// export const NavIconWrapper = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.6rem;

//   span {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 2rem;
//     height: 2rem;
//     background-color: red;
//     border-radius: 50%;
//     position: absolute;
//     top: -0.4rem;
//     right: 0.5rem;
//     color: ${COLORS.white};
//   }
// `;

export const NavIconText = styled.div`
  color: ${COLORS.white};
`;
