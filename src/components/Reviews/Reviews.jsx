import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import { fechServisMovieReviews } from 'API';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fechMovieReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const reviewsById = await fechServisMovieReviews(movieId);
        toast.success('Movies found successfully!');
        if (reviewsById.results && reviewsById.results.length > 0) {
          setMovieReviews(reviewsById.results);
        } else {
          setMovieReviews([]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fechMovieReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
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
    </div>
  );
};
