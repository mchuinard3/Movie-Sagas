import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';

/*
This component displays the button on the DOM that takes
the user back to the home page. It also displays the title,
poster, description, and genres of the movie that the user 
clicks on.
*/
function MovieDetail() {

    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    const toHomePage = event => {
        history.push('/');
    }

    return (

        <div className="details">

            <h1>Movie Details</h1>
            <button className="detailsButton" onClick={toHomePage}>Back To List</button>
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

        </div>
    )
}

export default MovieDetail;

