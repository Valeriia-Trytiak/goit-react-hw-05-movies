import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { fechServisMovieDetails } from "API";
import { ContainerLoader } from "components/ContainerLoader/ContainerLoader.styled";
import { DetailsOneMovie } from "components/DetailsOneMovie/DetailsOneMovie";

export const MovieDetails = () => {
const [moviesDetails, setMoviesDetails] = useState([]); 
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);
const { movieId } = useParams();

useEffect(() => {
if (!movieId) return;

async function fechMovieDetails () {
  try {
    setIsLoading(true);
    setError(false);
    const MovieById = await fechServisMovieDetails(movieId);
      toast.success("Movies found successfully!");
      setMoviesDetails(MovieById);
  }
  catch (error) {
    setError(true);
}
finally {
  setIsLoading(false);
}
}
fechMovieDetails();
}, [movieId]);


  return(
    <main>
      <DetailsOneMovie data={moviesDetails} />
   
  <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
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
  ) 
};