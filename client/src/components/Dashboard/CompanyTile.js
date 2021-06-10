import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadCompanyList } from '../../actions/actionCreators';

const CompanyTile = ({ company }) => {
  const user = useSelector((state) => state.user);
  const { currentTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleDeleteTileClick = () => {
    // update user document in the database to remove the company
    fetch('/api/user/delete-company', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, companyName: company.companyName }),
    })
      .then((res) => res.json())
      .then((companyList) => {
        // update user in the redux store
        dispatch(loadCompanyList(companyList));
      });
  };

  return (
    <Tile theme={currentTheme}>
      <CompanyName>{company.companyName.toUpperCase()}</CompanyName>
      <CompanyInfoWrapper>
        <Description theme={currentTheme}>Role: </Description>
        <Information theme={currentTheme}>{company.role}</Information>
      </CompanyInfoWrapper>
      <CompanyInfoWrapper>
        <Description theme={currentTheme}>Applied? </Description>
        <Information theme={currentTheme}>
          {company.applied ? 'Yes' : 'No'}
        </Information>
      </CompanyInfoWrapper>
      <CompanyInfoWrapper>
        <Description theme={currentTheme}>Contacts: </Description>
        <Information theme={currentTheme}>{company.contacts}</Information>
      </CompanyInfoWrapper>
      <CompanyInfoWrapper>
        <Description theme={currentTheme}>Notes: </Description>
        <Information theme={currentTheme}>{company.notes}</Information>
      </CompanyInfoWrapper>
      <ButtonsWrapper>
        <EditDeleteButton theme={currentTheme}>Edit</EditDeleteButton>
        <EditDeleteButton theme={currentTheme} onClick={handleDeleteTileClick}>
          Delete
        </EditDeleteButton>
      </ButtonsWrapper>
    </Tile>
  );
};

const Tile = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 300px;
  padding: 16px;
  border-radius: 10px;
  background-color: ${(p) => p.theme.backgroundSecondary};
  color: ${(p) => p.theme.borderPrimary};
  border: 2px solid ${(p) => p.theme.borderPrimary};
`;

const CompanyName = styled.h2`
  width: 100%;
  margin-bottom: 8px;
  text-align: center;
`;

const CompanyInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const Description = styled.h3`
  color: ${(p) => p.theme.colorSecondary};
`;

const Information = styled.p`
  color: ${(p) => p.theme.colorSecondary};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  width: 100%;
`;

const EditDeleteButton = styled.button`
  width: 45%;
  padding: 4px 0;
  border-radius: 10px;
  border: 2px solid ${(p) => p.theme.borderSecondary};
  color: ${(p) => p.theme.borderSecondary};
  background-color: ${(p) => p.theme.backgroundSecondary};

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.backgroundSecondary};
    background-color: ${(p) => p.theme.colorPrimary};
  }
`;

export default CompanyTile;
