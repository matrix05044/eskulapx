import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme, type }) =>
    theme ? theme.fontSize[type] : theme.fontSize.s};

  ${({ big }) =>
    big &&
    css`
      font-weight: ${({ theme }) => theme.bold};
      color: ${({ theme }) => theme.secondary};
    `}
`;

export default Paragraph;
