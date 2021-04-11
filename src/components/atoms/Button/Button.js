import styled from 'styled-components';

const Button = styled.a`
  text-align: center;
  font-size: 1.9rem;
  padding: 1.5rem 2rem;
  border: 1px solid ${({ theme }) => theme.grey};
  color: inherit;
  transition: all 0.2s ease;
  max-width: 30rem;

  &:hover {
    background-color: ${({ theme }) => theme.grey};
    color: white;
  }
`;

export default Button;
