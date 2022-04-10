import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/*
This component brings in the movie from the MovieList
component as a destructured prop. It also makes it so
when the user clicks on a movie, they are taken to the
movie details page where they can see the details of the
movie they clicked on.
*/
function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDetails = () => {
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
        history.push('/details');
    }

    return (

        <section className="movies">

            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title}
                    onClick={handleDetails} />
            </div>

        </section>
    )

}

export default MovieItem;

