import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function MovieItem({ movie }) {

    const dispatch = useDispatch();

    const handleDetails = () => {
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
        history.push('/details');
    }


    return (

    <section className="movies">

        
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} 
            onClick={handleDetails}/>
        </div>


    </section>
    )

}

export default MovieItem;

