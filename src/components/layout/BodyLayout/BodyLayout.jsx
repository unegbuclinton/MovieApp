import React from 'react';
import styled from 'styled-components';
import Navbar from '../../molecules/Navbar';

function BodyLayout({ children }) {
  return (
    <BodyLayoutWrapper>
      {children}
      <Navbar />
    </BodyLayoutWrapper>
  );
}

export default BodyLayout;

const BodyLayoutWrapper = styled.div`
  margin-bottom: 1rem;
`;
