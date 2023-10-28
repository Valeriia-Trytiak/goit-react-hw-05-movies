import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${p => p.theme.spacing(4)};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(2)} 0;
  margin-bottom: ${p => p.theme.spacing(4)};
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
  border-radius: ${p => p.theme.spacing(1)};
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: ${p => p.theme.colors.accent};
  }
`;
