import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { loadCompanyList } from '../../actions/actionCreators';

const EditCompany = ({ company, closeEditModal }) => {
  const user = useSelector((state) => state.user);
  const { currentTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [companyName, setCompanyName] = useState(company.companyName);
  const [role, setRole] = useState(company.role);
  const [city, setCity] = useState(company.city);
  const [applied, setApplied] = useState(company.applied);
  const [contacts, setContacts] = useState(company.contacts);
  const [notes, setNotes] = useState(company.notes);

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleAppliedChange = (e) => {
    setApplied(e.target.checked);
  };
  const handleContactsChange = (e) => {
    setContacts(e.target.value);
  };
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleEditCompanyClick = (e) => {
    e.preventDefault();

    // close the modal
    closeEditModal();

    const postRequestBody = {
      user,
      companyName,
      role,
      city,
      applied,
      contacts,
      notes,
    };

    // post new company to database
    fetch('/api/user/edit-company', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postRequestBody),
    })
      .then((res) => res.json())
      .then((companyList) => {
        // once response comes back, dispatch update to user store
        dispatch(loadCompanyList(companyList));
      });
  };

  const handleCancelButtonClick = () => {
    // close modal
    closeEditModal();
  };

  return (
    <EditCompanyWrapper theme={currentTheme}>
      <EditCompanyTitle theme={currentTheme}>Edit company</EditCompanyTitle>
      <CompanyInput
        type='text'
        value={companyName}
        placeholder='Company'
        onChange={(e) => handleCompanyNameChange(e)}
        theme={currentTheme}
      />
      <CompanyInput
        type='text'
        value={role}
        placeholder='Role'
        onChange={(e) => handleRoleChange(e)}
        theme={currentTheme}
      />
      <CompanyInput
        type='text'
        value={city}
        placeholder='City'
        onChange={(e) => handleCityChange(e)}
        theme={currentTheme}
      />
      <CompanyInput
        type='text'
        value={contacts}
        placeholder='Contacts'
        onChange={(e) => handleContactsChange(e)}
        theme={currentTheme}
      />
      <CompanyInput
        type='text'
        value={notes}
        placeholder='Notes'
        onChange={(e) => handleNotesChange(e)}
        theme={currentTheme}
      />
      <AppliedLabel theme={currentTheme} htmlFor='applied'>
        Applied yet?
        <AppliedInput
          name='applied'
          value={applied}
          type='checkbox'
          onChange={(e) => handleAppliedChange(e)}
          theme={currentTheme}
        />
      </AppliedLabel>
      <ButtonWrapper>
        <EditButton theme={currentTheme} onClick={handleEditCompanyClick}>
          Save
        </EditButton>
        <CancelButton theme={currentTheme} onClick={handleCancelButtonClick}>
          Cancel
        </CancelButton>
      </ButtonWrapper>
    </EditCompanyWrapper>
  );
};

const EditCompanyWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  padding: 16px;
  background-color: ${(p) => p.theme.backgroundSecondary};
  color: ${(p) => p.theme.borderPrimary};
  border: 2px solid ${(p) => p.theme.borderPrimary};
  border-radius: 10px;
`;

const EditCompanyTitle = styled.h2`
  width: 100%;
  margin-bottom: 16px;
  text-align: center;
  color: ${(p) => p.theme.colorSecondary};
`;

const CompanyInput = styled.input`
  width: 100%;
  margin-bottom: 12px;
  padding: 4px;
  border: 2px solid ${(p) => p.theme.borderSecondary};
  border-radius: 5px;
`;

const AppliedLabel = styled.label`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  color: ${(p) => p.theme.colorSecondary};
`;

const AppliedInput = styled.input`
  width: 16px;
  height: 16px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const EditButton = styled.button`
  width: 45%;
  padding: 4px 0;
  border-radius: 5px;
  border: 2px solid ${(p) => p.theme.borderPrimary};
  background-color: ${(p) => p.theme.backgroundSecondary};
  color: ${(p) => p.theme.borderPrimary};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(p) => p.theme.borderPrimary};
    background-color: ${(p) => p.theme.borderPrimary};
    color: ${(p) => p.theme.backgroundSecondary};
  }
`;

const CancelButton = styled.button`
  width: 45%;
  padding: 4px 0;
  border-radius: 5px;
  border: 2px solid ${(p) => p.theme.shadowPrimary};
  background-color: ${(p) => p.theme.backgroundSecondary};
  color: ${(p) => p.theme.shadowPrimary};

  &:hover {
    cursor: pointer;
    border: 2px solid ${(p) => p.theme.shadowPrimary};
    background-color: ${(p) => p.theme.shadowPrimary};
    color: ${(p) => p.theme.backgroundSecondary};
  }
`;

export default EditCompany;
