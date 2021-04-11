/* eslint-disable func-names */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-bottom: 5rem;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 0 0 1rem 0;

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

// eslint-disable-next-line react/prop-types
const Counter = ({ to, title, spciealStart, spciealEnd, fast }) => {
  const [counter, setCounter] = useState(0);
  const [deley, setDeley] = useState(fast);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    deley < 1000 && setTimeout(() => setDeley(deley + 100), 0.9 * 20 * `${to}`);

    // eslint-disable-next-line no-unused-expressions
    counter < `${to}` && setTimeout(() => setCounter(counter + 1), deley);
  }, [counter]);

  return (
    <CounterWrapper>
      <StyledParagraph>
        {spciealStart}
        {counter}
        {spciealEnd}
      </StyledParagraph>
      <StyledParagraph small> {title}</StyledParagraph>
    </CounterWrapper>
  );
};

export default Counter;

Counter.defaultProps = {
  fast: 20,
};
