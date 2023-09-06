import Card from "./views/Card";
import Form from "./views/Form";
import Error from "./views/Error";
import axios from "axios";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./views/Welcome";

function App() {
	const [currentData, setCurrentData] = useState([]);
	const [currentGroup, setCurrentGroup] = useState("");
	const [currentHomeworld, setCurrenHomeworld] = useState("");
	const navigate = useNavigate();

	const fetchPlanet = (url) => {
		setCurrentGroup("planets");
		axios.get(`${url}`).then((response) => {
			setCurrentData(response.data);
			navigate("/homeworld");
		});
	};

	return (
		<div className="container mt-5 d-flex flex-column">
			<Form
				setCurrentGroup={setCurrentGroup}
				setCurrentData={setCurrentData}
				setCurrenHomeworld={setCurrenHomeworld}
			/>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route
					path="/:group/:id"
					element={
						<Card
							currentData={currentData}
							currentGroup={currentGroup}
							currentHomeworld={currentHomeworld}
							fetchPlanet={fetchPlanet}
						/>
					}
				/>
				<Route
					path="/homeworld"
					element={
						<Card
							currentData={currentData}
							currentGroup={currentGroup}
							currentHomeworld={currentHomeworld}
						/>
					}
				/>
				<Route path="/error" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
