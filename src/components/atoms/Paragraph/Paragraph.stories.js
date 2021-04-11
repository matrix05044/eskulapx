import React from 'react';

import Paragraph from './Paragraph';

export default {
  title: 'atoms/Paragraph',
  component: Paragraph,
};

export const Primary = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, accusantium.{' '}
  </Paragraph>
);
export const Medium = () => (
  <Paragraph type="m">Mosina, ul Wawrzyniaka 13 </Paragraph>
);
export const Big = () => (
  <Paragraph type="l" big>
    Odwiedź nas
  </Paragraph>
);
