import obiwan from "../obiwan.jpg";

const Error = () => {
	return (
		<div className="text-center mt-5">
			<p className="fw-bold fs-3">These aren't the droids you're looking for</p>
			<img src={obiwan} alt="obi-wan" style={{ height: 300 }} />
		</div>
	);
};

export default Error;
