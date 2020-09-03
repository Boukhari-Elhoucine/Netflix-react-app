import React, { useState, useEffect } from "react";
import axios from "./axois";
import { request } from "./api";
import "./Header.css";
function Header() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">List</button>
        </div>
        <h2 className="banner-description">{truncate(movie?.overview, 150)}</h2>
      </div>

      <div className="banner-bottom" />
    </header>
  );
}
export default Header;
