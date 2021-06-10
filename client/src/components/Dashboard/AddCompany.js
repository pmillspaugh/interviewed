import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addCompany } from '../../actions/actionCreators';
import { colors } from '../../theme';

const AddCompany = ({ closeModal }) => {
  const user = useSelector((state) => state.user);
  const { currentTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState('');
  const [applied, setApplied] = useState(false);
  const [contacts, setContacts] = useState('');
  const [notes, setNotes] = useState('');

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

  const handleAddCompanyClick = (e) => {
    e.preventDefault();

    // close the modal
    closeModal();

    const postRequestBody = {
      authToken: user.authToken,
      companyName,
      role,
      city,
      applied,
      contacts,
      notes,
    };

    // post new company to database
    fetch('/api/user/add-company', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postRequestBody),
    })
      .then((res) => res.json())
      .then((companyList) => {
        // once response comes back, dispatch update to user store
        dispatch(addCompany(companyList));
      });

    // reset state for inputs
    setCompanyName('');
    setRole('');
    setCity('');
    setApplied(false);
    setContacts('');
    setNotes('');
  };

  const handleCancelButtonClick = () => {
    // close modal
    closeModal();

    // reset state for inputs
    setCompanyName('');
    setRole('');
    setCity('');
    setApplied(false);
    setContacts('');
    setNotes('');
  };

  return (
    <AddCompanyWrapper theme={currentTheme}>
      <AddCompanyTitle theme={currentTheme}>Add company</AddCompanyTitle>
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
        <AddButton theme={currentTheme} onClick={handleAddCompanyClick}>
          Add
        </AddButton>
        <CancelButton theme={currentTheme} onClick={handleCancelButtonClick}>
          Cancel
        </CancelButton>
      </ButtonWrapper>
    </AddCompanyWrapper>
  );
};

const AddCompanyWrapper = styled.article`
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

const AddCompanyTitle = styled.h2`
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

const AddButton = styled.button`
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

export default AddCompany;
