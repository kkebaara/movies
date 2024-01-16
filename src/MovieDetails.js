import React from 'react';

function MovieDetails(movie) {
	return (
		<ul>
			<li>{movie.description}</li>
			<li>{movie.duration}</li>
			<li>{movie.releaseDate}</li>
			<li>{movie.releaseYear}</li>
			{/* <li>{greased ? 'greased' : 'not greased'}</li> */}
		</ul>
	);
}

export default MovieDetails;
