import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { fechServisMovies } from '../API';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fechMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const movies = await fechServisMovies();
        setTrendingMovies(movies.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fechMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />

      {isLoading && (
        <ContainerLoader>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </ContainerLoader>
      )}
      {error && <span>Whoops... Error! Please, reload this page!</span>}
    </main>
  );
};

export default Home;
