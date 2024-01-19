import React, { useState } from 'react';

const Dropdown = () => {
	const [selectedGenre, setSelectedGenre] = useState('');

	const handleGenreChange = (event) => {
		setSelectedGenre(event.target.value);
	};

	return (
		<div>
			<label htmlFor='genres'>Select Genre:</label>
			<select id='genres' value={selectedGenre} onChange={handleGenreChange}>
				<option value=''>-- Choose a genre --</option>
				<option value='Action'>Action</option>
				<option value='Thriller'>Thriller</option>
				<option value='Crime drama'>Crime Drama</option>
				<option value='Mystery'>Mystery</option>
				<option value='Children'>Children</option>
				<option value='Comedy'>Comedy</option>
				<option value='Adventure'>Adventure</option>
				<option value='Animated'>Animated</option>
				<option value='Drama'>Drama</option>
				<option value='Western'>Western</option>
				<option value='Comedy drama'>Comedy Drama</option>
				<option value='Historical drama'>Historical Drama</option>
				<option value='Biography'>Biography</option>
				<option value='Horror'>Horror</option>
				<option value='Fantasy'>Fantasy</option>
				<option value='Dark comedy'>Dark Comedy</option>
				<option value='Science fiction'>Science Fiction</option>
			</select>

			{selectedGenre && <p>Selected Genre: {selectedGenre}</p>}
		</div>
	);
};

export default Dropdown;
