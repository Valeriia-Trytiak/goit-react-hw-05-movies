import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { ContainerLoader } from "components/ContainerLoader/ContainerLoader.styled";

export const MovieDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState([]); 
const [searchValue, setSearchValue]= useState("");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);
  const { movieId } = useParams();

useEffect(() => {
if (!movieId) return;

async function fechMovieDetails () {
  try {
    setIsLoading(true);
    // setError(false);
    // // const searchMovie = await fechServisMovieDetails(movieId);
    //   toast.success("Movies found successfully!");
    //   setMoviesDetails(searchMovie.results);
   

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
    <div>
      <div>
      <img />
      <h2></h2>
      <span></span>
      <h3>Overview</h3>
      <p></p>
      <h3>Genres</h3>
      <p></p>
      </div>
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
  </div>
  ) 
};