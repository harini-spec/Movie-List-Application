import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import api from '../Services/Axios';
import { MovieListComponent } from './MovieListComponent';

export const FilterComponent = ({movies, getMovies, setMovies}) => {

    const movieList = movies;
    useEffect(() => {
        getMovies();
    },[])

    const filterByName = async (name) => {
        try{
            const response = await api.get(`api/v1/movies/search/${name}`);
            setMovies(response.data);
            console.log(movies);
        }
        catch(err){
            console.log(err);
        }
    }


  return (
    <div>
        <Container>

            <Row><h2>FILTERS</h2></Row><br/>

            <Row>
                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Movie Name">
                    {
                        movieList?.map((movie) => {
                            return(
                                <Dropdown.Item onClick={() => filterByName(movie.name)}>{movie.name}</Dropdown.Item>
                            )
                    })} 
                    </DropdownButton>
                </Col>

                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Director">
                    {
                        movieList?.map((movie) => {
                            return(
                                <Dropdown.Item href="/">{movie.director}</Dropdown.Item>
                            )
                    })} 
                    </DropdownButton>
                </Col>

                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Release Year">
                    {
                        movieList?.map((movie) => {
                            return(
                                <Dropdown.Item href="/">{movie.release_year}</Dropdown.Item>
                            )
                    })}
                    </DropdownButton>
                </Col>

                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Language">
                    {
                        movieList?.map((movie) => {
                            return(
                                <Dropdown.Item href="/">{movie.language}</Dropdown.Item>
                            )
                    })}
                    </DropdownButton>
                </Col>

                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Rating">
                    {
                        movieList?.map((movie) => {
                            return(
                                <Dropdown.Item href="/">{movie.rating}</Dropdown.Item>
                            )
                    })}
                    </DropdownButton>
                </Col>
            </Row>
            <Row>
                <MovieListComponent movies={movies} getMovies={getMovies}/>
            </Row>
        </Container>
    </div>
  );
}
