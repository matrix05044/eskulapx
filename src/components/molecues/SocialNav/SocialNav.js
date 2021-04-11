import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const SocialNavWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
`;

const SocialNav = () => (
  <SocialNavWrapper>
    <FaFacebookSquare size="3rem" />
    <FaInstagram size="3rem" />
    <HiMail size="3.6rem" />
  </SocialNavWrapper>
);

export default SocialNav;
