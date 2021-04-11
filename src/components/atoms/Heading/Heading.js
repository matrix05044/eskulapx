import styled from 'styled-components';

const Heading = styled.h1`
  font-size: calc(30px + (120 - 30) * ((100vw - 300px) / (1600 - 300)));
  color: ${({ theme, type }) => (type ? theme[type] : theme.grey)};
  letter-spacing: 1.7rem;
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

export default Heading;
