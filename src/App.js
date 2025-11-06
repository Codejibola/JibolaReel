import { useEffect, useState }  from 'react';

import MovieCard from './MovieCard';

import Lice from './Lice.css';

const API_URL ='https://www.omdbapi.com?apikey=7ee9d6f6'
const movie = {
            "Title": "Italian Spiderman",
            "Year": "2007",
            "imdbID": "tt2705436",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"

}

const App = () => {
    const [movies, setMovies] =useState([]);
    const [searchTerm, setsearchTerm ] = useState('');

   const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);

   } 

    useEffect(() => {
      searchMovies('Spiderman')
    },[]) 

    return(
    <div className='app'>
            <h1>MovieReel</h1>

        <div className='search'>
            <input
            placeholder = 'search for movies'
            value = {searchTerm}
            onChange ={(f) => setsearchTerm(f.target.value)}
            />
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg"
            alt =  'search'
            onClick ={() => searchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0
        ? (
            <div className='container'>
                {movies.map((movie) => (
                      <MovieCard movie={movie} />
                ))}
            </div>
              ):(
                <div className='empty'>
                    <h2> No movies found</h2>

                </div>
              )
        }
       
       
    </div>

       
    );
}

export default App;