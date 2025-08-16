import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Personaje = props => {
	const { theId } = useParams();

	const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${theId}.jpg`;
	const baseUrl = "https://www.swapi.tech/api/";

	const [personaje, setPersonaje] = useState(null);
	const [cargar, setCargar] = useState(true);

	function getCharacter() {
		const url = `${baseUrl}people/${theId}`;
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Error al consultar el personaje');
				}
				return response.json();
			})
			.then((data) => {
				setPersonaje(data.result.properties);
				console.log(personaje);
			})
			.catch((error) => {
				alert(error);
			});
	}

	useEffect(() => {
		getCharacter();
	}, [theId]);

	return (
		<div className="mt-3 container bg-dark text-warning text-center">
			<div className="row">
				<div className="col-5">
					<img src={imageUrl} className="card-img-top m-4" style={{ width: "20rem" }} alt="..." />
				</div>
				<div className="col-6 text-center m-4">
					<div className="row">
						{personaje ? (
							<>
								<h1><b>{personaje.name}</b></h1>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus, suscipit inventore consectetur, quasi enim veritatis repellat quisquam sed ex architecto necessitatibus quis. Ut necessitatibus dolore, inventore eos ex impedit.</p>
							</>
						) : (
							<p>Cargando personaje...</p>
						)}
					</div>
					<div>
						{personaje ? (
							<div className="row m-4">
								<div className="col-2">
									<h5><b>Gender</b></h5>
									<p>{personaje.gender}</p>
								</div>
								<div className="col-2">
									<h5><b>Skin Color</b></h5>
									<p>{personaje.skin_color}</p>
								</div>
								<div className="col-2">
									<h5><b>Hair Color</b></h5>
									<p>{personaje.hair_color}</p>
								</div>
								<div className="col-2">
									<h5><b>Height</b></h5>
									<p>{personaje.height}</p>
								</div>
								<div className="col-2">
									<h5><b>Eye Color</b></h5>
									<p>{personaje.eye_color}</p>
								</div>
								<div className="col-2">
									<h5><b>Mass</b></h5>
									<p>{personaje.mass}</p>
								</div>
							</div>


						) : (
							<p>Cargando personaje...</p>
						)}
					</div>
					<div className="row">
						<Link to="/" className="btn btn-danger m-1" >Home</Link>
					</div>
				</div>

			</div>

		</div>
	);
};
