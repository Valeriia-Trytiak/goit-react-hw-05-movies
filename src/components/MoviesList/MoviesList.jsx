import { useLocation } from 'react-router-dom';
import {
  ListThumb,
  MovieItem,
  MovieLink,
  MoviePoster,
  MoviesListContainer,
  OverlayText,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <MoviesListContainer>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <ListThumb>
              <MoviePoster
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultImg
                }
                width={100}
                alt="poster"
              />
              <OverlayText>{movie.title}</OverlayText>
            </ListThumb>
          </MovieLink>
        </MovieItem>
      ))}
    </MoviesListContainer>
  );
};
