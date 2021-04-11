import styled from 'styled-components';

const NavItem = styled.a`
  padding: 1rem 0;
  text-transform: uppercase;
  color: inherit;

  ::after {
    content: '';
    position: relative;
    top: 1.1rem;
    display: block;

    height: 1px;
    width: 0px;
    background: ${({ theme }) => theme.grey};
    transition: all 0.1s linear;
  }
  :hover::after {
    width: 100%;
  }
`;

export default NavItem;
