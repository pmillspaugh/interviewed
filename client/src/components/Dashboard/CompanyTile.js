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
      <p>
        <strong>Company: </strong>
        {company.companyName}
      </p>
      <p>
        <strong>Role: </strong>
        {company.role}
      </p>
      <p>
        <strong>City: </strong>
        {company.city}
      </p>
      <p>
        <strong>Applied? </strong>
        {company.applied ? 'Yes' : 'No'}
      </p>
      <p>
        <strong>Contacts: </strong>
        {company.contacts}
      </p>
      <p>
        <strong>Notes: </strong>
        {company.notes}
      </p>
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

export default CompanyTile;
