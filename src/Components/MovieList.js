import React from 'react'

function MovieList(props) {
    return (
        <div className='container-fluid'>
         {props.movieList.map((movie, index)=> 
         <div className='d-flex justify-content-start m-3'>
             <img src={movie.Poster} alt='movie'></img>
         </div>)}   
        </div>
    )
}

export default MovieList
