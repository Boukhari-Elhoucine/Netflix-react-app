import React, { useState, useEffect } from "react";
import { requests } from "./api";
import axios from "./axois";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";
function Row({ title, fetchUrl, isLargeRow }) {
  const opt = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const image_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }
    getMovies();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title || "")
        .then((url) => {
          const urlPrams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlPrams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={isLargeRow ? "row-posterLarge" : "row-poster"}
            src={`${image_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opt} />}
    </div>
  );
}
export default Row;
