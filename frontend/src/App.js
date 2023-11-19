import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router';
import { MoviesComponent } from './Components/MoviesComponent';
import { useState, useEffect } from 'react';
import api from './Services/Axios';
import { AddMovieComponent } from './Components/AddMovieComponent';
import { UpdateMovieComponent } from './Components/UpdateMovieComponent';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try{
      const response = await api.get("/api/v1/movies");  
      setMovies(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesComponent movies={movies} getMovies={getMovies}/>}/>
          <Route path="/addMovie" element={<AddMovieComponent/>}/>
          <Route path = "/updateMovie/:id" element={<UpdateMovieComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
