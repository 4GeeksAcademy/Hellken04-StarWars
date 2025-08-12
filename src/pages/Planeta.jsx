import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; 

export const Planeta = props => {
	const { theId } = useParams();

	let planet ;
	let imageUrl="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/"+theId+".jpg"

	let baseUrl ="https://www.swapi.tech/api/"

	function getPlanet() {
		let url = baseUrl + "planets/"+theId
		fetch(url)
			.then((response) => {
				console.log(response);
				if (response.ok == false) {
					throw new Error('Error al consultar los planetas');
				}
				return response.json();
			})
			.then((data) => {
				planet=data.result.properties;
				console.log("planet detail",planet)
			})
			.catch((error) => {
				alert(error);
			})
	}

	

	useEffect(()=>{
		getPlanet();
	},[planet])

	return (
		<div className="mt-3 container" >
			<div className="row">
				<div className="col-5">
					<img src={imageUrl} className="card-img-top" alt="..."/>
				</div>
				<div className="col-4">

				</div>
				<div className="col-3">

				</div>

			</div>
			<div className="row">
				<Link to="/"  className="btn btn-light p-1 m-1">Home</Link>
			</div>
				
		</div>
	);
}; 