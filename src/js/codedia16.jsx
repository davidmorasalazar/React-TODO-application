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
	const [tarea, setTarea] = React.useState("");
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
	return (
		<div className="container">
			<h1 className="text-center">CRUD de Tareas con React</h1>
			<div className="row">
				<div className="col-8">
					<h4 className="text-center">Lista de Tareas</h4>
					<ul className="list-group">
						{arrayTareas.map(item => (
							<li className="list-group-item" key={item.id}>
								<span className="lead">{item.nombreTarea}</span>
							</li>
						))}
					</ul>
				</div>
				<div className="col-4">
					<h4 className="text-center">Añadir Tareas</h4>
					<form onSubmit={agregarTarea}>
						<input
							type="text"
							className="form-control mb-2"
							placeholder="Ingrese Tarea"
							onChange={e => setTarea(e.target.value)}
							value={tarea}
						/>
						<button
							className="btn btn-dark btn-block"
							type="submit">
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
