import { useState } from "react";

const Form = (props) => {
	const searchParams = ["People", "Planets", "Species"];
	const [searchGroup, setSearchGroup] = useState("people");
	const [searchID, setSearchID] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();

		props.fetchData(searchGroup, searchID);
	};

	return (
		<div className="d-flex justify-content-center align-items-center">
			<form onSubmit={handleSubmit} className="d-flex gap-3 w-50 justify-content-between align-items-center">
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
				<div className="d-flex align-items-center flex-1 gap-3">
					<label className="form-label text-end m-0">ID:</label>
					<input
						type="number"
						className="form-control"
						value={searchID}
						onChange={(e) => setSearchID(e.target.value)}
					/>
				</div>
				<div className="align-self-end text-center">
					<button className="btn btn-warning">Search</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
