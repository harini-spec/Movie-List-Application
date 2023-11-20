import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../Services/Axios';


export const MovieListComponent = ({movies, getMovies}) => {

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
                <Col><h4>NAME</h4></Col>
                <Col><h4>DIRECTOR</h4></Col>
                <Col><h4>RELEASE YEAR</h4></Col>
                <Col><h4>LANGUAGE</h4></Col>
                <Col><h4>RATING</h4></Col>
            </Row>
            <Row>
                <Col><hr /></Col>
            </Row>
            <Row>
                {
                    movies?.map((movie) => {
                        return(
                            <div>
                                <Row>
                                    <Col>{movie.name}</Col>
                                    <Col>{movie.director}</Col>
                                    <Col>{movie.release_year}</Col>
                                    <Col>{movie.language}</Col>
                                    <Col>{movie.rating}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className="btn btn-success"><Link className="link" to={`/updateMovie/${movie.id}`}>Update</Link></Button>
                                        <Button className="btn btn-danger" onClick={() => deleteMovie(movie.id)}>Delete</Button>
                                    </Col>
                                </Row>   
                                <Row>
                                    <Col><hr /></Col>
                                </Row>                            
                            </div>
                        )
                    })
                }
            </Row>       
    </Container>
)
}
