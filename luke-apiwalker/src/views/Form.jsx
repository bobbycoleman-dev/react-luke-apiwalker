import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import axios from "axios";

const Form = (props) => {
	const searchParams = ["People", "Planets", "Species"];
	const [searchGroup, setSearchGroup] = useState("people");
	const [searchID, setSearchID] = useState(1);
	const navigate = useNavigate();
	const { setCurrentGroup, setCurrentData, setCurrenHomeworld } = props;

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
						axios
							.get(`${response.homeworld}`)
							.then((response) => {
								setCurrenHomeworld(response.data.name);
							})
							.catch((err) => console.log(err));
					}
					navigate(`${group}/${id}`);
				} else {
					navigate("/error");
				}
			})
			.catch((err) => {
				navigate("/error");
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		fetchData(searchGroup, searchID);
	};

	return (
		<div className="d-flex justify-content-center align-items-center">
			<form onSubmit={handleSubmit} className="d-flex gap-3 w-50 justify-content-between align-items-center">
				{/* SELECT FIELD */}
				<div className="d-flex align-items-center gap-3">
					<label className="form-label text-end m-0" style={{ width: 200 }}>
						Search For:
					</label>
					<select
						name="searchParams"
						className="form-select"
						onChange={(e) => setSearchGroup(e.target.value)}>
						{searchParams.map((param, idx) => {
							return (
								<option key={idx} value={`${param.toLowerCase()}`}>
									{param}
								</option>
							);
						})}
					</select>
				</div>

				{/* ID INPUT FIELD */}
				<div className="d-flex align-items-center flex-1 gap-3">
					<label className="form-label text-end m-0">ID:</label>
					<input
						type="number"
						className="form-control"
						value={searchID}
						onChange={(e) => setSearchID(e.target.value)}
					/>
				</div>

				{/* SUBMIT BUTTON */}
				<Button buttonText={"Find"} />
			</form>
		</div>
	);
};

export default Form;
