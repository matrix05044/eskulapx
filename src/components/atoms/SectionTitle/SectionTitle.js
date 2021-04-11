import styled from 'styled-components';

const SectionTitle = styled.h2`
  font-size: 3.4rem;
  letter-spacing: 0.7rem;
  font-weight: inherit;
  text-align: center;
  margin-bottom: 7rem;
  margin-top: 5rem;
  color: ${({ theme }) => theme.secondary};
  line-height: 1;
`;

export default SectionTitle;
