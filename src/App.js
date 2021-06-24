import React, { useState , useEffect } from 'react';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import AddAMovie from './Components/AddAMovie';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movieList, setMovieList] = useState([
          {
            "Title": "A Quiet Place",
            "Year": "2018",
            "imdbID": "tt6644200",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg"
        },
          {
            "Title": "Game of Thrones",
            "Year": "2011–2019",
            "imdbID": "tt0944947",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg"
        },
          {
            "Title": "Silent Hill",
            "Year": "2006",
            "imdbID": "tt0384537",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOWQzNTU3NGUtNDAxMi00ZjFjLTkyYWUtYjgwZDJiMDljZWY4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {"Title": "Detective Conan: The Phantom of Baker Street",
            "Year": "2002",
            "imdbID": "tt0990372",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BY2QwNzZmMzctNWQ1MS00ODYwLWEzM2QtNjdhODllNDE1MDJlXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"
        },
        {
            "Title": "Detective Conan: The Fourteenth Target",
            "Year": "1998",
            "imdbID": "tt0965649",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTYxZjhmODItNjAxYS00NDk5LWExYjgtNDk0ODJiYzIyMTUyXkEyXkFqcGdeQXVyNjUwMTQ4NjE@._V1_SX300.jpg"
        },
        {
            "Title": "Detective Conan: Crossroad in the Ancient Capital",
            "Year": "2003",
            "imdbID": "tt1133935",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTVlYzRkZTEtMTZiMi00YWM1LWI3OGUtYWQzMWRmMWMxMWRlXkEyXkFqcGdeQXVyNjUwMTQ4NjE@._V1_SX300.jpg"
        },
    {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode I - The Phantom Menace",
      "Year": "1999",
      "imdbID": "tt0120915",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  }
  ]);
  const [searchValue, setSearchValue] = useState('');
  const [ratingSearch, setRatingSearch] = useState(0);
  
  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);

    const getMovieRequest = async () => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=3ef2615b`;
      const response = await fetch(url);
      const responseJson = await response.json();
      
      if(responseJson.Search){
      setMovieList(responseJson.Search)
    }
  };
    
    useEffect(()=>{
      getMovieRequest(searchValue);
    }, [searchValue]);

    return (
    <div className="App">
     <Filter searchValue={searchValue} setSearchValue={setSearchValue} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/>
     <MovieList movieList={movieList} moviesArray={
            ratingSearch > 1
            ? movieList.filter((movie) => movie.rate >= ratingSearch)
            : movieList}/>
      <AddAMovie handleAdd={addMovie} />
    </div>
  );
}

export default App;