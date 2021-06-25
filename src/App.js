import React, { useState , useEffect } from 'react';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import AddAMovie from './Components/AddAMovie';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movieList, setMovieList] = useState([
         {
            Title: "A Quiet Place",
            Poster: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg",
            Description:"In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing. Two parents do what it takes to keep their children safe in a world full of creatures hunting every sound they can hear.",
            rate: 5
        },
        {
            Title: "The illusionist",
            Poster: `https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX700_AL_.jpg`,
            Description: `In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.`,
            rate: 3,
        },
        {
            Title: "Game of Thrones",
            Poster: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg",
            Description: `In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.`,
            rate: 5,
        },
        {
            Title: "Silent Hill",
            Poster: "https://m.media-amazon.com/images/M/MV5BOWQzNTU3NGUtNDAxMi00ZjFjLTkyYWUtYjgwZDJiMDljZWY4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            Description: `In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.`,
            rate: 4,
        },
        {
            Title: "Detective Conan: The Phantom of Baker Street",
            Poster: "https://m.media-amazon.com/images/M/MV5BY2QwNzZmMzctNWQ1MS00ODYwLWEzM2QtNjdhODllNDE1MDJlXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
            Description: `In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.`,
            rate: 5,
        },
        {
            Title: "Detective Conan: The Fourteenth Target",
            Poster: "https://m.media-amazon.com/images/M/MV5BOTYxZjhmODItNjAxYS00NDk5LWExYjgtNDk0ODJiYzIyMTUyXkEyXkFqcGdeQXVyNjUwMTQ4NjE@._V1_SX300.jpg",
            Description: `In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.`,
            rate: 4,
        },
        {
            Title: "Detective Conan: Crossroad in the Ancient Capital",
            Poster: "https://m.media-amazon.com/images/M/MV5BNTVlYzRkZTEtMTZiMi00YWM1LWI3OGUtYWQzMWRmMWMxMWRlXkEyXkFqcGdeQXVyNjUwMTQ4NjE@._V1_SX300.jpg",
            Description: `In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.`,
            rate: 5,
        },
        {
            Title: "Star Wars: Episode VI - Return of the Jedi",
            Poster: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            Description: `In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.`,
            rate: 4,
        },
        {
            Title: "Star Wars: Episode VII - The Force Awakens",
            Poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
            Description: `In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.`,
            rate: 3,
        },
        {
            Title: "Star Wars: Episode I - The Phantom Menace",
            Poster: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            Description: `In turn-of-the-century Vienna, a magician uses his abilities to secure the love of a woman far above his social standing.`,
            rate: 5,
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
    <div>
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