import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination, FreeMode } from 'swiper/modules';

import { fechServisMovieCredits } from 'API';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader.styled';
import {
  ActorImage,
  CastContainer,
  ActorName,
  ActorCharacter,
  ContainerSlade,
} from './Cast.styled';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;

    async function fechMovieCredits() {
      try {
        setIsLoading(true);
        setError(false);
        const creditsById = await fechServisMovieCredits(movieId);
        toast.success('Movies found successfully!');
        const limitedCredits = creditsById.cast.slice(0, 16);
        setMovieCredits(limitedCredits);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fechMovieCredits();
  }, [movieId]);

  return (
    <CastContainer>
      <ul>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {movieCredits.map(actor => (
            <SwiperSlide key={actor.cast_id}>
              <ContainerSlade>
                <ActorImage
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : defaultImg
                  }
                  alt={actor.name}
                  width={150}
                />
                <ActorName>{actor.name}</ActorName>
                <ActorCharacter>Character: {actor.character}</ActorCharacter>
              </ContainerSlade>
            </SwiperSlide>
          ))}
        </Swiper>
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
    </CastContainer>
  );
};

export default Cast;
