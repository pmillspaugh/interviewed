import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addCompany } from '../../actions/actionCreators';
import { colors } from '../../theme';

const AddCompany = () => {
  const user = useSelector((state) => state.user);
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

  return (
    <AddCompanyWrapper>
      <input
        type='text'
        value={companyName}
        placeholder='Company'
        onChange={(e) => handleCompanyNameChange(e)}
      />
      <input
        type='text'
        value={role}
        placeholder='Role'
        onChange={(e) => handleRoleChange(e)}
      />
      <input
        type='text'
        value={city}
        placeholder='City'
        onChange={(e) => handleCityChange(e)}
      />
      <label htmlFor='applied'>
        Applied?
        <input
          name='applied'
          value={applied}
          type='checkbox'
          onChange={(e) => handleAppliedChange(e)}
        />
      </label>
      <input
        type='text'
        value={contacts}
        placeholder='Contacts'
        onChange={(e) => handleContactsChange(e)}
      />
      <input
        type='text'
        value={notes}
        placeholder='Notes'
        onChange={(e) => handleNotesChange(e)}
      />
      <button onClick={handleAddCompanyClick}>Add company</button>
    </AddCompanyWrapper>
  );
};

const AddCompanyWrapper = styled.article`
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

export default AddCompany;
