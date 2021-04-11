import styled from 'styled-components';

const Subheading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.secondary};
  letter-spacing: 0.7rem;
  text-align: center;
  font-weight: ${({ theme }) => theme.light};
  text-transform: uppercase;
  margin: 10rem 0 5rem;
`;

export default Subheading;
