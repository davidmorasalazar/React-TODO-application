import React from "react";
import shortid from "shortid";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//include images into your bundle
//create your first component
export function Form() {
	const [tarea, setTarea, setNew] = React.useState("");
	const [arrayTareas, setArrayTareas] = React.useState([]);
	const agregarTarea = e => {
		e.preventDefault();
		setArrayTareas([
			...arrayTareas,
			{
				id: shortid.generate(),
				nombreTarea: tarea
			}
		]);
		setTarea("");
	};
	// const result = setArrayTareas.filter(word => word.length > 3);
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<form onSubmit={agregarTarea}>
						<input
							type="text"
							className="form-control mb-2"
							placeholder="Ingrese Tarea y presione ENTER"
							onChange={e => setTarea(e.target.value)}
							value={tarea}
						/>
						{/* <button
							className="btn btn-dark btn-block"
							type="submit">
							Agregar
						</button> */}
					</form>
					<ul className="list-group paper">
						{arrayTareas.map(item => (
							<li className="list-group-item" key={item.id}>
								<span className="lead">{item.nombreTarea}</span>
								<button
									className="fas fa-times"
									onClick={() => {
										const newarrTareas = arrayTareas.filter(
											hwork => hwork.id != item.id
										);
										setArrayTareas([...newarrTareas]);
									}}></button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
