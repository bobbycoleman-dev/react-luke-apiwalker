import Card from "./components/Card";
import Form from "./views/Form";
import Error from "./views/Error";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./views/Welcome";

function App() {
	const [currentData, setCurrentData] = useState([]);
	const [currentGroup, setCurrentGroup] = useState("");
	const [currentHomeworld, setCurrenHomeworld] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/");
	}, []);

	const fetchData = (group, id) => {
		setCurrentGroup(group);
		const base = "https://swapi.dev/api/";

		fetch(`${base}${group}/${id}`)
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				setCurrentData(response);

				if (!response.detail) {
					if (group == "people") {
						axios.get(`${response.homeworld}`).then((response) => {
							setCurrenHomeworld(response.data.name);
						});
					}
					console.log(currentHomeworld);
					navigate(`${group}/${id}`);
				} else {
					navigate("/error");
				}
			})
			.catch((err) => {
				navigate("/error");
			});
	};

	const fetchPlanet = (url) => {
		setCurrentGroup("planets");
		axios.get(`${url}`).then((response) => {
			setCurrentData(response.data);
			navigate("/homeworld");
		});
	};

	return (
		<div className="container mt-5 d-flex flex-column">
			<Form fetchData={fetchData} />
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