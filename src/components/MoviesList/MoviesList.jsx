
import { MovieItem, MovieLink  } from "./MoviesList.styled";

export const MoviesList = ( { movies } )=> {
    return (
        <ul>
        {movies.map((movie) => (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`}>
              <h2>{movie.title}</h2>
            </MovieLink>
          </MovieItem>
        ))}
      </ul>
    )

}

