import { useState } from 'react';

import MovieCard from './MovieCard';
import Filters from './Filters';

function MoviesList({ movies }) {
	const [greased, setGreased] = useState(false);

	const renderMovies = movies.map((movie) => (
		<MovieCard key={movie.id} movie={movie} />
	));

	return (
		<div>
			<Filters greased={greased} setGreased={setGreased} />
			{renderMovies}
		</div>
	);
}

export default MoviesList;
