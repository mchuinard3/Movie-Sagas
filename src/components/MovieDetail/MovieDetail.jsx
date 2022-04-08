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
            <div>{details.title}</div>
            <div>{details.description}</div>



        </>
    )





}

export default MovieDetail;

