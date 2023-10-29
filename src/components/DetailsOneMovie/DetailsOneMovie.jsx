export const DetailsOneMovie = ({ data }) => {
    const { title, overview, vote_average, poster_path, release_date, genres } = data;
    const releaseYear = release_date ? release_date.slice(0, 4) : null;
    const userScore = Math.ceil(vote_average * 10);
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    return (
        <div>
       <img
    src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg}
    width={250}
    alt="poster"
/>
       <h2>{title} {releaseYear && `(${releaseYear})`}</h2>
        <span>User score: {userScore}%</span>
        <h3>Overview</h3>
        <p>{overview}</p> 
        <h3>Genres</h3>
        <ul>
        {genres && genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
        ))}
        </ul>
     
        </div>
    )
}

