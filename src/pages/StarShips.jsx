import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export const StarShips = props => {
	const { theId } = useParams();

	const [starShips, setStarShips] = useState(null);

	let imageUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/" + theId + ".jpg"

	let baseUrl = "https://www.swapi.tech/api/"

	function getStarShips() {
		let url = baseUrl + "starships/" + theId
		fetch(url)
			.then((response) => {
				console.log(response);
				if (response.ok == false) {
					throw new Error('Error al consultar los starShips');
				}
				return response.json();
			})
			.then((data) => {
				setStarShips(data.result.properties);
				console.log(starShips);
			})
			.catch((error) => {
				alert(error);
			})
	}

	useEffect(() => {
		getStarShips();
		console.log(starShips);
	}, [theId])

	return (
		<div className="mt-3 container bg-dark text-warning text-center" >
			<div className="row">
				<div className="col-6">
					<img src={imageUrl} className="card-img-top m-4" style={{ width: "20rem" }} alt="..." />
				</div>
				<div className="col-5 m-4">
					{starShips ? (
						<>
							<h1><b>{starShips.name}</b></h1>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus, suscipit inventore consectetur, quasi enim veritatis repellat quisquam sed ex architecto necessitatibus quis. Ut necessitatibus dolore, inventore eos ex impedit.</p>
						</>
					) : (
						<p>Cargando starShips...</p>
					)}

				</div>
				<div>
					{starShips ? (
						<div className="row m-4">
							<div className="col-2">
								<h5><b>Cargo Capacity</b></h5>
								<p>{starShips.cargo_capacity}</p>
							</div>
							<div className="col-2">
								<h5><b>Passengers</b></h5>
								<p>{starShips.passengers}</p>
							</div>
							<div className="col-2">
								<h5><b>Speed</b></h5>
								<p>{starShips.max_atmosphering_speed}</p>
							</div>
							<div className="col-2">
								<h5><b>Cost in Credits</b></h5>
								<p>{starShips.cost_in_credits}</p>
							</div>
							<div className="col-2">
								<h5><b>starship_class</b></h5>
								<p>{starShips.starship_class}</p>
							</div>
							<div className="col-2">
								<h5><b>Hyperdrive Rating</b></h5>
								<p>{starShips.hyperdrive_rating}</p>
							</div>
						</div>


					) : (
						<p>Cargando starShips...</p>
					)}
				</div>
				<div className="row">
					<Link to="/" className="btn btn-danger m-3" >Home</Link>
				</div>
			</div>

		</div>
			
	);
}; 