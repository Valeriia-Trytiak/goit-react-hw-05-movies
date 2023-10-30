import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${p => p.theme.spacing(7)};
  margin-bottom: ${p => p.theme.spacing(7)};
  padding: ${p => p.theme.spacing(7)};
  background-color: ${p => p.theme.colors.grey};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: ${p => p.theme.spacing(2)};
`;

export const MoviePoster = styled.img`
  height: auto;
  border-radius: ${p => p.theme.spacing(2)};

  @media (max-width: 768px) {
    margin-right: 0;
    ${p => p.theme.spacing(7)};
  }
`;

export const MovieInfo = styled.div`
  flex: 1;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

export const UserScore = styled.span`
  font-size: 18px;
  margin-top: ${p => p.theme.spacing(2)};
  display: block;
  color: ${p => p.theme.colors.accent};
`;

export const OverviewTitle = styled.h3`
  font-size: 20px;
  margin-top: ${p => p.theme.spacing(4)};
`;

export const OverviewText = styled.p`
  font-size: 16px;
`;

export const GenresTitle = styled.h3`
  font-size: 20px;
  margin-top: ${p => p.theme.spacing(7)};
`;

export const GenresList = styled.ul`
  font-size: 16px;
  display: flex;
  gap: ${p => p.theme.spacing(2)};
`;
