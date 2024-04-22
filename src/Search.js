import React, {useState, useEffect} from "react";
import { useParams, NavLink, useSearchParams, useLocation } from 'react-router-dom'

function Search(){

    const params = useParams() // params : url 파라미터를 담고 있는 객체 

    const [ searchParams, setSearchParams ] = useSearchParams() // 객체, 함수 
    
    const changeQueryString = (e) =>{
        const filter = e.target.value
        if(filter){
            setSearchParams( { filter, keyword: "키워드" }) //?filter 사용자가 입력한 값
        }else{
            setSearchParams({}) // url 쿼리스트링 초기화
        }
    }
    return(
        <>
        <br/><input className="filter-movie" placeholder="Search Movie..." onChange={changeQueryString}></input>        
        </>
    )
}

export default Search