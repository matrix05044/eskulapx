import React from 'react';
import Counter from 'components/atoms/Counter/Counter';
import styled from 'styled-components';

const CountersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Counters = () => (
  <CountersWrapper>
    <Counter to={100} title="Procent zadowolonych klientów" spciealEnd="%" />
    <Counter
      to={1583}
      title="Ilość wizyt na stronie"
      spciealStart="+"
      fast={1}
    />
    <Counter
      to={1000}
      title="Ilość zadowolonych klientów"
      spciealStart="+"
      fast={1}
    />
  </CountersWrapper>
);

export default Counters;
