import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import React from 'react';
import MovieDetail from '../MovieDetail/MovieDetail';

/*
This component contains the route path for the 
home page, as well as the movie details page.
*/
function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>

        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <MovieDetail />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
