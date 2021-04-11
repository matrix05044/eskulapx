import Paragraph from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';
// import { ortopedia } from 'assets/data/cardsList';

const CardDescWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(102, 102, 102, 0.9);
  width: 100%;
  height: 40%;
  padding: 1.5rem;
  color: white;
  transition: height 0.3s;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.light};
`;

const StyledParagraph = styled(Paragraph)`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
  letter-spacing: 0.2rem;
  line-height: 1.5;
  color: #e6e6e6;
`;

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, img }) => {
  const CardWrapper = styled.div`
    background: url('${img}') no-repeat;
    height: 40rem;
    position: relative;
    background-position: center;
    background-size: cover;
    max-width: 350px;
    width: 100%;

    :hover > div {
      height: 100%;
      & > p {
        overflow: visible;

        display: -webkit-box;
        -webkit-line-clamp: unset;
      }
    }
  `;

  return (
    <CardWrapper>
      <CardDescWrapper>
        <CardTitle>{title}</CardTitle>
        <StyledParagraph>{description}</StyledParagraph>
      </CardDescWrapper>
    </CardWrapper>
  );
};

export default Card;
