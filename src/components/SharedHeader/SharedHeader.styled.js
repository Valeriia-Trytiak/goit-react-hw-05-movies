import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
  /* margin-bottom: ${p => p.theme.spacing(4)}; */
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }

  @media only screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(4)};
  }

  @media only screen and (min-width: 1158px) {
    gap: ${p => p.theme.spacing(5)};
  }
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
  border-radius: ${p => p.theme.spacing(1)};
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    background-image: radial-gradient(
        1px 45% at 0% 50%,
        rgba(0, 0, 0, 0.6),
        transparent
      ),
      radial-gradient(1px 45% at 100% 50%, rgba(0, 0, 0, 0.6), transparent);
  }

  &.active {
    color: ${p => p.theme.colors.white};
  }
`;
