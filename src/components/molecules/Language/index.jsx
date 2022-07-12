import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';
import { FONTSIZES } from '../../../constatnts/font-size';
import { DPIconBack } from '../../gallery/icons';
import SelectDropDown from '../selectDropDown';

function Language() {
  const navigate = useNavigate();
  return (
    <LanguageWrapper>
      <span onClick={() => navigate('/profile')}>
        <DPIconBack />
      </span>
      <LanguageContainer>
        <LanguageHeader>Choose a Language</LanguageHeader>
        <SelectDropDown />
      </LanguageContainer>
    </LanguageWrapper>
  );
}

export default Language;

const LanguageWrapper = styled.div`
  padding: 1.8rem;
`;

const LanguageHeader = styled.h1`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xlarge};
  margin-bottom: 4.4rem;
`;
const LanguageContainer = styled.div`
  margin-top: 6rem;
`;
