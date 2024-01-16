import { useState } from 'react';
import MovieDetails from './MovieDetails';

function MovieCard({ movie }) {
	const [showDetails, setShowDetails] = useState(false);

	console.log(movie);

	function handleClick() {
		setShowDetails((currentShowDetails) => !currentShowDetails);
		//setShowDetails(!showDetails);
	}

	// function changeState(currentShowDetails) {
	// 	return !currentShowDetails;
	// }

	function displayDetails() {
		if (showDetails) {
			return (
				<MovieDetails
					description={movie.description}
					duration={movie.duration}
					releaseDate={movie.releaseDate}
					releaseYear={movie.releaseYear}
				/>
			);
		}
	}

	return (
		<article className='pigTile' onClick={handleClick}>
			<h3>
				{movie.title}, {movie.genres}
			</h3>
			<img src={movie.image} alt={movie.title} className='minPigTile' />
			{displayDetails()}
		</article>
	);
}

export default MovieCard;
