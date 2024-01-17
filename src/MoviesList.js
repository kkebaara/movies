import { useState } from 'react';
import MovieCard from './MovieCard';
import Filters from './Filters2';

function MoviesList({ movies }) {
	const [greased, setGreased] = useState(false);

	// const greasedHogs = hogs.filter((hog) => hog.greased);
	// console.log(greasedHogs);

	//const hogsToDisplay = greased ? greasedHogs : hogs

	// const renderHogs = hogsToDisplay.map((hog) => (
	// 	<HogCard key={hog.name} oneHog={hog} />
	// ));

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
