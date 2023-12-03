import styled from 'styled-components';
import { getRandomHexColor } from '../utilits/RandomColor';

export const ReviewsContainer = styled.div`
  ul {
    padding-top: ${p => p.theme.spacing(7)};
  }

  li {
    margin-bottom: ${p => p.theme.spacing(3)};
    border: 1px solid ${p => p.theme.colors.borderColor};
    padding: ${p => p.theme.spacing(2)};
    border-radius: ${p => p.theme.spacing(1)};
  }
`;

export const AuthorName = styled.p`
  font-weight: bold;
  margin-bottom: ${p => p.theme.spacing(1)};
  font-size: 16px;
  color: ${() => getRandomHexColor()};
`;

export const ReviewContent = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${p => p.theme.colors.textColor};
`;

export const NoReviewsMessage = styled.p`
  font-size: 16px;
  color: ${p => p.theme.colors.textColor};
`;

export const ContainerSlade = styled.div`
  padding: ${p => p.theme.spacing(7)};
  background-color: ${p => p.theme.colors.grey};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: ${p => p.theme.spacing(2)};
`;
