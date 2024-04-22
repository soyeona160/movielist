import React, {useState, useEffect} from "react";

function Movie(){
    return (
        <>
       { movie?
        <div className="movie-container">
            <h1>{movie.title}</h1>
            <p>{movie.summatry}</p>
            <span>{movie.genres}</span>
        </div>:
        <h1>movie</h1>}  
        </>
    )

}


export default Movie