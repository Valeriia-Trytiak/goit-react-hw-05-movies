import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const BackLink = styled(RouterLink)`
  font-size: 18px;
  color: ${p => p.theme.colors.accent};
  text-decoration: none;
  margin-bottom: 20px;
`;

export const AdditionalInfo = styled.p`
  font-size: 16px;
  color: ${p => p.theme.colors.textColor};
  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const InfoList = styled.ul`
  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const InfoListItem = styled.li`
  font-size: 18px;
  color: ${p => p.theme.colors.textColor};
  margin-bottom: 10px;
`;
