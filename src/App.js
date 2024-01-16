import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import MoviesList from './MoviesList';

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/movies')
			.then((resp) => resp.json())
			//.then((moviesData) => console.log(moviesData));
			//.then((moviesData) => setMovies(moviesData));
			.then(setMovies);
	}, []);

	return (
		<div className='App'>
			<Nav />
			<MoviesList movies={movies} />
		</div>
	);
}

export default App;
