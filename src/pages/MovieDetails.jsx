import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { TbCircleArrowLeft } from 'react-icons/tb';
import { fechServisMovieDetails } from 'API';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';
import { DetailsOneMovie } from 'components/DetailsOneMovie/DetailsOneMovie';
import {
  InfoListItem,
  AdditionalInfo,
  DescWrapper,
  BackLink,
  Container,
} from 'components/MovieDetails.styled';

const MovieDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  // const backLink = location.state?.from ?? '/';
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    if (!movieId) return;

    async function fechMovieDetails() {
      try {
        setIsLoading(true);
        setError(false);
        const MovieById = await fechServisMovieDetails(movieId);
        toast.success('Movies found successfully!');
        setMoviesDetails(MovieById);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fechMovieDetails();
  }, [movieId]);

  return (
    <main>
      <Container>
        <BackLink to={backLinkLocationRef.current}>
          {' '}
          <TbCircleArrowLeft />
          To back
        </BackLink>
        <DetailsOneMovie data={moviesDetails} />
        <DescWrapper>
          <AdditionalInfo>Additional informacion</AdditionalInfo>
          <ul>
            <InfoListItem>
              <BackLink to="cast">Cast</BackLink>
            </InfoListItem>
            <InfoListItem>
              <BackLink to="reviews">Reviews</BackLink>
            </InfoListItem>
          </ul>
        </DescWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
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
        <Toaster position="top-right" />
      </Container>
    </main>
  );
};

export default MovieDetails;
