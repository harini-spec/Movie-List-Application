import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../Services/Axios';

export const MoviesComponent = ({movies, getMovies}) => {

    const { id } = useParams();

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

  return (
    <Container>
        <Row>
            <Col><h3>Movies List</h3></Col>
        </Row>
        <Row><Col><Button><Link style={{color:"white", textDecoration: "none"}} to="/addMovie">Add Movie</Link></Button></Col></Row>
        <Row className="mt-2">
            <Col>
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
                                    <Col><Button className="btn btn-danger" onClick={() => deleteMovie(movie.id)}>Delete</Button></Col>
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
