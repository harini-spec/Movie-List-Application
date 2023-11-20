import React from 'react';
import '../Components/Styles/MoviesComponent.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../Services/Axios';
import { MovieListComponent } from './MovieListComponent';

export const MoviesComponent = ({movies, getMovies, setMovies}) => {

    const [movieName, setMovieName] = useState();
    const [language, setLanguage] = useState();
    const [moviesCount, setMoviesCount] = useState(-1);

    useEffect(() =>{
        getMovies();
    }, [])

    const search = async () => {
        try{
            const response = await api.get(`api/v1/movies/search/${movieName}`);
            setMovies(response.data);
        }
        catch(err){
            console.log(err);
        }
    }

    const count = async () => {
        try{
            const response = await api.get(`api/v1/movies/count/${language}`);
            setMoviesCount(response.data);
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <Container>
        <Row>
            <Col><h2>MOVIES LIST</h2></Col>
        </Row>
        <Row>
            <Col>
                <input placeholder="Enter Language" onChange={(event)=>{setLanguage(event.target.value)}}/>
                <Button onClick={() => {count()}}>Count</Button> 
                {moviesCount>=0 ? <h4> No. of movies found in {language} : {moviesCount} </h4> : <p/>}
            </Col>
            <Col>
                <input placeholder="Search by Movie Name" onChange={(event)=>{setMovieName(event.target.value)}}/>
                <Button onClick={() => {search()}}>Search</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Link className="link" to="/addMovie"><Button>Add Movie</Button></Link>
            </Col>
        </Row>
        <Row>
            <Col><hr /></Col>
        </Row> 
        <Row>
            <MovieListComponent movies = {movies} getMovies = {getMovies} /> 
        </Row>   
    </Container>
  )
}
