import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieItem = styled.li`
  margin-bottom: ${p => p.theme.spacing(3)};

  &:first-child {
    margin-top: ${p => p.theme.spacing(3)};
  }
`;

export const MovieLink = styled(NavLink)`
  text-decoration: none;
  font-size: 12px;
  color: ${p => p.theme.colors.textColor};
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;
