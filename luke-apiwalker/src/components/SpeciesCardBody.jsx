const SpeciesCardBody = (props) => {
	return (
		<div className="card-body">
			<p>
				<strong className="text-warning">Classification:</strong> {props.currentData.classification}
			</p>
			<p>
				<strong className="text-warning">Average Height:</strong> {props.currentData.average_height}
			</p>
			<p>
				<strong className="text-warning">Average Lifespan:</strong> {props.currentData.average_lifespan}
			</p>
			<p>
				<strong className="text-warning">Skin Colors:</strong> {props.currentData.skin_colors}
			</p>
			<p>
				<strong className="text-warning">Hair Colors:</strong> {props.currentData.hair_colors}
			</p>
		</div>
	);
};

export default SpeciesCardBody;
