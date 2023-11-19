import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../Services/Axios';
import './MoviesComponent.css';

export const MoviesComponent = ({movies, getMovies, setMovies}) => {

    const { id } = useParams();
    const [movieName, setMovieName] = useState();

    useEffect(() =>{
        getMovies();
    }, [])

    const deleteMovie = async (id) => {
        try{
            const response = await api.delete(`api/v1/movies/${id}`);
            getMovies();
        }
        catch(err){
            console.log(err);
        }
    }

    const search = async () => {
        try{
            const response = await api.get(`api/v1/movies/search/${movieName}`);
            setMovies(response.data);
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
            <Col><Button><Link className="link" to="/addMovie">Add Movie</Link></Button></Col>
            <Col>
                <input placeholder="Search" onChange={(event)=>{setMovieName(event.target.value)}}/>
                <Button onClick={() => {search()}}>Search</Button>
            </Col>
        </Row>
        <br></br>
        <Row><hr /></Row>
        <Row className="mt-2">
            <Col>
            <Row>
                <Col><h4>NAME</h4></Col>
                <Col><h4>DIRECTOR</h4></Col>
                <Col><h4>RELEASE YEAR</h4></Col>
                <Col><h4>LANGUAGE</h4></Col>
                <Col><h4>RATING</h4></Col>
            </Row>
                {
                    movies?.map((movie) => {
                        return(
                            <div>
                                <Row>
                                <Col><hr /></Col>
                                </Row>
                                <Row>
                                    <Col>{movie.name}</Col>
                                    <Col>{movie.director}</Col>
                                    <Col>{movie.release_year}</Col>
                                    <Col>{movie.language}</Col>
                                    <Col>{movie.rating}</Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col><Button className="btn btn-success"><Link className="link" to={`/updateMovie/${movie.id}`}>Update</Link></Button> &nbsp;
                                    <Button className="btn btn-danger" onClick={() => deleteMovie(movie.id)}>Delete</Button></Col>
                                </Row>                               
                            </div>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}
