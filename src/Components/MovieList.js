import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
    return (
        <div className='container1'>
         {props.movieList.map((movie, key)=> 
         <div>
             <MovieCard movie={movie} key={key} />
         </div>)}   
        </div>
    )
}

export default MovieList
