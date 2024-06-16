import React from 'react'
import { useEffect,useState } from 'react';
import Movie from './Movie';
import './App.css';
import SearchIcon from "./search.svg";


//You can get your API on the OMDb wesite and enter it below
const API_Key = "";



const App = () => {

  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState('');

  const searchMovies = async(title) => {

    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_Key}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies, typeof movies, movies.length)
  }

  useEffect(() => {
    searchMovies('Batman');
  }, [])




  return (
    
    <div className='app'>
      <h1>Movies</h1>
      <div className='search'>
        <input
        placeholder='Search a movie'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        ></input>
        <img 
        src={SearchIcon}
        alt="search icon"
        onClick={() => searchMovies(search)}
        ></img>
      </div>

      {/* {movies?.length <= 0 ? (
      <div className='empty'> 
        <h2>No Movie Found</h2>
      </div>)
         :(
          <div className='container'>
            {movies.map((movie) => (
             <Movie movie={movie}/>
            ))}
          </div>
        )} */}
        {movies?.length > 0 ? (
        <div className="container">
          {movies?.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
     </div>
    
  )
}

export default App;
