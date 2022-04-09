import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';
import React from 'react';



function MovieDetail() {

    
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    const history = useHistory();


    const toHomePage = event => {
        history.push('/');
    }

    return (

        <>
            <h1>Movie Details</h1>
            <button onClick={toHomePage}>Back To List</button>
            <p>{details.title}</p>
            <img src={details.poster} />
            <p>{details.description}</p>
            <p>{genres.name}</p>

            {genres.map((genre, i) => {
                    return (
                        <p key={i}>
                            
                            {genre.name} 
                            </p>
                    );
                })}



        </>
    )





}

export default MovieDetail;

