import { useState } from 'react';
import MovieCard from './MovieCard';
import Filters from './Filters2';
import Dropdown from './FiltersDD';

function MoviesList({ movies }) {
	const [greased, setGreased] = useState(false);
	const [selectedGenre, setSelectedGenre] = useState([]);

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
			<Dropdown
				selectedGenre={selectedGenre}
				setSelectedGenre={setSelectedGenre}
			/>
			{renderMovies}
		</div>
	);
}

export default MoviesList;
