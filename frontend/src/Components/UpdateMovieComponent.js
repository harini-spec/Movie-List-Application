import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import api from "../Services/Axios";

export const UpdateMovieComponent = () => {

    let Navigate = useNavigate();

    const { id } = useParams();

    const [movie, setMovie] = useState({
        name: "",
        director: "",
        release_year: "",
        language: "",
        rating: ""
    });

    const { name, director, release_year, language, rating } = movie;

    const onInputChange = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value});
    }

    useEffect(() =>{
        getMovie();
    }, [])

    const getMovie = async () => {
        try{
            const response = await api.get(`api/v1/movies/${id}`);
            setMovie(response.data);
            console.log(id);
        }
        catch(err){
            console.log(err);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await api.put(`/api/v1/movies/${id}`, movie);
        Navigate("/");
    } 

  return (
    <div>
    <div className='container'>
    <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
            <br></br>
                <h3 className='text-center'>Movie Details</h3>
                    <div className='card-body'>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='form-group'>
                                <input type={"text"} placeholder="Movie Name" name="name" className='form-control' value={name}
                                onChange={(e)=>onInputChange(e)}/>
                            </div><br/>

                            <div className='form-group'>
                                <input placeholder="Director" name="director" className='form-control' value={director}
                                onChange={(e)=>onInputChange(e)}/>
                            </div><br/>

                            <div className='form-group'>
                                <input placeholder="Release Year" name="release_year" className='form-control' value={release_year}
                                onChange={(e)=>onInputChange(e)}/>
                            </div><br/>

                            <div className='form-group'>
                                <input placeholder="Language" name="language" className='form-control' value={language}
                                onChange={(e)=>onInputChange(e)}/>
                            </div><br/>

                            <div className='form-group'>
                                <input placeholder="Rating" name="rating" className='form-control' value={rating}
                                onChange={(e)=>onInputChange(e)}/>
                            </div><br/>

                            <button className='btn btn-primary'>Add</button>
                        </form>
                    </div>
            </div>
        </div>
    </div>
</div>  )
}
