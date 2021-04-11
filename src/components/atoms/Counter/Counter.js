/* eslint-disable func-names */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [deley, setDeley] = useState(100);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    deley < 100 && setTimeout(() => setDeley(deley * counter), 1000);

    // eslint-disable-next-line no-unused-expressions
    counter < 100 && setTimeout(() => setCounter(counter + 1), deley);
  }, [counter]);

  return <h1> {counter}</h1>;
};

export default Counter;
