/* eslint-disable react/prop-types */
import Heading from 'components/atoms/Heading/Heading';
import React from 'react';
import styled from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const HeaderWrapper = styled.div`
  height: calc(100vh - 8rem) !important;
  width: 100vw;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 30%,
    rgba(89, 83, 83, 1) 100%
  );
  overflow: hidden;
  position: relative;
`;

const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 10rem 50% 20rem 5%;
  text-align: start;

  & > * {
    z-index: 10;
  }
`;

const HeroImg = styled.img`
  height: 100%;
  width: auto !important;
  display: block;
  margin: 0;
  padding: 0;
  object-fit: contain;
  filter: opacity(50%);
  position: absolute;
  top: 0;
  right: 10%;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: calc(15px + (20 - 15) * ((100vw - 300px) / (1600 - 300)));
  color: ${({ theme }) => theme.secondary};
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  padding: 1.5rem;
`;

// eslint-disable-next-line react/prop-types
const Header = ({ list, type, heading, text, img }) => (
  <HeaderWrapper>
    <HeaderTextWrapper>
      <Heading type={type}>{heading}</Heading>
      <StyledParagraph>{text}</StyledParagraph>
      <Button>Czytaj więcej</Button>
      <List>
        {list.map((item) => (
          <ListItem key={item.id}>{item.title}</ListItem>
        ))}
      </List>
    </HeaderTextWrapper>
    <HeroImg src={img} />
  </HeaderWrapper>
);

export default Header;
