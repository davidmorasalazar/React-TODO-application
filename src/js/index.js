//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { ControlledInput } from "./controlled.js";
import { Form } from "./codedia16.jsx";

export class General extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="container">
				<div>
					<h1 className="center">Todos</h1>
				</div>
				<div className="margin">
					<Form />
				</div>
				{/* <ControlledInput /> */}
			</div>
		);
	}
}

//render your react application
ReactDOM.render(<General />, document.querySelector("#app"));
