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
  RatingContainer,
} from './DetailsOneMovie.styled';
import StarRatings from 'react-star-ratings';

export const DetailsOneMovie = ({ data }) => {
  const { title, overview, vote_average, poster_path, release_date, genres } =
    data;
  const releaseYear = release_date ? release_date.slice(0, 4) : null;
  const userScore = vote_average ? Number(vote_average.toFixed(1)) : 0;
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
        <RatingContainer>
          <StarRatings
            rating={userScore}
            numberOfStars={10}
            starRatedColor="#ffc414"
            starDimension="22px"
            starSpacing="3px"
          />
          <UserScore>{userScore}</UserScore>
        </RatingContainer>
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
