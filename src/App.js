import React from "react";
import Row from "./Components/Row";
import { request } from "./Components/api";
import Header from ".//Components//Header";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Row title="Trending" fetchUrl={request.fetchTrending} isLargeRow />
      <Row title="Netflix" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl={request.fetchDocumentaires} />
    </div>
  );
}
export default App;
