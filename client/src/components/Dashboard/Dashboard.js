import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadCompanyList } from '../../actions/actionCreators';
import AddCompany from './AddCompany';
import CompanyTile from './CompanyTile';
import Modal from '../ui/Modal';

const Dashboard = () => {
  // access the user from redux store
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // store state of add company modal
  const [addCompanyModal, setAddCompanyModal] = useState(false);

  // when dashboard loads, fetch the user document from the database
  // create a user if one doesn't already exist with the matching token
  useEffect(() => {
    fetch(`/api/user/${user.authToken}`)
      .then((res) => res.json())
      .then((user) => {
        dispatch(loadCompanyList(user.companyList));
      });
  }, []);

  // display the add company modal when the user clicks on the add company button
  const openModal = () => {
    setAddCompanyModal(true);
  };

  // display the add company modal when the user clicks on the add company button
  const closeModal = () => {
    setAddCompanyModal(false);
  };

  return (
    <TrackerWrapper>
      <TrackerHeading>
        {`${user.name}'s job search`.toUpperCase()}
      </TrackerHeading>
      <TrackerGrid>
        <button onClick={openModal}>Add company</button>
        {addCompanyModal && (
          <Modal>
            <AddCompany closeModal={closeModal} />
          </Modal>
        )}
        {user.companyList.map((company, index) => (
          <CompanyTile company={company} key={index} />
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

export default Dashboard;
