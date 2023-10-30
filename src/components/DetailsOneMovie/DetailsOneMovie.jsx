import {
  MovieContainer,
  MoviePoster,
  MovieTitle,
  OverviewTitle,
  UserScore,
  OverviewText,
  GenresTitle,
  GenresList,
  MovieInfo,
} from './DetailsOneMovie.styled';

export const DetailsOneMovie = ({ data }) => {
  const { title, overview, vote_average, poster_path, release_date, genres } =
    data;
  const releaseYear = release_date ? release_date.slice(0, 4) : null;
  const userScore = Math.ceil(vote_average * 10);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <MovieContainer>
      <MoviePoster
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <MovieInfo>
        <MovieTitle>
          {title} {releaseYear && `(${releaseYear})`}
        </MovieTitle>
        <UserScore>User score: {userScore}%</UserScore>
        <OverviewTitle>Overview</OverviewTitle>
        <OverviewText>{overview}</OverviewText>
        <GenresTitle>Genres</GenresTitle>
        <GenresList>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </GenresList>
      </MovieInfo>
    </MovieContainer>
  );
};
