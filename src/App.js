import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, About, Movie, NotFound } from './routes'
import Menu from './Menu'
import Sidebar from './Sidebar';
import Button from './Button';
import MovieList from './MovieList';

const homeMenu = [
  {
    url: '/',
    name: 'HOME'
  },
  {
    url: '/about',
    name: 'ABOUT'
  },
  {
    url: '/movie',
    name: 'MOVIE'
  }
]

function App() {
  const [ open, setOpen ] = useState(false)
  const showSidebar = ()=>{
    setOpen(!open)
  }

  const [ movies, setMovies ] = useState([])
  useEffect( ()=>{
      fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=7.0&limit=12')
      .then ( res=> res.json())
      .then ( result =>{
        const {data: {movies}} = result
        setMovies(movies)
        console.log(movies)
      })
    },[])


  return (
    <div className="App">
      <Button handleClick={showSidebar}>Menu</Button>
      <Sidebar open={open}>
        <Menu menus={homeMenu}/>
      </Sidebar>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/movie' element={<MovieList movies={movies}/>}>
          <Route path=':movieId' element={<MovieList movies={movies}/>}/>
        </Route>
        <Route exact path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
