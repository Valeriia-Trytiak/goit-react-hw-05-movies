import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.spacing(7)};
  background-color: ${p => p.theme.colors.grey};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: ${p => p.theme.spacing(2)};
`;

export const BackLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${p => p.theme.colors.accent};
  text-decoration: none;
  margin-bottom: ${p => p.theme.spacing(7)};
`;

export const AdditionalInfo = styled.p`
  font-size: 16px;
  color: ${p => p.theme.colors.textColor};
  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const InfoListItem = styled.li`
  font-size: 18px;
  color: ${p => p.theme.colors.textColor};
  margin-bottom: ${p => p.theme.spacing(2)};
`;
export const IconWrapper = styled.span`
  margin-right: ${p => p.theme.spacing(1)};
`;
