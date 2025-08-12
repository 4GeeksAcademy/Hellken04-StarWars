import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export const Personaje = props => {
	const { theId } = useParams();

	let imageUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/" + theId + ".jpg"
	let baseUrl = "https://www.swapi.tech/api/";
	let personaje;

	function getCharacter() {
		let url = baseUrl + "people/" + theId
		fetch(url)
			.then((response) => {
				console.log(response);
				if (response.ok == false) {
					throw new Error('Error al consultar ll personaje');
				}
				return response.json();
			})
			.then((data) => {
				personaje = data.result.properties;
				console.log("Personaje", personaje);
			})
			.catch((error) => {
				alert(error);
			})
	}



	useEffect(() => {
		getCharacter()
	}, [])

	return (
		<div className="mt-3 container" >
			<div className="row">
				<div className="col-5">
					<img src={imageUrl} className="card-img-top" alt="..." />
				</div>
				<div className="col-4">
					
				</div>
				<div className="col-3">

				</div>

			</div>
			<div className="row">
				<Link to="/" className="btn btn-light p-1 m-1">Home</Link>
			</div>

		</div>
	);
}; 