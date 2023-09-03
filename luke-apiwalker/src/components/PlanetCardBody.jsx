const PlanetCardBody = (props) => {
	return (
		<div className="card-body">
			<p>
				<strong className="text-warning">Climate:</strong> {props.currentData.climate}{" "}
			</p>
			<p>
				<strong className="text-warning">Terrain:</strong> {props.currentData.terrain}
			</p>
			<p>
				<strong className="text-warning">Surface Water:</strong>{" "}
				{props.currentData.surface_water == 1 ? "yes" : "no"}{" "}
			</p>
			<p>
				<strong className="text-warning">Population:</strong> {props.currentData.population}
			</p>
		</div>
	);
};

export default PlanetCardBody;
