import { Link } from "react-router-dom";

const PeopleCardBody = (props) => {
	const handleClick = (url) => {
		props.fetchPlanet(url);
	};

	return (
		<div className="card-body">
			<p>
				<strong className="text-warning">Home World:</strong>{" "}
				<span
					className="text-decoration-underline"
					style={{ cursor: "pointer" }}
					onClick={() => handleClick(props.currentData.homeworld)}>
					{props.currentHomeworld}
				</span>
			</p>
			<p>
				<strong className="text-warning">Height:</strong> {props.currentData.height}{" "}
			</p>
			<p>
				<strong className="text-warning">Mass:</strong> {props.currentData.mass}
			</p>
			<p>
				<strong className="text-warning">Hair Color:</strong> {props.currentData.hair_color}
			</p>
			<p>
				<strong className="text-warning">Skin Color:</strong> {props.currentData.skin_color}
			</p>
		</div>
	);
};

export default PeopleCardBody;
