import React from "react";
import { useParams, NavLink, useSearchParams, useLocation } from 'react-router-dom'
import './MovieList.css'
import Search from "./Search";
import QueryNavLink from "./QueryNavLink";

function MovieList({movies}){
    console.log(movies)
    const params = useParams()
    const [ searchParams, setSearchParams ] = useSearchParams()
    
    const applyActiveColor = ({isActive}) =>
    (isActive? {color: 'darkseagreen', background:'beige'} : {})
    
    
    const movieFiltered = movies.filter(movie=>{
        const filter = searchParams.get('filter') // 검색어 조회
        console.log(filter)
        if(!filter) return true // 전체목록 반환
        const title = movie.title.toLowerCase()
        return title.includes(filter.toLowerCase())
    }
    )
    console.log(params.movieId)
    const movie = movieFiltered[params.movieId]

    console.log(movie)
    return(
       <>
       { /*쿼리스트링을 이용한 검색 */}
       <Search></Search>

       {/* 상세 정보 보기 */}
       { movie?
        <div className="movie-container">
            <h1>{movie.title}</h1>
            <img src={movie.medium_cover_image} alt={movie.title}/>
            <p>{movie.summary}</p>
            <span>{movie.genres.join(', ')}</span>
        </div>:
        <h1>MOVIE PAGE</h1>}  

       {/* 블로그 전체 목록 포스트 */}
       {movieFiltered
       .map((movie,id)=>{
        console.log(id)
        return( // QueryNavLink : 사용자정의컴포넌트
            <QueryNavLink key={id} to={`/movie/${id}`} className='movie-item' style={applyActiveColor} value={searchParams.get('filter')}>
                {movie.title}
            </QueryNavLink>
        )
       })}
       </>
    )
}

export default MovieList
