//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

export class ControlledInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
	}
	render() {
		return (
			<div>
				<h1>Controlled Input</h1>
				<input
					onChange={e => this.setState({ value: e.target.value })}
					value={this.state.value}></input>
				<br></br>
				{this.state.value}
				<br></br>
				<button
					onClick={() =>
						this.setState({
							value: this.state.value + "@gmail.com"
						})
					}>
					Extend Value
				</button>
			</div>
		);
	}
}
