/* function Filters() {
	return (
		<form>
			<input type='checkbox' />
		</form>
	);
}

export default Filters; */

function Filters({ greased, setGreased }) {
	//const [greased, setGreased] = useState(false); moved to movieslist

	function handleGreasedChanged() {
		setGreased((currentGreased) => !currentGreased);
	}

	return (
		<form>
			<label htmlFor='greased'>Greased</label>
			<input
				id='greased'
				type='checkbox' 
				checked={greased}
				onChange={handleGreasedChanged}
			/>
		</form>
	);
}

export default Filters;
