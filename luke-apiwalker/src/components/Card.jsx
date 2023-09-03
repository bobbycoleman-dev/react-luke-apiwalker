import PeopleCardBody from "./PeopleCardBody";
import PlanetCardBody from "./PlanetCardBody";
import SpeciesCardBody from "./SpeciesCardBody";

const Card = (props) => {
	const { currentData, currentGroup, currentHomeworld } = props;

	const cardBody = () => {
		switch (currentGroup) {
			case "people":
				return (
					<PeopleCardBody
						currentData={currentData}
						currentHomeworld={currentHomeworld}
						fetchPlanet={props.fetchPlanet}
					/>
				);
			case "planets":
				return <PlanetCardBody currentData={currentData} />;
			case "species":
				return <SpeciesCardBody currentData={currentData} />;
			default:
				return null;
		}
	};

	return (
		<div className="card shadow mt-4 mx-auto">
			<div className="card-header text-center">
				<h2 className="text-warning">{currentData.name}</h2>
			</div>

			{cardBody()}
		</div>
	);
};

export default Card;
