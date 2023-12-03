import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${p => p.theme.spacing(7)};
  margin-bottom: ${p => p.theme.spacing(7)};
  padding: ${p => p.theme.spacing(1)};
  background-color: ${p => p.theme.colors.grey};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: ${p => p.theme.spacing(2)};

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: ${p => p.theme.spacing(5)};
  }

  @media only screen and (min-width: 1158px) {
    padding: ${p => p.theme.spacing(7)};
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${p => p.theme.spacing(2)};

  @media only screen and (min-width: 768px) {
    width: 350px;
    margin-right: 0;
    border-radius: ${p => p.theme.spacing(3)};
  }
`;

export const MovieInfo = styled.div`
  flex: 1;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  margin: 0;

  @media only screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.spacing(3)};
  }
`;

export const UserScore = styled.span`
  font-size: 18px;
  font-weight: 500;
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

export const RatingContainer = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(1)};
  align-items: center;

  @media only screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(2)};
  }
`;
