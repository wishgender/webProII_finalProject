//= laz r
//= 05-26-2026 17:10
//= App.jsx

//= Dependencies =//
import { useState, useEffect } from 'react'
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';
import movieDataList from './movie-data.js';

function App() {
  const [movies, setMovieData] = useState(movieDataList);
  const [favorites, setFavorites] = useState([]);

  const isInFavorites = (id) => {
    const inFavorites = favorites.find(m => m.id == id);
    if (inFavorites) return true;
    else return false;
  }

  const addToFavorites = (id) => {
    const movieAdd = movies.find(m => m.id == id);
    if (favorites.find(m => m.id == id)) return;
    setFavorites([...favorites, movieAdd]);
  }

  const removeFromFavorites = (id) => {
    const newFavorites = favorites.filter(m => m.id != id);
    setFavorites(newFavorites);
  }

  return (
    <main className="section">
      <article className="container">
        <Header data={favorites} update={removeFromFavorites} />
        <MovieList data={movies} add={addToFavorites} remove={removeFromFavorites} check={isInFavorites} />
      </article>
    </main>
  )
}

export default App;
