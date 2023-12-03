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
  width: fit-content;
  font-size: 18px;
  color: ${p => p.theme.colors.textColor};
  text-decoration: none;
  margin-top: ${p => p.theme.spacing(2)};
  margin-bottom: ${p => p.theme.spacing(7)};
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const AdditionalInfo = styled.p`
  font-size: 20px;
  font-weight: 500;
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

export const Container = styled.div`
  max-width: 100%;
  margin: 0 5px;

  @media only screen and (min-width: 768px) {
    margin: 0 20px;
  }

  @media only screen and (min-width: 1158px) {
    margin: 0 70px;
  }
`;
