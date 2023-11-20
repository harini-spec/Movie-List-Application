import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from "../Services/Axios";

export const AddMovieComponent = () => {

    let Navigate = useNavigate();

    const [movie, setMovie] = useState({
        name: "",
        director: "",
        release_year: "",
        language: "",
        rating: 0
    });

    const onInputChange = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await api.post("/api/v1/movies", movie);
        Navigate("/");
    }

  return (
    <div>
        <div className='container'>
            <br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <br/>
                    <h3 className='text-center'>Movie Details</h3>
                    <div className='card-body'>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='form-group'>
                                <input placeholder="Movie Name" name="name" className='form-control' 
                                onChange={(e)=>onInputChange(e)}/>
                            </div><br/>

                            <div className='form-group'>
                                <input placeholder="Director" name="director" className='form-control' 
                                onChange={(e)=>onInputChange(e)}/>
                            </div><br/>

                            <div className='form-group'>
                                <input placeholder="Release Year" name="release_year" className='form-control' 
                                onChange={(e)=>onInputChange(e)}/>
                            </div><br/>

                            <div className='form-group'>
                                <input placeholder="Language" name="language" className='form-control' 
                                onChange={(e)=>onInputChange(e)}/>
                            </div><br/>

                            <div className='form-group'>
                                <input placeholder="Rating" name="rating" className='form-control' 
                                onChange={(e)=>onInputChange(e)}/>
                            </div><br/>

                            <button className='btn btn-primary'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>  
)}
