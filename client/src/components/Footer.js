import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <em>
        @2021 <strong>Interviewed.app</strong>
      </em>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
