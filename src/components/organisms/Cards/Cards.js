import Card from 'components/molecues/Card/Card';
import React from 'react';
import styled from 'styled-components';
import { ortopedia } from 'assets/data/cardsList';
import Button from 'components/atoms/Button/Button';

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  justify-content: space-between;
  grid-row-gap: 5rem;
  grid-column-gap: 5rem;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

// eslint-disable-next-line react/prop-types
const Cards = ({ last }) => (
  <>
    <CardsWrapper>
      {ortopedia.slice(0, last).map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </CardsWrapper>
    <StyledButton>Więcej zabiegów</StyledButton>
  </>
);

export default Cards;

Cards.defaultProps = {
  last: ortopedia.length,
};
