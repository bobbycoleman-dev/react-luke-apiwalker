const Welcome = () => {
	return (
		<div className="mt-4 text-center">
			<h1 className="mb-3">Welcome to Luke APIwalker!</h1>
			<p className="text-center w-50 mx-auto">
				Search the Star Wars API (SWAPI) by first selecting <span className="text-warning">People</span>,
				<span className="text-warning"> Planets</span>, or <span className="text-warning"> Species</span>, then
				typing in a random <span className="text-warning"> ID</span>. The People category will also have links
				to each persons <span className="text-warning">Home World</span>.
			</p>
		</div>
	);
};

export default Welcome;
