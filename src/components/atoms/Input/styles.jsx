import styled from 'styled-components';
import { COLORS } from '../../../constatnts/colors';

export const InputField = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 4.4rem;
  border-radius: 5px;
  background-color: ${COLORS['xiketic-200']};
  color: ${COLORS.white};
  padding: 20px;
  margin-bottom: 16px;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const InputFieldIcon = styled.span`
  .microphone {
    position: absolute;
    top: 0.4rem;
    right: 1.5rem;
    cursor: pointer;
  }

  .search {
    position: absolute;
    top: 1.3rem;
    left: 1.5rem;
    cursor: pointer;
  }
`;
