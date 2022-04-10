import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';


/*
This component loops through the movies reducer from
the redux store, and then displays a list of all the
movies and their respective covers on the home page.
*/
function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map((movie, i) => {
                    return (
                        <MovieItem
                            key={i}
                            movie={movie} />
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;