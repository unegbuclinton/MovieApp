import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTWEIGHTS } from '../../../constatnts/font-size';

export const InfoWrapper = styled.div`
  padding: 1.8rem;
  position: relative;

  .back-btn {
    position: absolute;
    top: 25px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 70%;
    margin: 0 auto;
  }
`;

export const InfoImg = styled.img`
  width: 13rem;
  height: 13rem;
  object-fit: cover;
  border-radius: 50%;
  background-position: center;
`;

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  justify-content: center;
  align-items: center;
  margin: 8rem 0;

  .image-pointer {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background-color: ${COLORS.white};
    position: absolute;
    bottom: -30px;
  }

  .edit-icon {
    position: absolute;
    right: 87px;
    bottom: 0px;
  }
`;

export const InfoForm = styled.form`
  .info-input {
    margin-bottom: 2rem;
  }

  .info-submit {
    width: 100%;
    padding: 1.2rem;
    background: ${COLORS.amethyst};
    font-size: 1.5rem;
    font-weight: ${FONTWEIGHTS.bold};
    margin-top: 4rem;

    @media only screen and (min-width: 768px) {
      display: block;
      width: 50%;
      margin: 0 auto;
    }
  }
`;
