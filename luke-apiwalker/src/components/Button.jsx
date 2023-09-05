import React from "react";

const Button = ({ buttonText }) => {
	return (
		<div className="align-self-end text-center">
			<button className="btn btn-warning">{buttonText}</button>
		</div>
	);
};

export default Button;
