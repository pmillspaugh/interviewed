import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadCompanyList } from '../../actions/actionCreators';
import { colors } from '../../theme';

const CompanyTile = ({ company }) => {
  const user = useSelector((state) => state.user);
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
    <Tile>
      <CompanyName>{company.companyName.toUpperCase()}</CompanyName>
      <div>
        <h3>Role: </h3>
        <p>{company.role}</p>
      </div>
      <RowSpacer />
      <div>
        <h3>City: </h3>
        <p>{company.city}</p>
      </div>
      <RowSpacer />
      <div>
        <h3>Applied? </h3>
        <p>{company.applied ? 'Yes' : 'No'}</p>
      </div>
      <RowSpacer />
      <div>
        <h3>Contacts: </h3>
        <p>{company.contacts}</p>
      </div>
      <RowSpacer />
      <div>
        <h3>Notes: </h3>
        <p>{company.notes}</p>
      </div>
      <button>Edit</button>
      <button onClick={handleDeleteTileClick}>Delete</button>
    </Tile>
  );
};

const Tile = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 300px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${colors.lightBlue};
  color: ${colors.mediumBrown};
  box-shadow: 0 0 10px ${colors.mediumGreen};
`;

const RowSpacer = styled.div`
  width: 100%;
  margin: 12px 0;
  border-bottom: 2px solid ${colors.mediumBrown};
`;

const CompanyName = styled.h2`
  width: 100%;
  margin: 16px 0;
  text-align: center;
`;

export default CompanyTile;
