import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constatnts/font-size';

export const ProfileWrapper = styled.div`
  padding: 1.8rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;

  .profile-btn {
    padding: 0.8rem 3.5rem;
    background-color: ${COLORS['xiketic-200']};
    color: ${COLORS.white};
    font-weight: ${FONTWEIGHTS.bold};
    border: none;
    border-radius: 2rem;
  }
`;

export const ProfileImg = styled.img`
  width: 13rem;
  height: 13rem;
  object-fit: cover;
  border-radius: 50%;
  background-position: center;
`;

export const ProfileText = styled.p`
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.bold};
`;

export const ProfileContainer = styled.div`
  margin-top: 4rem;
  padding: 1.1rem;

  @media only screen and (min-width: 768px) {
    max-width: 70%;
    margin: 0 auto;
  }
`;

export const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${COLORS['xiketic-200']};
  margin-bottom: 2rem;

  .profile-item__left {
    display: flex;
    gap: 1rem;
  }
`;
