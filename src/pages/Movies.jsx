import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { SearchForm } from "../components/SearchForm/SearchForm";
import { MoviesList } from "../components/MoviesList/MoviesList";
import { ContainerLoader } from "components/ContainerLoader/ContainerLoader.styled";
import { fechServisSearchMovie } from "API";


export const Movies = () => {
const [searchMovies, setSearchMovies] = useState([]); 
const [searchParams, setSearchParams] = useSearchParams();
const searchValue = searchParams.get("query") || "";
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);

// Запит на бек за фільмами по коючовому слову
useEffect(()=> {
  if (searchValue === "") {
    return
  }
  async function fechMovieBySearchValue () {
    try {
      setIsLoading(true);
      setError(false);
      const searchMovie = await fechServisSearchMovie(searchValue);
      if (searchMovie.results.length > 0) {
        toast.success("Movies found successfully!");
        setSearchMovies(searchMovie.results);
      } else {
        toast.error("Ooops...Nothing found. Update the search value, please!");
        setSearchMovies([]);
      }

    }
    catch (error) {
      setError(true);
  }
  finally {
    setIsLoading(false);
  }
  }
  fechMovieBySearchValue();
}, [searchValue]);

const updateSearchParams = (value) => {
  setSearchParams({ query: value });
};

    return (
      <main>
      <SearchForm onSubmit={updateSearchParams} />
      {searchMovies.length > 0 && <MoviesList movies = {searchMovies} /> }

{isLoading && <ContainerLoader>
<ColorRing
visible={true}
height="80"
width="80"
ariaLabel="blocks-loading"
colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
</ContainerLoader>}

{error && <span>Whoops... Error! Please, reload this page!</span>}
<Toaster  position="top-right" />
      </main>
    );
  };