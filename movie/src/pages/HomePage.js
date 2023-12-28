import React from "react";
import useAuth from "../hooks/useAuth";
import requests from "../component/apiRequest";
import MovieList from "../component/MovieList";
import Header from "../component/Header";

function HomePage() {
  const auth = useAuth();
  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }
  return (
    <div>
      <Header />
      <MovieList
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        id="NETFLIXORIGINALS"
      />
      <MovieList
        id="TrendingNow"
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <MovieList id="TVMovies" title="TV Movies" fetchUrl={requests.fetchTVMovies} />
      <MovieList id="TopRated" title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieList
        id="ActionMovies"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <MovieList
        id="AnimationMovies"
        title="Animation Movies"
        fetchUrl={requests.fetchAnimationMovies}
      />
      <MovieList
        id="ComedyMovies"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <MovieList
        id="HorrorMovies"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
    </div>
  );
}

export default HomePage;