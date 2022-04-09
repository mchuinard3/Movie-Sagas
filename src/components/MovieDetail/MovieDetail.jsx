import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';



function MovieDetail() {

    const dispatch = useDispatch();
    const details = useSelector(store => store.details);


    const toHomePage = event => {
        history.push('/');
    }

    return (

        <>
            <h1>Movie Details</h1>
            <button onClick={toHomePage}>Back To List</button>
            <p>{details.title}</p>
            <img src={details.poster}/>
            <p>{details.description}</p>



        </>
    )





}

export default MovieDetail;

