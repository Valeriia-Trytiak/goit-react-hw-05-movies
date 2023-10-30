import styled from 'styled-components';

export const CastContainer = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: ${p => p.theme.spacing(6)};
    justify-content: space-evenly;
    padding-top: ${p => p.theme.spacing(7)};
  }

  li {
    flex-basis: calc(25% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ActorImage = styled.img`
  height: 225px;
  object-fit: cover;
  border-radius: ${p => p.theme.spacing(2)};
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const ActorName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
`;

export const ActorCharacter = styled.p`
  color: #777;
  margin-top: ${p => p.theme.spacing(1)};
`;
