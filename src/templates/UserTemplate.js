/* eslint-disable react/prop-types */
import Nav from 'components/organisms/Nav/Nav';
import React from 'react';

const UserTemplate = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
);

export default UserTemplate;
