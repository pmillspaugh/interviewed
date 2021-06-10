import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { currentTheme } = useSelector((state) => state.theme);

  return (
    <FooterWrapper>
      <CopyRight theme={currentTheme}>
        @2021{' '}
        <InterviewedBold theme={currentTheme}>Interviewed.app</InterviewedBold>
      </CopyRight>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyRight = styled.em`
  color: ${(p) => p.theme.colorSecondary};
`;

const InterviewedBold = styled.strong`
  color: ${(p) => p.theme.borderPrimary};
`;

export default Footer;
