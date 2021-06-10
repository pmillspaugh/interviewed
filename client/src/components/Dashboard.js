import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../theme';
import { loadCompanyList } from '../actions/actionCreators';
import AddCompany from './AddCompany';

const Dashboard = () => {
  // access the user from redux store
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // when dashboard loads, fetch the user document from the database
  // create a user if one doesn't already exist with the matching token
  useEffect(() => {
    // first ~102 characters of google auth token are always the same
    const dbAuthToken = user.authToken.substring(0, 100);
    fetch(`/api/user/${dbAuthToken}`)
      .then((res) => res.json())
      .then((user) => {
        dispatch(loadCompanyList(user.companyList));
      });
  }, []);

  return (
    <TrackerWrapper>
      <TrackerHeading>{`${user.name}'s job hunt`.toUpperCase()}</TrackerHeading>
      <TrackerGrid>
        <AddCompany />
        {user.companyList.map((company, index) => (
          <CompanyTile key={index}>
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
            <button>Delete</button>
          </CompanyTile>
        ))}
      </TrackerGrid>
    </TrackerWrapper>
  );
};

const TrackerWrapper = styled.main`
  width: 100%;
  padding: 36px 0;
`;

const TrackerHeading = styled.h1`
  text-align: center;
  padding-bottom: 36px;
`;

const TrackerGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const CompanyTile = styled.article`
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

export default Dashboard;
