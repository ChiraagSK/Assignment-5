import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailView = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: '411dd9da619b939a28f09f83b812595b',
          append_to_response: 'videos', // Include videos in the response
        },
      })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const trailer = movie.videos.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} Poster`}
        style={{ width: '300px' }}
      />
      <h3>Trailer:</h3>
      {trailer ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="Movie Trailer"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default DetailView;